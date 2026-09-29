---
pcr_id: pcr.constructions-and-construction-services.constructions.local-cables-and-related-works
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Local cables and related works

## 1. Scope and Applicability

This PCR covers accepted local electricity or communication cable works and directly related local distribution substations, transformer stations, towers or antennas. A delivery must have one explicit contract and acceptance boundary. Independently accepted lines and stations require separate packages/datasets. Include survey, route preparation, installation, integration, testing and handover. Exclude long-distance lines, stand-alone manufactured cable, electricity or telecommunication service, operation and repair. [unsd-cpc3-53252; rus-underground-distribution; itu-g6503]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.local-cables-and-related-works |
| classification_refs | CPC 3.0 53252, Local cables and related works; mapping acceptance is separate. |
| covered_products | Accepted local power or communication cable alignment and directly related local distribution stations, towers or antennas. |
| excluded_products | Long-distance lines, component manufacture alone, delivered utility service, operation and repair. |
| representative_product | One accepted local-network construction delivery with an itemized asset schedule. |
| production_route | Survey; route/site preparation; overhead support or underground duct/trench work; cable laying and joining; optional station or tower integration; testing and handover. |
| market_state | Constructed, tested and accepted infrastructure at handover. |

`asset_integration` is the parent assembly activity. Overhead and underground cable routes change support, earthwork, installation and test requirements: they can coexist on separate physical segments, not on one segment. Power and communication functions have distinct test evidence. A station or tower belongs only where directly related to the declared local network. [unsd-cpc3-53252; rus-underground-distribution; itu-g6503]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted local cable or directly related local distribution works in a declared delivery. |
| How much | 1 signed accepted package; separately disclose accepted route-km and station/tower/antenna counts and capacities. |
| How well | Design-specific electrical safety/continuity or optical link tests and related-asset commissioning passed. |
| How long or cycle | Construction to signed handover; design life is metadata, not use-stage burden. |
| reference_flow_link | `accepted_local_works` from `asset_integration`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted delivery package |
| Reference product flow | Accepted local cable and related works; UUID unresolved |
| Reference flow property | Count; UUID unresolved |
| Reference unit group | Count; UUID unresolved |
| Reference unit | accepted package |
| Required qualifiers | Location, local-network function, power or communication specification, overhead/underground route-km, cable/circuit/fibre length, station/tower count and capacity, existing-asset interface, tests and handover. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `package_count` | reference | Count, UUID unresolved | accepted package | Count each independently signed delivery once; unlike packages are not comparable without asset disaggregation. |
| `route_length` | cable | Length | route-km | Sum surveyed non-overlapping accepted local segments; circuits and fibres do not multiply route length. |
| `component_quantity` | components | Length, mass or count | m, kg or item | Reconcile delivered, installed, returned and rejected quantities by specification. |
| `groundwork_volume` | excavation | Volume and mass | m3 and kg | Keep in-situ volume distinct from loose haul volume and destination mass. |
| `carrier_use` | plant | Carrier-specific energy or mass | kWh, MJ or kg | Record power and fuels separately and prevent generator fuel/output double count. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed local alignment or site with existing utility interfaces identified before works. |
| starting_condition_role | Physical baseline; existing poles, ducts and stations are not automatically new outputs. |
| product_classification_scope | Accepted local cables and directly related works within one acceptance boundary. |
| recursive_input_rule | A purchased installed work of this category needs a documented subcontract boundary; do not treat the whole accepted package as a material input. |
| upstream_dataset_requirement | Connect specification-matched cable, conductor, duct, concrete, steel, electrical equipment, energy, freight and treatment datasets as applicable. |
| disclosure | Asset schedule, route alternatives, re-used infrastructure, removals, rejects, subcontract scope, tests and identity gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_boundary` | delivery | Include necessary preparation, component delivery to site, civil/installation work, integration and commissioning through signed acceptance; exclude operation and later repair. | `unsd-cpc3-53252`; `rus-underground-distribution`; `itu-g6503` |
| `preparation_interface` | `local_route_preparation` | Independently remove obstructing soil or vegetation and pass accepted prepared segment/site to integration; exported removal is not intended product. | `rus-underground-distribution` |
| `route_delta` | `asset_integration` | Underground needs trench, duct and backfill records; overhead needs pole/tower/support and stringing records. Keep power and communication tests separate. | `rus-underground-distribution`; `itu-g6503` |
| `related_asset_scope` | station or tower | Include only directly related local-network assets, separately counting equipment and civil works and disclosing existing-asset reuse. | `unsd-cpc3-53252` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `local_route_preparation` | Local route and site preparation | conditional | New corridor, excavation or foundation preparation occurs. | Remove ground/obstructions, pass accepted prepared segment/site and route residuals. | Route-km, site count and excavated volume. |
| `asset_integration` | Cable and related-asset integration and acceptance | required | All declared packages. | Join cables, supports/ducts, joints and in-scope station/tower components; test, accept or route defects. | One accepted package with route-km and asset schedule. |

### Process: Local route and site preparation (`local_route_preparation`)

#### Inputs

##### Product flows

###### Preparation energy (`prep_energy`)

Actual excavation, clearing and site-plant fuel or electricity by carrier; exclude the same energy in purchased work.

- Selected flow: Energy carrier for local preparation equipment
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter or allocate actual plant use to prepared alignment/site.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted package, with route-km or site count disclosed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: MJ-equivalent/accepted package
  - Basis: broad initial check, not a design value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared alignment or station site (`prepared_local_site`)

Internal handoff records the segment or site identity later received by integration; it is not an accepted cable asset.

- Selected flow: Prepared local route or related-asset site
- Flow property / unit: Length or count / route-km or site
- Amount rule: Sign off prepared alignment/site by as-built survey.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted package
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route`
- Range: Prepared-handoff completeness
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of prepared segment/site records matched
  - Basis: matched records divided by prepared records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `record-match-identity`

