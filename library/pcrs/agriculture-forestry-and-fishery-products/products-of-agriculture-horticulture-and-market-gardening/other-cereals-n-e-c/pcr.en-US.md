---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-cereals-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other cereals n.e.c. grain

## 1. Scope and Applicability

This PCR guides construction of a foreground data package for a cultivated cereal grain classified in CPC 3.0 `01199` Other cereals n.e.c. and not represented by a named CPC cereal leaf with a dedicated PCR. The category is residual by classification, so the dataset must identify the biological crop, cultivar where material, intended use, and physical market state.

The default boundary runs from seed-for-sowing and crop establishment through field operations, harvest, primary drying, cleaning, grading, and delivery of tempered grain to the declared primary-conditioning gate. A dataset may use an earlier farm-gate hand-off as an intermediate process output when that output is measured, but the reference output remains the tempered grain gate. Food, feed, industrial, and specialty grain uses are covered only when the use and quality state are declared.

This PCR excludes named cereal categories with dedicated PCR coverage, including buckwheat, canary seed, fonio, millet, quinoa, triticale, rye, sorghum, wheat, barley, oats, rice, maize, and any other crop separately classified with a narrower applicable PCR. It also excludes seed sold for sowing, whole-crop forage, hay, silage, flour, malt, starch, alcohol, prepared foods, feed manufacture, retail packaging, consumer use, and downstream transport beyond the declared gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-cereals-n-e-c |
| classification_refs | CPC 3.0 `01199`, Other cereals n.e.c. |
| covered_products | tempered grain from a residual cereal crop not separately represented by a named CPC cereal leaf, delivered at a declared primary-conditioning gate |
| excluded_products | named cereal categories with dedicated PCRs; sowing seed; forage and whole-crop products; milled, malted, fermented, prepared, or retail products |
| representative_product | identified other cereal grain, tempered after primary conditioning, at the declared gate and moisture basis |
| production_route | annual or perennial cereal crop establishment, field production, harvest, primary conditioning, and declared gate hand-off |
| market_state | bulk or packaged tempered grain with crop identity, intended use, moisture basis, grade, geography, crop year, and gate declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | identified tempered grain in the CPC 01199 residual category at the declared primary-conditioning gate |
| How much | 1 kg |
| How well | biological crop and cultivar where material; intended use; as-is or dry-matter moisture basis; grade or quality descriptors; tempering and cleaning state; geography; crop year; and declared gate |
| How long or cycle | one declared crop cycle and harvest year; storage duration is declared separately when the gate follows storage |
| reference_flow_link | Reference amount and verified platform product flow below; the selected identity is constrained to the tempered primary-conditioning gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tempered cereal grain `5e3cbce3-96fb-4754-87e1-ad67d2ea86f3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Binding | fixed |
| Required qualifiers | crop identity and cultivar where material; residual CPC 01199 classification; intended use; moisture basis; grade or quality descriptors; tempering/cleaning/drying status; geography; crop year; primary-conditioning gate; bulk or packaging state |

When constructing a foreground data package, declare every required qualifier in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A specific named cereal must be redirected to its narrower PCR when one exists.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg of identified grain at the selected gate and state whether mass is as-is or moisture-normalized. |
| `moisture_basis` | harvested and conditioned grain | Mass and moisture content | kg and percent | Record as-is mass and measured moisture; if dry-matter conversion is used, retain the measured moisture and formula. |
| `nutrient_input_basis` | fertilizer and nitrogen emissions | Mass | kg product and kg nutrient | Retain commercial fertilizer product mass and declared N, P2O5, and K2O separately; use kg N for nitrogen emission calculations. |
| `water_basis` | irrigation and water withdrawal | Volume or mass | m3 or kg | Distinguish source withdrawal, delivered irrigation, field consumption, and discharge; do not merge them into one amount. |
| `energy_inventory` | field and conditioning energy | Mass, volume, or energy | L, kg, MJ, or kWh | Record energy carrier, operation, period, and conversion basis before normalization to grain output. |
| `output_reconciliation` | harvest and conditioning outputs | Mass | kg | Reconcile accepted grain, screenings, residue, reject, and measured loss on a common moisture basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | seed_for_sowing_input_and_declared_other_cereal_crop_cycle |
| starting_condition_role | crop_establishment_condition |
| product_classification_scope | residual CPC 3.0 `01199` tempered other cereal grain whose biological identity is declared and which is not covered by a narrower named cereal PCR |
| recursive_input_rule | a same-category grain used as seed-for-sowing is recorded as an upstream sowing input with crop identity, lot, treatment, source, and amount; it is not silently treated as the reference product |
| upstream_dataset_requirement | identified seed, fertilizer, crop-protection, energy, water, transport, and waste-treatment datasets or supplier primary records are required for upstream inputs |
| disclosure | declare biological crop identity, cultivar where material, crop cycle, geography, crop year, intended use, seed source, fertilizer and crop-protection practice, irrigation status, moisture basis, harvest and conditioning route, tempering state, primary-conditioning gate, quality state, and fate of every non-reference output |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_production` | field production | Include seed-for-sowing, land occupation, soil preparation, sowing or planting, nutrient inputs, irrigation where applicable, crop protection, field operations, and direct field emissions through harvest. | `ipcc-2019-managed-soils-n2o`; `fao-crop-evapotranspiration-56` |
| `boundary_harvest` | harvest and hand-off | Include harvesting, threshing or combining, field-side collection, and delivery to the declared farm or primary-conditioning hand-off when these activities are in the foreground package. | `fao-grain-postharvest-systems-1998` |
| `boundary_primary_conditioning` | primary conditioning | Include primary drying, cleaning, grading, tempering, and reject handling through the declared reference gate. | `fao-grain-postharvest-systems-1998` |
| `boundary_downstream_exclusion` | downstream processing | Exclude milling, malting, starch or alcohol conversion, food or feed manufacture, retail, and consumer use; model them as downstream datasets. | `iso-14044-2006` |
| `boundary_input_completeness` | all routes | Quantify or justify zero/exclusion for seed, N/P/K and organic nutrients, irrigation, crop protection, land, field and harvest energy, conditioning energy, direct emissions, residues, rejects, and losses. | `ipcc-2019-managed-soils-n2o`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `other_cereal_crop_production` | Other Cereal Crop Production | required |  | foreground | harvested grain and associated field residues |
| `other_cereal_harvest_delivery` | Harvest and Farm-gate Delivery | required |  | foreground | harvested grain delivered to the selected hand-off |
| `other_cereal_primary_conditioning` | Primary Drying, Cleaning, Tempering, and Grading | required | required to produce the tempered reference flow | foreground | accepted tempered grain at the conditioning gate |
| `other_cereal_storage_gate` | Storage and Declared Gate Handoff | conditional | include when storage or packaging changes the declared gate | foreground | grain at the selected gate |

