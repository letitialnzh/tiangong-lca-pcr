---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.unmanufactured-tobacco
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Unmanufactured tobacco

## 1. Scope and Applicability

This PCR covers tobacco leaves delivered either as fresh harvested green leaf at the field/farm gate, or as cured unmanufactured leaf after one declared air-, fire-, flue-, or sun-curing route and subsequent grading and packing. One dataset shall select one terminal market state and gate. It excludes cigarettes, cigars, smoking mixtures, cut, homogenized or reconstituted tobacco, nicotine extraction, and all other manufactured tobacco or nicotine products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.unmanufactured-tobacco |
| classification_refs | CPC 3.0: 01970 Unmanufactured tobacco |
| covered_products | fresh harvested tobacco leaf; air-, fire-, flue-, or sun-cured leaf remaining unmanufactured |
| excluded_products | manufactured tobacco and nicotine products, including cut, blended, reconstituted, extracted, smoking, oral, and heated products |
| representative_product | tobacco leaf in one declared green or cured market state |
| production_route | managed cultivation and harvest, followed conditionally by exactly one curing route and grading/packing |
| market_state | green leaf at field/farm gate or cured graded leaf at curing/farm hand-off; state, curing method, moisture, grade, variety, crop year, geography, and package form declared |

Green and cured routes coexist in this category but are mutually exclusive terminal references in one dataset. Air, fire, flue, and sun curing are alternative technologies rather than simultaneous default operations.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | unmanufactured tobacco leaf at the selected terminal gate |
| How much | 1,000 kg as-received tobacco leaf |
| How well | declared green or cured state, curing method where applicable, moisture, grade, variety, origin, crop year, and acceptance specification |
| How long or cycle | one crop cycle and, for cured leaf, its matched curing and grading batches |
| reference_flow_link | `green_leaf_output` for green leaf or `graded_cured_leaf_output` for cured leaf |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Unmanufactured tobacco, production mix, at farm gate, fresh unprocessed `e903dd1d-1d82-41e7-9526-2ae250746688` for green leaf only; cured-leaf identity unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | terminal leaf state; curing method or not applicable; variety/market class; geography; crop year; moisture basis; grade; package form; gate; included operations |
| Binding | `fixed` for green leaf only; cured-leaf route unresolved |

The fixed fresh-leaf UUID shall never identify cured tobacco.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | terminal leaf | Mass | kg | Report as-received mass and measured moisture; retain moisture basis for dry-matter comparisons. |
| `area_to_reference_conversion` | field flows | activity-specific property | activity-specific unit | Normalize same-cycle field totals first to harvested green leaf, then use matched curing and grading balances for cured leaf. |
| `nutrient_content_basis` | nutrient inputs | nutrient mass | kg N, kg P2O5, kg K2O | Preserve product mass, formulation, assay, and elemental/oxide basis separately. |
| `curing_energy_basis` | curing energy | energy or carrier mass | MJ, kWh, kg, m3 | Preserve carrier and measured amount; document every conversion to delivered energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field or transplant bed at crop-cycle start, with planting material and purchased inputs crossing the foreground boundary |
| starting_condition_role | start of managed tobacco leaf production |
| product_classification_scope | fresh and cured unmanufactured tobacco leaf corresponding to CPC 01970 |
| recursive_input_rule | tobacco seed/seedlings link to distinct propagation datasets and shall not recurse to this harvested-leaf PCR |
| upstream_dataset_requirement | compatible datasets for planting material, nutrients, crop protection, irrigation, fuels, electricity, curing energy, and packaging |
| disclosure | variety; nursery boundary; crop dates; geography; area; irrigation; yield; residue fate; terminal state/gate; curing method/fuel; barn; batches; moisture; grade; rejects; packaging; allocation |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | all routes | Include nursery or purchased transplant input, field preparation, transplanting, management, harvest, and direct field emissions through green-leaf hand-off. | `who-tobacco-environment-2017` |
| `boundary_curing_route` | cured route | Include exactly the declared air, fire, flue, or sun curing route, barn/structure service, energy, drying loss, combustion emissions, handling, and conditioning. | `who-tobacco-environment-2017` |
| `boundary_grading_packing` | cured route | Include pre-gate grading and packing; distinguish accepted grades, downgraded useful leaf, rework, rejects, and waste. | `who-tobacco-environment-2017` |
| `boundary_manufacturing_exclusion` | all routes | Stop before product manufacture, extraction, cutting, blending, reconstitution, distribution, retail, and use. |  |
| `boundary_direct_emissions` | soil and curing combustion | Include managed-soil and foreground combustion emissions from the same activity records used for nutrients and fuels. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`; `ipcc-2006-stationary-combustion` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tobacco_field_production` | Tobacco field production and harvest | required | always | managed biological production and separate leaf harvest | hectare and harvested green-leaf mass for one crop cycle |
| `tobacco_leaf_curing` | Tobacco leaf curing | conditional | terminal product is cured leaf | stabilize leaf by one declared curing technology | incoming green leaf and accepted cured leaf per batch |
| `cured_leaf_grading_packing` | Cured-leaf grading and packing | conditional | cured leaf is graded, reworked, or packed before hand-off | grade and present cured leaf | incoming and accepted packed-leaf mass |

