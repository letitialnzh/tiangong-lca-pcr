---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-cattle
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw milk of cattle

## 1. Scope and Applicability

This PCR governs foreground data packages for unprocessed cow milk handed over at the producing dairy farm gate. It covers lactating and replacement herds, feed, water, enteric and manure pathways, milking, initial straining and acceptance, and cooling only when controlled by the farm before handover. Both warm and farm-chilled raw milk are included; the handover state must be declared. Independent milk collection or cooling centres, transport after farm-gate transfer, pasteurization, standardization, consumer packaging and dairy processing are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-cattle` |
| classification_refs | CPC 3.0 `02211`, Raw milk of cattle |
| covered_products | unprocessed warm or farm-chilled cow milk handed over at the producing farm gate |
| excluded_products | buffalo or goat milk, consumer milk, processed milk and output of downstream cooling centres |
| representative_product | accepted raw cow milk measured at its declared farm-gate handover state |
| production_route | dairy herd production → milking capture → first conditioning → optional farm cooling; grazing and housed routes declared |
| market_state | warm or farm-chilled raw milk with cooling state, temperature, fat/protein or solids, and acceptance state declared |

Grazing and housed variants may coexist, but feed sourcing, manure pathways, energy, measurements and evidence must be stratified by herd and period. Chilled and warm final handovers are mutually exclusive.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | accepted unprocessed cow milk at the producing farm gate |
| How much | 1 kg |
| How well | declare warm or farm-chilled state, handover temperature, fat/protein or solids, and acceptance/rejection basis |
| How long or cycle | declared reporting period covering lactation, dry, replacement, culling and cooling service phases |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw milk of cattle, warm or farm-chilled, producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cattle species; raw state; farm gate; warm or chilled state; temperature; fat/protein or solids; accepted and rejected mass; reporting period |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

The chilled-only UUID `aa8aebbb-724a-417b-8372-2dccd499ce71` is used only on the explicitly chilled output card below. It does not represent this broad reference, which also includes warm milk.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted raw milk | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg measured net mass at farm-gate handover; never add the same milk as both warm and chilled. |
| `milk_composition` | milk fat, protein or solids | Mass fraction | % or g/kg | Retain sample time, method and wet basis; check recorded composition before comparing quality grades. |
| `herd_feed_basis` | feed | Mass | kg as-fed and kg dry matter | Record moisture conversion; do not mix as-fed and dry-matter amounts. |
| `emission_species` | direct emissions | Pollutant mass | kg species | Keep CH4, N2O and NH3 separate with receiving medium and factor tier. |
| `energy_carriers` | milking and cooling | Energy or carrier quantity | kWh, MJ, L or kg | Retain native carrier units, conversion and shared-meter attribution. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

The boundary starts with the declared opening dairy herd and burden-bearing purchased replacements. It includes lactation, dry and replacement phases, feed and water, controlled manure management, milking, straining and acceptance, plus cooling only under farm control before transfer. Milking is a distinct capture responsibility: it turns herd milk production into measured gross collected milk. First conditioning changes that raw collected state into an accepted state. Optional cooling preserves already usable raw milk; it is neither pasteurization nor a separate raw-milk product category.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | opening dairy herd and admitted replacements by class, lactation state, origin and preceding burden |
| starting_condition_role | multi-period biological stock; preceding burdens attributed once |
| product_classification_scope | CPC 3.0 `02211`, raw milk of cattle |
| recursive_input_rule | purchased same-category raw milk is recorded with origin and prior burden, never relabelled as this farm's own reference output |
| upstream_dataset_requirement | supplier datasets for feed, replacements, energy and hygiene materials or disclosed gaps |
| disclosure | herd and phase, route, milk state and temperature, losses, manure pathways, co-products, shared assets, cooling control, measurement and unresolved identities |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_farm_gate` | final raw milk | Include farm-controlled activities before farm-gate handover only; independent cooling centres and onward transport are downstream. | `fao-milk-cooling-centres-2016` |
| `b_milk_state` | warm and chilled milk | Declare final state; warm direct and farm-chilled handovers are exclusive, and internal milk transfers are not final outputs. | `fao-milk-cooling-centres-2016` |
| `b_herd_routes` | grazing and housed herds | Use managed dairy herd production as parent; evidence each route delta in feed, manure, energy, herd records and calculations. | `fao-leap-large-ruminants-2016` |
| `b_periods` | lactation, dry, replacement and culling | Link inputs, assets, milk and culling to herd and period; assign opening burdens, replacements and termination once. | `fao-leap-large-ruminants-2016` |
| `b_manure` | excreta | Separate deposition, collection, storage, application and export, with nitrogen and volatile solids tracked by pathway. | `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure` |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. | `fao-milk-cooling-centres-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `dairy_herd` | Dairy Herd and Manure Production | required | all lactation and replacement phases | managed biological production; route deltas | gross milk produced by reporting herd |
| `milk_collection` | Milking and Raw Milk Capture | required | every selected dairy route | separate harvest and capture from herd production | gross raw milk collected |
| `primary_conditioning` | First Farm Milk Conditioning | required | straining, acceptance and handling until farm-gate transfer or cooling | raw-to-accepted state; loss segregation | accepted warm milk plus milk passed to cooling |
| `farm_cooling` | Farm-owned Milk Cooling | conditional | only if cooling occurs under producing-farm control before handover | preservation of already usable raw milk | accepted chilled milk and cooling loss |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

### Process: Dairy Herd and Manure Production (`dairy_herd`)

#### Inputs

##### Product flows

###### Feed and forage (`feed`)

Purchased and on-farm feed consumed by lactating, dry, replacement and calf groups; retain as-fed and dry-matter records.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured feed issue and grazing intake by feed, animal class and period Original collection denominator kind: process_output.

- Selected flow: Cattle feed and forage products
- Flow property / unit: Mass / kg as-fed and kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd_feed`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 50
  - Unit: kg dry matter/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Herd water supply (`herd_water`)

