#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const FLOW_SET_ROOT = path.join(ROOT, "library/flow-sets");
const PCR_ROOT = path.join(ROOT, "library/pcrs");

const normalize = (value) => String(value ?? "")
  .toLowerCase()
  .replace(/[\-_]+/gu, " ")
  .replace(/[^a-z0-9\u4e00-\u9fff ]/gu, " ")
  .replace(/\s+/gu, " ")
  .trim();

const asArray = (value) => (Array.isArray(value) ? value : value == null ? [] : [value]);

function walk(value, visitor, location = "") {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, visitor, `${location}[${index}]`));
    return;
  }
  if (!value || typeof value !== "object") return;
  visitor(value, location);
  for (const [key, child] of Object.entries(value)) walk(child, visitor, location ? `${location}.${key}` : key);
}

function groupIdsInExpression(expression, knownIds) {
  const text = normalize(expression);
  return knownIds.filter((groupId) => text.includes(normalize(groupId)));
}

function rowEvidence(row) {
  // Descriptions often mention alternative carriers or destinations and would
  // create false multi-group matches. Use identity-bearing labels only.
  return normalize([row.row_id, row.role, row.name].filter(Boolean).join(" "));
}

function ruleFor(groupId, rules) {
  const configured = rules.groups?.[groupId] ?? {};
  if (configured.required_any) return configured;
  const ignored = new Set(asArray(rules.defaults?.ignored_group_tokens).map(normalize));
  const required = groupId.split("-").filter((token) => !ignored.has(normalize(token)));
  return { ...configured, required_all: required };
}

function matchesRule(evidence, rule) {
  const requiredAny = asArray(rule.required_any).map(normalize).filter(Boolean);
  const requiredAll = asArray(rule.required_all).map(normalize).filter(Boolean);
  const forbiddenAny = asArray(rule.forbidden_any).map(normalize).filter(Boolean);
  if (forbiddenAny.some((term) => evidence.includes(term))) return false;
  if (requiredAny.length && !requiredAny.some((term) => evidence.includes(term))) return false;
  return requiredAll.every((term) => evidence.includes(term));
}

function loadGroups(root, taxonomy, rules) {
  const groupsBySet = new Map();
  const ruleErrors = [];
  const defaultCoordinate = taxonomy.scope?.coordinate;
  for (const set of taxonomy.sets ?? []) {
    const registryPath = path.join(root, "library/flow-sets", set.id, "flow-set.yaml");
    if (!existsSync(registryPath)) {
      ruleErrors.push(`${set.id}: missing versioned Flow Set registry ${registryPath}`);
      continue;
    }
    const registry = parseYaml(readFileSync(registryPath, "utf8"));
    const expectedId = `flow-set.${set.id}`;
    if (registry.identity?.id !== expectedId) {
      ruleErrors.push(`${set.id}: registry identity must be ${expectedId}`);
    }
    if (!registry.identity?.version) {
      ruleErrors.push(`${set.id}: registry identity version is required`);
    }
    if (set.version != null && String(set.version) !== String(registry.identity?.version ?? "")) {
      ruleErrors.push(`${set.id}: taxonomy version ${set.version} does not match registry version ${registry.identity?.version ?? "missing"}`);
    }
    const coordinate = registry.scope?.coordinate ?? set.coordinate ?? defaultCoordinate;
    const taxonomyCoordinate = set.coordinate ?? defaultCoordinate;
    if (coordinate !== taxonomyCoordinate) {
      ruleErrors.push(`${set.id}: registry coordinate ${coordinate ?? "missing"} does not match taxonomy coordinate ${taxonomyCoordinate ?? "missing"}`);
    }
    const taxonomyGroupIds = (set.groups ?? []).map((group) => group.id);
    const registryGroupIds = (registry.groups ?? []).map((group) => group.id);
    if (JSON.stringify([...registryGroupIds].sort()) !== JSON.stringify([...taxonomyGroupIds].sort())) {
      ruleErrors.push(`${set.id}: registry groups do not match taxonomy groups`);
    }
    const groups = registryGroupIds.map((groupId) => ({
      id: groupId,
      setId: set.id,
      coordinate,
      rule: ruleFor(groupId, rules),
    }));
    const policy = registry.selection_policy ?? {};
    const groupRequired = policy.group_required ?? set.group_required ?? taxonomy.binding_policy?.group_required ?? true;
    const bindingLevel = policy.binding_level ?? set.binding_level ?? (groupRequired ? "group" : "set");
    const allowedBindingLevels = policy.allowed_binding_levels ?? set.allowed_binding_levels ?? [bindingLevel];
    const pcrCardinality = policy.pcr_cardinality ?? set.pcr_cardinality ?? "multiple_per_process";
    groupsBySet.set(set.id, {
      groups,
      version: String(registry.identity?.version ?? ""),
      coordinate,
      groupRequired,
      bindingLevel,
      allowedBindingLevels,
      pcrCardinality,
    });
    for (const group of groups) {
      const rule = group.rule;
      if (!asArray(rule.required_any).length && !asArray(rule.required_all).length) {
        ruleErrors.push(`${set.id}/${group.id}: no executable semantic rule`);
      }
    }
  }
  return { groupsBySet, ruleErrors };
}

function coordinateFromLocation(location) {
  const match = location.match(/\.((?:inputs)|(?:outputs))\.((?:product)|(?:waste)|(?:elementary))\[\d+\]$/u);
  if (!match) return null;
  const [, direction, flowType] = match;
  return `${flowType}-${direction === "inputs" ? "input" : "output"}`;
}

