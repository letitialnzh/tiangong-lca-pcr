import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
import { decodeRecordData, encodeRecordDataPack, type RecordDataEntry } from "../lib/record-data.ts";
import { writeRecordDataPacks, RECORD_DATA_PACK_BYTES } from "./record-data-packs.ts";
import type { PcrRecord } from "../lib/types.ts";
function fixtureRecord(options: Partial<PcrRecord>): PcrRecord {
  return {id: "test", slug: [], title: {}, status: "candidate", maturity: "authored_methodology", version: null,
    updatedAt: null, sourcePath: "test", translationStatus: {}, readiness: {status: "ready", blockers: [], warnings: []},
    urls: {}, pages: {}, downloads: [], dataPath: "data/test.json", dataUrl: "/generated/data/test.json", classificationRefs: [], modules: {}, ...options};
}

test("inspector transport restores all fields, scalar types, order and historical identities", () => {
  const original = JSON.parse('{"manifest":{"id":"测试","empty":"","flag":false,"nil":null,"__proto__":{"untouched":true}},"structured":{"rows":[[],{},0,"0",true],"text":"<script> & 中文\\n"}}');
  const historical = {manifest: {id: "测试", version: "1.0.0"}, structured: {rows: []}};
  const entries: RecordDataEntry[] = [["current", original.manifest, original.structured], ["history", historical.manifest, historical.structured]];
  const wire: unknown = JSON.parse(JSON.stringify(encodeRecordDataPack(entries)));
  assert.equal(JSON.stringify(decodeRecordData(wire, "current")), JSON.stringify(original));
  assert.equal(JSON.stringify(decodeRecordData(wire, "history")), JSON.stringify(historical));
  assert.equal(JSON.stringify(decodeRecordData(original)), JSON.stringify(original), "Legacy unkeyed files remain readable");
  assert.equal(Object.hasOwn({}, "untouched"), false);
});

test("malformed, duplicate, missing and unknown-version payloads fail without selecting another record", () => {
  for (const payload of [null, [], {}, {schemaVersion: 2, records: []}, {schemaVersion: 1, records: []},
    {schemaVersion: 1, records: [["k", {}, {}], ["k", {}, {}]]},
    {schemaVersion: 1, records: [["k", null, {}]]}, {schemaVersion: 1, records: [["k", {}, {} , 0]]},
    {schemaVersion: 1, records: Array.from({length: 33}, (_, id) => [String(id), {}, {}])},
    {schemaVersion: 1, records: [["k", {invalid: Infinity}, {}]]}]) assert.throws(() => decodeRecordData(payload, "k"));
  const packed = encodeRecordDataPack([["right", {}, {}]]);
  assert.throws(() => decodeRecordData(packed, "wrong"), /absent/u);
  assert.throws(() => decodeRecordData(packed), /Invalid/u);
  for (const legacy of [null, {}, {manifest: {}, structured: []}]) assert.throws(() => decodeRecordData(legacy));
});

test("bounded packs reduce file count and restore every original current/history record", () => {
  const stage = fs.mkdtempSync(path.join(tmpdir(), "pcr-record-packs-"));
  try {
    fs.mkdirSync(path.join(stage, "data"));
    const records: PcrRecord[] = Array.from({length: 70}, (_, id) => {
      const dataPath = "data/" + id + ".json";
      fs.writeFileSync(path.join(stage, dataPath), JSON.stringify({manifest: {id, version: id % 2 ? "1.0.0" : null}, structured: {rule: "Full content 中文 ".repeat(1000)}}));
      return fixtureRecord({id: String(id), dataPath});
    });
    const stats = writeRecordDataPacks(stage, records);
    assert.ok(stats.files < records.length / 2);
    assert.ok(stats.largestBytes <= RECORD_DATA_PACK_BYTES);
    assert.equal(stats.records, records.length);
    assert.equal(fs.readdirSync(path.join(stage, "public/data")).length, stats.files);
    for (const record of records) {
      const packed: unknown = JSON.parse(fs.readFileSync(path.join(stage, "public", record.dataUrl.slice("/generated/".length)), "utf8"));
      assert.equal(JSON.stringify(decodeRecordData(packed, record.dataKey)), fs.readFileSync(path.join(stage, record.dataPath), "utf8"));
    }
    const large = fixtureRecord({dataPath: "data/large.json"});
    fs.writeFileSync(path.join(stage, large.dataPath), JSON.stringify({manifest: {}, structured: {text: "x".repeat(RECORD_DATA_PACK_BYTES)}}));
    const one = writeRecordDataPacks(stage, [large]);
    assert.equal(one.files, 1, "One large record stays whole under the existing per-file limit");
    assert.ok(one.largestBytes > RECORD_DATA_PACK_BYTES);
    assert.throws(() => writeRecordDataPacks(stage, [large, large]), /Duplicate/u);
  } finally {fs.rmSync(stage, {recursive: true, force: true});}
});
