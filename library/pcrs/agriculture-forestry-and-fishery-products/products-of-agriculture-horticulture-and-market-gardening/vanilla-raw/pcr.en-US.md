---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vanilla-raw
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Vanilla, raw

## 1. Scope and Applicability

This PCR covers mature green uncured vanilla pods from managed perennial vines through repeated selective harvest, minimal on-farm primary conditioning, grading and farm-gate hand-off. Species, maturity, grade, support and pollination route, harvest rounds and perennial attribution are mandatory. FAO states that mature green beans are mostly odourless and that curing is a separate downstream operation that develops aroma (`fao-vanilla-postharvest-compendium`). Cured or dried pods, cleaned or sorted plant-gate alternatives, extract, powder and other post-curing products are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vanilla-raw |
| classification_refs | CPC 3.0: 01658 Vanilla, raw |
| covered_products | Mature green uncured vanilla pods of declared species and grade at farm gate before curing |
| excluded_products | Cured or dried pods; cleaned or sorted plant-gate alternatives; extract, powder and planting material |
| representative_product | Mature green uncured Vanilla planifolia pods, declared grade, at farm gate |
| production_route | Perennial vine management, declared support and pollination route, repeated selective hand harvest, minimal conditioning and green-pod grading |
| market_state | Fresh green uncured and undried pods on an as-received mass basis before aroma-development processing |

The managed-biological-production parent is perennial vanilla-vine cultivation. Production or technology routes differing in support system, shade, pollination method, inputs, yield or asset use must be recorded separately; weighted aggregation is allowed only when each route inventory and yield contribution remain traceable.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mature green uncured vanilla pods of declared species and grade at farm gate before curing |
| How much | 1 kg as-received mass |
| How well | Meets declared maturity and grade; green, uncured, undried and excluding rejected pods |
| How long or cycle | Declared reporting period covering attributed perennial phases and every selective harvest round forming the reference amount |
| reference_flow_link | Output `vanilla_raw_reference` from `green_pod_grading_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Vanilla, raw `51e085e4-b15c-4933-b7eb-45eee9bd8958` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical species; mature-green criterion; uncured and undried state; producer grade; as-received moisture basis; farm-gate hand-off before curing; support system; pollination route; harvest rounds; geography and reporting period |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory amounts to 1 kg accepted mature green uncured pods on the declared as-received moisture basis. |
| `grade_mass_reconciliation` | harvest, conditioning and grading hand-offs | Mass | kg | Reconcile input to accepted grade, rejected or downgraded pods, incidental matter and mass loss; rejected material never enters reference output. |
| `harvest_round_aggregation` | repeated selective harvest | Mass | kg | Aggregate harvested and rejected mass by round before reporting-period aggregation, retaining dates and maturity criteria. |
| `perennial_normalization` | establishment, replacement and shared infrastructure | Mass | kg | Attribute multi-period burdens once over accepted output of the same productive period; prohibit downstream re-annualization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Established or newly planted managed vanilla vines with propagation source, species, support system, vine age or phase and prior-period carry-in declared |
| starting_condition_role | Starting stock for perennial managed production; establishment burdens are included or linked and attributed over the declared productive period |
| product_classification_scope | Mature green uncured pods at farm gate before curing; excludes cured, dried, plant-gate cleaned or sorted goods and extract |
| recursive_input_rule | Farm-retained vines, cuttings and green pods remain visible burden-carrying internal flows; purchased same-category material requires an upstream dataset and cannot be zero burden |
| upstream_dataset_requirement | Purchased propagation, nutrients, water and energy require compatible upstream datasets; Flow Sets resolve to verified UUIDs during foreground generation |
| disclosure | Declare species, support and shade, pollination route, vine phase and productive years, replacements, harvest rounds, maturity and grade, moisture basis, reject destinations and pre-curing hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_vine_route` | `perennial_vine_management` | Include propagation or vine carry-in, support and shade, training and pruning, pollination, nutrients, water, energy, shared infrastructure and pod development. | `fao-vanilla-postharvest-compendium` |
| `boundary_selective_harvest` | `selective_pod_harvest` | Model repeated maturity-selective harvest independently and record collected pods, retained immature pods, incidental matter and losses by round. | `fao-vanilla-postharvest-compendium` |
| `boundary_primary_conditioning` | `on_farm_primary_conditioning` | Include only minimal pre-curing handling; exclude killing, sweating, fermentation, aroma development, deliberate drying and plant-gate cleaning. | `fao-vanilla-postharvest-compendium` |
| `boundary_grading_handoff` | `green_pod_grading_handoff` | Declare accepted grade and every downgraded or rejected destination, with hand-off before curing. | `fao-vanilla-postharvest-compendium` |
| `boundary_route_deltas` | alternative support, pollination and handling routes | Keep topology, inputs, energy, yield and asset-use differences separate unless route records support reproducible weighting. | `fao-vanilla-postharvest-compendium` |
| `boundary_excluded_processing` | downstream operations | Exclude curing, drying, aroma-development conditioning, plant-gate cleaning or sorting, grinding and extract manufacture. | `fao-vanilla-postharvest-compendium` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `perennial_vine_management` | Perennial vanilla-vine management and pod development | `required` | Always; declare the alternative technology route delta for support and pollination, period, state and hand-off | Managed biological production parent | kg harvest-ready mature green pods |
| `selective_pod_harvest` | Repeated selective harvest of mature green pods | `required` | Always; use batch mode records for each round and declare route, period, state and hand-off | Harvest and capture | kg harvested green pods by round |
| `on_farm_primary_conditioning` | Minimal on-farm pre-curing handling | `required` | Always; declare route, period, state and hand-off | Primary conditioning | kg handled green uncured pods |
| `green_pod_grading_handoff` | Green-pod grading and farm-gate hand-off | `required` | Always; declare route, period, state and hand-off | Grading and sorting | 1 kg accepted mature green uncured pods |

