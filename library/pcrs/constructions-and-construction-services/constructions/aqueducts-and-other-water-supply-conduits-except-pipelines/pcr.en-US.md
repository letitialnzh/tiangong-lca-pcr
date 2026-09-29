---
pcr_id: pcr.constructions-and-construction-services.constructions.aqueducts-and-other-water-supply-conduits-except-pipelines
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Aqueducts and other water supply conduits, except pipelines

## 1. Scope and Applicability

This PCR covers site-built, non-pipeline aqueducts and conduits whose principal function is water supply, from surveyed site through hydraulic acceptance. Open channels, lined canals and elevated aqueducts are eligible when physical form is declared. Exclude pipelines even when named “aqueduct,” irrigation or flood-control works with another primary purpose, dams, navigation works, pumping/treatment plant, operating water conveyance and delivered water. Count crossings and controls only when included in the measured contract; otherwise link separate datasets. [unsd-53231; usbr-cip-construction]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.aqueducts-and-other-water-supply-conduits-except-pipelines |
| classification_refs | CPC 3.0 53231, Aqueducts and other water supply conduits, except pipelines; mapping acceptance is separate. |
| covered_products | Completed non-pipeline channels, canals and aqueduct structures for water supply. |
| excluded_products | Pipelines, irrigation/flood-control systems, dams, navigation structures, pumping/treatment, operation and delivered water. |
| representative_product | One accepted route-kilometre of non-pipeline water-supply conduit. |
| production_route | Survey and prepare corridor; excavate and form support; build or line hydraulic section; join structure, lining and joints; test and hand over. |
| market_state | Installed, tested and accepted fixed infrastructure at a named site. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Site-accepted non-pipeline water-supply conduit segment. |
| How much | One route-kilometre along accepted centreline, measured once. |
| How well | Declared supply duty, section geometry and hydraulic acceptance criteria pass tests. |
| How long or cycle | One construction project through signed handover; design life is metadata. |
| reference_flow_link | `accepted_conduit` from `conduit_handover`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 route-km of accepted water-supply conduit |
| Reference product flow | Site-accepted non-pipeline water-supply conduit; UUID unresolved |
| Reference flow property | Route length; UUID unresolved |
| Reference unit group | Length; UUID unresolved |
| Reference unit | route-km |
| Required qualifiers | Georeferenced endpoints and centreline; open, buried non-pipe or elevated form; section and design capacity; lining/support type; water-supply duty; included appurtenances; hydraulic test; handover date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `route_length` | reference product | Length, UUID unresolved | route-km | Measure signed accepted centreline once; parallel conduits have separate lengths. |
| `earth_mass` | cut, fill and spoil | Mass | kg | Convert survey volume with measured density and moisture; retain conversion. |
| `installed_mass` | structure and lining | Mass | kg | Convert delivery units by specification; reconcile installed, returned and rejected mass. |
| `site_energy` | plant | Energy or fuel mass | kWh, MJ or kg | Separate carriers and avoid double-counting subcontractor fuel. |
| `test_water` | hydraulic test | Volume | m3 | Record supplied, reused, recovered, discharged and retained water; throughput is not construction output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed corridor, pre-existing works and ground before preparation; demolition and remediation disclosed. |
| starting_condition_role | Physical construction baseline, not free conduit product. |
| product_classification_scope | One accepted non-pipeline water-supply segment with declared appurtenance interfaces. |
| recursive_input_rule | Prefabricated channel sections enter as supplied components; never treat another complete accepted conduit as an unexamined raw input. |
| upstream_dataset_requirement | Link structure/lining products, freight, energy, water, purchased construction and waste treatment where used. |
| disclosure | Physical form, route, materials, ground, test gate, excluded plant/pipelines, shared works and rework. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_gate` | whole product | Include survey, excavation, structure, lining, joints, tests and repair through signed handover; exclude operation and later maintenance. | `unsd-53231`; `usbr-cip-construction` |
| `b_nonpipe` | classification | Inspect actual hydraulic section; project label alone never admits a pipeline. | `unsd-53231` |
| `b_removal` | corridor | Excavation independently hands graded support to construction; classify removed ground as reuse, stock, export or residual. | `usbr-cip-construction` |
| `b_form_join` | section | Declare pre-form material, formed section geometry, joined structure/lining/joints and accepted handoff; reject defective sections. | `usbr-cip-construction`; `usbr-canal-design` |
| `b_alternative` | route | Parent activity is section construction. Earth-, membrane-, concrete-lined and elevated structures have distinct component and test requirements; choose one form per reach, while different reaches may coexist. | `usbr-cip-construction`; `usbr-canal-design` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `corridor_preparation` | Excavation and support preparation | required | Surveyed corridor to accepted graded support. | Remove ground; form subgrade and classify spoil. | Accepted route-km and earth mass. |
| `conduit_handover` | Section construction and handover | required | Accepted support to tested conduit. | Form section; join structure/lining and test. | Accepted route-km. |

### Process: Excavation and support preparation (`corridor_preparation`)

#### Inputs

##### Product flows

###### Earthwork service (`earthwork_service`)

Only purchased work; do not also count its embedded equipment fuel as owned fuel.

- Selected flow: Site excavation and grading service
- Flow property / unit: Contract service quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Amount rule: Sum signed work quantities by reach and scope.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_earthwork`
- Sources: `usbr-cip-construction`
- Range: Contract quantity review screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: declared service units/route-km
  - Basis: provisional and contract-unit dependent
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Equipment energy (`preparation_energy`)