### Process: Tobacco field production and harvest (`tobacco_field_production`)

#### Inputs

##### Product flows

###### Tobacco seed or seedlings (`tobacco_planting_material_input`)

The platform returned only a generic CPC 01990 seedling identity, so this tobacco-specific identity remains unresolved.

- Selected flow: Tobacco seed or seedlings
- Flow property / unit: Mass or number of items / kg or item
- Amount rule: measured seed mass or counted transplanted seedlings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated hectare and converted with same-cycle yield
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Range: Provisional transplant-density screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 8,000
  - Upper: 40,000
  - Unit: seedlings/ha
  - Basis: one transplanted crop cycle; direct-seeded systems use actual seed basis
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`tobacco_field_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments in this one consolidated card. Preserve each actual product, formulation, assay, event, and amount without double counting compounds.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: collect each product once and calculate declared nutrients; foreground generation expands products to verified exchanges
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and converted to 1,000 kg terminal leaf
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Range: Provisional nitrogen screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg N/ha
  - Basis: one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional phosphorus screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg P2O5/ha
  - Basis: one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Range: Provisional potassium screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg K2O/ha
  - Basis: one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`tobacco_irrigation_water_input`)

Record water applied to the tobacco field and distinguish irrigation from rainfall.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated applied water; rainfed fields record zero with evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and converted to terminal leaf
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8,000
  - Unit: m3/ha
  - Basis: one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery energy (`tobacco_field_energy_input`)

Record energy consumed by mobile machinery used for field preparation, transplanting, crop care, and harvest.

- Selected flow: Energy supply for mobile field machinery
- Flow property / unit: Carrier quantity or energy / kg, L, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured fuel or contractor activity with carrier retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and converted to terminal leaf
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_records`
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: L diesel-equivalent/ha
  - Basis: one crop cycle; actual carrier remains explicit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulations (`tobacco_crop_protection_input`)

Record actual products separately. Search returned generic or route-specific aggregates only, so no fixed UUID is assigned.

- Selected flow: Crop-protection formulation used in tobacco production
- Flow property / unit: Mass of formulation / kg
- Amount rule: measured formulation by product/event, preserving active ingredient and concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per hectare and converted to terminal leaf
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Range: Provisional formulation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg formulation/ha
  - Basis: one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested green tobacco leaf (`green_leaf_output`)

Record accepted harvested green leaf as the terminal product or the measured intermediate transferred to curing.

- Selected flow: Unmanufactured tobacco, production mix, at farm gate, fresh unprocessed `e903dd1d-1d82-41e7-9526-2ae250746688`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted green-leaf mass at declared moisture, grade, and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare; scale to 1,000 kg only when green leaf is terminal
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional green-leaf yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 8,000
  - Unit: kg/ha
  - Basis: one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residues and rejected leaves (`field_residue_waste_output`)

Record non-product stalks, roots, rejected leaves, and harvest losses by destination.

- Selected flow: Tobacco field residues and rejected green leaves
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass by residue class and fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested green leaf
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,500
  - Unit: kg/1,000 kg harvested green leaf
  - Basis: all non-product biomass and rejected leaf by fate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide to air (`field_n2o_air_output`)

Record calculated managed-soil nitrous oxide in the confirmed unspecified-air compartment.