Record water actually supplied for drinking and husbandry by source and animal group; distinguish unmanaged rainfall.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Metered or estimated supplied water by source, use and period Original collection denominator kind: process_output.

- Selected flow: Water supplied to the dairy herd
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `fao-leap-livestock-water-2019`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: m3/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Herd management energy (`herd_energy`)

Record electricity and fuels consumed in housing, feeding, pumping and manure handling; retain each carrier.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured energy by carrier, asset, animal group and period Original collection denominator kind: process_output.

- Selected flow: Energy supply for dairy herd
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh-equivalent/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reported flow of this type.

##### Elementary flows

No separately reported flow of this type.

#### Outputs

##### Product flows

###### Independently transferred usable manure (`exported_manure`)

Record manure as a co-product only when usable material is independently transferred with quantity, quality and handover evidence; do not also count it as waste.

Denominator and scope requirements：per kg saleable raw milk by herd and period

Raw quantity and calculation requirements: measured transferred manure mass and nutrient content Original collection denominator kind: process_output.

- Selected flow: Usable cattle manure transferred as product
- Flow property / unit: Mass / kg wet and dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `fao-leap-nutrient-flows-2018`
- Range: Provisional exported-manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg wet manure/kg saleable raw milk
  - Basis: route-dependent transfer with quantity and quality records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Transferred calves and culled cattle (`calves_culls`)

Independently transferred live animals are separate co-products, with class, live mass and handover; animals retained as replacements remain internal.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured live mass and count at independent transfer Original collection denominator kind: process_output.

