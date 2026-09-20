import { isTableLine, normalizeHeader, parseTable, stripInlineCode, tableCell } from "./markdown-table.mjs";
import { normalizeFingerprintText } from "../../packages/pcr-core/src/projection-integrity.mjs";

export { structuredProjectionYaml } from "./structured-yaml-projection.mjs";

function normalizeAsciiSlug(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase()
    .replace(/&/gu, " and ")
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "")
    .replace(/-{2,}/gu, "-");
}

function extractFirstUuid(value) {
  const match = stripInlineCode(value).match(
    /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/iu,
  );
  return match ? match[0].toLowerCase() : "";
}

function extractSourceIds(value) {
  const matches = String(value ?? "").match(/`([^`]+)`/gu) ?? [];
  if (matches.length > 0) {
    return matches.map((match) => match.slice(1, -1).trim()).filter(Boolean);
  }
  return stripInlineCode(value)
    .split(/[,;]/u)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function splitListValue(value) {
  return stripInlineCode(value)
    .split(/[;,]/u)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function labelWithoutUuid(value) {
  return stripInlineCode(value)
    .replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/giu, "")
    .replace(/\s{2,}/gu, " ")
    .trim();
}

function normalizeStructuredId(value) {
  return normalizeAsciiSlug(value).replaceAll("-", "_");
}

function normalizeProjectionHeader(value) {
  const raw = stripInlineCode(value).trim().toLowerCase();
  const localizedHeaders = new Map([
    ["字段", "field"],
    ["值", "value"],
    ["规则编号", "rule_id"],
    ["适用对象", "applies_to"],
    ["适用于", "applies_to"],
    ["规则", "rule"],
    ["要求", "rule"],
    ["来源", "source_ids"],
    ["必需流属性", "required_property"],
    ["必需单位", "required_unit"],
    ["过程名称", "process_name"],
    ["纳入状态", "inclusion"],
    ["纳入条件", "inclusion_condition"],
    ["建模角色", "role"],
    ["定量参考", "quantitative_reference"],
    ["绑定", "binding"],
    ["绑定模式", "binding"],
    ["流集", "flow_set"],
    ["流集版本", "flow_set_version"],
    ["流集分组", "flow_set_group"],
  ]);
  return localizedHeaders.get(raw) ?? normalizeHeader(raw);
}

function inlineCodeValues(value) {
  return [...String(value ?? "").matchAll(/`([^`]+)`/gu)].map((match) => match[1].trim()).filter(Boolean);
}

function controlledValue(value) {
  const codes = inlineCodeValues(value);
  if (codes.length > 0) {
    return codes[0];
  }
  return stripInlineCode(value);
}

function normalizeDirection(value) {
  const raw = controlledValue(value).trim().toLowerCase();
  const normalized = normalizeStructuredId(raw);
  if (
    ["input", "inputs"].includes(raw) ||
    raw === "输入" ||
    ["input", "inputs"].includes(normalized)
  ) {
    return "inputs";
  }
  if (
    ["output", "outputs"].includes(raw) ||
    raw === "输出" ||
    ["output", "outputs"].includes(normalized)
  ) {
    return "outputs";
  }
  return normalized;
}

function normalizeFlowType(value) {
  const raw = controlledValue(value).trim().toLowerCase();
  const normalized = normalizeStructuredId(raw);
  if (["product", "product_flow", "product_flows"].includes(normalized)) {
    return "product";
  }
  if (["产品流", "产品"].includes(raw)) {
    return "product";
  }
  if (["waste", "waste_flow", "waste_flows"].includes(normalized)) {
    return "waste";
  }
  if (["废物流", "废物"].includes(raw)) {
    return "waste";
  }
  if (["elementary", "elementary_flow", "elementary_flows"].includes(normalized)) {
    return "elementary";
  }
  if (["基本流", "环境流"].includes(raw)) {
    return "elementary";
  }
  return normalized;
}

