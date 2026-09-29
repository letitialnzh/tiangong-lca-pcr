---
pcr_id: pcr.constructions-and-construction-services.constructions.mining-constructions
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Mining constructions

## 1. Scope and Applicability

This PCR covers a mine-specific non-building construction accepted at a named site: shaft, winding tower, mine drift, mine loading or discharge station, or related civil facility for mine access and handling. It ends at signed structural and installed-system acceptance, before mineral extraction or mine operation. It excludes generic buildings, non-mine tunnels, mining service, and equipment manufacture as a separate product. A separately contracted and functional asset is measured separately and linked at its interface. [unsd-cpc3-53261; msha-shaft-sinking]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.mining-constructions |
| classification_refs | CPC 3.0 53261, Mining constructions; mapping acceptance is separate. |
| covered_products | Site-accepted mine-specific shafts, drifts, winding towers, loading/discharge stations and related non-building civil facilities. |
| excluded_products | Mineral extraction and processing; standalone buildings; non-mine tunnels; separately sold equipment; mine operation and future maintenance. |
| representative_product | One accepted mine access or handling facility with declared geometry and installed-system scope. |
| production_route | Survey and prepare ground; remove ground for shaft/drift routes; form permanent support or foundation; integrate structural, hoisting, loading and ventilation interfaces as contracted; test and hand over. Surface-only towers/stations omit underground excavation. |
| market_state | Installed, tested and accepted facility at a named mine site. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One functional mine-specific civil facility accepted on site. |
| How much | One accepted facility; disclose excavated volume, supported length and structural quantities separately. |
| How well | Geometry, structural support and in-scope handling/ventilation interfaces pass signed tests. |
| How long or cycle | One construction contract through handover; operating life is scenario metadata. |
| reference_flow_link | `accepted_mining_structure` from `facility_integration`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted mine-specific facility |
| Reference product flow | Site-accepted mining construction; UUID unresolved |
| Reference flow property | Accepted facility count; UUID unresolved |
| Reference unit group | Item count; UUID unresolved |
| Reference unit | facility |
| Required qualifiers | Facility type and mine site; endpoints or footprint; excavation volume and shaft/drift length if applicable; support type; installed system scope; contract interfaces; acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `facility_count` | reference product | Count, UUID unresolved | facility | Count separately functional facilities only after signed handover. |
| `excavation_volume` | removed ground | Volume | m3 | Use surveyed in-situ volume; document density and bulking when converting to spoil mass. |
| `length_and_area` | shaft, drift and surface works | Length and area | m, m2 | Report as-built supported length and footprint without counting them as extra facilities. |
| `material_mass` | permanent inputs and waste | Mass | kg | Convert pieces and volumes using documented unit mass or density, then reconcile stock and returns. |
| `site_energy` | equipment and tests | Energy or fuel mass | kWh, MJ or kg | Separate carriers; avoid counting generator fuel and electricity twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed mine site and ground condition before works, with existing workings, utilities, dewatering, contamination and demolition declared. |
| starting_condition_role | Physical baseline for construction, not a free finished mine facility. |
| product_classification_scope | One accepted mine-specific civil facility and contracted integrated systems; extraction and mine operation remain outside. |
| recursive_input_rule | Prefabricated lining, tower or loading module enters as a component at its supplier gate; never hide another accepted facility as an unexamined raw input. |
| upstream_dataset_requirement | Link compatible materials, equipment, energy, freight and waste-treatment datasets at their actual gates. |
| disclosure | Facility type, ground state, route, geometry, excavation/disposal, component origin, shared works, temporary works, integrated systems and acceptance. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_handover` | whole facility | Include preparation, excavation where applicable, permanent support, integration and testing through signed handover; exclude mineral extraction and operation. | `unsd-cpc3-53261`; `msha-shaft-sinking` |
| `removal_interface` | ground removal | Survey the source state; separate excavated spoil, on-site reuse and final export by destination. `ground_removal` hands accepted prepared ground to `support_forming`; removal is neither ore extraction nor treatment. | `msha-shaft-sinking`; `mass-balance-identity` |
| `forming_interface` | support and foundation | `support_forming` takes accepted prepared ground and hands stable lining/foundation to `facility_integration`; account for support loss and rework. | `msha-shaft-sinking` |
| `assembly_interface` | tower, loading, hoisting and ventilation | Identify support, structural elements and installed systems as separate component roles; site installation joins them, while supplier manufacture remains upstream. | `unsd-cpc3-53261`; `msha-hoist-braking` |
| `route_delta` | underground versus surface | Shaft/drift routes require removal and ground support; surface-only towers/stations require foundation and assembly without fictitious underground excavation. Declare coexisting works before aggregation. | `unsd-cpc3-53261`; `msha-shaft-sinking` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ground_removal` | Ground preparation and removal | required | Shaft/drift route excavates; surface-only route prepares the surveyed foundation footprint with zero underground excavation. | Independently remove ground and hand off a surveyed prepared opening or base; route spoil by destination. | Surveyed in-situ volume and accepted prepared ground. |
| `support_forming` | Permanent support and foundation formation | required | Starts from accepted prepared ground and ends at the supported opening or foundation gate. | Form lining, support and foundation from pre-form ground; route failed support to rework or export. | Accepted formed support and installed material. |
| `facility_integration` | Structure, systems and handover | required | Begins with accepted support/foundation and ends with signed facility acceptance. | Install civil and in-scope handling/ventilation elements, test, and route rejects. | One accepted facility and measured components. |

