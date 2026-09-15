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
- optional user notes or source files; existing PCRs may be inspected only for reuse determination, never as content templates
- the repository-owned structural templates `builder/templates/pcr.en-US.md.hbs` and
  `builder/templates/pcr.zh-CN.md.hbs`; these are mandatory format scaffolds, not semantic content templates

The AI produces the current best PCR from available evidence. This workflow writes that result into a new canonical PCR record. UUIDs, quantitative ranges, allocation formulas, and mandatory boundary rules use Tiangong lookup, cited public evidence, or declared foreground collection protocols before they are treated as final PCR content.

## Steps

1. Read `builder/AGENTS.md`, `builder/docs/tools/tiangong-lca-cli.md`, `builder/docs/tools/data-sources-and-tools.md`, `builder/docs/contracts/pcr-markdown-contract.md`, `builder/docs/contracts/evidence-and-source-contract.md`, and `builder/vocab/*.yaml`.
2. Inspect the classification coordinate, coverage state, accepted mapping entries, and any retained legacy scaffold.
   A newly imported unmapped leaf normally has no `manifest.yaml`.
3. Confirm whether an existing canonical PCR record covers the same semantic product category. If it does, reuse that PCR
   through classification mapping rather than creating a duplicate. If it does not, continue as a new PCR and do not use
   another PCR as a content template.
4. Choose a semantic PCR slug that does not contain the classification code. Explicitly initialize the four-file PCR
   directory, or use the matching retained legacy scaffold in place after checking its identity. Before authoring,
   apply the current repository-owned English and Chinese Markdown scaffold structure. Preserve its required
   frontmatter keys, section hierarchy, machine-recognized headings, table headers, and flow-card field labels exactly;
   do not replace them with free-form equivalents or synonyms.
5. Fill `pcr.en-US.md` with a complete semantic draft from the target evidence and existing modules. Include scope,
   exclusions, product category identity, typical market state, candidate processes, and every Process Map flow card.
   Derive card count from independent inventory, measurement, calculation, boundary, condition, and validation needs;
   never enumerate Flow Set groups to create cards. Use one conditional umbrella card when actual foreground records
   determine whether zero, one, or several specific exchanges exist. Do not copy these contents from another PCR. Leave
   UUID, flow-property UUID, and unit-group UUID fields blank while drafting.
