import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test, { type TestContext } from "node:test";
import { createWebProbes, verifyLiveWebsite, WebReleaseError, writePrebuiltConfig, type WebFetch } from "./product-web.ts";

const origin = "https://pcr.example.test";
const identity = { schema: 1, version: "0.3.0", tag: "pcr-v0.3.0", sourceCommit: "a".repeat(40), sourceFingerprint: `sha256:${"b".repeat(64)}` };
const counts = { pcrs: 832, pages: 2000, sourceBytes: 123_456, languages: 2 };
const rawPath = "/generated/raw/classifications/indexes/cpc-3.0-coverage.json";
const fresh = { "cache-control": "public, max-age=0, must-revalidate" };
const rawHeaders = { ...fresh, "content-type": "application/json", "x-content-type-options": "nosniff", "x-robots-tag": "noindex", "content-disposition": "attachment" };
const version = () => ({ sourceCommit: identity.sourceCommit, sourceFingerprint: identity.sourceFingerprint,
  releaseVersion: identity.version, releaseTag: identity.tag, counts, generatorVersion: "1", sourceDate: "2026-10-03T00:00:00Z" });

function fixture(t: TestContext, { raw = Buffer.from('{"coverage":"sealed"}') }: { raw?: Buffer<ArrayBuffer> } = {}) {
  const base = mkdtempSync(path.join(tmpdir(), "pcr-product-web-test-"));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = path.join(base, "repo"), webDir = path.join(base, "web");
  mkdirSync(root); mkdirSync(webDir);
  const files = new Map([
    ["index.html", Buffer.from("<!doctype html><html><h1>Home</h1></html>")],
    ["zh/index.html", Buffer.from("<!doctype html><html lang=zh><h1>中文首页</h1></html>")],
    ["en/index.html", Buffer.from("<!doctype html><html lang=en><h1>English home</h1></html>")],
    ["generated/product-release.json", Buffer.from(JSON.stringify(identity))],
    ["generated/version.json", Buffer.from(JSON.stringify(version()))],
    ["zh/docs/pcr/index.html", Buffer.from("<!doctype html><html lang=zh><h1>PCR 目录</h1></html>")],
    ["en/docs/pcr/index.html", Buffer.from("<!doctype html><html lang=en><h1>PCR catalog</h1></html>")],
    [rawPath.slice(1), raw],
  ]);
  for (const [relative, bytes] of files) { const target = path.join(webDir, relative); mkdirSync(path.dirname(target), { recursive: true }); writeFileSync(target, bytes); }
  const probes = createWebProbes({ webDir });
  const git = (...args: string[]) => execFileSync("git", args, { cwd: root, stdio: ["ignore", "pipe", "pipe"] });
  git("init", "-b", "main"); git("config", "user.email", "test@example.invalid"); git("config", "user.name", "Fixture");
  const config = { installCommand: "never execute this", buildCommand: "never execute this", outputDirectory: "wrong-dir",
    nodeVersion: "24.19.0", headers: [{ source: "/*", headers: [{ key: "X-Content-Type-Options", value: "nosniff" }] }],
    redirects: [{ source: "/zh", destination: "/", statusCode: 301 }], rewrites: [{ source: "/old", destination: "/new" }] };
  writeFileSync(path.join(root, "edgeone.json"), JSON.stringify(config)); git("add", "edgeone.json"); git("commit", "--no-gpg-sign", "-m", "Fixture config");
  const response = (urlPath: string) => {
    let key = urlPath.slice(1);
    if (urlPath.endsWith("/")) key += "index.html";
    else if (["/zh", "/en"].includes(urlPath)) key += "/index.html";
    const body = files.get(key);
    if (!body) return new Response("missing", { status: 404 });
    const headers = urlPath === rawPath ? rawHeaders : urlPath.endsWith(".json") ? { ...fresh, "content-type": "application/json" } : { "content-type": "text/html; charset=utf-8" };
    return new Response(body, { status: 200, headers });
  };
  const calls: { url: string; options: RequestInit }[] = [];
  const fetcher = async (url: string, options: RequestInit) => {
    calls.push({ url, options });
    assert.equal(options.method, "GET"); assert.equal(options.redirect, "manual"); assert.equal(options.credentials, "omit");
    assert.ok(options.signal instanceof AbortSignal);
    return response(new URL(url).pathname);
  };
  return { base, root, webDir, files, config, probes, response, fetcher, calls,
    options: { origin, identity, counts, probes, fetcher } };
}
type WebFixture = ReturnType<typeof fixture>;
const code = (expected: string) => (error: unknown): error is WebReleaseError => error instanceof WebReleaseError && error.code === expected;
const changed = (f: WebFixture, urlPath: string, response: () => Response): WebFetch => async (url: string, options: RequestInit) => new URL(url).pathname === urlPath ? response() : f.fetcher(url, options);

