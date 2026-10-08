---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-hen-eggs-in-shell-fresh
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fresh non-hatching hen eggs in shell at farm gate

## 1. Scope and Applicability

This PCR covers fresh, shell-on hen eggs for uses other than hatching at producing farm-gate handover, normalized to 1 kg saleable shell-on egg mass. Managed laying, layer replacement, feeding, water, housing, manure and independent egg collection are included. Farm grading and primary packing are separate conditional activities only when actually performed before handover. External grading and packing plants, post-farm transport, breaking, pasteurization and further processing are excluded.

Hatching eggs, eggs of other birds and shell-less egg products are excluded. Spent hens and exported manure are co-products only upon evidenced independent transfer. Cracked or spoiled eggs are losses or waste unless independently sold in a separately declared product state.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-hen-eggs-in-shell-fresh |
| classification_refs | CPC 3.0: 02312 Other hen eggs in shell, fresh |
| covered_products | Fresh non-hatching hen eggs retaining shells at the producing farm gate, ungraded or farm graded and packed. |
| excluded_products | Hatching eggs; eggs from other birds; shell-less or processed eggs; downstream plant grading, packing and distribution. |
| representative_product | Saleable fresh table hen eggs in shell at farm-gate handover. |
| production_route | Parent managed biological production of layers. Cage, barn, free-range and other evidenced laying systems are mutually exclusive cohort routes with different housing, feed, litter, manure, energy and data requirements. Independent collection is required; on-farm grading and packing are conditional. |
| market_state | Fresh, shell-on, non-hatching, with grade, count, mass, collection/storage and packing state declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh non-hatching hen eggs in shell at the producing farm gate. |
| How much | 1 kg saleable shell-on egg mass, with egg count retained. |
| How well | Intact shell and fresh state; grade or ungraded state, breakage rule, storage and packing state declared. |
| How long or cycle | One declared flock cohort and reporting period, linking replacement and laying burdens to represented output. |
| reference_flow_link | `saleable_shell_eggs` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh non-hatching hen eggs in shell at producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | layer cohort; non-hatching use; fresh shell-on state; measured mass and count; grade; breakage treatment; collection and storage state; farm packing state; handover point; period |

The broad reference UUID remains blank. The CPC 02312 platform candidate is a consumption mix without confirmed fresh shell-on state or producing farm gate; the CPC 02311 hatching-egg candidate is outside scope.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `saleable_egg_mass` | reference eggs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh saleable shell-on eggs at handover and reconcile collected, graded, rejected and stored mass. |
| `egg_count_conversion` | egg counts | Mass | kg | Retain count and measured mass by lot; convert counts only using measured or sampled lot-specific mean mass. |
| `feed_dry_matter` | feed | Mass | kg as fed and kg dry matter | Retain source-specific dry-matter evidence before adding wet and dry feed. |
| `gas_species_basis` | manure gases | Mass | kg N2O, kg NH3 or nitrogen basis | Preserve molecule and N basis and document any conversion. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Admitted replacement pullets or allocated on-site rearing history, feed, supplied water, energy, bedding and health products entering the producing farm. |
| starting_condition_role | Inputs support managed laying; eggs pass to independent collection, optionally on-farm grading and packing, ending at farm-gate handover. |
| product_classification_scope | CPC 3.0 02312 fresh non-hatching shell-on hen eggs; hatching eggs, other birds, spent hens and manure are separate product or waste states. |
| recursive_input_rule | Purchased shell eggs entering the farm retain their supplier dataset and distinct transfer; do not recreate upstream laying or count them as this farm's production. |
| upstream_dataset_requirement | Use state- and provider-matched datasets for purchased pullets, feed, water, energy, bedding, health products and packaging; resolve actual Product exchanges during foreground generation. |
| disclosure | Declare housing route, cohort/phase, replacement attribution, grade states, collection loss, conditional farm grading/packing, storage, spent hen and manure handovers, shared assets, geography and farm gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `layer_farm_boundary` | all routes | Include managed laying, replacement, feed, water, housing, manure, direct emissions and egg collection through farm-gate handover; exclude external grading/packing plants and distribution. | `fao-leap-poultry-2016`; `fao-small-poultry-production` |
| `route_delta` | cage, barn, free-range and evidenced variants | Declare parent managed biological production and route-specific housing, outdoor access, feed, litter/manure, energy, calculation and QA differences. Keep mutually exclusive cohorts separate until normalized. | `fao-leap-poultry-2016`; `ipcc-2019-livestock-manure` |
| `collection_handover` | eggs leaving laying area | Independently count, weigh and hand over shell eggs from layer production to collection; reconcile intact output and loss before grading or sale. | `fao-small-poultry-production` |
| `conditional_grading_packing` | farm grading or packing | Activate grading only with at least two declared grade/destination states and record each handover; activate packing only with actual farm material, reuse and product-state records. External facilities are out of scope. | `fao-small-poultry-production` |
| `period_shared_assets` | replacement and shared services | Link pullet rearing, laying, flock exit, housing, collection and optional grading/packing assets to consuming nodes and periods, counting each burden once. | `fao-leap-poultry-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `layer_husbandry` | Managed layer production | required | Every route. | Produce newly laid eggs with feed, manure, spent-hen, phase and shared-asset responsibilities. | kg laid eggs per cohort and period. |
| `egg_collection` | Farm egg collection | required | Every route. | Independently collect, count and weigh eggs; record breakage and handover. | kg collected intact eggs. |
| `farm_grading` | Farm egg grading and sorting | conditional | Only if farm assigns grade or destination before handover. | Split collected eggs into grades, downgraded states and rejects. | kg incoming and each output state. |
| `farm_packing` | Farm egg packing and presentation | conditional | Only if farm packs eggs before handover. | Protect eggs using recorded package materials and reuse; exclude external plant and distribution. | kg packed eggs and material. |
| `farm_gate_handover` | Farm-gate egg handover | required | Every covered route after collection and any active farm grading or packing. | Verify fresh shell-on saleable state and transfer measured reference eggs. | 1 kg saleable shell-on eggs. |

### Process: Managed layer production (`layer_husbandry`)

#### Inputs

##### Product flows

###### Replacement pullets (`replacement_pullets`)

Externally acquired replacement pullets or on-site rearing burden, allocated once across their laying service.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Replacement laying hens or pullets (UUID unresolved)
- Flow property / unit: Mass / kg live mass; head count retained
- Amount rule: Assign admitted or reared bird burden over the actual represented laying service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_flock_events`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg bird/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Layer feed and supplements (`layer_feed`)

