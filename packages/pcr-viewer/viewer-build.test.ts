import {compileViewerBrowserAssets} from "./scripts/browser-assets.ts";
import {isUnknownRecord,unknownField,errorMessage,errorCode,type UnknownRecord} from "../pcr-core/src/types.ts";
import type {PcrIdAlias} from "../pcr-core/src/pcr-id-aliases.ts";
import type {ChildProcess} from "node:child_process";
import type {Server,IncomingHttpHeaders} from "node:http";
import type {FetchOptions} from "./static/viewer-core.ts";
import type {Readable} from "node:stream";
function jsonObject(text:string):UnknownRecord {const value:unknown=JSON.parse(text);assert.ok(isUnknownRecord(value));return value;}
function recordField(value:unknown,key:string):UnknownRecord {const field=unknownField(value,key);assert.ok(isUnknownRecord(field));return field;}
function textField(value:unknown,key:string):string {const field=unknownField(value,key);assert.equal(typeof field,"string");return field as string;}
function numberField(value:unknown,key:string):number {const field=unknownField(value,key);assert.ok(typeof field==="number"&&Number.isFinite(field));return field;}
interface FixturePcr {id:string;path:string;title:Record<string,string|null>;status:string;content_maturity:string}
import assert from "node:assert/strict";
import { execFileSync, spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { request as httpRequest } from "node:http";
import {
  cpSync,
  existsSync,
  readFileSync,
  readlinkSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

import {
  buildViewer,
  buildViewerData,
  checkViewerCandidates,
  checkViewerSnapshot,
  computeViewerGeneratorContractSha256,
  mirrorViewerArtifactStore,
  publishViewerSnapshot,
  recoverViewerDeployment,
  recoverViewerSnapshot,
  validateViewerScope,
  VIEWER_BUILD_MARKER,
} from "./scripts/build-viewer-data.ts";
import { serveViewer } from "./scripts/serve-viewer.ts";
import { commitViewerDeployment } from "./scripts/viewer-deployment.ts";
import * as viewerCore from "./static/viewer-core.ts";
import {
  artifactRootFromModuleUrl,
  assertViewerDataContract,
  createViewerSnapshotClient,
  describeReadiness,
  describeSnapshotCapture,
  filterPcrs,
  formatCoverageSummary,
  renderMarkdown,
  snapshotRouteUrl,
  stableSnapshotUrl,
  summarizeGuidance,
} from "./static/viewer-core.ts";

const repoRoot = path.resolve(".");
const wheatPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const wheatPcrPath =
  "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed";
const scaffoldPcrPath =
  "library/pcrs/community-social-and-personal-services/education-services/primary-education-services";
const coralPcrId =
  "pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone";
const coralPcrPath =
  "library/pcrs/agriculture-forestry-and-fishery-products/fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products/coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone";

test("split viewer build writes an accepted integration snapshot and retained UI bundle", () => {
  const root = createViewerFixture();
  const outDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-"));
  try {
    const accepted = acceptedIntegrationHead();
    const built = buildViewer({
      root,
      outDir,
      acceptedIntegrationHead: accepted,
      sourceVerifier: () => true,
    });
    const generation = path.resolve(outDir, readlinkSync(path.join(outDir, "current")));
    const active = jsonObject(readFileSync(path.join(generation, "active.json"), "utf8"));
    const manifest = jsonObject(readFileSync(
      path.join(generation, "manifests", `${textField(active,"manifest_ref").slice(7)}.json`),
      "utf8",
    ));
    const uiObject = jsonObject(readFileSync(
      path.join(generation, "objects", `${textField(active,"ui_bundle_ref").slice(7)}.json`),
      "utf8",
    ));

    assert.equal(built.pcr_count, 1);
    assert.equal(active.snapshot_id, accepted.snapshotId);
    assert.equal(recordField(manifest,"capture").source_ref, accepted.sourceRef);
    assert.equal(recordField(manifest,"capture").integration_commit, accepted.integrationCommit);
    assert.equal(recordField(manifest,"capture").tree_hash, accepted.treeHash);
    assert.equal(recordField(manifest,"capture").validation_state, "validated");
    assert.equal(recordField(manifest,"counts").pcr, 1);
    assert.ok(existsSync(path.join(generation, "history-head.json")));
    assert.ok(existsSync(path.join(generation, "routes", `${textField(active,"manifest_ref").slice(7)}.json`)));
    assert.ok(existsSync(path.join(generation, "objects", `${textField(recordField(manifest,"refs"),"catalog_root").slice(7)}.json`)));
    assert.ok(existsSync(path.join(generation, "index.html")));
    assert.ok(existsSync(path.join(generation, "styles.css")));
    assert.ok(existsSync(path.join(generation, "app.js")));
    assert.ok(existsSync(path.join(generation, "viewer-core.js")));
    assert.ok(existsSync(path.join(generation, textField(recordField(uiObject,"entry"),"asset_url"), "index.html")));
    assert.ok(existsSync(path.join(outDir, VIEWER_BUILD_MARKER)));
    assert.equal(existsSync(path.join(generation, "data", "pcr-viewer-data.json")), false);
    assert.equal(active.snapshot_url, `routes/${textField(active,"manifest_ref").slice(7)}.json`);
    assert.ok(existsSync(path.join(generation, active.snapshot_url)));
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outDir, { recursive: true, force: true });
  }
});

test("split bootstrap fails closed without explicit accepted validation evidence", () => {
  const root = createViewerFixture();
  const outDir = path.join(mkdtempSync(path.join(tmpdir(), "tiangong-viewer-explicit-head-")), "dist");
  try {
    assert.throws(
      () => buildViewer({ root, outDir, sourceVerifier: () => true }),
      (error) => errorCode(error) === "VIEWER_ACCEPTED_INTEGRATION_HEAD_REQUIRED",
    );
    assert.throws(
      () => buildViewer({
        root,
        outDir,
        acceptedIntegrationHead: {
          ...acceptedIntegrationHead(),
          validationSummary: { status: "passed", checks: 0 },
        },
        sourceVerifier: () => true,
      }),
      (error) => errorCode(error) === "VIEWER_VALIDATION_EVIDENCE_REQUIRED",
    );
    assert.throws(
      () => publishViewerSnapshot({
        ...snapshotPublishOptions({ root, artifactStore: outDir, sequence: 1 }),
        validationSummary: undefined,
        bootstrap: true,
      }),
      (error) => errorCode(error) === "VIEWER_VALIDATION_EVIDENCE_REQUIRED",
    );
    const cli = spawnSync(process.execPath, [
      path.join(repoRoot, "packages/pcr-viewer/scripts/build-viewer-data.ts"),
      "build",
      "--root",
      root,
      "--out-dir",
      outDir,
      "--format",
      "json",
    ], { encoding: "utf8" });
    assert.equal(cli.status, 1);
    assert.equal(cli.stdout, "");
    assert.equal(textField(recordField(jsonObject(cli.stderr),"error"),"code"), "VIEWER_ACCEPTED_INTEGRATION_HEAD_REQUIRED");
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(path.dirname(outDir), { recursive: true, force: true });
  }
});

test("the legacy monolith remains callable for compatibility but split deployment is material-only", () => {
  const root = createViewerFixture({ includeScaffold: true });
  const outDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-all-"));
  try {
    const materialData = buildViewerData({ root });
    const data = buildViewerData({ root, scope: "all" });
    const scaffolds = data.pcrs.filter(
      (entry) => entry.record_kind === "legacy_scaffold_reference",
    );

    assert.equal(data.catalog_scope, "all");
    assert.ok(data.pcr_count > materialData.pcr_count);
    assert.ok(
      JSON.stringify(materialData).length < JSON.stringify(data).length,
      "Expected default material data to remain smaller than all-scope data",
    );
    assert.ok(scaffolds.length > 0);
    for (const scaffold of scaffolds) {
      assert.equal(Object.hasOwn(scaffold, "markdown"), false);
      assert.equal(Object.hasOwn(scaffold, "guidance"), false);
      assert.doesNotMatch(JSON.stringify(scaffold), /guidance_error/u);
    }
    assert.throws(
      () => buildViewer({ root, outDir, scope: "all", acceptedIntegrationHead: acceptedIntegrationHead(), sourceVerifier: () => true }),
      /split Viewer deployment supports only the material scope/u,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outDir, { recursive: true, force: true });
  }
});

test("viewer build CLI validates its material, all, and legacy scopes", () => {
  assert.equal(validateViewerScope("material"), "material");
  assert.equal(validateViewerScope("all"), "all");
  assert.equal(validateViewerScope("legacy"), "legacy");
  assert.throws(() => validateViewerScope("everything"), /Invalid viewer scope: everything/u);

  const scriptPath = path.join(repoRoot, "packages/pcr-viewer/scripts/build-viewer-data.ts");
  const result = spawnSync(process.execPath, [scriptPath, "--scope", "everything"], {
    encoding: "utf8",
  });
  assert.equal(result.status, 1);
  assert.equal(result.stdout, "");
  assert.match(result.stderr, /Invalid viewer scope: everything/u);

  const help = spawnSync(process.execPath, [scriptPath, "build", "--help"], { encoding: "utf8" });
  assert.equal(help.status, 0, help.stderr);
  assert.match(help.stdout, /accepted validated integration snapshot/u);
  assert.match(help.stdout, /--integration-commit/u);
  assert.match(help.stdout, /--checks/u);
  assert.match(help.stdout, /--force-stale-deployment-lock/u);
});

test("lazy snapshot client boots from catalog metadata and fetches one cached PCR detail on selection", async () => {
  const root = createViewerFixture();
  const outDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-lazy-"));
  const requests: {relative:string;cache:RequestCache|undefined}[] = [];
  try {
    buildViewer({
      root,
      outDir,
      acceptedIntegrationHead: acceptedIntegrationHead(),
      sourceVerifier: () => true,
    });
    const deployed = currentDeploymentDir(outDir);
    const fetchJson = async (url: string, options: FetchOptions) => {
      const relative = new URL(url).pathname.replace(/^\/viewer\//u, "");
      requests.push({ relative, cache: options?.cache });
      return jsonObject(readFileSync(path.join(deployed, relative), "utf8"));
    };
    const client = createViewerSnapshotClient({
      baseUrl: "https://viewer.example/viewer/",
      fetchJson,
    });
    const snapshot = await client.loadInitialSnapshot();

    assert.equal(recordField(snapshot.manifest,"capture").validation_state, "validated");
    assert.deepEqual(snapshot.catalog!.map((entry) => entry.id), [wheatPcrId]);
    assert.equal(requests.some(({ relative }) => relative.includes("pcr.en-US.md")), false);
    assert.equal(
      requests.some(({ relative }) => relative === `objects/${textField(recordField(recordField(snapshot.manifest,"refs"),"pcr_entries"),wheatPcrId).slice(7)}.json`),
      false,
    );

    const first = await client.loadPcrDetail(snapshot, wheatPcrId);
    const second = await client.loadPcrDetail(snapshot, wheatPcrId);
    assert.equal(first, second);
    assert.match(textField(recordField(first.entry,"markdown"),"en-US"), /Wheat Seed for Sowing/u);
    assert.equal(
      requests.filter(({ relative }) => relative === `objects/${textField(recordField(recordField(snapshot.manifest,"refs"),"pcr_entries"),wheatPcrId).slice(7)}.json`).length,
      1,
    );
    assert.equal(requests[0]!.relative, "active.json");
    assert.equal(requests[0]!.cache, "no-cache");
    assert.equal(snapshot.active!.snapshot_url, `routes/${snapshot.manifestRef.slice(7)}.json`);
    assert.ok(existsSync(path.join(deployed, snapshot.active!.snapshot_url)));
    assert.match(requests[1]!.relative, /^manifests\/[a-f0-9]{64}\.json$/u);
    assert.equal(requests[2]!.relative, `objects/${textField(recordField(snapshot.manifest,"refs"),"catalog_root").slice(7)}.json`);
    assert.equal(requests.some(({ relative }) => relative.startsWith("routes/")), false);
    assert.equal(requests.slice(1).every(({ cache }) => cache === "force-cache"), true);
    const route = await client.loadSnapshotRoute(snapshot.manifestRef, snapshot.active!.snapshot_url);
    assert.equal(route.manifest_ref, snapshot.manifestRef);
    assert.equal(requests.at(-1)!.relative, snapshot.active!.snapshot_url);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outDir, { recursive: true, force: true });
  }
});

test("catalog loading uses bounded concurrency and keeps deterministic output", async () => {
  const manifestRef = sha256("catalog-concurrency-manifest");
  const catalogRootRef = sha256("catalog-concurrency-root");
  const shardRefs = Array.from({ length: 18 }, (_, index) => sha256(`catalog-shard-${index}`));
  const entryRefs = Array.from({ length: 18 }, (_, index) => sha256(`catalog-entry-${index}`));
  const responses = new Map<string,unknown>([
    [`manifests/${manifestRef.slice(7)}.json`, {
      schema_version: 1,
      kind: "viewer-snapshot-manifest",
      snapshot_id: "catalog-concurrency",
      sequence: 1,
      capture: { ui_bundle_ref: sha256("ui") },
      refs: { catalog_root: catalogRootRef, pcr_entries: {} },
    }],
    [`objects/${catalogRootRef.slice(7)}.json`, {
      schema_version: 1,
      object_kind: "catalog_root",
      entry: { shards: Object.fromEntries(shardRefs.map((ref, index) => [`${index}`.padStart(2, "0"), ref])) },
    }],
  ]);
  for (let index = 0; index < shardRefs.length; index += 1) {
    const prefix = `${index}`.padStart(2, "0");
    responses.set(`objects/${shardRefs[index]!.slice(7)}.json`, {
      schema_version: 1,
      object_kind: "catalog_shard",
      entry: { prefix, entries: [{ id: `pcr.${String(99 - index).padStart(2, "0")}`, object_ref: entryRefs[index]! }] },
    });
    responses.set(`objects/${entryRefs[index]!.slice(7)}.json`, {
      schema_version: 1,
      object_kind: "catalog_entry",
      entry: { id: `pcr.${String(99 - index).padStart(2, "0")}` },
    });
  }
  let inFlight = 0;
  let maxInFlight = 0;
  const requests: string[] = [];
  const client = createViewerSnapshotClient({
    baseUrl: "https://viewer.example/",
    fetchJson: async (url) => {
      const relative = new URL(url).pathname.slice(1);
      requests.push(relative);
      if (!responses.has(relative)) throw new Error(`unexpected fetch: ${relative}`);
      if (relative.startsWith("objects/") && relative !== `objects/${catalogRootRef.slice(7)}.json`) {
        inFlight += 1;
        maxInFlight = Math.max(maxInFlight, inFlight);
        await new Promise((resolve) => setTimeout(resolve, 5));
        inFlight -= 1;
      }
      return responses.get(relative);
    },
  });

  const snapshot = await client.loadSnapshotByManifest(manifestRef);

  assert.ok(maxInFlight > 1, `expected concurrent catalog fetches, observed ${maxInFlight}`);
  assert.ok(maxInFlight <= 8, `catalog concurrency exceeded bound: ${maxInFlight}`);
  assert.deepEqual(snapshot.catalog!.map((entry) => entry.id), [...snapshot.catalog!.map((entry) => entry.id)].sort());
  assert.deepEqual(requests.slice(0, 2), [
    `manifests/${manifestRef.slice(7)}.json`,
    `objects/${catalogRootRef.slice(7)}.json`,
  ]);
});

test("PCR selection ignores stale completion and stale finally callbacks", async () => {
  const deferred = new Map<string,{resolve:(value:unknown)=>void;reject:(reason:unknown)=>void}>();
  const events: [string,string][] = [];
  const select = viewerCore.createPcrSelectionLoader({
    loadDetail: (_snapshot, pcrId) => new Promise<unknown>((resolve, reject) => deferred.set(pcrId, { resolve, reject })),
    onBegin: (pcrId) => events.push(["begin", pcrId]),
    onSuccess: (pcrId) => events.push(["success", pcrId]),
    onError: (pcrId) => events.push(["error", pcrId]),
    onSettled: (pcrId) => events.push(["settled", pcrId]),
  });
  const first = select({}, "pcr.first");
  const second = select({}, "pcr.second");
  deferred.get("pcr.first")!.resolve({ entry: { id: "pcr.first" } });
  await first;
  assert.deepEqual(events, [["begin", "pcr.first"], ["begin", "pcr.second"]]);
  deferred.get("pcr.second")!.resolve({ entry: { id: "pcr.second" } });
  await second;
  assert.deepEqual(events, [
    ["begin", "pcr.first"],
    ["begin", "pcr.second"],
    ["success", "pcr.second"],
    ["settled", "pcr.second"],
  ]);
});

test("history traversal yields stable snapshot and compatible retained-UI URLs", async () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-history-ui-"));
  try {
    publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      bootstrap: true,
    });
    publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
      changedPcrIds: [],
    });
    publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 3 }),
      changedPcrIds: [],
    });
    const requests: {relative:string;cache:RequestCache|undefined}[] = [];
    const client = createViewerSnapshotClient({
      baseUrl: "https://viewer.example/library/",
      fetchJson: async (url, options) => {
        const relative = new URL(url).pathname.replace(/^\/library\//u, "");
        requests.push({ relative, cache: options?.cache });
        return jsonObject(readFileSync(path.join(artifactStore, relative), "utf8"));
      },
    });
    const history = await client.loadHistory();
    assert.deepEqual(history.map(({ sequence }) => sequence), [3, 2, 1]);
    assert.equal(requests[0]!.relative, "history-head.json");
    assert.equal(requests[0]!.cache, "no-cache");
    assert.ok(requests.filter(({ relative }) => relative.startsWith("objects/")).length >= 2);

    const selected = await client.loadSnapshotByManifest(history.at(-1)!.manifest_ref);
    const uiBundle = await client.loadUiBundle(selected.manifest);
    const url = stableSnapshotUrl({
      baseUrl: "https://viewer.example/library/",
      manifestRef: history.at(-1)!.manifest_ref,
      manifest: selected.manifest,
      uiBundle,
    });
    assert.match(url, /\/ui\/[a-f0-9]{64}\/index\.html\?/u);
    assert.equal(new URL(url).searchParams.get("snapshot"), selected.manifest.snapshot_id);
    assert.equal(new URL(url).searchParams.get("manifest"), history.at(-1)!.manifest_ref);
    assert.equal(new URL(url).searchParams.get("ui"), uiBundle.entry.id);
    assert.equal(
      stableSnapshotUrl({
        baseUrl: "https://viewer.example/library/",
        manifestRef: history.at(-1)!.manifest_ref,
        manifest: { ...selected.manifest, schema_version: 0 },
        uiBundle,
      }),
      url,
      "an older manifest schema remains navigable through its retained compatible bundle",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("an older manifest schema routes through a minimal retained-UI envelope without current-schema parsing", async () => {
  const oldManifestRef = `sha256:${"1".repeat(64)}`;
  const oldUiId = `sha256:${"2".repeat(64)}`;
  const route = {
    routing_schema_version: 1,
    kind: "viewer-snapshot-route",
    snapshot_id: "viewer-old-schema",
    manifest_ref: oldManifestRef,
    manifest_schema_version: 0,
    ui_bundle_ref: `sha256:${"3".repeat(64)}`,
    ui_bundle_id: oldUiId,
    ui_bundle_url: `ui/${"2".repeat(64)}/`,
  };
  const oldManifest = {
    schema_version: 0,
    kind: "viewer-snapshot-manifest",
    snapshot_id: "viewer-old-schema",
    legacy_payload: { deliberately: "not-current-schema" },
  };
  const requests: string[] = [];
  const client = createViewerSnapshotClient({
    baseUrl: "https://viewer.example/library/",
    fetchJson: async (url) => {
      const pathname = new URL(url).pathname;
      requests.push(pathname);
      return pathname.includes("/manifests/") ? oldManifest : route;
    },
  });

  const metadata = await client.loadSnapshotByManifest(oldManifestRef, { withCatalog: false });
  const loaded = await client.loadSnapshotRoute(oldManifestRef);
  const url = snapshotRouteUrl({ baseUrl: "https://viewer.example/library/", route: loaded });
  assert.deepEqual(loaded, route);
  assert.equal(metadata.manifest.schema_version, 0);
  assert.deepEqual(requests, [
    `/library/manifests/${oldManifestRef.slice(7)}.json`,
    `/library/routes/${oldManifestRef.slice(7)}.json`,
  ]);
  assert.equal(new URL(url).searchParams.get("snapshot"), "viewer-old-schema");
  assert.equal(new URL(url).searchParams.get("manifest"), oldManifestRef);
  assert.equal(new URL(url).searchParams.get("ui"), oldUiId);
  assert.match(url, new RegExp(`/ui/${"2".repeat(64)}/index\\.html`, "u"));
});

test("split viewer labels validation capture separately from mutable landing provenance", () => {
  assert.equal(describeSnapshotCapture({ capture: { validation_state: "validated" } }, null), "Captured after validation · landing unknown");
  assert.equal(
    describeSnapshotCapture(
      { capture: { validation_state: "validated" } },
      { landing_state: "landed", landed_at: "2026-09-05T01:02:03Z" },
    ),
    "Captured after validation · landed 2026-09-05T01:02:03Z",
  );
  assert.equal(
    artifactRootFromModuleUrl(`https://viewer.example/library/ui/${"a".repeat(64)}/app.js`),
    "https://viewer.example/library/",
  );
  assert.equal(
    artifactRootFromModuleUrl("https://viewer.example/library/app.js"),
    "https://viewer.example/library/",
  );
});

test("incremental Viewer snapshots require opt-in bootstrap and reuse unchanged PCR details", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-store-"));
  try {
    const first = snapshotPublishOptions({ root, artifactStore, sequence: 1 });
    assert.throws(
      () => publishViewerSnapshot(first),
      (error) => errorCode(error) === "VIEWER_BOOTSTRAP_REQUIRED",
    );

    const bootstrapped = publishViewerSnapshot({ ...first, bootstrap: true });
    const firstManifest = bootstrapped.store.readManifest(bootstrapped.manifestRef);
    assert.equal(firstManifest.counts.pcr, 1);
    assert.equal(firstManifest.counts.coverage, 1);
    const retried = publishViewerSnapshot({ ...first, bootstrap: true });
    assert.equal(retried.manifestRef, bootstrapped.manifestRef);
    assert.equal(retried.reused, 1);

    const second = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
      changedPcrIds: [],
    });
    const secondManifest = second.store.readManifest(second.manifestRef);
    assert.equal(secondManifest.refs.pcr_entries[wheatPcrId], firstManifest.refs.pcr_entries[wheatPcrId]);
    assert.equal(secondManifest.refs.alias_root, firstManifest.refs.alias_root);
    assert.deepEqual(secondManifest.refs.catalog_shards, firstManifest.refs.catalog_shards);
    assert.equal(secondManifest.refs.coverage_root, firstManifest.refs.coverage_root);
    assert.equal(second.reused, 1);

    const check = checkViewerSnapshot({ root, artifactStore, sourceVerifier: () => true });
    assert.deepEqual(check.drift, []);
    assert.equal(check.ok, true);
    mkdirSync(path.join(root, wheatPcrPath, "revision"));
    writeFileSync(path.join(root, wheatPcrPath, "revision", "revision.yaml"), "revision: opened\n");
    const drifted = checkViewerSnapshot({ root, artifactStore, sourceVerifier: () => true });
    assert.equal(drifted.ok, false);
    assert.ok(drifted.drift.includes("pcr_input_markers"));
    assert.deepEqual(recoverViewerSnapshot({ artifactStore, sourceVerifier: () => true }), {
      recovered: false,
    });
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("incremental Viewer rebuilds only hinted PCR bodies while membership still detects removals", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-delta-"));
  const reads: {pcr_id:string;kind:string;language?:string}[] = [];
  try {
    const first = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      bootstrap: true,
    });
    const firstManifest = first.store.readManifest(first.manifestRef);

    mkdirSync(path.join(root, wheatPcrPath, "revision"));
    writeFileSync(path.join(root, wheatPcrPath, "revision", "revision.yaml"), "revision: 2\n");
    const second = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
      changedPcrIds: [wheatPcrId],
      onPcrBodyRead: (event) => reads.push(event),
    });
    const secondManifest = second.store.readManifest(second.manifestRef);
    assert.notEqual(secondManifest.refs.pcr_entries[wheatPcrId], firstManifest.refs.pcr_entries[wheatPcrId]);
    assert.deepEqual(secondManifest.refs.catalog_shards, firstManifest.refs.catalog_shards);
    assert.equal(secondManifest.refs.coverage_root, firstManifest.refs.coverage_root);
    assert.deepEqual(new Set(reads.map((event) => event.pcr_id)), new Set([wheatPcrId]));
    assert.equal(reads.filter((event) => event.kind === "markdown").length, 2);
    assert.equal(reads.filter((event) => event.kind === "guidance").length, 1);

    rmSync(path.join(root, wheatPcrPath), { recursive: true });
    writeFixtureMaterialIndex({ root, pcrs: [] });
    writeFixtureCoverageIndex({ root, system: "cpc", version: "3.0", mappedPcrIds: [] });
    const third = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 3 }),
      changedPcrIds: [],
    });
    const thirdManifest = third.store.readManifest(third.manifestRef);
    assert.deepEqual(thirdManifest.refs.pcr_entries, {});
    assert.notDeepEqual(thirdManifest.refs.catalog_shards, secondManifest.refs.catalog_shards);
    assert.notDeepEqual(thirdManifest.refs.coverage_shards, secondManifest.refs.coverage_shards);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("one-PCR incremental update never reads unrelated PCR bodies and runs the alias gate once", () => {
  const root = createViewerFixture({ includeCoral: true });
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-bounded-"));
  try {
    const generatorV1 = sha256("viewer-generator-v1\n");
    const first = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      generatorContractSha256: generatorV1,
      bootstrap: true,
    });
    const firstManifest = first.store.readManifest(first.manifestRef);
    const reads: {pcr_id:string;kind:string;language?:string}[] = [];
    const artifactReads: string[] = [];
    let aliasGates = 0;
    mkdirSync(path.join(root, wheatPcrPath, "revision"));
    writeFileSync(path.join(root, wheatPcrPath, "revision", "revision.yaml"), "revision: 2\n");
    const second = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
      generatorContractSha256: generatorV1,
      changedPcrIds: [wheatPcrId],
      onPcrBodyRead: (event) => reads.push(event),
      onPcrArtifactRead: (event) => artifactReads.push(event.relative_path),
      onAliasValidation: () => { aliasGates += 1; },
    });
    const secondManifest = second.store.readManifest(second.manifestRef);
    assert.deepEqual(second.rebuiltPcrIds, [wheatPcrId]);
    assert.deepEqual([...new Set(reads.map((event) => event.pcr_id))], [wheatPcrId]);
    assert.equal(aliasGates, 1, "warm builds must establish alias semantics once from the bound source");
    assert.equal(artifactReads.some((relativePath) => relativePath.startsWith(`${coralPcrPath}/`)), false);
    assert.equal(artifactReads.some((relativePath) => relativePath === `${wheatPcrPath}/pcr.en-US.md`), true);
    assert.equal(artifactReads.some((relativePath) => relativePath === `${wheatPcrPath}/pcr.zh-CN.md`), true);
    assert.equal(artifactReads.some((relativePath) => relativePath === `${wheatPcrPath}/structured.yaml`), true);
    assert.equal(secondManifest.refs.pcr_entries[coralPcrId], firstManifest.refs.pcr_entries[coralPcrId]);

    const generatorV2 = sha256("viewer-generator-v2\n");
    const third = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 3 }),
      generatorContractSha256: generatorV2,
      changedPcrIds: [],
    });
    const thirdManifest = third.store.readManifest(third.manifestRef);
    assert.deepEqual(third.rebuiltPcrIds, [coralPcrId, wheatPcrId].sort());
    assert.notEqual(thirdManifest.refs.pcr_entries[coralPcrId], secondManifest.refs.pcr_entries[coralPcrId]);
    assert.notEqual(thirdManifest.refs.pcr_entries[wheatPcrId], secondManifest.refs.pcr_entries[wheatPcrId]);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("bounded candidate check reads every selected PCR and runs global contracts once without unrelated bodies", () => {
  const reads: {pcr_id:string;kind:string;language?:string}[] = [];
  const artifactReads: string[] = [];
  const gates: (UnknownRecord & {gate:string})[] = [];
  const result = checkViewerCandidates({
    root: repoRoot,
    pcrIds: [wheatPcrId, coralPcrId],
    onPcrBodyRead: (event) => reads.push(event),
    onPcrArtifactRead: (event) => artifactReads.push(event.relative_path),
    onGlobalGate: (event) => gates.push(event),
  });
  assert.deepEqual(result.checked_pcr_ids, [coralPcrId, wheatPcrId].sort());
  assert.deepEqual(new Set(reads.map((entry) => entry.pcr_id)), new Set([wheatPcrId, coralPcrId]));
  for (const pcrId of [wheatPcrId, coralPcrId]) {
    assert.equal(reads.filter((entry) => entry.pcr_id === pcrId && entry.kind === "guidance").length, 1);
    assert.deepEqual(reads.filter((entry) => entry.pcr_id === pcrId && entry.kind === "markdown").map((entry) => entry.language).sort(), ["en-US", "zh-CN"]);
  }
  assert.ok(artifactReads.length > 0);
  assert.equal(artifactReads.every((entry) => entry.startsWith(`${wheatPcrPath}/`) || entry.startsWith(`${coralPcrPath}/`)), true);
  for (const pcrPath of [wheatPcrPath, coralPcrPath]) {
    for (const leaf of ["pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"]) {
      assert.equal(artifactReads.includes(`${pcrPath}/${leaf}`), true, `${pcrPath}/${leaf}`);
    }
  }
  assert.deepEqual(gates.map((event) => event.gate).sort(), ["aliases", "catalog", "coverage", "full_contract"]);
  const byGate = Object.fromEntries(gates.map((event) => [event.gate, event]));
  assert.ok(numberField(byGate.aliases,"entry_count") > 0);
  assert.ok(numberField(byGate.catalog,"entry_count") > 0);
  assert.ok(numberField(byGate.coverage,"source_count") > 0);
  assert.ok(numberField(byGate.coverage,"entry_count") > 0);
  assert.equal(unknownField(byGate.full_contract,"object_count"), 2);
  assert.match(textField(byGate.full_contract,"generator_contract_sha256"), /^sha256:[a-f0-9]{64}$/u);
  assert.match(textField(byGate.full_contract,"schema_contract_sha256"), /^sha256:[a-f0-9]{64}$/u);
});

