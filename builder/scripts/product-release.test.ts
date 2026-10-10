import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, realpathSync, readFileSync, rmSync, symlinkSync, utimesSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test, { type TestContext } from "node:test";
import { gzipSync, gunzipSync } from "node:zlib";
import { PRODUCT_MIRRORS, productSha256, readProductIdentity } from "./product-identity.ts";
import { bootstrapProductTag, buildProductRelease, detectProductRelease, productReleaseContext, productReleaseSpec, readProductArchive, tagAndDispatchProduct, validateProductManifest, verifyProductArtifacts, verifyProductWebTree, writeProductWebArchive } from "./product-release.ts";
import { parseNpmPackOutput, releaseSpec } from "./npm-release.ts";

import { PRODUCT_COMPATIBILITY, READER_CAPABILITIES } from "./reader-compatibility.ts";
import { record, field } from "./release-types.ts";
type BuildOptions = NonNullable<Parameters<typeof buildProductRelease>[3]>;
type PackInput = Parameters<NonNullable<BuildOptions["pack"]>>[0];

const identityEnv = { GITHUB_REPOSITORY: "tiangong-lca/pcr", GITHUB_REPOSITORY_ID: "1277836444", GITHUB_REPOSITORY_OWNER_ID: "327771381" };
const put = (file: string, value: string | Uint8Array) => { mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, value); };
const putJson = (file: string, value: unknown) => put(file, JSON.stringify(value));
function fixture(t: TestContext, { product = true } = {}) {
  const container = realpathSync(mkdtempSync(path.join(tmpdir(), "pcr-product-release-"))), root = path.join(container, "source"); mkdirSync(root);
  t.after(() => rmSync(container, { recursive: true, force: true }));
  const git = (...args: string[]) => execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  git("init", "-b", "main"); git("config", "user.email", "test@example.invalid"); git("config", "user.name", "PCR Test");
  const npmCli = process.env.npm_execpath ?? execFileSync("which", ["npm"], { encoding: "utf8" }).trim();
  const actualNpm = execFileSync(process.execPath, [npmCli, "--version"], { encoding: "utf8" }).trim();
  const config = (version: string) => ({ schema: 1, version, node: process.versions.node, npm: actualNpm, web: { origin: "https://pcr.tiangong.earth", site: "global" } });
  const setVersion = (version: string) => {
    putJson(path.join(root, "product-release.json"), config(version));
    for (const [relative, name] of PRODUCT_MIRRORS) putJson(path.join(root, relative), { name, version, private: true });
  };
  if (product) setVersion("0.4.1");
  put(path.join(root, "library/pcrs/a/pcr.en-US.md"), "English\n"); put(path.join(root, "library/pcrs/a/pcr.zh-CN.md"), "中文\n");
  put(path.join(root, "classifications/mapping.yaml"), "mappings: []\n");
  putJson(path.join(root, "edgeone.json"), { outputDirectory: "packages/pcr-docs/out", buildCommand: "source build", headers: [], redirects: [] });
  const commit = () => { git("add", "."); git("commit", "--no-gpg-sign", "-qm", "fixture"); return git("rev-parse", "HEAD"); };
  const head = commit();
  const prepareWeb = () => {
    const webDir = path.join(container, "web"), identity = readProductIdentity(root);
    put(path.join(webDir, "index.html"), "HOME");
    put(path.join(webDir, "zh/index.html"), "中文首页"); put(path.join(webDir, "en/index.html"), "English home");
    putJson(path.join(webDir, "generated/product-release.json"), identity);
    putJson(path.join(webDir, "generated/version.json"), { sourceCommit: identity.sourceCommit, releaseVersion: identity.version, releaseTag: identity.tag, sourceFingerprint: identity.sourceFingerprint,
      counts: { pcrs: 1, pages: 2, languages: 2, sourceBytes: 20 } });
    put(path.join(webDir, "zh/docs/pcr/index.html"), "中文目录"); put(path.join(webDir, "en/docs/pcr/index.html"), "English directory");
    put(path.join(webDir, "generated/raw/classifications/indexes/cpc-3.0-coverage.json"), '{"fixture":true}');
    return webDir;
  };
  const builders = {
    tool({ output, version }: { output: string; version: string }) {
      mkdirSync(output, { recursive: true });
      putJson(path.join(output, "package.json"), { name: "@tiangong-lca/pcr", version, files: ["README.md", "reader-capabilities.json"], dependencies: { ajv: "8.0.0" }, bundleDependencies: ["ajv"] });
      put(path.join(output, "README.md"), "Synthetic tool fixture.");
      putJson(path.join(output, "reader-capabilities.json"), READER_CAPABILITIES);
      putJson(path.join(output, "node_modules/ajv/package.json"), { name: "ajv", version: "8.0.0", main: "index.js" });
      put(path.join(output, "node_modules/ajv/index.js"), "module.exports = {};\n");
    },
    library({ output, version, sourceCommit }: { output: string; version: string; sourceCommit: string }) {
      mkdirSync(output, { recursive: true }); const bytes = Buffer.from("SYNTHETIC SQLITE TRANSPORT FIXTURE");
      putJson(path.join(output, "package.json"), { name: "@tiangong-lca/pcr-library", version, files: ["library.sqlite", "library.sqlite.json"] });
      put(path.join(output, "library.sqlite"), bytes);
      putJson(path.join(output, "library.sqlite.json"), { kind: "tiangong-pcr-library", format_version: 1, sha256: productSha256(bytes),
        snapshot: { source_commit: sourceCommit, content_version: version, source_sha256: productSha256("English-only payload fixture") } });
    },
  };
  const pack = ({ stage, output, spec }: PackInput) => parseNpmPackOutput(execFileSync(process.execPath, [npmCli,
    "pack", stage, "--json", "--ignore-scripts", "--pack-destination", output], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }), spec.name);
  return { root, container, git, head, setVersion, commit, prepareWeb, builders, pack, actualNpm, npmCli,
    build: (output: string, extra: BuildOptions = {}) => buildProductRelease(root, "v0.4.1", path.join(container, output), { webDir: prepareWeb(), builders, pack, getNpmVersion: () => actualNpm, ...extra }) };
}

