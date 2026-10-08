---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.semen-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-bovine semen for breeding

## 1. Scope and Applicability

This PCR covers usable breeding semen from animals other than bovines, including sheep and goats, at collection/processing-centre release. Fresh, chilled and frozen states require separate lot records. Bovine semen (CPC 02411), embryos, live donors, insemination services and downstream distribution are excluded. Species-specific veterinary and trade measures apply only where relevant; they are not universal LCA factors.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.semen-n-e-c |
| classification_refs | CPC 3.0 `02419` |
| covered_products | Quality-accepted non-bovine breeding semen, with species and final state specified. |
| excluded_products | Bovine semen, embryos, live donors, insemination and post-release logistics. |
| representative_product | One quality-accepted ovine or caprine dose in a sealed container at centre release. |
| production_route | Managed donor → independent collection → quality grading → first preparation/dilution → discrete filling → optional preservation → protective packaging. |
| market_state | Fresh, chilled or frozen dose with donor, quality, sperm-count, volume and package descriptors. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Quality-accepted non-bovine breeding semen at the collection/processing-centre gate. |
| How much | 1 released dose; measured volume and sperm concentration/count also reported. |
| How well | Species, breed, donor health, grade, motility, viability, extender, dose specification and final state declared. |
| How long or cycle | One collection-to-release lot; donor and asset burden linked to observed service periods. |
| reference_flow_link | `released_dose` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Non-bovine breeding semen dose at centre release |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | donor species/breed; health and collection lot; quality specification and sperm count; dose volume; fresh/chilled/frozen state; container; centre gate; reporting period. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_count` | reference output | accepted count | dose | Count only released doses passing the documented species-specific acceptance specification. |
| `liquid_balance` | collected semen and diluent | calibrated volume and concentration | mL; sperm/mL | Reconcile raw volume, preparation medium, rejected material and filled dose count; volume alone does not establish dose equivalence. |
| `state_partition` | final product | accepted count by state | dose | Fresh, chilled and frozen denominators remain separate unless a documented comparison conversion is supplied. |
| `period_link` | donor and shared services | duration and accepted output | donor-day; dose | Link dated inputs, events and asset use to the donor and batch periods without duplicate annualization. |
| `accepted_item_count` | reference product and its output card | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | The machine unit item is the local representation of the confirmed unit-group reference unit Item(s), with multiplier 1. One item means one quality-accepted breeding dose of the declared species, state, grade and release specification. Preserve native dose counts in collection records. This count representation does not equate containers, volume, sperm count, oocytes or treatment attempts to accepted goods, and does not establish equivalence across species, states or dose specifications. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified non-bovine donor in a recorded husbandry period; upstream feed, water, laboratory media, utilities and packaging enter as supplied goods. |
| starting_condition_role | Managed production of collectable semen, not sale of a live animal or insemination service. |
| product_classification_scope | CPC 3.0 `02419`; bovine semen CPC `02411` excluded. |
| recursive_input_rule | Purchased same-category semen is a traced upstream input, not recounted as local donor production. |
| upstream_dataset_requirement | Species- and route-compatible feed, water, electricity, preparation medium, cryogen, packaging and treatment service. |
| disclosure | donor, gate, lot dates, quality specification, final state, rejects, periods, shared-service attribution and allocation. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `centre_gate` | all routes | Include observed donor management, collection, assessment, preparation, filling, conditional preservation and protective packing through quality release; exclude insemination and later transport. | `un-cpc-3-2025`; `woah-semen-hygiene-2024` |
| `species_boundary` | donor | Keep non-bovine species separate and do not transfer bovine husbandry factors or a bovine flow UUID. | `un-cpc-3-2025`; `woah-semen-hygiene-2024` |
| `state_interfaces` | centre | Record raw ejaculate, accepted/downgraded/rejected grades, prepared liquid, filled dose, preserved dose and packed released dose as distinct measured states even if tasks are co-located. | `woah-semen-hygiene-2024`; `fao-cryoconservation-2012` |
| `route_delta` | managed biological parent | Fresh, chilled and frozen routes share donor management but preservation changes electricity/cryogen, hold time, loss and quality checks; exactly one final state per lot. | `fao-cryoconservation-2012` |
| `shared_assets` | housing and centre | Attribute housing, collection apparatus, laboratory and refrigeration to their actual consuming nodes and service periods once. | `woah-semen-hygiene-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `donor` | Donor husbandry | required | observed service period | Managed biological parent and eligibility | donor-days and linked doses |
| `collect` | Independent collection | required | each collection event | Capture raw ejaculate from donor | mL raw semen |
| `grade` | Quality grading | required | each collection lot | Accepted, downgraded and rejected destinations | mL by grade |
| `prepare` | First preparation | required | accepted semen batch | Raw-to-prepared liquid and loss | mL prepared liquid |
| `fill` | Discrete dose filling | required | each prepared batch | Bulk-to-unit and rejects | dose count |
| `preserve` | Chilling or freezing | conditional | chilled or frozen lot | Stabilization, state-specific service and loss | preserved dose count |
| `release` | Protective packing and release | required | released lot | Packaged accepted product at centre gate | 1 accepted dose |