### Process: Ground preparation and removal (`ground_removal`)

#### Inputs

##### Product flows

###### Ground-removal energy (`removal_energy`)

Meter excavation, haulage within site and preparation equipment by carrier; surface-only work records actual preparation energy and zero underground excavation.

- Selected flow: Ground-removal energy by measured carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Sum machine logs and meters for surveyed ground removal or base preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional removal energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kWh-equivalent/facility
  - Basis: broad first-pass screen by documented carrier and excavation route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared ground (`prepared_ground`)

Hand off a surveyed excavated opening or prepared surface foundation base before permanent support. This is not an ore product or the finished facility.

- Selected flow: Accepted prepared mine-facility ground
- Flow property / unit: Prepared package / item
- Amount rule: Record one geometry-verified preparation package for the facility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_excavation`
- Range: Ground hand-off count
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: package/facility
  - Basis: one surveyed prepared-ground package for one accepted facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Excavated spoil (`excavation_spoil`)

Record excavated soil and rock by destination; on-site reuse remains in the ground mass balance. Surface-only route records actual cleared material, which may be zero.

- Selected flow: Excavated spoil by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile in-situ survey and density with reuse, stock and exported weighbridge mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Range: Excavated-spoil export fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg excavated material
  - Basis: exported spoil divided by removed ground after on-site reuse and stock reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Permanent support and foundation formation (`support_forming`)

#### Inputs

##### Product flows

###### Prepared ground received (`prepared_ground_received`)

The accepted surveyed ground package is the pre-form state for lining, support or foundation construction.

- Selected flow: Accepted prepared mine-facility ground
- Flow property / unit: Prepared package / item
- Amount rule: Match one upstream preparation package and its surveyed geometry to this forming node.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_excavation`
- Range: Prepared-ground input link
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: package/facility
  - Basis: one accepted ground package enters the support-forming node
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

###### Support and foundation materials (`support_materials`)

Expand concrete, steel, anchors, lining and stabilization products by as-built specification. Surface-only work uses its actual foundation schedule.

- Selected flow: Permanent support and foundation products by specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, returned and stock mass per material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional material mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/facility
  - Basis: broad facility-dependent initial screen, not a design allowance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formation energy (`formation_energy`)

Meter lining, foundation forming, support placement and temporary ventilation by actual carrier; excavation energy belongs to `ground_removal`, and fuel already represented in a contractor service is excluded.

- Selected flow: Construction energy by measured carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Sum meters, invoices and machine logs by work package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kWh-equivalent/facility
  - Basis: broad initial screen after recorded carrier conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and dust-control water (`formation_water`)

Include purchased or transferred water for drilling, concrete and suppression. Naturally withdrawn water is elementary input and must not be double counted.

- Selected flow: Process water by supplied source
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Convert metered volume to mass using documented site density.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Range: Provisional water-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kg/facility
  - Basis: broad initial screen with volume-to-mass conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted formed support (`formed_support`)

Only supported opening or prepared foundation passing its gate moves to systems integration; failed work remains in rework.

- Selected flow: Accepted supported opening or prepared foundation
- Flow property / unit: Accepted component / item
- Amount rule: Record one accepted intermediate package per facility with geometry and tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Intermediate hand-off count
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: package/facility
  - Basis: one accepted support package for each accepted facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Rejected support (`formation_residuals`)

Track failed lining, concrete and support by material and receiver. Off-spec support returns to this node or exits once; excavated ground belongs to `ground_removal`.

