import assert from "node:assert/strict";
import test from "node:test";

import { evidencePackSemanticProblems } from "./evidence-pack.mjs";
import { validateEvidencePack } from "./schema-contracts.mjs";

const validPack = {
  schema_version: 1,
  target: {
    pcr_id: "pcr.agriculture.crops.wheat-seed",
    scope_digest: `sha256:${"0".repeat(64)}`,
  },
  sources: [
    {
      source_id: "official-seed-standard-2024",
      title: "Official seed standard",
      source_type: "official_guidance",
      reference: "https://example.org/seed-standard-2024",
      retrieved_date: "2026-09-08",
    },
  ],
  claims: [
    {
      claim_id: "reference-flow-requires-moisture-basis",
      statement: "The reference flow must declare its moisture basis.",
      status: "supported",
      affects: ["reference_flow"],
      sources: [
        {
          source_id: "official-seed-standard-2024",
          locator: "Clause 4.2",
          relation: "supports",
        },
      ],
    },
  ],
  identity_bindings: [],
  conflicts: [],
  gaps: [],
};

test("evidence pack contract accepts a supported claim with a source", () => {
  assert.equal(validateEvidencePack(validPack).valid, true);
  assert.deepEqual(evidencePackSemanticProblems(validPack), []);
});

test("evidence pack semantic checks reject unsupported claims and unknown sources", () => {
  const invalid = structuredClone(validPack);
  invalid.claims[0].status = "supported";
  invalid.claims[0].sources[0].source_id = "missing-source";
  assert.deepEqual(evidencePackSemanticProblems(invalid), [
    'claims[0].sources[0] references unknown source_id "missing-source"',
  ]);
});

test("provisional claims remain valid without a source", () => {
  const provisional = structuredClone(validPack);
  provisional.claims[0].status = "provisional";
  provisional.claims[0].sources = [];
  assert.equal(validateEvidencePack(provisional).valid, true);
  assert.deepEqual(evidencePackSemanticProblems(provisional), []);
});
