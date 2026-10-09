import {isUnknownRecord,unknownField,errorMessage} from "../../pcr-core/src/types.ts";
import type {DocPage,Download,PcrRecord as SitePcrRecord,SiteManifest,SearchResult} from "../lib/types.ts";
import type {BuilderManifest} from "../../../builder/lib/types.ts";
import {compileDocsBrowserAssets} from "./browser-assets.ts";
type ClassificationRef={system:string;version:string;code:string;title?:string;mapping_type?:string};
interface SiteAuthoringManifest extends BuilderManifest {classification_refs?:ClassificationRef[];modules?:Record<string,string[]>}
type GeneratedRecord=Omit<SitePcrRecord,"slug"> & {slug:[string,string,string]};
type GeneratedManifest=Omit<SiteManifest,"records"|"historicalRecords"> & {records:GeneratedRecord[];historicalRecords:GeneratedRecord[]};
interface SearchDocument {record:SearchResult;text:string}
import type {GenerationReport,SearchShard} from "./generation-report.ts";
function checkedManifest(raw:unknown):SiteAuthoringManifest {assertManifest(raw);if(!isUnknownRecord(raw))throw new Error("Manifest must be an object");return raw as SiteAuthoringManifest;}
function slugFor(pcrPath:string):[string,string,string] {const segments=pcrPath.slice("library/pcrs/".length).split("/");if(segments.length!==3||segments.some(part=>!part))throw new Error("Invalid canonical PCR source path: "+pcrPath);return segments as [string,string,string];}
function availableLanguages(value:{languages:{available?:string[]}}):string[] {const languages=value.languages.available;if(!languages)throw new Error("PCR languages are not declared");return languages;}
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { parseArgs } from "node:util";
import { Index } from "flexsearch";
import { gzipSync } from "node:zlib";
import { parseHTML } from "linkedom";
import {
  listPcrs,
  createPcrReadContext,
  withPcrReadContextSession,
  readPcrDocumentBundle,
  readPcrModuleDocumentBundle,
  readClassificationCoverageSnapshot,
} from "../../pcr-core/src/index.ts";
import { parseYaml } from "../../pcr-core/src/yaml-lite.ts";
import { readPcrDocumentHistory } from "../../../builder/lib/pcr-document-history.ts";
import { readProductIdentity } from "../../../builder/scripts/product-identity.ts";
import {
  assertManifest,
  assertMarkdownFrontmatter,
} from "../../../builder/lib/schema-contracts.ts";
import { routeFor, publicLanguage } from "./language-policy.ts";
import { gettingStartedGuides } from "../lib/getting-started.ts";
import { categoryTitle } from "./category-titles.ts";
import { ensureSourceHistory } from "./source-history.ts";
import {
  renderMarkdown,
  finalizePart,
  verifyRenderedBlocks,
  sha256,
} from "./markdown.ts";
import { SUMMARY_LIMIT, catalogSummary, documentSummary } from "./summaries.ts";
import { searchTerms } from "../lib/search-terms.ts";
const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { values: options } = parseArgs({
  options: {
    "source-root": { type: "string" },
    "output-root": { type: "string" },
  },
});
if (options["source-root"] && !options["output-root"])
  throw new Error("An explicit source root requires a separate output root.");
const root = fs.realpathSync(
  path.resolve(options["source-root"] ?? path.join(app, "../..")),
);
const requestedOutput = path.resolve(options["output-root"] ?? app);
fs.mkdirSync(requestedOutput, { recursive: true });
const outputRoot = fs.realpathSync(requestedOutput);
if (
  outputRoot === root ||
  ["library", "classifications", ".git"].some(
    (name) =>
      outputRoot === path.join(root, name) ||
      outputRoot.startsWith(path.join(root, name) + path.sep),
  )
)
  throw new Error(
    "Generated output cannot be inside canonical source or Git directories.",
  );
const origin = "https://pcr.tiangong.earth";
const git = (...args: string[]) =>
  execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  }).trim();
ensureSourceHistory(root);
const productIdentity = fs.existsSync(path.join(root, "product-release.json"))
  ? readProductIdentity(root, { requireClean: false })
  : null;
const commit = git("rev-parse", "HEAD"),
  sourceDate = git(
    "log",
    "-1",
    "--format=%cI",
    commit,
    "--",
    "library",
    "classifications",
  ),
  started = Date.now();
