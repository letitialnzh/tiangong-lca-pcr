---
pcr_id: pcr.constructions-and-construction-services.constructions.other-non-residential-buildings
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other non-residential buildings

## 1. Scope and Applicability

This PCR covers one new, use-qualified non-residential building from surveyed site to signed acceptance. Eligible uses include education, health, hospitality, indoor sport, entertainment, civic, religious, farm and communications buildings. A roofed but open-sided farm or communications building remains eligible if its constructed floor area has a defensible disclosed GFA convention; a form without measurable floor area needs a narrower PCR instead of a forced 1 m2 GFA basis. Actual drawings, fixed-system schedule and declared use determine the inventory; this residual class is not a universal bill of materials. Exclude industrial and commercial buildings, specialized plants, outdoor recreation works, movable equipment and post-handover operation. Renovation of an existing asset needs a separate starting-condition declaration. [unsd-cpc3-notes; eu-levels; doe-building-commissioning]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.other-non-residential-buildings |
| classification_refs | CPC 3.0 53129; mapping acceptance is separate. |
| covered_products | New non-residential building in a declared eligible use with attributable fixed building systems. |
| excluded_products | Industrial or commercial building; specialized non-building plant; outdoor recreation; movable fit-out; routine operation; detached equipment sale. |
| representative_product | Accepted building with declared use, gross floor area convention and fixed-system schedule. |
| production_route | Site removal; foundation and structural forming; enclosure and finishing; fixed-system integration and commissioning through signed handover. |
| market_state | Completed and accepted building asset, not an occupied service. |

The parent `integrate_handover` activity has use-specific deltas. A hospital, school, hotel or indoor sport building may require distinct fixed systems, rooms and tests. Include only documented installed systems. Multiple uses may coexist only with non-overlapping area and evidenced allocation of shared works. Collect the actual use, drawings, system schedule and acceptance criteria for every claimed route. [unsd-cpc3-notes; doe-building-commissioning]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Constructed and accepted use-qualified non-residential building. |
| How much | 1 m2 accepted gross floor area (GFA); report total accepted GFA. |
| How well | Structure, roof or envelope and contracted fixed systems pass declared acceptance tests. |
| How long or cycle | One new-build project through signed handover; design life is metadata, not operation in this boundary. |
| reference_flow_link | `accepted_building` output from `integrate_handover`, divided by accepted GFA. |

| Field | Value |
| --- | --- |
| Reference amount | 1 m2 accepted GFA |
| Reference product flow | Accepted use-qualified non-residential building; UUID unresolved |
| Reference flow property | Area; UUID unresolved |
| Reference unit group | Area; UUID unresolved |
| Reference unit | m2 GFA |
| Required qualifiers | Use and occupancy class; site; new-build status; GFA convention, total and open-sided covered-area treatment; structural and roof/envelope systems; fixed-system schedule; contract boundary; acceptance date; mixed-use split |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_gfa` | reference product | Area, UUID unresolved | m2 GFA | Measure signed accepted gross floor area using one disclosed convention. For an open-sided roofed building, declare whether covered floor area is included; do not mix net and gross, or apply this basis where no defensible floor area exists. |
| `material_balance` | construction products | Mass | kg | Reconcile deliveries, returns, installed mass, stock and waste by material; document density conversions. |
| `site_energy` | construction and commissioning | Carrier-specific energy or mass | kWh; MJ; kg | Separate purchased carriers and pre-handover testing from post-handover operation. |
| `mixed_use` | shared works | Area or evidenced physical service | m2; declared unit | Use non-overlapping area and allocate shared systems once. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed site and existing utility interfaces before new-build works. |
| starting_condition_role | Physical baseline, not burden-free prepared foundations or an existing completed building. |
| product_classification_scope | Accepted roofed or enclosed building within one declared contract and use-qualified GFA. |
| recursive_input_rule | Separately purchased completed same-category building modules enter at supplier handover with upstream datasets; do not count their component materials again. |
| upstream_dataset_requirement | Material, prefabricated component, energy, transport and treatment datasets matching geography and technology. |
| disclosure | Use; area convention; drawings; contract limit; installed fixed systems; mixed-use split; ground removal; defects; unresolved identities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_new_build` | whole building | Include ground works, structure, enclosure, fixed systems, pre-handover testing and corrections; exclude routine occupation and movable equipment. | `unsd-cpc3-notes`; `doe-building-commissioning` |
| `use_qualified` | building use | Require actual use and fixed-system schedule; never infer an inventory from the residual classification label. | `unsd-cpc3-notes` |
| `removal_handoff` | `prepare_site` | Identify source soil or surface, surveyed removal, on-site reuse, export and accepted ground; removal is separate from forming. | `eu-levels` |
| `forming_handoff` | `form_structure` | Identify pre-form materials, geometry-changing work, accepted structure, forming losses and repair. | `eu-levels` |
| `finish_handoff` | `enclose_finish` | Identify parent frame, actual roof or envelope and applied finishes, residues and accepted roofed or enclosed state. | `eu-levels` |
| `integration_handoff` | `integrate_handover` | Join structure, enclosure and use-specific fixed services; record separately purchased mechanical, electrical and test services when present without duplicating subcontract inputs; only accepted GFA enters the reference output. | `doe-building-commissioning` |
| `route_delta` | use-specific systems | Document topology, inventory, tests and basis for each use; mixed uses may coexist with non-overlapping attribution. | `unsd-cpc3-notes`; `doe-building-commissioning` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_site` | Site survey and removal | required | Surveyed site to accepted prepared ground. | Independent ground-removal node; route spoil and reuse. | Surveyed cut and accepted footprint. |
| `form_structure` | Foundation and structural forming | required | Prepared ground to inspected supporting frame. | Change purchased materials into specified geometry; repair defects. | Installed mass and accepted structural area. |
| `enclose_finish` | Roof or enclosure and surface finishing | required | Inspected frame to accepted roofed or enclosed spaces. | Add actual roof, envelope, partitions and protective finishes as applicable. | Installed mass and accepted floor area. |
| `integrate_handover` | Fixed-system integration and acceptance | required | Roofed or enclosed spaces to signed whole-building acceptance. | Integrate use-qualified fixed systems; test, correct and hand over. | Accepted GFA and system schedule. |
### Process: Site survey and removal (`prepare_site`)

#### Inputs

##### Product flows

###### Construction energy for site works (`site_energy_input`)

Record only metered energy for owner-accounted removal, excluding subcontract-embedded energy.

- Selected flow: Purchased construction energy by carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Reconcile meter and fuel logs to site tasks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site`
- Range: Site energy assigned share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: site-task energy divided by all recorded energy of the same carrier
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared ground (`prepared_ground`)

