---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pears-and-quinces
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Pears and quinces

## 1. Scope and Applicability

This PCR covers cultivated fresh pears and quinces delivered at the farm gate. Include perennial orchard establishment
and replacement when allocated over the declared productive period, annual orchard management, harvest, and optional
on-farm sorting, washing, cooling, or reusable-container handling before hand-off. Exclude nursery production, processed
fruit, retail, off-farm storage and transport, consumption, and pre-existing land-use change.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pears-and-quinces |
| classification_refs | CPC 3.0: 01342 Pears and quinces |
| covered_products | fresh cultivated pears and quinces at farm gate |
| excluded_products | nursery trees; wild fruit; juice, cider, dried, canned, preserved, or otherwise processed fruit; downstream logistics |
| representative_product | fresh whole pear or quince |
| production_route | managed perennial orchard, harvest, and conditional farm-gate handling |
| market_state | fresh whole fruit with species, cultivar, maturity, grade, and hand-off state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | marketable fresh pears and quinces at the farm gate |
| How much | 1,000 kg declared hand-off fruit |
| How well | whole marketable fruit meeting declared species, cultivar, maturity, grade, and destination requirements |
| How long or cycle | one orchard production year with perennial establishment allocated over the declared productive period |
| reference_flow_link | terminal marketable fruit output from `harvest_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh pears and quinces at farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and cultivar; pear/quince share; geography; orchard age; crop year; harvest window; grade and maturity; irrigation; yield basis; handling included; cull destination |

When constructing a foreground data package, all required qualifiers must be declared in dataset metadata, process notes,
the reference-flow comment, product description, or an equivalent package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_declared_hand_off` | terminal fruit | Mass | kg | Weigh accepted fruit at the declared hand-off state and retain species, cultivar, maturity, grade, and condition basis. |
| `perennial_area_to_reference` | orchard inputs and emissions | activity-specific property | activity-specific unit | Allocate perennial establishment over the declared productive period, divide annual totals by same-year marketable yield, then scale to 1,000 kg. |
| `nutrient_product_and_basis` | nutrients and amendments | nutrient mass | kg product and kg N, P2O5, or K2O | Record actual product and calculate nutrient content without merging products. |
| `mixed_crop_yield_basis` | mixed pear/quince blocks | Mass | kg fruit | Separate species where possible; otherwise disclose mass-weighted crop mix and allocation basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | established or newly planted managed orchard at the start of the declared accounting period, with trees, nutrients, water, energy, and crop-protection inputs crossing the foreground boundary |
| starting_condition_role | start of managed pear and quince production |
| product_classification_scope | cultivated fresh pears and quinces corresponding to CPC 3.0 code 01342 |
| recursive_input_rule | planting stock is an upstream nursery input and must not loop to this marketable-fruit PCR |
| upstream_dataset_requirement | compatible datasets for planting stock, nutrients, amendments, crop protection, electricity, fuel, irrigation, packaging or crate service, and included waste treatment |
| disclosure | orchard age and productive period, species/cultivar mix, area, soil, climate, planting density, crop year, yield, irrigation, inputs, residue fate, losses, and hand-off boundary |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_to_farm_gate` | all datasets | Include orchard management, harvest, and pre-hand-off handling; exclude downstream transport and processing. | `fao-good-agricultural-practices` |
| `boundary_perennial_establishment` | establishment and replacement | Include establishment only for the declared allocation period and disclose productive lifetime and replacement rate. | `fao-good-agricultural-practices` |
| `boundary_direct_field_emissions` | soil and crop-protection emissions | Use one declared geographically applicable method and the same activity records as nutrient accounting. | `ipcc-2019-refinement` |
| `boundary_post_gate_exclusion` | downstream activities | Exclude off-farm storage, transport, distribution, retail packaging, processing, consumption, and end-of-life unless explicitly extended. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment` | Pear and quince orchard establishment and replacement | conditional | new planting, replanting, or replacement occurs within the allocation period | establish perennial production capacity | planted area, tree count, and allocated orchard years |
| `orchard_management` | Annual pear and quince orchard management | required | always | managed biological production and field operations | orchard area, crop-year inputs, and crop-year yield |
| `harvest_farm_gate` | Harvest and farm-gate fruit handling | required | always; handling only when before hand-off | convert standing crop into declared marketable fruit | harvested, accepted, cull, and hand-off mass |

### Process: Pear and quince orchard establishment and replacement (`orchard_establishment`)

#### Inputs

