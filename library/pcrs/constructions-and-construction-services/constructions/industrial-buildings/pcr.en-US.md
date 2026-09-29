---
pcr_id: pcr.constructions-and-construction-services.constructions.industrial-buildings
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Industrial buildings

## 1. Scope and Applicability

One completed factory, workshop, ordinary production or assembly building, or agricultural building at site handover. Include foundations, frame, envelope, integrated building services, commissioning, material supply, transport, site work and construction waste. The output is the site-assembled building; prefabricated elements are inputs. General warehouses require a classification decision against CPC 53122. Exclude mining, power, chemical and specialized manufacturing facilities; production machinery; tenant equipment; operation; maintenance; future replacement and demolition. Declare any downstream scenario separately. `src_unsd_53121`; `src_ec_levels`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.industrial-buildings |
| classification_refs | CPC 3.0 53121 Industrial buildings; mapping requires a separate accepted decision |
| covered_products | completed ordinary industrial factories/workshops and agricultural buildings including integrated silos |
| excluded_products | general warehouses pending CPC 53122 decision; mining, power, chemical and specialized manufacturing works; separate production equipment |
| representative_product | one completed factory/workshop with foundations, frame, envelope and integrated services |
| production_route | site preparation and foundations; material/component transport; frame/envelope assembly; integrated services; commissioning and handover |
| market_state | as-built building ready for declared industrial or agricultural use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed industrial building at site handover |
| How much | 1 m2 measured gross floor area; report total completed building area |
| How well | Passes structural, envelope and included-services acceptance for declared use |
| How long or cycle | One construction project through accepted handover; service life is downstream metadata |
| reference_flow_link | `industrial_building_handover` output of `building_completion` |

| Field | Value |
| --- | --- |
| Reference amount | 1 m2 gross floor area normalized from whole building |
| Reference product flow | Completed industrial building at site handover (UUID unresolved) |
| Reference flow property | Area (UUID unresolved) |
| Reference unit group | Area units (UUID unresolved) |
| Reference unit | m2 |
| Required qualifiers | use; industrial/agricultural function; location; area convention; structure/envelope; included services; completion date and test; exclusions |

The candidate Biopile facility UUID is rejected because the product and route do not describe an ordinary industrial building.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_floor_area` | reference output | Area | m2 | Measure from as-built drawings under one disclosed gross-floor-area convention; reconcile project total before normalization. |
| `measure_materials` | materials and rejects | Mass or volume with density | kg or m3 | Retain delivered, installed, returned and rejected quantities separately. |
| `measure_energy` | construction and test energy | Energy or carrier quantity | kWh, L or kg | Preserve meter or ticket unit and conversion factor by carrier. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Document site condition before represented construction and any prior demolition or remediation. |
| starting_condition_role | Starting condition for the construction project. |
| product_classification_scope | One ordinary industrial or agricultural building; resolve general warehouse and specialized-facility classification separately. |
| recursive_input_rule | Record existing or prefabricated building elements in their actual input state and burden once; do not recurse into the completed-building output. |
| upstream_dataset_requirement | Material, component, utility and freight inputs require compatible provider, geography and production gate. |
| disclosure | Site condition, included elements, temporary works, shared facilities, reuse, prefabrication, transport, exclusions and handover acceptance. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | all nodes | Include product supply and freight, site activities, rejects and commissioning through accepted handover; label any whole-life extension separately. | `src_ec_levels`; `src_ec_gwp` |
| `boundary_function` | building | Include foundations, frame, envelope and building-integrated systems; exclude production equipment and separate civil-engineering works. | `src_unsd_53121` |
| `boundary_secondary` | recovered inputs | State origin, recovery handoff and inherited-burden or cut-off treatment of the selected upstream dataset; count prior burdens once. | `src_iso_21930` |
| `boundary_shared` | temporary works and shared plant | List consuming nodes and project period; attribute measured use once, with disclosed physical proxy if unmetered. | `src_ec_levels` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ground_foundation` | Groundworks and foundations | required | building contract includes site/foundation work | accepted foundation and material/waste account | whole building and per m2 |
| `frame_envelope` | Frame and envelope assembly | required | structure/enclosure installed | join components into accepted shell | whole building and per m2 |
| `building_completion` | Integrated services and handover | required | services and acceptance in contract | accepted completed building | whole building and per m2 |

