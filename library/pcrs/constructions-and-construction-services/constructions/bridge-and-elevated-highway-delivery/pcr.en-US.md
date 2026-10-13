---
pcr_id: pcr.constructions-and-construction-services.constructions.bridge-and-elevated-highway-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Bridge and elevated highway delivery

## 1. Scope and Applicability

This PCR covers the complete site-specific bridge or viaduct for all land-transport modes or pedestrians, and motor-vehicle elevated highways, built from metal, concrete or other evidenced materials. The product is the accepted civil entity with foundations/substructure, superstructure, deck and declared fixed works, not a construction service or a bag of materials. Steel/composite, cast-in-place, precast/prestressed concrete, timber, masonry arch and cable-supported routes remain within scope; every actual route needs project records and specific atomic exchanges. A representative row is conditional and never makes its material mandatory.

Exclude tunnels, ordinary non-elevated roads, railway roadbeds/track infrastructure sold separately, upstream steel bridge sections manufactured alone, operating services and unrelated water-supply aqueducts. Record integral bridge approaches only to explicitly agreed interfaces; do not silently include a whole connecting road/rail corridor. CPC notes also place vehicular/pedestrian underpasses and overpasses in 53211: disclose classification ambiguity and require reviewed applicability for such a project; never resolve overlap by code alone. River-crossing foundations and scour protection actually delivered are included, not river dredging or harbour works by default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.bridge-and-elevated-highway-delivery |
| classification_refs | CPC 3.0 53221 |
| covered_products | Complete accepted bridges, viaducts and motor-vehicle elevated highways with declared civil delivery scope |
| excluded_products | Tunnels; separate road/rail corridors; upstream components; construction/operating services; aqueducts |
| representative_product | One surveyed accepted complete bridge or elevated-highway entity |
| production_route | Actual foundations, temporary works, structural erection, deck/fixed works, tests and handover; conditional material routes |
| market_state | Completed on declared site, accepted with recorded traffic/use and fixed-work state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the documented land-transport/pedestrian crossing or elevated motor-vehicle route as a delivered civil entity |
| How much | One complete accepted entity; measured alignment length, each span, deck width and area by stated convention, lane/track/pedestrian configuration, clearances and interfaces |
| How well | Actual structure, material grades, design/performance and inspection evidence, loading/use restrictions, foundation geology and fixed safety/drainage configuration; no default loads |
| How long or cycle | One actual construction-to-handover event with dates; no assumed operational lifetime |
| reference_flow_link | reference_bridge |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed bridge or elevated highway |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Entity/site id; signed handover and dates; transport modes/use restrictions; alignment length/span schedule; deck width/area convention and geometry; clearances; structural/foundation route and material states; fixed works and approaches interfaces; temporary works; performance/acceptance evidence; upstream gates; excluded and unmeasured stages |

