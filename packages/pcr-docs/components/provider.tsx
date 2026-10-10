'use client';

import SearchDialog from '@/components/search-dialog';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { DefaultSearchDialogProps } from 'fumadocs-ui/components/dialog/search-default';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { alternateTarget } from '@/lib/locale-link';
import { currentAlternates } from '@/lib/alternates-client';
import {
  manualLanguageTarget, preferredRoute, preserveLocationSuffix,
  readLanguagePreference, rememberLanguagePreference,
} from '@/lib/language-preference';

type Locales = Array<{ locale: string; name: string }>;

/**
 * Locale navigation is owned here. A document publishes its verified counterparts keyed by source
 * language code, so a switch prefers that exact counterpart path and otherwise opens the requested
 * language's home when the manifest declared no counterpart.
 */
export function Provider({
  children,
  locale,
  defaultLanguage,
  translations,
  locales,
  languageCodes,
  libraryUrl,
  coverageUrl,
}: {
  children: ReactNode;
  locale: string;
  defaultLanguage: string;
  translations: Record<string, string>;
  locales: Locales;
  /** URL alias (`en`) to source language code (`en-US`), used to read the alternates map. */
  languageCodes: Record<string, string>;
  libraryUrl: string;
  coverageUrl?: string;
}) {
  const router = useRouter();
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    // Localized URLs are explicit reader intent. Only the neutral entry negotiates a language.
    if (pathname !== '/') return;
    const next = preferredRoute(
      languageCodes, navigator.languages.length ? navigator.languages : [navigator.language],
      readLanguagePreference(),
    );
    if (next !== locale) {
      router.replace(preserveLocationSuffix(`/${next}/`, window.location.search, window.location.hash));
    }
  }, [pathname, languageCodes, locale, router]);

  return (
    <RootProvider
      i18n={{
        locale,
        defaultLanguage,
        hideLocale: 'never',
        translations,
        locales,
        onLocaleChange: (next) => {
          if (!locales.some((language) => language.locale === next)) return;
          rememberLanguagePreference(next);
          const declared = alternateTarget(currentAlternates(), languageCodes[next] ?? next);
          const target = manualLanguageTarget(declared, next);
          if (target !== pathname) {
            // Explicit language changes read the exported document directly. The
            // destination owns its HTML language and verified counterpart content.
            window.location.assign(preserveLocationSuffix(target, window.location.search, window.location.hash));
          }
        },
      }}
      search={{
        SearchDialog,
        // Fumadocs types dialog options as the default dialog's props; the extra route targets are
        // consumed by our own dialog, which declares them as optional.
        options: {
          libraryUrl,
          coverageUrl,
          locale,
          languageCodes,
        } as Partial<DefaultSearchDialogProps> & Record<string, unknown>,
      }}
      theme={{ enabled: true }}
    >
      {children}
    </RootProvider>
  );
}
