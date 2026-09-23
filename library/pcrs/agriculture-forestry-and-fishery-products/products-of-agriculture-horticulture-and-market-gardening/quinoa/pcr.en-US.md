---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.quinoa
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Quinoa grain

## 1. Scope and Applicability

This PCR covers cultivated quinoa grain (Chenopodium quinoa) delivered at the farm gate after harvest. It includes rainfed and irrigated production, conventional and organic management, and optional on-farm drying or cleaning when those operations occur before hand-off. The product remains harvested grain and is not treated as dehulled or milled quinoa.

It excludes certified seed multiplication, quinoa leaves or forage, whole-crop services, popped or cooked quinoa, dehulled grain, flour, flakes, packaged food, off-farm storage, processing, and distribution. A dataset shall state whether drying, cleaning, or temporary on-farm storage is inside the declared farm-gate boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.quinoa |
| classification_refs | CPC 3.0: 01194 Quinoa |
| covered_products | harvested quinoa grain for food, feed, or further processing at the farm gate |
| excluded_products | certified seed; leaves or forage; popped, cooked, dehulled, milled, flaked, or packaged products; off-farm services |
| representative_product | unprocessed harvested quinoa grain |
| production_route | managed quinoa cultivation, harvest, and conditional on-farm grain conditioning |
| market_state | unprocessed grain at farm gate with declared moisture, impurity, and intended-use state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | quinoa grain at the farm gate |
| How much | 1,000 kg as-received grain |
| How well | harvested, unprocessed grain with declared moisture, foreign matter, damage, and intended use |
| How long or cycle | one declared quinoa crop cycle |
| reference_flow_link | terminal grain output from `quinoa_field_production` when no conditioning is included, otherwise from `quinoa_grain_conditioning` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Quinoa, production mix, at farm gate, harvested grain, unprocessed `21dd21b4-e6ec-43c2-b2c8-c18f47567236` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar; production geography; harvest year; rainfed or irrigated status; harvest date; moisture at hand-off; foreign-matter basis; intended use; conditioning included or excluded |
| Binding | `fixed` |
| Flow Set |  |
| Flow Set version |  |
| Flow Set group |  |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | reference quinoa grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-received grain mass and measured moisture; retain the moisture basis for every dry-matter conversion. |
| `area_to_reference_conversion` | area-based field flows | activity-specific property | activity-specific unit | Divide crop-cycle totals per hectare by marketable grain yield from the same fields and crop cycle before scaling to 1,000 kg grain. |
| `nutrient_content_basis` | nutrient applications | nutrient mass | kg N, kg P2O5, or kg K2O | Preserve formulated product mass and declared nutrient-content basis as separate fields. Do not infer nutrient mass from product name alone. |
| `water_and_energy_units` | irrigation and energy | volume, mass, or energy | m3, kg, MJ, or kWh | Record metered irrigation and energy in native units, document conversions, and retain pumping or carrier assumptions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared agricultural field at the start of the quinoa crop cycle, with seed and purchased management inputs crossing the foreground boundary |
| starting_condition_role | start of managed quinoa grain production |
| product_classification_scope | cultivated quinoa grain corresponding to CPC 3.0 code 01194 |
| recursive_input_rule | purchased or retained quinoa seed for sowing is an explicit seed input linked to a distinct upstream seed-supply dataset and must not loop to this harvested-grain process |
| upstream_dataset_requirement | compatible upstream datasets for seed, fertilizers, soil amendments, crop-protection products, fuels, electricity, irrigation supply, and contracted services |
| disclosure | cultivar, geography, field area, sowing and harvest dates, preceding crop, tillage, irrigation, inputs, yield, moisture, residue fate, conditioning, and allocation context |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | all conforming datasets | Include field preparation, sowing, crop management, harvest, and on-farm cleaning or drying performed before the declared farm-gate hand-off. | `fao-quinoa-cultivation-guide`; `iso-14044-2006` |
| `boundary_direct_field_emissions` | managed soil and crop inputs | Include direct and indirect nitrogen-related emissions using a geographically applicable method and the same activity data used for nutrient and residue accounting. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | quinoa residues | Distinguish residues returned to soil, burned, removed as a useful product, and removed as waste; do not count exported residue nitrogen as soil residue nitrogen. | `ipcc-2019-managed-soils` |
| `boundary_post_farm_gate_exclusion` | downstream activities | Exclude off-farm transport, storage, dehulling, milling, food or feed manufacture, packaging, and use unless the study explicitly extends beyond this PCR. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `quinoa_field_production` | Quinoa field production and harvest | required | always | managed biological production and harvest | cultivated hectare and harvested grain mass for one crop cycle |
| `quinoa_grain_conditioning` | On-farm quinoa grain conditioning | conditional | drying, cleaning, sorting, or temporary handling occurs before farm-gate hand-off and is not embedded in field records | prepare harvested grain for the declared farm-gate state | incoming and accepted grain mass |

