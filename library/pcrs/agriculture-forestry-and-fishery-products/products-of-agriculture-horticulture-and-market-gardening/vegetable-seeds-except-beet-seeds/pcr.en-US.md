---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetable-seeds-except-beet-seeds
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.zh-CN.md
---

# Vegetable seeds, except beet seeds

## 1. Scope and Applicability

This PCR covers vegetable seed lots produced for agricultural or horticultural sowing, except beet seed. The foreground route begins with the planting seed or parent material used to establish one seed crop and ends at the declared seed release gate after harvest, seed extraction or threshing, drying, cleaning, grading, quality testing, optional treatment or pelleting, packaging, and any included pre-gate storage. It applies to open-field and protected seed crops, self-pollinated, cross-pollinated, hybrid and open-pollinated routes, and untreated, chemically treated, coated, encrusted, or pelleted lots.

The lot is identified at species and variety or hybrid level. For fleshy-fruited or mucilaginous vegetables, wet extraction or fermentation is included when it occurs before the release gate. Field isolation, roguing, pollination management, disease control, harvest maturity, and seed-bearing organ handling are included when attributable to the declared lot. The PCR does not impose one agronomic recipe or one legal certification system; the applicable national or market scheme and the actual lot state must be disclosed.

Beet seed, vegetative planting material (including seedlings, bulbs, tubers, roots, cuttings, and grafts), ornamental seed, food or feed grain, edible vegetable products, breeder or genebank research material that is not prepared as a market seed lot, machinery and building manufacture, land-use change, post-release distribution, retail, planting, and vegetable crop production from the released seed are outside the default boundary. A lot rejected for sowing remains a waste or diverted product output until its documented destination is known.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetable-seeds-except-beet-seeds |
| classification_refs | CPC 3.0 01260 — Vegetable seeds, except beet seeds |
| covered_products | Market-ready seed lots of vegetable species other than beet, including open-pollinated and hybrid seed and untreated, treated, coated, encrusted, or pelleted seed, with declared species, variety or hybrid, seed class, moisture, physical purity, germination or viability, health, lot, and packaging state |
| excluded_products | Beet seed; seedlings, transplants, bulbs, tubers, roots, cuttings, grafts, ornamental seed, food or feed grain, edible vegetables, breeder or genebank material not released as a seed lot, and post-release crop production or distribution |
| representative_product | 1 kg of one declared vegetable species and variety or hybrid in a released seed lot, with a documented seed class, moisture, purity, germination or viability, treatment state, lot identity, and gate |
| production_route | Planting seed or parent stock → field establishment and isolation → roguing, pollination, crop management, and maturation → harvest and seed extraction or threshing → drying, cleaning, and grading → optional treatment, coating, or pelleting → testing, packaging, pre-gate storage, and lot release |
| market_state | Released vegetable seed at the declared farm, processor, or dispatch gate, in bulk or sealed packaging, with species and variety or hybrid identity, lot traceability, quality results, treatment declaration, net quantity, moisture basis, and intended sowing use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Market-ready vegetable seed, except beet seed, at the declared release gate |
| How much | 1 kg net accepted seed |
| How well | Declared species; variety or hybrid; seed class and generation; untreated, treated, coated, encrusted, or pelleted state; moisture basis; analytical purity; germination or viability; health or phytosanitary status; lot identity; packaging state; geography; and release gate |
| How long or cycle | One complete seed crop multiplication cycle plus attributable harvest, extraction, conditioning, testing, packaging, and pre-gate storage; storage duration is declared when included |
| reference_flow_link | `vegetable_seed_release_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Vegetable seed, except beet seed, market-ready lot |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | Species; variety or hybrid and parent-line role where relevant; seed class and generation; production geography; crop cycle; pollination and isolation route; seed-bearing organ; harvested and accepted mass; moisture basis; analytical purity; germination or viability; health status; treatment, coating, encrusting, or pelleting; packaging; storage duration; lot identifier; intended sowing use; and declared release gate |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, lot certificate, or an equivalent data-package field. The reference amount is net accepted seed; rejected lots and conditioning losses are not silently included in that amount.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and released lot | Mass | kg | Report the accepted released seed on a declared as-received moisture basis. If the source record is a seed count, convert with measured thousand-seed weight or a transparent lot-specific count-to-mass record. |
| `moisture_basis` | seed-bearing material, raw seed, conditioned seed, and released seed | Mass and moisture content | kg and % | Retain as-received mass, moisture measurement, and any dry or standard-moisture conversion. Do not mix wet extraction, drying, or packaging records on incompatible moisture bases. |
| `field_to_lot_normalization` | field activities and harvest outputs | Area and mass | ha and kg | Normalize crop-cycle field totals by accepted released seed from the same species, variety or hybrid, geography, and production cycle before scaling to the 1 kg reference flow. |
| `seed_quality_attributes` | released lot | Germination or viability, purity, and seed health | % or test-specific unit | Preserve the test method, sample date, lot identifier, and result for germination or viability, analytical purity, other-seed content, and health claims; do not replace a missing test with a generic category value. |
| `treatment_basis` | treatment, coating, encrusting, or pelleting inputs | Product mass and active or carrier mass | kg product and kg active or carrier | Record the actual formulation, application rate, active ingredients or coating carrier, and treated seed mass separately; disclose whether treatment is included in the released product state. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Planting seed, parent line, or source stock and the field or protected-crop unit at the start of one declared seed multiplication cycle; purchased management inputs cross the foreground boundary |
| starting_condition_role | Start of vegetable seed crop establishment and multiplication |
| product_classification_scope | Vegetable seed lots for agricultural or horticultural sowing, except beet seed; CPC 01260 is mapping context and does not replace species, variety, or product-state identity |
| recursive_input_rule | Planting seed or parent stock that is itself a vegetable seed is recorded as a separate upstream product input with its species, variety or hybrid, class, quantity, and source. It is never netted against the released seed output or linked back to the same lot as a closed loop. |
| upstream_dataset_requirement | Use compatible upstream datasets for planting or parent seed, fertilizer and soil-amendment products, crop-protection products, irrigation or process water, fuels, electricity and process heat, treatment or coating products, packaging, purchased transport, and waste or wastewater services when those inputs cross the boundary. |
| disclosure | Declare species, variety or hybrid, parent-line role, seed class and generation, geography, protected or open-field route, isolation and pollination practice, field area, crop dates, harvest and extraction route, yield, moisture, purity, germination or viability, health tests, treatment and packaging state, storage duration, gate, output fates, and identity evidence gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_seed_multiplication_cycle` | field establishment and management | Include attributable planting, isolation, roguing, pollination, nutrient and crop-protection management, irrigation, fuel and direct field emissions for the declared seed crop cycle. Exclude variety breeding, parent maintenance, and unrelated infrastructure unless they are explicitly assigned to the lot. | `fao-seed-systems`; `oecd-seed-schemes`; `ipcc-2019-managed-soils-n2o` |
| `boundary_harvest_to_release` | harvest, extraction, conditioning, treatment, and release | Include harvest, seed extraction or threshing, drying, cleaning, grading, testing, treatment, coating, pelleting, packaging, handling, and pre-gate storage that occur before the declared release gate. Include each operation only once even when a contractor record embeds upstream energy. | `fao-seed-processing-manual`; `fao-vegetable-seed-drying-storage`; `eu-vegetable-seed-directive` |
| `boundary_wet_extraction` | fleshy-fruited or mucilaginous seed routes | Include wet extraction, fermentation, wash water, wastewater, and treatment or discharge when they occur before release; record zero or not applicable only with a route declaration showing that dry extraction is used. | `fao-seed-processing-manual`; `mass-balance-identity` |
| `boundary_post_release_exclusion` | downstream activities | Exclude post-release distribution, retail, sowing, vegetable crop cultivation, consumer use, seed end-of-life, machinery and building manufacture, and land-use change unless a separate study scope explicitly adds them. | `eu-vegetable-seed-directive` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `vegetable_seed_field_multiplication` | Vegetable seed crop establishment and field multiplication | required | always | establish, isolate, manage, pollinate, and mature the declared vegetable seed crop | crop-cycle field area, management inputs, and harvested seed-bearing material |
| `vegetable_seed_harvest_and_extraction` | Vegetable seed harvest and seed extraction | required | always | harvest mature seed-bearing organs and separate seed from fruit, pod, capsule, inflorescence, or other carrier | incoming harvested material, raw extracted seed, residues, water, energy, and wastewater |
| `vegetable_seed_conditioning_and_grading` | Vegetable seed drying, cleaning, grading, and quality release | required | always for a released lot; individual drying, wet-cleaning, or grading steps may be zero or not applicable when the lot route documents that state | prepare raw seed for testing and release by moisture control, cleaning, grading, sampling, and quality checks | raw seed input and conditioned seed output on a declared moisture basis |
| `vegetable_seed_treatment_packaging_and_storage` | Vegetable seed treatment, packaging, storage, and release | conditional | treatment, coating, pelleting, packaging, or pre-gate storage occurs before the declared release gate | apply declared product treatment or physical enhancement and deliver a traceable released lot | conditioned seed, treatment and packaging materials, storage energy, and released seed |

