---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.millet-other
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Millet, other

## 1. Scope and Applicability

This PCR covers non-seed millet grain delivered as harvested, unprocessed grain at the farm gate. It includes millet species represented by CPC 3.0 subclass 01182 and excludes seed-grade millet, teff, processed millet products, distribution, use, and end-of-life. The foreground includes establishment, cultivation, field inputs and emissions, harvest, threshing, and farm-gate preparation actually performed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.millet-other |
| classification_refs | CPC 3.0: 01182, Millet, other |
| covered_products | Harvested non-seed barnyard, finger, proso, kodo, pearl, foxtail, and other in-scope millet grain |
| excluded_products | Millet grown for seed; teff; flour, groats, malt, fermented, or prepared millet products |
| representative_product | Harvested millet grain, unprocessed, at farm gate |
| production_route | Field cultivation followed by harvest, threshing, and declared farm-gate preparation |
| market_state | Unprocessed grain with species, moisture, grade, and cleaning state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Harvested non-seed millet grain, unprocessed, at farm gate |
| How much | 1 kg |
| How well | Species or mix, moisture, grade, cleaning state, and damaged-grain fraction declared |
| How long or cycle | One completed crop cycle |
| reference_flow_link | `reference_millet_grain` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Millet, other `f3fc75e0-f49a-48fd-a12f-88246beb1d0a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or mix; non-seed use; geography; crop year; production system; irrigation; moisture; grade; cleaning state; residue fate |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `millet_reference_mass` | Reference grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-received mass and moisture; retain measured moisture for dry-matter conversion. |
| `crop_cycle_normalization` | Area-based inputs and emissions | Compatible mass, volume, or energy property | kg, L, m3, MJ, or kWh | Normalize records using accepted grain yield from the same crop cycle. |
| `nutrient_basis` | Nutrient inputs | Product mass and nutrient mass | kg product and kg nutrient | Preserve product identity and N, P/P2O5, and K/K2O bases and conversions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Seed and purchased inputs delivered to the farm; land condition at crop-cycle start |
| starting_condition_role | Foreground crop-establishment starting condition |
| product_classification_scope | Non-seed millet grain in CPC 3.0 subclass 01182 |
| recursive_input_rule | Grain used for sowing is recorded as seed-grade millet input, not as the reference product. |
| upstream_dataset_requirement | Use compatible upstream datasets for seed, nutrients, water, fuels, crop-protection products, and other inputs. |
| disclosure | Declare species, geography, rotation, irrigation, harvest and preparation operations, moisture, exclusions, and residue destinations. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | Millet foreground | Include establishment, cultivation, applications, irrigation when used, direct field emissions, harvest, threshing, and farm-gate preparation performed. | `fao-millet-systems`; `fao-millet-postharvest` |
| `boundary_upstream_inputs` | Inputs | Model each crossing input separately with compatible upstream data; do not use an undifferentiated agricultural-input bundle. | `iso-14044-2006` |
| `boundary_residue_fate` | Residues | Distinguish straw or stover, chaff, and broken panicles and disclose each destination. | `fao-millet-systems` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `millet_cultivation` | Millet establishment and cultivation | required | Always included | Managed biological production | One crop cycle and cultivated area |
| `millet_harvest_preparation` | Harvest and farm-gate preparation | required | Always included; drying or cleaning only when performed | Harvest, threshing, separation, and preparation | 1 kg accepted millet grain |

### Process: Millet establishment and cultivation (`millet_cultivation`)

#### Inputs

##### Product flows

###### Millet seed for sowing (`millet_seed_input`)

Seed-grade millet used to establish the crop.

- Selected flow: Millet, seed `8a2d72cb-ab4f-4c21-a783-c62f81599895`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measure seed used for the declared area and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: crop-cycle seed divided by accepted grain mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_millet_field`
- Sources:
- Range: Provisional seeding-rate screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 30
  - Unit: kg/ha
  - Basis: broad establishment screen
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-millet-systems`

###### Agricultural nutrient and fertilizer inputs (`millet_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: crop-cycle nutrient inputs divided by accepted grain mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_millet_field`
- Sources:
- Range: Provisional total nutrient screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kg declared nutrients/ha
  - Basis: broad combined nutrient screen; preserve each nutrient basis
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-millet-systems`

###### Irrigation water delivered to field (`irrigation_water`)

