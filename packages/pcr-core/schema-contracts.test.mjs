import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";

import {
  buildGuidance,
  createFeedbackDraft,
  getPcrReadiness,
  validateDatasetAgainstGuidance,
} from "./src/index.mjs";
import { materialProjectionCompletenessIssues } from "./src/projection-completeness.mjs";
import {
  assertReadiness,
  assertStructured,
  CORE_SCHEMA_IDS,
  validateDatasetInput,
  validateClassificationCoverage,
  validateFeedbackDraft,
  validateFeedbackIntake,
  validateGuidance,
  validateModelInput,
  validateReadiness,
  validateStructured,
  validateValidationReport,
} from "./src/contracts.mjs";
import { createSchemaRegistry } from "./src/schema-validation.mjs";
import { parseYaml } from "./src/yaml-lite.mjs";

const repoRoot = path.resolve(".");
const wheatSeedPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const wheatSeedStructured = path.join(
  repoRoot,
  "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed/structured.yaml",
);

test("all pcr-core JSON Schemas compile together in strict Ajv 2020 mode", () => {
  const schemaDirectory = path.join(repoRoot, "packages/pcr-core/schemas");
  const schemas = readdirSync(schemaDirectory)
    .filter((fileName) => fileName.endsWith(".schema.json"))
    .map((fileName) => JSON.parse(readFileSync(path.join(schemaDirectory, fileName), "utf8")));

  assert.doesNotThrow(() => createSchemaRegistry(schemas));
});

test("classification coverage contract separates accepted mappings from review evidence", () => {
  const coverage = JSON.parse(
    readFileSync(
      path.join(repoRoot, "classifications/indexes/cpc-3.0-coverage.json"),
      "utf8",
    ),
  );
  assert.equal(validateClassificationCoverage(coverage).valid, true);

  const candidateWithMapping = structuredClone(coverage);
  candidateWithMapping.entries[0].coverage_status = "candidate_suggestion";
  assert.equal(validateClassificationCoverage(candidateWithMapping).valid, false);

  const manualReview = structuredClone(coverage);
  manualReview.entries[0].coverage_status = "manual_review";
  manualReview.entries[0].mapping = null;
  assert.equal(validateClassificationCoverage(manualReview).valid, true);

  manualReview.entries[0].mapping = structuredClone(coverage.entries[0].mapping);
  assert.equal(validateClassificationCoverage(manualReview).valid, false);

  const missingAcceptance = structuredClone(coverage);
  delete missingAcceptance.entries[0].mapping.acceptance;
  assert.equal(validateClassificationCoverage(missingAcceptance).valid, false);

  const unsupportedGenerator = structuredClone(coverage);
  unsupportedGenerator.source.generator_version = "3";
  assert.equal(validateClassificationCoverage(unsupportedGenerator).valid, false);

  const missingSourceDigest = structuredClone(coverage);
  delete missingSourceDigest.source.mapping.sha256;
  assert.equal(validateClassificationCoverage(missingSourceDigest).valid, false);

  const nonExactHashMode = structuredClone(coverage);
  nonExactHashMode.source.normalized_leaves.hash_mode = "normalized_text";
  assert.equal(validateClassificationCoverage(nonExactHashMode).valid, false);
});

test("material structured contract rejects an empty object with stable sorted errors", () => {
  const first = validateStructured({});
  const second = validateStructured({});

  assert.equal(first.valid, false);
  assert.deepEqual(first, second);
  assert.equal(first.code, "PCR_SCHEMA_INVALID");
  assert.equal(first.entity_kind, "structured_projection");
  assert.equal(first.schema_id, CORE_SCHEMA_IDS.structured);
  assert.deepEqual(first.errors[0], {
    code: "schema.required",
    instance_path: "/allocation_rules",
    schema_path: "#/required",
    keyword: "required",
    message: "must have required property 'allocation_rules'",
    params: { missingProperty: "allocation_rules" },
  });
  assert.deepEqual(
    first.errors.map((error) => error.instance_path),
    [...first.errors.map((error) => error.instance_path)].sort(),
  );
});

