#!/usr/bin/env node

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const FLOW_SET_ROOT = path.join(ROOT, "library/flow-sets");
const TAXONOMY = parseYaml(readFileSync(path.join(FLOW_SET_ROOT, "taxonomy-v2.yaml"), "utf8"));
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu;

export function validateV2() {
  const errors = [];
  const taxonomySets = new Map((TAXONOMY.sets ?? []).map((set) => [set.id, set]));
  const taxonomyGroups = new Map((TAXONOMY.sets ?? []).flatMap((set) => (set.groups ?? []).map((group) => [group.id, { ...group, coordinate: set.coordinate, setId: set.id }])));
  const registryDirs = [...taxonomySets.keys()];

  if (TAXONOMY.status !== "current-draft") errors.push("taxonomy-v2.yaml is not current-draft");
  if (TAXONOMY.binding_policy?.priority?.[0] !== "applicable_flow_set_group") errors.push("V2 priority does not start with applicable_flow_set_group");
  if (TAXONOMY.binding_policy?.priority?.[1] !== "exact_verified_uuid_for_uncovered_flow") errors.push("V2 priority does not defer exact UUID lookup");

  for (const setId of registryDirs) {
    const set = taxonomySets.get(setId);
    const file = path.join(FLOW_SET_ROOT, setId, "flow-set.yaml");
    let registry;
    try {
      registry = parseYaml(readFileSync(file, "utf8"));
    } catch (error) {
      errors.push(`${setId}: registry cannot be read (${error.message})`);
      continue;
    }
    if (registry.identity?.version !== "0.2.0") errors.push(`${setId}: registry version is not 0.2.0`);
    if (registry.scope?.coordinate !== set.coordinate) errors.push(`${setId}: coordinate does not match taxonomy`);
    const registryGroups = new Map((registry.groups ?? []).map((group) => [group.id, group]));
    const expectedGroupIds = (set.groups ?? []).map((group) => group.id);
    if (JSON.stringify([...registryGroups.keys()]) !== JSON.stringify(expectedGroupIds)) errors.push(`${setId}: registry groups do not exactly match taxonomy-v2`);
    for (const [groupId, group] of registryGroups) {
      const definition = taxonomyGroups.get(groupId);
      if (!definition) {
        errors.push(`${setId}/${groupId}: group is not in taxonomy-v2`);
        continue;
      }
      const minimum = definition.importance === "high" ? 1 : 5;
      if (Number(group.candidate_uuid_count ?? 0) < minimum) errors.push(`${setId}/${groupId}: candidate count is below V2 threshold`);
      const identities = new Set();
      for (const candidate of group.candidates ?? []) {
        const identity = `${candidate.uuid}@${candidate.version}`;
        if (identities.has(identity)) errors.push(`${setId}/${groupId}: duplicate candidate ${identity}`);
        identities.add(identity);
        if (!UUID_RE.test(String(candidate.uuid ?? ""))) errors.push(`${setId}/${groupId}: malformed UUID ${candidate.uuid}`);
        if (Number(candidate.source?.state_code) !== 100) errors.push(`${setId}/${groupId}: candidate is not published`);
        const expectedType = definition.coordinate === "product-input" ? "Product flow" : "Elementary flow";
        if (candidate.flow_type !== expectedType) errors.push(`${setId}/${groupId}: wrong flow type ${candidate.flow_type}`);
        if (!["accepted", "needs_review"].includes(candidate.semantic_status)) errors.push(`${setId}/${groupId}: invalid semantic status`);
      }
    }
  }
  return { ok: errors.length === 0, errors, sets: taxonomySets.size, groups: taxonomyGroups.size };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const result = validateV2();
  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exitCode = 1;
}
