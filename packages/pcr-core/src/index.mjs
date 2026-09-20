import { createHash } from "node:crypto";
import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  realpathSync,
  readdirSync,
} from "node:fs";
import path from "node:path";
import { TextDecoder } from "node:util";

import {
  PcrClassificationCodeUnknownError,
  PcrClassificationCoverageSemanticError,
  readClassificationCoverage,
} from "./classification-coverage.mjs";
import { assertCoreContract, validateCoreContract } from "./contracts.mjs";
import {
  inspectProjectionIntegrity,
  projectionNotRequiredState,
} from "./projection-integrity.mjs";
import { materialProjectionCompletenessIssues } from "./projection-completeness.mjs";
import { findPcrIdAlias } from "./pcr-id-aliases.mjs";
import { parseYaml } from "./yaml-lite.mjs";
import {
  CLASSIFICATION_MAPPING_RELATION_VALUES,
  CONTENT_MATURITY_VALUES,
  FEEDBACK_TYPE_VALUES,
  PCR_STATUS_VALUES,
} from "./generated/controlled-vocabulary.mjs";

export const FEEDBACK_TYPES = FEEDBACK_TYPE_VALUES;
export {
  CLASSIFICATION_COVERAGE_STATUSES,
  PcrClassificationCodeUnknownError,
  PcrClassificationCoverageNotFoundError,
  PcrClassificationCoverageSemanticError,
  PcrClassificationCoverageStatusError,
  classificationCoveragePath,
  findClassificationCoverageEntry,
  getClassificationCoverageSummary,
  hasClassificationCoverage,
  listClassificationCoverage,
  readClassificationCoverage,
} from "./classification-coverage.mjs";
export const PCR_CATALOG_SCOPES = Object.freeze(["all", "material", "legacy"]);
export const PCR_RECORD_KINDS = Object.freeze([
  "methodology",
  "legacy_scaffold_reference",
  "invalid_lifecycle_state",
]);
const CLASSIFICATION_MAPPING_RELATIONS = new Set(CLASSIFICATION_MAPPING_RELATION_VALUES);
const PCR_CATALOG_SCOPE_SET = new Set(PCR_CATALOG_SCOPES);
const METHODOLOGY_LIFECYCLE_STATUSES = new Set(
  PCR_STATUS_VALUES.filter((value) => value !== "scaffold"),
);
const METHODOLOGY_MATURITIES = new Set(
  CONTENT_MATURITY_VALUES.filter((value) => value !== "empty_scaffold"),
);

const CURRENT_SNAPSHOT_MAX_ATTEMPTS = 3;
const pcrCatalogCache = new Map();
const RELEASE_ARTIFACTS = Object.freeze({
  pcr_en_us_sha256: "pcr.en-US.md",
  pcr_zh_cn_sha256: "pcr.zh-CN.md",
  structured_sha256: "structured.yaml",
});
const GUIDANCE_MATURITIES = new Set([
  "authored_methodology",
  "reviewed_methodology",
  "published_methodology",
]);
const REVIEWED_MATURITIES = new Set(["reviewed_methodology", "published_methodology"]);
const USABLE_LIFECYCLE_STATES = new Map([
  ["candidate", new Set(["authored_methodology"])],
  ["active", new Set(["reviewed_methodology"])],
  ["published", new Set(["published_methodology"])],
]);
const GUIDANCE_LIFECYCLE_STATUSES = new Set(["candidate", "active", "published"]);

export class PcrUsabilityError extends Error {
  constructor({ pcrId, operation, readiness }) {
    const blockers = readiness.blockers.map((blocker) => blocker.code).join(", ");
    super(
      `PCR ${pcrId} is not usable for ${operation}: content_maturity=${readiness.methodology_status}; blockers=${blockers || "unknown"}`,
    );
    this.name = "PcrUsabilityError";
    this.code = `PCR_NOT_USABLE_FOR_${operation.toUpperCase()}`;
    this.readiness = structuredClone(readiness);
  }
}

export class PcrClassificationMappingError extends Error {
  constructor({ system, version, code, mappingType, issue = null }) {
    super(issue
      ? `Classification mapping ${system}:${version}:${code} is not an accepted current mapping: ${issue}.`
      : `Classification mapping ${system}:${version}:${code} uses unsupported mapping_type ${String(mappingType)}.`);
    this.name = "PcrClassificationMappingError";
    this.code = "PCR_INVALID_CLASSIFICATION_MAPPING";
    this.details = {
      classification: `${system}:${version}:${code}`,
      mapping_type: mappingType ?? null,
      allowed_mapping_types: [...CLASSIFICATION_MAPPING_RELATION_VALUES],
      issue,
    };
  }
}

export class PcrLegacyIdRedirectError extends Error {
  constructor(alias) {
    const redirect = legacyPcrIdRedirect(alias);
    super(
      `PCR id ${redirect.source_pcr_id} is a retired legacy identity. ` +
        `Use the redirect target with: ${redirect.next_command}`,
    );
    this.name = "PcrLegacyIdRedirectError";
    this.code = "PCR_LEGACY_ID_REDIRECT";
    this.details = redirect;
  }
}

export class PcrClassificationTargetStateError extends Error {
  constructor({ system, version, code, pcr }) {
    super(
      `Classification mapping ${system}:${version}:${code} points to PCR ${pcr.id} with invalid ` +
        `lifecycle identity ${pcr.status}/${pcr.content_maturity}.`,
    );
    this.name = "PcrClassificationTargetStateError";
    this.code = "PCR_INVALID_CLASSIFICATION_TARGET";
    this.details = {
      classification: `${system}:${version}:${code}`,
      pcr_id: pcr.id,
      status: pcr.status,
      content_maturity: pcr.content_maturity,
      record_kind: pcr.record_kind,
    };
  }
}

export class PcrCurrentSnapshotInconsistentError extends Error {
  constructor({ pcrId, pcrPath, attempts, lastFailure }) {
    super(
      `PCR ${pcrId} current snapshot could not be read consistently after ${attempts} attempts.`,
    );
    this.name = "PcrCurrentSnapshotInconsistentError";
    this.code = "PCR_CURRENT_SNAPSHOT_INCONSISTENT";
    this.details = {
      pcr_id: pcrId,
      pcr_path: pcrPath,
      attempts,
      last_failure: lastFailure,
    };
  }
}

export class PcrDuplicateIdError extends Error {
  constructor({ pcrId, paths }) {
    super(`Duplicate canonical PCR id ${pcrId}: ${paths.join(", ")}`);
    this.name = "PcrDuplicateIdError";
    this.code = "PCR_DUPLICATE_ID";
    this.details = { pcr_id: pcrId, paths: [...paths] };
  }
}

export class PcrCatalogScopeError extends Error {
  constructor(scope) {
    super(`Unsupported PCR catalog scope ${String(scope)}. Expected one of: ${PCR_CATALOG_SCOPES.join(", ")}.`);
    this.name = "PcrCatalogScopeError";
    this.code = "PCR_INVALID_CATALOG_SCOPE";
    this.details = {
      scope: String(scope),
      allowed_scopes: [...PCR_CATALOG_SCOPES],
    };
  }
}

export function listPcrs({ root, refresh = false, scope = "all" }) {
  const normalizedScope = normalizeCatalogScope(scope);
  const normalizedRoot = path.resolve(root);
  const catalog = getPcrCatalog({ root: normalizedRoot, refresh });
  const candidates = normalizedScope === "all"
    ? catalog
    : catalog.filter((entry) => currentCatalogEntryMatchesScope(normalizedRoot, entry, normalizedScope));
  return candidates
    .map((entry) => currentPcrEntry(normalizedRoot, entry))
    .filter((entry) => recordMatchesScope(entry, normalizedScope));
}

function getPcrCatalog({ root, refresh = false }) {
  const normalizedRoot = path.resolve(root);
  if (refresh || !pcrCatalogCache.has(normalizedRoot)) {
    pcrCatalogCache.set(normalizedRoot, readPcrCatalog(normalizedRoot));
  }
  return pcrCatalogCache.get(normalizedRoot);
}

