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
| reference_flow_link | Exactly one actual final handover card; broad UUID unresolved |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw camel milk at mobile-camp or fixed-farm herd gate (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; mobile or fixed gate; warm/chilled temperature; conditioning; milking method; period; measured density if converting volume |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | reference milk | Mass | kg | Weigh after loss; convert volume only with batch temperature and measured density. |
| `milk_partition` | milking | Mass | kg | Reconcile collected, calf-consumed, rejected and final milk; flag inferred suckling. |
| `period_link` | herd | row-specific | row unit | Link animal-days, services and outputs to actual route and phase before per-kg normalization. |

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

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd_management` | Camel herd management | required | full supporting herd period | Biological milk capacity, calves, culls, residues and emissions | kg net gate milk |
| `milk_capture` | Milking and calf sharing | required | each milking event | Independent capture and milk partition | kg collected milk |
| `first_conditioning` | First raw-milk conditioning | conditional | on-herd straining actually occurs | raw-to-prepared handoff and rejects | kg prepared milk |
| `farm_cooling` | On-herd cooling | conditional | measured cooling before handover | warm-to-chilled preservation and losses | kg chilled milk |
| `producer_handover` | Producer handover | required | actual mobile or fixed gate | one final raw product output | 1 kg net gate milk |

### Process: Camel herd management (`herd_management`)

#### Inputs

##### Product flows

###### Feed and grazed forage (`herd_feed`)

Actual dry-matter intake by route and animal phase.

- Selected flow: Camel feed or grazed biomass (UUID unresolved)
- Flow property / unit: Mass / kg dry matter
- Amount rule: Obtain by event, route and period, then normalize to kg DM/kg milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Herd water (UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Obtain by event, route and period, then normalize to m3/kg milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Herd energy (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Obtain by event, route and period, then normalize to MJ/kg milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Live camel outputs by class (UUID unresolved)
- Flow property / unit: Mass / kg live weight
- Amount rule: Obtain by event, route and period, then normalize to kg live weight/kg milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Herd residues by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Dead camel stock by disposal route (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh or use class-specific documented estimate per death.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Methane, biogenic to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Obtain by event, route and period, then normalize to kg CH4/kg milk.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
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

- Selected flow: Methane, biogenic to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Apply selected method to herd-class and manure-stage records, normalized to net milk.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
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

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Apply selected method to herd-class and manure-stage records, normalized to net milk.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
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

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Apply selected method to herd-class and manure-stage records, normalized to net milk.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
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

- Selected flow: Milking process water (UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Obtain by event, route and period, then normalize to m3/kg collected milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Warm raw camel milk (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg accounted milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Camel milk consumed by calf (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg accounted milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Discarded raw camel milk by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg collected milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Milking wastewater by destination (UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Meter discharge or use inlet less measured retained water, with destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg collected milk
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Collected warm raw camel milk (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg prepared milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Prepared warm raw camel milk (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg prepared milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Conditioning rejects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg input milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Usable warm raw camel milk (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg chilled milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Cooling energy supply (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Obtain by event, route and period, then normalize to MJ/kg chilled milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Chilled raw camel milk internal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg chilled milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Cooling milk loss (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg cooling input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Raw camel milk ready for handover (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg delivered milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Warm raw camel milk at producer gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Obtain by event, route and period, then normalize to kg/kg delivered milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Chilled raw camel milk at mobile-camp gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net weighed chilled milk at actual mobile camp; mutually exclusive with other final outputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Raw milk of camel, chilled, production mix at farm gate `c20da2ab-1dac-40ad-9206-43996d07bcff`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Obtain by event, route and period, then normalize to kg/kg delivered milk.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net producer-gate milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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
| `cp_herd` | `herd_management` | herd inputs and outputs | herd log | species; class; route; phase; animal-days; feed; grazing; water; fuel; births; culls; manure; mortality | weigh, meter, dated register | kg; m3; MJ; head; day | daily/event | full supporting period | actual camps and farms | partition by route and period | invoices, calibration, method version |
| `cp_milking` | `milk_capture` | collected, calf and loss | event sheet | dam; method; collected mass; calf suckling; water; waste | scale, meter, observation | kg; m3 | each event | milk period | milking point | reconcile, then sum | calibrated scale and observation notes |
| `cp_conditioning` | `first_conditioning` | raw, prepared, rejects | batch log | input; straining; retained; rejects; destination | scale and filter log | kg | each applicable batch | milk period | herd point | input = retained + loss | scale and batch ID |
| `cp_cooling` | `farm_cooling` | warm, energy, chilled, loss | cooler log | mass; time; temperature; fuel/electricity; reject | scale, thermometer, meter | kg; °C; MJ | each applicable batch | milk period | actual cooler | input = chilled + loss | calibrated instruments |
| `cp_handover` | `producer_handover` | final product | handover ticket | mobile/fixed location; buyer; state; temperature; net mass | weighed signed ticket | kg; °C | each delivery | milk period | actual herd gate | exactly one state per batch | ticket and scale check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_yield` | final milk | Sum net warm plus chilled gate mass, one state per batch; divide attributed burdens by sum. | `cp_handover` | kg reference milk | `mass-balance-identity` |
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
