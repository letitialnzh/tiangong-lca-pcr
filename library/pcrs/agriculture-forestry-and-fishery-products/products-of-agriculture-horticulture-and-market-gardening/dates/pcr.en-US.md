---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.dates
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fresh dates (date palm fruit)

## 1. Scope and Applicability

This PCR covers fresh date palm fruit harvested from cultivated date palm orchards and transferred at the farm gate in an as-received, unprocessed state. It applies to bearing orchards under irrigated or rainfed management and includes orchard establishment or renewal inputs when assigned to the declared productive cycle, orchard management, harvest, and basic farm-gate handling needed to measure fresh fruit output. It excludes dried, frozen, preserved, pitted, or processed dates, washing or sanitizing, off-farm sorting or packing, packaging manufacture, cold storage, transport, and downstream processing.

Basic farm-gate handling may include weighing, lot identification, and removal of visibly rejected fruit, but it must not change the product into a processed or preserved date product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.dates |
| classification_refs | CPC 3.0: 01314 Dates |
| covered_products | fresh date palm fruit transferred at the farm gate, including cultivar-specific fresh fruit sold for direct consumption or further processing |
| excluded_products | dried, frozen, preserved, pitted, syrup, paste, confectionery, packaged, stored, transported, or otherwise processed dates; date-palm planting material; leaves, fronds, offshoots, and other non-fruit products |
| representative_product | fresh, unprocessed date palm fruit at farm gate |
| production_route | perennial date palm orchard establishment or renewal, orchard cultivation, harvest, and basic farm-gate handling |
| market_state | as-received fresh fruit with cultivar, harvest maturity, quality grade, mass basis, and rejected-fruit destination declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | fresh, unprocessed date palm fruit at the farm gate |
| How much | 1,000 kg fresh fruit as received |
| How well | harvested fresh fruit with cultivar, maturity, quality grade, moisture or dry-matter basis when measured, and accepted or rejected status declared |
| How long or cycle | one declared orchard crop cycle or harvest campaign |
| reference_flow_link | terminal fresh-fruit output from `date_harvest_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Dates `bf7ddd60-c5f1-4d21-9c85-b05b93972595` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or variety; orchard geography; harvest year; declared crop cycle; orchard age and bearing area; harvest maturity; accepted-fruit quality grade; as-received mass basis; irrigation source; nutrient and soil-amendment basis; rejected-fruit destination; farm-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | reference date fruit | Mass | kg | Report accepted fresh fruit mass as received at the farm gate. If dry matter or moisture is measured, retain the as-received basis and measurement method; do not silently convert to a dry basis. |
| `crop_cycle_normalization` | orchard inputs and emissions | activity-specific property | activity-specific unit | Normalize each crop-cycle total to 1,000 kg accepted fresh fruit using accepted fresh-fruit mass from the same orchard area and campaign. |
| `nutrient_product_and_basis` | fertilizer and soil-amendment inputs | product mass and nutrient basis | kg product; kg N, kg P2O5, kg K2O, or declared organic nutrient basis | Record actual product name and applied product mass, then record the declared nutrient basis used for calculation. Do not infer nutrient content from a generic fertilizer name. |
| `water_and_energy_consistency` | irrigation, water withdrawal, pumping electricity, and fuel | volume, energy, or mass | m3, kWh, L, or kg | Keep metered or invoiced activity units separate from calculated conversions and disclose the source, meter boundary, and conversion basis for every conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | established or newly established date palm orchard at the start of the declared productive crop cycle, with purchased planting material and management inputs crossing the foreground boundary |
| starting_condition_role | beginning of the declared date-palm orchard production cycle |
| product_classification_scope | cultivated fresh date palm fruit corresponding to CPC 3.0 code 01314, unprocessed at farm gate |
| recursive_input_rule | Date fruit must not be used as a recursive input to this same product category. Planting material is recorded as a nursery, seedling, or offshoot product with its own upstream dataset; retained fruit or culls are not counted as planting material. |
| upstream_dataset_requirement | Compatible upstream datasets are required for planting material, fertilizer and soil-amendment products, crop-protection formulations, fuel, electricity, irrigation supply, and contracted services when those activities are not measured as foreground activity. |
| disclosure | Disclose orchard location, cultivar, age, density, bearing area, crop cycle, irrigation source and volume, nutrient product and nutrient basis, crop protection, energy, harvest lots, accepted fruit, rejected fruit, farm-gate handling, and excluded post-farm-gate activities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_cycle` | date palm orchard production | Include orchard establishment or renewal inputs assigned to the declared productive cycle, orchard management, harvest, and basic farm-gate handling up to the fresh-fruit hand-off. | `iso-14044-2006` |
| `boundary_fresh_unprocessed_gate` | reference product and farm-gate output | Stop the foreground boundary at transfer of fresh, unprocessed date fruit. Exclude washing, drying, preservation, packaging, off-farm storage, transport, and downstream processing. | `codex-cxs-143-1985-dates`; `iso-14044-2006` |
| `boundary_direct_environmental_exchanges` | nutrient-related soil and air exchanges | Include direct and applicable indirect nutrient-related environmental exchanges calculated from the same crop-cycle activity records used for nutrient and residue accounting, using a geographically applicable method. | `ipcc-2019-refinement-vol-4` |
| `boundary_recursive_product_inputs` | same-category product inputs | Do not loop a fresh date-fruit output back into the same date PCR. Use a distinct upstream identity for planting material or other purchased inputs and disclose retained material separately. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `date_orchard_production` | Date palm orchard production | required | always | perennial orchard establishment, management, resource use, and environmental exchanges | orchard block area and crop-cycle activity totals divided by accepted fresh fruit mass |
| `date_harvest_farm_gate` | Date harvest and farm-gate handling | required | always | harvest, basic lot handling, accepted product transfer, and rejected-fruit accounting | harvest-lot mass balance and accepted fresh-fruit output |

