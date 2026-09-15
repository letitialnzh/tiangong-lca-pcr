#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const TAXONOMY_PATH = path.join(ROOT, "library/flow-sets/taxonomy-v2.yaml");
const productPath = process.argv.find((value) => value.startsWith("--product="))?.slice(10);
const elementaryPath = process.argv.find((value) => value.startsWith("--elementary="))?.slice(13);
if (!productPath || !elementaryPath) {
  console.error("Usage: refresh-taxonomy-v2.mjs --product=<product-snapshot.json> --elementary=<elementary-snapshot.json>");
  process.exit(2);
}

const asArray = (value) => (Array.isArray(value) ? value : value == null ? [] : [value]);
const text = (value) => asArray(value).map((item) => item && typeof item === "object" ? item["#text"] ?? Object.values(item).join(" ") : item).filter(Boolean).join(" ");
const lower = (value) => text(value).toLowerCase();
const has = (value, patterns) => patterns.some((pattern) => pattern.test(value));
const uniqueByIdentity = (rows) => [...new Map(rows.map((row) => [`${row.uuid}@${row.version}`, row])).values()];

function readRows(filePath) {
  const parsed = JSON.parse(readFileSync(filePath, "utf8"));
  return parsed.rows ?? parsed.data ?? [];
}

function toCandidate(row) {
  const data = row.flow?.flowDataSet ?? {};
  const info = data.flowInformation?.dataSetInformation ?? {};
  const name = info.name ?? {};
  const flowType = data.modellingAndValidation?.LCIMethod?.typeOfDataSet ?? "";
  const classes = flowType === "Elementary flow"
    ? info.classificationInformation?.["common:elementaryFlowCategorization"]?.["common:category"] ?? []
    : info.classificationInformation?.["common:classification"]?.["common:class"] ?? [];
  const property = data.flowProperties?.flowProperty?.referenceToFlowPropertyDataSet ?? {};
  const baseName = asArray(name.baseName);
  const base = text(baseName);
  const classText = text(classes);
  const identityContext = [
    base,
    text(name.flowProperties),
    text(name.mixAndLocationTypes),
    text(name.treatmentStandardsRoutes),
  ].join(" ").trim();
  const context = [identityContext, classText, text(info["common:generalComment"])].filter(Boolean).join(" ").trim();
  return {
    uuid: row.id,
    version: row.version,
    name: {
      en: baseName.find((value) => value?.["@xml:lang"] === "en")?.["#text"] ?? base,
      zh: baseName.find((value) => value?.["@xml:lang"] === "zh")?.["#text"] ?? base,
    },
    flow_type: flowType,
    property: { names: [text(property["common:shortDescription"]) || ""] },
    unit: { status: "unresolved" },
    classification: classes.length
      ? {
          system: flowType === "Elementary flow" ? "ILCD elementary-flow categorization" : "CPC",
          path: asArray(classes).map((item) => ({ code: item["@classId"] ?? item["@catId"], name: item["#text"], level: item["@level"] })),
        }
      : { status: "not exposed by scan" },
    location: text(name.mixAndLocationTypes) || "not exposed by scan",
    applicability: "Candidate discovered by deterministic full database enumeration and assigned to the V2 functional group by local rules.",
    review_status: "needs_review",
    semantic_status: "needs_review",
    source: { state_code: row.state_code, modified_at: row.modified_at },
    __text: context.toLowerCase(),
    __name: lower(name.baseName),
    __name_en: lower(baseName.find((value) => value?.["@xml:lang"] === "en")?.["#text"] ?? base),
    __identity: identityContext.toLowerCase(),
    __property: lower(property["common:shortDescription"]),
    __classification: classText.toLowerCase(),
  };
}

const products = productPath ? readRows(productPath).map(toCandidate) : [];
const elementary = elementaryPath ? readRows(elementaryPath).map(toCandidate) : [];
const productPool = products.filter((row) => row.flow_type === "Product flow");
const elementaryPool = elementary.filter((row) => row.flow_type === "Elementary flow");
const sourceHash = createHash("sha256");
for (const filePath of [productPath, elementaryPath].filter(Boolean).sort()) sourceHash.update(readFileSync(filePath));
const sourceFingerprint = sourceHash.digest("hex");

