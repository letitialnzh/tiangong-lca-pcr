---
pcr_id: pcr.constructions-and-construction-services.constructions.railways
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Railways

## 1. Scope and Applicability

This PCR covers one continuous railway alignment segment after installed track and in-scope power, control and safety systems pass site acceptance. Long-line, commuter, tramway, urban rapid-transit, funicular and cable-guided lines are eligible when their track form and handover gate are declared. It excludes rail transport service, rolling stock, station buildings, and independently measured bridges and tunnels; identify their linked datasets when the corridor includes them. Construction ends at infrastructure handover, not the start of train operations. [unsd-53212; fra-track-2026; uic-mainline-lcat]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.railways |
| classification_refs | CPC 3.0 53212, Railways; mapping acceptance is separate. |
| covered_products | Site-accepted railway alignment with formation, permanent way and declared trackside electrification, control and safety systems. |
| excluded_products | Rolling stock and operation; station buildings; separately measured bridges, tunnels and utilities; future maintenance. |
| representative_product | One route-kilometre of tested and accepted railway alignment. |
| production_route | Prepare formation; install track components; integrate in-scope power and safety systems; test and hand over. |
| market_state | Installed and accepted infrastructure at a named site. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Site-accepted railway alignment segment. |
| How much | One route-km; report track-km separately for multiple tracks. |
| How well | Formation, track geometry and included systems pass specified acceptance tests. |
| How long or cycle | One construction project through handover; future service life is scenario metadata. |
| reference_flow_link | `accepted_railway` from `track_handover`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 route-km of accepted railway alignment |
| Reference product flow | Site-accepted railway alignment; UUID unresolved |
| Reference flow property | Route length; UUID unresolved |
| Reference unit group | Length; UUID unresolved |
| Reference unit | route-km |
| Required qualifiers | Georeferenced endpoints; route-km and track-km; track count and gauge; ballast or slab track form; at-grade, elevated and underground shares; power and signalling scope; bridge, tunnel and station interfaces; acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `route_length` | reference product | Length, UUID unresolved | route-km | Measure once along the accepted centreline between endpoints; parallel tracks do not multiply this length. |
| `track_length` | track inventory | Length | track-km | Sum installed track centrelines, including separately disclosed sidings and turnouts. |
| `material_mass` | materials and waste | Mass | kg | Convert pieces, linear and volume units using project-specific unit mass or density, retaining the conversion record. |
| `freight_work` | inbound transport | Mass × distance | t·km | Multiply delivered tonnes by loaded distance and disclose the provider's return-trip treatment. |
| `site_energy` | equipment | Energy or fuel mass | kWh, MJ or kg | Keep carriers separate; avoid counting generator fuel and its electricity twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed right-of-way, existing track or structures, ground condition and any demolition or remediation at commencement. |
| starting_condition_role | Physical baseline for new construction, not a free infrastructure product. |
| product_classification_scope | One accepted rail alignment; separately measured station, bridge, tunnel and train assets remain outside. |
| recursive_input_rule | Purchased track panels enter as components at their supply gate; never treat another complete accepted line as an unexamined raw input. |
| upstream_dataset_requirement | Link compatible rail, sleeper, fastening, ballast or slab, power/control products, freight, energy and waste treatment datasets. |
| disclosure | Report starting state, route and track lengths, included systems, civil interfaces, shared works, secondary origin, cut-offs and gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | whole product | Include actual works and testing through signed infrastructure handover. Operation, maintenance and end-of-life are separate scenarios. | `unsd-53212`; `fra-track-2026` |
| `asset_interfaces` | bridges, tunnels and stations | Record whether each asset is inside this measured contract or a separate linked dataset; never silently include or omit it. | `unsd-53212`; `uic-mainline-lcat` |
| `assembly_boundary` | rails, sleepers, fasteners, ballast/slab and systems | Supplier manufacture belongs to product inputs; installation and integration belong here. Record accepted and rejected states separately. | `fra-track-2026` |
| `secondary_and_shared` | recovered inputs and common works | Declare recovery hand-off, prior-burden convention, consuming nodes and service periods; attribute each burden once. | `uic-mainline-lcat` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formation` | Corridor and track formation | required | From surveyed right-of-way to accepted track-supporting formation. | Earthwork, drainage and prepared formation; route deficient work to rework or export. | Accepted route-km and measured work. |
| `track_handover` | Permanent way and systems handover | required | From accepted formation to tested railway. | Join rails, sleepers, fasteners and ballast/slab; integrate declared power/control; reject failed work. | Accepted route-km and track-km. |

### Process: Corridor and track formation (`formation`)

#### Inputs

##### Product flows

###### Earthwork service (`earthwork_service`)

Use only for subcontracted work whose equipment fuel is not also counted as owned foreground fuel. The contract may cover excavation, backfill or compaction; select the exact Flow Set group from foreground service records.

- Selected flow: Corridor earthwork and compaction service
- Flow property / unit: Contract service quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Amount rule: Record actual contract quantity and chainage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_earthwork`
- Range: Provisional service quantity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: declared service units/route-km
  - Basis: broad initial screen pending the contract unit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formation and drainage materials (`formation_materials`)