### Process: Date palm orchard production (`date_orchard_production`)

#### Inputs

##### Product flows

###### Date palm planting material (`date_palm_planting_material_input`)

Record nursery plants, seedlings, or offshoots crossing into the orchard boundary. Retained date fruit and harvested fruit must not be substituted for planting-material identity.

- Selected flow: Date palm planting material
- Flow property / unit: Count or mass / plants, offshoots, or kg as recorded
- Amount rule: measured planting-material quantity installed or replaced during the declared crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_activity_records`
- Sources:

###### Agricultural nutrient and fertilizer inputs (`date_orchard_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_activity_records`
- Sources:

###### Irrigation water supplied (`irrigation_water_input`)

Record water applied to the orchard from the declared irrigation source. Rainfed production records zero irrigation only when field records support that condition.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or reconciled irrigation volume by orchard block and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_withdrawal_records`
- Sources: `fao-56-crop-evapotranspiration-1998`

###### Electricity for irrigation pumping (`pumping_electricity_input`)

Record electricity consumed by pumps within the foreground boundary when pumping is operated or metered by the orchard.

- Selected flow: Electricity supply for irrigation pumping
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: pump meter, electricity invoice, or documented pump-energy calculation allocated to the orchard block and crop cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_and_withdrawal_records`
- Sources:

###### Crop-protection formulation supplied (`crop_protection_input`)

Record each actual crop-protection formulation applied, including product identity, application event, and applied mass. Do not force a formulation into a generic material identity.

- Selected flow: Crop-protection formulation for date palm production
- Flow property / unit: Product mass / kg formulation
- Amount rule: sum measured formulation mass by product and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_activity_records`
- Sources:

##### Waste flows

##### Elementary flows

###### Date palm orchard land occupied (`land_occupation_input`)

Record land occupation for orchard area and declared crop-cycle duration when land occupation is part of the study foreground.

- Selected flow: Land occupation by date palm orchard
- Flow property / unit: Area-time / m2*a or site-supported equivalent
- Amount rule: orchard area multiplied by the declared crop-cycle or annualized occupation period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_activity_records`
- Sources: `iso-14044-2006`

###### Direct irrigation water withdrawn from the environment (`direct_water_withdrawal_input`)

Record direct environmental water withdrawal only when the orchard withdraws water itself and the water-supply activity is not already represented by an upstream irrigation-water dataset.

- Selected flow: Water resource withdrawal for orchard irrigation
- Flow property / unit: Volume / m3
- Amount rule: measured or reconciled environmental withdrawal volume by source and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_withdrawal_records`
- Sources: `fao-56-crop-evapotranspiration-1998`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Nitrous oxide released to ambient air (`soil_nitrous_oxide_output`)

