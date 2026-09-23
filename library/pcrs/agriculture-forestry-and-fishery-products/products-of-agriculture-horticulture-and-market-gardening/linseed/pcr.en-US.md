---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.linseed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Linseed

## 1. Scope and Applicability

This rule describes one crop cycle of annual flax grown for harvested linseed at the farm gate. Its usable fixed reference is unprocessed oilseed grain, so this material PCR is narrower than the full CPC 01441 leaf. A separately declared planting-seed grade may share the field and harvest route, but requires additional seed-lot cleaning, purity and germination evidence, a distinct product-flow identity and a separate gate hand-off. It covers field preparation, sowing, crop care, harvest, first cleaning and sorting, and any aeration or drying required before hand-off. Direct combining and swathing followed by combining are alternate harvest routes. A lot may leave without powered drying when its measured moisture already meets the declared sale or storage condition. Oil extraction, flax fibre processing, or later industrial storage and transport are outside scope. A flax straw sale is a separate actual co-product, not an assumed output. [manitoba-flax-management] [cfia-common-seed]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.linseed` |
| classification_refs | CPC 3.0 `01441` Linseed; `narrower` material reference while generic planting-seed output identity remains unresolved |
| covered_products | Unprocessed harvested linseed or solin oilseed grain at farm gate. Planting-seed production is described as a conditional branch, but is unavailable as a validated reference until its own output flow is verified. |
| excluded_products | Pressed linseed oil and cake; processed flax fibre or textiles; a straw-only crop system |
| representative_product | Bulk cleaned linseed grain from an annual flax crop |
| production_route | Parent `module.activity.managed-biological-production`: annual field cultivation. Harvest technology is direct combine or swath then combine; the latter adds a swathing pass and time in swath. The routes are mutually exclusive for a field portion and can coexist across separately indexed fields. Parent `module.activity.primary-conditioning-node`: initial cleaning; sorting is a separate quality-state hand-off. Conditional aeration or drying adds electricity or fuel and moisture-loss accounting. A planting-seed lot adds seed-grade cleaning, purity/germination testing and separate identity at gate. These technology deltas require field, equipment, and lot records. [manitoba-flax-management] [cfia-common-seed] |
| market_state | Unprocessed oilseed grain with actual moisture, grade, variety or solin designation and farm-gate hand-off declared; planting-seed lots must use a separately verified reference flow. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Farm-gate unprocessed harvested linseed grain |
| How much | 1 kg net accepted grain |
| How well | For the oilseed reference, declare variety/solin status, measured wet-basis moisture, impurity grade, and whether cleaning and drying occurred; do not substitute a fixed 10% moisture mass for actual delivered mass. A planting-seed output needs a separate reference and verified seed-lot identity. [manitoba-flax-management] [cfia-common-seed] |
| How long or cycle | One documented annual crop cycle and its resulting grain lots |
| reference_flow_link | Net accepted output of `linseed_grading`; reconcile to harvested grain and any downgrade or reject |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | flax variety or solin designation; crop year and region; farm and field scope; measured wet-basis moisture; impurity or downgrade grade; oilseed market use; direct-combine or swath route; conditioning performed; farm-gate hand-off |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `linseed_net_mass` | Reference and intermediate grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record measured wet mass at each hand-off; deduct tare and segregated impurities. |
| `linseed_moisture` | Grain before/after conditioning | moisture fraction, wet basis | % | Record measured lot moisture and measurement method; if masses are compared across moisture states, convert with dry-matter conservation and disclose shrink and non-water losses. |
| `area_normalization` | Field inputs and emissions | area | ha | Convert field totals to kg accepted grain with harvested area and reconciled lot mass; never use a regional default yield as a measured foreground yield. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural field at the start of the flax crop cycle, with previous crop and residue condition disclosed |
| starting_condition_role | The field is a receiving context; purchased seed, fertilizers, chemicals, energy, and water enter as product inputs with their upstream burdens. |
| product_classification_scope | Harvested oilseed linseed grain at farm gate; a qualified planting-seed lot requires a separate verified output flow and cannot use the fixed grain reference. Later oil or fibre conversion is excluded. |
| recursive_input_rule | Purchased or retained linseed used for sowing is an input to this crop cycle, not a zero-burden copy of the output; identify its distinct sowing-seed or grain source and prevent self-reference. |
| upstream_dataset_requirement | Link external inputs to representative upstream datasets with geography and time; separately report direct field emissions and land or residue assumptions. |
| disclosure | Disclose preceding crop, soil and irrigation context, tillage and harvest route, field area, crop year, actual grade/moisture, straw disposition, conditioning and any co-product allocation. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_gate` | Crop cycle | Include seeding through field management and harvest, plus on-farm first cleaning, sorting and required stabilization until the declared farm-gate lot is handed over. Include distinct seed-grade conditioning and testing when a planting-seed lot is sold. Exclude oil crushing, fibre processing and post-gate transport. | `manitoba-flax-management`, `cfia-common-seed` |
| `boundary_route` | Harvest | Assign either direct combine or swath-and-combine to each field portion; log desiccation if applied after physiological maturity. Do not charge both harvest alternatives to the same grain. | `manitoba-flax-management` |
| `boundary_straw` | Harvested biomass | Record straw left, removed for sale, or burnt and the associated operations and field-emission treatment; never assume a sale from the mere presence of straw. | `manitoba-flax-management`, `ipcc-2019-managed-soils` |
| `boundary_conditioning` | Grain | Include drying or aeration only if performed; identify pre- and post-intervention moisture, energy, and lot hand-off. Manitoba guidance distinguishes combining at about 10% moisture from safer long storage near 8–9%; use measured lot requirements, not a universal target. | `manitoba-growing-flax` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `flax_cultivation` | Managed annual flax cultivation | `required` | Each crop field | Prepared standing flax crop; managed inputs and field exchanges | Field and crop cycle |
| `flax_harvest` | Swath or direct combine and thresh | `required` | One route per field portion | Separates grain from standing crop; straw and field loss recorded | Field harvest run |
| `linseed_cleaning` | First grain cleaning | `required` | Record zero treatment when delivered directly as combine-cleaned grain | Separates chaff and foreign matter from raw harvested grain | Incoming grain lot |
| `linseed_stabilization` | Aeration or drying | `conditional` | Performed to reach declared usable moisture | Converts damp grain to stable grain; moisture and energy accounted | Conditioning lot |
| `linseed_grading` | Lot grading and gate hand-off | `required` | Every delivered lot | Separates accepted, downgraded, rejected and waste states | Gate lot |
| `linseed_seed_grade` | Planting-seed lot conditioning and gate hand-off | `conditional` | A lot is sold for sowing | Additional seed-lot cleaning, testing and distinct hand-off | Seed lot |