test("pinned Git-tree deltas rebuild an unhinted changed PCR without opening unchanged bodies", () => {
  const root = createViewerFixture({ includeCoral: true });
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-git-delta-"));
  const generatorContractSha256 = sha256("viewer-git-delta-generator\n");
  try {
    execFileSync("git", ["init", "-b", "main", root], { stdio: "ignore" });
    execFileSync("git", ["-C", root, "config", "user.email", "viewer-test@example.invalid"]);
    execFileSync("git", ["-C", root, "config", "user.name", "Viewer Test"]);
    execFileSync("git", ["-C", root, "add", "."]);
    execFileSync("git", ["-C", root, "commit", "-m", "fixture"], { stdio: "ignore" });
    const firstCommit = gitFixtureOutput(root, ["rev-parse", "HEAD"]);
    const firstTree = gitFixtureOutput(root, ["rev-parse", "HEAD^{tree}"]);
    const firstSourceRef = "refs/tiangong-viewer-sources/goal-viewer-test/harness-1";
    execFileSync("git", ["-C", root, "update-ref", firstSourceRef, firstCommit]);
    publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      sourceRef: firstSourceRef,
      integrationCommit: firstCommit,
      baseCommit: firstCommit,
      treeHash: firstTree,
      generatorContractSha256,
      sourceVerifier: null,
      bootstrap: true,
    });

    mkdirSync(path.join(root, coralPcrPath, "revision"));
    writeFileSync(path.join(root, coralPcrPath, "revision", "revision.yaml"), "revision: 2\n");
    execFileSync("git", ["-C", root, "add", "."]);
    execFileSync("git", ["-C", root, "commit", "-m", "change unhinted coral marker"], { stdio: "ignore" });
    const secondCommit = gitFixtureOutput(root, ["rev-parse", "HEAD"]);
    const secondTree = gitFixtureOutput(root, ["rev-parse", "HEAD^{tree}"]);
    const secondSourceRef = "refs/tiangong-viewer-sources/goal-viewer-test/harness-2";
    execFileSync("git", ["-C", root, "update-ref", secondSourceRef, secondCommit]);
    const artifactReads: string[] = [];
    const second = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
      sourceRef: secondSourceRef,
      integrationCommit: secondCommit,
      baseCommit: firstCommit,
      treeHash: secondTree,
      generatorContractSha256,
      sourceVerifier: null,
      changedPcrIds: [],
      onPcrArtifactRead: (event) => artifactReads.push(event.relative_path),
    });
    assert.deepEqual(second.rebuiltPcrIds, [coralPcrId]);
    assert.equal(artifactReads.some((relativePath) => relativePath.startsWith(`${wheatPcrPath}/`)), false);
    assert.equal(artifactReads.some((relativePath) => relativePath === `${coralPcrPath}/structured.yaml`), true);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("an alias change rewrites one alias entry shard without rebuilding PCR details", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-alias-"));
  const legacyId = "pcr.legacy-products.example-products.old-wheat";
  try {
    const first = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      bootstrap: true,
    });
    const firstManifest = first.store.readManifest(first.manifestRef);
    writeFixtureFile({ root, relativePath: "docs/adr/viewer-alias.md", contents: "# Viewer alias decision\n" });
    writeFixtureCatalog({
      root,
      coverageIndexes: ["classifications/indexes/cpc-3.0-coverage.json"],
      aliases: [{
        source_pcr_id: legacyId,
        source_pcr_path: "library/pcrs/legacy-products/example-products/old-wheat",
        target: {
          kind: "classification_coverage",
          classification_system: "cpc",
          classification_version: "3.0",
          code: "CPC-001",
        },
        reason: "empty_scaffold_migration",
        decision_ref: "docs/adr/viewer-alias.md",
      }],
    });
    let changedAliasGates = 0;
    const second = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
      changedPcrIds: [],
      onAliasValidation: () => { changedAliasGates += 1; },
    });
    const secondManifest = second.store.readManifest(second.manifestRef);
    assert.equal(secondManifest.refs.pcr_entries[wheatPcrId], firstManifest.refs.pcr_entries[wheatPcrId]);
    assert.equal(Object.keys(firstManifest.refs.alias_shards).length, 0);
    assert.equal(Object.keys(secondManifest.refs.alias_shards).length, 1);
    assert.equal(changedAliasGates, 1);
    const aliasEntry = recordField(second.store.readObject(secondManifest.refs.alias_entries[legacyId]),"entry");
    assert.equal(aliasEntry.locator, "cpc:3.0:CPC-001");
    assert.equal(aliasEntry.source_pcr_path, "library/pcrs/legacy-products/example-products/old-wheat");
    assert.equal(aliasEntry.reason, "empty_scaffold_migration");
    assert.equal(aliasEntry.decision_ref, "docs/adr/viewer-alias.md");
    assert.deepEqual(aliasEntry.target, {
      kind: "classification_coverage",
      classification_system: "cpc",
      classification_version: "3.0",
      code: "CPC-001",
    });

    writeFixtureFile({ root, relativePath: "docs/adr/viewer-alias-v2.md", contents: "# Viewer alias decision v2\n" });
    writeFixtureCatalog({
      root,
      coverageIndexes: ["classifications/indexes/cpc-3.0-coverage.json"],
      aliases: [{
        source_pcr_id: legacyId,
        source_pcr_path: "library/pcrs/legacy-products/example-products/old-wheat",
        target: {
          kind: "classification_coverage",
          classification_system: "cpc",
          classification_version: "3.0",
          code: "CPC-001",
        },
        reason: "empty_scaffold_migration",
        decision_ref: "docs/adr/viewer-alias-v2.md",
      }],
    });
    const third = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 3 }),
      changedPcrIds: [],
    });
    const thirdManifest = third.store.readManifest(third.manifestRef);
    assert.notEqual(thirdManifest.refs.alias_entries[legacyId], secondManifest.refs.alias_entries[legacyId]);
    assert.notDeepEqual(thirdManifest.refs.alias_shards, secondManifest.refs.alias_shards);
    assert.equal(recordField(third.store.readObject(thirdManifest.refs.alias_entries[legacyId]),"entry").decision_ref, "docs/adr/viewer-alias-v2.md");

    let unchangedAliasGates = 0;
    const fourth = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 4 }),
      changedPcrIds: [],
      onAliasValidation: () => { unchangedAliasGates += 1; },
    });
    const fourthManifest = fourth.store.readManifest(fourth.manifestRef);
    assert.equal(unchangedAliasGates, 1, "persisted fingerprints do not certify alias semantics");
    assert.equal(fourthManifest.refs.alias_root, thirdManifest.refs.alias_root);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("coverage evidence changes rewrite only the affected coverage entry and shard", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-coverage-evidence-"));
  try {
    const first = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      bootstrap: true,
    });
    const firstManifest = first.store.readManifest(first.manifestRef);
    writeFixtureCoverageIndex({
      root,
      system: "cpc",
      version: "3.0",
      mappedPcrIds: [wheatPcrId],
      confidence: "reviewed-evidence",
      labelPrefix: "Updated leaf",
    });
    const second = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
      changedPcrIds: [],
    });
    const secondManifest = second.store.readManifest(second.manifestRef);
    const key = "cpc:3.0:CPC-001";
    assert.equal(secondManifest.refs.pcr_entries[wheatPcrId], firstManifest.refs.pcr_entries[wheatPcrId]);
    assert.notEqual(secondManifest.refs.coverage_entries[key], firstManifest.refs.coverage_entries[key]);
    assert.notDeepEqual(secondManifest.refs.coverage_shards, firstManifest.refs.coverage_shards);
    const entry = recordField(second.store.readObject(secondManifest.refs.coverage_entries[key]),"entry");
    assert.equal(entry.label, "Updated leaf 1");
    assert.equal(entry.coverage_status, "mapped");
    assert.equal(recordField(entry,"mapping").confidence, "reviewed-evidence");
    assert.equal(recordField(recordField(entry,"mapping"),"acceptance").decision_ref, "docs/adr/viewer-fixture.md");
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("wrapper recovery makes retries idempotent after every durable publication phase", () => {
  for (const phase of ["prepared", "history_prepared", "history_committed", "active_committed"]) {
    const root = createViewerFixture();
    const artifactStore = mkdtempSync(path.join(tmpdir(), `tiangong-pcr-viewer-retry-${phase}-`));
    try {
      const options = {
        ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
        bootstrap: true,
      };
      assert.throws(
        () => publishViewerSnapshot({ ...options, failurePhase: phase }),
        (error) => errorCode(error) === "VIEWER_PUBLICATION_INTERRUPTED",
      );
      const retried = publishViewerSnapshot(options);
      assert.equal(retried.sequence, 1);
      assert.equal(retried.store.readActive().manifest_ref, retried.manifestRef);
      assert.equal(retried.store.readHistory().entries.length, 1);
    } finally {
      rmSync(root, { recursive: true, force: true });
      rmSync(artifactStore, { recursive: true, force: true });
    }
  }
});

