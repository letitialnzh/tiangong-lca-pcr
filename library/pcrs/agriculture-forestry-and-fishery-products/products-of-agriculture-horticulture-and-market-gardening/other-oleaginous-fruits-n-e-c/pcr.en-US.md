---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oleaginous-fruits-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other oleaginous fruits, n.e.c.

## 1. Scope and Applicability

This PCR covers one explicitly declared residual oleaginous-fruit species classified in CPC 01499 and delivered fresh at a harvest or farm hand-off. Each dataset shall declare species, cultivar where material, annual or perennial system, geography, harvest period, maturity, moisture state, grade, lot rule, packaging form, and gate. The residual category shall not aggregate different species or product states.

Products with their own named CPC leaf are excluded, as are oil extraction, pressing, refining, drying into a storable commodity, food or chemical manufacture, distribution, and retail. Perennial and annual routes may coexist, but one dataset selects one actual route. Cooling, washing, sorting, short holding, and packaging enter only when they occur before the farm hand-off.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oleaginous-fruits-n-e-c |
| classification_refs | CPC 3.0: 01499 Other oleaginous fruits, n.e.c. |
| covered_products | one named residual oleaginous-fruit species delivered fresh at the declared farm harvest hand-off |
| excluded_products | products with a named CPC leaf; mixed species; extracted or refined oils and manufactured products; distribution and retail |
| representative_product | fresh fruit of one named residual oleaginous species |
| production_route | managed annual or perennial production and harvest, with conditional sorting, prompt stabilization, and packing |
| market_state | fresh product with declared maturity, moisture, grade, and packaging at harvest/farm gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | accepted fresh product of one named residual oleaginous-fruit species |
| How much | 1,000 kg as-received accepted product |
| How well | species, cultivar where material, origin, production system, harvest period, maturity, moisture, grade, lot, packaging, and gate declared |
| How long or cycle | one declared harvest period, including matched establishment and replacement attribution for perennial systems |
| reference_flow_link | `harvested_fruit_output`, `conditioned_fruit_output`, or `reference_product_output` according to the declared terminal gate |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other oleaginous fruits, n.e.c. `d72a964f-f916-4c72-9f53-6a1126f1ecac` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar where material; annual or perennial system; origin; harvest period; maturity; moisture and basis; grade; lot rule; packaging; gate; included operations |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `fresh_mass_basis` | all fruit flows | Mass | kg | Report as-received fresh mass and record moisture with its basis. |
| `species_state_identity` | product and intermediate flows | Mass | kg | Preserve species, maturity, moisture, grade, and batch identity at every node. |
| `period_normalization` | managed production | activity-specific property | activity-specific unit | Normalize productive-area and cross-period inputs to the same declared harvest period and accepted mass. |
| `nutrient_basis` | nutrient inputs | nutrient mass | kg N, kg P2O5, kg K2O | Preserve product mass, formulation, assay, and elemental or oxide basis separately. |
| `batch_balance` | sorting, stabilization, and packing | Mass | kg | Reconcile inputs, accepted grades, downgraded product, rejects, and losses; do not count evaporated water as waste. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | productive field or orchard at period start; perennial routes include annualized establishment and replacement |
| starting_condition_role | production start for the declared harvest period |
| product_classification_scope | one named residual oleaginous-fruit species classified in CPC 01499 |
| recursive_input_rule | purchased same-category fresh fruit links to a separate upstream dataset at its actual state and gate and is not re-created here |
| upstream_dataset_requirement | compatible datasets for planting material, nutrients, crop protection, irrigation, energy, packaging, and external waste treatment |
| disclosure | species; system; geography; area; stand age where applicable; harvest period; yield; maturity; moisture; grade; gate; batches; packaging; rejects; shared assets; attribution |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_single_species` | all routes | Represent exactly one named residual species and one fresh state per dataset; do not aggregate heterogeneous species. |  |
| `boundary_productive_period` | production route | Include managed production, harvest, direct emissions, and applicable annualized establishment and replacement burdens for the declared harvest period. |  |
| `boundary_postharvest` | conditional route | Include only actual washing, sorting, prompt cooling or short stabilization, and packing before the declared gate. | `fao-postharvest-horticulture` |
| `boundary_extraction_exclusion` | all routes | Stop before oil extraction, pressing, refining, commodity drying, manufacture, distribution, and retail. |  |
| `boundary_direct_emissions` | managed soil | Calculate direct and relevant indirect emissions from the same nutrient and residue records using the declared method. | `ipcc-2019-managed-soils` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_production_harvest` | Managed production and harvest | `required` | always | managed annual or perennial production and harvest | productive area and declared harvest period |
| `sorting_stabilization` | Sorting and prompt stabilization | `conditional` | sorting, cleaning, cooling, short holding, or stabilization occurs before the gate | separate accepted grade, downgrade, reject, and loss states | matched incoming and outgoing batches |
| `packing_handoff` | Packing and farm-gate hand-off | `conditional` | packaging or presentation occurs before the declared gate | prepare the declared fresh product for hand-off | matched packed lot and packaging records |

