---
pcr_id: pcr.constructions-and-construction-services.constructions.multi-dwelling-residential-buildings
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Multi-dwelling residential buildings

## 1. Scope and Applicability

This rule covers one completed site-assembled building with at least three dwellings, or a community residence such as a student residence or retirement home, at documented handover. Include its foundation, structural frame, envelope, shared cores, corridors, lifts, fixed building systems and declared fixed fit-out. Acceptance requires an as-built quantity schedule, measured gross floor area, completed installation and commissioning of included systems, and a signed handover record. A shell-only delivery is outside this completed-product gate. Operation, resident activity, later replacement and demolition belong to separately declared lifecycle scenarios. [unsd-cpc-53112; ec-levels; ec-building-gwp]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.multi-dwelling-residential-buildings |
| classification_refs | CPC 3.0:53112 |
| covered_products | Buildings with three or more dwellings; community residences for older persons, students, workers or other social groups |
| excluded_products | One- or two-dwelling buildings; non-residential buildings; separately sold construction services; standalone prefabricated components; separate civil infrastructure |
| representative_product | One commissioned apartment building including shared circulation and installed fixed services |
| production_route | Site and foundation work, structural and envelope assembly, fixed-service integration, surface finish, testing and handover; prefabricated alternatives require explicit component and installation records |
| market_state | Completed construction at the declared site, ready for the declared residential use at handover |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed multi-dwelling residential building at the declared site |
| How much | One building; report gross floor area in m2 as an intensity denominator |
| How well | At least three dwellings or eligible community accommodation; included shared and fixed systems pass completion tests |
| How long or cycle | One construction project through site handover; operation and service life are separate scenario descriptors |
| reference_flow_link | Accepted output of `finish_handover`; count the whole building once |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed multi-dwelling residential building |
| Reference flow property | Number of items |
| Reference unit group | Units of items |
| Reference unit | building |
| Required qualifiers | site; dwelling count or community-residence type; gross floor area and convention; basement and parking scope; shared cores and fixed-service scope; construction route; handover date and acceptance evidence |

The platform same-title candidate has an at-plant manufactured gate and Mass property. Its UUID is not bound to this completed site-handover building. Floor area is reported for intensity, not substituted for the one-building reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `building_count` | reference output | Number of items | building | Count an accepted whole building once, not each dwelling, floor or component. |
| `gross_floor_area` | intensity | Area | m2 | Declare the as-built measurement convention and reconcile to accepted drawings. |
| `material_mass` | material and waste cards | Mass | kg | Disclose density and conversion where delivery units differ from installed or waste units. |
| `site_energy` | fuel and electricity | Energy | kWh or MJ | Retain carrier identity and documented conversion factors. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed site before works, with prior demolition, contamination and retained structures declared separately |
| starting_condition_role | Physical start of the foreground construction works |
| product_classification_scope | One completed residential building including common spaces and installed fixed systems within its handover asset |
| recursive_input_rule | A separately purchased completed building is an upstream product only if transformed; its dwellings do not become additional output buildings. |
| upstream_dataset_requirement | Materials, components, utility, freight, waste treatment and subcontracted construction services need compatible physical gates and geographies. |
| disclosure | Provide as-built quantities, area convention, shared/common elements, fixed-service scope, temporary works, secondary material origins, waste destinations and handover evidence. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | all nodes | Include supplied products, delivery, site energy and equipment, installation, wastes and commissioning through accepted handover; keep use and end of life in separate scenarios. | ec-building-gwp; ec-levels |
| `shared_elements` | cores, corridors, lifts and central services | Include once in the whole building; allocate to dwellings only in an additional dwelling-level view using a disclosed driver. | ec-levels |
| `prefab_delta` | assembly | Alternative technology route: replace corresponding site construction with supplied modules and installation for a documented prefabricated route; never count both alternatives for the same element. | ec-levels |
| `finish_handoff` | finish | The assembled shell and services are the parent state; only finished, tested and defect-closed construction becomes accepted output. | ec-levels |
| `secondary_origin` | secondary material | Record origin, recovery handoff and supplier gate; apply one consistent upstream-burden convention to avoid duplication. | ec-levels |
| `shared_assets` | shared infrastructure and temporary works | Attribute shared crane, scaffold, formwork and site utility burdens to all consuming nodes/buildings and service periods once using recorded use or a justified driver. | ec-levels |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `site_foundation` | Site and foundation work | required | Unless an accepted existing foundation is expressly outside the contract | Excavate and create inspected foundation | as-built site records per building |
| `assembly_services` | Structural and service integration | required | As-built frame, envelope and fixed services | Join foundation, frame, envelope, shared areas, lifts and fixed services; alternative technology route with prefabrication may replace site assembly tasks | component schedule per building |
| `finish_handover` | Surface finishing, testing and handover | required | Accepted finish and system commissioning | Convert assembled parent to completed building by surface finishing and testing | one signed handover |

