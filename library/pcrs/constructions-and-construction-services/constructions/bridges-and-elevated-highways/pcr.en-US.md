---
pcr_id: pcr.constructions-and-construction-services.constructions.bridges-and-elevated-highways
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Bridges and elevated highways

## 1. Scope and Applicability

This PCR covers a complete road, rail or pedestrian bridge or elevated-highway structure at its site-acceptance gate. The product includes declared foundations, supports, superstructure, deck, connections and initial safety/finishing works. It excludes at-grade roads, tunnels, operation, maintenance and stand-alone deck paving or repair services. An approach road outside the elevated structure is separately inventoried. A prefabricated girder is a component, not the reference bridge. [unsd-cpc-53221; fhwa-pbes]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.bridges-and-elevated-highways |
| classification_refs | CPC 3.0 53221, Bridges and elevated highways. |
| covered_products | Site-accepted bridges, viaducts and elevated highways of declared duty. |
| excluded_products | At-grade roads, tunnels, isolated paving or repair, operation and future maintenance. |
| representative_product | One complete site-accepted bridge or elevated-highway structure. |
| production_route | Form foundations and supports; cast in place or erect verified prefabricated elements; integrate deck, connections and safety systems; test and hand over. |
| market_state | Installed and accepted at the project site. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete site-accepted bridge or elevated-highway structure. |
| How much | One accepted asset; structural length, deck area and span count are mandatory size descriptors. |
| How well | Specified structural load, geometry, connections, drainage and safety tests pass. |
| How long or cycle | One project through signed handover; design life is metadata, not operation in this boundary. |
| reference_flow_link | reference_product_bridge |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Site-accepted bridge or elevated-highway structure; UUID unresolved |
| Reference flow property | Number of items; UUID 01846770-4cfe-4a25-8ad9-919d8d378345 |
| Reference unit group | Units of items; UUID 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| Reference unit | asset |
| Required qualifiers | Georeferenced endpoints; use and load class; structural length; bridge-deck area; span count and lengths; substructure and superstructure type; cast-in-place and prefabricated shares; initial finishing and approach-road scope; handover date; design life |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `asset_count` | reference product | Count, UUID unresolved | asset | Count complete signed handovers, not spans or component deliveries. |
| `bridge_geometry` | reference qualifiers | Length and area | m and m2 | Measure structural length between declared supports and accepted deck plan area from as-built drawings. |
| `material_mass` | materials and waste | Mass | kg | Convert project volumes or component counts with documented mix density or supplier unit mass. |
| `site_energy` | construction plant | Energy or fuel mass | kWh, MJ or kg | Keep carriers distinct; do not count hired-service fuel or generator electricity twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed site and ground, with existing structures and demolition or remediation identified before foundation work. |
| starting_condition_role | Physical baseline for construction, not a free bridge product. |
| product_classification_scope | One complete accepted elevated structure; ordinary approaches and independent assets are separate. |
| recursive_input_rule | Purchased girders or deck panels enter as components at supplier gate; a complete accepted bridge cannot silently enter as raw material. |
| upstream_dataset_requirement | Link matching concrete, steel, other components, energy, freight and waste-treatment datasets. |
| disclosure | Report ground baseline, geometry, duty, materials, construction route, common temporary works, secondary input origin, exclusions and data gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | whole structure | Include site works and acceptance testing through signed handover. Traffic operation, maintenance and end-of-life are separate. | `unsd-cpc-53221` |
| `component_gate` | purchased components | Supplier manufacture of girders and panels is upstream; site lifting, connections and curing belong here. Never also count a purchased component's raw materials as site inputs. | `fhwa-pbes` |
| `route_delta` | structural elements | Parent assembly joins supports, superstructure and deck. A prefabricated route needs component supplier, transport, lifting and connection records; cast-in-place work needs raw concrete, reinforcement, formwork and curing records. Select one evidenced route per element. | `fhwa-pbes` |
| `finish_gate` | initial deck finishing | The load-bearing deck is the parent state. Include initial waterproofing, surfacing, parapets and drainage only if in the original handover; later stand-alone resurfacing is excluded. |  |
| `shared_and_secondary` | common works and recovered inputs | Attribute common cranes, falsework and access works once across nodes for the project period. Recycled metal or aggregate requires origin, recovery handoff and prior-burden convention. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `supports` | Foundations and substructure | required | Surveyed baseline to accepted supports. | Form foundations, piers and abutments; repair or route failed work out. | One accepted asset and surveyed geometry. |
| `deck_handover` | Superstructure, deck and handover | required | Accepted supports to signed passable structure. | Join girders or cast structure, complete deck, finish and test. | One accepted asset and measured deck area. |

### Process: Foundations and substructure (`supports`)

#### Inputs

##### Product flows

###### Support materials (`support_materials`)

Separate concrete, reinforcement, structural steel, piles and bearings by item; identify recycled content and do not overlap component and raw-material burdens.

