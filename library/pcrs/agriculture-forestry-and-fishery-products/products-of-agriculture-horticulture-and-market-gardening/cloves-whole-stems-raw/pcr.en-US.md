---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cloves-whole-stems-raw
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cloves (whole stems), raw

## 1. Scope and Applicability

This PCR covers managed production of *Syzygium aromaticum*, establishment and productive-life attribution of the perennial tree stand, harvest of mature unopened flower-bud clusters, bud/stem separation, grading, and only conditioning completed before farm-gate hand-off. The accepted lot may be fresh raw whole buds with its stem condition declared, or farm-dried whole buds when drying belongs to the farm-gate route. Each dataset declares one hand-off state.

Oil extraction or distillation, grinding, blending, food or smoking-product manufacture, retail packaging, and post-gate transport are excluded. Detached stems, opened flowers, fruits, leaves, spoiled buds, and downgraded material are excluded from accepted reference mass unless separately modelled with a destination.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cloves-whole-stems-raw |
| classification_refs | CPC 3.0: 01656, Cloves (whole stems), raw |
| covered_products | Whole, unground clove flower buds harvested before opening, with lot-specific attached-stem condition declared, supplied at farm gate as fresh raw or farm-dried raw product |
| excluded_products | Clove oil or oleoresin; ground or blended cloves; detached stems sold for oil; leaves; fruits or mother cloves; opened flowers; manufactured spice preparations; retail-packed product |
| representative_product | Accepted whole unopened clove buds from managed perennial clove trees |
| production_route | Parent activity: managed perennial biological production. Production-route delta: sole/mixed crop and rainfed/supplemental-irrigation stands alter shared-land attribution, irrigation inventory, and records and are separate weighted strata. Technology-route delta: fresh hand-off, sun drying, and assisted drying alter topology, energy, water-loss, quality, and moisture records; one lot follows exactly one route. |
| market_state | Fresh raw or farm-dried raw whole buds at farm gate; moisture, maturity, grade, attached-stem condition, production system, and drying route declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted whole unopened clove buds at the declared farm-gate state |
| How much | 1 kg net accepted product |
| How well | Meets declared grade and moisture specification; excludes detached stems, opened flowers, spoiled buds, foreign matter, and unresolved rejects |
| How long or cycle | One reporting year of a productive perennial stand, with establishment, immature years, productive years, replacements, and termination indexed across the declared productive life |
| reference_flow_link | Net accepted output of `harvest_grade` for fresh hand-off or `conditional_drying` for dried hand-off |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cloves (whole stems), raw `53a5a137-db87-42e1-a85d-4b187eb5281a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; unopened-bud maturity criterion; fresh or farm-dried state; moisture content and basis; attached-stem condition; accepted grade; production system; stand age; reporting year; drying technology if used; farm-gate location |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass at hand-off and record moisture and wet/dry basis; do not convert fresh and dried lots without measured moisture. |
| `intermediate_mass` | clusters, buds, stems, residues, rejects, moisture loss | Mass | kg | Weigh each state or reconcile by a documented same-batch mass balance; never count one state twice. |
| `nutrient_content` | consolidated nutrient supply | Mass | kg product and kg nutrient | Collect every mineral fertilizer, organic fertilizer, lime, compost, manure, microbial input, and nutrient-bearing amendment separately with nutrient composition and moisture; aggregate only for the PCR card. |
| `energy_carrier` | fuel and electricity | Energy or carrier mass/volume | MJ, kWh, kg, or L | Retain carrier identity, original quantity, conversion factor, consuming node, batch, and period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Propagation material and prepared site enter establishment; an existing stand enters with age, density, prior establishment history, and remaining productive life declared |
| starting_condition_role | Starting condition for managed perennial production, not a zero-burden assumption |
| product_classification_scope | CPC 3.0 01656 whole raw cloves at farm gate |
| recursive_input_rule | Purchased raw cloves of this category in an aggregated lot remain separately quantified upstream inputs with conforming datasets and are not relabelled as on-farm production |
| upstream_dataset_requirement | Each purchased input and service uses representative upstream data; mixed-crop shared burdens retain the declared causal or allocation basis |
| disclosure | Declare geography, planting stock, sole/mixed crop, density, stand age, establishment year, productive-life assumption, replacement/termination, irrigation, harvest maturity, grade states, fresh/dried hand-off, drying method, moisture basis, and every residue/reject destination |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_phases` | establishment to farm gate | Include propagation, site preparation, planting, immature management, productive management, replacements, harvest, separation, grading, and route-dependent drying. Attribute establishment and long-lived assets across actual output over their service life. | `fao-ecocrop-clove`; `kau-clove-practices-2016` |
| `boundary_harvest_state` | harvest | Harvest mature unopened buds before flowering; keep clusters and incidental material distinct. Harvest is separate because it removes output while the perennial tree remains productive. | `icar-iisr-clove`; `kau-clove-harvesting` |
| `boundary_conditioning` | post-harvest | Include bud/stem separation and grading. Fresh lots bypass drying; dried lots record method, energy, duration, input/output moisture, mass loss, rejects, and stabilized hand-off. | `kau-clove-harvesting`; `unido-spice-postharvest-2015` |
| `boundary_downstream_exclusion` | downstream | Exclude extraction, distillation, grinding, blending, manufacture, retail packing, and post-gate transport. | `icar-iisr-clove`; `fao-ecocrop-clove` |
| `boundary_route_stratification` | alternative routes | Keep sole/mixed crop and rainfed/irrigated strata separate. Fresh, sun-dried, and assisted-dried lots are mutually exclusive routes and may only be output-weighted from route records. | `kau-clove-practices-2016`; `unido-spice-postharvest-2015` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | Stand establishment and immature years | required | New, inherited, or replacement burden applies | Establish trees and shared infrastructure | Lifetime accepted output |
| `annual_tree_management` | Productive-year tree management | required | Every productive year | Manage trees and generate harvestable buds | Annual harvested cluster mass |
| `harvest_grade` | Harvest, separation, and grading | required | Every harvest lot | Pick clusters, separate buds/stems, classify accepted/downgraded/rejected states | Accepted fresh bud mass |
| `conditional_drying` | Farm-gate drying and stabilization | conditional | Declared farm-gate product is dried | Stabilize accepted buds by sun, solar, or assisted drying | Accepted dried mass |

