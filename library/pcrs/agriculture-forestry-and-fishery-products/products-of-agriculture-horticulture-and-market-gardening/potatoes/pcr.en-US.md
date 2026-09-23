---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.potatoes
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Potatoes

## 1. Scope and Applicability

This PCR applies to primary potato (`Solanum tuberosum`) production from planting through harvest, dry field cleaning, sorting, and loading of fresh, unprocessed tubers at the farm gate. It covers open-field and protected cultivation when the production route, geography, crop cycle, planting-material origin, irrigation condition, and farm-gate preparation are declared.

The default boundary excludes seed-potato multiplication as a marketed seed service, washing, curing or storage after farm-gate hand-off, packing for retail, processing, freezing, drying, cooking, transport after the farm gate, and consumer use. A dataset may include an excluded activity only through a separately declared extension that keeps its inventory and quantitative reference distinguishable.

The flow cards below are requirements for obtaining a foreground inventory. A conditional umbrella card represents the actual zero, one, or multiple exchanges found in records; it is not expanded merely because a Flow Set contains several groups.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.potatoes |
| classification_refs | CPC 3.0: 01510 Potatoes |
| covered_products | fresh, unprocessed potato tubers harvested for food, feed, or other non-seed use and handed off at the farm gate |
| excluded_products | certified or marketed seed potatoes; sweet potatoes; cassava; yams; taro; processed, preserved, frozen, dried, cooked, peeled, or retail-packed potatoes |
| representative_product | marketable fresh potato tubers |
| production_route | planting material receipt; soil and crop management; harvest; dry cleaning and sorting; farm-gate loading |
| market_state | fresh, unprocessed, as-received wet mass at farm gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | marketable fresh, unprocessed potato tubers at the farm gate |
| How much | 1,000 kg as-received wet mass |
| How well | meets the producer's declared sale or transfer specification, with soil, culls, severe damage, and non-marketable material excluded from the reference amount |
| How long or cycle | one declared potato crop cycle through farm-gate loading |
| reference_flow_link | terminal output of `potato_cultivation_and_farm_gate_preparation` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Potatoes; fresh, unprocessed produce; production mix, at farm gate `65443696-51af-4ba8-8f73-06d434a36605` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | geography; cultivar or declared variety group; crop year and cycle; intended use; production system; irrigation condition; harvested area; yield; moisture or as-received basis; farm-gate preparation; product grade; allocation treatment |
| Binding | `fixed` |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference potatoes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to 1,000 kg accepted potatoes on the declared as-received basis; do not mix dry-matter and wet-mass bases without a documented conversion. |
| `area_and_yield` | field activity and yield | area and mass | ha and kg | Use the same harvested area and crop-cycle output to calculate yield and to normalize area-based inputs and emissions. |
| `nutrient_product_and_content` | nutrient products | product mass and declared nutrient content | kg product and kg N, kg P2O5, kg K2O, or explicitly declared equivalent | Preserve every actual fertilizer or amendment product mass; calculate nutrient contents separately and never replace product identity with nutrient mass. |
| `energy_carrier_preservation` | electricity and fuels | carrier quantity and energy | kWh, L, kg, or MJ as applicable | Retain the measured carrier unit and conversion factor; do not aggregate different carriers until each emitted exchange has been identified. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | planting tubers and purchased inputs cross the farm production boundary before establishment of the declared crop |
| starting_condition_role | foreground crop-cycle start |
| product_classification_scope | CPC 3.0 01510 fresh potatoes; classification is mapping context and does not replace the semantic product boundary |
| recursive_input_rule | Potato tubers retained or purchased for planting are recorded as a separate planting-material input with seed-grade and origin qualifiers; do not count them as part of the current crop's reference output. |
| upstream_dataset_requirement | use geographically and technologically representative upstream datasets for each concrete planting material, nutrient product, crop-protection product, water supply, and energy carrier |
| disclosure | declare crop cycle, geography, production system, seed-tuber origin, irrigation condition, field area, yield, residue and reject fate, and any post-harvest extension |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | foreground system | Start when planting material and purchased inputs enter the represented crop cycle; end when accepted fresh tubers are dry-cleaned or field-sorted and loaded at the farm gate. | `fao-root-tuber-concepts-2003`; `ilcd-handbook-2010` |
| `boundary_input_completeness` | field management | Include actual planting material, nutrient and soil-amendment products, crop-protection products, irrigation supply, and operational energy when used; report zero only from supporting records. | `fao-save-and-grow-2011` |
| `boundary_soil_emissions` | managed soil | Include applicable direct and indirect soil emissions caused by nitrogen inputs, crop residues, urea, and liming under one disclosed method; prevent double counting with upstream datasets. | `ipcc-2019-managed-soils` |
| `boundary_land_change` | land transformation | Land-use change is outside the default crop-cycle inventory unless a study rule requires it; if included, disclose method, time horizon, land history, and allocation separately. | `ilcd-handbook-2010` |
| `boundary_post_gate` | downstream activities | Exclude transport, storage, washing, packaging, and processing after the farm-gate hand-off unless a distinct extension is declared. | `ilcd-handbook-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `potato_cultivation_and_farm_gate_preparation` | Potato cultivation and farm-gate preparation | `required` | always | foreground biological production and farm-gate hand-off | 1,000 kg accepted fresh potatoes |

### Process: Potato cultivation and farm-gate preparation (`potato_cultivation_and_farm_gate_preparation`)

#### Inputs

##### Product flows

###### Planting tubers supplied (`planting_tubers_input`)

Record purchased or farm-retained planting tubers as a separate physical input with origin, variety, quality status, and storage condition. The final data package must resolve the actual planting-material flow; a generic agricultural-input candidate is not an acceptable identity.

- Selected flow: Seed-grade potato planting tubers; foreground identity required
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the declared crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources: `fao-save-and-grow-2011`

###### Agricultural nutrient and fertilizer inputs (`potato_cultivation_and_farm_gate_preparation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources: `fao-save-and-grow-2011`