Separate aggregate, geotextiles, drainage and stabilization products by actual specification. Reclaimed aggregate requires origin and recovery-gate evidence.

- Selected flow: Formation products by as-built item
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, returned and stock quantities by material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional formation mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kg/route-km
  - Basis: broad route-dependent first-pass screen, not a design quantity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formation equipment energy (`formation_energy`)

Record owned plant fuel and electricity, excluding energy already represented by the earthwork service.

- Selected flow: Construction fuel and electricity by actual carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Sum meters, invoices and machine logs by work package and carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional formation energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: kWh-equivalent/route-km
  - Basis: broad first-pass equipment energy screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted formation (`accepted_formation`)

Only surveyed formation passing its bearing and geometry gate moves to track installation.

- Selected flow: Accepted track-supporting formation
- Flow property / unit: Route length / route-km
- Amount rule: Record accepted chainage, excluding failed or pending sections.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Accepted formation coverage
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: route-km/route-km reference
  - Basis: accepted formation supporting one accepted route-km
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Spoil exported (`spoil_export`)

Reused fill stays inside the measured formation balance; exported material has one documented receiver.

- Selected flow: Excavated soil and rock waste by destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile excavation, reuse, stock and exported weighbridge mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Spoil export fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg excavated material
  - Basis: exported spoil divided by excavated material after stock reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Permanent way and systems handover (`track_handover`)

#### Inputs

##### Product flows

###### Accepted formation received (`formation_received`)

The same accepted chainage enters once as the internal intermediate from `formation`.

- Selected flow: Accepted track-supporting formation
- Flow property / unit: Route length / route-km
- Amount rule: Match input chainage to accepted upstream output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Formation link
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: route-km/route-km reference
  - Basis: one accepted upstream route-km per downstream route-km
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

###### Permanent-way components (`track_components`)

Expand rail, sleeper, fastening, ballast or slab, and turnout items into separate actual exchanges. Track form, gauge and track-km govern the item schedule; reclaimed rail or ballast requires recovery hand-off.

- Selected flow: Track components by delivered as-built product
- Flow property / unit: Mass / kg
- Amount rule: Convert actual bills to installed mass and reconcile delivery, returns, rejects and stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted route-km; additionally per track-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional track component mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kg/route-km
  - Basis: broad first-pass screen dependent on track count and form
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Power and safety components (`system_components`)

Record only contracted track electrification, signalling and safety equipment; station-only equipment stays separate.

- Selected flow: Installed railway power, control and safety products by item
- Flow property / unit: Mass or count / kg or item
- Amount rule: Sum as-built accepted equipment by specification; disclose zero when not in scope.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional systems mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: kg/route-km
  - Basis: broad screen including zero for an out-of-scope system
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inbound component freight (`component_freight`)

Use actual shipment mode, mass and distance, avoiding transport already included in supplier gates.

