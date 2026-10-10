import { createHash, type BinaryLike } from "node:crypto";
import { execFileSync } from "node:child_process";
import { constants, closeSync, fstatSync, lstatSync, openSync, readSync, realpathSync, writeFileSync } from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { isValidSemver } from "../lib/lifecycle-policy.ts";

import type { ProductIdentity } from "./product-identity.ts";
import { isRecord, field, type JsonObject } from "./release-types.ts";
export interface WebCounts extends Record<string, number> { pcrs: number; pages: number; languages: number; sourceBytes: number }
export interface WebProbe { path: string; bytes: number; sha256: string }
export interface WebProbes { identity: ProductIdentity; counts: WebCounts; routes: WebProbe[]; rawDownload: WebProbe }
export interface WebRequestOptions { method: "GET"; redirect: "manual"; credentials: "omit"; headers: Record<string, string>; signal: AbortSignal }
export type WebFetch = (url: string, options: WebRequestOptions) => Promise<Response>;
export interface LiveWebsiteOptions { origin: string; identity: unknown; counts: unknown; probes: unknown; fetcher?: WebFetch; timeoutMs?: number; maxBytes?: number }
function identityFields(value: ProductIdentity): ProductIdentity {
  return { schema: value.schema, version: value.version, tag: value.tag, sourceCommit: value.sourceCommit, sourceFingerprint: value.sourceFingerprint };
}

const HARD_MAX_BYTES = 25_000_000;
const JSON_MAX_BYTES = 64 * 1024;
export const LEGACY_WEB_PROBE_ROUTES = ["/zh/docs/pcr/", "/en/docs/pcr/"] as const;
export const WEB_PROBE_ROUTES = [...LEGACY_WEB_PROBE_ROUTES, "/", "/zh/", "/en/"] as const;
const RAW_PATH = "/generated/raw/classifications/indexes/cpc-3.0-coverage.json";
const identityKeys = ["schema", "version", "tag", "sourceCommit", "sourceFingerprint"] as const;
const sha256 = (bytes: BinaryLike) => `sha256:${createHash("sha256").update(bytes).digest("hex")}`;

export class WebReleaseError extends Error {
  readonly code: string; readonly details: JsonObject; readonly retryable: boolean;
  constructor(code: string, message: string, details: JsonObject = {}, retryable = false) {
    super(message);
    this.name = "WebReleaseError";
    this.code = code;
    this.details = details;
    this.retryable = retryable;
  }
}
function fail(code: string, message: string, details?: JsonObject, retryable?: boolean): never { throw new WebReleaseError(code, message, details, retryable); }

function controlledRoot(directory: string): string {
  try {
    const absolute = path.resolve(directory);
    const stat = lstatSync(absolute);
    if (!stat.isDirectory() || stat.isSymbolicLink()) fail("PCR_WEB_UNSAFE_PATH", "Expected an owned regular directory.");
    return realpathSync(absolute);
  } catch (error) {
    if (error instanceof WebReleaseError) throw error;
    fail("PCR_WEB_UNSAFE_PATH", "Cannot read the controlled directory.");
  }
}

function managedPath(root: string, relative: string, { allowMissing = false } = {}): string {
  if (typeof relative !== "string" || relative.includes("\\") || path.posix.isAbsolute(relative)
    || relative !== path.posix.normalize(relative) || relative.split("/").some(segment => !segment || segment === "." || segment === "..")) {
    fail("PCR_WEB_UNSAFE_PATH", "Invalid controlled artifact path.");
  }
  let file = root;
  for (const [index, segment] of relative.split("/").entries()) {
    file = path.join(file, segment);
    const stat = lstatSync(file, { throwIfNoEntry: false });
    const last = index === relative.split("/").length - 1;
    if (!stat && last && allowMissing) return file;
    if (!stat || stat.isSymbolicLink() || (last ? !stat.isFile() : !stat.isDirectory())) {
      fail("PCR_WEB_UNSAFE_PATH", "Artifact paths must contain regular files and directories.", { artifact: relative });
    }
  }
  return file;
}

