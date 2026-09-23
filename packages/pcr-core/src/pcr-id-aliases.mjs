import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  readdirSync,
  realpathSync,
} from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { TextDecoder } from "node:util";

import { assertCoreContract } from "./contracts.mjs";
import {
  CONTENT_MATURITY_VALUES,
  PCR_STATUS_VALUES,
} from "./generated/controlled-vocabulary.mjs";
import { parseYaml } from "./yaml-lite.mjs";

export const PCR_ID_ALIAS_DIRECTORY = "classifications/aliases";
export const PCR_ID_ALIAS_REGISTRY_PATH =
  `${PCR_ID_ALIAS_DIRECTORY}/pcr-id-aliases.yaml`;

const PCR_ROOT = "library/pcrs";
const CATALOG_PATH = "library/catalog.yaml";
const PCR_ID_PATTERN = /^pcr\.[a-z0-9]+(?:[.-][a-z0-9]+)*$/u;
const ALIAS_FILE_PATTERN = /\.ya?ml$/u;
const EXACT_BYTE_SHA256_PATTERN = /^sha256:[0-9a-f]{64}$/u;
const PCR_STATUSES = new Set(PCR_STATUS_VALUES);
const CONTENT_MATURITIES = new Set(CONTENT_MATURITY_VALUES);
const MANAGED_READ_FLAGS =
  fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW | fsConstants.O_NONBLOCK;
const FATAL_UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });
let activeAliasReadCache = null;

export class PcrIdAliasRegistryError extends Error {
  constructor({ source = PCR_ID_ALIAS_DIRECTORY, issues }) {
    super(`PCR id alias registry is inconsistent at ${source}: ${issues.join("; ")}`);
    this.name = "PcrIdAliasRegistryError";
    this.code = "PCR_INVALID_PCR_ID_ALIASES";
    this.details = {
      source,
      issues: [...issues],
    };
  }
}

/**
 * Read the deterministic, validated alias set. Once a repository has a
 * catalog, that catalog must pin the exact registry bytes and entry count;
 * a missing catalog and every missing or mismatched declaration fail closed.
 * Generation and migration tooling must opt into standalone validation
 * explicitly with verifyCatalogBinding=false.
 */
export function readPcrIdAliases({ root, verifyCatalogBinding = true }) {
  const normalizedRoot = path.resolve(root);
  const cacheKey = `${normalizedRoot}:${verifyCatalogBinding}`;
  const cached = activeAliasReadCache?.get(cacheKey);
  if (cached) {
    return structuredClone(cached);
  }
  const binding = verifyCatalogBinding
    ? readCatalogAliasBinding(normalizedRoot)
    : { mode: "standalone" };
  const registryPaths = binding.mode === "declared"
    ? declaredAliasRegistryPaths(normalizedRoot, binding)
    : aliasRegistryPaths(normalizedRoot);
  const records = [];
  const registrySources = new Map();

  for (const registryPath of registryPaths) {
    let document;
    try {
      const source = readContainedUtf8RegularFile({
        root: normalizedRoot,
        relativePath: registryPath,
        label: "PCR id alias registry",
      });
      registrySources.set(registryPath, source);
      document = parseYaml(source.text);
    } catch (error) {
      throw invalidAliases(registryPath, error);
    }

    assertCoreContract("pcr-id-aliases.schema.json", document, {
      code: "PCR_INVALID_PCR_ID_ALIASES",
      entityKind: "PCR id alias registry",
      source: registryPath,
    });
    for (const [index, alias] of document.aliases.entries()) {
      records.push({
        alias,
        index,
        registryPath,
      });
    }
  }

  if (binding.mode === "declared") {
    const source = registrySources.get(binding.path);
    const actualHash = exactByteSha256(source.bytes);
    if (actualHash !== binding.sha256) {
      throw new PcrIdAliasRegistryError({
        source: CATALOG_PATH,
        issues: [
          `declared PCR id alias exact-byte SHA-256 mismatch for ${binding.path}: expected ${binding.sha256}, found ${actualHash}`,
        ],
      });
    }
    if (records.length !== binding.entryCount) {
      throw new PcrIdAliasRegistryError({
        source: CATALOG_PATH,
        issues: [
          `declared PCR id alias entry_count mismatch for ${binding.path}: expected ${binding.entryCount}, found ${records.length}`,
        ],
      });
    }
  }

  assertAliasSemantics({ root: normalizedRoot, records });
  const aliases = records
    .map(({ alias }) => structuredClone(alias))
    .sort((left, right) => compareText(left.source_pcr_id, right.source_pcr_id));
  activeAliasReadCache?.set(cacheKey, aliases);
  return structuredClone(aliases);
}

