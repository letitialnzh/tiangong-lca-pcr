import { StructuredSummary } from "@/components/structured-summary";
import { DataInspector } from "@/components/data-inspector";
import { DocumentBody } from "@/components/document-body";
import { DownloadList } from "@/components/download-list";
import { PcrPage } from "@/components/pcr-page";
import {
  StatusBadge,
  lifecycleStatus,
  maturityLabel,
  readinessStatus,
  toneFor,
  translationStatus,
} from "@/components/status-badge";
import Link from "next/link";
import { getSiteManifest } from "@/lib/generated";
import {
  languageCodeFor,
  libraryUrl,
  pageLastModified,
  recordDownloads,
  recordParts,
  sourceUrl,
  titleFor,
} from "@/lib/source";
import type { DocPage, PcrRecord, SiteManifest } from "@/lib/types";

/** Publication dates render deterministically, in UTC. */
function utcDate(value: string | null): string {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return `${parsed
    .toISOString()
    .replace(/\.\d{3}Z$/u, "Z")
    .replace("T", " ")
    .replace(/Z$/u, " UTC")}`;
}

function Fact({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pcr-fact">
      <dt className="pcr-fact-label">{label}</dt>
      <dd className="pcr-fact-value">{children}</dd>
    </div>
  );
}

export function recordLabels(locale: string) {
  const zh = locale === "zh";
  return {
    zh,
    status: zh ? "生命周期状态" : "Lifecycle status",
    maturity: zh ? "内容成熟度" : "Content maturity",
    version: zh ? "当前版本" : "Current version",
    historical: zh ? "历史版本" : "Historical version",
    historicalNote: zh
      ? "这是已发布的不可变版本快照。方法学内容以当前版本为准。"
      : "This is an immutable snapshot of a published version. The current version is authoritative.",
    currentVersion: zh ? "查看当前版本" : "View the current version",
    readiness: zh ? "使用就绪度" : "Readiness",
    languages: zh ? "内容语言" : "Content languages",
    classification: zh ? "分类映射" : "Classification mapping",
    source: zh ? "源文件" : "Source",
    updated: zh ? "最后更新" : "Last updated",
    noVersion: zh ? "尚未发布版本" : "No published version",
    blockers: zh ? "阻塞项" : "Blockers",
    warnings: zh ? "提示项" : "Warnings",
    downloads: zh ? "原始下载" : "Raw downloads",
    downloadsNote: zh
      ? "以下文件与仓库中该修订的规范化文件逐字节一致，可自行校验哈希。"
      : "These files are byte-identical to the canonical files for this revision in the repository.",
    hash: zh ? "SHA-256" : "SHA-256",
    chapters: zh ? "本记录的章节" : "Chapters in this record",
    chaptersNote: zh
      ? "该记录被拆分为多个页面；所有章节都可通过下列链接直接访问。"
      : "This record is split across pages; every chapter is directly reachable below.",
    previous: zh ? "上一章" : "Previous chapter",
    next: zh ? "下一章" : "Next chapter",
    partOf: (index: number, total: number) =>
      zh ? `第 ${index} / ${total} 章` : `Chapter ${index} of ${total}`,
    sourceLink: zh
      ? "在源码仓库中查看此版本"
      : "View this revision in the source repository",
    inspector: {
      title: zh ? "完整字段检查器" : "Complete field inspector",
      note: zh
        ? "按需加载该记录的完整 manifest 与结构化投影；字段值不做截断。需要 JavaScript。"
        : "Loads this record’s complete manifest and structured projection on demand; values are never truncated. Requires JavaScript.",
      load: zh ? "加载完整字段" : "Load complete fields",
      loading: zh ? "正在加载…" : "Loading…",
      reload: zh ? "重试" : "Retry",
      error: zh
        ? "字段数据加载失败。原始下载仍然可用。"
        : "Field data could not be loaded. Raw downloads remain available.",
      manifest: "manifest.yaml",
      structured: "structured.yaml",
      expandAll: zh ? "全部展开" : "Expand all",
      collapseAll: zh ? "全部收起" : "Collapse all",
    },
  };
}

