---
pcr_id: pcr.constructions-and-construction-services.constructions.highways-except-elevated-highways-streets-and-roads
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Highways (except elevated highways), streets and roads

## 1. Scope and Applicability

This PCR covers a completed, non-elevated, passable highway, street, road, surfaced parking area, driveway, pedestrian or bicycle way at documented site handover. Include integral drainage and safety installations and declared vehicular or pedestrian underpasses/overpasses. Declare chainages, length, pavement width and area, layer materials and thickness, function/traffic class and acceptance evidence. Elevated highways and highway tunnels are excluded. This asset is not a paving material, separately traded construction service, road-use operation or maintenance programme. [unsd-cpc-53211; fhwa-lca-pave]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.highways-except-elevated-highways-streets-and-roads |
| classification_refs | CPC 3.0:53211 |
| covered_products | Non-elevated highways, streets and roads; surfaced parking, driveways, pedestrian and bicycle ways; integral safety installations and declared underpasses/overpasses |
| excluded_products | Elevated highways, highway tunnels, standalone bridges, railway tracks, runways, paving products, construction services, road use and later maintenance |
| representative_product | One accepted non-elevated asphalt-surfaced road segment with declared drainage and safety scope |
| production_route | Earthwork and compacted formation, pavement-layer assembly, finishing and handover. A rigid-concrete alternative replaces the asphalt surface route for the same area and requires changed materials, equipment, curing, waste and tests. |
| market_state | Passable accepted civil asset at the site; traffic use and design-life scenarios are separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed non-elevated road or surfaced-way segment at the declared site |
| How much | One accepted segment; also report centreline length in m and paved area in m2 for intensity |
| How well | Meets declared traffic/function class, layer structure, drainage and safety acceptance criteria |
| How long or cycle | One construction project through signed opening or handover; service life is separate |
| reference_flow_link | Accepted output of `finish_handover`, counted once |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed non-elevated road segment |
| Reference flow property | Number of items |
| Reference unit group | Units of items |
| Reference unit | segment |
| Required qualifiers | site and alignment; chainage limits; road type; centreline length; carriageway and path widths and areas; material layers and thickness; traffic/function class; drainage, shoulders, marking and safety scope; acceptance date |

No platform UUID is bound until a Product flow with this site-handover gate and compatible property and support rows is verified. Area or length intensity does not replace the one-segment reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `segment_count` | reference output | Number of items | segment | Count one contiguous accepted segment within declared chainages, not its component layers. |
| `pavement_geometry` | geometry/intensity | Length and area | m, m2 | Derive area by section from measured length and width; distinguish carriageway, shoulder and path. |
| `layer_mass` | material and waste | Mass | kg | Reconcile delivered, returned, installed and rejected quantities using measured area, thickness and density. |
| `energy_conversion` | fuel and electricity | Energy | MJ or kWh | Preserve energy carrier and documented conversion factors. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed alignment before works; existing pavement, demolition, contamination and retained structures declared separately |
| starting_condition_role | Physical start of foreground site works |
| product_classification_scope | One passable non-elevated road or way within declared chainages, including specified integral drainage and safety |
| recursive_input_rule | A purchased completed road segment is upstream only if transformed; its existing length is not a second output. |
| upstream_dataset_requirement | Materials, freight, energy, construction services and waste treatment use compatible gates, routes and geography. |
| disclosure | Starting condition, as-built geometry and layer structure, shared plant, secondary-material origin, wastes, tests and handover. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | all processes | Include materials through compatible upstream datasets, inbound transport, site work, layer construction, finishing, rejects and acceptance through handover; use, maintenance and end of life are separate scenarios. | fhwa-lca-pave |
| `assembly_handoff` | `layer_assembly` | Compacted formation is the parent; supplied base, surface, drainage and safety components form an assembled but unopened road. | fhwa-lca-pave |
| `finish_handoff` | `finish_handover` | The assembled road is the parent; marking, final treatment, testing and defect closure yield the accepted passable road. | fhwa-lca-pave |
| `alternative_surface` | rigid versus flexible surfacing | For one area, concrete and asphalt surface routes are mutually exclusive; record changed materials, equipment, cure/compaction, residues and test requirements relative to `layer_assembly`. | fhwa-lca-pave |
| `secondary_origin` | reclaimed asphalt and recycled aggregate | Declare prior use, recovery handoff and cut-off or inheritance point; do not import previous-life burden twice. | fhwa-lca-pave |
| `shared_plant` | plant, machinery and utilities | Identify consuming nodes/projects and service periods, and attribute logged use once by production or hours. | fhwa-lca-pave |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formation` | Earthwork and formation | required | Existing formation outside contract must be disclosed | Prepare and inspect compacted parent formation | surveyed area and cut/fill mass |
| `layer_assembly` | Pavement and component assembly | required | Select asphalt or rigid-concrete route by design | Join pavement layers, drainage and safety components; record technology delta | installed area, thickness and mass |
| `finish_handover` | Finishing and opening | required | Finish, test and close defects | Transfer passable accepted segment | one signed handover |

### Process: Earthwork and formation (`formation`)

#### Inputs

##### Product flows

###### Imported fill and subgrade material (`formation_fill`)

Split actual fill by type. On-site reused spoil is an internal transfer, not purchased material.

- Selected flow: Imported fill and subgrade materials
- Flow property / unit: Mass / kg
- Amount rule: Deliveries less returns and stock change
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `fhwa-lca-pave`
- Range: Provisional fill mass screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg
  - Basis: per completed segment, subject to actual cut/fill geometry
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

#### Outputs

##### Product flows

###### Accepted compacted formation (`formation_handoff`)

This inspected parent is transferred internally, not sold as a second road.

- Selected flow: Accepted compacted formation
- Flow property / unit: Area / m2
- Amount rule: Surveyed prepared area passing compaction tests
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_geometry_acceptance`
- Sources: `fhwa-lca-pave`
- Range: Provisional formation area screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 100000000
  - Unit: m2
  - Basis: per completed segment
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Exported spoil (`spoil_export`)

