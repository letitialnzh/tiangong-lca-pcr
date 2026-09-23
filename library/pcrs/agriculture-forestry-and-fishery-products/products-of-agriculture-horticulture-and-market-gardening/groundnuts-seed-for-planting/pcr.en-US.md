---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.groundnuts-seed-for-planting
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---
# Groundnut Seed for Planting
## 1. Scope and Applicability
This PCR guides a foreground data package for groundnut seed intended for sowing under CPC 3.0 `01421`. It covers seed multiplication or controlled seed production, harvest, seed conditioning, grading, quality testing, optional treatment, packaging, and optional storage to a declared seed gate. The reference identity uses the farm gate with the qualifier Seed-grade, cleaned for sowing; a delivery gate is allowed only when storage and delivery records are included.
It applies to open-pollinated, cultivar, foundation, registered, certified, or comparable groundnut sowing-seed routes when seed class, production route, quality status, geography, and gate are declared. Parental-line isolation, seed selection and field production controls, and certification activities are included when inside the foreground boundary, but this PCR supplies no universal breeding facts, quantities, factors, UUIDs, or certification results.
Commodity groundnut grain, forage or silage groundnut, vegetable soybeans sold as a vegetable, food or feed processing, starch or ethanol conversion, downstream cultivation, retail distribution, and consumer use are excluded. Breeding research and capital goods are excluded unless the data package explicitly includes them.
## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.groundnuts-seed-for-planting` |
| classification_refs | CPC 3.0 `01421`, `Groundnuts, seed for planting` |
| covered_products | Cleaned, graded, quality-controlled groundnut seed intended for sowing, including declared cultivar and seed class seed classes |
| excluded_products | Commodity groundnut grain; forage or silage groundnut; vegetable soybeans; processed groundnut products; downstream crop production; unqualified breeding research |
| representative_product | Accepted groundnut sowing seed at declared moisture basis, quality class, treatment status, packaging state, and gate |
| production_route | Managed groundnut seed multiplication or controlled seed production followed by harvest, conditioning, quality testing, optional treatment, and packaging |
| market_state | Seed lot accepted for sowing and transferred at the declared farm or delivery gate |
## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Accepted groundnut seed for sowing at the declared seed gate |
| How much | 1 kg net accepted seed |
| How well | Seed class or certification class, cultivar and seed class, variety or source-lot identity where applicable, moisture basis, physical purity, germination or viability, treatment status, packaging state, geography, and gate |
| How long or cycle | One single-period declared seed production crop cycle; no storage is included unless the data package explicitly extends the gate |
| reference_flow_link | Reference amount and verified platform product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Groundnuts, seed for planting `52904307-91f2-4a4a-b087-fbfe85d4b0b3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | seed class or certification class; cultivar and seed class; variety or source-lot identity where applicable; treatment status; moisture basis; physical purity; germination or viability; geography; crop cycle; declared gate; packaging state |
| Binding | `fixed` |
The required qualifiers must be present in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Mass is the reference basis. Seed count is allowed only with thousand-kernel weight or another transparent count-to-mass conversion.
## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` | kg | Express the reference as net accepted groundnut sowing seed at the declared gate and exclude container tare. |
| `seed_count_conversion` | seed count | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` | kg and seeds | Convert count to mass only with recorded thousand-kernel weight, lot count, or an equivalent transparent factor. |
| `seed_quality_attributes` | accepted seed | declared quality property | percent or declared unit | Retain moisture, physical purity, germination or viability, and treatment status as lot attributes; do not replace them with a universal default. |
| `moisture_basis` | field and conditioning mass | Mass and moisture content | kg and declared mass fraction | Preserve as-received mass and moisture basis. Convert only with measured moisture and an explicit mass-and-water equation. |
| `fertilizer_n_basis` | nutrient inputs and soil emissions | Mass | kg product and kg nutrient | Record formulated product mass and nutrient mass separately; nitrogen calculations use declared kg N input. |
| `water_basis` | irrigation and withdrawal | Volume or Mass | m3 or kg | Distinguish supplied irrigation water, natural-resource withdrawal, and any separately reported consumption indicator. |
| `energy_inventory` | field and conditioning energy | Mass, Volume, or Energy | kg, L, MJ, or kWh | Preserve energy carrier, measured unit, operation, process, and conversion basis. |
| `packaging_count` | count-based packaging | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item and kg | Count-based packaging records must state bag capacity or material mass when conversion to mass is required. |
| `land_basis` | land occupation | Area-time | ha·crop cycle or declared area-time unit | Record planted area and crop-cycle occupation; do not use land occupation as a proxy for land transformation. |
## 5. System Boundary
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | source seed lot, source seed lot, or declared seed-production starting material |
| starting_condition_role | reproduction identity and crop-production starting condition |
| product_classification_scope | CPC 3.0 `01421`, groundnut seed for sowing; commodity grain, forage or silage groundnut, and downstream groundnut products are outside this PCR |
| recursive_input_rule | A same-category seed input used to establish the crop is a declared starting input and is not current-cycle accepted output. A seed lot entering conditioning is an intermediate hand-off, not a second reference output. |
| upstream_dataset_requirement | Source seed, nutrient products, crop-protection products, irrigation-water supply, energy carriers, packaging materials, and waste-treatment services require representative upstream datasets or a documented exclusion. |
| disclosure | seed class; cultivar and seed-class route; variety or source-lot identity; field and geography; crop cycle; irrigation; nutrient and crop-protection records; harvest mass and moisture; conditioning, testing, treatment, packaging, storage, rejects, and gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_seed_gate` | foreground boundary | Include seed production, harvest, conditioning, quality testing, optional treatment, packaging, and only storage or delivery needed to reach the declared seed gate. | `fao-groundnut-seed-production`; `fao-groundnut-drying-handling` |
| `boundary_gate_definition` | reference product | Use the farm gate by default. A delivered-seed gate requires storage or delivery records, losses, and gate hand-off. | `fao-groundnut-seed-production`; `mass-balance-identity` |
| `boundary_seed_quality` | accepted seed | Include grading, quality testing, treatment status, and lot acceptance when they determine whether the output is accepted sowing seed. | `fao-groundnut-seed-production`; `usda-seed-cleaning-handling` |
| `boundary_input_completeness` | field and conditioning | Provide a collected value, justified zero, or documented exclusion for source seed, nutrients, crop protection, irrigation, field energy, land, conditioning energy, packaging, rejects, and treatment. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_output_separation` | all outputs | Separate accepted seed, intermediate harvested seed crop, rejects, screenings, dust, residues, packaging waste, and unexplained loss by measured mass and fate. | `mass-balance-identity`; `fao-groundnut-drying-handling` |
## 6. Process Inventory Structure
The annual seed route is measured by crop cycle and lot. No default storage or stock retention is assumed; use a single-period crop-cycle basis unless storage is explicitly included. Intended co-products, downgraded streams, and rejects are separate outputs with declared hand-offs.
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_groundnut_seed_multiplication` | Field Groundnut Seed Multiplication | required |  | foreground | crop-cycle inputs and harvested seed crop before conditioning |
| `seed_conditioning_treatment_and_packaging` | Seed Conditioning, Treatment, and Packaging | required |  | foreground | accepted cleaned and packaged groundnut sowing seed |
| `seed_storage` | Seed Storage | conditional | include when storage occurs before the declared gate or materially changes the delivered reference flow | foreground | stored and delivered accepted seed |
### Process: Field Groundnut Seed Multiplication (`field_groundnut_seed_multiplication`)
#### Inputs
##### Product flows
###### Source seed or source seed lot (`source_seed_or_parental_line_lot`)
Record the source lot that establishes the declared groundnut seed route. Identity, class, treatment, mass, and source field are separate from current-cycle accepted output.
- Selected flow: groundnut source seed or source seed lot used for sowing 52904307-91f2-4a4a-b087-fbfe85d4b0b3
- Flow property / unit: Mass / kg
- Amount rule: measured source-lot mass by field or source-lot unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_seed_lot_records`
- Sources: `fao-groundnut-seed-production`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Agricultural nutrient and fertilizer inputs (`field_groundnut_seed_multiplication_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water_supplied`)
Record delivered irrigation water from each declared source. A verified rain-fed route records a justified zero with supporting evidence.
- Selected flow: irrigation water supplied to the seed-production field
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or evidenced delivered irrigation by field and source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Field combustion energy (`field_combustion_energy`)
Record fuel or directly supplied combustion energy used by field equipment, including pumping when the carrier is combusted on site. Keep mobile transport fuel outside this row.
- Selected flow: field fuel or combusted energy carrier
- Flow property / unit: Mass, volume, or energy / kg, L, or MJ
- Amount rule: measured fuel or energy use by field operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Irrigation pumping electricity (`irrigation_pumping_electricity`)
Record purchased electricity used for irrigation pumping or electrically driven field equipment at the field boundary.
- Selected flow: purchased electricity for irrigation pumping
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter, utility bill, or supplier record allocated to the declared field route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Crop-protection products (`crop_protection_products`)
Record named formulated products and active substances used for weeds, pests, or diseases. Product identity and active-substance content remain distinct.
- Selected flow: named crop-protection product or active substance
- Flow property / unit: Mass / kg product or active substance
- Amount rule: measured application by product and active substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvested seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-groundnut-seed-production`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
##### Elementary flows
###### Cultivated land occupation (`cultivated_land_occupation`)
Record cultivated land occupation for the declared seed crop cycle. Verify the exact elementary-flow UUID at data-package generation.
- Selected flow: cultivated land occupation or transformation according to declared scope
- Flow property / unit: Area-time / ha·crop cycle
- Amount rule: planted area multiplied by the declared crop-cycle occupation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_use_records`
- Sources: `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Natural water withdrawal (`natural_water_withdrawal`)
Keep natural-resource withdrawal distinct from delivered irrigation-water product input.
- Selected flow: water resource withdrawn from the declared natural source
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: source-specific withdrawal measured or calculated from pumping records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
#### Outputs
##### Product flows
###### Harvested groundnut seed crop for conditioning (`harvested_groundnut_seed_crop_for_conditioning`)
This intermediate product leaves field multiplication and enters seed conditioning; it is not an additional final reference output.
- Selected flow: harvested groundnut seed crop for conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured harvested seed-crop mass at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvested_seed_mass`
- Sources: `fao-groundnut-seed-production`; `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
###### Field residues and non-seed material (`field_residues_and_non_seed_material`)
Record residue, non-seed plant material, damaged seed, or other field material as waste unless it crosses the boundary as an intentionally sold or transferred product. No product-input Flow Set is assigned to this waste row.
- Selected flow: field residue or non-seed material by declared fate
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_residue_records`
- Sources: `ipcc-2019-cropland`; `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Elementary flows
###### Managed-soil nitrogen emissions to air (`managed_soil_nitrogen_emissions_to_air`)
Record species-specific managed-soil emissions using the selected method tier, nutrient inputs, and declared soil and climate context.
- Selected flow: nitrogen species emitted to air from managed soil
- Flow property / unit: Mass / kg species and kg N
- Amount rule: calculated from nutrient inputs and the selected soil-emission method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed output
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Managed-soil nitrogen emissions to water (`managed_soil_nitrogen_emissions_to_water`)
Record nitrate or other nitrogen species reaching the declared water compartment when required by the selected method and scope.
- Selected flow: nitrogen species emitted to water from managed soil
- Flow property / unit: Mass / kg species and kg N
- Amount rule: calculated from nutrient inputs, site conditions, and the selected leaching method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed output
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Fossil carbon dioxide from field energy (`fossil_carbon_dioxide_from_field_energy`)
Calculate fossil combustion emissions from recorded field energy and a declared factor.
- Selected flow: fossil carbon dioxide emitted to air from field energy
- Flow property / unit: Mass / kg
- Amount rule: recorded fuel or energy quantity multiplied by the declared emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
### Process: Seed Conditioning, Treatment, and Packaging (`seed_conditioning_treatment_and_packaging`)
#### Inputs
##### Product flows
###### Harvested seed crop input (`harvested_seed_crop_input`)
Record the field output received by conditioning as a separate intermediate input, retaining lot, moisture, and source-field identity.
- Selected flow: harvested groundnut seed crop received for conditioning 52904307-91f2-4a4a-b087-fbfe85d4b0b3
- Flow property / unit: Mass / kg
- Amount rule: measured receiving mass at declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `mass-balance-identity`; `fao-groundnut-drying-handling`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Conditioning and drying electricity (`conditioning_and_drying_electricity`)
Record electricity for drying, shelling, cleaning, grading, testing, treatment, and packaging when it crosses the conditioning boundary.
- Selected flow: purchased electricity for seed conditioning and packaging
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter, utility bill, or equipment log by conditioning campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted packaged seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-groundnut-drying-handling`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Conditioning combustion energy (`conditioning_combustion_energy`)
Record fuel or directly supplied heat used for seed drying or other conditioning operations.
- Selected flow: drying fuel or delivered process heat
- Flow property / unit: Mass, volume, or energy / kg, L, or MJ
- Amount rule: measured fuel or delivered heat by conditioning campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted packaged seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-groundnut-drying-handling`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Seed-treatment material (`seed_treatment_material`)
Record treatment products and active substances applied to accepted seed lots, including dose, treated mass, and treatment status.
- Selected flow: seed-treatment product or active substance
- Flow property / unit: Mass / kg product or active substance
- Amount rule: measured treatment product and active-substance mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg treated seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_treatment_records`
- Sources: `fao-groundnut-seed-production`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Seed packaging function (`seed_packaging_function`)
Record bags, liners, closures, labels, or other packaging functions used before the declared gate. Packaging remains separate from seed material.
- Selected flow: primary or secondary seed packaging material/function
- Flow property / unit: Mass, count, or declared packaging quantity / kg or item
- Amount rule: packaging inventory issued per accepted seed batch, with count-to-mass conversion where required
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_input_records`
- Sources: `usda-seed-cleaning-handling`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
##### Elementary flows
#### Outputs
##### Product flows
###### Accepted groundnut sowing seed (`accepted_groundnut_sowing_seed`)
Accepted cleaned, graded, tested, optionally treated, and packaged seed is the intended output and final reference product at the declared seed gate.
- Selected flow: Groundnuts, seed for planting `52904307-91f2-4a4a-b087-fbfe85d4b0b3`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted output after quality release and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accepted_seed_mass`
- Sources: `fao-groundnut-seed-production`; `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Intended co-product or downgraded seed stream (`intended_seed_coproduct_or_downgrade`)
Record this product output only when screenings, downgraded seed, or another separated stream is intentionally transferred across the boundary as a documented co-product or independent product. Identify its destination and do not count it as accepted sowing seed.
- Selected flow: intentionally transferred downgraded or co-product seed stream
- Flow property / unit: Mass / kg
- Amount rule: measured output by batch and declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_mass_records`
- Sources: `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
###### Conditioning rejects and screenings (`conditioning_rejects_and_screenings`)
Record rejected seed, screenings, broken kernels, dust, and off-grade material by mass and fate. Do not assign a product-input Flow Set to waste.
- Selected flow: rejected seed, screenings, dust, or off-grade material by declared fate
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled reject stream by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_mass_records`
- Sources: `usda-seed-cleaning-handling`; `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Packaging waste (`packaging_waste`)
Record packaging losses and discarded packaging by material and fate.
- Selected flow: packaging waste by material and declared fate
- Flow property / unit: Mass / kg
- Amount rule: weighed packaging waste or inventory reconciliation by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `usda-seed-cleaning-handling`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Elementary flows
###### Conditioning dust and combustion emissions (`conditioning_dust_and_combustion_emissions`)
Record particulate or combustion species emitted from cleaning and drying according to the selected compartment and method.
- Selected flow: conditioning emission to air by substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measured, collected, or calculated emission by campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_emission_records`
- Sources: `fao-groundnut-drying-handling`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
### Process: Seed Storage (`seed_storage`)
#### Inputs
##### Product flows
###### Accepted seed entering storage (`accepted_seed_entering_storage`)
Include only when storage is inside the declared gate. Track lot identity and stored mass separately from delivered output.
- Selected flow: Groundnuts, seed for planting `52904307-91f2-4a4a-b087-fbfe85d4b0b3`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured stored seed mass by lot and storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered accepted seed
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_lot_records`
- Sources: `fao-groundnut-seed-production`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Storage electricity (`storage_electricity`)
Record electricity for storage climate control, handling, or monitoring when material and inside the boundary.
- Selected flow: purchased electricity for seed storage
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter or utility record allocated by stored mass and duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered accepted seed
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_energy_records`
- Sources: `fao-groundnut-seed-production`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
###### Storage loss or damaged seed (`storage_loss_or_damaged_seed`)
Record storage loss, damaged lots, and destinations. No product-input Flow Set is assigned to this waste row.
- Selected flow: storage loss or damaged seed by declared fate
- Flow property / unit: Mass / kg
- Amount rule: inventory reconciliation or weighed loss by lot and storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered accepted seed
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_loss_records`
- Sources: `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Elementary flows
#### Outputs
##### Product flows
###### Delivered accepted groundnut seed (`delivered_accepted_groundnut_seed`)
Use only when the declared gate is after storage. It remains the same reference-product function and must not be counted with farm-gate output.
- Selected flow: Groundnuts, seed for planting `52904307-91f2-4a4a-b087-fbfe85d4b0b3`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured delivered mass after storage reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivered_seed_mass`
- Sources: `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
##### Elementary flows
## 7. Allocation and Co-product Handling
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | field and conditioning processes | Avoid allocation by separately recording seed multiplication, conditioning, treatment, packaging, rejects, and fate-specific handling whenever the processes can be subdivided. | `iso-14044-2006` |
| `allocation_intended_outputs` | intentional product outputs | If a residue or off-grade stream is intentionally sold or transferred as a product, identify its destination and apply a declared attribution method only after product status is evidenced. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_seed_quality` | accepted seed and downgraded lots | Do not allocate seed-quality burdens to commodity grain or a downgraded stream unless the alternate output is intentionally produced, separately identified, and included in the declared gate. | `iso-14044-2006` |
| `allocation_fallback` | multiple intended outputs | If subdivision is not possible, use a declared mass, physical-property, economic, or other defensible method, disclose the rationale, and test a materially different method as sensitivity. | `iso-14044-2006` |
| `allocation_reject_fate` | rejects and waste | Keep field residue, conditioning rejects, packaging waste, storage losses, treatment, recovery, and disposal distinct; do not credit a displaced product without destination and substitution evidence. | `mass-balance-identity` |