/**
 * Reuse a fully verified alias registry only during one synchronous read operation.
 * The cache never crosses a public operation boundary, so later reads observe disk changes.
 */
export function withPcrIdAliasReadCache(operation) {
  const previousCache = activeAliasReadCache;
  if (!previousCache) {
    activeAliasReadCache = new Map();
  }
  try {
    return operation();
  } finally {
    if (!previousCache) {
      activeAliasReadCache = null;
    }
  }
}

function readCatalogAliasBinding(root) {
  if (!containedRegularFileExists({
    root,
    relativePath: CATALOG_PATH,
    label: "PCR catalog",
  })) {
    throw new PcrIdAliasRegistryError({
      source: CATALOG_PATH,
      issues: ["PCR catalog is required to bind the alias registry"],
    });
  }

  let catalog;
  try {
    const source = readContainedUtf8RegularFile({
      root,
      relativePath: CATALOG_PATH,
      label: "PCR catalog",
    });
    catalog = parseYaml(source.text);
  } catch (error) {
    throw invalidAliases(CATALOG_PATH, error);
  }

  if (
    !catalog
    || typeof catalog !== "object"
    || Array.isArray(catalog)
  ) {
    throw new PcrIdAliasRegistryError({
      source: CATALOG_PATH,
      issues: ["PCR catalog must be an object"],
    });
  }
  if (!Object.hasOwn(catalog, "pcr_id_aliases")) {
    throw new PcrIdAliasRegistryError({
      source: CATALOG_PATH,
      issues: ["PCR catalog must declare an exact-byte pcr_id_aliases binding"],
    });
  }

  const descriptor = catalog.pcr_id_aliases;
  const issues = [];
  if (!descriptor || typeof descriptor !== "object" || Array.isArray(descriptor)) {
    issues.push(
      "pcr_id_aliases must be an exact-byte binding object; rebuild the catalog",
    );
  } else {
    const allowedKeys = new Set(["path", "hash_mode", "sha256", "entry_count"]);
    const unknownKeys = Object.keys(descriptor).filter((key) => !allowedKeys.has(key));
    if (unknownKeys.length > 0) {
      issues.push(`pcr_id_aliases has unsupported fields: ${unknownKeys.sort(compareText).join(", ")}`);
    }
    if (descriptor.path !== PCR_ID_ALIAS_REGISTRY_PATH) {
      issues.push(
        `pcr_id_aliases.path must be ${PCR_ID_ALIAS_REGISTRY_PATH}`,
      );
    }
    if (descriptor.hash_mode !== "exact_bytes") {
      issues.push("pcr_id_aliases.hash_mode must be exact_bytes");
    }
    if (!EXACT_BYTE_SHA256_PATTERN.test(String(descriptor.sha256 ?? ""))) {
      issues.push("pcr_id_aliases.sha256 must be a lowercase sha256:<64-hex> digest");
    }
    if (!Number.isSafeInteger(descriptor.entry_count) || descriptor.entry_count < 0) {
      issues.push("pcr_id_aliases.entry_count must be a non-negative safe integer");
    }
  }
  if (issues.length > 0) {
    throw new PcrIdAliasRegistryError({ source: CATALOG_PATH, issues });
  }
  return {
    mode: "declared",
    path: descriptor.path,
    sha256: descriptor.sha256,
    entryCount: descriptor.entry_count,
  };
}

