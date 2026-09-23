import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  readdirSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { materialProjectionCompletenessIssues } from "../../packages/pcr-core/src/projection-completeness.mjs";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  AMOUNT_RANGE_ROLE_VALUES as AMOUNT_RANGE_ROLE_VALUE_LIST,
  AMOUNT_SPECIFICITY_VALUES as AMOUNT_SPECIFICITY_VALUE_LIST,
  AMOUNT_VALUE_MODE_VALUES as AMOUNT_VALUE_MODE_VALUE_LIST,
  BASIS_KIND_VALUES as BASIS_KIND_VALUE_LIST,
  EVIDENCE_KIND_VALUES as EVIDENCE_KIND_VALUE_LIST,
  FLOW_DIRECTION_VALUES as FLOW_DIRECTION_VALUE_LIST,
  FLOW_TYPE_VALUES as FLOW_TYPE_VALUE_LIST,
  PROCESS_INCLUSION_VALUES as PROCESS_INCLUSION_VALUE_LIST,
} from "../../packages/pcr-core/src/generated/controlled-vocabulary.mjs";
import { manifestLifecycleProblems } from "./lifecycle-policy.mjs";
import {
  parsePcrMarkdownToStructured,
  structuredProjectionYaml,
} from "./markdown-projection.mjs";
import { moduleReferencesFromManifest } from "./module-checklist.mjs";
import { inspectPublishedRevisionState } from "./published-revision-state.mjs";
import { PCR_EN_FILE, PCR_ZH_FILE } from "./scaffold-templates.mjs";
import { REQUIRED_DIRS } from "./builder-constants.mjs";
import { validateBuilderContract } from "./schema-contracts.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(__dirname, "../..");
const UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });

function rootFromOptions(options) {
  return path.resolve(String(options.root ?? defaultRoot));
}

const PROCESS_INCLUSION_VALUES = new Set(PROCESS_INCLUSION_VALUE_LIST);
const AMOUNT_VALUE_MODE_VALUES = new Set(AMOUNT_VALUE_MODE_VALUE_LIST);
const AMOUNT_SPECIFICITY_VALUES = new Set(AMOUNT_SPECIFICITY_VALUE_LIST);
const BASIS_KIND_VALUES = new Set(BASIS_KIND_VALUE_LIST);
const FLOW_DIRECTION_VALUES = FLOW_DIRECTION_VALUE_LIST;
const FLOW_TYPE_VALUES = new Set(FLOW_TYPE_VALUE_LIST);
const RANGE_ROLE_VALUES = new Set(AMOUNT_RANGE_ROLE_VALUE_LIST);
const EVIDENCE_KIND_VALUES = new Set(EVIDENCE_KIND_VALUE_LIST);
const RECURSIVE_ORIGIN_TERM_PATTERN =
  /\b(first[- ]generation|previous[- ]generation)\b|第一代|上一代/giu;
const IMPORTANT_RANGE_PATTERNS = [
  {
    reason: "water or liquid waste",
    pattern: /\b(water|wastewater|brine|washing|desalting)\b|用水|清洗|废水|卤水/iu,
  },
  {
    reason: "fuel or energy",
    pattern: /\b(fuel|diesel|gasoline|natural gas|energy|electricity|power|kwh|mj)\b|燃料|柴油|汽油|天然气|能源|电力|电耗|能耗/iu,
  },
  {
    reason: "direct emission or particulate",
    pattern: /\b(dust|particulate|emission|carbon dioxide|co2|methane|nitrous oxide)\b|粉尘|颗粒|排放|二氧化碳|甲烷|氧化亚氮/iu,
  },
  {
    reason: "waste, reject, or residue",
    pattern: /\b(waste|reject|residue|scrap|off-?size|fines|sludge)\b|废物|拒收|残渣|残留|边角|不合格|细料|污泥/iu,
  },
  {
    reason: "material input or product yield",
    pattern: /\b(raw material|source material|feedstock|material input|fertili[sz]er|herbicide|fungicide|insecticide|pesticide|crop protection|seed lot|seed crop|accepted|cleaned|harvested|declared product|reference product|yield|product mass)\b|原料|来源材料|肥料|除草剂|杀菌剂|杀虫剂|农药|种子|收获|接收|已清洗|声明产品|参考产品|得率|产量/iu,
  },
  {
    reason: "packaging",
    pattern: /\b(packaging|package|packing|pallet|bag|drum)\b|包装|托盘|袋|桶/iu,
  },
];

