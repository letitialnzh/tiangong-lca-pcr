---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.ostriches-and-emus
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ostriches, emus and rheas

## 1. Scope and Applicability

This PCR covers living ostriches, emus and rheas (*Rhea* spp.) at breeder, hatchery or rearing-farm producer handover. Although the abbreviated CPC label is “Ostriches and emus”, the official 02193 explanatory note includes rheas. Only living, unprocessed birds are covered; dead birds, meat, hides, oil, slaughter and downstream transport are excluded. Feathers, eggs, culled birds or usable manure are not automatic co-products; record them only at actual independent handover. Collect species-, stage- and extensive/semi-intensive/intensive-route evidence rather than applying universal feed or yield factors.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.ostriches-and-emus` |
| classification_refs | CPC 3.0 `02193` (official scope includes rheas) |
| covered_products | Living ostriches, emus, rheas, chicks and older birds |
| excluded_products | Dead birds, meat, hides, oil, slaughter and post-sale services |
| representative_product | 1 kg measured live ratite at actual producer handover |
| production_route | Managed breeder production with conditional egg collection, incubation and rearing. Extensive, semi-intensive and intensive modes differ in feed, grazing, housing and manure inventories and may coexist by phase; one lot has one final gate. |
| market_state | Alive, unprocessed, with species and life stage stated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living ostrich, emu or rhea at actual producer handover |
| How much | 1 kg measured live mass; also report count and species/stage-specific kg per bird |
| How well | Alive and unprocessed; species, age/stage, health and accepted condition |
| How long or cycle | Declare breeder season, hatch batch or rearing cohort and shared-asset period |
| reference_flow_link | `farm_gate_birds` or `hatchery_chicks` according to actual final gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Living ostriches, emus and rheas (UUID unresolved across hatchery/farm gates) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species; stage; count; live mass; actual gate; route; cohort; period; destination |

The confirmed platform UUID applies only to the unprocessed live farm-gate card, not to the cross-gate reference or hatchery-gate chicks.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | Reference and live transfer | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh by species and stage and reconcile counts; do not use a universal count-to-mass factor. |
| `egg_count` | Egg handover | Count | egg | Reconcile laid, incubated, sold, rejected and closing eggs by batch. |
| `period` | Breeders and shared assets | Time | day or season | Index breeder, hatch, growth and asset service periods before attribution. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Opening breeders, purchased eggs/chicks or young birds at first operated node; declare species, stage, count, mass and inherited burden |
| starting_condition_role | Foreground opening stock or upstream Product input, not automatically zero burden |
| product_classification_scope | CPC 3.0 `02193` living ostriches, emus and rheas |
| recursive_input_rule | Connect purchased same-category live birds to one upstream dataset at the actual preceding gate; internal chick transfers are not a second final product. |
| upstream_dataset_requirement | Match purchased birds, eggs, feed, utilities and services by supplier, state, property and geography. |
| disclosure | Disclose species, breeding/hatch/rearing nodes, route shares, final gate, mortality and manure destinations and shared-asset periods. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_live` | All routes | End at actual producer handover of living unprocessed ostrich, emu or rhea; exclude slaughter and later processing. | `un-cpc-2025`; `fao-ostrich-farming` |
| `b_nodes` | Breeding, hatch, growth | Include operated breeders, independent egg collection/incubation and rearing; separate accepted live birds, independent eggs, mortality and wastes. | `fao-ostrich-systems`; `aus-ratite-industry` |
| `b_shared` | Shared assets and periods | Assign fencing, incubators, water and handling equipment by recorded service periods and consuming nodes, once only. | `fao-ostrich-systems` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder` | Manage breeders and produce eggs | conditional | operated breeding flock | managed biological production | per kg final live bird |
| `incubation` | Collect eggs and hatch chicks | conditional | operated incubation or hatchery handover | independent capture and incubation | per kg final live bird |
| `rearing` | Grow living young ratites | conditional | grow-out after hatch or purchase | managed biological growth with route delta | per kg final live bird |
| `handover` | Handle and weigh living birds | conditional | final farm-gate lot; hatchery-only final lots end at incubation | independent live handling and handover | per kg final live bird |

Egg collection/incubation independently transfers the breeder's output to living chicks; final live handling is independent of growth. Hatchery chicks and farm-gate birds are mutually exclusive final gates per lot. Extensive, semi-intensive and intensive modes may coexist by phase, but feed, grazing, housing, utility and manure inventory deltas need evidence, not just route labels. Link breeder seasons, egg batches, growth cohorts, replacements, culls and shared-asset service periods.

### Process: Manage breeders and produce eggs (`breeder`)

#### Inputs

##### Product flows

###### Breeding birds received (`breeders`)

Purchased breeding birds carry upstream burden; opening stock is a declared starting condition.

- Selected flow: Live ostrich, emu or rhea breeders
- Flow property / unit: Mass / kg
- Amount rule: weigh purchased birds by species
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_birds`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder feed and forage (`breeder_feed`)

