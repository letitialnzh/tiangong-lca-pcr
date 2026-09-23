---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-nuts-excluding-wild-edible-nuts-and-groundnuts-in-shell
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other nuts (excluding wild edible nuts and groundnuts), in shell

## 1. Scope and Applicability

This PCR covers one explicitly declared residual cultivated nut species and lot delivered with the hard shell enclosing the kernel intact. The route may end after harvest at the farm gate or may include species-appropriate removal of a fleshy or fibrous outer hull, drying, grading, and packing before hand-off. It excludes every nut with its own named CPC leaf, wild edible nuts, groundnuts, kernels or other shelled nuts, processed nut foods, and mixed-species products.

A dataset shall represent one species, orchard or plantation system, harvest year, lot or aggregation rule, hull/shell state, moisture basis, grade, and gate. It shall not use this residual category to pool unlike species, wet and dry states, or farm and conditioning gates.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-nuts-excluding-wild-edible-nuts-and-groundnuts-in-shell |
| classification_refs | CPC 3.0: 01379 Other nuts (excluding wild edible nuts and groundnuts), in shell |
| covered_products | one declared cultivated residual nut species in shell, including areca, kola, ginkgo, macadamia, pecan, pignolia or pine nut only when it belongs in CPC 01379 |
| excluded_products | named CPC nut leaves; wild edible nuts; groundnuts; shelled kernels; processed nuts; mixed-species lots |
| representative_product | one declared cultivated residual nut species with the hard shell intact |
| production_route | managed perennial cultivation and harvest, with conditional outer-hull removal, drying, grading, and packing |
| market_state | fresh farm-gate or conditioned/dried in-shell product at the declared farm or primary-conditioning gate |

Fresh farm-gate and conditioned/dried routes coexist, but one dataset selects exactly one terminal state and gate. Species-specific hulling and passive, ambient, or heated drying are alternative technologies and shall not be combined unless the foreground route actually uses them.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | one declared residual cultivated nut species in shell at the selected terminal gate |
| How much | 1,000 kg as-received accepted product |
| How well | species, cultivar if material, origin, orchard system, harvest year, lot, outer-hull state, intact hard-shell state, moisture basis, grade, package form, and gate declared |
| How long or cycle | one productive harvest year and matched post-harvest batches included before the gate |
| reference_flow_link | `harvested_nuts_output`, `conditioned_in_shell_output`, or `reference_product_output` according to the declared terminal gate |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other nuts (excluding wild edible nuts and groundnuts), in shell `85d33932-8c99-4207-8011-1bec84102f55` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar where material; origin; orchard or plantation system; harvest year; lot/aggregation rule; outer-hull state; hard-shell integrity; moisture and basis; grade; package form; gate; included operations |
| Binding | `fixed` |

