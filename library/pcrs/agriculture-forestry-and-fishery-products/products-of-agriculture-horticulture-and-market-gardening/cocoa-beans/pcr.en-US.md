---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cocoa-beans
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.zh-CN.md
---

# Cocoa beans

## 1. Scope and Applicability

This PCR guides foreground data-package construction for cultivated cocoa beans from managed cacao production through pod harvest and, when declared, pod breaking, wet-bean extraction, fermentation, drying, cleaning, grading and storage. It distinguishes wet cocoa beans in pulp, fermented wet beans, and fermented, dried and graded beans; these states must not be collapsed.

The exact platform reference identity is `Cocoa beans` with `Production mix, at farm gate` and `Fresh, unprocessed produce`. This candidate therefore declares fresh, unprocessed wet cocoa beans at the farm gate as the reference state. Fermented, dried or graded beans are route-specific downstream states and must not reuse the reference UUID as if their boundary metadata were identical. An extended post-harvest result must declare its gate and retain a lot-level mass and moisture conversion from the farm-gate reference state.

The scope applies to cultivated *Theobroma cacao* under smallholder, estate, cooperative or aggregated farm management when geography, cultivar group, production system, crop year and gate are disclosed. It covers attributable perennial establishment and productive phases, management inputs, field emissions, mature-pod harvest, pod opening, wet-bean extraction, fermentation, drying, cleaning, grading, storage, quality controls, residues, rejects and documented intended co-products. Wild collection, cocoa paste, cocoa liquor, cocoa butter, cocoa powder, chocolate, prepared foods, consumer products, retail packaging and post-gate distribution are excluded. Pod husk, pulp, sweatings, shell, dust and rejected beans are not automatically products; they remain residues or wastes unless a separate intended output and hand-off are documented.

No n.e.c. or “other” product scope is selected. The classification reference is CPC 3.0 `01640`, Cocoa beans.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cocoa-beans` |
| classification_refs | CPC 3.0 `01640`, Cocoa beans |
| covered_products | cultivated cocoa beans represented at the declared fresh farm-gate reference state, with an explicitly declared post-harvest route when fermented, dried or graded output is reported |
| excluded_products | wild-collected cocoa; cocoa paste, liquor, butter, powder, chocolate and prepared cocoa foods; cocoa pod husk, pulp, sweatings, shells, dust and rejects without an intended product hand-off; retail and consumer products |
| representative_product | fresh, unprocessed wet cocoa beans in pulp at the declared farm gate; fermented, dried and graded beans are separately identified route outputs |
| production_route | managed perennial cacao production, mature pod harvest, pod breaking and wet-bean extraction, fermentation, drying and stabilization, cleaning, grading and storage |
| market_state | fresh farm-gate cocoa-bean reference state, or separately declared fermented/dried/graded bean hand-off when the post-harvest extension is included |

The product category identity follows the platform `Cocoa beans` row and does not imply identity with cocoa waste or cocoa paste. Route-specific flow cards may remain unmapped or parameterized until a distinct identity is confirmed; the reference UUID must not be copied into a changed material state.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | fresh, unprocessed wet cocoa beans in pulp at the declared farm gate |
| How much | 1 kg |
| How well | *Theobroma cacao* genotype or cultivar group, geography, production system, crop year, wet-bean moisture basis, pulp inclusion, quality declaration and farm-gate hand-off |
| How long or cycle | one declared crop year and harvest season; perennial establishment, replacement and termination phases indexed and annualized to represented production years |
| reference_flow_link | exact platform product-flow object below; post-harvest outputs are linked through a declared lot-level mass and moisture balance |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cocoa beans `3c54da37-f1ab-4b4c-8363-5c32b638005c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or genotype group; geography; farm, block or supplier scope; production system; crop year and harvest season; wet-bean or pod moisture basis; pulp inclusion; declared farm-gate condition; post-harvest extension flag; fermentation method and duration when included; drying method and final moisture when included; quality grade; residue, reject and intended co-product destination |

The platform metadata is `Production mix, at farm gate` and `Fresh, unprocessed produce`. The reference amount is therefore not a kilogram of dried fermented beans. A post-harvest result may be normalized to 1 kg of the wet reference through measured pod-to-wet-bean and wet-bean-to-dried-bean balances, but its output card remains a distinct fermented/dried state. Tare, packaging, foreign matter, pod husk, pulp, sweatings, shells, dust, rejects and drying water loss are recorded separately.

| Attribute | Candidate screening reference | Evidence |
| --- | --- | --- |
| Wet-bean moisture | approximately 55–60% wet basis before fermentation; replace with lot measurement | `icco-cocoa-harvesting-post-harvest`; `icco-cocoa-processing` |
| Fermentation duration | approximately 4–7 days for the declared batch; method and cultivar can change duration | `fao-cocoa-ota-code`; `icco-cocoa-harvesting-post-harvest` |
| Dried-bean moisture | approximately 6–8% wet basis for storage screening; use measured lot result | `icco-cocoa-processing`; `icco-cocoa-quality-requirements` |
| Sun-drying duration | approximately 5–10 days when sun-dried; replace with actual weather and batch records | `fao-cocoa-production-guide`; `icco-global-cocoa-farming-systems` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | all cocoa states | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record pods, wet beans in pulp, fermented wet beans, dried beans, graded beans, husk, pulp, sweatings, shells, rejects and losses on an as-received or dry-matter basis. Never mix wet and dry bases in one balance. |
| `measurement_02` | reference and post-harvest conversion | mass and moisture | kg; percent wet basis | Measure moisture for every conversion-critical lot. Use dry-matter conservation only when sampling basis and moisture method are documented. |
| `measurement_03` | perennial phases | area-time and crop-year identity | ha·year; crop year; phase | Link establishment, immature, productive, replacement and termination phases to the same block and represented crop years before annualizing. |
| `measurement_04` | fermentation | batch and time | batch id; day; kg | Identify method, start/end, turning, batch mass, pulp drainage and drying hand-off. Do not add fresh beans to an active batch without a new batch link. |
| `measurement_05` | drying and stabilization | mass, moisture, temperature and energy | kg; percent; °C; kWh, MJ, L or kg fuel | Record wet input, dry output, dryer/weather, operating time, carrier, final moisture and smoke or contamination controls. |
| `measurement_06` | cleaning, grading and storage | mass and lot identity | kg; lot id; day | Keep accepted grade, downgraded grade, rejected lot, shell, dust, foreign material, storage loss and final hand-off separate. |
| `measurement_07` | nutrients, crop protection and emissions | product and nutrient basis | kg product; kg nutrient; kg substance | Keep formulated product, nutrient or active-substance mass and emission-method inputs distinct; one method owns each pathway. |
| `measurement_08` | services and utilities | carrier-specific property | kWh, MJ, L, kg, m3 | Preserve carrier, equipment, run or batch and original unit. Convert only with a documented factor and allocate shared services once. |

