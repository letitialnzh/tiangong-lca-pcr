# PCR Builder Agent Guide

This directory defines how agents construct, update, validate, and publish PCR records.

## Non-Negotiable Rules

- Treat `pcr.en-US.md` as the canonical authored source.
- Treat `pcr.zh-CN.md` as the aligned Chinese rendering of the same PCR.
- Treat `structured.yaml` as generated output. Regenerate an unpublished current workspace with `npm run pcr:sync-structured -- --pcr <library/pcrs/...>` and an open revision with `--workspace revision`.
- Do not hand-edit generated structured projections except when changing the projection generator itself.
- Do not edit, sync, or bump a published/deprecated current workspace in place. Open a published revision with `pcr:revise`; its target version is locked until publication.
- Do not edit `releases/**` or `release-history.yaml` manually. They are immutable/append-only publication artifacts maintained by the builder transaction.
- Do not reopen a deprecated PCR. Reintroduction requires a separately governed successor or restoration workflow.
- Before binding or reviewing flow identities, read `builder/docs/contracts/flow-binding-contract.md`. It owns the
  shared create/update/review sequence and lookup policy; complete semantic cards before Flow Set assessment and
  uncovered-flow UUID lookup, confirm selected identities, then project and review.
- Store Tiangong UUID references without dataset versions.
- Do not put CLI lookup traces, search logs, review notes, API keys, session paths, or private runtime details in PCR Markdown or `structured.yaml`.
- Do not list Tiangong database rows in `Data Sources` when they only support UUID identity. Tiangong is the default source for UUID-bearing rows.
- List external literature, official guidance, standards, methods, and non-default quantitative evidence in `Data Sources`.
- Keep classification codes in `classifications/mappings/**` and `classification_refs`, not in canonical PCR directory names.
- Keep CPC import classification-only by default. `import-cpc` creates zero PCR records, validates and preserves an
  existing mapping byte-for-byte, and creates only a zero-edge current mapping when one is absent. Register a coverage
  descriptor before importing a non-3.0 version.
- Treat current mapping v2 as an accepted-positive-edge contract. Every edge must target a material PCR and carry
  explicit acceptance decision metadata; candidate or manual-review evidence belongs in coverage assessment.
- Treat `scaffold-cpc` as a fail-fast compatibility alias. It requires explicit `--legacy-scaffolds` and may operate
  only on a retained v1/scaffold mapping fixture. It must fail before mutation on a current v2 mapping, so it cannot
  inject an unaccepted edge or rehydrate a retired leaf-derived PCR directory. It must not repair a partial target,
  replace accepted mappings, or overwrite PCR content.
- Treat `classifications/aliases/pcr-id-aliases.yaml` as a deterministic generated registry. Rebuild it with
  `npm run aliases:build`; do not hand-edit terminal locators or silently follow one into a PCR. The catalog must pin
  its canonical path, exact-byte SHA-256, and entry count, including an empty registry created by `init`.
- Publish catalog, material index, and coverage indexes only through the journaled catalog artifact transaction.
  Recover interrupted state with `npm run catalog:recover`; use `--force-stale-lock` only after confirming no writer
  is active.
- PCR production always synthesizes the current best PCR for the target product category from available evidence. Existing PCR content is prior evidence and a canonical write target, not a separate reasoning mode.
- Use public evidence and domain common sense to initialize candidate processes, qualifiers, and likely flows; UUIDs and quantitative ranges must be evidence-backed before they are treated as final PCR content.
- Before writing `pcr.en-US.md`, use current-product route research to run the module authoring plan. Treat selected
  module obligations as mandatory section-level questions and run the advisory checklist after projection generation.

## Context Routing

Read only the route needed for the task. Do not load every builder document by default.

For create PCR work:

- read `builder/docs/workflows/create-pcr.md`
- read `builder/docs/tools/tiangong-lca-cli.md` when UUID lookup is needed
- read `builder/docs/tools/data-sources-and-tools.md` when choosing source evidence
- read `builder/docs/contracts/pcr-markdown-contract.md` and `builder/docs/contracts/evidence-and-source-contract.md`
- read specific `builder/docs/methods/**` files only when the workflow references that method topic