function declaredAliasRegistryPaths(root, binding) {
  const paths = aliasRegistryPaths(root);
  if (!paths.includes(binding.path)) {
    throw new PcrIdAliasRegistryError({
      source: CATALOG_PATH,
      issues: [`declared PCR id alias registry is missing: ${binding.path}`],
    });
  }
  const unexpected = paths.filter((registryPath) => registryPath !== binding.path);
  if (unexpected.length > 0) {
    throw new PcrIdAliasRegistryError({
      source: CATALOG_PATH,
      issues: [
        `unbound PCR id alias registries are not allowed: ${unexpected.join(", ")}`,
      ],
    });
  }
  return [binding.path];
}

/**
 * Exact old-id lookup. The alias is returned even while its physical legacy
 * scaffold still exists; consumers can therefore switch to redirect-first
 * behavior before deleting the old directory.
 */
export function findPcrIdAlias({ root, pcrId }) {
  const normalizedPcrId = String(pcrId);
  if (!PCR_ID_PATTERN.test(normalizedPcrId)) {
    throw new PcrIdAliasRegistryError({
      issues: [`invalid PCR id lookup token ${normalizedPcrId}`],
    });
  }
  return readPcrIdAliases({ root }).find(
    (alias) => alias.source_pcr_id === normalizedPcrId,
  ) ?? null;
}

function aliasRegistryPaths(root) {
  const directoryPath = path.join(root, ...PCR_ID_ALIAS_DIRECTORY.split("/"));
  let before;
  let names;
  try {
    try {
      lstatSync(directoryPath);
    } catch (error) {
      if (error?.code === "ENOENT") {
        return [];
      }
      throw error;
    }
    before = assertCanonicalDirectory({
      root,
      relativePath: PCR_ID_ALIAS_DIRECTORY,
      label: "PCR id alias directory",
    });
    names = readdirSync(directoryPath).sort(compareText);
    const after = lstatSync(directoryPath);
    if (!after.isDirectory() || !sameFileIdentity(before, after)) {
      throw new Error("PCR id alias directory changed while it was being listed");
    }
  } catch (error) {
    throw invalidAliases(PCR_ID_ALIAS_DIRECTORY, error);
  }

  return names
    .filter((name) => ALIAS_FILE_PATTERN.test(name))
    .map((name) => `${PCR_ID_ALIAS_DIRECTORY}/${name}`);
}

function assertAliasSemantics({ root, records }) {
  if (records.length === 0) {
    return;
  }
  const issues = [];
  const recordsBySource = new Map();
  for (const record of records) {
    const sourceId = record.alias.source_pcr_id;
    const existing = recordsBySource.get(sourceId);
    if (existing) {
      issues.push(
        `duplicate alias source ${sourceId} in ${existing.registryPath} and ${record.registryPath}`,
      );
      continue;
    }
    recordsBySource.set(sourceId, record);

    const expectedId = pcrIdForSourcePath(record.alias.source_pcr_path);
    if (expectedId !== sourceId) {
      issues.push(
        `alias source ${sourceId} does not match source_pcr_path ${record.alias.source_pcr_path}; expected ${expectedId}`,
      );
    }
  }

  const sources = new Set(recordsBySource.keys());
  assertTerminalAliasGraph({ recordsBySource, sources, issues });
  assertDecisionReferences({ root, records, issues });
  assertClassificationTargets({ root, records, issues });

  let manifests = [];
  try {
    manifests = readCanonicalManifestInventory(root);
  } catch (error) {
    issues.push(error instanceof Error ? error.message : String(error));
  }
  assertPcrTargetsAndSources({ root, records, sources, manifests, issues });

  if (issues.length > 0) {
    throw new PcrIdAliasRegistryError({
      issues: uniqueSorted(issues),
    });
  }
}