### Process: Site and foundation work (`site_foundation`)

#### Inputs

##### Product flows

###### Foundation and earthwork materials (`foundation_materials`)

Expand this umbrella into concrete, reinforcement, piles and other actual supplied materials from the as-built bill; record recycled content and supplier recovery gate where applicable.

- Selected flow: Foundation materials as delivered
- Flow property / unit: Mass / kg
- Amount rule: Installed quantity plus measured losses by product
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ec-levels`
- Range: Provisional foundation-material mass screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000000
  - Unit: kg
  - Basis: per completed building after the umbrella is split by material; replace with product-specific evidence
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

#### Outputs

##### Product flows

###### Accepted in-place foundation (`foundation_handoff`)

The inspected foundation is an internal parent handoff to assembly, not another sold building.

- Selected flow: Accepted foundation stage
- Flow property / unit: Stage / stage
- Amount rule: One accepted stage with quantities retained in material records
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `ec-levels`
- Range: Provisional accepted foundation-stage count
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: stage
  - Basis: per accepted completed building with a new foundation in scope
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Spoil and foundation rejects (`foundation_waste`)

Separate excavated spoil and rejected foundation material by contamination and destination; on-site reuse is an internal transfer.

- Selected flow: Foundation waste by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Weighbridge mass or surveyed volume converted with documented density
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ec-levels`
- Range: Provisional foundation-waste mass screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000000
  - Unit: kg
  - Basis: per completed building; replace with site-specific mass balance
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Structural and service integration (`assembly_services`)

#### Inputs

##### Product flows

###### Accepted foundation entering assembly (`foundation_stage_input`)

Transfer the same inspected foundation from `site_foundation` into assembly as an internal stage input; this is not a purchased second foundation.

- Selected flow: Accepted foundation stage
- Flow property / unit: Stage / stage
- Amount rule: One accepted foundation stage transferred without a second upstream material burden
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `ec-levels`
- Range: Provisional transferred foundation-stage count
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: stage
  - Basis: per completed building with a new foundation in scope
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Structural and envelope components (`structure_components`)

Expand actual concrete, steel, timber, masonry, glazing, insulation and prefabricated modules individually. Supplier-finished modules and site-built alternatives are mutually exclusive for each element.

- Selected flow: Structural and envelope components as delivered
- Flow property / unit: Mass, area or count / kg, m2 or item
- Amount rule: Installed quantity plus recorded rejected quantity by component
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ec-levels`
- Range: Provisional structural-component mass screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000000
  - Unit: kg
  - Basis: per completed building after the umbrella is split and area/count converted where justified; replace with component evidence
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fixed building services (`fixed_services`)

Record installed plumbing, electrical, heating/cooling, fire-safety, lifts and central systems by actual included scope; separate tenant appliances unless permanently installed and declared.

- Selected flow: Fixed service components
- Flow property / unit: Mass or count / kg or item
- Amount rule: Accepted as-built installed equipment and components
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ec-levels`
- Range: Provisional fixed-system component mass screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000000
  - Unit: kg
  - Basis: per completed building after item-to-mass conversion; replace with as-built schedule
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Construction-site energy (`site_energy_carriers`)