##### Waste flows

###### Removed earth and vegetation (`removed_material`)

Record source, reuse, export and receiver. Approved backfill retained on site is not exported waste.

- Selected flow: Removed local-route material requiring external management
- Flow property / unit: Mass / kg
- Amount rule: Weigh dispatch or convert surveyed volume using tested density, net of reuse.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted package
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spoil`
- Range: Exported removal fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of removed mass
  - Basis: exported mass divided by total removed mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Elementary flows

### Process: Cable and related-asset integration and acceptance (`asset_integration`)

#### Inputs

##### Product flows

###### Prepared-route or site handoff (`prepared_handoff`)

Where preparation occurs, receive the same accepted alignment or site once; station-only delivery may have no cable length.

- Selected flow: Prepared local route/site from `local_route_preparation`
- Flow property / unit: Length or count / route-km or site
- Amount rule: Match segment/site IDs to preparation output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted package
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route`
- Range: Handoff record equality
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: matched input/output record ratio
  - Basis: identical segment/site IDs across processes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `record-match-identity`

###### Cable and conductor (`cable_supply`)

Specify power/communication cable, insulation, conductor or fibre count and joints; manufactured cable is an input, never accepted works output.

- Selected flow: Cable, conductor and joint components by specification
- Flow property / unit: Length and mass / m and kg
- Amount rule: Reconcile delivered, installed/slack, returned and rejected cable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted package and route-km where relevant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Provisional cable-length screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: cable-m/accepted package
  - Basis: broad initial check; disclose circuits, branches and slack
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supports, ducts and equipment (`support_equipment`)

Record ducts, poles, towers, foundations, transformers, switchgear, cabinets, antennas and protection only when installed in the declared package; supplier ledger splits component roles.

