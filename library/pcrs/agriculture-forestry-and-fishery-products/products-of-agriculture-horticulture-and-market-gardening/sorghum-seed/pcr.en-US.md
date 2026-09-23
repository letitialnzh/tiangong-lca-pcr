---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Sorghum Seed for Sowing

## 1. Scope and Applicability

This PCR guides foreground data package construction for sorghum seed intended for sowing. It covers seed multiplication or controlled seed production, field management, harvest, threshing or shelling where applicable, drying, cleaning, grading, quality testing, optional treatment, packaging, storage, and delivery to the declared seed gate.

It applies to breeder, foundation, registered, certified, farmer-selected, or comparable sowing-seed lots when the seed class, variety, production route, quality status, geography, reporting period, and gate are declared. The PCR is a dataset-production rule. It does not supply universal product quantities, emission factors, quality values, or UUIDs beyond the verified reference product identity stated below.

Commodity sorghum grain, sorghum for food or feed, sweet sorghum, forage or silage sorghum, downstream sorghum cultivation, grain milling, retail distribution, consumer use, and seed-processing services without a sorghum seed product output are excluded. Breeding research and capital goods are excluded unless the foreground data package explicitly includes them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-seed` |
| classification_refs | CPC 3.0 `01141`, `Sorghum, seed` |
| covered_products | cleaned, graded, quality-tested sorghum seed intended for sowing, including declared breeder, foundation, registered, certified, farmer-selected, or comparable seed lots |
| excluded_products | commodity sorghum grain; sweet sorghum; forage or silage sorghum; sorghum for food or feed; downstream crop production; processed sorghum products; seed-processing services without a sorghum seed product output |
| representative_product | accepted sorghum sowing seed at the declared moisture basis, quality status, treatment status, packaging state, and seed gate |
| production_route | sorghum seed multiplication or controlled seed production followed by harvest, conditioning, quality testing, optional treatment, packaging, storage, and delivery |
| market_state | seed lot released for sowing with declared class, variety, quality evidence, treatment status, geography, reporting period, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | accepted sorghum seed for sowing at the declared seed gate |
| How much | 1 kg net accepted seed |
| How well | declared seed class, variety or hybrid status where applicable, moisture basis, physical purity, germination or viability, treatment status, geography, reporting period, packaging state, and gate |
| How long or cycle | one declared sorghum seed production crop cycle; storage duration is declared separately when storage is inside the gate |
| reference_flow_link | reference amount and verified platform product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | seed class or certification class; sorghum variety or hybrid status where applicable; moisture basis; physical purity; germination or viability; treatment status; geography; crop cycle and reporting period; declared seed gate; packaging state |
| Binding | `fixed` |

The reference amount is the net mass of accepted seed released at the declared gate. Container tare, removed water, screenings, rejected seed, dust, storage losses, packaging waste, and other residues must be recorded separately and must not be silently included in the reference output. Seed-count records require thousand-seed mass or another transparent count-to-mass conversion.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference as net kg of accepted sorghum seed for sowing at the declared gate and moisture basis. |
| `seed_count_conversion` | seed-count records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and seeds | Convert seed count to mass only when thousand-seed mass, lot count, or another transparent conversion record is available. |
| `seed_quality_attributes` | accepted seed | declared quality property | percent or declared unit | Retain seed class, variety or hybrid status, physical purity, germination or viability, moisture, treatment status, sampling basis, and release decision as lot attributes; do not replace them with a universal default. |
| `moisture_basis` | harvested, conditioned, stored, and accepted seed | mass and declared moisture fraction | kg and percent | Preserve as-received mass and moisture basis. Convert between bases only with measured moisture and an explicit dry-matter and water-mass equation. |
| `nutrient_basis` | nutrient inputs and soil emissions | mass and nutrient content | kg product and kg nutrient | Record formulated product mass and nutrient content separately; nitrogen calculations use declared kg N input rather than fertilizer-product mass. |
| `water_basis` | irrigation and withdrawal | volume or mass | m3 or kg | Distinguish water-resource withdrawal, delivered irrigation water, consumption, conveyance loss, and any separately reported water indicator. |
| `energy_inventory` | field, pumping, drying, conditioning, storage, and delivery energy | energy or carrier mass | kWh, MJ, L, or kg | Preserve the energy carrier, measured unit, operation, process, geography, and conversion basis. |
| `packaging_quantity` | packaging inputs and waste | mass, area, or item count | kg, m2, or item | Record packaging material quantity and package capacity or item count needed to reconcile packaging with accepted reference output. |
| `land_basis` | land occupation and transformation | area-time or area | ha·crop cycle or declared platform unit | Record planted area and crop-cycle occupation separately from any land transformation; do not use land occupation as a proxy for transformation. |

## 5. System Boundary

The default foreground boundary runs from the declared source seed lot or other declared seed-production starting condition to accepted sorghum sowing seed at the declared seed gate. It includes field preparation, sowing, nutrient management, irrigation where applicable, crop protection, rouging or field inspection when material, field operations, harvest, threshing or shelling where applicable, field-to-facility movement when inside the gate, drying, cleaning, grading, quality testing, treatment, packaging, storage, and delivery when the declared gate is delivered seed.

Upstream production of purchased nutrient products, energy carriers, packaging, treatment materials, and treatment services is represented by linked background data. Commodity sorghum production, sweet sorghum, food or feed processing, milling, downstream cultivation, retail, and consumer use are outside the default boundary. The harvested seed crop entering conditioning is an intermediate hand-off and must remain distinct from the accepted sowing-seed reference output.

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_seed_production` | field and seed-facility route | Include the declared starting seed or seed-production condition, field production, harvest, threshing or shelling where applicable, drying, cleaning, grading, quality testing, treatment, packaging, storage, and delivery only to the declared gate. | `fao-sorghum-seed-production`; `fao-grain-postharvest-systems` |
| `boundary_gate_definition` | reference product | Use the seed plant or farm gate by default. A delivered-seed gate requires storage or delivery records, losses, packaging state, and gate hand-off evidence. | `fao-sorghum-seed-production`; `mass-balance-identity` |
| `boundary_input_completeness` | all foreground routes | Address source seed, nutrients, irrigation, crop protection, land, field energy, pumping, drying, conditioning energy, treatment materials, packaging, storage, and direct emissions with a collected value, justified zero, or documented exclusion. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_quality_separation` | sorghum seed outputs | Separate accepted seed, intended co-products, harvested intermediate crop, screenings, rejected seed, broken or damaged seed, dust, storage losses, packaging waste, and other residues by measured mass and declared fate. | `fao-sorghum-seed-production`; `fao-grain-cleaning-treatment`; `mass-balance-identity` |
| `boundary_moisture_reconciliation` | harvest, drying, conditioning, and storage | Reconcile inputs and outputs on one declared moisture basis and disclose water removed during drying or lost during storage. | `fao-sorghum-seed-production`; `fao-grain-postharvest-systems`; `mass-balance-identity` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | source seed lot or declared sorghum seed-production starting material |
| starting_condition_role | seed identity and propagation condition |
| product_classification_scope | current CPC 3.0 product category `01141`, `Sorghum, seed`; commodity sorghum and sweet sorghum remain outside this PCR |
| recursive_input_rule | a same-category seed input that would cause recursive tracing is recorded as the declared source seed lot with lot identity, origin, purpose, and mass rather than recursively expanding the seed PCR |
| upstream_dataset_requirement | use representative upstream datasets for purchased materials, energy, water supply, transport, treatment, and waste services; disclose the selected Flow Set resolution in the foreground package |
| disclosure | record source seed lot, variety or hybrid status, seed class, field and geography, crop cycle, production system, irrigation status, nutrient and crop-protection records, harvest mass and moisture, conditioning, quality tests, treatment, packaging, storage, gate, outputs, residue fates, and reporting period |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sorghum_seed_multiplication` | Sorghum Seed Multiplication | required | include field or controlled production of the sorghum seed crop | foreground | harvested sorghum seed crop before conditioning |
| `sorghum_seed_conditioning_and_treatment` | Sorghum Seed Conditioning and Treatment | required | include drying, threshing or shelling where applicable, cleaning, grading, testing, treatment, and packaging before the declared gate | foreground | accepted sorghum seed output |
| `sorghum_seed_storage_and_delivery` | Sorghum Seed Storage and Delivery | conditional | include when storage or delivery is part of the declared gate or materially changes the reference product state | foreground | delivered accepted sorghum seed output |

