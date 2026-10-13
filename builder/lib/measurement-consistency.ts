import { parsePcrMarkdownToStructured, type PcrMarkdownProjection, type InventoryFlow, type CalculationRule } from "./markdown-projection.ts";

export type MeasurementInput = string | Partial<PcrMarkdownProjection> | null | undefined;
interface Basis { kind: 'reference' | 'item' | 'quantity'; amount?: string | null; unit?: string; source?: 'item' | null | undefined }
interface Reference { amount: string | null; unit: string }
interface InventoryRow { process_id: string; direction: 'inputs' | 'outputs'; flow_type: 'product' | 'waste' | 'elementary'; row: InventoryFlow }
interface MassDefinition { valid: boolean; code: string | null; rule_id?: string | undefined; protocol_id?: string | undefined; severity?: 'manual_review'; signature?: string }
interface Conversion { rule_id: string; direction: string; grammar_complete: boolean; variables: { q_item: string | null | undefined; q_ref: string | null | undefined }; rule: CalculationRule }
export interface MeasurementContext { language: string; process_id?: string; row_id?: string; rule_id?: string | undefined; protocol_id?: string | undefined }
export interface MeasurementFinding extends MeasurementContext { code: string; severity: 'error' | 'manual_review'; message: string }
export interface MeasurementCheck extends MeasurementContext { check: string }
export interface SkippedMeasurementCheck extends MeasurementCheck { reason: string }
export interface MeasurementReport { check_version: number; status: 'pass' | 'error' | 'manual_review'; findings: MeasurementFinding[];
 coverage: { performed: MeasurementCheck[]; skipped: SkippedMeasurementCheck[]; complete: boolean; counts: { languages: number; inventory_rows: number; performed: number; skipped: number } } }
interface RowSummary { context: MeasurementContext; basis: Basis | null; collection_basis: Basis | null; conversions: Conversion[] }
interface MeasurementSummary { reference: Reference | null; mass: MassDefinition; rows: Map<string, RowSummary> }

/**
 * Builder-only, finite measurement recognizers; this is not a mathematics engine.
 *
 * Supported reference quantities: a positive decimal number or the case-sensitive
 * symbol M. Units are compared literally (with kg/千克/公斤 and item/件 aliases),
 * never converted or inferred from an inventory exchange's numerator unit.
 *
 * Supported bases: "per [declared] reference flow", "per N unit [reference flow]",
 * "per [one] accepted [finished] machine/baler/unit", and their Chinese equivalents.
 * A final basis may append "; collected per one accepted finished baler" (Chinese:
 * "；采集基准为每台验收成品打捆机"). Arbitrary additional prose is not accepted.
 *
 * M kg requires a measurement-rule definition of M as the accepted net mass of
 * one complete machine of the same configuration, naming a collection protocol.
 * That protocol must collect configuration and accepted net mass, in kg, using
 * calibrated weighing or traceable weighing/acceptance records.
 * Canonical clauses are "M = accepted net mass of one complete baler of the same
 * configuration in kg; collect using cp_mass" or "M = 同一配置的一台完整打捆机的
 * 验收净质量，单位 kg；采用 cp_mass 采集". The recognizers below enumerate the small
 * machine-name/wording variants. Methods start with "Weigh the accepted complete
 * baler on a calibrated scale" (optional exclusion of transport packaging and a
 * same-configuration acceptance-record reconciliation), or "Use traceable
 * acceptance records for the accepted complete baler of the same configuration".
 * Chinese equivalents are enumerated below. Unknown clauses require review.
 * Its aggregation repeats the supported M declaration or states "accepted net
 * mass per machine" (baler/unit variants; Chinese "每台验收净质量"). It cannot
 * contradict the declared net mass or append an alternative calculation.
 *
 * The only accepted item-to-mass conversion is q_ref = q_item / M. The calculation
 * rule contains exactly three clauses: that algebraic assignment, one q_item
 * definition as per accepted machine and one q_ref definition as per 1 kg reference
 * flow. Inputs are bare q_item, M and the mass-protocol id (additional declared
 * collection-protocol ids are allowed, without duplicates or prose). It outputs
 * exactly q_ref, and names the
 * row id, a comma/semicolon-separated row-id list, or "all inventory rows" in
 * Applies to. Exclusions and other prose are not positive scope evidence.
 * Each applicable inventory row uses "Apply <rule_id> to q_item" in
 * amount.expression (Chinese: "对 q_item 应用 <rule_id>" or "按 <rule_id> 将 q_item
 * 换算为 q_ref"). Optional following clauses contain only declared measurement
 * rule/protocol identifiers. No other operation or directive is accepted as an
 * application merely because it contains the rule id. Symbols stay unchanged in
 * both languages. Variable definitions use "exchange amount per ..." or
 * "每...的交换数量", with no unrecognized tail. An unrelated formula or a bare
 * "normalize"/"M" is not evidence. Every named calculation rule is inspected;
 * unsupported symbols cannot bypass checking. M has one unambiguous definition.
 * An inventory amount using reserved q_item/q_ref/M symbols without a named
 * supported application requires review; ordinary numerator descriptions remain
 * free, and completed reference outputs keep their exact quantity/unit grammar.
 *
 * The completed output linked by functionalUnit.reference_flow_link (or the exact
 * product UUID) must explicitly declare the reference amount and unit, e.g. "M kg"
 * or "1 kg". General formula solving and physical plausibility are out of scope.
 * For other rows, linked collection aggregation must use a supported explicit
 * basis or "quantity / accepted balers" (machines/units/items and Chinese
 * equivalents are accepted). A collected item denominator requires the same
 * conversion chain as an item inventory basis. Other aggregation prose is review.
 * Unknown or absent semantics yield manual_review, never a vacuous pass.
 */