##### Product flows

###### Nursery trees and planting stock (`nursery_tree_input`)

Record planting stock crossing into establishment or replacement; retain species, cultivar, rootstock, tree count, and planting year.

- Selected flow: Pear or quince nursery tree and planting stock
- Flow property / unit: Number of trees / tree; Mass / kg when measured by mass
- Amount rule: counted trees planted or replaced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per planted hectare allocated to 1,000 kg fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources: `fao-good-agricultural-practices`

###### Agricultural nutrient and fertilizer inputs (`orchard_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare allocated to 1,000 kg fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources: `fao-good-agricultural-practices`

###### Establishment irrigation (`establishment_irrigation_input`)

Record water supplied to newly planted or replacement orchard blocks during establishment, including metered or scheduled irrigation and zero values for rainfed blocks.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: meter or irrigation-schedule volume for establishment; document zero for rainfed blocks
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare allocated to 1,000 kg fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_establishment_records`

##### Waste flows

##### Elementary flows

###### Managed orchard land occupation (`orchard_land_occupation`)

Record the area-time occupation of land managed as pear or quince orchard during establishment and allocate it to the declared fruit output.

- Selected flow: Managed orchard land occupation
- Flow property / unit: Area-time / m2 year
- Amount rule: orchard area multiplied by occupation time and allocated to fruit output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_establishment_records`

#### Outputs

##### Product flows

##### Waste flows

###### Establishment residues (`establishment_residue_output`)

Record establishment residues by material class, quantity, and destination so that removal, retention, treatment, and disposal are distinguishable.

- Selected flow: Orchard establishment residue
- Flow property / unit: Mass / kg
- Amount rule: measured or documented mass by residue class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_establishment_records`

##### Elementary flows

### Process: Annual pear and quince orchard management (`orchard_management`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`orchard_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop-year area converted to 1,000 kg fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_activity_records`
- Sources:

###### Irrigation water (`orchard_irrigation_input`)

Record crop-year irrigation events and reconcile the supplied water volume to the managed orchard block and declared crop year.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: sum irrigation events reconciled to block area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop-year area converted to 1,000 kg fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_activity_records`

###### Crop-protection formulation (`crop_protection_input`)

Record each crop-protection formulation and application event used for pear or quince production, including formulation mass and treated area.

- Selected flow: Crop-protection formulation for pear and quince orchards
- Flow property / unit: Mass of formulation / kg
- Amount rule: sum formulation mass by product and event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per crop-year area converted to 1,000 kg fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_activity_records`
- Sources: `fao-good-agricultural-practices`

###### Mobile machinery fuel (`orchard_fuel_input`)

Record fuel consumed by mobile orchard machinery from invoices, tank records, or contractor activity and retain the conversion basis.

- Selected flow: Mobile agricultural machinery fuel
- Flow property / unit: Volume or mass / L or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: invoices, tank records, or contractor activity converted to declared fuel basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop-year area converted to 1,000 kg fruit
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_activity_records`

###### Orchard electricity (`orchard_electricity_input`)

Record electricity used for orchard operations and allocate metered or documented consumption to the orchard block and crop year.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter reading or documented allocation to orchard block and crop year
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per crop-year area converted to 1,000 kg fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_activity_records`

##### Waste flows

##### Elementary flows

###### Production land occupation (`production_land_occupation`)

Record annual occupation of productive orchard land and allocate its area-time total to the marketable pear and quince output.

- Selected flow: Managed orchard land occupation
- Flow property / unit: Area-time / m2 year
- Amount rule: annual area and occupation time allocated to marketable fruit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_activity_records`

#### Outputs

##### Product flows

###### Standing crop fruit (`standing_fruit_output`)

Record harvested pear and quince mass by species or cultivar before any included farm-gate handling, preserving the crop-year yield basis.

- Selected flow: Pears and quinces, harvested fruit
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass by species or cultivar before included handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop-year area scaled to reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_handling_records`

##### Waste flows

###### Pruning and orchard residues (`pruning_residue_output`)

Record pruning and orchard residues by quantity, dry or wet basis, and destination, with the selected residue calculation method documented.

- Selected flow: Pear and quince orchard residue
- Flow property / unit: Mass / kg dry or wet basis as declared
- Amount rule: measured or calculated by residue fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_and_handling_records`
- Sources: `ipcc-2019-refinement`

##### Elementary flows

###### Direct nitrous oxide (`direct_n2o_emission`)

