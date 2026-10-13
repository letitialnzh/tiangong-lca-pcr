import { isUnknownRecord, unknownField, errorMessage, errorCode, type UnknownRecord } from "../../packages/pcr-core/src/types.ts";
import type {PcrIdAlias} from "../../packages/pcr-core/src/pcr-id-aliases.ts";
export interface LeafSlugIdentity extends UnknownRecord {code:unknown;title:string;pcr_id:string;pcr_dir:string}
export interface LeafSlugInventory {schema_version:1;classification_system:string;classification_version:string;leaves:unknown[]}
interface AcceptedMapping {schema_version:number;status:string;classification_system:string;classification_version:string;mappings:{code:string;label:string;pcr_id:string;acceptance:{status:string}}[]}
import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  fsyncSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { TextDecoder } from "node:util";

import { assertClassificationMapping } from "../lib/schema-contracts.ts";
import { assertPcrIdAliases } from "../../packages/pcr-core/src/contracts.ts";
import { readPcrIdAliases } from "../../packages/pcr-core/src/pcr-id-aliases.ts";
import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.ts";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const FATAL_UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });
const MANAGED_READ_FLAGS =
  fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW | fsConstants.O_NONBLOCK;

export const PCR_ID_ALIASES_PATH = "classifications/aliases/pcr-id-aliases.yaml";
export const CPC_3_LEAF_SLUGS_PATH =
  "classifications/systems/cpc/3.0/normalized/leaf-slugs.json";
export const CPC_3_ACCEPTED_MAPPING_PATH = "classifications/mappings/cpc-3.0-to-pcr.yaml";
export const PCR_ID_ALIAS_DECISION_REF =
  "docs/adr/0003-retire-cpc-leaf-derived-pcr-identities.md";

export function createPcrIdAliasRegistry({ leafSlugs, mapping: rawMapping }: {leafSlugs:unknown;mapping:unknown}) {
  assertLeafSlugInventory(leafSlugs);
  assertClassificationMapping(rawMapping, {
    entityKind: "classification mapping",
    source: CPC_3_ACCEPTED_MAPPING_PATH,
  });
  if (unknownField(rawMapping,"schema_version") !== 2 || unknownField(rawMapping,"status") !== "current") {
    throw new Error("PCR id aliases require an accepted-only mapping v2 document with status current");
  }
  const mapping=rawMapping as AcceptedMapping;
  if (
    String(mapping.classification_system).toLowerCase()
      !== String(leafSlugs.classification_system).toLowerCase()
    || String(mapping.classification_version) !== String(leafSlugs.classification_version)
  ) {
    throw new Error("leaf slug inventory and accepted mapping use different classification coordinates");
  }

  const leavesByCode = uniqueMap(leafSlugs.leaves, (leaf) => String(unknownField(leaf,"code")), "leaf code");
  uniqueMap(leafSlugs.leaves, (leaf) => String(unknownField(leaf,"pcr_id")), "leaf-derived PCR id");
  uniqueMap(leafSlugs.leaves, (leaf) => String(unknownField(leaf,"pcr_dir")), "leaf-derived PCR path");
  const mappingsByCode = uniqueMap(mapping.mappings, (edge) => String(edge.code), "mapping code");

  for (const edge of mapping.mappings) {
    const leaf = leavesByCode.get(String(edge.code));
    if (!leaf) {
      throw new Error(`accepted mapping code ${String(edge.code)} is absent from leaf slug inventory`);
    }
    if (edge.label !== unknownField(leaf,"title")) {
      throw new Error(`accepted mapping code ${String(edge.code)} label differs from leaf slug inventory`);
    }
    if (edge.acceptance?.status !== "accepted") {
      throw new Error(`mapping code ${String(edge.code)} is not explicitly accepted`);
    }
  }

  const aliases: PcrIdAlias[] = [];
  for (const leaf of leafSlugs.leaves) {
    assertLeafIdentity(leaf);
    const accepted = mappingsByCode.get(String(leaf.code));
    if (accepted?.pcr_id === leaf.pcr_id) {
      continue;
    }
    aliases.push({
      source_pcr_id: leaf.pcr_id,
      source_pcr_path: leaf.pcr_dir,
      target: {
        kind: "classification_coverage",
        classification_system: String(leafSlugs.classification_system).toLowerCase(),
        classification_version: String(leafSlugs.classification_version),
        code: String(leaf.code),
      },
      reason: "empty_scaffold_migration",
      decision_ref: PCR_ID_ALIAS_DECISION_REF,
    });
  }
  aliases.sort((left, right) => compareText(left.source_pcr_id, right.source_pcr_id));

  const registry = {
    schema_version: 1,
    registry_kind: "legacy-pcr-id-aliases",
    status: "current",
    aliases,
  };
  assertPcrIdAliases(registry, {
    entityKind: "PCR id alias registry",
    source: PCR_ID_ALIASES_PATH,
  });
  return registry;
}

