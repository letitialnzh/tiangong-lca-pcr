# Inventory Flow Pattern Rules

Author new PCR inventory content as process inventory, not as a flat inventory list.

Each material PCR should break the product category into common modelling processes first. Within each process, organize the inventory in this order:

1. direction: `inputs` or `outputs`
2. flow type: `product`, `waste`, or `elementary`
3. individual flow rows

Each flow row should record:

- stable `row_id`
- modelling role
- flow type
- Tiangong flow UUID when a database flow exists
- binding decision: `fixed` or `parameterized`; if neither can be justified, leave the row unmapped rather than inventing a binding state
- for `parameterized`, Flow Set id/version and optional functional group
- flow property UUID
- unit group UUID
- preferred reference unit
- amount expression or foreground collection requirement
- `value_mode`, using `builder/vocab/amount-value-mode.yaml`
- `specificity`, using `builder/vocab/amount-specificity.yaml`
- optional evidence-backed or provisional reasoned ranges with `role`, using `builder/vocab/amount-range-role.yaml`
- basis, such as `per 1,000 kg reference product`
- `basis_kind`, using `builder/vocab/basis-kind.yaml`
- `evidence_kind`, using `builder/vocab/evidence-kind.yaml`
- source ids that support non-default quantitative evidence or method formulas

Keep flow identity evidence separate from range evidence. A database flow search can justify the UUID choice, but it does not by itself justify an inventory amount range unless a process row or external source supports that amount.

Flow Set taxonomy is a binding surface, not a flow-card generator. Derive each card from the real inventory concept and
its evidence-supported measurement, calculation, boundary, condition, and validation needs. Do not create one card per
possible Flow Set group. Split a card only when at least one of those needs is independent; otherwise retain one
conditional umbrella card whose actual zero, one, or multiple exchanges are produced from foreground records.

Use this decision order for every inventory row: an applicable reviewed Flow Set, then an exact verified UUID only when no Flow Set covers the exchange, then unmapped coverage. A semantically concrete row cites the narrowest applicable group. A conditional umbrella row may cite the set id/version without `group`; omission means deferred scope, not a resolved exchange. When present, `group` must be one exact taxonomy id and must not contain alternatives. Both forms use `parameterized`. A final TIDAS process exchange still contains a concrete UUID, so foreground data generation expands a deferred umbrella from actual records and resolves each emitted exchange to one group and UUID. A product output has no product-output Flow Set fallback.

For `flow-set.environmental-emission`, PCR authoring first records a pollutant function and receiving medium, not a UUID. The current taxonomy excludes low-count groups unless a recurring high-importance pollutant requires one; a high-importance group may remain even with no current candidate UUID. Never use a broad VOC, organic-pollutant, NOx/SOx, or particulate label to select a UUID automatically; retain the reported substance/species/basis or particle size as a foreground-data requirement.

After all Process Map flow cards are complete, run a refinement gate only for rows that no applicable existing Flow Set
group covers. A conceptual label such as a co-product, residue, biomass, or recovered material is not enough to close
identity. Split it only along evidence-supported physical or substance identity, flow type, direction, process state or
gate, intended use, and destination, then repeat the platform lookup. If the refined flow matches an exact UUID, bind it
as `fixed`; otherwise retain unmapped coverage. Do not alter the real product boundary, flow type, or direction to force
a match, and do not create a Flow Set or module in this pass. If the refinement reveals a reusable pattern that is not
covered by an existing module, record a module gap for separate forward module design.

Lookup traces are authoring evidence, not PCR content. Keep query strings, result lists, candidate rankings, UUID lookup
failures, tool errors, and timestamps in manifest review metadata or dedicated issue/PR/audit artifacts. Do not copy
them into the canonical bilingual Markdown or generated `structured.yaml`; those files state the final method rule and
coverage requirement only.