- Selected flow: Nitrous oxide, emissions to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: `fixed`
- Amount rule: calculate from collected N inputs and residues with an applicable method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and converted to terminal leaf
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha
  - Basis: one crop cycle; method calculation governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`field_ammonia_air_output`)

Record calculated fertilizer-related ammonia volatilization in the confirmed unspecified-air compartment.

- Selected flow: Ammonia, emissions to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: `fixed`
- Amount rule: calculate by nutrient product, method, timing, weather, and factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and converted to terminal leaf
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `emep-eea-2023-guidebook`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg NH3/ha
  - Basis: one crop cycle; method calculation governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`field_nitrate_water_output`)

Record calculated or monitored nitrate loss in the confirmed unspecified-water compartment.

- Selected flow: Nitrate, emissions to water, unspecified `fe0acd60-3ddc-11dd-aa31-0050c2490048`
- Flow property / unit: Mass / kg nitrate
- Binding: `fixed`
- Amount rule: calculate only with applicable leaching/runoff method or monitored balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and converted to terminal leaf
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg nitrate/ha
  - Basis: one crop cycle; selected method governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Tobacco leaf curing (`tobacco_leaf_curing`)

#### Inputs

##### Product flows

###### Green leaf entering curing (`curing_green_leaf_input`)

Record the measured harvested green-leaf batch transferred into the selected curing route.

- Selected flow: Unmanufactured tobacco, production mix, at farm gate, fresh unprocessed `e903dd1d-1d82-41e7-9526-2ae250746688`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured green-leaf batch mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per batch and converted to 1,000 kg cured leaf
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing_records`
- Range: Green-to-cured mass ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 12
  - Unit: kg green leaf/kg accepted cured leaf
  - Basis: matched batch with moisture states declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Curing energy carriers and utilities (`curing_energy_input`)

Record actual electricity, purchased heat, or fuel. Air/sun curing may be zero-energy; fire/flue curing retain actual carrier. This parameterized set-level card has no fixed UUID.

- Selected flow: Energy supply for tobacco curing
- Flow property / unit: Carrier quantity or energy / kg, m3, kWh, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier/electricity by batch, expanded to verified exchanges in foreground generation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted cured leaf
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing_records`
- Range: Provisional curing-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40,000
  - Unit: MJ/1,000 kg accepted cured leaf
  - Basis: zero may apply to passive routes; actual energy replaces screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cured tobacco leaf (`cured_leaf_output`)

The fresh-leaf UUID shall not be reused.

- Selected flow: Cured unmanufactured tobacco leaf
- Flow property / unit: Mass / kg
- Amount rule: measured cured-leaf mass at declared moisture and curing method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per batch and converted to 1,000 kg accepted cured leaf
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing_records`
- Range: Cured output fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.08
  - Upper: 0.50
  - Unit: kg cured leaf/kg incoming green leaf
  - Basis: matched batch with moisture states declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Curing rejects (`curing_reject_waste_output`)

Record leaf rejected during curing and every non-useful destination separately from evaporated water.

- Selected flow: Tobacco curing rejects and non-useful leaf
- Flow property / unit: Mass / kg
- Amount rule: measured rejects plus reconciled non-water loss by fate; evaporated water is not waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cured leaf
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing_records`
- Range: Provisional curing-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg incoming green leaf
  - Basis: matched batch, excluding evaporated water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide from curing (`curing_fossil_co2_air_output`)

Record fossil carbon dioxide from on-site curing combustion only.

