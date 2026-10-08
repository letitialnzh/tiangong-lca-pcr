import {parseSiteManifest} from "../lib/site-contracts.ts";
import {parseGenerationReport} from "./generation-report.ts";
import {isUnknownRecord,unknownField,type StructuredProjection} from "../../pcr-core/src/types.ts";
import {assertStructured} from "../../pcr-core/src/contracts.ts";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseHTML, DOMParser } from "linkedom";
import { verifyHostingContract } from "./hosting-contract.ts";
import { publicHomeLanguages, canonicalHome } from "../lib/home-policy.ts";
import {
  inventoryMarkdown,
  verifyRenderedBlocks,
  sha256,
  normalizeText,
} from "./markdown.ts";
import { SUMMARY_LIMIT } from "./summaries.ts";
import { summarizeExportFiles } from "./export-size.ts";
import { readProductIdentity } from "../../../builder/scripts/product-identity.ts";
const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."),
  root = path.resolve(app, "../.."),
  out = path.join(app, "out");
const manifest = parseSiteManifest(
    fs.readFileSync(path.join(app, ".generated/site.json"), "utf8"),
  ),
  report = parseGenerationReport(
    fs.readFileSync(path.join(app, ".generated/report.json"), "utf8"),
  );
verifyHostingContract(
  JSON.parse(fs.readFileSync(path.join(root, "edgeone.json"), "utf8")),
  report.downloads,
);
const parsed = new Map<string,Document>();
const fileFor = (url: string) =>
  path.join(
    out,
    decodeURIComponent(new URL(url, manifest.origin).pathname),
    "index.html",
  );
