---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.jute-kenaf-and-other-textile-bast-fibres-raw-or-retted-except-flax-true-hemp-and-ramie
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Jute, kenaf, and other textile bast fibres, raw or retted, except flax, true hemp and ramie

## 1. Scope and Applicability

This PCR covers managed cultivation, harvest and producer-gate preparation of jute, kenaf and other eligible textile bast fibres delivered raw or retted. It includes declared whole-stem, ribbon-retting, water-retting, microbial-assisted and mechanical extraction routes when the accepted output remains raw or retted bast fibre.

Flax, true hemp, ramie, cotton, coir, sisal, abaca, yarn, woven goods, pulp, chemically modified fibre and finished textile products are excluded. Each dataset shall declare species, plant part, raw or retted state, extraction route, moisture basis, grade and producer hand-off.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.jute-kenaf-and-other-textile-bast-fibres-raw-or-retted-except-flax-true-hemp-and-ramie |
| classification_refs | CPC 3.0 `01922`, exact path `0 > 01 > 019 > 0192 > 01922` |
| covered_products | raw or retted jute, kenaf and other eligible textile bast fibres at producer gate |
| excluded_products | flax; true hemp; ramie; cotton; coir; sisal; abaca; yarn; fabric; pulp; chemically modified or finished fibre |
| representative_product | accepted raw or retted jute or kenaf bast fibre |
| production_route | managed crop production and harvest followed by declared raw mechanical extraction or retting, extraction, washing, drying and grading |
| market_state | dry or otherwise stabilized raw or retted fibre, graded and ready for producer hand-off |

The parent route is managed biological production. Whole-stem retting, ribbon retting, microbial-assisted retting and mechanical extraction are alternative production and technology routes. They may coexist only as separately measured strata; route-specific water, energy, treatment aids, yield, wastewater, residues and grades shall not be averaged without production weighting.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | accepted raw or retted jute, kenaf or other eligible textile bast fibre at producer hand-off |
| How much | 1,000 kg mass at declared moisture basis |
| How well | declared species, raw or retted state, extraction route, moisture content, grade and foreign-matter basis; rejected and downgraded fibre excluded |
| How long or cycle | one declared crop cycle and the identified retting, extraction and conditioning batches attributed to the delivered lot |
| reference_flow_link | output `reference_fibre` of `washing_drying_grading` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Jute, kenaf, and other textile bast fibres, raw or retted `bcf2ea60-81e8-43cb-879f-ac473e43f521` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; raw or retted; whole-stem, ribbon or mechanical extraction route; producer gate; moisture content; grade; foreign matter; geography and production period |
| Binding | Fixed (`fixed`) |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference fibre | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted fibre at hand-off and report moisture content; do not substitute stem mass or oven-dry mass without an explicit conversion. |
| `moisture_conversion` | all fibre and biomass transfers | mass fraction | kg water/kg wet material | Retain sampled moisture basis and use lot-specific wet-to-declared-basis conversion. |
| `batch_linkage` | retting, extraction, washing, drying and grading | batch and lot identity | batch, lot | Link inputs, outputs, cleaning, rework and rejects to the producing batch or period. |
| `water_balance` | retting and washing | volume | m3 | Distinguish gross withdrawal, recirculation, evaporation and discharge. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared agricultural field before sowing the declared bast-fibre crop |
| starting_condition_role | foreground start for managed cultivation; previous crop and soil condition are disclosed context |
| product_classification_scope | raw or retted eligible textile bast fibres under CPC 3.0 `01922` |
| recursive_input_rule | purchased fibre of the same category shall be traced as a separate upstream product and excluded from foreground crop yield |
| upstream_dataset_requirement | use supplier-specific or representative datasets for seed, nutrient and crop-protection products, water, energy carriers, treatment aids and transport selected from foreground records |
| disclosure | species, cultivar, location, crop cycle, yield, harvest state, extraction/retting route, batch mode, water source, drying route, moisture basis, grades, residues, wastewater and hand-off; single-period accounting with no storage |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_producer_gate` | all routes | Include cultivation, harvest and the declared extraction, retting, washing, drying and grading needed to reach the raw or retted producer-gate state; exclude spinning and later manufacture. Use single-period accounting with no storage. | `fao-ijo-jute-retting-1998` |
| `boundary_route_separation` | alternative routes | Keep whole-stem, ribbon, microbial-assisted and mechanical routes as separate measured strata until production-weighted aggregation. | `fao-ijo-jute-retting-1998` |
| `boundary_batch_events` | treatment and conditioning | Attribute inputs, outputs, cleaning, rework and rejects to the responsible batch or production period and prevent shared burdens from being counted twice. | `fao-ijo-jute-retting-1998` |
| `boundary_destination` | residues and rejects | Record each output hand-off as intended product, downgraded product, recovered material, returned biomass, waste or emission according to actual destination. | `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_production` | Managed bast-fibre crop production and harvest | required | all managed-crop routes | managed biological production and independent harvest node | one crop hectare-cycle and harvested stem mass |
| `retting_extraction` | Optional retting and fibre extraction | conditional | reference product is retted or mechanically extracted fibre | batch mode material treatment and primary conditioning node with an alternative technology route delta | one declared retting or extraction batch |
| `washing_drying_grading` | Washing, drying, stabilization and grading | required | extracted fibre is delivered as the reference product | preservation, stabilization, grading and hand-off node | 1,000 kg accepted reference fibre |

### Process: Managed bast-fibre crop production and harvest (`crop_production`)

#### Inputs

##### Product flows

###### Planting seed for the declared bast crop (`planting_seed`)

Record species, cultivar, germination basis and seed actually sown.

- Selected flow: Jute seed, unspecified `d33e2a9b-1868-4489-a4f9-24d6d8cb9052`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: measured seed mass corrected to the declared viable-seed basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare-cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_cycle`
- Sources: `fao-ijo-jute-retting-1998`
- Range: Seed-rate QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/ha
  - Basis: per cultivated hectare-cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated agricultural nutrient supply (`crop_nutrients`)