### Process: Quinoa field production and harvest (`quinoa_field_production`)

#### Inputs

##### Product flows

###### Quinoa seed for sowing (`quinoa_seed_input`)

Record purchased or retained quinoa seed crossing into the crop cycle. The harvested-grain reference flow must never be substituted for seed identity.

- Selected flow: Quinoa seed for sowing
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass sown
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted with same-cycle marketable yield
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quinoa_field_activity_records`
- Sources: `fao-quinoa-cultivation-guide`
- Range: Initial quinoa seeding-rate screen
  - Range role: Typical range (`typical_range`)
  - Lower: 4
  - Upper: 15
  - Unit: kg seed/ha
  - Basis: drilled or comparable establishment; document justified rates outside the range
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`quinoa_field_production_agricultural_nutrient_inputs`)

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
- Collection protocol: `cp_quinoa_field_activity_records`
- Sources:
- Range: Provisional nitrogen-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg N/ha
  - Basis: one crop cycle; replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kg P2O5/ha
  - Basis: one crop cycle; replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional potassium-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg K2O/ha
  - Basis: one crop cycle; replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water_input`)

Record water delivered to the field separately from precipitation; use zero only when the field is documented as rainfed.

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
- Collection protocol: `cp_quinoa_field_activity_records`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 7000
  - Unit: m3/ha
  - Basis: one crop cycle, including rainfed production at zero
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel supplied (`field_mobile_fuel_input`)

Record diesel or another machinery fuel consumed by field operations; do not include fuel embedded in upstream input datasets.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured fuel use by operation or verified contractor allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_field_activity_records`
- Range: Provisional field-fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: L/ha
  - Basis: field operations for one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for irrigation or field equipment (`field_electricity_input`)

Record purchased electricity only for field equipment or irrigation pumping inside the foreground boundary.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter reading or pump energy calculation allocated to the quinoa field
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_field_activity_records`
- Range: Provisional field-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 900
  - Unit: kWh/ha
  - Basis: field equipment and irrigation pumping where applicable
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products supplied (`crop_protection_input`)

Record each herbicide, insecticide, fungicide, or other crop-protection formulation with its active ingredient and application event. The formulation identity requires foreground binding before publication.

- Selected flow: Crop-protection formulation by product and active ingredient
- Flow property / unit: Mass / kg product
- Amount rule: measured formulation mass by product and event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quinoa_input_identity_records`
- Range: Provisional crop-protection screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg product/ha
  - Basis: one crop cycle; zero is valid when no product is applied
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Soil amendment supplied (`soil_amendment_input`)

Record lime, gypsum, compost, or another amendment only when it crosses the declared field boundary and identify its composition and application event.

- Selected flow: Soil amendment by material identity
- Flow property / unit: Mass / kg product
- Amount rule: measured amendment mass by material and field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quinoa_field_activity_records`
- Range: Provisional soil-amendment screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2500
  - Unit: kg product/ha
  - Basis: one crop cycle; document material composition
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Land occupation by quinoa cultivation (`land_occupation_input`)

Record the field area and occupation duration for the crop cycle as an elementary resource input.

- Selected flow: Land occupation by agricultural cultivation
- Flow property / unit: Area-time / m2*a
- Amount rule: cultivated area multiplied by occupation duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_field_activity_records`

###### Irrigation water withdrawn from the environment (`irrigation_withdrawal_input`)

Record direct water withdrawal when the foreground operator pumps from a natural source. Do not duplicate water already represented by an upstream irrigation-supply dataset.

- Selected flow: Water resource withdrawal for irrigation
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered withdrawal or verified source-flow calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_field_activity_records`

#### Outputs

##### Product flows

###### Harvested quinoa grain sent to conditioning (`harvested_quinoa_grain_output`)

Record harvested, marketable grain leaving the field process. This is an internal product transfer when conditioning is included and the terminal reference output when it is not.