###### Irrigation water supplied (`irrigation_water_input`)

Record supplied irrigation water only for irrigated production. Rainfed production records zero irrigation when field evidence confirms that no irrigation water crossed the product-input boundary.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered, delivery-recorded, or reconciled volume applied to the represented fields
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy_records`
- Sources: `fao-save-and-grow-2011`

###### Operational energy carriers supplied (`operational_energy_input`)

Use one conditional card for electricity and fuels consumed by field operations, irrigation pumping, harvest, dry cleaning, sorting, and farm-gate loading. Foreground generation emits each actual carrier separately and then resolves its electricity, mobile-fuel, or stationary-fuel group and UUID.

- Selected flow: Operational electricity and fuel carriers
- Flow property / unit: Energy or carrier amount / kWh, MJ, L, or kg as recorded
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: reconcile meter, invoice, tank, machinery, and contractor records to the represented fields and crop cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_energy_records`
- Sources: `fao-save-and-grow-2011`

###### Crop-protection formulations supplied (`crop_protection_products_input`)

Record each actual formulation used with product identity, active ingredient when known, concentration, application amount, and event. No reviewed Flow Set covers this umbrella concept, and the current search did not support one exact generic UUID.

- Selected flow: Crop-protection formulations; foreground identity required
- Flow property / unit: Product mass or volume / kg or L product
- Amount rule: sum each actual formulation separately from application records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources: `fao-save-and-grow-2011`

##### Waste flows

##### Elementary flows

###### Land occupation (`land_occupation_input`)

Record the net cultivated area and duration attributable to the represented crop cycle.

