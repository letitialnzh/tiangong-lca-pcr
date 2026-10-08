---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.pulled-wool-greasy-including-fleece-washed-pulled-wool-coarse-animal-hair
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pulled greasy wool and coarse animal hair

## 1. Scope and Applicability

This PCR covers two separately declared raw-fibre routes: sheep wool actually detached from a wool-bearing skin at a fellmongery and sold greasy or fleece-washed, and species/grade-qualified coarse animal hair actually clipped, combed, gathered or separated from an eligible documented source. These routes are not physically interchangeable and must not be blended into an unspecified average. State the species, source event, harvest method, grade, moisture, contamination, net sale mass and actual farm, collection or fellmongery handover gate. Fleece remaining attached to a sold skin is not pulled wool. Exclude live-shorn sheep wool, fine animal hair, detached horsehair/bristles outside this category, carded or combed textile preparations, scoured wool, yarn, tanned leather and a whole skin. Washing a skin or fleece before pulling does not authorize downstream wool scouring.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.pulled-wool-greasy-including-fleece-washed-pulled-wool-coarse-animal-hair |
| classification_refs | CPC 3.0 02942 |
| covered_products | Raw greasy or fleece-washed wool pulled from sheep skin; separately declared raw coarse animal hair by species. |
| excluded_products | Shorn sheep wool, fine hair, tanned skin, scoured/carded/combed fibre, yarn and unrelated horsehair or bristles. |
| representative_product | One declared raw-fibre variant sold at its measured handover gate. |
| production_route | Skin-to-pulled-wool and denuded-pelt separation, or independent coarse-hair capture; first cleaning/conditioning as performed, grading and packing. |
| market_state | Raw uncarded/uncombed as-sold fibre; distinguish greasy, fleece-washed and actual coarse-hair condition. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Route-, species-, state- and gate-qualified raw pulled wool or coarse animal hair. |
| How much | 1 kg net as-sold fibre, excluding package and separable foreign material. |
| How well | Declare raw fibre type, grade, moisture/contamination, route, source event and gate; no assumed clean-fibre equivalence. |
| How long or cycle | Link source animal/skin, capture batch, animal phases, shared services and handover to actual periods once. |
| reference_flow_link | `market_fibre` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Route-, species-, state- and gate-specific raw pulled wool or coarse animal hair |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pulled or coarse route; species; harvest/source event; raw condition; grade; moisture; contamination; net mass; gate; reporting period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | every sold lot | Mass | kg | Calibrated gross minus package tare and separable foreign matter gives net as-sold fibre; record moisture separately. |
| m_state | washed or dried batches | Mass and measured moisture fraction | kg;kg/kg | Reconcile before/after mass and water; no universal greasy-to-clean or washed-to-dry conversion. |
| m_balance | each separation and grade batch | Mass | kg | Reconcile input, intended fibres, denuded skin, downgrade, rejects, spent water and moisture loss with measured uncertainty. |
| m_period | upstream and shared services | Service measure and time | service unit;period | Index animal phases, skin acquisition, asset service and output events once. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented wool-bearing sheep skin entering fellmongery, or documented species-specific coarse-hair source entering an independent harvest event. |
| starting_condition_role | Upstream animal husbandry, slaughter or lawful recovery supplies compatible burdens. Fellmongery starts with a separately burdened skin; live-animal hair capture records actual harvest services without treating the entire animal as consumed. Post-mortem coarse source requires a traceable material interface. |
| product_classification_scope | Only detached raw pulled wool or qualifying raw coarse animal hair. |
| recursive_input_rule | Purchased same-category fibre retains its upstream burden; it is not recaptured as new output. |
| upstream_dataset_requirement | Trace animal/skin source, earlier outputs and period allocation; do not assign zero burden to skin or fibre by default. |
| disclosure | Route, species, source event, co-products, skin/pelt and fibre handoffs, grade, moisture, gate, shared assets and allocation. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_routes | source and capture | Pulled route begins with a separately acquired wool-bearing sheep skin. Coarse route uses actual live clipping/combing/collection or eligible documented post-mortem separation, never a fictional fellmongery chemical step. Earlier breeding, meat, dairy and fibre phases remain in compatible upstream data. | fao-animal-fibres-ch4;un-cpc-3-notes |
| b_pull | pulled route | Actual skin wash, detachment aid, pulling and denuded-pelt handover are included only when performed. Saleable pelt is a distinct intended output; wool still attached to an unsplit skin is not a second product. Tanning is outside. | fao-animal-fibres-ch4 |
| b_condition | both routes | First skirting, particulate removal and drying are included as performed; fleece-washing must be declared. Exclude later scouring and textile carding/combing. | fao-animal-fibres-ch4;fao-animal-fibres-ch5 |
| b_gate | final handover | Protect and weigh raw fibre at its actual farm, collection or fellmongery gate; packaging within boundary, distribution beyond gate excluded. | un-cpc-3-notes |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pull | Skin-to-wool separation | conditional | pulled route only | Independent removal from separately obtained skin; hand off wool, saleable pelt and residuals. | kg detached wool and pelt |
| coarse | Coarse-hair capture | conditional | coarse route only | Independent clipping, combing or collection; no fictitious skin treatment. | kg captured coarse hair |
| condition | First raw-fibre conditioning | required | both routes, operations as performed | Skirt/clean and dry; distinguish raw input and prepared output. | kg prepared raw fibre |
| grade | Raw-fibre grading | required | both routes | Separate accepted, saleable downgraded and rejected states and destinations. | kg graded raw fibre |
| pack | Protective presentation and handover | required | both routes | Protect weighed fibre to actual gate, excluding later transport. | kg net market fibre |