// The shared projection parser has deliberately not changed. This finite adapter
// supplies localized measurement table keys that it does not yet project. It is
// used only for canonical Markdown input, not generated structured.yaml content.
const TABLE_ALIASES = new Map(Object.entries({
  "参考数量": "Reference amount", "参考产品流": "Reference product flow",
  "参考流属性": "Reference flow property", "参考单位组": "Reference unit group",
  "参考单位": "Reference unit", "必需限定信息": "Required qualifiers",
  "流角色": "flow_role", "记录类型": "record_type", "原始字段": "raw_fields",
  "采集方法": "collection_method", "单位": "unit", "频率": "frequency",
  "时间覆盖": "temporal_coverage", "场址范围": "site_scope", "汇总规则": "aggregation_rule",
  "质量证据": "quality_evidence", "公式或规则": "Formula or rule", "输入": "Inputs", "输出": "Output",
}));

function projection(value: MeasurementInput): Partial<PcrMarkdownProjection> | null | undefined {
  if (typeof value !== "string") return value;
  const adapted = value.split("\n").map((line) => {
    if (!/^\s*\|/u.test(line)) return line;
    return line.split("|").map((cell) => {
      const alias = TABLE_ALIASES.get(cell.trim());
      return alias ? " " + alias + " " : cell;
    }).join("|");
  }).join("\n");
  return parsePcrMarkdownToStructured(adapted);
}

function clean(value: unknown): string {
  return String(value ?? "").normalize("NFKC").trim().replace(/\s+/gu, " ").replace(/[。.]$/u, "");
}

function unit(value: unknown): string {
  const text = clean(value);
  return ({ "千克": "kg", "公斤": "kg", "件": "item", "个": "item" } as Record<string, string>)[text] ?? text;
}

function quantity(value: unknown): string | null {
  const text = clean(value);
  if (text === "M") return "M";
  if (/^(?:\d+(?:\.\d+)?|\.\d+)$/u.test(text) && Number(text) > 0) return String(Number(text));
  return null;
}

function hasToken(text: unknown, token: string): boolean {
  return String(text ?? "").split(/[^A-Za-z0-9_]+/u).includes(token);
}

function inventoryRows(value: Partial<PcrMarkdownProjection> | null | undefined): InventoryRow[] {
  return (value?.processInventory ?? []).flatMap((process) =>
    (["inputs", "outputs"] as const).flatMap((direction) =>
      (["product", "waste", "elementary"] as const).flatMap((flowType) =>
        (process[direction]?.[flowType] ?? []).map((row) => ({
          process_id: process.id, direction, flow_type: flowType, row,
        })),
      ),
    ),
  );
}

function itemBasis(value: unknown): boolean {
  const text = clean(value);
  if (/^(?:(?:per )?(?:one |1 )?|per )(?:(?:coated|accepted|finished|complete|configured) )*(?:baler|machine|unit|item)$/iu.test(text)) return true;
  return /^(?:每(?:一)?台|一台|每个|一个)(?:已涂装|涂装|验收|合格|成品|完整|已验收|的)*(?:打捆机|机器|设备|单元)$/u.test(text);
}

function basis(value: unknown): Basis | null {
  const text = clean(value);
  const parts = text.split(/;\s*collected\s+|;\s*采集基准为/u);
  if (parts.length > 2) return null;
  let result: Basis | null = null;
  if (/^(?:per (?:the )?(?:declared )?reference flow|每(?:个|一)?(?:声明的)?参考流)$/iu.test(parts[0] ?? "")) {
    result = { kind: "reference" };
  } else if (itemBasis(parts[0])) {
    result = { kind: "item" };
  } else {
    const match = (parts[0] ?? "").match(/^(?:per\s+|每\s*)(M|\d+(?:\.\d+)?)\s*([A-Za-z][A-Za-z0-9]*|千克|公斤|件)(?:\s+(?:reference flow|declared product|reference product|accepted product|product)|\s*(?:参考流|参考产品|产品))?$/iu);
    if (match && quantity(match[1])) result = { kind: "quantity", amount: quantity(match[1]), unit: unit(match[2]) };
  }
  if (!result || (parts.length === 2 && !itemBasis(parts[1]))) return null;
  return { ...result, source: parts.length === 2 ? "item" : null };
}

