# Create PCR Workflow

Use this workflow when the current best PCR for a target product category has no existing canonical PCR record and must be written as a new PCR directory.

Ordinary classification import does not create a PCR placeholder. `import-cpc` creates zero PCR records by default;
the fail-fast `scaffold-cpc` alias and `--legacy-scaffolds` exist only for migration compatibility. If a retained
legacy scaffold already exists, this workflow may promote it in place, but neither import mode may replace existing
PCR content or an accepted mapping edge.

## Inputs

- target PCR directory under `library/pcrs/**`
- target product category and classification mapping context
- Tiangong CLI or database access for UUID lookup
- external sources for method rules, factors, process decomposition, and boundary rules
- optional user notes, seed examples, or source files

The AI produces the current best PCR from available evidence. This workflow writes that result into a new canonical PCR record. UUIDs, quantitative ranges, allocation formulas, and mandatory boundary rules use Tiangong lookup, cited public evidence, or declared foreground collection protocols before they are treated as final PCR content.

## Steps

1. Read the [Flow Identity Binding Contract](../contracts/flow-binding-contract.md), `builder/AGENTS.md`, `builder/docs/tools/tiangong-lca-cli.md`, `builder/docs/tools/data-sources-and-tools.md`, `builder/docs/contracts/pcr-markdown-contract.md`, `builder/docs/contracts/evidence-and-source-contract.md`, and `builder/vocab/*.yaml`.
2. Inspect the classification coordinate, coverage state, accepted mapping entries, and any retained legacy scaffold.
   A newly imported unmapped leaf normally has no `manifest.yaml`.
3. Confirm that no existing canonical PCR record covers the same semantic product category.
4. Choose a semantic PCR slug that does not contain the classification code. Explicitly initialize the four-file PCR
   directory, or promote the matching retained legacy scaffold in place after checking its identity.
5. Research the current product and route, record explicit `true`, `false`, or `unresolved` route signals using
   `builder/docs/contracts/module-authoring-plan-contract.md`, and run
   `npm run pcr:module-plan -- --context <route-context.yaml> --format markdown`.
6. Read only the selected module YAML files, copy their ids into the existing `manifest.modules` groups, and turn every
   returned requirement into a mandatory English PCR writing question. Resolve material unknown signals through
   current-product research.
7. Write scope, exclusions, product category identity, typical market state, candidate processes, and likely flows from the current PCR synthesis.
8. Define product category identity with canonical PCR id, classification refs, covered products, excluded products, representative product, production route, and market state.
9. Define functional unit and reference flow objects using `Field | Value` tables.
10. Keep flow identity fields unresolved while completing the semantic draft. Candidate UUID lookup begins only after
   every Process Map flow card and the English semantic draft are complete.
11. Define measurement and unit rules where they affect consistency, conversion, or validation.
12. Populate `Boundary Abstraction` with the resulting declared starting condition, role, classification scope, recursive input rule, upstream dataset requirement, and disclosure.
13. Define common data production processes before writing detailed inventory rows. Answer every selected module
    requirement in its declared target sections using evidence for this product and route.
14. For each process, write inventory rows by direction and flow type: product, waste, elementary.
15. Record amounts, exact values, formulas, foreground collection requirements, evidence-backed ranges, and clearly labelled provisional reasoned ranges with controlled `value_mode`, `specificity`, `basis_kind`, `evidence_kind`, and `range` metadata.
16. Link collected foreground rows and calculated foreground rows to `collection_protocol_id`.
17. Define data collection protocols with raw fields, collection method, unit, frequency, coverage, scope, aggregation rule, and quality evidence.
18. Define calculation rules from collected fields to normalized PCR values.
19. Define data quality requirements for identity, measurement, temporal coverage, completeness, and disclosure.
20. Define the published dataset profile with dataset role, downstream use, allowed use, excluded use, metadata, quality disclosure, and update trigger.
21. Add external data sources and reference their source ids from inventory or rule rows.
22. Keep authoring traces, unresolved review notes, and lifecycle state in `manifest.yaml`, issue records, or PR records.
23. Complete the English semantic draft in `pcr.en-US.md`. Then execute the
    [binding contract](../contracts/flow-binding-contract.md): assess applicable Flow Sets, look up only uncovered
    identities needing verification, confirm selected rows and support references, and finalize the English
    bindings. Record unresolved identities in manifest review metadata.
24. Write `pcr.zh-CN.md` as an aligned rendering of the same rule.
25. Run `npm run pcr:sync-structured -- --pcr <library/pcrs/...>`, then run
    `npm run pcr:module-checklist -- --pcr <library/pcrs/...>`. Manually compare the advisory obligations with the
    completed PCR and pre-generation plan; the checklist does not decide whether an obligation is satisfied.
26. Run the binding review gate in [review-pcr.md](review-pcr.md), resolve findings, resync the projection if content
    changed, and run `npm run validate`.
27. Update `manifest.yaml` lifecycle fields with `npm run pcr:lifecycle -- --pcr <library/pcrs/...> ...` when content maturity or translation state changes.
28. Only after semantic scope and methodology review, add or accept the classification mapping edge and run
    `npm run catalog:build`. Never use an empty PCR merely to make classification coverage appear mapped.

## Required PCR Facts

- PCR identity: canonical PCR id, classification refs, included products, excluded products, representative product, route, and market state.
- Functional unit and reference flow: what is measured, quantity, quality qualifiers, time or production cycle, Tiangong flow UUID, property UUID, unit group UUID, and unit.
- Boundary abstraction: declared starting condition, role, same-category recursive input rule, classification scope, required disclosure, and upstream dataset requirement.
- Foreground production basis: process map, inventory rows, collection protocols, calculation rules, data quality requirements, and source ids.
- Published dataset profile: role, downstream use as `secondary_dataset` and/or `background_dataset`, allowed use, excluded use, required metadata, required quality disclosure, and update trigger.
