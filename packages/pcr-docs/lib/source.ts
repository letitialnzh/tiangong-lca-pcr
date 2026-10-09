import { createDocumentSource } from './content-source.ts';
import type { Folder, Item, Node as PageTreeNode, Root } from 'fumadocs-core/page-tree';
import type { DocPage, Download, Language, PcrRecord, SiteManifest } from './types';
import { DEFAULT_ROUTE } from './i18n';
import { getSiteManifest } from './generated';
import { recordPages, recordNavigationNode } from './record-navigation.ts';
import { gettingStartedGuide } from './getting-started';

export type PcrSourcePage = {
  path: string;
  slugs: string[];
  url: string;
  data: {
    title: string;
    description: string;
    doc: DocPage;
  };
};

/* ------------------------------------------------------- source language vs route alias */

/**
 * Source BCP 47 codes (`en-US`) and URL aliases (`en`) are two different keys. Pages, records,
 * titles, download lists and coverage tables are keyed by the source code; routes, slugs and
 * presentation are keyed by the alias.
 */
export function languageFor(
  manifest: SiteManifest,
  source: { language?: string; locale?: string },
): Language | undefined {
  return (
    manifest.languages.find((language) => language.code === source.language) ??
    manifest.languages.find((language) => language.route === source.locale) ??
    manifest.languages.find((language) => language.route === DEFAULT_ROUTE)
  );
}

/** Language code that owns a record's text for the requested route. */
export function languageCodeFor(manifest: SiteManifest, locale: string): string {
  return languageFor(manifest, { locale })?.code ?? manifest.defaultLocale;
}

export function recordTitle(record: PcrRecord, code: string, fallback: string): string {
  return record.title[code] ?? record.title[fallback] ?? record.id;
}

export function titleFor(
  map: Record<string, string | null> | undefined,
  code: string,
  fallback: string,
  slug: string,
): string {
  return map?.[code] ?? map?.[fallback] ?? slug;
}

/* ------------------------------------------------------- URL helpers (pure, no manifest read) */

/**
 * The generator writes absolute URLs. Turning one into a same-origin route is a pure string
 * operation, so every helper below takes the pinned origin as an argument and never reads the
 * manifest itself — that keeps them usable from client components without pulling in Node.
 */
function relative(origin: string, url: string | undefined): string | undefined {
  if (!url) return undefined;
  const path = url.startsWith(origin) ? url.slice(origin.length) : url;
  return path.startsWith('/') && !path.startsWith('//') ? path : undefined;
}

/** A record page for one language, as a same-origin route. */
export function recordUrls(
  origin: string,
  record: PcrRecord,
  code: string,
  fallback: string,
): string | undefined {
  return relative(origin, record.urls[code]) ?? relative(origin, record.urls[fallback]);
}

/** Absolute URLs from the generator become same-origin paths for the static export. */
export function routeUrl(origin: string, url: string | undefined): string | undefined {
  return relative(origin, url);
}

/** All declared original artifacts are downloadable. Sorting prioritizes the reading language;
 * a raw optional translation is not a claim that a current translated HTML page exists. */
export function recordDownloads(record: PcrRecord, code: string): Download[] {
  return [...(record.downloads ?? [])].sort((a, b) => Number(b.name === `pcr.${code}.md`) - Number(a.name === `pcr.${code}.md`));
}

/**
 * Every page may carry a per-source Git modification time; the generator only publishes it once
 * its own tracking lands, so this reader stays tolerant and falls back to the snapshot date.
 */
export function pageLastModified(page: DocPage, fallback: string): string {
  const declared = (page as DocPage & { lastModified?: string }).lastModified;
  return typeof declared === 'string' && declared.length > 0 ? declared : fallback;
}

/** The canonical source pinned to the exact snapshot commit, never to a moving branch. */
export function sourceUrl(manifest: SiteManifest, sourcePath: string | undefined): string | undefined {
  if (!sourcePath) return undefined;
  return `https://github.com/tiangong-lca/pcr/blob/${manifest.sourceCommit}/${sourcePath}`;
}

