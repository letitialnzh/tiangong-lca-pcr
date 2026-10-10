import test, { type TestContext } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createHash, type BinaryLike } from "node:crypto";
import { gunzipSync, gzipSync } from "node:zlib";
import { fileURLToPath, pathToFileURL } from "node:url";
import { readProductIdentity, type ProductIdentity } from "./product-identity.ts";
import { writeProductWebArchive, validateProductManifest } from "./product-release.ts";
import { createWebProbes } from "./product-web.ts";
import { publishOutput, selectScratchWorkspace, type ScratchOptions, type FilesystemFacts } from "../../packages/pcr-docs/scripts/build-storage.ts";
import { downloadProductFile, materializeProductWeb } from "./product-web-materialize.ts";

import type { ProductPackageReceipt, PackageKind, ProductManifest } from "./release-types.ts";
import { record, field } from "./release-types.ts";
function present<T>(value: T | undefined | null): T { assert.ok(value !== undefined && value !== null); return value; }
type Fixture = Awaited<ReturnType<typeof fixture>>;
const releasePath = "/tiangong-lca/pcr/releases/download/v0.3.0/";
const manifestUrl = `https://github.com${releasePath}release.json`;
const sha256 = (bytes: BinaryLike) => createHash("sha256").update(bytes).digest("hex");
const silent = () => {};
function write(file: string, value: string | Uint8Array): void { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, value); }
const writeJson = (file: string, value: unknown) => write(file, JSON.stringify(value));
const git = (root: string, ...args: string[]) => execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();