function readManaged(root: string, relative: string, limit = HARD_MAX_BYTES): Buffer {
  const filename = managedPath(root, relative);
  let fd: number | undefined;
  try {
    fd = openSync(filename, constants.O_RDONLY | (constants.O_NOFOLLOW ?? 0));
    const opened = fstatSync(fd), current = lstatSync(filename);
    if (!opened.isFile() || current.isSymbolicLink() || opened.dev !== current.dev || opened.ino !== current.ino) {
      fail("PCR_WEB_UNSAFE_PATH", "Artifact changed while opening.", { artifact: relative });
    }
    if (opened.size > limit) fail("PCR_WEB_RESPONSE_TOO_LARGE", "Artifact exceeds the bounded probe size.", { artifact: relative, limit });
    const chunks: Buffer[] = [], buffer = Buffer.alloc(Math.min(limit + 1, 1024 * 1024));
    let bytes = 0, count;
    while ((count = readSync(fd, buffer, 0, buffer.length, null))) {
      bytes += count;
      if (bytes > limit) fail("PCR_WEB_RESPONSE_TOO_LARGE", "Artifact grew beyond the bounded probe size.", { artifact: relative, limit });
      chunks.push(Buffer.from(buffer.subarray(0, count)));
    }
    return Buffer.concat(chunks, bytes);
  } catch (error) {
    if (error instanceof WebReleaseError) throw error;
    return fail("PCR_WEB_UNSAFE_PATH", "Cannot read the controlled artifact.", { artifact: relative });
  } finally { if (fd !== undefined) closeSync(fd); }
}

function parseJson(bytes: Uint8Array | null, code: string, message: string): unknown {
  try { if (bytes === null) fail(code, message); return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)) as unknown; }
  catch { fail(code, message); }
}

function assertIdentity(identity: unknown): asserts identity is ProductIdentity {
  if (!isRecord(identity) || identity.schema !== 1
    || typeof identity.version !== "string" || !isValidSemver(identity.version) || identity.version.includes("+")
    || typeof identity.tag !== "string" || !/^[A-Za-z0-9][A-Za-z0-9._-]{0,149}$/u.test(identity.tag)
    || typeof identity.sourceCommit !== "string" || !/^[a-f0-9]{40}$/u.test(identity.sourceCommit)
    || typeof identity.sourceFingerprint !== "string" || !/^sha256:[a-f0-9]{64}$/u.test(identity.sourceFingerprint)) {
    fail("PCR_WEB_IDENTITY_INVALID", "Expected a complete product release identity.");
  }
}

function assertCounts(counts: unknown): asserts counts is WebCounts {
  if (!isRecord(counts)
    || ["pcrs", "pages", "languages", "sourceBytes"].some(key => !Object.hasOwn(counts, key))
    || Object.values(counts).some(value => typeof value !== "number" || !Number.isSafeInteger(value) || value < 0)) {
    fail("PCR_WEB_COUNTS_INVALID", "Expected the complete sealed website counts.");
  }
}

function compareIdentity(actual: unknown, expected: ProductIdentity): void {
  if (!isRecord(actual)) fail("PCR_WEB_IDENTITY_MISMATCH", "Website identity is missing.");
  for (const key of identityKeys) if (actual[key] !== expected[key]) {
    fail("PCR_WEB_IDENTITY_MISMATCH", "Website identity does not match the sealed product release.", { field: key });
  }
}

function compareVersion(input: unknown, identity: ProductIdentity, counts: WebCounts): void {
  const actual = isRecord(input) ? input : {};
  compareIdentity({ schema: 1, version: actual?.releaseVersion, tag: actual?.releaseTag,
    sourceCommit: actual?.sourceCommit, sourceFingerprint: actual?.sourceFingerprint }, identity);
  const actualCounts = actual.counts; assertCounts(actualCounts);
  const actualKeys = Object.keys(actualCounts).sort(), expectedKeys = Object.keys(counts).sort();
  if (JSON.stringify(actualKeys) !== JSON.stringify(expectedKeys) || expectedKeys.some(key => actualCounts[key] !== counts[key])) {
    fail("PCR_WEB_COUNTS_MISMATCH", "Website counts do not match the sealed export.");
  }
}