### Process: Sorghum Seed Multiplication (`sorghum_seed_multiplication`)

#### Inputs

##### Product flows

###### Source seed lot used for multiplication (`source_seed_lot`)

The declared source seed lot is the propagation input. Its variety, class, treatment status, origin, mass, and lot identity are recorded separately from current-cycle accepted output; same-category tracing stops at this declared starting condition.

- Selected flow: Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: measured source-lot mass or transparent seeding-record conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested sorghum seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_seed_lot`
- Sources: `fao-sorghum-seed-production`

###### Agricultural nutrient and fertilizer inputs (`sorghum_seed_multiplication_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested sorghum seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources:

###### Irrigation water supplied (`irrigation_water`)

Record delivered irrigation water by field and source. A verified rain-fed route records a justified zero with supporting field evidence.

- Selected flow: irrigation water supplied to the sorghum seed-production field
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered or evidenced delivered irrigation by field and source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested sorghum seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`

###### Field machinery energy (`field_energy`)

Record fuel or measured mechanical energy used for land preparation, sowing, crop care, harvesting, and field movement. Keep irrigation pumping electricity separate when it has its own meter or allocation.

- Selected flow: field machinery energy supply
- Flow property / unit: Energy or carrier mass / MJ, kWh, L, or kg
- Amount rule: measured field fuel or mechanical-energy use by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested sorghum seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`

