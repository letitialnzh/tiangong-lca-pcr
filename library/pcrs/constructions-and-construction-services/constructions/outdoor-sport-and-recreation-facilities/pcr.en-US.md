---
pcr_id: pcr.constructions-and-construction-services.constructions.outdoor-sport-and-recreation-facilities
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Outdoor sport and recreation facilities

## 1. Scope and Applicability

This PCR covers construction of one function-qualified outdoor sport or recreation facility through documented acceptance: outdoor sports ground or track, golf course, beach or marina recreation installation, public park or garden, or zoological or botanical garden. Declare asset family, contract footprint, component schedule and tests before collecting data. A turf field, marina berth and garden do not share one material bill. Indoor sport installations, separately accepted buildings or transport works, equipment-only sales, and post-handover operation or maintenance are excluded. [unsd-cpc3-notes; epa-parks-guide]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.outdoor-sport-and-recreation-facilities |
| classification_refs | CPC 3.0 53270; mapping acceptance is separate. |
| covered_products | Accepted outdoor sport or recreation facility within one declared construction contract. |
| excluded_products | Indoor sport installation; independently accepted building, road or utility; component sale; routine operation and maintenance. |
| representative_product | One accepted named facility with disclosed area, installed schedule and performance gate. |
| production_route | Survey/removal; earthwork and base forming; route-specific component integration; optional distinct surface or landscape finish; inspection, remediation and signed handover. |
| market_state | Constructed and accepted outdoor asset, not attendance or playing hours. |

The parent `integrate_assets` activity has different primary facility-family routes: sports surface and drainage, landscaped park/garden/zoo grounds and paths, or golf/beach/marina recreation components. Mixed sites may partition non-overlapping subareas. Route deltas change material categories, finish, tests and measurement; an artificial-turf infill, planted area or pontoon is never a universal input. Select only evidenced components and tests. [unsd-cpc3-notes; epa-parks-guide; epa-gi-install]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Constructed outdoor sport or recreation facility of declared family and scope. |
| How much | One signed, accepted facility; report developed area in m2 and route-specific capacity separately. |
| How well | Contract-specific surface, drainage, access, structure, planting or berth inspections passed and defects closed. |
| How long or cycle | One construction project through handover; design life is disclosed metadata. |
| reference_flow_link | `accepted_facility` output from `accept_facility`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted facility |
| Reference product flow | Accepted outdoor sport or recreation facility; UUID unresolved |
| Reference flow property | Count; UUID unresolved |
| Reference unit group | Count; UUID unresolved |
| Reference unit | facility |
| Required qualifiers | Asset family; site; contract footprint; installed schedule; designed use/capacity; route tests; acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `facility_count` | reference product | Count, UUID unresolved | facility | Count the signed contractual asset once; subareas are attributes, not extra products. |
| `area_partition` | developed footprint | Area | m2 | Measure non-overlapping subareas; distinguish site, constructed surface and planted area. |
| `earth_state` | cut and fill | Volume and density | m3; kg/m3 | Record in-situ, loose and compacted states before mass conversion. |
| `carrier_separation` | construction energy | Carrier-specific energy or mass | kWh; MJ; kg | Keep electricity and fuels separate; disclose conversion factors. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed outdoor site, existing vegetation/soil and utility or shoreline interfaces before contract work. |
| starting_condition_role | Physical baseline; existing functional assets are not free new output. |
| product_classification_scope | One accepted outdoor sport/recreation facility; independently accepted buildings, roads and utilities are separate. |
| recursive_input_rule | Purchased same-category completed modules enter at supplier handover with their upstream dataset, not a second full facility bill. |
| upstream_dataset_requirement | Specification- and location-matched construction materials, energy, transport and waste treatment; route-specific plant, paving or marine components where present. |
| disclosure | Family, footprint partition, installed schedule, source ground, cut/fill, finish route, tests, shared works, reject paths and UUID gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | whole facility | Include contracted preparation, construction, pre-handover establishment/testing and defect closeout; exclude post-handover maintenance. | `unsd-cpc3-notes`; `epa-gi-install` |
| `removal_gate` | `prepare_site` | Source is existing soil, vegetation or built material; separate on-site reuse and export. Accepted prepared ground hands to forming. | `site-mass-balance` |
| `forming_gate` | `form_base` | Prepared ground plus fill/structural material becomes inspected base or hardscape support; failed sections loop to repair. | `site-mass-balance` |
| `integration_gate` | `integrate_assets` | Receive accepted base and separately identified route components; install and inspect before finishing or acceptance. | `unsd-cpc3-notes` |
| `finish_gate` | `finish_surface` | Where specified, finish an established parent asset with surface, protection or planting; separate rejected area/residue. | `epa-gi-install` |
| `family_delta` | `integrate_assets`; `finish_surface` | Declare family-specific material, finish and test delta; mixed routes partition shared works once. | `unsd-cpc3-notes`; `epa-parks-guide` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_site` | Site removal and preparation | required | Surveyed baseline to inspected prepared ground. | Remove/protect existing soil, vegetation and built material; route reuse and export. | Survey and removal tickets. |
| `form_base` | Earthwork and base forming | required | Prepared ground to inspected formation/base. | Form levels, drainage and structural support; repair rejects. | As-built area, volume and tests. |
| `integrate_assets` | Facility-component integration | required | Inspected base to installed testable facility. | Join route-specific surface, access, drainage, planting system or marine fixture. | Component schedule and QA. |
| `finish_surface` | Surface or landscape finishing | conditional | Distinct final surfacing, protection or planting specified after integration. | Apply finish to parent asset and inspect. | Finished area and rejects. |
| `accept_facility` | Final testing and handover | required | Installed/finished work to signed acceptance. | Test selected family, close defects and count one asset. | Certificate and as-built schedule. |

### Process: Site removal and preparation (`prepare_site`)

#### Inputs

##### Product flows

###### Removal energy (`removal_energy`)

Fuel or electricity for owner-operated clearing and excavation; omit carrier already embodied in purchased all-in service.

- Selected flow: Site-removal energy carrier by actual type
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter by task and carrier; reconcile subcontracted scope.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site`
- Range: Assigned removal-energy coverage
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of documented unbundled site energy
  - Basis: assigned removal energy divided by documented unbundled site energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared ground (`prepared_ground`)