function assertTerminalAliasGraph({ recordsBySource, sources, issues }) {
  const canonicalEdges = new Map();
  for (const [sourceId, record] of recordsBySource) {
    if (record.alias.target.kind !== "canonical_pcr") {
      continue;
    }
    const targetId = record.alias.target.pcr_id;
    if (sourceId === targetId) {
      issues.push(`alias source ${sourceId} cannot redirect to itself`);
      continue;
    }
    canonicalEdges.set(sourceId, targetId);
  }

  const cycleMembers = aliasCycleMembers(canonicalEdges);
  if (cycleMembers.size > 0) {
    issues.push(`alias cycle detected among ${[...cycleMembers].sort(compareText).join(", ")}`);
  }
  for (const [sourceId, targetId] of canonicalEdges) {
    if (sources.has(targetId) && !cycleMembers.has(sourceId) && !cycleMembers.has(targetId)) {
      issues.push(
        `alias chain is not allowed: ${sourceId} targets alias source ${targetId}`,
      );
    }
  }
}

function aliasCycleMembers(edges) {
  const cycleMembers = new Set();
  const completed = new Set();
  for (const start of edges.keys()) {
    if (completed.has(start)) {
      continue;
    }
    const pathIds = [];
    const pathIndex = new Map();
    let current = start;
    while (edges.has(current) && !completed.has(current)) {
      if (pathIndex.has(current)) {
        for (const member of pathIds.slice(pathIndex.get(current))) {
          cycleMembers.add(member);
        }
        break;
      }
      pathIndex.set(current, pathIds.length);
      pathIds.push(current);
      current = edges.get(current);
    }
    for (const member of pathIds) {
      completed.add(member);
    }
  }
  return cycleMembers;
}

function assertDecisionReferences({ root, records, issues }) {
  const checked = new Map();
  for (const { alias } of records) {
    const decisionPath = alias.decision_ref.split("#", 1)[0];
    if (!checked.has(decisionPath)) {
      try {
        readContainedUtf8RegularFile({
          root,
          relativePath: decisionPath,
          label: "alias decision reference",
        });
        checked.set(decisionPath, null);
      } catch (error) {
        checked.set(decisionPath, error instanceof Error ? error.message : String(error));
      }
    }
    const problem = checked.get(decisionPath);
    if (problem) {
      issues.push(`alias source ${alias.source_pcr_id} has invalid decision_ref: ${problem}`);
    }
  }
}

function assertClassificationTargets({ root, records, issues }) {
  const inventories = new Map();
  for (const { alias } of records) {
    if (alias.target.kind !== "classification_coverage") {
      continue;
    }
    const target = alias.target;
    const coordinate = `${target.classification_system}:${target.classification_version}`;
    if (!inventories.has(coordinate)) {
      inventories.set(
        coordinate,
        readNormalizedLeafInventory({ root, target }),
      );
    }
    const inventory = inventories.get(coordinate);
    if (inventory.error) {
      issues.push(
        `alias source ${alias.source_pcr_id} has invalid classification target ${coordinate}:${target.code}: ${inventory.error}`,
      );
      continue;
    }
    const matches = inventory.codes.get(String(target.code)) ?? 0;
    if (matches !== 1) {
      issues.push(
        `alias source ${alias.source_pcr_id} classification target ${coordinate}:${target.code} occurs ${matches} times in normalized leaves`,
      );
    }
  }
}

function readNormalizedLeafInventory({ root, target }) {
  const relativePath =
    `classifications/systems/${target.classification_system}/${target.classification_version}` +
    "/normalized/leaves.json";
  try {
    const source = readContainedUtf8RegularFile({
      root,
      relativePath,
      label: "normalized classification leaves",
    });
    const document = JSON.parse(source.text);
    if (
      String(document.classification_system).toLowerCase() !== target.classification_system
      || String(document.classification_version) !== target.classification_version
      || !Array.isArray(document.leaves)
    ) {
      return { error: `${relativePath} has an invalid classification coordinate or leaves inventory` };
    }
    const codes = new Map();
    for (const leaf of document.leaves) {
      const code = String(leaf?.code ?? "");
      if (code.length > 0) {
        codes.set(code, (codes.get(code) ?? 0) + 1);
      }
    }
    return { codes, error: null };
  } catch (error) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
}