- Selected flow: Carbon dioxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg CO2
- Binding: `fixed`
- Amount rule: fuel quantity × carrier-specific carbon and oxidation factors; zero without on-site fossil combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted cured leaf
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing_records`
- Sources: `ipcc-2006-stationary-combustion`
- Range: Route-conditional combustion screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5,000
  - Unit: kg fossil CO2/1,000 kg accepted cured leaf
  - Basis: zero without fossil combustion
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cured-leaf grading and packing (`cured_leaf_grading_packing`)

#### Inputs

##### Product flows

###### Cured leaf entering grading (`grading_cured_leaf_input`)

Record the measured cured-leaf batch transferred to grading and packing.

- Selected flow: Cured unmanufactured tobacco leaf
- Flow property / unit: Mass / kg
- Amount rule: measured incoming batch mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per batch and converted to 1,000 kg packed leaf
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Grading input-output ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg incoming/kg accepted packed leaf
  - Basis: matched grading batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`cured_leaf_packaging_input`)

Record actual wrap, carton, sack, liner, pallet, crate, strap, and reusable packaging separately. This parameterized set-level card has no fixed UUID.

- Selected flow: Packaging functions for cured tobacco leaf
- Flow property / unit: Mass or number of items / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: measured packaging by material/reuse status, expanded to verified exchanges
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted packed leaf
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg packaging/1,000 kg packed leaf
  - Basis: account for reuse over declared cycles
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Graded cured tobacco leaf (`graded_cured_leaf_output`)

Record the accepted terminal cured-leaf grade or explicitly declared grade mix.

- Selected flow: Graded cured unmanufactured tobacco leaf
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by grade at declared moisture and package form
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Terminal reference quantity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1,000
  - Upper: 1,000
  - Unit: kg
  - Basis: terminal cured-leaf reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-normalization-rule`

###### Downgraded cured leaf (`downgraded_leaf_output`)

Record downgraded leaf only when it leaves the process for a named useful destination.

- Selected flow: Downgraded cured tobacco leaf for declared use
- Flow property / unit: Mass / kg
- Amount rule: measured leaf transferred to named useful destination; exclude internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted packed leaf
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional downgraded-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg incoming cured leaf
  - Basis: useful destination documented
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading and packing rejects (`grading_reject_waste_output`)

Record non-useful leaf and packaging waste by material class and final destination.

- Selected flow: Tobacco grading rejects and packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured non-useful leaf and packaging waste by class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted packed leaf
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional grading-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg incoming cured leaf
  - Basis: matched grading batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all nodes | Separate field, curing, grading, and batch records; attribute shared meters/equipment by operating time, throughput, or occupied capacity before allocation. | `iso-14044-2006` |
