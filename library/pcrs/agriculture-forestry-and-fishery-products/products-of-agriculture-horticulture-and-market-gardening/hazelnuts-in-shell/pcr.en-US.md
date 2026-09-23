---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.hazelnuts-in-shell
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Hazelnuts, in shell

## 1. Scope and Applicability

This PCR guides a foreground data package for hazelnuts produced in managed perennial hazelnut-tree systems and transferred as hazelnuts in shell at a declared farm, primary-conditioning, storage, or hand-off gate. It covers tree establishment and replacement, productive-tree management, harvest and collection, optional dehusking that leaves the hard shell intact, cleaning, grading, storage, and the declared gate hand-off.

The canonical reference-flow identity is the platform record `Hazelnuts, in shell`, classified as CPC 3.0 `01374`, with the platform qualifier `Production mix, at farm gate; Fresh, unprocessed produce`. A dataset must disclose whether the declared gate is the whole fruit at the fresh farm gate, a dehusked hazelnut with shell retained, or an extended conditioned or stored lot. These states must not be silently mixed.

This PCR applies to conventional, organic, rain-fed, irrigated, mixed-crop, and smallholder or estate routes when the cultivar or cultivar group, geography, tree age, crop year, harvest maturity, husk status, shell condition, moisture basis, quality state, and gate are disclosed. It excludes nursery operations except as upstream inputs, shell removal, splitting or hatcheting, kernel processing, oil extraction, roasted or otherwise processed hazelnut products, shell processing, retail packaging, consumer use, and transport or storage after the declared gate. It does not select an `Other` or n.e.c. product category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.hazelnuts-in-shell` |
| classification_refs | CPC 3.0 `01374`, Hazelnuts, in shell |
| covered_products | Whole hazelnut fruit with husk and shell retained, and dehusked hazelnuts with the hard shell retained when the extended gate is declared |
| excluded_products | Shelled or split hazelnuts; hazelnut kernel, hazelnut oil, roasted or otherwise processed hazelnut products, shell products, and post-gate logistics or retail products |
| representative_product | Mature or declared-maturity hazelnuts in shell with cultivar, husk status, moisture or freshness state, grade, accepted mass, reject mass, and gate declared |
| production_route | Perennial hazelnut-tree establishment and management, harvest and collection, optional dehusking while retaining the shell, primary conditioning, grading, optional storage, and declared hand-off |
| market_state | Fresh whole fruit at farm gate or dehusked/conditioned in-shell lot at a declared extended gate, with crop year, geography, maturity, husk status, shell condition, grade, and fate records |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Hazelnuts in shell at the declared gate, with the hard shell retained and husk status declared |
| How much | 1,000 kg net accepted hazelnuts in shell |
| How well | Cultivar or cultivar group; production country, region, and climate; tree age and productive status; crop year; fresh or conditioned state; husk status; shell integrity; maturity; size or grade; accepted, downgraded, rejected, and loss mass; husk fate; and gate |
| How long or cycle | One declared crop year within the perennial tree productive life; establishment, immature years, replacement, and removal are allocated over the declared tree-life and accepted-output basis |
| reference_flow_link | Accepted output from `hazelnut_harvest_and_collection` for the fresh whole-fruit state, or from `hazelnut_primary_conditioning_and_grading` or `hazelnut_storage_and_gate_handoff` when an extended gate is declared |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Hazelnuts, in shell `7e2e5ae9-0997-4bef-8292-0fb8592dac09` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or cultivar group; tree block and geography; establishment year, tree age, productive status, and replacement events; soil and climate; irrigation status and water source; crop year or averaging period; harvest maturity; whole-fruit or dehusked state; husk status; moisture basis; shell condition; size or grade; accepted, downgraded, rejected, and loss mass; husk destination; storage duration and condition; and gate |
| Binding | `fixed` |

The required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Net product mass excludes container tare. The platform identity is the fresh farm-gate product flow; dehusking, grading, drying, or storage is an extended gate and must retain that qualifier rather than being represented as a new product category. A shelled or split hazelnut must not be used as the reference product for this PCR.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference as net accepted hazelnuts in shell at the declared gate and exclude container tare. |
| `fresh_or_dehusked_gate` | reference and gate outputs | Mass and declared product state | kg and declared state | Keep fresh whole-fruit, dehusked-with-shell, conditioned, and stored gate states separate. Do not use a dehusked amount as a fresh whole-fruit amount without a measured mass conversion and husk fate. |
| `yield_and_output_basis` | orchard, harvest, conditioning, and storage outputs | Mass and area | kg and ha | Record harvested fruit, accepted grades, husk, field loss, rejects, foreign material, storage losses, and unexplained losses for the same tree-year, lot, or reporting period before normalization. |
| `moisture_and_freshness_basis` | harvested, conditioned, stored, and accepted hazelnuts | Mass and moisture or freshness descriptor | kg and declared fraction or class | Preserve as-received mass and moisture or freshness class. Convert between states only with measured mass and a transparent water or dry-matter equation. |
| `shell_and_maturity_quality` | accepted in-shell product | declared quality properties | declared unit | Retain maturity class, shell integrity, cracks, germination, mold, insect damage, foreign material, size or grade, and freshness as attributes; do not substitute a universal quality default. |
| `tree_life_allocation_basis` | establishment, replacement, and immature-tree inputs | area, time, or mass activity property | ha, tree-year, or kg product | Allocate perennial establishment, immature years, replacement trees, and removal over the declared tree life and accepted output basis; disclose non-bearing years and replacement events. |
| `nutrient_product_and_n_basis` | nutrient and soil-amendment inputs | product and nutrient mass | kg product and kg N, P2O5, or K2O | Record formulated product mass and documented nutrient content separately. Nitrogen emission calculations use declared kg N. |
| `water_basis` | irrigation and wet handling | volume or mass | m3 or kg | Distinguish delivered irrigation water, natural-resource withdrawal, drainage or consumption indicators, and optional wet-cleaning water. A rain-fed or dry-conditioning route records a justified zero for supplied water. |
| `energy_inventory` | orchard, harvest, dehusking, grading, and storage | mass, volume, or energy | kg, L, MJ, or kWh | Preserve carrier, unit, operation, equipment, period, and conversion basis. Keep fuel, electricity, and thermal conditioning energy distinguishable. |
| `packaging_quantity` | optional in-scope storage packaging | mass or item count | kg, g, or item | Record packaging material mass or item count with package capacity, reuse status, and lot assignment when packaging crosses the declared gate boundary. |

## 5. System Boundary

The default foreground boundary runs from the declared tree-orchard starting condition through perennial tree management, harvest and collection, and the fresh farm-gate hand-off of accepted hazelnuts in shell. An extended route additionally includes dehusking that leaves the hard shell intact, cleaning, grading, storage, and the declared post-harvest gate. Upstream production of planting material, fertilizers, crop-protection products, supplied irrigation water, energy carriers, machinery services, and packaging uses representative background datasets. Shell removal, splitting, kernel processing, oil extraction, roasted or otherwise processed hazelnut products, retail, post-gate transport, and post-gate storage are outside the default boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | tree-orchard site before or at establishment, with planting material and purchased management inputs crossing the foreground boundary; prior land use and existing tree history are disclosed |
| starting_condition_role | start of managed perennial hazelnut production and tree-asset accounting |
| product_classification_scope | CPC 3.0 `01374`, Hazelnuts, in shell; shelled, split, kernel, oil, shell, and downstream processed hazelnut products are outside this PCR |
| recursive_input_rule | Same-category planting material or retained hazelnuts crossing the boundary are recorded as upstream inputs and are not recursively expanded into another in-shell product output. Internal hand-offs between orchard, harvest, conditioning, grading, and storage are process links and are not additional market outputs. |
| upstream_dataset_requirement | Use representative upstream datasets for nursery material, nutrient products, crop protection, irrigation supply, fuel, electricity, dehusking or grading services, packaging, machinery services, and waste treatment when these inputs cross the boundary. |
| disclosure | cultivar and tree block; geography, soil, climate, and land history; establishment year, tree age, productive life, and replacement; irrigation source and quality; nutrient and crop-protection records; harvest maturity; whole-fruit or dehusked state; moisture or freshness; shell quality; grade, reject, husk, and storage records; gate; and any intended husk co-product hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_tree_to_farm_gate` | all conforming datasets | Include perennial tree establishment, immature years, productive management, harvest, collection, and the declared fresh farm-gate hand-off of accepted hazelnuts in shell. | `fao-hazelnut-sustainable-production-2023`; `iso-14044-2006` |
| `boundary_dehusking_extension` | extended post-harvest route | Include dehusking, cleaning, grading, and storage only when the declared dataset gate extends beyond the fresh whole-fruit farm gate. Report the extended gate and do not relabel it as the platform fresh/unprocessed state. | `fao-hazelnut-postharvest-operations`; `codex-hazelnut-hygiene-cxc-4-1971` |
| `boundary_perennial_tree_disclosure` | establishment and replacement | Allocate establishment, immature years, replacement trees, and removal over the declared tree life and accepted-output basis; disclose life, non-bearing years, intercropping, and replacement events. | `fao-hazelnut-sustainable-production-2023`; `iso-14044-2006` |
| `boundary_no_shell_removal` | in-shell product | Retain the hard shell in the product boundary. Exclude hatcheting or shell removal, splitting, kernel processing, oil extraction, roasted or otherwise processed hazelnut products, and shell processing. | `codex-hazelnut-hygiene-cxc-4-1971`; `fao-hazelnut-postharvest-operations` |
| `boundary_quality_and_fate` | all outputs | Separate accepted in-shell hazelnuts, husk, downgraded lots, rejected fruit, foreign material, dust, water loss, storage loss, and unexplained loss by measured mass and declared fate. | `fao-hazelnut-postharvest-operations`; `mass-balance-identity` |