function discoverCanonicalPcrDirectories(root, problems, repositoryRoot) {
  if (!existsSync(root)) {
    return [];
  }
  const rootStats = lstatSync(root);
  if (rootStats.isSymbolicLink() || !rootStats.isDirectory()) {
    problems.push(
      `${toRepoRelative(repositoryRoot, root)}: PCR root must be a canonical directory and must not be a symbolic link`,
    );
    return [];
  }
  const results = [];
  const stack = [{ directory: root, depth: 0 }];
  while (stack.length > 0) {
    const { directory: current, depth } = stack.pop();
    const manifestPath = path.join(current, "manifest.yaml");
    if (existsSync(manifestPath)) {
      const manifestStats = lstatSync(manifestPath);
      if (depth === 3 && manifestStats.isFile() && !manifestStats.isSymbolicLink()) {
        results.push(current);
      } else if (depth !== 3) {
        problems.push(
          `${toRepoRelative(repositoryRoot, manifestPath)}: manifest.yaml must be exactly three directories below library/pcrs`,
        );
      } else if (!manifestStats.isSymbolicLink()) {
        problems.push(
          `${toRepoRelative(repositoryRoot, manifestPath)}: manifest.yaml must be a canonical regular file`,
        );
      }
    }
    for (const entry of readdirSync(current)) {
      const child = path.join(current, entry);
      const stats = lstatSync(child);
      if (stats.isSymbolicLink()) {
        problems.push(
          `${toRepoRelative(repositoryRoot, child)}: symbolic links are not allowed inside the PCR directory tree`,
        );
        continue;
      }
      if (stats.isDirectory()) {
        stack.push({ directory: child, depth: depth + 1 });
      }
    }
  }
  return results.sort();
}

function toRepoRelative(root, absolutePath) {
  return path.relative(root, absolutePath).replaceAll(path.sep, "/");
}

function canonicalRegularFileState(filePath, root, problems, { missingMessage } = {}) {
  let stats;
  try {
    stats = lstatSync(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      problems.push(
        missingMessage ?? `${toRepoRelative(root, filePath)}: required file is missing`,
      );
      return { exists: false, safe: true };
    }
    problems.push(
      `${toRepoRelative(root, filePath)}: managed input could not be inspected (${error.code ?? error.message})`,
    );
    return { exists: false, safe: false };
  }

  if (stats.isSymbolicLink() || !stats.isFile()) {
    problems.push(
      `${toRepoRelative(root, filePath)}: managed input must be a canonical regular file; ` +
        "symbolic links and special files are not allowed",
    );
    return { exists: true, safe: false };
  }
  return { exists: true, safe: true };
}

function readCanonicalRegularFile(filePath, root, problems) {
  let descriptor;
  try {
    descriptor = openSync(
      filePath,
      fsConstants.O_RDONLY |
        (fsConstants.O_NOFOLLOW ?? 0) |
        (fsConstants.O_NONBLOCK ?? 0),
    );
    if (!fstatSync(descriptor).isFile()) {
      problems.push(
        `${toRepoRelative(root, filePath)}: managed input must be a canonical regular file`,
      );
      return null;
    }
    const bytes = readFileSync(descriptor);
    try {
      return UTF8_DECODER.decode(bytes);
    } catch {
      problems.push(`${toRepoRelative(root, filePath)}: managed input must be valid UTF-8`);
      return null;
    }
  } catch (error) {
    problems.push(
      `${toRepoRelative(root, filePath)}: managed input could not be safely read (${error.code ?? error.message})`,
    );
    return null;
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }
}

function addContractProblems({ contract, value, sourcePath, root, problems, entityKind }) {
  const result = validateBuilderContract(contract, value, { entityKind });
  for (const error of result.errors) {
    problems.push(
      `${toRepoRelative(root, sourcePath)}: ${entityKind} schema ${error.instance_path} ${error.message}`,
    );
  }
}