- Selected flow: Land occupation for potato cultivation
- Flow property / unit: Area-time / m2*a or site-supported equivalent
- Amount rule: harvested field area multiplied by the declared occupation duration and normalized to accepted yield
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_and_harvest_records`
- Sources: `fao-root-tuber-concepts-2003`

#### Outputs

##### Product flows

###### Marketable fresh potatoes (`reference_potatoes_output`)

This is the single terminal quantitative reference. The amount excludes soil, field residues, culls, severe damage, and other material outside the declared sale or transfer specification.

- Selected flow: Potatoes; fresh, unprocessed produce; production mix, at farm gate `65443696-51af-4ba8-8f73-06d434a36605`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: exactly 1,000 kg after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

###### Secondary usable potatoes transferred (`secondary_potato_product_output`)

Record off-grade or small tubers as a separate product output only when they have a documented beneficial destination or sale. Preserve grade, destination, and as-received mass; do not silently include them in the reference amount.

- Selected flow: Potatoes; fresh, unprocessed produce; production mix, at farm gate `65443696-51af-4ba8-8f73-06d434a36605`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: measured as-received mass by documented beneficial destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_and_harvest_records`
- Sources:

##### Waste flows

###### Removed potato biomass sent as waste (`removed_potato_biomass_waste`)

Record only haulm, damaged tubers, or rejected tubers that leave the foreground as waste. Keep material identity and destination separate. Current candidates describe food-plant trimming waste and are not exact identities for this farm-gate row.

- Selected flow: Removed potato biomass waste; foreground identity and destination required
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled wet mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_and_harvest_records`
- Sources: `ipcc-2019-managed-soils`

##### Elementary flows

###### Nitrous oxide emitted to ambient air (`soil_nitrous_oxide_output`)

Calculate direct and applicable indirect nitrous oxide emissions from collected nitrogen-input, residue, soil, climate, volatilization, and leaching activity data using one declared geographically applicable method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: apply `calc_managed_soil_n2o`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_soil_emission_activity`
- Sources: `ipcc-2019-managed-soils`

###### Carbon dioxide emitted from urea or liming (`soil_carbon_dioxide_output`)

Record this emission only when urea or carbonate liming materials are applied and the selected method requires the pathway.

- Selected flow: Carbon dioxide emission to ambient air
- Flow property / unit: Mass / kg CO2
- Amount rule: apply the selected urea or liming carbon-content method to collected application records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_soil_emission_activity`
- Sources: `ipcc-2019-managed-soils`

###### Nitrate released to water (`nitrate_to_water_output`)

Calculate nitrate loss only where the selected nutrient-loss method and site conditions support a water pathway; retain the receiving-water context.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate or declared nitrogen basis
- Amount rule: apply the selected nutrient-loss method to collected nitrogen activity and site conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_soil_emission_activity`
- Sources: `ipcc-2019-managed-soils`

###### Phosphate released to water (`phosphate_to_water_output`)

Calculate phosphate loss only where erosion, runoff, drainage, or another selected method supports the pathway; retain phosphorus basis and receiving-water context.

