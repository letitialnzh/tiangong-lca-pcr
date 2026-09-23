---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fruit-seeds
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Fruit Seeds for Sowing at the Declared Seed Gate

## 1. Scope and Applicability

This PCR guides foreground data-package construction for fruit seeds intended for sowing. It covers seed production or multiplication, harvest of seed-bearing fruit or dry fruit structures, species-dependent seed extraction, primary conditioning, grading and quality release, optional treatment, packaging, and storage to a declared seed gate. The category is intentionally route-flexible because fruit seeds may be recovered from fleshy fruits, dry fruits, pods, stones, or similar reproductive structures, and may be produced in annual field crops, protected cultivation, orchards, or seed gardens.

The PCR applies only when the output is an identifiable seed lot with a declared crop or plant identity and sowing purpose. It does not prescribe one cultivar, seed class, extraction technology, storage temperature, moisture target, quality threshold, fertilizer programme, or emission factor. Those values are foreground records or declared, source-backed choices.

Excluded are fruit harvested only for food, feed, processing, or oil when the seed is not an intended sowing product; seedlings, transplants, grafted plants, rootstocks, cuttings, and living planting material; breeding or parental material that remains an internal input and is not the reference output; manufacture of fertilizers, pesticides, treatment products, packaging, or equipment; downstream crop cultivation using the seed; retail and consumer use; and distribution after the declared gate unless a delivered gate is explicitly modelled.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fruit-seeds |
| classification_refs | CPC 3.0 `01360`, Fruit seeds |
| covered_products | Identifiable fruit-crop or fruit-tree seed lots intended for sowing, including seed extracted from fleshy fruits, dry fruits, pods, stones, or comparable reproductive structures; open-pollinated, hybrid, certified, commercial, farm-saved, and comparable lots when their identity and quality basis are declared |
| excluded_products | Food or feed fruit with incidental seed; fruit-processing residues not intended as sowing seed; seedlings, transplants, grafted plants, rootstocks, cuttings, and other living planting material; internal breeding stock not sold as seed; downstream cultivation and post-gate distribution |
| representative_product | Net accepted, identifiable fruit seed lot released for sowing at the declared gate, with declared crop or plant identity, seed class, moisture or viability state, physical purity, germination or viability result, treatment status, and package state |
| production_route | Managed field, protected-cultivation, orchard, or seed-garden production followed by harvest, wet/fleshy or dry-fruit extraction as applicable, drying and primary conditioning, grading/testing, optional treatment, packaging, and storage |
| market_state | Accepted seed lot at a declared conditioning-facility, seed-store, or other named gate; bulk and packaged states are allowed when package, storage, moisture, quality, and hand-off qualifiers are declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net accepted fruit seed for sowing at the declared seed gate |
| How much | 1 kg |
| How well | Crop or plant identity; cultivar, line, or hybrid status; seed class; production geography; annual or perennial route; fleshy-fruit or dry-fruit route; extraction and treatment status; moisture or viability basis; physical purity; germination or viability result; packaging state; storage duration where included; and declared gate |
| How long or cycle | One declared seed production cycle and harvest campaign. For perennial orchards or mother plants, record the relevant establishment, productive, replacement, and termination periods and the allocation basis used to assign them to the seed lot. |
| reference_flow_link | `fruit_seed_reference_flow` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net accepted seed |
| Reference product flow | Fruit seeds, production mix, at farm gate, seed-grade cleaned for sowing (`51c9dbb5-2bed-4546-b6aa-84e2b59bf91f`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200c9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Reference identity status | fixed UUIDs reviewed against the exact CPC 01360 product candidate and saved mass-property/unit-group index |
| Required qualifiers | crop or plant species; cultivar, line, or hybrid status; seed class; production geography; production unit type; annual or perennial cycle; fleshy-fruit, dry-fruit, pod, stone, or other reproductive structure; wet or dry extraction route; moisture basis or recalcitrant-seed status; physical purity; germination or viability result and test method; treatment status; packaging state; storage duration; declared gate; intended co-products; residue, reject, and rework fates |

When constructing a foreground data package, all `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. A reference flow without these qualifiers is incomplete. The product-flow identity, mass-property identity, and unit-group identity remain unmapped in this subtask and must be resolved before final TIDAS process publication.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_seed_mass` | reference product and final lot reconciliation | Mass (UUID unresolved) | kg | Express the reference as net accepted seed at the declared gate. Preserve gross, tare, moisture basis, accepted, downgraded, rejected, sample, residue, and unexplained-loss masses separately. |
| `seed_count_conversion` | count-based seed records | Mass (UUID unresolved) | kg; seeds or item count as supporting data | Convert seed counts to mass only with a measured thousand-seed mass, average seed mass, or other transparent lot-specific conversion. Do not replace a mass reference with an unqualified seed count. |
| `seed_moisture_basis` | harvest, extraction, conditioning, storage, and delivery | Mass and moisture | kg; percent wet basis or declared dry basis | Declare whether each mass is as-received, wet-basis, dry-basis, or recalcitrant-seed basis. Convert only from recorded mass and moisture; do not apply a universal moisture target across species. |
| `nutrient_product_and_element_basis` | fertilizer and soil-amendment inputs | Product mass and nutrient mass | kg product; kg N, P, or K as declared | Record only products actually used. Preserve product mass and the declared nutrient basis from the label, supplier specification, nutrient plan, or laboratory result. Do not infer a fertilizer type or concentration. |
| `water_separation` | irrigation, source withdrawal, extraction, washing, and discharge | Volume or mass | m3 or kg | Keep source withdrawal, delivered irrigation, extraction or washing water, recirculated water, evaporation, retained water, and discharged water distinct. Do not count the same water as both product input and elementary withdrawal. |
| `energy_carrier_conversion` | field, harvest, extraction, conditioning, testing, treatment, packaging, and storage | Energy or carrier quantity | kWh, MJ, L, kg, or declared carrier unit | Preserve measured carrier, operation, equipment or service, time period, and factor source. Convert carriers only with a declared factor and retain the original activity data. |
| `quality_attribute_reporting` | released seed lots | Quality attribute | percent, result per test method, or declared categorical state | Report physical purity, germination or viability, health or treatment status, and moisture or recalcitrant state with the test method, sample date, lot id, and acceptance decision. These attributes qualify the reference flow; they are not silently converted to mass. |
| `packaging_reuse_basis` | packaging and reusable containers | Mass or item count | kg, item, or declared package unit | Record packaging mass or count, capacity, material role, lot assignment, reuse cycles, return rate, and end-of-use hand-off when packaging is inside the declared boundary. |

Seed quality ranges are not universal defaults for this category. As a screening aid, an orthodox, storable seed lot may use a provisional QA moisture interval of 4–14 percent wet basis, but the interval is replaceable by the species-specific release specification; recalcitrant or intermediate seeds must use a species-specific moisture and viability protocol. FAO guidance distinguishes fleshy-fruit soaking and cleaning, dry-fruit drying and separation, and species that should not be dried for long storage (`fao-tree-seed-handling`; `fao-local-vegetable-seed-production`).

## 5. System Boundary

The default foreground boundary starts with a declared source seed or parental material and a prepared production unit, and ends when the accepted seed lot crosses the declared seed gate. It includes managed seed production, harvest, applicable extraction, primary drying and cleaning, grading, testing and lot release, optional seed treatment, packaging, and storage needed to reach the gate. It includes actual nutrient products and soil amendments, crop-protection products, irrigation and water withdrawal, field and processing energy, land occupation, direct managed-soil emissions where modelled, packaging, treatment products, quality testing, and documented rejects or residues. Transport is outside the boundary unless it is required to reach a delivered gate selected in the data package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | `source_seed_or_parental_material_and_prepared_production_unit` |
| starting_condition_role | identity_and_reproduction_condition |
| product_classification_scope | current CPC 3.0 `01360`, Fruit seeds; the PCR identity remains semantic and is not created from the classification leaf alone |
| recursive_input_rule | A same-category seed input that would recursively trace the product system is recorded as the declared source seed or parental-material starting condition, with lot identity, mass, treatment, and origin disclosure rather than a second recursive seed process. |
| upstream_dataset_requirement | Disclose the source lot or parental-material identity, lot or field origin, mass, seed class, treatment status, moisture basis, and evidence of the upstream boundary. If upstream burdens are included, link the upstream dataset explicitly and do not also treat the same source lot as a zero-burden starting condition. |
| disclosure | Declare the starting production-unit condition, land-use and infrastructure exclusions, annual or perennial period, route variant, intended outputs, quality-release state, gate, and all source-lot and reject fates. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_seed_gate` | all default datasets | Include source or parental seed, managed seed production, harvest, applicable extraction, drying and conditioning, grading/testing, optional treatment, packaging, and storage needed to reach the declared seed gate. Exclude downstream crop cultivation and post-gate distribution. | `fao-seed-production-manual`; `fao-seed-systems` |
| `boundary_route_variants` | annual, protected, orchard, seed-garden, fleshy-fruit, and dry-fruit routes | Select one or more evidenced route variants and disclose their changed topology, inventory categories, calculation requirements, or validation requirements. Do not combine mutually exclusive wet and dry extraction operations for a lot without a process record. | `fao-local-vegetable-seed-production`; `fao-tree-seed-handling` |
| `boundary_recursive_seed_input` | source seed and parental material | Use the declared starting-condition abstraction for a same-category input that would recurse. Preserve lot identity and disclose the upstream dataset requirement; do not silently assign the source lot a generic zero burden. | `fao-seed-systems`; `mass-balance-identity` |
| `boundary_input_completeness` | production, extraction, conditioning, and presentation | Provide a collected value, justified zero, or documented exclusion for actual nutrients and amendments, crop protection, irrigation, water withdrawal, field energy, land, extraction and conditioning energy, treatment, packaging, storage, direct emissions, and residues when they are in scope. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o`; `fao-seed-production-manual` |
| `boundary_output_fate` | all product, waste, and residue outputs | Separate accepted seed, seed-bearing fruit or pods, fruit flesh or pulp, downgraded seed, screenings, empty or damaged seed, crop residue, wash residue, dust, packaging waste, storage loss, and unexplained loss, and record a destination or documented boundary exit for each. | `fao-seed-production-manual`; `mass-balance-identity` |
| `boundary_quality_gate` | accepted reference flow | The product crosses the boundary only after the declared identity, seed class, moisture or viability state, physical purity, germination or viability result, treatment status, package state, and lot-release decision are available. | `oecd-seed-schemes`; `ista-international-rules` |

The automatic module plan selected managed biological production, harvest/capture, material treatment, primary conditioning, grading/sorting, preservation/stabilization, packaging/presentation, filling/dosing, chemical reaction, alternative production and technology routes, multi-output attribution, multi-period attribution, and rework/reject routing. Product-specific answers are supplied below; module files do not supply product facts, UUIDs, factors, or quantities.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fruit_seed_multiplication` | Managed fruit-seed multiplication | required | Include the production unit and management operations that generate the seed-bearing reproductive material. | foreground biological production | crop-cycle inputs and mature seed-bearing material |
| `fruit_seed_harvest_capture` | Harvest and capture of seed-bearing material | required | Include harvest or collection as a distinct node when removal from the production unit is separately recorded. | foreground harvest/capture | harvested seed-bearing material and field losses |
| `fleshy_seed_extraction` | Fleshy-fruit seed extraction | conditional | Include for fleshy fruits requiring maceration, soaking, fermentation, pulping, washing, or flotation before seed drying or conditioning. | alternative extraction and biochemical treatment | wet seed intermediate and pulp/residual streams |
| `dry_seed_extraction` | Dry-fruit or pod seed extraction | conditional | Include for pods, dry fruits, stones, or similar structures that require drying, threshing, shelling, or mechanical separation. | alternative extraction and material treatment | dry-extracted seed intermediate and husk/residual streams |
| `seed_drying_primary_conditioning` | Seed drying and primary conditioning | required | Include drying, cleaning, washing, winnowing, sieving, separation, or stabilization needed to create a prepared seed lot. | foreground conditioning | conditioned seed, screenings, and conditioning losses |
| `seed_grading_testing_lot_release` | Grading, testing, and lot release | required | Include classification into declared quality or destination states and the testing/release decision. | foreground grading and quality release | accepted, downgraded, rejected, and sample streams |
| `seed_treatment_packaging_storage` | Treatment, presentation, and storage | conditional | Include only when treatment, portioning, packaging, or storage is inside the declared gate. | foreground presentation and stabilization | packaged reference seed and storage losses |

Annual open-field, protected, orchard, and seed-garden production routes may coexist when their records are separated. A protected or controlled-pollination route is an alternative production or technology route only when it changes the process topology, inventory categories, calculation, data requirements, or validation; a label alone is insufficient. Fleshy-fruit extraction and dry-fruit extraction are mutually exclusive for a given lot unless separate lots are reconciled.

### Process: Managed fruit-seed multiplication (`fruit_seed_multiplication`)

#### Inputs

##### Product flows

###### Source seed or parental material (`source_seed_material`)

The declared source lot or parental material enters the multiplication process as the reproductive starting condition. It is not recursively expanded when it is in the same product category.

- Selected flow: fruit seed or parental reproductive material (unmapped; resolve the actual lot identity during foreground data generation)
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass at the declared starting condition, with moisture and treatment basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_seed_lot`
- Sources: `fao-seed-systems`
- Range: Provisional source-lot screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg source lot/kg accepted reference seed
  - Basis: broad first-pass interval across low-yield seed multiplication routes; replace with lot records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`fruit_seed_multiplication_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_management_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Provisional nutrient-product screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg product/kg accepted reference seed
  - Basis: broad first-pass interval across crop and perennial seed routes; replace with product and application records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products actually used (`crop_protection_products`)

Record each actual herbicide, insecticide, fungicide, biological product, or other crop-protection input when it is used in seed production. The product identity, formulation, active ingredient, dose, application, and fate are not inferred from a generic crop name.

- Selected flow: formulated crop-protection product (unmapped; resolve actual product identity from foreground records)
- Flow property / unit: Mass / kg product or kg active ingredient
- Amount rule: measured product mass and declared active-ingredient basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_management_inputs`
- Sources: `fao-seed-production-manual`

##### Waste flows

###### Crop residues and non-seed biomass leaving the production unit (`crop_residues`)

Record leaves, stems, fruit skins, uncollected reproductive material, and other non-seed biomass removed from or returned within the production unit. The fate must distinguish field return, composting, feed or other intended use, burning, treatment, and disposal.

- Selected flow: crop residue or non-seed biomass (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled residue mass on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `ipcc-2019-cropland`; `mass-balance-identity`

#### Outputs

##### Product flows

###### Mature seed-bearing fruit, pod, stone, or reproductive structure (`mature_seed_bearing_material`)

The multiplication process hands off the mature seed-bearing material to harvest/capture. The material may be a fleshy fruit, dry fruit, pod, stone, or another declared reproductive structure; it is not yet the reference seed lot.

- Selected flow: mature fruit seed-bearing material (unmapped; resolve species- and state-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured harvested-ready mass by production unit and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`
- Sources: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

##### Waste flows

###### Uncollected or field-lost seed-bearing material (`field_harvest_loss`)

Material that reaches maturity but is not collected as an intended output is recorded as a field loss or residue, with its fate and moisture basis.

- Selected flow: field-lost seed-bearing material (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled field-loss mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot`
- Sources: `mass-balance-identity`

##### Elementary flows

###### Direct managed-soil nitrous oxide (`field_nitrous_oxide`)

Include direct soil N2O only when the declared package models managed-soil emissions. Use the nutrient and residue records from this process and one declared, geographically applicable method tier.

- Selected flow: nitrous oxide to air, receiving medium and reported substance to be resolved (unmapped within applicable emission function)
- Flow property / unit: Mass / kg N2O or kg N2O-N as declared
- Amount rule: calculated with `calc_managed_soil_emissions` from actual nutrient and residue activity data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_context`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Ammonia to air from managed nutrient inputs (`field_ammonia_to_air`)

Record volatilized ammonia only when it is included by the selected method and supported by actual nutrient, soil, climate, and application records.

- Selected flow: ammonia to air (unmapped within applicable emission function)
- Flow property / unit: Mass / kg NH3-N or kg NH3 as declared
- Amount rule: calculated from declared nutrient inputs and the selected method factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_context`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Nitrate loss to water or soil (`field_nitrate_loss`)

Record nitrate leaching or runoff only when the selected method and field records support it, and retain the receiving compartment and reported substance.

- Selected flow: nitrate to water or soil (unmapped within applicable emission function)
- Flow property / unit: Mass / kg nitrate or kg N as declared
- Amount rule: calculated from actual nutrient, irrigation, soil, climate, and drainage or runoff records under the selected method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_context`
- Sources: `ipcc-2019-managed-soils-n2o`

### Process: Harvest and capture of seed-bearing material (`fruit_seed_harvest_capture`)

#### Inputs

##### Product flows

###### Mature seed-bearing material received for harvest (`mature_seed_bearing_material_for_harvest`)

This is the production hand-off into the distinct harvest/capture node. Its lot id and receiving mass must match the multiplication output record.

- Selected flow: mature fruit seed-bearing material (unmapped; resolve the same lot identity as the multiplication output)
- Flow property / unit: Mass / kg
- Amount rule: received mass linked to the production-unit and harvest-lot record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot`
- Sources: `mass-balance-identity`

###### Harvest and collection machinery fuel (`harvest_machinery_fuel`)

Record fuel used by harvest machinery, collection vehicles, or on-site handling equipment when it crosses the foreground boundary.

- Selected flow: mobile machinery fuel supply function (specific carrier identity unresolved)
- Flow property / unit: Energy or mass / kWh, MJ, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured fuel or carrier quantity by harvest lot and operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy`
- Sources: `ipcc-2019-cropland`

###### Harvest and collection electricity (`harvest_electricity`)

Record electricity for powered harvest, sorting at collection, elevators, fans, or on-site transfer when it belongs to this process.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered or supplier-recorded electricity by harvest lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy`
- Sources: `ipcc-2019-cropland`

#### Outputs

##### Product flows

###### Harvested seed-bearing material (`harvested_seed_bearing_material`)

Harvested material is handed to the applicable fleshy-fruit or dry-fruit extraction route, or directly to primary conditioning where no separate extraction is needed.

- Selected flow: harvested fruit seed-bearing material (unmapped; resolve species- and state-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: weighbridge, bin, crate, or lot record after tare subtraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`
- Sources: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### Intended fruit or pulp co-product at harvest (`harvested_fruit_co_product`)

When a seed-bearing fruit is intentionally sold or transferred for food, feed, processing, or another documented function, record that stream as an intended co-product rather than as waste. If the fruit has no documented recipient or function, classify the stream as residue or waste instead.

- Selected flow: intended fruit or pulp co-product (unmapped; resolve recipient-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured mass and documented recipient or downstream hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `fao-local-vegetable-seed-production`; `iso-14044-2006`

##### Waste flows

###### Harvest loss and damaged reproductive material (`harvested_material_loss`)

Separate material dropped, damaged, diseased, overripe, or otherwise rejected during harvest from the intended harvested material. Record treatment, return, recovery, or disposal.

- Selected flow: harvest loss or damaged reproductive material (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled harvest loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `mass-balance-identity`

###### Removed field residue at harvest (`harvest_removed_residue`)

Record stems, leaves, pods, fruit covers, and other non-seed material removed with the harvested lot when it leaves the production boundary.

- Selected flow: removed field residue (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass or a documented crop-residue balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `ipcc-2019-cropland`; `mass-balance-identity`

### Process: Fleshy-fruit seed extraction (`fleshy_seed_extraction`)

#### Inputs

##### Product flows

###### Harvested fleshy seed-bearing fruit (`harvested_fleshy_seed_material`)

Use this conditional route for fleshy fruits whose pulp must be softened, macerated, fermented, washed, or otherwise separated before the seed is dried or conditioned.

- Selected flow: harvested fleshy fruit containing seed (unmapped; resolve actual species and lot identity)
- Flow property / unit: Mass / kg
- Amount rule: received lot mass with moisture and receiving date
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### Extraction and washing water (`extraction_process_water`)

Record process water used for soaking, maceration, fermentation, washing, flotation, or rinsing only when it crosses the foreground boundary. Keep source withdrawal and discharge separate.

- Selected flow: process-water supply function (specific water identity unresolved)
- Flow property / unit: Mass / kg or volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered, batch-recorded, or supplier-recorded water use by extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`
- Range: Provisional extraction-water screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/kg accepted reference seed
  - Basis: broad first-pass interval across pulpy fruit extraction; replace with batch records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fleshy-fruit extraction electricity (`fleshy_extraction_electricity`)

Record electricity for pulping, agitation, pumps, separation, fans, and transfer when used by the wet extraction batch.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter or equipment log by extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `mass-balance-identity`

#### Outputs

##### Product flows

###### Wet extracted seed intermediate (`wet_seed_intermediate`)

The changed composition and physical state after pulp separation are recorded as a wet seed intermediate handed to drying or primary conditioning. Where fermentation is used, the residence time, inoculation or natural-fermentation condition, temperature, and termination criterion are collected; no default fermentation yield is prescribed.

- Selected flow: wet extracted fruit seed intermediate (unmapped; resolve species- and state-specific identity)
- Flow property / unit: Mass / kg and moisture percent
- Amount rule: batch mass and moisture after seed separation and before drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### Fruit pulp or edible flesh co-product (`fleshy_pulp_co_product`)

Record pulp or flesh as a co-product only when it has an intended use, recipient, quality basis, and hand-off. Otherwise route it to the residual or wastewater record and do not grant a co-product credit.

- Selected flow: fruit pulp or edible flesh co-product (unmapped; resolve recipient-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured separated mass and documented recipient or use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `fao-local-vegetable-seed-production`; `iso-14044-2006`

##### Waste flows

###### Floaters, empty seeds, and foreign material (`fleshy_extraction_rejects`)

Record floaters, empty or visibly damaged seeds, foreign material, and material discarded during flotation or manual separation. State whether it is reworked, downgraded, recovered, composted, treated, or discarded.

- Selected flow: extraction reject and foreign material (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: weighed reject stream or reconciled batch difference
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

###### Pulp, wash, and fermentation residual (`fleshy_extraction_residual`)

Residual pulp and wash solids that do not have a documented co-product function are recorded as waste with the selected treatment or boundary-exit destination.

- Selected flow: pulp, wash, or fermentation residual (unmapped; resolve waste identity and destination)
- Flow property / unit: Mass / kg
- Amount rule: measured residual mass, including retained moisture, with wastewater or solids split where available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

### Process: Dry-fruit or pod seed extraction (`dry_seed_extraction`)

#### Inputs

##### Product flows

###### Harvested dry fruit, pod, stone, or seed structure (`harvested_dry_seed_material`)

Use this conditional route for dry fruits, pods, stones, or similar structures that are dried, opened, threshed, shelled, or mechanically separated before primary conditioning.

- Selected flow: harvested dry fruit, pod, stone, or seed structure (unmapped; resolve actual species and lot identity)
- Flow property / unit: Mass / kg
- Amount rule: received lot mass and moisture or dry-state record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`; `fao-local-vegetable-seed-production`

###### Dry extraction electricity (`dry_extraction_electricity`)

Record electricity used by shelling, threshing, dehulling, tumbling, winnowing, conveying, or other independent dry extraction operations.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter or equipment log by dry extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

#### Outputs

##### Product flows

###### Dry-extracted seed intermediate (`dry_extracted_seed_intermediate`)

The separated dry seed intermediate is handed to primary conditioning. Its mass, moisture, and lot identity must reconcile to the received structure and residual streams.

- Selected flow: dry-extracted fruit seed intermediate (unmapped; resolve species- and state-specific identity)
- Flow property / unit: Mass / kg and moisture percent
- Amount rule: measured batch output mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

##### Waste flows

###### Pod, husk, shell, or fruit-cover residue (`dry_extraction_residue`)

Record the structural residue separated from the seed and its documented field return, co-product, treatment, or disposal fate.

- Selected flow: pod, husk, shell, or fruit-cover residue (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: weighed residual stream or reconciled dry-extraction balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

###### Empty, cracked, or damaged seed from dry separation (`dry_extraction_rejects`)

Record empty, cracked, damaged, or otherwise rejected seed separately from husk and structural residue. Rework or downgrade must be linked to the next process.

- Selected flow: empty, cracked, or damaged seed (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: weighed reject stream and quality disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

### Process: Seed drying and primary conditioning (`seed_drying_primary_conditioning`)

#### Inputs

##### Product flows

###### Raw or extracted seed for conditioning (`raw_seed_for_conditioning`)

This node receives wet extracted seed, dry-extracted seed, or a raw seed-bearing material when extraction was not separated. The selected state, moisture, and lot identity must be explicit.

- Selected flow: raw or extracted fruit seed (unmapped; resolve the upstream lot and state)
- Flow property / unit: Mass / kg and moisture percent
- Amount rule: receiving mass and moisture by conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-tree-seed-handling`; `fao-seed-production-manual`

###### Conditioning and washing water (`conditioning_process_water`)

Record water used for washing, rinsing, flotation, or conditioning only when it crosses this process boundary.

- Selected flow: process-water supply function (specific water identity unresolved)
- Flow property / unit: Mass / kg or volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: measured or batch-recorded water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-tree-seed-handling`

###### Conditioning electricity (`conditioning_electricity`)

Record electricity used by dryers, fans, screens, aspirators, graders, pumps, and conveyors in the conditioning node.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered or equipment-recorded electricity by conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-seed-drying-storage-2024`; `mass-balance-identity`
- Range: Provisional conditioning-electricity screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg accepted reference seed
  - Basis: broad first-pass interval across drying and cleaning technologies; replace with batch meter records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning stationary fuel or heat (`conditioning_stationary_fuel`)

Record natural gas, biomass, liquid fuel, purchased heat, or other actual carrier used for drying or conditioning. Do not force this card when no such input is used.

- Selected flow: stationary combustion fuel or process-heat supply function (specific carrier unresolved)
- Flow property / unit: Energy or mass / MJ, kWh, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: measured carrier quantity and heat-delivery record where applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-seed-drying-storage-2024`; `mass-balance-identity`

#### Outputs

##### Product flows

###### Conditioned seed lot (`conditioned_seed_lot`)

The prepared seed lot leaves primary conditioning with a declared moisture or recalcitrant state, cleanliness, and lot identity and enters grading/testing.

- Selected flow: conditioned fruit seed lot (unmapped; resolve species- and state-specific identity)
- Flow property / unit: Mass / kg and moisture percent
- Amount rule: measured output mass and quality-relevant moisture result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`

##### Waste flows

###### Screenings and foreign matter (`conditioning_screenings`)

Record weed seed, soil, fruit fragments, empty seed, and other material separated by sieving, winnowing, aspiration, or cleaning. A useful intended output requires a documented destination and function; otherwise it is waste.

- Selected flow: seed screenings and foreign matter (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: weighed screening fraction and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-seed-production-manual`; `mass-balance-identity`

###### Seed dust and fine conditioning residue (`conditioning_dust_residue`)

Record dust and fine residue removed from the product stream, including its containment, collection, and downstream fate.

- Selected flow: seed dust and fine conditioning residue (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured collection mass or documented reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-seed-production-manual`; `mass-balance-identity`

##### Elementary flows

###### Conditioning particulate emission to air (`conditioning_particulate_to_air`)

Record particulate emissions only when the conditioning equipment and measurement or selected emission method support them. Report particle or substance detail and receiving medium with the final resolved identity.

- Selected flow: particulate matter to air (reported substance and receiving medium unresolved)
- Flow property / unit: Mass / kg particulate matter
- Amount rule: measured or method-calculated particulate emission from conditioning operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_context`
- Sources: `fao-seed-production-manual`

### Process: Grading, testing, and lot release (`seed_grading_testing_lot_release`)

#### Inputs

##### Product flows

###### Conditioned seed received for grading (`conditioned_seed_for_grading`)

The conditioned lot enters grading and testing with a lot id, mass, moisture basis, and prior process release record.

- Selected flow: conditioned fruit seed lot (unmapped; resolve the same upstream lot identity)
- Flow property / unit: Mass / kg
- Amount rule: receiving mass linked to the conditioning batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quality_testing`
- Sources: `ista-international-rules`; `mass-balance-identity`

###### Grading and testing electricity (`quality_testing_electricity`)

Record electricity used for cleaning final passes, grading, sampling, laboratory testing, and lot-release activities when it is inside the declared boundary.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter or equipment log allocated to the tested lot or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_testing`
- Sources: `ista-international-rules`

#### Outputs

##### Product flows

###### Accepted seed lot before treatment or presentation (`accepted_seed_lot_before_presentation`)

This is the accepted sowing-seed state after grading and lot release. It is the reference-equivalent hand-off when no treatment, packaging, or storage is included in the declared boundary.

- Selected flow: accepted fruit seed lot for sowing (unmapped; resolve final species- and lot-specific identity)
- Flow property / unit: Mass / kg and declared moisture or viability basis
- Amount rule: net accepted mass after test samples, rejected seed, downgraded lots, and tare are separated
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quality_testing`
- Sources: `oecd-seed-schemes`; `ista-international-rules`; `mass-balance-identity`
- Range: Provisional storable-seed moisture QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 4
  - Upper: 14
  - Unit: percent wet basis
  - Basis: provisional screening interval for orthodox storable seeds only; replace with species-specific release specification and do not apply to recalcitrant seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded but intentionally transferred seed lot (`downgraded_seed_lot`)

Record a lower-grade or non-certified seed lot as an intended product only when it has a declared sowing use, recipient, quality state, and hand-off. Otherwise classify it as rejected seed or waste.

- Selected flow: downgraded fruit seed lot for declared sowing use (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured mass and documented downgrade decision
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_testing`
- Sources: `oecd-seed-schemes`; `iso-14044-2006`

##### Waste flows

###### Rejected seed and laboratory test samples (`rejected_seed_and_test_samples`)

Record rejected seed, retained samples, and non-returnable test material with their downstream path. A sample returned to the lot is not an additional output and must be reconciled once.

- Selected flow: rejected seed and test-sample material (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: weighed reject and sample mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_testing`
- Sources: `ista-international-rules`; `mass-balance-identity`

### Process: Treatment, presentation, and storage (`seed_treatment_packaging_storage`)

#### Inputs

##### Product flows

###### Accepted seed received for presentation (`accepted_seed_for_presentation`)

The accepted seed lot enters treatment, filling/portioning, packaging, and storage only when these activities are inside the declared gate.

- Selected flow: accepted fruit seed lot for sowing (unmapped; resolve the same lot identity as the quality-release output)
- Flow property / unit: Mass / kg
- Amount rule: received net accepted mass by lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `mass-balance-identity`

###### Seed-treatment product actually applied (`seed_treatment_product`)

Record each actual biological, chemical, coating, inoculant, or other treatment product applied to the lot. The card is conditional and does not require treatment when the lot is untreated.

- Selected flow: seed-treatment product (unmapped; resolve actual formulation and active-ingredient identity)
- Flow property / unit: Mass / kg product or declared treatment unit
- Amount rule: measured application quantity and active-ingredient or formulation basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-seed-production-manual`

###### Flexible package material (`flexible_package_material`)

Record flexible bags, films, sachets, labels integrated with flexible packaging, or equivalent packaging actually used for the seed lot.

- Selected flow: flexible-packaging function (specific material identity unresolved)
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: purchased or weighed package mass assigned to the lot; for reuse, apply `calc_reusable_packaging_mass`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-seed-production-manual`
- Range: Provisional packaging-material screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg package material/kg accepted reference seed
  - Basis: broad first-pass interval across small packets and bulk containers; replace with package records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rigid container material (`rigid_container_material`)

Record rigid jars, cans, buckets, or other rigid containers only when actually used.

- Selected flow: rigid-container-packaging function (specific material identity unresolved)
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- Amount rule: measured or supplier-recorded container mass assigned to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-seed-production-manual`

###### Carton or box material (`carton_box_material`)

Record cartons and boxes only when they are part of the declared product presentation or gate.

- Selected flow: carton-and-box-packaging function (specific material identity unresolved)
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- Amount rule: measured or supplier-recorded carton mass assigned to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-seed-production-manual`

###### Pallet or crate material (`pallet_crate_material`)

Record reusable or single-use pallets and crates only when they cross the declared gate boundary and are assigned to the seed lot.

- Selected flow: pallet-and-crate-packaging function (specific material identity unresolved)
- Flow property / unit: Mass / kg or item count
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: measured item count or mass with capacity and reuse record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-seed-production-manual`

###### Presentation and storage electricity (`presentation_storage_electricity`)

Record electricity for filling, sealing, labelling, ventilation, temperature or humidity control, and storage handling when included in the gate.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered electricity allocated to the lot or storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-seed-drying-storage-2024`; `fao-seed-production-manual`

#### Outputs

##### Product flows

###### Packaged or stored fruit seed reference flow (`fruit_seed_reference_flow`)

This is the reference product output when treatment, filling/portioning, packaging, or storage is included. When this process is omitted, `accepted_seed_lot_before_presentation` is the equivalent gate output.

- Selected flow: fruit seeds for sowing at the declared gate (unmapped; resolve final reference product identity)
- Flow property / unit: Mass / kg and declared moisture or viability basis
- Amount rule: net accepted packaged or stored seed mass after packaging tare and storage losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference amount of 1 kg net accepted seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-seed-production-manual`; `ista-international-rules`; `mass-balance-identity`

##### Waste flows

###### Packaging rejects and presentation waste (`packaging_rejects`)

Record off-spec packets, seal failures, labels, films, damaged containers, and other packaging waste. Reusable items returned to service are not end-of-use waste and must be linked to their reuse record.

- Selected flow: packaging rejects and presentation waste (unmapped; resolve material and destination identity)
- Flow property / unit: Mass / kg or item count
- Amount rule: weighed waste or reconciled item count and mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-seed-production-manual`; `mass-balance-identity`

###### Storage loss or viability-rejected seed (`storage_loss`)

Record mass lost, spoiled, infested, moisture-damaged, or rejected during the included storage period. A lot returned upstream for reconditioning is a rework loop, not a final waste output.

- Selected flow: storage loss or viability-rejected seed (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: opening inventory plus receipts minus accepted dispatch, closing inventory, and documented loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference seed
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`; `mass-balance-identity`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_process_subdivision` | shared production, harvest, extraction, conditioning, and storage burdens | Prefer process subdivision and direct lot records. Attribute operation-specific inputs and outputs directly to the seed lot whenever the records allow it. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_fruit_co_product` | edible fruit, pulp, flesh, or another intended co-product | First classify the stream as intended co-product, residue, or waste from recipient, function, quality, and hand-off evidence. If co-product allocation is necessary, use the declared physical or economic relationship selected by the data package, document the basis and sensitivity, and do not credit an undocumented use. | `iso-14044-2006`; `fao-local-vegetable-seed-production` |
| `allocation_seed_grade_outputs` | accepted and downgraded seed lots | Treat accepted and downgraded seed as separate intended outputs only when both have declared sowing functions and hand-offs. Allocate shared burdens using the declared physical, mass, or economic basis and keep rejected seed outside the accepted reference output. | `iso-14044-2006`; `oecd-seed-schemes` |
| `allocation_cross_period_mother_plants` | orchards, perennial mother plants, and multi-year seed gardens | Link establishment, productive, replacement, and termination events to reporting periods. Attribute shared perennial inputs to the seed outputs of the same declared period using a documented period basis; do not count establishment or termination burdens in more than one period. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_rejected_and_rework` | rejects, returns, reconditioning, and storage losses | Keep rejects and rework linked to their producing node. Retain burdens on material sent back for rework, add the rework operation once, and do not count reworked material as a second accepted output. Discarded material receives no product credit. | `fao-seed-production-manual`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot` | `fruit_seed_multiplication` | source seed or parental material | lot register, invoice, seed certificate, or internal transfer record | lot id; species; cultivar or line; class; supplier or origin; mass; moisture; treatment; date | transcribe primary lot record and verify against receipt | kg; percent; declared categorical fields | every source lot | each production cycle | each production unit and source lot | retain one record per source lot; aggregate only after identity reconciliation | lot record, label, certificate, receiving check |
| `cp_field_management_inputs` | `fruit_seed_multiplication` | nutrients, amendments, crop protection | purchase, application, and farm-management records | product; formulation; nutrient or active basis; quantity; date; area; method; lot; fate | reconcile purchase and application records to the production unit | kg product; kg nutrient or active ingredient; ha | every application | full crop cycle or perennial reporting period | each field, greenhouse, orchard block, or seed garden | sum actual applications by production unit and period | invoice, label, nutrient plan, application log |
| `cp_irrigation_and_withdrawal` | `fruit_seed_multiplication` | irrigation and water withdrawal | meter, pump log, source record, drainage or discharge record | source; meter start/end; delivered volume; recirculation; drainage; rainfall or other declared water; date | read meters and reconcile source withdrawal to delivery and discharge | m3 or kg | each irrigation event or monthly meter | full crop cycle or reporting period | each water source and production unit | aggregate by source and production unit; keep withdrawal and delivery separate | calibrated meter, pump log, water record |
| `cp_field_energy` | `fruit_seed_multiplication` | field energy | fuel issue, machine log, electricity meter, contractor invoice | operation; carrier; quantity; machine; area or lot; date; factor reference | collect primary carrier records and contractor activity data | L, kg, MJ, or kWh | every operation or monthly | full crop cycle or reporting period | each production unit and operation | allocate only documented operations to the seed route | meter, fuel issue, contractor record |
| `cp_land_and_period` | `fruit_seed_multiplication` | land occupation and periods | field register, map, lease, planting and removal records | area; production-unit id; land-use class; planting and termination dates; productive periods; replacement events | verify area and dates against field or orchard register | ha; m2; ha a; date | each planting, replacement, or termination event | full productive life for perennial units | each field, orchard block, greenhouse, or seed garden | calculate area-time by declared period and output basis | map, register, dated field record |
| `cp_harvest_lot` | `fruit_seed_harvest_capture` | harvest, field loss, residue, and hand-off | harvest sheet, weighbridge, bin or crate record, field-loss log | lot id; production unit; harvest date; gross and tare; mature material; loss; residue; co-product; destination | weigh or estimate with documented method at harvest | kg; percent moisture | every harvest or collection event | full harvest campaign | each production unit and lot | aggregate only after lot and moisture reconciliation | weighbridge, tare record, harvest log |
| `cp_extraction_batch` | `fleshy_seed_extraction` or `dry_seed_extraction` | extraction inputs, intermediates, rejects, and energy | batch sheet, equipment log, meter, moisture and residence-time record | input lot; route; method; water; energy; time; temperature where relevant; input/output mass; moisture; rejects; residuals; hand-off | record each extraction batch and link to lot ids | kg; m3; kWh; MJ; percent; hours or days | every batch | full extraction campaign | each extraction line and lot | reconcile each batch before campaign aggregation | batch sheet, meter, moisture test, equipment log |
| `cp_conditioning_batch` | `seed_drying_primary_conditioning` | drying, washing, cleaning, energy, output, and rejects | conditioning batch sheet, dryer or cleaner log, meter, moisture record | input lot; method; input/output mass; moisture; water; electricity; fuel or heat; screenings; dust; disposition | record each conditioning batch and verify output state | kg; m3; kWh; MJ; percent | every batch | full conditioning campaign | each line, facility, and lot | aggregate by lot and declared moisture basis | batch sheet, meter, moisture test, waste ticket |
| `cp_quality_testing` | `seed_grading_testing_lot_release` | grade, sample, testing, and release | laboratory report, sampling record, grade sheet, release decision | lot id; sample id; sample mass; purity; germination or viability; health; moisture; method; date; grade; disposition | use documented sampling and test methods and retain the release decision | kg; percent; categorical result | every lot and required retest | each lot and release period | each facility and laboratory | weight or reconcile lots only after test method and lot identity match | laboratory report, sampler record, certificate, release sign-off |
| `cp_treatment_packaging_storage` | `seed_treatment_packaging_storage` | treatment, package, storage, and presentation | treatment log, package specification, issue record, inventory ledger, storage log | lot id; treatment product and dose; package type and mass; fill count; reuse; opening and closing stock; temperature or humidity where relevant; loss; dispatch | reconcile treatment and packaging records to inventory movements and gate output | kg; item; kWh; percent; date; storage duration | every treatment, packaging run, inventory movement, or monthly storage record | included treatment and storage period | each facility, storage room, and lot | use lot-level reconciliation; allocate shared storage by documented mass-time basis | treatment record, package spec, meter, inventory ledger |
| `cp_co_product_and_residue_fate` | `fruit_seed_harvest_capture` or extraction/conditioning process | co-product, residue, reject, and waste destination | sales or transfer record, recipient confirmation, compost or disposal ticket | stream; mass; moisture; intended use; recipient; quality; hand-off; treatment; date | link the output stream to a durable destination record | kg; percent; categorical fate | every output stream | full production and processing campaign | each production unit and receiving destination | never aggregate distinct destinations without retaining stream identity | invoice, transfer note, waste ticket, recipient record |
| `cp_emission_context` | `fruit_seed_multiplication` or `seed_drying_primary_conditioning` | elementary emissions and method context | soil, climate, nutrient, drainage, emission, dust, and factor record | substance; receiving medium; soil; climate; nutrient input; residue fate; irrigation; drainage; method tier; factor; measurement; date | collect method inputs and calculated result with source and unit | kg substance; kg N; ha; m3; factor unit | each application, event, or reporting period | full crop cycle, batch, or period | each production unit and emission source | calculate once per declared method and reconcile to activity data | method sheet, laboratory or meter record, factor citation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground rows | `normalized amount = recorded or calculated amount × 1 kg / net accepted reference seed at the same gate and declared moisture basis` | process amount; net accepted reference seed; moisture basis | amount per 1 kg reference flow | `mass-balance-identity` |
| `calc_seed_dry_matter_conversion` | harvest, extraction, conditioning, storage, and delivery | `dry matter = as-received mass × (1 − moisture fraction)`; `mass at target basis = dry matter / (1 − target moisture fraction)`; use a species-specific rule or retain as-received mass for recalcitrant seed | as-received mass; measured moisture; declared target basis; recalcitrant status | comparable mass and moisture-basis conversion | `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_managed_soil_emissions` | field nutrient and residue emissions | Apply one selected IPCC or regionally accepted tier to actual mineral and organic nutrient inputs, residue returns, volatilization, leaching, soil, climate, and management context; convert reported N2O-N, NH3-N, or nitrate-N only once and retain the original basis. | nutrient records; residue fate; soil and climate; method tier and factors | declared elementary emissions by substance and receiving medium | `ipcc-2019-managed-soils-n2o` |
| `calc_land_occupation` | productive land | `area-time = production-unit area × declared occupation time`; normalize by `calc_reference_normalization`; for perennial units use the declared productive, replacement, and termination periods. | area; dates; production period; accepted seed output | ha a or m2 a per reference flow | `ipcc-2019-cropland`; `mass-balance-identity` |
| `calc_water_balance` | irrigation, extraction, conditioning, and discharge | Reconcile source withdrawal, delivered water, recirculation, evaporation, retained water, and discharge. Do not count source withdrawal and supplied process water as the same exchange. | source and process-water records; meter readings; discharge and recirculation | water inputs, withdrawal, and discharge by process | `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_extraction_yield` | fleshy and dry extraction | `extraction recovery = seed intermediate mass on declared basis / received seed-bearing material mass on the same basis`; retain co-products, residuals, rejects, and unexplained fraction separately. | input/output masses; moisture; co-product and reject records | recovery ratio and reconciled extraction outputs | `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_conditioning_yield` | primary conditioning | `conditioning recovery = conditioned seed mass / raw or extracted seed input mass` after moisture conversion; reconcile accepted seed, screenings, dust, rejects, moisture loss, and unexplained fraction. | conditioning input/output; moisture; screening and loss records | conditioning recovery and mass balance | `fao-seed-production-manual`; `mass-balance-identity` |
| `calc_quality_lot_aggregation` | lot release and campaign aggregation | Aggregate only lots with matching identity, route, moisture basis, test method, and declared quality class. Report mass-weighted quality values only when the test method permits; otherwise retain lot results separately. | lot mass; quality results; test method; lot identity | accepted lot set and quality disclosure | `ista-international-rules`; `oecd-seed-schemes` |
| `calc_co_product_attribution` | fruit, pulp, flesh, or other intended co-products | Prefer subdivision. When shared burdens remain, apply the declared physical or economic allocation basis to the evidenced intended outputs and disclose sensitivity; residues and wastes receive no co-product credit. | shared process burdens; output masses or values; intended-use evidence | attributed seed burden and co-product burden | `iso-14044-2006`; `fao-local-vegetable-seed-production` |
| `calc_period_attribution` | perennial orchards, mother plants, seed gardens, and multi-period storage | Link each input, asset, output, replacement, termination, and storage event to one period. Attribute shared burdens once to the declared output basis of that period and reconcile period opening and closing records. | period records; output; establishment/replacement/termination; storage records | period-attributed inventory and no-double-counting check | `iso-14044-2006`; `mass-balance-identity` |
| `calc_reusable_packaging_mass` | reusable packaging | `packaging mass per lot = package mass assigned to lot / documented service cycles`, adjusted only by the documented return or loss rate. If service cycles are unknown, report the full assigned mass and the uncertainty. | package mass; capacity; service cycles; return/loss rate; lot assignment | packaging mass per reference flow | `fao-seed-production-manual`; `mass-balance-identity` |
| `calc_storage_reconciliation` | included storage | `opening stock + receipts − accepted dispatch − closing stock = documented storage loss or rework return`, with moisture and lot identity reconciliation. | opening/closing inventory; receipts; dispatch; loss; rework records | storage loss and delivered reference amount | `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`; `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_lot_traceability` | reference flow and all product rows | Maintain species or plant identity, cultivar/line or hybrid status, seed class, lot id, production unit, route, and hand-off for every product state. Resolve all fixed UUIDs before final process publication. | `fao-seed-systems`; `ista-international-rules` |
| `dq_measurement_and_tare` | mass, water, energy, packaging, and emissions | Retain instrument, invoice, meter, tare, conversion factor, moisture method, unit, and uncertainty or estimation basis. Distinguish measured, calculated, modelled, and provisional values. | `mass-balance-identity`; `ista-international-rules` |
| `dq_temporal_and_period_coverage` | annual, perennial, storage, and campaign records | Cover the complete seed production cycle or declared reporting period, all harvest rounds, storage movements, replacements, terminations, and retests. Link each record to one period. | `iso-14044-2006`; `mass-balance-identity` |
| `dq_input_completeness` | production and processing inputs | Provide a collected value, justified zero, or documented exclusion for each actual nutrient/amendment, crop-protection product, water, energy carrier, land, treatment, packaging, and storage service. | `ipcc-2019-cropland`; `fao-seed-production-manual` |
| `dq_quality_release_evidence` | accepted, downgraded, rejected, and reference seed | Retain sampling plan, test method, sample date, physical purity, germination or viability, moisture, health/treatment state, grade, and release decision. | `ista-international-rules`; `oecd-seed-schemes` |
| `dq_co_product_and_fate_evidence` | intended co-products, residues, rejects, and wastes | Retain recipient, function, quality, mass, hand-off, and destination evidence. Do not treat an undocumented residue or rejected stream as a co-product. | `iso-14044-2006`; `fao-seed-production-manual` |
| `dq_flow_binding_coordinates` | all parameterized and unmapped flows | Preserve flow type, direction, coordinate, function, group, property, unit, use context, and geography. Resolve each parameterized Flow Set row and unmapped identity to one verified UUID during foreground generation. | `mass-balance-identity` |
| `dq_method_and_factor_provenance` | elementary emissions and conversions | Cite the selected method tier, factor, conversion basis, receiving medium, reported substance, and geography. Do not import a factor from a module or use a factor without source and applicability evidence. | `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland` |
| `dq_mass_balance_and_uncertainty` | field, extraction, conditioning, grading, packaging, and storage | Reconcile incoming, accepted, downgraded, co-product, waste, sample, moisture, and unexplained streams. Report the residual and uncertainty; do not silently force a zero residual. | `mass-balance-identity`; `fao-tree-seed-handling` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm the final species or plant identity, sowing purpose, lot qualifiers, mass property, unit, moisture or viability basis, and declared gate. A final TIDAS process must replace the unresolved reference identity with a verified UUID. | `fao-seed-systems`; `ista-international-rules` |
| `validation_scope` | dataset boundary | Confirm the dataset is fruit seed for sowing and does not silently include food fruit, commodity fruit, seedlings, transplants, grafted plants, downstream cultivation, or post-gate distribution. | `fao-seed-production-manual`; `fao-seed-systems` |
| `validation_route_choice` | process map | Confirm the selected annual/perennial and field/protected/orchard route, and select fleshy or dry extraction only from current lot evidence. A route delta must change topology, inventory, calculation, data, or validation, not only the label. | `fao-local-vegetable-seed-production`; `fao-tree-seed-handling` |
| `validation_process_map` | all processes | Confirm multiplication, harvest/capture, applicable extraction, conditioning, grading/testing, and included presentation/storage are distinct nodes with explicit product hand-offs. | `fao-seed-production-manual`; `fao-tree-seed-handling` |
| `validation_flow_binding` | all inventory rows | Accept only applicable parameterized Flow Sets or exact verified UUIDs in final foreground data. Match flow type, direction, coordinate, group, property, unit, function, use context, and geography; otherwise retain unmapped coverage and block final publication. | `mass-balance-identity` |
| `validation_nutrient_basis` | nutrient and soil-emission rows | Confirm only actually used products are present, with product mass, nutrient basis, application record, soil context, and one declared emission method. Do not force every fertilizer type. | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_land` | water and land rows | Keep irrigation product input, natural water withdrawal, process water, discharge, and land occupation distinct; verify meter or area-time records and prevent double counting. | `ipcc-2019-cropland`; `mass-balance-identity` |
| `validation_quality_release` | accepted and reference seed | Confirm identity, class, physical purity, germination or viability, moisture or recalcitrant state, health/treatment status, sampling method, test date, grade, and lot release. | `ista-international-rules`; `oecd-seed-schemes` |
| `validation_co_product_outputs` | fruit, pulp, flesh, and downgraded seed | Enumerate every intended output and hand-off. Apply allocation only when output function and recipient are evidenced; distinguish co-products from residues and waste. | `iso-14044-2006`; `fao-local-vegetable-seed-production` |
| `validation_period_attribution` | perennial or multi-period routes | Require period/phase boundaries, link inputs and outputs to one period, record establishment/replacement/termination treatment, and prevent double attribution. | `iso-14044-2006`; `mass-balance-identity` |
| `validation_reject_rework_paths` | rejects, downgraded seed, returns, and losses | Every rejected state must be reworked, downgraded, recovered, treated, or discarded with a declared path. Rework must link to the upstream node and cannot be counted as an accepted output twice. | `fao-seed-production-manual`; `mass-balance-identity` |
| `validation_mass_balance` | all process outputs | Reconcile production, harvest, extraction, conditioning, grading, packaging, and storage balances on the declared moisture basis and report any unexplained residual. | `mass-balance-identity`; `fao-tree-seed-handling` |
| `validation_storage_and_gate` | included storage and final gate | Verify opening and closing inventory, storage duration, loss or rework, final moisture/viability state, packaging state, and gate hand-off. | `fao-tree-seed-handling`; `fao-seed-drying-storage-2024` |
| `validation_dataset_disclosure` | published dataset profile | Confirm all qualifiers, source ids, Flow Set selections, UUID-resolution status, collection coverage, calculation rules, allocation choices, exclusions, quality evidence, and uncertainty are disclosed. | `ista-international-rules`; `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground secondary dataset for fruit-seed production and conditioning; it may be projected to a TIDAS `flow`, `process`, `lifecyclemodel`, and dataset package after all identities and exchanges are resolved. |
| downstream_use | Use as a seed-production and seed-gate dataset in agricultural, horticultural, forestry, nursery, and product-system models where the seed lot and gate qualifiers match. |
| allowed_use | Comparative or attributional modelling that preserves the declared functional unit, route, gate, quality attributes, moisture basis, period, allocation, and documented co-product and reject treatment. |
| excluded_use | Do not use as a generic fruit crop, fruit-processing, transplant, nursery-plant, or downstream cultivation dataset; do not transfer a route-specific factor or quality threshold to another species without evidence. |
| required_metadata | reference flow; CPC scope; crop or plant identity; cultivar/line or hybrid status; seed class; geography; production-unit type; annual/perennial period; extraction route; moisture or recalcitrant state; purity; germination/viability and test method; treatment; packaging; storage; gate; Flow Set selections; UUID status; collection coverage; allocation; and DQR |
| required_quality_disclosure | lot and production-unit coverage, temporal and period coverage, meters and measurement methods, quality-release evidence, calculation and emission methods, Flow Set coordinates, unresolved identities, fixed-UUID resolution status, exclusions, mass balances, co-product decisions, reject fates, uncertainty, and data-quality limitations |
| update_trigger | material change in crop or plant scope, seed class, production route, extraction technology, treatment, packaging, storage, gate, Flow Set contract, UUID identity, emission method, allocation decision, quality specification, or evidence coverage |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-production-manual` | official_guidance | FAO, Seed Production Manual, <https://coin.fao.org/coin-static/cms/media/16/13666518481740/seed_enterprises_enhacement_and_development_project_in_sierra_leone_mission_1_report_.pdf> | seed-lot identity, contamination prevention, processing, packaging, storage, reject and residue handling |
| `fao-seed-systems` | official_guidance | FAO, What are seed systems?, <https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/tools-guidelines/what-are-seed-systems/en/> | seed-system boundary, seed identity, source material, quality, and downstream seed use |
| `fao-local-vegetable-seed-production` | official_guidance | FAO, Home Garden Technology Leaflet 17: Seed Production, <https://www.fao.org/4/X3996E/x3996e41.htm> | fruit and vegetable seed selection, fleshy-fruit fermentation, drying, cleaning, storage, and intended seed production |
| `fao-tree-seed-handling` | official_guidance | FAO, Collection, Storage and Treatment of Tree Seeds, <https://www.fao.org/4/ad226e/AD226E05.htm> | fleshy and dry fruit extraction, soaking, flotation, cleaning, drying, recalcitrant-seed exceptions, and storage |
| `fao-seed-drying-storage-2024` | official_guidance | Groot, Gudinchet and Klaedtke, Practical Guide for drying and storing vegetable seeds in organic small-scale and on-farm seed production, FAO/LiveSeeding, 2024, <https://orgprints.org/id/eprint/52128/2/LiveSeeding_HandBook_SeedDryingAndStorage_050524_final-EN.pdf> | drying, storage, viability, and data-collection questions for vegetable seed lots |
| `oecd-seed-schemes` | official_guidance | OECD, Seeds and OECD Seed Schemes, <https://www.oecd.org/en/topics/seeds.html> | varietal identity, purity, field inspection, certification, and seed-lot quality governance |
| `ista-international-rules` | standard | International Seed Testing Association, International Rules for Seed Testing, 2026, <https://www.seedtest.org/en/publications/international-rules-seed-testing.html> | sampling, purity, germination, seed-health testing, moisture methods, and reporting consistency |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, <https://www.iso.org/standard/38498.html> | functional-unit consistency, allocation hierarchy, co-product treatment, and disclosure |
| `ipcc-2019-cropland` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | crop-management, land, residue, and agricultural activity-data method context |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Chapter 11 N2O and CO2 emissions from managed soils, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | nutrient, residue, volatilization, leaching, and managed-soil emission method selection |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for production, extraction, conditioning, quality release, packaging, storage, rejects, losses, and reference-flow reconciliation. | normalization, yield, allocation, output reconciliation, and QA guardrails |
