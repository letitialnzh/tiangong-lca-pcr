---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-furskins
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw furskins

## 1. Scope and Applicability

Covers undressed, untanned raw furskins suitable for furrier use: qualifying whole pelts and heads, tails, paws or cuttings. Declare actual species, lawful farm or wild source, fur-on configuration, whole/piece composition, grade, fresh or first-stage preserved state, net mass and handover gate. A lamb pelt belongs here only if its actual market identity is furrier-use furskin; an ordinary sheep/lamb raw hide remains outside. Exclude dressed or tanned fur, manufactured fur articles, detached hair, ordinary bovine/equine/sheep/goat raw hides and non-furrier other skins. Hair alone does not establish the category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-furskins |
| classification_refs | CPC 3.0 02955 |
| covered_products | Undressed furrier-suitable whole pelts and qualifying pieces, fresh or first-stage preserved. |
| excluded_products | Dressed or tanned fur, manufactured articles, detached hair, ordinary hides and non-furrier skins. |
| representative_product | Accepted species- and configuration-qualified raw furskin at actual handover. |
| production_route | Actual farm source or lawful wild capture; independent skin removal, first preparation, grading, optional preservation and protective handover. |
| market_state | Raw fur-on, undressed and untanned; actual quality and condition declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted raw furrier-suitable furskin or qualifying pieces at actual handover. |
| How much | 1 kg net as-sold raw skin excluding package and removable free preservative. |
| How well | Species, fur quality, whole/piece composition, grade, legal source, raw state and gate declared. |
| How long or cycle | Link farm cohort or wild capture event, removal, preservation and shared service to actual reporting periods. |
| reference_flow_link | `accepted_furskin` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species/state/gate-qualified raw furskin |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; lawful source; whole/piece; fur quality; grade; fresh/preserved; net mass; gate; period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | each material lot | Mass | kg | Calibrated gross and tare; exclude packaging and free preservative; reconcile each actual material destination. |
| m_piece | piece-count markets | Mass and Number of items | kg and item | Record both mass and count on one homogeneous lot; calculate observed kg/item only for that species, grade, configuration and state. |
| m_state | preserved lots | Mass and moisture fraction | kg and kg/kg | Measure before/after state; do not convert fresh to preserved using a universal factor. |
| m_period | source and shared service | Time | reporting period | Link real cohort or capture season, service, outputs and replacement/termination to nonoverlapping periods. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable farm cohort or lawful wild capture event with species and legal status. |
| starting_condition_role | Compatible upstream farm or wild-capture datasets carry actual source burdens. Foreground source event is an interface ledger when upstream already includes capture or slaughter; do not repeat exchanges. Wild route has no managed farm phase. |
| product_classification_scope | Raw, undressed and untanned furrier-suitable pelts and qualifying parts. |
| recursive_input_rule | Purchased same-category raw furskin retains supplier burden and is not newly captured here. |
| upstream_dataset_requirement | Source-specific farm or lawful capture inventory and actual slaughter/removal service; no automatic zero or whole-animal burden. |
| disclosure | Species, legality, route, actual co-products, configuration, condition, shared service, periods and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | source | Separate farm from lawful wild capture. Include actual co-products only when independently marketed; do not repeat upstream animal or capture operations. | un-cpc-3-notes |
| b_remove | skin removal | Distinct capture/source and removal events; identify raw fur-on output, incidental tissue and losses, and handoff before first cleaning. | fao-hides-skins |
| b_condition | first preparation | Include only actual fleshing, cleaning and trimming; exclude dressing, tanning and manufacturing. | fao-hides-skins;eu-raw-furskin-heading |
| b_grade | grading | Separate accepted whole/pieces, saleable downgrade and waste, each with its own destination. Ordinary sheep hide cannot become furskin by hair alone. | un-cpc-3-notes;eu-raw-furskin-heading |
| b_preserve | treated lots | Fresh lots bypass; actual cold, drying or salt stabilization records before/after state, inputs and rejected material. | fao-hides-skins |
| b_gate | handover | Include protective presentation up to actual collection/curing gate; exclude distribution and downstream fur dressing. | un-cpc-3-notes |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| source | Farm or lawful wild source | required | every lot | Trace actual source events and co-products; no fictional husbandry for wild capture. | per kg node output |
| remove | Independent skin removal | required | every lot | Remove fur-on skin independently of source event and first preparation. | per kg node output |
| condition | First raw preparation | required | actual first preparation; ledger if none | First cleaning/fleshing/trimming without dressing or tanning. | per kg node output |
| grade | Furrier-use grading | required | every lot | Separate whole/piece accepted grades, downgraded sale and rejected waste. | per kg node output |
| preserve | Optional raw preservation | conditional | preserved lots only | Stabilize a usable raw state without dressing/tanning; fresh lots bypass. | per kg node output |
| handover | Protective handover | required | every accepted lot | Present fresh or preserved accepted raw skin at actual gate, excluding distribution. | per kg node output |

