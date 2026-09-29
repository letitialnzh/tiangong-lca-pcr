---
pcr_id: pcr.constructions-and-construction-services.constructions.power-plants
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Power plants

## 1. Scope and Applicability

This PCR covers one constructed, installed, tested and accepted electricity-generating plant as a physical asset. Include attributable site works, foundations, generating equipment, balance-of-plant systems, electrical integration and pre-handover commissioning. Coal-fired, hydroelectric, nuclear, wind and other technologies require a declared, evidenced unit list rather than a universal material recipe. Exclude post-handover electricity generation, fuel extraction, independently delivered transmission networks, isolated equipment sales and unrelated structures. [unsd-cpc3-notes; doe-commissioning]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.power-plants |
| classification_refs | CPC 3.0 53262; mapping acceptance is separate. |
| covered_products | Accepted generating plant with integrated civil, generation and balance-of-plant systems inside one contract boundary. |
| excluded_products | Electricity output and routine operation; independently contracted transmission; equipment-only sales; separate fuel-supply facilities. |
| representative_product | One accepted technology-qualified generating plant with declared rated capacity and unit list. |
| production_route | Site removal and preparation; foundation and civil forming; equipment and electrical integration; commissioning tests and defect closeout to signed handover. |
| market_state | Installed and accepted capital asset, not electricity supplied to the grid. |

The parent `integrate_accept` activity changes topology by technology. Thermal plants may include fuel-handling and steam-cycle units; hydro plants hydraulic works and turbines; wind plants turbine arrays; nuclear plants applicable safety systems. These are conditional, not universal, units. A hybrid project may contain multiple routes only with explicit attribution of common works and route-specific units. Collect actual technology, net/gross capacity, unit list, grid interface and test criteria from as-built records. [unsd-cpc3-notes; doe-commissioning]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Constructed and accepted electricity-generating plant. |
| How much | One accepted plant; report rated capacity separately in MW. |
| How well | Civil, mechanical, electrical and control systems meet contractual pre-handover acceptance tests. |
| How long or cycle | One construction project through signed acceptance; design life is metadata, not operation in this boundary. |
| reference_flow_link | `accepted_plant` output from `integrate_accept`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted plant |
| Reference product flow | Accepted power plant; UUID unresolved |
| Reference flow property | Count; UUID unresolved |
| Reference unit group | Count; UUID unresolved |
| Reference unit | plant |
| Required qualifiers | Site; technology; rated capacity and MW basis; unit list; contract limits; test protocol; acceptance date; hybrid-route attribution |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `plant_count` | reference product | Count, UUID unresolved | plant | Count one signed accepted contractual plant, not each turbine or MWh. |
| `capacity_label` | plant qualification | Rated electrical power | MW | State net or gross basis, tested configuration and unit count. |
| `earth_state` | site removal | Volume and bulk density | m3; kg/m3 | Distinguish in-situ cut, hauled spoil and compacted fill before conversion. |
| `energy_carrier` | construction and testing | Carrier-specific energy or mass | kWh; MJ; kg | Separate purchased electricity, site fuel and test-generated electricity; avoid double counting. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed site, ground condition and existing grid or utility interface before contract works. |
| starting_condition_role | Physical baseline, not a burden-free finished plant. |
| product_classification_scope | One accepted generating plant, including only attributable on-site and contract works. |
| recursive_input_rule | Purchased same-category completed plant modules enter at supplier handover with an upstream dataset, not as free raw components. |
| upstream_dataset_requirement | Technology-matched materials, equipment, energy, transport and waste-treatment datasets. |
| disclosure | Technology, capacity basis, contract limit, unit list, shared works, ground removal, installed masses, tests, rejects, rework and identity gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | whole plant | Include construction, installation, pre-handover commissioning and required defect closeout to signed acceptance; exclude routine post-handover generation. | `doe-commissioning` |
| `asset_limit` | plant interfaces | Include directly attributable balance-of-plant and grid connection within the contract; separately accepted transmission infrastructure is outside. | `unsd-cpc3-notes` |
| `removal_handoff` | `prepare_site` | Identify source soil or rock, accepted prepared footprint, on-site reuse and off-site spoil separately; removal is independent of civil forming. | `unsd-cpc3-notes` |
| `forming_handoff` | `form_civil` | Convert specified materials and accepted excavation to inspected foundations; link repair and rejected sections to this node. | `doe-commissioning` |
| `integration_handoff` | `integrate_accept` | Record purchased generating equipment, balance-of-plant and installation services; hand off only the tested accepted plant. | `doe-commissioning` |
| `test_export_limit` | `integrate_accept` | If pre-handover test electricity leaves the plant, record its metered export as a separate conditional output; post-handover generation is outside. | `doe-commissioning` |
| `technology_delta` | `integrate_accept` | Resolve actual technology-specific units and tests from as-built records; do not copy a generic intensity. | `doe-commissioning` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_site` | Site removal and preparation | required | Surveyed land to accepted prepared footprint. | Remove material from identified source; distinguish reuse and spoil. | Surveyed cut and footprint. |
| `form_civil` | Civil forming and foundation acceptance | required | Accepted footprint to inspected foundations and structures. | Form specified geometry; repair or reject failed sections. | As-built volume, mass and geometry. |
| `integrate_accept` | Equipment integration and plant acceptance | required | Inspected civil works to signed whole-plant handover. | Join generating equipment, balance-of-plant and electrical systems; test and correct defects. | One accepted plant and rated MW. |

### Process: Site removal and preparation (`prepare_site`)

#### Inputs

##### Product flows

###### Contracted earthwork (`earthwork_service`)

Use only for separately purchased excavation or preparation; exclude its machine fuel from owner-operated energy.

- Selected flow: Earthwork and excavation construction service by actual scope
- Flow property / unit: Contract service quantity / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- Amount rule: Reconcile invoice quantities to surveys.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site`
- Range: Contracted excavation share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of surveyed excavation
  - Basis: contracted excavation divided by total surveyed excavation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