Cultivation is a field-period operation. Harvest is separately indexed by field and machine run because swathing, combining, losses and fuel are observed at that hand-off. Cleaning, conditioning and grading are lot or batch operations. For shared equipment, meter or apportion changeover, cleaning and idle energy by documented run time or handled mass once, and reconcile field-to-lot links. [manitoba-flax-management]

### Process: Managed annual flax cultivation (`flax_cultivation`)

#### Inputs

##### Product flows

###### Sowing material (`linseed_sowing_input`)

Purchased or retained flax seed enters the field; identify its source separately from the output grain.

- Selected flow: Flax sowing seed, identity to be resolved for the actual purchased material
- Flow property / unit: Mass / kg
- Amount rule: recorded sowing mass for the field and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `manitoba-flax-management`
- Range: Source-backed flax seeding interval
  - Range role: Typical range (`typical_range`)
  - Lower: 39
  - Upper: 63
  - Unit: kg/ha
  - Basis: 35–56 lb/acre flax seeding rate converted to kilograms per hectare; Manitoba conditions
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `manitoba-growing-flax`

###### Agricultural nutrient and fertilizer inputs (`flax_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `manitoba-flax-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg/ha
  - Basis: separately recorded fertilizer or manure product mass per cultivated hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Applied crop-care product (`linseed_crop_protection`)

Record each actual herbicide, fungicide or insecticide separately, with active ingredient and field; absent application is zero. [manitoba-flax-management]