- Selected flow: Rejected support by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile supplied support material, installed mass, rework, returns, stock and exported rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Range: Spoil and reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg supplied support material
  - Basis: exported reject mass divided by supplied support mass after rework and stock reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Structure, systems and handover (`facility_integration`)

#### Inputs

##### Product flows

###### Formed support received (`support_received`)

Match the accepted upstream package and geometry; do not purchase it as another complete facility.

- Selected flow: Accepted supported opening or prepared foundation
- Flow property / unit: Accepted component / item
- Amount rule: Match one upstream package to this contract.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Intermediate input link
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: package/facility
  - Basis: one accepted support package per accepted facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

###### Structural and handling components (`integration_components`)

Itemize tower steelwork, loading structures, hoist interfaces, conveyors, fans and control equipment only when contracted; disclose excluded roles.

- Selected flow: Structural, hoisting, loading and ventilation components by as-built item
- Flow property / unit: Mass / kg
- Amount rule: Convert installed items using supplier bills; reconcile returns and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional component mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/facility
  - Basis: broad initial screen dependent on installed scope
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inbound component freight (`component_freight`)

Use actual loaded mass and distance by mode; avoid freight included in the supplier gate.

- Selected flow: Freight transport service by recorded mode and route
- Flow property / unit: Transport work / t*km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Amount rule: Sum loaded tonnes multiplied by kilometres by mode.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freight`
- Range: Provisional freight-work screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000000
  - Unit: t*km/facility
  - Basis: broad initial route-dependent transport screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Installation and testing energy (`integration_energy`)

Meter lifting, joining, installation, tests and temporary ventilation by carrier. Attribute shared plant once by actual use.

- Selected flow: Installation and testing energy by measured carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Reconcile invoices, meters and equipment logs for installation and commissioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional integration energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kWh-equivalent/facility
  - Basis: broad first-pass installation and testing screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted mining construction (`accepted_mining_structure`)

Count only separately functional facilities passing permanent-structure and in-scope system tests; reject incomplete work.

- Selected flow: Site-accepted mining construction
- Flow property / unit: Accepted facility count / facility
- Amount rule: Record one accepted facility with its physical geometry and equipment scope.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Reference facility count
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: facility/reference flow
  - Basis: one accepted facility by definition
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Installation rejects (`integration_rejects`)

Segregate damaged and cut components by material and receiver. Rework returns to this node; unresolved defects never enter accepted output.

- Selected flow: Installation rejects by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile accepted, reworked, returned, recovered and discarded mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted facility
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Range: Installation reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg delivered components
  - Basis: exported reject mass divided by delivered component mass after returns and stock
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `facility_scope` | multiple facilities in one contract | Assign direct works first; allocate inseparable shared plant, roads or utilities by documented physical use, with fractions summing to one. | `reference-definition` |
| `spoil_destination` | removed ground | Keep reuse in the site balance; record exported material by receiver and treatment. No substitution credit without separate evidence. | `mass-balance-identity` |
| `rework_reject` | failed support and installation | Retain rework in its producing node; route final exits once to recovery or disposal; exclude rejected work from accepted output. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | `support_forming`; `facility_integration` | permanent components | deliveries and as-built bill | specification, received, installed, returns, stock, rejects, recycled origin | invoices and signed schedule | kg, item, m3 | each delivery | preparation through handover | named facility | reconcile each material | bills and certificates |
| `cp_energy` | `ground_removal`; `support_forming`; `facility_integration` | site energy | meter and machine log | carrier, amount, node, date, generator output, shared users | meter, invoice and log | kWh, MJ, kg, L | weekly | construction and tests | named facility | sum by node and remove double counts | meter and invoices |
| `cp_water` | `support_forming` | process water | meter and invoice | source, volume, density, use, return | meter and site log | m3, kg | weekly | preparation to support gate | named facility | convert and reconcile source | readings and invoices |
| `cp_excavation` | `ground_removal`; `support_forming` | ground and geometry | survey and work log | in-situ volume, supported length, area, soil/rock state, density | as-built survey | m3, m, m2, kg | each work package | preparation to support gate | named opening/foundation | sum unique surveyed work | drawings and survey |
| `cp_residuals` | `ground_removal`; `support_forming`; `facility_integration` | spoil and rejects | waste and rework log | material, origin, mass, reuse, rework, export, receiver, stock | weighbridge and transfer tickets | kg | each movement | full construction | named facility | balance origin and destination | tickets and receipts |
| `cp_freight` | `facility_integration` | inbound components | dispatch record | tonnes, distance, mode, supplier gate | waybill and route log | t, km, t*km | each shipment | supply to installation | supplier to mine | sum tonnes times loaded distance | waybills |
| `cp_acceptance` | `support_forming`; `facility_integration` | accepted states | survey and commissioning | type, geometry, components, tests, defects, sign-off | signed survey and tests | facility, m, m2, m3 | each gate | support to handover | named facility | count accepted states only | certificates |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `material_balance` | each permanent product | Receipts plus opening stock = installed plus returns plus closing stock plus exported rejects within documented tolerance. | delivery, installation, stock and waste | kg/product and kg/facility | `mass-balance-identity` |
| `spoil_balance` | excavation | Excavated mass = reused plus exported plus stock change after density conversion. | survey, density, reuse, weighbridge | kg/facility and residual | `mass-balance-identity` |
| `freight_work` | inbound transport | Sum loaded tonnes times kilometres by mode and supplier gate. | waybill and route | t*km/facility | `reference-definition` |
| `shared_attribution` | shared plant | Attributed amount = measured common amount times physical-use fraction; fractions sum to one. | meter and machine use | amount/facility | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_geometry` | reference and ground works | Confirm function, site, geometry, support and installed scope. | as-built drawing and signed tests |
| `dq_materials` | major products | Reconcile concrete, steel, lining and equipment deliveries against installed, reject and return records. | bills, survey and waste log |
| `dq_temporal` | whole contract | Disclose construction dates, supplier vintage and missing periods. | schedule and invoices |
| `dq_routes` | route choice | Justify underground excavation versus surface-only foundation and any zero inventory categories. | contract and survey |
| `dq_identity` | final exchanges | Confirm each concrete UUID against platform type, gate, property, unit and purpose before release. | flow and support-row review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_gate` | reference output | Require signed structural and contracted handling/hoisting/ventilation acceptance; reject incomplete work. | `unsd-cpc3-53261`; `msha-hoist-braking` |
| `v_boundary` | construction versus operation | Reject ore extraction, beneficiation, routine ventilation and transport operation from this package. | `unsd-cpc3-53261` |
| `v_route` | underground or surface | Shaft/drift needs surveyed removal and support; surface-only tower/station needs foundation and assembly without fictional excavation. | `msha-shaft-sinking`; `unsd-cpc3-53261` |
| `v_balance` | materials and spoil | Check delivery, excavation, installation, reuse, returns, stock and exported residual balances. | `mass-balance-identity` |
| `v_rework` | failed work | Link each rejected state to producing-node rework or one recovery/disposal exit. | `mass-balance-identity` |
| `v_identity` | UUIDs | A crane component or mine operation flow cannot represent an accepted facility; leave UUID blank until exact detail confirmation. | `reference-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Construction-stage package for one site-accepted mine-specific facility. |
| downstream_use | `secondary_dataset` or `background_dataset` for infrastructure process/lifecyclemodel projection after concrete identity review. |
| allowed_use | Construction comparison with matching function, geometry, support, installed systems and handover gate. |
| excluded_use | Mineral extraction or operation, non-mine tunnel, or whole-life claim without operation and retirement stages. |
| required_metadata | Site/function, starting ground, route, geometry, materials, installed systems, dates and acceptance. |
| required_quality_disclosure | UUID gaps, provisional ranges, supplier gates, spoil balance, water/energy coverage, rejects and shared attribution. |
| update_trigger | Design, as-built quantities, installed-system scope, supplier or verified flow identity changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-53261` | official_guidance | UNSD, CPC Version 3.0 explanatory notes, subclass 53261, https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | Mine-specific construction scope. |
| `msha-shaft-sinking` | official_guidance | MSHA, Slope and Shaft Sinking Plans Compliance Guide, https://arlweb.msha.gov/REGS/complian/guides/slope%20and%20shaft%20sinking%20compliance%20guide.pdf | Ground, shaft and ventilation route questions; jurisdictional details not universal thresholds. |
| `msha-hoist-braking` | official_guidance | MSHA, Emergency Braking Systems for Mine Hoists, https://arlweb.msha.gov/s%26hinfo/paper6.htm | Hoist integration and testing questions; no universal performance value. |
| `mass-balance-identity` | method_factor | Conservation-of-mass reconciliation for construction materials, spoil and rejects. | Material and residual balances. |
| `reference-definition` | method_factor | This PCR's accepted-facility definition and arithmetic normalization. | Count, intermediate link, freight and shared attribution. |
