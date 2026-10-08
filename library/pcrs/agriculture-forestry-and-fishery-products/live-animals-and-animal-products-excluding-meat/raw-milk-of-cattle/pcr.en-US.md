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
| reference_flow_link | Reference amount and product flow below; broad UUID unresolved |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw milk of cattle, warm or farm-chilled, producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cattle species; raw state; farm gate; warm or chilled state; temperature; fat/protein or solids; accepted and rejected mass; reporting period |

The chilled-only UUID `aa8aebbb-724a-417b-8372-2dccd499ce71` is used only on the explicitly chilled output card below. It does not represent this broad reference, which also includes warm milk.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted raw milk | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg measured net mass at farm-gate handover; never add the same milk as both warm and chilled. |
| `milk_composition` | milk fat, protein or solids | Mass fraction | % or g/kg | Retain sample time, method and wet basis; check recorded composition before comparing quality grades. |
| `herd_feed_basis` | feed | Mass | kg as-fed and kg dry matter | Record moisture conversion; do not mix as-fed and dry-matter amounts. |
| `emission_species` | direct emissions | Pollutant mass | kg species | Keep CH4, N2O and NH3 separate with receiving medium and factor tier. |
| `energy_carriers` | milking and cooling | Energy or carrier quantity | kWh, MJ, L or kg | Retain native carrier units, conversion and shared-meter attribution. |

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

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `dairy_herd` | Dairy Herd and Manure Production | required | all lactation and replacement phases | managed biological production; route deltas | gross milk produced by reporting herd |
| `milk_collection` | Milking and Raw Milk Capture | required | every selected dairy route | separate harvest and capture from herd production | gross raw milk collected |
| `primary_conditioning` | First Farm Milk Conditioning | required | straining, acceptance and handling until farm-gate transfer or cooling | raw-to-accepted state; loss segregation | accepted warm milk plus milk passed to cooling |
| `farm_cooling` | Farm-owned Milk Cooling | conditional | only if cooling occurs under producing-farm control before handover | preservation of already usable raw milk | accepted chilled milk and cooling loss |

### Process: Dairy Herd and Manure Production (`dairy_herd`)

#### Inputs

##### Product flows

###### Feed and forage (`feed`)

Purchased and on-farm feed consumed by lactating, dry, replacement and calf groups; retain as-fed and dry-matter records.

- Selected flow: Cattle feed and forage products
- Flow property / unit: Mass / kg as-fed and kg dry matter
- Amount rule: Measured feed issue and grazing intake by feed, animal class and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Water supplied to the dairy herd
- Flow property / unit: Volume / m3
- Amount rule: Metered or estimated supplied water by source, use and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Energy supply for dairy herd
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L or kg
- Amount rule: Measured energy by carrier, asset, animal group and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Usable cattle manure transferred as product
- Flow property / unit: Mass / kg wet and dry matter
- Amount rule: measured transferred manure mass and nutrient content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk by herd and period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Live calves or culled cattle
- Flow property / unit: Mass / kg live weight
- Amount rule: Measured live mass and count at independent transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Cattle manure residue or transferred manure
- Flow property / unit: Mass / kg wet and dry matter
- Amount rule: Measured manure mass or calculated pathway mass by animal group and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: Calculated category-specific enteric CH4
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
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

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: Calculated pathway-specific manure N2O
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
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

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: Calculated pathway-specific ammonia
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
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

- Selected flow: Milking and cleaning water supply
- Flow property / unit: Volume / m3
- Amount rule: Metered water for milking and cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Milking energy supply
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L or kg
- Amount rule: Measured milking energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Warm raw cow milk at milking
- Flow property / unit: Mass / kg
- Amount rule: Measured gross collected raw milk mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Milking wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured or calculated wastewater by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Collected warm raw cow milk
- Flow property / unit: Mass / kg
- Amount rule: measured gross collected mass at the milking hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk, same batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Conditioning process water
- Flow property / unit: Volume / m3
- Amount rule: Measured water entering initial conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Accepted warm raw cow milk for farm cooling
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass sent to farm cooling by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk, same batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Raw cow milk, warm, farm gate
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted warm raw milk mass at handover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Rejected raw milk and straining residue
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Accepted warm raw cow milk entering farm cooling
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass received from conditioning by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk, same batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Energy supply for farm milk cooling
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L or kg
- Amount rule: Metered cooling energy by carrier and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Raw milk, chilled, farm-gate production mix `aa8aebbb-724a-417b-8372-2dccd499ce71`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Measured accepted chilled raw milk mass at handover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Raw milk cooling loss
- Flow property / unit: Mass / kg
- Amount rule: Measured milk mass lost or rejected during cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable raw milk with herd and period strata retained
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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
| `cp_herd_events` | `dairy_herd` | herd and CH4 | animal-event log | class, lactation state, count, dates, opening/closing live mass, growth, source, disposition | herd register and scale | head; kg | each event | full reporting period | producing farm | cohort-period totals; one opening balance | register, scale calibration |
| `cp_herd_feed` | `dairy_herd` | feed | feed issue and grazing log | feed id, origin, mass, dry matter, class, period | store issue and pasture observation | kg | daily or batch | full reporting period | producing farm | sum by feed and class; convert dry matter | invoice, weigh ticket, moisture test |
| `cp_water` | all applicable nodes | supplied water and wastewater | meter and destination log | source, purpose, volume, destination, meter id | meter reading and service log | m3 | each meter interval | full reporting period | producing farm | assign by consumer and period | meter calibration, invoice |
| `cp_energy` | all applicable nodes | energy and assets | meter/fuel log | carrier, quantity, unit, meter, asset, service hours, consumer | meter, invoice, fuel receipt | native carrier unit | each interval | full reporting period | producing farm | allocate shared use once by measured service | meter, invoice, asset register |
| `cp_manure` | `dairy_herd` | manure and N emissions | pathway log | animal class, VS, N, pathway, mass, handover | storage and nutrient records | kg; kg N | monthly and event | full reporting period | producing farm | mass and nutrient balance by pathway | weigh ticket, assay, destination |
| `cp_milk_balance` | milk_collection; primary_conditioning; farm_cooling | accepted and rejected milk | milk batch log | gross mass, accepted mass, rejection reason, loss, temperature, solids, handover | calibrated tank/scale and sampling | kg; °C; % | each batch | full reporting period | producing farm | batch balance; final warm/chilled partition | tank calibration, acceptance and lab record |

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
