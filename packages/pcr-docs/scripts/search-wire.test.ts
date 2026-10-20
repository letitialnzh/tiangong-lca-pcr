import assert from 'node:assert/strict';
import test from 'node:test';
import { Index } from 'flexsearch';
import { searchTerms } from '../lib/search-terms.ts';
import { encodeSearchEntries, decodeSearchEntries, createSearchTermDictionary, readSearchTermDictionary } from '../lib/search-wire.ts';

test('sparse score slots restore exact real engine exports, order, IDs and multilingual matches', async () => {
  const index = new Index({ tokenize: 'strict', encode: (value: unknown) => searchTerms(value, 'en-US') });
  const texts = ['wheat "seed" café 珊瑚 pcr_rule_boundary', 'prefix scope and lots of applicable conditions wheat', 'different scope for water'];
  texts.forEach((text, id) => index.add(id * 10, text));
  const original: Record<string, unknown[]> = {};
  await index.export((key, value) => { const parsed: unknown = JSON.parse(value); assert.ok(Array.isArray(parsed)); original[key] = parsed; });
  const wire = JSON.parse(JSON.stringify(encodeSearchEntries(original))) as { entries: unknown; sparseMaps: unknown };
  const restored = decodeSearchEntries(wire.entries, wire.sparseMaps);
  assert.deepEqual(Object.keys(restored), Object.keys(original));
  for (const key of Object.keys(original)) assert.equal(JSON.stringify(restored[key]), JSON.stringify(original[key]));
  const loaded = new Index({ tokenize: 'strict', encode: (value: unknown) => searchTerms(value, 'en-US') });
  for (const [key, value] of Object.entries(restored)) loaded.import(key, JSON.stringify(value));
  for (const query of ['wheat', 'café', '珊瑚', 'pcr_rule_boundary', 'water', 'missing'])
    assert.deepEqual(loaded.search(query, { limit: 30 }), index.search(query, { limit: 30 }));
});

test('large sparse maps shrink without losing null positions, empty postings, long IDs or hostile-looking strings', () => {
  const map = Array.from({ length: 4000 }, (_, id) => [id === 0 ? '__proto__' : id === 1 ? 'constructor' : `term-${id}`, [null, null, null, null, null, null, null, [], [id, 'constructor', '__proto__', '文献\\"\n']]]);
  const original = { '1.reg': [0, 'constructor'], '1.map': map };
  const wire = encodeSearchEntries(original); assert.deepEqual(wire.sparseMaps, ['1.map']);
  assert.ok(Buffer.byteLength(JSON.stringify(wire)) < Buffer.byteLength(JSON.stringify({ entries: original })) * 0.85);
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries, wire.sparseMaps)), JSON.stringify(original));
  assert.equal(JSON.stringify(original['1.map'][0]), JSON.stringify(map[0]), 'Encoder must not mutate input');
});

test('dense and unknown map shapes stay native and empty exports stay empty', () => {
  for (const entry of [[], [['term', [[1]]]], [['term', Array.from({ length: 10 }, () => null)]], [[7, []]], [['term', [true]]], [['term', [[{}]]]], [['term', [[-1]]]], [['term', [undefined]]]]) {
    const original = { '1.map': entry, 'other': [] };
    const wire = encodeSearchEntries(original); assert.deepEqual(wire.sparseMaps, []);
    assert.equal(wire.entries['1.map'], entry); assert.deepEqual(Object.keys(wire.entries), ['1.map', 'other']);
  }
  assert.throws(() => encodeSearchEntries({ '1.map': null as unknown as unknown[] }), /Invalid serialized/);
  const slots = [['term', [null, null, null, null, null, null, null, null, [1]]]];
  for (const key of ['0.map', '00.map', '01.map', 'foreign.map'])
    assert.deepEqual(encodeSearchEntries({ [key]: slots }).sparseMaps, []);
});

