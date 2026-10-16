---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-salmonidae-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed Salmonidae, live, fresh or chilled

## 1. Scope and Applicability

This PCR produces foreground data for aquaculture-origin Salmonidae human-food fish delivered whole, unheaded and ungutted at the first producer harvest or dispatch handover. Declare the actual species, production context and live, fresh or chilled state. Separate head/gut removal, filleting, freezing, ornamental fish, seed-only final outputs and wild capture are outside this reference category. Purchased seed and inputs remain upstream requirements. Post-handover transfer to an independent processor is outside; producer-controlled transfers before the chosen gate are included.

Species identity alone does not select a production recipe. Freshwater trout may complete grow-out in freshwater; a sea phase or smolt stage is required only where actual anadromous production records establish it. FAO descriptions are qualitative technology evidence, not current default feed conversion, density, drug-dose or harvest-size limits.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-salmonidae-live-fresh-or-chilled |
| classification_refs | CPC 3.0 04222; narrower whole-fish presentation scope |
| covered_products | Whole unheaded/ungutted aquaculture-origin Salmonidae for human food, actual live/fresh/chilled state |
| excluded_products | Wild Salmonidae; non-Salmonidae; ornamental or seed-only final output; head/gut-removed fish; fillets; frozen fish; separately processed meat/liver/roe |
| representative_product | Actual freshwater farmed rainbow trout or actual staged marine farmed Atlantic salmon; neither is a universal recipe |
| production_route | Required parent grow_out; owned seed_rearing or purchased seed stages; actual freshwater flow-through/raceway, RAS or cage technology; evidenced staged marine route and pre_gate_transfer when present; harvest; conditional preservation; dispatch |
| market_state | Declare live, fresh or chilled at the first producer handover; retain separate state-specific lots |

Production route alternative parent: `grow_out`. Owned early-life stages add hatchery feed, health, water, treatment and survival inventories; buying a stage instead adds the provider burden and its transfer. The alternatives are exclusive for the same stage/cohort but may coexist across different traced stages or lots. Technology alternative parent: `grow_out`. Flow-through/raceway requires actual intake/return records; RAS adds recirculation, filtration, sludge and pumping; actual cages require net/mooring/material and receiving-water records. Distinct technologies may coexist at successive documented stages, but the same culture unit and period cannot be assigned conflicting technology flags. Record actual technology, water salinity and stage transitions; source examples do not determine the farm facts.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted complete whole farmed Salmonidae biomass at first producer handover |
| How much | 1 kg net wet fish mass, excluding ice, free water and containers |
| How well | Actual species, food use, complete unheaded/ungutted condition and declared live/fresh/chilled state; no universal size or moisture requirement |
| How long or cycle | Actual linked hatchery/seed, grow-out, fallowing/cleaning, harvest and pre-gate handling periods; include cohort and shared-asset service periods |
| reference_flow_link | `farmed_salmonidae_handover` |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole farmed Salmonidae at first producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species/family; aquaculture origin; actual live/fresh/chilled state; complete unheaded/ungutted form; producer gate; geography/date; culture technology; freshwater/marine stage topology; seed ownership/provider; cohort; weighing/tare/free-water protocol; actual pre-gate transport and preservation; intended outputs; allocation/service periods |

Required qualifiers belong in dataset metadata, process/reference notes or an equivalent foreground package field. A missing actual state, origin or gate is incomplete evidence, not an assumed default. Common 1 kg mass does not assert equivalent quality or shelf life across states.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted whole fish net wet mass using cp_mass; subtract container tare, ice and free water, with actual drainage/handling condition. Final reference output is 1 kg; internal transfers use measured amounts. |
| stock_count_mass | stocking and transfer rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count conversion uses contemporaneous representative individual wet mass by species/stage/lot from cp_stock_seed_rearing; cp_stock_grow_out; cp_stock_pre_gate_transfer; cp_stock_harvest; cp_stock_preservation; cp_stock_dispatch; cp_stock_shared_services; retain sampling uncertainty. No universal fish/kg conversion. |
| material_basis | feed; treatment; water; packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain purchased formulation mass, dry matter/active content and element-versus-compound basis separately; volume-to-mass uses actual density and count-to-mass actual sample evidence. |
| energy_units | electricity and delivered heat | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh; MJ | Preserve electrical kWh and heat MJ; energy unit group 93a60a57-a3c8-11da-a746-0800200c9a66 gives 3.6 MJ per kWh. Do not substitute fuel mass for delivered heat. |
| normalization_definition | all inventory rows | actual row property | actual numerator unit per kg reference | Normalize attributable lot amounts once by accepted final net fish mass; keep actual cohort movements, loss and allocation records. Every amount and Range basis is per 1 kg reference flow. |

Every non-reference Range below is a finite provisional author reasoned estimate used solely for QA screening in the actual stated role. Zero is applicable only when the activity/material is evidenced absent; it does not assert zero burden. Broad water ranges accommodate different circulation/intake and technology scales; stock, feed, energy and material bounds screen recording mistakes rather than prescribe efficiency, stocking, medication or legal limits. Actual records and reviewed site evidence take precedence; investigate values outside a screen and document justified replacement. The final 1–1 kg Range is the method definition of the reference quantity, not an empirical yield interval.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual owned broodstock/egg/juvenile stages or purchased seed stage entering the producer system, with provider gate, upstream burden and stage ownership |
| starting_condition_role | Explicit foreground cut-in; not a claim that unobserved purchased hatchery/feed/material burdens are zero |
| product_classification_scope | Aquaculture Salmonidae human food; whole unheaded/ungutted narrower presentation |
| recursive_input_rule | If same-category fish enters breeding/grow-out/holding, record actual purpose, stage and upstream provider/version separately; stop recursion at an evidenced upstream dataset boundary, never replace an input with the final reference output |
| upstream_dataset_requirement | Seed/provider and feed ingredients/processing; water, energy and material supply; controlled pre-gate transport; relevant infrastructure manufacture, maintenance and end-of-life; disclose missing evidence |
| disclosure | Actual stage graph; own/purchased seed; technology and region; freshwater/marine source and discharge; live/fresh/chilled handover; periods/cohorts; support assets; direct releases; included/excluded upstream and post-gate operations; unresolved evidence |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | grow_out and seed_rearing | Include actual producer-controlled biological stages and upstream purchased inputs. Own-versus-purchased stage alternatives use required parent grow_out and traced stage/cohort flags. Freshwater trout does not require marine grow-out or smoltification. | `fao-trout-culture`; `fao-atlantic-salmon-culture` |
| boundary_technology | grow_out | Declare parent grow_out, actual flow-through/raceway, RAS or cage delta, water/infrastructure requirements and stage-specific coexistence. Include evidenced smolt readiness and pre-gate transfer for actual anadromous marine routes only. | `fao-trout-culture`; `fao-atlantic-salmon-culture`; `noaa-atlantic-salmon-aquaculture` |
| boundary_harvest | harvest | Keep removal/acceptance separate from biomass growth so harvest resources, actual whole-fish state and losses can be reconciled at their own handoff. | `fao-trout-culture`; `fao-atlantic-salmon-culture` |
| boundary_handling | preservation and dispatch | Include actual whole-fish live holding/chilling and packaging before first producer gate; record before/after state and duration. Independent processor transport, gut/head removal, filleting and freezing lie outside the declared category. | `noaa-atlantic-salmon-aquaculture` |
| boundary_upstream | purchased inputs | Require upstream provider burden for actual seed, feed, treatment, utility, transfer and material purchases; prevent on-site and supplier processes from covering the same stage twice. | `fao-atlantic-salmon-culture`; `ghg-product-allocation` |
| boundary_water_release | water and emissions | Separate purchased water, resource withdrawal, circulation, return, collected waste and actual receiving-medium emissions. Reconcile any aggregated effluent model to separately reported substances and sludge. | `noaa-atlantic-salmon-aquaculture` |
| boundary_period_assets | all selected stages | Include relevant periods, fallowing/cleaning, shared assets, replacement and termination; identify every consuming node and attribute manufacture, maintenance and end-of-life once using actual service evidence. | `ghg-product-allocation` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_rearing` | Owned hatchery and early rearing | conditional | Owned broodstock, eggs, fry, parr or smolt production before grow_out; purchased stages replace only the evidenced omitted owned stages | Managed biological child; parent grow_out; actual early-life stage handoff | actual attributable stage quantities per 1 kg reference flow |
| `grow_out` | Managed Salmonidae grow-out | required | All qualifying aquaculture lots | Managed biological production parent; actual freshwater or staged marine route | actual attributable stage quantities per 1 kg reference flow |
| `pre_gate_transfer` | Producer controlled culture-stage transfer | conditional | Actual producer-controlled stock movement before the producer gate, including evidenced smolt transfer | Transfer child of grow_out; excludes transfer after independent processor handover | actual attributable stage quantities per 1 kg reference flow |
| `harvest` | Removal from culture and harvest acceptance | required | Every final food-fish lot | Independent harvest boundary from cultivated stock to whole collected fish | actual attributable stage quantities per 1 kg reference flow |
| `preservation` | Whole-fish live holding or chilling | conditional | Actual intervention between harvest and first producer dispatch; actual live holding OR fresh/chilled handling selected by lot records | Preservation; harvest input to state-specific dispatch-ready whole fish | actual attributable stage quantities per 1 kg reference flow |
| `dispatch` | Presentation and first producer handover | required | First producer harvest or dispatch gate before independent processing | Packaging/presentation and accepted final reference; distribution outside | 1 kg accepted final fish |
| `shared_services` | Attributed utilities and shared infrastructure | required | Actual resources across selected stages and reporting periods; record evidenced absence | Supporting resources attributed once to seed_rearing, grow_out, transfer, harvest, preservation and dispatch | actual attributable stage quantities per 1 kg reference flow |

Batch/cohort ids link hatchery, grow-out, actual transfers, harvest and dispatch across calendar periods. A continuous water/utility ledger must still retain cohort attribution; cleaning, fallowing and changeover events belong to the actual run or affected production period. Required parent `grow_out` owns all seed-production and technology alternatives. `shared_services` carries attributable resources for every selected consumer once; consumer sections refer to this ledger rather than duplicating exchanges. Each conditional card instantiates zero, one or multiple concrete exchanges from actual site records. Resolve actual material/substance, provider, state, destination and unit before downstream publication.

### Process: Owned hatchery and early rearing (`seed_rearing`)

#### Inputs

##### Product flows

##### Waste flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

#### Outputs

##### Product flows

###### Owned juvenile or smolt biomass handed to grow-out (`owned_seed_handoff`)

Measure actual stage count and representative wet mass at hatchery exit; document smolt readiness only for the actual marine route. This internal transfer is not fixed to final reference mass.

- Selected flow: Owned juvenile or smolt biomass handed to grow-out
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_stock_seed_rearing, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_seed_rearing`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Hatchery dead stock to documented disposal (`hatchery_mortality`)

