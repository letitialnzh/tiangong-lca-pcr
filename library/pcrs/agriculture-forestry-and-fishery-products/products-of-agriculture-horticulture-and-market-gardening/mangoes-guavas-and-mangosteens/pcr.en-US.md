---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mangoes-guavas-and-mangosteens
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mangoes, guavas and mangosteens

## 1. Scope and Applicability

This PCR applies to the foreground production of fresh, whole mangoes, guavas, and mangosteens from orchard or comparable perennial field production through harvest and the declared farm-gate hand-off. The reference product is unprocessed fruit. The farm-gate boundary is the first declared hand-off from the producing farm after harvest and on-farm aggregation; it does not include washing, waxing, grading, cooling, packing, retail, consumer use, processing, or transport after the gate.

The data package shall identify the fruit species and cultivar or variety, orchard or field production system, geography, crop year, orchard age, rainfed or irrigated route, farm-gate location, marketable grade, and destination of culls and residues. Conventional, organic, mixed, and other production routes may be represented when their inputs and practices are disclosed separately.

This PCR excludes the production of planting material, upstream manufacture of purchased inputs, land transformation, postharvest conditioning, processed fruit products, and retail or consumer activities unless they are separately modelled outside this PCR. Establishment or replanting inputs may be included only when they are annualized over the declared productive life and the annualization basis is disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mangoes-guavas-and-mangosteens` |
| classification_refs | CPC 3.0 `01316` — Mangoes, guavas and mangosteens |
| covered_products | Fresh, whole mangoes; fresh, whole guavas; fresh, whole mangosteens delivered at the declared farm gate |
| excluded_products | Processed, dried, frozen, juiced, pureed, canned, or otherwise transformed fruit; planting material; retail-packed fruit; post-gate transport and use |
| representative_product | Fresh whole fruit of the declared species and grade at farm gate |
| production_route | Perennial orchard or comparable field production through cultivation, harvest, and on-farm aggregation |
| market_state | Fresh, unprocessed, whole fruit before washing, waxing, grading, cooling, or packing |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh, whole mangoes, guavas, or mangosteens leaving the declared farm gate |
| How much | 1,000 kg |
| How well | Declared species, cultivar or variety, marketable grade, maturity or harvest specification, and condition as received at the farm gate |
| How long or cycle | One declared crop year or harvest cycle; perennial establishment and replanting are annualized over the disclosed productive life when included |
| reference_flow_link | Semantic reference product |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh whole mango, guava, or mangosteen at farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar or variety; geography; orchard or field route; rainfed or irrigated; crop year; orchard age; harvest and marketable grade; farm-gate point; establishment annualization basis; cull and residue fate; direct-emission method; allocation basis for shared outputs |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | reference product and accepted fruit output | Mass | kg | Normalize the dataset to 1,000 kg of accepted fresh fruit at the declared farm gate. Retain the measured pre-normalization harvest quantity and grade basis. |
| `measurement_irrigation_volume` | irrigation water | Volume | m3 | Record metered or calculated water applied to the orchard separately from source withdrawal. Do not count rainfall as irrigation water. |
| `measurement_nutrient_basis` | fertilizer and soil-amendment total | Mass of product or declared nutrient | kg product; kg N; kg P2O5; kg K2O | Record the actual product name or formulation and the nutrient basis used for the amount. Do not infer a product amount from a nutrient amount without a declared analysis. |
| `measurement_area_time` | orchard land occupation | Area-time | ha*a | Record the occupied production area and crop-year duration. Annualize perennial establishment only through the declared productive-life basis and avoid double counting the same area. |
| `measurement_energy_fuel` | electricity and mobile machinery fuel | Energy or fuel mass | kWh, MJ, or kg | Retain the primary record unit and convert consistently when aggregating energy or fuel inputs. |
| `measurement_emission_substance` | direct elementary emissions | Mass of named substance | kg substance | Identify the emitted substance, receiving medium, calculation or measurement method, and whether the value is measured, calculated, or estimated. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Land and orchard are in the declared production state at the start of the crop year; annual operations begin with cultivation records, with proportional establishment or replanting added only when documented. |
| starting_condition_role | Foreground boundary anchor for a fresh fruit crop-year dataset |
| product_classification_scope | CPC 3.0 `01316`, limited to fresh, whole mangoes, guavas, and mangosteens at farm gate |
| recursive_input_rule | Same-category fruit is not recursively modelled as an input. Planting material is recorded only when it is an external purchased input or a disclosed establishment activity; fruit used within the farm system is covered by the declared starting condition. |
| upstream_dataset_requirement | Link upstream datasets for purchased planting material, fertilizer or soil amendments, crop-protection products, water supply, electricity, fuels, and other purchased inputs when used. The foreground record must retain the quantity, basis, geography, and supplier or source evidence. |
| disclosure | Declare the gate, field or orchard area, crop year, species and variety, orchard age, route, irrigation source, actual fertilizer or soil-amendment product and nutrient basis, crop protection, fuel and electricity, harvest yield, culls, residues, allocation, and direct-emission method. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_condition` | crop-year foreground system | Begin at the declared orchard production state and include proportional establishment or replanting only when the productive-life annualization basis is documented. | `iso-14044-2006`; `mass-balance-identity` |
| `boundary_farm_gate` | farm-gate product output | End at the first declared farm-gate hand-off after harvest and on-farm aggregation; exclude all activities after that point. | `iso-14044-2006`; `codex-fresh-tropical-fruit-standards` |
| `boundary_fresh_unprocessed_state` | product category | Keep the product fresh, whole, and unprocessed. Washing, waxing, grading, cooling, packing, and processing are outside this PCR. | `codex-fresh-tropical-fruit-standards` |
| `boundary_upstream_inputs` | purchased inputs | Represent purchased input supply as upstream links and collect only the foreground quantity, basis, and identity needed to connect them. | `iso-14044-2006` |
| `boundary_recursive_input` | same-category internal inputs | Do not recursively trace same-category fruit as an input; disclose the starting condition and any external planting-material input instead. | `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment` | Orchard establishment and replanting | conditional | Include when establishment, replacement, or replanting records are allocated to the declared crop year. | Perennial production establishment | Annualized per 1,000 kg reference product over the disclosed productive life |
| `orchard_cultivation` | Orchard cultivation and crop management | required | Always include in-scope cultivation for the declared crop year. | Foreground crop production | Per 1,000 kg accepted farm-gate fruit and per crop year |
| `harvest_and_farm_gate_aggregation` | Harvest and farm-gate aggregation | required | Always include harvest and the on-farm aggregation needed to reach the declared gate. | Harvest and gate preparation | Per 1,000 kg accepted farm-gate fruit |

