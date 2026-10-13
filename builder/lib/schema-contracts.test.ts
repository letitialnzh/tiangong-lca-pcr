import assert from "node:assert/strict";
import test from "node:test";
import type { UnknownRecord } from "../../packages/pcr-core/src/types.ts";
interface FixtureChain extends UnknownRecord { official_sources: UnknownRecord[]; chains: [ UnknownRecord & {nodes: [UnknownRecord, ...UnknownRecord[]]; edges: [UnknownRecord & { evidence: [UnknownRecord & {locator?: UnknownRecord}, ...UnknownRecord[]] }, ...UnknownRecord[]]}, ...UnknownRecord[]]; }

import {
  hasDeclaredUnresolvedReferenceProductFlow,
  materialProjectionCompletenessIssues,
} from "../../packages/pcr-core/src/projection-completeness.ts";
import { manifestIdentityProblems } from "./lifecycle-policy.ts";
import {
  assertClassificationMapping,
  assertCpcProductChain,
  validateClassificationMapping,
  validateCpcProductChain,
  validateManifest,
  validateMarkdownFrontmatter,
  validateRelease,
  validateReleaseHistory,
  validateRevision,
  validateStructured,
} from "./schema-contracts.ts";
import { ContractSchemaError } from "../../packages/pcr-core/src/schema-validation.ts";

const validCpcProductChain: FixtureChain = {
  schema_version: 1,
  artifact_kind: "cpc_product_chain_pilot",
  status: "draft",
  classification_system: "CPC",
  classification_version: "3.0",
  official_sources: [],
  chains: [
    {
      id: "barley-to-beer",
      title: "Barley to beer",
      description: "A pilot product chain from barley production to beer production.",
      nodes: [
        {
          id: "barley",
          code: "01150",
          label: "Barley",
          stage: "feedstock production",
          role: "primary feedstock",
        },
        {
          id: "beer",
          code: "24310",
          label: "Beer made from malt",
          stage: "product manufacturing",
          role: "downstream product",
        },
      ],
      edges: [
        {
          id: "barley-feedstock-for-beer",
          from: "barley",
          to: "beer",
          relationship_type: "primary_feedstock",
          evidence_status: "supported_by_pcr",
          boundary_assessment: "aligned",
          interface: {
            upstream_output_condition: "Harvested barley at the farm gate.",
            downstream_starting_condition: "Barley received for malting.",
            fit_summary: "The upstream output is the downstream primary feedstock.",
          },
          route_conditions: ["Beer production uses malted barley."],
          evidence: [
            {
              kind: "pcr_projection",
              pcr_id: "pcr.barley-seed",
              supports: "The upstream dataset requirement identifies barley feedstock.",
              locator: {
                kind: "field",
                field_path: "boundary_abstraction.upstream_dataset_requirement",
              },
            },
          ],
          review_notes: ["Confirm the malting route during methodology review."],
        },
      ],
    },
  ],
};

test("CPC product-chain contract accepts a minimal authored chain", () => {
  assert.equal(validateCpcProductChain(validCpcProductChain).valid, true);
  assert.equal(assertCpcProductChain(validCpcProductChain), validCpcProductChain);
});

test("CPC product-chain contract rejects an unknown evidence state", () => {
  const unknownEvidenceState = structuredClone(validCpcProductChain);
  unknownEvidenceState.chains[0].edges[0].evidence_status = "inferred";

  assert.equal(validateCpcProductChain(unknownEvidenceState).valid, false);
});

test("CPC product-chain contract exhaustively constrains PCR projection locators", () => {
  const supportedInventoryLocator = structuredClone(validCpcProductChain);
  supportedInventoryLocator.chains[0].edges[0].evidence[0].locator = {
    kind: "inventory_row",
    process_id: "beer-production",
    direction: "inputs",
    flow_type: "product",
    row_id: "barley",
    field: "description",
  };
  const unsupportedFieldLocator = structuredClone(validCpcProductChain);
  unsupportedFieldLocator.chains[0].edges[0].evidence[0].locator!.field_path =
    "system_boundary.rules";
  const unsupportedInventoryLocator = structuredClone(validCpcProductChain);
  unsupportedInventoryLocator.chains[0].edges[0].evidence[0].locator = {
    kind: "inventory_row",
    process_id: "beer-production",
    direction: "inputs",
    flow_type: "product",
    row_id: "barley",
    field: "amount",
  };

  assert.equal(validateCpcProductChain(supportedInventoryLocator).valid, true);
  assert.equal(validateCpcProductChain(unsupportedFieldLocator).valid, false);
  assert.equal(validateCpcProductChain(unsupportedInventoryLocator).valid, false);
});

