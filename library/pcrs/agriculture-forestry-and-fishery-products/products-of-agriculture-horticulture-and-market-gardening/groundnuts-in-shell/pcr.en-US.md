---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.groundnuts-in-shell
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Groundnuts, in shell

## 1. Scope and Applicability

This PCR guides a foreground data package for groundnuts produced in managed annual groundnut production systems and transferred as groundnuts in shell at a declared farm, primary-conditioning, storage, or hand-off gate. It covers field establishment and replanting, crop management, harvest and collection, optional pod cleaning that leaves the hard shell intact, cleaning, grading, storage, and the declared gate hand-off.

The canonical reference-flow identity is the platform record `Groundnuts, in shell`, classified as CPC 3.0 `01422`, with the platform qualifier `Natural mix, at farm; Harvest lifting/digging and post-harvest drying to safe moisture`. A dataset must disclose whether the declared gate is the whole pod at the fresh farm gate, a pod-retained groundnut with shell retained, or an extended conditioned or stored lot. These states must not be silently mixed.

This PCR applies to conventional, organic, rain-fed, irrigated, mixed-crop, and smallholder or estate routes when the cultivar or cultivar group, geography, establishment date, crop year, harvest maturity, pod residue status, shell condition, moisture basis, quality state, and gate are disclosed. It excludes nursery operations except as upstream inputs, shell removal, splitting or hatcheting, kernel processing, oil extraction, roasted or otherwise processed groundnut products, shell processing, retail packaging, consumer use, and transport or storage after the declared gate. It does not select an `Other` or n.e.c. product category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.groundnuts-in-shell` |
| classification_refs | CPC 3.0 `01422`, Groundnuts, in shell |
| covered_products | Whole groundnut fruit with pod residue and shell retained, and pod-retained groundnuts with the hard shell retained when the extended gate is declared |
| excluded_products | Shelled or split groundnuts; groundnut kernel, groundnut oil, roasted or otherwise processed groundnut products, shell products, and post-gate logistics or retail products |
| representative_product | Mature or declared-maturity groundnuts in shell with cultivar, pod residue status, moisture or freshness state, grade, accepted mass, reject mass, and gate declared |
| production_route | Annual groundnut-field establishment and management, harvest and collection, optional pod cleaning while retaining the shell, primary conditioning, grading, optional storage, and declared hand-off |
| market_state | Fresh whole pod at farm gate or pod-retained/conditioned in-shell lot at a declared extended gate, with crop year, geography, maturity, pod residue status, shell condition, grade, and fate records |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Groundnuts in shell at the declared gate, with the hard shell retained and pod residue status declared |
| How much | 1,000 kg net accepted groundnuts in shell |
| How well | Cultivar or cultivar group; production country, region, and climate; crop establishment and growth stage; crop year; fresh or conditioned state; pod residue status; shell integrity; maturity; size or grade; accepted, downgraded, rejected, and loss mass; pod residue fate; and gate |
| How long or cycle | One declared crop year within the annual crop cycle; establishment, pre-harvest crop period, replacement, and removal are allocated over the declared crop-cycle and accepted-output basis |
| reference_flow_link | Accepted output from `groundnut_harvest_and_collection` for the fresh whole-pod state, or from `groundnut_primary_conditioning_and_grading` or `groundnut_storage_and_gate_handoff` when an extended gate is declared |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Peanut `19b26342-ff22-426f-bac3-74cd48cae179` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or cultivar group; field and geography; establishment date, crop growth stage, and replanting events; soil and climate; irrigation status and water source; crop year or averaging period; harvest maturity; whole-pod or pod-retained state; pod residue status; moisture basis; shell condition; size or grade; accepted, downgraded, rejected, and loss mass; pod residue destination; storage duration and condition; and gate |
| Binding | `fixed` |

The required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Net product mass excludes container tare. The platform identity is the fresh farm gate product flow; pod cleaning, grading, drying, or storage is an extended gate and must retain that qualifier rather than being represented as a new product category. A shelled or split groundnut must not be used as the reference product for this PCR.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference as net accepted groundnuts in shell at the declared gate and exclude container tare. |
| `fresh_or_pod-retained_gate` | reference and gate outputs | Mass and declared product state | kg and declared state | Keep fresh whole-pod, pod-retained-with-shell, conditioned, and stored gate states separate. Do not use a pod-retained amount as a fresh whole-pod amount without a measured mass conversion and pod residue fate. |
| `yield_and_output_basis` | field, harvest, conditioning, and storage outputs | Mass and area | kg and ha | Record harvested fruit, accepted grades, pod residue, field loss, rejects, foreign material, storage losses, and unexplained losses for the same crop-cycle, lot, or reporting period before normalization. |
| `moisture_and_freshness_basis` | harvested, conditioned, stored, and accepted groundnuts | Mass and moisture or freshness descriptor | kg and declared fraction or class | Preserve as-received mass and moisture or freshness class. Convert between states only with measured mass and a transparent water or dry-matter equation. |
| `shell_and_maturity_quality` | accepted in-shell product | declared quality properties | declared unit | Retain maturity class, shell integrity, cracks, germination, mold, insect damage, foreign material, size or grade, and freshness as attributes; do not substitute a universal quality default. |
| `crop_cycle_allocation_basis` | establishment, replacement, and crop establishment inputs | area, time, or mass activity property | ha, crop-cycle, or kg product | Allocate annual establishment, pre-harvest crop period, replanting, and removal over the declared crop cycle and accepted output basis; disclose pre-harvest crop period and replacement events. |
| `nutrient_product_and_n_basis` | nutrient and soil-amendment inputs | product and nutrient mass | kg product and kg N, P2O5, or K2O | Record formulated product mass and documented nutrient content separately. Nitrogen emission calculations use declared kg N. |
| `water_basis` | irrigation and wet handling | volume or mass | m3 or kg | Distinguish delivered irrigation water, natural-resource withdrawal, drainage or consumption indicators, and optional wet-cleaning water. A rain-fed or dry-conditioning route records a justified zero for supplied water. |
| `energy_inventory` | field, harvest, pod cleaning, grading, and storage | mass, volume, or energy | kg, L, MJ, or kWh | Preserve carrier, unit, operation, equipment, period, and conversion basis. Keep fuel, electricity, and thermal conditioning energy distinguishable. |
| `packaging_quantity` | optional in-scope storage packaging | mass or item count | kg, g, or item | Record packaging material mass or item count with package capacity, reuse status, and lot assignment when packaging crosses the declared gate boundary. |

## 5. System Boundary

The default foreground boundary runs from the declared groundnut field starting condition through crop management, harvest and collection, and the fresh farm gate hand-off of accepted groundnuts in shell. An extended route additionally includes pod cleaning that leaves the hard shell intact, cleaning, grading, storage, and the declared post-harvest gate. Upstream production of planting material, fertilizers, crop-protection products, supplied irrigation water, energy carriers, machinery services, and packaging uses representative background datasets. Shell removal, splitting, kernel processing, oil extraction, roasted or otherwise processed groundnut products, retail, post-gate transport, and post-gate storage are outside the default boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | groundnut field site before or at establishment, with planting material and purchased management inputs crossing the foreground boundary; prior land use and existing field history are disclosed |
| starting_condition_role | start of managed annual groundnut production and annual crop accounting |
| product_classification_scope | CPC 3.0 `01422`, Groundnuts, in shell; shelled, split, kernel, oil, shell, and downstream processed groundnut products are outside this PCR |
| recursive_input_rule | Same-category planting material or retained groundnuts crossing the boundary are recorded as upstream inputs and are not recursively expanded into another in-shell product output. Internal hand-offs between field, harvest, conditioning, grading, and storage are process links and are not additional market outputs. |
| upstream_dataset_requirement | Use representative upstream datasets for nursery material, nutrient products, crop protection, irrigation supply, fuel, electricity, pod cleaning or grading services, packaging, machinery services, and waste treatment when these inputs cross the boundary. |
| disclosure | cultivar and field; geography, soil, climate, and land history; establishment date, crop year, crop-cycle context, and replacement; irrigation source and quality; nutrient and crop-protection records; harvest maturity; whole-pod or pod-retained state; moisture or freshness; shell quality; grade, reject, pod residue, and storage records; gate; and any intended pod residue co-product hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_to_farm_gate` | all conforming datasets | Include annual crop establishment, pre-harvest crop period, productive management, harvest, collection, and the declared fresh farm gate hand-off of accepted groundnuts in shell. | `fao-groundnut-sustainable-production-2023`; `iso-14044-2006` |
| `boundary_pod_cleaning_extension` | extended post-harvest route | Include pod cleaning, cleaning, grading, and storage only when the declared dataset gate extends beyond the fresh whole-pod farm gate. Report the extended gate and do not relabel it as the platform fresh/unprocessed state. | `fao-groundnut-postharvest-operations`; `codex-groundnut-hygiene-cxc-4-1971` |
| `boundary_annual_crop_disclosure` | establishment and replacement | Allocate establishment, pre-harvest crop period, replanting, and removal over the declared crop cycle and accepted-output basis; disclose life, pre-harvest crop period, intercropping, and replacement events. | `fao-groundnut-sustainable-production-2023`; `iso-14044-2006` |
| `boundary_no_shell_removal` | in-shell product | Retain the hard shell in the product boundary. Exclude hatcheting or shell removal, splitting, kernel processing, oil extraction, roasted or otherwise processed groundnut products, and shell processing. | `codex-groundnut-hygiene-cxc-4-1971`; `fao-groundnut-postharvest-operations` |
| `boundary_quality_and_fate` | all outputs | Separate accepted in-shell groundnuts, pod residue, downgraded lots, rejected fruit, foreign material, dust, water loss, storage loss, and unexplained loss by measured mass and declared fate. | `fao-groundnut-postharvest-operations`; `mass-balance-identity` |