function validateYamlContractFile({ contract, sourcePath, root, problems, entityKind }) {
  const state = canonicalRegularFileState(sourcePath, root, problems, {
    missingMessage: `Missing contract file: ${toRepoRelative(root, sourcePath)}`,
  });
  if (!state.exists || !state.safe) {
    return;
  }
  const text = readCanonicalRegularFile(sourcePath, root, problems);
  if (text === null) {
    return;
  }
  addContractProblems({
    contract,
    value: parseYaml(text),
    sourcePath,
    root,
    problems,
    entityKind,
  });
}

function inventoryRows(processInventory) {
  const rows = [];
  for (const processEntry of processInventory) {
    for (const direction of FLOW_DIRECTION_VALUES) {
      for (const flowType of FLOW_TYPE_VALUE_LIST) {
        for (const row of processEntry[direction][flowType]) {
          rows.push({ processEntry, direction, flowType, row });
        }
      }
    }
  }
  return rows;
}

function topLevelValue(text, key) {
  const value = parseYaml(text)[key];
  return value === undefined || value === null ? null : String(value);
}

function isMaterialManifest(text) {
  const status = topLevelValue(text, "status");
  const maturity = topLevelValue(text, "content_maturity");
  return status !== "scaffold" || maturity !== "empty_scaffold";
}

function rangePolicyFromManifest(text) {
  const status = topLevelValue(text, "status");
  const maturity = topLevelValue(text, "content_maturity");
  if (
    ["active", "published"].includes(status) ||
    ["reviewed_methodology", "published_methodology"].includes(maturity)
  ) {
    return "error";
  }
  if (
    status === "candidate" ||
    ["draft_methodology", "authored_methodology"].includes(maturity)
  ) {
    return "warning";
  }
  return "ignore";
}

function importantRangeReason({ processEntry, direction, flowType, row }) {
  if (row.amount?.value_mode === "not_applicable") {
    return "";
  }
  const propertyUnit = String(row.property_unit ?? "");
  if (/(permit|narrative|descriptor|descriptive record|disclosure record)/iu.test(propertyUnit)) {
    return "";
  }
  if (flowType === "waste") {
    return "waste, reject, or residue";
  }
  const searchable = [
    direction,
    flowType,
    row.row_id,
    row.role,
    row.name,
    row.property_unit,
    row.description,
    row.amount?.expression,
    row.amount?.basis?.text,
  ]
    .filter(Boolean)
    .join(" ");
  for (const { reason, pattern } of IMPORTANT_RANGE_PATTERNS) {
    if (pattern.test(searchable)) {
      return reason;
    }
  }
  return "";
}

function validateManifestLifecycle(root, manifestPath, manifestText, problems) {
  const relativePath = toRepoRelative(root, manifestPath);
  const manifest = parseYaml(manifestText);
  for (const problem of manifestLifecycleProblems(manifest)) {
    problems.push(`${relativePath}: ${problem}`);
  }
}

