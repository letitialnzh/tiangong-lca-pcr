---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cottonseed-seed-for-planting
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cottonseed for planting

## 1. Scope and Applicability

This rule describes seed-grade cottonseed intended for sowing, derived from a managed cotton seed crop and delivered cleaned and viable at the declared farm-gate hand-off. The physical route includes cultivation, seed-cotton harvest, ginning/seed separation, seed conditioning, grade selection and any pre-handoff stabilization or seed treatment actually used. Contract ginning or conditioning remains inside this product system when it precedes the declared hand-off. A location label alone does not truncate the chain. This is a production-mix rule: keep each farm, gin and conditioning lot traceable before aggregation. Do not substitute lint, oilseed-grade cottonseed or oil/meal datasets for the reference product. [Sources: `unsd-cpc-01431`, `usda-aphis-cotton-seed-2012`, `usda-ars-ginning-2015`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cottonseed-seed-for-planting |
| classification_refs | CPC 3.0 01431 (mapping context only) |
| covered_products | Viable, cleaned cottonseed designated and graded for planting; cultivar and treatment status declared. |
| excluded_products | Cotton lint; cottonseed sold for crushing, oil or feed; cotton oil and meal; seed cotton before ginning; seed sold without planting-grade evidence. |
| representative_product | Cleaned planting cottonseed from cotton grown for seed propagation. |
| production_route | Managed seed crop → harvest of seed cotton → gin separation → optional mechanical or acid delinting → seed cleaning/grading → optional stabilization/treatment → accepted seed hand-off. Irrigated and rainfed cultivation are alternate managed-production routes; mechanical and acid delinting are alternate treatment routes, while no delinting is allowed only when the declared market specification accepts it. |
| market_state | Seed-grade, cleaned, viable cottonseed at the declared farm-gate transaction; package and treatment state disclosed. |

Irrigated cultivation adds measured irrigation water and pumping energy to the managed-biological parent; rainfed cultivation has no irrigation operation. These routes can coexist in a production mix but must retain separate field records. Acid delinting adds reagent, neutralization, effluent and ventilation records to the material-treatment parent; mechanical delinting has mechanical energy and removed linters. Select the actual route per lot; do not sum mutually exclusive delinting paths. [Sources: `usda-aphis-cotton-seed-2012`, `usda-ams-nop-5029`, `usda-ams-acid-delinting`]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted cottonseed grown and conditioned for planting |
| How much | 1 kg of accepted net seed mass |
| How well | Declared cultivar, seed grade, purity/germination evidence, moisture, delinting and treatment state |
| How long or cycle | One identified cotton growing season and linked conditioning lot |
| reference_flow_link | The accepted output of `seed_release`; rejected and non-planting seed are excluded from reference mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cottonseed, seed for planting `5ec327e3-1046-4478-9010-0733b798aa56` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar/seed class; geography/season; purity and germination test; moisture; delinting route; seed-treatment status; producer and conditioning sites; hand-off ownership |
| Binding | `fixed` |

The verified platform flow names a seed-grade cleaned production mix at farm gate. A foreground data package shall explain any apparent geographic split between farm and contracted gin/conditioning plant, and include those pre-handoff services. No default purity, germination or moisture value is imposed here; report applicable seed standard and measured lot result. [Sources: `usda-aphis-cotton-seed-2012`]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net accepted seed mass; deduct packaging, residual lint/trash and rejected seed. |
| `mass_reconciliation` | harvest, gin and conditioning | Mass | kg | Record wet/as-received basis and moisture; compare all incoming and outgoing material states on compatible moisture bases. |
| `input_consistency` | reagent, fertilizer, lint and rejected seed | Mass | kg | Convert supplier quantities to the same recorded mass basis before normalization; do not infer seed yield from a generic gin ratio. |
| `energy_consistency` | machinery, gin and conditioning energy | Declared energy property | kWh or MJ | Retain fuel and electricity separately and state conversion factors when units are changed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cultivated cotton field with disclosed planted seed provenance, management period and land history. |
| starting_condition_role | Foreground managed biological production, then separately traced harvest and conditioning states. |
| product_classification_scope | Planting-grade cottonseed only at final accepted hand-off; seed cotton and gin outputs remain intermediate or co-products. |
| recursive_input_rule | Purchased cotton planting seed used to establish the next crop is an input with its own upstream dataset; do not recursively regenerate it using this same foreground lot. |
| upstream_dataset_requirement | Attach provider datasets for purchased planting seed, fertilizers, crop protection, fuels, electricity, water service, delinting reagents and contracted conditioning where material. |
| disclosure | Declare farm/ginning/conditioning sites, ownership of pre-handoff services, season, irrigation, harvest method, ginning method, delinting and treatment route, rejects and all intended sale outputs. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `full_pre_gate_chain` | reference product | Include crop inputs, field operations, harvest, movement to gin/conditioner, ginning, cleaning, grading, conditional delinting/stabilization/treatment and linked waste handling through accepted seed hand-off, even when services occur off farm. | `usda-aphis-cotton-seed-2012`; `usda-ars-ginning-2015` |
| `separate_output_states` | gin and conditioner | Record lint, seed for planting, non-planting seed, linters, gin trash, residues and waste by actual destination; no rejected mass in accepted seed. | `usda-ars-ginning-2015`; `usda-ams-acid-delinting` |
| `route_condition` | delinting | Acid delinting is conditional; record acid, water, neutralizer, effluent and removed lint when used. Mechanical route records energy and removed material. Do not invent acid chemistry, conversion efficiency or universal yield. | `usda-ams-nop-5029`; `usda-ams-acid-delinting` |
| `field_emissions` | managed soil | Calculate direct and indirect N2O from recorded N sources under a declared geographic method; do not apply a generic flow amount without a documented factor. | `ipcc-2019-soils-ch11` |
| `post_gate_exclusion` | accepted seed | Exclude distribution after the declared hand-off, sowing of sold seed, cotton oil milling, crushing and subsequent crop production. | `unsd-cpc-01431` |
| `shared_asset_boundary` | shared gin and conditioner assets | A shared asset such as a gin meter, seed cleaner or ventilation unit is attributed across the farm/lot nodes and actual service period that consume it; record the meter or machine-hour basis once. | `usda-ars-ginning-2015` |
| `reporting_period` | production mix | A single-period basis covers the identified crop season and linked conditioning campaign. If seed remains held after that period, collect and disclose the additional activity as a distinct case before aggregation. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_management` | Cotton seed-crop management | required | Every seed crop; irrigation subroute only if used | Managed biological production; irrigated versus rainfed alternative technology route changes water and pumping inventory; pre-harvest standing crop | area, season, input ledgers |
| `seed_cotton_harvest` | Seed-cotton harvest | required | Separate harvest operation and field-to-gin lot | Capture seed cotton distinct from field growth; record field loss | harvested kg and field area |
| `gin_separation` | Ginning and primary conditioning | required | On-farm or contracted gin before reference hand-off | Separate lint and fuzzy seed as intended outputs; remove gin trash; batch production with run and changeover indexing | seed-cotton input, lint, fuzzy seed, trash |
| `seed_delinting` | Seed delinting / material treatment | conditional | Mechanical, acid, or documented no-delinting route | Remove residual lint; conditional chemical reaction with acid reactants only for acid route; alternative technology route changes reagent and waste inventory | fuzzy seed, delinted seed, reagent and residues |
| `seed_grading` | Cleaning and grading | required | Seed-grade selection | Separate accepted grade, rework, downgraded seed and waste | incoming and outgoing grade masses |
| `seed_stabilization` | Moisture stabilization and optional treatment | conditional | Drying, cooling, storage or treatment before hand-off when performed | Preserve viable seed state; record treatment materials | incoming/outgoing seed, energy, treatment records |
| `seed_release` | Accepted seed hand-off | required | After testing and disposition | Declare released seed mass and final market state | accepted net kg and test results |

The gin may handle many farms and the conditioner many lots. Batch production records seed-lot IDs, run or continuous-period boundaries, changeovers and shared meter periods; a shared asset or service such as gin meters or conditioning equipment is attributed once to consuming lots. This crop and its linked conditioning campaign form a single-period basis; no continuing stock is assumed. [Sources: `usda-ars-ginning-2015`, `usda-ams-acid-delinting`]

### Process: Cotton seed-crop management (`crop_management`)

#### Inputs

##### Product flows

###### Seed planting material (`planting_seed_input`)

Record purchased seed mass placed on the seed field and link its own upstream dataset.

- Selected flow: Cotton planting seed
- Flow property / unit: Mass / kg
- Amount rule: Record purchased seed mass placed on the seed field and link its own upstream dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: usda-aphis-cotton-seed-2012
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/ha
  - Basis: seed planted per cultivated hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`crop_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `usda-aphis-cotton-seed-2012`
- Range: Provisional fertilizer-product QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg/ha
  - Basis: sum of separately recorded fertilizer and manure product masses per cultivated hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`field_crop_protection_products`)

