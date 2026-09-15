import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";

import {
  parsePcrMarkdownToStructured,
  structuredProjectionYaml,
} from "./markdown-projection.mjs";

const repoRoot = path.resolve(fileURLToPath(new URL("../..", import.meta.url)));

function manifestFiles(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...manifestFiles(entryPath));
    } else if (entry.name === "manifest.yaml") {
      files.push(entryPath);
    }
  }
  return files;
}

test("parsePcrMarkdownToStructured reads localized Chinese flow cards", () => {
  const projection = parsePcrMarkdownToStructured(`
## 6. 过程清单结构

### 过程：清洗（\`cleaning\`）

#### 输入

##### 产品流

###### 清洗水（\`washing_water\`）

清洗水作为输入产品流记录。

- 选定流：Process water \`ec205030-248c-496f-9cf2-06d9d26dc6ff\`
- 流属性/单位：Mass / kg
- 数量规则：计量用水量
- 数值来源模式：前景记录（\`foreground_record\`）
- 适用范围：场址特定（\`site_specific\`）
- 归一化基准：每 1,000 kg 清洁产品输出
- 基准类型：过程输出（\`process_output\`）
- 证据类型：采集记录（\`collected_record\`）
- 采集协议：\`cp_washing_water_records\`
- 来源：\`source-id\`
`);

  const row = projection.processInventory[0].inputs.product[0];

  assert.equal(row.row_id, "washing_water");
  assert.equal(row.role, "清洗水");
  assert.equal(row.uuid, "ec205030-248c-496f-9cf2-06d9d26dc6ff");
  assert.equal(row.amount.value_mode, "foreground_record");
  assert.equal(row.amount.specificity, "site_specific");
  assert.equal(row.amount.basis.kind, "process_output");
  assert.equal(row.amount.evidence.kind, "collected_record");
  assert.equal(row.amount.evidence.collection_protocol_id, "cp_washing_water_records");
  assert.deepEqual(row.amount.evidence.source_ids, ["source-id"]);
});

test("flow binding supports fixed and parameterized selection", () => {
  const projection = parsePcrMarkdownToStructured(`
## 6. Process Inventory Structure
### Process: Energy (\`energy\`)
#### Inputs
##### Product flows
###### Generic energy (\`generic_energy\`)
- Selected flow: electricity supply
- Flow property / unit: Energy / kWh
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.1.0
- Flow Set group: electricity-supply
###### Specific electricity (\`specific_electricity\`)
- Selected flow: Electricity, medium voltage \`11111111-1111-4111-8111-111111111111\`
- Flow property / unit: Energy / kWh
- Binding: fixed
`);

  const generic = projection.processInventory[0].inputs.product[0];
  assert.equal(generic.binding, "parameterized");
  assert.deepEqual(generic.flow_set_ref, {
    id: "flow-set.energy-supply",
    version: "0.1.0",
    group: "electricity-supply",
  });
  const specific = projection.processInventory[0].inputs.product[1];
  assert.equal(specific.binding, "fixed");
  const rendered = structuredProjectionYaml(projection, {
    sourceMarkdown: "flow-binding-fixture",
    moduleReferences: { selection_mode: "automatic", selected: [], unresolved: [] },
  });
  assert.match(rendered, /id: "flow-set\.energy-supply"/);
  assert.match(rendered, /group: "electricity-supply"/);
  assert.match(rendered, /binding: "fixed"/);
});

test("Flow Set binding takes priority over a fixed UUID", () => {
  const projection = parsePcrMarkdownToStructured(`
## 6. Process Inventory Structure
### Process: Energy (\`energy\`)
#### Inputs
##### Product flows
###### Covered electricity (\`covered_electricity\`)
- Selected flow: Electricity, medium voltage \`11111111-1111-4111-8111-111111111111\`
- Flow property / unit: Energy / kWh
- Binding: fixed
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.1.0
- Flow Set group: electricity-supply
`);

  const row = projection.processInventory[0].inputs.product[0];
  assert.equal(row.binding, "parameterized");
  assert.equal(row.uuid, "");
  assert.deepEqual(row.flow_set_ref, {
    id: "flow-set.energy-supply",
    version: "0.1.0",
    group: "electricity-supply",
  });

  const rendered = structuredProjectionYaml(projection, {
    sourceMarkdown: "flow-set-priority-fixture",
    moduleReferences: { selection_mode: "automatic", selected: [], unresolved: [] },
  });
  assert.doesNotMatch(rendered, /11111111-1111-4111-8111-111111111111/);
  assert.match(rendered, /binding: "parameterized"/);
  assert.match(rendered, /id: "flow-set\.energy-supply"/);
});