Record species-specific ration and grazing share by breeder season.

- Selected flow: Species-specific feed and forage
- Flow property / unit: Mass / kg
- Amount rule: record delivered feed less stock change and loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder drinking and cleaning water (`breeder_water`)

Separate drinking and cleaning water when metering permits; rainfall is not supplied water.

- Selected flow: Supplied water
- Flow property / unit: Mass / kg
- Amount rule: meter actual water by use where possible
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fertile eggs collected for incubation (`fertile_eggs`)

Internal transfer to incubation is not a second final product.

- Selected flow: Fertile ratite eggs
- Flow property / unit: Count / egg
- Amount rule: count eggs transferred to hatchery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: egg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Eggs sold independently (`sold_eggs`)

Only independently transferred eggs are co-products; record the buyer gate.

- Selected flow: Saleable ratite eggs
- Flow property / unit: Count / egg
- Amount rule: count eggs actually sold separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: egg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Living culled breeders sold independently (`live_culls`)

Count only living birds transferred independently, not carcasses.

- Selected flow: Living culled ratites
- Flow property / unit: Mass / kg
- Amount rule: weigh live culled birds at separate handover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_birds`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Breeder mortality and discarded manure (`breeder_losses`)

Classify carcasses and discarded manure by distinct disposal destinations.

- Selected flow: Dead birds and discarded manure
- Flow property / unit: Mass / kg
- Amount rule: record stream-specific disposal mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Ammonia to air from breeder manure (`breeder_nh3_air`)

Record breeder-manure nitrogen and actual management pathway; the flow UUID supplies identity, not a factor.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: calculate from collected manure nitrogen and an applicable pathway-specific method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Collect eggs and hatch chicks (`incubation`)

#### Inputs

##### Product flows

###### Fertile eggs received for incubation (`incubation_eggs`)

Match these eggs to breeder or supplier records exactly once.

- Selected flow: Fertile ratite eggs
- Flow property / unit: Count / egg
- Amount rule: count by source and species; link once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eggs`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: egg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Incubator and hatchery energy (`incubation_energy`)

Include operated incubation, ventilation and lighting energy by actual batch.

- Selected flow: Energy carriers
- Flow property / unit: Energy / kWh
- Amount rule: meter energy by batch and service period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living chicks at hatchery gate (`hatchery_chicks`)

Hatchery-gate sale is a final product; onward rearing is an internal transfer, not both.

