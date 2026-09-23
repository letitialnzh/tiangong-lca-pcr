---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lentils-dry
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Lentils, dry

## 1. Scope and Applicability

This PCR covers mature dry whole Lens culinaris grain at the farm gate after managed field production, direct combining or swathing followed by combining, threshing, farm cleaning, grading, and conditional aeration or drying. It excludes green vegetable lentils, planting seed sold as seed, sprouts, dehulled or split lentils, flour, cooked products, downstream industrial processing, packaging, and transport from the farm.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lentils-dry |
| classification_refs | CPC 3.0: 01704 Lentils, dry |
| covered_products | Mature dry whole Lens culinaris grain at farm gate |
| excluded_products | Green vegetable lentils; planting seed; sprouts; dehulled/split lentils; flour; cooked and downstream processed products |
| representative_product | Whole mature dry lentil grain |
| production_route | Managed biological parent field_production; mutually exclusive direct-combine or swath/combine harvest routes; cleaning and grading; alternative technology route delta between direct-combine and swath/combine changes harvest operation records; conditional aeration/drying changes energy, moisture-loss and validation records |
| market_state | Unprocessed whole dry grain with declared class, colour, grade, moisture, damage, splits/breakage, foreign matter and conditioning route |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mature dry whole Lens culinaris grain at farm gate |
| How much | 1,000 kg |
| How well | Declared class, colour, grade, moisture, split/broken and damaged fractions, foreign matter, harvest and conditioning route |
| How long or cycle | One crop cycle through farm-gate hand-off |
| reference_flow_link | `lentils_dry_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Lentils, dry `ec8a8323-9812-417c-896f-3b98f11d3cc9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Lens culinaris; whole mature grain; market class and colour; farm-gate grade; wet-basis moisture; split/broken and damage fractions; foreign matter; harvest route; aeration/drying status |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | grain, residue, reject and loss masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report moisture basis and convert grain to declared farm-gate moisture before normalization. |
| `field_area` | field records | Area | ha | Normalize crop-cycle inputs and outputs from the same harvested area. |
| `moisture_balance` | aeration and drying | Mass fraction | % wet basis | Measure inlet and outlet moisture by lot and calculate water removed by wet-basis mass balance. |

## 5. System Boundary

The foreground starts with a prepared field and planting material. Field production hands standing mature crop to an independent harvest node. Harvest hands uncleaned grain to primary conditioning; grading creates accepted, downgraded and rejected states; conditional stabilization ends at farm-gate hand-off. Direct combine and swath/combine are mutually exclusive per lot. Operation records are indexed by field, lot and batch; shared burdens are assigned once by measured throughput. The dataset uses a single-period inventory for one crop cycle, with no storage beyond conditional stabilization and no cross-cycle asset events.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field plus purchased or retained planting seed ready for one crop cycle |
| starting_condition_role | Foreground crop-production starting condition |
| product_classification_scope | Mature dry whole Lens culinaris grain at farm gate |
| recursive_input_rule | Retained lentil grain used as seed is recorded once as a prior-crop seed input and is not regenerated recursively in the current crop cycle. |
| upstream_dataset_requirement | Use upstream datasets for seed, actual nutrient and crop-protection products, energy, electricity and irrigation supply. |
| disclosure | Declare geography, crop year, cultivar/class, field area, prior crop, tillage, irrigation, harvest route, lot moisture and grade, conditioning route and all residue destinations. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_farm_gate` | all processes | Include field work, harvest, threshing, farm cleaning, grading and conditional aeration/drying through hand-off; exclude downstream processing. | `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019` |
| `boundary_route` | harvest | Select exactly one harvest route per lot and record swath operation and shatter only when applicable. | `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019` |
| `boundary_conditioning` | stabilization | Include aeration/drying only when required and retain inlet/outlet moisture, energy, duration and reject evidence. | `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Managed lentil field production | required | One crop cycle | Managed biological production parent; prepared field to standing mature crop | per cultivated ha and crop cycle |
| `harvest_threshing` | Harvest and threshing | required | Direct combine or swath/combine selected per lot | Independent harvest node with an alternative technology route delta; standing crop to uncleaned grain | per harvested ha |
| `primary_conditioning` | Farm cleaning | required | At least one cleaning pass | Primary conditioning; harvested grain to cleaned grain | per 1,000 kg cleaned grain |
| `grading_sorting` | Grading and destination assignment | required | Each farm-gate lot | Grade accepted, downgraded, rejected and rework states | per 1,000 kg graded input |
| `stabilization` | Aeration or drying | conditional | Inlet moisture or storage risk requires intervention | Preservation node; accepted grain to stable farm-gate grain | per 1,000 kg final dry lentils |

