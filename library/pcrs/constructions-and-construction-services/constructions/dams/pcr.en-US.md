---
pcr_id: pcr.constructions-and-construction-services.constructions.dams
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dams

## 1. Scope and Applicability

This PCR covers a completed dam body with its directly functional foundation, seepage-control, spillway and outlet structures at a named site. Declare concrete, roller-compacted-concrete, embankment or composite segments. Include necessary diversion, foundation work, placement, testing and signed handover. Exclude separately delivered power stations, irrigation networks, ordinary flood channels and later reservoir operation. [usbr-design-standards; usbr-dam-project]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.dams |
| classification_refs | CPC 3.0 53233, Dams; mapping acceptance is separate. |
| covered_products | Accepted dam body and integral foundation, seepage, spillway and outlet works. |
| excluded_products | Stand-alone generation facilities, irrigation networks, ordinary flood channels and reservoir operation. |
| representative_product | One site-accepted dam with declared function and geometry. |
| production_route | Diversion and foundation preparation, then concrete placement or compacted earth/rock fill, appurtenant integration and testing. |
| market_state | Installed civil asset at signed handover. |

Concrete and embankment are route alternatives within the parent `dam_build` integration node; a composite dam reports each segment. Concrete requires mix, placement and joint records; embankment requires borrow, lift, filter and compaction records. [usbr-design-standards]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed dam body and declared integral appurtenances. |
| How much | One accepted dam; disclose crest length, height and structural volume separately. |
| How well | Design-function, foundation, structural, seepage and hydraulic tests passed. |
| How long or cycle | One construction project through signed handover; design life is metadata. |
| reference_flow_link | `accepted_dam` from `dam_build`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted dam |
| Reference product flow | Completed dam; UUID unresolved |
| Reference flow property | Count; UUID unresolved |
| Reference unit group | Count; UUID unresolved |
| Reference unit | dam |
| Required qualifiers | Site; river and function; dam type; crest length and height; structural volume; route segments; included spillways and outlets; foundation treatment; acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `dam_count` | reference product | Count, UUID unresolved | dam | Count only the signed accepted structure; disclose geometry for comparison. |
| `materials_mass` | installed and rejected materials | Mass or volume | kg or m3 | Convert volume with measured material density and reconcile deliveries, installation, returns and rejects. |
| `excavation_volume` | foundation and borrow | Volume | m3 | Distinguish surveyed in-situ volume from loose haul volume. |
| `construction_energy` | plant | Carrier-specific energy or mass | kWh, MJ or kg | Record carrier and avoid counting generator fuel and its electricity twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed river reach, foundation strata, existing works and borrow areas before diversion. |
| starting_condition_role | Physical baseline, not burden-free dam input. |
| product_classification_scope | One accepted dam; separately delivered facilities are linked externally. |
| recursive_input_rule | Purchased components enter at supplier handover; an entire dam cannot recursively enter as unexamined material. |
| upstream_dataset_requirement | Link route-matched concrete, cement, aggregate, fill, steel, energy, transport and treatment datasets. |
| disclosure | Geometry, route, borrow and spoil origin/destination, diversion, shared plant, material cut-offs, tests and identity gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | whole asset | Include necessary diversion, foundation, placement, integral hydraulic works and testing through signed handover; exclude later storage, generation and maintenance. | `usbr-design-standards`; `usbr-dam-project` |
| `foundation_handoff` | both nodes | Pass only accepted treated foundation to `dam_build`; removed material and rejected work have separate paths. | `usbr-design-standards` |
| `route_segments` | dam body | Separate concrete and embankment segment inventories and QA, but count a composite dam once. | `usbr-design-standards` |
| `shared_temporary_works` | diversion and plant | Record owner, consuming node and service period; assign each shared burden once. | `usbr-design-standards` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `site_foundation` | Diversion and foundation preparation | required | Surveyed riverbed to accepted foundation. | Independently remove unsuitable ground, route spoil, treat foundation and return failures for rework. | Surveyed excavation and accepted foundation area. |
| `dam_build` | Dam body and appurtenant integration | required | Accepted foundation to signed dam handover. | Integrate placed concrete or compacted fill, filters and hydraulic works; route rejected placements. | One accepted dam and measured route segments. |

### Process: Diversion and foundation preparation (`site_foundation`)

#### Inputs

##### Product flows

###### Foundation excavation service (`foundation_service`)

Contracted work only if its plant energy is not also reported as owned foreground use.