test("material structured contract accepts a minimal valid F3 projection", () => {
  assert.equal(validateStructured(minimalStructuredProjection()).valid, true);
});

test("candidate reference UUID gaps remain reviewable while active PCRs require them", () => {
  const projection = minimalStructuredProjection();
  projection.reference_flow_definition.product_flow_ref.uuid = "";
  projection.reference_flow_definition.flow_property_ref.uuid = "";
  projection.reference_flow_definition.unit_group_ref.uuid = "";

  const candidateIssues = materialProjectionCompletenessIssues(projection, {
    expectedPcrId: "pcr.example",
    lifecycleStatus: "candidate",
  });
  const activeIssues = materialProjectionCompletenessIssues(projection, {
    expectedPcrId: "pcr.example",
    lifecycleStatus: "active",
  });
  const referenceUuidIssues = (issues) => issues.filter((issue) =>
    issue.code.startsWith("material_projection.reference_flow_definition.")
    && issue.code.endsWith(".uuid"));

  assert.deepEqual(referenceUuidIssues(candidateIssues), []);
  assert.equal(referenceUuidIssues(activeIssues).length, 3);
});

test("material structured contract accepts a generated repository projection", () => {
  const structured = parseYaml(readFileSync(wheatSeedStructured, "utf8"));
  const result = validateStructured(structured);

  assert.deepEqual(result.errors, []);
  assert.equal(result.valid, true);
});

test("material structured contract binds process and inventory tokens to shared vocabularies", () => {
  const base = minimalStructuredProjection();
  base.process_inventory[0].inputs.product.push(materialFlowRow());
  base.data_sources.push({
    id: "source-1",
    type: "official_guidance",
    reference: "https://example.test/source",
    used_for: "Fixture evidence",
  });
  assert.equal(validateStructured(base).valid, true);

  const invalidCases = [
    ["/process_map/0/inclusion", (value) => (value.process_map[0].inclusion = "mandatory")],
    [
      "/process_inventory/0/inputs/product/0/flow_type",
      (value) => (value.process_inventory[0].inputs.product[0].flow_type = "technosphere"),
    ],
    [
      "/process_inventory/0/inputs/product/0/amount/value_mode",
      (value) => (value.process_inventory[0].inputs.product[0].amount.value_mode = "measured"),
    ],
    [
      "/process_inventory/0/inputs/product/0/amount/specificity",
      (value) => (value.process_inventory[0].inputs.product[0].amount.specificity = "regional"),
    ],
    [
      "/process_inventory/0/inputs/product/0/amount/basis/kind",
      (value) => (value.process_inventory[0].inputs.product[0].amount.basis.kind = "batch"),
    ],
    [
      "/process_inventory/0/inputs/product/0/amount/evidence/kind",
      (value) => (value.process_inventory[0].inputs.product[0].amount.evidence.kind = "citation"),
    ],
    [
      "/process_inventory/0/inputs/product/0/amount/basis/kind",
      (value) => delete value.process_inventory[0].inputs.product[0].amount.basis.kind,
    ],
    [
      "/process_inventory/0/inputs/product/0/amount/ranges/0/role",
      (value) => (value.process_inventory[0].inputs.product[0].amount.ranges[0].role = "limit"),
    ],
    [
      "/process_inventory/0/inputs/product/0/amount/ranges/0/basis_kind",
      (value) => (value.process_inventory[0].inputs.product[0].amount.ranges[0].basis_kind = "batch"),
    ],
    [
      "/process_inventory/0/inputs/product/0/amount/ranges/0/evidence_kind",
      (value) => (value.process_inventory[0].inputs.product[0].amount.ranges[0].evidence_kind = "citation"),
    ],
    ["/data_sources/0/type", (value) => (value.data_sources[0].type = "official guidance")],
    ["/data_sources/0/type", (value) => delete value.data_sources[0].type],
    [
      "/process_inventory/0/inputs/product/0",
      (value) => (value.process_inventory[0].inputs.product[0].unknown_column = "typo"),
    ],
  ];

  for (const [instancePath, mutate] of invalidCases) {
    const value = structuredClone(base);
    mutate(value);
    const result = validateStructured(value);
    assert.equal(result.valid, false, instancePath);
    assert.ok(
      result.errors.some(
        (error) =>
          error.instance_path === instancePath
          && ["enum", "required", "additionalProperties"].includes(error.keyword),
      ),
      instancePath,
    );
  }
});