Record delivered irrigation water when used; rainfall is not a technosphere input.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Measure delivered water and retain source and irrigated area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: crop-cycle irrigation divided by accepted grain mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_millet_field`
- Sources:
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3/ha
  - Basis: broad rainfed-to-irrigated screen
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-millet-systems`

###### Formulated crop-protection product (`crop_protection_product`)

Record each applied formulation as a separate physical identity with active ingredient and concentration.

- Selected flow: Formulated crop-protection product applied to millet
- Flow property / unit: Mass or volume / kg or L
- Binding:
- Amount rule: Measure each formulation separately; do not combine unlike products into one exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: crop-cycle application divided by accepted grain mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_millet_field`
- Sources:
- Range: Provisional crop-protection application screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg or L/ha
  - Basis: broad first-pass formulation application screen; preserve the selected physical unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-millet-systems`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct nitrous oxide to ambient air (`direct_n2o`)

Calculate managed-soil N2O from collected nitrogen inputs and the selected IPCC tier.

- Selected flow: Nitrous oxide to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply `calc_direct_n2o` and retain N2O-N to N2O conversion.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: crop-cycle emission divided by accepted grain mass
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_millet_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg N2O-N/kg N input
  - Basis: broad initial screen; selected method governs the value
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `ipcc-2019-managed-soils`

### Process: Harvest and farm-gate preparation (`millet_harvest_preparation`)

#### Inputs

##### Product flows

###### Diesel for harvest and loading (`harvest_diesel`)

Diesel combusted in agricultural machinery for harvesting and loading.

- Selected flow: Diesel `1bfff35f-7618-4c07-8bd3-d477eea72b73`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measure diesel issued to harvest and loading machinery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: harvest fuel divided by accepted grain mass
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_millet_harvest`
- Sources:
- Range: Provisional harvest-fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: L/ha
  - Basis: broad harvest-operation screen
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-millet-postharvest`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested millet grain at farm gate (`reference_millet_grain`)

Accepted grain at declared moisture, grade, and cleaning state is the quantitative reference.

- Selected flow: Millet, other `f3fc75e0-f49a-48fd-a12f-88246beb1d0a`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Sum accepted grain and normalize to 1 kg.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg accepted grain at declared moisture
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_millet_harvest`
- Sources:
- Range: Provisional yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 8
  - Unit: t/ha
  - Basis: broad crop-cycle yield screen
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-millet-systems`

###### Millet straw or stover removed for use (`millet_straw_product`)

Record removed stalks, stems, and leaves only when they leave for a documented product use.

- Selected flow: Millet straw or stover removed after grain harvest
- Flow property / unit: Mass / kg
- Binding:
- Amount rule: Measure mass, moisture, destination, and market status separately from chaff and grain.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: removed mass divided by accepted grain mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_millet_harvest`
- Sources: `fao-millet-systems`
- Range: Provisional removed-straw screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: t/ha
  - Basis: broad screen with moisture declared
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-millet-systems`

##### Waste flows

###### Chaff and broken panicles sent to treatment (`millet_chaff_waste`)

Record chaff and broken panicles only when they cross to a documented treatment destination.

- Selected flow: Millet chaff and broken panicles sent to treatment
- Flow property / unit: Mass / kg
- Binding:
- Amount rule: Measure mass, moisture, and destination separately from straw and accepted grain.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: waste mass divided by accepted grain mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_millet_harvest`
- Sources: `fao-millet-postharvest`
- Range: Provisional chaff screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference grain
  - Basis: broad threshing and cleaning loss screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-millet-postharvest`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Millet production | First avoid allocation by separately recording cultivation, harvest, residue handling, and treatment. | `iso-14044-2006` |