Inspected, cleared ground handed to `form_base`, not another saleable facility.

- Selected flow: Prepared and surveyed construction ground
- Flow property / unit: Area / m2
- Amount rule: Sum accepted non-overlapping prepared subareas.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site`
- Range: Prepared-area completion
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of specified preparation area
  - Basis: accepted prepared area divided by specified preparation area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Waste flows

###### Exported site material (`exported_site_material`)

Excavated soil, vegetation or removed construction material crossing the project boundary; internal reuse remains an internal state.

- Selected flow: Removed site material by composition and destination
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
  - Basis: exported mass divided by removed mass by material type
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Elementary flows

### Process: Earthwork and base forming (`form_base`)

#### Inputs

##### Product flows

###### Received prepared ground (`received_prepared_ground`)

Internal handoff from `prepare_site`; do not buy or count the same site preparation twice.

- Selected flow: Prepared and surveyed construction ground
- Flow property / unit: Area / m2
- Amount rule: Match preceding inspected area.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site`
- Range: Prepared-ground transfer match
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: received/handed-off area
  - Basis: received area divided by accepted prepared area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

###### Base and drainage materials (`base_materials`)

Actual fill, aggregate, concrete, geotextile and drainage components by design; sports, landscape and marine routes use different bills.

- Selected flow: Base, structure and drainage material by specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, returned and rejected mass by material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_base`
- Range: Installed share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered material mass
  - Basis: accepted installed mass divided by delivered mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Inspected base (`inspected_base`)

As-built formed levels and support/drainage base handed to `integrate_assets`.

- Selected flow: Inspected facility base and drainage formation
- Flow property / unit: Area / m2
- Amount rule: Measure accepted non-overlapping base area and disclose structures.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_base`
- Range: Base completion
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of specified formed area
  - Basis: accepted base area divided by specified base area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Waste flows

###### Rejected base material (`base_rejects`)

Failed forming material leaving to return, recovery or disposal; repaired sections remain in `form_base`.

- Selected flow: Rejected base material by type and destination
- Flow property / unit: Mass / kg
- Amount rule: Count only boundary exits after repair and return reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_base`
- Range: Reject share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered base-material mass
  - Basis: boundary-exit reject mass divided by delivered base mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Elementary flows

### Process: Facility-component integration (`integrate_assets`)

#### Inputs

##### Product flows

###### Received inspected base (`received_base`)

Internal handoff of accepted base; its forming burden remains with `form_base`.

- Selected flow: Inspected facility base and drainage formation
- Flow property / unit: Area / m2
- Amount rule: Match accepted base area and structures.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_base`
- Range: Base transfer match
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: received/handed-off area
  - Basis: received base area divided by accepted upstream base area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

###### Route-specific components (`facility_components`)

Disaggregate actual playing-surface systems, park paths, visitor fixtures, planting supports, beach installations or marina berth hardware. This is not a universal list.

