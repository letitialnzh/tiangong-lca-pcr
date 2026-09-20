# Flow Identity Binding Contract

This is the authoritative PCR authoring procedure for Flow Set references and fixed flow UUIDs. Create, update, and
review workflows use this contract rather than defining their own binding order or lookup policy. It governs the
reference product identity and process inventory flow cards; current Flow Sets cover Product-flow inputs only.
The selected versioned registry under `library/flow-sets/` owns its binding levels, groups, and selection constraints.
The [UUID reference contract](tiangong-uuid-reference-contract.md) owns storage rules, and the
[CLI tool note](../tools/tiangong-lca-cli.md) owns command invocation and availability.

## Required Order

Complete the English semantic draft and flow cards → assess applicable Flow Sets → look up uncovered flow identities
→ confirm selected rows and their support references → finalize bilingual Markdown and generate the projection
→ review bindings and validate.

For creation, finish the entire semantic draft and every Process Map flow card before candidate UUID lookup. For an
update, inspect the driving evidence and existing record first. Complete the changed semantic scope before rebinding;
when the process map or inventory changes, complete all its flow cards before binding identity. Unchanged bindings
may retain their existing verification evidence if it still supports the current card. Review uses the same gates and
returns deficient cards to the relevant stage instead of treating a populated UUID as proof of verification.

### 1. Complete Semantic Flow Cards

- Derive cards from product and route evidence, with stable row ids, modelling roles, real flow type and direction,
  physical or substance identity, process state or gate, intended use, destination, property/unit requirements, and
  applicable measurement, calculation, boundary, condition, and validation needs.
- Do not enumerate Flow Set groups to create cards. Split a card only for an independently required inventory,
  measurement, calculation, boundary, condition, or validation need. Otherwise retain a conditional umbrella card
  whose actual zero, one, or multiple exchanges will be determined from foreground records.
- For elementary emissions, establish the pollutant substance and receiving medium before lookup. A broad VOC,
  organic-pollutant, NOx/SOx, or particulate label does not justify automatic UUID selection; retain the reported
  substance/species/basis or particle size as a foreground-data requirement.
- Semantic completion does not require a resolved UUID. Keep unresolved identity fields blank during this stage.

### 2. Assess Flow Set Coverage

- For Product-flow inputs, use an applicable current draft Flow Set as provisional `parameterized` scope before
  considering a fixed UUID. Read the actual registry id, version, binding policy, and constraints; do not infer
  coverage from a similar label or assume a set is uncovered merely because no single group can yet be selected.
- Use only a taxonomy-v2 group eligible for PCR reference. Groups below five candidates are omitted unless marked
  high importance; candidate count is not otherwise a PCR binding rule.
- A group-level binding cites one narrowest applicable exact group id. A set-level binding cites only id/version and
  omits `group`. Never encode multiple alternatives in `group`.
- A conditional umbrella card for a group-only set may omit `group` when foreground records determine the concrete
  exchange scope. This is deferred scope, not completed identity resolution.
- `flow-set.energy-supply` defaults to set-level when foreground records determine the actual carrier. One exact
  group is permitted when the PCR method requires a specific energy function.
- `flow-set.agricultural-nutrient-supply` is set-only. Each process may contain at most one consolidated fertilizer
  and nutrient Product-input card covering mineral fertilizers, organic fertilizers, and nutrient amendments,
  without a group.
- Elementary flows never cite a Flow Set. Product outputs have no product-output Flow Set fallback. Structural
  coordinates such as `product-input`, `product-output`, `elementary-input`, and `elementary-output` are not set ids.
- A draft registry's candidate UUIDs are review evidence, not authorization to choose a UUID automatically. A covered
  PCR card stays `parameterized`; do not attach a fixed UUID alongside its Flow Set reference.

### 3. Look Up Uncovered Identities

For a card without applicable Flow Set coverage, use an exact previously verified identity only if its evidence still
matches the completed card. Otherwise use `search flow` to find candidates from its evidence-supported identity.
This also applies to reference product, product-output, waste, and elementary identities without Flow Set coverage.

Each card requiring candidate search gets one initial lookup and at most one evidence-supported refinement lookup
in the current create or update binding pass. Refine only when the completed card proves too conceptual: use material
or substance identity, flow type, direction, process state or gate, intended use, and destination. Record the evidence
for the refinement outside PCR content. Do not enumerate speculative synonyms or restart the allowance merely by
rerunning the same pass. A later update or revision starts from its explicit driving input and changed scope.

Do not change the real boundary, flow type, or direction to force a match, or create a Flow Set/module during binding.
Record a reusable-pattern module gap for separate forward module design. If lookup remains inconclusive, retain
unmapped coverage rather than continuing candidate searches.

### 4. Confirm Before Recording Fixed UUIDs

- Use `flow get` or the most specific available detail command to confirm a selected candidate. Search ranking,
  name similarity, a copied UUID, or an existing PCR row alone is not identity verification.
- A new fixed-flow match requires exactly one evidence-supported identity. If multiple candidates remain plausible,
  retain unresolved coverage rather than choosing the highest-ranked result.
- Confirm flow type, compatibility with the card's direction and role, property/unit, classification, and applicable
  geography, technology/provider, intended-use, and destination qualifiers. Confirm the referenced flow property and
  unit group from their support rows. Deterministic detail/property/unit-group confirmation is not another
  candidate-flow lookup.
- Use `fixed` only when the exact identity is supported. Record its UUID without a dataset version. If verification
  fails or access is unavailable, retain the semantic flow name, omit binding and UUID, and record the unresolved
  identity in the selected workspace manifest's review metadata. Do not invent an `unmapped` binding enum.
- Keep queries, candidate results, detail-read evidence, refinement reasons, failures, timestamps, and dataset
  versions in dedicated research/audit/issue/PR artifacts or appropriate review metadata, outside bilingual PCR
  Markdown and `structured.yaml`. Never put credentials in those artifacts. Identity evidence does not establish
  quantity ranges; cite non-default quantitative evidence separately.

### 5. Finalize and Project

Finalize `pcr.en-US.md`, align `pcr.zh-CN.md`, and generate `structured.yaml` through `pcr:sync-structured` in the
selected `current` or `revision` workspace. Do not hand-edit the projection. Candidate PCRs may retain unresolved
reference product identity; active and later lifecycle states require a concrete reference product UUID.

A final TIDAS process exchange always resolves to a verified concrete UUID. Foreground generation expands set-level
or deferred group-level cards from actual records and retains the Flow Set version and concrete selection evidence,
including product identity and nutrient composition used in calculations.

### 6. Review Gate

For create, update, and pre-publication review:

1. Match English, Chinese, and projected cards by process, direction, flow type, and row id. Check that cards came
   from modelling requirements before identity binding and were not manufactured by enumerating registry groups.
2. Check every parameterized card against the selected registry's id/version, coverage, permitted binding level,
   group membership, and consolidation rules. Distinguish permitted deferred scope from invalid group expressions.
3. Check every fixed identity against its detail-read and compatibility evidence, including support references;
   check initial/refinement lookup limits for cards searched in this pass. If evidence is missing, return to the
   appropriate stage or record unresolved coverage; do not assert that verification occurred.
4. Check that unresolved identities remain explicitly tracked and that lookup traces did not enter PCR content.
5. Run the workflow's module and Range QA checks, regenerate after any Markdown repairs, and run `npm run validate`.
   Record binding counts, unresolved gaps, and validation results in review artifacts. Passing automated validation
   alone does not prove that every identity lookup or semantic compatibility check was performed.
