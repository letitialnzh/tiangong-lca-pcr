---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cotton-whether-or-not-ginned
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Cotton, whether or not ginned

## 1. Scope and Applicability

Covers managed cotton cultivation, harvest and farm-gate seed cotton, plus optional ginning through gin-gate lint. Select one route. Excludes yarn, fabric, oil extraction, transport and use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cotton-whether-or-not-ginned |
| classification_refs | CPC 3.0: 0 > 01 > 019 > 0192 > 01921 |
| covered_products | seed cotton at farm gate; ginned cotton lint at gin gate |
| excluded_products | yarn; fabric; cottonseed oil or meal; synthetic fibre |
| representative_product | accepted seed cotton or accepted lint, route declared |
| production_route | managed cultivation and harvest; optional mechanical ginning, cleaning and grading |
| market_state | unprocessed seed cotton or cleaned ginned lint, moisture and grade declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | accepted cotton in declared seed-cotton or lint state |
| How much | 1,000 kg |
| How well | cultivar, route, moisture, grade, contamination and acceptance declared |
| How long or cycle | one crop cycle and harvest lot; linked gin batch when applicable |
| reference_flow_link | `accepted_cotton_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Accepted seed cotton or ginned cotton lint, declared route |
| Reference flow property |  |
| Reference unit group |  |
| Reference unit | kg |
| Required qualifiers | seed cotton at farm gate or lint at gin gate; geography; crop year; cultivar; moisture; grade; technology |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted product | Mass | kg | Weigh at declared hand-off; do not combine seed-cotton and lint masses. |
| `moisture_alignment` | biomass | Mass | kg wet; kg dry | Preserve wet mass and moisture; convert with lot-specific fraction. |
| `normalization` | field and gin records | Area; Mass | ha; kg | Collect by field-cycle or batch, then normalize once. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field before current-cycle inputs |
| starting_condition_role | foreground entry; crop-attributed preparation included |
| product_classification_scope | CPC 3.0 `01921` |
| recursive_input_rule | same-category input uses its supplying dataset and is not recursively recreated |
| upstream_dataset_requirement | representative upstream dataset; unresolved identity selected from foreground evidence before publication |
| disclosure | route, irrigation, harvest, moisture, grade, gin technology, batch, co-product destinations and exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field` | cultivation | Include crop-attributed preparation, planting, nutrients, protection, irrigation, energy and direct emissions. | `ipcc-2019-refinement`; `fao-cotton-guide` |
| `boundary_harvest` | harvest | Separate harvest, grading, rejects, loss and farm hand-off from crop growth. | `fao-cotton-guide`; `mass-balance-identity` |
| `boundary_gin` | ginning | Include intake, conditioning, separation, cleaning, grading and bale preparation; stop before spinning. | `usda-cotton-ginning` |
| `boundary_routes` | alternatives | Keep rainfed/irrigated, picker/stripper and saw/roller technology strata separate before weighting. | `fao-cotton-guide`; `usda-cotton-ginning` |
| `boundary_route_delta_evidence` | production and technology deltas | Managed cultivation is the production parent. Irrigation changes water, pumping energy and field-emission records; harvest equipment changes energy, losses and contamination; saw versus roller ginning changes conditioning, separation, cleaning and quality records. These routes coexist in the category but are mutually exclusive within one stratum. | `fao-cotton-guide`; `usda-cotton-ginning` |
| `boundary_conditioning_stabilization` | ginned route | Raw seed cotton enters ginning; drying or moisture conditioning, separation and cleaning prepare moisture-safe graded lint for bale hand-off. Conditioning energy and service inputs are recorded in gin energy; cottonseed is an intended co-product; trash, moisture change, dust, rejects and loss remain separately classified. | `usda-cotton-ginning`; `mass-balance-identity` |
| `boundary_single_period` | all routes | Model one crop cycle and its linked harvest and gin batches in one linked accounting interval; single-period; no storage, replacement or termination is included. Temporary holding is assigned to the linked lot. | `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cotton_cultivation` | Managed cotton cultivation | required | one field crop cycle | managed biological production parent; alternative production route delta separates rainfed and irrigated inventory, calculation and validation requirements | ha planted |
| `cotton_harvest` | Harvest, grading and farm hand-off | required | one harvest lot | harvest and grading-sorting of incoming harvestable seed cotton; picker/stripper alternative technology delta changes equipment, loss and contamination records | 1000 kg accepted seed cotton |
| `cotton_ginning` | Ginning and lint hand-off | conditional | ginned route only | material treatment by separation; primary conditioning by drying/cleaning; preservation stabilization to moisture-safe lint; saw/roller alternative technology delta; batch or continuous production | 1000 kg accepted lint |

