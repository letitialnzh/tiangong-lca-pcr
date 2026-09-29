---
pcr_id: pcr.constructions-and-construction-services.constructions.tunnels
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Tunnels

## 1. Scope and Applicability

This PCR covers road, highway, railway and underground-rail-traffic tunnels delivered as accepted civil assets at site. Include excavation, support, lining, waterproofing, drainage, portals and contract-specified safety systems through testing and signed handover. Declare bore count, centreline length, cross-section, ground and groundwater conditions, excavation method and systems scope. Railway track, power and signalling are included only if the measured tunnel contract includes them; otherwise link a separate rail-line dataset. Exclude ordinary vehicle or pedestrian underpasses, stand-alone underground rail lines, mining tunnels, operation and later maintenance. [unsd-tunnels; fhwa-tunnel-manual]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.tunnels |
| classification_refs | CPC 3.0 53222, Tunnels; mapping acceptance is separate. |
| covered_products | Completed road, highway, railway and underground-rail-traffic tunnel civil assets. |
| excluded_products | Ordinary underpasses, stand-alone rail lines, mining tunnels and transport operation. |
| representative_product | One centreline-km of site-accepted transport tunnel with declared bore and system scope. |
| production_route | Excavate and support ground; transfer accepted excavation to permanent lining and systems integration; test and hand over. |
| market_state | Installed and commissioned civil asset at a named site. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Site-accepted transport tunnel. |
| How much | One accepted centreline-km; disclose bore-km separately. |
| How well | Lining, water control, portals and included systems pass acceptance tests. |
| How long or cycle | One construction project through signed handover; design life is metadata. |
| reference_flow_link | `accepted_tunnel` from `lining_handover`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted tunnel centreline-km |
| Reference product flow | Site-accepted transport tunnel; UUID unresolved |
| Reference flow property | Centreline length; UUID unresolved |
| Reference unit group | Length; UUID unresolved |
| Reference unit | centreline-km |
| Required qualifiers | Endpoints; bore count and bore-km; cross-section; road or rail function; excavation method; geology and groundwater; support and lining; portals; safety and rail-system scope; acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `tunnel_length` | reference product | Length, UUID unresolved | centreline-km | Measure accepted centreline once between endpoints; disclose parallel bore-km without multiplying reference output. |
| `excavated_volume` | excavation | Volume | m3 | Use in-situ surveyed volume; record bulking and density conversions separately for spoil mass. |
| `material_mass` | installed products and waste | Mass | kg | Convert pieces and volumes using documented product-specific unit mass or density. |
| `site_energy` | construction equipment | Energy or fuel mass | kWh, MJ or kg | Separate carriers and attribute shared equipment once; do not count generator fuel and its electricity twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed ground, existing works, groundwater and portal areas before excavation; declare prior demolition or remediation. |
| starting_condition_role | Physical baseline, not a burden-free tunnel component. |
| product_classification_scope | One accepted tunnel; separately measured rail line, road deck, bridge, station and utility assets are linked. |
| recursive_input_rule | Purchased components enter at supplier handover; an accepted tunnel is not an unexamined raw input to another tunnel. |
| upstream_dataset_requirement | Link compatible concrete, steel, waterproofing, energy, freight, waste treatment and included system datasets. |
| disclosure | Ground, method, length, bores, materials, systems, spoil destinations, shared plant, secondary origins, cut-offs and identity gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | whole asset | Include work and testing through signed handover; exclude later traffic operation and maintenance. | `unsd-tunnels`; `fhwa-tunnel-manual` |
| `civil_interfaces` | portals, roads and railway systems | Record which interfaces belong to the measured contract and which link to external assets; assign shared work once. | `unsd-tunnels`; `fhwa-tunnel-manual` |
| `excavation_handoff` | two process nodes | Transfer accepted supported excavation by matched chainage; spoil is a distinct output, not another accepted tunnel. | `fhwa-tunnel-manual`; `mass-balance-identity` |
| `secondary_and_shared` | recovered inputs and shared boring plant, pumps or power | Record recovery gate, burden convention, consumers and service periods; count each burden once. | `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `excavation_support` | Excavation and ground support | required | Surveyed ground to accepted supported excavation. | Remove ground, route spoil and install support; deficient chainage returns for rework. | Accepted supported length and surveyed excavation. |
| `lining_handover` | Lining and systems handover | required | Accepted excavation to signed tunnel handover. | Integrate lining, waterproofing, drainage, portals and in-scope systems; test and reject failures. | Accepted centreline-km and bore-km. |

### Process: Excavation and ground support (`excavation_support`)

#### Inputs

##### Product flows

###### Excavation service (`excavation_service`)

Use for subcontracted work only when its equipment energy is not also counted as owned foreground energy. Select the exact service from contract records.

- Selected flow: Tunnel excavation service by actual method
- Flow property / unit: Contract service quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- Amount rule: Record contract quantity, chainage and owner-supplied exclusions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_excavation`
- Range: Provisional service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: declared service units/centreline-km
  - Basis: broad first-pass screen, not a design quantity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Support products (`support_products`)

