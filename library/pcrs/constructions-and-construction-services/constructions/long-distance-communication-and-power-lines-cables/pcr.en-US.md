---
pcr_id: pcr.constructions-and-construction-services.constructions.long-distance-communication-and-power-lines-cables
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Long-distance communication and power lines (cables)

## 1. Scope and Applicability

This PCR covers a commissioned long-distance communication or power-transmission line between declared terminals: overhead, buried-land or submarine cable, with route-specific supports, protection, joints and integral interfaces. It covers corridor preparation, installation and acceptance, not stand-alone cable manufacture, local distribution, separately delivered terminal buildings, or operation. Report communication and power functions and route segments separately. [doe-transmission-eis; itu-g971]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.long-distance-communication-and-power-lines-cables |
| classification_refs | CPC 3.0 53242, Long-distance communication and power lines (cables); mapping acceptance is separate. |
| covered_products | Accepted long-distance overhead, buried or submarine communication or power-transmission line. |
| excluded_products | Stand-alone cable, local distribution, separately delivered buildings, operation and repair. |
| representative_product | One accepted route-km of a specified line segment between declared terminals. |
| production_route | Corridor survey and preparation; overhead erection/stringing, land trenching/ducting/pulling or submarine clearance/laying/protection; joining, testing and handover. |
| market_state | Installed and accepted infrastructure at handover. |

`line_integration` is the parent assembly activity. Overhead, buried-land and submarine routes have distinct support/protection, excavation or marine inventory and tests. They can coexist on separate physical segments, but are mutually exclusive methods for a given segment. [doe-transmission-eis; itu-g971]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Installed long-distance communication or power-transmission line segment. |
| How much | 1 accepted route-km along the alignment; disclose cable/circuit-km separately. |
| How well | Declared electrical or optical design, protection and commissioning tests passed. |
| How long or cycle | Construction to signed commissioning; design life is metadata, not use-stage burden. |
| reference_flow_link | `accepted_line` from `line_integration`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted route-km |
| Reference product flow | Accepted installed long-distance line; UUID unresolved |
| Reference flow property | Length; UUID unresolved |
| Reference unit group | Length; UUID unresolved |
| Reference unit | route-km |
| Required qualifiers | Communication or power function; terminals; route segment; voltage or optical specification; circuit/fibre count; route and cable length; supports, protection and interface scope; acceptance tests and date. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `route_length` | reference output | Length, UUID unresolved | route-km | Survey alignment once; multiple circuits do not multiply route-km. |
| `component_length` | cable and conductor | Length | m or km | Report installed length including slack apart from route length. |
| `material_mass` | components and rejects | Mass | kg | Reconcile receipts, installation, returns and rejects by specification. |
| `earthwork_volume` | corridor works | Volume | m3 | Separate surveyed in-situ volume from loose haul volume. |
| `energy_carrier` | plant and vessels | Carrier-specific energy or mass | kWh, MJ or kg | Report fuel and purchased electricity separately; do not double count generated electricity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed right-of-way or seabed corridor and existing terminal interfaces before work. |
| starting_condition_role | Physical baseline, not burden-free constructed line. |
| product_classification_scope | Accepted long-distance line with declared route and function; local distribution outside. |
| recursive_input_rule | Purchased components enter at supplier handover; an installed line cannot enter as unexamined material. |
| upstream_dataset_requirement | Link route-matched cable, conductor, metal, concrete, polymer, energy, freight and treatment datasets; avoid counting subcontract and owned plant twice. |
| disclosure | Function, alignment, route lengths, component scope, removals, rejects, shared plant, tests and identity gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | whole line | Include necessary survey, clearing, supports/protection, installation, joints, interfaces and commissioning through signed handover; exclude use and maintenance. | `doe-transmission-eis`; `itu-g971` |
| `corridor_handoff` | both nodes | `corridor_preparation` independently removes obstructions and passes only accepted prepared alignment to `line_integration`; track residual exits separately. | `doe-transmission-eis`; `itu-g971` |
| `route_delta` | `line_integration` | Overhead requires foundations, supports and stringing; buried land requires trench/duct/backfill; submarine requires survey, clearance, laying, slack/protection and tests. Segment records may coexist. | `doe-transmission-eis`; `itu-g971` |
| `shared_equipment` | equipment and vessels | Assign use to actual segments once; avoid duplicating subcontract service and owned energy. | `doe-transmission-eis`; `itu-g971` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `corridor_preparation` | Corridor clearing and preparation | required | Surveyed alignment to accepted prepared route. | Independently remove vegetation, soil, obstructions or seabed debris; hand off prepared corridor, route residuals. | Surveyed prepared route-km, area and excavation. |
| `line_integration` | Line installation and acceptance | required | Accepted corridor to signed commissioning. | Integrate cable/conductor and support/protection roles with joining services; repair or route rejects. | Accepted route-km and route-specific component quantity. |