| `allocation_straw_product` | Grain and removed straw or stover | If straw or stover has a documented economic product function, allocate inseparable burdens using representative economic values and report a mass sensitivity. | `iso-14044-2006` |
| `allocation_residue_waste` | Chaff and broken panicles | Do not allocate product burdens to material without a documented product function; classify its physical identity and destination. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_millet_field` | `millet_cultivation` | Seed, nutrients, irrigation, and crop-protection products | Invoices, application logs, meters, and field records | field_id; cycle; species; area; product_identity; quantity; unit; composition; water | Reconcile purchases and stock to field applications and retain labels. | kg, L, m3, ha | Each application and cycle | Complete crop cycle | Each farm and field | Sum by physical identity and normalize by accepted grain. | Invoices, labels, meters, logs, and stock reconciliation |
| `cp_millet_emissions` | `millet_cultivation` | Managed-soil N2O | Field inputs and calculation record | nitrogen_sources; nitrogen_mass; residue_N; soil; climate; water_regime; factor_identity | Apply the accepted IPCC tier to each field or stratum. | kg N, kg N2O-N, kg N2O | Each crop cycle | Complete crop cycle | Each field or stratum | Calculate by stratum and aggregate by accepted grain. | Calculation workbook, factor identity, conversions, and review |
| `cp_millet_harvest` | `millet_harvest_preparation` | Harvest fuel, grain, straw or stover, and chaff | Machinery logs, scale tickets, moisture tests, and destination records | field_id; batch_id; area; fuel; grain_mass; moisture; straw_mass; chaff_mass; destinations | Reconcile outputs and fuel by field and batch. | kg, t, L, percent, ha | Each harvest and batch | Complete harvest period | Each farm and field | Aggregate by batch and normalize to accepted grain. | Scale checks, tickets, moisture tests, fuel logs, and receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Crop-cycle rows | normalized flow = crop-cycle quantity / accepted grain mass | quantity; accepted grain mass | Quantity per kg reference grain | `mass-balance-identity` |
| `calc_nutrient_mass` | Nutrients | nutrient mass = product mass × documented nutrient fraction | product mass; composition | kg nutrient | `mass-balance-identity` |
| `calc_direct_n2o` | Managed-soil N2O | Apply the selected IPCC tier and convert N2O-N to N2O by 44/28. | nitrogen inputs; factors; conditions | kg N2O | `ipcc-2019-managed-soils` |
| `calc_moisture_mass` | Grain and residues | dry mass = as-received mass × (1 − moisture fraction) | mass; measured moisture | dry and as-received mass | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference grain | Declare species or mix, non-seed purpose, state, grade, moisture, and fixed UUID. | Product, field, batch, and identity records |
| `dq_coverage` | Foreground | Cover a complete crop cycle and harvest and disclose missing data and averaging. | Dated field, input, and harvest records |
| `dq_completeness` | Inventory | Reconcile inputs, products, residues, and emissions and preserve identity evidence gaps as coverage gaps. | Protocol, mass-balance, and gap checks |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | Confirm the fixed UUID represents non-seed millet, amount is 1 kg mass, and required qualifiers are declared. | `unsd-cpc-3-millet` |
| `validation_binding` | Inventory flows | Accept only verified UUIDs as fixed and applicable existing Flow Sets as parameterized; all others remain unmapped. |  |
| `validation_protocols` | Collected and calculated rows | Confirm every collected or calculated-from-collection row references an existing protocol. |  |
| `validation_mass_balance` | Harvest | Reconcile grain, removed straw or stover, chaff and broken panicles, moisture changes, and losses. | `mass-balance-identity` |
| `validation_nitrogen` | Nutrients and N2O | Reconcile product records to nitrogen mass and verify factor tier, compartment, and conversion. | `ipcc-2019-managed-soils` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Crop-production dataset for non-seed millet grain at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Footprints and models requiring compatible millet grain at the declared farm-gate state |
| excluded_use | Seed millet, teff, processed millet, or substitution without compatible species, geography, moisture, and route |
| required_metadata | PCR and reference identity; species; geography; crop year; system; irrigation; area; yield; moisture; grade; preparation; residue fate; allocation; protocol coverage |
| required_quality_disclosure | Coverage, missing data, range exceedances, evidence gap bindings, factor tier, measurement quality, aggregation, and allocation sensitivity |
| update_trigger | Revised identity or classification, reviewed evidence, material route change, improved regional factors, or persistent range failure |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-millet` | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure, subclass 01182, https://unstats.un.org/unsd/classifications/econ | Product scope and identity validation |
| `fao-millet-postharvest` | official_guidance | FAO, Post-harvest Operations Compendium: Millet, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_MILLET.pdf | Harvest, threshing, preparation, and residue decomposition |
| `fao-millet-systems` | official_guidance | FAO, The World Sorghum and Millet Economies, https://www.fao.org/4/w1808e/w1808e00.htm | Production diversity and residue uses |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil N2O method |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | Boundary and allocation hierarchy |
| `mass-balance-identity` | method_factor | Physical mass-conservation identity with explicit moisture conversion | Mass, nutrient, and moisture reconciliation |
