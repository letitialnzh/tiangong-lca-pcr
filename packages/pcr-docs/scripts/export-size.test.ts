import test from "node:test";
import assert from "node:assert/strict";
import { summarizeExportFiles } from "./export-size.ts";
import { INLINE_MANIFEST_LIMIT, INLINE_MARKDOWN_LIMIT, inlineDownloadUrl, decodeInlineDownloadUrl } from "./raw-download.ts";

test("bounded candidate manifest downloads preserve exact bytes and physical release artifacts", () => {
  const source = "library/pcrs/domain/category/product/manifest.yaml";
  const bytes = Buffer.from("\ufeffstatus: candidate\r\ncontent_maturity: authored_methodology\r\ntitle: 测试\r\n");
  const url = inlineDownloadUrl(source, bytes, false);
  assert.ok(url);
  assert.deepEqual(decodeInlineDownloadUrl(url), bytes);
  const exact = Buffer.concat([bytes, Buffer.alloc(INLINE_MANIFEST_LIMIT - bytes.length, 32)]);
  assert.ok(inlineDownloadUrl(source, exact, false));
  for (const [file, content, history] of [
    [source, Buffer.concat([exact, Buffer.from(" ")]), false],
    [source, bytes, true],
    [source.replace("manifest.yaml", "structured.yaml"), bytes, false],
    [source.replace("manifest.yaml", "releases/1.0.0/manifest.snapshot.yaml"), bytes, false],
    [source.replace("manifest.yaml", "revision/manifest.next.yaml"), bytes, false],
    [source.replace("pcrs", "modules"), bytes, false],
    [source, Buffer.from("status: active\ncontent_maturity: reviewed_methodology\n"), false],
    [source, Buffer.from("status: deprecated\ncontent_maturity: deprecated_methodology\n"), false],
    [source, Buffer.from("status: candidate\ncontent_maturity: empty_scaffold\n"), false],
  ] as const) assert.equal(inlineDownloadUrl(file, content, history), undefined);
  assert.equal(decodeInlineDownloadUrl("/generated/raw/manifest.yaml"), undefined);
  for (const malformed of ["data:text/html;base64,PGgxPng8L2gxPg==", "data:application/octet-stream;base64,!!!!", "data:application/octet-stream;base64,YQ", "data:application/octet-stream;base64," + Buffer.alloc(INLINE_MARKDOWN_LIMIT + 1).toString("base64")]) {
    assert.throws(() => decodeInlineDownloadUrl(malformed), /inline download/iu);
  }
});

test("bounded required-language downloads use their exact sibling candidate manifest", () => {
  const manifestPath = "library/pcrs/domain/category/product/manifest.yaml";
  const manifest = Buffer.from("status: candidate\ncontent_maturity: authored_methodology\n");
  const bytes = Buffer.from("\ufeff# 原始 methodology\r\n\r\nExact UTF-8 bytes.\r\n");
  const eligibility = {path: manifestPath, bytes: manifest};
  for (const language of ["en-US", "zh-CN"]) {
    const source = manifestPath.replace("manifest.yaml", `pcr.${language}.md`);
    const url = inlineDownloadUrl(source, bytes, false, eligibility);
    assert.ok(url, "small unpublished required-language Markdown is a native inline download");
    assert.deepEqual(decodeInlineDownloadUrl(url), bytes);
    assert.ok(inlineDownloadUrl(source, Buffer.from("status: active\ncontent_maturity: reviewed_methodology\n"), false, eligibility),
      "Markdown never supplies its own lifecycle eligibility");
    for (const malformed of [Buffer.from([0xff]), Buffer.from("status: [")])
      assert.throws(() => inlineDownloadUrl(source, bytes, false, {...eligibility, bytes:malformed}),
        "malformed manifest eligibility must fail closed");
    const exact = Buffer.concat([bytes, Buffer.alloc(INLINE_MARKDOWN_LIMIT - bytes.length, 32)]);
    const boundary = inlineDownloadUrl(source, exact, false, eligibility);
    assert.ok(boundary);
    assert.deepEqual(decodeInlineDownloadUrl(boundary), exact);
    assert.equal(inlineDownloadUrl(source, Buffer.concat([exact, Buffer.from(" ")]), false, eligibility), undefined);
    for (const [file, history, bound] of [
      [source, true, eligibility],
      [source, false, undefined],
      [source, false, {...eligibility, path: manifestPath.replace("product", "other")}],
      [source, false, {...eligibility, bytes: Buffer.from("status: active\ncontent_maturity: reviewed_methodology\n")}],
      [source, false, {...eligibility, bytes: Buffer.from("status: deprecated\ncontent_maturity: deprecated_methodology\n")}],
      [source, false, {...eligibility, bytes: Buffer.from("status: candidate\ncontent_maturity: empty_scaffold\n")}],
      [source.replace(`pcr.${language}.md`, "pcr.de-DE.md"), false, eligibility],
      [source.replace(`pcr.${language}.md`, `releases/1.0.0/pcr.${language}.md`), false, eligibility],
      [source.replace(`pcr.${language}.md`, `revision/pcr.${language}.md`), false, eligibility],
      [source.replace("pcrs", "modules"), false, eligibility],
      [source.replace("product", "../product"), false, eligibility],
    ] as const) assert.equal(inlineDownloadUrl(file, bytes, history, bound), undefined);
  }
});