function validatePcrProjection(
  markdownPath,
  projection,
  problems,
  warnings,
  root,
  { material = false, rangePolicy = "ignore" } = {},
  markdown = "",
) {
  const relativePath = toRepoRelative(root, markdownPath);
  const rows = inventoryRows(projection.processInventory);
  if (!material && rows.length === 0 && projection.processMap.length === 0) {
    return;
  }

  const processMapById = new Map(projection.processMap.map((entry) => [entry.id, entry]));
  const processInventoryById = new Map(projection.processInventory.map((entry) => [entry.id, entry]));

  if (projection.processMap.length === 0) {
    problems.push(`${relativePath}: missing Process Map table in section 6`);
  }

  for (const entry of projection.processMap) {
    if (!entry.id) {
      problems.push(`${relativePath}: Process Map row is missing process_id`);
    }
    if (!PROCESS_INCLUSION_VALUES.has(entry.inclusion)) {
      problems.push(`${relativePath}: Process Map ${entry.id || "(missing id)"} has invalid inclusion "${entry.inclusion}"`);
    }
    if (entry.inclusion === "conditional" && !entry.inclusion_condition) {
      problems.push(`${relativePath}: conditional process ${entry.id} is missing inclusion_condition`);
    }
    if (entry.inclusion === "required" && !processInventoryById.has(entry.id)) {
      problems.push(`${relativePath}: required process ${entry.id} has no detailed inventory section`);
    }
  }

  for (const entry of projection.processInventory) {
    if (projection.processMap.length > 0 && !processMapById.has(entry.id)) {
      problems.push(`${relativePath}: detailed process ${entry.id} is not declared in Process Map`);
    }
  }

  const sourceIds = new Set(projection.dataSources.map((source) => source.id));
  const collectionProtocolIds = new Set(
    projection.collectionProtocols.map((protocol) => protocol.protocol_id).filter(Boolean),
  );
  for (const { processEntry, direction, flowType, row } of rows) {
    const context = `${relativePath}: process ${processEntry.id} flow "${row.role || row.name}"`;
    if (!row.row_id) {
      problems.push(`${context} is missing row_id`);
    }
    if (!FLOW_TYPE_VALUES.has(row.flow_type)) {
      problems.push(`${context} has invalid flow_type "${row.flow_type}"`);
    }
    const amount = row.amount ?? {};
    if (!AMOUNT_VALUE_MODE_VALUES.has(amount.value_mode)) {
      problems.push(`${context} has invalid amount.value_mode "${amount.value_mode}"`);
    }
    if (!AMOUNT_SPECIFICITY_VALUES.has(amount.specificity)) {
      problems.push(`${context} has invalid amount.specificity "${amount.specificity}"`);
    }
    if (!BASIS_KIND_VALUES.has(amount.basis?.kind)) {
      problems.push(`${context} has invalid amount.basis.kind "${amount.basis?.kind}"`);
    }
    if (!EVIDENCE_KIND_VALUES.has(amount.evidence?.kind)) {
      problems.push(`${context} has invalid amount.evidence.kind "${amount.evidence?.kind}"`);
    }
    if (
      (amount.evidence?.kind === "external_source" || amount.evidence?.kind === "method_formula") &&
      (amount.evidence?.source_ids ?? []).length === 0
    ) {
      problems.push(`${context} requires source_ids for evidence_kind ${amount.evidence.kind}`);
    }
    if (
      material &&
      ["foreground_data", "collected_record", "calculated_from_collection"].includes(amount.evidence?.kind) &&
      amount.value_mode !== "not_applicable"
    ) {
      if (!amount.evidence?.collection_protocol_id) {
        problems.push(`${context} requires collection_protocol_id for evidence_kind ${amount.evidence.kind}`);
      } else if (!collectionProtocolIds.has(amount.evidence.collection_protocol_id)) {
        problems.push(`${context} references unknown collection_protocol_id ${amount.evidence.collection_protocol_id}`);
      }
    }
    for (const sourceId of amount.evidence?.source_ids ?? []) {
      if (!sourceIds.has(sourceId)) {
        problems.push(`${context} references unknown source_id ${sourceId}`);
      }
    }
    for (const range of amount.ranges ?? []) {
      if (!RANGE_ROLE_VALUES.has(range.role)) {
        problems.push(`${context} has invalid amount range role "${range.role}"`);
      }
      if (!range.unit) {
        problems.push(`${context} amount range ${range.role || "(missing role)"} is missing unit`);
      }
      if (!range.basis) {
        problems.push(`${context} amount range ${range.role || "(missing role)"} is missing basis`);
      }
      if (!BASIS_KIND_VALUES.has(range.basis_kind)) {
        problems.push(`${context} amount range ${range.role || "(missing role)"} has invalid basis_kind "${range.basis_kind}"`);
      }
      if (!EVIDENCE_KIND_VALUES.has(range.evidence_kind)) {
        problems.push(`${context} amount range ${range.role || "(missing role)"} has invalid evidence_kind "${range.evidence_kind}"`);
      }
      if (
        (range.evidence_kind === "external_source" || range.evidence_kind === "method_formula") &&
        range.source_ids.length === 0
      ) {
        problems.push(`${context} amount range ${range.role || "(missing role)"} requires source_ids`);
      }
      for (const sourceId of range.source_ids) {
        if (!sourceIds.has(sourceId)) {
          problems.push(`${context} amount range ${range.role || "(missing role)"} references unknown source_id ${sourceId}`);
        }
      }
    }
    const rangeReason = importantRangeReason({ processEntry, direction, flowType, row });
    if (rangeReason && rangePolicy !== "ignore" && (amount.ranges ?? []).length === 0) {
      const finding = `${context} is an important flow (${rangeReason}) and has no amount range; add a Range/数量范围 block with source-backed evidence or a broad reasoned_estimate.`;
      if (rangePolicy === "error") {
        problems.push(finding);
      } else {
        warnings.push(finding);
      }
    }
  }

  if (!material) {
    return;
  }

  for (const match of String(markdown).matchAll(RECURSIVE_ORIGIN_TERM_PATTERN)) {
    problems.push(`${relativePath}: contains prohibited recursive-origin term "${match[0]}"`);
  }

  for (const protocol of projection.collectionProtocols) {
    const context = `${relativePath}: collection protocol ${protocol.protocol_id}`;
    for (const key of [
      "process_id",
      "flow_role",
      "record_type",
      "raw_fields",
      "collection_method",
      "unit",
      "frequency",
      "temporal_coverage",
      "site_scope",
      "aggregation_rule",
      "quality_evidence",
    ]) {
      if (!protocol[key]) {
        problems.push(`${context} is missing ${key}`);
      }
    }
  }

}