## 6. Process Inventory Structure

The foreground route is batch-based at harvest, pod cleaning, grading, and storage, even when crop management is recorded continuously. Each harvest round, conditioning batch, grade lot, and storage receipt receives a batch or campaign identifier with a declared start, end, input set, output set, cleaning or changeover event, and reporting period. Shared equipment and shared-run burdens are assigned once to the relevant batch or campaign.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `groundnut_field_establishment_and_management` | Groundnut field establishment and management | required |  | foreground | crop-cycle inputs and accepted output basis |
| `groundnut_harvest_and_collection` | Groundnut harvest and collection | required |  | foreground | collected whole pod before optional pod cleaning |
| `groundnut_primary_conditioning_and_grading` | Groundnut pod cleaning, material treatment, primary conditioning, and grading | conditional | include when pod cleaning, cleaning, grading, or an extended gate is part of the foreground package | primary conditioning and stabilization | received lot and grade outputs |
| `groundnut_storage_and_gate_handoff` | Groundnut storage and gate hand-off | conditional | include when storage or a post-harvest gate is part of the declared foreground boundary | storage and delivery hand-off | 1,000 kg declared gate output |

### Process: Groundnut Crop Establishment and Management (`groundnut_field_establishment_and_management`)

#### Inputs

##### Product flows

