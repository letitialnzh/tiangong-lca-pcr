---
pcr_id: pcr.constructions-and-construction-services.constructions.irrigation-and-flood-control-waterworks
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Irrigation and flood control waterworks

## 1. Scope and Applicability

This PCR covers a site-accepted irrigation or flood-control civil waterwork: an irrigation canal or distribution structure, flood-conveyance channel, levee, drainage or flood-control structure, with only its integral control and protection elements. Declare the actual function and asset segment. Include surveying, temporary diversion where necessary, excavation, forming, lining or embankment construction, component installation, testing and signed handover. Exclude water-supply conveyance works, dams, navigation works, independently delivered pipelines, irrigation farming, flood-response operations and later maintenance. Independently accepted assets in one project are reported separately. [unsd-cpc3-notes; usbr-canal-linings; usace-levee-manual]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.irrigation-and-flood-control-waterworks |
| classification_refs | CPC 3.0 53234, Irrigation and flood control waterworks; mapping acceptance is separate. |
| covered_products | Accepted irrigation channels and structures or flood-control channels, levees and integral works. |
| excluded_products | Water-supply conduits, dams, navigation channels, stand-alone pipelines, farming, operation and maintenance. |
| representative_product | One accepted, function-qualified irrigation or flood-control waterwork at a declared site and chainage. |
| production_route | Survey and excavation; canal/levee formation with route-specific lining or compacted fill; integration of controls, drainage and protection; testing and handover. |
| market_state | Installed civil asset at signed construction acceptance. |

The parent activity `form_waterwork` has function-specific alternatives. A lined irrigation canal requires liner area, material and joint evidence; an earth levee requires borrow source, lift, density, slope and drainage evidence. They may coexist as separately measured segments, never as interchangeable performance equivalents. Record changed inventory, measurement and acceptance requirements without assuming universal material intensity. [usbr-canal-linings; usace-levee-manual]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Constructed irrigation or flood-control waterwork with declared function and integral elements. |
| How much | One site-accepted asset; report functional length, formed volume and liner or protected area separately. |
| How well | As-built geometry, compaction or lining, drainage/control function and acceptance tests satisfy project specification. |
| How long or cycle | One construction project through signed handover; design life is disclosed metadata. |
| reference_flow_link | `accepted_waterwork` from `waterwork_handover`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted irrigation or flood-control waterwork |
| Reference product flow | Accepted irrigation or flood-control waterwork; UUID unresolved |
| Reference flow property | Count; UUID unresolved |
| Reference unit group | Count; UUID unresolved |
| Reference unit | waterwork |
| Required qualifiers | Site; function; design flow or protection target; start/end chainage; accepted length; canal or levee geometry; liner/embankment type; integral controls; route segments; acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `asset_count` | reference product | Count, UUID unresolved | waterwork | Count only the accepted asset; report segment length and function to prevent unlike assets being treated as equivalent. |
| `survey_volume` | excavation and compacted fill | In-situ or compacted volume | m3 | Keep in-situ, loose haul and compacted volumes separate; convert to mass with measured state-specific density. |
| `liner_area` | lined canal route | Installed area | m2 | Reconcile design, installed, rejected and repaired lining areas. |
| `energy_carrier` | site plant | Carrier-specific energy or mass | kWh, MJ or kg | Record fuel and purchased electricity separately; avoid double counting generator fuel and its electricity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed ground, existing channel or levee, watercourse, vegetation and access at declared chainage before works. |
| starting_condition_role | Physical baseline, not an unburdened finished waterwork. |
| product_classification_scope | One accepted irrigation or flood-control asset; separately accepted dams, supply conduits and navigation works remain distinct. |
| recursive_input_rule | A purchased same-category segment enters at supplier handover with its own dataset; do not count an entire asset as unexplained raw material. |
| upstream_dataset_requirement | Link route-matched fill, aggregate, cement, concrete, liner, geotextile, steel, energy, transport and treatment datasets where relevant. |
| disclosure | Function, chainage, route segments, diversion, cut/fill and reuse, borrow and spoil destinations, shared plant, tests, exclusions and unresolved identities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | whole asset | Include temporary works, earthwork, forming, integral controls/protection, tests and remediation through signed acceptance; exclude later irrigation delivery and flood-control operation. | `usbr-canal-linings`; `usace-levee-manual` |
| `removal_handoff` | `site_earthworks` | Survey removed material from land or existing-channel source; pass only accepted formation to forming; distinguish internal reuse from exported spoil. | `usbr-canal-linings`; `usace-levee-manual` |
| `forming_handoff` | `form_waterwork` | Pass accepted shaped channel or embankment to integration; off-spec lifts, liners and geometry return for rework or leave as waste. | `usbr-canal-linings`; `usace-levee-manual` |
| `route_delta` | `form_waterwork` | Declare lined-canal or earth-levee segments and different material, equipment, geometry and QA records; assign mixed segments once. | `usbr-canal-linings`; `usace-levee-manual` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `site_earthworks` | Survey, diversion and resource removal | required | Existing ground/channel to surveyed accepted formation. | Independently remove soil or unsuitable material before forming; route reusable cut, residuals and spoil. | Surveyed in-situ cut and accepted formation. |
| `form_waterwork` | Channel or embankment forming | required | Accepted formation to accepted shaped channel or levee. | Form geometry from fill, lining and protection inputs; rework rejected lifts, liners or geometry. | Formed length, compacted volume and liner area. |
| `waterwork_handover` | Integral controls and final acceptance | required | Formed asset to signed acceptance. | Integrate gates, drains and protection as required; test assembled asset and repair rejected work. | One accepted asset with measured segments. |