## 6. Process Inventory Structure

The foreground route is batch-based at harvest, dehusking, grading, and storage, even when tree management is recorded continuously. Each harvest round, conditioning batch, grade lot, and storage receipt receives a batch or campaign identifier with a declared start, end, input set, output set, cleaning or changeover event, and reporting period. Shared equipment and shared-run burdens are assigned once to the relevant batch or campaign.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hazelnut_orchard_establishment_and_management` | Hazelnut tree establishment and management | required |  | foreground | tree-year inputs and accepted output basis |
| `hazelnut_harvest_and_collection` | Hazelnut harvest and collection | required |  | foreground | collected whole fruit before optional dehusking |
| `hazelnut_primary_conditioning_and_grading` | Hazelnut dehusking, material treatment, primary conditioning, and grading | conditional | include when dehusking, cleaning, grading, or an extended gate is part of the foreground package | primary conditioning and stabilization | received lot and grade outputs |
| `hazelnut_storage_and_gate_handoff` | Hazelnut storage and gate hand-off | conditional | include when storage or a post-harvest gate is part of the declared foreground boundary | storage and delivery hand-off | 1,000 kg declared gate output |

### Process: Hazelnut Tree Establishment and Management (`hazelnut_orchard_establishment_and_management`)

#### Inputs

##### Product flows

###### Hazelnut planting and replacement material (`hazelnut_planting_material`)

Record seedlings, planting material, replacement trees, stakes, and attributable establishment materials by block and event. Annualize them over the declared tree life and accepted in-shell output.

- Selected flow: hazelnut nursery plants and replacement planting material
- Flow property / unit: Item count or mass / item or kg
- Amount rule: measured quantity by tree block and establishment or replacement event, annualized over accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted hazelnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hazelnut_orchard_lifecycle_records`
- Range: Provisional planting-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 100
  - Unit: kg or planting units per 1,000 kg reference product
  - Basis: broad first-pass perennial-tree establishment and replacement estimate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`hazelnut_orchard_establishment_and_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted hazelnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_orchard_input_records`