###### Groundnut planting and replacement material (`groundnut_planting_material`)

Record seed, replanting material, and attributable establishment inputs by field and event. Annualize them over the declared crop cycle and accepted in-shell output.

- Selected flow: groundnut nursery plants and replacement planting material
- Flow property / unit: Item count or mass / item or kg
- Amount rule: measured quantity by field and establishment or replacement event, annualized over accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted groundnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_groundnut_field_lifecycle_records`
- Range: Provisional planting-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 100
  - Unit: kg or planting units per 1,000 kg reference product
  - Basis: broad first-pass annual-field establishment and replanting estimate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`groundnut_field_establishment_and_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted groundnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_field_input_records`
- Sources: `ipcc-2019-afolu`
- Range: Provisional nutrient-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg formulated product per 1,000 kg reference product
  - Basis: annual crop nutrient and amendment input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied irrigation water (`groundnut_irrigation_water`)

Record water delivered to each field by source and crop year. A verified rain-fed route may record zero supplied irrigation with a water-balance explanation.

- Selected flow: irrigation water supplied to groundnut fields
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or documented delivered irrigation by block and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted groundnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_irrigation_records`
- Range: Provisional irrigation screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: m3 per 1,000 kg reference product
  - Basis: broad annual supplied irrigation range; rain-fed routes may be zero
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field fuel and electricity (`groundnut_field_energy`)

Record fuel and electricity used for pumps, field equipment, access, collection support, and crop management separately by carrier and operation.

- Selected flow: diesel, gasoline, electricity, or other field energy carrier
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier use by equipment, operation, block, and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted groundnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_energy_records`
- Range: Provisional field-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: MJ per 1,000 kg reference product
  - Basis: field pumping, access, harvest support, and management energy
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residue and fallen-groundnut residue (`groundnut_field_residue`)

Record pruned branches, fallen nuts, damaged nuts, and other field residues only when they cross the foreground boundary or receive a defined treatment. Distinguish residue retained on soil from removed or transferred biomass.

- Selected flow: groundnut field residue and removed biomass
- Flow property / unit: Mass / kg
- Amount rule: measured or documented residue mass by block and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted groundnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_field_lifecycle_records`
- Range: Field-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg per 1,000 kg reference product
  - Basis: removed or treated field biomass; retained soil residue may be recorded as zero crossing the boundary
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Elementary flows

###### Managed-soil and crop-protection emissions (`groundnut_field_emissions`)

Record calculated emissions from nutrient application, residue handling, crop-protection use, and managed soil using the selected method and receiving medium.