###### Site energy (`site_energy`)

Purchased electricity or fuel for owner-operated excavation and preparation, excluding subcontract-embedded energy.

- Selected flow: Construction energy carrier by actual carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter each carrier and assign to documented tasks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site`
- Range: Assigned site energy share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of metered site energy
  - Basis: assigned energy divided by metered site energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared footprint (`prepared_footprint`)

Surveyed ground prepared for foundations; an internal handoff, not another saleable plant.

- Selected flow: Accepted prepared plant footprint
- Flow property / unit: Area / m2
- Amount rule: Sum non-overlapping accepted foundation areas.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site`
- Range: Footprint acceptance share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of specified area
  - Basis: accepted area divided by specified footprint
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Waste flows

###### Exported spoil (`exported_spoil`)

Excavated soil or rock leaving the project; distinguish on-site reuse and stock change.

- Selected flow: Exported excavated material by type and destination
- Flow property / unit: Mass / kg
- Amount rule: Balance cut against reuse, stock and export by material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site`
- Range: Export share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of removed mass
  - Basis: exported mass divided by removed mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Elementary flows

### Process: Civil forming and foundation acceptance (`form_civil`)

#### Inputs

##### Product flows

###### Received prepared footprint (`received_footprint`)

Internal transfer of accepted ground; do not purchase the same site works again.

- Selected flow: Accepted prepared plant footprint
- Flow property / unit: Area / m2
- Amount rule: Match the upstream accepted footprint.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site`
- Range: Internal footprint match
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: received/handed-off area
  - Basis: received area divided by upstream accepted area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

###### Civil materials (`civil_materials`)

Concrete, reinforcement, structural steel and specified foundation materials by grade.

- Selected flow: Civil construction material by actual specification
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivery, accepted installation, stock, returns and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Range: Accepted installation share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered mass
  - Basis: accepted mass divided by delivered mass by material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted civil works (`accepted_civil`)

Inspected foundations, structures and equipment bases passed to integration.

