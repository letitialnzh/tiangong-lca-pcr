---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.grapes
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Grapes

## 1. Scope and Applicability

This PCR covers fresh whole grapes produced by managed perennial vineyards and handed over at the farm gate. It includes establishment or replanting when annualized to the reported crop cycle, cultivation, crop protection, irrigation, harvest, and conditional on-farm sorting or packing. Wine making, juice processing, drying, retail distribution, and consumer use are excluded. The data package shall state cultivar or route, product state, grade or saleability criterion, geography, crop year, yield basis, and whether packing is included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.grapes |
| classification_refs | CPC 3.0 01330, exact |
| covered_products | Fresh grapes from managed vineyards, including table, wine, juice, raisin, and other cultivars when route and product state are declared |
| excluded_products | Wine, juice, dried grapes, concentrate, grape seed products, retail services, and unmanaged collection |
| representative_product | Fresh whole grapes at farm gate |
| production_route | Perennial vineyard establishment or replanting, managed cultivation, harvest, and conditional farm-gate conditioning |
| market_state | Fresh whole grapes at farm gate, un-packed or packed as declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh whole grapes handed over at the farm gate in the declared product state |
| How much | 1 kg of saleable fresh grapes |
| How well | Cultivar or route, product state, quality or grade, moisture or maturity specification when measured, and declared use route |
| How long or cycle | One reported vineyard crop cycle; perennial establishment and replanting are annualized over the declared productive life |
| reference_flow_link | `fresh_grapes_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fresh whole grapes at farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or product route; fresh or packed state; grade or saleability criterion; farm-gate location; crop year; yield basis |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | reference product and mass rows | Mass | kg | Report saleable output and mass inventory on a consistent fresh basis; disclose moisture or dry-matter conversion. |
| `measurement_yield_basis` | cultivation and harvest | Mass | kg fresh grapes/ha and kg/crop cycle | Record harvested, saleable, cull, and retained-use quantities before normalizing to the reference flow. |
| `measurement_nutrient_basis` | fertilizer and soil amendment total | Nutrient or product mass | kg product and kg N, P2O5, or K2O | Record actual product and nutrient analysis; do not infer nutrient quantity from a generic name. |
| `measurement_water_basis` | irrigation and conditioning water | Volume or mass | m3 or kg | Distinguish metered or calculated applied irrigation from rainfall. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Established vineyard soil and perennial vine stock at the start of the crop cycle, with replanting included when within the declared annualization period |
| starting_condition_role | Foreground agricultural production; purchased planting material, nutrients, pesticides, fuel, electricity, packaging, and water are upstream inputs unless directly collected |
| product_classification_scope | CPC 3.0 01330 grapes; route and market state shall be declared |
| recursive_input_rule | Record same-category grape inputs as identified internal transfers and do not recursively substitute the reference output |
| upstream_dataset_requirement | Use documented background datasets for purchased inputs and disclose geography, technology, and temporal coverage |
| disclosure | Disclose area, vine age or establishment year, cultivar or route, irrigation, crop year, yield, saleability, product state, and conditional packing |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_grape_farm_gate` | all processes | Include managed vineyard production through the declared fresh-grape farm-gate hand-off; exclude downstream processing and distribution unless extended explicitly. | `iso-14044-2006` |
| `boundary_perennial_annualization` | establishment and replanting | Annualize establishment, trellis, and replanting burdens over the declared productive life and disclose the basis. | `iso-14044-2006` |
| `boundary_background_inputs` | purchased inputs | Include upstream supply through delivery while keeping foreground application and use records at the vineyard boundary. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `vineyard_establishment_replanting` | Vineyard establishment and replanting | conditional | Include establishment, vine replacement, trellis installation, or removal during the annualization period. | Establish or renew the perennial production asset. | per productive hectare and crop cycle |
| `vineyard_cultivation_harvest` | Vineyard cultivation and harvest | required | Always included. | Manage vines and soil, apply inputs, harvest grapes, and quantify outputs and losses. | per saleable kg |
| `farm_gate_sorting_packing` | Farm-gate sorting and packing | conditional | Include when sorting, cooling, packing, or on-farm storage is part of the declared hand-off. | Condition and hand over the declared market state. | per packed or un-packed kg |

### Process: Vineyard establishment and replanting (`vineyard_establishment_replanting`)

#### Inputs

##### Product flows

###### Grapevine planting material (`vine_planting_material_input`)

Record purchased or internally propagated vines, grafted plants, or replacement stock crossing the establishment boundary.

- Selected flow: Grapevine planting material
- Flow property / unit: Mass or item count / kg or item
- Amount rule: record actual stock quantity and document any count-to-mass conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and annualized to the reported crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_vineyard_establishment_records`
- Sources:

###### Establishment machinery fuel (`establishment_fuel_input`)

Record fuel for soil preparation, planting, trellis work, and vine removal.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Mass or energy carrier / kg or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured fuel or contractor records allocated to establishment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and annualized to the reported crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_vineyard_establishment_records`
- Sources:

###### Irrigation water for establishment (`establishment_irrigation_input`)

Record water applied to newly established or replanted vines.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: meter, irrigation schedule, or documented water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and annualized to the reported crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_vineyard_establishment_records`
- Sources: `fao-56-crop-evapotranspiration`

##### Elementary flows

###### Land occupation by vineyard establishment (`establishment_land_occupation`)

Record occupied area and duration for establishment or replanting and any change from the prior land state.

- Selected flow: Land occupation
- Flow property / unit: Area-time / m2 year
- Amount rule: area multiplied by occupation duration and annualized to the crop cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and annualized to the reported crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_vineyard_establishment_records`
- Sources: `iso-14044-2006`

#### Outputs

##### Waste flows

###### Removed vine and trellis material (`removed_vine_material_waste`)

Record removed vines, old trellis components, and residues by destination.

- Selected flow: Non-hazardous agricultural waste
- Flow property / unit: Mass / kg
- Amount rule: weigh or reconcile removed material by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and annualized to the reported crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_vineyard_establishment_records`
- Sources:

### Process: Vineyard cultivation and harvest (`vineyard_cultivation_harvest`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`vineyard_cultivation_harvest_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1 kg saleable fresh grapes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_input_records`
- Sources: `ipcc-2019-refinement-vol4`

###### Irrigation water supplied (`crop_irrigation_input`)

Record applied irrigation by vineyard block and crop cycle; rainfed blocks report zero with supporting evidence.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated volume by block and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1 kg saleable fresh grapes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_input_records`
- Sources: `fao-56-crop-evapotranspiration`

###### Nutrient and harvest machinery fuel (`field_machinery_fuel_input`)

Record fuel for tillage, mowing, spraying, pruning, harvest, and in-field transport.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Mass or energy carrier / kg or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured fuel or contractor activity converted with a documented carrier basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1 kg saleable fresh grapes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_input_records`
- Sources:

###### Crop-protection products (`crop_protection_input`)

Record fungicides, insecticides, herbicides, biological controls, and adjuvants by actual product, active ingredient where available, dose, and event.

- Selected flow: Crop-protection product
- Flow property / unit: Product mass or volume / kg or L
- Amount rule: sum actual applications by block and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1 kg saleable fresh grapes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_input_records`
- Sources: `fao-pesticide-management-code-2014`

##### Elementary flows

###### Vineyard land occupation (`crop_land_occupation`)

Record productive vineyard area and occupation duration for the crop cycle.

- Selected flow: Land occupation
- Flow property / unit: Area-time / m2 year
- Amount rule: cultivated area multiplied by crop-cycle occupation duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1 kg saleable fresh grapes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_input_records`
- Sources: `iso-14044-2006`

#### Outputs

##### Product flows

###### Harvested fresh grapes to conditioning (`harvested_grapes_to_conditioning`)

Record harvested mass transferred to conditioning, or directly to farm-gate hand-off when conditioning is not included.

- Selected flow: Fresh harvested grapes for farm-gate conditioning
- Flow property / unit: Mass / kg
- Amount rule: weigh lots and reconcile to saleable output, culls, and retained or lost material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg saleable fresh grapes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_yield_records`
- Sources:

###### Fresh whole grapes at farm gate (`fresh_grapes_farm_gate_output`)

Use when grapes leave the vineyard as un-packed farm-gate product; otherwise transfer harvested quantity to conditioning.

- Selected flow: Fresh whole grapes at farm gate
- Flow property / unit: Mass / kg
- Amount rule: saleable fresh grape mass at the declared hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg saleable fresh grapes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_yield_records`
- Sources:

##### Waste flows

###### Vineyard harvest residues and culls (`harvest_residue_culls`)

Reconcile bunches, berries, stems, and other harvested material not sold as the declared product by destination.

- Selected flow: Non-hazardous agricultural waste
- Flow property / unit: Mass / kg
- Amount rule: total harvested mass less saleable product and declared retained-use destinations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg saleable fresh grapes
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_and_yield_records`
- Sources:

##### Elementary flows

###### Nitrous oxide to ambient air (`soil_n2o_air_output`)

Calculate direct and applicable indirect soil nitrous oxide from documented nitrogen, residue, soil, and drainage data.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: apply the declared method and factors to collected activity data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1 kg saleable fresh grapes
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_records`
- Sources: `ipcc-2019-refinement-vol4`

###### Ammonia to ambient air (`soil_ammonia_air_output`)

Calculate ammonia volatilization using the nutrient product, application method, weather, and applicable factor method.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: calculate from documented nitrogen applications and the declared method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1 kg saleable fresh grapes
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_records`
- Sources: `ipcc-2019-refinement-vol4`

