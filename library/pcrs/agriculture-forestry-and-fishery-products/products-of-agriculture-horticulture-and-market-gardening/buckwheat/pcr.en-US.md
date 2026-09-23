---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.buckwheat
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Buckwheat grain

## 1. Scope and Applicability

This PCR covers cultivated buckwheat grain delivered at the farm gate after harvest and any on-farm cleaning or drying needed to reach the declared market state. It applies to grain grown as a food, feed, or further-processing crop, under rainfed or irrigated management. It excludes certified seed production, green-manure or cover-crop service, forage, hay, silage, grazing, buckwheat honey service, off-farm storage and transport, milling, dehulling, flour, groats, and prepared food.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.buckwheat |
| classification_refs | CPC 3.0: 01192 Buckwheat |
| covered_products | harvested buckwheat grain for food, feed, or further processing, at the farm gate |
| excluded_products | certified buckwheat seed; cover-crop, green-manure, forage, hay, silage, grazing, or pollination service; dehulled groats, flour, prepared foods, and downstream logistics |
| representative_product | unprocessed harvested buckwheat grain |
| production_route | managed buckwheat cultivation, harvest, and conditional on-farm grain conditioning |
| market_state | unprocessed grain at farm gate, with moisture, impurity, damage, and intended-use state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | buckwheat grain at the farm gate |
| How much | 1,000 kg as-received grain |
| How well | harvested, unprocessed grain meeting declared moisture, impurity, damage, and intended-use specifications |
| How long or cycle | one declared crop cycle |
| reference_flow_link | terminal grain output from `buckwheat_field_production` when conditioning is absent, otherwise from `farm_gate_buckwheat_conditioning` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Buckwheat, production mix, at farm gate, harvested grain, unprocessed `7f337a9e-f24a-4d48-841e-0b5326d028d7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or variety; production geography; harvest year; crop season; moisture at hand-off; impurity and damage basis; intended use; conditioning included or excluded |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | reference buckwheat grain | Mass | kg | Report as-received mass and measured moisture; retain the moisture basis for every dry-matter conversion. |
| `area_to_reference_conversion` | area-based field flows | activity-specific property | activity-specific unit | Divide crop-cycle totals per hectare by marketable grain yield on the same area and cycle before scaling to 1,000 kg grain. |
| `nutrient_content_basis` | nutrient applications | nutrient mass | kg N, kg P2O5, or kg K2O | Preserve formulated product mass and declared nutrient-content basis as separate fields. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field at the start of the buckwheat crop cycle, with seed and purchased management inputs crossing the foreground boundary |
| starting_condition_role | start of managed buckwheat grain production |
| product_classification_scope | cultivated buckwheat grain corresponding to CPC 3.0 code 01192 |
| recursive_input_rule | purchased or retained buckwheat for sowing is an explicit seed input linked to a distinct upstream seed-supply dataset and must not loop to this grain process |
| upstream_dataset_requirement | compatible upstream datasets for seed, fertilizers, crop-protection formulations, fuels, electricity, irrigation supply, and contracted services |
| disclosure | cultivar, crop season, geography, field area, crop dates, previous crop, tillage, irrigation, yield, moisture, residue fate, and conditioning boundary |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | all conforming datasets | Include field preparation, sowing, crop management, harvest, and on-farm cleaning or drying performed before the farm-gate hand-off. | `cornell-buckwheat-production` |
| `boundary_direct_field_emissions` | managed soil emissions | Include direct and indirect nitrogen-related emissions using a geographically applicable method and the same activity data used for nutrient and residue accounting. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | straw and crop residues | Distinguish residues returned to soil, burned, removed as product, and removed as waste; prevent double counting residue nitrogen and exported straw. | `ipcc-2019-managed-soils` |
| `boundary_post_farm_gate_exclusion` | downstream activities | Exclude off-farm transport, storage, dehulling, milling, flour or groat production, feed manufacture, food processing, and use unless the study explicitly extends beyond this PCR. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `buckwheat_field_production` | Buckwheat field production and harvest | required | always | managed biological production and harvest | cultivated hectare and harvested grain mass for one crop cycle |
| `farm_gate_buckwheat_conditioning` | On-farm buckwheat grain conditioning | conditional | cleaning, drying, sorting, or temporary handling occurs before farm-gate hand-off and is not embedded in field records | prepare harvested grain to declared market state | incoming and accepted grain mass |

### Process: Buckwheat field production and harvest (`buckwheat_field_production`)

#### Inputs

##### Product flows

###### Buckwheat seed for sowing (`buckwheat_seed_input`)

Record purchased or retained buckwheat seed crossing into the crop cycle. Do not substitute the harvested-grain identity for seed identity.

- Selected flow: Buckwheat seed for sowing
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass sown
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted with same-cycle yield
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources:
- Range: Published seeding-rate screening range
  - Range role: Typical range (`typical_range`)
  - Lower: 45
  - Upper: 100
  - Unit: kg seed/ha
  - Basis: drilled or comparable establishment; document justified rates outside the range
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`buckwheat_field_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources:
- Range: Provisional nitrogen-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N/ha
  - Basis: one crop cycle; replace with regional soil-test and agronomic evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg P2O5/ha
  - Basis: one crop cycle; replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional potassium-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 160
  - Unit: kg K2O/ha
  - Basis: one crop cycle; replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water_input`)

Record irrigation only where water is applied to the buckwheat field; rainfed production records zero applied irrigation with supporting field evidence.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated irrigation volume by field and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: m3/ha
  - Basis: one crop cycle; replace with local water-balance evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel for field machinery (`field_diesel_input`)

Record diesel consumed by field preparation, sowing, crop care, and harvest machinery when fuel use crosses the foreground boundary.

- Selected flow: Diesel fuel for mobile agricultural machinery
- Flow property / unit: Energy carrier or mass / L or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: tank records, invoices, or contractor activity converted to fuel mass or energy with the carrier identity retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional field-fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 140
  - Unit: L/ha
  - Basis: one crop cycle including harvest; replace with measured or contractor records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulation supplied (`crop_protection_input`)

Record each herbicide, insecticide, fungicide, or other formulation separately when applied; do not aggregate distinct products into a generic crop-protection identity.

- Selected flow: Crop-protection formulation for buckwheat production
- Flow property / unit: Mass of formulation / kg
- Amount rule: sum measured formulation mass by product and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources:
- Range: Provisional crop-protection formulation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12
  - Unit: kg formulation/ha
  - Basis: one crop cycle; record product identity and active ingredient for every application
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested buckwheat grain at farm gate (`harvested_buckwheat_grain_output`)

Record saleable or transferred harvested grain at the declared farm-gate moisture and impurity state. This is the terminal reference output when no conditioning process is included.

- Selected flow: Buckwheat, production mix, at farm gate, harvested grain, unprocessed `7f337a9e-f24a-4d48-841e-0b5326d028d7`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured harvested grain mass at declared moisture and quality state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources:
- Range: Provisional harvested-grain yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 3,000
  - Unit: kg grain/ha
  - Basis: one crop cycle; replace with regional yield records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Buckwheat straw removed for declared use (`buckwheat_straw_output`)

Record straw as a product only when it is deliberately removed from the field and transferred to a named use; residues retained or incorporated in the field remain part of field management.

- Selected flow: Buckwheat straw for declared use
- Flow property / unit: Mass / kg dry or as-received straw
- Amount rule: measured removed straw mass by destination and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources:
- Range: Provisional removed-straw screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4,000
  - Unit: kg straw/ha
  - Basis: zero where all residues remain in the field; declare destination and moisture basis
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest and field losses (`harvest_loss_waste_output`)

Record grain and other harvest losses as waste when they are measured or estimated from a documented field or harvest balance and do not become a useful co-product.

- Selected flow: Buckwheat harvest loss waste
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled loss mass by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Sources:
- Range: Provisional harvest-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg/1,000 kg harvested grain
  - Basis: field and harvest losses not transferred to a declared use
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide released to ambient air (`field_n2o_air_output`)

Calculate soil nitrous oxide from collected nitrogen inputs and residue activity using an applicable IPCC tier or reviewed regional method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: calculated from collected activity data and declared factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `ipcc-2019-managed-soils`

###### Ammonia released to ambient air (`field_ammonia_air_output`)

Calculate ammonia volatilization by nutrient product, application method, timing, and applicable local method.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: calculated from nitrogen application records and applicable factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `emep-eea-2023-guidebook`

###### Nitrate released to water (`field_nitrate_water_output`)

Record nitrate leaching or runoff only when supported by a geographically applicable model, monitored balance, or reviewed inventory method.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: calculated from nitrogen inputs, crop and soil conditions, drainage or runoff, and selected method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `ipcc-2019-managed-soils`

### Process: On-farm buckwheat grain conditioning (`farm_gate_buckwheat_conditioning`)

#### Inputs

##### Product flows

###### Harvested grain entering conditioning (`harvested_grain_conditioning_input`)

Record measured grain transferred from field production into cleaning, drying, sorting, or temporary handling before the farm-gate hand-off.

- Selected flow: Buckwheat, production mix, at farm gate, harvested grain, unprocessed `7f337a9e-f24a-4d48-841e-0b5326d028d7`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured incoming grain mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch and converted to 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

###### Electricity supplied to conditioning (`conditioning_electricity_input`)

Record electricity used by cleaning, conveying, ventilation, and drying controls.

- Selected flow: Electricity supply for grain conditioning
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered electricity or equipment power multiplied by verified operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional conditioning-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kWh/1,000 kg grain
  - Basis: included conditioning before farm-gate hand-off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy supplied to drying (`conditioning_heat_input`)

Record supplied heat or fuel energy used to reduce grain moisture.

- Selected flow: Process heat for grain drying
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `purchased-process-heat`
- Amount rule: measured fuel or heat converted to delivered energy while retaining carrier identity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional drying-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,200
  - Unit: MJ/1,000 kg grain
  - Basis: zero without active drying; broad candidate estimate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned buckwheat grain at farm gate (`conditioned_buckwheat_grain_output`)

Record accepted grain after included cleaning or drying at the declared farm-gate state.

- Selected flow: Buckwheat, production mix, at farm gate, harvested grain, unprocessed `7f337a9e-f24a-4d48-841e-0b5326d028d7`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted grain mass at declared moisture and impurity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Storage-moisture QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 14
  - Unit: percent moisture, wet basis
  - Basis: market state must be declared; replace this broad screen with buyer or storage specification
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Buckwheat screenings directed to use (`buckwheat_screenings_output`)

Record buckwheat-dominant screenings or broken kernels as a product only when measured and deliberately handed off for feed or another declared use.

- Selected flow: Buckwheat grain screenings for declared use
- Flow property / unit: Mass / kg
- Amount rule: measured useful screenings by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Provisional useful-screenings screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg/1,000 kg incoming grain
  - Basis: conditioning batch; zero when no useful screenings are handed off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Foreign matter and rejected grain (`conditioning_reject_waste_output`)

Record removed stones, soil, weed material, contaminated grain, and other rejects by material class and destination.

- Selected flow: Grain-conditioning foreign matter and rejected grain
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by material class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Provisional conditioning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg/1,000 kg incoming grain
  - Basis: conditioning batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | field production and conditioning | Prefer separate records for field production and conditioning and separate measurement of grain, screenings, straw, and waste before allocation. | `iso-14044-2006` |
| `allocation_field_residue` | residues retained, incorporated, or burned | Do not treat retained residues as co-products; include their management and emissions in field production and prevent double counting with removed straw. | `ipcc-2019-managed-soils` |
| `allocation_removed_straw` | marketable removed straw | If subdivision cannot resolve shared burdens, apply economic allocation using contemporaneous farm-gate values; disclose moisture bases and test mass allocation as sensitivity. | `iso-14044-2006` |
| `allocation_conditioning_outputs` | useful screenings or downgraded grain | Treat an intended output with positive value as co-product and other rejects as waste; use economic allocation at conditioning hand-off only when subdivision is infeasible. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `buckwheat_field_production` | seed, nutrients, irrigation, fuel, crop protection | field log, invoice, application record, meter, or contractor record | field_id; area; cultivar; input_product; amount; nutrient_content; date; operation; contractor_scope | reconcile physical inputs and operations to each field and crop cycle | kg; kg nutrient; L; m3; ha | each event | complete crop cycle | all represented fields | sum by physical identity; calculate nutrients without merging products; normalize with same-cycle area and yield | invoices; labels; calibrated meters; field logs |
| `cp_harvest_output_records` | `buckwheat_field_production` | grain, removed straw, harvest losses, residue fate | weighbridge, yield monitor, bale record, moisture test | field_id; harvest_date; grain_mass; grain_moisture; straw_mass; straw_moisture; loss_mass; residue_fate; destination | reconcile harvest and removed masses to field area and crop cycle | kg; percent; ha | each harvest | complete crop cycle | all represented fields | sum accepted grain, each residue destination, and losses separately | scale or yield-monitor calibration; moisture records; destination evidence |
| `cp_field_emission_activity` | `buckwheat_field_production` | emissions to air and water | nutrient, soil, weather, residue, and emission-model records | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | calculate each emission with one declared geographically applicable method | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented fields | calculate per field, area-weight, then normalize by same-cycle yield | source records; factor provenance; model file; nutrient-balance review |
| `cp_conditioning_records` | `farm_gate_buckwheat_conditioning` | grain, energy, screenings, rejects | batch ticket, scale, moisture test, meter, fuel, and destination record | batch_id; incoming_mass; incoming_moisture; electricity; heat; accepted_mass; accepted_moisture; screenings; rejects | reconcile batches and meters to accepted output | kg; percent; kWh; MJ | each batch or meter period | all pre-gate conditioning | all included equipment and batches | sum matched batches; allocate shared meters by time or processed mass; close wet-mass balance | calibrated scales and moisture meters; meter reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field flows | crop-cycle amount per hectare / marketable grain yield per hectare × 1,000 kg | flow amount; area; same-cycle grain mass | amount per 1,000 kg grain |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | product mass × declared nutrient fraction; preserve elemental or oxide-equivalent basis | product identity; mass; assay; reporting basis | kg N, kg P2O5, kg K2O by source |  |
| `calc_managed_soil_n2o` | soil N2O | apply selected IPCC tier or regional method to fertilizer N, organic N, returned-residue N, volatilization, and leaching pathways | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | calculate by nutrient product, application method, timing, and applicable factor | nitrogen product records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_conditioning_mass_balance` | grain conditioning | incoming wet grain = accepted grain + useful screenings + rejects + moisture and other measured losses within uncertainty | masses; moisture; loss records | reconciled outputs per accepted grain | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Confirm buckwheat rather than wheat, rye, quinoa, or mixed grain; retain cultivar, intended use, state, and hand-off. | crop, lot, and sales records |
| `dq_temporal_alignment` | all foreground rows | Use inputs, harvest, yield, emissions, and conditioning records from the same crop cycle; disclose proxy years. | dated field and batch records |
| `dq_mass_and_moisture` | grain and straw | Retain scale or yield-monitor calibration and moisture measurements for every basis conversion. | calibration and moisture-test records |
| `dq_completeness` | process map and flows | Reconcile every field and conditioning batch and distinguish zero, not applicable, proxy, and missing values. | field roster; batch reconciliation |
| `dq_identity_resolution` | parameterized and unmapped flows | Resolve every Flow Set reference and unmapped physical exchange to a verified UUID before final TIDAS process publication. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal output | Exactly one terminal buckwheat grain output equals 1,000 kg after scaling and declares moisture and quality qualifiers. |  |
| `validation_process_route` | process map | Include field production once; include conditioning only before farm-gate hand-off and avoid double counting embedded energy or rejects. |  |
| `validation_crop_cycle_reconciliation` | field inventory | Area, inputs, harvest outputs, residue fates, and emissions refer to the same crop cycle and fields. |  |
| `validation_nitrogen_balance` | nitrogen inventory | Reconcile nutrient content, returned and removed residue nitrogen, and emission pathways with methods and factors disclosed. | `ipcc-2019-managed-soils` |
| `validation_conditioning_balance` | conditioning | Reconcile incoming wet grain with accepted grain, screenings, rejects, moisture loss, and other measured loss within uncertainty. | `mass-balance-identity` |
| `validation_flow_identity` | every flow | Accept only exact verified UUIDs as `fixed` and applicable existing Flow Sets as `parameterized`; otherwise retain unmapped coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground buckwheat grain production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | farm-gate LCA of buckwheat grain and downstream systems preserving declared geography, season, moisture, residue, allocation, and conditioning context |
| excluded_use | certified seed, cover-crop or green-manure service, forage, milling, dehulling, feed manufacture, food processing, or another crop without reviewed proxy decision |
| required_metadata | geography; cultivar; crop season; harvest year; area; yield; moisture; intended use; tillage; irrigation; residue fate; conditioning; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy inputs; missing records; range exceedances; emission methods; meter and mass-balance reconciliations |
| update_trigger | new reviewed buckwheat evidence, material route change, revised emission method, changed Flow Set or UUID identity, or representative data outside QA ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cornell-buckwheat-production` | extension_guidance | Cornell University Cooperative Extension, buckwheat production and cover-crop guidance | crop route, establishment, harvest, and boundary context |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | soil N2O, residue nitrogen, volatilization and leaching pathways, and double-counting controls |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | agricultural ammonia method and QA context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched grain-conditioning batches | conditioning mass-balance calculation and validation |