/** Copy only hosting rules from the committed source into a prebuilt export. */
export function writePrebuiltConfig({ root, webDir }: { root: string; webDir: string }) {
  root = controlledRoot(root); webDir = controlledRoot(webDir);
  readManaged(webDir, "index.html");
  let source: Buffer;
  try { source = execFileSync("git", ["show", "HEAD:edgeone.json"], { cwd: root, stdio: ["ignore", "pipe", "pipe"], maxBuffer: 1024 * 1024 }); }
  catch { fail("PCR_WEB_CONFIG_INVALID", "Cannot read the committed hosting configuration."); }
  const config = parseJson(source, "PCR_WEB_CONFIG_INVALID", "Committed hosting configuration is not valid JSON.");
  if (!isRecord(config)) fail("PCR_WEB_CONFIG_INVALID", "Expected an object hosting configuration.");
  const selected: Record<string, unknown[]> = {};
  for (const key of ["headers", "redirects", "rewrites"]) {
    if (!Object.hasOwn(config, key)) continue;
    if (!Array.isArray(config[key])) fail("PCR_WEB_CONFIG_INVALID", "Hosting rules must be arrays.", { field: key });
    selected[key] = config[key];
  }
  const bytes = Buffer.from(`${JSON.stringify(selected, null, 2)}\n`);
  const filename = managedPath(webDir, "edgeone.json", { allowMissing: true });
  if (lstatSync(filename, { throwIfNoEntry: false })) {
    if (!readManaged(webDir, "edgeone.json", 1024 * 1024).equals(bytes)) fail("PCR_WEB_CONFIG_CONFLICT", "Refusing to replace an existing prebuilt configuration.");
    return { path: filename, sha256: sha256(bytes), bytes: bytes.length, created: false };
  }
  try { writeFileSync(filename, bytes, { flag: "wx", mode: 0o644 }); }
  catch { fail("PCR_WEB_CONFIG_CONFLICT", "Cannot exclusively create the prebuilt configuration."); }
  if (!readManaged(webDir, "edgeone.json", 1024 * 1024).equals(bytes)) fail("PCR_WEB_CONFIG_CONFLICT", "Prebuilt configuration changed during creation.");
  return { path: filename, sha256: sha256(bytes), bytes: bytes.length, created: true };
}

/** Small exact-byte descriptors, derived from the verified export before sealing. */
export function createWebProbes({ webDir, includeHomes = true }: { webDir: string; includeHomes?: boolean }): WebProbes {
  webDir = controlledRoot(webDir);
  readManaged(webDir, "index.html");
  const identity = parseJson(readManaged(webDir, "generated/product-release.json", JSON_MAX_BYTES), "PCR_WEB_IDENTITY_INVALID", "Export product identity is not JSON.");
  assertIdentity(identity);
  const version = parseJson(readManaged(webDir, "generated/version.json", JSON_MAX_BYTES), "PCR_WEB_IDENTITY_INVALID", "Export version identity is not JSON.");
  const counts = field(version, "counts");
  assertCounts(counts); compareVersion(version, identity, counts);
  const describe = (urlPath: string, relative: string): WebProbe => {
    const bytes = readManaged(webDir, relative);
    if (bytes.length === 0) fail("PCR_WEB_PROBE_INVALID", "Sealed website probes must not be empty.", { artifact: relative });
    return { path: urlPath, sha256: sha256(bytes), bytes: bytes.length };
  };
  return { identity: identityFields(identity), counts,
    routes: (includeHomes ? WEB_PROBE_ROUTES : LEGACY_WEB_PROBE_ROUTES).map(urlPath => describe(urlPath, `${urlPath.slice(1)}index.html`)),
    rawDownload: describe(RAW_PATH, RAW_PATH.slice(1)) };
}

function originUrl(origin: string): URL {
  try {
    const url = new URL(origin);
    if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash || url.pathname !== "/") throw new Error();
    return url;
  } catch { fail("PCR_WEB_ORIGIN_INVALID", "Website acceptance requires a plain HTTPS origin without credentials or query parameters."); }
}

function validateProbe(probe: unknown, expectedPath: string): asserts probe is WebProbe {
  if (!isRecord(probe) || probe.path !== expectedPath || typeof probe.sha256 !== "string" || !/^sha256:[a-f0-9]{64}$/u.test(probe.sha256)
    || typeof probe.bytes !== "number" || !Number.isSafeInteger(probe.bytes) || probe.bytes < 1 || probe.bytes > HARD_MAX_BYTES) {
    fail("PCR_WEB_PROBE_INVALID", "Expected a bounded sealed artifact probe.");
  }
}