###### Irrigation pumping electricity (`irrigation_pumping_electricity`)

Record purchased electricity used for irrigation pumping or electrically driven field equipment at the field boundary when it is not already included in a measured energy record.

- Selected flow: purchased electricity for irrigation pumping
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: meter, utility bill, or supplier record allocated to the declared field route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested sorghum seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`

###### Crop-protection material (`crop_protection_material`)

Record named formulated products and active substances used for weeds, pests, or diseases. Product identity and active-substance content remain distinct.

- Selected flow: crop-protection material for sorghum seed production
- Flow property / unit: Mass / kg product or active substance
- Amount rule: measured application by product and active substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvested sorghum seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`

##### Waste flows

No waste input is assumed. A waste-derived or recovered input is recorded only when its source, treatment, use, and quantity are documented; its nutrient or material function must still use the applicable existing input Flow Set.

##### Elementary flows

###### Land occupation (`land_occupation`)

Record planted area and crop-cycle occupation. Land transformation is a separate interaction and must not be inferred from occupation.

- Selected flow: land occupation supporting sorghum seed production
- Flow property / unit: Area-time / ha·crop cycle or declared platform unit
- Amount rule: measured planted area and declared crop-cycle duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per kg reference output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`

###### Water-resource withdrawal (`water_withdrawal`)

Record water-resource withdrawal by source and reconcile it with delivered irrigation water and any documented conveyance loss.

- Selected flow: water resource withdrawn for sorghum seed irrigation
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: source-metered withdrawal, separate from delivery and consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested sorghum seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`

#### Outputs

##### Product flows

###### Harvested sorghum seed crop (`harvested_sorghum_seed_crop`)

The harvested sorghum seed crop leaving field production and entering conditioning is an intermediate product hand-off. It is not the final reference output until conditioning, quality release, and the declared gate are complete.

- Selected flow: harvested sorghum seed crop for conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured harvest mass at the declared received moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested sorghum seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`

##### Waste flows

Field residues, removed biomass, and damaged or unharvested material are recorded only when they cross the declared field boundary. Record the measured quantity and fate; no product-input Flow Set is used for a waste output.

###### Field residues or removed biomass (`field_residues_or_removed_biomass`)

Record field residues or removed biomass that crosses the declared boundary as a waste output unless the data package declares an intended co-product hand-off.

- Selected flow: field residues or removed biomass from sorghum seed production
- Flow property / unit: Mass / kg
- Amount rule: measured mass and declared fate by field or crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested sorghum seed crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`

##### Elementary flows

###### Direct soil nitrous oxide emission (`direct_soil_n2o`)

Calculate direct soil nitrous oxide from declared nitrogen inputs and the selected IPCC or accepted regional method. Resolve the final elementary flow during foreground data generation.

- Selected flow: direct soil nitrous oxide emission to air
- Flow property / unit: Mass / kg N2O or kg N2O-N as required by the selected method
- Amount rule: selected method applied to declared nitrogen inputs and field conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference output
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Ammonia emission (`ammonia_emission`)

