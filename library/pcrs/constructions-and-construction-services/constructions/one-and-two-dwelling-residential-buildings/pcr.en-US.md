---
pcr_id: pcr.constructions-and-construction-services.constructions.one-and-two-dwelling-residential-buildings
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# One- and two-dwelling residential buildings

## 1. Scope and Applicability

This PCR covers one completed residential building containing one or two dwellings at its documented site handover. Detached and attached forms qualify. Declare basement, attached garage, landscape, gross floor area, permanent systems and the construction site. A dwelling is not a separate building output. Prefabricated kits before site installation and separately sold construction services are inputs, not this product. [unsd-53111; rics-wlca-2024]

The completion gate requires the permanent structure, envelope, included fit-out and integrated systems to be installed, tested and accepted. Material supply, transport, construction energy, water and waste through this gate are included. Operation, occupant activity, future repair and demolition require separately declared downstream scenarios. [rics-wlca-2024]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.one-and-two-dwelling-residential-buildings |
| classification_refs | CPC 3.0 53111, One- and two-dwelling residential buildings; mapping acceptance is a separate decision. |
| covered_products | One site-completed building containing one or two dwellings, with declared attached scope and integrated services. |
| excluded_products | Buildings with three or more dwellings; independent civil works; uninstalled prefab kits; separately sold construction services; occupant equipment. |
| representative_product | One accepted detached or attached residential building with one or two dwellings and measured gross floor area. |
| production_route | Site preparation and foundation; component delivery and structural/envelope assembly; services, finishing, commissioning and handover. |
| market_state | Permanent building installed and accepted at the named site. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One completed one- or two-dwelling residential building. |
| How much | One building; report measured gross floor area in m2 as a parallel intensity denominator. |
| How well | Specified permanent structure, envelope, finishes and integrated services pass documented acceptance. |
| How long or cycle | One construction project through site handover; service life is metadata for later scenarios. |
| reference_flow_link | `completed_building` output from `finishing_handover`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 completed building |
| Reference product flow | Completed one- or two-dwelling residential building at site handover; UUID unresolved |
| Reference flow property | Number of buildings; UUID unresolved |
| Reference unit group | Number of items; UUID unresolved |
| Reference unit | building |
| Required qualifiers | Site; dwelling count; detached/attached form; gross floor area convention; basement, garage and landscape scope; structural system; included services; completion and acceptance date |

The same-title platform candidate is an at-plant manufactured Mass flow. It does not resolve this site-handover, per-building output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `building_count` | reference product | Count, UUID unresolved | building | Count one independently accepted physical building even if it contains two dwellings. |
| `floor_area` | parallel intensity | Gross floor area | m2 | Measure from as-built drawings; disclose area convention and basement/garage treatment. |
| `material_mass` | materials and wastes | Mass | kg | Convert supplier units with product-specific density or unit mass and retain conversion evidence. |
| `transport_work` | inbound freight | Mass × distance | t·km | Multiply actual load mass by loaded route distance; disclose empty return accounting. |
| `site_energy` | fuel and electricity | Energy or fuel mass/volume | kWh, MJ, kg or L | Preserve carrier and conversion evidence; avoid counting generator fuel and its electricity twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare cleared or existing site, retained structures, demolition and ground contamination before building work. |
| starting_condition_role | This is the foreground construction starting state; pre-existing assets do not confer a free product or credit. |
| product_classification_scope | One permanent one- or two-dwelling residential building; separate civil assets remain outside unless included explicitly. |
| recursive_input_rule | If a purchased module purports to be a completed building, resolve the overlap with this building output by component decomposition before using it as an input. |
| upstream_dataset_requirement | Link compatible material, prefab component, energy, transport and waste-service upstream datasets at their actual gates. |
| disclosure | Report starting state, included works, temporary/shared work, secondary materials, handover test, exclusions and cut-offs. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | entire product | Include actual supplies, transport, installation and construction waste through accepted handover. Later use and end of life are separate scenarios. | `rics-wlca-2024` |
| `prefab_interface` | factory-made components | Enter as delivered products; count on-site installation here and factory manufacture only in linked supplier datasets. | `rics-wlca-2024` |
| `site_scope` | basement, garage, landscape and existing works | Declare included scope from drawings and contracts. Treat demolition and ground remediation explicitly, rather than hiding them in building materials. | `rics-wlca-2024` |
| `secondary_entry` | recovered inputs | Record recovered origin and processing hand-off; count each recovery burden once without automatic substitution credit. | `rics-wlca-2024` |
| `shared_assets` | scaffold, formwork, crane, site utilities | Record all using phases, buildings and service period; allocate measured use once with a disclosed physical driver. | `rics-wlca-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `site_foundation` | Site and foundation | required | From declared site state to accepted substructure. | Earthwork, foundation materials, equipment and spoil. | One building and measured gross floor area. |
| `shell_assembly` | Structural and envelope assembly | required | From accepted foundation to accepted weather-tight shell. | Join structural and envelope components; route rejects. | One building and measured gross floor area. |
| `finishing_handover` | Services, finishing and handover | required | From accepted shell to commissioned and accepted building. | Install services, finish surfaces, manage residues and accept output. | One building and measured gross floor area. |

### Process: Site and foundation (`site_foundation`)

#### Inputs

##### Product flows

###### Groundwork service (`groundwork_service`)

Use only for contracted earthwork; do not also count the provider's fuel as foreground equipment fuel.

- Selected flow: Earthwork and excavation construction service
- Flow property / unit: Supplier service quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- Amount rule: Record contracted service quantity and work scope.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_earthwork`
- Range: Provisional contracted-groundwork screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: declared supplier service units/building
  - Basis: deliberately broad screen pending actual supplier service unit and measured scope
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Foundation materials (`foundation_materials`)