async function fixture(t: TestContext, mutateWeb: (context: { webDir: string; identity: ProductIdentity }) => void = () => {},
  { producerNode = process.versions.node, producerNpm = "11.17.0" }: { producerNode?: string; producerNpm?: string } = {}) {
  const owned = fs.mkdtempSync(path.join(fs.realpathSync(os.tmpdir()), "pcr-materializer-test-"));
  t.after(() => fs.rmSync(owned, { recursive: true, force: true }));
  const root = path.join(owned, "source"); fs.mkdirSync(root);
  git(root, "init", "--quiet");
  write(path.join(root, ".gitignore"), ".edgeone/\npackages/pcr-docs/out/\npackages/pcr-docs/out.stage-*/\npackages/pcr-docs/out.prev-*/\n");
  const config = { schema: 1, version: "0.3.0", node: producerNode, npm: producerNpm,
    web: { origin: "https://pcr.tiangong.earth", site: "global" } };
  writeJson(path.join(root, "product-release.json"), config);
  for (const [relative, name] of [
    ["packages/tiangong-pcr-cli/package.json", "@tiangong-lca/pcr"],
    ["packages/tiangong-pcr-library/package.json", "@tiangong-lca/pcr-library"],
    ["packages/pcr-docs/package.json", "@tiangong-lca/pcr-docs"],
  ] as const) writeJson(path.join(root, relative), { name, private: true, version: config.version });
  write(path.join(root, "library/catalog.yaml"), "schema_version: 1\n");
  write(path.join(root, "classifications/example.txt"), "Source evidence remains unchanged.\n");
  git(root, "add", "-A");
  git(root, "-c", "user.name=Fixture", "-c", "user.email=fixture@example.invalid", "commit", "--quiet", "-m", "fixture");
  const identity = readProductIdentity(root);
  write(path.join(root, "packages/pcr-docs/out/index.html"), "PREVIOUS-GOOD");
  const webDir = path.join(owned, "web");
  write(path.join(webDir, "index.html"), "<h1>Sealed web</h1>");
  write(path.join(webDir, "zh/index.html"), "<h1>中文首页</h1>");
  write(path.join(webDir, "en/index.html"), "<h1>English home</h1>");
  write(path.join(webDir, "en/docs/pcr/index.txt"), "Supported native navigation payload");
  write(path.join(webDir, "en/docs/pcr/index.html"), "<h1>English PCR library</h1>");
  write(path.join(webDir, "zh/docs/pcr/index.html"), "<h1>中文 PCR 库</h1>");
  writeJson(path.join(webDir, "generated/raw/classifications/indexes/cpc-3.0-coverage.json"), { count: 1 });
  writeJson(path.join(webDir, "generated/product-release.json"), identity);
  writeJson(path.join(webDir, "generated/version.json"), { sourceCommit: identity.sourceCommit,
    releaseVersion: identity.version, releaseTag: identity.tag, sourceFingerprint: identity.sourceFingerprint,
    counts: { pcrs: 1, pages: 2, languages: 2, sourceBytes: 50 } });
  writeJson(path.join(webDir, "edgeone.json"), { headers: [], redirects: [] });
  const probes = createWebProbes({ webDir });
  mutateWeb({ webDir, identity });
  const filename = "pcr-web-0.3.0.tar.gz", archiveFile = path.join(owned, filename);
  const tree = await writeProductWebArchive(webDir, archiveFile);
  const archive = fs.readFileSync(archiveFile);
  const web = { filename, bytes: archive.length, sha256: sha256(archive), ...tree, origin: config.web.origin, probes };
  const packages: Partial<Record<PackageKind, ProductPackageReceipt>> = {};
  for (const [kind, name] of [["tool", "@tiangong-lca/pcr"], ["library", "@tiangong-lca/pcr-library"]] as const) {
    packages[kind] = { name, version: identity.version, tag: identity.tag, sourceCommit: identity.sourceCommit,
      filename: `${name}-${identity.version}.tgz`.replace(/^@/u, "").replaceAll("/", "-"),
      bytes: 1, sha256: "a".repeat(64), integrity: `sha512-${"A".repeat(86)}==` };
  }
  assert.ok(packages.tool && packages.library);
  const manifest = validateProductManifest({ schema: 1, kind: "pcr-product-release", identity,
    toolchain: { node: config.node, npm: config.npm }, packages, web,
    artifacts: [packages.tool, packages.library,
      { filename: "library.sqlite", bytes: 1, sha256: "b".repeat(64) },
      { filename: "library.sqlite.json", bytes: 1, sha256: "c".repeat(64) }, web]
      .map(({ filename, bytes, sha256 }) => ({ filename, bytes, sha256 })) });
  const scratchBase = path.join(owned, "scratch"); fs.mkdirSync(scratchBase);
  const calls: { url: string; options: RequestInit }[] = [], scratchRoots: string[] = [];
  const fetchImpl = async (url: string, options: RequestInit) => {
    calls.push({ url, options });
    if (url === manifestUrl) return new Response(JSON.stringify(manifest));
    if (url === `https://github.com${releasePath}${filename}`) return new Response(archive);
    throw new Error("Unexpected test URL");
  };
  const facts = (target: string): FilesystemFacts => ({ path: target, device: "disk", mountPoint: "/", fileSystemType: "ext4",
    availableBytes: 20 * 1024 ** 3, totalBytes: 30 * 1024 ** 3 });
  const selectScratch = ({ requiredBytes, constraint }: ScratchOptions) => {
    assert.ok(requiredBytes > manifest.web.bytes + manifest.web.uncompressedBytes);
    assert.equal(constraint.fileSystemType, "ext4");
    const scratchRoot = fs.mkdtempSync(path.join(scratchBase, "pcr-build-")); scratchRoots.push(scratchRoot);
    return { scratchBase, scratchRoot };
  };
  return { root, owned, webDir, manifest, identity, archive, calls, scratchRoots, scratchBase,
    options: { root, fetchImpl, facts, selectScratch, env: { PCR_EDGEONE_PREBUILT_ASSETS: "1" }, log: silent } };
}

function previousIsIntact(f: Fixture): void {
  assert.equal(fs.readFileSync(path.join(f.root, "packages/pcr-docs/out/index.html"), "utf8"), "PREVIOUS-GOOD");
  assert.equal(fs.existsSync(path.join(f.root, ".edgeone/assets")), false);
  assert.deepEqual(fs.readdirSync(f.scratchBase), []);
}