### Process: Managed production and harvest (`managed_production_harvest`)

#### Inputs

##### Product flows

###### Planting and replacement material (`planting_material_input`)

Record planting and replacement material at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Species-specific seed, seedling, cutting or grafted plant
- Flow property / unit: Mass or number / kg or item
- Amount rule: record actual material by species, age, source, and establishment or replacement purpose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: annualized establishment and replacement material
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2500
  - Unit: items/ha·year
  - Basis: annualized establishment and replacement material
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`agricultural_nutrient_inputs`)

Record agricultural nutrient and fertilizer inputs at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product and nutrient quantity / kg product, m3 product, kg N, kg P2O5, kg K2O
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: collect every mineral fertilizer, organic fertilizer, and nutrient amendment once; preserve product and assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: sum of separately retained N, P2O5 and K2O quantities; do not merge nutrient bases
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kg nutrient/ha·year
  - Basis: sum of separately retained N, P2O5 and K2O quantities; do not merge nutrient bases
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water_input`)

Record irrigation water at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: meter or calculate applied irrigation water; rainfed systems record zero with evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: water applied to productive area in the declared period
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha·year
  - Basis: water applied to productive area in the declared period
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field and harvest energy (`field_energy_input`)

Record field and harvest energy at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Energy carriers for field machinery, pumping and harvest
- Flow property / unit: Carrier quantity or energy / kg, L, m3, kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record each actual carrier and attributable contractor use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: actual energy supplied to productive and harvest operations
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: MJ/ha·year
  - Basis: actual energy supplied to productive and harvest operations
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulations (`crop_protection_input`)

Record crop-protection formulations at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Declared crop-protection formulations
- Flow property / unit: Mass of formulation / kg
- Amount rule: record formulation, active ingredient, concentration and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: all formulations retained by identity before any total
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg formulation/ha·year
  - Basis: all formulations retained by identity before any total
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Harvested fresh oleaginous fruit (`harvested_fruit_output`)

Record harvested fresh oleaginous fruit at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Other oleaginous fruits, n.e.c. `d72a964f-f916-4c72-9f53-6a1126f1ecac`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measure accepted fresh harvest mass with species, maturity, moisture, grade and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: fresh accepted harvest from the declared productive area
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 50000
  - Unit: kg/ha·harvest period
  - Basis: fresh accepted harvest from the declared productive area
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Field residues and harvest rejects (`field_residue_output`)

Record field residues and harvest rejects at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Prunings, incidental biomass, fallen fruit and harvest rejects by fate
- Flow property / unit: Mass / kg
- Amount rule: measure or reconcile each residue class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: all non-product biomass and rejects; no accepted fruit
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg/1,000 kg accepted fruit
  - Basis: all non-product biomass and rejects; no accepted fruit
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

###### Managed-soil nitrogen emissions (`soil_nitrogen_emissions`)

Record managed-soil nitrogen emissions at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Declared nitrogen species to the receiving air or water compartment
- Flow property / unit: Mass / kg substance
- Amount rule: calculate each reported species from the same nutrient and residue records using a declared method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: broad screen; actual method and receiving compartment govern
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_calculation`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg substance/ha·year
  - Basis: broad screen; actual method and receiving compartment govern
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Sorting and prompt stabilization (`sorting_stabilization`)

#### Inputs

##### Product flows

###### Incoming fresh fruit batch (`incoming_fruit_input`)

Record incoming fresh fruit batch at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Harvested fresh residual oleaginous fruit with declared species and state
- Flow property / unit: Mass / kg
- Amount rule: measure incoming batch mass, maturity, moisture, temperature and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: matched batch before sorting or stabilization
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg incoming/kg accepted output
  - Basis: matched batch before sorting or stabilization
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and conditioning water (`conditioning_water_input`)

Record cleaning and conditioning water at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Process water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter water used for washing or conditioning; dry routes record zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: zero when water-using route is inactive
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg accepted output
  - Basis: zero when water-using route is inactive
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorting, cooling and holding energy (`conditioning_energy_input`)

