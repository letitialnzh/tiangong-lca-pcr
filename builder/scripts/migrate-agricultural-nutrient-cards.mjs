import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const PCR_ROOT = path.join(ROOT, "library/pcrs");
const SET_ID = "flow-set.agricultural-nutrient-supply";
const SET_VERSION = "0.3.0";
const write = process.argv.includes("--write");

function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(target);
    return entry.isFile() && entry.name === "pcr.en-US.md" ? [target] : [];
  });
}

function headingId(line) {
  const values = [...line.matchAll(/`([^`]+)`/gu)];
  return values.at(-1)?.[1] ?? "";
}

function cards(markdown) {
  const lines = markdown.split("\n");
  const result = [];
  let processId = "";
  let direction = "";
  let flowType = "";
  for (let index = 0; index < lines.length; index += 1) {
    if (/^###\s+(?:Process|过程)[:：]/u.test(lines[index])) processId = headingId(lines[index]);
    if (/^####\s+(?:Inputs|输入|投入)$/u.test(lines[index])) direction = "inputs";
    if (/^####\s+(?:Outputs|输出|产出)$/u.test(lines[index])) direction = "outputs";
    if (/^#####\s+(?:Product flows|产品流)$/u.test(lines[index])) flowType = "product";
    if (/^#####\s+(?:Waste flows|废物流)$/u.test(lines[index])) flowType = "waste";
    if (/^#####\s+(?:Elementary flows|基本流)$/u.test(lines[index])) flowType = "elementary";
    if (!/^######\s+/u.test(lines[index])) continue;
    let end = index + 1;
    while (end < lines.length && !/^#{1,6}\s+/u.test(lines[end])) end += 1;
    result.push({ start: index, end, processId, direction, flowType, rowId: headingId(lines[index]), lines: lines.slice(index, end) });
    index = end - 1;
  }
  return { lines, cards: result };
}

function plain(value) {
  return String(value ?? "").replaceAll("`", "").trim();
}

function topField(card, names) {
  for (const line of card.lines) {
    const match = line.match(/^-\s+([^:：]+)[:：]\s*(.*)$/u);
    if (match && names.includes(match[1].trim())) return match[2].trim();
  }
  return "";
}