- Selected flow: Actual crop-protection product, one product per inventory instance; identity pending application record
- Flow property / unit: Mass / kg
- Amount rule: recorded product mass per field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `manitoba-flax-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/ha
  - Basis: separately recorded crop-care formulation mass per cultivated hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machine fuel (`linseed_field_fuel`)

Record diesel or another actual fuel consumed by field preparation, sowing and management equipment.

- Selected flow: Actual mobile machinery fuel product, identity pending equipment record
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: metered or documented field fuel energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/ha
  - Basis: field-machine fuel energy per cultivated hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field electricity (`linseed_field_electricity`)

Record electricity used by pumps or other field management equipment separately from fuel.

- Selected flow: Electricity product, identity pending meter record
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered field electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh/ha
  - Basis: field electricity per cultivated hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delivered irrigation water (`linseed_irrigation_water`)

Record delivered water as a product input only where supplied across the process boundary; direct environmental withdrawal is separate.

- Selected flow: Irrigation water product, identity pending supply record
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered delivered irrigation water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha
  - Basis: irrigation delivered per cultivated hectare; conditional route; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No inherent waste input is required; record imported organic amendments as product inputs with their actual identity.

##### Elementary flows

###### Irrigation water withdrawal (`linseed_water_withdrawal`)

Where irrigation withdraws from the environment within the foreground boundary, record the source and volume separately from delivered water product purchases.

- Selected flow: Water withdrawal from environment, compartment and identity pending site records
- Flow property / unit: Volume / m3
- Amount rule: metered withdrawal when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha
  - Basis: water withdrawn per cultivated hectare; conditional route and separately reconciled with delivery; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

The managed standing crop is an internal field state handed to `flax_harvest`, indexed by `cp_field_area`; it is not a separate product exchange or sale.

##### Waste flows

No field residue is declared waste by default; residue fate is resolved at harvest.

##### Elementary flows

###### Managed-soil nitrogen emissions (`linseed_soil_n2o`)

Calculate direct and indirect N2O from recorded fertilizer, manure and returned crop-residue N with the selected region-specific method or IPCC 2019 method, avoiding duplicate residue N. [ipcc-2019-managed-soils]

- Selected flow: Nitrous oxide to air, elementary identity pending method/compartment binding
- Flow property / unit: Mass / kg N2O
- Amount rule: `calc_soil_n2o`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_soil_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha
  - Basis: calculated managed-soil N2O per cultivated hectare; retain factor-method audit; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Swath or direct combine and thresh (`flax_harvest`)

#### Inputs

##### Product flows

The harvest node receives that documented standing field state and area. It is not charged as an additional purchased product.

###### Harvest machine fuel (`linseed_harvest_fuel`)

Record fuel for combine and, if selected, swathing passes by field run. [manitoba-flax-management]

- Selected flow: Actual mobile machinery fuel product for harvesting, identity pending run record
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: recorded fuel use per harvest run
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: harvest run
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `manitoba-flax-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/ha
  - Basis: harvest fuel energy per harvested hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preharvest desiccant (`linseed_desiccant`)

Record only an actual desiccant application after physiological maturity; it is not a compulsory harvest input. [manitoba-flax-management]

- Selected flow: Actual desiccant product, identity pending application record
- Flow property / unit: Mass / kg
- Amount rule: recorded application mass per field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: harvest run
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `manitoba-flax-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/ha
  - Basis: preharvest desiccant formulation per treated hectare; conditional route; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is intrinsic to harvesting.

##### Elementary flows

No additional field withdrawal is prescribed beyond documented irrigation or fuel supply.

#### Outputs

##### Product flows

###### Raw harvested linseed grain (`linseed_raw_grain`)

Threshed grain passes to first cleaning, with measured wet mass and moisture; seed coat damage and field loss are recorded. [manitoba-flax-management]

- Selected flow: Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- Flow property / unit: Mass / kg
- Amount rule: measured combine grain mass, corrected for tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: harvest run
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg/ha
  - Basis: raw harvested linseed grain per harvested hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Removed flax straw for sale (`linseed_sold_straw`)

Only a measured and actually sold straw lot is an intended co-product; record its mass and customer hand-off. Otherwise classify field-retained, burnt or discarded straw by actual fate. [manitoba-flax-management]

- Selected flow: Flax straw, identity pending actual sale specification
- Flow property / unit: Mass / kg
- Amount rule: measured sold mass, zero absent sale
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: harvest run
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_straw_fate`
- Sources: `manitoba-flax-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg dry/ha
  - Basis: dry removed straw sold per harvested hectare; zero without sale; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unusable removed straw (`linseed_straw_waste`)

Record only straw removed for disposal without a product use; field-retained biomass is a residue, not this waste flow.

- Selected flow: Flax straw to disposal, identity pending local route
- Flow property / unit: Mass / kg
- Amount rule: measured removed disposal mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: harvest run
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_straw_fate`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg dry/ha
  - Basis: dry removed straw discarded per harvested hectare; exclude field-retained residue; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Field-retained and burnt straw are residue dispositions, not elementary product flows. Their nitrogen and actual combustion emissions are calculated under `cp_straw_fate` and `calc_soil_n2o`, without double counting. [ipcc-2019-managed-soils]

