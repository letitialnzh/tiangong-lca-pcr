import assert from "node:assert/strict";
import test from "node:test";

import { materialProjectionCompletenessIssues } from "../../packages/pcr-core/src/projection-completeness.mjs";
import { manifestIdentityProblems } from "./lifecycle-policy.mjs";
import {
  assertClassificationMapping,
  validateClassificationMapping,
  validateManifest,
  validateMarkdownFrontmatter,
  validateRelease,
  validateReleaseHistory,
  validateRevision,
  validateStructured,
} from "./schema-contracts.mjs";

test("manifest Schema validates shape while active identity completeness stays semantic", () => {
  const manifest = {
    schema_version: 1,
    id: "pcr.example",
    title: { "en-US": "Example", "zh-CN": "示例" },
    status: "active",
    pcr_kind: "product_category_rule",
    content_maturity: "reviewed_methodology",
  };

  assert.equal(validateManifest(manifest).valid, true);
  assert.deepEqual(manifestIdentityProblems(manifest), [
    "manifest requires non-empty target_entities array",
    "manifest requires non-empty languages.canonical",
    "manifest requires non-empty languages.available array",
  ]);
});

test("structured Schema permits empty sections whose material completeness is checked semantically", () => {
  const hash = `sha256:${"a".repeat(64)}`;
  const projection = {
    schema_version: 1,
    generated_from: "markdown",
    source_markdown: "pcr.en-US.md",
    product_category_identity: {},
    functional_unit: {},
    system_boundary: { rules: [] },
    boundary_abstraction: {},
    reference_flow_definition: {},
    reference_flows: [],
    measurement_rules: [],
    process_map: [],
    process_inventory: [],
    allocation_rules: [],
    dataset_production: {
      collection_protocols: [],
      calculation_rules: [],
      data_quality_requirements: [],
    },
    validation_rules: [],
    published_dataset_profile: {},
    data_sources: [],
    module_references: {
      selection_mode: "automatic",
      selected: [],
      unresolved: [],
    },
    projection_metadata: {
      contract_version: "1",
      generator: "tiangong-pcr-builder/markdown-projection",
      canonical_markdown: {
        path: "pcr.en-US.md",
        normalization: "utf8-lf-v1",
        hash_algorithm: "sha256",
        sha256: hash,
      },
      generated_content_sha256: hash,
    },
  };
  const result = validateStructured(projection);
  const completenessIssues = materialProjectionCompletenessIssues(projection, {
    expectedPcrId: "pcr.example",
  });

  assert.deepEqual(result.errors, []);
  assert.equal(result.valid, true);
  assert.ok(
    completenessIssues.some(
      (issue) => issue.code === "material_projection.functional_unit.what",
    ),
  );
  assert.ok(
    completenessIssues.some(
      (issue) => issue.code === "material_projection.process_inventory.flow_rows",
    ),
  );
});

test("builder contracts bind stable lifecycle and mapping tokens to shared vocabularies", () => {
  const manifest = {
    schema_version: 1,
    id: "pcr.example",
    title: { "en-US": "Example", "zh-CN": "示例" },
    status: "active",
    pcr_kind: "product_category_rule",
    content_maturity: "reviewed_methodology",
    target_entities: ["process"],
    translation_status: { "zh-CN": "reviewed" },
    classification_refs: [
      {
        system: "cpc",
        version: "3.0",
        code: "01234",
        title: "Example",
        mapping_type: "exact",
      },
    ],
  };
  const frontmatter = {
    schema_version: 1,
    pcr_id: "pcr.example",
    language: "en-US",
    status: "active",
    content_maturity: "reviewed_methodology",
    translation_status: "canonical",
    sync_with: "pcr.zh-CN.md",
  };
  const mapping = {
    schema_version: 2,
    classification_system: "cpc",
    classification_version: "3.0",
    status: "current",
    mappings: [
      {
        code: "01234",
        label: "Example",
        pcr_id: "pcr.example",
        mapping_type: "exact",
        confidence: "high",
        acceptance: {
          status: "accepted",
          decided_by: "PCR review board",
          decided_at_utc: "2026-07-14T12:34:56Z",
          decision_ref: "docs/adr/fixture-mapping-decision.md",
        },
      },
    ],
  };

  assert.equal(validateManifest(manifest).valid, true);
  assert.equal(validateMarkdownFrontmatter(frontmatter).valid, true);
  assert.equal(
    validateMarkdownFrontmatter({ ...frontmatter, translation_status: "reviewed" }).valid,
    true,
  );
  assert.equal(validateClassificationMapping(mapping).valid, true);

  assert.equal(validateManifest({ ...manifest, status: "approved" }).valid, false);
  assert.equal(
    validateManifest({ ...manifest, content_maturity: "finished_methodology" }).valid,
    false,
  );
  assert.equal(validateManifest({ ...manifest, target_entities: ["report"] }).valid, false);
  assert.equal(
    validateManifest({ ...manifest, translation_status: { "zh-CN": "canonical" } }).valid,
    false,
  );
  assert.equal(
    validateMarkdownFrontmatter({ ...frontmatter, translation_status: "approved" }).valid,
    false,
  );
  assert.equal(
    validateManifest({
      ...manifest,
      classification_refs: [{ ...manifest.classification_refs[0], mapping_type: "approximate" }],
    }).valid,
    false,
  );
  mapping.mappings[0].mapping_type = "approximate";
  assert.equal(validateClassificationMapping(mapping).valid, false);
});

