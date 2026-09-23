import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { parsePcrMarkdownToStructured } from "../../builder/lib/markdown-projection.mjs";
import { structuredProjectionYaml } from "../../builder/lib/structured-yaml-projection.mjs";
import {
  buildGuidance,
  buildPcrTree,
  createFeedbackDraft,
  getClassificationCoverageSummary,
  getPcrReadiness,
  listClassificationCoverage,
  listPcrs,
  readPcrMarkdown,
  resolveClassification,
  resolvePcrIdentity,
  validateDatasetAgainstGuidance,
  validateModelAgainstGuidance,
} from "./src/index.mjs";
import { sha256Fingerprint, splitProjectionDocument } from "./src/projection-integrity.mjs";
import { parseYaml, renderYaml } from "./src/yaml-lite.mjs";

const repoRoot = path.resolve(".");
const wheatSeedPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const abalonePcrId =
  "pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-abalone-live-fresh-or-chilled";
const scaffoldPcrId =
  "pcr.community-social-and-personal-services.education-services.primary-education-services";
const wheatRelativePcrPath =
  "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed";
const abaloneRelativePcrPath =
  "library/pcrs/agriculture-forestry-and-fishery-products/fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products/farmed-abalone-live-fresh-or-chilled";
const scaffoldRelativePcrPath =
  "library/pcrs/community-social-and-personal-services/education-services/primary-education-services";
const pilot99000PcrId =
  "pcr.community-social-and-personal-services.services-provided-by-extraterritorial-organizations-and-bodies.services-provided-by-extraterritorial-organizations-and-bodies";
const pilot99000RelativePcrPath =
  "library/pcrs/community-social-and-personal-services/services-provided-by-extraterritorial-organizations-and-bodies/services-provided-by-extraterritorial-organizations-and-bodies";

test("listPcrs exposes canonical PCR records without relying on search", () => {
  const pcrs = listPcrs({ root: repoRoot });
  const wheatSeed = pcrs.find((entry) => entry.id === wheatSeedPcrId);

  assert.ok(wheatSeed);
  assert.equal(wheatSeed.title["en-US"], "Wheat seed for sowing");
  assert.equal(wheatSeed.title["zh-CN"], "小麦播种种子");
  assert.equal(wheatSeed.status, "candidate");
  assert.equal(wheatSeed.path.includes("/01111"), false);
  assert.equal(wheatSeed.readiness.status, "review_required");
  assert.equal(wheatSeed.readiness.usable_for_guidance, true);
});

