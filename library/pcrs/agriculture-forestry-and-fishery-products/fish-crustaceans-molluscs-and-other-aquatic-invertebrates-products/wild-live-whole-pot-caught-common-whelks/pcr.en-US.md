---
pcr_id: pcr.wild-live-whole-pot-caught-common-whelks
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild live whole pot-caught common whelks

## 1. Scope and Applicability

This PCR covers wild common whelks (Buccinum undatum) captured in UK marine waters with baited seabed pots, delivered alive and whole in their native shells to the first harvester physical recipient. The declared LCA gate is the recipient's physical acceptance before cooking or extraction; invoice date, change of legal ownership and vessel landing alone do not establish that gate. Actual receipt and live-state records must establish the selected lot. This is a selected live route, not a claim about the proportion of contemporary whelk trade sold live.

Exclude other gastropods, farming or grow-out, non-pot capture, dead, frozen, cooked or extracted-meat reference products. Cooking, picking, depuration and any particular cooling regime are not universal obligations. Whole live shell weight cannot be replaced by warm cooked meat weight or a presumed meat yield. Seafish describes weighted plastic/net pots worked in fleets with bait; its general impact and bycatch descriptions do not establish zero bycatch, zero gear loss or impact factors for a concrete fishery. The 1997 live-handling source is used only for the existence of live transport/storage; its landing-page abstract supplies no modern quantitative default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-whole-pot-caught-common-whelks |
| classification_refs | cpc:3.0:04491; mapping context only |
| covered_products | Wild UK marine Buccinum undatum; baited seabed-pot capture; live whole in native shells at first harvester physical recipient acceptance |
| excluded_products | Other gastropods; farmed or grown-out whelks; non-pot routes; dead, frozen, cooked, opened or extracted-meat references |
| representative_product | Accepted live whole common whelks in native shells |
| production_route | Wild-stock capture using baited weighted seabed pots, trip-based hauling and sorting, actual conditional cleaning/live support/presentation, first-recipient acceptance |
| market_state | Selected live whole route; actual lot records required; no assertion of typical market share |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted live whole wild pot-caught common whelks at first harvester physical recipient |
| How much | 1 kg accepted net whole live mass |
| How well | Buccinum undatum; UK marine wild stock; baited seabed pots; alive and whole in native shells; recorded recipient acceptance |
| How long or cycle | Complete declared fishing trips and reporting period, including failed trips, returns and necessary pre-gate shore support; link multiyear vessel/gear service periods, replacements and termination |
| reference_flow_link | `whelks_accepted_live` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live whole wild pot-caught common whelks at first recipient acceptance |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species; wild origin; UK capture area and landing/recipient locations; pot and bait route; trip/period and cohort/lot; live whole native-shell state; actual handling interventions; physical acceptance time and recipient; net-mass drainage/tare method; intended-output and reject destinations |

