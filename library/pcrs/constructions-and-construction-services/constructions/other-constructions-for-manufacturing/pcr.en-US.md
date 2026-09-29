---
pcr_id: pcr.constructions-and-construction-services.constructions.other-constructions-for-manufacturing
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Specialized constructions for manufacturing

## 1. Scope and Applicability

This PCR covers one product-specialized manufacturing facility constructed, installed, tested and accepted as a physical asset. The facility must have a declared process family, installed unit list and contract limit. Include attributable site preparation, foundations, process structures, integrated equipment, utilities, controls, cold testing and pre-handover correction. Examples include specialized chemical or pharmaceutical facilities, coke ovens, blast furnaces and foundries. Exclude generic industrial buildings, separately sold machinery, post-handover manufacturing operations, manufactured goods, operational emissions and upstream feedstock production. There is no universal material recipe for this diverse category. [unsd-cpc3; doe-commissioning]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.other-constructions-for-manufacturing |
| classification_refs | CPC 3.0 53269; mapping acceptance is separate. |
| covered_products | Completed product-specialized manufacturing facilities with integrated route-specific structures and equipment. |
| excluded_products | Generic industrial buildings; equipment-only sales; manufactured output; operation; independently delivered infrastructure. |
| representative_product | One accepted specialized manufacturing facility with declared process family, capacity and installed units. |
| production_route | Site removal/preparation; foundation and process-structure forming; equipment/utility/control integration; tests, correction and handover. |
| market_state | Installed and accepted capital asset, not manufacturing service or commodity output. |

The parent activity is construction and integration. Chemical, metallurgical, pharmaceutical and other configurations are conditional route branches. Record differences in unit list, containment, utility, control and acceptance-test requirements from design and as-built evidence. Shared works may serve several units but are counted once. A chemical reaction is not a construction step. Hazardous-chemical pre-startup safety review applies only when the process and law require it. [unsd-cpc3; osha-psm]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Constructed and accepted product-specialized manufacturing facility. |
| How much | One accepted facility; designed throughput is a qualifier, not the reference amount. |
| How well | Installed units and interfaces meet contractual pre-handover tests and defect closeout. |
| How long or cycle | One construction project through signed acceptance; operating life is metadata. |
| reference_flow_link | `accepted_facility` output of `integrate_accept`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted facility |
| Reference product flow | Accepted specialized manufacturing facility; UUID unresolved |
| Reference flow property | Count; UUID unresolved |
| Reference unit group | Count; UUID unresolved |
| Reference unit | facility |
| Required qualifiers | Site; process/product family; designed capacity and unit; installed unit list; contract limit; acceptance criteria/date; shared-work attribution |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `facility_count` | reference product | Count; UUID unresolved | facility | Count one signed-off contractual facility, not each process unit. |
| `capacity_basis` | facility qualification | Designed throughput | declared mass or item/time unit | State rated basis, product family and tested configuration; do not convert to operational output. |
| `earth_mass` | site removal | Volume, bulk density, mass | m3; kg/m3; kg | Distinguish in-situ cut, reused fill, stock and exported spoil. |
| `energy_carriers` | construction and testing | Carrier-specific energy or mass | kWh; MJ; kg | Meter actual carriers before acceptance; exclude routine production energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed site, ground condition and documented pre-project service interfaces. |
| starting_condition_role | Physical baseline, not a burden-free finished facility. |
| product_classification_scope | One accepted specialized manufacturing facility within the declared construction contract. |
| recursive_input_rule | Purchased complete same-category facility modules enter at supplier handover with upstream datasets, not as free raw components. |
| upstream_dataset_requirement | Specification-matched material, equipment, energy, transport and waste-treatment datasets. |
| disclosure | Process family; unit list; capacity; limits; removal; installed quantities; tests; shared works; rework/rejects; UUID gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `asset_gate` | whole facility | Include attributable construction, integration, pre-handover testing and defect closure through signed acceptance; exclude routine later production. | `doe-commissioning` |
| `specialized_limit` | classification | Require product-/process-specific installed works, not merely a generic industrial shell; exclude equipment-only sales. | `unsd-cpc3` |
| `removal_handoff` | `prepare_site` | Identify removal source, removed state, accepted footprint, on-site reuse and off-site spoil; removal is independent of forming. |  |
| `forming_handoff` | `form_structures` | Convert specified materials and accepted footprint into inspected foundations/process structures; separate repair and rejects. |  |
| `integration_handoff` | `integrate_accept` | Integrate route-specific equipment, utilities and controls; deliver only tested accepted facility. | `doe-commissioning` |
| `route_delta` | process family | Resolve actual units, containment, utilities, controls and tests from design; no generic intensity is transferable without qualification. | `unsd-cpc3` |
| `hazard_gate` | applicable hazardous-chemical routes | Where PSM applies, retain pre-startup review before introduction of highly hazardous chemicals; this is not universal or post-handover production. | `osha-psm` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_site` | Site removal and preparation | required | Surveyed baseline to accepted footprint. | Remove identified site material; distinguish reuse and spoil. | Survey and accepted area. |
| `form_structures` | Foundation and process-structure forming | required | Accepted footprint to inspected structures. | Form route-specific geometry; repair or reject failed work. | As-built takeoff and inspection. |
| `integrate_accept` | Equipment integration and facility acceptance | required | Inspected structures to signed handover. | Join actual equipment, utilities and controls; test and close defects. | Installed register, tests and one facility. |

### Process: Site removal and preparation (`prepare_site`)

#### Inputs

##### Product flows

###### Site preparation energy (`site_energy`)

Owner-operated excavation/preparation energy by actual carrier; exclude subcontract-embedded energy.

- Selected flow: Site energy carrier by actual carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Assign meter and fuel records to site tasks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site`
- Range: Site energy attribution share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of metered site energy
  - Basis: assigned energy divided by metered site energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared footprint (`prepared_footprint`)