item is the display alias for public Item(s). All inventory and collection denominators refer to the same complete delivered entity. Actual deck area and length describe function/configuration; no average kg per bridge, km or m2 conversion is permitted. Comparisons require compatible actual function, geometry, structural performance and lifecycle scope.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_handover records one accepted whole entity; retain identical declared reference flow in every protocol. No assumed mass M. |
| geometry | reference configuration | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Retain measured deck area with surveyed length/width by defined geometry, span and interface records; these are qualifiers, not inventory output normalization. |
| electricity_basis | lv_power; mv_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve energy reference property. Use exact 3.6 MJ/kWh; retain supply voltage/country. |
| liquid_basis | concrete; mains_water; river_water; washwater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Measure volumes; only use measured density for actual material/state when converting mass. Diesel is a mass row; measured litres require actual density. |
| freight_basis | road_freight | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | t*km | Actual cargo tonnes times actual leg kilometres, per declared reference flow; not a reference-product mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented actual site before construction and supplied construction products/assets at explicit supplier/site gates before installation |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | Complete delivered bridge/elevated-highway entity within declared interfaces |
| recursive_input_rule | Reuse of an existing bridge/member is recorded once at actual received state; disclose inherited burdens and new interventions, never recursively rebuild an identical category |
| upstream_dataset_requirement | Link compatible material/component manufacture and actual freight separately with gate verification; disclose missing upstream links. No complete cradle-to-gate claim without them |
| disclosure | Actual site clearance/foundations/temporary works/erection/deck and inspection through handover; use, maintenance/replacement, traffic operation, later demolition and downstream treatment/credits excluded |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| construction_gate | dataset | Collect actual work packages through signed handover; upstream fabrication, delivery and site installation are distinct. Pre-existing demolition and temporary removal are disclosed separately from later end-of-life. | fhwa-fp24-bridges |
| route_completeness | inventory | Retain all actual material routes and fixed works. Add each missing specific atomic input/output, including site-batched constituents, anchorage hardware, coating, rail-specific deck and scour protection; row examples are not an exhaustive bill or universal recipe. | un-cpc-bridges-2025; fhwa-fp24-bridges |
| environment_gate | utilities; waste | Purchased water, direct intake, groundwater dewatering, captured washout and discharges are distinct. Only add individual measured constituents/compartments when evidenced; no mandatory invented emissions. Assess noise, vibration, sediment/turbidity, land/ecology disturbance and unmeasured releases explicitly. | epa-concrete-washout-2012; epa-construction-dust-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ground | Site investigation, preparation and earthworks | required | Actual delivered design: excavation, fill, access, drainage and environmental protection; pre-existing demolition separately disclosed | foreground | per declared reference flow |
| foundation | Foundation and substructure construction | required | Actual spread footings, driven piles, drilled shafts, piers and abutments; selected route only, including cofferdam and dewatering where needed | foreground | per declared reference flow |
| temporary | Temporary works installation, use and removal | conditional | Actual forms, falsework, shoring, cofferdam and launching support; reusable asset manufacture and operation distinguished | foreground | per declared reference flow |
| structure | Bridge superstructure erection and connections | required | Actual steel, cast-in-place/precast/prestressed concrete, timber, masonry or cable-supported route; all installed members and site operations | foreground | per declared reference flow |
| deck | Bearings, deck, surfacing and fixed bridge works | required | Actual complete delivered deck configuration; conditional bearings/joints/waterproofing, restraints, drainage, fixed lighting and rail-specific works | foreground | per declared reference flow |
| utilities | Equipment, site utilities and direct environment exchanges | required | All attributable construction/inspection activity; include subcontractors, generator combustion and measured controls without double counting | foreground | per declared reference flow |
| waste | Construction waste containment and export | conditional | Each actual segregated stream, washout and dewatering treatment; disclose contaminated soil and add its specific treatment flows | foreground | per declared reference flow |
| transport | Actual delivery and exported-waste transport | conditional | Only legs not already included in upstream datasets; onsite equipment movement stays in utilities | foreground | per declared reference flow |
| handover | Inspection and accepted entity handover | required | One actual complete entity; record construction test consumption, defects/rework and removal of temporary works | reference_product | per declared reference flow |

### Process: Site investigation, preparation and earthworks (`ground`)

#### Inputs

##### Product flows

###### Crushed stone foundation backfill (`stone_fill`)

Only the actual grading and moisture received; survey retained fill and weigh deliveries; no default thickness or compaction factor.

- Selected flow: Crushed stone foundation backfill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_ground; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ground`
- Sources: `fhwa-fp24-bridges`

#### Outputs

##### Waste flows

###### Non-contaminated excavated mineral soil for disposal (`soil_export`)

Only actual exported waste; survey bank and loose volumes separately, classify contamination and retain destination. On-site reused soil is an internal transfer.

- Selected flow: Non-contaminated excavated mineral soil for disposal
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_ground; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ground`
- Sources: `fhwa-fp24-bridges`

### Process: Foundation and substructure construction (`foundation`)

#### Inputs

##### Product flows

###### Fabricated steel tubular foundation pile (`pile`)

Only the actual driven steel-pile route; retain section, grade, coating, lengths, driving records and cutoffs. Concrete-filled pile concrete is separate.

- Selected flow: Fabricated steel tubular foundation pile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_foundation; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundation`
- Sources: `fhwa-fp24-bridges`

###### Ready-mixed structural concrete before placing (`concrete`)

Only actual foundation/substructure ready-mix for shafts, footings, piers and abutments. Retain mix tickets, placed geometry, pumping, vibration and curing; site batching requires separate constituents.

- Selected flow: Ready-mixed structural concrete before placing
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_foundation; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundation`
- Sources: `fhwa-fp24-bridges`