Separate anchors, shotcrete, grout, precast support and steel by specification. Reclaimed inputs require origin and recovery-handover evidence.

- Selected flow: Ground support products by as-built item
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, returned and rejected quantities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional support mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kg/centreline-km
  - Basis: broad geometry-dependent screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Excavation energy (`excavation_energy`)

Record energy not included in the subcontract service; identify boring machines, pumps and ventilation by consumer and period.

- Selected flow: Construction energy by actual carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Sum metered carriers attributed to this node.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional excavation energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kWh-equivalent/centreline-km
  - Basis: broad method-dependent screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted supported excavation (`supported_excavation`)

Internal intermediate only: transfer accepted chainage once to `lining_handover`; failed sections stay for rework.

- Selected flow: Accepted supported tunnel excavation
- Flow property / unit: Centreline length / centreline-km
- Amount rule: Transfer surveyed chainage passing support and stability acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Supported excavation transfer
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: centreline-km/centreline-km reference
  - Basis: matched accepted chainage at internal handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Excavated spoil (`spoil_export`)

Separate on-site reuse, beneficial recovery and disposal; spoil is removed ground, not accepted tunnel output.

- Selected flow: Excavated soil and rock by destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile in-situ excavation, density, reuse, stock and weighed export.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spoil`
- Range: Spoil export fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg excavated material
  - Basis: exported mass divided by reconciled excavated mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Lining and systems handover (`lining_handover`)

#### Inputs

##### Product flows

###### Supported excavation received (`excavation_received`)

Match upstream accepted chainage exactly; do not import its burdens again as an external dataset.

- Selected flow: Accepted supported tunnel excavation
- Flow property / unit: Centreline length / centreline-km
- Amount rule: Reconcile upstream and downstream accepted chainage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Excavation handover match
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: centreline-km/centreline-km reference
  - Basis: matched upstream chainage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

###### Lining and water-control products (`lining_products`)

Record lining, reinforcement, membranes, grout, drainage and portal products by specification; manufacture is upstream, installation here.

- Selected flow: Lining and water-control products by as-built item
- Flow property / unit: Mass / kg
- Amount rule: Reconcile deliveries, installed amounts, returns and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional lining mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kg/centreline-km
  - Basis: broad cross-section-dependent screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Safety and rail-interface components (`systems_products`)

Include ventilation, fire, lighting, control and rail-interface components only if specified in the tunnel contract; otherwise link the external asset.

- Selected flow: Included tunnel-system components by specification
- Flow property / unit: Mass or item / kg or item
- Amount rule: Record delivered and installed quantities and test status.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional systems count screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: items/centreline-km
  - Basis: broad scope-dependent screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Installation and testing energy (`installation_energy`)

Record energy not already attributed to excavation or supplier manufacture; disclose common power and ventilation periods.

- Selected flow: Construction energy by actual carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Sum metered carriers attributed to installation and testing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional installation energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kWh-equivalent/centreline-km
  - Basis: broad method-dependent screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted tunnel (`accepted_tunnel`)

Count only chainage with completed lining, water control and in-scope system tests; pending or rejected sections do not enter reference output.

- Selected flow: Site-accepted transport tunnel
- Flow property / unit: Centreline length / centreline-km
- Amount rule: One accepted centreline-km with bore-km and systems disclosed separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Reference tunnel length
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: centreline-km/reference flow
  - Basis: one accepted centreline-km by definition
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Rejected installation products (`installation_rejects`)

Identify defective segments, membranes, concrete and failed equipment by producing node and destination. Rework loops stay at that node; unrepaired rejects exit once.

- Selected flow: Rejected products by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile installed, returned, reworked and exported mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted centreline-km
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg delivered products
  - Basis: exported rejects divided by delivered products after returns and stock
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `shared_equipment` | boring machine, pumps, power and access used by both nodes or projects | List consuming nodes and periods. Attribute by logged hours, meters, excavated volume or documented physical use; fractions sum to one. | `mass-balance-identity` |
| `parallel_bores` | multiple bores | Assign bore-specific work directly; divide inseparable common work by physical use or bore-km, never multiply centreline-km output. | `reference-definition` |
| `secondary_inputs` | recovered aggregate, steel or segment material | Document origin, recovery gate and prior-burden convention. Count recovery processing once; no unsupported substitution credit. | `mass-balance-identity` |
| `reject_and_spoil` | spoil and failed work | Spoil is not an accepted co-product by default. Route reuse or disposal by receiver; retain rework burdens at producing node. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_excavation` | `excavation_support` | excavation service | contract and survey | method, chainage, bore, volume, service coverage and owner fuel | signed contract log and survey | m3, service unit | each package | excavation to support gate | named tunnel | sum non-overlapping packages | survey and invoices |
| `cp_materials` | `excavation_support`; `lining_handover` | support, lining, systems | delivery and as-built | specification, mass, installed, returned, stock, secondary origin, recovery gate | delivery and as-built schedule | kg, item, m3 | each delivery | full construction | named tunnel | reconcile each product | invoices and certificates |
| `cp_energy` | `excavation_support`; `lining_handover` | equipment energy | meter and fuel log | carrier, quantity, machine, node, period, shared consumers | meters and machine logs | kWh, MJ, kg | weekly | excavation to tests | named tunnel | attribute each carrier once | meters and invoices |
| `cp_spoil` | `excavation_support` | removed ground | survey and movement | volume, density, reuse, stock, export, receiver, classification | survey and weighbridge | m3, kg | each movement | excavation to clearance | named tunnel | balance destinations | survey and tickets |
| `cp_waste` | `lining_handover` | rejects | waste and rework log | product, mass, defect, node, return, rework, receiver | weighbridge and work order | kg | each event | lining to handover | named tunnel | balance each product | tickets and receipts |
| `cp_acceptance` | `excavation_support`; `lining_handover` | gate states | survey and test | endpoints, bore, chainage, section, support, water control, systems, defects, sign-off | as-built survey and signed test | centreline-km, bore-km | each gate | support to handover | accepted chainage | match upstream and final length | drawings and certificates |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `spoil_balance` | excavation | Excavated mass after density conversion = on-site reuse + export + stock change within documented tolerance. | survey, density, movements | kg/centreline-km and residual | `mass-balance-identity` |
| `material_balance` | each product | Delivered + opening stock = installed + returned + rejects + closing stock within documented tolerance. | delivery, as-built, return, waste, stock | kg/product and kg/centreline-km | `mass-balance-identity` |
| `bore_ratio` | multiple bores | Bore-km / centreline-km is disclosed, not used to multiply reference output. | accepted length survey | bore-km/centreline-km | `reference-definition` |
| `shared_fraction` | common assets | Attributed amount = measured amount × documented use fraction; fractions across consumers sum to one. | machine logs and meters | amount/centreline-km | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | reference and interfaces | Check endpoints, length, geometry, method, geology, systems and linked road or rail assets. | design, as-built and certificate |
| `dq_materials` | major inputs | Reconcile support, lining, waterproofing and systems by specification and secondary origin. | delivery, as-built and waste records |
| `dq_time` | all phases | Use project dates, supplier vintage and disclosed gaps. | schedule, invoices and tests |
| `dq_identity` | final exchanges | Confirm UUID against platform detail, flow type, delivery gate, property and unit before release. | flow and support-reference review |
| `dq_shared` | common plant | Demonstrate consumers, service period, physical driver and single allocation. | meters and allocation worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_handover` | reference product | Require signed acceptance, endpoints, centreline-km, bore-km, geometry, ground and system scope; reject pending chainage. | `unsd-tunnels`; `fhwa-tunnel-manual` |
| `v_interfaces` | road and rail interfaces | Check separate alignment, track, station and utility datasets for omissions and double counts. | `unsd-tunnels`; `fhwa-tunnel-manual` |
| `v_balance` | excavation and materials | Test spoil and product balances with density, reuse, stock, returns and rejects. | `mass-balance-identity` |
| `v_rework` | deficient work | Link rejects to rework or one recovery/disposal exit before acceptance. | `mass-balance-identity` |
| `v_secondary` | recovered input | Require origin, recovery gate and one burden convention. | `mass-balance-identity` |
| `v_shared` | common plant | Verify consumers, periods, physical driver and fractions summing to one. | `mass-balance-identity` |
| `v_identity` | final UUIDs | An at-plant or mass-based flow cannot identify site-accepted length-based tunnel output; leave UUID blank until detail-confirmed. | `reference-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Construction-stage foreground package for an accepted transport tunnel. |
| downstream_use | `secondary_dataset` or `background_dataset` in infrastructure process and lifecyclemodel projections after concrete identity review. |
| allowed_use | Construction assessment per accepted centreline-km with matching bore geometry, method, ground and systems. |
| excluded_use | Traffic operation, maintenance, whole-life claims, mining tunnel or stand-alone rail-line attribution. |
| required_metadata | Endpoints, centreline-km, bore-km, section, method, geology, groundwater, lining, systems, interfaces, dates and acceptance. |
| required_quality_disclosure | Material, energy and spoil completeness; provisional ranges; UUID gaps; secondary origin and shared plant attribution. |
| update_trigger | As-built scope change, corrected quantities, supplier substitution or verified reference identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-tunnels` | official_guidance | UNSD CPC explanatory note 53222, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53222 | Tunnel category and adjacent exclusions. |
| `fhwa-tunnel-manual` | official_guidance | FHWA, Technical Manual for Design and Construction of Road Tunnels: Civil Elements, https://www.fhwa.dot.gov/bridge/tunnel/library.cfm | Excavation, support, lining and water-control questions; no jurisdictional value universalized. |
| `mass-balance-identity` | method_factor | Conservation-of-mass and physical-use reconciliation applied to project records. | Spoil, material, reject and shared-resource checks. |
| `reference-definition` | method_factor | This PCR's accepted-centreline-kilometre definition and arithmetic normalization. | Length, handover and ratio calculations. |