test("flow row shape keeps the seven stable projection columns required", () => {
  const schema = JSON.parse(
    readFileSync(
      path.join(repoRoot, "packages/pcr-core/schemas/structured-projection.schema.json"),
      "utf8",
    ),
  );

  assert.deepEqual(schema.$defs.flowRow.required, [
    "row_id",
    "role",
    "name",
    "flow_type",
    "property_unit",
    "description",
    "amount",
  ]);
});

test("flow binding contract rejects simultaneous fixed and parameterized bindings", () => {
  const base = minimalStructuredProjection();
  const row = {
    row_id: "energy",
    role: "energy input",
    name: "Generic electricity",
    flow_type: "product",
    property_unit: "Energy / kWh",
    description: "Generic energy exchange.",
    binding: "parameterized",
    flow_set_ref: { id: "flow-set.energy-supply", version: "0.1.0", group: "electricity-supply" },
    amount: {
      value_mode: "foreground_record",
      specificity: "site_specific",
      basis: { kind: "process_output" },
      evidence: { kind: "collected_record" },
      ranges: [],
    },
  };
  base.process_inventory[0].inputs.product.push(row);
  assert.equal(validateStructured(base).valid, true);

  const conflict = structuredClone(base);
  conflict.process_inventory[0].inputs.product[0].binding = "parameterized";
  conflict.process_inventory[0].inputs.product[0].flow_ref = { uuid: "11111111-1111-4111-8111-111111111111" };
  assert.equal(validateStructured(conflict).valid, false);

  const coordinateReference = structuredClone(base);
  coordinateReference.process_inventory[0].inputs.product.push({
    ...row,
    binding: "parameterized",
    flow_set_ref: { id: "product-input", version: "0.1.0" },
  });
  assert.equal(validateStructured(coordinateReference).valid, false);

  const unresolvedOutput = structuredClone(base);
  unresolvedOutput.process_inventory[0].inputs.product = [];
  unresolvedOutput.process_inventory[0].outputs.product.push({
    ...row,
  });
  assert.equal(validateStructured(unresolvedOutput).valid, true);

  const removedBindingState = structuredClone(unresolvedOutput);
  removedBindingState.process_inventory[0].outputs.product[0].binding = "needs_review";
  assert.equal(validateStructured(removedBindingState).valid, false);

});

test("elementary flow cards cannot use Flow Sets", () => {
  const projection = minimalStructuredProjection();
  const row = {
    row_id: "direct_emission",
    role: "direct emission",
    name: "Nitrous oxide to air",
    flow_type: "elementary",
    property_unit: "Mass / kg",
    description: "Direct field emission.",
    amount: {
      value_mode: "foreground_record",
      specificity: "site_specific",
      basis: { kind: "process_output" },
      evidence: { kind: "collected_record" },
      ranges: [],
    },
  };
  projection.process_inventory[0].outputs.elementary.push(row);
  assert.equal(validateStructured(projection).valid, true);

  row.binding = "parameterized";
  row.flow_set_ref = { id: "flow-set.energy-supply", version: "0.2.0" };
  assert.equal(validateStructured(projection).valid, false);

  delete row.flow_set_ref;
  row.binding = "fixed";
  row.flow_ref = { uuid: "11111111-1111-4111-8111-111111111111" };
  assert.equal(validateStructured(projection).valid, true);
});