- Selected flow: Foundation and support products by design item
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, returned and rejected quantities by item.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional support-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/asset
  - Basis: broad design-dependent first-pass screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Earthwork service (`earthwork_service`)

Use only for a purchased excavation service whose machinery fuel is not also counted as owned plant energy.

- Selected flow: Foundation excavation service
- Flow property / unit: Contract work quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- Amount rule: Record certified excavation work and its service boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Range: Provisional excavation-service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: declared work units/asset
  - Basis: broad first-pass screen pending contract unit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Support equipment energy (`support_energy`)

Record owned fuel or electricity by carrier, net of hired-service and shared-plant double counting.

- Selected flow: Construction electricity or fuel by carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Sum site meters, invoices and equipment logs by work package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional support-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kWh-equivalent/asset
  - Basis: broad equipment-energy first-pass screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted supports (`accepted_supports`)

Only surveyed foundations, piers and abutments passing the support gate move internally to deck work; this is not another final asset or sale.

- Selected flow: Accepted bridge substructure
- Flow property / unit: Count / accepted support system
- Amount rule: Count the internally accepted support system linked to the final asset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Internal support-gate completeness
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: accepted support systems/asset
  - Basis: one internal support handoff per final asset
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spoil and rejected supports (`support_rejects`)

Classify reusable clean excavation, contaminated spoil and rejected material separately; link repair to `supports` or exit to verified recovery or disposal.

- Selected flow: Spoil and rejected support material by destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile dispatch mass and internal repair loops by material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional support-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/asset
  - Basis: broad site-dependent first-pass screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Superstructure, deck and handover (`deck_handover`)

#### Inputs

##### Product flows

###### Accepted supports handoff (`supports_in`)

This is exactly the output `accepted_supports`; carry its foreground burdens once, never as an additional purchased support system.

- Selected flow: Accepted bridge substructure
- Flow property / unit: Count / accepted support system
- Amount rule: Match the signed internal support-gate output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Internal handoff consistency
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: accepted support systems/asset
  - Basis: same output from the support node
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Superstructure and deck components (`deck_components`)

Record girders, panels or cast-in-place materials, bearings, joints, parapets and drainage by actual item. Supplier components and raw site-casting materials for the same element are mutually exclusive.

- Selected flow: Superstructure and deck products by installed item
- Flow property / unit: Mass / kg
- Amount rule: Reconcile supplier, delivery, installed and rejected quantities by construction route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `fhwa-pbes`
- Range: Provisional superstructure-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/asset
  - Basis: broad design-dependent first-pass screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delivered-component freight (`component_freight`)

Separate transport of purchased girders, panels and other major components from supplier product burdens; select actual road or water freight mode from delivery records and do not duplicate supplier-included freight.

