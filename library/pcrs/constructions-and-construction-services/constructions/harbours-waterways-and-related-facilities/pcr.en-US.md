---
pcr_id: pcr.constructions-and-construction-services.constructions.harbours-waterways-and-related-facilities
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Harbours, waterways and related facilities

## 1. Scope and Applicability

This PCR covers construction of a declared, site-accepted harbour or navigable-waterway asset: a navigation channel or basin, quay, pier, jetty, dock, breakwater, lock or integral related marine work. A project may contain a navigation-formation branch, a marine-structure branch, or both; report actual contracted components and do not treat them as interchangeable functional outputs. Exclude vessels, cargo-handling and port operations, ordinary water-supply conduits, dams, irrigation and flood-control works, and separately contracted buildings. New-work dredging belongs here only when it creates or improves the declared navigation asset; routine maintenance dredging after handover is outside the construction gate. [unsd-cpc-53232; pianc-navigation-infrastructure-2014]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.harbours-waterways-and-related-facilities |
| classification_refs | CPC 3.0 53232, Harbours, waterways and related facilities. |
| covered_products | Accepted navigation channels and basins, port berths, quays, piers, jetties, docks, breakwaters, locks and integral marine facilities. |
| excluded_products | Vessels, port operations, routine maintenance dredging, ordinary water-supply conduits, dams, irrigation and flood-control works, separately measured buildings. |
| representative_product | One uniquely identified accepted marine civil-works asset or bounded contract segment. |
| production_route | Conditional new-work dredging and sediment placement, marine foundation and structure installation, then inspection and acceptance. |
| market_state | Installed and accepted civil infrastructure at a named site; operating service is not the output. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One declared navigation or port civil-works asset or bounded contract segment. |
| How much | 1 accepted asset or segment; separately report as-built channel length, dredged volume, berth length, structure dimensions and bill of quantities as applicable. |
| How well | Contract geometry, navigation clearance, structural and environmental acceptance criteria met. |
| How long or cycle | One new-construction or capital-improvement contract through signed handover; service life is separate scenario metadata. |
| reference_flow_link | `accepted_marine_asset` from `inspection_handover`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted asset or contract segment |
| Reference product flow | Accepted harbour, waterway or related marine facility; UUID unresolved |
| Reference flow property | Item/count; UUID unresolved |
| Reference unit group | Item/count; UUID unresolved |
| Reference unit | item |
| Required qualifiers | Asset type and navigation function; project and segment identifier; site and water body; as-built geometry and dredge datum; sediment destination; structural specification; included interfaces; acceptance test and handover date. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `asset_count` | reference product | Count, UUID unresolved | item | Count each accepted bounded asset or segment once; do not equate unlike asset types merely because each counts as one. |
| `dredged_volume` | new-work dredging | Volume | m3 | Use surveyed in-situ excavation volume and common datum; distinguish loose transported volume and dry sediment mass. |
| `structure_quantity` | constructed works | Mass, volume or length | kg, m3 or m | Convert bills to installed quantities using documented density or dimensions; preserve material identity. |
| `energy_transport` | plant and shipment | Energy, fuel mass or mass × distance | kWh, MJ, kg or t·km | Keep carriers and modes separate; use actual transported mass and loaded distance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed pre-work bathymetry, shoreline and seabed, existing structures, sediment quality and contract-design baseline. |
| starting_condition_role | Physical baseline for new-work removal and installation, not a burden-free completed facility. |
| product_classification_scope | One accepted harbour, waterway or related marine civil-works asset or bounded contract segment. |
| recursive_input_rule | Purchased marine components and services enter at supply gate; a completed harbour or waterway asset cannot silently re-enter as raw material. |
| upstream_dataset_requirement | Link materials, energy, water, transport, construction services and disposal or beneficial-use treatment to compatible upstream datasets. |
| disclosure | Declare branch selection, pre-work condition, included assets, design and acceptance gate, sediment quality and destination, shared operations and gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `new_work_gate` | entire asset | Include documented new construction or capital improvement through signed engineering handover; exclude port operation, vessel activity and later maintenance dredging. | `pianc-navigation-infrastructure-2014`; `usace-montauk-harbor` |
| `sediment_route` | navigation formation | For each excavated lot document surveyed source, quality, transport and approved disposal or beneficial-use handoff; do not presume saleable product status. | `usace-montauk-harbor`; `imo-dredged-material-assessment` |
| `structure_interface` | marine structures | Include foundations, materials and in-scope installation; separately contracted buildings and equipment enter only as linked datasets. | `pianc-navigation-infrastructure-2014` |
| `branch_handoff` | both branches | A formation or tested-structure handoff is intermediate; only the designated accepted asset is the reference product. | `pianc-navigation-infrastructure-2014` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `navigation_formation` | Navigation formation and sediment routing | conditional | New-work channel, basin or access geometry requires dredging. | Independently remove source-bed sediment and hand it to approved placement; survey formed geometry. | In-situ m3, sediment mass and destination records. |
| `marine_structure` | Marine foundation and structure installation | conditional | Contract includes quay, pier, jetty, dock, breakwater, lock or integral structure. | Install measured materials and test structure. | Installed quantities and accepted dimensions. |
| `inspection_handover` | Integrated inspection and handover | required | All included branches reach engineering acceptance. | Reconcile as-built geometry, material and sediment records; release one declared asset. | Signed accepted asset or segment. |

