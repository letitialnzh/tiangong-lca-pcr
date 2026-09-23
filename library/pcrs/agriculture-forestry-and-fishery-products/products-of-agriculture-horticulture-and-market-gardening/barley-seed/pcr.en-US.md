---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Barley Seed for Sowing

## 1. Scope and Applicability

This PCR guides a foreground data package for barley grown specifically for seed purposes under CPC 3.0 `01151`. It covers the declared route from a source seed lot or other declared starting condition through field multiplication, harvest, conditioning, quality testing, optional treatment, packaging, storage, and the declared seed gate. It applies to certified, foundation, registered, quality-declared, farm-saved, or comparable barley sowing-seed lots when their class and quality status are disclosed.

Commodity barley not grown specifically for seed, malting, food, feed, starch, ethanol, downstream crop cultivation, retail use, capital goods, breeding research, and seed-processing services without a barley-seed product output are excluded unless explicitly added to the study scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-seed` |
| classification_refs | CPC 3.0 `01151`, `Barley, seed` |
| covered_products | Barley seed grown specifically for sowing, including declared certified, foundation, registered, quality-declared, farm-saved, or comparable seed lots |
| excluded_products | Non-seed barley; malting, food, feed, starch, and ethanol barley; downstream barley cultivation; breeding research; and seed-processing services without a barley-seed product output |
| representative_product | Accepted, cleaned, graded, and optionally treated barley sowing seed at the declared moisture basis, packaging state, and seed gate |
| production_route | Barley seed multiplication or controlled seed production followed by harvest, conditioning, quality release, optional treatment, packaging, storage, and gate hand-off |
| market_state | Barley seed lot accepted for sowing with declared class, variety or type, quality attributes, treatment status, packaging state, geography, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted barley seed for sowing at the declared seed gate |
| How much | 1 kg net accepted seed |
| How well | Barley variety or type; seed or certification class; moisture basis; physical purity; germination or viability; treatment status; packaging state; geography; crop cycle; and declared gate |
| How long or cycle | One declared barley seed-production crop cycle; storage duration is declared when storage is inside the gate |
| reference_flow_link | Reference amount and verified platform product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | barley variety or type; seed or certification class; treatment status; moisture basis; physical purity; germination or viability; geography; crop cycle; declared seed gate; packaging state |
| Binding | `fixed` |

The required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Mass is the reference basis. Seed-count records require a measured thousand-kernel weight or another transparent count-to-mass conversion.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` | kg | Express the reference as net accepted barley sowing seed at the declared gate and exclude container tare. |
| `seed_count_conversion` | seed-count records | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` | kg and seeds | Convert count to mass only with recorded thousand-kernel weight, lot count, or another transparent lot-specific factor. |
| `seed_quality_attributes` | accepted seed and source lots | declared quality property | declared unit | Retain variety or type, seed class, moisture, physical purity, germination or viability, treatment status, and lot-release status as attributes; do not substitute universal defaults. |
| `moisture_basis` | harvested, conditioned, stored, and delivered seed | Mass and declared moisture fraction | kg and declared fraction | Preserve as-received mass and moisture basis. Convert only with measured moisture and an explicit dry-matter and water-mass equation. |
| `fertilizer_n_basis` | nutrient inputs and soil emissions | Mass | kg product and kg nutrient | Record formulated product mass and nutrient mass separately; nitrogen calculations use declared kg N input. |
| `water_basis` | irrigation and withdrawal | Volume or mass | m3 or kg | Distinguish supplied irrigation water, natural-resource withdrawal, and any separately reported consumption indicator. |
| `energy_inventory` | field, conditioning, storage, and delivery energy | energy or carrier mass | kWh, MJ, L, or kg | Preserve energy carrier, measured unit, operation, process, and conversion basis. |
| `packaging_quantity` | packaging inputs | mass or item count | kg, g, or item | Record packaging mass or item count together with package capacity or lot assignment when conversion is required. |
| `land_basis` | cultivated land | area-time | ha·crop cycle or declared area-time unit | Record planted area and crop-cycle occupation; do not use land occupation as a proxy for land transformation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | source seed lot or other declared barley seed-production starting material |
| starting_condition_role | barley seed identity and crop-production starting condition |
| product_classification_scope | CPC 3.0 `01151`, Barley, seed; non-seed barley and downstream barley products are outside this PCR |
| recursive_input_rule | A same-category seed input used to establish the crop is recorded as the declared starting input and is not recursively expanded. Harvested seed crop entering conditioning is an intermediate hand-off, not a second reference output. |
| upstream_dataset_requirement | Purchased source seed, nutrient products, crop-protection products, irrigation-water supply, energy carriers, packaging materials, treatment materials, and waste-treatment services require representative upstream datasets or a documented exclusion. |
| disclosure | barley variety or type; seed class; source lot; field and geography; crop cycle; irrigation; nutrient and crop-protection records; harvest mass and moisture; conditioning, testing, treatment, packaging, storage, rejects, losses, and gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_seed_gate` | foreground boundary | Include source seed, barley seed production, harvest, conditioning, quality testing, optional treatment, packaging, and only storage or delivery needed to reach the declared seed gate. | `fao-seed-systems`; `fao-seeds` |
| `boundary_gate_definition` | reference product | Use the seed plant or conditioning-facility gate by default. A delivered-seed gate requires storage or delivery records, losses, and gate hand-off. | `fao-seeds`; `mass-balance-identity` |
| `boundary_seed_quality` | accepted seed | Include seed identity, grading, quality testing, treatment status, and lot acceptance when they determine whether the output is accepted barley sowing seed. | `fao-seed-systems`; `usda-seed-cleaning-handling` |
| `boundary_input_completeness` | field and conditioning | Provide a collected value, justified zero, or documented exclusion for source seed, nutrients, crop protection, irrigation, field energy, land, conditioning energy, treatment, packaging, storage, and direct emissions when in scope. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_output_separation` | all outputs | Separate accepted seed, harvested intermediate seed crop, screenings, rejected seed, dust, residues, packaging waste, storage losses, and unexplained loss by measured or reconciled mass and fate. | `usda-seed-cleaning-handling`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `barley_seed_multiplication` | Barley Seed Multiplication | required |  | foreground | harvested barley seed crop before conditioning |
| `barley_seed_conditioning_and_treatment` | Barley Seed Conditioning and Treatment | required |  | foreground | accepted cleaned and optionally treated barley sowing seed |
| `barley_seed_storage_and_delivery` | Barley Seed Storage and Delivery | conditional | include when storage or delivery is part of the declared gate or materially changes the delivered reference flow | foreground | delivered accepted barley seed |

### Process: Barley Seed Multiplication (`barley_seed_multiplication`)

#### Inputs

##### Product flows

###### Source seed lot for multiplication (`source_seed_lot_for_multiplication`)

Record the declared source lot that establishes the barley seed route. Keep lot identity, class, treatment, moisture, and source location separate from current-cycle accepted output.

- Selected flow: Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured source-lot mass by field or production unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_seed_lot_records`
- Sources: `fao-seed-systems`; `umn-small-grain-seeding-rate`