test('v3 rejects malformed metadata and bounded score-slot tuples before allocation', () => {
  const valid = ['term', 9, [[8, [1, 'string-id']]]];
  const entries = { '1.map': [valid], '1.reg': [1] };
  for (const metadata of [undefined, null, {}, [1], ['missing.map'], ['1.reg'], ['__proto__'], ['1.map', '1.map']])
    assert.throws(() => decodeSearchEntries(entries, metadata), /Invalid serialized/);
  const invalidTerms = [null, [], ['term', 9], [7, 9, []], ['term', -1, []], ['term', 10, []], ['term', 1e9, []], ['term', 1.5, []], ['term', 9, {}], ['term', 9, [[-1, [1]]]], ['term', 9, [[9, [1]]]], ['term', 9, [[1.5, [1]]]], ['term', 9, [[8, [1]], [8, [2]]]], ['term', 9, [[8, [1]], [7, [2]]]], ['term', 9, [null]], ['term', 9, [[8]]], ['term', 9, [[8, [null]]]], ['term', 9, [[8, [{}]]]], ['term', 9, [[8, [1.5]]]]];
  for (const term of invalidTerms) assert.throws(() => decodeSearchEntries({ '1.map': [term] }, ['1.map']), /Invalid serialized/);
  assert.throws(() => decodeSearchEntries({ '1.map': [['term', 9, [[8, [-1]]]]] }, ['1.map']), /Invalid serialized/);
  for (const key of ['0.map', '00.map', '01.map', 'foreign.map'])
    assert.throws(() => decodeSearchEntries({ [key]: [valid] }, [key]), /Invalid serialized/);
  for (const value of [null, [], { '1.map': 7 }]) assert.throws(() => decodeSearchEntries(value, []), /Invalid serialized/);
  assert.deepEqual(decodeSearchEntries({ '1.map': [['empty', 0, []]] }, ['1.map'])['1.map'], [['empty', []]]);
  assert.deepEqual(decodeSearchEntries(entries, ['1.map'])['1.reg'], [1]);
});

test('v4 score masks shrink v3 while restoring exact engine exports and multilingual results', async () => {
  for (const language of ['en-US', 'zh-CN']) {
    const options = {tokenize: 'strict' as const, encode: (value: unknown) => searchTerms(value, language)};
    const index = new Index(options), loaded = new Index(options);
    const documents = Array.from({length: 100}, (_, id) => `Wheat seed 小麦种子 pcr_rule_boundary ${Array.from({length: 30}, (_, token) => `term_${id}_${token}`).join(' ')}`);
    documents.forEach((text, id) => index.add(id, text));
    const original: Record<string, unknown[]> = {};
    await index.export((key, value) => { const parsed: unknown = JSON.parse(value); assert.ok(Array.isArray(parsed)); original[key] = parsed; });
    const v3 = encodeSearchEntries(original, 3), v4 = encodeSearchEntries(original, 4);
    const wire: unknown = JSON.parse(JSON.stringify(v4));
    assert.ok(wire !== null && typeof wire === 'object' && 'entries' in wire && 'sparseMaps' in wire && 'scoreMasks' in wire && 'postingDeltas' in wire && 'columnarMaps' in wire);
    const restored = decodeSearchEntries(wire.entries, wire.sparseMaps, 4, wire.scoreMasks, wire.postingDeltas, wire.columnarMaps);
    assert.deepEqual(Object.keys(restored), Object.keys(original));
    for (const [key, value] of Object.entries(restored)) {
      assert.equal(JSON.stringify(value), JSON.stringify(original[key]), 'Every engine import string must round-trip exactly');
      loaded.import(key, JSON.stringify(value));
    }
    for (const query of [...new Set(documents.flatMap(text => searchTerms(text, language))), 'wheat seed', '小麦种子', 'unmatched'])
      assert.deepEqual(loaded.search(query, {limit: 30}), index.search(query, {limit: 30}), query);
    assert.ok(Buffer.byteLength(JSON.stringify(v4)) < Buffer.byteLength(JSON.stringify(v3)), 'Flat v4 must improve the existing nested v3');
    assert.throws(() => decodeSearchEntries(v4.entries, v4.sparseMaps, 3), /Invalid serialized/);
    assert.throws(() => decodeSearchEntries(v3.entries, v3.sparseMaps, 4), /Invalid serialized/);
  }
});

test('v4 preserves empty and trailing score slots, posting order, string IDs and native fallback', () => {
  const original = {'1.map': [['__proto__', [null, [], null, null, null, null, null, null, ['constructor', 0, '文献']]], ['empty', []]], '1.reg': [0, 'constructor'], 'foreign.map': [null]};
  const wire = encodeSearchEntries(original, 4);
  assert.deepEqual(wire.sparseMaps, ['1.map']);
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries, wire.sparseMaps, 4, wire.scoreMasks, wire.postingDeltas, wire.columnarMaps)), JSON.stringify(original));
  assert.equal(JSON.stringify(original['1.map'][0]), '["__proto__",[null,[],null,null,null,null,null,null,["constructor",0,"文献"]]]', 'Encoding must not mutate input');
  assert.deepEqual(decodeSearchEntries({'1.map': [['empty', 0]]}, ['1.map'], 4)['1.map'], [['empty', []]]);
});