Record every crop-protection product separately with its formulation, active-substance content, application time, and field.

- Selected flow: Named crop-protection product
- Flow property / unit: Mass / kg product and kg active substance as applicable
- Amount rule: Record each actual product, formulation, amount, timing, and field; retain product and active-substance masses separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `usda-aphis-cotton-seed-2012`
- Range: Provisional crop-protection-product QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg/ha
  - Basis: sum of separately recorded crop-protection product masses per cultivated hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

For irrigated fields record water withdrawn or delivered and pumping service; rainfed fields report no irrigation.

- Selected flow: Irrigation water
- Flow property / unit: Declared property / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: For irrigated fields record water withdrawn or delivered and pumping service; rainfed fields report no irrigation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: usda-aphis-cotton-seed-2012
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha
  - Basis: withdrawn or delivered irrigation water per cultivated hectare; conditional route; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standing seed cotton (`standing_seed_cotton`)

Measure harvestable seed cotton as the crop-management hand-off to the separate harvest node, or reconcile from harvest records.

- Selected flow: Standing seed cotton
- Flow property / unit: Mass / kg
- Amount rule: Measure harvestable seed cotton as the crop-management hand-off to the separate harvest node, or reconcile from harvest records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: usda-aphis-cotton-seed-2012
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg/ha
  - Basis: harvestable seed cotton per cultivated hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Managed soil N2O (`soil_n2o`)