- Sources: `ipcc-2019-afolu`
- Range: Provisional nutrient-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg formulated product per 1,000 kg reference product
  - Basis: annual perennial-tree nutrient and amendment input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied irrigation water (`hazelnut_irrigation_water`)

Record water delivered to each tree block by source and crop year. A verified rain-fed route may record zero supplied irrigation with a water-balance explanation.

- Selected flow: irrigation water supplied to hazelnut trees
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or documented delivered irrigation by block and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted hazelnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_irrigation_records`
- Range: Provisional irrigation screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: m3 per 1,000 kg reference product
  - Basis: broad annual supplied irrigation range; rain-fed routes may be zero
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field fuel and electricity (`hazelnut_field_energy`)

Record fuel and electricity used for pumps, field equipment, access, collection support, and tree management separately by carrier and operation.

- Selected flow: diesel, gasoline, electricity, or other field energy carrier
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier use by equipment, operation, block, and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted hazelnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_energy_records`
- Range: Provisional field-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: MJ per 1,000 kg reference product
  - Basis: field pumping, access, harvest support, and management energy
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Orchard pruning and fallen-fruit residue (`hazelnut_orchard_residue`)

Record pruned branches, fallen nuts, damaged nuts, and other orchard residues only when they cross the foreground boundary or receive a defined treatment. Distinguish residue retained on soil from removed or transferred biomass.

- Selected flow: hazelnut orchard residue and removed biomass
- Flow property / unit: Mass / kg
- Amount rule: measured or documented residue mass by block and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted hazelnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_orchard_lifecycle_records`
- Range: Orchard-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg per 1,000 kg reference product
  - Basis: removed or treated orchard biomass; retained soil residue may be recorded as zero crossing the boundary
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Elementary flows

###### Managed-soil and crop-protection emissions (`hazelnut_field_emissions`)

Record calculated emissions from nutrient application, residue handling, crop-protection use, and managed soil using the selected method and receiving medium.

- Selected flow: reported substance and receiving medium from the foreground emission calculation
- Flow property / unit: Mass / kg substance
- Amount rule: calculated from documented inputs, residue fate, soil condition, and method factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted hazelnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hazelnut_emission_records`
- Sources: `ipcc-2019-afolu`
- Range: Provisional field-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg substance per 1,000 kg reference product
  - Basis: broad first-pass managed-soil and crop-protection emission envelope
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Hazelnut Harvest and Collection (`hazelnut_harvest_and_collection`)

#### Inputs