Record ammonia to air when the selected nitrogen method and foreground evidence support the pathway.

- Selected flow: ammonia emission to ambient air from sorghum seed production
- Flow property / unit: Mass / kg NH3
- Amount rule: site- or region-specific nitrogen-emission method applied to declared nitrogen inputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference output
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Nitrate emission to water (`nitrate_emission`)

Record nitrate loss to water only when field evidence or the selected regional method supports the pathway.

- Selected flow: nitrate emission to water from sorghum seed production
- Flow property / unit: Mass / kg nitrate or nitrogen equivalent as required by the selected method
- Amount rule: selected leaching method applied to declared nitrogen inputs and water conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference output
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`

### Process: Sorghum Seed Conditioning and Treatment (`sorghum_seed_conditioning_and_treatment`)

#### Inputs

##### Product flows

###### Harvested sorghum seed crop for conditioning (`conditioning_seed_crop_input`)

Record the harvested crop received for drying, threshing or shelling where applicable, cleaning, grading, testing, and treatment. Its received mass and moisture basis remain distinct from accepted output.

- Selected flow: harvested sorghum seed crop for conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured received mass and moisture basis by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted sorghum seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input`

###### Conditioning electricity (`conditioning_electricity`)

Record electricity for cleaning, grading, threshing, conveying, testing, and other conditioning operations included in the gate.

- Selected flow: purchased electricity for sorghum seed conditioning
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: meter, invoice, or documented allocation by batch or conditioning period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted sorghum seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`

###### Drying heat or energy carrier (`drying_heat`)

Record heat or the energy carrier used to dry seed to the declared quality and storage state. Keep carrier, unit, operation, and conversion basis explicit.

- Selected flow: drying heat or combusted energy carrier
- Flow property / unit: Energy or carrier mass / MJ, kWh, L, or kg
- Amount rule: measured drying energy or documented carrier conversion by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted sorghum seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-grain-postharvest-systems`

###### Seed-treatment material (`seed_treatment_material`)

Record formulated treatment products or active substances only when treatment is part of the declared market state and crosses the foreground boundary.

- Selected flow: seed-treatment material for sorghum seed
- Flow property / unit: Mass / kg product or active substance
- Amount rule: treatment product and active-substance mass by treated lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated sorghum seed output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_treatment_records`
- Sources: `fao-sorghum-seed-production`

###### Primary packaging (`primary_packaging`)

Record packaging used to contain, protect, identify, and release the declared sorghum seed output.

- Selected flow: primary packaging for sorghum seed
- Flow property / unit: Mass, area, or item / kg, m2, or item
- Amount rule: measured material mass, area, or item count and package capacity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged sorghum seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

No conditioning waste input is assumed. Recovered or recycled material is included only when its source, treatment, quantity, and use are documented.

##### Elementary flows

Conditioning resources and emissions are recorded only when they cross the declared facility boundary and are not already represented by the field process or the selected energy and material rows.

#### Outputs

##### Product flows

###### Accepted sorghum seed for sowing (`accepted_sorghum_seed_output`)

Accepted sorghum seed is the PCR reference product role. It is released only after the declared quality, treatment, packaging, gate, and lot evidence are complete.

- Selected flow: Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: measured net accepted seed mass at the declared moisture basis and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: PCR reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accepted_seed_output`
- Sources: `fao-sorghum-seed-production`

##### Waste flows

Screenings, rejected seed, broken or damaged seed, dust captured as waste, packaging waste, and other non-reference outputs are recorded with measured mass and declared fate. They do not use product-input Flow Sets and do not receive a product-output fallback binding.

###### Conditioning screenings and rejected seed (`conditioning_screenings_and_rejected_seed`)

Record screenings, rejected seed, broken seed, or damaged seed leaving the conditioning route as a waste output unless the data package declares an intended co-product hand-off.

- Selected flow: screenings and rejected sorghum seed from conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured mass, moisture basis, and declared destination by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted sorghum seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_and_screening_records`

###### Conditioning packaging waste (`conditioning_packaging_waste`)

Record packaging material discarded during conditioning and packing separately from packaging material incorporated into the accepted product presentation.

- Selected flow: packaging waste from sorghum seed conditioning and packing
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste mass and declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged sorghum seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`

