---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.asses
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Living asses

## 1. Scope and Applicability

This PCR covers living asses (donkeys) produced by a breeder or rearer and handed over alive at the actual producer gate. A breeder may sell a foal, while a rearer may sell an older animal; these are distinct final handovers, not successive sales credited as two outputs of one lot. It excludes horses, mules, hinnies, dead animals, meat, milk and downstream draft, transport or riding services. Declare species/lineage, sex, age or production class, head count, measured live mass, intended use, condition, route, period and actual gate. Purchased animals carry their preceding production burden. Retained animals used for farm work are a separately evidenced service case, not an assumed co-product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.asses` |
| classification_refs | CPC 3.0 `02132`, Asses |
| covered_products | Living asses at breeder-foal or rearer/seller producer handover |
| excluded_products | Horses; mules and hinnies; carcasses, meat and milk; downstream animal work or transport services |
| representative_product | An alive, weighed ass at its declared producer gate |
| production_route | Managed breeding and foaling, conditional young-animal rearing, followed by independent live gathering, inspection and handover. Grazing-led and stable/feed-led management share the biological parent but change feed sourcing, bedding, housing energy, water and manure placement/measurement. Both may operate within one cohort or period; disclose their measured shares rather than assign a label. |
| market_state | Living, unprocessed ass with condition, class, sex, count and live mass declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living ass at actual breeder, rearer or seller producer handover |
| How much | 1 kg measured live mass; also report head count and measured class-specific kg/head |
| How well | Alive and unprocessed with lineage, class, sex, intended use and condition recorded |
| How long or cycle | Declared mating/foaling season or rearing cohort; index breeder, young-animal and shared-asset service periods |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Living ass at declared producer gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Lineage/species; sex; foal/young/adult class; head count; measured kg/head; condition; intended use; breeding or rearing route; actual producer gate; geography and cohort period |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

The reference intentionally spans producer gates. The confirmed CPC 02132 farm-gate Product identity is restricted to a matching farm-gate final output card, never a generic foal transfer or the multi-gate reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | Reference and animal transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the lot or a documented representative class sample; reconcile head count and kg/head. Never infer mass from count using a universal ass weight. |
| `head_balance` | Breeding and rearing cohorts | Count | head | Reconcile opening, purchased, born, transferred, sold, dead and closing animals by class and period. |
| `period_basis` | Breeders and shared assets | Time | days or seasons | Date mating, gestation, foaling, growth, replacement and final handover; apportion recurring loads only over actual service. |
| `manure_basis` | Exported manure and managed waste | Mass | kg | Distinguish sold/used manure, collected disposal and grazing deposition, recording wet/dry basis and destination. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Opening breeding asses or purchased foals/young asses entering the first operated node, with origin, age, count, live mass and inherited burden |
| starting_condition_role | An opening foreground herd or upstream Product input, never a presumed zero-burden animal |
| product_classification_scope | CPC 3.0 `02132` living asses only |
| recursive_input_rule | Link purchased live asses once to an upstream dataset at the true preceding gate; an internal foal transfer is not a second final sale or fresh external input. |
| upstream_dataset_requirement | Match purchased animals, feed, water, energy, materials and services to actual source, unit, technology and geography. |
| disclosure | Operated nodes, pasture/stable shares, breeder and rearing periods, shared assets, animal deaths/culls, manure destinations and the precise live handover gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_live_ass` | All routes | Stop at living-ass producer handover; exclude slaughter, meat/milk processing and post-handover work services. A lost or dead animal is not a live product. | `un-cpc-2025`; `fao-working-equids` |
| `boundary_breeding` | Operated breeder | Include jack/jenny upkeep, mating, gestation, foaling and nursing when performed; purchased breeding animals retain prior burden. | `fao-working-equids` |
| `boundary_route` | Grazing and stabled management | Disclose actual feed, grazing, bedding, energy, water and manure pathways by mode and period; a stabled label alone is not a changed inventory. | `fao-working-equids`; `ipcc-livestock-2019` |
| `boundary_shared` | Shared infrastructure | Assign shelter, fencing, water and handling assets to all consuming breeder, rearing and handover nodes/periods by metered use or documented animal-days; prevent double attribution. | `fao-working-equids` |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeding` | Breed and nurse live ass foals | conditional | Operated jack/jenny breeding and foaling; otherwise upstream purchased young ass | Managed biological production with foal handoff | per kg live foals leaving breeder |
| `rearing` | Rear living asses | conditional | Older-ass producer handover or purchased-foal growth | Managed growth with grazing/stable inventory delta | per kg living asses leaving rearer |
| `handover` | Gather, assess and hand over living asses | required | Final breeder-foal or rearing-farm sale | Independent live collection and acceptance, loss reconciliation and gate measurement | per kg accepted living ass at final gate |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

Gathering and acceptance are independent from growth: they establish the final live product state and gate, and separate rejected/dead animals from saleable animals. Each lot has one final route, although pasture and housed management can coexist within its history. Record mating/gestation, foaling, nursing, rearing, asset service, replacement and disposition periods.

### Process: Breed and nurse live ass foals (`breeding`)

#### Inputs

##### Product flows

###### Purchased breeding asses (`breeder_stock`)

Count purchased jennies and jacks only when they cross into this breeding boundary; opening owned stock is the declared starting condition.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: measured received live mass with upstream burden and count Original collection denominator kind: process_output.

- Selected flow: Purchased live breeding asses (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Nonnegative breeder-stock completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder; upper is a permissive data-error screen, not a typical value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeding-herd feed and supplied forage (`breeder_feed`)

Measure purchased and own-produced feed separately; grazed forage is not automatically a purchased Product input.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: issued feed minus inventory change and recorded losses, disaggregated by kind Original collection denominator kind: process_output.

- Selected flow: Breeding-ass feed and forage (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Range: Nonnegative feed completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied breeder water (`breeder_water`)

Record delivered drinking and cleaning water; rainfall on pasture is not a purchased Product input.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: meter or delivery records allocated to breeder animal-days Original collection denominator kind: process_output.

- Selected flow: Supplied water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Nonnegative water completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder shelter energy (`breeder_energy`)

Record actual electricity, heat or fuel by carrier only where the shelter or water system uses it.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: meter or purchased carrier quantity converted to energy by recorded carrier factor Original collection denominator kind: process_output.

- Selected flow: Breeder energy carrier (UUID unresolved)
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Nonnegative energy completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kWh/kg live foals
  - Basis: per kg live foals leaving breeder; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine purchased waste input is prescribed; record any imported waste actually used with separate authorization and identity.

##### Elementary flows

Pasture occupation is recorded as land-use activity with location, area and time; it is not invented as a purchased feed flow.

#### Outputs

##### Product flows

###### Live foals leaving breeder (`breeder_foals`)

Track living foals leaving the breeder stage. An internal transfer enters rearing once; a direct breeder-gate sale is the final product only after the handover node.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: measured accepted live mass with foal head count Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Living ass foals at breeder stage (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Foal output mass balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder; output is 1 when this node is operated and denominator nonzero
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold live breeder culls (`breeder_culls`)

Only an actual live cull sold separately is a co-product; mortality is not.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: weighed live culls at their own handover, zero if absent Original collection denominator kind: process_output.

- Selected flow: Living culled breeding asses (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Nonnegative cull balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Breeder manure sent to waste treatment (`breeder_manure_waste`)

Record only collected manure sent to disposal/treatment as waste; export as a documented useful product is a separate actual output and cannot share this row.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: weighed or measured as-received collected manure with destination Original collection denominator kind: process_output.

- Selected flow: Collected ass manure waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Nonnegative manure transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Breeder-enteric methane to air (`breeder_ch4`)

Calculate only for the actual ass classes and feeding/productivity regime, using a documented applicable method. IPCC Mules/Asses parameters are stratified, not a universal factor.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: animal-days by class multiplied by a justified class and regime factor Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Nonnegative calculated emission screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder manure methane to air (`breeder_manure_ch4`)

Calculate for on-site stored or treated manure only where its actual management path produces methane; externally transferred manure emissions belong to the treatment dataset.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: class-specific excretion activity times justified manure-system methane factor Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air from manure `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Nonnegative manure methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder manure nitrous oxide to air (`breeder_manure_n2o`)

