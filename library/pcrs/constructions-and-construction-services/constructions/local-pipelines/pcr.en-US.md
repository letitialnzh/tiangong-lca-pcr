---
pcr_id: pcr.constructions-and-construction-services.constructions.local-pipelines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Local pipelines

## 1. Scope and Applicability

This PCR covers a newly constructed and accepted local pipeline segment for gas, potable water, sewerage, hot water or steam distribution. The product is the installed civil asset at signed test and handover, not a delivered pipe, conveyed commodity or later distribution service. Include local mains and directly integral valves and chambers in the declared contract. Exclude long-distance transmission pipelines, non-pipeline aqueducts, treatment plants, separately delivered pumping or generation facilities, and routine operation. State the medium, design pressure or gravity duty, length, diameter, pipe material, alignment, installation method and acceptance criteria. [unsd-cpc3-53251; epa-water-main-preparation; epa-sewer-evaluation]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.local-pipelines |
| classification_refs | CPC 3.0 53251, Local pipelines; mapping acceptance is separate. |
| covered_products | Accepted local gas, potable-water, sewer, hot-water and steam pipeline segments with integral fittings, valves and chambers. |
| excluded_products | Long-distance pipelines, aqueducts, treatment plants, separately contracted stations and distribution service. |
| representative_product | One specified and accepted local pipe-network construction contract. |
| production_route | Survey and prepare corridor; excavate or install trenchlessly; join pipe and fittings; lay, protect and restore; test, condition as needed and sign handover. |
| market_state | Installed, tested and accepted infrastructure asset. |

The parent activity `line_install` has open-cut and trenchless route variants. Open-cut requires measured excavation, spoil and backfill; trenchless requires bore-path and drilling-fluid or pit records. They may coexist on different as-built sections but are mutually exclusive at the same chainage. Pipe material and medium alter joining, protection and acceptance records, not the product category. Record route by chainage and retain drawings, test reports and acceptance signature. [fhwa-utility-cuts; epa-water-main-preparation; epa-sewer-evaluation]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A completed local pipeline asset within the signed contract boundary. |
| How much | One accepted contract; disclose accepted pipe length in m and installed mass in kg. |
| How well | Design, joint, leakage or pressure, applicable sanitary or sewer inspection, restoration and handover checks passed. |
| How long or cycle | One construction project to signed acceptance; design service life is metadata, not operating burden. |
| reference_flow_link | `accepted_local_line` from `line_install`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted local pipeline contract |
| Reference product flow | Completed local pipeline asset; UUID unresolved |
| Reference flow property | Count; UUID unresolved |
| Reference unit group | Count; UUID unresolved |
| Reference unit | accepted contract |
| Required qualifiers | Conveyed medium; pressure or gravity duty; accepted length; diameter and material; location; open-cut and trenchless chainages; test and conditioning requirements; integral structures; acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `contract_count` | reference output | Count, UUID unresolved | contract | Count each signed accepted contract once and disclose length for comparison. |
| `pipe_reconciliation` | pipe and fittings | Mass | kg | Reconcile delivered, installed, returned, rejected and retained stock mass by material specification. |
| `corridor_measurement` | installation route | Length, area and in-situ volume | m, m2, m3 | Record accepted chainage once; derive open-cut in-situ volume from survey, not loose-haul volume. |
| `test_water_balance` | hydrotest and flushing | Volume | m3 | Record intake, reuse, discharge and retained water by test section; do not count recirculated water as new intake. |
| `energy_balance` | site machinery | Carrier-specific energy or mass | kWh, MJ or kg | Reconcile purchased electricity, generator output and generator fuel to prevent double counting. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed existing street, ground or utility corridor before this contract's work. |
| starting_condition_role | Physical baseline; installed utility infrastructure is not a free material input. |
| product_classification_scope | One accepted local pipeline asset with declared integral structures. |
| recursive_input_rule | Purchased complete pipe segments and construction services enter at supplier handover; an entire accepted local network is not silently reused as a component. |
| upstream_dataset_requirement | Material-, geography- and technology-matched pipe, fittings, energy, transport, water, chemicals and waste-management datasets. |
| disclosure | Baseline pavement and soil state; route by chainage; excavation and spoil destinations; material and joint specification; test water and discharge; repair loops; integral structures; acceptance evidence. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | whole asset | Include preparation, pipe joining and laying, testing, applicable disinfection or sewer inspection, rework, reinstatement and handover; exclude operation and conveyed product. | `unsd-cpc3-53251`; `epa-water-main-preparation`; `epa-sewer-evaluation` |
| `removal_handoff` | `corridor_removal` | Record material removed from the surveyed ground as a separate responsibility and pass only accepted prepared corridor to installation; distinguish reusable backfill from exported spoil. | `fhwa-utility-cuts` |
| `assembly_handoff` | `pipe_assembly` | Record pipe lengths, bends, fittings, valves, seals and jointing consumables; pass inspected joined assembly to installation, not uninspected stock. Failed joints return to assembly or exit to declared recovery/disposal. | `epa-water-main-preparation` |
| `route_delta` | `line_install` | Separate open-cut excavation/backfill from trenchless bore, pits and drilling-fluid obligations by chainage; do not count the same installed segment twice. | `fhwa-utility-cuts` |
| `acceptance_medium` | `line_install` | Apply pressure/leakage testing appropriate to the line; record potable-water flushing, disinfection and quality testing or sewer inspection where relevant, without imposing those steps on all media. | `epa-water-main-preparation`; `epa-sewer-evaluation` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `corridor_removal` | Corridor preparation and material removal | required | Surveyed baseline to accepted prepared alignment. | Remove pavement, soil or bore material independently of pipe manufacture and installation; pass prepared alignment and route spoil or residuals. | Prepared chainage, surveyed in-situ volume and spoil mass. |
| `pipe_assembly` | Pipe and fitting assembly | required | Delivered components to inspected joined assembly. | Join pipe, bends, fittings, valves and seals, using separately invoiced joining service only when purchased; inspect joints; rework or route rejects. | Installed component mass and accepted joint count. |
| `line_install` | Laying, testing and acceptance | required | Prepared alignment and inspected assembly to signed accepted asset. | Lay and support, backfill or bore, pressure/leak test, condition by medium, restore and hand over. | Accepted length and one accepted contract. |