Calculate direct field N2O from recorded nitrogen inputs and declared geographic method; record indirect N2O separately where modelled.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate direct field N2O from recorded nitrogen inputs and declared geographic method; record indirect N2O separately where modelled.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soil_emissions`
- Sources: ipcc-2019-soils-ch11
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha
  - Basis: calculated direct soil N2O per cultivated hectare; retain factor-method audit; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Seed-cotton harvest (`seed_cotton_harvest`)

#### Inputs

##### Product flows

###### Harvest energy (`harvest_energy`)

Record fuel or electricity of the actual picking/stripping method by field and harvest event.

- Selected flow: Harvest fuel or electricity
- Flow property / unit: Declared property / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record fuel or electricity of the actual picking/stripping method by field and harvest event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: usda-aphis-cotton-seed-2012
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/ha
  - Basis: measured harvest fuel and electricity converted to energy per harvested hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected seed cotton (`collected_seed_cotton`)

Weigh collected seed cotton at field exit; link its lot to the gin intake without counting it as final planting seed.

- Selected flow: Seed cotton, as harvested
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected seed cotton at field exit; link its lot to the gin intake without counting it as final planting seed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: usda-ars-ginning-2015
- Range: Source-backed scenario-specific typical interval
  - Range role: Typical range (`typical_range`)
  - Lower: 1128
  - Upper: 6002
  - Unit: kg/ha
  - Basis: Published field-study seed-cotton yield minimum and maximum; location, cultivar and year specific, not a universal production limit.
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `usda-ars-cotton-yield-2004`

##### Waste flows

###### Field residues and loss (`field_residue_loss`)

Record uncollected seed cotton and removed waste separately; residues left on the field remain a soil-return input and must not be treated as exported waste; state destinations.

- Selected flow: Cotton field residues and harvest loss
- Flow property / unit: Mass / kg
- Amount rule: Record uncollected seed cotton and removed waste separately; residues left on the field remain a soil-return input and must not be treated as exported waste; state destinations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: usda-aphis-cotton-seed-2012
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg/ha
  - Basis: measured uncollected seed cotton and removed residues per harvested hectare; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Ginning and first conditioning (`gin_separation`)

#### Inputs

##### Product flows

###### Harvested seed cotton intake (`gin_seed_cotton_input`)

Record weighed seed-cotton lots and moisture at gin intake, including transfers from contracted sites.

- Selected flow: Seed cotton, as harvested
- Flow property / unit: Mass / kg
- Amount rule: Record weighed seed-cotton lots and moisture at gin intake, including transfers from contracted sites.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gin_balance`
- Sources: usda-ars-ginning-2015
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference seed
  - Basis: gin intake per kilogram final accepted planting seed; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Gin electricity and fuel (`gin_energy`)

Record actual gin metered energy and assign shared meter periods to traced seed-cotton runs.

- Selected flow: Gin electricity or fuel
- Flow property / unit: Declared property / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record actual gin metered energy and assign shared meter periods to traced seed-cotton runs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared_services`
- Sources: usda-ars-ginning-2015
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg gin intake
  - Basis: fuel and electricity converted to energy per kilogram seed cotton entering gin; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Ginned lint (`gin_lint_output`)

Weigh saleable lint at gin hand-off; maintain it as an intended co-product distinct from planting seed.

- Selected flow: Cotton lint
- Flow property / unit: Mass / kg
- Amount rule: Weigh saleable lint at gin hand-off; maintain it as an intended co-product distinct from planting seed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gin_balance`
- Sources: usda-ars-ginning-2015
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry/kg dry gin intake
  - Basis: dry lint per kilogram dry seed cotton entering gin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

