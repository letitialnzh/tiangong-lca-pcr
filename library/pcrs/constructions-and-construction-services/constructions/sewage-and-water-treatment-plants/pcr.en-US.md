---
pcr_id: pcr.constructions-and-construction-services.constructions.sewage-and-water-treatment-plants
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sewage and water treatment plants

## 1. Scope and Applicability

This PCR covers one constructed, tested and accepted sewage-treatment plant, drinking-water treatment plant, or independently contracted sewage-system facility. The latter may include a pumping, retention or disposal facility accepted as one sewage-system contract, with its internal connections, but not a separately accepted local water or sewer main. Include civil tanks, foundations, process equipment, controls, and directly attributable inlet/outlet connections within the accepted contract. Independently delivered local mains and long-distance pipelines are separate products; routine water or wastewater treatment after handover is a service, not this construction asset. [unsd-cpc3-notes; epa-startup]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.sewage-and-water-treatment-plants |
| classification_refs | CPC 3.0 53253; mapping acceptance is separate. |
| covered_products | Accepted treatment plant or separately contracted sewage-system facility and integral contract connections. |
| excluded_products | Independently accepted local mains, long-distance pipelines, equipment-only sales, routine treatment service. |
| representative_product | One accepted function-qualified treatment facility with declared design treatment capacity and unit list. |
| production_route | Site excavation; civil tank/foundation forming; equipment, process-piping and controls integration; dry/wet tests, remediation and signed handover. |
| market_state | Installed asset at engineering acceptance, not a volume of treated water. |

The parent `integrate_accept` activity has route-specific unit lists: sewage treatment may involve screening, biological and sludge units, while drinking-water treatment may involve clarification, filtration and disinfection. A stand-alone sewage-system contract includes only its evidenced collection structures, not an invented treatment train. For each route collect unit list, design capacity, material categories, interface geometry and test criteria; do not assume a universal intensity. Routes can coexist only as separately apportioned lines of one declared facility. [unsd-cpc3-notes; epa-startup]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Constructed and accepted sewage- or water-treatment plant or contracted sewage-system facility. |
| How much | One accepted facility; report design capacity in m3/day and connection dimensions separately. |
| How well | As-built units, structural integrity, leakage, controls and performance tests meet the specific contract acceptance criteria. |
| How long or cycle | One construction project through signed handover; design life is disclosed metadata. |
| reference_flow_link | `accepted_facility` output from `integrate_accept`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted facility |
| Reference product flow | Accepted sewage or water treatment facility; UUID unresolved |
| Reference flow property | Count; UUID unresolved |
| Reference unit group | Count; UUID unresolved |
| Reference unit | facility |
| Required qualifiers | Site; function; design capacity; treatment-unit list; contract limit; connection length; test media; acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `facility_count` | reference product | Count, UUID unresolved | facility | Count the signed accepted contractual facility once, not each treatment unit. |
| `design_capacity` | treatment route | Volume per time | m3/day | Report designed influent or treated-water capacity separately from commissioning test volume. |
| `earth_state` | excavation and fill | Volume and density | m3; kg/m3 | Distinguish in-situ cut, loose haul and compacted fill before mass conversion. |
| `energy_carrier` | construction and tests | Carrier-specific energy or mass | kWh; MJ; kg | Keep fuel and electricity separate and do not double count generator output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed site and existing drainage or utility interfaces before contract construction. |
| starting_condition_role | Physical baseline, not a free finished plant. |
| product_classification_scope | One accepted treatment plant or contracted sewage-system facility; independent mains remain separate. |
| recursive_input_rule | Purchased same-category completed modules enter at supplier handover with their own upstream dataset, not as unexplained raw material. |
| upstream_dataset_requirement | Route-matched concrete, steel, pipe, process equipment, energy, transport and waste treatment datasets. |
| disclosure | Function, capacity, units, contract connections, civil quantities, spoil, commissioning, shared works, rework and identity gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | whole facility | Include contract works, dry/wet testing and defect closeout through signed acceptance; exclude normal post-handover treatment. | `epa-startup` |
| `connection_limit` | pipe interfaces | Include only directly attributable contract connections; independently accepted local mains and long-distance pipelines use separate datasets. | `unsd-cpc3-notes` |
| `removal_handoff` | `prepare_site` | Record ground/source condition, removed material, internal cut reuse and exported spoil separately; pass accepted excavation to forming. | `mass-balance-identity` |
| `forming_handoff` | `form_civil` | Pass accepted tank shells/foundations to integration; rejected sections are repaired or leave with documented destination. | `mass-balance-identity` |
| `route_delta` | `integrate_accept` | Actual process-unit topology, materials, test media and acceptance criteria follow the sewage, potable-water or sewage-system route. | `epa-startup` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_site` | Excavation and site preparation | required | Surveyed site to accepted excavation. | Independently remove soil/obstructions; route reusable cut and spoil. | Surveyed footprint and removed volume. |
| `form_civil` | Tank and foundation forming | required | Accepted excavation to accepted civil shell. | Transform concrete, reinforcement and fill into designed geometry; repair failed sections. | As-built civil volume and area. |
| `integrate_accept` | Equipment integration and acceptance | required | Civil shell to signed whole-facility handover. | Install pumps, treatment units, piping and controls; dry/wet test and correct defects. | One accepted facility with design capacity. |

### Process: Excavation and site preparation (`prepare_site`)

#### Inputs

##### Product flows

###### Earthwork service (`earthwork_service`)

Separately subcontracted site clearing and excavation; exclude owner equipment counted elsewhere.

- Selected flow: Earthwork and excavation construction service by contracted scope
- Flow property / unit: Contract service quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- Amount rule: Reconcile invoice to surveyed excavation and shared-work allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site`
- Range: Subcontract scope share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of documented excavation
  - Basis: assigned excavation scope divided by documented project excavation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Site energy (`site_energy`)