/** Breadcrumbs follow the record's own slug, resolved through the generated catalog pages. */
function crumbs(
  manifest: SiteManifest,
  page: DocPage,
  record: PcrRecord,
  code: string,
  fallback: string,
  labels: { home: string; library: string },
): Array<{ name: string; url: string }> {
  const trails: Array<{ name: string; url: string }> = [
    { name: labels.home, url: `/${page.locale}/` },
    { name: labels.library, url: libraryUrl(page.locale) },
  ];
  for (let depth = 1; depth <= 2; depth += 1) {
    const slugs = ["pcr", ...record.slug.slice(0, depth)];
    const catalog = manifest.pages.find(
      (candidate) =>
        candidate.kind === "catalog" &&
        candidate.locale === page.locale &&
        candidate.slugs.join("/") === slugs.join("/"),
    );
    const slug = record.slug[depth - 1];
    const title =
      manifest.categoryTitles?.[slug] ??
      manifest.domains.find((item) => item.slug === slug)?.title;
    trails.push({
      name: titleFor(title, code, fallback, slug),
      url: catalog?.url ?? libraryUrl(page.locale),
    });
  }
  trails.push({
    name: titleFor(record.title, code, fallback, record.id),
    url: page.url,
  });
  return trails;
}

/**
 * Structured data describes this page as an article about a methodology revision. It is not a
 * `Dataset`: the website publishes the rule text, not the LCA data. Only values the page actually
 * shows are emitted, including the real source and snapshot timestamps.
 */
function StructuredData({
  page,
  record,
  trails,
  headline,
}: {
  page: DocPage;
  record: PcrRecord;
  trails: Array<{ name: string; url: string }>;
  headline: string;
}) {
  const manifest = getSiteManifest();
  const modified = pageLastModified(page, manifest.sourceDate);
  const graph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: trails.map((trail, position) => ({
        "@type": "ListItem",
        position: position + 1,
        name: trail.name,
        item: `${manifest.origin}${trail.url}`,
      })),
    },
    {
      "@type": "TechArticle",
      headline,
      description: page.description,
      inLanguage: page.language,
      mainEntityOfPage: page.canonical,
      url: page.canonical,
      dateModified: modified,
      ...(record.updatedAt ? { datePublished: record.updatedAt } : {}),
      isPartOf: {
        "@type": "WebSite",
        name: "TianGong PCR",
        url: `${manifest.origin}/`,
      },
      about: {
        "@type": "DefinedTerm",
        name: record.title["en-US"] ?? record.id,
        termCode: record.id,
      },
      ...(record.version ? { version: record.version } : {}),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</gu, "\\u003c"),
      }}
    />
  );
}