Calculate direct and applicable indirect nitrous oxide emissions from declared nitrogen inputs, residue or organic-amendment inputs, and the selected geographically applicable method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: method-calculated emission from crop-cycle nitrogen and residue activity data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_activity_records`
- Sources: `ipcc-2019-refinement-vol-4`

###### Ammonia released to ambient air (`soil_ammonia_output`)

Calculate ammonia emissions when the selected method requires them for declared nutrient and soil-amendment inputs.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: method-calculated emission from declared nutrient products, application method, and crop-cycle records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_activity_records`
- Sources: `ipcc-2019-refinement-vol-4`

###### Nitrogen oxides released to ambient air (`soil_nitrogen_oxides_output`)

Calculate nitrogen-oxide emissions when required by the selected nutrient-emission method and retain method tier and geography in dataset metadata.

- Selected flow: Nitrogen oxides emission to ambient air
- Flow property / unit: Mass / kg NOx
- Amount rule: method-calculated emission from declared nitrogen inputs and crop-cycle records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_activity_records`
- Sources: `ipcc-2019-refinement-vol-4`

###### Nitrate released to soil (`soil_nitrate_output`)

Record or calculate nitrate release to soil when supported by the selected regional method, soil balance, or measured evidence; do not infer it solely from fertilizer purchase records.

- Selected flow: Nitrate emission to soil
- Flow property / unit: Mass / kg nitrate
- Amount rule: method-calculated or measured nitrate release linked to the declared crop-cycle nutrient balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_activity_records`
- Sources: `ipcc-2019-refinement-vol-4`

###### Phosphate released to soil (`soil_phosphate_output`)

Record or calculate phosphate release to soil when supported by the selected regional method, soil balance, or measured evidence; disclose the soil and erosion assumptions used.