test("listPcrs rejects a missing repository catalog instead of returning an empty success", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-missing-catalog-"));
  try {
    assert.throws(
      () => listPcrs({ root, refresh: true }),
      /PCR catalog root not found: library\/pcrs/u,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("catalog scopes separate material methodology from legacy scaffold references", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-scoped-catalog-");
  try {
    for (const relativePath of [wheatRelativePcrPath, scaffoldRelativePcrPath]) {
      const target = path.join(root, relativePath);
      mkdirSync(path.dirname(target), { recursive: true });
      cpSync(path.join(repoRoot, relativePath), target, { recursive: true });
    }

    const all = listPcrs({ root, refresh: true });
    const material = listPcrs({ root, scope: "material" });
    const legacy = listPcrs({ root, scope: "legacy" });
    const materialTree = buildPcrTree({ root, depth: 3, scope: "material" });

    assert.equal(all.length, 2);
    assert.equal(material.length, 1);
    assert.equal(material[0].id, wheatSeedPcrId);
    assert.equal(material[0].record_kind, "methodology");
    assert.equal(legacy.length, 1);
    assert.equal(legacy[0].id, scaffoldPcrId);
    assert.equal(legacy[0].record_kind, "legacy_scaffold_reference");
    assert.equal(JSON.stringify(materialTree).includes(scaffoldPcrId), false);

    const wheatManifestPath = path.join(root, wheatRelativePcrPath, "manifest.yaml");
    const wheatManifest = parseYaml(readFileSync(wheatManifestPath, "utf8"));
    wheatManifest.status = "scaffold";
    wheatManifest.content_maturity = "empty_scaffold";
    writeFileSync(wheatManifestPath, renderYaml(wheatManifest));
    for (const artifact of ["pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"]) {
      rmSync(path.join(root, wheatRelativePcrPath, artifact));
    }
    assert.equal(listPcrs({ root, scope: "material" }).length, 0);
    assert.equal(listPcrs({ root, scope: "legacy" }).length, 2);

    assert.throws(
      () => listPcrs({ root, scope: "fuzzy" }),
      (error) => error.code === "PCR_INVALID_CATALOG_SCOPE",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("catalog scope classifies half-valid lifecycle pairs as invalid, never methodology", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-invalid-record-kind-");
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const manifest = parseYaml(readFileSync(manifestPath, "utf8"));

    for (const invalidPair of [
      { status: "scaffold", content_maturity: "authored_methodology" },
      { status: "candidate", content_maturity: "empty_scaffold" },
    ]) {
      writeFileSync(manifestPath, renderYaml({ ...manifest, ...invalidPair }));
      const all = listPcrs({ root, refresh: true, scope: "all" });

      assert.equal(all.length, 1);
      assert.equal(all[0].record_kind, "invalid_lifecycle_state");
      assert.equal(all[0].readiness.usable_for_guidance, false);
      assert.ok(
        all[0].readiness.blockers.some(
          (blocker) => blocker.code === "invalid_lifecycle_identity",
        ),
      );
      assert.equal(listPcrs({ root, scope: "material" }).length, 0);
      assert.equal(listPcrs({ root, scope: "legacy" }).length, 0);
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("material scope does not read excluded legacy artifacts before manifest-only filtering", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-scope-prefilter-");
  const legacyDir = path.join(root, scaffoldRelativePcrPath);
  try {
    for (const relativePath of [wheatRelativePcrPath, scaffoldRelativePcrPath]) {
      const target = path.join(root, relativePath);
      mkdirSync(path.dirname(target), { recursive: true });
      cpSync(path.join(repoRoot, relativePath), target, { recursive: true });
    }

    const legacyManifestPath = path.join(legacyDir, "manifest.yaml");
    const legacyManifest = parseYaml(readFileSync(legacyManifestPath, "utf8"));
    const wrongHash = `sha256:${"0".repeat(64)}`;
    legacyManifest.release_artifacts = {
      pcr_en_us_sha256: wrongHash,
      pcr_zh_cn_sha256: wrongHash,
      structured_sha256: wrongHash,
    };
    writeFileSync(legacyManifestPath, renderYaml(legacyManifest));
    rmSync(path.join(legacyDir, "structured.yaml"));
    mkdirSync(path.join(legacyDir, "structured.yaml"));

    const material = listPcrs({ root, refresh: true, scope: "material" });
    assert.equal(material.length, 1);
    assert.equal(material[0].id, wheatSeedPcrId);

    assert.throws(
      () => getPcrReadiness({ root, pcrId: scaffoldPcrId }),
      (error) => {
        assert.equal(error.code, "PCR_CURRENT_SNAPSHOT_INCONSISTENT");
        assert.equal(error.details.last_failure.code, "release_artifact_hash_mismatch");
        assert.ok(
          error.details.last_failure.artifacts.some(
            (artifact) =>
              artifact.artifact === "structured.yaml" &&
              artifact.reason === "artifact_unreadable:PCR_CANONICAL_FILE_NOT_REGULAR",
          ),
        );
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("catalog discovers only canonical three-level PCR manifests and never follows symlinks", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-canonical-discovery-");
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    writeManagedPublishedManifest(pcrDir);

    const nestedManifest = readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8");
    for (const nestedPath of ["revision/manifest.yaml", "releases/1.0.0/manifest.yaml"]) {
      const target = path.join(pcrDir, nestedPath);
      mkdirSync(path.dirname(target), { recursive: true });
      writeFileSync(target, nestedManifest);
    }

    const symlinkParent = path.join(root, "library/pcrs/symlink-domain/symlink-subdomain");
    mkdirSync(symlinkParent, { recursive: true });
    symlinkSync(pcrDir, path.join(symlinkParent, "symlink-pcr"), "dir");

    const pcrs = listPcrs({ root, refresh: true });
    assert.equal(pcrs.length, 1);
    assert.equal(pcrs[0].id, wheatSeedPcrId);
    assert.equal(pcrs[0].path, wheatRelativePcrPath);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("catalog fails closed when canonical manifests duplicate a PCR id", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-duplicate-id-");
  try {
    for (const relativePath of [
      "library/pcrs/domain-a/subdomain-a/pcr-a",
      "library/pcrs/domain-b/subdomain-b/pcr-b",
    ]) {
      const pcrDir = path.join(root, relativePath);
      mkdirSync(path.dirname(pcrDir), { recursive: true });
      cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    }

    assert.throws(
      () => listPcrs({ root, refresh: true }),
      (error) => {
        assert.equal(error.code, "PCR_DUPLICATE_ID");
        assert.equal(error.details.pcr_id, wheatSeedPcrId);
        assert.equal(error.details.paths.length, 2);
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("PCR readiness distinguishes authored guidance from empty scaffolds", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-readiness-kinds-");
  try {
    for (const relativePath of [wheatRelativePcrPath, scaffoldRelativePcrPath]) {
      const target = path.join(root, relativePath);
      mkdirSync(path.dirname(target), { recursive: true });
      cpSync(path.join(repoRoot, relativePath), target, { recursive: true });
    }
    const authored = getPcrReadiness({ root, pcrId: wheatSeedPcrId, refresh: true });
    const scaffold = getPcrReadiness({ root, pcrId: scaffoldPcrId });

    assert.equal(authored.methodology_status, "authored_methodology");
    assert.equal(authored.usable_for_guidance, true);
    assert.equal(authored.usable_for_validation, true);
    assert.equal(scaffold.status, "unavailable");
    assert.equal(scaffold.methodology_status, "empty_scaffold");
    assert.equal(scaffold.usable_for_guidance, false);
    assert.equal(scaffold.projection_fingerprint.required, false);
    assert.equal(scaffold.projection_fingerprint.status, "not_required");
    assert.equal(scaffold.projection_fingerprint.schema_valid, null);
    assert.ok(scaffold.blockers.some((blocker) => blocker.code === "methodology_not_authored"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("readiness revalidates projection fingerprints after catalog caching", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-fingerprint-cache-");
  const sourcePcrDir = path.join(repoRoot, wheatRelativePcrPath);
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(sourcePcrDir, pcrDir, { recursive: true });

    const current = getPcrReadiness({ root, pcrId: wheatSeedPcrId, refresh: true });
    assert.equal(current.projection_fingerprint.status, "current");
    assert.equal(current.projection_fingerprint.schema_valid, true);

    const markdownPath = path.join(pcrDir, "pcr.en-US.md");
    const markdown = readFileSync(markdownPath, "utf8");
    writeFileSync(markdownPath, `${markdown}\n<!-- fingerprint drift -->\n`);

    const stale = getPcrReadiness({ root, pcrId: wheatSeedPcrId });
    assert.equal(stale.status, "unavailable");
    assert.equal(stale.projection_fingerprint.status, "source_mismatch");
    assert.equal(stale.projection_fingerprint.source_hash_valid, false);
    assert.ok(stale.blockers.some((blocker) => blocker.code === "projection_source_mismatch"));
    assert.throws(
      () => buildGuidance({ root, pcrId: wheatSeedPcrId }),
      (error) => error.code === "PCR_NOT_USABLE_FOR_GUIDANCE",
    );

    writeFileSync(markdownPath, markdown);
    const restored = getPcrReadiness({ root, pcrId: wheatSeedPcrId });
    assert.equal(restored.projection_fingerprint.status, "current");
    assert.equal(restored.usable_for_guidance, true);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("current snapshots observe lifecycle changes without a catalog refresh", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-current-manifest-");
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });

    const initial = getPcrReadiness({ root, pcrId: wheatSeedPcrId, refresh: true });
    assert.equal(initial.usable_for_guidance, true);

    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const manifest = parseYaml(readFileSync(manifestPath, "utf8"));
    manifest.status = "deprecated";
    manifest.content_maturity = "deprecated_methodology";
    manifest.version = "9.9.9";
    writeFileSync(manifestPath, renderYaml(manifest));

    const current = getPcrReadiness({ root, pcrId: wheatSeedPcrId });
    assert.equal(current.lifecycle_status, "deprecated");
    assert.equal(current.methodology_status, "deprecated_methodology");
    assert.ok(current.blockers.some((blocker) => blocker.code === "deprecated_methodology"));
    assert.throws(
      () => buildGuidance({ root, pcrId: wheatSeedPcrId }),
      (error) => error.code === "PCR_NOT_USABLE_FOR_GUIDANCE",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("managed published PCR reads a hash-verified current snapshot", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-published-snapshot-");
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    writeManagedPublishedManifest(pcrDir);

    const readiness = getPcrReadiness({ root, pcrId: wheatSeedPcrId, refresh: true });
    const guidance = buildGuidance({ root, pcrId: wheatSeedPcrId });
    const chineseMarkdown = readPcrMarkdown({
      root,
      pcrId: wheatSeedPcrId,
      language: "zh-CN",
    });

    assert.equal(readiness.status, "ready");
    assert.equal(readiness.lifecycle_status, "published");
    assert.equal(guidance.pcr.version, "1.0.0");
    assert.equal(guidance.readiness.usable_for_guidance, true);
    assert.match(chineseMarkdown, /小麦/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("legacy published PCR without release_artifacts remains readable", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-legacy-published-");
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    writePublishedManifest(pcrDir, { managed: false });

    const guidance = buildGuidance({ root, pcrId: wheatSeedPcrId });
    assert.equal(guidance.pcr.status, "published");
    assert.equal(guidance.pcr.version, "1.0.0");
    assert.equal(guidance.readiness.status, "ready");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("managed published PCR fails closed with stable details when any artifact hash drifts", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-published-drift-");
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    writeManagedPublishedManifest(pcrDir);
    writeFileSync(path.join(pcrDir, "pcr.zh-CN.md"), "# drifted published bytes\n");

    for (const consume of [
      () => getPcrReadiness({ root, pcrId: wheatSeedPcrId, refresh: true }),
      () => buildGuidance({ root, pcrId: wheatSeedPcrId }),
      () => readPcrMarkdown({ root, pcrId: wheatSeedPcrId, language: "en-US" }),
    ]) {
      assert.throws(consume, (error) => {
        assert.equal(error.code, "PCR_CURRENT_SNAPSHOT_INCONSISTENT");
        assert.equal(error.details.pcr_id, wheatSeedPcrId);
        assert.equal(error.details.attempts, 3);
        assert.equal(error.details.last_failure.code, "release_artifact_hash_mismatch");
        assert.ok(
          error.details.last_failure.artifacts.some(
            (artifact) =>
              artifact.artifact === "pcr.zh-CN.md" && artifact.reason === "sha256_mismatch",
          ),
        );
        return true;
      });
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("release_artifacts hashes are enforced even when current status is candidate", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-candidate-snapshot-hashes-");
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    writeManagedPublishedManifest(pcrDir);

    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const manifest = parseYaml(readFileSync(manifestPath, "utf8"));
    manifest.status = "candidate";
    manifest.content_maturity = "authored_methodology";
    delete manifest.published_at_utc;
    writeFileSync(manifestPath, renderYaml(manifest));
    writeFileSync(path.join(pcrDir, "pcr.zh-CN.md"), "# candidate bytes drifted after hashing\n");

    assert.throws(
      () => getPcrReadiness({ root, pcrId: wheatSeedPcrId, refresh: true }),
      (error) => {
        assert.equal(error.code, "PCR_CURRENT_SNAPSHOT_INCONSISTENT");
        assert.equal(error.details.last_failure.code, "release_artifact_hash_mismatch");
        assert.equal(error.details.last_failure.manifest_status, "candidate");
        assert.ok(
          error.details.last_failure.artifacts.some(
            (artifact) =>
              artifact.artifact === "pcr.zh-CN.md" && artifact.reason === "sha256_mismatch",
          ),
        );
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("managed release state cannot downgrade to legacy reads by deleting release_artifacts", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-managed-hashes-required-");
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    writeManagedPublishedManifest(pcrDir);
    mkdirSync(path.join(pcrDir, "releases/1.0.0"), { recursive: true });
    writeFileSync(path.join(pcrDir, "release-history.yaml"), "schema_version: 1\n");

    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const manifest = parseYaml(readFileSync(manifestPath, "utf8"));
    delete manifest.release_artifacts;
    writeFileSync(manifestPath, renderYaml(manifest));

    assert.throws(
      () => buildGuidance({ root, pcrId: wheatSeedPcrId }),
      (error) => {
        assert.equal(error.code, "PCR_CURRENT_SNAPSHOT_INCONSISTENT");
        assert.equal(error.details.attempts, 3);
        assert.equal(error.details.last_failure.code, "managed_release_artifacts_missing");
        assert.equal(error.details.last_failure.manifest_status, "published");
        assert.deepEqual(error.details.last_failure.managed_markers, [
          "release-history.yaml",
          "releases",
        ]);
        assert.equal(error.details.last_failure.required_field, "manifest.release_artifacts");
        assert.deepEqual(
          error.details.last_failure.required_hash_fields,
          ["pcr_en_us_sha256", "pcr_zh_cn_sha256", "structured_sha256"],
        );
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("cached PCR paths fail closed after a canonical leaf is swapped for an external symlink", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-cached-leaf-");
  const outsideRoot = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-outside-leaf-"));
  const pcrDir = path.join(root, wheatRelativePcrPath);
  const outsidePcrDir = path.join(outsideRoot, "wheat-seed");
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), outsidePcrDir, { recursive: true });

    const cached = getPcrReadiness({ root, pcrId: wheatSeedPcrId, refresh: true });
    assert.equal(cached.usable_for_guidance, true);

    rmSync(pcrDir, { recursive: true, force: true });
    symlinkSync(outsidePcrDir, pcrDir, "dir");

    assert.throws(
      () => getPcrReadiness({ root, pcrId: wheatSeedPcrId }),
      (error) => {
        assert.equal(error.code, "PCR_CURRENT_SNAPSHOT_INCONSISTENT");
        assert.equal(error.details.attempts, 3);
        assert.equal(error.details.last_failure.code, "canonical_pcr_path_invalid");
        assert.equal(error.details.last_failure.path_component, wheatRelativePcrPath);
        assert.equal(error.details.last_failure.reason, "symbolic_link");
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outsideRoot, { recursive: true, force: true });
  }
});

test("material readiness rejects missing projection metadata and schema drift", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-projection-contract-");
  const sourcePcrDir = path.join(repoRoot, wheatRelativePcrPath);
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(sourcePcrDir, pcrDir, { recursive: true });
    const structuredPath = path.join(pcrDir, "structured.yaml");
    const structured = readFileSync(structuredPath, "utf8");
    writeFileSync(structuredPath, structured.replace(/projection_metadata:\n[\s\S]*$/u, ""));

    const readiness = getPcrReadiness({ root, pcrId: wheatSeedPcrId, refresh: true });
    assert.equal(readiness.status, "unavailable");
    assert.equal(readiness.projection_fingerprint.status, "invalid");
    assert.equal(readiness.projection_fingerprint.schema_valid, false);
    assert.ok(
      readiness.blockers.some((blocker) => blocker.code === "projection_fingerprint_missing"),
    );
    assert.ok(
      readiness.blockers.some((blocker) => blocker.code === "structured_schema_invalid"),
    );
    assert.ok(
      readiness.blockers.some((blocker) => blocker.code === "structured_schema.required"),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("readiness reports schema blockers even when projection fingerprints are current", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-schema-blocker-");
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    const structuredPath = path.join(pcrDir, "structured.yaml");
    const original = readFileSync(structuredPath, "utf8");
    const split = splitProjectionDocument(original);
    assert.equal(split.valid, true);
    const changedContent = split.generatedContent.replace(
      "schema_version: 1\n",
      "schema_version: 1\nruntime_only: true\n",
    );
    const changed = `${changedContent}${original.slice(split.generatedContent.length)}`.replace(
      /(  generated_content_sha256: )"sha256:[0-9a-f]{64}"/u,
      `$1"${sha256Fingerprint(changedContent)}"`,
    );
    writeFileSync(structuredPath, changed);

    const readiness = getPcrReadiness({ root, pcrId: wheatSeedPcrId, refresh: true });

    assert.equal(readiness.status, "unavailable");
    assert.equal(readiness.projection_fingerprint.status, "invalid");
    assert.equal(readiness.projection_fingerprint.schema_valid, false);
    assert.equal(readiness.projection_fingerprint.source_hash_valid, true);
    assert.equal(readiness.projection_fingerprint.content_hash_valid, true);
    assert.ok(
      readiness.blockers.some((blocker) => blocker.code === "structured_schema_invalid"),
    );
    assert.ok(
      readiness.blockers.some(
        (blocker) => blocker.code === "structured_schema.additionalProperties",
      ),
    );
    assert.equal(
      readiness.blockers.some((blocker) => blocker.code === "projection_content_mismatch"),
      false,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("catalog isolates an unreadable structured projection to its PCR readiness", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-isolated-projection-");
  const wheatDir = path.join(root, wheatRelativePcrPath);
  const abaloneDir = path.join(root, abaloneRelativePcrPath);
  try {
    mkdirSync(path.dirname(wheatDir), { recursive: true });
    mkdirSync(path.dirname(abaloneDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), wheatDir, { recursive: true });
    cpSync(path.join(repoRoot, abaloneRelativePcrPath), abaloneDir, { recursive: true });

    const brokenStructuredPath = path.join(wheatDir, "structured.yaml");
    rmSync(brokenStructuredPath);
    mkdirSync(brokenStructuredPath);

    const pcrs = listPcrs({ root, refresh: true });
    const wheat = pcrs.find((entry) => entry.id === wheatSeedPcrId);
    const abalone = pcrs.find((entry) => entry.id === abalonePcrId);

    assert.equal(pcrs.length, 2);
    assert.equal(wheat.readiness.status, "unavailable");
    assert.equal(wheat.readiness.structured_projection_available, false);
    assert.equal(wheat.readiness.projection_fingerprint.schema_valid, false);
    assert.ok(
      wheat.readiness.blockers.some(
        (blocker) => blocker.code === "structured_projection_unreadable",
      ),
    );
    assert.equal(abalone.readiness.usable_for_guidance, true);
    assert.equal(buildGuidance({ root, pcrId: abalonePcrId }).pcr.id, abalonePcrId);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("guidance revalidates and consumes the current verified structured projection", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-guidance-snapshot-");
  const pcrDir = path.join(root, wheatRelativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });

    const originalGuidance = buildGuidance({ root, pcrId: wheatSeedPcrId });
    assert.equal(originalGuidance.reference_flow.reference_unit, "kg");

    const structuredPath = path.join(pcrDir, "structured.yaml");
    const original = readFileSync(structuredPath, "utf8");
    const split = splitProjectionDocument(original);
    assert.equal(split.valid, true);
    const changedContent = split.generatedContent.replace(
      '  reference_unit: "kg"',
      '  reference_unit: "kg fresh mass"',
    );
    assert.notEqual(changedContent, split.generatedContent);
    const changed = `${changedContent}${original.slice(split.generatedContent.length)}`.replace(
      /(  generated_content_sha256: )"sha256:[0-9a-f]{64}"/u,
      `$1"${sha256Fingerprint(changedContent)}"`,
    );
    writeFileSync(structuredPath, changed);

    const currentGuidance = buildGuidance({ root, pcrId: wheatSeedPcrId });
    assert.equal(currentGuidance.readiness.projection_fingerprint.status, "current");
    assert.equal(currentGuidance.reference_flow.reference_unit, "kg fresh mass");

    writeFileSync(
      structuredPath,
      changed.replace('  reference_unit: "kg fresh mass"', '  reference_unit: "stale bytes"'),
    );
    assert.throws(
      () => validateDatasetAgainstGuidance({
        root,
        pcrId: wheatSeedPcrId,
        dataset: {},
      }),
      (error) => {
        assert.equal(error.code, "PCR_NOT_USABLE_FOR_VALIDATION");
        assert.ok(
          error.readiness.blockers.some(
            (blocker) => blocker.code === "projection_content_mismatch",
          ),
        );
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("material readiness rejects schema-valid projections with incomplete methodology", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-projection-completeness-");
  const relativePcrPath =
    "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed";
  const sourcePcrDir = path.join(repoRoot, relativePcrPath);
  const pcrDir = path.join(root, relativePcrPath);
  try {
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(sourcePcrDir, pcrDir, { recursive: true });

    const markdownPath = path.join(pcrDir, "pcr.en-US.md");
    const markdown = readFileSync(markdownPath, "utf8");
    const projection = parsePcrMarkdownToStructured(markdown);
    projection.functionalUnit = null;
    writeFileSync(
      path.join(pcrDir, "structured.yaml"),
      structuredProjectionYaml(projection, { sourceMarkdown: markdown }),
    );

    const readiness = getPcrReadiness({ root, pcrId: wheatSeedPcrId, refresh: true });
    assert.equal(readiness.projection_fingerprint.status, "current");
    assert.equal(readiness.projection_fingerprint.schema_valid, true);
    assert.equal(readiness.status, "unavailable");
    assert.equal(readiness.usable_for_guidance, false);
    assert.ok(
      readiness.blockers.some(
        (blocker) => blocker.code === "material_projection.functional_unit.what",
      ),
    );
    assert.throws(
      () => buildGuidance({ root, pcrId: wheatSeedPcrId }),
      (error) => error.code === "PCR_NOT_USABLE_FOR_GUIDANCE",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("PCR readiness rejects incompatible lifecycle and maturity combinations", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-readiness-state-");
  const pcrDir = path.join(root, "library/pcrs/example-domain/example-subdomain/example");
  try {
    mkdirSync(pcrDir, { recursive: true });
    writeFileSync(
      path.join(pcrDir, "manifest.yaml"),
      `schema_version: 1
id: pcr.example
title:
  en-US: Example
status: active
content_maturity: authored_methodology
`,
    );
    writeFileSync(path.join(pcrDir, "structured.yaml"), "schema_version: 1\n");

    const readiness = getPcrReadiness({ root, pcrId: "pcr.example", refresh: true });

    assert.equal(readiness.status, "unavailable");
    assert.equal(readiness.usable_for_guidance, false);
    assert.ok(
      readiness.blockers.some((blocker) => blocker.code === "incompatible_lifecycle_state"),
    );

    writeFileSync(
      path.join(pcrDir, "manifest.yaml"),
      `schema_version: 1
id: pcr.example
title:
  en-US: Example
status: active
content_maturity: reviewed_methodology
translation_status:
  zh-CN: draft_translation
`,
    );
    const translationReadiness = getPcrReadiness({
      root,
      pcrId: "pcr.example",
      refresh: true,
    });
    assert.equal(translationReadiness.status, "unavailable");
    assert.ok(
      translationReadiness.blockers.some(
        (blocker) => blocker.code === "translation_not_aligned",
      ),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resolveClassification uses deterministic mapping files", () => {
  const result = resolveClassification({
    root: repoRoot,
    system: "cpc",
    version: "3.0",
    code: "01111",
  });

  assert.equal(result.mapping.pcr_id, wheatSeedPcrId);
  assert.equal(result.mapping.mapping_type, "exact");
  assert.equal(result.pcr.title["en-US"], "Wheat seed for sowing");
});

test("resolveClassification fails closed when the required coverage index is missing", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-missing-coverage-");
  try {
    writeCoverageFixture(root);
    rmSync(path.join(root, "classifications/indexes/cpc-3.0-coverage.json"));

    assert.throws(
      () => resolveClassification({
        root,
        system: "cpc",
        version: "3.0",
        code: "01111",
      }),
      (error) => {
        assert.equal(error.code, "PCR_CLASSIFICATION_COVERAGE_NOT_FOUND");
        assert.deepEqual(error.details, {
          classification: "cpc:3.0",
          coverage_index: "classifications/indexes/cpc-3.0-coverage.json",
        });
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resolveClassification rejects a canonical mapping symbolic link", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-mapping-symlink-");
  const outsideRoot = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-mapping-outside-"));
  try {
    writeCoverageFixture(root);
    const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
    const outsideMappingPath = path.join(outsideRoot, "cpc-3.0-to-pcr.yaml");
    writeFileSync(outsideMappingPath, readFileSync(mappingPath));
    rmSync(mappingPath);
    symlinkSync(outsideMappingPath, mappingPath);

    assert.throws(
      () => resolveClassification({
        root,
        system: "cpc",
        version: "3.0",
        code: "01111",
      }),
      (error) => {
        assert.equal(error.code, "PCR_INVALID_CLASSIFICATION_COVERAGE");
        assert.ok(
          error.details.issues.some((issue) => issue.includes("contains a symbolic link")),
        );
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outsideRoot, { recursive: true, force: true });
  }
});

test("resolvePcrIdentity returns redirect locators before and after physical scaffold removal", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-id-routing-");
  try {
    writePcrAliasFixture(root);

    const beforeRemoval = resolvePcrIdentity({ root, pcrId: scaffoldPcrId });
    assert.equal(beforeRemoval.resolution_status, "legacy_id_redirect");
    assert.equal(beforeRemoval.pcr, null);
    assert.deepEqual(beforeRemoval.redirect.target, {
      kind: "classification_coverage",
      classification_system: "cpc",
      classification_version: "3.0",
      code: "92200",
    });
    assert.match(beforeRemoval.redirect.next_command, /resolve --classification cpc:3\.0:92200/);

    const canonical = resolvePcrIdentity({ root, pcrId: wheatSeedPcrId });
    assert.equal(canonical.resolution_status, "canonical");
    assert.equal(canonical.redirect, null);
    assert.equal(canonical.pcr.id, wheatSeedPcrId);
    assert.equal(canonical.pcr.readiness.usable_for_guidance, true);

    assert.throws(
      () => readPcrMarkdown({ root, pcrId: scaffoldPcrId }),
      (error) => {
        assert.equal(error.code, "PCR_LEGACY_ID_REDIRECT");
        assert.equal(error.details.source_pcr_id, scaffoldPcrId);
        assert.equal(error.details.source_pcr_path, scaffoldRelativePcrPath);
        assert.equal(error.details.reason, "empty_scaffold_migration");
        assert.equal(error.details.decision_ref, "docs/decisions/retired-id.md");
        assert.deepEqual(error.details.target, beforeRemoval.redirect.target);
        assert.equal(error.details.next_command, beforeRemoval.redirect.next_command);
        return true;
      },
    );

    rmSync(path.join(root, scaffoldRelativePcrPath), { recursive: true, force: true });
    const afterRemoval = resolvePcrIdentity({ root, pcrId: scaffoldPcrId });
    assert.deepEqual(afterRemoval, beforeRemoval);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("CPC 99000 physical pilot keeps coverage and old-id routing after directory removal", () => {
  assert.equal(existsSync(path.join(repoRoot, pilot99000RelativePcrPath)), false);

  const identity = resolvePcrIdentity({ root: repoRoot, pcrId: pilot99000PcrId });
  assert.equal(identity.resolution_status, "legacy_id_redirect");
  assert.deepEqual(identity.redirect.target, {
    kind: "classification_coverage",
    classification_system: "cpc",
    classification_version: "3.0",
    code: "99000",
  });

  const classification = resolveClassification({
    root: repoRoot,
    system: "cpc",
    version: "3.0",
    code: "99000",
  });
  assert.equal(classification.resolution_status, "unmapped");
  assert.equal(classification.mapping, null);
  assert.equal(classification.pcr, null);

  const all = listPcrs({ root: repoRoot, scope: "all", refresh: true });
  const material = listPcrs({ root: repoRoot, scope: "material", refresh: true });
  const legacy = listPcrs({ root: repoRoot, scope: "legacy", refresh: true });
  assert.equal(all.length, material.length + legacy.length);
  assert.equal(
    all.filter((entry) => entry.record_kind === "methodology").length,
    material.length,
  );
  assert.equal(
    all.filter((entry) => entry.record_kind === "legacy_scaffold_reference").length,
    legacy.length,
  );
});

test("classification coverage exposes bounded summary/list and additive resolve states", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-coverage-");
  try {
    writeCoverageFixture(root);

    const summary = getClassificationCoverageSummary({
      root,
      system: "cpc",
      version: "3.0",
    });
    const unmapped = listClassificationCoverage({
      root,
      system: "cpc",
      version: "3.0",
      status: "unmapped",
    });
    const mapped = resolveClassification({
      root,
      system: "cpc",
      version: "3.0",
      code: "01111",
    });
    const retiredCoverage = resolveClassification({
      root,
      system: "cpc",
      version: "3.0",
      code: "92200",
    });
    const knownUnmapped = resolveClassification({
      root,
      system: "cpc",
      version: "3.0",
      code: "99998",
    });
    const candidate = resolveClassification({
      root,
      system: "cpc",
      version: "3.0",
      code: "99997",
    });

    assert.deepEqual(summary.summary, {
      total: 4,
      mapped: 1,
      unmapped: 1,
      candidate_suggestion: 1,
      manual_review: 0,
      unknown: 1,
    });
    assert.equal(Object.hasOwn(summary, "entries"), false);
    assert.equal(unmapped.entries.length, 1);
    assert.equal(unmapped.entries[0].legacy_reference, null);
    assert.throws(
      () => listClassificationCoverage({
        root,
        system: "cpc",
        version: "3.0",
        status: "maybe",
      }),
      (error) => error.code === "PCR_INVALID_CLASSIFICATION_COVERAGE_STATUS",
    );

    assert.equal(mapped.resolution_status, "mapped");
    assert.equal(mapped.coverage_status, "mapped");
    assert.equal(mapped.mapping.pcr_id, wheatSeedPcrId);
    assert.equal(mapped.pcr.record_kind, "methodology");

    assert.equal(retiredCoverage.resolution_status, "unmapped");
    assert.equal(retiredCoverage.coverage_status, "unmapped");
    assert.equal(retiredCoverage.mapping, null);
    assert.equal(retiredCoverage.pcr, null);

    assert.equal(knownUnmapped.resolution_status, "unmapped");
    assert.equal(knownUnmapped.mapping, null);
    assert.equal(knownUnmapped.pcr, null);

    assert.equal(candidate.resolution_status, "unmapped");
    assert.equal(candidate.coverage_status, "candidate_suggestion");
    assert.equal(candidate.mapping, null);
    assert.equal(candidate.pcr, null);

    assert.throws(
      () => resolveClassification({
        root,
        system: "cpc",
        version: "3.0",
        code: "99999",
      }),
      (error) => error.code === "PCR_CLASSIFICATION_CODE_UNKNOWN",
    );

    const coveragePath = path.join(root, "classifications/indexes/cpc-3.0-coverage.json");
    const inconsistent = JSON.parse(readFileSync(coveragePath, "utf8"));
    inconsistent.summary.mapped = 0;
    writeFileSync(coveragePath, `${JSON.stringify(inconsistent, null, 2)}\n`);
    assert.throws(
      () => getClassificationCoverageSummary({ root, system: "cpc", version: "3.0" }),
      (error) =>
        error.code === "PCR_INVALID_CLASSIFICATION_COVERAGE"
        && error.details.issues.some((issue) => issue.includes("summary.mapped")),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resolveClassification rejects a coverage source with a noncanonical mapping relation", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-invalid-mapping-");
  try {
    writeCoverageFixture(root);
    const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
    writeFileSync(
      mappingPath,
      readFileSync(mappingPath, "utf8").replace(
        "mapping_type: exact",
        "mapping_type: invented_relation",
      ),
    );
    const coveragePath = path.join(root, "classifications/indexes/cpc-3.0-coverage.json");
    const coverage = JSON.parse(readFileSync(coveragePath, "utf8"));
    coverage.source.mapping.sha256 = exactFileSha256(mappingPath);
    writeFileSync(coveragePath, `${JSON.stringify(coverage, null, 2)}\n`);

    assert.throws(
      () =>
        resolveClassification({
          root,
          system: "cpc",
          version: "3.0",
          code: "01111",
        }),
      (error) => {
        assert.equal(error.code, "PCR_INVALID_CLASSIFICATION_COVERAGE");
        assert.ok(
          error.details.issues.some(
            (issue) => issue.includes("source mapping for 01111 cannot be projected"),
          ),
        );
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resolveClassification never falls back to a legacy mapping when coverage is missing", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-unaccepted-mapping-");
  try {
    const pcrDir = path.join(root, wheatRelativePcrPath);
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, wheatRelativePcrPath), pcrDir, { recursive: true });
    const mappingDir = path.join(root, "classifications/mappings");
    mkdirSync(mappingDir, { recursive: true });
    const mappingPath = path.join(mappingDir, "cpc-3.0-to-pcr.yaml");
    writeFileSync(
      mappingPath,
      `schema_version: 1
classification_system: CPC
classification_version: "3.0"
status: scaffold
mappings:
  - code: "01111"
    label: "Wheat, seed"
    pcr_id: "${wheatSeedPcrId}"
    mapping_type: exact
    confidence: scaffold
`,
    );

    assert.throws(
      () => resolveClassification({ root, system: "cpc", version: "3.0", code: "01111" }),
      (error) => error.code === "PCR_CLASSIFICATION_COVERAGE_NOT_FOUND",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resolveClassification rejects coverage mapped to an invalid lifecycle identity", () => {
  const root = createBoundRepositoryFixture("tiangong-pcr-invalid-target-state-");
  try {
    writeCoverageFixture(root);
    const pcrDir = path.join(root, wheatRelativePcrPath);
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const manifest = parseYaml(readFileSync(manifestPath, "utf8"));
    writeFileSync(
      manifestPath,
      renderYaml({ ...manifest, status: "scaffold", content_maturity: "authored_methodology" }),
    );

    assert.throws(
      () => resolveClassification({ root, system: "cpc", version: "3.0", code: "01111" }),
      (error) => {
        assert.equal(error.code, "PCR_INVALID_CLASSIFICATION_COVERAGE");
        assert.ok(
          error.details.issues.some(
            (issue) => issue.includes("mapped coverage points to non-material PCR"),
          ),
        );
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("buildGuidance returns structured rules for Agent data package construction", () => {
  const guidance = buildGuidance({ root: repoRoot, pcrId: wheatSeedPcrId });

  assert.equal(guidance.pcr.id, wheatSeedPcrId);
  assert.equal(guidance.reference_flow.reference_unit, "kg");
  assert.equal(guidance.reference_flow.product_flow_ref.uuid, "12da5e7d-9b93-4404-8c7d-08f98bec6238");
  assert.ok(guidance.system_boundary.rules.some((entry) => entry.rule_id === "system_boundary_rule_1"));
  assert.equal(guidance.boundary_abstraction.declared_starting_condition, "source_seed_lot");
  assert.ok(guidance.process_map.some((entry) => entry.id === "field_seed_multiplication"));
  assert.ok(guidance.production_guidance.collection_protocols.length > 0);
  assert.equal(guidance.published_dataset_profile.dataset_role, "unit_process");
  assert.ok(guidance.allocation_rules.some((entry) => entry.rule_id === "allocation_rule_1"));
  assert.ok(guidance.validation_rules.some((entry) => entry.rule_id === "validation_rule_1"));
  assert.ok(guidance.validation_notes.some((note) => note.includes("validate-dataset")));
  assert.equal(guidance.readiness.usable_for_guidance, true);
});

test("buildGuidance redirects retired scaffold ids before attempting content access", () => {
  assert.throws(
    () => buildGuidance({ root: repoRoot, pcrId: scaffoldPcrId }),
    (error) => {
      assert.equal(error.code, "PCR_LEGACY_ID_REDIRECT");
      assert.equal(error.details.source_pcr_id, scaffoldPcrId);
      assert.equal(error.details.target.kind, "classification_coverage");
      assert.match(error.details.next_command, /resolve --classification cpc:3\.0:92200/);
      return true;
    },
  );
});

test("validation redirects retired scaffold ids before attempting content access", () => {
  assert.throws(
    () => validateDatasetAgainstGuidance({ root: repoRoot, pcrId: scaffoldPcrId, dataset: {} }),
    (error) => {
      assert.equal(error.code, "PCR_LEGACY_ID_REDIRECT");
      assert.equal(error.details.source_pcr_path, scaffoldRelativePcrPath);
      assert.equal(error.details.reason, "empty_scaffold_migration");
      return true;
    },
  );
});

test("createFeedbackDraft produces issue-ready PCR feedback content", () => {
  const draft = createFeedbackDraft({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    type: "range_evidence_update",
    affectedSection: "Process Inventory",
    processId: "field_seed_multiplication",
    summary: "Observed a narrower seeding-rate range for a regional dataset.",
  });

  assert.match(draft.title, /PCR feedback: range_evidence_update/);
  assert.match(draft.body, new RegExp(wheatSeedPcrId));
  assert.match(draft.body, /field_seed_multiplication/);
  assert.match(draft.body, /Observed a narrower seeding-rate range/);
});

test("validateDatasetAgainstGuidance reports missing collection protocol records", () => {
  const result = validateDatasetAgainstGuidance({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    dataset: { collection_records: [{ protocol_id: "cp_source_seed_lot_mass" }] },
  });

  assert.equal(result.validation_status, "failed");
  assert.equal(result.completeness, "partial");
  assert.equal(result.input.accepted, true);
  assert.equal(result.input.collection_record_count, 1);
  assert.equal(result.readiness.usable_for_validation, true);
  assert.ok(result.check_coverage.checks_performed.some((check) => check.check_id === "collection_protocol_presence"));
  assert.ok(result.check_coverage.checks_skipped.length > 0);
  assert.ok(result.check_coverage.checks_skipped.some((check) => check.check_id === "process_map"));
  assert.ok(
    result.check_coverage.checks_skipped.some(
      (check) => check.check_id === "published_dataset_profile",
    ),
  );
  assert.ok(result.findings.some((finding) => finding.code === "missing_collection_protocol_record"));
  assert.ok(result.findings.some((finding) => finding.message.includes("cp_harvested_seed_mass")));
});

test("dataset validation reports invalid JSON-compatible input shapes without false coverage", () => {
  const result = validateDatasetAgainstGuidance({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    dataset: ["not", "an", "object"],
  });

  assert.equal(result.validation_status, "failed");
  assert.equal(result.completeness, "none");
  assert.equal(result.input.accepted, false);
  assert.equal(result.check_coverage.checked_requirement_count, 0);
  assert.ok(result.findings.some((finding) => finding.code === "invalid_dataset_input"));
});

test("model validation uses the same explicit readiness and coverage report contract", () => {
  const result = validateModelAgainstGuidance({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    model: "wheat seed model",
  });

  assert.equal(result.validation_kind, "tiangong-pcr-model-validation");
  assert.equal(result.input.accepted, true);
  assert.equal(result.readiness.usable_for_validation, true);
  assert.equal(result.completeness, "partial");
  assert.ok(result.check_coverage.checks_performed.some((check) => check.check_id === "required_qualifier_presence"));
  assert.ok(
    result.check_coverage.checks_skipped.some(
      (check) => check.check_id === "reference_flow_definition",
    ),
  );
  assert.ok(result.check_coverage.checks_skipped.some((check) => check.check_id === "process_map"));
});

test("yaml-lite renders parseable structured YAML", () => {
  const source = {
    schema_version: "1",
    id: "pcr.example",
    title: {
      "en-US": "Example PCR",
      "zh-CN": null,
    },
    status: "published",
    target_entities: ["flow", "process", "dataset"],
    classification_refs: [
      {
        system: "CPC",
        version: "3.0",
        code: "01111",
      },
    ],
  };

  assert.deepEqual(parseYaml(renderYaml(source)), source);
});

test("yaml-lite preserves numeric schema versions without coercing identifier-like values", () => {
  const parsed = parseYaml(`schema_version: 1
ratio: -1.25
scientific: 2e3
classification_code: 01111
quoted_number: "1"
`);

  assert.equal(parsed.schema_version, 1);
  assert.equal(parsed.ratio, -1.25);
  assert.equal(parsed.scientific, 2000);
  assert.equal(parsed.classification_code, "01111");
  assert.equal(parsed.quoted_number, "1");
  assert.deepEqual(parseYaml(renderYaml(parsed)), parsed);
});

test("yaml-lite parses indented empty collection nodes", () => {
  assert.deepEqual(
    parseYaml(`items:
  []
metadata:
  {}
`),
    { items: [], metadata: {} },
  );
});

function writeCoverageFixture(root) {
  for (const relativePath of [wheatRelativePcrPath, scaffoldRelativePcrPath]) {
    const target = path.join(root, relativePath);
    mkdirSync(path.dirname(target), { recursive: true });
    cpSync(path.join(repoRoot, relativePath), target, { recursive: true });
  }
  const mappingDir = path.join(root, "classifications/mappings");
  mkdirSync(mappingDir, { recursive: true });
  const mappingPath = path.join(mappingDir, "cpc-3.0-to-pcr.yaml");
  writeFileSync(
    mappingPath,
    `schema_version: 2
classification_system: CPC
classification_version: "3.0"
status: current
mappings:
  - code: "01111"
    label: "Wheat, seed"
    pcr_id: "${wheatSeedPcrId}"
    mapping_type: exact
    confidence: reviewed
    acceptance:
      status: accepted
      decided_by: test-maintainer
      decided_at_utc: "2026-07-14T00:00:00Z"
      decision_ref: docs/test-decision.md
`,
  );

  const leavesPath = path.join(
    root,
    "classifications/systems/cpc/3.0/normalized/leaves.json",
  );
  mkdirSync(path.dirname(leavesPath), { recursive: true });
  writeFileSync(
    leavesPath,
    `${JSON.stringify({
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [
        {
          code: "01111",
          title: "Wheat, seed",
          path_codes: ["0", "01", "011", "0111", "01111"],
          path_titles: ["Agriculture", "Crops", "Cereals", "Wheat", "Wheat, seed"],
        },
        {
          code: "92200",
          title: "Primary education services",
          path_codes: ["9", "92", "922", "9220", "92200"],
          path_titles: ["Services", "Education", "Primary", "Primary", "Primary education services"],
        },
        {
          code: "99997",
          title: "Candidate only",
          path_codes: ["9", "99", "999", "9999", "99997"],
          path_titles: ["Services", "Other", "Other", "Other", "Candidate only"],
        },
        {
          code: "99998",
          title: "Known without mapping",
          path_codes: ["9", "99", "999", "9999", "99998"],
          path_titles: ["Services", "Other", "Other", "Other", "Known without mapping"],
        },
      ],
    }, null, 2)}\n`,
  );

  const coverageDir = path.join(root, "classifications/indexes");
  mkdirSync(coverageDir, { recursive: true });
  writeFileSync(
    path.join(coverageDir, "cpc-3.0-coverage.json"),
    `${JSON.stringify({
      schema_version: 1,
      index_kind: "classification-pcr-coverage",
      classification_system: "CPC",
      classification_version: "3.0",
      source: {
        contract_version: "2",
        generator: "builder/scripts/build-catalog.mjs",
        generator_version: "2",
        normalized_leaves: {
          path: "classifications/systems/cpc/3.0/normalized/leaves.json",
          hash_mode: "exact_bytes",
          sha256: exactFileSha256(leavesPath),
        },
        mapping: {
          path: "classifications/mappings/cpc-3.0-to-pcr.yaml",
          hash_mode: "exact_bytes",
          sha256: exactFileSha256(mappingPath),
        },
      },
      summary: {
        total: 4,
        mapped: 1,
        unmapped: 1,
        candidate_suggestion: 1,
        manual_review: 0,
        unknown: 1,
      },
      entries: [
        {
          code: "01111",
          label: "Wheat, seed",
          path_codes: ["0", "01", "011", "0111", "01111"],
          path_titles: ["Agriculture", "Crops", "Cereals", "Wheat", "Wheat, seed"],
          coverage_status: "mapped",
          mapping: {
            pcr_id: wheatSeedPcrId,
            mapping_type: "exact",
            confidence: "reviewed",
            acceptance: {
              status: "accepted",
              decided_by: "test-maintainer",
              decided_at_utc: "2026-07-14T00:00:00Z",
              decision_ref: "docs/test-decision.md",
            },
          },
          legacy_reference: null,
        },
        {
          code: "92200",
          label: "Primary education services",
          path_codes: ["9", "92", "922", "9220", "92200"],
          path_titles: ["Services", "Education", "Primary", "Primary", "Primary education services"],
          coverage_status: "unmapped",
          mapping: null,
          legacy_reference: null,
        },
        {
          code: "99997",
          label: "Candidate only",
          path_codes: ["9", "99", "999", "9999", "99997"],
          path_titles: ["Services", "Other", "Other", "Other", "Candidate only"],
          coverage_status: "candidate_suggestion",
          mapping: null,
          legacy_reference: null,
        },
        {
          code: "99998",
          label: "Known without mapping",
          path_codes: ["9", "99", "999", "9999", "99998"],
          path_titles: ["Services", "Other", "Other", "Other", "Known without mapping"],
          coverage_status: "unknown",
          mapping: null,
          legacy_reference: null,
        },
      ],
    }, null, 2)}\n`,
  );
}

function writePcrAliasFixture(root) {
  for (const relativePath of [wheatRelativePcrPath, scaffoldRelativePcrPath]) {
    const target = path.join(root, relativePath);
    mkdirSync(path.dirname(target), { recursive: true });
    cpSync(path.join(repoRoot, relativePath), target, { recursive: true });
  }
  const decisionPath = path.join(root, "docs/decisions/retired-id.md");
  mkdirSync(path.dirname(decisionPath), { recursive: true });
  writeFileSync(decisionPath, "# Retired id decision\n");

  const leavesPath = path.join(
    root,
    "classifications/systems/cpc/3.0/normalized/leaves.json",
  );
  mkdirSync(path.dirname(leavesPath), { recursive: true });
  writeFileSync(
    leavesPath,
    `${JSON.stringify({
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [{ code: "92200", title: "Primary education services" }],
    }, null, 2)}\n`,
  );

  installPcrAliasBinding(root, [
    {
      source_pcr_id: scaffoldPcrId,
      source_pcr_path: scaffoldRelativePcrPath,
      target: {
        kind: "classification_coverage",
        classification_system: "cpc",
        classification_version: "3.0",
        code: "92200",
      },
      reason: "empty_scaffold_migration",
      decision_ref: "docs/decisions/retired-id.md",
    },
  ]);
}

function createBoundRepositoryFixture(prefix) {
  const root = mkdtempSync(path.join(tmpdir(), prefix));
  installPcrAliasBinding(root, []);
  return root;
}

function installPcrAliasBinding(root, aliases) {
  const registryPath = path.join(
    root,
    "classifications/aliases/pcr-id-aliases.yaml",
  );
  const registry = renderYaml({
    schema_version: 1,
    registry_kind: "legacy-pcr-id-aliases",
    status: "current",
    aliases,
  });
  mkdirSync(path.dirname(registryPath), { recursive: true });
  writeFileSync(registryPath, registry);

  const catalogPath = path.join(root, "library/catalog.yaml");
  mkdirSync(path.dirname(catalogPath), { recursive: true });
  writeFileSync(
    catalogPath,
    renderYaml({
      schema_version: 1,
      catalog_status: "current",
      pcr_id_aliases: {
        path: "classifications/aliases/pcr-id-aliases.yaml",
        hash_mode: "exact_bytes",
        sha256: `sha256:${createHash("sha256").update(registry).digest("hex")}`,
        entry_count: aliases.length,
      },
    }),
  );
}

function writeManagedPublishedManifest(pcrDir) {
  writePublishedManifest(pcrDir, { managed: true });
}

function writePublishedManifest(pcrDir, { managed }) {
  const manifestPath = path.join(pcrDir, "manifest.yaml");
  const manifest = parseYaml(readFileSync(manifestPath, "utf8"));
  manifest.version = "1.0.0";
  manifest.status = "published";
  manifest.content_maturity = "published_methodology";
  manifest.translation_status = {
    ...(manifest.translation_status ?? {}),
    "zh-CN": "reviewed",
  };
  manifest.published_at_utc = "2026-07-14T00:00:00Z";
  if (managed) {
    manifest.release_artifacts = {
      pcr_en_us_sha256: exactFileSha256(path.join(pcrDir, "pcr.en-US.md")),
      pcr_zh_cn_sha256: exactFileSha256(path.join(pcrDir, "pcr.zh-CN.md")),
      structured_sha256: exactFileSha256(path.join(pcrDir, "structured.yaml")),
    };
  }
  writeFileSync(manifestPath, renderYaml(manifest));
}

function exactFileSha256(filePath) {
  return `sha256:${createHash("sha256").update(readFileSync(filePath)).digest("hex")}`;
}