### Process: Other Cereal Crop Production (`other_cereal_crop_production`)

#### Inputs

##### Product flows

###### Seed for sowing of the declared cereal (`seed_for_sowing_input`)

Record the crop-specific sowing seed as an upstream product input, with lot identity and treatment retained. The seed identity requires foreground binding before publication.

- Selected flow: Crop-specific seed for sowing
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass by field and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_input_records`
- Range: Provisional seed-rate screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 5
  - Upper: 350
  - Unit: kg seed / ha
  - Basis: broad crop-establishment seed-rate range pending crop-specific records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`other_cereal_crop_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources:
- Range: Provisional nitrogen-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg N / 1,000 kg grain
  - Basis: broad first-pass field input guardrail pending crop- and region-specific records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg P2O5 / 1,000 kg grain
  - Basis: broad first-pass field input guardrail pending crop- and region-specific records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional potassium-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg K2O / 1,000 kg grain
  - Basis: broad first-pass field input guardrail pending crop- and region-specific records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional organic-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10,000
  - Unit: kg product / 1,000 kg grain
  - Basis: broad first-pass amendment range pending site records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied to the crop (`irrigation_water_input`)

Record delivered irrigation separately from source withdrawal and field consumption. Irrigation may be explicitly zero where the crop is rainfed and the evidence is documented.