### Process: Navigation formation and sediment routing (`navigation_formation`)

#### Inputs

##### Product flows

###### Dredging plant energy (`dredging_energy`)

Record directly controlled fuel and electricity by carrier, excluding energy embedded in contracted dredging services.

- Selected flow: Dredging plant energy by recorded carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Reconcile vessel and plant logs for new-work excavation only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Project energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kWh-equivalent/item
  - Basis: provisional broad screen; replace with project plant and dredge-volume data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sediment placement transport (`sediment_transport`)

Include separately measured transport to approved placement or beneficial-use gate by actual mode and mass-distance.

- Selected flow: Freight transport service by recorded mode
- Flow property / unit: Mass × distance / t·km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Amount rule: Sum transported tonnes × loaded distance for each sediment lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sediment`
- Range: Sediment transport work screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: t·km/item
  - Basis: provisional broad screen; lot mass and route records govern
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Surveyed navigation formation (`surveyed_formation`)

The as-built channel or basin reaches the geometry test gate, but is not a second final asset.

- Selected flow: Surveyed navigable channel or basin formation; UUID unresolved
- Flow property / unit: Count / item
- Amount rule: Count one surveyed formation; report in-situ removed volume and as-built navigable geometry separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sediment`
- Range: Formation handoff completeness
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: formation/item
  - Basis: one conditional formation handoff per declared branch
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dredged sediment for disposal (`disposal_sediment`)

Record sediment as waste only for lots sent to approved disposal; beneficial-use lots require separate recorded product handoff and no automatic credit.

- Selected flow: Dredged sediment for disposal; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconcile wet and dry mass with each placement receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sediment`
- Sources: `usace-montauk-harbor`; `imo-dredged-material-assessment`
- Range: Disposal sediment mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000000
  - Unit: kg/item
  - Basis: provisional project screen; compare with surveyed volume, density and beneficial-use lots
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Marine foundation and structure installation (`marine_structure`)

#### Inputs

##### Product flows

###### Installed marine construction materials (`marine_materials`)

Record concrete, steel, armour stone, piles and other installed products as separate concrete exchanges from the bill of quantities; do not assume a generic material UUID.

- Selected flow: Installed materials by specification; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, returned and rejected mass by material class.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Installed-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000000
  - Unit: kg/item
  - Basis: provisional project-scale screen; as-built bill governs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Contracted marine installation service (`marine_installation_service`)

Include specialist pile driving, caisson placement or structural installation only where procured as a separate work package; do not also count its embedded plant energy as direct energy.

- Selected flow: Marine installation service by contract work package; UUID unresolved
- Flow property / unit: Contract service quantity / declared unit
- Amount rule: Record certified installed service quantity and unit from the work order.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_installation_service`
- Range: Installation service completeness
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: declared service unit/item
  - Basis: provisional project-scale screen; certified work order governs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Marine works construction energy (`structure_energy`)

Record directly controlled installation equipment by actual carrier; avoid counting subcontractor energy twice.