Record count and wet mass by cause, lot and destination; sold non-food residues use the distinct intended-output ledger rather than simultaneous waste classification.

- Selected flow: Hatchery dead stock to documented disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_waste_seed_rearing, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_seed_rearing`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected hatchery sludge to treatment (`hatchery_sludge`)

Measure collected sludge wet mass and solids content after hatchery water treatment; exclude nutrient mass already reported as water release.

- Selected flow: Collected hatchery sludge to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_waste_seed_rearing, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_seed_rearing`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

### Process: Managed Salmonidae grow-out (`grow_out`)

#### Inputs

##### Product flows

###### Salmonidae stocking biomass (`stocking_biomass`)

Record actual seed provider or owned_seed_handoff, species and life stage. Attach upstream purchased seed datasets OR the owned hatchery lineage for each stage, not both. Amount is measured stocking biomass, not final 1 kg.

- Selected flow: Salmonidae stocking biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_stock_grow_out, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_grow_out`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

#### Outputs

##### Product flows

###### Cultivated whole Salmonidae biomass ready for harvest (`grown_stock`)

Use actual growth, stock movement and harvest availability records; connect any pre_gate_transfer and harvest quantities with mortality/growth, rather than forcing every stage to 1 kg.

- Selected flow: Cultivated whole Salmonidae biomass ready for harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_stock_grow_out, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_grow_out`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grow-out mortalities and unsaleable biomass to disposal (`growout_mortality`)

Measure or document wet mass/count conversion, cause, date and authorized disposal; escape events are a separate stock reconciliation, not disposed waste.

- Selected flow: Grow-out mortalities and unsaleable biomass to disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_waste_grow_out, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_grow_out`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separated grow-out solid residue sent to treatment (`growout_sludge_separated_solids`)

Record only when this specific waste stream is actually removed to its evidenced recipient; in-situ deposition is not collected sludge, and sediment and other solids cannot double own the same mass. Retain source stage/unit/period, removal event, moisture, dry solids and nutrient analysis separately.

- Selected flow: Separated grow-out solid residue sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Independently measured wet mass of this specific waste stream, retaining dry-solids companion measurement and destination; normalize by final accepted net fish mass, never copy a grouped total or range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_grow_out`

###### Collected grow-out sludge sent to treatment (`growout_sludge_collected_sludge`)

Record only when this specific waste stream is actually removed to its evidenced recipient; in-situ deposition is not collected sludge, and sediment and other solids cannot double own the same mass. Retain source stage/unit/period, removal event, moisture, dry solids and nutrient analysis separately.

- Selected flow: Collected grow-out sludge sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Independently measured wet mass of this specific waste stream, retaining dry-solids companion measurement and destination; normalize by final accepted net fish mass, never copy a grouped total or range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_grow_out`

##### Elementary flows

Actual nitrogen, phosphorus and other substance releases attributable to this stage are recorded only in the shared_services central release ledger with source node, unit, period and discharge-event linkage.

### Process: Producer controlled culture-stage transfer (`pre_gate_transfer`)

#### Inputs

##### Product flows

###### Culture-stage Salmonidae entering pre-gate transfer (`transfer_stock_input`)

Use actual stage input biomass, life stage and ownership/gate record; smolt identity and readiness are required only for evidenced anadromous transfer.

- Selected flow: Culture-stage Salmonidae entering pre-gate transfer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_stock_pre_gate_transfer, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_pre_gate_transfer`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

#### Outputs

##### Product flows

###### Culture-stage Salmonidae received after transfer (`transferred_stock`)

Reconcile actual received biomass with departure, mortality and any growth; record source and destination stages before the producer gate.

- Selected flow: Culture-stage Salmonidae received after transfer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_stock_pre_gate_transfer, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_pre_gate_transfer`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Transfer mortalities to documented disposal (`transfer_mortality`)

Retain event biomass, cause and disposal evidence; never absorb transfer losses into accepted final net fish mass.

- Selected flow: Transfer mortalities to documented disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_waste_pre_gate_transfer, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_pre_gate_transfer`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

### Process: Removal from culture and harvest acceptance (`harvest`)

#### Inputs

##### Product flows

###### Whole cultivated stock entering harvest removal (`harvest_stock_input`)

Link grow_out or transferred_stock to the actual culture enclosure, harvest method, lot and biomass. The removal node records equipment/service separately from biological growth.

- Selected flow: Whole cultivated stock entering harvest removal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_stock_harvest, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_harvest`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

#### Outputs

##### Product flows

###### Harvested whole Salmonidae for pre-gate handling (`harvested_whole_fish`)

Measure actual accepted whole harvested biomass and live/fresh state; reconcile rejected or lost fish separately, and route to preservation only when the actual intervention occurs.

- Selected flow: Harvested whole Salmonidae for pre-gate handling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_stock_harvest, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_harvest`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest rejects to actual treatment destination (`harvest_rejects`)

Report unsaleable biomass and actual associated materials separately by measured mass and destination; intentional saleable outputs are product entries in cp_outputs_grow_out; cp_outputs_dispatch.

- Selected flow: Harvest rejects to actual treatment destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_waste_harvest, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_harvest`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

### Process: Whole-fish live holding or chilling (`preservation`)

#### Inputs

##### Product flows

###### Harvested whole Salmonidae entering holding or chilling (`preservation_stock_input`)

Record actual incoming fish net wet mass and state; live holding retains living whole fish, while fresh/chilled handling may follow actual whole-fish killing without removal of body parts.

- Selected flow: Harvested whole Salmonidae entering holding or chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_stock_preservation, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_preservation`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased ice for whole-fish farmgate chilling (`farm_chilling_ice`)

Conditional fresh/chilled lots use actual supplied ice specification, producer origin and net consumed mass; fish reference excludes ice. On-site ice manufacture is covered once through utilities and water.

- Selected flow: Purchased ice for whole-fish farmgate chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_material_preservation, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_preservation`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

#### Outputs

##### Product flows

###### Dispatch-ready whole Salmonidae after actual preservation (`preserved_whole_fish`)

Measure whole fish biomass and actual live/fresh/chilled state after the bounded intervention, with elapsed time and temperature or live-holding records.

- Selected flow: Dispatch-ready whole Salmonidae after actual preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_stock_preservation, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_preservation`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pre-gate holding or chilling rejects and mortalities (`preservation_loss`)

Measure state-specific rejected fish, mortalities and separately drained liquid; retain the disposal destination and do not assume gate throughput equals harvest biomass.

- Selected flow: Pre-gate holding or chilling rejects and mortalities
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_waste_preservation, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_preservation`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

### Process: Presentation and first producer handover (`dispatch`)

#### Inputs

##### Product flows

###### Whole Salmonidae entering first producer handover (`dispatch_stock_input`)

Use preserved_whole_fish if preservation is active, otherwise harvested_whole_fish. Actual state is required, never inferred from a missing optional-node record.

- Selected flow: Whole Salmonidae entering first producer handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_stock_dispatch, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_dispatch`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

#### Outputs

##### Product flows

###### Whole farmed Salmonidae at first producer handover (`farmed_salmonidae_handover`)

Accept only complete unheaded/ungutted human-food fish in actual live, fresh or chilled state at the defined producer gate; calibrated tare-corrected net wet fish mass excludes ice, free water and packaging.