### Process: Corridor clearing and preparation (`corridor_preparation`)

#### Inputs

##### Product flows

###### Earthwork and clearance service (`preparation_service`)

Conditional contracted clearing, trenching or marine clearance, only when its plant energy is not also reported as owned foreground use.

- Selected flow: Route-specific corridor preparation service
- Flow property / unit: Contract service quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Amount rule: Reconcile subcontract scope to surveyed prepared alignment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_corridor`
- Range: Provisional service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: declared service units/route-km
  - Basis: broad screen, not a design quantity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation energy (`preparation_energy`)

Distinguish actual fuel, purchased electricity and vessel propulsion by carrier.

- Selected flow: Energy carrier for terrestrial or marine corridor work
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Allocate metered carrier use to the prepared segment once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional preparation-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ-equivalent/route-km
  - Basis: disclosed carriers; screening only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared corridor (`prepared_corridor`)

Internal handoff with segment location and route type, not a finished line.

- Selected flow: Accepted prepared route alignment
- Flow property / unit: Length / route-km
- Amount rule: Survey and sign off alignment ready for installation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_corridor`
- Range: Prepared-route identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: prepared route-km/accepted route-km
  - Basis: matched segment alignment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `segment-length-identity`

##### Waste flows

###### Removed corridor residuals (`corridor_residuals`)

Identify source and destination of vegetation, soil, rock and recovered obstruction; retained backfill is not exported waste.

- Selected flow: Removed corridor material sent to external management
- Flow property / unit: Mass / kg
- Amount rule: Weigh dispatch or use surveyed volume and tested density, net of reuse.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Range: Export fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of removed mass
  - Basis: exported mass / removed mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Line installation and acceptance (`line_integration`)

#### Inputs

##### Product flows

###### Prepared-corridor handoff (`corridor_handoff`)

Match the internal input to the prepared-corridor output by segment ID; do not purchase it twice.

