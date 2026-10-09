import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createRequire, registerHooks } from 'node:module';
import { Index } from 'flexsearch';
import { searchTerms } from '../../lib/search-terms.ts';
import type { SearchResult } from '../../lib/types.ts';

const workerUrl = new URL('../../lib/search-worker.ts', import.meta.url);
const engineUrl = import.meta.resolve('flexsearch');
const require = createRequire(import.meta.url);
const object = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === 'object' && !Array.isArray(value);
const installed: unknown = JSON.parse(readFileSync(path.join(path.dirname(require.resolve('flexsearch')), '../package.json'), 'utf8'));
const manifest: unknown = JSON.parse(readFileSync(new URL('../../package.json', import.meta.url), 'utf8'));
assert.ok(object(installed) && object(manifest) && object(manifest.dependencies));
assert.equal(installed.version, manifest.dependencies.flexsearch, 'Use the exact repository-pinned engine copied by the exporter');
registerHooks({ resolve(specifier, context, nextResolve) {
  if (specifier === './search-engine.mjs' && context.parentURL === workerUrl.href) return nextResolve(engineUrl, context);
  return nextResolve(specifier, context);
} });

type Document = { record: SearchResult; text: string };
type Shard = { entries: Record<string, string>; records: SearchResult[] };
function nativeShard(shard: Shard): { entries: Record<string, unknown[]>; records: SearchResult[] } {
  const entries: Record<string, unknown[]> = {};
  for (const [key, value] of Object.entries(shard.entries)) {
    const parsed: unknown = JSON.parse(value);
    assert.ok(Array.isArray(parsed));
    assert.equal(JSON.stringify(parsed), value, 'Native arrays must roundtrip every pinned engine export exactly');
    entries[key] = parsed;
  }
  return { entries, records: shard.records };
}
type Reply = { id: unknown; results?: SearchResult[]; error?: string };
const document = (id: number, content: string, text = content, url = `/fixture/${id}/`, description = 'Verified fixture scope'): Document => ({
  record: { id: String(id), type: 'page', url, content, description, breadcrumbs: ['PCR library', 'Fixture domain'] }, text,
});
async function serialize(documents: Document[], language: string): Promise<Shard> {
  const index = new Index({ tokenize: 'strict', encode: (value: unknown) => searchTerms(value, language) });
  for (const entry of documents) index.add(Number(entry.record.id), entry.text);
  const entries: Record<string, string> = {};
  await index.export((key, value) => { entries[key] = value; });
  return { entries, records: documents.map(entry => entry.record) };
}