### Process: Corridor preparation and material removal (`corridor_removal`)

#### Inputs

##### Product flows

###### Corridor machinery energy (`corridor_energy`)

Record carrier-specific energy for owned excavation or bore-pit equipment; do not duplicate energy inside purchased excavation service.

- Selected flow: Actual fuel or electricity carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Sum metered or invoiced energy attributable to this node.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_corridor`
- Range: Provisional corridor-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/contract
  - Basis: all disclosed carriers converted to MJ-equivalent per accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased excavation service (`excavation_service`)

Only when excavation is contracted and not represented by owned foreground equipment; contract records define the exchange.

- Selected flow: Earthwork and excavation construction service
- Flow property / unit: Contract-compatible service property / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- Amount rule: Record invoiced service quantity allocated to this contract.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_corridor`
- Range: Provisional purchased-service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: contract-declared service unit/contract
  - Basis: purchased excavation service per accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared alignment (`prepared_alignment`)

The independently inspected corridor or bore path handed to `line_install`; this is a project-internal intermediate, not the final product.

- Selected flow: Prepared local pipeline alignment; UUID unresolved
- Flow property / unit: Length / m
- Amount rule: Survey accepted prepared chainage without counting overlapping route sections twice.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_corridor`
- Range: Provisional prepared-length screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: m/contract
  - Basis: accepted prepared chainage per contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Exported excavation spoil (`exported_spoil`)

Record soil, pavement or drilling residual removed from the project and routed to a documented destination; material reused as backfill remains internal, not exported waste.

- Selected flow: Excavation or drilling spoil by material and destination; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh exported material or calculate from surveyed volume, density and documented reuse.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_corridor`
- Range: Provisional exported-spoil screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/contract
  - Basis: exported spoil after documented internal reuse
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Pipe and fitting assembly (`pipe_assembly`)

#### Inputs

##### Product flows

###### Pipe and fittings delivered (`pipe_components`)

Collect pipe lengths, bends, tees, valves, couplings, seals and jointing materials by specification; avoid substituting the finished network for these components.