/**
 * Ordered chapter inventory for one record and language: the generated parts sorted by their
 * declared index. Every part stays linked so no chapter is reachable only through navigation.
 */
export function recordParts(
  manifest: SiteManifest,
  locale: string,
  record: PcrRecord,
  origin: string,
): Array<{ index: number; label: string; url: string }> {
  return recordPages(manifest, record, languageCodeFor(manifest, locale))
    .map((page) => ({
      index: page.part?.index ?? 0,
      label: page.part?.label ?? page.title,
      url: relative(origin, page.url) ?? page.url,
    }));
}

/* ------------------------------------------------------- fumadocs source */

/**
 * URL shape follows the manifest's `page.url`. `trailingSlash` is on, so every link this source
 * hands to Fumadocs carries the trailing slash the static export actually emits.
 */
export const source = createDocumentSource(getSiteManifest());

export function sourcePage(slugs: string[] | undefined, locale: string): PcrSourcePage | undefined {
  return source.getPage(slugs, locale) as PcrSourcePage | undefined;
}

/**
 * Static params for the docs catch-all. Home and 404 routes are ordinary route files, so a page
 * with no slugs is not emitted here; `dynamicParams = false` makes everything else a real 404.
 */
export function sourceParams(): Array<{ lang: string; slug: string[] }> {
  const manifest = getSiteManifest();
  const locales = new Set(manifest.languages.map((language) => language.route));
  return manifest.pages
    .filter((page) => locales.has(page.locale) && page.slugs.length > 0)
    .map((page) => ({ lang: page.locale, slug: page.slugs }));
}

/* ------------------------------------------------------- library directory */

export type DomainNav = {
  slug: string;
  title: string;
  subdomains: Array<{ slug: string; title: string; records: PcrRecord[] }>;
  records: PcrRecord[];
};

/** Title-cased fallback for the few grouping slugs the library does not translate. */
export function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

/**
 * Domain → subdomain → record, derived from the records the manifest actually publishes. Domain
 * titles come from the manifest's source-language key; grouping slugs fall back to their slug.
 */
export function buildDomainNav(locale: string): DomainNav[] {
  const manifest = getSiteManifest();
  const code = languageCodeFor(manifest, locale);
  const fallback = manifest.defaultLocale;
  const byDomain = new Map<string, DomainNav>();
  const domainTitle = (slug: string) =>
    titleFor(
      manifest.categoryTitles?.[slug] ?? manifest.domains.find((item) => item.slug === slug)?.title,
      code,
      fallback,
      titleFromSlug(slug),
    );

  for (const record of manifest.records) {
    if (!record.urls[code]) continue;
    const [domainSlug, subdomainSlug] = record.slug;
    if (!domainSlug) continue;
    let domain = byDomain.get(domainSlug);
    if (!domain) {
      domain = { slug: domainSlug, title: domainTitle(domainSlug), subdomains: [], records: [] };
      byDomain.set(domainSlug, domain);
    }
    if (!subdomainSlug) {
      domain.records.push(record);
      continue;
    }
    let subdomain = domain.subdomains.find((item) => item.slug === subdomainSlug);
    if (!subdomain) {
      subdomain = { slug: subdomainSlug, title: domainTitle(subdomainSlug), records: [] };
      domain.subdomains.push(subdomain);
    }
    subdomain.records.push(record);
  }

  const ordered = manifest.domains.map((item) => item.slug).filter((slug) => byDomain.has(slug));
  const rest = [...byDomain.keys()].filter((slug) => !ordered.includes(slug));
  return [...ordered, ...rest].map((slug) => byDomain.get(slug)!);
}