###### Hot rolled rebar steel (`rebar`)

Only actual hot-rolled reinforcing bars of documented grade and dimensions; sum weigh tickets/schedules for foundation/substructure cast-in-place work, separate cutting waste and exclude reinforcement already embedded in purchased precast units. This UUID applies only to low-alloy hot-rolled steel with C≤0.2%; otherwise retain another exact atomic rebar row with unresolved UUID.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_foundation; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundation`
- Sources: `fhwa-fp24-bridges`

### Process: Temporary works installation, use and removal (`temporary`)

#### Inputs

##### Product flows

###### Plywood formwork panel (`formwork`)

Only actual plywood formwork; record installed panel area, panel identity, manufacture boundary and a lifetime reuse ledger. Charge attributable manufacture share, not a new full panel burden every pour.

- Selected flow: Plywood formwork panel
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Actual attributable exchange from cp_temporary; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temporary`
- Sources: `fhwa-fp24-bridges`

###### Reusable steel cofferdam sheet pile (`sheet_pile`)

Only where a cofferdam uses actual steel sheet piles; preserve installation/removal and asset ledger, attributable manufacture share, dewatering and actual losses; temporary structure is not permanent output.

- Selected flow: Reusable steel cofferdam sheet pile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_temporary; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temporary`
- Sources: `fhwa-fp24-bridges`

### Process: Bridge superstructure erection and connections (`structure`)

#### Inputs

##### Product flows

###### Fabricated structural steel bridge girder (`steel_girder`)

For steel/composite route: record member marks, supplied fabricated/coated state, actual mass, crane or launching sequence, site connections and inspection. Mill steel is not a fabricated girder.

- Selected flow: Fabricated structural steel bridge girder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### Prestressed precast concrete bridge girder (`precast_girder`)

Only delivered complete prestressed girders; record each type, geometry and embedded steel/duct/anchorage scope, erection and joint works. Do not charge factory prestressing twice.

- Selected flow: Prestressed precast concrete bridge girder
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### Finished structural timber bridge beam (`timber_member`)

Timber bridges remain included; retain species, grade, preservative/glue state, measured member volume and moisture; raw sawnwood is not automatically a treated finished beam.

- Selected flow: Finished structural timber bridge beam
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### Cut natural stone bridge voussoir (`masonry_stone`)

For actual masonry arch route; retain stone type, finished dimensions, placement, centering and jointing quantities. Other-material routes require their own actual atomic exchanges.

- Selected flow: Cut natural stone bridge voussoir
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### Prestressing steel strand (`strand`)

Only site-applied prestressing; record grade, strand mass, duct length, jacking equipment, tension record and actual anchorage/grout; omit strands already included in precast supplier scope.

- Selected flow: Prestressing steel strand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### Finished steel bridge stay cable (`stay_cable`)

For cable-supported bridges: retain actual cable construction, sheathing, anchor scope, erection and stressing; suspension bridges record actual main cable, hangers and tower exchanges separately.

- Selected flow: Finished steel bridge stay cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### Steel prestressing anchorage (`anchor`)

Only separately supplied anchorage, with actual type/count and associated cable/strand scope; avoid counting an anchor already in a complete supplied cable.

- Selected flow: Steel prestressing anchorage
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### Cementitious prestressing duct grout (`grout`)

Only actual grouting; record formulation, batch masses, duct volume and injection/returns. If site mixed, split cement, each additive and mixing water; no prescribed recipe.

- Selected flow: Cementitious prestressing duct grout
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### High-strength structural steel bolt (`bolt`)

Only actual bolted joints; collect bolt grade/type/count and installation inspection; nuts and washers are separate atomic flows when supplied separately.

- Selected flow: High-strength structural steel bolt
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### Steel flux-cored welding wire (`weld_wire`)

Only actual flux-cored site welding; retain consumable specification and used mass; welding power and each shielding gas are separate, shop welds belong to supplied fabrication.

- Selected flow: Steel flux-cored welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### Ready-mixed structural concrete before placing (`structure_concrete`)

Only actual cast-in-place superstructure, separately measured by structural element; match delivered ready-mix to placed geometry, pump/vibration/curing and returns. Precast-contained concrete is not entered again. Site batching splits each constituent.

- Selected flow: Ready-mixed structural concrete before placing
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

###### Hot rolled rebar steel (`structure_rebar`)

Only actual separately supplied low-alloy hot-rolled C≤0.2% rebar for cast-in-place superstructure; retain grade/dimensions and weigh tickets; exclude steel embedded in complete supplied precast. Other grades need another identity.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_structure; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `fhwa-fp24-bridges`

### Process: Bearings, deck, surfacing and fixed bridge works (`deck`)

#### Inputs

##### Product flows

###### Laminated elastomeric bridge bearing (`bearing`)

Only an actual laminated elastomeric bearing; record drawings, rubber/steel scope, count and setting. Sliding/disc/roller/rocker bearings require their own exact rows; integral bridges disclose absent bearings.

- Selected flow: Laminated elastomeric bridge bearing
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange from cp_deck; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`
- Sources: `fhwa-fp24-bridges`