Record diets by feed identity, source and biological phase; final exchanges remain feed-specific.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Layer feed and supplements (UUID unresolved)
- Flow property / unit: Mass / kg as fed and kg dry matter
- Amount rule: Sum purchased and grown feed less documented stock changes and refusals.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 15
  - Unit: kg feed/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied drinking and cleaning water (`supplied_water`)

Record managed water supply by use; rainfall is not automatically a Product input.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Supplied water for layer production
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Sum metered or evidenced supplied water by use and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Sources: `fao-leap-water-livestock-2019`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 100
  - Unit: L/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Farm energy supply (`farm_energy`)

Record actual electricity, fuel or heat carriers for lighting, ventilation, watering and manure handling.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Energy carriers and utilities
- Flow property / unit: Energy or carrier-specific property / MJ, kWh or carrier unit
- Amount rule: Record each carrier and use separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

##### Elementary flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

#### Outputs

##### Product flows

###### Newly laid shell eggs (`laid_shell_eggs`)

Internal output from managed layers to the independent collection node; not yet the saleable reference.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Newly laid hen eggs in shell (UUID unresolved)
- Flow property / unit: Mass / kg shell-on; count retained
- Amount rule: Reconcile gross laid mass to collected eggs and documented loss.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eggs_collection`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg laid/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spent hens transferred alive (`spent_hens`)

Treat as a co-product only upon documented independent farm-gate transfer.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Spent laying hens alive (UUID unresolved)
- Flow property / unit: Mass / kg live weight; head count retained
- Amount rule: Measure transferred live mass by cohort.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flock_events`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg hen/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Exported poultry manure (`exported_manure`)

Product only upon documented transfer for another use; otherwise route as waste or on-farm treatment.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Exported poultry manure (UUID unresolved)
- Flow property / unit: Mass / kg wet mass and dry matter
- Amount rule: Measure exported mass, moisture and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_emissions`
- Sources: `fao-leap-nutrients-2018`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg wet manure/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mortality and discarded manure (`biological_waste`)

Record carcasses and manure disposed as waste by actual state and destination, separately from exported product.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Poultry mortality and manure waste (UUID unresolved)
- Flow property / unit: Mass / kg wet mass
- Amount rule: Sum documented waste transfers by treatment pathway.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_emissions`
- Sources: `fao-leap-nutrients-2018`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg wet waste/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Manure nitrous oxide to air (`manure_n2o`)