test("prebuilt config takes only committed routing rules, is idempotent and never overwrites a conflict", t => {
  const f = fixture(t);
  writeFileSync(path.join(f.root, "edgeone.json"), JSON.stringify({ headers: [], redirects: [] }));
  const first = writePrebuiltConfig(f);
  assert.equal(first.created, true);
  assert.deepEqual(JSON.parse(readFileSync(first.path, "utf8")), { headers: f.config.headers, redirects: f.config.redirects, rewrites: f.config.rewrites });
  assert.equal(writePrebuiltConfig(f).created, false);
  writeFileSync(first.path, "unowned config");
  assert.throws(() => writePrebuiltConfig(f), code("PCR_WEB_CONFIG_CONFLICT"));
  assert.equal(readFileSync(first.path, "utf8"), "unowned config");
});

test("prebuilt config and probes reject symlinked roots, index, configuration and download directories", t => {
  const f = fixture(t), alias = path.join(f.base, "alias");
  symlinkSync(f.webDir, alias, "dir");
  assert.throws(() => writePrebuiltConfig({ ...f, webDir: alias }), code("PCR_WEB_UNSAFE_PATH"));
  rmSync(path.join(f.webDir, "index.html")); symlinkSync(path.join(f.root, "edgeone.json"), path.join(f.webDir, "index.html"));
  assert.throws(() => writePrebuiltConfig(f), code("PCR_WEB_UNSAFE_PATH"));
  rmSync(path.join(f.webDir, "index.html")); writeFileSync(path.join(f.webDir, "index.html"), "entry");
  symlinkSync(path.join(f.root, "edgeone.json"), path.join(f.webDir, "edgeone.json"));
  assert.throws(() => writePrebuiltConfig(f), code("PCR_WEB_UNSAFE_PATH"));
  rmSync(path.join(f.webDir, "generated/raw"), { recursive: true }); symlinkSync(f.root, path.join(f.webDir, "generated/raw"), "dir");
  assert.throws(() => createWebProbes(f), code("PCR_WEB_UNSAFE_PATH"));
});

test("local probes fail closed on mixed product/version documents", t => {
  const f = fixture(t);
  writeFileSync(path.join(f.webDir, "generated/version.json"), JSON.stringify({ ...version(), releaseVersion: "0.2.0" }));
  assert.throws(() => createWebProbes(f), code("PCR_WEB_IDENTITY_MISMATCH"));
});

test("live acceptance observes both languages, explicit homepage URLs, exact downloads and unchanged ending identity", async t => {
  const f = fixture(t), result = await verifyLiveWebsite(f.options);
  assert.equal(result.verified, true); assert.deepEqual(result.identity, identity); assert.deepEqual(result.counts, counts);
  assert.equal(result.checks.length, 12);
  assert.equal(f.calls.filter(call => call.url.endsWith("/generated/product-release.json")).length, 2);
  assert.equal(f.calls.filter(call => call.url.endsWith("/generated/version.json")).length, 2);
  assert.equal(result.checks.find(check => check.path === rawPath)?.sha256, f.probes.rawDownload.sha256);
});

test("current 2,435,231-byte CPC coverage and larger explicitly sealed probes fit below the hard limit", async t => {
  const f = fixture(t, { raw: Buffer.alloc(2_435_231, "x") });
  const result = await verifyLiveWebsite({ ...f.options, maxBytes: 1024 });
  assert.equal(result.checks.find(check => check.path === rawPath)?.bytes, 2_435_231);
});