###### Steel bridge expansion joint (`joint`)

Only actual steel joint devices, with movement/type/length and embedded scope; jointless structures disclose absence. Installation grout and seal components not included by supplier are separate.

- Selected flow: Steel bridge expansion joint
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange from cp_deck; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`
- Sources: `fhwa-fp24-bridges`

###### Bituminous bridge-deck waterproofing sheet (`waterproof`)

Only actual sheet membrane compatible with bridge-deck specification; measure purchased area including laps/cutoffs; primers are separate.

- Selected flow: Bituminous bridge-deck waterproofing sheet
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Actual attributable exchange from cp_deck; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`
- Sources: `fhwa-fp24-bridges`

###### Asphalt mixture (`asphalt`)

Only actual purchased aggregate/binder/filler asphalt mixture for surfacing; record binder/mix design, temperature, supplier gate, weighed deliveries and rejects. Actual cement-concrete, timber or railway bridge deck surfacing requires its own rows.

- Selected flow: Asphalt mixture `ad29a865-2fd6-41da-99d2-9669b9c7984d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_deck; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`
- Sources: `fhwa-fp24-bridges`

###### Fabricated steel bridge railing panel (`railing`)

Only actual railing with geometry, anchoring and corrosion-protection state; road restraint barriers and pedestrian parapets are distinguished.

- Selected flow: Fabricated steel bridge railing panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_deck; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`
- Sources: `fhwa-fp24-bridges`

###### Polyvinyl chloride bridge drainage pipe (`drain`)

Only actual PVC drainage pipe; record pipe dimensions, mass, installation and outfall; other polymer/metal pipes, scuppers, lighting and railway-specific fixed works must be added separately when delivered.

- Selected flow: Polyvinyl chloride bridge drainage pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_deck; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`
- Sources: `fhwa-fp24-bridges`

###### Ready-mixed structural concrete before placing (`deck_concrete`)

Only actual cast-in-place bridge deck, separately measured by structural element; match delivered ready-mix to placed geometry, pump/vibration/curing and returns. Precast-contained concrete is not entered again. Site batching splits each constituent.

- Selected flow: Ready-mixed structural concrete before placing
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_deck; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`
- Sources: `fhwa-fp24-bridges`

###### Hot rolled rebar steel (`deck_rebar`)

Only actual separately supplied low-alloy hot-rolled C≤0.2% rebar for cast-in-place bridge deck; retain grade/dimensions and weigh tickets; exclude steel embedded in complete supplied precast. Other grades need another identity.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_deck; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deck`
- Sources: `fhwa-fp24-bridges`

### Process: Equipment, site utilities and direct environment exchanges (`utilities`)

#### Inputs

##### Product flows

###### Alternating current (`lv_power`)

Only actual CN user-side grid supply below 1 kV; retain meter voltage/geography. Other supply requires another compatible identity. Generated electricity is not this purchased grid input.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange from cp_utilities; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fhwa-fp24-bridges`

###### Alternating current (`mv_power`)

Only actual CN user-side grid supply at 1–35 kV. Keep separately metered circuits distinct from the LV row and never count the same supply twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange from cp_utilities; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fhwa-fp24-bridges`

###### Diesel fuel (`diesel`)