- Selected flow: Pipe and fitting components by material and specification; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Delivered mass minus returned unused stock, reconciled with installed and rejected material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Provisional component-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/contract
  - Basis: pipe and fittings delivered for accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Contracted joining service (`joining_service`)

Record welding, fusion or mechanical-joint installation service only when separately purchased; prevent double counting of owned labor and energy.

- Selected flow: Contracted pipe-joining service by method; UUID unresolved
- Flow property / unit: Contract-compatible service property / declared unit
- Amount rule: Allocate invoices to inspected joints, including rework, by documented contract scope.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Provisional joining-service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: contract-declared service unit/contract
  - Basis: separately purchased joining work per accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Joining energy (`joining_energy`)

Record welding, fusion or mechanical-joint equipment energy according to actual technology.

- Selected flow: Actual joining energy carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Allocate metered use to accepted and rejected joints, including rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Provisional joining-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/contract
  - Basis: disclosed joining carriers per accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Inspected joined pipe assembly (`inspected_assembly`)

Pass only joined lengths and fittings that passed recorded inspection to `line_install`.

- Selected flow: Inspected local pipe assembly; UUID unresolved
- Flow property / unit: Length / m
- Amount rule: Measure accepted joined length, excluding rejects pending rework.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Provisional accepted-assembly screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: m/contract
  - Basis: inspected joined length per accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected joints and cut-offs (`assembly_rejects`)

Failed joints return to `pipe_assembly` for recorded rework or leave for recovery/disposal; count the boundary exit only once.

- Selected flow: Rejected pipe and joint material by disposition; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconcile rejected mass with rework, returned stock, recovery and disposal tickets.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Range: Provisional reject-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/contract
  - Basis: final rejected mass exiting assembly after rework
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Laying, testing and acceptance (`line_install`)

#### Inputs

##### Product flows

###### Prepared alignment received (`alignment_received`)

Receive the accepted length passed from `corridor_removal`; it is an internal graph link, not purchased construction service.

- Selected flow: Prepared local pipeline alignment; UUID unresolved
- Flow property / unit: Length / m
- Amount rule: Match accepted prepared chainage to installed chainage and explain any difference.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install_test`
- Range: Provisional received-alignment screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: m/contract
  - Basis: received accepted chainage per contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inspected assembly received (`assembly_received`)

Receive the inspected pipe assembly from `pipe_assembly`; do not treat uninspected or rejected lengths as accepted installation input.

- Selected flow: Inspected local pipe assembly; UUID unresolved
- Flow property / unit: Length / m
- Amount rule: Match received assembly length, installed length and returned unused length.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install_test`
- Range: Provisional received-assembly screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: m/contract
  - Basis: received inspected length per contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Installation energy (`installation_energy`)

Record laying, compaction, boring, testing and reinstatement machinery energy; distinguish from supplier service burdens.

- Selected flow: Actual installation energy carrier
- Flow property / unit: Carrier-specific energy or mass / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Allocate meter or fuel records by activity and route chainage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install_test`
- Range: Provisional installation-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: MJ-equivalent/contract
  - Basis: disclosed carriers per accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased backfill service (`backfill_service`)

Only when a contracted backfill and compaction service is purchased separately from owned equipment work.

- Selected flow: Backfill and compaction construction service
- Flow property / unit: Contract-compatible service property / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `backfill-and-compaction`
- Amount rule: Record invoiced service quantity attributable to open-cut sections.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install_test`
- Range: Provisional backfill-service screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: contract-declared service unit/contract
  - Basis: purchased backfill service per accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bedding and imported backfill (`bedding_backfill`)

Record imported granular bedding, surround and reinstatement material separately from excavated spoil reused on site.

- Selected flow: Bedding and imported backfill by specification; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Delivered mass minus unused returns, reconciled with placed quantities.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install_test`
- Range: Provisional imported-fill screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/contract
  - Basis: external bedding and fill for accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Trenchless drilling fluid (`drilling_fluid`)

Apply only to sections using drilling or boring fluid; collect composition, fresh supply, recovered fluid and disposal independently of open-cut bedding.

- Selected flow: Drilling fluid by actual formulation; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Fresh material issued to trenchless sections minus unopened returns.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install_test`
- Sources: `fhwa-utility-cuts`
- Range: Provisional drilling-fluid screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/contract
  - Basis: fresh drilling-fluid material for accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Test and flushing water (`test_water`)

