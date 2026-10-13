import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { isUnknownRecord } from "../../packages/pcr-core/src/types.ts";

import { withCurrentMeasurementFixture } from "./measurement-fixture.ts";
import { inspectPcrDirectory } from "./lint-rules.ts";
import { checkMeasurementConsistency, type MeasurementReport } from "./measurement-consistency.ts";
import { parsePcrMarkdownToStructured } from "./markdown-projection.ts";

const root = fileURLToPath(new URL("../../", import.meta.url));
const fixture = path.join(root, "builder/fixtures/measurement-44125");

test("44125 fixture retains exact source bytes and commit provenance", () => {
  const provenance: unknown = JSON.parse(readFileSync(path.join(fixture, "provenance.json"), "utf8"));
  assert.ok(isUnknownRecord(provenance) && isUnknownRecord(provenance.sha256));
  assert.equal(provenance.source_commit, "c883916c5099932527a5df72b0c28166be719c6c");
  for (const [name, expected] of Object.entries(provenance.sha256)) {
    assert.equal(createHash("sha256").update(readFileSync(path.join(fixture, name))).digest("hex"), expected);
  }
});

test("44125 default inspection reports the 1 kg versus per-baler mismatch without failing legacy lint", () => {
  const result = withCurrentMeasurementFixture(fixture, (current) => inspectPcrDirectory({ root: current, pcrDir: current }));
  assert.deepEqual(result.problems, []);
  assert.ok(result.measurement);
  assert.equal(result.measurement?.status, "error");
  assert.ok(result.measurement.findings.some((finding) => finding.code === "MEASUREMENT_CONVERSION_MISSING" && finding.row_id === "steel_plate"));
  const measurementWarnings = result.warnings.filter((warning) => warning.includes("MEASUREMENT_"));
  assert.equal(measurementWarnings.length, 1);
  assert.match(measurementWarnings[0] ?? "", /MEASUREMENT_REPORT: status=error/u);
  assert.ok(measurementWarnings[0]?.includes(`findings=${result.measurement.findings.length}`));
  assert.ok(measurementWarnings[0]?.includes(`skipped=${result.measurement.coverage.skipped.length}`));
  assert.ok(result.measurement.findings.length > 1);
});

interface ExampleOptions { referenceAmount?: string; referenceUnit?: string; convert?: boolean; basis?: string; massRule?: string; method?: string; formula?: string; expression?: string; outputExpression?: string; outputBasis?: string; appliesTo?: string; collectionBasis?: string }
function example(language: string, overrides: ExampleOptions = {}): string {
  const zh = language === "zh-CN";
  const {
    referenceAmount = "M", referenceUnit = "kg", convert = false,
    basis = convert
      ? (zh ? "每 1 kg 参考流；采集基准为每台验收成品打捆机" : "per 1 kg reference flow; collected per one accepted finished baler")
      : (zh ? "每台验收成品打捆机" : "per one accepted finished baler"),
    massRule = zh
      ? "M = 同一配置的一台完整打捆机的验收净质量，单位 kg；采用 cp_mass 采集。"
      : "M = accepted net mass of one complete baler of the same configuration in kg; collect using cp_mass.",
    method = zh
      ? "使用经校准的秤称量已验收的完整打捆机，排除运输包装；核对同一配置和验收记录。"
      : "Weigh the accepted complete baler on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record.",
    formula = zh
      ? "q_ref = q_item / M; q_item = 每台验收成品打捆机的交换数量; q_ref = 每 1 kg 参考流的交换数量。"
      : "q_ref = q_item / M; q_item = exchange amount per one accepted finished baler; q_ref = exchange amount per 1 kg reference flow.",
    expression = convert ? "Apply normalize_mass to q_item; reference_mass; cp_energy." : (zh ? "由 cp_energy 采集每台验收成品打捆机的电力。" : "Collect electricity per one accepted finished baler using cp_energy."),
    outputExpression = `${referenceAmount} ${referenceUnit}`,
    outputBasis = basis,
    appliesTo = "electricity",
    collectionBasis = "attributable electricity / accepted balers",
  } = overrides;
  return `
## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | ${zh ? "制造完整打捆机" : "Manufacture complete baler"} |
| How much | ${zh ? "一台成品打捆机" : "One finished baler"} |
| reference_flow_link | finished_baler |

| Field | Value |
| --- | --- |
| Reference amount | ${referenceAmount} |
| Reference product flow | ${zh ? "成品打捆机" : "Finished baler"} |
| Reference unit | ${referenceUnit} |
| Required qualifiers | configuration; accepted net mass |

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | ${massRule} |
| electricity_energy | electricity | Energy | MJ | Preserve energy measurements in MJ. |

## 6. Process Inventory Structure
### Process: Manufacturing (\`manufacturing\`)
#### Inputs
##### Product flows
###### Electricity (\`electricity\`)
- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: ${expression}
- Normalization basis: ${basis}
- Basis kind: reference_flow
- Collection protocol: cp_energy

#### Outputs
##### Product flows
###### Finished baler (\`finished_baler\`)
- Selected flow: ${zh ? "成品打捆机" : "Finished baler"}
- Flow property / unit: Mass / ${referenceUnit}
- Amount rule: ${outputExpression}
- Normalization basis: ${outputBasis}
- Basis kind: reference_flow
- Collection protocol: cp_mass

## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols
| protocol_id | process_id | flow_role | raw_fields | collection_method | unit | aggregation_rule |
| --- | --- | --- | --- | --- | --- | --- |
| cp_mass | manufacturing | accepted reference product | ${zh ? "型号；配置；序列号；验收净质量 M" : "model; configuration; serial number; accepted net mass M"} | ${method} | kg | ${zh ? "M = 同一配置的一台成品打捆机的验收净质量" : "M = accepted net mass of one complete baler of the same configuration"} |
| cp_energy | manufacturing | electricity | meter reading; accepted units | calibrated electricity meter | MJ | ${collectionBasis} |

### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output |
| --- | --- | --- | --- | --- |
| normalize_mass | ${appliesTo} | ${formula} | q_item; M; cp_mass | q_ref |
`;
}