- Selected flow: reported substance and receiving medium from the foreground emission calculation
- Flow property / unit: Mass / kg substance
- Amount rule: calculated from documented inputs, residue fate, soil condition, and method factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted groundnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_groundnut_emission_records`
- Sources: `ipcc-2019-afolu`
- Range: Provisional field-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg substance per 1,000 kg reference product
  - Basis: broad first-pass managed-soil and crop-protection emission envelope
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Groundnut Harvest and Collection (`groundnut_harvest_and_collection`)

#### Inputs

##### Product flows

###### Whole groundnuts available for collection (`groundnut_harvest_available`)

Record mature or otherwise declared-maturity whole pod available to the harvest operation before collection loss and hand-off.

- Selected flow: Peanut `19b26342-ff22-426f-bac3-74cd48cae179`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured harvested fruit mass before pod cleaning or conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted groundnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_harvest_lot_records`
- Range: Harvest-input mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 1,400
  - Unit: kg per 1,000 kg accepted reference product
  - Basis: harvested whole-pod mass before field and quality losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and collection energy (`groundnut_harvest_energy`)

Record climbing, cutting, collection, field transport, and handling energy by harvest round and equipment.

- Selected flow: fuel or electricity used for groundnut harvest and collection
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Amount rule: measured carrier use or equipment activity converted with a declared factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted groundnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_energy_records`
- Range: Harvest-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: MJ per 1,000 kg reference product
  - Basis: harvest, collection, and field handling energy
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Uncollected or damaged harvest fruit (`groundnut_harvest_loss`)

Record fruit left in the field, damaged during harvest, over-mature fruit, and other collection losses with the actual fate.

- Selected flow: groundnut harvest loss and damaged fruit
- Flow property / unit: Mass / kg
- Amount rule: field-scale or lot-register mass not transferred to the next process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted groundnuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_harvest_lot_records`
- Range: Harvest-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg per 1,000 kg accepted reference product
  - Basis: uncollected, damaged, or otherwise non-accepted harvest fruit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Groundnut Pod cleaning, Primary Conditioning, and Grading (`groundnut_primary_conditioning_and_grading`)

This process is conditional. Pod cleaning removes the fibrous pod residue while leaving the hard shell intact; shell removal, splitting, and kernel or other downstream recovery are outside this PCR.
The pod cleaning and primary conditioning step is the material treatment node; its treated output and all residual destinations are recorded separately.

#### Inputs

##### Product flows

###### Whole groundnuts received for conditioning (`groundnut_conditioning_input`)

Record the incoming lot state, pod residue status, maturity, and mass at the conditioning boundary.

- Selected flow: Peanut `19b26342-ff22-426f-bac3-74cd48cae179`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured lot receipt mass, with whole-pod or pod-retained state declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted conditioning-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_pod_cleaning_conditioning_records`
- Range: Conditioning-input mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 1,400
  - Unit: kg per 1,000 kg accepted conditioning-gate product
  - Basis: received whole-pod lot before pod cleaning and grading losses
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pod cleaning and grading energy (`groundnut_conditioning_energy`)

Record electricity, fuel, or human-powered equipment activity used for pod cleaning, cleaning, grading, and changeover.

- Selected flow: fuel or electricity used for pod cleaning and grading
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
- Collection protocol: `cp_groundnut_energy_records`
- Range: Conditioning-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: MJ per 1,000 kg accepted conditioning-gate product
  - Basis: pod cleaning, cleaning, grading, and optional short stabilization energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Product flows

###### Conditioning water or cleaning service (`groundnut_conditioning_water`)

Record optional cleaning water only when it crosses the foreground boundary. Dry pod cleaning and cleaning may record a justified zero.

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
- Collection protocol: `cp_groundnut_pod_cleaning_conditioning_records`
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

###### Accepted groundnuts in shell (`groundnut_conditioned_accepted_output`)

Record accepted whole or pod-retained groundnuts with shell retained, grade, maturity, pod residue status, and declared gate.
The accepted groundnut lot is the intended output of this conditioning process.

- Selected flow: Peanut `19b26342-ff22-426f-bac3-74cd48cae179`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net accepted lot output excluding tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg declared conditioning-gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_grade_reject_records`
- Range: Accepted conditioning-output guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 700
  - Upper: 1,020
  - Unit: kg per 1,000 kg received conditioning lot
  - Basis: accepted product after pod residue removal, grading, and declared rejects
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Product flows

###### Marketed groundnut pod residue co-product (`groundnut_pod_residue_coproduct`)

Record a pod residue stream only when it is intentionally transferred to a declared recipient; otherwise record it as residue or waste below.

