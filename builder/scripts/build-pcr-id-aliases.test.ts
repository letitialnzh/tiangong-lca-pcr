import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import {
  CPC_3_ACCEPTED_MAPPING_PATH,
  CPC_3_LEAF_SLUGS_PATH,
  PCR_ID_ALIASES_PATH,
  buildOrCheckPcrIdAliases,
  createPcrIdAliasRegistry,
} from "./build-pcr-id-aliases.ts";
import { renderYaml } from "../../packages/pcr-core/src/yaml-lite.ts";

function leaf(code: string, slug: string) {
  return {
    code,
    title: `Leaf ${code}`,
    pcr_dir: `library/pcrs/domain/subdomain/${slug}`,
    pcr_id: `pcr.domain.subdomain.${slug}`,
  };
}

function inventory(leaves: ReturnType<typeof leaf>[]) {
  return {
    schema_version: 1,
    classification_system: "CPC",
    classification_version: "3.0",
    status: "scaffold",
    leaves,
  };
}

function acceptedEdge(sourceLeaf: ReturnType<typeof leaf>, pcrId = sourceLeaf.pcr_id) {
  return {
    code: sourceLeaf.code,
    label: sourceLeaf.title,
    pcr_id: pcrId,
    mapping_type: "exact",
    confidence: "reviewed",
    acceptance: {
      status: "accepted",
      decided_by: "maintainers",
      decided_at_utc: "2026-07-14T14:44:36Z",
      decision_ref: "docs/adr/decision.md",
    },
  };
}

function mapping(mappings: ReturnType<typeof acceptedEdge>[]) {
  return {
    schema_version: 2,
    classification_system: "CPC",
    classification_version: "3.0",
    status: "current",
    mappings,
  };
}

test("alias registry omits canonical leaf ids and routes unmapped leaves to coverage", () => {
  const canonical = leaf("100", "canonical");
  const unmapped = leaf("200", "unmapped");
  const registry = createPcrIdAliasRegistry({
    leafSlugs: inventory([canonical, unmapped]),
    mapping: mapping([acceptedEdge(canonical)]),
  });

  assert.equal(registry.aliases.length, 1);
  assert.deepEqual(registry.aliases[0]!.target, {
    kind: "classification_coverage",
    classification_system: "cpc",
    classification_version: "3.0",
    code: "200",
  });
  assert.equal(registry.aliases[0]!.source_pcr_id, unmapped.pcr_id);
});

test("a mapping to a different semantic PCR preserves the old id's coverage locator", () => {
  const source = leaf("100", "old-name");
  const registry = createPcrIdAliasRegistry({
    leafSlugs: inventory([source]),
    mapping: mapping([acceptedEdge(source, "pcr.domain.subdomain.reviewed-name")]),
  });

  assert.deepEqual(registry.aliases[0]!.target, {
    kind: "classification_coverage",
    classification_system: "cpc",
    classification_version: "3.0",
    code: "100",
  });
  assert.equal(registry.aliases[0]!.reason, "empty_scaffold_migration");
});

test("alias registry rejects duplicate leaf-derived identities", () => {
  const first = leaf("100", "duplicate");
  const second = { ...leaf("200", "other"), pcr_id: first.pcr_id };
  assert.throws(
    () => createPcrIdAliasRegistry({
      leafSlugs: inventory([first, second]),
      mapping: mapping([]),
    }),
    /leaf-derived PCR id .* occurs more than once/u,
  );
});

test("build and check keep the checked-in alias registry deterministic", (t) => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-alias-build-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const sourceLeaf = leaf("100", "unmapped");
  for (const relativePath of [CPC_3_LEAF_SLUGS_PATH, CPC_3_ACCEPTED_MAPPING_PATH]) {
    mkdirSync(path.dirname(path.join(root, relativePath)), { recursive: true });
  }
  writeFileSync(
    path.join(root, CPC_3_LEAF_SLUGS_PATH),
    `${JSON.stringify(inventory([sourceLeaf]), null, 2)}\n`,
  );
  writeFileSync(path.join(root, CPC_3_ACCEPTED_MAPPING_PATH), renderYaml(mapping([])));
  const normalizedLeavesPath = path.join(
    root,
    "classifications/systems/cpc/3.0/normalized/leaves.json",
  );
  writeFileSync(
    normalizedLeavesPath,
    `${JSON.stringify({
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [{ code: sourceLeaf.code }],
    }, null, 2)}\n`,
  );
  const decisionPath = path.join(
    root,
    "docs/adr/0003-retire-cpc-leaf-derived-pcr-identities.md",
  );
  mkdirSync(path.dirname(decisionPath), { recursive: true });
  writeFileSync(decisionPath, "# Fixture alias decision\n");
  mkdirSync(path.join(root, "library/pcrs"), { recursive: true });

  const built = buildOrCheckPcrIdAliases(root);
  assert.equal(built.registry.aliases.length, 1);
  assert.equal(
    readFileSync(path.join(root, PCR_ID_ALIASES_PATH), "utf8"),
    built.content,
  );
  assert.doesNotThrow(() => buildOrCheckPcrIdAliases(root, { checkOnly: true }));

  writeFileSync(path.join(root, PCR_ID_ALIASES_PATH), "schema_version: 1\n");
  assert.throws(
    () => buildOrCheckPcrIdAliases(root, { checkOnly: true }),
    /is stale; run npm run aliases:build/u,
  );
});