Collect intake for applicable hydrostatic test, flushing or disinfection; pneumatic test may have no water input. Use volume records, not an unsupported mass-based Flow Set group.

- Selected flow: Water supplied for line testing or flushing; UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: Meter external intake and deduct recirculated water before recording new supply.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install_test`
- Sources: `epa-water-main-preparation`
- Range: Provisional water-intake screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: m3/contract
  - Basis: fresh testing and flushing water per accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Potable-water disinfection chemical (`disinfectant`)

Apply only where potable-water pipe disinfection is required; record actual chemical substance and concentration, without applying potable treatment to gas, sewer or thermal lines.

- Selected flow: Disinfection chemical by substance and formulation; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconcile delivered, dosed, returned and residual chemical mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install_test`
- Sources: `epa-water-main-preparation`
- Range: Provisional disinfection-chemical screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/contract
  - Basis: chemical issued for required potable-water disinfection
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted local pipeline (`accepted_local_line`)

Count only the tested, restored and signed accepted asset; repair loops and rejected lengths do not add output.

- Selected flow: Completed local pipeline asset; UUID unresolved
- Flow property / unit: Count / accepted contract
- Amount rule: One output after signed acceptance, with accepted length disclosed separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install_test`
- Sources: `unsd-cpc3-53251`
- Range: Acceptance-count check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: accepted contract
  - Basis: signed accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Test and flush discharge (`test_discharge`)

Account for test and flush water leaving to collection or treatment; identify discharge destination and residual disinfectant where relevant.

- Selected flow: Test or flush wastewater by destination; UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: Intake plus initial fill minus reuse, retained water and measured losses; verify disposal records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted local pipeline contract
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install_test`
- Sources: `epa-water-main-preparation`
- Range: Provisional test-discharge screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000000
  - Unit: m3/contract
  - Basis: test and flush water exported per accepted contract
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | whole contract | The accepted pipeline is the sole intended output; do not allocate construction burdens to conveyed gas, water, sewage or heat. | `unsd-cpc3-53251` |
| `shared_equipment` | shared machinery | Assign metered time, fuel or equipment use to this contract by documented activity and chainage; disclose residual estimation. |  |
| `reject_burden` | `pipe_assembly`, `line_install` | Retain repair and failed-test burdens with the accepted asset; only physically documented recovered material may leave as a separately accounted destination and no rejected length counts as accepted output. | `epa-water-main-preparation`; `epa-sewer-evaluation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_corridor` | `corridor_removal` | energy, purchased service, prepared chainage, spoil | survey, log, invoice, haul ticket | chainage, method, cut section, in-situ volume, fuel, electricity, contracted quantity, spoil mass, reuse, destination | as-built survey and source tickets | m, m3, kg, kWh, MJ, service unit | by section and activity | full construction contract | all open-cut, bore and pit sections | reconcile route length and material removal; aggregate once per contract | survey, equipment logs, invoices, weighbridge and destination receipts |
| `cp_components` | `pipe_assembly` | components, joining service, energy, accepted joints, rejects | material register and inspection log | pipe/fitting type, delivered/returned/installed/rejected kg, joining-service invoices, joint count, inspection result, rework, carrier quantity | supplier invoices, stock register and joint tests | kg, m, count, kWh or MJ, service unit | by lot and joint | full construction contract | all pipe assemblies in contract | reconcile stock and accepted joined length | material certificates, joint inspection and rejection tickets |
| `cp_install_test` | `line_install` | internal handoffs, energy, service, bedding, drilling fluid, water, disinfectant, accepted asset, discharge | as-built, meter, test and acceptance records | prepared/received/installed length, route method, carrier quantity, service quantity, imported bedding kg, drilling-fluid kg, chemical substance and kg, intake/reuse/discharge m3, test type/result, disinfection or sewer inspection, defect and repair, acceptance signature | as-built measurement, meters, invoices and signed tests | m, count, kg, m3, kWh, MJ, service unit | per route section and test | full construction contract through handover | all accepted sections and failed-test loops | count accepted output once; reconcile material, water and chainage | test reports, water meter, discharge receipts, quality results and signed handover |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `spoil_mass` | `exported_spoil` | Exported mass = weighed haul mass, or surveyed in-situ volume × documented bulk density − internal reuse; explain uncertainty. | cut volume, density, reuse and haul tickets | kg exported spoil |  |
| `component_balance` | `pipe_components`, `assembly_rejects` | Delivered = installed + returned unused + exited rejects + retained stock, within documented measurement uncertainty. | material register and reject records | kg by material specification |  |
| `water_balance` | `test_water`, `test_discharge` | External intake + initial fill = discharge + retained water + measured losses; internal reuse is not a second intake. | intake, reuse, discharge and retained volume | m3 by test section | `epa-water-main-preparation` |
| `route_sum` | accepted length | Accepted length = sum of non-overlapping signed as-built chainages by method. | as-built chainages and acceptance | m accepted | `fhwa-utility-cuts` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | concrete flow exchanges | Verify each final UUID with compatible type, property, unit, scope and support rows; a Flow Set is not a final UUID. | platform detail and foreground selection record |
| `dq_completion` | whole contract | Cover every accepted chainage and test/repair loop through signed handover; disclose unavailable supplier data. | as-built, acceptance, invoices and gap register |
| `dq_routes` | open-cut and trenchless sections | Preserve location and method for each chainage; do not double count pits, bore or overlapping excavations. | route drawings and daily logs |
| `dq_medium` | testing and conditioning | Retain medium-specific pressure, leakage, potable-water disinfection or sewer inspection evidence as applicable. | signed tests, laboratory results and inspection reports |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `accepted_gate` | reference output | Reject a final output without signed as-built length, applicable test results, restoration and owner acceptance. | `epa-water-main-preparation`; `epa-sewer-evaluation` |
| `handoff_match` | process graph | Prepared alignment and inspected assembly outputs must have matching `line_install` receiving cards; explain length or material differences. |  |
| `route_evidence` | route delta | Require per-chainage evidence for open-cut versus trenchless method, distinct excavation/drilling residuals and reinstatement; one chainage cannot be counted twice. | `fhwa-utility-cuts` |
| `reject_resolution` | defects | Every failed joint or test must have documented rework, return, recovery or disposal; exclude unresolved rejects from accepted output. | `epa-water-main-preparation`; `epa-sewer-evaluation` |
| `water_balance_check` | hydrotest and flushing | Reconcile test-water intake, reuse, discharge and retained volume; record test water as zero only when the actual route uses no water. | `epa-water-main-preparation` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Construction-stage foreground data package for an accepted local pipeline. |
| downstream_use | `secondary_dataset` or `background_dataset` in process and lifecycle-model assemblies after review. |
| allowed_use | Route-, medium-, material- and region-matched local pipeline construction comparisons. |
| excluded_use | Long-distance transmission, pipe manufacturing alone, treatment facilities and distribution-operation service. |
| required_metadata | Medium, duty, pipe specification, accepted length, installation route by chainage, integral structures, test procedure, location, date and signed handover. |
| required_quality_disclosure | Coverage and uncertainty for material balance, cut volume, spoil destination, energy, water, defects, supplier datasets and unresolved UUIDs. |
| update_trigger | Material, route, medium, acceptance or data source changes that alter the model boundary or inventory. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-53251` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, class 53251 Local pipelines, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product boundary and exclusions. |
| `fhwa-utility-cuts` | official_guidance | US Federal Highway Administration, Manual for Controlling and Reducing Pavement Utility Cuts, https://www.fhwa.dot.gov/utilities/utilitycuts/manual.pdf | Open-cut and trenchless route distinction and restoration. |
| `epa-water-main-preparation` | official_guidance | US Environmental Protection Agency, New or Repaired Water Mains, https://www.epa.gov/sites/production/files/2015-09/documents/neworrepairedwatermains.pdf | Water-main test, flush, disinfection and acceptance stages. |
| `epa-sewer-evaluation` | official_guidance | US Environmental Protection Agency, Prevention and Correction of Excessive Infiltration and Inflow into Sewer Systems, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100WH40.TXT | Sewer leakage/air testing and inspection acceptance. |