###### Intended output: fuzzy cottonseed (`gin_fuzzy_seed`)

Weigh separated fuzzy seed by lot before seed conditioning; distinguish planting candidate from non-planting destination.

- Selected flow: Cottonseed, fuzzy after ginning
- Flow property / unit: Mass / kg
- Amount rule: Weigh separated fuzzy seed by lot before seed conditioning; distinguish planting candidate from non-planting destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gin_balance`
- Sources: usda-ars-ginning-2015
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry/kg dry gin intake
  - Basis: dry fuzzy seed per kilogram dry seed cotton entering gin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Waste flows

###### Gin trash (`gin_trash`)

Measure trash and classify sold by-product, recovered material or disposal according to documented destination.

- Selected flow: Gin trash
- Flow property / unit: Mass / kg
- Amount rule: Measure trash and classify sold by-product, recovered material or disposal according to documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gin_balance`
- Sources: usda-ars-ginning-2015
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry/kg dry gin intake
  - Basis: dry trash per kilogram dry seed cotton entering gin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Elementary flows

### Process: Seed delinting and material treatment (`seed_delinting`)

#### Inputs

##### Product flows

###### Fuzzy seed for delinting (`fuzzy_seed_for_delint`)

Trace gin lots entering actual mechanical or acid delinting run; no-delinting route bypasses this node with justification.

- Selected flow: Cottonseed, fuzzy after ginning
- Flow property / unit: Mass / kg
- Amount rule: Trace gin lots entering actual mechanical or acid delinting run; no-delinting route bypasses this node with justification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delint_balance`
- Sources: usda-ams-acid-delinting
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg fuzzy seed available
  - Basis: fuzzy seed routed to delinting per kilogram fuzzy seed separated
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

###### Delinting acid input (`delint_acid`)

For the acid route, record the actual delinting-acid identity, concentration and mass separately for each run.

- Selected flow: Delinting acid
- Flow property / unit: Mass / kg
- Amount rule: Record the actual quantity of this product separately for each run; no universal dose or reaction yield is assigned.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delint_balance`
- Sources: `usda-ams-nop-5029`; `usda-ams-acid-delinting`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg treated fuzzy seed
  - Basis: delinting-acid product mass per kilogram of fuzzy seed treated by the acid route; broad screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `usda-ams-nop-5029`; `usda-ams-acid-delinting`

###### Delinting process water (`delint_process_water`)

For the acid route, record externally supplied process water separately for each run; report reused water as an internal flow without double counting.

- Selected flow: Delinting process water
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Record the actual quantity of this product separately for each run; no universal dose or reaction yield is assigned.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delint_balance`
- Sources: `usda-ams-nop-5029`; `usda-ams-acid-delinting`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg treated fuzzy seed
  - Basis: externally supplied process-water mass per kilogram of fuzzy seed treated by the acid route; broad screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `usda-ams-nop-5029`; `usda-ams-acid-delinting`

###### Delinting neutralizer input (`delint_neutralizer`)

For the acid route, record the actual neutralizer identity, concentration and mass separately for each run.

- Selected flow: Delinting neutralizer
- Flow property / unit: Mass / kg
- Amount rule: Record the actual quantity of this product separately for each run; no universal dose or reaction yield is assigned.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delint_balance`
- Sources: `usda-ams-nop-5029`; `usda-ams-acid-delinting`
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg treated fuzzy seed
  - Basis: neutralizer-product mass per kilogram of fuzzy seed treated by the acid route; broad screen only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `usda-ams-nop-5029`; `usda-ams-acid-delinting`

###### Delinting energy (`delint_energy`)

Record mechanical or acid equipment energy by route and run, including drying and ventilation when used.

- Selected flow: Delinting energy
- Flow property / unit: Declared property / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record mechanical or acid equipment energy by route and run, including drying and ventilation when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared_services`
- Sources: usda-ams-acid-delinting
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg treated fuzzy seed
  - Basis: delinting energy per kilogram fuzzy seed treated; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Delinted seed (`delinted_seed`)

Weigh post-treatment seed and hand it to grading; record residual acid/neutralization status if acid route was used.

- Selected flow: Cottonseed, delinted
- Flow property / unit: Mass / kg
- Amount rule: Weigh post-treatment seed and hand it to grading; record residual acid/neutralization status if acid route was used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delint_balance`
- Sources: usda-ams-acid-delinting
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg treated fuzzy seed
  - Basis: post-treatment seed per kilogram fuzzy seed entering treatment; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Removed linters (`removed_linters`)

