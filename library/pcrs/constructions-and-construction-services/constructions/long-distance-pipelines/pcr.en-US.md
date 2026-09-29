---
pcr_id: pcr.constructions-and-construction-services.constructions.long-distance-pipelines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Long-distance pipelines

## 1. Scope and Applicability

This PCR covers an accepted long-distance overland, underground or submarine pipeline for petroleum products, gas, water or another declared conveyed product, including directly related pumping stations only when delivered in the same project. The asset gate is signed construction and pressure-test handover, not its later transport service. Exclude urban distribution mains, non-pipeline water conduits, separately delivered lines or stations, and operation. Declare medium, alignment, pipe specification, installation route and station scope. [unsd-cpc3-53241; phmsa-pipeline-construction]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.long-distance-pipelines |
| classification_refs | CPC 3.0 53241, Long-distance pipelines; mapping acceptance is separate. |
| covered_products | Accepted long-distance transmission pipeline and integral pumping structures in the project scope. |
| excluded_products | Local distribution mains, aqueducts, separate station projects and pipeline transport service. |
| representative_product | One accepted specified long-distance pipeline project. |
| production_route | Corridor preparation and trenching, pipe stringing and welding, field coating, laying/backfill or crossing, pressure testing, restoration and handover. |
| market_state | Installed civil asset at signed handover. |

The parent `line_install` activity receives inspected coated pipe and a prepared route. Open trench, trenchless crossing and submarine laying alter excavation/spoil, installation service, test records and validation. They may coexist on different as-built segments but are mutually exclusive at one chainage. Record the actual route and method for every segment. [phmsa-pipeline-construction; ferc-pipeline-construction]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed long-distance pipeline asset with declared integral stations. |
| How much | One accepted project; disclose accepted route length and installed pipe mass separately. |
| How well | Welding, coating, pressure, route and restoration acceptance completed. |
| How long or cycle | One construction project through signed handover; design life is metadata. |
| reference_flow_link | `accepted_pipeline` from `line_install`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted pipeline project |
| Reference product flow | Completed long-distance pipeline; UUID unresolved |
| Reference flow property | Count; UUID unresolved |
| Reference unit group | Count; UUID unresolved |
| Reference unit | pipeline project |
| Required qualifiers | Conveyed medium; alignment and geography; route length; diameter, wall thickness and material; coating; pressure class; installation method by segment; included stations; acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `project_count` | reference output | Count, UUID unresolved | project | Count signed accepted projects once; retain route length for comparison. |
| `pipe_balance` | pipe and fittings | Mass | kg | Reconcile delivered, installed, returned and rejected mass by specification. |
| `route_volume` | corridor | Length and in-situ volume | km and m3 | Measure installed chainage and surveyed cut volume; do not use loose-haul volume as in-situ excavation. |
| `water_balance` | pressure testing | Volume | m3 | Reconcile intake, reuse, treatment, discharge and residual water by test section. |
| `energy_carrier` | equipment | Carrier-specific energy or mass | kWh, MJ or kg | Avoid counting generator fuel and generated electricity twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed route and existing ground or sea-bed before construction. |
| starting_condition_role | Physical baseline, not burden-free installed infrastructure. |
| product_classification_scope | One accepted transmission asset; separate station projects are linked, not silently included. |
| recursive_input_rule | Purchased pipe and services enter at supplier handover; a complete pipeline is not an unexamined material input. |
| upstream_dataset_requirement | Route-matched pipe, coating, energy, transport, water and waste-management datasets. |
| disclosure | Segment methods, soil or sea-bed state, spoil reuse and destination, station scope, test medium, shared plant and signed acceptance. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | whole asset | Include corridor work, joining, coating, installation, pressure testing, necessary repair and restoration through signed handover; exclude transport operation. | `phmsa-pipeline-construction`; `unsd-cpc3-53241` |
| `earthwork_handoff` | `corridor_earthwork` | Measure removal from surveyed source ground independently; pass accepted prepared route to installation and separate reused backfill from exported spoil. | `phmsa-pipeline-construction` |
| `assembly_finish_handoff` | `pipe_assembly`, `joint_coating` | Pass inspected joined pipe to coating and accepted coated pipe to installation; failed welds or coating return for repair or leave to a declared destination. | `phmsa-pipeline-construction` |
| `segment_routes` | `line_install` | Separate open-cut, trenchless and submarine route records and inventories; count each accepted chainage once. | `phmsa-pipeline-construction`; `ferc-pipeline-construction` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `corridor_earthwork` | Corridor preparation and removal | required | Surveyed route to accepted prepared corridor. | Clear, grade and remove trench or crossing material independently; route reusable backfill and exported spoil. | Surveyed area and cut volume. |
| `pipe_assembly` | Stringing and joining | required | Delivered components to inspected joined string. | Integrate pipe joints, bends and fittings through welding and inspection; repair or reject failed joints. | Installed pipe mass and joint count. |
| `joint_coating` | Field-joint protection | required | Inspected joined string to accepted coated string. | Apply and inspect field coating; repair defects and route residues. | Accepted coating area and joint count. |
| `line_install` | Installation, test and handover | required | Prepared route and coated string to signed acceptance. | Lay pipe, backfill or cross, test, repair, restore and hand over one line. | Accepted route length and one project. |