### Process: Orchard establishment and replanting (`orchard_establishment`)

#### Inputs

##### Product flows

###### External planting material (`planting_material_input`)

External seedlings, grafted plants, or other planting material cross the boundary when they establish or replace orchard plants. Record the actual material identity and amount; do not infer it from fruit yield.

- Selected flow: External mango, guava, or mangosteen planting material
- Flow property / unit: Mass or item count / kg or item
- Amount rule: Actual purchased or produced-outside-farm planting material per planted area, annualized over the declared productive life
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-good-agricultural-practices`

- Range: Provisional establishment material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg planting material per 1,000 kg accepted fruit
  - Basis: annualized planting-material mass per reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`orchard_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-good-agricultural-practices`
- Range: Provisional establishment nutrient screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: kg declared nutrient basis per 1,000 kg accepted fruit
  - Basis: annualized establishment nutrient input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Record water applied to establish orchard plants when establishment irrigation crosses the foreground boundary. Keep application separate from the source withdrawal used to supply it.

- Selected flow: Irrigation water applied to orchard establishment
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or calculated establishment irrigation water, annualized over the declared productive life
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`

- Range: Provisional establishment irrigation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: m3 per 1,000 kg accepted fruit
  - Basis: annualized establishment irrigation water
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment mobile-machinery fuel (`establishment_mobile_fuel`)