Record owned-plant carrier quantities, excluding purchased-service energy.

- Selected flow: Construction energy by actual carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Sum metered and invoiced carrier amounts for this node.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Energy record screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: kWh-equivalent/route-km
  - Basis: provisional carrier-converted review only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted graded support (`accepted_support`)

Prepared geometry and bearing pass inspection; this intermediate is not a complete conduit.

- Selected flow: Accepted graded conduit support
- Flow property / unit: Route length / route-km
- Amount rule: Record signed accepted chainage, excluding deficient reaches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Support linkage
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: route-km/route-km reference
  - Basis: one accepted support route-km per final route-km
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Exported excavation spoil (`excavation_spoil`)

Reused fill remains inside the site balance; exports have one documented receiver.

- Selected flow: Excavated soil and rock waste by material and receiver
- Flow property / unit: Mass / kg
- Amount rule: Reconcile excavation with reuse, stock change and receiving tickets.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_earthwork`
- Sources: `mass-balance-identity`
- Range: Export fraction check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg excavated material
  - Basis: exported spoil divided by excavated mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Section construction and handover (`conduit_handover`)

#### Inputs

##### Product flows

###### Accepted support received (`support_received`)

Match the internal input once to the upstream accepted chainage.

- Selected flow: Accepted graded conduit support
- Flow property / unit: Route length / route-km
- Amount rule: Match `accepted_support` by chainage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Internal support match
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: route-km/route-km reference
  - Basis: one accepted upstream support route-km per final route-km
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

###### Structure and lining components (`structure_lining`)

Expand concrete, reinforcement, aggregate, membrane or clay lining, joints and elevated supports only where installed. These are pre-form material and joining inputs.

- Selected flow: Supplied structural and lining products by specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, returned, rejected and stock mass by component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `usbr-cip-construction`; `usbr-canal-design`
- Range: Component mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/route-km
  - Basis: provisional route-dependent screen, not design quantity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Construction and test water (`construction_water`)

Separate mixing, curing and test water from later supply operations.

- Selected flow: Construction and hydraulic test water by actual source
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Amount rule: Meter input water and reconcile reuse, recovery, discharge and retention.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_test`
- Range: Water balance check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/m3 supplied water
  - Basis: recovered plus discharged plus retained divided by supplied water after recirculation adjustment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Purchased section installation and joining service (`installation_service`)

Activate only when an external contractor forms, installs or joins the section, lining or joints. Exclude that contractor's embedded plant energy from owned-plant records; do not invent an installation-service UUID from an unrelated construction-service group.

- Selected flow: Purchased conduit section installation and joining service
- Flow property / unit: Contract service quantity / declared unit
- Amount rule: Record signed installed work by reach and contract unit; zero when performed entirely by owned crew and plant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `usbr-cip-construction`
- Range: Purchased installation quantity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: declared service units/route-km
  - Basis: provisional contract-unit-dependent review, not a mandatory purchase
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted water-supply conduit (`accepted_conduit`)

Only hydraulically accepted non-pipeline length is the reference output; deficient sections require repair and retest.

- Selected flow: Site-accepted non-pipeline water-supply conduit
- Flow property / unit: Route length / route-km
- Amount rule: Signed accepted centreline length excluding failed or unfinished reaches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Reference output identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: route-km/route-km reference
  - Basis: accepted length normalized to one route-km
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Rejected lining and offcuts (`construction_rejects`)

Classify failed material by destination; repaired sections remain rework, never accepted before retest.

- Selected flow: Rejected lining and structural waste by material and receiver
- Flow property / unit: Mass / kg
- Amount rule: Reconcile rejected mass with component balance and manifests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rejects`
- Range: Rejected mass fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg supplied structure and lining materials
  - Basis: rejected and exported mass divided by delivered component mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_no_water_coproduct` | reference | Construction outputs length, not water volume; operation is separate. | `unsd-53231`; `reference-definition` |