### Process: Vegetable seed crop establishment and field multiplication (`vegetable_seed_field_multiplication`)

#### Inputs

##### Product flows

###### Planting seed or parent stock (`planting_seed_input`)

Record the seed, parent line, or source stock used to establish the declared vegetable seed crop. Preserve its species, variety or hybrid, seed class, generation, and source rather than treating it as generic grain.

- Selected flow: Planting seed or parent stock for vegetable seed multiplication
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass or count converted with lot-specific thousand-seed weight
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_field_activity_records`
- Sources:
- Range: Provisional planting-seed screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 150
  - Unit: kg/ha
  - Basis: broad first-pass range across small-seeded vegetable crops, seed-bearing fruit crops, and parent-line multiplication; replace with species and establishment evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`vegetable_seed_field_multiplication_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_field_activity_records`
- Sources:
- Range: Provisional nutrient-product screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg product/ha
  - Basis: one seed-crop cycle; the actual product ledger and nutrient basis govern
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water_input`)

Record applied irrigation by field and crop cycle. Rain-fed lots record zero only when the water balance or field record supports no applied irrigation.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: meter or validated application estimate by field and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_field_activity_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Provisional irrigation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8,000
  - Unit: m3/ha
  - Basis: one crop cycle; replace with local crop-water balance and irrigation records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel for field operations (`field_fuel_input`)

Record fuel used by tractors, harvest equipment, pumps, and other mobile machinery assigned to the seed crop. Contractor fuel is included when the activity crosses the boundary and is not already embedded in a supplied service dataset.

- Selected flow: Mobile machinery fuel for field operations
- Flow property / unit: Mass or energy carrier / L, kg, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: tank record, invoice, fuel-meter record, or contractor activity converted to the declared carrier basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_seed_field_activity_records`
- Sources:
- Range: Provisional field-fuel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L/ha
  - Basis: one crop cycle and all attributable field operations
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products used (`crop_protection_input`)

Record each crop-protection formulation used for the seed crop, including active ingredient, formulation, rate, application method, and any seed-health or pollination restrictions. The identity requires foreground binding before publication.

- Selected flow: Crop-protection formulation used in vegetable seed multiplication
- Flow property / unit: Mass of formulation and active substance / kg product; kg active substance
- Amount rule: sum actual formulated-product applications by field and crop cycle, preserving active-ingredient and formulation identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_field_activity_records`
- Sources:
- Range: Provisional crop-protection screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg formulation/ha
  - Basis: one crop cycle; replace with the crop-protection program and product ledger
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Agricultural land occupation (`field_land_occupation`)