Farm periods or wild-capture seasons, removal, cleaning and preservation can span periods. Attribute actual events and shared traps, tools or cold rooms to consuming nodes only once. These six nodes are responsibilities, not invented site activities.

### Process: Farm or lawful wild source (`source`)

#### Inputs

##### Product flows

###### Farm animal for actual slaughter (`farmed_animal`)

Farmed route only; trace upstream cohort and animal-service burden. Wild capture has no animal Product input.

Denominator and scope requirements：per kg Farm or lawful wild source output

Raw quantity and calculation requirements: Farmed route only; trace upstream cohort and animal-service burden. Wild capture has no animal Product input. Original collection denominator kind: process_output.

- Selected flow: Species-qualified farmed animal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Farm or lawful wild source output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted skin-bearing source (`source_skinbearing`)

Record only legally transferable, quality-accepted skin-bearing material from actual slaughter or lawful wild capture. A captured body that cannot legally enter this material route is not a Product output and follows its documented reject/treatment route.

Denominator and scope requirements：per kg Farm or lawful wild source output

Raw quantity and calculation requirements: Record actual slaughter or lawful wild capture event; rejected material is not a Product output. Original collection denominator kind: process_output.

- Selected flow: Species-qualified skin-bearing carcass or body part (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Farm or lawful wild source output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual marketable animal output (`source_coproduct`)

This source-interface card covers only independently marketed earlier farm products, such as actual milk or detached fibre. Meat and other outputs from the same terminal body are recorded after skin removal, never here.

Denominator and scope requirements：per kg Farm or lawful wild source output

Raw quantity and calculation requirements: Measure only earlier-period farm outputs independently sold before the terminal event; exclude all meat and products derived from that terminal body. Original collection denominator kind: process_output.

- Selected flow: Actual earlier-period farm product independently sold (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Farm or lawful wild source output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Independent skin removal (`remove`)

#### Inputs

##### Product flows

###### Skin-bearing material for removal (`remove_input`)

Transfer actual accepted source once; do not repeat upstream capture or slaughter exchanges.

Denominator and scope requirements：per kg Independent skin removal output

Raw quantity and calculation requirements: Transfer actual accepted source once; do not repeat upstream capture or slaughter exchanges. Original collection denominator kind: process_output.

- Selected flow: Species-qualified skin-bearing material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_remove`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Independent skin removal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh fur-on skin after removal (`removed_skin`)

Weigh raw skin separately; retain species, whole/piece and source event.

Denominator and scope requirements：per kg Independent skin removal output

Raw quantity and calculation requirements: Weigh raw skin separately; retain species, whole/piece and source event. Original collection denominator kind: process_output.

- Selected flow: Fresh undressed fur-on skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_remove`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Independent skin removal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual terminal-event saleable products (`terminal_coproduct`)

Only if the same slaughter or lawful wild-capture body yields independently marketed meat or other goods, record those here after skin removal. The source node must not also output them.

Denominator and scope requirements：per kg Independent skin removal output

Raw quantity and calculation requirements: Weigh each actual saleable output separately and document its own market handover. Original collection denominator kind: process_output.

- Selected flow: Actual species-qualified saleable terminal product (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_remove`
- Range: Terminal co-product mass plausibility screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Independent skin removal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Nonmarketable removal residue (`remove_residue`)

Record nonmarketable tissue or skin loss and actual treatment, not saleable pieces.

Denominator and scope requirements：per kg Independent skin removal output

Raw quantity and calculation requirements: Record nonmarketable tissue or skin loss and actual treatment, not saleable pieces. Original collection denominator kind: process_output.

- Selected flow: Actual removal residue to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_remove`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Independent skin removal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First raw preparation (`condition`)

#### Inputs

##### Product flows

###### Fresh skin entering preparation (`condition_input`)

Transfer measured raw skin from removal.

Denominator and scope requirements：per kg First raw preparation output

Raw quantity and calculation requirements: Transfer measured raw skin from removal. Original collection denominator kind: process_output.

- Selected flow: Fresh undressed fur-on skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg First raw preparation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning water where used (`condition_water`)

Meter actual water; zero when no wet cleaning.

Denominator and scope requirements：per kg First raw preparation output

Raw quantity and calculation requirements: Meter actual water; zero when no wet cleaning. Original collection denominator kind: process_output.

- Selected flow: Process water for raw-skin cleaning
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg First raw preparation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-prepared raw skin (`prepared_skin`)

Weigh prepared output before grading; retain fur and raw state.

Denominator and scope requirements：per kg First raw preparation output

Raw quantity and calculation requirements: Weigh prepared output before grading; retain fur and raw state. Original collection denominator kind: process_output.

- Selected flow: Cleaned and trimmed undressed fur-on skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg First raw preparation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preparation residue (`condition_residue`)

Record rejected residue and actual destination separately from furrier-use pieces.

Denominator and scope requirements：per kg First raw preparation output

Raw quantity and calculation requirements: Record rejected residue and actual destination separately from furrier-use pieces. Original collection denominator kind: process_output.

- Selected flow: Nonmarketable fleshing and trim (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg First raw preparation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Furrier-use grading (`grade`)

#### Inputs

##### Product flows

###### Raw skins entering grading (`grade_input`)

Record species, fur quality and whole/piece composition before sorting.

Denominator and scope requirements：per kg Furrier-use grading output

Raw quantity and calculation requirements: Record species, fur quality and whole/piece composition before sorting. Original collection denominator kind: process_output.

- Selected flow: Prepared undressed fur-on skins (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Furrier-use grading output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted furrier-use pelts and pieces (`grade_accepted`)

Keep each grade and destination separate; no double count of parent pelt and cuttings.

Denominator and scope requirements：per kg Furrier-use grading output

Raw quantity and calculation requirements: Keep each grade and destination separate; no double count of parent pelt and cuttings. Original collection denominator kind: process_output.

- Selected flow: Furrier-suitable whole pelts or qualifying pieces (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Furrier-use grading output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Saleable nonreference downgrade (`grade_downgrade`)

Use Product only for a real separate market; exclude from accepted reference.

Denominator and scope requirements：per kg Furrier-use grading output

Raw quantity and calculation requirements: Use Product only for a real separate market; exclude from accepted reference. Original collection denominator kind: process_output.

- Selected flow: Actual downgraded saleable raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Furrier-use grading output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected grading material (`grade_reject`)

Track nonmarketable reject and actual treatment, not downgraded sale.

Denominator and scope requirements：per kg Furrier-use grading output

Raw quantity and calculation requirements: Track nonmarketable reject and actual treatment, not downgraded sale. Original collection denominator kind: process_output.

- Selected flow: Actual grading waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Furrier-use grading output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Optional raw preservation (`preserve`)

#### Inputs

##### Product flows

###### Accepted skin before preservation (`preserve_input`)

Only treated lots enter; record mass and state before intervention.

Denominator and scope requirements：per kg Optional raw preservation output

Raw quantity and calculation requirements: Only treated lots enter; record mass and state before intervention. Original collection denominator kind: process_output.

- Selected flow: Accepted fresh furrier-use pelt or pieces (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Optional raw preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation energy where used (`preserve_energy`)

Meter actual carrier and period; prevent shared-room double counting.

Denominator and scope requirements：per kg Optional raw preservation output

Raw quantity and calculation requirements: Meter actual carrier and period; prevent shared-room double counting. Original collection denominator kind: process_output.

- Selected flow: Actual cold or drying energy supply
- Flow property / unit: Energy / kWh
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/kg
  - Basis: per kg Optional raw preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual raw preservative (`preserve_agent`)

Measure salt or other agent actually consumed; never apply a universal recipe.

Denominator and scope requirements：per kg Optional raw preservation output

Raw quantity and calculation requirements: Measure salt or other agent actually consumed; never apply a universal recipe. Original collection denominator kind: process_output.

- Selected flow: Species- and method-qualified preservative (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Optional raw preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized raw fur skin (`preserved_skin`)

Measure net mass after actual intervention and state; no fresh-equivalent assumption.

Denominator and scope requirements：per kg Optional raw preservation output

Raw quantity and calculation requirements: Measure net mass after actual intervention and state; no fresh-equivalent assumption. Original collection denominator kind: process_output.

- Selected flow: Preserved undressed furrier-use pelt or pieces (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Optional raw preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation reject or spent material (`preserve_residue`)

Record treatment destination; evaporation is not an invented Waste product.

Denominator and scope requirements：per kg Optional raw preservation output

Raw quantity and calculation requirements: Record treatment destination; evaporation is not an invented Waste product. Original collection denominator kind: process_output.

- Selected flow: Actual spent agent or rejected skin for treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Optional raw preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective handover (`handover`)

#### Inputs

##### Product flows

###### Accepted raw skin entering presentation (`handover_input`)

Use either fresh graded lot or its preserved counterpart, not both.

Denominator and scope requirements：per kg Protective handover output

Raw quantity and calculation requirements: Use either fresh graded lot or its preserved counterpart, not both. Original collection denominator kind: process_output.

- Selected flow: Accepted fresh or preserved furrier-use raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Protective handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective package when used (`handover_packaging`)

Identify single-use consumption or reusable turns; no packaging if absent.

Denominator and scope requirements：per kg Protective handover output

Raw quantity and calculation requirements: Identify single-use consumption or reusable turns; no packaging if absent. Original collection denominator kind: process_output.

- Selected flow: Raw-furskin protective packaging
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Protective handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted raw furskin at actual gate (`accepted_furskin`)

Measure one kg net as sold, excluding packaging and separable free preservative.

Raw reference-output records: Measure one kg net as sold, excluding packaging and separable free preservative. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Species/state/gate-qualified raw furskin
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Protective handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual handover reject (`handover_reject`)

Record actual discarded material; marketed downgrade is a Product at its own gate.

Denominator and scope requirements：per kg Protective handover output

Raw quantity and calculation requirements: Record actual discarded material; marketed downgrade is a Product at its own gate. Original collection denominator kind: process_output.

- Selected flow: Rejected package or skin for treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Protective handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_source | source and remove | Enumerate earlier farm products at source, then skin and actual saleable terminal products at removal; each has a distinct handover and is counted once. Subdivide independently measured services; for inseparable source burdens use documented physical causality where defensible, otherwise contemporaneous net economic values of actual products with price sensitivity. Neither zero nor whole-animal burden is automatic. | fao-hides-skins |
| a_period | farm or wild route | Link breeding/growth, capture/slaughter, removal, replacement and termination to actual periods. Wild capture has no invented managed husbandry. Each input and output is attributed once. | un-cpc-3-notes |
| a_shared | shared traps, removal tools, cleaning and cold/drying rooms | Identify all consuming nodes and service periods. Prefer measured use; otherwise documented service hours or throughput, assigned once without upstream/foreground duplication. | fao-hides-skins |
| a_state | fresh/preserved; whole/piece | One lot has one marketed state and configuration at its gate. Do not count a pelt and its cuttings twice; allocate treatment only to treated lots. | eu-raw-furskin-heading |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | source | source and actual co-products | event ledger | species; farm_or_wild; legal_id; cohort_or_capture; mass; products; price; period | supplier/capture and sale records; Raw aggregation requirements: link each event and product once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; currency; period | each event | actual cohort or season | actual source | per reference flow | authorization; sales; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_remove | remove | skin, terminal products and loss | removal ledger | event; input; raw_skin; actual_terminal_products; residue; each_destination | scale, sale and treatment tickets; Raw aggregation requirements: reconcile all products and waste once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | period | removal site | per reference flow | scale; sale; treatment ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_condition | condition | first-prepared skin and water | preparation log | input; water; output; trim; method | scale and meter; Raw aggregation requirements: actual intervention only. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | period | preparation site | per reference flow | meter; scale; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_grade | grade | accepted/downgrade/reject | grade ledger | species; fur_quality; configuration; accepted; downgrade; reject; item_count; destinations | grading and scale; Raw aggregation requirements: separate grade destinations. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; item | each lot | period | grading site | per reference flow | grade; sale records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_preserve | preserve | treated skin and service | treatment log | before; after; state; moisture; salt; energy; room_time; reject | scale and meter; Raw aggregation requirements: reconcile state and use. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kWh; h | treated lot | period | curing site | per reference flow | meter; treatment log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_handover | handover | net product and package | handover ledger | lot; state; species; configuration; gate; net_mass; package; count; reuse | ticket and scale; Raw aggregation requirements: accepted net mass only. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; item; turn | each handover | period | actual gate | per reference flow | signed ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_ref | reference | Net sold mass = measured gross less package and separable free preservative; item count is not mass. | gross; tare; free preservative | kg as sold | fao-hides-skins |
| c_piece | counted items | Observed lot kg/item = measured homogeneous lot net mass / counted items; never reuse across species, grade, state or configuration. | mass; count; qualifiers | observed kg/item | eu-raw-furskin-heading |
| c_balance | each lot | Reconcile material output, residues and moisture/state differences with measured input; investigate gaps, not default yields. | input; output; state | kg ledger | fao-hides-skins |
| c_shared | shared service | Assign metered use or documented service-hour/throughput share once for each actual consumer and period. | burden; use; period | allocated burden | fao-hides-skins |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every lot | Verify species, legality, furrier-use quality, whole/piece composition and undressed state; sheep hide is not inferred to be furskin. | authority and grade/sale record |
| dq_mass | all material | Calibrated mass and destination; no parent pelt and cutting double count. | scale and balance |
| dq_period | source and shared assets | Actual cohort/season, period and consuming node, including replacement or termination. | event and asset ledgers |
| dq_state | preservation | Actual before/after state; no universal fresh-to-preserved conversion. | treatment and mass records |
| dq_uuid | exchange generation | Resolve a concrete compatible platform identity; blank candidate identity is not final exchange permission. | detail and support-row evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | sold lot | Reject tanned, dressed, manufactured or hair-bearing non-furrier goods; verify lawful source and actual furrier-use whole/piece identity. | un-cpc-3-notes;eu-raw-furskin-heading |
| v_balance | each lot | Reconcile source, removed, prepared, accepted, downgrade, waste, treated and sold mass at their measured states. | fao-hides-skins |
| v_route | farm/wild | No farm animal input on wild route; actual co-products and source burden once; no upstream capture/slaughter duplication. | un-cpc-3-notes |
| v_period | shared service | Source event and each shared trap, removal, cleaning or cold/dry service have one period and one attributed consumer share. | fao-hides-skins |
| v_binding | all cards | conditional product inputs require actual concrete selection; uncovered UUIDs need detail confirmation. Mixed raw/dressed count-based candidates cannot bind a raw Mass reference. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species- and route-qualified foreground raw-furskin data package. |
| downstream_use | `secondary_dataset` or `background_dataset` after method and identity review. |
| allowed_use | Raw furrier-suitable product at measured species, configuration, state and gate. |
| excluded_use | Dressed/tanned fur, ordinary hide, non-furrier skin, unknown species or invented item-to-kg conversion. |
| required_metadata | Legal source; species; route; whole/piece; fur grade; mass/count; state; gate; period; allocation. |
| required_quality_disclosure | Completeness, mass, attribution, shared services, conversion uncertainty and unresolved UUIDs. |
| update_trigger | Material route, furrier criterion, preservation, gate, source-rule or platform-identity change. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-notes | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category and exclusion. |
| eu-raw-furskin-heading | official_guidance | https://faolex.fao.org/docs/pdf/eur212388.pdf | Raw fur and whole/part distinction. |
| fao-hides-skins | official_guidance | https://www.fao.org/4/i0523e/i0523e.pdf | First raw-skin handling and preservation. |