Record actual concrete, steel, aggregate, waterproofing and other products as separate material exchanges at dataset creation.

- Selected flow: Foundation materials by as-built product line
- Flow property / unit: Mass / kg
- Amount rule: Delivered minus returned mass by product; retain installed and wasted quantities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional foundation material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg/m2 gross floor area
  - Basis: deliberately broad first-pass screen, not a design quantity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Foundation site energy (`foundation_energy`)

Meter power and fuel for owned equipment and temporary facilities during foundation works; allocate shared use once.

- Selected flow: Site electricity and mobile-equipment fuel supply
- Flow property / unit: Energy or carrier mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Read meters, invoices and equipment logs by carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional foundation energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh-equivalent/m2 gross floor area
  - Basis: broad initial screen for machinery and power
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted foundation (`accepted_foundation`)

Internal inspected state passed to shell assembly; it is not another market building.

- Selected flow: Accepted in-place foundation
- Flow property / unit: Number / foundation
- Amount rule: One inspected foundation per completed building.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`

- Range: Accepted foundation count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: foundation/building
  - Basis: one inspected foundation transferred to this building
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Excavated spoil exported (`spoil_export`)

Classify soil leaving site by contamination status and destination; soil reused within the site remains an internal transfer.

- Selected flow: Excavated soil or rock by destination
- Flow property / unit: Mass / kg
- Amount rule: Weigh or calculate from surveyed volume and measured density, net of on-site reuse.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_earthwork`
- Range: Spoil balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg excavated mass
  - Basis: exported soil divided by total excavated soil
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Structural and envelope assembly (`shell_assembly`)

#### Inputs

##### Product flows

###### Foundation received (`foundation_received`)

Link the accepted substructure from the preceding node without duplicating its production burdens.

- Selected flow: Accepted in-place foundation
- Flow property / unit: Number / foundation
- Amount rule: Match the inspected foundation to the building identifier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Foundation hand-off count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: foundation/building
  - Basis: one accepted foundation received by this building
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

###### Structural and envelope components (`shell_components`)

Record load-bearing timber, masonry, steel or prefab modules and roof, insulation, windows and doors by actual material line, with secondary origin and factory gate.

- Selected flow: Structural and envelope components by as-built product line
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivery, installed schedule, returns and rejects for each component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional shell component screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg/m2 gross floor area
  - Basis: broad screen across different structural systems
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inbound freight (`material_transport`)

Record actual delivery service for purchased components and material; other modes need their own compatible identity.

- Selected flow: Road freight transport service
- Flow property / unit: Goods transport / t·km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Sum loaded tonnes × route kilometres by trip, with return treatment stated.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Range: Provisional freight screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: t·km/building
  - Basis: deliberately broad logistics screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shell assembly energy (`assembly_energy`)

Record crane, tool, temporary-lighting and welding energy by carrier; shared machinery use is allocated by logs.

- Selected flow: Electricity and mobile-equipment fuel supply
- Flow property / unit: Energy or carrier mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter or log actual carrier consumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional assembly energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh-equivalent/m2 gross floor area
  - Basis: broad first-pass site-energy screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted weather-tight shell (`accepted_shell`)

Inspected foundation, structure and envelope become the parent state for finishing; rejects are excluded until corrected.

- Selected flow: Accepted weather-tight building shell
- Flow property / unit: Number / shell
- Amount rule: One inspected shell per building.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Accepted shell count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: shell/building
  - Basis: one inspected shell transferred to finishing
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Rejected components and off-cuts (`assembly_rejects`)

Record defective units and off-cuts by material and route; reworked pieces loop into assembly and leave this waste row only if exported.