##### Elementary flows

###### Conditioning dust emission (`conditioning_dust`)

Record dust or particulate emissions from cleaning, grading, threshing, shelling, or handling when material to the declared route or required by the selected method.

- Selected flow: dust or particulate emission to ambient air from sorghum seed conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured or documented method-based release by batch or conditioning period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted sorghum seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_emissions`
- Sources: `fao-grain-cleaning-treatment`

### Process: Sorghum Seed Storage and Delivery (`sorghum_seed_storage_and_delivery`)

#### Inputs

##### Product flows

###### Storage electricity (`storage_electricity`)

Include storage electricity when cooling, ventilation, monitoring, or other storage energy is inside the declared gate.

- Selected flow: purchased electricity for sorghum seed storage
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured storage electricity or documented allocation by lot and storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg delivered sorghum seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_delivery_records`
- Sources: `fao-sorghum-seed-production`

###### Delivery transport service (`delivery_transport`)

Include delivery transport only when the declared gate is delivered seed. Record route, carrier, load, distance, and allocation basis.

- Selected flow: freight transport service for delivered sorghum seed
- Flow property / unit: Mass-distance or declared service unit
- Amount rule: documented transport activity by lot and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg delivered sorghum seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_delivery_records`

##### Waste flows

Storage losses, damaged lots, and delivery losses are recorded as waste or non-reference outputs with measured mass, moisture basis, and fate. They are not silently folded into the accepted seed output.

###### Storage and delivery losses (`storage_and_delivery_losses`)

Record mass lost or downgraded during storage or delivery, including its moisture basis, reporting period, and destination.

- Selected flow: storage and delivery loss from sorghum seed
- Flow property / unit: Mass / kg
- Amount rule: measured loss mass and declared fate by lot or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg delivered sorghum seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_delivery_records`

##### Elementary flows

Storage and delivery do not receive default elementary-flow rows. Add a resource or emission row only when it crosses the declared boundary and has a documented identity and quantity.

#### Outputs

##### Product flows

###### Delivered accepted sorghum seed (`delivered_sorghum_seed_output`)

When delivery is inside the declared gate, the delivered accepted lot remains the same sorghum seed reference product and is reconciled to storage and transport losses.

- Selected flow: Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: measured net accepted mass at the delivered gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: PCR reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_delivery_records`

##### Waste flows

Record storage and delivery losses separately with their fate. Do not assign them the fixed product binding used by accepted seed.

##### Elementary flows

No default elementary output is asserted for storage and delivery. Resolve any route-specific emission only from collected records or an accepted method and retain the environmental compartment.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | field, conditioning, treatment, packaging, storage, and delivery | Avoid allocation where records permit by separating seed multiplication, conditioning, treatment, packaging, storage, reject handling, and residue management into distinct process responsibilities. | `iso-14044-2006` |
| `allocation_output_completeness` | accepted seed and non-reference outputs | Before selecting an allocation method, enumerate accepted seed, intended co-products, harvested intermediate crop, screenings, rejected seed, losses, residues, packaging waste, and each declared fate. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_method_selection` | shared burdens | If burdens remain shared, declare the selected physical or economic relationship, reporting period, data basis, and sensitivity. Do not use a module or PCR default quantity as the allocation answer. | `iso-14044-2006` |
| `allocation_seed_quality` | seed class and quality release | Do not allocate solely from seed quality labels. Keep lot acceptance, quality release, accepted seed, and non-accepted destinations traceable to measured outputs and the declared decision. | `fao-sorghum-seed-production`; `iso-14044-2006` |

