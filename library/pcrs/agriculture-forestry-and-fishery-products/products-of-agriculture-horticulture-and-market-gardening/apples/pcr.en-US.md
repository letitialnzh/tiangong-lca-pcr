---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.apples"
language: "en-US"
status: candidate
sync_with: "pcr.zh-CN.md"
content_maturity: authored_methodology
translation_status: aligned
---

# Fresh Apples at Orchard Gate

## 1. Scope and Applicability

This PCR guides foreground data package construction for fresh apples from commercial cultivars of *Malus domestica*, harvested and delivered at the orchard gate. It covers orchard establishment and removal annualized over the declared productive life, annual orchard management, harvest, and on-orchard handling needed to produce marketable bulk fruit.

Conventional, integrated, organic, rain-fed, and irrigated routes are included when declared. Apple nursery trees, juice, cider, dried or otherwise processed apples, packing-house or cold-store outputs, and fruit produced primarily for industrial processing are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.apples` |
| classification_refs | CPC 3.0 `01341`, `Apples` |
| covered_products | fresh harvested apples from commercial cultivars of *Malus domestica* at orchard gate |
| excluded_products | nursery trees; juice; cider; dried, preserved, or otherwise processed apples; packing-house or cold-store outputs; fruit produced primarily for industrial processing |
| representative_product | marketable fresh apples, natural cultivar mix, bulk at orchard |
| production_route | perennial orchard establishment, annual management, harvest, and orchard-gate handling |
| market_state | fresh, whole, unprocessed bulk fruit at orchard gate, with grade and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | fresh whole apples at orchard gate |
| How much | 1 kg |
| How well | cultivar or mix, marketability criterion, grade, production system, and moisture state declared |
| How long or cycle | one declared harvest year; establishment and removal annualized over the declared productive life |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Apple, natural mix, at orchard `dae75a0f-16b9-47ff-9ee7-63058aebcfe2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or cultivar mix; production system and certification status; orchard age and productive-life assumption; harvest year or averaging period; irrigated or rain-fed status; geography; marketability and grade criterion; orchard gate; bulk container or packaging state |

The reference mass is accepted marketable fruit. Industrial-grade fruit and culls are separate outputs with measured mass and an evidenced fate.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference flow as net kg of accepted fresh apples at orchard gate, excluding reusable-bin tare. |
| `yield_basis` | yield and normalized inputs | Mass and area | kg and ha | Record harvested, accepted, industrial-grade, and culled mass for the same period before normalization. |
| `fertilizer_n_basis` | fertilizer and N emissions | Mass | kg product and kg N | Record product mass and nutrient content; nitrogen calculations use kg N. |
| `water_basis` | irrigation and withdrawal | Volume or Mass | m3 or kg | Declare source and distinguish withdrawal, delivered irrigation, consumption, and water footprint. |
| `energy_inventory` | fuel and electricity | Mass, Volume, or Energy | kg, L, MJ, or kWh | Preserve fuel type, energy unit, conversion factor, and orchard operation. |
| `perennial_annualization` | establishment and removal | declared property | declared unit | Divide attributable lifecycle burdens by declared lifetime marketable yield; disclose juvenile years and replacements. |

## 5. System Boundary