function assertPcrTargetsAndSources({ root, records, sources, manifests, issues }) {
  const manifestsById = groupBy(manifests, (record) => String(record.manifest.id ?? ""));
  const manifestsByDirectory = groupBy(manifests, (record) => record.directory);

  for (const { alias } of records) {
    const sourceDirectoryState = inspectContainedDirectory({
      root,
      relativePath: alias.source_pcr_path,
      label: `alias source ${alias.source_pcr_id}`,
    });
    if (sourceDirectoryState.error) {
      issues.push(sourceDirectoryState.error);
    } else if (sourceDirectoryState.exists) {
      const sourceRecords = manifestsByDirectory.get(alias.source_pcr_path) ?? [];
      if (sourceRecords.length !== 1) {
        issues.push(
          `alias source path ${alias.source_pcr_path} must contain exactly one canonical manifest while it exists`,
        );
      } else {
        const sourceRecord = sourceRecords[0];
        if (sourceRecord.manifest.id !== alias.source_pcr_id) {
          issues.push(
            `alias source path ${alias.source_pcr_path} contains manifest id ${String(sourceRecord.manifest.id)} instead of ${alias.source_pcr_id}`,
          );
        }
        const sourceKind = classifyManifest(sourceRecord.manifest);
        if (sourceKind === "material") {
          issues.push(
            `alias source ${alias.source_pcr_id} collides with a material PCR at ${alias.source_pcr_path}`,
          );
        } else if (sourceKind !== "legacy") {
          issues.push(
            `alias source ${alias.source_pcr_id} has invalid lifecycle identity at ${alias.source_pcr_path}`,
          );
        }
      }
    }

    const sourceRecords = manifestsById.get(alias.source_pcr_id) ?? [];
    for (const sourceRecord of sourceRecords) {
      if (sourceRecord.directory !== alias.source_pcr_path) {
        issues.push(
          `alias source ${alias.source_pcr_id} exists at unexpected path ${sourceRecord.directory}; declared ${alias.source_pcr_path}`,
        );
      }
    }
    if (sourceRecords.some((record) => classifyManifest(record.manifest) === "material")) {
      issues.push(`alias source ${alias.source_pcr_id} collides with a material PCR identity`);
    }

    if (alias.target.kind !== "canonical_pcr") {
      continue;
    }
    const targetId = alias.target.pcr_id;
    if (sources.has(targetId)) {
      // The graph validator reports self, chain, or cycle with more useful context.
      continue;
    }
    const targets = manifestsById.get(targetId) ?? [];
    if (targets.length !== 1) {
      issues.push(
        `canonical alias target ${targetId} must resolve to exactly one PCR manifest; found ${targets.length}`,
      );
      continue;
    }
    if (classifyManifest(targets[0].manifest) !== "material") {
      issues.push(`canonical alias target ${targetId} is not a material PCR`);
    }
  }
}

function readCanonicalManifestInventory(root) {
  const pcrRoot = path.join(root, ...PCR_ROOT.split("/"));
  try {
    lstatSync(pcrRoot);
  } catch (error) {
    if (error?.code === "ENOENT") {
      return [];
    }
    throw error;
  }
  assertCanonicalDirectory({ root, relativePath: PCR_ROOT, label: "PCR catalog root" });
  const manifestPaths = [];
  collectManifestPaths({ root, relativeDirectory: PCR_ROOT, manifestPaths });
  return manifestPaths.map((relativePath) => {
    const source = readContainedUtf8RegularFile({
      root,
      relativePath,
      label: "PCR manifest",
    });
    return {
      directory: path.posix.dirname(relativePath),
      manifest: parseYaml(source.text),
    };
  });
}