function cacheDirectives(headers: Pick<Headers, "get">) {
  const directives = new Map<string, string>();
  for (const value of String(headers.get("cache-control") ?? "").toLowerCase().split(",")) {
    const [key = "", ...rest] = value.trim().split("="), setting = rest.join("=").replaceAll('"', "");
    if (directives.has(key) && directives.get(key) !== setting) fail("PCR_WEB_HEADERS", "Conflicting cache directives are not release evidence.", { header: "cache-control" });
    directives.set(key, setting);
  }
  return directives;
}
function requireFresh(headers: Pick<Headers, "get">, urlPath: string) {
  const d = cacheDirectives(headers);
  if (d.has("immutable") || (d.has("max-age") && d.get("max-age") !== "0") || (d.has("s-maxage") && d.get("s-maxage") !== "0")
    || !(d.has("no-store") || d.has("no-cache") || (d.get("max-age") === "0" && d.has("must-revalidate")))) {
    fail("PCR_WEB_HEADERS", "Release evidence must not be served from a long-lived cache.", { path: urlPath, header: "cache-control" });
  }
}
function requireRawHeaders(headers: Pick<Headers, "get">) {
  if (String(headers.get("x-content-type-options") ?? "").toLowerCase() !== "nosniff"
    || !/(?:^|[\s,:])noindex(?:$|[\s,])/iu.test(headers.get("x-robots-tag") ?? "")
    || !/^attachment(?:\s*;|\s*$)/iu.test(headers.get("content-disposition") ?? "")) {
    fail("PCR_WEB_HEADERS", "Raw downloads require noindex, nosniff and attachment headers.", { path: RAW_PATH });
  }
  requireFresh(headers, RAW_PATH);
  if (!cacheDirectives(headers).has("must-revalidate")) fail("PCR_WEB_HEADERS", "Raw downloads require must-revalidate.", { path: RAW_PATH, header: "cache-control" });
}

