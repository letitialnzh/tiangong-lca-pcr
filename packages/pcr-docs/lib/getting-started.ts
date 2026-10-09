/** Authored website guides; npm methodology content remains English-only. */
export const gettingStartedGuides = [
  { language: 'en-US', locale: 'en', sourcePath: 'packages/pcr-docs/public/getting-started.md', rawUrl: '/getting-started.md', url: '/en/docs/getting-started/', label: 'Getting started' },
  { language: 'zh-CN', locale: 'zh', sourcePath: 'packages/pcr-docs/public/getting-started.zh-CN.md', rawUrl: '/getting-started.zh-CN.md', url: '/zh/docs/getting-started/', label: '开始使用' },
] as const;

export function gettingStartedGuide(locale: string) {
  return gettingStartedGuides.find(guide => guide.locale === locale) ?? gettingStartedGuides[0];
}
