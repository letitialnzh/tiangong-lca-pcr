---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.triticale
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Triticale grain

## 1. Scope and Applicability

This PCR covers cultivated triticale grain delivered at the farm gate after harvest and any on-farm cleaning or drying needed to reach the declared market state. It applies to spring and winter grain routes. It excludes certified-seed production, whole-crop forage, hay, silage, grazing, cover-crop services, off-farm milling, feed manufacture, and downstream transport.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.triticale |
| classification_refs | CPC 3.0: 01191 Triticale |
| covered_products | harvested triticale grain for feed, food, or further processing, at the farm gate |
| excluded_products | certified triticale seed; whole-crop forage, hay, silage, grazing or cover-crop service; flour and other milled products |
| representative_product | unprocessed harvested triticale grain |
| production_route | managed spring or winter triticale cultivation, harvest, and conditional on-farm grain conditioning |
| market_state | unprocessed grain at farm gate, with moisture and quality state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | triticale grain at the farm gate |
| How much | 1,000 kg as-received grain |
| How well | harvested, unprocessed grain meeting declared moisture, impurity, damage, and intended-use specifications |
| How long or cycle | one declared crop cycle |
| reference_flow_link | terminal grain output from `triticale_field_production` when conditioning is absent, otherwise from `farm_gate_grain_conditioning` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Triticale, production mix, at farm gate, harvested grain, unprocessed `490074de-43a7-452a-8574-5b53c368bfb9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | spring or winter type; cultivar; production geography; harvest year; moisture at hand-off; impurity basis; intended use; conditioning included or excluded |
| Binding | `fixed` |
| Flow Set |  |
| Flow Set version |  |
| Flow Set group |  |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | reference triticale grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-received mass and measured moisture; retain moisture basis for every dry-matter conversion. |
| `area_to_reference_conversion` | area-based field flows | activity-specific property | activity-specific unit | Divide crop-cycle totals per hectare by marketable grain yield on the same area and cycle before scaling to 1,000 kg grain. |
| `nutrient_content_basis` | nutrient applications | nutrient mass | kg N, kg P2O5, or kg K2O | Preserve formulated product mass and declared nutrient-content basis as separate fields. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field at the start of the crop cycle, with seed and purchased management inputs crossing the foreground boundary |
| starting_condition_role | start of managed triticale grain production |
| product_classification_scope | cultivated triticale grain corresponding to CPC 3.0 code 01191 |
| recursive_input_rule | purchased or retained triticale for sowing is an explicit seed input linked to a distinct upstream seed-supply dataset and must not loop to this grain process |
| upstream_dataset_requirement | compatible upstream datasets for seed, fertilizers, crop-protection formulations, fuels, electricity, irrigation supply, and contracted services |
| disclosure | crop type, cultivar, geography, field area, crop dates, previous crop, tillage, irrigation, yield, moisture, residue fate, and conditioning boundary |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | all conforming datasets | Include field preparation, sowing, crop management, harvest, and on-farm cleaning or drying performed before the farm-gate hand-off. | `uga-small-grains-handbook`; `uw-triticale-production` |
| `boundary_direct_field_emissions` | managed soil emissions | Include direct and indirect nitrogen-related emissions using geographically applicable methods and the same activity data used for nutrient and residue accounting. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | straw and crop residues | Distinguish residues returned to soil, burned, removed as product, and removed as waste; prevent double counting residue nitrogen and exported straw. | `ipcc-2019-managed-soils` |
| `boundary_post_farm_gate_exclusion` | downstream activities | Exclude off-farm transport, storage, milling, feed manufacture, food processing, and use unless study scope explicitly extends beyond this PCR. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `triticale_field_production` | Triticale field production and harvest | required | always | managed biological production and harvest | cultivated hectare and harvested grain mass for one crop cycle |
| `farm_gate_grain_conditioning` | On-farm triticale grain conditioning | conditional | cleaning, drying, sorting, or temporary handling occurs before farm-gate hand-off and is not embedded in field records | prepare harvested grain to declared market state | incoming and accepted grain mass |

### Process: Triticale field production and harvest (`triticale_field_production`)

#### Inputs

##### Product flows

###### Triticale seed for sowing (`triticale_seed_input`)

Record purchased or retained triticale seed crossing into the crop cycle. Do not substitute the harvested-grain UUID for seed identity.

- Selected flow: Triticale seed for sowing
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass sown
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted with same-cycle yield
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources: `uga-small-grains-handbook`; `usda-nrcs-triticale-cover-crop`
- Range: Published seeding-rate screening range
  - Range role: Typical range (`typical_range`)
  - Lower: 84
  - Upper: 134
  - Unit: kg seed/ha
  - Basis: drilled or comparable establishment; document justified rates outside the range
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `uga-small-grains-handbook`; `usda-nrcs-triticale-cover-crop`

###### Agricultural nutrient and fertilizer inputs (`triticale_field_production_agricultural_nutrient_inputs`)

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
  - Upper: 250
  - Unit: kg N/ha
  - Basis: one crop cycle; replace with regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg P2O5/ha
  - Basis: one crop cycle; replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional potassium-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 220
  - Unit: kg K2O/ha
  - Basis: one crop cycle; replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water_input`)