### Process: Survey, diversion and resource removal (`site_earthworks`)

#### Inputs

##### Product flows

###### Excavation and earthwork service (`earthwork_service`)

Only subcontracted scope not already counted as owner plant use.

- Selected flow: Excavation and earthwork construction service by actual scope
- Flow property / unit: Contract service quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- Amount rule: Reconcile invoice, survey and owner-supplied equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_earthworks`
- Range: Provisional service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: declared service units/waterwork
  - Basis: broad first-pass screen, not a contracted quantity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Temporary diversion materials (`diversion_materials`)

Record cofferdam, drainage and temporary protection materials only where actually installed or consumed; document reuse across projects and restoration after removal.

- Selected flow: Temporary diversion and drainage construction materials by specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, removed, reused and discarded material by route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_earthworks`
- Range: Provisional temporary-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/waterwork
  - Basis: broad screen for route-specific temporary works
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Earthwork plant energy (`earthwork_energy`)

Fuel or power for excavation, internal haul and dewatering.

- Selected flow: Site plant energy carrier by actual carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter actual carrier use, net of subcontract scope.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional earthwork energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/waterwork
  - Basis: disclosed carriers with documented conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared formation (`prepared_formation`)

Surveyed prism or levee foundation handed to `form_waterwork`, not a second saleable asset.

- Selected flow: Accepted prepared formation at declared chainage
- Flow property / unit: Length and area / m and m2
- Amount rule: Match surveyed chainage and acceptance to forming input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_earthworks`
- Range: Formation completion fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of design chainage
  - Basis: accepted chainage divided by design chainage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Exported excavated spoil (`exported_spoil`)

Off-site soil or unsuitable material; accepted on-site reuse remains in cut/fill balance.

- Selected flow: Excavated soil or unsuitable material sent off site
- Flow property / unit: Mass / kg
- Amount rule: Survey cut and determine export from weighbridge or density, net of reuse.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_earthworks`
- Range: Spoil share identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of removed mass
  - Basis: exported mass divided by removed mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Channel or embankment forming (`form_waterwork`)

#### Inputs

##### Product flows

###### Prepared formation handoff (`formation_handoff`)

Internal accepted formation from `site_earthworks`.

- Selected flow: Accepted prepared formation from `site_earthworks`
- Flow property / unit: Length and area / m and m2
- Amount rule: Match area and chainage to accepted upstream output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_earthworks`
- Range: Formation handoff identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: matched formation handoffs
  - Basis: one input for each accepted formation output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Fill, liner and protection materials (`forming_materials`)

Declare route-specific borrow fill, concrete/asphalt/geomembrane liner, geotextile and erosion protection; do not presume all are used.

- Selected flow: Route-specific fill, liner and protection product by specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, installed, reused, returned and rejected mass by material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted waterwork and route segment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Range: Provisional forming-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000000
  - Unit: kg/waterwork
  - Basis: broad route-specific screen, not design quantities
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Forming plant energy (`forming_energy`)

Separate compaction, placement, mixing and lining equipment by carrier.

- Selected flow: Site plant energy carrier by actual carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter equipment and allocate shared plant by measured use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional forming energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/waterwork
  - Basis: measured carriers with documented conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted formed segment (`formed_segment`)

Accepted geometry and compacted fill or lining, handed to `waterwork_handover`.

- Selected flow: Accepted formed irrigation or flood-control segment
- Flow property / unit: Length / m
- Amount rule: Sum accepted chainages once; disclose volume and liner area by route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_acceptance`
- Range: Formed-segment completion fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of design segment length
  - Basis: accepted formed length divided by design length
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Rejected forming materials (`forming_rejects`)