function normalizeGeneratedText(text) {
  return `${String(text ?? "").replace(/\r\n?/gu, "\n").trimEnd()}\n`;
}

function parseMarkdownEnvelope(markdown) {
  const lines = String(markdown ?? "").replace(/^\uFEFF/u, "").split(/\r?\n/u);
  if (lines[0]?.trim() !== "---") {
    return { error: "must start with YAML frontmatter", frontmatter: null, body: "" };
  }
  const closingIndex = lines.findIndex((line, index) => index > 0 && line.trim() === "---");
  if (closingIndex < 0) {
    return { error: "has unclosed YAML frontmatter", frontmatter: null, body: "" };
  }
  try {
    return {
      error: null,
      frontmatter: parseYaml(lines.slice(1, closingIndex).join("\n")),
      body: lines.slice(closingIndex + 1).join("\n"),
    };
  } catch (error) {
    return {
      error: `has invalid YAML frontmatter: ${error.message}`,
      frontmatter: null,
      body: lines.slice(closingIndex + 1).join("\n"),
    };
  }
}

function validateMarkdownFrontmatterContract(root, markdownPath, markdown, problems) {
  const relativePath = toRepoRelative(root, markdownPath);
  if (!String(markdown ?? "").trim()) {
    problems.push(`${relativePath}: Markdown file must not be empty`);
    return;
  }
  const envelope = parseMarkdownEnvelope(markdown);
  if (envelope.error) {
    problems.push(`${relativePath}: ${envelope.error}`);
    return;
  }
  addContractProblems({
    contract: "pcr-markdown-frontmatter.schema.json",
    value: envelope.frontmatter,
    sourcePath: markdownPath,
    root,
    problems,
    entityKind: "PCR Markdown frontmatter",
  });
}

function inspectCanonicalMarkdown(root, markdownPath, markdown, manifest, problems) {
  const relativePath = toRepoRelative(root, markdownPath);
  if (!String(markdown ?? "").trim()) {
    problems.push(`${relativePath}: active or published PCR requires non-empty canonical English Markdown`);
    return;
  }

  const envelope = parseMarkdownEnvelope(markdown);
  if (envelope.error) {
    problems.push(`${relativePath}: ${envelope.error}`);
    return;
  }
  if (!envelope.body.trim()) {
    problems.push(`${relativePath}: active or published PCR requires English Markdown content after frontmatter`);
  }

  for (const [field, expected] of [
    ["pcr_id", manifest?.id],
    ["language", "en-US"],
    ["sync_with", PCR_ZH_FILE],
  ]) {
    const actual = envelope.frontmatter?.[field];
    if (actual !== expected) {
      problems.push(
        `${relativePath}: frontmatter ${field} must be "${expected}"; found "${actual ?? "(missing)"}"`,
      );
    }
  }
}