test('v4 rejects malformed flat tuples and sparse metadata without arbitrary score allocation', () => {
  const invalidTerms = [null, [], ['term'], ['term', 9, []], [7, 9], ['term', -1], ['term', 10], ['term', 1e9], ['term', 1.5], ['term', 9, -1, [1]], ['term', 9, 9, [1]], ['term', 9, 1.5, [1]], ['term', 9, 8, [1], 8, [2]], ['term', 9, 8, [1], 7, [2]], ['term', 9, 8, null], ['term', 9, 8, [null]], ['term', 9, 8, [-1]], ['term', 9, 8, [1.5]]];
  for (const term of invalidTerms) assert.throws(() => decodeSearchEntries({'1.map': [term]}, ['1.map'], 4), /Invalid serialized/);
  for (const metadata of [undefined, null, {}, [1], ['missing.map'], ['1.reg'], ['__proto__'], ['1.map', '1.map']])
    assert.throws(() => decodeSearchEntries({'1.map': [['term', 9, 8, [1]]], '1.reg': [1]}, metadata, 4), /Invalid serialized/);
});

test('v4 masks and signed deltas retain out-of-order IDs, repeats, mixed strings and maximum safe IDs', () => {
  const original = {'1.map': [['empty', []], ['term', [null, null, null, null, null, null, [], null, [100, 2, 2, 0, Number.MAX_SAFE_INTEGER, 3]]], ['mixed', [null, null, null, null, null, null, null, null, ['id', 12, 0]]]]};
  const wire = encodeSearchEntries(original, 4);
  assert.deepEqual(wire.sparseMaps, ['1.map']);
  assert.equal(wire.scoreMasks, true); assert.equal(wire.postingDeltas, true);
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries, wire.sparseMaps, 4, true, true, wire.columnarMaps)), JSON.stringify(original));
  const flat = {'1.map': [['legacy', 9, 8, [100, 2, 2]]]};
  assert.deepEqual(decodeSearchEntries(flat, ['1.map'], 4)['1.map'], [['legacy', [null, null, null, null, null, null, null, null, [100, 2, 2]]]]);
  assert.throws(() => decodeSearchEntries({'1.map': [['mask', 4864, [100, 2]]]}, ['1.map'], 4, true), /Invalid serialized/);
});

test('v4 rejects malformed mask headers, posting counts, delta overflow and foreign encoding flags', () => {
  for (const term of [null, [], ['x'], ['x', -1], ['x', 5120], ['x', 1e9], ['x', 1.5], ['x', 1], ['x', 514], ['x', 4864], ['x', 4864, [1], [2]], ['x', 4864, null], ['x', 4864, [1.5]], ['x', 4864, [-1]], ['x', 4864, [Number.MAX_SAFE_INTEGER, 1]], ['x', 4864, ['id', -1]]])
    assert.throws(() => decodeSearchEntries({'1.map': [term]}, ['1.map'], 4, true, true), /Invalid serialized/);
  for (const flag of [false, null, 1, 'true', {}]) {
    assert.throws(() => decodeSearchEntries({}, [], 4, flag), /Invalid serialized/);
    assert.throws(() => decodeSearchEntries({}, [], 4, true, flag), /Invalid serialized/);
  }
  assert.throws(() => decodeSearchEntries({}, [], 3, true), /Invalid serialized/);
  assert.throws(() => decodeSearchEntries({}, [], 4, undefined, true), /Invalid serialized/);
});