- Selected flow: Component freight service by actual mode
- Flow property / unit: Transport work / t*km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Amount rule: Multiply documented delivered tonnes by loaded kilometres, net of transport already included upstream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freight`
- Range: Provisional component-freight screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: t*km/asset
  - Basis: broad first-pass screen dependent on component mass and supplier distance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Deck finishing products (`deck_finishing`)

Measure initial waterproofing, surfacing, markings and protection only where included in this asset's handover; distinguish residues from intended finish.

- Selected flow: Deck finishing products by specification
- Flow property / unit: Mass / kg
- Amount rule: Use batch tickets or deck area, thickness and measured density.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Range: Provisional initial-finishing screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kg/asset
  - Basis: broad deck-area-dependent first-pass screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Erection and finishing energy (`deck_energy`)

Measure lifting, pumping, curing and surface-work energy by actual carrier, allocating shared cranes or falsework once across nodes.

- Selected flow: Construction electricity or fuel by carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Sum site meters, invoices and equipment logs after shared-plant attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional deck-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kWh-equivalent/asset
  - Basis: broad equipment-energy first-pass screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted bridge or elevated highway (`reference_product_bridge`)

The complete structure passes load, geometry, connection, deck, drainage and safety acceptance. Failed work cannot enter this count.

- Selected flow: Site-accepted bridge or elevated-highway structure
- Flow property / unit: Count / asset
- Amount rule: 1 asset
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Accepted final-asset count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: asset/asset reference
  - Basis: one signed complete handover per reference
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Deck rejects and finishing residues (`deck_rejects`)

Damaged components, concrete overrun, formwork and finishing residues loop to `deck_handover` repair or exit to declared recovery, return or disposal; they are not accepted output.

- Selected flow: Superstructure rejects and residues by destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile measured rejects with rework, recovery, return and disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional deck-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000000
  - Unit: kg/asset
  - Basis: broad design-dependent first-pass screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `one_asset` | accepted output | The bridge is the sole intended product; reusable excavation or scrap follows its actual destination, not another accepted-bridge count. |  |
| `rework_burden` | rejected work | Keep repair burdens in the producing node and trace recovery or disposal; rejected components do not enter `reference_product_bridge`. |  |
| `secondary_inputs` | recycled steel or aggregate | Record origin, recovery gate and applicable supplier/prior-system burden convention; never count both prior product burden and cut-off recovery dataset. |  |
| `shared_plant` | common cranes, falsework and access works | Attribute one acquired burden across `supports` and `deck_handover` by logged service hours or measured work for the project period; reconcile shares to 100%. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | `supports`; `deck_handover` | purchased and installed materials | procurement and as-built records | item, supplier, route, mass or volume, density, installed, returned, rejected, secondary origin | reconcile delivery and as-built quantities; retain installed plus loss minus returns without component/raw overlap | kg, m3, item | each lot | project construction | named asset | per declared reference flow | tickets, drawings and mix records |
| `cp_services` | `supports` | hired earthwork | certified measurements | contract unit, quantity, fuel inclusion | contractor work records; retain non-overlapping claims | declared unit | each claim | foundation phase | named asset | per declared reference flow | signed measurement sheets |
| `cp_freight` | `deck_handover` | component freight | bills of lading and route records | item, tonnes, mode, loaded distance, supplier freight inclusion | reconcile delivered loads and route; sum tonnes times loaded kilometres by mode | t, km, t*km | each shipment | project construction | named asset | per declared reference flow | delivery and carrier records |
| `cp_energy` | `supports`; `deck_handover` | carrier energy | meters, invoices, equipment logs | carrier, amount, node, equipment, hours, shared attribution | reconcile meter and invoice; sum by carrier and count common plant once | kWh, MJ, kg | monthly and work package | project construction | named asset | per declared reference flow | meters and machine logs |
| `cp_waste` | `supports`; `deck_handover` | spoil and rejects | weighbridge and transfer notes | mass, material, route, destination, rework link | weigh and trace; sum by material and destination net of loops | kg | each movement | project construction | named asset | per declared reference flow | weighbridge records |
| `cp_acceptance` | `supports`; `deck_handover` | internal and final gates | surveys and sign-off | endpoints, length, area, spans, load class, defects, tests, date | signed inspection; match internal support and final count | asset, m, m2 | each gate | construction and handover | named asset | per declared reference flow | as-built plans and certificates |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `material_balance` | material and waste | Purchased = installed + returned + rejected + stock change on consistent moisture and units. | delivery, installation, return, stock | reconciled kg/asset |  |
| `volume_to_mass` | concrete and finishing | Mass = measured volume × project-specific density. | volume, density | kg/asset |  |
| `shared_hours` | common plant | Node burden = total acquired burden × node logged hours / all eligible hours; measured work may replace hours if justified. | common burden and logs | allocated burden |  |
| `geometry_check` | reference product | Measure deck plan area and structural length from as-built dimensions, excluding ordinary approaches. | as-built geometry | m2 and m/asset |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `geometry_gate` | reference asset | Retain dated acceptance with length, deck area, spans and load class. | signed certificate and survey |
| `route_evidence` | major elements | Identify cast-in-place or prefabricated route and supplier gate, without overlap. | design, purchasing and pour records |
| `boundary_complete` | all nodes | Reconcile material, service, energy, waste, temporary works and approach exclusions. | package ledger |
| `uuid_gap` | final exchanges | Confirm matching platform flow, property and unit identities before concrete dataset release. | detail-confirmed identity records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `complete_asset` | reference output | Require one signed complete structure with geometry, duty and date; no span or component independently satisfies the reference. | `unsd-cpc-53221` |
| `gate_link` | both nodes | Match `supports_in` to `accepted_supports`; carry support burdens once, without another purchased support system. |  |
| `route_exclusive` | major elements | Verify one construction route, supplier component boundary and on-site connections for each element; prohibit overlapping routes. | `fhwa-pbes` |
| `reject_path` | failed work | Trace every reject to repair, recovery, return or disposal; exclude from accepted geometry until retested. |  |
| `secondary_shared` | recycled inputs and temporary works | Verify origin/burden convention and reconcile shared-work shares to one acquired burden for the defined period. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground package for one accepted bridge or elevated highway. |
| downstream_use | Reviewed secondary or background construction dataset with process and lifecyclemodel links. |
| allowed_use | Comparisons where geometry, duty, route, location and scope are disclosed. |
| excluded_use | Component manufacture, stand-alone paving, traffic operation or generic at-grade road per km. |
| required_metadata | Endpoints, geometry, load class, route/material mix, inclusion matrix, date, design life and quality. |
| required_quality_disclosure | Supplier coverage, record completeness, unresolved identities, shared-work attribution, provisional ranges and exclusions. |
| update_trigger | Material change in structure, route, supplier inventory, acceptance gate or data quality. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-53221` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53221 | Product scope and bridge/elevated-highway boundary. |
| `fhwa-pbes` | official_guidance | https://www.fhwa.dot.gov/bridge/prefab/if09010/01a.cfm | Prefabricated concrete and steel elements, site connections and route-specific interfaces. |
