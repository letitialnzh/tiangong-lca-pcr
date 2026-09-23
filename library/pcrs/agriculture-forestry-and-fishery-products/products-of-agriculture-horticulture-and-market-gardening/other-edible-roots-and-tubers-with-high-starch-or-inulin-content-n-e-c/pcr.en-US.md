---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-edible-roots-and-tubers-with-high-starch-or-inulin-content-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other edible roots and tubers with high starch or inulin content, n.e.c.

## 1. Scope and Applicability

This PCR covers one explicitly named edible root or tuber species with reliable evidence of a high-starch or high-inulin storage organ that belongs in residual CPC 01599. A dataset may stop at fresh harvest hand-off or include actual curing, storage, sorting and packing before a declared gate.

Each dataset shall declare species, cultivar where material, starch/inulin basis, production system, lot or aggregation rule, fresh/cured/stored state, moisture basis and terminal gate. It shall not aggregate different species or states. Exclusions are cassava, sweet potatoes, yams, taro, yautia, potatoes and all separately named CPC roots/tubers; chicory roots and roots classified elsewhere; standing crops measured by area or area-time; propagules sold for planting; powders, starch, inulin, extracts, dried preparations and manufactured foods.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-edible-roots-and-tubers-with-high-starch-or-inulin-content-n-e-c |
| classification_refs | CPC 3.0: 01599 Other edible roots and tubers with high starch or inulin content, n.e.c. |
| covered_products | one named residual edible root/tuber species with evidence of a high-starch or high-inulin storage organ |
| excluded_products | named CPC roots/tubers; standing crops; propagules; powders; starch/inulin extracts; dried preparations; manufactured foods; mixed-species lots |
| representative_product | one residual starch- or inulin-rich edible root/tuber in the declared fresh, cured or stored state |
| production_route | planting and managed production, lifting, gentle handling, sorting, and conditional curing, storage and packing |
| market_state | fresh at harvest hand-off or cured/stored and accepted at the declared primary-conditioning gate |

Routes may coexist in the category, but one dataset selects one actual route and terminal state. Technologies with materially different inputs, losses or gates remain separate.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | one declared residual edible starch- or inulin-rich root/tuber species at the selected terminal gate |
| How much | 1,000 kg as-received accepted product |
| How well | species, cultivar where material, starch/inulin eligibility evidence, origin, production system, harvest period, lot, skin/soil condition, fresh/cured/stored state, moisture basis, grade, package form and gate declared |
| How long or cycle | one crop cycle plus only declared post-harvest batches and storage before the gate |
| reference_flow_link | `harvested_root_tuber_output`, `stored_root_tuber_output`, or `reference_product_output` according to gate |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Unresolved: no category-compatible harvested CPC 01599 mass flow was confirmed |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar where material; starch/inulin evidence; origin; production system; crop cycle; lot; state; moisture basis; grade; package; gate; included operations |

Do not bind a standing chicory crop expressed in area-time or manufactured Cordyceps powder. Resolve a compatible harvested mass flow before active status or process publication.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | terminal accepted product | Mass | kg | Report as-received mass, moisture and state; retain dry-matter conversion separately. |
| `species_eligibility` | reference identity | composition/classification evidence | descriptive record | Preserve evidence that the edible organ is starch/inulin-rich and not separately named in CPC. |
| `area_to_reference_conversion` | crop production | activity-specific property | activity-specific unit | Normalize crop-cycle field totals to matched accepted terminal mass. |
| `nutrient_content_basis` | nutrients | nutrient mass | kg N, kg P2O5, kg K2O | Preserve product quantity, formulation, assay and elemental/oxide basis. |
| `batch_mass_balance` | lifting, storage, sorting, packing | Mass | kg | Reconcile accepted, downgraded, rejected, soil/foreign matter, decay and moisture loss; evaporated water is not solid waste. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared production area at planting; planting material and attributable shared infrastructure cross the boundary |
| starting_condition_role | start of one declared crop cycle |
| product_classification_scope | one named residual edible starch/inulin-rich root/tuber species in CPC 01599 |
| recursive_input_rule | same-category product from another operator links to its upstream dataset and is not recreated |
| upstream_dataset_requirement | compatible planting, nutrient, crop-protection, irrigation, energy, packaging and waste-treatment datasets |
| disclosure | species and eligibility, geography, production system, cycle, area, yield, state, moisture, gate, route activation, storage duration, lots, rejects, packaging and shared assets |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_residual_identity` | all routes | Include exactly one named edible residual species and document starch/inulin and CPC eligibility. |  |
| `boundary_crop_cycle` | production | Include planting, soil preparation, nutrients, crop protection, irrigation, energy, lifting and direct emissions for the declared crop. |  |
| `boundary_postharvest` | conditioned route | Include only actual curing, cleaning, storage, sorting and packing before gate; preserve matched lots and moisture states. | `fao-root-tuber-postharvest` `fao-root-tuber-storage` |
| `boundary_downstream_exclusion` | all routes | Stop before milling, manufacturing slices, drying into preparations, starch/inulin extraction, food manufacture, distribution and retail. |  |
| `boundary_direct_emissions` | soil and on-site combustion | Calculate from the same nutrient, residue and fuel records used in inventory. | `ipcc-2019-managed-soils` `emep-eea-2023-guidebook` `ipcc-2006-stationary-combustion` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_production_lifting` | Managed production, lifting and harvest hand-off | `required` | always | produce and lift the declared edible storage organ | cultivated area and one crop cycle |
| `curing_storage` | Curing and storage | `conditional` | curing or storage occurs before the declared gate | stabilize and hold matched lots | incoming/outgoing lot mass and storage time |
| `sorting_packing` | Sorting, grading and packing | `conditional` | sorting, grading or packing occurs before the declared gate | prepare accepted terminal product | matched incoming, accepted and rejected masses |

