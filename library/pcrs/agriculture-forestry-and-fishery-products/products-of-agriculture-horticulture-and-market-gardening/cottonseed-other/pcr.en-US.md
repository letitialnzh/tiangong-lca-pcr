---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cottonseed-other
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Cottonseed, other

## 1. Scope and Applicability

This PCR covers whole, fuzzy, non-planting cottonseed separated from harvested seed cotton during ginning and delivered at a declared gin or farm hand-off. Cotton cultivation, harvest, seed-cotton handling and ginning are included because lint and cottonseed are inseparable intended co-products until the gin stand. Declare cultivar, geography, crop year, irrigation, harvest system, gin technology, cottonseed moisture, foreign matter, delinting state, storage/aeration, allocation and gate.

Exclude planting seed, mechanically or chemically delinted seed, linters, hulls, oil, cake, meal, crushing, extraction, feed formulation and downstream transport. A delinted commodity requires another route and identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cottonseed-other |
| classification_refs | CPC 3.0: 01432 Cottonseed, other |
| covered_products | whole non-planting cottonseed separated during ginning, retaining natural fuzz |
| excluded_products | planting or delinted seed; lint, linters, hulls, oil, cake, meal and formulated feed |
| representative_product | fuzzy gin-run cottonseed not intended for planting |
| production_route | managed cotton cultivation and harvest, seed-cotton handling, cleaning and mechanical gin separation |
| market_state | whole fuzzy cottonseed at gin/farm hand-off with moisture, foreign matter, storage, lot, grade and gate declared |

Rainfed/irrigated cultivation, picker/stripper harvest, saw/roller gins and optional short-term aerated storage are alternatives and shall remain distinct unless combined with production weights.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | whole fuzzy non-planting cottonseed separated at the gin |
| How much | 1,000 kg as-received cottonseed |
| How well | declared cultivar, crop year, moisture wet basis, foreign matter, fuzz/delinting state, grade, storage/aeration and acceptance specification |
| How long or cycle | one matched crop cycle and gin campaign or traceable gin lot |
| reference_flow_link | `gin_run_cottonseed_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Cottonseed, other, production mix at farm gate, fresh unprocessed `5ec72013-512e-4bb6-a5e6-648551f35d9d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | non-planting use; whole/fuzzy state; delinting excluded; cultivar; crop year; geography; moisture wet basis; foreign matter; grade; storage/aeration; gin technology; gate; allocation |
| Binding | `fixed` |

The fixed UUID applies only to whole non-planting cottonseed in this fresh/unprocessed farm-gate identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | reference cottonseed | Mass | kg | Report as-received mass and measured wet-basis moisture; retain dry-matter conversions. |
| `field_to_seed_cotton_conversion` | field inventory | Area and mass | ha and kg | Reconcile area to same-cycle accepted seed cotton before conversion to the gin lot. |
| `gin_mass_balance` | ginning | Mass | kg | Reconcile seed cotton to lint, cottonseed, useful recovery, waste and moisture change. |
| `nutrient_content_basis` | nutrient supply | Product and nutrient mass | kg product; kg N; kg P2O5; kg K2O | Preserve product, formulation, assay and basis without double counting. |
| `allocation_value_basis` | co-products | Mass and economic value | kg and declared currency | Use matched quantities and representative prices; disclose quality and sensitivity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared cotton field at crop-cycle start, with seed and purchased inputs crossing the boundary |
| starting_condition_role | start of managed biological cotton production |
| product_classification_scope | non-planting cottonseed corresponding to CPC 01432 |
| recursive_input_rule | planting seed links to a distinct seed-production dataset and shall not recurse to this PCR |
| upstream_dataset_requirement | compatible planting material, nutrient, crop-protection, irrigation, energy, water, packaging and treatment datasets |
| disclosure | geography; cultivar; dates; area; yield; irrigation; harvest; seed-cotton storage; gin; lot balance; moisture; foreign matter; fuzz state; storage; co-product prices; allocation; gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | cultivation and harvest | Include establishment, field management, irrigation where used, harvest and direct field emissions through seed-cotton hand-off. | `feedipedia-cottonseed`; `ncc-seedcotton-handling` |
| `boundary_ginning` | ginning | Include receiving, unloading, drying/conditioning, cleaning, gin separation, conveying, on-site aeration/storage and handling through gate. | `cotton-ginners-handbook-2016`; `cottonseed-storage-2018` |
| `boundary_product_state` | reference | Reference seed is whole and fuzzy; exclude delinting, crushing, extraction, meal/feed and planting-seed conditioning. | `feedipedia-cottonseed`; `cottonseed-storage-2018` |
| `boundary_route_alternatives` | all routes | Keep cultivation, harvest, gin and storage alternatives separate unless combined with production weights. | `cotton-ginners-handbook-2016` |
| `boundary_single_period` | all routes | Use one reporting period for each matched crop and gin campaign; no inventory carry-over or cross-period attribution is permitted. |  |
| `boundary_direct_emissions` | field and gin | Include managed-soil and reported gin particulate emissions from matched activity records. | `ipcc-2019-managed-soils`; `cotton-ginners-handbook-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cotton_field_production` | Cotton cultivation and harvest | required | always | managed production and seed-cotton harvest | hectare and accepted seed-cotton mass |
| `cotton_ginning` | Seed-cotton receiving, cleaning and ginning | required | always | material treatment by separation of lint and cottonseed in batch production or continuous operation; alternative technology route delta is declared | incoming lot and reconciled outputs |
| `cottonseed_handling_storage` | Cottonseed primary conditioning, grading, preservation, packaging and storage | conditional | occurs before declared gate | primary conditioning, grading/sorting, preservation/stabilization and packaging presentation before hand-off | incoming lot and accepted terminal mass |