export function PcrRecordPage({
  page,
  record,
  html,
}: {
  page: DocPage;
  record: PcrRecord;
  html: string;
}) {
  const manifest = getSiteManifest();
  const code = languageCodeFor(manifest, page.locale);
  const fallback = manifest.defaultLocale;
  const text = recordLabels(page.locale);
  const status = lifecycleStatus(record.status, page.locale);
  const readiness = readinessStatus(record.readiness.status, page.locale);
  // Translation state and raw artifacts are keyed by source language code, not by route alias.
  const languages = Object.entries(record.translationStatus);
  const downloads = recordDownloads(record, code);
  const parts = recordParts(manifest, page.locale, record, manifest.origin);
  const position = parts.findIndex((part) => part.url === page.url);
  const previous = position > 0 ? parts[position - 1] : undefined;
  const next =
    position >= 0 && position < parts.length - 1
      ? parts[position + 1]
      : undefined;
  const trails = crumbs(manifest, page, record, code, fallback, {
    home: text.zh ? "首页" : "Home",
    library: text.zh ? "PCR 库" : "PCR library",
  });
  const source = sourceUrl(manifest, record.sourcePath);
  // The generator marks a snapshot page with the version it froze and the URL of the live record;
  // a current page carries neither. The corpus has no historical releases yet.
  const historical = Boolean(page.recordVersion);

  return (
    <PcrPage page={page}>
      <div className="pcr-front not-prose">
        <dl className="pcr-facts">
          <Fact label={text.status}>
            <StatusBadge
              tone={toneFor("lifecycle", record.status)}
              title={status.hint}
            >
              {status.label}
            </StatusBadge>
          </Fact>
          <Fact label={text.maturity}>
            {maturityLabel(record.maturity, page.locale)}
          </Fact>
          <Fact label={historical ? text.historical : text.version}>
            <span className="pcr-fact-primary">
              {record.version ? (
                <span className="pcr-mono">{record.version}</span>
              ) : (
                text.noVersion
              )}
            </span>
            <span className="pcr-fact-detail">
              <span>{text.updated}</span>
              <time
                dateTime={page.lastModified ?? record.updatedAt ?? undefined}
                title={utcDate(page.lastModified ?? record.updatedAt)}
              >
                {(page.lastModified ?? record.updatedAt)?.slice(0, 10) ?? "—"}
              </time>
            </span>
          </Fact>
          <Fact label={text.readiness}>
            <StatusBadge
              tone={toneFor("readiness", record.readiness.status)}
              title={readiness.hint}
            >
              {readiness.label}
            </StatusBadge>
          </Fact>
        </dl>

        {historical && page.currentUrl ? (
          <p className="pcr-status-note pcr-status-note--history" role="note">
            {text.historicalNote}{" "}
            <Link href={page.currentUrl}>{text.currentVersion}{page.currentLanguage && page.currentLanguage !== page.language ? ` (${page.currentLanguage})` : ""}</Link>
          </p>
        ) : null}

        <p className="pcr-status-note" role="note">
          {text.zh
            ? "方法学与翻译状态由源文件记录；网站发布不会改变其评审状态。"
            : "Methodology and translation states come from the source record; publishing this website does not change their review status."}
        </p>

        {languages.length > 0 ? (
          <section aria-labelledby="pcr-languages-heading">
            <h2 id="pcr-languages-heading" className="pcr-section-title">
              {text.languages}
            </h2>
            <div className="pcr-chip-row">
              {languages.map(([sourceCode, value]) => {
                const translation = translationStatus(value, page.locale);
                return (
                  <StatusBadge
                    key={sourceCode}
                    tone={toneFor("translation", value)}
                    title={translation.hint}
                  >
                    <span className="pcr-mono">{sourceCode}</span> ·{" "}
                    {translation.label}
                  </StatusBadge>
                );
              })}
            </div>
          </section>
        ) : null}

        <details className="pcr-record-details">
          <summary>
            {text.zh
              ? "查看状态、分类与来源详情"
              : "Status, classification and source details"}
          </summary>
          {record.readiness.blockers.length > 0 ||
          record.readiness.warnings.length > 0 ? (
            <section aria-labelledby="pcr-readiness-heading">
              <h2 id="pcr-readiness-heading" className="pcr-section-title">
                {text.readiness}
              </h2>
              <ul className="pcr-record-list">
                {record.readiness.blockers.map((item) => (
                  <li key={`blocker:${item.code}`}>
                    <StatusBadge tone="error">{text.blockers}</StatusBadge>{" "}
                    <span className="pcr-mono">{item.code}</span> {item.message}
                  </li>
                ))}
                {record.readiness.warnings.map((item) => (
                  <li key={`warning:${item.code}`}>
                    <StatusBadge tone="warning">{text.warnings}</StatusBadge>{" "}
                    <span className="pcr-mono">{item.code}</span> {item.message}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {record.classificationRefs.length > 0 ? (
            <section aria-labelledby="pcr-classification-heading">
              <h2 id="pcr-classification-heading" className="pcr-section-title">
                {text.classification}
              </h2>
              <div className="pcr-chip-row">
                {record.classificationRefs.map((reference) => (
                  <span
                    key={`${reference.system}:${reference.version}:${reference.code}`}
                    className="pcr-chip"
                  >
                    <span className="pcr-mono">
                      {reference.system} {reference.version}:{reference.code}
                    </span>
                    {reference.mapping_type
                      ? ` · ${reference.mapping_type}`
                      : ""}
                  </span>
                ))}
              </div>
            </section>
          ) : null}

          <section aria-labelledby="pcr-source-heading">
            <h2 id="pcr-source-heading" className="pcr-section-title">
              {text.source}
            </h2>
            <div className="pcr-chip-row">
              {source ? (
                <a
                  className="pcr-chip pcr-chip--link"
                  href={source}
                  title={text.sourceLink}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="pcr-mono pcr-source-id">
                    {record.sourcePath}
                  </span>
                </a>
              ) : (
                <span className="pcr-chip">
                  <span className="pcr-mono pcr-source-id">
                    {record.sourcePath}
                  </span>
                </span>
              )}
              {page.sourceSha256 ? (
                <span
                  className="pcr-chip"
                  title={`${text.hash}: ${page.sourceSha256}`}
                >
                  <span className="pcr-mono">
                    sha256:
                    {page.sourceSha256.replace(/^sha256:/u, "").slice(0, 12)}…
                  </span>
                </span>
              ) : null}
            </div>
          </section>
        </details>
      </div>

      {record.versions?.length ? (
        <section aria-labelledby="pcr-history-heading">
          <h2 id="pcr-history-heading">
            {text.zh ? "历史发布版本" : "Published versions"}
          </h2>
          <ul>
            {record.versions
              .filter((version) => version.urls[code])
              .map((version) => (
                <li key={version.version}>
                  <a href={version.urls[code]}>{version.version}</a>
                </li>
              ))}
          </ul>
        </section>
      ) : null}

      <div className="pcr-document">
        <DocumentBody html={html} />
      </div>

      {parts.length > 1 ? (
        <nav className="pcr-chapters not-prose" aria-label={text.chapters}>
          <h2 className="pcr-section-title">{text.chapters}</h2>
          <p className="pcr-section-lede">{text.chaptersNote}</p>
          <ol className="pcr-chapter-list">
            {parts.map((part) => {
              const current = part.url === page.url;
              const label = part.label.replace(/^\d+\.\s*/u, "");
              return (
                <li key={part.url} data-current={current ? "true" : undefined}>
                  <Link
                    href={part.url}
                    aria-label={part.label}
                    aria-current={current ? "page" : undefined}
                  >
                    <span className="pcr-chapter-index" aria-hidden="true">{part.index + 1}</span>
                    <span className="pcr-chapter-label">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
          <div className="pcr-chapter-actions">
            {previous ? (
              <Link className="pcr-action" href={previous.url} rel="prev">
                {text.previous}: {previous.label}
              </Link>
            ) : null}
            {next ? (
              <Link className="pcr-action" href={next.url} rel="next">
                {text.next}: {next.label}
              </Link>
            ) : null}
          </div>
        </nav>
      ) : null}

      <StructuredData
        page={page}
        record={record}
        trails={trails}
        headline={page.title}
      />

      <div className="pcr-front not-prose">
        <DownloadList
          downloads={downloads}
          labels={{
            heading: text.downloads,
            note: text.downloadsNote,
            hash: text.hash,
          }}
        />
        <StructuredSummary record={record} page={page} />
        <DataInspector key={record.dataPath} dataUrl={record.dataUrl} dataKey={record.dataKey} labels={text.inspector} />
      </div>
    </PcrPage>
  );
}