test("CPC product-chain contract keeps official source records distinct and dated", () => {
  const crossShapeSource = structuredClone(validCpcProductChain);
  crossShapeSource.official_sources = [
    {
      kind: "official_source",
      source_id: "cpc-3.0",
      supports: "CPC labels",
    },
  ];
  const source = {
    id: "cpc-3.0",
    title: "Central Product Classification Version 3.0",
    publisher: "United Nations Statistics Division",
    url: "https://unstats.un.org/unsd/classifications/CPC%203.0?lang=en&view=detail#codes",
    locator: "CPC 3.0 codes 01150 and 24310",
    supports: "The classification codes and labels used by the pilot chain.",
    accessed_at: "2026-09-02",
  };
  const missingAccessDate = structuredClone(validCpcProductChain);
  missingAccessDate.official_sources = [{ ...source }];
  delete missingAccessDate.official_sources[0]!.accessed_at;
  const malformedAccessDate = structuredClone(validCpcProductChain);
  malformedAccessDate.official_sources = [{ ...source, accessed_at: "2026-9-2" }];
  const validOfficialSource = structuredClone(validCpcProductChain);
  validOfficialSource.official_sources = [{ ...source }];
  validOfficialSource.chains[0].edges[0].evidence = [
    {
      kind: "official_source",
      source_id: source.id,
      supports: "The official classification supplies the CPC codes and labels.",
    },
  ];
  const malformedOfficialSourceUrls = [
    "https://example.com/%ZZ",
    "https://exa[mple.com/path",
    "https://example.com/#first#second",
    "https://example.com:65536/source",
    "example.com/path",
    "https://example.com/white space",
    "https://example.com/{raw-brace}",
    "https://example.com/\\raw-backslash",
    "https://example.com/\u0001control",
    "https://example.com/资料",
    "https://example.com/[raw-bracket]",
    "https://example.com/?q=[raw-bracket]",
    "urn:foo[raw-bracket]",
  ];

  assert.equal(validateCpcProductChain(crossShapeSource).valid, false);
  assert.equal(validateCpcProductChain(missingAccessDate).valid, false);
  assert.equal(validateCpcProductChain(malformedAccessDate).valid, false);
  assert.equal(validateCpcProductChain(validOfficialSource).valid, true);
  for (const url of [
    "urn:isbn:9780141036144",
    "https://[2001:db8::1]/source",
    "https://example.com/%E8%B5%84%E6%96%99",
  ]) {
    const validAbsoluteUri = structuredClone(validOfficialSource);
    validAbsoluteUri.official_sources[0]!.url = url;
    assert.equal(
      validateCpcProductChain(validAbsoluteUri).valid,
      true,
      `${url} must be accepted as an absolute official source URI`,
    );
  }
  for (const url of malformedOfficialSourceUrls) {
    const malformedOfficialSourceUrl = structuredClone(validCpcProductChain);
    malformedOfficialSourceUrl.official_sources = [{ ...source, url }];
    assert.equal(
      validateCpcProductChain(malformedOfficialSourceUrl).valid,
      false,
      `${url} must be rejected as an official source URL`,
    );
  }

  const invalidPort = structuredClone(validOfficialSource);
  invalidPort.official_sources[0]!.url = "https://example.com:65536/source";
  const invalidPortResult = validateCpcProductChain(invalidPort);
  assert.equal(invalidPortResult.valid, false);
  assert.ok(
    invalidPortResult.errors.some(
      (issue) =>
        issue.code === "semantic.absolute_uri" &&
        issue.instance_path === "/official_sources/0/url",
    ),
  );
  assert.throws(
    () => assertCpcProductChain(invalidPort, { source: "pilot.yaml" }),
    (error) =>
      error instanceof ContractSchemaError &&
      error.source === "pilot.yaml" &&
      error.errors.some(
        (issue) =>
          issue.code === "semantic.absolute_uri" &&
          issue.instance_path === "/official_sources/0/url",
      ),
  );
});

test("CPC product-chain authored shapes reject derived read-model properties", () => {
  const derivedProperties = [
    "scheduling_status",
    "coverage_status",
    "mapping",
    "pcr_id",
    "pcr_path",
    "readiness",
    "projection_status",
    "blockers",
    "waves",
    "counts",
  ];

  for (const property of derivedProperties) {
    const documentProperty = structuredClone(validCpcProductChain);
    documentProperty[property] = "derived";
    assert.equal(
      validateCpcProductChain(documentProperty).valid,
      false,
      `${property} must be rejected on the authored document`,
    );

    const nodeProperty = structuredClone(validCpcProductChain);
    nodeProperty.chains[0].nodes[0][property] = "derived";
    assert.equal(
      validateCpcProductChain(nodeProperty).valid,
      false,
      `${property} must be rejected on an authored node`,
    );
  }
});

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