###### Agricultural nutrient and fertilizer inputs (`barley_seed_multiplication_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`

###### Irrigation water supplied (`irrigation_water_supplied`)

Record delivered irrigation water by field and source. A verified rain-fed route records a justified zero with supporting evidence.

- Selected flow: irrigation water supplied to the barley seed field
- Flow property / unit: Mass or volume / kg or m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or evidenced delivered irrigation by field and source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-cropland`

###### Field energy (`field_energy`)

Record fuel, electricity, and other direct energy used by field operations and pumping.

- Selected flow: field fuel or electricity for barley seed production
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Amount rule: measured fuel or energy use by field operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`

###### Crop-protection products (`crop_protection_products`)

Record named formulated products and active substances used for weeds, pests, or diseases.

- Selected flow: named crop-protection product or active substance
- Flow property / unit: Mass / kg product or active substance
- Amount rule: measured application by product and active substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvested barley seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-seed-systems`

##### Waste flows

No waste input is normally required. Include reused organic amendments or recovered water only when they cross the field boundary as waste-derived inputs.

##### Elementary flows

###### Cultivated land occupation (`cultivated_land_occupation`)

Record cultivated land occupation for the declared crop cycle. Land transformation is separate and is not inferred from occupation.

- Selected flow: cultivated land occupation
- Flow property / unit: Area-time / ha·crop cycle
- Amount rule: planted area multiplied by the declared crop-cycle occupation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted barley seed output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_use_records`
- Sources: `ipcc-2019-cropland`

