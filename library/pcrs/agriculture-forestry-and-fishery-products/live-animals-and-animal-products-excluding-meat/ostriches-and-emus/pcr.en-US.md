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

Raw quantity and calculation requirements: Use separate feed-supply, intake and loss ledgers under calc_feed_supply_and_intake. The quantity carrying feed-production burden includes in-boundary refusals, spoilage and uneaten feed; it is not reduced to animal intake. Retain source, species/cohort, phase and original mass/moisture basis. Calculate the final contribution with inventory_reference_normalization and stage_throughput_linkage exactly once. Original collection denominator kind: reference_flow.

- Selected flow: Species-specific feed and forage
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
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

###### Manure biogenic methane to air (`review_breeder_manure_ch4`)

Calculate actual atmospheric release by manure system, climate, residence time and volatile-solids activity. Reconcile captured, destroyed or oxidised methane; produced methane is not automatically emitted methane. Applies only to the operated `breeder` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Methane, biogenic, to air (UUID unresolved)
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `ipcc-livestock-2019`

###### Direct manure nitrous oxide to air (`review_breeder_direct_n2o`)

Use the actual manure-management nitrogen pathway. Keep storage/treatment distinct from field application and grazing deposition, which require a managed-soil method and an explicitly assigned inventory responsibility. Applies only to the operated `breeder` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `ipcc-livestock-2019`

###### Indirect manure nitrogen-derived nitrous oxide to air (`review_breeder_indirect_n2o`)

Calculate attributable indirect N2O from documented manure N volatilisation/deposition and leaching/runoff pathways where applicable. Keep separate from direct N2O and reconcile any nitrogen-fate calculation already included downstream or in the chosen background/impact model. Applies only to the operated `breeder` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `ipcc-livestock-2019`

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

###### Electricity at the equipment supply point (`incubation_energy_electricity`)

**Collection scope and applicability for incubation_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Include operated incubation, ventilation and lighting energy by actual batch.
Denominator and scope requirements：per kg final live-bird output
Raw quantity and calculation requirements: meter energy by batch and service period Original collection denominator kind: reference_flow.

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
- Sources: `fao-agricultural-energy`

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

Raw quantity and calculation requirements: Use separate feed-supply, intake and loss ledgers under calc_feed_supply_and_intake. The quantity carrying feed-production burden includes in-boundary refusals, spoilage and uneaten feed; it is not reduced to animal intake. Retain source, species/cohort, phase and original mass/moisture basis. Calculate the final contribution with inventory_reference_normalization and stage_throughput_linkage exactly once. Original collection denominator kind: reference_flow.

- Selected flow: Species- and stage-specific feed
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
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

###### Electricity at the equipment supply point (`rearing_energy_electricity`)

**Collection scope and applicability for rearing_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Include only powered housing and ventilation services actually operated.
Denominator and scope requirements：per kg final live-bird output
Raw quantity and calculation requirements: meter actual powered services Original collection denominator kind: reference_flow.

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
- Sources: `fao-agricultural-energy`

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

Coverage of this single N2O card: use calc_manure_n2o_coverage to calculate direct and applicable indirect components separately for the represented node, then report only their non-overlapping molecular-N2O sum assigned to this card. Keep storage and managed-soil calculations distinct. Exclude components explicitly covered by a linked process, retain the coverage evidence, and do not duplicate them as both aggregate and component exchanges. Missing indirect-pathway evidence is not zero.

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: calculate from measured nitrogen and pathway-specific factor Original collection denominator kind: reference_flow.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
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

Coverage of this existing N2O card: retain separate direct-management and applicable indirect volatilisation/leaching calculations in cp_pathway_emissions, and sum only non-overlapping N2O releases assigned to this node. Do not hide an absent indirect-pathway estimate in a direct-only value. Convert raw N2O-N to kg N2O by 44/28 once.

###### Ammonia to air from rearing manure (`rearing_nh3_air`)