test("identical inline bytes reserve one URL and retain later source filenames through physical fallback", () => {
  const directory = "library/pcrs/domain/category/product/";
  const bytes = Buffer.from("\ufeff# 同样 bytes\r\n");
  const bound = {path:directory + "manifest.yaml", bytes:Buffer.from("status: candidate\ncontent_maturity: authored_methodology\n")};
  const used = new Set<string>();
  const english = inlineDownloadUrl(directory + "pcr.en-US.md", bytes, false, bound, used);
  assert.ok(english);
  used.add(english);
  assert.equal(inlineDownloadUrl(directory + "pcr.zh-CN.md", bytes, false, bound, used), undefined,
    "the second artifact must use its source-relative physical URL and native filename");
});

test("export accounting separates navigation, documents and shared artifacts", () => {
  const report = summarizeExportFiles([
    { path: "en/docs/pcr/index.html", bytes: 30 },
    { path: "en/docs/pcr/index.txt", bytes: 20 },
    { path: "en/docs/pcr/__next._full.txt", bytes: 20 },
    { path: "en/docs/pcr/__next._tree.txt", bytes: 2 },
    { path: "generated/raw/library/pcrs/a/pcr.en-US.md", bytes: 10 },
    { path: "generated/data/a.json", bytes: 8 },
    { path: "generated\\search\\en-US\\shard-000.json", bytes: 5 },
    { path: "_next/static/chunks/a.js", bytes: 4 },
    { path: "_next/static/chunks/a.css", bytes: 3 },
    { path: "_next/static/media/font.woff2", bytes: 7 },
    { path: "_next/static/media/icon.svg", bytes: 1 },
    { path: "robots.txt", bytes: 1 },
  ]);
  assert.equal(report.files, 12);
  assert.equal(report.bytes, 111);
  assert.deepEqual(report.maxFile, { path: "en/docs/pcr/index.html", bytes: 30 });
  assert.deepEqual(report.categories, {
    rscText: { files: 3, bytes: 42 },
    html: { files: 1, bytes: 30 },
    rawDownloads: { files: 1, bytes: 10 },
    recordJson: { files: 1, bytes: 8 },
    search: { files: 1, bytes: 5 },
    jsCss: { files: 2, bytes: 7 },
    other: { files: 3, bytes: 9 },
  });
  assert.equal(Object.values(report.categories).reduce((n, category) => n + category.bytes, 0), report.bytes);
});

test("accounting reports growth above 1.5 GB without inventing an aggregate cap", () => {
  const files = Array.from({ length: 64 }, (_, index) => ({
    path: `generated/data/${index}.json`, bytes: 24_000_000,
  }));
  const report = summarizeExportFiles(files);
  assert.equal(report.bytes, 1_536_000_000);
  assert.deepEqual(report.categories.recordJson, { files: 64, bytes: 1_536_000_000 });
  assert.equal(report.maxFile!.bytes, 24_000_000);
});

test("48 KiB candidate Markdown packing preserves complete UTF-8 bytes and leaves larger files physical", () => {
  const directory = 'library/pcrs/domain/category/product/';
  const manifest = {path:directory + 'manifest.yaml', bytes:Buffer.from('status: candidate\ncontent_maturity: authored_methodology\n')};
  const body = Buffer.from('\ufeff# 完整原文\r\n' + '原始数据、边界和来源。\r\n'.repeat(1300));
  assert.ok(body.length > 32768 && body.length <= INLINE_MARKDOWN_LIMIT);
  const url = inlineDownloadUrl(directory + 'pcr.zh-CN.md', body, false, manifest);
  assert.ok(url); assert.deepEqual(decodeInlineDownloadUrl(url), body);
  assert.equal(inlineDownloadUrl(directory + 'pcr.zh-CN.md', Buffer.alloc(INLINE_MARKDOWN_LIMIT + 1), false, manifest), undefined);
});