async function main(scenario: string, schemaVersion: 1 | 2): Promise<void> {
  const language = scenario === 'chinese' ? 'zh-CN' : 'en-US';
  const root = `/generated/search/${language}/`;
  const responses = new Map<string, { status: number; body: unknown }>();
  const requests: string[] = [];
  const replies: Reply[] = [];
  const imported: [string, string][] = [];
  const importEntry = Index.prototype.import;
  Index.prototype.import = function (key, payload) {
    imported.push([key, payload]);
    return importEntry.call(this, key, payload);
  };
  const scope: { onmessage?: (event: MessageEvent<unknown>) => Promise<void>; postMessage(value: Reply): void } = { postMessage(value) { replies.push(value); } };
  Reflect.set(globalThis, 'self', scope);
  let gate: Promise<void> | undefined;
  Reflect.set(globalThis, 'fetch', async (url: string) => {
    requests.push(url); if (gate && url.endsWith('manifest.json')) await gate;
    const response = responses.get(url) ?? { status: 404, body: {} };
    return new Response(JSON.stringify(response.body), { status: response.status, headers: { 'content-type': 'application/json' } });
  });
  let sequence = 0;
  const send = async (data: unknown): Promise<Reply> => {
    assert.ok(scope.onmessage); const count = replies.length;
    await scope.onmessage(new MessageEvent('message', { data }));
    assert.equal(replies.length, count + 1); return replies.at(-1)!;
  };
  const query = (text: string) => send({ id: ++sequence, query: text, language });
  const valid = (reply: Reply): SearchResult[] => { assert.equal(reply.error, undefined); assert.ok(Array.isArray(reply.results)); return reply.results; };
  const encode = (shard: Shard) => schemaVersion === 1 ? shard : nativeShard(shard);
  const install = async (documents: Document[][]) => {
    const shards: { url: string }[] = [];
    for (const [index, entries] of documents.entries()) { const url = root + 'shard-' + index + '.json'; shards.push({ url }); responses.set(url, { status: 200, body: encode(await serialize(entries, language)) }); }
    responses.set(root + 'manifest.json', { status: 200, body: { schemaVersion, language, shards } });
  };
  await install([[document(0, 'Wheat'), document(1, 'Wheat seed'), document(2, 'Organic wheat'), document(3, 'Field protocol', 'Protocol for wheat collection')]]);
  await import(workerUrl.href);
  assert.equal(requests.length, 0, 'Import alone must not fetch or initialize an index');

  if (scenario === 'wire-roundtrip') {
    const documents = [document(4, 'Wheat "seed"', 'Wheat seed 珊瑚 café', '/fixture/wheat/', 'Complete "quoted" context\\with a newline\nand Unicode 珊瑚'), document(9, 'Other scope', 'Wheat scope')];
    const original = await serialize(documents, language);
    await install([documents]);
    assert.deepEqual(valid(await query('wheat')), documents.map(entry => entry.record));
    assert.deepEqual(imported, Object.entries(original.entries), 'Worker must pass the original strings and key order into the real engine');
  } else if (scenario === 'entry-format-retry') {
    const target = root + 'shard-0.json';
    const original = responses.get(target)!;
    const shard = original.body; assert.ok(object(shard) && object(shard.entries));
    const [key, payload] = Object.entries(shard.entries)[0]!;
    const wrongFormat: unknown = schemaVersion === 1 ? JSON.parse(String(payload)) : JSON.stringify(payload);
    for (const invalid of [wrongFormat, null, 7, {}]) {
      responses.set(target, { status: 200, body: { ...shard, entries: { ...shard.entries, [key]: invalid } } });
      const failure = await query('wheat');
      assert.equal(failure.results, undefined);
      assert.equal(failure.error, 'Invalid serialized search data.');
    }
    responses.set(target, original);
    assert.equal(valid(await query('wheat')).length, 4);
    assert.equal(requests.filter(url => url.endsWith('manifest.json')).length, 5);
  } else if (scenario === 'english-rank') {
    assert.deepEqual(valid(await query('wheat')).map(item => item.content), ['Wheat', 'Wheat seed', 'Organic wheat', 'Field protocol']);
    assert.equal(valid(await query('unrelated-keyword')).length, 0);
  } else if (scenario === 'chinese') {
    const fullContext = '完整适用条件、例外与来源。'.repeat(1200);
    await install([[document(0, '珊瑚', '珊瑚和贝壳', '/zh/coral/', fullContext), document(1, '珊瑚材料', '珊瑚材料'), document(2, '其他产品', '前景过程使用珊瑚材料')]]);
    const matches = valid(await query('珊瑚'));
    assert.deepEqual(matches.map(item => item.content), ['珊瑚', '珊瑚材料', '其他产品']);
    assert.equal(matches[0]?.description, fullContext);
    assert.deepEqual(matches[0]?.breadcrumbs, ['PCR library', 'Fixture domain']);
    assert.equal(valid(await query('瑚')).length, 3);
  } else if (scenario === 'normalization') {
    await install([[document(0, 'LCA wheat', 'ＬＣＡ wheat'), document(1, 'Machine rule', 'pcr_rule_boundary 550e8400-e29b-41d4-a716-446655440000')]]);
    assert.equal(valid(await query('ＬＣＡ'))[0]?.content, 'LCA wheat');
    assert.equal(valid(await query('pcr_rule_boundary'))[0]?.content, 'Machine rule');
    assert.equal(valid(await query('550e8400-e29b-41d4-a716-446655440000'))[0]?.content, 'Machine rule');
  } else if (scenario === 'multi-shard') {
    await install([[document(0, 'Wheat', 'wheat', '/same/')], [document(0, 'Wheat duplicate', 'wheat', '/same/'), document(1, 'Wheat distinct', 'wheat', '/different/')]]);
    const shard = responses.get(root + 'shard-1.json')!.body as Shard;
    const orphan = await serialize([document(9, 'Orphan', 'wheat')], language);
    // A separate real index contributes a hit with no retained record; that hit grants no page.
    responses.set(root + 'shard-2.json', { status: 200, body: { ...encode(orphan), records: [] } });
    const current = responses.get(root + 'manifest.json')!.body; assert.ok(object(current) && Array.isArray(current.shards)); current.shards.push({ url: root + 'shard-2.json' });
    assert.equal(shard.records.length, 2);
    assert.deepEqual(valid(await query('wheat')).map(item => item.url), ['/same/', '/different/']);
  } else if (scenario === 'limit') {
    const docs = Array.from({ length: 45 }, (_, index) => document(index, index === 44 ? 'Wheat' : 'Wheat product ' + String(index).padStart(2, '0')));
    await install([docs.slice(0, 25), docs.slice(25)]);
    const result = valid(await query('wheat')); assert.equal(result.length, 30); assert.equal(result[0]?.content, 'Wheat');
    assert.equal(new Set(result.map(item => item.url)).size, 30);
  } else if (scenario === 'lazy') {
    let release: () => void = () => {}; gate = new Promise<void>(resolve => { release = resolve; });
    assert.ok(scope.onmessage);
    const first = scope.onmessage(new MessageEvent('message', { data: { id: 1, query: 'wheat', language } }));
    const second = scope.onmessage(new MessageEvent('message', { data: { id: 2, query: 'protocol', language } }));
    assert.equal(requests.filter(url => url.endsWith('manifest.json')).length, 1);
    release(); await Promise.all([first, second]);
    assert.equal(replies.length, 2); assert.ok(replies.every(reply => !reply.error));
    assert.equal(replies.find(reply => reply.id === 1)?.results?.length, 4);
    assert.equal(replies.find(reply => reply.id === 2)?.results?.[0]?.content, 'Field protocol');
    await query('seed'); assert.equal(requests.filter(url => url.endsWith('manifest.json')).length, 1);
    assert.equal(requests.filter(url => url.includes('shard-0')).length, 1);
  } else if (scenario === 'manifest-retry' || scenario === 'shard-retry') {
    const target = root + (scenario === 'manifest-retry' ? 'manifest.json' : 'shard-0.json');
    const saved = responses.get(target)!; responses.set(target, { status: 503, body: {} });
    assert.match((await query('wheat')).error ?? '', scenario === 'manifest-retry' ? /Search index is unavailable/ : /Search shard is unavailable/);
    responses.set(target, saved); assert.equal(valid(await query('wheat')).length, 4);
    assert.equal(requests.filter(url => url.endsWith('manifest.json')).length, 2);
  } else if (scenario === 'manifest-shape') {
    for (const invalid of [null, ...[undefined, 0, 3, '2'].map(version => ({ schemaVersion: version, language, shards: [] })), { schemaVersion, language: 'other-language', shards: [] }, { schemaVersion, language, shards: {} }]) {
      responses.set(root + 'manifest.json', { status: 200, body: invalid });
      assert.equal((await query('wheat')).error, 'Invalid search manifest.');
    }
    assert.equal(requests.some(url => url.includes('shard-')), false);
  } else if (scenario === 'shard-url') {
    for (const invalid of [null, { url: 'https://outside.example/index.json' }, { url: '/outside/index.json' }, { url: 7 }]) {
      responses.set(root + 'manifest.json', { status: 200, body: { schemaVersion, language, shards: [invalid] } });
      assert.equal((await query('wheat')).error, 'Invalid search shard.');
    }
    assert.ok(requests.every(url => url === root + 'manifest.json'));
  } else if (scenario === 'shard-shape') {
    const original = responses.get(root + 'shard-0.json')!.body as Shard;
    for (const invalid of [null, { entries: [], records: [] }, { entries: {}, records: {} }, { entries: {}, records: [null] }, { entries: {}, records: [{ ...original.records[0], breadcrumbs: [7] }] }, { entries: { reg: 7 }, records: original.records }]) {
      responses.set(root + 'shard-0.json', { status: 200, body: invalid });
      assert.equal((await query('wheat')).error, 'Invalid serialized search data.');
    }
  } else if (scenario === 'serialized-retry') {
    const original = responses.get(root + 'shard-0.json')!;
    const shard = original.body as Shard;
    assert.ok(Object.keys(shard.entries).length > 0);
    const key = Object.keys(shard.entries).find(key => key.endsWith('.map'))!;
    assert.ok(key);
    responses.set(root + 'shard-0.json', { status: 200, body: { ...shard, entries: { ...shard.entries, [key]: schemaVersion === 1 ? '{malformed' : [null] } } });
    const failure = await query('wheat'); assert.equal(failure.results, undefined); assert.ok(failure.error);
    responses.set(root + 'shard-0.json', original); assert.equal(valid(await query('wheat')).length, 4);
  } else if (scenario === 'requests') {
    for (const invalid of [null, [], { id: 7, query: 7, language }, { id: 8, query: 'wheat', language: null }]) assert.equal((await send(invalid)).error, 'Invalid search request.');
    assert.equal(requests.length, 0);
  } else if (scenario === 'empty') {
    await install([]); assert.deepEqual(valid(await query('wheat')), []);
    assert.deepEqual(valid(await query('')), []); assert.equal(requests.length, 1);
  } else throw new Error('Unknown search worker scenario: ' + scenario);
}
const scenario = process.argv[2]; assert.ok(scenario);
const schemaVersion = Number(process.argv[3]); assert.ok(schemaVersion === 1 || schemaVersion === 2);
await main(scenario, schemaVersion); process.stdout.write(`PASS ${scenario}\n`);