/** Exercise the shared selector itself; only OS filesystem reports are injected. */
function wiredScratchOptions(f: Fixture, { memoryBacked = false, force = false }: { memoryBacked?: boolean; force?: boolean } = {}) {
  const root = fs.realpathSync(f.root), selected: ReturnType<typeof selectScratchWorkspace>[] = [], constraints: FilesystemFacts[] = [];
  let originReads = 0;
  const facts = (target: string): FilesystemFacts => {
    const resolved = fs.realpathSync(target), origin = resolved === root;
    if (origin) originReads++;
    return { path: resolved, device: origin && memoryBacked ? "origin-memory" : "disk", mountPoint: origin && memoryBacked ? "/dev/shm" : "/",
      fileSystemType: origin && memoryBacked ? "tmpfs" : "ext4", availableBytes: 20 * 1024 ** 3, totalBytes: 30 * 1024 ** 3 };
  };
  const selectScratch = (options: ScratchOptions) => {
    constraints.push(options.constraint);
    const selection = selectScratchWorkspace({ ...options, scratchParent: f.scratchBase });
    selected.push(selection); return selection;
  };
  return { options: { ...f.options, facts, selectScratch, env: force ? { PCR_BUILD_RELOCATE: "1" } : {} }, selected, constraints, originReads: () => originReads };
}

for (const [name, memoryBacked, force, handoff] of [
  ["native tmpfs", true, false, true],
  ["forced tmpfs", true, true, true],
  ["forced ordinary disk", false, true, false],
] as const) test(`real scratch selector imports ${name} and preserves its actual provider handoff`, async t => {
  const f = await fixture(t), wired = wiredScratchOptions(f, { memoryBacked, force });
  const result = await materializeProductWeb(wired.options);
  assert.equal(wired.originReads(), 1, "one origin measurement is reused consistently");
  assert.equal(wired.constraints.length, 1);
  assert.equal(present(wired.constraints[0]).fileSystemType, memoryBacked ? "tmpfs" : "ext4");
  assert.equal(wired.selected.length, 1);
  assert.equal(present(wired.selected[0]).scratchFacts.fileSystemType, "ext4");
  assert.equal(fs.readFileSync(path.join(f.root, "packages/pcr-docs/out/index.html"), "utf8"), "<h1>Sealed web</h1>");
  assert.deepEqual(result.identity, f.identity);
  assert.deepEqual(readProductIdentity(f.root), f.identity);
  if (handoff) {
    assert.equal(record(record(result.published).providerAssets).mode, "hardlink");
    assert.equal(fs.statSync(path.join(f.root, ".edgeone/assets/index.html")).ino,
      fs.statSync(path.join(f.root, "packages/pcr-docs/out/index.html")).ino);
  } else {
    assert.equal(record(result.published).providerAssets, undefined);
    assert.equal(fs.existsSync(path.join(f.root, ".edgeone/assets")), false);
  }
  assert.equal(fs.existsSync(present(wired.selected[0]).scratchRoot), false);
  assert.deepEqual(fs.readdirSync(f.scratchBase), []);
});

test("real tmpfs scratch selection still rejects a source change before swapping either output", async t => {
  const f = await fixture(t), wired = wiredScratchOptions(f, { memoryBacked: true });
  await assert.rejects(materializeProductWeb({ ...wired.options,
    publish(options) {
      assert.equal(options.providerRoot, fs.realpathSync(f.root));
      write(path.join(f.root, "library/catalog.yaml"), "schema_version: 1\n# changed source\n");
      git(f.root, "add", "library/catalog.yaml");
      git(f.root, "-c", "user.name=Fixture", "-c", "user.email=fixture@example.invalid", "commit", "--quiet", "-m", "changed source fixture");
      return publishOutput(options);
    },
  }), /identity changed/u);
  assert.equal(wired.selected.length, 1);
  assert.equal(fs.existsSync(present(wired.selected[0]).scratchRoot), false);
  previousIsIntact(f);
});

