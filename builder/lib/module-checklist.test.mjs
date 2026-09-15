import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import { parseYaml, readYamlFile } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { moduleChecklistCommand, selectModules } from "./module-checklist.mjs";

const wheatPcr = path.join(
  "library/pcrs",
  "agriculture-forestry-and-fishery-products",
  "products-of-agriculture-horticulture-and-market-gardening",
  "wheat-seed",
);

test("module checklist inspects candidate YAML modules without modifying a PCR", () => {
  const report = JSON.parse(moduleChecklistCommand({ pcr: wheatPcr, format: "json" })[0]);

  assert.equal(report.type, "module-checklist");
  assert.equal(report.mode, "advisory_only");
  assert.equal(report.pcr.path, wheatPcr);
  assert.equal(report.context.process_count, 3);
  assert.equal(report.summary.applicable, 4);
  assert.equal(report.summary.unresolved, 22);
  assert.equal(report.summary.not_applicable, 0);

  const decisions = new Map(report.modules.map((entry) => [entry.id, entry.decision]));
  assert.equal(decisions.get("module.activity.managed-biological-production"), "applicable");
  assert.equal(decisions.get("module.system-condition.multi-output-attribution"), "applicable");
  assert.equal(decisions.get("module.technology.alternative-production-route"), "unresolved");
});

test("module checklist supports YAML and Markdown output", () => {
  const yaml = moduleChecklistCommand({ pcr: wheatPcr, format: "yaml" })[0];
  const markdown = moduleChecklistCommand({ pcr: wheatPcr, format: "markdown" })[0];

  assert.match(yaml, /type: "module-checklist"/u);
  assert.match(yaml, /mode: "advisory_only"/u);
  assert.match(markdown, /# Module checklist:/u);
  assert.match(markdown, /Managed biological production/u);
});

test("automatic module selection produces manifest groups and structured references", () => {
  const root = path.resolve(".");
  const applePcr = path.join(
    root,
    "library/pcrs",
    "agriculture-forestry-and-fishery-products",
    "products-of-agriculture-horticulture-and-market-gardening",
    "apples",
  );
  const selection = selectModules({
    root,
    structured: readYamlFile(path.join(applePcr, "structured.yaml")),
  });

  assert.deepEqual(selection.manifestModules, {
    core: [],
    activities: [
      "module.activity.independent-process-node",
      "module.activity.managed-biological-production",
    ],
    technologies: [],
    system_conditions: [
      "module.system-condition.multi-output-attribution",
      "module.system-condition.multi-period-attribution",
    ],
  });
  assert.equal(selection.moduleReferences.selection_mode, "automatic");
  assert.deepEqual(
    selection.moduleReferences.selected.map((entry) => entry.id),
    selection.manifestModules.activities.concat(selection.manifestModules.system_conditions),
  );
  assert.ok(selection.moduleReferences.unresolved.length > 0);
});

test("yaml-lite reads the lightweight module YAML shape", () => {
  const parsed = parseYaml(`purpose: >-
  A reusable rule.
activation:
  signals: [process_map, biological_route]
`);

  assert.equal(parsed.purpose, "A reusable rule.");
  assert.deepEqual(parsed.activation.signals, ["process_map", "biological_route"]);
});