test("fixed and unmapped flows do not render Flow Set information", () => {
  const projection = parsePcrMarkdownToStructured(`
## 6. Process Inventory Structure
### Process: Energy (\`energy\`)
#### Inputs
##### Product flows
###### Fixed electricity (\`fixed_electricity\`)
- Selected flow: Electricity, medium voltage \`11111111-1111-4111-8111-111111111111\`
- Flow property / unit: Energy / kWh
- Binding: fixed
###### Unmapped heat (\`unmapped_heat\`)
- Selected flow: heat supply
- Flow property / unit: Energy / kWh
`);

  const rows = projection.processInventory[0].inputs.product;
  assert.equal(rows[0].binding, "fixed");
  assert.equal(rows[1].binding, undefined);
  assert.equal(rows[0].flow_set_ref, undefined);
  assert.equal(rows[1].flow_set_ref, undefined);
  rows[0].flow_set_ref = { id: "flow-set.energy-supply", version: "0.1.0" };
  rows[1].flow_set_ref = { id: "flow-set.energy-supply", version: "0.1.0" };

  const rendered = structuredProjectionYaml(projection, {
    sourceMarkdown: "flow-set-display-fixture",
    moduleReferences: { selection_mode: "automatic", selected: [], unresolved: [] },
  });
  assert.doesNotMatch(rendered, /flow_set_ref|flow-set\./);
});

test("parsePcrMarkdownToStructured reads nested localized range fields", () => {
  const projection = parsePcrMarkdownToStructured(`
## 6. 过程清单结构

### 过程：接收（\`receipt\`）

#### 输出

##### 废物流

###### 接收拒收物（\`receipt_rejects\`）

接收阶段移除的不合格材料。

- 选定流：选择路线特定废物流
- 流属性/单位：Mass / kg
- 数量规则：接收后移除的拒收质量。
- 数值来源模式：前景记录（\`foreground_record\`）
- 适用范围：场址特定（\`site_specific\`）
- 归一化基准：相对于进厂来源材料的拒收质量。
- 基准类型：过程输出（\`process_output\`）
- 证据类型：采集记录（\`collected_record\`）
- 采集协议：\`cp_reject_records\`
- 数量范围：质量守恒 QA 校验范围
  - 范围角色：QA 校验（\`qa_guardrail\`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 接收来源材料
  - 基准：接收来源材料的质量分数
  - 基准类型：过程输出（\`process_output\`）
  - 证据类型：方法公式（\`method_formula\`）
  - 来源：\`mass-balance-identity\`
`);

  const row = projection.processInventory[0].outputs.waste[0];

  assert.deepEqual(row.amount.ranges, [
    {
      role: "qa_guardrail",
      lower: "0",
      upper: "1",
      unit: "kg/kg 接收来源材料",
      basis: "接收来源材料的质量分数",
      basis_kind: "process_output",
      evidence_kind: "method_formula",
      source_ids: ["mass-balance-identity"],
    },
  ]);
});

test("parsePcrMarkdownToStructured projects English boundary, allocation, and validation rules", () => {
  const projection = parsePcrMarkdownToStructured(`
## 5. System Boundary

The foreground boundary includes:

1. Include directly controlled collection and preparation.
2. Link purchased material to an upstream dataset.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | source_material_received |

## 6A. Same-Category Input and Cut-Off Rules

Same-category inputs remain visible product inputs.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| \`avoid_allocation\` | separable batches | Subdivide the process before allocating shared burdens. | \`allocation-source\` |

## 9. Validation Rules

A foreground data package conforms only when:

- the reference product is normalized to the declared mass;
- the allocation method is declared and justified.
`);

  assert.deepEqual(projection.systemBoundary, {
    rules: [
      {
        rule_id: "system_boundary_rule_1",
        applies_to: "foreground_system_boundary",
        rule: "Include directly controlled collection and preparation.",
        source_ids: [],
      },
      {
        rule_id: "system_boundary_rule_2",
        applies_to: "foreground_system_boundary",
        rule: "Link purchased material to an upstream dataset.",
        source_ids: [],
      },
      {
        rule_id: "system_boundary_rule_3",
        applies_to: "foreground_system_boundary",
        rule: "Same-category inputs remain visible product inputs.",
        source_ids: [],
      },
    ],
  });
  assert.deepEqual(projection.allocationRules, [
    {
      rule_id: "avoid_allocation",
      applies_to: "separable batches",
      rule: "Subdivide the process before allocating shared burdens.",
      source_ids: ["allocation-source"],
    },
  ]);
  assert.deepEqual(projection.validationRules, [
    {
      rule_id: "validation_rule_1",
      applies_to: "foreground_dataset_conformance",
      rule: "the reference product is normalized to the declared mass;",
      source_ids: [],
    },
    {
      rule_id: "validation_rule_2",
      applies_to: "foreground_dataset_conformance",
      rule: "the allocation method is declared and justified.",
      source_ids: [],
    },
  ]);
  assert.deepEqual(projection.boundaryAbstraction, {
    declared_starting_condition: "source_material_received",
  });
});