Record the field or protected-crop area and the time occupied by the declared seed crop. Report protected structures or perennial infrastructure separately when they are intentionally included in the study scope.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha·crop cycle
- Amount rule: field or protected-crop area multiplied by the declared occupation period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_field_activity_records`
- Sources: `fao-seed-systems`
- Range: Provisional land-occupation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0001
  - Upper: 2
  - Unit: ha·crop cycle/kg released seed
  - Basis: broad first-pass range across species and seed yield; replace with measured area and accepted lot mass
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvested seed-bearing material (`harvested_seed_bearing_material`)

Record the mature pods, fruits, capsules, umbels, heads, or other seed-bearing material leaving field production for the extraction process. Declare whether any edible or marketable co-product is removed at harvest.

- Selected flow: Harvested vegetable seed-bearing material before extraction
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass on a declared moisture basis, with seed-bearing organ and harvest maturity recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_field_output_records`
- Sources:
- Range: Provisional harvested-material screening estimate
  - Range role: Typical range (`typical_range`)
  - Lower: 100
  - Upper: 100,000
  - Unit: kg/ha
  - Basis: broad range spanning dry pods and seed-bearing fleshy fruit; replace with measured crop and route data
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residues and non-harvested biomass (`field_residue_output`)

Record plant residues left in the field, removed for a documented use, composted, burned, or sent to waste treatment. Do not treat residues as a co-product without a positive destination and hand-off.

- Selected flow: Vegetable seed-crop field residues and non-harvested biomass
- Flow property / unit: Mass / kg dry or as-received basis, with basis declared
- Amount rule: measured or calculated residue mass by destination and moisture basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_seed_field_output_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Provisional field-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100,000
  - Unit: kg/ha
  - Basis: all declared field residue destinations on a common moisture basis
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide from managed seed-crop soil (`field_n2o_emission`)

Record direct and indirect soil nitrous-oxide emissions only from a declared geographically applicable method using the nutrient, residue, soil, water, and climate records for the same crop cycle.

- Selected flow: Nitrous oxide emission to air from managed soil
- Flow property / unit: Mass / kg N2O or kg N2O-N
- Amount rule: calculate from fertilizer and amendment nitrogen, residue nitrogen, and applicable direct or indirect pathways; report the factor set and basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_seed_field_emission_activity`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Provisional soil-N2O screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha
  - Basis: one crop cycle and declared nitrogen input; replace with selected regional method
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia from seed-crop nutrient management (`field_ammonia_emission`)

Record ammonia volatilization when the selected method and nitrogen application records support it. Keep product form, application method, timing, and receiving medium in the foreground record.

- Selected flow: Ammonia emission to air from seed-crop nutrient management
- Flow property / unit: Mass / kg NH3
- Amount rule: calculate by nitrogen source, application method, timing, and applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_seed_field_emission_activity`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Provisional ammonia screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg NH3/ha
  - Basis: one crop cycle and declared nitrogen input; replace with a geographically applicable ammonia method
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate loss to water from the seed crop (`field_nitrate_emission`)

Record nitrate leaching or runoff only when supported by a monitored balance, an applicable model, or a reviewed inventory method. Keep the water pathway and receiving medium explicit.

- Selected flow: Nitrate emission to water from seed-crop field
- Flow property / unit: Mass / kg nitrate or kg N as nitrate
- Amount rule: calculate from nitrogen inputs, soil and water conditions, drainage or runoff, and the selected method; do not infer a loss from fertilizer mass alone
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and converted to 1 kg released seed
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_seed_field_emission_activity`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Provisional nitrate-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg nitrate/ha
  - Basis: one crop cycle; replace with site water-balance or regional leaching method
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Vegetable seed harvest and seed extraction (`vegetable_seed_harvest_and_extraction`)

#### Inputs

##### Product flows

###### Harvested seed-bearing material entering extraction (`harvested_material_extraction_input`)

Record the harvested material transferred from field production into threshing, pod opening, fruit maceration, fermentation, or another seed-extraction operation. Match its lot and moisture basis to the field output record.

- Selected flow: Harvested vegetable seed-bearing material before extraction
- Flow property / unit: Mass / kg
- Amount rule: measured incoming mass matched to field, harvest date, seed-bearing organ, and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per extraction batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_extraction_records`
- Sources: `fao-seed-processing-manual`
- Range: Provisional extraction-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 100,000
  - Unit: kg/1 kg released seed
  - Basis: broad route-dependent ratio; replace with matched batch records and common moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water supplied for wet extraction (`wet_extraction_water_input`)

Record wash, maceration, fermentation, or separation water only when the species and route require wet extraction before conditioning. Dry extraction records zero or not applicable with a route declaration.

- Selected flow: Process water for wet seed extraction
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter or batch record for water added to wet extraction and washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per extraction batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_extraction_records`
- Sources: `fao-seed-processing-manual`
- Range: Provisional wet-extraction water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: m3/1,000 kg incoming seed-bearing material
  - Basis: wet routes only; replace with species and equipment records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Extraction aids or washing agents (`extraction_aid_input`)

Record acids, salts, enzymes, sanitizers, or other extraction aids when they cross the foreground boundary. Preserve the formulation, active substance, and whether it is retained on seed or discharged with wastewater.

- Selected flow: Extraction aid or washing agent for vegetable seed recovery
- Flow property / unit: Mass of formulation / kg
- Amount rule: measured product mass by extraction batch and formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per extraction batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_extraction_records`
- Sources:
- Range: Provisional extraction-aid screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg incoming seed-bearing material
  - Basis: wet extraction routes only; replace with formulation and batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for harvest and extraction (`extraction_electricity_input`)

Record electricity for threshing, shelling, maceration, separation, pumping, and extraction equipment that occurs before the conditioning process.