- Selected flow: Construction material rejects by destination
- Flow property / unit: Mass / kg
- Amount rule: Weigh exported rejects; reconcile with rework, recovery and accepted components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Assembly reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg delivered components
  - Basis: rejected mass divided by delivered mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Services, finishing and handover (`finishing_handover`)

#### Inputs

##### Product flows

###### Weather-tight shell received (`shell_received`)

Internal parent state from assembly, before surface finishing and system installation.

- Selected flow: Accepted weather-tight building shell
- Flow property / unit: Number / shell
- Amount rule: Match the inspected shell from `shell_assembly`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Shell hand-off count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: shell/building
  - Basis: one accepted shell received by finishing
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

###### Integrated service equipment (`service_equipment`)

Record permanently installed plumbing, electrical distribution, ventilation, heating and controls by equipment schedule; exclude movable occupant appliances.

- Selected flow: Installed building-service products by schedule line
- Flow property / unit: Mass / kg
- Amount rule: Reconcile installed equipment with delivered and returned products.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional service-equipment screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m2 gross floor area
  - Basis: broad installed-equipment screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing materials (`finishing_materials`)

Record plasterboard, flooring, coating, sealant and other finish products individually; characterize residues and rejected finishes separately.

- Selected flow: Surface-finishing products by as-built material line
- Flow property / unit: Mass / kg
- Amount rule: Convert installed-area and invoice records to product mass, retaining return and loss lines.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Range: Provisional finishing-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/m2 gross floor area
  - Basis: broad first-pass screen across finish specifications
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Construction and commissioning water (`construction_water`)

Record mixing, cleaning, testing and commissioning water up to acceptance, excluding occupant water use.

- Selected flow: Process water supply
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter water or allocate shared site meter from documented activity records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Range: Provisional construction-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/m2 gross floor area
  - Basis: broad initial site-water screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing and commissioning energy (`finish_energy`)

Record tool, temporary heating, drying and system-test energy up to acceptance by actual carrier.

- Selected flow: Site electricity and fuel supply
- Flow property / unit: Energy or carrier mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter or invoice actual carrier use, identifying commissioning separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional finishing-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh-equivalent/m2 gross floor area
  - Basis: broad first-pass site-energy screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed residential building (`completed_building`)

The one- or two-dwelling building crosses the boundary only after specified systems and finishes pass handover acceptance.

- Selected flow: Completed one- or two-dwelling residential building at site handover
- Flow property / unit: Number / building
- Amount rule: One accepted building; record floor area and dwelling count as metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Reference building count
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: building/reference flow
  - Basis: one accepted physical building by PCR reference definition
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Finishing residues and rejects (`finishing_waste`)

Record finish off-cuts, containers and failed work by material and destination; repaired finish stays within this node.

