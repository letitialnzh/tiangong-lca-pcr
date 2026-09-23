import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

import { parseYaml, readYamlFile } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  buildModuleAuthoringPlan,
  moduleChecklistCommand,
  moduleReferencesFromManifest,
  selectModules,
} from "./module-checklist.mjs";

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
  assert.equal(report.summary.applicable, 1);
  assert.equal(report.summary.unresolved, 3);
  assert.equal(report.summary.not_applicable, 21);

  const decisions = new Map(report.modules.map((entry) => [entry.id, entry.decision]));
  assert.equal(decisions.get("module.activity.managed-biological-production"), "applicable");
  assert.equal(decisions.get("module.system-condition.multi-output-attribution"), "unresolved");
  assert.equal(decisions.get("module.system-condition.multi-period-attribution"), "unresolved");
  assert.equal(decisions.get("module.technology.alternative-production-route"), "not_applicable");
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
  const selection = selectModules({
    root,
    context: {
      schema_version: 1,
      type: "module-authoring-context",
      target: { product_category: "apples" },
      route_evidence: {
        signals: {
          biological_route: true,
          grading_sorting_route: true,
          cross_period_attribution_required: true,
        },
      },
    },
  });

  assert.deepEqual(selection.manifestModules, {
    core: [],
    activities: [
      "module.activity.grading-sorting-node",
      "module.activity.managed-biological-production",
    ],
    technologies: [],
    system_conditions: ["module.system-condition.multi-period-attribution"],
  });
  assert.equal(selection.moduleReferences.selection_mode, "automatic");
  assert.deepEqual(
    selection.moduleReferences.selected.map((entry) => entry.id),
    selection.manifestModules.activities.concat(selection.manifestModules.system_conditions),
  );
  assert.ok(selection.moduleReferences.unresolved.length > 0);
});

test("post-generation signals require explicit co-product or cross-period evidence", () => {
  const root = path.resolve(".");
  const select = (structured) => {
    const selection = selectModules({ root, structured });
    return new Map(
      selection.modules
        .filter(
          (module) =>
            module.id === "module.system-condition.multi-output-attribution" ||
            module.id === "module.system-condition.multi-period-attribution" ||
            module.id === "module.system-condition.rework-reject-routing",
        )
        .map((module) => [module.id, module.decision]),
    );
  };

  const sequentialOutputs = select({
    process_map: [{ id: "grow", name: "Production" }, { id: "pack", name: "Packing" }],
    process_inventory: [
      { id: "grow", outputs: { product: [{ row_id: "intermediate_crop" }] } },
      { id: "pack", outputs: { product: [{ row_id: "marketable_product" }] } },
    ],
  });
  assert.equal(sequentialOutputs.get("module.system-condition.multi-output-attribution"), "unresolved");

  const explicitCoProducts = select({
    process_map: [{ id: "process", name: "Production" }],
    process_inventory: [
      {
        id: "process",
        outputs: {
          product: [{ co_product: true, row_id: "main" }, { co_product: true, row_id: "co" }],
        },
      },
    ],
  });
  assert.equal(explicitCoProducts.get("module.system-condition.multi-output-attribution"), "applicable");

  const cropCycleOnly = select({
    functional_unit: { how_long_or_cycle: "one crop cycle" },
  });
  assert.equal(cropCycleOnly.get("module.system-condition.multi-period-attribution"), "unresolved");

  const annualizedLife = select({
    system_boundary: { rules: [{ rule: "Annualize establishment over productive life" }] },
  });
  assert.equal(annualizedLife.get("module.system-condition.multi-period-attribution"), "applicable");

  const explicitlySinglePeriod = select({
    system_boundary: { rules: [{ rule: "No storage or replacement is included" }] },
  });
  assert.equal(
    explicitlySinglePeriod.get("module.system-condition.multi-period-attribution"),
    "not_applicable",
  );

  const rejectedOnly = select({
    process_inventory: [
      {
        id: "process",
        outputs: { waste: [{ role: "Rejected material sent to disposal" }] },
      },
    ],
  });
  assert.equal(
    rejectedOnly.get("module.system-condition.rework-reject-routing"),
    "unresolved",
  );

  const reworkLoop = select({
    system_boundary: { rules: [{ rule: "Returned off-spec material is sent back to the upstream process" }] },
  });
  assert.equal(
    reworkLoop.get("module.system-condition.rework-reject-routing"),
    "applicable",
  );
});