##### Product flows

###### Whole hazelnuts available for collection (`hazelnut_harvest_available`)

Record mature or otherwise declared-maturity whole fruit available to the harvest operation before collection loss and hand-off.

- Selected flow: Hazelnuts, in shell `7e2e5ae9-0997-4bef-8292-0fb8592dac09`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured harvested fruit mass before dehusking or conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted hazelnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_harvest_lot_records`
- Range: Harvest-input mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 1,400
  - Unit: kg per 1,000 kg accepted reference product
  - Basis: harvested whole-fruit mass before field and quality losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and collection energy (`hazelnut_harvest_energy`)

Record climbing, cutting, collection, field transport, and handling energy by harvest round and equipment.

- Selected flow: fuel or electricity used for hazelnut harvest and collection
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Amount rule: measured carrier use or equipment activity converted with a declared factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted hazelnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_energy_records`
- Range: Harvest-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: MJ per 1,000 kg reference product
  - Basis: harvest, collection, and field handling energy
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Uncollected or damaged harvest fruit (`hazelnut_harvest_loss`)

Record fruit left in the field, damaged during harvest, over-mature fruit, and other collection losses with the actual fate.

- Selected flow: hazelnut harvest loss and damaged fruit
- Flow property / unit: Mass / kg
- Amount rule: field-scale or lot-register mass not transferred to the next process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted hazelnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_harvest_lot_records`
- Range: Harvest-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg per 1,000 kg accepted reference product
  - Basis: uncollected, damaged, or otherwise non-accepted harvest fruit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Hazelnut Dehusking, Primary Conditioning, and Grading (`hazelnut_primary_conditioning_and_grading`)

This process is conditional. Dehusking removes the fibrous husk while leaving the hard shell intact; shell removal, splitting, and kernel or hazelnut-water recovery are outside this PCR.
The dehusking and primary conditioning step is the material treatment node; its treated output and all residual destinations are recorded separately.

#### Inputs

##### Product flows

###### Whole hazelnuts received for conditioning (`hazelnut_conditioning_input`)

Record the incoming lot state, husk status, maturity, and mass at the conditioning boundary.

- Selected flow: Hazelnuts, in shell `7e2e5ae9-0997-4bef-8292-0fb8592dac09`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured lot receipt mass, with whole-fruit or dehusked state declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted conditioning-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_dehusking_conditioning_records`
- Range: Conditioning-input mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 1,400
  - Unit: kg per 1,000 kg accepted conditioning-gate product
  - Basis: received whole-fruit lot before dehusking and grading losses
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dehusking and grading energy (`hazelnut_conditioning_energy`)

Record electricity, fuel, or human-powered equipment activity used for dehusking, cleaning, grading, and changeover.

- Selected flow: fuel or electricity used for dehusking and grading
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Amount rule: measured carrier use by batch and operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioning-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_energy_records`
- Range: Conditioning-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: MJ per 1,000 kg accepted conditioning-gate product
  - Basis: dehusking, cleaning, grading, and optional short stabilization energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Product flows

###### Conditioning water or cleaning service (`hazelnut_conditioning_water`)

Record optional cleaning water only when it crosses the foreground boundary. Dry dehusking and cleaning may record a justified zero.

- Selected flow: process or cleaning water
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Group selection: deferred until the actual cleaning or washing function is recorded
- Amount rule: metered water used by conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioning-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_dehusking_conditioning_records`
- Range: Conditioning-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3 per 1,000 kg accepted conditioning-gate product
  - Basis: optional wet cleaning; dry routes may be zero
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted hazelnuts in shell (`hazelnut_conditioned_accepted_output`)

Record accepted whole or dehusked hazelnuts with shell retained, grade, maturity, husk status, and declared gate.
The accepted hazelnut lot is the intended output of this conditioning process.

- Selected flow: Hazelnuts, in shell `7e2e5ae9-0997-4bef-8292-0fb8592dac09`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net accepted lot output excluding tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg declared conditioning-gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_grade_reject_records`
- Range: Accepted conditioning-output guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 700
  - Upper: 1,020
  - Unit: kg per 1,000 kg received conditioning lot
  - Basis: accepted product after husk removal, grading, and declared rejects
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Product flows

###### Marketed hazelnut husk co-product (`hazelnut_husk_coproduct`)

Record a husk stream only when it is intentionally transferred to a declared recipient; otherwise record it as residue or waste below.

- Selected flow: hazelnut husk and fibrous biomass
- Flow property / unit: Mass / kg
- Amount rule: measured husk mass and declared destination by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioning-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_husk_destination_records`
- Range: Marketed husk co-product screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg per 1,000 kg received lot
  - Basis: measured destination-specific husk mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Hazelnut husk and removed biomass (`hazelnut_husk_output_or_residue`)