- Selected flow: Irrigation water
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Volume / m3
- Amount rule: metered delivered irrigation volume by source and field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Range: Provisional irrigation-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3,000
  - Unit: m3 / 1,000 kg grain
  - Basis: broad first-pass delivered irrigation range pending site records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product input (`crop_protection_input`)

Record each formulated crop-protection product or active substance according to the available supplier or application record. Do not replace a product identity with a generic pesticide UUID.

- Selected flow: Crop-protection product
- Flow property / unit: Mass / kg
- Amount rule: measured formulated-product or active-substance mass by application
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Range: Provisional crop-protection screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg formulated product / 1,000 kg grain
  - Basis: broad first-pass application range pending product and field records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery fuel (`field_machinery_fuel`)

Record fuel by field operation, machine, and crop lot before converting it to the declared output basis.

- Selected flow: Mobile machinery fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Mass or energy / kg or MJ
- Amount rule: measured fuel use by field operation, with carrier and original unit retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Range: Provisional field-fuel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: L / 1,000 kg grain
  - Basis: broad first-pass field-operation fuel range pending machinery records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is assumed. Reused organic materials, recycled water, and waste-derived inputs are recorded only when their source and boundary crossing are documented.

##### Elementary flows

Land occupation and resource withdrawal are recorded as elementary exchanges when the foreground package includes them. Their identity and unit remain subject to the final process dataset contract.

#### Outputs

##### Product flows

###### Harvestable other cereal grain (`harvested_grain_output`)

Record gross harvested grain and the accepted portion separately; the accepted portion is carried to the harvest process and ultimately defines the reference output.

- Selected flow: Other cereal grain, harvested and unprocessed
- Flow property / unit: Mass / kg
- Amount rule: measured harvested grain mass with moisture and quality recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: Provisional harvested-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 300
  - Upper: 15,000
  - Unit: kg grain / ha
  - Basis: broad crop-yield guardrail pending identified crop and regional records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

Field-return residue, removed straw or stalk, damaged grain, and unharvested loss are recorded in the harvest process when they have a measurable mass and declared fate.

##### Elementary flows

Direct field emissions are calculated from collected nutrient and residue records and are assigned to the receiving compartment below.

### Process: Harvest and Farm-gate Delivery (`other_cereal_harvest_delivery`)

#### Inputs

##### Product flows

###### Harvested grain from crop production (`harvested_grain_input`)

Transfer the measured harvest output into the hand-off process on the same moisture basis; do not silently replace it with a named cereal flow.

- Selected flow: Other cereal grain, harvested and unprocessed
- Flow property / unit: Mass / kg
- Amount rule: measured grain received from the crop-production node
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: Provisional harvest-to-hand-off input estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.95
  - Upper: 1.20
  - Unit: kg grain input / kg accepted grain
  - Basis: broad first-pass harvest mass-yield range pending lot records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest machinery fuel (`harvest_fuel_input`)

Record combine, threshing, drying-on-machine, and field collection energy when it is within the declared boundary.