Measure removed linters and classify sale, recovery or waste by actual clean/contaminated state.

- Selected flow: Cotton linters
- Flow property / unit: Mass / kg
- Amount rule: Measure removed linters and classify sale, recovery or waste by actual clean/contaminated state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delint_balance`
- Sources: usda-ams-acid-delinting
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry/kg dry fuzzy seed
  - Basis: dry removed linters per kilogram dry fuzzy seed treated
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Waste flows

###### Acid effluent and contaminated residue (`acid_residue`)

For acid route record reacted lint, excess or unreacted acid solution, neutralization products, dust and wastewater by actual destination; recirculated reagent stays within the node, and untreated residue is not a product.

- Selected flow: Acid delinting effluent and residue
- Flow property / unit: Mass / kg
- Amount rule: For acid route record reacted lint, excess or unreacted acid solution, neutralization products, dust and wastewater by actual destination; recirculated reagent stays within the node, and untreated residue is not a product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delint_balance`
- Sources: usda-ams-acid-delinting
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg treated fuzzy seed
  - Basis: acid-route effluent and contaminated residues per kilogram fuzzy seed treated; route conditional; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Seed cleaning and grading (`seed_grading`)

#### Inputs

##### Product flows

###### Seed entering grading (`grading_input`)

Record incoming lot mass and state from delinting or documented bypass.

- Selected flow: Cottonseed entering grading
- Flow property / unit: Mass / kg
- Amount rule: Record incoming lot mass and state from delinting or documented bypass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_balance`
- Sources: usda-ams-acid-delinting
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference seed
  - Basis: seed entering grading per kilogram final accepted planting seed; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted seed grade (`accepted_grade`)

Weigh seed passing the declared purity and viability specification, then hand it to stabilization or release.

- Selected flow: Cottonseed, planting grade
- Flow property / unit: Mass / kg
- Amount rule: Weigh seed passing the declared purity and viability specification, then hand it to stabilization or release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_balance`
- Sources: usda-aphis-cotton-seed-2012
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading input
  - Basis: accepted grade per kilogram seed entering grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

###### Rework and downgraded seed (`rework_downgrade`)

Separate re-cleaning loops, sale as non-planting seed, and recovery destinations; do not count these as accepted until retested.

- Selected flow: Cottonseed, off-grade
- Flow property / unit: Mass / kg
- Amount rule: Separate re-cleaning loops, sale as non-planting seed, and recovery destinations; do not count these as accepted until retested.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_balance`
- Sources: usda-ams-acid-delinting
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading input
  - Basis: rework and downgraded lot per kilogram seed entering grading; count once
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Waste flows

###### Sorting rejects (`sorting_reject`)

Record waste material and its disposal; identify any viable seed downgraded to another use separately.

- Selected flow: Seed cleaning rejects
- Flow property / unit: Mass / kg
- Amount rule: Record waste material and its disposal; identify any viable seed downgraded to another use separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_balance`
- Sources: usda-ams-acid-delinting
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading input
  - Basis: rejected material per kilogram seed entering grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Elementary flows

### Process: Seed stabilization and optional treatment (`seed_stabilization`)

#### Inputs

##### Product flows

###### Seed before stabilization (`seed_pre_stabilize`)

Record lot state and moisture before actual drying, cooling, storage or treatment.

- Selected flow: Planting-grade cottonseed before stabilization
- Flow property / unit: Mass / kg
- Amount rule: Record lot state and moisture before actual drying, cooling, storage or treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization`
- Sources: usda-aphis-cotton-seed-2012
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference seed
  - Basis: seed entering stabilization per kilogram final accepted planting seed; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Treatment material and service (`seed_treatment_input`)

If applied, record each treatment formulation, amount and service by lot; mark untreated lots explicitly.

- Selected flow: Declared seed-treatment products
- Flow property / unit: Mass / kg
- Amount rule: If applied, record each treatment formulation, amount and service by lot; mark untreated lots explicitly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization`
- Sources: usda-ams-nop-5029
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg treated seed
  - Basis: treatment formulations per kilogram treated seed; conditional route and separate products; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized seed (`stabilized_seed`)

Record seed mass and measured moisture/germination after intervention; hand off to release testing.