### Process: Managed production, lifting and harvest hand-off (`managed_production_lifting`)

#### Inputs

##### Product flows

###### Species-specific planting material (`planting_material_input`)

Collect and reconcile species-specific planting material, retaining the identity, state, origin and destination required by this card.

- Selected flow: Propagules or planting stock for the declared species
- Flow property / unit: Mass or number / kg or item
- Amount rule: measure purchased and saved material separately
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: fresh planting material for one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5000
  - Unit: kg/ha·crop
  - Basis: fresh planting material for one crop cycle
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

###### Agricultural nutrient and fertilizer inputs (`agricultural_nutrient_inputs`)

Collect and reconcile agricultural nutrient and fertilizer inputs, retaining the identity, state, origin and destination required by this card.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product and nutrient quantity / kg product, m3 product, kg N, kg P2O5, kg K2O
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: collect every mineral, organic and nutrient-bearing amendment once and preserve identity and assay
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: declared nutrient quantities, not fertilizer product mass
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1200
  - Unit: kg N+P2O5+K2O/ha·crop
  - Basis: declared nutrient quantities, not fertilizer product mass
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

###### Irrigation water (`irrigation_water_input`)

Collect and reconcile irrigation water, retaining the identity, state, origin and destination required by this card.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: meter or calculate applied water; rainfed systems record zero with evidence
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: applied irrigation excluding effective rainfall
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha·crop
  - Basis: applied irrigation excluding effective rainfall
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

###### Field machinery energy (`field_energy_input`)

Collect and reconcile field machinery energy, retaining the identity, state, origin and destination required by this card.

- Selected flow: Energy supply for cultivation and lifting machinery
- Flow property / unit: Carrier quantity or energy / kg, L, m3, kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: record actual carrier and operation
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: actual carrier remains explicit
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 800
  - Unit: L diesel-equivalent/ha·crop
  - Basis: actual carrier remains explicit
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

###### Crop-protection formulations (`crop_protection_input`)

Collect and reconcile crop-protection formulations, retaining the identity, state, origin and destination required by this card.

- Selected flow: Crop-protection formulation used for the declared species
- Flow property / unit: Mass / kg formulation
- Amount rule: measure by formulation, active ingredient and event
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: all identities retained before summing
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg formulation/ha·crop
  - Basis: all identities retained before summing
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested residual root or tuber (`harvested_root_tuber_output`)

Collect and reconcile harvested residual root or tuber, retaining the identity, state, origin and destination required by this card.

- Selected flow: Unresolved harvested root/tuber of the declared species
- Flow property / unit: Mass / kg
- Amount rule: measure accepted lifted mass with soil, damage, state and moisture recorded
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: as-harvested accepted storage organs
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 500
  - Upper: 100000
  - Unit: kg/ha·crop
  - Basis: as-harvested accepted storage organs
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Field residues, damaged organs and adhered soil (`field_residue_output`)

Collect and reconcile field residues, damaged organs and adhered soil, retaining the identity, state, origin and destination required by this card.