Off-spec fill lifts, damaged lining and rejected protection are reworked in `form_waterwork`, returned, recovered or discarded; only boundary exits appear here.

- Selected flow: Rejected fill, liner or protection leaving the site
- Flow property / unit: Mass / kg
- Amount rule: Record failures and repairs; count only non-reworked exits as waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Range: Reject share identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered forming mass
  - Basis: boundary-exit reject mass divided by delivered forming mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Integral controls and final acceptance (`waterwork_handover`)

Joining roles are the accepted formed segment, specification-matched control and drainage components, and site installation labour/equipment recorded in project works. Record the latter as foreground energy or contracted construction service only if not already included elsewhere; do not invent installation performance values. The assembled state is the signed accepted asset, not its untested components.

#### Inputs

##### Product flows

###### Formed segment handoff (`formed_handoff`)

Take accepted formed segments, not an additional purchased asset.

- Selected flow: Accepted formed segment from `form_waterwork`
- Flow property / unit: Length / m
- Amount rule: Match chainage and segment type to accepted forming output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_acceptance`
- Range: Formed-segment handoff identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: matched segment handoffs
  - Basis: one input for each accepted forming output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Integral control and drainage components (`control_components`)

Only function-required gates, culverts, drains, filters and protection within this asset; separately accepted structures stay outside.

- Selected flow: Integral hydraulic control and drainage component by specification
- Flow property / unit: Mass or count / kg or item
- Amount rule: Reconcile delivered, installed, returned and rejected components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Provisional component screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg-equivalent/waterwork
  - Basis: broad material screen; count-only components require separate conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted irrigation or flood-control waterwork (`accepted_waterwork`)

Signed handover follows functional, geometry and material QA; rejected chainage is excluded.

- Selected flow: Accepted irrigation or flood-control waterwork at declared site
- Flow property / unit: Count / waterwork
- Amount rule: Count one accepted asset with chainage and route-segment register.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_acceptance`
- Range: Acceptance identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: accepted waterwork/reference flow
  - Basis: signed accepted asset count at stated gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Rejected components at integration (`integration_rejects`)

Failed controls and drains are repaired or replaced within this node; only returned, recovered or discarded exits appear as waste.

- Selected flow: Rejected integral components leaving construction boundary
- Flow property / unit: Mass / kg
- Amount rule: Reconcile failures, repairs, replacements and exits.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted waterwork
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Range: Integration reject share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered component mass
  - Basis: boundary-exit rejects divided by delivered component mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | accepted output | Attribute route-specific work to accepted asset and segments; no assumed co-product credit for excavated material. | `mass-balance-identity` |
