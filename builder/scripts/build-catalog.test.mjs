import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  CPC_3_COVERAGE_PATH,
  CPC_3_MAPPING_PATH,
  COVERAGE_SOURCE_DESCRIPTORS,
  buildCatalog,
  buildCoverageIndex,
  buildMaterialIndex,
  buildOrCheckCatalog,
  createCatalogArtifacts,
  staleArtifactIssues,
  writeCatalogArtifacts,
} from "./build-catalog.mjs";
import { readClassificationCoverage } from "../../packages/pcr-core/src/classification-coverage.mjs";
import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  buildOrCheckPcrIdAliases,
  CPC_3_LEAF_SLUGS_PATH,
  PCR_ID_ALIAS_DECISION_REF,
} from "./build-pcr-id-aliases.mjs";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const catalogScriptPath = path.join(repositoryRoot, "builder/scripts/build-catalog.mjs");

test("catalog command help explains recovery and stale-lock authority", () => {
  const help = spawnSync(process.execPath, [catalogScriptPath, "--help"], {
    cwd: repositoryRoot,
    encoding: "utf8",
  });
  assert.equal(help.status, 0, help.stderr);
  assert.match(help.stdout, /journaled whole-set transaction/u);
  assert.match(help.stdout, /--recover/u);
  assert.match(help.stdout, /--force-stale-lock/u);
  assert.match(help.stdout, /confirming no writer is active/u);
  assert.match(help.stdout, /Next:/u);

  const invalid = spawnSync(process.execPath, [catalogScriptPath, "--force-stale-lock"], {
    cwd: repositoryRoot,
    encoding: "utf8",
  });
  assert.equal(invalid.status, 1);
  assert.match(invalid.stderr, /valid only with --recover/u);
});

test("catalog generator emits a self-consistent material index and complete CPC coverage", () => {
  const result = createCatalogArtifacts(repositoryRoot);
  const byPath = new Map(result.artifacts.map((artifact) => [artifact.path, artifact.value]));
  const materialIndex = byPath.get("library/indexes/pcr-index.yaml");
  const coverage = byPath.get(CPC_3_COVERAGE_PATH);
  const mapping = parseYaml(readFileSync(path.join(repositoryRoot, CPC_3_MAPPING_PATH), "utf8"));
  const mappedCount = mapping.mappings.length;
  const unmappedCount = coverage.summary.total - mappedCount;

  assert.deepEqual(result.issues, []);
  assert.equal(materialIndex.index_kind, "tiangong-pcr-material-catalog");
  assert.equal(materialIndex.summary.total, materialIndex.pcrs.length);
  assert.ok(materialIndex.pcrs.every((entry) => entry.status !== "scaffold"));
  assert.ok(materialIndex.pcrs.every((entry) => entry.content_maturity !== "empty_scaffold"));
  assert.equal(result.aliases.length, unmappedCount);
  const catalog = byPath.get("library/catalog.yaml");
  assert.equal(
    catalog.pcr_id_aliases.path,
    "classifications/aliases/pcr-id-aliases.yaml",
  );
  assert.equal(catalog.pcr_id_aliases.hash_mode, "exact_bytes");
  assert.match(catalog.pcr_id_aliases.sha256, /^sha256:[0-9a-f]{64}$/u);
  assert.equal(catalog.pcr_id_aliases.entry_count, result.aliases.length);

  assert.deepEqual(coverage.summary, {
    total: 2877,
    mapped: mappedCount,
    unmapped: unmappedCount,
    candidate_suggestion: 0,
    manual_review: 0,
    unknown: 0,
  });
  assert.equal(new Set(coverage.entries.map((entry) => entry.code)).size, 2877);
  assert.equal(coverage.source.contract_version, "2");
  assert.equal(coverage.source.generator, "builder/scripts/build-catalog.mjs");
  assert.equal(coverage.source.generator_version, "2");
  assert.equal(coverage.source.normalized_leaves.hash_mode, "exact_bytes");
  assert.match(coverage.source.normalized_leaves.sha256, /^sha256:[0-9a-f]{64}$/u);
  assert.equal(coverage.source.mapping.hash_mode, "exact_bytes");
  assert.match(coverage.source.mapping.sha256, /^sha256:[0-9a-f]{64}$/u);

  const wheatSeed = coverage.entries.find((entry) => entry.code === "01111");
  assert.equal(wheatSeed.coverage_status, "mapped");
  assert.equal(wheatSeed.mapping.mapping_type, "exact");
  assert.equal(wheatSeed.mapping.acceptance.status, "accepted");
  assert.equal(wheatSeed.legacy_reference, null);

  const wheatOther = coverage.entries.find((entry) => entry.code === "01112");
  assert.equal(wheatOther.coverage_status, "unmapped");
  assert.equal(wheatOther.mapping, null);
  assert.equal(wheatOther.legacy_reference, null);
});