### Process: Perennial vanilla-vine management and pod development (`perennial_vine_management`)

This perennial, period-indexed process links establishment, vine replacement, support or shade infrastructure, pollination and pod development to the periods and routes producing harvested pods.

#### Inputs

##### Product flows

###### Vanilla planting cuttings or established-vine carry-in (`propagation_material`)

Identity and quantity rule: Measured purchased stock plus attributed farm-retained stock; external identity is unresolved until species, propagation state, provider, geography, property and unit are verified; farm-retained stock is an internal burden-carrying transfer.

- Selected flow: Vanilla planting cuttings or established vines
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased stock plus attributed farm-retained stock; external identity is unresolved until species, propagation state, provider, geography, property and unit are verified; farm-retained stock is an internal burden-carrying transfer.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted green uncured pods over the declared productive period
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_perennial_vine_records`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: planting stock attributed per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Consolidated fertilizer and nutrient amendments (`nutrient_inputs`)

Identity and quantity rule: Measured product quantities with nutrient composition retained.

- Selected flow: Actual fertilizer and nutrient products
- Flow property / unit: Mass / kg or compatible nutrient property/unit
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Measured product quantities with nutrient composition retained.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted green uncured pods
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_management_inputs`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: consolidated nutrient products per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Irrigation water supplied to vines (`irrigation_water`)

Identity and quantity rule: Metered volume or delivered volume calculated from pump hours and verified flow rate; rainfall is disclosed but not exchanged.

- Selected flow: Irrigation water from foreground source records
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered volume or delivered volume calculated from pump hours and verified flow rate; rainfall is disclosed but not exchanged.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted green uncured pods
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_management_inputs`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 20
  - Unit: m3/kg reference product
  - Basis: delivered irrigation per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Energy carriers for management and shared equipment (`management_energy`)

Identity and quantity rule: Measured carriers converted to energy with declared factors and linked to consuming nodes and periods.

- Selected flow: Energy carriers from invoices, meters and fuel logs
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Measured carriers converted to energy with declared factors and linked to consuming nodes and periods.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg accepted green uncured pods
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_management_inputs`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg reference product
  - Basis: management and shared-equipment energy per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standing vines bearing harvest-ready mature green pods (`standing_vines_mature_pods`)

Identity and quantity rule: Internal intermediate calculated from round-level harvest and loss reconciliation; no external UUID.

- Selected flow: Internal standing-vine and harvest-ready pod state
- Flow property / unit: Mass / kg harvest-ready pods
- Amount rule: Internal intermediate calculated from round-level harvest and loss reconciliation; no external UUID.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted green uncured pods
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_perennial_vine_records`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: harvest-ready pods per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Prunings, dead vines and field residues (`cultivation_residues`)

Identity and quantity rule: Measure residues by retained, recovered, treated or discarded destination; in-situ material is not also exported as waste.

- Selected flow: Internal/deferred crop residues by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Measure residues by retained, recovered, treated or discarded destination; in-situ material is not also exported as waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted green uncured pods
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_and_emission_records`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: residues leaving productive use per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Reported field emissions by substance and compartment (`reported_field_emissions`)

Identity and quantity rule: Calculate only from foreground activity records and a declared method; UUIDs are deferred until substance/species, chemical basis and receiving compartment are established.