test('v4 columnar maps restore exact term order and reject malformed column lengths or postings', () => {
  const map = Array.from({length: 1000}, (_, id) => [`term-${id}`, [null, null, null, null, null, null, null, null, [id]]]);
  const original = {'1.reg': [0, 1], '1.map': map};
  const wire = encodeSearchEntries(original, 4);
  assert.deepEqual(wire.columnarMaps, ['1.map']);
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries, wire.sparseMaps, 4, true, true, wire.columnarMaps)), JSON.stringify(original));
  const columns = wire.entries['1.map']!;
  for (const invalid of [
    [columns[0], (columns[1] as unknown[]).slice(1), columns[2]],
    [columns[0], columns[1], (columns[2] as unknown[]).slice(1)],
    [columns[0], columns[1], [...columns[2] as unknown[], [1]]],
    [[...columns[0] as unknown[], 7], [...columns[1] as unknown[], 4864], [...columns[2] as unknown[], [1]]],
    [columns[0], [(columns[1] as unknown[])[0], -1, ...(columns[1] as unknown[]).slice(2)], columns[2]],
  ]) assert.throws(() => decodeSearchEntries({'1.map': invalid}, ['1.map'], 4, true, true, ['1.map']), /Invalid serialized/);
  for (const metadata of [['1.reg'], ['1.map', '1.map'], null, true])
    assert.throws(() => decodeSearchEntries(wire.entries, wire.sparseMaps, 4, true, true, metadata), /Invalid serialized/);
  assert.throws(() => decodeSearchEntries(wire.entries, wire.sparseMaps, 3, true, true, wire.columnarMaps), /Invalid serialized/);
  assert.deepEqual(decodeSearchEntries({'1.map': [['old', 4864, [2]]]}, ['1.map'], 4, true, true)['1.map'],
    [['old', [null, null, null, null, null, null, null, null, [2]]]], 'previous v4 wire remains readable');
});

test('v5 joined terms preserve empty terms, Unicode, literal spaces, exact posting arrays and native fallback', () => {
  const names = ['', '__proto__', 'constructor', '珊瑚', 'café', '😀', '\n', 'a\\b', '', ...Array.from({length: 2000}, (_, i) => `term-${i}`)];
  const vector = [null, [], null, null, null, null, null, null, [Number.MAX_SAFE_INTEGER, 0, 0, 99, 2]];
  const original = {'1.map': names.map(term => [term, vector]), '2.map': ['has space', '空 格', ''].map(term => [term, vector]), '1.reg': [0, 'constructor'], 'foreign.map': [null]};
  const expected = JSON.stringify(original), wire = JSON.parse(JSON.stringify(encodeSearchEntries(original, 5)));
  assert.equal(wire.joinedTerms, true); assert.ok(wire.columnarMaps.includes('1.map'));
  assert.equal(typeof wire.entries['1.map'][0], 'string');
  assert.ok(Array.isArray(wire.entries['2.map'][0]), 'Terms containing separators retain their original array');
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries, wire.sparseMaps, 5, wire.scoreMasks, wire.postingDeltas, wire.columnarMaps, wire.joinedTerms)), expected);
  assert.equal(JSON.stringify(original), expected, 'Encoding must not mutate source');
  assert.throws(() => decodeSearchEntries(wire.entries, wire.sparseMaps, 4, true, true, wire.columnarMaps, true), /Invalid serialized/);
  for (const flag of [undefined, false, null, 1, 'true']) assert.throws(() => decodeSearchEntries(wire.entries, wire.sparseMaps, 5, true, true, wire.columnarMaps, flag), /Invalid serialized/);
});

test('v5 rejects missing/excess joined terms, foreign flags and malformed columns before import', () => {
  for (const columns of [['', [], []], ['two terms', [4864], [[1]]], ['one', [4864, 4864], [[1], [2]]], ['x', null, []], ['x', [4864], []], ['x', [4864], [[1]], 'extra'], [null, [4864], [[1]]], ['x', [5120], [[1]]]])
    assert.throws(() => decodeSearchEntries({'1.map': columns}, ['1.map'], 5, true, true, ['1.map'], true), /Invalid serialized/);
  assert.deepEqual(decodeSearchEntries({'1.map': ['', [4864], [[1]]]}, ['1.map'], 5, true, true, ['1.map'], true)['1.map'], [['', [null, null, null, null, null, null, null, null, [1]]]]);
  assert.deepEqual(decodeSearchEntries({'1.map': [[], [], []]}, ['1.map'], 5, true, true, ['1.map'], true)['1.map'], []);
});