Model the direct manure pathway and preserve N2O versus N2O-N basis.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: Calculate from manure nitrogen and pathway-specific method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_emissions`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg N2O/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure ammonia to air (`manure_nh3`)

Record manure ammonia with correct substance and nitrogen-basis conversion.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: Calculate from recorded manure pathway and nitrogen flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_emissions`
- Sources: `fao-leap-nutrients-2018`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg NH3/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Farm egg collection (`egg_collection`)

#### Inputs

##### Product flows

###### Newly laid eggs received (`laid_eggs_received`)

Internal transfer from laying with collection time, count and shell mass.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Newly laid hen eggs in shell (UUID unresolved)
- Flow property / unit: Mass / kg shell-on; count retained
- Amount rule: Reconcile mass received with intact collection and losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs_collection`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg received/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

##### Elementary flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

#### Outputs

##### Product flows

###### Collected intact shell eggs (`collected_intact_eggs`)

Hand off to farm grading, packing or direct sale according to actual route.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Collected intact fresh hen eggs in shell (UUID unresolved)
- Flow property / unit: Mass / kg shell-on; count retained
- Amount rule: Weigh collected intact eggs and reconcile breakage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs_collection`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg collected/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Collection egg rejects (`collection_rejects`)

Unsaleable broken or spoiled eggs are waste by actual destination; independently sold processing eggs are not this row.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Broken or spoiled eggs for waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Document reject mass and reconcile collection records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eggs_collection`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

### Process: Farm egg grading and sorting (`farm_grading`)

#### Inputs

##### Product flows

###### Eggs entering farm grading (`grading_input_eggs`)

Activate only when the producing farm actually assigns grades or destinations.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Collected intact fresh hen eggs in shell (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Record incoming grade-lot count and mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_packing`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg incoming/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

##### Elementary flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

#### Outputs

##### Product flows

###### Saleable graded shell eggs (`graded_saleable_eggs`)