- Selected flow: Electricity supply for seed harvest and extraction
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter record or equipment power multiplied by verified operating time, matched to extraction batches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per extraction batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_extraction_records`
- Sources:
- Range: Provisional extraction-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kWh/1,000 kg incoming seed-bearing material
  - Basis: extraction batch; replace with meter and equipment records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Raw extracted vegetable seed (`raw_extracted_seed_output`)

Record seed separated from the seed-bearing organ before final drying, cleaning, and grading. Identify the lot, species, variety or hybrid, and moisture state.

- Selected flow: Raw extracted vegetable seed before conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured recovered seed mass on a declared as-received moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per extraction batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_extraction_records`
- Sources:
- Range: Provisional raw-seed recovery screening estimate
  - Range role: Typical range (`typical_range`)
  - Lower: 0.1
  - Upper: 500
  - Unit: kg/1,000 kg incoming seed-bearing material
  - Basis: broad range across dry-pod and fleshy-fruit extraction routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Non-seed extraction residue (`extraction_residue_output`)

Record fruit flesh, pods, husks, pulp, fermentation solids, and other non-seed material by destination. A saleable agricultural co-product requires a documented recipient, use, and hand-off.

- Selected flow: Non-seed material from vegetable seed extraction
- Flow property / unit: Mass / kg on a declared moisture basis
- Amount rule: measured residue mass by material class and destination, reconciled to incoming and recovered seed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per extraction batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_extraction_records`
- Sources: `mass-balance-identity`
- Range: Provisional extraction-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 999
  - Unit: kg/1,000 kg incoming seed-bearing material
  - Basis: material remaining after recovered seed and documented useful outputs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater from wet extraction (`extraction_wastewater_output`)

Record wastewater from fermentation, washing, and separation when it leaves the extraction boundary. Declare treatment, discharge, reuse, or storage fate.

- Selected flow: Wastewater from wet vegetable seed extraction
- Flow property / unit: Volume / m3
- Amount rule: measured discharge or water-balance estimate, with suspended solids and treatment or discharge route recorded where available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per extraction batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_extraction_records`
- Sources: `mass-balance-identity`
- Range: Provisional extraction-wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: m3/1,000 kg incoming seed-bearing material
  - Basis: wet extraction routes only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Particulate matter from extraction handling (`extraction_particulate_emission`)

Record dust or particulate released from dry threshing, shelling, conveying, or extraction handling when it crosses the boundary; retain the species, particle or method basis, and capture system.

- Selected flow: Particulate matter emission to ambient air from seed extraction
- Flow property / unit: Mass / kg particulate matter
- Amount rule: measured, captured-mass balance, or method-calculated particulate release with the selected particle basis disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per extraction batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_extraction_records`
- Sources:
- Range: Provisional extraction-particulate screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/1,000 kg incoming seed-bearing material
  - Basis: dry handling and extraction operations; replace with capture or emission records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Vegetable seed drying, cleaning, grading, and quality release (`vegetable_seed_conditioning_and_grading`)

#### Inputs

##### Product flows

###### Raw extracted seed entering conditioning (`raw_seed_conditioning_input`)

Record the raw seed received by the conditioning line, including moisture, contamination, lot identity, and any pre-cleaning or temporary holding state.

- Selected flow: Raw extracted vegetable seed before conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured incoming seed mass and moisture for each conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seed-processing-manual`
- Range: Provisional conditioning-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 2,000
  - Unit: kg/1,000 kg accepted conditioned seed
  - Basis: incoming mass on a declared moisture basis; replace with matched batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for seed conditioning (`conditioning_electricity_input`)

Record electricity for pre-cleaning, air-screen cleaning, aspiration, separation, conveying, drying fans, grading, and testing equipment.

- Selected flow: Electricity supply for vegetable seed conditioning
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter record or equipment power multiplied by verified operating time and matched to processed mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seed-processing-manual`
- Range: Provisional conditioning-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kWh/1,000 kg accepted conditioned seed
  - Basis: cleaning, grading, fans, conveying, testing, and attributable drying equipment
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delivered process heat for seed drying (`conditioning_heat_input`)

Record supplied heat for drying when the site receives a heat service or a measured delivered-heat stream. Declare carrier, inlet and outlet conditions, and moisture reduction.

- Selected flow: Purchased process heat for seed drying
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `purchased-process-heat`
- Amount rule: measured delivered heat or validated heat balance for the drying batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seed-processing-manual`; `fao-vegetable-seed-drying-storage`
- Range: Provisional drying-heat screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5,000
  - Unit: MJ/1,000 kg accepted conditioned seed
  - Basis: heat delivered to remove measured moisture; replace with equipment and batch energy records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Stationary fuel for seed drying (`conditioning_fuel_input`)

Record fuel burned in a stationary dryer or boiler when heat is generated inside the conditioning boundary. Do not duplicate fuel already represented as delivered process heat.

- Selected flow: Stationary-combustion fuel for seed drying
- Flow property / unit: Mass or energy carrier / kg, L, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: fuel meter, tank record, or invoice matched to drying batches and converted to the declared carrier basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Provisional drying-fuel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: L/1,000 kg accepted conditioned seed
  - Basis: onsite drying fuel only; replace with carrier and meter records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water supplied for conditioning (`conditioning_water_input`)

Record water for wet cleaning, de-mucilaging, or other conditioning steps only when the route uses it. Dry conditioning records zero or not applicable with the route and equipment declared.

- Selected flow: Process water for vegetable seed conditioning
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter or batch water record matched to the conditioning line and wastewater fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seed-processing-manual`
- Range: Provisional conditioning-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: m3/1,000 kg accepted conditioned seed
  - Basis: wet conditioning routes only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conditioned and graded seed (`conditioned_seed_output`)

Record accepted seed after moisture adjustment, cleaning, grading, and pre-release sampling, before optional treatment, coating, pelleting, or final packaging.

- Selected flow: Conditioned and graded vegetable seed before treatment or packaging
- Flow property / unit: Mass / kg
- Amount rule: measured accepted seed mass, moisture, grade, and lot identity after conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seed-processing-manual`; `ista-seed-testing-rules`
- Range: Provisional conditioned-seed recovery screening estimate
  - Range role: Typical range (`typical_range`)
  - Lower: 700
  - Upper: 1,000
  - Unit: kg/1,000 kg incoming raw seed
  - Basis: accepted conditioned seed after moisture adjustment and removal of foreign matter; replace with batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Seed screenings and off-grade material (`conditioning_screenings_output`)