- Selected flow: Unresolved substance-specific emissions to air, water or soil
- Flow property / unit: Mass / kg
- Amount rule: Calculate only from foreground activity records and a declared method; UUIDs are deferred until substance/species, chemical basis and receiving compartment are established.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted green uncured pods
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_and_emission_records`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: screening total only; final exchanges remain substance and compartment specific
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Repeated selective harvest of mature green pods (`selective_pod_harvest`)

Mature pods are selectively removed from standing perennial vines in repeated rounds while immature pods remain for later rounds.

#### Inputs

##### Product flows

###### Standing vines and harvest-ready pods entering harvest (`harvest_ready_vines_input`)

Identity and quantity rule: Internal transfer equal to reconciled harvest-ready pod mass across all rounds; no external UUID.

- Selected flow: Internal standing-vine and harvest-ready pod state
- Flow property / unit: Mass / kg harvest-ready pods
- Amount rule: Internal transfer equal to reconciled harvest-ready pod mass across all rounds; no external UUID.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted green uncured pods
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_selective_harvest_rounds`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: harvest-ready input per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Energy carriers for harvest equipment (`harvest_energy`)

Identity and quantity rule: Measure by harvest round; record zero when fully manual and no carrier crosses the boundary.

- Selected flow: Energy carriers from harvest-round records
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Measure by harvest round; record zero when fully manual and no carrier crosses the boundary.
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1 kg harvested green pods
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_selective_harvest_rounds`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg harvested green pods
  - Basis: harvest energy per kg harvested green pods
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested mature green uncured pods (`harvested_green_pods`)

Identity and quantity rule: Sum measured harvest-round mass while retaining species, maturity, round and lot identifiers.

- Selected flow: Internal harvested mature green uncured pods
- Flow property / unit: Mass / kg
- Amount rule: Sum measured harvest-round mass while retaining species, maturity, round and lot identifiers.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted green uncured pods
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_selective_harvest_rounds`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 4
  - Unit: kg/kg reference product
  - Basis: harvested pods per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Pods lost or rejected during harvest (`harvest_rejects`)

Identity and quantity rule: Measure damaged, immaturely detached or diseased pods by round; pods retained on vines are neither output nor waste.

- Selected flow: Internal/deferred rejected pod waste by condition and destination
- Flow property / unit: Mass / kg
- Amount rule: Measure damaged, immaturely detached or diseased pods by round; pods retained on vines are neither output nor waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg harvested green pods
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_selective_harvest_rounds`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg harvested green pods
  - Basis: rejected or lost pods per kg harvested pods
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Minimal on-farm pre-curing handling (`on_farm_primary_conditioning`)

Only shade holding and removal of loose field matter are included; killing, sweating, fermentation, aroma development, deliberate drying and plant-gate cleaning are prohibited.

#### Inputs

##### Product flows

###### Harvested green uncured pods entering handling (`harvested_pods_input`)

Identity and quantity rule: Internal transfer equal to measured harvested-pod output, retaining lot and round identity.

- Selected flow: Internal harvested mature green uncured pods
- Flow property / unit: Mass / kg
- Amount rule: Internal transfer equal to measured harvested-pod output, retaining lot and round identity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg handled green pods
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_primary_conditioning`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg handled green pods
  - Basis: harvested input per kg handled pods
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Minimally handled green uncured pods (`conditioned_green_pods`)

Identity and quantity rule: Measure after shade holding or loose field-matter removal; product remains green, uncured, undried and mostly odourless.

- Selected flow: Internal minimally handled green uncured pods
- Flow property / unit: Mass / kg
- Amount rule: Measure after shade holding or loose field-matter removal; product remains green, uncured, undried and mostly odourless.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg handled green pods
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_primary_conditioning`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 0.5
  - Upper: 1
  - Unit: kg/kg harvested input
  - Basis: handled green pods per kg harvested input
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Loose field matter and handling rejects (`conditioning_rejects`)

Identity and quantity rule: Measure removed soil, plant fragments and damaged pods by destination.

- Selected flow: Internal/deferred handling waste by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Measure removed soil, plant fragments and damaged pods by destination.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg harvested input
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_primary_conditioning`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg harvested input
  - Basis: removed matter and rejects per kg harvested input
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Green-pod grading and farm-gate hand-off (`green_pod_grading_handoff`)

The input is classified into the accepted declared grade and downgraded, rejected or waste destinations, with hand-off strictly before curing.

#### Inputs

##### Product flows

###### Minimally handled green pods entering grading (`conditioned_pods_input`)