## 5. System Boundary

The default foreground boundary starts with the managed cacao stand and declared crop year or perennial phase. It includes attributable establishment and replacement, soil and nutrient management, crop protection, irrigation, field energy and direct field emissions, mature-pod harvest, and the hand-off of fresh pods or wet beans. When `postharvest_extension` is true, it also includes pod breaking, wet-bean extraction, fermentation, drying, cleaning, grading, storage and the declared post-harvest gate. Upstream production of planting material, fertilizer, crop-protection products, energy, water, treatment services and packaging uses compatible upstream datasets when they cross the foreground boundary.

The reference gate is the platform's fresh, unprocessed farm-gate state. Fermented, dried and graded beans are downstream route states within the extended process map, not alternative meanings of the same reference UUID. The data package must state whether the farm-gate reference stops at wet-bean hand-off or whether a post-harvest extension is reported. Roasting, grinding, alkalization, pressing, cocoa liquor, cocoa butter, cocoa powder, chocolate, prepared foods, retail and consumer use are downstream and excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | managed cacao stand at the declared perennial phase and crop-year start, with planting material and purchased management inputs crossing the foreground boundary |
| starting_condition_role | perennial managed biological production condition |
| product_classification_scope | CPC 3.0 `01640`, Cocoa beans; exact platform reference identity is fresh, unprocessed cocoa beans at farm gate |
| recursive_input_rule | purchased cocoa beans entering post-harvest, blending or storage are separately identified lots and are not recursively traced through this PCR; cocoa paste, cocoa waste and downstream cocoa products are outside this category |
| upstream_dataset_requirement | reviewed upstream datasets for planting material, fertilizers, crop protection, water, energy, treatment, packaging and transport services when they cross the declared boundary |
| disclosure | block or supplier scope, crop year, cultivar group, production system, wet reference condition, extension flag, lot moisture, fermentation/drying records, quality grade, gate, storage, intended outputs, residues, rejects, wastewater and allocation decision |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | managed production | Include the managed cacao stand, crop-year management, actual inputs, field emissions, harvest and production-to-harvest hand-off. Include establishment, replacement and termination only when attributable to represented years. | `fao-cocoa-production-guide`; `icco-global-cocoa-farming-systems`; `iso-14044-2006` |
| `boundary_02` | reference gate | Treat `Cocoa beans` with `Production mix, at farm gate` and `Fresh, unprocessed produce` as the declared reference identity. Do not use the UUID for fermented, dried or graded bean states without a separate identity decision. | `iso-14044-2006`; `mass-balance-identity` |
| `boundary_03` | pod breaking and fermentation | When extended, identify harvested pods, wet beans in pulp, pod husk, pulp/sweatings, batch, by-products, unreacted or spoiled material and drying hand-off. | `icco-cocoa-harvesting-post-harvest`; `fao-cocoa-ota-code` |
| `boundary_04` | drying, grading and storage | Include drying/stabilization, cleaning, grade separation and pre-gate storage only when they cross the declared extension. Record energy, moisture, storage time, contamination controls and losses. | `icco-cocoa-processing`; `icco-cocoa-quality-requirements` |
| `boundary_05` | upstream inputs | Treat purchased inputs, utilities, packaging, treatment and transport services as separately identified upstream inputs. Do not recurse into another cocoa PCR or silently use cocoa waste or paste as a bean input. | `iso-14044-2006` |
| `boundary_06` | losses and rejects | Keep field losses, damaged pods, unextracted beans, spoiled or unfermented beans, drying losses, mouldy beans, dust, shells, storage losses and rejected lots in the foreground until a documented recovery, co-product, treatment or disposal hand-off exists. | `fao-cocoa-ota-code`; `icco-cocoa-quality-requirements`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cocoa_managed_production` | Managed cacao production | required | cultivated cacao route | managed biological production | per 1 kg wet cocoa beans at farm-gate reference |
| `cocoa_pod_harvest` | Mature cocoa-pod harvest and collection | required | pods are removed and transferred to pod opening | harvest and collected-output hand-off | per harvested pod lot and wet reference |
| `cocoa_pod_breaking_extraction` | Pod breaking and wet-bean extraction | conditional | pod opening and separation are within the declared route | primary conditioning | per pod lot and wet reference |
| `cocoa_fermentation` | Cocoa-bean fermentation | conditional | fermentation precedes drying or declared dry-bean hand-off | biochemical reaction and treatment | per fermentation batch |
| `cocoa_drying_stabilization` | Fermented-bean drying and stabilization | conditional | sun or artificial drying precedes post-harvest gate | preservation and stabilization | per drying batch |
| `cocoa_cleaning_grading` | Cleaning, grading and reject routing | conditional | cleaning or grade separation precedes post-harvest gate | grading, sorting and conditioning | per grading lot |
| `cocoa_storage_gate` | Storage and declared gate hand-off | conditional | pre-gate storage or warehouse handling is included | stabilization and hand-off | per kg and storage day |

The mode is batch-based. Every crop year, harvest lot, pod-opening run, fermentation batch, drying batch, grading lot and storage lot receives an identifier. Sequential states are not co-products: wet, fermented wet, dried and graded beans are linked by hand-offs. Shared equipment, cleaning and changeover burdens attach to the run once.

### Process: Managed cacao production (`cocoa_managed_production`)

#### Inputs

##### Product flows

###### Cocoa planting material and replacement plants (`cocoa_planting_material`)

Record seedlings, grafted plants, cuttings and replacements by block and phase; annualize only the attributable share.

- Selected flow: Cocoa planting material [unmapped]
- Flow property / unit: Count or mass / plant, item or kg
- Amount rule: measured purchased, planted, replaced and surviving quantity by block and phase
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_perennial_phase_records`
- Sources: `fao-cocoa-production-guide`; `iso-14044-2006`
- Range: Provisional planting-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg planting material/kg wet reference
  - Basis: annualized establishment and replacement; replace with block records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`cocoa_managed_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_nutrient_records`