- Selected flow: Phosphate emission to water
- Flow property / unit: Mass / kg phosphate or declared phosphorus basis
- Amount rule: apply a declared geographically applicable phosphorus-loss method to collected activity and site conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted potatoes
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_soil_emission_activity`
- Sources: `fao-save-and-grow-2011`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | field and farm-gate operations | Prefer subdivision and direct measurement of operations and outputs before applying allocation. | `iso-14044-2006`; `ilcd-handbook-2010` |
| `allocation_reference_and_secondary` | accepted and secondary usable potatoes | If both outputs share inseparable burdens, apply economic allocation using contemporaneous farm-gate values; disclose grade, moisture basis, prices, and a mass-allocation sensitivity. | `iso-14044-2006` |
| `allocation_residue_and_waste` | retained residues and waste outputs | Do not allocate burdens to material retained or incorporated in the field or sent as waste; include its management and applicable emissions in the foreground. | `ipcc-2019-managed-soils` |
| `allocation_seed_feedback` | farm-retained planting tubers | Record the retained seed-grade tubers as an input to the next crop cycle and an output or internal transfer of the producing cycle; prevent double counting across cycles. | `ilcd-handbook-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `potato_cultivation_and_farm_gate_preparation` | planting material, nutrient products, crop protection | field log, invoice, application record, product label | field_id; crop_cycle; product_identity; amount; unit; nutrient_or_active_content; date; application_method | reconcile physical products and application events to each represented field | kg; L; kg nutrient | each receipt and application | complete crop cycle | all represented fields | retain each product identity, sum matched events, and normalize using same-cycle accepted yield | invoices; labels; calibrated equipment; field logs |
| `cp_water_and_energy_records` | `potato_cultivation_and_farm_gate_preparation` | irrigation water and energy carriers | meter, delivery, invoice, tank, machinery, or contractor record | field_id; meter_or_equipment_id; carrier; amount; unit; date; operation; shared_use_basis | reconcile direct and contractor use to fields and crop cycle | m3; kWh; L; kg; MJ | each event or meter period | complete crop cycle | all included equipment and fields | retain carriers separately; allocate shared records by documented operating time, area, or measured service | meter calibration; invoices; tank reconciliation; contractor statement |
| `cp_field_and_harvest_records` | `potato_cultivation_and_farm_gate_preparation` | area, accepted potatoes, secondary output, waste, residue fate | field register, scale ticket, yield monitor, grade record, destination record | field_id; planted_area; harvested_area; harvest_date; gross_tuber_mass; accepted_mass; secondary_mass; waste_mass; residue_fate; destination; moisture_basis | reconcile harvested area and all measured outputs to the same crop cycle | ha; kg; percent | each field and harvest lot | complete crop cycle through farm-gate loading | all represented fields and lots | sum by output class and destination; normalize to 1,000 kg accepted potatoes | calibrated scales; area records; grade specification; transfer or waste receipt |
| `cp_soil_emission_activity` | `potato_cultivation_and_farm_gate_preparation` | managed-soil emissions | nutrient, residue, soil, weather, irrigation, and model records | fertilizer_N; organic_N; residue_N; urea; lime; soil; climate; drainage; factor_set; model_version | calculate each pathway with one declared method from collected activity data | kg N; kg material; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented fields | calculate per field, area-weight where justified, then normalize by same-cycle accepted yield | source records; factor provenance; model file; independent unit check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | area-based flows | crop-cycle amount per harvested hectare divided by accepted potato yield per harvested hectare, multiplied by 1,000 kg | amount; harvested area; accepted mass | amount per 1,000 kg accepted potatoes | `fao-root-tuber-concepts-2003` |
| `calc_nutrient_content` | nutrient products | actual product mass multiplied by declared nutrient fraction; preserve whether phosphorus and potassium are elemental or oxide-equivalent | product identity; product mass; assay; reporting basis | product mass and nutrient mass by product |  |
| `calc_energy_carriers` | operational energy | retain actual carrier quantity; apply documented density or lower/heating-value conversion only when required | carrier identity; quantity; unit; conversion factor | carrier amount and energy by identity |  |
| `calc_managed_soil_n2o` | soil nitrous oxide | apply the selected IPCC tier or geographically applicable method to fertilizer N, organic N, returned-residue N, volatilization, and leaching pathways | collected nitrogen activity; residue fate; soil and climate; selected factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_output_balance` | harvest outputs | gross harvested tuber mass equals accepted reference potatoes plus secondary usable potatoes plus waste and measured handling loss within declared uncertainty | matched scale and grade records | reconciled output classes | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference and secondary outputs | Confirm potato tubers rather than sweet potatoes or another root crop; retain cultivar, intended use, grade, state, and farm-gate hand-off. | crop, lot, and transfer records |
| `dq_temporal_alignment` | all foreground rows | Inputs, area, harvest output, residue fate, and emissions must refer to the same crop cycle; disclose proxy periods. | dated field, meter, and harvest records |
| `dq_mass_area_reconciliation` | field and harvest data | Reconcile harvested area, gross yield, accepted output, secondary output, waste, and moisture basis before normalization. | area register; calibrated scale or yield monitor; grade and moisture records |
| `dq_conditional_cards` | nutrient and energy umbrella cards | Expand only from actual foreground records; zero, one, or multiple exchanges are valid, but every emitted exchange must carry one exact Flow Set group and UUID. | application, invoice, meter, and identity-resolution records |
| `dq_identity_resolution` | unmapped cards | Resolve planting material, crop-protection formulations, and removed waste to exact verified UUIDs after actual identity and destination are known; do not use broad proxy candidates. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal product output | Exactly one terminal reference output equals 1,000 kg and uses UUID `65443696-51af-4ba8-8f73-06d434a36605` with the required qualifiers. |  |
| `validation_crop_cycle` | all inventory rows | Field area, inputs, output, residues, and emissions must describe the same declared crop cycle and geography. |  |
| `validation_mass_balance` | harvest and sorting | Reconcile gross harvested tuber mass with accepted potatoes, secondary usable potatoes, waste, and measured handling loss within declared uncertainty. | `mass-balance-identity` |
| `validation_nutrient_identity` | soil nutrient inputs | Preserve each product identity and product mass; nutrient-basis calculations must not replace or merge the concrete product exchanges. |  |
| `validation_flow_set_expansion` | parameterized umbrella cards | A set-only PCR card must be expanded from foreground records; each final TIDAS exchange must resolve to exactly one applicable group and exact UUID. |  |
| `validation_soil_emissions` | managed-soil outputs | Reconcile nitrogen inputs and residue fate with direct and indirect N2O pathways and disclose the selected method and factors. | `ipcc-2019-managed-soils` |
| `validation_no_double_count` | upstream and foreground inventory | Do not count irrigation withdrawal, fuel combustion, fertilizer production, or soil emissions both in upstream datasets and as duplicate foreground burdens. | `ilcd-handbook-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground potato cultivation and farm-gate preparation dataset |
| downstream_use | `secondary_dataset`; `background_dataset` only after review and publication |
| allowed_use | farm-gate LCA of fresh unprocessed potatoes and downstream systems that preserve the declared geography, crop cycle, production route, grade, moisture basis, allocation, and identity resolution |
| excluded_use | seed-potato multiplication, sweet potatoes or other root crops, post-gate washing or storage, processing, retail, or consumer use without a reviewed extension |
| required_metadata | geography; cultivar; crop year and cycle; intended use; production system; irrigation condition; harvested area; yield; moisture basis; grade; residue and waste fate; allocation; flow-identity resolution |
| required_quality_disclosure | foreground coverage; proxy periods; missing records; meter and mass-balance reconciliation; nutrient bases; emission methods and factors; all set-only expansions |
| update_trigger | new reviewed potato evidence, material route or boundary change, revised soil-emission method, changed Flow Set taxonomy, changed Tiangong identity, or representative data outside accepted QA controls |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-root-tuber-concepts-2003` | official_guidance | FAO, Root and Tuber Crops: Concepts and Methods Recommended by FAO and Operational Issues, https://www.fao.org/4/Y9422E/y9422e0d.htm | potato identity; harvested area, production, and yield concepts; reference-flow boundary |
| `fao-save-and-grow-2011` | official_guidance | FAO, Save and Grow: A policymaker's guide to the sustainable intensification of smallholder crop production, https://www.fao.org/4/i2215e/i2215e.pdf | seed, soil management, nutrients, water, crop protection, and energy-related field activity coverage |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | direct and indirect managed-soil N2O, crop-residue nitrogen, urea, liming, volatilization, and leaching pathways |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and disclosure |
| `ilcd-handbook-2010` | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, EUR 24708 EN, DOI 10.2788/38479, https://publications.jrc.ec.europa.eu/repository/handle/JRC48157 | system boundary, subdivision, consistency, data quality, and double-counting controls |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched potato harvest and sorting records | harvest-output balance calculation and validation |