function readPage(url: string) {
  if (!parsed.has(url)) {
    const file = fileFor(url);
    if (!fs.existsSync(file)) throw new Error("Missing exported page " + url);
    parsed.set(url, parseHTML(fs.readFileSync(file, "utf8")).document);
  }
  return parsed.get(url)!;
}
function requireThat(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}
requireThat(
  fs.readFileSync(path.join(out, "getting-started.md")).equals(
    fs.readFileSync(path.join(app, "public/getting-started.md")),
  ),
  "Agent getting-started guide must be exported byte-for-byte",
);
if (fs.existsSync(path.join(root, "product-release.json"))) {
  const expected = readProductIdentity(root, { requireClean: false });
  const rawActual: unknown = JSON.parse(fs.readFileSync(path.join(out, "generated/product-release.json"), "utf8"));
  const rawVersion: unknown = JSON.parse(fs.readFileSync(path.join(out, "generated/version.json"), "utf8"));
  requireThat(isUnknownRecord(rawActual)&&isUnknownRecord(rawVersion),"Invalid exported product metadata");
  const actual=rawActual,version=rawVersion;
  requireThat(
    Object.keys(expected).length === Object.keys(actual).length &&
      Object.entries(expected).every(([key, value]) => actual[key] === value),
    "Exported product release identity does not match the source snapshot",
  );
  requireThat(
    version.sourceCommit === expected.sourceCommit &&
      version.releaseVersion === expected.version &&
      version.releaseTag === expected.tag &&
      version.sourceFingerprint === expected.sourceFingerprint,
    "Exported version metadata does not match the product release identity",
  );
}
for (const raw of report.downloads) {
  const bytes = fs.readFileSync(path.join(out, raw.url));
  requireThat(sha256(bytes) === raw.sha256, "Raw download changed " + raw.url);
  requireThat(
    bytes.equals(fs.readFileSync(path.join(root, raw.sourcePath))),
    "Raw download not byte-identical " + raw.url,
  );
}
for (const source of report.documents) {
  const original = fs.readFileSync(path.join(root, source.sourcePath), "utf8");
  const inventory = inventoryMarkdown(original, source.sourcePath).nodes;
  const rawMapping: unknown = JSON.parse(
    fs.readFileSync(path.join(app, ".generated", source.inventoryPath), "utf8"),
  );
  const rawTargets=unknownField(rawMapping,"anchorTargets");
  requireThat(isUnknownRecord(rawTargets)&&Object.values(rawTargets).every(value=>typeof value === "string"),"Invalid source anchor mapping");
  const anchorTargets=rawTargets as Record<string,string>;
  const resolveLink = (value: string) => {
    if (value.startsWith("#"))
      return anchorTargets[decodeURIComponent(value.slice(1))]!;
    return (
      report.links.find(
        (link) => link.source === source.sourcePath && link.original === value,
      )?.target ?? value
    );
  };
  const pages = manifest.pages.filter(
    (p) => p.sourcePath === source.sourcePath,
  );
  const allIds = pages.flatMap((p) => p.sourceNodeIds);
  const actualOrder: string[] = [];
  const orderedSource = inventory
    .filter((node) => !node.isFootnote)
    .map((node) => node.id);
  requireThat(
    allIds.length === inventory.length &&
      new Set(allIds).size === inventory.length,
    "Source coverage mismatch " + source.sourcePath,
  );
  for (const page of pages) {
    const document = readPage(page.url);
    verifyRenderedBlocks(document, inventory, page.sourceNodeIds, {
      verifyLinks: true,
      resolveLink,
    });
    const renderedIds = [
      ...document.querySelectorAll("[data-source-node]"),
    ].map((node) => node.getAttribute("data-source-node"));
    requireThat(
      renderedIds.length === page.sourceNodeIds.length &&
        renderedIds.every((id) => id!==null&&page.sourceNodeIds.includes(id)),
      "Unexpected source marker " + page.url,
    );
    actualOrder.push(...renderedIds.filter((id):id is string=>id!==null&&orderedSource.includes(id)));
    requireThat(
      document.querySelector(
        '[data-source-document="' + source.sourcePath + '"]',
      ),
      "Missing document boundary " + page.url,
    );
    parsed.delete(page.url);
  }
  requireThat(
    actualOrder.join("\n") === orderedSource.join("\n"),
    "Source block order changed " + source.sourcePath,
  );
}
const publicHomes = publicHomeLanguages(manifest);
const homeAlternates = Object.fromEntries(
  publicHomes.map((language) => [
    language.code,
    canonicalHome(manifest, language),
  ]),
);
for (const route of [
  "/",
  ...manifest.languages.map((language) => "/" + language.route + "/"),
]) {
  const language =
    manifest.languages.find(
      (language) => "/" + language.route + "/" === route,
    ) ??
    manifest.languages.find(
      (language) => language.route === manifest.defaultLocale,
    );
  requireThat(language,"Missing generated home language");
  const document = readPage(route),
    canonical = canonicalHome(manifest, language);
  requireThat(
    document.documentElement.lang === language.code,
    "Wrong home language " + route,
  );
  requireThat(
    document.querySelector('link[rel="canonical"]')?.getAttribute("href") ===
      canonical,
    "Wrong home canonical " + route,
  );
  const indexable = publicHomes.some((home) => home.code === language.code);
  if (!indexable)
    requireThat(
      document
        .querySelector('meta[name="robots"]')
        ?.getAttribute("content")
        ?.includes("noindex"),
      "Unavailable locale home must be noindex " + route,
    );
  for (const [code, url] of Object.entries(
    indexable ? { ...homeAlternates, "x-default": manifest.origin + "/" } : {},
  )) {
    const alternate = [
      ...document.querySelectorAll('link[rel="alternate"]'),
    ].find(
      (link) =>
        (link.getAttribute("hreflang") ?? link.getAttribute("hrefLang")) ===
        code,
    );
    requireThat(
      alternate?.getAttribute("href") === url,
      "Wrong home hreflang " + route + " " + code,
    );
  }
  const expectedVerification = process.env.PCR_GOOGLE_SITE_VERIFICATION;
  if (expectedVerification)
    requireThat(
      document
        .querySelector('meta[name="google-site-verification"]')
        ?.getAttribute("content") === expectedVerification,
      "Missing configured Search Console marker " + route,
    );
  const expectedBaiduVerification = process.env.PCR_BAIDU_SITE_VERIFICATION?.trim();
  const actualBaiduVerification = document
    .querySelector('meta[name="baidu-site-verification"]')
    ?.getAttribute("content");
  requireThat(
    actualBaiduVerification === (expectedBaiduVerification || undefined),
    "Baidu ownership marker must match its explicit build configuration " + route,
  );
  parsed.delete(route);
}
const notFoundHtml = fs.readFileSync(path.join(out, "404.html"), "utf8");
const notFound = parseHTML(notFoundHtml).document;
requireThat(
  /^<!doctype html>/iu.test(notFoundHtml),
  "404 needs an HTML5 doctype",
);
requireThat(
  (notFoundHtml.match(/<html(?:\s|>)/giu) ?? []).length === 1 &&
    (notFoundHtml.match(/<body(?:\s|>)/giu) ?? []).length === 1,
  "404 needs one complete document shell",
);
requireThat(
  notFound.documentElement.lang &&
    notFound.querySelector("h1")?.textContent.trim(),
  "404 needs language and a heading",
);
requireThat(
  notFound
    .querySelector('meta[name="robots"]')
    ?.getAttribute("content")
    ?.includes("noindex"),
  "404 must be noindex",
);
for (const page of manifest.pages) {
  const document = readPage(page.url);
  requireThat(
    document.querySelectorAll("h1").length === 1,
    "Expected one H1 " + page.url,
  );
  requireThat(
    document.documentElement.lang.toLowerCase() === page.language.toLowerCase(),
    "Wrong HTML language " + page.url + ": " + document.documentElement.lang,
  );
  for (const heading of page.toc) {
    requireThat(
      heading.url.startsWith("#") && document.getElementById(decodeURIComponent(heading.url.slice(1))),
      "Missing table-of-contents target " + page.url + " " + heading.url,
    );
  }
  if (page.kind === "catalog" && page.slugs.length >= 2) {
    const expected = manifest.records
      .filter(
        (record) =>
          record.urls[page.language] &&
          page.slugs.slice(1).every((slug, index) => record.slug[index] === slug),
      )
      .map((record) => record.urls[page.language])
      .sort();
    const actual = [...document.querySelectorAll(".pcr-catalog-list a[href]")]
      .map((link) => link.getAttribute("href"))
      .sort();
    requireThat(
      actual.length === expected.length && actual.every((url, index) => url === expected[index]),
      "Catalog record link set differs " + page.url,
    );
  }
  if (page.kind === "pcr") {
    const graphs = [...document.querySelectorAll('script[type="application/ld+json"]')]
      .map((script):unknown => JSON.parse(script.textContent??""));
    const breadcrumb = graphs
      .flatMap((graph):unknown[] => {const nested=unknownField(graph,"@graph");return Array.isArray(nested)?nested:[graph];})
      .find((node) => unknownField(node,"@type") === "BreadcrumbList");
    requireThat(
      Array.isArray(unknownField(breadcrumb,"itemListElement")) && (unknownField(breadcrumb,"itemListElement") as unknown[]).every(item=>typeof unknownField(item,"name")==="string"&&String(unknownField(item,"name")).trim()),
      "Empty record breadcrumb name " + page.url,
    );
  }
  requireThat(
    document.querySelector('link[rel="canonical"]')?.getAttribute("href") ===
      page.canonical,
    "Wrong canonical " + page.url,
  );
  for (const [language, url] of Object.entries(page.alternates)) {
    requireThat(
      [...document.querySelectorAll('link[rel="alternate"]')]
        .find(
          (link) =>
            (link.getAttribute("hreflang") ?? link.getAttribute("hrefLang")) ===
            language,
        )
        ?.getAttribute("href") === url,
      "Missing hreflang " + page.url + " " + language,
    );
    const counterpart = manifest.pages.find((p) => p.canonical === url);
    requireThat(
      counterpart?.alternates[page.language] === page.canonical,
      "Nonreciprocal hreflang " + page.url,
    );
  }
  if (page.pcrId && (!page.part || page.part.index === 0)) {
    const record = page.recordVersion
      ? manifest.historicalRecords!.find(
          (record) =>
            record.id === page.pcrId && record.version === page.recordVersion,
        )
      : manifest.records.find((record) => record.id === page.pcrId);
    requireThat(record,"Missing PCR record metadata");
    const rawData: unknown = JSON.parse(
      fs.readFileSync(path.join(app, ".generated", record.dataPath), "utf8"),
    );
    const rawStructured=unknownField(rawData,"structured");
    assertStructured(rawStructured);
    const data=rawStructured as StructuredProjection;
    for (const [family, rules] of Object.entries({
      system_boundary: data.system_boundary.rules,
      allocation_rules: data.allocation_rules,
      validation_rules: data.validation_rules,
    })) {
      const rendered = document.querySelector(`[data-rule-family="${family}"]`);
      requireThat(
        rendered?.querySelectorAll("[data-rule-id]").length === rules.length,
        "Structured rule count differs " + page.url + " " + family,
      );
      for (const rule of rules) {
        const row = [...rendered!.querySelectorAll("[data-rule-id]")].find(
          (row) => row.getAttribute("data-rule-id") === rule.rule_id,
        );
        requireThat(
          row &&
            normalizeText(row.children[2]!.textContent) ===
              normalizeText(rule.rule),
          "Structured rule text differs " + page.url + " " + rule.rule_id,
        );
      }
    }
  }
  if (!page.indexable)
    requireThat(
      document
        .querySelector('meta[name="robots"]')
        ?.getAttribute("content")
        ?.includes("noindex"),
      "Missing noindex " + page.url,
    );
  const description = document
    .querySelector('meta[name="description"]')
    ?.getAttribute("content");
  requireThat(description, "Missing description " + page.url);
  if (description)
    requireThat(
      [...description].length <= SUMMARY_LIMIT,
      "Description exceeds " + SUMMARY_LIMIT + " code points " + page.url,
    );
  for (const node of document.querySelectorAll("a[href]")) {
    const value = node.getAttribute("href");
    if (!value || !value.startsWith("/") || value.startsWith("//")) continue;
    const target = new URL(value, manifest.origin);
    if (target.pathname.startsWith("/generated/")) {
      requireThat(
        fs.existsSync(path.join(out, decodeURIComponent(target.pathname))),
        "Broken download " + value,
      );
      continue;
    }
    requireThat(
      fs.existsSync(fileFor(target.href)),
      "Broken internal route " + page.url + " -> " + value,
    );
    if (target.hash) {
      const other = readPage(target.pathname);
      requireThat(
        other.getElementById(decodeURIComponent(target.hash.slice(1))),
        "Broken fragment " + page.url + " -> " + value,
      );
    }
  }
  // Release each page DOM once source verification has finished; avoid holding the full corpus.
  parsed.delete(page.url);
}
const sitemap = new DOMParser().parseFromString(
  fs.readFileSync(path.join(out, "sitemap.xml"), "utf8"),
  "text/xml",
);
const locations = [...sitemap.querySelectorAll("url > loc")].map(
  (n) => n.textContent,
);
for (const language of manifest.languages)
  requireThat(
    locations.includes(canonicalHome(manifest, language)) ===
      publicHomes.some((home) => home.code === language.code),
    "Home sitemap availability differs " + language.code,
  );
