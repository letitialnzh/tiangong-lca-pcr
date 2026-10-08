---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bovine-semen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bovine semen

## 1. Scope and Applicability

This PCR covers usable semen from cattle and buffalo donors at the collection-centre dispatch gate. Another Bovini donor, such as bison, requires direct species and route evidence, not assumed cattle factors. Fresh, chilled and frozen doses are distinct routes. Live bulls, embryos, non-bovine semen, insemination services and post-dispatch distribution are excluded. Physically combined centre tasks retain separately measured interfaces where material or quality state changes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bovine-semen |
| classification_refs | CPC 3.0 `02411` |
| covered_products | Usable cattle and buffalo semen doses; other Bovini only with donor-specific evidence. |
| excluded_products | Live bulls, embryos, non-bovine semen, rejected material without a product handoff, insemination services. |
| representative_product | One quality-accepted dose in a sealed straw at centre dispatch. |
| production_route | Donor management → collection → quality grading → first preparation → extender formulation → filling → conditional preservation → dispatch packaging. |
| market_state | Fresh, chilled or frozen; donor, quality, volume, sperm count, container and centre gate declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One usable bovine semen insemination dose at centre dispatch. |
| How much | 1 accepted dose; report measured volume or mass and sperm count. |
| How well | Declared donor species/breed, health status, acceptance grade, motility, viability, sperm count, extender and preservation state. |
| How long or cycle | One collection-to-dispatch batch with upkeep allocated across its observed donor period. |
| reference_flow_link | `usable_dose` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Usable bovine semen dose at collection-centre dispatch |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Donor species/breed and health; batch; sperm concentration/count, motility and grade; dose volume; fresh/chilled/frozen state; extender; container; centre gate; reporting period. |

The platform mass-based farm-gate bovine-semen candidate is not a centre-dispatch dose and has contradictory non-bovine commentary. It is not bound.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `dose_identity` | reference output | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count only quality-accepted released doses; one item is one dose meeting the declared specification, not one sperm or an arbitrary container. Report sperm count and viability separately. |
| `material_balance` | semen, extender and filled doses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` or calibrated volume | kg or mL | Reconcile raw semen and extender with accepted, downgraded, rejected and lost material using measured density where conversion is needed. |
| `state_separation` | preservation | dose count | dose | Fresh, chilled and frozen units require separate denominators and quality specifications, not universal equivalence. |
| `period_link` | donor upkeep | donor-days and dose count | day; dose | Attribute service and outputs to the same documented donor period. |
| `accepted_item_count` | reference product and its output card | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | The machine unit item is the local representation of the confirmed unit-group reference unit Item(s), with multiplier 1. One item means one quality-accepted breeding dose of the declared species, state, grade and release specification. Preserve native dose counts in collection records. This count representation does not equate containers, volume, sperm count, oocytes or treatment attempts to accepted goods, and does not establish equivalence across species, states or dose specifications. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified eligible bovine donor entering a recorded centre service period, plus upstream feed, water, energy, extender, packaging and cryogen supplies. |
| starting_condition_role | Donor biological management and centre preparation of reproductive goods, not live-animal sale or insemination service. |
| product_classification_scope | CPC 3.0 `02411`; cattle and buffalo, with other Bovini only on direct evidence. |
| recursive_input_rule | Purchased bovine semen is a traced upstream input, never counted again as on-site donor production. |
| upstream_dataset_requirement | Species- and route-matched supplies, utilities, consumables and capital services. |
| disclosure | Donor, period, gate, health/quality criteria, state route, rejects, co-outputs, shared assets and allocation. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | all routes | End at quality release from the collection centre after actual preparation and protective packing; exclude later distribution and insemination. | `woah-hygiene-2024`; `woah-bovine-2024` |
| `donor` | donor management | Trace cattle and buffalo separately; other Bovini need source-specific evidence. Attribute observed feed, water, health and residues by donor-period, not a universal straw factor. | `un-cpc-3`; `fao-cryoconservation-2021` |
| `interfaces` | centre processing | Identify collected raw, graded, first prepared, formulated bulk, filled, preserved and packed states; record rejected and lost states. | `woah-hygiene-2024`; `fao-cryoconservation-2021` |
| `route_delta` | preservation | Fresh, chilled and frozen are mutually exclusive final states. The preservation parent activity differs in energy, cryogen, storage time, testing and losses; partition mixed lots. | `fao-cryoconservation-2021` |
| `shared_service` | assets | Housing, laboratory, refrigeration and reusable vessels serve multiple nodes or periods; record service and burden once, separately from disposable packaging. | `woah-hygiene-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `donor_management` | Donor-bull management | required | observed donor period | Biological maintenance, culls and residues | accepted doses per donor-period |
| `semen_collection` | Semen collection | required | each collection event | Independent ejaculate capture | mL raw ejaculate |
| `quality_grading` | Quality evaluation and grading | required | each ejaculate | Accepted, downgraded and rejected states | mL graded semen |
| `first_preparation` | First semen preparation | required | each prepared batch | Raw-to-prepared handoff and rejects | mL prepared semen |
| `formulation` | Extender formulation | required | each formulation batch | Composition inputs to bulk state | mL formulated bulk |
| `dosing` | Dose filling and sealing | required | each fill run | Bulk-to-discrete handoff | filled dose count |
| `preservation` | Chilling or cryopreservation | conditional | if preservation before dispatch | State-specific intervention and losses | accepted preserved doses |
| `centre_dispatch` | Protective packing and dispatch | required | each released lot | Final dose and package handoff | 1 accepted dose |