function pair(overrides: ExampleOptions = {}) {
  return { english: example("en-US", overrides), chinese: example("zh-CN", overrides) };
}

function codes(result: MeasurementReport): string[] {
  return result.findings.map((finding) => finding.code);
}

test("enforcement makes 44125 measurement findings blocking and checks both languages", () => {
  const result = inspectPcrDirectory({ root, pcrDir: fixture, measurementPolicy: "enforce" });
  assert.ok(result.measurement);
  assert.ok(result.problems.some((problem) => problem.includes("MEASUREMENT_CONVERSION_MISSING")));
  assert.deepEqual(new Set(result.measurement.findings.filter((finding) => finding.row_id === "steel_plate").map((finding) => finding.language)), new Set(["en-US", "zh-CN"]));
  assert.ok(result.measurement.findings.some((finding) => finding.code === "MEASUREMENT_REFERENCE_OUTPUT_MISMATCH" && finding.row_id === "finished_baler"));
});

test("accepts symbolic M kg per accepted machine without a numeric mass constant", () => {
  const result = checkMeasurementConsistency(pair());
  assert.equal(result.status, "pass", JSON.stringify(result.findings));
  assert.equal(result.coverage.counts.inventory_rows, 4);
  assert.equal(result.coverage.complete, true);
  assert.ok(result.coverage.performed.some((check) => check.check === "mass_collection"));
});

test("accepts linked and defined q_ref = q_item / M conversion to 1 kg", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true }));
  assert.equal(result.status, "pass", JSON.stringify(result.findings));
  assert.ok(result.coverage.performed.some((check) => check.check === "conversion" && check.rule_id === "normalize_mass"));
});

test("accepts same reference basis, including MJ electricity per kg product", () => {
  const input = pair({ referenceAmount: "1", basis: "per reference flow", outputBasis: "per reference flow", expression: "Metered energy per reference flow", massRule: "Use the stated reference flow.", collectionBasis: "per reference flow" });
  const result = checkMeasurementConsistency({ english: parsePcrMarkdownToStructured(input.english), chinese: parsePcrMarkdownToStructured(input.chinese) });
  assert.equal(result.status, "pass", JSON.stringify(result.findings));
});

test("rejects M without a concrete collection method", () => {
  const result = checkMeasurementConsistency(pair({ method: "Record M." }));
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_PROTOCOL_INCOMPLETE"));
});

test("an undefined M or a normalize keyword cannot certify mass consistency", () => {
  const result = checkMeasurementConsistency(pair({ massRule: "Normalize all flows using M." }));
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_VARIABLE_UNDEFINED"));
});

test("rejects unrelated conversion rules that are not linked from the row", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", expression: "Collect from cp_energy; normalize as appropriate.", appliesTo: "unrelated_coating_flow" }));
  assert.equal(result.status, "error");
  assert.ok(result.findings.some((finding) => finding.code === "MEASUREMENT_CONVERSION_MISSING" && finding.row_id === "electricity"));
});