- Selected flow: Outdoor-facility component by material and function
- Flow property / unit: Mass or count / kg or item
- Amount rule: Reconcile deliveries and accepted installation by specification.
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
  - Basis: accepted installed quantity divided by delivered quantity by item
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Installed asset (`installed_asset`)

Joined and inspected facility components on accepted base; conditional finish or final acceptance follows.

- Selected flow: Installed outdoor facility before final finish and acceptance
- Flow property / unit: Area / m2
- Amount rule: Record non-overlapping installed area with component schedule.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Range: Installed-area completion
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of specified installed area
  - Basis: inspected installed area divided by specified facility area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Waste flows

###### Rejected components (`integration_rejects`)

Damaged or off-spec components crossing the boundary; repair and retest loop within `integrate_assets`.

- Selected flow: Rejected facility components by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Balance defects, repair, supplier return, recovery and disposal.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Range: Integration reject share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered component mass
  - Basis: boundary-exit reject mass divided by relevant delivered component mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Elementary flows

### Process: Surface or landscape finishing (`finish_surface`)

#### Inputs

##### Product flows

###### Received installed asset (`received_installed_asset`)

Where finish is distinct, receive only applicable installed parent area; other area goes directly to acceptance.

- Selected flow: Installed outdoor facility before final finish and acceptance
- Flow property / unit: Area / m2
- Amount rule: Measure route area requiring independent finish.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Range: Applicable finish share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of installed area
  - Basis: received finish area divided by total installed area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

###### Finish or planting inputs (`finish_inputs`)

Only specified turf/paving surface, protective material, soil amendment, plants or marine finish by route; retain material-specific mass or count.

- Selected flow: Final surface or planting material by specification
- Flow property / unit: Mass or count / kg or item
- Amount rule: Reconcile delivery, installation, return and reject by item.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`
- Range: Accepted finish-input share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered finish material
  - Basis: accepted installed quantity divided by delivered quantity by material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finish (`accepted_finish`)

Inspected finished surface or planted area handed to `accept_facility`; pre-handover establishment is included only if contracted.

- Selected flow: Finished and inspected outdoor facility area
- Flow property / unit: Area / m2
- Amount rule: Sum accepted finish area without adding repaired area twice.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Range: Finish completion
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of specified finish area
  - Basis: accepted finish area divided by specified finish area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Waste flows

###### Finish rejects (`finish_rejects`)

Removed off-spec finish or planting material sent to documented reuse, recovery or treatment; repair burden remains here.

- Selected flow: Rejected finish material by type and destination
- Flow property / unit: Mass / kg
- Amount rule: Count actual exit after repair and return reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`
- Range: Finish reject share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered finish-material mass
  - Basis: boundary-exit rejected finish mass divided by delivered finish mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Elementary flows

### Process: Final testing and handover (`accept_facility`)

#### Inputs

##### Product flows

###### Installed and finished work (`received_completed_work`)

Receive installed areas directly and separately finished areas after QA; partition them so no area is received twice.

- Selected flow: Completed outdoor facility work by non-overlapping area
- Flow property / unit: Area / m2
- Amount rule: Sum unfinished installed area and accepted finished area once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Range: Completed-work coverage
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: received/accepted project area
  - Basis: received non-overlapping work area divided by accepted project area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted outdoor facility (`accepted_facility`)

Contractual sport or recreation asset after route-specific tests, defect closure and signed handover.