- Selected flow: Foundation excavation service by actual method
- Flow property / unit: Contract service quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- Amount rule: Reconcile subcontracted scope, excavated volume and owner-supplied energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_works`
- Range: Provisional work screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: declared service units/dam
  - Basis: broad first-pass screen, not a design quantity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Foundation and diversion materials (`foundation_materials`)

Record grout, cutoff and cofferdam materials actually installed or consumed; reuse of temporary works needs a declared handoff.

- Selected flow: Foundation-treatment and temporary-diversion materials by specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivery, installed or consumed quantity, reuse and rejected mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional foundation-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000000
  - Unit: kg/dam
  - Basis: installed or consumed materials; broad provisional upper screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Foundation construction energy (`foundation_energy`)

Separate actual diesel, electricity and other carriers.

- Selected flow: Energy carrier for excavation, diversion and dewatering
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter or reconcile plant fuel use by carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/dam
  - Basis: all disclosed carriers with documented conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared foundation (`prepared_foundation`)

Internal handoff to `dam_build`, not a second saleable dam.

- Selected flow: Accepted treated dam foundation
- Flow property / unit: Area / m2
- Amount rule: Survey accepted area and transfer matching location to placement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_works`
- Range: Foundation area screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: m2/dam
  - Basis: surveyed accepted area; provisional upper screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Excavated spoil (`spoil_export`)

Identify material type and destination; accepted internal reuse is not exported spoil.

- Selected flow: Excavated soil and rock sent to off-site management
- Flow property / unit: Mass / kg
- Amount rule: Dispatch mass or surveyed in-situ volume times tested density, net of reuse.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spoil`
- Range: Spoil fraction identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of excavated mass
  - Basis: exported mass divided by excavated mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Dam body and appurtenant integration (`dam_build`)

#### Inputs

##### Product flows

###### Prepared foundation handoff (`foundation_handoff`)

Internal transfer of the surveyed accepted foundation from `site_foundation`; do not purchase it again or duplicate its upstream burdens.

- Selected flow: Accepted treated dam foundation from `site_foundation`
- Flow property / unit: Area / m2
- Amount rule: Match transferred area and location to the accepted foundation output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_works`
- Range: Foundation handoff match
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: input/output accepted-area ratio
  - Basis: matched input and output area at identical location
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Concrete-route materials (`concrete_materials`)

For concrete or RCC segments only; distinguish binders, aggregates, admixtures, steel and ready mix without double counting.

- Selected flow: Installed concrete-route materials by specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile mix, delivery, installed volume, returns and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted dam, concrete segments only
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional concrete material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000000
  - Unit: kg/dam
  - Basis: declared volume and mix design; broad provisional upper screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Embankment-route materials (`embankment_materials`)

For earth/rock segments only; distinguish core, shell, filter, drain, riprap and borrow sources.

- Selected flow: Installed earth, rock and filter products by specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile borrow, deliveries, accepted compacted volume and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted dam, embankment segments only
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional embankment material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000000
  - Unit: kg/dam
  - Basis: surveyed geometry and measured density; broad provisional upper screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Construction water (`construction_water`)

Only batching, curing, dust control and compaction water; not water stored by the reservoir.

- Selected flow: Construction process water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter by source and use; reconcile transfers once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Range: Provisional construction-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: m3/dam
  - Basis: construction withdrawals only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Placement energy (`placement_energy`)

Separate batching, hauling, placing, compacting, pumps and testing by actual carrier.

- Selected flow: Construction energy carrier for dam placement
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter or reconcile fuel receipts to actual plant use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional placement-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000000
  - Unit: MJ-equivalent/dam
  - Basis: all disclosed carriers with documented conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Integral hydraulic components (`hydraulic_components`)

Only contractually included spillway, outlet, gate and seepage-control components; externally delivered waterways are linked.

- Selected flow: Installed integral hydraulic components by item
- Flow property / unit: Mass or count / kg or item
- Amount rule: Reconcile as-built bill with deliveries and rejected items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional component screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg-equivalent/dam
  - Basis: included items converted by documented unit mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dam (`accepted_dam`)

Only after passed structural, seepage and hydraulic tests and signed handover.

- Selected flow: Completed accepted dam; UUID unresolved
- Flow property / unit: Count / dam; UUIDs unresolved
- Amount rule: One accepted dam after final handover; exclude rejected placements.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Range: Reference output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: dam/dam
  - Basis: one accepted asset per reference asset
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Rejected construction material (`rejected_material`)

Name the producing node and whether each rejected batch is reworked, recovered or disposed; never count it as accepted dam.

