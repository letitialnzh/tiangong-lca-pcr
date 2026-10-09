/** Only a reader's explicit selection is stored; detected browser languages remain transient. */
export const LANGUAGE_PREFERENCE_KEY = 'pcr-docs-language';

export function preferredRoute(
  languageCodes: Readonly<Record<string, string>>,
  browserLanguages: readonly string[],
  manual: string | null,
): string {
  const routes = Object.keys(languageCodes);
  if (manual !== null && routes.includes(manual)) return manual;
  for (const language of browserLanguages) {
    const normalized = language.toLowerCase();
    const exact = routes.find((route) =>
      route.toLowerCase() === normalized || languageCodes[route]?.toLowerCase() === normalized,
    );
    if (exact) return exact;
    // Exact regional translations win; otherwise use the site's supported base-language alias.
    const base = normalized.split('-')[0];
    const aliased = routes.find((route) => route === base);
    if (aliased) return aliased;
    const related = routes.find((route) => languageCodes[route]?.split('-')[0]?.toLowerCase() === base);
    if (related) return related;
  }
  return routes.find((route) => languageCodes[route] === 'en-US') ?? 'en';
}

export function readLanguagePreference(): string | null {
  try {
    return window.localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
  } catch {
    return null;
  }
}

export function rememberLanguagePreference(route: string): void {
  try {
    window.localStorage.setItem(LANGUAGE_PREFERENCE_KEY, route);
  } catch {
    // Navigation still honours this selection when browser storage is unavailable.
  }
}

/** A manual home choice stays explicit even when the Chinese canonical points to `/`. */
export function manualLanguageTarget(target: string | undefined, route: string): string {
  return !target || target === '/' ? `/${route}/` : target;
}

export function preserveLocationSuffix(target: string, search: string, hash: string): string {
  return `${target}${search}${hash}`;
}