Distinguish clean reused soil, off-site waste and contaminated spoil by test and destination.

- Selected flow: Exported spoil by destination
- Flow property / unit: Mass / kg
- Amount rule: Weighbridge exits net of internal reuse
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `fhwa-lca-pave`
- Range: Provisional spoil screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg
  - Basis: per completed segment and declared ground condition
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Pavement and component assembly (`layer_assembly`)

#### Inputs

##### Product flows

###### Accepted formation transferred to pavement assembly (`formation_input`)

Receive the inspected compacted formation from `formation` as an internal parent state. Match the upstream accepted area and chainages; do not re-add its material, energy or earthwork burdens as a purchased product.

- Selected flow: Accepted compacted formation
- Flow property / unit: Area / m2
- Amount rule: Accepted formation area entering layer assembly, reconciled to `formation_handoff`
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_geometry_acceptance`
- Sources: `fhwa-lca-pave`
- Range: Provisional internal formation-transfer area screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 100000000
  - Unit: m2
  - Basis: per completed segment, matching the accepted formation output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Virgin pavement materials (`virgin_layer_materials`)

Split actual aggregate, bitumen, cement, concrete, reinforcement and drainage materials by as-built layer; do not duplicate alternative surfaces.

- Selected flow: Virgin pavement materials as delivered
- Flow property / unit: Mass / kg
- Amount rule: Delivery mass by material and layer net of returns
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `fhwa-lca-pave`
- Range: Provisional virgin material screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg
  - Basis: per completed segment after material/layer split
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Recovered pavement materials (`secondary_layer_materials`)

Conditional reclaimed asphalt or recycled aggregate requires origin, prior use, recovery handoff, composition and delivery mass.

- Selected flow: Recovered pavement materials as supplied
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted secondary material by layer
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `fhwa-lca-pave`
- Range: Provisional recovered material screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg
  - Basis: per completed segment; zero if no secondary input
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Road freight for materials (`material_freight`)

Record actual supplier-to-site truck loads and distances; omit transport embedded in delivered-at-site product datasets.

- Selected flow: Road freight transport service
- Flow property / unit: Transport work / t*km
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Sum shipment tonnes times route kilometres
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_freight`
- Sources: `fhwa-lca-pave`
- Range: Provisional freight work screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000000
  - Unit: t*km
  - Basis: per completed segment, excluding embedded delivery
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Paving energy carriers (`paving_energy`)