const modified = new Map<string,string>();
let changeDate: string | undefined;
for (const line of git(
  "log",
  "--format=@%cI",
  "--no-renames",
  "--name-only",
  commit,
  "--",
  "library",
  "classifications",
  ...gettingStartedGuides.map(guide => guide.sourcePath),
).split("\n")) {
  if (line.startsWith("@")) changeDate = line.slice(1);
  else if (line && changeDate && !modified.has(line))
    modified.set(line, changeDate);
}
const stage = fs.mkdtempSync(path.join(outputRoot, ".generated-stage-"));
const write = (relative: string, content: string | Uint8Array) => {
  const target = path.join(stage, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
};
const json = (relative: string, value: unknown) => write(relative, JSON.stringify(value));
const esc = (value: unknown) =>
  String(value ?? "").replace(
    /[&<>"']/gu,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c as "&"|"<"|">"|'"'|"'"
      ],
  );
const short = (value: string | Uint8Array) =>
  createHash("sha256").update(value).digest("hex").slice(0, 24);
const urlFor = (code: string, slugs: readonly string[]) =>
  "/" +
  routeFor(code) +
  "/docs/" +
  slugs.map(encodeURIComponent).join("/") +
  "/";
const sourceFiles = new Map<string,{sha256:string;bytes:number}>(),
  sourceRoutes = new Map<string,string>(),
  sourceAnchors = new Map<string,Map<string,string>>(),
  searches = new Map<string,SearchDocument[]>();
const manifest: GeneratedManifest = {
  schemaVersion: 1,
  sourceCommit: commit,
  sourceDate,
  generatorVersion: "1",
  origin,
  defaultLocale: "zh",
  languages: [],
  records: [],
  historicalRecords: [],
  pages: [],
  domains: [],
  coverage: [],
  counts: { pcrs: 0, pages: 0, sourceBytes: 0, languages: 0 },
};
const report: GenerationReport = {
  schemaVersion: 1,
  sourceCommit: commit,
  documents: [],
  downloads: [],
  links: [],
  search: [],
  metrics: {},
};
// Presentation-only summary accounting. A page whose retained summary is the title alone publishes
// no reader-facing context; that residual is counted here, with the pages where a usable paragraph
// existed but the bound removed it broken out, so the number is reported instead of being read as
// full descriptive coverage.
const summaries = {
  pages: 0,
  title_only: 0,
  context_dropped: 0,
  clipped: 0,
  catalog_pages: 0,
};
function publishSummary(summary: {titleOnly:boolean;contextDropped:boolean;clipped:boolean;text:string}, kind:string) {
  summaries.pages += 1;
  if (summary.titleOnly) summaries.title_only += 1;
  if (summary.contextDropped) summaries.context_dropped += 1;
  if (summary.clipped) summaries.clipped += 1;
  if (kind === "catalog") summaries.catalog_pages += 1;
  return summary.text;
}
const tracked = new Map(
  git("ls-tree", "-r", commit, "--", "library", "classifications", ...gettingStartedGuides.map(guide => guide.sourcePath))
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [meta, name] = line.split("\t");
      return [name!, meta!.split(" ")[2]!] as const;
    }),
);
const blobHash = (bytes: Uint8Array) =>
  createHash("sha1")
    .update(Buffer.from("blob " + bytes.length + "\0"))
    .update(bytes)
    .digest("hex");