Capture metered electricity and fuel for cranes, tools and site utilities by carrier and activity; exclude energy already included in purchased service datasets.

- Selected flow: Construction-site energy carriers
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered and fuel-log use converted by carrier
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_site_operations`
- Sources: `ec-building-gwp`
- Range: Provisional construction-site energy screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000000
  - Unit: MJ
  - Basis: per completed building across logged site carriers; replace with metered energy
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

#### Outputs

##### Product flows

###### Assembled parent with common areas (`assembled_parent`)

Hand the inspected structural shell, envelope, common circulation, lifts and integrated fixed systems to finishing as one parent state.

- Selected flow: Assembled building parent state
- Flow property / unit: Stage / stage
- Amount rule: One inspected parent stage, reconciled to bill of quantities
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `ec-levels`
- Range: Provisional assembled-parent stage count
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: stage
  - Basis: per accepted completed building
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Assembly rejects and offcuts (`assembly_rejects`)

Record offcuts and defective components at the producing node with rework, recovery or disposal destination; a corrected element is not a second accepted output.

- Selected flow: Assembly rejects by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Measured rejects net of documented internal reuse
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ec-levels`
- Range: Provisional assembly-reject mass screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000000
  - Unit: kg
  - Basis: per completed building; replace with reconciled reject records
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Surface finishing, testing and handover (`finish_handover`)

#### Inputs

##### Product flows

###### Assembled parent entering finishing (`assembled_parent_input`)

Transfer the inspected structural shell, common areas and fixed systems from `assembly_services` as one internal input to finishing without duplicating their upstream component burdens.

- Selected flow: Assembled building parent stage
- Flow property / unit: Stage / stage
- Amount rule: One inspected parent stage transferred to finishing
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `ec-levels`
- Range: Provisional transferred parent-stage count
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: stage
  - Basis: per accepted completed building
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Finishing materials (`finishing_materials`)

Record coatings, sealants, floor and wall finishes and fixed fit-out materials by actual specification. This node takes the assembled parent as an internal input.

