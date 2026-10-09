import Link from 'next/link';
import { gettingStartedGuide } from '@/lib/getting-started';
import type { PcrRecord, SiteManifest } from '@/lib/types';
import { StatusBadge, lifecycleStatus, maturityLabel, toneFor } from '@/components/status-badge';
import {
  buildDomainNav,
  coveragePage,
  languageCodeFor,
  libraryUrl,
  recordTitle,
  recordUrls,
} from '@/lib/source';

/**
 * The library's job on the landing surface is to get a reader to an applicable PCR. The library
 * is browsed and searched, so the count is supporting evidence rather than the headline.
 */
const copy = {
  zh: {
    eyebrow: '天工产品类别规则',
    claim: '为产品类别找到可用的 PCR，再开始建模',
    description:
      '产品类别规则（PCR）为特定产品类别规定核算范围、参考流、数据收集与验证要求。本库收录天工 LCA 的 PCR 记录，中英双语对照，并提供逐字节可校验的源文件。',
    browse: '浏览 PCR 目录',
    gettingStarted: '开始使用',
    search: '搜索 PCR',
    statusTitle: '当前库状态',
    domains: '行业领域',
    pcrs: 'PCR 记录',
    languages: '内容语言',
    sourceCommit: '源提交',
    anatomyTitle: '一条 PCR 记录的构成',
    anatomyLede: '以库中一条真实记录为例。每个字段都可在记录页展开完整值。',
    openRecord: '打开这条记录',
    scope: '适用范围',
    scopeBody: '该 PCR 覆盖的产品类别边界，以及不在范围内的相邻类别。',
    referenceFlow: '参考流',
    referenceFlowBody: '功能单位、参考流方向与数量基准，是后续过程与生命周期模型对齐的锚点。',
    collection: '数据收集',
    collectionBody: '过程清单、采集字段与单位要求，决定前景数据包需要提供什么。',
    evidence: '验证要求',
    evidenceBody: '校验规则、数据质量要求与未解决关系的处理方式。',
    browseTitle: '按行业领域浏览',
    browseLede: '每个领域下按子领域分组，逐条记录都有独立页面。',
    coverageLink: '查看 CPC 分类覆盖',
    reviewNote:
      '这些记录当前处于候选状态：方法学内容已编写，尚未完成方法学评审。网站发布不等于方法学获批。',
    recordLabel: '示例记录',
    statusLabel: '状态',
    maturityLabel: '成熟度',
  },
  en: {
    eyebrow: 'TianGong PCR · Product category rules',
    claim: 'Find an applicable PCR before modelling begins',
    description:
      'Product category rules define the scope, reference flow, data collection and validation requirements for a product category. This library publishes TianGong LCA PCR records in Chinese and English, with byte-verifiable source files.',
    browse: 'Browse the PCR catalog',
    gettingStarted: 'Getting started',
    search: 'Search PCRs',
    statusTitle: 'Library state',
    domains: 'Domains',
    pcrs: 'PCR records',
    languages: 'Content languages',
    sourceCommit: 'Source commit',
    anatomyTitle: 'What one PCR record contains',
    anatomyLede: 'A real record from this library. Every field expands to its complete value on the record page.',
    openRecord: 'Open this record',
    scope: 'Scope',
    scopeBody: 'The product-category boundary this PCR covers, and the neighbouring categories it does not.',
    referenceFlow: 'Reference flow',
    referenceFlowBody: 'The functional unit, flow direction and quantity basis that later processes and models align to.',
    collection: 'Data collection',
    collectionBody: 'Process inventory, required fields and units — what a foreground data package must provide.',
    evidence: 'Validation',
    evidenceBody: 'Check rules, data-quality requirements and how unresolved relationships are handled.',
    browseTitle: 'Browse by domain',
    browseLede: 'Each domain groups its records by subdomain; every record has its own page.',
    coverageLink: 'See CPC classification coverage',
    reviewNote:
      'These records are candidates: methodology is authored but has not completed methodology review. Publishing a website does not approve methodology.',
    recordLabel: 'Example record',
    statusLabel: 'Status',
    maturityLabel: 'Maturity',
  },
};

function formatCount(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

function utcDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toISOString().slice(0, 10);
}

/** Newest authored record wins; ties break on id so the landing page stays deterministic. */
function featuredRecord(manifest: SiteManifest, code: string): PcrRecord | undefined {
  return [...manifest.records]
    .filter((record) => record.status !== 'scaffold' && Boolean(record.urls[code]))
    .sort((a, b) => {
      const left = a.updatedAt ?? '';
      const right = b.updatedAt ?? '';
      return right.localeCompare(left) || a.id.localeCompare(b.id);
    })
    .at(0);
}

