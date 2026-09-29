---
pcr_id: pcr.constructions-and-construction-services.constructions.commercial-buildings
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Commercial buildings

## 1. Scope and Applicability

One completed commercial building at accepted site handover. The class covers shops, shopping centres, warehouses, exhibition halls, offices, transport terminals, parking garages and petrol/service-station buildings. Include foundations, frame, envelope, permanently integrated services, inbound supply and freight, site work, commissioning and rejects. Select actual use, structure and installed systems: do not mix warehouse and office typical values. Exclude industrial buildings, other non-residential uses, movable tenant equipment, dispensing plant and tanks, land value, operation, maintenance and demolition. Prior remediation is outside scope unless explicitly modelled. `src_unsd_53122`; `src_ec_levels`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.commercial-buildings |
| classification_refs | CPC 3.0 53122 Commercial buildings |
| covered_products | completed retail, warehouse, exhibition, office, transport-terminal, parking-garage and service-station buildings |
| excluded_products | industrial/other non-residential buildings; separate plant, vehicles and equipment; land and operation |
| representative_product | one accepted commercial building with use-specific frame, envelope and fixed systems |
| production_route | supplied components and freight; site/foundation works; shell assembly; fixed-system integration, tests and handover |
| market_state | as-built building ready for declared commercial use at site handover |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed commercial building at accepted site handover |
| How much | 1 m2 gross floor area; retain whole-building area and inventory |
| How well | Structure, envelope and included fixed systems pass declared-use acceptance |
| How long or cycle | One construction project to signed handover; subsequent service life separately declared |
| reference_flow_link | `commercial_building_handover` output of `services_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 m2 accepted gross floor area |
| Reference product flow | Completed commercial building at site handover (UUID unresolved) |
| Reference flow property | Area (UUID unresolved) |
| Reference unit group | Area units (UUID unresolved) |
| Reference unit | m2 |
| Required qualifiers | primary use; site; area convention and total; structure; envelope; included fixed systems; completion date; acceptance; excluded equipment |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_area` | building output | Area | m2 | Derive accepted gross floor area from as-built drawings using one disclosed convention. |
| `measure_material` | material and rejects | Mass or volume with density | kg or m3 | Reconcile delivered, installed, returned, reused and rejected quantities by specification. |
| `measure_energy_freight` | energy and freight | Carrier quantity or transport work | kWh, L, kg or tonne-km | Preserve meter/waybill units and disclose conversions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Record pre-construction site condition and prior clearance/remediation exclusions. |
| starting_condition_role | Starting condition for the represented construction project. |
| product_classification_scope | One building of declared predominant commercial use, not a generic non-residential average. |
| recursive_input_rule | Model reused/prefabricated building elements at actual incoming gate once; do not recurse into another completed-building output. |
| upstream_dataset_requirement | Match material, energy, freight and treatment datasets to provider, geography, technology, physical state and gate. |
| disclosure | Use, design, area, contract scope, site condition, secondary inputs, shared plant, rejects, fixed systems and handover. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | all nodes | Include product supply, freight and construction/commissioning through signed handover; label use and end-of-life scenarios separately. | `src_ec_levels` |
| `boundary_use` | building | Include fixed systems in the building contract; exclude movable tenant equipment, vehicles, fuel tanks/pumps and industrial production plant. | `src_unsd_53122` |
| `boundary_secondary` | recovered inputs | Declare origin and recovery handoff, then apply one upstream burden or cut-off convention without prior-burden duplication. | `src_iso_21930` |
| `boundary_shared` | site plant and temporary services | Name all consuming nodes/buildings and the project period; attribute measured burden once by physical use. | `src_ec_levels` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `site_foundations` | Site works and foundations | required | foundation/site work represented | accepted foundation and ground-material account | whole building and per m2 |
| `shell_assembly` | Structure and envelope assembly | required | frame and enclosure installed | integrate structural/envelope components into accepted shell | whole building and per m2 |
| `services_handover` | Fixed services and handover | required | permanent services/testing included | accepted completed building | whole building and per m2 |

### Process: Site works and foundations (`site_foundations`)

#### Inputs

##### Product flows

###### Foundation supplies (`foundation_supplies`)

Record concrete, reinforcement and other specified foundation products by actual supplier and secondary-material origin.
- Selected flow: Foundation supplies (UUID unresolved)
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Reconcile delivery, installation, returns and rejects with as-built foundation quantities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional foundation-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg/m2
  - Basis: broad first-pass mass per accepted floor area; design and records govern
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Groundworks energy (`ground_energy`)

Collect actual electricity/fuel for excavation, lifting, pumping and placement by carrier.
- Selected flow: Groundworks energy carriers
- Flow property / unit: Energy or carrier quantity / kWh, L or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Attribute shared equipment to this node by measured hours or metered use once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site`
- Range: Provisional groundworks energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/m2
  - Basis: broad first-pass equivalent energy per accepted floor area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted foundations (`foundation_accepted`)

Inspected foundation is an intermediate for the shell, not a second final building.
- Selected flow: Accepted foundation intermediate (UUID unresolved)
- Flow property / unit: Area / m2
- Amount rule: Document inspected foundation footprint and building served.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Provisional foundation footprint check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m2/m2
  - Basis: footprint relative to gross floor area; as-built geometry governs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Ground material exits (`ground_exits`)

Separate excavated reuse, rejected material, supplier returns, recovery and disposal; internal rework stays linked to this node.
- Selected flow: Groundworks and foundation waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh exits or convert surveyed volume by measured density; prevent double-counting on-site reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rejects`
- Range: Provisional ground-exit screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/m2
  - Basis: broad first-pass exit mass per accepted floor area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Structure and envelope assembly (`shell_assembly`)