- Sources: `fao-cocoa-production-guide`; `ipcc-2019-refinement-afolu`
- Range: Provisional nutrient-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 15
  - Unit: kg product/kg wet reference
  - Basis: broad first-pass perennial-crop interval; replace with records and nutrient balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`cocoa_crop_protection`)

Record named products or active substances by date, block, target and application method.

- Selected flow: Named crop-protection product or active substance [unmapped]
- Flow property / unit: Mass or volume / kg product or L product
- Amount rule: measured application by product and active substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_crop_protection_records`
- Sources: `fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`
- Range: Provisional crop-protection screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg product/kg wet reference
  - Basis: broad first-pass interval; replace with named-product records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`cocoa_irrigation_water`)

Record delivered irrigation separately from rainfall and source withdrawal. A rainfed route records a justified zero.

- Selected flow: Irrigation water supply [parameterized]
- Flow property / unit: Volume / m3
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or evidenced volume by source, block and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_water_records`
- Sources: `fao-cocoa-production-guide`
- Range: Provisional irrigation screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/t wet reference
  - Basis: broad delivered-irrigation interval; replace with meters and water balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field fuel and electricity (`cocoa_field_energy`)

Record pumping, machinery, spraying, pruning and other included operations by block and crop year.

- Selected flow: Field fuel or electricity supply [parameterized]
- Flow property / unit: Energy or carrier mass / MJ, kWh, L or kg
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier use by operation and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_energy_records`
- Sources: `fao-cocoa-production-guide`; `icco-global-cocoa-farming-systems`
- Range: Provisional field-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg wet reference
  - Basis: broad first-pass interval; replace with operation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Cacao land occupation (`cocoa_land_occupation`)

Record block area, production phase, shade/intercrop condition and crop year. Land transformation is separate.

- Selected flow: Agricultural land occupation for cacao [unmapped]
- Flow property / unit: Area-time / ha·year
- Amount rule: measured block area and annualized phase divided by wet reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_perennial_phase_records`
- Sources: `fao-cocoa-production-guide`; `iso-14044-2006`
- Range: Provisional land-occupation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.00005
  - Upper: 0.01
  - Unit: ha·year/kg wet reference
  - Basis: broad perennial-crop interval; replace with block area and yield records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Elementary flows

###### Managed-soil and crop-residue emissions (`cocoa_field_emissions`)

Record calculated or measured emissions by substance, receiving medium, nutrient/residue source and crop year; one method owns each pathway.

- Selected flow: Managed-soil and crop-residue elementary flows [unmapped]
- Flow property / unit: Mass / kg substance
- Amount rule: selected method applied to nutrient, residue, soil and climate records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_emission_records`
- Sources: `ipcc-2019-refinement-afolu`
- Range: Provisional managed-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg substance/kg wet reference
  - Basis: broad aggregate interval; replace with substance-specific calculations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Mature cocoa-pod harvest and collection (`cocoa_pod_harvest`)

#### Inputs

##### Product flows

###### Managed cacao production context (`cocoa_stand_output_context`)

Link the lot to its producing block, crop year and cultivar; this is a context link, not an additional product mass.

- Selected flow: Managed cacao production output context [unmapped]
- Flow property / unit: Mass / kg or lot identity
- Amount rule: link harvested pod lot to block and crop year; do not add a second product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested pod lot and per 1 kg wet reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_harvest_lot_records`
- Sources: `fao-cocoa-production-guide`
- Range: Provisional pod-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 4
  - Unit: kg fresh pods/kg wet reference
  - Basis: broad pod-to-wet-bean screen; replace with lot mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvested fresh cocoa pods (`cocoa_harvested_pods`)

Record mature pods collected and handed to pod opening. Pods are not the wet-bean reference flow.