Only actual diesel used in excavation, piling, pumps, cranes, launching and generators; collect stage/equipment mass or volume, density, measured supplier LHV and fossil/bio share. Foreground fuel combustion is separated from fuel production and from generator electricity already containing combustion.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_utilities; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fhwa-fp24-bridges`

###### Treated mains water supplied to construction site (`mains_water`)

Only purchased treated water for actual curing, cleaning or dust suppression; meter end use and avoid re-entering it as a direct natural resource withdrawal.

- Selected flow: Treated mains water supplied to construction site
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_utilities; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fhwa-fp24-bridges`

##### Elementary flows

###### river water (`river_water`)

Only documented direct river intake; record location, meter, fresh-water body and return; excludes groundwater, seawater, purchased water and mere transit dewatering. Retain country of extraction in process location for compatible characterization.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_utilities; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `fhwa-fp24-bridges`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`co2`)

Only quantified actual fossil-carbon combustion to unspecified air, immediate release; derive from measured fuel fossil-carbon mass and oxidation evidence or a compatible engine measurement. No universal emission factor; change identity for known different subcompartment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_utilities; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### nitrogen monoxide (`no`)

Only measured/model-supported NO, CAS 10102-43-9, immediate unspecified-air release. Aggregated NOx reported as NO2 equivalent cannot establish this molecular exchange.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_utilities; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### nitrogen dioxide (`no2`)

Only measured/model-supported NO2, CAS 10102-44-0, immediate unspecified-air release; separate NO and N2O. Retain engine/load/aftertreatment and measurement uncertainty.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_utilities; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### particles (PM2.5 - PM10) (`dust`)

Only quantified actual 2.5–10 micrometre airborne fraction to unspecified air from excavation/handling/traffic; EPA qualitative evidence does not provide a project default rate. PM10 includes PM2.5 and cannot be substituted for this disjoint fraction.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_utilities; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-construction-dust-2010`

###### particles (PM2.5) (`fine_pm`)

Only actually quantified particles below 2.5 micrometres to unspecified air, immediate release from measured combustion or dust; no default factor or assumed occurrence. Keep source activity and control efficiency evidence; avoid overlapping total PM10 inventory.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_utilities; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-construction-dust-2010`

### Process: Construction waste containment and export (`waste`)

#### Outputs

##### Waste flows

###### Hardened concrete construction offcut (`concrete_waste`)

Only actual segregated hardened concrete waste; quantify mass and destination, separate wet returned concrete, demolition and mixed rubble.

- Selected flow: Hardened concrete construction offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_waste; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `fhwa-fp24-bridges`

###### Steel construction offcut for recycling (`steel_waste`)

Only actual exported construction scrap; weigh, record recipient/gate and treatment; do not assume recycling yield or avoided virgin-steel credit.

- Selected flow: Steel construction offcut for recycling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_waste; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `fhwa-fp24-bridges`

###### Contained concrete-equipment washwater for treatment (`washwater`)

Only collected washwater crossing the waste boundary; meter volume and solids/alkalinity, record treatment and reuse. It is not automatically a freshwater environmental discharge.

- Selected flow: Contained concrete-equipment washwater for treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_waste; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

### Process: Actual delivery and exported-waste transport (`transport`)

#### Inputs

##### Product flows

###### freight transport (`road_freight`)