- Selected flow: groundnut pod residue and fibrous biomass
- Flow property / unit: Mass / kg
- Amount rule: measured pod residue mass and declared destination by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioning-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_pod_residue_destination_records`
- Range: Marketed pod residue co-product screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg per 1,000 kg received lot
  - Basis: measured destination-specific pod residue mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Groundnut pod residue and removed biomass (`groundnut_pod_residue_output_or_residue`)

Record removed pod residue and associated fibrous material separately from shell-retained product. A marketed or transferred pod residue stream is an intended co-product; retained, composted, or discarded pod residue is a residue or waste route.

- Selected flow: groundnut pod residue and fibrous residue
- Flow property / unit: Mass / kg
- Amount rule: measured or documented pod residue mass and destination by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioning-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_pod_residue_destination_records`
- Range: Husk-output screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 1,000
  - Unit: kg per 1,000 kg received whole-pod lot
  - Basis: removed pod residue and fibrous material; actual value depends on maturity and incoming state
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded and rejected groundnuts (`groundnut_grade_rejects`)

Record cracked, moldy, insect-damaged, immature, over-mature, contaminated, or otherwise off-spec groundnuts, with rework, recovery, treatment, or disposal destination.

- Selected flow: rejected or downgraded groundnuts in shell
- Flow property / unit: Mass / kg
- Amount rule: measured mutually exclusive grade, downgrade, rework, and reject masses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg received conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_grade_reject_records`
- Range: Reject and downgrade screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg per 1,000 kg received conditioning lot
  - Basis: rejected, downgraded, reworked, or recovered fruit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Conditioning wastewater, dust, and wash solids (`groundnut_conditioning_residuals`)

Record wastewater, dust, soil, fibers, and wash solids only when they cross the boundary or receive treatment; identify receiving medium and fate.

- Selected flow: reported residual substance and receiving medium
- Flow property / unit: Mass / kg substance or waste
- Amount rule: measured residual mass or calculated from batch water and solids balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioning-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_groundnut_pod_cleaning_conditioning_records`
- Range: Conditioning-residual screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg per 1,000 kg accepted conditioning-gate product
  - Basis: wastewater solids, dust, soil, and other residuals crossing the boundary
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Groundnut Storage and Gate Hand-off (`groundnut_storage_and_gate_handoff`)

This process is conditional. Include it when storage, dispatch preparation, or a post-harvest gate is part of the declared foreground boundary.

#### Inputs

##### Product flows

###### Groundnuts received for storage (`groundnut_storage_input`)

Record opening stock or lot receipt, product state, pod residue status, moisture or freshness, grade, and storage start.

- Selected flow: Peanut `19b26342-ff22-426f-bac3-74cd48cae179`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured stock receipt mass excluding tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg declared gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_storage_records`
- Range: Storage-input mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 980
  - Upper: 1,100
  - Unit: kg per 1,000 kg declared gate output
  - Basis: received stock before storage loss and dispatch reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Storage energy (`groundnut_storage_energy`)

Record electricity, fuel, cooling, ventilation, or other storage energy by facility and storage period.

- Selected flow: fuel or electricity used for groundnut storage
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
- Collection protocol: `cp_groundnut_energy_records`
- Range: Storage-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: MJ per 1,000 kg declared gate output
  - Basis: storage, ventilation, cooling, and handling energy for the declared period
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Product flows

###### Storage packaging (`groundnut_storage_packaging`)

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
- Collection protocol: `cp_groundnut_storage_records`
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

###### Accepted groundnuts at declared gate (`groundnut_gate_output`)

Record net dispatched product with the declared whole-pod or pod-retained-with-shell state, grade, freshness or moisture, and gate.

- Selected flow: Peanut `19b26342-ff22-426f-bac3-74cd48cae179`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net dispatch mass excluding tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg declared gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_storage_records`
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

###### Storage loss and damaged product (`groundnut_storage_loss`)

Record spoilage, drying or freshness loss, pests, breakage, and other storage losses with treatment or disposal fate.