Surveyed ground ready for foundation work is an internal handoff only.

- Selected flow: Accepted prepared ground by project footprint
- Flow property / unit: Area / m2
- Amount rule: Measure non-overlapping accepted foundation footprint.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site`
- Range: Ground acceptance share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: accepted prepared footprint divided by specified footprint
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Waste flows

###### Exported excavation and clearance waste (`exported_spoil`)

Material removed from the identified site source and leaving the contract boundary; on-site reuse is separate.

- Selected flow: Excavated material by substance and destination
- Flow property / unit: Mass / kg
- Amount rule: Balance cut, on-site reuse, stock and export by material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site`
- Range: Removal export share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: exported mass divided by removed mass for the same material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Elementary flows

### Process: Foundation and structural forming (`form_structure`)

#### Inputs

##### Product flows

###### Prepared-ground handoff (`received_prepared_ground`)

The same accepted prepared footprint enters structural work once, without another upstream purchase.

- Selected flow: Accepted prepared ground by project footprint
- Flow property / unit: Area / m2
- Amount rule: Match the accepted outgoing prepared footprint from `prepare_site`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Range: Ground handoff identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: fraction
  - Basis: received prepared footprint divided by accepted outgoing footprint
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

###### Foundation and frame materials (`structural_materials`)

Record actual concrete, reinforcement, steel, timber or other pre-form materials by distinct identity; no universal recipe.

- Selected flow: Purchased structural material by as-built bill
- Flow property / unit: Mass / kg
- Amount rule: Sum delivered mass net of returns; retain installed and loss splits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Range: Installed structural fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: installed mass divided by delivered mass net of returns by material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Inspected supporting structure (`accepted_structure`)

Formed foundation and frame meeting drawings are handed to enclosure, not sold as a second building.

- Selected flow: Accepted in-situ supporting structure
- Flow property / unit: Area / m2 footprint
- Amount rule: Measure accepted structural footprint and retain as-built mass schedule.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Range: Structure acceptance share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: accepted structural area divided by specified structural area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Waste flows

###### Rejected structural material (`structural_rejects`)

Off-spec material is repaired, returned, recovered or disposed through a documented path, never counted as accepted structure.

- Selected flow: Rejected structural material by substance and route
- Flow property / unit: Mass / kg
- Amount rule: Link defect and disposition to the producing structure node.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Range: Structural reject share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: rejected mass divided by same-material input net of returns
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Elementary flows

### Process: Roof or enclosure and surface finishing (`enclose_finish`)

#### Inputs

##### Product flows