function inspectChineseMarkdown(root, markdownPath, markdown, manifest, problems) {
  const relativePath = toRepoRelative(root, markdownPath);
  if (!String(markdown ?? "").trim()) {
    problems.push(`${relativePath}: material PCR requires non-empty Chinese Markdown`);
    return null;
  }

  const envelope = parseMarkdownEnvelope(markdown);
  if (envelope.error) {
    problems.push(`${relativePath}: ${envelope.error}`);
    return null;
  }
  if (!envelope.body.trim()) {
    problems.push(`${relativePath}: material PCR requires Chinese Markdown content after frontmatter`);
  }

  for (const [field, expected] of [
    ["pcr_id", manifest?.id],
    ["language", "zh-CN"],
    ["sync_with", PCR_EN_FILE],
  ]) {
    const actual = envelope.frontmatter?.[field];
    if (actual !== expected) {
      problems.push(
        `${relativePath}: frontmatter ${field} must be "${expected}"; found "${actual ?? "(missing)"}"`,
      );
    }
  }

  return envelope.body.trim() ? parsePcrMarkdownToStructured(markdown) : null;
}

function validateBilingualRuleAlignment(root, zhPath, english, chinese, problems) {
  if (!chinese) {
    return;
  }
  const relativePath = toRepoRelative(root, zhPath);
  for (const [label, englishRules, chineseRules] of [
    ["system boundary", english.systemBoundary?.rules ?? [], chinese.systemBoundary?.rules ?? []],
    ["allocation", english.allocationRules ?? [], chinese.allocationRules ?? []],
    ["validation", english.validationRules ?? [], chinese.validationRules ?? []],
  ]) {
    const englishIds = englishRules.map((rule) => rule.rule_id);
    const chineseIds = chineseRules.map((rule) => rule.rule_id);
    if (JSON.stringify(englishIds) !== JSON.stringify(chineseIds)) {
      problems.push(
        `${relativePath}: ${label} ordered rule ids do not match canonical English ` +
          `(en-US: [${englishIds.join(", ")}], zh-CN: [${chineseIds.join(", ")}])`,
      );
    }
  }
}