### Process: Donor husbandry (`donor`)

#### Inputs

##### Product flows

###### Species-specific feed (`feed`)

Measured intake supports eligible donor maintenance over the recorded period.

Denominator and scope requirements：per linked accepted dose

Raw quantity and calculation requirements: Sum actual intake by donor period. Original collection denominator kind: reference_flow.

- Selected flow: Feed and forage for identified non-bovine donor (UUID unresolved)
- Flow property / unit: Dry matter mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Range: Provisional feed completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg dry matter/dose
  - Basis: recorded donor-period intake over linked accepted doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Donor water (`donor_water`)

Meter drinking and hygiene water rather than assuming one species-independent rate.

Denominator and scope requirements：per linked accepted dose

Raw quantity and calculation requirements: Meter or reconcile supply by donor period. Original collection denominator kind: reference_flow.

- Selected flow: Water supply for donor management (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Range: Provisional water completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/dose
  - Basis: metered donor-period supply over linked accepted doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Donor manure (`manure`)

Collected manure is a waste unless an independent product handover is evidenced; distinguish direct excretion and collected material.

Denominator and scope requirements：per donor-period

Raw quantity and calculation requirements: Record collected mass and destination once. Original collection denominator kind: process_output.

- Selected flow: Donor manure to documented management destination (UUID unresolved)
- Flow property / unit: Wet mass / kg
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
  - Upper: 1000000
  - Unit: kg/donor-period
  - Basis: actually collected wet manure
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Independent collection (`collect`)

#### Inputs

##### Product flows

###### Collection consumables (`collection_supplies`)

Disposable apparatus is charged to collection; reusable apparatus belongs to shared service attribution.

Denominator and scope requirements：per collection event

Raw quantity and calculation requirements: Count or weigh items issued to each collection event. Original collection denominator kind: process_output.

- Selected flow: Species-compatible semen collection consumables (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collect`
- Range: Provisional supplies screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/event
  - Basis: disposable supplies issued to one event
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw ejaculate (`raw_semen`)

Independent collection removes semen from the managed donor and hands raw liquid to quality assessment.

Denominator and scope requirements：per collection event

Raw quantity and calculation requirements: Measure event volume and concentration. Original collection denominator kind: process_output.

- Selected flow: Raw collected non-bovine ejaculate (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collect`
- Range: Provisional raw-volume screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: mL/event
  - Basis: collected raw liquid, interpreted by donor species
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Failed collection material (`collection_reject`)

Incidental or nonrecoverable collection material is classified as waste by real destination.

Denominator and scope requirements：per collection event

Raw quantity and calculation requirements: Weigh or estimate from measured event balance and record destination. Original collection denominator kind: process_output.

- Selected flow: Failed collection material to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collect`
- Range: Provisional rejected-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/event
  - Basis: actual failed collection material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Quality grading (`grade`)

#### Inputs

##### Product flows

###### Incoming raw semen (`grade_input`)

The collected lot is evaluated by species-specific concentration, motility and viability thresholds.

Denominator and scope requirements：per graded lot

Raw quantity and calculation requirements: Match collected event volume and lot identity. Original collection denominator kind: process_output.

- Selected flow: Raw non-bovine semen at grading intake (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Raw-intake screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: mL/lot
  - Basis: raw liquid actually entering grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted graded semen (`accepted_grade`)

Accepted material transfers to first preparation.

Denominator and scope requirements：per graded lot

Raw quantity and calculation requirements: Record accepted volume and sperm count. Original collection denominator kind: process_output.

- Selected flow: Quality-accepted non-bovine semen before preparation (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Accepted share screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: accepted volume over raw grading intake
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded independent product (`downgraded_grade`)

Use this state only where a documented legal alternative use and independent handover exist; otherwise move it to reject waste.

Denominator and scope requirements：per graded lot

Raw quantity and calculation requirements: Record independently transferred volume and destination. Original collection denominator kind: process_output.

- Selected flow: Downgraded non-bovine semen to documented alternative use (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Conditional downgraded share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: transferred downgraded volume over raw intake
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected semen (`rejected_grade`)

Unusable portions are waste sent to a recorded treatment destination.

Denominator and scope requirements：per graded lot

Raw quantity and calculation requirements: Reconcile rejected, accepted and downgraded volume with intake. Original collection denominator kind: process_output.

- Selected flow: Rejected non-bovine semen to treatment (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Rejected share screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: rejected volume over raw intake
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First preparation (`prepare`)

#### Inputs

##### Product flows

###### Preparation medium (`medium`)

Use actual species-compatible diluent or extender recipe; do not assume a universal formulation.

Denominator and scope requirements：per preparation lot

Raw quantity and calculation requirements: Record prepared and issued liquid by batch. Original collection denominator kind: process_output.

- Selected flow: Semen preparation medium (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`
- Range: Provisional medium screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: mL/lot
  - Basis: issued preparation liquid
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared bulk semen (`prepared_bulk`)

Accepted raw liquid plus medium becomes prepared bulk for discrete filling.

Denominator and scope requirements：per preparation lot

Raw quantity and calculation requirements: Reconcile accepted raw volume plus medium less losses. Original collection denominator kind: process_output.

- Selected flow: Prepared non-bovine semen bulk before filling (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`
- Range: Prepared-volume screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: mL/lot
  - Basis: measured prepared bulk volume
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preparation loss (`preparation_loss`)

Spillage and rejected prepared liquid are waste, separate from acceptable bulk.

Denominator and scope requirements：per preparation lot

Raw quantity and calculation requirements: Measure and assign actual disposal path. Original collection denominator kind: process_output.

- Selected flow: Semen preparation residue to treatment (UUID unresolved)
- Flow property / unit: Volume / mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`
- Range: Preparation-loss share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: lost liquid over preparation inputs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Discrete dose filling (`fill`)

#### Inputs

##### Product flows

###### Dose straws or vials (`dose_container`)

Issued containers are reconciled with correctly filled and rejected units.

Denominator and scope requirements：per filling batch

Raw quantity and calculation requirements: Count straws or vials and seals issued. Original collection denominator kind: process_output.

- Selected flow: Species/route-compatible dose container (UUID unresolved)
- Flow property / unit: Count / item
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fill`
- Range: Container issue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: items/batch
  - Basis: issued containers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Filled usable doses (`filled_doses`)

Prepared bulk becomes discrete units for preservation or direct fresh-state packing.

Denominator and scope requirements：per filling batch

Raw quantity and calculation requirements: Count correctly filled and sealed units, with dose volume and sperm specification. Original collection denominator kind: process_output.

- Selected flow: Filled non-bovine breeding semen doses (UUID unresolved)
- Flow property / unit: Count / dose
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fill`
- Range: Filled-dose screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: doses/batch
  - Basis: counted filled usable doses
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Failed fill units (`fill_reject`)

Misfilled, damaged or failed-seal units are waste unless a documented recovery route exists.

Denominator and scope requirements：per filling batch

Raw quantity and calculation requirements: Reconcile issued containers, usable filled units and failed units. Original collection denominator kind: process_output.

- Selected flow: Rejected semen filling units to treatment (UUID unresolved)
- Flow property / unit: Count / item
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fill`
- Range: Fill-reject share screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: failed units over all filled units
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Chilling or freezing (`preserve`)

#### Inputs

##### Product flows

###### Preservation electricity (`cooling_power`)

Record metered cooling service only for routes that actually use it.

Denominator and scope requirements：per preserved dose

Raw quantity and calculation requirements: Meter power over batch and hold duration. Original collection denominator kind: reference_flow.

- Selected flow: Electricity for semen chilling or cryopreservation (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional power screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kWh/dose
  - Basis: metered electricity over accepted preserved doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cryogenic medium (`cryogen`)

Frozen lots record actual cryogen replenishment; chilled and fresh lots do not inherit this input.

Denominator and scope requirements：per frozen dose

Raw quantity and calculation requirements: Record issued and recovered quantity with storage-service attribution. Original collection denominator kind: reference_flow.

- Selected flow: Route-specific cryogenic medium (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional cryogen screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/frozen dose
  - Basis: issued cryogen over accepted frozen doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized accepted doses (`preserved_doses`)

Chilled or frozen doses hand over after time-temperature and quality acceptance.

Denominator and scope requirements：per preservation batch

Raw quantity and calculation requirements: Count accepted units by chilled or frozen state. Original collection denominator kind: process_output.

- Selected flow: Preserved non-bovine semen doses before packing (UUID unresolved)
- Flow property / unit: Count / dose
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Preservation yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: accepted preserved count over filled input count
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation rejects (`preservation_reject`)

Failed integrity or post-preservation quality is a distinct waste destination.

Denominator and scope requirements：per preservation batch

Raw quantity and calculation requirements: Reconcile entered, accepted and rejected units. Original collection denominator kind: process_output.

- Selected flow: Rejected preserved semen units to treatment (UUID unresolved)
- Flow property / unit: Count / item
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Preservation-reject share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: fraction
  - Basis: rejected count over filled count entering preservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective packing and release (`release`)

#### Inputs

##### Product flows

###### Protective packaging (`packaging`)

Only centre-issued protective packaging is included; reusable containers are apportioned over actual reuse cycles.

Denominator and scope requirements：per released dose

Raw quantity and calculation requirements: Weigh issued packaging and attribute reusable service once. Original collection denominator kind: reference_flow.

- Selected flow: Protective packaging for non-bovine semen doses (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Range: Provisional packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/dose
  - Basis: packaging mass over accepted released doses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released breeding dose (`released_dose`)

The sole reference product is quality-accepted non-bovine breeding semen at centre handover.

Raw reference-output records: Count accepted units by species, grade and final state and link volume and sperm count. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

The machine unit item is the local representation of the confirmed unit-group reference unit Item(s), with multiplier 1. One item means one quality-accepted breeding dose of the declared species, state, grade and release specification. Preserve native dose counts in collection records. This count representation does not equate containers, volume, sperm count, oocytes or treatment attempts to accepted goods, and does not establish equivalence across species, states or dose specifications.

Denominator and scope requirements：per reference flow

- Selected flow: Non-bovine breeding semen dose at centre release
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Range: Reference count identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: accepted dose
  - Basis: one quality-accepted dose at centre gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Failed release packaging (`package_reject`)

Damaged packaging is waste to its recorded recycling or disposal route, not an additional product.

Denominator and scope requirements：per release lot

Raw quantity and calculation requirements: Count or weigh rejected centre packaging once. Original collection denominator kind: process_output.

- Selected flow: Rejected protective packaging to documented destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Range: Provisional packaging-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/lot
  - Basis: rejected centre packaging per released lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `period_attribution` | donor | Link feed, water, health, manure, collection and accepted lots to dated donor phases; record replacement and cull events. Never charge a donor-period twice. | `woah-semen-hygiene-2024` |
| `shared_service` | housing, collection apparatus, lab and cooling | Enumerate consumers and service periods, then assign each burden once by measured occupancy, usage time or another justified causal service basis. | `woah-semen-hygiene-2024` |
| `quality_outputs` | grading and filling | Downgraded material is a co-product only with independent legal handover; otherwise treat rejects as waste. Disclose any causal or physical/economic allocation decision and sensitivity. | `woah-semen-hygiene-2024` |
| `mixed_state` | fresh, chilled and frozen | Assign common donor/collection burden to actual accepted lots using documented causal service or counts; preserve state-specific energy, cryogen and loss for applicable lots only. | `fao-cryoconservation-2012` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_donor` | `donor` | donor inputs and outputs | donor register and meters | donor_id, species, period, feed_mass, water_mass, health_event, eligible_days, manure_mass | dated record and calibrated meter; Raw aggregation requirements: link inputs and events to donor period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | day; kg | each event and monthly reconciliation | full donor period | centre and donor | per reference flow | register and receipts; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_collect` | `collect` | consumables, ejaculate, failed material | collection event | donor_id, event_id, issued_mass, raw_mL, concentration, rejected_mass | calibrated vessel and issue log; Raw aggregation requirements: sum by donor and lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | mL; kg | each event | all collection events | centre | per reference flow | calibration and chain of custody; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_grade` | `grade` | quality states | laboratory assessment | lot_id, raw_mL, accepted_mL, downgraded_mL, rejected_mL, grade, destination | species-specific test and disposition log; Raw aggregation requirements: reconcile all grades to intake. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | mL; fraction | each lot | all assessed lots | lab | per reference flow | assay and approval; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_prepare` | `prepare` | medium, bulk and loss | batch sheet | lot_id, accepted_mL, medium_mL, bulk_mL, loss_mL | calibrated dispense and volume balance; Raw aggregation requirements: balance per lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | mL | each batch | all prepared batches | lab | per reference flow | recipe and calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_fill` | `fill` | containers and filled/rejected units | filling sheet | lot_id, issued_items, filled_doses, rejected_items, dose_mL, sperm_count | counter and seal check; Raw aggregation requirements: reconcile issued and filled units. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | item; dose; mL | each batch | all filled batches | filling line | per reference flow | batch sheet and QA; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_preserve` | `preserve` | power, cryogen, preserved/rejected units | preservation log | batch_id, state, kWh, cryogen_kg, start, end, accepted_doses, rejected_items | meter, supply ledger and temperature log; Raw aggregation requirements: allocate by batch and service time. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kWh; kg; dose | each batch | full intervention and hold | centre | per reference flow | meter and calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_release` | `release` | packaging, product, rejects | release ledger | lot_id, species, state, packaging_kg, reuse_cycles, accepted_doses, rejected_kg | count, weigh and release certificate; Raw aggregation requirements: group accepted units by species and state. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; dose | each release | all released lots | centre gate | per reference flow | signed release; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `dose_yield` | collection through release | Reconcile raw volume and concentration with graded states, prepared bulk, fill and release counts; accepted released doses divided by linked donor period. | donor, lot, liquid, quality and dose records | accepted yield and loss ledger | `woah-semen-hygiene-2024` |
| `service_share` | donor and shared assets | Period burden times evidenced service share divided by accepted linked dose count; disclose unproductive periods and reject zero denominators. | dated inputs, service duration, linked doses | burden per dose | `woah-semen-hygiene-2024` |
| `state_burden` | preservation | State-specific metered power, cryogen and rejects divided only by accepted doses in that state. | lot state, meter, supply and acceptance | fresh, chilled or frozen inventory | `fao-cryoconservation-2012` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | reference | Verify non-bovine species, breeding purpose, dose specification and centre-release gate. | donor, lot and release record |
| `completeness` | all nodes | Cover selected stages and reconcile accepted, downgraded, rejected and loss states without duplicate internal transfer. | process and balance ledger |
| `temporal` | donor and preserved lots | Align donor phase, collection, batch, hold and asset service dates. | dated registers and meters |
| `route` | state variants | Disclose fresh, chilled or frozen branch and applicable species-specific sanitary controls. | quality and preservation log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `non_bovine` | reference | Reject bovine donor, mismatched CPC or any UUID not detail-confirmed as non-bovine breeding semen with matching gate/property. | `un-cpc-3-2025` |
| `balance` | graded-to-release chain | Reconcile liquid and discrete units across accepted, downgraded, rejected and lost states within documented measurement tolerances. | `woah-semen-hygiene-2024` |
| `branch` | final state | Require one fresh/chilled/frozen final state per lot; chilled/frozen lots need observed intervention and duration, never bovine default factors. | `fao-cryoconservation-2012` |
| `no_double_count` | donor and assets | Dated donor phases and housing, laboratory, collection and refrigeration shares must charge each service once per period. | `woah-semen-hygiene-2024` |
| `gate_quality` | release | Require donor species, count, volume, sperm specification and quality release; reject insemination/distribution activity. | `woah-semen-hygiene-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Observed foreground package for non-bovine breeding dose production. |
| downstream_use | `secondary_dataset`; `background_dataset` only after species/state/gate fitness review. |
| allowed_use | Species-, dose- and state-matched semen production LCA at centre gate. |
| excluded_use | Bovine semen, embryos, donor-animal sale, insemination service and universal equivalence of dose types. |
| required_metadata | species, breed, donor, period, lot, acceptance, sperm count, volume, final state, preservation, gate and allocation. |
| required_quality_disclosure | completeness, rejects, count/volume conversion, unresolved UUIDs and shared-service uncertainty. |
| update_trigger | changed species, preservation route, dose specification, centre gate, quality criteria or verified flow identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | CPC 02419 non-bovine and 02411 bovine distinction. |
| `woah-semen-hygiene-2024` | `official_guidance` | [WOAH Terrestrial Code Ch. 4.6, semen collection and processing centre hygiene](https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_general_hygiene_semen.htm) | Donor, collection, processing, quality and centre route; conditional species/trade application. |
| `fao-cryoconservation-2012` | `handbook` | [FAO, Cryoconservation of Animal Genetic Resources](https://www.fao.org/4/i3017e/i3017e00.htm) | State-specific preparation, preservation and storage route. |
