---
pcr_id: pcr.constructions-and-construction-services.constructions.airfield-runways
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Airfield runways

## 1. Scope and Applicability

This PCR covers a site-accepted continuous runway, taxiway or apron pavement asset, and related non-building airfield structures when integral to the measured contract. Declare asset type, as-built area and geometry, aircraft loading class, layer design and acceptance gate. The route covers ground preparation, flexible or rigid pavement, and contracted markings; include drainage, lighting or other systems only when integral and measured. Exclude airport buildings, aircraft, airport operation, later maintenance and independently measured systems. [unsd-53213; faa-ac-150-5370-10]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.airfield-runways |
| classification_refs | CPC 3.0 53213, Airfield runways. |
| covered_products | Site-accepted runway, taxiway or apron pavement and contract-integral non-building structures. |
| excluded_products | Airport buildings, aircraft, operations, later maintenance and separately measured lighting or navigation assets. |
| representative_product | One m2 of accepted runway pavement in a named continuous segment. |
| production_route | Prepare subgrade and drainage; place designed base and flexible or rigid surface; finish and test. |
| market_state | Installed and accepted airside infrastructure at a specified site. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Site-accepted airfield pavement asset. |
| How much | 1 m2 of accepted plan-view paved area; also report total continuous-segment area. |
| How well | Specified bearing, layer, surface, marking and geometric tests passed. |
| How long or cycle | One construction contract through signed handover; service life is separate scenario metadata. |
| reference_flow_link | reference_product_airfield_pavement |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Site-accepted airfield pavement; UUID unresolved |
| Reference flow property | Area; UUID 93a60a56-a3c8-19da-a746-0800200c9a66 |
| Reference unit group | Units of area; UUID 93a60a57-a3c8-18da-a746-0800200c9a66 |
| Reference unit | m2 |
| Required qualifiers | Runway, taxiway or apron type; continuous segment; as-built area, width and length; aircraft loading class; flexible or rigid layer section; drainage, lighting and marking scope; acceptance date and site. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_area` | reference product | Area, UUID unresolved | m2 | Survey accepted plan-view footprint once; overlapping layers do not multiply area. |
| `layer_mass` | materials and waste | Mass | kg | Reconcile delivered, installed, returned and rejected material; convert volume using project density. |
| `site_energy` | construction plant | Energy or fuel mass | kWh, MJ or kg | Keep carriers separate and exclude fuel embedded in purchased services. |
| `freight_work` | material transport | Mass × distance | t·km | Multiply delivered tonnes by loaded route distance, disclosing return-trip treatment. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed existing ground or pavement, subsurface condition and demolition or remediation at contract start. |
| starting_condition_role | Physical baseline, not a burden-free finished runway input. |
| product_classification_scope | One accepted airside pavement segment, not the complete airport. |
| recursive_input_rule | Purchased paving components enter at supply gate; another finished accepted pavement is not an unexamined raw input. |
| upstream_dataset_requirement | Link actual aggregate, asphalt/concrete, marking, energy, transport, construction-service and waste-treatment datasets. |
| disclosure | Record initial state, design, every included asset and interface, recovered inputs, shared works, cut-offs and data gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | entire asset | Include documented preparation, layer placement, finishing, testing and rework through signed acceptance; exclude use, maintenance and end-of-life. | `unsd-53213`; `faa-ac-150-5370-10` |
| `asset_interfaces` | drainage, lighting and structures | Include only contract-integral measured items; link separately measured systems and buildings instead of silently including them. | `unsd-53213`; `faa-ac-150-5370-10` |
| `internal_handoff` | successive nodes | Formation passes to paving after subgrade testing; laid pavement passes to finishing after layer testing; neither handoff creates a second final product. | `faa-ac-150-5370-10` |
| `secondary_shared` | recovered inputs and shared plant | Declare recovery gate and burden convention; attribute shared plant to identified nodes and service period exactly once. | `faa-ac-150-5370-10` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formation` | Site formation | required | Surveyed baseline to tested formation. | Earthwork, subgrade and in-scope drainage. | Accepted area and earthwork records. |
| `paving` | Pavement-layer integration | required | Tested formation to tested laid pavement. | Join subbase, base and surface products; route defects. | Accepted area and layer records. |
| `finish_handover` | Surface finishing and acceptance | required | Tested laid pavement to signed handover. | Apply in-scope markings, test and correct. | Accepted area and finish records. |

### Process: Site formation (`formation`)

#### Inputs

##### Product flows

###### Formation and drainage products (`formation_products`)

Record aggregate, geotextile, stabilization and drainage products by specification; recovered inputs need origin evidence.

- Selected flow: Formation products by as-built item
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, returned and lost mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Formation material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: provisional broad project-specific screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Earthwork service (`earthwork_service`)

Use only for outsourced work not already represented by directly measured plant fuel.

- Selected flow: Excavation and compaction construction service
- Flow property / unit: Contract quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Amount rule: Record approved work-order quantity and contract unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Range: Earthwork service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared service units/m2
  - Basis: provisional screen after contract unit is specified
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formation energy (`formation_energy`)