- Selected flow: Quinoa, production mix, at farm gate, harvested grain, unprocessed `21dd21b4-e6ec-43c2-b2c8-c18f47567236`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured harvested grain mass at declared moisture and foreign-matter basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field-process output scaled to 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quinoa_harvest_output_records`
- Range: Provisional field-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 250
  - Upper: 5000
  - Unit: kg grain/ha
  - Basis: harvested marketable grain for one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Removed quinoa straw or residue for declared use (`removed_quinoa_residue_output`)

Record above-ground residue removed from the field only when it is measured and intentionally transferred to a declared use. Residue left or incorporated in the field is recorded through residue fate and emissions calculations rather than as a product co-output.

- Selected flow: Quinoa crop residue for declared use
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured removed residue mass by destination and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quinoa_harvest_output_records`
- Range: Provisional removed-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6000
  - Unit: kg dry matter/1,000 kg grain
  - Basis: zero when residues remain in the field; destination and moisture must be declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field harvest loss and non-marketable grain (`field_harvest_loss_output`)

Record measured grain left in the field or rejected before conditioning only when it is relevant to the mass balance. Describe whether it remains on the field, is fed, composted, or treated as waste.

- Selected flow: Non-marketable quinoa grain and harvest loss
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated difference between harvested grain and marketable grain, by fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_harvest_output_records`
- Range: Provisional field-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg/1,000 kg harvested grain
  - Basis: loss or non-marketable grain by documented fate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide emitted to air (`nitrous_oxide_emission`)

Include direct and indirect soil N2O associated with nitrogen inputs, residue fate, and applicable drainage or leaching pathways.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: calculated with the selected geographically applicable soil-emission method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_emission_activity`

###### Ammonia emitted to air (`ammonia_emission`)

Include ammonia volatilization from fertilizer and organic nutrient applications using application method and local factors.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: calculated from nitrogen source, application method, and applicable volatilization factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_emission_activity`

###### Nitrogen oxides emitted to air (`nitrogen_oxides_emission`)

Include nitrogen oxides from field fuel combustion and nitrogen-related agricultural emissions when the selected method requires them.

- Selected flow: Nitrogen oxides emission to ambient air
- Flow property / unit: Mass / kg NOx
- Amount rule: calculate from fuel activity and applicable agricultural emission method without double counting background fuel datasets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_emission_activity`

###### Nitrate released to water (`nitrate_water_emission`)

Include nitrate leaching or runoff from managed fields when supported by drainage, soil, and nutrient records.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: calculate nitrogen leaching or runoff with the selected geographically applicable method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_emission_activity`

###### Phosphate released to water (`phosphate_water_emission`)

Include phosphate runoff or erosion-related release when soil, slope, and nutrient data support a site or regional method.

- Selected flow: Phosphate emission to water
- Flow property / unit: Mass / kg phosphate
- Amount rule: calculate runoff or erosion loss with the selected method and disclose whether the result is modelled or measured
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_emission_activity`

### Process: On-farm quinoa grain conditioning (`quinoa_grain_conditioning`)

#### Inputs

##### Product flows

###### Harvested grain entering conditioning (`conditioning_grain_input`)

Record grain received from field production when cleaning or drying is inside the farm-gate boundary.

- Selected flow: Quinoa, production mix, at farm gate, harvested grain, unprocessed `21dd21b4-e6ec-43c2-b2c8-c18f47567236`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured incoming batch mass at recorded moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quinoa_conditioning_records`

###### Electricity for grain conditioning (`conditioning_electricity_input`)

Record electricity used by fans, cleaners, conveyors, and other conditioning equipment inside the boundary.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter reading allocated to matched quinoa conditioning batches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_conditioning_records`
- Range: Provisional conditioning-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kWh/1,000 kg grain
  - Basis: included cleaning, conveying, and fan operation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy supplied to drying (`conditioning_heat_input`)

Record supplied heat or fuel energy used to reduce grain moisture before hand-off.

- Selected flow: Process heat for grain drying
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `purchased-process-heat`
- Amount rule: measured fuel or delivered heat converted to energy while retaining carrier identity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quinoa_conditioning_records`
- Range: Provisional drying-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1400
  - Unit: MJ/1,000 kg grain
  - Basis: zero when no active drying occurs; broad candidate estimate pending batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water supplied (`conditioning_water_input`)

Record water used for dust suppression or cleaning only when it crosses the conditioning process boundary.

- Selected flow: Process water
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered water use matched to conditioning batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quinoa_conditioning_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned quinoa grain at farm gate (`conditioned_quinoa_grain_output`)

Record accepted grain after included cleaning or drying at the declared moisture and foreign-matter state.

- Selected flow: Quinoa, production mix, at farm gate, harvested grain, unprocessed `21dd21b4-e6ec-43c2-b2c8-c18f47567236`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted grain mass at declared hand-off moisture and impurity basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quinoa_conditioning_records`
- Range: Declared farm-gate moisture screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 8
  - Upper: 14
  - Unit: percent moisture, wet basis
  - Basis: market state must be declared; values outside the screen require product specification evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Useful quinoa screenings for declared use (`useful_screenings_output`)