Record weed seed, other-crop seed, inert material, undersize, damaged seed, and other screenings by material class and destination. A useful co-product requires documented positive use and hand-off.

- Selected flow: Seed-conditioning screenings and off-grade material
- Flow property / unit: Mass / kg on a declared moisture basis
- Amount rule: measured screening and off-grade mass by material class and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-seed-processing-manual`; `mass-balance-identity`
- Range: Provisional conditioning-screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg incoming raw seed
  - Basis: removed foreign matter and nonconforming seed on a declared moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning wastewater (`conditioning_wastewater_output`)

Record wastewater generated by wet cleaning or de-mucilaging and its treatment, discharge, reuse, or storage fate. Dry routes record zero or not applicable with evidence of the route.

- Selected flow: Wastewater from vegetable seed conditioning
- Flow property / unit: Volume / m3
- Amount rule: measured discharge or water-balance estimate matched to conditioning batches and treatment or discharge records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `mass-balance-identity`
- Range: Provisional conditioning-wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: m3/1,000 kg accepted conditioned seed
  - Basis: wet conditioning routes only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Particulate matter from conditioning (`conditioning_particulate_emission`)

Record dust released from aspiration, screens, conveyors, dryers, and grading equipment after capture controls, retaining the particle or method basis and capture fate.

- Selected flow: Particulate matter emission to ambient air from seed conditioning
- Flow property / unit: Mass / kg particulate matter
- Amount rule: measured, captured-mass balance, or method-calculated particulate release with capture and receiving medium disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Provisional conditioning-particulate screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/1,000 kg accepted conditioned seed
  - Basis: dry cleaning, aspiration, drying, and grading operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Vegetable seed treatment, packaging, storage, and release (`vegetable_seed_treatment_packaging_and_storage`)

#### Inputs

##### Product flows

###### Conditioned seed entering final preparation (`conditioned_seed_treatment_input`)

Record the accepted conditioned seed transferred into treatment, coating, pelleting, packaging, or pre-gate storage. Match the lot, moisture, grade, and quality status to the conditioning output.

- Selected flow: Conditioned and graded vegetable seed before final preparation
- Flow property / unit: Mass / kg
- Amount rule: measured incoming seed mass by lot and treatment or packaging batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final-preparation batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_records`
- Sources: `fao-seed-processing-manual`
- Range: Provisional final-preparation input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 1,100
  - Unit: kg/1,000 kg released seed
  - Basis: incoming conditioned seed before product additions, packaging, and documented losses
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Seed-treatment formulation (`seed_treatment_input`)

Record chemical or biological treatment applied to seed only when the declared product state includes that treatment. Preserve formulation, active ingredients, carrier, dose, application equipment, and treatment lot.

- Selected flow: Seed-treatment formulation for vegetable seed
- Flow property / unit: Mass of formulation and active substance / kg product; kg active substance
- Amount rule: measured formulation mass per treated seed mass, with active or biological component identity retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treatment batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_records`
- Sources: `eu-vegetable-seed-directive`
- Range: Provisional seed-treatment screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg formulation/1,000 kg treated seed
  - Basis: treatment routes only; replace with product label, dose, and batch ledger
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coating, encrusting, or pelleting material (`seed_coating_pelleting_input`)

Record coating polymer, mineral, biological, adhesive, filler, or other pelleting material when it is added before release. State whether the quantity is part of the declared net product mass.

- Selected flow: Seed-coating, encrusting, or pelleting material
- Flow property / unit: Mass / kg
- Amount rule: measured material mass by formulation and treatment or pelleting batch; distinguish seed mass from final treated mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final-preparation batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_records`
- Sources: `fao-seed-processing-manual`
- Range: Provisional coating and pelleting screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg material/1,000 kg released seed
  - Basis: coating, encrusting, and pelleting routes only; replace with formulation and batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flexible seed packaging (`flexible_packaging_input`)

Record flexible bags, sachets, liners, films, or other flexible primary packaging introduced before the release gate, including material and mass and whether the package is reusable.

- Selected flow: Flexible packaging function
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: packaging ledger and packing record by material, lot, and released seed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final-preparation batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_records`
- Sources: `eu-vegetable-seed-directive`
- Range: Provisional flexible-packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg released seed
  - Basis: bags, sachets, liners, and films before the release gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carton or box packaging (`carton_packaging_input`)

Record cartons and boxes used before release, with material, mass, reuse, and allocation information.

- Selected flow: Carton and box packaging function
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- Amount rule: packaging ledger and packing record allocated to released seed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final-preparation batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_records`
- Sources: `eu-vegetable-seed-directive`
- Range: Provisional carton-packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg/1,000 kg released seed
  - Basis: cartons and boxes before the release gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pallet or crate service (`pallet_crate_input`)

Record pallets and crates used for storage or dispatch before release, including reusable service cycles, return losses, and allocation basis.

- Selected flow: Pallet and crate packaging function
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: packaging ledger divided by documented service cycles and allocated to the released seed batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final-preparation batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging_records`
- Sources: `iso-14044-2006`
- Range: Provisional pallet-and-crate screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg released seed
  - Basis: reusable and single-use pallet or crate service before the release gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for treatment, packaging, and storage (`final_preparation_electricity_input`)

Record electricity for treatment, coating, pelleting, weighing, bagging, sealing, labelling, warehouse ventilation, and pre-gate storage when those operations are inside the boundary.

- Selected flow: Electricity supply for seed treatment, packaging, and pre-gate storage
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter record or verified equipment operating time allocated to the treated or released lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per final-preparation batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging_records`
- Sources: `fao-vegetable-seed-drying-storage`
- Range: Provisional final-preparation electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kWh/1,000 kg released seed
  - Basis: treatment, packaging, warehouse, and pre-gate storage operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Released market-ready vegetable seed (`vegetable_seed_release_output`)