test("check recovers an interrupted publication before reading the active snapshot", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-check-recovery-"));
  const generatorContractSha256 = sha256("viewer-check-recovery-generator\n");
  try {
    assert.throws(
      () => publishViewerSnapshot({
        ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
        generatorContractSha256,
        bootstrap: true,
        failurePhase: "history_committed",
      }),
      (error) => errorCode(error) === "VIEWER_PUBLICATION_INTERRUPTED",
    );
    const checked = checkViewerSnapshot({
      root,
      artifactStore,
      generatorContractSha256,
      sourceVerifier: () => true,
    });
    assert.equal(checked.ok, true);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("generator contract recursively binds real guidance, readiness, schema, and vocabulary dependencies", () => {
  const contractRoot = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-generator-contract-"));
  const sourceRoot = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-generator-store-"));
  try {
    for (const relativePath of [
      "package.json",
      "package-lock.json",
      "tsconfig.json",
      "tsconfig.viewer-browser.json",
      "builder/vocab",
      "builder/schemas/pcr-material-index.schema.json",
      "packages/pcr-core/src",
      "packages/pcr-core/schemas",
      "packages/pcr-viewer/scripts",
      "packages/pcr-viewer/schemas",
      "packages/pcr-viewer/static",
    ]) {
      const source = path.join(repoRoot, relativePath);
      const target = path.join(contractRoot, relativePath);
      mkdirSync(path.dirname(target), { recursive: true });
      cpSync(source, target, { recursive: true });
    }
    execFileSync("git", ["init", "-b", "main", contractRoot], { stdio: "ignore" });
    execFileSync("git", ["-C", contractRoot, "config", "user.email", "viewer-test@example.invalid"]);
    execFileSync("git", ["-C", contractRoot, "config", "user.name", "Viewer Test"]);
    execFileSync("git", ["-C", contractRoot, "add", "."]);
    execFileSync("git", ["-C", contractRoot, "commit", "-m", "generator contract fixture"], { stdio: "ignore" });
    const before = computeViewerGeneratorContractSha256({ contractRoot });
    const first = publishViewerSnapshot({
      ...snapshotPublishOptions({ root: sourceRoot, artifactStore, sequence: 1 }),
      generatorContractSha256: before,
      bootstrap: true,
    });
    const firstManifest = first.store.readManifest(first.manifestRef);
    const dependency = path.join(contractRoot, "packages/pcr-core/src/projection-integrity.ts");
    writeFileSync(dependency, `${readFileSync(dependency, "utf8")}\n// contract mutation\n`);
    const after = computeViewerGeneratorContractSha256({ contractRoot });
    assert.notEqual(after, before);
    assert.equal(computeViewerGeneratorContractSha256({ contractRoot }), after);
    const second = publishViewerSnapshot({
      ...snapshotPublishOptions({ root: sourceRoot, artifactStore, sequence: 2 }),
      generatorContractSha256: after,
      changedPcrIds: [],
    });
    const secondManifest = second.store.readManifest(second.manifestRef);
    assert.deepEqual(second.rebuiltPcrIds, [wheatPcrId]);
    assert.notEqual(
      secondManifest.refs.pcr_entries[wheatPcrId],
      firstManifest.refs.pcr_entries[wheatPcrId],
    );
    const beforeStatic = after;
    const staticDependency = path.join(contractRoot, "packages/pcr-viewer/static/viewer-core.ts");
    writeFileSync(staticDependency, `${readFileSync(staticDependency, "utf8")}\n// direct dependency mutation\n`);
    assert.notEqual(computeViewerGeneratorContractSha256({ contractRoot }), beforeStatic);
    writeFixtureFile({
      root: contractRoot,
      relativePath: "packages/pcr-core/src/untracked-generator.ts",
      contents: "export const untracked = true;\n",
    });
    assert.throws(
      () => computeViewerGeneratorContractSha256({ contractRoot }),
      (error) => errorCode(error) === "VIEWER_GENERATOR_CONTRACT_UNTRACKED",
    );
    rmSync(path.join(contractRoot, "packages/pcr-core/src/untracked-generator.ts"));
    writeFixtureFile({
      root: contractRoot,
      relativePath: "packages/pcr-core/src/intent-to-add-generator.ts",
      contents: "export const intentToAdd = true;\n",
    });
    execFileSync("git", ["-C", contractRoot, "add", "--intent-to-add", "packages/pcr-core/src/intent-to-add-generator.ts"]);
    assert.throws(
      () => computeViewerGeneratorContractSha256({ contractRoot }),
      (error) => errorCode(error) === "VIEWER_GENERATOR_CONTRACT_UNTRACKED",
    );
  } finally {
    rmSync(contractRoot, { recursive: true, force: true });
    rmSync(sourceRoot, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("incremental membership records a validated canonical-id rename as remove plus add", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-rename-"));
  try {
    publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      bootstrap: true,
    });
    rmSync(path.join(root, wheatPcrPath), { recursive: true });
    copyFixturePcr({ root, relativePath: coralPcrPath });
    writeFixtureCoverageIndex({ root, system: "cpc", version: "3.0", mappedPcrIds: [coralPcrId] });
    writeFixtureMaterialIndex({
      root,
      pcrs: [{
        id: coralPcrId,
        path: coralPcrPath,
        title: {
          "en-US": "Washed and drained uncalcined mussel-shell fragments",
          "zh-CN": "经水洗沥水的未煅烧贻贝壳碎片",
        },
        status: "candidate",
        content_maturity: "authored_methodology",
      }],
    });
    writeFixtureFile({ root, relativePath: "docs/adr/viewer-rename.md", contents: "# Viewer rename decision\n" });
    writeFixtureCatalog({
      root,
      coverageIndexes: ["classifications/indexes/cpc-3.0-coverage.json"],
      aliases: [{
        source_pcr_id: wheatPcrId,
        source_pcr_path: wheatPcrPath,
        target: { kind: "canonical_pcr", pcr_id: coralPcrId },
        reason: "canonical_pcr_replacement",
        decision_ref: "docs/adr/viewer-rename.md",
      }],
    });
    const renamed = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
      changedPcrIds: [coralPcrId],
    });
    const manifest = renamed.store.readManifest(renamed.manifestRef);
    assert.deepEqual(renamed.removedPcrIds, [wheatPcrId]);
    assert.deepEqual(Object.keys(recordField(recordField(manifest,"refs"),"pcr_entries")), [coralPcrId]);
    assert.deepEqual(manifest.lineage.renames, { [coralPcrId]: wheatPcrId });
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("Viewer snapshot CLI exposes stable JSON failures and exact package scripts", () => {
  const scriptPath = path.join(repoRoot, "packages/pcr-viewer/scripts/build-viewer-data.ts");
  const failure = spawnSync(process.execPath, [scriptPath, "check", "--format", "json"], {
    encoding: "utf8",
  });
  assert.equal(failure.status, 1);
  assert.equal(failure.stdout, "");
  assert.deepEqual(jsonObject(failure.stderr), {
    ok: false,
    error: {
      code: "VIEWER_ARTIFACT_STORE_REQUIRED",
      message: "Missing required option: --artifact-store <path>.",
    },
  });

  const scripts = recordField(jsonObject(readFileSync(path.join(repoRoot, "package.json"), "utf8")),"scripts");
  assert.equal(scripts["viewer:build"], "node packages/pcr-viewer/scripts/build-viewer-data.ts build");
  assert.equal(scripts["viewer:update"], "node packages/pcr-viewer/scripts/build-viewer-data.ts update");
  assert.equal(scripts["viewer:check"], "node packages/pcr-viewer/scripts/build-viewer-data.ts check");
  assert.equal(scripts["viewer:recover"], "node packages/pcr-viewer/scripts/build-viewer-data.ts recover");
});

test("viewer:check reports semantic drift as stable JSON on stderr with empty stdout", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-check-cli-"));
  try {
    execFileSync("git", ["init", "-b", "main", root], { stdio: "ignore" });
    execFileSync("git", ["-C", root, "config", "user.email", "viewer-test@example.invalid"]);
    execFileSync("git", ["-C", root, "config", "user.name", "Viewer Test"]);
    execFileSync("git", ["-C", root, "add", "."]);
    execFileSync("git", ["-C", root, "commit", "-m", "fixture"], { stdio: "ignore" });
    const commit = execFileSync("git", ["-C", root, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
    const tree = execFileSync("git", ["-C", root, "rev-parse", "HEAD^{tree}"], { encoding: "utf8" }).trim();
    publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      sourceRef: "refs/heads/main",
      integrationCommit: commit,
      baseCommit: commit,
      treeHash: tree,
      sourceVerifier: null,
      bootstrap: true,
    });
    mkdirSync(path.join(root, wheatPcrPath, "revision"));
    writeFileSync(path.join(root, wheatPcrPath, "revision", "revision.yaml"), "revision: drift\n");

    const scriptPath = path.join(repoRoot, "packages/pcr-viewer/scripts/build-viewer-data.ts");
    const result = spawnSync(process.execPath, [
      scriptPath,
      "check",
      "--root",
      root,
      "--artifact-store",
      artifactStore,
      "--format",
      "json",
    ], { encoding: "utf8" });
    assert.equal(result.status, 1);
    assert.equal(result.stdout, "");
    const failure = jsonObject(result.stderr);
    assert.equal(failure.ok, false);
    assert.equal(textField(recordField(failure,"error"),"code"), "VIEWER_SNAPSHOT_DRIFT");
    assert.ok(String(recordField(recordField(failure,"error"),"details").drift).includes("pcr_input_markers"));
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("viewer coverage counts classification leaves independently from PCR catalog size", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-many-to-one-"));
  try {
    copyFixturePcr({ root, relativePath: wheatPcrPath });
    const coverageIndex = writeFixtureCoverageIndex({
      root,
      system: "cpc",
      version: "3.0",
      mappedPcrIds: [wheatPcrId, wheatPcrId, wheatPcrId, wheatPcrId],
    });
    writeFixtureCatalog({ root, coverageIndexes: [coverageIndex] });

    const data = buildViewerData({ root });
    const [coverage] = data.classification_coverage_summaries;
    assert.ok(coverage);

    assert.equal(data.pcr_count, 1);
    assert.equal(coverage.summary.mapped, 4);
    assert.ok(coverage.summary.mapped > data.pcr_count);
    assert.equal(Object.hasOwn(coverage, "entries"), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("viewer discovers and presents every catalog-declared coverage coordinate", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-multi-coverage-"));
  try {
    copyFixturePcr({ root, relativePath: wheatPcrPath });
    const cpcIndex = writeFixtureCoverageIndex({
      root,
      system: "cpc",
      version: "3.0",
      mappedPcrIds: [wheatPcrId, wheatPcrId],
    });
    const hsIndex = writeFixtureCoverageIndex({
      root,
      system: "hs",
      version: "2022",
      mappedPcrIds: [wheatPcrId],
      unmappedCount: 2,
    });
    writeFixtureCatalog({ root, coverageIndexes: [cpcIndex, hsIndex] });

    const data = buildViewerData({ root });
    assert.equal(assertViewerDataContract(data), data);
    assert.deepEqual(
      data.classification_coverage_summaries.map((coverage) => coverage.coordinate),
      [
        { system: "cpc", version: "3.0" },
        { system: "hs", version: "2022" },
      ],
    );
    assert.deepEqual(
      data.classification_coverage_summaries.map(formatCoverageSummary),
      [
        "CPC 3.0 · 2/2 classification leaves mapped",
        "HS 2022 · 1/3 classification leaves mapped",
      ],
    );
    assert.equal(
      data.classification_coverage_summaries.every(
        (coverage) => coverage.entries_inlined === false && !Object.hasOwn(coverage, "entries"),
      ),
      true,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("viewer fails closed when catalog coverage declarations are missing or invalid", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-invalid-coverage-"));
  try {
    mkdirSync(path.join(root, "library/pcrs"), { recursive: true });
    assert.throws(() => buildViewerData({ root }), /Missing PCR catalog/u);

    writeFileSync(
      path.join(root, "library/catalog.yaml"),
      "schema_version: 1\ncatalog_status: current\nclassification_coverage_indexes: []\n",
    );
    assert.throws(
      () => buildViewerData({ root }),
      /classification_coverage_indexes must be a non-empty array/u,
    );

    writeFixtureCatalog({ root, coverageIndexes: ["../outside-coverage.json"] });
    assert.throws(
      () => buildViewerData({ root }),
      /Invalid PCR catalog coverage declaration/u,
    );

    writeFixtureCatalog({
      root,
      coverageIndexes: ["classifications/indexes/missing-1.0-coverage.json"],
    });
    assert.throws(
      () => buildViewerData({ root }),
      /Missing classification coverage index/u,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("incremental publication and check reject a coverage declaration outside its canonical coordinate path", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-coverage-path-"));
  try {
    publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      bootstrap: true,
    });
    const canonicalPath = path.join(root, "classifications/indexes/cpc-3.0-coverage.json");
    const rogueRelativePath = "classifications/indexes/alternate-coverage.json";
    writeFixtureFile({
      root,
      relativePath: rogueRelativePath,
      contents: readFileSync(canonicalPath, "utf8"),
    });
    writeFixtureCatalog({ root, coverageIndexes: [rogueRelativePath] });
    for (const operation of [
      () => publishViewerSnapshot({
        ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
        changedPcrIds: [],
      }),
      () => checkViewerSnapshot({ root, artifactStore, sourceVerifier: () => true }),
    ]) {
      assert.throws(
        operation,
        (error) => errorCode(error) === "VIEWER_COVERAGE_DECLARATION_INVALID" &&
          /requires classifications\/indexes\/cpc-3\.0-coverage\.json/u.test(errorMessage(error)),
      );
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("coverage provenance hashes exact validated bytes and check detects BOM-only drift", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-coverage-bytes-"));
  try {
    const first = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      bootstrap: true,
    });
    const before = first.store.readManifest(first.manifestRef);
    const coveragePath = path.join(root, "classifications/indexes/cpc-3.0-coverage.json");
    const bytesWithBom = Buffer.concat([
      Buffer.from([0xef, 0xbb, 0xbf]),
      readFileSync(coveragePath),
    ]);
    writeFileSync(coveragePath, bytesWithBom);
    const checked = checkViewerSnapshot({ root, artifactStore, sourceVerifier: () => true });
    assert.equal(checked.ok, false);
    assert.ok(checked.drift.includes("coverage_source"));
    const second = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
      changedPcrIds: [],
    });
    const after = second.store.readManifest(second.manifestRef);
    assert.equal(after.source.coverage[0]!.ref, `sha256:${createHash("sha256").update(bytesWithBom).digest("hex")}`);
    assert.notEqual(after.source.coverage[0]!.ref, before.source.coverage[0]!.ref);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
  }
});

test("artifact stores cannot overlap generator-contract source directories", () => {
  for (const artifactStore of [
    path.join(repoRoot, "packages/pcr-viewer/scripts"),
    path.join(repoRoot, "builder/schemas"),
    path.parse(repoRoot).root,
  ]) {
    assert.throws(
      () => recoverViewerSnapshot({ artifactStore, sourceVerifier: () => true }),
      (error) => errorCode(error) === "VIEWER_ARTIFACT_STORE_OVERLAP",
    );
  }
});

test("viewer managed inputs reject symbolic links, FIFOs, and invalid UTF-8", async (t) => {
  await t.test("catalog symbolic link", () => {
    const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-catalog-link-"));
    try {
      mkdirSync(path.join(root, "library/pcrs"), { recursive: true });
      writeFixtureCatalog({
        root,
        coverageIndexes: ["classifications/indexes/cpc-3.0-coverage.json"],
      });
      const catalogPath = path.join(root, "library/catalog.yaml");
      const sourcePath = `${catalogPath}.source`;
      renameSync(catalogPath, sourcePath);
      symlinkSync(path.basename(sourcePath), catalogPath);

      assert.throws(
        () => buildViewerData({ root }),
        /PCR catalog path contains a symbolic link/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("catalog FIFO", (subtest) => {
    const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-catalog-fifo-"));
    try {
      mkdirSync(path.join(root, "library/pcrs"), { recursive: true });
      const catalogPath = path.join(root, "library/catalog.yaml");
      const result = spawnSync("mkfifo", [catalogPath], { encoding: "utf8" });
      if (errorCode(result.error) === "ENOENT") {
        subtest.skip("mkfifo is unavailable on this platform");
        return;
      }
      assert.equal(result.status, 0, result.stderr);
      assert.throws(
        () => buildViewerData({ root }),
        /PCR catalog must be a regular file/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("declared coverage index invalid UTF-8", () => {
    const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-coverage-utf8-"));
    try {
      mkdirSync(path.join(root, "library/pcrs"), { recursive: true });
      const indexPath = "classifications/indexes/cpc-3.0-coverage.json";
      writeFixtureCatalog({ root, coverageIndexes: [indexPath] });
      writeFixtureFile({ root, relativePath: indexPath, contents: Buffer.from([0xff]) });

      assert.throws(
        () => buildViewerData({ root }),
        /classification coverage index .* must contain valid UTF-8/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

test("buildViewer refuses protected and unowned output directories", () => {
  assert.throws(
    () => buildViewer({ root: repoRoot, outDir: repoRoot }),
    /Refusing to build the PCR viewer into protected path/u,
  );

  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-unsafe-"));
  const outDir = path.join(parentDir, "existing-output");
  const sentinelPath = path.join(outDir, "keep.txt");
  try {
    mkdirSync(outDir);
    writeFileSync(sentinelPath, "must survive\n");

    assert.throws(
      () => buildViewer({ root: repoRoot, outDir }),
      new RegExp(`without ${VIEWER_BUILD_MARKER}`, "u"),
    );
    assert.equal(readFileSync(sentinelPath, "utf8"), "must survive\n");
  } finally {
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("buildViewer resolves parent symlinks before checking protected paths", () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-symlink-"));
  const repoParentAlias = path.join(parentDir, "repo-parent-alias");
  const packageAlias = path.join(parentDir, "package-alias");
  const repoPathThroughAlias = path.join(repoParentAlias, path.basename(repoRoot));
  const testChildName = `generated-viewer-${path.basename(parentDir)}`;
  const staticChildThroughAlias = path.join(packageAlias, "static", testChildName);
  const staticChild = path.join(repoRoot, "packages", "pcr-viewer", "static", testChildName);

  assert.equal(existsSync(staticChild), false);
  try {
    symlinkSync(path.dirname(repoRoot), repoParentAlias, "dir");
    symlinkSync(path.join(repoRoot, "packages", "pcr-viewer"), packageAlias, "dir");

    assert.throws(
      () => buildViewer({ root: repoRoot, outDir: repoPathThroughAlias }),
      /Refusing to build the PCR viewer into protected path/u,
    );
    assert.throws(
      () => buildViewer({ root: repoRoot, outDir: staticChildThroughAlias }),
      /Refusing to build the PCR viewer inside its static source directory/u,
    );
    assert.equal(existsSync(staticChild), false);
  } finally {
    rmSync(staticChild, { recursive: true, force: true });
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("buildViewer allows a safe new path through a parent symlink and can replace its marked build", () => {
  const root = createViewerFixture();
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-repeat-"));
  const realParentDir = path.join(parentDir, "real-parent");
  const parentAlias = path.join(parentDir, "parent-alias");
  const outDir = path.join(parentAlias, "new-output");
  try {
    mkdirSync(realParentDir);
    symlinkSync(realParentDir, parentAlias, "dir");
    buildViewer({ root, outDir, acceptedIntegrationHead: acceptedIntegrationHead(), sourceVerifier: () => true });
    writeFileSync(path.join(outDir, "stale-generated-file.txt"), "stale\n");

    buildViewer({ root, outDir, acceptedIntegrationHead: acceptedIntegrationHead(), sourceVerifier: () => true });

    assert.equal(existsSync(path.join(outDir, "stale-generated-file.txt")), false);
    assert.equal(existsSync(path.join(outDir, VIEWER_BUILD_MARKER)), true);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("buildViewer does not replace an existing build with an empty catalog", () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-empty-root-"));
  const emptyRoot = path.join(parentDir, "empty-repository");
  const outDir = path.join(parentDir, "existing-build");
  const sentinelPath = path.join(outDir, "keep.txt");
  try {
    mkdirSync(path.join(emptyRoot, "library/pcrs"), { recursive: true });
    writeFixtureCoverageIndex({ root: emptyRoot, system: "cpc", version: "3.0" });
    writeFixtureCatalog({
      root: emptyRoot,
      coverageIndexes: ["classifications/indexes/cpc-3.0-coverage.json"],
    });
    writeFixtureMaterialIndex({ root: emptyRoot, pcrs: [] });
    mkdirSync(outDir);
    writeFileSync(path.join(outDir, VIEWER_BUILD_MARKER), "owned viewer build\n");
    writeFileSync(sentinelPath, "last usable output\n");

    assert.throws(
      () => buildViewer({ root: emptyRoot, outDir, acceptedIntegrationHead: acceptedIntegrationHead(), sourceVerifier: () => true }),
      /Refusing to replace viewer output with an empty PCR catalog/u,
    );
    assert.equal(readFileSync(sentinelPath, "utf8"), "last usable output\n");
  } finally {
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("viewer-core filters PCRs and renders safe Markdown", () => {
  const records = [
    {
      id: "pcr.example.wheat",
      path: "library/pcrs/example/wheat",
      status: "candidate",
      content_maturity: "authored_methodology",
      title: { "en-US": "Wheat seed", "zh-CN": "小麦种子" },
      search_text: "pcr.example.wheat wheat seed cpc 01111",
    },
    {
      id: "pcr.example.abalone",
      path: "library/pcrs/example/abalone",
      status: "scaffold",
      content_maturity: "empty_scaffold",
      title: { "en-US": "Farmed abalone" },
      search_text: "pcr.example.abalone farmed abalone cpc 04412",
    },
  ];

  assert.deepEqual(filterPcrs(records, { query: "04412", status: "", maturity: "" }).map((pcr) => pcr.id), [
    "pcr.example.abalone",
  ]);
  assert.deepEqual(filterPcrs(records, { query: "", status: "candidate", maturity: "" }).map((pcr) => pcr.id), [
    "pcr.example.wheat",
  ]);
  assert.deepEqual(
    filterPcrs(records, { query: "seed", status: "candidate", maturity: "authored_methodology" }).map(
      (pcr) => pcr.id,
    ),
    ["pcr.example.wheat"],
  );

  const html = renderMarkdown("# Title\n\n- <unsafe>\n\n| Field | Value |\n| --- | --- |\n| A | B |");
  assert.match(html, /<h1>Title<\/h1>/);
  assert.match(html, /&lt;unsafe&gt;/);
  assert.match(html, /<table>/);
});

test("viewer-core rejects stale or incomplete viewer data contracts", () => {
  const data = {
    schema_version: 3,
    viewer_kind: "tiangong-pcr-static-viewer-data",
    catalog_scope: "material",
    classification_coverage_summaries: [viewerCoverageSummary()],
    pcr_count: 0,
    pcrs: [],
  };

  assert.equal(assertViewerDataContract(data), data);
  assert.throws(
    () => assertViewerDataContract({ ...data, schema_version: 2 }),
    /Unsupported PCR viewer data schema version: 2/u,
  );
  assert.throws(
    () => assertViewerDataContract({ ...data, classification_coverage_summaries: null }),
    /classification_coverage_summaries must be a non-empty array/u,
  );
  assert.throws(
    () =>
      assertViewerDataContract({
        ...data,
        classification_coverage_summaries: [
          { ...viewerCoverageSummary(), entries: [], entries_inlined: true },
        ],
      }),
    /must not inline entries/u,
  );
  assert.throws(
    () => assertViewerDataContract({ ...data, pcr_count: 1 }),
    /pcr_count must match/u,
  );
});

test("viewer labels classification matching as a literal filter, not a resolver", () => {
  const appSource = readFileSync(path.join(repoRoot, "packages/pcr-viewer/static/app.ts"), "utf8");

  assert.match(appSource, /Literal metadata filter/u);
  assert.match(appSource, /Substring filter only/u);
  assert.match(appSource, /tiangong-pcr resolve/u);
  assert.match(appSource, /state\.catalog/u);
  assert.match(appSource, /loadPcrDetail/u);
});

test("viewer-core renders deep headings, inline code, and indented lists", () => {
  const html = renderMarkdown(
    [
      "###### 产品流",
      "",
      "####### 繁殖用来源种批 (`source_seed_lot_used_for_multiplication`)",
      "",
      "  - 范围角色：默认估算 (`default_estimate`)",
      "  - 证据类型：采集记录 (`collected_record`)",
      "",
      "普通段落含有 `inline_code` 和 <unsafe>。",
    ].join("\n"),
  );

  assert.match(html, /<h6>产品流<\/h6>/);
  assert.match(
    html,
    /<h6>繁殖用来源种批 \(<code>source_seed_lot_used_for_multiplication<\/code>\)<\/h6>/,
  );
  assert.match(html, /<ul><li>范围角色：默认估算 \(<code>default_estimate<\/code>\)<\/li>/);
  assert.match(html, /<li>证据类型：采集记录 \(<code>collected_record<\/code>\)<\/li><\/ul>/);
  assert.match(html, /<p>普通段落含有 <code>inline_code<\/code> 和 &lt;unsafe&gt;。<\/p>/);
});

test("viewer-core summarizes guidance counts", () => {
  const summary = summarizeGuidance({
    reference_flow: { reference_unit: "kg", required_qualifiers: ["species", "gate"] },
    process_map: [{ id: "growout" }],
    process_inventory: [{ id: "growout" }, { id: "packout" }],
    production_guidance: {
      collection_protocols: [{ protocol_id: "cp_feed" }],
      calculation_rules: [{ id: "normalize" }],
      data_quality_requirements: [{ id: "scope" }],
    },
    data_sources: [{ id: "source-1" }, { id: "source-2" }],
  });

  assert.deepEqual(summary, {
    reference_unit: "kg",
    required_qualifier_count: 2,
    process_count: 1,
    inventory_process_count: 2,
    collection_protocol_count: 1,
    calculation_rule_count: 1,
    data_quality_requirement_count: 1,
    data_source_count: 2,
  });
});

test("viewer-core presents PCR readiness with an explicit status and tone", () => {
  assert.deepEqual(describeReadiness({ status: "ready" }), { status: "ready", tone: "ready" });
  assert.deepEqual(describeReadiness({ status: "review_required" }), {
    status: "review_required",
    tone: "review",
  });
  assert.deepEqual(describeReadiness({ status: "unavailable" }), {
    status: "unavailable",
    tone: "unavailable",
  });
  assert.deepEqual(describeReadiness(), { status: "unknown", tone: "unknown" });
});

test("viewer scripts are safe to import when the process entry path does not exist", () => {
  const buildUrl = pathToFileURL(path.join(repoRoot, "packages/pcr-viewer/scripts/build-viewer-data.ts")).href;
  const serveUrl = pathToFileURL(path.join(repoRoot, "packages/pcr-viewer/scripts/serve-viewer.ts")).href;
  const output = execFileSync(process.execPath, ["--input-type=module", "-"], {
    encoding: "utf8",
    input: `await import(${JSON.stringify(buildUrl)});\nawait import(${JSON.stringify(serveUrl)});\nconsole.log("imported");\n`,
  });

  assert.equal(output, "imported\n");
});

test("serve-viewer help documents split artifacts and exits without starting a server", () => {
  const result = spawnSync(process.execPath, [
    path.join(repoRoot, "packages/pcr-viewer/scripts/serve-viewer.ts"),
    "--help",
  ], { encoding: "utf8" });

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Usage:.*serve-viewer/u);
  assert.match(result.stdout, /--root/u);
  assert.match(result.stdout, /immutable snapshot objects/u);
});

test("artifact mirroring retains split history and installs the active compatible UI at the cache root", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-artifacts-"));
  const outDir = path.join(mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-mirror-")), "dist");
  try {
    publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      bootstrap: true,
    });
    const activeBefore = readFileSync(path.join(artifactStore, "active.json"));
    const mirrored = mirrorViewerArtifactStore({ artifactStore, outDir, sourceVerifier: () => true });
    const deployed = currentDeploymentDir(outDir);

    assert.deepEqual(readFileSync(path.join(deployed, "active.json")), activeBefore);
    assert.equal(mirrored.sequence, 1);
    assert.ok(existsSync(path.join(deployed, "history-head.json")));
    assert.ok(existsSync(path.join(deployed, "index.html")));
    assert.ok(existsSync(path.join(outDir, VIEWER_BUILD_MARKER)));
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
    rmSync(path.dirname(outDir), { recursive: true, force: true });
  }
});

test("artifact mirror rechecks its exact pointer baseline before activating a concurrent publication", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-mirror-race-store-"));
  const outDir = path.join(mkdtempSync(path.join(tmpdir(), "tiangong-viewer-mirror-race-out-")), "dist");
  try {
    publishViewerSnapshot({ ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }), bootstrap: true });
    mirrorViewerArtifactStore({ artifactStore, outDir, sourceVerifier: () => true });
    const priorGeneration = currentDeploymentDir(outDir);
    const priorActive = readFileSync(path.join(priorGeneration, "active.json"));
    let retainedChecks = 0;
    assert.throws(
      () => mirrorViewerArtifactStore({
        artifactStore,
        outDir,
        sourceVerifier: ({ phase }) => {
          // The fourth retained check validates the copied store, after the
          // source tree has already been copied but before deployment commits.
          if (phase === "retained" && ++retainedChecks === 4) {
            publishViewerSnapshot({ ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }) });
          }
          return true;
        },
      }),
      (error) => errorCode(error) === "VIEWER_MIRROR_SOURCE_CHANGED",
    );
    assert.equal(currentDeploymentDir(outDir), priorGeneration);
    assert.deepEqual(readFileSync(path.join(currentDeploymentDir(outDir), "active.json")), priorActive);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
    rmSync(path.dirname(outDir), { recursive: true, force: true });
  }
});

test("split deployment keeps the old generation live until an atomic current-pointer commit", async () => {
  const root = createViewerFixture();
  const parent = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-deployment-recovery-"));
  const outDir = path.join(parent, "dist");
  let server: Server | undefined;
  try {
    buildViewer({
      root,
      outDir,
      acceptedIntegrationHead: acceptedIntegrationHead(),
      sourceVerifier: () => true,
    });
    server = serveViewer({ root: outDir, port: 0 });
    if (!server.listening) await new Promise<void>((resolve) => server!.once("listening", resolve));
    const baseUrl = `http://127.0.0.1:${serverPort(server)}`;
    let visibleSnapshot = acceptedIntegrationHead().snapshotId;
    for (const phase of [
      "generation_prepared",
      "generation_installed",
      "pointer_prepared",
      "pointer_committed",
    ]) {
      const replacement = `replacement-${phase}`;
      assert.throws(
        () => buildViewer({
          root,
          outDir,
          acceptedIntegrationHead: acceptedIntegrationHead({ snapshotId: replacement }),
          sourceVerifier: () => true,
          deploymentFailurePhase: phase,
        }),
        (error) => errorCode(error) === "VIEWER_DEPLOYMENT_INTERRUPTED",
      );
      assert.ok(existsSync(outDir), "the stable served root must never disappear");
      const visibleBeforeRecovery = await fetch(`${baseUrl}/active.json`).then((response) => response.json());
      assert.equal(
        visibleBeforeRecovery.snapshot_id,
        phase === "pointer_committed" ? replacement : visibleSnapshot,
        `unexpected live snapshot during ${phase}`,
      );
      const recovered = recoverViewerDeployment({ outDir });
      assert.equal(recovered.recovered, true);
      const deployed = currentDeploymentDir(outDir);
      assert.ok(existsSync(path.join(deployed, "index.html")));
      assert.equal(jsonObject(readFileSync(path.join(deployed, "active.json"), "utf8")).snapshot_id, replacement);
      assert.equal((await fetch(`${baseUrl}/active.json`).then((response) => response.json())).snapshot_id, replacement);
      visibleSnapshot = replacement;
      assert.equal(recoverViewerDeployment({ outDir }).recovered, false);
    }
  } finally {
    if (server?.listening) await new Promise<void>((resolve,reject) => server!.close(error=>error?reject(error):resolve()));
    rmSync(root, { recursive: true, force: true });
    rmSync(parent, { recursive: true, force: true });
  }
});

test("deployment lock excludes another process, requires explicit stale recovery, and verifies owner tokens", async () => {
  const parent = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-deployment-lock-"));
  const outDir = path.join(parent, "dist");
  const lockPath = path.join(parent, ".dist-deployment.lock.json");
  const stage = createDeploymentStage(parent, ".dist-build-live-lock", "locked-version");
  const child = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], { stdio: "ignore" });
  try {
    installDeploymentLock(lockPath, {
      schema_version: 1,
      kind: "viewer-deployment-lock",
      pid: child.pid,
      created_at: "2000-01-01T00:00:00.000Z",
      owner_token: "other-process-owner",
    });
    for (const forceStaleLock of [false, true]) {
      assert.throws(
        () => commitViewerDeployment({ stageDir: stage, outDir, forceStaleLock, staleLockMs: 0 }),
        (error) => errorCode(error) === "VIEWER_DEPLOYMENT_LOCKED",
      );
    }
    child.kill("SIGTERM");
    await new Promise((resolve) => child.once("exit", resolve));
    assert.throws(
      () => commitViewerDeployment({ stageDir: stage, outDir, staleLockMs: 0 }),
      (error) => errorCode(error) === "VIEWER_DEPLOYMENT_LOCKED",
    );
    commitViewerDeployment({ stageDir: stage, outDir, forceStaleLock: true, staleLockMs: 0 });

    const ownerStage = createDeploymentStage(parent, ".dist-build-owner-token", "owner-version");
    assert.throws(
      () => commitViewerDeployment({
        stageDir: ownerStage,
        outDir,
        onPhase: (phase: string) => {
          if (phase !== "generation_prepared") return;
          rmSync(lockPath, { recursive: true });
          installDeploymentLock(lockPath, {
            schema_version: 1,
            kind: "viewer-deployment-lock",
            pid: 99999999,
            created_at: "2000-01-01T00:00:00.000Z",
            owner_token: "substituted-owner",
          });
        },
      }),
      (error) => errorCode(error) === "VIEWER_DEPLOYMENT_LOCK_OWNERSHIP_LOST",
    );

    rmSync(lockPath, { recursive: true });
    writeFileSync(lockPath, `${JSON.stringify({
      schema_version: 1,
      kind: "viewer-deployment-lock",
      pid: 99999999,
      created_at: "2000-01-01T00:00:00.000Z",
      owner_token: "legacy-file-owner",
    })}\n`, { flag: "wx" });
    const legacyStage = createDeploymentStage(parent, ".dist-build-legacy-file-lock", "legacy-file-lock");
    commitViewerDeployment({ stageDir: legacyStage, outDir, forceStaleLock: true, staleLockMs: 0 });
    assert.equal(jsonObject(readFileSync(path.join(currentDeploymentDir(outDir), "active.json"), "utf8")).snapshot_id, "legacy-file-lock");
  } finally {
    if (child.exitCode === null) child.kill("SIGKILL");
    rmSync(parent, { recursive: true, force: true });
  }
});

test("two coordinated forced stale recoverers cannot retire the replacement live lease", () => {
  const parent = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-stale-takeover-race-"));
  const outDir = path.join(parent, "dist");
  const lockPath = path.join(parent, ".dist-deployment.lock.json");
  const firstStage = createDeploymentStage(parent, ".dist-build-first-racer", "first-racer");
  const secondStage = createDeploymentStage(parent, ".dist-build-second-racer", "second-racer");
  installDeploymentLock(lockPath, {
    schema_version: 1,
    kind: "viewer-deployment-lock",
    pid: 99999999,
    created_at: "2000-01-01T00:00:00.000Z",
    owner_token: "abandoned-owner",
  });
  let secondRan = false;
  try {
    assert.throws(
      () => commitViewerDeployment({
        stageDir: firstStage,
        outDir,
        forceStaleLock: true,
        staleLockMs: 0,
        onPhase: (phase: string) => {
          if (phase !== "stale_lock_validated" || secondRan) return;
          secondRan = true;
          commitViewerDeployment({
            stageDir: secondStage,
            outDir,
            forceStaleLock: true,
            staleLockMs: 0,
          });
        },
      }),
      (error) => errorCode(error) === "VIEWER_DEPLOYMENT_LOCKED",
    );
    assert.equal(secondRan, true);
    assert.equal(jsonObject(readFileSync(path.join(currentDeploymentDir(outDir), "active.json"), "utf8")).snapshot_id, "second-racer");
    assert.equal(existsSync(firstStage), true);
  } finally {
    rmSync(parent, { recursive: true, force: true });
  }
});

test("deployment release never removes a replacement owner's lease", () => {
  const parent = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-release-race-"));
  const outDir = path.join(parent, "dist");
  const lockPath = path.join(parent, ".dist-deployment.lock.json");
  const displacedPath = path.join(parent, ".dist-deployment.lock.displaced");
  const stage = createDeploymentStage(parent, ".dist-build-release-race", "release-race");
  let substituted = false;
  try {
    assert.throws(
      () => commitViewerDeployment({
        stageDir: stage,
        outDir,
        onPhase: (phase: string) => {
          if (phase !== "deployment_lock_release_checked" || substituted) return;
          substituted = true;
          renameSync(lockPath, displacedPath);
          installDeploymentLock(lockPath, {
            schema_version: 1,
            kind: "viewer-deployment-lock",
            pid: process.pid,
            created_at: new Date().toISOString(),
            owner_token: "replacement-owner",
          });
        },
      }),
      (error) => errorCode(error) === "VIEWER_DEPLOYMENT_LOCK_OWNERSHIP_LOST",
    );
    assert.equal(substituted, true);
    assert.equal(readDeploymentLock(lockPath).owner_token, "replacement-owner");
  } finally {
    rmSync(parent, { recursive: true, force: true });
  }
});

test("serveViewer never recovers a deployment journal owned by a live publisher", async () => {
  const parent = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-serve-live-publisher-"));
  const outDir = path.join(parent, "dist");
  const lockPath = path.join(parent, ".dist-deployment.lock.json");
  const seed = createDeploymentStage(parent, ".dist-build-seed", "seed");
  const pending = createDeploymentStage(parent, ".dist-build-pending", "pending");
  const child = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], { stdio: "ignore" });
  let unexpectedServer;
  try {
    commitViewerDeployment({ stageDir: seed, outDir });
    assert.throws(
      () => commitViewerDeployment({ stageDir: pending, outDir, failurePhase: "generation_prepared" }),
      (error) => errorCode(error) === "VIEWER_DEPLOYMENT_INTERRUPTED",
    );
    installDeploymentLock(lockPath, {
      schema_version: 1,
      kind: "viewer-deployment-lock",
      pid: child.pid,
      created_at: new Date().toISOString(),
      owner_token: "live-publisher",
    });
    let serveError;
    try {
      unexpectedServer = serveViewer({ root: outDir, port: 0 });
    } catch (error) {
      serveError = error;
    }
    await closeTestServer(unexpectedServer);
    unexpectedServer = null;
    assert.equal(errorCode(serveError), "VIEWER_DEPLOYMENT_LOCKED");
  } finally {
    await closeTestServer(unexpectedServer);
    if (child.exitCode === null) {
      child.kill("SIGTERM");
      await new Promise((resolve) => child.once("exit", resolve));
    }
    rmSync(parent, { recursive: true, force: true });
  }
});

test("a legacy physical deployment stays live while it migrates to generation routing", async () => {
  const sourceRoot = createViewerFixture();
  const parent = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-legacy-migration-"));
  const seedDeployment = path.join(parent, "seed");
  const outDir = path.join(parent, "dist");
  let server: Server | undefined;
  try {
    buildViewer({
      root: sourceRoot,
      outDir: seedDeployment,
      acceptedIntegrationHead: acceptedIntegrationHead({ snapshotId: "legacy-visible" }),
      sourceVerifier: () => true,
    });
    cpSync(currentDeploymentDir(seedDeployment), outDir, { recursive: true });
    server = serveViewer({ root: outDir, port: 0 });
    if (!server.listening) await new Promise<void>((resolve) => server!.once("listening", resolve));
    const baseUrl = `http://127.0.0.1:${serverPort(server)}`;
    assert.equal((await fetch(`${baseUrl}/active.json`).then((response) => response.json())).snapshot_id, "legacy-visible");

    assert.throws(
      () => buildViewer({
        root: sourceRoot,
        outDir,
        acceptedIntegrationHead: acceptedIntegrationHead({ snapshotId: "generation-visible" }),
        sourceVerifier: () => true,
        deploymentFailurePhase: "pointer_prepared",
      }),
      (error) => errorCode(error) === "VIEWER_DEPLOYMENT_INTERRUPTED",
    );
    assert.equal((await fetch(`${baseUrl}/active.json`).then((response) => response.json())).snapshot_id, "legacy-visible");
    recoverViewerDeployment({ outDir });
    assert.equal((await fetch(`${baseUrl}/active.json`).then((response) => response.json())).snapshot_id, "generation-visible");
    assert.equal(existsSync(path.join(outDir, "active.json")), false, "legacy physical files are retired only after pointer commit");
  } finally {
    if (server?.listening) await new Promise<void>((resolve,reject) => server!.close(error=>error?reject(error):resolve()));
    rmSync(sourceRoot, { recursive: true, force: true });
    rmSync(parent, { recursive: true, force: true });
  }
});

test("artifact mirror validates every retained history UI bundle before replacement", () => {
  const root = createViewerFixture();
  const artifactStore = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-mirror-validation-"));
  const parent = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-mirror-target-"));
  const outDir = path.join(parent, "dist");
  try {
    const first = publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 1 }),
      bootstrap: true,
    });
    const firstManifest = first.store.readManifest(first.manifestRef);
    const oldUi = first.store.readObject(firstManifest.capture.ui_bundle_ref);
    const customUi = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-old-ui-"));
    const priorUiDirectory=path.join(artifactStore,textField(recordField(oldUi,"entry"),"asset_url"));
    cpSync(priorUiDirectory, customUi, { recursive: true });
    writeFileSync(path.join(customUi, "app.js"), `${readFileSync(path.join(customUi, "app.js"), "utf8")}\n// retained-v2-ui\n`);
    const customDigest = hashFixtureUiBundle(customUi);
    const customUrl = `ui/${customDigest}/`;
    mkdirSync(path.join(artifactStore, "ui"), { recursive: true });
    cpSync(customUi, path.join(artifactStore, "ui", customDigest), { recursive: true });
    publishViewerSnapshot({
      ...snapshotPublishOptions({ root, artifactStore, sequence: 2 }),
      uiBundleRef: `sha256:${customDigest}`,
      uiBundleUrl: customUrl,
    });
    rmSync(customUi, { recursive: true, force: true });
    mirrorViewerArtifactStore({ artifactStore, outDir, sourceVerifier: () => true });
    const priorActive = readFileSync(path.join(currentDeploymentDir(outDir), "active.json"));
    const validHistory = readFileSync(path.join(artifactStore, "history-head.json"));
    writeFileSync(path.join(artifactStore, "history-head.json"), "{}\n");
    assert.throws(
      () => mirrorViewerArtifactStore({ artifactStore, outDir, sourceVerifier: () => true }),
      /schema validation failed|history/iu,
    );
    assert.deepEqual(readFileSync(path.join(currentDeploymentDir(outDir), "active.json")), priorActive);
    writeFileSync(path.join(artifactStore, "history-head.json"), validHistory);

    const oldUiDirectory = path.join(artifactStore, textField(recordField(oldUi,"entry"),"asset_url"));
    const oldUiBackup = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-old-ui-backup-"));
    cpSync(oldUiDirectory, oldUiBackup, { recursive: true });
    rmSync(oldUiDirectory, { recursive: true, force: true });
    assert.throws(
      () => mirrorViewerArtifactStore({ artifactStore, outDir, sourceVerifier: () => true }),
      (error) => errorCode(error) === "VIEWER_UI_BUNDLE_MISSING",
    );
    assert.deepEqual(readFileSync(path.join(currentDeploymentDir(outDir), "active.json")), priorActive);
    cpSync(oldUiBackup, oldUiDirectory, { recursive: true });
    rmSync(oldUiBackup, { recursive: true, force: true });
    writeFileSync(path.join(oldUiDirectory, "app.js"), "substituted historical UI\n");
    assert.throws(
      () => mirrorViewerArtifactStore({ artifactStore, outDir, sourceVerifier: () => true }),
      (error) => errorCode(error) === "VIEWER_UI_BUNDLE_MISSING",
    );
    assert.deepEqual(readFileSync(path.join(currentDeploymentDir(outDir), "active.json")), priorActive);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(artifactStore, { recursive: true, force: true });
    rmSync(parent, { recursive: true, force: true });
  }
});

test("serveViewer refuses to serve a symlink that escapes the build root", async () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-serve-root-"));
  const root = path.join(parentDir, "viewer");
  let server: Server | undefined;
  try {
    mkdirSync(root);
    writeFileSync(path.join(root, "index.html"), "viewer\n");
    writeFileSync(path.join(parentDir, "secret.txt"), "must not be served\n");
    symlinkSync(path.join(parentDir, "secret.txt"), path.join(root, "leak.txt"));

    server = serveViewer({ root, port: 0 });
    if (!server.listening) {
      await new Promise<void>((resolve) => server!.once("listening", resolve));
    }
    const response = await fetch(`http://127.0.0.1:${serverPort(server)}/leak.txt`);

    assert.equal(response.status, 403);
    assert.equal(await response.text(), "Forbidden");
  } finally {
    if (server?.listening) {
      await new Promise<void>((resolve,reject) => server!.close(error=>error?reject(error):resolve()));
    }
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("serveViewer sends revalidation headers for mutable pointers and immutable headers for hashes and UI bundles", async () => {
  const sourceRoot = createViewerFixture();
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-cache-headers-"));
  let server: Server | undefined;
  try {
    buildViewer({
      root: sourceRoot,
      outDir: root,
      acceptedIntegrationHead: acceptedIntegrationHead(),
      sourceVerifier: () => true,
    });
    const deployed = currentDeploymentDir(root);
    const active = jsonObject(readFileSync(path.join(deployed, "active.json"), "utf8"));
    const manifest = jsonObject(readFileSync(path.join(deployed, "manifests", `${textField(active,"manifest_ref").slice(7)}.json`), "utf8"));
    const uiObject = jsonObject(readFileSync(path.join(deployed, "objects", `${textField(active,"ui_bundle_ref").slice(7)}.json`), "utf8"));
    server = serveViewer({ root, port: 0 });
    if (!server.listening) await new Promise<void>((resolve) => server!.once("listening", resolve));
    const baseUrl = `http://127.0.0.1:${serverPort(server)}`;

    for (const mutablePath of ["/active.json", "/history-head.json", `/provenance/${active.snapshot_id}.json`]) {
      if (mutablePath.startsWith("/provenance/")) {
        mkdirSync(path.join(deployed, "provenance"));
        writeFileSync(path.join(deployed, mutablePath), '{"landing_state":"unknown"}\n');
      }
      const response = await fetch(`${baseUrl}${mutablePath}`);
      assert.equal(response.headers.get("cache-control"), "no-cache");
    }
    for (const immutablePath of [
      `/manifests/${textField(active,"manifest_ref").slice(7)}.json`,
      `/objects/${textField(recordField(manifest,"refs"),"catalog_root").slice(7)}.json`,
      `/${active.snapshot_url}`,
      `/${textField(recordField(uiObject,"entry"),"asset_url")}app.js`,
    ]) {
      const response = await fetch(`${baseUrl}${immutablePath}`);
      assert.equal(response.status, 200);
      assert.equal(response.headers.get("cache-control"), "public, max-age=31536000, immutable");
    }
    mkdirSync(path.join(deployed, "locks"), { recursive: true });
    writeFileSync(path.join(deployed, "locks", "publisher.lock"), "internal\n");
    assert.equal((await fetch(`${baseUrl}/locks/publisher.lock`)).status, 404);
  } finally {
    if (server?.listening) await new Promise<void>((resolve,reject) => server!.close(error=>error?reject(error):resolve()));
    rmSync(sourceRoot, { recursive: true, force: true });
    rmSync(root, { recursive: true, force: true });
  }
});

test("serveViewer rejects noncanonical, encoded-separator, traversal, NUL, backslash, and symlink-alias paths", async () => {
  const sourceRoot = createViewerFixture();
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-path-security-"));
  let server: Server | undefined;
  try {
    buildViewer({ root: sourceRoot, outDir: root, acceptedIntegrationHead: acceptedIntegrationHead(), sourceVerifier: () => true });
    const deployed = currentDeploymentDir(root);
    mkdirSync(path.join(deployed, "objects"), { recursive: true });
    symlinkSync("../active.json", path.join(deployed, "objects", `${"a".repeat(64)}.json`));
    server = serveViewer({ root, port: 0 });
    if (!server.listening) await new Promise<void>((resolve) => server!.once("listening", resolve));
    const port = serverPort(server);
    for (const requestPath of [
      "/%2e%2e%2fpackage.json",
      "/objects%2factive.json",
      "/objects%5cactive.json",
      "/active.json%00",
      "/objects/../active.json",
      "/%61ctive.json",
      "//active.json",
      "/active\\.json",
    ]) {
      const response = await rawHttpGet({ port, path: requestPath });
      assert.notEqual(response.status, 200, `unsafe alias was served: ${requestPath}`);
      assert.notEqual(response.headers["cache-control"], "public, max-age=31536000, immutable");
    }
    const activeAlias = await rawHttpGet({ port, path: `/objects/${"a".repeat(64)}.json` });
    assert.notEqual(activeAlias.status, 200);
    assert.notEqual(activeAlias.headers["cache-control"], "public, max-age=31536000, immutable");
  } finally {
    if (server?.listening) await new Promise<void>((resolve,reject) => server!.close(error=>error?reject(error):resolve()));
    rmSync(sourceRoot, { recursive: true, force: true });
    rmSync(root, { recursive: true, force: true });
  }
});

test("serveViewer recovers a prepared generation without an absent-root window", async () => {
  const sourceRoot = createViewerFixture();
  const parent = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-serve-recovery-"));
  const root = path.join(parent, "dist");
  let server: Server | undefined;
  try {
    buildViewer({ root: sourceRoot, outDir: root, acceptedIntegrationHead: acceptedIntegrationHead(), sourceVerifier: () => true });
    assert.throws(
      () => buildViewer({
        root: sourceRoot,
        outDir: root,
        acceptedIntegrationHead: acceptedIntegrationHead({ snapshotId: "replacement-for-server" }),
        sourceVerifier: () => true,
        deploymentFailurePhase: "generation_installed",
      }),
      (error) => errorCode(error) === "VIEWER_DEPLOYMENT_INTERRUPTED",
    );
    assert.equal(existsSync(root), true);
    server = serveViewer({ root, port: 0 });
    if (!server.listening) await new Promise<void>((resolve) => server!.once("listening", resolve));
    const response = await fetch(`http://127.0.0.1:${serverPort(server)}/active.json`);
    assert.equal(response.status, 200);
    assert.equal(jsonObject(await response.text()).kind, "viewer-active");
  } finally {
    if (server?.listening) await new Promise<void>((resolve,reject) => server!.close(error=>error?reject(error):resolve()));
    rmSync(sourceRoot, { recursive: true, force: true });
    rmSync(parent, { recursive: true, force: true });
  }
});

test("viewer scripts can run from paths containing spaces and non-ASCII characters", async () => {
  const tempRoot = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-cli-"));
  const fixtureRoot = path.join(tempRoot, "工作 空间");
  const fixtureViewerRoot = path.join(fixtureRoot, "packages", "pcr-viewer");
  const fixtureCoreRoot = path.join(fixtureRoot, "packages", "pcr-core");
  const outDir = path.join(tempRoot, "构建 输出");
  try {
    mkdirSync(fixtureViewerRoot, { recursive: true });
    mkdirSync(fixtureCoreRoot, { recursive: true });
    cpSync(path.join(repoRoot, "packages", "pcr-viewer", "scripts"), path.join(fixtureViewerRoot, "scripts"), {
      recursive: true,
    });
    cpSync(path.join(repoRoot, "packages", "pcr-viewer", "static"), path.join(fixtureViewerRoot, "static"), {
      recursive: true,
    });
    cpSync(path.join(repoRoot, "packages", "pcr-viewer", "schemas"), path.join(fixtureViewerRoot, "schemas"), {
      recursive: true,
    });
    cpSync(path.join(repoRoot, "packages", "pcr-core", "src"), path.join(fixtureCoreRoot, "src"), {
      recursive: true,
    });
    cpSync(
      path.join(repoRoot, "packages", "pcr-core", "schemas"),
      path.join(fixtureCoreRoot, "schemas"),
      { recursive: true },
    );
    symlinkSync(
      path.join(repoRoot, "node_modules"),
      path.join(fixtureRoot, "node_modules"),
      process.platform === "win32" ? "junction" : "dir",
    );
    assert.ok(existsSync(path.join(fixtureRoot,"node_modules/typescript/bin/tsc")),"pinned worker fixture must carry the browser compiler closure");
    copyFixturePcr({ root: fixtureRoot, relativePath: wheatPcrPath });
    const coverageIndex = writeFixtureCoverageIndex({
      root: fixtureRoot,
      system: "cpc",
      version: "3.0",
      mappedPcrIds: [wheatPcrId],
    });
    writeFixtureCatalog({ root: fixtureRoot, coverageIndexes: [coverageIndex] });
    writeFixtureMaterialIndex({
      root: fixtureRoot,
      pcrs: [{
        id: wheatPcrId,
        path: wheatPcrPath,
        title: { "en-US": "Wheat seed for sowing", "zh-CN": "小麦播种种子" },
        status: "candidate",
        content_maturity: "authored_methodology",
      }],
    });
    for (const relativePath of [
      "package.json",
      "package-lock.json",
      "tsconfig.json",
      "tsconfig.viewer-browser.json",
      "builder/vocab",
      "builder/schemas/pcr-material-index.schema.json",
    ]) {
      const target = path.join(fixtureRoot, relativePath);
      mkdirSync(path.dirname(target), { recursive: true });
      cpSync(path.join(repoRoot, relativePath), target, { recursive: true });
    }
    execFileSync("git", ["init", "-b", "main", fixtureRoot], { stdio: "ignore" });
    execFileSync("git", ["-C", fixtureRoot, "config", "user.email", "viewer-test@example.invalid"]);
    execFileSync("git", ["-C", fixtureRoot, "config", "user.name", "Viewer Test"]);
    execFileSync("git", ["-C", fixtureRoot, "add", "."]);
    execFileSync("git", ["-C", fixtureRoot, "commit", "-m", "viewer fixture"], { stdio: "ignore" });
    const fixtureCommit = gitFixtureOutput(fixtureRoot, ["rev-parse", "HEAD"]);
    const fixtureTree = gitFixtureOutput(fixtureRoot, ["rev-parse", "HEAD^{tree}"]);

    const buildOutput = execFileSync(process.execPath, [
      path.join(fixtureViewerRoot, "scripts", "build-viewer-data.ts"),
      "--root",
      fixtureRoot,
      "--out-dir",
      outDir,
      "--scope",
      "material",
      "--snapshot-id", "viewer-unicode-fixture",
      "--goal-id", "goal-unicode-fixture",
      "--harness-snapshot-id", "harness-unicode-fixture",
      "--sequence", "1",
      "--source-ref", "refs/heads/main",
      "--integration-commit", fixtureCommit,
      "--base-commit", fixtureCommit,
      "--tree-hash", fixtureTree,
      "--captured-at", "2026-09-05T00:00:00Z",
      "--validated-at", "2026-09-05T00:01:00Z",
      "--checks", "3",
    ], {
      cwd: fixtureRoot,
      encoding: "utf8",
    });

    assert.match(buildOutput, /Built PCR viewer snapshot for \d+ PCR records/);
    assert.match(buildOutput, /scope: material/u);

    const server = spawn(process.execPath, [
      path.join(fixtureViewerRoot, "scripts", "serve-viewer.ts"),
      "--root",
      outDir,
      "--port",
      "0",
    ], {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stderr = "";
    server.stderr.on("data", (chunk) => {
      stderr += chunk.toString("utf8");
    });

    try {
      const ready = await readUntil(server, server.stdout, /PCR viewer available at http:\/\/127\.0\.0\.1:\d+/u, {
        getStderr: () => stderr,
      });
      assert.match(ready, /PCR viewer available/);
      const port = ready.match(/http:\/\/127\.0\.0\.1:(\d+)/u)?.[1];
      assert.ok(port);
      const baseUrl = `http://127.0.0.1:${port}`;

      await assertResponse(baseUrl, "/", 200, /^text\/html/u);
      await assertResponse(baseUrl, "/active.json", 200, /^application\/json/u);
      await assertResponse(baseUrl, "/%2e%2e%2fpackage.json", 403);
      await assertResponse(baseUrl, "/%E0%A4%A", 400);
      await assertResponse(baseUrl, "/", 200, /^text\/html/u);
    } finally {
      server.kill("SIGTERM");
    }
  } finally {
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

function viewerCoverageSummary({ system = "cpc", version = "3.0" } = {}) {
  return {
    coordinate: { system, version },
    schema_version: 1,
    index_kind: "classification-pcr-coverage",
    classification_system: system.toUpperCase(),
    classification_version: version,
    source: {},
    summary: {
      total: 0,
      mapped: 0,
      unmapped: 0,
      candidate_suggestion: 0,
      manual_review: 0,
      unknown: 0,
    },
    index_path: `classifications/indexes/${system}-${version}-coverage.json`,
    entries_inlined: false,
  };
}

function copyFixturePcr({ root, relativePath }: {root:string;relativePath:string}) {
  const target = path.join(root, relativePath);
  mkdirSync(path.dirname(target), { recursive: true });
  cpSync(path.join(repoRoot, relativePath), target, { recursive: true });
}

function createViewerFixture({ includeScaffold = false, includeCoral = false } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-fixture-"));
  copyFixturePcr({ root, relativePath: wheatPcrPath });
  if (includeCoral) {
    copyFixturePcr({ root, relativePath: coralPcrPath });
  }
  if (includeScaffold) {
    copyFixturePcr({ root, relativePath: scaffoldPcrPath });
  }
  const coverageIndex = writeFixtureCoverageIndex({
    root,
    system: "cpc",
    version: "3.0",
    mappedPcrIds: includeCoral ? [wheatPcrId, coralPcrId] : [wheatPcrId],
  });
  writeFixtureCatalog({ root, coverageIndexes: [coverageIndex] });
  writeFixtureMaterialIndex({
    root,
    pcrs: [
      ...(includeCoral ? [{
        id: coralPcrId,
        path: coralPcrPath,
        title: {
          "en-US": "Washed and drained uncalcined mussel-shell fragments",
          "zh-CN": "经水洗沥水的未煅烧贻贝壳碎片",
        },
        status: "candidate",
        content_maturity: "authored_methodology",
      }] : []),
      {
        id: wheatPcrId,
        path: wheatPcrPath,
        title: { "en-US": "Wheat seed for sowing", "zh-CN": "小麦播种种子" },
        status: "candidate",
        content_maturity: "authored_methodology",
      },
    ],
  });
  return root;
}

function writeFixtureMaterialIndex({ root, pcrs }: {root:string;pcrs:FixturePcr[]}) {
  const lines = [
    "schema_version: 1",
    'index_kind: "tiangong-pcr-material-catalog"',
    "status: current",
    "summary:",
    `  total: ${pcrs.length}`,
    ...(pcrs.length === 0
      ? ["pcrs: []"]
      : [
          "pcrs:",
          ...pcrs.flatMap((pcr) => [
            `  - id: ${JSON.stringify(pcr.id)}`,
            `    path: ${JSON.stringify(pcr.path)}`,
            "    title:",
            `      en-US: ${JSON.stringify(pcr.title["en-US"])}`,
            `      zh-CN: ${JSON.stringify(pcr.title["zh-CN"])}`,
            `    status: ${JSON.stringify(pcr.status)}`,
            `    content_maturity: ${JSON.stringify(pcr.content_maturity)}`,
          ]),
        ]),
    "",
  ];
  writeFixtureFile({
    root,
    relativePath: "library/indexes/pcr-index.yaml",
    contents: lines.join("\n"),
  });
}

function snapshotPublishOptions({ root, artifactStore, sequence }: {root:string;artifactStore:string;sequence:number}) {
  return {
    root,
    artifactStore,
    snapshotId: `viewer-${sequence}`,
    goalId: "goal-viewer-test",
    harnessSnapshotId: `harness-${sequence}`,
    sequence,
    sourceRef: "refs/tiangong-viewer-sources/goal-viewer-test/harness-test",
    integrationCommit: String(sequence).repeat(40).slice(0, 40),
    baseCommit: "b".repeat(40),
    treeHash: "c".repeat(40),
    capturedAt: `2026-09-05T00:0${sequence}:00Z`,
    validatedAt: `2026-09-05T00:0${sequence}:30Z`,
    validationSummary: { status: "passed", checks: 3 },
    sourceVerifier: () => true,
  };
}

function acceptedIntegrationHead(overrides: UnknownRecord = {}) {
  return {
    snapshotId: "viewer-bootstrap-accepted",
    goalId: "goal-viewer-bootstrap",
    harnessSnapshotId: "harness-bootstrap-accepted",
    sequence: 1,
    sourceRef: "refs/tiangong-viewer-sources/goal-viewer-bootstrap/harness-bootstrap-accepted",
    integrationCommit: "a".repeat(40),
    baseCommit: "b".repeat(40),
    treeHash: "c".repeat(40),
    capturedAt: "2026-09-05T00:00:00Z",
    validatedAt: "2026-09-05T00:01:00Z",
    validationSummary: { status: "passed", checks: 3 },
    ...overrides,
  };
}

function gitFixtureOutput(root: string, args: readonly string[]) {
  return execFileSync("git", ["-C", root, ...args], { encoding: "utf8" }).trim();
}

function writeFixtureCatalog({ root, coverageIndexes, aliases = [] }: {root:string;coverageIndexes:string[];aliases?:PcrIdAlias[]}) {
  const aliasRegistry = [
    "schema_version: 1",
    "registry_kind: legacy-pcr-id-aliases",
    "status: current",
    ...(aliases.length === 0
      ? ["aliases: []"]
      : [
          "aliases:",
          ...aliases.flatMap((alias) => [
            `  - source_pcr_id: ${JSON.stringify(alias.source_pcr_id)}`,
            `    source_pcr_path: ${JSON.stringify(alias.source_pcr_path)}`,
            "    target:",
            `      kind: ${JSON.stringify(alias.target.kind)}`,
            ...(alias.target.kind === "classification_coverage"
              ? [
                  `      classification_system: ${JSON.stringify(alias.target.classification_system)}`,
                  `      classification_version: ${JSON.stringify(alias.target.classification_version)}`,
                  `      code: ${JSON.stringify(alias.target.code)}`,
                ]
              : [`      pcr_id: ${JSON.stringify(alias.target.pcr_id)}`]),
            `    reason: ${JSON.stringify(alias.reason)}`,
            `    decision_ref: ${JSON.stringify(alias.decision_ref)}`,
          ]),
        ]),
    "",
  ].join("\n");
  const aliasPath = path.join(root, "classifications/aliases/pcr-id-aliases.yaml");
  mkdirSync(path.dirname(aliasPath), { recursive: true });
  writeFileSync(aliasPath, aliasRegistry, "utf8");
  const aliasSha256 = `sha256:${createHash("sha256").update(aliasRegistry).digest("hex")}`;
  const catalogPath = path.join(root, "library/catalog.yaml");
  mkdirSync(path.dirname(catalogPath), { recursive: true });
  writeFileSync(
    catalogPath,
    [
      "schema_version: 1",
      "catalog_status: current",
      'pcr_index: "library/indexes/pcr-index.yaml"',
      "pcr_id_aliases:",
      '  path: "classifications/aliases/pcr-id-aliases.yaml"',
      '  hash_mode: "exact_bytes"',
      `  sha256: ${JSON.stringify(aliasSha256)}`,
      `  entry_count: ${aliases.length}`,
      "classification_mappings: []",
      "classification_coverage_indexes:",
      ...coverageIndexes.map((indexPath) => `  - ${JSON.stringify(indexPath)}`),
      "notes:",
      '  - "Viewer test fixture."',
      "",
    ].join("\n"),
  );
}

function writeFixtureCoverageIndex({
  root,
  system,
  version,
  mappedPcrIds = [],
  unmappedCount = 0,
  confidence = "fixture",
  labelPrefix = "Fixture leaf",
}: {root:string;system:string;version:string;mappedPcrIds?:string[];unmappedCount?:number;confidence?:string;labelPrefix?:string}) {
  const normalizedLeavesPath =
    `classifications/systems/${system}/${version}/normalized/leaves.json`;
  const mappingPath = `classifications/mappings/${system}-${version}-to-pcr.yaml`;
  const indexPath = `classifications/indexes/${system}-${version}-coverage.json`;
  const mappedEntries = mappedPcrIds.map((pcrId, index) =>
    fixtureCoverageEntry({ system, index, pcrId, confidence, labelPrefix }),
  );
  const unmappedEntries = Array.from({ length: unmappedCount }, (_, offset) =>
    fixtureCoverageEntry({
      system,
      index: mappedEntries.length + offset,
      pcrId: null,
      confidence,
      labelPrefix,
    }),
  );
  const entries = [...mappedEntries, ...unmappedEntries];
  const normalizedLeavesText = `${JSON.stringify(
    {
      schema_version: 1,
      classification_system: system.toUpperCase(),
      classification_version: version,
      leaves: entries.map((entry) => ({
        code: entry.code,
        title: entry.label,
        path_codes: entry.path_codes,
        path_titles: entry.path_titles,
      })),
    },
    null,
    2,
  )}\n`;
  const mappingText = [
    "schema_version: 2",
    `classification_system: ${JSON.stringify(system.toUpperCase())}`,
    `classification_version: ${JSON.stringify(version)}`,
    "status: current",
    ...(mappedEntries.length === 0
      ? ["mappings: []"]
      : [
          "mappings:",
          ...mappedEntries.flatMap((entry) => [
            `  - code: ${JSON.stringify(entry.code)}`,
            `    label: ${JSON.stringify(entry.label)}`,
            `    pcr_id: ${JSON.stringify(entry.mapping!.pcr_id)}`,
            `    mapping_type: ${entry.mapping!.mapping_type}`,
            `    confidence: ${recordField(entry,"mapping").confidence}`,
            "    acceptance:",
            `      status: ${entry.mapping!.acceptance.status}`,
            `      decided_by: ${entry.mapping!.acceptance.decided_by}`,
            `      decided_at_utc: ${JSON.stringify(entry.mapping!.acceptance.decided_at_utc)}`,
            `      decision_ref: ${recordField(recordField(entry,"mapping"),"acceptance").decision_ref}`,
          ]),
        ]),
    "",
  ].join("\n");
  writeFixtureFile({ root, relativePath: normalizedLeavesPath, contents: normalizedLeavesText });
  writeFixtureFile({ root, relativePath: mappingPath, contents: mappingText });
  const document = {
    schema_version: 1,
    index_kind: "classification-pcr-coverage",
    classification_system: system.toUpperCase(),
    classification_version: version,
    source: {
      contract_version: "2",
      generator: "builder/scripts/build-catalog.mjs",
      generator_version: "2",
      normalized_leaves: {
        path: normalizedLeavesPath,
        hash_mode: "exact_bytes",
        sha256: sha256(normalizedLeavesText),
      },
      mapping: {
        path: mappingPath,
        hash_mode: "exact_bytes",
        sha256: sha256(mappingText),
      },
    },
    summary: {
      total: entries.length,
      mapped: mappedEntries.length,
      unmapped: unmappedEntries.length,
      candidate_suggestion: 0,
      manual_review: 0,
      unknown: 0,
    },
    entries,
  };
  writeFixtureFile({
    root,
    relativePath: indexPath,
    contents: `${JSON.stringify(document, null, 2)}\n`,
  });
  return indexPath;
}

function fixtureCoverageEntry({ system, index, pcrId, confidence = "fixture", labelPrefix = "Fixture leaf" }: {system:string;index:number;pcrId:string|null;confidence?:string;labelPrefix?:string}) {
  const code = `${system.toUpperCase()}-${String(index + 1).padStart(3, "0")}`;
  return {
    code,
    label: `${labelPrefix} ${index + 1}`,
    path_codes: [code],
    path_titles: [`${labelPrefix} ${index + 1}`],
    coverage_status: pcrId ? "mapped" : "unmapped",
    mapping: pcrId
      ? {
          pcr_id: pcrId,
          mapping_type: "exact",
          confidence,
          acceptance: {
            status: "accepted",
            decided_by: "viewer-test",
            decided_at_utc: "2026-07-14T00:00:00Z",
            decision_ref: "docs/adr/viewer-fixture.md",
          },
        }
      : null,
    legacy_reference: null,
  };
}

function writeFixtureFile({ root, relativePath, contents }: {root:string;relativePath:string;contents:string|Uint8Array}) {
  const filePath = path.join(root, ...relativePath.split("/"));
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, contents);
}

function sha256(contents: string | Uint8Array) {
  return `sha256:${createHash("sha256").update(contents).digest("hex")}`;
}

function currentDeploymentDir(root: string) {
  return path.resolve(root, readlinkSync(path.join(root, "current")));
}

function hashFixtureUiBundle(directory: string) {
  const visit = (current: string, prefix = ""):string[] => readdirSync(current, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) return visit(path.join(current, entry.name), relativePath);
    assert.equal(entry.isFile(), true, `unexpected UI fixture entry: ${relativePath}`);
    return [relativePath];
  });
  const hash = createHash("sha256");
  for (const relativePath of visit(directory).sort()) {
    hash.update(relativePath, "utf8");
    hash.update("\0");
    hash.update(readFileSync(path.join(directory, ...relativePath.split("/"))));
    hash.update("\0");
  }
  return hash.digest("hex");
}

function createDeploymentStage(parent: string, name: string, snapshotId: string) {
  const stage = path.join(parent, name);
  mkdirSync(stage);
  writeFileSync(path.join(stage, VIEWER_BUILD_MARKER), "Viewer deployment test stage.\n");
  writeFileSync(path.join(stage, "index.html"), `<h1>${snapshotId}</h1>\n`);
  writeFileSync(path.join(stage, "active.json"), `${JSON.stringify({ snapshot_id: snapshotId })}\n`);
  return stage;
}

function installDeploymentLock(lockPath: string, owner: unknown) {
  mkdirSync(lockPath);
  writeFileSync(path.join(lockPath, "owner.json"), `${JSON.stringify(owner)}\n`, { flag: "wx" });
}

function readDeploymentLock(lockPath: string) {
  return jsonObject(readFileSync(path.join(lockPath, "owner.json"), "utf8"));
}

function serverPort(server:Server|undefined):number {assert.ok(server);const address=server.address();assert.ok(address&&typeof address==="object");return address.port;}

function rawHttpGet({ port, path: requestPath }: {port:number;path:string}) {
  return new Promise<{status:number|undefined;headers:IncomingHttpHeaders;body:string}>((resolve, reject) => {
    const request = httpRequest({ host: "127.0.0.1", port, path: requestPath, method: "GET" }, (response) => {
      const chunks: Buffer[] = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => resolve({
        status: response.statusCode,
        headers: response.headers,
        body: Buffer.concat(chunks).toString("utf8"),
      }));
    });
    request.once("error", reject);
    request.end();
  });
}

async function closeTestServer(server: Server | null | undefined) {
  if (!server) return;
  if (!server.listening) await new Promise<void>((resolve) => server!.once("listening", resolve));
  await new Promise<void>((resolve,reject) => server!.close(error=>error?reject(error):resolve()));
}

async function assertResponse(baseUrl: string, route: string, status: number, contentTypePattern?: RegExp) {
  const response = await fetch(`${baseUrl}${route}`);
  assert.equal(response.status, status);
  if (contentTypePattern) {
    assert.match(response.headers.get("content-type") ?? "", contentTypePattern);
  }
}

function readUntil(child: ChildProcess, stream: Readable, pattern: RegExp, { getStderr = () => "", timeoutMs = 3000 }: {getStderr?:()=>string;timeoutMs?:number} = {}) {
  return new Promise<string>((resolve, reject) => {
    let text = "";
    let settled = false;
    const cleanup = () => {
      clearTimeout(timer);
      child.off("exit", onExit);
      stream.off("data", onData);
      stream.off("error", onError);
    };
    const fail = (error: Error) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error);
    };
    const timer = setTimeout(() => {
      fail(new Error(`Timed out waiting for ${pattern}.\nstdout:\n${text}\nstderr:\n${getStderr()}`));
    }, timeoutMs);
    const onExit = (code: number|null, signal: NodeJS.Signals|null) => {
      fail(
        new Error(
          `Server exited before ready (code ${code ?? "none"}, signal ${signal ?? "none"}).\nstdout:\n${text}\nstderr:\n${getStderr()}`,
        ),
      );
    };
    const onData = (chunk: Buffer) => {
      text += chunk.toString("utf8");
      if (pattern.test(text)) {
        settled = true;
        cleanup();
        resolve(text);
      }
    };
    const onError = (error: Error) => {
      fail(new Error(`Error reading server output: ${errorMessage(error)}.\nstdout:\n${text}\nstderr:\n${getStderr()}`));
    };
    child.once("exit", onExit);
    stream.on("data", onData);
    stream.on("error", onError);
  });
}


test("missing pinned browser compiler fails before publishing raw Viewer sources", () => {
 const root=mkdtempSync(path.join(tmpdir(),"pcr-viewer-no-compiler-"));const outputRoot=path.join(root,"output");
 try {writeFileSync(path.join(root,"package.json"),JSON.stringify({devDependencies:{typescript:"7.0.2"}}));
  assert.throws(()=>compileViewerBrowserAssets({root,outputRoot}),{code:"BROWSER_COMPILER_UNAVAILABLE"});assert.equal(existsSync(outputRoot),false);
 }finally{rmSync(root,{recursive:true,force:true});}
});
