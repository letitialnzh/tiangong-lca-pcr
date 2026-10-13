import {isUnknownRecord,unknownField} from "../../pcr-core/src/types.ts";
import assert from "node:assert/strict";
import { gettingStartedGuides } from "../lib/getting-started.ts";
/** EdgeOne documents one URL-path wildcard (including nested paths), with optional suffix. */
export function matchesPath(pattern: string, pathname: string) {
  if (
    !pattern.startsWith("/") ||
    (pattern.match(/\*/gu) ?? []).length > 1 ||
    pattern.includes(":")
  )
    throw new Error("Unsupported hosting path pattern: " + pattern);
  const escaped = pattern
    .split("*")
    .map((part) => part.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&"))
    .join(".*");
  return new RegExp("^" + escaped + "$", "u").test(pathname);
}
export function headersFor(config: unknown, pathname: string, { firstMatch = false } = {}) {
  const result: Record<string,string> = {};
  const rules=unknownField(config,"headers") ?? [];
  if(!Array.isArray(rules))throw new TypeError("Hosting headers must be an array");
  for (const rule of rules) {
    if(!isUnknownRecord(rule)||typeof rule.source!=="string"||!Array.isArray(rule.headers))throw new Error("Invalid hosting header rule");
    if (!matchesPath(rule.source, pathname)) continue;
    for (const header of rule.headers){
      if(!isUnknownRecord(header)||typeof header.key!=="string"||typeof header.value!=="string")throw new Error("Invalid hosting header");
      result[header.key.toLowerCase()] = header.value;
    }
    if (firstMatch) break;
  }
  return result;
}
export function verifyHostingContract(config: unknown, downloads: readonly {url:string}[]) {
  assert.equal(unknownField(config,"outputDirectory"), "packages/pcr-docs/out");
  assert.equal(unknownField(config,"installCommand"), "node --version");
  assert.equal(unknownField(config,"buildCommand"), "node builder/scripts/product-web-materialize.ts");
  // The provider imports sealed bytes; it does not run the product build toolchain.
  assert.equal(unknownField(config,"nodeVersion"), "24.18.0", "EdgeOne importer requires its qualified preinstalled Node 24 runtime");
  const redirects = unknownField(config, "redirects");
  assert.ok(Array.isArray(redirects), "Hosting redirects must be an array");
  for (const source of ["/zh", "/zh/"])
    assert.ok(!redirects.some((rule) => isUnknownRecord(rule) && typeof rule.source === "string"
      && matchesPath(rule.source, source)), "Explicit Chinese-home URL must remain readable: " + source);
  // Specific rules carry their complete required headers, avoiding reliance on overlap precedence.
  for (const firstMatch of [false, true]) {
    for (const guide of gettingStartedGuides) {
    const guideHeaders = headersFor(config, guide.rawUrl, { firstMatch });
    assert.equal(guideHeaders["content-type"], "text/markdown; charset=utf-8");
    assert.equal(guideHeaders["content-disposition"], "inline");
    assert.equal(guideHeaders["x-content-type-options"], "nosniff");
    assert.equal(guideHeaders["cache-control"], "public, max-age=0, must-revalidate");
    }
    for (const raw of downloads) {
      const headers = headersFor(config, raw.url, { firstMatch });
      assert.equal(
        headers["x-robots-tag"],
        "noindex",
        "Raw artifact noindex: " + raw.url,
      );
      assert.equal(
        headers["content-disposition"],
        "attachment",
        "Raw artifact attachment: " + raw.url,
      );
    }
    for (const file of [
      "search-worker.mjs",
      "search-engine.mjs",
      "search-terms.mjs",
      "search-wire.mjs",
    ]) {
      const headers = headersFor(config, "/generated/" + file, { firstMatch });
      assert.match(
        headers["content-type"] ?? "",
        /^text\/javascript/u,
        "Worker module MIME",
      );
      assert.equal(headers["x-robots-tag"], "noindex");
    }
    assert.equal(
      headersFor(config, "/generated/data/example.json", { firstMatch })[
        "x-robots-tag"
      ],
      "noindex",
    );
  }
}