Set the terminal output to the accepted net seed mass at the declared release gate. Preserve all species, lot, quality, treatment, packaging, and moisture qualifiers in the data package.

- Selected flow: Vegetable seed, except beet seed, market-ready lot
- Flow property / unit: Mass / kg
- Amount rule: scale the complete route to 1 kg accepted released seed on the declared moisture basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: terminal output equal to 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `mass-balance-identity`; `eu-vegetable-seed-directive`

##### Waste flows

###### Failed or diverted seed lot (`failed_seed_lot_output`)

Record seed that fails the declared release criteria or is diverted to a documented non-sowing destination. Do not credit it as released seed unless it is reconditioned and passes the release checks as the same declared lot.

- Selected flow: Failed, rejected, or diverted vegetable seed lot
- Flow property / unit: Mass / kg
- Amount rule: measured nonconforming or diverted seed mass by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final-preparation batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_records`
- Sources: `eu-vegetable-seed-directive`; `ista-seed-testing-rules`
- Range: Provisional failed-lot screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg/1,000 kg conditioned seed
  - Basis: nonconforming, damaged, expired, or diverted seed before release
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging waste before release (`packaging_waste_output`)

Record damaged bags, off-cuts, rejected labels, broken cartons, and other packaging waste generated before the release gate, including take-back or treatment fate.

- Selected flow: Packaging waste from seed preparation and release
- Flow property / unit: Mass / kg
- Amount rule: packaging ledger reconciliation by material, damage or reject cause, and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final-preparation batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging_records`
- Sources: `mass-balance-identity`
- Range: Provisional packaging-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/1,000 kg released seed
  - Basis: damaged, rejected, or off-cut packaging before release
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treatment and pelleting particulate emission (`treatment_particulate_emission`)

Record airborne particulate or treatment dust leaving the treatment or pelleting boundary after capture controls, with treatment identity and receiving medium retained.