test("stable unified tags coexist with unchanged legacy prerelease tags", () => {
  assert.equal(productReleaseSpec("v0.3.0").dist_tag, "latest");
  for (const tag of ["pcr-v0.3.0", "library-v0.3.0", "v0.3.0-rc.1", "v0.3.0+build", "v01.2.3", "v../main", "v0.3.0\n"]) assert.throws(() => productReleaseSpec(tag));
  assert.equal(releaseSpec("pcr-v0.2.0-rc.1").dist_tag, "next");
  assert.equal(releaseSpec("library-v0.1.2").kind, "library");
});

test("version source introduction is explicit bootstrap; only a monotone unified bump triggers release", t => {
  const f = fixture(t, { product: false }), base = f.head;
  f.setVersion("0.3.0"); const introduced = f.commit();
  assert.equal(detectProductRelease(f.root, base, introduced), null);
  put(path.join(f.root, "runtime.mjs"), "// content-only change\n"); const same = f.commit();
  assert.equal(detectProductRelease(f.root, introduced, same), null);
  f.setVersion("0.4.0"); const bumped = f.commit(); assert.equal(detectProductRelease(f.root, same, bumped)?.tag, "v0.4.0");
  f.setVersion("0.2.0"); const lower = f.commit(); assert.throws(() => detectProductRelease(f.root, bumped, lower), /increase/u);
  assert.throws(() => detectProductRelease(f.root, "0".repeat(40), lower), /full base\/head/u);
});

test("unified context binds canonical repository, tag, event, workflow, source and main ancestry", t => {
  const f = fixture(t); f.git("tag", "v0.4.1"); f.git("update-ref", "refs/remotes/origin/main", f.head);
  const env = { ...identityEnv, GITHUB_EVENT_NAME: "workflow_dispatch", GITHUB_REF: "refs/tags/v0.4.1", GITHUB_SHA: f.head, GITHUB_WORKFLOW_SHA: f.head };
  assert.equal(productReleaseContext(f.root, "v0.4.1", env).identity.sourceCommit, f.head);
  for (const key of ["GITHUB_SHA", "GITHUB_WORKFLOW_SHA", "GITHUB_REF", "GITHUB_EVENT_NAME", "GITHUB_REPOSITORY_ID"]) assert.throws(() => productReleaseContext(f.root, "v0.4.1", { ...env, [key]: "wrong" }));
  f.git("tag", "v0.4.0"); assert.throws(() => productReleaseContext(f.root, "v0.4.0", { ...env, GITHUB_REF: "refs/tags/v0.4.0" }), /version source/u);
  f.setVersion("0.5.0"); const later = f.commit(); f.git("tag", "v0.5.1");
  assert.throws(() => productReleaseContext(f.root, "v0.4.1", { ...env, GITHUB_REF: "refs/tags/v0.4.1", GITHUB_SHA: later, GITHUB_WORKFLOW_SHA: later }));
});