function collectManifestPaths({ root, relativeDirectory, manifestPaths }) {
  const directoryPath = path.join(root, ...relativeDirectory.split("/"));
  const before = assertCanonicalDirectory({
    root,
    relativePath: relativeDirectory,
    label: "PCR directory",
  });
  const entries = readdirSync(directoryPath).sort(compareText);
  const after = lstatSync(directoryPath);
  if (!after.isDirectory() || !sameFileIdentity(before, after)) {
    throw new Error(`PCR directory changed while it was being listed: ${relativeDirectory}`);
  }
  for (const entry of entries) {
    const relativePath = `${relativeDirectory}/${entry}`;
    const filePath = path.join(root, ...relativePath.split("/"));
    const stats = lstatSync(filePath);
    if (stats.isSymbolicLink()) {
      throw new Error(`PCR catalog path contains a symbolic link: ${relativePath}`);
    }
    if (stats.isDirectory()) {
      collectManifestPaths({ root, relativeDirectory: relativePath, manifestPaths });
    } else if (stats.isFile() && entry === "manifest.yaml") {
      manifestPaths.push(relativePath);
    }
  }
}

function inspectContainedDirectory({ root, relativePath, label }) {
  try {
    assertSafeRelativePath(relativePath, label);
    const segments = relativePath.split("/");
    let current = root;
    for (const [index, segment] of segments.entries()) {
      current = path.join(current, segment);
      let stats;
      try {
        stats = lstatSync(current);
      } catch (error) {
        if (error?.code === "ENOENT") {
          return { exists: false, error: null };
        }
        throw error;
      }
      if (stats.isSymbolicLink()) {
        return { exists: false, error: `${label} path contains a symbolic link: ${relativePath}` };
      }
      if (!stats.isDirectory()) {
        return {
          exists: false,
          error: `${label} path component is not a directory: ${segments.slice(0, index + 1).join("/")}`,
        };
      }
    }
    return { exists: true, error: null };
  } catch (error) {
    return { exists: false, error: error instanceof Error ? error.message : String(error) };
  }
}

function assertCanonicalDirectory({ root, relativePath, label }) {
  assertSafeRelativePath(relativePath, label);
  const segments = relativePath.split("/");
  let current = root;
  let finalStats;
  for (const segment of segments) {
    current = path.join(current, segment);
    const stats = lstatSync(current);
    if (stats.isSymbolicLink()) {
      throw new Error(`${label} path contains a symbolic link: ${relativePath}`);
    }
    if (!stats.isDirectory()) {
      throw new Error(`${label} is not a canonical directory: ${relativePath}`);
    }
    finalStats = stats;
  }
  return finalStats;
}

function containedRegularFileExists({ root, relativePath, label }) {
  assertSafeRelativePath(relativePath, label);
  const segments = relativePath.split("/");
  let currentPath = root;
  for (const [index, segment] of segments.entries()) {
    currentPath = path.join(currentPath, segment);
    let stats;
    try {
      stats = lstatSync(currentPath);
    } catch (error) {
      if (error?.code === "ENOENT") {
        return false;
      }
      throw invalidAliases(relativePath, error);
    }
    if (stats.isSymbolicLink()) {
      throw new PcrIdAliasRegistryError({
        source: relativePath,
        issues: [`${label} path contains a symbolic link: ${relativePath}`],
      });
    }
    const isLast = index === segments.length - 1;
    if ((!isLast && !stats.isDirectory()) || (isLast && !stats.isFile())) {
      throw new PcrIdAliasRegistryError({
        source: relativePath,
        issues: [
          isLast
            ? `${label} is not a regular file: ${relativePath}`
            : `${label} parent is not a directory: ${relativePath}`,
        ],
      });
    }
  }
  return true;
}

function readContainedUtf8RegularFile({ root, relativePath, label }) {
  assertSafeRelativePath(relativePath, label);
  const resolvedRoot = path.resolve(root);
  const containedRelativePath = relativePath.split("/").join(path.sep);
  const resolvedPath = path.resolve(resolvedRoot, containedRelativePath);
  assertRegularPathChain({
    root: resolvedRoot,
    containedRelativePath,
    relativePath,
    label,
  });

  let descriptor;
  let bytes;
  try {
    descriptor = openSync(resolvedPath, MANAGED_READ_FLAGS);
    const openedStats = fstatSync(descriptor);
    if (!openedStats.isFile()) {
      throw new Error(`${label} is not a regular file: ${relativePath}`);
    }
    const currentStats = assertRegularPathChain({
      root: resolvedRoot,
      containedRelativePath,
      relativePath,
      label,
    });
    assertRealPathContained({
      root: resolvedRoot,
      candidate: resolvedPath,
      label,
      relativePath,
    });
    if (!sameFileIdentity(openedStats, currentStats)) {
      throw new Error(`${label} path changed while it was being opened: ${relativePath}`);
    }
    bytes = readFileSync(descriptor);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith(`${label} `)) {
      throw error;
    }
    throw new Error(
      `${label} could not be opened without following symbolic links: ${relativePath} (${error instanceof Error ? error.code ?? error.message : String(error)})`,
    );
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }

  try {
    return {
      bytes,
      text: FATAL_UTF8_DECODER.decode(bytes),
    };
  } catch (error) {
    throw new Error(
      `${label} is not valid UTF-8: ${relativePath} (${error instanceof Error ? error.message : String(error)})`,
    );
  }
}

