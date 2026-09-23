---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.soya-beans-other
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Soya beans, other

## 1. Scope and Applicability

This PCR covers harvested whole *Glycine max* beans not intended for planting, from managed production through harvest, cleaning, optional drying, grading, storage and the declared farm or primary-conditioning gate. Each dataset represents one food, feed or processing-grade stratum. Planting seed, flour, meal, oil, protein products and manufactured soy foods are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.soya-beans-other |
| classification_refs | CPC 3.0: 01412 Soya beans, other |
| covered_products | Whole harvested non-planting soya beans for food, feed or processing |
| excluded_products | Planting seed; flour; meal; oil; isolated protein; beverages; tofu; fermented and other manufactured products |
| representative_product | Cleaned and stabilized whole non-planting soya beans |
| production_route | Managed rainfed or irrigated production, harvest and threshing, cleaning, optional drying, grading, storage and optional packaging |
| market_state | Whole beans at a declared farm, collection or conditioning gate; grade, use, moisture, quality fractions and packaging state declared |

Rainfed/irrigated, ambient/heated drying, loose/packaged and food/feed/processing routes shall remain separate until transparently weighted. Each claimed technology delta requires current records for its changed inputs, losses and quality.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole non-planting soya beans at the declared gate |
| How much | 1,000 kg as received |
| How well | Declared food, feed or processing grade; moisture; foreign matter; broken, damaged and pest-affected fractions |
| How long or cycle | One crop cycle and linked postharvest campaign |
| reference_flow_link | `reference_soya_beans` from `storage_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Soya beans, other |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; non-planting use; food/feed/processing grade; moisture and basis; quality fractions; geography; crop year; production, drying and storage route; loose or packaged state; gate |

The reference UUID is unresolved: available exact-CPC candidates are restricted to either a native food/raw-material factory route or feed grade and cannot represent this complete category.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference and material balances | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1,000 kg as received with measured moisture and basis. |
| `area_normalization` | Crop records | Mass | kg/ha and kg/1,000 kg | Retain area, gross yield and accepted mass before normalization. |
| `moisture_balance` | Drying and storage | Mass | kg | Conserve dry solids using paired mass and moisture measurements. |
| `quality_fraction` | Grade and loss | Mass | kg/kg | Use one stated mass and moisture basis for foreign matter, broken, damaged and rejected fractions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field with prior crop, soil condition, retained residues and carry-over amendments disclosed |
| starting_condition_role | Start before sowing |
| product_classification_scope | Whole harvested non-planting soya beans in CPC 01412 |
| recursive_input_rule | Purchased whole beans entering conditioning are upstream inputs, not recursively produced foreground outputs |
| upstream_dataset_requirement | Link concrete product inputs upstream and expand every parameterized Flow Set selection to verified UUIDs |
| disclosure | Geography, crop year, area, prior crop, rainfed/irrigated route, fixation context, inputs, harvest, drying, grade, storage, packaging, gate, residues, rejects and allocation |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop` | Managed production | Include establishment, field operations, irrigation when active, nutrients, direct field emissions, residues and loss through harvest readiness. | `fao-soybean-production`; `ipcc-2019-managed-soils` |
| `boundary_harvest` | Harvest | Independently record collected beans, removed or retained residues, foreign matter and loss. | `fao-soybean-production` |
| `boundary_conditioning` | Conditioning | Include cleaning, grading and drying required for the declared state and reconcile dry solids. | `fao-soybean-postharvest` |
| `boundary_storage` | Storage and presentation | Include aeration, pest control, loss and packaging before the gate; exclude later distribution. | `fao-soybean-postharvest` |
| `boundary_exclusion` | Downstream | Exclude seed certification, crushing, oil extraction, milling and manufacture. | `fao-soybean-postharvest` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_production` | Managed crop production | `required` | One crop cycle | Biological parent; route-specific records and shared field assets attributed once | per area and gross beans |
| `harvest_thresh` | Harvest and thresh | `required` | Mature crop is collected | Independent bean, residue and loss hand-off | per harvested lot |
| `condition_grade_dry` | Clean, grade and optionally dry | `required` | Harvested beans enter conditioning | Batch/continuous treatment with accepted, downgraded and reject states | per accepted conditioned kg |
| `storage_handoff` | Store, present and hand off | `required` | Conditioned beans await gate | Preservation, optional packaging and shared-store attribution | per 1,000 kg reference product |

Link inputs, outputs, cleaning, changeovers and loss to fields, lots, runs or storage periods. Rework returns once to its producing node; downgraded, rejected and discarded states stay distinct.

EOF
### Process: Managed crop production (`crop_production`)

#### Inputs

##### Product flows

###### Planting material (`planting_material`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Soya bean planting material
- Flow property / unit: Mass / kg
- Amount rule: Measured mass sown
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 200
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Consolidated agricultural nutrient supply (`nutrient_supply`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Agricultural nutrient supply
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum all nutrient-product masses while retaining composition
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Irrigation water (`irrigation_water`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered gross delivery; zero for rainfed route
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Field energy supply (`field_energy`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Field-operation energy supply
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Convert measured carriers by operation
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_crop_cycle`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15000
  - Unit: MJ/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Mature crop ready for harvest (`mature_crop`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Mature soya bean crop
- Flow property / unit: Mass / kg
- Amount rule: Measured gross bean-equivalent crop output
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_cycle`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 5000
  - Unit: kg bean-equivalent/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unrecovered field loss (`field_loss`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Unrecovered crop material
- Flow property / unit: Mass / kg
- Amount rule: Observed or mass-balance field loss
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_crop_cycle`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Managed-soil nitrous oxide to air (`soil_n2o`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Nitrous oxide to air from managed soil
- Flow property / unit: Mass / kg N2O
- Amount rule: Declared method applied to collected nutrient and residue data
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg N2O/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and thresh (`harvest_thresh`)

#### Inputs

##### Product flows

###### Mature crop input (`mature_crop_input`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Mature soya bean crop
- Flow property / unit: Mass / kg
- Amount rule: Equal linked mature-crop output
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg input/kg linked output
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
###### Harvest energy supply (`harvest_energy`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Harvest machinery energy supply
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Convert measured carriers by operation
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Harvested unconditioned beans (`harvested_beans`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Harvested unconditioned soya beans
- Flow property / unit: Mass / kg
- Amount rule: Weighed lot with moisture and foreign matter
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1800
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Removed crop residues (`removed_residue`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Removed soya crop residues
- Flow property / unit: Mass / kg dry matter
- Amount rule: Measured or calculated dry matter removed
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4000
  - Unit: kg dry matter/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest rejects and loss (`harvest_rejects`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Harvest rejects and loss
- Flow property / unit: Mass / kg
- Amount rule: Measured rejects or reconciled difference by route
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Clean, grade and optionally dry (`condition_grade_dry`)

#### Inputs

##### Product flows

###### Harvested beans input (`harvested_beans_input`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Harvested unconditioned soya beans
- Flow property / unit: Mass / kg
- Amount rule: Equal linked harvested-bean output
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg input/kg linked output
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
###### Conditioning energy supply (`conditioning_energy`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Conditioning energy supply
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter cleaning, grading and active drying energy
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12000
  - Unit: MJ/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Conditional process water (`conditioning_water`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter water when wet conditioning is active; otherwise zero
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Conditioned accepted beans (`conditioned_beans`)

Record this intended output with field or lot identity, route and destination evidence.

- Selected flow: Conditioned non-planting soya beans
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted output by grade
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1300
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Downgraded beans (`downgraded_beans`)

Record this intended output with field or lot identity, route and destination evidence.

- Selected flow: Downgraded non-planting soya beans
- Flow property / unit: Mass / kg
- Amount rule: Weighed separately saleable lower-grade output
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Screenings and rejects (`conditioning_rejects`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Soya bean screenings and rejects
- Flow property / unit: Mass / kg
- Amount rule: Weighed separated mass by destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water removed in drying (`drying_water_removed`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Water vapour from bean drying
- Flow property / unit: Mass / kg water
- Amount rule: Dry-solids-conserving moisture balance when drying is active
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning_lot`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg water/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Store, present and hand off (`storage_handoff`)

#### Inputs

##### Product flows

###### Conditioned beans input (`conditioned_beans_input`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Conditioned non-planting soya beans
- Flow property / unit: Mass / kg
- Amount rule: Equal linked conditioned-bean output
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_storage_handoff`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg input/kg linked output
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
###### Storage energy supply (`storage_energy`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Storage energy supply
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter energy by lot and occupied duration
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_storage_handoff`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Presentation packaging (`presentation_packaging`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Packaging serving the declared hand-off
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Net packaging adjusted for verified reuse; zero for bulk
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_handoff`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Reference soya beans (`reference_soya_beans`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Soya beans, other
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1,000 kg accepted as-received product
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_handoff`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Storage loss and rejected beans (`storage_loss`)

Record this flow with field or lot identity, route and destination evidence.

- Selected flow: Soya bean storage loss and rejects
- Flow property / unit: Mass / kg
- Amount rule: Measured loss by lot and route
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg reference product or declared internal hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_handoff`
- Range: QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg/1,000 kg reference product
  - Basis: per 1,000 kg reference product or declared internal hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | All nodes | Subdivide and meter fields, lots, runs and storage periods before allocation. | `iso-14044` |
| `allocation_outputs` | Beans, downgraded outputs and residues | Use a documented physical causal relation; if none is defensible, use economic allocation and sensitivity. | `iso-14044` |
| `allocation_shared` | Shared machinery, dryers and stores | Attribute once by measured time, throughput or occupied mass-time. | `iso-14044` |
| `allocation_rework` | Rework | Return mass and burdens once to the producing node; never count rework as accepted and rejected output. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_cycle` | `crop_production` | Inputs, crop output and loss | Field log, invoice, meter, yield record | field_id; area; dates; prior_crop; seed; nutrients; irrigation; energy; yield; loss; residue_route | Reconcile records and calibrated measurements | ha; kg; m3; MJ | Each event/cycle | Representative crop year | Every included field | Sum by field, then normalize by accepted output | Documents, calibration and balance |
| `cp_field_emissions` | `crop_production` | Managed-soil emissions | Workbook and activity record | N_inputs; residue_N; fixation_context; factors; method_version | Apply one declared method | kg substance | Each crop cycle | Same cycles as crop data | Every included field | Calculate by substance and compartment | Reproducible formula and independent check |
| `cp_harvest_lot` | `harvest_thresh` | Energy, beans, residues, rejects | Machine log and weigh ticket | lot_id; field_id; energy; crop_mass; bean_mass; moisture; residues; rejects; destinations | Meter and weigh each hand-off | kg; MJ; % | Each lot | Complete campaign | Every harvest operation | Reconcile by field and route | Tickets, calibration and lot link |
| `cp_conditioning_lot` | `condition_grade_dry` | Utilities and material balance | Run sheet, meter, lab result | lot_id; input_mass; moisture; energy; water; outputs; grade; rejects; route | Weigh, meter and sample | kg; MJ; m3; % | Each batch/run | Complete campaign | Every line | Conserve dry solids and aggregate by grade/technology | Calibration, sampling and closure |
| `cp_storage_handoff` | `storage_handoff` | Storage, packaging, loss, dispatch | Ledger, meter and dispatch record | lot_id; grade; masses; moisture; dates; energy; packaging; reuse; loss; gate | Link occupancy, utility, packaging and dispatch | kg; MJ; day; % | Each lot/dispatch | Entire declared period | Every store/site | Attribute shared storage by occupied mass-time | Ledger, meter, inspection and dispatch evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | All rows | quantity / accepted kg × 1,000 | quantity; accepted mass | quantity per 1,000 kg | `mass-balance-identity` |
| `calc_dry_solids` | Drying | input dry solids = output dry solids + measured dry-solids loss | paired mass and moisture | water removed and closure | `mass-balance-identity` |
| `calc_field_emissions` | Managed soil | Apply declared current method by substance and compartment | field activity; factors | kg emitted | `ipcc-2019-managed-soils` |
| `calc_storage_share` | Shared storage | burden × lot occupied mass-time / total occupied mass-time | burden; kg; days | attributed burden | `iso-14044` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Declare non-planting use, grade, moisture, condition, crop year, route and gate. | Specification, inspection and lot records |
| `dq_completeness` | All nodes | Cover at least 95% of measured mass and all material energy, water, nutrients, residues, loss and packaging; explain remainder. | Reconciliation |
| `dq_temporal` | System | Link one representative crop year to its postharvest lots and disclose averaging or exceptional events. | Dated records |
| `dq_route` | Alternatives | Separate irrigation, drying, grade and packaging routes before transparent weighting. | Route ledgers and weighting |
| `dq_traceability` | Hand-offs | Preserve field, lot, run and storage identity. | Linked identifiers |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | Reference | Reject planting seed and manufactured products; require one whole-bean grade and gate. |  |
| `validate_reference_uuid` | Binding | Fix a route-specific UUID only when grade, use, state and gate all match; otherwise leave blank. |  |
| `validate_balance` | Harvest onward | Reconcile dry solids among accepted, downgraded, rejected and lost outputs within uncertainty. | `mass-balance-identity` |
| `validate_flow_sets` | Product inputs | Expand Flow Sets to verified exchanges; nutrient supply is set-only, no group/fixed UUID and at most one card per process. |  |
| `validate_routes` | Alternatives | Do not merge mutually exclusive routes without weights and complete route records. |  |
| `validate_ranges` | All cards | Use ranges as QA screens, investigate exceptions and retain evidenced foreground values. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground whole non-planting soya bean dataset at a declared gate |
| downstream_use | Secondary/background use in matching food, feed or processing systems |
| allowed_use | Matching geography, year, route, grade, moisture, conditioning, storage, packaging and gate |
| excluded_use | Planting seed, manufactured products, or unmatched grade/gate |
| required_metadata | Species; use; grade; geography; year; area; prior crop; irrigation; fixation context; inputs; harvest; moisture; conditioning; storage; packaging; allocation; gate; UUID state |
| required_quality_disclosure | Coverage, exclusions, uncertainty, record age, range exceptions, balance closure, allocation and weighting |
| update_trigger | Material change in route, input regime, yield, technology, grade, packaging, allocation or reference UUID availability |

## 11. Data Sources

| source_id | type | citation | reference | use |
| --- | --- | --- | --- | --- |
| `fao-soybean-production` | `official_guidance` | FAO soybean production and harvesting guidance | https://www.fao.org/4/t0532e/t0532e02.htm | Crop and harvest route |
| `fao-soybean-postharvest` | `official_guidance` | FAO Post-Harvest Compendium: Soybean | https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_SOYBEAN.pdf | Cleaning, drying, grading and storage |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC 2019 Refinement, Volume 4 | https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | Managed-soil emissions |
| `iso-14044` | `standard` | ISO 14044:2006 | ISO 14044:2006 | Allocation |
| `mass-balance-identity` | `method_factor` | Conservation of mass and dry solids | Mass-balance identity | Handoffs and closure |