const sitemapDates = new Map(
  [...sitemap.querySelectorAll("url")].map((node) => [
    node.querySelector("loc")?.textContent,
    node.querySelector("lastmod")?.textContent,
  ]),
);
for (const page of manifest.pages.filter((page) => page.indexable))
  requireThat(
    new Date(sitemapDates.get(page.canonical)!).toISOString() ===
      new Date(page.lastModified ?? manifest.sourceDate).toISOString(),
    "Sitemap modification date differs " + page.url,
  );
requireThat(
  new Set(locations).size === locations.length,
  "Duplicate sitemap URL",
);
for (const page of manifest.pages)
  requireThat(
    locations.includes(page.canonical) === page.indexable,
    "Sitemap indexing mismatch " + page.url,
  );
requireThat(
  !locations.includes(manifest.origin + "/zh/"),
  "Duplicate Chinese home in sitemap",
);
requireThat(fs.existsSync(path.join(out, "404.html")), "Missing static 404");
const files: {path:string;bytes:number}[] = [];
function walk(dir: string):void {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, e.name);
    if (e.isDirectory()) walk(file);
    else if (e.isFile())
      files.push({
        path: path.relative(out, file),
        bytes: fs.statSync(file).size,
      });
    else throw new Error("Nonregular exported artifact " + file);
  }
}
walk(out);
// Keep measured growth visible even when a provider file-count or per-file gate fails.
// Shared account storage requires a deployment-time capacity check, rather than a fixed
// per-export byte ceiling here. Native Next navigation payloads remain part of the export.
const exportSize = summarizeExportFiles(files);
const sizeEvidence = { sourceCommit: manifest.sourceCommit, ...exportSize };
fs.writeFileSync(
  path.join(app, ".generated/export-size.json"),
  JSON.stringify(sizeEvidence),
);
console.log(JSON.stringify({ event: "export-size", ...sizeEvidence }));
requireThat(
  !files.some(
    (file) =>
      file.path.startsWith("_next/static/") && file.path.endsWith(".ts"),
  ),
  "Uncompiled TypeScript browser asset",
);
requireThat(files.length < 20000, "EdgeOne file count exceeded");
requireThat(
  files.every((f) => f.bytes < 25_000_000),
  "EdgeOne single-file budget exceeded",
);
const result = {
  pcrs: manifest.records.length,
  pages: manifest.pages.length,
  sourceDocuments: report.documents.length,
  sourceDownloads: report.downloads.length,
  ...sizeEvidence,
};
fs.writeFileSync(
  path.join(app, ".generated/verification.json"),
  JSON.stringify(result),
);
console.log(JSON.stringify(result));