/** Bounded GET-only acceptance; caller retries the whole operation after a partial release. */
export async function verifyLiveWebsite({ origin, identity, counts, probes, fetcher = fetch, timeoutMs = 30_000, maxBytes = 4 * 1024 * 1024 }: LiveWebsiteOptions) {
  const base = originUrl(origin); assertIdentity(identity); assertCounts(counts);
  if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > 120_000
    || !Number.isSafeInteger(maxBytes) || maxBytes < 1 || maxBytes > HARD_MAX_BYTES || typeof fetcher !== "function") {
    fail("PCR_WEB_PROBE_INVALID", "Invalid bounded fetch settings.");
  }
  if (!isRecord(probes) || !Array.isArray(probes.routes) || probes.routes.length !== WEB_PROBE_ROUTES.length) fail("PCR_WEB_PROBE_INVALID", "Sealed catalog and homepage route probes are required.");
  compareIdentity(probes.identity, identity);
  compareVersion({ releaseVersion: identity.version, releaseTag: identity.tag, sourceCommit: identity.sourceCommit,
    sourceFingerprint: identity.sourceFingerprint, counts: probes.counts }, identity, counts);
  const routes = probes.routes.map((probe: unknown, index: number) => { validateProbe(probe, WEB_PROBE_ROUTES[index] ?? ""); return probe; });
  const rawDownload = probes.rawDownload; validateProbe(rawDownload, RAW_PATH);
  const deadline = performance.now() + timeoutMs, checks: { path: string; status: number; bytes?: number; sha256?: string }[] = [];

  const request = async (urlPath: string, { limit = maxBytes, mediaType = null, fresh = false }: { limit?: number; mediaType?: string | null; fresh?: boolean } = {}): Promise<Buffer | null> => {
    const url = new URL(urlPath, base), remaining = Math.ceil(deadline - performance.now());
    if (remaining <= 0) fail("PCR_WEB_TIMEOUT", "Website acceptance exhausted its execution budget.", { path: urlPath }, true);
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined, reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
    const expiry = new Promise<never>((_, reject) => {
      timer = setTimeout(() => { controller.abort(); reject(new WebReleaseError("PCR_WEB_TIMEOUT", "Website acceptance exhausted its execution budget.", { path: urlPath }, true)); }, remaining);
    });
    try {
      return await Promise.race([expiry, (async () => {
        const response = await fetcher(url.href, { method: "GET", redirect: "manual", credentials: "omit",
          headers: { "Cache-Control": "no-cache", Accept: mediaType ?? "*/*" }, signal: controller.signal });
        if (!response || !Number.isInteger(response.status) || !response.headers?.get) fail("PCR_WEB_FETCH_FAILED", "Invalid website response.", { path: urlPath }, true);
        if (response.redirected || (response.url && response.url !== url.href)) fail("PCR_WEB_REDIRECT", "An unexpected website redirect was observed.", { path: urlPath });
        if (response.status >= 300 && response.status < 400) fail("PCR_WEB_REDIRECT", "An unexpected website redirect was observed.", { path: urlPath, status: response.status });
        if (response.status !== 200) fail("PCR_WEB_STATUS", "Website probe did not return HTTP 200.", { path: urlPath, status: response.status }, response.status === 429 || response.status >= 500);
        if (fresh) requireFresh(response.headers, urlPath);
        if (urlPath === RAW_PATH) requireRawHeaders(response.headers);
        if (mediaType && String(response.headers.get("content-type") ?? "").split(";", 1)[0]?.trim().toLowerCase() !== mediaType) {
          fail("PCR_WEB_CONTENT_TYPE", "Website probe has an unexpected media type.", { path: urlPath });
        }
        const length = response.headers.get("content-length");
        if (length !== null && (!/^\d+$/u.test(length) || Number(length) > limit)) fail("PCR_WEB_RESPONSE_TOO_LARGE", "Website response exceeds the bounded probe size.", { path: urlPath, limit });
        if (!response.body?.getReader) fail("PCR_WEB_BODY_INVALID", "Website response has no readable body.", { path: urlPath });
        reader = response.body.getReader();
        const chunks: Buffer[] = []; let bytes = 0;
        for (;;) {
          const next = await reader.read(); if (next.done) break;
          if (!(next.value instanceof Uint8Array)) fail("PCR_WEB_BODY_INVALID", "Website response body is not bytes.", { path: urlPath });
          bytes += next.value.byteLength;
          if (bytes > limit) fail("PCR_WEB_RESPONSE_TOO_LARGE", "Website response exceeds the bounded probe size.", { path: urlPath, limit });
          chunks.push(Buffer.from(next.value));
        }
        const body = Buffer.concat(chunks, bytes);
        checks.push({ path: urlPath, status: response.status, bytes, sha256: sha256(body) });
        return body;
      })()]);
    } catch (error) {
      if (error instanceof WebReleaseError) throw error;
      fail("PCR_WEB_FETCH_FAILED", "Website fetch or response stream failed.", { path: urlPath }, true);
    } finally {
      clearTimeout(timer); controller.abort();
      try { if (reader) Promise.resolve(reader.cancel()).catch(() => {}); } catch { /* no raw transport errors are retained */ }
    }
  };
  const readIdentity = async () => compareIdentity(parseJson(await request("/generated/product-release.json", { limit: Math.min(maxBytes, JSON_MAX_BYTES), mediaType: "application/json", fresh: true }), "PCR_WEB_BODY_INVALID", "Website product identity is not JSON."), identity);
  const readVersion = async () => compareVersion(parseJson(await request("/generated/version.json", { limit: Math.min(maxBytes, JSON_MAX_BYTES), mediaType: "application/json", fresh: true }), "PCR_WEB_BODY_INVALID", "Website version document is not JSON."), identity, counts);
  await readIdentity(); await readVersion();
  const liveRoutes = [...routes, ...routes.filter(probe => ["/zh/", "/en/"].includes(probe.path)).map(probe => ({ ...probe, path: probe.path.slice(0, -1) }))];
  for (const probe of liveRoutes) {
    const bytes = await request(probe.path, { limit: Math.max(maxBytes, probe.bytes), mediaType: "text/html" });
    if (bytes === null || bytes.length !== probe.bytes || sha256(bytes) !== probe.sha256) fail("PCR_WEB_HASH_MISMATCH", "Language route differs from the sealed export.", { path: probe.path });
  }
  const raw = await request(RAW_PATH, { limit: Math.max(maxBytes, rawDownload.bytes) });
  if (raw === null || raw.length !== rawDownload.bytes || sha256(raw) !== rawDownload.sha256) fail("PCR_WEB_HASH_MISMATCH", "Raw download differs from the sealed export.", { path: RAW_PATH });
  // Detect a release cutover while the route/download probes were being inspected.
  await readIdentity(); await readVersion();
  return { verified: true, origin: base.origin, identity: identityFields(identity), counts: { ...counts }, checks };
}
