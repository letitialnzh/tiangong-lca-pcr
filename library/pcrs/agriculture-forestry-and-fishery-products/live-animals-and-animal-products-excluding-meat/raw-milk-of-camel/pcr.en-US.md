---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-camel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw milk of camel

## 1. Scope and Applicability

Unprocessed dromedary or Bactrian milk at the actual producing-herd handover, warm or on-herd chilled. A mobile pastoral camp is not a fixed farm gate. Exclude heat treatment, separation, formulation, collection-centre processing and downstream delivery. Calf suckling is internal herd use, not saleable milk. [fao-camel-dairy; fao-camel-production; un-cpc-3]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-camel` |
| classification_refs | CPC 3.0 `02293` |
| covered_products | Raw dromedary and Bactrian milk at actual producing-herd handover |
| excluded_products | Pasteurized, fermented, separated, skimmed or formulated milk; collection-centre work and later transport |
| representative_product | 1 kg net raw camel milk at declared herd gate |
| production_route | Managed herd followed by independent milking capture; mobile pastoral and fixed housed/intensive management use mutually exclusive animal-day records. Conditional first conditioning and cooling are distinct. |
| market_state | Warm or on-herd chilled; disclose species, gate, temperature and conditioning |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Raw camel milk delivered by the producing herd |
| How much | 1 kg net weighed handed-over milk |
| How well | Unprocessed, species and warm/chilled state declared |
| How long or cycle | Herd reporting period linked to lactation, dry, pregnancy and replacement phases |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw camel milk at mobile-camp or fixed-farm herd gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; mobile or fixed gate; warm/chilled temperature; conditioning; milking method; period; measured density if converting volume |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | reference milk | Mass | kg | Weigh after loss; convert volume only with batch temperature and measured density. |
| `milk_partition` | milking | Mass | kg | Reconcile collected, calf-consumed, rejected and final milk; flag inferred suckling. |
| `period_link` | herd | row-specific | row unit | Link animal-days, services and outputs to actual route and phase before per-kg normalization. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed breeding and lactating herd at actual camp/pasture or fixed farm; acquired animals and feed disclosed. |
| starting_condition_role | Biological milk production, not dairy processing. |
| product_classification_scope | CPC 3.0 `02293`. |
| recursive_input_rule | Purchased raw camel milk remains a traced upstream input, not merged with own-herd yield. |
| upstream_dataset_requirement | Distinct datasets for purchased animals, feed, energy, water service and materials with origin. |
| disclosure | Species, route, actual gate, herd phases, calf share, manure, losses, cooling and independent outputs. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | all routes | End at actual herd-to-buyer handover; mobile camp is not assumed fixed farm. Exclude later transport and centre work. | `un-cpc-3`; `fao-camel-dairy` |
| `route_delta` | herd | Mobile management records grazing and moved water/fuel; housed management records delivered feed, pumping, shelter and managed manure. Partition mixed-herd days. | `fao-camel-dairy`; `fao-camel-production` |
| `raw_state` | milk | Separate collected warm, prepared warm and cooled milk. Straining and cooling occur only with batch evidence; no heat treatment. | `fao-camel-production` |
| `shared_asset` | nodes | Allocate well, pump, vehicle, shelter, milking equipment or cooler to actual consumers and service periods once. | `fao-camel-dairy` |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd_management` | Camel herd management | required | full supporting herd period | Biological milk capacity, calves, culls, residues and emissions | kg net gate milk |
| `milk_capture` | Milking and calf sharing | required | each milking event | Independent capture and milk partition | kg collected milk |
| `first_conditioning` | First raw-milk conditioning | conditional | on-herd straining actually occurs | raw-to-prepared handoff and rejects | kg prepared milk |
| `farm_cooling` | On-herd cooling | conditional | measured cooling before handover | warm-to-chilled preservation and losses | kg chilled milk |
| `producer_handover` | Producer handover | required | actual mobile or fixed gate | one final raw product output | 1 kg net gate milk |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

### Process: Camel herd management (`herd_management`)

#### Inputs

##### Product flows

###### Feed and grazed forage (`herd_feed`)

Actual dry-matter intake by route and animal phase.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg DM/kg milk. Original collection denominator kind: reference_flow.