test("tag retry never moves a conflicting tag or dispatches on uncertain reads", async () => {
  const spec = productReleaseSpec("v0.3.0"), head = "a".repeat(40);
  for (const exists of [false, true]) {
    const calls: { endpoint: string; method: string; body?: unknown }[] = [];
    await tagAndDispatchProduct(spec, head, async (endpoint, method, body) => {
      calls.push({ endpoint, method, body });
      if (method === "GET") return exists ? { status: 200, body: { object: { type: "commit", sha: head } } } : { status: 404 };
      return { status: endpoint.endsWith("dispatches") ? 204 : 201 };
    });
    assert.equal(calls.length, exists ? 2 : 3); assert.deepEqual(calls.at(-1)?.body, { ref: "v0.3.0", inputs: { tag_name: "v0.3.0" } });
  }
  for (const response of [{ status: 500 }, { status: 200, body: { object: { type: "commit", sha: "b".repeat(40) } } }]) {
    let writes = 0;
    await assert.rejects(tagAndDispatchProduct(spec, head, async (_endpoint, method) => { if (method !== "GET") writes++; return response; })); assert.equal(writes, 0);
  }
});

test("explicit initial product tag binds main dispatch and retries only the same immutable source", async t => {
  const f = fixture(t); f.git("update-ref", "refs/remotes/origin/main", f.head);
  const env = { ...identityEnv, GITHUB_EVENT_NAME: "workflow_dispatch", GITHUB_REF: "refs/heads/main", GITHUB_SHA: f.head, GITHUB_WORKFLOW_SHA: f.head };
  for (const exists of [false, true]) {
    const calls: { endpoint: string; method: string; body?: unknown }[] = [];
    const result = await bootstrapProductTag(f.root, "v0.4.1", env, async (endpoint, method, body) => {
      calls.push({ endpoint, method, body });
      if (method === "GET") return exists ? { status: 200, body: { object: { type: "commit", sha: f.head } } } : { status: 404 };
      return { status: endpoint.endsWith("dispatches") ? 204 : 201 };
    });
    assert.equal(result.identity.sourceCommit, f.head); assert.equal(calls.length, exists ? 2 : 3);
  }
  for (const key of ["GITHUB_EVENT_NAME", "GITHUB_REF", "GITHUB_SHA", "GITHUB_WORKFLOW_SHA", "GITHUB_REPOSITORY_OWNER_ID"]) {
    let requests = 0;
    await assert.rejects(bootstrapProductTag(f.root, "v0.4.1", { ...env, [key]: "wrong" }, async () => { requests++; return { status: 500 }; }));
    assert.equal(requests, 0);
  }
  await assert.rejects(bootstrapProductTag(f.root, "v0.4.0", env, async () => assert.fail("no network for wrong version")), /version source/u);
  let writes = 0;
  await assert.rejects(bootstrapProductTag(f.root, "v0.4.1", env, async (_endpoint, method) => { if (method !== "GET") writes++; return { status: 200, body: { object: { type: "commit", sha: "b".repeat(40) } } }; }), /conflict/u);
  assert.equal(writes, 0);
  putJson(path.join(f.root, PRODUCT_MIRRORS[0][0]), { name: PRODUCT_MIRRORS[0][1], private: true, version: "0.4.0" });
  await assert.rejects(bootstrapProductTag(f.root, "v0.4.1", env, async () => assert.fail("no network for dirty source")), /clean source/u);
  const head = f.commit(); f.git("update-ref", "refs/remotes/origin/main", head);
  await assert.rejects(bootstrapProductTag(f.root, "v0.4.1", { ...env, GITHUB_SHA: head, GITHUB_WORKFLOW_SHA: head }, async () => assert.fail("no network for bad mirror")), /mirror differs/u);
});