### Process: Cotton cultivation and harvest (`cotton_field_production`)

#### Inputs

##### Product flows

###### Cotton planting seed (`cotton_planting_seed_input`)

Record cultivar-specific planting seed; never use the non-planting reference identity.

- Selected flow: Cottonseed, seed for planting `5ec327e3-1046-4478-9010-0733b798aa56`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured seed mass by cultivar, treatment and sowing event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity`
- Range: Provisional sowing-rate screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 40
  - Unit: kg/ha
  - Basis: one crop cycle; actual establishment system governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`field_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers and nutrient-bearing amendments once, preserving product, assay and event.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5 and kg K2O
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: collect each applied product once and calculate nutrients from assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity`
- Range: Provisional nutrient-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg product/ha
  - Basis: one crop cycle; nutrient composition remains explicit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`field_irrigation_input`)

Record applied irrigation separately from rainfall; verified rainfed fields record zero.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated applied irrigation water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15000
  - Unit: m3/ha
  - Basis: one crop cycle; rainfed route may be zero
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery energy (`field_energy_input`)

Record carrier-specific energy for establishment, crop care and harvest.

- Selected flow: Energy supply for mobile field machinery
- Flow property / unit: Carrier quantity or energy / kg, L, kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured carrier or contractor activity with documented conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_activity`
- Range: Provisional machinery-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L diesel-equivalent/ha
  - Basis: one crop cycle; actual carrier remains explicit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulations (`field_crop_protection_input`)

Record each actual formulation by active ingredient, concentration and event.

- Selected flow: Crop-protection formulation used in cotton production
- Flow property / unit: Mass or volume / kg or L
- Amount rule: measured formulation by product and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity`
- Range: Provisional formulation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg formulation/ha
  - Basis: one crop cycle; actual products govern
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested seed cotton (`harvested_seed_cotton_output`)

Record accepted seed cotton containing lint and seed before ginning.

- Selected flow: Harvested seed cotton before ginning
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass with moisture and trash fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Range: Provisional seed-cotton yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 300
  - Upper: 10000
  - Unit: kg/ha
  - Basis: accepted as-harvested seed cotton for one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residues and rejected seed cotton (`field_residue_waste_output`)

Record stalks, roots, leaves, fallen bolls and rejected material by destination.

- Selected flow: Cotton field residues and rejected seed cotton
- Flow property / unit: Mass / kg
- Amount rule: field balance by residue class, removal and fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_balance`
- Range: Provisional exported-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/ha
  - Basis: material physically leaving the field boundary
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide to air (`field_n2o_air_output`)

Calculate managed-soil nitrous oxide from matched nutrient and residue records.

- Selected flow: Nitrous oxide, emissions to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: `fixed`
- Amount rule: applicable method for direct and indirect nitrogen pathways
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha
  - Basis: one crop cycle; method result governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`field_ammonia_air_output`)

Calculate volatilization only from fertilizer products and events actually recorded.

- Selected flow: Ammonia, emissions to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: `fixed`
- Amount rule: method calculation by nutrient product and event
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `emep-eea-2023-guidebook`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg NH3/ha
  - Basis: one crop cycle; method result governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`field_nitrate_water_output`)

Calculate or monitor nitrate loss only with an applicable method or field balance.