The fixed flow identifies the residual CPC category and fresh/unprocessed farm-gate concept. When later conditioning is included, the dataset shall disclose the changed state and actual gate without implying a species-neutral dry-product specification.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | terminal nuts in shell | Mass | kg | Report as-received accepted mass and measured moisture; retain the moisture basis for dry-matter comparison. |
| `shell_state_identity` | all product masses | Mass | kg | Distinguish removable outer hull from the hard shell; accepted reference product retains the hard shell. |
| `area_to_reference_conversion` | orchard flows | activity-specific property | activity-specific unit | Normalize annual productive-area totals to the same harvest year and accepted terminal mass. |
| `nutrient_content_basis` | nutrient inputs | nutrient mass | kg N, kg P2O5, kg K2O | Preserve product mass, formulation, assay, and elemental or oxide basis separately. |
| `batch_mass_balance` | hulling, drying, grading, packing | Mass | kg | Reconcile incoming mass to accepted grades, downgraded product, rejects, removed hulls, and moisture loss without counting evaporated water as waste. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | established productive orchard or plantation at reporting-period start; annualized establishment and replacement inputs cross the boundary |
| starting_condition_role | start of the declared productive harvest year |
| product_classification_scope | one cultivated residual nut species that belongs to CPC 01379 and remains in hard shell |
| recursive_input_rule | same-category in-shell nut input is linked to a separate upstream dataset at its actual state and gate and is not re-created through this PCR |
| upstream_dataset_requirement | compatible datasets for planting material, nutrients, crop protection, irrigation, energy, packaging, and any externally treated waste |
| disclosure | species; orchard system; age and productive area; geography; harvest year; allocation periods; yield; hull/shell state; moisture; grade; gate; conditioning route; batches; rejects; packaging; shared assets |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_species_lot` | all routes | Include exactly one residual cultivated nut species and declared lot or aggregation rule; exclude named CPC nut leaves, wild nuts, groundnuts, and mixed-species pooling. |  |
| `boundary_productive_period` | orchard route | Include annual productive operations, harvest, direct field emissions, annualized establishment, and replacement burdens attributable to the declared harvest year. |  |
| `boundary_postharvest` | conditioned route | Include only actual outer-hull removal, cleaning, drying, grading, and packing before the declared gate; retain matched batch balances and moisture states. | `fao-codex-tree-nut-aflatoxin` |
| `boundary_food_safety` | drying and storage | Record elapsed time to drying, drying method, moisture endpoint, storage conditions, and rejected mould-damaged material needed to evaluate contamination prevention. | `fao-codex-tree-nut-aflatoxin` |
| `boundary_downstream_exclusion` | all routes | Stop before hard-shell cracking, kernel separation, roasting, salting, food manufacture, distribution, retail, and consumption. |  |
| `boundary_direct_emissions` | soil and on-site combustion | Calculate managed-soil and on-site combustion emissions from the same nutrient, residue, and fuel records used in the inventory. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`; `ipcc-2006-stationary-combustion` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_production_harvest` | Managed nut production and harvest | `required` | always | perennial crop production and harvest | productive area and one harvest year |
| `primary_hulling_drying` | Primary hulling and drying | `conditional` | outer hull removal or drying occurs before the declared gate | condition and stabilize in-shell nuts | matched incoming and accepted in-shell batches |
| `grading_packing` | Grading and packing | `conditional` | grading or packing occurs before the declared gate | separate grades and prepare hand-off | matched incoming, grade, reject, and packed masses |

### Process: Managed nut production and harvest (`orchard_production_harvest`)

#### Inputs

##### Product flows

###### Planting material for replacement and establishment (`planting_material_input`)

Record only seedlings, grafted plants, seed, or rootstock entering the assessed period; separate establishment from replacement.

- Selected flow: Species-specific nut planting material
- Flow property / unit: Mass or number / kg or item
- Amount rule: measured quantity by species, age, and establishment purpose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per productive hectare and reporting period
- Basis kind: `crop_cycle`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_inputs`
- Range: Provisional planting-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: items/ha·year
  - Basis: annualized establishment and replacement plants
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`agricultural_nutrient_inputs`)

Consolidate every mineral fertilizer, organic fertilizer, and nutrient-bearing amendment in this one card; preserve product, assay, event, and nutrient basis.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product and nutrient quantity / kg product, m3 product, kg N, kg P2O5, kg K2O
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: collect every applied product once and calculate declared nutrient quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and harvest year, converted to reference mass
- Basis kind: `crop_cycle`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_inputs`
- Range: Provisional nitrogen screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg N/ha·year
  - Basis: one productive harvest year
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional phosphorus screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg P2O5/ha·year
  - Basis: one productive harvest year
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional potassium screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kg K2O/ha·year
  - Basis: one productive harvest year
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water_input`)

Record water applied to the productive area and distinguish it from effective rainfall.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated applied irrigation water; rainfed systems record zero with evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and harvest year
- Basis kind: `crop_cycle`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_inputs`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15000
  - Unit: m3/ha·year
  - Basis: one productive harvest year
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery energy (`field_energy_input`)

Record actual carriers used for orchard floor care, pruning, spraying, harvest, and internal handling.

- Selected flow: Energy supply for mobile field machinery
- Flow property / unit: Carrier quantity or energy / kg, L, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured carrier use or contractor activity with carrier retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and harvest year
- Basis kind: `crop_cycle`
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_inputs`
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L diesel-equivalent/ha·year
  - Basis: actual carrier remains explicit
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulations (`crop_protection_input`)

Record each actual formulation, active ingredient, concentration, and application event; no generic fixed identity is assigned.

