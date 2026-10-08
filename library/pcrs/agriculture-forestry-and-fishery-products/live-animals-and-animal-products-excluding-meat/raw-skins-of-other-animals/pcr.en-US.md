---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-skins-of-other-animals
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw skins of other animals

## 1. Scope and Applicability

This conditional method covers fresh or first-stage preserved untanned raw skins of identified species outside bovine, equine, sheep/lamb and goat/kid raw-hide classes (02951–02954) and furrier-use raw furskins (02955). Swine, peccary, reptile, fish and certain deer skins may qualify, subject to actual species, body part and use. Feather-on bird skin may fall in CPC 39110 and cannot be assumed to be 02959. Exclude tanned/dressed skin, leather, detached hair/feathers, fabricated goods and whole animals. Record lawful source, raw state, grade and the actual removal/recovery/curing gate.

The route is species-specific: farmed production, aquaculture, commercial slaughter, lawful wild capture and lawful quality-acceptable recovery are not interchangeable. Count only actual co-products. A recovered skin is not automatically zero burden; a fallen animal does not yield fictitious meat. No common yield, salt dose, moisture change or animal lifetime is prescribed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-skins-of-other-animals |
| classification_refs | CPC 3.0 02959 subject to species, use and state review |
| covered_products | Fresh or first-stage preserved raw non-furrier skins outside 02951–02954. |
| excluded_products | 02951–02955 skins, unsupported feather-on bird skins, tanned or manufactured skins, detached coverings and whole bodies. |
| representative_product | Accepted species-qualified raw skin sold by measured net mass at its real handover. |
| production_route | Actual production/capture or lawful recovery; distinct removal, cleaning, grading, optional preservation and presentation. |
| market_state | Untanned raw skin with species, part, use, state, grade, moisture/salt and gate declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted raw skin of the declared species, part, use and state at actual handover. |
| How much | 1 kg net as-sold skin excluding packaging and separable free brine or loose salt. |
| How well | Record legal source, species, part, use, grade, state, moisture/adhering salt and gate. |
| How long or cycle | Index source/capture, removal, cure and shared service to actual output and reporting period once. |
| reference_flow_link | `raw_skin_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species-, state- and gate-qualified raw skin of other animal |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; body part; intended use; legal source; fresh/preserved state; grade; moisture/adhering salt; net/tare; gate; period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | reference lot | Mass | kg | Calibrated gross less package tare and separable free cure medium yields net skin; disclose retained moisture and adhering salt. |
| m_state | fresh and cured lots | Mass; moisture/salt fraction | kg; kg/kg | Convert states only from lot-measured before/after mass and fractions; no universal multiplier. |
| m_balance | each lot | Mass | kg | Reconcile source skin, grades, rejects, added cure medium and measured water/stock change. |
| m_period | source and shared services | Time; service measure | period; service unit | Link actual source phases and shared floor, cold-room or cure services to periods once. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified commercial skin-bearing animal body/part or lawful recoverable material, with upstream source event and boundary documented. |
| starting_condition_role | Compatible upstream dataset supplies species-specific production/capture, slaughter or recovery burdens to skin-bearing material handoff; foreground begins at distinct removal. Do not repeat upstream removal exchanges. |
| product_classification_scope | Non-furrier raw skin of another animal, excluding 02951–02955 and bird-skin 39110 where applicable. |
| recursive_input_rule | Purchased same-category raw skin keeps upstream burden and enters only the later applicable node, never as newly removed skin. |
| upstream_dataset_requirement | Actual animal/capture/recovery source, real output set, legal status, co-product and period attribution. |
| disclosure | Species, part, use, source, route, grade, state, gate, legal status, allocation, periods, rejections and shared services. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | source routes | Match upstream production, capture, slaughter or lawful recovery to real species and handoff; no invented farm for wild capture, meat for fallen animals, or automatic zero-burden skin. | un-cpc-3-notes;fao-hides-skins |
| b_remove | removal | Remove actual skin independently from source production/capture and first conditioning; separate incidental tissue and damage. | fao-hides-skins |
| b_prepare | first conditioning and grade | Include actual first cleaning/fleshing and grading; exclude liming, tanning, dressing and leather manufacture. | fao-hides-skins;un-cpc-3-notes |
| b_preserve | cured lots | Fresh sale bypasses cure; record actual chill/dry/salt/brine method, before/after masses, inputs, service and residues without generic recipe. | fao-hides-skins |
| b_gate | handover | Include only necessary protection to the actual removal/recovery/curing handover; exclude post-gate freight and transformation. | fao-hides-skins |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| remove | Species-qualified skin removal | required | newly sourced skin lots | Distinct skin removal from commercial or lawful recovered body. | kg removed skin |
| condition | First raw-skin conditioning | required | untreated skin lots | First cleaning and trim before grade. | kg prepared skin |
| grade | Quality and destination sorting | required | prepared lots | Accepted and saleable downgrade versus rejection. | kg saleable grade |
| preserve | Optional raw preservation | conditional | cured lots | Actual stabilization; fresh lots bypass. | kg preserved skin |
| handover | Protective presentation and handover | required | saleable fresh or cured grade | One net sold state at actual gate. | kg net sold skin |

The upstream source ledger enumerates only real meat, fish-body, breeding, egg, fibre or other independent products for the actual species and phase. It hands the skin-bearing body to removal once; subsequent cleaning is separate. Each grade takes either fresh or preserved path. Charge shared flaying tables, wash equipment, cold rooms and cure areas once by measured service time/throughput and period across consuming nodes.

### Process: Species-qualified skin removal (`remove`)

#### Inputs

##### Product flows

###### Commercial skin-bearing body (`commercial_body`)

Only an actually marketed body or portion of the declared species; upstream source data stop at this handoff.

Denominator and scope requirements：per kg removed skin

Raw quantity and calculation requirements: Weigh actual input and record source, species and body part. Original collection denominator kind: process_output.

- Selected flow: Species-qualified commercial skin-bearing body or portion (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_remove`
- Range: Input ledger QA, not a skin-yield factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg removed skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Lawful recovered skin-bearing material (`recovered_body`)

