import {isUnknownRecord} from "../../pcr-core/src/types.ts";
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { matchesPath, verifyHostingContract } from "./hosting-contract.ts";
const rawConfig: unknown = JSON.parse(
  fs.readFileSync(new URL("../../../edgeone.json", import.meta.url), "utf8"),
);
assert.ok(isUnknownRecord(rawConfig)&&Array.isArray(rawConfig.headers)&&rawConfig.headers.every(rule=>isUnknownRecord(rule)&&typeof rule.source==="string"&&Array.isArray(rule.headers)&&rule.headers.every(header=>isUnknownRecord(header)&&typeof header.key==="string"&&typeof header.value==="string"))&&Array.isArray(rawConfig.redirects));
const config=rawConfig as {headers:{source:string;headers:{key:string;value:string}[]}[];redirects:unknown[];outputDirectory:string};
const downloads = [
  { url: "/generated/raw/library/pcrs/domain/category/item/pcr.zh-CN.md" },
  {
    url: "/generated/raw/library/pcrs/a/b/c/releases/1.0.0/manifest.snapshot.yaml",
  },
];
test("production headers cover nested raw sources and executable Worker modules", () => {
  assert.equal(
    matchesPath("/generated/*.mjs", "/generated/search-worker.mjs"),
    true,
  );
  assert.equal(matchesPath("/generated/raw/*", downloads[1]!.url), true);
  assert.doesNotThrow(() => verifyHostingContract(config, downloads));
});
test("product build Node pin cannot replace the provider's qualified preinstalled runtime", () => {
  const product: unknown = JSON.parse(fs.readFileSync(new URL("../../../product-release.json", import.meta.url), "utf8"));
  assert.ok(isUnknownRecord(product));
  assert.equal(product.node, "24.19.0");
  assert.equal(fs.readFileSync(new URL("../../../.nvmrc", import.meta.url), "utf8").trim(), product.node);
  assert.throws(() => verifyHostingContract({ ...config, nodeVersion: product.node }, downloads), /qualified preinstalled Node 24 runtime/u);
  assert.doesNotThrow(() => verifyHostingContract(config, downloads));
});
test("moved download rules, missing module or guide MIME and redirect drift fail the gate", () => {
  for (const mutation of ["raw", "mime", "guide", "redirect", "output"]) {
    const broken = structuredClone(config);
    if (mutation === "raw") broken.headers.find(rule => rule.source === "/generated/raw/*")!.source = "/downloads/*";
    if (mutation === "mime" || mutation === "guide") {
      const rule = broken.headers.find(rule => rule.source === (mutation === "mime" ? "/generated/*.mjs" : "/getting-started*.md"))!;
      rule.headers = rule.headers.filter(
        (header) => header.key !== "Content-Type",
      );
    }
    if (mutation === "redirect") broken.redirects = [{ source: "/zh/", destination: "/", statusCode: 301 }];
    if (mutation === "output") broken.outputDirectory = "out";
    assert.throws(
      () => verifyHostingContract(broken, downloads),
      mutation,
    );
  }
});
test("localized Chinese home remains explicit, including broad hosting rules", () => {
  for (const source of ["/zh", "/zh/", "/*"])
    assert.throws(() => verifyHostingContract({ ...config, redirects: [{ source, destination: "/", statusCode: 301 }] }, downloads), /Explicit Chinese-home/u);
});