### Process: First grain cleaning (`linseed_cleaning`)

#### Inputs

##### Product flows

###### Raw harvested grain to cleaning (`linseed_cleaning_input`)

Link the weighed raw grain lot from harvest to this cleaning node.

- Selected flow: Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- Flow property / unit: Mass / kg
- Amount rule: measured incoming raw grain mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: incoming grain lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference grain
  - Basis: raw grain entering cleaning per kilogram accepted oilseed reference; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning electricity (`linseed_cleaning_electricity`)

Meter electricity for an actual powered cleaning pass; zero if combine-cleaned grain is delivered without another pass.

- Selected flow: Electricity product, identity pending meter record
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered cleaner electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: incoming grain lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg raw grain
  - Basis: cleaning electricity per kilogram raw grain treated; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No inherent waste input.

##### Elementary flows

No inherent direct elementary input; energy upstream follows the electricity or fuel product.

#### Outputs

##### Product flows

###### First-cleaned grain (`linseed_cleaned_grain`)

Cleaned grain passes to moisture stabilization if needed and then grading. [manitoba-flax-management]

- Selected flow: Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- Flow property / unit: Mass / kg
- Amount rule: measured cleaned grain mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: cleaning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry/kg dry raw grain
  - Basis: first-cleaned dry grain per kilogram dry raw grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Waste flows

###### Removed foreign matter (`linseed_cleaning_reject`)

Weed seed, chaff and debris removed by cleaning leave as waste unless a documented product destination exists; do not count as accepted grain. [manitoba-flax-management]

