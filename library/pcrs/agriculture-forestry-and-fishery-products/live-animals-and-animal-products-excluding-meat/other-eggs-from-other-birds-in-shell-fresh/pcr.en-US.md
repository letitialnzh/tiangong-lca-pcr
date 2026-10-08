---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-eggs-from-other-birds-in-shell-fresh
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fresh non-hatching shell eggs of birds other than hens

## 1. Scope and Applicability

Covers fresh shell-on eggs of birds other than hens handed over for actual non-hatching use at the producer farm gate, including food and documented other unincubated uses; not human table eggs alone. Excludes hen and hatching eggs, broken/liquid/preserved/processed eggs and hatched birds. Managed laying, independent collection and farm-gate transfer are required; on-farm sorting and protective packing apply only when performed. Preserve species and lot-specific mass, count, grade, use, safety, storage time/conditions and actual gate. One kilogram does not imply cross-species nutritional or functional equivalence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-eggs-from-other-birds-in-shell-fresh |
| classification_refs | CPC 3.0: 02322 Other eggs from other birds in shell, fresh |
| covered_products | Fresh other-bird shell eggs with actual non-hatching handover, including food and documented other uses. |
| excluded_products | Hen eggs, hatching eggs, broken/liquid/processed eggs, hatched birds and post-gate processing. |
| representative_product | One measured kilogram of intact fresh other-bird shell eggs at farm gate. |
| production_route | Managed flock laying is the parent; evidenced species and cage/barn/outdoor routes change feed, water, manure, cleaning, breakage and storage inventory and QA. Mutually exclusive flock routes are normalized separately; independent collection and conditional sorting/packing follow. |
| market_state | Fresh, shell-on, non-hatching handover with species, count, mass, grade, safety, packing and gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh non-hatching other-bird eggs in shell at actual producer farm gate. |
| How much | 1 kg measured transferable shell-on mass; retain count and lot-specific mean. |
| How well | Intact, safe and fresh, with species, grade, use and storage condition disclosed. |
| How long or cycle | Declared flock laying and reporting period linked to rearing and exit. |
| reference_flow_link | `reference_eggs` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh non-hatching other-bird shell eggs at farm gate `c533a91e-a111-484e-a6a5-8fb8d3c41363` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/strain; lot count and measured mass; grade, safety and non-hatching use; time/temperature/humidity; packing; actual gate; flock period |