function readPcrCatalog(root) {
  const pcrRoot = path.join(root, "library/pcrs");
  if (!isCanonicalDirectory(pcrRoot)) {
    throw new Error(`PCR catalog root not found: ${toPosix(path.relative(root, pcrRoot))}`);
  }
  const catalog = findManifestFiles(pcrRoot)
    .map((manifestPath) => {
      const manifest = parseYaml(readCanonicalFileBytes(manifestPath).toString("utf8"));
      const pcrDir = path.dirname(manifestPath);
      return {
        id: manifest.id,
        path: toPosix(path.relative(root, pcrDir)),
        manifestPath,
      };
    })
    .filter((entry) => entry.id);
  const entriesById = new Map();
  for (const entry of catalog) {
    const existing = entriesById.get(entry.id);
    if (existing) {
      throw new PcrDuplicateIdError({
        pcrId: entry.id,
        paths: [existing.path, entry.path].sort(),
      });
    }
    entriesById.set(entry.id, entry);
  }
  return catalog.sort((left, right) => left.id.localeCompare(right.id));
}

export function buildPcrTree({ root, depth = Infinity, scope = "all" }) {
  const tree = {};
  for (const pcr of listPcrs({ root, scope })) {
    const segments = pcr.path.replace(/^library\/pcrs\//u, "").split("/");
    let node = tree;
    for (const [index, segment] of segments.entries()) {
      if (index >= depth) {
        break;
      }
      node[segment] ??= { children: {}, pcrs: [] };
      if (index === segments.length - 1) {
        node[segment].pcrs.push(pcr);
      }
      node = node[segment].children;
    }
  }
  return tree;
}

export function resolveClassification({ root, system, version, code }) {
  const normalizedSystem = String(system).toLowerCase();
  const normalizedVersion = String(version);
  const normalizedCode = String(code);
  const coverageIndex = readClassificationCoverage({
    root,
    system: normalizedSystem,
    version: normalizedVersion,
  });
  return resolveClassificationWithCoverage({
    root,
    system: normalizedSystem,
    version: normalizedVersion,
    code: normalizedCode,
    coverageIndex,
  });
}

function resolveClassificationWithCoverage({ root, system, version, code, coverageIndex }) {
  const coverage = coverageIndex.entries.find(
    (candidate) => String(candidate.code) === String(code),
  );
  if (!coverage) {
    throw new PcrClassificationCodeUnknownError({ system, version, code });
  }
  if (coverage.coverage_status === "mapped") {
    const canonical = readCanonicalClassificationMapping({
      root,
      system,
      version,
      code,
    });
    assertCoverageMappingMatchesCanonical({ coverage, canonical, system, version, code });
    const pcr = getPcrById({ root, pcrId: canonical.mapping.pcr_id });
    if (pcr.record_kind !== "methodology") {
      throw invalidCoverageResolution({
        system,
        version,
        code,
        issue: `mapped coverage points to non-material PCR ${pcr.id}`,
      });
    }
    return {
      classification_system: canonical.mappingFile.classification_system,
      classification_version: canonical.mappingFile.classification_version,
      mapping: canonical.mapping,
      pcr,
      resolution_status: "mapped",
      coverage_status: coverage.coverage_status,
      coverage,
    };
  }

  if (coverage.legacy_reference) {
    const canonical = readCanonicalClassificationMapping({
      root,
      system,
      version,
      code,
    });
    if (canonical.mapping.pcr_id !== coverage.legacy_reference.pcr_id) {
      throw invalidCoverageResolution({
        system,
        version,
        code,
        issue: `legacy reference ${coverage.legacy_reference.pcr_id} does not match canonical mapping ${canonical.mapping.pcr_id}`,
      });
    }
    const pcr = getPcrById({ root, pcrId: canonical.mapping.pcr_id });
    if (pcr.record_kind !== "legacy_scaffold_reference") {
      throw invalidCoverageResolution({
        system,
        version,
        code,
        issue: `legacy reference points to material PCR ${pcr.id}`,
      });
    }
    return {
      classification_system: canonical.mappingFile.classification_system,
      classification_version: canonical.mappingFile.classification_version,
      mapping: canonical.mapping,
      pcr,
      resolution_status: "legacy_scaffold_compatibility",
      coverage_status: coverage.coverage_status,
      coverage,
    };
  }

  return {
    classification_system: String(coverageIndex.classification_system),
    classification_version: String(coverageIndex.classification_version),
    mapping: null,
    pcr: null,
    resolution_status: "unmapped",
    coverage_status: coverage.coverage_status,
    coverage,
    review_candidate:
      ["manual_review", "unknown"].includes(coverage.coverage_status) && coverage.mapping
        ? structuredClone(coverage.mapping)
        : null,
  };
}

function readCanonicalClassificationMapping({ root, system, version, code }) {
  const normalizedRoot = path.resolve(root);
  const mappingPath = path.join(
    normalizedRoot,
    "classifications/mappings",
    `${system}-${version}-to-pcr.yaml`,
  );
  const mappingRelativePath = toPosix(path.relative(normalizedRoot, mappingPath));
  let mappingFile;
  try {
    const mappingBytes = readControlledRepositoryFileBytes({
      root: normalizedRoot,
      filePath: mappingPath,
      relativePath: mappingRelativePath,
      label: "classification mapping",
    });
    mappingFile = parseYaml(new TextDecoder("utf-8", { fatal: true }).decode(mappingBytes));
  } catch (error) {
    if (error instanceof PcrClassificationMappingError) {
      throw error;
    }
    throw new PcrClassificationMappingError({
      system,
      version,
      code,
      issue:
        `canonical mapping source ${mappingRelativePath} could not be read safely ` +
        `(${error instanceof Error ? error.message : String(error)})`,
    });
  }
  assertCurrentAcceptedMappingDocument({ mappingFile, system, version, code });
  const matches = (mappingFile.mappings ?? []).filter(
    (entry) => String(entry.code) === String(code),
  );
  if (matches.length === 0) {
    throw new Error(`No PCR mapping found for ${system}:${version}:${code}`);
  }
  if (matches.length !== 1) {
    throw new PcrClassificationMappingError({
      system,
      version,
      code,
      issue: `expected one selected edge, found ${matches.length}`,
    });
  }
  const mapping = matches[0];
  if (
    !CLASSIFICATION_MAPPING_RELATIONS.has(mapping.mapping_type)
    || mapping.mapping_type === "manual_review"
  ) {
    throw new PcrClassificationMappingError({
      system,
      version,
      code,
      mappingType: mapping.mapping_type,
    });
  }
  assertAcceptedMappingDecision({ mapping, system, version, code });
  return { mappingFile, mapping };
}

function assertCurrentAcceptedMappingDocument({ mappingFile, system, version, code }) {
  if (mappingFile?.schema_version !== 2 || mappingFile?.status !== "current") {
    throw new PcrClassificationMappingError({
      system,
      version,
      code,
      issue:
        `expected schema_version 2 with status current, found ` +
        `${String(mappingFile?.schema_version)}/${String(mappingFile?.status)}`,
    });
  }
  if (
    String(mappingFile.classification_system).toLowerCase() !== String(system).toLowerCase()
    || String(mappingFile.classification_version) !== String(version)
    || !Array.isArray(mappingFile.mappings)
  ) {
    throw new PcrClassificationMappingError({
      system,
      version,
      code,
      issue: "mapping document coordinate or mappings array does not match the requested classification",
    });
  }
}

function assertAcceptedMappingDecision({ mapping, system, version, code }) {
  const acceptance = mapping?.acceptance;
  if (
    acceptance?.status !== "accepted"
    || typeof acceptance?.decided_by !== "string"
    || acceptance.decided_by.trim().length === 0
    || !isRealCanonicalUtcTimestamp(acceptance?.decided_at_utc)
    || typeof acceptance?.decision_ref !== "string"
    || !/^(?:docs|classifications\/migrations)\/[A-Za-z0-9][A-Za-z0-9._/-]*\.(?:md|ya?ml|json)(?:#[A-Za-z0-9][A-Za-z0-9._-]*)?$/u.test(
      acceptance.decision_ref,
    )
  ) {
    throw new PcrClassificationMappingError({
      system,
      version,
      code,
      mappingType: mapping?.mapping_type,
      issue:
        "selected edge requires acceptance.status=accepted, decided_by, strict decided_at_utc, and decision_ref",
    });
  }
}

function isRealCanonicalUtcTimestamp(value) {
  const match = typeof value === "string"
    ? /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(?:\.[0-9]+)?Z$/u.exec(value)
    : null;
  if (!match) {
    return false;
  }
  const [, year, month, day, hour, minute, second] = match.map(Number);
  const parsed = new Date(0);
  parsed.setUTCFullYear(year, month - 1, day);
  parsed.setUTCHours(hour, minute, second, 0);
  return (
    parsed.getUTCFullYear() === year
    && parsed.getUTCMonth() === month - 1
    && parsed.getUTCDate() === day
    && parsed.getUTCHours() === hour
    && parsed.getUTCMinutes() === minute
    && parsed.getUTCSeconds() === second
  );
}

function assertCoverageMappingMatchesCanonical({ coverage, canonical, system, version, code }) {
  const coverageMapping = coverage.mapping;
  const canonicalMapping = canonical.mapping;
  for (const field of ["pcr_id", "mapping_type", "confidence"]) {
    if (String(coverageMapping?.[field]) !== String(canonicalMapping?.[field])) {
      throw invalidCoverageResolution({
        system,
        version,
        code,
        issue: `coverage mapping ${field} ${String(coverageMapping?.[field])} does not match canonical mapping ${String(canonicalMapping?.[field])}`,
      });
    }
  }
  for (const field of ["status", "decided_by", "decided_at_utc", "decision_ref"]) {
    if (
      String(coverageMapping?.acceptance?.[field])
      !== String(canonicalMapping?.acceptance?.[field])
    ) {
      throw invalidCoverageResolution({
        system,
        version,
        code,
        issue:
          `coverage mapping acceptance.${field} ${String(coverageMapping?.acceptance?.[field])} ` +
          `does not match canonical mapping ${String(canonicalMapping?.acceptance?.[field])}`,
      });
    }
  }
}

function invalidCoverageResolution({ system, version, code, issue }) {
  return new PcrClassificationCoverageSemanticError({
    system,
    version,
    source: `classifications/indexes/${system}-${version}-coverage.json`,
    issues: [`entry ${code}: ${issue}`],
  });
}

/**
 * Resolve a PCR identity without silently following a retired id. Alias
 * lookup intentionally happens before catalog lookup, including while the
 * old scaffold directory still exists during a staged migration.
 */
export function resolvePcrIdentity({ root, pcrId }) {
  const normalizedPcrId = String(pcrId);
  const alias = findPcrIdAlias({ root, pcrId: normalizedPcrId });
  if (alias) {
    return {
      resolution_status: "legacy_id_redirect",
      requested_pcr_id: normalizedPcrId,
      redirect: legacyPcrIdRedirect(alias),
      pcr: null,
    };
  }
  return {
    resolution_status: "canonical",
    requested_pcr_id: normalizedPcrId,
    redirect: null,
    pcr: getCurrentPcrSnapshotUnchecked({ root, pcrId: normalizedPcrId }).pcr,
  };
}

function legacyPcrIdRedirect(alias) {
  return {
    source_pcr_id: alias.source_pcr_id,
    source_pcr_path: alias.source_pcr_path,
    target: structuredClone(alias.target),
    reason: alias.reason,
    decision_ref: alias.decision_ref,
    next_command: nextCommandForLegacyPcrAlias(alias.target),
  };
}

function nextCommandForLegacyPcrAlias(target) {
  if (target.kind === "classification_coverage") {
    return (
      "npm --silent run tiangong-pcr -- resolve --classification " +
      `${target.classification_system}:${target.classification_version}:${target.code} --format json`
    );
  }
  return (
    "npm --silent run tiangong-pcr -- resolve --pcr " +
    `${target.pcr_id} --format json`
  );
}

function throwIfLegacyPcrId({ root, pcrId }) {
  const alias = findPcrIdAlias({ root, pcrId: String(pcrId) });
  if (alias) {
    throw new PcrLegacyIdRedirectError(alias);
  }
}

export function getPcrById({ root, pcrId, refresh = false }) {
  return getCurrentPcrSnapshot({ root, pcrId, refresh }).pcr;
}

export function getPcrReadiness({ root, pcrId, refresh = false }) {
  return structuredClone(getPcrById({ root, pcrId, refresh }).readiness);
}

export function readPcrMarkdown({ root, pcrId, language = "en-US" }) {
  const snapshot = getCurrentPcrSnapshot({ root, pcrId });
  const markdownName = `pcr.${language}.md`;
  const markdownPath = path.join(root, snapshot.pcr.path, markdownName);
  const artifact = snapshot.artifacts[markdownName];
  if (!artifact?.bytes) {
    throw new Error(`PCR Markdown not found: ${toPosix(path.relative(root, markdownPath))}`);
  }
  return artifact.bytes.toString("utf8");
}

export function buildGuidance({ root, pcrId }) {
  return buildGuidanceForOperation({ root, pcrId, operation: "guidance" });
}

function buildGuidanceForOperation({ root, pcrId, operation }) {
  const snapshot = getCurrentPcrSnapshot({ root, pcrId });
  const { pcr, structured, structuredPath } = snapshot;
  assertPcrUsable({ pcr, operation });
  if (!structured) {
    throw new Error(
      `PCR ${pcrId} passed readiness without a verified structured projection.`,
    );
  }
  const guidance = {
    schema_version: 1,
    guidance_kind: "tiangong-pcr-agent-guidance",
    pcr,
    readiness: structuredClone(pcr.readiness),
    source_structured: toPosix(path.relative(root, structuredPath)),
    system_boundary: structured.system_boundary ?? {},
    reference_flow: structured.reference_flow_definition ?? {},
    boundary_abstraction: structured.boundary_abstraction ?? {},
    measurement_rules: structured.measurement_rules ?? structured.unit_conventions ?? [],
    process_map: structured.process_map ?? [],
    process_inventory: structured.process_inventory ?? [],
    production_guidance: {
      collection_protocols: structured.dataset_production?.collection_protocols ?? [],
      calculation_rules: structured.dataset_production?.calculation_rules ?? [],
      data_quality_requirements: structured.dataset_production?.data_quality_requirements ?? [],
    },
    published_dataset_profile: structured.published_dataset_profile ?? {},
    allocation_rules: structured.allocation_rules ?? [],
    data_quality_rules: structured.data_quality_rules ?? [],
    validation_rules: structured.validation_rules ?? [],
    data_sources: structured.data_sources ?? [],
    validation_notes: [
      "Use this guidance as the source of Tiangong foreground data collection package requirements.",
      "Preserve Tiangong UUIDs exactly and keep PCR-derived UUID references version-free.",
      "Derive Flow Cards before identity binding and never enumerate Flow Set groups to create cards. Product-flow inputs apply the selected Flow Set's declared binding policy: group-level cites one exact group, while set-level cites only the set id and version. Energy supply defaults to set-level when foreground records determine the carrier and may use one exact group when the PCR method requires a specific energy function. Elementary flows use an exact verified UUID as fixed or remain unmapped. Foreground data generation expands deferred Product-flow scope from actual records, and every final TIDAS process exchange must resolve to a concrete flow UUID.",
      "Run tiangong-pcr validate-dataset after constructing a foreground data package and draft feedback if PCR guidance is missing or ambiguous.",
    ],
  };
  assertCoreContract("guidance-output.schema.json", guidance, {
    code: "PCR_INTERNAL_CONTRACT_INVALID",
    entityKind: "Agent guidance output",
    source: toPosix(path.relative(root, structuredPath)),
  });
  return guidance;
}

export function createFeedbackDraft({
  root,
  pcrId,
  type,
  affectedSection = "",
  processId = "",
  flowRole = "",
  summary = "",
  evidence = "",
  proposedChange = "",
  agent = "tiangong-pcr",
}) {
  if (!FEEDBACK_TYPES.includes(type)) {
    throw new Error(`Unsupported feedback type: ${type}`);
  }
  const pcr = pcrId ? getPcrById({ root, pcrId }) : null;
  const title = `PCR feedback: ${type}${pcrId ? ` for ${pcrId}` : ""}`;
  const body = `## Summary

${summary || "Describe the PCR issue or improvement."}

## Feedback metadata

| Field | Value |
| --- | --- |
| PCR id | ${pcrId || ""} |
| PCR version | ${pcr?.version ?? ""} |
| Feedback type | ${type} |
| Affected section | ${affectedSection} |
| Affected process_id | ${processId} |
| Affected flow role | ${flowRole} |
| Generated by | ${agent} |

## Current PCR text or rule excerpt


## Proposed change

${proposedChange}

## Evidence sources

${evidence}

## Impact on foreground data package construction


## Maintainer intake checklist

- [ ] Classify the feedback as PCR content, classification mapping, UUID identity, translation, source evidence, or CLI/validator behavior.
- [ ] Verify cited evidence and Tiangong UUID references before changing PCR content.
- [ ] Update canonical \`pcr.en-US.md\` first when methodology changes.
- [ ] Align \`pcr.zh-CN.md\` when user-facing text changes.
- [ ] Run \`npm run pcr:sync-structured -- --pcr <library/pcrs/...>\` when canonical Markdown changes.
- [ ] Bump or publish the PCR manifest if lifecycle state changes.
`;

  const draft = { title, body };
  assertCoreContract("feedback-draft-output.schema.json", draft, {
    code: "PCR_INTERNAL_CONTRACT_INVALID",
    entityKind: "PCR feedback issue draft output",
  });
  return draft;
}

export function validateModelAgainstGuidance({ root, pcrId, model }) {
  const guidance = buildGuidanceForOperation({ root, pcrId, operation: "validation" });
  const findings = [];
  const accepted = validateCoreContract("model-validation-input.schema.json", model).valid;
  const text = typeof model === "string" ? model : accepted ? JSON.stringify(model) : "";
  const checksPerformed = [];
  const checksSkipped = [];

  if (!accepted) {
    findings.push({
      severity: "error",
      code: "invalid_model_input",
      message: "Model input must be text or a JSON object.",
    });
  }

  const requiredQualifiers = asArray(guidance.reference_flow.required_qualifiers);
  if (accepted && requiredQualifiers.length > 0) {
    checksPerformed.push(performedCheck(
      "required_qualifier_presence",
      "reference_flow.required_qualifiers",
      requiredQualifiers.length,
    ));
    for (const qualifier of requiredQualifiers) {
      if (!text.toLowerCase().includes(String(qualifier).toLowerCase())) {
        findings.push({
          severity: "warning",
          code: "missing_required_qualifier",
          message: `Model text does not mention required qualifier: ${qualifier}`,
        });
      }
    }
  }

  if (accepted) {
    addSkippedCheck(
      checksSkipped,
      "system_boundary_rules",
      "system_boundary.rules",
      asArray(guidance.system_boundary?.rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "boundary_abstraction",
      "boundary_abstraction",
      topLevelRequirementCount(guidance.boundary_abstraction),
    );
    addSkippedCheck(
      checksSkipped,
      "reference_flow_definition",
      "reference_flow",
      topLevelRequirementCount(guidance.reference_flow, ["required_qualifiers"]),
    );
    addSkippedCheck(checksSkipped, "measurement_rules", "measurement_rules", asArray(guidance.measurement_rules).length);
    addSkippedCheck(checksSkipped, "process_map", "process_map", asArray(guidance.process_map).length);
    addSkippedCheck(checksSkipped, "process_inventory", "process_inventory", countInventoryRows(guidance.process_inventory));
    addSkippedCheck(
      checksSkipped,
      "collection_protocols",
      "production_guidance.collection_protocols",
      asArray(guidance.production_guidance.collection_protocols).length,
    );
    addSkippedCheck(
      checksSkipped,
      "calculation_rules",
      "production_guidance.calculation_rules",
      asArray(guidance.production_guidance.calculation_rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "data_quality_requirements",
      "production_guidance.data_quality_requirements",
      asArray(guidance.production_guidance.data_quality_requirements).length,
    );
    addSkippedCheck(checksSkipped, "data_quality_rules", "data_quality_rules", asArray(guidance.data_quality_rules).length);
    addSkippedCheck(checksSkipped, "allocation_rules", "allocation_rules", asArray(guidance.allocation_rules).length);
    addSkippedCheck(checksSkipped, "validation_rules", "validation_rules", asArray(guidance.validation_rules).length);
    addSkippedCheck(
      checksSkipped,
      "published_dataset_profile",
      "published_dataset_profile",
      topLevelRequirementCount(guidance.published_dataset_profile),
    );
  }

  return buildValidationReport({
    validationKind: "tiangong-pcr-model-validation",
    guidance,
    input: {
      input_kind: "process_or_lifecyclemodel",
      representation: typeof model === "string" ? "text" : Array.isArray(model) ? "array" : typeof model,
      accepted,
    },
    findings,
    checksPerformed,
    checksSkipped,
  });
}

export function validateDatasetAgainstGuidance({ root, pcrId, dataset }) {
  const guidance = buildGuidanceForOperation({ root, pcrId, operation: "validation" });
  const findings = [];
  const accepted = validateCoreContract("dataset-validation-input.schema.json", dataset).valid;
  const checksPerformed = [];
  const checksSkipped = [];
  const records = accepted ? collectionRecordArrays(dataset) : [];
  const requiredProtocolIds = asArray(guidance.production_guidance.collection_protocols)
    .map((protocol) => protocol.protocol_id)
    .filter(Boolean);
  const presentProtocolIds = accepted ? collectCollectionRecordProtocolIds(dataset) : new Set();

  if (!accepted) {
    findings.push({
      severity: "error",
      code: "invalid_dataset_input",
      message: "Foreground data package input must be a JSON object.",
    });
  }

  if (accepted && requiredProtocolIds.length > 0) {
    checksPerformed.push(performedCheck(
      "collection_protocol_presence",
      "production_guidance.collection_protocols",
      requiredProtocolIds.length,
    ));
    for (const protocolId of requiredProtocolIds) {
      if (!presentProtocolIds.has(String(protocolId))) {
        findings.push({
          severity: "error",
          code: "missing_collection_protocol_record",
          message: `Foreground data package is missing collection record for protocol_id ${protocolId}`,
        });
      }
    }
  }

  if (accepted) {
    addSkippedCheck(
      checksSkipped,
      "system_boundary_rules",
      "system_boundary.rules",
      asArray(guidance.system_boundary?.rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "boundary_abstraction",
      "boundary_abstraction",
      topLevelRequirementCount(guidance.boundary_abstraction),
    );
    addSkippedCheck(
      checksSkipped,
      "reference_flow_rules",
      "reference_flow",
      topLevelRequirementCount(guidance.reference_flow, ["required_qualifiers"]) +
        asArray(guidance.reference_flow?.required_qualifiers).length,
    );
    addSkippedCheck(checksSkipped, "measurement_rules", "measurement_rules", asArray(guidance.measurement_rules).length);
    addSkippedCheck(checksSkipped, "process_map", "process_map", asArray(guidance.process_map).length);
    addSkippedCheck(checksSkipped, "process_inventory", "process_inventory", countInventoryRows(guidance.process_inventory));
    addSkippedCheck(
      checksSkipped,
      "calculation_rules",
      "production_guidance.calculation_rules",
      asArray(guidance.production_guidance.calculation_rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "data_quality_requirements",
      "production_guidance.data_quality_requirements",
      asArray(guidance.production_guidance.data_quality_requirements).length,
    );
    addSkippedCheck(checksSkipped, "data_quality_rules", "data_quality_rules", asArray(guidance.data_quality_rules).length);
    addSkippedCheck(checksSkipped, "allocation_rules", "allocation_rules", asArray(guidance.allocation_rules).length);
    addSkippedCheck(checksSkipped, "validation_rules", "validation_rules", asArray(guidance.validation_rules).length);
    addSkippedCheck(
      checksSkipped,
      "published_dataset_profile",
      "published_dataset_profile",
      topLevelRequirementCount(guidance.published_dataset_profile),
    );
  }

  return buildValidationReport({
    validationKind: "tiangong-pcr-dataset-validation",
    guidance,
    input: {
      input_kind: "foreground_data_package",
      representation: Array.isArray(dataset) ? "array" : dataset === null ? "null" : typeof dataset,
      accepted,
      collection_record_count: records.length,
      distinct_protocol_id_count: presentProtocolIds.size,
    },
    findings,
    checksPerformed,
    checksSkipped,
  });
}

function collectCollectionRecordProtocolIds(dataset) {
  if (typeof dataset === "string") {
    return new Set();
  }
  const ids = new Set();
  for (const record of collectionRecordArrays(dataset)) {
    const protocolId = record?.protocol_id ?? record?.collection_protocol_id;
    if (protocolId) {
      ids.add(String(protocolId));
    }
  }
  return ids;
}

function collectionRecordArrays(value) {
  if (!value || typeof value !== "object") {
    return [];
  }
  const records = [];
  for (const key of ["collection_records", "foreground_records", "measurement_records"]) {
    if (Array.isArray(value[key])) {
      records.push(...value[key]);
    }
  }
  if (value.data && typeof value.data === "object") {
    records.push(...collectionRecordArrays(value.data));
  }
  return records;
}

function currentPcrEntry(root, entry) {
  return currentPcrSnapshot(root, entry).pcr;
}

function getCurrentPcrSnapshot({ root, pcrId, refresh = false }) {
  throwIfLegacyPcrId({ root, pcrId });
  return getCurrentPcrSnapshotUnchecked({ root, pcrId, refresh });
}

function getCurrentPcrSnapshotUnchecked({ root, pcrId, refresh = false }) {
  const normalizedRoot = path.resolve(root);
  const entry = getPcrCatalog({ root: normalizedRoot, refresh }).find(
    (candidate) => candidate.id === pcrId,
  );
  if (!entry) {
    throw new Error(`PCR not found: ${pcrId}`);
  }
  return currentPcrSnapshot(normalizedRoot, entry);
}

function currentPcrSnapshot(root, entry) {
  const snapshotFiles = readConsistentSnapshotFiles({ root, entry });
  const pcr = pcrFromManifest({
    root,
    pcrDir: path.dirname(entry.manifestPath),
    manifest: snapshotFiles.manifest,
  });
  let projection;
  try {
    projection = inspectPcrProjection({ root, pcr, artifacts: snapshotFiles.artifacts });
  } catch (error) {
    projection = failedProjectionInspection({ root, pcr, error });
  }
  pcr.readiness = assessPcrReadiness({
    pcr,
    projectionFingerprint: projection.fingerprint,
    structuredAvailable: projection.structuredAvailable,
    projectionCompletenessIssues: projection.completenessIssues,
  });
  return { pcr, artifacts: snapshotFiles.artifacts, ...projection };
}

function readConsistentSnapshotFiles({ root, entry }) {
  let lastFailure = null;
  for (let attempt = 1; attempt <= CURRENT_SNAPSHOT_MAX_ATTEMPTS; attempt += 1) {
    try {
      const locationA = assertCurrentSnapshotLocation({ root, entry });
      const manifestABytes = readCanonicalFileBytes(locationA.manifestPath);
      const manifest = parseYaml(manifestABytes.toString("utf8"));
      if (manifest.id !== entry.id) {
        throw snapshotAttemptError(
          "manifest_identity_changed",
          `Expected PCR id ${entry.id}, found ${String(manifest.id)}.`,
          { expected_pcr_id: entry.id, actual_pcr_id: manifest.id ?? null },
        );
      }

      const managedMarkersA = currentManagedStateMarkers(locationA.pcrDir);
      assertManagedSnapshotHashesDeclared({ manifest, managedMarkers: managedMarkersA });
      const artifacts = Object.fromEntries(
        Object.values(RELEASE_ARTIFACTS).map((filename) => [
          filename,
          readOptionalCanonicalFile(path.join(locationA.pcrDir, filename)),
        ]),
      );
      const releaseFailures = releaseArtifactFailures({ manifest, artifacts });
      const locationB = assertCurrentSnapshotLocation({ root, entry });
      const managedMarkersB = currentManagedStateMarkers(locationB.pcrDir);
      if (!sameStrings(managedMarkersA, managedMarkersB)) {
        throw snapshotAttemptError(
          "managed_state_changed_during_read",
          "PCR managed release state changed while its current snapshot was being read.",
          {
            managed_markers_before: managedMarkersA,
            managed_markers_after: managedMarkersB,
          },
        );
      }
      const manifestBBytes = readCanonicalFileBytes(locationB.manifestPath);
      if (!manifestABytes.equals(manifestBBytes)) {
        throw snapshotAttemptError(
          "manifest_changed_during_read",
          "manifest.yaml changed while its current artifacts were being read.",
        );
      }
      if (releaseFailures.length > 0) {
        throw snapshotAttemptError(
          "release_artifact_hash_mismatch",
          "Current PCR artifacts do not match manifest.release_artifacts.",
          { manifest_status: manifest.status ?? null, artifacts: releaseFailures },
        );
      }
      return { manifest, artifacts };
    } catch (error) {
      lastFailure = snapshotFailureDetails(error);
    }
  }
  throw new PcrCurrentSnapshotInconsistentError({
    pcrId: entry.id,
    pcrPath: entry.path,
    attempts: CURRENT_SNAPSHOT_MAX_ATTEMPTS,
    lastFailure,
  });
}

function releaseArtifactFailures({ manifest, artifacts }) {
  if (!Object.hasOwn(manifest, "release_artifacts")) {
    return [];
  }
  const expectedHashes = isRecord(manifest.release_artifacts)
    ? manifest.release_artifacts
    : {};
  const failures = [];
  for (const [hashField, filename] of Object.entries(RELEASE_ARTIFACTS)) {
    const artifact = artifacts[filename];
    const expected = expectedHashes[hashField];
    if (!artifact?.bytes) {
      failures.push({
        artifact: filename,
        hash_field: hashField,
        expected: typeof expected === "string" ? expected : null,
        actual: null,
        reason: `artifact_unreadable:${errorCode(artifact?.error)}`,
      });
      continue;
    }
    const actual = exactByteSha256(artifact.bytes);
    if (typeof expected !== "string" || expected !== actual) {
      failures.push({
        artifact: filename,
        hash_field: hashField,
        expected: typeof expected === "string" ? expected : null,
        actual,
        reason: "sha256_mismatch",
      });
    }
  }
  return failures;
}

function assertManagedSnapshotHashesDeclared({ manifest, managedMarkers }) {
  if (managedMarkers.length === 0 || Object.hasOwn(manifest, "release_artifacts")) {
    return;
  }
  throw snapshotAttemptError(
    "managed_release_artifacts_missing",
    "Managed PCR current state requires manifest.release_artifacts and cannot use legacy snapshot semantics.",
    {
      manifest_status: manifest.status ?? null,
      managed_markers: managedMarkers,
      required_field: "manifest.release_artifacts",
      required_hash_fields: Object.keys(RELEASE_ARTIFACTS),
    },
  );
}

function currentManagedStateMarkers(pcrDir) {
  return ["release-history.yaml", "releases"]
    .filter((name) => pathEntryExists(path.join(pcrDir, name)))
    .sort((left, right) => left.localeCompare(right));
}

function pathEntryExists(targetPath) {
  try {
    lstatSync(targetPath);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

function sameStrings(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function assertCurrentSnapshotLocation({ root, entry }) {
  const normalizedRoot = path.resolve(root);
  const pathSegments = String(entry.path).split("/");
  if (
    pathSegments.length !== 5 ||
    pathSegments[0] !== "library" ||
    pathSegments[1] !== "pcrs" ||
    pathSegments.slice(2).some((segment) => !segment || segment === "." || segment === "..")
  ) {
    throw snapshotAttemptError(
      "canonical_pcr_path_invalid",
      "Cached PCR path is not a canonical domain/subdomain/leaf path.",
      {
        pcr_path: entry.path,
        reason: "non_canonical_relative_path",
      },
    );
  }

  const directoryPaths = [normalizedRoot];
  for (const segment of pathSegments) {
    directoryPaths.push(path.join(directoryPaths.at(-1), segment));
  }

  let rootRealPath = null;
  for (const [index, directoryPath] of directoryPaths.entries()) {
    const relativePath = toPosix(path.relative(normalizedRoot, directoryPath)) || ".";
    let stat;
    try {
      stat = lstatSync(directoryPath);
    } catch (error) {
      throw snapshotAttemptError(
        "canonical_pcr_path_invalid",
        `Canonical PCR directory is unavailable: ${relativePath}.`,
        {
          path_component: relativePath,
          reason: `directory_unreadable:${errorCode(error)}`,
          expected_type: "regular_directory",
        },
      );
    }
    if (stat.isSymbolicLink() || !stat.isDirectory()) {
      throw snapshotAttemptError(
        "canonical_pcr_path_invalid",
        `Canonical PCR path component is not a regular directory: ${relativePath}.`,
        {
          path_component: relativePath,
          reason: stat.isSymbolicLink() ? "symbolic_link" : "not_a_directory",
          expected_type: "regular_directory",
        },
      );
    }

    let realPath;
    try {
      realPath = realpathSync(directoryPath);
    } catch (error) {
      throw snapshotAttemptError(
        "canonical_pcr_path_invalid",
        `Canonical PCR directory cannot be resolved: ${relativePath}.`,
        {
          path_component: relativePath,
          reason: `realpath_unavailable:${errorCode(error)}`,
          expected_type: "regular_directory",
        },
      );
    }
    if (index === 0) {
      rootRealPath = realPath;
    } else if (!pathIsInside(rootRealPath, realPath)) {
      throw snapshotAttemptError(
        "canonical_pcr_path_invalid",
        `Canonical PCR directory resolves outside the repository root: ${relativePath}.`,
        {
          path_component: relativePath,
          reason: "realpath_outside_root",
          expected_type: "regular_directory_within_root",
        },
      );
    }
  }

  const pcrDir = directoryPaths.at(-1);
  const manifestPath = path.join(pcrDir, "manifest.yaml");
  if (path.resolve(entry.manifestPath) !== manifestPath) {
    throw snapshotAttemptError(
      "canonical_pcr_path_invalid",
      "Cached manifest path is not the direct manifest.yaml child of its canonical PCR leaf.",
      {
        pcr_path: entry.path,
        reason: "manifest_not_direct_leaf_child",
      },
    );
  }
  return { manifestPath, pcrDir };
}

function pathIsInside(rootPath, candidatePath) {
  const relativePath = path.relative(rootPath, candidatePath);
  return relativePath === "" || (!path.isAbsolute(relativePath) && relativePath !== ".." && !relativePath.startsWith(`..${path.sep}`));
}

function exactByteSha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function readOptionalCanonicalFile(filePath) {
  try {
    return { bytes: readCanonicalFileBytes(filePath), error: null };
  } catch (error) {
    return { bytes: null, error };
  }
}

function readControlledRepositoryFileBytes({ root, filePath, relativePath, label }) {
  const normalizedRoot = path.resolve(root);
  const normalizedFilePath = path.resolve(filePath);
  const containedPath = path.relative(normalizedRoot, normalizedFilePath);
  if (
    containedPath.length === 0
    || path.isAbsolute(containedPath)
    || containedPath === ".."
    || containedPath.startsWith(`..${path.sep}`)
  ) {
    throw new Error(`${label} path escapes the repository root: ${relativePath}`);
  }

  const expectedRelativePath = toPosix(containedPath);
  if (expectedRelativePath !== relativePath) {
    throw new Error(`${label} path is not canonical: ${relativePath}`);
  }

  const before = assertControlledRepositoryPath({
    root: normalizedRoot,
    containedPath,
    relativePath,
    label,
  });
  let descriptor;
  try {
    descriptor = openSync(
      normalizedFilePath,
      fsConstants.O_RDONLY
        | (fsConstants.O_NOFOLLOW ?? 0)
        | (fsConstants.O_NONBLOCK ?? 0),
    );
    const opened = fstatSync(descriptor);
    if (!opened.isFile()) {
      throw new Error(`${label} is not a regular file: ${relativePath}`);
    }
    const after = assertControlledRepositoryPath({
      root: normalizedRoot,
      containedPath,
      relativePath,
      label,
    });
    if (
      opened.dev !== before.dev
      || opened.ino !== before.ino
      || opened.dev !== after.dev
      || opened.ino !== after.ino
    ) {
      throw new Error(`${label} path changed while it was being opened: ${relativePath}`);
    }
    return readFileSync(descriptor);
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }
}

function assertControlledRepositoryPath({ root, containedPath, relativePath, label }) {
  let currentPath = root;
  let finalStats;
  const segments = containedPath.split(path.sep);
  for (const [index, segment] of segments.entries()) {
    currentPath = path.join(currentPath, segment);
    const stats = lstatSync(currentPath);
    if (stats.isSymbolicLink()) {
      throw new Error(`${label} path contains a symbolic link: ${relativePath}`);
    }
    const isLast = index === segments.length - 1;
    if (isLast ? !stats.isFile() : !stats.isDirectory()) {
      throw new Error(
        isLast
          ? `${label} is not a regular file: ${relativePath}`
          : `${label} parent is not a directory: ${relativePath}`,
      );
    }
    if (isLast) {
      finalStats = stats;
    }
  }

  const realRoot = realpathSync(root);
  const realFile = realpathSync(path.join(root, containedPath));
  if (!pathIsInside(realRoot, realFile) || realRoot === realFile) {
    throw new Error(`${label} real path escapes the repository root: ${relativePath}`);
  }
  return finalStats;
}

function readCanonicalFileBytes(filePath) {
  const stat = lstatSync(filePath);
  if (stat.isSymbolicLink() || !stat.isFile()) {
    const error = new Error(`Canonical PCR artifact is not a regular file: ${filePath}`);
    error.code = stat.isSymbolicLink()
      ? "PCR_CANONICAL_SYMLINK_REJECTED"
      : "PCR_CANONICAL_FILE_NOT_REGULAR";
    throw error;
  }
  const descriptor = openSync(
    filePath,
    fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0),
  );
  try {
    if (!fstatSync(descriptor).isFile()) {
      const error = new Error(`Canonical PCR artifact is not a regular file: ${filePath}`);
      error.code = "PCR_CANONICAL_FILE_NOT_REGULAR";
      throw error;
    }
    return readFileSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
}

function snapshotAttemptError(code, message, details = {}) {
  const error = new Error(message);
  error.snapshotCode = code;
  error.snapshotDetails = details;
  return error;
}

function snapshotFailureDetails(error) {
  return {
    code: error?.snapshotCode ?? errorCode(error),
    message: error instanceof Error ? error.message : String(error),
    ...(isRecord(error?.snapshotDetails) ? error.snapshotDetails : {}),
  };
}

function pcrFromManifest({ root, pcrDir, manifest }) {
  const pcr = {
    id: manifest.id,
    path: toPosix(path.relative(root, pcrDir)),
    title: manifest.title ?? {},
    status: manifest.status ?? "unknown",
    version: manifest.version ?? null,
    content_maturity: manifest.content_maturity ?? null,
    languages: manifest.languages ?? {},
    translation_status: manifest.translation_status ?? {},
    classification_refs: manifest.classification_refs ?? [],
  };
  pcr.record_kind = recordKindForPcr(pcr);
  return pcr;
}

function inspectPcrProjection({ root, pcr, artifacts }) {
  const pcrDir = path.join(root, pcr.path);
  const structuredPath = path.join(pcrDir, "structured.yaml");
  const structuredArtifact = artifacts["structured.yaml"];
  const markdownArtifact = artifacts["pcr.en-US.md"];
  if (!isMaterialPcr(pcr)) {
    return {
      fingerprint: {
        ...projectionNotRequiredState(),
        schema_valid: null,
      },
      structured: null,
      structuredPath,
      structuredAvailable: Boolean(structuredArtifact?.bytes),
      completenessIssues: [],
    };
  }

  if (!structuredArtifact?.bytes && structuredArtifact?.error?.code === "ENOENT") {
    return unavailableProjectionInspection({
      structuredPath,
      structuredAvailable: false,
      fingerprint: missingProjectionState(
        "missing",
        "structured_projection_missing",
        "structured.yaml is required for material PCR guidance and validation.",
      ),
    });
  }

  if (!markdownArtifact?.bytes && markdownArtifact?.error?.code === "ENOENT") {
    return unavailableProjectionInspection({
      structuredPath,
      structuredAvailable: Boolean(structuredArtifact?.bytes),
      fingerprint: missingProjectionState(
        "source_missing",
        "projection_source_missing",
        "Canonical pcr.en-US.md is required to verify the structured projection.",
      ),
    });
  }

  if (!markdownArtifact?.bytes) {
    return unavailableProjectionInspection({
      structuredPath,
      structuredAvailable: Boolean(structuredArtifact?.bytes),
      fingerprint: invalidProjectionState(
        "projection_source_unreadable",
        `Canonical pcr.en-US.md could not be read (${errorCode(markdownArtifact?.error)}).`,
        null,
      ),
    });
  }

  if (!structuredArtifact?.bytes) {
    return unavailableProjectionInspection({
      structuredPath,
      structuredAvailable: false,
      fingerprint: invalidProjectionState(
        "structured_projection_unreadable",
        `structured.yaml could not be read (${errorCode(structuredArtifact?.error)}).`,
        false,
      ),
    });
  }

  const sourceMarkdown = markdownArtifact.bytes.toString("utf8");
  const structuredText = structuredArtifact.bytes.toString("utf8");

  let structured;
  try {
    structured = parseYaml(structuredText);
  } catch (error) {
    return unavailableProjectionInspection({
      structuredPath,
      structuredAvailable: true,
      fingerprint: invalidProjectionState(
        "structured_projection_parse_error",
        `structured.yaml could not be parsed (${errorCode(error)}).`,
        false,
      ),
    });
  }

  const schemaResult = validateCoreContract(
    "structured-projection.schema.json",
    structured,
    { entityKind: "material structured projection" },
  );
  const integrity = inspectProjectionIntegrity({
    sourceMarkdown,
    structuredText,
    metadata: structured?.projection_metadata,
  });
  const schemaIssues = schemaResult.valid
    ? []
    : [
        {
          code: "structured_schema_invalid",
          message: `structured.yaml violates the material projection schema (${schemaResult.errors.length} issue(s)).`,
        },
        ...schemaResult.errors.map((error) => ({
          code: `structured_schema.${error.keyword}`,
          message: `${error.instance_path}: ${error.message}`,
        })),
      ];
  const issues = deduplicateMessages([...schemaIssues, ...integrity.issues]);
  const fingerprint = {
    ...integrity,
    status: schemaResult.valid ? integrity.status : "invalid",
    schema_valid: schemaResult.valid,
    issues,
  };

  return {
    fingerprint,
    structured: schemaResult.valid && integrity.status === "current" ? structured : null,
    structuredPath,
    structuredAvailable: true,
    completenessIssues: schemaResult.valid
      ? materialProjectionCompletenessIssues(structured, { expectedPcrId: pcr.id })
      : [],
  };
}

function unavailableProjectionInspection({ fingerprint, structuredPath, structuredAvailable }) {
  return {
    fingerprint,
    structured: null,
    structuredPath,
    structuredAvailable,
    completenessIssues: [],
  };
}

function failedProjectionInspection({ root, pcr, error }) {
  return unavailableProjectionInspection({
    structuredPath: path.join(root, pcr.path, "structured.yaml"),
    structuredAvailable: false,
    fingerprint: invalidProjectionState(
      "projection_inspection_failed",
      `Projection integrity inspection failed (${errorCode(error)}).`,
      false,
    ),
  });
}

function invalidProjectionState(code, message, schemaValid) {
  return {
    required: true,
    status: "invalid",
    schema_valid: schemaValid,
    contract_version: null,
    source_sha256: null,
    generated_content_sha256: null,
    source_hash_valid: null,
    content_hash_valid: null,
    issues: [{ code, message }],
  };
}

function errorCode(error) {
  return typeof error?.code === "string" && error.code
    ? error.code
    : "unknown_error";
}

function missingProjectionState(status, code, message) {
  return {
    required: true,
    status,
    schema_valid: null,
    contract_version: null,
    source_sha256: null,
    generated_content_sha256: null,
    source_hash_valid: null,
    content_hash_valid: null,
    issues: [{ code, message }],
  };
}

function isMaterialPcr(pcr) {
  return recordKindForPcr(pcr) === "methodology";
}

function normalizeCatalogScope(scope) {
  const normalized = String(scope);
  if (!PCR_CATALOG_SCOPE_SET.has(normalized)) {
    throw new PcrCatalogScopeError(scope);
  }
  return normalized;
}

function recordMatchesScope(pcr, scope) {
  if (scope === "all") {
    return true;
  }
  return scope === "material"
    ? pcr.record_kind === "methodology"
    : pcr.record_kind === "legacy_scaffold_reference";
}

function currentCatalogEntryMatchesScope(root, entry, scope) {
  const manifest = readConsistentCurrentManifest({ root, entry });
  const recordKind = recordKindForPcr({
    status: manifest.status ?? "unknown",
    content_maturity: manifest.content_maturity ?? null,
  });
  return scope === "material"
    ? recordKind === "methodology"
    : recordKind === "legacy_scaffold_reference";
}

function readConsistentCurrentManifest({ root, entry }) {
  let lastFailure = null;
  for (let attempt = 1; attempt <= CURRENT_SNAPSHOT_MAX_ATTEMPTS; attempt += 1) {
    try {
      const locationA = assertCurrentSnapshotLocation({ root, entry });
      const manifestABytes = readCanonicalFileBytes(locationA.manifestPath);
      const manifest = parseYaml(manifestABytes.toString("utf8"));
      if (manifest.id !== entry.id) {
        throw snapshotAttemptError(
          "manifest_identity_changed",
          `Expected PCR id ${entry.id}, found ${String(manifest.id)}.`,
          { expected_pcr_id: entry.id, actual_pcr_id: manifest.id ?? null },
        );
      }

      const locationB = assertCurrentSnapshotLocation({ root, entry });
      const manifestBBytes = readCanonicalFileBytes(locationB.manifestPath);
      if (!manifestABytes.equals(manifestBBytes)) {
        throw snapshotAttemptError(
          "manifest_changed_during_read",
          "manifest.yaml changed while its catalog scope was being determined.",
        );
      }
      return manifest;
    } catch (error) {
      lastFailure = snapshotFailureDetails(error);
    }
  }
  throw new PcrCurrentSnapshotInconsistentError({
    pcrId: entry.id,
    pcrPath: entry.path,
    attempts: CURRENT_SNAPSHOT_MAX_ATTEMPTS,
    lastFailure,
  });
}

function recordKindForPcr(pcr) {
  if (pcr.status === "scaffold" && pcr.content_maturity === "empty_scaffold") {
    return "legacy_scaffold_reference";
  }
  if (
    METHODOLOGY_LIFECYCLE_STATUSES.has(pcr.status) &&
    METHODOLOGY_MATURITIES.has(pcr.content_maturity)
  ) {
    return "methodology";
  }
  return "invalid_lifecycle_state";
}

function assessPcrReadiness({
  pcr,
  projectionFingerprint,
  structuredAvailable,
  projectionCompletenessIssues = [],
}) {
  const blockers = [];
  const warnings = [];
  const methodologyStatus = pcr.content_maturity ?? "unknown";
  const lifecycleStatus = pcr.status ?? "unknown";
  const chineseTranslationStatus = pcr.translation_status?.["zh-CN"] ?? "unknown";
  if (pcr.record_kind === "invalid_lifecycle_state") {
    blockers.push({
      code: "invalid_lifecycle_identity",
      message:
        `status ${lifecycleStatus} and content_maturity ${methodologyStatus} do not identify either ` +
        "a legacy scaffold or a material methodology record.",
    });
  }
  if (!GUIDANCE_MATURITIES.has(methodologyStatus)) {
    blockers.push({
      code: "methodology_not_authored",
      message: `content_maturity ${methodologyStatus} is not usable methodology.`,
    });
  }
  if (lifecycleStatus === "scaffold") {
    blockers.push({
      code: "scaffold_lifecycle",
      message: "PCR lifecycle status is scaffold.",
    });
  } else if (!GUIDANCE_LIFECYCLE_STATUSES.has(lifecycleStatus)) {
    blockers.push({
      code: "lifecycle_not_usable",
      message: `PCR lifecycle status ${lifecycleStatus} is not available for guidance.`,
    });
  }
  if (lifecycleStatus === "deprecated" || methodologyStatus === "deprecated_methodology") {
    blockers.push({
      code: "deprecated_methodology",
      message: "Deprecated PCR methodology must not guide new work.",
    });
  }
  if (projectionFingerprint.required && (
    projectionFingerprint.schema_valid !== true || projectionFingerprint.status !== "current"
  )) {
    blockers.push(...projectionFingerprint.issues);
  }
  if (
    projectionFingerprint.required &&
    projectionFingerprint.schema_valid === true &&
    projectionFingerprint.status === "current"
  ) {
    blockers.push(...projectionCompletenessIssues);
  }
  if (
    GUIDANCE_MATURITIES.has(methodologyStatus) &&
    !USABLE_LIFECYCLE_STATES.get(lifecycleStatus)?.has(methodologyStatus)
  ) {
    blockers.push({
      code: "incompatible_lifecycle_state",
      message: `status ${lifecycleStatus} is incompatible with content_maturity ${methodologyStatus}.`,
    });
  }
  if (
    lifecycleStatus === "active" &&
    !["aligned", "reviewed"].includes(chineseTranslationStatus)
  ) {
    blockers.push({
      code: "translation_not_aligned",
      message: `active PCR requires aligned or reviewed zh-CN translation; found ${chineseTranslationStatus}.`,
    });
  }
  if (lifecycleStatus === "published" && chineseTranslationStatus !== "reviewed") {
    blockers.push({
      code: "translation_not_reviewed",
      message: `published PCR requires reviewed zh-CN translation; found ${chineseTranslationStatus}.`,
    });
  }

  if (methodologyStatus === "authored_methodology") {
    warnings.push({
      code: "methodology_not_reviewed",
      message: "Authored methodology is candidate guidance and still requires methodology review.",
    });
  }
  if (
    lifecycleStatus === "candidate" &&
    !["aligned", "reviewed"].includes(chineseTranslationStatus)
  ) {
    warnings.push({
      code: "translation_not_aligned",
      message: `Candidate zh-CN translation is ${chineseTranslationStatus}; use canonical en-US guidance for methodology decisions.`,
    });
  }

  const uniqueBlockers = deduplicateMessages(blockers);
  const uniqueWarnings = deduplicateMessages(warnings);
  const usable = uniqueBlockers.length === 0;
  const readiness = {
    status: usable
      ? (REVIEWED_MATURITIES.has(methodologyStatus) && lifecycleStatus !== "candidate" ? "ready" : "review_required")
      : "unavailable",
    lifecycle_status: lifecycleStatus,
    methodology_status: methodologyStatus,
    structured_projection_available: structuredAvailable,
    projection_fingerprint: structuredClone(projectionFingerprint),
    usable_for_guidance: usable,
    usable_for_validation: usable,
    blockers: uniqueBlockers,
    warnings: uniqueWarnings,
  };
  assertCoreContract("readiness.schema.json", readiness, {
    code: "PCR_INTERNAL_CONTRACT_INVALID",
    entityKind: "PCR readiness",
  });
  return readiness;
}

function assertPcrUsable({ pcr, operation }) {
  const usabilityKey = operation === "validation" ? "usable_for_validation" : "usable_for_guidance";
  if (!pcr.readiness?.[usabilityKey]) {
    throw new PcrUsabilityError({ pcrId: pcr.id, operation, readiness: pcr.readiness });
  }
}

function buildValidationReport({
  validationKind,
  guidance,
  input,
  findings,
  checksPerformed,
  checksSkipped,
}) {
  const checkedRequirementCount = checksPerformed.reduce((total, check) => total + check.requirement_count, 0);
  const skippedRequirementCount = checksSkipped.reduce((total, check) => total + check.requirement_count, 0);
  const completeness = checksPerformed.length === 0
    ? "none"
    : checksSkipped.length > 0
      ? "partial"
      : "complete";
  const findingSummary = countFindingsBySeverity(findings);
  const validationStatus = findingSummary.error > 0
    ? "failed"
    : checksPerformed.length === 0
      ? "inconclusive"
      : "passed";

  const report = {
    schema_version: 1,
    validation_kind: validationKind,
    pcr: guidance.pcr,
    readiness: structuredClone(guidance.readiness),
    validation_status: validationStatus,
    completeness,
    input,
    check_coverage: {
      total_requirement_count: checkedRequirementCount + skippedRequirementCount,
      checked_requirement_count: checkedRequirementCount,
      skipped_requirement_count: skippedRequirementCount,
      checks_performed: checksPerformed,
      checks_skipped: checksSkipped,
    },
    finding_count: findings.length,
    finding_summary: findingSummary,
    findings,
  };
  assertCoreContract("validation-output.schema.json", report, {
    code: "PCR_INTERNAL_CONTRACT_INVALID",
    entityKind: "PCR validation report",
  });
  return report;
}

function performedCheck(checkId, requirementFamily, requirementCount) {
  return {
    check_id: checkId,
    requirement_family: requirementFamily,
    requirement_count: requirementCount,
    evaluated_requirement_count: requirementCount,
  };
}

function addSkippedCheck(checks, checkId, requirementFamily, requirementCount) {
  if (requirementCount <= 0) {
    return;
  }
  checks.push({
    check_id: checkId,
    requirement_family: requirementFamily,
    requirement_count: requirementCount,
    reason: "Validator does not yet implement this requirement family.",
  });
}

function countFindingsBySeverity(findings) {
  const summary = { error: 0, warning: 0, info: 0 };
  for (const finding of findings) {
    if (Object.hasOwn(summary, finding.severity)) {
      summary[finding.severity] += 1;
    }
  }
  return summary;
}

function deduplicateMessages(entries) {
  return [
    ...new Map(
      entries.map((entry) => [`${entry.code}\0${entry.message}`, entry]),
    ).values(),
  ];
}

function countInventoryRows(processInventory) {
  let count = 0;
  for (const process of asArray(processInventory)) {
    for (const direction of ["inputs", "outputs"]) {
      const groups = process?.[direction];
      if (!isRecord(groups)) {
        continue;
      }
      for (const rows of Object.values(groups)) {
        count += asArray(rows).length;
      }
    }
  }
  return count;
}

function topLevelRequirementCount(value, excludedKeys = []) {
  if (!isRecord(value)) {
    return 0;
  }
  const excluded = new Set(excludedKeys);
  return Object.entries(value).filter(
    ([key, requirement]) => !excluded.has(key) && hasRequirementValue(requirement),
  ).length;
}

function hasRequirementValue(value) {
  if (Array.isArray(value)) {
    return value.some(hasRequirementValue);
  }
  if (isRecord(value)) {
    return Object.values(value).some(hasRequirementValue);
  }
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function findManifestFiles(directory) {
  const results = [];
  for (const domainDir of canonicalChildDirectories(directory)) {
    for (const subdomainDir of canonicalChildDirectories(domainDir)) {
      for (const pcrDir of canonicalChildDirectories(subdomainDir)) {
        const manifestPath = path.join(pcrDir, "manifest.yaml");
        if (isCanonicalFile(manifestPath)) {
          results.push(manifestPath);
        }
      }
    }
  }
  return results;
}

function canonicalChildDirectories(directory) {
  return readdirSync(directory)
    .map((entry) => path.join(directory, entry))
    .filter(isCanonicalDirectory)
    .sort((left, right) => left.localeCompare(right));
}

function isCanonicalDirectory(directory) {
  try {
    const stat = lstatSync(directory);
    return !stat.isSymbolicLink() && stat.isDirectory();
  } catch (error) {
    if (error?.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

function isCanonicalFile(filePath) {
  try {
    const stat = lstatSync(filePath);
    return !stat.isSymbolicLink() && stat.isFile();
  } catch (error) {
    if (error?.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}