export function buildOrCheckPcrIdAliases(root = REPOSITORY_ROOT, { checkOnly = false } = {}) {
  const leafSlugs: unknown = JSON.parse(readManagedUtf8(root, CPC_3_LEAF_SLUGS_PATH));
  const mapping = parseYaml(readManagedUtf8(root, CPC_3_ACCEPTED_MAPPING_PATH));
  const registry = createPcrIdAliasRegistry({ leafSlugs, mapping });
  const content = renderYaml(registry);

  if (checkOnly) {
    if (!existsSync(path.join(root, ...PCR_ID_ALIASES_PATH.split("/")))) {
      throw new Error(`${PCR_ID_ALIASES_PATH} is missing; run npm run aliases:build`);
    }
    const actual = readManagedUtf8(root, PCR_ID_ALIASES_PATH);
    if (actual !== content) {
      throw new Error(`${PCR_ID_ALIASES_PATH} is stale; run npm run aliases:build`);
    }
  } else {
    writeManagedUtf8(root, PCR_ID_ALIASES_PATH, content);
  }

  // Alias generation is the recovery path for a stale or legacy catalog
  // binding. Validate the freshly installed registry independently, then let
  // catalog:build publish the new exact-byte binding.
  const installed = readPcrIdAliases({ root, verifyCatalogBinding: false });
  if (JSON.stringify(installed) !== JSON.stringify(registry.aliases)) {
    throw new Error(`${PCR_ID_ALIASES_PATH} does not match its validated runtime projection`);
  }

  return { path: PCR_ID_ALIASES_PATH, registry, content };
}

function assertLeafSlugInventory(document: unknown): asserts document is LeafSlugInventory {
  if (
    !isUnknownRecord(document) || document.schema_version !== 1
    || typeof document.classification_system !== "string"
    || typeof document.classification_version !== "string"
    || !Array.isArray(document.leaves)
  ) {
    throw new Error("leaf slug inventory has an invalid top-level contract");
  }
}

function assertLeafIdentity(leaf: unknown): asserts leaf is LeafSlugIdentity {
  const code = String(unknownField(leaf,"code") ?? "");
  const pcrId = String(unknownField(leaf,"pcr_id") ?? "");
  const pcrPath = String(unknownField(leaf,"pcr_dir") ?? "");
  if (!isUnknownRecord(leaf) || !code || typeof leaf.title !== "string" || leaf.title.length === 0) {
    throw new Error(`leaf slug inventory contains an incomplete leaf ${code || "<missing-code>"}`);
  }
  if (typeof leaf.pcr_id !== "string" || !/^pcr\.[a-z0-9]+(?:[.-][a-z0-9]+)*$/u.test(pcrId)) {
    throw new Error(`leaf ${code} has an invalid PCR id ${pcrId}`);
  }
  if (typeof leaf.pcr_dir !== "string" || !/^library\/pcrs\/[a-z0-9][a-z0-9-]*\/[a-z0-9][a-z0-9-]*\/[a-z0-9][a-z0-9-]*$/u.test(pcrPath)) {
    throw new Error(`leaf ${code} has an invalid PCR path ${pcrPath}`);
  }
  const expectedId = `pcr.${pcrPath.split("/").slice(2).join(".")}`;
  if (pcrId !== expectedId) {
    throw new Error(`leaf ${code} PCR id ${pcrId} does not match path-derived id ${expectedId}`);
  }
}

function uniqueMap<T>(values: readonly T[], keyFor: (value:T)=>string, label: string) {
  const result = new Map<string,T>();
  for (const value of values) {
    const key = keyFor(value);
    if (!key) {
      throw new Error(`${label} must not be empty`);
    }
    if (result.has(key)) {
      throw new Error(`${label} ${key} occurs more than once`);
    }
    result.set(key, value);
  }
  return result;
}

function readManagedUtf8(root: string, relativePath: string) {
  const filePath = managedPath(root, relativePath);
  assertPathChain(root, relativePath, { finalKind: "file" });
  let descriptor: number | undefined;
  try {
    descriptor = openSync(filePath, MANAGED_READ_FLAGS);
    const opened = fstatSync(descriptor);
    const current = assertPathChain(root, relativePath, { finalKind: "file" });
    if (!opened.isFile() || opened.dev !== current.dev || opened.ino !== current.ino) {
      throw new Error(`${relativePath} changed while it was being opened`);
    }
    return FATAL_UTF8_DECODER.decode(readFileSync(descriptor));
  } catch (error) {
    throw new Error(`could not safely read ${relativePath}: ${errorMessage(error)}`, { cause: error });
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }
}