| `cut_fill_balance` | soil and borrow | Reused cut stays internal with its burdens; exported spoil, recovered material and purchased fill have distinct destinations. | `mass-balance-identity` |
| `shared_plant` | diversion and equipment | Assign shared plant and access by measured use or documented engineering driver, once across assets. | `usace-levee-manual` |
| `reject_retention` | failed work | Keep rejected-work and rework burdens with producing node; no failed segment counted as accepted or unverified recovery credit. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_earthworks` | `site_earthworks` | survey, service, diversion materials, cut and spoil | survey and ticket | chainage; cut; density; reuse; disposal; contract scope; temporary-material delivery, installation and removal | survey, weighbridge, contract and delivery tickets | m; m3; kg | each segment/load | project | declared chainage | reconcile cut, reuse, exports, temporary materials and stock | survey, density test, tickets |
| `cp_energy` | `site_earthworks`; `form_waterwork` | plant energy | meter and fuel log | carrier; quantity; equipment; hours; project share | meter, invoice, log | kWh; MJ; kg | shift/month | project | site and shared plant | sum carrier and assign once | meter, invoice, allocation |
| `cp_materials` | `form_waterwork` | fill, liner, protection, rejects | bill and inspection | specification; delivered; installed; density; repaired; rejected | ticket, survey, test | kg; m3; m2 | batch/lift/segment | project | route segment | reconcile deliveries, accepted installation and exits | tickets, compaction, liner tests |
| `cp_forming_acceptance` | `form_waterwork`; `waterwork_handover` | segment handoff | acceptance register | chainage; route; geometry; volume; liner area; rework | survey, sign-off | m; m3; m2 | segment | project | declared chainage | sum accepted non-overlapping chainage | as-built survey, QA |
| `cp_components` | `waterwork_handover` | controls and rejects | bill and inspection | component; delivered; installed; failed; repaired; returned | delivery, inspection | kg; item | component | project | accepted asset | reconcile installed and exits | tickets, inspection |
| `cp_final_acceptance` | `waterwork_handover` | accepted output | handover certificate | asset ID; function; chainage; tests; exclusions; date | signed certificate | waterwork; m | handover | project | asset | count accepted assets only | certificate, tests |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cut_reconciliation` | `site_earthworks` | Removed mass = internal reuse + exports + stock change, with state-specific density. | survey, density, tickets | reconciled cut and spoil | `mass-balance-identity` |
| `installed_reconciliation` | `form_waterwork` | Delivered = accepted installed + returned + reject + stock change; rework is not a second new input. | tickets, survey, inspection | materials and rejects | `mass-balance-identity` |
| `accepted_chainage` | `waterwork_handover` | Count non-overlapping signed chainage once; retain route geometry separately. | segment and handover registers | accepted asset and length | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_trace` | all nodes | Identify function, chainage, routes, specifications and gate. | as-built drawings, QA register |
| `material_balance` | cut, fill, liner, controls | Show state conversion, reuse, rejects, stock change and destination. | survey, density tests, tickets |
| `identity_gap` | unresolved flows | Do not issue final concrete process exchanges until flow UUID, property and unit group are detail-confirmed. | platform identity review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_gate` | reference product | Confirm function, site, chainage and signed acceptance; exclude supply conveyance, dams, navigation and operation. | `unsd-cpc3-notes` |
| `route_records` | `form_waterwork` | Lined-canal segments need liner/joint evidence; levees need borrow, lift, geometry and drainage evidence; reconcile mixed routes. | `usbr-canal-linings`; `usace-levee-manual` |
| `handoff_match` | all nodes | Match formation and formed-segment output/input chainages without duplicate burdens. | `mass-balance-identity` |
| `reject_path` | forming and integration | Repaired work loops to producing node; exits have destinations and are excluded from accepted output. | `mass-balance-identity` |
| `range_evidence` | all cards | Provisional guardrails are QA prompts, not design quantities or default inventories. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground construction package for accepted irrigation or flood-control waterwork. |
| downstream_use | Secondary or background construction data only when function, geometry, route and gate match. |
| allowed_use | Construction-stage modelling for declared accepted asset and integral components. |
| excluded_use | Water-delivery operation, flood-event response, dams, navigation and comparisons without function normalization. |
| required_metadata | Site, year, function, design target, chainage, geometry, routes, cut/fill, lining, components, energy, tests and handover. |
| required_quality_disclosure | Conversion, cut/fill balance, shared-work attribution, provisional ranges, cut-offs and identity gaps. |
| update_trigger | Changed scope, route, as-built geometry or quantity, acceptance or confirmed identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Scope and water-supply exclusion. |
| `usbr-canal-linings` | official_guidance | U.S. Bureau of Reclamation, Linings for Irrigation Canals, https://www.usbr.gov/tsc/techreferences/mands/mands-pdfs/LngIrCnl.pdf | Canal lining alternatives and forming. |
| `usace-levee-manual` | official_guidance | U.S. Army Corps of Engineers, EM 1110-2-1913, Design and Construction of Levees, https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-2-1913.pdf | Levee earthworks, compaction and QA. |
| `mass-balance-identity` | method_factor | Conservation-of-material identity applied to surveyed and weighed foreground records. | Cut/fill, material, reject and handoff reconciliation. |