All required qualifiers must be declared in the foreground package. Shell and animal tissue remain one reference product; no shell coproduct exists before opening. Exclude foreign loose material, free seawater, bait, bags, ice and container tare from net mass. Record any drainage method without inventing a universal duration or dehydrating the animals to achieve a mass convention.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted live whole lots using calibrated scales and paired gross/tare records under cp_gate; retain species, live state, drainage and recipient receipt evidence. Counts, bag weights and cooked-meat masses cannot replace actual calibrated net live mass. |
| `transfer_mass` | animal transfers | Mass | kg | Record each actual animal handoff with one transfer id and paired sender/recipient mass, state and time; internal transfer quantities remain measured and are never fixed at 1 kg. |
| `native_units` | expanded resource and service exchanges | Actual per-instance property | Actual native unit | Preserve fuel/water/gear mass, energy and invoice-native service units separately; convert only with documented compatible property/unit support and actual conversion evidence. Never label a vessel-hour or inclusive holding service as kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild Buccinum undatum present in UK marine waters before pot capture; no managed grow-out stage declared |
| starting_condition_role | Natural-stock capture context, with actual extraction and fishery interventions recorded; not a burden-free purchased input |
| product_classification_scope | Narrow UK live whole common-whelk pot route within Other wild molluscs, live, fresh or chilled |
| recursive_input_rule | Purchased same-category whelks require a separate origin/route/gate-compatible upstream dataset and lot chain; record as purchased input, never as this vessel's wild withdrawal; incompatible origin is outside this PCR |
| upstream_dataset_requirement | Verified origin-compatible bait, fuels, gear, energy, packaging and services with explicit inclusive boundaries; same-category purchased animals need upstream harvest burdens |
| disclosure | Capture and landing areas; vessel and gear; bait identity and origin; reporting periods; recipient gate; actual interventions and bypasses; shared assets/service consumers; stock and loss reconciliation; data gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_capture` | capture | Include actual pot deployment, soak/hauling and vessel operations, bait procurement/use, gear manufacture/repair/loss/retrieval, incidentals and returns; include failed trips in the declared period. Capture removes wild stock independently of managed biological production or subsequent cleaning. | seafish-whelk-pots |
| `boundary_gate` | whole system | Include all harvester-controlled or purchased activities necessary to achieve first physical recipient acceptance, including actual pre-gate shore support and transport. Exclude post-acceptance storage, resale, cooking and extraction. This is the PCR-declared boundary proved by actual receipt records. | |
| `boundary_interventions` | sorting; conditioning; preservation; presentation | Sorting receives raw or actually conditioned live catch and records accepted live grades, intended secondary destinations and rejects separately. Include bounded cleaning only when performed; animal lots bypass equipment-only cleaning. Live support may begin immediately after capture and overlap sorting, presentation or delivery. Register actual input/output interfaces and events without imposing a universal serial order, depuration, temperature or storage duration. | seafish-whelk-pots; seafish-live-whelk-1997 |
| `boundary_shared` | support; assets | Enumerate vessel, hauler, pots/ropes, shore facilities and shared services, every consuming node and period, production/repair/replacement/retirement phases and evidence for attribution. One event has one owner. Select either inclusive purchased service burdens or disaggregated direct resources/emissions/capital for the same scope. | |
| `boundary_losses` | all nodes | Reconcile live catch, returns, retained outputs, bait stocks/remainders/discards, mortalities, animal rejects, gear loss/retrieval and residues with actual destination/status. Record unresolved differences; do not assume bycatch negligible, all dead animals coproducts or all rejects unusable secondary outputs. | seafish-whelk-pots |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pot_capture` | Pot capture and vessel/gear support | required | Selected baited seabed-pot route | Trip/batch wild-stock removal and collected-catch handoff | per 1 kg reference flow |
| `catch_sorting` | Catch sorting and destination grading | required | Record actual live grades and reject/destination states | Independent sorting responsibility | per 1 kg reference flow |
| `primary_cleaning` | Bounded primary cleaning/preparation | conditional | Actual animal washing/debris removal or equipment-only cleaning before gate | Raw-to-prepared responsibility; animal bypass explicit | per 1 kg reference flow |
| `live_support` | Bounded live holding and preservation | conditional | Actual pre-gate intervention maintaining live state, on vessel or shore | Live-state preservation; may overlap other nodes | per 1 kg reference flow |
| `lot_presentation` | Lot containment and presentation | conditional | Actual bags, bins, labels or other presentation before acceptance | Product/package interface; logistics owned by gate node | per 1 kg reference flow |
| `recipient_gate` | Pre-gate delivery and physical acceptance | required | Each selected reference lot | Delivery, acceptance measurement and final output | per 1 kg reference flow |

Trip batches are linked to lots and a complete reporting period. Record departure/return, deployed and recovered pots, hauling, zero landings, cleaning/changeovers, actual conditional node instances and destination events. Transfer ids link actual senders and receivers; a single lot may bypass a conditional node or receive overlapping live support. Repeat transfers need unique instance ids. Do not add fictitious animal throughput for equipment-only cleaning.

Every card below is a semantic requirement. Expand an umbrella into actual independently identified materials, substances, outputs or services with the recorded property/native unit. Each expanded instance needs its own identity, amount, protocol evidence and independently approved U_instance; the parent's U_row is neither an aggregate ceiling nor an inherited bound. All 0..U_row ranges are provisional screening placeholders documenting missing independent quantitative evidence, not numerical estimates, observed maxima, allowed operating limits or substitutes for records. Obtain independent reviewed quantitative evidence before using them as empirical QA bounds. Zero means a documented inactive/absent exchange, not unrecorded activity. Normalize reconciled attributable quantities to the same accepted reference mass.

### Process: Pot capture and vessel/gear support (`pot_capture`)

#### Inputs

##### Product flows

#### Outputs

##### Product flows

###### Collected whole live whelks (`capture_live_catch`)

Record raw collected animals at the real sender handoff to sorting or an intervening conditional node. This internal throughput is measured, not fixed at the final normalized reference.

- Selected flow: Raw collected whole live common whelks
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculated from collected records: internal handoff quantity per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Provisional independent evidence need for capture_live_catch
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_capture_live_catch
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide to air (`capture_fossil_co2`)

Include only actual direct fossil-fuel combustion within owned foreground operations. Calculate from reconciled fuel and documented fuel-specific factors; exclude animal respiration and emissions already included in purchased services.

- Selected flow: Carbon dioxide, fossil, to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate actual direct fossil carbon dioxide quantity per 1 kg reference flow from fuel records and documented factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Provisional independent evidence need for capture_fossil_co2
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_capture_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Catch sorting and destination grading (`catch_sorting`)

#### Inputs

##### Product flows

###### Incoming whole live catch (`sorting_in`)

Identify the actual raw/conditioned state, sender and transfer id. Physical sorting classifies animals independently from their capture.