test("explicit homes require sealed bytes, HTML and HTTP 200 without redirecting", async t => {
  const f = fixture(t);
  for (const home of ["/", "/zh", "/zh/", "/en", "/en/"]) {
    await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, home, () => new Response("wrong language or stale home", { headers: { "content-type": "text/html" } })) }), code("PCR_WEB_HASH_MISMATCH"));
    await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, home, () => new Response("{}", { headers: { "content-type": "application/json" } })) }), code("PCR_WEB_CONTENT_TYPE"));
    await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, home, () => new Response("missing", { status: 404 })) }), code("PCR_WEB_STATUS"));
    await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, home, () => new Response(null, { status: 301, headers: { location: "/" } })) }), code("PCR_WEB_REDIRECT"));
  }
  await assert.rejects(verifyLiveWebsite({ ...f.options, probes: { ...f.probes, routes: f.probes.routes.slice(0, 2) } }), code("PCR_WEB_PROBE_INVALID"));
});

test("mixed versions, wrong commit/fingerprint/tag and stale counts are never accepted", async t => {
  const f = fixture(t);
  for (const patch of [{ releaseVersion: "0.2.0" }, { sourceCommit: "c".repeat(40) }, { sourceFingerprint: `sha256:${"d".repeat(64)}` }, { releaseTag: "pcr-v0.2.0" }]) {
    await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, "/generated/version.json", () => new Response(JSON.stringify({ ...version(), ...patch }), { headers: { ...fresh, "content-type": "application/json" } })) }), code("PCR_WEB_IDENTITY_MISMATCH"));
  }
  await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, "/generated/version.json", () => new Response(JSON.stringify({ ...version(), counts: { ...counts, pcrs: 789 } }), { headers: { ...fresh, "content-type": "application/json" } })) }), code("PCR_WEB_COUNTS_MISMATCH"));
  await assert.rejects(verifyLiveWebsite({ ...f.options, probes: { ...f.probes, identity: { ...identity, sourceCommit: "e".repeat(40) } } }), code("PCR_WEB_IDENTITY_MISMATCH"));
});

test("a cutover during probing is detected by final identity checks", async t => {
  const f = fixture(t); let identities = 0;
  const fetcher = async (url: string, options: RequestInit) => {
    if (new URL(url).pathname === "/generated/product-release.json" && ++identities === 2) return new Response(JSON.stringify({ ...identity, version: "0.2.0" }), { headers: { ...fresh, "content-type": "application/json" } });
    return f.fetcher(url, options);
  };
  await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher }), code("PCR_WEB_IDENTITY_MISMATCH"));
});

test("404, authentication HTML and malformed JSON cannot masquerade as website identity", async t => {
  const f = fixture(t);
  for (const [response, expected] of [
    [() => new Response("missing", { status: 404 }), "PCR_WEB_STATUS"],
    [() => new Response("<html>Sign in</html>", { headers: { ...fresh, "content-type": "text/html" } }), "PCR_WEB_CONTENT_TYPE"],
    [() => new Response("<html>Sign in</html>", { headers: { ...fresh, "content-type": "application/json" } }), "PCR_WEB_BODY_INVALID"],
  ] as const) await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, "/generated/product-release.json", response) }), code(expected));
});

test("unexpected homepage redirects and credentialed origins fail without leaking URLs", async t => {
  const f = fixture(t);
  for (const [status, location] of [[301, "/"], [302, "/"], [301, "https://login.example.test/?token=SECRET"], [301, "/zh/"], [301, "/?token=SECRET"]] as const) {
    await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, "/zh", () => new Response(null, { status, headers: { location } })) }), error => code("PCR_WEB_REDIRECT")(error) && !JSON.stringify(error).includes("SECRET"));
  }
  await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, "/en/docs/pcr/", () => new Response(null, { status: 302, headers: { location: "/login" } })) }), code("PCR_WEB_REDIRECT"));
  for (const badOrigin of ["http://pcr.example.test", "https://user:SECRET@pcr.example.test", `${origin}/?token=SECRET`, `${origin}/nested`]) {
    await assert.rejects(verifyLiveWebsite({ ...f.options, origin: badOrigin }), error => code("PCR_WEB_ORIGIN_INVALID")(error) && !JSON.stringify(error).includes("SECRET"));
  }
  for (const invalidVersion of ["0.3.0-01", "0.3.0+build", "01.3.0"]) await assert.rejects(verifyLiveWebsite({ ...f.options, identity: { ...identity, version: invalidVersion } }), code("PCR_WEB_IDENTITY_INVALID"));
});