test("manifest module selection is preserved as the projection source", () => {
  const result = moduleReferencesFromManifest({
    root: path.resolve("."),
    manifest: {
      modules: {
        core: [],
        activities: ["module.activity.managed-biological-production"],
        technologies: [],
        system_conditions: [],
      },
    },
  });
  assert.deepEqual(result.manifestModules.activities, ["module.activity.managed-biological-production"]);
  assert.deepEqual(result.moduleReferences.selected.map((entry) => entry.id), [
    "module.activity.managed-biological-production",
  ]);
  assert.deepEqual(result.moduleReferences.unresolved, []);
});

test("pre-generation plan turns independently selected modules into English writing requirements", () => {
  const root = path.resolve(".");
  const postGeneration = selectModules({
    root,
    structured: readYamlFile(path.join(root, wheatPcr, "structured.yaml")),
  });
  const signals = Object.fromEntries(
    postGeneration.modules.flatMap((module) =>
      module.signal_results.map(({ signal }) => [signal, false]),
    ),
  );
  Object.assign(signals, {
    biological_route: true,
    harvest_capture_route: true,
    co_product_attribution_required: true,
    cross_period_attribution_required: true,
  });

  const plan = buildModuleAuthoringPlan({
    root,
    context: {
      schema_version: 1,
      type: "module-authoring-context",
      target: { product_category: "wheat seed" },
      route_evidence: { signals },
    },
  });

  assert.equal(plan.phase, "pre_generation");
  assert.equal(plan.purpose, "prevent_omissions_and_methodology_errors");
  assert.deepEqual(
    plan.selected_modules.map((module) => module.id),
    [
      "module.activity.harvest-capture-node",
      "module.activity.managed-biological-production",
      "module.system-condition.multi-output-attribution",
      "module.system-condition.multi-period-attribution",
    ],
  );
  assert.ok(plan.selected_modules.every((module) => module.requirements.length > 0));
  assert.ok(plan.selected_modules.every((module) => module.authoring.target_sections.length > 0));
  assert.match(plan.generation_rules.join(" "), /current product and route/u);
});

test("module authoring context rejects unknown signals", () => {
  assert.throws(
    () =>
      buildModuleAuthoringPlan({
        root: path.resolve("."),
        context: {
          schema_version: 1,
          type: "module-authoring-context",
          target: { product_category: "test product" },
          route_evidence: { signals: { invented_signal: true } },
        },
      }),
    /unknown module authoring signal/u,
  );
});

test("module authoring context accepts the legacy rework signal alias", () => {
  const plan = buildModuleAuthoringPlan({
    root: path.resolve("."),
    context: {
      schema_version: 1,
      type: "module-authoring-context",
      target: { product_category: "test product" },
      route_evidence: { signals: { rework_reject_route: true } },
    },
  });
  assert.ok(
    plan.selected_modules.some(
      (module) => module.id === "module.system-condition.rework-reject-routing",
    ),
  );
});

test("every selectable module declares section targets and current-product evidence policy", () => {
  const root = path.resolve("library/modules");
  const files = ["activities", "technologies", "system-conditions"].flatMap((group) =>
    readdirSync(path.join(root, group))
      .filter((name) => name.endsWith(".yaml"))
      .map((name) => path.join(root, group, name)),
  );

  assert.equal(files.length, 25);
  for (const file of files) {
    const source = readFileSync(file, "utf8");
    const module = parseYaml(source);
    assert.equal(module.authoring.evidence_policy, "current_product_and_route", file);
    assert.ok(module.authoring.target_sections.length > 0, file);
    assert.ok(module.obligations.length > 0, file);
    assert.doesNotMatch(source, /current PCR evidence/iu, file);
  }
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
