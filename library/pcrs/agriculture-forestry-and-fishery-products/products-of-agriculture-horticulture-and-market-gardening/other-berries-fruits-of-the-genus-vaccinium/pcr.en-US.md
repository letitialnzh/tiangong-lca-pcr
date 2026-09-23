---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-berries-fruits-of-the-genus-vaccinium
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other berries; fruits of the genus Vaccinium

## 1. Scope and Applicability
Cultivated fresh or chilled Vaccinium fruit at farm-gate or first conditioning outlet. Includes blueberries, bilberries, cranberries, lingonberries and equivalent cultivated Vaccinium fruit. Excludes processed, frozen-after-freezing, nursery and wild-harvested products.

## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-berries-fruits-of-the-genus-vaccinium` |
| classification_refs | CPC 3.0 / 01355 / exact |
| covered_products | Cultivated fresh or chilled Vaccinium fruit |
| excluded_products | Processed, frozen, nursery and wild-harvested products |
| representative_product | Saleable cultivated blueberry or cranberry |
| production_route | Managed production; cultivation; harvest; sorting; primary conditioning; outlet |
| market_state | Saleable fruit at declared outlet |

## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Saleable cultivated Vaccinium fruit |
| How much | 1 kg |
| How well | Declared species/cultivar, grade, maturity, state and outlet |
| How long or cycle | One production year or crop cycle; perennial establishment allocation when applicable |
| reference_flow_link | `rf_vaccinium_saleable_fruit` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other berries, fruits of the genus Vaccinium `b9b4cf8e-fbb5-46a3-a4ba-0c9c98d46745` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/cultivar; fresh or chilled state; grade; maturity; production year; outlet; fruit mass basis; irrigation status |

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | reference product | Mass | kg | Normalize to saleable fruit mass at outlet; exclude packaging. |
| `measure_fertilizer_n_basis` | fertilizer inputs | Product and nutrient mass | kg product; kg N/P2O5/K2O | Record actual product and supplier-declared nutrient basis; do not infer. |
| `measure_irrigation_water` | irrigation input | Volume or mass | m3 or kg | Use meter/delivery records; convert only with documented density. |
| `measure_perennial_allocation` | perennial establishment | Area, years, yield | ha, year, kg | Allocate establishment over documented productive years and output. |

## 5. System Boundary
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Managed plot and declared establishment status at period start |
| starting_condition_role | Foreground agricultural production starting condition |
| product_classification_scope | Cultivated CPC 01355 Vaccinium fruit; classification is mapping context |
| recursive_input_rule | Stop same-category recursion at a declared product input and require its upstream dataset. |
| upstream_dataset_requirement | Provide upstream datasets for plants, fertilizers, amendments, energy, water, packaging and services crossing the boundary. |
| disclosure | Disclose species/cultivar, system, area, establishment, period, outlet, grade, irrigation, inputs, yield, rejects and allocation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_outlet` | all datasets | Start at managed plot and end at declared farm-gate/first conditioning outlet; disclose post-harvest steps. | `iso-14044-2006` |
| `boundary_recursive_same_category` | recursive product inputs | Stop tracing at same-category declared input and reference its upstream dataset. | `iso-14044-2006` |
| `boundary_establishment_disclosure` | perennial systems | Include establishment only through documented allocation to reporting crop period. | `iso-14044-2006` |

## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_establishment` | Plot establishment | conditional | Perennial plot | managed biological production | site-specific records |
| `p_cultivation` | Cultivation and crop protection | required | All crop-cycle operations | managed biological production | site-specific records |
| `p_harvest` | Harvest and capture | required | Manual or mechanical harvest | harvest capture | site-specific records |
| `p_conditioning` | Sorting and primary conditioning | conditional | Before outlet | grading and conditioning | site-specific records |
| `p_rejects` | Reject routing | conditional | Non-saleable fruit leaves system | reject routing | mass balance |