- Selected flow: Crop-protection formulation used for the declared nut species
- Flow property / unit: Mass of formulation / kg
- Amount rule: measured formulation quantity by product and event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per productive hectare and harvest year
- Basis kind: `crop_cycle`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_inputs`
- Range: Provisional formulation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg formulation/ha·year
  - Basis: all products summed only after preserving identity
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested nuts before primary conditioning (`harvested_nuts_output`)

Record the declared species and whether the fleshy or fibrous outer hull remains; the hard shell enclosing the kernel remains intact.

- Selected flow: Harvested residual cultivated nut species
- Flow property / unit: Mass / kg
- Amount rule: measured accepted harvest mass with moisture and hull state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and harvest year
- Basis kind: `crop_cycle`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional harvested-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 20000
  - Unit: kg/ha·year
  - Basis: as-harvested state declared
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Orchard residues and harvest rejects (`orchard_residue_output`)

Record prunings, dropped material, rejected nuts, and incidental biomass separately by fate.

- Selected flow: Orchard residues and rejected harvested material
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass by residue class and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted harvested nuts
- Basis kind: `process_output`
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg/1,000 kg accepted harvest
  - Basis: all non-product biomass and rejects by fate
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide to air (`soil_n2o_output`)

Calculate direct and applicable indirect managed-soil N2O from the same nutrient and residue records.

- Selected flow: Nitrous oxide, emissions to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: `fixed`
- Amount rule: applicable managed-soil method applied to collected N inputs and residues
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and harvest year
- Basis kind: `n_input`
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg N2O/ha·year
  - Basis: method calculation governs
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`ammonia_air_output`)

Calculate fertilizer-related volatilization by product, application, weather, and selected factor.

- Selected flow: Ammonia, emissions to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: `fixed`
- Amount rule: applicable volatilization method applied to collected N inputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and harvest year
- Basis kind: `n_input`
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_emissions`
- Sources: `emep-eea-2023-guidebook`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg NH3/ha·year
  - Basis: method calculation governs
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`nitrate_water_output`)

Calculate or monitor nitrate loss only with a location-appropriate leaching or runoff method.

- Selected flow: Nitrate, emissions to water, unspecified `fe0acd60-3ddc-11dd-aa31-0050c2490048`
- Flow property / unit: Mass / kg nitrate
- Binding: `fixed`
- Amount rule: selected leaching/runoff method or monitored balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and harvest year
- Basis kind: `n_input`
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg nitrate/ha·year
  - Basis: selected method governs
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary hulling and drying (`primary_hulling_drying`)

#### Inputs

##### Product flows

###### Harvested nuts entering primary conditioning (`conditioning_nuts_input`)

Record the matched incoming batch with species, outer-hull state, hard-shell state, moisture, and origin.

- Selected flow: Harvested residual cultivated nut species
- Flow property / unit: Mass / kg
- Amount rule: measured incoming batch mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch and converted to accepted output
- Basis kind: `process_output`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional input-output ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg incoming/kg accepted in-shell nuts
  - Basis: matched batch; outer-hull state declared
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning and cleaning water (`conditioning_water_input`)

Record only supplied process water used for washing, wet cleaning, or conditioning; dry routes may record zero.

- Selected flow: Process water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered or batch-calculated water; zero when route inactive
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted in-shell nuts
- Basis kind: `process_output`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Route-conditional water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg accepted product
  - Basis: zero for dry routes
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hulling and drying energy (`conditioning_energy_input`)

Record electricity, fuel, or purchased heat by actual carrier and separate mechanical hulling from drying.

- Selected flow: Energy supply for primary hulling and drying
- Flow property / unit: Carrier quantity or energy / kWh, MJ, kg, L, or m3
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier and electricity by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted in-shell nuts
- Basis kind: `process_output`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional conditioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ/1,000 kg accepted product
  - Basis: actual carrier replaces screening conversion
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned nuts in shell (`conditioned_in_shell_output`)

Record the declared species after any required outer-hull removal and drying; the hard shell remains intact.