Record fuel used by tractors, planting equipment, or other mobile machinery during establishment or replanting when the activity is included.

- Selected flow: Mobile machinery fuel supply
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Actual fuel or energy record for establishment operations, annualized over the declared productive life
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fuel_records`
- Sources: `fao-good-agricultural-practices`

- Range: Provisional establishment fuel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 800
  - Unit: MJ per 1,000 kg accepted fruit
  - Basis: annualized mobile-machinery fuel energy
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Establishment orchard land occupation (`establishment_land_occupation`)

Record the occupied orchard area and time for establishment or replanting only when it is part of the declared annualized boundary; do not add a second occupation claim for the same crop-year area.

- Selected flow: Agricultural land occupation for orchard establishment
- Flow property / unit: Area-time / ha*a
- Amount rule: Planted area multiplied by establishment time and annualized over the disclosed productive life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_area_and_soil_records`
- Sources: `mass-balance-identity`

- Range: Provisional establishment land-occupation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: ha*a per 1,000 kg accepted fruit
  - Basis: annualized planted area-time
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Orchard cultivation and crop management (`orchard_cultivation`)

#### Inputs

##### Product flows

###### Orchard irrigation water (`cultivation_irrigation_water`)

Record water delivered to the orchard for irrigation or fertigation during the crop year, excluding rainfall and keeping source withdrawal separate.

- Selected flow: Irrigation water applied to orchard cultivation
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or calculated irrigation water applied by field, source, and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`

- Range: Provisional cultivation irrigation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: m3 per 1,000 kg accepted fruit
  - Basis: crop-year irrigation water applied to the orchard
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`orchard_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-good-agricultural-practices`
- Range: Provisional cultivation nutrient screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg declared nutrient basis per 1,000 kg accepted fruit
  - Basis: crop-year fertilizer and soil-amendment nutrient basis
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product input (`cultivation_crop_protection_input`)

Record the actual crop-protection product or active-ingredient basis when it crosses the foreground boundary. The product identity, application rate, target, and application event must be retained even when no Flow Set group applies.

- Selected flow: Crop-protection product input
- Flow property / unit: Mass of product or active ingredient / kg product or kg active ingredient
- Amount rule: Actual product or active-ingredient amount by application event and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-good-agricultural-practices`

- Range: Provisional crop-protection input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg product per 1,000 kg accepted fruit
  - Basis: crop-year crop-protection product input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cultivation electricity (`cultivation_electricity_input`)

Record purchased electricity used for irrigation pumping, fertigation, monitoring, or other in-scope orchard operations during the crop year.

- Selected flow: Electricity supply for orchard cultivation
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered electricity or supplier-bill allocation to the declared orchard and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fuel_records`
- Sources: `fao-good-agricultural-practices`

- Range: Provisional cultivation electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kWh per 1,000 kg accepted fruit
  - Basis: crop-year orchard electricity use
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cultivation mobile-machinery fuel (`cultivation_mobile_fuel`)

Record fuel used by tractors, sprayers, mowers, and other mobile machinery for orchard operations.

- Selected flow: Mobile machinery fuel supply
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Actual fuel or energy record by operation and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fuel_records`
- Sources: `fao-good-agricultural-practices`

- Range: Provisional cultivation fuel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,500
  - Unit: MJ per 1,000 kg accepted fruit
  - Basis: crop-year mobile-machinery fuel energy
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Orchard land occupation (`cultivation_land_occupation`)

Record the orchard area-time occupied by the declared crop year. Land occupation is not land transformation; any land transformation study must be disclosed and modelled separately.

