# Update PCR Workflow

Use this workflow when the current best PCR for a target product category should be written into an existing canonical PCR record.

Existing PCR content is prior evidence and the canonical write target. Direct user instructions, source files, reviewer notes, datasets, and database alignments can narrow the changed surface, but the AI still synthesizes the current best PCR before editing.

## Inputs

An update may be driven by:

- direct user instruction
- source document, file, table, or dataset
- reviewer feedback
- Tiangong database alignment change
- classification mapping correction
- publication or lifecycle requirement

## Steps

1. Read `builder/AGENTS.md`, `builder/docs/tools/tiangong-lca-cli.md`, `builder/docs/tools/data-sources-and-tools.md`, and the relevant contracts.
2. Inspect the target `manifest.yaml`. If it is a managed published PCR, choose the target SemVer and run `npm run pcr:revise -- --pcr <library/pcrs/...> --version <target-semver>` before editing. If it is deprecated, stop: deprecated state cannot be reopened through this workflow.
3. Select the workspace explicitly. Use the four top-level files for an unpublished current record; use `revision/manifest.next.yaml`, `revision/pcr.en-US.md`, `revision/pcr.zh-CN.md`, and `revision/structured.yaml` for an open revision. Never edit the published top-level current release in place.
4. Compare the current PCR synthesis with the existing record.
5. Identify whether the synthesis or driving input changes identity, reference flow, measurement rules, boundary abstraction, process inventory, evidence, translation, classification refs, or lifecycle status.
5a. When the process map or inventory changes, derive and complete all Process Map flow cards before binding identity. Do not create or split cards by enumerating Flow Set groups; split only for independently required inventory, measurement, calculation, boundary, condition, or validation behavior. Apply each current draft Flow Set's declared binding policy as provisional parameterized scope. `flow-set.agricultural-nutrient-supply` is set-only: each process may contain at most one consolidated fertilizer and nutrient Product-flow card, without a group, covering mineral fertilizers, organic fertilizers, and nutrient amendments. `flow-set.energy-supply` defaults to set-level when actual carriers are selected from foreground records, while one exact group remains allowed when the PCR method requires a specific energy function. Refine an uncovered Product flow or any elementary flow to the lowest evidence-supported level using material or substance identity, flow type, direction, process state or gate, intended use, and destination, then send it to platform lookup.
5b. Use `parameterized` for a Product-flow Flow Set reference. Include one exact group only when the set declares group-level binding; omit the group when it declares set-level binding. Never encode alternative ids in `group`. Use `fixed` only for an exact verified UUID; otherwise retain unmapped coverage. Elementary flows must not cite a Flow Set. Foreground data generation must expand set-level scope from actual records and resolve each emitted exchange to one UUID, retaining the concrete product identity and nutrient composition used for calculation. Do not change the real boundary, flow type, or direction to force a match, use a product-output Flow Set fallback, or create a new Flow Set/module during this pass. Record any reusable-pattern module gap for separate forward module design.
6. If the input is a document, file, or dataset, extract only the PCR-relevant claims and create or update stable source ids.
7. If the input is a Tiangong alignment change, update UUID-bearing references without adding Tiangong rows to `Data Sources` unless they provide non-default quantitative evidence.
8. Update canonical `pcr.en-US.md` first.
9. Update `pcr.zh-CN.md` so it remains aligned with the English rule.
10. Add or update external data sources when a new range, factor, method, or boundary rule depends on non-default evidence.
11. Remove stale source ids and inventory rows that no longer support the PCR.
12. Update the selected workspace manifest's review metadata when the input creates unresolved identity, evidence, or translation gaps. Keep lookup traces, query strings, search results, UUID lookup failures, tool errors, and timestamps there or in dedicated issue/PR/audit artifacts; do not put them in canonical Markdown body text or generated `structured.yaml`.
13. Run `npm run pcr:sync-structured -- --pcr <library/pcrs/...> --workspace <current|revision>`.
14. Run `npm run validate`.
15. Use `npm run pcr:lifecycle -- --pcr <library/pcrs/...> --workspace <current|revision> --status <status> --content-maturity <state> --translation <lang=status>` when review, maturity, or translation state changes.
16. For an unpublished current record only, use `npm run pcr:bump -- --pcr <library/pcrs/...> --level <patch|minor|major>` when a pre-publication version increment is needed. Never bump a published/deprecated current record or an open revision.
17. When a revision is reviewed and publication-ready, run `npm run pcr:publish -- --pcr <library/pcrs/...> --workspace revision`; its target version is already locked by `pcr:revise`.

All lifecycle, sync, bump, revise, and publish mutations use a recoverable whole-directory transaction. If a command
reports recovery state, run `npm run pcr:recover -- --pcr <library/pcrs/...>` and then `npm run validate` before
continuing. Use `--force-stale-lock` only after confirming no writer is active and ordinary recovery requires the
override.

## Version Guidance

- patch: wording, source clarification, non-breaking range clarification
- minor: new process, new measurement rule, expanded scope within the same category
- major: reference flow change, category meaning change, incompatible boundary or allocation change
