---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-mammals
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other mammals, live

## 1. Scope and Applicability

This PCR covers living mammals not separately classified as bovines, other ruminants, equines, swine, rabbits or hares. It is a heterogeneous residual category, not a species-free average or a legal authorization for wild-animal trade. Every concrete lot requires taxonomic species, origin, purpose, conservation and legal status, welfare controls and actual handover gate. Captive breeding/rearing and demonstrably lawful live capture are mutually exclusive lot routes. Classification mention of cetaceans, sirenians, primates or other protected groups never authorizes contemporary capture. Without lawful-source evidence the capture route cannot be used. Dead animals, meat, fur, slaughter and post-gate transport/use are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-mammals` |
| classification_refs | CPC 3.0 `02192`, Other mammals |
| covered_products | Species-resolved living residual-class mammals of lawful captive or lawful live-capture origin |
| excluded_products | Specifically classified live mammals; dead animals; meat/fur; undocumented wildlife trade; post-gate use |
| representative_product | One declared species/class of living mammal, not a cross-species mix |
| production_route | Managed breeding/rearing followed by selection, or separately documented lawful live capture; never fictional breeding on capture route |
| market_state | Alive and unprocessed at real producer/capture handover, with count, mass and condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living mammal of a declared residual-category species at its real handover |
| How much | 1 kg measured live mass, plus individual count |
| How well | Alive, species-resolved, lawful origin and condition established |
| How long or cycle | Actual breeding/rearing cohort and service periods, or documented capture campaign |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species-qualified live other mammal at actual gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Scientific species; count/class; live condition; mass method; route; origin; protected status; permit; jurisdiction; actual gate; period |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

No species-free platform Product flow proves the concrete reference. Final exchanges require exact species/route/gate identity verification.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | Incoming and outgoing animals | Mass | kg | Weigh individuals or validate species/class sampling and reconcile with counts. |
| `count_balance` | Each lot and period | Count | head | Opening + births + purchases + captures − transfers − releases − deaths = closing; identify animals once. |
| `period_index` | Cohorts and assets | Time | days or cycle | Link inputs, outputs, replacements and assets to real benefited periods; do not assume lifespan. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented captive opening/purchased stock and prior burden, or lawful pre-capture campaign context |
| starting_condition_role | Managed biological stock or authorized wild-source context; no fictional lifetime farming on capture route |
| product_classification_scope | CPC 3.0 `02192` after exclusion of more specific live-mammal leaves |
| recursive_input_rule | Link purchased same-category animals once to preceding-gate data; internal rearing/selection transfer is not another final product. |
| upstream_dataset_requirement | Match incoming stock, feed, water, energy and materials to species, supplier, geography, unit and gate. |
| disclosure | Species, lawful source and protected status, permit, welfare, lot/cohort/campaign, asset periods, death/release, outputs and actual gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_identity` | Every lot | Species-level residual classification and lawful origin are prerequisites; CPC examples are not permits. | `un-cpc-2025`; `woah-wildlife-trade-2021` |
| `boundary_managed` | Captive route | Include actual stock, husbandry inputs, care, mortality and pre-gate selection; purchased stock carries upstream burden. | `woah-wildlife-trade-2021` |
| `boundary_capture` | Capture route | Include only authorized campaign, equipment, temporary holding, welfare and capture handover; without legal evidence this route is ineligible. | `woah-wildlife-trade-2021` |
| `boundary_gate` | Both | End at real live handover; exclude post-gate delivery, buyer use, slaughter and corpse processing. | `un-cpc-2025` |
| `boundary_shared` | Shared enclosure/equipment | Record consuming nodes and service periods; charge common burden once. |  |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed` | Managed breeding and rearing | conditional | Lawful species-resolved captive operation | Biological production, stock, feed, welfare, mortality, real co-products | per kg live mammals leaving managed rearing |
| `selection` | Live selection and handover | conditional | Captive route only | Independent health/condition screen, weighing and producer gate | per kg accepted producer-gate live mammal |
| `capture` | Lawful live capture and handover | conditional | Documented authorized campaign only | Independent capture, short holding and actual capture gate; no farm production | per kg accepted capture-gate live mammal |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

Managed and capture are mutually exclusive per lot. Selection is separate from growth because acceptance, weighing and handover follow production. Capture removes an animal from a documented lawful source, not from fictional managed stock. Death is loss/waste, not live output; release is documented in the animal ledger, not a sale or waste. Index breeding, rearing, replacement and shared-service periods as well as capture events.

### Process: Managed breeding and rearing (`managed`)

#### Inputs

##### Product flows

###### Purchased living stock (`stock`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Species-qualified live stock (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Species-appropriate feed (`feed`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Feed by actual identity (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied husbandry water (`water`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Water by actual use (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Housing energy (`energy`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Energy by actual carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shared enclosure service (`assets`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Shared asset service (UUID unresolved)
- Flow property / unit: Time / h
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: h/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live animals leaving rearing (`reared`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Species-qualified live animals (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Unit output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Real independent co-products (`other_output`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Co-product by actual identity (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pre-gate animal mortality (`death`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Dead animal material by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Live selection and handover (`selection`)

#### Inputs

##### Product flows

###### Live animals entering selection (`selected_in`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Species-qualified live animals (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live animal at producer handover (`handover`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Species-qualified live mammal at producer gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Unit output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Deaths during selection (`selection_death`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Dead animal material by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Lawful live capture and handover (`capture`)

#### Inputs

##### Product flows

###### Capture and temporary holding energy (`capture_energy`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Energy by actual carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Capture and welfare materials (`capture_materials`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Actual capture consumables (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live animal at lawful capture handover (`captured_live`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Species-qualified live mammal at capture gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Unit output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Capture mortality (`capture_death`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Dead animal material by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Species-qualified live other mammal at actual gate for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `handover`, `captured_live` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `handover`, `captured_live`

Required product-instance qualifiers: Scientific species; count/class; live condition; mass method; route; origin; protected status; permit; jurisdiction; actual gate; period

- Selected flow: Species-qualified live other mammal at actual gate for actual producer-handover linkage
- Flow property / unit: Mass / kg
- Amount rule: Use measured accepted same-lot quantity reconciled to the linked source rows; normalize once to the declared reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`