test("both real npm tarballs and the sealed web archive bind one identity; reproducible builds retain exact bytes", async t => {
  const f = fixture(t), previousNpm = process.env.npm_execpath;
  let first, second;
  // Exercise the production pack transport, including its real CLI output parser.
  process.env.npm_execpath = f.npmCli;
  try { first = await f.build("release-1", { pack: null }); second = await f.build("release-2", { pack: null }); }
  finally { if (previousNpm === undefined) delete process.env.npm_execpath; else process.env.npm_execpath = previousNpm; }
  assert.deepEqual(second, first);
  assert.deepEqual(first.compatibility, PRODUCT_COMPATIBILITY);
  const verified = await verifyProductArtifacts(path.join(f.container, "release-1"), { expectedIdentity: readProductIdentity(f.root) });
  assert.deepEqual(verified.identity, first.identity); assert.equal(first.packages.tool.version, "0.4.1"); assert.equal(first.packages.library.version, "0.4.1");
  assert.equal(first.web.probes.counts.pcrs, 1);
  await verifyProductWebTree(f.prepareWeb(), first);
  const sql = record(JSON.parse(readFileSync(path.join(f.container, "release-1/library.sqlite.json"), "utf8")) as unknown);
  assert.equal(sql.format_version, 1); assert.notEqual(field(sql, "snapshot", "source_sha256"), first.identity.sourceFingerprint, "English payload fingerprint is preserved separately");
  await assert.rejects(f.build("release-1"), /already exists/u);
});

test("checksum, source, package and web-tree substitutions fail without blessing mixed outputs", async t => {
  const f = fixture(t), manifest = await f.build("release"), output = path.join(f.container, "release");
  const archive = path.join(output, manifest.web.filename), original = readFileSync(archive);
  writeFileSync(archive, Buffer.concat([original, Buffer.from("tampered")]));
  await assert.rejects(verifyProductArtifacts(output), /checksum differs/u); writeFileSync(archive, original);
  assert.throws(() => validateProductManifest({ ...manifest, identity: { ...manifest.identity, sourceCommit: "b".repeat(40) } }), /identities differ/u);
  const changed = structuredClone(manifest); changed.packages.library.sourceCommit = "c".repeat(40);
  assert.throws(() => validateProductManifest(changed), /artifact identity differs/u);
  changed.packages.library.sourceCommit = manifest.identity.sourceCommit; changed.web.files++;
  await assert.rejects(verifyProductWebTree(f.prepareWeb(), changed), /tree differs/u);
  put(path.join(f.container, "web/en/docs/pcr/index.html"), "MUTATED");
  await assert.rejects(verifyProductWebTree(path.join(f.container, "web"), manifest), /tree differs/u);
});

test("production builder refuses pin, dirty-source and stale web identities before sealing", async t => {
  const f = fixture(t);
  await assert.rejects(f.build("wrong-npm", { getNpmVersion: () => "99.0.0" }), /toolchain differs/u);
  const webDir = f.prepareWeb();
  putJson(path.join(webDir, "generated/product-release.json"), { ...readProductIdentity(f.root), sourceCommit: "d".repeat(40) });
  await assert.rejects(buildProductRelease(f.root, "v0.4.1", path.join(f.container, "stale"), { webDir, getNpmVersion: () => f.actualNpm }), /identities differ/u);
  put(path.join(f.root, "library/pcrs/a/pcr.en-US.md"), "dirty");
  await assert.rejects(buildProductRelease(f.root, "v0.4.1", path.join(f.container, "dirty"), { webDir, getNpmVersion: () => f.actualNpm }), /clean source/u);
  assert.equal(existsSync(path.join(f.container, "dirty")), false);
});

test("release staging cannot write into canonical sources or recursively archive its own output", async t => {
  const f = fixture(t), webDir = f.prepareWeb();
  await assert.rejects(buildProductRelease(f.root, "v0.4.1", path.join(f.root, "library/pcrs/output"), { webDir, getNpmVersion: () => f.actualNpm }), /protected source/u);
  await assert.rejects(writeProductWebArchive(webDir, path.join(webDir, "archive.tar.gz")), /outside its source tree/u);
  assert.equal(existsSync(path.join(f.root, "library/pcrs/output")), false); assert.equal(existsSync(path.join(webDir, "archive.tar.gz")), false);
});

test("portable streamed archive preserves long UTF-8 paths and ignores file creation timestamps", async t => {
  const f = fixture(t), tree = path.join(f.container, "long-tree"), long = `${"a".repeat(150)}/${"界".repeat(45)}/payload.txt`;
  put(path.join(tree, long), "LONG PATH BODY"); put(path.join(tree, "index.html"), "HOME");
  const first = path.join(f.container, "one.tar.gz"), second = path.join(f.container, "two.tar.gz");
  const proof = await writeProductWebArchive(tree, first); utimesSync(path.join(tree, "index.html"), new Date(1), new Date(2));
  assert.deepEqual(await writeProductWebArchive(tree, second), proof); assert.deepEqual(readFileSync(second), readFileSync(first));
  const archive = await readProductArchive(first, { collect: [long] });
  assert.equal(archive.contents.get(long)?.toString(), "LONG PATH BODY"); assert.equal(archive.treeSha256, proof.treeSha256);
  // Use the host's ordinary tar to prove that PAX output is interoperable, not only self-readable.
  if (process.platform !== "win32") assert.equal(execFileSync("tar", ["-xOf", first, long], { encoding: "utf8" }), "LONG PATH BODY");
});