Surveyed ground ready for foundations; internal handoff, not a second saleable facility.

- Selected flow: Accepted prepared manufacturing-facility footprint
- Flow property / unit: Area / m2
- Amount rule: Sum non-overlapping accepted areas.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site`
- Range: Footprint acceptance share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of specified area
  - Basis: accepted area divided by specified foundation footprint
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

##### Waste flows

###### Exported excavation spoil (`exported_spoil`)

Removed soil or rock leaving the project, by material and destination; exclude on-site reuse.

- Selected flow: Exported excavated material by type and destination
- Flow property / unit: Mass / kg
- Amount rule: Balance cut against reuse, stock and export.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site`
- Range: Exported removal share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of removed mass
  - Basis: exported mass divided by removed mass by material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

##### Elementary flows

### Process: Foundation and process-structure forming (`form_structures`)

#### Inputs

##### Product flows

###### Received prepared footprint (`received_footprint`)

Carry the accepted site area into forming once, without repurchasing site preparation.

- Selected flow: Accepted prepared manufacturing-facility footprint
- Flow property / unit: Area / m2
- Amount rule: Match preceding accepted area.
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
  - Basis: received area divided by upstream accepted area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

###### Structure-forming materials (`structure_materials`)

Concrete, reinforcement, steel, refractory and lining material only as specified by actual route and structure.

- Selected flow: Foundation or process-structure material by grade and function
- Flow property / unit: Mass / kg
- Amount rule: Balance delivery, accepted placement, stock, returns and rejects by grade.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structures`
- Range: Accepted structure-material share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered mass
  - Basis: accepted installed mass divided by delivered mass by grade
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted process structures (`accepted_structures`)

Inspected foundations, supports and route-specific structures passed to installation.

- Selected flow: Accepted specialized manufacturing foundations and process structures
- Flow property / unit: Installed material mass / kg
- Amount rule: Sum accepted installed mass by structure and grade.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_structures`
- Range: Structure acceptance share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of placed mass
  - Basis: accepted mass divided by placed mass by grade
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

##### Waste flows

###### Rejected structure material (`structure_rejects`)

Failed/off-spec material exiting forming; same-node repair remains an input loop, not a second accepted output.