The pull and coarse capture nodes are mutually exclusive for a source lot. Pulling is independent of prior husbandry/slaughter and later fibre conditioning. Shared capture tools, fellmongery wash, dryer, sorting floor and press are charged by measured service or throughput across actual consumers and periods; a skin-processing burden is not charged again through the sold pelt.

### Process: Skin-to-wool separation (`pull`)

#### Inputs

##### Product flows

###### Wool-bearing raw sheep skin (`skin_input`)

Separately acquired source for pulled route; retain inherited animal and slaughter burdens.

Denominator and scope requirements：per kg detached pulled wool

Raw quantity and calculation requirements: Weigh received skin and reconcile wool, pelt and residues. Original collection denominator kind: process_output.

- Selected flow: Wool-bearing untanned sheep skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pull`
- Range: Provisional skin-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg detached pulled wool; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Skin-wash water for pulling (`pull_water`)

Only actual water used to wash the skin or fleece before detachment; a dry route has no water input.

Denominator and scope requirements：per kg detached pulled wool

Raw quantity and calculation requirements: Meter the water supplied to each relevant skin batch. Original collection denominator kind: process_output.

- Selected flow: Actual skin-wash process water (conditional flow identities unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pull`
- Range: Provisional wash-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg detached pulled wool; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual pulling aid (`pull_aid`)

Record only an actual substance-specific detachment aid; no universal chemical recipe.

Denominator and scope requirements：per kg detached pulled wool

Raw quantity and calculation requirements: Weigh each substance input by batch and identify its chemistry. Original collection denominator kind: process_output.