- Selected flow: Finishing and installation waste by destination
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconcile manifests by material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per completed building
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Finishing reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg delivered finish materials
  - Basis: exported finish waste divided by delivered finish products
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `building_allocation` | project with several buildings | Assign measured quantities to the benefiting building first. Allocate indivisible shared work by documented floor area, machine hours or material mass; record denominator and shares summing to one. Two dwellings inside one building are not co-products. | `rics-wlca-2024` |
| `shared_works` | scaffold, formwork, crane and site utilities | Identify consuming nodes and project period, allocate actual use once, and disclose reuse cycles or salvage only with evidence. | `rics-wlca-2024` |
| `secondary_material` | recovered aggregate, timber or other products | Preserve origin and recovery hand-off; use one upstream recovery convention and avoid charging previous life or speculative substitution twice. | `rics-wlca-2024` |
| `rework_reject` | defective components and finish | Return corrected products and rework energy to their producing node; exclude rejected items from accepted output and count exported waste once. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_earthwork` | `site_foundation` | earthwork and spoil | survey and contractor record | starting state, excavation volume, density, reuse and export, service scope | survey, weighbridge and contractor log | m3, kg, service unit | each event | foundation phase | named site | excavated = reused + exported + stock change | signed survey and tickets |
| `cp_materials` | `site_foundation`; `shell_assembly`; `finishing_handover` | permanent products | bill of quantities and deliveries | product, supplier, delivered, installed, returns, secondary origin, mass conversion | delivery docket and as-built schedule | kg and native unit | each delivery | full project | one building | retain product lines; net delivered = delivered - returns | signed schedule and invoices |
| `cp_energy` | `site_foundation`; `shell_assembly`; `finishing_handover` | equipment and site power | meters and fuel logs | carrier, amount, phase, machine hours, shared users | meter, invoice and log | kWh, MJ, kg, L | weekly | full construction | named site | sum by carrier and allocate shared readings once | meter photos and invoices |
| `cp_transport` | `shell_assembly` | inbound freight | shipment records | product mass, origin, mode, loaded distance, return convention | docket and route log | t, km, t·km | each trip | full construction | suppliers to site | sum tonnes × kilometres by mode | tickets and route evidence |
| `cp_waste` | `shell_assembly`; `finishing_handover` | rejects and residues | waste records | source node, material, mass, rework, destination, treatment | bin scale and manifest | kg | each collection | assembly to handover | one site | sum exported mass once by destination | tickets and receipts |
| `cp_water` | `finishing_handover` | construction water | meter and activity record | reads, phase, activity, shared users | meter or documented allocation | m3 | weekly | finish to acceptance | named site | sum allocated phase volume | meter photos and invoices |
| `cp_handover` | `site_foundation`; `shell_assembly`; `finishing_handover` | accepted states | inspection and acceptance | building id, dwellings, area, scope, defects, date | signed inspection and as-built survey | building, m2 | each gate | foundation to handover | one building | match one accepted state at each gate | drawings and certificates |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_material` | all product inputs | Net delivered = delivered minus returned; reconcile installed, waste and stock change. | delivery, return and conversion records | kg/product and kg/building | `mass-balance-identity` |
| `freight_work` | inbound transport | Sum actual tonnes × loaded kilometres; include empty return only when absent from provider inventory. | shipment mass, route, mode | t·km/building | `rics-wlca-2024` |
| `spoil_balance` | earthwork | Excavated = on-site reuse + export + stock change within measurement uncertainty. | volume, density and tickets | kg/building and residual | `mass-balance-identity` |
| `area_intensity` | reporting | Divide per-building totals by measured gross floor area; preserve one building as reference output. | amount and area | amount/m2 | `reference-definition` |
| `shared_fraction` | shared resources | Attributed amount = shared total × documented use fraction; all consumer fractions sum to one. | shared meter, hours or work quantities | amount/building | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference and final exchanges | Confirm concrete flow type, gate, property and unit against a platform detail row before dataset release. | flow and support-reference review |
| `dq_scope` | building | Verify one or two dwellings, accepted scope, measured area convention and included systems. | as-built drawing and acceptance record |
| `dq_complete` | all phases | Reconcile major materials, transport, energy, water and wastes; disclose gaps. | bills, meters and manifest balance |
| `dq_time` | all values | Use actual project dates and show supplier vintage and substitutions. | invoices, meter dates and schedule |
| `dq_secondary` | recovered products | Disclose origin, recovery gate and upstream burden treatment. | supplier trace and declaration |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_handover` | reference output | Reject a package without one accepted physical building, one/two dwellings, area convention and included-system declaration. | `unsd-53111`; `rics-wlca-2024` |
| `v_balance` | materials, spoil and waste | Test delivered = installed + exported waste + returns + stock change and investigate residuals. | `mass-balance-identity` |
| `v_shared` | shared assets | Verify all consumers and service periods, one attribution, and fractions summing to one. | `rics-wlca-2024` |
| `v_reject` | off-spec work | Require a rework, recovery or disposal path and prevent unresolved rejects from entering accepted output. | `mass-balance-identity` |
| `v_secondary` | secondary materials | Require origin and recovery hand-off and avoid duplicate prior-life burdens or unsupported credits. | `rics-wlca-2024` |
| `v_flow` | final exchanges | Verify gate, type, direction, property and unit. An at-plant Mass flow does not identify this completed building. | `unsd-53111` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction-stage package for one completed residential building. |
| downstream_use | `secondary_dataset` or `background_dataset` for construction-stage process and lifecyclemodel projections after exact flow verification. |
| allowed_use | Upfront construction assessment and comparisons with equal area conventions and scopes. |
| excluded_use | Operational or whole-life claims; using an at-plant component as site-handover reference. |
| required_metadata | Site, building id, dwelling count, floor area convention, basement/garage/landscape scope, structure, integrated systems, dates and acceptance. |
| required_quality_disclosure | Phase and material coverage, provisional ranges, unresolved UUIDs, allocations, secondary origin and omissions. |
| update_trigger | As-built design or quantity change, corrected supplier/transport records, or a newly verified reference identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-53111` | official_guidance | UNSD CPC explanatory note, 53111, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53111 | One/two-dwelling category boundary. |
| `rics-wlca-2024` | standard | RICS, Whole life carbon assessment for the built environment, 2nd ed., version 3 (2024), https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf | As-built construction quantities, transport, waste and handover scope. |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to measured material and excavation records. | Reconciliation and fraction checks. |
| `reference-definition` | method_factor | This PCR's one-completed-building reference definition and arithmetic normalization. | Output count and area normalization. |