6. Define product category identity with canonical PCR id, classification refs, covered products, excluded products, representative product, production route, and market state.
7. Define functional unit and reference flow objects using `Field | Value` tables.
8. Define measurement and unit rules where they affect consistency, conversion, or validation.
9. Populate `Boundary Abstraction` with the resulting declared starting condition, role, classification scope, recursive input rule, upstream dataset requirement, and disclosure.
10. Define common data production processes before writing detailed inventory rows.
11. For each process, write inventory rows by direction and flow type: product, waste, elementary.
12. Record amounts, exact values, formulas, foreground collection requirements, evidence-backed ranges, and clearly labelled provisional reasoned ranges with controlled `value_mode`, `specificity`, `basis_kind`, `evidence_kind`, and `range` metadata.
13. Link collected foreground rows and calculated foreground rows to `collection_protocol_id`.
14. Define data collection protocols with raw fields, collection method, unit, frequency, coverage, scope, aggregation rule, and quality evidence.
15. Define calculation rules from collected fields to normalized PCR values.
16. Define data quality requirements for identity, measurement, temporal coverage, completeness, and disclosure.
17. Define the published dataset profile with dataset role, downstream use, allowed use, excluded use, metadata, quality disclosure, and update trigger.
18. Add external data sources and reference their source ids from inventory or rule rows.
19. Only after the English semantic draft and all Process Map flow cards are complete, bind identity. Match a semantically concrete card to the narrowest reviewed group in `library/flow-sets/taxonomy-v2.yaml`. For a conditional umbrella card, cite the Flow Set id/version and omit `group` so case-specific selection remains deferred. Do not encode several candidate ids in `group`, and do not search a UUID for a covered set. For an uncovered card, use Tiangong CLI or database search to select UUID-bearing flow, flow property, and unit group references. Refine an uncovered conceptual flow only when the completed card needs evidence-supported detail on material or substance identity, flow type, direction, process state or gate, intended use, or destination; then perform at most one refinement lookup.
20. Bind either Flow Set form as `parameterized`; bind an exact verified UUID as `fixed` only for an uncovered flow; otherwise retain unmapped coverage. Foreground data generation must expand each deferred umbrella from actual records and resolve every emitted exchange to one group and one verified UUID. Unresolved UUIDs stay blank and are tracked in `manifest.yaml` review metadata. Do not change the real boundary, flow type, or direction to force a match, use a product-output Flow Set fallback, or create a new Flow Set/module during this pass. Record any reusable-pattern module gap for separate forward module design.
21. Keep authoring traces, lookup failures, unresolved review notes, and lifecycle state in `manifest.yaml` review metadata, issue records, PR records, or dedicated audit artifacts. Never copy CLI queries, search results, UUID lookup failures, tool errors, or timestamps into the canonical Markdown body text or generated `structured.yaml`.
22. Finalize `pcr.en-US.md` by filling the selected UUID bindings or preserving the permitted blank values and unresolved state through the defined contract.
23. Write `pcr.zh-CN.md` as an aligned rendering of the same rule. Keep the template's exact Chinese headings and field
    labels and preserve every machine-addressable rule id from the English rendering.
23a. Before projection, compare both files against the repository templates and verify the required frontmatter fields,
    section headings, table headers, flow-card labels, rule-id sets, and collection-protocol references. A semantically
    similar free-form heading, bullet layout, or omitted field is a format failure.
24. Run `npm run pcr:sync-structured -- --pcr <library/pcrs/...>`. The builder automatically evaluates candidate
    modules against the generated PCR projection, writes applicable module ids into `manifest.yaml`, and writes
    selected and unresolved module references into `structured.yaml`. No manual module confirmation is required.
    Automatic selection contributes obligations and checks only; it never supplies product facts, quantities, factors,
    UUIDs, or a final PCR-specific decision.
25. Run `npm run validate`.
26. After semantic scope and candidate methodology are authored, promote a retained scaffold with
    `npm run pcr:lifecycle -- --pcr <library/pcrs/...> --status candidate --content-maturity <draft_methodology|authored_methodology> ...`.
    This transition automatically accepts every positive `manifest.classification_refs` edge, removes the matching
    leaf-derived alias when the canonical id is unchanged, and rebuilds catalog and coverage artifacts. Conflicting or
    non-positive references fail before classification writes.
27. For a new PCR that was not a retained scaffold, review and add its accepted classification mapping separately,
    retaining durable decision evidence for the acceptance. Do not create a new ADR solely for completing a PCR batch;
    reuse an applicable decision record or use a non-ADR acceptance record. Then run `npm run aliases:build` when CPC
    3.0 legacy identity changes and `npm run catalog:build`. Never use an empty PCR merely to make classification
    coverage appear mapped.

## Required PCR Facts

- PCR identity: canonical PCR id, classification refs, included products, excluded products, representative product, route, and market state.
- Functional unit and reference flow: what is measured, quantity, quality qualifiers, time or production cycle, Tiangong flow UUID, property UUID, unit group UUID, and unit.
- Boundary abstraction: declared starting condition, role, same-category recursive input rule, classification scope, required disclosure, and upstream dataset requirement.
- Foreground production basis: process map, inventory rows, collection protocols, calculation rules, data quality requirements, and source ids.
- Published dataset profile: role, downstream use as `secondary_dataset` and/or `background_dataset`, allowed use, excluded use, required metadata, required quality disclosure, and update trigger.