- Selected flow: Other nuts (excluding wild edible nuts and groundnuts), in shell `85d33932-8c99-4207-8011-1bec84102f55`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted mass, moisture, outer-hull state, and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per matched batch; scale to 1,000 kg terminal product when applicable
- Basis kind: `reference_flow`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Conditioned output fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 1
  - Unit: kg accepted/kg incoming harvest
  - Basis: matched wet-to-dry and hulling balance
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Removed outer hulls and conditioning rejects (`hulls_rejects_output`)

Record outer hulls, foreign matter, spoiled nuts, and other rejects separately by destination; hard shells of accepted product are not waste.

- Selected flow: Removed outer hulls and conditioning rejects
- Flow property / unit: Mass / kg
- Amount rule: measured mass plus matched mass-balance reconciliation by class and fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg incoming harvested nuts
- Basis kind: `process_output`
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Range: Mass-balance reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 700
  - Unit: kg/1,000 kg incoming harvest
  - Basis: excludes evaporated water
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide from on-site drying (`drying_fossil_co2_output`)

Record only fossil CO2 from on-site fuel combustion; zero when no fossil fuel is burned on site.

- Selected flow: Carbon dioxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg CO2
- Binding: `fixed`
- Amount rule: fuel quantity multiplied by carrier-specific carbon and oxidation factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted in-shell nuts
- Basis kind: `fuel_inventory`
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `ipcc-2006-stationary-combustion`
- Range: Route-conditional combustion screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg fossil CO2/1,000 kg accepted product
  - Basis: zero without on-site fossil combustion
  - Basis kind: `fuel_inventory`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grading and packing (`grading_packing`)

#### Inputs

##### Product flows

###### In-shell nuts entering grading (`grading_nuts_input`)

Record the matched species-specific batch and its moisture, outer-hull state, defects, and prior conditioning.