### Process: Corridor preparation and removal (`corridor_earthwork`)

#### Inputs

##### Product flows

###### Corridor equipment energy (`corridor_energy`)

Meter actual fuel and electricity for clearing, grading and excavation when owned foreground equipment is used; do not repeat fuel embedded in a contracted service.

- Selected flow: Energy carrier by actual fuel or electricity
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Allocate measured use to `corridor_earthwork` and reconcile generator fuel and output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_corridor`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/project
  - Basis: all disclosed carriers with documented conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corridor excavation service (`earthwork_service`)

Use when separately contracted; do not also count the same contractor equipment as owned foreground plant.

- Selected flow: Construction service for actual clearing and excavation method
- Flow property / unit: Declared service property / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- Amount rule: Reconcile subcontract scope with surveyed area and cut volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_corridor`
- Range: Provisional service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: declared service units/project
  - Basis: broad first-pass screen, not design quantity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared route (`prepared_route`)

Internal surveyed handoff to installation, not another saleable asset.

- Selected flow: Accepted prepared corridor or crossing route
- Flow property / unit: Length / km
- Amount rule: Sum non-overlapping accepted as-built chainage.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_corridor`
- Range: Route-length screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: km/project
  - Basis: accepted as-built route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Exported excavation spoil (`exported_spoil`)

Reused soil remains in the foreground backfill balance; record removed material crossing to a destination.

- Selected flow: Excavated soil or rock by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile excavation, backfill, stockpile and export using measured density.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_corridor`
- Range: Spoil-export screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000000
  - Unit: kg/project
  - Basis: exported mass only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Stringing and joining (`pipe_assembly`)

#### Inputs

##### Product flows

###### Joining equipment energy (`assembly_energy`)

Meter actual fuel and electricity for bending, welding and inspection when owned foreground equipment is used; do not repeat fuel embedded in a contracted service.

- Selected flow: Energy carrier by actual fuel or electricity
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Allocate measured use to `pipe_assembly` and reconcile generator fuel and output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joints`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/project
  - Basis: all disclosed carriers with documented conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pipe joints and fittings (`pipe_components`)

Enumerate pipe joints, bends, valves and fittings by specification; integral station components only when in project scope.

- Selected flow: Pipe joints and fittings by material and specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, returned and rejected mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Component-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000000
  - Unit: kg/project
  - Basis: delivered specified components
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Contracted joining and inspection service (`joining_service`)

Use only for separately contracted bending, welding or nondestructive inspection; owned equipment and the same contractor service must not overlap.

- Selected flow: Pipe joining and inspection service by actual method
- Flow property / unit: Service quantity / declared unit
- Amount rule: Match invoices, accepted joint register and repair work.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joints`
- Range: Joining-service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: declared service units/project
  - Basis: contracted joining and inspection work
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Inspected joined pipe string (`joined_string`)

Internal handoff to field coating only after weld inspection.

- Selected flow: Inspected joined pipe string
- Flow property / unit: Length / km
- Amount rule: Count accepted joined chainage once after repair and retest.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_joints`
- Range: Joined-length screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: km/project
  - Basis: accepted inspected length
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected pipe cut-outs (`rejected_pipe`)

Failed joints return for repair; irreparable cut-outs exit to documented recovery or disposal, never accepted output.

- Selected flow: Rejected pipe and weld cut-outs by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Count material leaving after rework decisions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joints`
- Range: Reject-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/project
  - Basis: exported cut-outs after repair
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Field-joint protection (`joint_coating`)

#### Inputs

##### Product flows

###### Coating equipment energy (`coating_energy`)

Meter actual fuel and electricity for surface preparation, application and inspection when owned foreground equipment is used; do not repeat fuel embedded in a contracted service.

- Selected flow: Energy carrier by actual fuel or electricity
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Allocate measured use to `joint_coating` and reconcile generator fuel and output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/project
  - Basis: all disclosed carriers with documented conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inspected joined string received (`joined_string_input`)

Receive the inspected output of `pipe_assembly` without adding its upstream burdens again.