test('v5 real multilingual exports preserve every engine string and ordered query result', async () => {
  for (const language of ['en-US', 'zh-CN']) {
    const options = {tokenize: 'strict' as const, resolution: 9, encode: (value: unknown) => searchTerms(value, language)};
    const index = new Index(options), loaded = new Index(options);
    for (let i = 0; i < 300; i++) index.add(i * 13, `${'wheat 珊瑚 小麦 '.repeat(i % 5 + 1)}边界 pcr_rule_boundary café ${i}`);
    const original: Record<string, unknown[]> = {};
    await index.export((key, value) => {original[key] = JSON.parse(value);});
    const wire = JSON.parse(JSON.stringify(encodeSearchEntries(original, 5)));
    const restored = decodeSearchEntries(wire.entries, wire.sparseMaps, 5, wire.scoreMasks, wire.postingDeltas, wire.columnarMaps, wire.joinedTerms);
    assert.equal(JSON.stringify(restored), JSON.stringify(original));
    for (const [key, value] of Object.entries(restored)) loaded.import(key, JSON.stringify(value));
    for (const query of ['wheat', '小麦', '珊瑚', 'pcr_rule_boundary', 'café', 'missing']) assert.deepEqual(loaded.search(query, {limit: 30}), index.search(query, {limit: 30}));
  }
});

test('v5 shared dictionary restores exact cross-shard term order, literal spaces, duplicate native terms and all posting types', () => {
  const slots = [null, [], null, null, null, null, null, null, [Number.MAX_SAFE_INTEGER, 0, 0, 9]];
  const inputs: Record<string, unknown[]>[] = [
    {'1.reg':[0,1], '1.map':[['alpha',slots],['珊瑚',slots],['has space',slots],['',slots],['__proto__',slots],['constructor',slots],['😀',slots],['',slots]], 'foreign.map':[null]},
    {'1.reg':[9,'id'], '1.map':[['珊瑚',slots],['alpha',slots],['new', [null,null,null,null,null,null,null,null,['mixed',7]]]]},
  ];
  const before = inputs.map(input => JSON.stringify(input));
  const dictionary = createSearchTermDictionary(inputs);
  assert.deepEqual(dictionary.slice(0,4),['alpha','珊瑚','has space','']);
  assert.equal(new Set(dictionary).size,dictionary.length);
  let negative = false;
  inputs.forEach((original, index) => {
    const wire = JSON.parse(JSON.stringify(encodeSearchEntries(original,5,dictionary)));
    assert.equal(wire.dictionaryTerms,true);
    for(const key of wire.columnarMaps ?? []) negative ||= wire.entries[key][0].some((id: number) => id < 0);
    assert.equal(JSON.stringify(decodeSearchEntries(wire.entries,wire.sparseMaps,5,true,true,wire.columnarMaps,true,dictionary,true)),before[index]);
    assert.equal(JSON.stringify(original),before[index]);
  });
  assert.equal(negative,true,'Cross-shard encounter order must exercise descending references');
  assert.throws(()=>encodeSearchEntries(inputs[0]!,4,dictionary),/Invalid serialized/);
  assert.throws(()=>encodeSearchEntries(inputs[0]!,5,['missing']),/Invalid serialized/);
});

test('v5 rejects malformed dictionaries, foreign dictionary flags and invalid word references before import', () => {
  for(const dictionary of [null,{},[1],['same','same'],new Array(1)]) assert.throws(()=>readSearchTermDictionary(dictionary),/Invalid serialized/);
  const entries = {'1.map':[[[0],[4864],[[1]]]]};
  for(const dictionary of [undefined,null,{},[1],['same','same']]) assert.throws(()=>decodeSearchEntries(entries,['1.map'],5,true,true,['1.map'],true,dictionary,true),/Invalid serialized/);
  for(const refs of [[-1],[1],[0.5],['0'],[null],[Number.MAX_SAFE_INTEGER],[Number.MAX_SAFE_INTEGER,1]]) {
    const columns=[refs,refs.map(()=>4864),refs.map(()=>[1])];
    assert.throws(()=>decodeSearchEntries({'1.map':columns},['1.map'],5,true,true,['1.map'],true,['word'],true),/Invalid serialized/);
  }
  for(const flag of [undefined,false,null,1]) assert.throws(()=>decodeSearchEntries({'1.map':[[0],[4864],[[1]]]},['1.map'],5,true,true,['1.map'],true,['word'],flag),/Invalid serialized/);
  assert.throws(()=>decodeSearchEntries({},[],4,true,true,undefined,undefined,['word'],true),/Invalid serialized/);
});