- Selected flow: Actual species-specific detachment substance (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pull`
- Range: Provisional aid screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg detached pulled wool; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Detached pulled raw wool (`pulled_raw`)

Fibre is detached from skin at the fellmongery, not simultaneously sold attached to skin.

Denominator and scope requirements：per kg detached pulled wool

Raw quantity and calculation requirements: Weigh actual detached fibre and declare greasy or fleece-washed state. Original collection denominator kind: process_output.

- Selected flow: Raw pulled sheep wool before grading (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pull`
- Range: Node-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg detached pulled wool; node or reference identity
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Saleable denuded pelt (`denuded_pelt`)

Only a truly sold pelt is a co-product with its own gate; unsaleable material follows waste.

Denominator and scope requirements：per kg detached pulled wool

Raw quantity and calculation requirements: Weigh marketed pelt at its actual separate handover. Original collection denominator kind: process_output.

- Selected flow: Untanned sheep pelt after wool removal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pull`
- Range: Provisional pelt screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg detached pulled wool; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pulling waste and spent liquor (`pull_residue`)

Separate discarded pelt, fibre loss and spent liquor by material and destination.

Denominator and scope requirements：per kg detached pulled wool

Raw quantity and calculation requirements: Meter each residual and retain treatment destination. Original collection denominator kind: process_output.

- Selected flow: Actual pulling residual to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Provisional residual screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg detached pulled wool; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Coarse-hair capture (`coarse`)

#### Inputs

##### Product flows

###### Coarse-hair capture energy (`coarse_energy`)

Only energy actually used in clipping, combing or collection; a live animal is an upstream stock, not consumed mass.

Denominator and scope requirements：per kg captured coarse hair

Raw quantity and calculation requirements: Meter or causally attribute each energy carrier. Original collection denominator kind: process_output.

- Selected flow: Actual capture energy carrier (conditional flow identities unresolved)
- Flow property / unit: Carrier-specific / measured unit
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coarse`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh/kg
  - Basis: per kg captured coarse hair; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Captured raw coarse animal hair (`coarse_raw`)

Declare species and live clipping/combing/collection or lawful documented post-mortem separation; do not invent a skin-treatment stage.

Denominator and scope requirements：per kg captured coarse hair

Raw quantity and calculation requirements: Weigh captured hair and link source event and period. Original collection denominator kind: process_output.

- Selected flow: Species-specific raw coarse animal hair (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coarse`
- Range: Node-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg captured coarse hair; node or reference identity
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Unusable capture debris (`coarse_reject`)

Record actual foreign matter and damaged hair separately from intended coarse fibre.

Denominator and scope requirements：per kg captured coarse hair

Raw quantity and calculation requirements: Weigh rejects by treatment destination. Original collection denominator kind: process_output.

- Selected flow: Unusable coarse-hair capture debris (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Provisional reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg captured coarse hair; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First raw-fibre conditioning (`condition`)

#### Inputs

##### Product flows

###### Incoming captured raw fibre (`condition_input`)

Receive either pulled wool or coarse hair with route and species preserved; do not blend them anonymously.

Denominator and scope requirements：per kg first-conditioned raw fibre

Raw quantity and calculation requirements: Weigh incoming batch before first cleaning/drying. Original collection denominator kind: process_output.

- Selected flow: Route-specific captured raw fibre (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Provisional input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg first-conditioned raw fibre; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### First-conditioning water (`condition_water`)

Only water actually used for first cleaning or fleece washing; dry-only lots require none.

Denominator and scope requirements：per kg first-conditioned raw fibre

Raw quantity and calculation requirements: Meter water and identify treated batch. Original collection denominator kind: process_output.

- Selected flow: Actual first-conditioning process water (conditional flow identities unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Provisional water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg first-conditioned raw fibre; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning energy (`condition_energy`)

Count actual first-stage skirting, drying and cleaning services, not later textile scouring.

Denominator and scope requirements：per kg first-conditioned raw fibre

Raw quantity and calculation requirements: Meter actual carrier and shared dryer use once. Original collection denominator kind: process_output.

- Selected flow: Actual conditioning energy carrier (conditional flow identities unresolved)
- Flow property / unit: Carrier-specific / measured unit
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh/kg
  - Basis: per kg first-conditioned raw fibre; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared raw fibre (`condition_output`)

Preserve raw greasy/fleece-washed or coarse state before grading.

Denominator and scope requirements：per kg first-conditioned raw fibre

Raw quantity and calculation requirements: Weigh output and record moisture and foreign matter. Original collection denominator kind: process_output.

- Selected flow: Route-specific first-conditioned raw fibre (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Node-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg first-conditioned raw fibre; node or reference identity
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### First-conditioning rejects and spent water (`condition_residue`)

Distinguish solids from spent water in concrete exchanges and treatment records.

Denominator and scope requirements：per kg first-conditioned raw fibre

Raw quantity and calculation requirements: Meter each stream and destination. Original collection denominator kind: process_output.

- Selected flow: Actual first-conditioning residual to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Provisional residual screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg first-conditioned raw fibre; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Raw-fibre grading (`grade`)

#### Inputs

##### Product flows

###### Prepared fibre for grading (`grade_input`)

Keep route, species and fibre state attached to the incoming lot.

Denominator and scope requirements：per kg graded raw fibre

Raw quantity and calculation requirements: Weigh input and link prior conditioning batch. Original collection denominator kind: process_output.

- Selected flow: Prepared raw fibre for grading (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg graded raw fibre; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted market grade (`grade_accepted`)

Dispatch accepted raw grade to packing with its declared destination.

Denominator and scope requirements：per kg graded raw fibre

Raw quantity and calculation requirements: Weigh accepted grade separately. Original collection denominator kind: process_output.

- Selected flow: Accepted route-specific raw fibre grade (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Grade fraction identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg graded raw fibre; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Saleable downgraded grade (`grade_downgrade`)

A sold lower grade is a separate product handoff, not waste or duplicate accepted grade.

Denominator and scope requirements：per kg graded raw fibre

Raw quantity and calculation requirements: Weigh by lower grade and buyer. Original collection denominator kind: process_output.

- Selected flow: Saleable lower raw-fibre grade (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Grade fraction identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg graded raw fibre; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unsaleable grade rejects (`grade_reject`)

Record damaged, contaminated and foreign material with actual treatment.

Denominator and scope requirements：per kg graded raw fibre

Raw quantity and calculation requirements: Weigh reject separately from saleable downgrade. Original collection denominator kind: process_output.

- Selected flow: Unsaleable fibre sorting rejects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Provisional reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg graded raw fibre; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective presentation and handover (`pack`)

#### Inputs

##### Product flows

###### Accepted raw fibre for packing (`pack_input`)

Receive only the actual declared reference grade; other grades have separate handoffs.

Denominator and scope requirements：per kg net market raw fibre

Raw quantity and calculation requirements: Weigh batch before packaging. Original collection denominator kind: process_output.

- Selected flow: Accepted raw pulled wool or coarse hair (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Range: Provisional input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg net market raw fibre; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bale or bag material (`pack_material`)

Identify single-use or reusable package and its service cycles; downstream freight excluded.

Denominator and scope requirements：per kg net market raw fibre

Raw quantity and calculation requirements: Count or weigh packages and allocate actual reuse cycles. Original collection denominator kind: process_output.

- Selected flow: Actual fibre bale, bag or wrap (conditional flow identities unresolved)
- Flow property / unit: Package-specific / measured unit
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Range: Provisional package screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg net market raw fibre; provisional screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net market raw fibre (`market_fibre`)

Reference product has one declared route, species, state, grade and gate; attached fleece is excluded.

Raw reference-output records: Measure gross, tare, net and moisture for actual sale. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Route-, species-, state- and gate-specific raw pulled wool or coarse animal hair
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Range: Reference-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg net market raw fibre; node or reference identity
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_skin | pulled route | Attribute inherited skin and pulling burdens between detached wool and separately sold denuded pelt using documented causal subdivision where supported; otherwise justify one physical or economic allocation for the complete output set with period/price evidence. Never assign zero by default or charge the skin twice. A nonsaleable pelt follows waste treatment. | fao-animal-fibres-ch4 |
| a_coarse | coarse route | Attribute actual animal phase burdens among coarse fibre and independently marketed milk, meat, fine down or other real outputs at their respective periods. Live capture does not consume the whole animal; post-mortem material uses its own traceable source allocation. | fao-animal-fibres-ch4 |
| a_period | both routes | Index breeding, lactation, fibre harvest, slaughter/recovery and replacement by actual cohort periods; assign each event and output once, with no universal lifetime or fibre yield. | fao-animal-fibres-ch4 |
| a_shared | both routes | Allocate shared capture tools, wash systems, dryers, sorting floor and press to actual consuming nodes and service periods by measured time, metered use or supported throughput; do not duplicate shared burden. | fao-animal-fibres-ch4 |
| a_grades | all grades | Each accepted and downgraded sale grade has one handover and attributable service; rejects and wastewater retain actual treatment burdens, not second product credits. | fao-animal-fibres-ch4 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pull | pull | skin, aid, wool and pelt | batch ledger | skin source/weight, moisture, aid identity/weight, raw wool, pelt, treatment, dispatch | scale, meter and receiving/dispatch ticket; Raw aggregation requirements: reconcile by source and batch. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each batch | all pull events | actual fellmongery | per reference flow | calibration and source ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_coarse | coarse | capture event, energy and hair | cohort/lot ledger | species, source, event, method, phase, energy carrier/amount, coarse/fine hair | capture log, meter and scale; Raw aggregation requirements: reconcile by cohort and lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;carrier unit;period | each event | all source periods | actual farm or collector | per reference flow | capture and meter records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_condition | condition | incoming, water, energy, prepared fibre | batch ledger | input/output mass, moisture, wash method, water, carrier, rejects | scale and utility meter; Raw aggregation requirements: sum once by route and state. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;carrier unit | each batch | complete conditioning period | actual site | per reference flow | meter and moisture test; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_grade | grade | accepted, downgraded and reject | grade ledger | route, species, grade, input/output weights, buyer, treatment destination | scale and grade ticket; Raw aggregation requirements: sum by grade and destination. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each batch | complete grading period | actual site | per reference flow | grade/dispatch record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_pack | pack | net fibre and package | dispatch ledger | grade, gross, tare, net, moisture, gate, package type/mass/reuse | calibrated scale and dispatch ticket; Raw aggregation requirements: sum net by variant and gate. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;count | each lot | complete dispatch period | actual site | per reference flow | calibration and sale ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_residue | pull;coarse;condition;grade | waste and liquor | residue ledger | stream identity, origin, mass, treatment and destination | scale, effluent meter and treatment ticket; Raw aggregation requirements: sum by stream, never as product. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each stream | complete process period | actual site | per reference flow | meter and disposal record; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | sale lot | Net as-sold fibre = measured gross minus package tare and separable foreign matter; disclose moisture instead of clean-fibre conversion. | cp_pack | kg net fibre | fao-animal-fibres-ch4 |
| c_balance | each node | Incoming skin/fibre plus measured water/aids = product outputs plus waste, moisture change, stock change and residual; investigate residual against meter uncertainty. | cp_pull;cp_coarse;cp_condition;cp_grade;cp_residue | kg residual by route | fao-animal-fibres-ch4 |
| c_attr | source and shared operations | Attribute actual burdens once by phase/output and shared service; record method, denominator and every saleable destination. | cp_pull;cp_coarse;cp_grade | attributable burden by variant | fao-animal-fibres-ch4 |
| c_norm | reference lot | Divide attributable quantity by strictly positive net mass of declared route, grade, state and gate. | cp_pack;cp_pull;cp_coarse | amount/kg reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | each route and lot | Prove species, skin source or capture event, raw condition, grade, gate and category boundary. | source and grade tickets |
| q_mass | each batch | Calibrate scales/meters, measure moisture and reconcile skin/pelt/wool or coarse hair without default conversion. | calibration and mass balance |
| q_attribution | outputs and periods | Retain animal phase, inherited skin burden, pelt/hair sale, shared equipment and allocation worksheet. | cohort, source, invoice and service records |
| q_uuid | concrete exchange | Resolve exact flow type, state, direction, property and gate before final TIDAS exchange. | verified platform detail and support rows |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference lot | Reject shorn wool, fine hair, attached fleece in sold skin, carded/combed/scoured material or absent route, species, state, net mass or gate. | un-cpc-3-notes |
| v_route | source and capture | Pulled lots require separate incoming skin and detached wool/pelt outputs; coarse lots require actual species/event and must not inherit fictional skin wash/depilation. | fao-animal-fibres-ch4 |
| v_mass | each batch | Reconcile all grades, pelt, rejects, utilities and moisture within measured uncertainty; reject undocumented raw-to-clean factors. | fao-animal-fibres-ch4 |
| v_attribution | animal and shared services | Reject duplicate attached/detached wool, unsupported zero-burden skin, repeated animal period, pelt or shared-asset burden. | fao-animal-fibres-ch4 |
| v_uuid | final exchanges | Unresolved cards remain semantic only; each final exchange requires one detail-verified concrete UUID and compatible property/unit group. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-, species-, state-, grade- and gate-qualified foreground raw fibre. |
| downstream_use | Candidate secondary_dataset or background_dataset after concrete identity, review and publication. |
| allowed_use | Measured like-for-like raw-fibre variant and actual route with disclosed co-products. |
| excluded_use | Substituting pulled wool for unrelated coarse hair, default clean-fibre conversion, attached skin or unsupported zero burden. |
| required_metadata | Species, source event, route, grade, raw/fleece-washed state, contamination, moisture, net mass, gate, periods and allocation. |
| required_quality_disclosure | Skin/pelt and coarse-hair output ledger, shared services, wash/aids, rejects, mass residual and unresolved UUIDs. |
| update_trigger | Verified exact product UUID, changed route/gate or source-backed moisture, allocation or yield evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-notes` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | product boundary |
| `fao-animal-fibres-ch4` | official_guidance | [FAO Harvesting of textile animal fibres, chapter 4](https://www.fao.org/4/v9384e/v9384e09.htm) | pulling, pelt, capture, first conditioning and attribution |
| `fao-animal-fibres-ch5` | official_guidance | [FAO Harvesting of textile animal fibres, chapter 5](https://www.fao.org/4/v9384e/v9384e10.htm) | raw-fibre handling and grading |