| `allocation_leaf_grades` | useful grades | Preserve grades and direct burdens; if subdivision is infeasible, use contemporaneous hand-off economic allocation and disclose mass sensitivity. | `iso-14044-2006` |
| `allocation_residue_reject` | residues, rework, rejects | Do not allocate to internal rework or waste; prevent reworked leaf from becoming a second output. |  |
| `allocation_shared_infrastructure` | shared barns/assets | Attribute each shared asset once across batches/periods with documented use; prevent cross-node double counting. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_records` | `tobacco_field_production` | planting, nutrients, water, energy, protection | log, invoice, meter, contractor record | field; area; variety; product; formulation; amount; assay; date; operation | reconcile inputs to field/cycle | item; kg; L; m3; MJ; ha | each event | full cycle | all fields | sum by identity/field; normalize with matched yield | invoices; labels; calibrated meters; logs |
| `cp_harvest_records` | `tobacco_field_production` | green leaf, residue, reject | harvest ticket, scale, moisture, destination | field; date; mass; moisture; grade; residue; fate | weigh/reconcile each picking | kg; percent; ha | each picking | full cycle | all fields | separate accepted leaf and every residue fate | calibration; lot trace; moisture test |
| `cp_field_emissions` | `tobacco_field_production` | emissions | nutrient, soil, weather, residue, model | N; residue N; soil; climate; application; drainage; factors; model | declared applicable calculation method | kg N; kg emission; ha | each event/cycle | full cycle | all fields | calculate per field, area-weight, normalize | activity and factor provenance; model file |
| `cp_curing_records` | `tobacco_leaf_curing` | leaf, energy, rejects, emissions | batch, scale, moisture, meter, barn log | batch; method; barn; input mass/moisture; carrier; energy; time; outputs | match each run to inputs/outputs/meters | kg; percent; kWh; MJ; h | each batch/period | full curing period | all barns and curing sites | reconcile mass; allocate shared services by measured driver | calibrated scale/meter; invoice; barn log |
| `cp_grading_records` | `cured_leaf_grading_packing` | grades, packaging, rework, rejects | batch, scale, grade, issue, destination | batch; input; moisture; accepted; downgrade; rework; reject; packaging | reconcile grades/destinations | kg; item; percent | each batch | full grading period | all grading and packing sites | count rework once and close mass balance | calibration; grade sheet; package record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_field_to_green_leaf` | field flows | crop-cycle amount / matched green-leaf mass | amount; area; green leaf | amount/kg green leaf |  |
| `calc_green_to_cured_leaf` | cured route | green-leaf-normalized amount × green-leaf input / cured output | masses; moisture; rejects | amount/kg cured leaf | `mass-balance-identity` |
| `calc_nutrient_content` | nutrient supply | product amount × declared nutrient fraction | identity; amount; assay | nutrient by product |  |
| `calc_managed_soil_emissions` | field emissions | applicable IPCC/regional method using inputs, residues, volatilization, and leaching | activity; soil; climate; factors | emissions by pathway | `ipcc-2019-managed-soils` |
| `calc_curing_combustion` | curing | fuel quantity × carrier-specific factor; purchased electricity is not on-site combustion | carrier; amount; factor | pollutant/batch | `ipcc-2006-stationary-combustion` |
| `calc_curing_mass_balance` | curing | green wet mass = cured leaf + rejects + water/other loss within uncertainty | masses; moisture | reconciled outputs | `mass-balance-identity` |
| `calc_grading_mass_balance` | grading | input = accepted + downgraded + rejects + loss; count rework once | batch masses; routes | reconciled grades | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | reference | Distinguish green/cured and air/fire/flue/sun route; retain variety, grade, moisture, crop year, gate. | crop, curing, grade, sales records |
| `dq_temporal_alignment` | all rows | Match field, harvest, curing, grading, energy, and outputs to the same crop/batches; disclose proxies. | dated records |
| `dq_mass_moisture` | transformations | Use calibrated masses and paired moisture at green, cured, and packed states. | calibration; moisture records |
| `dq_route_completeness` | curing | Record energy carrier and combustion location; zero energy requires passive-route evidence. | barn log; invoice; meter |
| `dq_identity_resolution` | parameterized/unresolved | Resolve every emitted exchange to one verified UUID before process publication. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_terminal_route` | reference | Select exactly one terminal route: 1,000 kg green or 1,000 kg cured graded leaf; forbid fresh UUID for cured leaf. |  |
| `validation_curing_method` | cured route | Declare one primary curing method per batch and include its energy, barn service, emissions, rejects, and hand-off. | `who-tobacco-environment-2017` |
| `validation_mass_balance` | harvest/curing/grading | Reconcile mass, moisture, grades, rework, rejects, and losses within documented uncertainty. | `mass-balance-identity` |
| `validation_nutrient_emissions` | field | Reconcile nutrient/residue N with N2O, NH3, and nitrate methods without duplicate pathways. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `validation_rework` | curing/grading | Link rework to origin and count once; rejected material cannot be accepted reference product. |  |
| `validation_shared_assets` | barns/meters/equipment | Apply one attribution driver per period and prevent double counting. | `iso-14044-2006` |
| `validation_flow_identity` | every flow | Use detail-confirmed exact UUIDs as `fixed`, current Flow Sets as `parameterized`, and otherwise unresolved identities. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unmanufactured tobacco leaf production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | LCA of green or cured unmanufactured tobacco preserving geography, crop year, state, curing technology, grade, moisture, gate, and allocation |
| excluded_use | manufactured tobacco/nicotine products or a different curing route, grade, geography, or gate without reviewed proxy decision |
| required_metadata | variety/market class; geography; crop year; area; yield; terminal state/gate; curing method; barn/energy; moisture; grade; packaging; residue/reject fate; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy periods; missing records; range exceedances; emission methods; meter/fuel reconciliation; mass/moisture balance; unresolved identities |
| update_trigger | reviewed route evidence, technology or emission-method change, Flow Set/UUID change, or representative data outside QA ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `who-tobacco-environment-2017` | official_guidance | WHO, Tobacco and its environmental impact: an overview, 2017, https://iris.who.int/bitstream/handle/10665/255574/9789241512497-eng.pdf | cultivation and air/fire/flue/sun curing routes |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11 | managed-soil nitrogen pathways |
| `emep-eea-2023-guidebook` | method_factor | EEA, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | agricultural ammonia context |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC 2006 Guidelines, Volume 2, Chapter 2 | curing combustion calculations |
| `iso-14044-2006` | standard | ISO 14044:2006 | allocation and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass for matched harvest, curing, and grading batches | batch calculations and validation |
| `reference-normalization-rule` | method_factor | PCR normalization: terminal reference output equals 1,000 kg | exact terminal range |