Record all mineral and organic fertilizers, lime and nutrient amendments in one card, then expand actual products and nutrient composition.

- Selected flow: Agricultural nutrient supply
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measured applied product mass and composition by event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare-cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_cycle`
- Sources:
- Range: Provisional nutrient-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg products/ha
  - Basis: per cultivated hectare-cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`crop_irrigation`)

Record supplied irrigation by source and event; record zero for rainfed production.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered delivery or flow-rate times operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare-cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_cycle`
- Sources:
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15000
  - Unit: m3/ha
  - Basis: per cultivated hectare-cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field-operation energy (`crop_energy`)

Record actual fuel, electricity and qualifying energy services for land preparation, sowing, management, irrigation and harvest.

- Selected flow: Field-operation energy carriers and services
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy converted from carrier and meter records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cultivated hectare-cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_cycle`
- Sources:
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: MJ/ha
  - Basis: per cultivated hectare-cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection`)

Record every formulated product actually applied; no default treatment is imposed.

- Selected flow: Crop-protection products as applied
- Flow property / unit: Mass / kg
- Identity resolution: Deferred conditional umbrella; actual formulated products are selected from foreground application records. The initial search returned only an incompatible rice-farm aggregate proxy.
- Amount rule: measured formulated-product mass by event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated hectare-cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_cycle`
- Sources:
- Range: Provisional crop-protection screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg formulated product/ha
  - Basis: per cultivated hectare-cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows

###### Agricultural land occupation (`land_occupation`)

Record occupied agricultural land for the crop cycle.

- Selected flow: Agriculture land occupation `e1d56d4e-afe3-4b92-bd51-0a21f75e50a8`
- Flow property / unit: Area*time `93a60a56-a3c8-21da-a746-0800200c9a66` / ha*a
- Binding: Fixed (`fixed`)
- Amount rule: cultivated area multiplied by occupied-year fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare-cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_cycle`
- Sources: `area-time-identity`
- Range: Physical land-time guardrail
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 2
  - Unit: ha*a/ha crop
  - Basis: per cultivated hectare-cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `area-time-identity`