- Selected flow: Conditioned or farm-gate nuts in shell
- Flow property / unit: Mass / kg
- Amount rule: measured incoming batch mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grading batch and converted to packed output
- Basis kind: `process_output`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional grading input-output ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg incoming/kg accepted packed nuts
  - Basis: matched batch
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_input`)

Record the actual sack, liner, carton, crate, pallet, or other declared packaging; foreground records determine the one applicable packaging group and concrete exchange.

- Selected flow: Packaging for nuts in shell
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: measured packaging placed with accepted product; reusable items use documented trip allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packed nuts
- Basis kind: `process_output`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg packed nuts
  - Basis: zero when unpackaged; actual package form governs
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grading and packing energy (`grading_energy_input`)

Record electricity and actual energy carriers for conveying, sorting, weighing, and packing.

- Selected flow: Energy supply for grading and packing
- Flow property / unit: Energy or carrier quantity / kWh, MJ, kg, L, or m3
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured energy by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packed nuts
- Basis kind: `process_output`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional grading-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/1,000 kg packed nuts
  - Basis: actual carrier remains explicit
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted other nuts in shell (`reference_product_output`)

This is the terminal reference only for one declared residual cultivated nut species and lot; the kernel remains enclosed by its hard shell.

- Selected flow: Other nuts (excluding wild edible nuts and groundnuts), in shell `85d33932-8c99-4207-8011-1bec84102f55`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: 1,000 kg accepted product at declared moisture, grade, package form, and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg terminal reference product
- Basis kind: `reference_flow`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Reference-output identity range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: declared terminal reference amount
  - Basis kind: `reference_flow`
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded usable nuts in shell (`downgraded_nuts_output`)

Record every useful lower grade separately and do not count it as accepted reference output.

- Selected flow: Downgraded nuts in shell by declared destination
- Flow property / unit: Mass / kg
- Amount rule: measured downgraded mass by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg incoming grading batch
- Basis kind: `process_output`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional downgrade screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg/1,000 kg incoming batch
  - Basis: matched grading batch
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading and packing rejects (`grading_rejects_output`)

Record unusable nuts, shell fragments, foreign matter, and damaged packaging separately by treatment destination.

- Selected flow: Grading and packing rejects by declared destination
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg incoming grading batch
- Basis kind: `process_output`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg incoming batch
  - Basis: matched grading batch
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_productive_year` | perennial orchard | Attribute annual operations directly to the declared productive year; annualize establishment, replanting, and shared perennial infrastructure over documented service life and productive area. |  |
| `allocation_grade_outputs` | grading | Use physical subdivision first. When multiple useful grades leave one inseparable batch, report each mass and apply an explicitly justified allocation consistent across the batch; do not classify useful downgraded nuts as waste. |  |
| `allocation_hulls_residues` | hulls and residues | Treat as residue without credit when discarded and without economic function; when sold or used as a co-product, disclose destination and apply a reviewed allocation or substitution scenario separately. |  |
| `allocation_shared_assets` | shared equipment and storage | Allocate by measured operating time, throughput, occupied area-time, or another causal driver; prevent the same annual or batch burden from entering both orchard and conditioning nodes. |  |
| `allocation_rework` | regraded or redried material | Return rework to the producing batch, include additional energy and loss once, and count output only when it reaches the accepted grade. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_inputs` | `orchard_production_harvest` | establishment, nutrients, water, crop protection, energy | invoices, field logs, meters, contractor records | species, cultivar, block, productive area, tree age, input identity, formulation, assay, amount, unit, date, carrier, purpose | reconcile purchase and application records to blocks | native units plus ha | each event | complete declared harvest year; establishment annualization period retained | every included orchard block and shared service | sum by block and input, annualize establishment, divide by accepted terminal mass | invoices, calibrated-meter records, application logs, area map, service-life evidence |
| `cp_harvest_records` | `orchard_production_harvest` | harvest, accepted product, residues, rejects | weigh tickets, harvest logs, sampling | species, block, date, gross/tare, accepted mass, outer-hull state, moisture, grade, reject/residue class, fate | calibrated weighing and representative moisture sampling | kg, %, ha | each lot | complete harvest window | every included orchard block and collection point | sum accepted and non-product masses by lot; preserve species and state | calibration certificates, lot IDs, moisture records, destination records |
| `cp_orchard_emissions` | `orchard_production_harvest` | soil and nutrient emissions | calculated foreground record | N input by form, residues, soil/climate parameters, factor version, monitored loss where available | apply documented applicable method to `cp_orchard_inputs` | kg substance | each reporting year | same harvest year and relevant lag specified by method | every included managed block | calculate by block then mass-weight to terminal product | factor source, calculation workbook, input reconciliation, reviewer check |
| `cp_conditioning_records` | `primary_hulling_drying` | hulling, cleaning, drying, outputs, rejects, emissions | batch sheets, scales, meters, fuel records, moisture tests | species, lot, incoming mass/moisture/hull state, method, time, temperature, water, carrier, energy, accepted mass/moisture, hulls, rejects, fate | matched batch measurement and mass balance | kg, %, m3, kWh, MJ | each batch | all batches represented by dataset | every included conditioning line/site | reconcile dry matter and losses per batch, then throughput-weight | scale and meter calibration, moisture method, batch IDs, fuel invoice, balance closure |
| `cp_grading_records` | `grading_packing` | grades, rework, packaging, rejects, energy | batch sheets, scale records, package specifications | species, lot, incoming mass, grade criteria, accepted/downgraded/reject mass, rework, package identity/mass/reuse, energy, destination | matched grading-run reconciliation | kg, item, kWh | each run or lot | all grading and packing runs represented | every included line/site | sum by grade and destination; allocate shared runs by measured throughput | scale calibration, grade inspection, package specification, lot linkage, balance closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_normalization` | orchard flows | annual block total / accepted terminal mass from the same harvest year × 1,000 | block input or emission; accepted terminal mass | amount per 1,000 kg reference product |  |
| `calc_establishment_annualization` | establishment and perennial assets | attributable quantity / documented productive service years, then allocate by productive area | establishment quantity; service life; area | annual burden |  |
| `calc_batch_mass_balance` | conditioning and grading | incoming mass = accepted + downgraded + rejects + removed hulls + measured or calculated moisture loss ± closure error | matched batch masses and moisture | reconciled batch inventory | `mass-balance-identity` |
| `calc_dry_matter` | moisture conversion | as-received mass × (1 − moisture fraction on wet basis) | mass; measured moisture and basis | dry matter mass | `mass-balance-identity` |
| `calc_fossil_co2` | on-site drying combustion | fuel quantity × net calorific value × carbon factor × oxidation factor × 44/12 where factor is carbon mass | carrier record; selected factors | kg fossil CO2 | `ipcc-2006-stationary-combustion` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Botanical/common species, cultivar where material, lot, CPC residual eligibility, hard-shell state, outer-hull state, moisture, grade, and gate shall be explicit. | product specification, lot record, photographs or inspection record |
| `dq_completeness` | all processes | Reconcile productive area, harvest, each conditioning/grading batch, energy, water, rejects, and destinations for the declared period. | completeness checklist and mass-balance closure |
| `dq_temporal` | perennial route | Use one representative harvest year or disclose a justified multi-year average; retain year-specific yield and input records before averaging. | dated records and averaging worksheet |
| `dq_measurement` | mass and moisture | Use calibrated scales and a documented representative moisture method; disclose wet/dry basis and sampling frequency. | calibration and sampling records |
| `dq_route` | conditional operations | Include only actual hulling, drying, grading, packing, rework, and storage activities and disclose inactive nodes. | process map, batch logs, gate statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_residual_identity` | reference product | Reject a dataset that does not name one cultivated species and demonstrate that it is not a named CPC nut leaf, wild nut, groundnut, shelled kernel, or mixed lot. | error |
| `validate_shell_state` | reference product | Reject when hard-shell integrity, outer-hull state, moisture basis, grade, or terminal gate is missing or internally inconsistent. | error |
| `validate_reference_mass` | terminal output | Accepted reference output shall equal 1,000 kg and shall exclude downgraded, rejected, and rework material not yet accepted. | error |
| `validate_route_activation` | conditional nodes | Hulling, drying, grading, packing, and their inputs/emissions shall be zero or absent when inactive; when active, matched batch records are required. | error |
| `validate_nutrient_binding` | orchard nutrients | Exactly one consolidated agricultural-nutrient card may occur in the orchard process; it shall use set-level `flow-set.agricultural-nutrient-supply` 0.3.0 without group or fixed UUID. | error |
| `validate_mass_balance` | harvest, conditioning, grading | Check accepted, downgraded, rejected, hull, residue, and moisture-loss terms against incoming mass and disclose closure error. | error |
| `validate_ranges` | all inventory cards | Flag values outside a range for review; provisional ranges are screens and shall not replace foreground evidence or act as production limits. | warning |
| `validate_uuid_use` | fixed bindings | Confirm UUID, flow type, property, category, state, and gate; resolve parameterized cards to verified concrete UUIDs before process publication. | error |
| `validate_multi_period` | perennial burdens | Reject double attribution of establishment, replacement, or shared infrastructure across harvest years. | error |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground product system for one declared residual cultivated nut species in shell |
| downstream_use | `secondary_dataset`; `background_dataset` only when species, route, state, geography, and gate fit the receiving study |
| allowed_use | comparative and supply-chain modelling within the declared species, state, technology, period, geography, and gate |
| excluded_use | species-neutral averages without composition evidence; named CPC nuts; wild nuts; groundnuts; shelled kernels; processed nuts; substitution across wet/dry or farm/conditioning gates |
| required_metadata | species, cultivar, origin, orchard system, productive area and age, harvest year, lot/aggregation, hull and shell state, moisture basis, grade, gate, process activation, allocation, packaging, UUID resolution |
| required_quality_disclosure | coverage, measurement methods, missing data, range exceptions, batch mass-balance closure, multi-year averaging, shared-asset attribution, allocation choices, unresolved identities |
| update_trigger | species/category correction, gate or route change, material technology change, new representative records, revised emission factors, material yield/moisture change, or verified identity change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-codex-tree-nut-aflatoxin` | official_guidance | Codex Alimentarius / FAO, Code of Practice for the Prevention and Reduction of Aflatoxin Contamination in Tree Nuts, https://www.fao.org/4/j2262e/j2262e22.htm | prompt hulling/drying, moisture and storage controls, lot condition, rejects |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil N2O calculation |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA air pollutant emission inventory guidebook 2023, https://www.eea.europa.eu/publications/emep-eea-guidebook-2023 | agricultural ammonia calculation |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC, 2006 Guidelines, Volume 2, Chapter 2, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | on-site fuel combustion CO2 calculation |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to matched foreground records | batch reconciliation and exact reference amount |