- Selected flow: Whole live common whelks received for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculated from collected records: sorting receipt quantity per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sorting`
- Range: Provisional independent evidence need for sorting_in
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_sorting_in
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

### Process: Bounded primary cleaning/preparation (`primary_cleaning`)

#### Inputs

##### Product flows

###### Animal lot entering actual cleaning (`cleaning_in`)

Record raw whole live animals only when they actually undergo bounded washing/debris removal. Equipment-only cleaning has no animal input or output; bypass it explicitly.

- Selected flow: Whole live common whelks entering actual primary cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculated from collected records: actual cleaning throughput per 1 kg reference flow; zero for animal bypass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`
- Range: Provisional independent evidence need for cleaning_in
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_cleaning_in
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared whole live animals (`cleaning_prepared`)

Record whole live prepared state and actual downstream handoff; shell remains part of the product. This is internal throughput, not a final reference or cooked product.

- Selected flow: Primary-cleaned whole live common whelks
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculated from collected records: prepared live handoff quantity per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning`
- Range: Provisional independent evidence need for cleaning_prepared
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_cleaning_prepared
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Bounded live holding and preservation (`live_support`)

#### Inputs

##### Product flows

###### Live animals entering support (`holding_in`)

Record actual live usable state, location and time before the intervention; the sender may be capture, sorting, cleaning or presentation according to the event record.

- Selected flow: Whole live common whelks entering bounded live support
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculated from collected records: actual holding receipt quantity per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_holding`
- Range: Provisional independent evidence need for holding_in
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_holding_in
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Live state after support (`holding_live_out`)

Record actual surviving whole live state and handoff, preserving duration and lot links. A preservation claim requires before/after live-state evidence; no independent final reference is created here.

- Selected flow: Whole live common whelks after bounded live support
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculated from collected records: surviving live handoff quantity per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_holding`
- Range: Provisional independent evidence need for holding_live_out
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_holding_live_out
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Lot containment and presentation (`lot_presentation`)

#### Inputs

##### Product flows

###### Live lot before presentation (`presentation_in`)

Record the actual whole live state before containment/labeling with its sender and transfer id, whether or not support is overlapping.

- Selected flow: Whole live common whelks before presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculated from collected records: presentation receipt quantity per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_presentation`
- Range: Provisional independent evidence need for presentation_in
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_presentation_in
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Presented live lot (`presentation_live_out`)

Record the protected/presented whole live animal handoff and associated package ledger separately. Package weight is not animal net mass; delivery resources belong to recipient_gate.