#### Outputs

##### Product flows

###### Harvested bast-crop stems or bark ribbons (`harvested_stems`)

Transfer harvested whole stems or mechanically separated bark ribbons to the selected raw-fibre or retting route.

- Selected flow: Harvested bast-crop stems or bark ribbons, internal transfer
- Flow property / unit: Mass / kg fresh matter
- Identity resolution: Internal foreground transfer or grade output; no external database UUID is applicable.
- Amount rule: measured harvested mass by species, field and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare-cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_cycle`
- Sources: `fao-ijo-jute-retting-1998`
- Range: Harvest mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg fresh stems/ha
  - Basis: per cultivated hectare-cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-ijo-jute-retting-1998`


##### Waste flows

###### Field rejects and uncollected crop material (`field_rejects`)

Record crop material rejected, left in field, burned, recovered or removed, with destination.

- Selected flow: Field-rejected bast-crop biomass
- Flow property / unit: Mass / kg
- Identity resolution: Deferred by actual material state and destination; the initial search returned wood, other-crop residues and unrelated generic waste, with no compatible jute or kenaf reject identity.
- Amount rule: measured or mass-balance-estimated rejected biomass by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare-cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_cycle`
- Sources: `mass-balance-identity`
- Range: Field reject fraction
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg harvested stems
  - Basis: per cultivated hectare-cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`


##### Elementary flows

###### Managed-soil nitrogen emissions (`soil_n_emissions`)

Calculate actual nitrogen species and receiving compartments separately; this umbrella is not a final exchange.

- Selected flow: Managed-soil nitrogen emission species
- Flow property / unit: Mass / kg species
- Identity resolution: Deferred multi-exchange umbrella; final exchanges shall resolve each reported nitrogen species and receiving compartment. The initial search returned individual species rows and cannot represent this card with one UUID.
- Amount rule: method calculation from recorded nitrogen inputs and crop residues
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare-cycle
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_cycle`
- Sources: `ipcc-2019-managed-soils`
- Range: Method-domain nitrogen-emission guardrail
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg species/kg relevant N input
  - Basis: per cultivated hectare-cycle
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2019-managed-soils`


###### Direct combustion emissions from foreground fuel use (`direct_combustion_emissions`)

Calculate emitted substances and receiving compartments separately whenever fuel is combusted in foreground machinery, pumps or dryers; this umbrella is not a final exchange.

- Selected flow: Foreground fuel-combustion emission species
- Flow property / unit: Mass / kg species
- Identity resolution: Deferred multi-exchange umbrella; final exchanges shall resolve each calculated substance and receiving compartment. The initial search returned individual combustion-emission rows and cannot represent this card with one UUID.
- Amount rule: calculate separate emitted substances from actual fuel use, equipment and declared inventory method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cultivated hectare-cycle before accepted-fibre normalization
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_cycle`
- Sources: `ipcc-2006-mobile-combustion`
- Range: Fuel-carbon and pollutant method-domain guardrail
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 10
  - Unit: kg species/kg fuel
  - Basis: per kilogram of recorded foreground fuel
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2006-mobile-combustion`

### Process: Optional retting and fibre extraction (`retting_extraction`)

#### Inputs

##### Product flows

###### Harvested stems or bark ribbons received (`retting_feed`)

Receive the internal lot with species, fresh mass, moisture and route retained.

- Selected flow: Harvested bast-crop stems or bark ribbons, internal transfer
- Flow property / unit: Mass / kg fresh matter
- Identity resolution: Internal foreground transfer or grade output; no external database UUID is applicable.
- Amount rule: measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per retting or extraction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_retting_batch`
- Sources: `fao-ijo-jute-retting-1998`
- Range: Batch feed QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg/batch
  - Basis: per retting or extraction batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-ijo-jute-retting-1998`

###### Retting and washing process water (`retting_water`)

Record water added or withdrawn by source, batch and reuse loop.

- Selected flow: Process water for retting and washing
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered or calculated gross make-up water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per retting or extraction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_retting_batch`
- Sources: `fao-ijo-jute-retting-1998`
- Range: Provisional retting-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/t feed
  - Basis: per retting or extraction batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-ijo-jute-retting-1998`