- Selected flow: Nitrate, emissions to water, unspecified `fe0acd60-3ddc-11dd-aa31-0050c2490048`
- Flow property / unit: Mass / kg nitrate
- Binding: `fixed`
- Amount rule: monitored loss or method calculation from matched nitrogen and water records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare and crop cycle
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg nitrate/ha
  - Basis: one crop cycle; method result governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Seed-cotton receiving, cleaning and ginning (`cotton_ginning`)

#### Inputs

##### Product flows

###### Harvested seed cotton (`seed_cotton_input`)

Use the same measured lot identity and condition as the field output.

- Selected flow: Harvested seed cotton before ginning
- Flow property / unit: Mass / kg
- Amount rule: receiving-scale mass with moisture, trash, origin and lot link
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per gin lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gin_lot_balance`
- Range: Seed-cotton input balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1500
  - Upper: 5000
  - Unit: kg/1,000 kg cottonseed
  - Basis: incoming as-received seed cotton for a reconciled gin lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Gin energy supply (`gin_energy_input`)

Record electricity and thermal carriers for receiving, drying, cleaning, ginning, conveying and controls.

- Selected flow: Gin energy supply
- Flow property / unit: Energy or carrier quantity / kWh, MJ, kg, L or m3
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured meters and carrier purchases allocated once to the lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cottonseed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gin_utility`
- Range: Provisional gin-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kWh-equivalent/1,000 kg cottonseed
  - Basis: receiving through separation and conveying
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Gin process water (`gin_process_water_input`)

Record water for moisture conditioning and cleaning; inactive routes record zero.

- Selected flow: Process water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered or batch-calculated net water entering the gin
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cottonseed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gin_utility`
- Range: Provisional process-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/1,000 kg cottonseed
  - Basis: gin process only; inactive route may be zero
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gin-run cottonseed (`gin_run_cottonseed_output`)

Record accepted whole fuzzy cottonseed as an intended co-product before delinting, crushing or seed conditioning.

- Selected flow: Cottonseed, other, production mix at farm gate, fresh unprocessed `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted mass at declared moisture, foreign matter and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per gin lot; scale to 1,000 kg reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gin_lot_balance`
- Sources: `cottonseed-storage-2018`
- Range: Cottonseed-to-lint co-product screen
  - Range role: Typical range (`typical_range`)
  - Lower: 1100
  - Upper: 1800
  - Unit: kg cottonseed/1,000 kg lint
  - Basis: same reconciled gin lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `cottonseed-storage-2018`

###### Cotton lint co-product (`cotton_lint_output`)

Record accepted lint as an intended co-product at its bale gate, grade and moisture.

- Selected flow: Ginned cotton lint
- Flow property / unit: Mass / kg
- Amount rule: measured bale mass linked to the gin lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per gin lot and 1,000 kg cottonseed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gin_lot_balance`
- Range: Lint co-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 400
  - Upper: 1000
  - Unit: kg lint/1,000 kg cottonseed
  - Basis: same reconciled gin lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Gin trash and rejected material (`gin_residual_waste_output`)

Record burrs, sticks, leaf, soil and rejected seed separately by destination.

- Selected flow: Cotton gin trash and rejected material
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass by material class and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cottonseed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gin_lot_balance`
- Range: Provisional gin-residual screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/1,000 kg cottonseed
  - Basis: residuals leaving the gin lot balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Gin particulate matter to air (`gin_particulate_air_output`)

Record measured or permit-calculated particulate by size fraction; do not substitute generic dust.

- Selected flow: Reported particulate matter from cotton ginning to air
- Flow property / unit: Mass / kg
- Amount rule: monitoring or permit method by particle-size fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cottonseed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gin_emissions`
- Sources: `cotton-ginners-handbook-2016`
- Range: Provisional particulate screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/1,000 kg cottonseed
  - Basis: reported controlled or uncontrolled basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cottonseed primary conditioning, grading, preservation, packaging and storage (`cottonseed_handling_storage`)

#### Inputs

##### Product flows

###### Gin-run cottonseed transfer (`cottonseed_transfer_input`)

Use the same lot identity and condition as the gin output.

- Selected flow: Cottonseed, other, production mix at farm gate, fresh unprocessed `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured incoming fuzzy-cottonseed mass, moisture and temperature
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per storage lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_lot`
- Range: Storage-lot input balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1200
  - Unit: kg/1,000 kg accepted cottonseed
  - Basis: incoming wet mass before loss and rejection
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Aeration and handling energy (`storage_energy_input`)

Record carriers used for conveying, ventilation, temperature control and handling.

