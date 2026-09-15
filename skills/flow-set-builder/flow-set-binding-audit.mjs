#!/usr/bin/env node

import { readFileSync, readdirSync } from "node:fs";
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

function readTaxonomy() {
  return parseYaml(readFileSync(path.join(FLOW_SET_ROOT, "taxonomy-v2.yaml"), "utf8"));
}

function readRules() {
  return parseYaml(readFileSync(path.join(FLOW_SET_ROOT, "binding-rules.yaml"), "utf8"));
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

function loadGroups(taxonomy, rules) {
  const groupsBySet = new Map();
  const ruleErrors = [];
  for (const set of taxonomy.sets ?? []) {
    const groups = (set.groups ?? []).map((group) => ({
      id: group.id,
      setId: set.id,
      coordinate: set.coordinate,
      rule: ruleFor(group.id, rules),
    }));
    groupsBySet.set(set.id, groups);
    for (const group of groups) {
      const rule = group.rule;
      if (!asArray(rule.required_any).length && !asArray(rule.required_all).length) {
        ruleErrors.push(`${set.id}/${group.id}: no executable semantic rule`);
      }
    }
  }
  return { groupsBySet, ruleErrors };
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
    const groups = groupsBySet.get(setId);
    if (!groups) {
      findings.push({ severity: "error", code: "FLOW_SET_NOT_FOUND", file, location, row_id: row.row_id, selected: ref.id });
      return;
    }
    const knownIds = groups.map((group) => group.id);
    const selected = groupIdsInExpression(ref.group, knownIds);
    const evidence = rowEvidence(row);
    // A conditional PCR card may cite a whole set and defer the specific
    // nutrient/material/emission group until foreground data are available.
    // This is a valid scope reference, not a resolved exchange binding.
    if (ref.group == null || selected.length > 1) {
      findings.push({ severity: "deferred", code: "FLOW_SET_GROUP_DEFERRED", file, location, row_id: row.row_id, selected: ref.group ?? null, expected: [], evidence });
      return;
    }
    const expected = groups.filter((group) => matchesRule(evidence, group.rule)).map((group) => group.id);
    if (selected.length !== 1) {
      findings.push({ severity: "review", code: "FLOW_SET_GROUP_AMBIGUOUS", file, location, row_id: row.row_id, selected: ref.group, expected, evidence });
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
  const { groupsBySet, ruleErrors } = loadGroups(taxonomy, rules);
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