### Process: Stand establishment and immature years (`stand_establishment`)

Planting, immature-year operations, replacements, termination, and shared irrigation, access, handling, and drying assets are indexed by period and annualized once over actual lifetime accepted output.

#### Inputs

##### Product flows

###### Propagation and shared establishment assets (`establishment_materials`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Clove planting material and establishment or shared-infrastructure materials and services
- Flow property / unit: Mass / kg
- Amount rule: Collect planting stock and asset bill of materials separately; attribute replacements and each asset once over service-period accepted output and across all consuming crops, nodes, and periods
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted product over the serviced stand life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_assets`
- Sources: `kau-clove-practices-2016`
- Range: Provisional annualized establishment-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg accepted product
  - Basis: attributed planting and asset material per 1 kg lifetime accepted product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated agricultural nutrient supply during establishment (`establishment_nutrient_supply`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Mineral fertilizers, organic fertilizers, and nutrient-bearing amendments
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set version: 0.3.0
- Amount rule: Collect every actual product separately with composition and moisture, then sum product mass for this card; retain component records for nutrient and emission calculations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted product after productive-life attribution
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_ledger`
- Sources: `kau-clove-practices-2016`
- Range: Broad establishment nutrient-supply screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg product/kg accepted product
  - Basis: annualized aggregate product mass per 1 kg accepted product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment and immature-year irrigation water (`establishment_water`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Irrigation water
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Volume / m3
- Amount rule: Metered or validated supplemental water, annualized over lifetime accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted product after productive-life attribution
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`
- Sources: `kau-clove-practices-2016`
- Range: Provisional establishment-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: m3/kg accepted product
  - Basis: annualized supplemental water per 1 kg accepted product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Productive-year tree management (`annual_tree_management`)

#### Inputs

##### Product flows

###### Consolidated agricultural nutrient supply during productive years (`annual_nutrient_supply`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Mineral fertilizers, organic fertilizers, and nutrient-bearing amendments
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set version: 0.3.0
- Amount rule: Collect each actual product, nutrient composition, moisture, date, and treated stand; aggregate product mass only after the component ledger is complete
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested cluster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_ledger`
- Sources: `kau-clove-practices-2016`; `tnau-clove-practices-2013`
- Range: Broad productive-year nutrient-supply screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg product/kg harvested clusters
  - Basis: aggregate nutrient product mass per 1 kg harvested clusters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Productive-year irrigation water (`annual_irrigation_water`)

Record supplemental irrigation water separately from crop-protection products.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or validated water delivered to the productive stand
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested cluster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_annual_management_inputs`
- Range: Productive-year irrigation-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: m3/kg harvested clusters
  - Basis: per 1 kg harvested cluster output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Productive-year crop-protection products (`annual_crop_protection`)

Record every actual formulation separately for concrete exchange resolution.

- Selected flow: Crop-protection products
- Flow property / unit: Mass / kg product
- Amount rule: measured applied product mass by event and treated stand
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested cluster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_annual_management_inputs`
- Range: Productive-year crop-protection screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg product/kg harvested clusters
  - Basis: per 1 kg harvested cluster output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy carriers (`annual_field_energy`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Fuel, electricity, and contracted machine energy
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Energy / MJ
- Amount rule: Convert carrier records to delivered energy while preserving carrier identity, original quantity, operation, and period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested cluster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg harvested clusters
  - Basis: delivered field energy per 1 kg harvested clusters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvestable unopened bud clusters (`harvestable_clusters`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Mature unopened clove bud clusters on managed trees
- Flow property / unit: Mass / kg
- Amount rule: Measured cluster mass handed to the harvest node by stand and harvest batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive tree and reporting year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `fao-ecocrop-clove`
- Range: Source-supported tree-yield screen
  - Range role: Typical range (`typical_range`)
  - Lower: 1
  - Upper: 12
  - Unit: kg/tree/year
  - Basis: harvestable clove output per productive tree and year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-ecocrop-clove`

##### Waste flows

###### Field biomass residues (`field_residues`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Pruned, fallen, damaged, or otherwise removed clove-tree biomass
- Flow property / unit: Mass / kg dry matter
- Amount rule: Measure or sample dry mass and distinguish retained mulch, composting, burning, disposal, and recovery destinations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested clusters
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_records`
- Range: Provisional field-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg dry matter/kg harvested clusters
  - Basis: field biomass residues per 1 kg harvested clusters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Managed-soil nitrous oxide (`managed_soil_n2o`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate direct and indirect N2O from collected mineral-N, organic-N, residue-N, volatilization, and leaching data using the selected geographically appropriate IPCC tier; convert N2O-N to N2O
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested clusters
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_ledger`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional managed-soil N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg N2O/kg harvested clusters
  - Basis: calculated N2O per 1 kg harvested clusters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest, separation, and grading (`harvest_grade`)

Harvest batches link picking and equipment services to collected cluster mass. Separation then distinguishes whole buds, detached stems, and incidental material. Grading classifies accepted, downgraded, and rejected states; every state has a hand-off, no reject returns upstream without a recorded loop, and unresolved rejects never enter accepted mass.

#### Inputs

##### Product flows

###### Harvest energy and equipment services (`harvest_energy`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Fuel, electricity, and equipment services used to pick and move clusters
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Energy / MJ
- Amount rule: Attribute carrier-specific records to harvest batches by measured use or operating time, including cleaning/changeover where present
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested clusters
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Range: Provisional harvest-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg harvested clusters
  - Basis: harvest energy per 1 kg harvested clusters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fresh raw whole cloves (`accepted_fresh_cloves`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Cloves (whole stems), raw `53a5a137-db87-42e1-a85d-4b187eb5281a`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Net accepted fresh output equals 1 kg for fresh hand-off; for a dried route it is measured input to drying and is not also counted as reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted farm-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_grade_records`
- Range: Reference-output normalization check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference flow
  - Basis: accepted fresh output when fresh hand-off is selected
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Downgraded whole cloves (`downgraded_cloves`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Downgraded whole cloves with declared destination
- Flow property / unit: Mass / kg
- Amount rule: Weighed separately and treated as product only when destination and economic function are documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg incoming harvested clusters
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Range: Grade-state mass-balance range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg incoming harvested clusters
  - Basis: downgraded cloves per 1 kg incoming clusters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Detached stems, harvest loss, and grading rejects (`harvest_grade_residues`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Detached stems, opened flowers, mother cloves, damaged or spoiled buds, foreign matter, and incidental plant material
- Flow property / unit: Mass / kg
- Amount rule: Weigh each physical state and destination separately; a sold stem or recovered output is separately modelled, while composting, disposal, or field return remains a destination-specific residue/waste route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg incoming harvested clusters
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- Range: Harvest/grading residue mass-balance range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg incoming harvested clusters
  - Basis: all non-accepted states per 1 kg incoming clusters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Farm-gate drying and stabilization (`conditional_drying`)

This node is inactive for fresh hand-off. For a dried route, accepted fresh buds are the usable pre-intervention state and accepted dried whole buds are the stabilized hand-off. Sun, solar, and assisted drying remain separate technology strata.

#### Inputs

##### Product flows

###### Accepted fresh buds entering drying (`drying_fresh_input`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Accepted fresh raw whole clove buds
- Flow property / unit: Mass / kg
- Amount rule: Weighed fresh accepted mass entering the same drying batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- Range: Source-supported drying input screen
  - Range role: Typical range (`typical_range`)
  - Lower: 2.5
  - Upper: 3.5
  - Unit: kg/kg accepted dried output
  - Basis: fresh buds entering drying per 1 kg accepted dried output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `kau-clove-harvesting`; `unido-spice-postharvest-2015`

###### Drying energy carriers (`drying_energy`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Electricity, fuel, and purchased heat used by the declared drying technology
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Energy / MJ
- Amount rule: Record every purchased carrier by drying batch; passive sunlight has no purchased-energy exchange but still requires route declaration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `unido-spice-postharvest-2015`
- Range: Provisional drying-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg accepted dried output
  - Basis: purchased drying energy per 1 kg accepted dried output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dried raw whole cloves (`accepted_dried_cloves`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Cloves (whole stems), raw `53a5a137-db87-42e1-a85d-4b187eb5281a`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Net accepted dried output equals 1 kg when dried hand-off is selected; record final moisture and method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted farm-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- Range: Reference-output normalization check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference flow
  - Basis: accepted dried output when dried hand-off is selected
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

###### Drying rejects (`drying_rejects`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Mouldy, fermented, scorched, broken, or otherwise rejected buds
- Flow property / unit: Mass / kg
- Amount rule: Weigh by recovery, composting, disposal, or other destination; no reject returns to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh buds entering drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- Range: Drying-reject mass-balance range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg fresh buds entering drying
  - Basis: drying rejects per 1 kg fresh input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

###### Water removed during drying (`drying_water_loss`)

This flow crosses the stated process boundary and is quantified using the amount rule below.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: Fresh input minus dried output, rejects, and other measured outputs, cross-checked against input/output moisture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- Range: Source-supported drying water-loss screen
  - Range role: Typical range (`typical_range`)
  - Lower: 1.5
  - Upper: 2.5
  - Unit: kg/kg accepted dried output
  - Basis: water and associated mass loss per 1 kg accepted dried output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `kau-clove-harvesting`; `unido-spice-postharvest-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_measured` | all nodes | Subdivide and measure route, batch, grade, residue, and destination states before allocation. Accepted output excludes rejects, losses, detached stems, and downgraded material. | `iso-14044-2006` |
| `allocation_perennial_life` | establishment and long-lived assets | Attribute establishment, immature-year, replacement, and termination burdens once across actual accepted output during the declared service/productive life; do not repeat them in annual management. | `fao-ecocrop-clove`; `kau-clove-practices-2016` |
| `allocation_mixed_crop` | mixed stands and shared infrastructure | Prefer measured use, area-time, irrigation volume, operating time, or another causal driver. If causality is unavailable and products have economic functions, use documented economic allocation with sensitivity. | `iso-14044-2006`; `kau-clove-practices-2016` |
| `allocation_batches_routes` | harvest and drying | Link inputs, outputs, cleaning/changeover, and shared-run services to batches or periods; weight route strata by accepted output and count each shared burden once. | `iso-14044-2006` |
| `allocation_rejects` | stems, residues, downgraded and rejected material | Retain burdens with the producing node until documented recovery or product function begins. Separately sold outputs trigger subdivision or allocation; wastes do not. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_assets` | `stand_establishment` | planting, immature management, replacement, termination, shared assets | invoice, stand log, asset register | dates; planting identity/mass/count; density; site inputs; replacements; removals; materials; service life; consuming crops/nodes/periods; driver | Reconcile invoices, field logs, and asset register to cohorts | kg, count, ha, year | each event and annual review | establishment through termination/cut-off | each cohort and asset | Divide causal share by accepted output over same service period | invoices, georeferenced register, dated logs, maintenance record |
| `cp_nutrient_ledger` | `stand_establishment`; `annual_tree_management` | all mineral/organic fertilizers and nutrient amendments | invoice, application log, certificate | product; mass; N/P2O5/K2O/other nutrients; form; moisture; date; area/trees; phase | Collect components separately; aggregate only to one process card | kg product, kg nutrient, fraction | each application | every establishment and productive year | each stand/block | Sum product mass; calculate nutrient mass by component; resolve actual products to UUIDs | invoice, label, lab result, scale, application log |
| `cp_water_records` | `stand_establishment` | supplemental water | meter/runtime log | source; volume; reading; runtime; pump; stand; date | Meter or validated discharge × runtime | m3 | each event | establishment and immature years | each source/stand | Sum by phase and normalize after lifetime attribution | calibration, pump curve, dated log |
| `cp_annual_management_inputs` | `annual_tree_management` | water and crop protection | meter, invoice, stock/application log | water volume; product and active ingredient; quantity; treated area; date; leftovers | Collect water and each product independently | m3, kg, L | each event | full year | each block | Retain concrete exchanges; normalize to harvested clusters | calibration, invoices, labels, stock reconciliation |
| `cp_energy_records` | `annual_tree_management`; `harvest_grade` | field and harvest energy | receipt, meter, runtime, contractor log | carrier; original quantity; conversion; equipment; runtime; node; batch/period; shared driver | Meter or reconcile purchases and stock | MJ, kWh, kg, L, h | each operation/month | full year and all harvests | each carrier/node | Convert while preserving carrier identity; allocate shared use once | calibration, receipts, machine logs |
| `cp_harvest_grade_records` | `annual_tree_management`; `harvest_grade` | clusters, buds, stems, grades, losses and rejects | lot mass-balance sheet | stand; date; maturity; batch; cluster input; bud/stem condition; accepted fresh or drying input; downgraded/reject states and destinations; moisture | Weigh and inspect every state in the same lot | kg, moisture fraction | each lot | all harvests in year | each block/station | Input = accepted + downgraded + all residues ± documented difference; one accepted hand-off route | calibrated scales, inspection, moisture test, destination receipt |
| `cp_residue_records` | `annual_tree_management` | field biomass | weighing/sampling and destination log | residue type; wet/dry mass; moisture; origin; destination; recovery | Weigh or representative sampling | kg wet/dry | each event/campaign | full year | each stand/destination | Normalize dry matter to harvested clusters; preserve destination rows | scales, sampling plan, moisture and receipts |
| `cp_drying_records` | `conditional_drying` | fresh input, energy, dried output, water loss, rejects | batch sheet, meter, moisture test | input/output/reject mass; input/final moisture and basis; method; dates; duration; carrier; temperature; weather/dryer state | Weigh and moisture-test each batch; meter energy | kg, fraction, MJ, kWh, h, °C | each batch | all dried lots | each dryer/mat/station | Fresh input = dried output + rejects + water/other loss; keep sun/solar/assisted routes separate | scale/meter calibration, moisture method, batch and weather/dryer log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_lifetime_attribution` | perennial phases and assets | Sum cohort/asset burdens assigned by service period and causal share / accepted output over that period | events; service years; driver; annual output | burden per kg accepted product | `fao-ecocrop-clove`; `iso-14044-2006` |
| `calc_nutrients` | consolidated nutrient cards | Component nutrient mass = wet product mass × dry-matter fraction × declared nutrient fraction; preserve components and sum product mass only for the card | mass; moisture; composition | kg product and nutrient by form | `kau-clove-practices-2016` |
| `calc_soil_n2o` | managed-soil N2O | Apply selected IPCC tier to synthetic/organic/residue N, volatilization, and leaching; convert N2O-N × 44/28 | nutrient ledger; residue N; selected factors | kg N2O per kg clusters | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest/grading/drying | Same-batch input = product outputs + wastes + elementary loss ± documented difference; accepted output excludes unresolved material | masses and moisture | reconciliation and normalized flows | `mass-balance-identity` |
| `calc_route_weighting` | route strata | Sum(route amount × accepted route output) / total accepted output after calculating each route separately | route inventories and outputs | weighted inventory | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Confirm species, unopened maturity, whole state, stem condition, grade, fresh/dried state, moisture basis, and farm gate for every lot. | specification, inspection/photo, moisture test, ticket |
| `dq_periods` | perennial system | Cover establishment, immature/productive years, replacements, and termination or disclose censored phases and lifetime sensitivity. | cohort, multi-year yield/input, asset records |
| `dq_completeness` | harvest/grading/drying | Account for at least 95% of same-batch input/output mass or explain and correct the gap. | mass-balance and calibration records |
| `dq_route` | alternatives | Keep sole/mixed, rainfed/irrigated, and fresh/sun/assisted-dried records separate until output weighting. | stratified records and worksheet |
| `dq_temporal` | foreground | Cover a complete year and all harvests; use at least three representative productive years when alternate bearing is material, or disclose limitation. | dated input, yield, and lot records |
| `dq_fertilizer` | nutrient supply | Retain each actual product and composition although each process exposes one consolidated nutrient card; resolve every final exchange to a verified UUID. | ledger, label, invoice, lab certificate, resolution record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require exact flow/property/unit-group UUIDs, 1 kg, and every qualifier; fresh and dried states cannot be silently combined. | `icar-iisr-clove`; `kau-clove-harvesting` |
| `validate_period_attribution` | perennial life/shared assets | Require phase, period, replacement, termination, consuming-node, and attribution records; reject double attribution across establishment, annual management, mixed crops, and assets. | `fao-ecocrop-clove`; `iso-14044-2006` |
| `validate_route_delta` | production/drying alternatives | Require parent activity, changed topology/inventory/calculation/data/validation fields, mutually exclusive lot route, and evidence for each stratum. | `kau-clove-practices-2016`; `unido-spice-postharvest-2015` |
| `validate_batch_reconciliation` | harvest through drying | Require batch/period identifiers, input-output and cleaning/changeover linkage when present, mass reconciliation, and no duplicate shared-run burden. | `mass-balance-identity` |
| `validate_reject_routes` | grading/drying | Every accepted, downgraded, rejected, residue, recovery, and disposal state requires mass and hand-off; reject unresolved material in accepted output or undocumented rework. | `kau-clove-harvesting`; `unido-spice-postharvest-2015` |
| `validate_nutrient_cardinality` | nutrient inputs | Each process has at most one nutrient-supply Product-input card, bound only to `flow-set.agricultural-nutrient-supply@0.3.0` without group; actual products remain individually collected and resolved. | `kau-clove-practices-2016` |
| `validate_drying_condition` | drying | If inactive, drying inputs and dried reference output are absent/zero. If active, require method, energy, fresh/dried mass, moisture, rejects, duration, and stabilized hand-off; count output once. | `kau-clove-harvesting`; `unido-spice-postharvest-2015` |
| `validate_ranges` | all quantitative cards | Require exactly one Range per quantitative card; lower ≤ upper, basis/unit/evidence complete, external bounds source-supported, and EN/ZH/structured aligned. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for accepted whole raw cloves at farm gate |
| downstream_use | Reviewed secondary or background datasets for products using farm-gate whole cloves after methodology, identity, route, and quality review |
| allowed_use | Farm-gate LCA of declared fresh or farm-dried whole raw cloves; output-weighted aggregation of evidenced strata |
| excluded_use | Oil, oleoresin, detached stems, ground spice, blends, manufactured products, retail packs, or fresh-to-dried conversion without moisture and route records |
| required_metadata | Geography; planting stock; crop system; stand age/density; establishment/life treatment; reporting years; irrigation; maturity; grade; stem condition; fresh/dried state; moisture basis; drying route; all grade, reject, residue, and recovery destinations |
| required_quality_disclosure | Perennial-phase coverage; data age; measured/estimated shares; route weights; mass-balance closure; nutrient coverage; shared-asset allocation; IPCC tier/factors; unresolved upstream identities; uncertainty/sensitivity |
| update_trigger | Change in identity, productive-life assumption, crop/input regime, harvest/grading, drying, moisture specification, allocation, emission method, or material data refresh |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `icar-iisr-clove` | official_guidance | ICAR-IISR, “Clove – Syzygium aromaticum”, https://spices.res.in/products/spices/clove.html | Identity, perennial growth, pre-opening harvest, downstream oil distinction |
| `fao-ecocrop-clove` | dataset | FAO Ecocrop crop 2462, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=2462 | Perennial phases, 60–100 year economic life, 1–12 kg/tree/year yield, route context |
| `kau-clove-practices-2016` | official_guidance | Kerala Agricultural University, *Package of Practices Recommendations: Crops 2016*, clove section, https://www.celkau.in/library/pop2016.pdf | Establishment, mixed cropping, irrigation, nutrients, harvest and drying |
| `kau-clove-harvesting` | extension_guidance | Kerala Agricultural University, “Clove: Harvesting”, https://celkau.in/crops/spices/clove/harvesting.php | Harvest maturity, bud/stem separation, sorting, immediate drying, 4–5 days and about two-thirds weight loss |
| `tnau-clove-practices-2013` | official_guidance | Tamil Nadu Agricultural University, *Crop Production Guide: Horticulture Crops 2013*, clove section, https://agritech.tnau.ac.in/ta/pdf/2013/cpg_horti_2013.pdf | Establishment/productive-tree nutrient guidance, harvest and yield context |
| `tnau-clove-practices-web` | extension_guidance | TNAU Agritech Portal, “Horticulture: Spice Crops: Clove”, https://agritech.tnau.ac.in/horticulture/horti_spice%20crops_clove.html | Supplemental irrigation and productive-tree management |
| `unido-spice-postharvest-2015` | handbook | UNIDO/FAO, *Herbs, Spices and Essential Oils: Post-harvest Operations in Developing Countries*, https://downloads.unido.org/ot/47/88/4788781/20001-_23603.PDF | Clove drying, turning, mould prevention, 4–6 days, about two-thirds weight loss, rejects/cleaning |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O method |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | Functional-unit normalization, subdivision and allocation hierarchy |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity for a bounded process batch | Harvest/grading/drying reconciliation and QA ranges |