- Selected flow: Mobile machinery fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Mass or energy / kg or MJ
- Amount rule: measured harvest fuel by machine and harvested lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy_records`
- Range: Provisional harvest-fuel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: L / 1,000 kg grain
  - Basis: broad first-pass harvest-operation fuel range pending machine records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

Harvest losses and removed residues are recorded as separate waste or co-product streams with fates.

##### Elementary flows

No elementary input is assumed at the hand-off beyond those documented in the harvest records.

#### Outputs

##### Product flows

###### Grain delivered to declared farm gate (`farm_gate_grain_output`)

The accepted grain at the declared farm gate is the provisional reference output when no conditioning or storage process is included.

- Selected flow: Other cereal grain, harvested and unprocessed
- Flow property / unit: Mass / kg
- Amount rule: measured accepted grain at the declared hand-off, with moisture and quality qualifiers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: Provisional accepted-grain output guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1.0
  - Unit: kg accepted grain / kg harvested grain
  - Basis: accepted-grain fraction after harvest screening
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Residue, damaged grain, and harvest loss (`harvest_residue_and_loss`)

Record residue returned to the field, residue removed from the field, damaged grain, and unmeasured loss with separate fates.

- Selected flow: Harvest residue or loss stream
- Flow property / unit: Mass / kg
- Amount rule: measured stream mass or reconciled difference on a common moisture basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_loss_records`
- Range: Provisional residue-and-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: kg dry or as-is stream / 1,000 kg accepted grain
  - Basis: broad first-pass residue and loss range pending measured fate records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct field emissions carried through harvest (`direct_field_emissions`)

Direct emissions are calculated from nutrient, residue, and energy records and are not included in the grain mass balance.

- Selected flow: one identified nitrogen, phosphorus, or combustion emission to one evidenced receiving compartment; create separate foreground exchanges by substance and compartment
- Flow property / unit: Mass / kg substance
- Amount rule: calculated from collected inputs and selected method factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_activity_records`
- Range: Provisional direct-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg substance / 1,000 kg accepted grain
  - Basis: broad first-pass aggregate emission guardrail pending substance-specific calculations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary Drying, Cleaning, and Grading (`other_cereal_primary_conditioning`)

#### Inputs

##### Product flows

###### Harvested grain entering primary conditioning (`conditioning_grain_input`)

Include this input when drying, cleaning, or grading is part of the declared gate. Record input moisture and quality before conditioning.

- Selected flow: Other cereal grain, harvested and unprocessed
- Flow property / unit: Mass / kg
- Amount rule: weighed conditioning-line input with moisture measurement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the conditioning gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_records`
- Range: Provisional conditioning-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.95
  - Upper: 1.20
  - Unit: kg input grain / kg accepted grain
  - Basis: broad mass-yield guardrail before moisture correction
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`conditioning_electricity_input`)

Record electricity used by dryers, cleaners, conveyors, fans, and grading equipment by batch or campaign.

- Selected flow: Electricity supply
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Amount rule: metered or invoiced electricity allocated to the conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted grain at the conditioning gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Range: Provisional conditioning-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kWh / 1,000 kg accepted grain
  - Basis: broad first-pass cleaning, conveying, and grading energy range
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning heat or fuel (`conditioning_heat_input`)

Record dryer heat carrier and amount when drying is selected; keep fuel and supplied heat distinguishable in the foreground record.

- Selected flow: Purchased process heat or stationary fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `purchased-process-heat`
- Flow property / unit: Energy / MJ
- Amount rule: metered heat or measured fuel converted to supplied process heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted grain at the conditioning gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Range: Provisional drying-heat screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,500
  - Unit: MJ / 1,000 kg accepted grain
  - Basis: broad first-pass drying heat range pending moisture removal and equipment records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

Screenings, dust, damaged grain, and reject streams are recorded separately with their measured moisture and destination.

##### Elementary flows

Drying and combustion emissions are calculated from confirmed energy records and declared factors.

#### Outputs

##### Product flows

###### Accepted tempered grain (`conditioned_grain_output`)

The accepted tempered grain is the reference output at the declared primary-conditioning gate.

- Selected flow: Tempered cereal grain `5e3cbce3-96fb-4754-87e1-ad67d2ea86f3`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted batch output with moisture and grade recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioned_output_records`
- Range: Provisional conditioning-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.80
  - Upper: 1.00
  - Unit: kg accepted grain / kg conditioning input
  - Basis: accepted output fraction after moisture and reject reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Screenings, dust, and conditioning rejects (`conditioning_rejects`)

Record each removed stream and fate; no rejected material is allocated to accepted grain without an explicit rework decision.

- Selected flow: Cereal screenings, dust, or rejected grain
- Flow property / unit: Mass / kg
- Amount rule: weighed stream mass or reconciled difference on a common moisture basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioned grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_reject_records`
- Range: Provisional conditioning-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg reject / kg conditioning input
  - Basis: broad first-pass screening and reject fraction pending batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Drying, dust, and combustion emissions are reported in the receiving compartment selected by the foreground process dataset.