### Process: Managed lentil field production (`field_production`)

#### Inputs

##### Product flows

###### Planting seed (`planting_seed`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Lentil seed for planting
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass sown
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `manitoba-lentils-production-management`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 33.6
  - Upper: 89.7
  - Unit: kg/ha
  - Basis: planting seed per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `manitoba-lentils-production-management`

###### Agricultural nutrient supply (`agricultural_nutrient_supply`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Actual agricultural nutrient products
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Flow property / unit: Mass / kg
- Amount rule: sum measured actual mineral, organic and nutrient-bearing amendment products while retaining identity and nutrient analysis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `ipcc-2019-managed-soils`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg products/ha
  - Basis: total actual nutrient products per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-managed-soils`

###### Crop-protection products (`crop_protection_products`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Crop-protection products
- Flow property / unit: Mass / kg
- Amount rule: measured seed treatment, herbicide, fungicide, insecticide, desiccant and adjuvant products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `manitoba-lentils-production-management`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg products/ha
  - Basis: commercial products per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `manitoba-lentils-production-management`

###### Irrigation water (`irrigation_water`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated delivered irrigation; zero for verified rainfed fields
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `fao-crop-water-needs`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3/ha
  - Basis: delivered irrigation per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-crop-water-needs`

###### Field energy carriers (`field_energy`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Field fuel and electricity
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured energy for tillage, planting, spraying and irrigation, excluding harvest
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_operations`
- Sources: `ndsu-pulse-field-guide-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/ha
  - Basis: field energy per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ndsu-pulse-field-guide-2019`

##### Waste flows


##### Elementary flows

###### Managed-soil nitrous oxide (`soil_n2o`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: IPCC selected-tier calculation from collected nitrogen and residue records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha
  - Basis: direct and indirect N2O per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2019-managed-soils`

#### Outputs

##### Product flows