function containsItemBasis(value: unknown): boolean {
  const text = clean(value);
  return /\bper\s+(?:(?:one|1|coated|accepted|finished|complete|configured)\s+)*(?:baler|machine|unit|item)\b/iu.test(text) || /每(?:一)?台(?:已涂装|验收|合格|成品|完整|已验收|的)*(?:打捆机|机器|设备)/u.test(text);
}

function collectionBasis(value: unknown): Basis | null {
  const text = clean(value);
  const direct = basis(text);
  if (direct) return direct;
  if (/\b(?:not|never|without)\b|不得|不要|禁止/iu.test(text)) return null;
  const ratio = text.match(/^[^/]+\/\s*([^/]+)$/u);
  if (!ratio) return null;
  const denominator = clean(ratio[1]);
  const english = denominator.match(/^((?:coated )?accepted (?:finished )?)(balers|machines|units|items)(?: of the (?:same|exact|declared) configuration)?$/iu);
  if (english) return basis("per one " + english[1] + (english[2] ?? "").slice(0, -1));
  if (/^(?:(?:同一|相同|声明|确切)配置的)?(?:已涂装|涂装)?(?:验收|已验收)(?:成品)?(?:打捆机|机器|设备|单元)(?:数|数量)?$/u.test(denominator)) {
    return { kind: "item", source: null };
  }
  return basis("per " + denominator);
}

function clauses(value: unknown): string[] {
  return clean(value).split(/[;；。]|\.(?=\s|$)/u).map(clean).filter(Boolean);
}

function supportedMassDeclaration(value: string | undefined): boolean {
  return /^M\s*=\s*(?:accepted net mass|net accepted mass) of (?:one|1) (?:(?:complete|accepted|finished) )*(?:baler|machine|unit) of the (?:same|exact|matching) (?:declared )?configuration(?: in kg)?$/u.test(value ?? "") ||
    /^M\s*=\s*(?:同一|相同|确切|匹配)(?:的)?配置的(?:一台|一个)(?:完整|验收|成品|的)*(?:打捆机|机器|设备|单元)的(?:验收净质量|净验收质量)(?:,单位\s*kg)?$/u.test(value ?? "");
}

function grossMassConflict(value: unknown): boolean {
  return clauses(value).some((part) =>
    /^M\s*=\s*gross\b|\buse gross (?:packaged )?mass\b|^M\s*=.*(?:包装总质量|毛质量)|(?:使用|采用)(?:包装总质量|毛质量)/iu.test(part),
  );
}

function massMethod(value: string): "supported" | "incomplete" | "unsupported" {
  const parts = clauses(value);
  const operation = parts[0] ?? "";
  const weighing = /^Weigh (?:the )?accepted (?:complete |finished )?(?:baler|machine|unit) (?:on|using) a calibrated (?:platform )?scale(?:, excluding transport packaging)?$/iu.test(operation) ||
    /^(?:使用|采用)经校准的秤称量已验收的(?:完整|成品)(?:打捆机|机器|设备)(?:,排除运输包装)?$/u.test(operation);
  const records = /^Use (?:traceable|controlled) (?:weighing|acceptance) records for the accepted (?:complete |finished )?(?:baler|machine|unit) of the same configuration$/iu.test(operation) ||
    /^(?:使用|采用)(?:可追溯|受控)的(?:称重|验收质量)记录核对同一配置的验收(?:打捆机|机器|设备)$/u.test(operation);
  const qualifiers = parts.slice(1).every((part) =>
    /^reconcile the (?:same|exact|matching) configuration and acceptance record$/iu.test(part) ||
    /^核对(?:同一|相同|确切)配置和验收记录$/u.test(part),
  );
  if ((weighing || records) && qualifiers) return "supported";
  if (/\b(?:uncalibrated|uncontrolled|do not|must not|never)\b|未经校准|未校准|未受控|不得|不要|禁止/iu.test(value ?? "") ||
      !/\b(?:weigh\w*|scale|weighing|acceptance)\b|称量|称重|秤|验收/iu.test(value)) return "incomplete";
  return "unsupported";
}

