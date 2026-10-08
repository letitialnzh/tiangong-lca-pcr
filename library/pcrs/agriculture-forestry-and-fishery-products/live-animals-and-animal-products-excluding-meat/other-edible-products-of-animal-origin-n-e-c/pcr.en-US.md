---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-edible-products-of-animal-origin-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other edible products of animal origin n.e.c.

## 1. Scope and Applicability

This residual method covers one concrete edible animal-origin good not classified elsewhere in CPC 3.0. Each lot requires a named product and animal source, legal provenance, human-food eligibility, sold state, classification decision and actual gate. Edible bird nests, turtle eggs, royal jelly and propolis are possible examples only after individual classification and legal review; none stands for the whole class. The method does not assert their legality in any jurisdiction. Exclude non-living edible insects (02931), natural honey, ordinary bird eggs, raw milk, meat, snails, non-food goods and differently classified finished food. A species-free average or universal yield is invalid.

A compatible source-specific upstream record carries source production and its biological phases. Foreground collection is an independent interface; first preparation and preservation are performed only when real, followed by food grading and protective handover. Purchased goods enter at their actual later node with upstream burdens; do not invent another harvest. The gate is the real production or first-collection handoff, excluding distribution, retail and further food manufacture.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-edible-products-of-animal-origin-n-e-c |
| classification_refs | CPC 3.0 02939; check each named good against more specific positions. |
| covered_products | One lawful, human-edible residual animal-origin good with confirmed product classification. |
| excluded_products | Insects, natural honey, ordinary eggs, raw milk, meat, snails, non-food goods and differently classified prepared foods. |
| representative_product | One named, source-qualified good in one sold state; examples do not define a universal representative. |
| production_route | Actual lawful source collection, performed first preparation/preservation, grading and protective handover. |
| market_state | Net edible product with source, legality, food status, moisture, grade, package tare and gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One named, classification-confirmed residual edible animal-origin product. |
| How much | 1 kg net saleable product excluding package and separately removed inedible matter. |
| How well | Declare animal species/source, legal and food status, grade, moisture, physical state and gate. |
| How long or cycle | Link source establishment, productive/termination periods, collection and shared services to real lots once. |
| reference_flow_link | `sold` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Source-, state- and gate-qualified other edible animal-origin good |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | named good; animal species/source; lawful provenance; CPC and food status; moisture; grade; sold state; net/tare; gate; period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | sold lot | Mass | kg | Calibrated gross minus package tare and separately removed inedible matter; disclose retained moisture. |
| m_states | each performed node | Mass | kg | Reconcile before/after state and actual additions/removals; never apply a cross-product yield. |
| m_period | source and shared assets | Time | period | Assign source, collection, replacement and shared-service events to their actual period once. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A named lawful animal, colony or nest-source good at actual collection, or documented purchased material in its entering state. |
| starting_condition_role | Compatible source-specific upstream dataset carries source production, phases and actual co-products; foreground begins at independent collection or purchased handoff. |
| product_classification_scope | CPC 02939 only after checking exclusions and all more specific CPC positions for the named good. |
| recursive_input_rule | Purchased same-category goods retain upstream burden and enter their true later node, never a second fictitious collection. |
| upstream_dataset_requirement | Source/species, legal chain, source periods, real output set, incoming state and burden coverage. |
| disclosure | Named good, classification rationale, legal/food status, actual route, periods, output set, gate and unresolved identities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_identity | each lot | Require concrete good, lawful provenance, food eligibility and residual CPC classification; examples do not prove 02939. | un-cpc-3;eu-residual |
| b_collect | source collection | Distinguish actual animal, colony or nest production from independent removal, incidental losses and collected handoff; purchased goods bypass collection. | eu-residual |
| b_prepare | first preparation | Include actual first cleaning/separation, water or service inputs, collected/prepared handoff and non-food rejects; bypass when absent. | eu-residual |
| b_preserve | preservation | Identify usable before/after state, actual energy and services, residues, evaporation and rejects; bypass when absent. | eu-residual |
| b_grade | grades and gate | Enumerate accepted, separately saleable downgrade and ineligible reject with distinct destinations; protect to actual gate, excluding freight. | un-cpc-3 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| collect | Source-qualified collection | conditional | actual new lawful source; purchased material bypasses collection | Independent source-to-collected handoff; incidental loss separate | kg output of node |
| prepare | First hygienic preparation | conditional | actual cleaning or separation | Raw collected to prepared state; water and rejects recorded | kg output of node |
| stabilize | Optional preservation | conditional | actual permitted stabilizing intervention | Usable before/after states, energy and reject recorded | kg output of node |
| grade | Food-grade sorting | required | concrete edible lot | Accepted, saleable lower grade and ineligible reject have separate destinations | kg output of node |
| handover | Protective presentation and handover | required | saleable food-qualified lot | Actual package/reuse role, net product and source/first-collection gate | kg output of node |

