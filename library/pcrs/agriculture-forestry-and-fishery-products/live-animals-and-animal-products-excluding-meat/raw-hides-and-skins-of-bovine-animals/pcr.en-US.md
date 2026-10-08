---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-bovine-animals
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw hides and skins of bovine animals

## 1. Scope and Applicability

This PCR covers fresh or preserved but untanned raw hides/skins from bovine class 0211, including cattle, buffalo and other bovines, at the actual declared farm-slaughter, recovery, slaughterhouse or curing-plant handover. Record bovine species, meat/dairy/draught/mixed animal history, slaughter or lawful fallen-animal recovery, grade, fresh/wet-salted/dry-salted/air-dried/brine-cured state, moisture, salt and gate. A fallen-animal route is not a fictitious meat co-product. Exclude other species, tanned/further-prepared leather and downstream freight. [UN CPC 3.0](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf), [FAO hides and skins](https://www.fao.org/4/i0523e/i0523e.pdf) and [FAO hide definitions](https://www.fao.org/4/x9892e/X9892e06.htm) support this boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-bovine-animals |
| classification_refs | CPC 3.0 02951 |
| covered_products | Fresh or preserved untanned bovine raw hides and skins of class 0211. |
| excluded_products | Non-bovine skins; tanned or further-prepared leather; isolated hair; post-gate transport. |
| representative_product | Accepted bovine raw hide, weighed net in as-sold state at its actual handover gate. |
| production_route | Animal husbandry and slaughter with independent flaying, or lawful fallen-animal recovery; actual first cleaning, grading, optional preservation and declared handover. |
| market_state | Declared fresh or preserved raw state with grade, moisture and salt/brine recorded. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted bovine raw hide at its actual declared handover gate. |
| How much | 1 kg net as-sold raw hide, excluding package tare and separable brine/salt. |
| How well | Species, animal purpose, source route/legal status, grade, state, moisture/salt and gate known. |
| How long or cycle | Source animal phases through removal and actual declared handover; shared service periods attributed once. |
| reference_flow_link | `final_hide` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bovine raw hide, state- and gate-qualified |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | bovine species; meat/dairy/draught/mixed source; slaughter or legal fallen recovery; grade; fresh/wet-salted/dry-salted/air-dried/brine-cured; moisture and salt/brine; actual handover gate; lot; net and tare |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | final lot | Mass | kg | Subtract package tare and separable free brine/salt; retain measured incorporated moisture and salt in as-sold mass. |
| m_state | fresh versus preserved | Mass and moisture | kg;kg/kg | Measure pre/post mass, moisture and salt/brine; use no universal fresh-to-cured conversion. |
| m_grade | graded lot | Mass | kg | Reconcile accepted, downgraded, rejected, trims and measured loss. |
| m_period | source animal and shared plant | Service time | period | Link dairy, draught, growth, terminal and plant service phases to actual periods exactly once. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified bovine animal system and slaughter event, or legally documented fallen-animal recovery event. |
| starting_condition_role | Animal and terminal treatment burdens linked upstream; purchased water, energy, salt and package enter as Product inputs. |
| product_classification_scope | Bovine class 0211 raw hides, fresh or preserved but not further prepared. |
| recursive_input_rule | Bought-in raw bovine hides retain upstream burden; do not report them again as newly flayed output. |
| upstream_dataset_requirement | Source meat/dairy/draught/mixed production and terminal slaughter/recovery datasets with included operations documented; exclude upstream flaying service when the same operation is modelled by the foreground removal node. No zero-burden or all-burden default. |
| disclosure | Species, animal purpose/phases, source route, legal recovery status, grade, state, mass, allocation and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | animal origin | Trace actual meat/dairy/draught/mixed animal system and slaughter, or lawful fallen-animal recovery with no invented meat output; distinguish source periods. | fao-hides;fao-statistics |
| b_remove | raw removal | Flaying is independent of rearing/slaughter or recovery; record raw hide, attached matter, incidental loss and first-conditioning handoff. Do not count the same flaying service embedded in an upstream slaughter dataset again. | fao-hides |
| b_prepare | cleaning and grading | Include first fleshing/cleaning/trimming as performed; separate accepted, independently marketable downgraded and rejected/waste states and destinations. | fao-hides |
| b_preserve | optional preservation | Include only performed chilling, drying, salting or brining, with input salt/water/energy, residual brine and moisture loss; no tanning, liming or dehairing. | fao-hides;unido-leather |
| b_gate | packing and handover | Include protective packing and shared site services to the actual declared handover; do not invent plant operations for farm-slaughter or recovery-gate sales. Exclude later freight and tanning. | fao-hides |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| remove | Independent hide removal | required | Slaughter or lawful recovery route | Source animal/carcass to raw removed hide, incidental and rejects | kg raw hide/event |
| prepare | First cleaning and trimming | conditional | Only where performed before declared gate | Raw to prepared untanned hide, trims and rejects | kg raw hide input |
| grade | Quality grading | conditional | Where grade sorting is performed before declared gate | Prepared hide to accepted, marketable downgrade or rejected destination | kg prepared hide input |
| preserve | Conditional preservation | conditional | Only preserved lots | Accepted fresh hide to actual stabilized state; salt, moisture and residue explicit | kg hide input |
| handover | Protective packing and actual-gate handover | required | Every accepted lot | Exactly one fresh or preserved net hide output at its actual declared gate | kg net as-sold hide |

Flaying is a separate removal handoff after the animal source event. A lawful fallen-animal branch carries actual recovery burdens but no invented carcass/meat co-product. Shared flaying equipment, cleaning plant, curing space and reusable packages must have one measured service driver over actual consuming nodes and periods.

### Process: Independent hide removal (`remove`)

#### Inputs

##### Product flows

###### Source bovine or slaughter carcass (`source_bovine`)

Use only the slaughter branch and actual meat, dairy, draught or mixed animal history and terminal event. The separate fallen-animal Waste input card applies only if local law and operation make the recovered material Waste; a recovered Product requires its own verified Product identity before exchange generation.

Denominator and scope requirements：per kg raw hide removed

Raw quantity and calculation requirements: Recorded event input with animal-system burden and co-products linked once. Original collection denominator kind: process_output.

- Selected flow: Source bovine material, route- and legal-role-qualified (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Range: Provisional event-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: source material per kg raw hide; not an animal-yield default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Lawfully recovered fallen-bovine source (`fallen_source`)

Use only when the actual legal status of fallen material is Waste and hide recovery is permitted. Record prior animal burden and terminal handling; never invent meat/offal handovers. Product-status recovery needs a separate verified Product card in the concrete foreground package, not this Waste identity.

Denominator and scope requirements：per kg raw hide recovered

Raw quantity and calculation requirements: Weigh recovered material by event and record legal status. Original collection denominator kind: process_output.

- Selected flow: Fallen bovine recovery material, legal Waste role (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Range: Provisional recovery balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: fallen material per kg raw hide; no default recovery yield
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh removed raw hide (`raw_removed`)

Weigh raw hide at removal handoff, not at final plant gate.

Denominator and scope requirements：per source event

Raw quantity and calculation requirements: Net removal weight by animal/event. Original collection denominator kind: process_output.

- Selected flow: Fresh removed bovine hide, source-gate-qualified (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Range: Provisional lot-size screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/event
  - Basis: weighed raw hide per source event
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Attached matter and rejected tissue (`remove_residue`)

Segregate incidental flesh and rejected material by destination; independently sold offal is not waste.

Denominator and scope requirements：per kg raw hide removed

Raw quantity and calculation requirements: Weigh material sent to handler. Original collection denominator kind: process_output.

- Selected flow: Removal residue, composition- and destination-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: residue per kg raw removed hide
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First cleaning and trimming (`prepare`)

#### Inputs

##### Product flows

###### Raw hide received (`prepare_input`)

Carry source burden from removal or bought-in hide once.

Denominator and scope requirements：per kg prepared hide

Raw quantity and calculation requirements: Net receipt mass. Original collection denominator kind: process_output.

- Selected flow: Raw bovine hide at conditioning receipt (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`
- Range: Provisional conditioning balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: raw input per kg prepared hide
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning water (`prepare_water`)

Record only if first cleaning actually uses supplied water.

Denominator and scope requirements：per kg prepared hide

Raw quantity and calculation requirements: Metered lot use. Original collection denominator kind: process_output.

- Selected flow: Supplied process water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: water per kg prepared hide, zero if unused
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared untanned hide (`prepared_hide`)

Transfer cleaned/trimmed raw hide to grading; do not include tanning chemistry.

Denominator and scope requirements：per preparation lot

Raw quantity and calculation requirements: Weigh lot output. Original collection denominator kind: process_output.

- Selected flow: First-conditioned bovine raw hide (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`
- Range: Provisional lot-size screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/lot
  - Basis: prepared hide per lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Fleshing and trim residue (`prepare_trim`)

Separate waste trims from independently marketed animal products.

Denominator and scope requirements：per kg prepared hide

Raw quantity and calculation requirements: Weighed trim to handler. Original collection denominator kind: process_output.

- Selected flow: Bovine fleshing residue, destination-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Provisional trim screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: trim waste per kg prepared hide
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Quality grading (`grade`)

#### Inputs

##### Product flows

###### Prepared hide to grading (`grade_input`)

Measure the first-conditioned incoming state.

Denominator and scope requirements：per kg accepted and downgraded saleable hide

Raw quantity and calculation requirements: Weigh input lot. Original collection denominator kind: process_output.

- Selected flow: Prepared bovine raw hide for grading (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional grading balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: input per kg saleable grade
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted hide grade (`grade_accepted`)

Hand accepted grade to fresh packing or preservation.

Denominator and scope requirements：per grading lot

Raw quantity and calculation requirements: Weigh accepted mass and grade. Original collection denominator kind: process_output.

- Selected flow: Accepted graded bovine raw hide (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional grade output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/lot
  - Basis: accepted grade per lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold downgrade (`grade_downgraded`)

Treat as Product only where separately marketed with a handover; otherwise reclassify by actual waste destination.

Denominator and scope requirements：per grading lot

Raw quantity and calculation requirements: Weigh separately sold downgrade. Original collection denominator kind: process_output.

- Selected flow: Downgraded bovine raw hide, grade-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional downgrade screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/lot
  - Basis: separately marketed downgrade per lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected hide (`grade_reject`)

Record unmarketable contamination/damage by handler; not a downgraded sale.

Denominator and scope requirements：per grading lot

Raw quantity and calculation requirements: Weigh rejected lot. Original collection denominator kind: process_output.

- Selected flow: Rejected bovine hide, destination-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Provisional rejection screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/lot
  - Basis: rejected mass per lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Conditional preservation (`preserve`)

#### Inputs

##### Product flows

###### Graded hide before preservation (`preserve_input`)

Fresh sale bypasses this node; record moisture and incoming mass when it is used.

Denominator and scope requirements：per kg preserved hide

Raw quantity and calculation requirements: Weigh input. Original collection denominator kind: process_output.

- Selected flow: Accepted fresh bovine raw hide for preservation (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional preservation balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: incoming fresh hide per kg preserved hide; not a conversion factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salt or brine for curing (`preserve_salt`)

Record actual composition, salt concentration, issued and free/returned amount only on applicable route.

Denominator and scope requirements：per kg preserved hide

Raw quantity and calculation requirements: Issued less return and stock change. Original collection denominator kind: process_output.

- Selected flow: Preservation salt or brine, composition-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional cure-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: salt/brine input per kg preserved hide; no universal cure recipe
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation energy (`preserve_energy`)

Record actual carrier for powered drying/chilling; do not invent electricity for ambient curing.

Denominator and scope requirements：per kg preserved hide

Raw quantity and calculation requirements: Metered or invoice energy attributed once. Original collection denominator kind: process_output.

- Selected flow: Actual preservation energy carrier (UUID unresolved)
- Flow property / unit: Energy or Mass / kWh, MJ or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/kg
  - Basis: equivalent energy per kg preserved hide with carrier conversion disclosed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized raw hide (`preserve_output`)

One actual preserved state, with measured mass, moisture and salt content, passes to packing.

Denominator and scope requirements：per preservation lot

Raw quantity and calculation requirements: Weigh stabilized net mass. Original collection denominator kind: process_output.

- Selected flow: Preserved untanned bovine hide, state-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional preserved-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/lot
  - Basis: measured preserved hide per lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent cure and rejected hides (`preserve_residue`)

Separate solid salt, spent brine and rejected hide by composition/destination; evaporated water is a measured loss, not waste Product.

Denominator and scope requirements：per kg preserved hide

Raw quantity and calculation requirements: Weigh residue sent to handler. Original collection denominator kind: process_output.

- Selected flow: Preservation residue, composition-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: spent cure/reject per kg preserved hide
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective packing and plant handover (`handover`)

#### Inputs

##### Product flows

###### Fresh or preserved accepted hide (`handover_input`)

Bring exactly one state from removal, first conditioning, grading or preservation, according to actual route and gate; do not count two final states for the same lot.

Denominator and scope requirements：per kg final hide

Raw quantity and calculation requirements: Net received mass. Original collection denominator kind: process_output.

- Selected flow: Accepted bovine raw hide before handover, state-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional receipt balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: hide receipt per kg final net hide
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective packaging (`handover_package`)

Record actual wrap/pallet/container function, mass and reuse; packaging is not product mass.

Denominator and scope requirements：per kg final hide

Raw quantity and calculation requirements: Package issue less returns over measured reuse. Original collection denominator kind: process_output.

- Selected flow: Hide-protection packaging, function-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional package screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: packaging per kg hide, zero if absent
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bovine raw hide at actual handover (`final_hide`)

Record the one accepted fresh or preserved raw bovine-hide output at the actual declared farm-slaughter, recovery, slaughterhouse or curing-plant gate. Sale state and gate are mutually exclusive lot qualifiers; do not emit a second final output for an alternative state or gate. A narrower gate identity cannot represent this broad card.

Raw reference-output records: Weigh net as-sold hide at actual handover, excluding package tare and separable free brine/salt. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Bovine raw hide, state- and gate-qualified
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Reference identity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: exactly 1 kg reference product per kg reference, by definition
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Discarded package (`handover_pack_waste`)

Only single-use or damaged material discarded before gate is waste; reusable returns remain stock.

Denominator and scope requirements：per kg final hide

Raw quantity and calculation requirements: Weigh discard to handler. Original collection denominator kind: process_output.

- Selected flow: Packaging waste, composition-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Provisional packaging-waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: discarded packaging per kg final hide
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_animal | slaughter-linked route | Enumerate actual intended outputs and handovers: milk in dairy phases, draught service where delivered, meat/carcass and edible offal at slaughter, hide at removal. Prefer phase subdivision and measured causal attribution; otherwise disclose evidenced physical/economic allocation across intended outputs. Neither zero hide burden nor all animal burden to one hide is default. | fao-hides |
| a_fallen | lawful fallen recovery | Document carcass Product/Waste legal role, upstream burden and terminal handling; no invented slaughter meat. Attribute recovery service and source burden by explicit recorded decision. | fao-statistics |
| a_grade | grade and preservation | Accepted and independently sold downgraded grades have distinct handovers. Rejects and residues are waste unless marketed. Reconcile moisture/salt changes before comparing saleable masses. | fao-hides |
| a_period | animal phases and plant | Record growth, dairy, draught and terminal phases, replacement/termination, and shared flaying/cleaning/curing/packing services by consumer and service period; charge each once using measured throughput, time or other evidenced driver. | fao-hides |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | remove | source event and outputs | animal/slaughter/recovery ledger | species, animal ID, meat/dairy/draught phases, terminal event, legal role, output masses | supplier ledger and scale; Raw aggregation requirements: link outputs/burdens once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each event | attributed animal service and terminal event | actual source | per reference flow | animal ledger, permit and ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_prepare | prepare | raw and prepared hide | batch log | receipt, water, cleaning, trim, prepared mass | scale and meter; Raw aggregation requirements: balance by batch. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each batch | all batches | actual plant | per reference flow | scales and receiving slips; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_grade | grade | grades and rejects | grade log | incoming, accepted, downgraded, rejected, buyer/disposal | scale and grade ticket; Raw aggregation requirements: balance by grade/destination. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | all lots | actual plant | per reference flow | specification and sales/disposal; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_preserve | preserve | state conversion | cure log | initial/final mass, moisture, salt/brine, time, energy, residue | scale, recipe, meter, test; Raw aggregation requirements: batch state balance. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;kWh | each performed route | preserved lots | actual plant | per reference flow | recipe, lab and meters; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_utilities | prepare;preserve;handover | water, energy and shared asset | meter/asset log | carrier, amount, node, period, driver | meters and invoices; Raw aggregation requirements: allocate once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;kWh;h | service period | all foreground periods | actual consumers | per reference flow | calibration and worksheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_handover | handover | net product and package | dispatch log | source lot, state, grade, gross/tare/net, free salt/brine, package reuse, gate | scale and dispatch note; Raw aggregation requirements: sum net mass by state/grade. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | all sale lots | actual declared handover gate | per reference flow | calibration and dispatch; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_residue | remove;prepare;grade;preserve;handover | waste and residues | disposal log | composition, mass, reason, destination | scale and handler receipt; Raw aggregation requirements: sum each destination once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each event | all relevant periods | actual node | per reference flow | disposal ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | sold lot | net hide = gross mass minus package tare minus separable salt/free brine; incorporated moisture/salt remains in declared state | cp_handover;cp_preserve | kg net hide | fao-hides |
| c_balance | physical nodes | measured input plus incorporated cure = accepted plus downgrade plus rejects/residue plus measured moisture loss and inventory change; report residual | cp_source;cp_prepare;cp_grade;cp_preserve | kg residual | fao-hides |
| c_state | state comparison | dry hide solids = measured net mass × measured dry fraction, with salt solids separate; no universal state conversion | cp_preserve | kg dry hide solids | fao-hides |
| c_attribution | source/asset | attributable input per kg = measured input × documented output share × documented period/service share ÷ net sold hide; never apply a share twice | cp_source;cp_utilities;cp_handover | per kg hide |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_source | all lots | Trace species 0211, animal purpose and phases, actual slaughter or legal fallen recovery, grade and actual handover gate. | ledger and permit |
| q_mass | all lots | Calibrated gross/tare, grade, moisture and salt balance with reported residual. | scale, lab and batch balance |
| q_shared | source and plant | Record animal phases, shared consumers, service periods, replacement and termination without duplicate burdens. | phase and asset ledger |
| q_uuid | all exchange cards | Verify concrete flow identity, role, state, gate and property before final data package; expand conditional flow identities only with foreground evidence. | resolution log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference | Reject non-bovine, tanned/further-prepared, unknown state, undeclared actual gate or missing net Mass basis. | un-cpc-3 |
| v_route | source | Slaughter branch requires actual animal-system output allocation; legal fallen branch requires recovery evidence and no fictional meat output. | fao-statistics;fao-hides |
| v_balance | all lots | Reconcile removal, preparation, grades, preservation and final mass, with trims, salt/brine and moisture loss; investigate residual by site tolerance. | fao-hides |
| v_attribution | animal and shared assets | Reject duplicated animal phases or plant service periods and missing output handovers or attribution decisions. | fao-hides |
| v_binding | all cards | Resolve the broad final output to one concrete Product UUID only after actual state, gate and Mass are evidenced; no narrower plant flow can be imposed on every lot. All other concrete UUIDs and set members require independent verification before exchange generation. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-, species-, grade-, state- and actual-gate-qualified foreground dataset for raw bovine hide. |
| downstream_use | Candidate secondary_dataset or background_dataset after exchange resolution, review and publication. |
| allowed_use | Like-state and like-gate comparison or measured dry-solids conversion with disclosure. |
| excluded_use | Non-bovine/tanned hides, zero-burden hide default, universal state conversion, plant UUID reuse at other gates, downstream freight. |
| required_metadata | Species, animal purpose/phases, source route/legal status, outputs and allocation, grade, state, moisture/salt, net mass, actual gate and periods. |
| required_quality_disclosure | Animal-output and shared-service attribution, mass/grade balance, cure inputs/residues and unresolved identities. |
| update_trigger | New verified flow identity, route, gate, preservation or measured allocation evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Class 0211 and 02951 raw-hide identity. |
| `fao-hides` | official_guidance | [FAO, Hides and Skins](https://www.fao.org/4/i0523e/i0523e.pdf) | Flaying, first treatment, grade and preservation route. |
| `fao-statistics` | official_guidance | [FAO, hide/skin production definitions](https://www.fao.org/4/x9892e/X9892e06.htm) | Slaughter and fallen-animal source distinction. |
| `unido-leather` | official_guidance | [UNIDO sustainable leather framework](https://downloads.unido.org/ot/46/70/4670793/KRAL_AGR_AIT_URT_2015_100228_001.pdf) | Raw-hide versus later leather-processing boundary. |
