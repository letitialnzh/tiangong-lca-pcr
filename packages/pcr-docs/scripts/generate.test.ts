import {parseSiteManifest} from "../lib/site-contracts.ts";
import {searchTerms} from "../lib/search-terms.ts";
import {Index} from "flexsearch";
import {isUnknownRecord} from "../../pcr-core/src/types.ts";
import {assertManifest} from "../../../builder/lib/schema-contracts.ts";
import type {BuilderManifest} from "../../../builder/lib/types.ts";
import type {Download} from "../lib/types.ts";
function checkedManifest(text:string):BuilderManifest {const raw=parseYaml(text);assertManifest(raw);assert.ok(isUnknownRecord(raw));return raw as BuilderManifest;}
function parseReport(bytes:Uint8Array):{downloads:(Download & {sourcePath:string})[];summaries:Record<string,number>} {
 const raw:unknown=JSON.parse(new TextDecoder().decode(bytes));assert.ok(isUnknownRecord(raw)&&Array.isArray(raw.downloads)&&raw.downloads.every(file=>isUnknownRecord(file)&&['name','url','sha256','sourcePath'].every(key=>typeof file[key]==='string')&&typeof file.bytes==='number')&&isUnknownRecord(raw.summaries)&&Object.values(raw.summaries).every(value=>typeof value==='number'));
 return raw as {downloads:(Download & {sourcePath:string})[];summaries:Record<string,number>};
}
import test from "node:test";
import {
  recordPages,
  recordNavigationNode,
} from "../lib/record-navigation.ts";
import { publicHomeLanguages } from "../lib/home-policy.ts";
import { createDocumentSource } from "../lib/content-source.ts";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { createAuthoringPcr } from "../../../builder/lib/pcr-authoring-fixture.ts";
import {
  lifecycle,
  publish,
  revise,
  syncStructured,
} from "../../../builder/lib/manifest-lifecycle.ts";
import { parseYaml, renderYaml } from "../../pcr-core/src/yaml-lite.ts";
const script = fileURLToPath(new URL("./generate.ts", import.meta.url));
const hash = (bytes: string | Uint8Array) =>
  "sha256:" + createHash("sha256").update(bytes).digest("hex");