### Process: Cultivation and crop protection (`p_cultivation`)
#### Inputs
##### Product flows
###### Agricultural nutrient and fertilizer inputs (`p_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `fao-crop-production-guidance`
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`cultivation_irrigation_water`)
Record metered or delivery-based irrigation water by plot and season.
- Selected flow: Irrigation water (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: meter or delivery record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable fruit
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `fao-crop-production-guidance`
#### Outputs
##### Product flows
###### Crop output (`cultivation_crop_output`)
Record harvested Vaccinium fruit before sorting from the crop-cycle mass balance.
- Selected flow: Vaccinium fruit (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: harvested mass before sorting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable fruit
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-crop-production-guidance`

### Process: Harvest and capture (`p_harvest`)
#### Inputs
##### Product flows
###### Harvest consumables (`harvest_consumables`)
Record actual harvest aids, consumables and field packaging by operation.
- Selected flow: Harvest consumable or field packaging (UUID unresolved; intentionally blank)
- Flow property / unit: Mass or item / kg or item
- Amount rule: equipment log or invoice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested fruit
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `fao-crop-production-guidance`
###### Harvest energy (`harvest_energy`)
Record electricity, fuel and other energy carriers used by harvest equipment or purchased harvest services.
- Selected flow: Harvest energy supply (UUID unresolved; intentionally blank)
- Flow property / unit: Energy or mass / kWh, MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: equipment log, meter, contractor record or invoice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested fruit
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `fao-crop-production-guidance`
#### Outputs
##### Product flows
###### Harvested fruit (`harvested_fruit`)
Use scale or crate records for harvested fruit before sorting.
- Selected flow: Vaccinium fruit (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: scale or crate records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested fruit
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-crop-production-guidance`

### Process: Sorting and primary conditioning (`p_conditioning`)
#### Inputs
##### Product flows
###### Harvested fruit (`conditioning_input_fruit`)
Link receiving weight to the harvest lot entering conditioning.
- Selected flow: Harvested Vaccinium fruit (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: receiving weight
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable fruit
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-crop-production-guidance`
##### Waste flows
###### Sorting rejects (`conditioning_rejects`)
Record rejected fruit by destination and treatment route.
- Selected flow: Fruit rejects (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: reject weight or mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable fruit
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-crop-production-guidance`
#### Outputs
##### Product flows
###### Saleable fruit (`saleable_fruit`)
Use the final weighed saleable fruit at the declared outlet.
- Selected flow: Saleable Vaccinium fruit (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: graded output at declared outlet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable fruit
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-crop-production-guidance`

## 7. Allocation and Co-product Handling
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_saleable_reject` | saleable fruit and rejects | Prefer subdivision; otherwise allocate shared burdens by mass and add destination treatment after split. | `iso-14044-2006` |
| `allocation_perennial_establishment` | perennial establishment | Allocate over documented productive years and annual saleable output; disclose sensitivity. | `iso-14044-2006` |
| `allocation_intercrop_shared_area` | shared plots | Use measured area/time shares or documented physical/economic basis consistently. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_inputs` | `p_cultivation` | inputs | invoices, logs, meters | product; nutrient; amount; water; date; area | record reconciliation | kg; kg nutrient; m3 | per operation | full crop cycle | each plot | sum by plot/product | supplier declaration; meter check |
| `cp_harvest_records` | `p_harvest` | harvest energy | logs and invoices | equipment; energy; hours; crates | log/invoice reconciliation | kWh; L; h; kg | per event | harvest season | each line | sum by operation | scale ticket; invoice |
| `cp_harvest_mass_balance` | `p_harvest,p_conditioning,p_rejects` | outputs | scale and destination records | input; saleable; reject; loss; destination | lot weighing | kg | per lot | harvest and conditioning | each lot | input = outputs + loss | calibrated scale; reconciliation |
| `cp_establishment_records` | `p_establishment` | establishment | land and planting register | area; year; plants; productive years | register and supplier records | ha; year; kg/item | annual | establishment onward | each plot | allocate by output | invoice; register |
| `cp_conditioning_records` | `p_conditioning` | utilities | meter and production log | utility; lot; time | meter or documented allocation | kWh; m3; h | lot/month | conditioning period | site | allocate by output | meter; log |
### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_saleable_mass` | all flow rows | Period quantity / saleable fruit mass at outlet. | quantity; saleable mass | per kg saleable fruit | `iso-14040-2006` |
| `calc_establishment_allocation` | `p_establishment` | Establishment burden × reporting share / annual saleable output. | burden; years; output | allocated burden | `iso-14044-2006` |
| `calc_mass_balance` | harvest and conditioning | Reconcile input, saleable output, rejects and loss within scale uncertainty. | lot records | reconciled totals | `fao-crop-production-guidance` |
| `calc_nutrient_basis` | fertilizer and amendments | Product mass × supplier-declared nutrient fraction; retain both values. | product; declaration | product and nutrient mass | `fao-crop-production-guidance` |
### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all rows | Declare species/cultivar, state, grade, outlet and route; unresolved identities block review. | lot and supplier records |
| `dq_completeness` | all processes | Cover cycle and reconcile inputs, saleable output, rejects and losses. | protocol records |
| `dq_temporal` | all rows | State reporting period, crop cycle and perennial allocation. | farm register |
| `dq_measurement` | quantitative rows | Prefer calibrated scales/meters and retain assumptions and uncertainty. | calibration records |
| `dq_disclosure` | published datasets | Disclose missing data, estimates, irrigation, amendments, rejects and allocation. | quality statement |

## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | reference flow | Reference amount is 1 kg saleable fruit and matches outlet and mass basis. | `iso-14040-2006` |
| `validation_mass_balance` | harvest and conditioning | Inputs, saleable output, rejects and losses reconcile; unexplained differences are findings. | `fao-crop-production-guidance` |
| `validation_nutrient_declaration` | fertilizer and amendments | Product and nutrient basis trace to supplier or primary records. | `fao-crop-production-guidance` |
| `validation_boundary_disclosure` | all datasets | Check starting condition, outlet, inclusions, recursion, establishment and exclusions. | `iso-14044-2006` |
| `validation_quality_disclosure` | all datasets | Report temporal, geographic, completeness, measurement, estimate and allocation limitations. | `iso-14040-2006` |

## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset when upstream links are complete |
| downstream_use | Foreground agricultural process and lifecycle-model construction |
| allowed_use | Modelling within declared species/system, outlet, period and allocation scope |
| excluded_use | Processed, frozen, wild, nursery or materially different systems |
| required_metadata | species/cultivar; geography; system; period; outlet; grade; irrigation; inputs; yield; rejects; allocation; upstream links |
| required_quality_disclosure | completeness; representativeness; measurement; estimates; uncertainty; allocation; missing UUID identities |
| update_trigger | Material change in system, irrigation, inputs, outlet, grade, allocation or primary data |

## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14040-2006` | standard | ISO 14040:2006 | functional-unit and quality framing |
| `iso-14044-2006` | standard | ISO 14044:2006 | boundary, allocation, recursion and validation |
| `fao-crop-production-guidance` | official_guidance | FAO crop production and farm-record guidance | route, records, mass balance and nutrient declarations |