- Selected flow: Presented whole live common whelks before recipient acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculated from collected records: presented live handoff quantity per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_presentation`
- Range: Provisional independent evidence need for presentation_live_out
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_presentation_live_out
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

### Process: Pre-gate delivery and physical acceptance (`recipient_gate`)

#### Inputs

##### Product flows

###### Live lot offered to recipient (`gate_in`)

Record actual live whole lot received from the final actual upstream node and arrival/live-state checks; retain acceptance, partial rejection and return evidence.

- Selected flow: Whole live common whelks offered at first physical recipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculated from collected records: offered lot quantity per 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Range: Provisional independent evidence need for gate_in
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_gate_in
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted live whole reference product (`whelks_accepted_live`)

Actual calibrated accepted net live whole lot masses define the denominator. The 1..1 interval is solely normalization identity calculated from those same accepted-mass records, not a raw catch yield, empirical estimate or independent QA sample.

- Selected flow: Live whole wild pot-caught common whelks at first recipient acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Range: Normalization identity only; not raw observed yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow; calculated from the same accepted-mass records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_reconcile` | all outputs | Reconcile all intended species/grade outputs, internal transfers, returns, bait and gear stocks/losses and waste before allocating burdens. Native shells remain in the whole animal. Mortality, bycatch and rejects acquire product/waste/return status only from actual intent, state and destination; no automatic coproduct or substitution credit. | |
| `allocation_precedence` | shared trip and sorting outputs | This PCR selects the following allocation hierarchy, requiring concrete foreground evidence rather than deriving it from the qualitative Seafish sources: first subdivide independently metered activities; next use demonstrated causal physical service drivers for shared burdens. If unavoidable multi-output allocation remains, use measured net mass only among comparable intended whole-animal outputs; where functional/quality differences make mass unsuitable, document period-matched output value evidence and a justified economic allocation with mass sensitivity. Require an explicit decision, complete output set and handoff for each concrete dataset; no silent default or allocation to internal transfers. | |
| `allocation_periods` | multiyear assets; vessel and service periods | Link manufacture, use, repair, replacement, gear loss/retrieval and retirement to evidenced service periods and all consumers. Use actual recorded service exposure/usage shares; document remaining stock and termination, without universal lives. Include unsuccessful trips and cleaning/changeover events in the reporting period; link all shared vessel, shore facility and service consumers. Shares sum to the complete service; count each event once. | |
| `allocation_services` | purchased inclusive services | For each provider boundary choose inclusive service or its documented resources, direct emissions and capital; prevent duplicate provider burdens and duplicate cross-node/period ownership. Missing disaggregation/attribution evidence is a data gap. No automatic biodiversity, avoided-catch, seabed or ecosystem-service credit. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_capture | pot_capture | capture resources, stock, catch and fates | Trip/asset/bait ledger | trip/period; vessel; area; deployed/hauled/recovered pots; soak; fuel tank/purchases; bait identity/origin/opening/receipts/deployed/recovered/closing/discards; gear materials/stock/loss/retrieval/repair/replacement; catch species/live state/destination; transfer/event id; service boundary/native unit; engine/factor/source; all asset consumers/service phases |Reconcile calibrated tank/mass records, hauling log, invoices, catch/return and gear-retrieval records; record unsuccessful trips and actual direct-emission factors; pair sender/receiver transfers; Reconciled attributable amount per 1 kg reference flow; one owner per event, retain original native units| kg and native units per instance | Each trip, purchase, deployment, retrieval, loss, repair and service event | Complete reporting period plus relevant asset service phases | Actual vessel, capture areas, port and support providers | per 1 kg reference flow | Calibration, invoices, log completeness, factor provenance, stock balances and transfer pairs |
| cp_sorting | catch_sorting | incoming catch, every grade/destination, reject and actual sorting resources | Lot sorting ledger | lot/trip/period; transfer id; incoming state/mass; species; grade criterion; intended output and handoff; downgraded state; reject/return/waste destination; resource/service quantity/property/unit; event owner |Calibrated weighing and actual grading/destination records; pair handoffs and separately classify every resource, return and secondary output; Reconciled attributable amount per 1 kg reference flow; incoming = all destination quantities plus documented difference; internal transfers excluded from final-output set| kg and actual native resource/service units | Each sorting lot and resource/changeover event | Same complete reporting period | Actual vessel/shore sorting place | per 1 kg reference flow | Scales, grade records, recipient documents, output-set reconciliation |
| cp_cleaning | primary_cleaning | raw/prepared live interface, resources and residues | Conditional event ledger | active/bypass; animal vs equipment-only; raw/prepared state/mass; transfer id; water source/supply/abstraction; materials; energy; service boundary/native unit; residue/discharge identity/medium/destination; reject and loss; time; event owner |Meter/weigh actual inputs and outputs; document active intervention and bypass; classify direct environmental flows separately from supply/treatment; Reconciled attributable amount per 1 kg reference flow; no animal throughput for equipment-only cleaning; one event owner| kg and actual native units per instance | Each actual cleaning event | Same reporting period with actual event times | Actual onboard/shore cleaning locations | per 1 kg reference flow | Meter/calibration, waste/discharge records, bypass and paired handoffs |
| cp_holding | live_support | live before/after states, preservation inputs and losses | Conditional support ledger | active/bypass; before/after live state/mass; lot/transfer id; time/duration; location/system; actual water/energy/cooling/aeration/service inputs; property/native unit; provider boundary; mortality, residue and secondary destination; discharge medium; shared consumers/event owner |Measure actual resources and live handoffs, retain service invoices and state checks; identify concurrent nodes and one ownership ledger; Reconciled attributable amount per 1 kg reference flow; separate intended outputs from waste/direct release, no overlap double count| kg and actual native units per instance | Each support interval and input/output event | Same complete reporting period; actual duration only | Actual vessel and pre-gate shore support locations | per 1 kg reference flow | Meter/invoice evidence, state checks, mortality/destination records and transfer pairs |
| cp_presentation | lot_presentation | live lot/package interface and material fates | Presentation/reuse ledger | active/bypass; lot/transfer id; live animal net mass; bag/bin/label/material identities and weights; new/reused stock; return/cleaning/reuse service period; reject and end-of-use destination; event owner |Separately weigh animals and tare/materials; reconcile reusable stocks/returns and actual handoffs; record any additional presentation resource instances with native units; Reconciled attributable amount per 1 kg reference flow; exclude package mass from animal mass; one event owner| kg and actual native units per instance | Each presented lot and material/reuse event | Same reporting period plus reusable material service period | Actual pre-gate presentation location | per 1 kg reference flow | Calibrated tare/mass records, material invoices, reuse/return and disposal evidence |
| cp_gate | recipient_gate | offered, accepted and rejected lots; delivery | Receipt/scale/route ledger | lot/trip/period; species/route/origin; transfer id; sender/recipient; physical receipt/acceptance time; live whole state; gross/tare/free-water exclusions/drainage; calibrated accepted net mass; rejection/return/secondary/waste destination; actual delivery resource/native unit/provider boundary; event owner |Calibrated live whole lot weighing with paired tare, physical acceptance receipt and state/origin checks; collect route/resource/invoice records and disaggregated emissions where directly operated; Reconciled attributable amount per 1 kg reference flow using accepted net whole live mass only; accepted reference amount equals 1 kg by normalization| kg and actual native units per instance | Every receipt/acceptance, rejection and delivery event | Same complete reporting period | Actual first harvester physical recipient and pre-gate route | per 1 kg reference flow | Calibration, recipient receipts, origin/live-state checks, destination and provider-scope evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_records` | all inventory rows | Divide each reconciled attributable quantity by the same period's accepted net whole live reference mass in kg; retain numerator native units. The reference product divides that accepted mass by itself to give 1 kg. A period with no accepted reference output cannot produce a normalized dataset; retain its burdens in the complete attribution period. | Node-owned protocols; accepted-mass records in cp_gate; attribution decision | Quantity per 1 kg reference flow | |
| `reconcile_ledgers` | animal; bait; gear; packages | Opening stock plus receipts/withdrawals equals internal or final transfers, closing stock, returns and actual destination-specific losses with an explicit unexplained-difference record; pair internal transfer ids without treating them as final output. Reconcile before allocation and normalization. | Node-owned stock, event and handoff records | Reconciled physical/output ledgers | |
| `direct_combustion` | capture_fossil_co2; capture_other_emissions; actual direct delivery emissions | Use reconciled actual fuel by fuel/engine and documented factor substance, unit and receiving medium; record factor source/version and uncertainty in the concrete dataset. Exclude respiration and provider-inclusive emissions; no universal factor is supplied here. | cp_capture; cp_gate for direct delivery; documented fuel-specific factors | Actual direct emission quantities | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all concrete exchanges | Verify species, wild UK pot route, live whole recipient gate and each concrete flow/property/unit identity; unresolved umbrella identities cannot be final exchanges. | Origin/gear records, receipts and verified identity details |
| dq_completeness | period and routes | Retain complete trips including failures, all intended destinations, stocks, returns, bait and gear losses, actual node bypass/overlap and shore support. Never use absence of records as zero. | Full period/event register and reconciliation differences |
| dq_quantities | all cards | Replace provisional U_row by independently reviewed quantitative evidence when empirical bounds are needed. Each expanded instance needs independent U_instance; never use the same batch maximum as its QA reference sample. No provisional bound replaces a collected amount. | Independent comparable evidence and provenance; node-owned measurements |
| dq_shared | assets and purchased services | Retain period/phase/consumer linkage and explicit allocation decision; avoid direct/inclusive-service overlap, duplicate events and fixed unproved lives. | Service/asset ledgers and complete share reconciliation |
| dq_sources | public evidence | Seafish gear page supports qualitative pot/bait process context; the 1997 Jacklin landing-page abstract supports historical live handling existence only. It does not supply modern typical handling regimes, market share or quantitative factors. | Named source records and concrete foreground evidence |
| `collect_capture_fuel` | `pot_capture`; Inputs; Product flows: Vessel and hauler fuel | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual fuel identity and direct consumption for departure, fishing, hauling and necessary return, including unsuccessful trips; reconcile tank stocks and purchases. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: attributable fuel quantity per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Route-specific (`route_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for capture_fuel Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_fuel Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_capture_bait` | `pot_capture`; Inputs; Product flows: Purchased or transferred bait | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Identify actual bait species/material, origin and upstream status, not grow-out feed. Reconcile opening stock plus receipts with bait deployed, recovered/reusable remainder, closing stock and discards; bait remaining at sea has an actual destination and fate record. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: attributable bait use per 1 kg reference flow; preserve stock reconciliation; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture`; Sources: `seafish-whelk-pots` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for capture_bait Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_bait Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`; `seafish-whelk-pots` |
| `collect_capture_assets` | `pot_capture`; Inputs; Product flows: Pot, rope, vessel and hauling asset materials | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual plastic/netting, weights, ropes, repairs and relevant vessel/hauler capital; retain new/reused status, manufacture and service periods, lost/retrieved pieces, replacements and retirement. No universal equipment lifetime is assumed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: attributable asset material service per 1 kg reference flow; separate material instances and periods; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture`; Sources: `seafish-whelk-pots` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for capture_assets; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_assets Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`; `seafish-whelk-pots` |
| `collect_capture_services` | `pot_capture`; Inputs; Product flows: Inclusive vessel, port or gear-retrieval services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Use only actual purchased services. Preserve provider boundary and native invoice unit, selecting inclusive service or disaggregated resources for the same event; do not convert service hours to mass. Flow property / unit: Actual service property / native service unit; Amount rule: Calculated from collected records: attributable service quantity per 1 kg reference flow; expand by service identity and native unit; Value mode: Calculated value (`calculated_value`); Specificity: Route-specific (`route_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for capture_services; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_services Unit: actual native service unit Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_capture_secondary` | `pot_capture`; Outputs; Product flows: Other intended retained catch | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual intended other species or separately marketed outputs from the same trip, with identity, live/dead state, mass, recipient and handoff; absent output needs a documented absence rather than an assumed coproduct. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: intended-output quantity per 1 kg reference flow before burden allocation; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for capture_secondary; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_secondary Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_capture_wastes` | `pot_capture`; Outputs; Waste flows: Landed bait, animal and gear wastes | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual landed wastes and treatment destinations, including unreused bait, dead/rejected animals and retrieved unusable gear. Sea losses belong in the environmental destination record, not in a fictitious landed-treatment row. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: attributable landed waste quantity per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for capture_wastes; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_wastes Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_capture_sea_fates` | `pot_capture`; Outputs; Elementary flows: Bait remains and gear loss to sea | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual bait remaining/discarded at sea and unretrieved lost gear with material, location and retrieval links in the physical loss ledger. Include an environmental exchange only when an independently justified method specifies substance/material, receiving medium and compatible identity; absence of such an identity never turns the loss into zero. Animal capture/returns stay in the shell-inclusive physical/ecological ledger, not automatic elementary biomass withdrawals/emissions. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: method-compatible material release quantity per 1 kg reference flow when independently justified; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture`; Sources: `seafish-whelk-pots` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for capture_sea_fates; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_sea_fates Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`; `seafish-whelk-pots` |
| `collect_capture_other_emissions` | `pot_capture`; Outputs; Elementary flows: Other actual direct emissions | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual engine/exhaust or other releases using documented substance/species, particle size or analytical basis, receiving medium and factor. A generic NOx, SOx or particulate label does not establish one concrete identity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: or factor-calculated attributable direct emission quantity per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for capture_other_emissions; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_other_emissions Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_sorting_resources` | `catch_sorting`; Inputs; Product flows: Actual sorting resources and services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual supplied water/materials, metered energy or purchased sorting services with identity, property/native unit and inclusive boundary. Keep one owner for vessel/shore shared support and cleaning/changeover events. Flow property / unit: Actual per-instance property / actual native unit; Amount rule: Calculate attributable recorded sorting resources per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sorting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for sorting_resources; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sorting_resources Unit: actual native unit per instance Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sorting`;  |
| `collect_sorting_grades` | `catch_sorting`; Outputs; Product flows: Actual live grades and intended destinations | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand each selected live reference grade and independently intended downgraded/secondary output, naming actual grade criteria, live/dead state and recipient or internal handoff. Do not count internal reference grades again as final outputs or presume all downgraded animals are waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: grade-specific handoff quantities per 1 kg reference flow before allocation; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sorting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for sorting_grades; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sorting_grades Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sorting`;  |
| `collect_sorting_wastes` | `catch_sorting`; Outputs; Waste flows: Actual sorting rejects and debris | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record animals and loose material sent to waste treatment with status and destination. Returned organisms retain species/live state, release location and fate in the physical/ecological ledger; an animal return is not automatically an elementary emission. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: sorting waste quantity per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sorting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for sorting_wastes; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sorting_wastes Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sorting`;  |
| `collect_cleaning_resources` | `primary_cleaning`; Inputs; Product flows: Actual cleaning resources and services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual supplied water/seawater, energy, cleaning materials and inclusive service instances with source, property/native unit and boundary. Direct environmental water abstraction belongs only in cleaning_water_intake; direct discharge belongs only in cleaning_discharge. Animal washing is not evidence of mandatory depuration. Flow property / unit: Actual per-instance property / actual native unit; Amount rule: Calculated from collected records: attributable resource or service quantity per 1 kg reference flow; expand per actual identity/unit; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_cleaning` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for cleaning_resources; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_cleaning_resources Unit: actual native unit per instance Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_cleaning`;  |
| `collect_cleaning_water_intake` | `primary_cleaning`; Inputs; Elementary flows: Actual direct environmental water intake | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Include only actual direct abstraction for this bounded cleaning event; identify seawater/freshwater, location and compatible resource method. Purchased supplied water belongs in cleaning_resources; recirculated internal water is not new abstraction. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate attributable measured water intake per 1 kg reference flow using documented conversion when needed; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_cleaning` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for cleaning_water_intake Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_cleaning_water_intake Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_cleaning`;  |
| `collect_cleaning_secondary` | `primary_cleaning`; Outputs; Product flows: Actual intended cleaning secondary outputs | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Include only documented independently intended animal/material secondary outputs with state, identity, mass and actual recipient handoff; exclude internal prepared-reference transfers already in cleaning_prepared. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate recorded intended secondary-output quantities per 1 kg reference flow before burden allocation; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_cleaning` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for cleaning_secondary; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_cleaning_secondary Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_cleaning`;  |
| `collect_cleaning_residues` | `primary_cleaning`; Outputs; Waste flows: Cleaning residues and waste-treatment water | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual removed debris, animal rejects and wastewater sent to treatment, naming destination and actual state. Direct releases belong only in cleaning_discharge, not a fictitious treatment service. Reconcile measured losses in the physical ledger and their actual destination cards; only independently intended secondary products belong in cleaning_secondary. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: destination-specific cleaning residue quantity per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_cleaning` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for cleaning_residues; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_cleaning_residues Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_cleaning`;  |
| `collect_cleaning_discharge` | `primary_cleaning`; Outputs; Elementary flows: Actual direct cleaning discharges | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Include actual direct water/substance releases only with measured quantity/concentration, substance/species, receiving medium and compatible method; distinguish treatment-bound water in cleaning_residues. Expand independent receiving-medium identities without assuming harmless discharge. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate attributable direct discharge quantities per 1 kg reference flow from measured flow/concentration and documented conversion; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_cleaning` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for cleaning_discharge; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_cleaning_discharge Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_cleaning`;  |
| `collect_holding_resources` | `live_support`; Inputs; Product flows: Actual live-support resources and services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand only actual water, energy, cooling materials, aeration or inclusive service requirements with property/native unit, time and provider boundary. No mandatory tank, purchased oxygen, fishery ice or universal temperature/duration is inferred from live handling. Flow property / unit: Actual per-instance property / actual native unit; Amount rule: Calculated from collected records: attributable live-support quantity per 1 kg reference flow; expand per actual identity/unit; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding`; Sources: `seafish-live-whelk-1997` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for holding_resources; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_resources Unit: actual native unit per instance Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`; `seafish-live-whelk-1997` |
| `collect_holding_water_intake` | `live_support`; Inputs; Elementary flows: Actual direct holding-water intake | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Include actual direct environmental abstraction with water identity, location, quantity and compatible method. Supplied water belongs in holding_resources; internal recirculation is not repeated new withdrawal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate attributable measured holding-water intake per 1 kg reference flow using documented conversion when needed; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for holding_water_intake Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_water_intake Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`;  |
| `collect_holding_secondary` | `live_support`; Outputs; Product flows: Actual intended holding secondary outputs | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Include only documented independently intended outputs with state, identity, mass and recipient handoff. Exclude the surviving internal reference lot in holding_live_out; no mortality automatically becomes a coproduct. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate recorded intended secondary-output quantities per 1 kg reference flow before burden allocation; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for holding_secondary; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_secondary Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`;  |
| `collect_holding_wastes` | `live_support`; Outputs; Waste flows: Actual holding mortalities and residues | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual mortalities, rejected animals, spent materials and treatment-bound water by destination/status. An intended secondary animal output belongs in holding_secondary, not automatically waste; direct water intake and discharge belong in holding_water_intake and holding_discharge. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: destination-specific holding waste quantity per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for holding_wastes; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_wastes Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`;  |
| `collect_holding_discharge` | `live_support`; Outputs; Elementary flows: Actual direct holding discharges | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Include actual direct water/substance releases only with measured quantity/concentration, receiving medium, substance/species and compatible method. Treatment-bound water belongs in holding_wastes. No universal discharge composition or harmlessness is assumed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate attributable direct discharge quantities per 1 kg reference flow from measured flow/concentration and documented conversion; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_holding` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for holding_discharge; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_holding_discharge Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_holding`;  |
| `collect_presentation_materials` | `lot_presentation`; Inputs; Product flows: Packaging and containment materials | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual bags, bins, labels and protective materials, distinguishing single use, reusable stock, return, cleaning and end-of-use handoff. Allocate evidenced reuse service; do not prescribe a material or reuse lifetime. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: attributable packaging material quantity per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_presentation` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for presentation_materials; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_presentation_materials Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_presentation`;  |
| `collect_presentation_wastes` | `lot_presentation`; Outputs; Waste flows: Packaging rejects and end-of-use waste | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual pre-gate material waste and treatment destinations. Containers continuing beyond the gate or returned for reuse are disclosed as package stock/transfer, not counted as waste at acceptance. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: attributable presentation waste quantity per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_presentation` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for presentation_wastes; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_presentation_wastes Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_presentation`;  |
| `collect_gate_delivery` | `recipient_gate`; Inputs; Product flows: Actual pre-gate delivery resources and services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual fuel, electricity, handling and purchased transport/service instances with route and native units. Directly operated transport emissions belong in gate_emissions; exclude provider emissions already included in an inclusive service. Do not duplicate vessel return fuel owned by capture or live support owned by holding. Flow property / unit: Actual per-instance property / actual native unit; Amount rule: Calculated from collected records: attributable delivery quantity per 1 kg reference flow; expand per actual identity/unit; Value mode: Calculated value (`calculated_value`); Specificity: Route-specific (`route_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_gate` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for gate_delivery; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_gate_delivery Unit: actual native unit per instance Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_gate`;  |
| `collect_gate_secondary` | `recipient_gate`; Outputs; Product flows: Actual intended gate secondary outputs | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Include only independently intended outputs excluded from the accepted-live reference, with actual state, identity, mass and recipient/destination. Do not duplicate a live grade already accepted in whelks_accepted_live or classify every rejection as a product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate recorded intended secondary-output quantities per 1 kg reference flow before burden allocation; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_gate` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for gate_secondary; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_gate_secondary Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_gate`;  |
| `collect_gate_wastes` | `recipient_gate`; Outputs; Waste flows: Actual acceptance rejects sent to waste | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record rejected/dead animal amounts and actual treatment destination. Live returns retain state/location/fate in the physical/ecological ledger; independently intended secondary outputs belong in gate_secondary. Neither belongs in the accepted-live denominator. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculated from collected records: acceptance waste quantity per 1 kg reference flow; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_gate` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for gate_wastes; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_gate_wastes Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_gate`;  |
| `collect_gate_emissions` | `recipient_gate`; Outputs; Elementary flows: Actual direct delivery emissions | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Include only direct foreground delivery emissions, expanded by actual fuel/engine/factor substance and receiving medium. No respiration, provider-inclusive emission or capture-owned return-fuel emission is duplicated. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate attributable direct delivery emissions per 1 kg reference flow from recorded fuel and documented compatible factors; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_gate` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent evidence need for gate_emissions; each instance independent Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_gate_emissions Unit: kg Basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_gate`;  |
| `transport_cargo_scope` | any applicable pre-gate transport, return trip and shared transport service | Collect actual load and distance in the transport service native unit; load includes accompanying water, ice and containers and is not replaced by net reference animal/fish mass. Record actual fuel/service burdens and attribution for loaded, empty-return and zero-output periods. Inclusive transport-service scope excludes duplicate owned fuel, electricity, assets and direct releases; retain return and reusable-container responsibility. | Actual cargo, distance, trip, container and provider-scope records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Require Buccinum undatum, UK wild marine baited-pot route, live whole native-shell state and actual first-recipient acceptance. Reject cooked/meat/dead/frozen/farmed or other-species reference substitution and missing gate evidence. | seafish-whelk-pots; seafish-live-whelk-1997 |
| `validate_mass` | animal reference and transfers | Require calibrated accepted net live whole mass, paired drainage/tare records and unique transfer ids. Exclude foreign loose material/free seawater/packaging; native shell remains. The 1..1 reference range proves normalization only, not observed yield. | |
| `validate_balances` | all nodes and outputs | Reconcile complete trip/period animal, bait, gear and package records before allocation; enumerate every intended grade/species output and actual destination/handoff. Check mortality, bycatch, sea returns, unrecovered gear and landed wastes independently; no assumed zero or automatic coproduct. | |
| `validate_nodes` | conditional operations | Check actual activation/bypass, incoming/prepared/preserved/presented state and handoff, independent node-owned protocols and one owner per overlapping event. Equipment-only cleaning has no animal throughput. No fictitious serial order, mandatory depuration/cooking or universal cooling regime. | |
| `validate_attribution` | shared resources and periods | Check all consumers, service phases/replacement/termination, unsuccessful trips, complete output shares and explicit allocation decision with evidence/sensitivity. Reject duplicate direct/inclusive-service resources/emissions/capital and allocation to internal reference transfers. | |
| `validate_identity_ranges` | concrete dataset | Resolve every concrete exchange and support identity before final dataset use, preserving native service units. Every card has Range; symbolic provisional U bounds remain unresolved evidence needs and each expanded exchange has independently reviewed bounds. Missing identity, amount, destination, allocation or range evidence is disclosed as a gap and blocks unsupported finalization. | |
| `validate_atomic_completion` | all applicable collection requirements and concrete inventory exchanges | Resolve every applicable section-8 collection requirement into individual physical/chemical exchanges with their own quantities, native units, composition/state, range basis or explicit uncertainty evidence, raw records, normalization, actual destinations/receiving media and verified compatible UUIDs. Any unresolved applicable requirement makes the final dataset incomplete and validation fails; unknown is not zero. Never copy aggregate amounts onto components or duplicate inclusive services with owned fuel/electricity/direct releases. Internal transfers are not fixed to the final 1 kg. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground harvest-to-first-recipient data package with route-compatible upstream inputs |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections |
| allowed_use | Evidence-matched UK wild live whole pot-caught Buccinum undatum at the declared physical acceptance gate |
| excluded_use | Other species/routes/origins; managed grow-out; cooked/meat/dead/frozen reference products; post-gate processing; unsupported stock/ecosystem-service claims |
| required_metadata | Species/origin/area; vessel/pot/bait route; trip and period; live whole state; first recipient/gate/time; calibrated net-mass convention; actual nodes/bypasses/overlap; intended outputs/destinations; asset/service periods and attribution; upstream boundaries |
| required_quality_disclosure | Completeness and unexplained differences; primary-record coverage; factor/identity verification; unresolved range evidence and independent sample provenance; output/period allocation and sensitivity; source limitations |
| update_trigger | Changed route, gate, species/origin, handling system, output set, bait/gear/service boundary, quantitative evidence or identity support |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| seafish-whelk-pots | official_guidance | Seafish, Pots and Traps - Whelks; https://www.seafish.org/responsible-sourcing/fishing-gear-database/gear/pots-and-traps-whelks/ ; retrieved 2026-10-12 | Qualitative UK baited weighted seabed-pot/fleet process and materials; not universal bycatch/impact/loss factors |
| seafish-live-whelk-1997 | literature | M. Jacklin, West Ross Pesca Plan 1995/6: Investigations into the handling and live storage of the whelk Buccinum undatum; Seafish record 32660; published 1997-07-01; https://www.seafish.org/document/?id=32660 ; landing-page abstract retrieved 2026-10-12 | Historical existence of live-whelk transport/storage only; full report not used; no current market-share, temperature/duration, yield or resource factor |