- Selected flow: Accepted prepared route from `corridor_preparation`
- Flow property / unit: Length / route-km
- Amount rule: Match input and output length for the same accepted segment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_corridor`
- Range: Handoff equality
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: input/output route-km ratio
  - Basis: matched accepted segment
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `segment-length-identity`

###### Cable or conductor components (`line_components`)

Record cable or conductor, joints, repeaters and accessories by specification; separate manufactured supply from installation.

- Selected flow: Cable, conductor and joining components by specification
- Flow property / unit: Length or mass / m or kg
- Amount rule: Reconcile delivered and installed length including slack, returns and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted route-km and route segment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Provisional component-length screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: component-km/route-km
  - Basis: circuits, fibres, branches and slack; broad initial screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supports and protection components (`support_components`)

Route-specific towers, foundations, insulators, ducts, backfill, armour, seabed protection and directly integral interfaces are separately identified component roles.

- Selected flow: Route-specific supports and protection by specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile installed quantity with deliveries, reusable temporary works and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted route-km and route segment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Provisional support-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: kg/route-km
  - Basis: broad route-specific screen, not a design specification
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Installation energy (`installation_energy`)

Include erection, stringing, cable pulling, laying, burial and testing as applicable, by actual carrier.

- Selected flow: Energy carrier for route-specific line installation
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter or allocate equipment and vessel energy by segment, excluding duplicate subcontract service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional installation-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: MJ-equivalent/route-km
  - Basis: disclosed carrier total; screening only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Joining and installation service (`installation_service`)

Conditional subcontracted stringing, pulling, splicing, laying or testing. Identify the contracted joining role and segment; exclude its embedded plant energy from owned foreground energy, or split non-overlapping scope explicitly.

- Selected flow: Route-specific line installation and commissioning service
- Flow property / unit: Contract service quantity / declared unit
- Amount rule: Reconcile invoiced work to accepted segment and owned-work boundaries.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_installation`
- Range: Provisional service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: declared service units/route-km
  - Basis: broad screen, actual contract scope controls
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted installed line (`accepted_line`)

Count only alignment passing route-specific electrical or optical commissioning and signed handover; rejected segments are excluded.

- Selected flow: Accepted installed long-distance communication or power line; UUID unresolved
- Flow property / unit: Length / route-km; UUIDs unresolved
- Amount rule: Survey accepted segments and sum once by function and route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Range: Reference output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: accepted route-km/reference route-km
  - Basis: one accepted route-km per reference unit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `segment-length-identity`

##### Waste flows

###### Rejected installation components (`rejected_components`)

At the producing node, identify damaged cable, supports or joints and record repair, supplier return, recovery or disposal. A repaired component re-enters installation; the same rejected material cannot also count as accepted output.

