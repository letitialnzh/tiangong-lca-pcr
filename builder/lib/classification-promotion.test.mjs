import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  CANDIDATE_PROMOTION_DECIDED_BY,
  CANDIDATE_PROMOTION_DECISION_REF,
  installCandidatePromotionMappings,
  planCandidatePromotionMappings,
} from "./classification-promotion.mjs";
import { createPcrIdAliasRegistry } from "../scripts/build-pcr-id-aliases.mjs";

const PCR_ID = "pcr.domain.subdomain.apples";
const PCR_PATH = "library/pcrs/domain/subdomain/apples";

function fixture(t, { existingMappings = [] } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-classification-promotion-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
  const leafPath = path.join(root, "classifications/systems/cpc/3.0/normalized/leaf-slugs.json");
  const aliasPath = path.join(root, "classifications/aliases/pcr-id-aliases.yaml");
  mkdirSync(path.dirname(mappingPath), { recursive: true });
  mkdirSync(path.dirname(leafPath), { recursive: true });
  mkdirSync(path.dirname(aliasPath), { recursive: true });
  const mapping = {
    schema_version: 2,
    classification_system: "CPC",
    classification_version: "3.0",
    status: "current",
    mappings: existingMappings,
  };
  const leafSlugs = {
    schema_version: 1,
    classification_system: "CPC",
    classification_version: "3.0",
    status: "scaffold",
    leaves: [{ code: "01341", title: "Apples", pcr_dir: PCR_PATH, pcr_id: PCR_ID }],
  };
  writeFileSync(mappingPath, renderYaml(mapping));
  writeFileSync(leafPath, `${JSON.stringify(leafSlugs, null, 2)}\n`);
  writeFileSync(aliasPath, renderYaml(createPcrIdAliasRegistry({ leafSlugs, mapping })));
  return { root, mappingPath, aliasPath };
}

function scaffoldManifest() {
  return {
    id: PCR_ID,
    classification_refs: [
      { system: "CPC", version: "3.0", code: "01341", title: "Apples", mapping_type: "exact" },
    ],
  };
}

test("candidate promotion adds the accepted mapping and removes the matching legacy alias", (t) => {
  const state = fixture(t);
  const decidedAtUtc = "2026-09-09T01:02:03Z";
  const plan = planCandidatePromotionMappings({
    root: state.root,
    manifest: scaffoldManifest(),
    decidedAtUtc,
  });

  assert.deepEqual(plan.changedCoordinates, ["cpc:3.0:01341"]);
  assert.equal(plan.aliasUpdated, true);
  installCandidatePromotionMappings(state.root, plan);

  const mapping = parseYaml(readFileSync(state.mappingPath, "utf8"));
  assert.equal(mapping.mappings.length, 1);
  assert.deepEqual(mapping.mappings[0], {
    code: "01341",
    label: "Apples",
    pcr_id: PCR_ID,
    mapping_type: "exact",
    confidence: "reviewed",
    acceptance: {
      status: "accepted",
      decided_by: CANDIDATE_PROMOTION_DECIDED_BY,
      decided_at_utc: decidedAtUtc,
      decision_ref: CANDIDATE_PROMOTION_DECISION_REF,
    },
  });
  const aliases = parseYaml(readFileSync(state.aliasPath, "utf8"));
  assert.deepEqual(aliases.aliases, []);
});

test("candidate promotion refuses to replace a classification code mapped to another PCR", (t) => {
  const conflicting = {
    code: "01341",
    label: "Apples",
    pcr_id: "pcr.domain.subdomain.other-apples",
    mapping_type: "exact",
    confidence: "reviewed",
    acceptance: {
      status: "accepted",
      decided_by: "maintainer",
      decided_at_utc: "2026-09-08T00:00:00Z",
      decision_ref: "docs/classification-policy.md#candidate-promotion-mapping",
    },
  };
  const state = fixture(t, { existingMappings: [conflicting] });
  const beforeMapping = readFileSync(state.mappingPath);
  const beforeAliases = readFileSync(state.aliasPath);

  assert.throws(
    () => planCandidatePromotionMappings({
      root: state.root,
      manifest: scaffoldManifest(),
      decidedAtUtc: "2026-09-09T01:02:03Z",
    }),
    /will not replace an accepted edge/u,
  );
  assert.deepEqual(readFileSync(state.mappingPath), beforeMapping);
  assert.deepEqual(readFileSync(state.aliasPath), beforeAliases);
});

test("candidate promotion requires explicit positive classification references", (t) => {
  const state = fixture(t);
  assert.throws(
    () => planCandidatePromotionMappings({
      root: state.root,
      manifest: { id: PCR_ID, classification_refs: [] },
      decidedAtUtc: "2026-09-09T01:02:03Z",
    }),
    /requires at least one manifest\.classification_refs/u,
  );
});