function bindSource(relative: string, bytes: Uint8Array) {
  if (!tracked.has(relative) || tracked.get(relative) !== blobHash(bytes))
    throw new Error("Source differs from pinned Git commit: " + relative);
  const prior = sourceFiles.get(relative);
  if (prior && prior.sha256 !== sha256(bytes))
    throw new Error("Source changed: " + relative);
  if (!prior) {
    sourceFiles.set(relative, { sha256: sha256(bytes), bytes: bytes.length });
    manifest.counts.sourceBytes += bytes.length;
  }
}
function download(relative: string, bytes: Uint8Array) {
  bindSource(relative, bytes);
  const url = "/generated/raw/" + relative;
  write("public/raw/" + relative, bytes);
  const item = {
    name: path.posix.basename(relative),
    url,
    sha256: sha256(bytes),
    bytes: bytes.length,
  };
  if (!report.downloads.some((d) => d.url === url))
    report.downloads.push({ ...item, sourcePath: relative });
  return item;
}
function addSearch(page: DocPage, text: string) {
  if (!page.indexable) return;
  const docs = searches.get(page.language) ?? [];
  docs.push({
    record: {
      id: page.key,
      type: "page",
      url: page.url,
      content: page.title,
      description: page.description,
      breadcrumbs: [page.domain, page.subdomain]
        .filter((slug):slug is string=>typeof slug === "string" && Boolean(slug))
        .map((slug) => categoryTitle(slug, page.language)),
    },
    text: page.title + " " + (page.pcrId ?? "") + " " + text,
  });
  searches.set(page.language, docs);
}
function pageInfo<Extra extends Partial<DocPage> & {kind:DocPage["kind"]}>(language: string, slugs: string[], extra: Extra):DocPage & Extra {
  const url = urlFor(language, slugs);
  return {
    key: short(url),
    language,
    locale: routeFor(language),
    slugs,
    url,
    title: "",
    description: "",
    toc: [],
    indexable: true,
    canonical: origin + url,
    alternates: {},
    sourceNodeIds: [],
    lastModified: sourceDate,
    ...extra,
  };
}
function renderDocument({
  artifact,
  language,
  slugs,
  extra,
  downloads = [],
  alternates = {},
}: {artifact:{text:string;path:string;sha256:string};language:string;slugs:string[];extra:Partial<DocPage>&{kind:DocPage["kind"]};downloads?:Download[];alternates?:Record<string,string>}) {
  const rendered = renderMarkdown(artifact.text, artifact.path);
  const urls = rendered.parts.map((part, i) =>
    urlFor(language, i ? [...slugs, "chapters", part.slug] : slugs),
  );
  const anchors = new Map(
    rendered.parts.flatMap((part, i) =>
      part.anchors.map((id) => [id, urls[i] + "#" + encodeURIComponent(id)]),
    ),
  );
  for (const [alias, id] of Object.entries(rendered.anchorAliases))
    anchors.set(alias, anchors.get(id)!);
  sourceAnchors.set(artifact.path, anchors);
  const mapped: {url:string;sourceNodeIds:string[]}[] = [];
  // Every part of one document shares the same inventory, so the description must be scoped to the
  // nodes that part actually owns. The previous projection read the document's first paragraphs for
  // every part, which published one description for the record and each of its chapters.
  rendered.parts.forEach((part, i) => {
    const nodeIds = new Set(part.sourceNodeIds);
    const page = pageInfo(
      language,
      i ? [...slugs, "chapters", part.slug] : slugs,
      {
        ...extra,
        title: part.title,
        description: publishSummary(
          documentSummary({
            title: part.title,
            nodes: rendered.inventory.filter((node) => nodeIds.has(node.id)),
            // Only a document's first page may fall back to the document opening: a chapter without
            // its own paragraph must not borrow another chapter's text.
            fallbackNodes: i === 0 ? rendered.inventory : [],
            language,
          }),
          "document",
        ),
        htmlPath: "pages/" + short(urls[i]!) + ".html",
        toc: part.toc,
        sourcePath: artifact.path,
        sourceSha256: artifact.sha256,
        lastModified: modified.get(artifact.path) ?? sourceDate,
        sourceNodeIds: part.sourceNodeIds,
        sourceHeadingId: part.sourceHeadingId,
        sourceHeadingAnchor: i === 0 ? rendered.sourceHeadingAnchor : undefined,
        downloads,
        alternates:
          extra.indexable === false
            ? {}
            : i === 0
              ? alternates
              : { [language]: origin + urls[i] },
        part: { index: i, total: rendered.parts.length, label: part.label },
      },
    );
    const html = finalizePart(part, {
      hrefForAnchor: (id) => {
        const target = anchors.get(id);
        if (!target)
          throw new Error(artifact.path + ": missing fragment #" + id);
        return target;
      },
    });
    const document = parseHTML(
      "<html><body>" +
        (part.sourceHeadingId
          ? '<h1 data-source-node="' +
            part.sourceHeadingId +
            '">' +
            esc(rendered.title) +
            "</h1>"
          : "") +
        html +
        "</body></html>",
    ).document;
    try {
      verifyRenderedBlocks(document, rendered.inventory, part.sourceNodeIds);
    } catch (error) {
      throw new Error(artifact.path + ": " + errorMessage(error));
    }
    write(page.htmlPath!, html);
    const ids = new Set(part.sourceNodeIds);
    addSearch(
      page,
      rendered.inventory
        .filter((n) => ids.has(n.id))
        .map((n) => n.text)
        .join("\n"),
    );
    manifest.pages.push(page);
    mapped.push({ url: page.url, sourceNodeIds: page.sourceNodeIds });
  });
  const inventoryPath = "inventory/" + short(artifact.path) + ".json";
  json(inventoryPath, {
    sourcePath: artifact.path,
    sourceSha256: artifact.sha256,
    frontmatter: rendered.frontmatter,
    anchorTargets: Object.fromEntries(anchors),
    nodes: rendered.inventory,
    pages: mapped,
  });
  report.documents.push({
    sourcePath: artifact.path,
    sourceSha256: artifact.sha256,
    inventoryPath,
    pages: mapped.length,
    nodes: rendered.inventory.length,
  });
  return { urls, frontmatter: rendered.frontmatter };
}
function validateFrontmatter(bundle: ReturnType<typeof readPcrDocumentBundle>, language: string, fm: unknown) {
  assertMarkdownFrontmatter(fm);
  if(!isUnknownRecord(fm))throw new Error("Markdown frontmatter must be an object");
  if (fm.pcr_id !== bundle.manifest.id || fm.language !== language)
    throw new Error(
      "Markdown identity mismatch: " + bundle.pcr.path + " " + language,
    );
  if (language !== "en-US" && fm.sync_with !== "pcr.en-US.md")
    throw new Error(
      "Translation sync source mismatch: " + bundle.pcr.path + " " + language,
    );
  const state = unknownField(unknownField(bundle.manifest,"translation_status"),language);
  if (language !== "en-US" && !state)
    throw new Error(
      "Missing declared translation state: " + bundle.pcr.path + " " + language,
    );
  if (
    language !== "en-US" &&
    fm.translation_status &&
    fm.translation_status !== state
  )
    throw new Error(
      "Conflicting translation states: " +
        bundle.manifest.id +
        " " +
        language +
        " " +
        state +
        " / " +
        fm.translation_status,
    );
}
function catalogRecordList(language: string, records: readonly SitePcrRecord[]) {
  return (
    '<ul class="pcr-catalog-list">' +
    records
      .map((record) => {
        const refs = record.classificationRefs
          .map((ref) => ref.system + " " + ref.code)
          .join(", ");
        return (
          '<li><a href="' +
          esc(record.urls[language]) +
          '">' +
          esc(record.title[language]) +
          "</a>" +
          (refs ? '<span class="pcr-catalog-meta">' + esc(refs) + "</span>" : "") +
          "</li>"
        );
      })
      .join("") +
    "</ul>"
  );
}