###### Inspected-structure handoff (`received_structure`)

The inspected foundation and frame enter enclosure once, retaining the structural bill and acceptance state.

- Selected flow: Accepted in-situ supporting structure
- Flow property / unit: Area / m2 footprint
- Amount rule: Match the accepted outgoing structure footprint from `form_structure`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enclosure`
- Range: Structure handoff identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: fraction
  - Basis: received structure area divided by accepted outgoing structure area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

###### Envelope and finish products (`envelope_finish_inputs`)

Record design-specific cladding, glazing, insulation, partitions and surface products delivered to the inspected frame.

- Selected flow: Envelope or finishing product by material and function
- Flow property / unit: Mass / kg
- Amount rule: Reconcile purchase, installed quantity, unused return and waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enclosure`
- Range: Installed finish share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: installed mass divided by purchased mass net of returns by product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted roofed or enclosed spaces (`accepted_enclosure`)

Inspected roofed or enclosed spaces with applicable functional surfaces transfer to fixed-system integration.

- Selected flow: Accepted roofed or enclosed building spaces
- Flow property / unit: Area / m2 GFA
- Amount rule: Measure accepted non-overlapping GFA of roofed or enclosed spaces using the declared convention.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enclosure`
- Range: Enclosure acceptance share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: accepted roofed or enclosed GFA divided by specified GFA in the same convention
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Waste flows

###### Finishing offcuts and residues (`finish_residues`)

Record coating residues, offcuts and damaged finishes with explicit repair, return, recovery or disposal path.

- Selected flow: Finish residue by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Weigh or invoice off-site residue; separate repaired and returned quantities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enclosure`
- Range: Finish residue share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: exported residue mass divided by purchased mass net of returns by material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Elementary flows

### Process: Fixed-system integration and acceptance (`integrate_handover`)

#### Inputs

##### Product flows

###### Roofed-or-enclosed-space handoff (`received_enclosure`)

The accepted roofed or enclosed spaces enter fixed-system integration once, without duplicating their upstream materials.

- Selected flow: Accepted roofed or enclosed building spaces
- Flow property / unit: Area / m2 GFA
- Amount rule: Match the accepted outgoing area from `enclose_finish` under the same GFA convention.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`
- Range: Enclosure handoff identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: fraction
  - Basis: received roofed or enclosed area divided by accepted outgoing area
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

###### Installed fixed services and use-specific systems (`fixed_system_inputs`)

Record actual HVAC, electrical, plumbing, controls, lifts and applicable use-specific fixed systems, never a universal list.

- Selected flow: Fixed building component by physical identity
- Flow property / unit: Mass / kg
- Amount rule: Reconcile supplier receipt, installed equipment and returns by system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`
- Range: Installed system share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: installed component mass divided by delivered mass net of returns by system
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

###### Pre-handover commissioning energy (`commissioning_energy`)

Meter test electricity and fuels separately from later operations.

- Selected flow: Purchased test energy by carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Assign metered carriers only to tests before signed handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`
- Range: Test-energy allocation share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: pre-handover test energy divided by total transition energy for the carrier
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted non-residential building (`accepted_building`)

Only GFA passing structure, enclosure, fixed-system and use-specific tests enters the reference output.

- Selected flow: Accepted use-qualified non-residential building
- Flow property / unit: Area / m2 GFA
- Amount rule: Use signed accepted GFA from as-built plans, not planned or net area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`
- Range: Reference normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2 GFA per m2 accepted GFA
  - Basis: accepted GFA divided by the same accepted GFA denominator
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Waste flows

###### Defective integration materials (`system_rejects`)

Installation and testing rejects go to repair, supplier return, recovery or disposal, not accepted output.

- Selected flow: Defective fixed-system component by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Reconcile rejected mass to producing work and documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m2 accepted GFA
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`
- Range: Defective component share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: rejected component mass divided by delivered mass net of returns
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-levels`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `no_duplicate_systems` | structure, enclosure and MEP | Attribute each supplier package and common site service once; do not add subcontract-embedded burdens again. | `eu-levels` |
| `mixed_use_attribution` | mixed use | Split accepted GFA into non-overlapping uses; allocate shared structure and systems using evidenced area, mass, capacity or service drivers. | `eu-levels` |
| `reject_rework` | defects | Keep repair inputs and burdens with the producing node; trace return, recovery or disposal; accepted GFA excludes unresolved defects. | `doe-building-commissioning` |
| `single_project_period` | construction cycle | Attribute construction burdens to the one accepted project; do not amortize them over assumed future operating years within this construction-only dataset. | `eu-levels` |