test("real tmpfs scratch selection retains the queued-deadline rollback and owned cleanup", async t => {
  const f = await fixture(t), wired = wiredScratchOptions(f, { memoryBacked: true, force: true }); let clock = 0;
  await assert.rejects(materializeProductWeb({ ...wired.options, timeoutMs: 1000, now: () => clock,
    publish(options) { assert.equal(options.providerRoot, fs.realpathSync(f.root)); clock = 1000; return publishOutput(options); },
  }), /timed out/u);
  assert.equal(wired.selected.length, 1);
  assert.equal(fs.existsSync(present(wired.selected[0]).scratchRoot), false);
  previousIsIntact(f);
});

test("historical two-catalog manifests retain exact sealed materialization", async t => {
  const f = await fixture(t);
  f.manifest.web.probes.routes.splice(2);
  const result = await materializeProductWeb(f.options);
  assert.deepEqual(result.identity, f.identity);
  assert.equal(fs.readFileSync(path.join(f.root, "packages/pcr-docs/out/zh/index.html"), "utf8"), "<h1>中文首页</h1>");
  assert.deepEqual(fs.readdirSync(f.scratchBase), []);
});

test("materialization imports the exact sealed web and atomically hands off provider hardlinks", async t => {
  const f = await fixture(t);
  const result = await materializeProductWeb(f.options);
  assert.deepEqual(result.identity, f.identity);
  assert.equal(record(result.published).bytes, f.manifest.web.uncompressedBytes);
  assert.equal(record(record(result.published).providerAssets).mode, "hardlink");
  const out = path.join(f.root, "packages/pcr-docs/out"), assets = path.join(f.root, ".edgeone/assets");
  assert.equal(fs.readFileSync(path.join(out, "index.html"), "utf8"), "<h1>Sealed web</h1>");
  assert.equal(fs.readFileSync(path.join(out, "en/docs/pcr/index.txt"), "utf8"), "Supported native navigation payload");
  assert.equal(fs.statSync(path.join(out, "index.html")).ino, fs.statSync(path.join(assets, "index.html")).ino);
  assert.deepEqual(fs.readdirSync(f.scratchBase), []);
  assert.deepEqual(readProductIdentity(f.root), f.identity, "derived handoffs leave the source clean");
  assert.equal(f.calls.length, 2);
  for (const call of f.calls) {
    assert.equal(call.options.credentials, "omit"); assert.equal(call.options.redirect, "manual");
    assert.equal(field(call.options.headers, "authorization"), undefined);
    assert.ok(call.url.startsWith(`https://github.com${releasePath}`));
  }
});

async function crossRuntimeFixture(t: TestContext) {
  const producerNode = "24.19.0", producerNpm = "12.2.0";
  const producerExec = process.env.PCR_TEST_PRODUCER_NODE_EXEC ?? process.execPath;
  let actualProducer: string;
  try { actualProducer = execFileSync(producerExec, ["--version"], { encoding: "utf8", timeout: 10_000 }).trim(); }
  catch (error) { throw new Error("Cross-runtime import requires an actual Node 24.19.0 producer; set PCR_TEST_PRODUCER_NODE_EXEC.", { cause: error }); }
  assert.equal(actualProducer, `v${producerNode}`, "Set PCR_TEST_PRODUCER_NODE_EXEC to the actual retained Node 24.19.0 binary.");
  const f = await fixture(t, () => {}, { producerNode, producerNpm });
  const draftFile = path.join(f.owned, "producer-draft.json"), manifestFile = path.join(f.owned, "producer-release.json"), archiveFile = path.join(f.owned, "producer-web.tar.gz");
  writeJson(draftFile, f.manifest);
  const helper = path.resolve("scripts/engineering/fixtures/provider-importer-producer.ts");
  const producerOutput = execFileSync(producerExec, [helper, f.root, f.webDir, archiveFile, draftFile, manifestFile],
    { encoding: "utf8", timeout: 30_000, maxBuffer: 2 * 1024 * 1024 });
  const receipt = record(JSON.parse(producerOutput) as unknown);
  assert.equal(receipt.actualNode, producerNode); assert.equal(receipt.declaredNode, producerNode);
  assert.deepEqual(receipt.identity, f.identity);
  const manifest = validateProductManifest(JSON.parse(fs.readFileSync(manifestFile, "utf8")) as unknown);
  const archive = fs.readFileSync(archiveFile), manifestBytes = fs.readFileSync(manifestFile);
  assert.equal(manifest.toolchain.node, producerNode); assert.equal(manifest.toolchain.npm, producerNpm);
  assert.equal(sha256(archive), manifest.web.sha256);
  assert.equal(receipt.archiveSha256, manifest.web.sha256); assert.equal(receipt.archiveBytes, manifest.web.bytes);
  assert.equal(receipt.treeSha256, manifest.web.treeSha256);
  t.diagnostic(`Actual producer Node ${String(receipt.actualNode)}; consumer Node ${process.versions.node}; sealed sha256 ${manifest.web.sha256}.`);
  const fetchImpl = async (url: string, options: RequestInit) => {
    f.calls.push({ url, options });
    if (url === manifestUrl) return new Response(JSON.stringify(manifest));
    if (url === `https://github.com${releasePath}${manifest.web.filename}`) return new Response(archive);
    throw new Error("Unexpected cross-runtime fixture URL");
  };
  return { f, manifest, archive, manifestBytes, archiveFile, manifestFile, receipt, fetchImpl };
}