Record irrigation water delivered to the field separately from precipitation.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered volume or verified pump-flow calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional irrigation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8000
  - Unit: m3/ha
  - Basis: one crop cycle, including rainfed production at zero
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel used by field machinery (`field_diesel_input`)

Record diesel consumed by owned or controlled machinery; contractor fuel belongs in an upstream service dataset when that service is modelled separately.

- Selected flow: Diesel fuel for agricultural machinery
- Flow property / unit: Volume / L
- Amount rule: measured or invoiced diesel assigned to triticale operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional field-diesel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: L/ha
  - Basis: one crop cycle; zero when operations are represented by upstream services or non-diesel equipment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulation applied (`crop_protection_input`)

Create one exchange per actual herbicide, fungicide, insecticide, or other formulation and retain its active ingredient, concentration, and dose; do not aggregate unlike products.

- Selected flow: Applied crop-protection formulation by physical product identity
- Flow property / unit: Mass / kg
- Amount rule: measured formulation mass by product and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional per-formulation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg formulation/ha
  - Basis: each separately identified formulation in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested triticale grain at farm gate (`harvested_triticale_grain_output`)

Record marketable grain at the terminal hand-off of the unconditioned route; with separate conditioning, it is the measured intermediate transferred to conditioning.

- Selected flow: Triticale, production mix, at farm gate, harvested grain, unprocessed `490074de-43a7-452a-8574-5b53c368bfb9`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured marketable grain mass at declared moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare; terminal output is scaled to 1,000 kg
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources: `uw-triticale-production`
- Range: Provisional marketable-grain yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 9000
  - Unit: kg grain/ha
  - Basis: one crop cycle at declared moisture; replace with regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Triticale straw removed from field (`removed_triticale_straw_output`)

Record straw only when deliberately removed and handed off as a useful product; retained or incorporated residues are not this output.

- Selected flow: Triticale straw removed at field edge
- Flow property / unit: Mass / kg
- Amount rule: measured removed straw mass at declared moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: Provisional removed-straw screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12000
  - Unit: kg straw/ha
  - Basis: one crop cycle at declared moisture; zero where residues remain in field
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

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

Calculate ammonia volatilization by fertilizer or amendment product, application method, timing, and local method.

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

### Process: On-farm triticale grain conditioning (`farm_gate_grain_conditioning`)

#### Inputs

##### Product flows

###### Harvested grain entering conditioning (`harvested_grain_conditioning_input`)

Record measured grain transferred from field production into cleaning, drying, sorting, or temporary handling.

- Selected flow: Triticale, production mix, at farm gate, harvested grain, unprocessed `490074de-43a7-452a-8574-5b53c368bfb9`
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
  - Upper: 1200
  - Unit: MJ/1,000 kg grain
  - Basis: zero without active drying; broad candidate estimate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned triticale grain at farm gate (`conditioned_triticale_grain_output`)

Record accepted grain after included cleaning or drying at declared farm-gate state.

- Selected flow: Triticale, production mix, at farm gate, harvested grain, unprocessed `490074de-43a7-452a-8574-5b53c368bfb9`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted grain mass at declared moisture and impurity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `uga-small-grains-handbook`; `uw-triticale-production`
- Range: Long-term storage moisture limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 13
  - Unit: percent moisture, wet basis
  - Basis: grain intended for long-term storage; another market moisture is permitted when declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `uga-small-grains-handbook`; `uw-triticale-production`

###### Triticale screenings directed to use (`triticale_screenings_output`)

Record triticale-dominant screenings or broken kernels as product only when measured and deliberately handed off for feed or another use.

- Selected flow: Triticale grain screenings for declared use
- Flow property / unit: Mass / kg
- Amount rule: measured useful screenings by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
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

Record removed stones, soil, weed material, contaminated grain, and other rejects by material identity and destination.