test("real generator preserves multilingual released snapshots and excludes open revision bodies", () => {
  const temporary = fs.mkdtempSync(path.join(tmpdir(), "pcr-site-history-")),
    root = path.join(temporary, "source"),
    output = path.join(temporary, "output");
  fs.mkdirSync(root);
  const git = (...args: string[]) =>
    execFileSync("git", args, { cwd: root, stdio: "pipe" });
  try {
    const fixture = createAuthoringPcr(root, {
      schemaVersion: 2,
      languages: ["en-US", "zh-CN", "de-DE"],
      titles: {
        "en-US": "Synthetic wheat seed",
        "zh-CN": "合成测试小麦种子",
        "de-DE": "Synthetische Testdaten",
      },
      optionalTranslations: { "de-DE": "reviewed" },
    });
    lifecycle({
      root,
      pcr: fixture.libraryPath,
      status: "active",
      "content-maturity": "reviewed_methodology",
      translation: "zh-CN=reviewed",
    });
    publish({ root, pcr: fixture.libraryPath, version: "1.0.0" });
    revise({ root, pcr: fixture.libraryPath, version: "1.1.0" });
    fs.appendFileSync(
      path.join(fixture.pcrDir, "revision/pcr.en-US.md"),
      "\nPUBLISHED_SECOND_VERSION\n",
    );
    syncStructured({ root, pcr: fixture.libraryPath, workspace: "revision" });
    lifecycle({
      root,
      pcr: fixture.libraryPath,
      workspace: "revision",
      translation: "de-DE=aligned",
    });
    lifecycle({
      root,
      pcr: fixture.libraryPath,
      workspace: "revision",
      status: "active",
      "content-maturity": "reviewed_methodology",
      translation: "zh-CN=reviewed",
    });
    lifecycle({
      root,
      pcr: fixture.libraryPath,
      workspace: "revision",
      translation: "de-DE=reviewed",
    });
    const revisionManifest = path.join(
      fixture.pcrDir,
      "revision/manifest.next.yaml",
    );
    const nextManifest = checkedManifest(fs.readFileSync(revisionManifest, "utf8"));
    nextManifest.languages.available = ["en-US", "zh-CN"];
    delete nextManifest.title["de-DE"];
    delete nextManifest.translation_status["de-DE"];
    fs.writeFileSync(revisionManifest, renderYaml(nextManifest));
    fs.rmSync(path.join(fixture.pcrDir, "revision/pcr.de-DE.md"));
    publish({ root, pcr: fixture.libraryPath, workspace: "revision" });
    revise({ root, pcr: fixture.libraryPath, version: "1.2.0" });
    fs.appendFileSync(
      path.join(fixture.pcrDir, "revision/pcr.en-US.md"),
      "\nUNPUBLISHED_TEST_MARKER\n",
    );
    // Restore revision projection consistency while retaining its private marker.
    syncStructured({ root, pcr: fixture.libraryPath, workspace: "revision" });
    const registryPath = "classifications/aliases/pcr-id-aliases.yaml";
    const registry = renderYaml({
      schema_version: 1,
      registry_kind: "legacy-pcr-id-aliases",
      status: "current",
      aliases: [],
    });
    fs.mkdirSync(path.dirname(path.join(root, registryPath)), {
      recursive: true,
    });
    fs.writeFileSync(path.join(root, registryPath), registry);
    fs.writeFileSync(
      path.join(root, "library/catalog.yaml"),
      renderYaml({
        schema_version: 1,
        catalog_status: "current",
        pcr_index: "library/indexes/pcr-index.yaml",
        classification_mappings: [],
        pcr_id_aliases: {
          path: registryPath,
          hash_mode: "exact_bytes",
          sha256: hash(registry),
          entry_count: 0,
        },
      }),
    );
    fs.mkdirSync(path.join(root, "library/indexes"));
    fs.writeFileSync(
      path.join(root, "library/indexes/pcr-index.yaml"),
      renderYaml({
        schema_version: 1,
        index_kind: "tiangong-pcr-material-catalog",
        status: "current",
        summary: { total: 1 },
        pcrs: [
          { id: "pcr.agriculture.crops.wheat-seed", path: fixture.libraryPath },
        ],
      }),
    );
    const guidePath = "packages/pcr-docs/public/getting-started.md";
    fs.mkdirSync(path.dirname(path.join(root, guidePath)), { recursive: true });
    fs.copyFileSync(new URL("../public/getting-started.md", import.meta.url), path.join(root, guidePath));
    fs.copyFileSync(new URL("../public/getting-started.zh-CN.md", import.meta.url), path.join(root, "packages/pcr-docs/public/getting-started.zh-CN.md"));
    git("init", "-q", "-b", "main");
    git("add", "-A");
    git(
      "-c",
      "user.name=PCR Test",
      "-c",
      "user.email=pcr-test@example.invalid",
      "commit",
      "-qm",
      "Synthetic document history",
    );
    const run = () =>
      spawnSync(
        process.execPath,
        [script, "--source-root", root, "--output-root", output],
        { encoding: "utf8", maxBuffer: 4 * 1024 * 1024 },
      );
    let result = run();
    assert.equal(result.status, 0, result.stderr);
    const site = parseSiteManifest(
      fs.readFileSync(path.join(output, ".generated/site.json")),
    );
    const guides = site.pages.filter(page => page.kind === "guide");
    assert.equal(guides.length, 2);
    const guide = guides.find(page => page.language === "en-US")!;
    const chineseGuide = guides.find(page => page.language === "zh-CN")!;
    assert.equal(chineseGuide.url, "/zh/docs/getting-started/");
    assert.equal(chineseGuide.sourceSha256, hash(fs.readFileSync(path.join(root, "packages/pcr-docs/public/getting-started.zh-CN.md"))));
    assert.match(fs.readFileSync(path.join(output, ".generated", chineseGuide.htmlPath!), "utf8"), /创建.*LCA 数据/);
    assert.equal(guide.url, "/en/docs/getting-started/");
    assert.equal(guide.language, "en-US");
    assert.equal(guide.sourcePath, guidePath);
    assert.equal(guide.sourceSha256, hash(fs.readFileSync(path.join(root, guidePath))));
    assert.deepEqual(guide.alternates, { "en-US": site.origin + guide.url, "zh-CN": site.origin + chineseGuide.url });
    assert.deepEqual(chineseGuide.alternates, guide.alternates);
    const guideHtml = fs.readFileSync(path.join(output, ".generated", guide.htmlPath!), "utf8");
    assert.match(guideHtml, /help me create LCA data for/);
    assert.match(guideHtml, /id="pcr-fully-offline-use"/);
    assert.equal(site.records.length, 1);
    assert.equal(site.historicalRecords!.length, 2);
    assert.equal(site.historicalRecords![0]!.version, "1.0.0");
    assert.equal(
      site.historicalRecords![0]!.title["de-DE"],
      "Synthetische Testdaten",
    );
    assert.ok(
      site.pages.some(
        (page) => page.language === "de-DE" && page.recordVersion === "1.0.0",
      ),
    );
    assert.ok(site.records[0]!.versions![0]!.urls["de-DE"]);
    for (const record of [site.records[0]!, ...site.historicalRecords!])
      assert.deepEqual(
        record.versions!.map((item) => item.version),
        ["1.0.0", "1.1.0"],
      );
    const source = createDocumentSource(site);
    assert.deepEqual(
      publicHomeLanguages(site).map((language) => language.code),
      ["zh-CN", "en-US"],
    );
    for (const language of ["en-US", "zh-CN", "de-DE"]) {
      const search: unknown = JSON.parse(fs.readFileSync(path.join(output, "public/generated/search", language, "manifest.json"), "utf8"));
      assert.ok(isUnknownRecord(search));
      assert.equal(search.schemaVersion, 2, "new indexes use native JSON export arrays");
      assert.equal(search.language, language);
      assert.ok(Array.isArray(search.shards) && search.shards.length > 0);
      for (const shard of search.shards) {
        assert.ok(isUnknownRecord(shard) && typeof shard.url === "string");
        const data: unknown = JSON.parse(fs.readFileSync(path.join(output, "public", shard.url), "utf8"));
        assert.ok(isUnknownRecord(data) && isUnknownRecord(data.entries));
        assert.ok(Object.values(data.entries).length > 0);
        assert.ok(Object.values(data.entries).every(Array.isArray), "exports must not be nested JSON strings");
      }
      const currentPages = recordPages(site, site.records[0]!, language);
      assert.equal(currentPages.length, language === "de-DE" ? 0 : 1);
      assert.ok(currentPages.every((page) => page.recordVersion === undefined));
      for (const historical of site.historicalRecords!) {
        const pages = recordPages(site, historical, language);
        assert.equal(
          pages.length,
          language === "de-DE" && historical.version === "1.1.0" ? 0 : 1,
        );
        for (const page of pages) {
          assert.equal(page.recordVersion, historical.version);
          assert.equal(
            source.getPage(page.slugs, page.locale)?.data.doc.key,
            page.key,
          );
        }
        if (pages.length) {
          const sidebar = recordNavigationNode(site, historical, language, {
            title: historical.title[language]!,
            url: historical.urls[language]!,
          });
          const urls =
            sidebar.type === "page"
              ? [sidebar.url]
              : sidebar.type === "folder" ? sidebar.children.map((page) => page.type === "page" ? page.url : undefined) : [];
          assert.deepEqual(
            urls,
            pages.map((page) => page.url),
            "the rendered sidebar must use only this historical version",
          );
        }
      }
    }
    assert.equal(
      source.getPage(["pcr", "agriculture", "crops", "wheat-seed"], "de-de"),
      undefined,
      "no fake current German fallback",
    );
    const germanHistory = site.pages.find(
      (page) => page.language === "de-DE" && page.recordVersion === "1.0.0",
    );
    assert.ok(germanHistory);
    assert.equal(germanHistory.currentLanguage, "en-US");
    assert.equal(germanHistory.currentUrl, site.records[0]!.urls["en-US"]);
    assert.ok(
      site.pages
        .filter((page) => page.kind === "catalog" && page.language === "de-DE")
        .every((page) => !page.indexable),
    );
    const report = parseReport(
      fs.readFileSync(path.join(output, ".generated/report.json")),
    );
    const searchDirectory = path.join(output, "public/generated/search/en-US");
    let searchHits = 0;
    for (const name of fs.readdirSync(searchDirectory).filter(name => name.startsWith("shard-"))) {
      const shard: unknown = JSON.parse(fs.readFileSync(path.join(searchDirectory, name), "utf8"));
      assert.ok(isUnknownRecord(shard));
      const index = new Index({tokenize: "strict", encode: (value: unknown) => searchTerms(value, "en-US")});
      assert.ok(isUnknownRecord(shard.entries));
      for (const [key, payload] of Object.entries(shard.entries)) {
        assert.ok(Array.isArray(payload));
        index.import(key, JSON.stringify(payload));
      }
      searchHits += index.search("Synthetic wheat seed", {limit: 30}).length;
      assert.deepEqual(index.search("UNPUBLISHED_TEST_MARKER", {limit: 30}), []);
    }
    assert.ok(searchHits > 0, "Actual generated compact shards must remain searchable");
    assert.ok(
      report.downloads.some((file) => file.name === "release-history.yaml"),
    );
    for (const file of report.downloads) {
      assert.ok(!file.sourcePath.includes("/revision/"));
      assert.deepEqual(
        fs.readFileSync(path.join(output, "public", file.url)),
        fs.readFileSync(path.join(root, file.sourcePath)),
      );
    }
    for (const page of site.pages)
      assert.ok(
        !fs
          .readFileSync(path.join(output, ".generated", page.htmlPath!), "utf8")
          .includes("UNPUBLISHED_TEST_MARKER"),
      );
    const digest = () => {
      const files: Record<string,string> = {};
      const walk = (directory: string):void => {
        for (const entry of fs.readdirSync(directory, {
          withFileTypes: true,
        })) {
          const file = path.join(directory, entry.name);
          if (entry.isDirectory()) walk(file);
          else if (path.basename(file) !== "report.json")
            files[path.relative(output, file)] = hash(fs.readFileSync(file));
        }
      };
      walk(output);
      return files;
    };
    const before = digest();
    result = run();
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(
      digest(),
      before,
      "same pinned source generates byte-identical content and indexes",
    );
    assert.equal(
      git("status", "--porcelain").toString().trim(),
      "",
      "generator must not modify source",
    );
    const committedSite = fs.readFileSync(
      path.join(output, ".generated/site.json"),
    );
    fs.rmSync(path.join(fixture.pcrDir, "pcr.zh-CN.md"));
    git("add", "-A");
    git(
      "-c",
      "user.name=PCR Test",
      "-c",
      "user.email=pcr-test@example.invalid",
      "commit",
      "-qm",
      "Missing required language negative fixture",
    );
    result = run();
    assert.notEqual(result.status, 0);
    assert.deepEqual(
      fs.readFileSync(path.join(output, ".generated/site.json")),
      committedSite,
      "failed generation preserves last verified output",
    );
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
});

test("metadata summaries describe the page they belong to, and report title-only residuals", () => {
  const temporary = fs.mkdtempSync(path.join(tmpdir(), "pcr-site-summaries-")),
    root = path.join(temporary, "source"),
    output = path.join(temporary, "output");
  fs.mkdirSync(root);
  const git = (...args: string[]) => execFileSync("git", args, { cwd: root, stdio: "pipe" });
  try {
    const fixture = createAuthoringPcr(root, {
      schemaVersion: 2,
      languages: ["en-US", "zh-CN"],
      titles: { "en-US": "Synthetic wheat seed", "zh-CN": "合成测试小麦种子" },
    });
    lifecycle({
      root,
      pcr: fixture.libraryPath,
      status: "active",
      "content-maturity": "reviewed_methodology",
      translation: "zh-CN=reviewed",
    });
    const registryPath = "classifications/aliases/pcr-id-aliases.yaml";
    const registry = renderYaml({
      schema_version: 1,
      registry_kind: "legacy-pcr-id-aliases",
      status: "current",
      aliases: [],
    });
    fs.mkdirSync(path.dirname(path.join(root, registryPath)), { recursive: true });
    fs.writeFileSync(path.join(root, registryPath), registry);
    fs.writeFileSync(
      path.join(root, "library/catalog.yaml"),
      renderYaml({
        schema_version: 1,
        catalog_status: "current",
        pcr_index: "library/indexes/pcr-index.yaml",
        classification_mappings: [],
        pcr_id_aliases: {
          path: registryPath,
          hash_mode: "exact_bytes",
          sha256: hash(registry),
          entry_count: 0,
        },
      }),
    );
    fs.mkdirSync(path.join(root, "library/indexes"));
    fs.writeFileSync(
      path.join(root, "library/indexes/pcr-index.yaml"),
      renderYaml({
        schema_version: 1,
        index_kind: "tiangong-pcr-material-catalog",
        status: "current",
        summary: { total: 1 },
        pcrs: [{ id: "pcr.agriculture.crops.wheat-seed", path: fixture.libraryPath }],
      }),
    );
    const guidePath = "packages/pcr-docs/public/getting-started.md";
    fs.mkdirSync(path.dirname(path.join(root, guidePath)), { recursive: true });
    fs.copyFileSync(new URL("../public/getting-started.md", import.meta.url), path.join(root, guidePath));
    fs.copyFileSync(new URL("../public/getting-started.zh-CN.md", import.meta.url), path.join(root, "packages/pcr-docs/public/getting-started.zh-CN.md"));
    git("init", "-q", "-b", "main");
    git("add", "-A");
    git(
      "-c",
      "user.name=PCR Test",
      "-c",
      "user.email=pcr-test@example.invalid",
      "commit",
      "-qm",
      "Synthetic summary fixture",
    );
    const result = spawnSync(
      process.execPath,
      [script, "--source-root", root, "--output-root", output],
      { encoding: "utf8", maxBuffer: 4 * 1024 * 1024 },
    );
    assert.equal(result.status, 0, result.stderr);
    const site = parseSiteManifest(fs.readFileSync(path.join(output, ".generated/site.json")));
    const report = parseReport(fs.readFileSync(path.join(output, ".generated/report.json")));

    for (const page of site.pages) {
      assert.ok(page.description, "every generated page publishes a summary " + page.url);
      assert.ok([...page.description].length <= 170, "summary stays inside the bound " + page.url);
      assert.equal(page.description.trim(), page.description, "summary is normalized " + page.url);
      for (const character of page.description)
        assert.notEqual(
          (character.codePointAt(0) ?? 0) >= 0xd800 && (character.codePointAt(0) ?? 0) <= 0xdfff,
          true,
          "summary keeps whole code points " + page.url,
        );
    }

    for (const language of ["en-US", "zh-CN"]) {
      const seen = new Map<string,string>();
      for (const page of site.pages.filter((item) => item.language === language)) {
        const previous = seen.get(page.description);
        assert.equal(
          previous,
          undefined,
          "two " + language + " pages share one summary: " + previous + " and " + page.url,
        );
        seen.set(page.description, page.url);
      }
    }

    const pages = site.pages.filter((page) => page.kind === "pcr");
    const record = pages.find((page) => page.language === "en-US" && page.part?.index === 0);
    const chineseRecord = pages.find((page) => page.language === "zh-CN" && page.part?.index === 0);
    assert.ok(record && chineseRecord, "fixture must generate both required language pages");
    assert.equal(pages.length, 2, "the fixture document fits one part per language");
    assert.match(
      record.description,
      /^Wheat Seed Production: The foreground system boundary must begin/u,
      "a record page uses its own document opening",
    );
    assert.match(
      chineseRecord.description,
      /^小麦种子生产：前景系统边界必须从接收的种批开始/u,
      "the Chinese page uses the Chinese source paragraph",
    );
    assert.notEqual(record.description, chineseRecord.description);

    assert.equal(report.summaries.limit, 170);
    assert.equal(
      report.summaries.pages,
      site.pages.filter(
        (page) => page.kind === "pcr" || page.kind === "guide" || (page.kind === "catalog" && page.slugs.length > 1),
      ).length,
      "every document and category page is counted",
    );
    assert.equal(
      report.summaries.title_only,
      site.pages.filter((page) => page.description === page.title).length,
      "the reported residual count is the real one",
    );
    assert.equal(
      report.summaries.context_dropped,
      0,
      "no fixture title is long enough to hide an available paragraph",
    );
    assert.ok(report.summaries.catalog_pages! > 0);

    const domain = site.pages.find(
      (page) => page.kind === "catalog" && page.language === "en-US" && page.slugs.length === 2,
    );
    const subdomain = site.pages.find(
      (page) => page.kind === "catalog" && page.language === "en-US" && page.slugs.length === 3,
    );
    assert.ok(domain && subdomain);
    assert.equal(domain.description, "Agriculture: 1 PCR document in this domain, across 1 category.");
    assert.equal(subdomain.description, "Crops (Agriculture): 1 PCR document in this category.");
    const chineseDomain = site.pages.find(
      (page) => page.kind === "catalog" && page.language === "zh-CN" && page.slugs.length === 2,
    );
    // The synthetic slug has no curated Chinese label, so the summary carries the actual category
    // title the page publishes; it is derived from the page, never invented for the locale.
    assert.ok(chineseDomain);
    assert.equal(chineseDomain.title, "Agriculture");
    assert.equal(chineseDomain.description, "Agriculture：本分类共 1 个 PCR 文档，分为 1 个子分类。");
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
});