- Selected flow: Rejected structure material by composition and recovery destination
- Flow property / unit: Mass / kg
- Amount rule: Measure net rejected exit mass after same-node repair.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structures`
- Range: Structure rejection share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of placed mass
  - Basis: rejected mass divided by placed mass by grade
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

##### Elementary flows
### Process: Equipment integration and facility acceptance (`integrate_accept`)

#### Inputs

##### Product flows

###### Received process structures (`received_structures`)

Carry inspected structures forward once as an internal handoff.

- Selected flow: Accepted specialized manufacturing foundations and process structures
- Flow property / unit: Installed material mass / kg
- Amount rule: Match accepted structure mass from `form_structures`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_structures`
- Range: Internal structure match
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: received/handed-off mass
  - Basis: received mass divided by upstream accepted structure mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

###### Route-specific process equipment (`process_equipment`)

Purchased furnaces, vessels, production machinery, containment and handling units only when included in the whole-facility contract.

- Selected flow: Manufacturing process equipment by actual unit and specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile procured, installed, spare, returned and rejected components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equipment`
- Range: Equipment installation share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of procured mass
  - Basis: accepted installed mass divided by procured mass by unit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

###### Integrated utilities and controls (`utility_controls`)

Piping, electrical, control, ventilation and other balance-of-facility systems from actual design; do not duplicate `process_equipment`.

- Selected flow: Installed utility and control components by actual system
- Flow property / unit: Mass / kg
- Amount rule: Reconcile installed mass by system and procurement register.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equipment`
- Range: Utility/control installation share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of procured mass
  - Basis: installed mass divided by procured mass by system
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

###### Contracted installation and joining service (`installation_service`)

When independently procured, record mechanical erection, piping, electrical installation and control hookup against actual work packages; owner-operated work is represented by its direct inputs instead.

- Selected flow: Specialized facility installation service by actual work package
- Flow property / unit: Contracted service hours / h
- Amount rule: Reconcile accepted work-package hours to invoices and as-built scope without substituting a generic labor intensity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equipment`
- Range: Accepted installation-service share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of invoiced service hours
  - Basis: accepted hours divided by invoiced hours by work package
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

###### Commissioning energy (`commissioning_energy`)

Purchased energy for cold tests and pre-handover checks by actual carrier, not subsequent production.

- Selected flow: Commissioning energy carrier by actual carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Reconcile dated test meters and invoices through handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tests`
- Range: Pre-handover test energy share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of total metered project energy
  - Basis: commissioning energy divided by total metered project energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted specialized manufacturing facility (`accepted_facility`)

Only a tested facility with defects closed and signed handover counts; manufactured output is outside this card.

- Selected flow: Accepted specialized manufacturing facility for declared process family
- Flow property / unit: Count / facility
- Amount rule: Set to one only after all contract acceptance conditions pass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tests`
- Range: Accepted facility count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: facility
  - Basis: per signed-off facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

##### Waste flows

###### Rejected installation material (`installation_rejects`)

Off-spec or damaged components exiting integration after repair attempts; identify recovery, return or disposal destination.

- Selected flow: Rejected facility component by composition and destination
- Flow property / unit: Mass / kg
- Amount rule: Record net exit mass after same-node rework, by material and route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equipment`
- Range: Integration rejection share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered component mass
  - Basis: rejected exit mass divided by delivered component mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `shared_work` | multiple units or product families | Assign site, civil, utility and test burdens by measured takeoff or documented engineering driver; count shared works once. |  |