- Selected flow: Phosphate emission to soil
- Flow property / unit: Mass / kg phosphate
- Amount rule: method-calculated or measured phosphate release linked to the declared crop-cycle nutrient and soil balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle and per 1,000 kg accepted fresh fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_activity_records`
- Sources: `ipcc-2019-refinement-vol-4`

### Process: Date harvest and farm-gate handling (`date_harvest_farm_gate`)

#### Inputs

##### Product flows

###### Mobile fuel for harvest and farm-gate handling (`orchard_mobile_fuel_input`)

Record fuel used by harvest and on-farm handling equipment up to the farm-gate transfer. If harvesting is fully manual and no fuel crosses the boundary, record zero with supporting activity records.

- Selected flow: Mobile machinery fuel for date harvest and farm-gate handling
- Flow property / unit: Fuel mass, volume, or energy / kg, L, or MJ as recorded
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: fuel invoice, tank record, contractor statement, or equipment calculation assigned to the declared harvest campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg accepted fresh fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Sources:

##### Waste flows

###### Rejected or unmarketable date fruit (`rejected_date_fruit_waste_output`)

Record fruit rejected at harvest or farm-gate handling as waste when it is not transferred as a declared co-product. Report destination and whether it remains in the orchard, is composted, fed, or otherwise treated.

- Selected flow: Rejected or unmarketable fresh date fruit waste
- Flow property / unit: Mass / kg fresh fruit
- Amount rule: measured or reconciled rejected-fruit mass by harvest lot and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg accepted fresh fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Sources: `codex-cxs-143-1985-dates`

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh date palm fruit at farm gate (`date_fruit_farm_gate_output`)

Record accepted fresh date fruit transferred at the farm gate as the terminal reference product. Retain as-received mass, harvest lot, maturity, quality grade, and destination without post-farm-gate processing.

- Selected flow: Fresh date palm fruit at farm gate, unprocessed
- Flow property / unit: Mass / kg
- Amount rule: measured accepted fresh-fruit mass at farm-gate transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg accepted fresh fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources: `codex-cxs-143-1985-dates`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_date_output` | orchard and harvest processes with only fresh date fruit as product output | Assign orchard and harvest burdens to accepted fresh date fruit when no deliberate co-product leaves the boundary. Do not treat culls or residues classified as waste as co-products. | `iso-14044-2006` |
| `allocation_declared_coproducts` | deliberate non-date product outputs | If a deliberate co-product leaves the boundary, first test documented physical-causality allocation. If no defensible physical relationship exists, use documented economic allocation and report mass, revenue, reference period, and allocation factor. | `iso-14044-2006` |
| `allocation_perennial_establishment` | orchard establishment or renewal inputs | Allocate establishment or renewal burdens over the declared productive period using the documented orchard-life or productive-period assumption, and disclose the assumption in dataset metadata. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_activity_records` | `date_orchard_production` | planting material, nutrient products, soil amendments, crop protection, land, and orchard activity | supplier invoices, application logs, orchard register, field plan, and block records | block_id; cultivar; orchard_age; bearing_area_ha; planting_material_quantity; product_name; product_mass; nutrient_basis; application_date; fuel; electricity; area; crop_cycle | collect event records from orchard operator and reconcile to supplier and block records | mixed activity-specific units | each application or activity, reconciled each crop cycle | one declared crop cycle and harvest year | each orchard block, with block aggregation retained | sum by block and crop cycle; preserve actual product and nutrient basis before normalization | invoices, operator logs, agronomist or field-plan review, and completeness reconciliation |
| `cp_irrigation_and_withdrawal_records` | `date_orchard_production` | irrigation water, pumping electricity, and direct water withdrawal | meter logs, pump records, water bills, source permits, or documented water-balance calculations | block_id; source_type; meter_start; meter_end; irrigation_event_date; volume_m3; pump_kwh; withdrawal_m3; rainfed_flag | read meters or reconcile invoices and source records to irrigation schedule and block area | m3 and kWh | every irrigation event or billing period, reconciled each crop cycle | one declared crop cycle and irrigation season | each water source and orchard block | sum by source, block, and crop cycle; prevent double counting supplied water and direct withdrawal | meter calibration or reading evidence, invoice or permit checks, and source reconciliation |
| `cp_harvest_output_records` | `date_harvest_farm_gate` | fuel, accepted fruit, rejected fruit, and lot handling | harvest log, scale ticket, lot record, contractor statement, and destination record | block_id; harvest_date; lot_id; accepted_mass_kg; rejected_mass_kg; maturity; quality_grade; moisture_or_dry_matter; destination; fuel_quantity | weigh each harvest lot and reconcile accepted, rejected, and destination masses to farm-gate transfer | kg fresh fruit and activity-specific fuel unit | every harvest lot, reconciled each campaign | one harvest campaign and crop cycle | each orchard block and receiving lot | sum accepted output and rejected output by campaign; normalize linked activity totals to accepted output | calibrated scale or verified ticket, lot traceability, destination evidence, and mass-balance check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all crop-cycle inventory rows | reference-normalized amount = crop-cycle amount x 1,000 kg / accepted fresh-fruit mass in kg | accepted_fresh_fruit_mass_kg; crop_cycle_amount | amount per 1,000 kg accepted fresh fruit | `iso-14044-2006` |
| `calc_nutrient_basis` | nutrient and soil-amendment inputs | nutrient amount = actual product mass x declared nutrient fraction; retain product name, product mass, nutrient basis, and application event | product_mass; declared_nutrient_fraction; nutrient_basis | nutrient-basis input amount |  |
| `calc_water_energy_reconciliation` | irrigation, water withdrawal, and pumping electricity | reconcile meter, invoice, and pump-calculation values by block and crop cycle; do not add supplied water and direct withdrawal when they describe the same volume | meter_records; invoices; source_records; pump_calculation | reconciled water and electricity totals | `fao-56-crop-evapotranspiration-1998` |
| `calc_soil_emissions` | soil and air nutrient-related elementary outputs | apply the selected geographically applicable method tier to declared nitrogen, organic-amendment, residue, soil, and climate activity data; disclose tier and factors | nutrient_inputs; organic_amendments; residue_data; soil_and_climate_parameters | method-calculated emission amounts | `ipcc-2019-refinement-vol-4` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_qualifiers` | reference flow, product outputs, planting material, and crop-protection inputs | Declare product identity, cultivar, geography, harvest campaign, maturity, quality grade, and identity evidence gap notes. Resolve all identities before creating a final TIDAS exchange. | dataset metadata, product description, and identity review |
| `dq_mass_reconciliation` | harvest and farm-gate handling | Accepted fruit, rejected fruit, and other declared destinations must reconcile to recorded harvest-lot balance within documented measurement uncertainty. | scale tickets, lot records, destination records, and reconciliation worksheet |
| `dq_activity_completeness` | orchard activity records | Cover every declared orchard block and crop-cycle activity, including zero-activity claims for rainfed irrigation or omitted nutrient inputs when supported by field evidence. | block register, field plan, invoices, meters, and operator confirmation |
| `dq_nutrient_basis_traceability` | fertilizer and soil-amendment inputs | Reconcile product mass, nutrient fraction, application event, and nutrient-basis unit; do not replace missing product evidence with a generic default. | supplier label or specification, invoice, application log, and calculation sheet |
| `dq_boundary_disclosure` | complete foreground dataset | Disclose that product is fresh and unprocessed at farm gate and identify excluded washing, drying, packing, storage, transport, or processing. | process notes, boundary declaration, and downstream-use statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | reference flow and farm-gate output | Confirm terminal output is accepted fresh date palm fruit, uses a mass basis in kg, and carries all required qualifiers; an evidence gap semantic identity must not be silently replaced by another fruit flow. | `codex-cxs-143-1985-dates` |
| `validation_process_coverage` | process map and inventory | Confirm orchard production and harvest/farm-gate handling are represented, and every included flow row has a process, direction, flow type, amount rule, basis, evidence kind, and collection protocol where collection or calculation is required. |  |
| `validation_input_output_balance` | harvest process | Confirm accepted fresh fruit, rejected fruit, and any declared co-product or waste destinations reconcile to harvest records and no post-farm-gate output is included. | `iso-14044-2006` |
| `validation_nutrient_and_emission_linkage` | nutrient inputs and soil or air emissions | Confirm calculated nutrient-related emissions link to declared nutrient, soil-amendment, residue, and method inputs, and disclose selected emission method and geography. | `ipcc-2019-refinement-vol-4` |
| `validation_flow_set_resolution` | parameterized inventory rows | Before final TIDAS process publication, resolve every parameterized Flow Set row to a compatible concrete identity with property, unit, direction, flow type, geography, and intended-use evidence. |  |
| `validation_farm_gate_exclusions` | complete foreground dataset | Reject datasets including washing, drying, preservation, packaging, off-farm storage, transport, or downstream date processing unless the study explicitly declares a boundary extension outside this PCR. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | foreground date-palm orchard and farm-gate process data for downstream process and lifecyclemodel projections |
| allowed_use | modelling fresh, unprocessed date palm fruit at the declared farm-gate boundary when required qualifiers, crop-cycle records, and identity resolutions are present |
| excluded_use | modelling dried or preserved dates, date processing, packaging, storage, transport, or a different fruit category; evidence gap candidate identities are not final TIDAS exchanges |
| required_metadata | PCR id and version; CPC reference; cultivar; geography; orchard age and bearing area; crop cycle and harvest campaign; fresh-mass basis; maturity and quality grade; irrigation source; nutrient and soil-amendment basis; rejected-fruit destination; boundary declaration |
| required_quality_disclosure | temporal coverage, site coverage, block aggregation, measurement and calculation methods, missing-data treatment, parameterized Flow Set resolutions, identity evidence gap notes, and allocation assumptions |
| update_trigger | change in cultivar or route, irrigation source, nutrient or crop-protection practice, orchard age or productive-period assumption, farm-gate product state, applicable Flow Set version, or evidence and method rules |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-143-1985-dates` | standard | Codex Alimentarius CXS 143-1985, Standard for Dates | fresh-date product state, quality qualifiers, and rejected-product distinction |
| `fao-56-crop-evapotranspiration-1998` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration | irrigation activity records, water-balance evidence, and irrigation disclosure |
| `ipcc-2019-refinement-vol-4` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4: Agriculture, Forestry and Other Land Use | nutrient-related soil and air emission calculation method selection |
| `iso-14040-2006` | standard | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework | life-cycle boundary and data interpretation context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | normalization, allocation, co-product handling, and data-quality rules |