function massDefinition(parsed: Partial<PcrMarkdownProjection>): MassDefinition {
  const candidates = (parsed.measurementRules ?? []).filter((rule) => clauses(rule.rule).some((part) => /^M\s*=/u.test(part)));
  const declarations = candidates.flatMap((rule) => clauses(rule.rule)
    .filter((part) => /^M\s*=/u.test(part)).map((value) => ({ value, rule_id: rule.id })));
  const conflict = candidates.find((rule) => grossMassConflict(rule.rule));
  if (conflict) return { valid: false, code: "MEASUREMENT_MASS_DEFINITION_CONFLICT", rule_id: conflict.id };
  if (declarations.length > 1) return {
    valid: false, severity: "manual_review", code: "MEASUREMENT_MASS_DEFINITION_UNSUPPORTED", rule_id: declarations[1]?.rule_id,
  };
  const defining = candidates.find((rule) => /^(?:reference (?:product|flow)|参考(?:产品|流)|M)$/iu.test(clean(rule.applies_to)) && unit(rule.required_unit) === "kg");
  if (!defining) return { valid: false, code: "MEASUREMENT_MASS_VARIABLE_UNDEFINED", rule_id: candidates[0]?.id };
  const parts = clauses(defining.rule);
  const definition = parts[0];
  const directive = parts[1]?.match(/^(?:collect|measure|determine)(?: M)? (?:using|with) ([a-z][a-z0-9_]*)$/iu) ??
    parts[1]?.match(/^(?:采用|使用)\s*([a-z][a-z0-9_]*)\s*(?:采集|称量|确定)(?:\s*M)?$/u);
  if (!supportedMassDeclaration(definition) || parts.length > 2 || (parts.length === 2 && !directive)) return {
    valid: false, severity: "manual_review", code: "MEASUREMENT_MASS_DEFINITION_UNSUPPORTED", rule_id: defining.id,
  };
  const protocol = (parsed.collectionProtocols ?? []).find((entry) => entry.protocol_id === directive?.[1]);
  const aggregation = clean(protocol?.aggregation_rule);
  if (grossMassConflict(aggregation)) return {
    valid: false, code: "MEASUREMENT_MASS_DEFINITION_CONFLICT", rule_id: defining.id, protocol_id: protocol?.protocol_id,
  };
  const rawFields = String(protocol?.raw_fields ?? "").split(/[;,；，]/u).map(clean);
  const fieldsComplete = rawFields.some((field) => /^(?:configuration|model\/configuration|配置|型号\/配置)$/iu.test(field)) &&
    rawFields.some((field) => /^(?:accepted net mass|net accepted mass|验收净质量|净验收质量)(?:\s*M)?$/iu.test(field));
  let method = protocol && unit(protocol.unit) === "kg" && fieldsComplete && aggregation ? massMethod(protocol.collection_method) : "incomplete";
  const aggregationSupported = supportedMassDeclaration(aggregation) ||
    /^(?:accepted net mass|net accepted mass) per (?:machine|baler|unit)$/u.test(aggregation) || /^每台验收净质量$/u.test(aggregation);
  if (method === "supported" && !aggregationSupported) method = "unsupported";
  return {
    valid: method === "supported",
    ...(method === "unsupported" ? { severity: "manual_review" } : {}),
    code: method === "supported" ? null : method === "unsupported" ? "MEASUREMENT_MASS_PROTOCOL_UNSUPPORTED" : "MEASUREMENT_MASS_PROTOCOL_INCOMPLETE",
    rule_id: defining.id, protocol_id: protocol?.protocol_id,
    signature: "M:accepted_net_mass:kg:same_configuration",
  };
}

function variableBasis(rule: unknown, name: string): string | null | undefined {
  const clauses = String(rule ?? "").split(/[;；。\n]|\.(?=\s|$)/u).map(clean);
  const definitions = clauses.filter((clause) => clause.startsWith(name + " =") || clause.startsWith(name + "="));
  const recognized: string[] = [];
  for (const definition of definitions) {
    const value = definition.slice(definition.indexOf("=") + 1).trim();
    // q_ref's algebraic assignment is checked by conversion(), separately from
    // its human-readable variable definition.
    if (name === "q_ref" && /\b(?:q_item|M)\b/u.test(value)) continue;
    const english = value.match(/^(?:exchange )?(?:amount|quantity) (per .+)$/iu);
    const chinese = value.match(/^(每.+)的(?:交换数量|交换量)$/u);
    const parsedBasis = basis(english?.[1] ?? chinese?.[1]);
    if (!parsedBasis || parsedBasis.source || !["item", "quantity"].includes(parsedBasis.kind)) return "unsupported";
    recognized.push(parsedBasis.kind === "item" ? "item" : parsedBasis.amount + ":" + parsedBasis.unit);
  }
  return recognized.length === 1 ? recognized[0] : recognized.length > 1 ? "unsupported" : null;
}

function conversion(rule: CalculationRule): Conversion {
  const clauses = String(rule.rule ?? "").split(/[;；。\n]|\.(?=\s|$)/u).map(clean).filter(Boolean);
  const assignments = clauses.filter((clause) => /^q_ref\s*=/u.test(clause) && /\b(?:q_item|M)\b/u.test(clause));
  const itemDefinitions = clauses.filter((clause) => /^q_item\s*=/u.test(clause));
  const referenceDefinitions = clauses.filter((clause) => /^q_ref\s*=/u.test(clause) && !assignments.includes(clause));
  const assignment = assignments.length === 1 ? assignments[0] : null;
  const expression = assignment?.replace(/^q_ref\s*=\s*/u, "").replace(/\s+/gu, "") ?? null;
  const direction = expression === "q_item/M" ? "item_to_kg"
    : ["M/q_item", "q_item*M", "M*q_item"].includes(expression ?? "") ? (expression ?? 'unsupported') : "unsupported";
  return {
    rule_id: rule.id, direction,
    grammar_complete: clauses.length === 3 && assignments.length === 1 &&
      itemDefinitions.length === 1 && referenceDefinitions.length === 1,
    variables: { q_item: variableBasis(rule.rule, "q_item"), q_ref: variableBasis(rule.rule, "q_ref") },
    rule,
  };
}