Capture electricity and machinery fuel by actual carrier and task; attribute shared plant use once and exclude energy embedded in hired services.

- Selected flow: Construction energy carriers
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter and fuel-log energy by carrier and task
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_plant_services`
- Sources: `fhwa-lca-pave`
- Range: Provisional paving energy screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ
  - Basis: per completed segment after carrier conversion
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

#### Outputs

##### Product flows

###### Assembled road before opening (`assembled_road`)

Installed base, surfacing, drainage and safety elements are the parent for finishing; acceptance remains outstanding.

- Selected flow: Assembled road stage
- Flow property / unit: Area / m2
- Amount rule: Measured installed pavement area passing layer inspection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_geometry_acceptance`
- Sources: `fhwa-lca-pave`
- Range: Provisional assembled area screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 100000000
  - Unit: m2
  - Basis: per completed segment
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Rejected paving material (`paving_rejects`)

Trace off-spec mix, broken components and packaging by composition, reuse, return and treatment destination.

- Selected flow: Paving rejects by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Measured outbound rejects net of internal rework
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `fhwa-lca-pave`
- Range: Provisional paving reject screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000000
  - Unit: kg
  - Basis: per completed segment
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Finishing and opening (`finish_handover`)

#### Inputs

##### Product flows

###### Assembled road transferred to finishing (`assembled_road_input`)

Receive the inspected installed road from `layer_assembly` as an internal parent state. Reconcile its area and structure to `assembled_road`; do not re-add its prior material, transport, energy or construction burdens.

- Selected flow: Assembled road stage
- Flow property / unit: Area / m2
- Amount rule: Inspected assembled area entering finishing, reconciled to `assembled_road`
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_geometry_acceptance`
- Sources: `fhwa-lca-pave`
- Range: Provisional internal assembled-road transfer area screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 100000000
  - Unit: m2
  - Basis: per completed segment, matching the assembled-road output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Marking and finishing materials (`finish_materials`)

Record actual paint, beads, sealants and tactile elements; zero where no separate finish applies.

- Selected flow: Road finishing materials as delivered
- Flow property / unit: Mass / kg
- Amount rule: Delivered less returned finish materials by type
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `fhwa-lca-pave`
- Range: Provisional finish material screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000000
  - Unit: kg
  - Basis: per completed segment
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

#### Outputs

##### Product flows

###### Completed road segment (`completed_road`)

Count once after layer, finish, drainage, safety and access tests and signed handover.

- Selected flow: Completed non-elevated road segment
- Flow property / unit: Number of items / segment
- Amount rule: One accepted connected segment
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_geometry_acceptance`
- Sources: `unsd-cpc-53211`
- Range: Accepted segment count
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: segment
  - Basis: per accepted completed segment
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `unsd-cpc-53211`

##### Waste flows

###### Finishing residue (`finish_residue`)

Separate unused coating, containers and rejected marking by composition and destination.