- Selected flow: Inspected joined pipe string
- Flow property / unit: Length / km
- Amount rule: Equal accepted joined length entering field coating.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_joints`
- Range: Joined-string handoff screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: km/project
  - Basis: matches `joined_string` output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coating and repair material (`coating_material`)

Apply coating to inspected joined pipe; identify primer, wrap, coating and repair stocks in source records.

- Selected flow: Field-joint coating material by formulation
- Flow property / unit: Mass / kg
- Amount rule: Reconcile purchased, applied, returned and discarded mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`
- Range: Coating-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/project
  - Basis: applied and discarded field material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Contracted field-coating service (`coating_service`)

Include separate application, inspection or repair service when performed by a contractor; avoid overlap with owned equipment energy.

- Selected flow: Field-joint coating and inspection service by method
- Flow property / unit: Service quantity / declared unit
- Amount rule: Match contractor scope, accepted joint area and repair logs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`
- Range: Coating-service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: declared service units/project
  - Basis: contracted field coating and inspection
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted coated pipe string (`coated_string`)

Pass only coating-inspected string to installation; failed areas return for surface repair.

- Selected flow: Accepted coated pipe string
- Flow property / unit: Length / km
- Amount rule: Reconcile coating inspection with accepted joined length.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating`
- Range: Coated-length screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: km/project
  - Basis: coating-inspected accepted length
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Coating residues (`coating_residue`)

Route packaging, unused coating and removed defective coating by material to documented recovery or disposal.

- Selected flow: Field-coating residue by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Subtract returned usable stock from collected residue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`
- Range: Residue-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/project
  - Basis: boundary-exiting residue after repair
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Only add a coating-related elementary emission after records identify the substance, quantity and receiving medium; a generic VOC label is not an exact flow identity.

### Process: Installation, test and handover (`line_install`)

#### Inputs

##### Product flows

###### Installation equipment energy (`install_energy`)

Meter actual fuel and electricity for lowering, crossing, backfill and restoration when owned foreground equipment is used; do not repeat fuel embedded in a contracted service.

- Selected flow: Energy carrier by actual fuel or electricity
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Allocate measured use to `line_install` and reconcile generator fuel and output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/project
  - Basis: all disclosed carriers with documented conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Prepared route received (`prepared_route_input`)

Receive the surveyed output of `corridor_earthwork` without repeating its excavation burden.

- Selected flow: Accepted prepared corridor or crossing route
- Flow property / unit: Length / km
- Amount rule: Match the non-overlapping `prepared_route` output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_corridor`
- Range: Prepared-route handoff screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: km/project
  - Basis: matches `prepared_route` output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Coated string received (`coated_string_input`)

Receive only inspected coated string from `joint_coating`, not an additional purchased pipe burden.

- Selected flow: Accepted coated pipe string
- Flow property / unit: Length / km
- Amount rule: Match the `coated_string` output and accepted installation chainage.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating`
- Range: Coated-string handoff screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: km/project
  - Basis: matches `coated_string` output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Installation and crossing service (`installation_service`)

Record contracted lowering, drilling or submarine laying by segment, without duplicating owned equipment inputs.

- Selected flow: Installation service by actual route
- Flow property / unit: Service quantity / declared unit
- Amount rule: Match service invoices and non-overlapping as-built chainage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Range: Installation-service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: declared service units/project
  - Basis: route-specific service without owned-plant duplication
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pressure-test water (`test_water`)

Record water intake by section; an approved air or gas test requires its actual medium and route explanation.

- Selected flow: Water supplied for hydrostatic pressure testing
- Flow property / unit: Volume / m3
- Amount rule: Meter withdrawals and inter-section transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Range: Hydrotest-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: m3/project
  - Basis: withdrawal net of documented reuse
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted long-distance pipeline (`accepted_pipeline`)

The single asset output follows passing pressure tests, repairs, restoration and signed handover.

- Selected flow: Completed long-distance pipeline asset
- Flow property / unit: Count / pipeline project
- Amount rule: One accepted project with route and station qualifiers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test`
- Range: Accepted project count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: project/project
  - Basis: one signed project reference
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `phmsa-pipeline-construction`

##### Waste flows

###### Spent pressure-test water (`spent_test_water`)

Record transferred or treated test water as waste where appropriate; elementary emissions need specific substance and receiving medium.