Calculate direct nitrous oxide emissions from crop-year nitrogen records using the selected IPCC or regional method and document the factor basis.

- Selected flow: Nitrous oxide emission to air
- Flow property / unit: Mass / kg N2O
- Amount rule: selected IPCC or regional method applied to crop-year nitrogen records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_emission_records`
- Sources: `ipcc-2019-refinement`

###### Ammonia (`ammonia_emission`)

Calculate ammonia emissions from product, application, and regional factor records and preserve the method used for the orchard crop year.

- Selected flow: Ammonia emission to air
- Flow property / unit: Mass / kg NH3
- Amount rule: product, application, and regional factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_emission_records`
- Sources: `ipcc-2019-refinement`

###### Nitrate loss (`nitrate_loss`)

Calculate nitrate loss to water or soil from the selected leaching or runoff method applied to nitrogen and water-balance records.

- Selected flow: Nitrate emission to water or soil
- Flow property / unit: Mass / kg nitrate
- Amount rule: selected leaching or runoff method applied to nitrogen and water-balance records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_emission_records`
- Sources: `ipcc-2019-refinement`

### Process: Harvest and farm-gate fruit handling (`harvest_farm_gate`)

#### Inputs

##### Product flows

###### Handling electricity (`handling_electricity_input`)

Record electricity used for harvesting or farm-gate handling and allocate metered or batch consumption to accepted fruit.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter or batch allocation to accepted fruit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_and_handling_records`

###### Reusable crate service (`reusable_crate_input`)

Record reusable crate or pallet use as a packaging function, including throughput, return rate, and the mass or use basis.

- Selected flow: Pallet and crate packaging function
- Flow property / unit: Mass or service / kg or use
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: crate uses or mass allocated by accepted throughput and return rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_and_handling_records`

###### Handling water (`handling_water_input`)

Record process water crossing the handling boundary from meter or batch records and distinguish it from irrigation water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter or batch record for water crossing the handling boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_handling_records`

##### Waste flows

###### Cull fruit (`cull_fruit_output`)

Record rejected or culled pears and quinces by batch, quantity, and destination at the farm-gate handling step.

- Selected flow: Cull pears and quinces
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by destination and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_handling_records`

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable pears and quinces (`marketable_fruit_output`)

Record accepted pear and quince mass at the declared hand-off state as the terminal marketable fruit output.

- Selected flow: Fresh pears and quinces at farm gate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass at declared hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg reference fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_handling_records`

##### Waste flows

###### Handling residues and wastewater (`handling_waste_output`)

Record handling residues and wastewater by material class, batch quantity, and destination at the declared farm-gate boundary.

