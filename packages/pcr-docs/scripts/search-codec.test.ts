import assert from "node:assert/strict";
import test from "node:test";
import { Index } from "flexsearch";
import { encodeSearchEntries, decodeSearchEntries } from "../lib/search-codec.ts";
import { searchTerms } from "../lib/search-terms.ts";

test("compact exports preserve every real posting, score and query result in both languages", async () => {
  for (const language of ["en-US", "zh-CN"]) {
    const options = {tokenize: "strict" as const, encode: (value: unknown) => searchTerms(value, language)};
    const original = new Index(options), restored = new Index(options);
    const documents = [
      "Wheat seed harvest quality allocation protocol kg pcr_rule_boundary 550e8400-e29b-41d4-a716-446655440000",
      "Protocol for wheat quality and allocation; 小麦种子质量分配与前景边界",
      "ＬＣＡ wheat seed producer handover; 牛生乳生产交付",
    ];
    documents.forEach((text, id) => original.add(id, text));
    const entries: Record<string, string> = {};
    await original.export((key, payload) => { entries[key] = payload; });
    const packed: unknown = JSON.parse(JSON.stringify(encodeSearchEntries(entries)));
    const decoded = decodeSearchEntries(packed, 3);
    assert.deepEqual(decoded, entries, "The entire engine export must round-trip byte for byte");
    for (const [key, payload] of Object.entries(decoded)) restored.import(key, payload);
    for (const query of [...new Set(documents.flatMap(text => searchTerms(text, language))), "wheat quality", "牛生乳", "unmatched", ""]) {
      assert.deepEqual(restored.search(query, {limit: 30}), original.search(query, {limit: 30}), query);
    }
    assert.deepEqual(decodeSearchEntries(entries, 1), entries);
    assert.deepEqual(decodeSearchEntries(Object.fromEntries(Object.entries(entries).map(([key, value]) => [key, JSON.parse(value)])), 2), entries);
    assert.ok(JSON.stringify(packed).length < JSON.stringify(entries).length);
  }
});

test("compaction preserves sparse score slots, trailing nulls and string identifiers", () => {
  const entries = {"1.reg": '["a",0]', "1.map": '[["term",[null,["a",0],null,[],null]],["empty",[]]]', "1.ctx": '[]'};
  assert.deepEqual(decodeSearchEntries(encodeSearchEntries(entries), 3), entries);
  assert.deepEqual(decodeSearchEntries({}, 3), {});
});

test("malformed compact data cannot allocate arbitrary score arrays or change posting identities", () => {
  for (const map of [null, {}, [null], [[7, 1]], [["term", -1]], [["term", 257]], [["term", 1.5]],
    [["term", 1, 0]], [["term", 1, -1, [0]]], [["term", 1, 1, [0]]], [["term", 1, 0.5, [0]]],
    [["term", 1, 0, [0], 0, [1]]], [["term", 1, 0, null]], [["term", 1, 0, [false]]]]) {
    assert.throws(() => decodeSearchEntries({"1.map": map}, 3), /Invalid serialized search data/u);
  }
  for (const value of [null, [], {"1.reg": undefined}]) assert.throws(() => decodeSearchEntries(value, 3));
  assert.throws(() => decodeSearchEntries({"1.reg": []}, 1));
  for (const version of [2, 3] as const) for (const value of [null, {}, 1, '[]']) assert.throws(() => decodeSearchEntries({"1.reg": value}, version));
  assert.throws(() => decodeSearchEntries({"1.map": [["term", [null, [0]]]]}, 3));
  assert.throws(() => encodeSearchEntries({"1.reg": '[ 0 ]'}), /Invalid serialized search data/u);
  for (const value of ['null', '[null]', '[["x",[7]]]']) assert.throws(() => encodeSearchEntries({"1.map": value}));
});

test("v3 reduces native-array bytes without changing any real score or posting", async () => {
  const index = new Index({tokenize: "strict", encode: (value: unknown) => searchTerms(value, "en-US")});
  for (let id = 0; id < 100; id++) index.add(id, `Common methodology boundary kg flow_${id} ${Array.from({length: 30}, (_, token) => `term_${id}_${token}`).join(" ")}`);
  const entries: Record<string, string> = {};
  await index.export((key, value) => { entries[key] = value; });
  const native = Object.fromEntries(Object.entries(entries).map(([key, value]) => [key, JSON.parse(value)]));
  const compact = encodeSearchEntries(entries);
  assert.deepEqual(decodeSearchEntries(compact, 3), entries);
  assert.ok(Buffer.byteLength(JSON.stringify(compact)) < Buffer.byteLength(JSON.stringify(native)) * 0.8);
});