test("unbound flow cards remain valid unmapped coverage when they retain a selected name", () => {
  const projection = minimalStructuredProjection();
  projection.process_inventory[0].inputs.product.push({
    row_id: "unmapped_heat",
    role: "Unmapped heat input",
    name: "Heat supply, selected flow name only",
    flow_type: "product",
    property_unit: "Energy / MJ",
    description: "Retain the selected semantic flow name until identity is resolved.",
    amount: {
      value_mode: "foreground_record",
      specificity: "site_specific",
      basis: { kind: "process_output" },
      evidence: { kind: "collected_record" },
      ranges: [],
    },
  });

  const issues = materialProjectionCompletenessIssues(projection, {
    expectedPcrId: "pcr.example",
    lifecycleStatus: "active",
  });
  assert.equal(
    issues.some((issue) => issue.code.includes("process_inventory") && issue.code.endsWith(".binding")),
    false,
  );
});

test("feedback intake binds type and confidence to shared vocabularies", () => {
  const feedback = {
    feedback_type: "validation_rule_issue",
    summary: "Clarify the rule.",
    confidence: "high",
  };

  assert.equal(validateFeedbackIntake(feedback).valid, true);
  for (const [instancePath, patch] of [
    ["/feedback_type", { feedback_type: "general_comment" }],
    ["/confidence", { confidence: "certain" }],
  ]) {
    const result = validateFeedbackIntake({ ...feedback, ...patch });
    assert.equal(result.valid, false, instancePath);
    assert.ok(
      result.errors.some(
        (error) => error.instance_path === instancePath && error.keyword === "enum",
      ),
      instancePath,
    );
  }
});

test("contract validation never coerces or mutates input", () => {
  const value = minimalStructuredProjection();
  value.schema_version = "1";
  const before = structuredClone(value);

  assert.equal(validateStructured(value).valid, false);
  assert.deepEqual(value, before);
});

test("assert contract exposes a stable machine-readable error envelope", () => {
  assert.throws(
    () => assertStructured({}, { source: "fixture/structured.yaml" }),
    (error) => {
      assert.equal(error.code, "PCR_SCHEMA_INVALID");
      assert.equal(error.entity_kind, "structured_projection");
      assert.equal(error.source, "fixture/structured.yaml");
      assert.deepEqual(error.toJSON().errors, error.errors);
      return true;
    },
  );
});

test("core output and flexible input contract functions validate real values", () => {
  const readiness = getPcrReadiness({ root: repoRoot, pcrId: wheatSeedPcrId, refresh: true });
  const guidance = buildGuidance({ root: repoRoot, pcrId: wheatSeedPcrId });
  const report = validateDatasetAgainstGuidance({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    dataset: {},
  });
  const feedbackDraft = createFeedbackDraft({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    type: "validation_rule_issue",
    summary: "Clarify one validation rule.",
  });

  assert.equal(validateReadiness(readiness).valid, true);
  assert.equal(validateGuidance(guidance).valid, true);
  assert.equal(validateValidationReport(report).valid, true);
  assert.equal(validateFeedbackDraft(feedbackDraft).valid, true);
  assert.equal(validateFeedbackIntake({
    feedback_type: "validation_rule_issue",
    summary: "Clarify one validation rule.",
  }).valid, true);
  assert.equal(validateFeedbackIntake({
    feedback_type: "validation_rule_issue",
    summary: "",
  }).valid, false);
  assert.equal(validateModelInput("model draft").valid, true);
  assert.equal(validateModelInput({ entity: "process" }).valid, true);
  assert.equal(validateModelInput([]).valid, false);
  assert.equal(validateDatasetInput({ collection_records: [] }).valid, true);
  assert.equal(validateDatasetInput([]).valid, false);
});

test("readiness contract rejects cross-field usability contradictions", () => {
  const readiness = getPcrReadiness({ root: repoRoot, pcrId: wheatSeedPcrId, refresh: true });
  readiness.blockers.push({ code: "fixture_blocker", message: "Fixture blocker." });

  const result = validateReadiness(readiness);

  assert.equal(result.valid, false);
  assert.equal(result.code, "PCR_SEMANTIC_CONTRACT_INVALID");
  assert.ok(result.errors.some((error) => error.code === "semantic.readiness.blocked_status"));
  assert.ok(result.errors.some((error) => error.code === "semantic.readiness.blocked_usability"));
  assert.throws(
    () => assertReadiness(readiness, { source: "fixture/readiness.json" }),
    (error) => {
      assert.equal(error.name, "CoreContractSemanticError");
      assert.equal(error.code, "PCR_SEMANTIC_CONTRACT_INVALID");
      assert.equal(error.source, "fixture/readiness.json");
      assert.deepEqual(error.toJSON().errors, error.errors);
      return true;
    },
  );
});