- Selected flow: Fresh cocoa pods [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed or documented harvested pod mass by lot and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_harvest_lot_records`
- Sources: `fao-cocoa-production-guide`; `icco-cocoa-harvesting-post-harvest`
- Range: Harvested-pod yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 4
  - Unit: kg fresh pods/kg wet reference
  - Basis: broad pod-to-wet-bean interval; use the lot-specific balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unharvested, damaged or field-dropped pods (`cocoa_field_pod_losses`)

Record pods left in the field, damaged before collection or discarded at harvest and declare soil return, decay, recovery, treatment or waste fate.

- Selected flow: Cocoa pod harvest loss [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: plot count or mass estimate reconciled with mature-pod observations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_harvest_lot_records`
- Sources: `fao-cocoa-production-guide`; `mass-balance-identity`
- Range: Field-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg fresh pod loss/kg wet reference
  - Basis: broad harvest-loss interval; replace with observations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Pod breaking and wet-bean extraction (`cocoa_pod_breaking_extraction`)

#### Inputs

##### Product flows

###### Harvested fresh cocoa pods (`cocoa_pod_extraction_input`)

Use the exact harvested pod lot; do not substitute wet beans, dried beans or cocoa waste.

- Selected flow: Fresh cocoa pods [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: received pod mass by lot with measured or documented moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_pod_extraction_records`
- Sources: `icco-cocoa-harvesting-post-harvest`; `fao-cocoa-production-guide`
- Range: Pod-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 4
  - Unit: kg pods/kg wet reference
  - Basis: same-lot pod-to-wet-bean balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pod-opening energy or service (`cocoa_pod_opening_energy`)

Record manual-tool, motorized or contracted pod-opening service and energy carrier where it crosses the boundary.

- Selected flow: Pod-opening energy or service [parameterized]
- Flow property / unit: Energy or service / MJ, kWh, L or kg
- Amount rule: measured energy or documented service activity by run
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_energy_records`
- Sources: `icco-cocoa-harvesting-post-harvest`
- Range: Pod-opening energy screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: MJ/kg wet reference
  - Basis: broad manual or mechanized interval; replace with run records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Wet cocoa beans in pulp (`cocoa_wet_beans_in_pulp`)

This state is handed to fermentation or direct drying. It is not the reference UUID unless explicitly declared as the platform's fresh farm-gate state.

- Selected flow: Wet cocoa beans in pulp [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed wet-bean and pulp mass by extraction lot with moisture and pulp inclusion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_pod_extraction_records`
- Sources: `icco-cocoa-harvesting-post-harvest`; `mass-balance-identity`
- Range: Wet-bean extraction yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 0.4
  - Unit: kg wet beans in pulp/kg fresh pods
  - Basis: broad pod-opening yield interval; replace with pod-lot balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cocoa pod husk and placenta residue (`cocoa_pod_husk_residue`)

Record pod husk, placenta and attached non-bean material. It becomes an intended co-product only with a named destination, quantity, quality and hand-off.

- Selected flow: Cocoa pod husk and placenta residue [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: measured residual mass or reconciled difference from pod and wet-bean inputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_residue_destination_records`
- Sources: `fao-cocoa-production-guide`; `mass-balance-identity`
- Range: Pod-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.6
  - Upper: 0.95
  - Unit: kg residue/kg fresh pods
  - Basis: broad residual fraction; replace with measured pod-opening records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unextracted or damaged wet-bean rejects (`cocoa_extraction_rejects`)

Identify broken, mouldy, germinated, contaminated or otherwise excluded beans and declare recovery, downgrade, rework, disposal or soil-return routing.

- Selected flow: Wet-bean extraction reject [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed or estimated reject mass by lot and defect
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_residue_destination_records`
- Sources: `icco-cocoa-quality-requirements`; `fao-cocoa-ota-code`
- Range: Extraction-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg reject/kg wet-bean input
  - Basis: broad first-pass reject interval; replace with inspection records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cocoa-bean fermentation (`cocoa_fermentation`)

#### Inputs

##### Product flows

###### Wet cocoa beans in pulp (`cocoa_fermentation_input`)

Record the bean-in-pulp batch entering a named heap, box, basket or equivalent. Each batch has one start state, declared turning/mixing events and one downstream hand-off.

- Selected flow: Wet cocoa beans in pulp [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed batch input with moisture, pulp inclusion and lot id
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_fermentation_batch_records`
- Sources: `icco-cocoa-harvesting-post-harvest`; `fao-cocoa-ota-code`
- Range: Fermentation-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1.1
  - Unit: kg wet beans/kg wet reference
  - Basis: normalized batch input; replace with actual lot record
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fermentation covers, turning and service inputs (`cocoa_fermentation_services`)

Record covers, boxes, turning service and water, fuel or electricity used for the batch. Reusable equipment is annualized through period rules rather than duplicated per kg.

- Selected flow: Fermentation service or material input [parameterized]
- Flow property / unit: Mass, energy or service / kg, MJ, kWh or service unit
- Amount rule: measured or documented service by fermentation batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_fermentation_batch_records`
- Sources: `fao-cocoa-ota-code`; `icco-cocoa-quality-requirements`
- Range: Fermentation-service screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg or MJ service input/kg wet reference
  - Basis: broad first-pass service interval; replace with batch and asset records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Fermented wet cocoa beans (`cocoa_fermented_wet_beans`)

Record the changed composition state and hand-off to drying without inventing a pathway or yield beyond the batch record.

- Selected flow: Fermented wet cocoa beans [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: batch mass after fermentation and drainage with end moisture and quality observations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_fermentation_batch_records`
- Sources: `fao-cocoa-ota-code`; `icco-cocoa-harvesting-post-harvest`
- Range: Fermented-wet output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.7
  - Upper: 1
  - Unit: kg fermented wet beans/kg wet input
  - Basis: broad mass-retention screen before drying; replace with batch balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Fermentation pulp, sweatings and drainage (`cocoa_fermentation_sweatings`)

Record drained pulp and liquid separately when measured. If recovered as a deliberate product or feed input, document intended hand-off; otherwise route to treatment, composting, soil return or disposal.

- Selected flow: Cocoa pulp, sweatings or fermentation drainage [unmapped]
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured drainage or mass-balance estimate by batch and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_residue_destination_records`
- Sources: `icco-cocoa-harvesting-post-harvest`; `fao-cocoa-ota-code`
- Range: Pulp and sweatings screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 0.6
  - Unit: kg drainage/kg wet-bean input
  - Basis: broad drainage interval; replace with batch and destination records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spoiled, unfermented or off-spec fermentation rejects (`cocoa_fermentation_rejects`)

Identify mouldy, germinated, black, contaminated, insufficiently fermented or otherwise off-spec material and declare recovery, downgrade, rework, disposal or soil-return routing.

- Selected flow: Fermentation reject or off-spec bean material [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: lot inspection and weighed rejected mass by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_quality_records`
- Sources: `icco-cocoa-quality-requirements`; `fao-cocoa-ota-code`
- Range: Fermentation-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg reject/kg wet-bean input
  - Basis: broad off-spec interval; replace with inspection records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fermentation-related emissions (`cocoa_fermentation_emissions`)

Record only measured or selected-method emissions attributable to the fermentation boundary; do not use a generic cocoa flow as a substance proxy.

- Selected flow: Fermentation-related elementary emissions [unmapped]
- Flow property / unit: Mass / kg substance
- Amount rule: selected method or measurement from batch inputs, drainage and operation records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_emission_records`
- Sources: `fao-cocoa-ota-code`; `mass-balance-identity`
- Range: Fermentation-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg substance/kg wet reference
  - Basis: broad aggregate interval; replace with substance-specific calculation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Fermented-bean drying and stabilization (`cocoa_drying_stabilization`)

#### Inputs

##### Product flows

###### Fermented wet cocoa beans (`cocoa_drying_input`)

Use the fermented batch hand-off, not the fresh reference identity. Record starting moisture and sun, artificial or combined drying route.

- Selected flow: Fermented wet cocoa beans [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed drying input with starting moisture and fermentation-batch link
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_drying_batch_records`
- Sources: `icco-cocoa-processing`; `fao-cocoa-ota-code`
- Range: Drying-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.7
  - Upper: 1
  - Unit: kg fermented wet beans/kg wet reference
  - Basis: same-lot fermentation-to-drying hand-off; replace with batch data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying fuel and electricity (`cocoa_drying_energy`)

Record fuel, electricity or dryer service by batch. Sun drying still records platform, weather and physical service even when direct fuel is zero.

- Selected flow: Drying fuel, electricity or dryer service [parameterized]
- Flow property / unit: Energy or carrier mass / MJ, kWh, L or kg
- Amount rule: measured carrier use or documented service by drying batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dried fermented beans and per 1 kg wet reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_energy_records`
- Sources: `fao-cocoa-production-guide`; `icco-global-cocoa-farming-systems`
- Range: Drying-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8
  - Unit: MJ/kg dried output
  - Basis: broad sun or artificial drying interval; replace with dryer and batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Fermented, dried cocoa beans (`cocoa_dried_fermented_beans`)

This is a distinct route output, not the platform reference flow. Record final moisture, drying technology, temperature/weather and quality status.

- Selected flow: Fermented, dried cocoa beans [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed dried output with measured moisture and lot identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference and per 1 kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_drying_batch_records`
- Sources: `icco-cocoa-processing`; `icco-cocoa-quality-requirements`
- Range: Dried-output yield screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.35
  - Upper: 0.55
  - Unit: kg dried beans/kg fermented wet beans
  - Basis: dry-matter and moisture conversion screen; replace with lot balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `icco-cocoa-processing`
- Range: Final moisture screening range
  - Range role: Typical range (`typical_range`)
  - Lower: 6
  - Upper: 8
  - Unit: percent wet basis
  - Basis: storage screening interval; replace with lot measurement
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `icco-cocoa-processing`; `icco-cocoa-quality-requirements`

##### Waste flows

###### Drying water loss (`cocoa_drying_water_loss`)

Calculate water removed from wet beans; it is not dried-bean product.

- Selected flow: Water loss to air or drying loss [unmapped]
- Flow property / unit: Mass / kg water
- Amount rule: wet-input/dry-matter balance using measured input and output moisture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_drying_batch_records`
- Sources: `mass-balance-identity`; `icco-cocoa-processing`
- Range: Drying-water-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.35
  - Upper: 0.65
  - Unit: kg water/kg fermented wet beans
  - Basis: broad conversion from approximately 55–60% to 6–8% moisture; replace with measured balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `icco-cocoa-processing`

###### Mouldy, contaminated or over-dried bean rejects (`cocoa_drying_rejects`)

Record rejected material and recovery, downgrade, treatment, destruction or soil-return destination. Do not include it in accepted output.

- Selected flow: Drying reject or contaminated bean material [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected mass by batch, defect and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_quality_records`
- Sources: `fao-cocoa-ota-code`; `icco-cocoa-quality-requirements`
- Range: Drying-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg reject/kg dried output
  - Basis: broad quality-loss interval; replace with inspection
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Dryer smoke or combustion emissions (`cocoa_drying_emissions`)

Record combustion emissions only for artificial dryers or included fuel use. Smoke contact is a quality event, not an emission-flow substitute.

- Selected flow: Dryer combustion elementary emissions [unmapped]
- Flow property / unit: Mass / kg substance
- Amount rule: selected fuel-emission method applied to measured carrier use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_emission_records`
- Sources: `icco-cocoa-quality-requirements`; `ipcc-2019-refinement-afolu`
- Range: Dryer-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg substance/kg wet reference
  - Basis: broad fuel-dryer aggregate interval; replace with carrier-specific calculation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cleaning, grading and reject routing (`cocoa_cleaning_grading`)

#### Inputs

##### Product flows

###### Fermented, dried cocoa beans (`cocoa_cleaning_input`)

Record the dried lot entering cleaning and grading. Its identity remains distinct from the fresh farm-gate reference.

- Selected flow: Fermented, dried cocoa beans [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed received lot with moisture, lot and quality observations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference and per 1 kg dried input
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_grade_lot_records`
- Sources: `fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`
- Range: Cleaning-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.35
  - Upper: 0.55
  - Unit: kg dried beans/kg fermented wet input
  - Basis: same-lot wet-to-dry balance; replace with measured input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Cleaning and grading energy or service (`cocoa_cleaning_energy`)

Record screens, fans, conveyors, inspection and other services by lot or campaign.

- Selected flow: Cleaning and grading energy or service [parameterized]
- Flow property / unit: Energy or service / kWh, MJ or service unit
- Amount rule: measured carrier use or documented service by grading lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dried cocoa bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_energy_records`
- Sources: `fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`
- Range: Cleaning-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: MJ/kg dried input
  - Basis: broad first-pass interval; replace with equipment records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted graded fermented cocoa beans (`cocoa_accepted_graded_beans`)

Record each accepted grade and downstream hand-off. An accepted grade is an intended output only when its grade and destination are declared.

- Selected flow: Accepted graded fermented cocoa beans [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted intended output by grade, moisture, defect basis and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference and per 1 kg accepted grade
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_grade_lot_records`
- Sources: `fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`
- Range: Accepted-grade recovery screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1
  - Unit: kg accepted output/kg dried input
  - Basis: broad cleaning and grading recovery interval; replace with lot reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Intended downgraded cocoa-bean product (`cocoa_downgraded_intended_output`)

Use only when an off-grade but saleable bean lot has its own intended product status and hand-off. Otherwise use the reject row.

- Selected flow: Downgraded but saleable cocoa beans [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed intended output downgraded product by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dried cocoa bean input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_grade_lot_records`
- Sources: `icco-cocoa-quality-requirements`
- Range: Downgraded-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg downgraded product/kg dried input
  - Basis: broad saleable off-grade fraction; replace with lot records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cocoa shell, dust and foreign-material residue (`cocoa_shell_dust_residue`)

Record shells, dust, stones, metal, plant matter and other removed material separately. Shell is an intended co-product only with a named destination and hand-off.

- Selected flow: Cocoa shell, dust and foreign-material residue [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed separated residue by grading lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dried cocoa bean input
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_residue_destination_records`
- Sources: `fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`
- Range: Shell and cleaning-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg residue/kg dried input
  - Basis: broad cleaning and shell fraction; replace with lot balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rejected cocoa-bean lot (`cocoa_grading_rejects`)

Identify mouldy, insect-damaged, broken, germinated, black, contaminated or otherwise rejected beans. Rejected material cannot be accepted output without a separate downgrade or recovery hand-off.

- Selected flow: Rejected cocoa beans [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected mass by defect, quality decision and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dried cocoa bean input
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_quality_records`
- Sources: `fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`; `fao-cocoa-ota-code`
- Range: Grading-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg reject/kg dried input
  - Basis: broad first-pass reject interval; replace with grade inspection
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Cleaning dust emissions (`cocoa_cleaning_dust`)

Record dust release or capture losses only when supported by equipment or method evidence; shell or dust residue is not automatically an air emission.

- Selected flow: Cocoa cleaning dust elementary flow [unmapped]
- Flow property / unit: Mass / kg substance
- Amount rule: measured or calculated release after captured residue is accounted for
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dried cocoa bean input
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_emission_records`
- Sources: `mass-balance-identity`; `icco-cocoa-quality-requirements`
- Range: Cleaning-dust screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg substance/kg dried input
  - Basis: broad dust-release interval; replace with capture records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Storage and declared gate hand-off (`cocoa_storage_gate`)

#### Inputs

##### Product flows

###### Accepted graded fermented cocoa beans (`cocoa_storage_input`)

Record storage lot, moisture, grade, packaging state and start date. This is not a second use of the wet farm-gate reference flow.

- Selected flow: Accepted graded fermented cocoa beans [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed storage input by lot and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at farm-gate reference and per 1 kg dry output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_storage_records`
- Sources: `icco-cocoa-processing`; `icco-cocoa-quality-requirements`
- Range: Storage-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 0.55
  - Unit: kg dried beans/kg wet reference
  - Basis: declared wet-to-dry conversion; replace with lot balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Storage packaging and handling service (`cocoa_storage_services`)

Record sacks, liners, pallets, warehouse electricity, fumigation or other included services. Packaging remains separate from bean mass.

- Selected flow: Cocoa storage packaging or service [parameterized]
- Flow property / unit: Mass, energy or service / kg, kWh, MJ or service unit
- Amount rule: measured packaging and storage service by lot and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dried cocoa bean output and storage day
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_storage_records`
- Sources: `icco-cocoa-quality-requirements`
- Range: Storage-service screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg packaging or MJ service/kg dried output
  - Basis: broad first-pass packaging and handling interval; replace with lot records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Declared post-harvest dried-bean gate output (`cocoa_declared_dried_gate_output`)

Use only when the data package declares the extended post-harvest gate. It is a separate route output and must not be labelled as the platform's fresh farm-gate state.

- Selected flow: Fermented, dried and graded cocoa beans at declared post-harvest gate [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed final lot after storage with moisture, grade and loss record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet cocoa beans at platform farm-gate reference and per 1 kg dried gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_storage_records`
- Sources: `icco-cocoa-processing`; `icco-cocoa-quality-requirements`
- Range: Post-harvest gate-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 0.55
  - Unit: kg dried gate output/kg wet reference
  - Basis: measured wet-to-dry balance; replace with lot records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `icco-cocoa-processing`

##### Waste flows

###### Storage loss and quality downgrade (`cocoa_storage_losses`)

Record mould, pests, moisture change, foreign-material removal and other storage events. A downgraded saleable lot uses its intended-output card rather than this waste card.

- Selected flow: Cocoa storage loss or rejected storage material [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: opening mass plus receipts and removed lots minus closing mass, reconciled to inspection and destination records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dried cocoa bean storage input
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoa_storage_records`
- Sources: `icco-cocoa-quality-requirements`; `mass-balance-identity`
- Range: Storage-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg loss/kg dried storage input
  - Basis: broad pre-gate storage-loss interval; replace with warehouse records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

Sequential wet, fermented, dried and graded bean states are not co-products and receive no allocation between states. First subdivide by pod lot, fermentation batch, drying batch and grading lot. Record every intended output hand-off before applying allocation.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | sequential cocoa states | Do not allocate burdens between wet, fermented wet, dried and graded beans; link them by mass and moisture balances. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_02` | pod breaking and fermentation | Treat pod husk, placenta, pulp and sweatings as residues by default. An intended co-product requires a named destination, quantity, quality specification and hand-off. | `icco-cocoa-harvesting-post-harvest`; `fao-cocoa-ota-code` |
| `allocation_03` | intended co-products | Prefer subdivision. If intended outputs remain, use measured mass allocation for comparable material outputs; use an economic sensitivity when functions differ materially and retain price period and denominator. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_04` | rejects and downgrade | Do not allocate rejected beans to accepted cocoa output. A downgraded saleable lot requires its own intended-output hand-off; recovered material retains producing-node burden unless a documented recovery boundary exists. | `icco-cocoa-quality-requirements`; `fao-cocoa-ota-code` |
| `allocation_05` | batches and perennial phases | Attach shared equipment, cleaning, changeover, drying platforms and plantation phase burdens to the generating run, crop year or phase exactly once. | `iso-14044-2006`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cocoa_perennial_phase_records` | `cocoa_managed_production` | planting material, land occupation, perennial phases | block register and planting/removal record | block_id; area; cultivar; phase; tree_count; establishment_date; replacement_date; termination_date; crop_year | reconcile phase events and area to each represented cocoa block | ha; tree; date; kg reference output | annual and event-based | represented perennial phases and crop years | all included cocoa blocks | annualize establishment, replacement and termination by block and represented year | block register; land record; phase review |
| `cp_cocoa_nutrient_records` | `cocoa_managed_production` | nutrient and soil-amendment inputs | invoice, field log and nutrient statement | product; nutrient_content; quantity; date; block_id; purpose; supplier; reporting_basis | reconcile product quantities and nutrient content to each field event | kg product; kg nutrient; ha | each application event | complete represented crop year | all included cocoa blocks | aggregate by product, nutrient, block and crop year without merging reporting bases | invoices; product labels; nutrient statements; field logs |
| `cp_cocoa_crop_protection_records` | `cocoa_managed_production` | crop-protection products | product record and application log | product; active_substance; rate; quantity; date; block_id; target; method; operator | reconcile product identity, active substance and dose to each application | kg or L product; kg active substance; ha | each application | complete represented crop year | all included cocoa blocks | aggregate by product, active substance, block and crop year | product label; application log; operator record |
| `cp_cocoa_water_records` | `cocoa_managed_production` | irrigation, process water, recirculation and wastewater | meter record, water invoice or documented estimate | source; delivered_volume; withdrawal; meter_id; block_id; date; recirculation; discharge; quality | separate irrigation and post-harvest water and reconcile withdrawals to discharge | m3 water; kg pollutant where measured | each event or meter period | complete represented crop year and post-harvest route | included farm and post-harvest equipment | aggregate by use, source, block or process and route; do not merge wastewater with supply | calibrated meter; invoice; water log; discharge record |
| `cp_cocoa_energy_records` | `cocoa_managed_production` and post-harvest route processes | field, pod-opening, drying, grading and storage energy or service | meter, invoice, fuel ticket or service log | carrier; quantity; equipment; operation; run_id; batch_id; original_unit; service_scope | reconcile carrier use or service quantity to the generating run or batch | kWh; MJ; L fuel; service unit | each run, batch or meter period | complete represented crop year and included extension | all included field and post-harvest equipment | aggregate by process and batch; allocate shared services once by documented driver | meter calibration; invoice; fuel ticket; service log |
| `cp_cocoa_emission_records` | `cocoa_managed_production` and post-harvest route processes | managed-soil, residue, fermentation and combustion emissions | emission-model record or measurement record | activity; substance; method; factor_set; factor_version; medium; quantity; uncertainty | calculate or measure each pathway with one declared applicable method | kg substance; kg CO2e; ha; kg activity | each event and calculation period | complete represented crop year and included extension | all included field and post-harvest emission sources | keep pathways separate and retain factor, activity basis and uncertainty | method citation; factor file; measurement report; model version |
| `cp_cocoa_harvest_lot_records` | `cocoa_pod_harvest` | mature pod harvest, field loss and hand-off | harvest lot ticket and field record | block_id; crop_year; maturity; pod_mass; harvest_date; field_loss; receiver; lot_id | reconcile harvested pods, field losses and receiver hand-off for each lot | kg pods; kg loss; date; lot | each harvest lot | complete harvest season | all included cocoa blocks and receivers | sum harvested pods, field losses and hand-offs by block, crop year and lot | lot ticket; field log; scale record; receiver evidence |
| `cp_cocoa_pod_extraction_records` | `cocoa_pod_breaking_extraction` | pod input, wet beans, husk, placenta and rejects | pod-opening run sheet and scale record | run_id; pod_input; wet_bean_output; husk; placenta; reject_mass; equipment; operator; date | close the pod-input mass balance and record every destination per opening run | kg as received; kg wet beans; date; run | each pod-opening run | all included pod-breaking operations | included farm or post-harvest facility | reconcile pod input to wet beans, husk, placenta, rejects and unexplained difference | calibrated scale; run sheet; destination ticket; mass-balance review |
| `cp_cocoa_fermentation_batch_records` | `cocoa_fermentation` | wet-bean input, fermentation operation, drainage and fermented output | fermentation batch log | batch_id; input_mass; method; container; start_date; end_date; turns; temperature; drainage; output_mass; reject_mass | link wet-bean input, batch conditions, drainage, fermented output and rejects | kg wet beans; kg drainage; °C; days; date | each fermentation batch and turn | complete included fermentation route | all included fermentation containers | aggregate by batch and link each output to its input lot without double counting | batch log; temperature record; turning record; drainage ticket; quality check |
| `cp_cocoa_drying_batch_records` | `cocoa_drying_stabilization` | fermented wet input, drying energy, dried output and water loss | drying log and moisture sample record | batch_id; wet_input; method; platform_or_dryer; weather_or_fuel; start_time; end_time; temperature; moisture; output_mass; reject_mass | reconcile wet input, dry output and loss using documented moisture samples | kg wet input; kg dry beans; percent moisture; °C; days; MJ | each drying batch and moisture sample | complete included drying route | all included drying platforms and dryers | calculate wet-to-dry balance per batch and preserve measured moisture basis | drying log; moisture test; fuel or weather record; smoke-control record |
| `cp_cocoa_grade_lot_records` | `cocoa_cleaning_grading` | dried input, accepted grades, downgraded product, shell, dust and rejects | inspection, grading and scale record | lot_id; input_mass; grade; moisture; defects; accepted_mass; downgrade_mass; shell_mass; dust_mass; reject_mass; destination | enumerate every grade and material destination and reconcile the lot mass balance | kg; percent moisture; grade code; date | each grading lot | complete included cleaning and grading route | all included grading equipment and lots | sum accepted grades, intended downgrade, residues and rejects separately by lot | inspection sheet; calibrated scale; moisture and defect record; destination evidence |
| `cp_cocoa_quality_records` | `cocoa_fermentation` and `cocoa_cleaning_grading` | moisture, fermentation, mould, insects, foreign matter and grade decision | laboratory or documented lot inspection record | sample_id; lot_id; moisture; fermentation_index; mould; insects; foreign_matter; defect_class; grade_decision; method; coverage | retain sampling plan, analytical method, result and decision for each lot | percent; score; kg sample; date | each lot and quality decision | complete included fermentation, drying and grading route | all lots used for declared outputs | link quality decisions to lot and route state; do not convert rejected material to accepted output | lab report; sampling plan; method version; inspector sign-off |
| `cp_cocoa_storage_records` | `cocoa_storage_gate` | accepted dried beans, packaging, storage service, output and loss | warehouse record and storage-period balance | lot_id; opening_mass; packaging; warehouse; start_date; end_date; conditions; receipts; outputs; losses; closing_mass | reconcile opening stock, receipts, declared output and losses for each storage period | kg dried beans; kg loss; storage days; packaging unit | each storage period and lot | complete pre-gate storage period | all included warehouses and lots | close the storage balance and assign shared handling once to the documented lot driver | warehouse log; scale record; condition log; packaging record |
| `cp_cocoa_residue_destination_records` | route-wide cocoa processes | shell, pulp, sweatings, dust, rejects and other residues | destination ticket, recovery record or treatment/disposal record | residue_type; quantity; destination; receiver; intended_function; treatment; disposal; date; lot_id | document whether each material is a named co-product, recovery, retained residue or waste and record hand-off | kg material; destination code; date | each residue event | complete included route and storage period | all included field, processing and storage sites | classify and aggregate each destination separately; keep undocumented destinations as unresolved | destination ticket; receiver evidence; treatment record; waste manifest |

### Calculation rules

| rule_id | Inputs | Calculation |
| --- | --- | --- |
| `calc_01` | perennial phase, area, crop years and reference output | Annualize establishment, replacement and termination only across represented years and allocate to same-block wet reference output. |
| `calc_02` | pod, wet, fermented, dried and graded masses | Reconcile each node independently and retain moisture basis for every conversion. Do not use generic cocoa yield when lot data exist. |
| `calc_03` | process totals and reference output | Normalize to 1 kg wet farm-gate reference. For the extended route also report per 1 kg dried output and retain the conversion denominator. |
| `calc_04` | nutrient, residue, fuel and water records | Apply one declared geographically and temporally appropriate method per pathway; retain factor, unit, activity basis and uncertainty. |
| `calc_05` | intended outputs and allocation denominator | Subdivide first, then allocate shared burdens once by the declared mass or economic method; residue and waste treatment remain separate unless product hand-off exists. |
| `calc_06` | storage opening, receipts, outputs and closing | Calculate storage loss as the reconciled difference and investigate negative or unexplained balances. |

### Data quality rules

| rule_id | Requirement |
| --- | --- |
| `quality_01` | Every material state has a stable lot or batch id and explicit state label: wet in pulp, fermented wet, dried fermented, graded, residue, reject or waste. |
| `quality_02` | Moisture method, sample basis, wet/dry basis and measurement date are retained for every conversion-critical lot. |
| `quality_03` | Coverage includes all boundary inputs, utilities, nutrients, crop protection, direct emissions, residues, rejects and storage events. |
| `quality_04` | Each intended output, downgrade, residue and waste has a destination and hand-off; unknown destination is a blocker for material quantities. |
| `quality_05` | Crop-year, fermentation, drying and storage records are temporally aligned; shared assets and services are indexed to the generating run or period. |
| `quality_06` | Site-specific records replace candidate ranges. Candidate ranges are screening or QA guardrails, not measured defaults. |
| `quality_07` | Platform UUID identity and product-state semantics are checked separately; the reference UUID is not reused for cocoa waste, cocoa paste, wet intermediates or dried route outputs. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference flow | Confirm UUID `3c54da37-f1ab-4b4c-8363-5c32b638005c`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66` and Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`; retain farm-gate fresh/unprocessed metadata. | `mass-balance-identity` |
| `validation_02` | state identity | Reject use of the reference UUID for fermented, dried, graded, cocoa waste or cocoa paste material without a reviewed identity decision. | `mass-balance-identity`; `iso-14044-2006` |
| `validation_03` | process graph | Confirm declared hand-offs: production to harvest, pods to wet beans, wet beans to fermentation, fermentation to drying, drying to grading and grading to declared gate when those nodes are included. | `icco-cocoa-harvesting-post-harvest`; `fao-cocoa-ota-code` |
| `validation_04` | mass balance | Reconcile each lot's inputs, accepted outputs, intended co-products, residues, rejects, storage losses and moisture-related water loss within measurement uncertainty. | `mass-balance-identity` |
| `validation_05` | fermentation | Require batch id, dates, method, drainage, output hand-off and inspection evidence; unresolved off-spec routing blocks the extended route. | `fao-cocoa-ota-code`; `icco-cocoa-harvesting-post-harvest` |
| `validation_06` | drying | Require method, input/output, final moisture and smoke or contamination control. Use 6–8% only as screening; measured lot moisture governs. | `icco-cocoa-processing`; `icco-cocoa-quality-requirements` |
| `validation_07` | grades and rejects | Every accepted grade and intended downgrade has a hand-off; mouldy, broken, contaminated or off-spec material cannot be counted as accepted beans. | `fao-cocoa-production-guide`; `icco-cocoa-quality-requirements` |
| `validation_08` | allocation | Confirm every intended output, residue destination and allocation denominator. Sequential states are not allocated against each other and shared burdens are not double-counted. | `iso-14044-2006`; `mass-balance-identity` |
| `validation_09` | data quality | Check crop-year coverage, lot completeness, moisture basis, protocol linkage, sources, method version and units for every important quantitative flow. | `iso-14044-2006`; `ipcc-2019-refinement-afolu` |
| `validation_10` | boundary disclosure | Confirm the platform farm-gate reference, post-harvest extension flag, final gate, storage duration and excluded downstream cocoa products are declared. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` for a reviewed foreground cocoa-bean route; `background_dataset` use requires separate review |
| downstream_use | construction of process and lifecycle-model datasets for cultivated cocoa beans with explicit wet farm-gate or extended dried-gate state |
| allowed_use | comparative or attributional LCA when geography, crop year, production system, state, moisture basis, route, grade, gate and allocation are compatible |
| excluded_use | cocoa paste, liquor, butter, powder, chocolate, prepared foods, cocoa waste treatment, consumer products or dried-bean data omitting declared state conversion |
| required_metadata | reference UUID; property and unit-group UUIDs; cultivar; geography; block/supplier; crop year; production system; wet reference condition; extension flag; fermentation/drying; moisture; grade; residues; rejects; storage; gate; allocation; uncertainty |
| required_quality_disclosure | measured versus calculated values, coverage, sources, unresolved route UUIDs, range use, sampling basis, missing destinations and balance exceptions |
| update_trigger | change in platform identity, state semantics, cultivation route, fermentation/drying technology, quality requirements, allocation rule, emission method or material range/boundary evidence |

## 11. Data Sources

| source_id | type | Source | Use in this PCR |
| --- | --- | --- | --- |
| `icco-cocoa-harvesting-post-harvest` | official_guidance | ICCO, Harvesting & Post-harvest, https://www.icco.org/harvesting-post-harvest-new/ | pod opening, wet-bean extraction, fermentation, drying and moisture context |
| `icco-cocoa-processing` | official_guidance | ICCO, Processing Cocoa, https://www.icco.org/processing-cocoa/ | post-fermentation drying and storage moisture context |
| `fao-cocoa-production-guide` | official_guidance | FAO, Cocoa production and post-harvest guidance, https://www.fao.org/4/AD220E/AD220E06.htm | cultivation, pod harvest, drying, sorting and storage practices |
| `fao-cocoa-ota-code` | official_guidance | FAO/WHO Codex, Code of Practice for Ochratoxin A in Cocoa, https://www.fao.org/input/download/standards/13601/CXP_072e.pdf | fermentation, turning, drying start and contamination controls |
| `icco-cocoa-quality-requirements` | handbook | ECA–CAOBISCO–FCC, Cocoa Beans: Quality Requirements, https://www.icco.org/wp-content/uploads/2019/07/06-Michelle-End-v3.pdf | defects, drying, storage and rejection context |
| `icco-global-cocoa-farming-systems` | handbook | ICCO, Global Review of Cocoa Farming Systems, https://www.icco.org/wp-content/uploads/Global-Review-of-Cocoa-Farming-Systems_Final.pdf | farming systems, fermentation and drying route evidence |
| `ipcc-2019-refinement-afolu` | method_factor | IPCC, 2019 Refinement AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | agricultural soil, residue and emission-method context |
| `iso-14044-2006` | standard | ISO 14044:2006, https://committee.iso.org/standard/38498.html | boundary, allocation, data-quality and disclosure principles |
| `mass-balance-identity` | method_factor | PCR method identity: conservation and declared-state reconciliation | mass, moisture, lot, reject and storage balance checks |

Candidate ranges are deliberately broad and are not universal defaults. A conforming data package replaces them with site, lot, batch and supplier records and reports unresolved identity or boundary issues rather than silently selecting cocoa waste, cocoa paste or an unrelated cocoa-product flow.