The foreground boundary includes material nursery-tree and support-system installation, soil preparation, planting, attributable irrigation infrastructure, annual fertilization, irrigation, crop protection, pruning and floor management, purchased pollination when material, machinery, harvest, field transport, orchard-gate handling, and end-of-life removal. Upstream production uses representative background datasets. Packing-house grading, retail packaging, cold storage, distribution, retail, consumption, and processing are outside the default boundary.

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_life_cycle` | all datasets | Include establishment, juvenile years, productive years, replacements, and removal through an annualized perennial-orchard model, or justify a representative alternative. | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `boundary_gate` | reference product | End the default boundary at accepted fresh bulk apples at the orchard gate; packing-house and cold-store operations require a downstream dataset. | `codex-cxs-299-2010` |
| `boundary_input_completeness` | orchard management | Address fertilizer, irrigation, crop protection, fuel, electricity, land, establishment materials, biomass fate, and direct emissions with a value, justified zero, or documented exclusion. | `baima-apple-orchard-lca-2024`; `ucdavis-orchard-lca-findings-2020` |
| `boundary_quality_separation` | apple outputs | Separate accepted fresh fruit, industrial-grade fruit, culls, and losses by measured mass and fate. | `codex-cxs-299-2010`; `mass-balance-identity` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | established_orchard_block |
| starting_condition_role | perennial_production_condition |
| product_classification_scope | fresh apples corresponding to CPC 3.0 `01341`; processing outputs excluded |
| recursive_input_rule | same-category apples entering the system are separate inputs with origin and purpose and are not merged with orchard production |
| upstream_dataset_requirement | nursery trees, fertilizers, crop-protection products, energy, water supply, support materials, and waste treatment use representative upstream datasets |
| disclosure | orchard block, cultivar, planting density, establishment year, age, productive life, route, irrigation status, geography, harvest period, yield, marketable fraction, and gate |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| orchard_lifecycle_and_production | Orchard Lifecycle and Apple Production | required |  | foreground | 1 kg accepted fresh apples at orchard gate |
| orchard_gate_handling | Orchard-gate Handling | conditional | include on-orchard washing, pre-cooling, grading, or other handling before the gate | foreground | 1 kg accepted fresh apples at orchard gate |

### Process: Orchard Lifecycle and Apple Production (`orchard_lifecycle_and_production`)

#### Inputs

##### Product flows

###### Annualized establishment inputs (`annualized_establishment_inputs`)

Annualized establishment inputs represent nursery trees, support systems, irrigation infrastructure, replacements, and removal attributable to the reference product.

- Selected flow: site-specific nursery trees, supports, and irrigation-system materials
- Flow property / unit: declared property / declared unit
- Amount rule: measured installation, replacement, and removal quantities annualized over lifetime marketable output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_lifecycle_records`
- Sources: `baima-apple-orchard-lca-2024`
- Range: Annualization reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg attributable material/kg reference product
  - Basis: attributable mass divided by lifetime marketable output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Agricultural nutrient and fertilizer inputs (`orchard_lifecycle_and_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `baima-apple-orchard-lca-2024`
- Range: Foreground plausibility guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg formulated product/kg reference product
  - Basis: broad non-negative screening interval, not a default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)
  - Sources: `baima-apple-orchard-lca-2024`; `goossens-apple-orchard-lca-2017`

###### Crop-protection inputs (`crop_protection_inputs`)

Crop-protection inputs record each named formulated product and active ingredient applied to the orchard.

- Selected flow: Herbicide `c1370404-9e2b-4ed6-ba96-c094f74e0f2d`; Insecticide `ba2ec0c8-d5da-4ca8-bf9f-317478a1ce1b`; product-specific fungicide where applicable
- Flow property / unit: Mass / kg active ingredient and kg product
- Amount rule: measured application by named product and active ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `baima-apple-orchard-lca-2024`
- Range: Foreground plausibility guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg active ingredient/kg reference product
  - Basis: broad non-negative screening interval, not a default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)
  - Sources: `baima-apple-orchard-lca-2024`

###### Irrigation water (`irrigation_water`)

Irrigation water records delivered water entering the orchard production system from each declared source.

- Selected flow: Irrigation water `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- Flow property / unit: Mass / kg, retaining m3
- Amount rule: metered delivered water; zero only for verified rain-fed production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `dzikiti-apple-water-footprint-2019`
- Range: Measured orchard water-footprint context
  - Range role: Typical range (`typical_range`)
  - Lower: 0.187
  - Upper: 0.237
  - Unit: m3 total water footprint/kg apples
  - Basis: measured Mediterranean-climate orchard context, not a universal irrigation default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dzikiti-apple-water-footprint-2019`

###### Orchard energy (`orchard_energy`)

Orchard energy records fuel and electricity consumed by field operations and irrigation pumping.

- Selected flow: Diesel, burned in agricultural machinery `57e0b1a3-2d05-46b2-b61b-cf7b5b167c6f`; Electricity, medium voltage `01bf1ecc-b94c-4a03-ab88-ee79081aae24`
- Flow property / unit: Mass or Energy / kg, L, MJ, or kWh
- Amount rule: measured fuel and electricity by operation, including pumping
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `baima-apple-orchard-lca-2024`; `ucdavis-orchard-lca-findings-2020`
- Range: Foreground energy plausibility guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh-equivalent/kg reference product
  - Basis: broad non-negative screening interval, not a default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)
  - Sources: `baima-apple-orchard-lca-2024`; `ucdavis-orchard-lca-findings-2020`

##### Waste flows

No waste input is normally required. Waste-derived amendments crossing the boundary are separately identified, quantified, and linked to a burden-sharing rule.

##### Elementary flows

###### Land occupation (`land_occupation`)

Land occupation represents productive orchard area over the declared occupation period.

- Selected flow: applicable land occupation elementary flow for the declared land-use class
- Flow property / unit: Area-time / ha a
- Amount rule: productive area times occupation duration divided by marketable output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_and_output_records`
- Range: Positive-yield guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: ha a/kg reference product
  - Basis: area-time divided by marketable yield
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Water withdrawal (`water_withdrawal`)

Water withdrawal represents source-specific water removed from the environment for orchard irrigation.

- Selected flow: water `419682fe-60fb-4b43-be89-bf2824b51104`
- Flow property / unit: Mass / kg
- Amount rule: calculate from metered irrigation by source without double counting supplied water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `dzikiti-apple-water-footprint-2019`
- Range: Measured orchard water-footprint context
  - Range role: Typical range (`typical_range`)
  - Lower: 0.187
  - Upper: 0.237
  - Unit: m3 total water footprint/kg apples
  - Basis: measured context; withdrawal remains source-specific
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `dzikiti-apple-water-footprint-2019`

#### Outputs

##### Product flows

###### Accepted fresh apples (`accepted_fresh_apples`)

Accepted fresh apples are the marketable reference product measured at the declared orchard gate.

- Selected flow: Apple, natural mix, at orchard `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- Flow property / unit: Mass / kg
- Amount rule: measured net accepted mass at orchard gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `codex-cxs-299-2010`
- Range: Reference output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: quantitative reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Industrial-grade apples (`industrial_grade_apples`)

Industrial-grade apples are non-reference fruit sold or transferred as a product for processing.

- Selected flow: Apple, natural mix, at orchard `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- Flow property / unit: Mass / kg
- Amount rule: measured fruit sold or transferred for processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `codex-cxs-299-2010`
- Range: Harvest mass-balance fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg total harvested apples
  - Basis: fraction of harvested apple mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Culled apples and orchard biomass (`culled_apples_and_orchard_biomass`)

Culled apples and orchard biomass record non-product fruit, prunings, and removal material by evidenced fate.

- Selected flow: site-specific biodegradable fruit or woody agricultural waste flow
- Flow property / unit: Mass / kg, with dry-matter basis for woody biomass
- Amount rule: measured culls, prunings, and removal biomass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `ucdavis-orchard-lca-findings-2020`
- Range: Output reconciliation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: broad reconciliation interval; fate-specific records are required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)
  - Sources: `ucdavis-orchard-lca-findings-2020`