###### Natural water withdrawal (`natural_water_withdrawal`)

Keep natural-resource withdrawal distinct from delivered irrigation-water product input.

- Selected flow: water resource withdrawn from the declared natural source
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: source-specific withdrawal measured or calculated from pumping records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted barley seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-cropland`

#### Outputs

##### Product flows

###### Harvested barley seed crop (`harvested_barley_seed_crop`)

Record harvested seed crop before conditioning. Keep it separate from accepted cleaned seed because harvest moisture, impurities, and conditioning status may differ.

- Selected flow: harvested barley seed crop before conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass with declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvested_seed_mass`
- Range: Field output identity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg field process reference output
  - Basis: field process output identity
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Field residue leaving the boundary (`field_residue_leaving_boundary`)

Record straw, chaff, or other residue only when it crosses the declared boundary; declare its destination.

- Selected flow: barley field residue crossing the declared boundary
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass and declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_residue_records`

##### Waste flows

###### Field waste sent to treatment (`field_waste_sent_to_treatment`)

Use only for a field waste stream that leaves the field boundary for a declared treatment route.

- Selected flow: field waste sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_residue_records`

##### Elementary flows

###### Direct soil nitrous oxide emission (`direct_soil_nitrous_oxide_emission`)

Calculate direct soil emissions from declared nutrient inputs using the selected method tier and disclose species conversion.

- Selected flow: nitrous oxide emission to air
- Flow property / unit: Mass / kg N2O or kg N2O-N
- Amount rule: selected method tier applied to collected nitrogen input and management context
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg N input and per 1 kg accepted barley seed output
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils-n2o`

###### Ammonia volatilization (`ammonia_volatilization`)

Record ammonia emissions when the selected soil-emission method and management context support them.

- Selected flow: ammonia emission to air
- Flow property / unit: Mass / kg NH3
- Amount rule: site-specific or regional method applied to collected nutrient records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg N input
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils-n2o`

###### Nitrate leaching to water (`nitrate_leaching_to_water`)

Record nitrate leaching when the selected method and collected nutrient, soil, water, and management records support it.

- Selected flow: nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: selected leaching method applied to collected nutrient and site records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg N input
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils-n2o`

###### Fossil carbon dioxide from field energy (`fossil_carbon_dioxide_from_field_energy`)

Calculate fossil carbon dioxide from collected field fuel and energy records with a declared factor source.

- Selected flow: fossil carbon dioxide emission to air
- Flow property / unit: Mass / kg CO2
- Amount rule: collected fuel or energy quantity multiplied by the declared emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per fuel inventory and per 1 kg accepted barley seed output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_energy_records`

### Process: Barley Seed Conditioning and Treatment (`barley_seed_conditioning_and_treatment`)

#### Inputs

##### Product flows

###### Harvested barley seed crop input (`harvested_barley_seed_crop_input`)

Record the harvested crop received for conditioning, including batch identity, received mass, moisture, and source field or supplier.

- Selected flow: harvested barley seed crop before conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured batch receiving mass with declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted cleaned barley seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_records`

###### Conditioning energy (`conditioning_energy`)

Record drying, cleaning, grading, testing, treatment, and packaging energy by campaign or process line.

- Selected flow: electricity or process energy for barley seed conditioning
- Flow property / unit: Energy or carrier mass / kWh, MJ, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: measured conditioning energy by operation and campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted cleaned barley seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `usda-seed-cleaning-handling`

###### Seed treatment material (`seed_treatment_material`)

Record each treatment product and active substance applied to a declared barley seed lot. Output treatment status is a required qualifier.

- Selected flow: named seed-treatment product or active substance
- Flow property / unit: Mass / kg product or active substance
- Amount rule: measured treatment-product mass and active-substance content by treated batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treated barley seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_treatment_records`
- Sources: `fao-seeds`