- Range: Exact identity-reconciliation check after normalization, not a production-yield default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Declared reference quantity; input and output are the same accepted physical goods under the same handover ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Species-qualified live other mammal at actual gate (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `handover`, `captured_live`

Required product-instance qualifiers: Scientific species; count/class; live condition; mass method; route; origin; protected status; permit; jurisdiction; actual gate; period

- Selected flow: Species-qualified live other mammal at actual gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`

- Range: Exact identity-reconciliation check after normalization, not a production-yield default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Declared reference quantity; input and output are the same accepted physical goods under the same handover ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_outputs` | Managed output set | Enumerate only real independent products and their handovers. Subdivide separable processes; otherwise allocate inseparable burdens by documented handover economic value, disclose prices/period and mass-allocation sensitivity. No hypothetical credit. |  |
| `allocation_capture` | Capture campaign | Attribute actual campaign burdens to lawfully transferred intended outputs; releases are non-sale and mortality follows actual disposal. |  |
| `allocation_periods` | Cohorts and replacements | Attribute inputs and replacement stock to benefited periods with opening/closing reconciliation; internal animal transfer has one burden. |  |
| `allocation_assets` | Shared enclosures/equipment | Allocate by recorded service hours/capacity across consuming nodes and periods; do not double count. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | managed; selection; capture | live stock, handover, mortality | animal ledger | species; ID; count; mass; origin; law/permit; status; gate; date; death; release | weighing and custody/health records; Raw aggregation requirements: unique event sum. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; head | each event | full cohort/campaign | site/campaign | per reference flow | scale calibration; permits; vet/transfer records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_inputs` | managed; capture | feed, water, energy, material | meter/invoice ledger | identity; carrier; amount; period; node; stock change | invoices, meters and inventory; Raw aggregation requirements: net use by node/period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; MJ | each receipt/meter period | full cycle/campaign | site | per reference flow | invoice; calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_assets` | managed; selection; capture | shared asset | service log | asset; node; service hours/capacity; period; burden | enclosure/equipment log; Raw aggregation requirements: once by observed use. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | h | each service period | full asset window | site/campaign | per reference flow | asset and maintenance records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_outputs` | managed | other real intended output | transfer record | identity; quantity; recipient; price; legal basis; date | actual transfer document; Raw aggregation requirements: by output and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each transfer | full cohort | site | per reference flow | sales/transfer record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | Accepted live output | Sum measured accepted live kg / 1 kg; retain head count, species and unique gate. | `cp_animals` | reference mass/count |  |
| `calc_balance` | Animal events | Reconcile opening, birth, purchase, capture, transfer, release, death and closing by species/class/period; growth mass is measured, not conserved by assumption. | `cp_animals` | balanced ledger |  |
| `calc_inputs` | Supplies | Net measured supply assigned to node/period / accepted live kg; do not combine captive and capture routes. | `cp_inputs`; `cp_animals` | card intensities |  |
| `calc_shared` | Shared asset | Asset burden × observed node/period share; shares sum to one or unused capacity is disclosed. | `cp_assets` | nonduplicate burden |  |
| `calc_allocation` | Multi-output | After subdivision allocate inseparable burden by documented handover value, with mass sensitivity. | `cp_outputs`; `cp_animals` | output burden |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_law` | Each lot | Species, source, conservation status, permissions and custody chain for exact date/jurisdiction must be established. | taxonomy; permits; custody |
| `dq_gate` | Live output | Alive status, count, measured mass, condition and actual gate must reconcile. | scale; transfer; veterinary records |
| `dq_completeness` | Both routes | Reconcile inputs, outputs, deaths/releases, cohorts and campaign. | ledgers; invoices; discrepancy log |
| `dq_periods` | Shared and multi-period | Link asset/cohort burden once to real service periods. | asset and cohort ledgers |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_classification` | All | Reject species-free, wrong residual classification, undocumented origin or unresolved legal/protected status. | `un-cpc-2025`; `woah-wildlife-trade-2021` |
| `validate_route` | Each lot | Exactly one captive or lawful-capture source; capture cannot claim farm stock, captive route cannot claim wild capture. |  |
| `validate_live` | Final output | Mass, count, live condition and gate reconcile; deaths/releases and post-gate animals cannot inflate output. |  |
| `validate_allocation` | Outputs/periods | Each co-product has real handover; asset/period shares and internal transfers cannot double count. |  |
| `validate_uuid` | Concrete exchanges | Before final exchange, confirm exact flow species, role, gate, property and unit; semantic unresolved cards are not executable UUIDs. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground package for one lawful species/class, route and live gate |
| downstream_use | Compatible secondary_dataset or background_dataset |
| allowed_use | Same species, route, geography, law, class, period and gate after exact identity review |
| excluded_use | Generic mammal mix; unlicensed capture; protected trade without authority; slaughter, meat/fur or post-gate use |
| required_metadata | species; count/mass; route; protected/legal status; permits; site; cohort/campaign; gate; outputs; periods; UUID state |
| required_quality_disclosure | weighing, animal balance, welfare/legal chain, allocation, missing data, shared service and binding gaps |
| update_trigger | species, legal state, route, gate, inventory, allocation or platform identity changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | residual category and exclusions |
| `woah-wildlife-trade-2021` | official_guidance | [WOAH review of wildlife trade](https://www.woah.org/app/uploads/2022/08/a-oie-review-wildlife-trade-march2021.pdf) | legal/welfare/traceability risk questions |