- Selected flow: Accepted outdoor sport or recreation facility of declared family
- Flow property / unit: Count / facility
- Amount rule: Count exactly one signed accepted facility per reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Range: Reference count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: facility/reference flow
  - Basis: signed accepted facility count
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `site-mass-balance`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | accepted output | Attribute construction to one signed asset; attendance and later maintenance are not co-products. | `unsd-cpc3-notes` |
| `mixed_family` | mixed site | Partition measurable subareas by as-built quantities; allocate genuinely shared works once by engineering driver or metered use. | `site-mass-balance` |
| `reuse_and_spoil` | site material | Internal cut reuse retains removal burden; export records destination without unsupported avoided-product credit. | `site-mass-balance` |
| `rework_retention` | rejected work | Return failed base, component or finish to producing node; retain repair burden there, never on extra accepted output. | `site-mass-balance` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site` | `prepare_site` | removal, energy, ground, spoil | survey and ticket | baseline; material; cut; density; reuse; export; destination; carrier; quantity | survey, meter, weighbridge and invoice | m2; m3; kg; kWh; MJ | area/load/shift | project | contract site | balance removed mass and accepted area | survey, tickets, meters |
| `cp_base` | `form_base` | base, drainage, rejects | delivery and as-built | specification; delivered; placed; returned; rejected; base area; test | ticket, drawings and QA | kg; m2; m3 | batch/segment | project | formed area | reconcile delivered and accepted states | tickets and tests |
| `cp_components` | `integrate_assets` | components, asset, rejects | bill and inspection | family; component; delivered; installed; return; rejection; area; test | bill, installation log and QA | kg; item; m2 | item/subarea | project | installed facility | balance each item and partition area | invoices, as-built, QA |
| `cp_finish` | `finish_surface` | finish, plants, rejects | delivery and inspection | finish type; material; delivered; accepted; rejected; area; establishment test | tickets, survey and QA | kg; item; m2 | batch/subarea | through finish sign-off | finished area | balance finish area and materials | tickets, QA |
| `cp_acceptance` | `accept_facility` | completed work and asset | signed certificate | family; footprint; schedule; tests; defects; closure; acceptance date | as-built and signed handover | facility; m2 | handover | through acceptance | contract asset | partition work and count asset once | signed certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `site_balance` | `prepare_site` | Removed mass = on-site reused + exported + stock change, using measured state-specific density. | survey, density, tickets | site material routes | `site-mass-balance` |
| `material_balance` | forming, integration, finish | Delivered = accepted installation + supplier return + boundary-exit reject + stock change; repair is not new delivery. | tickets, QA, returns | material and reject rows | `site-mass-balance` |
| `area_partition_calc` | installation to acceptance | Accepted area = unfinished installed area + accepted finished area with no overlap. | as-built, finish QA | accepted area | `site-mass-balance` |
| `facility_count_calc` | `accept_facility` | Count one asset only after route tests and defect closure are signed. | tests, certificate | reference product | `site-mass-balance` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `family_trace` | all nodes | State family, component schedule, footprint partition and handover gate. | contract drawings, as-built, certificate |
| `material_trace` | removal, forming and finish | Preserve source condition, measurement state, material grade, reject/reuse destination and QA. | surveys, tickets, inspections |
| `route_trace` | alternatives | Explain which sport, landscape, beach or marine inputs and tests apply; absent components contribute nothing. | design and acceptance specification |
| `identity_gap` | unresolved flows | Verify exact flow, property and unit-group UUID before final exchanges. | platform detail review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_check` | reference product | Confirm outdoor family and signed acceptance; exclude indoor, separately delivered assets and operation. | `unsd-cpc3-notes` |
| `family_check` | `integrate_assets` | Require actual schedule, finish and tests for each family; reject universal turf, planting or marina bills. | `unsd-cpc3-notes`; `epa-parks-guide` |
| `handoff_check` | all nodes | Match internal handoffs, non-overlapping area and material balances; count common work once. | `site-mass-balance` |
| `finish_check` | `finish_surface` | If activated, document parent, inputs, inspected finish and reject path; otherwise send installed asset directly to acceptance. | `epa-gi-install` |
| `reject_check` | all nodes | Rework stays with producing node; waste exits have destination and cannot become accepted output. | `site-mass-balance` |
| `range_role` | all cards | QA ratios are consistency tests, never universal construction intensities. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction package for accepted outdoor sport or recreation asset. |
| downstream_use | Secondary/background construction data only for comparable family, site, components and gate. |
| allowed_use | Construction-stage modelling with disclosed footprint, materials, route and acceptance. |
| excluded_use | Indoor facility, separate building/transport asset, component sale, post-handover use or maintenance. |
| required_metadata | Site, year, family, footprint partition, route components, material states, design use/capacity, tests and acceptance. |
| required_quality_disclosure | Shared-work allocation, cut/fill balance, finish selection, defects/rework and UUID gaps. |
| update_trigger | Changed family, design, contract boundary, accepted quantity, route or identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | Asset-family scope and indoor exclusion. |
| `epa-parks-guide` | official_guidance | US EPA, Green Infrastructure in Parks: A Guide to Collaboration, Funding, and Community Engagement, EPA 841-R-16-112, https://www.epa.gov/nps/green-infrastructure-parks-guide | Park-specific component distinctions. |
| `epa-gi-install` | official_guidance | US EPA, Green Infrastructure Installation, Operation, and Maintenance, https://www.epa.gov/green-infrastructure/green-infrastructure-installation-operation-and-maintenance | Installation, inspection and operation separation where green infrastructure is present. |
| `site-mass-balance` | method_factor | Conservation-of-material and non-overlapping-area identities applied to measured project surveys, tickets and acceptance records. | Material balance, shared-work partition and QA formulas. |