### Process: Storage and Declared Gate Handoff (`other_cereal_storage_gate`)

#### Inputs

##### Product flows

###### Grain entering declared storage or packaging (`storage_grain_input`)

Record opening inventory, moisture, quality, and lot identity when storage or packaging is part of the declared gate.

- Selected flow: Other cereal grain at the preceding gate
- Flow property / unit: Mass / kg
- Amount rule: weighed lot input with opening moisture and quality record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_inventory_records`
- Range: Provisional storage-input mass estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.95
  - Upper: 1.20
  - Unit: kg grain input / kg accepted grain
  - Basis: broad first-pass storage input range pending lot reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage electricity (`storage_electricity_input`)

Record fans, conveyors, aeration, and other storage electricity by lot or storage period.

- Selected flow: Electricity supply
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Amount rule: metered or invoiced storage electricity allocated by lot and duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_energy_records`
- Range: Provisional storage-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kWh / 1,000 kg grain
  - Basis: broad first-pass storage and aeration energy range pending lot records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

Storage loss, spoilage, and damaged product are recorded with duration, moisture, mass, and fate.

##### Elementary flows

No elementary input is assumed beyond documented storage-resource exchanges.

#### Outputs

##### Product flows

###### Tempered grain at the declared reference gate (`declared_gate_grain_output`)

The final accepted tempered lot is the reference output when storage or packaging follows the primary-conditioning gate.

- Selected flow: Tempered cereal grain `5e3cbce3-96fb-4754-87e1-ad67d2ea86f3`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted output with moisture, quality, packaging state, and storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_gate_output_records`
- Range: Provisional storage-output yield estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.90
  - Upper: 1.00
  - Unit: kg accepted grain / kg stored grain
  - Basis: broad first-pass storage mass-yield range pending lot records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Storage loss or spoilage (`storage_loss`)

Record mass loss and destination separately from accepted grain.

- Selected flow: Storage loss or spoiled cereal grain
- Flow property / unit: Mass / kg
- Amount rule: opening mass + inputs - accepted output - documented transfers, on a common moisture basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_inventory_records`
- Range: Provisional storage-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg loss / kg stored grain
  - Basis: broad first-pass storage-loss guardrail pending inventory records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Storage-related emissions are reported when fumigation, energy, or waste treatment crosses the foreground boundary.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | crop, harvest, conditioning, and storage | First avoid allocation by subdividing operations whenever field, machine, batch, or storage records support separate process nodes. | `iso-14044-2006` |
