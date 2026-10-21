/** The pinned FlexSearch index uses nine scoring slots; wire v3/v4/v5 retain every slot and ID. */
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
  scoreMasks?: true;
  postingDeltas?: true;
  columnarMaps?: string[];
  joinedTerms?: true;
  dictionaryTerms?: true;
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
function deltaPosting(value: (string | number)[]): (string | number)[] {
  return value.every(id => typeof id === 'number')
    ? value.map((id, index) => Number(id) - Number(value[index - 1] ?? 0)) : value;
}
function restorePosting(value: unknown): unknown {
  if (!Array.isArray(value) || !value.every(id => typeof id === 'number')) return value;
  let previous = 0;
  return value.map(delta => {
    if (!Number.isSafeInteger(delta) || !Number.isSafeInteger(previous + delta) || previous + delta < 0) throw invalid();
    previous += delta;
    return previous;
  });
}
/** A bounded header stores vector length and occupied slots; numeric postings use reversible deltas. */
function maskMap(value: SparseTerm[]): unknown[][] {
  return value.map(([term, length, slots]) => [term,
    length * 512 + slots.reduce((mask, [position]) => mask + 2 ** position, 0),
    ...slots.map(([, posting]) => deltaPosting(posting))]);
}
/** A shared vocabulary preserves first-encounter order across the logical indexes. */
export function createSearchTermDictionary(shards: readonly Record<string, unknown[]>[]): string[] {
  const terms = new Set<string>();
  for (const entries of shards) for (const [key, value] of Object.entries(entries)) {
    if (!Array.isArray(value)) throw invalid();
    const sparse = mapKey(key) ? sparseMap(value) : undefined;
    if (sparse) for (const [term] of sparse) terms.add(term);
  }
  return [...terms];
}
export function readSearchTermDictionary(value: unknown): readonly string[] {
  if (!Array.isArray(value)) throw invalid();
  const seen = new Set<string>();
  for (const term of value) {
    if (typeof term !== 'string' || seen.has(term)) throw invalid();
    seen.add(term);
  }
  return value as string[];
}
/** Keep the exact term order and score headers while removing per-term JSON tuple framing. */
function columnarMap(value: unknown[][], joinedTerms = false, dictionary?: ReadonlyMap<string, number>): unknown[] {
  const terms: string[] = [], headers: number[] = [], postings: unknown[] = [];
  for (const term of value) {
    terms.push(term[0] as string);
    headers.push(term[1] as number);
    postings.push(...term.slice(2));
  }
  const encodedTerms = dictionary ? deltaPosting(terms.map(term => {
    const id = dictionary.get(term); if (id === undefined) throw invalid(); return id;
  })) : joinedTerms && terms.length > 0 && terms.every(term => !term.includes(' ')) ? terms.join(' ') : terms;
  return [encodedTerms, headers, postings];
}
function restoreColumnar(value: unknown[], joinedTerms = false, dictionary?: readonly string[]): unknown[] {
  if (value.length !== 3) throw invalid();
  if (dictionary) {
    if (!Array.isArray(value[0]) || !Array.isArray(value[1]) || value[0].length !== value[1].length) throw invalid();
    const refs = restorePosting(value[0]);
    if (!Array.isArray(refs) || !refs.every(id => typeof id === 'number' && Number.isSafeInteger(id) && id >= 0 && id < dictionary.length)) throw invalid();
    value = [refs.map(id => dictionary[id as number]), value[1], value[2]];
  }
  if (joinedTerms && typeof value[0] === 'string') {
    if (!Array.isArray(value[1])) throw invalid();
    const text = value[0], terms: string[] = [];
    let start = 0;
    for (let offset = 0; offset <= text.length; offset++) if (offset === text.length || text[offset] === ' ') {
      if (terms.length >= value[1].length) throw invalid();
      terms.push(text.slice(start, offset)); start = offset + 1;
    }
    value = [terms, value[1], value[2]];
  }
  if (value.length !== 3 || !Array.isArray(value[0]) || !Array.isArray(value[1])
    || !Array.isArray(value[2]) || value[0].length !== value[1].length
    || value[2].length > value[0].length * SEARCH_SCORE_SLOTS) throw invalid();
  const terms = value[0] as unknown[], headers = value[1] as unknown[], postings = value[2] as unknown[];
  const result: unknown[] = [];
  let offset = 0;
  for (let index = 0; index < terms.length; index++) {
    const header = headers[index];
    if (typeof terms[index] !== 'string' || typeof header !== 'number' || !Number.isInteger(header)
      || header < 0 || header > SEARCH_SCORE_SLOTS * 512 + 511) throw invalid();
    const length = Math.floor(header / 512), mask = header % 512;
    if (mask >= 2 ** length) throw invalid();
    let count = 0;
    for (let position = 0; position < length; position++) if (mask & 2 ** position) count++;
    if (offset + count > postings.length) throw invalid();
    result.push([terms[index], header, ...postings.slice(offset, offset + count)]);
    offset += count;
  }
  if (offset !== postings.length) throw invalid();
  return result;
}
function restoreMasks(value: unknown[]): unknown[] {
  const nested = value.map(term => {
    if (!Array.isArray(term) || term.length < 2 || typeof term[0] !== 'string'
      || !Number.isInteger(term[1]) || term[1] < 0 || term[1] > SEARCH_SCORE_SLOTS * 512 + 511) throw invalid();
    const length = Math.floor(term[1] / 512), mask = term[1] % 512;
    if (mask >= 2 ** length) throw invalid();
    const slots: unknown[] = [];
    let offset = 2;
    for (let position = 0; position < length; position++) if (mask & 2 ** position) {
      if (offset >= term.length) throw invalid();
      slots.push([position, restorePosting(term[offset++])]);
    }
    if (offset !== term.length) throw invalid();
    return [term[0], length, slots];
  });
  return restoreMap(nested, 3);
}
function restoreMap(value: unknown[], version: 3 | 4): unknown[] {
  if (version === 4) value = value.map(term => {
    if (!Array.isArray(term) || term.length < 2 || term.length % 2 !== 0) throw invalid();
    const slots: unknown[] = [];
    for (let offset = 2; offset < term.length; offset += 2) slots.push([term[offset], term[offset + 1]]);
    return [term[0], term[1], slots];
  });
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
export function encodeSearchEntries(entries: Record<string, unknown[]>, version: 3 | 4 | 5 = 3, termDictionary?: readonly string[]): SearchWireEntries {
  if (termDictionary !== undefined && version !== 5) throw invalid();
  const dictionary = termDictionary === undefined ? undefined : readSearchTermDictionary(termDictionary);
  const lookup = dictionary && new Map(dictionary.map((term, id) => [term, id]));
  const result: Record<string, unknown[]> = Object.create(null) as Record<string, unknown[]>;
  const sparseMaps: string[] = [], columnarMaps: string[] = [];
  for (const [key, value] of Object.entries(entries)) {
    if (!Array.isArray(value)) throw invalid();
    const nested = mapKey(key) ? sparseMap(value) : undefined;
    const sparse = nested && (version >= 4 ? maskMap(nested) : nested);
    const columns = version >= 4 && sparse ? columnarMap(sparse as unknown[][], version === 5, lookup) : undefined;
    const encoded = columns && new TextEncoder().encode(JSON.stringify(columns)).length
      < new TextEncoder().encode(JSON.stringify(sparse)).length ? columns : sparse;
    if (encoded && new TextEncoder().encode(JSON.stringify(encoded)).length
      < new TextEncoder().encode(JSON.stringify(value)).length) {
      if (JSON.stringify(version >= 4 ? restoreMasks(encoded === columns ? restoreColumnar(encoded, version === 5, dictionary) : encoded) : restoreMap(encoded, 3)) !== JSON.stringify(value)) throw invalid();
      result[key] = encoded; sparseMaps.push(key);
      if (encoded === columns) columnarMaps.push(key);
    } else result[key] = value;
  }
  return version >= 4 ? { entries: result, sparseMaps, scoreMasks: true, postingDeltas: true,
    ...(columnarMaps.length ? { columnarMaps } : {}),
    ...(version === 5 ? { joinedTerms: true as const } : {}),
    ...(dictionary ? { dictionaryTerms: true as const } : {}) } : { entries: result, sparseMaps };
}
/** Decode the declared bounded v3/v4/v5 format before engine import; unmarked arrays remain native. */
export function decodeSearchEntries(entries: unknown, sparseMaps: unknown, version: 3 | 4 | 5 = 3, scoreMasks?: unknown, postingDeltas?: unknown, columnarMaps?: unknown, joinedTerms?: unknown, termDictionary?: unknown, dictionaryTerms?: unknown): Record<string, unknown[]> {
  if (termDictionary === undefined ? dictionaryTerms !== undefined : version !== 5 || dictionaryTerms !== true) throw invalid();
  const dictionary = termDictionary === undefined ? undefined : readSearchTermDictionary(termDictionary);
  if (version === 5 ? joinedTerms !== true || scoreMasks !== true || postingDeltas !== true : joinedTerms !== undefined) throw invalid();
  if ((scoreMasks !== undefined || postingDeltas !== undefined)
    && (version < 4 || scoreMasks !== true || postingDeltas !== true)) throw invalid();
  if (!object(entries) || !Array.isArray(sparseMaps)
    || !sparseMaps.every(key => typeof key === 'string' && mapKey(key) && Object.hasOwn(entries, key))
    || new Set(sparseMaps).size !== sparseMaps.length) throw invalid();
  const selected = new Set(sparseMaps as string[]);
  if (columnarMaps !== undefined && (version < 4 || scoreMasks !== true || postingDeltas !== true
    || !Array.isArray(columnarMaps) || !columnarMaps.every(key => typeof key === 'string' && selected.has(key))
    || new Set(columnarMaps).size !== columnarMaps.length)) throw invalid();
  const columnar = new Set((columnarMaps ?? []) as string[]);
  const result: Record<string, unknown[]> = Object.create(null) as Record<string, unknown[]>;
  for (const [key, value] of Object.entries(entries)) {
    if (!Array.isArray(value)) throw invalid();
    result[key] = selected.has(key) ? (scoreMasks === true ? restoreMasks(columnar.has(key) ? restoreColumnar(value, version === 5, dictionary) : value) : restoreMap(value, version === 3 ? 3 : 4)) : value;
  }
  return result;
}