| `a_shared` | common works | Attribute common measured plant or works to accepted reaches using documented physical drivers; fractions sum to one, with no duplicate burden. | `mass-balance-identity` |
| `a_rework` | failed work | Keep repair with final accepted reach; route exported waste once and exclude failed length until retest. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_earthwork` | `corridor_preparation` | service and spoil | each reach | chainage, cut/fill, density, reuse, stock, export, service scope | survey, contract and weighbridge | m3, kg, service unit | each reach | preparation to support gate | alignment | mass balance by reach | survey, invoices, tickets |
| `cp_energy` | both nodes | owned energy | each carrier | amount, node, date, shared consumers | meter and plant log | kWh, MJ, kg or L | weekly | build and tests | alignment | sum by carrier and node | meter and log |
| `cp_components` | `conduit_handover` | structure/lining | each item | specification, delivered, installed, returns, rejects, stock | delivery and as-built bill | kg, m3, item | each delivery | section build | segment | convert and balance by product | invoices and drawings |
| `cp_water_test` | `conduit_handover` | construction water | each test | source, input, reuse, recovery, discharge, retention, result | meter and test sheet | m3 | each test | build to handover | reach | net-input and destination balance | meter and test report |
| `cp_acceptance` | both nodes | support and conduit | each chainage | endpoints, form, capacity, section, defects, repair, test, sign-off | survey and inspection | route-km | each gate | support to handover | reach | accepted length only; match node handoff | drawings and certificate |
| `cp_rejects` | `conduit_handover` | failed material | each rejection | material, mass, reach, repair, reuse, receiver | waste and repair register | kg | each event | build | reach | balance with components | manifests and receipts |

### Calculation Rules

| rule_id | Applies to | Calculation | Inputs | Output unit | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | output | Accepted centreline metres / 1000; divide quantities by accepted route-km. | signed survey | route-km | `reference-definition` |
| `calc_earth` | earthwork | Excavated mass = reused fill + exported spoil + stock change + documented residual. | survey, density, tickets | kg/route-km | `mass-balance-identity` |
| `calc_material` | components | Delivered = installed + returns + rejects + stock change by item. | bills and manifests | kg/route-km | `mass-balance-identity` |
| `calc_shared` | common works | Attributed amount = measured amount × physical-use fraction; fractions sum to one. | metering and usage | amount/route-km | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | final exchanges | Confirm UUID, type, gate, property and unit against platform detail before dataset release. | detail/support review |
| `dq_scope` | reference | Verify non-pipe form, water-supply duty, endpoints, section, included works and sign-off. | as-built and certificate |
| `dq_materials` | major items | Reconcile source, delivered, installed, return, reject and receiver quantities. | bills and manifests |
| `dq_time` | all | Preserve dated construction and tests; disclose gaps. | logs and test sheets |
| `dq_ranges` | all | Provisional guards trigger review, never replace missing measurements. | foreground records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_nonpipe` | reference | Reject pipe assets regardless of project name; distinguish irrigation, dams and navigation. | `unsd-53231` |
| `v_gate` | reference | Require centreline, hydraulic test and signed handover; water throughput is not construction output. | `usbr-canal-design`; `reference-definition` |
| `v_route` | variants | Assign each reach an evidenced lining/structural route and check corresponding materials and tests; no two exclusive forms on one reach. | `usbr-cip-construction`; `usbr-canal-design` |
| `v_balance` | earth/components | Reconcile excavation, components, rework and export without duplicate counts. | `mass-balance-identity` |
| `v_rework` | failed reach | Link defect to repair/retest or recovery/disposal; do not accept until passed. | `mass-balance-identity` |
| `v_uuid` | identity | Leave generic conduit, waste and component UUID blank until exact detail and support verification. | `reference-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Construction package for site-accepted non-pipeline water-supply conduit. |
| downstream_use | `secondary_dataset` or `background_dataset` for infrastructure process and lifecyclemodel after identity review. |
| allowed_use | Per-route-km construction assessment for matching form, capacity, site and handover gate. |
| excluded_use | Pipelines, other-purpose works, water operation and whole-life claims without linked scenarios. |
| required_metadata | Endpoints, form, length, capacity, lining/support, ground, included works, tests and date. |
| required_quality_disclosure | Quantity coverage, provisional guards, earth/material balance, work-package overlap and UUID gaps. |
| update_trigger | Accepted length, form, schedule, test result, supplier or identity changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-53231` | official_guidance | UNSD CPC explanatory note 53231, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53231 | Boundary and exclusions. |
| `usbr-cip-construction` | official_guidance | US Bureau of Reclamation, Construction Activity Descriptions, https://www.usbr.gov/gp/nepa/cip/activity_descriptions.html | Preparation, excavation and lining roles. |
| `usbr-canal-design` | official_guidance | US Bureau of Reclamation, Design Standards No. 3: Canals and Related Structures, https://www.usbr.gov/pn/snakeriver/landuse/authorized/designstandards3.pdf | Hydraulic/structural acceptance questions. |
| `mass-balance-identity` | method_factor | Conservation reconciled against collected earth, component and water records. | Balances and reject checks. |
| `reference-definition` | method_factor | Accepted-centreline definition and arithmetic normalization in this PCR. | Reference output and handoff. |
