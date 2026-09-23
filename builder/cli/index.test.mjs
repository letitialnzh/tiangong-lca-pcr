import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  runPcrDirectoryTransaction,
  transactionStatePaths,
} from "../lib/pcr-directory-transaction.mjs";
import {
  CPC_3_COVERAGE_PATH,
  createCatalogArtifacts,
} from "../scripts/build-catalog.mjs";

const cliPath = path.resolve("builder/cli/index.mjs");
const sampleCpcPath = path.resolve("builder/fixtures/cpc-structure.sample.csv");

const materialIdentityAndReferenceMarkdown = `## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture.crops.wheat-seed |
| covered_products | wheat seed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | cleaned wheat seed for sowing |
| How much | 1 kg |
| How well | declared seed class and moisture basis |
| How long or cycle | one seed production crop cycle |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Wheat 12da5e7d-9b93-4404-8c7d-08f98bec6238 |
| Reference flow property | Mass 93a60a56-a3c8-11da-a746-0800200b9a66 |
| Reference unit group | Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66 |
| Reference unit | kg |
| Required qualifiers | seed class; moisture basis |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass 93a60a56-a3c8-11da-a746-0800200b9a66 | kg | Record the reference flow in kg. |
`;

function makeTempRoot() {
  return mkdtempSync(path.join(tmpdir(), "tiangong-pcr-cli-test-"));
}

function runCli(args, options = {}) {
  return execFileSync(process.execPath, [cliPath, ...args], {
    cwd: path.resolve("."),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    ...options,
  });
}

function runCliFailure(args, options = {}) {
  return execFileSync(process.execPath, [cliPath, ...args], {
    cwd: path.resolve("."),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    ...options,
  });
}

function sha256(value) {
  return `sha256:${createHash("sha256").update(value).digest("hex")}`;
}

test("module-plan CLI emits pre-generation English PCR requirements", () => {
  const root = makeTempRoot();
  const contextPath = path.join(root, "route-context.yaml");
  writeFileSync(
    contextPath,
    `schema_version: 1
type: module-authoring-context
target:
  product_category: apples
route_evidence:
  signals:
    biological_route: true
    multiple_outputs: false
`,
  );

  const plan = JSON.parse(runCli(["module-plan", "--context", contextPath, "--format", "json"]));
  assert.equal(plan.phase, "pre_generation");
  assert.ok(
    plan.selected_modules.some(
      (module) => module.id === "module.activity.managed-biological-production",
    ),
  );
  assert.ok(plan.selected_modules[0].requirements.length > 0);
  rmSync(root, { recursive: true, force: true });
});

function directoryByteSnapshot(root, current = root) {
  const snapshot = [];
  for (const entry of readdirSync(current, { withFileTypes: true })) {
    const absolutePath = path.join(current, entry.name);
    if (entry.isDirectory()) {
      snapshot.push(...directoryByteSnapshot(root, absolutePath));
    } else if (entry.isFile()) {
      snapshot.push([
        path.relative(root, absolutePath).split(path.sep).join("/"),
        createHash("sha256").update(readFileSync(absolutePath)).digest("hex"),
      ]);
    }
  }
  return snapshot.sort(([left], [right]) => left.localeCompare(right));
}

function installLegacyEmptyCpcMapping(root) {
  const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
  const source = `schema_version: 1
classification_system: CPC
classification_version: "3.0"
status: scaffold
mappings: []
`;
  mkdirSync(path.dirname(mappingPath), { recursive: true });
  writeFileSync(mappingPath, source);
  return { mappingPath, source };
}

function writePublicationReadyPcr(
  root,
  pcrDir,
  { blocker = false, translationStatus = "reviewed" } = {},
) {
  writeFileSync(
    path.join(pcrDir, "manifest.yaml"),
    `schema_version: 1
id: pcr.agriculture.crops.wheat-seed
version: "0.1.0"
title:
  en-US: "Wheat seed production"
  zh-CN: "小麦种子生产"
status: candidate
pcr_kind: product_category_rule
content_maturity: authored_methodology
languages:
  canonical: en-US
  available:
    - en-US
    - zh-CN
translation_status:
  zh-CN: ${translationStatus}
target_entities:
  - flow
  - process
  - lifecyclemodel
  - dataset
${blocker ? `review_metadata:\n  unresolved_identity:\n    - "Select the final product flow before publication."\n` : ""}`,
  );
  writeFileSync(
    path.join(pcrDir, "pcr.en-US.md"),
    `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wheat Seed Production

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture.crops.wheat-seed |
| covered_products | wheat seed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | cleaned wheat seed for sowing |
| How much | 1 kg |
| How well | declared seed class and moisture basis |
| How long or cycle | one seed production crop cycle |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Wheat \`12da5e7d-9b93-4404-8c7d-08f98bec6238\` |
| Reference flow property | Mass \`93a60a56-a3c8-11da-a746-0800200b9a66\` |
| Reference unit group | Units of mass \`93a60a57-a4c8-11da-a746-0800200c9a66\` |
| Reference unit | kg |
| Required qualifiers | seed class; moisture basis |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| \`reference_mass\` | reference product | Mass \`93a60a56-a3c8-11da-a746-0800200b9a66\` | kg | Record the reference flow in kg. |

## 5. System Boundary

The foreground system boundary must begin with the accepted seed lot and end at the declared gate.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | accepted seed lot |
| starting_condition_role | disclosed foreground input |
| product_classification_scope | wheat seed |
| recursive_input_rule | same-category input remains explicit |
| upstream_dataset_requirement | source lot disclosure |
| disclosure | record source lot and declared gate |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| applicability | Applicability record | required |  | foreground disclosure | reference product |

### Process: Applicability Record (\`applicability\`)

#### Inputs

##### Product flows

###### Method applicability record (\`method_applicability_record\`)

This row records the applicability declaration and is not a quantitative exchange.

- Selected flow: Method applicability record
- Flow property / unit: Narrative disclosure record
- Amount rule: descriptive record
- Value mode: Not applicable (\`not_applicable\`)
- Specificity: Not applicable (\`not_applicable\`)
- Normalization basis: reference flow
- Basis kind: Reference flow (\`reference_flow\`)
- Evidence kind: Identity reference (\`identity_reference\`)
- Sources:

## 7. Allocation and Co-product Handling

No co-products are represented by this applicability record.

## 9. Validation Rules

The applicability record and reference-flow qualifiers must be present.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset |
| allowed_use | wheat seed production with matching qualifiers |
| excluded_use | commodity grain production |
| required_metadata | reference flow; seed class; moisture basis |
| required_quality_disclosure | applicability and source-lot records |
| update_trigger | material boundary or reference-flow change |
`,
  );
  writeFileSync(
    path.join(pcrDir, "pcr.zh-CN.md"),
    `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 小麦种子生产

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture.crops.wheat-seed |
| covered_products | 小麦种子 |

## 5. 系统边界

前景系统边界必须从接收的种批开始，并在声明的交付边界结束。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | accepted seed lot |
| starting_condition_role | disclosed foreground input |
| product_classification_scope | wheat seed |
| recursive_input_rule | same-category input remains explicit |
| upstream_dataset_requirement | source lot disclosure |
| disclosure | record source lot and declared gate |

## 7. 分配与副产品处理

本适用性记录不表示副产品。

## 9. 验证规则

适用性记录和参考流限定信息必须存在。
`,
  );
  runCli([
    "sync-structured",
    "--root",
    root,
    "--pcr",
    "library/pcrs/agriculture/crops/wheat-seed",
  ]);
}

function createManagedPublishedPcr(root, version = "1.0.0") {
  const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
  const pcrDir = path.join(root, pcrOption);
  runCli(["init", "--root", root]);
  runCli([
    "init",
    "--root",
    root,
    "--sample-pcr",
    "agriculture/crops/wheat-seed",
    "--pcr-id",
    "pcr.agriculture.crops.wheat-seed",
    "--title-en",
    "Wheat seed production",
    "--title-zh-CN",
    "小麦种子生产",
  ]);
  writePublicationReadyPcr(root, pcrDir);
  runCli([
    "lifecycle",
    "--root",
    root,
    "--pcr",
    pcrOption,
    "--status",
    "active",
    "--content-maturity",
    "reviewed_methodology",
    "--translation",
    "zh-CN=reviewed",
  ]);
  runCli(["publish", "--root", root, "--pcr", pcrOption, "--version", version]);
  return { pcrDir, pcrOption };
}