- Selected flow: Camel feed or grazed biomass (UUID unresolved)
- Flow property / unit: Mass / kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `fao-camel-production`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg DM/kg milk
  - Basis: feed and grazed forage per stated denominator
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Herd drinking water (`herd_water`)

Carried water at mobile camp or pumped water at farm, not assumed universal camel schedule.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to m3/kg milk. Original collection denominator kind: reference_flow.

- Selected flow: Herd water (UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `fao-camel-production`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m3/kg milk
  - Basis: herd drinking water per stated denominator
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pumping and herd energy (`herd_energy`)

Fuel or electricity used for producer-side water and herd operations, shared service assigned once.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to MJ/kg milk. Original collection denominator kind: reference_flow.

- Selected flow: Herd energy (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg milk
  - Basis: pumping and herd energy per stated denominator
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Calves and culled camels (`animal_outputs`)

Independent live animals at actual handover; replacements retained in herd are internal.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg live weight/kg milk. Original collection denominator kind: reference_flow.

- Selected flow: Live camel outputs by class (UUID unresolved)
- Flow property / unit: Mass / kg live weight
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `fao-camel-dairy`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg live weight/kg milk
  - Basis: calves and culled camels per stated denominator
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Managed manure (`herd_residues`)

Record manure by destination; marketed dung is a co-product, not waste. Dead stock is a separate waste card.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg milk. Original collection denominator kind: reference_flow.

- Selected flow: Herd residues by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `ipcc-livestock-2019`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg milk
  - Basis: manure per stated denominator
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dead camel stock for disposal (`dead_stock`)

Record non-marketable deaths with cause, mass and disposal destination; they are not cull co-products.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Weigh or use class-specific documented estimate per death. Original collection denominator kind: reference_flow.

- Selected flow: Dead camel stock by disposal route (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional mortality waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg net milk
  - Basis: dead stock per kg net milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric methane to air (`enteric_ch4`)

Calculate from recorded animal-days, feed and declared method; UUID is not an emission factor.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg CH4/kg milk. Original collection denominator kind: reference_flow.

- Selected flow: Methane, biogenic to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `ipcc-livestock-2019`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg CH4/kg milk
  - Basis: enteric methane to air per stated denominator
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Methane from manure management to air (`manure_ch4`)

Calculate methane from actual manure management system, volatile solids and herd class; keep distinct from enteric methane.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Apply selected method to herd-class and manure-stage records, normalized to net milk. Original collection denominator kind: reference_flow.

- Selected flow: Methane, biogenic to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `ipcc-livestock-2019`
- Range: Provisional emissions screening interval, not method factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg CH4/kg milk
  - Basis: manure-stage air emission per kg net milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide from manure management to air (`manure_n2o`)

Calculate direct manure-system N2O from actual nitrogen excretion, system and IPCC method; avoid double counting managed soils.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Apply selected method to herd-class and manure-stage records, normalized to net milk. Original collection denominator kind: reference_flow.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `ipcc-livestock-2019`
- Range: Provisional emissions screening interval, not method factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg N2O/kg milk
  - Basis: manure-stage air emission per kg net milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia from manure handling to air (`manure_nh3`)

Record only where method or measurements establish volatilized NH3 by handling stage; keep any indirect N2O calculation separate.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Apply selected method to herd-class and manure-stage records, normalized to net milk. Original collection denominator kind: reference_flow.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `ipcc-livestock-2019`
- Range: Provisional emissions screening interval, not method factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg NH3/kg milk
  - Basis: manure-stage air emission per kg net milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Milking and calf sharing (`milk_capture`)

#### Inputs

##### Product flows

###### Milking and cleaning water (`milking_water`)

Measure udder, vessel and equipment cleaning water for hand or mechanical milking.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to m3/kg collected milk. Original collection denominator kind: reference_flow.

- Selected flow: Milking process water (UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milking`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg collected milk
  - Basis: milking and cleaning water per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected warm milk (`collected_milk`)

Captured raw milk before conditioning, distinct from calf-consumed milk.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg accounted milk. Original collection denominator kind: reference_flow.

- Selected flow: Warm raw camel milk (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milking`
- Sources: `fao-camel-production`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg accounted milk
  - Basis: collected warm milk per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Calf-consumed milk (`calf_milk`)

Observe or estimate suckling before or during milking; internal biological use, not marketed milk.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg accounted milk. Original collection denominator kind: reference_flow.

- Selected flow: Camel milk consumed by calf (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milking`
- Sources: `fao-camel-production`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg accounted milk
  - Basis: calf-consumed milk per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Discarded milk at milking (`milking_loss`)

Record spilled or rejected milk and its destination; cleaning effluent is a separate waste card.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg collected milk. Original collection denominator kind: reference_flow.

- Selected flow: Discarded raw camel milk by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milking`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg collected milk
  - Basis: discarded milk per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Milking cleaning wastewater (`milking_wastewater`)

Record used cleaning water leaving the milking node by treatment or discharge route; it is not milk loss.

Denominator and scope requirements：per kg collected milk

Raw quantity and calculation requirements: Meter discharge or use inlet less measured retained water, with destination. Original collection denominator kind: process_output.

- Selected flow: Milking wastewater by destination (UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milking`
- Range: Provisional wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg collected milk
  - Basis: wastewater per kg collected milk
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First raw-milk conditioning (`first_conditioning`)

#### Inputs

##### Product flows

###### Raw milk for first conditioning (`conditioning_input`)

Transfer raw collected milk only if actual straining occurs; no second production credit.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg prepared milk. Original collection denominator kind: reference_flow.

- Selected flow: Collected warm raw camel milk (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg prepared milk
  - Basis: raw milk for first conditioning per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared warm raw milk (`prepared_milk`)

Weigh retained milk after non-transformative straining, to warm handover or cooling.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg prepared milk. Original collection denominator kind: reference_flow.

- Selected flow: Prepared warm raw camel milk (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Normalized mass identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg prepared milk
  - Basis: prepared warm raw milk per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Straining rejects (`conditioning_rejects`)

Record retained debris and rejected milk separately, excluding both from usable output.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg input milk. Original collection denominator kind: reference_flow.

- Selected flow: Conditioning rejects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg input milk
  - Basis: straining rejects per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-herd cooling (`farm_cooling`)

#### Inputs

##### Product flows

###### Warm usable milk for cooling (`cooling_input`)

Only usable raw milk enters conditional preservation.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg chilled milk. Original collection denominator kind: reference_flow.

- Selected flow: Usable warm raw camel milk (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg chilled milk
  - Basis: warm usable milk for cooling per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling energy (`cooling_energy`)

Meter on-herd refrigerator electricity or fuel, including one share of generator service.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to MJ/kg chilled milk. Original collection denominator kind: reference_flow.

- Selected flow: Cooling energy supply (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg chilled milk
  - Basis: cooling energy per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled usable milk (`cooled_milk`)

Internal transfer before final handover, not yet the fixed farm-gate flow.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg chilled milk. Original collection denominator kind: reference_flow.

- Selected flow: Chilled raw camel milk internal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Range: Normalized mass identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg chilled milk
  - Basis: chilled usable milk per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Cooling spoilage (`cooling_loss`)

Record rejected batches and spills by cause and disposal.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg cooling input. Original collection denominator kind: reference_flow.

- Selected flow: Cooling milk loss (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg cooling input
  - Basis: cooling spoilage per stated denominator
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Producer handover (`producer_handover`)

#### Inputs

##### Product flows

###### Milk ready for gate (`handover_input`)

Transfer either warm or chilled state once, from the last active upstream node.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg delivered milk. Original collection denominator kind: reference_flow.

- Selected flow: Raw camel milk ready for handover (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg delivered milk
  - Basis: milk ready for gate per stated denominator
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Warm raw milk at actual gate (`warm_gate_milk`)

Final warm output at declared mobile camp or fixed farm; chilled identity inapplicable.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg delivered milk. Original collection denominator kind: reference_flow.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Warm raw camel milk at producer gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg delivered milk
  - Basis: warm raw milk at actual gate per stated denominator
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Chilled raw milk at mobile-camp gate (`chilled_mobile_gate_milk`)

Conditional final output where cooling is actually performed at a mobile pastoral camp. It remains unbound because the verified chilled UUID requires a fixed farm gate.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Net weighed chilled milk at actual mobile camp; mutually exclusive with other final outputs. Original collection denominator kind: reference_flow.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Chilled raw camel milk at mobile-camp gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Conditional chilled mobile-camp output share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg delivered milk
  - Basis: mobile chilled share of net delivered raw milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Chilled raw milk at fixed farm gate (`chilled_farm_gate_milk`)

Final chilled output only at a fixed producing farm; chilled mobile-camp output remains unbound.

Denominator and scope requirements：per kg net producer-gate milk

Raw quantity and calculation requirements: Obtain by event, route and period, then normalize to kg/kg delivered milk. Original collection denominator kind: reference_flow.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Raw milk of camel, chilled, production mix at farm gate `c20da2ab-1dac-40ad-9206-43996d07bcff`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional screening range, not a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg delivered milk
  - Basis: chilled raw milk at fixed farm gate per stated denominator
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Raw camel milk at mobile-camp or fixed-farm herd gate for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `warm_gate_milk`, `chilled_mobile_gate_milk`, `chilled_farm_gate_milk` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `warm_gate_milk`, `chilled_mobile_gate_milk`, `chilled_farm_gate_milk`

Required product-instance qualifiers: species; mobile or fixed gate; warm/chilled temperature; conditioning; milking method; period; measured density if converting volume

- Selected flow: Raw camel milk at mobile-camp or fixed-farm herd gate for actual producer-handover linkage
- Flow property / unit: Mass / kg
- Amount rule: Use measured accepted same-lot quantity reconciled to the linked source rows; normalize once to the declared reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`

- Range: Exact identity-reconciliation check after normalization, not a production-yield default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Declared reference quantity; input and output are the same accepted physical goods under the same handover ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw camel milk at mobile-camp or fixed-farm herd gate (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `warm_gate_milk`, `chilled_mobile_gate_milk`, `chilled_farm_gate_milk`

Required product-instance qualifiers: species; mobile or fixed gate; warm/chilled temperature; conditioning; milking method; period; measured density if converting volume

- Selected flow: Raw camel milk at mobile-camp or fixed-farm herd gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`

- Range: Exact identity-reconciliation check after normalization, not a production-yield default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Declared reference quantity; input and output are the same accepted physical goods under the same handover ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_set` | herd and handover | Enumerate raw milk, independently sold/transferred calves and culls, and any marketed manure, dung fuel or fibre at first external handover. Own-herd suckling and retained replacements are internal; dead stock and discarded milk are waste. | `fao-camel-dairy` |
| `allocation_precedence` | inseparable herd burden | Subdivide directly measured milking and calf-rearing services first. For inseparable herd burdens use a defensible documented biophysical relation, otherwise period-specific economic allocation with prices and sensitivity. Never assign all breeding/dry-period burden to milk or silently expand the system. | `fao-camel-dairy` |
| `period_attribution` | herd periods | Link lactation, dry, pregnancy, calf-rearing and replacement periods to inputs, assets, births, deaths and outputs; allocate supporting-period burden once, with no universal annualization factor. | `fao-camel-production` |
| `shared_service` | shared assets | List all consumers and service periods of wells, pumps, vehicles, shelters, milking devices and coolers. Apportion measured water, energy or runtime once and disclose proxies. | `fao-camel-dairy` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `herd_management` | herd inputs and outputs | herd log | species; class; route; phase; animal-days; feed; grazing; water; fuel; births; culls; manure; mortality | weigh, meter, dated register; Raw aggregation requirements: partition by route and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; m3; MJ; head; day | daily/event | full supporting period | actual camps and farms | per reference flow | invoices, calibration, method version; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_milking` | `milk_capture` | collected, calf and loss | event sheet | dam; method; collected mass; calf suckling; water; waste | scale, meter, observation; Raw aggregation requirements: reconcile, then sum. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; m3 | each event | milk period | milking point | per reference flow | calibrated scale and observation notes; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_conditioning` | `first_conditioning` | raw, prepared, rejects | batch log | input; straining; retained; rejects; destination | scale and filter log; Raw aggregation requirements: input = retained + loss. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each applicable batch | milk period | herd point | per reference flow | scale and batch ID; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_cooling` | `farm_cooling` | warm, energy, chilled, loss | cooler log | mass; time; temperature; fuel/electricity; reject | scale, thermometer, meter; Raw aggregation requirements: input = chilled + loss. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; °C; MJ | each applicable batch | milk period | actual cooler | per reference flow | calibrated instruments; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_handover` | `producer_handover` | final product | handover ticket | mobile/fixed location; buyer; state; temperature; net mass | weighed signed ticket; Raw aggregation requirements: exactly one state per batch. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; °C | each delivery | milk period | actual herd gate | per reference flow | ticket and scale check; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_yield` | final milk | Partition accepted handovers by species, warm or chilled state, and actual producer gate. For each stratum, sum only its accepted net milk mass and divide only its attributable inventory by that positive mass. Assign actual cooling inputs and losses only to the cooled route; attribute shared herd burdens once using the declared allocation rules. Warm plus chilled mass is a reconciliation total only, never the denominator of a single-state result. | `cp_handover`; state- and gate-specific accepted masses and attributable inventories | separate reference-normalized results for each state and gate | `mass-balance-identity` |
| `milk_balance` | milk | Accounted milk = collected + calf-consumed + disclosed uncollected; later input = retained + loss. No universal calf-share factor. | `cp_milking`; `cp_conditioning`; `cp_cooling` | reconciled kg and uncertainty | `fao-camel-production`; `mass-balance-identity` |
| `enteric_method` | methane | Apply documented class/feed/IPCC-consistent method to measured animal-days, not UUID-derived factor. | `cp_herd` | kg biogenic CH4 | `ipcc-livestock-2019` |
| `manure_air_method` | manure CH4, N2O and NH3 | Choose separately documented manure-system methane, direct nitrous oxide and volatilized ammonia methods using animal class, excretion, handling stage and destination. Reconcile direct and indirect nitrogen paths without duplicate emission. | `cp_herd` | kg CH4; kg N2O; kg NH3 | `ipcc-livestock-2019` |
| `attribution` | herd and assets | Add direct and one share of supporting/shared burdens; allocate among independent outputs by disclosed precedence. | `cp_herd`; `cp_handover` | burden/kg milk | `fao-camel-dairy` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `gate_identity` | final product | Species, mobile/fixed gate and state verified; fixed UUID only for chilled fixed farm. | signed ticket and flow detail |
| `period_coverage` | herd | Include supporting phases, calf share, culls, death and losses; disclose gaps. | dated registers |
| `route_partition` | mixed herd | No animal-day or shared asset service in two routes or periods. | dated movement/service logs |
| `quantity_trace` | all | Retain calibration, density conversion, estimates and method version; ranges do not replace data. | QA records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_gate` | reference milk | Reject the fixed chilled-farm UUID for warm, mobile, unspecified-gate or processed milk. Broad reference remains unbound. | `un-cpc-3`; `fao-camel-dairy` |
| `v_mass` | milk stages | Reconcile collected, calf-consumed, conditioned, chilled, rejected and handed-over milk, with one final output per batch. | `fao-camel-production`; `mass-balance-identity` |
| `v_route` | mixed herd | Verify route-specific feed, water, energy, manure and mutually exclusive animal-days; conditional interventions need batch records. | `fao-camel-dairy`; `fao-camel-production` |
| `v_attribution` | co-products and assets | Verify independent calves/culls, supporting periods and shared consumers; reject duplicate burdens. | `fao-camel-dairy` |
| `v_range` | amount QA | Provisional reasoned ranges are screening guardrails only, not measured defaults or acceptance limits. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Producing-herd foreground raw camel milk |
| downstream_use | `secondary_dataset`; `background_dataset` only for matching route and gate |
| allowed_use | Raw camel milk supply for matched species, route, state and handover |
| excluded_use | Processed milk, collection centre, downstream transport or generic fixed chilled identity on mobile gate |
| required_metadata | species; route and dates; gate; state; milk mass/density; calf share; periods; allocation; binding evidence |
| required_quality_disclosure | primary-data coverage, inferred calf share, loss balance, shared-service shares, emission method, UUID gaps |
| update_trigger | Changed species, route, gate, cooling, co-products or significant activity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | `official_guidance` | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | classification boundary |
| `fao-camel-dairy` | `official_guidance` | [FAO camel dairy](https://www.fao.org/dairy-production-products/dairy/camels/en) | species, mobile route, co-products |
| `fao-camel-production` | `handbook` | [FAO camel milk production](https://www.fao.org/4/t0755e/t0755e01.htm) | calf sharing, variable yield, milking |
| `ipcc-livestock-2019` | `method_factor` | [IPCC 2019 Refinement, Vol. 4 Ch. 10](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | emissions method selection |
| `mass-balance-identity` | `standard` | Conservation of mass: input = retained plus losses | milk QA identity |