One concrete source route is required. Nest, secretion and egg collection have no common biological operation or yield. Enumerate every real marketed source output at its own handoff, plus incidental residues; make a source-specific attribution decision. Each conditional node has a measured entering and leaving state and is bypassed if not performed. Shared collection, cleaning, chilling, sorting and packing assets attach to actual nodes and periods once. A downgraded grade is a second Product only when independently saleable and food-eligible; ineligible rejects are never food outputs.

### Process: Source-qualified collection (`collect`)

#### Inputs

##### Product flows

###### Lawful source-held material (`source`)

One concrete edible animal-origin good at a documented animal, colony or nest source; upstream source production is not recounted.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Source-qualified animal-origin material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collect`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected qualifying product (`collected`)

Hand off the weighed collected state once, including source and actual period.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Collected source-qualified edible product (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collect`
- Range: Measured normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Collection incidental and reject (`collection_reject`)

Separate unusable material from marketed co-products and document its destination.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Non-food collection residue (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: First hygienic preparation (`prepare`)

#### Inputs

##### Product flows

###### Collected material for first preparation (`preparation_in`)

Conditional on actual cleaning or separation; otherwise bypass to grading.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Collected edible animal-origin material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditional cleaning water (`cleaning_water`)

Meter Product water only if wet cleaning is performed; trace wastewater destination.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Actual supplied cleaning water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-prepared qualifying product (`prepared`)

Record measured prepared state and next handoff; no cross-product yield.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: First-prepared source-qualified edible product (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`
- Range: Measured normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### First-preparation reject (`preparation_reject`)

Classify inedible contamination, debris and actual destination; do not call it edible output.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Non-food preparation residue (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Optional preservation (`stabilize`)

#### Inputs

##### Product flows

###### Usable product before preservation (`stabilization_in`)

Use the actual collected or prepared input when a bounded preservation step occurs.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Source-qualified product before preservation (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilize`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual preservation energy (`energy`)

Meter actual energy carrier for performed chilling, drying or other lawful stabilization.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Actual energy carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilize`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: MJ/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized qualifying product (`stabilized`)

Measure after-state and moisture, then hand off to grading.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Stabilized source-qualified edible product (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilize`
- Range: Measured normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Preservation reject (`stabilization_reject`)

Record spoiled/rejected matter by legal destination; evaporation is a separate balance term.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Non-food preservation reject (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Food-grade sorting (`grade`)

#### Inputs

##### Product flows

###### Qualifying material before grading (`grading_in`)

Select exactly one actual collected, prepared or stabilized predecessor state.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Source-qualified edible product before grade (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted food-grade product (`accepted`)

Declare food status, state and destination to handover.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Accepted source-qualified edible product (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Measured normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Separately saleable lower grade (`downgrade`)

Only if independently marketable and food-eligible; otherwise classify as reject.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Food-eligible downgraded product (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Food-ineligible reject (`grade_reject`)

Document legal non-food disposition, never an edible grade.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Food-ineligible animal-origin reject (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Protective presentation and handover (`handover`)

#### Inputs

##### Product flows

###### Accepted product before package (`handover_in`)

Transfer accepted grade once to protective presentation.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Accepted source-qualified edible product (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual food-contact package (`package`)

Record package material, tare and reuse or single-use service.

Denominator and scope requirements：per kg output of the corresponding process

Raw quantity and calculation requirements: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Original collection denominator kind: process_output.

- Selected flow: Actual food-contact package or reusable service (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net qualified product at source gate (`sold`)

Net mass excludes package at the real production or first-collection gate.

Raw reference-output records: Measure the actual flow by source, lot and period; bypassed conditional nodes are not modelled. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Source-, state- and gate-qualified other edible animal-origin good
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Measured normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg output of corresponding process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_source | actual source output set | Enumerate each intended product, amount and gate. Use measured causal attribution when supported; otherwise document period-specific economic allocation with sensitivity. Do not assign automatic zero or entire source burden to 02939. | eu-residual |
| a_grade | grades and residue | Accepted and separately saleable downgraded goods have disjoint masses/destinations; non-food rejects and incidental residue are not extra edible products. | un-cpc-3 |
| a_period | phases and shared service | Index source establishment/productive/replacement/termination periods; assign observed shared-service time or throughput to consuming nodes/lots once with evidence. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_collect | collect | source and collected good | source ledger | good, species, legal/food status, real outputs, mass, gate, period | source ticket and calibrated scale; Raw aggregation requirements: once per output/lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each lot | source and collection periods | source and collector | per reference flow | source, legal and scale records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_prepare | prepare | first cleaning and prepared good | batch ledger | state, mass in/out, water, service, rejects | ticket, scale and meter; Raw aggregation requirements: measured state balance. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each performed lot | preparation period | site | per reference flow | ticket and calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_stabilize | stabilize | optional preservation | preservation ledger | pre/post state, mass, moisture, temperature, energy, losses | meter, scale and assay; Raw aggregation requirements: before/after balance. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;MJ | each performed lot | preservation period | site | per reference flow | meter and assay; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_grade | grade | grades and destinations | grade ledger | accepted, downgrade, reject, food decision, destinations | grade ticket and scale; Raw aggregation requirements: disjoint output set. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | grading period | site | per reference flow | grade/destination records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_handover | handover | net sale, package, gate | dispatch ledger | state, moisture, gross, tare, net, package reuse, gate | dispatch ticket and scale; Raw aggregation requirements: one net handover/lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | handover period | site | per reference flow | ticket and calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_reject | collect;prepare;stabilize;grade | residue/waste | disposition ledger | lot, type, mass, legal status, destination | weighing and transfer ticket; Raw aggregation requirements: once per terminal destination. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each event | relevant period | site | per reference flow | transfer record; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | sale lot | Net qualified good = gross - package tare - separately removed inedible matter; use actual moisture, not a universal dry conversion. | cp_handover | kg net good |  |
| c_balance | performed nodes | Reconcile material input and additions with food outputs, rejects, measured water loss and stock change; investigate residual. | cp_collect;cp_prepare;cp_stabilize;cp_grade;cp_reject | kg balance residual |  |
| c_period | source and shared assets | Link each source phase and shared service to real lots and periods, allocating once by observed use. | cp_collect;cp_prepare;cp_stabilize;cp_handover | burden/kg |  |
| c_norm | concrete exchange | Divide attributable exchange by positive net mass of the same named good/source/state/gate lot. | cp_handover | unit/kg good |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | each lot | Verify residual CPC classification, named good/species, legal chain, food eligibility, sold state and gate. | source, legal, food and dispatch records |
| q_mass | each lot | Calibrate gross/tare and before/after mass; assay relevant moisture/contamination. | scale, assay and balance |
| q_allocation | source and shared assets | Complete real output set, phases, attribution driver and nonduplicated asset burden. | output, service and period ledgers |
| q_uuid | each concrete exchange | Confirm flow type, role, source, state, gate, property and unit support before fixed UUID. | detail verification evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference lot | Reject generic other-animal averages, insects, honey, ordinary eggs, raw milk, meat, snails, non-food goods and elsewhere-classified food; require legal and food evidence. | un-cpc-3;eu-residual |
| v_route | source | Require real source or documented purchased input; reject fictitious common biology, duplicate collection and unperformed treatment. | eu-residual |
| v_balance | each lot | Reconcile performed states, additions/removals, grade/reject destinations and net dispatch. |  |
| v_allocation | periods/outputs | Reject omitted real co-products, duplicate grades, zero/full automatic burden and duplicate shared service. |  |
| v_identity | final exchange | Verify named good, source, state, gate, direction/type and property/unit support. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | One source-, route-, state-, grade- and gate-qualified residual edible animal-product foreground dataset. |
| downstream_use | Candidate secondary_dataset or background_dataset only after concrete identity review and publication. |
| allowed_use | Same named good/source/state comparison or measured conditional conversion. |
| excluded_use | Cross-good proxy, unlawful or non-food source, undocumented food status, downstream prepared food and universal yield. |
| required_metadata | Named good, residual classification rationale, species/source, legality, food status, state/moisture, net mass, gate, periods, outputs and bypasses. |
| required_quality_disclosure | Output/period attribution, shared-asset driver, mass balance, reject fate and unresolved UUIDs. |
| update_trigger | Exact platform identity confirmation, classification/legal/source change or measured route evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Residual class and adjacent exclusions. |
| `eu-residual` | official_guidance | [EU animal-origin food rules and residual examples](https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1744429744827&uri=CELEX%3A02021R0632-20220818) | Candidate examples and food-use checks, not universal CPC classification. |