test("Node 24.19 produced manifest and exact sealed bytes import unchanged on the provider runtime", async t => {
  const { f, manifest, archive, archiveFile, manifestFile, manifestBytes, fetchImpl } = await crossRuntimeFixture(t);
  const beforeSource = readProductIdentity(f.root);
  const run = await materializeProductWeb({ ...f.options, fetchImpl });
  assert.deepEqual(run.identity, manifest.identity); assert.deepEqual(readProductIdentity(f.root), beforeSource);
  assert.equal(run.web.treeSha256, manifest.web.treeSha256); assert.equal(run.web.bytes, manifest.web.bytes);
  const out = path.join(f.root, "packages/pcr-docs/out"), assets = path.join(f.root, ".edgeone/assets");
  for (const relative of fs.readdirSync(f.webDir, { recursive: true, withFileTypes: true }).filter(entry => entry.isFile())
    .map(entry => path.relative(f.webDir, path.join(entry.parentPath, entry.name)))) {
    assert.ok(fs.readFileSync(path.join(out, relative)).equals(fs.readFileSync(path.join(f.webDir, relative))), `changed sealed bytes: ${relative}`);
  }
  assert.equal(fs.statSync(path.join(out, "index.html")).ino, fs.statSync(path.join(assets, "index.html")).ino);
  assert.equal(record(record(run.published).providerAssets).mode, "hardlink");
  assert.deepEqual(fs.readdirSync(f.scratchBase), []);
  assert.ok(fs.readFileSync(archiveFile).equals(archive)); assert.ok(fs.readFileSync(manifestFile).equals(manifestBytes));
  assert.equal(f.calls.length, 2);
  for (const call of f.calls) { assert.equal(call.options.credentials, "omit"); assert.equal(call.options.redirect, "manual"); assert.equal(field(call.options.headers, "authorization"), undefined); }
});

test("cross-runtime import retains the producer-toolchain guard and final deadline rollback", async t => {
  const { f, manifest, archive, archiveFile, manifestFile, manifestBytes, fetchImpl } = await crossRuntimeFixture(t);
  manifest.toolchain.node = "24.18.0";
  await assert.rejects(materializeProductWeb({ ...f.options, fetchImpl }), /toolchain|Node\/npm/u);
  assert.equal(f.calls.length, 1, "A consumer runtime cannot replace declared producer identity to accept a mismatched manifest.");
  previousIsIntact(f);
  manifest.toolchain.node = "24.19.0"; f.calls.length = 0;
  let clock = 0;
  await assert.rejects(materializeProductWeb({ ...f.options, fetchImpl, timeoutMs: 1000, now: () => clock,
    publish(options) { clock = 1000; return publishOutput(options); },
  }), /timed out/u);
  assert.equal(f.calls.length, 2); previousIsIntact(f);
  assert.deepEqual(readProductIdentity(f.root), f.identity);
  assert.ok(fs.readFileSync(archiveFile).equals(archive)); assert.ok(fs.readFileSync(manifestFile).equals(manifestBytes));
});

