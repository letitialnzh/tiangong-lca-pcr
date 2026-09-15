import {
  existsSync,
  lstatSync,
  readFileSync,
} from "node:fs";
import path from "node:path";

import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { validateEvidencePack } from "./schema-contracts.mjs";

const PACK_FILE_NAME = "evidence-pack.yaml";

function resolvePackPath(root, requestedPath) {
  const candidate = path.isAbsolute(String(requestedPath))
    ? String(requestedPath)
    : path.resolve(root, String(requestedPath));
  return candidate;
}

function readPackFile(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`Evidence pack does not exist: ${filePath}`);
  }
  const stats = lstatSync(filePath);
  if (stats.isSymbolicLink() || !stats.isFile()) {
    throw new Error(`Evidence pack must be a regular file and not a symbolic link: ${filePath}`);
  }
  return parseYaml(readFileSync(filePath, "utf8"));
}

function duplicateIds(items, key, label) {
  const seen = new Set();
  const problems = [];
  for (const [index, item] of (items ?? []).entries()) {
    const id = item?.[key];
    if (seen.has(id)) {
      problems.push(`${label}[${index}] duplicates ${key} "${id}"`);
    }
    seen.add(id);
  }
  return problems;
}

export function evidencePackSemanticProblems(pack) {
  const problems = [];
  const sources = Array.isArray(pack?.sources) ? pack.sources : [];
  const claims = Array.isArray(pack?.claims) ? pack.claims : [];
  const identityBindings = Array.isArray(pack?.identity_bindings) ? pack.identity_bindings : [];
  const conflicts = Array.isArray(pack?.conflicts) ? pack.conflicts : [];
  const gaps = Array.isArray(pack?.gaps) ? pack.gaps : [];
  const sourceIds = new Set(sources.map((source) => source?.source_id));
  const bindingIds = new Set(identityBindings.map((binding) => binding?.binding_id));

  problems.push(...duplicateIds(sources, "source_id", "sources"));
  problems.push(...duplicateIds(claims, "claim_id", "claims"));
  problems.push(...duplicateIds(identityBindings, "binding_id", "identity_bindings"));
  problems.push(...duplicateIds(conflicts, "conflict_id", "conflicts"));
  problems.push(...duplicateIds(gaps, "gap_id", "gaps"));

  for (const [index, binding] of identityBindings.entries()) {
    if (binding?.derived_from_binding && !bindingIds.has(binding.derived_from_binding)) {
      problems.push(
        `identity_bindings[${index}] references unknown derived_from_binding "${binding.derived_from_binding}"`,
      );
    }
  }

  for (const [index, claim] of claims.entries()) {
    const references = Array.isArray(claim?.sources) ? claim.sources : [];
    for (const [sourceIndex, reference] of references.entries()) {
      if (!sourceIds.has(reference?.source_id)) {
        problems.push(
          `claims[${index}].sources[${sourceIndex}] references unknown source_id "${reference?.source_id}"`,
        );
      }
    }
    const supporting = references.filter((reference) => reference?.relation === "supports");
    const contradicting = references.filter((reference) => reference?.relation === "contradicts");
    if (["supported", "partially_supported"].includes(claim?.status) && supporting.length === 0) {
      problems.push(`claims[${index}] marked ${claim.status} but has no supporting source`);
    }
    if (claim?.status === "contradicted" && contradicting.length === 0) {
      problems.push(`claims[${index}] marked contradicted but has no contradicting source`);
    }
  }

  for (const [index, conflict] of conflicts.entries()) {
    for (const sourceId of conflict?.source_ids ?? []) {
      if (!sourceIds.has(sourceId)) {
        problems.push(`conflicts[${index}] references unknown source_id "${sourceId}"`);
      }
    }
    if (conflict?.status === "unresolved" && conflict?.resolution) {
      problems.push(`conflicts[${index}] is unresolved but contains a resolution`);
    }
  }

  return problems;
}

export function checkEvidencePack(options = {}) {
  const root = path.resolve(String(options.root ?? path.resolve(".")));
  if (!options["evidence-pack"]) {
    throw new Error("research-check requires --evidence-pack <path>");
  }
  const filePath = resolvePackPath(root, options["evidence-pack"]);
  const pack = readPackFile(filePath);
  const schemaResult = validateEvidencePack(pack);
  const problems = schemaResult.errors.map(
    (error) => `schema ${error.instance_path} ${error.message}`,
  );
  if (problems.length === 0) {
    problems.push(...evidencePackSemanticProblems(pack));
  }
  if (problems.length > 0) {
    throw new Error(
      `Evidence pack validation failed at ${filePath}:\n${problems.map((problem) => `- ${problem}`).join("\n")}`,
    );
  }

  const unresolvedClaims = pack.claims.filter((claim) =>
    ["provisional", "inconclusive"].includes(claim.status),
  ).length;
  const unresolvedConflicts = pack.conflicts.filter((conflict) => conflict.status === "unresolved").length;
  const openGaps = pack.gaps.filter((gap) => gap.status !== "closed").length;
  return [
    `Evidence pack OK: ${filePath}`,
    `Target: ${pack.target.pcr_id}`,
    `Sources: ${pack.sources.length}; claims: ${pack.claims.length}; ` +
      `identity bindings: ${pack.identity_bindings.length}; ` +
      `provisional/inconclusive claims: ${unresolvedClaims}; ` +
      `unresolved conflicts: ${unresolvedConflicts}; open gaps: ${openGaps}`,
  ];
}

export { PACK_FILE_NAME };