function productMatch(groupId, row) {
  const t = row.__identity;
  const n = row.__name;
  const c = row.__identity;
  const service = /service|services|服务/u.test(`${n} ${c}`);
  switch (groupId) {
    case "electricity-supply": return has(`${n} ${c}`, [/electricity/u, /alternating current/u, /electrical energy/u, /electric power/u, /electrical power/u, /电力/u, /电能/u, /交流电/u]) && !has(t, [/battery/u, /generator/u, /vehicle/u, /fuel/u, /电池/u, /发电机/u, /车辆/u, /燃料/u]);
    case "purchased-process-heat": return has(`${n} ${c}`, [/process heat/u, /thermal energy/u, /heat from/u, /heating service/u, /hot water/u, /供热/u, /工艺热/u, /热能/u, /热水/u]) && !has(t, [/feedstock/u, /chemical synthesis/u, /steam cracking/u, /hydrogen production/u, /equipment/u, /machine/u, /原料/u, /化学合成/u, /蒸汽裂解/u, /设备/u]);
    case "steam-supply": return has(`${n} ${c}`, [/steam/u, /hot water/u, /process heat/u, /蒸汽/u, /热水/u, /工艺热/u]) && !has(t, [/steam coal/u, /steam cracking/u, /boiler part/u, /parts of/u, /equipment/u, /蒸汽煤/u, /蒸汽裂解/u, /锅炉零件/u, /设备/u]);
    case "stationary-combustion-fuel": return has(`${n} ${t}`, [/fuel/u, /natural gas/u, /diesel/u, /gasoline/u, /petrol/u, /coal/u, /biomass/u, /wood/u, /fuel oil/u, /燃料/u, /天然气/u, /柴油/u, /汽油/u, /煤/u, /生物质/u]) && has(`${n} ${t}`, [/boiler/u, /furnace/u, /combustion/u, /stationary/u, /industrial heat/u, /锅炉/u, /炉/u, /燃烧/u, /工业热/u]) && !has(t, [/vehicle/u, /mobile machinery/u, /tractor/u, /truck/u, /locomotive/u, /车辆/u, /移动机械/u, /拖拉机/u, /卡车/u, /机车/u]);
    case "mobile-machinery-fuel": return has(`${n} ${t}`, [/fuel/u, /diesel/u, /gasoline/u, /petrol/u, /燃料/u, /柴油/u, /汽油/u]) && has(`${n} ${t}`, [/mobile machinery/u, /tractor/u, /harvester/u, /vehicle/u, /truck/u, /machinery/u, /field operation/u, /移动机械/u, /拖拉机/u, /收割机/u, /车辆/u, /卡车/u, /机械/u, /田间作业/u]);
    case "nitrogen-supply": return has(`${n} ${c}`, [/nitrogen fertil/u, /urea fertil/u, /ammonium nitrate/u, /nitrogen nutrient/u, /氮肥/u, /尿素/u]) && !service;
    case "phosphorus-supply": return has(`${n} ${c}`, [/phosph(?:a|o)te fertil/u, /phosphatic/u, /phosphorus nutrient/u, /superphosphate/u, /磷肥/u, /磷酸盐/u]) && !service;
    case "potassium-supply": return has(`${n} ${c}`, [/potassium fertil/u, /potassic/u, /potash/u, /potassium nutrient/u, /钾肥/u, /氯化钾/u]) && !service;
    case "organic-nutrient-supply": return has(`${n} ${c}`, [/manure/u, /compost/u, /organic fertil/u, /digestate/u, /organic nutrient/u, /堆肥/u, /粪肥/u, /有机肥/u]) && !service;
    case "process-water": return has(`${n} ${c}`, [/process water/u, /washing water/u, /cooling water/u, /fresh water/u, /tap water/u, /potable water/u, /water supply/u, /工艺水/u, /清洗水/u, /冷却水/u, /淡水/u, /自来水/u, /供水/u]) && !has(t, [/wastewater/u, /sewage/u, /withdrawal/u, /废水/u, /污水/u, /取水/u]);
    case "irrigation-water": return has(`${n} ${c}`, [/irrigation water/u, /灌溉水/u]) && !has(t, [/wastewater/u, /sewage/u, /废水/u, /污水/u]);
    case "road-freight-transport": return has(`${n} ${c}`, [/road transport/u, /road freight/u, /truck transport/u, /lorry transport/u, /公路运输/u, /道路货运/u, /卡车运输/u]);
    case "water-freight-transport": return has(`${n} ${c}`, [/water transport/u, /maritime transport/u, /sea freight/u, /inland waterway/u, /barge transport/u, /水路运输/u, /海运/u, /驳船运输/u]);
    case "flexible-packaging": return has(`${n} ${c}`, [/flexible packaging/u, /packaging film/u, /pouch/u, /sachet/u, /bag packaging/u, /sack packaging/u, /liner/u, /stretch film/u, /柔性包装/u, /包装膜/u, /袋装/u, /内衬/u]);
    case "rigid-container-packaging": return has(`${n} ${c}`, [/rigid packaging/u, /bottle/u, /jar/u, /can packaging/u, /container packaging/u, /closure/u, /drum packaging/u, /刚性包装/u, /瓶/u, /罐/u, /容器包装/u, /封口/u, /桶装/u]);
    case "carton-and-box-packaging": return has(`${n} ${c}`, [/carton/u, /cardboard box/u, /corrugated/u, /paperboard box/u, /packaging box/u, /纸箱/u, /纸板箱/u, /瓦楞/u, /包装箱/u]);
    case "pallet-and-crate-packaging": return has(`${n} ${c}`, [/pallet/u, /crate/u, /托盘/u, /板条箱/u]);
    case "recycled-metal-material": return has(`${n} ${c}`, [/recycled.*metal/u, /secondary.*metal/u, /metal scrap/u, /scrap.*metal/u, /再生金属/u, /金属废料/u]);
    case "recycled-paper-fibre": return has(`${n} ${c}`, [/recycled.*paper/u, /recycled.*fibr/u, /secondary.*paper/u, /paper scrap/u, /再生纸/u, /再生纤维/u, /纸废料/u]);
    case "site-clearing-and-preparation": return has(`${n} ${c}`, [/site preparation/u, /site clearing/u, /land clearing/u, /site preparation service/u, /场地准备/u, /场地清理/u, /土地清理/u]);
    case "earthwork-and-excavation": return has(`${n} ${c}`, [/earthwork/u, /excavation/u, /earth moving/u, /grading service/u, /土方/u, /挖掘/u, /开挖/u, /场地平整/u]);
    case "backfill-and-compaction": return has(`${n} ${c}`, [/backfill/u, /compaction/u, /back filling/u, /回填/u, /压实/u]);
    case "demolition-service": return has(`${n} ${c}`, [/demolition/u, /拆除/u]);
    case "non-hazardous-waste-incineration": return has(`${n} ${c}`, [/incineration/u, /焚烧/u]) && !has(t, [/hazardous/u, /clinical/u, /medical waste/u, /toxic waste/u, /危险废物/u, /医疗废物/u, /有毒废物/u]);
    case "wastewater-treatment-service": return has(`${n} ${c}`, [/wastewater treatment/u, /sewage treatment/u, /污水处理/u, /废水处理/u]);
    default: return false;
  }
}