- Selected flow: Whole farmed Salmonidae at first producer handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_mass`
- Sources: `salmonidae-reference-definition`
- Range: Method definition of the 1 kg reference
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `salmonidae-reference-definition`

##### Waste flows

##### Elementary flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

### Process: Attributed utilities and shared infrastructure (`shared_services`)

#### Inputs

##### Product flows

###### Externally supplied treated process-quality water (`supplied_treated_water`)

Conditional actual externally supplied industrial process-quality water requires documented suitability to the consuming culture/handling stage; no identification of withdrawal, seawater, circulating water or effluent as this purchase.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Process Water
- Binding: unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_water_shared_services, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_shared_services`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased CN grid-average AC electricity below 1 kV (`electricity_cn_lv`)

Applies only where actual grid location is CN and user voltage is below 1 kV; meter each selected stage and reconcile shared meter allocation, including actual pumping, light, thermal control, filtration and chilling.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: `fixed`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Actual attributable kWh from cp_energy, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity for other actual mixes or voltages (`electricity_other`)

Non-CN or other-voltage/provider electricity is separately specified by actual region, supplier and mix; do not impose the CN support identity on another site.

- Selected flow: Purchased electricity for other actual mixes or voltages
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Actual attributable kWh from cp_energy, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased useful heat delivered to actual stages (`purchased_heat`)

When heat is purchased, record provider fuel/technology, delivered thermal energy and stage use; do not also count the supplier's fuel as foreground combustion.

- Selected flow: Purchased useful heat delivered to actual stages
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable MJ from cp_energy, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Specified compressed oxygen for actual culture or live handling (`compressed_oxygen`)

Conditional oxygen purchases require purity, compression, provider, consumption mass and receiving stage; distinguish oxygen generation power and reject volume-reference identities for a kg input without valid conversion.

- Selected flow: Specified compressed oxygen for actual culture or live handling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_material_shared_services, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_shared_services`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

##### Elementary flows

#### Outputs

##### Product flows

No independent exchange is presumed; actual absence must be supported by the relevant stage records.

##### Waste flows

###### Actual treatment-bound wastewater from selected stages (`effluent_treatment`)

This card is the once-only shared_services central treatment-bound wastewater ledger for actual external-treatment handovers from seed_rearing, grow_out, pre_gate_transfer, harvest, preservation, dispatch and utility operations. Record each actual source stage, culture or operation unit, cohort, period, unique discharge event and receiving treatment provider/boundary; do not also report the same water and pollutant quantities as untreated direct environmental release or repeat collected sludge in this ledger.

When wastewater crosses a technosphere handover, record provider, contaminant composition and treatment boundary; do not also model the same untreated release directly to the environment.

- Selected flow: Actual treatment-bound wastewater from selected stages
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_water_shared_services, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_shared_services`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide to unspecified air (`fossil_co2_air`)