- Selected flow: Field residues and harvest rejects by material and destination
- Flow property / unit: Mass / kg
- Amount rule: measure crop biomass, damaged organs and returned soil separately
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: all classes retained separately by fate
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 3000
  - Unit: kg/1,000 kg accepted harvest
  - Basis: all classes retained separately by fate
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Managed-soil nitrogen emissions (`soil_n_emissions_output`)

Collect and reconcile managed-soil nitrogen emissions, retaining the identity, state, origin and destination required by this card.

- Selected flow: Nitrogen emission species to applicable compartments
- Flow property / unit: Mass / kg substance
- Amount rule: calculate each substance separately from reconciled nutrient and field records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: each substance and compartment remains separate
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils` `emep-eea-2023-guidebook`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 2000
  - Unit: kg reported substance/ha·crop
  - Basis: each substance and compartment remains separate
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

### Process: Curing and storage (`curing_storage`)

#### Inputs

##### Product flows

###### Harvested product entering curing or storage (`storage_product_input`)

Collect and reconcile harvested product entering curing or storage, retaining the identity, state, origin and destination required by this card.

- Selected flow: Unresolved harvested root/tuber of the declared species
- Flow property / unit: Mass / kg
- Amount rule: measure incoming lot with state, damage and moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: matched lot at recorded moisture states
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 2
  - Unit: kg incoming/kg accepted output
  - Basis: matched lot at recorded moisture states
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Curing and storage energy (`storage_energy_input`)

Collect and reconcile curing and storage energy, retaining the identity, state, origin and destination required by this card.

- Selected flow: Energy supply for ventilation, temperature control and handling
- Flow property / unit: Carrier quantity or energy / kWh, MJ, kg, L or m3
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter by lot and interval; passive storage records zero
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: actual carrier and duration declared
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/1,000 kg accepted output
  - Basis: actual carrier and duration declared
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Curing or cleaning water (`storage_water_input`)

Collect and reconcile curing or cleaning water, retaining the identity, state, origin and destination required by this card.

- Selected flow: Process water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter supplied water; dry routes record zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: zero where water is not used
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg accepted output
  - Basis: zero where water is not used
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cured or stored accepted product (`stored_root_tuber_output`)

Collect and reconcile cured or stored accepted product, retaining the identity, state, origin and destination required by this card.

- Selected flow: Unresolved cured or stored root/tuber of the declared species
- Flow property / unit: Mass / kg
- Amount rule: measure accepted output with duration, state and moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: matched lot with moisture and interval declared
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Sources: `fao-root-tuber-postharvest` `fao-root-tuber-storage`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0.5
  - Upper: 1
  - Unit: kg accepted/kg incoming
  - Basis: matched lot with moisture and interval declared
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Storage losses and rejects (`storage_loss_output`)

Collect and reconcile storage losses and rejects, retaining the identity, state, origin and destination required by this card.

- Selected flow: Decayed, sprouted, damaged or rejected product by fate
- Flow property / unit: Mass / kg
- Amount rule: measure removals and reconcile opening and closing stock
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: physical rejects; moisture loss separate
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kg/1,000 kg incoming
  - Basis: physical rejects; moisture loss separate
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Fossil carbon dioxide from on-site energy (`storage_fossil_co2_output`)

Collect and reconcile fossil carbon dioxide from on-site energy, retaining the identity, state, origin and destination required by this card.

- Selected flow: Fossil carbon dioxide to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg CO2
- Binding: `fixed`
- Amount rule: calculate from actual fossil fuel; zero without on-site combustion
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: only on-site fossil combustion
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Sources: `ipcc-2006-stationary-combustion`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg CO2/1,000 kg accepted output
  - Basis: only on-site fossil combustion
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

### Process: Sorting, grading and packing (`sorting_packing`)

#### Inputs

##### Product flows

###### Product lot entering sorting (`sorting_product_input`)

Collect and reconcile product lot entering sorting, retaining the identity, state, origin and destination required by this card.

- Selected flow: Declared fresh, cured or stored root/tuber lot
- Flow property / unit: Mass / kg
- Amount rule: measure incoming mass with state, moisture and source lot
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: matched sorting run
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 2
  - Unit: kg incoming/kg accepted terminal product
  - Basis: matched sorting run
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Sorting and packing energy (`packing_energy_input`)

Collect and reconcile sorting and packing energy, retaining the identity, state, origin and destination required by this card.

- Selected flow: Energy supply for sorting, grading and packing
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter or allocate energy by run
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: actual energy carriers retained
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 2000
  - Unit: MJ/1,000 kg accepted product
  - Basis: actual energy carriers retained
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Product packaging (`packaging_input`)

Collect and reconcile product packaging, retaining the identity, state, origin and destination required by this card.

- Selected flow: Packaging required for the declared hand-off
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: measure packaging by material, function and return rate
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: net attributable packaging after reuse
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg packaging/1,000 kg accepted product
  - Basis: net attributable packaging after reuse
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted terminal root/tuber product (`reference_product_output`)

Collect and reconcile accepted terminal root/tuber product, retaining the identity, state, origin and destination required by this card.

- Selected flow: Unresolved residual edible high-starch or high-inulin root/tuber of the declared species
- Flow property / unit: Mass / kg
- Amount rule: exactly 1,000 kg accepted product at declared state, moisture and gate
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: accepted as-received terminal product
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`
- Sources: `mass-balance-identity`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: accepted as-received terminal product
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Sorting rejects and foreign matter (`sorting_reject_output`)

