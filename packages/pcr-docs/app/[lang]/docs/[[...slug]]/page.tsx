import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AlternateLinks } from '@/components/alternate-links';
import { BreadcrumbJsonLd, pageTrail } from '@/components/breadcrumb-jsonld';
import { Catalog, Coverage } from '@/components/catalog';
import { DocsShell } from '@/components/docs-shell';
import { DocumentBody } from '@/components/document-body';
import { CopyAgentPrompt } from '@/components/copy-agent-prompt';
import { ModuleScaffold } from '@/components/module-scaffold';
import { PcrPage } from '@/components/pcr-page';
import { PcrRecordPage } from '@/components/pcr-record';
import { DownloadList } from '@/components/download-list';
import { getPcrRecord, getSiteManifest, readPageHtml } from '@/lib/generated';
import { pageMetadata, pageStrings } from '@/lib/metadata';
import { sourcePage, sourceParams } from '@/lib/source';

export const dynamicParams = false;

type Params = { lang: string; slug?: string[] };

export function generateStaticParams() {
  return sourceParams();
}

export default async function DocumentPage({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params;
  const manifest = getSiteManifest();
  if (!manifest.languages.some((language) => language.route === lang)) notFound();

  const page = sourcePage(slug, lang);
  if (!page) notFound();
  const doc = page.data.doc;

  // The library root is the only catalog page that needs the full link set; the generator's
  // domain and subdomain pages already carry their own scoped record list.
  const isLibraryRoot = doc.kind === 'catalog' && doc.slugs.length === 1;
  // 'pcr' holds the whole library; the domains and subdomains below it are directory levels.
  const text = pageStrings(lang);
  const breadcrumb = <BreadcrumbJsonLd trail={pageTrail(lang, doc.url, doc.title)} />;
  const inLibrary = slug?.[0] === 'pcr';
  const record = doc.pcrId ? getPcrRecord(doc.pcrId, doc.recordVersion) : undefined;
  // Navigation can return to a real PCR root when translated chapter boundaries differ.
  // SEO hreflang remains the independently verified page.alternates map.
  const navigation = Object.fromEntries(manifest.languages.flatMap(language => {
    const exact = doc.alternates?.[language.code];
    const counterpart = manifest.pages.find(candidate => candidate.locale === language.route && candidate.slugs.join('/') === doc.slugs.join('/'));
    const target = exact ?? record?.urls[language.code] ?? (counterpart ? manifest.origin + counterpart.url : undefined);
    return target ? [[language.code, target.startsWith('/') ? manifest.origin + target : target]] : [];
  }));
  const alternates = <AlternateLinks alternates={navigation} origin={manifest.origin} />;
  const context = {
    locale: lang,
    catalogRoot: isLibraryRoot,
    domain: inLibrary ? slug?.[1] : undefined,
    subdomain: inLibrary && slug && slug.length >= 3 ? slug[2] : undefined,
    record,
  };

  if (doc.kind === 'pcr' && doc.pcrId) {
    if (!record) notFound();
    return (
      <DocsShell context={context}>
        {alternates}
        <PcrRecordPage page={doc} record={record} html={readPageHtml(doc)} />
      </DocsShell>
    );
  }

  if (isLibraryRoot) {
    return (
      <DocsShell context={context}>
        <PcrPage page={doc}>
          {alternates}
          {breadcrumb}
          <Catalog locale={lang} />
        </PcrPage>
      </DocsShell>
    );
  }

  if (doc.kind === 'coverage') {
    return (
      <DocsShell context={context}>
        <PcrPage page={doc}>
          {alternates}
          {breadcrumb}
          <Coverage locale={lang} />
        </PcrPage>
      </DocsShell>
    );
  }

  const html = readPageHtml(doc);
  if (!html) notFound();

  return (
    <DocsShell context={context}>
      <PcrPage page={doc}>
        {alternates}
        {breadcrumb}
        {doc.kind === 'module' ? <ModuleScaffold locale={lang} /> : null}
        {doc.kind === 'guide' ? (
          <>
            <CopyAgentPrompt locale={lang} />
            <div id="getting-started-content"><DocumentBody html={html} /></div>
          </>
        ) : <DocumentBody html={html} />}
        {doc.downloads && doc.downloads.length > 0 ? (
          <div className="pcr-front not-prose">
            <DownloadList
              downloads={doc.downloads}
              labels={{
                heading: text.moduleDownloads,
                note: text.moduleDownloadsNote,
                hash: 'SHA-256',
              }}
            />
          </div>
        ) : null}
      </PcrPage>
    </DocsShell>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const manifest = getSiteManifest();
  if (!manifest.languages.some((language) => language.route === lang)) return {};
  const page = sourcePage(slug, lang);
  if (!page) return {};
  return pageMetadata(page.data.doc, manifest);
}