- Selected flow: Cleaning reject, identity pending measured composition and destination
- Flow property / unit: Mass / kg
- Amount rule: incoming wet mass minus cleaned wet mass, adjusted for moisture or measured directly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: cleaning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Sources: `manitoba-flax-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry/kg dry raw grain
  - Basis: removed dry matter per kilogram dry raw grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Elementary flows

No direct emissions assumed from a mechanical cleaner; document any on-site engine exhaust under the actual fuel route.

### Process: Aeration or drying (`linseed_stabilization`)

#### Inputs

##### Product flows

###### Cleaned damp grain (`linseed_damp_grain`)

A measured damp lot enters only when aeration or drying is performed; otherwise bypass this node.

- Selected flow: Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- Flow property / unit: Mass / kg
- Amount rule: measured incoming wet mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference grain
  - Basis: damp grain entering stabilization per kilogram accepted oilseed reference; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Aeration or dryer electricity (`linseed_drying_electricity`)

Record actual fan and dryer electricity by conditioning lot. [manitoba-growing-flax]

- Selected flow: Electricity product, identity pending meter record
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered lot electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `manitoba-growing-flax`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg damp grain
  - Basis: aeration or drying electricity per kilogram damp grain treated; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dryer fuel (`linseed_drying_fuel`)

Record actual dryer fuel by carrier and lot if a fuelled dryer is used. [manitoba-growing-flax]

- Selected flow: Actual stationary combustion fuel product for the dryer, identity pending equipment record
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: recorded lot fuel energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `manitoba-growing-flax`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg damp grain
  - Basis: dryer fuel energy per kilogram damp grain treated; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input intrinsic to moisture stabilization.

##### Elementary flows

No direct resource input presumed; combustion emissions follow recorded on-site fuel and selected emission method.

#### Outputs

##### Product flows

###### Stabilized grain (`linseed_stable_grain`)

The grain exits at measured moisture for the declared hand-off; cooling and temporary on-farm holding associated with this operation are recorded. [manitoba-growing-flax]

- Selected flow: Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- Flow property / unit: Mass / kg
- Amount rule: measured post-intervention wet mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry/kg dry damp grain
  - Basis: stabilized dry grain per kilogram incoming dry grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Waste flows

###### Spoiled or spilled conditioning reject (`linseed_conditioning_reject`)

Any unusable grain is segregated and routed to a documented disposal or recovery pathway, not retained in accepted yield.

- Selected flow: Linseed grain reject, identity pending actual route
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg conditioning input
  - Basis: spoiled or spilled grain per kilogram conditioning input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Elementary flows

###### Evaporated moisture (`linseed_evaporated_water`)

Calculate water removed from measured before and after mass/moisture, separate from dry-grain or spill losses.

- Selected flow: Water vapour, elementary identity pending local flow convention
- Flow property / unit: Mass / kg
- Amount rule: `calc_moisture_balance`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg damp grain
  - Basis: evaporated water per kilogram incoming damp grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

### Process: Lot grading and gate hand-off (`linseed_grading`)

#### Inputs

##### Product flows

###### Grain to grading (`linseed_grading_input`)

The measured cleaned and, if needed, stabilized lot enters grading; do not re-count its upstream intermediate as an external purchase.

- Selected flow: Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- Flow property / unit: Mass / kg
- Amount rule: measured grading input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: grading lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference grain
  - Basis: grain entering grading per kilogram accepted oilseed reference; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No inherent waste input.

##### Elementary flows

No inherent direct resource withdrawal.

#### Outputs

##### Product flows

###### Accepted farm-gate linseed (`linseed_accepted`)

This is the sole reference output of accepted unprocessed grain at the declared grade, moisture and sale gate.

- Selected flow: Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- Flow property / unit: Mass / kg
- Amount rule: net weighed mass accepted at gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: gate lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Reference-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference grain
  - Basis: accepted grain is the declared 1 kg oilseed reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

###### Downgraded sale grain (`linseed_downgraded`)

Grain sold at a lower grade remains an intended product only if there is a measured separate sale and destination; declare its grade and prevent it entering accepted reference mass. [manitoba-flax-management]

- Selected flow: Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- Flow property / unit: Mass / kg
- Amount rule: separately weighed sold downgraded mass, zero absent sale
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: gate lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `manitoba-flax-management`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading input
  - Basis: downgraded sold grain per kilogram grading input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Waste flows

###### Rejected unsaleable grain (`linseed_grade_reject`)

Declare re-cleaning return, recovery destination or disposal. A returned lot links back to `linseed_cleaning` once; its rejected pass is not an additional accepted output.

- Selected flow: Unsaleable linseed reject, identity pending actual destination
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass and each re-cleaning loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: gate lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading input
  - Basis: unsaleable grain per kilogram grading input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Elementary flows

No direct emission is prescribed by grading; record actual equipment fuel or power in its run.

### Process: Planting-seed lot conditioning and gate hand-off (`linseed_seed_grade`)

#### Inputs

##### Product flows

###### Grain diverted for sowing-seed qualification (`linseed_seed_grade_input`)

A separately identified harvested lot enters additional seed-grade cleaning and purity/germination testing. Keep its mass out of oilseed accepted and downgraded outputs. [cfia-common-seed]

- Selected flow: Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f` as incoming unqualified grain
- Flow property / unit: Mass / kg
- Amount rule: weighed diverted lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: seed lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_grade`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg harvested grain
  - Basis: grain diverted to conditional seed-grade route per kilogram harvested grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

###### Seed-grade cleaner energy (`linseed_seed_cleaning_energy`)

Record energy for additional seed-grade cleaning by lot. [cfia-common-seed]

- Selected flow: Actual electricity or fuel energy carrier, one carrier per inventory instance; identity pending meter record
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: recorded cleaner energy by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: seed lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_grade`
- Sources: `cfia-common-seed`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg seed-grade input
  - Basis: seed-cleaner energy per kilogram seed-grade input after electricity and fuel conversion; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Seed treatment product (`linseed_seed_treatment`)