### Process: Groundworks and foundations (`ground_foundation`)

#### Inputs

##### Product flows

###### Foundation products (`foundation_products`)

Concrete, reinforcement and specified foundation products enter by actual grade and supplier; final exchanges split their identities.
- Selected flow: Foundation concrete and reinforcement (UUID unresolved)
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Reconcile deliveries, installed quantities and rejected quantities to as-built foundation schedule.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `src_ec_levels`
- Range: Provisional foundation-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: broad first-pass delivered mass per m2; replace with engineering design and site records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Groundworks energy (`ground_energy`)

Carrier-specific fuel and electricity run earthmoving, pumping and foundation placement.
- Selected flow: Groundworks energy carriers
- Flow property / unit: Energy or carrier quantity / kWh, L or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter or ticket each actual carrier and attribute shared plant use once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_operations`
- Range: Provisional groundworks-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/m2
  - Basis: broad first-pass equivalent energy per m2; carrier conversion and actual records required
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted foundations (`foundation_accepted`)

Installed inspected foundations pass to frame assembly as an intermediate, not another completed building.
- Selected flow: Accepted foundations intermediate (UUID unresolved)
- Flow property / unit: Area / m2
- Amount rule: Record accepted foundation schedule and project area once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Provisional accepted-foundation area check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m2/m2
  - Basis: accepted foundation footprint relative to gross floor area; replace with project design
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Groundwork rejects (`ground_rejects`)

Excavated and rejected material exits by verified reuse, recovery or disposal path; internal rework remains linked to this node.
- Selected flow: Excavation and foundation rejects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh or convert measured volume using documented density; subtract on-site reuse once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `src_ec_levels`
- Range: Provisional groundwork-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/m2
  - Basis: broad excavation and reject mass per m2; replace with excavated volume and density
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Frame and envelope assembly (`frame_envelope`)

#### Inputs

##### Product flows

###### Structure and envelope components (`frame_components`)

Steel, timber, concrete, cladding, glazing and insulation enter only as specified by the actual design. Record secondary origin and recovery handoff.
- Selected flow: Structure and envelope components (UUID unresolved)
- Flow property / unit: Mass and dimensions / kg and m2
- Amount rule: Reconcile supplier deliveries and installed bills of quantities by material and element.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `src_ec_levels`
- Range: Provisional structure-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: broad combined delivered mass per m2; replace with as-built quantities by material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Component freight (`component_freight`)

Supplier-to-site movement includes actual modes, loads, distances and charged returns.
- Selected flow: Inbound freight transport service
- Flow property / unit: Transport work / tonne-km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Amount rule: Sum load tonnes times route km by leg and mode; disclose return treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Range: Provisional component-freight screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: tonne-km/m2
  - Basis: broad first-pass freight work per m2; replace with actual legs and loads
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Assembly energy (`assembly_energy`)

Include crane, welding and installation carrier demand; allocate shared equipment by measured use.
- Selected flow: Assembly energy carriers
- Flow property / unit: Energy or carrier quantity / kWh, L or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record carrier-specific site consumption and shared equipment hours.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_operations`
- Range: Provisional assembly-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/m2
  - Basis: broad first-pass energy equivalent per m2; replace with carrier records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted shell (`shell_accepted`)

Only inspected frame and envelope pass to completion; rejected assemblies first return for rework or exit as waste.
- Selected flow: Accepted enclosed shell intermediate (UUID unresolved)
- Flow property / unit: Area / m2
- Amount rule: Reconcile accepted element schedule and floor area to as-built drawings.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Provisional accepted-shell area check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m2/m2
  - Basis: accepted shell footprint relative to gross floor area; replace with project design
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Assembly rejects (`assembly_rejects`)