test("rejects a named formula when its scope does not include the inventory row", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, appliesTo: "unrelated_coating_flow" }));
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_SCOPE_MISMATCH"));
});

test("opposite Chinese conversion direction fails independent bilingual comparison", () => {
  const input = pair({ referenceAmount: "1", convert: true });
  input.chinese = input.chinese.replace("q_ref = q_item / M", "q_ref = M / q_item");
  const result = checkMeasurementConsistency(input);
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_DIRECTION_INVALID"));
  assert.ok(codes(result).includes("MEASUREMENT_BILINGUAL_CONVERSION_MISMATCH"));
});

test("unsupported conversion grammar is manual review and does not disappear behind an explicit final basis", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, formula: "q_ref = normalize(q_item, M); q_item = exchange amount per one accepted finished baler; q_ref = exchange amount per 1 kg reference flow." }));
  assert.equal(result.status, "manual_review", JSON.stringify(result.findings));
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_UNSUPPORTED"));
  assert.ok(result.coverage.skipped.some((check) => check.check === "conversion"));
  assert.equal(result.coverage.complete, false);
});

test("unknown basis prose requires manual review", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", basis: "according to the applicable normalization arrangement", outputBasis: "per reference flow", outputExpression: "1 kg", expression: "Normalize records as described in the applicable arrangement.", collectionBasis: "per reference flow" }));
  assert.equal(result.status, "manual_review");
  assert.ok(codes(result).includes("MEASUREMENT_BASIS_UNSUPPORTED"));
});

test("normalization must include the completed reference output", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, outputExpression: "One accepted finished baler with declared net mass." }));
  assert.equal(result.status, "error");
  assert.ok(result.findings.some((finding) => finding.code === "MEASUREMENT_REFERENCE_OUTPUT_MISMATCH" && finding.row_id === "finished_baler"));
});

for (const [name, from, to, code] of [
  ["quantity", "| Reference amount | M |", "| Reference amount | 1 |", "MEASUREMENT_BILINGUAL_REFERENCE_MISMATCH"],
  ["unit", "| Reference unit | kg |", "| Reference unit | g |", "MEASUREMENT_BILINGUAL_REFERENCE_MISMATCH"],
  ["basis", "- Normalization basis: 每台验收成品打捆机", "- Normalization basis: per 1 kg reference flow", "MEASUREMENT_BILINGUAL_BASIS_MISMATCH"],
] as const) {
  test(`independently compares bilingual ${name}`, () => {
    const input = pair();
    input.chinese = input.chinese.replace(from, to);
    const result = checkMeasurementConsistency(input);
    assert.equal(result.status, "error");
    assert.ok(codes(result).includes(code));
  });
}

test("independently compares bilingual conversion variable definitions", () => {
  const input = pair({ referenceAmount: "1", convert: true });
  input.chinese = input.chinese.replace("q_item = 每台验收成品打捆机的交换数量", "q_item = 每 1 kg 参考流的交换数量");
  const result = checkMeasurementConsistency(input);
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_BILINGUAL_VARIABLE_MISMATCH"));
});

test("missing parsed reference or rows cannot pass a vacuous measurement check", () => {
  const result = checkMeasurementConsistency({ english: {}, chinese: {} });
  assert.equal(result.status, "manual_review");
  assert.equal(result.coverage.complete, false);
});

test("a supported formula cannot hide a second contradictory assignment", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, formula: "q_ref = q_item / M; q_ref = M * q_item; q_item = exchange amount per one accepted finished baler; q_ref = exchange amount per 1 kg reference flow." }));
  assert.notEqual(result.status, "pass");
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_UNSUPPORTED"));
});

test("ambiguous variable definitions cannot be certified from one matching phrase", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, formula: "q_ref = q_item / M; q_item = exchange amount per one accepted finished baler or per 1 kg reference flow; q_ref = exchange amount per 1 kg reference flow." }));
  assert.notEqual(result.status, "pass");
});

test("bilingual comparison resolves explicit and generic equivalent reference bases", () => {
  const input = pair({ referenceAmount: "1", basis: "per reference flow", expression: "Metered energy per reference flow", outputBasis: "per reference flow", collectionBasis: "per reference flow" });
  input.chinese = input.chinese.replaceAll("Normalization basis: per reference flow", "Normalization basis: 每 1 kg 参考流");
  const result = checkMeasurementConsistency(input);
  assert.equal(result.status, "pass", JSON.stringify(result.findings));
});