For update PCR work:

- read `builder/docs/workflows/update-pcr.md`
- inspect the source/input that drives the update before editing
- read only contracts for the changed surface, such as manifest, Markdown, structured projection, evidence, or UUID references

For translation, review, or publish work:

- read the matching file under `builder/docs/workflows/`
- read only the contracts named by that workflow, including the flow binding contract for identity review
- for an already published PCR, read `builder/docs/contracts/published-revision-contract.md` and operate on
  `--workspace revision`

For feedback issue intake or accepted feedback updates:

- read `builder/docs/workflows/intake-feedback-issue.md`
- if actionable, read `builder/docs/workflows/update-pcr-from-feedback.md`
- inspect the issue body or feedback draft before editing
- inspect public CLI files under `packages/**` only when feedback concerns consumption behavior rather than PCR methodology

For classification import, legacy scaffold compatibility, or mapping work:

- read `docs/classification-policy.md`
- inspect the affected files under `classifications/systems/**` or `classifications/mappings/**`
- inspect `builder/schemas/classification-mapping.schema.json` when mapping shape changes
- rebuild and check the legacy-id registry when an accepted mapping or retired leaf identity changes
- inspect `builder/cli/`, `builder/lib/`, `builder/scripts/`, or `builder/templates/` when import or legacy scaffold
  behavior changes

For CLI, schema, template, import, or scaffold behavior changes:

- read `builder/README.md`
- inspect the affected files under `builder/cli/`, `builder/scripts/`, `builder/schemas/`, `builder/templates/`, or `builder/vocab/`
- update `builder/docs/**` only when behavior changes the authoring contract

For public PCR consumption CLI or skill changes:

- inspect `packages/pcr-core/`, `packages/tiangong-pcr-cli/`, `skills/tiangong-pcr/`, and `.github/ISSUE_TEMPLATE/`
- keep `builder/cli/` focused on PCR library maintenance
- update repo-level docs when the consumption boundary or commands change

## Required Commands

For PCR content changes, run before handoff:

```bash
npm run pcr:sync-structured -- --pcr <library/pcrs/...>
npm run validate
```

For builder CLI, schema, template, vocab, docs, classification, or mapping changes, run before handoff:

```bash
npm run validate
```

For review, translation, publication, or version lifecycle updates, run the relevant lifecycle command:

```bash
npm run pcr:lifecycle -- --pcr <library/pcrs/...> --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed
npm run pcr:bump -- --pcr <library/pcrs/...> --level patch
npm run pcr:publish -- --pcr <library/pcrs/...> --workspace current --version <semver>
```

For a later version of a managed published PCR, keep the top-level current release unchanged and use the revision
workspace:

```bash
npm run pcr:revise -- --pcr <library/pcrs/...> --version <target-semver>
npm run pcr:sync-structured -- --pcr <library/pcrs/...> --workspace revision
npm run pcr:lifecycle -- --pcr <library/pcrs/...> --workspace revision --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed
npm run pcr:publish -- --pcr <library/pcrs/...> --workspace revision
```

If a builder mutation reports an interrupted transaction, recover it before continuing and validate afterward:

```bash
npm run pcr:recover -- --pcr <library/pcrs/...>
npm run validate
```

For interrupted catalog/material/coverage publication, recover the whole artifact set and verify it before retrying:

```bash
npm run catalog:recover
npm run catalog:check
```

Use either recovery command's `--force-stale-lock` only after verifying that no writer is active and ordinary
recovery explicitly requires it.

## Quality Bar

An authored PCR is not acceptable unless:

- reference flow is represented as one `Field | Value` table with required qualifiers
- measurement and unit rules constrain only modelling consistency, conversion, or validation behavior
- process inventory is organized by process, direction, flow type, and individual flow row
- range, basis, evidence, and source references follow the controlled vocabularies
- quantitative ranges, factors, boundary rules, and allocation rules cite non-default evidence when they constrain modelling choices
- bilingual Markdown files describe the same rule
- `structured.yaml` reflects the canonical Markdown after sync