export function navMessages(locale: string) {
  const zh = locale === DEFAULT_ROUTE;
  return {
    library: zh ? 'PCR 库' : 'PCR library',
    coverage: zh ? '分类覆盖' : 'Classification coverage',
    domainCatalog: zh ? '浏览领域目录' : 'Browse domain',
    subdomainCatalog: zh ? '浏览全部记录' : 'Browse all records',
  };
}

/** The library root page for a route: the manifest's top-level catalog page. */
export function libraryPage(locale: string): DocPage | undefined {
  const manifest = getSiteManifest();
  return manifest.pages.find(
    (page) => page.kind === 'catalog' && page.locale === locale && page.slugs.length === 1,
  );
}

export function coveragePage(locale: string): DocPage | undefined {
  const manifest = getSiteManifest();
  const declared = manifest.coverage[0];
  const code = languageCodeFor(manifest, locale);
  const url =
    relative(manifest.origin, declared?.url?.[code]) ??
    relative(manifest.origin, declared?.url?.[manifest.defaultLocale]);
  if (url) {
    const match = manifest.pages.find((page) => page.locale === locale && page.url === url);
    if (match) return match;
  }
  return manifest.pages.find((page) => page.kind === 'coverage' && page.locale === locale);
}

/** Library root as a route, used by the shell header, the catalog fallback and search entries. */
export function libraryUrl(locale: string): string {
  return libraryPage(locale)?.url ?? `/${locale}/docs/pcr/`;
}

/* ------------------------------------------------------- scoped sidebar */

export type NavContext = {
  locale: string;
  /** The library index can carry the complete tree without repeating it on every document. */
  catalogRoot?: boolean;
  /** Active top-level domain, when the route is inside one. */
  domain?: string;
  /** Active subdomain folder, when the route is deeper than the domain. */
  subdomain?: string;
  /** Record whose page is open, so its chapters can be listed in place. */
  record?: PcrRecord;
};

const treeCache = new Map<string, Root>();

/**
 * Sidebar entry for the open record: its chapters, so every part of a split document is reachable
 * from the navigation as well as from the page's own chapter inventory.
 */
function recordNode(
  manifest: SiteManifest,
  locale: string,
  code: string,
  record: PcrRecord,
): PageTreeNode {
  const title = recordTitle(record, code, manifest.defaultLocale);
  const url = recordUrls(manifest.origin, record, code, manifest.defaultLocale) ?? libraryUrl(locale);
  return recordNavigationNode(manifest,record,code,{title,url});
}

/** A small, stable window around the open record; the catalog link carries the full sibling set. */
function nearbyRecords(records: PcrRecord[], current: PcrRecord | undefined): PcrRecord[] {
  if (!current) return [];
  const index = records.findIndex((record) => record.id === current.id);
  if (index < 0) return [];
  const start = Math.max(0, Math.min(index - 3, records.length - 7));
  return records.slice(start, start + 7);
}

function subdomainNode(
  manifest: SiteManifest,
  locale: string,
  code: string,
  domainSlug: string,
  subdomain: DomainNav['subdomains'][number],
  context: NavContext,
  scope: 'all' | 'nearby' | 'catalog-only',
): PageTreeNode {
  const active = subdomain.slug === context.subdomain;
  const fallback = manifest.defaultLocale;
  const messages = navMessages(locale);
  const records =
    scope === 'all'
      ? subdomain.records
      : scope === 'nearby'
        ? nearbyRecords(subdomain.records, context.record)
        : [];
  const catalog = manifest.pages.find(
    (page) =>
      page.kind === 'catalog' &&
      page.locale === locale &&
      page.slugs.join('/') === ['pcr', domainSlug, subdomain.slug].join('/'),
  );
  return {
    type: 'folder',
    name: subdomain.title,
    collapsible: true,
    defaultOpen: active,
    children: [
      { type: 'page', name: messages.subdomainCatalog, url: catalog?.url ?? libraryUrl(locale) },
      ...(active && context.record &&
      !subdomain.records.some(
        (record) => record.id === context.record?.id && record.version === context.record?.version,
      )
        ? [recordNode(manifest, locale, code, context.record)]
        : []),
      ...records.map((record): PageTreeNode => {
        if (context.record?.id === record.id && context.record?.version === record.version) {
          return recordNode(manifest, locale, code, record);
        }
        return {
          type: 'page',
          name: recordTitle(record, code, fallback),
          url: recordUrls(manifest.origin, record, code, fallback) ?? libraryUrl(locale),
        };
      }),
    ],
  };
}