- Selected flow: Planting-grade stabilized cottonseed
- Flow property / unit: Mass / kg
- Amount rule: Record seed mass and measured moisture/germination after intervention; hand off to release testing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization`
- Sources: usda-aphis-cotton-seed-2012
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg seed before treatment
  - Basis: seed after stabilization per kilogram input seed; allow added treatment mass; screen only, not a default, mandatory limit, or substitute for measured records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Storage or treatment loss (`stabilization_loss`)

Record damaged or nonviable seed and treatment residues with actual disposal or downgrade path.

- Selected flow: Off-grade seed and treatment residue
- Flow property / unit: Mass / kg
- Amount rule: Record damaged or nonviable seed and treatment residues with actual disposal or downgrade path.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization`
- Sources: usda-ams-nop-5029
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg seed before treatment
  - Basis: damaged or lost seed per kilogram input seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Elementary flows

### Process: Accepted planting seed release (`seed_release`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released planting seed (`reference_seed_output`)

Weigh net accepted seed at final hand-off and attach lot quality and route evidence.

- Selected flow: Cottonseed, seed for planting `5ec327e3-1046-4478-9010-0733b798aa56`
- Flow property / unit: Mass / kg
- Amount rule: Weigh net accepted seed at final hand-off and attach lot quality and route evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: usda-aphis-cotton-seed-2012
- Range: Reference-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference seed
  - Basis: released net seed is the declared 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Waste flows

###### Failed release lot (`failed_release`)

Rework, downgrade or dispose failed lots by documented path; exclude from reference mass.