test("classification mapping Schema keeps v1 read compatibility and makes v2 accepted-only", () => {
  const legacyEdge = {
    code: "01234",
    label: "Example",
    pcr_id: "pcr.example",
    mapping_type: "manual_review",
    confidence: "scaffold",
  };
  const legacy = {
    schema_version: 1,
    classification_system: "CPC",
    classification_version: "3.0",
    status: "scaffold",
    mappings: [legacyEdge],
  };
  const acceptedEdge = {
    ...legacyEdge,
    mapping_type: "exact",
    confidence: "reviewed",
    acceptance: {
      status: "accepted",
      decided_by: "PCR review board",
      decided_at_utc: "2026-07-14T12:34:56.123Z",
      decision_ref: "docs/adr/fixture-mapping-decision.md",
    },
  };
  const current = {
    schema_version: 2,
    classification_system: "CPC",
    classification_version: "3.0",
    status: "current",
    mappings: [acceptedEdge],
  };

  assert.equal(validateClassificationMapping(legacy).valid, true);
  assert.equal(validateClassificationMapping({ ...current, mappings: [] }).valid, true);
  assert.equal(validateClassificationMapping(current).valid, true);

  assert.equal(validateClassificationMapping({ ...legacy, status: "current" }).valid, false);
  assert.equal(validateClassificationMapping({ ...current, status: "scaffold" }).valid, false);
  assert.equal(
    validateClassificationMapping({
      ...current,
      mappings: [{ ...legacyEdge, mapping_type: "exact", confidence: "reviewed" }],
    }).valid,
    false,
  );
  assert.equal(
    validateClassificationMapping({
      ...current,
      mappings: [{
        ...acceptedEdge,
        acceptance: {
          ...acceptedEdge.acceptance,
          decision_ref: "https://example.test/unreviewed",
        },
      }],
    }).valid,
    false,
  );
  assert.throws(
    () => assertClassificationMapping({
      ...current,
      mappings: [{
        ...acceptedEdge,
        acceptance: {
          ...acceptedEdge.acceptance,
          decided_at_utc: "2026-02-31T12:34:56Z",
        },
      }],
    }),
    (error) => {
      assert.equal(error.code, "PCR_SCHEMA_INVALID");
      assert.equal(
        error.errors[0].instance_path,
        "/mappings/0/acceptance/decided_at_utc",
      );
      return true;
    },
  );
  assert.equal(
    validateClassificationMapping({
      ...current,
      mappings: [{
        ...acceptedEdge,
        acceptance: {
          ...acceptedEdge.acceptance,
          decided_at_utc: "2026-02-31T12:34:56Z",
        },
      }],
    }).valid,
    false,
  );
  assert.equal(
    validateClassificationMapping({
      ...current,
      mappings: [{ ...acceptedEdge, mapping_type: "manual_review" }],
    }).valid,
    false,
  );
  assert.equal(
    validateClassificationMapping({
      ...current,
      mappings: [{
        ...acceptedEdge,
        acceptance: { ...acceptedEdge.acceptance, status: "proposed" },
      }],
    }).valid,
    false,
  );
  assert.equal(
    validateClassificationMapping({
      ...current,
      mappings: [{
        ...acceptedEdge,
        acceptance: {
          ...acceptedEdge.acceptance,
          decided_at_utc: "2026-07-14T20:34:56+08:00",
        },
      }],
    }).valid,
    false,
  );
  assert.equal(
    validateClassificationMapping({
      ...current,
      mappings: [{
        ...acceptedEdge,
        acceptance: { ...acceptedEdge.acceptance, decided_by: "   " },
      }],
    }).valid,
    false,
  );
  assert.equal(
    validateClassificationMapping({
      ...legacy,
      mappings: [{ ...legacyEdge, acceptance: acceptedEdge.acceptance }],
    }).valid,
    false,
  );
});