/**
 * The library index exposes the complete expandable tree. Domain and subdomain directories expose
 * their own leaves; document pages expose a small window of nearby leaves, the full directory link,
 * and the open record's chapters. This keeps repeated document-page payloads within the export budget.
 */
export function navigationTree(context: NavContext): Root {
  const key = [
    context.locale,
    context.catalogRoot ? 'catalog' : '',
    context.domain ?? '',
    context.subdomain ?? '',
    context.record?.sourcePath ?? '',
    context.record?.version ?? '',
  ].join('|');
  const cached = treeCache.get(key);
  if (cached) return cached;

  const manifest = getSiteManifest();
  const locale = context.locale;
  const code = languageCodeFor(manifest, locale);
  const fallback = manifest.defaultLocale;
  const messages = navMessages(locale);
  const catalogPage = libraryPage(locale);
  const coverage = coveragePage(locale);
  const library = catalogPage?.url ?? libraryUrl(locale);
  const children: PageTreeNode[] = [];

  const guideEntry = gettingStartedGuide(locale);
  const guide = manifest.pages.find(page => page.kind === 'guide' && page.url === guideEntry.url);
  if (guide) children.push({ type: 'page', name: guideEntry.label, url: guide.url });

  if (catalogPage) children.push({ type: 'page', name: messages.library, url: catalogPage.url });
  if (coverage) children.push({ type: 'page', name: messages.coverage, url: coverage.url });

  const domains = buildDomainNav(locale);
  for (const domain of domains) {
    const active = domain.slug === context.domain;
    const directory = context.catalogRoot || (active && !context.subdomain && !context.record);
    const directRecords = directory
      ? domain.records
      : active && !context.subdomain
        ? nearbyRecords(domain.records, context.record)
        : [];
    const domainCatalog = manifest.pages.find(
      (page) =>
        page.kind === 'catalog' &&
        page.locale === locale &&
        page.slugs.join('/') === ['pcr', domain.slug].join('/'),
    );
    children.push({
      type: 'folder',
      name: domain.title,
      collapsible: true,
      defaultOpen: active,
      children: active || context.catalogRoot
        ? [
            { type: 'page', name: messages.domainCatalog, url: domainCatalog?.url ?? library },
            ...directRecords.map(
              (record): PageTreeNode =>
                context.record?.id === record.id && context.record?.version === record.version
                  ? recordNode(manifest, locale, code, record)
                  : {
                      type: 'page',
                      name: recordTitle(record, code, fallback),
                      url: recordUrls(manifest.origin, record, code, fallback) ?? library,
                    },
            ),
            ...domain.subdomains.map((subdomain) => {
              const selected = subdomain.slug === context.subdomain;
              const scope = directory || (selected && !context.record)
                ? 'all'
                : selected
                  ? 'nearby'
                  : 'catalog-only';
              return subdomainNode(
                manifest,
                locale,
                code,
                domain.slug,
                subdomain,
                context,
                scope,
              );
            }),
          ]
        : [
            {
              type: 'page',
              name: domain.title,
              url: domainCatalog?.url ?? library,
            },
          ],
    });
  }

  if (context.record && !domains.some(domain=>domain.slug===context.domain && domain.subdomains.some(subdomain=>subdomain.slug===context.subdomain))) {
    children.push(recordNode(manifest, locale, code, context.record));
  }

  const tree: Root = { type: 'root', name: catalogPage?.title ?? messages.library, children };
  treeCache.set(key, tree);
  return tree;
}