function catalogPage(language: string, slugs: string[], title: string, records: SitePcrRecord[], description: string) {
  const page = pageInfo(language, slugs, {
    kind: "catalog",
    title,
    description,
    indexable: records.length > 0,
  });
  page.htmlPath = "pages/" + page.key + ".html";
  const zh = language === "zh-CN";
  let body;
  if (slugs.length === 2) {
    const groups = new Map<string,SitePcrRecord[]>();
    for (const record of records) {
      const slug = record.slug[1] ?? "";
      if (!groups.has(slug)) groups.set(slug, []);
      groups.get(slug)!.push(record);
    }
    const categories = [...groups.entries()];
    page.toc = categories.map(([slug]) => ({
      title: slug ? categoryTitle(slug, language) : zh ? "其他记录" : "Other records",
      url: "#pcr-category-" + (slug || "direct"),
      depth: 2,
    }));
    body =
      '<p class="pcr-catalog-intro">' +
      esc(
        zh
          ? `本领域有 ${records.length} 条 PCR 记录，分为 ${categories.length} 个子领域。`
          : `${records.length} PCR records across ${categories.length} subdomains.`,
      ) +
      '</p><div class="pcr-catalog-groups">' +
      categories
        .map(([slug, members]) => {
          const heading = slug ? categoryTitle(slug, language) : zh ? "其他记录" : "Other records";
          const url = slug ? urlFor(language, [...slugs, slug]) : "";
          return (
            '<section class="pcr-catalog-group" aria-labelledby="pcr-category-' +
            esc(slug || "direct") +
            '"><div class="pcr-catalog-group-head"><h2 id="pcr-category-' +
            esc(slug || "direct") +
            '">' +
            esc(heading) +
            "</h2>" +
            (url
              ? '<a href="' + esc(url) + '">' + esc(zh ? "打开子领域" : "Open subdomain") + "</a>"
              : "") +
            '</div><details class="pcr-catalog-disclosure"><summary>' +
            esc(zh ? `展开 ${members.length} 条记录` : `Show ${members.length} records`) +
            "</summary>" +
            catalogRecordList(language, members) +
            "</details></section>"
          );
        })
        .join("") +
      "</div>";
  } else {
    body =
      '<p class="pcr-catalog-intro">' +
      esc(zh ? `本目录有 ${records.length} 条 PCR 记录。` : `${records.length} PCR records in this directory.`) +
      "</p>" +
      catalogRecordList(language, records);
  }
  write(page.htmlPath!, body);
  manifest.pages.push(page);
  addSearch(page, records.map((r) => r.title[language]).join(" "));
}
async function generate() {
  fs.mkdirSync(stage, { recursive: true });
  const pcrs = listPcrs({ root, scope: "material" });
  if (!pcrs.length) throw new Error("Empty material PCR catalog.");
  const codes = [
    ...new Set(
      pcrs.flatMap((p) =>
        availableLanguages(p).filter((code) => publicLanguage(p, code)),
      ),
    ),
  ].sort((a, b) =>
    a === "zh-CN"
      ? -1
      : b === "zh-CN"
        ? 1
        : a === "en-US"
          ? -1
          : b === "en-US"
            ? 1
            : a.localeCompare(b),
  );
  manifest.languages = codes.map((code) => ({
    code,
    route: routeFor(code),
    label:
      code === "zh-CN"
        ? "简体中文"
        : code === "en-US"
          ? "English"
          : new Intl.DisplayNames([code], { type: "language" }).of(code)!,
    htmlLang: code,
    required: ["en-US", "zh-CN"].includes(code),
  }));
  for (const pcr of pcrs)
    for (const code of availableLanguages(pcr).filter((code) =>
      publicLanguage(pcr, code),
    ))
      sourceRoutes.set(
        pcr.path + "/pcr." + code + ".md",
        urlFor(code, [
          "pcr",
          ...pcr.path.slice("library/pcrs/".length).split("/"),
        ]),
      );
  const context = createPcrReadContext({ root });
  withPcrReadContextSession({
    root,
    context,
    read: () => {
      for (const [number, pcr] of pcrs.entries()) {
        const bundle = readPcrDocumentBundle({ root, pcrId: pcr.id, context }),
          m = checkedManifest(bundle.manifest),
          slug = slugFor(pcr.path);
        assertManifest(m);
        const downloads = Object.values(bundle.artifacts).map((a) =>
            download(a.path, a.bytes),
          ),
          urls = Object.fromEntries(
            bundle.languages
              .filter((code) => publicLanguage(m, code))
              .map((code) => [code, urlFor(code, ["pcr", ...slug])]),
          );
        const dataPath = "data/" + short(pcr.id) + ".json",
          data = { manifest: m, structured: bundle.structured };
        json(dataPath, data);
        json("public/" + dataPath, data);
        const record: GeneratedRecord = {
          id: pcr.id,
          slug,
          title: m.title,
          status: m.status,
          maturity: m.content_maturity,
          version: m.version ?? null,
          updatedAt: m.updated_at_utc ?? null,
          sourcePath: pcr.path,
          translationStatus: m.translation_status ?? {},
          readiness: pcr.readiness,
          urls,
          pages: {},
          downloads,
          dataPath,
          dataUrl: "/generated/" + dataPath,
          classificationRefs: m.classification_refs ?? [],
          modules: m.modules ?? {},
        };
        for (const language of bundle.languages) {
          const artifact = bundle.artifacts["pcr." + language + ".md"]!;
          validateFrontmatter(
            bundle,
            language,
            parseYaml(
              /^---\r?\n([\s\S]*?)\r?\n---/u.exec(artifact.text)?.[1] ?? "",
            ),
          );
          if (!publicLanguage(m, language)) continue;
          const indexable =
            language === "en-US" ||
            ["aligned", "reviewed"].includes(m.translation_status[language]!);
          const alternates = Object.fromEntries(
            bundle.languages
              .filter(
                (code) =>
                  code === "en-US" ||
                  ["aligned", "reviewed"].includes(
                    m.translation_status[code]!,
                  ),
              )
              .map((code) => [code, origin + urls[code]]),
          );
          const rendered = renderDocument({
            artifact,
            language,
            slugs: ["pcr", ...slug],
            extra: {
              kind: "pcr",
              pcrId: pcr.id,
              domain: slug[0],
              subdomain: slug[1],
              indexable,
            },
            downloads,
            alternates: indexable ? alternates : {},
          });
          validateFrontmatter(bundle, language, rendered.frontmatter);
          record.pages[language] = rendered.urls;
        }
        manifest.records.push(record);
        const history = readPcrDocumentHistory({
          root,
          pcrDir: path.join(root, pcr.path),
        });
        for (const artifact of Object.values(history.artifacts)) {
          const item = download(
            path.relative(root, artifact.path).split(path.sep).join("/"),
            artifact.bytes,
          );
          if (!record.downloads.some((existing) => existing.url === item.url))
            record.downloads.push(item);
        }
        record.versions = history.releases.map((release) => ({
          version: release.version,
          urls: Object.fromEntries(
            release.languages.map((code) => [
              code,
              urlFor(code, ["pcr", ...slug, "versions", release.version]),
            ]),
          ),
        }));
        for (const release of history.releases) {
          const releaseManifest=checkedManifest(release.manifest);
          for (const code of release.languages)
            if (!codes.includes(code)) {
              codes.push(code);
              manifest.languages.push({
                code,
                route: routeFor(code),
                label: new Intl.DisplayNames([code], { type: "language" }).of(
                  code,
                )!,
                htmlLang: code,
                required: false,
              });
            }
          const historicalSlug = ["pcr", ...slug, "versions", release.version];
          const historicalUrls = Object.fromEntries(
            release.languages.map((code) => [
              code,
              urlFor(code, historicalSlug),
            ]),
          );
          const historicalDownloads = Object.values(release.artifacts).map(
            (artifact) =>
              download(
                path.relative(root, artifact.path).split(path.sep).join("/"),
                artifact.bytes,
              ),
          );
          const historicalDataPath =
            "data/" + short(pcr.id + "@" + release.version) + ".json";
          const historicalData = {
            manifest: release.manifest,
            structured: release.structured,
          };
          json(historicalDataPath, historicalData);
          json("public/" + historicalDataPath, historicalData);
          const historical: GeneratedRecord = {
            ...record,
            title: releaseManifest.title,
            status: releaseManifest.status,
            maturity: releaseManifest.content_maturity,
            version: release.version,
            updatedAt: releaseManifest.updated_at_utc ?? null,
            sourcePath: pcr.path + "/releases/" + release.version,
            translationStatus: releaseManifest.translation_status,
            urls: historicalUrls,
            pages: {},
            downloads: historicalDownloads,
            dataPath: historicalDataPath,
            dataUrl: "/generated/" + historicalDataPath,
            classificationRefs: releaseManifest.classification_refs ?? [],
            modules: releaseManifest.modules ?? {},
          };
          for (const code of release.languages) {
            const raw = release.artifacts["pcr." + code + ".md"]!;
            const artifact = {
              ...raw,
              path: path.relative(root, raw.path).split(path.sep).join("/"),
            };
            sourceRoutes.set(artifact.path, historicalUrls[code]!);
            const rendered = renderDocument({
              artifact,
              language: code,
              slugs: historicalSlug,
              extra: {
                kind: "pcr",
                pcrId: pcr.id,
                recordVersion: release.version,
                currentUrl: urls[code] ?? urls["en-US"],
                currentLanguage: urls[code] ? code : "en-US",
                domain: slug[0],
                subdomain: slug[1],
                indexable: true,
              },
              downloads: historicalDownloads,
              alternates: Object.fromEntries(
                release.languages.map((language) => [
                  language,
                  origin + historicalUrls[language],
                ]),
              ),
            });
            historical.pages[code] = rendered.urls;
          }
          manifest.historicalRecords.push(historical);
        }
        if ((number + 1) % 50 === 0)
          console.log(
            "Rendered " +
              (number + 1) +
              "/" +
              pcrs.length +
              " PCRs (" +
              Math.round((Date.now() - started) / 1000) +
              "s).",
          );
      }
    },
  });
  // Only authored, pinned translations become real counterparts.
  const guides = gettingStartedGuides.filter(guide => tracked.has(guide.sourcePath));
  const guideAlternates = Object.fromEntries(guides.map(guide => [guide.language, origin + guide.url]));
  for (const guide of guides) {
    const guidePath = guide.sourcePath;
    const bytes = fs.readFileSync(path.join(root, guidePath));
    bindSource(guidePath, bytes);
    if (!codes.includes(guide.language)) {
      codes.push(guide.language);
      manifest.languages.push({ code: guide.language, route: guide.locale, label: guide.locale === "zh" ? "简体中文" : "English", htmlLang: guide.language, required: true });
    }
    sourceRoutes.set(guidePath, guide.url);
    renderDocument({
      artifact: { path: guidePath, text: bytes.toString("utf8"), sha256: sha256(bytes) },
      language: guide.language,
      slugs: ["getting-started"],
      extra: { kind: "guide" },
      alternates: guideAlternates,
    });
  }
  const modules = new Set(
    manifest.records.flatMap((r) =>
      Object.entries(r.modules).flatMap(([group, ids]) =>
        ids.map((id) => "library/modules/" + group + "/" + id + ".md"),
      ),
    ),
  );
  for (const relative of [...modules].sort()) {
    const segments = relative.slice("library/modules/".length, -3).split("/");
    const bundle = readPcrModuleDocumentBundle({
        root,
        group: segments[0]!,
        moduleId: segments[1]!,
      }),
      bytes = bundle.artifact.bytes,
      raw = download(relative, bytes),
      text = bundle.artifact.text,
      fm = bundle.frontmatter;
    const rawLanguage=unknownField(fm,"language"),language = typeof rawLanguage === "string" ? rawLanguage : "en-US",
      slugs = [
        "modules",
        ...relative.slice("library/modules/".length, -3).split("/"),
      ];
    sourceRoutes.set(relative, urlFor(language, slugs));
    renderDocument({
      artifact: { path: relative, text, sha256: raw.sha256 },
      language,
      slugs,
      extra: {
        kind: "module",
        moduleId: typeof unknownField(fm,"module_id")==="string" ? unknownField(fm,"module_id") as string : path.basename(relative, ".md"),
        indexable: unknownField(fm,"status") !== "scaffold" && unknownField(fm,"status") !== undefined,
      },
      downloads: [raw],
    });
  }
  for (const code of codes) {
    const records = manifest.records.filter((r) => r.urls[code]),
      zh = code === "zh-CN";
    catalogPage(
      code,
      ["pcr"],
      zh ? "PCR 文档库" : "PCR library",
      records,
      zh
        ? "浏览完整的产品种类规则。候选方法学仍需审阅；每页保留原文和来源文件。"
        : "Browse complete product category rules. Candidate methodologies require review; each page preserves the original text and source files.",
    );
    for (const domain of [...new Set(records.map((r) => r.slug[0]!))].sort()) {
      const subset = records.filter((r) => r.slug[0]! === domain);
      catalogPage(
        code,
        ["pcr", domain],
        categoryTitle(domain, code),
        subset,
        publishSummary(
          catalogSummary({
            language: code,
            title: categoryTitle(domain, code),
            count: subset.length,
            subcategories: new Set(subset.map((r) => r.slug[1]!)).size,
          }),
          "catalog",
        ),
      );
      for (const subdomain of [...new Set(subset.map((r) => r.slug[1]!))].sort()) {
        const members = subset.filter((r) => r.slug[1]! === subdomain);
        catalogPage(
          code,
          ["pcr", domain, subdomain],
          categoryTitle(subdomain, code),
          members,
          publishSummary(
            catalogSummary({
              language: code,
              title: categoryTitle(subdomain, code),
              parent: categoryTitle(domain, code),
              count: members.length,
            }),
            "catalog",
          ),
        );
      }
    }
  }
  manifest.categoryTitles = Object.fromEntries(
    [
      ...new Set(manifest.records.flatMap((record) => record.slug.slice(0, 2))),
    ].map((slug) => [
      slug,
      Object.fromEntries(
        codes.map((code) => [code, categoryTitle(slug, code)]),
      ),
    ]),
  );
  manifest.domains = [...new Set(manifest.records.map((r) => r.slug[0]!))]
    .sort()
    .map((slug) => ({
      slug,
      title: Object.fromEntries(
        codes.map((code) => [code, categoryTitle(slug, code)]),
      ),
      count: manifest.records.filter((r) => r.slug[0]! === slug).length,
    }));
  const catalog: unknown = parseYaml(
    fs.readFileSync(path.join(root, "library/catalog.yaml"), "utf8"),
  );
  const coveragePaths=unknownField(catalog,"classification_coverage_indexes") ?? [];
  if(!Array.isArray(coveragePaths)||!coveragePaths.every((value:unknown)=>typeof value === "string"))throw new Error("Invalid classification coverage paths");
  for (const relative of coveragePaths) {
    const bytes = fs.readFileSync(path.join(root, relative)),
      raw = download(relative, bytes),
      initial: unknown = JSON.parse(bytes.toString("utf8"));
    const rawSystem = unknownField(initial,"classification_system"),
      rawVersion = unknownField(initial,"classification_version");
    const document = readClassificationCoverageSnapshot({
        root,
        system:rawSystem,
        version:rawVersion,
      }).document,
      system=document.classification_system,version=document.classification_version,summary = {...document.summary},
      coverage = { system, version, summary, url: {} as Record<string,string>, downloadUrl: raw.url };
    for (const code of codes) {
      const zh = code === "zh-CN",
        page = pageInfo(
          code,
          ["coverage", system.toLowerCase() + "-" + version],
          {
            kind: "coverage",
            title: system + " " + version + (zh ? " 覆盖情况" : " coverage"),
            description: zh
              ? "分类映射与尚未覆盖的条目；未映射条目不代表已有 PCR。"
              : "Classification mapping and gaps. Unmapped categories do not represent available PCRs.",
            downloads: [raw],
          },
        );
      page.htmlPath = "pages/" + page.key + ".html";
      write(
        page.htmlPath,
        "<p>" +
          esc(page.description) +
          "</p><dl>" +
          Object.entries(summary)
            .map(
              ([key, value]) =>
                "<dt>" +
                esc(key) +
                "</dt><dd>" +
                esc(typeof value === "object" ? JSON.stringify(value) : value) +
                "</dd>",
            )
            .join("") +
          '</dl><p><a href="' +
          raw.url +
          '" download>' +
          esc(zh ? "下载完整覆盖索引" : "Download complete coverage index") +
          "</a></p>",
      );
      manifest.pages.push(page);
      coverage.url[code] = page.url;
    }
    manifest.coverage.push(coverage);
  }
  // Resolve source-relative links after every destination and split-page anchor is known.
  for (const page of manifest.pages.filter((p) => p.sourcePath)) {
    const file = path.join(stage, page.htmlPath!),
      document = parseHTML(
        "<html><body>" + fs.readFileSync(file, "utf8") + "</body></html>",
      ).document;
    for (const node of document.querySelectorAll("a[href],img[src]")) {
      const attr = node.localName === "img" ? "src" : "href",
        value = node.getAttribute(attr)!;
      if (/^(?:[a-z][a-z0-9+.-]*:|\/|#)/iu.test(value)) continue;
      const [withoutHash, fragment] = value.split("#"),
        relative = path.posix.normalize(
          path.posix.join(
            path.posix.dirname(page.sourcePath!),
            decodeURIComponent(withoutHash!),
          ),
        );
      if (relative.startsWith("../") || !tracked.has(relative))
        throw new Error(
          page.sourcePath + ": unresolved relative source link " + value,
        );
      let target = sourceRoutes.get(relative);
      if (target && fragment) {
        target = sourceAnchors.get(relative)?.get(decodeURIComponent(fragment));
        if (!target)
          throw new Error(
            "Missing target source fragment: " + relative + "#" + fragment,
          );
      }
      if (!target) {
        const bytes = fs.readFileSync(path.join(root, relative));
        target =
          download(relative, bytes).url + (fragment ? "#" + fragment : "");
      }
      node.setAttribute(attr, target);
      report.links.push({ source: page.sourcePath!, original: value, target });
    }
    fs.writeFileSync(file, document.body.innerHTML);
  }
  for (const [language, docs] of searches) {
    docs.forEach((doc, i) => {
      doc.record.id = String(i);
    });
    const shards: SearchShard[] = [];
    let bucket: SearchDocument[] = [],
      bytes = 0;
    async function flush() {
      if (!bucket.length) return;
      const index = new Index({
        tokenize: "strict",
        encode: (value: unknown) => searchTerms(value, language),
      });
      for (const doc of bucket) index.add(Number(doc.record.id), doc.text);
      const entries: Record<string,unknown[]> = {};
      await index.export((key, value) => {
        const parsed: unknown = JSON.parse(value);
        if (!Array.isArray(parsed) || JSON.stringify(parsed) !== value)
          throw new Error("Unsupported serialized search export: " + language + "/" + key);
        entries[key] = parsed;
      });
      const payload = JSON.stringify({
        entries,
        records: bucket.map((d) => d.record),
      });
      if (Buffer.byteLength(payload) > 20_000_000)
        throw new Error("Search shard exceeds 20MB: " + language);
      const url =
        "/generated/search/" +
        language +
        "/shard-" +
        String(shards.length).padStart(3, "0") +
        ".json";
      write("public" + url.slice("/generated".length), payload);
      shards.push({
        url,
        bytes: Buffer.byteLength(payload),
        gzipBytes: gzipSync(payload, { level: 9 }).length,
        records: bucket.length,
        sha256: sha256(payload),
      });
      bucket = [];
      bytes = 0;
    }
    for (const doc of docs) {
      const size = Buffer.byteLength(doc.text);
      if (bytes + size > 2_000_000) await flush();
      bucket.push(doc);
      bytes += size;
    }
    await flush();
    json("public/search/" + language + "/manifest.json", {
      schemaVersion: 2,
      language,
      shards,
    });
    const rawBytes = shards.reduce((sum, shard) => sum + shard.bytes, 0);
    const gzipBytes = shards.reduce((sum, shard) => sum + shard.gzipBytes, 0);
    if (rawBytes > 20_000_000 || gzipBytes > 4_000_000)
      throw new Error(
        `Search exceeds the per-language browser budget: ${language} (raw ${rawBytes}/20000000 bytes; gzip ${gzipBytes}/4000000 bytes)`,
      );
    report.search.push({
      language,
      records: docs.length,
      rawBytes,
      gzipBytes,
      shards,
    });
  }
  for (const page of manifest.pages) {
    if (!page.indexable || page.kind === "pcr") continue;
    page.alternates = Object.fromEntries(
      manifest.pages
        .filter(
          (other) =>
            other.indexable &&
            other.kind === page.kind &&
            other.slugs.join("/") === page.slugs.join("/"),
        )
        .map((other) => [other.language, other.canonical]),
    );
  }
  const urls = new Set();
  for (const page of manifest.pages) {
    if (urls.has(page.url)) throw new Error("Duplicate route " + page.url);
    urls.add(page.url);
  }
  manifest.counts.pcrs = manifest.records.length;
  manifest.counts.pages = manifest.pages.length;
  manifest.counts.languages = codes.length;
  report.metrics = { ...manifest.counts, generationMs: Date.now() - started };
  report.summaries = { ...summaries, limit: SUMMARY_LIMIT };
  json("site.json", manifest);
  json("report.json", report);
  json("public/version.json", {
    sourceCommit: commit,
    sourceDate,
    generatorVersion: manifest.generatorVersion,
    counts: manifest.counts,
    ...(productIdentity
      ? {
          releaseVersion: productIdentity.version,
          releaseTag: productIdentity.tag,
          sourceFingerprint: productIdentity.sourceFingerprint,
        }
      : {}),
  });
  if (productIdentity) json("public/product-release.json", productIdentity);
  compileDocsBrowserAssets({outputRoot:path.join(stage,"public")});
  write(
    "public/search-engine.mjs",
    fs.readFileSync(new URL(import.meta.resolve("flexsearch"))),
  );
  const final = path.join(outputRoot, ".generated"),
    publicFinal = path.join(outputRoot, "public/generated");
  for (const target of [final, publicFinal])
    if (fs.existsSync(target) && fs.lstatSync(target).isSymbolicLink())
      throw new Error("Generated output may not be a symlink.");
  fs.mkdirSync(path.dirname(publicFinal), { recursive: true });
  fs.rmSync(publicFinal, { recursive: true, force: true });
  fs.renameSync(path.join(stage, "public"), publicFinal);
  fs.rmSync(final, { recursive: true, force: true });
  fs.renameSync(stage, final);
  // The relocated build discards this checkout's `.generated/`, so the summary accounting is also
  // printed: the build log is the only durable place a residual count can be read there.
  console.log(JSON.stringify({ ...report.metrics, summaries: report.summaries }));
}
try {
  await generate();
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