### Process: Managed cotton cultivation (`cotton_cultivation`)

#### Inputs

##### Product flows

###### Cotton planting seed (`cotton_seed`)

Record this flow with the stated material state, route and destination.

- Selected flow: Cotton planting seed
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass sown
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: crop_cycle (`crop_cycle`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/ha crop cycle
  - Basis: planting seed per hectare
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

###### Consolidated agricultural nutrient supply (`nutrient_supply`)

Record this flow with the stated material state, route and destination.

- Selected flow: Agricultural nutrient supply
- Flow property / unit: Product quantity and nutrient content / kg, m3, kg N, kg P2O5 and kg K2O
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measure each supplied product once and calculate nutrient content
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: crop_cycle (`crop_cycle`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg product/ha crop cycle
  - Basis: solid nutrient products per hectare
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

###### Crop protection and defoliation products (`crop_protection`)

Record this flow with the stated material state, route and destination.

- Selected flow: Crop protection and defoliation products
- Flow property / unit: Mass or volume / kg or L
- Amount rule: measured formulation and active substance
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per ha treated in one crop cycle
- Basis kind: crop_cycle (`crop_cycle`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg or L/ha crop cycle
  - Basis: formulated products per hectare
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Record this flow with the stated material state, route and destination.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated delivered water
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per ha irrigated in one crop cycle
- Basis kind: crop_cycle (`crop_cycle`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_irrigation`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12000
  - Unit: m3/ha crop cycle
  - Basis: delivered irrigation water
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

###### Field energy supply (`field_energy`)

Record this flow with the stated material state, route and destination.

- Selected flow: Field energy supply
- Flow property / unit: Energy / MJ or kWh
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier consumption
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: crop_cycle (`crop_cycle`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ/ha crop cycle
  - Basis: field carrier energy
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

##### Elementary flows

###### Agricultural land occupation (`land_occupation`)

Record this flow with the stated material state, route and destination.

- Selected flow: arable `b88d3b6d-229e-477e-bce1-e16376f75c7b`
- Flow property / unit: Area*time / ha*a
- Binding: Fixed (`fixed`)
- Amount rule: area multiplied by occupation duration
- Value mode: calculated_value (`calculated_value`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: crop_cycle (`crop_cycle`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_field_trace`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: ha*a/ha crop cycle
  - Basis: occupation duration
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvestable seed cotton internal transfer (`standing_seed_cotton`)

Record this flow with the stated material state, route and destination.

- Selected flow: Harvestable seed cotton
- Flow property / unit: Mass / kg
- Amount rule: harvest output plus measured field loss
- Value mode: calculated_value (`calculated_value`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: crop_cycle (`crop_cycle`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/ha crop cycle
  - Basis: harvestable seed cotton
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct nitrous oxide to air (`direct_n2o`)

Record this flow with the stated material state, route and destination.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: IPCC calculation from collected N activity
- Value mode: calculated_value (`calculated_value`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: crop_cycle (`crop_cycle`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg N2O/ha crop cycle
  - Basis: direct N2O
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

###### Ammonia to air (`ammonia_air`)

Record this flow with the stated material state, route and destination.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: measured or modelled NH3
- Value mode: calculated_value (`calculated_value`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: crop_cycle (`crop_cycle`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg NH3/ha crop cycle
  - Basis: NH3 per hectare
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

###### Nitrate to receiving water (`nitrate_water`)

Record this flow with the stated material state, route and destination.

- Selected flow: Nitrate to receiving water
- Flow property / unit: Mass / kg nitrate or kg nitrate-N
- Amount rule: measured or modelled by compartment and basis
- Value mode: calculated_value (`calculated_value`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per ha planted in one crop cycle
- Basis kind: crop_cycle (`crop_cycle`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg nitrate/ha crop cycle
  - Basis: nitrate per hectare
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

### Process: Harvest, grading and farm hand-off (`cotton_harvest`)

#### Inputs

##### Product flows

###### Harvestable seed cotton internal input (`harvestable_seed_cotton_input`)

Record this flow with the stated material state, route and destination.

- Selected flow: Harvestable seed cotton
- Flow property / unit: Mass / kg
- Amount rule: linked transfer from cultivation
- Value mode: calculated_value (`calculated_value`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per harvest lot
- Basis kind: process_output (`process_output`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1500
  - Unit: kg/1000 kg accepted seed cotton
  - Basis: harvest input balance
  - Basis kind: process_output (`process_output`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

###### Harvest energy supply (`harvest_energy`)

Record this flow with the stated material state, route and destination.

- Selected flow: Harvest energy supply
- Flow property / unit: Energy / MJ or kWh
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier use
- Value mode: foreground_record (`foreground_record`)
- Specificity: technology_specific (`technology_specific`)
- Normalization basis: per 1000 kg accepted seed cotton
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ/1000 kg seed cotton
  - Basis: harvest energy
  - Basis kind: process_output (`process_output`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted seed cotton (`accepted_seed_cotton`)

Record this flow with the stated material state, route and destination.

- Selected flow: Seed cotton at farm gate
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted output
- Value mode: foreground_record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: 1000 kg accepted seed cotton
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: mass-balance-identity
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: unginned reference flow
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: method_formula (`method_formula`)
  - Sources: `mass-balance-identity`

### Process: Ginning and lint hand-off (`cotton_ginning`)

#### Inputs

##### Product flows

###### Seed cotton internal input (`gin_seed_cotton`)

Receive raw seed cotton from the linked harvest lot; preserve moisture, grade and contamination before primary conditioning and separation.

- Selected flow: Seed cotton
- Flow property / unit: Mass / kg
- Amount rule: weighed gin intake
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1000 kg accepted lint
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_gin_batch`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1500
  - Upper: 4000
  - Unit: kg seed cotton/1000 kg lint
  - Basis: gin intake
  - Basis kind: process_output (`process_output`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

###### Gin energy supply (`gin_energy`)

Record this flow with the stated material state, route and destination.

- Selected flow: Gin energy supply
- Flow property / unit: Energy / MJ or kWh
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered carrier use
- Value mode: foreground_record (`foreground_record`)
- Specificity: technology_specific (`technology_specific`)
- Normalization basis: per 1000 kg accepted lint
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_gin_batch`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ/1000 kg lint
  - Basis: gin energy
  - Basis kind: process_output (`process_output`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Intended ginned cotton lint output (`ginned_lint`)

Record cleaned, moisture-stabilized and graded lint as the intended output at bale/gin-gate hand-off; off-grade lint is downgraded or rejected and is not counted as accepted lint.

- Selected flow: Ginned cotton lint
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted lint
- Value mode: foreground_record (`foreground_record`)
- Specificity: product_specific (`product_specific`)
- Normalization basis: 1000 kg accepted lint
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_gin_batch`
- Sources: mass-balance-identity
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: ginned reference flow
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: method_formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Intended cottonseed co-product output (`cottonseed_coproduct`)

Record separated cottonseed as an intended co-product at its sale, crushing, feed, planting or other declared hand-off; rejected seed is routed separately.

- Selected flow: Cottonseed co-product
- Flow property / unit: Mass / kg
- Amount rule: weighed separated cottonseed by destination
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1000 kg accepted lint
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_gin_batch`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2500
  - Unit: kg/1000 kg lint
  - Basis: cottonseed output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

##### Waste flows

###### Gin trash and rejected material (`gin_trash`)

Record this flow with the stated material state, route and destination.

- Selected flow: Gin trash and rejected cotton
- Flow property / unit: Mass / kg
- Amount rule: weighed or balanced exit by destination
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per 1000 kg accepted lint
- Basis kind: process_output (`process_output`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_gin_batch`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/1000 kg lint
  - Basis: gin trash
  - Basis kind: process_output (`process_output`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

##### Elementary flows

###### Gin particulate matter to air (`gin_particulate`)

Record this flow with the stated material state, route and destination.

- Selected flow: Particulate matter to air, size fraction declared
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated after control
- Value mode: calculated_value (`calculated_value`)
- Specificity: technology_specific (`technology_specific`)
- Normalization basis: per 1000 kg accepted lint
- Basis kind: process_output (`process_output`)
- Evidence kind: calculated_from_collection (`calculated_from_collection`)
- Collection protocol: `cp_gin_batch`
- Sources:
- Range: Quantity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/1000 kg lint
  - Basis: controlled particulate
  - Basis kind: process_output (`process_output`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_field` | cultivation | Attribute to linked seed cotton; residues left in field receive no product allocation. | `mass-balance-identity` |
| `allocation_gin` | lint and cottonseed | Prefer subdivision; otherwise declared economic allocation with mass sensitivity. | `iso-14044`; `mass-balance-identity` |
| `allocation_reject` | rework/rejects | Return rework once; route rejects by destination and exclude from accepted output. | `mass-balance-identity` |
| `allocation_runs` | gin runs | Assign startup, cleaning and changeover once by meter or throughput-time driver. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_trace` | `cotton_cultivation` | land and identity | field log | field, area, dates, cultivar | records and maps | ha | field-cycle | complete cycle | all fields | preserve strata | maps and logs |
| `cp_field_inputs` | `cotton_cultivation` | inputs | invoice/application log | identity, amount, analysis, date | reconcile purchase and use | native | event | complete cycle | all fields | sum once | invoices and logs |
| `cp_irrigation` | `cotton_cultivation` | water | meter | volume, source, field | meter or balance | m3 | event | complete cycle | irrigated fields | sum delivered | calibration |
| `cp_energy` | cultivation; harvest | energy | meter/fuel log | carrier, quantity, equipment | reconcile meters and invoices | MJ; kWh | operation | full route | all equipment | by node | invoices and meters |
| `cp_field_emissions` | `cotton_cultivation` | emissions | calculation | N, factors, compartments | disclosed IPCC tier | kg/ha | field-cycle | complete cycle | all fields | field then aggregate | factor provenance |
| `cp_mass_balance` | cultivation; harvest | biomass | lot mass | intake, accepted, reject, loss, moisture | calibrated scales | kg | lot | all lots | all included fields and harvest lots | close per lot | calibration |
| `cp_gin_batch` | `cotton_ginning` | batch flows | batch log | intake, lint, seed, trash, energy, grade, controls | scales and meters | kg; MJ; kWh | batch | all batches | all included gin lines | close per batch | calibration and bale records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | biomass | dry mass = wet mass × (1 − moisture fraction) | wet mass; moisture | dry mass | `mass-balance-identity` |
| `calc_emissions` | soil | apply declared IPCC tier once to collected N activity | N activity; factors | direct emissions | `ipcc-2019-refinement` |
| `calc_normalization` | nodes | normalize after route mass balance closes | totals; accepted output | per 1000 kg | `mass-balance-identity` |
| `calc_gin_balance` | gin | intake = lint + seed + trash + moisture change + loss | batch masses | balance | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product | Route, gate, cultivar, moisture and grade present. | lot/bale record |
| `dq_completeness` | all | One complete crop cycle and all linked batches; missingness quantified. | reconciliation |
| `dq_calibration` | quantities | Current calibration or uncertainty assessment. | certificates |
| `dq_strata` | routes | Alternative routes remain separate until transparent weighting. | stratum ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_route` | reference | Exactly one route and gate declared. | error |
| `validate_reference_identity` | reference | Before activation bind exact Product UUID, property and unit group. | error |
| `validate_nutrients` | cultivation | Exactly one set-only nutrient card and no group. | error |
| `validate_balance` | harvest/gin | Close mass balance within declared uncertainty. | error |
| `validate_states` | outputs | Every accepted, downgraded, reworked and discarded state has one destination. | error |
| `validate_runs` | gin | Startup, cleaning and changeover are assigned once. | error |
| `validate_route_deltas` | alternative routes | Name the parent activity, evidence each changed inventory/calculation/validation category, and select one mutually exclusive route per stratum. | error |
| `validate_conditioning_states` | ginning | Record raw seed-cotton intake, any drying/moisture-conditioning inputs, prepared moisture-safe lint, cottonseed, trash, dust, rejects, loss and each hand-off. | error |
| `validate_single_period` | all routes | Confirm one linked accounting interval and require single-period records; no storage, replacement or termination. | error |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground cotton production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | studies matching route, geography, grade and technology |
| excluded_use | yarn, fabric or oil without downstream processes; substitution between seed cotton and lint |
| required_metadata | route, gate, crop year, cultivar, irrigation, harvest, moisture, grade, gin technology, allocation and destinations |
| required_quality_disclosure | coverage, calibration, route weights, balance, emission tier, allocation sensitivity and unresolved identities |
| update_trigger | changed agronomy, technology, yield, grade, markets, allocation, emission method or identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-cotton-guide` | official guidance | FAO cotton production and crop-water guidance | cultivation, irrigation and harvest |
| `usda-cotton-ginning` | official guidance | USDA Cotton Ginners Handbook | ginning boundary and records |
| `ipcc-2019-refinement` | method_factor | IPCC 2019 Refinement, Volume 4 | field emissions |
| `iso-14044` | standard | ISO 14044:2006 | allocation |
| `mass-balance-identity` | method_factor | conservation of mass with moisture adjustment | balances and normalization |