test("reader refuses traversal, links and corrupt gzip/header data before invoking file callbacks", async t => {
  const f = fixture(t), tree = path.join(f.container, "unsafe-tree"); put(path.join(tree, "payload"), "DATA");
  const valid = path.join(f.container, "valid.tar.gz"); await writeProductWebArchive(tree, valid);
  const tar = gunzipSync(readFileSync(valid));
  for (const [label, mutate] of [
    ["traversal", (header: Buffer) => { header.fill(0, 0, 100); header.write("../escape", 0); }],
    ["windows-stream", (header: Buffer) => { header.fill(0, 0, 100); header.write("directory/file:stream", 0); }],
    ["link", (header: Buffer) => { header.write("2", 156); }],
  ] as const) {
    const altered = Buffer.from(tar); mutate(altered); altered.fill(32, 148, 156);
    const sum = altered.subarray(0, 512).reduce((total, value) => total + value, 0); altered.write(sum.toString(8).padStart(6, "0") + "\0 ", 148);
    const filename = path.join(f.container, `${label}.tar.gz`); writeFileSync(filename, gzipSync(altered)); let callbacks = 0;
    await assert.rejects(readProductArchive(filename, { onFileStart: () => { callbacks++; } })); assert.equal(callbacks, 0);
  }
  const corrupt = Buffer.from(tar); const byte = corrupt[1]; assert.ok(byte !== undefined); corrupt[1] = byte ^ 1; const filename = path.join(f.container, "corrupt.tar.gz"); writeFileSync(filename, gzipSync(corrupt));
  await assert.rejects(readProductArchive(filename), /checksum mismatch/u);
});

test("web archive refuses source symlinks", { skip: process.platform === "win32" }, async t => {
  const f = fixture(t), tree = path.join(f.container, "links"); put(path.join(tree, "file"), "DATA"); symlinkSync("file", path.join(tree, "link"));
  await assert.rejects(writeProductWebArchive(tree, path.join(f.container, "links.tar.gz")), /symlinks/u);
});

test("archive deadlines cover streaming body and end-padding reads", async t => {
  const f = fixture(t), tree = path.join(f.container, "abort-tree"); put(path.join(tree, "file"), "DATA");
  const archive = path.join(f.container, "abort.tar.gz"); await writeProductWebArchive(tree, archive);
  const controller = new AbortController(); let ended = false;
  await assert.rejects(readProductArchive(archive, { signal: controller.signal,
    onFileStart() { controller.abort(new Error("Fixture archive deadline.")); }, onFileEnd() { ended = true; } }), /Fixture archive deadline/u);
  assert.equal(ended, false);
  await assert.rejects(readProductArchive(archive, { signal: AbortSignal.abort(new Error("Already exhausted.")) }), /Already exhausted/u);
});


test("candidate identity CLI reads the clean version/source without creating a release tag", t => {
  const f = fixture(t); const output = path.join(f.container, "identity-output");
  const script = path.resolve(import.meta.dirname, "product-release.ts");
  const before = f.git("status", "--porcelain");
  const value: unknown = JSON.parse(execFileSync(process.execPath, [script, "identity"], {
    cwd: f.root, encoding: "utf8", env: {...process.env, GITHUB_OUTPUT: output}, stdio: ["ignore", "pipe", "pipe"],
  }));
  assert.deepEqual(value, readProductIdentity(f.root));
  assert.match(readFileSync(output, "utf8"), /^tag=v0\.4\.1$/mu);
  assert.equal(f.git("tag", "--list"), ""); assert.equal(f.git("status", "--porcelain"), before);
});


test("new product sealing refuses a generated tool that omits capability metadata and cleans staging", async t => {
  const f = fixture(t);
  await assert.rejects(f.build("missing-capabilities", { builders: { ...f.builders, tool(options) {
    f.builders.tool(options);
    rmSync(path.join(options.output, "reader-capabilities.json"));
  } } }), /reader capabilities/u);
  assert.equal(existsSync(path.join(f.container, "missing-capabilities")), false);
});