- Selected flow: Live ratite chicks (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weigh and count accepted living chicks
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_birds`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Failed eggs and hatchery mortality (`failed_eggs`)

Keep infertile, failed and dead-chick streams out of living output.

- Selected flow: Rejected eggs and dead chicks
- Flow property / unit: Mass / kg
- Amount rule: weigh rejected streams by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Grow living young ratites (`rearing`)

#### Inputs

##### Product flows

###### Live young birds entering rearing (`incoming_chicks`)

Carry inherited breeder/hatchery or purchased burden into rearing once.

- Selected flow: Living young ratites
- Flow property / unit: Mass / kg
- Amount rule: weigh and count inherited or purchased birds
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_birds`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing feed and forage (`rearing_feed`)

Differentiate extensive, semi-intensive and intensive feed/grazing evidence.

- Selected flow: Species- and stage-specific feed
- Flow property / unit: Mass / kg
- Amount rule: record feed and grazing share by route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing drinking and cleaning water (`rearing_water`)

Record delivered water for the actual growth cohort and uses.

- Selected flow: Supplied water
- Flow property / unit: Mass / kg
- Amount rule: meter supplied water by cohort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Housing and ventilation energy (`rearing_energy`)

Include only powered housing and ventilation services actually operated.

- Selected flow: Energy carriers
- Flow property / unit: Energy / kWh
- Amount rule: meter actual powered services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living birds leaving rearing (`grown_birds`)

Transfer living birds to final handling once; this internal movement is not a second sale.

- Selected flow: Living ostriches, emus and rheas
- Flow property / unit: Mass / kg
- Amount rule: weigh living birds transferred to handover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_birds`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rearing mortality and discarded manure (`rearing_losses`)

Keep mortalities and discarded manure separate from usable transferred products.

- Selected flow: Dead birds and discarded manure
- Flow property / unit: Mass / kg
- Amount rule: record disposal by stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide to air from managed manure (`manure_n2o_air`)

The fixed UUID identifies nitrous oxide to air only; quantity needs species/pathway evidence.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: calculate from measured nitrogen and pathway-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air from rearing manure (`rearing_nh3_air`)

Calculate separately from the rearing manure nitrogen and actual management pathway; no universal ratite factor is assumed.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: calculate from collected rearing-manure nitrogen and applicable pathway method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Handle and weigh living birds (`handover`)

#### Inputs

##### Product flows

###### Living birds entering final handling (`birds_for_handover`)

Reconcile accepted live arrivals from breeder or rearing nodes.

- Selected flow: Living ostriches, emus and rheas
- Flow property / unit: Mass / kg
- Amount rule: weigh birds received from breeding or rearing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_birds`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unprocessed living ratites at farm gate (`farm_gate_birds`)

This fixed identity requires a producing farm gate, living unprocessed state and CPC 02193 scope.

- Selected flow: Ostriches and emus `0473347d-8c43-410f-bce0-d5d7a7041de8`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: weigh accepted living birds at producing farm gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_birds`
- Range: Exact reference mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Birds dying before acceptance (`handover_mortality`)

Birds dying before acceptance are waste, never part of the living reference output.

- Selected flow: Dead birds
- Flow property / unit: Mass / kg
- Amount rule: record dead birds before acceptance separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final live-bird output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional non-negative completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live output
  - Basis: per kg final live-bird output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | Eggs, chicks, living culls | First separate divisible processes; for genuinely joint independent outputs use measured output mass, with documented egg mass conversion, for residual burden and report economic sensitivity when values materially differ. Internal transfers are not final co-products. | `fao-ostrich-systems` |
| `a_periods` | Breeders and long-lived assets | Assign inputs, replacement, eggs and live outputs to actual breeder seasons; distribute shared assets by consuming node and measured service period without duplication. | `fao-ostrich-farming`; `aus-ratite-industry` |
| `a_residue` | Mortality, manure and feathers | Dead birds, discarded manure, failed eggs and incidental feathers get no invented co-product credit; usable manure or feathers qualify only at demonstrated independent product handover. | `fao-ostrich-farming` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_birds` | breeder; incubation; rearing; handover | living bird movements | flock ledger | species; stage; heads; live kg; origin; final gate; dates | scale and movement log | bird; kg | each movement | all cohorts | all nodes | reconcile opening, purchased, hatched, sold, culled, dead, closing | calibrated scale and transfer records |
| `cp_feed` | breeder; rearing | feed and grazing | store and pasture log | delivery; stock; loss; grazing days; species; stage | invoice and feed store | kg | monthly | full cycle | all feed users | delivery minus stock delta and loss | invoice and stock sheets |
| `cp_eggs` | breeder; incubation | egg disposition | egg ledger | laid; purchased; incubated; sold; rejected; closing; batch | nest and incubator log | egg; kg | each batch | breeder season | all nests and incubators | balance egg destinations | batch records |
| `cp_utilities` | breeder; incubation; rearing | water and energy | meter log | water; power; fuel; service period; node | meter and invoice | kg; kWh | monthly | full service period | all shared users | allocate measured use once | meter and invoices |
| `cp_waste` | breeder; incubation; rearing; handover | waste and emissions | disposal/manure log | dead kg; rejected egg kg; manure kg; N content; management pathway | weighing, disposal tickets and N analysis | kg | batch or month | whole cohort | all nodes | segregate product and waste; calculate pathway emission | tickets and analysis |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_mass` | Final live birds | Sum measured accepted living mass at one actual final gate; divide inventories by those kg. | `cp_birds` | kg | `un-cpc-2025` |
| `c_balance` | Egg and bird cohorts | Eggs: opening+laid+purchased=incubated+sold+rejected+closing; birds: opening+hatched+purchased=sold+culled+dead+closing. | `cp_birds`; `cp_eggs` | balanced counts | `fao-ostrich-systems` |
| `c_air` | Manure N2O | Calculate from collected manure N and a sourced species- and pathway-applicable method; the UUID is not an emission factor. IPCC ostrich data must not be silently generalized to emus or rheas. | `cp_waste` | kg N2O | `ipcc-livestock-2019` |
| `c_nh3` | Manure NH3 | Calculate separately from collected manure N only after an applicable species- and pathway-specific method is identified and disclosed; absent that method, keep the amount unresolved rather than substitute an ostrich default. | `cp_waste` | kg NH3 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Every lot | Record species, stage, count, live mass, actual gate and time; hatchery gate cannot stand for farm gate. | `cp_birds` |
| `dq_route` | Production modes | Keep separate feed, grazing, housing, utilities, mortality and manure evidence; no universal ratite yield. | `cp_feed`; `cp_utilities`; `cp_waste` |
| `dq_allocation` | Multiple outputs, periods, assets | Retain independent handover, service-period and consuming-node evidence; prohibit double burden. | `cp_birds`; `cp_eggs`; `cp_utilities` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_identity` | Reference lot | Fail for dead/non-ostrich-emu-rhea birds, missing mass/count/gate, or hatchery gate using farm-gate UUID. | `un-cpc-2025` |
| `v_balance` | Egg and bird cohorts | Reconcile egg/bird balances by species and stage, internal transfers and death destinations; only one final gate. | `fao-ostrich-systems` |
| `v_route` | Alternative modes | Verify managed biological parent and current inventory-delta evidence for extensive, semi-intensive and intensive modes. | `fao-ostrich-systems`; `aus-ratite-industry` |
| `v_alloc` | Outputs, periods, assets | Verify actual handovers, allocation method, breeder seasons and shared service periods; no double attribution of eggs, chicks, culls or assets. | `fao-ostrich-farming` |
| `v_range` | All inventory cards | Provisional QA ranges are non-negative completeness screens, not factors or substitutes for observation. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Living ratite foreground package |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Producer live-ratite dataset with stated species, stage, route and actual gate |
| excluded_use | Slaughter, meat, hide/oil, universal factors, unsupported hatchery-to-farm substitution |
| required_metadata | Species, count, live mass, stage, route, origin, gate, periods, output destinations |
| required_quality_disclosure | Egg/bird balances, measurement coverage, mortality, manure pathway, allocation and unbound identities |
| update_trigger | Material change in species boundary, route, gate, UUID or factor evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC identity including rheas |
| `fao-ostrich-farming` | literature | https://www.fao.org/4/v6200t/v6200t02.htm | Breeding, eggs and independent products |
| `fao-ostrich-systems` | literature | https://www.fao.org/4/x2370e/x2370e.pdf | Route topology, hatch, growth and rhea comparison |
| `aus-ratite-industry` | official_guidance | https://www.agriculture.gov.au/sites/default/files/sitecollectiondocuments/animal-plant/animal-health/livestock-movement/structure-poultry-ratite-ind.pdf | Emu and ratite industry |
| `ipcc-livestock-2019` | method_factor | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Pathway-specific manure method, not universal factor |
