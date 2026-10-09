export type Language = {
  code: string;
  route: string;
  label: string;
  htmlLang: string;
  required: boolean;
};

export type Download = {
  name: string;
  url: string;
  sha256: string;
  bytes: number;
};
export type TocItem = { title: string; url: string; depth: number };
export type DocPage = {
  key: string;
  kind: "pcr" | "module" | "catalog" | "coverage" | "guide";
  language: string;
  locale: string;
  slugs: string[];
  url: string;
  title: string;
  description: string;
  pcrId?: string | undefined;
  recordVersion?: string | undefined;
  currentUrl?: string | undefined;
  currentLanguage?: string | undefined;
  lastModified?: string | undefined;
  moduleId?: string | undefined;
  domain?: string | undefined;
  subdomain?: string | undefined;
  htmlPath?: string | undefined;
  toc: TocItem[];
  indexable: boolean;
  canonical: string;
  alternates: Record<string, string>;
  part?: { index: number; total: number; label: string };
  sourcePath?: string | undefined;
  sourceSha256?: string | undefined;
  sourceNodeIds: string[];
  sourceHeadingId?: string | undefined;
  sourceHeadingAnchor?: string | undefined;
  downloads?: Download[] | undefined;
};

export type PcrRecord = {
  versions?: Array<{ version: string; urls: Record<string, string> }>;
  id: string;
  slug: string[];
  title: Record<string, string | null>;
  status: string;
  maturity: string;
  version: string | null;
  updatedAt: string | null;
  sourcePath: string;
  translationStatus: Record<string, string>;
  readiness: {
    status: string;
    blockers: Array<{ code: string; message: string }>;
    warnings: Array<{ code: string; message: string }>;
  };
  urls: Record<string, string>;
  pages: Record<string, string[]>;
  downloads: Download[];
  dataPath: string;
  dataUrl: string;
  classificationRefs: Array<{
    system: string;
    version: string;
    code: string;
    title?: string;
    mapping_type?: string;
  }>;
  modules: Record<string, string[]>;
};

export type SearchResult = {
  breadcrumbs?: string[] | undefined;
  id: string;
  type: "page";
  url: string;
  content: string;
  description: string;
};

export type SiteManifest = {
  schemaVersion: 1;
  sourceCommit: string;
  sourceDate: string;
  generatorVersion: string;
  origin: string;
  defaultLocale: string;
  categoryTitles?: Record<string, Record<string, string>> | undefined;
  languages: Language[];
  records: PcrRecord[];
  historicalRecords?: PcrRecord[] | undefined;
  pages: DocPage[];
  domains: Array<{
    slug: string;
    title: Record<string, string>;
    count: number;
  }>;
  coverage: Array<{
    system: string;
    version: string;
    summary: Record<string, number>;
    url: Record<string, string>;
    downloadUrl: string;
  }>;
  counts: {
    pcrs: number;
    pages: number;
    sourceBytes: number;
    languages: number;
  };
};