Identity and quantity rule: Internal transfer equal to measured handled-pod output.

- Selected flow: Internal minimally handled green uncured pods
- Flow property / unit: Mass / kg
- Amount rule: Internal transfer equal to measured handled-pod output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted green uncured pods
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_green_pod_grading`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: grading input per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted mature green uncured vanilla pods at farm gate (`vanilla_raw_reference`)

Identity and quantity rule: Exactly 1 kg after grade reconciliation; fixed identity is detail-confirmed CPC 01658 Product flow at farm gate and narrowed by required qualifiers.

- Selected flow: Vanilla, raw `51e085e4-b15c-4933-b7eb-45eee9bd8958`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Exactly 1 kg after grade reconciliation; fixed identity is detail-confirmed CPC 01658 Product flow at farm gate and narrowed by required qualifiers.
- Value mode: `fixed_value`
- Specificity: `generic`
- Normalization basis: 1 kg accepted mature green uncured pods
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Sources: `reference-normalization-definition`
- Range: Quantity QA range
  - Range role: `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: reference product divided by the 1 kg reference amount
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `reference-normalization-definition`

##### Waste flows

###### Off-grade, damaged or rejected green pods (`off_grade_pods`)

Identity and quantity rule: Measure each off-grade, damage, rework, recovery or discard route; rework may return once with a linked lot and may not enter accepted output twice.

