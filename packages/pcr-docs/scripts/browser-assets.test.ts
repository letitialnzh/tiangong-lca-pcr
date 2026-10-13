import assert from 'node:assert/strict';
import test from 'node:test';
import {mkdtempSync, readFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {compileDocsBrowserAssets} from './browser-assets.ts';

test('compiled Worker ships its codec and reads v1/v2/v3 with unchanged real-engine results', () => {
  const outputRoot = mkdtempSync(path.join(tmpdir(), 'pcr-search-assets-test-'));
  try {
    const built = compileDocsBrowserAssets({outputRoot});
    assert.deepEqual(built.files, ['search-worker.mjs', 'search-terms.mjs', 'search-wire.mjs']);
    const worker = readFileSync(path.join(outputRoot, 'search-worker.mjs'), 'utf8');
    assert.match(worker, /"\.\/search-wire\.mjs"/u);
    assert.doesNotMatch(worker, /\.ts["']/u);
    for (const version of [1, 2, 3]) for (const scenario of ['wire-roundtrip', 'english-rank', 'chinese', 'normalization', 'serialized-retry']) {
      const result = spawnSync(process.execPath, [fileURLToPath(new URL('./fixtures/search-worker-runtime.ts', import.meta.url)), scenario, String(version), path.join(outputRoot, 'search-worker.mjs')], {encoding: 'utf8', timeout: 30_000});
      assert.equal(result.status, 0, result.stderr + result.stdout);
      assert.equal(result.error, undefined);
      assert.match(result.stdout, new RegExp(`PASS ${scenario}\\b`));
    }
  } finally {
    rmSync(outputRoot, {recursive: true, force: true});
  }
});