function normalizeFlowCardKey(value) {
  const raw = String(value ?? "").trim().replace(/\s+/gu, " ");
  const localizedKeyMap = new Map([
    ["选定流", "selected_flow"],
    ["流属性/单位", "flow_property_unit"],
    ["流属性 / 单位", "flow_property_unit"],
    ["数量规则", "amount"],
    ["数值来源模式", "value_mode"],
    ["适用范围", "specificity"],
    ["归一化基准", "basis"],
    ["基准类型", "basis_kind"],
    ["证据类型", "evidence_kind"],
    ["采集协议", "collection_protocol_id"],
    ["来源", "source_ids"],
    ["数量范围", "range"],
  ]);
  const localizedKey = localizedKeyMap.get(raw);
  if (localizedKey) {
    return localizedKey;
  }
  const normalized = normalizeStructuredId(raw);
  const keyMap = new Map([
    ["selected_flow", "selected_flow"],
    ["flow", "selected_flow"],
    ["flow_property_unit", "flow_property_unit"],
    ["property_unit", "flow_property_unit"],
    ["amount", "amount"],
    ["amount_rule", "amount"],
    ["value_mode", "value_mode"],
    ["specificity", "specificity"],
    ["basis", "basis"],
    ["normalization_basis", "basis"],
    ["basis_kind", "basis_kind"],
    ["evidence_kind", "evidence_kind"],
    ["collection_protocol", "collection_protocol_id"],
    ["collection_protocol_id", "collection_protocol_id"],
    ["source_ids", "source_ids"],
    ["sources", "source_ids"],
    ["range", "range"],
    ["binding", "binding"],
    ["binding_mode", "binding"],
    ["flow_set", "flow_set"],
    ["flow_set_id", "flow_set"],
    ["flow_set_version", "flow_set_version"],
    ["flow_set_group", "flow_set_group"],
  ]);
  return keyMap.get(normalized) ?? normalized;
}

function normalizeRangeFieldKey(value) {
  const raw = String(value ?? "").trim().replace(/\s+/gu, " ");
  const localizedKeyMap = new Map([
    ["范围角色", "role"],
    ["角色", "role"],
    ["下限", "lower"],
    ["上限", "upper"],
    ["单位", "unit"],
    ["基准", "basis"],
    ["基准类型", "basis_kind"],
    ["证据类型", "evidence_kind"],
    ["来源", "source_ids"],
  ]);
  const localizedKey = localizedKeyMap.get(raw);
  if (localizedKey) {
    return localizedKey;
  }
  const normalized = normalizeStructuredId(raw);
  const keyMap = new Map([
    ["range_role", "role"],
    ["role", "role"],
    ["lower", "lower"],
    ["lower_bound", "lower"],
    ["upper", "upper"],
    ["upper_bound", "upper"],
    ["unit", "unit"],
    ["basis", "basis"],
    ["basis_kind", "basis_kind"],
    ["evidence_kind", "evidence_kind"],
    ["source_ids", "source_ids"],
    ["sources", "source_ids"],
  ]);
  return keyMap.get(normalized) ?? normalized;
}