Record direct equipment fuel and electricity by carrier; exclude subcontracted service energy.

- Selected flow: Construction energy by actual carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Sum metered and logged use attributable to formation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Formation energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh-equivalent/m2
  - Basis: broad provisional equipment-energy screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted formation (`accepted_formation`)

Only tested formation passes internally to paving; this is not another final reference product.

- Selected flow: Tested airside pavement formation
- Flow property / unit: Area / m2
- Amount rule: Record accepted area at the subgrade test gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Internal formation coverage
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: m2/m2 reference
  - Basis: accepted formation supporting one accepted m2
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `faa-ac-150-5370-10`

##### Waste flows

###### Exported spoil (`spoil_export`)

On-site reused fill remains in the formation balance; exported material has one receiver.

- Selected flow: Excavated soil or removed pavement by destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile excavation, reuse, stock and exported weighbridge mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Spoil export screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/m2
  - Basis: broad ground-dependent provisional screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Pavement-layer integration (`paving`)

#### Inputs

##### Product flows

###### Tested formation handoff (`formation_handoff`)

Consume `accepted_formation` internally once without another upstream product dataset.

- Selected flow: Tested airside pavement formation
- Flow property / unit: Area / m2
- Amount rule: Match paired formation output by surveyed section.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Range: Internal handoff equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: m2/m2 reference
  - Basis: paired formation output and paving input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `faa-ac-150-5370-10`

###### Pavement-layer products (`layer_products`)

Separate aggregate, asphalt mix, concrete, reinforcement and joint products by actual flexible or rigid layer. Reclaimed material requires origin and recovery handoff.

- Selected flow: Pavement products by layer and specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile receipts, installed mass, returns and rejects by layer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Pavement product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: provisional section-dependent screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Material freight (`material_freight`)

Record actual transport mode and route for delivered materials, excluding transport already embedded in a supplier dataset.