Collect and reconcile sorting rejects and foreign matter, retaining the identity, state, origin and destination required by this card.

- Selected flow: Off-grade, damaged or contaminated organs and foreign matter by fate
- Flow property / unit: Mass / kg
- Amount rule: measure separately from useful downgraded product and rework
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: rejects only; useful downgrade remains product
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kg/1,000 kg incoming
  - Basis: rejects only; useful downgrade remains product
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_crop_outputs` | production | Use physical subdivision first; report useful secondary outputs and apply a justified consistent allocation when inseparable. |  |
| `allocation_grades` | sorting | Keep accepted grades and useful downgraded output as products; do not call useful output waste to avoid allocation. |  |
| `allocation_residues` | residues | No credit when discarded without function; if sold or used, disclose destination and use reviewed allocation or a separate substitution scenario. |  |
| `allocation_shared_assets` | shared assets | Allocate by measured operating time, area-time, volume-time or throughput and prevent duplicate attribution. |  |
| `allocation_rework` | rework | Return rework to its originating lot, count added burdens/losses once, and count output only after acceptance. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_inputs` | `managed_production_lifting` | planting, nutrients, water, crop protection, energy | invoices, field logs, meters, contractor records | species, cultivar, field, area, dates, input identity, formulation, assay, amount, unit, carrier, operation | reconcile purchases, saved material and applications to fields | native units plus ha | each event | complete crop cycle | every included field and shared service | sum by field/input, allocate shared use causally, divide by matched terminal output | invoices, application logs, meters, field map, contractor evidence |
| `cp_harvest_lots` | `managed_production_lifting` | lifting, accepted harvest, residues and soil | weigh tickets, harvest logs, sampling | species, field, date, gross/tare, accepted mass, moisture, soil, damage, residue/reject class, fate, lot | calibrated weighing and representative inspection/moisture sampling | kg, %, ha | each lot | complete lifting period | every included field and collection point | sum by lot/class; retain state and fate | calibration, lot identifiers, photographs/inspection, moisture/destination records |
| `cp_field_emissions` | `managed_production_lifting` | managed-soil emissions | calculated foreground record | N by form, residue N, soil/climate, factor version, substance, compartment | apply documented method to reconciled field inputs | kg substance | each crop cycle | same cycle and stated method lag | every managed field | calculate by field then output-mass-weight | method source, workbook, input reconciliation, review |
| `cp_storage_lots` | `curing_storage` | curing, storage, losses, energy, water | lot sheets, scales, meters, condition logs | species, lot, opening/closing mass, moisture, damage, method, time, temperature, humidity, ventilation, water, energy, rejects, fate | matched-lot measurement and stock reconciliation | kg, %, day, m3, kWh, MJ | each lot and condition interval | complete declared interval | every store, curing area and utility meter | reconcile opening, receipts, dispatch, accepted mass, rejects and moisture by lot | calibration, condition logger, lot chain, stocktake, destinations |
| `cp_sorting_runs` | `sorting_packing` | sorting, grades, rework, packing, rejects | run sheets, scales, package records, meters | species, lot, state, incoming mass, grade criteria, accepted/downgraded/reject mass, rework, packaging material/mass/reuse, energy, gate | matched-run mass balance and package-count reconciliation | kg, item, kWh | each run or lot | all represented runs | every included line and shared asset | sum by grade/destination; allocate shared runs by throughput | calibration, inspection, package specification, run/lot linkage, closure check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_normalization` | crop-cycle flows | field total / terminal accepted mass from same crop × 1,000 | field amount; matched accepted mass | amount per 1,000 kg reference product |  |
| `calc_batch_balance` | storage and sorting | opening/incoming + receipts = accepted + downgraded + rejects + dispatch/closing stock + moisture change ± closure error | matched masses and moisture | reconciled inventory | `mass-balance-identity` |
| `calc_dry_matter` | moisture conversion | as-received mass × (1 − wet-basis moisture fraction) | mass; moisture | dry matter mass | `mass-balance-identity` |
| `calc_combustion_co2` | on-site fuel | fuel quantity × applicable calorific, carbon and oxidation factors | carrier; factors | kg fossil CO2 | `ipcc-2006-stationary-combustion` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Name species/state and retain reliable high-starch/inulin and residual CPC eligibility evidence. | botanical/product specification, composition source, classification review, lot record |
| `dq_completeness` | all nodes | Reconcile fields, inputs, harvest lots, stocks, sorting, losses, packaging and destinations. | completeness checklist and balances |
| `dq_temporal` | crop and storage | Keep one crop and matched post-harvest lots; disclose storage duration and averaging. | dated field, lot and stock records |
| `dq_measurement` | mass, moisture, conditions | Use calibrated scales and documented representative moisture/condition measurement. | calibration, sampling and logger records |
| `dq_route` | conditional nodes | Include only actual curing, storage, sorting and packing; disclose inactive nodes and gate. | route statement, process map and records |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_residual_identity` | reference product | Reject unless one species, starch/inulin evidence, CPC 01599 eligibility, state and gate are declared. | error |
| `validate_exclusions` | reference product | Reject named CPC roots/tubers, standing crops, propagules, powders, extracts and manufactured products. | error |
| `validate_reference_identity` | reference product | UUID may remain blank at candidate stage; active status and process publication require a compatible detail-confirmed harvested mass flow. | error |
| `validate_reference_mass` | terminal output | Accepted terminal output equals 1,000 kg as received and excludes rejects and unaccepted rework. | error |
| `validate_route_activation` | conditional nodes | Burdens are zero/absent when inactive and require matched records when active. | error |
| `validate_nutrient_binding` | crop nutrients | At most one nutrient card occurs in production; it uses set-level `flow-set.agricultural-nutrient-supply` 0.3.0 without group or fixed UUID. | error |
| `validate_mass_balance` | harvest, storage, sorting | Reconcile accepted, downgraded, rejected, foreign matter, stock and moisture terms and disclose closure error. | error |
| `validate_ranges` | all cards | Review range exceptions; provisional screens do not replace foreground evidence or impose limits. | warning |
| `validate_flow_resolution` | inventory | Resolve parameterized and unresolved cards to verified concrete UUIDs before process publication. | error |
| `validate_shared_rework` | shared assets and rework | Reject duplicate counting of shared services or reworked product. | error |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground system for one named residual edible starch/inulin-rich root/tuber species |
| downstream_use | `secondary_dataset`; `background_dataset` only when species, route, state, geography and gate fit |
| allowed_use | within declared species, production system, cycle, state, storage interval, technology, geography and gate |
| excluded_use | species-neutral residual averages; named CPC products; standing crops; propagules; powders; extracts; manufactured foods; substitution across fresh/cured/stored gates |
| required_metadata | species/cultivar, composition and CPC eligibility, origin, system, cycle, area, lot, state, moisture, grade, gate, nodes, duration, packaging, allocation and identity resolution |
| required_quality_disclosure | completeness, measurement, missing data, range exceptions, balance closure, shared assets, rework, allocation and unresolved identities |
| update_trigger | species/category correction, gate/route/technology change, new records, revised factors, material yield/loss change or verified identity change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-root-tuber-postharvest` | official_guidance | FAO, https://www.fao.org/4/y4358e/y4358e05.htm | gentle harvest, handling, curing, deterioration and route design |
| `fao-root-tuber-storage` | official_guidance | FAO, https://www.fao.org/4/x5415e/x5415e03.htm | storage conditions, stock control and loss records |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil nitrogen emissions |
| `emep-eea-2023-guidebook` | method_factor | EEA EMEP/EEA 2023, https://www.eea.europa.eu/publications/emep-eea-guidebook-2023 | agricultural ammonia |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC 2006, Volume 2 Chapter 2, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | on-site combustion CO2 |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to matched foreground records | batch reconciliation and exact reference output |