- Selected flow: Marine construction energy by recorded carrier
- Flow property / unit: Energy or fuel mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Reconcile plant fuel and electricity by installation work package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Structure-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kWh-equivalent/item
  - Basis: provisional broad screen; actual plant use governs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Tested marine structure (`tested_structure`)

Pass only compliant installed structure to handover; report berth length, volume or unit count as appropriate.

- Selected flow: Tested quay, pier, dock, breakwater or lock; UUID unresolved
- Flow property / unit: Count / item
- Amount rule: Count one branch-compliant tested structure or bounded segment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Structure handoff completeness
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: structure/item
  - Basis: one conditional structure handoff per declared branch
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected construction material (`rejected_material`)

Record off-spec or discarded installation material at its actual treatment handoff, not as installed mass.

- Selected flow: Rejected marine construction material by substance; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Sum weighed rejected lots excluding accepted reuse in the same node.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Rejected-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000000
  - Unit: kg/item
  - Basis: provisional screen; project material balance governs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Integrated inspection and handover (`inspection_handover`)

#### Inputs

##### Product flows

###### Navigation formation handoff (`formation_handoff`)

When the navigation branch is selected, transfer its surveyed formation once to integrated acceptance; do not re-add upstream dredging burdens.

- Selected flow: Surveyed navigable channel or basin formation; UUID unresolved
- Flow property / unit: Count / item
- Amount rule: Match the `surveyed_formation` item output and accepted as-built geometry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Formation transfer completeness
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: formation/item
  - Basis: one transfer if the navigation branch is selected; otherwise zero
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Marine structure handoff (`structure_handoff`)

When the structure branch is selected, transfer its tested structure once to integrated acceptance; do not re-add upstream installation burdens.

- Selected flow: Tested quay, pier, dock, breakwater or lock; UUID unresolved
- Flow property / unit: Count / item
- Amount rule: Match the `tested_structure` output and structural test record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Structure transfer completeness
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: structure/item
  - Basis: one transfer if the structure branch is selected; otherwise zero
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted harbour or waterway asset (`accepted_marine_asset`)

Release one asset after all included branch geometry, structure, sediment and environmental records pass the contract gate.