- Selected flow: Internal/deferred off-grade pod waste by state and destination
- Flow property / unit: Mass / kg
- Amount rule: Measure each off-grade, damage, rework, recovery or discard route; rework may return once with a linked lot and may not enter accepted output twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg grading input
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_green_pod_grading`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading input
  - Basis: off-grade or rejected pods per kg grading input
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_perennial_periods` | establishment, replacement and productive years | Attribute once across the declared productive period using accepted green-pod mass from that period; retain phase/year links and disclose unproductive years. |  |
| `allocation_repeated_harvest` | selective harvest rounds | Assign round-specific inputs, energy, rejects and output directly; allocate truly shared burdens by harvested mass across relevant rounds without period-level duplication. |  |
| `allocation_shared_infrastructure` | supports, shade, irrigation, tools and other shared assets | Enumerate consuming nodes and service periods, choose one documented use-time, area or productive-output basis and prevent duplication. |  |
| `allocation_rejects` | residues and rejected or off-grade pods | Discard receives no avoided-burden credit; a recovered product leaving the boundary is separate and requires disclosed allocation or substitution and sensitivity. |  |
| `allocation_single_reference_product` | accepted green uncured pods | The baseline has one intended reference product; rejects, incidental matter, retained immature pods and residues cannot become co-products merely to reduce burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_perennial_vine_records` | `perennial_vine_management` | propagation, vine phases, support, pollination, standing crop | field register | species; source; mass; vine count/age; establishment/replacement; support/shade; pollination; dates; harvest-ready mass | Reconcile plot, propagation and observation records by route and period | kg; count; date | each event and season | all burden-bearing years | farm and plot | stratify before attribution and aggregation | dated records, invoices, species record and sign-off |
| `cp_management_inputs` | `perennial_vine_management` | nutrients, irrigation, energy | invoice, log, meter | product; composition; mass; water source/volume; pump hours/rate; carrier/quantity; node; date | record each event and calculate only with verified factors | kg; m3; kWh; L; MJ | each application or meter interval | complete reporting period | farm, plot and equipment route | sum by actual product/carrier before normalization | invoice, calibration, log and factor record |
| `cp_residue_and_emission_records` | `perennial_vine_management` | residues and emissions | weighing log and calculation sheet | material; mass; destination; substance; basis; compartment; activity; factor; method | weigh exported residues and calculate identified emissions only | kg | each removal and calculation period | complete reporting period | plot and destination | reconcile destinations; aggregate after resolution | scale, receipt, method citation and review |
| `cp_selective_harvest_rounds` | `selective_pod_harvest` | harvest, rejects, losses, energy | lot sheet | round/date; plot; species; maturity; masses; retained status; carrier; labour mode | weigh each round and link equipment records | kg; MJ; date | every round | all contributing rounds | plot, round and lot | sum linked rounds and keep rejects separate | calibrated scale, signed lot sheet and energy log |
| `cp_primary_conditioning` | `on_farm_primary_conditioning` | input, handled pods, removed matter | handling sheet | lot; input/output mass; holding time; operations; rejects/destination; no-curing declaration | weigh before/after and document no curing or deliberate drying | kg; hour | every lot | all contributing lots | handling area and lot | reconcile input, output, rejects and loss | calibrated scale, time log, checklist and photos/equivalent |
| `cp_green_pod_grading` | `green_pod_grading_handoff` | accepted grade, off-grade, rework, hand-off | grading/dispatch record | lot; species; maturity; grade; input; accepted; off-grade; rework; destination; date; uncured state | weigh each state and link accepted lots to pre-curing dispatch | kg; date | every lot | all contributing lots | grading site and lot | reconcile all states and remove rework duplication | calibrated scale, grade specification, dispatch and no-curing declaration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = attributed amount / accepted reference mass | attributed amount; accepted mass | amount per kg reference product | `reference-normalization-definition` |
| `calc_period_attribution` | establishment, replacement, shared infrastructure | attributed burden = recorded burden × documented service share | burden; nodes; period; share basis | period-attributed burden |  |
| `calc_harvest_round_sum` | repeated selective harvest | period mass = sum of linked round masses; rejects and retained pods separate | round; harvested; reject; retained status | period harvested/rejected mass |  |
| `calc_mass_reconciliation` | handling and grading | difference = input - accepted - rejects - retained/transferred outputs | input and all state masses | difference and completeness flag | `reference-normalization-definition` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_state` | reference product and lots | Species, maturity, grade, uncured/undried state, moisture basis and farm-gate hand-off are complete. | species, grade, lot, no-curing and dispatch records |
| `dq_temporal_completeness` | perennial route and harvest | Cover all burden-bearing phases and contributing rounds and disclose exclusions. | plot history, phase, round and replacement records |
| `dq_route_separation` | alternative routes | Preserve route differences until weighting is reproducible. | route-coded records and aggregation sheet |
| `dq_mass_balance` | harvest, handling, grading | Reconcile each round/lot and investigate differences beyond site tolerance. | signed balance and calibration record |
| `dq_flow_resolution` | Flow Sets and unresolved cards | Resolve verified UUIDs when generating exchanges; resolve purchased propagation and elementary flows only after complete semantic identity. | exchange-resolution and detail evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Require fixed UUID, Mass property/unit group and all qualifiers; reject cured, dried, aroma-developed, plant-gate cleaned/sorted goods and extract. | `fao-vanilla-postharvest-compendium` |
| `validate_process_topology` | process map | Require all four nodes and hand-offs; harvest links to standing vines and conditioning/grading remain before curing. | `fao-vanilla-postharvest-compendium` |
| `validate_maturity_grade_species` | every accepted lot | Require species, maturity criterion, grade, green uncured state and farm-gate hand-off. | `fao-vanilla-postharvest-compendium` |
| `validate_period_attribution` | perennial and shared burdens | Require phase, service-period, consuming-node and attribution evidence; fail omission or duplication. |  |
| `validate_round_completeness` | repeated selective harvest | Require complete ordered rounds and reconcile harvested, rejected, retained and lost states. |  |
| `validate_reject_routing` | rejected and off-grade states | Each state links to one rework, downgraded/recovered exit or discard destination and is excluded from accepted output. |  |
| `validate_flow_bindings` | all cards | Fixed binding is limited to the detail-confirmed reference product; parameterized cards cite applicable Flow Sets and final exchanges require verified UUIDs. |  |
| `validate_mass_balance` | harvest, handling and grading | Reconcile inputs and outputs by round/lot and explain mass loss. | `reference-normalization-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for mature green uncured vanilla pods at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and geography, time and technology matching |
| allowed_use | Farm-gate LCA of green raw pods and upstream input to a separately modelled curing system |
| excluded_use | Cured/dried pods, plant-gate cleaned/sorted goods, extract, powder or unspecified aromatic vanilla product |
| required_metadata | species; plot/geography; support/shade; pollination; vine phase/productive period; replacements; rounds; maturity/grade; moisture; uncured state; reject destinations; hand-off |
| required_quality_disclosure | phase/round coverage; route separation; flow resolution; meter/scale quality; mass balance; shared infrastructure attribution; exclusions; provisional-range status |
| update_trigger | Change in species, route, period attribution, maturity/grade, hand-off state, topology, reference UUID, Flow Set version or entry of curing/plant processing |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-vanilla-postharvest-compendium` | `official_guidance` | Food and Agriculture Organization of the United Nations, *Vanilla: Post-harvest Operations*, Post-harvest Compendium | Production/harvest sequence; green mature pods mostly odourless; curing as separate aroma-development operation; pre-curing boundary and exclusions |
| `reference-normalization-definition` | `method_factor` | This PCR 1 kg as-received reference normalization and node mass-balance identity | Exact reference output, normalization and mass reconciliation |
