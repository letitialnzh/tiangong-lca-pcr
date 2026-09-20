# Agricultural Nutrient Supply 0.3.0 Review Report

## Decision

`flow-set.agricultural-nutrient-supply` is a set-level PCR binding. PCR Flow Cards cite the set id and version without a group.

Each foreground process may contain at most one Product-flow card for mineral fertilizers, organic fertilizers, and nutrient-bearing amendments. The card preserves the actual product identity, quantity, formulation, nutrient composition, application event, and allocation. Compound and organic products are recorded once. Foreground data generation expands those records and resolves every emitted product exchange to one verified UUID.

## Internal groups

The existing nitrogen, phosphorus, potassium, and organic-nutrient groups remain internal candidate-review partitions. They support registry maintenance and downstream concrete-product resolution. They do not define PCR cards and must not appear in PCR `flow_set_ref.group` fields.

## Migration

- Previous set version: `0.2.0`
- Proposed set version: `0.3.0`
- Previous PCR binding: group-level
- Current PCR binding: set-level
- Affected PCRs: 109
- Fertilizer cards before consolidation: 237
- Process-level cards after consolidation: 123
- Previously unbound fertilizer cards added to the set: 49
- Mixed fertilizer and crop-protection cards split before binding: 2

The migration preserves the original nutrient-specific ranges as multiple Range entries under the consolidated process card. Crop-protection records remain separate and are not bound to the nutrient set.

## Review checks

- No agricultural nutrient PCR reference may carry a group.
- Every agricultural nutrient PCR reference uses version `0.3.0`.
- Each process has no more than one agricultural nutrient set reference.
- English and Chinese card identifiers and ordered Range entries are aligned, except that the existing condensed Chinese kiwi rendering carries the aligned consolidated binding in its Flow Card binding table.
- Structured projections are regenerated from canonical English Markdown.
- Final process exchanges still require verified platform UUIDs.