### Process: Donor-bull management (`donor_management`)

#### Inputs

##### Product flows

###### Donor feed and forage (`donor_feed`)

Measure feed dry matter by donor species and service period.

Denominator and scope requirements：per accepted dose

Raw quantity and calculation requirements: Recorded intake allocated across documented donor-days and accepted doses. Original collection denominator kind: reference_flow.

- Selected flow: Donor feed and forage (UUID unresolved)
- Flow property / unit: Mass / kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Range: Provisional screen, not a factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg dry matter per dose
  - Basis: donor-period intake divided by linked accepted doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Donor water (`donor_water`)

Measure drinking and husbandry water; its precise supply group depends on foreground use.

Denominator and scope requirements：per accepted dose

Raw quantity and calculation requirements: Meter or reconcile tanks for donor period. Original collection denominator kind: reference_flow.

- Selected flow: Donor water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Range: Provisional water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per dose
  - Basis: measured donor-period supply over linked accepted doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent live donor cull (`donor_cull`)

Only an actual legitimate animal handoff is an independent output.

Denominator and scope requirements：per donor period

Raw quantity and calculation requirements: Record transferred mass and donor-period attribution. Original collection denominator kind: process_output.

- Selected flow: Culled bovine animal (UUID unresolved)
- Flow property / unit: Mass / kg live mass
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Range: Conditional cull mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg per donor period
  - Basis: actual transferred live animal
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Donor manure to treatment (`donor_manure`)

Classify as waste only when not independently transferred as a useful product.

Denominator and scope requirements：per accepted dose

Raw quantity and calculation requirements: Measure manure by treatment path, period and donor group. Original collection denominator kind: reference_flow.