for (const [label, mutate] of [
  ["source commit", (manifest: ProductManifest) => { manifest.identity.sourceCommit = "d".repeat(40); }],
  ["version", (manifest: ProductManifest) => { manifest.identity.version = "0.4.0"; manifest.identity.tag = "v0.4.0"; }],
  ["content fingerprint", (manifest: ProductManifest) => { manifest.identity.sourceFingerprint = `sha256:${"d".repeat(64)}`; }],
] as const) test(`a manifest with the wrong ${label} is rejected before artifact download`, async t => {
  const f = await fixture(t); mutate(f.manifest);
  await assert.rejects(materializeProductWeb(f.options), /identities differ/u);
  assert.equal(f.calls.length, 1); previousIsIntact(f);
});

test("a missing public release fails with its HTTP status and leaves the old export", async t => {
  const f = await fixture(t);
  await assert.rejects(materializeProductWeb({ ...f.options, fetchImpl: async () => new Response("not found", { status: 404 }) }), /HTTP 404/u);
  previousIsIntact(f);
});

test("streamed archive bytes cannot exceed the sealed length even without a content-length header", async t => {
  const f = await fixture(t);
  await assert.rejects(materializeProductWeb({ ...f.options,
    fetchImpl: async (url: string, options: RequestInit) => url === manifestUrl ? f.options.fetchImpl(url, options)
      : new Response(Buffer.concat([f.archive, Buffer.from("extra")])),
  }), /declared byte bound/u);
  previousIsIntact(f);
});

test("a changed archive is rejected by its streaming checksum", async t => {
  const f = await fixture(t), changed = Buffer.from(f.archive); changed[changed.length - 1] = present(changed[changed.length - 1]) ^ 1;
  await assert.rejects(materializeProductWeb({ ...f.options,
    fetchImpl: async (url: string, options: RequestInit) => url === manifestUrl ? f.options.fetchImpl(url, options) : new Response(changed),
  }), /checksum differs/u);
  previousIsIntact(f);
});

test("a hash-matching malformed archive still fails the core safe reader", async t => {
  const f = await fixture(t), changed = Buffer.alloc(f.archive.length, 1);
  f.manifest.web.sha256 = sha256(changed);
  present(f.manifest.artifacts.find(a => a.filename === f.manifest.web.filename)).sha256 = f.manifest.web.sha256;
  await assert.rejects(materializeProductWeb({ ...f.options,
    fetchImpl: async (url: string, options: RequestInit) => url === manifestUrl ? f.options.fetchImpl(url, options) : new Response(changed),
  }), /header|archive|gzip|compression|unknown|incorrect/u);
  previousIsIntact(f);
});

// Mutate one real writer-produced USTAR header and re-seal the transport proof. This is an
// adversarial fixture, not a second archive parser; production uses the shared safe reader.
function changeFirstHeader(f: Fixture, change: (header: Buffer) => void): Buffer {
  const tar = gunzipSync(f.archive); change(tar.subarray(0, 512));
  tar.fill(32, 148, 156);
  const checksum = tar.subarray(0, 512).reduce((sum, byte) => sum + byte, 0);
  tar.write(`${checksum.toString(8).padStart(6, "0")}\0 `, 148, 8, "ascii");
  const archive = gzipSync(tar);
  Object.assign(f.manifest.web, { bytes: archive.length, sha256: sha256(archive) });
  Object.assign(present(f.manifest.artifacts.find(a => a.filename === f.manifest.web.filename)), {
    bytes: archive.length, sha256: sha256(archive),
  });
  return archive;
}