- Selected flow: Freight transport service by recorded mode and route
- Flow property / unit: Transport work / t·km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Amount rule: Sum tonnes multiplied by loaded kilometres by mode.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freight`
- Range: Provisional transport-work screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: t·km/route-km
  - Basis: broad initial freight-work review screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Installation and testing energy (`installation_energy`)

Meter tamping, welding and test energy by carrier; allocate shared plant across nodes and periods only once.

- Selected flow: Construction fuel and electricity by actual carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Reconcile carrier invoices and meters to installation and test work packages.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional installation energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: kWh-equivalent/route-km
  - Basis: broad first-pass installation and test screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted railway (`accepted_railway`)

Count only chainage for which track and included systems pass specified tests and handover.

- Selected flow: Site-accepted railway alignment
- Flow property / unit: Route length / route-km
- Amount rule: One accepted route-km, with track-km and systems scope as qualifiers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Reference route length
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: route-km/reference flow
  - Basis: one accepted route-km by definition
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Track installation rejects (`track_rejects`)

Segregate cut rail, broken sleepers, off-spec ballast and failed equipment by destination. Reworked items return to installation; unresolved rejects never enter accepted output.

- Selected flow: Installation waste by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile installed, returned, reworked, exported and stock quantities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted route-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Component reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg delivered components
  - Basis: exported rejects divided by delivered components after returns and stock changes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `shared_assets` | shared haul road, depot, plant and temporary power | Name consuming nodes and service periods. Attribute measured use by machine hours, work volume or another documented physical driver; fractions sum to one. | `uic-mainline-lcat` |
| `multiple_tracks` | parallel tracks or projects | Assign specific work first; allocate inseparable corridor work by documented physical use or covered length, never multiplying one route-km by track count. | `reference-definition` |
| `secondary_inputs` | reclaimed rail, ballast and aggregate | Document origin and recovery hand-off. Count recovery processing once under the chosen upstream convention; no prior-use burden or substitution credit without evidence. | `uic-mainline-lcat` |
| `rework_reject` | failed formation and track work | Keep rework at its producing node; route unrepaired material to recovery or disposal once; exclude pending or rejected chainage from output. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_earthwork` | `formation` | earthwork service | survey and contract | chainage, excavation, fill, service scope and unit | survey and signed contractor log | m3, service unit | each package | preparation to formation gate | named corridor | sum without duplicate owned-machine fuel | survey and invoices |
| `cp_materials` | `formation`; `track_handover` | permanent products | deliveries and as-built bill | product, specification, mass or items, installed, returns, stock, secondary origin | signed delivery and as-built schedule | kg, item, m3 | each delivery | full construction | accepted segment | reconcile each product line | invoices and certificates |
| `cp_energy` | `formation`; `track_handover` | equipment and test power | meter and fuel log | carrier, amount, node, date, shared consumers | meter, invoice and machine log | kWh, MJ, kg, L | weekly | construction and test | named corridor | sum carriers and attribute common readings once | meter and invoice |
| `cp_freight` | `track_handover` | inbound products | shipment record | product mass, mode, origin, distance, return convention | dispatch docket and route log | t, km, t·km | each trip | supply to site | supplier to corridor | sum tonnes × loaded km by mode | signed transport record |
| `cp_waste` | `formation`; `track_handover` | spoil and rejects | waste/rework log | material, mass, node, reuse, rework, export, receiver | weighbridge and manifest | kg | each movement | full construction | named corridor | balance by origin and destination | tickets and receipts |
| `cp_acceptance` | `formation`; `track_handover` | accepted states | survey and commissioning | endpoints, route-km, track-km, gauge, form, systems, defects, tests, acceptance | as-built survey and signed test | route-km, track-km | each gate | formation to handover | accepted segment | match chainage and omit failed lengths | drawings and certificates |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `material_balance` | each product | Gross delivered = installed + exported waste + returns + closing stock minus opening stock within documented tolerance. | delivery, installation, waste and stock | kg/product and kg/route-km | `mass-balance-identity` |
| `spoil_balance` | excavation | Excavated = on-site reuse + export + stock change after density and bulking conversion. | survey, density and weighbridge | kg/route-km and residual | `mass-balance-identity` |
| `transport_work` | inbound freight | Sum actual loaded tonnes × kilometres by mode. | mass and route records | t·km/route-km | `reference-definition` |
| `track_ratio` | parallel tracks | Track-km / route-km is disclosed, not used to multiply reference output. | as-built route and track survey | track-km/route-km | `reference-definition` |
| `shared_fraction` | common resources | Attributed amount = measured common amount × physical-use fraction; all fractions sum to one. | meter and use records | amount/route-km | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | reference and interfaces | Check accepted endpoints, route and track length, gauge, form, system scope and separate civil assets. | as-built plan and certificate |
| `dq_materials` | major components | Reconcile rails, sleepers, fasteners, ballast/slab and equipment by specification and secondary origin. | delivery, as-built and waste records |
| `dq_time` | all phases | Use project dates, supplier vintage and disclosed temporal gaps. | schedule, invoices and tests |
| `dq_identity` | final exchanges | Confirm concrete UUID against platform detail, flow type, gate, property and unit before release. | flow and support-reference review |
| `dq_shared` | common plant | Demonstrate consumers, service period and single allocation. | meter and allocation worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_handover` | reference product | Require signed acceptance, endpoints, route-km, track-km, gauge, form and included systems; reject pending lengths. | `unsd-53212`; `fra-track-2026` |
| `v_interfaces` | civil assets | Check station, bridge, tunnel and rolling-stock ownership; separately measured assets cannot vanish or be counted twice. | `unsd-53212`; `uic-mainline-lcat` |
| `v_balance` | formation and materials | Test excavation and delivered-product balances including returns, stock, rework and exported rejects. | `mass-balance-identity` |
| `v_rework` | deficient work | Link every rejected state to rework or one recovery/disposal exit before acceptance. | `mass-balance-identity` |
| `v_secondary` | recovered inputs | Require origin, recovery gate and one burden convention, without unsupported substitution credit. | `uic-mainline-lcat` |
| `v_shared` | common works | Verify all consumers and periods, physical driver and attribution fractions summing to one. | `uic-mainline-lcat` |
| `v_identity` | final UUIDs | A same-title at-plant or Mass flow cannot identify a site-accepted route-length output; leave unresolved UUID blank. | `reference-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Construction-stage package for an accepted railway alignment. |
| downstream_use | `secondary_dataset` or `background_dataset` in infrastructure process and lifecyclemodel projections after concrete identity review. |
| allowed_use | Construction assessment per route-km with matching track count, form, systems and gate. |
| excluded_use | Train operation, maintenance or whole-life claim; unlinked stand-alone bridge or tunnel attribution. |
| required_metadata | Endpoints, route and track length, track count, gauge, track form, system scope, interfaces, dates and acceptance. |
| required_quality_disclosure | Material, transport, energy and waste completeness; provisional ranges; UUID gaps; secondary origin and shared allocation. |
| update_trigger | As-built length/scope change, corrected quantities, supplier substitution or verified reference identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-53212` | official_guidance | UNSD CPC explanatory note 53212, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53212 | Railway category and included systems. |
| `fra-track-2026` | official_guidance | Federal Railroad Administration, Track and Structures Compliance Manual 2026, https://railroads.dot.gov/elibrary/track-and-structures-compliance-manual-2026 | Track-component and acceptance questions; jurisdictional values not universalized. |
| `uic-mainline-lcat` | literature | UIC MAINLINE project LCA Tool, https://uic.org/com/enews/nr/410/article/the-european-railway-project-4663 | Rail infrastructure asset separation and lifecycle context. |
| `mass-balance-identity` | method_factor | Conservation-of-mass reconciliation applied to project materials and excavation. | Material, spoil and reject balances. |
| `reference-definition` | method_factor | This PCR's accepted-route-kilometre definition and arithmetic normalization. | Output length, track ratio and transport calculation. |