#### Inputs

##### Product flows

###### Accepted foundations transferred internally (`foundation_received`)

Receive the accepted foundation intermediate from `site_foundations`; this graph link is not a second purchased foundation or duplicated upstream burden.
- Selected flow: Accepted foundation intermediate (UUID unresolved)
- Flow property / unit: Area / m2
- Amount rule: Match accepted foundation area and receiving building; burden enters only through the producing node.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Internal foundation transfer check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m2/m2
  - Basis: received foundation footprint relative to accepted gross floor area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Structural and envelope components (`shell_components`)

Identify frame, floor, roof, facade, glazing and insulation separately by actual design; declare secondary origin and recovery handoff.
- Selected flow: Structural and envelope components (UUID unresolved)
- Flow property / unit: Mass and dimensions / kg and m2
- Amount rule: Match supplier deliveries to installed bills of quantities and acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional shell mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg/m2
  - Basis: broad first-pass delivered mass per accepted floor area, not a warehouse/office common intensity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inbound transport (`shell_freight`)

Calculate site-bound supplier movement by actual mode, load and route, with returns disclosed.
- Selected flow: Freight transport service
- Flow property / unit: Transport work / tonne-km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Amount rule: Sum carried tonnes times km for each documented leg/mode.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freight`
- Range: Provisional freight screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: tonne-km/m2
  - Basis: broad first-pass freight work per accepted floor area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted shell (`shell_accepted`)

The inspected frame and weather enclosure pass to service integration; failed assemblies do not pass.
- Selected flow: Accepted shell intermediate (UUID unresolved)
- Flow property / unit: Area / m2
- Amount rule: Record accepted shell area tied to the declared building.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Accepted-shell area check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m2/m2
  - Basis: accepted shell area cannot exceed declared normalized building area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `src_ec_levels`

##### Waste flows

###### Rejected shell components (`shell_rejects`)

Attribute cut-offs and failed assemblies to their producing node, with one rework, supplier-return, recovery or disposal path.
- Selected flow: Rejected structure and envelope material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Reconcile replacements and exit receipts with delivered and accepted quantities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rejects`
- Range: Provisional shell-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: broad first-pass rejected mass per accepted floor area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Fixed services and handover (`services_handover`)

#### Inputs

##### Product flows

###### Accepted shell transferred internally (`shell_received`)

Receive the inspected frame/envelope from `shell_assembly` as an internal graph link; do not purchase or count it a second time.
- Selected flow: Accepted shell intermediate (UUID unresolved)
- Flow property / unit: Area / m2
- Amount rule: Reconcile received accepted shell with producing-node inspection and the one declared building.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Internal shell transfer check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m2/m2
  - Basis: received shell area relative to accepted gross floor area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `src_ec_levels`

###### Permanently integrated services (`fixed_services`)

Include the specified electrical, plumbing, ventilation, fire-safety and use-specific fixed systems; exclude movable commercial equipment and station pumps/tanks.
- Selected flow: Fixed building services (UUID unresolved)
- Flow property / unit: Mass, item or rated capacity / kg, item or declared unit
- Amount rule: Reconcile installed components and tests with approved as-built system schedules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional fixed-service mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: broad first-pass fixed-system mass per accepted floor area; use-specific bill governs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Commissioning energy (`commissioning_energy`)