test("1 kg conversion independently compares the bilingual M definition", () => {
  const input = pair({ referenceAmount: "1", convert: true });
  input.chinese = input.chinese.replace("M = 同一配置的一台完整打捆机的验收净质量", "M = 同一配置的一台完整打捆机的包装总质量");
  const result = checkMeasurementConsistency(input);
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_BILINGUAL_VARIABLE_MISMATCH"));
});

test("mass rule scoped to an unrelated product does not define reference M", () => {
  const input = pair();
  input.english = input.english.replace("reference_mass | reference product", "reference_mass | unrelated_coating_flow");
  input.chinese = input.chinese.replace("reference_mass | reference product", "reference_mass | unrelated_coating_flow");
  assert.equal(checkMeasurementConsistency(input).status, "error");
});

test("a mass method explicitly prohibiting weighing does not count as a measurement protocol", () => {
  const result = checkMeasurementConsistency(pair({ method: "Do not weigh the accepted complete baler on a calibrated scale." }));
  assert.notEqual(result.status, "pass");
});

test("unknown inspection measurement policy fails instead of silently reporting", () => {
  assert.throws(() => inspectPcrDirectory({ root, pcrDir: fixture, measurementPolicy: "enfroce" }), /measurementPolicy.*report.*enforce/u);
});

test("a conversion scope excluding the row cannot be accepted through its row-id token", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, appliesTo: "all inventory rows except electricity" }));
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_SCOPE_MISMATCH"));
});

test("linked formulas using unknown variables require review even with an explicit final basis", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, basis: "per 1 kg reference flow", outputBasis: "per 1 kg reference flow", formula: "x_ref = x_item / M; x_item = exchange amount per one accepted finished baler; x_ref = exchange amount per 1 kg reference flow." }));
  assert.equal(result.status, "manual_review", JSON.stringify(result.findings));
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_UNSUPPORTED"));
  assert.equal(result.coverage.complete, false);
});

test("a conflicting second definition of M cannot be ignored after a valid definition", () => {
  const input = pair();
  const extra = "\n| conflicting_mass | reference product | Mass | kg | M = gross packaged mass, including transport packaging; do not use accepted net mass. |";
  input.english = input.english.replace("\n| electricity_energy", extra + "\n| electricity_energy");
  input.chinese = input.chinese.replace("\n| electricity_energy", extra + "\n| electricity_energy");
  assert.ok(parsePcrMarkdownToStructured(input.english).measurementRules.some((rule) => rule.id === "conflicting_mass"));
  const result = checkMeasurementConsistency(input);
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_DEFINITION_CONFLICT"));
});

test("q_item cannot use both one-machine and two-machine bases", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, formula: "q_ref = q_item / M; q_item = exchange amount per one accepted finished baler or per two finished balers; q_ref = exchange amount per 1 kg reference flow." }));
  assert.notEqual(result.status, "pass");
  assert.ok(codes(result).some((code) => ["MEASUREMENT_CONVERSION_VARIABLES_UNSUPPORTED", "MEASUREMENT_CONVERSION_VARIABLES_UNDEFINED"].includes(code)));
});

test("unknown prose appended to a conversion variable definition requires manual review", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, formula: "q_ref = q_item / M; q_item = exchange amount per one accepted finished baler under the flexible scaling convention; q_ref = exchange amount per 1 kg reference flow." }));
  assert.equal(result.status, "manual_review");
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_VARIABLES_UNSUPPORTED"));
});

test("simple explicit lists of inventory row ids remain supported conversion scope", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, appliesTo: "steel_plate; electricity" }));
  assert.equal(result.status, "pass", JSON.stringify(result.findings));
});

test("measurement reports identify their finite checker contract version", () => {
  assert.equal(checkMeasurementConsistency(pair()).check_version, 1);
});

test("per-machine collection aggregation cannot silently feed a same-reference 1 kg row", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", basis: "per reference flow", outputBasis: "per reference flow", expression: "Metered energy per reference flow" }));
  assert.equal(result.status, "error");
  assert.ok(result.findings.some((finding) => finding.code === "MEASUREMENT_CONVERSION_MISSING" && finding.row_id === "electricity"));
});

