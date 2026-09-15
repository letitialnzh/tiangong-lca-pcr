import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  fsyncSync,
  lstatSync,
  openSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { randomUUID } from "node:crypto";
import path from "node:path";

import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { assertClassificationMapping } from "./schema-contracts.mjs";
import {
  CPC_3_ACCEPTED_MAPPING_PATH,
  CPC_3_LEAF_SLUGS_PATH,
  createPcrIdAliasRegistry,
  PCR_ID_ALIASES_PATH,
} from "../scripts/build-pcr-id-aliases.mjs";

export const CANDIDATE_PROMOTION_DECIDED_BY = "tiangong-lca-pcr-maintainers";
export const CANDIDATE_PROMOTION_DECISION_REF =
  "docs/classification-policy.md#candidate-promotion-mapping";

const UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });
const READ_FLAGS = fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0);

function mappingPathFor(reference) {
  const system = String(reference.system).trim().toLowerCase();
  const version = String(reference.version).trim();
  if (!/^[a-z0-9][a-z0-9-]*$/u.test(system) || !/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(version)) {
    throw new Error(
      `Cannot derive a safe classification mapping path from ${String(reference.system)}:${version}`,
    );
  }
  return `classifications/mappings/${system}-${version}-to-pcr.yaml`;
}

function managedPath(root, relativePath) {
  const resolved = path.resolve(root, ...relativePath.split("/"));
  const relative = path.relative(path.resolve(root), resolved);
  if (relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    throw new Error(`Managed classification path escapes repository root: ${relativePath}`);
  }
  return resolved;
}

function assertManagedPath(root, relativePath, finalKind = "file") {
  const resolved = managedPath(root, relativePath);
  let current = path.resolve(root);
  const segments = relativePath.split("/").filter(Boolean);
  for (const [index, segment] of segments.entries()) {
    current = path.join(current, segment);
    const stats = lstatSync(current);
    if (stats.isSymbolicLink()) {
      throw new Error(`Managed classification path contains a symbolic link: ${relativePath}`);
    }
    const last = index === segments.length - 1;
    if (!last && !stats.isDirectory()) {
      throw new Error(`Managed classification path has a non-directory parent: ${relativePath}`);
    }
    if (last && finalKind === "file" && !stats.isFile()) {
      throw new Error(`Managed classification path is not a regular file: ${relativePath}`);
    }
  }
  return resolved;
}

function readManagedUtf8(root, relativePath) {
  const filePath = assertManagedPath(root, relativePath, "file");
  const pathStat = lstatSync(filePath);
  if (pathStat.isSymbolicLink() || !pathStat.isFile()) {
    throw new Error(`Managed classification input must be a regular non-symlink file: ${relativePath}`);
  }
  const descriptor = openSync(filePath, READ_FLAGS);
  try {
    const opened = fstatSync(descriptor);
    const current = lstatSync(filePath);
    if (!opened.isFile() || current.isSymbolicLink() || opened.dev !== current.dev || opened.ino !== current.ino) {
      throw new Error(`Managed classification input changed while being opened: ${relativePath}`);
    }
    return UTF8_DECODER.decode(readFileSync(descriptor));
  } finally {
    closeSync(descriptor);
  }
}

function writeManagedUtf8Atomic(root, relativePath, content) {
  const outputPath = assertManagedPath(root, relativePath, "file");
  const parent = path.dirname(outputPath);
  const parentStat = lstatSync(parent);
  if (parentStat.isSymbolicLink() || !parentStat.isDirectory()) {
    throw new Error(`Managed classification output parent is unsafe: ${relativePath}`);
  }
  if (existsSync(outputPath)) {
    const outputStat = lstatSync(outputPath);
    if (outputStat.isSymbolicLink() || !outputStat.isFile()) {
      throw new Error(`Managed classification output is not a regular non-symlink file: ${relativePath}`);
    }
  }
  const temporaryPath = path.join(parent, `.${path.basename(outputPath)}.${process.pid}.${randomUUID()}.tmp`);
  let descriptor;
  try {
    descriptor = openSync(
      temporaryPath,
      fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | (fsConstants.O_NOFOLLOW ?? 0),
      0o644,
    );
    writeFileSync(descriptor, content, "utf8");
    fsyncSync(descriptor);
    closeSync(descriptor);
    descriptor = undefined;
    renameSync(temporaryPath, outputPath);
  } finally {
    if (descriptor !== undefined) closeSync(descriptor);
    if (existsSync(temporaryPath)) unlinkSync(temporaryPath);
  }
}

function compareMappingEdges(left, right) {
  return String(left.code).localeCompare(String(right.code), "en");
}

