import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
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
  return root;
}

test("set-level agricultural nutrient binding accepts a bare set reference", () => {
  const root = fixture(`        - row_id: nutrients
          role: agricultural nutrient supply
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
          flow_set_ref:
            id: flow-set.energy-supply
            version: 0.2.0
            group: electricity-supply or mobile-machinery-fuel`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, true);
  assert.equal(result.findings[0].code, "FLOW_SET_GROUP_DEFERRED");
});

test("group-only sets still defer a missing group", () => {
  const root = fixture(`        - row_id: process_water
          role: process water
          flow_set_ref:
            id: flow-set.water-use
            version: 0.2.0`);
  const result = auditPcrFlowSetBindings({ root });
  assert.equal(result.ok, true);
  assert.equal(result.findings[0].code, "FLOW_SET_GROUP_DEFERRED");
});