- Selected flow: Managed donor manure (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Range: Provisional manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg per dose
  - Basis: donor-period treatment waste over linked doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric biogenic methane to air (`enteric_ch4_air`)

Donor enteric methane is calculated from the documented species, intake and donor-days, not from a flow UUID as a factor.

Denominator and scope requirements：per accepted dose

Raw quantity and calculation requirements: Apply a disclosed species-appropriate enteric method to donor-days and measured activity. Original collection denominator kind: reference_flow.

- Selected flow: Methane, biogenic `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg CH4
- Binding: `fixed`
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Sources: `ipcc-livestock-2019`
- Range: Provisional emissions screen, not factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg CH4 per dose
  - Basis: species-specific donor period over linked accepted doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure nitrous oxide to air (`manure_n2o_air`)

Apply a documented manure-system method to donor-specific excretion and management rather than borrowing a universal factor.

Denominator and scope requirements：per accepted dose

Raw quantity and calculation requirements: Calculate manure-system N2O for actual managed manure and donor period. Original collection denominator kind: reference_flow.

- Selected flow: Nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: `fixed`
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Sources: `ipcc-livestock-2019`
- Range: Provisional emissions screen, not factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg N2O per dose
  - Basis: managed-manure emissions over linked accepted doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure ammonia to air (`manure_nh3_air`)

Calculate reported ammonia from actual housing and manure-management pathway with method and nitrogen basis declared.

Denominator and scope requirements：per accepted dose

Raw quantity and calculation requirements: Calculate reported NH3 from recorded manure and housing pathway; do not infer a factor from identity. Original collection denominator kind: reference_flow.

- Selected flow: Ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: `fixed`
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Sources: `ipcc-livestock-2019`
- Range: Provisional emissions screen, not factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg NH3 per dose
  - Basis: reported manure ammonia over linked accepted doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Semen collection (`semen_collection`)

#### Inputs

##### Product flows

###### Collection consumables (`collection_consumables`)

Record contacting sleeves and single-use collection materials; reusable equipment is a service.

Denominator and scope requirements：per collection event

Raw quantity and calculation requirements: Issued less unused or reusable returns. Original collection denominator kind: process_output.

- Selected flow: Collection consumables (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collection`
- Sources: `woah-hygiene-2024`
- Range: Provisional consumable screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg per event
  - Basis: material consumed at collection
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw collected ejaculate (`raw_ejaculate`)

The collected state transfers independently from animal management to laboratory evaluation.

Denominator and scope requirements：per collection event

Raw quantity and calculation requirements: Measure collection volume by donor and event, including failed events. Original collection denominator kind: process_output.

- Selected flow: Raw bovine ejaculate (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collection`
- Sources: `woah-bovine-2024`
- Range: Provisional collection-volume screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: mL per event
  - Basis: raw volume collected
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Quality evaluation and grading (`quality_grading`)

#### Inputs

##### Product flows

###### Ejaculate submitted to grading (`grading_input`)

Keep donor and collection-event linkage through quality tests.

Denominator and scope requirements：per grading event

Raw quantity and calculation requirements: Transfer collected volume net of separately recorded samples. Original collection denominator kind: process_output.

- Selected flow: Raw bovine ejaculate to grading (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quality`
- Range: Grading-input balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: mL per event
  - Basis: submitted raw volume
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted semen grade (`accepted_grade`)

Accepted grade transfers to preparation after sperm count, motility and other declared tests.

Denominator and scope requirements：per grading event

Raw quantity and calculation requirements: Sum accepted graded portions by donor and destination. Original collection denominator kind: process_output.

- Selected flow: Quality-accepted raw bovine semen (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quality`
- Sources: `woah-bovine-2024`
- Range: Accepted-grade volume
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: mL per event
  - Basis: accepted portion
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent downgraded grade (`downgraded_grade`)

Only a separate usable specification and actual handoff permit an intended lower-grade product.

Denominator and scope requirements：per grading event

Raw quantity and calculation requirements: Measure independently transferred lower-grade material; otherwise reject. Original collection denominator kind: process_output.

- Selected flow: Downgraded bovine semen (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quality`
- Range: Conditional downgraded-grade volume
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: mL per event
  - Basis: independent intended handoff only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Quality rejects (`grading_reject`)

Failed-quality semen and assay residue follow the documented waste destination.

Denominator and scope requirements：per grading event

Raw quantity and calculation requirements: Reconcile input with accepted, downgraded, sampled and rejected states. Original collection denominator kind: process_output.

- Selected flow: Rejected raw bovine semen and test residue (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quality`
- Range: Rejected-volume balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: mL per event
  - Basis: actual reject and sample
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First semen preparation (`first_preparation`)

#### Inputs

##### Product flows

###### Accepted raw input (`preparation_input`)

The first bounded laboratory preparation receives quality-accepted raw semen.

Denominator and scope requirements：per preparation batch

Raw quantity and calculation requirements: Measured accepted volume transferred from grading. Original collection denominator kind: process_output.

- Selected flow: Accepted raw bovine semen (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation`
- Range: Preparation-input volume
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: mL per batch
  - Basis: accepted material received
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared semen (`prepared_semen`)

Prepared usable state, net of removed fractions, transfers to extender blending.

Denominator and scope requirements：per preparation batch

Raw quantity and calculation requirements: Measure recovered volume and sperm count. Original collection denominator kind: process_output.

- Selected flow: Prepared bovine semen before extension (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation`
- Range: Prepared-volume balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: mL per batch
  - Basis: usable prepared state
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preparation rejects (`preparation_reject`)

Removed fractions and unusable prepared portions go to the actual waste treatment.

Denominator and scope requirements：per preparation batch

Raw quantity and calculation requirements: Reconcile input, prepared output, sample and loss. Original collection denominator kind: process_output.

- Selected flow: Semen-preparation reject (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation`
- Range: Conditional preparation reject
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: mL per batch
  - Basis: removed unusable material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Extender formulation (`formulation`)

#### Inputs

##### Product flows

###### Prepared semen component (`formulation_semen`)

Measure the semen component entering the recorded composition recipe.

Denominator and scope requirements：per formulation batch

Raw quantity and calculation requirements: Measured semen input per batch. Original collection denominator kind: process_output.

- Selected flow: Prepared bovine semen before extension (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Range: Semen-component volume
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: mL per batch
  - Basis: prepared semen in formulation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Extender components (`extender_components`)

Record actual diluent, buffer, nutrients, antibiotic if used and cryoprotectant for the frozen route; no universal recipe.

Denominator and scope requirements：per formulation batch

Raw quantity and calculation requirements: Weigh each component and reconcile with formulated bulk. Original collection denominator kind: process_output.

- Selected flow: Semen extender components (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Sources: `fao-cryoconservation-2021`
- Range: Provisional component-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg per batch
  - Basis: all actual recipe ingredients
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formulated bulk semen (`formulated_bulk`)

Quality-accepted blended bulk transfers to discrete dose filling.

Denominator and scope requirements：per formulation batch

Raw quantity and calculation requirements: Measure batch bulk volume and composition. Original collection denominator kind: process_output.

- Selected flow: Formulated bovine semen bulk (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Range: Formulated bulk balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: mL per batch
  - Basis: accepted mixed bulk
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Off-spec formulation (`formulation_reject`)

Failed mixture goes to declared disposal unless separately demonstrated as a useful independent output.

Denominator and scope requirements：per formulation batch

Raw quantity and calculation requirements: Inputs minus accepted bulk and measured process losses. Original collection denominator kind: process_output.

- Selected flow: Off-spec semen formulation (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Range: Conditional off-spec volume
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: mL per batch
  - Basis: rejected formulated state
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Dose filling and sealing (`dosing`)

#### Inputs

##### Product flows

###### Formulated bulk for filling (`dosing_bulk`)

Measured mixture enters the separate bulk-to-discrete-dose responsibility.

Denominator and scope requirements：per fill run

Raw quantity and calculation requirements: Measure input by fill run. Original collection denominator kind: process_output.

- Selected flow: Formulated bovine semen bulk (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dosing`
- Range: Filling-input balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: mL per run
  - Basis: formulated input to filling
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dose straws and seals (`straws`)

Count primary containers and seals; secondary dispatch packages are separate.

Denominator and scope requirements：per fill run

Raw quantity and calculation requirements: Issued minus unused returns, reconciled to filled and rejected units. Original collection denominator kind: process_output.

- Selected flow: Dose straws and seals (UUID unresolved)
- Flow property / unit: Count / item
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dosing`
- Sources: `woah-bovine-2024`
- Range: Straw-count balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: items per run
  - Basis: issued primary containers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted filled doses (`filled_doses`)

Filled sealed units move to preservation or directly to dispatch packing if fresh.

Denominator and scope requirements：per fill run

Raw quantity and calculation requirements: Count quality-accepted fills with volume and sperm count by lot. Original collection denominator kind: process_output.

- Selected flow: Filled bovine semen dose before preservation (UUID unresolved)
- Flow property / unit: Count / dose
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dosing`
- Range: Accepted-fill count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: doses per run
  - Basis: acceptable discrete units
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected fills (`fill_reject`)

Underfilled, broken and unsealed units follow waste destination; track lost semen volume separately.

Denominator and scope requirements：per fill run

Raw quantity and calculation requirements: Count rejects and reconcile associated material loss. Original collection denominator kind: process_output.

- Selected flow: Rejected filled bovine semen dose (UUID unresolved)
- Flow property / unit: Count / dose
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dosing`
- Range: Reject-count balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: doses per run
  - Basis: failed units
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Chilling or cryopreservation (`preservation`)

#### Inputs

##### Product flows

###### Filled doses to preservation (`preservation_input`)

Fresh doses bypass this intervention; chilled and frozen lots enter by documented route.

Denominator and scope requirements：per preservation batch

Raw quantity and calculation requirements: Count route-assigned incoming filled units. Original collection denominator kind: process_output.

- Selected flow: Filled bovine semen dose before preservation (UUID unresolved)
- Flow property / unit: Count / dose
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation`
- Range: Preserved-route input count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: doses per batch
  - Basis: units assigned to chilled or frozen route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling and freezing energy (`preservation_energy`)

Meter refrigeration, controlled freezing and storage utility by route and occupancy period.

Denominator and scope requirements：per accepted preserved dose

Raw quantity and calculation requirements: Attribute metered shared energy once to actual routes and periods. Original collection denominator kind: process_output.

- Selected flow: Energy supplied for preservation (foreground carrier unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kWh per dose
  - Basis: actual route and storage-period energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquid nitrogen for frozen lots (`nitrogen`)

Measure cryogen consumption and vessel refill loss; reusable tank is a separate shared asset.

Denominator and scope requirements：per accepted frozen dose

Raw quantity and calculation requirements: Purchases minus returns and end inventory, apportioned to frozen lots. Original collection denominator kind: process_output.

- Selected flow: Liquid nitrogen at centre input (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation`
- Sources: `fao-cryoconservation-2021`
- Range: Provisional nitrogen screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg per frozen dose
  - Basis: measured cryogen over actual storage period
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted preserved doses (`preserved_doses`)

Quality-accepted chilled or frozen units pass to dispatch packing with state label.

Denominator and scope requirements：per preservation batch

Raw quantity and calculation requirements: Count units accepted after route-specific hold or thaw tests. Original collection denominator kind: process_output.

- Selected flow: Chilled or frozen bovine semen dose (UUID unresolved)
- Flow property / unit: Count / dose
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation`
- Range: Accepted preservation count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: doses per batch
  - Basis: accepted state-specific units
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation rejects (`preservation_reject`)

Failed quality or storage losses are waste at their actual destination.

Denominator and scope requirements：per preservation batch

Raw quantity and calculation requirements: Count loss by route, cause, lot and service period. Original collection denominator kind: process_output.

- Selected flow: Rejected preserved bovine semen dose (UUID unresolved)
- Flow property / unit: Count / dose
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation`
- Range: Preservation-reject count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: doses per batch
  - Basis: actually rejected stored units
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective packing and dispatch (`centre_dispatch`)

#### Inputs

##### Product flows

###### Accepted doses to packing (`dispatch_input`)

Receive fresh filled or accepted preserved units once, retaining donor, quality and state.

Denominator and scope requirements：per dispatch lot

Raw quantity and calculation requirements: Count one source path for each released lot. Original collection denominator kind: process_output.

- Selected flow: Accepted bovine semen doses before dispatch (UUID unresolved)
- Flow property / unit: Count / dose
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Range: Dispatch-input count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: doses per lot
  - Basis: accepted units arriving at pack line
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Secondary protective packaging (`dispatch_packaging`)

Record actual secondary package materials; returnable transport vessels are cycle-attributed assets, not consumables.

Denominator and scope requirements：per accepted dispatched dose

Raw quantity and calculation requirements: Issued minus unused packaging by material and lot. Original collection denominator kind: reference_flow.

- Selected flow: Protective dispatch packaging (foreground material unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Range: Provisional packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg per dose
  - Basis: secondary packaging consumed at centre
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Usable centre-dispatch dose (`usable_dose`)

One quality-released insemination dose crosses the semen-centre dispatch gate.

Raw reference-output records: Exactly one accepted released dose per reference flow. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

The machine unit item is the local representation of the confirmed unit-group reference unit Item(s), with multiplier 1. One item means one quality-accepted breeding dose of the declared species, state, grade and release specification. Preserve native dose counts in collection records. This count representation does not equate containers, volume, sperm count, oocytes or treatment attempts to accepted goods, and does not establish equivalence across species, states or dose specifications.

Denominator and scope requirements：per reference flow

- Selected flow: Usable bovine semen dose at collection-centre dispatch
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Sources: `un-cpc-3`; `woah-bovine-2024`
- Range: Reference-dose identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: dose
  - Basis: per accepted centre-dispatch reference dose
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Packing rejects (`packing_reject`)

Damaged doses and packaging rejected before release follow actual waste routes.

Denominator and scope requirements：per dispatch lot

Raw quantity and calculation requirements: Reconcile released and rejected unit counts, with package mass separately measured. Original collection denominator kind: process_output.

- Selected flow: Pre-dispatch rejected semen dose and package (UUID unresolved)
- Flow property / unit: Count / dose plus kg package
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Range: Packed-dose reject count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000000
  - Unit: doses per lot
  - Basis: rejected units before gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide` | all nodes | Partition by donor species, donor, batch and route before allocation; count only observed service for released doses. | `woah-hygiene-2024` |
| `output_status` | culls and downgraded grades | Independent culls or saleable downgraded semen need actual destination and handoff; rejects and manure to treatment are waste. | `un-cpc-3`; `woah-bovine-2024` |
| `residual` | inseparable burdens | Prefer causal donor-days, batch use or storage occupancy; disclose any residual physical/economic split and sensitivity, never hypothetical avoided-product credit. | `woah-hygiene-2024` |
| `period_asset` | donor and shared assets | Link feed, health, donor replacement/cull, laboratory and tank service to actual periods and consuming nodes once; prevent duplicate tank or room burden. | `woah-hygiene-2024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_donor` | `donor_management` | feed, water, cull, manure, assets | donor ledger | donor_id, species, breed, donor_days, feed_DM, water, health, cull_mass, manure, asset_service | weigh, meter, husbandry log; Raw aggregation requirements: sum by donor-period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, day | daily/event | complete donor service | all supplying donors | per reference flow | dated donor and purchase logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_collection` | `semen_collection` | raw ejaculate and supplies | collection log | donor_id, event_id, volume, consumables, failed_event | volume and material issue record; Raw aggregation requirements: sum by event. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | mL, kg | event | all eligible events | centre collection room | per reference flow | calibrated collection record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_quality` | `quality_grading` | accepted, downgraded, reject | laboratory assay | event_id, sperm_count, concentration, motility, grade, sample_volume, destination | grade assay; Raw aggregation requirements: reconcile each destination. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | mL, count | event | all collections | centre laboratory | per reference flow | signed test and grade record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_preparation` | `first_preparation` | prepared and rejected | batch log | batch_id, incoming_volume, prepared_volume, removed_volume | calibrated balance; Raw aggregation requirements: input-output balance. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | mL | batch | all preparation batches | centre laboratory | per reference flow | batch trace; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_formulation` | `formulation` | semen, constituents, bulk, reject | recipe log | batch_id, semen_volume, ingredient_mass, batch_volume, reject_volume | weigh actual recipe; Raw aggregation requirements: material balance. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, mL | batch | all blended batches | centre laboratory | per reference flow | lot and scale log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_dosing` | `dosing` | bulk, straw, filled, reject | fill-run ledger | run_id, bulk_volume, straw_issued, straw_returned, filled_count, reject_count, dose_volume, sperm_per_dose | counter and fill balance; Raw aggregation requirements: count and volume balance. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | mL, dose | run | all fill runs | fill line | per reference flow | machine calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_preservation` | `preservation` | energy, nitrogen, accepted, reject | cold-chain log | batch_id, route, temperature, hold_days, kWh, nitrogen_mass, vessel_service, accepted_count, reject_count | meter, logger, vessel balance; Raw aggregation requirements: route-period denominator. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kWh, kg, dose | batch/day | all stored lots | cold room and tanks | per reference flow | logger and purchase logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_dispatch` | `centre_dispatch` | package, release, reject | release ledger | lot_id, donor, species, route, grade, package_mass, vessel_cycle, released_count, reject_count, gate_time | release count and issue log; Raw aggregation requirements: count released once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | dose, kg | lot | all dispatches | centre gate | per reference flow | QA release and receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `material_reconcile` | collection through dispatch | Raw semen plus extender components equals accepted, downgraded, rejected, sampled and lost material after calibrated unit conversions. | `cp_collection`, `cp_quality`, `cp_preparation`, `cp_formulation`, `cp_dosing`, `cp_preservation`, `cp_dispatch` | batch material and dose balance | `fao-cryoconservation-2021` |
| `donor_intensity` | donor upkeep | Same-period donor burden divided by linked accepted doses after independent output attribution. | `cp_donor`, `cp_dispatch` | burden per dose | `woah-hygiene-2024` |
| `route_intensity` | preservation | State-specific energy, nitrogen, losses and storage occupancy divided by state-specific accepted doses. | `cp_preservation`, `cp_dispatch` | burden per route dose | `fao-cryoconservation-2021` |
| `shared_asset` | infrastructure | Allocate measured service/occupancy over the full service period to consuming nodes once. | `cp_donor`, `cp_preservation`, `cp_dispatch` | unique attributed asset burden | `woah-hygiene-2024` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | released doses | Preserve donor species/breed, batch, route, quality, sperm per dose and volume. | donor, assay and release records |
| `completeness` | whole centre | Include failed collections, grade rejects, formulation and fill losses, packaging, utilities and assets. | reconciled process ledgers |
| `temporal` | donor and storage | Match donor-days, storage occupancy, replacement/cull and outputs to declared periods. | dated husbandry and vessel logs |
| `comparability` | preservation states | Keep fresh/chilled/frozen denominators and quality distinct; no universal dose-yield or freezing factor. | route and quality logs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference` | final dose | Require centre gate, donor species, accepted count, quality and state; unresolved product UUID blocks fixed-flow publication. | `un-cpc-3`; `woah-bovine-2024` |
| `route` | fresh/chilled/frozen | One state per released unit; preserve only actual route inputs, storage periods and rejects. | `fao-cryoconservation-2021` |
| `balance` | all material interfaces | Reconcile semen, components, grade destinations, filled count, waste and packaging with actual records. | `fao-cryoconservation-2021` |
| `attribution` | outputs, periods, assets | Verify cull/downgrade handoffs, donor period, causal split and unique shared-asset ownership. | `woah-hygiene-2024` |
| `identity_review` | flow UUIDs | Contradictory platform bovine-semen candidate remains unbound pending source correction and new detail review. | `un-cpc-3` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground bovine-semen production package at centre dispatch. |
| downstream_use | `secondary_dataset`; `background_dataset` only after route, identity and data-quality review. |
| allowed_use | Species-, quality- and preservation-state-matched semen dose modelling. |
| excluded_use | Live animals, embryos, non-bovine semen, insemination service or undifferentiated fresh/frozen comparison. |
| required_metadata | Centre, gate, donor, health, batch, acceptance grade, sperm and volume per dose, preservation, package, storage period, outputs and allocation. |
| required_quality_disclosure | Unresolved UUIDs, missing records, allocation assumptions, provisional ranges and material-balance gaps. |
| update_trigger | Changed donor scope, quality standard, extender, preservation method, packaging, flow identity or allocation evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | standard | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product identity and exclusions |
| `woah-hygiene-2024` | standard | https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_general_hygiene_semen.htm | Donor management, centre hygiene and storage |
| `woah-bovine-2024` | standard | https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_coll_semen.htm | Semen collection, processing and traceability |
| `fao-cryoconservation-2021` | official_guidance | https://www.fao.org/fileadmin/user_upload/animal_genetics/docs/CGRFA-18-21-10_2_Inf1_forPDF.pdf | Cattle and water-buffalo semen, processing and preservation routes |
| `ipcc-livestock-2019` | method_factor | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Species- and pathway-specific livestock and manure emission calculations |