- Selected flow: Spent hydrostatic-test water by destination
- Flow property / unit: Volume / m3
- Amount rule: Balance intake, reuse, treatment, discharge and residual water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted pipeline project
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test`
- Range: Spent-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: m3/project
  - Basis: spent volume after documented reuse
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | whole project | Count accepted pipeline once; prepared route, joined string and coated string are internal handoffs, not co-products. | `phmsa-pipeline-construction` |
| `shared_plant` | equipment and stations | Assign shared plant and temporary works by measured use, segment chainage or disclosed causal driver; never double-count owned fuel and contractor service. | `ferc-pipeline-construction` |
| `reject_burden` | weld and coating rejects | Retain burdens through repair; exported scrap or residue has a declared destination without an assumed credit against accepted output. | `phmsa-pipeline-construction` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_corridor` | `corridor_earthwork` | service, energy, route, spoil | Survey, contract, fuel and haul logs | chainage, area, cut, density, reuse, export, destination, carrier, energy quantity, generator status | Survey, meter and ticket reconciliation | km, m2, m3, kg, MJ, kWh | per segment | construction | complete route | Sum accepted chainage, balance material and energy | signed surveys, meters, weigh tickets |
| `cp_components` | `pipe_assembly` | pipe and fittings | Delivery register | grade, diameter, wall, mass, installed, return, reject | Scan and reconcile certificates | kg | per delivery | construction | all segments | Balance by specification | mill certificates, as-built register |
| `cp_joints` | `pipe_assembly` | energy, service, joined string and rejects | Weld, fuel and inspection logs | joint ID, chainage, service quantity, carrier, energy quantity, generator status, inspection, repair, cut-out mass | Joint-to-inspection and meter register | km, kg, MJ, kWh, declared unit | per joint | construction | all joints | Count accepted once after retest and reconcile energy | NDT, meters, repair report |
| `cp_coating` | `joint_coating` | energy, service, coating, string, residue | Coating, fuel and inspection logs | batch, applied, return, residue, joint ID, service quantity, carrier, energy quantity, generator status, repair | Batch, meter and holiday-test reconciliation | kg, km, MJ, kWh, declared unit | per joint | construction | all coated joints | Sum accepted length, energy and residue | batch sheets, meters, test reports |
| `cp_install` | `line_install` | energy and installation service | As-built, fuel and contract logs | chainage, method, service quantity, carrier, energy quantity, generator status, restoration | Survey, meter and invoice reconciliation | km, MJ, kWh, declared unit | per segment | construction | complete route | Non-overlapping accepted segments and energy | as-built drawings, meters, sign-off |
| `cp_test` | `line_install` | water, spent water, accepted asset | Test and handover logs | section, medium, intake, reuse, discharge, treatment, result, signature | Meters and test reports | m3, project | per section | test to handover | all sections | Balance water and count project once | pressure charts, handover certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `route_sum` | line | Sum non-overlapping accepted as-built segment lengths; alternatives at one chainage are exclusive. | chainage and method | accepted km | `phmsa-pipeline-construction` |
| `material_balance` | pipe and spoil | Delivered = installed + returned + rejected; excavated = reused + exported + remaining stock after unit conversion. | surveys, delivery and haul tickets | reconciled kg or m3 | `phmsa-pipeline-construction` |
| `hydrotest_balance` | test medium | Intake + transfer-in = transfer-out + discharge + treatment + retained, by section. | meters and transfer logs | spent m3 | `phmsa-pipeline-construction` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | line | Every accepted chainage has one method, pipe specification and test disposition. | as-built and test register |
| `dq_rework` | weld and coating | Link each failed inspection to repair/retest, recovery or disposal; unresolved failures block acceptance. | defect logs |
| `dq_balances` | pipe, spoil, water | Investigate unexplained balances before release. | reconciliation sheets |
| `dq_identity` | concrete exchanges | Confirm each actual flow UUID and support property/unit rows; Flow Sets alone do not finish identity. | platform detail records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_check` | reference output | Reject accepted-line output unless welding, coating, pressure, restoration and signed handover cover declared scope. | `phmsa-pipeline-construction` |
| `route_check` | alternatives | Validate non-overlapping chainage and route-specific excavation and installation records. | `ferc-pipeline-construction` |
| `reject_check` | failed joints and coating | Require repair and retest, recovery or disposal; no failed material enters accepted output. | `phmsa-pipeline-construction` |
| `scope_check` | asset | Reject a transport service or local distribution main as construction asset reference. | `unsd-cpc3-53241` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction package for one accepted long-distance pipeline. |
| downstream_use | `secondary_dataset` or `background_dataset` for asset construction. |
| allowed_use | Route-matched infrastructure modelling with declared medium, length, material, method and station scope. |
| excluded_use | Pipeline transport operation, local distribution and unqualified comparisons. |
| required_metadata | Geography, alignment, chainage, medium, pipe specification, segment method, station scope, test and handover date. |
| required_quality_disclosure | Material and water balances, shared plant, rejects, unresolved identities and provisional ranges. |
| update_trigger | Route, diameter, material or station-scope change, revised tests or verified identity updates. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-53241` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product scope and exclusions. |
| `phmsa-pipeline-construction` | official_guidance | https://www.phmsa.dot.gov/technical-resources/pipeline/pipeline-construction/phases-pipeline-construction-overview | Construction, test, repair and restoration sequence. |
| `ferc-pipeline-construction` | official_guidance | https://www.ferc.gov/interstate-natural-gas-facility-my-land-what-do-i-need-know | Installation and pressure-test gates. |