- Selected flow: Accepted harbour, waterway or related marine facility; UUID unresolved
- Flow property / unit: Count / item
- Amount rule: Count signed accepted assets or bounded segments, never interim handoffs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted asset
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Range: Accepted asset count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: item/item
  - Basis: one bounded accepted reference asset
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sediment_fate` | dredged lots | Classify each lot by measured quality and actual approved destination. Credit beneficial-use material only with independently qualified recipient and handoff; otherwise retain waste-treatment burdens. | `usace-montauk-harbor`; `imo-dredged-material-assessment` |
| `shared_work` | common plant and temporary works | Attribute shared activity by work package, hours, measured quantities or a declared causal driver; count each burden once. | `pianc-navigation-infrastructure-2014` |
| `no_double_asset` | branch outputs | Interim navigation formation and tested structures are internal handoffs, not co-products automatically counted with the final asset. | `pianc-navigation-infrastructure-2014` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_sediment` | `navigation_formation` | dredge volume, lots and transport | survey, sampling, load and receipt logs | source cell; pre/post survey; datum; in-situ m3; dry/wet mass; quality; destination; route km | survey and reconcile each lot to placement receipt | m3, kg, km | each survey and load | new-work window | project reach and placement sites | sum by source and destination; calculate t·km by mode | survey datum, analyses and receipts |
| `cp_energy` | `navigation_formation`; `marine_structure` | direct plant energy | meter, bunkering and plant logs | carrier; meter; volume or mass; work package; dates | reconcile to branch and avoid subcontract overlap | kWh, MJ or kg | each shift or delivery | construction period | included works | sum by branch and carrier | readings and invoices |
| `cp_materials` | `marine_structure` | installed and rejected materials | bill, delivery and waste records | class; specification; density; delivered; installed; returned; rejected | weigh or measure and reconcile | kg or m3 | each lot | installation period | included structures | sum by class; convert with recorded density | signed bills and receipts |
| `cp_installation_service` | `marine_structure` | contracted specialist installation | certified work order | task; provider; service quantity and unit; equipment inclusion; date | reconcile certified work to installed structure | declared service unit | each work package | installation period | included structures | sum by non-overlapping task and unit | signed certificate and subcontract scope |
| `cp_acceptance` | `inspection_handover` | branch and final acceptance | as-built, test and handover records | segment; branch; dimensions; tests; defects; date | engineer sign-off | item, m or m3 | each gate | contract completion | named segment | count accepted segment once | signed acceptance and surveys |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_in_situ_volume` | navigation formation | Integrate pre/post-bed survey difference over contract reach with common datum. | surveyed grids and datum | m3 in situ | `usace-montauk-harbor` |
| `calc_sediment_tkm` | placement transport | Sum each load's declared-basis tonnes × loaded distance; never silently mix wet and dry bases. | load mass, mode, distance | t·km by mode | `usace-montauk-harbor` |
| `calc_material_balance` | structural materials | Delivered = installed + returned + rejected + stock change within uncertainty. | delivery, as-built, return and waste records | kg by material | `pianc-navigation-infrastructure-2014` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_design_gate` | reference asset | Distinguish new work from maintenance and declare design, segment, branch and acceptance. | contract and handover files |
| `quality_sediment` | dredged material | Reconcile surveyed volume, quality, mass and every destination. | surveys, samples and receipts |
| `quality_identity` | all exchange flows | Confirm concrete UUID against role, type, property, unit and context; leave unsupported UUIDs blank. | flow detail and support-row evidence |
| `quality_reconciliation` | materials and energy | Reconcile plant, supplier and disposal records with cut-offs and uncertainty. | meters, invoices and material balances |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference asset | Reject a dataset mixing unlike facility types without component quantities or including post-handover operation as construction. | `unsd-cpc-53232`; `pianc-navigation-infrastructure-2014` |
| `validate_branch` | process graph | Require at least one of `navigation_formation` or `marine_structure`; each selected branch must provide one matching input handoff to `inspection_handover`. | `pianc-navigation-infrastructure-2014` |
| `validate_sediment` | navigation formation | If dredging is included, require common-datum surveys, sediment quality and complete placement ledger; do not assume every lot is a product. | `usace-montauk-harbor`; `imo-dredged-material-assessment` |
| `validate_structure` | marine structures | If structures are included, reconcile installed/rejected materials to the as-built asset; tested structure remains interim. | `pianc-navigation-infrastructure-2014` |
| `validate_identity` | every flow | A final concrete process exchange requires verified UUID; provisional Flow Set coverage is not itself an exchange UUID. | `pianc-navigation-infrastructure-2014` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Project-specific foreground construction package for reviewed secondary or background construction data. |
| downstream_use | Process and lifecycle-model projections for the stated marine asset, branch and engineering gate. |
| allowed_use | Compare projects only after aligning facility function, design geometry, sediment route, site and coverage. |
| excluded_use | Generic port operations, shipping, routine maintenance dredging, or another facility type without re-modelling. |
| required_metadata | Site and water body; segment; design and as-built dimensions; branches; baseline; sediment quality and destination; material and energy; handover. |
| required_quality_disclosure | Coverage, survey datum, conversions, material balance, UUID gaps, monitoring, uncertainty and cut-offs. |
| update_trigger | Change in design, geometry, sediment destination, source condition, installation route, gate, Flow Set or flow identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-53232` | official_guidance | United Nations Statistics Division, CPC 2.1 explanatory note for 53232, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53232 | Asset examples and boundary; checked-in CPC 3.0 label controls mapping. |
| `pianc-navigation-infrastructure-2014` | official_guidance | PIANC, Initial Assessment of Environmental Effects of Navigation and Infrastructure Projects, https://www.pianc.org/publication/initial-assessment-of-environmental-effects-of-navigation-and-infrastructure-projects/ | New-work dredging, port and waterway structures and route boundary. |
| `usace-montauk-harbor` | official_guidance | US Army Corps of Engineers, Lake Montauk Harbor navigation improvement project, https://www.nan.usace.army.mil/Missions/Civil-Works/Projects-in-New-York/Lake-Montauk-Harbor/ | Channel deepening, sediment quantities and placement destinations. |
| `imo-dredged-material-assessment` | official_guidance | International Maritime Organization, Waste Assessment Guidance for Dredged Material, https://www.imo.org/en/ourwork/environment/pages/wag-default.aspx | Sediment quality and controlled disposal decision. |