function scopeRelation(rule: CalculationRule, rowId: string): "included" | "excluded" | "unsupported" {
  const scope = clean(rule.applies_to);
  if (/^(?:all (?:foreground )?(?:inventory rows|exchanges)|所有(?:前景)?(?:清单行|库存行|交换))$/iu.test(scope)) return "included";
  if (/^[a-z][a-z0-9_]*(?:\s*[,;]\s*[a-z][a-z0-9_]*)*$/u.test(scope)) {
    return scope.split(/[,;]/u).map(clean).includes(rowId) ? "included" : "excluded";
  }
  const exclusion = scope.match(/^(?:all (?:foreground )?(?:inventory rows|exchanges) except)\s+(.+)$/iu);
  if (exclusion && hasToken(exclusion[1], rowId)) return "excluded";
  return "unsupported";
}

function supportedApplication(expression: unknown, ruleId: string, parsed: Partial<PcrMarkdownProjection>): boolean {
  const parts = clauses(expression);
  const application = parts[0]?.match(/^Apply ([a-z][a-z0-9_]*) to q_item$/iu) ??
    parts[0]?.match(/^对\s*q_item\s*应用\s*([a-z][a-z0-9_]*)$/u) ??
    parts[0]?.match(/^按\s*([a-z][a-z0-9_]*)\s*将\s*q_item\s*换算为\s*q_ref$/u);
  if (application?.[1] !== ruleId) return false;
  const contextIds = new Set([
    ...(parsed.measurementRules ?? []).map((rule) => rule.id),
    ...(parsed.collectionProtocols ?? []).map((protocol) => protocol.protocol_id),
  ]);
  return parts.slice(1).every((part) => contextIds.has(part));
}

function conversionInputs(rule: CalculationRule, massProtocolId: string | undefined, parsed: Partial<PcrMarkdownProjection>): "incomplete" | "supported" | "unsupported" {
  const inputs = (rule.inputs ?? []).flatMap((input) => String(input).split(/[;,；，]/u)).map(clean);
  if (!massProtocolId || !["q_item", "M", massProtocolId].every((required) => inputs.includes(required))) return "incomplete";
  const allowed = new Set(["q_item", "M", ...(parsed.collectionProtocols ?? []).map((protocol) => protocol.protocol_id)]);
  return inputs.every((input) => allowed.has(input)) && new Set(inputs).size === inputs.length ? "supported" : "unsupported";
}

function outputAmount(expression: unknown): Reference | null {
  const match = clean(expression).match(/^(M|\d+(?:\.\d+)?)\s+([A-Za-z][A-Za-z0-9]*|千克|公斤|件)$/u);
  return match && quantity(match[1]) ? { amount: quantity(match[1]), unit: unit(match[2]) } : null;
}

function referenceMatchesBasis(reference: Reference, rowBasis: Basis): boolean {
  return rowBasis.kind === "reference" ||
    (rowBasis.kind === "quantity" && rowBasis.amount === reference.amount && rowBasis.unit === reference.unit) ||
    (rowBasis.kind === "item" && ((reference.amount === "M" && reference.unit === "kg") || (reference.amount === "1" && reference.unit === "item")));
}

function comparableBasis(rowBasis: Basis | null, reference: Reference | null): Basis | null {
  if (rowBasis?.kind === "reference" && reference?.amount && reference?.unit) {
    return { kind: "quantity", ...reference, source: rowBasis.source };
  }
  return rowBasis;
}