- Selected flow: Live calves or culled cattle
- Flow property / unit: Mass / kg live weight
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd_events`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg live mass/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Collected manure or residual excreta (`manure_residue`)

Route collected and deposited manure separately from the product-card export. This waste card contains unusable residue and material sent for controlled treatment without independent product handover.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured manure mass or calculated pathway mass by animal group and period Original collection denominator kind: process_output.

- Selected flow: Cattle manure residue or transferred manure
- Flow property / unit: Mass / kg wet and dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `fao-leap-nutrient-flows-2018`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg wet manure/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric methane to air (`enteric_methane`)

Calculate biogenic enteric CH4 from declared cattle category, activity and factor tier; keep manure CH4 separate.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Calculated category-specific enteric CH4 Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd_events`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg CH4/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure nitrous oxide to air (`manure_n2o`)

Calculate direct and applicable indirect N2O by recorded manure nitrogen and management pathway.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Calculated pathway-specific manure N2O Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg N2O/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure ammonia to air (`manure_ammonia`)

Track volatilized NH3 by manure nitrogen pathway and subtract transferred nitrogen consistently.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Calculated pathway-specific ammonia Original collection denominator kind: process_output.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `fao-leap-nutrient-flows-2018`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg NH3/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Milking and Raw Milk Capture (`milk_collection`)

#### Inputs

##### Product flows

###### Milking and cleaning water (`milking_water`)

Record supplied water for udder preparation, equipment rinsing and washing; segregate from herd drinking water.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Metered water for milking and cleaning Original collection denominator kind: process_output.

- Selected flow: Milking and cleaning water supply
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `fao-leap-livestock-water-2019`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: m3/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Milking energy supply (`milking_energy`)

Meter vacuum pump and milk-transfer energy by carrier and period.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured milking energy Original collection denominator kind: process_output.

- Selected flow: Milking energy supply
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh-equivalent/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reported flow of this type.

##### Elementary flows

No separately reported flow of this type.

#### Outputs

##### Product flows

###### Collected raw milk before conditioning (`collected_raw_milk`)

This internal harvest output leaves the managed herd and enters first conditioning; it is not a second saleable reference output.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured gross collected raw milk mass Original collection denominator kind: process_output.

- Selected flow: Warm raw cow milk at milking
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk_balance`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg collected raw milk/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Milking wash wastewater (`milking_wastewater`)

Collect cleaning effluent by discharge or treatment destination; avoid double counting water retained in milk.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured or calculated wastewater by destination Original collection denominator kind: process_output.

- Selected flow: Milking wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: m3/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No separately reported flow of this type.

### Process: First Farm Milk Conditioning (`primary_conditioning`)

#### Inputs

##### Product flows

###### Collected raw milk received (`collected_milk_input`)

This same-batch internal transfer receives the harvest output for straining and acceptance; it is not an additional purchased milk product.

Denominator and scope requirements：per kg saleable raw milk, same batch

Raw quantity and calculation requirements: measured gross collected mass at the milking hand-off Original collection denominator kind: process_output.

- Selected flow: Collected warm raw cow milk
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk_balance`
- Range: Provisional internal transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg saleable raw milk
  - Basis: same-batch gross milk received from milking
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Initial conditioning water (`conditioning_water`)

Water for in-farm straining and equipment hygiene; no dilution of raw milk is permitted.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured water entering initial conditioning Original collection denominator kind: process_output.

- Selected flow: Conditioning process water
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg saleable raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reported flow of this type.

##### Elementary flows

No separately reported flow of this type.

#### Outputs

##### Product flows

###### Accepted milk sent to farm cooling (`conditioned_milk_to_cooling`)

This accepted internal transfer occurs only when farm-controlled cooling follows conditioning; it is not a warm farm-gate sale.

Denominator and scope requirements：per kg saleable raw milk, same batch

Raw quantity and calculation requirements: measured accepted mass sent to farm cooling by batch Original collection denominator kind: process_output.