function normalizedReferences(manifest) {
  const references = Array.isArray(manifest.classification_refs) ? manifest.classification_refs : [];
  if (references.length === 0) {
    throw new Error(
      "Scaffold-to-candidate promotion requires at least one manifest.classification_refs entry so accepted mappings can be created.",
    );
  }
  const seen = new Set();
  return references.map((reference) => {
    const normalized = {
      system: String(reference.system).trim(),
      version: String(reference.version).trim(),
      code: String(reference.code).trim(),
      title: String(reference.title).trim(),
      mapping_type: String(reference.mapping_type).trim(),
    };
    const coordinate = `${normalized.system.toLowerCase()}:${normalized.version}:${normalized.code}`;
    if (seen.has(coordinate)) {
      throw new Error(`Duplicate classification reference on scaffold promotion: ${coordinate}`);
    }
    seen.add(coordinate);
    if (!normalized.code || !normalized.title || normalized.mapping_type === "manual_review") {
      throw new Error(`Classification reference ${coordinate} is not an accepted positive mapping candidate.`);
    }
    return normalized;
  });
}

export function planCandidatePromotionMappings({ root, manifest, decidedAtUtc }) {
  const references = normalizedReferences(manifest);
  const documents = new Map();
  const baselines = new Map();
  const touched = new Set();
  const changedCoordinates = [];

  for (const reference of references) {
    const mappingPath = mappingPathFor(reference);
    let document = documents.get(mappingPath);
    if (!document) {
      const baseline = readManagedUtf8(root, mappingPath);
      document = parseYaml(baseline);
      assertClassificationMapping(document, { entityKind: "classification mapping", source: mappingPath });
      if (document.schema_version !== 2 || document.status !== "current") {
        throw new Error(`${mappingPath} must be an accepted-only schema_version 2 mapping with status current.`);
      }
      if (
        String(document.classification_system).toLowerCase() !== reference.system.toLowerCase()
        || String(document.classification_version) !== reference.version
      ) {
        throw new Error(`${mappingPath} does not match classification reference ${reference.system}:${reference.version}.`);
      }
      document = structuredClone(document);
      documents.set(mappingPath, document);
      baselines.set(mappingPath, baseline);
    }

    const existing = document.mappings.find((edge) => String(edge.code) === reference.code);
    if (existing) {
      if (
        existing.pcr_id !== manifest.id
        || existing.label !== reference.title
        || existing.mapping_type !== reference.mapping_type
        || existing.acceptance?.status !== "accepted"
      ) {
        throw new Error(
          `${mappingPath} already maps ${reference.code} differently; scaffold promotion will not replace an accepted edge.`,
        );
      }
      continue;
    }

    document.mappings.push({
      code: reference.code,
      label: reference.title,
      pcr_id: manifest.id,
      mapping_type: reference.mapping_type,
      confidence: "reviewed",
      acceptance: {
        status: "accepted",
        decided_by: CANDIDATE_PROMOTION_DECIDED_BY,
        decided_at_utc: decidedAtUtc,
        decision_ref: CANDIDATE_PROMOTION_DECISION_REF,
      },
    });
    document.mappings.sort(compareMappingEdges);
    touched.add(mappingPath);
    changedCoordinates.push(`${reference.system.toLowerCase()}:${reference.version}:${reference.code}`);
  }

  const artifacts = [...documents.entries()].filter(([relativePath]) => touched.has(relativePath)).map(([relativePath, document]) => {
    assertClassificationMapping(document, { entityKind: "classification mapping", source: relativePath });
    return { relativePath, expectedCurrent: baselines.get(relativePath), content: renderYaml(document) };
  });

  const cpcMapping = documents.get(CPC_3_ACCEPTED_MAPPING_PATH);
  let aliasUpdated = false;
  if (cpcMapping) {
    const leafSlugs = JSON.parse(readManagedUtf8(root, CPC_3_LEAF_SLUGS_PATH));
    const registry = createPcrIdAliasRegistry({ leafSlugs, mapping: cpcMapping });
    artifacts.push({
      relativePath: PCR_ID_ALIASES_PATH,
      expectedCurrent: readManagedUtf8(root, PCR_ID_ALIASES_PATH),
      content: renderYaml(registry),
    });
    aliasUpdated = true;
  }

  return { artifacts, changedCoordinates, aliasUpdated };
}

export function installCandidatePromotionMappings(root, plan) {
  for (const artifact of plan.artifacts) {
    if (readManagedUtf8(root, artifact.relativePath) !== artifact.expectedCurrent) {
      throw new Error(
        `${artifact.relativePath} changed after lifecycle promotion preflight; no classification artifact was installed.`,
      );
    }
  }
  for (const artifact of plan.artifacts) {
    writeManagedUtf8Atomic(root, artifact.relativePath, artifact.content);
  }
  return plan.changedCoordinates;
}