- Selected flow: Cottonseed failing release
- Flow property / unit: Mass / kg
- Amount rule: Rework, downgrade or dispose failed lots by documented path; exclude from reference mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted planting cottonseed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: usda-aphis-cotton-seed-2012
- Range: Provisional broad QA screen; investigate outliers and use foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg release-lot input
  - Basis: failed seed per kilogram lot entering release
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lci`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `joint_gin_output` | gin separation | First separate physical subprocesses where meters and mass records allow. For inseparable ginning burdens jointly generating lint and fuzzy seed, use lot-specific dry-mass allocation among intentionally sold outputs; show masses and calculated shares. Gin trash receives a share only when documented as a saleable intended product; disposal waste does not. Preserve a sensitivity result using economic allocation when value data exist, because lint and seed have different economic functions. | `usda-ars-ginning-2015` |
| `seed_grade_attr` | grading and conditioning | Keep planting seed, saleable non-planting cottonseed and saleable linters as distinct outputs. Attribute inseparable common conditioning burdens to saleable outputs by measured dry mass; direct delinting, grading, rework and treatment burdens to the lots that actually receive them. Disclose saleable output set and shares. | `usda-ams-acid-delinting` |
| `reject_loop` | grading, stabilization and release | Rework mass and repeated energy remain linked to the producing lot until final disposition. A failed lot that becomes non-planting seed is a downgraded co-product; disposed material is waste and receives no output allocation. Never count a returned lot twice as accepted seed. | `usda-ams-acid-delinting` |
| `shared_service` | farm, gin and conditioner | Attribute shared machinery, gin meters, ventilation, buildings and cleaning to documented consuming fields/lots and service periods; prefer measured machine hours or energy, then throughput only if operating conditions are comparable. Attribute each shared burden once. | `usda-ars-ginning-2015` |
| `production_mix` | irrigated/rainfed fields and conditioning routes | Calculate each route separately through its own accepted seed mass, then mass-weight final results across accepted seed only. Keep mutually exclusive delinting routes and treatment states separate in inventory disclosure. | `usda-aphis-cotton-seed-2012`; `usda-ams-nop-5029` |

The dry-mass rule is this PCR's attribution decision for a common material-separation service; it is a modelling convention requiring explicit disclosure, not a claim that mass and economic functions are equivalent. Record as-received moisture and conversion basis. If output ownership or measurement is incomplete, mark allocation inconclusive instead of assigning all gin burdens to seed. [Sources: `usda-ars-ginning-2015`, `usda-ams-acid-delinting`]

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `crop_management` | planted seed, fertilizer, pesticides, irrigation and field fuel | field ledger and invoices | field ID; crop season; planted seed kg; product and nutrient kg; application dates; irrigation m3; pump energy; field area | supplier records, meters and application logs | kg, m3, MJ, ha | each application | one crop season | each seed field | sum by field and allocate shared operation by actual area or machine time | dated invoices, calibration and irrigation meter evidence |
| `cp_soil_emissions` | `crop_management` | managed-soil N inputs and emissions | calculation worksheet | mineral and organic N kg; crop residue N; soil/region; emission factors; irrigation status | field N ledger and declared IPCC or national method | kg N and kg N2O | each season | one crop season | each seed field | calculate direct and indirect pathways separately; convert N2O-N to N2O once | factor source, assumptions and worksheet |
| `cp_harvest` | `seed_cotton_harvest` | harvested seed cotton, losses and energy | harvest log | field ID; date; harvested seed-cotton kg; moisture; loss estimate; residue destination; fuel/energy | weighbridge, harvest logs and field checks | kg, MJ | each harvest | one crop season | each seed field | sum matched harvested lots; reconcile to gin intake | scale tickets and fuel records |
| `cp_gin_balance` | `gin_separation` | seed cotton, lint, fuzzy seed and trash | gin batch ledger | lot/run ID; source field; incoming kg/moisture; lint kg; fuzzy seed kg; trash kg; destinations | gin scales and output sale/transfer tickets | kg | each gin run | linked harvest/conditioning campaign | each gin and lot | mass-balance each run, then aggregate traceable lots | scale calibration and sale records |
| `cp_delint_balance` | `seed_delinting` | delinting route, reagents and residues | conditioning batch ledger | lot/run ID; mechanical/acid/bypass route; incoming fuzzy seed kg; acid/water/neutralizer kg; delinted seed kg; linters kg; effluent/waste kg | batch meter, chemical inventory and waste manifest | kg | each conditioning run | linked seed lot | each conditioner and lot | reconcile dry-equivalent incoming/outgoing material and reagent inventory | chemical invoices, meter and waste records |
| `cp_shared_services` | `gin_separation` | shared energy, cleaning and assets | service meter log | meter period; kWh/fuel; machine hours; active run IDs; changeover/cleaning; building use | utility meters and maintenance logs | kWh, MJ, h | each run or meter period | linked campaign | gin and conditioner | assign each shared service once to observed consuming lots by energy or hours | meter logs and allocation worksheet |
| `cp_grade_balance` | `seed_grading` | accepted, rework, downgraded and waste states | grading ledger | lot ID; incoming kg; purity; germination; accepted kg; rework kg; non-planting kg; waste kg; destinations | scales, lab reports and disposition log | kg, % | each lot and rework pass | conditioning campaign | each conditioner | track repeat passes and final disposition without duplicate accepted mass | lab certificate and scale records |
| `cp_stabilization` | `seed_stabilization` | pre/post seed condition and treatment | storage or treatment log | lot ID; pre/post kg, moisture and germination; dates; energy; treatment product and kg; residue/damage kg | lot scale, moisture and germination tests, treatment meters | kg, %, MJ | each lot/event | pre-handoff interval | each conditioning site | sum event inputs once and link to final lot | test results, treatment label and meter logs |
| `cp_release` | `seed_release` | net accepted reference seed | release and shipment ledger | lot ID; accepted net kg; cultivar/class; purity; germination; moisture; delinting/treatment route; hand-off date; failed kg and disposition | certification/test certificate and final scale ticket | kg, % | each release lot | one marketing season | each producer/conditioner | sum unique accepted lot IDs only | signed test, release and transfer records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalized_input` | all foreground quantities | Quantity per kg = lot-attributed quantity / unique accepted seed kg. | process quantity; accepted seed mass | normalized amount |  |
| `dry_mass` | gin and conditioning outputs | Dry mass = as-received mass × (1 − measured moisture fraction); use same moisture convention for compared streams. | as-received kg; measured moisture | dry kg |  |
| `joint_share` | inseparable joint service | Output share = saleable output dry kg / sum saleable intended output dry kg; apply once to joint burden. | saleable output dry masses; common service amount | allocated burden | `usda-ars-ginning-2015` |
| `field_n2o` | managed soil | Use selected regional IPCC/national direct and indirect pathway equations; store all N inputs, factors and units. | N source inventory; region; selected factors | kg N2O by pathway | `ipcc-2019-soils-ch11` |
| `mix_average` | production mix | Sum route burden / sum unique accepted seed mass after route allocation. | route burdens; accepted seed mass | production mix per kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | released seed | Match cultivar, seed class, planting purpose, lot tests and the verified reference-flow identity. | release certificate and scale ticket |
| `coverage` | field through release | Link farm field, harvest, gin run, conditioning lot and accepted seed output; disclose missing subcontractor records. | cross-site lot chain |
| `balance` | gin and conditioner | Reconcile input/output mass at measured moisture and explain differences; no silent zero for lint or rejects. | balance worksheet and moisture tests |
| `route_quality` | conditional processes | Document irrigated/rainfed, acid/mechanical/no delinting and seed treatment status with associated inputs and waste. | operation logs |
| `temporal` | production mix | Use one identified crop season and linked conditioning campaign; disclose older proxy data and changes. | dated logs and meter periods |