Fuel or electricity for owner-operated excavation, dewatering and local haul only; omit energy already embodied in subcontracted earthwork service.

- Selected flow: Construction energy carrier by actual carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter carrier use by task and separate subcontract scope.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional site-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/facility
  - Basis: broad screen with documented carrier conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted excavation (`accepted_excavation`)

Surveyed prepared footprint handed to `form_civil`, not an additional saleable plant.

- Selected flow: Accepted excavation and foundation footprint
- Flow property / unit: Area / m2
- Amount rule: Sum non-overlapping accepted foundation footprints.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site`
- Range: Footprint completion fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of specified footprint
  - Basis: accepted footprint divided by specified footprint
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Exported spoil (`exported_spoil`)

Off-site excavated or unsuitable material; on-site cut reuse is an internal handoff.

- Selected flow: Exported excavated material by type and destination
- Flow property / unit: Mass / kg
- Amount rule: Balance removed mass against reuse, stock change and export.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site`
- Range: Export share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of removed mass
  - Basis: exported mass divided by removed mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Tank and foundation forming (`form_civil`)

#### Inputs

##### Product flows

###### Received accepted excavation (`received_excavation`)

Internal handoff of `accepted_excavation` from `prepare_site`; do not reassign its upstream removal burdens as a new purchased service.

- Selected flow: Accepted excavation and foundation footprint
- Flow property / unit: Area / m2
- Amount rule: Match the upstream accepted footprint exactly.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site`
- Range: Internal footprint match
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: received/handed-off area
  - Basis: received area divided by accepted upstream area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Civil materials (`civil_materials`)

Concrete, reinforcement, fill and formwork by specification; reusable formwork is apportioned by actual use.

- Selected flow: Civil construction material by actual specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, returned, rejected and stocked amounts by material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Range: Accepted installation fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered material mass
  - Basis: accepted installed mass divided by delivered mass by material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Civil energy (`civil_energy`)

Power or fuel for formwork, placement and curing support, excluding purchased services that already include that energy.

- Selected flow: Civil-construction energy carrier by actual carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter equipment use and assign only unbundled activity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional civil-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/facility
  - Basis: broad screen with documented carrier conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted civil shell (`civil_shell`)

Accepted tank and foundation structures handed to `integrate_accept`.

- Selected flow: Accepted civil tank shells and foundations
- Flow property / unit: Concrete volume / m3
- Amount rule: Sum as-built accepted structures without counting repairs twice.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_civil`
- Range: Civil handoff completion
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of specified structures
  - Basis: accepted structures divided by specified structures
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Rejected civil material (`civil_rejects`)