- Selected flow: Rejected line components by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile rejection, repair/return and final boundary exit once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Range: Rejected-component fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered component mass
  - Basis: final rejected mass / delivered mass by component
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_route_length` | accepted line | Count each physical segment once even with multiple circuits; report communication and power functions separately unless shared-asset attribution has evidence. | `segment-length-identity` |
| `shared_plant` | equipment, vessel, temporary access | Assign actual use by hours or work quantities to segment once. | `doe-transmission-eis`; `itu-g971` |
| `reject_loop` | off-spec components | Return repair to `line_integration`; classify supplier return, recovery or disposal as boundary exits, retain burdens, and exclude rejects from accepted length. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_corridor` | `corridor_preparation` | clearing and handoff | survey and work log | segment, route, length, area, volume, subcontract, acceptance | as-built survey and sign-off | km, m2, m3, service unit | each segment | pre-work to corridor acceptance | entire alignment | sum accepted segments only | survey and certificate |
| `cp_residuals` | `corridor_preparation` | removal and destination | dispatch ticket | material, origin, mass, volume, density, reuse, destination | weighed and surveyed reconciliation | kg, m3 | each dispatch | clearing period | corridor and destination | sum exported mass once | ticket and receipt |
| `cp_components` | `line_integration` | cable, supports, rejects | delivery and QA ledger | specification, segment, delivered, installed, slack, rejected, repaired, returned, destination | supplier and as-built reconciliation | m, kg, item | each lot | installation to acceptance | all segments | reconcile installed, returned and rejected | invoice, installation and defect record |
| `cp_energy` | both nodes | energy | meter and fuel log | carrier, quantity, plant, vessel, segment, hours, contracted scope | meter and invoice reconciliation | kWh, MJ, kg | monthly | active work | corridor, site and vessel | allocate once by use | meter and receipt |
| `cp_installation` | `line_integration` | contracted joining and testing | contract and test dossier | segment, service scope, quantity, test, invoice, owned-work exclusion | contract-to-as-built reconciliation | declared service unit | each package | installation to test | relevant segment | sum accepted nonduplicated scope | invoice and test certificate |
| `cp_acceptance` | `line_integration` | reference output | commissioning dossier | alignment, function, route, length, specification, test, defects, date | survey and signed test | route-km | each segment and final | completion gate | terminal-to-terminal | sum passed non-overlapping segments | signed tests and handover |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_length` | output | Sum signed non-overlapping route lengths; exclude failed sections pending retest. | survey and commissioning | accepted route-km | `segment-length-identity` |
| `component_balance` | components | Delivered = installed + returned + final rejected + stock change by specification. | delivery, installation, return, rejects | kg or m by component | `mass-balance-identity` |
| `residual_mass` | corridor | Exported mass = weighed dispatch or surveyed removed volume × tested density minus reused mass. | survey, tickets, density, reuse | kg exported/route-km | `mass-balance-identity` |
| `carrier_conversion` | energy | Convert each carrier with disclosed factor; avoid counting generator fuel and its electricity twice. | meter, fuel and allocation | MJ-equivalent/route-km | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_identity` | line | Declare function, route, terminals, specification and segment ID. | design and as-built dossier |
| `route_testing` | installation | Preserve overhead electrical/stringing, buried protection/continuity or submarine laying/optical tests as applicable. | test and acceptance dossier |
| `quantity_reconciliation` | components and residuals | Explain unmatched length, mass, returns, spoil and rework. | signed reconciliation |
| `identity_disclosure` | unbound flows | Preserve semantic specification until platform detail and support-row confirmation. | supplier and as-built specification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `function_and_route` | output | Reject output without function, route, terminals, segment length and signed commissioning. | `doe-transmission-eis`; `itu-g971` |
| `segment_route_delta` | segments | Require foundations/supports/stringing for overhead, trench/duct/backfill for buried or survey/clearance/laying/protection/tests for submarine; do not assign two alternatives to one segment. | `doe-transmission-eis`; `itu-g971` |
| `corridor_to_line` | graph | Match prepared and installed alignment; every removed residual needs destination. | `segment-length-identity`; `mass-balance-identity` |
| `rework_and_double_count` | installation | Flag rejects counted as accepted, unresolved repair exits, duplicate subcontract/owned energy or cable length mistaken for route length. | `mass-balance-identity`; `segment-length-identity` |
| `uuid_gate` | exchanges | Require detail-confirmed exact Product/Waste flow and support UUIDs before concrete TIDAS exchange; manufactured cable is not installed-line reference. | `segment-length-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific construction-stage line foreground package; candidate method until review. |
| downstream_use | Secondary or background dataset only where function, route, specification and handover match. |
| allowed_use | Construction burden for declared accepted route-km and disclosed segments. |
| excluded_use | Cable manufacture alone, local distribution, throughput, line operation or unqualified route comparison. |
| required_metadata | Terminals, geography, year, function, route lengths, circuits/fibres, voltage/capacity, components, tests and handover. |
| required_quality_disclosure | Survey and reconciliation methods, route deltas, cut-offs, shared plant, rejects, range tiers and unresolved identities. |
| update_trigger | Route, design, specification, quantity, test scope or verified platform identity changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `doe-transmission-eis` | official_guidance | U.S. Department of Energy, DOE/EIS-0414 Final Environmental Impact Statement, Volume 1, https://www.energy.gov/sites/default/files/EIS-0414-FEIS-2012-Volume1.pdf | Overhead clearing, foundations, towers and stringing. |
| `itu-g971` | standard | ITU-T G.971 (2024), General features of optical fibre submarine cable systems, https://www.itu.int/epublications/publication/itu-t-g-971-2024-12-general-features-of-optical-fibre-submarine-cable-systems | Submarine survey, clearance, laying, protection and tests. |
| `segment-length-identity` | method_factor | Surveyed non-overlapping installed-alignment length identity for one route-km. | Handoff and reference-length checks. |
| `mass-balance-identity` | method_factor | Conservation-of-material identity applied to weighed and surveyed foreground records. | Material and reject reconciliation. |
