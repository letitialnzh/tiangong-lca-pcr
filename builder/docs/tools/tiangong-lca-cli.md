# Tiangong LCA CLI Identity Tool

Use the Tiangong LCA CLI to look up database-backed identity references during PCR production.

The CLI is an identity evidence tool. PCR Markdown and `structured.yaml` store selected UUIDs. Command traces, query logs, dataset versions, API keys, and private runtime paths stay outside PCR content.

## Availability

Prefer an installed `tiangong-lca` binary when available:

```bash
tiangong-lca --help
```

In the workspace checkout, the sibling CLI repository may also be used:

```bash
cd ../cli
node ./bin/tiangong-lca.js --help
```

If no entry point is available, continue with semantic candidates using blank UUID cells and record the identity gap in `manifest.yaml` review metadata according to the manifest contract.

## PCR Lookup Use

Use CLI lookup for:

- product, waste, and elementary flow UUIDs
- flow property UUIDs
- unit or unit group UUIDs when the CLI exposes them
- process or dataset references when a PCR needs database-backed identity

Typical lookup shape:

```bash
tiangong-lca search flow --input ./search-flow.request.json --json
tiangong-lca flow get --id <flow-id> --json
tiangong-lca search process --input ./search-process.request.json --json
```

Before calling these commands, follow the [Flow Identity Binding Contract](../contracts/flow-binding-contract.md).
It owns semantic-card completion, Flow Set priority, candidate lookup/refinement limits, selected-row confirmation,
and support-reference verification for create and update work. This tool note specifies command use, not a separate
lookup sequence.

## Storage Rules

PCR content may store:

- selected UUID
- selected flow property UUID
- selected unit or unit group UUID
- modelling role of the reference

Authoring artifacts stored outside PCR content:

- Tiangong dataset version
- CLI command output blocks
- lookup trace tables
- local request file paths
- credentials, tokens, or private endpoints

Tiangong is the identity source for UUID-bearing references. `Data Sources` records external sources and non-default quantitative or method evidence.

## Fallback Behavior

When the CLI is unavailable or cannot verify an identity, apply the binding contract's unresolved-coverage rules.
Keep useful semantic names, leave unresolved UUIDs blank, and record the gap in the selected workspace manifest's
review metadata. Do not expand the candidate-search allowance or claim verification because a command failed.