function addCardinalityFindings(projection, file, groupsBySet, findings) {
  for (const [processIndex, process] of asArray(projection?.process_inventory).entries()) {
    const counts = new Map();
    walk(process, (row) => {
      if (!row?.row_id || !row?.flow_set_ref?.id) return;
      const setId = String(row.flow_set_ref.id).replace(/^flow-set\./u, "");
      counts.set(setId, (counts.get(setId) ?? 0) + 1);
    });
    for (const [setId, count] of counts) {
      const contract = groupsBySet.get(setId);
      if (contract?.pcrCardinality === "one_per_process" && count > 1) {
        findings.push({
          severity: "error",
          code: "FLOW_SET_CARDINALITY_EXCEEDED",
          file,
          location: `process_inventory[${processIndex}]`,
          process_id: process?.id ?? null,
          selected: `flow-set.${setId}`,
          expected: 1,
          actual: count,
        });
      }
    }
  }
}

function auditPcrFile(file, groupsBySet) {
  const findings = [];
  let checkedRows = 0;
  const projection = parseYaml(readFileSync(file, "utf8"));
  walk(projection, (row, location) => {
    if (!row.row_id || !row.flow_set_ref) return;
    checkedRows += 1;
    const ref = row.flow_set_ref;
    const setId = String(ref.id ?? "").replace(/^flow-set\./u, "");
    const setContract = groupsBySet.get(setId);
    if (!setContract) {
      findings.push({ severity: "error", code: "FLOW_SET_NOT_FOUND", file, location, row_id: row.row_id, selected: ref.id });
      return;
    }
    const { groups, allowedBindingLevels } = setContract;
    if (row.binding !== "parameterized") {
      findings.push({ severity: "error", code: "FLOW_SET_BINDING_NOT_PARAMETERIZED", file, location, row_id: row.row_id, selected: row.binding ?? null, expected: "parameterized" });
    }
    if (String(ref.version ?? "") !== setContract.version) {
      findings.push({ severity: "error", code: "FLOW_SET_VERSION_MISMATCH", file, location, row_id: row.row_id, selected: ref.version ?? null, expected: setContract.version });
    }
    const actualCoordinate = coordinateFromLocation(location);
    if (actualCoordinate !== setContract.coordinate) {
      findings.push({ severity: "error", code: "FLOW_SET_COORDINATE_MISMATCH", file, location, row_id: row.row_id, selected: actualCoordinate, expected: setContract.coordinate });
    }
    const hasGroup = ref.group != null && String(ref.group).trim();
    if (!hasGroup) {
      if (!allowedBindingLevels.includes("set")) {
        findings.push({ severity: "deferred", code: "FLOW_SET_GROUP_DEFERRED", file, location, row_id: row.row_id, selected: null, expected: [], evidence: rowEvidence(row) });
      }
      return;
    }
    if (!allowedBindingLevels.includes("group")) {
        findings.push({ severity: "error", code: "FLOW_SET_GROUP_NOT_ALLOWED", file, location, row_id: row.row_id, selected: ref.group, expected: null });
      return;
    }
    const knownIds = groups.map((group) => group.id);
    const selected = groupIdsInExpression(ref.group, knownIds);
    const evidence = rowEvidence(row);
    if (selected.length > 1) {
      findings.push({ severity: "error", code: "FLOW_SET_MULTIPLE_GROUPS", file, location, row_id: row.row_id, selected: ref.group, expected: knownIds, evidence });
      return;
    }
    const expected = groups.filter((group) => matchesRule(evidence, group.rule)).map((group) => group.id);
    if (selected.length !== 1 || selected[0] !== ref.group) {
      findings.push({ severity: "error", code: "FLOW_SET_GROUP_NOT_FOUND", file, location, row_id: row.row_id, selected: ref.group, expected: knownIds, evidence });
      return;
    }
    if (expected.length !== 1) {
      findings.push({ severity: "review", code: expected.length ? "FLOW_SET_MATCH_AMBIGUOUS" : "FLOW_SET_MATCH_INCONCLUSIVE", file, location, row_id: row.row_id, selected: selected[0], expected, evidence });
      return;
    }
    if (selected[0] !== expected[0]) {
      findings.push({ severity: "error", code: "FLOW_SET_SEMANTIC_MISMATCH", file, location, row_id: row.row_id, selected: selected[0], expected: expected[0], evidence });
    }
  });
  addCardinalityFindings(projection, file, groupsBySet, findings);
  return { findings, checkedRows };
}

function findStructuredFiles(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...findStructuredFiles(target));
    else if (entry.isFile() && entry.name === "structured.yaml") files.push(target);
  }
  return files;
}

export function auditPcrFlowSetBindings({ root = ROOT } = {}) {
  const taxonomy = parseYaml(readFileSync(path.join(root, "library/flow-sets/taxonomy-v2.yaml"), "utf8"));
  const rules = parseYaml(readFileSync(path.join(root, "library/flow-sets/binding-rules.yaml"), "utf8"));
  const { groupsBySet, ruleErrors } = loadGroups(root, taxonomy, rules);
  const files = findStructuredFiles(path.join(root, "library/pcrs"));
  const audits = files.map((file) => auditPcrFile(file, groupsBySet));
  const findings = audits.flatMap((audit) => audit.findings);
  const checkedRows = audits.reduce((total, audit) => total + audit.checkedRows, 0);
  return {
    ok: ruleErrors.length === 0 && findings.every((finding) => finding.severity !== "error"),
    rule_errors: ruleErrors,
    findings,
    summary: {
      pcr_files: files.length,
      checked_rows: checkedRows,
      passed: checkedRows - findings.length,
      errors: findings.filter((finding) => finding.severity === "error").length,
      deferred: findings.filter((finding) => finding.severity === "deferred").length,
      needs_review: findings.filter((finding) => finding.severity === "review").length,
    },
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const result = auditPcrFlowSetBindings();
  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exitCode = 1;
}