- Selected flow: Rejected concrete, fill or component by actual destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile rejection tickets, rework returns and exported residuals once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted dam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Range: Rejected material fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered mass
  - Basis: rejected mass divided by delivered mass by material type
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `one_dam_output` | asset | Count a composite or single-route dam once; multifunctional water supply, flood control and power require a separate justified use-stage study. | `usbr-design-standards` |
| `shared_diversion` | diversion, pumps and equipment | Assign actual use to each node by metered hours, work quantities or disclosed engineering proxy, retaining service period and users; count once. | `usbr-design-standards` |
| `rework_residual` | rejected material | Return rework to its producer; apply recovery credit only under a disclosed study convention and exclude rejects from accepted output. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site_works` | `site_foundation` | diversion, excavation, foundation | survey and subcontract log | area, in-situ volume, work scope, acceptance | survey and engineer sign-off | m2, m3, service unit | each package | start to foundation acceptance | site | sum accepted packages, separate rework | survey and acceptance records |
| `cp_spoil` | `site_foundation` | spoil | dispatch and destination tickets | type, origin, mass, density, reuse, destination | ticket and density reconciliation | kg, m3 | each dispatch | excavation period | site and destination | sum exported mass once | tickets and receipt |
| `cp_materials` | both nodes | foundation, diversion, placed materials and rejects | delivery, mix, borrow, placement and QA ledger | item, segment, delivered, placed, density, rejected, disposition | batch/lift records and as-built survey | kg, m3, item | each batch or lift | placement to completion | all segments | reconcile installed, returned and rejected | batch, compaction and concrete tests |
| `cp_water` | `dam_build` | construction water | meter log | source, reading, use, transfer | meter readings | m3 | monthly and major use | construction | site intake | sum withdrawals by use | calibrated meter and permit |
| `cp_energy` | both nodes | fuel and electricity | meter, invoice and runtime log | carrier, quantity, plant, node, hours | meter and fuel reconciliation | kWh, MJ, kg | monthly | active work | site and shared plant | assign by actual use, convert once | meter and receipts |
| `cp_acceptance` | `dam_build` | reference output | acceptance dossier | type, geometry, test, defects, date | signed engineer inspection | dam, m, m3 | final and retest | completion gate | whole dam | count one after acceptance | signed certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `spoil_mass` | excavation | Exported mass = weighed dispatch or in-situ volume × tested density, minus documented internal reuse. | survey, tickets, density, reuse | kg exported/dam | `mass-balance-identity` |
| `placed_material` | segments | Installed mass = accepted volume × measured density; reconcile with deliveries and rejects. | as-built volume, density, delivery | kg installed/segment | `mass-balance-identity` |
| `carrier_energy` | plant | Convert each carrier with declared factor; do not add generated electricity to generator fuel. | metered carriers, conversion, allocation | MJ-equivalent/dam | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_evidence` | structure | Identify each concrete, embankment or composite segment and applicable test regime. | as-built, mix and compaction records |
| `mass_reconciliation` | excavation and placement | Explain unmatched deliveries, spoil, rework and rejects. | signed reconciliation |
| `acceptance_evidence` | reference output | Retain geometry and structural, seepage and hydraulic tests plus handover. | acceptance dossier |
| `identity_disclosure` | unbound flows | Retain semantic specifications until platform detail confirmation. | supplier specification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_acceptance` | output | Reject a one-dam output without signed handover, geometry, route and integral-works scope. | `usbr-design-standards` |
| `foundation_link` | graph | Accepted foundation must connect to actual dam segments; exported spoil needs a destination. | `usbr-design-standards` |
| `route_checks` | materials | Check mix and placement for concrete and borrow, lift and compaction for embankment; composite dams need both. | `usbr-design-standards` |
| `shared_and_rework` | site burdens | Flag duplicate temporary works, missing reject paths or rejects counted as accepted. | `mass-balance-identity` |
| `identity_gate` | final exchange | Require detail-confirmed exact flow, property and unit-group UUID before emitting an exchange. | `usbr-design-standards` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific completed civil asset foreground package; candidate method until review. |
| downstream_use | Secondary or background construction data if geometry, route and gate match. |
| allowed_use | Construction-stage accounting for declared accepted dam and integral hydraulic works. |
| excluded_use | Generation, reservoir operation, irrigation service or unqualified comparison. |
| required_metadata | Site, year, type, geometry, segments, spillway/outlet scope, borrow/spoil, energy and acceptance. |
| required_quality_disclosure | Quantity and density methods, shared-works attribution, unresolved UUIDs, range tier and cut-offs. |
| update_trigger | Design, route, as-built quantities, acceptance, scope or confirmed identity changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usbr-design-standards` | official_guidance | U.S. Bureau of Reclamation, Reclamation Design Standards, https://www.usbr.gov/tsc/techreferences/designstandards-datacollectionguides/designstandards.html | Dam routes, foundation, seepage, diversion and hydraulic structures. |
| `usbr-dam-project` | official_guidance | U.S. Bureau of Reclamation, dam project description, https://www.usbr.gov/projects/index.php?id=383 | Foundation cutoff, borrow, placement and grouting route examples. |
| `mass-balance-identity` | method_factor | Conservation-of-material identity applied to surveyed and weighed foreground records. | Reconciliation and 0–1 fraction checks. |