test("unknown linked collection aggregation requires manual review", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", basis: "per reference flow", outputBasis: "per reference flow", expression: "Metered energy per reference flow", collectionBasis: "Apply the context-dependent reporting convention." }));
  assert.equal(result.status, "manual_review");
  assert.ok(codes(result).includes("MEASUREMENT_COLLECTION_BASIS_UNSUPPORTED"));
});

test("q_item collection protocol must actually aggregate on an item basis", () => {
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, collectionBasis: "per 1 kg reference flow" }));
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_COLLECTION_BASIS_MISMATCH"));
});

test("a second otherwise supported M declaration requires manual review", () => {
  const input = pair();
  const extra = "\n| second_mass | reference product | Mass | kg | M = accepted net mass of one complete baler of the same configuration in kg; collect using cp_mass. |";
  input.english = input.english.replace("\n| electricity_energy", extra + "\n| electricity_energy");
  input.chinese = input.chinese.replace("\n| electricity_energy", extra + "\n| electricity_energy");
  const result = checkMeasurementConsistency(input);
  assert.equal(result.status, "manual_review");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_DEFINITION_UNSUPPORTED"));
});

test("a gross-mass M declaration cannot pass through nearby accepted-net-mass words", () => {
  const result = checkMeasurementConsistency(pair({ massRule: "M = gross packaged mass, not accepted net mass of one complete baler of the same configuration in kg; collect using cp_mass." }));
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_DEFINITION_CONFLICT"));
});

test("an M declaration cannot introduce a gross-mass fallback", () => {
  const result = checkMeasurementConsistency(pair({ massRule: "M = accepted net mass of one complete baler of the same configuration in kg; if unavailable use gross packaged mass; collect using cp_mass." }));
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_DEFINITION_CONFLICT"));
});

test("an M definition with unrecognized additional clauses requires review", () => {
  const result = checkMeasurementConsistency(pair({ massRule: "M = accepted net mass of one complete baler of the same configuration in kg; apply an alternative reporting convention when needed; collect using cp_mass." }));
  assert.equal(result.status, "manual_review");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_DEFINITION_UNSUPPORTED"));
});

test("an uncalibrated scale is not a calibrated mass-collection method", () => {
  const result = checkMeasurementConsistency(pair({ method: "Weigh the accepted complete baler on an uncalibrated scale." }));
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_PROTOCOL_INCOMPLETE"));
});

test("uncontrolled acceptance records are not controlled measurement evidence", () => {
  const result = checkMeasurementConsistency(pair({ method: "Use uncontrolled acceptance records for the accepted complete baler of the same configuration." }));
  assert.equal(result.status, "error");
});

test("a concrete traceable acceptance-record method remains supported", () => {
  const result = checkMeasurementConsistency(pair({ method: "Use traceable acceptance records for the accepted complete baler of the same configuration." }));
  assert.equal(result.status, "pass", JSON.stringify(result.findings));
});

test("an otherwise calibrated method with unknown alternative clauses requires review", () => {
  const result = checkMeasurementConsistency(pair({ method: "Weigh the accepted complete baler on a calibrated scale; use an alternative quantity when necessary." }));
  assert.equal(result.status, "manual_review");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_PROTOCOL_UNSUPPORTED"));
});

for (const expression of [
  "Do not apply normalize_mass to q_item; preserve cp_energy per-item amounts.",
  "Apply normalize_mass to q_item then multiply the result by M; cp_energy.",
  "2 * normalize_mass(q_item); cp_energy.",
  "Apply normalize_mass to q_item; then multiply q_ref by M.",
  "Apply normalize_mass to q_item; apply an alternative convention if necessary.",
  "Apply normalize_mass to q_item; subtract a reference product quantity.",
]) {
  test(`a rule-id token cannot certify altered or negative application: ${expression}`, () => {
    const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, expression }));
    assert.notEqual(result.status, "pass");
    assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_APPLICATION_UNSUPPORTED"));
  });
}

test("explicit Chinese application of the same conversion remains supported", () => {
  const input = pair({ referenceAmount: "1", convert: true });
  input.chinese = input.chinese.replace("Apply normalize_mass to q_item; reference_mass; cp_energy.", "对 q_item 应用 normalize_mass；reference_mass；cp_energy。");
  const result = checkMeasurementConsistency(input);
  assert.equal(result.status, "pass", JSON.stringify(result.findings));
});

test("a named altered normalization expression cannot bypass checking in an M kg row", () => {
  const result = checkMeasurementConsistency(pair({ expression: "Apply normalize_mass to q_item then multiply the result by M; cp_energy." }));
  assert.notEqual(result.status, "pass");
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_APPLICATION_UNSUPPORTED"));
});