Calculate direct nitrous oxide from recorded storage, treatment or grazing deposition where the chosen method covers it; keep indirect nitrogen pathways separate and avoid double counting exported manure.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: pathway-specific nitrogen or excretion activity times justified direct N2O factor Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide to air from manure `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Nonnegative manure nitrous-oxide screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Rear living asses (`rearing`)

#### Inputs

##### Product flows

###### Live young asses entering rearing (`young_ass_input`)

Accept internal foals once or purchased young animals with their upstream burdens and actual preceding gate.

Denominator and scope requirements：per kg live asses leaving rearing

Raw quantity and calculation requirements: weighed incoming live mass, by class and source Original collection denominator kind: process_output.

- Selected flow: Living young asses entering rearing (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Nonnegative incoming-animal screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live asses
  - Basis: per kg live asses leaving rearing; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing feed and forage (`rearing_feed`)

Separate delivered concentrate and harvested forage from pasture intake; document any own-grown feed upstream allocation.

Denominator and scope requirements：per kg live asses leaving rearing

Raw quantity and calculation requirements: issued feed by class and period, adjusted for stocks and losses Original collection denominator kind: process_output.

- Selected flow: Young-ass feed and forage (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Range: Nonnegative feed completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live asses
  - Basis: per kg live asses leaving rearing; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied rearing water (`rearing_water`)

Measure drinking and cleaning water delivered to the rearing animals by actual route and period.

Denominator and scope requirements：per kg live asses leaving rearing

Raw quantity and calculation requirements: metered or recorded supplied water attributed by animal-days Original collection denominator kind: process_output.

- Selected flow: Supplied water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Nonnegative water completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live asses
  - Basis: per kg live asses leaving rearing; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Housing bedding and care materials (`rearing_materials`)

Record bedding and veterinary consumables by material when stabling or treatment actually occurs; no universal per-head package is assumed.

Denominator and scope requirements：per kg live asses leaving rearing

Raw quantity and calculation requirements: materials issued to rearing lot and period Original collection denominator kind: process_output.

- Selected flow: Ass bedding and care material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Range: Nonnegative material completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live asses
  - Basis: per kg live asses leaving rearing; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing shelter energy (`rearing_energy`)

Record actual energy carrier and shared shelter service; pasture-only periods may have zero shelter energy.

Denominator and scope requirements：per kg live asses leaving rearing

Raw quantity and calculation requirements: meter or carrier purchase and actual service allocation Original collection denominator kind: process_output.

- Selected flow: Rearing energy carrier (UUID unresolved)
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Nonnegative energy completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kWh/kg live asses
  - Basis: per kg live asses leaving rearing; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No imported waste feedstock is prescribed for young asses.

##### Elementary flows

Record grazing land occupation by area, place and time where relevant; do not infer it from feed purchase alone.

#### Outputs

##### Product flows

###### Rearing-stage living asses (`reared_asses`)

The live animal at the rearing-stage exit proceeds to final inspection and handover, not a separate final lot credit.

Denominator and scope requirements：per kg live asses leaving rearing

Raw quantity and calculation requirements: weighed living exit animals and head count Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Living asses leaving rearing (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Rearing output mass balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg live asses
  - Basis: per kg live asses leaving rearing; output is 1 when node operated
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rearing manure sent to waste treatment (`rearing_manure_waste`)

Only collected manure sent as waste belongs here; document grazing deposits and any actually sold useful manure separately.

Denominator and scope requirements：per kg live asses leaving rearing

Raw quantity and calculation requirements: collected as-received manure with destination and moisture basis Original collection denominator kind: process_output.

- Selected flow: Collected ass manure waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Nonnegative manure transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live asses
  - Basis: per kg live asses leaving rearing; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Rearing enteric methane to air (`rearing_ch4`)

Calculate for actual young-ass animal-days, diet and productivity class; do not reuse an unqualified species-aggregate number.

Denominator and scope requirements：per kg live asses leaving rearing

Raw quantity and calculation requirements: animal-days times justified Mules/Asses category and regime factor Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Nonnegative calculated emission screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live asses
  - Basis: per kg live asses leaving rearing; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing manure methane to air (`rearing_manure_ch4`)

Calculate for actual on-site manure storage or treatment, with climate and management system recorded; do not claim off-site treatment emissions here.

Denominator and scope requirements：per kg live asses leaving rearing

Raw quantity and calculation requirements: pathway-specific excretion activity times justified methane factor Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air from manure `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Nonnegative manure methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live asses
  - Basis: per kg live asses leaving rearing; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing manure nitrous oxide to air (`rearing_manure_n2o`)