- Selected flow: Accepted power-plant civil foundation and structure
- Flow property / unit: Installed material mass / kg
- Amount rule: Sum accepted installed mass by structure; retain geometry separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_civil`
- Range: Civil acceptance share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of placed material mass
  - Basis: accepted mass divided by placed mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Waste flows

###### Civil rejects (`civil_rejects`)

Rejected material leaving forming; repaired material loops within this node and is not counted twice.

- Selected flow: Rejected civil material by composition and recovery destination
- Flow property / unit: Mass / kg
- Amount rule: Record rejects net of same-node rework by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Range: Civil rejection share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of placed mass
  - Basis: rejected mass divided by placed mass by material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Elementary flows

### Process: Equipment integration and plant acceptance (`integrate_accept`)

#### Inputs

##### Product flows

###### Received civil works (`received_civil`)

Internal accepted foundations and structures from `form_civil`.

- Selected flow: Accepted power-plant civil foundation and structure
- Flow property / unit: Installed material mass / kg
- Amount rule: Match preceding node's accepted civil mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_civil`
- Range: Internal civil handoff match
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: received/handed-off mass
  - Basis: received mass divided by upstream accepted civil mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

###### Generating and auxiliary equipment (`plant_equipment`)

Generating units, electrical equipment, controls and route-specific balance-of-plant components by procurement and as-built identity.

- Selected flow: Generating and auxiliary equipment by component and technology
- Flow property / unit: Mass / kg
- Amount rule: Reconcile procured, installed, spare, returned and rejected components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equipment`
- Range: Equipment installation share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered equipment mass
  - Basis: accepted installed mass divided by delivered mass by component
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

###### Commissioning energy (`commissioning_energy`)

Purchased energy for pre-handover tests and defect correction; separately report generated test electricity.

- Selected flow: Commissioning energy carrier by actual carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter by test and carrier, excluding routine operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tests`
- Range: Assigned commissioning energy share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of metered pre-handover energy
  - Basis: assigned test energy divided by metered pre-handover energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted power plant (`accepted_plant`)

Single tested and signed-off generating asset; not an electricity output.

- Selected flow: Accepted power plant by technology and rated capacity
- Flow property / unit: Count / plant
- Amount rule: One only after required tests and defect closeout satisfy acceptance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tests`
- Range: Accepted plant count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: plant
  - Basis: signed accepted plant count for this reference project
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

###### Exported commissioning-test electricity (`commissioning_test_electricity`)

Conditional co-output only when metered electricity generated during pre-handover tests leaves the plant boundary. Test self-use is internal; post-handover generation is excluded.

- Selected flow: Exported pre-handover test electricity by actual electrical specification
- Flow property / unit: Electrical energy / kWh
- Amount rule: Meter exported kWh during dated pre-handover tests and reconcile generation, self-use and export.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tests`
- Range: Test-electricity export fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of pre-handover generated electricity
  - Basis: exported kWh divided by metered pre-handover generated kWh
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Waste flows

###### Rejected integration components (`integration_rejects`)

Failed components leaving integration; repaired items loop within `integrate_accept` until accepted or exit by documented recovery route.