###### Packaging materials (`packaging_materials`)

Record bags, sacks, liners, labels, closures, or other packaging materials crossing the seed-facility boundary.

- Selected flow: primary packaging material for barley seed
- Flow property / unit: Mass or item / kg or item
- Amount rule: measured packaging mass or item count with package capacity and batch assignment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaged accepted barley seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_input_records`
- Sources: `usda-seed-cleaning-handling`

###### Conditioning water use (`conditioning_water_use`)

Record conditioning water only when it crosses the facility boundary or is a material process input.

- Selected flow: process water used in barley seed conditioning
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered or evidenced conditioning water by campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted cleaned barley seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`

##### Waste flows

No waste input is normally required. Include recovered or reused material only when its waste-derived status and boundary crossing are declared.

#### Outputs

##### Product flows

###### Accepted barley seed for sowing (`accepted_barley_seed_for_sowing`)

Record the accepted cleaned, graded, tested, and optionally treated barley seed released at the declared seed gate.

- Selected flow: Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured released-lot mass with moisture, purity, germination or viability, treatment, packaging, and gate attributes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: PCR reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accepted_seed_mass`
- Range: Accepted seed reference-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg PCR reference output
  - Basis: accepted barley seed reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Screenings and rejected seed (`screenings_and_rejected_seed`)

Record screenings, off-grade seed, broken kernels, and rejected lots as separate streams; each requires its own fate.

- Selected flow: screenings or rejected barley seed leaving conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled batch mass and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted cleaned barley seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_and_screening_records`
- Sources: `usda-seed-cleaning-handling`; `mass-balance-identity`

###### Conditioning dust and sweepings (`conditioning_dust_and_sweepings`)

Record dust, chaff, and sweepings that leave the facility as waste or a separately declared material stream.

- Selected flow: conditioning dust, chaff, or sweepings
- Flow property / unit: Mass / kg
- Amount rule: measured collection mass or documented mass-balance residual and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted cleaned barley seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_and_screening_records`
- Sources: `usda-seed-cleaning-handling`; `mass-balance-identity`

###### Packaging waste (`packaging_waste`)

Record packaging offcuts, damaged packages, and discarded packaging by material and fate.

- Selected flow: packaging waste from barley seed preparation
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass and declared treatment or recovery fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per packaged accepted barley seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`

##### Elementary flows

###### Conditioning dust emission to air (`conditioning_dust_emission_to_air`)

Record direct dust emissions only when a measured or documented facility emission record supports them. Collected dust and emitted dust are not the same row.

- Selected flow: particulate or dust emission to ambient air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or declared facility emission calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted cleaned barley seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_emission_records`

###### Fossil carbon dioxide from conditioning (`fossil_carbon_dioxide_from_conditioning`)

Calculate fossil carbon dioxide from conditioning fuel or energy records using a declared factor source.

- Selected flow: fossil carbon dioxide emission to air
- Flow property / unit: Mass / kg CO2
- Amount rule: collected conditioning fuel or energy multiplied by the declared emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted cleaned barley seed output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_energy_records`

### Process: Barley Seed Storage and Delivery (`barley_seed_storage_and_delivery`)

#### Inputs

##### Product flows

###### Storage electricity (`storage_electricity`)

Record electricity used to maintain or handle stored barley seed during the declared storage period.

- Selected flow: storage electricity
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: measured storage electricity by period and stored mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg delivered barley seed over declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_energy_records`

###### Delivery transport service (`delivery_transport_service`)

Record delivery only when the declared reference gate is delivered seed.

- Selected flow: freight transport service for barley seed delivery
- Flow property / unit: Transport service / tonne-km or route-specific service unit
- Amount rule: measured route distance, delivered mass, and carrier service record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per tonne-km or declared delivered-seed route
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery_transport_records`

##### Waste flows

#### Outputs

##### Product flows

###### Delivered accepted barley seed (`delivered_accepted_barley_seed`)

Record the delivered lot only when delivery is the declared reference gate. Do not count the same lot again at the seed-facility gate.