test("raw headers and nonpersistent identity caching are observed, not inferred from the build", async t => {
  const f = fixture(t);
  for (const key of ["x-content-type-options", "x-robots-tag", "content-disposition", "cache-control"]) {
    const headers: Record<string, string> = { ...rawHeaders }; delete headers[key];
    await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, rawPath, () => new Response(f.files.get(rawPath.slice(1)), { headers })) }), code("PCR_WEB_HEADERS"));
  }
  for (const caching of ["public, max-age=31536000, immutable", "public, max-age=0, s-maxage=600, must-revalidate", "max-age=600, max-age=0, must-revalidate", "max-age=0"]) {
    await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, "/generated/product-release.json", () => new Response(JSON.stringify(identity), { headers: { "cache-control": caching, "content-type": "application/json" } })) }), code("PCR_WEB_HEADERS"));
  }
});

test("auth HTML routes and altered download bytes fail exact sealed-artifact comparison", async t => {
  const f = fixture(t);
  await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, "/zh/docs/pcr/", () => new Response("<html>Sign in</html>", { headers: { "content-type": "text/html" } })) }), code("PCR_WEB_HASH_MISMATCH"));
  await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, rawPath, () => new Response("altered", { headers: rawHeaders })) }), code("PCR_WEB_HASH_MISMATCH"));
});

test("declared and streamed bodies have hard bounds even when Content-Length is absent", async t => {
  const f = fixture(t);
  await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, rawPath, () => new Response("tiny", { headers: { ...rawHeaders, "content-length": "25000001" } })) }), code("PCR_WEB_RESPONSE_TOO_LARGE"));
  await assert.rejects(verifyLiveWebsite({ ...f.options, maxBytes: 1024, fetcher: changed(f, rawPath, () => new Response(new ReadableStream({ start(controller) { controller.enqueue(new Uint8Array(1025)); controller.close(); } }), { headers: rawHeaders })) }), code("PCR_WEB_RESPONSE_TOO_LARGE"));
  await assert.rejects(verifyLiveWebsite({ ...f.options, probes: { ...f.probes, rawDownload: { ...f.probes.rawDownload, bytes: 25_000_001 } } }), code("PCR_WEB_PROBE_INVALID"));
});

test("bounded fetch and body deadlines abort, and a later whole-operation retry starts fresh", async t => {
  const f = fixture(t); let observedAbort = false;
  const hanging: WebFetch = (_url, options) => { options.signal?.addEventListener("abort", () => { observedAbort = true; }, { once: true }); return new Promise<Response>(() => {}); };
  await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: hanging, timeoutMs: 15 }), code("PCR_WEB_TIMEOUT"));
  assert.equal(observedAbort, true);
  await assert.rejects(verifyLiveWebsite({ ...f.options, timeoutMs: 15, fetcher: changed(f, rawPath, () => new Response(new ReadableStream({ start() {} }), { headers: rawHeaders })) }), code("PCR_WEB_TIMEOUT"));
  assert.equal((await verifyLiveWebsite(f.options)).verified, true);
});

test("the overall budget includes successive successful GETs and does not depend on wall-clock progress", async t => {
  const f = fixture(t);
  t.mock.method(Date, "now", () => 1);
  const fetcher = async (url: string, options: RequestInit) => { await new Promise(resolve => setTimeout(resolve, 5)); return f.fetcher(url, options); };
  await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher, timeoutMs: 15 }), code("PCR_WEB_TIMEOUT"));
});

test("transport errors are sanitized and a 503 partial release can be retried without stale success state", async t => {
  const f = fixture(t);
  await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: async () => { throw new Error("https://private/?token=SECRET response credentials"); } }), error => code("PCR_WEB_FETCH_FAILED")(error) && error.retryable && !`${error.message}${JSON.stringify(error.details)}`.includes("SECRET"));
  await assert.rejects(verifyLiveWebsite({ ...f.options, fetcher: changed(f, rawPath, () => new Response("unavailable", { status: 503 })) }), error => code("PCR_WEB_STATUS")(error) && error.retryable);
  assert.equal((await verifyLiveWebsite(f.options)).verified, true);
});