- Selected flow: Energy supply for cottonseed handling and aeration
- Flow property / unit: Energy or carrier quantity / kWh, MJ, kg, L or m3
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered energy or runtime-power calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cottonseed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_lot`
- Range: Provisional storage-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh-equivalent/1,000 kg cottonseed
  - Basis: declared storage period; no-storage route may be zero
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cottonseed packaging (`cottonseed_packaging_input`)

Record packaging that remains with product at hand-off and preserve reuse cycles.

- Selected flow: Packaging function for cottonseed hand-off
- Flow property / unit: Mass or item count / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: measured packaging divided by verified reuse cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted cottonseed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_lot`
- Range: Provisional packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg cottonseed
  - Basis: packaging crossing the gate; bulk route may be zero
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted stored cottonseed (`accepted_cottonseed_output`)

Record accepted whole fuzzy cottonseed at the terminal gate.

- Selected flow: Cottonseed, other, production mix at farm gate, fresh unprocessed `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted mass with moisture, temperature, foreign matter and duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_lot`
- Sources: `cottonseed-storage-2018`
- Range: Reference output check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: reference flow at final declared gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `pcr-reference-definition`

##### Waste flows

###### Storage loss and rejected cottonseed (`storage_loss_waste_output`)

Record spoiled, heated, contaminated or rejected seed by destination.

- Selected flow: Rejected or lost cottonseed from storage
- Flow property / unit: Mass / kg
- Amount rule: mass-balance difference supported by inspection and disposition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cottonseed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_lot`
- Range: Provisional storage-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg/1,000 kg accepted cottonseed
  - Basis: declared storage period and moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_gin_coproducts` | cultivation and ginning | Treat lint and cottonseed as intended co-products. Subdivide metered process burdens first; allocate remaining inseparable burdens by economic value using matched quantities and representative prices. | `cottonseed-storage-2018` |
