import fs from "node:fs";
import path from "node:path";
import type { PcrRecord } from "../lib/types.ts";
import { decodeRecordData, encodeRecordDataPack, parseRecordData, MAX_RECORDS_PER_PACK, type RecordDataEntry } from "../lib/record-data.ts";
export const RECORD_DATA_PACK_BYTES = 1_000_000;
/** Pack only the generated inspector transport, with exact per-record round-trip verification. */
export function writeRecordDataPacks(stage: string, records: readonly PcrRecord[]) {
  const directory = path.join(stage, "public/data");
  fs.mkdirSync(directory, {recursive: true});
  let pending: RecordDataEntry[] = [], owners: PcrRecord[] = [], files = 0, bytes = 0, originalBytes = 0, largestBytes = 0;
  const seen = new Set<string>();
  function flush() {
    if (!pending.length) return;
    const serialized = JSON.stringify(encodeRecordDataPack(pending));
    const size = Buffer.byteLength(serialized);
    if (size >= 25_000_000) throw new Error("Inspector data pack exceeds the single-file budget.");
    const restored: unknown = JSON.parse(serialized);
    for (const [key, manifest, structured] of pending)
      if (JSON.stringify(decodeRecordData(restored, key)) !== JSON.stringify({manifest, structured}))
        throw new Error("Inspector packing changed record data: " + key);
    const relative = "data/pack-" + String(files).padStart(5, "0") + ".json";
    fs.writeFileSync(path.join(stage, "public", relative), serialized);
    for (const record of owners) { record.dataUrl = "/generated/" + relative; record.dataKey = record.dataPath; }
    files++; bytes += size; largestBytes = Math.max(largestBytes, size); pending = []; owners = [];
  }
  for (const record of records) {
    if (seen.has(record.dataPath)) throw new Error("Duplicate inspector record identity: " + record.dataPath);
    seen.add(record.dataPath);
    const source = fs.readFileSync(path.join(stage, record.dataPath), "utf8");
    const data = parseRecordData(JSON.parse(source));
    const entry: RecordDataEntry = [record.dataPath, data.manifest, data.structured];
    const proposed = JSON.stringify(encodeRecordDataPack([...pending, entry]));
    if (pending.length && Buffer.byteLength(proposed) > RECORD_DATA_PACK_BYTES) flush();
    pending.push(entry); owners.push(record); originalBytes += Buffer.byteLength(source);
    if (pending.length === MAX_RECORDS_PER_PACK) flush();
  }
  flush();
  return {records: records.length, files, bytes, originalBytes, largestBytes, targetBytes: RECORD_DATA_PACK_BYTES};
}