Only the actual supplied road-freight legs, at the declared transport-service supply boundary, not included by upstream products; retain route, cargo, load and empty-return evidence. The public mass*distance property has kg*km as reference unit and t*km = 1000 kg*km; collect cargo tonnes times distance in km. Distinguish off-site waste transport and other transport modes; add other compatible identities as needed.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t*km
- Amount rule: Actual attributable exchange from cp_transport; preserve physical state/unit and no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport`
- Sources: `fhwa-fp24-bridges`

### Process: Inspection and accepted entity handover (`handover`)

#### Outputs

##### Product flows

###### Completed bridge or elevated highway (`reference_bridge`)

One complete delivered entity with surveyed alignment/span/deck configuration and signed handover; construction tests and temporary-works removal belong to the actual event, no assumed lifetime.

- Selected flow: Completed bridge or elevated highway
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `un-cpc-bridges-2025`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| partition_first | all processes | Separate work packages, equipment meters, deliveries and shared assets before allocation. Direct measured activity is preferred; allocate only unresolved shared quantities with documented causal machine-hours, load, distance or actual work quantities from cp_assets, and preserve a balance. No default cost or mass shares. |  |
| reuse_conservation | temporary; utilities | For each reusable form, cofferdam member, crane or launching asset, preserve one manufacture-burden ledger across projects, periods and uses. Cumulative allocated fraction must not exceed one; service denominator needs actual cumulative activity or source-supported life. Unknown denominator requires review. Operation and consumable loss are measured separately; do not reset manufacture to 100% every project. |  |
| waste_gate | waste; ground | Retain waste at actual export gate and distinguish reuse, recycling, treatment and disposal. No automatic avoided-material credit. If shared outputs require allocation, justify the actual relation and disclose sensitivity; no assumed scrap price/yield. |  |

Manufacture inputs for shared equipment and reusable components retain the manufacturing dataset’s actual native reference property: mass, count or area as applicable. For formwork distinguish deployed panel area from the reusable panel stock and its dimensionless manufacture share f. If manufacture is natively per m2, the attributed area exchange is measured same-configuration panel stock area A multiplied by f, not each pour’s full deployed area. If upstream manufacture is per kg or item, link that same stock area to independently measured mass M (kg/m2 = M/A) or panel count N (item/m2 = N/A), recording panel ID, dimensions, thickness, state and source inventory; multiply the corresponding stock quantity by the same f once. Keep installation/use records separate from the manufacture exchange and never add both native-area and converted manufacture burdens. cp_assets stores the stock quantity, conversion evidence, upstream reference and fraction; unsupported conversions require review, with no default density or panel mass. cp_assets retains the actual beneficiary entity count and cumulative cross-project fractions; equipment mass never changes the bridge reference flow. Unknown lifetime, cumulative activity or beneficiary relation requires review, not a zero burden.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_ground | ground | Each actual atomic exchange and declared entity | foreground_records | Site, geology, bank/loose survey, deliveries, soil destinations and drainage records | Calibrated meters, weigh tickets, surveyed geometry, supplier records, equipment logs and signed inspection; reconcile each work package and retain uncertainties | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, activity, meter interval and final handover | Full actual construction period including subcontractors and unmetered intervals | Declared site/entity and attributable off-site work | per declared reference flow | Original records, calibration, geometry/ticket reconciliation, gate/identity evidence and signed acceptance |
| cp_foundation | foundation | Each actual atomic exchange and declared entity | foreground_records | Pile/shaft dimensions, logs, concrete tickets, reinforcement, pump/vibration/curing use, excavation and acceptance | Calibrated meters, weigh tickets, surveyed geometry, supplier records, equipment logs and signed inspection; reconcile each work package and retain uncertainties | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, activity, meter interval and final handover | Full actual construction period including subcontractors and unmetered intervals | Declared site/entity and attributable off-site work | per declared reference flow | Original records, calibration, geometry/ticket reconciliation, gate/identity evidence and signed acceptance |
| cp_temporary | temporary | Each actual atomic exchange and declared entity | foreground_records | Asset ids, panel geometry, installation/removal, actual repeated use, lifetime burden ledger, unrecovered loss | Calibrated meters, weigh tickets, surveyed geometry, supplier records, equipment logs and signed inspection; reconcile each work package and retain uncertainties | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, activity, meter interval and final handover | Full actual construction period including subcontractors and unmetered intervals | Declared site/entity and attributable off-site work | per declared reference flow | Original records, calibration, geometry/ticket reconciliation, gate/identity evidence and signed acceptance |
| cp_structure | structure | Each actual atomic exchange and declared entity | foreground_records | As-built spans, member marks, masses/volumes/counts, supplier included scope, crane/launch records, joints, welds, stressing and alignment | Calibrated meters, weigh tickets, surveyed geometry, supplier records, equipment logs and signed inspection; reconcile each work package and retain uncertainties | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, activity, meter interval and final handover | Full actual construction period including subcontractors and unmetered intervals | Declared site/entity and attributable off-site work | per declared reference flow | Original records, calibration, geometry/ticket reconciliation, gate/identity evidence and signed acceptance |
| cp_deck | deck | Each actual atomic exchange and declared entity | foreground_records | Deck lengths/widths/area convention, layer tickets, support/joint drawings, drainage, restraint and acceptance scope | Calibrated meters, weigh tickets, surveyed geometry, supplier records, equipment logs and signed inspection; reconcile each work package and retain uncertainties | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, activity, meter interval and final handover | Full actual construction period including subcontractors and unmetered intervals | Declared site/entity and attributable off-site work | per declared reference flow | Original records, calibration, geometry/ticket reconciliation, gate/identity evidence and signed acceptance |
| cp_utilities | utilities | Each actual atomic exchange and declared entity | foreground_records | Stage/equipment id, metered electricity, voltage/country, diesel stock/density/LHV/carbon fraction, end-use water, emissions species and medium | Calibrated meters, weigh tickets, surveyed geometry, supplier records, equipment logs and signed inspection; reconcile each work package and retain uncertainties | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, activity, meter interval and final handover | Full actual construction period including subcontractors and unmetered intervals | Declared site/entity and attributable off-site work | per declared reference flow | Original records, calibration, geometry/ticket reconciliation, gate/identity evidence and signed acceptance |
| cp_waste | waste | Each actual atomic exchange and declared entity | foreground_records | Material/state, wet/dry weight, destination, treatment, washwater volume, solids and water balance | Calibrated meters, weigh tickets, surveyed geometry, supplier records, equipment logs and signed inspection; reconcile each work package and retain uncertainties | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, activity, meter interval and final handover | Full actual construction period including subcontractors and unmetered intervals | Declared site/entity and attributable off-site work | per declared reference flow | Original records, calibration, geometry/ticket reconciliation, gate/identity evidence and signed acceptance |
| cp_transport | transport | Each actual atomic exchange and declared entity | foreground_records | Cargo mass, origin/destination, distance/mode/load/empty returns, included dataset gate and actual allocation | Calibrated meters, weigh tickets, surveyed geometry, supplier records, equipment logs and signed inspection; reconcile each work package and retain uncertainties | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, activity, meter interval and final handover | Full actual construction period including subcontractors and unmetered intervals | Declared site/entity and attributable off-site work | per declared reference flow | Original records, calibration, geometry/ticket reconciliation, gate/identity evidence and signed acceptance |
| cp_handover | handover | Each actual atomic exchange and declared entity | foreground_records | Entity/site id, signed acceptance, as-built alignment/span/width/deck area, supported modes, structural performance, included and excluded fixed works, dates | Calibrated meters, weigh tickets, surveyed geometry, supplier records, equipment logs and signed inspection; reconcile each work package and retain uncertainties | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, activity, meter interval and final handover | Full actual construction period including subcontractors and unmetered intervals | Declared site/entity and attributable off-site work | per declared reference flow | Original records, calibration, geometry/ticket reconciliation, gate/identity evidence and signed acceptance |
| cp_assets | temporary; utilities | Shared manufacture/activity allocation | foreground_records | Asset id; manufacture burden; project/period allocations; actual hours/cycles; evidenced lifetime or cumulative denominator; numerator and prior cumulative fraction; native manufacturing reference property/unit; panel stock area A; same-stock measured mass M or panel count N; configuration/state and conversion evidence | Reconcile one persistent asset ledger against all project records; missing denominator is review | fraction; hours; cycles; m2; kg; item | Each use and allocation update | All covered projects and asset service periods | Shared asset and all uses | per declared reference flow | Balanced fractions, provenance, no double-counted operation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory rows | Aggregate each attributable atomic exchange for the same complete entity: q_ref = q_total / N with N = 1 accepted entity. Keep raw property/unit; no normalization by arbitrary mass, area, cost or lifetime. | cp_ground; cp_foundation; cp_temporary; cp_structure; cp_deck; cp_utilities; cp_waste; cp_transport; cp_handover | per declared reference flow |  |
| electricity | lv_power; mv_power | E_MJ = E_kWh * 3.6 | cp_utilities | MJ per declared reference flow |  |
| liquid_mass | diesel | m_kg = V_L * rho_kg_per_L at documented temperature and fuel state; preserve diesel Mass. LHV may characterize use but does not rewrite flow property. | cp_utilities | kg per declared reference flow |  |
| freight | road_freight | Sum cargo mass in t times actual route distance in km for each attributed leg; reconcile allocation/empty-return model and upstream included transport. | cp_transport | t*km per declared reference flow |  |
| emission_quantification | elementary outputs | Use each measured species release or verified project-specific engine/dust model. Fossil CO2: measured fossil carbon * documented oxidized fraction * 44/12; retain fuel chemistry and uncertainty. NOx totals do not define molecular NO/NO2; PM fractions are disjoint. No universal factors supplied. | cp_utilities | kg per declared reference flow |  |
| asset_fraction | temporary; utilities | Attributable manufacture burden = asset manufacture burden * documented use fraction; reconcile cumulative fractions across all projects ≤ 1, no resetting or unsupported life. | cp_assets | attributed burden per declared reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_configuration | reference_bridge | Complete actual entity, surveyed geometry, span list and fixed-work interfaces must match signed acceptance and all inventory. No invented dimensions, grades, loads, quantities or life. | cp_handover |
| quantity_reconciliation | all rows | Reconcile deliveries, stocks, installed quantities, returned products and waste with state/moisture; quantify meter gaps and uncertainty. No default loss or concrete/steel ratio. | all collection protocols |
| identity_environment | all rows | Require compatible public identity, actual reference property/unit group, material/state/source and medium/submedium. Blank UUID requires exact unresolved row and prevents fully identity-resolved inventory. Unmeasured activity is disclosed, not zero. | direct identity and project evidence |
| representativeness | dataset | Record actual time/site/technology, all subcontracted work, supplier gates, estimation sources and later-stage exclusions. Historic guidance supports stated qualitative uses only; assess independent review. | project evidence and cited scope |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_entity | reference_bridge | Require one accepted whole entity with all reference qualifiers, actual surveyed geometry, span/approach interfaces and declared traffic use; partial span/material-kit data cannot claim this reference product. | un-cpc-bridges-2025 |
| validate_basis | all rows | All numerator properties/units, output 1 item, protocols and calculations must use the same declared reference flow; reject unsupported conversions or nonconserved reusable-asset shares. |  |
| validate_completeness | dataset | Check actual foundation/substructure, superstructure, temporary erection support, deck/fixed works, transport, utilities, waste and handover against as-built work packages. Every actual exchange must be atomic and collected; absence requires evidence, unknown scope requires review. | fhwa-fp24-bridges |
| validate_environment | utilities; waste | Check species/fossil origin, immediate versus long-term, medium/submedium and actual route. Contained waste is not environmental discharge; diesel combustion and embedded upstream combustion cannot both be charged. NO, NO2, N2O and PM size fractions remain distinct. | epa-concrete-washout-2012; epa-construction-dust-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Construction-to-handover inventory of the declared complete bridge/elevated highway; compatible upstream linking; comparisons only with matched actual function, geometry, performance and scope |
| excluded_use | Full lifetime or traffic operation; default maintenance/demolition; automatic upstream completeness; kg/km/m2 proxy bridge; design/legal/methodology approval |
| required_metadata | Reference qualifiers, construction dates, routes, work-package coverage, material supplier gates, geometry and fixed scope, property/unit evidence, allocations and environmental coverage |
| required_quality_disclosure | Identity/evidence gaps, uncertainty, unmetered stages, missing background/upstream, excluded later stages and review limitations |
| update_trigger | Changed entity function/geometry, structural or foundation route, delivered scope, supplier gate, actual inventory or evidence/identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-bridges-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed p.279 / PDF p.279, 53221 and adjacent entries. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category boundary only; not a recipe or justification for every process. |
| fhwa-fp24-bridges | standard | FHWA, FP-24 (2024), sections 551–557, 562, 564–565: printed pp.448, 461, 489, 503, 507, 527, 545, 561, 565 (PDF pp.465, 478, 506, 520, 524, 544, 562, 578, 582). https://highways.dot.gov/sites/fhwa.dot.gov/files/FP-24.pdf | Bridge work-package anatomy and records; US federal contract context, applies as a specification only when designated. No transferred mix, design load, dimensional default, service life or compliance claim. |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice Concrete Washout, EPA-833-F-11-006, February 2012, PDF pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Historical containment/reuse and waste-versus-discharge distinction only; no universal water ratio, factor or local discharge approval. |
| epa-construction-dust-2010 | official_guidance | US EPA AP-42 13.2.3 Heavy Construction Operations, January 1995 corrected February 2010, printed pp.13.2.3-1–2 / PDF pp.1–2. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Historical qualitative activity, soil/moisture and dust relationship only; no generic area/month emission factor adopted. |