function assertRegularPathChain({ root, containedRelativePath, relativePath, label }) {
  const segments = containedRelativePath.split(path.sep);
  let currentPath = root;
  let finalStats;
  for (const [index, segment] of segments.entries()) {
    currentPath = path.join(currentPath, segment);
    let stats;
    try {
      stats = lstatSync(currentPath);
    } catch (error) {
      throw new Error(
        `${label} does not exist at ${relativePath} (${error instanceof Error ? error.code ?? error.message : String(error)})`,
      );
    }
    if (stats.isSymbolicLink()) {
      throw new Error(`${label} path contains a symbolic link: ${relativePath}`);
    }
    const isLast = index === segments.length - 1;
    if (isLast && !stats.isFile()) {
      throw new Error(`${label} is not a regular file: ${relativePath}`);
    }
    if (!isLast && !stats.isDirectory()) {
      throw new Error(`${label} parent is not a directory: ${relativePath}`);
    }
    if (isLast) {
      finalStats = stats;
    }
  }
  return finalStats;
}

function assertRealPathContained({ root, candidate, label, relativePath }) {
  const realRoot = realpathSync(root);
  const realCandidate = realpathSync(candidate);
  const relative = path.relative(realRoot, realCandidate);
  if (
    relative.length === 0
    || relative === ".."
    || relative.startsWith(`..${path.sep}`)
    || path.isAbsolute(relative)
  ) {
    throw new Error(`${label} real path escapes the repository root: ${relativePath}`);
  }
}

function assertSafeRelativePath(relativePath, label) {
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
    throw new Error(`${label} uses an unsafe repository-relative path: ${String(relativePath)}`);
  }
}

function pcrIdForSourcePath(sourcePath) {
  const segments = sourcePath.split("/");
  return `pcr.${segments.slice(2).join(".")}`;
}

function classifyManifest(manifest) {
  if (!PCR_STATUSES.has(manifest?.status) || !CONTENT_MATURITIES.has(manifest?.content_maturity)) {
    return "invalid";
  }
  if (manifest?.status === "scaffold" && manifest?.content_maturity === "empty_scaffold") {
    return "legacy";
  }
  if (manifest?.status !== "scaffold" && manifest?.content_maturity !== "empty_scaffold") {
    return "material";
  }
  return "invalid";
}

function groupBy(values, keyFor) {
  const groups = new Map();
  for (const value of values) {
    const key = keyFor(value);
    const group = groups.get(key) ?? [];
    group.push(value);
    groups.set(key, group);
  }
  return groups;
}

function invalidAliases(source, error) {
  if (error?.code === "PCR_INVALID_PCR_ID_ALIASES") {
    return error;
  }
  return new PcrIdAliasRegistryError({
    source,
    issues: [error instanceof Error ? error.message : String(error)],
  });
}

function sameFileIdentity(left, right) {
  return left?.dev === right?.dev && left?.ino === right?.ino;
}

function exactByteSha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function uniqueSorted(values) {
  return [...new Set(values)].sort(compareText);
}

function compareText(left, right) {
  const normalizedLeft = String(left);
  const normalizedRight = String(right);
  return normalizedLeft < normalizedRight ? -1 : normalizedLeft > normalizedRight ? 1 : 0;
}