test("M collection aggregation cannot contradict its accepted-net-mass definition", () => {
  const input = pair();
  input.english = input.english.replace("| M = accepted net mass of one complete baler of the same configuration |", "| M = gross packaged mass |");
  input.chinese = input.chinese.replace("| M = 同一配置的一台成品打捆机的验收净质量 |", "| M = 包装总质量 |");
  const result = checkMeasurementConsistency(input);
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_DEFINITION_CONFLICT"));
});

test("M collection aggregation with unknown fallback clauses requires review", () => {
  const input = pair();
  input.english = input.english.replace("| M = accepted net mass of one complete baler of the same configuration |", "| M = accepted net mass of one complete baler of the same configuration; use an alternative convention if unavailable |");
  input.chinese = input.chinese.replace("| M = 同一配置的一台成品打捆机的验收净质量 |", "| M = 同一配置的一台成品打捆机的验收净质量；不适用时使用其他约定 |");
  const result = checkMeasurementConsistency(input);
  assert.equal(result.status, "manual_review");
  assert.ok(codes(result).includes("MEASUREMENT_MASS_PROTOCOL_UNSUPPORTED"));
});

for (const extra of [
  "then multiply q_ref by M",
  "q_ref_extra = q_item / M",
  "q_ref = 2 * q_ref",
  "if the record is unavailable use a different normalization convention",
]) {
  test(`a calculation rule cannot silently ignore an extra clause: ${extra}`, () => {
    const formula = "q_ref = q_item / M; q_item = exchange amount per one accepted finished baler; q_ref = exchange amount per 1 kg reference flow; " + extra;
    const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, formula }));
    assert.equal(result.status, "manual_review", JSON.stringify(result.findings));
    assert.equal(result.coverage.complete, false);
    assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_UNSUPPORTED"));
  });
}

test("extra unsupported formula clauses cannot hide an explicitly reversed conversion", () => {
  const formula = "q_ref = M / q_item; q_item = exchange amount per one accepted finished baler; q_ref = exchange amount per 1 kg reference flow; then multiply q_ref by M";
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, formula }));
  assert.equal(result.status, "error");
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_DIRECTION_INVALID"));
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_UNSUPPORTED"));
});

test("numeric scaling inside the algebraic assignment remains unsupported", () => {
  const formula = "q_ref = 2 * q_item / M; q_item = exchange amount per one accepted finished baler; q_ref = exchange amount per 1 kg reference flow";
  const result = checkMeasurementConsistency(pair({ referenceAmount: "1", convert: true, formula }));
  assert.equal(result.status, "manual_review");
  assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_UNSUPPORTED"));
});

for (const inputs of ["q_item; do not collect M; cp_mass", "q_item; M; cp_mass; ignore M if unavailable"]) {
  test(`calculation Inputs must contain bare symbol/protocol identifiers: ${inputs}`, () => {
    const input = pair({ referenceAmount: "1", convert: true });
    input.english = input.english.replace("| q_item; M; cp_mass |", "| " + inputs + " |");
    input.chinese = input.chinese.replace("| q_item; M; cp_mass |", "| " + inputs + " |");
    const result = checkMeasurementConsistency(input);
    assert.notEqual(result.status, "pass");
    assert.ok(codes(result).some((code) => ["MEASUREMENT_CONVERSION_INPUTS_INCOMPLETE", "MEASUREMENT_CONVERSION_INPUTS_UNSUPPORTED"].includes(code)));
  });
}

test("calculation Inputs may include another explicitly declared collection protocol", () => {
  const input = pair({ referenceAmount: "1", convert: true });
  input.english = input.english.replace("| q_item; M; cp_mass |", "| q_item; M; cp_mass; cp_energy |");
  input.chinese = input.chinese.replace("| q_item; M; cp_mass |", "| q_item; M; cp_mass; cp_energy |");
  assert.equal(checkMeasurementConsistency(input).status, "pass");
});

for (const expression of ["q_item / M", "q_ref = q_item / M", "M * q_item"]) {
  test(`unlinked reserved normalization symbols cannot pass in an M kg row: ${expression}`, () => {
    const result = checkMeasurementConsistency(pair({ expression }));
    assert.equal(result.status, "manual_review");
    assert.ok(codes(result).includes("MEASUREMENT_CONVERSION_APPLICATION_UNSUPPORTED"));
    assert.equal(result.coverage.complete, false);
  });
}