- Selected flow: Rejected plant component by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Record net rejected mass by component and destination after rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted plant
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equipment`
- Range: Rejected equipment share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction of delivered equipment mass
  - Basis: rejected mass divided by delivered mass by component
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `material-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `shared_works` | multiple units or hybrid routes | Assign common civil, utilities and commissioning burdens by measured unit-specific quantities; if inseparable, document a consistent engineering-driver allocation. | `doe-commissioning` |
| `test_electricity` | commissioning | Exported pre-handover test electricity is an incidental co-output. Retain construction and testing burdens with the accepted plant, assign no avoided-grid credit, and disclose exported kWh; test self-use is internal and post-handover generation is excluded. | `doe-commissioning` |
| `reject_rework` | forming and integration | Keep repair burdens at producing node; accepted output excludes rejects. Declare recovered, returned or discarded destinations and avoid duplicate procurement. | `doe-commissioning` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site` | `prepare_site` | removal, service, energy, footprint, spoil | survey and site log | cut volume; material; density; reuse; export; invoice; metered energy; accepted area | surveys, tickets, meters and invoices | m3; kg; kWh; MJ; m2 | each lot and monthly meter | full preparation | project site | reconcile cut, reuse, stock and export; sum non-overlapping area | signed survey, tickets, invoice, meter |
| `cp_civil` | `form_civil` | civil materials, works, rejects | material and inspection register | grade; delivered, installed, returned and rejected mass; structure; inspection | procurement and as-built takeoff | kg; m3 | each delivery and lot | full civil works | project site | balance by grade and structure | receipts, drawings, inspections |
| `cp_equipment` | `integrate_accept` | equipment and rejects | equipment register | unit; technology; model; mass; delivery, installation, spares, returns, rejects, destination | procurement and installation records | kg; count | each component lot | full installation | project site | balance by component | supplier records, installation logs, rejection tickets |
| `cp_tests` | `integrate_accept` | test energy, exported test electricity and accepted plant | test and handover pack | carrier; test energy; test-generated kWh; test self-use kWh; exported test kWh; rated MW; pass/fail; defect list; acceptance date | calibrated meters and signed turnover | kWh; MJ; MW; plant | each test and final acceptance | through handover | accepted plant | reconcile generation, self-use and export by test; count plant on signed acceptance | readings, certificates, signed handover |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cut_balance` | `prepare_site` | Removed mass = reused + exported + stock change + documented loss; investigate imbalance. | survey, density, tickets | kg by material and destination |  |
| `civil_balance` | `form_civil` | Delivered = accepted installed + rejects + returns + stock change by material. | receipts and inspection | kg accepted and rejected |  |
| `equipment_balance` | `integrate_accept` | Delivered = accepted installed + spares + returns + rejects + stock change by component. | equipment register | kg by component state |  |
| `plant_acceptance` | reference product | Accepted count = 1 only when mandatory tests and defect closeout pass and handover is signed. | tests, punchlist, handover | plant count | `doe-commissioning` |
| `test_electricity_balance` | `integrate_accept` | Pre-handover test-generated kWh = internal test self-use + exported kWh + documented loss or stock change; export is a separate incidental output. | dated test meters | exported kWh | `material-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | whole plant | Record technology, net/gross capacity basis, unit list and contract limit; do not substitute a generic recipe. | design basis and as-built unit list |
| `dq_completeness` | all nodes | Reconcile quantities, shared works, route-specific equipment and rejected material. | survey, ledgers and reconciliation |
| `dq_gate` | acceptance | Distinguish tests from operation and retain signed turnover evidence. | commissioning pack and acceptance signature |
| `dq_identity` | all exchanges | Resolve each final exchange to compatible flow, property and unit UUIDs; disclose candidate-stage gaps. | platform detail and collection unit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | accepted plant | Reject plant count other than one or missing acceptance, technology or capacity qualification. | `doe-commissioning` |
| `v_handoffs` | process chain | Match prepared area and accepted civil mass across internal handoffs. |  |
| `v_balances` | materials | Enforce non-negative, non-duplicated spoil, civil and equipment balances. |  |
| `v_route` | technology delta | Verify unit list, MW basis and tests against as-built records; assign hybrid common works once. | `doe-commissioning` |
| `v_rejects` | rework | Rejects cannot count as accepted; link repair to producing node and exits to destinations. | `doe-commissioning` |
| `v_energy` | commissioning | Reconcile purchased carrier and pre-handover generated electricity, self-use and metered export; create the conditional output only for export, and exclude routine post-handover generation. | `doe-commissioning` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction data package for one accepted generating plant. |
| downstream_use | `secondary_dataset`; `background_dataset` when technology, geography and capacity qualifiers are compatible. |
| allowed_use | Model installed plant construction burdens with disclosed route, capacity, allocation and handover gate. |
| excluded_use | Model electricity generation, operational emissions, lifetime output, transmission or technology-agnostic MW intensity without separate methods. |
| required_metadata | Site, technology, net/gross MW basis, unit list, contract limit, construction period, tests, handover date, design life and UUID gaps. |
| required_quality_disclosure | Primary-data coverage, surveys, procurement balance, tests, shared allocation, rework and matching upstream datasets. |
| update_trigger | Changed technology, unit list, boundary, major material takeoff, capacity rating, test gate, UUID evidence or guidance. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | [UNSD CPC Version 3.0 explanatory notes](https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf) | Category and adjacent asset boundary. |
| `doe-commissioning` | official_guidance | [US DOE G 413.3-23 Nuclear Facilities Commissioning](https://www.energy.gov/documents/nuclear-facilities-commissioning) | Construction-to-test turnover, acceptance, defects and handover; commissioning method evidence, not an assertion all plants are nuclear. |
| `material-balance-identity` | method_factor | Conservation-of-material and fraction identities applied to measured project records. | Material, handoff and equipment QA guardrails. |