- Selected flow: Accepted warm raw cow milk for farm cooling
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk_balance`
- Range: Provisional internal transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.2
  - Unit: kg/kg saleable raw milk
  - Basis: accepted milk sent to cooling before cooling loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Warm raw milk at farm gate (`warm_saleable_milk`)

Final reference output only when accepted raw milk is handed over before farm-controlled cooling; mutually exclusive with chilled final output.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured accepted warm raw milk mass at handover Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Raw cow milk, warm, farm gate
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk_balance`
- Range: Physical output-share guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg saleable raw milk
  - Basis: physical final-output share bounded by zero and one
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-large-ruminants-2016`

##### Waste flows

###### Rejected milk and straining residues (`rejected_milk`)

Record contaminated, withheld or otherwise rejected milk and captured solids by reason and destination, never as saleable product.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured rejected mass by reason and destination Original collection denominator kind: process_output.

- Selected flow: Rejected raw milk and straining residue
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk_balance`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg rejected/kg gross collected raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No separately reported flow of this type.

### Process: Farm-owned Milk Cooling (`farm_cooling`)

#### Inputs

##### Product flows

###### Accepted raw milk entering farm cooling (`milk_entering_cooling`)

Match the conditioned output by batch, mass and time; internal transfer adds no upstream burden again.

Denominator and scope requirements：per kg saleable raw milk, same batch

Raw quantity and calculation requirements: measured accepted mass received from conditioning by batch Original collection denominator kind: process_output.

- Selected flow: Accepted warm raw cow milk entering farm cooling
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk_balance`
- Range: Provisional internal transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.2
  - Unit: kg/kg saleable raw milk
  - Basis: accepted milk entering farm cooling before cooling loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Farm-owned milk cooling energy (`cooling_energy`)

Record only energy for cooling performed under producing-farm control before farm-gate handover.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Metered cooling energy by carrier and reporting period Original collection denominator kind: process_output.

- Selected flow: Energy supply for farm milk cooling
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `fao-milk-cooling-centres-2016`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh-equivalent/kg chilled raw milk
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reported flow of this type.

##### Elementary flows

No separately reported flow of this type.

#### Outputs

##### Product flows

###### Chilled raw milk at farm gate (`chilled_saleable_milk`)

Final reference output only after farm-controlled cooling; record handover temperature and storage time. This explicitly chilled identity does not cover warm raw milk.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured accepted chilled raw milk mass at handover Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Raw milk, chilled, farm-gate production mix `aa8aebbb-724a-417b-8372-2dccd499ce71`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk_balance`
- Sources: `fao-milk-cooling-centres-2016`
- Range: Physical output-share guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg saleable raw milk
  - Basis: physical final-output share bounded by zero and one
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-large-ruminants-2016`

##### Waste flows

###### Cooling and storage loss (`cooling_loss`)

Record spills and rejected milk during controlled cooling separately from acceptable chilled output.

Denominator and scope requirements：per kg saleable raw milk with herd and period strata retained

Raw quantity and calculation requirements: Measured milk mass lost or rejected during cooling Original collection denominator kind: process_output.

- Selected flow: Raw milk cooling loss
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk_balance`
- Range: Provisional screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg milk entering farm cooling
  - Basis: broad route-dependent first-pass screen; replace with measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No separately reported flow of this type.

### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Raw milk of cattle, warm or farm-chilled, producing farm gate for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `warm_saleable_milk`, `chilled_saleable_milk` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `warm_saleable_milk`, `chilled_saleable_milk`

Required product-instance qualifiers: cattle species; raw state; farm gate; warm or chilled state; temperature; fat/protein or solids; accepted and rejected mass; reporting period