| `test_output` | pre-handover testing | If tests produce saleable material, meter and disclose quantity/disposition separately; never credit routine production or silently shift construction burdens. | `doe-commissioning` |
| `reject_route` | forming and integration | Keep rework inputs at producing node; accepted facility excludes rejects. Record recovered, returned or discarded exits by destination. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site` | `prepare_site` | removal, energy, footprint, spoil | survey and site log | cut; density; material; reuse; stock; export; accepted area; fuel; electricity | surveys, tickets, meters | m3; kg; m2; kWh; MJ | each lot and monthly meter | whole preparation | project site | reconcile cut, reuse, stock, export and accepted area | signed survey, tickets and readings |
| `cp_structures` | `form_structures` | materials, accepted works, rejects | material and inspection register | grade; delivery; placement; accepted mass; rework; return; rejection; destination | receipts, as-built takeoff, inspection | kg; m3 | each delivery/lot | whole civil period | project site | balance by grade and structure | receipts, drawings, inspections |
| `cp_equipment` | `integrate_accept` | equipment, utilities, joining service, rejects | procurement and installation register | unit/system; specification; delivered; installed; spare; returned; rejected; destination; work-package invoiced and accepted hours | supplier and site records | kg; count; h | each component/system/work package | whole installation | contract units | balance by actual unit without overlap; reconcile accepted service hours | supplier records, invoices, sign-off, rejection tickets |
| `cp_tests` | `integrate_accept` | test energy, acceptance | commissioning and turnover pack | process family; designed capacity; unit list; carrier; test; defect closure; safety review if applicable; date | meters, certificates, signed turnover | kWh; MJ; kg; facility | each test/final acceptance | through handover | accepted facility | sum test carriers; count facility after closure | readings, certificates, conditional safety review, signature |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `site_balance` | `prepare_site` | Removed mass = reused + exported + stock change + documented loss by material. | survey, density, tickets | kg by destination | `balance-identity` |
| `structure_balance` | `form_structures` | Delivered = accepted installed + rejected + returned + stock change by grade; rework is not new delivery. | receipts, inspection | kg by state | `balance-identity` |
| `equipment_balance` | `integrate_accept` | Delivered = accepted installed + spare + rejected + returned + stock change by component. | procurement and installation | kg by state | `balance-identity` |
| `acceptance_count` | reference product | Count = 1 only when tests, defect closeout and applicable safety review are documented and handover signed. | test and turnover pack | facility count | `doe-commissioning`; `osha-psm` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | facility | Declare product/process family, installed units, designed capacity and contract limit; no generic recipe. | design and as-built register |
| `dq_balance` | all nodes | Reconcile materials, energy, handoffs, shared works and reject destinations. | ledgers and reconciliation |
| `dq_gate` | acceptance | Separate pre-handover tests from production; document applicable safety review. | dated tests, signed turnover and conditional review |
| `dq_identity` | final exchanges | Resolve compatible flow, property and unit UUIDs before creating exchanges; expose candidate-stage gaps. | platform detail and measured units |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | facility | Reject count other than one, missing signed acceptance, process-family identity, capacity basis or unit list. | `doe-commissioning` |
| `v_handoffs` | process chain | Match prepared area and accepted structure mass across internal handoffs. | `balance-identity` |
| `v_rejects` | forming/integration | No rejected lot may count as accepted; link repair to producing node and exit to named destination. |  |
| `v_route` | design variants | Verify units and shared-work attribution against as-built records; apply hazard gate only when triggered. | `osha-psm` |
| `v_boundary` | whole facility | Exclude operating output/emissions after handover; disclose pre-handover test material separately. | `doe-commissioning` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction data package for one accepted specialized manufacturing facility. |
| downstream_use | `secondary_dataset`; `background_dataset` only with matched process family, route, size and geography. |
| allowed_use | Model installed facility construction with disclosed contract limit, unit list, route and handover. |
| excluded_use | Model routine production, product yield, operating emissions, equipment-only sales or an unqualified mix of unlike plants. |
| required_metadata | Site; process/product family; designed capacity/unit; installed units; contract limits; period; acceptance; shared allocation; UUID gaps. |
| required_quality_disclosure | Primary-record coverage, balances, tests, conditional safety review, rework and upstream match. |
| update_trigger | Changed route, units, boundary, material takeoff, capacity, acceptance gate, identity or guidance. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3` | official_guidance | [UNSD CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Specialized-facility identity and generic-building exclusion. |
| `doe-commissioning` | official_guidance | [US DOE commissioning of federal facilities](https://www.energy.gov/cmei/femp/commissioning-federal-buildings) | Test, defect and handover logic; not a universal industry test protocol. |
| `osha-psm` | standard | [OSHA 29 CFR 1910.119(i)](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.119) | Conditional hazardous-chemical pre-startup gate. |
| `balance-identity` | method_factor | Conservation and bounded-fraction identities applied to actual project records. | Reconciliation and mathematical QA ranges; not empirical intensity factors. |