test("init creates the bilingual PCR repository scaffold", () => {
  const root = makeTempRoot();
  try {
    const output = runCli(["init", "--root", root]);

    assert.match(output, /initialized PCR library scaffold/i);
    assert.match(
      readFileSync(path.join(root, "library/pcrs/README.md"), "utf8"),
      /pcr.en-US.md/,
    );
    assert.match(
      readFileSync(path.join(root, "library/modules/README.md"), "utf8"),
      /module.en-US.md/,
    );
    assert.match(
      readFileSync(path.join(root, "builder/README.md"), "utf8"),
      /Builder CLI/,
    );
    assert.match(
      readFileSync(path.join(root, "builder/docs/index.md"), "utf8"),
      /Builder Documentation Index/,
    );
    assert.deepEqual(
      parseYaml(readFileSync(path.join(root, "library/catalog.yaml"), "utf8")),
      {
        schema_version: 1,
        catalog_status: "scaffold",
        pcr_index: "library/indexes/pcr-index.yaml",
        pcr_id_aliases: {
          path: "classifications/aliases/pcr-id-aliases.yaml",
          hash_mode: "exact_bytes",
          sha256: `sha256:${createHash("sha256")
            .update(readFileSync(
              path.join(root, "classifications/aliases/pcr-id-aliases.yaml"),
            ))
            .digest("hex")}`,
          entry_count: 0,
        },
        classification_mappings: [],
        notes: [
          "Canonical PCR ids are independent from classification codes.",
          "Add deterministic classification mapping files as they become available.",
        ],
      },
    );
    assert.ok(existsSync(path.join(root, "builder/docs/workflows")));
    assert.ok(existsSync(path.join(root, "builder/docs/contracts")));
    assert.ok(existsSync(path.join(root, "builder/docs/methods")));
    assert.ok(existsSync(path.join(root, "builder/docs/tools")));
    assert.ok(existsSync(path.join(root, "builder/docs/prompts")));
    assert.ok(existsSync(path.join(root, "classifications/aliases/pcr-id-aliases.yaml")));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint passes for initialized scaffold", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const output = runCli(["lint", "--root", root]);

    assert.match(output, /PCR library lint passed/i);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint rejects PCR directories missing the Chinese markdown file", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    unlinkSync(path.join(pcrDir, "pcr.en-US.md"));

    assert.throws(
      () => runCli(["lint", "--root", root]),
      (error) =>
        String(error.stderr).includes("library/pcrs/agriculture/crops/wheat-seed/pcr.en-US.md"),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("optional PCR scaffold uses process inventory without construction trace sections", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);

    const enMarkdown = readFileSync(path.join(pcrDir, "pcr.en-US.md"), "utf8");
    const zhMarkdown = readFileSync(path.join(pcrDir, "pcr.zh-CN.md"), "utf8");
    const manifest = readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8");
    const structured = readFileSync(path.join(pcrDir, "structured.yaml"), "utf8");

    assert.match(manifest, /target_entities:\n  - flow\n  - process\n  - lifecyclemodel\n  - dataset/);
    assert.match(enMarkdown, /canonical_pcr_id/);
    assert.match(enMarkdown, /How much/);
    assert.match(enMarkdown, /### Boundary Abstraction/);
    assert.match(enMarkdown, /declared_starting_condition/);
    assert.match(enMarkdown, /## 6\. Process Inventory Structure/);
    assert.match(enMarkdown, /### Process Map/);
    assert.match(enMarkdown, /process_id/);
    assert.match(enMarkdown, /### Process: <process name> \(`<process_id>`\)/);
    assert.match(enMarkdown, /#### Inputs/);
    assert.match(enMarkdown, /##### Product flows/);
    assert.match(enMarkdown, /##### Waste flows/);
    assert.match(enMarkdown, /##### Elementary flows/);
    assert.match(enMarkdown, /#### Outputs/);
    assert.match(enMarkdown, /Collection protocol/);
    assert.match(enMarkdown, /## 8\. Foreground Data Collection, Calculation, and Quality Rules/);
    assert.match(enMarkdown, /### Data Collection Protocols/);
    assert.match(enMarkdown, /### Calculation Rules/);
    assert.match(enMarkdown, /### Data Quality Requirements/);
    assert.match(enMarkdown, /## 10\. Published Dataset Profile/);
    assert.match(enMarkdown, /## 11\. Data Sources/);
    assert.doesNotMatch(enMarkdown, /CLI Lookup Trace|Agent Modelling Instructions|Open Questions|Review Status/);

    assert.match(zhMarkdown, /## 6\. 过程清单结构/);
    assert.match(zhMarkdown, /\| 字段 \| 值 \|/);
    assert.match(zhMarkdown, /### 边界概化/);
    assert.match(zhMarkdown, /declared_starting_condition/);
    assert.match(zhMarkdown, /\| rule_id \| 适用对象 \| 必需流属性 \| 必需单位 \| 规则 \|/);
    assert.match(zhMarkdown, /### 过程图/);
    assert.match(zhMarkdown, /process_id/);
    assert.match(zhMarkdown, /过程名称/);
    assert.match(zhMarkdown, /### 过程：<过程名称>（`<process_id>`）/);
    assert.match(zhMarkdown, /#### 输入/);
    assert.match(zhMarkdown, /##### 产品流/);
    assert.match(zhMarkdown, /##### 废物流/);
    assert.match(zhMarkdown, /##### 基本流/);
    assert.match(zhMarkdown, /#### 输出/);
    assert.match(zhMarkdown, /采集协议/);
    assert.match(zhMarkdown, /## 8\. 前景数据采集、计算与质量规则/);
    assert.match(zhMarkdown, /### 数据采集协议/);
    assert.match(zhMarkdown, /### 计算规则/);
    assert.match(zhMarkdown, /### 数据质量要求/);
    assert.match(zhMarkdown, /## 10\. 发布数据集画像/);
    assert.match(zhMarkdown, /## 11\. 数据源/);
    assert.doesNotMatch(
      zhMarkdown,
      /\| Field \| Value \||\| Reference amount|### Process Map|\| process_id \| process_name/,
    );
    assert.doesNotMatch(zhMarkdown, /CLI 查询记录|Agent 建模指令|待复核问题|审核状态/);

    assert.match(structured, /process_inventory: \[\]/);
    assert.match(structured, /boundary_abstraction: \{\}/);
    assert.deepEqual(parseYaml(structured).system_boundary, { rules: [] });
    assert.match(structured, /data_sources: \[\]/);
    assert.doesNotMatch(structured, /cli_lookup_trace/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("sync-structured projects markdown flow cards to UUID-only structured YAML", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writeFileSync(
      path.join(pcrDir, "pcr.en-US.md"),
      `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: en-US
status: active
sync_with: pcr.zh-CN.md
---

# Wheat Seed Production

## 3. Reference Flow

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Wheat \`12da5e7d-9b93-4404-8c7d-08f98bec6238\` |
| Reference flow property | Mass \`93a60a56-a3c8-11da-a746-0800200b9a66\` |
| Reference unit group | Units of mass \`93a60a57-a4c8-11da-a746-0800200c9a66\` |
| Reference unit | kg |
| Required qualifiers | seed class; treatment status; moisture basis; purity; germination rate; declared gate |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| \`reference_mass\` | reference product | Mass \`93a60a56-a3c8-11da-a746-0800200b9a66\` | kg | Reference flow must be expressed as kg cleaned wheat seed. |
| \`seed_count_conversion\` | optional seed-count data | Mass \`93a60a56-a3c8-11da-a746-0800200b9a66\` | kg | Seed count data must include thousand-kernel weight for conversion to mass. |

## 5. System Boundary

The boundary must retain the declared source-route provenance.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | source_seed_lot |
| starting_condition_role | identity_and_reproduction_condition |
| product_classification_scope | current CPC product category \`01111\`, \`Wheat, seed\` |
| recursive_input_rule | input flow in same product category is recorded as declared starting condition |
| upstream_dataset_requirement | declared starting condition disclosure and collection record |
| disclosure | record source seed lot identity, propagation class, mass, moisture basis, treatment status, and evidence |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| field_seed_multiplication | Field Seed Multiplication | required |  | foreground | harvested seed crop |

### Process: Field Seed Multiplication (\`field_seed_multiplication\`)

#### Inputs

##### Product flows

###### Source seed lot used for multiplication (\`source_seed_lot_used_for_multiplication\`)

Source seed lot used for multiplication is recorded as an input product flow. The amount requirement is site-specific measured mass, normalized on per 1,000 kg harvested seed crop.

- Selected flow: Wheat \`12da5e7d-9b93-4404-8c7d-08f98bec6238\`
- Flow property / unit: Mass / kg
- Amount rule: site-specific measured mass
- Value mode: Foreground record (\`foreground_record\`)
- Specificity: Site-specific (\`site_specific\`)
- Normalization basis: per 1,000 kg harvested seed crop
- Basis kind: Process output (\`process_output\`)
- Evidence kind: Collected record (\`collected_record\`)
- Collection protocol: cp_source_seed_lot_mass
- Sources: \`unl-wheat-seeding-rate\`


#### Outputs

##### Product flows

###### Harvested wheat seed crop (\`harvested_wheat_seed_crop\`)

Harvested wheat seed crop is recorded as an output product flow. The amount requirement is measured harvested mass, normalized on process reference.

- Selected flow: Wheat \`12da5e7d-9b93-4404-8c7d-08f98bec6238\`
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass
- Value mode: Foreground record (\`foreground_record\`)
- Specificity: Site-specific (\`site_specific\`)
- Normalization basis: process reference
- Basis kind: Process output (\`process_output\`)
- Evidence kind: Collected record (\`collected_record\`)
- Collection protocol: cp_harvested_seed_mass
- Sources:


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source_seed_lot_mass | field_seed_multiplication | Source seed lot used for multiplication | seed lot receiving record | lot id; mass; moisture basis | weighbridge or calibrated scale | kg | per seed lot | crop cycle | seed multiplication site | sum lots and normalize to harvested seed output | scale calibration and lot record |
| cp_harvested_seed_mass | field_seed_multiplication | Harvested wheat seed crop | harvest record | field id; harvested mass; moisture basis | weighbridge or calibrated scale | kg | per harvest event | crop cycle | seed multiplication site | sum harvest records at declared moisture basis | scale calibration and harvest record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_source_seed_lot_input | source seed lot input | source seed lot kg / harvested seed kg * reference output | cp_source_seed_lot_mass; cp_harvested_seed_mass | kg source seed lot per reference output |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_seed_mass | seed mass records | Weighing records must identify lot, mass, date, and moisture basis. | scale calibration and lot records |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | wheat seed production datasets with matching seed class, treatment status, geography, and declared gate |
| excluded_use | commodity wheat grain and seed production routes outside the declared boundary |
| required_metadata | reference flow; geography; crop cycle; moisture basis; seed class; treatment status; DQR |
| required_quality_disclosure | collected record coverage, calculation rules, and data quality scores |
| update_trigger | material process, geography, seed treatment, or data quality change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| \`unl-wheat-seeding-rate\` | extension-guidance | https://cropwatch.unl.edu/determining-seeding-rate-your-winter-wheat/ | source seed lot context |
`,
    );

    const output = runCli([
      "sync-structured",
      "--root",
      root,
      "--pcr",
      "library/pcrs/agriculture/crops/wheat-seed",
    ]);
    const structured = readFileSync(path.join(pcrDir, "structured.yaml"), "utf8");

    assert.match(output, /synced structured PCR/i);
    assert.match(structured, /source_markdown: pcr\.en-US\.md/);
    assert.match(structured, /reference_flow_definition:/);
    assert.match(structured, /reference_amount: "1 kg"/);
    assert.match(structured, /required_qualifiers:/);
    assert.match(structured, /- "seed class"/);
    assert.match(structured, /uuid: "12da5e7d-9b93-4404-8c7d-08f98bec6238"/);
    assert.match(structured, /measurement_rules:/);
    assert.match(structured, /id: reference_mass/);
    assert.match(structured, /required_unit: "kg"/);
    assert.match(structured, /boundary_abstraction:/);
    assert.match(structured, /declared_starting_condition: "source_seed_lot"/);
    assert.match(
      structured,
      /recursive_input_rule: "input flow in same product category is recorded as declared starting condition"/,
    );
    assert.match(structured, /process_map:/);
    assert.match(structured, /inclusion: "required"/);
    assert.match(structured, /process_inventory:/);
    assert.match(structured, /id: field_seed_multiplication/);
    assert.match(structured, /row_id: source_seed_lot_used_for_multiplication/);
    assert.match(structured, /amount:/);
    assert.match(structured, /value_mode: "foreground_record"/);
    assert.match(structured, /specificity: "site_specific"/);
    assert.match(structured, /kind: "process_output"/);
    assert.match(structured, /kind: "collected_record"/);
    assert.match(structured, /collection_protocol_id: cp_source_seed_lot_mass/);
    assert.match(structured, /dataset_production:/);
    assert.match(structured, /collection_protocols:/);
    assert.match(structured, /protocol_id: cp_source_seed_lot_mass/);
    assert.match(structured, /calculation_rules:/);
    assert.match(structured, /id: normalize_source_seed_lot_input/);
    assert.match(structured, /data_quality_requirements:/);
    assert.match(structured, /id: dq_seed_mass/);
    assert.match(structured, /published_dataset_profile:/);
    assert.match(structured, /dataset_role: "unit_process"/);
    assert.match(structured, /source_ids:/);
    assert.match(structured, /- unl-wheat-seeding-rate/);
    assert.doesNotMatch(structured, /01\.01\.002|@01|version: "01|cli_lookup_trace|review_status/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint requires collection protocols for authored foreground flow rows", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writeFileSync(
      path.join(pcrDir, "manifest.yaml"),
      `schema_version: 1
id: pcr.agriculture.crops.wheat-seed
title:
  en-US: "Wheat seed production"
  zh-CN: "小麦种子生产"
status: candidate
pcr_kind: product_category_rule
content_maturity: authored_methodology
languages:
  canonical: en-US
  available:
    - en-US
    - zh-CN
`,
    );
    writeFileSync(
      path.join(pcrDir, "pcr.en-US.md"),
      `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wheat Seed Production

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| field_seed_multiplication | Field Seed Multiplication | required |  | foreground | harvested seed crop |

### Process: Field Seed Multiplication (\`field_seed_multiplication\`)

#### Inputs

##### Product flows

###### Source seed lot used for multiplication (\`source_seed_lot_used_for_multiplication\`)

Source seed lot used for multiplication is recorded as an input product flow. The amount requirement is site-specific measured mass, normalized on per 1,000 kg harvested seed crop.

- Selected flow: Wheat \`12da5e7d-9b93-4404-8c7d-08f98bec6238\`
- Flow property / unit: Mass / kg
- Amount rule: site-specific measured mass
- Value mode: Foreground record (\`foreground_record\`)
- Specificity: Site-specific (\`site_specific\`)
- Normalization basis: per 1,000 kg harvested seed crop
- Basis kind: Process output (\`process_output\`)
- Evidence kind: Collected record (\`collected_record\`)
- Collection protocol: cp_missing
- Sources:

###### Fertilizer input (\`fertilizer_input\`)

Fertilizer input is recorded as an input product flow. The amount requirement is site-specific, normalized on per output.

- Selected flow: Urea \`3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e\`
- Flow property / unit: Mass / kg
- Amount rule: site-specific
- Value mode: Foreground record (\`foreground_record\`)
- Specificity: Site-specific (\`site_specific\`)
- Normalization basis: per output
- Basis kind: Process output (\`process_output\`)
- Evidence kind: Collected record (\`collected_record\`)
- Collection protocol:
- Sources:

`,
    );

    assert.throws(
      () => runCli(["lint", "--root", root]),
      (error) =>
        String(error.stderr).includes("references unknown collection_protocol_id cp_missing") &&
        String(error.stderr).includes("requires collection_protocol_id for evidence_kind collected_record"),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint accepts reasoned estimate ranges without source ids", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writeFileSync(
      path.join(pcrDir, "pcr.en-US.md"),
      `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Wheat Seed Production

${materialIdentityAndReferenceMarkdown}

## 5. System Boundary

The boundary must retain the declared source-route provenance.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | source material provenance |
| starting_condition_role | route disclosure |
| product_classification_scope | wheat seed |
| recursive_input_rule | same-category seed input remains explicit |
| upstream_dataset_requirement | source material disclosure |
| disclosure | collection area or permit disclosure |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| drying | Drying | optional |  | foreground estimate | dried product |

### Process: Drying (\`drying\`)

#### Inputs

##### Product flows

###### Drying energy (\`drying_energy\`)

Drying energy is estimated when no source-backed range is available yet.

- Selected flow: Select electricity or fuel flow
- Flow property / unit: Energy; kWh
- Amount rule: reasoned screening estimate until source-backed evidence is available
- Value mode: Modelled estimate (\`modelled_estimate\`)
- Specificity: Generic (\`generic\`)
- Normalization basis: per kg dried product
- Basis kind: Process output (\`process_output\`)
- Evidence kind: Reasoned estimate (\`reasoned_estimate\`)
- Range: Common-sense screening estimate
  - Range role: Default estimate (\`default_estimate\`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kWh/kg dried product
  - Basis: per kg dried product
  - Basis kind: Process output (\`process_output\`)
  - Evidence kind: Reasoned estimate (\`reasoned_estimate\`)
`,
    );
    const output = runCli(["lint", "--root", root]);

    assert.match(output, /PCR library lint passed/i);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint does not require ranges for non-quantity disclosure rows", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writeFileSync(
      path.join(pcrDir, "manifest.yaml"),
      `schema_version: 1
id: pcr.agriculture.crops.wheat-seed
title:
  en-US: "Wheat seed production"
  zh-CN: "小麦种子生产"
status: candidate
pcr_kind: product_category_rule
content_maturity: authored_methodology
languages:
  canonical: en-US
  available:
    - en-US
    - zh-CN
translation_status:
  zh-CN: draft_translation
target_entities:
  - flow
  - process
  - lifecyclemodel
  - dataset
`,
    );
    writeFileSync(
      path.join(pcrDir, "pcr.en-US.md"),
      `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wheat Seed Production

${materialIdentityAndReferenceMarkdown}

## 5. System Boundary

The boundary must keep the source seed lot and drying process explicit.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | source material provenance |
| starting_condition_role | route disclosure |
| product_classification_scope | wheat seed |
| recursive_input_rule | same-category seed input remains explicit |
| upstream_dataset_requirement | source material disclosure |
| disclosure | collection area or permit disclosure |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| provenance | Provenance | optional |  | foreground disclosure | source material |

### Process: Provenance (\`provenance\`)

#### Inputs

##### Elementary flows

###### Collection area or permit disclosure (\`collection_area_or_permit_disclosure\`)

This row records route-specific provenance disclosures that are not numeric material or energy quantities.

- Selected flow: Select route-specific collection area, habitat interaction, or legal harvest disclosure flow
- Flow property / unit: Area, count, permit descriptor, or narrative record
- Amount rule: Record collection area, permit identifier, salvage source, aquaculture source, or processing-residue source.
- Value mode: Foreground record (\`foreground_record\`)
- Specificity: Route-specific (\`route_specific\`)
- Normalization basis: Source route disclosure associated with accepted source material.
- Basis kind: Process output (\`process_output\`)
- Evidence kind: Source rule (\`source_rule\`)

## 7. Allocation and Co-product Handling

No allocation is applied to the disclosure row.

## 9. Validation Rules

The source-route disclosure must be present.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset |
| allowed_use | candidate provenance guidance |
| excluded_use | reviewed use without provenance review |
| required_metadata | source route disclosure |
| required_quality_disclosure | disclosure row is non-quantity and does not require range |
| update_trigger | provenance rule change |
`,
    );
    runCli([
      "sync-structured",
      "--root",
      root,
      "--pcr",
      "library/pcrs/agriculture/crops/wheat-seed",
    ]);
    const output = runCli(["lint", "--root", root]);

    assert.match(output, /PCR library lint passed/i);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint warns when candidate PCR important flow has no range", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writeFileSync(
      path.join(pcrDir, "manifest.yaml"),
      `schema_version: 1
id: pcr.agriculture.crops.wheat-seed
title:
  en-US: "Wheat seed production"
  zh-CN: "小麦种子生产"
status: candidate
pcr_kind: product_category_rule
content_maturity: authored_methodology
languages:
  canonical: en-US
  available:
    - en-US
    - zh-CN
translation_status:
  zh-CN: draft_translation
target_entities:
  - flow
  - process
  - lifecyclemodel
  - dataset
`,
    );
    writeFileSync(
      path.join(pcrDir, "pcr.en-US.md"),
      `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wheat Seed Production

${materialIdentityAndReferenceMarkdown}

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | source_seed_lot |
| starting_condition_role | identity and reproduction condition |
| product_classification_scope | wheat seed |
| recursive_input_rule | same-category seed input remains explicit |
| upstream_dataset_requirement | source seed lot disclosure |
| disclosure | source seed lot and energy records |

The boundary must keep the source seed lot and drying process explicit.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| drying | Drying | optional |  | foreground estimate | dried product |

### Process: Drying (\`drying\`)

#### Inputs

##### Product flows

###### Drying energy (\`drying_energy\`)

Drying energy is estimated before source-backed ranges are available.

- Selected flow: Select electricity or fuel flow
- Flow property / unit: Energy; kWh
- Amount rule: reasoned screening estimate until source-backed evidence is available
- Value mode: Modelled estimate (\`modelled_estimate\`)
- Specificity: Generic (\`generic\`)
- Normalization basis: per kg dried product
- Basis kind: Process output (\`process_output\`)
- Evidence kind: Reasoned estimate (\`reasoned_estimate\`)

## 7. Allocation and Co-product Handling

No allocation is applied to the drying estimate.

## 9. Validation Rules

The drying-energy basis must be disclosed.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset |
| allowed_use | candidate drying guidance |
| excluded_use | reviewed use without range replacement |
| required_metadata | drying energy basis |
| required_quality_disclosure | missing range warning |
| update_trigger | source-backed range evidence |
`,
    );
    runCli([
      "sync-structured",
      "--root",
      root,
      "--pcr",
      "library/pcrs/agriculture/crops/wheat-seed",
    ]);
    const output = runCli(["lint", "--root", root]);

    assert.match(output, /PCR library lint passed with warnings/i);
    assert.match(output, /flow "Drying energy" is an important flow .* has no amount range/);
    assert.match(output, /reasoned_estimate/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint fails when reviewed PCR important flow has no range", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writeFileSync(
      path.join(pcrDir, "manifest.yaml"),
      `schema_version: 1
id: pcr.agriculture.crops.wheat-seed
title:
  en-US: "Wheat seed production"
  zh-CN: "小麦种子生产"
status: active
pcr_kind: product_category_rule
content_maturity: reviewed_methodology
languages:
  canonical: en-US
  available:
    - en-US
    - zh-CN
translation_status:
  zh-CN: reviewed
target_entities:
  - flow
  - process
  - lifecyclemodel
  - dataset
`,
    );
    writeFileSync(
      path.join(pcrDir, "pcr.en-US.md"),
      `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: en-US
status: active
sync_with: pcr.zh-CN.md
---

# Wheat Seed Production

${materialIdentityAndReferenceMarkdown}

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | source_seed_lot |
| starting_condition_role | identity and reproduction condition |
| product_classification_scope | wheat seed |
| recursive_input_rule | same-category seed input remains explicit |
| upstream_dataset_requirement | source seed lot disclosure |
| disclosure | source seed lot and energy records |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| drying | Drying | optional |  | foreground estimate | dried product |

### Process: Drying (\`drying\`)

#### Inputs

##### Product flows

###### Drying energy (\`drying_energy\`)

Drying energy is estimated before source-backed ranges are available.

- Selected flow: Select electricity or fuel flow
- Flow property / unit: Energy; kWh
- Amount rule: reasoned screening estimate until source-backed evidence is available
- Value mode: Modelled estimate (\`modelled_estimate\`)
- Specificity: Generic (\`generic\`)
- Normalization basis: per kg dried product
- Basis kind: Process output (\`process_output\`)
- Evidence kind: Reasoned estimate (\`reasoned_estimate\`)

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset |
| allowed_use | reviewed drying guidance |
| excluded_use | unreviewed range-free use |
| required_metadata | drying energy basis |
| required_quality_disclosure | reviewed range evidence |
| update_trigger | source-backed range evidence |
`,
    );

    assert.throws(
      () => runCli(["lint", "--root", root]),
      (error) => /flow "Drying energy" is an important flow .* has no amount range/u.test(String(error.stderr)),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint rejects recursive origin wording in material PCR markdown", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writeFileSync(
      path.join(pcrDir, "manifest.yaml"),
      `schema_version: 1
id: pcr.agriculture.crops.wheat-seed
title:
  en-US: "Wheat seed production"
  zh-CN: "小麦种子生产"
status: candidate
pcr_kind: product_category_rule
content_maturity: authored_methodology
languages:
  canonical: en-US
  available:
    - en-US
    - zh-CN
`,
    );
    writeFileSync(
      path.join(pcrDir, "pcr.en-US.md"),
      `---
pcr_id: pcr.agriculture.crops.wheat-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wheat Seed Production

## 5. System Boundary

Previous-generation wheat seed is the starting point.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | source_seed_lot |
| starting_condition_role | identity_and_reproduction_condition |
| product_classification_scope | current CPC product category \`01111\`, \`Wheat, seed\` |
| recursive_input_rule | input flow in same product category is recorded as declared starting condition |
| upstream_dataset_requirement | declared starting condition disclosure and collection record |
| disclosure | record source seed lot identity, propagation class, mass, moisture basis, treatment status, and evidence |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| field_seed_multiplication | Field Seed Multiplication | required |  | foreground | harvested seed crop |

### Process: Field Seed Multiplication (\`field_seed_multiplication\`)

#### Inputs

##### Product flows

###### Source seed lot used for multiplication (\`source_seed_lot_used_for_multiplication\`)

Source seed lot used for multiplication is recorded as an input product flow. The amount requirement is site-specific measured mass, normalized on per 1,000 kg harvested seed crop.

- Selected flow: Wheat \`12da5e7d-9b93-4404-8c7d-08f98bec6238\`
- Flow property / unit: Mass / kg
- Amount rule: site-specific measured mass
- Value mode: Foreground record (\`foreground_record\`)
- Specificity: Site-specific (\`site_specific\`)
- Normalization basis: per 1,000 kg harvested seed crop
- Basis kind: Process output (\`process_output\`)
- Evidence kind: Collected record (\`collected_record\`)
- Collection protocol: cp_source_seed_lot_mass
- Sources:


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source_seed_lot_mass | field_seed_multiplication | Source seed lot used for multiplication | seed lot receiving record | lot id; mass; moisture basis | weighbridge or calibrated scale | kg | per seed lot | crop cycle | seed multiplication site | sum lots and normalize to harvested seed output | scale calibration and lot record |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | wheat seed production datasets with matching seed class, treatment status, geography, and declared gate |
| excluded_use | commodity wheat grain and seed production routes outside the declared boundary |
| required_metadata | reference flow; geography; crop cycle; moisture basis; seed class; treatment status; DQR |
| required_quality_disclosure | collected record coverage, calculation rules, and data quality scores |
| update_trigger | material process, geography, seed treatment, or data quality change |
`,
    );

    assert.throws(
      () => runCli(["lint", "--root", root]),
      (error) => String(error.stderr).includes('contains prohibited recursive-origin term "Previous-generation"'),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("bump updates versions and reviewed PCRs can publish", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);

    const bumpOutput = runCli([
      "bump",
      "--root",
      root,
      "--pcr",
      "library/pcrs/agriculture/crops/wheat-seed",
      "--level",
      "minor",
    ]);
    assert.match(bumpOutput, /Updated PCR manifest version at library\/pcrs\/agriculture\/crops\/wheat-seed\/manifest.yaml/);
    let manifest = readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8");
    let parsedManifest = parseYaml(manifest);
    assert.equal(parsedManifest.version, "0.1.0");
    assert.ok(parsedManifest.updated_at_utc);
    assert.equal(parsedManifest.title["en-US"], "Wheat seed production");
    assert.deepEqual(parsedManifest.target_entities, ["flow", "process", "lifecyclemodel", "dataset"]);

    writePublicationReadyPcr(root, pcrDir);
    runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      "library/pcrs/agriculture/crops/wheat-seed",
      "--status",
      "active",
      "--content-maturity",
      "reviewed_methodology",
      "--translation",
      "zh-CN=reviewed",
    ]);
    const publishOutput = runCli([
      "publish",
      "--root",
      root,
      "--pcr",
      "library/pcrs/agriculture/crops/wheat-seed",
      "--version",
      "1.0.0",
    ]);
    assert.match(
      publishOutput,
      /Published PCR manifest at library\/pcrs\/agriculture\/crops\/wheat-seed\/manifest.yaml \(version 1\.0\.0\)/,
    );
    assert.match(publishOutput, /Archived immutable release at library\/pcrs\/agriculture\/crops\/wheat-seed\/releases\/1\.0\.0/);
    manifest = readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8");
    parsedManifest = parseYaml(manifest);
    assert.equal(parsedManifest.status, "published");
    assert.equal(parsedManifest.content_maturity, "published_methodology");
    assert.equal(parsedManifest.version, "1.0.0");
    assert.ok(parsedManifest.published_at_utc);
    assert.equal(parsedManifest.title["zh-CN"], "小麦种子生产");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("first publication requires an explicit version without writing transaction state", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
    const pcrDir = path.join(root, pcrOption);
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir);
    runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--status",
      "active",
      "--content-maturity",
      "reviewed_methodology",
      "--translation",
      "zh-CN=reviewed",
    ]);
    const before = Object.fromEntries(
      readdirSync(pcrDir).map((fileName) => [
        fileName,
        readFileSync(path.join(pcrDir, fileName), "utf8"),
      ]),
    );

    assert.throws(
      () => runCliFailure(["publish", "--root", root, "--pcr", pcrOption]),
      (error) => {
        assert.match(String(error.stderr), /first publication requires an explicit --version <semver>/u);
        return true;
      },
    );
    assert.deepEqual(
      Object.fromEntries(
        readdirSync(pcrDir).map((fileName) => [
          fileName,
          readFileSync(path.join(pcrDir, fileName), "utf8"),
        ]),
      ),
      before,
    );
    assert.equal(existsSync(path.join(root, "library", ".pcr-builder-state")), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("pcr:recover validates the recovered PCR before deleting transaction evidence", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
    const pcrDir = path.join(root, pcrOption);
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    const transaction = runPcrDirectoryTransaction({
      root,
      pcr: pcrDir,
      prepareStage({ stageDir }) {
        rmSync(path.join(stageDir, "pcr.zh-CN.md"));
      },
      onPhase({ phase }) {
        if (phase === "committed") {
          throw new Error("leave committed recovery state");
        }
      },
    });
    assert.equal(transaction.committed, true);
    assert.equal(transaction.recoveryRequired, true);
    const statePaths = transactionStatePaths({ root, pcr: pcrDir });

    assert.throws(
      () => runCliFailure(["recover", "--root", root, "--pcr", pcrOption]),
      (error) => {
        assert.match(String(error.stderr), /PCR recovered-tree validation failed/u);
        assert.match(String(error.stderr), /Missing PCR file/u);
        return true;
      },
    );
    assert.equal(existsSync(statePaths.journalPath), true);
    assert.equal(existsSync(statePaths.backupDir), true);
    assert.equal(existsSync(statePaths.transactionDir), true);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("first publication creates a byte-verified immutable release and history", () => {
  const root = makeTempRoot();
  try {
    const { pcrDir } = createManagedPublishedPcr(root);
    const releaseDir = path.join(pcrDir, "releases/1.0.0");
    const historyText = readFileSync(path.join(pcrDir, "release-history.yaml"), "utf8");
    const history = parseYaml(historyText);
    const releaseText = readFileSync(path.join(releaseDir, "release.yaml"), "utf8");
    const release = parseYaml(releaseText);
    const artifactFiles = {
      manifest_snapshot_sha256: "manifest.snapshot.yaml",
      pcr_en_us_sha256: "pcr.en-US.md",
      pcr_zh_cn_sha256: "pcr.zh-CN.md",
      structured_sha256: "structured.yaml",
    };

    assert.deepEqual(readdirSync(releaseDir).sort(), [
      "manifest.snapshot.yaml",
      "pcr.en-US.md",
      "pcr.zh-CN.md",
      "release.yaml",
      "structured.yaml",
    ]);
    assert.equal(history.current_version, "1.0.0");
    assert.deepEqual(
      history.releases.map(({ version, predecessor_version, path: releasePath }) => ({
        version,
        predecessor_version,
        path: releasePath,
      })),
      [{ version: "1.0.0", predecessor_version: null, path: "releases/1.0.0" }],
    );
    assert.equal(history.releases[0].release_sha256, sha256(releaseText));
    assert.equal(release.pcr_id, "pcr.agriculture.crops.wheat-seed");
    assert.equal(release.version, "1.0.0");
    assert.equal(release.predecessor_version, null);

    for (const [hashField, fileName] of Object.entries(artifactFiles)) {
      const snapshotText = readFileSync(path.join(releaseDir, fileName), "utf8");
      assert.equal(release.artifacts[hashField], sha256(snapshotText));
      const currentName = fileName === "manifest.snapshot.yaml" ? "manifest.yaml" : fileName;
      assert.equal(snapshotText, readFileSync(path.join(pcrDir, currentName), "utf8"));
    }

    const currentManifest = parseYaml(readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8"));
    assert.deepEqual(currentManifest.release_artifacts, {
      pcr_en_us_sha256: release.artifacts.pcr_en_us_sha256,
      pcr_zh_cn_sha256: release.artifacts.pcr_zh_cn_sha256,
      structured_sha256: release.artifacts.structured_sha256,
    });
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("published revision preserves current bytes until atomic promotion and appends history", () => {
  const root = makeTempRoot();
  try {
    const { pcrDir, pcrOption } = createManagedPublishedPcr(root);
    const currentFileNames = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"];
    const currentBytes = Object.fromEntries(
      currentFileNames.map((fileName) => [fileName, readFileSync(path.join(pcrDir, fileName), "utf8")]),
    );
    const firstReleaseDir = path.join(pcrDir, "releases/1.0.0");
    const firstReleaseBytes = Object.fromEntries(
      readdirSync(firstReleaseDir).map((fileName) => [
        fileName,
        readFileSync(path.join(firstReleaseDir, fileName), "utf8"),
      ]),
    );

    const reviseOutput = runCli([
      "revise",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--version",
      "1.1.0",
    ]);
    assert.match(reviseOutput, /Opened PCR revision 1\.0\.0 -> 1\.1\.0/);
    for (const [fileName, text] of Object.entries(currentBytes)) {
      assert.equal(readFileSync(path.join(pcrDir, fileName), "utf8"), text);
    }

    const revisionDir = path.join(pcrDir, "revision");
    assert.deepEqual(readdirSync(revisionDir).sort(), [
      "manifest.next.yaml",
      "pcr.en-US.md",
      "pcr.zh-CN.md",
      "revision.yaml",
      "structured.yaml",
    ]);
    const revisionMetadata = parseYaml(
      readFileSync(path.join(revisionDir, "revision.yaml"), "utf8"),
    );
    assert.deepEqual(Object.keys(revisionMetadata).sort(), [
      "base_version",
      "opened_at_utc",
      "pcr_id",
      "schema_version",
      "target_version",
    ]);
    assert.equal(revisionMetadata.schema_version, 1);
    assert.equal(revisionMetadata.pcr_id, "pcr.agriculture.crops.wheat-seed");
    assert.equal(revisionMetadata.base_version, "1.0.0");
    assert.equal(revisionMetadata.target_version, "1.1.0");
    assert.match(revisionMetadata.opened_at_utc, /^\d{4}-\d{2}-\d{2}T.*Z$/u);
    const nextManifest = parseYaml(readFileSync(path.join(revisionDir, "manifest.next.yaml"), "utf8"));
    assert.equal(nextManifest.version, "1.1.0");
    assert.equal(nextManifest.status, "candidate");
    assert.equal(nextManifest.content_maturity, "authored_methodology");
    assert.equal(nextManifest.translation_status["zh-CN"], "out_of_sync");
    assert.equal(nextManifest.published_at_utc, undefined);
    assert.equal(nextManifest.release_artifacts, undefined);

    assert.throws(
      () => runCliFailure(["sync-structured", "--root", root, "--pcr", pcrOption]),
      (error) => {
        assert.match(String(error.stderr), /current published PCR content is immutable/);
        return true;
      },
    );
    assert.throws(
      () =>
        runCliFailure([
          "lifecycle",
          "--root",
          root,
          "--pcr",
          pcrOption,
          "--translation",
          "zh-CN=reviewed",
        ]),
      (error) => {
        assert.match(String(error.stderr), /Cannot change current lifecycle while a revision workspace is open/);
        return true;
      },
    );
    assert.throws(
      () =>
        runCliFailure([
          "publish",
          "--root",
          root,
          "--pcr",
          pcrOption,
          "--workspace",
          "revision",
          "--version",
          "1.2.0",
        ]),
      (error) => {
        assert.match(String(error.stderr), /target version locked in revision\.yaml; omit --version/);
        return true;
      },
    );
    assert.throws(
      () =>
        runCliFailure([
          "bump",
          "--root",
          root,
          "--pcr",
          pcrOption,
          "--workspace",
          "revision",
        ]),
      (error) => {
        assert.match(String(error.stderr), /revision target versions are locked/);
        return true;
      },
    );
    for (const [fileName, text] of Object.entries(currentBytes)) {
      assert.equal(readFileSync(path.join(pcrDir, fileName), "utf8"), text);
    }

    const revisionEnglishPath = path.join(revisionDir, "pcr.en-US.md");
    writeFileSync(
      revisionEnglishPath,
      readFileSync(revisionEnglishPath, "utf8").replace(
        "# Wheat Seed Production",
        "# Wheat Seed Production Revision 1.1",
      ),
    );
    const syncOutput = runCli([
      "sync-structured",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--workspace",
      "revision",
    ]);
    assert.match(syncOutput, /revision\/pcr\.en-US\.md/);
    runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--workspace",
      "revision",
      "--status",
      "active",
      "--content-maturity",
      "reviewed_methodology",
      "--translation",
      "zh-CN=reviewed",
    ]);
    for (const [fileName, text] of Object.entries(currentBytes)) {
      assert.equal(readFileSync(path.join(pcrDir, fileName), "utf8"), text);
    }

    const publishOutput = runCli([
      "publish",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--workspace",
      "revision",
    ]);
    assert.match(publishOutput, /Published PCR manifest .* \(version 1\.1\.0\)/);
    assert.equal(existsSync(revisionDir), false);

    const currentManifest = parseYaml(readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8"));
    assert.equal(currentManifest.version, "1.1.0");
    assert.equal(currentManifest.status, "published");
    const history = parseYaml(readFileSync(path.join(pcrDir, "release-history.yaml"), "utf8"));
    assert.equal(history.current_version, "1.1.0");
    assert.deepEqual(
      history.releases.map(({ version, predecessor_version, path: releasePath }) => ({
        version,
        predecessor_version,
        path: releasePath,
      })),
      [
        { version: "1.0.0", predecessor_version: null, path: "releases/1.0.0" },
        { version: "1.1.0", predecessor_version: "1.0.0", path: "releases/1.1.0" },
      ],
    );
    for (const [fileName, text] of Object.entries(firstReleaseBytes)) {
      assert.equal(readFileSync(path.join(firstReleaseDir, fileName), "utf8"), text);
    }
    const secondReleaseDir = path.join(pcrDir, "releases/1.1.0");
    for (const [currentName, snapshotName] of [
      ["manifest.yaml", "manifest.snapshot.yaml"],
      ["pcr.en-US.md", "pcr.en-US.md"],
      ["pcr.zh-CN.md", "pcr.zh-CN.md"],
      ["structured.yaml", "structured.yaml"],
    ]) {
      assert.equal(
        readFileSync(path.join(pcrDir, currentName), "utf8"),
        readFileSync(path.join(secondReleaseDir, snapshotName), "utf8"),
      );
    }

    const recoverOutput = runCli(["recover", "--root", root, "--pcr", pcrOption]);
    assert.match(recoverOutput, /PCR transaction recovery result: nothing_to_recover/);

    runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--status",
      "deprecated",
      "--content-maturity",
      "deprecated_methodology",
    ]);
    assert.throws(
      () =>
        runCliFailure([
          "revise",
          "--root",
          root,
          "--pcr",
          pcrOption,
          "--version",
          "1.2.0",
        ]),
      (error) => {
        assert.match(String(error.stderr), /pcr:revise requires current status published; found deprecated/);
        return true;
      },
    );
    assert.equal(existsSync(path.join(pcrDir, "revision")), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("bump rejects an invalid existing manifest version", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const invalidManifest = readFileSync(manifestPath, "utf8").replace(
      "id: pcr.agriculture.crops.wheat-seed",
      "id: pcr.agriculture.crops.wheat-seed\nversion: not-semver",
    );
    writeFileSync(manifestPath, invalidManifest);

    assert.throws(
      () =>
        runCliFailure([
          "bump",
          "--root",
          root,
          "--pcr",
          "library/pcrs/agriculture/crops/wheat-seed",
          "--level",
          "patch",
        ]),
      (error) => {
        assert.match(String(error.stderr), /Cannot bump invalid manifest version "not-semver"/);
        return true;
      },
    );
    assert.equal(readFileSync(manifestPath, "utf8"), invalidManifest);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lifecycle updates PCR manifest review and translation state", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir);

    const output = runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      "library/pcrs/agriculture/crops/wheat-seed",
      "--status",
      "active",
      "--content-maturity",
      "reviewed_methodology",
      "--translation",
      "zh-CN=reviewed",
    ]);

    assert.match(output, /Updated PCR lifecycle at library\/pcrs\/agriculture\/crops\/wheat-seed\/manifest.yaml/);
    assert.match(output, /status: active/);
    assert.match(output, /content_maturity: reviewed_methodology/);
    assert.match(output, /translation_status.zh-CN: reviewed/);
    assert.match(output, /Next:/);

    const parsedManifest = parseYaml(readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8"));
    assert.equal(parsedManifest.status, "active");
    assert.equal(parsedManifest.content_maturity, "reviewed_methodology");
    assert.equal(parsedManifest.translation_status["zh-CN"], "reviewed");
    assert.ok(parsedManifest.updated_at_utc);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lifecycle rejects invalid controlled vocabulary values", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);

    assert.throws(
      () =>
        runCliFailure([
          "lifecycle",
          "--root",
          root,
          "--pcr",
          "library/pcrs/agriculture/crops/wheat-seed",
          "--status",
          "reviewed",
        ]),
      (error) => {
        assert.notEqual(error.status, 0);
        assert.match(String(error.stderr), /--status must be one of scaffold, candidate, active, published, or deprecated/);
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint rejects invalid manifest lifecycle values", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    writeFileSync(
      manifestPath,
      readFileSync(manifestPath, "utf8").replace("status: scaffold", "status: reviewed"),
    );

    assert.throws(
      () => runCliFailure(["lint", "--root", root]),
      (error) => {
        assert.notEqual(error.status, 0);
        assert.match(String(error.stderr), /invalid manifest status "reviewed"/);
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint rejects stale structured projections for material PCRs", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir);
    const markdownPath = path.join(pcrDir, "pcr.en-US.md");
    writeFileSync(
      markdownPath,
      readFileSync(markdownPath, "utf8").replace(
        "| declared_starting_condition | accepted seed lot |",
        "| declared_starting_condition | accepted certified seed lot |",
      ),
    );

    assert.throws(
      () => runCliFailure(["lint", "--root", root]),
      (error) => {
        assert.match(String(error.stderr), /structured\.yaml: stale structured projection/);
        assert.match(String(error.stderr), /npm run pcr:sync-structured/);
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("publish rejects scaffold PCRs without modifying generated or manifest files", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const structuredPath = path.join(pcrDir, "structured.yaml");
    const manifestBefore = readFileSync(manifestPath, "utf8");
    const structuredBefore = readFileSync(structuredPath, "utf8");

    assert.throws(
      () =>
        runCliFailure([
          "publish",
          "--root",
          root,
          "--pcr",
          "library/pcrs/agriculture/crops/wheat-seed",
          "--version",
          "1.0.0",
        ]),
      (error) => {
        assert.match(String(error.stderr), /publish requires current status "active"/);
        assert.match(String(error.stderr), /current content_maturity "reviewed_methodology"/);
        return true;
      },
    );
    assert.equal(readFileSync(manifestPath, "utf8"), manifestBefore);
    assert.equal(readFileSync(structuredPath, "utf8"), structuredBefore);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("publish rejects invalid semver and unresolved review blockers", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir, { blocker: true });
    runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      "library/pcrs/agriculture/crops/wheat-seed",
      "--status",
      "active",
      "--content-maturity",
      "reviewed_methodology",
    ]);

    assert.throws(
      () =>
        runCliFailure([
          "publish",
          "--root",
          root,
          "--pcr",
          "library/pcrs/agriculture/crops/wheat-seed",
          "--version",
          "01.0",
        ]),
      (error) => {
        assert.match(String(error.stderr), /--version must be valid semver/);
        assert.match(String(error.stderr), /unresolved review blocker at review_metadata\.unresolved_identity/);
        return true;
      },
    );
    const manifest = parseYaml(readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8"));
    assert.equal(manifest.status, "active");
    assert.equal(manifest.content_maturity, "reviewed_methodology");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("publish requires reviewed Chinese translation after active alignment", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir, { translationStatus: "aligned" });
    runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      "library/pcrs/agriculture/crops/wheat-seed",
      "--status",
      "active",
      "--content-maturity",
      "reviewed_methodology",
    ]);

    assert.throws(
      () =>
        runCliFailure([
          "publish",
          "--root",
          root,
          "--pcr",
          "library/pcrs/agriculture/crops/wheat-seed",
          "--version",
          "1.0.0",
        ]),
      (error) => {
        assert.match(
          String(error.stderr),
          /status "published" requires translation_status\.zh-CN to be reviewed/,
        );
        return true;
      },
    );
    const manifest = parseYaml(readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8"));
    assert.equal(manifest.status, "active");
    assert.equal(manifest.translation_status["zh-CN"], "aligned");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lifecycle rejects illegal promotions and incompatible cross-field state", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const before = readFileSync(manifestPath, "utf8");

    assert.throws(
      () =>
        runCliFailure([
          "lifecycle",
          "--root",
          root,
          "--pcr",
          "library/pcrs/agriculture/crops/wheat-seed",
          "--status",
          "active",
          "--content-maturity",
          "reviewed_methodology",
          "--translation",
          "zh-CN=reviewed",
        ]),
      (error) => {
        assert.match(String(error.stderr), /illegal PCR status transition from "scaffold" to "active"/);
        return true;
      },
    );
    assert.equal(readFileSync(manifestPath, "utf8"), before);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("builder mutation commands reject PCR paths outside library/pcrs", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    assert.throws(
      () => runCliFailure(["sync-structured", "--root", root, "--pcr", "../outside-pcr"]),
      (error) => {
        assert.match(String(error.stderr), /PCR path must be inside library\/pcrs\//);
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("bump rejects published and deprecated PCR records without writing", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir);
    runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--status",
      "active",
      "--content-maturity",
      "reviewed_methodology",
    ]);
    runCli(["publish", "--root", root, "--pcr", pcrOption, "--version", "1.0.0"]);

    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const published = readFileSync(manifestPath, "utf8");
    assert.throws(
      () => runCliFailure(["bump", "--root", root, "--pcr", pcrOption, "--level", "patch"]),
      (error) => {
        assert.match(String(error.stderr), /Cannot bump published\/published_methodology PCR in place/);
        assert.match(String(error.stderr), /Open a published PCR revision with `npm run pcr:revise/);
        assert.match(String(error.stderr), /revision target version is fixed when the workspace opens/);
        return true;
      },
    );
    assert.equal(readFileSync(manifestPath, "utf8"), published);

    runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--status",
      "deprecated",
      "--content-maturity",
      "deprecated_methodology",
    ]);
    const deprecated = readFileSync(manifestPath, "utf8");
    assert.throws(
      () => runCliFailure(["bump", "--root", root, "--pcr", pcrOption, "--level", "minor"]),
      (error) => {
        assert.match(String(error.stderr), /Cannot bump deprecated\/deprecated_methodology PCR in place/);
        return true;
      },
    );
    assert.equal(readFileSync(manifestPath, "utf8"), deprecated);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("active preflight enforces required manifest identity without writing", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir);
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const invalidManifest = readFileSync(manifestPath, "utf8").replace(
      '  zh-CN: "小麦种子生产"\n',
      "",
    );
    writeFileSync(manifestPath, invalidManifest);

    assert.throws(
      () =>
        runCliFailure([
          "lifecycle",
          "--root",
          root,
          "--pcr",
          pcrOption,
          "--status",
          "active",
          "--content-maturity",
          "reviewed_methodology",
        ]),
      (error) => {
        assert.match(String(error.stderr), /manifest requires non-empty title\.zh-CN/);
        return true;
      },
    );
    assert.equal(readFileSync(manifestPath, "utf8"), invalidManifest);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("publish rejects canonical PCR identity mismatch without writing", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir);
    runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--status",
      "active",
      "--content-maturity",
      "reviewed_methodology",
    ]);
    const englishPath = path.join(pcrDir, "pcr.en-US.md");
    writeFileSync(
      englishPath,
      readFileSync(englishPath, "utf8").replace(
        "| canonical_pcr_id | pcr.agriculture.crops.wheat-seed |",
        "| canonical_pcr_id | pcr.wrong.identity |",
      ),
    );
    runCli(["sync-structured", "--root", root, "--pcr", pcrOption]);
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const structuredPath = path.join(pcrDir, "structured.yaml");
    const manifestBefore = readFileSync(manifestPath, "utf8");
    const structuredBefore = readFileSync(structuredPath, "utf8");

    assert.throws(
      () => runCliFailure(["publish", "--root", root, "--pcr", pcrOption, "--version", "1.0.0"]),
      (error) => {
        assert.match(
          String(error.stderr),
          /canonical_pcr_id "pcr\.wrong\.identity" does not match manifest id "pcr\.agriculture\.crops\.wheat-seed"/,
        );
        return true;
      },
    );
    assert.equal(readFileSync(manifestPath, "utf8"), manifestBefore);
    assert.equal(readFileSync(structuredPath, "utf8"), structuredBefore);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("active preflight rejects empty or invalid Chinese Markdown without writing", async (t) => {
  for (const testCase of [
    {
      name: "empty content",
      mutate: () => "",
      expected: /requires non-empty Chinese Markdown/,
    },
    {
      name: "wrong pcr id",
      mutate: (text) => text.replace(
        "pcr_id: pcr.agriculture.crops.wheat-seed",
        "pcr_id: pcr.wrong.identity",
      ),
      expected: /frontmatter pcr_id must be "pcr\.agriculture\.crops\.wheat-seed"/,
    },
    {
      name: "wrong language",
      mutate: (text) => text.replace("language: zh-CN", "language: en-US"),
      expected: /frontmatter language must be "zh-CN"/,
    },
    {
      name: "wrong sync target",
      mutate: (text) => text.replace("sync_with: pcr.en-US.md", "sync_with: other.md"),
      expected: /frontmatter sync_with must be "pcr\.en-US\.md"/,
    },
  ]) {
    await t.test(testCase.name, () => {
      const root = makeTempRoot();
      try {
        runCli(["init", "--root", root]);
        const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
        const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
        runCli([
          "init",
          "--root",
          root,
          "--sample-pcr",
          "agriculture/crops/wheat-seed",
          "--pcr-id",
          "pcr.agriculture.crops.wheat-seed",
          "--title-en",
          "Wheat seed production",
          "--title-zh-CN",
          "小麦种子生产",
        ]);
        writePublicationReadyPcr(root, pcrDir);
        const chinesePath = path.join(pcrDir, "pcr.zh-CN.md");
        writeFileSync(chinesePath, testCase.mutate(readFileSync(chinesePath, "utf8")));
        const manifestPath = path.join(pcrDir, "manifest.yaml");
        const manifestBefore = readFileSync(manifestPath, "utf8");

        assert.throws(
          () =>
            runCliFailure([
              "lifecycle",
              "--root",
              root,
              "--pcr",
              pcrOption,
              "--status",
              "active",
              "--content-maturity",
              "reviewed_methodology",
            ]),
          (error) => {
            assert.match(String(error.stderr), testCase.expected);
            return true;
          },
        );
        assert.equal(readFileSync(manifestPath, "utf8"), manifestBefore);
      } finally {
        rmSync(root, { recursive: true, force: true });
      }
    });
  }
});

test("active preflight rejects invalid canonical English frontmatter without writing", async (t) => {
  for (const testCase of [
    {
      name: "wrong pcr id",
      mutate: (text) => text.replace(
        "pcr_id: pcr.agriculture.crops.wheat-seed",
        "pcr_id: pcr.wrong.identity",
      ),
      expected: /frontmatter pcr_id must be "pcr\.agriculture\.crops\.wheat-seed"/,
    },
    {
      name: "wrong language",
      mutate: (text) => text.replace("language: en-US", "language: zh-CN"),
      expected: /frontmatter language must be "en-US"/,
    },
    {
      name: "wrong sync target",
      mutate: (text) => text.replace("sync_with: pcr.zh-CN.md", "sync_with: other.md"),
      expected: /frontmatter sync_with must be "pcr\.zh-CN\.md"/,
    },
  ]) {
    await t.test(testCase.name, () => {
      const root = makeTempRoot();
      try {
        runCli(["init", "--root", root]);
        const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
        const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
        runCli([
          "init",
          "--root",
          root,
          "--sample-pcr",
          "agriculture/crops/wheat-seed",
          "--pcr-id",
          "pcr.agriculture.crops.wheat-seed",
          "--title-en",
          "Wheat seed production",
          "--title-zh-CN",
          "小麦种子生产",
        ]);
        writePublicationReadyPcr(root, pcrDir);
        const englishPath = path.join(pcrDir, "pcr.en-US.md");
        writeFileSync(englishPath, testCase.mutate(readFileSync(englishPath, "utf8")));
        const manifestPath = path.join(pcrDir, "manifest.yaml");
        const manifestBefore = readFileSync(manifestPath, "utf8");

        assert.throws(
          () =>
            runCliFailure([
              "lifecycle",
              "--root",
              root,
              "--pcr",
              pcrOption,
              "--status",
              "active",
              "--content-maturity",
              "reviewed_methodology",
            ]),
          (error) => {
            assert.match(String(error.stderr), testCase.expected);
            return true;
          },
        );
        assert.equal(readFileSync(manifestPath, "utf8"), manifestBefore);
      } finally {
        rmSync(root, { recursive: true, force: true });
      }
    });
  }
});

test("active preflight rejects bilingual ordered rule id mismatch without writing", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir);
    const chinesePath = path.join(pcrDir, "pcr.zh-CN.md");
    writeFileSync(
      chinesePath,
      readFileSync(chinesePath, "utf8").replace(
        "本适用性记录不表示副产品。",
        "本适用性记录不表示副产品。\n\n任何新增共产品都必须单独复核分配。",
      ),
    );
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const manifestBefore = readFileSync(manifestPath, "utf8");

    assert.throws(
      () =>
        runCliFailure([
          "lifecycle",
          "--root",
          root,
          "--pcr",
          pcrOption,
          "--status",
          "active",
          "--content-maturity",
          "reviewed_methodology",
        ]),
      (error) => {
        assert.match(String(error.stderr), /allocation ordered rule ids do not match canonical English/);
        return true;
      },
    );
    assert.equal(readFileSync(manifestPath, "utf8"), manifestBefore);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("publish rejects bilingual ordered rule id mismatch without writing", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir);
    runCli([
      "lifecycle",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--status",
      "active",
      "--content-maturity",
      "reviewed_methodology",
    ]);
    const chinesePath = path.join(pcrDir, "pcr.zh-CN.md");
    writeFileSync(
      chinesePath,
      readFileSync(chinesePath, "utf8").replace(
        "本适用性记录不表示副产品。",
        "本适用性记录不表示副产品。\n\n任何新增共产品都必须单独复核分配。",
      ),
    );
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const structuredPath = path.join(pcrDir, "structured.yaml");
    const manifestBefore = readFileSync(manifestPath, "utf8");
    const structuredBefore = readFileSync(structuredPath, "utf8");

    assert.throws(
      () => runCliFailure(["publish", "--root", root, "--pcr", pcrOption, "--version", "1.0.0"]),
      (error) => {
        assert.match(String(error.stderr), /allocation ordered rule ids do not match canonical English/);
        return true;
      },
    );
    assert.equal(readFileSync(manifestPath, "utf8"), manifestBefore);
    assert.equal(readFileSync(structuredPath, "utf8"), structuredBefore);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("active preflight requires each normative rule group without writing", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const pcrDir = path.join(root, "library/pcrs/agriculture/crops/wheat-seed");
    const pcrOption = "library/pcrs/agriculture/crops/wheat-seed";
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    writePublicationReadyPcr(root, pcrDir);
    const englishPath = path.join(pcrDir, "pcr.en-US.md");
    writeFileSync(
      englishPath,
      readFileSync(englishPath, "utf8").replace(
        "No co-products are represented by this applicability record.",
        "",
      ),
    );
    runCli(["sync-structured", "--root", root, "--pcr", pcrOption]);
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const manifestBefore = readFileSync(manifestPath, "utf8");

    assert.throws(
      () =>
        runCliFailure([
          "lifecycle",
          "--root",
          root,
          "--pcr",
          pcrOption,
          "--status",
          "active",
          "--content-maturity",
          "reviewed_methodology",
        ]),
      (error) => {
        assert.match(String(error.stderr), /material PCR requires at least one Allocation rule/);
        return true;
      },
    );
    assert.equal(readFileSync(manifestPath, "utf8"), manifestBefore);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("builder rejects a library/pcrs symlink that resolves outside the real repository root", () => {
  const root = makeTempRoot();
  const outside = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const escapedPcr = path.join(outside, "escaped");
    mkdirSync(escapedPcr, { recursive: true });
    writeFileSync(path.join(escapedPcr, "pcr.en-US.md"), "# Escaped PCR\n");
    const pcrRoot = path.join(root, "library/pcrs");
    rmSync(pcrRoot, { recursive: true, force: true });
    symlinkSync(outside, pcrRoot, "dir");

    assert.throws(
      () =>
        runCliFailure([
          "sync-structured",
          "--root",
          root,
          "--pcr",
          "library/pcrs/escaped",
        ]),
      (error) => {
        assert.match(String(error.stderr), /PCR root must resolve inside repository root/);
        return true;
      },
    );
    assert.equal(existsSync(path.join(escapedPcr, "structured.yaml")), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outside, { recursive: true, force: true });
  }
});

test("lint rejects symbolic links inside the PCR directory tree", () => {
  const root = makeTempRoot();
  const outside = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    symlinkSync(outside, path.join(root, "library/pcrs/escaped"), "dir");

    assert.throws(
      () => runCliFailure(["lint", "--root", root]),
      (error) => {
        assert.match(String(error.stderr), /symbolic links are not allowed inside the PCR directory tree/);
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outside, { recursive: true, force: true });
  }
});

test("lint never reads a symlinked PCR input and its findings do not depend on outside bytes", () => {
  const root = makeTempRoot();
  const outside = makeTempRoot();
  try {
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    const englishPath = path.join(
      root,
      "library/pcrs/agriculture/crops/wheat-seed/pcr.en-US.md",
    );
    const outsidePath = path.join(outside, "outside.md");
    unlinkSync(englishPath);
    writeFileSync(outsidePath, "OUTSIDE_SECRET_ONE: [invalid\n");
    symlinkSync(outsidePath, englishPath);

    const lintError = () => {
      try {
        runCliFailure(["lint", "--root", root]);
        assert.fail("lint unexpectedly accepted a symlinked managed input");
      } catch (error) {
        return String(error.stderr);
      }
    };
    const first = lintError();
    writeFileSync(outsidePath, "OUTSIDE_SECRET_TWO: completely different bytes\n");
    const second = lintError();

    assert.equal(second, first);
    assert.match(first, /pcr\.en-US\.md: managed input must be a canonical regular file/u);
    assert.doesNotMatch(first, /OUTSIDE_SECRET/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outside, { recursive: true, force: true });
  }
});

test("lint fails closed when a PCR managed file path is not a regular file", () => {
  const root = makeTempRoot();
  try {
    runCli([
      "init",
      "--root",
      root,
      "--sample-pcr",
      "agriculture/crops/wheat-seed",
      "--pcr-id",
      "pcr.agriculture.crops.wheat-seed",
      "--title-en",
      "Wheat seed production",
      "--title-zh-CN",
      "小麦种子生产",
    ]);
    const structuredPath = path.join(
      root,
      "library/pcrs/agriculture/crops/wheat-seed/structured.yaml",
    );
    unlinkSync(structuredPath);
    mkdirSync(structuredPath);

    assert.throws(
      () => runCliFailure(["lint", "--root", root]),
      (error) => {
        assert.match(
          String(error.stderr),
          /structured\.yaml: managed input must be a canonical regular file/u,
        );
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("lint never reads a symlinked open-revision input", () => {
  const root = makeTempRoot();
  const outside = makeTempRoot();
  try {
    const { pcrDir, pcrOption } = createManagedPublishedPcr(root);
    runCli([
      "revise",
      "--root",
      root,
      "--pcr",
      pcrOption,
      "--version",
      "1.1.0",
    ]);
    const revisionEnglishPath = path.join(pcrDir, "revision/pcr.en-US.md");
    const outsidePath = path.join(outside, "revision.md");
    unlinkSync(revisionEnglishPath);
    writeFileSync(outsidePath, "REVISION_OUTSIDE_ONE: [invalid\n");
    symlinkSync(outsidePath, revisionEnglishPath);

    const lintError = () => {
      try {
        runCliFailure(["lint", "--root", root]);
        assert.fail("lint unexpectedly accepted a symlinked revision input");
      } catch (error) {
        return String(error.stderr);
      }
    };
    const first = lintError();
    writeFileSync(outsidePath, "REVISION_OUTSIDE_TWO: different bytes\n");
    const second = lintError();

    assert.equal(second, first);
    assert.match(first, /revision\/pcr\.en-US\.md/u);
    assert.match(first, /regular file/u);
    assert.doesNotMatch(first, /REVISION_OUTSIDE/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outside, { recursive: true, force: true });
  }
});

test("unknown builder command fails explicitly", () => {
  assert.throws(
    () => runCliFailure(["nope"]),
    (error) => {
      assert.notEqual(error.status, 0);
      assert.match(String(error.stderr), /Unknown command: nope/);
      return true;
    },
  );
});

test("builder argument parsing rejects ambiguous inputs before command dispatch", () => {
  const parent = makeTempRoot();
  try {
    const typoRoot = path.join(parent, "typo-root");
    assert.throws(
      () => runCliFailure(["init", "--rooot", typoRoot]),
      (error) => {
        assert.match(String(error.stderr), /Unknown option for init: --rooot/u);
        return true;
      },
    );
    assert.equal(existsSync(typoRoot), false);

    const positionalRoot = path.join(parent, "positional-root");
    assert.throws(
      () => runCliFailure(["init", "unexpected", "--root", positionalRoot]),
      (error) => {
        assert.match(String(error.stderr), /Unexpected positional argument for init: unexpected/u);
        return true;
      },
    );
    assert.equal(existsSync(positionalRoot), false);

    const duplicateRoot = path.join(parent, "duplicate-root");
    assert.throws(
      () =>
        runCliFailure([
          "init",
          "--root",
          duplicateRoot,
          `--root=${path.join(parent, "other-root")}`,
        ]),
      (error) => {
        assert.match(String(error.stderr), /Duplicate option for init: --root/u);
        return true;
      },
    );
    assert.equal(existsSync(duplicateRoot), false);

    assert.throws(
      () => runCliFailure(["init", "--root", "--help"]),
      (error) => {
        assert.match(String(error.stderr), /--root requires a value/u);
        return true;
      },
    );
    assert.throws(
      () => runCliFailure(["lint", "--pcr", "library/pcrs/example"]),
      (error) => {
        assert.match(String(error.stderr), /Unknown option for lint: --pcr/u);
        return true;
      },
    );
    assert.throws(
      () => runCliFailure(["recover", "--force-stale-lock=true"]),
      (error) => {
        assert.match(String(error.stderr), /--force-stale-lock is a boolean flag/u);
        return true;
      },
    );
  } finally {
    rmSync(parent, { recursive: true, force: true });
  }
});

test("builder argument parsing supports --key=value and command help is non-mutating", () => {
  const parent = makeTempRoot();
  try {
    const root = path.join(parent, "equals-root");
    const output = runCli(["init", `--root=${root}`]);
    assert.match(output, /Initialized PCR library scaffold/u);
    assert.equal(existsSync(path.join(root, "library/pcrs")), true);

    const helpRoot = path.join(parent, "help-root");
    const help = runCli(["init", "--help", `--root=${helpRoot}`]);
    assert.match(help, /PCR Library Builder CLI/u);
    assert.match(help, /import-cpc creates zero PCR records by default/u);
    assert.equal(existsSync(helpRoot), false);
  } finally {
    rmSync(parent, { recursive: true, force: true });
  }
});

test("builder mutation commands report actionable missing target errors", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);

    assert.throws(
      () => runCliFailure(["bump", "--root", root, "--level", "patch"]),
      (error) => {
        assert.notEqual(error.status, 0);
        assert.match(String(error.stderr), /Missing required --pcr <library\/pcrs\/\.\.\.> option/);
        return true;
      },
    );

    assert.throws(
      () => runCliFailure(["sync-structured", "--root", root, "--pcr", "library/pcrs/missing"]),
      (error) => {
        assert.notEqual(error.status, 0);
        assert.match(String(error.stderr), /PCR directory not found:/);
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("import-cpc defaults to classification-only artifacts without inventing PCR identity", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const output = runCli([
      "import-cpc",
      "--root",
      root,
      "--source",
      sampleCpcPath,
      "--classification-version",
      "3.0",
    ]);

    assert.match(output, /Imported 8 CPC rows with 8 nodes and 3 leaf classes/i);
    assert.match(output, /PCR records created: 0/i);
    assert.match(output, /npm run catalog:build/i);

    const wheatSeedDir = path.join(
      root,
      "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed",
    );
    const codedWheatSeedDir = path.join(
      root,
      "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/01111-wheat-seed",
    );
    const wheatDir = path.join(
      root,
      "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/0111-wheat",
    );

    assert.equal(existsSync(wheatSeedDir), false);
    assert.equal(existsSync(codedWheatSeedDir), false);
    assert.equal(existsSync(wheatDir), false);

    const leaves = JSON.parse(
      readFileSync(
        path.join(root, "classifications/systems/cpc/3.0/normalized/leaves.json"),
        "utf8",
      ),
    );
    assert.deepEqual(
      leaves.leaves.map((entry) => entry.code),
      ["01111", "01112", "01121"],
    );

    assert.equal(
      existsSync(
        path.join(root, "classifications/systems/cpc/3.0/normalized/leaf-slugs.json"),
      ),
      false,
    );

    const mapping = parseYaml(
      readFileSync(
        path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml"),
        "utf8",
      ),
    );
    assert.equal(mapping.schema_version, 2);
    assert.equal(mapping.status, "current");
    assert.deepEqual(mapping.mappings, []);
    assert.match(runCli(["lint", "--root", root]), /PCR library lint passed/i);
    const catalogBuild = createCatalogArtifacts(root);
    const coverage = catalogBuild.artifacts.find(
      (artifact) => artifact.path === CPC_3_COVERAGE_PATH,
    ).value;
    assert.deepEqual(catalogBuild.issues, []);
    assert.deepEqual(coverage.summary, {
      total: 3,
      mapped: 0,
      unmapped: 3,
      candidate_suggestion: 0,
      manual_review: 0,
      unknown: 0,
    });
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("scaffold-cpc creates legacy leaf PCRs only with an explicit compatibility flag", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    installLegacyEmptyCpcMapping(root);
    const output = runCli([
      "scaffold-cpc",
      "--legacy-scaffolds",
      "--root",
      root,
      "--source",
      sampleCpcPath,
      "--classification-version",
      "3.0",
    ]);

    assert.match(output, /Legacy mappings appended: 3; PCR records created: 3/i);
    const wheatSeedDir = path.join(
      root,
      "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed",
    );
    assert.equal(existsSync(path.join(wheatSeedDir, "manifest.yaml")), true);
    assert.equal(existsSync(path.join(wheatSeedDir, "pcr.en-US.md")), true);
    assert.equal(existsSync(path.join(wheatSeedDir, "pcr.zh-CN.md")), true);
    assert.equal(existsSync(path.join(wheatSeedDir, "structured.yaml")), true);
    assert.deepEqual(
      parseYaml(readFileSync(path.join(wheatSeedDir, "structured.yaml"), "utf8"))
        .system_boundary,
      { rules: [] },
    );

    const slugs = JSON.parse(
      readFileSync(
        path.join(root, "classifications/systems/cpc/3.0/normalized/leaf-slugs.json"),
        "utf8",
      ),
    );
    const wheatSeedSlug = slugs.leaves.find((entry) => entry.code === "01111");
    assert.equal(
      wheatSeedSlug.pcr_dir,
      "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed",
    );
    assert.doesNotMatch(wheatSeedSlug.pcr_dir, /\/01111-/);

    const mapping = readFileSync(
      path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml"),
      "utf8",
    );
    assert.match(mapping, /code: "01111"/);
    assert.match(mapping, /pcr_id: "pcr\.agriculture-forestry-and-fishery-products\.products-of-agriculture-horticulture-and-market-gardening\.wheat-seed"/);
    assert.doesNotMatch(mapping, /pcr_id: ".*\.01111-wheat-seed"/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("import-cpc preserves existing mappings and legacy identity artifacts byte-for-byte", () => {
  const root = makeTempRoot();
  try {
    runCli(["init", "--root", root]);
    const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
    const leafSlugsPath = path.join(
      root,
      "classifications/systems/cpc/3.0/normalized/leaf-slugs.json",
    );
    const pcrManifestPath = path.join(
      root,
      "library/pcrs/existing/domain/pcr/manifest.yaml",
    );
    mkdirSync(path.dirname(mappingPath), { recursive: true });
    mkdirSync(path.dirname(leafSlugsPath), { recursive: true });
    mkdirSync(path.dirname(pcrManifestPath), { recursive: true });
    const mappingSource = `schema_version: 2
classification_system: CPC
classification_version: "3.0"
status: current
mappings:
  - code: "01111"
    label: "Wheat, seed"
    pcr_id: "pcr.existing.domain.pcr"
    mapping_type: exact
    confidence: reviewed
    acceptance:
      status: accepted
      decided_by: "PCR review board"
      decided_at_utc: "2026-07-14T12:34:56Z"
      decision_ref: "docs/adr/fixture-mapping-decision.md"
`;
    writeFileSync(mappingPath, mappingSource);
    writeFileSync(leafSlugsPath, "legacy identity sentinel\n");
    writeFileSync(pcrManifestPath, "existing PCR sentinel\n");

    const output = runCli([
      "import-cpc",
      "--root",
      root,
      "--source",
      sampleCpcPath,
      "--classification-version",
      "3.0",
    ]);

    assert.match(output, /Mapping action: preserved_exact_bytes/i);
    assert.equal(readFileSync(mappingPath, "utf8"), mappingSource);
    assert.equal(readFileSync(leafSlugsPath, "utf8"), "legacy identity sentinel\n");
    assert.equal(readFileSync(pcrManifestPath, "utf8"), "existing PCR sentinel\n");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("import-cpc help explains the classification-only default and legacy boundary", () => {
  const output = runCli(["import-cpc", "--help"]);

  assert.match(output, /Creates no PCR records/i);
  assert.match(output, /--legacy-scaffolds/);
  assert.match(output, /Existing mappings are validated and preserved byte-for-byte/i);
});

test("scaffold-cpc fails fast without the explicit legacy compatibility flag", () => {
  assert.throws(
    () => runCliFailure(["scaffold-cpc", "--source", sampleCpcPath]),
    (error) => {
      assert.match(String(error.stderr), /requires --legacy-scaffolds/);
      assert.match(String(error.stderr), /use import-cpc/);
      return true;
    },
  );
});

test("legacy CPC compatibility refuses a missing or v2 current mapping before mutation", async (t) => {
  await t.test("missing mapping", () => {
    const root = makeTempRoot();
    try {
      assert.throws(
        () => runCliFailure([
          "scaffold-cpc",
          "--legacy-scaffolds",
          "--root",
          root,
          "--source",
          sampleCpcPath,
        ]),
        (error) => {
          assert.match(String(error.stderr), /schema_version 2 status current mappings are accepted-only/u);
          return true;
        },
      );
      assert.deepEqual(readdirSync(root), []);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("v2 current mapping", () => {
    const root = makeTempRoot();
    try {
      const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
      const mappingSource = `schema_version: 2
classification_system: CPC
classification_version: "3.0"
status: current
mappings: []
`;
      mkdirSync(path.dirname(mappingPath), { recursive: true });
      writeFileSync(mappingPath, mappingSource);
      const before = directoryByteSnapshot(root);

      assert.throws(
        () => runCliFailure([
          "import-cpc",
          "--legacy-scaffolds",
          "--root",
          root,
          "--source",
          sampleCpcPath,
        ]),
        (error) => {
          assert.match(String(error.stderr), /schema_version 2 status current mappings are accepted-only/u);
          return true;
        },
      );
      assert.deepEqual(directoryByteSnapshot(root), before);
      assert.equal(readFileSync(mappingPath, "utf8"), mappingSource);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

test("import-cpc is byte-idempotent for an unchanged source and preserved mapping", () => {
  const root = makeTempRoot();
  try {
    const args = [
      "import-cpc",
      "--root",
      root,
      "--source",
      sampleCpcPath,
      "--classification-version",
      "3.0",
      "--source-url",
      "https://example.test/cpc.csv",
    ];
    runCli(args);
    const first = directoryByteSnapshot(root);
    const output = runCli(args);
    const second = directoryByteSnapshot(root);

    assert.match(output, /Mapping action: preserved_exact_bytes/i);
    assert.deepEqual(second, first);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("legacy CPC compatibility merges only unmapped leaves and is idempotent", () => {
  const root = makeTempRoot();
  try {
    const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
    mkdirSync(path.dirname(mappingPath), { recursive: true });
    writeFileSync(
      mappingPath,
      `schema_version: 1
classification_system: CPC
classification_version: "3.0"
status: scaffold
mappings:
  - code: "01111"
    label: "Wheat, seed"
    pcr_id: "pcr.material.wheat-seed"
    mapping_type: exact
    confidence: reviewed
`,
    );
    const args = [
      "import-cpc",
      "--legacy-scaffolds",
      "--root",
      root,
      "--source",
      sampleCpcPath,
      "--classification-version",
      "3.0",
    ];
    const firstOutput = runCli(args);
    const wheatSeedDir = path.join(
      root,
      "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed",
    );
    const wheatOtherManifest = path.join(
      root,
      "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-other/manifest.yaml",
    );

    assert.match(firstOutput, /Legacy mappings appended: 2; PCR records created: 2/);
    assert.equal(existsSync(wheatSeedDir), false);
    assert.equal(existsSync(wheatOtherManifest), true);
    const mergedMapping = parseYaml(readFileSync(mappingPath, "utf8"));
    assert.equal(mergedMapping.mappings.length, 3);
    assert.equal(mergedMapping.mappings[0].pcr_id, "pcr.material.wheat-seed");
    const leafInventoryPath = path.join(
      root,
      "classifications/systems/cpc/3.0/normalized/leaf-slugs.json",
    );
    const inventory = JSON.parse(readFileSync(leafInventoryPath, "utf8"));
    assert.deepEqual(inventory.leaves.map((entry) => entry.code), ["01112", "01121"]);

    writeFileSync(wheatOtherManifest, "preserved legacy PCR sentinel\n");
    const mappingBytes = readFileSync(mappingPath);
    const inventoryBytes = readFileSync(leafInventoryPath);
    const secondOutput = runCli(args);
    assert.match(secondOutput, /Legacy mappings appended: 0; PCR records created: 0/);
    assert.match(secondOutput, /already-mapped leaves skipped: 3/);
    assert.equal(readFileSync(wheatOtherManifest, "utf8"), "preserved legacy PCR sentinel\n");
    assert.deepEqual(readFileSync(mappingPath), mappingBytes);
    assert.deepEqual(readFileSync(leafInventoryPath), inventoryBytes);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("import-cpc rejects unsafe or inconsistent inputs before initializing the repository", async (t) => {
  await t.test("classification version traversal", () => {
    const root = makeTempRoot();
    try {
      assert.throws(
        () => runCliFailure([
          "import-cpc",
          "--root",
          root,
          "--source",
          sampleCpcPath,
          "--classification-version",
          "../outside",
        ]),
        (error) => {
          assert.match(String(error.stderr), /Invalid CPC classification version/);
          return true;
        },
      );
      assert.equal(existsSync(path.join(root, "library/catalog.yaml")), false);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("duplicate CPC code", () => {
    const root = makeTempRoot();
    try {
      const sourcePath = path.join(root, "duplicate.csv");
      writeFileSync(
        sourcePath,
        "Code,Title\n0,Root\n01,Leaf one\n01,Leaf duplicate\n",
      );
      assert.throws(
        () => runCliFailure(["import-cpc", "--root", root, "--source", sourcePath]),
        (error) => {
          assert.match(String(error.stderr), /Duplicate CPC code/);
          return true;
        },
      );
      assert.equal(existsSync(path.join(root, "library/catalog.yaml")), false);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("unterminated CSV quote", () => {
    const root = makeTempRoot();
    try {
      const sourcePath = path.join(root, "unterminated.csv");
      writeFileSync(sourcePath, "Code,Title\n0,\"unterminated\n");
      assert.throws(
        () => runCliFailure(["import-cpc", "--root", root, "--source", sourcePath]),
        (error) => {
          assert.match(String(error.stderr), /unterminated quoted field/);
          return true;
        },
      );
      assert.equal(existsSync(path.join(root, "library/catalog.yaml")), false);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("invalid existing mapping", () => {
    const root = makeTempRoot();
    try {
      const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
      mkdirSync(path.dirname(mappingPath), { recursive: true });
      writeFileSync(mappingPath, "invalid mapping\n");
      assert.throws(
        () => runCliFailure([
          "import-cpc",
          "--root",
          root,
          "--source",
          sampleCpcPath,
        ]),
        (error) => {
          assert.match(String(error.stderr), /schema validation failed/);
          return true;
        },
      );
      assert.equal(
        existsSync(path.join(root, "classifications/systems/cpc/3.0/normalized/leaves.json")),
        false,
      );
      assert.equal(existsSync(path.join(root, "library/catalog.yaml")), false);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("mapping code removed from source", () => {
    const root = makeTempRoot();
    try {
      const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
      mkdirSync(path.dirname(mappingPath), { recursive: true });
      writeFileSync(
        mappingPath,
        `schema_version: 1
classification_system: CPC
classification_version: "3.0"
status: scaffold
mappings:
  - code: "99999"
    label: "Removed"
    pcr_id: "pcr.removed"
    mapping_type: exact
    confidence: reviewed
`,
      );
      assert.throws(
        () => runCliFailure([
          "import-cpc",
          "--root",
          root,
          "--source",
          sampleCpcPath,
        ]),
        (error) => {
          assert.match(String(error.stderr), /mapping code 99999 is absent/);
          return true;
        },
      );
      assert.equal(
        existsSync(path.join(root, "classifications/systems/cpc/3.0/normalized/leaves.json")),
        false,
      );
      assert.equal(existsSync(path.join(root, "library/catalog.yaml")), false);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("managed classification path symlink", () => {
    const root = makeTempRoot();
    const outside = makeTempRoot();
    try {
      symlinkSync(outside, path.join(root, "classifications"));
      assert.throws(
        () => runCliFailure([
          "import-cpc",
          "--root",
          root,
          "--source",
          sampleCpcPath,
        ]),
        (error) => {
          assert.match(String(error.stderr), /managed path contains a symbolic link/);
          return true;
        },
      );
      assert.deepEqual(readdirSync(outside), []);
      assert.equal(existsSync(path.join(root, "library/catalog.yaml")), false);
    } finally {
      rmSync(root, { recursive: true, force: true });
      rmSync(outside, { recursive: true, force: true });
    }
  });
});

test("legacy CPC scaffolding keeps generated PCR directory segments short for long titles", () => {
  const root = makeTempRoot();
  try {
    const csvPath = path.join(root, "long-cpc.csv");
    writeFileSync(
      csvPath,
      `CPC Ver. 3.0  Code,CPC Ver. 3.0 Title
2,"Food products, beverages and tobacco; textiles, apparel and leather products"
26,"Yarn and thread; woven and tufted textile fabrics"
267,"Woven fabrics of man-made filament yarn"
2671,"Woven fabrics of man-made filament yarn"
26710,"Woven fabrics of man-made filament yarn obtained from high tenacity yarn of nylon or other polyamides, of polyesters or of viscose rayon; woven fabrics of synthetic filament yarn obtained from strip or the like; woven fabrics of synthetic filament yarn consisting of layers of parallel yarns superimposed on each other at angles, the layers being bonded at the intersections of the yarns, including mesh scrims"
`,
    );
    runCli(["init", "--root", root]);
    installLegacyEmptyCpcMapping(root);
    runCli([
      "scaffold-cpc",
      "--legacy-scaffolds",
      "--root",
      root,
      "--source",
      csvPath,
      "--classification-version",
      "3.0",
    ]);

    const slugs = JSON.parse(
      readFileSync(
        path.join(root, "classifications/systems/cpc/3.0/normalized/leaf-slugs.json"),
        "utf8",
      ),
    );
    const pcrDir = slugs.leaves[0].pcr_dir;
    const maxSegmentLength = Math.max(...pcrDir.split("/").map((segment) => segment.length));

    assert.equal(slugs.leaves.length, 1);
    assert.equal(maxSegmentLength <= 120, true);
    assert.doesNotMatch(pcrDir, /\/26710-/);
    assert.match(pcrDir, /woven-fabrics-of-man-made-filament-yarn-obtained-from-high-tenacity-yarn/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