##### Elementary flows

###### Managed-soil nitrous oxide to air (`direct_soil_nitrous_oxide_emission`)

Calculate direct and indirect nitrous oxide from orchard nitrogen inputs with the selected IPCC tier. Keep this exchange separate from ammonia and nitrate.

- Selected flow: nitrous oxide, emissions to air unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg N2O
- Amount rule: apply `calculate_direct_soil_n2o` and convert reported N2O-N to N2O by 44/28
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Ammonia volatilization to air (`direct_soil_ammonia_emission`)

Record this exchange only when orchard nitrogen-application records and a declared, applicable ammonia method support a separate estimate. Do not substitute an N2O factor.

- Selected flow: ammonia, emissions to air unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg NH3
- Amount rule: calculate ammonia with the declared method and convert any NH3-N result to NH3 by 17/14
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_input_records`
- Sources:

###### Nitrate released to fresh water (`direct_soil_nitrate_freshwater_emission`)

Include nitrate only when monitoring or a declared nitrogen-loss method supports transfer to fresh water; retain the receiving-water evidence.

- Selected flow: nitrate, emissions to fresh water `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg nitrate
- Amount rule: calculate or measure nitrate transferred to fresh water and convert any nitrate-N result to nitrate by 62/14
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_input_records`
- Sources:

###### Fossil carbon dioxide from fuel (`fossil_carbon_dioxide_from_fuel`)

Fossil carbon dioxide from fuel represents direct on-site combustion emissions calculated from recorded fuel use.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: recorded fuel multiplied by a declared combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Range: Fuel-carbon calculation guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg CO2/kg reference product
  - Basis: calculated from recorded fuel and factor
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

### Process: Orchard-gate Handling (`orchard_gate_handling`)

#### Inputs

##### Product flows

Record water, electricity, reusable bins, and materials only when on-orchard handling occurs before the gate, using the applicable identities and protocols above.

##### Waste flows

Record waste-derived inputs separately.

##### Elementary flows

Do not duplicate water withdrawal already recorded in orchard production.

#### Outputs

##### Product flows

###### Orchard-gate handled apples (`orchard_gate_handled_apples`)

Orchard-gate handled apples are the accepted reference product after included on-orchard handling.

- Selected flow: Apple, natural mix, at orchard `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output after on-orchard handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `codex-cxs-299-2010`
- Range: Reference output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: quantitative reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