- Selected flow: Local support and related-asset components by specification
- Flow property / unit: Mass or count / kg or item
- Amount rule: Reconcile delivered and installed quantities, returns and rejects by component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted package and asset schedule
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Provisional component-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: kg/accepted package
  - Basis: broad initial check by route and design
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Integration energy (`integration_energy`)

Record lifting, cable-pulling, splicing and test energy by carrier, excluding duplicate subcontract energy.

- Selected flow: Energy carrier for local integration
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter or allocate owned equipment and test energy once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted package
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plant`
- Range: Provisional integration-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: MJ-equivalent/accepted package
  - Basis: broad check; carrier meters control
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Specialist joining work (`specialist_work`)

Conditional purchased termination, splicing, lifting or testing. Define the contractor's scope and avoid duplicated owned plant/labour.

- Selected flow: Local specialist installation or commissioning service
- Flow property / unit: Service quantity / declared unit
- Amount rule: Allocate invoiced accepted work to segment or station.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted package
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_subcontract`
- Range: Provisional service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: declared service units/accepted package
  - Basis: broad screening; invoice unit and scope prevail
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted local works (`accepted_local_works`)

Count only assets passing function-specific tests and signed handover; attach an asset schedule rather than assuming universal route-km.

- Selected flow: Accepted installed local cable or related local-network works; UUID unresolved
- Flow property / unit: Count / accepted package; UUIDs unresolved
- Amount rule: Count one signed package with separately accepted line and station/tower quantities.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted package
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Range: Reference-package identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: accepted package/reference package
  - Basis: one signed package per reference unit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `record-match-identity`

##### Waste flows

###### Rejected components (`rejected_components`)

Identify damaged/off-spec cable cuts, joints and equipment at integration. Record repair/re-test, supplier return, recovery or disposal; defects are not accepted output.

- Selected flow: Rejected cable and equipment by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile defects, rework, return and final exit once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted package
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Range: Final reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of received component mass
  - Basis: final reject mass / received component mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `asset_schedule` | multi-asset package | Assign quantities to segments and station/tower assets by measured use; show package totals and component denominators; never compare unlike packages as equal route-km. | `record-match-identity` |