Only direct fossil-fuel combustion compatible with unspecified air is represented here; use actual fuel carbon/oxidation evidence or measured release and separate biogenic CO2. This is neither supplied stunning gas nor CO2-equivalent.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_emissions_shared_services, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_shared_services`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual water returned to specified receiving environment (`returned_water`)

Record actual measured return mass, location and temperature where relevant; distinguish freshwater and marine returns, evaporation/net consumption and the substance ledger. Reconcile aggregated effluent modelling to avoid duplicate releases.

- Selected flow: Actual water returned to specified receiving environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable kg from cp_water_shared_services, normalized once by accepted final net fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_shared_services`
- Range: Provisional reasoned QA screen; actual records take precedence for the declared role
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | all intended outputs | Enumerate reference fish and every actual intentional output with purpose, state, handover and period. Subdivide independently metered hatchery, grow-out, transfer and handling operations before allocation. | `ghg-product-allocation` |
| allocation_causal | shared output burdens | If subdivision is insufficient, use evidenced causal physical drivers such as actual feed, biomass-time, water/energy service or limiting load; a convenient mass fraction alone is not proof of causality. | `ghg-product-allocation` |
| allocation_fallback | unresolved physical causality | Only where a causal relation cannot be supported, disclose economic fallback using representative actual quantities and contemporaneous prices; assess sensitivity and state the reason for the fallback. | `ghg-product-allocation` |
| allocation_residues | loss, waste and non-reference products | Do not assign final fish reference mass to rejects, mortalities, escaped stock or other products. A purposeful saleable output is not simultaneously disposal waste; treatment and upstream burdens remain explicit. | `ghg-product-allocation` |
| allocation_carryover | retained broodstock and standing stock | Allocate production inputs to actual period cohorts; carry forward evidenced attributable burden for retained broodstock/standing fish into the next period, with consistent opening/closing stock and no loss or duplicate recognition. Escapes have separate stock/fate records, not automatic disposal waste or co-products. | `ghg-product-allocation` |
| allocation_periods | cohorts and shared_services | Link early-life, grow-out, fallowing/cleaning, harvest and asset service to actual cohorts, runs and periods. Enumerate all asset consumers, replacement and termination events; attribution shares must reconcile across all periods without repeating manufacture or utilities. | `ghg-product-allocation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted reference fish | calibrated weighing and acceptance | lot; species; origin; live/fresh/chilled state; gate; gross mass; container tare; ice/free-water exclusion; accepted net fish mass; calibration; repeat samples | Weigh whole unheaded/ungutted fish on a calibrated scale; subtract container tare, ice and free water; retain actual drainage and acceptance conditions | kg | every accepted lot | entire final lot with linked hatchery/grow-out cohorts and dispatch period | actual producer gate | per 1 kg reference flow | scale calibration; tare checks; repeated representative samples; dispatch acceptance |
| `cp_stock_seed_rearing` | `seed_rearing` | stock movement and losses | stock register with sample weighing | species; stage; supplier or owned origin; parent/child node; count; sampled individual wet mass; stocking; transfers; growth; harvest; mortality; escape; dates ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure actual biomass or count times representative individual wet mass; reconcile cohorts and each actual source/destination; record smolt readiness only if actual seawater route ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each stocking, transfer, harvest or escape event and routine stock reconciliation | full production cohort across relevant hatchery and grow-out periods | actual hatchery, culture units, pre-gate transfer and gate | per 1 kg reference flow | sampling design; survival/growth balance; supplier lineage; signed transfer records |
| `cp_stock_grow_out` | `grow_out` | stock movement and losses | stock register with sample weighing | species; stage; supplier or owned origin; parent/child node; count; sampled individual wet mass; stocking; transfers; growth; harvest; mortality; escape; dates ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure actual biomass or count times representative individual wet mass; reconcile cohorts and each actual source/destination; record smolt readiness only if actual seawater route ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each stocking, transfer, harvest or escape event and routine stock reconciliation | full production cohort across relevant hatchery and grow-out periods | actual hatchery, culture units, pre-gate transfer and gate | per 1 kg reference flow | sampling design; survival/growth balance; supplier lineage; signed transfer records |
| `cp_stock_pre_gate_transfer` | `pre_gate_transfer` | stock movement and losses | stock register with sample weighing | species; stage; supplier or owned origin; parent/child node; count; sampled individual wet mass; stocking; transfers; growth; harvest; mortality; escape; dates ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure actual biomass or count times representative individual wet mass; reconcile cohorts and each actual source/destination; record smolt readiness only if actual seawater route ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each stocking, transfer, harvest or escape event and routine stock reconciliation | full production cohort across relevant hatchery and grow-out periods | actual hatchery, culture units, pre-gate transfer and gate | per 1 kg reference flow | sampling design; survival/growth balance; supplier lineage; signed transfer records |
| `cp_stock_harvest` | `harvest` | stock movement and losses | stock register with sample weighing | species; stage; supplier or owned origin; parent/child node; count; sampled individual wet mass; stocking; transfers; growth; harvest; mortality; escape; dates ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure actual biomass or count times representative individual wet mass; reconcile cohorts and each actual source/destination; record smolt readiness only if actual seawater route ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each stocking, transfer, harvest or escape event and routine stock reconciliation | full production cohort across relevant hatchery and grow-out periods | actual hatchery, culture units, pre-gate transfer and gate | per 1 kg reference flow | sampling design; survival/growth balance; supplier lineage; signed transfer records |
| `cp_stock_preservation` | `preservation` | stock movement and losses | stock register with sample weighing | species; stage; supplier or owned origin; parent/child node; count; sampled individual wet mass; stocking; transfers; growth; harvest; mortality; escape; dates ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure actual biomass or count times representative individual wet mass; reconcile cohorts and each actual source/destination; record smolt readiness only if actual seawater route ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each stocking, transfer, harvest or escape event and routine stock reconciliation | full production cohort across relevant hatchery and grow-out periods | actual hatchery, culture units, pre-gate transfer and gate | per 1 kg reference flow | sampling design; survival/growth balance; supplier lineage; signed transfer records |
| `cp_stock_dispatch` | `dispatch` | stock movement and losses | stock register with sample weighing | species; stage; supplier or owned origin; parent/child node; count; sampled individual wet mass; stocking; transfers; growth; harvest; mortality; escape; dates ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure actual biomass or count times representative individual wet mass; reconcile cohorts and each actual source/destination; record smolt readiness only if actual seawater route ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each stocking, transfer, harvest or escape event and routine stock reconciliation | full production cohort across relevant hatchery and grow-out periods | actual hatchery, culture units, pre-gate transfer and gate | per 1 kg reference flow | sampling design; survival/growth balance; supplier lineage; signed transfer records |
| `cp_stock_shared_services` | `shared_services` | stock movement and losses | stock register with sample weighing | species; stage; supplier or owned origin; parent/child node; count; sampled individual wet mass; stocking; transfers; growth; harvest; mortality; escape; dates ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure actual biomass or count times representative individual wet mass; reconcile cohorts and each actual source/destination; record smolt readiness only if actual seawater route ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each stocking, transfer, harvest or escape event and routine stock reconciliation | full production cohort across relevant hatchery and grow-out periods | actual hatchery, culture units, pre-gate transfer and gate | per 1 kg reference flow | sampling design; survival/growth balance; supplier lineage; signed transfer records |
| `cp_material_seed_rearing` | `seed_rearing` | feed, chemicals, oxygen, ice and packaging | supplier invoice and inventory/consumption records | row identity; material/provider/specification; species/stage; wet mass; dry matter; ingredient/active basis; opening/closing stock; receipts; consumption; destinations ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or reconcile received and consumed materials using inventory balance; retain product-specific density for volume conversion and count/mass evidence for packaging ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each delivery/use event plus reconciled reporting-period balance | complete cohort and actual harvest/holding/dispatch campaigns | actual consuming stages and traced upstream providers | per 1 kg reference flow | supplier specifications; receipts; storage balance; meter/scale evidence |
| `cp_material_grow_out` | `grow_out` | feed, chemicals, oxygen, ice and packaging | supplier invoice and inventory/consumption records | row identity; material/provider/specification; species/stage; wet mass; dry matter; ingredient/active basis; opening/closing stock; receipts; consumption; destinations ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or reconcile received and consumed materials using inventory balance; retain product-specific density for volume conversion and count/mass evidence for packaging ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each delivery/use event plus reconciled reporting-period balance | complete cohort and actual harvest/holding/dispatch campaigns | actual consuming stages and traced upstream providers | per 1 kg reference flow | supplier specifications; receipts; storage balance; meter/scale evidence |
| `cp_material_pre_gate_transfer` | `pre_gate_transfer` | feed, chemicals, oxygen, ice and packaging | supplier invoice and inventory/consumption records | row identity; material/provider/specification; species/stage; wet mass; dry matter; ingredient/active basis; opening/closing stock; receipts; consumption; destinations ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or reconcile received and consumed materials using inventory balance; retain product-specific density for volume conversion and count/mass evidence for packaging ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each delivery/use event plus reconciled reporting-period balance | complete cohort and actual harvest/holding/dispatch campaigns | actual consuming stages and traced upstream providers | per 1 kg reference flow | supplier specifications; receipts; storage balance; meter/scale evidence |
| `cp_material_harvest` | `harvest` | feed, chemicals, oxygen, ice and packaging | supplier invoice and inventory/consumption records | row identity; material/provider/specification; species/stage; wet mass; dry matter; ingredient/active basis; opening/closing stock; receipts; consumption; destinations ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or reconcile received and consumed materials using inventory balance; retain product-specific density for volume conversion and count/mass evidence for packaging ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each delivery/use event plus reconciled reporting-period balance | complete cohort and actual harvest/holding/dispatch campaigns | actual consuming stages and traced upstream providers | per 1 kg reference flow | supplier specifications; receipts; storage balance; meter/scale evidence |
| `cp_material_preservation` | `preservation` | feed, chemicals, oxygen, ice and packaging | supplier invoice and inventory/consumption records | row identity; material/provider/specification; species/stage; wet mass; dry matter; ingredient/active basis; opening/closing stock; receipts; consumption; destinations ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or reconcile received and consumed materials using inventory balance; retain product-specific density for volume conversion and count/mass evidence for packaging ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each delivery/use event plus reconciled reporting-period balance | complete cohort and actual harvest/holding/dispatch campaigns | actual consuming stages and traced upstream providers | per 1 kg reference flow | supplier specifications; receipts; storage balance; meter/scale evidence |
| `cp_material_dispatch` | `dispatch` | feed, chemicals, oxygen, ice and packaging | supplier invoice and inventory/consumption records | row identity; material/provider/specification; species/stage; wet mass; dry matter; ingredient/active basis; opening/closing stock; receipts; consumption; destinations ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or reconcile received and consumed materials using inventory balance; retain product-specific density for volume conversion and count/mass evidence for packaging ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each delivery/use event plus reconciled reporting-period balance | complete cohort and actual harvest/holding/dispatch campaigns | actual consuming stages and traced upstream providers | per 1 kg reference flow | supplier specifications; receipts; storage balance; meter/scale evidence |
| `cp_material_shared_services` | `shared_services` | feed, chemicals, oxygen, ice and packaging | supplier invoice and inventory/consumption records | row identity; material/provider/specification; species/stage; wet mass; dry matter; ingredient/active basis; opening/closing stock; receipts; consumption; destinations ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or reconcile received and consumed materials using inventory balance; retain product-specific density for volume conversion and count/mass evidence for packaging ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each delivery/use event plus reconciled reporting-period balance | complete cohort and actual harvest/holding/dispatch campaigns | actual consuming stages and traced upstream providers | per 1 kg reference flow | supplier specifications; receipts; storage balance; meter/scale evidence |
| cp_energy | shared_services | power, useful heat and fuel | meters, invoices and engine logs | energy carrier; region; voltage; supplier mix; meter interval; fuel grade/mass/density; thermal delivery; engine hours; transfer mode/distance/load; consumer node | Meter actual electricity and delivered heat; reconcile fuel storage/consumption; allocate shared supplies by measured consumption or evidenced causal drivers | kWh; MJ; kg | each meter interval and fuel/heat delivery; each pre-gate transfer | full cultivation cohorts, actual fallowing/cleaning and pre-gate dispatch period | actual facilities, engines and controlled transfer legs | per 1 kg reference flow | meter calibration; invoices; duty logs; shared-load attribution |
| `cp_water_seed_rearing` | `seed_rearing` | water supply, withdrawal and discharge | intake/outlet meters and treatment records | source/basin; provider; salinity; density; supplied treatment quality; intake; return; recirculation; evaporation; discharge destination; solids removal; source node; culture/operation unit; cohort/period; unique discharge event id; external treatment provider and boundary ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure supplied, abstracted and returned water separately; recirculation is a state ledger, not repeated purchased input; document water mass from measured volume and actual density; reconcile treatment-provider receipts for actual wastewater from all selected source stages, recorded once under shared_services with overlapping direct releases and collected sludge excluded ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | meter interval; treatment or discharge event | full cohort including actual cleaning, fallowing and handling | actual freshwater/marine sources, supply points and receiving compartments | per 1 kg reference flow | meter checks; water ledger; discharge records; density/salinity evidence |
| `cp_water_grow_out` | `grow_out` | water supply, withdrawal and discharge | intake/outlet meters and treatment records | source/basin; provider; salinity; density; supplied treatment quality; intake; return; recirculation; evaporation; discharge destination; solids removal; source node; culture/operation unit; cohort/period; unique discharge event id; external treatment provider and boundary ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure supplied, abstracted and returned water separately; recirculation is a state ledger, not repeated purchased input; document water mass from measured volume and actual density; reconcile treatment-provider receipts for actual wastewater from all selected source stages, recorded once under shared_services with overlapping direct releases and collected sludge excluded ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | meter interval; treatment or discharge event | full cohort including actual cleaning, fallowing and handling | actual freshwater/marine sources, supply points and receiving compartments | per 1 kg reference flow | meter checks; water ledger; discharge records; density/salinity evidence |
| `cp_water_pre_gate_transfer` | `pre_gate_transfer` | water supply, withdrawal and discharge | intake/outlet meters and treatment records | source/basin; provider; salinity; density; supplied treatment quality; intake; return; recirculation; evaporation; discharge destination; solids removal; source node; culture/operation unit; cohort/period; unique discharge event id; external treatment provider and boundary ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure supplied, abstracted and returned water separately; recirculation is a state ledger, not repeated purchased input; document water mass from measured volume and actual density; reconcile treatment-provider receipts for actual wastewater from all selected source stages, recorded once under shared_services with overlapping direct releases and collected sludge excluded ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | meter interval; treatment or discharge event | full cohort including actual cleaning, fallowing and handling | actual freshwater/marine sources, supply points and receiving compartments | per 1 kg reference flow | meter checks; water ledger; discharge records; density/salinity evidence |
| `cp_water_harvest` | `harvest` | water supply, withdrawal and discharge | intake/outlet meters and treatment records | source/basin; provider; salinity; density; supplied treatment quality; intake; return; recirculation; evaporation; discharge destination; solids removal; source node; culture/operation unit; cohort/period; unique discharge event id; external treatment provider and boundary ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure supplied, abstracted and returned water separately; recirculation is a state ledger, not repeated purchased input; document water mass from measured volume and actual density; reconcile treatment-provider receipts for actual wastewater from all selected source stages, recorded once under shared_services with overlapping direct releases and collected sludge excluded ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | meter interval; treatment or discharge event | full cohort including actual cleaning, fallowing and handling | actual freshwater/marine sources, supply points and receiving compartments | per 1 kg reference flow | meter checks; water ledger; discharge records; density/salinity evidence |
| `cp_water_preservation` | `preservation` | water supply, withdrawal and discharge | intake/outlet meters and treatment records | source/basin; provider; salinity; density; supplied treatment quality; intake; return; recirculation; evaporation; discharge destination; solids removal; source node; culture/operation unit; cohort/period; unique discharge event id; external treatment provider and boundary ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure supplied, abstracted and returned water separately; recirculation is a state ledger, not repeated purchased input; document water mass from measured volume and actual density; reconcile treatment-provider receipts for actual wastewater from all selected source stages, recorded once under shared_services with overlapping direct releases and collected sludge excluded ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | meter interval; treatment or discharge event | full cohort including actual cleaning, fallowing and handling | actual freshwater/marine sources, supply points and receiving compartments | per 1 kg reference flow | meter checks; water ledger; discharge records; density/salinity evidence |
| `cp_water_dispatch` | `dispatch` | water supply, withdrawal and discharge | intake/outlet meters and treatment records | source/basin; provider; salinity; density; supplied treatment quality; intake; return; recirculation; evaporation; discharge destination; solids removal; source node; culture/operation unit; cohort/period; unique discharge event id; external treatment provider and boundary ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure supplied, abstracted and returned water separately; recirculation is a state ledger, not repeated purchased input; document water mass from measured volume and actual density; reconcile treatment-provider receipts for actual wastewater from all selected source stages, recorded once under shared_services with overlapping direct releases and collected sludge excluded ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | meter interval; treatment or discharge event | full cohort including actual cleaning, fallowing and handling | actual freshwater/marine sources, supply points and receiving compartments | per 1 kg reference flow | meter checks; water ledger; discharge records; density/salinity evidence |
| `cp_water_shared_services` | `shared_services` | water supply, withdrawal and discharge | intake/outlet meters and treatment records | source/basin; provider; salinity; density; supplied treatment quality; intake; return; recirculation; evaporation; discharge destination; solids removal; source node; culture/operation unit; cohort/period; unique discharge event id; external treatment provider and boundary ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure supplied, abstracted and returned water separately; recirculation is a state ledger, not repeated purchased input; document water mass from measured volume and actual density; reconcile treatment-provider receipts for actual wastewater from all selected source stages, recorded once under shared_services with overlapping direct releases and collected sludge excluded ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | meter interval; treatment or discharge event | full cohort including actual cleaning, fallowing and handling | actual freshwater/marine sources, supply points and receiving compartments | per 1 kg reference flow | meter checks; water ledger; discharge records; density/salinity evidence |
| `cp_waste_seed_rearing` | `seed_rearing` | mortalities, rejects, sludge and spent materials | weighing, disposal manifests and event records | material; cause; lot; count; wet mass; dry solids; species; nutrient content; receiving provider; destination; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh each actual waste stream; convert count to mass with contemporaneous sample; distinguish collected waste from escape, uncollected sediment or intended sold output ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each mortality/removal/disposal event | complete cohort and linked maintenance/harvest/holding campaigns | actual producer stages and waste providers | per 1 kg reference flow | disposal receipts; sample masses; solids analysis; output/waste reconciliation |
| `cp_waste_grow_out` | `grow_out` | mortalities, rejects, sludge and spent materials | weighing, disposal manifests and event records | material; cause; lot; count; wet mass; dry solids; species; nutrient content; receiving provider; destination; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh each actual waste stream; convert count to mass with contemporaneous sample; distinguish collected waste from escape, uncollected sediment or intended sold output ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each mortality/removal/disposal event | complete cohort and linked maintenance/harvest/holding campaigns | actual producer stages and waste providers | per 1 kg reference flow | disposal receipts; sample masses; solids analysis; output/waste reconciliation |
| `cp_waste_pre_gate_transfer` | `pre_gate_transfer` | mortalities, rejects, sludge and spent materials | weighing, disposal manifests and event records | material; cause; lot; count; wet mass; dry solids; species; nutrient content; receiving provider; destination; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh each actual waste stream; convert count to mass with contemporaneous sample; distinguish collected waste from escape, uncollected sediment or intended sold output ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each mortality/removal/disposal event | complete cohort and linked maintenance/harvest/holding campaigns | actual producer stages and waste providers | per 1 kg reference flow | disposal receipts; sample masses; solids analysis; output/waste reconciliation |
| `cp_waste_harvest` | `harvest` | mortalities, rejects, sludge and spent materials | weighing, disposal manifests and event records | material; cause; lot; count; wet mass; dry solids; species; nutrient content; receiving provider; destination; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh each actual waste stream; convert count to mass with contemporaneous sample; distinguish collected waste from escape, uncollected sediment or intended sold output ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each mortality/removal/disposal event | complete cohort and linked maintenance/harvest/holding campaigns | actual producer stages and waste providers | per 1 kg reference flow | disposal receipts; sample masses; solids analysis; output/waste reconciliation |
| `cp_waste_preservation` | `preservation` | mortalities, rejects, sludge and spent materials | weighing, disposal manifests and event records | material; cause; lot; count; wet mass; dry solids; species; nutrient content; receiving provider; destination; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh each actual waste stream; convert count to mass with contemporaneous sample; distinguish collected waste from escape, uncollected sediment or intended sold output ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each mortality/removal/disposal event | complete cohort and linked maintenance/harvest/holding campaigns | actual producer stages and waste providers | per 1 kg reference flow | disposal receipts; sample masses; solids analysis; output/waste reconciliation |
| `cp_waste_dispatch` | `dispatch` | mortalities, rejects, sludge and spent materials | weighing, disposal manifests and event records | material; cause; lot; count; wet mass; dry solids; species; nutrient content; receiving provider; destination; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh each actual waste stream; convert count to mass with contemporaneous sample; distinguish collected waste from escape, uncollected sediment or intended sold output ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each mortality/removal/disposal event | complete cohort and linked maintenance/harvest/holding campaigns | actual producer stages and waste providers | per 1 kg reference flow | disposal receipts; sample masses; solids analysis; output/waste reconciliation |
| `cp_waste_shared_services` | `shared_services` | mortalities, rejects, sludge and spent materials | weighing, disposal manifests and event records | material; cause; lot; count; wet mass; dry solids; species; nutrient content; receiving provider; destination; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh each actual waste stream; convert count to mass with contemporaneous sample; distinguish collected waste from escape, uncollected sediment or intended sold output ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each mortality/removal/disposal event | complete cohort and linked maintenance/harvest/holding campaigns | actual producer stages and waste providers | per 1 kg reference flow | disposal receipts; sample masses; solids analysis; output/waste reconciliation |
| `cp_emissions_seed_rearing` | `seed_rearing` | substance and compartment specific releases | monitoring or explicit factor/balance model | substance/species; element/compound basis; particle size; medium; source; fuel carbon; oxidation; intake background; feed nutrients; fish retention; sludge removal; concentration; discharge; uncertainty; actual source node; culture/operation unit; cohort/period; unique discharge or release event id; linked water/sludge/external-treatment ledger ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use actual source-specific monitoring or justified current factors/balances; subtract background, reconcile pollutant mass and disclose model/coverage; avoid aggregated-effluent and substance double count; record releases from all actual source stages only in the shared_services central ledger; reconcile unique events with collected sludge and external-treatment coverage to prevent duplication ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | monitoring interval or factor-model event with corresponding fuel/feed/water interval | entire selected cohort and relevant operation/cleaning periods | actual freshwater, marine, sediment or air compartments | per 1 kg reference flow | laboratory calibration; model inputs; factor provenance; recovery and uncertainty |
| `cp_emissions_grow_out` | `grow_out` | substance and compartment specific releases | monitoring or explicit factor/balance model | substance/species; element/compound basis; particle size; medium; source; fuel carbon; oxidation; intake background; feed nutrients; fish retention; sludge removal; concentration; discharge; uncertainty; actual source node; culture/operation unit; cohort/period; unique discharge or release event id; linked water/sludge/external-treatment ledger ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use actual source-specific monitoring or justified current factors/balances; subtract background, reconcile pollutant mass and disclose model/coverage; avoid aggregated-effluent and substance double count; record releases from all actual source stages only in the shared_services central ledger; reconcile unique events with collected sludge and external-treatment coverage to prevent duplication ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | monitoring interval or factor-model event with corresponding fuel/feed/water interval | entire selected cohort and relevant operation/cleaning periods | actual freshwater, marine, sediment or air compartments | per 1 kg reference flow | laboratory calibration; model inputs; factor provenance; recovery and uncertainty |
| `cp_emissions_pre_gate_transfer` | `pre_gate_transfer` | substance and compartment specific releases | monitoring or explicit factor/balance model | substance/species; element/compound basis; particle size; medium; source; fuel carbon; oxidation; intake background; feed nutrients; fish retention; sludge removal; concentration; discharge; uncertainty; actual source node; culture/operation unit; cohort/period; unique discharge or release event id; linked water/sludge/external-treatment ledger ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use actual source-specific monitoring or justified current factors/balances; subtract background, reconcile pollutant mass and disclose model/coverage; avoid aggregated-effluent and substance double count; record releases from all actual source stages only in the shared_services central ledger; reconcile unique events with collected sludge and external-treatment coverage to prevent duplication ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | monitoring interval or factor-model event with corresponding fuel/feed/water interval | entire selected cohort and relevant operation/cleaning periods | actual freshwater, marine, sediment or air compartments | per 1 kg reference flow | laboratory calibration; model inputs; factor provenance; recovery and uncertainty |
| `cp_emissions_harvest` | `harvest` | substance and compartment specific releases | monitoring or explicit factor/balance model | substance/species; element/compound basis; particle size; medium; source; fuel carbon; oxidation; intake background; feed nutrients; fish retention; sludge removal; concentration; discharge; uncertainty; actual source node; culture/operation unit; cohort/period; unique discharge or release event id; linked water/sludge/external-treatment ledger ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use actual source-specific monitoring or justified current factors/balances; subtract background, reconcile pollutant mass and disclose model/coverage; avoid aggregated-effluent and substance double count; record releases from all actual source stages only in the shared_services central ledger; reconcile unique events with collected sludge and external-treatment coverage to prevent duplication ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | monitoring interval or factor-model event with corresponding fuel/feed/water interval | entire selected cohort and relevant operation/cleaning periods | actual freshwater, marine, sediment or air compartments | per 1 kg reference flow | laboratory calibration; model inputs; factor provenance; recovery and uncertainty |
| `cp_emissions_preservation` | `preservation` | substance and compartment specific releases | monitoring or explicit factor/balance model | substance/species; element/compound basis; particle size; medium; source; fuel carbon; oxidation; intake background; feed nutrients; fish retention; sludge removal; concentration; discharge; uncertainty; actual source node; culture/operation unit; cohort/period; unique discharge or release event id; linked water/sludge/external-treatment ledger ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use actual source-specific monitoring or justified current factors/balances; subtract background, reconcile pollutant mass and disclose model/coverage; avoid aggregated-effluent and substance double count; record releases from all actual source stages only in the shared_services central ledger; reconcile unique events with collected sludge and external-treatment coverage to prevent duplication ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | monitoring interval or factor-model event with corresponding fuel/feed/water interval | entire selected cohort and relevant operation/cleaning periods | actual freshwater, marine, sediment or air compartments | per 1 kg reference flow | laboratory calibration; model inputs; factor provenance; recovery and uncertainty |
| `cp_emissions_dispatch` | `dispatch` | substance and compartment specific releases | monitoring or explicit factor/balance model | substance/species; element/compound basis; particle size; medium; source; fuel carbon; oxidation; intake background; feed nutrients; fish retention; sludge removal; concentration; discharge; uncertainty; actual source node; culture/operation unit; cohort/period; unique discharge or release event id; linked water/sludge/external-treatment ledger ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use actual source-specific monitoring or justified current factors/balances; subtract background, reconcile pollutant mass and disclose model/coverage; avoid aggregated-effluent and substance double count; record releases from all actual source stages only in the shared_services central ledger; reconcile unique events with collected sludge and external-treatment coverage to prevent duplication ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | monitoring interval or factor-model event with corresponding fuel/feed/water interval | entire selected cohort and relevant operation/cleaning periods | actual freshwater, marine, sediment or air compartments | per 1 kg reference flow | laboratory calibration; model inputs; factor provenance; recovery and uncertainty |
| `cp_emissions_shared_services` | `shared_services` | substance and compartment specific releases | monitoring or explicit factor/balance model | substance/species; element/compound basis; particle size; medium; source; fuel carbon; oxidation; intake background; feed nutrients; fish retention; sludge removal; concentration; discharge; uncertainty; actual source node; culture/operation unit; cohort/period; unique discharge or release event id; linked water/sludge/external-treatment ledger ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use actual source-specific monitoring or justified current factors/balances; subtract background, reconcile pollutant mass and disclose model/coverage; avoid aggregated-effluent and substance double count; record releases from all actual source stages only in the shared_services central ledger; reconcile unique events with collected sludge and external-treatment coverage to prevent duplication ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | monitoring interval or factor-model event with corresponding fuel/feed/water interval | entire selected cohort and relevant operation/cleaning periods | actual freshwater, marine, sediment or air compartments | per 1 kg reference flow | laboratory calibration; model inputs; factor provenance; recovery and uncertainty |
| cp_assets | shared_services | shared infrastructure and reusable packaging | bill of materials and service register | asset id; material; installed mass; manufacture; consuming nodes; service period; capacity/use; maintenance; replacement; termination; waste destination; reuse cycles | Link each asset/service to every actual consumer and period; attribute manufacture, maintenance, replacement and end-of-life once using evidenced service use; no universal lifetime | kg | installation and every maintenance/replacement/termination event; period use review | actual service life crossing current and future production periods | actual hatchery, grow-out technology, vessels, cold handling and presentation | per 1 kg reference flow | bills of materials; service/use logs; attribution sum; end-of-life evidence |
| `cp_services_seed_rearing` | `seed_rearing` | actual outsourced operation provider process | contract and provider primary activity/dataset | operator; stage; gate; delivered performance; provider reference property/unit; quantity; service share; included resources; upstream lineage ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Verify the actual contracted performance and provider reference property/unit; link the provider process once and reconcile overlap with separately collected materials and carriers ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | actual evidenced provider reference unit | each contracted delivery and period reconciliation | complete relevant cohort and actual pre-gate operations | actual producer stage and provider boundary | per 1 kg reference flow | contracts; primary provider records; property/unit evidence; overlap reconciliation |
| `cp_services_grow_out` | `grow_out` | actual outsourced operation provider process | contract and provider primary activity/dataset | operator; stage; gate; delivered performance; provider reference property/unit; quantity; service share; included resources; upstream lineage ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Verify the actual contracted performance and provider reference property/unit; link the provider process once and reconcile overlap with separately collected materials and carriers ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | actual evidenced provider reference unit | each contracted delivery and period reconciliation | complete relevant cohort and actual pre-gate operations | actual producer stage and provider boundary | per 1 kg reference flow | contracts; primary provider records; property/unit evidence; overlap reconciliation |
| `cp_services_pre_gate_transfer` | `pre_gate_transfer` | actual outsourced operation provider process | contract and provider primary activity/dataset | operator; stage; gate; delivered performance; provider reference property/unit; quantity; service share; included resources; upstream lineage ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Verify the actual contracted performance and provider reference property/unit; link the provider process once and reconcile overlap with separately collected materials and carriers ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | actual evidenced provider reference unit | each contracted delivery and period reconciliation | complete relevant cohort and actual pre-gate operations | actual producer stage and provider boundary | per 1 kg reference flow | contracts; primary provider records; property/unit evidence; overlap reconciliation |
| `cp_services_harvest` | `harvest` | actual outsourced operation provider process | contract and provider primary activity/dataset | operator; stage; gate; delivered performance; provider reference property/unit; quantity; service share; included resources; upstream lineage ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Verify the actual contracted performance and provider reference property/unit; link the provider process once and reconcile overlap with separately collected materials and carriers ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | actual evidenced provider reference unit | each contracted delivery and period reconciliation | complete relevant cohort and actual pre-gate operations | actual producer stage and provider boundary | per 1 kg reference flow | contracts; primary provider records; property/unit evidence; overlap reconciliation |
| `cp_services_preservation` | `preservation` | actual outsourced operation provider process | contract and provider primary activity/dataset | operator; stage; gate; delivered performance; provider reference property/unit; quantity; service share; included resources; upstream lineage ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Verify the actual contracted performance and provider reference property/unit; link the provider process once and reconcile overlap with separately collected materials and carriers ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | actual evidenced provider reference unit | each contracted delivery and period reconciliation | complete relevant cohort and actual pre-gate operations | actual producer stage and provider boundary | per 1 kg reference flow | contracts; primary provider records; property/unit evidence; overlap reconciliation |
| `cp_services_dispatch` | `dispatch` | actual outsourced operation provider process | contract and provider primary activity/dataset | operator; stage; gate; delivered performance; provider reference property/unit; quantity; service share; included resources; upstream lineage ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Verify the actual contracted performance and provider reference property/unit; link the provider process once and reconcile overlap with separately collected materials and carriers ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | actual evidenced provider reference unit | each contracted delivery and period reconciliation | complete relevant cohort and actual pre-gate operations | actual producer stage and provider boundary | per 1 kg reference flow | contracts; primary provider records; property/unit evidence; overlap reconciliation |
| `cp_services_shared_services` | `shared_services` | actual outsourced operation provider process | contract and provider primary activity/dataset | operator; stage; gate; delivered performance; provider reference property/unit; quantity; service share; included resources; upstream lineage ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Verify the actual contracted performance and provider reference property/unit; link the provider process once and reconcile overlap with separately collected materials and carriers ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | actual evidenced provider reference unit | each contracted delivery and period reconciliation | complete relevant cohort and actual pre-gate operations | actual producer stage and provider boundary | per 1 kg reference flow | contracts; primary provider records; property/unit evidence; overlap reconciliation |
| `cp_outputs_grow_out` | `grow_out` | each additional intended product | handover and sales ledger | output identity; purpose; net mass; handover; receiving use; period; price and quantity if fallback allocation; allocation driver ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Enumerate each actual intended non-reference output and its handover; demonstrate subdivision or causal physical allocation, then justified economic fallback where necessary ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each output handover and attribution review | same linked cohort and output/price period as shared burdens | actual producer and receiving user | per 1 kg reference flow | acceptance/sales records; allocation evidence; documented absence if single output |
| `cp_outputs_dispatch` | `dispatch` | each additional intended product | handover and sales ledger | output identity; purpose; net mass; handover; receiving use; period; price and quantity if fallback allocation; allocation driver ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Enumerate each actual intended non-reference output and its handover; demonstrate subdivision or causal physical allocation, then justified economic fallback where necessary ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each output handover and attribution review | same linked cohort and output/price period as shared burdens | actual producer and receiving user | per 1 kg reference flow | acceptance/sales records; allocation evidence; documented absence if single output |

### Outsourced operation coverage

Where an actual hatchery, transport, harvest, handling or treatment operation is contracted, link the provider process once to the consuming stage using its actual contracted performance and independently evidenced reference property/unit (for example, documented transport performance). Record operator, boundary, delivered performance, upstream dataset and service share in cp_services_seed_rearing; cp_services_grow_out; cp_services_pre_gate_transfer; cp_services_harvest; cp_services_preservation; cp_services_dispatch; cp_services_shared_services. Do not impose kg material amounts or a generic kg-to-service conversion. Tangible fish, materials and carriers remain in their own cards; exclude resources already covered by the provider process.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | all inventory rows | Divide the actually attributable lot amount in its numerator unit by the accepted final net wet fish mass in kg; retain actual stage amounts and allocation before this single normalization. | attributable lot amount; accepted fish mass; cp_mass; relevant protocol | exchange amount per 1 kg reference flow | `salmonidae-reference-definition` |
| stock_reconcile | stocking and movement rows | Reconcile beginning stock plus actual receipts and growth against transfers, harvest, deaths, escapes and ending stock; retain counts and sampled wet masses separately by stage. | cp_stock_seed_rearing; cp_stock_grow_out; cp_stock_pre_gate_transfer; cp_stock_harvest; cp_stock_preservation; cp_stock_dispatch; cp_stock_shared_services; cp_waste_seed_rearing; cp_waste_grow_out; cp_waste_pre_gate_transfer; cp_waste_harvest; cp_waste_preservation; cp_waste_dispatch; cp_waste_shared_services; cp_mass | per 1 kg reference flow |  |
| release_reconcile | culture emissions and effluent | Reconcile feed and water substance inputs, fish retention, collected solids, water/sediment releases and uncertainty; prevent a substance counted in treatment/waste and direct release twice. | cp_material_seed_rearing; cp_material_grow_out; cp_material_pre_gate_transfer; cp_material_harvest; cp_material_preservation; cp_material_dispatch; cp_material_shared_services; cp_water_seed_rearing; cp_water_grow_out; cp_water_pre_gate_transfer; cp_water_harvest; cp_water_preservation; cp_water_dispatch; cp_water_shared_services; cp_waste_seed_rearing; cp_waste_grow_out; cp_waste_pre_gate_transfer; cp_waste_harvest; cp_waste_preservation; cp_waste_dispatch; cp_waste_shared_services; cp_emissions_seed_rearing; cp_emissions_grow_out; cp_emissions_pre_gate_transfer; cp_emissions_harvest; cp_emissions_preservation; cp_emissions_dispatch; cp_emissions_shared_services | per 1 kg reference flow |  |
| service_attribution | shared_services | Apply measured consumer use or a documented causal service share over the actual service period to manufacture, maintenance, replacement and end-of-life; sum shares across consumers/periods. | cp_assets; cp_energy; cp_outputs_grow_out; cp_outputs_dispatch | per 1 kg reference flow | `ghg-product-allocation` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all exchanges | Keep actual species, state, origin, gate, provider and receiving compartment; verify concrete downstream UUIDs and required support units. Unknown identities remain explicit gaps. | supplier/stage records; identity detail verification; metadata |
| quality_topology | all selected stages | Document actual parent/child routes, own/purchased stages, freshwater versus staged marine context and technology; source examples cannot replace current farm records. | stage map; cp_stock_seed_rearing; cp_stock_grow_out; cp_stock_pre_gate_transfer; cp_stock_harvest; cp_stock_preservation; cp_stock_dispatch; cp_stock_shared_services; technology registers |
| quality_measurement | all quantities | Retain calibration, tare, free-water exclusion, sample wet mass/dry matter/active basis and unit conversion evidence; propagate measurement and model uncertainty.  per 1 kg reference flow | cp_mass; material specifications; monitoring/calibration |
| quality_time | all cohorts/assets | Cover full linked cohorts and applicable fallowing, cleaning, replacement and termination across reporting periods, with no unexplained gaps or duplicate burdens. | cohort/run identifiers; service registers |
| quality_completeness | all products and losses | Reconcile feed/stock/water/energy/outputs, intended co-products, mortality and escape events; quantify omissions and missing upstream support rather than treating them as zero. | balances; cp_outputs_grow_out; cp_outputs_dispatch; coverage and uncertainty statement |
| quality_ranges | every flow card | Provisional reasoned ranges are screening estimates only; replace using reviewed site evidence and retain explanation for departures. No numeric screen is a regulatory or performance limit. | foreground records; review and replacement evidence |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_seed_foundation` | `seed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Broodstock, eyed eggs or fry for owned seed production”; retain all following collection, quantity and normalization obligations: When the owned hatchery exists, identify each actual species, life stage, provider gate and breeding stock renewal; retain supplier burden and avoid charging the same stock as both purchased seed and owned production. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_stock_seed_rearing, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_stock_seed_rearing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_starter_feed` | `seed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Species and stage specified starter feed”; retain all following collection, quantity and normalization obligations: Record actual formulated hatchery diet, dry matter, composition, provider and uneaten fraction; historical feed ratios or recipes are not current defaults. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_material_seed_rearing, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_material_seed_rearing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hatchery_health` | `seed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Actual hatchery treatment formulations”; retain all following collection, quantity and normalization obligations: Conditional veterinary, disinfection or other hatchery products require formulation, active ingredient, prescribed event, dose actually consumed and destination; no universal medication requirement. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_material_seed_rearing, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_material_seed_rearing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_feed` | `grow_out`; inputs; product | Identify and separately collect every actual exchange covered by “Species and stage specified formulated grow-out feed”; retain all following collection, quantity and normalization obligations: Record each actual supplier formulation, ingredient provenance, wet/dry mass and delivered/feed-store balance; purchased feed upstream includes ingredient production and processing. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_material_grow_out, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_material_grow_out` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_health` | `grow_out`; inputs; product | Identify and separately collect every actual exchange covered by “Actual grow-out health and net-cleaning products”; retain all following collection, quantity and normalization obligations: Resolve each actually used veterinary, disinfectant, antifouling or cleaning formulation and active basis; capture application date, system, discharge and disposal. No historical dose is prescribed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_material_grow_out, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_material_grow_out` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_biological_service` | `grow_out`; inputs; product | Identify and separately collect every actual exchange covered by “Actual non-food husbandry organisms”; retain all following collection, quantity and normalization obligations: Include actual purchased cleaner-fish or other physical husbandry organisms where present, with species, provider, measured biomass and upstream burden; never count these organisms as the food-fish reference. Contracted operation services have a separate provider-process ledger. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_material_grow_out, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_material_grow_out` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_intended_other_outputs` | `grow_out`; outputs; product | Identify and separately collect every actual exchange covered by “Other intended farm outputs with separate handover”; retain all following collection, quantity and normalization obligations: Enumerate actual saleable non-reference stock or recovered products separately by identity, purpose, net mass and destination; record evidence of no other intended outputs when absent. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_outputs_grow_out, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_outputs_grow_out` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_transfer_resources` | `pre_gate_transfer`; inputs; product | Identify and separately collect every actual exchange covered by “Actual pre-gate transfer support materials”; retain all following collection, quantity and normalization obligations: Record only actual physical containment and support materials by consumed or attributable material mass; identify boat/vehicle, distance, duration and load. Contracted transfer is a provider process with its own reference unit; fuel, electricity, water and oxygen remain in shared_services once. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_material_pre_gate_transfer, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_material_pre_gate_transfer` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_consumables` | `harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual physical harvest consumables”; retain all following collection, quantity and normalization obligations: Specify actual physical removal/handling consumables and whole-fish killing materials consumed before the gate. Contracted harvest operations use the separate provider-process ledger, not kg service inputs; gut/head removal, filleting and freezing are outside. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_material_harvest, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_material_harvest` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_consumables` | `preservation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual whole-fish holding and chilling consumables”; retain all following collection, quantity and normalization obligations: Specify actual holding tank or chilling-contact supplies and their reuse; oxygen/water/energy belong to shared_services with preservation consumer linkage. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_material_preservation, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_material_preservation` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_packaging` | `dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual primary presentation and reusable containers”; retain all following collection, quantity and normalization obligations: Identify liners, boxes and reusable bins by material and actual state protected, net mass, reuse cycles and end-of-use; exclude post-gate distribution resources. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_material_dispatch, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_material_dispatch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_other_outputs` | `dispatch`; outputs; product | Identify and separately collect every actual exchange covered by “Other intentional producer-gate products”; retain all following collection, quantity and normalization obligations: Enumerate each actual output sold for a distinct purpose, gate and receiving use; keep it outside the reference denominator and apply allocation to its shared burdens. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_outputs_dispatch, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_outputs_dispatch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_waste` | `dispatch`; outputs; waste | Identify and separately collect every actual exchange covered by “Dispatch rejects and spent presentation materials”; retain all following collection, quantity and normalization obligations: Record actual unsaleable fish separately from discarded packaging and destinations; returned reusable containers are retained in the asset ledger, not automatically waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_waste_dispatch, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_waste_dispatch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_supplied_water` | `shared_services`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual supplied water with specified quality”; retain all following collection, quantity and normalization obligations: Where the supplied-water specification differs, resolve each actual potable, freshwater or other product and upstream provider independently; exclude volumes on supplied_treated_water. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_water_shared_services, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_shared_services` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_farm_fuels` | `shared_services`; inputs; product | Identify and separately collect every actual exchange covered by “Actual farm and pre-gate transfer fuels”; retain all following collection, quantity and normalization obligations: Resolve each actual generator, vessel or vehicle fuel grade and supply point; retain measured product mass and supplier density for volume conversions. Capture-fishery diesel does not define this role. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_energy, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_infrastructure_materials` | `shared_services`; inputs; product | Identify and separately collect every actual exchange covered by “Attributed culture and handling infrastructure materials”; retain all following collection, quantity and normalization obligations: Resolve actual raceway/pond, RAS pumps/biofilters, freshwater or marine cages, nets/moorings, hatchery tanks, transfer containment and cold/packaging assets by bill of physical materials and service period; use actual tangible material stock shares and allocate manufacture, maintenance, replacement and end-of-life once. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_assets, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_assets` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_freshwater_abstraction` | `shared_services`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual freshwater withdrawn from specified natural source”; retain all following collection, quantity and normalization obligations: Identify river, lake or groundwater resource and actual basin/source; record gross withdrawal, return and net consumption separately, using measured volume and actual density for mass where necessary. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_water_shared_services, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_shared_services` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_seawater_abstraction` | `shared_services`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual pumped seawater from marine source”; retain all following collection, quantity and normalization obligations: Only actual controlled seawater abstraction is an input; ambient water passing through an open cage is not pumped consumption. Record salinity/density and intake/return location. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_water_shared_services, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_shared_services` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_utility_asset_waste` | `shared_services`; outputs; waste | Identify and separately collect every actual exchange covered by “Spent utility or infrastructure materials to treatment”; retain all following collection, quantity and normalization obligations: Record replacement filters, nets, maintenance waste and cleaning residues by material, period and destination. Unrecovered lost gear requires its own fate evidence, not fictitious collected waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_waste_shared_services, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_waste_shared_services` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nitrogen_release` | `shared_services`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nitrogen species released to declared receiving water”; retain all following collection, quantity and normalization obligations: This card belongs to the once-only shared_services central release ledger for evidenced emissions from seed_rearing, grow_out, pre_gate_transfer, harvest, preservation, dispatch and actual utility operations. Each concrete exchange records its actual source node, culture or operation unit, cohort and period, linked to a unique discharge event; do not repeat the same release at the source stage or count substances retained in collected sludge again as direct emissions. Conditional monitored/modelled dissolved or particulate nitrogen release requires compound/species, N-versus-compound mass and freshwater/sea/sediment medium before exchange resolution; no universal N factor. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_emissions_shared_services, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_shared_services` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_phosphorus_release` | `shared_services`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual phosphorus species released to declared receiving water”; retain all following collection, quantity and normalization obligations: This card belongs to the once-only shared_services central release ledger for evidenced emissions from seed_rearing, grow_out, pre_gate_transfer, harvest, preservation, dispatch and actual utility operations. Each concrete exchange records its actual source node, culture or operation unit, cohort and period, linked to a unique discharge event; do not repeat the same release at the source stage or count substances retained in collected sludge again as direct emissions. Conditional actual phosphorus releases require dissolved/particulate form, P-versus-compound mass, background subtraction and receiving medium; reconcile feed retention, solids removal and water release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_emissions_shared_services, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_shared_services` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_culture_emissions` | `shared_services`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other identified culture substances to documented compartments”; retain all following collection, quantity and normalization obligations: This card belongs to the once-only shared_services central release ledger for evidenced emissions from seed_rearing, grow_out, pre_gate_transfer, harvest, preservation, dispatch and actual utility operations. Each concrete exchange records its actual source node, culture or operation unit, cohort and period, linked to a unique discharge event; do not repeat the same release at the source stage or count substances retained in collected sludge again as direct emissions. A conditional requirement for actual treatment residues or other releases: instantiate each chemical substance and receiving medium from monitoring or justified model evidence. Aggregate organic load is not an identified elementary substance. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_emissions_shared_services, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_shared_services` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_combustion_emissions` | `shared_services`; outputs; elementary | Identify and separately collect every actual exchange covered by “Identified direct combustion pollutants to actual air compartment”; retain all following collection, quantity and normalization obligations: Instantiate actual chemical species and particle size from source-specific measurements or current factor models; fuel production background must not duplicate direct exhaust. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Actual attributable kg from cp_emissions_shared_services, normalized once by accepted final net fish mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_shared_services` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_sludge` | `grow_out`; outputs; waste | Identify and independently collect every actual sediment, solid-residue and sludge waste stream; retain source stage/unit/period, removal event, wet mass, dry solids, nutrient analysis and evidenced recipient without double owning the same material. Collect under `cp_waste_grow_out` and normalize to final accepted net fish mass. Establish independent Range evidence and exact UUID for each child; no grouped total, bound or binding is inherited. Any unresolved actual stream, fate, quantity, range evidence or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | per-waste-stream measurements, wet/dry basis, recipient receipts and range/identity verification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | farmed_salmonidae_handover | Confirm complete food Salmonidae, aquaculture origin, actual live/fresh/chilled state and first producer gate; cp_mass supports 1 kg net wet fish excluding ice, water and containers. | `salmonidae-reference-definition` |
| validate_routes | grow_out and route alternatives | Required parent grow_out exists; own/purchased stage flags and technology deltas have current evidence and coherent coexistence. Freshwater-only trout has no automatic smolt or sea stage; evidenced staged marine routes include pre-gate transfer resources. | `fao-trout-culture`; `fao-atlantic-salmon-culture`; `noaa-atlantic-salmon-aquaculture` |
| validate_handoffs | all stage outputs | Actual biomass/count records reconcile growth, stocking, transfers, harvest and dispatch; internal fish amounts are not fixed to final reference. State-specific preservation has before/after evidence; unknown state is a gap. |  |
| validate_water_emissions | water, waste and elementary cards | Separate supply, abstraction, circulation, return, sludge and pollutant ledgers; every actual emission has substance, element/compound basis, receiving medium and evidence. Aggregated effluent cannot duplicate substances. | `noaa-atlantic-salmon-aquaculture` |
| validate_energy | shared_services | Match actual region/voltage/provider, heat and fuel grade; reconcile meters and direct combustion without double-counting upstream fuel/heat or non-fossil CO2. |  |
| validate_outputs | intentional outputs and disposal | Enumerate actual output handovers, residues, waste, mortality, escapes and losses. Verify subdivision/causal allocation before disclosed fallback, with all shared burdens and service periods counted once. | `ghg-product-allocation` |
| validate_coverage | foreground package | Report performed and skipped checks, missing supplier/measurement/identity evidence, screening departures and uncertainties; only a completed data package with concrete verified exchanges can be finalized. |  |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package with downstream process and lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset after review of actual scope, identities, measurement and completeness |
| allowed_use | Actual aquaculture-origin whole Salmonidae human food at the declared first producer handover and state with compatible species/stage/technology context |
| excluded_use | Wild capture, non-Salmonidae, ornamental/seed-only final outputs, gutted/head-removed fish, fillets, frozen products or unqualified geography/state substitution |
| required_metadata | Species/family; origin; actual state/form/gate; geography/date; own/purchased seed and providers; full stage/technology graph; cohort and run periods; reference measurement; upstream linkage; co-outputs; allocation; asset service and receiving media |
| required_quality_disclosure | Coverage and omissions; calibration; sampling; unit/material basis; current provider evidence; identities; emissions models; mortality/escapes; allocation sensitivity; provisional screens; temporal and technological representativeness |
| update_trigger | Changed species/state/gate, seed provider/ownership, feed formulation, technology/stage route, energy mix, water source/receiver, harvest/holding, asset service, output set, factors or material evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-atlantic-salmon-culture | official_guidance | FAO Cultured aquatic species fact sheet: Salmo salar; https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_atlanticsalmon.htm ; retrieved 2026-10-09 | Qualitative early-life, actual marine-stage and culture input topology; historical quantities are not defaults |
| fao-trout-culture | official_guidance | FAO (2009), Oncorhynchus mykiss; https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_rainbowtrout.htm ; retrieved 2026-10-09 | Qualitative owned/purchased seed and freshwater raceway/RAS/cage alternatives; no inherited historical quantitative or medication defaults |
| noaa-atlantic-salmon-aquaculture | official_guidance | NOAA Fisheries, Atlantic Salmon: Aquaculture / Sustainable Seafood; https://www.fisheries.noaa.gov/species/atlantic-salmon/seafood ; retrieved 2026-10-09 | Qualitative actual hatchery/transfer/marine route, feed, waste, fallowing and escape data needs; no global regulatory/numeric default |
| ghg-product-allocation | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard (2011), chapter 9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; retrieved 2026-10-09 | Subdivision, causal physical attribution, explicit fallback and sensitivity reasoning; not a claim of whole-standard compliance |
| salmonidae-reference-definition | method_factor | This PCR sections 3–4 and normalize_lot; internally defined reference normalization method | Defined 1 kg reference and final 1–1 kg method-definition Range; not an external measured range |