- Selected flow: groundnut storage loss or damaged product
- Flow property / unit: Mass / kg
- Amount rule: stock reconciliation and measured damaged or removed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_groundnut_storage_records`
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
| `allocation_01` | crop management and harvest with an intended pod residue output | Prefer process subdivision when crop, harvest, pod cleaning, pod residue collection, and nut records are independently available. When pod residue is deliberately collected and transferred as an intended co-product, allocate shared burdens by measured dry-matter mass; if dry-matter data are unavailable, use measured as-received mass and disclose the limitation. | `iso-14044-2006`; `fao-groundnut-postharvest-operations` |
| `allocation_02` | pod residue retained on site or discarded | If pod residue remains on the field, is composted without an intended product hand-off, or is discarded as residue, do not assign a co-product credit. Retain its mass and fate as residue or waste and assign shared burden to the intended in-shell groundnut output. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_03` | premium, standard, and downgraded in-shell grades | Use physical mass allocation between mutually exclusive accepted grade outputs when common conditioning burdens cannot be subdivided. Grade-specific operations remain with the grade receiving them; do not allocate the same lot to both a grade row and an aggregate output row. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_04` | annual crop periods and phases | Annualize establishment, pre-harvest crop period, replacement, intercropping attribution, and removal over the declared crop cycle and accepted output basis. Link every input and output to a crop year or lifecycle phase; do not count a replacement event in both the original and replacement crop phases. | `fao-groundnut-sustainable-production-2023`; `iso-14044-2006` |
| `allocation_05` | downgraded, reworked, rejected, and recovered lots | Keep rejected and downgraded lots separate from accepted product. Rework retains the producing-node burden and is linked once; recovered or intentionally marketed material requires a declared destination and allocation decision; discarded material receives its declared treatment burden. | `mass-balance-identity`; `iso-14044-2006` |
| `allocation_06` | batch, campaign, and changeover attribution | Link crop, harvest, conditioning, pod cleaning, grading, and storage inputs and outputs to the batch or campaign that generated them. Record cleaning and changeover events once and do not allocate shared-run burdens to more than one batch without a documented driver. | `mass-balance-identity`; `iso-14044-2006` |

The hard shell remains part of the in-shell reference product and is not a separate co-product in this PCR. Kernel, oil, and shell-removal outputs belong to downstream groundnut-product PCRs and must not be introduced into this inventory. No output may be counted both as a marketed pod residue co-product and as field or conditioning residue.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_groundnut_field_lifecycle_records` | `groundnut_field_establishment_and_management` | field asset, land, planting, replacement, intercropping, residue | field and asset register | block area; planting date; cultivar; plant count; replacement; removal; field residue; crop phase; accepted output | block register, field log, and annual reconciliation | ha, item, kg, crop-cycle | event and annual | full declared crop cycle or documented representative period | every contributing field | link block records to crop year and accepted output | signed field register, GIS or survey area, replacement evidence |
| `cp_groundnut_field_input_records` | `groundnut_field_establishment_and_management` | nutrient, amendment, crop protection | input application record | product name; formulation; nutrient content; active ingredient; amount; date; block; purpose; method | invoice, application log, and supplier record | kg product, kg nutrient, kg active ingredient | every application | crop year | every contributing block | aggregate by product, nutrient, block, and crop year | invoice, product label, application log |
| `cp_groundnut_irrigation_records` | `groundnut_field_establishment_and_management` | irrigation and water | irrigation meter or water ledger | source; volume; block; date; meter; water quality; withdrawal and return | meter, pump record, or transparent water balance | m3 or kg | event and monthly | crop year | every irrigated block | reconcile delivery, withdrawal, and declared consumption | meter calibration, pump log, water ledger |
| `cp_groundnut_energy_records` | all field, harvest, conditioning, and storage processes | energy and carrier | fuel, electricity, and equipment record | carrier; amount; equipment; operation; lot or block; date; duration; conversion factor | invoice, meter, fuel log, or equipment record | L, kg, MJ, or kWh | event and monthly | crop year and declared post-harvest period | each operation and facility | aggregate by carrier, operation, lot, and period | invoice, meter, fuel log, equipment specification |
| `cp_groundnut_emission_records` | `groundnut_field_establishment_and_management` | direct and indirect field emissions | emission calculation input record | nutrient input; residue; soil condition; crop-protection record; species; method; factor | calculation workbook linked to raw records | kg substance | annual and event | crop year | every contributing block | retain substance, receiving medium, factor, and source | calculation review, factor version, source citation |
| `cp_groundnut_harvest_lot_records` | `groundnut_harvest_and_collection` | harvest, collection, field loss, residue | harvest-lot register | block; harvest round; maturity; harvested mass; uncollected mass; debris; pod residue status; destination | weighbridge, field scale, and lot log | kg, date, lot | every collection round | harvest season | every contributing block | reconcile available, collected, lost, and residue mass | scale calibration, lot ticket, field inspection |
| `cp_groundnut_pod_cleaning_conditioning_records` | `groundnut_primary_conditioning_and_grading` | pod cleaning, cleaning, water, energy, moisture, batch yield | conditioning batch record | input mass; pod residue status; method; duration; energy; water; output state; output mass; pod residue mass; cleaning loss; wastewater | batch log, meter, scale, moisture or freshness test, and water balance | kg, %, hours, L, kWh | every batch | declared post-harvest period | each conditioning facility or farm unit | link all inputs and outputs to one batch and gate | calibrated scale, batch ticket, freshness or moisture test |
| `cp_groundnut_pod_residue_destination_records` | `groundnut_primary_conditioning_and_grading` | pod residue co-product, residue, or waste | destination and transfer record | pod residue mass; dry matter or moisture; destination; recipient; price or use; fate; transfer date | scale, transfer record, and destination confirmation | kg and declared fraction | every transfer | conditioning period | each pod residue destination | separate intended output from residue and waste | receipt, transfer note, destination evidence |
| `cp_groundnut_grade_reject_records` | `groundnut_primary_conditioning_and_grading` | grade, downgrade, reject, foreign material | inspection and grade record | lot; maturity; pod residue status; shell condition; mold; insects; foreign material; accepted mass; rework; fate | inspection, sampling, and scale record | kg, %, grade code | every lot | declared post-harvest period | each grading point | mutually exclusive grade and reject states | inspection sheet, sample plan, scale calibration |
| `cp_groundnut_storage_records` | `groundnut_storage_and_gate_handoff` | storage input, loss, packaging, gate output | stock and dispatch ledger | opening stock; receipts; lot; product state; moisture or freshness; storage duration; packaging; energy; damage; closing stock; dispatch mass; gate | stock ledger, dispatch ticket, and storage log | kg, %, days, kWh, item | receipt, inspection, and dispatch | declared storage period | each storage facility | opening + receipts = dispatch + closing + loss | stock reconciliation, dispatch ticket, freshness or moisture and pest record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | annual crop inputs | Allocate field establishment, pre-harvest crop period, replacement, intercropping share, and removal over the declared crop-cycle basis and accepted output by crop year. | field register; crop cycle; crop-year output; intercropping driver | annualized field input per reference flow | `fao-groundnut-sustainable-production-2023`; `iso-14044-2006` |
| `calc_02` | every harvest, conditioning, and storage lot | `opening mass + inputs = accepted outputs + pod residue co-product + rejects + residues + measured losses`; investigate any unexplained residual. | lot weights and fates | reconciled mass balance | `mass-balance-identity` |
| `calc_03` | whole-pod to pod-retained lots | `pod-retained mass = whole-pod input mass − measured pod residue and non-product losses`; do not infer pod residue mass from an unrelated average when a lot record exists. | input/output mass; pod residue record; loss record | state- and fate-corrected product mass | `mass-balance-identity`; `fao-groundnut-postharvest-operations` |
| `calc_04` | marketed pod residue co-product | If pod residue is intended and transferred, apply measured dry-matter mass allocation to shared harvest and pod cleaning burdens; if not intended, model residue fate without co-product credit. | groundnut mass; pod residue mass; moisture or dry matter; declared destination | allocated burdens and co-product share | `iso-14044-2006` |
| `calc_05` | grades, downgraded, reworked, and rejected lots | Grade outputs must be mutually exclusive. Accepted output equals input less pod residue, declared downgraded, rework, reject, foreign-material, water-loss, and unexplained-loss terms; rework is linked once. | batch input; grade and reject records | normalized output rows | `mass-balance-identity` |
| `calc_06` | storage | `opening stock + receipts − dispatches − closing stock = measured storage loss`; storage loss is not accepted gate output. | stock ledger; dispatches; closing stock; loss records | storage loss per storage duration | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | flow identity | Use the verified `Groundnuts, in shell` UUID with Mass and kg. Preserve the fresh farm gate or explicitly extended-gate qualifier and do not substitute shelled, split, kernel, or water identities. | platform identity record; dataset metadata |
| `quality_02` | crop and harvest quantities | Use calibrated scales, meters, or transparent documented estimates. Record a justified zero when a route does not use irrigation, wet cleaning, packaging, or storage. | calibration record; field and lot logs |
| `quality_03` | pod residue and product state | Measure or document whole-pod, pod-retained-with-shell, and conditioned states separately. Retain pod residue moisture or dry-matter basis where allocation or conversion uses it. | batch record; scale; moisture or freshness test |
| `quality_04` | completeness | Reconcile field inputs, harvest outputs, pod residue destination, conditioning outputs, rejects, residues, water loss, storage loss, and gate dispatches. | mass-balance workbook; stock ledger |
| `quality_05` | temporal and annual representativeness | Cover the declared crop year and report crop phase, productive age, replacement events, intercropping, abnormal weather, and averaging method. | crop-year register; crop cycle record |
| `quality_06` | co-products and fate | Evidence every intended pod residue hand-off, downgraded destination, rework loop, reject treatment, and residue fate. Do not assign credits to an unverified destination. | transfer note; destination record; treatment record |
| `quality_07` | geography and technology | Disclose country, region, climate, soil, irrigation regime, harvest practice, pod cleaning method, grading method, storage condition, pod residue fate, and gate. | site description; process notes; facility record |
| `quality_08` | uncertainty and estimates | Label provisional ranges as replaceable candidate-stage estimates and replace them with measured or source-backed values before reviewed or published use. | review record; updated foreground dataset |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference flow | Reference product is the verified `Peanut` UUID with Mass and kg. The dataset declares whole-pod or extended pod-retained gate state and does not substitute a shelled or split groundnut. | `codex-groundnut-hygiene-cxc-4-1971` |
| `validation_02` | process map | Every required process is present; conditional pod cleaning, cleaning, grading, and storage processes are present when the declared gate or route requires them. | `fao-groundnut-postharvest-operations` |
| `validation_03` | annual production | Crop establishment, pre-harvest crop period, productive phase, replacement, intercropping attribution, and removal are linked to declared crop years and are not double-counted. | `fao-groundnut-sustainable-production-2023`; `iso-14044-2006` |
| `validation_04` | harvest and collection | Harvested, collected, uncollected, damaged, residue, and accepted groundnut masses are mutually reconciled; maturity and hand-off state are declared. | `mass-balance-identity` |
| `validation_05` | pod cleaning and quality | Whole-fruit input, pod residue, accepted in-shell product, grade, downgraded/rework, reject, foreign material, water loss, and residuals are mutually exclusive and mass-balanced. | `mass-balance-identity`; `fao-groundnut-postharvest-operations` |
| `validation_06` | storage and gate | Opening stock, receipts, dispatches, closing stock, storage damage, product state, storage duration, and gate output reconcile. Storage losses are excluded from accepted output. | `mass-balance-identity`; `fao-groundnut-postharvest-operations` |
| `validation_07` | allocation and rework | Husk allocation, grade allocation, downgraded routes, rework loops, rejected-material treatment, and any intercropping attribution are explicit and no burden or output is counted twice. | `iso-14044-2006` |
| `validation_08` | evidence and disclosure | All important quantitative flows have a foreground collection rule and candidate range or method constraint; estimates, unresolved identities, gate state, pod residue fate, and evidence limitations are disclosed. | `fao-groundnut-postharvest-operations`; `mass-balance-identity` |
| `validation_09` | batch and campaign records | Every harvest round, conditioning batch, grade lot, and storage receipt has a declared boundary, linked inputs and outputs, cleaning or changeover status, and reporting period; shared-run burdens are not counted twice. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` for a reviewed groundnut-in-shell foreground dataset; may be promoted to `background_dataset` only after the required review and publication gates |
| downstream_use | Construction and validation of process and lifecyclemodel projections for groundnuts in shell at the declared fresh farm gate or extended pod-retained, conditioned, or storage gate |
| allowed_use | Field crop management, harvest, collection, pod cleaning, cleaning, grading, storage, and gate modelling when the declared product state, pod residue status, maturity, quality, crop year, geography, and allocation treatment are retained |
| excluded_use | Shell removal, splitting, kernel processing, oil extraction, roasted or otherwise processed groundnut products, shell products, retail products, consumer use, post-gate logistics, and unreported product categories |
| required_metadata | reference UUID; Mass property and Units of mass unit group; CPC 3.0 `01422`; cultivar; geography; crop phase and age; crop year; irrigation; maturity; whole-pod or pod-retained state; pod residue fate; shell and grade quality; accepted, rejected, residue, loss, and storage records |
| required_quality_disclosure | measurement versus estimate; freshness or moisture method; mass-balance completeness; crop-cycle and intercropping allocation; pod residue co-product allocation; rework and reject fate; storage duration; data period; geography; technology; and unresolved identity gaps |
| update_trigger | new crop-year records, material change in crop phase or replacement, change in harvest or pod cleaning technology, new intended pod residue route, changed storage practice, evidence-backed range replacement, or platform identity revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-groundnut-sustainable-production-2023` | official_guidance | FAO family farming, Sustainable production guide of groundnut, COLEAD, https://www.fao.org/family-farming/detail/en/c/1755586/ | climate, soil, nutrition, field establishment, management, harvest, and post-harvest route context |
| `fao-groundnut-postharvest-operations` | handbook | FAO INPhO, Groundnut: Post-harvest Operations, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Groundnut.pdf | fruit structure, pod cleaning, post-harvest operations, product states, storage, and downstream exclusions |
| `codex-groundnut-hygiene-cxc-4-1971` | standard | Codex Alimentarius, Code of Hygienic Practice for Desiccated Groundnut CXC 4-1971, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B4-1971%252FCXC_004e.pdf | definitions of pod residue and shell removal, hygienic handling, and boundary distinctions for downstream groundnut processing |
| `ipcc-2019-afolu` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | managed-soil and agricultural emission calculation method context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://committee.iso.org/standard/38498.html | allocation hierarchy, data quality, boundary, and disclosure rules |
| `mass-balance-identity` | method_factor | Conservation-of-mass method identity for lot reconciliation | harvest, pod cleaning, grading, storage, reject, residue, and water-loss reconciliation |
