/** Lossless wire encoding of FlexSearch exports; tokenization and scores stay unchanged. */
function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function fail(): never { throw new Error("Invalid serialized search data."); }
function postings(value: unknown): value is (number | string)[] {
  return Array.isArray(value) && value.every(id => typeof id === "string" || typeof id === "number" && Number.isSafeInteger(id));
}
function compactMap(value: unknown): unknown[] {
  if (!Array.isArray(value)) return fail();
  return value.map((entry: unknown) => {
    if (!Array.isArray(entry) || entry.length !== 2 || typeof entry[0] !== "string" || !Array.isArray(entry[1])) return fail();
    const buckets: unknown[] = entry[1];
    const packed: unknown[] = [entry[0], buckets.length];
    for (const [score, ids] of buckets.entries()) {
      if (ids === null) continue;
      if (!postings(ids)) return fail();
      packed.push(score, ids);
    }
    return packed;
  });
}
function expandMap(value: unknown): unknown[] {
  if (!Array.isArray(value)) return fail();
  return value.map((entry: unknown) => {
    if (!Array.isArray(entry) || entry.length < 2 || entry.length % 2 !== 0 || typeof entry[0] !== "string") return fail();
    const length: unknown = entry[1];
    if (typeof length !== "number" || !Number.isSafeInteger(length) || length < 0 || length > 256) return fail();
    const buckets: unknown[] = Array.from({length}, () => null);
    let previous = -1;
    for (let offset = 2; offset < entry.length; offset += 2) {
      const score: unknown = entry[offset], ids: unknown = entry[offset + 1];
      if (typeof score !== "number" || !Number.isSafeInteger(score) || score <= previous || score >= length || !postings(ids)) return fail();
      buckets[score] = ids;
      previous = score;
    }
    return [entry[0], buckets];
  });
}

export function encodeSearchEntries(entries: Record<string, string>): Record<string, unknown> {
  return Object.fromEntries(Object.entries(entries).map(([key, payload]) => {
    const value: unknown = JSON.parse(payload);
    return [key, /^\d+\.map$/u.test(key) ? compactMap(value) : value];
  }));
}

/** v1 remains readable for previously generated shards. v2 omits null score slots. */
export function decodeSearchEntries(value: unknown, compact: boolean): Record<string, string> {
  if (!record(value)) return fail();
  return Object.fromEntries(Object.entries(value).map(([key, payload]) => {
    if (!compact) {
      if (typeof payload !== "string") return fail();
      return [key, payload];
    }
    const expanded = /^\d+\.map$/u.test(key) ? expandMap(payload) : payload;
    const serialized = JSON.stringify(expanded);
    if (serialized === undefined) return fail();
    return [key, serialized];
  }));
}
