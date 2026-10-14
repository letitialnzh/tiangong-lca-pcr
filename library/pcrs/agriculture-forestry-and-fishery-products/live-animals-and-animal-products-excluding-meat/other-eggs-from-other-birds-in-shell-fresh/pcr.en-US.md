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
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

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
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
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

###### Electricity at the equipment supply point (`energy_electricity`)

**Collection scope and applicability for energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.
Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Electricity at the equipment supply point
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_utilities` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fao-codex-eggs`; `fao-agricultural-energy`

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

###### Manure biogenic methane to air (`review_laying_manure_ch4`)

Calculate actual atmospheric release by manure system, climate, residence time and volatile-solids activity. Reconcile captured, destroyed or oxidised methane; produced methane is not automatically emitted methane. Applies only to the operated `laying` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Methane, biogenic, to air (UUID unresolved)
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Direct manure nitrous oxide to air (`review_laying_direct_n2o`)

Use the actual manure-management nitrogen pathway. Keep storage/treatment distinct from field application and grazing deposition, which require a managed-soil method and an explicitly assigned inventory responsibility. Applies only to the operated `laying` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Indirect manure nitrogen-derived nitrous oxide to air (`review_laying_indirect_n2o`)

Calculate attributable indirect N2O from documented manure N volatilisation/deposition and leaching/runoff pathways where applicable. Keep separate from direct N2O and reconcile any nitrogen-fate calculation already included downstream or in the chosen background/impact model. Applies only to the operated `laying` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Manure ammonia to air (`review_laying_nh3`)

Use actual species, housing/storage conditions and a justified nitrogen-flow method. Track total N and ammoniacal N by stage; a generic volatilised-N estimate is not automatically NH3 because it may include other nitrogen species. Applies only to the operated `laying` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Ammonia to air (UUID unresolved)
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-eea-manure-2023`

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

###### Moulded wood-pulp egg tray (`package_pulp_tray`)

**Collection scope and applicability for package.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record physical identity and destination by species, lot and actual node; do not infer another state from a name.
Denominator and scope requirements：per kg farm-gate transferred fresh non-hatching other-bird eggs

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Moulded wood-pulp egg tray
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_pack` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `fao-codex-eggs`; `fao-egg-packaging`

###### Corrugated fibreboard box (`package_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_pack` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `fao-codex-eggs`; `fao-package-identities`

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

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock` | `laying` | flock entry/exit and transfer | source ledger | flock entry/exit and transfer | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed` | `laying` | feed and dry matter | source ledger | feed and dry matter | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utilities` | `laying` | water and energy | source ledger | water and energy | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | `laying` | manure mass, N and fate | source ledger | manure mass, N and fate | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_lots` | `collection` | lot count, mass and broken eggs | source ledger | lot count, mass and broken eggs | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_sort` | `sorting` | accepted, diverted and rejected grade mass | source ledger | accepted, diverted and rejected grade mass | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_pack` | `packing` | package material and reuse | source ledger | package material and reuse | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_gate` | `handover` | species, use, count, mass and gate | source ledger | species, use, count, mass and gate | ledger, calibrated scale, meters and transfer tickets; Raw aggregation requirements: aggregate by species, flock, node and period, divide by measured reference kg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; count; use-specific | each lot/month | full reporting period | producer farm | per reference flow | dated ticket, calibration and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_pathway_emissions` | `laying` | pathway-specific gases and manure N/C | herd, feed, manure, field and method ledger | species/class; animal-days; intake/DM/digestibility; volatile solids; manure N/TAN; system shares; climate; storage time; fertiliser N; grazing; volatilisation/leaching; methane recovery; factor source/unit; final accepted output ; collected manure wet mass; dry matter; destination| collect primary activity by node and period, document parameter applicability, retain each pathway worksheet and any linked treatment/pasture dataset  Retain raw totals and normalize attributed quantities once to the measured accepted final reference output.| animal-day; kg DM; kg VS; kg N; kg CH4; kg N2O; kg NH3 | each operating period and management change | complete represented cohort and service period | actual operated nodes only | per reference flow | meter/analysis records, nitrogen cascade, method and factor evidence, no-duplication ledger |
| `cp_feed_supply_and_intake` | `laying` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `laying` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `balance` | egg nodes | Input = accepted + diverted + rejected + stock change within measurement uncertainty. | lot mass and stock | reconciled kg | `fao-codex-eggs` |
| `normalization` | inventory | Divide actual flock/period totals by measured transferred fresh shell-egg kg in same scope. | period totals and transfer mass | per-kg inventory | `fao-leap-poultry` |
| `asset` | shared assets | Allocated totals from measured service drivers must equal original burden. | asset total and node use | once-attributed burden | `fao-leap-poultry` |
| `calc_pathway_emissions` | `laying` | Use species- and management-compatible methods and retain disaggregated pathway totals. Convert N2O-N to N2O by 44/28 and NH3-N to NH3 by 17/14 exactly once; already molecular masses are not reconverted. Check methane against the documented available-carbon/methane-potential balance and nitrogen losses against each stage's available N. Indirect formation from previously volatilised N is a downstream transformation, not a second source-stage N loss. Attribute and normalize once; do not duplicate linked treatment or fate-model emissions.  Use matched raw-period quantities before allocation for physical screens: CH4 mass × 12/16 must not exceed the carbon available to the represented pathway; source-stage NH3 mass × 14/17 plus direct N2O mass × 28/44 and other source N losses must not exceed that stage's available N, after accounting for stocks and transfers. Bound each indirect N2O-N calculation by its documented volatilised or leached N precursor, not by subtracting that downstream transformation again from the source ledger. These are conservation checks, not emission factors or an empirical per-product range.| `cp_pathway_emissions` | kg named compound per final reference flow | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `review_laying_direct_n2o`; `review_laying_indirect_n2o` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

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
| `v_pathway_emission_coverage` | `laying` | Require a pathway coverage ledger for enteric CH4 where biologically applicable, manure CH4, direct/indirect N2O, NH3 and relevant field emissions. Every pathway needs a measured/calculated value, a named linked process with matching coverage, or supported inapplicability; absent data cannot become zero. Keep wild life before capture outside managed husbandry, assess actual managed holding separately, and retain species-specific evidence. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

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
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | Species and pathway applicability; CH4 and N2O method selection, not universal emission factors |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 nitrogen-flow method; verify actual species, management and geographical applicability before adopting parameters |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Managed-soil direct and indirect nitrogen pathways and boundary reconciliation |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed supply versus intake and waste burden, not animal parameters. Applying this accounting principle to the declared taxon is this PCR's methodological choice; no pig diet or emission factor is transferred. |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-egg-packaging` | official_guidance | FAO Egg packaging, transport and storage, https://www.fao.org/4/Y4628E/y4628e05.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