Use only when the actual source is legally Waste and recovery is permitted; a marketable Product source uses the other card, not both.

Denominator and scope requirements：per kg removed skin

Raw quantity and calculation requirements: Weigh recovered input; retain authorization and terminal-treatment alternative. Original collection denominator kind: process_output.

- Selected flow: Species-qualified recoverable body material with documented Waste status (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_remove`
- Range: Recovery ledger QA, not a yield factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg removed skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh removed skin (`removed_skin`)

Hand off the species- and part-qualified untanned skin to first cleaning exactly once.

Denominator and scope requirements：per kg removed skin

Raw quantity and calculation requirements: Weigh before cleaning and link source event. Original collection denominator kind: process_output.

- Selected flow: Fresh removed raw skin of the declared species (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_remove`
- Range: Exact normalized measured output
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg removed skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Removal damage and incidental tissue (`removal_reject`)

Nonsaleable cuts/tissue go to actual treatment; a separately sold part needs a separate Product decision.

Denominator and scope requirements：per kg removed skin

Raw quantity and calculation requirements: Weigh residue separately from saleable skin. Original collection denominator kind: process_output.

- Selected flow: Nonsaleable removal residue by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Residue ledger QA only
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg removed skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First raw-skin conditioning (`condition`)

#### Inputs

##### Product flows

###### Raw skin before first cleaning (`raw_in`)

Use removed-skin handoff or purchased same-category untreated skin with upstream burden, not a second removal.

Denominator and scope requirements：per kg prepared skin

Raw quantity and calculation requirements: Measure incoming mass and source ticket once. Original collection denominator kind: process_output.

- Selected flow: Species-qualified raw skin before cleaning (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Incoming lot QA only
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg prepared skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning water supply (`clean_water`)

Record actual supplied water by source and subtype; no default wash rate.

Denominator and scope requirements：per kg prepared skin

Raw quantity and calculation requirements: Meter actual water supplied to this node. Original collection denominator kind: process_output.

- Selected flow: Water supplied for first skin cleaning (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Water ledger QA, not a wash recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg prepared skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-cleaned raw skin (`prepared_skin`)

Prepare only by first cleaning/fleshing/trimming, not tannery treatment.

Denominator and scope requirements：per kg prepared skin

Raw quantity and calculation requirements: Weigh skin at grade handoff. Original collection denominator kind: process_output.

- Selected flow: Species-qualified first-cleaned raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Exact normalized measured output
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg prepared skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### First-cleaning trim (`clean_trim`)

Separate actual skin/tissue trim from wastewater; report wastewater in its own treatment ledger.

Denominator and scope requirements：per kg prepared skin

Raw quantity and calculation requirements: Weigh non-saleable trim and identify destination. Original collection denominator kind: process_output.

- Selected flow: Nonsaleable cleaning trim by waste destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Trim ledger QA only
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg prepared skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Quality and destination sorting (`grade`)

#### Inputs

##### Product flows

###### Prepared skin for grading (`grade_in`)

Match prepared lot to actual species, body part and use before grade partition.

Denominator and scope requirements：per kg saleable graded skin

Raw quantity and calculation requirements: Weigh received lot and match cleaning ticket. Original collection denominator kind: process_output.

- Selected flow: Species-qualified first-cleaned raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Grade-input ledger QA only
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg saleable graded skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted-grade skin (`grade_accepted`)

Direct each actual accepted lot either to fresh handover or cure, never both.

Denominator and scope requirements：per kg saleable graded skin

Raw quantity and calculation requirements: Weigh grade lot and document unique destination. Original collection denominator kind: process_output.

- Selected flow: Species-qualified accepted raw-skin grade (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Grade partition, not a prescribed share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg saleable graded skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Saleable downgraded skin (`grade_downgrade`)

Only separately saleable lower grade is Product; if unsaleable, use rejected Waste instead.

Denominator and scope requirements：per kg saleable graded skin

Raw quantity and calculation requirements: Weigh lower grade with real price and destination. Original collection denominator kind: process_output.

- Selected flow: Species-qualified saleable lower-grade raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Grade partition, not a prescribed share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg saleable graded skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Unsaleable rejected skin (`grade_reject`)

Record actual treatment destination, not fictitious co-product credit.

Denominator and scope requirements：per kg saleable graded skin

Raw quantity and calculation requirements: Weigh rejection and document cause. Original collection denominator kind: process_output.

- Selected flow: Species-qualified rejected raw skin by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Reject ledger QA only
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg saleable graded skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Optional raw preservation (`preserve`)

#### Inputs

##### Product flows

###### Saleable skin before cure (`cure_in`)

Fresh sale bypasses this node; only saleable grade chosen for cure enters.

Denominator and scope requirements：per kg cured skin

Raw quantity and calculation requirements: Weigh pre-cure lot and grade. Original collection denominator kind: process_output.

- Selected flow: Species-qualified graded raw skin before actual cure (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Before-state ledger QA, not cure factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg cured skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual preservation medium (`cure_medium`)

Only actual salt, brine or other legally used raw-state medium; never assume every species is salted.

Denominator and scope requirements：per kg cured skin

Raw quantity and calculation requirements: Weigh added medium; split retained and spent mass. Original collection denominator kind: process_output.

- Selected flow: Method-specific raw-preservation medium (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Medium ledger QA, not recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg cured skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation energy supply (`cure_energy`)

Meter actual electricity, fuel or other energy carrier for chilling/drying/curing and shared service once.

Denominator and scope requirements：per kg cured skin

Raw quantity and calculation requirements: Meter real carrier energy by method, lot and node. Original collection denominator kind: process_output.

- Selected flow: Actual preservation energy carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Energy ledger QA, not prescribed factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: MJ/kg
  - Basis: per kg cured skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved still-raw skin (`cured_skin`)

Declare measured after-state, moisture and adhering salt without liming, tanning or dressing.

Denominator and scope requirements：per kg cured skin

Raw quantity and calculation requirements: Weigh after cure and reconcile actual input, added medium, losses and rejects. Original collection denominator kind: process_output.

- Selected flow: Species-qualified preserved untanned skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Exact normalized measured output
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg cured skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Spent cure medium or rejects (`cure_residue`)

Track actual waste destination; water evaporation is not a solid waste skin.

Denominator and scope requirements：per kg cured skin

Raw quantity and calculation requirements: Weigh spent/rejected material and measure water loss separately. Original collection denominator kind: process_output.

- Selected flow: Spent medium or rejected skin by waste destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Range: Cure residue QA only
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg cured skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective presentation and handover (`handover`)

#### Inputs

##### Product flows

###### One incoming saleable skin state (`handover_in`)

Each physical lot arrives once from fresh grading or preserved output, never both.

Denominator and scope requirements：per kg net sold skin

Raw quantity and calculation requirements: Match grade, state and source ticket to actual gate. Original collection denominator kind: process_output.

- Selected flow: Species-qualified saleable fresh or preserved raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: State-path ledger QA only
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg net sold skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective package (`protective_package`)

Record actual wrap/crate or reusable support before gate; later distribution is excluded.

Denominator and scope requirements：per kg net sold skin

Raw quantity and calculation requirements: Weigh consumed material or allocate measured reuse service by actual uses. Original collection denominator kind: process_output.

- Selected flow: Actual protective package material or reusable presentation item (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Package ledger QA, not prescribed mass
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg net sold skin
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net raw skin at actual gate (`raw_skin_product`)

One broad reference-output role instantiated by actual species, part, grade, state and gate; one UUID is not assumed to represent all variants.

Raw reference-output records: Weigh net sold skin excluding package and separable free cure medium. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Species-, state- and gate-qualified raw skin of other animal
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Exact reference mass identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per 1 kg net reference skin
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_source | actual upstream output set | Enumerate only real separate meat, fish-body, breeding, eggs, fibre or other saleable products for the declared species and phase. Prefer defensible causal physical allocation; otherwise document economic allocation with period prices and sensitivity. Never give skin automatic zero or all animal burden. | fao-hides-skins |
| a_recovery | lawful recovery | Document pre-existing source burden, legal recovery and actual terminal-treatment alternative; justify burden and separately report any avoided-treatment credit without fictional meat. | fao-hides-skins |
| a_grade | sale grades and cure | Attribute each accepted or downgraded marketable grade at one real handover, with rejects and retained salt/moisture distinct; cure mass does not create extra skin. | fao-hides-skins |
| a_period | source phases and shared assets | Index relevant husbandry/aquaculture/capture, slaughter/recovery, cold-room and cure periods. Divide actual flaying, washing, chilling and cure service among consuming nodes and periods by measured use or supported causal driver exactly once. | fao-hides-skins |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_remove | remove | source body and removed skin | source/removal ledger | species, part, lawful source, Product/Waste status, event, body/skin mass, real co-products, period | source ticket and calibrated scale; Raw aggregation requirements: source and removal once per skin lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each event | source and removal periods | supplier and removal site | per reference flow | authorization, ticket, calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_condition | condition | raw in, water, cleaned skin | preparation ledger | source lot, water subtype, mass, cleaning action, trim | meter and scale; Raw aggregation requirements: input/output by lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | preparation period | actual site | per reference flow | meter, scale and work ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_grade | grade | accepted, downgrade and reject | grade ledger | species, part, grade, mass, reason, destination | grade ticket and scale; Raw aggregation requirements: disjoint grade sums. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | grade period | actual site | per reference flow | dispatch/reject tickets; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_preserve | preserve | optional cure inputs/outputs | cure ledger | lot, method, input/output mass, salt/brine, moisture, energy, residue, service time | scale, test and meter; Raw aggregation requirements: linked before/after and service sum. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;MJ;period | each cured lot | cure/service periods | actual site | per reference flow | recipe, test and meter; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_handover | handover | net skin, package and gate | dispatch ledger | species, part, use, source, state, grade, gross/tare, net, package reuse, gate | dispatch ticket and scale; Raw aggregation requirements: one net mass per physical lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each sale lot | actual gate event | actual site | per reference flow | ticket and calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_residue | remove;condition;grade;preserve | reject and waste | treatment ledger | lot, material, mass, classification, destination, period | scale and transfer record; Raw aggregation requirements: once by route/material. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each event | relevant periods | origin site | per reference flow | transfer record and scale; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | handover lot | net raw skin = gross sale mass minus package tare and separable free brine/loose salt; disclose retained moisture/adhering salt | cp_handover;cp_preserve | kg net sold skin | fao-hides-skins |
| c_balance | removal to handover | skin input plus added cure medium = sale grades plus rejects/residue plus measured moisture/stock change and documented residual | cp_remove;cp_condition;cp_grade;cp_preserve;cp_handover | kg residual | fao-hides-skins |
| c_period | source and shared service | attribute each actual phase, flaying/cleaning/cold-room/curing service once to consuming lot and period | cp_remove;cp_condition;cp_preserve | burden/kg | fao-hides-skins |
| c_norm | final exchange | attributable quantity divided by positive net mass of same species, state and gate lot | cp_handover;cp_remove;cp_condition;cp_preserve | unit/kg skin |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | every lot | Confirm species, part, use, raw condition, CPC exclusion review, lawful source and actual gate. | source, grade and dispatch records |
| q_mass | every lot | Calibrate net/tare; measure cure state, moisture/salt and mass residual without universal yield. | scale, test and balance worksheet |
| q_route | every lot | Preserve real source/capture/slaughter/recovery route, actual products/periods and nonduplicated upstream removal. | route and allocation ledger |
| q_uuid | final dataset | Resolve exact flow type, species, state, property/unit, gate and destination for each exchange before TIDAS construction. | verified flow evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference lot | Reject species/use assigned to 02951–02955, tannage/further preparation, whole animals, and unsupported feather-on bird-skin 02959 claims. | un-cpc-3-notes;un-cpc-39110 |
| v_route | source/removal | Require lawful species-specific source and removal distinct from source production/capture and first preparation; no invented farm for wild animal or meat for recovered animal. | fao-hides-skins |
| v_balance | each lot | Reconcile fresh, accepted, downgrade, reject, cure medium and net sold states to measured uncertainty; investigate unexplained residual. | fao-hides-skins |
| v_allocation | phases and shared assets | Reject unsupported zero/whole-animal burden, duplicate product, repeated asset period or arbitrary universal co-product rule. | fao-hides-skins |
| v_identity | concrete final exchange | A broad unresolved card is not a final UUID; verify species, part, raw state, property, actual gate and direction. Goat skin, furskin or whole fish cannot substitute. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species-, route-, part-, grade-, state- and gate-qualified raw-other-animal-skin foreground dataset. |
| downstream_use | Candidate secondary_dataset or background_dataset only after concrete identities, review and publication. |
| allowed_use | Same species/use/state/gate comparison or measured lot-specific state conversion. |
| excluded_use | Cross-species substitution, goat/furskin/feather-on-bird automatic mapping, tanning/leather, universal yield/cure, unsupported zero burden. |
| required_metadata | Species, part, use, lawful source, route, grade, state, net mass, moisture/salt, gate, periods, real output set and allocation. |
| required_quality_disclosure | Co-product/period attribution, grade/cure mass balance, rejects, shared-service driver and unresolved UUIDs. |
| update_trigger | Exact platform flow confirmation, changed species/route/classification, new measured state or allocation evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-notes` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | raw-skin scope and exclusions |
| `un-cpc-39110` | official_guidance | [UNSD CPC 39110](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39110) | feather-on bird-skin classification check |
| `fao-hides-skins` | official_guidance | [FAO Hides and Skins](https://www.fao.org/4/i0523e/i0523e.pdf) | first preparation, cure and route method |