- Selected flow: Farm-gate fruit-handling waste
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured batch quantity by material class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_handling_records`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | orchard and handling | Prefer separate pear/quince block and handling records before allocation. | `iso-14044-2006` |
| `allocation_mixed_pear_quince` | mixed production | Use measured crop-year mass allocation when crop-specific records are unavailable and disclose the mix. | `iso-14044-2006` |
| `allocation_orchard_establishment` | perennial establishment | Allocate establishment over the declared productive period using the same period for inputs and outputs. | `fao-good-agricultural-practices` |
| `allocation_cull_and_byproducts` | culls and co-products | Subdivide by destination; use economic allocation only for documented valuable co-products when subdivision is infeasible. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `orchard_establishment` | trees, inputs, land, residues | planting plan, nursery invoice, field log, area record | block_id; species; cultivar; rootstock; tree_count; planting_year; area; inputs; residue_fate | reconcile planting and replacement to blocks and allocation period | tree; ha; kg; m3 | each event | declared allocation period | all included blocks | sum by block, product, and destination | maps; invoices; field records |
| `cp_orchard_activity_records` | `orchard_management` | nutrients, irrigation, protection, fuel, electricity, land | invoices, labels, spray log, meter, contractor record | block_id; area; date; product; amount; nutrient_content; water; fuel; electricity | reconcile every input to block and crop year | kg; kg nutrient; m3; L; kWh; ha | each event or meter period | full crop year | all included blocks | sum by physical identity; normalize with same-year yield | invoices; labels; calibrated meters |
| `cp_orchard_emission_records` | `orchard_management` | soil and crop-protection emissions | nutrient balance, soil, weather, drainage, residue, factor record | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set | calculate each pathway using one declared method | kg N; kg emission; ha | event and annual calculation | full crop year | all included blocks | calculate by block, aggregate, normalize by yield | factors; model version; balance review |
| `cp_harvest_and_handling_records` | `harvest_farm_gate` | harvest, accepted fruit, culls, energy, water, crates, waste | harvest ticket, scale, batch sheet, meter, crate log | block_id; batch_id; harvest_date; harvested_mass; accepted_mass; cull_mass; species; cultivar; grade; electricity; water; crate_uses; destination | reconcile batches to accepted hand-off output | kg; kWh; m3; use | each harvest or batch | harvest and handling period | all included batches | sum accepted fruit, culls, and wastes; close mass balance | calibrated scales; quality and meter records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_orchard_to_reference_flow` | orchard inputs and emissions | crop-year amount per area / same-year marketable yield per area × 1,000 kg | amount; area; accepted fruit mass | amount per 1,000 kg fruit |  |
| `calc_nutrient_content` | fertilizers and amendments | product mass × declared nutrient fraction | product; mass; assay; basis | kg N, kg P2O5, kg K2O | `fao-good-agricultural-practices` |
| `calc_perennial_establishment_allocation` | establishment | total burden × declared productive-period share | establishment amount; productive period | allocated annual amount | `fao-good-agricultural-practices` |
| `calc_managed_soil_emissions` | N2O, ammonia, nitrate | selected IPCC or regional factors applied to crop-year activity records | activity; soil/climate; factors | pathway emissions | `ipcc-2019-refinement` |
| `calc_handling_mass_balance` | harvest and handling | harvested input = accepted fruit + culls + handling waste + measured losses within uncertainty | batch masses; destinations | reconciled outputs |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference and outputs | Confirm pear or quince species, cultivar, crop mix, maturity, grade, and hand-off; do not substitute apple or generic fruit. | orchard, lot, and sales records |
| `dq_temporal_alignment` | all rows | Use the same crop year for inputs, emissions, harvest, yield, and handling; disclose proxy years. | dated field and batch records |
| `dq_perennial_allocation` | establishment | Document orchard age, productive period, replacement rate, and allocation period. | planting maps and orchard records |
| `dq_mass_and_destination` | outputs and waste | Retain calibrated mass records and destination evidence for fruit, culls, residues, and wastewater or solids. | scales and destination tickets |
| `dq_completeness` | process map and flows | Reconcile every included block and batch and distinguish zero, not applicable, proxy, and missing values. | block roster and reconciliation |
| `dq_identity_resolution` | all identity evidence gaps | Before final publication, resolve identities to verified UUIDs or retain explicit unmapped coverage; never force a nearby product identity. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal output | One terminal marketable fruit output equals 1,000 kg after scaling and declares species, mix, maturity, grade, and hand-off qualifiers. |  |
| `validation_orchard_route` | process map | Include management once; include establishment only for its allocation period and handling only before hand-off. |  |
| `validation_crop_year_reconciliation` | orchard inventory | Area, inputs, emissions, harvest, culls, residue fates, and yields refer to the same crop year and represented blocks. |  |
| `validation_nutrient_and_emission_basis` | nutrients and emissions | Reconcile nutrient content, residue fate, soil emissions, and factors with the disclosed method and basis. | `ipcc-2019-refinement` |
| `validation_handling_mass_balance` | handling | Reconcile harvested input with accepted fruit, culls, wastes, and losses within declared uncertainty. |  |
| `validation_flow_identity` | every flow | Use `fixed` only for exact verified UUIDs and `parameterized` only for applicable reviewed Flow Sets; otherwise retain unmapped coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground fresh pear and quince orchard and farm-gate fruit dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | farm-gate LCA preserving crop mix, geography, crop year, orchard allocation, hand-off state, and allocation rules |
| excluded_use | nursery, processed fruit, retail or consumer systems, or studies omitting perennial allocation and crop-mix qualifiers |
| required_metadata | species/cultivar; crop mix; geography; orchard age; area; crop year; yield; irrigation; nutrient/protection records; boundary; cull destination; allocation basis disclosure |
| required_quality_disclosure | temporal, geographical, technological, completeness, measurement, uncertainty, identity, and allocation quality |
| update_trigger | changed crop route, orchard guidance, crop mix, hand-off definition, Flow Set taxonomy, or verified identity mapping |

## 11. Data Sources

| source_id | type | reference | use |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO good agricultural practices guidance for orchard management and harvest records | boundary, establishment, nutrient, and collection rules |
| `ipcc-2019-refinement` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories | soil and residue emission methods |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | allocation and co-product handling |