###### Retting and extraction energy (`retting_energy`)

Record carriers and electricity for ribboning, decortication, pumping, agitation and extraction.

- Selected flow: Retting and extraction energy carriers
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy converted from carrier and meter records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per retting or extraction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_retting_batch`
- Sources:
- Range: Provisional retting-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/t feed
  - Basis: per retting or extraction batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retting inoculants or treatment aids (`retting_aids`)

Record each microbial culture, enzyme, alkali or bleaching aid actually used; zero is valid for unaided water retting.

- Selected flow: Retting inoculants or treatment aids as applied
- Flow property / unit: Mass / kg
- Identity resolution: Deferred conditional umbrella; actual culture, enzyme, alkali or bleaching product is selected from batch records. The initial search returned harvested stems and unrelated enzymatic food-process rows.
- Amount rule: measured product mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per retting or extraction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_retting_batch`
- Sources: `fao-ijo-jute-retting-1998`
- Range: Provisional treatment-aid screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/t feed
  - Basis: per retting or extraction batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-ijo-jute-retting-1998`

###### Inter-node freight transport (`inter_node_transport`)

Record only transport between included foreground sites.

- Selected flow: Freight transport service
- Flow property / unit: Transport service / t*km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Amount rule: loaded mass times route distance by mode
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per transferred batch
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_retting_batch`
- Sources:
- Range: Provisional inter-node transport screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: t*km/t feed
  - Basis: per transferred batch
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Extracted raw or retted bast fibre (`extracted_fibre`)

Transfer extracted fibre to washing, drying and grading with moisture and retting state retained.

- Selected flow: Extracted bast fibre, internal transfer
- Flow property / unit: Mass / kg
- Identity resolution: Internal foreground transfer or grade output; no external database UUID is applicable.
- Amount rule: measured wet fibre mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per retting or extraction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_retting_batch`
- Sources: `fao-ijo-jute-retting-1998`
- Range: Fibre yield mass-balance range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg feed
  - Basis: per retting or extraction batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-ijo-jute-retting-1998`


##### Waste flows

###### Retting wastewater (`retting_wastewater`)

Record wastewater volume and destination; characterize relevant oxygen demand, solids, nutrients and treatment.

- Selected flow: Retting wastewater
- Flow property / unit: Volume / m3
- Identity resolution: Deferred by wastewater composition, treatment state and destination; the initial search returned route-specific industrial or municipal wastewater rows that do not match jute retting.
- Amount rule: measured discharge less documented reuse and evaporation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per retting or extraction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_retting_batch`
- Sources: `water-balance-identity`
- Range: Wastewater balance guardrail
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/t feed
  - Basis: per retting or extraction batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `water-balance-identity`

###### Woody core, bark and extraction residues (`retting_residues`)

Record each residue as intended co-product, recovered material, returned biomass or waste according to actual destination.

- Selected flow: Jute or kenaf extraction residues
- Flow property / unit: Mass / kg
- Identity resolution: Deferred by separated material and destination; the initial search returned coconut shell, wood bark and other unrelated residues, not jute or kenaf extraction residue.
- Amount rule: measured residue mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per retting or extraction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_retting_batch`
- Sources: `mass-balance-identity`
- Range: Residue mass-balance range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg feed
  - Basis: per retting or extraction batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`


##### Elementary flows


### Process: Washing, drying, stabilization and grading (`washing_drying_grading`)

#### Inputs

##### Product flows

###### Extracted fibre received for conditioning (`conditioning_feed`)

Receive the internal fibre lot; for a raw, unretted route, receive mechanically separated fibre with route declared.

- Selected flow: Extracted bast fibre, internal transfer
- Flow property / unit: Mass / kg
- Identity resolution: Internal foreground transfer or grade output; no external database UUID is applicable.
- Amount rule: measured incoming fibre mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources:
- Range: Conditioning-feed QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/t accepted fibre
  - Basis: per conditioning lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Final washing water (`final_wash_water`)

Record clean water used after fibre extraction and any reuse loop.

- Selected flow: Process water for final washing
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered or calculated make-up water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `fao-ijo-jute-retting-1998`
- Range: Provisional final-wash screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: m3/t accepted fibre
  - Basis: per conditioning lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `fao-ijo-jute-retting-1998`

###### Drying and conditioning energy (`conditioning_energy`)

Record energy for mechanical handling, forced drying or moisture conditioning; solar drying records no purchased heat.

- Selected flow: Drying and conditioning energy carriers
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy converted from actual carrier and meter records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lot`
- Sources:
- Range: Provisional conditioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ/t accepted fibre
  - Basis: per conditioning lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Accepted raw or retted bast fibre (`reference_fibre`)

