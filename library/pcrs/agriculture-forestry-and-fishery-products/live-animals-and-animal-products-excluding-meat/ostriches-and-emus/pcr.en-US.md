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
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Living ostriches, emus and rheas |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species; stage; count; live mass; actual gate; route; cohort; period; destination |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

The confirmed platform UUID applies only to the unprocessed live farm-gate card, not to the cross-gate reference or hatchery-gate chicks.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | Reference and live transfer | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh by species and stage and reconcile counts; do not use a universal count-to-mass factor. |
| `egg_count` | Egg handover | Count | egg | Reconcile laid, incubated, sold, rejected and closing eggs by batch. |
| `period` | Breeders and shared assets | Time | day or season | Index breeder, hatch, growth and asset service periods before attribution. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

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
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder` | Manage breeders and produce eggs | conditional | operated breeding flock | managed biological production | per kg final live bird |
| `incubation` | Collect eggs and hatch chicks | conditional | operated incubation or hatchery handover | independent capture and incubation | per kg final live bird |
| `rearing` | Grow living young ratites | conditional | grow-out after hatch or purchase | managed biological growth with route delta | per kg final live bird |
| `handover` | Handle and weigh living birds | conditional | final farm-gate lot; hatchery-only final lots end at incubation | independent live handling and handover | per kg final live bird |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

Egg collection/incubation independently transfers the breeder's output to living chicks; final live handling is independent of growth. Hatchery chicks and farm-gate birds are mutually exclusive final gates per lot. Extensive, semi-intensive and intensive modes may coexist by phase, but feed, grazing, housing, utility and manure inventory deltas need evidence, not just route labels. Link breeder seasons, egg batches, growth cohorts, replacements, culls and shared-asset service periods.

### Process: Manage breeders and produce eggs (`breeder`)

#### Inputs

##### Product flows

###### Breeding birds received (`breeders`)

Purchased breeding birds carry upstream burden; opening stock is a declared starting condition.

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: weigh purchased birds by species Original collection denominator kind: reference_flow.

- Selected flow: Live ostrich, emu or rhea breeders
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: record delivered feed less stock change and loss Original collection denominator kind: reference_flow.

- Selected flow: Species-specific feed and forage
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: meter actual water by use where possible Original collection denominator kind: reference_flow.

- Selected flow: Supplied water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: count eggs transferred to hatchery Original collection denominator kind: reference_flow.

- Selected flow: Fertile ratite eggs
- Flow property / unit: Count / egg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: count eggs actually sold separately Original collection denominator kind: reference_flow.

- Selected flow: Saleable ratite eggs
- Flow property / unit: Count / egg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: weigh live culled birds at separate handover Original collection denominator kind: reference_flow.

- Selected flow: Living culled ratites
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: record stream-specific disposal mass Original collection denominator kind: reference_flow.

- Selected flow: Dead birds and discarded manure
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
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

##### Elementary flows

###### Ammonia to air from breeder manure (`breeder_nh3_air`)

Record breeder-manure nitrogen and actual management pathway; the flow UUID supplies identity, not a factor.

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: calculate from collected manure nitrogen and an applicable pathway-specific method Original collection denominator kind: reference_flow.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: count by source and species; link once Original collection denominator kind: reference_flow.

- Selected flow: Fertile ratite eggs
- Flow property / unit: Count / egg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: meter energy by batch and service period Original collection denominator kind: reference_flow.

- Selected flow: Energy carriers
- Flow property / unit: Energy / kWh
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: weigh and count accepted living chicks Original collection denominator kind: reference_flow.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Live ratite chicks (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: weigh rejected streams by destination Original collection denominator kind: reference_flow.

- Selected flow: Rejected eggs and dead chicks
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
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

##### Elementary flows

### Process: Grow living young ratites (`rearing`)

#### Inputs

##### Product flows

###### Live young birds entering rearing (`incoming_chicks`)

Carry inherited breeder/hatchery or purchased burden into rearing once.

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: weigh and count inherited or purchased birds Original collection denominator kind: reference_flow.

- Selected flow: Living young ratites
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: record feed and grazing share by route Original collection denominator kind: reference_flow.

- Selected flow: Species- and stage-specific feed
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: meter supplied water by cohort Original collection denominator kind: reference_flow.

- Selected flow: Supplied water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: meter actual powered services Original collection denominator kind: reference_flow.

- Selected flow: Energy carriers
- Flow property / unit: Energy / kWh
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: weigh living birds transferred to handover Original collection denominator kind: reference_flow.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Living ostriches, emus and rheas
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: record disposal by stream and destination Original collection denominator kind: reference_flow.

- Selected flow: Dead birds and discarded manure
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
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

##### Elementary flows

###### Nitrous oxide to air from managed manure (`manure_n2o_air`)

The fixed UUID identifies nitrous oxide to air only; quantity needs species/pathway evidence.

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: calculate from measured nitrogen and pathway-specific factor Original collection denominator kind: reference_flow.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: calculate from collected rearing-manure nitrogen and applicable pathway method Original collection denominator kind: reference_flow.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: weigh birds received from breeding or rearing Original collection denominator kind: reference_flow.

- Selected flow: Living ostriches, emus and rheas
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: weigh accepted living birds at producing farm gate Original collection denominator kind: reference_flow.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Ostriches and emus `0473347d-8c43-410f-bce0-d5d7a7041de8`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
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

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: record dead birds before acceptance separately Original collection denominator kind: reference_flow.

- Selected flow: Dead birds
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
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

##### Elementary flows

### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Living ostriches, emus and rheas for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `hatchery_chicks`, `grown_birds`, `farm_gate_birds` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `hatchery_chicks`, `grown_birds`, `farm_gate_birds`

Required product-instance qualifiers: Species; stage; count; live mass; actual gate; route; cohort; period; destination

- Selected flow: Living ostriches, emus and rheas for actual producer-handover linkage
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

###### Living ostriches, emus and rheas (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `hatchery_chicks`, `grown_birds`, `farm_gate_birds`

Required product-instance qualifiers: Species; stage; count; live mass; actual gate; route; cohort; period; destination

- Selected flow: Living ostriches, emus and rheas
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
| `a_outputs` | Eggs, chicks, living culls | First separate divisible processes; for genuinely joint independent outputs use measured output mass, with documented egg mass conversion, for residual burden and report economic sensitivity when values materially differ. Internal transfers are not final co-products. | `fao-ostrich-systems` |
| `a_periods` | Breeders and long-lived assets | Assign inputs, replacement, eggs and live outputs to actual breeder seasons; distribute shared assets by consuming node and measured service period without duplication. | `fao-ostrich-farming`; `aus-ratite-industry` |
| `a_residue` | Mortality, manure and feathers | Dead birds, discarded manure, failed eggs and incidental feathers get no invented co-product credit; usable manure or feathers qualify only at demonstrated independent product handover. | `fao-ostrich-farming` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_birds` | breeder; incubation; rearing; handover | living bird movements | flock ledger | species; stage; heads; live kg; origin; final gate; dates | scale and movement log; Raw aggregation requirements: reconcile opening, purchased, hatched, sold, culled, dead, closing. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | bird; kg | each movement | all cohorts | all nodes | per reference flow | calibrated scale and transfer records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed` | breeder; rearing | feed and grazing | store and pasture log | delivery; stock; loss; grazing days; species; stage | invoice and feed store; Raw aggregation requirements: delivery minus stock delta and loss. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | monthly | full cycle | all feed users | per reference flow | invoice and stock sheets; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_eggs` | breeder; incubation | egg disposition | egg ledger | laid; purchased; incubated; sold; rejected; closing; batch | nest and incubator log; Raw aggregation requirements: balance egg destinations. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | egg; kg | each batch | breeder season | all nests and incubators | per reference flow | batch records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utilities` | breeder; incubation; rearing | water and energy | meter log | water; power; fuel; service period; node | meter and invoice; Raw aggregation requirements: allocate measured use once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kWh | monthly | full service period | all shared users | per reference flow | meter and invoices; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_waste` | breeder; incubation; rearing; handover | waste and emissions | disposal/manure log | dead kg; rejected egg kg; manure kg; N content; management pathway | weighing, disposal tickets and N analysis; Raw aggregation requirements: segregate product and waste; calculate pathway emission. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | batch or month | whole cohort | all nodes | per reference flow | tickets and analysis; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |

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
