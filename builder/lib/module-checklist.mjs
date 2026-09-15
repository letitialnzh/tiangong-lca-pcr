import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { parseYaml, readYamlFile, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(__dirname, "../..");
const MODULE_GROUPS = ["activities", "technologies", "system-conditions"];
const BIOLOGICAL_PATTERN =
  /biolog|crop|cultivat|farm|orchard|seed|aquacultur|forestr|fishery|animal|plant|果园|种植|养殖|作物|种子|森林|水产|生物/iu;
const TECHNOLOGY_DELTA_PATTERN =
  /alternative (?:technology|production) route|protected (?:cultivation|environment)|controlled environment|technology delta|route delta|替代(?:技术|生产)路线|温室|设施栽培|技术路线/iu;
const PERIOD_PATTERN =
  /storage|period|phase|cycle|lifetime|replacement|termination|duration|储存|期间|阶段|周期|寿命|替换|终止|期限/iu;

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
  const signalText = flattenText({
    product_category_identity: structured.product_category_identity ?? structured.productCategoryIdentity,
    functional_unit: structured.functional_unit ?? structured.functionalUnit,
    process_map: processMap,
    system_boundary: structured.system_boundary ?? structured.systemBoundary,
    process_inventory: structured.process_inventory ?? structured.processInventory,
    allocation: structured.allocation ?? structured.allocationRules,
  }).join(" ");
  const outputNames = productOutputs
    .map(({ row }) => row?.role ?? row?.row_id ?? row?.name)
    .filter(Boolean)
    .map(String);
  return {
    processMap,
    productOutputs,
    outputNames,
    signalText,
    hasProcessMap: processMap.length > 0,
    hasBiologicalRoute: BIOLOGICAL_PATTERN.test(signalText),
    hasTechnologyDelta: TECHNOLOGY_DELTA_PATTERN.test(signalText),
    hasMultipleOutputs: new Set(outputNames).size > 1,
    hasMultiplePeriods: PERIOD_PATTERN.test(signalText),
  };
}

function evaluateSignal(signal, context) {
  switch (signal) {
    case "process_map":
      return context.hasProcessMap;
    case "biological_route":
      return context.hasBiologicalRoute;
    case "technology_delta":
      return context.hasTechnologyDelta;
    case "biological_route_delta":
      return context.hasBiologicalRoute && context.hasTechnologyDelta;
    case "multiple_outputs":
      return context.hasMultipleOutputs;
    case "multi_period_or_storage":
      return context.hasMultiplePeriods;
    default:
      return null;
  }
}

function decideModule(module, context) {
  const signals = asArray(module.activation?.signals);
  const results = signals.map((signal) => ({ signal, matched: evaluateSignal(signal, context) }));
  if (results.some(({ matched }) => matched === true)) {
    return {
      decision: "applicable",
      reason: "At least one declared activation signal was found in the PCR projection.",
      signal_results: results,
    };
  }
  if (results.some(({ matched }) => matched === null) || module.kind === "technology") {
    return {
      decision: "unresolved",
      reason: "The PCR projection does not provide enough explicit evidence to decide this module automatically.",
      signal_results: results,
    };
  }
  return {
    decision: "not_applicable",
    reason: "No declared activation signal was found in the PCR projection.",
    signal_results: results,
  };
}

function moduleReferenceEntry(entry, root) {
  return {
    id: entry.id,
    kind: entry.kind,
    path: entry.source,
    decision: entry.decision,
  };
}

export function selectModules({ root = defaultRoot, structured }) {
  const resolvedRoot = path.resolve(root);
  const context = buildContext(structured);
  const modules = [];

  for (const filePath of discoverModuleFiles(resolvedRoot)) {
    const module = parseYaml(readFileSync(filePath, "utf8"));
    if (module?.status !== "candidate") continue;
    const result = decideModule(module, context);
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
      obligations: asArray(module.obligations),
      validation: asArray(module.validation),
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
    selected: selected.map((entry) => moduleReferenceEntry(entry, resolvedRoot)),
    unresolved: unresolved.map((entry) => moduleReferenceEntry(entry, resolvedRoot)),
  };

  return {
    context,
    modules: modules.map(({ __filePath, ...entry }) => entry),
    summary,
    manifestModules,
    moduleReferences,
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