Record sorting, cooling and holding energy at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Energy supply for actual conditioning equipment
- Flow property / unit: Carrier quantity or energy / kWh, MJ, kg, L or m3
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: record actual electricity, fuel or purchased cooling by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: route-conditional energy before farm-gate hand-off
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ/1,000 kg accepted output
  - Basis: route-conditional energy before farm-gate hand-off
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Sorted fresh oleaginous fruit (`conditioned_fruit_output`)

Record sorted fresh oleaginous fruit at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Other oleaginous fruits, n.e.c. `d72a964f-f916-4c72-9f53-6a1126f1ecac`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measure accepted fresh output by grade; no extraction, drying-to-commodity, or manufacture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: matched fresh batch after sorting and prompt stabilization
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg accepted/kg incoming fresh fruit
  - Basis: matched fresh batch after sorting and prompt stabilization
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Sorting rejects and removed material (`sorting_reject_output`)

Record sorting rejects and removed material at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Spoiled fruit, foreign matter and removed biological material by fate
- Flow property / unit: Mass / kg
- Amount rule: measure each reject class and destination; exclude evaporated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: matched sorting mass balance
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg/1,000 kg incoming fruit
  - Basis: matched sorting mass balance
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning wastewater (`conditioning_wastewater_output`)

Record conditioning wastewater at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Wastewater from washing or wet conditioning
- Flow property / unit: Volume / m3
- Amount rule: meter or calculate discharge and record destination and treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: zero for dry routes
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg accepted output
  - Basis: zero for dry routes
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows


### Process: Packing and farm-gate hand-off (`packing_handoff`)

#### Inputs

##### Product flows

###### Accepted fresh fruit for packing (`packing_fruit_input`)

Record accepted fresh fruit for packing at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Accepted declared residual oleaginous fruit
- Flow property / unit: Mass / kg
- Amount rule: measure matched accepted mass entering packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: allows only documented packing loss
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_lot`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.1
  - Unit: kg/kg packed product
  - Basis: allows only documented packing loss
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary and secondary packaging (`packaging_input`)

Record primary and secondary packaging at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Packaging materials by material, mass, reuse and recycled-content status
- Flow property / unit: Mass or number / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: record actual materials, accessories, reuse cycles and losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: all one-way packaging plus attributed reusable-packaging loss
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_lot`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg/1,000 kg packed product
  - Basis: all one-way packaging plus attributed reusable-packaging loss
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Fresh product at declared farm gate (`reference_product_output`)