- Selected flow: Agricultural land occupation for orchard cultivation
- Flow property / unit: Area-time / ha*a
- Amount rule: Orchard area multiplied by the declared crop-year duration and allocated to accepted fruit output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_area_and_soil_records`
- Sources: `mass-balance-identity`

- Range: Provisional cultivation land-occupation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1
  - Unit: ha*a per 1,000 kg accepted fruit
  - Basis: crop-year occupied orchard area-time
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Orchard water-resource withdrawal (`cultivation_water_withdrawal`)

Record the water withdrawn from a natural or managed source to supply orchard irrigation. Reused or supplied water must be distinguished from the withdrawal event.

- Selected flow: Water resource withdrawal for orchard irrigation
- Flow property / unit: Volume / m3
- Amount rule: Measured or calculated withdrawal by source and crop year, reconciled to applied irrigation water and documented losses or storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`

- Range: Provisional water-withdrawal screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,500
  - Unit: m3 per 1,000 kg accepted fruit
  - Basis: crop-year water resource withdrawal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Outputs

##### Product flows

##### Waste flows

###### Removed orchard residues (`cultivation_residue_removed`)

Record prunings or other orchard residues only when they leave the foreground system or are transferred to a separately modelled destination. Residues left in place must be disclosed as a management practice and must not be double counted as a waste export.

- Selected flow: Orchard pruning or crop residue removed from the field
- Flow property / unit: Mass / kg wet or dry matter as recorded
- Amount rule: Measured or estimated mass removed from the declared orchard, with moisture basis and destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_and_loss_records`
- Sources: `fao-good-agricultural-practices`

- Range: Provisional removed-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg wet or dry matter per 1,000 kg accepted fruit
  - Basis: declared residue removal from orchard
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Elementary flows

###### Ammonia to air from orchard management (`cultivation_ammonia_emission`)

Record or calculate ammonia emissions to ambient air when the declared nutrient and emission method supports this pathway. The receiving medium and substance basis are required.

- Selected flow: Ammonia emission to air
- Flow property / unit: Mass of ammonia / kg NH3
- Amount rule: Measured or method-calculated ammonia loss from declared nutrient applications and management conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_and_loss_records`
- Sources: `ipcc-2019-managed-soils`

- Range: Provisional ammonia-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg NH3 per 1,000 kg accepted fruit
  - Basis: crop-year direct ammonia emission
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide to air from managed soils (`cultivation_nitrous_oxide_emission`)

Record or calculate direct and, where applicable, indirect nitrous oxide emissions from managed soils using the declared nutrient inputs, soil conditions, climate, and method tier.

- Selected flow: Nitrous oxide emission to air
- Flow property / unit: Mass of nitrous oxide / kg N2O
- Amount rule: Method-calculated or measured nitrous oxide emissions with emission-factor tier, nitrogen basis, and timing disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_and_loss_records`
- Sources: `ipcc-2019-managed-soils`

- Range: Provisional nitrous-oxide screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg N2O per 1,000 kg accepted fruit
  - Basis: crop-year managed-soil nitrous oxide emission
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate loss to water (`cultivation_nitrate_water_loss`)

Record or calculate nitrate loss to water only when the soil, drainage, receiving-medium, and loss method support that pathway; do not convert fertilizer application directly into nitrate loss without a declared method.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass of nitrate / kg nitrate
- Amount rule: Measured or method-calculated nitrate loss with soil, drainage, and receiving-water basis disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_and_loss_records`
- Sources: `ipcc-2019-managed-soils`

- Range: Provisional nitrate-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg nitrate per 1,000 kg accepted fruit
  - Basis: crop-year nitrate loss to water
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate loss to water (`cultivation_phosphate_water_loss`)

Record or calculate phosphate loss to water when erosion, runoff, drainage, and receiving-medium evidence support the pathway.