function parseTitledId(value) {
  const codes = inlineCodeValues(value);
  const rowId = codes.length > 0 ? normalizeStructuredId(codes[codes.length - 1]) : "";
  const labelSource = rowId
    ? String(value ?? "").replace(/\s*[（(]\s*`[^`]+`\s*[)）]\s*$/u, "")
    : String(value ?? "");
  const label = stripInlineCode(labelSource)
    .replace(/[（(]\s*[)）]/gu, "")
    .replace(/\s{2,}/gu, " ")
    .trim();
  return {
    id: rowId || normalizeStructuredId(label),
    label,
  };
}

function parseBullet(rawLine) {
  const match = rawLine.match(/^(\s*)[-*]\s+([^:：]+)[:：]\s*(.*)$/u);
  if (!match) {
    return null;
  }
  return {
    indent: match[1].length,
    key: match[2],
    value: match[3].trim(),
  };
}

function parseNestedRange(lines, startIndex, parentIndent) {
  const range = {};
  let index = startIndex;
  for (; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.trim();
    if (!line) {
      continue;
    }
    if (/^#{1,6}\s+/u.test(line)) {
      break;
    }
    const bullet = parseBullet(rawLine);
    if (!bullet || bullet.indent <= parentIndent) {
      break;
    }
    const key = normalizeRangeFieldKey(bullet.key);
    range[key] = bullet.value;
  }
  return { range, nextIndex: index };
}

function parseFlowCardFields(lines, startIndex) {
  const fields = {};
  const descriptions = [];
  let rangeIndex = 0;
  let index = startIndex;
  for (; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.trim();
    if (/^#{1,6}\s+/u.test(line)) {
      break;
    }
    const bullet = parseBullet(rawLine);
    if (bullet) {
      const key = normalizeFlowCardKey(bullet.key);
      if (key === "range") {
        const nested = parseNestedRange(lines, index + 1, bullet.indent);
        if (Object.keys(nested.range).length > 0) {
          fields[`range_${rangeIndex}`] = nested.range;
          rangeIndex += 1;
          index = nested.nextIndex - 1;
          continue;
        }
        fields[`range_${rangeIndex}`] = bullet.value;
        rangeIndex += 1;
        continue;
      }
      fields[key] = bullet.value;
      continue;
    }
    if (line) {
      descriptions.push(stripInlineCode(line));
    }
  }
  return { fields, description: descriptions.join(" ").trim(), nextIndex: index };
}

function parseRangeEntry(value) {
  const fields = {};
  if (value && typeof value === "object" && !Array.isArray(value)) {
    Object.assign(fields, value);
  } else {
    for (const entry of String(value ?? "").split(";")) {
      const [rawKey, ...rawValueParts] = entry.split("=");
      const key = normalizeRangeFieldKey(rawKey ?? "");
      const fieldValue = rawValueParts.join("=").trim();
      if (key && fieldValue) {
        fields[key] = fieldValue;
      }
    }
  }
  const role = fields.role ?? fields.range_role ?? fields.kind ?? "";
  if (!role) {
    return null;
  }
  return {
    role: normalizeStructuredId(controlledValue(role)),
    lower: stripInlineCode(fields.lower ?? ""),
    upper: stripInlineCode(fields.upper ?? ""),
    unit: stripInlineCode(fields.unit ?? ""),
    basis: stripInlineCode(fields.basis ?? ""),
    basis_kind: normalizeStructuredId(controlledValue(fields.basis_kind ?? "")),
    evidence_kind: normalizeStructuredId(controlledValue(fields.evidence_kind ?? "")),
    source_ids: extractSourceIds(fields.source_ids ?? fields.sources ?? ""),
  };
}

function parseRangeEntries(fields) {
  const ranges = [];
  for (const [key, value] of Object.entries(fields)) {
    if (key === "range" || key.startsWith("range_")) {
      const range = parseRangeEntry(value);
      if (range) {
        ranges.push(range);
      }
    }
  }
  return ranges;
}

function normalizeBinding(value) {
  const normalized = normalizeStructuredId(controlledValue(value ?? ""));
  if (["fixed", "fixed_uuid", "uuid"].includes(normalized)) return "fixed";
  if (["parameterized", "flow_set", "set", "deferred"].includes(normalized)) return "parameterized";
  return "";
}

function parseFlowBinding(fields, uuid = "") {
  const explicitBinding = normalizeBinding(fields.binding ?? fields.binding_mode);
  const flowSetId = stripInlineCode(fields.flow_set ?? fields.flow_set_id ?? "");
  const flowSetVersion = stripInlineCode(fields.flow_set_version ?? "");
  const hasBindingFields = explicitBinding
    || flowSetId
    || fields.flow_set_version
    || fields.flow_set_group
  if (!hasBindingFields) return null;
  const hasVersionedFlowSet = Boolean(flowSetId && flowSetVersion);
  const binding = hasVersionedFlowSet
    ? "parameterized"
    : explicitBinding || (flowSetId ? "parameterized" : "");
  if (!binding) return null;
  const result = { binding };
  if (binding === "parameterized") {
    result.flow_set_ref = {
      id: flowSetId,
      version: flowSetVersion,
    };
    const group = stripInlineCode(fields.flow_set_group ?? "");
    if (group) result.flow_set_ref.group = group;
  }
  return result;
}

function parseReferenceFlowTable(table) {
  const headerIndex = new Map(
    table.headers.map((header, index) => [normalizeProjectionHeader(header), index]),
  );
  return table.rows
    .map((row) => {
      const uuid = extractFirstUuid(
        tableCell(row, headerIndex, ["uuid", "tiangong_uuid", "tiangong_flow"]),
      );
      const parsedBinding = parseFlowBinding({
        binding: tableCell(row, headerIndex, ["binding"]),
        flow_set: tableCell(row, headerIndex, ["flow_set"]),
        flow_set_version: tableCell(row, headerIndex, ["flow_set_version"]),
        flow_set_group: tableCell(row, headerIndex, ["flow_set_group"]),
      }, uuid);
      return {
        role: stripInlineCode(tableCell(row, headerIndex, ["role"])),
        name: stripInlineCode(tableCell(row, headerIndex, ["tiangong_flow", "selected_flow"])),
        flow_type: stripInlineCode(tableCell(row, headerIndex, ["flow_type"])),
        uuid: parsedBinding?.binding === "parameterized" ? "" : uuid,
        flow_property_uuid: extractFirstUuid(tableCell(row, headerIndex, ["flow_property"])),
        unit_group_uuid: extractFirstUuid(tableCell(row, headerIndex, ["unit_group"])),
        preferred_unit: stripInlineCode(tableCell(row, headerIndex, ["preferred_unit"])),
        ...parsedBinding,
      };
    })
    .filter((row) => row.uuid || ["fixed", "parameterized"].includes(row.binding));
}

function parseReferenceFlowDefinitionTable(table) {
  const headerIndex = new Map(
    table.headers.map((header, index) => [normalizeProjectionHeader(header), index]),
  );
  if (!headerIndex.has("field") || !headerIndex.has("value")) {
    return null;
  }
  const fields = new Map();
  for (const row of table.rows) {
    const key = normalizeProjectionHeader(tableCell(row, headerIndex, ["field"]));
    const value = tableCell(row, headerIndex, ["value"]);
    if (key) {
      fields.set(key, value);
    }
  }
  const productValue = fields.get("reference_product_flow") ?? fields.get("product_flow") ?? "";
  const propertyValue = fields.get("reference_flow_property") ?? fields.get("flow_property") ?? "";
  const unitGroupValue = fields.get("reference_unit_group") ?? fields.get("unit_group") ?? "";
  const referenceUnit = fields.get("reference_unit") ?? fields.get("preferred_unit") ?? "";
  const referenceAmount = fields.get("reference_amount") ?? fields.get("declared_unit") ?? "";
  const qualifiers = fields.get("required_qualifiers") ?? fields.get("qualifiers") ?? "";
  const productUuid = extractFirstUuid(productValue);
  const parsedBinding = parseFlowBinding({
    binding: fields.get("binding") ?? fields.get("binding_mode") ?? "",
    flow_set: fields.get("flow_set") ?? fields.get("flow_set_id") ?? "",
    flow_set_version: fields.get("flow_set_version") ?? "",
    flow_set_group: fields.get("flow_set_group") ?? "",
  }, productUuid);
  const selectedProductUuid = parsedBinding?.binding === "parameterized" ? "" : productUuid;

  if (!referenceAmount && !selectedProductUuid && !referenceUnit && !qualifiers && !parsedBinding) {
    return null;
  }

  return {
    reference_amount: stripInlineCode(referenceAmount),
    product_flow: {
      name: labelWithoutUuid(productValue),
      uuid: selectedProductUuid,
    },
    flow_property_uuid: extractFirstUuid(propertyValue),
    unit_group_uuid: extractFirstUuid(unitGroupValue),
    reference_unit: stripInlineCode(referenceUnit),
    required_qualifiers: splitListValue(qualifiers),
    ...parsedBinding,
  };
}

function parseFieldValueTable(table) {
  const headerIndex = new Map(
    table.headers.map((header, index) => [normalizeProjectionHeader(header), index]),
  );
  if (!headerIndex.has("field")) {
    return null;
  }
  if (!headerIndex.has("value")) {
    return null;
  }
  const result = {};
  for (const row of table.rows) {
    const key = normalizeStructuredId(tableCell(row, headerIndex, ["field"]));
    const value = stripInlineCode(tableCell(row, headerIndex, ["value"]));
    if (key) {
      result[key] = value;
    }
  }
  return Object.keys(result).length > 0 ? result : null;
}

function parseFunctionalUnitTable(table) {
  const fields = parseFieldValueTable(table);
  if (!fields) {
    return null;
  }
  const hasFunctionalUnitField =
    fields.what ||
    fields.how_much ||
    fields.how_well ||
    fields.how_long ||
    fields.how_long_or_cycle ||
    fields.reference_flow_link;
  return hasFunctionalUnitField ? fields : null;
}

function parseMeasurementRuleRows(table) {
  const headerIndex = new Map(
    table.headers.map((header, index) => [normalizeProjectionHeader(header), index]),
  );
  return table.rows
    .map((row) => {
      const requiredProperty = tableCell(row, headerIndex, ["required_property", "flow_property"]);
      return {
        id: normalizeStructuredId(tableCell(row, headerIndex, ["rule_id", "id"])),
        applies_to: stripInlineCode(tableCell(row, headerIndex, ["applies_to", "scope"])),
        required_property: labelWithoutUuid(requiredProperty),
        required_property_uuid: extractFirstUuid(requiredProperty),
        required_unit: stripInlineCode(tableCell(row, headerIndex, ["required_unit", "unit"])),
        rule: stripInlineCode(tableCell(row, headerIndex, ["rule", "description"])),
      };
    })
    .filter((row) => row.id || row.applies_to || row.rule);
}

function parseProcessMapRows(table) {
  const headerIndex = new Map(
    table.headers.map((header, index) => [normalizeProjectionHeader(header), index]),
  );
  if (!headerIndex.has("process_id")) {
    return [];
  }
  return table.rows
    .map((row) => ({
      id: normalizeStructuredId(tableCell(row, headerIndex, ["process_id", "id"])),
      name: stripInlineCode(tableCell(row, headerIndex, ["process_name", "name"])),
      inclusion: stripInlineCode(tableCell(row, headerIndex, ["inclusion"])),
      inclusion_condition: stripInlineCode(tableCell(row, headerIndex, ["inclusion_condition", "condition"])),
      role: stripInlineCode(tableCell(row, headerIndex, ["role"])),
      quantitative_reference: stripInlineCode(
        tableCell(row, headerIndex, ["quantitative_reference", "reference"]),
      ),
    }))
    .filter((row) => row.id || row.name);
}

function parseDataSourceRows(table) {
  const headerIndex = new Map(
    table.headers.map((header, index) => [normalizeProjectionHeader(header), index]),
  );
  return table.rows
    .map((row) => ({
      id: stripInlineCode(tableCell(row, headerIndex, ["source_id", "id"])),
      type: normalizeStructuredId(controlledValue(tableCell(row, headerIndex, ["type"]))),
      reference: stripInlineCode(tableCell(row, headerIndex, ["reference"])),
      used_for: stripInlineCode(tableCell(row, headerIndex, ["used_for", "use", "用途"])),
    }))
    .filter((row) => row.id && !/^tg-/u.test(row.id));
}

function parseCollectionProtocolRows(table) {
  const headerIndex = new Map(
    table.headers.map((header, index) => [normalizeProjectionHeader(header), index]),
  );
  if (!headerIndex.has("protocol_id")) {
    return [];
  }
  return table.rows
    .map((row) => ({
      protocol_id: normalizeStructuredId(tableCell(row, headerIndex, ["protocol_id"])),
      process_id: normalizeStructuredId(tableCell(row, headerIndex, ["process_id"])),
      flow_role: stripInlineCode(tableCell(row, headerIndex, ["flow_role"])),
      record_type: stripInlineCode(tableCell(row, headerIndex, ["record_type"])),
      raw_fields: stripInlineCode(tableCell(row, headerIndex, ["raw_fields"])),
      collection_method: stripInlineCode(tableCell(row, headerIndex, ["collection_method"])),
      unit: stripInlineCode(tableCell(row, headerIndex, ["unit"])),
      frequency: stripInlineCode(tableCell(row, headerIndex, ["frequency"])),
      temporal_coverage: stripInlineCode(tableCell(row, headerIndex, ["temporal_coverage"])),
      site_scope: stripInlineCode(tableCell(row, headerIndex, ["site_scope"])),
      aggregation_rule: stripInlineCode(tableCell(row, headerIndex, ["aggregation_rule"])),
      quality_evidence: stripInlineCode(tableCell(row, headerIndex, ["quality_evidence"])),
    }))
    .filter((row) => row.protocol_id);
}

function parseCalculationRuleRows(table) {
  const headerIndex = new Map(
    table.headers.map((header, index) => [normalizeProjectionHeader(header), index]),
  );
  if (!headerIndex.has("rule_id")) {
    return [];
  }
  return table.rows
    .map((row) => ({
      id: normalizeStructuredId(tableCell(row, headerIndex, ["rule_id", "id"])),
      applies_to: stripInlineCode(tableCell(row, headerIndex, ["applies_to"])),
      rule: stripInlineCode(tableCell(row, headerIndex, ["formula_or_rule", "rule", "formula"])),
      inputs: splitListValue(tableCell(row, headerIndex, ["inputs"])),
      output: stripInlineCode(tableCell(row, headerIndex, ["output"])),
      source_ids: extractSourceIds(tableCell(row, headerIndex, ["source_ids", "sources"])),
    }))
    .filter((row) => row.id);
}

function parseDataQualityRequirementRows(table) {
  const headerIndex = new Map(
    table.headers.map((header, index) => [normalizeProjectionHeader(header), index]),
  );
  if (!headerIndex.has("requirement_id")) {
    return [];
  }
  return table.rows
    .map((row) => ({
      id: normalizeStructuredId(tableCell(row, headerIndex, ["requirement_id", "id"])),
      applies_to: stripInlineCode(tableCell(row, headerIndex, ["applies_to"])),
      requirement: stripInlineCode(tableCell(row, headerIndex, ["requirement"])),
      evidence: stripInlineCode(tableCell(row, headerIndex, ["evidence"])),
    }))
    .filter((row) => row.id);
}

function markdownSectionKind(title) {
  const normalized = String(title ?? "").toLowerCase();
  if (normalized.includes("product category identity") || normalized.includes("产品类别识别")) {
    return "product_category_identity";
  }
  if (
    normalized.includes("reference flow") ||
    normalized.includes("functional unit") ||
    normalized.includes("参考流") ||
    normalized.includes("功能单位")
  ) {
    return "reference_flow";
  }
  if (
    normalized.includes("system boundary") ||
    normalized.includes("系统边界") ||
    normalized.includes("cut-off rules") ||
    normalized.includes("cutoff rules") ||
    normalized.includes("截断规则")
  ) {
    return "system_boundary";
  }
  if (normalized.includes("allocation") || normalized.includes("分配")) {
    return "allocation_rules";
  }
  if (
    normalized.includes("validation rules") ||
    normalized.includes("验证规则") ||
    normalized.includes("校验规则")
  ) {
    return "validation_rules";
  }
  if (
    normalized.includes("measurement and unit rules") ||
    normalized.includes("计量与单位规则") ||
    normalized.includes("flow properties and unit conventions") ||
    normalized.includes("流属性与单位约定")
  ) {
    return "measurement_rules";
  }
  if (
    normalized.includes("foreground data collection") ||
    normalized.includes("data quality and evidence rules") ||
    normalized.includes("前景数据采集") ||
    normalized.includes("数据质量与证据规则")
  ) {
    return "dataset_production";
  }
  if (normalized.includes("process inventory") || normalized.includes("过程清单")) {
    return "process_inventory";
  }
  if (normalized.includes("published dataset profile") || normalized.includes("发布数据集画像")) {
    return "published_dataset_profile";
  }
  if (normalized.includes("data sources") || normalized.includes("数据源")) {
    return "data_sources";
  }
  return "";
}

function sectionBodyLines(lines, targetSection) {
  const body = [];
  let active = false;
  for (const rawLine of lines) {
    const heading = rawLine.trim().match(/^##\s+(?:\d+\.\s*)?(.+)$/u);
    if (heading) {
      active = markdownSectionKind(heading[1]) === targetSection;
      continue;
    }
    if (active) {
      body.push(rawLine);
    }
  }
  return body;
}

function parseNormativeRuleRows(table, defaultAppliesTo) {
  const headerIndex = new Map(
    table.headers.map((header, index) => [normalizeProjectionHeader(header), index]),
  );
  if (!headerIndex.has("rule") && !headerIndex.has("requirement")) {
    return [];
  }
  return table.rows
    .map((row) => ({
      rule_id: normalizeStructuredId(
        tableCell(row, headerIndex, ["rule_id", "requirement_id", "id"]),
      ),
      applies_to:
        stripInlineCode(tableCell(row, headerIndex, ["applies_to", "scope"])) ||
        defaultAppliesTo,
      rule: stripInlineCode(tableCell(row, headerIndex, ["rule", "requirement", "description"])),
      source_ids: extractSourceIds(tableCell(row, headerIndex, ["source_ids", "sources"])),
    }))
    .filter((entry) => entry.rule);
}

function nextMeaningfulLine(lines, startIndex) {
  for (let index = startIndex; index < lines.length; index += 1) {
    if (lines[index].trim()) {
      return lines[index].trim();
    }
  }
  return "";
}

function leadingWhitespaceWidth(value) {
  const leadingWhitespace = String(value ?? "").match(/^[ \t]*/u)?.[0] ?? "";
  return [...leadingWhitespace].reduce(
    (width, character) => width + (character === "\t" ? 4 : 1),
    0,
  );
}

function parseNormativeListItem(value) {
  const match = String(value ?? "").match(/^([ \t]*)(?:[-+*]|\d+[.)])\s+(.+)$/u);
  if (!match) {
    return null;
  }
  return {
    indent: leadingWhitespaceWidth(match[1]),
    content: match[2].trim(),
  };
}

function parseNormativeListRule(lines, startIndex) {
  const rootItem = parseNormativeListItem(lines[startIndex]);
  if (!rootItem) {
    return null;
  }

  const fragments = [rootItem.content];
  let blankSinceContent = false;
  let index = startIndex + 1;
  for (; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.trim();
    if (!line) {
      blankSinceContent = true;
      continue;
    }
    if (/^#{3,6}\s+/u.test(line) || isTableLine(line)) {
      break;
    }

    const nestedItem = parseNormativeListItem(rawLine);
    if (nestedItem) {
      if (nestedItem.indent <= rootItem.indent) {
        break;
      }
      fragments.push(nestedItem.content);
      blankSinceContent = false;
      continue;
    }

    const continuationIndent = leadingWhitespaceWidth(rawLine);
    if (
      continuationIndent < rootItem.indent ||
      (blankSinceContent && continuationIndent <= rootItem.indent)
    ) {
      break;
    }
    fragments.push(line);
    blankSinceContent = false;
  }

  return {
    rule: stripInlineCode(fragments.join(" ")).replace(/\s+/gu, " ").trim(),
    nextIndex: index,
  };
}

function parseNormativeSection(lines, targetSection, idPrefix, defaultAppliesTo) {
  const body = sectionBodyLines(lines, targetSection);
  const rawRules = [];

  for (let index = 0; index < body.length; index += 1) {
    const rawLine = body[index];
    const line = rawLine.trim();
    if (!line) {
      continue;
    }
    if (/^#{3,6}\s+/u.test(line)) {
      continue;
    }
    if (isTableLine(line)) {
      const { table, nextIndex } = parseTable(body, index);
      if (table) {
        rawRules.push(...parseNormativeRuleRows(table, defaultAppliesTo));
      }
      index = nextIndex - 1;
      continue;
    }
    const listRule = parseNormativeListRule(body, index);
    if (listRule) {
      rawRules.push({
        rule_id: "",
        applies_to: defaultAppliesTo,
        rule: listRule.rule,
        source_ids: [],
      });
      index = listRule.nextIndex - 1;
      continue;
    }

    const paragraphLines = [line];
    let nextIndex = index + 1;
    while (nextIndex < body.length) {
      const candidate = body[nextIndex].trim();
      if (
        !candidate ||
        /^#{3,6}\s+/u.test(candidate) ||
        isTableLine(candidate) ||
        parseNormativeListItem(body[nextIndex])
      ) {
        break;
      }
      paragraphLines.push(candidate);
      nextIndex += 1;
    }
    const paragraph = paragraphLines.join(" ").trim();
    const nextLine = nextMeaningfulLine(body, nextIndex);
    const introducesStructuredRules =
      /[:：]$/u.test(paragraph) &&
      (Boolean(parseNormativeListItem(nextLine)) || isTableLine(nextLine));
    if (!introducesStructuredRules) {
      rawRules.push({
        rule_id: "",
        applies_to: defaultAppliesTo,
        rule: stripInlineCode(paragraph).replace(/\s+/gu, " ").trim(),
        source_ids: [],
      });
    }
    index = nextIndex - 1;
  }

  const usedRuleIds = new Set();
  return rawRules.map((entry, index) => {
    const fallbackId = `${idPrefix}_rule_${index + 1}`;
    let ruleId = entry.rule_id || fallbackId;
    let suffix = 2;
    while (usedRuleIds.has(ruleId)) {
      ruleId = `${entry.rule_id || fallbackId}_${suffix}`;
      suffix += 1;
    }
    usedRuleIds.add(ruleId);
    return {
      rule_id: ruleId,
      applies_to: entry.applies_to || defaultAppliesTo,
      rule: entry.rule,
      source_ids: entry.source_ids ?? [],
    };
  });
}

export function parsePcrMarkdownToStructured(markdown) {
  const lines = normalizeFingerprintText(markdown).split("\n");
  const systemBoundaryRules = parseNormativeSection(
    lines,
    "system_boundary",
    "system_boundary",
    "foreground_system_boundary",
  );
  const allocationRules = parseNormativeSection(
    lines,
    "allocation_rules",
    "allocation",
    "foreground_burden_allocation",
  );
  const validationRules = parseNormativeSection(
    lines,
    "validation_rules",
    "validation",
    "foreground_dataset_conformance",
  );
  let productCategoryIdentity = null;
  let functionalUnit = null;
  let boundaryAbstraction = null;
  const referenceFlows = [];
  let referenceFlowDefinition = null;
  const measurementRules = [];
  const processMap = [];
  const processInventory = [];
  const collectionProtocols = [];
  const calculationRules = [];
  const dataQualityRequirements = [];
  let publishedDatasetProfile = null;
  const dataSources = [];
  let section = "";
  let subSection = "";
  let currentProcess = null;
  let direction = null;
  let flowType = null;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    const h2 = line.match(/^##\s+(?:\d+\.\s*)?(.+)$/u);
    if (h2) {
      section = markdownSectionKind(h2[1]);
      subSection = "";
      direction = null;
      flowType = null;
      continue;
    }

    const h3Boundary = line.match(/^###\s+(.+)$/u);
    if (h3Boundary && section === "system_boundary") {
      const title = h3Boundary[1].toLowerCase();
      if (title.includes("boundary abstraction") || title.includes("边界概化")) {
        subSection = "boundary_abstraction";
      } else {
        subSection = "";
      }
      continue;
    }

    const h3 = line.match(/^###\s+(.+)$/u);
    if (h3 && section === "dataset_production") {
      const title = h3[1].toLowerCase();
      if (title.includes("data collection protocols") || title.includes("数据采集协议")) {
        subSection = "collection_protocols";
      } else if (title.includes("calculation rules") || title.includes("计算规则")) {
        subSection = "calculation_rules";
      } else if (title.includes("data quality requirements") || title.includes("数据质量要求")) {
        subSection = "data_quality_requirements";
      } else {
        subSection = "";
      }
      continue;
    }

    const h3Process = line.match(/^###\s+(?:Process:\s*|过程：)(.+)$/u);
    if (h3Process && section === "process_inventory") {
      const processTitle = parseTitledId(h3Process[1]);
      currentProcess = {
        id: processTitle.id,
        label: processTitle.label,
        inputs: { product: [], waste: [], elementary: [] },
        outputs: { product: [], waste: [], elementary: [] },
      };
      processInventory.push(currentProcess);
      direction = null;
      flowType = null;
      continue;
    }

    if (/^####\s+(Inputs|输入)$/iu.test(line)) {
      direction = "inputs";
      flowType = null;
      continue;
    }
    if (/^####\s+(Outputs|输出)$/iu.test(line)) {
      direction = "outputs";
      flowType = null;
      continue;
    }

    if (/^#####\s+(Product flows|产品流)$/iu.test(line)) {
      flowType = "product";
      continue;
    }
    if (/^#####\s+(Waste flows|废物流)$/iu.test(line)) {
      flowType = "waste";
      continue;
    }
    if (/^#####\s+(Elementary flows|基本流)$/iu.test(line)) {
      flowType = "elementary";
      continue;
    }

    const flowCard = line.match(/^######\s+(?:Flow:\s*|流：)?(.+)$/u);
    if (flowCard && section === "process_inventory" && currentProcess && direction && flowType) {
      const { fields, description, nextIndex } = parseFlowCardFields(lines, index + 1);
      const flowTitle = parseTitledId(flowCard[1]);
      const rowDirection = normalizeDirection(fields.direction ?? "") || direction;
      const rowFlowType = normalizeFlowType(fields.flow_type ?? "") || flowType;
      const candidateUuid = extractFirstUuid(fields.selected_flow ?? fields.flow ?? fields.uuid ?? "");
      const parsedBinding = parseFlowBinding(fields, candidateUuid);
      const row = {
        row_id: flowTitle.id,
        role: stripInlineCode(fields.role ?? flowTitle.label),
        name: labelWithoutUuid(fields.selected_flow ?? fields.flow ?? ""),
        flow_type: rowFlowType,
        uuid: parsedBinding?.binding === "parameterized" ? "" : candidateUuid,
        property_unit: stripInlineCode(fields.flow_property_unit ?? fields.property_unit ?? ""),
        description,
        amount: {
          expression: stripInlineCode(fields.amount ?? fields.amount_expression ?? ""),
          value_mode: normalizeStructuredId(controlledValue(fields.value_mode ?? "")),
          specificity: normalizeStructuredId(controlledValue(fields.specificity ?? "")),
          basis: {
            text: stripInlineCode(fields.basis ?? ""),
            kind: normalizeStructuredId(controlledValue(fields.basis_kind ?? "")),
          },
          evidence: {
            kind: normalizeStructuredId(controlledValue(fields.evidence_kind ?? "")),
            collection_protocol_id: normalizeStructuredId(
              fields.collection_protocol_id ?? fields.protocol_id ?? "",
            ),
            source_ids: extractSourceIds(fields.source_ids ?? fields.sources ?? ""),
          },
          ranges: parseRangeEntries(fields),
        },
      };
      Object.assign(row, parsedBinding ?? {});
      if (["inputs", "outputs"].includes(rowDirection) && ["product", "waste", "elementary"].includes(rowFlowType)) {
        currentProcess[rowDirection][rowFlowType].push(row);
      } else {
        currentProcess.inputs.product.push(row);
      }
      index = nextIndex - 1;
      continue;
    }

    if (isTableLine(line)) {
      const { table, nextIndex } = parseTable(lines, index);
      if (table) {
        if (section === "reference_flow") {
          const definition = parseReferenceFlowDefinitionTable(table);
          if (definition) {
            referenceFlowDefinition = definition;
          } else {
            const parsedFunctionalUnit = parseFunctionalUnitTable(table);
            if (parsedFunctionalUnit) {
              functionalUnit = parsedFunctionalUnit;
            } else {
              referenceFlows.push(...parseReferenceFlowTable(table));
            }
          }
        } else if (section === "product_category_identity") {
          const identity = parseFieldValueTable(table);
          if (identity) {
            productCategoryIdentity = identity;
          }
        } else if (section === "measurement_rules") {
          measurementRules.push(...parseMeasurementRuleRows(table));
        } else if (section === "system_boundary" && subSection === "boundary_abstraction") {
          const abstraction = parseFieldValueTable(table);
          if (abstraction) {
            boundaryAbstraction = abstraction;
          }
        } else if (section === "process_inventory" && !currentProcess) {
          processMap.push(...parseProcessMapRows(table));
        } else if (section === "dataset_production" && subSection === "collection_protocols") {
          collectionProtocols.push(...parseCollectionProtocolRows(table));
        } else if (section === "dataset_production" && subSection === "calculation_rules") {
          calculationRules.push(...parseCalculationRuleRows(table));
        } else if (section === "dataset_production" && subSection === "data_quality_requirements") {
          dataQualityRequirements.push(...parseDataQualityRequirementRows(table));
        } else if (section === "published_dataset_profile") {
          const profile = parseFieldValueTable(table);
          if (profile) {
            publishedDatasetProfile = profile;
          }
        } else if (section === "data_sources") {
          dataSources.push(...parseDataSourceRows(table));
        }
      }
      index = nextIndex - 1;
    }
  }

  const processMapById = new Map(processMap.map((entry) => [entry.id, entry]));
  for (const processEntry of processInventory) {
    const mappedProcess = processMapById.get(processEntry.id);
    if (mappedProcess?.name) {
      processEntry.label = mappedProcess.name;
    }
  }

  return {
    productCategoryIdentity,
    functionalUnit,
    systemBoundary: { rules: systemBoundaryRules },
    boundaryAbstraction,
    referenceFlowDefinition,
    referenceFlows,
    measurementRules,
    processMap,
    processInventory,
    allocationRules,
    collectionProtocols,
    calculationRules,
    dataQualityRequirements,
    validationRules,
    publishedDatasetProfile,
    dataSources,
  };
}