Record accepted jute, kenaf or eligible other bast fibre as an intended output at producer hand-off.

- Selected flow: Jute, kenaf, and other textile bast fibres, raw or retted `bcf2ea60-81e8-43cb-879f-ac473e43f521`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: measured accepted mass at declared moisture and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources:
- Range: Reference-flow identity range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded fibre sent to a declared market (`downgraded_fibre`)

Record this saleable downgraded grade as an intended output separately from accepted reference fibre and waste.

- Selected flow: Downgraded bast fibre, internal grade output
- Flow property / unit: Mass / kg
- Identity resolution: Internal foreground transfer or grade output; no external database UUID is applicable.
- Amount rule: measured downgraded mass by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `mass-balance-identity`
- Range: Downgraded-fibre balance range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg incoming fibre
  - Basis: per conditioning lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`


##### Waste flows

###### Rejected fibre and grading debris (`grading_rejects`)

Record rejected or off-spec material by rework, recovery, discard or treatment destination.

- Selected flow: Rejected bast fibre and grading debris
- Flow property / unit: Mass / kg
- Identity resolution: Deferred by fibre state and treatment destination; the initial search returned cord-thread, fabric and cotton wastes, with no compatible raw bast-fibre grading reject.
- Amount rule: measured reject mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `mass-balance-identity`
- Range: Reject mass-balance range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg incoming fibre
  - Basis: per conditioning lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`