function writeManagedUtf8(root: string, relativePath: string, content: string) {
  const segments = relativePath.split("/");
  const parentRelative = segments.slice(0, -1).join("/");
  ensureDirectoryChain(root, parentRelative);
  const outputPath = managedPath(root, relativePath);
  const parentPath = path.dirname(outputPath);
  const temporaryPath = path.join(parentPath, `.${path.basename(outputPath)}.${process.pid}.tmp`);
  let descriptor: number | undefined;
  try {
    descriptor = openSync(
      temporaryPath,
      fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW,
      0o644,
    );
    writeFileSync(descriptor, content, "utf8");
    fsyncSync(descriptor);
    closeSync(descriptor);
    descriptor = undefined;
    if (existsSync(outputPath)) {
      assertPathChain(root, relativePath, { finalKind: "file" });
    }
    renameSync(temporaryPath, outputPath);
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
    if (existsSync(temporaryPath)) {
      const stats = lstatSync(temporaryPath);
      if (stats.isFile() && !stats.isSymbolicLink()) {
        unlinkSync(temporaryPath);
      }
    }
  }
}

function ensureDirectoryChain(root: string, relativePath: string) {
  const normalizedRoot = path.resolve(root);
  let current = normalizedRoot;
  for (const segment of relativePath.split("/").filter(Boolean)) {
    current = path.join(current, segment);
    try {
      mkdirSync(current, { mode: 0o755 });
    } catch (error) {
      if (errorCode(error) !== "EEXIST") {
        throw error;
      }
    }
    const stats = lstatSync(current);
    if (stats.isSymbolicLink() || !stats.isDirectory()) {
      throw new Error(`managed output parent is not a canonical directory: ${relativePath}`);
    }
  }
}

function assertPathChain(root: string, relativePath: string, { finalKind }: {finalKind:string}) {
  const filePath = managedPath(root, relativePath);
  const normalizedRoot = path.resolve(root);
  const relative = path.relative(normalizedRoot, filePath);
  let current = normalizedRoot;
  let finalStats;
  for (const [index, segment] of relative.split(path.sep).entries()) {
    current = path.join(current, segment);
    const stats = lstatSync(current);
    if (stats.isSymbolicLink()) {
      throw new Error(`${relativePath} contains a symbolic link`);
    }
    const isLast = index === relative.split(path.sep).length - 1;
    if (!isLast && !stats.isDirectory()) {
      throw new Error(`${relativePath} has a non-directory parent`);
    }
    if (isLast && finalKind === "file" && !stats.isFile()) {
      throw new Error(`${relativePath} is not a regular file`);
    }
    finalStats = stats;
  }
  if (!finalStats) throw new Error(`${relativePath} has no managed path segments`);
  return finalStats;
}

function managedPath(root: string, relativePath: unknown) {
  if (
    typeof relativePath !== "string"
    || relativePath.length === 0
    || relativePath.includes("\\")
    || relativePath.includes("\0")
    || path.posix.isAbsolute(relativePath)
    || path.posix.normalize(relativePath) !== relativePath
    || relativePath === ".."
    || relativePath.startsWith("../")
  ) {
    throw new Error(`unsafe repository-relative path: ${String(relativePath)}`);
  }
  return path.join(path.resolve(root), ...relativePath.split("/"));
}

function compareText(left: string, right: string) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function helpText() {
  return `Usage: node builder/scripts/build-pcr-id-aliases.ts [--check]\n\n` +
    `Build the deterministic legacy PCR id alias registry from CPC leaf identity inventory and accepted mapping v2.\n\n` +
    `Options:\n` +
    `  --check   Verify the checked-in registry without changing files.\n` +
    `  --help    Show this help.\n\n` +
    `Next: run npm run catalog:build so catalog and coverage artifacts bind to the accepted mapping.\n`;
}

function run() {
  const args = process.argv.slice(2);
  if (args.includes("--help")) {
    if (args.length !== 1) {
      throw new Error("--help cannot be combined with other alias build options");
    }
    process.stdout.write(helpText());
    return;
  }
  const unknown = args.find((arg) => arg !== "--check");
  if (unknown) {
    throw new Error(`Unknown PCR id alias option: ${unknown}`);
  }
  const result = buildOrCheckPcrIdAliases(REPOSITORY_ROOT, {
    checkOnly: args.includes("--check"),
  });
  const action = args.includes("--check") ? "is current" : "was rebuilt";
  console.log(
    `PCR id alias registry ${action}: ${result.path} (${result.registry.aliases.length} aliases).`,
  );
}

const isDirectExecution =
  process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isDirectExecution) {
  try {
    run();
  } catch (error) {
    console.error(errorMessage(error));
    process.exitCode = 1;
  }
}