Calculate separately from the rearing manure nitrogen and actual management pathway; no universal ratite factor is assumed.

Denominator and scope requirements：per kg final live-bird output

Raw quantity and calculation requirements: calculate from collected rearing-manure nitrogen and applicable pathway method Original collection denominator kind: reference_flow.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
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

###### Manure biogenic methane to air (`review_rearing_manure_ch4`)

Calculate actual atmospheric release by manure system, climate, residence time and volatile-solids activity. Reconcile captured, destroyed or oxidised methane; produced methane is not automatically emitted methane. Applies only to the operated `rearing` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Methane, biogenic, to air (UUID unresolved)
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `ipcc-livestock-2019`

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

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_birds` | breeder; incubation; rearing; handover | living bird movements | flock ledger | species; stage; heads; live kg; origin; final gate; dates | scale and movement log; Raw aggregation requirements: reconcile opening, purchased, hatched, sold, culled, dead, closing. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | bird; kg | each movement | all cohorts | all nodes | per reference flow | calibrated scale and transfer records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed` | breeder; rearing | feed and grazing | store and pasture log | delivery; stock; loss; grazing days; species; stage ; unused returns/transfers; uneaten loss; actual intake; loss destination; moisture/DM| Feed input carrying upstream burden = opening stock + receipts - closing stock - documented unused returns or transfers out. Keep in-boundary spoilage and refusals in that input. Separately derive biological intake = that input - measured uneaten losses, with moisture/DM reconciliation; use intake, not purchased input, in animal metabolism calculations. Record each loss destination and include its treatment or manure contribution once. Preserve raw records and normalize attributed quantities to the accepted reference output once. | kg | monthly | full cycle | all feed users | per reference flow | invoice and stock sheets; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_eggs` | breeder; incubation | egg disposition | egg ledger | laid; purchased; incubated; sold; rejected; closing; batch | nest and incubator log; Raw aggregation requirements: balance egg destinations. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | egg; kg | each batch | breeder season | all nests and incubators | per reference flow | batch records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utilities` | breeder; incubation; rearing | water and energy | meter log | water; power; fuel; service period; node | meter and invoice; Raw aggregation requirements: allocate measured use once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kWh | monthly | full service period | all shared users | per reference flow | meter and invoices; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_waste` | breeder; incubation; rearing; handover | waste and emissions | disposal/manure log | dead kg; rejected egg kg; manure kg; N content; management pathway | weighing, disposal tickets and N analysis; Raw aggregation requirements: segregate product and waste; calculate pathway emission. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | batch or month | whole cohort | all nodes | per reference flow | tickets and analysis; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |
| `cp_pathway_emissions` | `breeder`; `rearing` | pathway-specific gases and manure N/C | herd, feed, manure, field and method ledger | species/class; animal-days; intake/DM/digestibility; volatile solids; manure N/TAN; system shares; climate; storage time; fertiliser N; grazing; volatilisation/leaching; methane recovery; factor source/unit; final accepted output ; collected manure wet mass; dry matter; destination| collect primary activity by node and period, document parameter applicability, retain each pathway worksheet and any linked treatment/pasture dataset  Retain raw totals and normalize attributed quantities once to the measured accepted final reference output.| animal-day; kg DM; kg VS; kg N; kg CH4; kg N2O; kg NH3 | each operating period and management change | complete represented cohort and service period | actual operated nodes only | per reference flow | meter/analysis records, nitrogen cascade, method and factor evidence, no-duplication ledger |
| `cp_feed_supply_and_intake` | `breeder`; `rearing` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `breeder`; `rearing` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_mass` | Final live birds | Sum measured accepted living mass at one actual final gate; divide inventories by those kg. | `cp_birds` | kg | `un-cpc-2025` |
| `c_balance` | Egg and bird cohorts | Eggs: opening+laid+purchased=incubated+sold+rejected+closing; birds: opening+hatched+purchased=sold+culled+dead+closing. | `cp_birds`; `cp_eggs` | balanced counts | `fao-ostrich-systems` |
| `c_air` | Manure N2O | Calculate from collected manure N and a sourced species- and pathway-applicable method; the UUID is not an emission factor. IPCC ostrich data must not be silently generalized to emus or rheas. | `cp_waste` | kg N2O | `ipcc-livestock-2019` |
| `c_nh3` | Manure NH3 | Calculate separately from collected manure N only after an applicable species- and pathway-specific method is identified and disclosed; absent that method, keep the amount unresolved rather than substitute an ostrich default. | `cp_waste` | kg NH3 |  |
| `calc_feed_input_and_intake` | Feed supply and biological intake | Feed input carrying upstream burden = opening stock + receipts - closing stock - documented unused returns or transfers out. Keep in-boundary spoilage and refusals in that input. Separately derive biological intake = that input - measured uneaten losses, with moisture/DM reconciliation; use intake, not purchased input, in animal metabolism calculations. Record each loss destination and include its treatment or manure contribution once. | `cp_feed` | separate kg feed input, intake and loss by cohort | `review-fao-pig-lca-2018` |
| `calc_pathway_emissions` | `breeder`; `rearing` | Use species- and management-compatible methods and retain disaggregated pathway totals. Convert N2O-N to N2O by 44/28 and NH3-N to NH3 by 17/14 exactly once; already molecular masses are not reconverted. Check methane against the documented available-carbon/methane-potential balance and nitrogen losses against each stage's available N. Indirect formation from previously volatilised N is a downstream transformation, not a second source-stage N loss. Attribute and normalize once; do not duplicate linked treatment or fate-model emissions.  Use matched raw-period quantities before allocation for physical screens: CH4 mass × 12/16 must not exceed the carbon available to the represented pathway; source-stage NH3 mass × 14/17 plus direct N2O mass × 28/44 and other source N losses must not exceed that stage's available N, after accounting for stocks and transfers. Bound each indirect N2O-N calculation by its documented volatilised or leached N precursor, not by subtracting that downstream transformation again from the source ledger. These are conservation checks, not emission factors or an empirical per-product range.| `cp_pathway_emissions` | kg named compound per final reference flow | `ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `breeder_feed`; `rearing_feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `review-fao-pig-lca-2018` |
| `calc_manure_n2o_coverage` | `review_breeder_direct_n2o`; `review_breeder_indirect_n2o`; `manure_n2o_air` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `ipcc-livestock-2019`; `review-ipcc-soils-2019` |

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
| `v_feed_loss_burden` | Feed balances | Reject a feed-input inventory that subtracts in-boundary wastage without retaining its upstream burden. Match intake, losses, stocks and unused returns, and document the loss treatment; no automatic co-product credit. | `review-fao-pig-lca-2018` |
| `v_pathway_emission_coverage` | `breeder`; `rearing` | Require a pathway coverage ledger for enteric CH4 where biologically applicable, manure CH4, direct/indirect N2O, NH3 and relevant field emissions. Every pathway needs a measured/calculated value, a named linked process with matching coverage, or supported inapplicability; absent data cannot become zero. Keep wild life before capture outside managed husbandry, assess actual managed holding separately, and retain species-specific evidence. | `ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `review-fao-pig-lca-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `ipcc-livestock-2019`; `review-ipcc-soils-2019` |

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
| `review-fao-pig-lca-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains: Guidelines for assessment, section 11.2.2 and Appendix 2.13](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed-loss accounting and general LCA allocation hierarchy; extension to other taxa or reproductive products is this PCR's explicit methodological choice, not a pig parameter transfer |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Managed-soil direct and indirect nitrogen pathways and boundary reconciliation |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 nitrogen-flow method; verify actual species, management and geographical applicability before adopting parameters |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
