import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { auditPcrFlowSetBindings } from "./flow-set-binding-audit.mjs";

function fixture(rows) {
  const root = mkdtempSync(path.join(os.tmpdir(), "flow-set-binding-"));
  mkdirSync(path.join(root, "library/flow-sets"), { recursive: true });
  mkdirSync(path.join(root, "library/pcrs/example"), { recursive: true });
  writeFileSync(path.join(root, "library/flow-sets/taxonomy-v2.yaml"), `
binding_policy:
  group_required: true
sets:
  - id: agricultural-nutrient-supply
    coordinate: product-input
    binding_level: set
    allowed_binding_levels: [set]
    group_required: false
    groups:
      - id: nitrogen-supply
  - id: energy-supply
    coordinate: product-input
    binding_level: set
    allowed_binding_levels: [set, group]
    groups:
      - id: electricity-supply
      - id: mobile-machinery-fuel
  - id: water-use
    coordinate: product-input
    binding_level: group
    allowed_binding_levels: [group]
    groups:
      - id: process-water
`);
  writeFileSync(path.join(root, "library/flow-sets/binding-rules.yaml"), `
groups:
  nitrogen-supply:
    required_any: [nitrogen]
  electricity-supply:
    required_any: [electricity]
  mobile-machinery-fuel:
    required_any: [machinery fuel]
  process-water:
    required_any: [process water]
`);
  writeFileSync(path.join(root, "library/pcrs/example/structured.yaml"), `
process_inventory:
  - id: field
    inputs:
      product:
${rows}
`);
  const registries = [
    {
      id: "agricultural-nutrient-supply",
      version: "0.3.0",
      bindingLevel: "set",
      levels: "[set]",
      groupRequired: false,
      cardinality: "one_per_process",
      groups: ["nitrogen-supply"],
    },
    {
      id: "energy-supply",
      version: "0.2.0",
      bindingLevel: "set",
      levels: "[set, group]",
      groupRequired: false,
      cardinality: "multiple_per_process",
      groups: ["electricity-supply", "mobile-machinery-fuel"],
    },
    {
      id: "water-use",
      version: "0.2.0",
      bindingLevel: "group",
      levels: "[group]",
      groupRequired: true,
      cardinality: "multiple_per_process",
      groups: ["process-water"],
    },
  ];
  for (const registry of registries) {
    const directory = path.join(root, "library/flow-sets", registry.id);
    mkdirSync(directory, { recursive: true });
    writeFileSync(path.join(directory, "flow-set.yaml"), `
identity:
  id: flow-set.${registry.id}
  version: ${registry.version}
scope:
  coordinate: product-input
selection_policy:
  binding_level: ${registry.bindingLevel}
  allowed_binding_levels: ${registry.levels}
  group_required: ${registry.groupRequired}
  pcr_cardinality: ${registry.cardinality}
groups:
${registry.groups.map((group) => `  - id: ${group}`).join("\n")}
`);
  }
  return root;
}

test("set-level agricultural nutrient binding accepts a bare set reference", () => {
  const root = fixture(`        - row_id: nutrients
          role: agricultural nutrient supply
          binding: parameterized
          flow_set_ref:
            id: flow-set.agricultural-nutrient-supply
            version: 0.3.0`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, true);
  assert.equal(result.findings.length, 0);
});

test("set-level agricultural nutrient binding rejects PCR group selection", () => {
  const root = fixture(`        - row_id: nitrogen
          role: nitrogen fertilizer
          binding: parameterized
          flow_set_ref:
            id: flow-set.agricultural-nutrient-supply
            version: 0.3.0
            group: nitrogen-supply`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, false);
  assert.equal(result.findings[0].code, "FLOW_SET_GROUP_NOT_ALLOWED");
});

test("energy set-level binding accepts a bare set reference", () => {
  const root = fixture(`        - row_id: process_energy
          role: process energy supply
          binding: parameterized
          flow_set_ref:
            id: flow-set.energy-supply
            version: 0.2.0`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, true);
  assert.equal(result.findings.length, 0);
});

test("energy also permits an exact group-level binding", () => {
  const root = fixture(`        - row_id: electricity
          role: electricity supply
          binding: parameterized
          flow_set_ref:
            id: flow-set.energy-supply
            version: 0.2.0
            group: electricity-supply`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, true);
  assert.equal(result.findings.length, 0);
});

test("energy does not treat multiple group ids as an exact group binding", () => {
  const root = fixture(`        - row_id: process_energy
          role: electricity or machinery fuel
          binding: parameterized
          flow_set_ref:
            id: flow-set.energy-supply
            version: 0.2.0
            group: electricity-supply or mobile-machinery-fuel`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, false);
  assert.equal(result.findings[0].code, "FLOW_SET_MULTIPLE_GROUPS");
});

test("group binding must be one exact registry member", () => {
  const root = fixture(`        - row_id: electricity
          role: electricity supply
          binding: parameterized
          flow_set_ref:
            id: flow-set.energy-supply
            version: 0.2.0
            group: electricity`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, false);
  assert.equal(result.findings[0].code, "FLOW_SET_GROUP_NOT_FOUND");
});

test("group-only sets still defer a missing group", () => {
  const root = fixture(`        - row_id: process_water
          role: process water
          binding: parameterized
          flow_set_ref:
            id: flow-set.water-use
            version: 0.2.0`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, true);
  assert.equal(result.findings[0].code, "FLOW_SET_GROUP_DEFERRED");
});

test("binding version must match the versioned registry", () => {
  const root = fixture(`        - row_id: process_energy
          role: process energy supply
          binding: parameterized
          flow_set_ref:
            id: flow-set.energy-supply
            version: 0.1.0`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, false);
  assert.equal(result.findings[0].code, "FLOW_SET_VERSION_MISMATCH");
});

test("Flow Set references require parameterized binding", () => {
  const root = fixture(`        - row_id: process_energy
          role: process energy supply
          binding: fixed
          flow_set_ref:
            id: flow-set.energy-supply
            version: 0.2.0`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, false);
  assert.equal(result.findings[0].code, "FLOW_SET_BINDING_NOT_PARAMETERIZED");
});

test("Flow Set coordinate must match flow type and direction", () => {
  const root = fixture(`        - row_id: process_energy
          role: process energy supply
          binding: parameterized
          flow_set_ref:
            id: flow-set.energy-supply
            version: 0.2.0`);
  const projectionPath = path.join(root, "library/pcrs/example/structured.yaml");
  const projection = readFileSync(projectionPath, "utf8")
    .replace("inputs:\n      product:", "outputs:\n      elementary:");
  writeFileSync(projectionPath, projection);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, false);
  assert.equal(result.findings[0].code, "FLOW_SET_COORDINATE_MISMATCH");
});

test("one-per-process Flow Sets reject duplicate cards", () => {
  const root = fixture(`        - row_id: nutrients_a
          role: agricultural nutrient supply
          binding: parameterized
          flow_set_ref:
            id: flow-set.agricultural-nutrient-supply
            version: 0.3.0
        - row_id: nutrients_b
          role: organic nutrient supply
          binding: parameterized
          flow_set_ref:
            id: flow-set.agricultural-nutrient-supply
            version: 0.3.0`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, false);
  assert.equal(result.findings.at(-1).code, "FLOW_SET_CARDINALITY_EXCEEDED");
  assert.equal(result.findings.at(-1).actual, 2);
});