test("published and deprecated manifests require fixed release artifact fingerprints", () => {
  const hash = `sha256:${"a".repeat(64)}`;
  const manifest = {
    schema_version: 1,
    id: "pcr.example",
    title: { "en-US": "Example", "zh-CN": "示例" },
    status: "published",
    pcr_kind: "product_category_rule",
    content_maturity: "published_methodology",
  };
  const releaseArtifacts = {
    pcr_en_us_sha256: hash,
    pcr_zh_cn_sha256: hash,
    structured_sha256: hash,
  };

  assert.equal(validateManifest(manifest).valid, false);
  assert.equal(validateManifest({ ...manifest, release_artifacts: releaseArtifacts }).valid, true);
  assert.equal(
    validateManifest({
      ...manifest,
      status: "deprecated",
      content_maturity: "deprecated_methodology",
    }).valid,
    false,
  );
  assert.equal(
    validateManifest({
      ...manifest,
      status: "deprecated",
      content_maturity: "deprecated_methodology",
      release_artifacts: releaseArtifacts,
    }).valid,
    true,
  );
  assert.equal(
    validateManifest({
      ...manifest,
      release_artifacts: { ...releaseArtifacts, structured_sha256: "a".repeat(64) },
    }).valid,
    false,
  );
  assert.equal(
    validateManifest({
      ...manifest,
      status: "candidate",
      content_maturity: "authored_methodology",
      release_artifacts: releaseArtifacts,
    }).valid,
    false,
  );
});

test("revision, release, and release-history Schemas enforce immutable metadata shapes", () => {
  const hash = `sha256:${"b".repeat(64)}`;
  const revision = {
    schema_version: 1,
    pcr_id: "pcr.example",
    base_version: "1.0.0",
    target_version: "1.1.0-rc.1+review.2",
    opened_at_utc: "2026-07-14T12:34:56.123Z",
  };
  const release = {
    schema_version: 1,
    pcr_id: "pcr.example",
    version: "1.0.0",
    published_at_utc: "2026-07-14T12:34:56Z",
    predecessor_version: null,
    artifacts: {
      manifest_snapshot_sha256: hash,
      pcr_en_us_sha256: hash,
      pcr_zh_cn_sha256: hash,
      structured_sha256: hash,
    },
  };
  const history = {
    schema_version: 1,
    pcr_id: "pcr.example",
    current_version: "1.0.0",
    releases: [
      {
        version: "1.0.0",
        published_at_utc: "2026-07-14T12:34:56Z",
        predecessor_version: null,
        path: "releases/1.0.0",
        release_sha256: hash,
      },
    ],
  };

  assert.equal(validateRevision(revision).valid, true);
  assert.equal(validateRelease(release).valid, true);
  assert.equal(validateReleaseHistory(history).valid, true);

  assert.equal(validateRevision({ ...revision, target_version: "01.1.0" }).valid, false);
  assert.equal(
    validateRevision({ ...revision, opened_at_utc: "2026-07-14T12:34:56+08:00" }).valid,
    false,
  );
  assert.equal(validateRevision({ ...revision, note: "mutable" }).valid, false);
  assert.equal(
    validateRelease({
      ...release,
      artifacts: { ...release.artifacts, manifest_snapshot_sha256: undefined },
    }).valid,
    false,
  );
  assert.equal(validateReleaseHistory({ ...history, releases: [] }).valid, false);
  assert.equal(
    validateReleaseHistory({
      ...history,
      releases: [{ ...history.releases[0], path: "releases/../1.0.0" }],
    }).valid,
    false,
  );
  assert.equal(
    validateReleaseHistory({
      ...history,
      releases: [{ ...history.releases[0], release_sha256: `sha256:${"B".repeat(64)}` }],
    }).valid,
    false,
  );
});
