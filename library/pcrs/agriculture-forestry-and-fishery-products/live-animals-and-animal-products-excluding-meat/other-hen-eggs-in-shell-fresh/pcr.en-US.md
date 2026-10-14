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
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

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
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
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

###### Electricity at the equipment supply point (`farm_energy_electricity`)

**Collection scope and applicability for farm_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record actual electricity, fuel or heat carriers for lighting, ventilation, watering and manure handling.
Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Electricity at the equipment supply point
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_water_energy` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Sources: `fao-leap-poultry-2016`; `fao-agricultural-energy`

###### Diesel fuel supplied to equipment (`farm_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel supplied to equipment
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_water_energy` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Sources: `fao-leap-poultry-2016`; `fao-agricultural-energy`

###### Purchased heat at the process inlet (`farm_energy_heat`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Purchased heat at the process inlet
- Flow property / unit: Energy / MJ
- Amount rule: Collect raw quantities for this identity under `cp_water_energy` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Sources: `fao-leap-poultry-2016`; `fao-agricultural-energy`

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

###### Manure biogenic methane to air (`review_layer_husbandry_manure_ch4`)

Calculate actual atmospheric release by manure system, climate, residence time and volatile-solids activity. Reconcile captured, destroyed or oxidised methane; produced methane is not automatically emitted methane. Applies only to the operated `layer_husbandry` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Methane, biogenic, to air (UUID unresolved)
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `ipcc-2019-livestock-manure`

###### Indirect manure nitrogen-derived nitrous oxide to air (`review_layer_husbandry_indirect_n2o`)

Calculate attributable indirect N2O from documented manure N volatilisation/deposition and leaching/runoff pathways where applicable. Keep separate from direct N2O and reconcile any nitrogen-fate calculation already included downstream or in the chosen background/impact model. Applies only to the operated `layer_husbandry` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `ipcc-2019-livestock-manure`

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

###### Moulded wood-pulp egg tray (`egg_packaging_pulp_tray`)

**Collection scope and applicability for egg_packaging.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record actual trays, cartons, films or other protection, new material, reuse turns and losses.
Denominator and scope requirements：per kg saleable fresh shell eggs at farm gate

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Moulded wood-pulp egg tray
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_grading_packing` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_packing`
- Sources: `fao-small-poultry-production`; `fao-egg-packaging`

###### Corrugated fibreboard box (`egg_packaging_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_grading_packing` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_packing`
- Sources: `fao-small-poultry-production`; `fao-package-identities`

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

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock_events` | `layer_husbandry` | pullets and spent hens | flock and transfer log | cohort, route, entry/exit date, count, mass, purpose, destination | registers and calibrated lot scale; Raw aggregation requirements: assign events to laying service and saleable egg mass. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each entry/exit | full represented cohort | producing farm | per reference flow | dated log and scale calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed` | `layer_husbandry` | diets | deliveries and inventory | feed source, as-fed mass, dry matter, phase, refusal and stock | invoices, bins and feed log; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | kg as fed; kg dry | delivery and monthly | full cohort | producing farm | per reference flow | invoice and inventory reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_water_energy` | `layer_husbandry` | water and energy | meters and invoices | source, use, carrier, quantity, unit, period and shared-meter driver | meter and purchase log; Raw aggregation requirements: assign by use, retaining carriers separately. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | m3; kWh; MJ | monthly | full cohort | producing farm | per reference flow | meter and invoice; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure_emissions` | `layer_husbandry` | manure, mortality, gases | manure and nitrogen log | N input, manure mass/moisture, storage, handling, transfer, mortality, pathway and factor | farm log, samples and pathway method; Raw aggregation requirements: pathway calculation and transfer normalization. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg wet; kg dry; kg N; kg gas | monthly and each transfer | full cohort | producing farm | per reference flow | sample, transfer receipt and method version; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_eggs_collection` | `egg_collection` | eggs and losses | collection and handover ledger | date, cohort, count, laid/collected/saleable mass, broken eggs, storage | daily count, calibrated lot scale and handover ticket; Raw aggregation requirements: reconcile each active node and normalize to 1 kg saleable eggs. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | eggs; kg | every collection/handover | full represented period | producing farm | per reference flow | count sheets, scale and rejection log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_farm_gate_handover` | `farm_gate_handover` | final reference eggs | farm transfer ledger | source node, cohort, lot, grade, fresh shell-on state, count, mass, packing, storage, date and recipient | calibrated lot scale and transfer ticket; Raw aggregation requirements: sum measured saleable mass by lot and reconcile to upstream active node. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | eggs; kg | each farm-gate transfer | full represented reporting period | producing farm gate | per reference flow | signed transfer record, scale and lot trace; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_grading_packing` | `farm_grading`; `farm_packing` | conditional grades and packages | lot and material ledger | incoming count/mass, grade, destination, rejects, package type/mass/count/reuse | sorting log and material issue/return; Raw aggregation requirements: reconcile each grade and package stock. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | eggs; kg; packages | each active lot | periods when nodes operate | producing farm | per reference flow | lot trace, receipts and rejects; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_pathway_emissions` | `layer_husbandry` | pathway-specific gases and manure N/C | herd, feed, manure, field and method ledger | species/class; animal-days; intake/DM/digestibility; volatile solids; manure N/TAN; system shares; climate; storage time; fertiliser N; grazing; volatilisation/leaching; methane recovery; factor source/unit; final accepted output ; collected manure wet mass; dry matter; destination| collect primary activity by node and period, document parameter applicability, retain each pathway worksheet and any linked treatment/pasture dataset  Retain raw totals and normalize attributed quantities once to the measured accepted final reference output.| animal-day; kg DM; kg VS; kg N; kg CH4; kg N2O; kg NH3 | each operating period and management change | complete represented cohort and service period | actual operated nodes only | per reference flow | meter/analysis records, nitrogen cascade, method and factor evidence, no-duplication ledger |
| `cp_feed_supply_and_intake` | `layer_husbandry` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `layer_husbandry` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `egg_balance` | each active node | Incoming shell-egg mass equals accepted output plus downgraded output plus rejects plus measured stock change within declared uncertainty. | lot mass, grade, rejects and inventory | reconciled kg saleable eggs | `fao-small-poultry-production` |
| `normalize_reference` | inventory | Divide cohort/period amounts by kg saleable shell-on eggs actually handed over at producing farm gate. | period totals and saleable mass | amount per 1 kg reference | `fao-leap-poultry-2016` |
| `manure_gases` | manure pathways | Apply pathway-specific official method to collected manure N; preserve kg N2O versus N2O-N and kg NH3 versus NH3-N. | flock, N, pathway and factor | gas mass by substance | `ipcc-2019-livestock-manure`; `fao-leap-nutrients-2018` |
| `period_assets` | replacement and shared assets | Allocate observed rearing and asset burdens across consuming periods/nodes with evidenced service driver; allocated total equals source total. | flock events, service periods and node use | assigned burdens | `fao-leap-poultry-2016` |
| `calc_pathway_emissions` | `layer_husbandry` | Use species- and management-compatible methods and retain disaggregated pathway totals. Convert N2O-N to N2O by 44/28 and NH3-N to NH3 by 17/14 exactly once; already molecular masses are not reconverted. Check methane against the documented available-carbon/methane-potential balance and nitrogen losses against each stage's available N. Indirect formation from previously volatilised N is a downstream transformation, not a second source-stage N loss. Attribute and normalize once; do not duplicate linked treatment or fate-model emissions.  Use matched raw-period quantities before allocation for physical screens: CH4 mass × 12/16 must not exceed the carbon available to the represented pathway; source-stage NH3 mass × 14/17 plus direct N2O mass × 28/44 and other source N losses must not exceed that stage's available N, after accounting for stocks and transfers. Bound each indirect N2O-N calculation by its documented volatilised or leached N precursor, not by subtracting that downstream transformation again from the source ledger. These are conservation checks, not emission factors or an empirical per-product range.| `cp_pathway_emissions` | kg named compound per final reference flow | `ipcc-2019-livestock-manure`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `layer_feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `manure_n2o`; `review_layer_husbandry_indirect_n2o` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019` |

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
| `v_pathway_emission_coverage` | `layer_husbandry` | Require a pathway coverage ledger for enteric CH4 where biologically applicable, manure CH4, direct/indirect N2O, NH3 and relevant field emissions. Every pathway needs a measured/calculated value, a named linked process with matching coverage, or supported inapplicability; absent data cannot become zero. Keep wild life before capture outside managed husbandry, assess actual managed holding separately, and retain species-specific evidence. | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019` |

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
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Managed-soil direct and indirect nitrogen pathways and boundary reconciliation |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 nitrogen-flow method; verify actual species, management and geographical applicability before adopting parameters |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed supply versus intake and waste burden, not animal parameters. Applying this accounting principle to the declared taxon is this PCR's methodological choice; no pig diet or emission factor is transferred. |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-egg-packaging` | official_guidance | FAO Egg packaging, transport and storage, https://www.fao.org/4/Y4628E/y4628e05.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