test("catalog alias projection fails closed for missing, empty, omitted, or stale aliases", async (t) => {
  await t.test("missing generated registry", () => {
    const root = makeAliasProjectionFixture();
    try {
      rmSync(path.join(root, "classifications/aliases/pcr-id-aliases.yaml"));
      assert.throws(
        () => createCatalogArtifacts(root),
        /pcr-id-aliases\.yaml is missing/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("empty generated registry", () => {
    const root = makeAliasProjectionFixture();
    try {
      writeEmptyAliasRegistry(root);
      assert.throws(
        () => createCatalogArtifacts(root),
        /pcr-id-aliases\.yaml is stale/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("one deterministic alias omitted", () => {
    const root = makeAliasProjectionFixture();
    try {
      const aliasesPath = path.join(root, "classifications/aliases/pcr-id-aliases.yaml");
      const document = parseYaml(readFileSync(aliasesPath, "utf8"));
      document.aliases.pop();
      writeFileSync(aliasesPath, renderYaml(document), "utf8");
      assert.throws(
        () => createCatalogArtifacts(root),
        /pcr-id-aliases\.yaml is stale/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("registry byte drift invalidates catalog check", () => {
    const root = makeAliasProjectionFixture();
    try {
      buildOrCheckCatalog(root);
      const aliasesPath = path.join(root, "classifications/aliases/pcr-id-aliases.yaml");
      writeFileSync(
        aliasesPath,
        `${readFileSync(aliasesPath, "utf8")}\n`,
        "utf8",
      );
      assert.throws(
        () => buildOrCheckCatalog(root, { checkOnly: true }),
        /pcr-id-aliases\.yaml is stale/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("catalog binding drift is stale even when registry is unchanged", () => {
    const root = makeAliasProjectionFixture();
    try {
      buildOrCheckCatalog(root);
      const catalogPath = path.join(root, "library/catalog.yaml");
      const catalog = parseYaml(readFileSync(catalogPath, "utf8"));
      catalog.pcr_id_aliases.sha256 = `sha256:${"0".repeat(64)}`;
      writeFileSync(catalogPath, renderYaml(catalog), "utf8");
      assert.throws(
        () => buildOrCheckCatalog(root, { checkOnly: true }),
        /library\/catalog\.yaml is stale/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

test("coverage semantics require accepted positive edges and surface dangling or conflicting targets", () => {
  const leaf = (code) => ({
    code,
    title: `Leaf ${code}`,
    path_codes: ["0", code],
    path_titles: ["Root", `Leaf ${code}`],
  });
  const result = buildCoverageIndex({
    leavesDocument: {
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [leaf("1"), leaf("2"), leaf("3"), leaf("4"), leaf("5"), leaf("6")],
    },
    mappingDocument: {
      schema_version: 2,
      classification_system: "CPC",
      classification_version: "3.0",
      status: "current",
      mappings: [
        fixtureMapping("1", "pcr.material"),
        fixtureMapping("2", "pcr.scaffold"),
        fixtureMapping("4", "pcr.missing"),
        fixtureMapping("5", "pcr.material"),
        fixtureMapping("5", "pcr.scaffold"),
        fixtureMapping("6", "pcr.invalid"),
      ],
    },
    manifests: [
      {
        path: "library/pcrs/example/material",
        manifest: {
          id: "pcr.material",
          status: "candidate",
          content_maturity: "authored_methodology",
        },
      },
      {
        path: "library/pcrs/example/scaffold",
        manifest: {
          id: "pcr.scaffold",
          status: "scaffold",
          content_maturity: "empty_scaffold",
        },
      },
      {
        path: "library/pcrs/example/invalid",
        manifest: {
          id: "pcr.invalid",
          status: "scaffold",
          content_maturity: "authored_methodology",
        },
      },
    ],
  });
  const byCode = new Map(result.index.entries.map((entry) => [entry.code, entry]));

  assert.equal(byCode.get("1").coverage_status, "mapped");
  assert.equal(byCode.get("2").coverage_status, "unknown");
  assert.equal(byCode.get("2").mapping.pcr_id, "pcr.scaffold");
  assert.equal(byCode.get("2").legacy_reference, null);
  assert.equal(byCode.get("3").coverage_status, "unmapped");
  assert.equal(byCode.get("3").mapping, null);
  assert.equal(byCode.get("4").coverage_status, "unknown");
  assert.equal(byCode.get("5").coverage_status, "unknown");
  assert.equal(byCode.get("6").coverage_status, "unknown");
  assert.equal(byCode.get("6").mapping.pcr_id, "pcr.invalid");
  assert.ok(result.issues.some((issue) => issue.includes("missing PCR pcr.missing")));
  assert.ok(result.issues.some((issue) => issue.includes("conflicting code 5")));
  assert.ok(result.issues.some((issue) => issue.includes("points to legacy empty scaffold pcr.scaffold")));
  assert.ok(
    result.issues.some((issue) =>
      issue.includes("mapping for 6 points to invalid PCR lifecycle pair pcr.invalid"),
    ),
  );
});

test("catalog build refuses dangling mappings before writing any artifact", () => {
  const root = makeCatalogFixture({
    leaves: [fixtureLeaf("1")],
    mappings: [fixtureMapping("1", "pcr.missing")],
  });
  try {
    assert.throws(
      () => buildOrCheckCatalog(root),
      /classification mapping for 1 points to missing PCR pcr\.missing/u,
    );
    assert.equal(existsSync(path.join(root, "library/catalog.yaml")), false);
    assert.equal(existsSync(path.join(root, "library/indexes/pcr-index.yaml")), false);
    assert.equal(existsSync(path.join(root, CPC_3_COVERAGE_PATH)), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("catalog build fails closed when a mapping targets a half-valid PCR lifecycle pair", () => {
  const root = makeCatalogFixture({
    leaves: [fixtureLeaf("1")],
    mappings: [fixtureMapping("1", "pcr.invalid")],
    manifests: [
      {
        relativeDirectory: "domain/subdomain/invalid",
        manifest: fixtureManifest("pcr.invalid", {
          status: "candidate",
          content_maturity: "empty_scaffold",
        }),
      },
    ],
  });
  try {
    const result = createCatalogArtifacts(root);
    const coverage = result.artifacts.find(
      (artifact) => artifact.path === CPC_3_COVERAGE_PATH,
    ).value;
    assert.equal(coverage.entries[0].coverage_status, "unknown");
    assert.equal(coverage.entries[0].mapping.pcr_id, "pcr.invalid");
    assert.ok(
      result.issues.some((issue) =>
        issue.includes("mapping for 1 points to invalid PCR lifecycle pair pcr.invalid"),
      ),
    );
    assert.throws(
      () => buildOrCheckCatalog(root),
      /points to invalid PCR lifecycle pair pcr\.invalid/u,
    );
    assert.equal(existsSync(path.join(root, CPC_3_COVERAGE_PATH)), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("manifest discovery excludes wrong-level records and reports the contract violation", () => {
  const root = makeCatalogFixture({
    manifests: [
      {
        relativeDirectory: "domain/subdomain/canonical",
        manifest: fixtureManifest("pcr.canonical"),
      },
      {
        relativeDirectory: "domain/wrong-level",
        manifest: fixtureManifest("pcr.wrong-level"),
      },
    ],
  });
  try {
    const result = createCatalogArtifacts(root);
    const materialIndex = result.artifacts.find(
      (artifact) => artifact.path === "library/indexes/pcr-index.yaml",
    ).value;

    assert.deepEqual(materialIndex.pcrs.map((entry) => entry.id), ["pcr.canonical"]);
    assert.ok(
      result.issues.some(
        (issue) =>
          issue ===
          "PCR manifest must use library/pcrs/<domain>/<subdomain>/<slug>/manifest.yaml: library/pcrs/domain/wrong-level/manifest.yaml",
      ),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("catalog managed inputs reject symbolic links, FIFOs, and invalid UTF-8", async (t) => {
  await t.test("normalized leaves symbolic link", () => {
    const root = makeCatalogFixture();
    try {
      const leavesPath = path.join(
        root,
        COVERAGE_SOURCE_DESCRIPTORS[0].normalizedLeavesPath,
      );
      const sourcePath = `${leavesPath}.source`;
      renameSync(leavesPath, sourcePath);
      symlinkSync(path.basename(sourcePath), leavesPath);

      assert.throws(
        () => createCatalogArtifacts(root),
        /normalized\/leaves\.json path contains a symbolic link/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("mapping FIFO", (subtest) => {
    const root = makeCatalogFixture();
    try {
      const mappingPath = path.join(root, CPC_3_MAPPING_PATH);
      rmSync(mappingPath);
      const result = spawnSync("mkfifo", [mappingPath], { encoding: "utf8" });
      if (result.error?.code === "ENOENT") {
        subtest.skip("mkfifo is unavailable on this platform");
        return;
      }
      assert.equal(result.status, 0, result.stderr);
      assert.throws(
        () => createCatalogArtifacts(root),
        /cpc-3\.0-to-pcr\.yaml must be a regular file/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("mapping invalid UTF-8", () => {
    const root = makeCatalogFixture();
    try {
      writeFileSync(path.join(root, CPC_3_MAPPING_PATH), Buffer.from([0xff]));
      assert.throws(
        () => createCatalogArtifacts(root),
        /cpc-3\.0-to-pcr\.yaml must contain valid UTF-8/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("manifest invalid UTF-8", () => {
    const root = makeCatalogFixture({
      manifests: [
        {
          relativeDirectory: "domain/subdomain/invalid-utf8",
          manifest: fixtureManifest("pcr.invalid-utf8"),
        },
      ],
    });
    try {
      const manifestPath = path.join(
        root,
        "library/pcrs/domain/subdomain/invalid-utf8/manifest.yaml",
      );
      writeFileSync(manifestPath, Buffer.from([0xff]));

      const result = createCatalogArtifacts(root);
      assert.ok(
        result.issues.some((issue) =>
          issue.includes("manifest.yaml must contain valid UTF-8"),
        ),
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

test("material index uses fail-closed methodology, legacy, and invalid lifecycle states", () => {
  const index = buildMaterialIndex([
    {
      path: "library/pcrs/domain/subdomain/status-scaffold",
      manifest: fixtureManifest("pcr.status-scaffold", {
        status: "scaffold",
        content_maturity: "authored_methodology",
      }),
    },
    {
      path: "library/pcrs/domain/subdomain/maturity-empty",
      manifest: fixtureManifest("pcr.maturity-empty", {
        status: "candidate",
        content_maturity: "empty_scaffold",
      }),
    },
    {
      path: "library/pcrs/domain/subdomain/legacy",
      manifest: fixtureManifest("pcr.legacy", {
        status: "scaffold",
        content_maturity: "empty_scaffold",
      }),
    },
  ]);

  assert.deepEqual(index.pcrs.map((entry) => entry.id), []);
  assert.equal(index.summary.total, 0);
});

test("many classification leaves may map to one material PCR without collapsing coverage", () => {
  const methodology = {
    path: "library/pcrs/domain/subdomain/methodology",
    manifest: fixtureManifest("pcr.methodology"),
  };
  const coverage = buildCoverageIndex({
    leavesDocument: {
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [fixtureLeaf("1"), fixtureLeaf("2")],
    },
    mappingDocument: {
      schema_version: 2,
      classification_system: "CPC",
      classification_version: "3.0",
      status: "current",
      mappings: [
        fixtureMapping("1", "pcr.methodology"),
        fixtureMapping("2", "pcr.methodology", "broader"),
      ],
    },
    manifests: [methodology],
  });

  assert.equal(buildMaterialIndex([methodology]).summary.total, 1);
  assert.equal(coverage.index.summary.mapped, 2);
  assert.equal(coverage.index.entries.length, 2);
  assert.deepEqual(coverage.issues, []);
});

test("coverage descriptors drive generated artifacts and catalog references", () => {
  const root = makeCatalogFixture();
  const secondDescriptor = {
    classificationSystem: "example",
    classificationVersion: "1.0",
    normalizedLeavesPath: "classifications/systems/example/1.0/normalized/leaves.json",
    mappingPath: "classifications/mappings/example-1.0-to-pcr.yaml",
    coveragePath: "classifications/indexes/example-1.0-coverage.json",
  };
  try {
    writeCoverageSourceFixture(root, secondDescriptor, {
      system: "EXAMPLE",
      version: "1.0",
      leaves: [],
      mappings: [],
    });
    const result = createCatalogArtifacts(root, {
      coverageSources: [...COVERAGE_SOURCE_DESCRIPTORS, secondDescriptor],
    });
    const catalog = result.artifacts.find((artifact) => artifact.path === "library/catalog.yaml").value;

    assert.deepEqual(result.issues, []);
    assert.ok(result.artifacts.some((artifact) => artifact.path === secondDescriptor.coveragePath));
    assert.deepEqual(catalog.classification_coverage_indexes, [
      CPC_3_COVERAGE_PATH,
      secondDescriptor.coveragePath,
    ]);
    assert.deepEqual(catalog.classification_mappings, [
      CPC_3_MAPPING_PATH,
      secondDescriptor.mappingPath,
      "classifications/mappings/cpc-2.1-to-pcr.yaml",
    ]);
    assert.equal(catalog.pcr_id_aliases.entry_count, 0);
    assert.match(catalog.pcr_id_aliases.sha256, /^sha256:[0-9a-f]{64}$/u);
    assert.deepEqual(
      buildCatalog([secondDescriptor], {
        pcrIdAliases: catalog.pcr_id_aliases,
      }).classification_coverage_indexes,
      [secondDescriptor.coveragePath],
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("source byte mutation invalidates runtime reads and deterministic catalog checks", () => {
  const root = makeCatalogFixture({ leaves: [fixtureLeaf("1")] });
  try {
    buildOrCheckCatalog(root);
    assert.equal(
      readClassificationCoverage({ root, system: "cpc", version: "3.0" }).summary.total,
      1,
    );

    const mappingPath = path.join(root, CPC_3_MAPPING_PATH);
    writeFileSync(mappingPath, `${readFileSync(mappingPath, "utf8")}\n`, "utf8");

    assert.throws(
      () => readClassificationCoverage({ root, system: "cpc", version: "3.0" }),
      (error) => {
        assert.equal(error.code, "PCR_INVALID_CLASSIFICATION_COVERAGE");
        assert.ok(
          error.details.issues.some((issue) =>
            issue.includes("source mapping exact-byte SHA-256 mismatch"),
          ),
        );
        return true;
      },
    );
    assert.throws(
      () => buildOrCheckCatalog(root, { checkOnly: true }),
      /classifications\/indexes\/cpc-3\.0-coverage\.json is stale/u,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("runtime coverage reads reject source traversal and symbolic links", () => {
  const traversalRoot = makeCatalogFixture();
  try {
    buildOrCheckCatalog(traversalRoot);
    const coveragePath = path.join(traversalRoot, CPC_3_COVERAGE_PATH);
    const coverage = JSON.parse(readFileSync(coveragePath, "utf8"));
    coverage.source.mapping.path = "../outside-mapping.yaml";
    writeFileSync(coveragePath, `${JSON.stringify(coverage, null, 2)}\n`, "utf8");

    assert.throws(
      () => readClassificationCoverage({ root: traversalRoot, system: "cpc", version: "3.0" }),
      (error) => {
        assert.equal(error.code, "PCR_INVALID_CLASSIFICATION_COVERAGE");
        assert.ok(error.details.issues.some((issue) => issue.includes("escapes the repository root")));
        return true;
      },
    );
  } finally {
    rmSync(traversalRoot, { recursive: true, force: true });
  }

  const symlinkRoot = makeCatalogFixture();
  try {
    buildOrCheckCatalog(symlinkRoot);
    const mappingPath = path.join(symlinkRoot, CPC_3_MAPPING_PATH);
    const realMappingPath = `${mappingPath}.source`;
    renameSync(mappingPath, realMappingPath);
    symlinkSync(path.basename(realMappingPath), mappingPath);

    assert.throws(
      () => readClassificationCoverage({ root: symlinkRoot, system: "cpc", version: "3.0" }),
      (error) => {
        assert.equal(error.code, "PCR_INVALID_CLASSIFICATION_COVERAGE");
        assert.ok(error.details.issues.some((issue) => issue.includes("symbolic link")));
        return true;
      },
    );
  } finally {
    rmSync(symlinkRoot, { recursive: true, force: true });
  }
});

test("catalog check compares deterministic generated bytes", () => {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-check-"));
  const artifacts = [
    {
      path: "library/index.yaml",
      content: "schema_version: 1\n",
    },
  ];
  try {
    writeCatalogArtifacts(root, artifacts);
    assert.deepEqual(staleArtifactIssues(root, artifacts), []);
    assert.equal(readFileSync(path.join(root, "library/index.yaml"), "utf8"), artifacts[0].content);

    writeFileSync(path.join(root, "library/index.yaml"), "stale: true\n", "utf8");
    assert.deepEqual(staleArtifactIssues(root, artifacts), [
      "library/index.yaml is stale; run npm run catalog:build",
    ]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("catalog writes reject escaping and duplicate artifact paths before writing", () => {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-paths-"));
  const outsidePath = path.join(path.dirname(root), `${path.basename(root)}-outside.yaml`);
  try {
    assert.throws(
      () => writeCatalogArtifacts(root, [
        { path: `../${path.basename(outsidePath)}`, content: "unsafe\n" },
      ]),
      /normalized repository-relative path/u,
    );
    assert.equal(existsSync(outsidePath), false);

    assert.throws(
      () => writeCatalogArtifacts(root, [
        { path: "library/index.yaml", content: "first\n" },
        { path: "library/index.yaml", content: "second\n" },
      ]),
      /path is duplicated/u,
    );
    assert.equal(existsSync(path.join(root, "library/index.yaml")), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outsidePath, { force: true });
  }
});

test("catalog writes reject a repository root handoff and preserve staged evidence", () => {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-root-"));
  const movedRoot = `${root}-moved`;
  const token = "root-handoff";
  try {
    assert.throws(
      () => writeCatalogArtifacts(
        root,
        [{ path: "library/index.yaml", content: "generated\n" }],
        {
          tokenFactory: () => token,
          hooks: {
            afterStage() {
              renameSync(root, movedRoot);
              mkdirSync(root);
            },
          },
        },
      ),
      /repository root changed/u,
    );
    assert.equal(existsSync(path.join(root, "library/index.yaml")), false);
    assert.equal(
      existsSync(path.join(movedRoot, "library", `.index.yaml.catalog-${token}.tmp`)),
      true,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(movedRoot, { recursive: true, force: true });
  }
});

test("catalog writes refuse a symbolic-link parent without writing outside the repository", () => {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-parent-"));
  const outsideRoot = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-outside-"));
  try {
    symlinkSync(outsideRoot, path.join(root, "library"));

    assert.throws(
      () => writeCatalogArtifacts(root, [
        { path: "library/catalog.yaml", content: "schema_version: 1\n" },
      ]),
      /parent contains a symbolic link/u,
    );
    assert.equal(existsSync(path.join(outsideRoot, "catalog.yaml")), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outsideRoot, { recursive: true, force: true });
  }
});

test("catalog writes never follow or remove a pre-existing temporary symlink", () => {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-temp-"));
  const outsideRoot = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-temp-outside-"));
  const token = "fixed-token";
  try {
    mkdirSync(path.join(root, "library"));
    const canaryPath = path.join(outsideRoot, "canary.txt");
    writeFileSync(canaryPath, "preserve me\n", "utf8");
    const temporaryPath = path.join(root, "library", `.index.yaml.catalog-${token}.tmp`);
    symlinkSync(canaryPath, temporaryPath);

    assert.throws(
      () => writeCatalogArtifacts(
        root,
        [{ path: "library/index.yaml", content: "replacement\n" }],
        { tokenFactory: () => token },
      ),
      /could not create an exclusive temporary/u,
    );
    assert.equal(readFileSync(canaryPath, "utf8"), "preserve me\n");
    assert.equal(lstatSync(temporaryPath).isSymbolicLink(), true);
    assert.equal(existsSync(path.join(root, "library/index.yaml")), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outsideRoot, { recursive: true, force: true });
  }
});

test("catalog writes preserve a concurrently changed target and clean their owned stage", () => {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-cas-"));
  const token = "cas-token";
  try {
    mkdirSync(path.join(root, "library"));
    const outputPath = path.join(root, "library/index.yaml");
    writeFileSync(outputPath, "baseline\n", "utf8");

    assert.throws(
      () => writeCatalogArtifacts(
        root,
        [{ path: "library/index.yaml", content: "generated\n" }],
        {
          tokenFactory: () => token,
          hooks: {
            afterStage() {
              writeFileSync(outputPath, "concurrent\n", "utf8");
            },
          },
        },
      ),
      /changed after staging/u,
    );
    assert.equal(readFileSync(outputPath, "utf8"), "concurrent\n");
    assert.equal(
      existsSync(path.join(root, "library", `.index.yaml.catalog-${token}.tmp`)),
      false,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("catalog writes install referenced indexes before publishing the catalog", () => {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-order-"));
  const installOrder = [];
  try {
    writeCatalogArtifacts(
      root,
      [
        { path: "library/catalog.yaml", content: "catalog\n" },
        { path: "library/indexes/pcr-index.yaml", content: "material\n" },
        { path: "classifications/indexes/cpc-3.0-coverage.json", content: "coverage\n" },
      ],
      {
        tokenFactory: ({ index }) => `order-${index}`,
        hooks: {
          beforeInstall({ path: artifactPath }) {
            installOrder.push(artifactPath);
          },
        },
      },
    );

    assert.deepEqual(installOrder, [
      "library/indexes/pcr-index.yaml",
      "classifications/indexes/cpc-3.0-coverage.json",
      "library/catalog.yaml",
    ]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

function makeCatalogFixture({ leaves = [], mappings = [], manifests = [] } = {}) {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-fixture-"));
  mkdirSync(path.join(root, "library/pcrs"), { recursive: true });
  const aliasesPath = path.join(root, "classifications/aliases/pcr-id-aliases.yaml");
  mkdirSync(path.dirname(aliasesPath), { recursive: true });
  writeFileSync(
    aliasesPath,
    renderYaml({
      schema_version: 1,
      registry_kind: "legacy-pcr-id-aliases",
      status: "current",
      aliases: [],
    }),
    "utf8",
  );
  const compatibilityMappingPath = path.join(
    root,
    "classifications/mappings/cpc-2.1-to-pcr.yaml",
  );
  mkdirSync(path.dirname(compatibilityMappingPath), { recursive: true });
  writeFileSync(
    compatibilityMappingPath,
    renderYaml({
      schema_version: 2,
      classification_system: "CPC",
      classification_version: "2.1",
      status: "current",
      mappings: [],
    }),
    "utf8",
  );
  writeCoverageSourceFixture(root, COVERAGE_SOURCE_DESCRIPTORS[0], {
    system: "CPC",
    version: "3.0",
    leaves,
    mappings,
  });
  for (const record of manifests) {
    const directory = path.join(root, "library/pcrs", record.relativeDirectory);
    mkdirSync(directory, { recursive: true });
    writeFileSync(path.join(directory, "manifest.yaml"), renderYaml(record.manifest), "utf8");
  }
  return root;
}

function makeAliasProjectionFixture() {
  const leaves = [fixtureLeaf("1"), fixtureLeaf("2")];
  const root = makeCatalogFixture({ leaves });
  const leafSlugsPath = path.join(root, CPC_3_LEAF_SLUGS_PATH);
  mkdirSync(path.dirname(leafSlugsPath), { recursive: true });
  writeFileSync(
    leafSlugsPath,
    `${JSON.stringify({
      schema_version: 1,
      classification_system: "CPC",
      classification_version: "3.0",
      status: "scaffold",
      leaves: leaves.map((leaf) => ({
        code: leaf.code,
        title: leaf.title,
        pcr_dir: `library/pcrs/legacy-fixture/cpc/leaf-${leaf.code}`,
        pcr_id: `pcr.legacy-fixture.cpc.leaf-${leaf.code}`,
      })),
    }, null, 2)}\n`,
    "utf8",
  );
  const decisionPath = path.join(root, PCR_ID_ALIAS_DECISION_REF);
  mkdirSync(path.dirname(decisionPath), { recursive: true });
  writeFileSync(decisionPath, "# Fixture alias decision\n", "utf8");
  buildOrCheckPcrIdAliases(root);
  return root;
}

function writeEmptyAliasRegistry(root) {
  writeFileSync(
    path.join(root, "classifications/aliases/pcr-id-aliases.yaml"),
    renderYaml({
      schema_version: 1,
      registry_kind: "legacy-pcr-id-aliases",
      status: "current",
      aliases: [],
    }),
    "utf8",
  );
}

function writeCoverageSourceFixture(
  root,
  descriptor,
  { system, version, leaves, mappings },
) {
  const leavesPath = path.join(root, descriptor.normalizedLeavesPath);
  const mappingPath = path.join(root, descriptor.mappingPath);
  mkdirSync(path.dirname(leavesPath), { recursive: true });
  mkdirSync(path.dirname(mappingPath), { recursive: true });
  const decisionPath = path.join(root, "docs/adr/fixture-mapping-decision.md");
  mkdirSync(path.dirname(decisionPath), { recursive: true });
  writeFileSync(decisionPath, "# Fixture mapping decision\n", "utf8");
  writeFileSync(
    leavesPath,
    `${JSON.stringify(
      {
        schema_version: 1,
        classification_system: system,
        classification_version: version,
        leaves,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  writeFileSync(
    mappingPath,
    renderYaml({
      schema_version: 2,
      classification_system: system,
      classification_version: version,
      status: "current",
      mappings,
    }),
    "utf8",
  );
}

function fixtureLeaf(code) {
  return {
    code,
    title: `Leaf ${code}`,
    path_codes: ["0", code],
    path_titles: ["Root", `Leaf ${code}`],
  };
}

function fixtureMapping(code, pcrId, mappingType = "exact") {
  return {
    code,
    label: `Leaf ${code}`,
    pcr_id: pcrId,
    mapping_type: mappingType,
    confidence: "high",
    acceptance: {
      status: "accepted",
      decided_by: "test-maintainer",
      decided_at_utc: "2026-07-14T14:44:36Z",
      decision_ref: "docs/adr/fixture-mapping-decision.md",
    },
  };
}

function fixtureManifest(id, overrides = {}) {
  return {
    schema_version: 1,
    id,
    title: { "en-US": `English ${id}`, "zh-CN": `Chinese ${id}` },
    status: "candidate",
    content_maturity: "authored_methodology",
    ...overrides,
  };
}
