import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { inspectCpcDecisionRefs } from "./cpc-decision-ref.mjs";

const reference = "docs/adr/cpc-53290.md";
const acceptedAt = "2026-09-29T05:08:00Z";

function mapping(overrides = {}) {
  return {
    classification_system: "CPC",
    classification_version: "3.0",
    mappings: [{
      code: "53290",
      pcr_id: "pcr.construction.other-civil-engineering",
      mapping_type: "exact",
      acceptance: {
        status: "accepted",
        decided_by: "reviewer@example.org",
        decided_at_utc: acceptedAt,
        decision_ref: reference,
      },
      ...overrides,
    }],
  };
}

function record(overrides = {}) {
  const fields = {
    docType: "decision",
    status: "accepted",
    authoritative: true,
    classification_system: "CPC",
    classification_version: "3.0",
    classification_code: "53290",
    pcr_id: "pcr.construction.other-civil-engineering",
    mapping_type: "exact",
    decided_by: "reviewer@example.org",
    decided_at_utc: acceptedAt,
    ...overrides,
  };
  return `---\n${Object.entries(fields).map(([key, value]) => `${key}: ${typeof value === "boolean" ? value : `"${value}"`}`).join("\n")}\n---\n\n# Decision\n`;
}

function withRoot(callback) {
  const root = mkdtempSync(path.join(os.tmpdir(), "cpc-decision-ref-"));
  try {
    const dir = path.join(root, "docs/adr");
    mkdirSync(dir, { recursive: true });
    return callback(root, dir);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test("historical accepted edge keeps its prior decision reference", () => {
  const edge = mapping();
  edge.mappings[0].acceptance.decided_at_utc = "2026-09-29T04:46:50Z";
  edge.mappings[0].acceptance.decision_ref = "docs/classification-policy.md#candidate-promotion-mapping";
  withRoot((root) => {
    assert.deepEqual(inspectCpcDecisionRefs({ root, mapping: edge, source: "mapping.yaml" }), []);
  });
});

test("new CPC edge requires its own code-named decision reference", () => {
  const edge = mapping();
  edge.mappings[0].acceptance.decision_ref = "docs/classification-policy.md#candidate-promotion-mapping";
  withRoot((root) => {
    const problems = inspectCpcDecisionRefs({ root, mapping: edge, source: "mapping.yaml" });
    assert.match(problems.join("\n"), /must use decision_ref docs\/adr\/cpc-53290\.md/u);
  });
});

test("new CPC edge requires matching accepted decision metadata", () => {
  withRoot((root, dir) => {
    const file = path.join(dir, "cpc-53290.md");
    assert.match(inspectCpcDecisionRefs({ root, mapping: mapping(), source: "mapping.yaml" }).join("\n"), /missing or unsafe/u);
    writeFileSync(file, record({ status: "draft", pcr_id: "wrong" }));
    const problems = inspectCpcDecisionRefs({ root, mapping: mapping(), source: "mapping.yaml" });
    assert.ok(problems.some((problem) => problem.includes("status must match")));
    assert.ok(problems.some((problem) => problem.includes("pcr_id must match")));
    writeFileSync(file, record());
    assert.deepEqual(inspectCpcDecisionRefs({ root, mapping: mapping(), source: "mapping.yaml" }), []);
  });
});

test("new CPC edge rejects a symlinked decision file", () => {
  withRoot((root, dir) => {
    const target = path.join(root, "target.md");
    writeFileSync(target, record());
    symlinkSync(target, path.join(dir, "cpc-53290.md"));
    assert.match(inspectCpcDecisionRefs({ root, mapping: mapping(), source: "mapping.yaml" }).join("\n"), /missing or unsafe/u);
  });
});