export function inspectPcrDirectory({
  root,
  pcrDir,
  manifestFileName = "manifest.yaml",
  manifestText: manifestTextOverride,
  structuredText: structuredTextOverride,
  checkManifestLifecycle = true,
  checkBilingualRuleAlignment = false,
} = {}) {
  const resolvedRoot = rootFromOptions({ root });
  const directory = path.resolve(String(pcrDir));
  const problems = [];
  const warnings = [];
  const manifestPath = path.join(directory, manifestFileName);
  const inputSpecifications = [
    {
      fileName: manifestFileName,
      filePath: manifestPath,
      override: manifestTextOverride,
    },
    {
      fileName: PCR_EN_FILE,
      filePath: path.join(directory, PCR_EN_FILE),
      override: undefined,
    },
    {
      fileName: PCR_ZH_FILE,
      filePath: path.join(directory, PCR_ZH_FILE),
      override: undefined,
    },
    {
      fileName: "structured.yaml",
      filePath: path.join(directory, "structured.yaml"),
      override: structuredTextOverride,
    },
  ];
  const inputStates = new Map();
  let managedInputsSafe = true;

  // Complete the type preflight before opening any managed input. A single symlink or
  // special file invalidates the inspection boundary, so no other leaf content is read.
  for (const specification of inputSpecifications) {
    const state = specification.override !== undefined
      ? { exists: true, safe: true }
      : canonicalRegularFileState(
          specification.filePath,
          resolvedRoot,
          problems,
          {
            missingMessage: `Missing PCR file: ${toRepoRelative(resolvedRoot, specification.filePath)}`,
          },
        );
    inputStates.set(specification.fileName, state);
    if (!state.safe) {
      managedInputsSafe = false;
    }
  }

  if (!managedInputsSafe) {
    return {
      problems,
      warnings,
      projection: null,
      expectedStructuredText: null,
      managedInputsSafe: false,
    };
  }

  const inputTexts = new Map();
  for (const specification of inputSpecifications) {
    if (specification.override !== undefined) {
      inputTexts.set(specification.fileName, specification.override);
      continue;
    }
    if (!inputStates.get(specification.fileName).exists) {
      continue;
    }
    const text = readCanonicalRegularFile(
      specification.filePath,
      resolvedRoot,
      problems,
    );
    if (text === null) {
      managedInputsSafe = false;
      break;
    }
    inputTexts.set(specification.fileName, text);
  }

  if (!managedInputsSafe) {
    return {
      problems,
      warnings,
      projection: null,
      expectedStructuredText: null,
      managedInputsSafe: false,
    };
  }

  if (!inputTexts.has(manifestFileName)) {
    return {
      problems,
      warnings,
      projection: null,
      expectedStructuredText: null,
      managedInputsSafe: true,
    };
  }

  const manifestText = inputTexts.get(manifestFileName);
  const manifest = parseYaml(manifestText);
  addContractProblems({
    contract: "pcr-manifest.schema.json",
    value: manifest,
    sourcePath: manifestPath,
    root: resolvedRoot,
    problems,
    entityKind: "PCR manifest",
  });
  if (checkManifestLifecycle) {
    validateManifestLifecycle(resolvedRoot, manifestPath, manifestText, problems);
  }
  const canonicalMarkdown = path.join(directory, PCR_EN_FILE);
  if (!inputTexts.has(PCR_EN_FILE)) {
    return {
      problems,
      warnings,
      projection: null,
      expectedStructuredText: null,
      managedInputsSafe: true,
    };
  }

  const markdownText = inputTexts.get(PCR_EN_FILE);
  validateMarkdownFrontmatterContract(
    resolvedRoot,
    canonicalMarkdown,
    markdownText,
    problems,
  );
  const projection = parsePcrMarkdownToStructured(markdownText);
  const material = isMaterialManifest(manifestText);
  validatePcrProjection(
    canonicalMarkdown,
    projection,
    problems,
    warnings,
    resolvedRoot,
    {
      material,
      rangePolicy: rangePolicyFromManifest(manifestText),
    },
    markdownText,
  );

  if (["active", "published"].includes(manifest.status)) {
    inspectCanonicalMarkdown(
      resolvedRoot,
      canonicalMarkdown,
      markdownText,
      manifest,
      problems,
    );
  }

  const chineseMarkdownPath = path.join(directory, PCR_ZH_FILE);
  if (inputTexts.has(PCR_ZH_FILE)) {
    const chineseMarkdownText = inputTexts.get(PCR_ZH_FILE);
    validateMarkdownFrontmatterContract(
      resolvedRoot,
      chineseMarkdownPath,
      chineseMarkdownText,
      problems,
    );
    if (material) {
      const chineseProjection = inspectChineseMarkdown(
        resolvedRoot,
        chineseMarkdownPath,
        chineseMarkdownText,
        manifest,
        problems,
      );
      if (checkBilingualRuleAlignment || ["active", "published"].includes(manifest.status)) {
        validateBilingualRuleAlignment(
          resolvedRoot,
          chineseMarkdownPath,
          projection,
          chineseProjection,
          problems,
        );
      }
    }
  }

  const moduleSelection = moduleReferencesFromManifest({ root: resolvedRoot, manifest });
  const expectedStructuredText = structuredProjectionYaml(projection, {
    sourceMarkdown: markdownText,
    moduleReferences: moduleSelection.moduleReferences,
  });
  if (material) {
    for (const issue of materialProjectionCompletenessIssues(
      parseYaml(expectedStructuredText),
      { expectedPcrId: manifest.id, lifecycleStatus: manifest.status },
    )) {
      problems.push(
        `${toRepoRelative(resolvedRoot, canonicalMarkdown)}: ${issue.message}`,
      );
    }
  }
  const structuredPath = path.join(directory, "structured.yaml");
  if (material && inputTexts.has("structured.yaml")) {
    const actualStructuredText = inputTexts.get("structured.yaml");
    addContractProblems({
      contract: "structured-projection.schema.json",
      value: parseYaml(actualStructuredText),
      sourcePath: structuredPath,
      root: resolvedRoot,
      problems,
      entityKind: "material structured projection",
    });
    if (normalizeGeneratedText(actualStructuredText) !== normalizeGeneratedText(expectedStructuredText)) {
      const commandDirectory = manifestFileName === "manifest.next.yaml"
        ? path.dirname(directory)
        : directory;
      const workspaceOption = manifestFileName === "manifest.next.yaml"
        ? " --workspace revision"
        : "";
      problems.push(
        `${toRepoRelative(resolvedRoot, structuredPath)}: stale structured projection; run ` +
          `\`npm run pcr:sync-structured -- --pcr ${toRepoRelative(resolvedRoot, commandDirectory)}${workspaceOption}\``,
      );
    }
  }

  return {
    problems,
    warnings,
    projection,
    expectedStructuredText,
    managedInputsSafe: true,
  };
}