Record removed husk and associated fibrous material separately from shell-retained product. A marketed or transferred husk stream is an intended co-product; retained, composted, or discarded husk is a residue or waste route.

- Selected flow: hazelnut husk and fibrous residue
- Flow property / unit: Mass / kg
- Amount rule: measured or documented husk mass and destination by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioning-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_husk_destination_records`
- Range: Husk-output screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 1,000
  - Unit: kg per 1,000 kg received whole-fruit lot
  - Basis: removed husk and fibrous material; actual value depends on maturity and incoming state
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded and rejected hazelnuts (`hazelnut_grade_rejects`)

Record cracked, moldy, insect-damaged, immature, over-mature, contaminated, or otherwise off-spec hazelnuts, with rework, recovery, treatment, or disposal destination.

- Selected flow: rejected or downgraded hazelnuts in shell
- Flow property / unit: Mass / kg
- Amount rule: measured mutually exclusive grade, downgrade, rework, and reject masses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg received conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_grade_reject_records`
- Range: Reject and downgrade screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg per 1,000 kg received conditioning lot
  - Basis: rejected, downgraded, reworked, or recovered fruit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Conditioning wastewater, dust, and wash solids (`hazelnut_conditioning_residuals`)

Record wastewater, dust, soil, fibers, and wash solids only when they cross the boundary or receive treatment; identify receiving medium and fate.

- Selected flow: reported residual substance and receiving medium
- Flow property / unit: Mass / kg substance or waste
- Amount rule: measured residual mass or calculated from batch water and solids balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioning-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hazelnut_dehusking_conditioning_records`
- Range: Conditioning-residual screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg per 1,000 kg accepted conditioning-gate product
  - Basis: wastewater solids, dust, soil, and other residuals crossing the boundary
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Hazelnut Storage and Gate Hand-off (`hazelnut_storage_and_gate_handoff`)

This process is conditional. Include it when storage, dispatch preparation, or a post-harvest gate is part of the declared foreground boundary.

#### Inputs

##### Product flows

###### Hazelnuts received for storage (`hazelnut_storage_input`)

Record opening stock or lot receipt, product state, husk status, moisture or freshness, grade, and storage start.

- Selected flow: Hazelnuts, in shell `7e2e5ae9-0997-4bef-8292-0fb8592dac09`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured stock receipt mass excluding tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg declared gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_storage_records`
- Range: Storage-input mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 980
  - Upper: 1,100
  - Unit: kg per 1,000 kg declared gate output
  - Basis: received stock before storage loss and dispatch reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Storage energy (`hazelnut_storage_energy`)

Record electricity, fuel, cooling, ventilation, or other storage energy by facility and storage period.

- Selected flow: fuel or electricity used for hazelnut storage
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Amount rule: meter, invoice, or equipment record allocated to the stored lot and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_energy_records`
- Range: Storage-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: MJ per 1,000 kg declared gate output
  - Basis: storage, ventilation, cooling, and handling energy for the declared period
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Product flows

###### Storage packaging (`hazelnut_storage_packaging`)

Record packaging only when it crosses the declared gate boundary or is attributable to the stored lot.

- Selected flow: storage sack, crate, pallet, or other packaging material
- Flow property / unit: Mass or item count / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: measured package mass or item count by lot and reuse status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_storage_records`
- Range: Storage-packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg per 1,000 kg declared gate output
  - Basis: attributable new or replacement storage packaging
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted hazelnuts at declared gate (`hazelnut_gate_output`)

Record net dispatched product with the declared whole-fruit or dehusked-with-shell state, grade, freshness or moisture, and gate.

- Selected flow: Hazelnuts, in shell `7e2e5ae9-0997-4bef-8292-0fb8592dac09`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net dispatch mass excluding tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg declared gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_storage_records`
- Range: Gate-output mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1,020
  - Unit: kg per 1,000 kg declared gate output
  - Basis: net dispatched product after stock and loss reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Storage loss and damaged product (`hazelnut_storage_loss`)

Record spoilage, drying or freshness loss, pests, breakage, and other storage losses with treatment or disposal fate.

- Selected flow: hazelnut storage loss or damaged product
- Flow property / unit: Mass / kg
- Amount rule: stock reconciliation and measured damaged or removed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hazelnut_storage_records`
- Range: Storage-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg per 1,000 kg declared gate output
  - Basis: storage spoilage, handling damage, freshness loss, and unexplained residual under investigation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | tree management and harvest with an intended husk output | Prefer process subdivision when tree, harvest, dehusking, husk collection, and nut records are independently available. When husk is deliberately collected and transferred as an intended co-product, allocate shared burdens by measured dry-matter mass; if dry-matter data are unavailable, use measured as-received mass and disclose the limitation. | `iso-14044-2006`; `fao-hazelnut-postharvest-operations` |