- Selected flow: Phosphate emission to water
- Flow property / unit: Mass of phosphate / kg phosphate
- Amount rule: Measured or method-calculated phosphate loss with soil, erosion, runoff, and receiving-water basis disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_and_loss_records`
- Sources: `ipcc-2019-managed-soils`

- Range: Provisional phosphate-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg phosphate per 1,000 kg accepted fruit
  - Basis: crop-year phosphate loss to water
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and farm-gate aggregation (`harvest_and_farm_gate_aggregation`)

#### Inputs

##### Product flows

###### Harvest mobile-machinery fuel (`harvest_mobile_fuel`)

Record fuel used for harvest machinery and on-farm movement required to reach the declared farm gate.

- Selected flow: Mobile machinery fuel supply
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Actual harvest and on-farm aggregation fuel or energy record by crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fuel_records`
- Sources: `fao-good-agricultural-practices`

- Range: Provisional harvest fuel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: MJ per 1,000 kg accepted fruit
  - Basis: harvest and on-farm aggregation fuel energy
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and farm-gate electricity (`harvest_electricity_input`)

Record electricity used for weighing, sorting needed only to establish the declared gate, or other on-farm aggregation equipment. Do not include pack-house or cooling energy.

- Selected flow: Electricity supply for harvest and farm-gate aggregation
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered electricity or documented allocation to the harvest and farm-gate aggregation activity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fuel_records`
- Sources: `fao-good-agricultural-practices`

- Range: Provisional farm-gate electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh per 1,000 kg accepted fruit
  - Basis: harvest and farm-gate aggregation electricity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh fruit at farm gate (`marketable_fresh_fruit`)

This is the accepted fresh whole fruit output used as the PCR reference product. Record the pre-normalization mass, species, variety, maturity or harvest specification, grade, and gate condition before scaling the dataset to 1,000 kg.

- Selected flow: Fresh whole mango, guava, or mangosteen at farm gate
- Flow property / unit: Mass / kg
- Amount rule: Accepted marketable fruit mass normalized to 1,000 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Sources: `mass-balance-identity`; `codex-fresh-tropical-fruit-standards`

- Range: Reference-output QA interval
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1,000
  - Upper: 1,000
  - Unit: kg accepted fruit per reference flow
  - Basis: declared PCR reference amount
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Harvest culls, rejects, and unmarketable fruit (`harvest_culls_and_rejects`)

Record fruit that is harvested or handled within the foreground system but does not enter the accepted farm-gate product output. State whether it is left in the field, composted, fed, sold to another use, or otherwise treated.

- Selected flow: Harvest culls, rejects, and unmarketable fruit
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Measured or calculated mass of culls and rejects by destination, reconciled with harvested and accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Sources: `mass-balance-identity`

- Range: Provisional cull and reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg wet fruit per 1,000 kg accepted fruit
  - Basis: harvested but non-accepted fruit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Combustion carbon dioxide from harvest operations (`harvest_carbon_dioxide_emission`)

Record or calculate carbon dioxide to air from fuel used in harvest and on-farm aggregation when the fuel record and emission method support the pathway. Biogenic and fossil carbon treatment must be disclosed.

- Selected flow: Carbon dioxide emission to air
- Flow property / unit: Mass of carbon dioxide / kg CO2
- Amount rule: Fuel-based or measured carbon-dioxide emission using the declared fuel identity, quantity, and factor method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_and_loss_records`
- Sources: `ipcc-2006-mobile-combustion`

- Range: Provisional harvest carbon-dioxide screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg CO2 per 1,000 kg accepted fruit
  - Basis: fuel-related carbon dioxide from harvest operations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_same_category_products` | mixed mango, guava, or mangosteen production and shared orchard operations | Allocate shared crop-year inputs and emissions among mangoes, guavas, and mangosteens by measured accepted fresh-fruit mass unless a documented physical relationship is more representative. Disclose the allocation denominator and each product quantity. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_shared_grade_outputs` | grades or destinations sharing the same harvest system | Keep all fresh fruit leaving the gate as separate declared grades or destinations when relevant. If a non-fresh product destination or another product category shares the system, allocate the shared foreground inventory by measured mass and disclose the destination split. | `iso-14044-2006` |