function Anatomy({
  record,
  locale,
  code,
  fallback,
  origin,
  text,
}: {
  record: PcrRecord | undefined;
  locale: string;
  code: string;
  fallback: string;
  origin: string;
  text: (typeof copy)['zh'];
}) {
  const href = record
    ? (recordUrls(origin, record, code, fallback) ?? libraryUrl(locale))
    : libraryUrl(locale);
  const steps = [
    { title: text.scope, body: text.scopeBody },
    { title: text.referenceFlow, body: text.referenceFlowBody },
    { title: text.collection, body: text.collectionBody },
    { title: text.evidence, body: text.evidenceBody },
  ];
  return (
    <div className="pcr-anatomy">
      <ol className="pcr-anatomy-steps">
        {steps.map((step) => (
          <li key={step.title}>
            <span className="pcr-anatomy-step-title">{step.title}</span>
            <span className="pcr-anatomy-step-body">{step.body}</span>
          </li>
        ))}
      </ol>
      {record ? (
        <div className="pcr-anatomy-record">
          <span className="pcr-fact-label">{text.recordLabel}</span>
          <Link className="pcr-anatomy-link" href={href}>
            {recordTitle(record, code, fallback)}
          </Link>
          <div className="pcr-chip-row">
            <StatusBadge tone={toneFor('lifecycle', record.status)}>
              {lifecycleStatus(record.status, locale).label}
            </StatusBadge>
            <span className="pcr-chip">{maturityLabel(record.maturity, locale)}</span>
            {record.version ? <span className="pcr-chip pcr-mono">{record.version}</span> : null}
          </div>
          <Link className="pcr-anatomy-open" href={href}>
            {text.openRecord}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function HomeContent({
  manifest,
  locale,
}: {
  manifest: SiteManifest;
  locale: string;
}) {
  const text = copy[locale === 'zh' ? 'zh' : 'en'];
  const code = languageCodeFor(manifest, locale);
  const fallback = manifest.defaultLocale;
  const domains = buildDomainNav(locale);
  const record = featuredRecord(manifest, code);
  const library = libraryUrl(locale);
  const coverage = coveragePage(locale)?.url;

  // Every link resolves to a page the export actually emits: a generated catalog page, or a record.
  // A category heading is navigation for that category, so it opens the category's own catalog
  // page — the generated page whose slugs are `pcr/<domain>` or `pcr/<domain>/<subdomain>`.
  const catalogHref = (...slugs: string[]) => {
    const target = ['pcr', ...slugs].join('/');
    return (
      manifest.pages.find(
        (page) =>
          page.kind === 'catalog' && page.locale === locale && page.slugs.join('/') === target,
      )?.url ?? library
    );
  };

  return (
    <div className="pcr-shell pcr-home">
      <div className="pcr-flow">
        <section className="pcr-hero">
          <div className="pcr-hero-copy">
            <p className="pcr-eyebrow">{text.eyebrow}</p>
            <h1 className="pcr-display">{text.claim}</h1>
            <p className="pcr-lede">{text.description}</p>
            <div className="pcr-hero-actions">
              <Link className="pcr-action" href={gettingStartedGuide(locale).url}>
                {text.gettingStarted}
              </Link>
              <Link className="pcr-action pcr-action--primary" href={library}>
                {text.browse}
              </Link>
              {coverage ? (
                <Link className="pcr-action" href={coverage}>
                  {text.coverageLink}
                </Link>
              ) : null}
            </div>
          </div>
          <div className="pcr-hero-anatomy">
            <h2 className="pcr-section-title">{text.anatomyTitle}</h2>
            <p className="pcr-section-lede">{text.anatomyLede}</p>
            <Anatomy
              record={record}
              locale={locale}
              code={code}
              fallback={fallback}
              origin={manifest.origin}
              text={text}
            />
          </div>
        </section>

        <section className="pcr-home-state" aria-labelledby="pcr-home-state">
          <h2 id="pcr-home-state" className="pcr-section-title">
            {text.statusTitle}
          </h2>
          <dl className="pcr-facts" style={{ marginBlockStart: '0.75rem' }}>
            <div className="pcr-fact">
              <span className="pcr-fact-label">{text.pcrs}</span>
              <span className="pcr-fact-value pcr-fact-value--strong">
                {formatCount(manifest.counts.pcrs)}
              </span>
            </div>
            <div className="pcr-fact">
              <span className="pcr-fact-label">{text.domains}</span>
              <span className="pcr-fact-value pcr-fact-value--strong">
                {formatCount(domains.length)}
              </span>
            </div>
            <div className="pcr-fact">
              <span className="pcr-fact-label">{text.languages}</span>
              <span className="pcr-fact-value">
                {manifest.languages.map((language) => language.code).join(' · ') || '—'}
              </span>
            </div>
            <div className="pcr-fact">
              <span className="pcr-fact-label">{text.sourceCommit}</span>
              <span className="pcr-fact-value pcr-mono" title={manifest.sourceCommit}>
                {manifest.sourceCommit.slice(0, 12)}
              </span>
            </div>
          </dl>
          <p className="pcr-status-note" style={{ marginBlockStart: '0.75rem' }}>
            {text.reviewNote}
          </p>
          <p className="pcr-status-note" style={{ marginBlockStart: '0.25rem' }}>
            {text.sourceCommit}: <span className="pcr-mono">{utcDate(manifest.sourceDate)}</span>
          </p>
        </section>

        <section aria-labelledby="pcr-home-domains">
          <h2 id="pcr-home-domains" className="pcr-section-title">
            {text.browseTitle}
          </h2>
          <p className="pcr-section-lede">{text.browseLede}</p>
          <div className="pcr-domain-grid">
            {domains.map((domain) => (
              <article key={domain.slug} className="pcr-domain">
                <div className="pcr-domain-head">
                  <h3>
                    <Link href={catalogHref(domain.slug)}>{domain.title}</Link>
                  </h3>
                  <span className="pcr-count">
                    {formatCount(
                      domain.records.length +
                        domain.subdomains.reduce((total, item) => total + item.records.length, 0),
                    )}
                  </span>
                </div>
                <ul className="pcr-domain-subdomains">
                  {domain.subdomains.map((subdomain) => (
                    <li key={subdomain.slug}>
                      <Link href={catalogHref(domain.slug, subdomain.slug)}>
                        {subdomain.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