Record electricity and fuel for construction testing only through acceptance, not ongoing building operation.
- Selected flow: Commissioning energy carriers
- Flow property / unit: Energy or carrier quantity / kWh, L or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Separate construction/test meter intervals from post-handover use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site`
- Range: Provisional commissioning energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/m2
  - Basis: broad first-pass equivalent energy per accepted floor area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed commercial building (`commercial_building_handover`)

The signed-off, in-scope building is the sole final reference output; retain the as-built area and acceptance evidence.
- Selected flow: Completed commercial building at site handover (UUID unresolved)
- Flow property / unit: Area / m2
- Amount rule: Normalize whole-building inventory to 1 m2 accepted gross floor area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Reference area identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2/m2
  - Basis: one normalized unit of accepted reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `src_ec_levels`

##### Waste flows

###### Fixed-system rejects (`service_rejects`)

Track failed/replaced fixed components and packaging to reinspection, supplier return, recovery or disposal; none becomes accepted output.
- Selected flow: Installation and test rejects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh final exits and reconcile with system replacement/return logs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rejects`
- Range: Provisional service-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: broad first-pass reject mass per accepted floor area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocate_shared` | cranes, generators, temporary services and site works | Enumerate consuming nodes/buildings and project period; use measured hours/meters or disclosed physical proxy; shares reconcile to one total. | `src_ec_levels` |
| `allocate_secondary` | recovered components | Record prior use and recovery handoff, choose one upstream burden or cut-off method, and add current transport/processing once. | `src_iso_21930` |
| `allocate_rework` | rejected assemblies | Retain original burden at producing node, add incremental rework once and pass only re-inspected accepted states; final exits are not building co-products. |  |
| `allocate_multiple` | separately accepted buildings | Measure each building separately and distribute shared work by actual use, not an office/warehouse average. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | all three nodes | supplies and fixed systems | drawings; bill; tickets | use; product; grade; supplier; delivered; installed; secondary_origin; recovery_handoff | reconcile deliveries and as-built bills | kg; m3; item | each delivery | project | building and supplier | sum by product/node; separate returns and rejects | tickets; plans; declarations |
| `cp_site` | `site_foundations`; `services_handover` | construction/test energy | meter; fuel/equipment log | carrier; quantity; unit; node; period; equipment_hours | meter/ticket and log reconciliation | kWh; L; kg; h | meter period/shift | through handover | site | sum by carrier/node; shared use once | readings; invoices; shift log |
| `cp_freight` | `shell_assembly` | inbound transport | waybill | product; mode; load_t; leg_km; return | reconcile supplier and route | t; km | each leg | project | supplier to site | tonnes times km by leg | waybill; route |
| `cp_rejects` | all three nodes | rejects and exits | inspection; weighbridge | node; material; mass; rework; return; recovery; disposal; destination | reconcile material balance | kg | each event | project | site/handler | final exit once | inspection; receipt |
| `cp_acceptance` | all three nodes | accepted states | as-built drawing; sign-off | use; area_m2; area_convention; foundation; shell; systems; test; date | signed inspection and area check | m2; date | each milestone | through handover | building | accepted area once | drawings; signed handover |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area` | inventory | Divide whole-building quantities by accepted gross floor area, retaining totals. | quantity; area_m2 | amount per m2 | `src_ec_levels` |
| `calc_balance` | materials | Delivered = installed + rejected exit + supplier return + stock change, with internal reuse counted once. | delivery; install; exit; return; stock | reconciled mass |  |
| `calc_freight` | transport | Sum carried tonnes times route km by leg/mode; disclose return treatment. | load_t; leg_km; mode | tonne-km |  |
| `calc_shared` | shared assets | Attribute measured total across all consumers in project period by physical use; sum shares to total. | asset total; users; period | node/building shares | `src_ec_levels` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | output | Confirm predominant commercial use, included fixed systems, area method and accepted gate. | contract; plans; handover |
| `quality_route` | process inventory | Use actual structure, envelope and system scope rather than cross-use generic intensity. | as-built bill; supplier tickets |
| `quality_rejects` | materials | Reconcile accepted, reworked, returned and disposed states without duplicate outputs. | logs; weighbridge receipts |
| `quality_uuid` | final exchanges | Confirm flow type, gate, property and unit for each concrete UUID and Flow Set expansion. | platform detail/support rows |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | final building | Check commercial predominant use and separate industrial works, land and movable equipment. | `src_unsd_53122` |
| `validate_handover` | reference | Require signed acceptance and measured area; exclude post-handover energy and maintenance. | `src_ec_levels` |
| `validate_route` | all nodes | Check use-specific frame, envelope and services against as-built quantities, not shared warehouse/office defaults. |  |
| `validate_rework` | rejects | Every rejected state has a linked reinspection, return, recovery or disposal path. |  |
| `validate_secondary` | recovered inputs | Check origin, recovery handoff and single burden treatment. | `src_iso_21930` |
| `validate_shared` | shared resources | All consumers and periods are listed; allocated shares reconcile to recorded total. |  |
| `validate_binding` | exchanges | Leave unverified UUIDs empty; expand parameterized carriers/transport only to verified identities. |  |
| `validate_range` | amounts | Treat provisional Ranges as investigation triggers, not universal building intensity factors. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction dataset for one accepted commercial building |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness and identity review |
| allowed_use | Construction-stage model matching use, design, geography, fixed-system scope, area convention and gate |
| excluded_use | Operation/end-of-life claims, industrial buildings and unrelated commercial uses without separate model |
| required_metadata | site; use; area; design; fixed systems; date; acceptance; suppliers; secondary origin; shared resources; exclusions |
| required_quality_disclosure | source coverage; conversions; missing data; unresolved UUIDs; material balance; rejects; allocation; provisional ranges |
| update_trigger | verified reference UUID, boundary/design change, new quantity evidence, Flow Set or allocation revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `src_unsd_53122` | official_guidance | UNSD CPC 2.1 53122, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53122 | Scope examples; checked-in CPC 3.0 leaf remains classification authority |
| `src_ec_levels` | official_guidance | European Commission Level(s), https://green-forum.ec.europa.eu/green-business/levels_en | Building lifecycle boundary and reporting context |
| `src_iso_21930` | standard | ISO 21930:2017, https://www.iso.org/standard/61694.html | Construction product EPD and secondary-material method context; no quantity factor |