Record fresh product at declared farm gate at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Other oleaginous fruits, n.e.c. `d72a964f-f916-4c72-9f53-6a1126f1ecac`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measure accepted packed or bulk mass at hand-off with all required qualifiers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: exact reference amount after grade and state acceptance
- Basis kind: 参考流 (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_lot`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg/reference flow
  - Basis: exact reference amount after grade and state acceptance
  - Basis kind: 参考流 (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Packing rejects and packaging losses (`packing_waste_output`)

Record packing rejects and packaging losses at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Fruit rejected during packing and packaging scrap by material and fate
- Flow property / unit: Mass / kg
- Amount rule: measure separately and prevent return or rework from double counting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: fruit and packaging streams remain separate
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_lot`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg packed product
  - Basis: fruit and packaging streams remain separate
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_period` | perennial production | Attribute establishment, immature years, and replacement burdens across an evidenced productive life to the declared harvest period; do not repeat them in annual records. |  |
| `allocation_grade` | sorted outputs | Only the accepted declared grade is a product; downgraded and rejected material is recorded by destination as waste and receives no upstream burden. |  |
| `allocation_residue` | residues and rejects | Waste receives no upstream burden; an output with revenue or substitution function requires declared product identity, destination, and allocation choice. |  |
| `allocation_shared_assets` | shared infrastructure | Attribute irrigation, equipment, cooling, and packing assets once using recorded area, machine time, mass, or another causal driver. |  |
| `allocation_rework` | rework and returns | Attribute the rework loop to its producing node and do not count returned material again as new input. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_production_inputs` | `managed_production_harvest` | annual inputs | invoice, operation, and meter records | species; area; product; quantity; nutrient assay; energy carrier; water; date | reconcile purchasing, storage, and field logs to declared area | native units plus kg, m3, MJ | each event and period total | complete declared harvest period | every included field or orchard | sum by species and harvest period; normalize to accepted fresh fruit | invoices, meters, operation logs, calibration, inventory reconciliation |
| `cp_harvest_records` | `managed_production_harvest` | harvest and residues | batch weights and field logs | batch; mass; species; maturity; moisture; grade; reject class; destination | calibrated weighing reconciled with area and container records | kg | every harvest batch | complete harvest window | all included harvest points | sum batches while retaining species and state | weigh tickets, scale calibration, batch and destination records |
| `cp_emission_calculation` | `managed_production_harvest` | direct emissions | calculation record | N inputs; residues; soil and climate; factor; receiving compartment | apply declared method version to the same input records | kg substance | each harvest period | same period as production inputs | all included productive area | calculate each substance and compartment separately | method version, input trace, factor source, reproducible calculation |
| `cp_conditioning_batch` | `sorting_stabilization` | sorting and stabilization | matched batch record | input and output mass; grade; temperature; moisture; water; energy; rejects; wastewater; time | batch weighing, metering, and mass balance | kg, m3, kWh, MJ | each batch | all included conditioning batches | declared farm or primary site | match incoming and outgoing batch; keep wet and dry routes separate | scale and meter calibration, batch sheet, signed mass balance |
| `cp_packing_lot` | `packing_handoff` | packing and hand-off | packing lot and delivery records | fruit mass; material; accessories; reuse count; scrap; grade; gate | reconcile issues, weights, and delivery ticket by lot | kg or item | each packing lot | all included hand-off lots | every included packing point | aggregate by material and lot; attribute reusable packaging by actual loss | bill of materials, weigh ticket, delivery ticket, inventory reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all nodes | node amount × 1000 / accepted fresh mass at declared gate | node amount; accepted fresh mass | amount per 1,000 kg reference product |  |
| `calc_perennial_attribution` | perennial route | establishment or replacement total × declared period share | establishment; replacement; productive life; attribution method | amount attributed to declared harvest period |  |
| `calc_batch_balance` | sorting and packing | incoming mass = accepted + downgraded + rejected + documented loss | matched inputs and outputs | balance difference and flows |  |
| `calc_soil_emissions` | soil emissions | declared method applied to source-specific nutrients and residues | nutrients; residues; factors; compartments | mass of each specific emission | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all product flows | Species, production system, fresh state, maturity, moisture, grade, lot, and gate are complete and consistent. | batch and delivery records |
| `dq_completeness` | all nodes | Mass, energy, water, nutrients, packaging, rejects, and direct emissions cover the declared period and every included site. | completeness reconciliation and mass balance |
| `dq_temporal` | all nodes | Production inputs, harvest, and conditioning batches come from the same or explicitly aligned harvest period. | dated records and attribution schedule |
| `dq_route` | conditional nodes | Inactive treatment is evidenced and recorded as zero; oil extraction or manufacture is absent from the fresh-product boundary. | route map, equipment, and batch records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | dataset | Declare one named residual species, one production system, one fresh state, grade, and farm/harvest gate. |  |
| `validate_reference` | reference product | Reference output equals exactly 1,000 kg accepted fresh product with all required qualifiers. |  |
| `validate_boundary` | all routes | Fail when oil extraction, refining, manufacture, distribution, or retail is included. |  |
| `validate_period` | perennial route | Establishment, immature period, replacement, and shared assets have one auditable cross-period attribution. |  |
| `validate_balance` | sorting and packing | Fail when matched-batch mass balance exceeds declared measurement uncertainty. |  |
| `validate_rework` | rejects and rework | Downgrade, rework, recovery, and disposal destinations are mutually exclusive and not duplicated as accepted output. |  |
| `validate_flow_binding` | all cards | Fixed UUIDs match evidence; parameterized inputs instantiate the cited Flow Set version; the nutrient card has no group and is not split. |  |
| `validate_ranges` | all cards | Every lower bound is no greater than its upper bound; inactive conditional routes equal zero; foreground records supersede provisional screens. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unit-process or aggregated farm-gate dataset for fresh product of one named residual oleaginous-fruit species |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA with declared species, system, state, grade, harvest period, and gate |
| excluded_use | undisclosed multi-species average; extracted or refined oil; manufactured product; substitute for another named CPC leaf |
| required_metadata | species; system; geography; harvest period; area; yield; maturity; moisture; grade; lot; packaging; gate; route; attribution |
| required_quality_disclosure | foreground coverage; measurement methods; range screens; missing values; cross-period attribution; mass balance; unresolved flow identities |
| update_trigger | material change in species, system, yield, route, gate, grade, packaging, period attribution, or key evidence |

## 11. Data Sources

| source_id | type | Citation | Use |
| --- | --- | --- | --- |
| `fao-postharvest-horticulture` | official_guidance | FAO, Prevention of post-harvest food losses: fruits, vegetables and root crops, https://www.fao.org/4/t0073e/t0073e00.htm | principles for fresh horticultural handling, grading, packing, and loss control |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil nitrogen-emission method |