Off-spec pours or sections repaired here or sent to declared recovery/disposal. Only boundary exits are waste.

- Selected flow: Rejected civil material by type and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile failure, rework, return, recovery and disposal.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_civil`
- Range: Reject share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of civil-material delivery mass
  - Basis: boundary-exit rejects divided by delivered civil mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Equipment integration and acceptance (`integrate_accept`)

#### Inputs

##### Product flows

###### Received accepted civil shell (`received_civil_shell`)

Internal handoff of `civil_shell` from `form_civil`; it is not another externally purchased structure.

- Selected flow: Accepted civil tank shells and foundations
- Flow property / unit: Concrete volume / m3
- Amount rule: Match accepted upstream shell dimensions and QA sign-off.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_civil`
- Range: Internal shell match
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: received/handed-off civil volume
  - Basis: received volume divided by accepted upstream volume
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Process equipment and direct pipes (`plant_components`)

Pumps, process units, valves, controls and contract-limited connection pipe by route; receive the accepted civil shell internally without repurchasing it.

- Selected flow: Plant equipment and integral process-piping components by specification
- Flow property / unit: Mass or count / kg or item
- Amount rule: Reconcile deliveries, installations, returns and replacements by unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Accepted component share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered components
  - Basis: accepted installed components divided by delivered components
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Wet-test water (`test_water`)

Only water crossing construction boundary for testing and cleaning before handover; operating influent is excluded.

- Selected flow: Commissioning test water by source and quality
- Flow property / unit: Volume / m3
- Amount rule: Meter test withdrawal, reuse and discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tests`
- Range: Provisional wet-test screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: m3/facility
  - Basis: broad initial screen; actual test schedule controls quantity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Commissioning energy (`test_energy`)

Meter fuel and electricity for pre-handover dry/wet tests and repairs; exclude routine operation after acceptance.

- Selected flow: Commissioning energy carrier by actual carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter by test and carrier through signed handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tests`
- Range: Provisional commissioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/facility
  - Basis: broad screen with documented carrier conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted facility (`accepted_facility`)

Whole plant or separately contracted sewage-system facility after dry/wet checks, defect closure and signed handover.

- Selected flow: Accepted sewage or water treatment facility of declared function and capacity
- Flow property / unit: Count / facility
- Amount rule: Count exactly one accepted facility per contractual reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Range: Reference identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: facility/reference flow
  - Basis: signed facility count at handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Failed equipment and trial residues (`integration_rejects`)

Rejected units and construction-test residues leave to measured return, recovery or treatment; repaired units loop in this node and are not additional accepted output.

- Selected flow: Failed components and commissioning residues by identity and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile failures, repairs, returns and exported trial material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tests`
- Range: Integration boundary-exit share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of relevant delivered material mass
  - Basis: boundary-exit rejects divided by relevant delivered mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_facility` | accepted output | Attribute construction to the accepted asset; no operating treatment output belongs to this reference product. | `unsd-cpc3-notes` |