function medium(candidate) {
  const c = candidate.__classification;
  if (!/emissions to/u.test(c)) return null;
  if (/emissions to air, indoor/u.test(c)) return "air-indoor";
  if (/emissions to air/u.test(c)) return "air-ambient";
  if (/emissions to water/u.test(c)) return "water";
  if (/emissions to soil/u.test(c)) return "soil";
  return null;
}

function emissionMatch(groupId, row) {
  const n = row.__name_en || row.__name;
  const m = medium(row);
  if (groupId.startsWith("air-ambient-") && m !== "air-ambient") return false;
  if (groupId.startsWith("water-") && m !== "water") return false;
  if (groupId.startsWith("soil-") && m !== "soil") return false;
  const exact = {
    "air-ambient-ammonia": [/^ammonia$/u],
    "air-ambient-nitrogen-oxides": [/^nitrogen monoxide$/u, /^nitrogen dioxide$/u, /^nitrogen oxides$/u],
    "air-ambient-nitrous-oxide": [/^nitrous oxide$/u],
    "air-ambient-carbon-dioxide": [/^carbon dioxide(?: \((?:fossil|biogenic|land use change)\))?$/u],
    "air-ambient-carbon-monoxide": [/^carbon monoxide(?: \((?:fossil|biogenic|land use change)\))?$/u],
    "air-ambient-methane": [/^methane(?: \((?:fossil|biogenic|land use change)\))?$/u],
    "air-ambient-sulfur-dioxide": [/^(?:sulfur|sulphur) dioxide$/u],
    "air-ambient-sulfur-trioxide": [/^(?:sulfur|sulphur) trioxide$/u],
    "air-ambient-sulfur-oxides-aggregate": [/^(?:sulfur|sulphur) oxides$/u],
    "air-ambient-particulate-matter": [/^(?:particles?|particulate matter)(?:$| \()/u],
    "water-nitrate": [/^nitrate$/u],
    "water-ammonium": [/^ammonium$/u],
    "water-phosphate": [/^phosphate$/u],
    "soil-nitrate": [/^nitrate$/u],
    "soil-phosphate": [/^phosphate$/u],
    "soil-arsenic": [/^arsenic(?: \([ivx]+\))?$/u],
    "soil-antimony": [/^antimony(?: \([ivx]+\))?$/u],
    "soil-cadmium": [/^cadmium(?: \([ivx]+\))?$/u],
    "soil-chromium": [/^chromium(?: \([ivx]+\))?$/u],
    "soil-lead": [/^lead$/u],
    "soil-mercury": [/^mercury(?: \([ivx]+\))?$/u],
    "soil-nickel": [/^nickel(?: \([ivx]+\))?$/u],
    "soil-thallium": [/^thallium(?: \([ivx]+\))?$/u],
    "soil-zinc": [/^zinc(?: \([ivx]+\))?$/u],
  };
  return has(n, exact[groupId] ?? []);
}

function resourceMatch(groupId, row) {
  const c = row.__classification;
  if (groupId === "water-resource-withdrawal") return /resources from water/u.test(c);
  if (groupId === "land-occupation") return /land occupation/u.test(c);
  if (groupId === "land-transformation") return /land transformation/u.test(c);
  return false;
}

const taxonomy = parseYaml(readFileSync(TAXONOMY_PATH, "utf8"));
const allGroups = taxonomy.sets.flatMap((set) => set.groups.map((group) => ({ ...group, setId: set.id, coordinate: set.coordinate })));
const productSetIds = new Set(taxonomy.sets.filter((set) => set.coordinate === "product-input").map((set) => set.id));

const genericDescriptions = {
  "energy-supply": "Supply the specified energy form or utility to the foreground process.",
  "agricultural-nutrient-supply": "Supply the specified nutrient function to agricultural or biological production.",
  "water-use": "Supply water for the specified foreground use.",
  "transport-service": "Provide the specified freight transport service.",
  "packaging-function": "Provide packaging in the specified physical form.",
  "recovered-material-input": "Supply recovered material in the specified material family.",
  "construction-service": "Provide the specified construction service.",
  "waste-treatment-service": "Provide the specified waste-treatment service.",
  "resource-withdrawal": "Withdraw or occupy the specified environmental resource.",
  "environmental-emission": "Release the specified pollutant function to the named receiving medium.",
};

function candidateFor(row, group) {
  const { __text, __name, __name_en, __identity, __property, __classification, ...clean } = row;
  clean.applicability = `${clean.applicability} V2 group: ${group.id}.`;
  const propertyOkay = group.coordinate === "elementary-input" || group.coordinate === "elementary-output"
    ? /mass|amount|area|time|volume|质量|物质的量|面积|时间|体积/u.test(__property)
    : Boolean(__property);
  clean.semantic_status = propertyOkay ? "accepted" : "needs_review";
  clean.semantic_reasons = propertyOkay ? ["structural coordinate, functional identity, and quantity property passed"] : ["quantity property requires review"];
  return clean;
}

function matchGroup(group, row) {
  if (group.coordinate === "product-input") return row.flow_type === "Product flow" && productMatch(group.id, row);
  if (group.coordinate === "elementary-input") return row.flow_type === "Elementary flow" && resourceMatch(group.id, row);
  return row.flow_type === "Elementary flow" && emissionMatch(group.id, row);
}

const generatedAt = new Date().toISOString();
const results = [];
for (const set of taxonomy.sets) {
  const pool = productSetIds.has(set.id) ? productPool : elementaryPool;
  const groups = set.groups.map((group) => {
    const rows = uniqueByIdentity(pool.filter((row) => matchGroup({ ...group, coordinate: set.coordinate }, row)));
    const candidates = rows.map((row) => candidateFor(row, { ...group, coordinate: set.coordinate }));
    const qualified = new Set(candidates.filter((row) => row.semantic_status === "accepted").map((row) => row.uuid)).size;
    return {
      id: group.id,
      purpose: genericDescriptions[set.id],
      include_when: [`The exchange has the ${group.id} function.`, `The flow has coordinate ${set.coordinate}.`],
      exclude_when: [`The exchange belongs to another functional group or structural coordinate.`, "A name match without compatible property or classification is insufficient."],
      required_project_data: ["quantity", "property", "unit", ...(set.coordinate === "elementary-output" ? ["receiving_medium", "reported_substance"] : [])],
      selection_constraints: {
        properties: set.coordinate === "elementary-output" ? ["mass"] : ["mass", "amount", "energy", "area", "mass*distance"],
        units: ["kg", "g", "MJ", "kWh", "kg*km", "t*km"],
        geography_policy: set.coordinate === "elementary-output" ? "not_applicable_for_elementary_flow" : "prefer_process_location",
      },
      ...(group.importance ? { importance: group.importance } : {}),
      candidate_uuid_count: new Set(candidates.map((row) => row.uuid)).size,
      qualified_candidate_count: qualified,
      population_status: candidates.length === 0 ? "coverage_gap" : "candidate_population_requires_review",
      candidates,
    };
  });
  const allCandidates = groups.flatMap((group) => group.candidates);
  const output = {
    schema_version: 1,
    identity: { id: `flow-set.${set.id}`, version: "0.2.0", status: "draft", title: `${set.id} functions (V2)` },
    scope: { flow_type: set.coordinate.startsWith("elementary") ? "elementary" : "product", direction: set.coordinate.endsWith("output") ? "output" : "input", coordinate: set.coordinate, function: genericDescriptions[set.id] },
    selection_policy: {
      bind_at: "foreground_data_generation",
      final_exchange_requires_verified_uuid: true,
      automatic_selection_allowed: false,
      priority: ["applicable_flow_set_group", "exact_verified_uuid_for_uncovered_flow", "unmapped_coverage"],
      group_required: true,
      candidate_count_policy: "Groups below five candidate UUIDs are omitted from PCR taxonomy unless marked high importance.",
      common_checks: ["Require the exact structural coordinate.", "Require compatible property and unit.", "Require classification and intended-use evidence when exposed.", "Resolve one verified UUID only during foreground-data generation."],
    },
    population: { completeness: "full_deterministic_scan_partitioned_by_v2_taxonomy", candidate_rows: allCandidates.length, unique_candidate_uuids: new Set(allCandidates.map((row) => row.uuid)).size, qualified_candidate_uuids: new Set(allCandidates.filter((row) => row.semantic_status === "accepted").map((row) => row.uuid)).size, scanned_rows: pool.length },
    groups,
    sync: { population_mode: "deterministic_full_scan", enumeration_backend: "tiangong-lca flow list --all", discovery_backend: "flow-hybrid-search (supplemental only)", complete_registry: true, last_checked_at: generatedAt, source_query_fingerprint: sourceFingerprint, source_snapshot_fingerprint: sourceFingerprint },
  };
  const directory = path.join(ROOT, "library/flow-sets", set.id);
  mkdirSync(directory, { recursive: true });
  writeFileSync(path.join(directory, "flow-set.yaml"), renderYaml(output));
  const reportLines = groups.map((group) => `| ${group.id} | ${group.candidate_uuid_count} | ${group.qualified_candidate_count} | ${group.population_status} |`).join("\n");
  writeFileSync(path.join(directory, "review-report.md"), `# ${set.id} — V2 database refresh\n\n- Generated: ${generatedAt}\n- Database Product-flow rows used: ${productPool.length}\n- Database Elementary-flow rows used: ${elementaryPool.length}\n- Source fingerprint: \`${sourceFingerprint}\`\n- Automatic UUID selection: disabled\n\n| Group | Candidate UUIDs | Quantity-compatible UUIDs | Status |\n| --- | ---: | ---: | --- |\n${reportLines}\n\nAll candidate rows remain subject to functional, property, unit, geography, and final UUID review.\n`);
  results.push({ set: set.id, groups: groups.map((group) => ({ id: group.id, candidate_uuid_count: group.candidate_uuid_count, qualified_candidate_count: group.qualified_candidate_count, status: group.population_status })) });
}
console.log(JSON.stringify({ generated_at: generatedAt, source_fingerprint: sourceFingerprint, product_rows: productPool.length, elementary_rows: elementaryPool.length, results }, null, 2));