test("validation report contract rejects cross-field count and status contradictions", () => {
  const report = validateDatasetAgainstGuidance({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    dataset: {},
  });
  report.finding_count = 99;
  report.finding_summary.error = 0;
  report.check_coverage.total_requirement_count = 0;
  report.completeness = "complete";
  report.validation_status = "passed";

  const result = validateValidationReport(report);

  assert.equal(result.valid, false);
  assert.equal(result.code, "PCR_SEMANTIC_CONTRACT_INVALID");
  for (const code of [
    "semantic.validation.completeness",
    "semantic.validation.finding_count",
    "semantic.validation.finding_summary.error",
    "semantic.validation.status",
    "semantic.validation.total_requirement_count",
  ]) {
    assert.ok(result.errors.some((error) => error.code === code), code);
  }
  assert.deepEqual(
    result.errors.map((error) => error.instance_path),
    [...result.errors.map((error) => error.instance_path)].sort(),
  );
});

function minimalStructuredProjection() {
  const hash = `sha256:${"a".repeat(64)}`;
  const rule = {
    rule_id: "rule_1",
    applies_to: "foreground_dataset",
    rule: "Apply the declared rule.",
    source_ids: [],
  };
  const emptyGroups = { product: [], waste: [], elementary: [] };

  return {
    schema_version: 1,
    generated_from: "markdown",
    source_markdown: "pcr.en-US.md",
    product_category_identity: { canonical_pcr_id: "pcr.example" },
    functional_unit: {
      what: "Example product",
      how_much: "1 kg",
      how_well: "Declared quality",
      how_long_or_cycle: "One batch",
      reference_flow_link: "reference_product_flow",
    },
    system_boundary: { rules: [rule] },
    boundary_abstraction: { declared_starting_condition: "declared input" },
    reference_flow_definition: {
      reference_amount: "1 kg",
      product_flow_ref: { name: "Example product", uuid: "example-flow" },
      flow_property_ref: { uuid: "mass-property" },
      unit_group_ref: { uuid: "mass-units" },
      reference_unit: "kg",
      required_qualifiers: [],
    },
    reference_flows: [],
    measurement_rules: [
      {
        id: "reference_mass",
        applies_to: "reference product",
        required_property_ref: { name: "Mass", uuid: "mass-property" },
        required_unit: "kg",
        rule: "Use measured mass.",
      },
    ],
    process_map: [
      {
        id: "production",
        name: "Production",
        inclusion: "required",
        inclusion_condition: "Always",
        role: "Produce the reference product",
        quantitative_reference: "Reference product output",
      },
    ],
    process_inventory: [
      {
        id: "production",
        label: "Production",
        inputs: structuredClone(emptyGroups),
        outputs: structuredClone(emptyGroups),
      },
    ],
    allocation_rules: [rule],
    dataset_production: {
      collection_protocols: [],
      calculation_rules: [],
      data_quality_requirements: [],
    },
    validation_rules: [rule],
    published_dataset_profile: { dataset_role: "unit_process" },
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
}

function materialFlowRow() {
  return {
    row_id: "input_1",
    role: "Example input",
    name: "Example material",
    flow_type: "product",
    property_unit: "Mass / kg",
    description: "Example material input.",
    amount: {
      expression: "measured input",
      value_mode: "foreground_record",
      specificity: "site_specific",
      basis: { text: "per reference flow", kind: "reference_flow" },
      evidence: { kind: "external_source", source_ids: ["source-1"] },
      ranges: [
        {
          role: "typical_range",
          lower: "0",
          upper: "1",
          unit: "kg/kg reference flow",
          basis: "per reference flow",
          basis_kind: "reference_flow",
          evidence_kind: "external_source",
          source_ids: ["source-1"],
        },
      ],
    },
  };
}