function sourceIds(card) {
  const value = topField(card, ["Sources", "来源"]);
  const coded = [...value.matchAll(/`([^`]+)`/gu)].map((match) => match[1].trim());
  if (coded.length) return coded;
  return plain(value).split(/[;,]/u).map((part) => part.trim()).filter(Boolean);
}

function rangeBlocks(card) {
  const blocks = [];
  for (let index = 0; index < card.lines.length; index += 1) {
    if (!/^-\s+(?:Range|数量范围)[:：]/u.test(card.lines[index])) continue;
    let end = index + 1;
    while (end < card.lines.length && !/^-\s+/u.test(card.lines[end]) && !/^#{1,6}\s+/u.test(card.lines[end])) end += 1;
    blocks.push(card.lines.slice(index, end).join("\n").trimEnd());
    index = end - 1;
  }
  return blocks;
}

function isNutrientCard(card) {
  if (card.direction !== "inputs" || card.flowType !== "product") return false;
  const body = card.lines.join("\n");
  if (body.includes(SET_ID)) return true;
  const role = [card.rowId, card.lines[0], topField(card, ["Selected flow", "选定流"])].join(" ");
  if (body.includes("flow-set.water-use") || /(irrigation|water|灌溉|供水|用水)/iu.test(role)) return false;
  if (/(crop.?protection|植保|农药|pesticide)/iu.test(role)) return false;
  if (/(energy|fuel|machinery|能源|燃料|机械)/iu.test(role)) return false;
  if (/(fertili[sz]|nutrient|养分|肥料|施肥)/iu.test(role)) return true;
  return /(organic[_ -]?(?:nutrient|amendment)|manure|compost|digestate|有机肥|堆肥|粪肥)/iu.test(role);
}

function localizedCard(language, processId, group, rowIdOverride = "") {
  const first = group[0];
  const normalization = topField(first, language === "en" ? ["Normalization basis"] : ["归一化基准"]);
  const basisKind = topField(first, language === "en" ? ["Basis kind"] : ["基准类型"]);
  const protocol = topField(first, language === "en" ? ["Collection protocol"] : ["采集协议"]);
  const sources = [...new Set(group.flatMap(sourceIds))];
  const ranges = group.flatMap(rangeBlocks);
  const rowId = rowIdOverride || `${processId || "process"}_agricultural_nutrient_inputs`;
  const core = language === "en" ? [
    `###### Agricultural nutrient and fertilizer inputs (\`${rowId}\`)`,
    "",
    "Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.",
    "",
    "- Selected flow: Agricultural nutrient and fertilizer supply",
    "- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable",
    "- Binding: `parameterized`",
    `- Flow Set: \`${SET_ID}\``,
    `- Flow Set version: \`${SET_VERSION}\``,
    "- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.",
    "- Value mode: Foreground record (`foreground_record`)",
    "- Specificity: Site-specific (`site_specific`)",
    `- Normalization basis: ${plain(normalization) || "the quantitative reference of the same process and reporting period"}`,
    `- Basis kind: ${basisKind || "Process output (`process_output`)"}`,
    "- Evidence kind: Collected record (`collected_record`)",
    ...(protocol ? [`- Collection protocol: ${protocol}`] : []),
    `- Sources:${sources.length ? ` ${sources.map((id) => `\`${id}\``).join("; ")}` : ""}`,
  ] : [
    `###### 农业养分与肥料投入（\`${rowId}\`）`,
    "",
    "本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。",
    "",
    "- 选定流：农业养分与肥料供应",
    "- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O",
    "- 绑定模式：`parameterized`",
    `- Flow Set：\`${SET_ID}\``,
    `- Flow Set version：\`${SET_VERSION}\``,
    "- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。",
    "- 数值来源模式：前景记录（`foreground_record`）",
    "- 适用范围：场址特定（`site_specific`）",
    `- 归一化基准：${plain(normalization) || "同一过程和报告期的定量参考"}`,
    `- 基准类型：${basisKind || "过程输出（`process_output`）"}`,
    "- 证据类型：采集记录（`collected_record`）",
    ...(protocol ? [`- 采集协议：${protocol}`] : []),
    `- 来源：${sources.length ? sources.map((id) => `\`${id}\``).join("; ") : ""}`,
  ];
  if (ranges.length) core.push(...ranges.flatMap((range) => [range, ""]));
  return core.join("\n").trimEnd().split("\n");
}

function migrate(markdown, targetRowIds, language, desiredRowIds = []) {
  const parsed = cards(markdown);
  const selected = parsed.cards.filter((card) => targetRowIds.has(card.rowId));
  const byProcess = new Map();
  for (const card of selected) {
    if (!byProcess.has(card.processId)) byProcess.set(card.processId, []);
    byProcess.get(card.processId).push(card);
  }
  const replacements = new Map();
  const removals = new Set();
  let groupIndex = 0;
  for (const [processId, group] of byProcess) {
    replacements.set(group[0].start, localizedCard(language, processId, group, desiredRowIds[groupIndex] ?? ""));
    for (const card of group.slice(1)) removals.add(card.start);
    groupIndex += 1;
  }
  const cardByStart = new Map(parsed.cards.map((card) => [card.start, card]));
  const output = [];
  for (let index = 0; index < parsed.lines.length;) {
    const card = cardByStart.get(index);
    if (!card) { output.push(parsed.lines[index]); index += 1; continue; }
    if (replacements.has(index)) output.push(...replacements.get(index), "");
    else if (!removals.has(index)) output.push(...card.lines);
    index = card.end;
  }
  return { markdown: output.join("\n"), selected, processCount: byProcess.size };
}

const report = { write, pcrs: 0, old_cards: 0, new_cards: 0, newly_bound: [], missing_zh_rows: [], changed_files: [] };
for (const englishPath of markdownFiles(PCR_ROOT)) {
  const english = readFileSync(englishPath, "utf8");
  const parsedEnglish = cards(english);
  const targetCards = parsedEnglish.cards.filter(isNutrientCard);
  if (!targetCards.length) continue;
  const targetRowIds = new Set(targetCards.map((card) => card.rowId));
  for (const card of targetCards.filter((entry) => !entry.lines.join("\n").includes(SET_ID))) {
    report.newly_bound.push({ pcr: path.basename(path.dirname(englishPath)), process: card.processId, row: card.rowId });
  }
  const chinesePath = path.join(path.dirname(englishPath), "pcr.zh-CN.md");
  const chinese = readFileSync(chinesePath, "utf8");
  const parsedChinese = cards(chinese);
  const chineseTargetIds = new Set(parsedChinese.cards.filter(isNutrientCard).map((card) => card.rowId));
  const migratedEnglish = migrate(english, targetRowIds, "en");
  const desiredChineseIds = cards(migratedEnglish.markdown).cards.filter(isNutrientCard).map((card) => card.rowId);
  const migratedChinese = migrate(chinese, chineseTargetIds, "zh", desiredChineseIds);
  const finalChineseIds = new Set(cards(migratedChinese.markdown).cards.map((card) => card.rowId));
  const missing = [...targetRowIds].filter((id) => !finalChineseIds.has(id) && !(migratedChinese.markdown.includes(id) && migratedChinese.markdown.includes(SET_ID)));
  if (missing.length) report.missing_zh_rows.push({ pcr: path.relative(PCR_ROOT, path.dirname(englishPath)), rows: missing });
  if (migratedEnglish.markdown !== english) {
    report.changed_files.push(path.relative(ROOT, englishPath));
    if (write) writeFileSync(englishPath, migratedEnglish.markdown);
  }
  if (migratedChinese.markdown !== chinese) {
    report.changed_files.push(path.relative(ROOT, chinesePath));
    if (write) writeFileSync(chinesePath, migratedChinese.markdown);
  }
  report.pcrs += 1;
  report.old_cards += targetCards.length;
  report.new_cards += migratedEnglish.processCount;
}
console.log(JSON.stringify(report, null, 2));
