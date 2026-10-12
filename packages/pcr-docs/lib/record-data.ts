/** Lossless inspector transport. Raw PCR downloads and server-side data stay unchanged. */
export type Json = null | boolean | number | string | Json[] | { [key: string]: Json };
export type RecordData = { manifest: { [key: string]: Json }; structured: { [key: string]: Json } };
export type RecordDataEntry = readonly [key: string, manifest: RecordData["manifest"], structured: RecordData["structured"]];
export const MAX_RECORDS_PER_PACK = 32;
function object(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function json(value: unknown): value is Json {
  return value === null || typeof value === "string" || typeof value === "boolean"
    || typeof value === "number" && Number.isFinite(value)
    || Array.isArray(value) && value.every(json)
    || object(value) && Object.values(value).every(json);
}
export function parseRecordData(value: unknown): RecordData {
  if (!object(value) || !object(value.manifest) || !json(value.manifest)
    || !object(value.structured) || !json(value.structured)) throw new TypeError("Invalid generated PCR record data.");
  return { manifest: value.manifest, structured: value.structured };
}
function entries(value: unknown): RecordDataEntry[] {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_RECORDS_PER_PACK)
    throw new TypeError("Invalid PCR record data pack.");
  const keys = new Set<string>();
  return value.map((entry: unknown) => {
    if (!Array.isArray(entry) || entry.length !== 3 || typeof entry[0] !== "string" || !entry[0] || keys.has(entry[0]))
      throw new TypeError("Invalid PCR record data pack.");
    keys.add(entry[0]);
    const data = parseRecordData({manifest: entry[1], structured: entry[2]});
    return [entry[0], data.manifest, data.structured];
  });
}
export function encodeRecordDataPack(value: readonly RecordDataEntry[]) {
  return {schemaVersion: 1 as const, records: entries(value)};
}
/** Legacy single-record payloads require no key. Packed payloads always require an exact key. */
export function decodeRecordData(value: unknown, key?: string): RecordData {
  if (key === undefined) return parseRecordData(value);
  if (!object(value) || value.schemaVersion !== 1) throw new TypeError("Unsupported PCR record data pack.");
  const entry = entries(value.records).find(entry => entry[0] === key);
  if (!entry) throw new TypeError("PCR record is absent from its data pack.");
  return {manifest: entry[1], structured: entry[2]};
}
