import { closeSync, constants, fstatSync, lstatSync, openSync, readFileSync } from "node:fs";
import path from "node:path";

import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";

// Earlier accepted edges retain their durable historical references.
export const CPC_CODE_DECISION_EFFECTIVE_AT_UTC = "2026-09-29T05:07:13Z";

function safeDecisionText(root, relativePath) {
  const parts = relativePath.split("/");
  let current = path.resolve(root);
  for (const [index, part] of parts.entries()) {
    current = path.join(current, part);
    const stat = lstatSync(current);
    if (stat.isSymbolicLink() || (index < parts.length - 1 ? !stat.isDirectory() : !stat.isFile())) {
      throw new Error("decision path must contain only canonical directories and a regular file");
    }
  }
  const descriptor = openSync(current, constants.O_RDONLY | (constants.O_NOFOLLOW ?? 0));
  try {
    if (!fstatSync(descriptor).isFile()) throw new Error("decision path is not a regular file");
    return new TextDecoder("utf-8", { fatal: true }).decode(readFileSync(descriptor));
  } finally {
    closeSync(descriptor);
  }
}

export function inspectCpcDecisionRefs({ root, mapping, source }) {
  if (String(mapping?.classification_system ?? "").toLowerCase() !== "cpc") return [];
  const version = String(mapping.classification_version ?? "");
  const problems = [];
  for (const edge of mapping.mappings ?? []) {
    const acceptance = edge?.acceptance ?? {};
    const decidedAt = Date.parse(String(acceptance.decided_at_utc ?? ""));
    if (!Number.isFinite(decidedAt) || decidedAt < Date.parse(CPC_CODE_DECISION_EFFECTIVE_AT_UTC)) continue;
    const code = String(edge.code ?? "");
    if (!/^[A-Za-z0-9_-]+$/u.test(code) || !/^[A-Za-z0-9._-]+$/u.test(version)) {
      problems.push(`${source}: unsafe CPC decision coordinate ${version}:${code}`);
      continue;
    }
    const expected = `docs/adr/cpc-${code}.md`;
    if (acceptance.decision_ref !== expected) {
      problems.push(`${source}: CPC ${code} accepted after ${CPC_CODE_DECISION_EFFECTIVE_AT_UTC} must use decision_ref ${expected}`);
      continue;
    }
    let text;
    try {
      text = safeDecisionText(root, expected);
    } catch (error) {
      problems.push(`${source}: CPC ${code} decision record ${expected} is missing or unsafe (${error.code ?? error.message})`);
      continue;
    }
    const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u.exec(text);
    if (!match) {
      problems.push(`${expected}: accepted CPC decision requires YAML frontmatter`);
      continue;
    }
    let metadata;
    try {
      metadata = parseYaml(match[1]);
    } catch (error) {
      problems.push(`${expected}: invalid decision frontmatter (${error.message})`);
      continue;
    }
    const fields = {
      docType: "decision",
      status: "accepted",
      authoritative: true,
      classification_system: "CPC",
      classification_version: version,
      classification_code: code,
      pcr_id: edge.pcr_id,
      mapping_type: edge.mapping_type,
      decided_by: acceptance.decided_by,
      decided_at_utc: acceptance.decided_at_utc,
    };
    for (const [field, value] of Object.entries(fields)) {
      if (metadata?.[field] !== value) {
        problems.push(`${expected}: ${field} must match accepted mapping (${String(value)})`);
      }
    }
  }
  return problems;
}