test("parsePcrMarkdownToStructured supports Chinese rule headings and deterministic fallback ids", () => {
  const projection = parsePcrMarkdownToStructured(`
## 5. 系统边界

默认边界包括：

1. 纳入前景直接控制的清洗活动。

## 7. 分配与共产品处理

按以下顺序决策：

1. 优先通过过程细分避免分配。
2. 无法细分时披露所选分配基准。

## 9. 校验规则

发布前检查：

- 参考产品按声明质量归一化。
- 所有废物流均有明确去向。
`);

  assert.equal(projection.systemBoundary.rules[0].rule_id, "system_boundary_rule_1");
  assert.equal(projection.systemBoundary.rules[0].rule, "纳入前景直接控制的清洗活动。");
  assert.deepEqual(
    projection.allocationRules.map(({ rule_id, rule }) => ({ rule_id, rule })),
    [
      { rule_id: "allocation_rule_1", rule: "优先通过过程细分避免分配。" },
      { rule_id: "allocation_rule_2", rule: "无法细分时披露所选分配基准。" },
    ],
  );
  assert.deepEqual(
    projection.validationRules.map(({ rule_id, rule }) => ({ rule_id, rule })),
    [
      { rule_id: "validation_rule_1", rule: "参考产品按声明质量归一化。" },
      { rule_id: "validation_rule_2", rule: "所有废物流均有明确去向。" },
    ],
  );
});

test("parsePcrMarkdownToStructured folds list continuations and nested items into the parent rule", () => {
  const projection = parsePcrMarkdownToStructured(`
## 7. Allocation and Co-product Handling

Apply allocation in this order:

1. Prefer subdivision when records allow
and preserve the directly measured relationship.

   This indented continuation remains part of the first rule.
   - Nested condition A.
     Nested detail stays with the parent.
   - Nested condition B.
2. Use mass allocation only as a fallback.
   Its sensitivity must be disclosed.

A separate paragraph remains its own rule.
`);

  assert.deepEqual(
    projection.allocationRules.map(({ rule_id, rule }) => ({ rule_id, rule })),
    [
      {
        rule_id: "allocation_rule_1",
        rule:
          "Prefer subdivision when records allow and preserve the directly measured relationship. This indented continuation remains part of the first rule. Nested condition A. Nested detail stays with the parent. Nested condition B.",
      },
      {
        rule_id: "allocation_rule_2",
        rule: "Use mass allocation only as a fallback. Its sensitivity must be disclosed.",
      },
      {
        rule_id: "allocation_rule_3",
        rule: "A separate paragraph remains its own rule.",
      },
    ],
  );
});

test("structuredProjectionYaml renders normative rule contracts", () => {
  const markdown = `
## 5. System Boundary

The system boundary includes direct preparation.

## 7. Allocation Rules

Avoid allocation by subdivision.

## 9. Validation Rules

The reference mass shall reconcile.
`;
  const projection = parsePcrMarkdownToStructured(markdown);
  const yaml = structuredProjectionYaml(projection, { sourceMarkdown: markdown });

  assert.match(yaml, /system_boundary:\n  rules:\n    - rule_id: system_boundary_rule_1/u);
  assert.match(yaml, /allocation_rules:\n  - rule_id: allocation_rule_1/u);
  assert.match(yaml, /validation_rules:\n  - rule_id: validation_rule_1/u);
  assert.match(yaml, /source_ids: \[\]/u);
});

test("material PCR translations preserve machine-addressable normative rule ids", () => {
  const materialManifests = manifestFiles(path.join(repoRoot, "library/pcrs"))
    .map((manifestPath) => ({
      manifestPath,
      manifest: parseYaml(readFileSync(manifestPath, "utf8")),
    }))
    .filter(({ manifest }) =>
      ["authored_methodology", "reviewed_methodology", "published_methodology"].includes(
        manifest.content_maturity,
      ),
    );

  assert.ok(materialManifests.length > 0);
  for (const { manifestPath, manifest } of materialManifests) {
    const pcrDir = path.dirname(manifestPath);
    const english = parsePcrMarkdownToStructured(
      readFileSync(path.join(pcrDir, "pcr.en-US.md"), "utf8"),
    );
    const chinese = parsePcrMarkdownToStructured(
      readFileSync(path.join(pcrDir, "pcr.zh-CN.md"), "utf8"),
    );
    for (const [label, englishRules, chineseRules] of [
      ["system boundary", english.systemBoundary.rules, chinese.systemBoundary.rules],
      ["allocation", english.allocationRules, chinese.allocationRules],
      ["validation", english.validationRules, chinese.validationRules],
    ]) {
      assert.deepEqual(
        chineseRules.map((rule) => rule.rule_id),
        englishRules.map((rule) => rule.rule_id),
        `${manifest.id} has misaligned ${label} rule ids`,
      );
    }
  }
});