Excavated spoil, finishing residue and defective components are waste or returned materials, not automatic saleable co-products. A separately evidenced recovered saleable output needs its own declared route and allocation review; no unverified avoided-burden credit is applied.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site` | `prepare_site` | energy, ground, spoil | survey, meter, haul ticket | footprint, cut, energy, material mass, reuse, stock, destination | survey and invoice/meter reconciliation | m2; kg; kWh; MJ | each survey and shipment | ground works to foundation acceptance | contract site | balance removal and sum non-overlapping footprint | signed survey and tickets |
| `cp_structure` | `form_structure` | materials, structure, defects | supplier and inspection records | delivered, returned, installed and rejected mass, accepted geometry | as-built bill and inspection log | kg; m2 | each delivery and inspection | foundations through frame acceptance | contract structure | mass balance by material | invoices, as-builts, defect closeout |
| `cp_enclosure` | `enclose_finish` | roof or envelope, accepted area, residues | bill, inspection, waste ticket | material mass, returns, accepted GFA, residue mass and route | quantity survey and ticket reconciliation | kg; m2 | each lot and inspection | roof/envelope to finish acceptance | contract roof, envelope and interiors | balance purchase, install, return and waste | signed inspection and manifests |
| `cp_systems` | `integrate_handover` | fixed systems, test energy, output, rejects | installed schedule, meters, test log | system IDs, mass, energy, accepted GFA, defects, destinations | supplier bills, meter intervals and signed tests | kg; kWh; MJ; m2 | each system and test | integration to signed handover | fixed contract systems | sum accepted area, reconcile each system | test sheets, punch list, certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_area` | inventory | Divide attributed whole-project quantity by signed accepted GFA in one disclosed convention. | attributed quantity, accepted GFA | quantity per m2 GFA | `eu-levels` |
| `site_balance` | `prepare_site` | Removed mass = on-site reuse + stock change + off-site export, per material with documented conversion. | survey, weighbridge, stock | reconciled spoil | `eu-levels` |
| `material_balance` | installed goods | Delivered minus returns = installed + waste + stock change for each material; investigate discrepancy. | invoices, installed schedule, waste tickets | reconciled inventory | `eu-levels` |
| `mixed_use_split` | shared works | Attribute once to exclusive accepted-use areas or evidenced physical service drivers. | area schedule, system capacity, bill | use-qualified inventory | `eu-levels` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `use_and_area` | reference | State use, new-build status, GFA convention, as-built total and signed acceptance. | area schedule and certificate |
| `system_completeness` | installed works | Cross-check drawings, bills, inspection and commissioning list for omissions or duplicates. | as-built index and closeout list |
| `rework_destinations` | rejects | Link each reject to repair, return, recovery or treatment without inflating accepted GFA. | defect and transfer log |
| `identity_quality` | all flows | Resolve actual identity with property, unit, direction, geography and route compatibility before final exchange generation. | detail-confirmed platform record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_boundary` | whole building | Reject data packages including post-handover operation, movable furniture or detached works as construction inventory. | `unsd-cpc3-notes`; `doe-building-commissioning` |
| `validate_use_delta` | integration | Require evidence for each use-specific system and test; mixed uses need non-overlapping attribution. | `doe-building-commissioning` |
| `validate_balances` | all nodes | Reconcile removal, delivered/installed materials and rejects; repair loops stay with producing nodes. | `eu-levels` |
| `validate_reference` | reference | Check accepted GFA, open-sided covered-area treatment, use and signed date; normalized output corresponds to that same denominator. If floor area is not defensible, require a narrower rule. | `eu-levels`; `doe-building-commissioning` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction data package for a declared non-residential building use. |
| downstream_use | Secondary or background dataset for process and lifecyclemodel assembly after identities are verified. |
| allowed_use | Comparison within the same use, area convention, boundary and fixed-system completeness. |
| excluded_use | Cross-use substitution without system adjustment; operational building impacts; unspecific residual-building proxy. |
| required_metadata | Use, location, new-build status, GFA convention and total, contract limit, structure, envelope, fixed-system schedule, mixed-use split and acceptance date. |
| required_quality_disclosure | Primary-data coverage, material balances, commissioning evidence, identity gaps and missing systems. |
| update_trigger | Design or use change, bill revision, new foreground measurements, commissioning correction or verified flow identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification boundary and eligible uses. |
| `eu-levels` | official_guidance | https://environment.ec.europa.eu/topics/circular-economy/levelsold/start-using-levels_en | Building life-cycle inventory and material reporting context. |
| `doe-building-commissioning` | official_guidance | https://www.energy.gov/cmei/femp/commissioning-federal-buildings | Fixed-system commissioning and handover gate. |
