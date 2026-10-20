// Run from the repository root after npm run docs:build.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { gzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { searchTerms } from '../../../packages/pcr-docs/lib/search-terms.ts';
import { encodeSearchEntries, decodeSearchEntries, SEARCH_SCORE_SLOTS } from '../../../packages/pcr-docs/lib/search-wire.ts';

const require = createRequire(new URL('../../../packages/pcr-docs/package.json', import.meta.url));
const { Index } = require('flexsearch');
const exportRoot = 'packages/pcr-docs/out';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const report = [];
for (const language of ['en-US', 'zh-CN']) {
  const manifest = JSON.parse(fs.readFileSync(path.join(exportRoot, 'generated/search', language, 'manifest.json'), 'utf8'));
  assert.equal(manifest.schemaVersion, 5);
  let raw4 = 0, gzip4 = 0, raw5 = 0, gzip5 = 0, keys = 0, records = 0, queries = 0;
  const exportHashes = [], recordHashes = [];
  for (const shard of manifest.shards) {
    const bytes = fs.readFileSync(path.join(exportRoot, shard.url));
    assert.equal('sha256:' + hash(bytes), shard.sha256);
    assert.equal(bytes.length, shard.bytes);
    const compressed = gzipSync(bytes, { level: 9 }).length;
    assert.equal(compressed, shard.gzipBytes);
    const data = JSON.parse(bytes);
    assert.equal(data.records.length, shard.records);
    const native = decodeSearchEntries(data.entries, data.sparseMaps, 5, data.scoreMasks, data.postingDeltas, data.columnarMaps, data.joinedTerms);
    const v4 = encodeSearchEntries(native, 4);
    const native4 = decodeSearchEntries(v4.entries, v4.sparseMaps, 4, v4.scoreMasks, v4.postingDeltas, v4.columnarMaps);
    assert.equal(JSON.stringify(native4), JSON.stringify(native));
    const repacked = JSON.stringify({ ...encodeSearchEntries(native, 5), records: data.records });
    assert.equal(repacked, bytes.toString('utf8'));
    const baseline = JSON.stringify({ ...v4, records: data.records });
    raw4 += Buffer.byteLength(baseline);
    gzip4 += gzipSync(baseline, { level: 9 }).length;
    raw5 += bytes.length;
    gzip5 += compressed;
    keys += Object.keys(native).length;
    records += data.records.length;
    exportHashes.push(hash(JSON.stringify(native)));
    recordHashes.push(hash(JSON.stringify(data.records)));
    const options = { tokenize: 'strict', resolution: SEARCH_SCORE_SLOTS, encode: value => searchTerms(value, language) };
    const a = new Index(options), b = new Index(options);
    for (const key of Object.keys(native)) {
      a.import(key, JSON.stringify(native[key]));
      b.import(key, JSON.stringify(native4[key]));
    }
    const samples = ['wheat', 'construction', 'electricity', 'cpc54', '改造', '水泥', '废物', ...data.records.slice(0, 3).map(record => record.content)];
    for (const query of samples) {
      assert.deepEqual(a.search(query, { limit: 30 }), b.search(query, { limit: 30 }));
      queries++;
    }
  }
  assert.ok(raw5 <= 20_000_000 && gzip5 <= 4_000_000, `${language} budget`);
  report.push({
    language, shards: manifest.shards.length, records, export_keys: keys,
    v4: { rawBytes: raw4, gzipBytes: gzip4 },
    v5: { rawBytes: raw5, gzipBytes: gzip5 },
    gzip_saved_bytes: gzip4 - gzip5,
    gzip_reduction_percent: (gzip4 - gzip5) / gzip4 * 100,
    exact_roundtrip: true, matching_query_comparisons: queries,
    native_export_hashes_sha256: hash(JSON.stringify(exportHashes)),
    full_record_hashes_sha256: hash(JSON.stringify(recordHashes)),
  });
}
fs.mkdirSync('.reports', { recursive: true });
fs.writeFileSync('.reports/cpc54-search-v5-corpus.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