| `shared_plant` | equipment and subcontract | Apportion shared equipment by metered hours or work quantity once and document joint trenches/supports shared with other networks. | `material-balance-identity` |
| `defect_route` | rejected components | Retain defect burdens, link repair to `asset_integration`, identify return/recovery/disposal exits and exclude unresolved defects from accepted output. | `material-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_route` | `local_route_preparation` | alignment and handoff | survey and permit | segment/site ID, route, length, excavation, clearance, readiness, acceptance | as-built survey and signed release | route-km, m3, site | each segment/site | preparation to handoff | whole delivery | sum non-overlapping accepted segments/sites | survey and release |
| `cp_spoil` | `local_route_preparation` | removed material | dispatch and reuse log | source, material, volume, mass, density, reuse, receiver | weighing and survey reconciliation | m3, kg | each batch | preparation | route/site and receiver | exported mass net of reuse | dispatch and receipt |
| `cp_plant` | both nodes | energy | meter and fuel log | carrier, quantity, equipment, hours, route/site, subcontract scope | meter and invoice cross-check | kWh, MJ, kg | shift or month | construction to tests | all sites | allocate measured use once | meter and receipt |
| `cp_components` | `asset_integration` | components and defects | lot, installation and QA ledger | component, specification, delivered, installed, spare, reject, repair, return, destination | supplier/as-built reconciliation | m, kg, item | each lot | arrival to acceptance | each asset | balance by component and function | invoice, schedule, defect report |
| `cp_subcontract` | `asset_integration` | joining and tests | contract and invoice | scope, function, asset, quantity, owned-work exclusion | contract-to-test reconciliation | declared service unit | each contract | integration to test | contracted scope | sum accepted nonduplicated scope | invoice and test dossier |
| `cp_acceptance` | `asset_integration` | reference package | commissioning dossier | function, asset schedule, route length, station/tower count, specification, failed/passed tests, handover | signed test and acceptance | package, route-km, item | each handover | completion | whole delivery | count signed package once | test and handover certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_package` | output | Count one package only after all declared assets pass; sum accepted route lengths and related-asset counts separately. | schedule, survey, tests | package plus route-km and item schedule | `record-match-identity` |
| `component_balance` | components | Received = installed + spare/return + final reject + stock change by specification; rework enters once. | invoice and QA ledger | m, kg or item | `material-balance-identity` |
| `spoil_balance` | preparation | Exported mass = weighed dispatch or surveyed volume × measured density minus reused mass. | survey, density, dispatch, reuse | kg/package | `material-balance-identity` |
| `energy_normalization` | plant | Convert carriers with declared factors, allocate to accepted package once and avoid generator fuel/electricity double count. | meters, fuel, hours | carrier inventory/package | `material-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `asset_identity` | delivery | Record function, place, route, schedule, interface and accepted quantity. | design and signed as-built dossier |
| `function_tests` | cable and station | Preserve electrical insulation/continuity/safety, optical loss/continuity or station/tower tests as applicable. | signed test dossier |
| `balances` | material | Explain unmatched length/mass, excavation, reuse, rejects and repair. | reconciled ledger and receipts |
| `uuid_disclosure` | unbound flow | Preserve supplier and as-built specification until exact platform identity and support rows are confirmed. | specification and manifest gap |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `package_gate` | reference output | Require local-network function, asset schedule, applicable tests and signed handover; station-only work may have zero cable route-km. | `unsd-cpc3-53252`; `itu-g6503` |
| `route_delta_check` | segment | Require trench/duct/backfill underground or poles/supports/stringing overhead; choose one route per physical segment. | `rus-underground-distribution` |
| `handoff_check` | graph | Match prepared and received segment/site IDs and require a receiver for exported spoil. | `record-match-identity`; `material-balance-identity` |
| `defect_check` | integration | Reject duplicate energy, unresolved defects as accepted, cable-m mistaken for route-km or station count folded into length. | `material-balance-identity`; `record-match-identity` |
| `identity_gate` | exchange | Require exact detail-confirmed UUIDs before concrete exchange; manufactured cable or utility service is not installed works. | `record-match-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific construction foreground package; candidate method until review. |
| downstream_use | Secondary/background dataset only with matched function, route, asset schedule and handover. |
| allowed_use | Construction burdens for the specified accepted package, with line and station quantities separate. |
| excluded_use | Cable manufacture alone, utility service, long-distance network or comparison of unlike packages as route-km. |
| required_metadata | Geography, year, function, route-km, cable lengths, voltage/fibres, station/tower schedule, reused assets and handover. |
| required_quality_disclosure | Survey, route alternatives, component and spoil balance, shared plant, rejects, provisional ranges and unbound identities. |
| update_trigger | Boundary, route, design, asset mix, quantities, acceptance criteria or verified platform identity changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-53252` | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, subclass 53252, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category boundary and related assets. |
| `rus-underground-distribution` | official_guidance | USDA Rural Utilities Service Bulletin 1728F-806, Specifications and Drawings for Underground Electric Distribution, https://www.rd.usda.gov/files/UEP_Bulletin_1728F-806.pdf | Underground installation roles. |
| `itu-g6503` | standard | ITU-T G.650.3 (2017), Test methods for installed single-mode optical fibre cable links, https://www.itu.int/epublications/publication/itu-t-g-650-3-2017-08-test-methods-for-installed-single-mode-optical-fibre-cable-links | Communication-link test gate. |
| `record-match-identity` | method_factor | Identical segment/site and signed-package record equality. | Handoff and output counting. |
| `material-balance-identity` | method_factor | Material conservation across receipt, installation, reuse, rejection and exit. | Component, spoil and reject checks. |