Record treatment material only when applied to the seed lot. [cfia-common-seed]

- Selected flow: Actual seed treatment product, identity pending treatment record
- Flow property / unit: Mass / kg
- Amount rule: recorded product mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: seed lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_grade`
- Sources: `cfia-common-seed`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg treated seed
  - Basis: seed treatment formulation per kilogram treated seed; conditional route; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Seed purity and germination test service (`linseed_seed_testing`)

Record tests used to determine the sale grade, including sampling and laboratory service. [cfia-common-seed]

- Selected flow: Seed testing service, identity pending supplier record
- Flow property / unit: Service / test
- Amount rule: recorded number of tests by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: seed lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_grade`
- Sources: `cfia-common-seed`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: tests/lot
  - Basis: purity and germination tests per declared seed-grade lot; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No inherent waste input.

##### Elementary flows

No inherent direct elementary input.

#### Outputs

##### Product flows

###### Qualified planting-seed linseed (`linseed_planting_seed`)

Only a lot with documented intended sowing use, purity and germination result, seed-grade decision and distinct sale hand-off is a planting-seed product. Its platform UUID must be confirmed before this branch is used as a reference. [cfia-common-seed]

- Selected flow: Linseed for sowing; distinct platform flow UUID pending confirmation
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted seed-grade mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: seed lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_grade`
- Sources: `cfia-common-seed`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg seed-grade input
  - Basis: qualified seed per kilogram grain entering seed-grade route; output UUID unresolved
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

###### Non-qualifying grain sold as oilseed (`linseed_seed_downgrade`)

If it fails seed grade but remains salable as oilseed, route it once to the oilseed grading hand-off with its own grade and mass. [cfia-common-seed]

- Selected flow: Linseed `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- Flow property / unit: Mass / kg
- Amount rule: weighed downgraded grain
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: seed lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_grade`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg seed-grade input
  - Basis: non-qualifying grain sold as oilseed per kilogram seed-grade input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Waste flows

###### Seed cleaning rejects (`linseed_seed_reject`)

Record removed foreign material or unsalable seed to a documented recovery or disposal destination, excluding it from both accepted outputs.

- Selected flow: Seed cleaning reject, identity pending composition and destination
- Flow property / unit: Mass / kg
- Amount rule: weighed reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: seed lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_grade`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg seed-grade input
  - Basis: seed cleaning rejects per kilogram seed-grade input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Elementary flows