- Selected flow: Particulate matter emission to ambient air from seed treatment or pelleting
- Flow property / unit: Mass / kg particulate matter
- Amount rule: measured, captured-mass balance, or method-calculated release from treatment or pelleting, with capture and particle basis disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per final-preparation batch and converted to 1 kg released seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging_records`
- Sources:
- Range: Provisional treatment-particulate screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/1,000 kg released seed
  - Basis: treatment, coating, encrusting, or pelleting operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared field and processing operations | Subdivide records by species, variety or hybrid, seed class, lot, route, and batch wherever measurement permits. Attribute inputs and outputs directly before using allocation. | `iso-14044-2006` |
| `allocation_marketable_co_products` | edible fruit, vegetable material, or other useful outputs from a seed crop | Treat a non-seed output as a co-product only when its quantity, quality, recipient, use, and hand-off are documented. If burdens cannot be subdivided, use a declared physical or economic allocation basis and disclose sensitivity. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_field_residue` | field residues and non-harvested biomass | Retained or incorporated residues remain part of the seed-crop foreground and are not credited as exported co-products. Removed material is separated into documented useful output, treatment, or waste fate. | `ipcc-2019-managed-soils-n2o`; `iso-14044-2006` |
| `allocation_conditioning_and_packaging` | shared conditioning, treatment, packaging, storage, and testing equipment | Allocate shared meters, equipment, packaging service, and storage by measured seed mass, machine time, or documented service cycles. Do not allocate the full shared burden to a lot when matched batch data are available. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_failed_lots` | failed or diverted lots | Keep failed, reprocessed, diverted, and released seed as separate outputs. A reprocessed lot receives the burdens of the additional operation; a diverted lot receives no sowing-product credit unless its declared downstream use is established. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_field_activity_records` | `vegetable_seed_field_multiplication` | planting seed; nutrient or soil amendment; irrigation; field fuel; crop protection; land | field log, input invoice, product label, application record, meter, or contractor record | field_id; protected_or_open_route; area; species; variety_or_hybrid; seed_class; parent_role; input_product; amount; nutrient_basis; active_ingredient; date; operation; water_source; contractor_scope | reconcile physical inputs, field area, and operation records to each field and crop cycle | kg; kg nutrient; L; MJ; m3; ha | every application or operation | complete crop cycle | every represented field or protected unit | sum by physical identity and field; calculate nutrient totals without merging products; normalize with same-cycle accepted released seed | dated logs; invoices; labels; calibrated meters; application records |
| `cp_seed_field_output_records` | `vegetable_seed_field_multiplication` | harvested seed-bearing material; field residues | weighbridge, yield monitor, harvest ticket, moisture test, residue record, or destination record | field_id; harvest_date; seed_bearing_organ; maturity; harvested_mass; moisture; accepted_transfer_mass; residue_mass; residue_fate; co_product_destination | match harvest and residue records to field area, crop cycle, and extraction lot | kg; %; ha | each harvest and residue transfer | complete crop cycle | all represented fields | sum each harvest and destination separately and close field-to-extraction transfer | scale or yield-monitor calibration; moisture tests; destination or sales records |
| `cp_seed_field_emission_activity` | `vegetable_seed_field_multiplication` | nitrous oxide; ammonia; nitrate loss | nutrient, soil, water, weather, residue, and emission-model record | fertilizer_product; N_input; organic_N; residue_N; application_method; timing; soil; climate; drainage; runoff; factor_set; model_version | calculate each emission with one declared geographically applicable method and the same activity data used for nutrient accounting | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented fields | calculate per field and pathway, then normalize with same-cycle accepted released seed | source records; factor provenance; model file; method review |
| `cp_harvest_extraction_records` | `vegetable_seed_harvest_and_extraction` | harvested material; wet extraction water; extraction aids; electricity; raw seed; residue; wastewater; particulate | batch ticket, scale, moisture test, water meter, formulation ledger, electricity meter, and destination record | batch_id; source_field; seed_bearing_organ; incoming_mass; incoming_moisture; water; aid_product; electricity; recovered_seed; recovered_moisture; residue; wastewater; capture; destination | reconcile each extraction batch and distinguish dry, wet, fermentation, and mechanical routes | kg; %; m3; kg product; kWh | each extraction batch | all pre-conditioning extraction | all included equipment and batches | close incoming mass to recovered seed, useful output, residue, wastewater, and measured losses on declared basis | calibrated scales and meters; moisture tests; formulation labels; destination and treatment records |
| `cp_conditioning_records` | `vegetable_seed_conditioning_and_grading` | raw seed; electricity; heat; drying fuel; water; conditioned seed; screenings; wastewater; particulate | batch ticket, scale, moisture and purity tests, meter, fuel record, and destination record | batch_id; incoming_mass; incoming_moisture; electricity; heat; fuel; water; accepted_mass; accepted_moisture; grade; screenings; rejects; wastewater; capture; sample_mass | match conditioning inputs, outputs, quality tests, and meters to the same lot and batch | kg; %; kWh; MJ; L; m3 | each batch or meter period | all pre-release conditioning | all included lines and batches | sum matched batches and allocate shared meters by measured mass or verified machine time | calibrated scales, moisture and purity test records, meter reconciliation, destination evidence |
| `cp_treatment_packaging_records` | `vegetable_seed_treatment_packaging_and_storage` | conditioned seed; treatment; coating or pelleting; packaging; electricity; released seed; failed lot; packaging waste; treatment particulate | treatment log, formulation label, scale, packing ledger, warehouse record, electricity meter, quality certificate, and waste record | lot_id; incoming_seed_mass; treatment_product; active; coating_material; dose; packaging_material; packaging_mass; reuse_cycles; electricity; storage_start; storage_end; released_mass; moisture; germination; purity; failed_mass; waste_mass; dust_capture; destination | reconcile each treatment, packaging, storage, and release batch; preserve lot identity and final quality status | kg; %; kWh; item; days | each lot and release batch | all included treatment, packaging, and pre-gate storage | all included lots and equipment | sum by lot and material; allocate reusable packaging by documented service cycles; close incoming seed to released, failed, and losses | formulation and packaging labels; calibrated scales; quality certificates; warehouse logs; waste and take-back records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_field_to_reference_seed` | field inputs, land, residues, and emissions | Crop-cycle quantity / accepted released seed from the same cycle × 1 kg | field quantity; area; accepted released seed; moisture basis | quantity per 1 kg released seed | `mass-balance-identity` |
| `calc_nutrient_product_basis` | fertilizer and soil-amendment input | Sum each product mass and calculate nutrient content from the declared product label or assay; preserve product and nutrient totals as separate fields | product mass; nutrient fraction or assay; reporting basis | product mass and kg N, P, K, or organic matter by source | `mass-balance-identity` |
| `calc_managed_soil_emissions` | nitrous oxide, ammonia, and nitrate loss | Apply the selected geographically applicable method to nutrient inputs, residue fate, application practice, soil, climate, drainage, and runoff; report method and factor version | field activity; soil and water data; residue fate; factors | emission quantity by pathway and receiving medium | `ipcc-2019-managed-soils-n2o` |
| `calc_extraction_mass_balance` | extraction outputs | Incoming seed-bearing material = recovered raw seed + documented useful output + residue + wastewater-associated solids + measured losses on a common basis | incoming mass and moisture; output and loss records | reconciled extraction outputs and difference | `mass-balance-identity` |
| `calc_conditioning_mass_balance` | conditioning outputs | Incoming raw seed = accepted conditioned seed + screenings and rejects + moisture loss + measured other loss on a common moisture basis | incoming and accepted mass; moisture; screenings; rejects; loss records | reconciled conditioning outputs and difference | `mass-balance-identity` |
| `calc_treatment_and_packaging_mass` | treatment, coating, pelleting, and packaging | Keep incoming seed, added treatment or coating materials, final net seed, packaging, and waste as separate quantities; report whether additives are included in net product mass | lot ledger; formulation dose; packaging ledger; final mass | treated or packaged lot mass and material inventory | `mass-balance-identity` |
| `calc_reusable_packaging` | reusable pallets and crates | Packaging mass / documented service cycles, with return loss assigned to the applicable lots | packaging mass; service cycles; loss; lot mass | allocated packaging service per released seed | `iso-14044-2006` |
| `calc_reference_scaling` | terminal released seed | Scale all foreground quantities by 1 kg / measured accepted released seed, retaining moisture and quality qualifiers | accepted released seed; all normalized quantities | one-kilogram reference-flow inventory | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_variety_identity` | reference flow, field lots, and all seed outputs | Identify species, variety or hybrid, parent-line role, seed class, generation, intended sowing use, and seed-bearing organ; do not substitute food grain, beet seed, or another vegetable species. | lot records; variety or parent records; product description |
| `dq_lot_traceability` | all process transfers and released lots | Retain a traceable lot identifier from field establishment through harvest, extraction, conditioning, treatment, packaging, testing, storage, and release or diversion. | field-to-lot ledger; batch tickets; certificates |
| `dq_moisture_and_mass_basis` | all mass flows and conversions | Record calibrated mass measurement and moisture for seed-bearing material, raw seed, conditioned seed, and released seed; reconcile dry or standard-moisture conversions. | scale calibration; moisture tests; mass-balance worksheet |
| `dq_temporal_geographic_coverage` | field and facility records | Use complete crop-cycle and pre-release batch records for the declared geography and technology; disclose proxy seasons, partial fields, contractor coverage, and storage duration. | dated field, batch, meter, and warehouse records |
| `dq_quality_release_evidence` | released, failed, and diverted lots | Retain sampling, analytical purity, other-seed, germination or viability, health, treatment, and label evidence appropriate to the declared market or certification scheme. | `ista-seed-testing-rules`; `eu-vegetable-seed-directive` |
| `dq_completeness_and_fate` | all inputs, residues, screenings, wastewater, packaging, and failed lots | Reconcile each material and energy input and every non-reference output to a documented destination; distinguish zero, not applicable, estimated, proxy, and missing values. | process records; destination evidence; mass-balance result |
| `dq_identity_resolution` | reference flow and all inventory rows | Resolve every parameterized row and evidence gap physical exchange to a compatible verified UUID before final TIDAS process publication; keep coverage finding visible until then. | identity review record and Flow Set resolution |