test("candidate completeness permits a blank product flow UUID only when its output row is registered unresolved", () => {
  const projection = {
    reference_flow_definition: {
      reference_amount: "1 kg",
      product_flow_ref: { name: "Example product", uuid: "" },
      flow_property_ref: { uuid: "mass-property" },
      unit_group_ref: { uuid: "mass-units" },
      reference_unit: "kg",
    },
    process_inventory: [
      {
        outputs: {
          product: [{ row_id: "reference_product", name: "Example product" }],
          waste: [],
          elementary: [],
        },
      },
    ],
  };
  const manifest = {
    status: "candidate",
    content_maturity: "authored_methodology",
    review_metadata: {
      unresolved_flow_identities: [
        { row_id: "reference_product", reason: "No exact product flow is available." },
      ],
    },
  };

  assert.equal(hasDeclaredUnresolvedReferenceProductFlow(projection, manifest), true);
  assert.equal(
    hasDeclaredUnresolvedReferenceProductFlow(projection, {
      ...manifest,
      review_metadata: {
        unresolved_flow_identities: [
          "No exact Tiangong reference product flow was found for Example product.",
        ],
      },
    }),
    true,
  );
  assert.equal(
    hasDeclaredUnresolvedReferenceProductFlow(
      {
        ...projection,
        reference_flow_definition: {
          ...projection.reference_flow_definition,
          product_flow_ref: {
            name: "Example product; exact UUID pending correction",
            uuid: "",
          },
        },
      },
      {
        ...manifest,
        review_metadata: {
          unresolved: [{ issue_id: "tiangong-reference-product-flow-property" }],
        },
      },
    ),
    true,
  );
  assert.equal(
    hasDeclaredUnresolvedReferenceProductFlow(projection, {
      ...manifest,
      review_metadata: {
        unresolved: [{ code: "reference_product_flow_uuid" }],
      },
    }),
    true,
  );
  assert.equal(
    hasDeclaredUnresolvedReferenceProductFlow(projection, {
      ...manifest,
      review_metadata: {
        reference_flow_identity: {
          status: "unresolved",
          unresolved_support_fields: ["reference_product_flow_uuid"],
        },
      },
    }),
    true,
  );
  assert.equal(
    hasDeclaredUnresolvedReferenceProductFlow(projection, {
      ...manifest,
      review_metadata: {
        unresolved_flow_identities: ["reference_product_example_product"],
      },
    }),
    true,
  );
  assert.equal(
    materialProjectionCompletenessIssues(projection, {
      allowUnresolvedProductFlowUuid: true,
    }).some(
      (issue) =>
        issue.code ===
        "material_projection.reference_flow_definition.product_flow_ref.uuid",
    ),
    false,
  );

  assert.equal(
    hasDeclaredUnresolvedReferenceProductFlow(projection, {
      ...manifest,
      review_metadata: { unresolved_flow_identities: ["different_row"] },
    }),
    false,
  );
  assert.equal(
    materialProjectionCompletenessIssues(projection).some(
      (issue) =>
        issue.code ===
        "material_projection.reference_flow_definition.product_flow_ref.uuid",
    ),
    true,
  );
});

test("candidate completeness recognizes the Goal inventory UUID unresolved contract for the reference output", () => {
  const projection = {
    reference_flow_definition: {
      reference_amount: "1 kg",
      product_flow_ref: { name: "Example product", uuid: "" },
      flow_property_ref: { uuid: "mass-property" },
      unit_group_ref: { uuid: "mass-units" },
      reference_unit: "kg",
    },
    process_inventory: [
      {
        outputs: {
          product: [{ row_id: "finished_product", name: "Example product" }],
          waste: [],
          elementary: [],
        },
      },
    ],
  };
  const manifest = {
    status: "candidate",
    content_maturity: "authored_methodology",
    review_metadata: {
      unresolved: {
        inventory_flow_uuids: [
          {
            row_id: "finished_product",
            reason_code: "no_exact_candidate",
            explanation: "No exact public state-100 product flow was found; receipt verified.",
          },
        ],
      },
    },
  };

  assert.equal(hasDeclaredUnresolvedReferenceProductFlow(projection, manifest), true);
  assert.equal(
    hasDeclaredUnresolvedReferenceProductFlow(projection, {
      ...manifest,
      review_metadata: {
        unresolved: {
          inventory_flow_uuids: [
            {
              row_id: "different_row",
              reason_code: "no_exact_candidate",
              explanation: "A different inventory row is unresolved.",
            },
          ],
        },
      },
    }),
    false,
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
  mapping.mappings[0]!.mapping_type = "approximate";
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
      assert.ok(error instanceof ContractSchemaError);
      assert.equal(error.code, "PCR_SCHEMA_INVALID");
      assert.equal(
        error.errors[0]!.instance_path,
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