Every rejected or off-spec seed state is explicitly routed as reworked, downgraded, recovered, or discarded. A rework loop or boundary exit is linked to the producing conditioning node, and rejected material is excluded from accepted output until a new documented quality-release event occurs.
## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot_records` | `field_groundnut_seed_multiplication` | source seed or source seed lot | seed lot record | lot; class; cultivar or source-lot role; treatment; mass; moisture; supplier or source field | lot certificate, receiving record, calibrated scale | kg and declared attributes | per lot | crop cycle | field or production unit | sum by field or source-lot unit and normalize to harvested seed crop | certificate, receiving record, scale |
| `cp_nutrient_input_records` | `field_groundnut_seed_multiplication` | nutrient and amendment inputs | application record | product; formulation; nutrient content; mass; date; field; method | invoice, label, application log, service record | kg product and kg nutrient | per application | crop cycle | field | sum product and nutrient mass by field | invoice, label, application record |
| `cp_irrigation_records` | `field_groundnut_seed_multiplication` | irrigation and withdrawal | meter or source record | source; meter; reading; volume; date; field; pumping energy | calibrated meter, pump log, water record | m3, kg, kWh | event or month | crop cycle | field and source | sum by source and distinguish delivered water from withdrawal | calibration, readings, source record |
| `cp_field_energy_records` | `field_groundnut_seed_multiplication` | field fuel and electricity | fuel or utility record | operation; carrier; quantity; machine or supplier; date; field | fuel log, meter, invoice, contractor record | L, kg, MJ, kWh | operation or billing interval | crop cycle | field or unit | attribute energy without double counting | meter, invoice, log |
| `cp_crop_protection_records` | `field_groundnut_seed_multiplication` | crop protection | application record | product; active substance; dose; area; date; field; target | label and application log | kg product, kg active substance, ha | per application | crop cycle | field | sum by product and active substance | label, applicator record |
| `cp_land_use_records` | `field_groundnut_seed_multiplication` | land occupation | field area record | field; planted area; dates; crop duration | field record, GIS, farm register | ha and crop cycle | per cycle | crop cycle | field | calculate area-time and normalize | field map, GIS, farm record |
| `cp_harvested_seed_mass` | `field_groundnut_seed_multiplication` | harvested seed crop | harvest record | field; date; mass; moisture; seed route; rejects | calibrated scale and harvest record | kg and moisture fraction | per harvest | crop cycle | field and receiving point | reconcile before conditioning | scale, harvest record |
| `cp_field_residue_records` | `field_groundnut_seed_multiplication` | field residue | residue record | stream; mass; fate; date; field | scale, baling ticket, field log | kg | per event | crop cycle | field | sum by fate and boundary crossing | scale, ticket, field log |
| `cp_conditioning_input_records` | `seed_conditioning_treatment_and_packaging` | harvested seed input | batch receiving record | batch; input mass; moisture; source; date | batch sheet and calibrated scale | kg and moisture fraction | per batch | conditioning campaign | facility | reconcile received mass to outputs | batch sheet, scale |
| `cp_conditioning_energy_records` | `seed_conditioning_treatment_and_packaging` | conditioning energy | meter or equipment record | campaign; energy type; quantity; operation; period | meter, utility bill, equipment log | kWh, MJ, kg, L | campaign or interval | conditioning campaign | facility | sum by operation and normalize | meter, bill, equipment log |
| `cp_seed_treatment_records` | `seed_conditioning_treatment_and_packaging` | treatment material | treatment record | product; active substance; dose; treated mass; lot | treatment log, label, supplier certificate | kg product, kg active substance, kg seed | per batch | conditioning campaign | facility | sum by product and treated lot | log, label |
| `cp_packaging_input_records` | `seed_conditioning_treatment_and_packaging` | packaging | packaging issue record | type; item count; capacity; mass; batch | inventory record or packing log | item and kg | per batch | conditioning campaign | facility | convert count only with declared capacity or mass | packing log, inventory record |
| `cp_accepted_seed_mass` | `seed_conditioning_treatment_and_packaging` | accepted seed | release record | batch; mass; moisture; purity; germination; treatment; gate | calibrated scale and quality test | kg and attributes | per batch | conditioning campaign | facility and gate | sum released lots at declared basis | scale, test, release record |
| `cp_reject_mass_records` | `seed_conditioning_treatment_and_packaging` | rejects and screenings | reject record | batch; stream; mass; fate | scale or batch mass balance | kg | per batch | conditioning campaign | facility | sum by stream and fate | scale, reject log, fate |
| `cp_packaging_waste_records` | `seed_conditioning_treatment_and_packaging` | packaging waste | waste record | material; mass; fate; period | scale or contractor record | kg | per shipment or campaign | conditioning campaign | facility | sum by material and fate | scale ticket, contractor record |
| `cp_conditioning_emission_records` | `seed_conditioning_treatment_and_packaging` | conditioning emissions | emission record | substance; compartment; mass or factor; campaign | dust log, maintenance record, calculation | kg | campaign or period | conditioning campaign | facility | sum by species and compartment | log, calculation |
| `cp_storage_lot_records` | `seed_storage` | accepted seed in storage | inventory record | lot; mass; start and end dates; moisture; location | inventory reconciliation and scale | kg and days | per lot | storage period | storage site | sum stored mass and retain duration | inventory, scale |
| `cp_storage_energy_records` | `seed_storage` | storage electricity | meter or utility record | meter; quantity; period; stored mass | meter or utility bill | kWh or MJ | period | storage duration | storage site | allocate by mass and duration | meter, bill |
| `cp_storage_loss_records` | `seed_storage` | storage loss | loss record | lot; loss mass; category; fate; period | inventory reconciliation and scale | kg | per lot or period | storage period | storage site | sum by fate | inventory, disposal record |
| `cp_delivered_seed_mass` | `seed_storage` | delivered seed | delivery record | lot; mass; date; gate; receiver; moisture | dispatch record and calibrated scale | kg and moisture fraction | per shipment | delivery period | declared gate | sum delivered lots without double count | dispatch, scale |
### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_accepted_seed` | all foreground rows | divide each measured or calculated amount by net accepted seed at the same declared gate and basis | output records; input records | amount per 1 kg reference flow | `mass-balance-identity` |
| `convert_seed_moisture_basis` | field and conditioning mass | convert only from recorded mass and moisture using an explicit water-and-dry-matter equation | harvest; receiving; quality records | declared-basis mass | `mass-balance-identity`; `fao-groundnut-drying-handling` |
| `calculate_seed_conditioning_yield` | conditioning output | accepted seed mass divided by received harvested seed-crop mass, retaining rejects and moisture change separately | conditioning input; accepted mass; reject mass | yield, reject fraction, unexplained fraction | `usda-seed-cleaning-handling`; `mass-balance-identity` |
| `calculate_land_occupation` | land occupation | planted area multiplied by declared crop-cycle occupation and normalized to accepted seed | land records; accepted seed mass | area-time per reference flow | `ipcc-2019-cropland` |
| `calculate_water_withdrawal` | water withdrawal | convert metered volume where needed and keep source withdrawal separate from delivered irrigation | irrigation records | resource withdrawal per reference flow | `ipcc-2019-cropland` |
| `calculate_managed_soil_emissions` | nitrogen emissions | apply the selected method tier to nutrient inputs and declared soil, climate, and management context; disclose species conversion | nutrient records; method factors | species-specific emissions | `ipcc-2019-managed-soils-n2o` |
| `calculate_field_energy_emissions` | field energy | multiply recorded fuel or energy by the declared factor and normalize to accepted seed | field energy; factor | field-energy emissions | `ipcc-2019-cropland` |
| `calculate_conditioning_energy_emissions` | conditioning energy | multiply recorded conditioning fuel or energy by the declared factor and normalize | conditioning energy; factor | conditioning emissions | `fao-groundnut-drying-handling` |
| `reconcile_field_outputs` | field production | harvested seed crop plus residue, non-seed material, and documented loss reconcile to the harvest record within declared tolerance | harvest; residue records | field output balance | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | conditioning | received mass and moisture reconcile to accepted seed, rejects, packaging waste, emissions, and documented loss | conditioning input; accepted seed; rejects | conditioning balance | `mass-balance-identity`; `fao-groundnut-drying-handling` |
| `reconcile_storage_outputs` | storage | stored mass reconciles to delivered seed, storage loss, and closing inventory for the declared period | storage; delivery; loss records | storage balance | `mass-balance-identity` |
### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_seed_identity` | reference product and source lots | Declare seed class, cultivar and seed class, variety or source-lot identity where applicable, treatment status, moisture basis, physical purity, and germination or viability. | certificate, lot record, quality test |
| `dq_mass_records` | all mass rows | Every mass identifies date, site or batch, unit, moisture basis where relevant, and measurement device or source record. | calibration, weighbridge ticket, batch sheet |
| `dq_temporal_coverage` | crop-cycle and storage data | Cover the declared crop cycle and storage period and disclose single-season or multi-season aggregation. | dated field, input, harvest, storage, release records |
| `dq_input_completeness` | field and conditioning inputs | Quantify or justify zero or exclusion for source seed, nutrients, crop protection, irrigation, field energy, land, conditioning energy, treatment, and packaging. | ledgers, labels, meters, logs, invoices |
| `dq_quality_release` | accepted seed output | Retain lot-release basis, quality test method, moisture, purity, germination or viability, treatment status, and gate. | test, certificate, release record |
| `dq_reject_and_fate` | rejects, residues, waste | Every non-reference stream has measured or reconciled mass and declared destination; product status is not inferred from a name. | reject log, residue, dispatch or treatment record |
| `dq_mass_balance` | all processes | Reconcile field, conditioning, and storage outputs within declared tolerance and disclose unexplained fractions. | scale records, batch sheets, inventory reconciliation |
| `dq_binding_coordinate` | Flow Set and fixed bindings | The final data package preserves each Flow Set's flow type, direction, coordinate, property, unit, use context, and geography. A fixed binding is allowed only for a directly verified platform UUID. | identity record and Flow Set selection record |
## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm the verified groundnut sowing-seed UUID, all qualifiers, and the declared gate; the final exchange must retain that UUID. | `mass-balance-identity` |
| `validation_scope` | boundary | Confirm that the dataset is groundnut seed for sowing and does not silently include commodity grain, forage or silage groundnut, downstream cultivation, or downstream processing. | `fao-groundnut-seed-production` |
| `validation_process_map` | process inventory | Confirm field seed production, conditioning, quality release, and included storage are separate, with explicit hand-offs. | `fao-groundnut-seed-production`; `usda-seed-cleaning-handling` |
| `validation_flow_coordinates` | inventory rows | Confirm every parameterized row matches its Flow Set flow type, direction, coordinate, group, property, unit, use context, and geography constraints. | `mass-balance-identity` |
| `validation_nutrients_and_emissions` | nutrients and soil emissions | Confirm nutrient product mass, nutrient mass, method tier, factors, species, unit, and conversion; no module supplies a factor or product fact. | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_land` | irrigation, withdrawal, land | Keep delivered irrigation product input, natural water withdrawal, and land occupation distinct and prevent double counting. | `ipcc-2019-cropland` |
| `validation_quality_release` | accepted seed | Confirm seed class, quality attributes, treatment status, lot release, packaging state, and gate for the reference output. | `fao-groundnut-seed-production` |
| `validation_reject_fate` | rejects and waste | Confirm every rejected seed, screening, residue, packaging waste, and storage loss has a fate; do not assign a product-input Flow Set to waste. | `usda-seed-cleaning-handling`; `mass-balance-identity` |
| `validation_mass_balance` | all outputs | Confirm field, conditioning, and storage balances reconcile within declared tolerance and accepted seed is not counted at two hand-offs. | `mass-balance-identity` |
| `validation_allocation` | intentional co-products | Confirm any intentional co-product is separately identified, destination is evidenced, and allocation or substitution treatment is disclosed. | `iso-14044-2006` |
| `validation_module_boundary` | automatically selected modules | Apply module obligations as structure and checks only; modules do not supply product quantities, UUIDs, emission factors, or seed facts. | `iso-14044-2006` |
## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream LCA construction where seed class, route, quality attributes, geography, moisture, treatment, packaging, and gate match |
| excluded_use | commodity grain; forage or silage groundnut; downstream cultivation; food, feed, starch, or ethanol processing; datasets omitting seed-quality or gate qualifiers |
| required_metadata | reference flow; CPC scope; seed class; cultivar and seed class; variety or source-lot identity where applicable; geography; crop cycle; moisture; purity; germination or viability; treatment; packaging; gate; Flow Set selections; collection coverage; DQR |
| required_quality_disclosure | lot and field coverage, measurement records, quality-release evidence, calculation rules, structural coordinates and applicable Flow Set references, fixed UUID evidence if any, exclusions, mass-balance results, and data-quality scores |
| update_trigger | material change in route, cultivar or source-lot practice, conditioning technology, treatment, packaging, storage, reference qualifiers, Flow Set contract, collection coverage, or data quality |
## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-groundnut-seed-production` | official_guidance | FAO seed production and quality guidance, <https://www.fao.org/4/y4011e/y4011e0v.htm> | seed classes, quality attributes, lot acceptance, and seed-production boundary |
| `fao-groundnut-harvest-postharvest-2023` | official_guidance | FAO groundnut harvesting and post-harvesting handling, <https://www.fao.org/family-farming/detail/en/c/1619514/> | groundnut harvest, handling, and field-to-conditioning context |
| `fao-groundnut-drying-handling` | handbook | FAO, Agricultural engineering in development: Grain and post-harvest systems, <https://www.fao.org/4/t0522e/T0522E03.htm> | drying, moisture, cleaning, conditioning, and process hand-off |
| `usda-seed-cleaning-handling` | handbook | USDA, Seed cleaning and handling guidance, <https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo20323/pdf/GOVPUB-A-PURL-gpo20323.pdf> | cleaning, grading, screenings, rejects, and handling records |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | cropland management, residue treatment, land, and crop-management method context |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil nitrogen emissions and factor selection |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy, data quality, and sensitivity expectations |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for seed harvest, conditioning, packaging, storage, rejects, and reference-flow reconciliation. | output reconciliation, normalization, and QA guardrails |