test("a hash-matching archive cannot create a path outside owned scratch", async t => {
  const f = await fixture(t);
  const archive = changeFirstHeader(f, header => {
    header.fill(0, 0, 100); header.fill(0, 345, 500); header.write("../escape", 0, "ascii");
  });
  await assert.rejects(materializeProductWeb({ ...f.options,
    fetchImpl: async (url: string, options: RequestInit) => url === manifestUrl ? f.options.fetchImpl(url, options) : new Response(archive),
  }), /Unsafe archive path/u);
  previousIsIntact(f); assert.equal(fs.existsSync(path.join(f.scratchBase, "escape")), false);
});

test("a hash-matching archive cannot create symbolic links", async t => {
  const f = await fixture(t);
  const archive = changeFirstHeader(f, header => { header[156] = "2".charCodeAt(0); });
  await assert.rejects(materializeProductWeb({ ...f.options,
    fetchImpl: async (url: string, options: RequestInit) => url === manifestUrl ? f.options.fetchImpl(url, options) : new Response(archive),
  }), /nonregular entry/u);
  previousIsIntact(f);
});

test("an archive cannot declare a file above the actual provider per-file limit", async t => {
  const f = await fixture(t);
  const archive = changeFirstHeader(f, header => { header.write(`${(25_000_000).toString(8).padStart(11, "0")}\0`, 124, 12, "ascii"); });
  await assert.rejects(materializeProductWeb({ ...f.options,
    fetchImpl: async (url: string, options: RequestInit) => url === manifestUrl ? f.options.fetchImpl(url, options) : new Response(archive),
  }), /oversized file/u);
  previousIsIntact(f);
});

test("a sealed archive with a stale web identity marker cannot replace production output", async t => {
  const f = await fixture(t, ({ webDir, identity }) => {
    writeJson(path.join(webDir, "generated/product-release.json"), { ...identity, sourceCommit: "d".repeat(40) });
  });
  await assert.rejects(materializeProductWeb(f.options), /identities differ/u);
  previousIsIntact(f);
});

test("a source change before the final swap rolls back output and provider staging", async t => {
  const f = await fixture(t);
  await assert.rejects(materializeProductWeb({ ...f.options,
    publish(options) {
      return publishOutput({ ...options, beforeSwap() {
        fs.appendFileSync(path.join(f.root, "library/catalog.yaml"), "changed: true\n");
        present(options.beforeSwap)();
      } });
    },
  }), /clean source checkout/u);
  previousIsIntact(f);
  assert.deepEqual(fs.readdirSync(path.join(f.root, ".edgeone")), []);
});

test("publication errors preserve prior output and release the owned scratch", async t => {
  const f = await fixture(t);
  await assert.rejects(materializeProductWeb({ ...f.options, publish: () => { throw new Error("handoff refused"); } }), /handoff refused/u);
  previousIsIntact(f);
});

test("real scratch capacity checks refuse materialization before writing an archive", async t => {
  const f = await fixture(t);
  const facts = (target: string): FilesystemFacts => ({ path: target, device: "disk", mountPoint: "/", fileSystemType: "ext4",
    availableBytes: 1, totalBytes: 30 * 1024 ** 3 });
  await assert.rejects(materializeProductWeb({ ...f.options, facts,
    selectScratch: options => selectScratchWorkspace({ ...options, candidates: [f.scratchBase] }),
  }), /insufficient capacity/u);
  assert.equal(f.calls.length, 1); previousIsIntact(f);
});

test("insufficient destination capacity prevents the existing atomic handoff", async t => {
  const f = await fixture(t);
  await assert.rejects(materializeProductWeb({ ...f.options,
    publish: options => publishOutput({ ...options, freeBytes: 1 }),
  }), /cannot stage the export/u);
  previousIsIntact(f);
});