| `allocation_residues_and_culls` | residues, culls, and rejects | Do not allocate burdens to residues or culls that remain in the field or are discarded within the declared system unless they leave as a separately valued co-product. If sold or transferred as a co-product, record the mass and destination and apply the declared allocation basis consistently. | `mass-balance-identity` |

Primary reporting uses mass allocation because the reference product is fresh fruit measured at the farm gate. Economic allocation may be used only as a documented sensitivity scenario; it must not replace the primary mass-allocation result without a reasoned justification.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `orchard_establishment` | planting material and establishment operations | nursery invoices, planting maps, replanting logs | species; variety; plant count; planting area; material mass or count; planting date; replacement area; productive-life assumption | reconcile invoices and field maps to the declared orchard block | kg or item; ha; date | per establishment or replanting event | productive-life records supporting the crop year | orchard block | annualize eligible establishment records over the declared productive life and normalize to accepted fruit | invoice or nursery record plus field-map reconciliation |
| `cp_irrigation_records` | `orchard_establishment`; `orchard_cultivation` | irrigation application and source withdrawal | meter logs, pump records, water bills, irrigation schedule, source register | applied water; withdrawn water; source; field; date; reuse; storage; meter status | meter or water-balance calculation with source and field reconciliation | m3 | per irrigation event or monthly | full crop year and establishment period when applicable | field or orchard block | sum by source and activity; reconcile applied water to withdrawal, reuse, storage, and loss | meter calibration, source permit or bill, and reconciliation check |
| `cp_nutrient_records` | `orchard_establishment`; `orchard_cultivation` | fertilizer and soil-amendment total | purchase records, nutrient plan, soil test, application log | actual product; formulation; nutrient analysis; amount; date; method; field; organic or mineral basis | reconcile purchase and application records to the declared crop year | kg product; kg N; kg P2O5; kg K2O | per application event | full crop year and establishment period when applicable | field or orchard block | aggregate actual product and declared nutrient bases without double counting the same application | invoice, product label or certificate, and application record |
| `cp_crop_protection_records` | `orchard_cultivation` | crop-protection product input | purchase records, spray log, product label | product; active ingredient; concentration; amount; field; date; target; method | reconcile product records to application events and orchard area | kg product or active ingredient | per application event | full crop year | field or orchard block | sum by product and active-ingredient basis and preserve product identity | product label, application log, and operator record |
| `cp_energy_fuel_records` | `orchard_establishment`; `orchard_cultivation`; `harvest_and_farm_gate_aggregation` | electricity and mobile machinery fuel | utility bill, meter, fuel invoice, machine log, equipment record | energy or fuel amount; unit; equipment; operation; field; date; fuel type; allocation basis | meter, invoice, or equipment-log reconciliation | kWh, MJ, or kg | per event or monthly | full crop year and establishment period when applicable | orchard and farm-gate operations | allocate shared records by measured runtime, area, or fuel log and document the basis | invoice or meter plus equipment or operation log |
| `cp_field_area_and_soil_records` | `orchard_establishment`; `orchard_cultivation` | land occupation and soil context | field map, area register, lease or ownership record, soil record | area; crop-year duration; orchard age; productive life; soil or drainage descriptor; transformation status | verify field polygon or area record against crop-year production records | ha; year; soil descriptor | per crop year and establishment event | declared crop year and productive-life basis | orchard block | calculate area-time and prevent duplicate occupation across establishment and cultivation | field map, area record, and boundary declaration |
| `cp_emission_and_loss_records` | `orchard_cultivation`; `harvest_and_farm_gate_aggregation` | direct emissions, nutrient losses, residues, and fuel emissions | emission calculation, measurement, residue log, destination record | substance; medium; amount; factor or method; nutrient basis; fuel; residue mass; moisture; destination; uncertainty | measured value or documented method calculation linked to primary records | kg substance; kg residue; kg fuel; MJ | per event, crop year, or method interval | full crop year | orchard block and harvest operation | retain substance, receiving medium, method tier, and uncertainty; do not infer losses without a method | method reference, measurement or calculation sheet, and destination record |
| `cp_harvest_records` | `harvest_and_farm_gate_aggregation` | accepted fruit, culls, rejects, and gate condition | harvest ticket, weighbridge, grade sheet, field log | species; variety; date; field; harvested mass; accepted mass; culls; rejects; grade; maturity; destination; gate point | weigh or reconcile harvest lots and grade records before normalization | kg; date; grade | per harvest lot | full harvest season | field, orchard block, and farm gate | sum accepted output and non-accepted fractions and reconcile to harvested quantity | calibrated scale or weighbridge, grade record, and lot traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_establishment_annualization` | establishment and replanting inputs | Eligible establishment amount for the crop year = recorded establishment amount × (declared crop-year share of productive life); disclose the productive-life denominator and replacement treatment. | establishment records; productive-life assumption; replacement area | annualized establishment input per crop year | `mass-balance-identity`; `fao-good-agricultural-practices` |
| `calculation_reference_normalization` | all foreground rows | Normalized amount = crop-year amount ÷ accepted marketable fruit mass × 1,000 kg. Apply the same accepted-output denominator to inputs, emissions, culls, and residues. | crop-year amount; accepted fruit mass | amount per 1,000 kg accepted fruit | `mass-balance-identity` |
| `calculation_nutrient_basis` | fertilizer and soil-amendment total | Preserve actual product mass and calculate nutrient mass only from the declared formulation or analysis: nutrient mass = product mass × declared nutrient fraction. Do not add product mass and nutrient mass as if they were the same quantity. | product mass; declared nutrient fraction; application record | product and nutrient-basis totals | `fao-good-agricultural-practices`; `mass-balance-identity` |
| `calculation_irrigation_withdrawal_reconciliation` | irrigation water and source withdrawal | Reconcile applied irrigation = source withdrawal + reused or stored water − documented conveyance or application losses, with each term and measurement basis disclosed. | applied water; withdrawal; reuse; storage; losses | reconciled water inputs | `fao-crop-evapotranspiration-56`; `mass-balance-identity` |
| `calculation_managed_soil_emissions` | ammonia, nitrous oxide, nitrate, and phosphate rows | Use the declared measurement or method tier, nutrient basis, receiving medium, and site conditions. Report a zero only when the method and records support zero or non-applicability. | nutrient records; soil and drainage records; emission method; measurements | named-substance emissions by medium | `ipcc-2019-managed-soils` |
| `calculation_harvest_mass_reconciliation` | accepted fruit, culls, rejects, and residues | Harvested mass = accepted marketable fruit + culls and rejects + documented field or handling losses, with moisture basis and destination recorded. | harvest tickets; grade sheets; cull and loss records | reconciled output and loss totals | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | reference flow and all semantic rows | Declare species, variety, field or orchard, gate, product state, and Flow Set resolution or identity evidence gap status. | lot traceability, field map, manifest review metadata |
| `quality_quantity` | all measured or calculated amounts | Prefer calibrated meters, scales, invoices, application records, and calculation sheets. Retain units, conversions, and uncertainty or estimation flags. | primary records and conversion worksheet |
| `quality_temporal_coverage` | crop-year and establishment data | Cover the complete declared crop year and identify missing harvest, irrigation, input, or establishment periods. | crop calendar, harvest log, and completeness checklist |
| `quality_completeness` | inputs, outputs, residues, and culls | Reconcile purchased inputs, applied inputs, accepted product, culls, rejects, residues, and losses; explain exclusions and zeros. | mass-balance check and destination records |
| `quality_emissions` | direct elementary flows | Disclose the emission substance, receiving medium, factor or method tier, nutrient or fuel basis, and whether the result is measured, calculated, or estimated. | emission calculation or measurement record |
| `quality_boundary` | dataset metadata | Preserve the farm-gate point, fresh unprocessed product state, upstream input links, allocation basis, and post-gate exclusions. | boundary declaration and dataset metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_definition` | reference flow | Confirm the 1,000 kg functional unit, all required qualifiers, and the evidence gap reference product qualifiers before generating a foreground dataset. | `mass-balance-identity`; `codex-fresh-tropical-fruit-standards` |
| `validation_flow_set_binding` | parameterized product inputs | Resolve each parameterized row during dataset generation using the cited Flow Set id, version, group, structural coordinate, property, unit, geography, and intended-use evidence; a Flow Set is not a final UUID. |  |
| `validation_mass_reconciliation` | harvest and farm-gate aggregation | Check accepted fruit, culls, rejects, residues, field losses, and handling losses against harvested mass, with grade, moisture, and destination treatment explicit. | `mass-balance-identity` |
| `validation_crop_year_completeness` | all required processes | Verify that cultivation, harvest, and gate records cover the declared crop year and that conditional establishment is either documented or explicitly excluded. | `fao-good-agricultural-practices` |
| `validation_boundary_and_state` | dataset scope | Reject datasets that include post-gate washing, waxing, grading, cooling, packing, processing, retail, or post-gate transport, or that omit the declared farm-gate point. | `iso-14044-2006`; `codex-fresh-tropical-fruit-standards` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground primary dataset for fresh, whole mangoes, guavas, and mangosteens at the declared farm gate; usable downstream as `secondary_dataset` after review |
| downstream_use | Build process and lifecycle-model foreground inventories for fresh tropical fruit while preserving crop-year, species, route, gate, grade, and input-basis qualifiers |
| allowed_use | Product-category studies that preserve the declared orchard or field route, crop year, farm-gate state, accepted-output denominator, input records, emission method, and mass reconciliation |
| excluded_use | Processed fruit, planting-material production, retail or consumer stages, post-gate transport, undisclosed protected infrastructure, or crops with materially different product and gate conditions |
| required_metadata | PCR id and version; species and variety; geography; orchard age; crop year; route; farm-gate point; yield and grade; irrigation source; actual fertilizer or soil-amendment product and nutrient basis; crop protection; fuel and electricity; cull and residue fates; allocation; emission method; reference product qualifiers |
| required_quality_disclosure | Measurement sources, missing or estimated fields, crop-year completeness, establishment annualization, allocation basis, mass-balance result, emission method and tier, Flow Set resolutions, and identity evidence gap findings |
| update_trigger | New orchard or protected-production route, material change in gate conditioning or product state, revised emission method, new product qualifier, or evidence that alters collection, allocation, or validation rules |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-evapotranspiration-56` | official_guidance | Allen, Pereira, Raes and Smith, FAO Irrigation and drainage paper 56, *Crop evapotranspiration* (1998), https://www.fao.org/4/X0490E/X0490E00.htm | Irrigation records, water-balance context, and crop-water measurement protocol |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | Managed-soil and nutrient-loss emission methods |
| `ipcc-2006-mobile-combustion` | official_guidance | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2 Energy, Chapter 3 Mobile Combustion, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | Fuel-related carbon-dioxide calculation for mobile machinery |
| `codex-fresh-tropical-fruit-standards` | standard | Codex Alimentarius standards CXS 184-1993 (mangoes), CXS 215-1999 (guavas), and CXS 246-2005 (mangosteens) | Fresh whole product state, quality and marketable-condition qualifiers |
| `fao-good-agricultural-practices` | extension_guidance | FAO good agricultural practice guidance for orchard establishment, crop management, input records, harvest, and traceability | Process decomposition, collection protocols, input and harvest record requirements |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, https://www.iso.org/standard/38498.html | Boundary, allocation, documentation, and validation principles |
| `mass-balance-identity` | method_factor | PCR method identity for reference-flow normalization, annualization, and harvest-output reconciliation | Reference-flow scaling, establishment annualization, nutrient-basis separation, and mass reconciliation |