The verified CPC 02322 Product/Mass UUID matches this explicitly farm-gate, shell-on reference and the terminal output. It does not authorize a hen, hatching, processing, count-only, or different-gate exchange.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mass` | reference eggs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh shell-on mass excluding package and reconcile nodes and stocks by species/lot. |
| `count` | conversion of recorded egg counts to measured lot mass | Count plus measured Mass | eggs; kg | Retain count as a separate observed quantity. Use lot measurement or representative sample mean only to derive this lot's mass; no cross-species mean or claim that count itself has Mass property. |
| `feed` | feed | Mass | kg as-fed; kg dry matter | Retain measured conversion and source before combining as-fed/dry-matter feed. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Admitted birds or on-site rearing history, purchased feed, supplied water, energy, health supplies and conditional packaging. |
| starting_condition_role | Managed laying passes through independent collection, conditional sorting/packing and farm-gate transfer. |
| product_classification_scope | CPC 3.0 02322; hen, hatching and processing eggs, spent birds and manure have separate identities. |
| recursive_input_rule | Purchased same-category eggs retain supplier dataset and distinct transfer; do not recreate laying or count as this farm's output. |
| upstream_dataset_requirement | Match birds, feed, water, energy, supplies and packaging upstream datasets by species, state, provider, geography and technology. |
| disclosure | Species, route, flock/phases, node gates, breakage/diversion/waste, storage conditions, co-outputs, shared assets and attribution. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `farm_gate` | all routes | Include laying, independent collection and actual on-farm sorting/packing to producer farm gate; exclude downstream incubation, processing and distribution. | `fao-codex-eggs`; `fao-leap-poultry` |
| `route_delta` | species/housing route | Relative to managed laying parent, evidence flock-specific feed, water, bedding/manure, cleaning, energy and storage inventory and QA deltas. | `fao-codex-eggs`; `fao-leap-poultry` |
| `collection` | newly laid eggs | Count, weigh and record breakage across independent collection; internal transfer is not final sale. | `fao-codex-eggs`; `fao-leap-poultry` |
| `conditional` | sorting/packing | Sorting needs at least two real destinations and handovers; packing needs material, reuse and pre/post protected state. | `fao-codex-eggs`; `fao-leap-poultry` |
| `period_assets` | flocks/shared assets | Attribute rearing, laying, exit and shared housing/collection/sorting assets by node/period; count source burdens once. | `fao-codex-eggs`; `fao-leap-poultry` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `laying` | Managed laying | required | All covered routes. | Independently record states, losses and handover. | kg shell-on eggs and count. |
| `collection` | Independent egg collection | required | All covered routes. | Independently record states, losses and handover. | kg shell-on eggs and count. |
| `sorting` | Producer-side use sorting | conditional | Only if actually performed on farm. | Independently record states, losses and handover. | kg shell-on eggs and count. |
| `packing` | Producer-side protective packing | conditional | Only if actually performed on farm. | Independently record states, losses and handover. | kg shell-on eggs and count. |
| `handover` | Farm-gate transfer | required | All covered routes. | Independently record states, losses and handover. | kg shell-on eggs and count. |

### Process: Managed laying (`laying`)

#### Inputs

##### Product flows

###### Admitted layer birds (`birds`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Admitted layer birds
- Flow property / unit: Mass / kg live mass
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flock`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed and supplements (`feed`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Feed and supplements
- Flow property / unit: Mass / kg as-fed
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water (`water`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Supplied water
- Flow property / unit: Volume / L
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Housing energy carriers (`energy`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Housing energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed exchange; verify any actual exchange.

##### Elementary flows

No prescribed exchange; verify any actual exchange.

#### Outputs

##### Product flows

###### Newly laid shell eggs (`laid_eggs`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Newly laid shell eggs
- Flow property / unit: Mass / kg; count retained
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lots`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold spent birds (`spent_birds`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Independently sold spent birds
- Flow property / unit: Mass / kg live mass
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flock`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Manure not independently sold (`manure`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Manure not independently sold
- Flow property / unit: Mass / kg wet; N retained
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed exchange; verify any actual exchange.

### Process: Independent egg collection (`collection`)

#### Inputs

##### Product flows

###### Eggs received from laying (`collect_in`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Eggs received from laying
- Flow property / unit: Mass / kg shell-on
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lots`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed exchange; verify any actual exchange.

##### Elementary flows

No prescribed exchange; verify any actual exchange.

#### Outputs

##### Product flows

###### Intact collected eggs (`collected`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Intact collected eggs
- Flow property / unit: Mass / kg shell-on
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lots`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Broken or unsafe collection eggs (`broken`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Broken or unsafe collection eggs
- Flow property / unit: Mass / kg
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lots`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed exchange; verify any actual exchange.

### Process: Producer-side use sorting (`sorting`)

#### Inputs

##### Product flows

###### Intact eggs entering sorting (`sort_in`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Intact eggs entering sorting
- Flow property / unit: Mass / kg shell-on
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed exchange; verify any actual exchange.

##### Elementary flows

No prescribed exchange; verify any actual exchange.

#### Outputs

##### Product flows

###### Accepted non-hatching eggs (`accepted`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Accepted non-hatching eggs
- Flow property / unit: Mass / kg shell-on
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently accepted diverted eggs (`diverted`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Independently accepted diverted eggs
- Flow property / unit: Mass / kg shell-on
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unsafe unaccepted egg rejects (`rejects`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Unsafe unaccepted egg rejects
- Flow property / unit: Mass / kg
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed exchange; verify any actual exchange.

### Process: Producer-side protective packing (`packing`)

#### Inputs

##### Product flows

###### Accepted eggs entering packing (`pack_in`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Accepted eggs entering packing
- Flow property / unit: Mass / kg shell-on
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective packaging materials (`package`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Protective packaging materials
- Flow property / unit: Mass or count / kg or pieces
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed exchange; verify any actual exchange.

##### Elementary flows

No prescribed exchange; verify any actual exchange.

#### Outputs

##### Product flows

###### Protected eggs after packing (`protected`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Protected eggs after packing
- Flow property / unit: Mass / kg shell-on
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed exchange; verify any actual exchange.

##### Elementary flows

No prescribed exchange; verify any actual exchange.

### Process: Farm-gate transfer (`handover`)

#### Inputs

##### Product flows

###### Eggs received for farm-gate transfer (`handover_in`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

- Selected flow: Eggs received for farm-gate transfer
- Flow property / unit: Mass / kg shell-on
- Amount rule: Measure actual species, lot and node; reconcile adjacent nodes and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate`
- Sources: `fao-codex-eggs`
- Range: Provisional replaceable broad screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: not a compliance limit; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed exchange; verify any actual exchange.

##### Elementary flows

No prescribed exchange; verify any actual exchange.

#### Outputs

##### Product flows

###### Fresh non-hatching other-bird eggs at farm gate (`reference_eggs`)

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.

Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

Raw reference-output records: Measure transferred fresh shell-on mass, normalize to 1 kg and retain count. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

- Selected flow: Fresh non-hatching other-bird eggs at farm gate `c533a91e-a111-484e-a6a5-8fb8d3c41363`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Sources: `fao-codex-eggs`
- Range: Reference normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference
  - Basis: measured reference output divided by itself
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-poultry`

##### Waste flows

No prescribed exchange; verify any actual exchange.

##### Elementary flows

No prescribed exchange; verify any actual exchange.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `cooutputs` | eggs, spent birds and sold manure | Directly assign separable activities. For evidenced independent co-outputs use measured physical causality; otherwise contemporaneous farm-gate economic shares with sensitivity. Waste receives no product share. | `fao-codex-eggs`; `fao-leap-poultry` |
| `period` | rearing/laying/exit | Assign admission/rearing burden once across actual laying service and reconcile opening/closing flock stock. | `fao-codex-eggs`; `fao-leap-poultry` |
| `shared` | housing/collection/sorting/packing assets | Record every consuming node and period; allocate by measured occupancy, hours or throughput, with shares summing to source total. | `fao-codex-eggs`; `fao-leap-poultry` |
| `grade` | accepted, diverted and rejected | Count each state at one handover only; hatching diversion needs suitability, processing diversion lawful acceptance, otherwise loss or waste. | `fao-codex-eggs`; `fao-leap-poultry` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock` | `laying` | flock entry/exit and transfer | source ledger | flock entry/exit and transfer | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed` | `laying` | feed and dry matter | source ledger | feed and dry matter | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utilities` | `laying` | water and energy | source ledger | water and energy | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | `laying` | manure mass, N and fate | source ledger | manure mass, N and fate | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_lots` | `collection` | lot count, mass and broken eggs | source ledger | lot count, mass and broken eggs | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_sort` | `sorting` | accepted, diverted and rejected grade mass | source ledger | accepted, diverted and rejected grade mass | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_pack` | `packing` | package material and reuse | source ledger | package material and reuse | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_gate` | `handover` | species, use, count, mass and gate | source ledger | species, use, count, mass and gate | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `balance` | egg nodes | Input = accepted + diverted + rejected + stock change within measurement uncertainty. | lot mass and stock | reconciled kg | `fao-codex-eggs` |
| `normalization` | inventory | Divide actual flock/period totals by measured transferred fresh shell-egg kg in same scope. | period totals and transfer mass | per-kg inventory | `fao-leap-poultry` |
| `asset` | shared assets | Allocated totals from measured service drivers must equal original burden. | asset total and node use | once-attributed burden | `fao-leap-poultry` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | reference eggs | Prove non-hen, fresh shell-on, actual non-hatching use and producer gate. | lot transfer ticket |
| `coverage` | nodes | Required nodes complete; activate conditional nodes only from actual operations. | operation log |
| `balance` | eggs/losses | Reconcile count, mass, grade, rejects and stock at each node. | scale and sorting ledger |
| `shared` | periods/assets | Retain flock, period, route and shared-use evidence without duplication. | primary activity record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity_gate` | reference eggs | Require non-hen, fresh shell-on, measured 1 kg, actual non-hatching use and true producer gate; non-food unincubated use remains eligible. | `fao-codex-eggs` |
| `route_gate` | nodes | Laying and independent collection required, sorting/packing evidence-based; species and housing differences change inventory or QA. | `fao-codex-eggs`; `fao-leap-poultry` |
| `grade_gate` | grades | Sorting has at least two real destinations; hatching/processing diversions need suitability and lawful acceptance; broken eggs cannot be reference. | `fao-codex-eggs` |
| `attribution_gate` | co-outputs/periods/assets | Verify each handover, service period and allocated total without node/period duplication. | `fao-leap-poultry` |
| `uuid_gate` | concrete downstream exchanges | Verify each UUID, property and unit before downstream TIDAS process; do not force blanks. | `fao-leap-poultry` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Producer foreground package for fresh non-hatching other-bird shell eggs. |
| downstream_use | `secondary_dataset` or `background_dataset` after review and concrete exchange resolution. |
| allowed_use | Fresh shell eggs with species, route, non-hatching handover and measured mass. |
| excluded_use | Hen, hatching/processed eggs, post-gate activities and cross-species equivalence claims. |
| required_metadata | Species, flock, period, route, nodes, use, grade, count/mass, storage, packing, co-products and attribution. |
| required_quality_disclosure | Node balance, provisional Ranges, unresolved identities, species/route and attribution uncertainty. |
| update_trigger | Changed product boundary, use, route, node, attribution or verified identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-codex-eggs` | official_guidance | FAO/WHO Codex, Code of Hygienic Practice for Eggs and Egg Products, https://www.fao.org/4/i1111e/i1111e.pdf | Fresh egg safety, collection, breakage, diversion and time/temperature/humidity handling. |
| `fao-leap-poultry` | official_guidance | FAO LEAP, Greenhouse gas emissions and fossil energy use from poultry supply chains (2016), https://openknowledge.fao.org/handle/20.500.14283/i6421en | Poultry route, period and joint-burden framework; species-specific quantities still need measurement. |