Screenings, rejects, dust, field residues, storage losses, and packaging waste are not co-products merely because they have a possible use. Treat an output as a co-product only when the data package declares intended production, transfer or sale, quality, quantity, destination, and a defensible attribution decision.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot` | `sorghum_seed_multiplication` | source seed lot | lot and sowing record | lot id; variety or hybrid status; seed class; supplier or source; treatment; mass; sowing date; field | lot certificate, invoice, sowing log, and calibrated scale | kg and declared attributes | each lot and crop cycle | complete crop cycle | field or seed farm | sum by lot and link to planted area | lot certificate and scale record |
| `cp_nutrient_records` | `sorghum_seed_multiplication` | nutrient and soil-amendment input | input ledger | product; formulation; nutrient content; mass; field; date; supplier; application method | invoices, application logs, and field records | kg product and kg nutrient | each application | crop cycle | field or block | sum by product and nutrient | invoice and application record |
| `cp_irrigation_records` | `sorghum_seed_multiplication` | delivered irrigation and withdrawal | meter or pumping record | source; meter; readings; volume; pumping energy; date; field | calibrated meter, pumping log, or invoice | m3, kg, and energy unit | each event or reporting period | irrigation period | field and water source | distinguish withdrawal, delivery, consumption, and loss | meter calibration and readings |
| `cp_field_energy_records` | `sorghum_seed_multiplication` | field energy | machinery or fuel record | operation; carrier; quantity; equipment; field; date | fuel ledger, machinery record, or measured operation | L, kg, MJ, or kWh | each operation | crop cycle | field and machinery group | sum by operation and carrier | invoice or machinery record |
| `cp_crop_protection_records` | `sorghum_seed_multiplication` | crop protection | application record | product; active substance; application rate; area; date; field; conditions | application log and product label | kg product, kg active substance, or declared unit | each application | crop cycle | field or block | sum by product and active substance | application log and label |
| `cp_land_and_output_records` | `sorghum_seed_multiplication` | land, harvest, and field outputs | field and harvest record | area; crop-cycle dates; crop year; harvested mass; moisture; residues; fate | field register, weighbridge, and moisture record | ha, day, kg, and percent | each field and harvest event | crop cycle | field or block | reconcile area, duration, harvest, and fates | field register and calibrated weighing |
| `cp_conditioning_input` | `sorghum_seed_conditioning_and_treatment` | received seed crop | receiving record | lot; received mass; moisture; source field; date; transfer | receiving weighing and moisture test | kg and percent | each lot | conditioning period | facility and lot | sum by lot on a common moisture basis | scale and moisture record |
| `cp_conditioning_energy_records` | `sorghum_seed_conditioning_and_treatment` | electricity and drying heat | utility and fuel record | operation; carrier; meter; quantity; date; batch or period | meter, invoice, fuel record, and batch log | kWh, MJ, L, or kg | each batch or period | conditioning period | facility and line | allocate only with documented driver | meter and invoice |
| `cp_seed_treatment_records` | `sorghum_seed_conditioning_and_treatment` | treatment material | treatment-batch record | product; active substance; application rate; treated mass; lot; date | batch sheet and product record | kg product and kg treated seed | each lot | conditioning period | facility and lot | sum by product, active substance, and treated output | batch sheet and label |
| `cp_packaging_records` | `sorghum_seed_conditioning_and_treatment` | packaging | packaging ledger | material; specification; items; mass; capacity; lot; date | material issue record and weighing | kg, m2, or item | each batch or period | conditioning period | facility | sum by material and package state | inventory record and weighing |
| `cp_accepted_seed_output` | `sorghum_seed_conditioning_and_treatment` | accepted reference output | quality and dispatch record | lot; accepted mass; moisture; purity; germination or viability; treatment; packaging; gate | quality certificate, weighing, and dispatch record | kg and declared quality units | each lot | declared reporting period | facility and gate | sum only after quality release | certificate and calibrated scale |
| `cp_reject_and_screening_records` | `sorghum_seed_conditioning_and_treatment` | screenings and rejected material | screening and disposition record | lot; material; mass; moisture; fate; destination type | screening log and disposition record | kg and declared fate | each lot | conditioning period | facility | sum by material and fate | weighing and disposition record |
| `cp_packaging_waste_records` | `sorghum_seed_conditioning_and_treatment` | packaging waste | waste log | material; mass; source; fate; date | waste log and transfer record | kg | each batch or period | conditioning period | facility | sum by material and fate | waste transfer record |
| `cp_conditioning_emissions` | `sorghum_seed_conditioning_and_treatment` | dust and direct emissions | emission record | source; substance; quantity; method; date; line | measurement or documented calculation | kg | each batch or period | conditioning period | facility | sum by emission pathway | monitoring record or method sheet |
| `cp_storage_and_delivery_records` | `sorghum_seed_storage_and_delivery` | storage energy, transport, and losses | storage and dispatch record | opening mass; closing mass; moisture; storage duration; energy; route; distance; load; loss; gate | inventory, meters, moisture, transport, and dispatch records | kg, percent, day, kWh, MJ, and declared transport unit | each lot or period | declared storage and delivery period | facility, carrier, and gate | reconcile transfers, moisture, accepted output, and losses | scale, meter, moisture, and dispatch records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_reference_output` | accepted sorghum seed | use the quality-released net accepted mass at the declared moisture basis and gate as the reference output | `cp_accepted_seed_output` | kg reference output | `mass-balance-identity` |
| `convert_moisture_basis` | harvest, drying, conditioning, and storage | dry matter = wet mass × (1 − moisture fraction); target-basis mass = dry matter / (1 − target moisture fraction) | `cp_conditioning_input`; `cp_accepted_seed_output`; `cp_storage_and_delivery_records` | common-basis mass | `mass-balance-identity`; `fao-grain-postharvest-systems` |
| `calculate_water_withdrawal` | irrigation | normalize source withdrawal by reference output and report delivered water, consumption, and conveyance loss separately | `cp_irrigation_records`; `cp_accepted_seed_output` | water quantity per kg reference output | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_n2o` | field nitrogen | apply the selected IPCC or accepted regional method and document any N2O-N to N2O conversion | `cp_nutrient_records`; selected method factor | kg N2O per kg reference output | `ipcc-2019-managed-soils-n2o` |
| `calculate_energy_normalization` | field, conditioning, storage, and delivery energy | sum measured energy by process and carrier, then normalize to accepted reference output without merging energy with material or water quantities | energy protocols; `cp_accepted_seed_output` | MJ, kWh, or carrier quantity per kg reference output | `mass-balance-identity` |
| `calculate_output_fates` | field, conditioning, storage, and delivery | on a common moisture basis, reconcile accepted seed + intended co-products + rejects + losses + declared residues to measured input and disclose any unexplained difference | all output protocols | output reconciliation and evidence gap difference | `mass-balance-identity`; `fao-grain-cleaning-treatment` |
| `calculate_seed_count_to_mass` | seed-count records | convert count to mass using the recorded thousand-seed mass or another documented lot-specific conversion | `cp_source_seed_lot`; `cp_accepted_seed_output` | kg seed | `fao-sorghum-seed-production` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference output and every lot | Declare seed class, variety or hybrid status, lot identity, geography, crop cycle, reporting period, gate, moisture basis, treatment status, and quality-release basis. | lot certificate, field records, quality certificate, and dispatch record |
| `dq_flow_resolution` | all parameterized rows | Before final TIDAS exchange publication, resolve each parameterized Flow Set row to a verified platform UUID and retain the selected group and project context. | final exchange and Flow Set selection record |
| `dq_input_completeness` | field and conditioning inventory | Provide a quantity, justified zero, or documented exclusion for source seed, nutrients, irrigation, crop protection, land, field energy, pumping, drying, conditioning, treatment, packaging, storage, transport, and direct emissions. | ledgers, logs, meters, invoices, and method statement |
| `dq_moisture_and_mass` | harvest, conditioning, storage, and delivery | Use calibrated mass and moisture records and reconcile received, dried, accepted, rejected, lost, and transferred material on a common basis. | weighing calibration, moisture tests, and reconciliation |
| `dq_quality_evidence` | seed quality and release | Preserve test method, sample basis, lot coverage, laboratory or inspector identity, results, and release decision for purity, germination or viability, moisture, and treatment status. | quality certificate and testing record |
| `dq_representativeness` | published dataset profile | Disclose time, geography, variety, seed class, production system, technology, facility, storage, transport, and gate coverage and explain deviations from the declared route. | sampling plan and dataset metadata |
| `dq_parameterized_identity` | Flow Set selections | Record the final fixed UUID selected from each applicable Flow Set and verify property, unit, direction, flow type, geography, and process role before publishing the process exchange. | final exchange and identity preflight |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_binding` | reference product and accepted output | Confirm that the reference product uses the verified Sorghum, seed UUID and that the declared seed gate, moisture basis, and lot qualifiers are present. | `mass-balance-identity` |
| `validation_binding_coordinates` | all bound rows | Confirm that each bound row uses only `fixed` or `parameterized`; each fixed row has a verified UUID, and each parameterized row names an existing Flow Set, version, and compatible group or coordinate. |  |
| `validation_flow_coordinates` | all inventory rows | Confirm that direction and flow type match the structural coordinate: materials, nutrients, water, energy, packaging, and transport are product inputs; accepted and intermediate products are product outputs; resources are elementary inputs; emissions are elementary outputs; rejects and residues remain waste or unmapped coverage as appropriate. |  |
| `validation_quality_identity` | accepted seed output | Confirm seed class, lot, variety or hybrid status, moisture basis, purity, germination or viability, treatment, geography, reporting period, and gate are complete. | `fao-sorghum-seed-production` |
| `validation_moisture_and_mass_balance` | harvest, conditioning, storage, and delivery | Confirm common-basis reconciliation and declared fates for accepted seed, intended co-products, rejects, screenings, dust, residues, packaging waste, and losses. | `fao-grain-postharvest-systems`; `mass-balance-identity` |
| `validation_nutrient_and_emissions` | nutrient inputs and field emissions | Confirm formulated product mass is distinct from nutrient mass and that the nitrogen-emission method, unit conversion, and receiving compartment are declared. | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | irrigation and withdrawal | Confirm source withdrawal, delivered irrigation, consumption, and conveyance loss are distinct and not double counted. | `fao-crop-evapotranspiration-56` |
| `validation_allocation` | shared burdens and outputs | Confirm process separation was considered first, output fates are complete, the allocation method is stated, and sensitivity is reported when material. | `iso-14044-2006` |
| `validation_coverage` | evidence gap flow identities | Report every row without a fixed UUID or applicable Flow Set as unmapped coverage and do not promote it to a final TIDAS exchange until resolved. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground secondary dataset with linked upstream material, energy, water, transport, treatment, and waste-service data |
| downstream_use | construct sorghum seed supply processes and lifecycle models and compare sorghum sowing-seed routes under declared quality, geography, gate, and reporting-period conditions |
| allowed_use | sowing sorghum seed with compatible seed class, variety or hybrid status, geography, crop cycle, moisture basis, quality status, treatment, packaging, storage, and gate |
| excluded_use | commodity sorghum grain; sweet, forage, or silage sorghum; food or feed processing; downstream sorghum cultivation; incompatible gate, moisture, quality, or treatment state; datasets with unexplained output losses |
| required_metadata | reference flow and UUID; seed class; lot and variety or hybrid status; geography; crop cycle and reporting period; production system; irrigation; nutrients; crop protection; land; field and conditioning energy; harvest moisture; purity; germination or viability; treatment; packaging; storage; transport; gate; output fates; allocation; and data-quality disclosure |
| required_quality_disclosure | raw-record coverage; time and geography; seed class and lot traceability; scale and moisture calibration; parameterized Flow Set resolution; nutrient and emission methods; water source; energy carriers; treatment; storage; gate; exclusions; allocation; sensitivity; and module selection results |
| update_trigger | material change in seed class, variety, production route, gate, moisture convention, quality standard, irrigation, nutrient or crop-protection practice, conditioning technology, treatment, storage duration, packaging, transport, output fate, Flow Set contract, or evidence status |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sorghum-seed-production` | official_guidance | FAO, *Seed Production Manual*, sorghum seed production and certification sections, <https://coin.fao.org/coin-static/cms/media/16/13666518481740/seed_enterprises_enhacement_and_development_project_in_sierra_leone_mission_1_report_.pdf> | sorghum seed starting material, field production, inspection, seed testing, treatment, packaging, storage, and release evidence |
| `fao-grain-postharvest-systems` | official_guidance | FAO, *Agricultural engineering in development: Grain and post-harvest systems*, <https://www.fao.org/4/t0522e/T0522E03.htm> | sorghum harvest, drying, cleaning, storage, and process hand-off decomposition |
| `fao-grain-cleaning-treatment` | official_guidance | FAO, *Agricultural engineering in development: Grain cleaning and insecticide treatments*, <https://www.fao.org/4/T0522E/T0522E0B.htm> | cleaning, sorting, treatment, dust, storage, and handling records |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration*, <https://www.fao.org/4/X0490E/X0490E00.htm> | irrigation data collection and distinctions among water quantities |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | cropland management, residues, land, and production-method context |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil nitrogen-emission method and factor selection |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy, data quality, and sensitivity expectations |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity | moisture conversion, output reconciliation, normalization, and QA guardrails |