function normalizeRequestedPcrs(value) {
  if (value === undefined) {
    return [];
  }
  if (!Array.isArray(value) || value.length === 0 || value.some((entry) => typeof entry !== "string" || !entry.trim())) {
    throw new Error("--pcr must be supplied one or more times with non-empty PCR directory paths");
  }
  return value;
}

function selectedPcrDirectories({ root, pcrRoot, requestedPcrs, problems }) {
  const selected = new Set();
  for (const requestedPath of requestedPcrs) {
    const candidate = path.resolve(root, requestedPath);
    const relative = path.relative(pcrRoot, candidate);
    const segments = relative.split(path.sep);
    if (path.isAbsolute(relative) || segments.length !== 3 || segments.some((segment) => !segment || segment === "." || segment === "..")) {
      problems.push(`Requested PCR must be a direct library/pcrs/<domain>/<subdomain>/<slug> directory: ${requestedPath}`);
      continue;
    }
    if (!existsSync(candidate) || !lstatSync(candidate).isDirectory() || lstatSync(candidate).isSymbolicLink()) {
      problems.push(`Requested PCR directory is missing or not canonical: ${requestedPath}`);
      continue;
    }
    selected.add(candidate);
  }
  return [...selected].sort();
}

export function lint(options) {
  const root = rootFromOptions(options);
  const problems = [];
  const warnings = [];
  const requestedPcrs = normalizeRequestedPcrs(options.pcr);

  for (const dir of REQUIRED_DIRS) {
    const directory = path.join(root, dir);
    if (!existsSync(directory)) {
      problems.push(`Missing required directory: ${dir}`);
      continue;
    }
    const stats = lstatSync(directory);
    if (stats.isSymbolicLink() || !stats.isDirectory()) {
      problems.push(`${dir}: required path must be a canonical directory`);
    }
  }

  if (requestedPcrs.length === 0) {
    validateYamlContractFile({
    contract: "catalog.schema.json",
    sourcePath: path.join(root, "library/catalog.yaml"),
    root,
    problems,
    entityKind: "PCR catalog",
    });

    const mappingRoot = path.join(root, "classifications/mappings");
    if (existsSync(mappingRoot)) {
    const mappingRootStats = lstatSync(mappingRoot);
    if (mappingRootStats.isSymbolicLink() || !mappingRootStats.isDirectory()) {
      problems.push("classifications/mappings: mapping root must be a canonical directory");
    } else {
      for (const fileName of readdirSync(mappingRoot).filter((entry) => /\.ya?ml$/u.test(entry)).sort()) {
        validateYamlContractFile({
          contract: "classification-mapping.schema.json",
          sourcePath: path.join(mappingRoot, fileName),
          root,
          problems,
          entityKind: "classification mapping",
        });
      }
    }
    }
  }

  const pcrRoot = path.join(root, "library/pcrs");
  const directories = requestedPcrs.length === 0
    ? discoverCanonicalPcrDirectories(pcrRoot, problems, root)
    : selectedPcrDirectories({ root, pcrRoot, requestedPcrs, problems });
  for (const directory of directories) {
    const result = inspectPcrDirectory({ root, pcrDir: directory });
    problems.push(...result.problems);
    warnings.push(...result.warnings);
    if (!result.managedInputsSafe) {
      continue;
    }

    const state = inspectPublishedRevisionState({ root, pcrDir: directory });
    problems.push(...state.problems);
    warnings.push(...state.warnings);
    if (state.revision) {
      const revisionResult = inspectPcrDirectory({
        root,
        pcrDir: state.revision.revisionDir,
        manifestFileName: "manifest.next.yaml",
      });
      problems.push(...revisionResult.problems);
      warnings.push(...revisionResult.warnings);
    }
  }

  if (problems.length > 0) {
    throw new Error(`PCR library lint failed.\n${problems.map((problem) => `- ${problem}`).join("\n")}`);
  }

  if (warnings.length > 0) {
    return [
      "PCR library lint passed with warnings.",
      "",
      "Warnings:",
      ...warnings.map((warning) => `- ${warning}`),
      "",
      "Next:",
      "- Add Range/数量范围 blocks for important flows. Use reasoned_estimate when stronger evidence is not available yet.",
    ];
  }

  return ["PCR library lint passed."];
}