- Selected flow: Raw milk of cattle, warm or farm-chilled, producing farm gate for actual producer-handover linkage
- Flow property / unit: Mass / kg
- Amount rule: Use measured accepted same-lot quantity reconciled to the linked source rows; normalize once to the declared reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`
- Sources: `fao-milk-cooling-centres-2016`

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

###### Raw milk of cattle, warm or farm-chilled, producing farm gate (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `warm_saleable_milk`, `chilled_saleable_milk`

Required product-instance qualifiers: cattle species; raw state; farm gate; warm or chilled state; temperature; fat/protein or solids; accepted and rejected mass; reporting period

- Selected flow: Raw milk of cattle, warm or farm-chilled, producing farm gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`
- Sources: `fao-milk-cooling-centres-2016`

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
| `a_outputs` | milk, transferred calves/culls and manure | Treat as co-products only when independently transferred and measured; rejected milk, mortality, unusable manure and internal replacements are not saleable co-products. | `fao-leap-large-ruminants-2016` |
| `a_mass_balance` | warm and chilled milk | For each batch, gross collected milk equals warm final output plus milk sent to cooling plus pre-cooling rejects and losses; milk sent to cooling equals milk entering cooling, which equals chilled final output plus cooling rejects and losses. Warm and chilled final paths are exclusive per batch. Internal transfer cards carry no second product burden. | `fao-leap-large-ruminants-2016` |
| `a_coproduct` | milk and independently transferred live cattle | First separate product-specific operations such as milking and cooling. Attribute inseparable herd burdens between milk and live cattle by a documented biophysical relationship using milk-production and live-growth energy requirements by animal class and period; retain inputs and test sensitivity. Economic allocation is a disclosed sensitivity only, not the default. Do not assume substitution credit. | `fao-leap-large-ruminants-2016` |
| `a_period_asset` | herd and shared assets | Attribute replacements, housing, milking and cooling assets by herd, phase and measured service to benefiting periods and outputs; count each asset service and opening burden once. | `fao-leap-large-ruminants-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd_events` | `dairy_herd` | herd and CH4 | animal-event log | class, lactation state, count, dates, opening/closing live mass, growth, source, disposition | herd register and scale; Raw aggregation requirements: cohort-period totals; one opening balance. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each event | full reporting period | producing farm | per reference flow | register, scale calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_herd_feed` | `dairy_herd` | feed | feed issue and grazing log | feed id, origin, mass, dry matter, class, period | store issue and pasture observation; Raw aggregation requirements: sum by feed and class; convert dry matter. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | daily or batch | full reporting period | producing farm | per reference flow | invoice, weigh ticket, moisture test; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_water` | all applicable nodes | supplied water and wastewater | meter and destination log | source, purpose, volume, destination, meter id | meter reading and service log; Raw aggregation requirements: assign by consumer and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | m3 | each meter interval | full reporting period | producing farm | per reference flow | meter calibration, invoice; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_energy` | all applicable nodes | energy and assets | meter/fuel log | carrier, quantity, unit, meter, asset, service hours, consumer | meter, invoice, fuel receipt; Raw aggregation requirements: allocate shared use once by measured service. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | native carrier unit | each interval | full reporting period | producing farm | per reference flow | meter, invoice, asset register; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | `dairy_herd` | manure and N emissions | pathway log | animal class, VS, N, pathway, mass, handover | storage and nutrient records; Raw aggregation requirements: mass and nutrient balance by pathway. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kg N | monthly and event | full reporting period | producing farm | per reference flow | weigh ticket, assay, destination; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_milk_balance` | milk_collection; primary_conditioning; farm_cooling | accepted and rejected milk | milk batch log | gross mass, accepted mass, rejection reason, loss, temperature, solids, handover | calibrated tank/scale and sampling; Raw aggregation requirements: batch balance; final warm/chilled partition. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; °C; % | each batch | full reporting period | producing farm | per reference flow | tank calibration, acceptance and lab record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- |
| `c_milk_balance` | milk batches | Gross collected = warm final + sent to cooling + pre-cooling reject/loss; sent to cooling = entering cooling = chilled final + cooling reject/loss. Select exactly one terminal state per batch and count intermediate transfers once. | batch mass, rejection, each internal handover, loss, final state | kg accepted milk | `fao-leap-large-ruminants-2016` |
| `c_enteric_ch4` | dairy herd | Calculate enteric CH4 by IPCC dairy category, activity and chosen tier; retain factor version. | animal class, population, period, feed/activity | kg CH4 | `ipcc-2019-livestock-manure` |
| `c_manure` | manure | Calculate N2O, NH3 and applicable CH4 separately by VS, nitrogen and pathway; prevent duplicate emission accounting. | manure VS, N, pathway and period | kg species | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `c_shared_service` | shared assets | Assign each shared asset once among herd, milking and cooling nodes and periods by evidenced service. | meter/asset register, service records | allocated input quantity | `fao-leap-large-ruminants-2016` |
| `c_biophysical_allocation` | milk and transferred live cattle | Separate product-specific operations first, then calculate the residual herd-burden shares from documented energy requirements for milk production and live growth by class and period; shares must sum to one. | milk yield/composition, herd growth, classes, energy-requirement method and period | milk and live-cattle burden shares | `fao-leap-large-ruminants-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | each milk batch | Verify cow/raw identity, warm/chilled state, farm gate and transfer of control; chilled UUID cannot represent warm milk. | batch and handover records |
| `dq_completeness` | herd and milk | Reconcile opening/closing herd and gross, accepted, rejected and lost mass by batch. | herd register and tank balance |
| `dq_period` | cross-period inputs | Verify replacement, asset and termination attribution to benefiting periods exactly once. | phase and asset logs |
| `dq_flow` | supplies and emissions | Retain water and energy source, manure pathway, emission species and medium, and factor version. | meters, nutrient log and calculation sheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_gate` | reference | Confirm final milk handover at producing farm gate and exactly one warm or farm-chilled batch state; cooling-centre records belong downstream. | `fao-milk-cooling-centres-2016` |
| `v_mass` | batch balance | Reconcile gross, accepted, rejected and loss mass; retain composition, temperature and acceptance evidence. | `fao-leap-large-ruminants-2016` |
| `v_routes` | routes and herd | Evidence grazing/housed deltas in feed, manure, energy and calculation, with replacements and culls reconciled by herd and period. | `fao-leap-large-ruminants-2016` |
| `v_attribution` | co-products and shared assets | Check each independent output handover, biophysical energy-demand inputs, asset service and cross-period burden for one-time attribution; disclose manure treatment and sensitivity. | `fao-leap-large-ruminants-2016` |
| `v_emissions` | emissions | Check IPCC cattle class, manure pathway, species, medium and applicable factors; reject unspeciated aggregate emission UUIDs. | `ipcc-2019-livestock-manure` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground package for raw cow milk at producing farm gate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | use in downstream processes or lifecycle models when species, handover state, geography, route and quality align |
| excluded_use | not representative of pasteurized/consumer-packaged milk, buffalo/goat milk, or independent cooling centres |
| required_metadata | herd, periods, route, milk amount/quality, warm/chilled state, temperature, rejection, manure, co-products and attribution |
| required_quality_disclosure | unresolved flow identities, provisional ranges, measurement quality, emission factors, upstream data and allocation sensitivity |
| update_trigger | material change in herd composition, route, cooling control, handover state, method or factors |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-large-ruminants-2016` | official_guidance | FAO LEAP (2016), Environmental performance of large ruminant supply chains, https://openknowledge.fao.org/handle/20.500.14283/i6494en | herd, co-products, periods and farm boundary |
| `ipcc-2019-livestock-manure` | method_factor | IPCC (2019), Refinement Volume 4 Chapter 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | dairy categories, enteric and manure emissions |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP (2018), Nutrient flows and associated environmental impacts, https://openknowledge.fao.org/handle/20.500.14283/ca1328en | nutrient and manure pathways |
| `fao-leap-livestock-water-2019` | official_guidance | FAO LEAP (2019), Water use in livestock production systems and supply chains, https://www.fao.org/partnerships/leap/resources/publications/ | water source and use distinctions |
| `fao-milk-cooling-centres-2016` | official_guidance | FAO (2016), Technical and Investment Guidelines for Milk Cooling Centres, https://www.fao.org/sustainable-food-value-chains/library/details/fr/c/426262/ | cooling-centre versus farm-controlled cooling boundary |