- Selected flow: Road finishing residue by destination
- Flow property / unit: Mass / kg
- Amount rule: Weighed residue net of return and internal reuse
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per completed segment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `fhwa-lca-pave`
- Range: Provisional finishing residue screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000000
  - Unit: kg
  - Basis: per completed segment
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | road output | Do not allocate layers into additional road products; length and area intensities report the same segment. | fhwa-lca-pave |
| `shared_asset` | shared plant and utilities | Cover all consumers and service periods; use metered production or hours and sum allocated burden to the recorded whole once. | fhwa-lca-pave |
| `secondary_burden` | recovered inputs | Record origin, recovery gate and cut-off or burden-inheritance convention; avoid previous-life double count. | fhwa-lca-pave |
| `reject_rework` | off-spec work | Retain failed-attempt material and energy, trace rework and destination, and exclude rejects from accepted output. | fhwa-lca-pave |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_geometry_acceptance` | `formation`, `layer_assembly`, `finish_handover` | geometry and accepted stages | survey and tests | chainage, width, area, thickness, density, function class, tests, handover | reconcile as-built survey and certificates | m, m2, mm, segment | each stage | full construction | alignment | sum distinct accepted sections once | signed survey and tests |
| `cp_materials` | `formation`, `layer_assembly`, `finish_handover` | fill, layers and finish | delivery and as-built ledger | type, supplier gate, mass, return, layer, recycled origin, installed quantity | ticket and layer reconciliation | kg | delivery | full construction | segment/supplier | delivery less return/stock by material | invoices, tickets, cores |
| `cp_plant_services` | `formation`, `layer_assembly` | machinery and energy | meter, fuel and equipment log | carrier, fuel, hours, task, consumer, period | site and contractor logs | MJ, kWh, h | shift/period | full construction | site/shared plant | attribute logged use once | meters and contracts |
| `cp_freight` | `layer_assembly` | inbound material transport | shipment | origin, destination, tonnes, km, delivery gate | consignment and route check | t, km, t*km | shipment | full construction | inbound route | sum nonembedded tonne-km | delivery evidence |
| `cp_waste` | `formation`, `layer_assembly`, `finish_handover` | spoil and rejects | transfer/reuse log | material, hazard, mass, node, destination, reuse | weighbridge/receiver | kg | movement | full construction | segment | external exits net internal reuse | receipts/tests |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `section_area` | geometry | Sum accepted section length times measured width by carriageway, shoulder and path. | chainage, width | m2 | fhwa-lca-pave |
| `material_balance` | materials | Deliveries less returns and stock change equals installed plus rejected; investigate residual. | ledger, as-built, waste | reconciled kg | fhwa-lca-pave |
| `freight_work` | transport | Sum shipment tonnes times route km, excluding supplier datasets already delivered at site. | tonnes, km, gate | t*km | fhwa-lca-pave |
| `area_intensity` | reporting | Divide segment result by measured area or length, retaining the one-segment total. | segment total, area, length | per-m2/per-m intensity | fhwa-lca-pave |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_geometry` | reference | Confirm chainage, widths, areas, layer thickness, function class and acceptance. | as-built survey/tests |
| `dq_materials` | layers | Reconcile supplied, installed, returned, stock and waste by layer and route. | tickets, cores, ledger |
| `dq_shared` | plant | Identify all consuming nodes/projects and periods, without duplicated energy/service burden. | dated equipment and meter logs |
| `dq_secondary` | recycled material | Document previous use, recovery gate, composition and burden convention. | supplier and recovery records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product` | reference | Confirm passable non-elevated segment, declared chainages, class and signed handover; reject material, service, elevated highway or tunnel identity. | unsd-cpc-53211 |
| `validate_geometry` | layers | Check area from length and width, and mass against layer thickness and density. | fhwa-lca-pave |
| `validate_route` | surface alternative | Verify parent `layer_assembly` and material/equipment/waste/test delta; reject simultaneous alternatives over one area. | fhwa-lca-pave |
| `validate_attribution` | shared/secondary | Check every shared consumer and period, secondary origin and recovery, and no duplicate burden. | fhwa-lca-pave |
| `validate_handoff` | finish | Confirm assembled parent, finishing inputs/residues, defect closure and passable accepted state. | fhwa-lca-pave |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction package for one completed non-elevated road or surfaced-way segment |
| downstream_use | `secondary_dataset`; `background_dataset` only with matching geometry, function, route and site gate |
| allowed_use | Construction-stage modelling and separately identified lifecycle extensions |
| excluded_use | Operating traffic, whole-life result without scenarios, paving-material manufacture, elevated highway/tunnel, or area intensity without segment scope |
| required_metadata | site, chainages, length, area/width convention, layers/thickness, function class, drainage/safety, route, supplier gates, handover |
| required_quality_disclosure | survey gaps, unmeasured earthwork, material balance, shared plant, secondary origin, waste destinations, unresolved UUIDs |
| update_trigger | changed alignment, structure, route, supplier gate, acceptance scope or verified platform identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-53211` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53211 | Product boundary; CPC 2.1 explanatory note supplements the matching CPC 3.0 title |
| `fhwa-lca-pave` | `official_guidance` | https://www.fhwa.dot.gov/pavement/lcatool/LCA_Pave_Tool_Methodology.pdf | Pavement material, transport and construction decomposition; not a universal quantity range |