###### Nitrate to water (`soil_nitrate_water_output`)

Record nitrate leaching or runoff only when a monitored balance, applicable model, or reviewed method supports it.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: calculate from nitrogen inputs, soil, drainage, and the declared method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1 kg saleable fresh grapes
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_records`
- Sources: `ipcc-2019-refinement-vol4`

### Process: Farm-gate sorting and packing (`farm_gate_sorting_packing`)

#### Inputs

##### Product flows

###### Harvested grapes received (`conditioning_grape_input`)

Record the measured lot entering on-farm sorting, cooling, packing, or short storage.

- Selected flow: Fresh harvested grapes for farm-gate conditioning
- Flow property / unit: Mass / kg
- Amount rule: weigh inbound lots at the conditioning hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per campaign and converted to 1 kg packed farm-gate grapes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

###### Packaging materials (`packaging_material_input`)

Record cartons, trays, films, crates, pallets, and other packaging actually used, with reusable returns separate.

- Selected flow: Packaging function
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- Amount rule: count or weigh packaging consumed per packed lot less documented reusable returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per campaign and converted to 1 kg packed farm-gate grapes
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources:

###### Conditioning water (`conditioning_water_input`)

Record water used for cleaning or product-contact surfaces inside the declared conditioning boundary.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter or cleaning log for the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per campaign and converted to 1 kg packed farm-gate grapes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

###### Electricity for sorting and cooling (`conditioning_electricity_input`)

Record electricity used by sorting, cooling, weighing, and packing equipment.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: sub-meter, equipment log, or documented allocation from site electricity records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per campaign and converted to 1 kg packed farm-gate grapes
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources:

#### Outputs

##### Product flows

###### Packed fresh grapes at farm gate (`packed_grapes_farm_gate_output`)

Record saleable packed grapes leaving the conditioning operation. This row is not applicable when the declared hand-off is un-packed.

- Selected flow: Fresh whole grapes at farm gate, packed state
- Flow property / unit: Mass / kg
- Amount rule: weigh saleable packed lots at the declared hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per campaign and converted to 1 kg packed farm-gate grapes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

##### Waste flows

###### Conditioning culls and damaged grapes (`conditioning_culls_waste`)

Record grapes removed during sorting or packing and identify each destination.

- Selected flow: Non-hazardous agricultural waste
- Flow property / unit: Mass / kg
- Amount rule: inbound grape mass less packed output and other declared destinations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per campaign and converted to 1 kg packed farm-gate grapes
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources:

###### Used packaging and cleaning waste (`conditioning_waste_output`)

Record one-way packaging losses and non-hazardous cleaning waste by material and destination.

- Selected flow: Non-hazardous waste
- Flow property / unit: Mass / kg
- Amount rule: weigh or reconcile waste by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per campaign and converted to 1 kg packed farm-gate grapes
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_grape_outputs` | harvested grapes, saleable grapes, culls, and retained-use residues | Reconcile all harvested mass to saleable product, co-products, retained use, and waste. Use physical mass allocation only when functions and quality are comparable; otherwise document a justified method. | `iso-14044-2006` |
| `allocation_perennial_asset` | establishment, trellis, and replanting | Allocate annualized perennial-asset burdens using declared productive life and area, and disclose simultaneous crop or land uses. | `iso-14044-2006` |
| `allocation_packing_losses` | conditional sorting and packing | Attribute conditioning inputs to packed product, culls, and other outputs using measured mass reconciliation unless a reviewed alternative is justified. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_vineyard_establishment_records` | `vineyard_establishment_replanting` | planting stock, fuel, irrigation, land, removed material | nursery invoices, maps, fuel and irrigation logs | area, cultivar, vine count, date, fuel, water, material, destination | collect farm and contractor records; reconcile to block area | kg, item, m3, L, m2 year | each event | establishment period annualized to crop cycle | vineyard block | sum by block and annualize by productive life | invoices, maps, meters, receipts |
| `cp_field_input_records` | `vineyard_cultivation_harvest` | fertilizer, irrigation, fuel, crop protection, land | invoices, application logs, meters, maps | product, formulation, nutrient analysis, dose, date, area, water, fuel, active ingredient | collect each application and convert only with documented factors | kg, kg nutrient, m3, L, m2 year | each application and crop cycle | one crop year | vineyard block and farm | sum by block and crop cycle | invoices, labels, meters, applications |
| `cp_field_emission_records` | `vineyard_cultivation_harvest` | soil emissions | nitrogen ledger, residue, soil and drainage records | nutrient, residue, soil, weather, drainage, factor method | calculate after checking method applicability | kg N2O, kg NH3, kg nitrate | each crop cycle | one crop year | block or declared model region | apply method consistently | factor source and worksheet |
| `cp_harvest_and_yield_records` | `vineyard_cultivation_harvest` | harvested grapes, output, culls | harvest tickets and weigh records | harvested, saleable, grade, culls, destination, date | weigh lots and reconcile all destinations | kg | each lot and crop cycle | one harvest season | block, lot, and farm | sum lots and report yield | calibrated scale and tickets |
| `cp_conditioning_records` | `farm_gate_sorting_packing` | inbound grapes, packaging, water, electricity, output, waste | packing, utility, inventory, and waste records | inbound, package, count, water, kWh, output, culls, waste | collect campaign records and reconcile mass balance | kg, item, m3, kWh | each campaign or lot | packing season | conditioning site | sum campaigns by packed output | scale, invoices, utilities, receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | normalized amount = reported amount / saleable fresh grape output; retain original amount and basis | flow amount, saleable output, conversion | amount per kg reference flow | `iso-14044-2006` |
| `calc_perennial_annualization` | establishment | annualized burden = event burden × crop-cycle share of declared productive life | event amount, life, duration, area | crop-cycle burden | `iso-14044-2006` |
| `calc_nutrient_basis` | fertilizer total | nutrient amount = sum(product mass × declared nutrient fraction) by nutrient and event | product mass and nutrient fraction | kg product and kg N, P2O5, or K2O | `ipcc-2019-refinement-vol4` |
| `calc_mass_balance` | harvest and conditioning | inbound or harvested mass = saleable output + co-products or retained use + waste and losses | weigh and destination records | reconciled amounts | `iso-14044-2006` |
| `calc_soil_emissions` | soil emissions | apply the selected geographic factor or model to recorded nutrient, residue, soil, and drainage inputs | activity ledger and method | emission amounts | `ipcc-2019-refinement-vol4` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_route` | all datasets | State route, product state, grade, location, crop year, and saleability rule. | farm specification and metadata |
| `quality_mass_reconciliation` | harvest and conditioning | Reconcile product, culls, retained use, and waste and investigate residuals. | scales, tickets, packing logs |
| `quality_input_completeness` | cultivation and establishment | Cover material nutrient, protection, water, fuel, electricity, planting-stock, and area records. | invoices, logs, meters, maps |
| `quality_temporal_geography` | all processes | Report crop year, block or region, technology, irrigation, and exceptional events. | farm records and questionnaire |
| `quality_method_disclosure` | emissions and annualization | Disclose factors, life assumptions, allocation, missing data, and substitutions. | calculation worksheet and sources |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | reference flow | Reject a dataset missing route, product state, location, crop year, or saleability criterion. | `iso-14044-2006` |
| `validation_yield_mass_balance` | harvest and conditioning | Check harvested or inbound mass against outputs and losses within documented tolerance. | `iso-14044-2006` |
| `validation_nutrient_traceability` | fertilizer | Trace every nutrient total to an actual product and declared nutrient basis. | `ipcc-2019-refinement-vol4` |
| `validation_period_annualization` | perennial establishment | Check a declared productive life and prevent repeated counting in every crop cycle. | `iso-14044-2006` |
| `validation_conditional_packing` | conditioning | Include packing only when the declared hand-off includes it; otherwise cultivation supplies the reference output. | `iso-14044-2006` |
| `validation_emission_method` | soil emissions | Identify factor or model, input basis, geography, and temporal applicability. | `ipcc-2019-refinement-vol4` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset for fresh grape production; background_dataset use is allowed when representativeness is disclosed |
| downstream_use | Foreground agricultural inventories and food or beverage product systems |
| allowed_use | Modelling declared fresh grape routes within the stated boundary and product state |
| excluded_use | Direct substitution for wine, juice, dried grape, concentrate, retail, consumer use, or undisclosed routes |
| required_metadata | route, cultivar, farm-gate state, geography, crop year, vine age, yield, irrigation, packing, allocation, and reference product qualifiers |
| required_quality_disclosure | input completeness, mass balance, factors, productive-life assumptions, missing data, and QA findings |
| update_trigger | change in route, nutrient or protection method, irrigation, packing boundary, classification, or reviewed method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14044-2006` | standard | ISO 14044:2006, https://www.iso.org/standard/38498.html | boundary, annualization, allocation, reconciliation, and validation |
| `fao-56-crop-evapotranspiration` | official_guidance | FAO Irrigation and drainage paper 56, https://www.fao.org/4/X0490E/X0490E00.htm | irrigation collection and water balance |
| `ipcc-2019-refinement-vol4` | method_factor | 2019 IPCC Refinement, Volume 4, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | soil emission calculations and nutrient basis |
| `fao-pesticide-management-code-2014` | official_guidance | FAO/WHO International Code of Conduct on Pesticide Management, https://www.fao.org/3/i3604e/i3604e.pdf | crop-protection traceability |
