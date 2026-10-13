/** The pinned FlexSearch index uses nine scoring slots; wire v3 retains every slot and ID. */
export const SEARCH_SCORE_SLOTS = 9;
const invalid = () => new Error('Invalid serialized search data.');
const mapKey = (key: string) => /^[1-9][0-9]*\.map$/u.test(key);
const object = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value);
const ids = (value: unknown): value is (string | number)[] => Array.isArray(value)
  && value.every(id => typeof id === 'string' || typeof id === 'number' && Number.isSafeInteger(id) && id >= 0);
type SparseTerm = [string, number, [number, (string | number)[]][]];
export interface SearchWireEntries {
  entries: Record<string, unknown[]>;
  sparseMaps: string[];
}
function sparseMap(value: unknown[]): SparseTerm[] | undefined {
  const result: SparseTerm[] = [];
  for (const term of value) {
    if (!Array.isArray(term) || term.length !== 2 || typeof term[0] !== 'string'
      || !Array.isArray(term[1]) || term[1].length > SEARCH_SCORE_SLOTS) return;
    const slots: [number, (string | number)[]][] = [];
    for (const [position, posting] of term[1].entries()) {
      if (posting === null) continue;
      if (!ids(posting)) return;
      slots.push([position, posting]);
    }
    result.push([term[0], term[1].length, slots]);
  }
  return result;
}
function restoreMap(value: unknown[]): unknown[] {
  return value.map(term => {
    if (!Array.isArray(term) || term.length !== 3 || typeof term[0] !== 'string'
      || !Number.isInteger(term[1]) || term[1] < 0 || term[1] > SEARCH_SCORE_SLOTS
      || !Array.isArray(term[2])) throw invalid();
    const slots: (null | (string | number)[])[] = Array.from({ length: term[1] }, () => null);
    let previous = -1;
    for (const posting of term[2]) {
      if (!Array.isArray(posting) || posting.length !== 2 || !Number.isInteger(posting[0])
        || posting[0] <= previous || posting[0] >= slots.length || !ids(posting[1])) throw invalid();
      slots[posting[0]] = posting[1]; previous = posting[0];
    }
    return [term[0], slots];
  });
}
/** Compress only supported map shapes when smaller; every export key/value remains recoverable. */
export function encodeSearchEntries(entries: Record<string, unknown[]>): SearchWireEntries {
  const result: Record<string, unknown[]> = Object.create(null) as Record<string, unknown[]>;
  const sparseMaps: string[] = [];
  for (const [key, value] of Object.entries(entries)) {
    if (!Array.isArray(value)) throw invalid();
    const sparse = mapKey(key) ? sparseMap(value) : undefined;
    if (sparse && new TextEncoder().encode(JSON.stringify(sparse)).length
      < new TextEncoder().encode(JSON.stringify(value)).length) {
      if (JSON.stringify(restoreMap(sparse)) !== JSON.stringify(value)) throw invalid();
      result[key] = sparse; sparseMaps.push(key);
    } else result[key] = value;
  }
  return { entries: result, sparseMaps };
}
/** Decode bounded v3 maps before engine import; legacy v2 native arrays remain accepted verbatim. */
export function decodeSearchEntries(entries: unknown, sparseMaps: unknown): Record<string, unknown[]> {
  if (!object(entries) || !Array.isArray(sparseMaps)
    || !sparseMaps.every(key => typeof key === 'string' && mapKey(key) && Object.hasOwn(entries, key))
    || new Set(sparseMaps).size !== sparseMaps.length) throw invalid();
  const selected = new Set(sparseMaps as string[]);
  const result: Record<string, unknown[]> = Object.create(null) as Record<string, unknown[]>;
  for (const [key, value] of Object.entries(entries)) {
    if (!Array.isArray(value)) throw invalid();
    result[key] = selected.has(key) ? restoreMap(value) : value;
  }
  return result;
}