- Selected flow: Material freight service by mode and route
- Flow property / unit: Transport work / t·km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Amount rule: Delivered tonnes multiplied by loaded distance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freight`
- Range: Freight work screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: t·km/m2
  - Basis: broad provisional route-dependent screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Paving energy (`paving_energy`)

Record directly operated mixing, paving and rolling equipment; do not duplicate supplier-plant energy.

- Selected flow: Paving fuel and electricity by carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Allocate meters and equipment logs to paving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Paving energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh-equivalent/m2
  - Basis: broad provisional site-energy screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Tested laid pavement (`laid_pavement`)

Layer-tested pavement passes internally to finishing; failed sections remain in rework.

- Selected flow: Laid and tested airfield pavement
- Flow property / unit: Area / m2
- Amount rule: Record area passing specified thickness, compaction or strength gates.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Internal laid-pavement coverage
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: m2/m2 reference
  - Basis: tested pavement proceeding to finishing
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `faa-ac-150-5370-10`

##### Waste flows

###### Rejected pavement (`paving_rejects`)

Route off-spec mix or removed pavement to documented rework, recovery or disposal; rejected area is not accepted output.

- Selected flow: Rejected pavement material by destination
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected loads and record treatment or return path.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Rejected pavement screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/m2
  - Basis: broad provisional reject screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Surface finishing and acceptance (`finish_handover`)

#### Inputs

##### Product flows

###### Laid pavement handoff (`laid_handoff`)

Consume `laid_pavement` internally once; finishing does not recreate layer-material burdens.

- Selected flow: Laid and tested airfield pavement
- Flow property / unit: Area / m2
- Amount rule: Match paired paving output by surveyed section.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Range: Internal laid handoff equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: m2/m2 reference
  - Basis: paired paving output and finishing input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `faa-ac-150-5370-10`

###### Marking and fixture products (`finishing_products`)

Capture paint, beads, sealant and contracted embedded fixtures by specification; omit separately procured systems.

- Selected flow: Airside marking and integral fixture products
- Flow property / unit: Mass or count / kg or item
- Amount rule: Reconcile issue, installed quantity, returns and residue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Finishing product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg-equivalent/m2
  - Basis: broad provisional screen with item mass conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted airfield pavement (`reference_product_airfield_pavement`)

Only signed, surveyed and tested pavement is the reference output; failed sections remain in rework.

- Selected flow: Site-accepted airfield pavement
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `faa-ac-150-5370-10`
- Range: Reference product identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: m2/m2 reference
  - Basis: one accepted m2 by definition
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `faa-ac-150-5370-10`

##### Waste flows

###### Finishing residues (`finishing_residues`)

Record excess marking material and removed defective finish by substance and documented receiver.

- Selected flow: Finishing waste by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile issued products with installed, returned and wasted material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Finishing residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/m2
  - Basis: broad provisional loss screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | construction output | Attribute measured works to the accepted segment; link independently measured airport assets instead of allocating their full burden here. | `unsd-53213` |
| `rework_reject` | off-spec material | Retain rework burden in the producing node, trace recovery/disposal exits and exclude failed area from accepted area. | `faa-ac-150-5370-10` |
| `secondary_input` | reclaimed asphalt and aggregate | State origin, recovery gate and prior-burden or cut-off convention; count recovery and current processing once. | `faa-ac-150-5370-10` |
| `shared_plant` | common batching plant, haul road or site utilities | Identify formation, paving and finishing consumers and service period; apportion actual burden by measured use or documented work once. | `faa-ac-150-5370-10` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | `formation`, `paving`, `finish_handover` | Material inputs | Bill, delivery and as-built | Item, layer, mass, count, density, delivered, installed, returned, origin | Reconcile supplier tickets and survey; retain net installed quantity plus tracked loss | kg, m3, item | Each batch | Contract start to acceptance | Measured segment | per declared reference flow | Signed tickets and as-built records |
| `cp_services` | `formation` | Purchased works | Contract measurement | Work item, contractor, unit, quantity and equipment scope | Approved measured work; sum non-overlapping items | contract unit | Each work order | Formation works | Segment | per declared reference flow | Certified payment record |
| `cp_energy` | `formation`, `paving`, `finish_handover` | Direct energy | Meter and plant log | Carrier, quantity, node, shared hours | Reconcile meters and invoices; allocate once by node usage | kWh, MJ, kg | Daily or billing period | Contract start to acceptance | Site and shared plant | per declared reference flow | Meter and fuel slips |
| `cp_freight` | `paving` | Freight | Consignment | Mass, mode, origin, destination, loaded distance, supplier scope | Delivery ticket reconciliation; sum mass × distance once | t, km, t·km | Each delivery | Material delivery | Supply chain | per declared reference flow | Transport documents |
| `cp_waste` | `formation`, `paving`, `finish_handover` | Spoil and reject | Weighbridge and transfer | Type, mass, node, rework or receiver | Reconcile removal and destination; count export once | kg | Each movement | Contract start to acceptance | Site and receiver | per declared reference flow | Transfer receipt |
| `cp_acceptance` | `formation`, `paving`, `finish_handover` | Handoff and final output | Survey and test | Segment, area, thickness, bearing, strength, markings, defect, signed date | Survey and test register; sum non-overlapping accepted area | m2 and test units | Every hold point | Contract start to handover | Continuous segment | per declared reference flow | Signed test and handover |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_area` | every row | Divide measured amount by signed accepted area, retaining rejects and rework in numerator. | Quantity and accepted survey area | Quantity/m2 | `faa-ac-150-5370-10` |
| `mass_conversion` | volume or count | Convert using recorded density or item mass, not a universal layer thickness. | Volume/count and density/item mass | kg | `faa-ac-150-5370-10` |
| `freight_calculation` | deliveries | Sum non-overlapping loads × loaded distances. | Consignment tonnes and km | t·km/m2 | `faa-ac-150-5370-10` |
| `internal_balance` | process edges | Equalize formation output with paving input and laid-pavement output with finishing input. | Surveyed hold-point area | Paired internal m2 | `faa-ac-150-5370-10` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | asset and layers | Declare asset role, geometry, aircraft loading class, layer section and acceptance scope. | As-built design and signed handover |
| `completeness` | all nodes | Cover all included work packages and trace returns, waste and shared equipment once. | Contract reconciliation |
| `measurement` | area and mass | Use surveyed non-overlapping accepted area and documented conversion factors. | Survey, tickets and density tests |
| `temporal` | all records | Align activity to contract construction and handover dates; disclose substitutions. | Dated logs and invoices |
| `gaps` | unresolved data | Disclose missing UUIDs, supplier data and provisional ranges before dataset release. | Gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_test` | reference product | Require signed acceptance, area survey and specified bearing, surface and marking tests; reject untested area. | `faa-ac-150-5370-10` |
| `handoff_balance` | three nodes | Match each internal output area to the next-node input without adding it as another final product. | `faa-ac-150-5370-10` |
| `material_balance` | inputs and waste | Reconcile receipts = installed + returned + rejects + stock change; link each reject to rework, recovery or disposal. | `faa-ac-150-5370-10` |
| `secondary_shared_check` | recovered inputs and shared plant | Check origin, recovery gate, burden convention, consumers and service period; detect duplicate burdens. | `faa-ac-150-5370-10` |
| `scope_check` | adjacent assets | Exclude or link buildings, aircraft and standalone systems; do not count them as pavement layers. | `unsd-53213` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Construction-stage foreground package for site-accepted airfield pavement. |
| downstream_use | Secondary or background dataset for airport infrastructure process and lifecycle model. |
| allowed_use | Matching pavement type, aircraft loading, layer section, geography and contract scope. |
| excluded_use | Aircraft operation, buildings, maintenance or other pavement design without adjustment. |
| required_metadata | Site, segment, accepted area, design, included systems, dates, suppliers and UUID evidence. |
| required_quality_disclosure | Primary-record coverage, conversions, unresolved UUIDs, provisional ranges and shared/secondary attribution. |
| update_trigger | Changed design, scope, supplier route, acceptance gate, recovered input or verified flow identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-53213` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53213 | Category and building boundary. |
| `faa-ac-150-5370-10` | official_guidance | https://www.faa.gov/airports/engineering/construction_standards | Airport construction items and acceptance record structure. |
