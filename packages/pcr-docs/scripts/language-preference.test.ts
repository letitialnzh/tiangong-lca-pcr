import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LANGUAGE_PREFERENCE_KEY, manualLanguageTarget, preferredRoute, preserveLocationSuffix,
  readLanguagePreference, rememberLanguagePreference,
} from '../lib/language-preference.ts';

const languages = { zh: 'zh-CN', en: 'en-US', 'zh-TW': 'zh-TW', de: 'de-DE' };
test('manual selection precedes ordered browser languages; invalid storage is ignored', () => {
  assert.equal(preferredRoute(languages, ['en-US'], 'zh'), 'zh');
  assert.equal(preferredRoute(languages, ['ja-JP', 'de-AT', 'zh-CN'], null), 'de');
  assert.equal(preferredRoute(languages, ['ja-JP', 'zh-CN', 'en-US'], 'deleted'), 'zh');
  assert.equal(preferredRoute(languages, ['EN-gb', 'zh-CN'], null), 'en');
  assert.equal(preferredRoute(languages, ['zh-TW'], null), 'zh-TW');
  assert.equal(preferredRoute(languages, ['zh-HK'], null), 'zh');
  assert.equal(preferredRoute(languages, ['fr-FR'], null), 'en');
  assert.equal(preferredRoute(languages, [], null), 'en');
});
test('manual homes are explicit and verified document counterparts preserve their identity and suffix', () => {
  assert.equal(manualLanguageTarget('/', 'zh'), '/zh/');
  assert.equal(manualLanguageTarget(undefined, 'en'), '/en/');
  assert.equal(manualLanguageTarget('/zh/docs/pcr/a/b/c/', 'zh'), '/zh/docs/pcr/a/b/c/');
  assert.equal(preserveLocationSuffix('/zh/', '?source=external', '#method'), '/zh/?source=external#method');
});
test('both storage getter denial and read/write denial leave language navigation usable', () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'window');
  try {
    const blocked = { get localStorage(): never { throw new Error('Storage blocked'); } };
    Object.defineProperty(globalThis, 'window', { configurable: true, value: blocked });
    assert.equal(readLanguagePreference(), null);
    assert.doesNotThrow(() => rememberLanguagePreference('zh'));
    Object.defineProperty(globalThis, 'window', { configurable: true, value: { localStorage: {
      getItem(): never { throw new Error('Read blocked'); }, setItem(): never { throw new Error('Write blocked'); },
    } } });
    assert.equal(readLanguagePreference(), null);
    assert.doesNotThrow(() => rememberLanguagePreference('en'));
    const stored = new Map<string, string>();
    Object.defineProperty(globalThis, 'window', { configurable: true, value: { localStorage: {
      getItem(key: string) { return stored.get(key) ?? null; },
      setItem(key: string, value: string) { stored.set(key, value); },
    } } });
    rememberLanguagePreference('zh');
    assert.equal(stored.get(LANGUAGE_PREFERENCE_KEY), 'zh');
    assert.equal(readLanguagePreference(), 'zh');
  } finally {
    if (original) Object.defineProperty(globalThis, 'window', original);
    else Reflect.deleteProperty(globalThis, 'window');
  }
});