| `allocation_02` | husk retained on site or discarded | If husk remains on the field, is composted without an intended product hand-off, or is discarded as residue, do not assign a co-product credit. Retain its mass and fate as residue or waste and assign shared burden to the intended in-shell hazelnut output. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_03` | premium, standard, and downgraded in-shell grades | Use physical mass allocation between mutually exclusive accepted grade outputs when common conditioning burdens cannot be subdivided. Grade-specific operations remain with the grade receiving them; do not allocate the same lot to both a grade row and an aggregate output row. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_04` | perennial tree periods and phases | Annualize establishment, immature years, replacement, intercropping attribution, and removal over the declared tree life and accepted output basis. Link every input and output to a crop year or lifecycle phase; do not count a replacement event in both the original and replacement tree phases. | `fao-hazelnut-sustainable-production-2023`; `iso-14044-2006` |
| `allocation_05` | downgraded, reworked, rejected, and recovered lots | Keep rejected and downgraded lots separate from accepted product. Rework retains the producing-node burden and is linked once; recovered or intentionally marketed material requires a declared destination and allocation decision; discarded material receives its declared treatment burden. | `mass-balance-identity`; `iso-14044-2006` |
| `allocation_06` | batch, campaign, and changeover attribution | Link tree, harvest, conditioning, dehusking, grading, and storage inputs and outputs to the batch or campaign that generated them. Record cleaning and changeover events once and do not allocate shared-run burdens to more than one batch without a documented driver. | `mass-balance-identity`; `iso-14044-2006` |

