'use client';

import { useCallback, useState } from 'react';
import { decodeRecordData, type Json } from '../lib/record-data.ts';

type Labels = {
  title: string;
  note: string;
  load: string;
  loading: string;
  reload: string;
  error: string;
  manifest: string;
  structured: string;
  expandAll: string;
  collapseAll: string;
};


function isPlainObject(value: Json): value is { [key: string]: Json } {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function kindOf(value: Json): string {
  if (value === null) return 'null';
  if (Array.isArray(value)) return `array[${value.length}]`;
  if (isPlainObject(value)) return `object{${Object.keys(value).length}}`;
  return typeof value;
}

/** Scalars are always shown as the complete stored value, including booleans and empty strings. */
function scalarText(value: Json): string {
  if (value === null) return 'null';
  if (typeof value === 'string') return value.length === 0 ? '""' : value;
  return String(value);
}

function FieldNode({ name, value, path }: { name: string; value: Json; path: string }) {
  const children = Array.isArray(value)
    ? value.map((item, index) => [String(index), item] as const)
    : isPlainObject(value)
      ? Object.entries(value)
      : null;

  if (!children) {
    return (
      <li>
        <div className="pcr-disclosure" data-field-path={path}>
          <span className="pcr-field-key">{name}</span>
          <span className="pcr-field-kind">{kindOf(value)}</span>
          <pre className="pcr-field-value">{scalarText(value)}</pre>
        </div>
      </li>
    );
  }

  return (
    <li>
      <details className="pcr-disclosure" data-field-path={path} open={path.split('.').length <= 2}>
        <summary>
          <span className="pcr-field-key">{name}</span>
          <span className="pcr-field-kind">{kindOf(value)}</span>
        </summary>
        {children.length === 0 ? (
          <p className="pcr-field-value">{Array.isArray(value) ? '[]' : '{}'}</p>
        ) : (
          <ul className="pcr-field-list">
            {children.map(([key, child]) => (
              <FieldNode key={key} name={key} value={child} path={`${path}.${key}`} />
            ))}
          </ul>
        )}
      </details>
    </li>
  );
}

function Section({ id, name, value }: { id: string; name: string; value: Json }) {
  return (
    <details className="pcr-disclosure" data-field-section={id} open>
      <summary>
        <span className="pcr-field-key">{name}</span>
        <span className="pcr-field-kind">{kindOf(value)}</span>
      </summary>
      <ul className="pcr-field-list">
        {Object.entries(value as { [key: string]: Json }).map(([key, child]) => (
          <FieldNode key={key} name={key} value={child} path={`${id}.${key}`} />
        ))}
      </ul>
    </details>
  );
}

export function DataInspector({ dataUrl, dataKey, labels }: { dataUrl: string; dataKey?: string | undefined; labels: Labels }) {
  const [state, setState] = useState<
    | { kind: 'idle' }
    | { kind: 'loading' }
    | { kind: 'error' }
    | { kind: 'ready'; manifest: Json; structured: Json }
  >({ kind: 'idle' });

  const load = useCallback(
    (signal?: AbortSignal) => {
      setState({ kind: 'loading' });
      fetch(dataUrl, { signal })
        .then(async (response) => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const payload = decodeRecordData(await response.json(), dataKey);
          if (signal?.aborted) return;
          setState({
            kind: 'ready',
            manifest: payload.manifest,
            structured: payload.structured,
          });
        })
        .catch((error: unknown) => {
          if ((error as Error)?.name === 'AbortError') return;
          setState({ kind: 'error' });
        });
    },
    [dataUrl, dataKey],
  );

  return (
    <section className="pcr-inspector" data-record-key={dataKey} aria-labelledby="pcr-inspector-heading">
      <h2 id="pcr-inspector-heading" className="pcr-section-title">
        {labels.title}
      </h2>
      <p className="pcr-inspector-note">{labels.note}</p>

      <div className="pcr-inspector-actions" style={{ marginBlockStart: '0.75rem' }}>
        {state.kind === 'idle' ? (
          <button type="button" className="pcr-action" onClick={() => load()}>
            {labels.load}
          </button>
        ) : null}
        {state.kind === 'loading' ? (
          <span className="pcr-inspector-status" role="status">
            {labels.loading}
          </span>
        ) : null}
        {state.kind === 'error' ? (
          <>
            <span className="pcr-inspector-status pcr-inspector-error" role="alert">
              {labels.error}
            </span>
            <button type="button" className="pcr-action" onClick={() => load()}>
              {labels.reload}
            </button>
          </>
        ) : null}
        {state.kind === 'ready' ? (
          <>
            <button
              type="button"
              className="pcr-action"
              onClick={(event) => {
                const root = event.currentTarget.closest('.pcr-inspector');
                root?.querySelectorAll('details').forEach((item) => {
                  item.open = true;
                });
              }}
            >
              {labels.expandAll}
            </button>
            <button
              type="button"
              className="pcr-action"
              onClick={(event) => {
                const root = event.currentTarget.closest('.pcr-inspector');
                root?.querySelectorAll('details').forEach((item) => {
                  item.open = false;
                });
              }}
            >
              {labels.collapseAll}
            </button>
          </>
        ) : null}
      </div>

      {state.kind === 'ready' ? (
        <div className="pcr-fields">
          <Section id="manifest" name={labels.manifest} value={state.manifest} />
          <Section id="structured" name={labels.structured} value={state.structured} />
        </div>
      ) : null}
    </section>
  );
}
