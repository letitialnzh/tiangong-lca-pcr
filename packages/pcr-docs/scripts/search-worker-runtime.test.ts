import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

for (const schemaVersion of [1, 2, 3]) for (const [scenario, description] of [
  ['wire-roundtrip', 'worker imports every export string exactly and preserves complete result records'],
  ['entry-format-retry', 'worker rejects entries from the wrong wire format and permits a valid retry'],
  ['sparse-metadata', 'worker rejects incompatible sparse metadata and permits an exact valid retry'],
  ['english-rank', 'real serialized English index ranks exact/prefix/title/body hits predictably'],
  ['chinese', 'real serialized Chinese index retains Han matches and complete result context'],
  ['normalization', 'worker searches normalized fullwidth terms and complete machine identifiers'],
  ['multi-shard', 'worker merges real shards by URL without inventing orphan index records'],
  ['limit', 'worker ranks multi-shard results before enforcing its thirty-result limit'],
  ['lazy', 'concurrent worker requests share one lazy manifest/index initialization'],
  ['manifest-retry', 'failed manifest fetch can be retried without retaining a rejected load'],
  ['manifest-shape', 'worker rejects malformed manifest identity and shard inventories'],
  ['shard-retry', 'failed shard fetch can be retried with the real serialized index'],
  ['shard-url', 'worker rejects shard locators outside its generated search namespace'],
  ['shard-shape', 'worker rejects malformed serialized payloads and record fields'],
  ['serialized-retry', 'real index import failure resets initialization and permits a valid retry'],
  ['requests', 'invalid requests cannot initialize or fetch the search index'],
  ['empty', 'empty index inventories and unmatched queries return complete empty results'],
] as const) test(`v${schemaVersion}: ${description}`, () => {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL('./fixtures/search-worker-runtime.ts', import.meta.url)), scenario, String(schemaVersion)], {
    encoding: 'utf8', timeout: 30_000, maxBuffer: 2 * 1024 * 1024,
  });
  assert.equal(result.error, undefined); assert.equal(result.signal, null);
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.match(result.stdout, new RegExp(`PASS ${scenario}\\b`));
});