Record screenings or downgraded grain as a product only when they are measured and intentionally transferred to a declared use.

- Selected flow: Quinoa screenings for declared use
- Flow property / unit: Mass / kg
- Amount rule: measured useful screenings by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quinoa_conditioning_records`
- Range: Provisional useful-screenings screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kg/1,000 kg incoming grain
  - Basis: zero when no useful screenings are handed off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Foreign matter and rejected grain (`conditioning_reject_waste_output`)

Record stones, soil, weed material, contaminated grain, dust, and other rejects by material identity and destination.

- Selected flow: Quinoa-conditioning foreign matter and rejected grain
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by material class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quinoa_conditioning_records`
- Range: Provisional conditioning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg/1,000 kg incoming grain
  - Basis: conditioning batch; separate useful screenings from waste
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | field production and conditioning | Prefer separate records for field production, conditioning, grain, useful screenings, removed residue, and waste before applying allocation. | `iso-14044-2006` |
| `allocation_retained_residue` | residues returned or incorporated in the field | Do not treat retained residues as co-products; include their management and associated emissions in field production and prevent double counting with removed residue. | `ipcc-2019-managed-soils` |
| `allocation_removed_residue` | marketable removed residue | If shared field burdens cannot be subdivided, apply economic allocation using contemporaneous declared farm-gate values and disclose moisture bases; test mass allocation as a sensitivity. | `iso-14044-2006` |
| `allocation_conditioning_outputs` | useful screenings and rejected grain | Treat an intentionally transferred output with positive value as a co-product and other rejects as waste; use economic allocation at conditioning hand-off only when subdivision is infeasible. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_quinoa_field_activity_records` | `quinoa_field_production` | seed, nutrients, water, fuel, electricity, amendments, crop protection | field log, invoice, application record, meter, or contractor record | field_id; area; cultivar; input_product; amount; nutrient_content; date; operation; irrigation; contractor_scope | reconcile physical inputs and operations to each field and crop cycle | kg; kg nutrient; L; m3; kWh; ha | each event | complete crop cycle | all represented fields | sum by physical identity; calculate nutrient contents without merging products; normalize using same-cycle area and yield | invoices; labels; calibrated meters; field logs |
| `cp_quinoa_input_identity_records` | `quinoa_field_production` | seed, crop protection, amendments | seed certificate, product label, invoice, supplier record | product_name; active_ingredient; formulation; lot; supplier; amount; application_date; field_id | retain product identity and match each input to its application record | kg; percent; date | each input event | complete crop cycle | all represented suppliers and fields | do not merge formulations with different identities or active ingredients | labels; certificates; supplier documents |
| `cp_quinoa_harvest_output_records` | `quinoa_field_production` | grain, residue, harvest loss, residue fate | weighbridge, yield monitor, moisture test, bale record, field inspection | field_id; harvest_date; grain_mass; grain_moisture; residue_mass; residue_moisture; fate; destination | reconcile harvested and removed masses to field area and crop cycle | kg; percent; ha | each harvest | complete crop cycle | all represented fields | sum accepted grain and each residue or loss destination separately | scale or yield-monitor calibration; moisture records; destination evidence |
| `cp_quinoa_emission_activity` | `quinoa_field_production` | soil and crop emissions | nutrient, soil, weather, residue, drainage, and emission-model records | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | calculate each pathway with one declared geographically applicable method | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented fields | calculate per field, area-weight, then normalize by same-cycle yield | source records; factor provenance; model file; nutrient-balance review |
| `cp_quinoa_conditioning_records` | `quinoa_grain_conditioning` | incoming grain, energy, water, accepted grain, screenings, rejects | batch ticket, scale, moisture test, meter, fuel, and destination record | batch_id; incoming_mass; incoming_moisture; electricity; heat; water; accepted_mass; accepted_moisture; screenings; rejects | reconcile batches and meters to accepted output | kg; percent; kWh; MJ; m3 | each batch or meter period | all pre-gate conditioning | all included equipment and batches | sum matched batches; allocate shared meters by time or processed mass; close wet-mass balance | calibrated scales and moisture meters; meter reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field flows | crop-cycle amount per hectare / marketable grain yield per hectare × 1,000 kg | flow amount; area; same-cycle grain mass | amount per 1,000 kg grain |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | product mass × declared nutrient fraction; preserve elemental or oxide-equivalent basis | product identity; mass; assay; reporting basis | kg N, kg P2O5, kg K2O by source |  |
| `calc_managed_soil_n2o` | soil N2O | apply the selected IPCC tier or regional method to fertilizer N, organic N, returned-residue N, volatilization, and leaching pathways | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | calculate by fertilizer type, application method, timing, and applicable factor | nitrogen product records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_conditioning_mass_balance` | grain conditioning | incoming wet grain = accepted grain + useful screenings + rejects + moisture and other measured losses within uncertainty | masses; moisture; loss records | reconciled outputs per accepted grain | `mass-balance-identity` |
| `calc_dry_matter_conversion` | grain and residue | as-received mass × (1 − measured moisture fraction) = dry-matter mass; retain both bases | mass; moisture result | as-received and dry-matter values | `fao-quinoa-cultivation-guide` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Confirm quinoa rather than amaranth, buckwheat, or mixed grain; retain cultivar, intended use, market state, and hand-off. | crop, lot, and sales records |
| `dq_temporal_alignment` | all foreground rows | Use input, harvest, yield, residue, emission, and conditioning records from the same crop cycle; disclose proxy years. | dated field and batch records |
| `dq_mass_and_moisture` | grain and residue | Retain scale or yield-monitor calibration and moisture measurements for every basis conversion. | calibration and moisture-test records |
| `dq_input_identity` | seed, crop protection, and amendments | Retain product labels, formulation or active ingredient, supplier, lot, and application event; resolve UUIDs before final process publication. | labels; certificates; invoices; identity review |
| `dq_completeness` | process map and flows | Reconcile every represented field and conditioning batch and distinguish zero, not applicable, proxy, and missing values. | field roster; batch reconciliation |
| `dq_emission_method` | elementary emissions | Disclose method tier, factors, soil and climate inputs, drainage assumptions, and whether values are measured or modelled. | method version; factor provenance; model inputs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal output | Exactly one terminal quinoa grain output equals 1,000 kg after scaling, uses the fixed reference UUID, and declares moisture and quality qualifiers. |  |
| `validation_process_route` | process map | Include field production once; include conditioning only before farm-gate hand-off and avoid double counting embedded energy, water, or rejects. |  |
| `validation_crop_cycle_reconciliation` | field inventory | Area, inputs, harvest outputs, residue fates, losses, and emissions refer to the same crop cycle and represented fields. |  |
| `validation_nitrogen_balance` | nitrogen inventory | Reconcile nutrient content, returned and removed residue nitrogen, and emission pathways with the selected methods and factors disclosed. | `ipcc-2019-managed-soils` |
| `validation_conditioning_balance` | conditioning | Reconcile incoming wet grain with accepted grain, screenings, rejects, moisture loss, and other measured loss within uncertainty. | `mass-balance-identity` |
| `validation_flow_identity` | every flow | Accept only exact verified UUIDs as `fixed` and applicable reviewed Flow Set groups as `parameterized`; otherwise retain unmapped coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground quinoa grain production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | farm-gate LCA of quinoa grain and downstream systems that preserve declared geography, moisture, residue, allocation, and conditioning context |
| excluded_use | certified seed, leaves or forage, popped or dehulled products, milling, food or feed manufacture, or another crop without a reviewed proxy decision |
| required_metadata | geography; cultivar; harvest year; field area; yield; moisture; intended use; tillage; irrigation; seed; nutrients; crop protection; residue fate; conditioning; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy inputs; missing records; range exceedances; emission methods; meter and mass-balance reconciliations |
| update_trigger | new reviewed quinoa evidence, material route change, revised emission method, changed Flow Set or UUID identity, or representative data outside QA ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-quinoa-cultivation-guide` | official_guidance | FAO, Guía de cultivo de la quínoa, https://www.fao.org/family-farming/detail/en/c/411552/ | quinoa crop stages, establishment, harvest, and post-harvest context |
| `feedipedia-quinoa` | official_guidance | FAO Feedipedia, Quinoa (Chenopodium quinoa), https://feedipedia.org/node/229 | crop identity, seeding-rate context, harvest-loss and product-state context |
| `fao-56-crop-evapotranspiration` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm | irrigation measurement and crop-water accounting context |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O, volatilization and leaching pathways, residue nitrogen, and double-counting controls |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023 | agricultural ammonia and air-emission method context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | boundary, allocation hierarchy, and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched grain-conditioning batches | conditioning mass-balance calculation and validation |