###### Standing mature lentil crop (`standing_mature_crop`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Standing mature lentil crop
- Flow property / unit: Mass / kg
- Amount rule: mass balance of harvested grain, residues and field losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `mass-balance-identity`; `ndsu-pulse-field-guide-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 10000
  - Unit: kg/ha
  - Basis: standing mature above-ground crop mass per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `ndsu-pulse-field-guide-2019`

##### Waste flows


##### Elementary flows


### Process: Harvest and threshing (`harvest_threshing`)

#### Inputs

##### Product flows

###### Standing crop received (`standing_crop_input`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Standing mature lentil crop
- Flow property / unit: Mass / kg
- Amount rule: equals the same-field standing mature crop hand-off
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha harvested
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `mass-balance-identity`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 10000
  - Unit: kg/ha
  - Basis: standing crop received per harvested hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Harvest energy carriers (`harvest_energy`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Harvest fuel and electricity
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured combine energy plus swather energy only for swath/combine lots
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per cultivated ha harvested
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_operations`
- Sources: `ndsu-pulse-field-guide-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: MJ/ha
  - Basis: harvest energy per hectare for selected route
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ndsu-pulse-field-guide-2019`

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Uncleaned harvested grain (`harvested_grain`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Uncleaned harvested lentil grain
- Flow property / unit: Mass / kg
- Amount rule: scale or calibrated yield-monitor mass at measured moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha harvested
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `ndsu-pulse-field-guide-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 4000
  - Unit: kg/ha
  - Basis: uncleaned harvested grain per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ndsu-pulse-field-guide-2019`

###### Recovered straw and pod material (`straw_pod_material`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Lentil straw and pod material
- Flow property / unit: Mass / kg
- Amount rule: measured recovered dry matter; product only with independent intended hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated ha harvested
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `mass-balance-identity`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/ha
  - Basis: recovered straw and pod dry matter per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Field and harvest losses (`field_harvest_loss`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Lentil grain lost in field
- Flow property / unit: Mass / kg
- Amount rule: representative loss samples extrapolated to harvested area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per cultivated ha harvested
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `ndsu-pulse-field-guide-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg/ha
  - Basis: shattered and uncollected grain per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ndsu-pulse-field-guide-2019`

##### Elementary flows


### Process: Farm cleaning (`primary_conditioning`)

#### Inputs

##### Product flows

###### Uncleaned grain received (`uncleaned_grain_input`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Uncleaned harvested lentil grain
- Flow property / unit: Mass / kg
- Amount rule: measured input mass linked to harvest lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cleaned grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `mass-balance-identity`; `manitoba-lentils-production-management`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1250
  - Unit: kg/1000 kg output
  - Basis: uncleaned input per 1,000 kg cleaned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `manitoba-lentils-production-management`

###### Cleaning energy (`cleaning_energy`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Cleaning electricity and fuel
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered energy for cleaning passes and recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cleaned grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_operations`
- Sources: `ndsu-pulse-field-guide-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: MJ/1000 kg output
  - Basis: cleaning energy per 1,000 kg cleaned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ndsu-pulse-field-guide-2019`

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Cleaned grain (`cleaned_grain`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Cleaned lentil grain
- Flow property / unit: Mass / kg
- Amount rule: measured output after loose foreign matter removal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cleaned grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `mass-balance-identity`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg/1000 kg output
  - Basis: cleaned output quantitative reference
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Cleaning rejects and foreign matter (`cleaning_rejects`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Cleaning rejects and foreign matter
- Flow property / unit: Mass / kg
- Amount rule: measured by rework, recovery or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cleaned grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `mass-balance-identity`; `manitoba-lentils-production-management`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg/1000 kg output
  - Basis: rejects per 1,000 kg cleaned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `manitoba-lentils-production-management`

##### Elementary flows


### Process: Grading and destination assignment (`grading_sorting`)

#### Inputs

##### Product flows

###### Cleaned grain received (`cleaned_grain_input`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Cleaned lentil grain
- Flow property / unit: Mass / kg
- Amount rule: measured grading input preserving lot identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg graded input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_lot`
- Sources: `mass-balance-identity`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg/1000 kg input
  - Basis: cleaned grain entering grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Intended output accepted grade grain (`accepted_grade_grain`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Accepted-grade lentil grain
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass excluding downgrade, reject and rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg graded input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_lot`
- Sources: `mass-balance-identity`; `manitoba-lentils-production-management`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 750
  - Upper: 1000
  - Unit: kg/1000 kg input
  - Basis: accepted grain per 1,000 kg graded input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `manitoba-lentils-production-management`

###### Intended output downgraded co-product grain (`downgraded_grain`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Downgraded lentil grain
- Flow property / unit: Mass / kg
- Amount rule: measured downgraded mass with independent destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg graded input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_lot`
- Sources: `mass-balance-identity`; `manitoba-lentils-production-management`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg/1000 kg input
  - Basis: downgraded usable grain per 1,000 kg graded input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `manitoba-lentils-production-management`

##### Waste flows

###### Grading rejects and rework (`grading_rejects`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Rejected lentil material
- Flow property / unit: Mass / kg
- Amount rule: measured split, cracked, discoloured, damaged or foreign material by return, recovery or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg graded input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_lot`
- Sources: `mass-balance-identity`; `manitoba-lentils-production-management`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg/1000 kg input
  - Basis: rejected material per 1,000 kg graded input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `manitoba-lentils-production-management`

##### Elementary flows


### Process: Aeration or drying (`stabilization`)

#### Inputs

##### Product flows

###### Accepted grain requiring stabilization (`accepted_grain_input`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Accepted-grade lentil grain
- Flow property / unit: Mass / kg
- Amount rule: measured wet input mass and inlet moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final dry lentils
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization_lot`
- Sources: `mass-balance-identity`; `manitoba-lentils-production-management`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1250
  - Unit: kg/1000 kg final
  - Basis: wet input per 1,000 kg final dry lentils
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `manitoba-lentils-production-management`

###### Stabilization energy (`stabilization_energy`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Aeration or drying energy
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered fan electricity and dryer fuel by lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg final dry lentils
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_operations`
- Sources: `ndsu-pulse-field-guide-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ/1000 kg final
  - Basis: fan and dryer energy per 1,000 kg final dry lentils
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ndsu-pulse-field-guide-2019`

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Dry lentils at farm gate (`lentils_dry_farm_gate`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Lentils, dry `ec8a8323-9812-417c-896f-3b98f11d3cc9`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: 1,000 kg reference product at declared outlet moisture
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`; `manitoba-lentils-production-management`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg/1000 kg reference product
  - Basis: final accepted grain per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `manitoba-lentils-production-management`

##### Waste flows

###### Stabilization rejects (`stabilization_rejects`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Rejected stabilized lentil grain
- Flow property / unit: Mass / kg
- Amount rule: measured heat-damaged, mould-affected or rejected mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final dry lentils
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization_lot`
- Sources: `mass-balance-identity`; `manitoba-lentils-production-management`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1000 kg final
  - Basis: rejects per 1,000 kg final dry lentils
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `manitoba-lentils-production-management`

##### Elementary flows

###### Water removed (`water_removed`)

Record the stated flow for the linked field or lot and preserve its destination and hand-off.

- Selected flow: Water, to air
- Flow property / unit: Mass / kg
- Amount rule: wet-basis inlet/outlet moisture mass balance reconciled with rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final dry lentils
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_stabilization_lot`
- Sources: `mass-balance-identity`; `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg/1000 kg final
  - Basis: water removed per 1,000 kg final dry lentils
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | grain only | Attribute burdens to accepted dry lentils when other outputs are residues or wastes; disclose destinations without credit. | `mass-balance-identity` |
| `allocation_coproduct` | intended outputs | Enumerate each independently intended straw/pod or downgraded-grain output and apply a disclosed study-specific allocation; use physical dry mass when causality supports it, otherwise disclose economic allocation and prices. | `mass-balance-identity` |
| `allocation_batch` | fields, lots and runs | Link inputs, outputs, cleaning and changeover to runs; allocate shared burdens once by measured throughput. | `mass-balance-identity` |
| `allocation_rework` | returned material | Retain prior burdens, add only incremental rework, and count material once at its final destination. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_production` | seed, nutrient, protection, irrigation | invoices, logs, meter | field; area; product; amount; analysis; date | reconcile applications to field | kg; L; m3; ha | each application | crop cycle | each field | sum by product then area-normalize | invoice; calibrated meter; label |
| `cp_energy_operations` | all | fuel and electricity | meter and machine log | process; field/lot; carrier; quantity; factor; runtime | meter and log reconciliation | L; kg; kWh; MJ | each operation | crop cycle to hand-off | field/facility | convert by documented factor; allocate once | calibration; invoice; runtime |
| `cp_field_emissions` | `field_production` | N2O | calculated record | N by source; residue N; factors; fractions | selected IPCC tier | kg N; kg N2O | crop cycle | crop cycle | each field | calculate by field first | factor version; calculation sheet |
| `cp_harvest_mass_balance` | `harvest_threshing` | grain, residues, losses | scale, monitor, samples | field; route; area; masses; moisture; loss | weigh and representative loss sampling | kg; %; ha | field/lot | harvest | each field | moisture-align and reconcile outputs | calibration; sampling plan |
| `cp_conditioning_lot` | `primary_conditioning` | grain and rejects | scale and log | lot; input; output; moisture; pass; reject; destination | weigh every inlet and outlet | kg; % | lot/pass | conditioning | each lot | sum passes without rework duplication | calibration; closure |
| `cp_grading_lot` | `grading_sorting` | accepted, downgrade, reject, rework | ticket and test | lot; grade; colour; moisture; splits; damage; foreign matter; mass; destination | weigh and classify every output | kg; % | lot | grading | each lot | reconcile exclusive destinations | ticket; test; calibration |
| `cp_stabilization_lot` | `stabilization` | grain, water, reject | moisture, scale, operation log | lot; inlet/outlet mass and moisture; reject; airflow; duration; energy | test and weigh before/after | kg; %; h | lot | intervention | each lot | moisture balance with rejects | calibrated moisture meter and scale |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | all | normalized amount = process amount × 1,000 / accepted final mass | process amount; final mass | per 1,000 kg reference flow | `mass-balance-identity` |
| `calc_moisture` | grain/drying | dry solids = wet mass × (1 − moisture fraction); reconcile water in rejects | wet masses and moisture | aligned grain and water removed | `mass-balance-identity`; `manitoba-lentils-production-management` |
| `calc_n2o` | soil | Apply disclosed IPCC tier and convert N2O-N to N2O by 44/28. | N activity and factors | kg N2O | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest/conditioning/grading | input = exclusive outputs + losses + releases + stock change within uncertainty | linked masses | closure | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Retain species, class, colour, year, grade, moisture, split/broken, damage, foreign matter, harvest and conditioning route. | lot ticket and tests |
| `dq_completeness` | crop cycle | Cover every field operation and harvest, cleaning, grading, rework and stabilization lot. | field-to-lot trace |
| `dq_mass_balance` | material processes | Reconcile all products, residues, wastes, losses, releases and stock changes. | closure worksheet |
| `dq_representativeness` | dataset | Report geography, crop year, fields, classes, irrigation, harvest routes, drying share and aggregation weights. | metadata and lot index |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | Require the fixed UUIDs, 1,000 kg amount and every qualifier. | `manitoba-lentils-production-management` |
| `validate_route` | harvest | Exactly one direct-combine or swath/combine route per lot; both routes cannot be counted together. | `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019` |
| `validate_nutrient_cardinality` | field production | Permit at most one nutrient-supply Product-input card, bound only to flow-set.agricultural-nutrient-supply version 0.3.0; prohibit separate N, P, K, manure or amendment cards. | `ipcc-2019-managed-soils` |
| `validate_outputs` | harvest/grading | Enumerate intended products, residues, loss, accepted, downgraded, reject and hand-offs; decide attribution for every co-product. | `mass-balance-identity` |
| `validate_rework` | cleaning/grading | Link each off-spec state to rework, downgrade, recovery or disposal and prevent double counting. | `mass-balance-identity` |
| `validate_batch` | all runs | Link inputs, outputs, cleaning and changeovers to field/lot/batch and assign shared burdens once. | `mass-balance-identity` |
| `validate_conditioning` | stabilization | When used, require inlet/outlet moisture, energy, duration, water removed, rejects and closure. | `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019` |
| `validate_ranges` | all cards | Require exactly one complete Range with lower, upper, unit, denominator/basis, basis kind, evidence kind and source ids, aligned in EN, ZH and structured output. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate dry-lentil production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness review |
| allowed_use | LCA and footprints needing mature whole dry lentil grain at farm gate |
| excluded_use | Vegetable lentils, planting seed, sprouts, splits, flour, cooked products or undisclosed downstream processing |
| required_metadata | geography; crop year; field/lot coverage; class; colour; grade; moisture; splits/damage/foreign matter; prior crop; tillage; irrigation; harvest and conditioning routes; destinations; allocation |
| required_quality_disclosure | primary-data coverage; calibration; missing data; estimates; mass balance; factor versions; weights; range exceptions |
| update_trigger | changed class mix, geography, year, management, route, technology, specification, destination, allocation or factors |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `manitoba-lentils-production-management` | official_guidance | Province of Manitoba, Lentils — Production and Management, https://www.gov.mb.ca/agriculture/crops/crop-management/print,lentils.html | seed rate, route, harvest moisture, cracking, aeration and grade concerns |
| `ndsu-pulse-field-guide-2019` | extension_guidance | NDSU Extension A1922, Pulse Crop Production Field Guide for North Dakota, https://www.ndsu.edu/agriculture/sites/default/files/2025-09/a1922.pdf | production, harvest, damage and natural-air drying |
| `fao-crop-water-needs` | official_guidance | FAO, Crop Water Needs, Chapter 3, https://www.fao.org/4/s2022e/s2022e07.htm | lentil/pulse crop coefficients and irrigation context |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil N2O method and nitrogen activity data |
| `mass-balance-identity` | method_factor | Conservation of mass for moisture-aligned inputs, outputs, losses, releases and stock change | hand-offs, moisture, mass balance, allocation and rework |