## 9. Validation Rules

| rule_id | Applies to | Rule |
| --- | --- | --- |
| `seed_identity` | reference output | Require verified flow UUID, net accepted kg, sowing purpose, cultivar/class, germination/purity evidence and declared moisture; reject oilseed or lint substitution. |
| `gate_completeness` | boundary | Verify every pre-handoff farm, gin, transporter and conditioner node or contracted service is included once; disclose the actual gate and ownership. |
| `mass_and_outputs` | gin and conditioner | Check seed cotton, lint, fuzzy seed, linters, accepted and downgraded seed, trash and waste disposition with moisture-compatible balance; accepted mass is unique. |
| `route_exclusivity` | production and treatment | Require irrigated/rainfed field evidence and one evidenced delinting route per lot; acid route requires reactant, neutralization and residue records; treatment status is explicit. |
| `batch_trace` | shared runs | Match meters, changeovers, cleaning and shared infrastructure to consuming lots and periods; each shared burden is assigned once. |
| `reject_resolution` | grading and release | Every off-grade mass has a rework, downgrade, recovery or disposal path; repeated passes do not create extra accepted mass. |
| `allocation_audit` | multi-output service | Require measured saleable output masses, allocation shares summing to one, direct burdens assigned first and economic sensitivity when prices exist; mark incomplete evidence inconclusive. |
| `soil_n2o_basis` | field emissions | Verify source-specific N inputs, regional factor source, direct/indirect separation and N2O-N conversion. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground planting-cottonseed production-mix dataset |
| downstream_use | `secondary_dataset`; `background_dataset` for downstream seed supply, cotton farming process and lifecyclemodel projections |
| allowed_use | Sowing-grade cleaned cottonseed with matching route, seed grade and declared hand-off. |
| excluded_use | Cotton lint, unprocessed seed cotton, oilseed cottonseed, cotton oil/meal, post-gate distribution or crop grown from released seed. |
| required_metadata | reference flow UUID and mass; cultivar/seed class; region and season; farm/gin/conditioner chain; irrigation, harvest, gin and delinting routes; treatment; moisture, purity and germination; output destinations and allocation shares. |
| required_quality_disclosure | Record coverage, subcontractor data gaps, tests and calibration, moisture correction, field-emission method, allocation and economic sensitivity, proxy data and uncertainty. |
| update_trigger | New seed standard or flow identity; changed route/gate; improved gin or conditioner records; changed regional field emission factors. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-01431` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/01431 | Planting-seed product boundary. |
| `usda-aphis-cotton-seed-2012` | literature | https://www.aphis.usda.gov/sites/default/files/12_18501p.pdf | Seed-cotton cultivation, ginning, delinting and certified planting-seed quality context. |
| `usda-ars-ginning-2015` | official_guidance | https://www.ars.usda.gov/research/publications/publication/?seqNo115=309523 | Gin material states, lint, seed and trash destinations. |
| `usda-ams-nop-5029` | official_guidance | https://www.ams.usda.gov/rules-regulations/organic/handbook/5029 | Conditional acid delinting and treatment disclosure; organic restrictions are applicable only to certified organic routes. |
| `usda-ams-acid-delinting` | literature | https://www.ams.usda.gov/sites/default/files/media/Hydrogen%20Chloride%20Petition.pdf | Acid delinting reactor, neutralization, cleaning, grading and reject paths; process description only, not a universal reagent rate. |
| `ipcc-2019-soils-ch11` | method_factor | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Nitrogen input basis for managed-soil direct and indirect N2O calculation. |
| `usda-ars-gin-stand` | official_guidance | https://www.ars.usda.gov/southeast-area/stoneville-ms/cotton-ginning-research/docs/overview-of-a-cotton-gin/page-7/ | Physical separation of cotton lint from seed during ginning. |
| `iso-14044-lci` | `standard` | https://www.iso.org/standard/38498.html | Life-cycle inventory quantitative-reference and input/output accounting framework; the 0–1 material-fraction and 1 kg reference bounds here are algebraic checks, not empirical ISO rates. |
| `usda-ars-cotton-yield-2004` | `literature` | https://www.ars.usda.gov/research/publications/publication/?seqNo115=138898 | Published field-study seed-cotton yield minimum and maximum; location, cultivar and year specific, not a universal production limit. |