The hard shell remains part of the in-shell reference product and is not a separate co-product in this PCR. Kernel, oil, and shell-removal outputs belong to downstream hazelnut-product PCRs and must not be introduced into this inventory. No output may be counted both as a marketed husk co-product and as orchard or conditioning residue.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_hazelnut_orchard_lifecycle_records` | `hazelnut_orchard_establishment_and_management` | tree asset, land, planting, replacement, intercropping, residue | tree block and asset register | block area; planting year; cultivar; tree count; replacement; removal; frond residue; tree phase; accepted output | block register, field log, and annual reconciliation | ha, item, kg, tree-year | event and annual | full declared tree life or documented representative period | every contributing tree block | link block records to crop year and accepted output | signed field register, GIS or survey area, replacement evidence |
| `cp_hazelnut_orchard_input_records` | `hazelnut_orchard_establishment_and_management` | nutrient, amendment, crop protection | input application record | product name; formulation; nutrient content; active ingredient; amount; date; block; purpose; method | invoice, application log, and supplier record | kg product, kg nutrient, kg active ingredient | every application | crop year | every contributing block | aggregate by product, nutrient, block, and crop year | invoice, product label, application log |
| `cp_hazelnut_irrigation_records` | `hazelnut_orchard_establishment_and_management` | irrigation and water | irrigation meter or water ledger | source; volume; block; date; meter; water quality; withdrawal and return | meter, pump record, or transparent water balance | m3 or kg | event and monthly | crop year | every irrigated block | reconcile delivery, withdrawal, and declared consumption | meter calibration, pump log, water ledger |
| `cp_hazelnut_energy_records` | all field, harvest, conditioning, and storage processes | energy and carrier | fuel, electricity, and equipment record | carrier; amount; equipment; operation; lot or block; date; duration; conversion factor | invoice, meter, fuel log, or equipment record | L, kg, MJ, or kWh | event and monthly | crop year and declared post-harvest period | each operation and facility | aggregate by carrier, operation, lot, and period | invoice, meter, fuel log, equipment specification |
| `cp_hazelnut_emission_records` | `hazelnut_orchard_establishment_and_management` | direct and indirect field emissions | emission calculation input record | nutrient input; residue; soil condition; crop-protection record; species; method; factor | calculation workbook linked to raw records | kg substance | annual and event | crop year | every contributing block | retain substance, receiving medium, factor, and source | calculation review, factor version, source citation |
| `cp_hazelnut_harvest_lot_records` | `hazelnut_harvest_and_collection` | harvest, collection, field loss, residue | harvest-lot register | block; harvest round; maturity; harvested mass; uncollected mass; debris; husk status; destination | weighbridge, field scale, and lot log | kg, date, lot | every collection round | harvest season | every contributing block | reconcile available, collected, lost, and residue mass | scale calibration, lot ticket, field inspection |
| `cp_hazelnut_dehusking_conditioning_records` | `hazelnut_primary_conditioning_and_grading` | dehusking, cleaning, water, energy, moisture, batch yield | conditioning batch record | input mass; husk status; method; duration; energy; water; output state; output mass; husk mass; cleaning loss; wastewater | batch log, meter, scale, moisture or freshness test, and water balance | kg, %, hours, L, kWh | every batch | declared post-harvest period | each conditioning facility or farm unit | link all inputs and outputs to one batch and gate | calibrated scale, batch ticket, freshness or moisture test |
| `cp_hazelnut_husk_destination_records` | `hazelnut_primary_conditioning_and_grading` | husk co-product, residue, or waste | destination and transfer record | husk mass; dry matter or moisture; destination; recipient; price or use; fate; transfer date | scale, transfer record, and destination confirmation | kg and declared fraction | every transfer | conditioning period | each husk destination | separate intended output from residue and waste | receipt, transfer note, destination evidence |
| `cp_hazelnut_grade_reject_records` | `hazelnut_primary_conditioning_and_grading` | grade, downgrade, reject, foreign material | inspection and grade record | lot; maturity; husk status; shell condition; mold; insects; foreign material; accepted mass; rework; fate | inspection, sampling, and scale record | kg, %, grade code | every lot | declared post-harvest period | each grading point | mutually exclusive grade and reject states | inspection sheet, sample plan, scale calibration |
| `cp_hazelnut_storage_records` | `hazelnut_storage_and_gate_handoff` | storage input, loss, packaging, gate output | stock and dispatch ledger | opening stock; receipts; lot; product state; moisture or freshness; storage duration; packaging; energy; damage; closing stock; dispatch mass; gate | stock ledger, dispatch ticket, and storage log | kg, %, days, kWh, item | receipt, inspection, and dispatch | declared storage period | each storage facility | opening + receipts = dispatch + closing + loss | stock reconciliation, dispatch ticket, freshness or moisture and pest record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | perennial tree inputs | Allocate tree establishment, immature years, replacement, intercropping share, and removal over the declared tree-life basis and accepted output by crop year. | tree asset register; tree life; crop-year output; intercropping driver | annualized tree input per reference flow | `fao-hazelnut-sustainable-production-2023`; `iso-14044-2006` |
| `calc_02` | every harvest, conditioning, and storage lot | `opening mass + inputs = accepted outputs + husk co-product + rejects + residues + measured losses`; investigate any unexplained residual. | lot weights and fates | reconciled mass balance | `mass-balance-identity` |
| `calc_03` | whole-fruit to dehusked lots | `dehusked mass = whole-fruit input mass − measured husk and non-product losses`; do not infer husk mass from an unrelated average when a lot record exists. | input/output mass; husk record; loss record | state- and fate-corrected product mass | `mass-balance-identity`; `fao-hazelnut-postharvest-operations` |
| `calc_04` | marketed husk co-product | If husk is intended and transferred, apply measured dry-matter mass allocation to shared harvest and dehusking burdens; if not intended, model residue fate without co-product credit. | hazelnut mass; husk mass; moisture or dry matter; declared destination | allocated burdens and co-product share | `iso-14044-2006` |
| `calc_05` | grades, downgraded, reworked, and rejected lots | Grade outputs must be mutually exclusive. Accepted output equals input less husk, declared downgraded, rework, reject, foreign-material, water-loss, and unexplained-loss terms; rework is linked once. | batch input; grade and reject records | normalized output rows | `mass-balance-identity` |
| `calc_06` | storage | `opening stock + receipts − dispatches − closing stock = measured storage loss`; storage loss is not accepted gate output. | stock ledger; dispatches; closing stock; loss records | storage loss per storage duration | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | flow identity | Use the verified `Hazelnuts, in shell` UUID with Mass and kg. Preserve the fresh farm-gate or explicitly extended-gate qualifier and do not substitute shelled, split, kernel, or water identities. | platform identity record; dataset metadata |
| `quality_02` | tree and harvest quantities | Use calibrated scales, meters, or transparent documented estimates. Record a justified zero when a route does not use irrigation, wet cleaning, packaging, or storage. | calibration record; field and lot logs |
| `quality_03` | husk and product state | Measure or document whole-fruit, dehusked-with-shell, and conditioned states separately. Retain husk moisture or dry-matter basis where allocation or conversion uses it. | batch record; scale; moisture or freshness test |
| `quality_04` | completeness | Reconcile tree inputs, harvest outputs, husk destination, conditioning outputs, rejects, residues, water loss, storage loss, and gate dispatches. | mass-balance workbook; stock ledger |
| `quality_05` | temporal and perennial representativeness | Cover the declared crop year and report tree phase, productive age, replacement events, intercropping, abnormal weather, and averaging method. | crop-year register; tree lifecycle record |
| `quality_06` | co-products and fate | Evidence every intended husk hand-off, downgraded destination, rework loop, reject treatment, and residue fate. Do not assign credits to an unverified destination. | transfer note; destination record; treatment record |
| `quality_07` | geography and technology | Disclose country, region, climate, soil, irrigation regime, harvest practice, dehusking method, grading method, storage condition, husk fate, and gate. | site description; process notes; facility record |
| `quality_08` | uncertainty and estimates | Label provisional ranges as replaceable candidate-stage estimates and replace them with measured or source-backed values before reviewed or published use. | review record; updated foreground dataset |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference flow | Reference product is the verified `Hazelnuts, in shell` UUID with Mass and kg. The dataset declares whole-fruit or extended dehusked gate state and does not substitute a shelled or split hazelnut. | `codex-hazelnut-hygiene-cxc-4-1971` |
| `validation_02` | process map | Every required process is present; conditional dehusking, cleaning, grading, and storage processes are present when the declared gate or route requires them. | `fao-hazelnut-postharvest-operations` |
| `validation_03` | perennial production | Tree establishment, immature years, productive phase, replacement, intercropping attribution, and removal are linked to declared crop years and are not double-counted. | `fao-hazelnut-sustainable-production-2023`; `iso-14044-2006` |
| `validation_04` | harvest and collection | Harvested, collected, uncollected, damaged, residue, and accepted hazelnut masses are mutually reconciled; maturity and hand-off state are declared. | `mass-balance-identity` |
| `validation_05` | dehusking and quality | Whole-fruit input, husk, accepted in-shell product, grade, downgraded/rework, reject, foreign material, water loss, and residuals are mutually exclusive and mass-balanced. | `mass-balance-identity`; `fao-hazelnut-postharvest-operations` |
| `validation_06` | storage and gate | Opening stock, receipts, dispatches, closing stock, storage damage, product state, storage duration, and gate output reconcile. Storage losses are excluded from accepted output. | `mass-balance-identity`; `fao-hazelnut-postharvest-operations` |
| `validation_07` | allocation and rework | Husk allocation, grade allocation, downgraded routes, rework loops, rejected-material treatment, and any intercropping attribution are explicit and no burden or output is counted twice. | `iso-14044-2006` |
| `validation_08` | evidence and disclosure | All important quantitative flows have a foreground collection rule and candidate range or method constraint; estimates, unresolved identities, gate state, husk fate, and evidence limitations are disclosed. | `fao-hazelnut-postharvest-operations`; `mass-balance-identity` |
| `validation_09` | batch and campaign records | Every harvest round, conditioning batch, grade lot, and storage receipt has a declared boundary, linked inputs and outputs, cleaning or changeover status, and reporting period; shared-run burdens are not counted twice. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` for a reviewed hazelnut-in-shell foreground dataset; may be promoted to `background_dataset` only after the required review and publication gates |
| downstream_use | Construction and validation of process and lifecyclemodel projections for hazelnuts in shell at the declared fresh farm-gate or extended dehusked, conditioned, or storage gate |
| allowed_use | Tree management, harvest, collection, dehusking, cleaning, grading, storage, and gate modelling when the declared product state, husk status, maturity, quality, crop year, geography, and allocation treatment are retained |
| excluded_use | Shell removal, splitting, kernel processing, oil extraction, roasted or otherwise processed hazelnut products, shell products, retail products, consumer use, post-gate logistics, and unreported product categories |
| required_metadata | reference UUID; Mass property and Units of mass unit group; CPC 3.0 `01374`; cultivar; geography; tree phase and age; crop year; irrigation; maturity; whole-fruit or dehusked state; husk fate; shell and grade quality; accepted, rejected, residue, loss, and storage records |
| required_quality_disclosure | measurement versus estimate; freshness or moisture method; mass-balance completeness; tree-life and intercropping allocation; husk co-product allocation; rework and reject fate; storage duration; data period; geography; technology; and unresolved identity gaps |
| update_trigger | new crop-year records, material change in tree phase or replacement, change in harvest or dehusking technology, new intended husk route, changed storage practice, evidence-backed range replacement, or platform identity revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-hazelnut-sustainable-production-2023` | official_guidance | FAO family farming, Sustainable production guide of hazelnut, COLEAD, https://www.fao.org/family-farming/detail/en/c/1755586/ | climate, soil, nutrition, tree establishment, management, harvest, and post-harvest route context |
| `fao-hazelnut-postharvest-operations` | handbook | FAO INPhO, Hazelnut: Post-harvest Operations, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Hazelnut.pdf | fruit structure, dehusking, post-harvest operations, product states, storage, and downstream exclusions |
| `codex-hazelnut-hygiene-cxc-4-1971` | standard | Codex Alimentarius, Code of Hygienic Practice for Desiccated Hazelnut CXC 4-1971, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B4-1971%252FCXC_004e.pdf | definitions of husk and shell removal, hygienic handling, and boundary distinctions for downstream hazelnut processing |
| `ipcc-2019-afolu` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | managed-soil and agricultural emission calculation method context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://committee.iso.org/standard/38498.html | allocation hierarchy, data quality, boundary, and disclosure rules |
| `mass-balance-identity` | method_factor | Conservation-of-mass method identity for lot reconciliation | harvest, dehusking, grading, storage, reject, residue, and water-loss reconciliation |