No direct emission prescribed; use actual equipment energy route.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_grain` | Grain and straw | First document whether sold straw or separately sold downgraded grain exists. Retained straw and field losses are residues, not co-products. Keep accepted and downgraded grain masses distinct. | `manitoba-flax-management` |
| `allocation_biophysical` | Multiple sold outputs | Where a process has independent sold grain and straw, first divide separable collection, baling and handling directly. For inseparable field and harvest burdens, use a documented physically causal relationship if one is justified; otherwise use a crop-year revenue share based on actual gate prices and masses, report the shares, and test sensitivity to a mass share. Do not allocate residue returned to soil as a sold output. | `manitoba-flax-management`, `eu-pef-allocation` |
| `allocation_batch` | Shared runs | Index field portions, harvest runs and conditioning lots. Attribute common cleaning, dryer startup and changeover energy once using measured run time or throughput; reconcile totals before allocating to accepted, downgraded and rejected outputs. | `manitoba-growing-flax` |
| `allocation_rework` | Re-cleaned or downgraded grain | Re-cleaning adds its actual energy and losses to the linked lot; do not create extra primary grain production. Recovered sale grain is counted once at its final hand-off and discarded reject carries no product credit. | `manitoba-flax-management` |
| `allocation_seed` | Seed and oilseed outputs | Assign additional seed-grade cleaning, treatment and tests directly to seed lots. Share inseparable cultivation and harvest burdens only between the final sold seed, oilseed and straw outputs under the declared joint-burden method; a downgraded seed lot becomes oilseed only at its final hand-off. | `cfia-common-seed` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_area` | `flax_cultivation` | field and crop | field log | field id, crop year, variety, preceding crop, sown and harvested area, soil, irrigation | farm field records and GIS | ha | each crop cycle | full crop cycle | each field | sum only non-overlapping harvested area | field map, planting record |
| `cp_field_inputs` | `flax_cultivation` | seed, nutrients, chemicals, fuel, water | purchase and operation logs | material identity, quantity, nutrient or active content, application date, field, machine fuel, water source | invoices, application and meter logs | kg, L, kWh, m3 | each application | full crop cycle | each field | sum by material and field, then reconcile inventory | invoices, calibrations |
| `cp_soil_emissions` | `flax_cultivation` | managed-soil emissions | field and method record | N inputs, manure N, residue mass and N, soil, climate, emission method and factors | field logs and stated method | kg N, kg N2O | each crop cycle | full crop cycle | each field | apply selected method once per N pool | factor version, calculations |
| `cp_harvest` | `flax_harvest` | grain, route, fuel, field loss | harvest log | field id, run id, direct or swath route, area, wet grain mass, moisture, fuel, desiccant, estimated losses | weighbridge, combine and operation logs | ha, kg, %, L | each run | harvest season | each field/run | link non-overlapping portions to lots | tickets, machine logs |
| `cp_straw_fate` | `flax_harvest` | straw and residues | residue and sales log | straw mass, dry matter, sale ticket, field retention, burn or disposal, baling fuel | weighbridge, field log and invoice | kg dry matter, L | each field/run | harvest season | each field | reconcile harvested, removed and retained fractions | buyer ticket, field photos |
| `cp_conditioning` | `linseed_cleaning` | cleaning and stabilization | lot operation log | lot id, before and after mass and moisture, debris, spoilage, power and fuel, run time | weighbridge, moisture meter, equipment meter | kg, %, kWh, L | each lot and run | harvest-to-gate interval | each lot | link passes without duplicating mass or energy | scale and meter calibration |
| `cp_grading` | `linseed_grading` | accepted, downgraded, rejected | gate and grade tickets | lot id, net mass, grade, moisture, buyer, downgrade, reject and rework destination | gate scale, grade assay and sales tickets | kg, % | each gate lot | harvest-to-gate interval | each lot | sum final mutually exclusive output states | signed sale and grade tickets |
| `cp_seed_grade` | `linseed_seed_grade` | planting seed, downgraded grain, reject | seed-lot and test records | lot id, diverted mass, extra cleaning and treatment, purity, germination, seed grade, buyer, accepted and rejected mass | gate scale, seed test certificate, operation log | kg, %, kWh | each seed lot | harvest-to-gate interval | each seed lot | reconcile seed, oilseed downgrade and reject without double counting | signed seed test and sale records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_lot_yield` | Each field | final grain output kg / harvested ha, retaining accepted, downgraded and reject states separately | gate masses, field links, area | yield by grade and field | `manitoba-flax-management` |
| `calc_moisture_balance` | Aerated or dried lot | dry matter = incoming wet mass × (1 − incoming wet-basis moisture); expected outgoing wet mass = conserved dry matter / (1 − outgoing wet-basis moisture), adjusted for measured dry-matter reject | paired masses and moisture, reject | water removal and mass-balance residual | `manitoba-growing-flax` |
| `calc_soil_n2o` | Managed field soil | apply declared region-specific or IPCC 2019 direct and indirect N2O method to documented synthetic, organic and residue N; subtract sold or burnt residue from returned residue pool | field N and residue records, method factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_allocation` | Co-product crop year | directly assign separable operations; allocate only remaining joint burdens by justified causal basis or actual sold value shares, with mass-share sensitivity | sold masses, prices, joint burdens | burden share per sold output | `eu-pef-allocation` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Verify unprocessed linseed identity, variety, moisture and grade; oil, fibre or sowing-seed datasets cannot substitute. | gate ticket, lot assay |
| `dq_seed_identity` | Planting-seed branch | A planting-seed dataset requires its distinct platform flow identity, intended-use record, purity/germination tests and seed-grade hand-off; the oilseed reference UUID alone is insufficient. | seed certificate, sale ticket, flow-identity check |
| `dq_completeness` | Field-to-gate chain | Reconcile field area and grain lots, cleaning and moisture losses, accepted/downgraded/rejected outputs, straw and residues, and all significant applied products and energy. | field and lot balance |
| `dq_time` | Foreground | Use one documented crop year or disclose pooling years; each operation and output must link to a field, run or lot without shared-burden duplication. | dated logs and tickets |
| `dq_method` | Emissions and allocation | State factors, regional applicability, uncertainty and actual co-product prices or causal basis; do not silently mix residue return and burning assumptions. | method worksheet and sources |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Gate lot | Require linseed grain, actual moisture and grade, crop year and farm-gate hand-off; reject oil and fibre identities. Require a separate flow and test-backed grade for a planting-seed reference. | `manitoba-flax-management`, `cfia-common-seed` |
| `validate_routes` | Field and lot | Exactly one direct-combine or swath route per field portion; a drying or aeration node appears only when logged and must contain pre/post moisture, energy and hand-off. | `manitoba-flax-management`, `manitoba-growing-flax` |
| `validate_outputs` | Grain and straw | Reconcile accepted, downgraded, rejected, reworked and moisture-loss states to incoming lot; record each straw fate and any sale hand-off; do not count retained or burnt straw as a sold co-product. | `manitoba-flax-management` |
| `validate_runs` | Field, machine and lot | Link shared inputs, cleaning/changeover, outputs and rework to one run or period; assign each shared burden and final product once. | `manitoba-growing-flax` |
| `validate_residue_n` | Soil emissions | Show residue N returned, removed and burnt separately and avoid double-counting in N2O calculations. | `ipcc-2019-managed-soils` |
| `validate_seed_branch` | Planting-seed lot | Reconcile diverted grain into qualified seed, oilseed downgrade and reject; require purity/germination evidence, additional conditioning records and a verified seed UUID before a planting-seed dataset is validated. | `cfia-common-seed` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate linseed production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` when region, crop year, gate and quality are representative |
| allowed_use | Modelling unprocessed oilseed linseed grain at the declared moisture and grade, with explicit co-product treatment; the conditional planting-seed branch requires separately verified output flow and seed-grade evidence |
| excluded_use | Oil crushing, fibre processing, or farm-independent post-gate storage and transport; planting-seed use is allowed only under the distinct seed branch and verified seed flow |
| required_metadata | Farm region; field and crop year; variety or solin designation; intended oilseed or sowing use; area and yield; moisture and impurity grade; harvest route; conditioning and seed tests where applicable; straw fate; allocation method; upstream input geography and year |
| required_quality_disclosure | Missing input records, measurement and grade uncertainty, shared-equipment apportionment, soil-emission method, co-product price and sensitivity, site and temporal representativeness |
| update_trigger | Change in crop-management or harvest route, gate quality, straw market, emission method, or data vintage that materially alters inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `manitoba-flax-management` | `extension_guidance` | Manitoba Agriculture, [Flax: Production and Management](https://www.gov.mb.ca/agriculture/crops/crop-management/flax-and-solin/index.html) | Annual crop operations, harvest alternatives, grade downgrading, straw dispositions, and moisture context |
| `manitoba-growing-flax` | `extension_guidance` | Manitoba Agriculture, [Growing Flax factsheet](https://www.gov.mb.ca/agriculture/crops/seasonal-reports/pubs/growing-flax.pdf) | Cleaning, harvest, grain moisture, storage aeration and straw handling |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, [2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils and CO2 Emissions from Lime and Urea Application](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | N-input and crop-residue accounting, direct and indirect soil N2O methods |
| `cfia-common-seed` | `official_guidance` | Canadian Food Inspection Agency, [Requirements for Sales of Common Seed](https://inspection.canada.ca/en/plant-health/seeds/seed-industry-advisories/common-seed) | Seed-sale purity/germination testing, grade decision, labelling and lot hand-off |
| `eu-pef-allocation` | `official_guidance` | European Commission, [Commission Recommendation 2013/179/EU, Product Environmental Footprint multi-functionality hierarchy](https://eur-lex.europa.eu/eli/reco/2013/179/oj/eng) | Subdivision, physical relationship and economic-allocation hierarchy |
| `iso-14044-lci` | `standard` | https://www.iso.org/standard/38498.html | Life-cycle inventory quantitative-reference and input/output accounting framework; the 0–1 material-fraction and 1 kg reference bounds here are algebraic checks, not empirical ISO rates. |