Defective assemblies and offcuts are logged by material and route to rework, recovery or disposal; no double accepted output.
- Selected flow: Rejected components and offcuts (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Reconcile incoming, installed, reworked and externally exiting mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `src_ec_levels`
- Range: Provisional assembly-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: broad reject mass per m2; replace with material balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Integrated services and handover (`building_completion`)

#### Inputs

##### Product flows

###### Integrated systems (`integrated_systems`)

Building electrical, water, ventilation, fire and fixed access systems enter according to the contract; exclude production-line and tenant equipment.
- Selected flow: Integrated building-system components (UUID unresolved)
- Flow property / unit: Mass or item / kg or item
- Amount rule: Reconcile as-built schedules, purchase records and installed quantities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional integrated-systems material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: broad delivered material mass per m2; replace with system schedule
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Commissioning water (`commission_water`)

Water for flushing and testing before handover is metered; zero is valid when no water-using test occurred.
- Selected flow: Commissioning water supply
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Record delivered volume net of verified return, then convert to mass using documented density.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_operations`
- Range: Provisional commissioning-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/m2
  - Basis: broad testing-water mass per m2; convert metered volume using documented density
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Commissioning energy (`commission_energy`)

Include metered testing energy through acceptance, excluding separately evidenced post-handover operation.
- Selected flow: Commissioning energy carriers
- Flow property / unit: Energy or carrier quantity / kWh, L or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record actual test-period consumption by carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_operations`
- Range: Provisional commissioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/m2
  - Basis: broad test-energy equivalent per m2; replace with carrier meters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed industrial building (`industrial_building_handover`)

One accepted building leaves at signed handover; the reference UUID remains unresolved.
- Selected flow: Completed industrial building at site handover (UUID unresolved)
- Flow property / unit: Area / m2
- Amount rule: Measure accepted gross floor area once; retain project total and normalize inventory to 1 m2.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Reference-area normalization check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2/m2
  - Basis: normalized accepted floor area per 1 m2 reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Commissioning rejects (`commission_rejects`)

Failed components and test waste return to installation for rework or leave to documented treatment; repaired items need reinspection.
- Selected flow: Commissioning rejected components and waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record failures, rework, recovery and disposal without double-counting replacement products.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 completed gross floor area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional commissioning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: broad reject mass per m2; replace with failure and waste logs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

- `allocate_shared`: Subdivide by building and node first. Attribute shared cranes, utilities, access and site works by measured hours, meter or physical area across all consuming nodes in the represented project period; shares reconcile to one total.
- `allocate_secondary`: For recycled inputs, retain supplier origin and recovery handoff, then apply one declared upstream inherited-burden or cut-off treatment. Add current transport/processing once and prohibit double credit. `src_iso_21930`.
- `allocate_rework`: Retain original burdens on the producing node; add incremental rework inputs once. Only accepted reinspection enters the shell or building output. Rejected exits are not coproducts without verified use and handoff.
- `allocate_multiple_buildings`: Measure each separately handed-over building and allocate shared work by actual use or disclosed physical driver; do not pool unlike uses without sensitivity check.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | `ground_foundation`; `frame_envelope`; `building_completion` | delivered and installed products | as-built schedule; delivery ticket | material; grade; supplier; mass_or_volume; density; installed_quantity; recycled_origin; handoff | reconcile bill of quantities and installation log | kg; m3; item | each delivery | complete project | each building/supplier | sum by material and node, retain rejects | tickets; plans; supplier declaration |
| `cp_site_operations` | all three nodes | fuel, power, water, plant | meter; fuel ticket; equipment log | carrier; quantity; equipment_hours; water_m3; node; period | reconcile meter and ticket to node | kWh; L; kg; m3; h | each meter period/shift | works through handover | site | sum by carrier/node; allocate shared once | meter checks; invoices; shift log |
| `cp_transport` | `frame_envelope` | inbound freight | waybill | product; mode; load_t; leg_km; return | reconcile supplier origin and delivery | t; km; tonne-km | each leg | complete project | supplier to site | sum tonnes × km by leg/mode | waybill; route evidence |
| `cp_waste` | all three nodes | rejects and exits | weighbridge; rejection log | node; material; mass; rework; reuse; recovery; disposal; destination | reconcile material balance and receipt | kg | each rejection/shipment | complete project | site | count each exit once | weighbridge; handler receipt |
| `cp_acceptance` | all three nodes | accepted states | inspection; handover; drawing | foundation_acceptance; shell_acceptance; systems_tests; date; floor_area_m2 | signed acceptance and area measurement | m2; date | each milestone | through handover | one building | accepted area once | signed handover; as-built drawing |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area` | all nodes | Divide whole-building quantity by accepted gross floor area; retain total. | area; quantity | amount per m2 | `src_ec_levels` |
| `calc_material_balance` | each material | Delivered = installed + rejected exit + returned stock + inventory change, accounting for documented internal reuse once. | delivery; install; reject; return; stock | balanced account | `src_ec_levels` |
| `calc_freight` | inbound freight | Sum carried tonnes × actual one-way km by leg and mode; disclose return treatment. | load_t; leg_km; mode | tonne-km | `src_ec_gwp` |
| `calc_shared` | shared assets | Attribute recorded total across consumers by measured use in project period; sum shares to one. | asset total; node use; period | node burden | `src_ec_levels` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | building | Verify use, classification exclusions, floor-area method and accepted gate. | use description; plans; handover |
| `quality_quantity` | inventory | Preserve primary records, units, conversions, missing periods and supplier coverage. | tickets; meters; BoQ; calculations |
| `quality_rework` | all nodes | Reconcile accepted, rejected and reworked material without duplicated output. | inspection; waste/rework log |
| `quality_shared` | shared assets | List all consuming buildings/nodes, period and allocation driver; shares sum to total. | equipment log; worksheet |
| `quality_uuid` | final exchanges | Resolve each uncovered identity to compatible UUID, property and unit before final process generation. | platform detail-read audit |

## 9. Validation Rules

- `validate_scope`: Verify building use, CPC 53121 boundary, warehouse decision and integrated systems; exclude specialized works and production equipment.
- `validate_handover`: Require signed acceptance of structure, envelope and systems and one measured gross floor area; exclude post-handover operation.
- `validate_inventory`: Match as-built products, freight, energy, water and wastes to each node; reconcile delivered, installed, rejected and accepted states.
- `validate_rework`: Every rejected state has one rework, recovery or disposal path; rework enters accepted output only after reinspection.
- `validate_secondary`: Record recycled origin, recovery handoff and one burden method; no prior/current double count.
- `validate_shared`: List consumers and project period for shared assets; attribute their burden once.
- `validate_uuid`: Keep reference and material/waste identities unbound until flow type, gate, property and unit are verified; reject Biopile facility as generic building.
- `validate_flow_sets`: Use stated energy, water and transport Flow Set versions and expand actual records to concrete verified UUIDs for final exchanges.
- `validate_range`: No universal material-intensity number is imposed; check quantities against engineered design, BoQ and measured records, explaining anomalies.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction dataset for one completed industrial/agricultural building at handover |
| downstream_use | `secondary_dataset`; `background_dataset` after identity and representativeness review |
| allowed_use | Construction-stage modelling with matching use, structure, geography, floor-area convention, systems and gate |
| excluded_use | Whole-life claims without separate scenarios; specialized civil works, production machinery or unrelated warehouses |
| required_metadata | site; use; structure; envelope; foundations; area method/total; suppliers; systems; dates; commissioning; shared works; secondary inputs; waste/rework; exclusions |
| required_quality_disclosure | primary-data coverage; conversion methods; unresolved UUIDs; source geography; material balance; waste destinations; shared allocation; excluded work |
| update_trigger | verified reference UUID; changed scope/gate, quantitative evidence, Flow Set version or allocation method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `src_unsd_53121` | official_guidance | UNSD CPC 2.1 explanatory note 53121, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53121 | Product boundary; checked-in CPC 3.0 leaf remains classification authority |
| `src_ec_levels` | official_guidance | European Commission Level(s) case studies, https://green-forum.ec.europa.eu/green-business/levels/elearning-and-case-studies/levels-case-studies_en | As-built area, bills of quantities and construction waste |
| `src_ec_gwp` | official_guidance | European Commission, Global warming potential of buildings, https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings/energy-performance-buildings-directive/global-warming-potential-buildings_en | Construction versus use/end-of-life stage distinction |
| `src_iso_21930` | standard | ISO 21930:2017, https://www.iso.org/standard/61694.html | General construction product/service EPD framework; no product-specific quantity factor |
