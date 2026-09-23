import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { parseYaml, readYamlFile, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(__dirname, "../..");
const MODULE_GROUPS = ["activities", "technologies", "system-conditions"];
const STRUCTURED_SIGNAL_PATTERNS = Object.freeze({
  assembly_integration_route: /assembl|integrat|component input|组装|装配|组件/iu,
  batch_continuous_mode:
    /batch mode|batch production|campaign run|continuous production|continuous operation|changeover|批次模式|批量生产|连续运行|换线/iu,
  biological_route:
    /biolog|crop|cultivat|farm|orchard|seed|aquacultur|forestr|fishery|animal|plant|果园|种植|养殖|作物|种子|森林|水产|生物/iu,
  chemical_reaction_route: /chemical reaction|reactant|synthesis|ferment|reaction product|反应物|化学反应|发酵|合成/iu,
  energy_conversion_route: /energy conversion|electricity generation|heat generation|power generation|发电|供热|能量转换/iu,
  filling_dosing_route: /filling|dosing|bottling|portioning|灌装|分装|计量/iu,
  forming_fabrication_route: /forming|fabrication|mould|mold|pressing|extrusion|rolling|成型|压制|挤出|轧制/iu,
  formulation_blending_route: /formulat|blending|mixing|ingredient|recipe|配方|混合|调制/iu,
  grading_sorting_route: /grading|sorting|grade state|分级|分选|筛选/iu,
  harvest_capture_route: /harvest|capture|fishing|collected output|采摘|收获|捕捞|采集/iu,
  material_treatment_route: /material treatment|separation|beneficiation|crushing|treatment output|材料处理|分离|选矿|破碎/iu,
  multi_site_aggregation: /multi[- ]site|multiple sites|contributing sites|多个地点|多地点|多场址/iu,
  packaging_presentation_route: /packaging process|packaging and presentation|packing process|装箱过程|包装过程|贴标/iu,
  preservation_stabilization_route: /preservation|stabilization|cold storage|refrigeration|freezing|保鲜|稳定化|冷藏|冷冻/iu,
  primary_conditioning_route: /primary conditioning|post[- ]harvest conditioning|raw-to-prepared|初级处理|采后处理|初步整理/iu,
  recovery_reprocessing_route: /recovery and reprocessing|reprocessing|recovered source|再加工|回收处理|再生处理/iu,
  resource_removal_route: /resource removal|extraction|mining|quarrying|logging|资源移除|开采|采伐/iu,
  rework_or_return_routing_required:
    /rework|return(?:ed)?[^.]{0,80}upstream|reprocessing loop|rework loop|回流|退回上游|返工|再加工循环/iu,
  secondary_material_route: /secondary material|recycled input|recovered input|二次材料|再生材料|回收材料/iu,
  shared_infrastructure: /shared infrastructure|shared asset|common equipment|共享基础设施|共享资产|共用设备/iu,
  surface_finishing_route: /surface finishing|coating|plating|painting|表面处理|涂层|喷涂|镀层/iu,
  technology_delta: /alternative technology|technology delta|route delta|替代技术|技术差异|路线差异/iu,
});
const PROCESS_NODE_SIGNALS = new Set([
  "assembly_integration_route",
  "biological_route",
  "chemical_reaction_route",
  "energy_conversion_route",
  "filling_dosing_route",
  "forming_fabrication_route",
  "formulation_blending_route",
  "grading_sorting_route",
  "harvest_capture_route",
  "material_treatment_route",
  "packaging_presentation_route",
  "preservation_stabilization_route",
  "primary_conditioning_route",
  "recovery_reprocessing_route",
  "resource_removal_route",
  "surface_finishing_route",
  "technology_delta",
]);
const KNOWN_SIGNALS = new Set([
  ...Object.keys(STRUCTURED_SIGNAL_PATTERNS),
  "process_map",
  "multiple_outputs",
  "multi_period_or_storage",
  "co_product_attribution_required",
  "cross_period_attribution_required",
  "rework_or_return_routing_required",
  "rework_reject_route",
  "biological_route_delta",
]);

function rootFromOptions(options) {
  return path.resolve(String(options.root ?? defaultRoot));
}

function asArray(value) {
  if (Array.isArray(value)) return value;
  return value === undefined || value === null ? [] : [value];
}

function flattenText(value, result = []) {
  if (Array.isArray(value)) {
    for (const entry of value) flattenText(entry, result);
  } else if (value && typeof value === "object") {
    for (const [key, entry] of Object.entries(value)) {
      result.push(String(key));
      flattenText(entry, result);
    }
  } else if (value !== undefined && value !== null) {
    result.push(String(value));
  }
  return result;
}

function discoverModuleFiles(root) {
  const files = [];
  for (const group of MODULE_GROUPS) {
    const directory = path.join(root, "library/modules", group);
    if (!existsSync(directory) || !statSync(directory).isDirectory()) continue;
    for (const entry of readdirSync(directory).sort()) {
      if (!entry.endsWith(".yaml")) continue;
      const filePath = path.join(directory, entry);
      if (statSync(filePath).isFile()) files.push(filePath);
    }
  }
  return files;
}

function readPcr(pcrPath) {
  const directory = path.resolve(pcrPath);
  if (!existsSync(directory) || !statSync(directory).isDirectory()) {
    throw new Error(`PCR directory does not exist: ${directory}`);
  }
  const manifestPath = path.join(directory, "manifest.yaml");
  const structuredPath = path.join(directory, "structured.yaml");
  if (!existsSync(manifestPath) || !existsSync(structuredPath)) {
    throw new Error(`PCR must contain manifest.yaml and structured.yaml: ${directory}`);
  }
  return {
    directory,
    manifest: readYamlFile(manifestPath),
    structured: readYamlFile(structuredPath),
  };
}

function processInventoryRows(structured) {
  const rows = [];
  for (const processEntry of asArray(structured.process_inventory ?? structured.processInventory)) {
    for (const direction of ["inputs", "outputs"]) {
      for (const flowType of ["product", "waste", "elementary"]) {
        for (const row of asArray(processEntry?.[direction]?.[flowType])) {
          rows.push({ processEntry, direction, flowType, row });
        }
      }
    }
  }
  return rows;
}

function buildContext(structured) {
  const processMap = asArray(structured.process_map ?? structured.processMap);
  const inventoryRows = processInventoryRows(structured);
  const productOutputs = inventoryRows.filter(
    ({ direction, flowType }) => direction === "outputs" && flowType === "product",
  );
  const processMapText = flattenText(
    processMap.map((entry) => ({
      id: entry?.id,
      name: entry?.name,
      role: entry?.role,
      inclusion: entry?.inclusion,
      inclusion_condition: entry?.inclusion_condition,
    })),
  ).join(" ");
  const allocation =
    structured.allocation_rules ?? structured.allocation ?? structured.allocationRules;
  const systemText = flattenText({
    process_map: processMap,
    system_boundary: structured.system_boundary ?? structured.systemBoundary,
    process_inventory: structured.process_inventory ?? structured.processInventory,
    allocation,
  }).join(" ");
  const periodText = flattenText({
    functional_unit: structured.functional_unit ?? structured.functionalUnit,
    process_map: processMap,
    system_boundary: structured.system_boundary ?? structured.systemBoundary,
    allocation,
  }).join(" ");
  const outputNames = productOutputs
    .map(({ row }) => row?.role ?? row?.row_id ?? row?.name)
    .filter(Boolean)
    .map(String);
  const signalValues = Object.fromEntries(
    Object.entries(STRUCTURED_SIGNAL_PATTERNS).map(([signal, pattern]) => [
      signal,
      pattern.test(PROCESS_NODE_SIGNALS.has(signal) ? processMapText : systemText),
    ]),
  );
  signalValues.process_map = processMap.length > 0;
  signalValues.co_product_attribution_required = inferMultipleOutputSignal(productOutputs);
  signalValues.cross_period_attribution_required = inferMultiPeriodSignal(periodText);
  signalValues.rework_or_return_routing_required =
    inferPatternSignal("rework_or_return_routing_required", systemText);
  signalValues.multiple_outputs = signalValues.co_product_attribution_required;
  signalValues.multi_period_or_storage = signalValues.cross_period_attribution_required;
  signalValues.rework_reject_route = signalValues.rework_or_return_routing_required;
  signalValues.biological_route_delta =
    signalValues.biological_route && signalValues.technology_delta;

  return {
    source: "structured_projection",
    processMap,
    productOutputs,
    outputNames,
    signalValues,
  };
}

const EXPLICIT_OUTPUT_PATTERN =
  /co[- ]?product|intended output|co_product|共产品|副产品|独立产品/iu;
const POSITIVE_PERIOD_PATTERN =
  /reporting period|lifecycle phase|multi[- ]?period|cross[- ]?period|replacement event|termination event|annuali[sz]|multi[- ]?year|storage period|inventory carry[- ]?over|报告期间|生命周期阶段|跨期|替换事件|终止事件|年化|多年|库存跨期/iu;
const NEGATIVE_PERIOD_PATTERN =
  /no storage|without storage|single[- ]?period|one reporting period|no replacement|no termination|不含储存|无储存|单一期间|单一报告期|无替换|无终止/iu;

function inferMultipleOutputSignal(productOutputs) {
  const explicitByProcess = new Map();
  for (const { processEntry, row } of productOutputs) {
    const rowText = flattenText(row).join(" ");
    const explicit =
      row?.co_product === true ||
      row?.intended_output === true ||
      EXPLICIT_OUTPUT_PATTERN.test(rowText);
    if (!explicit) continue;
    const processId = String(processEntry?.id ?? "");
    const rows = explicitByProcess.get(processId) ?? [];
    rows.push(row);
    explicitByProcess.set(processId, rows);
  }
  return [...explicitByProcess.values()].some((rows) => rows.length > 1) ? true : null;
}

function inferPatternSignal(signal, text) {
  const pattern = STRUCTURED_SIGNAL_PATTERNS[signal];
  return pattern?.test(text) ? true : null;
}

function inferMultiPeriodSignal(periodText) {
  if (NEGATIVE_PERIOD_PATTERN.test(periodText) && !POSITIVE_PERIOD_PATTERN.test(periodText)) {
    return false;
  }
  return POSITIVE_PERIOD_PATTERN.test(periodText) ? true : null;
}

function buildAuthoringContext(document) {
  if (!document || typeof document !== "object" || Array.isArray(document)) {
    throw new Error("module authoring context must be a YAML mapping");
  }
  if (document.schema_version !== 1 || document.type !== "module-authoring-context") {
    throw new Error(
      "module authoring context requires schema_version: 1 and type: module-authoring-context",
    );
  }
  if (!document.target?.product_category || typeof document.target.product_category !== "string") {
    throw new Error("module authoring context requires target.product_category");
  }
  const values = document.route_evidence?.signals ?? document.route_observations ?? document.signals;
  if (!values || typeof values !== "object" || Array.isArray(values)) {
    throw new Error(
      "module authoring context requires route_evidence.signals (or route_observations) as a mapping",
    );
  }
  const signalValues = {};
  for (const [signal, value] of Object.entries(values)) {
    if (!KNOWN_SIGNALS.has(signal)) {
      throw new Error(`unknown module authoring signal: ${signal}`);
    }
    if (value !== true && value !== false && value !== null && value !== "unresolved") {
      throw new Error(`module authoring signal ${signal} must be true, false, null, or unresolved`);
    }
    signalValues[signal] = value === "unresolved" ? null : value;
  }
  if (
    signalValues.co_product_attribution_required === undefined &&
    signalValues.multiple_outputs !== undefined
  ) {
    signalValues.co_product_attribution_required = signalValues.multiple_outputs;
  }
  if (
    signalValues.cross_period_attribution_required === undefined &&
    signalValues.multi_period_or_storage !== undefined
  ) {
    signalValues.cross_period_attribution_required = signalValues.multi_period_or_storage;
  }
  if (
    signalValues.rework_or_return_routing_required === undefined &&
    signalValues.rework_reject_route !== undefined
  ) {
    signalValues.rework_or_return_routing_required = signalValues.rework_reject_route;
  }
  if (
    signalValues.biological_route_delta === undefined &&
    signalValues.biological_route !== undefined &&
    signalValues.technology_delta !== undefined
  ) {
    signalValues.biological_route_delta =
      signalValues.biological_route && signalValues.technology_delta;
  }
  return {
    source: "pre_generation_route_evidence",
    target: document.target ?? {},
    signalValues,
    processMap: [],
    productOutputs: [],
    outputNames: [],
  };
}

function evaluateSignal(signal, context) {
  return Object.hasOwn(context.signalValues, signal) ? context.signalValues[signal] : null;
}

function decideModule(module, context) {
  const signals = asArray(module.activation?.signals);
  const results = signals.map((signal) => ({ signal, matched: evaluateSignal(signal, context) }));
  if (results.some(({ matched }) => matched === true)) {
    return {
      decision: "applicable",
      reason: `At least one declared activation signal is present in ${context.source}.`,
      signal_results: results,
    };
  }
  if (results.some(({ matched }) => matched === null)) {
    return {
      decision: "unresolved",
      reason: `${context.source} does not provide enough explicit evidence to decide this module automatically.`,
      signal_results: results,
    };
  }
  return {
    decision: "not_applicable",
    reason: `No declared activation signal is present in ${context.source}.`,
    signal_results: results,
  };
}

function moduleReferenceEntry(entry) {
  return {
    id: entry.id,
    kind: entry.kind,
    path: entry.source,
    decision: entry.decision,
  };
}

export function moduleReferencesFromManifest({ root = defaultRoot, manifest }) {
  const resolvedRoot = path.resolve(root);
  const groups = ["core", "activities", "technologies", "system_conditions"];
  const groupInfo = {
    core: { prefix: "module.core.", folder: "core", kind: "core" },
    activities: { prefix: "module.activity.", folder: "activities", kind: "activity" },
    technologies: { prefix: "module.technology.", folder: "technologies", kind: "technology" },
    system_conditions: {
      prefix: "module.system-condition.",
      folder: "system-conditions",
      kind: "system_condition",
    },
  };
  const manifestModules = Object.fromEntries(
    groups.map((group) => [group, asArray(manifest?.modules?.[group]).map(String)]),
  );
  const selected = [];
  const seen = new Set();
  for (const group of groups) {
    for (const id of manifestModules[group]) {
      if (seen.has(id)) throw new Error(`duplicate module id in manifest.modules: ${id}`);
      seen.add(id);
      // Legacy core ids remain in some scaffold manifests, but the current
      // structured projection schema only references candidate activity,
      // technology, and system-condition modules.
      if (group === "core") continue;
      const info = groupInfo[group];
      if (!id.startsWith(info.prefix) || id.length === info.prefix.length) {
        throw new Error(`module id does not match manifest group ${group}: ${id}`);
      }
      const source = `library/modules/${info.folder}/${id.slice(info.prefix.length)}.yaml`;
      if (
        existsSync(path.join(resolvedRoot, "library/modules")) &&
        !existsSync(path.join(resolvedRoot, source))
      ) {
        throw new Error(`manifest.modules references unavailable candidate module: ${id}`);
      }
      selected.push(
        moduleReferenceEntry({ id, kind: info.kind, source, decision: "applicable" }),
      );
    }
  }
  return {
    manifestModules,
    moduleReferences: {
      selection_mode: "automatic",
      selected,
      unresolved: [],
    },
  };
}

function normalizedAuthoring(module) {
  const value = module.authoring ?? {};
  const targetSections = asArray(value.target_sections).map(String);
  return {
    target_sections: targetSections,
    evidence_policy: value.evidence_policy ?? "current_product_and_route",
    generation_rule:
      value.generation_rule ??
      "Answer every obligation with current-product evidence; do not copy a product answer from the module.",
  };
}

function requirementEntries(module) {
  const authoring = normalizedAuthoring(module);
  return asArray(module.obligations).map((instruction, index) => ({
    id: `${module.id}.requirement.${index + 1}`,
    target_sections: authoring.target_sections,
    instruction: String(instruction),
    evidence_required: true,
  }));
}

export function selectModules({ root = defaultRoot, structured, context }) {
  const resolvedRoot = path.resolve(root);
  if ((structured === undefined) === (context === undefined)) {
    throw new Error("selectModules requires exactly one of structured or context");
  }
  const selectionContext =
    context === undefined ? buildContext(structured) : buildAuthoringContext(context);
  const modules = [];

  for (const filePath of discoverModuleFiles(resolvedRoot)) {
    const module = parseYaml(readFileSync(filePath, "utf8"));
    if (module?.status !== "candidate") continue;
    const result = decideModule(module, selectionContext);
    modules.push({
      id: module.id,
      kind: module.kind,
      title: module.title,
      source: relative(resolvedRoot, filePath),
      decision: result.decision,
      reason: result.reason,
      signal_results: result.signal_results,
      activation_question: module.activation?.question ?? null,
      evidence: asArray(module.activation?.evidence),
      authoring: normalizedAuthoring(module),
      requirements: requirementEntries(module),
      obligations: asArray(module.obligations),
      validation: asArray(module.validation),
      composition: module.composition ?? {},
      excludes: asArray(module.excludes),
      __filePath: filePath,
    });
  }

  const summary = {
    applicable: modules.filter((entry) => entry.decision === "applicable").length,
    unresolved: modules.filter((entry) => entry.decision === "unresolved").length,
    not_applicable: modules.filter((entry) => entry.decision === "not_applicable").length,
  };
  const selected = modules.filter((entry) => entry.decision === "applicable");
  const unresolved = modules.filter((entry) => entry.decision === "unresolved");
  const manifestModules = {
    core: [],
    activities: selected.filter((entry) => entry.kind === "activity").map((entry) => entry.id),
    technologies: selected.filter((entry) => entry.kind === "technology").map((entry) => entry.id),
    system_conditions: selected
      .filter((entry) => entry.kind === "system_condition")
      .map((entry) => entry.id),
  };
  const moduleReferences = {
    selection_mode: "automatic",
    selected: selected.map((entry) => moduleReferenceEntry(entry)),
    unresolved: unresolved.map((entry) => moduleReferenceEntry(entry)),
  };

  return {
    context: selectionContext,
    modules: modules.map(({ __filePath, ...entry }) => entry),
    summary,
    manifestModules,
    moduleReferences,
  };
}

export function buildModuleAuthoringPlan({ root = defaultRoot, context }) {
  const selection = selectModules({ root, context });
  return {
    schema_version: 1,
    type: "module-authoring-plan",
    phase: "pre_generation",
    purpose: "prevent_omissions_and_methodology_errors",
    target: selection.context.target,
    summary: selection.summary,
    selected_modules: selection.modules
      .filter((entry) => entry.decision === "applicable")
      .map((entry) => ({
        id: entry.id,
        kind: entry.kind,
        source: entry.source,
        activation_question: entry.activation_question,
        authoring: entry.authoring,
        requirements: entry.requirements,
        research_tasks: entry.evidence,
        validation: entry.validation,
        composition: entry.composition,
        excluded_content: entry.excludes,
      })),
    unresolved_modules: selection.modules
      .filter((entry) => entry.decision === "unresolved")
      .map((entry) => ({
        id: entry.id,
        kind: entry.kind,
        source: entry.source,
        activation_question: entry.activation_question,
        unresolved_signals: entry.signal_results
          .filter(({ matched }) => matched === null)
          .map(({ signal }) => signal),
        research_tasks: entry.evidence,
      })),
    generation_rules: [
      "Use selected module requirements as mandatory English PCR writing questions.",
      "Research the current product and route for every selected requirement.",
      "Do not copy product facts, quantities, factors, UUIDs, or final decisions from a module.",
      "Resolve missing route signals through research before finalizing the English PCR; no manual module confirmation is required.",
    ],
  };
}

function relative(root, filePath) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function moduleChecklist(options = {}) {
  const root = rootFromOptions(options);
  if (!options.pcr) {
    throw new Error("--pcr is required; provide a PCR directory under library/pcrs");
  }
  const pcrPath = path.isAbsolute(options.pcr) ? options.pcr : path.join(root, options.pcr);
  const pcr = readPcr(pcrPath);
  const selection = selectModules({ root, structured: pcr.structured });
  return {
    schema_version: 0,
    type: "module-checklist",
    mode: "advisory_only",
    pcr: {
      path: relative(root, pcr.directory),
      id: pcr.manifest.id ?? null,
      title: pcr.manifest.title ?? null,
    },
    context: {
      process_count: selection.context.processMap.length,
      product_output_count: selection.context.productOutputs.length,
      product_output_names: selection.context.outputNames,
    },
    summary: selection.summary,
    modules: selection.modules,
    next_step:
      "Review applicable and unresolved entries, then use their obligations as the evidence checklist for PCR authoring. This command does not modify the PCR.",
  };
}

function readAuthoringContext(root, contextPath) {
  if (!contextPath) {
    throw new Error("--context is required; provide a YAML module authoring context");
  }
  const resolvedPath = path.isAbsolute(contextPath)
    ? path.resolve(contextPath)
    : path.resolve(root, contextPath);
  if (!existsSync(resolvedPath) || !statSync(resolvedPath).isFile()) {
    throw new Error(`module authoring context does not exist or is not a regular file: ${resolvedPath}`);
  }
  return readYamlFile(resolvedPath);
}

function markdownAuthoringPlan(plan) {
  const lines = [
    "# Module authoring plan",
    "",
    `- Selected: ${plan.summary.applicable}`,
    `- Unresolved: ${plan.summary.unresolved}`,
    `- Not applicable: ${plan.summary.not_applicable}`,
    "",
  ];
  for (const module of plan.selected_modules) {
    lines.push(`## ${module.id}`, "");
    lines.push(`Target sections: ${module.authoring.target_sections.join(", ") || "not declared"}`, "");
    for (const requirement of module.requirements) {
      lines.push(`- ${requirement.instruction}`);
    }
    lines.push("");
  }
  if (plan.unresolved_modules.length > 0) {
    lines.push("## Research before finalization", "");
    for (const module of plan.unresolved_modules) {
      lines.push(`- ${module.id}: ${module.unresolved_signals.join(", ")}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

export function modulePlanCommand(options = {}) {
  const root = rootFromOptions(options);
  const context = readAuthoringContext(root, options.context);
  const plan = buildModuleAuthoringPlan({ root, context });
  const format = options.format ?? "yaml";
  if (!["json", "yaml", "markdown"].includes(format)) {
    throw new Error(`Unsupported --format: ${format}; use json, yaml, or markdown`);
  }
  if (format === "json") return [JSON.stringify(plan, null, 2)];
  if (format === "markdown") return [markdownAuthoringPlan(plan)];
  return [renderYaml(plan)];
}

function markdownChecklist(report) {
  const lines = [
    `# Module checklist: ${report.pcr.id ?? report.pcr.path}`,
    "",
    `- Applicable: ${report.summary.applicable}`,
    `- Unresolved: ${report.summary.unresolved}`,
    `- Not applicable: ${report.summary.not_applicable}`,
    "",
  ];
  for (const module of report.modules) {
    lines.push(`## ${module.title}`);
    lines.push("");
    lines.push(`- Source: \`${module.source}\``);
    lines.push(`- Decision: **${module.decision}**`);
    lines.push(`- Reason: ${module.reason}`);
    if (module.obligations.length > 0) {
      lines.push("- Obligations:");
      for (const obligation of module.obligations) lines.push(`  - ${obligation}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

export function moduleChecklistCommand(options = {}) {
  const report = moduleChecklist(options);
  const format = options.format ?? "json";
  if (!["json", "yaml", "markdown"].includes(format)) {
    throw new Error(`Unsupported --format: ${format}; use json, yaml, or markdown`);
  }
  if (format === "yaml") return [renderYaml(report)];
  if (format === "markdown") return [markdownChecklist(report)];
  return [JSON.stringify(report, null, 2)];
}