| `allocation_grain_and_residue` | accepted grain and removed residue | Treat field-return residue according to its declared fate. When removed residue or a co-product shares an inseparable process, apply an explicitly declared physical or economic allocation and disclose sensitivity. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_screenings_and_rejects` | screenings, damaged grain, and storage loss | Record accepted grain, screenings, rejects, and losses as separate streams with fates. Do not allocate rejected material to the reference output without documented rework or allocation. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_substitution` | residue or by-product use | Apply substitution only when the displaced product, market, route, and evidence are declared; do not infer a credit from a generic residue name. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_input_records` | `other_cereal_crop_production` | seed for sowing | seed lot and receiving record | crop; cultivar; supplier; lot; treatment; mass; moisture; date; field | calibrated scale, invoice, supplier record, or farm log | kg | per seed lot | crop cycle | field or farm | sum by field and crop lot | scale calibration, invoice, supplier record |
| `cp_nutrient_input_records` | `other_cereal_crop_production` | N, P, K, and organic nutrients | purchase and application record | product; nutrient; product mass; nutrient content; date; field; method | invoice, nutrient analysis, application log, or applicator record | kg product and kg nutrient | per application | crop cycle | field or farm | sum by product and nutrient, then normalize to output | invoice, analysis, application log |
| `cp_irrigation_records` | `other_cereal_crop_production` | irrigation and withdrawal | meter or pumping record | source; meter; readings; volume; pumping energy; date; field | calibrated meter, pump log, invoice, or irrigation record | m3, kg, and energy unit | event or period | irrigation season | field and source | distinguish withdrawal, delivery, and consumption before summing | meter calibration, readings, invoice |
| `cp_crop_protection_records` | `other_cereal_crop_production` | crop protection | application record | product; active substance; formulation; mass; date; field; method | spray log, label, invoice, or applicator record | kg product or active substance | per application | crop cycle | field or farm | sum by product or active substance and normalize to output | label, log, applicator record |
| `cp_field_energy_records` | `other_cereal_crop_production` | field fuel and electricity | field-operation record | operation; machine; carrier; quantity; field; date | fuel log, invoice, telematics, or meter | L, kg, MJ, or kWh | per operation | crop cycle | field or farm | sum by operation and normalize to selected gate output | invoice, machine log, telematics |
| `cp_harvest_output_records` | `other_cereal_crop_production` | harvested and accepted grain | harvest record | field; date; gross grain; accepted grain; moisture; grade; residue; loss | calibrated scale, harvest ticket, moisture test, and dispatch record | kg and percent | harvest event | crop year | field and farm | reconcile gross, accepted, residue, and loss on common basis | scale calibration, ticket, moisture test |
| `cp_harvest_energy_records` | `other_cereal_harvest_delivery` | harvest fuel | machine or contractor record | machine; carrier; quantity; harvested mass; date; period | invoice, fuel log, telematics, or meter | L, kg, MJ, or kWh | event or period | crop cycle | field to hand-off | allocate by recorded harvested mass and operation | invoice, telematics, meter |
| `cp_residue_and_loss_records` | `other_cereal_harvest_delivery` | residue, damaged grain, and loss | residue/fate record | stream; mass; moisture; fate; destination; field; date | scale ticket, field log, transfer, sale, or disposal record | kg | event or campaign | crop cycle | field and hand-off | sum by stream and fate; do not merge with accepted grain | scale ticket, fate record, field log |
| `cp_emission_activity_records` | `other_cereal_harvest_delivery` | direct emissions activity data | nutrient, residue, and energy ledger | N input; residue; fuel; factor tier; receiving compartment; period | linked activity records and method calculation sheet | kg N, kg residue, L, MJ, or kWh | crop cycle or operation | crop year | field and hand-off | preserve factor selection and compartment in calculation output | linked records, factor declaration |
| `cp_conditioning_input_records` | `other_cereal_primary_conditioning` | conditioning input | line or batch record | batch; input mass; moisture; grade; date; source lot | calibrated scale and quality test | kg and percent | per batch | conditioning campaign | facility and line | sum batches and retain input identity | scale calibration, quality test |
| `cp_conditioning_energy_records` | `other_cereal_primary_conditioning` | electricity and heat | facility energy record | line; carrier; quantity; batch; period; input/output mass | meter, bill, equipment log, or fuel record | kWh, MJ, L, or kg | batch or campaign | conditioning campaign | facility and line | allocate to batch and normalize to accepted output | meter, bill, equipment log |
| `cp_conditioning_reject_records` | `other_cereal_primary_conditioning` | screenings, dust, and rejects | reject/fate record | batch; stream; mass; moisture; quality; fate | calibrated scale, reject log, dust record, or transfer record | kg and percent | batch or campaign | conditioning campaign | facility and line | reconcile input, accepted output, rejects, dust, and loss | scale, reject log, fate record |
| `cp_conditioned_output_records` | `other_cereal_primary_conditioning` | accepted conditioned grain | output and quality record | batch; mass; moisture; grade; cleaning status; gate | calibrated scale and quality test | kg and percent | per batch | conditioning campaign | facility and gate | sum accepted batches at declared basis | scale, quality test, dispatch record |
| `cp_storage_inventory_records` | `other_cereal_storage_gate` | storage input and loss | inventory reconciliation | lot; opening; closing; moisture; duration; losses; transfers; fate | inventory record, scale, storage log, or dispatch record | kg, percent, days | lot or period | declared storage duration | storage site | reconcile each lot on a common moisture basis | inventory record, scale, log |
| `cp_storage_energy_records` | `other_cereal_storage_gate` | storage electricity | meter or utility record | lot; carrier; quantity; date; duration; allocation basis | meter, bill, or equipment log | kWh or MJ | lot or period | storage duration | storage site | allocate by lot mass and duration unless dedicated meter exists | meter, bill, log |
| `cp_declared_gate_output_records` | `other_cereal_storage_gate` | final accepted grain | gate or dispatch record | lot; gate; date; mass; moisture; grade; packaging state | scale, weighbridge, quality record, and dispatch ticket | kg and percent | shipment or gate event | declared gate period | declared gate | sum accepted lots and preserve gate identity | scale, quality, dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_output` | all foreground flows | recorded flow amount / accepted grain mass at selected gate * 1 kg reference amount | applicable protocol records and declared gate output | amount per kg reference grain | `mass-balance-identity` |
| `convert_moisture_basis` | grain and residue reconciliation | dry-matter mass = as-is mass * (1 - moisture fraction); retain as-is mass and measured moisture | harvest, conditioning, storage, and residue records | common comparison mass basis | `mass-balance-identity` |
| `calculate_nutrient_amounts` | fertilizer inputs | commercial product mass * declared nutrient fraction; retain product mass and nutrient mass separately | `cp_nutrient_input_records` | kg N, kg P2O5, and kg K2O inputs | `mass-balance-identity` |
| `calculate_irrigation_withdrawal` | irrigation | source-specific metered withdrawal, delivered volume, and documented consumption are calculated and reported as distinct flows | `cp_irrigation_records`; gate output | water amounts per reference output | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_emissions` | field nutrient emissions | apply selected IPCC tier and factor to accounted nutrient input and convert N2O-N to N2O where applicable; disclose factors and compartments | `cp_nutrient_input_records`; `cp_emission_activity_records` | direct emissions per reference output | `ipcc-2019-managed-soils-n2o` |
| `reconcile_harvest_outputs` | crop and harvest | accepted grain + residues removed + field-return residue + measured loss = harvest output on common moisture basis; explain residual | `cp_harvest_output_records`; `cp_residue_and_loss_records` | harvest mass balance | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | primary conditioning | accepted grain + screenings + dust + rejects + measured loss = conditioning input on common moisture basis; explain residual | `cp_conditioning_input_records`; `cp_conditioning_reject_records`; `cp_conditioned_output_records` | conditioning yield and loss | `mass-balance-identity` |
| `allocate_storage_energy` | storage | allocate storage energy by lot mass and declared duration unless dedicated metering supports direct assignment | `cp_storage_energy_records`; `cp_storage_inventory_records` | storage energy per reference output | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_residual_cereal_identity` | product identity | Declare biological crop and cultivar where material and confirm that the product belongs to residual CPC 01199 rather than a named cereal leaf with a dedicated PCR. | product metadata, crop record, contract, or classification review |
| `dq_gate_and_moisture` | reference flow and outputs | Record selected gate, as-is mass, moisture basis, and any dry-matter conversion for every reconciled stream. | scale, moisture test, dispatch, and calculation records |
| `dq_temporal_coverage` | crop production and harvest | Cover the declared crop cycle and harvest year; disclose single-year, multi-year average, or scenario status. | dated farm, harvest, and input records |
| `dq_input_completeness` | field and conditioning | Quantify or justify zero/exclusion for seed, nutrients, irrigation, crop protection, land, field energy, harvest energy, conditioning energy, and direct emissions. | ledgers, invoices, logs, meters, and method declaration |
| `dq_output_fate` | residues, rejects, and losses | Record every non-reference output, its mass basis, boundary crossing, destination, and fate; evidence gap material fates block finalization. | scale records, field logs, disposal, transfer, or sales records |
| `dq_quality_descriptor` | grain state | Record intended use, moisture, grade, cleaning status, and other quality descriptors material to the selected gate without inventing universal acceptance limits. | quality test, buyer specification, or local record |
| `dq_uuid_identity` | identity references | Confirm every fixed UUID and receiving compartment; resolve parameterized Flow Set rows to concrete UUIDs during foreground data generation, and leave unsupported identities unmapped. | identity record and review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_residual_category` | product identity | Confirm the biological crop is declared, belongs to CPC 01199, and is not a named cereal with a more specific PCR; redirect to the narrower PCR when applicable. | `iso-14044-2006` |
| `validation_reference_flow` | reference flow | Confirm one 1 kg mass reference at the declared gate has crop identity, intended use, moisture basis, quality state, geography, crop year, and gate qualifiers. | `mass-balance-identity` |
| `validation_process_completeness` | process map and inventory | Confirm crop production and harvest are present, and conditioning or storage is present or explicitly excluded by the declared gate. | `fao-grain-postharvest-systems-1998` |
| `validation_nutrient_and_emission_accounting` | nutrients and emissions | Confirm commercial fertilizer mass is distinct from nutrient mass, factor selection is declared, N2O-N conversion is transparent, and relevant nitrogen pathways are addressed. | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | irrigation | Confirm withdrawal, delivery, consumption, and discharge are distinguished and no water amount is double counted. | `fao-crop-evapotranspiration-56` |
| `validation_moisture_and_mass_balance` | outputs | Confirm harvest, conditioning, storage, residue, reject, and loss reconciliation uses a common moisture basis and every stream has a fate. | `mass-balance-identity` |
| `validation_allocation` | co-products and residues | Confirm subdivision was considered first, any allocation method is declared, substitution has an evidenced displaced product, and sensitivity is reported when material. | `iso-14044-2006` |
| `validation_uuid_review` | identity references | Confirm fixed identities and receiving compartments; resolve each parameterized Flow Set row to a concrete UUID before creating a final TIDAS exchange. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream grain, food, feed, industrial, or LCA data construction when the declared biological identity, residual classification, intended use, gate, geography, year, moisture, quality state, and route match the dataset metadata |
| excluded_use | named cereals with a dedicated PCR; sowing seed; forage; flour, malt, starch, alcohol, prepared food, feed manufacture, retail, consumer use, or datasets with incompatible gate or evidence gap material fates |
| required_metadata | reference flow; biological crop and cultivar; CPC 01199 residual status; intended use; geography; crop cycle and year; seed source; irrigation; nutrient and crop-protection records; moisture basis; quality descriptors; harvest and conditioning route; declared gate; residue, reject, and loss fates; allocation; data-quality declaration |
| required_quality_disclosure | primary-record coverage; temporal and geographic representativeness; moisture and mass-balance treatment; nutrient and emission factors; identity coverage and unmapped-flow disclosure; omitted inputs; allocation and sensitivity; module checklist result |
| update_trigger | change in crop identity, classification scope, route, gate, moisture or quality representation, fertilizer or crop-protection practice, irrigation, harvest or conditioning technology, storage duration, factor source, UUID binding, or evidence status |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-grain-postharvest-systems-1998` | official_guidance | FAO, *Agricultural engineering in development — Grain and post-harvest systems*, <https://www.fao.org/4/t0522e/T0522E03.htm> | harvest, drying, cleaning, storage, loss, and primary-conditioning process decomposition |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration*, <https://www.fao.org/4/X0490E/X0490E00.htm> | irrigation data collection and separation of water withdrawal, delivery, and consumption |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil N2O method selection, activity data, and factor disclosure |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, <https://www.iso.org/standard/38498.html> | allocation hierarchy, system boundary, inventory, and quality disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity. | harvest, conditioning, storage, moisture conversion, and output reconciliation |