Measure additional culls and reconcile them with input fruit.

##### Elementary flows

Record direct handling emissions only when they occur inside the foreground boundary.

## 7. Allocation and Co-product Handling

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | subprocesses and grades | First avoid allocation by subdividing establishment, management, harvest, handling, industrial fruit, and residue management where records permit. | `iso-14044-2006` |
| `allocation_perennial_time` | establishment and removal | Annualize attributable burdens over declared productive life and lifetime marketable yield; disclose non-bearing years, replacements, and yield assumptions. | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `allocation_multiple_apple_outputs` | accepted and industrial apples | Use mass allocation when subdivision is impossible; economic allocation requires representative prices and a mass-allocation sensitivity. | `iso-14044-2006` |
| `allocation_residue_fate` | orchard biomass | Assign collection and on-site management to the orchard; use substitution only with an evidenced displaced product, route, and market. Explicitly model open burning when practiced. | `ucdavis-orchard-lca-findings-2020`; `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_orchard_lifecycle_records | orchard_lifecycle_and_production | establishment and removal | orchard asset record | block; planting year; productive life; trees; replacements; supports; irrigation materials; removal; fate | invoices, field logs, asset register | item, kg, L, kWh, year | per event | complete orchard model | orchard block | annualize over lifetime marketable output | invoices, asset register, calculation workbook |
| cp_orchard_input_records | orchard_lifecycle_and_production | fertilizer and crop protection | purchase and application record | product; active ingredient or nutrients; mass; date; area; block | invoice, label, application log | kg product, kg nutrient, kg active ingredient | per application | harvest year | orchard block | sum by substance and normalize to accepted mass | invoice, label, applicator log |
| cp_irrigation_records | orchard_lifecycle_and_production | irrigation and withdrawal | meter and pumping record | source; meter; readings; volume; pumping energy; date; block | calibrated meter, pumping log, invoice | m3 and energy unit | per event or month | irrigation season | block and source | sum by source and normalize to accepted mass | calibration, readings, invoice |
| cp_energy_records | orchard_lifecycle_and_production | fuel and electricity | energy record | operation; machine; energy type; quantity; period; block | fuel log, telematics, meter, invoice | L, kg, MJ, kWh | per operation or billing interval | harvest year | orchard block | allocate by operation and normalize to accepted mass | invoice, meter, equipment log |
| cp_land_and_output_records | orchard_lifecycle_and_production | land and apple outputs | block and harvest record | area; age; cultivar; harvest date; gross; tare; accepted; industrial; culled; biomass; grade; fate | GIS, calibrated scale, dispatch and fate records | ha, year, kg | per harvest and annual reconciliation | complete harvest year | orchard block and gate | reconcile outputs and normalize by accepted mass | field map, calibration, tickets, grade and fate records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_marketable_yield` | reference product | accepted net mass / productive area | cp_land_and_output_records | kg accepted apples/ha and accepted fraction | `mass-balance-identity` |
| `annualize_orchard_lifecycle` | establishment and removal | attributable lifecycle input / lifetime accepted output using age-specific data or a documented yield curve | cp_orchard_lifecycle_records; cp_land_and_output_records | annualized input/kg reference product | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `calculate_water_withdrawal` | irrigation | source-specific metered withdrawal / accepted mass; report consumption or water footprint separately | cp_irrigation_records; cp_land_and_output_records | m3 water/kg reference product | `dzikiti-apple-water-footprint-2019` |
| `calculate_direct_soil_n2o` | fertilizer N | apply selected IPCC tier and convert N2O-N to N2O by 44/28 | cp_orchard_input_records; declared factors | kg N2O/kg reference product | `ipcc-2019-managed-soils-n2o` |
| `reconcile_apple_outputs` | harvested fruit | accepted + industrial-grade + culled + measured loss = total harvest within declared tolerance | cp_land_and_output_records | mass balance and unexplained loss | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Declare cultivar, block, route, irrigation status, geography, period, grade, gate, and packaging state. | metadata, orchard and dispatch records |
| `dq_temporal_representativeness` | perennial production | Cover a complete harvest year and disclose age and yield variability; use at least three recent years for a representative dataset or justify one year. | dated harvest and input records |
| `dq_mass_balance` | outputs | Reconcile harvest, accepted, industrial, culled, and lost mass; document tare and calibration. | scale records and reconciliation |
| `dq_input_completeness` | management | Quantify or justify zero/exclusion for fertilizer, irrigation, crop protection, energy, establishment, land, biomass fate, and direct emissions. | ledgers, logs, meters, invoices |
| `dq_geographic_representativeness` | water and energy | Record water source, pumping, electricity mix, fuel, climate, and irrigation status; do not use the cited water range as a default. | source records and geography metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm one 1 kg reference flow uses the verified Apple UUID and all required qualifiers. | `codex-cxs-299-2010` |
| `validation_scope` | inventory | Confirm establishment, juvenile years, productive years, management, harvest, removal, and handling are included or justified. | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `validation_mass_balance` | outputs | Confirm apple outputs reconcile to harvest within tolerance and every non-reference output has a fate. | `mass-balance-identity` |
| `validation_nitrogen` | fertilizer and nitrogen emissions | Confirm product mass differs from kg N; verify separate N2O, NH3, and nitrate amounts, receiving media, method factors, and N-equivalent mass balance. Convert N2O-N by 44/28, NH3-N by 17/14, and nitrate-N by 62/14 when reporting substance mass. | `ipcc-2019-managed-soils-n2o`; `mass-balance-identity` |
| `validation_water` | water flows | Confirm withdrawal, delivered irrigation, consumption, and footprint are not double counted or mislabeled. | `dzikiti-apple-water-footprint-2019` |
| `validation_allocation` | shared burdens | Confirm orchard life, yield basis, annualization, allocation, residue fate, and sensitivities are disclosed. | `iso-14044-2006` |
| `validation_completeness` | data package | Confirm each required category has a value, justified zero, or exclusion and out-of-range values are explained. | `ucdavis-orchard-lca-findings-2020`; `baima-apple-orchard-lca-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | orchard-gate fresh apple supply matching cultivar, geography, route, irrigation, orchard-age profile, period, grade, and gate |
| excluded_use | nursery trees; fruit primarily for processing; packing-house, cold-storage, distribution, retail, consumption, or processed products |
| required_metadata | reference UUID and qualifiers; represented orchards; geography; cultivar; route; irrigation; age; productive life; period; yield; accepted fraction; grade; packaging; gate; allocation; protocol coverage |
| required_quality_disclosure | years; primary-record coverage; mass-balance tolerance; calibration; background representativeness; water source; factors; exclusions; uncertainty and sensitivity |
| update_trigger | material change in cultivar, route, water source, age model, yield, accepted fraction, crop protection, fertilizer, energy, biomass fate, gate, or representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-299-2010` | standard | Codex Alimentarius CXS 299-2010, Standard for Apples, <https://workspace.fao.org/sites/codex/Standards/CXS%20299-2010/CXS_299e.pdf> | fresh-apple scope, processing exclusion, quality and marketability |
| `goossens-apple-orchard-lca-2017` | literature | Goossens et al., Agricultural Systems 153 (2017) 81-93, <https://doi.org/10.1016/j.agsy.2017.01.007> | orchard life-cycle boundary, low/high yield years, system variability |
| `baima-apple-orchard-lca-2024` | literature | Baima et al., Heliyon 10 (2024) e38397, <https://doi.org/10.1016/j.heliyon.2024.e38397> | establishment and management inventory, productive-life modelling |
| `dzikiti-apple-water-footprint-2019` | literature | Dzikiti et al., Agricultural and Forest Meteorology 271 (2019) 135-147, <https://doi.org/10.1016/j.agrformet.2019.02.042> | measured orchard water-footprint range and water distinctions |
| `ucdavis-orchard-lca-findings-2020` | official_guidance | UC Davis SAREP, Orchard Life Cycle Assessment: Findings, <https://sarep.ucdavis.edu/are/energy/lcaorchard-findings> | process completeness, biomass fate, irrigation-energy variation |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil N2O calculation |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity. | output reconciliation and annualization checks |