test("an existing provider assets directory is retained when the handoff is refused", async t => {
  const f = await fixture(t), providerFile = path.join(f.root, ".edgeone/assets/index.html");
  write(providerFile, "UNOWNED-PROVIDER-STATE");
  await assert.rejects(materializeProductWeb(f.options), /assets this build did not create/u);
  assert.equal(fs.readFileSync(providerFile, "utf8"), "UNOWNED-PROVIDER-STATE");
  assert.equal(fs.readFileSync(path.join(f.root, "packages/pcr-docs/out/index.html"), "utf8"), "PREVIOUS-GOOD");
  assert.deepEqual(fs.readdirSync(f.scratchBase), []);
});

test("the public manifest response has a bounded metadata size", async t => {
  const f = await fixture(t);
  await assert.rejects(materializeProductWeb({ ...f.options, fetchImpl: async () => new Response(" ".repeat(1024 * 1024 + 1)) }), /declared byte bound/u);
  previousIsIntact(f);
});

test("the materialization deadline aborts a stalled public download", async t => {
  const f = await fixture(t);
  await assert.rejects(materializeProductWeb({ ...f.options, timeoutMs: 10,
    fetchImpl: async (_url, { signal }) => new Promise((_resolve, reject) => {
      if (signal?.aborted) reject(signal?.reason);
      else signal?.addEventListener("abort", () => reject(signal?.reason), { once: true });
    }),
  }), /timed out/u);
  previousIsIntact(f);
});

test("the final handoff checks elapsed time even when a queued timer has not run", async t => {
  const f = await fixture(t); let clock = 0;
  await assert.rejects(materializeProductWeb({ ...f.options, timeoutMs: 1000, now: () => clock,
    publish(options) { clock = 1000; return publishOutput(options); },
  }), /timed out/u);
  previousIsIntact(f);
});

test("allowed GitHub storage redirects carry no account authorization", async () => {
  const calls: { url: string; options: RequestInit }[] = [];
  const proof = await downloadProductFile(manifestUrl, { releasePath, maxBytes: 5,
    fetchImpl: async (url: string, options: RequestInit) => {
      calls.push({ url, options });
      return calls.length === 1 ? new Response(null, { status: 302,
        headers: { location: "https://release-assets.githubusercontent.com/release/asset?signature=fixture" } })
        : new Response("hello");
    },
  });
  assert.equal(present(proof.body).toString(), "hello"); assert.equal(calls.length, 2);
  assert.equal(field(present(calls[1]).options.headers, "authorization"), undefined);
  assert.equal(present(calls[1]).options.credentials, "omit");
});

for (const location of [
  "https://evil.invalid/asset", "http://release-assets.githubusercontent.com/asset",
  "https://user:password@release-assets.githubusercontent.com/asset",
  "https://release-assets.githubusercontent.com:8443/asset", "https://raw.githubusercontent.com/other/repo/asset",
  "https://github.com/other/repo/releases/download/v0.3.0/asset",
] as const) test(`untrusted release redirects are refused: ${location.replace("user:password@", "credentials@")}`, async () => {
  let calls = 0;
  await assert.rejects(downloadProductFile(manifestUrl, { releasePath, maxBytes: 5,
    fetchImpl: async () => { calls += 1; return new Response(null, { status: 302, headers: { location } }); },
  }), /fixed GitHub release|HTTPS/u);
  assert.equal(calls, 1);
});

test("the provider importer loads without npm-installed dependencies", t => {
  const owned = fs.mkdtempSync(path.join(os.tmpdir(), "pcr-importer-no-install-"));
  t.after(() => fs.rmSync(owned, { recursive: true, force: true }));
  const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
  for (const relative of ["builder", "packages/pcr-core", "packages/pcr-docs/scripts"])
    fs.cpSync(path.join(source, relative), path.join(owned, relative), { recursive: true,
      filter: file => !file.split(path.sep).includes("node_modules") });
  assert.equal(fs.existsSync(path.join(owned, "node_modules")), false);
  const moduleUrl = pathToFileURL(path.join(owned, "builder/scripts/product-web-materialize.ts")).href;
  execFileSync(process.execPath, ["--input-type=module", "-e", `await import(${JSON.stringify(moduleUrl)});`], {
    cwd: owned, stdio: ["ignore", "pipe", "pipe"], timeout: 10_000,
  });
});