- Selected flow: Grain-conditioning foreign matter and rejected grain
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by material class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
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
| `cp_field_activity_records` | `triticale_field_production` | seed, nutrients, irrigation, fuel, crop protection | field log, invoice, application record, meter or contractor record | field_id; area; cultivar; input_product; amount; nutrient_content; date; operation; contractor_scope | reconcile physical inputs and operations to each field and crop cycle | kg; kg nutrient; L; m3; ha | each event | complete crop cycle | all represented fields | sum by physical identity; calculate nutrients without merging products; normalize with same-cycle area and yield | invoices; labels; calibrated meters; field logs |
| `cp_harvest_output_records` | `triticale_field_production` | grain, removed straw, residue fate | weighbridge, yield monitor, bale record, moisture test | field_id; harvest_date; grain_mass; grain_moisture; straw_mass; straw_moisture; residue_fate; destination | reconcile harvest and removed masses to field area and crop cycle | kg; percent; ha | each harvest | complete crop cycle | all represented fields | sum accepted grain and each residue destination separately | scale or yield-monitor calibration; moisture records; destination evidence |
| `cp_field_emission_activity` | `triticale_field_production` | emissions to air and water | nutrient, soil, weather, residue, and emission-model records | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | calculate each emission with one declared geographically applicable method | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented fields | calculate per field, area-weight, then normalize by same-cycle yield | source records; factor provenance; model file; nutrient-balance review |
| `cp_conditioning_records` | `farm_gate_grain_conditioning` | grain, energy, screenings, rejects | batch ticket, scale, moisture test, meter, fuel and destination records | batch_id; incoming_mass; incoming_moisture; electricity; heat; accepted_mass; accepted_moisture; screenings; rejects | reconcile batches and meters to accepted output | kg; percent; kWh; MJ | each batch or meter period | all pre-gate conditioning | all included equipment and batches | sum matched batches; allocate shared meters by time or processed mass; close wet-mass balance | calibrated scales and moisture meters; meter reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field flows | crop-cycle amount per hectare / marketable grain yield per hectare × 1,000 kg | flow amount; area; same-cycle grain mass | amount per 1,000 kg grain |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | product mass × declared nutrient fraction; preserve elemental or oxide-equivalent basis | product identity; mass; assay; reporting basis | kg N, kg P2O5, kg K2O by source |  |
| `calc_managed_soil_n2o` | soil N2O | apply selected IPCC tier or regional method to fertilizer N, organic N, returned-residue N, volatilization, and leaching pathways | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | calculate by fertilizer type, application method, timing, and applicable factor | nitrogen product records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_conditioning_mass_balance` | grain conditioning | incoming wet grain = accepted grain + useful screenings + rejects + moisture and other measured losses within uncertainty | masses; moisture; loss records | reconciled outputs per accepted grain | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Confirm triticale rather than wheat, rye, or mixed small grain; retain cultivar, intended use, state, and hand-off. | crop, lot, and sales records |
| `dq_temporal_alignment` | all foreground rows | Use inputs, harvest, yield, emissions, and conditioning records from the same crop cycle; disclose proxy years. | dated field and batch records |
| `dq_mass_and_moisture` | grain and straw | Retain scale or yield-monitor calibration and moisture measurements for every basis conversion. | calibration and moisture-test records |
| `dq_completeness` | process map and flows | Reconcile every field and conditioning batch and distinguish zero, not applicable, proxy, and missing values. | field roster; batch reconciliation |
| `dq_identity_resolution` | parameterized and unmapped flows | Resolve every Flow Set reference and unmapped physical exchange to a verified UUID before final TIDAS process publication. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal output | Exactly one terminal triticale grain output equals 1,000 kg after scaling, uses the fixed reference UUID, and declares moisture and quality qualifiers. |  |
| `validation_process_route` | process map | Include field production once; include conditioning only before farm-gate hand-off and avoid double counting embedded energy or rejects. |  |
| `validation_crop_cycle_reconciliation` | field inventory | Area, inputs, harvest outputs, residue fates, and emissions refer to the same crop cycle and fields. |  |
| `validation_nitrogen_balance` | nitrogen inventory | Reconcile nutrient content, returned and removed residue nitrogen, and emission pathways with methods and factors disclosed. | `ipcc-2019-managed-soils` |
| `validation_conditioning_balance` | conditioning | Reconcile incoming wet grain with accepted grain, screenings, rejects, moisture loss, and other measured loss within uncertainty. | `mass-balance-identity` |
| `validation_flow_identity` | every flow | Accept only exact verified UUIDs as `fixed` and applicable existing Flow Sets as `parameterized`; otherwise retain unmapped coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground triticale grain production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | farm-gate LCA of triticale grain and downstream systems preserving declared geography, moisture, residue, allocation, and conditioning context |
| excluded_use | certified seed, whole-crop forage or silage, milling, feed manufacture, or another crop without reviewed proxy decision |
| required_metadata | geography; spring or winter type; cultivar; harvest year; area; yield; moisture; intended use; tillage; irrigation; residue fate; conditioning; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy inputs; missing records; range exceedances; emission methods; meter and mass-balance reconciliations |
| update_trigger | new reviewed triticale evidence, material route change, revised emission method, changed Flow Set or UUID identity, or representative data outside QA ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `uga-small-grains-handbook` | official_guidance | University of Georgia Cooperative Extension, Southern Small Grains Resource Management Handbook, Bulletin 1190, https://extension.uga.edu/publications/detail.html?number=B1190 | establishment, harvest, drying, and 13% grain-moisture guidance |
| `uw-triticale-production` | extension_guidance | University of Wisconsin-Madison Cooperative Extension, Triticale, https://corn.aae.wisc.edu/Crops/Triticale.aspx | grain route, harvest, yield context, drying, and storage moisture |
| `usda-nrcs-triticale-cover-crop` | official_guidance | USDA NRCS and Iowa State University Extension, Triticale Cover Crop Fact Sheet, CROP 3250, https://www.nrcs.usda.gov/sites/default/files/2024-04/Triticale%20Cover%20Crop%20Fact%20Sheet.pdf | seed identity and seeding-rate context |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | soil N2O, volatilization and leaching pathways, residue nitrogen, and double-counting controls |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, EEA Report 06/2023, https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023 | agricultural ammonia method and QA context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched grain-conditioning batches | conditioning mass-balance calculation and validation |