- Selected flow: Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured delivered-lot mass with gate and moisture attributes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: delivered reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivered_seed_mass`

##### Waste flows

###### Storage loss or damaged seed (`storage_loss_or_damaged_seed`)

Record stored seed loss, damage, or deterioration by lot and fate. It is not accepted seed output.

- Selected flow: storage loss or damaged barley seed
- Flow property / unit: Mass / kg
- Amount rule: inventory reconciliation and measured loss mass by lot and fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stored barley seed
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_loss_records`

##### Elementary flows

###### Storage and delivery fossil carbon dioxide (`storage_and_delivery_fossil_carbon_dioxide`)

Calculate fossil carbon dioxide from storage and delivery energy only when this conditional process is included.

- Selected flow: fossil carbon dioxide emission to air
- Flow property / unit: Mass / kg CO2
- Amount rule: storage and delivery energy multiplied by declared emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg delivered barley seed
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery_transport_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | field, conditioning, storage, and delivery processes | Avoid allocation by separately recording production, conditioning, treatment, packaging, storage, rejects, and fate-specific handling whenever the route can be subdivided. | `iso-14044-2006` |
| `allocation_intended_outputs` | intentional product outputs | If residue, downgraded seed, or another stream is intentionally sold or transferred as a product, identify its destination and apply a declared attribution method only after product status is evidenced. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_seed_quality` | accepted seed and downgraded lots | Do not allocate seed-quality burdens to commodity barley or a downgraded stream unless the alternate output is intentionally produced, separately identified, and included in the declared gate. | `iso-14044-2006` |
| `allocation_fallback` | multiple intended outputs | If subdivision is not possible, use a declared mass, physical-property, economic, or other defensible method, disclose the rationale, and test a materially different method as sensitivity. | `iso-14044-2006` |
| `allocation_reject_fate` | rejects, residues, waste, and storage losses | Keep field residue, conditioning rejects, packaging waste, storage losses, recovery, and disposal distinct; do not credit displaced product without destination and substitution evidence. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot_records` | `barley_seed_multiplication` | source seed lot | seed-lot record | lot; variety or type; class; treatment; mass; moisture; source | certificate, receiving record, calibrated scale | kg and attributes | per lot | crop cycle | field or production unit | sum by field or unit and normalize | certificate, record, scale |
| `cp_nutrient_input_records` | `barley_seed_multiplication` | nutrient and amendment inputs | application record | product; formulation; nutrient content; mass; date; field; method | invoice, label, application log | kg product and kg nutrient | per application | crop cycle | field | sum product and nutrient mass by field | invoice, label, log |
| `cp_irrigation_records` | `barley_seed_multiplication` | irrigation and withdrawal | meter or source record | source; meter; reading; volume; date; field; pumping energy | calibrated meter, pump log, water record | m3, kg, kWh | event or month | crop cycle | field and source | distinguish supplied water from withdrawal | calibration, readings |
| `cp_field_energy_records` | `barley_seed_multiplication` | field fuel and electricity | fuel or utility record | operation; carrier; quantity; machine; date; field | fuel log, meter, invoice, telematics | L, kg, MJ, kWh | operation or billing interval | crop cycle | field or unit | attribute energy without double counting | meter, invoice, log |
| `cp_crop_protection_records` | `barley_seed_multiplication` | crop protection | application record | product; active substance; dose; area; date; field; target | label and application log | kg product, kg active substance, ha | per application | crop cycle | field | sum by product and active substance | label, applicator record |
| `cp_land_use_records` | `barley_seed_multiplication` | land occupation | field-area record | field; planted area; dates; crop duration | field record, GIS, farm register | ha and crop cycle | per cycle | crop cycle | field | calculate area-time and normalize | field map, GIS |
| `cp_harvested_seed_mass` | `barley_seed_multiplication` | harvested seed crop | harvest record | field; date; mass; moisture; route; rejects | calibrated scale and harvest record | kg and moisture fraction | per harvest | crop cycle | field and receiving point | reconcile before conditioning | scale, harvest record |
| `cp_field_residue_records` | `barley_seed_multiplication` | field residue and waste | residue record | stream; mass; fate; date; field | scale, ticket, field log | kg | per event | crop cycle | field | sum by fate and boundary crossing | scale, ticket |
| `cp_conditioning_input_records` | `barley_seed_conditioning_and_treatment` | harvested seed input | batch receiving record | batch; input mass; moisture; source; date | batch sheet and calibrated scale | kg and moisture fraction | per batch | conditioning campaign | facility | reconcile received mass to outputs | batch sheet, scale |
| `cp_conditioning_energy_records` | `barley_seed_conditioning_and_treatment` | conditioning energy | meter or equipment record | campaign; energy; quantity; operation; period | meter, utility bill, equipment log | kWh, MJ, kg, L | campaign or interval | conditioning campaign | facility | sum by operation and normalize | meter, bill, log |
| `cp_conditioning_water_records` | `barley_seed_conditioning_and_treatment` | conditioning water | meter or facility record | source; meter; quantity; date; campaign | meter, bill, facility log | m3 or kg | campaign or interval | conditioning campaign | facility | sum water crossing boundary | meter, bill |
| `cp_seed_treatment_records` | `barley_seed_conditioning_and_treatment` | treatment material | treatment record | product; active substance; dose; treated mass; lot | treatment log, label, supplier certificate | kg product, kg active substance, kg seed | per batch | conditioning campaign | facility | sum by product and treated lot | log, label |
| `cp_packaging_input_records` | `barley_seed_conditioning_and_treatment` | packaging | packaging issue record | type; count; capacity; mass; batch | inventory record or packing log | item and kg | per batch | conditioning campaign | facility | convert count only with capacity or mass | packing log |
| `cp_accepted_seed_mass` | `barley_seed_conditioning_and_treatment` | accepted seed | release record | batch; mass; moisture; purity; germination; treatment; gate | calibrated scale and quality test | kg and attributes | per batch | conditioning campaign | facility and gate | sum released lots at declared basis | scale, test, release record |
| `cp_reject_and_screening_records` | `barley_seed_conditioning_and_treatment` | rejects, screenings, dust, sweepings | reject record | batch; stream; mass; fate | scale or mass balance | kg | per batch | conditioning campaign | facility | sum by stream and fate | scale, log, fate record |
| `cp_packaging_waste_records` | `barley_seed_conditioning_and_treatment` | packaging waste | waste record | material; mass; fate; period | scale or contractor record | kg | per shipment or campaign | conditioning campaign | facility | sum by material and fate | scale ticket, contractor record |
| `cp_conditioning_emission_records` | `barley_seed_conditioning_and_treatment` | conditioning emissions | emission record | substance; compartment; mass or factor; campaign | dust log, maintenance record, calculation | kg | campaign or period | conditioning campaign | facility | sum by species and compartment | log, calculation |
| `cp_storage_energy_records` | `barley_seed_storage_and_delivery` | storage electricity | utility or inventory record | lot; meter; quantity; period; stored mass | meter or utility bill | kWh or MJ | period | storage duration | storage site | allocate by mass and duration | meter, bill |
| `cp_delivery_transport_records` | `barley_seed_storage_and_delivery` | delivery transport | transport record | route; distance; vehicle; fuel or tonne-km; mass | carrier invoice, dispatch record, fuel log | kg fuel or tonne-km | per shipment | delivery period | route | sum service and normalize | invoice, dispatch, log |
| `cp_storage_loss_records` | `barley_seed_storage_and_delivery` | storage loss | loss record | lot; loss mass; category; fate; period | inventory reconciliation and scale | kg | per lot or period | storage duration | storage site | sum by fate | inventory, disposal record |
| `cp_delivered_seed_mass` | `barley_seed_storage_and_delivery` | delivered seed | delivery record | lot; mass; date; gate; receiver; moisture | dispatch record and calibrated scale | kg and moisture fraction | per shipment | delivery period | declared gate | sum delivered lots without double count | dispatch, scale |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_accepted_seed` | all foreground rows | Divide each measured or calculated amount by net accepted seed at the same declared gate and moisture basis. | input records; accepted seed records | amount per 1 kg reference flow | `mass-balance-identity` |
| `convert_seed_moisture_basis` | harvest, conditioning, storage, delivery | Convert only from recorded mass and moisture using an explicit dry-matter and water-mass equation. | harvest; receiving; quality; delivery records | declared-basis mass | `mass-balance-identity`; `usda-seed-cleaning-handling` |
| `calculate_seed_conditioning_yield` | conditioning output | Accepted seed mass divided by received harvested seed-crop mass, retaining rejects, moisture change, and unexplained fraction separately. | conditioning input; accepted mass; reject records | yield, reject fraction, unexplained fraction | `usda-seed-cleaning-handling`; `mass-balance-identity` |
| `calculate_land_occupation` | land occupation | Planted area multiplied by declared crop-cycle occupation and normalized to accepted seed. | land records; accepted seed mass | area-time per reference flow | `ipcc-2019-cropland` |
| `calculate_water_withdrawal` | water withdrawal | Convert metered volume where needed and keep source withdrawal separate from delivered irrigation. | irrigation records | resource withdrawal per reference flow | `ipcc-2019-cropland` |
| `calculate_managed_soil_emissions` | nitrogen emissions | Apply the selected method tier to nutrient inputs and declared soil, climate, and management context; disclose species conversion. | nutrient records; method factors | species-specific emissions | `ipcc-2019-managed-soils-n2o` |
| `calculate_field_energy_emissions` | field energy | Multiply recorded fuel or energy by the declared factor and normalize to accepted seed. | field energy; factor | field-energy emissions | `ipcc-2019-cropland` |
| `calculate_conditioning_energy_emissions` | conditioning energy | Multiply recorded conditioning fuel or energy by the declared factor and normalize. | conditioning energy; factor | conditioning emissions | `usda-seed-cleaning-handling` |
| `calculate_storage_delivery_emissions` | storage and delivery | Apply declared factors to included storage and delivery energy and normalize to the declared gate. | storage energy; transport records; factors | storage and delivery emissions | `mass-balance-identity` |
| `reconcile_field_outputs` | field production | Reconcile harvested seed crop, residue, field waste, and documented loss to field records on a declared moisture basis. | harvest; residue; waste records | field output balance | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | conditioning | Reconcile received mass and moisture to accepted seed, screenings, rejects, dust, packaging waste, and documented loss. | conditioning input; accepted seed; reject records | conditioning balance | `mass-balance-identity`; `usda-seed-cleaning-handling` |
| `reconcile_storage_outputs` | storage | Reconcile stored mass to delivered seed, storage loss, and closing inventory for the declared period. | storage; delivery; loss records | storage balance | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_seed_identity` | reference product and source lots | Declare barley variety or type, seed class, treatment status, moisture basis, physical purity, germination or viability, and lot identity. | certificate, lot record, quality test |
| `dq_mass_records` | all mass rows | Every mass identifies date, site or batch, unit, moisture basis where relevant, and measurement device or source record. | calibration, weighbridge ticket, batch sheet |
| `dq_temporal_coverage` | crop-cycle and storage data | Cover the declared crop cycle and storage period and disclose single-season or multi-season aggregation. | dated field, input, harvest, storage, release records |
| `dq_input_completeness` | field and conditioning inputs | Quantify or justify zero or exclusion for source seed, nutrients, crop protection, irrigation, land, energy, treatment, packaging, storage, and direct emissions when in scope. | ledgers, labels, meters, logs, invoices |
| `dq_quality_release` | accepted seed output | Retain lot-release basis, quality test method, moisture, purity, germination or viability, treatment status, packaging state, and gate. | test, certificate, release record |
| `dq_reject_and_fate` | rejects, residues, waste, storage loss | Every non-reference stream has measured or reconciled mass and declared destination; product status is not inferred from a name. | reject log, residue, dispatch, treatment, or disposal record |
| `dq_mass_balance` | all processes | Reconcile field, conditioning, and storage outputs on a declared moisture basis and disclose unexplained fractions. | scale records, batch sheets, inventory reconciliation |
| `dq_binding_coordinate` | fixed and parameterized rows | Preserve flow type, direction, coordinate, property, unit, use context, and geography. A fixed binding requires a directly verified platform UUID. | identity record and Flow Set selection record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm the verified barley sowing-seed UUID, all qualifiers, moisture basis, and declared gate; the final exchange must retain that UUID. | `fao-seed-systems`; `mass-balance-identity` |
| `validation_scope` | boundary | Confirm the dataset is barley seed for sowing and does not silently include non-seed barley, malting, food, feed, ethanol, or downstream cultivation. | `fao-seed-systems` |
| `validation_process_map` | process inventory | Confirm multiplication, conditioning and quality release, and included storage or delivery are separate nodes with explicit hand-offs. | `fao-seed-systems`; `usda-seed-cleaning-handling` |
| `validation_flow_coordinates` | inventory rows | Confirm every parameterized row matches its Flow Set flow type, direction, coordinate, group, property, unit, use context, and geography constraints. | `mass-balance-identity` |
| `validation_nutrients_and_emissions` | nutrients and soil emissions | Confirm nutrient product mass, nutrient mass, method tier, factors, species, unit, and conversion; no module supplies a factor or product fact. | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_land` | irrigation, withdrawal, land | Keep delivered irrigation product input, natural water withdrawal, and land occupation distinct and prevent double counting. | `ipcc-2019-cropland` |
| `validation_quality_release` | accepted seed | Confirm barley identity, seed class, quality attributes, treatment status, lot release, packaging state, moisture basis, and gate. | `fao-seed-systems`; `usda-seed-cleaning-handling` |
| `validation_reject_fate` | rejects and waste | Confirm every rejected seed, screening, residue, dust, packaging waste, and storage loss has a fate; do not assign a product-input Flow Set to waste. | `usda-seed-cleaning-handling`; `mass-balance-identity` |
| `validation_mass_balance` | all outputs | Confirm field, conditioning, and storage balances reconcile on a declared moisture basis and accepted seed is not counted at two hand-offs. | `mass-balance-identity` |
| `validation_allocation` | intentional co-products | Confirm any intentional co-product is separately identified, destination is evidenced, and allocation or substitution treatment is disclosed. | `iso-14044-2006` |
| `validation_module_boundary` | automatically selected modules | Apply module obligations as structure and checks only; modules do not supply product quantities, UUIDs, emission factors, or barley-specific facts. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream LCA construction where barley seed class, variety or type, route, quality attributes, geography, moisture, treatment, packaging, storage scope, and gate match |
| excluded_use | non-seed barley; malting, food, feed, starch, or ethanol processing; downstream barley cultivation; and datasets omitting seed-quality or gate qualifiers |
| required_metadata | reference flow; CPC scope; barley variety or type; seed class; geography; crop cycle; moisture; purity; germination or viability; treatment; packaging; gate; Flow Set selections; collection coverage; DQR |
| required_quality_disclosure | lot and field coverage, measurement records, quality-release evidence, calculation rules, structural coordinates and Flow Set references, fixed UUID evidence, exclusions, moisture-basis reconciliation, mass-balance results, and data-quality scores |
| update_trigger | material change in route, variety or type, seed class, conditioning technology, treatment, packaging, storage, reference qualifiers, Flow Set contract, collection coverage, or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-systems` | official_guidance | FAO, What are seed systems?, <https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/tools-guidelines/what-are-seed-systems/en/> | seed identity, multiplication, quality attributes, and seed-system boundary |
| `fao-seeds` | official_guidance | FAO Seeds portal, <https://www.fao.org/seeds/en/> | seed production, quality assurance, storage, and lot disclosure |
| `usda-seed-cleaning-handling` | handbook | USDA, Mechanical Seed Cleaning and Handling, <https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo23714/pdf/GOVPUB-A-PURL-gpo23714.pdf> | cleaning, grading, drying, storage, screenings, rejects, and handling records |
| `umn-small-grain-seeding-rate` | extension_guidance | University of Minnesota Extension, Seeding rate for small grains, <https://extension.umn.edu/agriculture/crop-production/small-grains/seeding-rate-for-small-grains> | barley seeding-rate calculation, germination, seed count, and lot-specific kernel-weight context |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | cropland management, residue treatment, land, and crop-management methods |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil nitrogen emissions and factor selection |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy, data quality, and sensitivity expectations |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for field, conditioning, packaging, storage, rejects, losses, and reference-flow reconciliation. | output reconciliation, normalization, and QA guardrails |