Calculate direct nitrous oxide from documented manure storage and grazing deposition with the relevant nitrogen and climate/pathway data; do not treat ammonia or indirect N2O as this direct flow.

Denominator and scope requirements：per kg live asses leaving rearing

Raw quantity and calculation requirements: pathway-specific excretion nitrogen times justified direct N2O factor Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide to air from manure `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Nonnegative manure nitrous-oxide screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg live asses
  - Basis: per kg live asses leaving rearing; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Gather, assess and hand over living asses (`handover`)

#### Inputs

##### Product flows

###### Living asses arriving for final inspection (`handover_animals`)

Accept foals directly from breeding or older asses from rearing, once per lot, with actual mass and history.

Denominator and scope requirements：per kg accepted living ass at final gate

Raw quantity and calculation requirements: measured arriving live mass and count Original collection denominator kind: process_output.

- Selected flow: Living asses before producer handover (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Nonnegative arrival balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg accepted living ass
  - Basis: per kg accepted living ass at final gate; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Handling water (`handover_water`)

Record only separately metered or defensibly allocated water used during gathering, inspection and holding.

Denominator and scope requirements：per kg accepted living ass at final gate

Raw quantity and calculation requirements: allocated actual supplied water by accepted live mass Original collection denominator kind: process_output.

- Selected flow: Handover supplied water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Nonnegative utility completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg accepted living ass
  - Basis: per kg accepted living ass at final gate; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Handling energy (`handover_energy`)

Record electricity or other measured carrier actually used for gathering, inspection or holding, without assuming powered equipment exists at every site.

Denominator and scope requirements：per kg accepted living ass at final gate

Raw quantity and calculation requirements: allocated metered carrier energy by accepted live mass Original collection denominator kind: process_output.

- Selected flow: Handover energy carrier (UUID unresolved)
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Nonnegative energy completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kWh/kg accepted living ass
  - Basis: per kg accepted living ass at final gate; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input is prescribed at the live handover node.

##### Elementary flows

No default elementary input is assumed for inspection; record actual direct resource occupation separately where material.

#### Outputs

##### Product flows

###### Accepted living asses at producer farm gate (`live_ass_handover`)

This card is the concrete farm-gate case. For a nonmatching breeder/seller gate, keep the flow UUID unresolved and identify the actual gate in the foreground package.

Denominator and scope requirements：per kg accepted living ass at final gate

Raw quantity and calculation requirements: accepted weighed live mass, with reconciled head count and class Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Asses, live and unprocessed, production mix at farm gate `40fd68b3-1ea0-4828-8532-f64140fc3ea3`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Final live output normalization check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg accepted living ass
  - Basis: per kg accepted living ass at matching farm gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dead or rejected animals requiring disposal (`handover_losses`)

Only dead animals or material requiring disposal are waste; a living rejected animal returned to rearing remains an internal animal transfer.

Denominator and scope requirements：per kg accepted living ass at final gate

Raw quantity and calculation requirements: measured disposed mass, fate and reason Original collection denominator kind: process_output.

- Selected flow: Dead-animal disposal waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses`
- Range: Nonnegative disposal screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg accepted living ass
  - Basis: per kg accepted living ass at final gate; upper flags unit errors only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default emission is generated by a living sale. Continue to record actual direct emissions from any on-site handling fuel in its operating node.

### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Living ass at declared producer gate for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `breeder_foals`, `reared_asses`, `live_ass_handover` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `breeder_foals`, `reared_asses`, `live_ass_handover`

Required product-instance qualifiers: Lineage/species; sex; foal/young/adult class; head count; measured kg/head; condition; intended use; breeding or rearing route; actual producer gate; geography and cohort period

- Selected flow: Living ass at declared producer gate for actual producer-handover linkage
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

###### Living ass at declared producer gate (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `breeder_foals`, `reared_asses`, `live_ass_handover`

Required product-instance qualifiers: Lineage/species; sex; foal/young/adult class; head count; measured kg/head; condition; intended use; breeding or rearing route; actual producer gate; geography and cohort period

- Selected flow: Living ass at declared producer gate
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

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_live_outputs` | Breeder and rearer | Keep foal, older ass and independently sold live cull as distinct output lots at their own gates. First attempt process subdivision and measured burden assignment; if inseparable joint burden remains, disclose a justified physical causal key (animal-days, feed use or live-mass gain) and sensitivity to another plausible key. Never count an internal transfer twice. | `fao-working-equids`; `iso-14044` |
| `alloc_manure` | Manure | Collected exported useful manure is a co-product only with actual quality, quantity and handover evidence; disposal manure is waste and grazing deposition is an in-situ pathway. Avoid assumed credit for all excretion. | `ipcc-livestock-2019`; `iso-14044` |
| `alloc_period` | Breeder herd | Allocate jack/jenny upkeep across measured service periods and foal cohorts, including replacements, deaths and culls; state treatment of cohorts spanning reporting years. Never amortize by an assumed universal lifespan. | `fao-working-equids`; `iso-14044` |
| `alloc_shared` | Shelter, fence, water and handling assets | Identify each consuming breeder/rearing/handover node and service period. Use metered service or documented animal-days/occupied capacity as a causal key, with one shared burden ledger and no duplicate assignment. | `iso-14044` |
| `alloc_work` | Retained working ass | If on-farm work is actually delivered, measure its service and partition only causally attributable feed/asset burdens from saleable live-animal production. Downstream third-party work after sale is excluded. | `fao-working-equids`; `iso-14044` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | breeding; rearing; handover | animal input, transfer, final output, cull | herd and sale ledger | animal id, lineage, sex, age/class, source, destination, status, count, weighed mass, date | scale and reconciled movement register; Raw aggregation requirements: reconcile head and mass by class, gate and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each event | full cohort | all operated nodes | per reference flow | calibrated scale, sale records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed` | breeding; rearing | feed input | ration/stock ledger | feed kind, purchased/own origin, opening, issued, closing, waste, route, animal-days | weigh or verified purchase/stock reconciliation; Raw aggregation requirements: assign issued feed by class/animal-days. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each delivery; monthly close | full season/cohort | all managed animals | per reference flow | receipts, stock counts; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utilities` | breeding; rearing; handover | water and energy input | meter and service ledger | carrier, meter, water function, node, shared service, period | meter and documented allocation; Raw aggregation requirements: carrier-specific totals allocated once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kWh; MJ | meter interval | full operating period | all relevant nodes | per reference flow | invoices, meter logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_materials` | rearing | bedding/care inputs | issue and treatment log | material, mass, treatment, animal lot, date | weigh and medicine records; Raw aggregation requirements: sum by actual lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each use | full cohort | housed and treated animals | per reference flow | issue and veterinarian logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | breeding; rearing | waste/product manure | manure pathway ledger | collected mass, wet/dry basis, destination, grazing deposition, treatment | weigh and pathway records; Raw aggregation requirements: separate sale, disposal and in-situ fate. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each removal; monthly | full period | all husbandry nodes | per reference flow | removal ticket, land and sale log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_emissions` | breeding; rearing | calculated enteric/manure emissions | activity and factor file | animal-days, class, diet/productivity, climate, manure system, source factor, factor unit | regime-specific calculation from measured herd/pathway data; Raw aggregation requirements: calculate per class/pathway before sum. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head-day; kg gas | each reporting period | full breeding/rearing period | each cohort and manure route | per reference flow | source version and arithmetic audit; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_losses` | handover | rejected/dead animal | disposition log | animal id, cause, live/dead, mass, date, disposal/return destination | event log and mass record; Raw aggregation requirements: distinguish returned live animals from waste. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each event | full handover period | final lot | per reference flow | disposition record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass` | Live outputs | Sum measured kg by accepted animal/class at the declared gate; use measured sample mean × head count only with sample frame and uncertainty disclosed. | `cp_animals` | kg live reference and head/kg reconciliation | `fao-working-equids` |
| `calc_feed` | Managed production | Issued feed = opening + receipts − closing − documented losses; allocate own feed production once to the consuming node. | `cp_feed` | kg feed by class and period | `fao-working-equids` |
| `calc_emissions` | Enteric/manure pathways | Animal-days or measured excretion × explicitly selected Mules/Asses factor by productivity, climate and manure pathway, using consistent units; report uncertainty and do not substitute a flow UUID for a factor. | `cp_emissions`; `cp_manure` | kg specified substance to specified medium | `ipcc-livestock-2019` |
| `calc_shared` | Shared assets | One asset burden × measured consumer service share / sum of all service shares in each service period. | `cp_utilities`; `cp_animals` | nonduplicated burden by node | `iso-14044` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Every animal lot | Verify ass, not horse or hybrid, with class, sex, count, condition and actual producer gate. | herd, veterinary and handover records |
| `dq_mass` | Reference and transfers | Preserve scale calibration, sampling frame and head-to-mass reconciliation; no generic count conversion. | calibration and movement reconciliation |
| `dq_period` | Multi-period herd and assets | Cover breeder, gestation, foaling, rearing, cull and final output periods and all shared service consumers. | dated ledgers and burden schedule |
| `dq_factors` | Emissions | Name the exact IPCC or other justified factor stratum, version, gas/medium and compatible animal activity; identify missing data. | factor record and calculation audit |
| `dq_completeness` | All nodes | Explain zero or omitted flows, losses, manure destinations and any co-products or working service; reconcile internal transfers once. | inventory and output balance |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_ass_identity` | Reference | Reject horse/hybrid or unqualified live-animal mass, missing class/count/gate, and assumed kg/head conversion. | `un-cpc-2025` |
| `validate_route` | Process map | Require operated breeder or purchased young animal, conditional rearing, final handover and measured pasture/housed route fractions; reject route label without inventory delta or double final gate. | `fao-working-equids` |
| `validate_balance` | Herd and output set | Reconcile opening + purchase + birth − death − sale − closing by class/period; classify live culls, useful manure and work service only on actual evidence. | `fao-working-equids`; `iso-14044` |
| `validate_period_shared` | Herd and infrastructure | Link every phase, replacement and shared shelter/water/handling consumer to service periods; prevent duplicated burden on two cohorts or nodes. | `iso-14044` |
| `validate_emissions` | Direct gases | Require gas substance, receiving medium, actual animal productivity, climate/manure route and factor source. A generic Mules/Asses factor without stratum is insufficient. | `ipcc-livestock-2019` |
| `validate_bindings` | Concrete exchanges | Expand unresolved inputs from actual foreground records. Require verified exact UUID/property/unit/gate for every published exchange; an unresolved semantic card is not permission to fabricate an identity. | `iso-14044` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for living asses at declared producer gate |
| downstream_use | `secondary_dataset` and, where appropriate, `background_dataset` for process/lifecyclemodel construction |
| allowed_use | Matching ass lineage, animal class, producer gate, management route and geography with transparent period and burden attribution |
| excluded_use | Horse or hybrid production, meat/milk, downstream working service, slaughter-plant gate, or unspecified count-to-mass conversion |
| required_metadata | Ass lineage, sex, age/class, animal count, measured mass, condition, intended use, actual gate, site, period, pasture/housed mix, factor strata, upstream animal origins and co-output treatment |
| required_quality_disclosure | Measurement/sampling uncertainty, missing records, allocation choices, output/manure balance, emission factor applicability, exact flow binding coverage and unresolved identities |
| update_trigger | Changed animal boundary, handover gate, route mix, measured factors, source guidance or verified flow identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [UN CPC Ver. 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Ass product identity and exclusions |
| `fao-working-equids` | handbook | [FAO horses, donkeys and mules husbandry](https://www.fao.org/4/t0690e/t0690e07.htm) | Breeding, foaling, rearing, feed and animal care route |
| `ipcc-livestock-2019` | method_factor | [IPCC 2019 Refinement, Volume 4, Chapter 10](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | Conditional Mules/Asses gas and manure methods, not universal quantities |
| `iso-14044` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | Allocation, completeness and data-quality decision order |