- Selected flow: Finishing products as installed
- Flow property / unit: Mass or area / kg or m2
- Amount rule: Installed quantity plus recorded losses by product
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ec-levels`
- Range: Provisional finishing-material mass screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000000
  - Unit: kg
  - Basis: per completed building after the umbrella is split and area converted where justified; replace with product evidence
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

#### Outputs

##### Product flows

###### Completed multi-dwelling building (`completed_building`)

Count the finished building only after common areas, included fixed systems, defects and commissioning pass signed acceptance.

- Selected flow: Completed multi-dwelling residential building
- Flow property / unit: Number of items / building
- Amount rule: One accepted building at signed handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `unsd-cpc-53112`
- Range: Provisional accepted-building count check
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: building
  - Basis: per accepted completed building
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Finish residues and rejects (`finish_residues`)

Separate surplus finishes, contaminated containers and defective fit-out by hazard and destination, linking corrections to this node.

- Selected flow: Finishing waste by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Measured waste net of documented internal reuse
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed building
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ec-levels`
- Range: Provisional finishing-residue mass screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000000
  - Unit: kg
  - Basis: per completed building; replace with measured residue and waste transfers
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `whole_building` | whole-building reference | Assign shared cores, corridors, lifts and central services once to the accepted building. For a separately declared dwelling-level view, allocate by measured area or a justified service driver while preserving the building total. | ec-levels |
| `shared_site_assets` | crane, scaffold, formwork and utilities | Record each consuming node/building and service period; allocate observed use directly or with a documented causal driver and charge each share once. | ec-levels |
| `secondary_materials` | recovered components | Identify previous use and recovery handoff; declare supplier-gate burden treatment, exclude already assigned prior-system burdens and do not double-count recovery. | ec-levels |
| `reject_rework` | off-spec materials and work | Retain failed-attempt input and energy in the producing node, trace correction and boundary exit, and exclude rejects from accepted output. | ec-levels |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | `site_foundation`, `assembly_services`, `finish_handover` | materials and components | as-built schedule and deliveries | specification, quantity, unit, supplier gate, recycled fraction, installed node, rejects | reconcile invoices, deliveries and as-built schedule | kg, m2, item | each delivery/change | full construction | whole building | installed plus rejects less returns by product | signed quantities and invoices |
| `cp_site_operations` | `assembly_services` | site energy | meters and fuel logs | carrier, meter, fuel, machine hours, task, date | site log reconciliation | kWh, MJ, h | shift or billing period | full construction | site and shared assets | attribute logged use to building once | meters and fuel tickets |
| `cp_waste` | `site_foundation`, `assembly_services`, `finish_handover` | spoil and rejects | transfer and reuse log | node, material, hazard, quantity, destination, reuse | weighbridge and site bins | kg, m3 | each movement | full construction | whole site | external exits by destination net internal reuse | signed waste receipts |
| `cp_acceptance` | `site_foundation`, `assembly_services`, `finish_handover` | accepted stages/building | inspection and handover | stage acceptance, service tests, defects, dwelling count, gross floor area, handover date | drawings and signed certificates | building, m2, date | each gate | through handover | whole building | count accepted building once | signed commissioning and handover file |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `material_balance` | material cards | Delivered less returns equals installed plus waste plus stock change; explain residuals. | deliveries, returns, installed, waste, stock | reconciled material quantity | ec-levels |
| `energy_total` | site energy | Sum logged carrier energy attributed to this building, preserving carrier identity. | meter, fuel, allocation driver | kWh or MJ by carrier | ec-building-gwp |
| `area_intensity` | reporting | Divide whole-building result by measured gross floor area; retain the per-building total. | accepted building, area | per-m2 intensity | ec-levels |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | building | Verify at least three dwellings or eligible community accommodation, common spaces and fixed-service scope. | signed as-built drawings and acceptance |
| `dq_reconciliation` | materials/waste | Reconcile as-built, supplied, returned, installed and discarded quantities by product. | schedule, invoices, waste tickets |
| `dq_shared` | shared assets | Cover all consuming buildings/nodes and service periods without duplicate assignment. | dated asset and utility logs |
| `dq_handover` | reference output | Count only after included systems pass tests and defects close. | signed commissioning and handover file |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Confirm three or more dwellings or community residence, one completed building, site handover and measured area; reject an at-plant Mass flow substitute. | unsd-cpc-53112; ec-levels |
| `validate_inventory` | cards | Match every as-built component to one node, inspect parent and finished handoffs, and trace each reject or waste destination. | ec-levels |
| `validate_routes` | prefab alternative | Verify assembly parent and changed component, installation and waste records; do not duplicate site-built and prefabricated routes for one element. | ec-levels |
| `validate_attribution` | shared and secondary inputs | Check all shared consumers and periods, secondary material origins and recovery gates, and absence of duplicate burden. | ec-levels |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction package for one completed multi-dwelling residential building |
| downstream_use | `secondary_dataset`; `background_dataset` only with compatible site, scope and handover gate |
| allowed_use | Construction-stage modelling and separately identified lifecycle extensions |
| excluded_use | Direct operational whole-life results, dwelling-level results without allocation, or at-plant product mass |
| required_metadata | site, handover date, dwelling count or residence type, area convention, shared/core scope, fixed services, basement/parking, structural route, supplier gates |
| required_quality_disclosure | missing bills, unmetered site energy, reconciliation gaps, shared attribution, unresolved UUIDs |
| update_trigger | changed as-built scope, route, service acceptance, supplier gate or verified product identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-53112` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53112 | Product boundary; CPC 2.1 explanatory note clarifies unchanged CPC 3.0 label |
| `ec-levels` | `official_guidance` | https://green-forum.ec.europa.eu/green-business/levels/elearning-and-case-studies/levels-case-studies_en | As-built building description, area, bills of quantities and waste evidence channels |
| `ec-building-gwp` | `official_guidance` | https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings/energy-performance-buildings-directive/global-warming-potential-buildings_en | Separation of construction, use and end-of-life stages |