/** Accept canonical Markdown strings or parsePcrMarkdownToStructured result objects. */
export function checkMeasurementConsistency({ english, chinese }: { english?: MeasurementInput; chinese?: MeasurementInput } = {}): MeasurementReport {
  const findings: MeasurementFinding[] = [];
  const performed: MeasurementCheck[] = [];
  const skipped: SkippedMeasurementCheck[] = [];
  const summaries = new Map<string, MeasurementSummary>();
  let inventoryCount = 0;
  let languageCount = 0;
  const findingKeys = new Set();
  const finding = (severity: "error" | "manual_review", code: string, message: string, context: MeasurementContext) => {
    const key = JSON.stringify([code, context]);
    if (findingKeys.has(key)) return;
    findingKeys.add(key);
    findings.push({ code, severity, message, ...context });
  };
  const record = (check: string, context: MeasurementContext) => performed.push({ check, ...context });
  const review = (check: string, code: string, message: string, context: MeasurementContext) => {
    skipped.push({ check, reason: message, ...context });
    finding("manual_review", code, message, context);
  };

  for (const [language, input] of [["en-US", english], ["zh-CN", chinese]] as const) {
    const context = { language };
    const parsed = projection(input);
    if (!parsed) {
      review("language_measurement", "MEASUREMENT_LANGUAGE_MISSING", "Canonical language input is unavailable.", context);
      continue;
    }
    languageCount += 1;
    const sourceReference = parsed.referenceFlowDefinition;
    const reference = sourceReference ? { amount: quantity(sourceReference.reference_amount), unit: unit(sourceReference.reference_unit) } : null;
    const rows = inventoryRows(parsed);
    inventoryCount += rows.length;
    const mass = massDefinition(parsed);
    const summary: MeasurementSummary = { reference, mass, rows: new Map() };
    summaries.set(language, summary);
    if (!reference?.amount || !reference?.unit) {
      review("reference_quantity", "MEASUREMENT_REFERENCE_UNSUPPORTED", "Reference quantity or unit is absent or outside the supported numeric/M grammar.", context);
    } else record("reference_quantity", context);
    if (!rows.length) review("inventory_basis", "MEASUREMENT_INVENTORY_MISSING", "No inventory rows are available for measurement checking.", context);
    let massChecked = false;
    const checkMass = () => {
      if (massChecked) return;
      massChecked = true;
      const massContext = { ...context, ...(mass.rule_id ? { rule_id: mass.rule_id } : {}) };
      const messages: Record<string, string> = {
        MEASUREMENT_MASS_VARIABLE_UNDEFINED: "Define M as accepted net mass in kg of one complete machine of the same configuration and name its collection protocol.",
        MEASUREMENT_MASS_PROTOCOL_INCOMPLETE: "The M definition needs a linked kg collection protocol with configuration, accepted net mass, and calibrated weighing or traceable acceptance records.",
        MEASUREMENT_MASS_PROTOCOL_UNSUPPORTED: "Use a supported calibrated-weighing or traceable-record method without alternative or unrecognized clauses; this method requires review.",
        MEASUREMENT_MASS_DEFINITION_CONFLICT: "M is defined as gross or packaged mass, which conflicts with accepted net reference-product mass.",
        MEASUREMENT_MASS_DEFINITION_UNSUPPORTED: "Use one supported accepted-net-mass M declaration plus its collection-protocol directive; additional definitions, alternatives, or unknown clauses require review.",
      };
      if (mass.severity === "manual_review") review("mass_collection", massCode(mass), massMessage(messages, mass), massContext);
      else {
        record("mass_collection", massContext);
        if (!mass.valid) finding("error", massCode(mass), massMessage(messages, mass), massContext);
      }
    };
    if (reference?.amount === "M") checkMass();
    const referenceLink = clean(parsed.functionalUnit?.reference_flow_link);
    const referenceUuid = sourceReference?.product_flow?.uuid;
    const outputs = rows.filter((entry) => entry.direction === "outputs" && entry.flow_type === "product" &&
      ((referenceLink && entry.row.row_id === referenceLink) || (referenceUuid && entry.row.uuid === referenceUuid)));
    if (rows.length && outputs.length !== 1) {
      review("reference_output", "MEASUREMENT_REFERENCE_OUTPUT_UNRESOLVED", "Exactly one completed product output must be identified by reference_flow_link or the reference product UUID.", context);
    }
    for (const entry of rows) {
      const { row, process_id } = entry;
      const rowContext = { language, process_id, row_id: row.row_id };
      const rowBasis = basis(row.amount?.basis?.text);
      const expression = row.amount?.expression ?? "";
      const linked = (parsed.calculationRules ?? []).filter((rule) => hasToken(expression, rule.id));
      const conversions = linked.map(conversion);
      const isOutput = outputs.length === 1 && outputs[0] === entry;
      if (!isOutput && !linked.length && ["q_item", "q_ref", "M"].some((symbol) => hasToken(expression, symbol))) {
        review("conversion_application", "MEASUREMENT_CONVERSION_APPLICATION_UNSUPPORTED", "Reserved normalization symbols in an inventory amount require a supported linked application; an unlinked expression is not interpreted or accepted.", rowContext);
      }
      const protocolId = row.amount?.evidence?.collection_protocol_id;
      const protocol = (parsed.collectionProtocols ?? []).find((entry) => entry.protocol_id === protocolId);
      const collectedBasis = !isOutput && protocolId ? collectionBasis(protocol?.aggregation_rule) : null;
      if (!isOutput && protocolId) {
        const protocolContext = { ...rowContext, protocol_id: protocolId };
        if (!collectedBasis) review("collection_basis", "MEASUREMENT_COLLECTION_BASIS_UNSUPPORTED", "Linked collection protocol is missing or its aggregation basis is outside the supported explicit reference/item grammar.", protocolContext);
        else record("collection_basis", protocolContext);
      }
      const rowKey = [process_id, entry.direction, entry.flow_type, row.row_id].join("/");
      summary.rows.set(rowKey, { context: rowContext, basis: rowBasis, collection_basis: collectedBasis, conversions });
      if (!rowBasis) review("inventory_basis", "MEASUREMENT_BASIS_UNSUPPORTED", "Inventory normalization basis is outside the supported explicit reference/item grammar.", rowContext);
      else record("inventory_basis", rowContext);
      if (!reference?.amount || !reference?.unit) {
        skipped.push({ check: "row_reference_consistency", reason: "Reference quantity is unavailable.", ...rowContext });
        continue;
      }
      if (isOutput) {
        record("reference_output", rowContext);
        const amount = outputAmount(expression);
        const exchangeUnit = unit(row.property_unit?.split("/").at(-1));
        if (!amount) {
          if (containsItemBasis(expression) || /\bone (?:accepted |finished |complete )*(?:baler|machine)\b|一台.*(?:打捆机|机器)/iu.test(expression)) {
            finding("error", "MEASUREMENT_REFERENCE_OUTPUT_MISMATCH", "Completed reference output must state " + reference.amount + " " + reference.unit + "; a machine count does not establish the reference mass.", rowContext);
          } else review("reference_output_amount", "MEASUREMENT_REFERENCE_OUTPUT_UNSUPPORTED", "Completed reference output amount must explicitly state the reference quantity and unit.", rowContext);
        } else if (amount.amount !== reference.amount || amount.unit !== reference.unit || exchangeUnit !== reference.unit) {
          finding("error", "MEASUREMENT_REFERENCE_OUTPUT_MISMATCH", "Completed output quantity and unit must equal the declared reference flow.", rowContext);
        }
      }
      const itemSource = rowBasis?.kind === "item" || rowBasis?.source === "item" || collectedBasis?.kind === "item" || containsItemBasis(expression);
      const requiresConversion = !isOutput && itemSource && !(reference.amount === "M" && reference.unit === "kg") && !(reference.amount === "1" && reference.unit === "item");
      if (requiresConversion && !linked.length) {
        finding("error", "MEASUREMENT_CONVERSION_MISSING", "Per accepted machine inventory requires a linked, applicable conversion to the declared reference flow.", rowContext);
      }
      if (rowBasis && !referenceMatchesBasis(reference, rowBasis)) {
        // An explicitly linked item-to-kg conversion may document the collected
        // item basis; its formula then determines the final reference basis.
        if (!(rowBasis.kind === "item" && linked.length && reference.amount === "1" && reference.unit === "kg")) {
          finding("error", rowBasis.kind === "item" ? "MEASUREMENT_CONVERSION_MISSING" : "MEASUREMENT_BASIS_MISMATCH", "Inventory basis does not equal the declared reference quantity and unit.", rowContext);
        }
      }
      if (collectedBasis && !linked.length && collectedBasis.kind !== "item" && !referenceMatchesBasis(reference, collectedBasis)) {
        finding("error", "MEASUREMENT_COLLECTION_BASIS_MISMATCH", "Collection aggregation basis does not equal the declared reference flow and has no linked conversion.", { ...rowContext, protocol_id: protocolId });
      }
      for (const conversionEntry of conversions) {
        const rule = conversionEntry.rule;
        const ruleContext = { ...rowContext, rule_id: rule.id };
        const scope = scopeRelation(rule, row.row_id);
        if (scope === "excluded") finding("error", "MEASUREMENT_CONVERSION_SCOPE_MISMATCH", "Named conversion rule does not apply to this row id.", ruleContext);
        if (scope === "unsupported") review("conversion_scope", "MEASUREMENT_CONVERSION_SCOPE_UNSUPPORTED", "Use an exact row id, a comma/semicolon-separated row-id list, or all inventory rows; this scope prose requires review.", ruleContext);
        if (!supportedApplication(expression, rule.id, parsed)) {
          review("conversion_application", "MEASUREMENT_CONVERSION_APPLICATION_UNSUPPORTED", "Use an explicit positive Apply <rule_id> to q_item statement (or the supported Chinese equivalent); only declared rule/protocol identifiers may follow. Negations, alternative instructions and added operations require review.", ruleContext);
          continue;
        }
        record("conversion_application", ruleContext);
        if (!["item_to_kg", "unsupported"].includes(conversionEntry.direction)) finding("error", "MEASUREMENT_CONVERSION_DIRECTION_INVALID", "Item-to-1-kg normalization must divide q_item by M.", ruleContext);
        if (conversionEntry.direction === "unsupported" || !conversionEntry.grammar_complete) {
          review("conversion", "MEASUREMENT_CONVERSION_UNSUPPORTED", "The complete rule must contain exactly q_ref = q_item / M, one q_item basis definition and one q_ref basis definition; unknown, additional or unsupported clauses require review.", ruleContext);
          continue;
        } else {
          record("conversion", ruleContext);
        }
        checkMass();
        if (collectedBasis && collectedBasis.kind !== "item") finding("error", "MEASUREMENT_COLLECTION_BASIS_MISMATCH", "q_item must come from collection aggregated per accepted machine, before dividing by M.", { ...ruleContext, protocol_id: protocolId });
        if (reference.amount !== "1" || reference.unit !== "kg") finding("error", "MEASUREMENT_CONVERSION_TARGET_MISMATCH", "q_ref = q_item / M targets a 1 kg reference flow.", ruleContext);
        if (Object.values(conversionEntry.variables).includes("unsupported")) {
          review("conversion_variables", "MEASUREMENT_CONVERSION_VARIABLES_UNSUPPORTED", "Variable definitions must declare one exact supported item or reference basis without unrecognized alternatives or qualifiers.", ruleContext);
        } else if (conversionEntry.variables.q_item !== "item" || conversionEntry.variables.q_ref !== "1:kg") {
          finding("error", "MEASUREMENT_CONVERSION_VARIABLES_UNDEFINED", "Define q_item as the exchange per accepted machine and q_ref as the exchange per 1 kg reference flow.", ruleContext);
        }
        const inputs = conversionInputs(rule, mass.protocol_id, parsed);
        if (inputs === "unsupported") {
          review("conversion_inputs", "MEASUREMENT_CONVERSION_INPUTS_UNSUPPORTED", "Calculation Inputs may contain only bare q_item, M and explicitly declared collection-protocol identifiers, without prose or repeated entries.", ruleContext);
        }
        if (inputs === "incomplete" || clean(rule.output) !== "q_ref") {
          finding("error", "MEASUREMENT_CONVERSION_INPUTS_INCOMPLETE", "Calculation Inputs must link q_item, M and the mass collection protocol; Output must be q_ref.", ruleContext);
        }
      }
    }
  }
  const en = summaries.get("en-US");
  const zh = summaries.get("zh-CN");
  if (en && zh) {
    const context = { language: "bilingual" };
    record("bilingual_reference", context);
    if (en.reference && zh.reference && JSON.stringify(en.reference) !== JSON.stringify(zh.reference)) finding("error", "MEASUREMENT_BILINGUAL_REFERENCE_MISMATCH", "English and Chinese reference quantities or units differ.", context);
    if ((en.reference?.amount === "M" || zh.reference?.amount === "M") && en.mass.signature !== zh.mass.signature) finding("error", "MEASUREMENT_BILINGUAL_VARIABLE_MISMATCH", "English and Chinese M definitions differ or one is missing.", { ...context, rule_id: en.mass.rule_id ?? zh.mass.rule_id });
    for (const key of new Set([...en.rows.keys(), ...zh.rows.keys()])) {
      const left = en.rows.get(key);
      const right = zh.rows.get(key);
      const selected = left ?? right;
      if (!selected) throw new Error("Bilingual row invariant failed.");
      const rowContext = { ...selected.context, language: "bilingual" };
      if (!left || !right) {
        finding("error", "MEASUREMENT_BILINGUAL_ROW_MISMATCH", "A measurement inventory row is absent in one language.", rowContext);
        continue;
      }
      record("bilingual_basis", rowContext);
      if (left.basis && right.basis && JSON.stringify(comparableBasis(left.basis, en.reference)) !== JSON.stringify(comparableBasis(right.basis, zh.reference))) finding("error", "MEASUREMENT_BILINGUAL_BASIS_MISMATCH", "English and Chinese inventory normalization bases differ.", rowContext);
      if (left.collection_basis && right.collection_basis && JSON.stringify(comparableBasis(left.collection_basis, en.reference)) !== JSON.stringify(comparableBasis(right.collection_basis, zh.reference))) finding("error", "MEASUREMENT_BILINGUAL_COLLECTION_MISMATCH", "English and Chinese collection aggregation bases differ.", rowContext);
      const leftRules = new Map(left.conversions.map((entry) => [entry.rule_id, entry]));
      const rightRules = new Map(right.conversions.map((entry) => [entry.rule_id, entry]));
      for (const id of new Set([...leftRules.keys(), ...rightRules.keys()])) {
        const leftRule = leftRules.get(id);
        const rightRule = rightRules.get(id);
        const ruleContext = { ...rowContext, rule_id: id };
        record("bilingual_conversion", ruleContext);
        if (!leftRule || !rightRule || leftRule.direction !== rightRule.direction || leftRule.grammar_complete !== rightRule.grammar_complete) finding("error", "MEASUREMENT_BILINGUAL_CONVERSION_MISMATCH", "English and Chinese linked conversion rules or directions differ.", ruleContext);
        if (leftRule && rightRule && (JSON.stringify(leftRule.variables) !== JSON.stringify(rightRule.variables) || en.mass.signature !== zh.mass.signature)) finding("error", "MEASUREMENT_BILINGUAL_VARIABLE_MISMATCH", "English and Chinese conversion variable definitions differ.", ruleContext);
      }
    }
  } else skipped.push({ check: "bilingual_measurement", language: "bilingual", reason: "Both canonical languages are required." });
  const status = findings.some((entry) => entry.severity === "error") ? "error"
    : findings.length || skipped.length ? "manual_review" : "pass";
  return {
    check_version: 1, status, findings,
    coverage: {
      performed, skipped, complete: skipped.length === 0,
      counts: { languages: languageCount, inventory_rows: inventoryCount, performed: performed.length, skipped: skipped.length },
    },
  };
}

function massCode(mass: MassDefinition): string { if (!mass.code) throw new Error('Missing failed mass definition code.'); return mass.code; }
function massMessage(messages: Record<string, string>, mass: MassDefinition): string { const message = messages[massCode(mass)]; if (!message) throw new Error('Unknown failed mass definition code.'); return message; }