## 9. Validation Rules

Validation output must report accepted input, checks performed, checks skipped, findings, and completeness. An identity evidence gap, unexplained mass difference, missing lot-quality evidence, or inconclusive fate check remains a finding and is not converted to zero.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal released seed | Exactly one terminal vegetable-seed output equals 1 kg after scaling and declares species, variety or hybrid, seed class, moisture, purity, germination or viability, treatment, packaging, lot, and gate qualifiers. | `mass-balance-identity`; `eu-vegetable-seed-directive` |
| `validation_seed_scope` | PCR identity and process map | Confirm that the record is vegetable seed for sowing and excludes beet seed, vegetative planting material, ornamental seed, food or feed products, and post-release crop production. | `eu-vegetable-seed-directive` |
| `validation_field_cycle` | field multiplication | Confirm that inputs, area, isolation and pollination records, harvest, residues, and field emissions belong to the same species or variety or hybrid and crop cycle. | `fao-seed-systems`; `oecd-seed-schemes` |
| `validation_extraction_balance` | harvest and extraction | Reconcile incoming seed-bearing material to raw extracted seed, useful outputs, residue, wastewater, and measured losses on a common moisture basis. | `mass-balance-identity` |
| `validation_conditioning_balance` | drying, cleaning, and grading | Reconcile raw seed to conditioned seed, screenings, rejects, moisture loss, wastewater, and particulate capture; explain any remaining difference. | `mass-balance-identity` |
| `validation_lot_quality` | sampling, tests, treatment, packaging, and release | Confirm homogeneous lot identity, sampling and test records, purity, germination or viability, health, treatment disclosure, packaging, sealing or label information, and declared net quantity appropriate to the selected market scheme. | `ista-seed-testing-rules`; `eu-vegetable-seed-directive` |
| `validation_allocation_and_fate` | co-products, residues, failed lots, and waste | Confirm allocation basis, documented recipient or fate, treatment or discharge route, and no double counting of retained residues, reprocessed lots, shared energy, reusable packaging, or waste. | `iso-14044-2006`; `mass-balance-identity` |
| `validation_flow_identity` | every reference and inventory flow | Accept only exact verified UUIDs as `fixed` and applicable existing Flow Sets as `parameterized`; otherwise retain the row as unmapped coverage and prevent final dataset publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground vegetable seed production and released-lot dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review, identity resolution, and publication |
| allowed_use | LCA of vegetable seed lots, seed supply, and downstream vegetable production that preserves the declared species, variety or hybrid, seed class, geography, crop cycle, route, moisture, quality, treatment, packaging, allocation, and release gate |
| excluded_use | Beet seed; vegetative planting material; ornamental seed; food or feed grain; edible vegetables; breeder or genebank research material; seed sowing or crop-production impacts after release; distribution or retail beyond the gate; and datasets with evidence gap product state, lot identity, quality evidence, or mass balance |
| required_metadata | PCR id; CPC reference; species; variety or hybrid; parent-line role; seed class and generation; geography; field or protected route; crop-cycle dates; isolation and pollination practice; area; harvest and extraction route; yield; moisture; purity; germination or viability; health; treatment or coating; packaging; storage duration; residue and waste fates; allocation; Flow Set selections; collection coverage; and DQR |
| required_quality_disclosure | field and facility coverage; measured versus calculated values; proxy and estimated fields; moisture and mass-balance results; sampling and lot-quality evidence; emission method; treatment and packaging records; allocation driverss; and range exceedances |
| update_trigger | New reviewed seed-production or processing evidence; material route, species scope, treatment, packaging, storage, or gate change; revised emission or quality method; changed Flow Set or UUID identity; or representative records outside the provisional QA ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-systems` | official_guidance | FAO, *What are seed systems?*, <https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/tools-guidelines/what-are-seed-systems/en/> | seed identity, multiplication, formal and local seed-system stages, quality attributes, and storage context |
| `oecd-seed-schemes` | official_guidance | OECD, *Seeds — OECD Seed Schemes*, <https://www.oecd.org/en/topics/seeds.html> | varietal identity and purity, field inspection, certification, and vegetable seed scheme context |
| `fao-seed-processing-manual` | handbook | FAO, *Seed Production Manual*, seed conditioning and processing chapter, <https://coin.fao.org/coin-static/cms/media/16/13666518481740/seed_enterprises_enhacement_and_development_project_in_sierra_leone_mission_1_report_.pdf> | harvest handling, shelling or threshing, drying, cleaning, grading, treatment, packaging, and storage process decomposition |
| `fao-vegetable-seed-drying-storage` | official_guidance | FAO, *Practical Guide for drying and storing vegetable seeds in organic small-scale and on-farm seed production*, <https://www.fao.org/family-farming/detail/en/c/1709501/> | vegetable seed drying, moisture, viability, storage, and lot-quality context |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration*, <https://www.fao.org/4/X0490E/X0490E00.htm> | crop-water balance and irrigation-record method context |
| `ista-seed-testing-rules` | official_guidance | International Seed Testing Association, *International Rules for Seed Testing*, <https://www.seedtest.org/en/publications/international-rules-seed-testing.html> | sampling, purity, other-seed, germination, seed-health testing, and reporting methods |
| `eu-vegetable-seed-directive` | standard | European Union, Council Directive 2002/55/EC on the marketing of vegetable seed, <https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32002L0055> | vegetable-seed scope, varietal identity and purity, germination, homogeneous lots, sampling, packaging, sealing, labelling, and treated-seed disclosure |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil nitrogen emissions, residue nitrogen, direct and indirect pathways, and method disclosure |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, <https://www.iso.org/standard/38498.html> | subdivision and allocation hierarchy, data quality, sensitivity, and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched seed-crop, extraction, conditioning, treatment, packaging, and release records | output reconciliation, normalization, and evidence gap-difference validation |