Record each accepted grade and its handover; preserve separate grade states before aggregation.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Farm-graded fresh hen eggs in shell (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Sum accepted grade masses and reconcile with incoming mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_packing`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg grade/kg incoming eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded eggs transferred (`downgraded_eggs`)

An independently sold lower grade or processing-bound egg has its own state and destination.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Downgraded hen eggs by market state (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure each independently transferred grade and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_packing`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg downgraded/kg incoming eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading rejects (`grading_rejects`)

Broken or spoiled eggs not independently sold are waste with a declared treatment destination.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Rejected eggs from grading (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Balance incoming eggs against grades, downgraded output, rejects and stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_packing`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg incoming eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

### Process: Farm egg packing and presentation (`farm_packing`)

#### Inputs

##### Product flows

###### Eggs entering farm packing (`packing_input_eggs`)

Record intact unprotected eggs from collection or farm grading, only if packing happens on farm.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Intact fresh hen eggs for farm packing (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Record incoming mass by grade and packing lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_packing`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg incoming/kg saleable eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Egg packaging materials (`egg_packaging`)

Record actual trays, cartons, films or other protection, new material, reuse turns and losses.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Packaging materials for farm-packed eggs
- Flow property / unit: Mass / kg; item count and reuse turns
- Amount rule: Calculate net new packaging by material and reuse cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_packing`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg new packaging/kg packed eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

##### Elementary flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

#### Outputs

##### Product flows

###### Packed intact fresh shell eggs (`packed_shell_eggs`)

The farm packing node hands protected intact eggs to final farm-gate handover. This node exists only when actual farm packing occurs.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Packed fresh hen eggs in shell (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg shell-on
- Amount rule: Weigh intact packed eggs as they leave the packing node; retain count, grade and packaging state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_packing`
- Sources: `fao-small-poultry-production`
- Range: Provisional packed-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: broad replaceable packing yield screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Packing rejects (`packing_rejects`)

Record egg breakage and damaged one-way packaging separately by actual waste destination.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Packing rejects by actual waste identity (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Reconcile incoming eggs and material to packed output, waste and reusable stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_packing`
- Sources: `fao-small-poultry-production`
- Range: Provisional, replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg packed eggs
  - Basis: broad initial screen; replace with reviewed route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

### Process: Farm-gate egg handover (`farm_gate_handover`)

#### Inputs

##### Product flows

###### Intact eggs received for handover (`handover_input_eggs`)

Receive intact eggs from collection, farm grading, or farm packing according to the actual route; preserve grade and packaging state.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

- Selected flow: Intact fresh hen eggs in shell for farm-gate transfer (UUID unresolved)
- Flow property / unit: Mass / kg shell-on; count retained
- Amount rule: Record incoming intact egg count and mass by prior node, grade and packing state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_farm_gate_handover`
- Sources: `fao-small-poultry-production`
- Range: Provisional incoming-handover screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg incoming/kg saleable eggs
  - Basis: broad replaceable loss and stock screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

##### Elementary flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

#### Outputs

##### Product flows

###### Saleable fresh shell eggs at farm gate (`saleable_shell_eggs`)

Final boundary output after actual route; if no packing occurs, handover directly from collection or grading without fabricating a packing node.

Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

Raw reference-output records: Weigh saleable eggs at handover and retain count, grade and packing state. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

- Selected flow: Fresh non-hatching hen eggs in shell at producing farm gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_farm_gate_handover`
- Sources: `fao-small-poultry-production`
- Range: Reference normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: saleable shell mass normalized to itself
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-poultry-2016`


##### Waste flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

##### Elementary flows

No prescribed flow in this coordinate; record actual site-specific exchanges when evidenced.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `egg_output_precedence` | shell eggs, spent hens, exported manure | Assign separable activities directly. For residual inseparable burdens shared by independently transferred outputs, prefer evidenced physical causality; if unavailable, use period-matched farm-gate economic allocation with shares and sensitivity disclosed. Waste and loss receive no product share. | `fao-leap-poultry-2016`; `fao-leap-nutrients-2018` |
| `replacement_period` | rearing and laying cohorts | Spread replacement burden over actual represented laying service and output; reconcile start/end flock stocks and avoid repeating purchased-pullet and on-site rearing burdens. | `fao-leap-poultry-2016` |
| `shared_asset` | housing, collection and optional equipment | Allocate buildings and services to consuming nodes, cohorts and periods by metered use, operating time or throughput; record driver and service period; count once. | `fao-leap-poultry-2016` |
| `grade_loss` | graded and rejected eggs | Preserve each independent grade/destination handover. Aggregate same-category saleable eggs only after grade metadata is retained; processing-bound products and waste remain separate. | `fao-small-poultry-production` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock_events` | `layer_husbandry` | pullets and spent hens | flock and transfer log | cohort, route, entry/exit date, count, mass, purpose, destination | registers and calibrated lot scale; Raw aggregation requirements: assign events to laying service and saleable egg mass. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each entry/exit | full represented cohort | producing farm | per reference flow | dated log and scale calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed` | `layer_husbandry` | diets | deliveries and inventory | feed source, as-fed mass, dry matter, phase, refusal and stock | invoices, bins and feed log; Raw aggregation requirements: net feed by phase per kg saleable eggs. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg as fed; kg dry | delivery and monthly | full cohort | producing farm | per reference flow | invoice and inventory reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_water_energy` | `layer_husbandry` | water and energy | meters and invoices | source, use, carrier, quantity, unit, period and shared-meter driver | meter and purchase log; Raw aggregation requirements: assign by use, retaining carriers separately. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | m3; kWh; MJ | monthly | full cohort | producing farm | per reference flow | meter and invoice; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure_emissions` | `layer_husbandry` | manure, mortality, gases | manure and nitrogen log | N input, manure mass/moisture, storage, handling, transfer, mortality, pathway and factor | farm log, samples and pathway method; Raw aggregation requirements: pathway calculation and transfer normalization. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg wet; kg dry; kg N; kg gas | monthly and each transfer | full cohort | producing farm | per reference flow | sample, transfer receipt and method version; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_eggs_collection` | `egg_collection` | eggs and losses | collection and handover ledger | date, cohort, count, laid/collected/saleable mass, broken eggs, storage | daily count, calibrated lot scale and handover ticket; Raw aggregation requirements: reconcile each active node and normalize to 1 kg saleable eggs. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | eggs; kg | every collection/handover | full represented period | producing farm | per reference flow | count sheets, scale and rejection log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_farm_gate_handover` | `farm_gate_handover` | final reference eggs | farm transfer ledger | source node, cohort, lot, grade, fresh shell-on state, count, mass, packing, storage, date and recipient | calibrated lot scale and transfer ticket; Raw aggregation requirements: sum measured saleable mass by lot and reconcile to upstream active node. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | eggs; kg | each farm-gate transfer | full represented reporting period | producing farm gate | per reference flow | signed transfer record, scale and lot trace; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_grading_packing` | `farm_grading`; `farm_packing` | conditional grades and packages | lot and material ledger | incoming count/mass, grade, destination, rejects, package type/mass/count/reuse | sorting log and material issue/return; Raw aggregation requirements: reconcile each grade and package stock. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | eggs; kg; packages | each active lot | periods when nodes operate | producing farm | per reference flow | lot trace, receipts and rejects; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `egg_balance` | each active node | Incoming shell-egg mass equals accepted output plus downgraded output plus rejects plus measured stock change within declared uncertainty. | lot mass, grade, rejects and inventory | reconciled kg saleable eggs | `fao-small-poultry-production` |
| `normalize_reference` | inventory | Divide cohort/period amounts by kg saleable shell-on eggs actually handed over at producing farm gate. | period totals and saleable mass | amount per 1 kg reference | `fao-leap-poultry-2016` |
| `manure_gases` | manure pathways | Apply pathway-specific official method to collected manure N; preserve kg N2O versus N2O-N and kg NH3 versus NH3-N. | flock, N, pathway and factor | gas mass by substance | `ipcc-2019-livestock-manure`; `fao-leap-nutrients-2018` |
| `period_assets` | replacement and shared assets | Allocate observed rearing and asset burdens across consuming periods/nodes with evidenced service driver; allocated total equals source total. | flock events, service periods and node use | assigned burdens | `fao-leap-poultry-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `reference_identity` | reference eggs | Prove fresh shell-on non-hatching state and producing farm-gate handover; consumption mix or hatching egg cannot substitute. | product, lot and transfer records |
| `coverage` | all nodes | Declare full or partial cohort period and activate grading/packing only from real farm activity. | flock and lot dates |
| `egg_mass` | outputs and losses | Reconcile count and measured mass across production, collection, active optional nodes and handover. | scales, ledger and reject log |
| `route_period` | housing, manure and assets | Retain route-specific pathways, phase links and allocation drivers before aggregation. | husbandry, manure and service records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_gate` | saleable reference eggs | Require fresh shell-on non-hatching hen eggs, 1 kg measured saleable mass and producing farm gate. Reject consumption mix as fixed farm reference. | `fao-small-poultry-production` |
| `node_gate` | process map | Require managed laying and independent collection. Activate farm grading/packing only from lot evidence and exclude external plants. | `fao-small-poultry-production` |
| `output_gate` | grades, spent hens and manure | Verify each intended co-product handover; reject waste as product; reconcile each active node and preserve destination. | `fao-leap-poultry-2016`; `fao-small-poultry-production` |
| `period_gate` | replacement and shared assets | Check cohort/phase links, rearing treatment, asset consumers and conservation of burden across periods, without duplicate counting. | `fao-leap-poultry-2016` |
| `exchange_gate` | concrete process exchanges | Require verified concrete flow UUID, property and unit before downstream TIDAS process construction; candidate PCR gaps stay explicit. | `fao-leap-poultry-2016` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate data package for fresh non-hatching hen eggs in shell. |
| downstream_use | `secondary_dataset` or `background_dataset` after review and concrete exchange resolution. |
| allowed_use | Declared layer route with actual collection, optional on-farm grading/packing and measured saleable shell mass. |
| excluded_use | Hatching or other-bird eggs, shell-less/processed eggs, external grading/packing and post-farm distribution. |
| required_metadata | Cohort, housing route, period, grade/count/mass, storage/packing, manure path, co-products, allocation, shared assets and flow identities. |
| required_quality_disclosure | Record coverage, egg and N balances, provisional ranges, route/period allocation, unresolved identities and uncertainty. |
| update_trigger | Change in product boundary, farm route, optional node, method, allocation basis or verified flow. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-poultry-2016` | official_guidance | FAO LEAP, Greenhouse gas emissions and fossil energy use from poultry supply chains (2016), https://openknowledge.fao.org/handle/20.500.14283/i6421en | Layer route, feed, rearing, attribution and boundary. |
| `ipcc-2019-livestock-manure` | official_guidance | IPCC, 2019 Refinement, Volume 4 Chapter 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Manure pathway gases. |
| `fao-leap-nutrients-2018` | official_guidance | FAO LEAP, Nutrient flows and associated environmental impacts in livestock supply chains (2018), https://openknowledge.fao.org/handle/20.500.14283/ca1328en | Manure and nitrogen records. |
| `fao-leap-water-livestock-2019` | official_guidance | FAO LEAP, Water use in livestock production systems and supply chains (2019), https://www.fao.org/partnerships/leap/resources/publications/ | Supplied-water distinction. |
| `fao-small-poultry-production` | extension_guidance | FAO, Small-scale poultry production, https://www.fao.org/4/y5169e/y5169e0a.htm | Farm collection and conditional grading/packing gate. |