| `shared_works` | shared access, plant and tests | Assign by metered use or documented engineering driver and count common work once. | `mass-balance-identity` |
| `spoil_route` | cut and fill | Internal reuse retains site burdens; export has explicit destination; no unsupported recovery credit. | `mass-balance-identity` |
| `reject_retention` | defects | Keep repair burdens at originating node; only retested and accepted structures/units enter final asset. | `mass-balance-identity`; `epa-startup` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site` | `prepare_site` | earthwork, footprint, spoil | survey and ticket | footprint; cut; density; reuse; export; destination; contract scope | survey, weighbridge, invoice | m2; m3; kg | segment/load | project | contract site | balance cut, reuse and export | survey, ticket |
| `cp_energy` | `prepare_site`; `form_civil` | construction energy | meter and equipment log | carrier; meter; fuel; task; subcontract overlap | meter, invoice, shift log | kWh; MJ; kg | shift/month | project | site plant | sum by carrier and allocate once | meters and invoices |
| `cp_civil` | `form_civil` | materials, shell, rejects | bill and inspection | specification; delivery; installation; volume; reject; repair; return; accepted shell | tickets, as-built and QA | kg; m3; item | batch/structure | project | civil footprint | reconcile delivered and accepted states | tickets, QA |
| `cp_components` | `integrate_accept` | units and connections | bill and inspection | unit list; delivered; installed; returned; connection length; design capacity | bill, as-built and QA | kg; item; m; m3/day | unit/segment | project | facility | reconcile unit and connection scope | invoices, drawings |
| `cp_tests` | `integrate_accept` | water, energy, rejects | meter and test | test water; energy; dry/wet result; failure; repair; residue; destination | meter, test sheet, waste ticket | m3; kWh; kg | test | through acceptance | facility | sum construction tests only | signed tests |
| `cp_acceptance` | `integrate_accept` | accepted facility | certificate | function; capacity; unit list; connection limit; defects; closure; date | signed handover | facility; m3/day | handover | project | contract asset | count signed asset once | certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cut_balance` | `prepare_site` | Removed mass = reused + exported + stock change using measured state-specific density. | survey, density, tickets | cut and spoil | `mass-balance-identity` |
| `component_balance` | civil and integration | Delivered = accepted installed + returned + rejected exit + stock change; repair is not another new input. | bills, QA, returns | accepted material and reject | `mass-balance-identity` |
| `acceptance_count` | `integrate_accept` | Count signed accepted facility after defect closure; capacity remains a qualifier. | tests and handover | reference product | `epa-startup` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_trace` | all nodes | State function, capacity, unit list, contract boundary and gate. | drawings and handover |
| `handoff_balance` | site and civil | Match accepted internal handoffs without double counting. | survey and QA |
| `trial_separation` | commissioning | Separate construction tests from post-handover operation. | dated test sheets |
| `identity_gap` | unresolved flows | Confirm concrete flow, property and unit-group UUIDs before final process exchanges. | platform detail review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_gate` | reference product | Confirm function, capacity and signed acceptance; exclude independently accepted mains, equipment-only sale and routine service. | `unsd-cpc3-notes` |
| `route_units` | `integrate_accept` | Actual sewage, potable-water or sewage-system unit list must drive inventory and tests; absent units contribute nothing. | `epa-startup` |
| `test_gate` | acceptance | Require dry/wet checks, leak/control testing, defect closure and signed handover. | `epa-startup` |
| `reject_path` | all nodes | Rework loops to producing node; waste exits have measured destination and never enter accepted output. | `mass-balance-identity` |
| `range_role` | all cards | Provisional screening bounds are QA prompts, not default material intensity. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction package for an accepted treatment or sewage-system facility. |
| downstream_use | Secondary or background construction data only for comparable function, capacity, route and gate. |
| allowed_use | Construction-stage facility modelling with stated civil and equipment scope. |
| excluded_use | Routine treatment service, independent mains and equipment-only products. |
| required_metadata | Site, year, function, capacity, units, civil work, connections, tests and handover. |
| required_quality_disclosure | Shared-work allocation, material balances, trial/operation separation, provisional ranges and UUID gaps. |
| update_trigger | Changed route, design, contract boundary, as-built quantities, acceptance or confirmed identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Scope and mains separation. |
| `epa-startup` | official_guidance | US EPA, Start-Up of Municipal Wastewater Treatment Facilities, EPA 430/9-74-008, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=00000IDV.TXT | Unit differences and dry/wet acceptance tests. |
| `mass-balance-identity` | method_factor | Conservation-of-material identity applied to surveyed and weighed foreground records. | Materials, handoffs and rejects. |