##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_first` | fibre and intended co-products | First preserve physical mass and moisture balances by batch. Where fibre, sticks, seeds or other outputs are intended products, avoid allocation by subdivision when separately metered; otherwise report and justify the selected physical or economic relation. | `mass-balance-identity` |
| `allocation_residue_destination` | sticks, bark, fines and crop residues | Do not assign avoided burdens without a declared substitution model. Returned biomass, sold co-product and waste treatment are distinct destinations. | `mass-balance-identity` |
| `allocation_rework` | rework and rejected material | Return reworked material and its additional burdens to the producing batch; exclude downgraded and rejected mass from accepted reference output and prevent double counting. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_cycle` | `crop_production` | crop inputs, harvested stems, rejects and soil emissions | field log, invoice, meter, harvest record | field, species, cultivar, area, dates, seed, nutrient products and composition, irrigation, energy, crop protection, harvest and residues | reconcile invoices, application logs, meters and harvest weights | native units plus kg, m3, MJ and ha | each operation and harvest lot | complete declared crop cycle | every included field | sum by field and route, then normalize through accepted fibre yield | invoices, calibrated scales/meters, application and harvest logs |
| `cp_retting_batch` | `retting_extraction` | retting/extraction batch inputs and outputs | batch sheet, meter, weigh ticket, laboratory result | feed mass/moisture, route, time, water, energy, aids, fibre, wastewater, residues and destinations | batch-level readings and mass/water reconciliation | kg, m3, MJ, t*km | each batch | all batches supplying the reference lot | every included retting/extraction site | sum compatible route batches; production-weight aggregation only | batch identifiers, meter/scale checks, water-quality and destination evidence |
| `cp_conditioning_lot` | `washing_drying_grading` | washing, drying, grade and hand-off | lot sheet, meter, weigh ticket, grade test | incoming mass/moisture, water, energy, drying route, accepted grade, downgraded grade, rejects and destination | lot-level measurement and reconciliation | kg, m3, MJ | each lot | all lots in reporting period | every included conditioning site | normalize accepted output to 1,000 kg at declared moisture | scale/meter calibration, moisture and grade test, dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_basis` | material transfers | declared-basis mass = wet mass × (1 − measured moisture fraction)/(1 − declared moisture fraction) | wet mass, measured moisture, declared moisture | comparable material mass | `mass-balance-identity` |
| `calc_route_yield` | crop through accepted fibre | accepted fibre yield = accepted declared-basis fibre mass / cultivated area; retain intermediate stem and extraction yields | accepted fibre, harvested stems, area | kg accepted fibre/ha and process yields | `mass-balance-identity` |
| `calc_water_balance` | retting and washing | discharge = withdrawal + incoming-water − evaporation − retained-water − reuse ending inventory | water and moisture records | wastewater volume | `water-balance-identity` |
| `calc_n_emissions` | managed soil | calculate species and compartments from recorded nitrogen activity data using the declared inventory method | nitrogen products, residues, method factors | separate nitrogen exchanges | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference lot | Species, raw/retted state, route, moisture basis and grade shall be traceable from field and batch to dispatch. | field, batch, lot and dispatch identifiers |
| `dq_completeness` | all nodes | Reconcile accepted fibre, co-products, downgraded material, rejects, wastewater and residues; explain every material gap. | signed mass and water balances |
| `dq_temporal` | reporting period | Cover one complete crop cycle and every treatment batch supplying the output; disclose any proxy period. | dated logs and coverage statement |
| `dq_route` | alternative routes | Report route-specific sample count, mass and burdens before aggregation. | route-stratified records |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | UUID, Mass property, mass unit group, product state and required qualifiers shall match the declared accepted fibre. | error |
| `validate_flow_bindings` | all cards | Resolve every parameterized card to a concrete compatible UUID from actual foreground identity, and retain unresolved or internal status exactly as audited. | error |
| `validate_ranges` | all cards | Every English, Chinese and structured card shall contain exactly one complete range with matching role, bounds, unit, basis, basis kind and evidence kind. | error |
| `validate_route_balance` | every route and batch | Input mass shall reconcile with accepted, downgraded, co-product, residue, reject and measured loss outputs after moisture conversion. | error |
| `validate_rework` | rejects and rework | Rework shall remain linked to its producing node and shall not be counted both as new input and accepted output. | error |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for raw or retted eligible bast fibre |
| downstream_use | `secondary_dataset`; `background_dataset` after review |
| allowed_use | fibre-product systems matching species, route, state, moisture, grade, geography and period |
| excluded_use | flax, true hemp, ramie, cotton, coir, sisal, abaca, yarn, fabric, pulp or chemically modified fibre without a separate model |
| required_metadata | species; cultivar; field and sites; crop cycle; raw/retted and extraction route; batch mode; moisture; grade; water and energy route; co-product and waste destinations |
| required_quality_disclosure | temporal, geographic and technological representativeness; route coverage; measured versus estimated shares; mass/water closure; unresolved identities |
| update_trigger | material change in cultivar, route, water source, retting aid, extraction/drying technology, grade specification, yield, allocation or background identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-ijo-jute-retting-1998` | official_guidance | FAO and International Jute Organisation, *Improved Retting and Extraction of Jute: Project Findings and Recommendations*, Rome, 1998, https://www.fao.org/fishery/docs/CDrom/aquaculture/a0845t/volume2/docrep/field/381307.htm | route decomposition, harvesting, sorting, retting, extraction, washing and immediate drying |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11 | managed-soil nitrogen-emission calculation |
| `ipcc-2006-mobile-combustion` | method_factor | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2, Chapter 3 | direct combustion-emission calculation from foreground fuel use |
| `mass-balance-identity` | method_factor | conservation-of-mass identity | mass balance, yield, allocation and reject validation |
| `water-balance-identity` | method_factor | process water-balance identity | retting and washing water reconciliation |
| `area-time-identity` | method_factor | occupied area multiplied by time | land-occupation calculation |