| `allocation_sensitivity` | lint/cottonseed | Report mass-allocation sensitivity and prices, currency, period, moisture, grades and value shares; no default substitution credit. |  |
| `allocation_residuals` | gin/storage outputs | Give no co-product credit to waste. Treat recovered material as product only with intended use, positive value and separate hand-off. |  |
| `allocation_shared_assets` | shared infrastructure | Attribute by measured use, runtime, throughput or another causal driver and count each burden once. |  |
| `allocation_rework_rejects` | rejects | Return rework to its node; downgraded saleable output remains product and discarded material remains waste. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity` | `cotton_field_production` | inputs | collected | field; area; cultivar; dates; product; assay; amount; meter; carrier | invoices, logs and meters | ha; kg; L; m3; kWh; MJ | each event | full crop cycle | each field/farm | sum by field and identity | invoices, calibration, logs, field map |
| `cp_harvest_balance` | `cotton_field_production` | seed cotton/residues | collected/calculated | field; mass; module; moisture; trash; reject; residue; fate | scales, tickets, samples, balance | kg; % | each harvest/lot | full harvest | each field/harvest unit | sum accepted lot; separate fate | scale checks, tickets, samples |
| `cp_field_emissions` | `cotton_field_production` | soil emissions | calculated | N products; assay; timing; residues; soil; climate; irrigation; factors | approved method on matched records | kg | crop cycle | full crop cycle | each field | calculate pathways then sum | input trace, factors, worksheet |
| `cp_gin_lot_balance` | `cotton_ginning` | input/outputs/residuals | collected/calculated | lot; origin; input/output mass/moisture/grade; reject; destination | scales, sampling, reconciliation | kg; %; item | each lot/shift | full campaign | each gin line/site | reconcile lot then aggregate | calibration, tickets, grade, balance |
| `cp_gin_utility` | `cotton_ginning` | energy/water | collected/calculated | meter; purchase; runtime; power; water; period | meters, invoices, runtime | kWh; MJ; kg; L; m3 | shift/bill | full campaign | each gin/meter | allocate shared total once | calibration, invoice, log |
| `cp_gin_emissions` | `cotton_ginning` | particulate | measured/calculated | source; control; fraction; concentration; flow; runtime; factor | test or approved permit method | kg; mg/m3; m3; h | test/period | representative campaign | each source | calculate by source/fraction without overlap | report, permit, controls, runtime |
| `cp_storage_lot` | `cottonseed_handling_storage` | cottonseed/energy/package/loss | collected/calculated | lot; mass; moisture; temperature; foreign matter; duration; runtime; package; reject | scales, probes, meters, logs | kg; %; C; h; kWh; item | receipt/daily/dispatch | full storage period | each bin/pile/site | reconcile input, accepted, reject, moisture | calibration, monitoring, inspection, ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_field_normalization` | field flows | field flow / accepted seed-cotton mass × seed-cotton need per 1,000 kg cottonseed | field flow, area, yield, gin balance | normalized field flow |  |
| `calc_gin_balance` | gin lot | input = lint + cottonseed + recovered outputs + waste + moisture reconciliation | matched mass/moisture | reconciled yield | `cotton-ginners-handbook-2016` |
| `calc_storage_balance` | storage | incoming dry matter = accepted + rejected/lost dry matter ± justified uncertainty | mass and moisture | accepted seed/loss | `cottonseed-storage-2018` |
| `calc_economic_allocation` | co-products | share_i = quantity_i × price_i / sum(quantity × price) | quantities, grades, prices | burden shares |  |
| `calc_shared_services` | shared assets | total service × documented causal share, counted once | total and driver | node/lot amount |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference | Prove non-planting, whole/fuzzy state, cultivar, crop year, moisture, foreign matter, grade, storage and gate. | specification, lot ticket, inspection |
| `dq_traceability` | chain | Link fields to seed-cotton lots and matched gin outputs; disclose mixed origins. | ids, module tags, tickets |
| `dq_mass_balance` | gin/storage | Reconcile wet and dry balances and investigate gaps beyond justified uncertainty. | scales, moisture tests, balance |
| `dq_allocation` | co-products | Retain quantities, grades, prices, period, currency, shares and mass sensitivity. | sales/market evidence, worksheet |
| `dq_temporal` | all | Cover a complete crop cycle and gin/storage period; disclose proxies and abnormal events. | dates and exception log |
| `dq_completeness` | all cards | Report applicable value or documented zero/not-applicable and retain concrete selections for sets. | completeness and binding evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference | Reject planting, delinted or crushed seed and derived products; require whole fuzzy non-planting cottonseed and qualifiers. |  |
| `validate_process_chain` | map | Require cultivation/harvest and ginning; include storage only when before gate and impose no inactive-route amount. |  |
| `validate_gin_balance` | ginning | Require matched input and complete lint, cottonseed, useful output, waste and moisture reconciliation. | `cotton-ginners-handbook-2016` |
| `validate_coproduct_allocation` | crop/gin | Require explicit lint/cottonseed attribution, economic inputs and mass sensitivity; reject double allocation. |  |
| `validate_flow_sets` | inputs | Require compatible selection evidence; nutrients remain one set-level card per process with no group/fixed UUID. |  |
| `validate_ranges` | cards | Require role, bounds, unit, basis and evidence; lower <= upper and inactive conditional routes impose no amount. |  |
| `validate_reject_routing` | rejects | Route each off-spec stream once and exclude rejected mass from accepted output. |  |
| `validate_shared_burdens` | shared services | Require a causal driver and prove each shared burden is counted once. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground cottonseed production dataset with explicit co-product attribution |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | LCA of whole fuzzy non-planting cottonseed at the declared gin/farm gate |
| excluded_use | planting or delinted seed; lint, linters, hulls, oil, cake, meal, crushing, extraction or feed manufacture |
| required_metadata | cultivar; geography; crop year; irrigation; harvest; gin; lot; moisture; foreign matter; fuzz state; storage; gate; balance; allocation |
| required_quality_disclosure | coverage, uncertainty, proxies, mixed origins, unresolved identities, allocation sensitivity and representativeness |
| update_trigger | material change in region, production, harvest, gin, yield, moisture/storage, product state, price or allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `feedipedia-cottonseed` | extension_guidance | Feedipedia, Cotton seeds, https://feedipedia.review.fao.org/node/742 | identity, route, uses and exclusions |
| `cotton-ginners-handbook-2016` | handbook | National Cotton Council, Cotton Ginners Handbook, https://journal.cotton.org/article/20-2-154/ | gin boundary, separation, moisture, energy, waste and air emissions |
| `cottonseed-storage-2018` | literature | Ashley et al., Cottonseed Air-Handling and Storage Requirements, Journal of Cotton Science 22:47-59, https://www.cotton.org/journal/2018-22/1/47.cfm | co-product ratio, moisture, aeration, handling and storage |
| `ncc-seedcotton-handling` | extension_guidance | National Cotton Council, Recommendations for Handling Seedcotton Exposed to Excessive Rainfall, https://www.cotton.org/tech/quality/rainfallandseedcotton.cfm | harvest moisture, seed-cotton storage and seed condition |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11 | managed-soil emissions |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | fertilizer ammonia |
| `pcr-reference-definition` | standard | This PCR, Reference Flow section | exact 1,000 kg output range |
