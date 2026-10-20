---
pcr_id: pcr.constructions-and-construction-services.construction-services.paste-the-paper-interior-wallpaper-installation-services
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Paste-the-paper interior wallpaper installation services

## 1. Scope and Applicability

This methodology describes installing unpasted decorative paper wallpaper on an interior wall already received as smooth, sound, clean, dry and appropriately primed. It follows room layout and cutting, application of a compatible ready-mixed aqueous adhesive to the paper, the actual booking step, hanging and matching, smoothing, trimming and wet cleanup, and drying and customer acceptance. The required handover is an adhered, visually accepted covering whose actual dryness meets the declared paper, adhesive and project instructions.

Wallpaper and adhesive manufacture, primer application, old-covering removal, substantial substrate repair, painting, vinyl wallcoverings, self-adhesive or prepasted products and paste-the-wall routes are outside this category. Their burdens cannot be absorbed by relabelling a preparation or installation exchange. A job receiving an unsuitable wall must record the separate enabling work and the later accepted interface before using this installation methodology.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.paste-the-paper-interior-wallpaper-installation-services |
| classification_refs | cpc:3.0:54750 |
| covered_products | Interior installation service for unpasted paper wallpaper pasted on the paper with compatible ready-mixed aqueous adhesive and booked before hanging |
| excluded_products | Wallpaper manufacture; vinyl; self-adhesive; prepasted; paste-the-wall; painting; upstream removal, wall repair and primer application |
| representative_product | One accepted interior paper-wallpaper installation lot on a declared received primed substrate |
| production_route | accepted wall and rolls → layout/cut → paste/book → hang/match/smooth/trim/wet-clean → dry/inspect/accept |
| market_state | Completed installation service handed to the customer after actual dryness and visual acceptance |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Paste-the-paper interior wallpaper installation service at dry acceptance |
| How much | 1 m2 of net finally accepted wall surface |
| How well | Paper and adhesive compatible with the received substrate; declared pattern and seam arrangement; adhered surface without unresolved bubbles, wrinkles, tears, staining or failed seams; actual specified dryness met |
| How long or cycle | One identified installation lot, from received-wall acceptance through its last accepted correction; enumerate all actual work, waiting, drying, inspection and correction periods; no assumed service lifetime |
| reference_flow_link | `reference_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Paste-the-paper interior wallpaper installation services |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | job/lot and wall IDs; site/geography; received substrate and primer state; actual unpasted paper construction, coating, grade, roll batch, pattern match and repeat; actual aqueous adhesive product and compatibility; booking instruction and observed interval; net-area measurement rule; dryness criterion and observed acceptance; work and correction periods; utilities and service providers; waste and water destinations |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_area | reference product | Area | m2 | A is the positive net wall surface finally accepted for this lot, measured from actual dimensions and openings with an explicit overlap/corner rule. Count each accepted patch once. Trial, rejected, unaccepted and repeated covering areas do not enlarge A. Use cp_dry_accept. |
| common_denominator | all inventory rows | Declared row property | Declared row unit | Normalize each node's attributed physical total once by the same A. The final service is A/A = 1 m2. An internal transfer keeps its own actual numerator and is never set to 1 merely because the reference is 1 m2. |
| paper_mass_area_bridge | paper_rolls; cut_strips; paste_feed; booked_strips; hang_feed; wet_wallcovering; dry_feed | Mass and Area | kg and m2 | Record actual paper dimensions and weighing/moisture condition by strip and transfer ID. Retain both wet/dry mass and area observations where needed. Count, nominal roll area or dry grammage alone cannot replace actual wet handoff mass or hydrated installed area. |
| water_constituent_basis | paste_book_vapour; hang_trim_vapour; dry_vapour | Mass | kg | Water is constituent H2O, not total adhesive, total wet-paper or total wastewater mass. Record wet masses and corresponding measured or traceable water fractions with time and moisture method. No complete-fate assumption from a partial balance. |
| stock_exclusivity | paper_rolls; adhesive; wash_consumables; unused_paper_return; unused_adhesive_return; unused_hanging_consumable_return | Mass | kg | Gross physical draw includes usable returns or external unused transfers: opening intact unissued stock + receipts - closing intact unissued stock. Use separate positive usable-exit outputs in kg. Closing intact stock, return, external transfer, processed material and WIP are exclusive pools. |
| service_time | layout_cut_shared_service; paste_book_shared_service; hang_trim_shared_service; dry_accept_shared_service | Duration | h | Use actual contract start/end and charged availability periods, including attributable paid idle. No 8-hour day or assumed booking/drying interval. Keep a supplier's incompatible charge unit in the source record and establish an evidenced conversion before producing an h exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted smooth, sound, clean, dry and appropriately primed interior wall; actual unpasted paper rolls and compatible ready-mixed aqueous adhesive supplied to the job |
| starting_condition_role | Upstream received installation interface, with separate proof of preparation and acceptance; it does not imply primer application within this foreground boundary |
| product_classification_scope | The specific paper-wallpaper installation service above; classification 54750 has a wider semantic scope than this selected route |
| recursive_input_rule | A same-category service purchased for another contractor's portion crosses the declared responsibility gate once. Record its scope, accepted area, provider and period; either use its upstream service dataset or expand its work records, never both. Do not feed this lot's own intermediate state back as a purchased final service. |
| upstream_dataset_requirement | Identify separate datasets or explicit gaps for actual paper, aqueous adhesive, water, electricity and charged services. Link upstream wall preparation separately when the downstream study includes it. Internal cut, booked and hung states have custody IDs and measured states rather than invented market-product identities. |
| disclosure | Publish the received-wall condition and evidence; material grades/formulations; included node responsibility and periods; outsourced service scope; actual rework and waste routing; measured/estimated water fates; shared-service attribution; remaining identity and quantity gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_start | received wall | Begin only after wall/primer suitability and dryness are evidenced. Reject the interface or model enabling preparation separately when it is unsuitable. | roman-wall-preparation |
| boundary_route | installation route | Check the paper's actual hanging instructions before pasting. Use its compatible adhesive and booking requirements; do not substitute a paste-the-wall route. | roman-paper-preparation |
| boundary_nodes | four foreground nodes | Keep layout/cut, paste/book, hang/trim/cleanup and dry/accept as separate responsibilities with real input and output gates. Include their actual corrections and utilities through final acceptance. | roman-paper-preparation; roman-first-strip |
| boundary_nonwater_releases | paste_book; hang_trim; dry_accept | Assign each actually observed non-H2O substance release to its actual producing node with occurrence, species/state, medium, amount and method evidence. Earlier-node releases cannot be subsumed into the drying card. Unknown occurrence or fate remains a gap; captured waste and direct release remain exclusive. | |
| boundary_water | water-containing states | Carry formulation water and paper moisture through time-specific transfers. Assign evaporation to the node where it occurs; retain collected wastewater and water in solid discards, WIP and accepted covering as different fates. | |
| boundary_services | actual utilities/services | Include actual site electricity and charged access, tools, storage or conditioning attributable to the lot, with all consumers and paid availability periods. If a service already includes electricity, document the component boundary before adding electricity separately. | |
| boundary_end | customer handover | End at actual dry acceptance; wallpaper use, later maintenance, replacement and end of life are outside this foreground service. Initial failed installation and its corrections remain in this lot. | |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Accepted ready-to-wallpaper wall interface (`wall_interface`)

Process / prospective direction / type: `layout_cut` / `inputs` / `product`.

Received upstream dry, smooth, sound, clean and appropriately primed surface; area interface only, not a new wall-material input or an assertion that the entire building is attributable to this lot.

- Collection subject: Accepted ready-to-wallpaper wall interface
- Flow property / unit: Area / m2
- Amount rule: Measured received net interface area / A; retain wall and acceptance IDs.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_layout_cut`
- Sources: `roman-wall-preparation`
- Unverified optional screening aid: Provisional independent screening interval; Allows a broader received interface than finally covered area; investigate large uncovered portions.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: m2
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual charged access, tool, storage or conditioning service (`layout_cut_shared_service`)

Process / prospective direction / type: `layout_cut` / `inputs` / `product`.

Conditional actual provider/asset/contract service. Enumerate consumers and periods; include paid idle availability; service dataset component boundary prevents electricity or asset burden duplication.

- Collection subject: Actual charged access, tool, storage or conditioning service
- Flow property / unit: Duration / h
- Amount rule: Actual attributed charged availability hours / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_layout_cut_utilities`
- Unverified optional screening aid: Provisional independent screening interval; Node-specific service screen allows absence or small jobs with substantial charged availability; no default working-day conversion.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: h
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Unused intact actual wallpaper roll material (`unused_paper_return`)

Process / prospective direction / type: `layout_cut` / `outputs` / `product`.

Actual positive exit from this node to identified supplier/external custodian; retained closing stock is excluded. Same grade and supplied moisture basis as input; only original unused material upstream burden travels with it.

- Collection subject: Unused intact actual wallpaper roll material
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive usable paper return or unused external transfer / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_layout_cut`
- Unverified optional screening aid: Provisional independent screening interval; Usable paper exit may be absent or substantial for minimum roll purchases.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Removed paper roll packaging (`paper_packaging`)

Process / prospective direction / type: `layout_cut` / `outputs` / `waste`.

Separate card/plastic or other actual packaging materials and destinations; tare outside net paper mass; no assumed recovery.

- Collection subject: Removed paper roll packaging
- Flow property / unit: Mass / kg
- Amount rule: Actual material-resolved packaging discard mass / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_layout_cut`
- Unverified optional screening aid: Provisional independent screening interval; Small jobs can carry disproportionate roll packaging.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual charged access, tool, storage or conditioning service (`paste_book_shared_service`)

Process / prospective direction / type: `paste_book` / `inputs` / `product`.

Conditional actual provider/asset/contract service. Enumerate consumers and periods; include paid idle availability; service dataset component boundary prevents electricity or asset burden duplication.

- Collection subject: Actual charged access, tool, storage or conditioning service
- Flow property / unit: Duration / h
- Amount rule: Actual attributed charged availability hours / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paste_book_utilities`
- Unverified optional screening aid: Provisional independent screening interval; Node-specific service screen allows absence or small jobs with substantial charged availability; no default working-day conversion.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: h
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Pasted and booked wallpaper strips (`booked_strips`)

Process / prospective direction / type: `paste_book` / `outputs` / `product`.

Paper, adhesive solids and water at observed booking end; paper hydration and changed dimensions recorded; paired with hang_feed.

- Collection subject: Pasted and booked wallpaper strips
- Flow property / unit: Mass / kg
- Amount rule: Actual wet booked-strip handoff mass / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paste_book`
- Sources: `roman-paper-preparation`
- Unverified optional screening aid: Provisional independent screening interval; Wet-state mass can exceed dry cut mass through actual adhesive and water uptake.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 5
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual substance-resolved direct releases during pasting and booking (`paste_book_other_releases`)

Process / prospective direction / type: `paste_book` / `outputs` / `elementary`.

Conditional own-node umbrella for actual non-H2O direct releases during this node only. Establish the exact substance, physical state or particle basis, receiving environmental compartment and quantity method from actual formulation and activity records. Occurrence, species, medium and amount are not assumed; an unknown remains a data gap. Captured residues and wastewater transfers are separate fates. This card cannot inherit dry_accept_other_releases ownership or a generic VOC identity.

- Collection subject: Actual substance-resolved direct releases during pasting and booking
- Flow property / unit: Mass / kg
- Amount rule: Actual evidenced own-node non-H2O release by exact substance and receiving compartment / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paste_book`
- Unverified optional screening aid: Provisional independent screening interval; per-species screen only where an actual own-node release is evidenced, with no assumed occurrence and no zero default for a gap.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Pasted and booked wallpaper strips (`hang_feed`)

Process / prospective direction / type: `hang_trim` / `inputs` / `product`.

Same transfer IDs and wet constituents as booked_strips after any independently recorded custody loss; do not count prior evaporation again.

- Collection subject: Pasted and booked wallpaper strips
- Flow property / unit: Mass / kg
- Amount rule: Actual wet booked strips received / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim`
- Sources: `roman-first-strip`
- Unverified optional screening aid: Provisional independent screening interval; Receiving wet-state screen independent from assumed final coverage.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 5
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual wipe and cleaning consumables (`wash_consumables`)

Process / prospective direction / type: `hang_trim` / `inputs` / `product`.

Actual sponge/cloth or other evidenced cleaning material individually resolved; record reusable asset/service separately when appropriate; no assumed cleaner chemistry.

- Collection subject: Actual wipe and cleaning consumables
- Flow property / unit: Mass / kg
- Amount rule: Gross material-specific draw / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim`
- Unverified optional screening aid: Provisional independent screening interval; Disposable consumables may be absent when reused tools provide the function.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual charged access, tool, storage or conditioning service (`hang_trim_shared_service`)

Process / prospective direction / type: `hang_trim` / `inputs` / `product`.

Conditional actual provider/asset/contract service. Enumerate consumers and periods; include paid idle availability; service dataset component boundary prevents electricity or asset burden duplication.

- Collection subject: Actual charged access, tool, storage or conditioning service
- Flow property / unit: Duration / h
- Amount rule: Actual attributed charged availability hours / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim_utilities`
- Unverified optional screening aid: Provisional independent screening interval; Node-specific service screen allows absence or small jobs with substantial charged availability; no default working-day conversion.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: h
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Unused actual cleanup materials (`unused_hanging_consumable_return`)

Process / prospective direction / type: `hang_trim` / `outputs` / `product`.

Own-node custody exit for actual unused consumables or demonstrably unused supplied water where that occurs; expand material-specific exchanges; same kg basis as input, excluding closing stock and contaminated residues.

- Collection subject: Unused actual cleanup materials
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive usable return or unused external transfer by material / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim`
- Unverified optional screening aid: Provisional independent screening interval; Separate usable exit screen covers unused bulk cleanup supplies; it never substitutes for measured input.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Spent wipes and captured cleaning residues (`spent_wipes`)

Process / prospective direction / type: `hang_trim` / `outputs` / `waste`.

Material, adhesive residue and water content recorded; distinguish reused wipes, reusable asset closing stock and wastewater to avoid duplicate water.

- Collection subject: Spent wipes and captured cleaning residues
- Flow property / unit: Mass / kg
- Amount rule: Actual discarded wet wipe/residue mass / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim`
- Unverified optional screening aid: Provisional independent screening interval; Wet wipes can retain both paste and water, requiring a separate fate.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual substance-resolved direct releases during hanging and cleanup (`hang_trim_other_releases`)

Process / prospective direction / type: `hang_trim` / `outputs` / `elementary`.

Conditional own-node umbrella for actual non-H2O direct releases during this node only. Establish the exact substance, physical state or particle basis, receiving environmental compartment and quantity method from actual formulation and activity records. Occurrence, species, medium and amount are not assumed; an unknown remains a data gap. Captured residues and wastewater transfers are separate fates. This card cannot inherit dry_accept_other_releases ownership or a generic VOC identity.

- Collection subject: Actual substance-resolved direct releases during hanging and cleanup
- Flow property / unit: Mass / kg
- Amount rule: Actual evidenced own-node non-H2O release by exact substance and receiving compartment / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim`
- Unverified optional screening aid: Provisional independent screening interval; per-species screen only where an actual own-node release is evidenced, with no assumed occurrence and no zero default for a gap.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual charged access, tool, storage or conditioning service (`dry_accept_shared_service`)

Process / prospective direction / type: `dry_accept` / `inputs` / `product`.

Conditional actual provider/asset/contract service. Enumerate consumers and periods; include paid idle availability; service dataset component boundary prevents electricity or asset burden duplication.

- Collection subject: Actual charged access, tool, storage or conditioning service
- Flow property / unit: Duration / h
- Amount rule: Actual attributed charged availability hours / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept_utilities`
- Unverified optional screening aid: Provisional independent screening interval; Node-specific service screen allows absence or small jobs with substantial charged availability; no default working-day conversion.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: h
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Discarded drying or inspection rejects (`dry_rejects`)

Process / prospective direction / type: `dry_accept` / `outputs` / `waste`.

Paper/adhesive/residual-water composition, failed patch and period, removal owner and custodian; in-place correction is a rework event rather than an invented discard.

- Collection subject: Discarded drying or inspection rejects
- Flow property / unit: Mass / kg
- Amount rule: Actual removed reject composite mass / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Unverified optional screening aid: Provisional independent screening interval; Dryness-stage failure may be absent but actual removed mass can be substantial.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Collection requirement: Actual substance-resolved direct releases during drying (`dry_accept_other_releases`)

Process / prospective direction / type: `dry_accept` / `outputs` / `elementary`.

Conditional own-node non-H2O umbrella; establish occurrence, species, physical state/particle basis, receiving medium and method from actual formulation/activity. No generic VOC identity or missing-mass pollution inference.

- Collection subject: Actual substance-resolved direct releases during drying
- Flow property / unit: Mass / kg
- Amount rule: Actual evidenced release by substance and receiving compartment / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Unverified optional screening aid: Provisional independent screening interval; Broad per-species screen only when an actual release is evidenced; unknown release is not zero.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 6. Process Inventory Structure

All cards below require foreground quantities. Conditional cards expand to zero, one or multiple actual material/provider/substance exchanges only after records establish identity and applicability. A documented absence is different from an unknown quantity. Identity matching cannot supply a quantity. Each provisional Range is an independent author screening interval; it is neither a specification, a measured distribution nor permission to clip actual records. Replace it with an independent reviewed sample or stronger evidence where available; investigate outliers and retain their actual values.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| layout_cut | Accept wall, plan pattern and cut paper | required | All covered installations | Receive accepted wall and paper; establish strip layout and cut-state handoff; own dry offcuts and roll packaging | actual cut-strip mass and dimensions; normalized by final A |
| paste_book | Paste paper and book | required | All covered installations | Receive cut strips; apply actual compatible aqueous adhesive and book according to actual instructions; hand over wet booked strips | actual wet booked-strip mass and water state; normalized by final A |
| hang_trim | Hang, match, smooth, trim and wet-clean | required | All covered installations | Receive booked strips, apply to received wall, complete matching and wet cleanup; hand over actual hung surface awaiting dryness | actual hung area and constituent masses; normalized by final A |
| dry_accept | Dry, inspect and accept | required | All covered installations | Receive wet hung surface, observe dryness and visual quality, route failed states and hand over accepted service | A m2 finally accepted surface |

Actual correction events keep event_id, strip/patch ID, originating node, destination node, period and material state. A wrongly cut but retained strip returns to layout_cut; a booked strip needing repasting records that real additional paste_book event; a hanging defect corrected in place records another hang_trim event; a drying/inspection failure routes to the actual correction node or dry_rejects exit. These are graph loops using the existing responsibilities. An unsuccessful patch is excluded from A until finally accepted. Duplicate records of one physical event are deduplicated; repeated physical events, replaced material and their burdens are retained once each.

### Process: Accept wall, plan pattern and cut paper (`layout_cut`)

#### Inputs

##### Product flows

###### Unpasted paper wallpaper in rolls (`paper_rolls`)

Actual decorative paper construction/coating, grade, batch, pattern and supplied moisture state; exclude vinyl, base paper and prepasted material.

- Selected flow: Unpasted paper wallpaper in rolls
- Flow property / unit: Mass / kg
- Amount rule: Gross paper draw / A; never deduct unused exits in this input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_layout_cut`
- Sources: `roman-paper-preparation`
- Range: Provisional independent screening interval; Broad mass screen accommodates paper grades, pattern loss and correction without asserting an average.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 3
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual attributed site electricity (`layout_cut_electricity`)

Actual provider, voltage, mix/geography, period and meter boundary; shared meters identify all consumers and the remaining eligible activity shares not covered by direct assignment. Positive complete residual weights are required only when a positive residual needs allocation; known zero residual leaves direct assignment alone, and unknown/negative residual remains a gap. Include attributable paid standby where it uses energy.

- Selected flow: Actual attributed site electricity
- Flow property / unit: Energy / kWh
- Amount rule: Direct metered node electricity plus exclusive attributed shared electricity / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_layout_cut_utilities`
- Range: Provisional independent screening interval; Node-specific broad screen; hand methods may use no incremental electricity, powered/conditioned work may use more.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Cut unpasted wallpaper strips (`cut_strips`)

Strip IDs, dimensions, orientation and matching sequence; transfer to paste_book paired with paste_feed; unused intact material is separate.

- Selected flow: Cut unpasted wallpaper strips
- Flow property / unit: Mass / kg
- Amount rule: Actual cut-strip handoff mass / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_layout_cut`
- Sources: `roman-room-layout`
- Range: Provisional independent screening interval; Distinct cut-state mass screen allows rejected cut pieces to exit separately.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 3
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dry wallpaper cutting offcuts (`paper_offcuts`)

Separate actual paper/coating composition and waste custodian; a retained recuttable piece is WIP or usable stock rather than discard.

- Selected flow: Dry wallpaper cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Actual discarded dry offcut mass / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_layout_cut`
- Sources: `roman-paper-preparation`
- Range: Provisional independent screening interval; Pattern-dependent cuts can dominate a small job; dry offcuts are separate from pasted trim.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Paste paper and book (`paste_book`)

#### Inputs

##### Product flows

###### Cut unpasted wallpaper strips (`paste_feed`)

Same transfer ID, paper construction and time-specific moisture state as cut_strips; transport/custody discrepancy requires explanation.

- Selected flow: Cut unpasted wallpaper strips
- Flow property / unit: Mass / kg
- Amount rule: Actual received cut-strip mass / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paste_book`
- Sources: `roman-paper-preparation`
- Range: Provisional independent screening interval; Incoming cut-state mass screen independently checks the receiving handoff.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 3
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Compatible ready-mixed aqueous wallcovering adhesive (`adhesive`)

Actual formulation/product, wet mass, water fraction, compatibility and batch; no assumed generic starch chemistry, dilution, solids fraction or recommended brand.

- Selected flow: Compatible ready-mixed aqueous wallcovering adhesive
- Flow property / unit: Mass / kg
- Amount rule: Gross formulated adhesive draw / A; constituent water separately tracked.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paste_book`
- Sources: `roman-paper-preparation`
- Range: Provisional independent screening interval; Broad wet-adhesive screen allows actual film, stock issue and corrections.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 3
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual attributed site electricity (`paste_book_electricity`)

Actual provider, voltage, mix/geography, period and meter boundary; shared meters identify all consumers and the remaining eligible activity shares not covered by direct assignment. Positive complete residual weights are required only when a positive residual needs allocation; known zero residual leaves direct assignment alone, and unknown/negative residual remains a gap. Include attributable paid standby where it uses energy.

- Selected flow: Actual attributed site electricity
- Flow property / unit: Energy / kWh
- Amount rule: Direct metered node electricity plus exclusive attributed shared electricity / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paste_book_utilities`
- Range: Provisional independent screening interval; Node-specific broad screen; hand methods may use no incremental electricity, powered/conditioned work may use more.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Unused actual ready-mixed adhesive (`unused_adhesive_return`)

Own-node custody exit, same formulated wet kg basis as adhesive input; unopened or demonstrably usable unprocessed adhesive, not paste residue or retained closing stock.

- Selected flow: Unused actual ready-mixed adhesive
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive usable adhesive return or unused external transfer / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paste_book`
- Range: Provisional independent screening interval; Return of an oversized container can exceed the applied adhesive quantity.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Discarded aqueous adhesive residue (`paste_residue`)

Separate usable return and closing stock; identify contained water and solids, destination and any separately counted container tare.

- Selected flow: Discarded aqueous adhesive residue
- Flow property / unit: Mass / kg
- Amount rule: Actual discarded wet formulated residue mass / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paste_book`
- Range: Provisional independent screening interval; Residue may be zero or significant on a small installation.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded adhesive containers (`paste_packaging`)

Record packaging material and tare; adhered adhesive contents counted here or in paste_residue, exclusively, with corresponding constituent water assignment.

- Selected flow: Discarded adhesive containers
- Flow property / unit: Mass / kg
- Amount rule: Actual container and included residual discard mass / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paste_book`
- Range: Provisional independent screening interval; Container tare and size vary; no generic package factor.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water vapour H2O released during pasting and booking (`paste_book_vapour`)

Release to air, unspecified, during this node only. Formulation/paper moisture inputs, next-node water, usable exits, waste, closing stock/WIP and transfers are separate exclusive pools; incomplete fates remain a gap.

- Selected flow: Water vapour H2O released during pasting and booking `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding mode: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Actual own-node evaporated H2O / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paste_book`
- Sources: `roman-paper-preparation`
- Range: Provisional independent screening interval; Booking is a short wet operation but actual water loss is not assumed zero.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Hang, match, smooth, trim and wet-clean (`hang_trim`)

#### Inputs

##### Product flows

###### Actual fresh cleanup water (`wash_water`)

Actual water grade and provider for wet wiping/tool cleanup; no automatic tap-water identity, dilution water or assumed consumption. Usable unused external exits require their own material-resolved usable output under unused_hanging_consumable_return.

- Selected flow: Actual fresh cleanup water
- Flow property / unit: Mass / kg
- Amount rule: Actual metered/weighed supplied water / A; reconcile opening, receipts and intact closing pools where stored.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim`
- Sources: `roman-first-strip`
- Range: Provisional independent screening interval; Broad cleanup-water screen covers sponge rinses and small-job variability.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual attributed site electricity (`hang_trim_electricity`)

Actual provider, voltage, mix/geography, period and meter boundary; shared meters identify all consumers and the remaining eligible activity shares not covered by direct assignment. Positive complete residual weights are required only when a positive residual needs allocation; known zero residual leaves direct assignment alone, and unknown/negative residual remains a gap. Include attributable paid standby where it uses energy.

- Selected flow: Actual attributed site electricity
- Flow property / unit: Energy / kWh
- Amount rule: Direct metered node electricity plus exclusive attributed shared electricity / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim_utilities`
- Range: Provisional independent screening interval; Node-specific broad screen; hand methods may use no incremental electricity, powered/conditioned work may use more.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Hung wallpaper awaiting dry acceptance (`wet_wallcovering`)

Actual wall/patch/strip IDs and hydrated dimensions, wet paper/adhesive/water condition; this is an intermediate, may include later failed patches and is not final accepted A.

- Selected flow: Hung wallpaper awaiting dry acceptance
- Flow property / unit: Area / m2
- Amount rule: Actual surface handed to drying / A; carry separate constituent masses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim`
- Sources: `roman-first-strip`
- Range: Provisional independent screening interval; Wet geometry and repeated handoff events may differ from accepted dry surface.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 5
  - Unit: m2
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wet pasted wallpaper trims and discarded failed strips (`wet_trim`)

Actual paper/adhesive/water composition and custodian; exclude layout dry offcuts and retained rework material; every replacement event remains in the lot.

- Selected flow: Wet pasted wallpaper trims and discarded failed strips
- Flow property / unit: Mass / kg
- Amount rule: Actual discarded wet composite mass / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim`
- Sources: `roman-first-strip`
- Range: Provisional independent screening interval; Wet composite includes adhesive and moisture rather than dry paper alone.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected adhesive-contaminated cleanup wastewater (`wash_wastewater`)

Transfer to named wastewater custodian; total liquid mass is not direct environmental release or pure water. Actual discharge must be separately substance/medium-resolved before any elementary exchange.

- Selected flow: Collected adhesive-contaminated cleanup wastewater
- Flow property / unit: Mass / kg
- Amount rule: Actual collected wastewater mass / A; water fraction separately recorded.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim`
- Range: Provisional independent screening interval; Collected liquid may be absent or dominate wet-cleanup output.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water vapour H2O released during hanging and cleanup (`hang_trim_vapour`)

Release to air, unspecified, after booked-strip receipt and before dry_accept handoff; includes evidenced fresh-water evaporation only once, with all retained/outgoing water fates quantified.

- Selected flow: Water vapour H2O released during hanging and cleanup `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding mode: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Actual own-node evaporated H2O / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hang_trim`
- Sources: `roman-first-strip`
- Range: Provisional independent screening interval; Exposure and cleanup can lose water before the drying node; no zero default.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Dry, inspect and accept (`dry_accept`)

#### Inputs

##### Product flows

###### Hung wallpaper awaiting dry acceptance (`dry_feed`)

Paired with wet_wallcovering by patch, event and gate; received moisture is after paste_book and hang_trim losses.

- Selected flow: Hung wallpaper awaiting dry acceptance
- Flow property / unit: Area / m2
- Amount rule: Actual received hung surface / A; carry its actual incoming constituent water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Range: Provisional independent screening interval; Wet receiving geometry is retained independently of final acceptance.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 5
  - Unit: m2
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual attributed site electricity (`dry_accept_electricity`)

Actual provider, voltage, mix/geography, period and meter boundary; shared meters identify all consumers and the remaining eligible activity shares not covered by direct assignment. Positive complete residual weights are required only when a positive residual needs allocation; known zero residual leaves direct assignment alone, and unknown/negative residual remains a gap. Include attributable paid standby where it uses energy.

- Selected flow: Actual attributed site electricity
- Flow property / unit: Energy / kWh
- Amount rule: Direct metered node electricity plus exclusive attributed shared electricity / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept_utilities`
- Range: Provisional independent screening interval; Node-specific broad screen; hand methods may use no incremental electricity, powered/conditioned work may use more.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Paste-the-paper interior wallpaper installation services (`reference_service`)

Final adhered, actually dry and visually accepted net wall area; customer handover after corrections; one final reference output and no fixed lifetime.

- Selected flow: Paste-the-paper interior wallpaper installation services
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Range: Provisional independent screening interval; Normalization identity only: actual accepted A divided by the same positive A.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Water vapour H2O released during final drying (`dry_vapour`)

Release to air, unspecified, only after dry_feed receipt; subtract actual accepted residual moisture, outgoing/removed composite water and closing unaccepted wet WIP as exclusive fates; no assumed fully dry zero-moisture product.

- Selected flow: Water vapour H2O released during final drying `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding mode: Fixed (`fixed`)
- Flow property / unit: Mass / kg
- Amount rule: Actual own-node evaporated H2O / A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_accept`
- Range: Provisional independent screening interval; Drying evaporation depends on actual incoming moisture and accepted residual water.
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 m2 final accepted service; provisional author reasoning, not measured limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | node activities | Prefer measured separate responsibilities and exclusive events. Record purchased service portions once at their actual boundary; do not count both the supplier's service and its expanded material/utilities inventory. | |
| allocation_service_lot | accepted installation lot | Assign this lot's actual layout, booking, hanging, drying, failed attempts, corrections, handling and waste burdens to its finally accepted A. Neither discarded paper nor a usable unused return receives installation or correction burdens as a credit. | |
| allocation_unused | usable unprocessed boundary exits | Keep gross physical inputs and positive usable outputs unchanged. Transfer only the original unused material's corresponding upstream burden with a demonstrably usable unprocessed exit. Net-consumed material is a diagnostic, not an additional physical exchange, negative credit or avoided-production claim. Processed rejects do not qualify as unused original material. | |
| allocation_shared | shared electricity, assets and services | For electricity, subtract all independently assigned direct-consumer quantities from the source total first. Allocate a positive residual only among remaining eligible actual activity shares not already covered by direct assignment, using their evidenced positive weights and positive complete denominator. Fully directly assigned activity shares do not receive the residual again. If the known residual is zero, retain direct_node_kWh alone without inventing a shared denominator; unknown or negative residual is a data gap. For charged services, allocate the complete actual charged availability total, including paid idle/reserved availability, over all evidenced consuming shares using positive complete weights. Reconcile every source total including consumers outside this lot. | |
| allocation_periods | work, waiting, correction and acceptance periods | Link each unique event and opening/closing state to actual periods and the service lot. Carry WIP state and already incurred burdens across a reporting cutoff without repeating them as new purchases/events. Combine the relevant period burdens for the final accepted lot; no universal annualization or lifetime factor. | |
| allocation_rework | loops, rejects and terminated lots | Retain every real correction event once and remove only duplicate records. A failed patch becomes accepted area only at its final accepted state. A terminated lot with no accepted area cannot be divided by zero or merged invisibly into an unrelated successful lot: disclose its separate failed-service inventory and attribution decision. | |
| allocation_waste | captured waste and treatment | Report actual custodian transfers by material and moisture state. Any treatment dataset responsibility and recovery claim need an explicit boundary; collection itself does not prove recycling or an avoided burden. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Produce one traceable job/lot ledger spanning all relevant periods. A measurement includes event_id, node_id, job_lot_id, period_id, timestamp, material/strip/patch identity, method, unit, measurement uncertainty and responsible record owner. Corrected records retain their predecessor and reason. Deduplicate copies by physical event identity, never by equal amount, equal patch ID or repeated work description.

At every water-containing node distinguish initial/formulation water, incoming handoff water and fresh water without overlap. Each outgoing water pool is classified exactly once as next-node handoff, usable external exit, wastewater/liquid transfer, water contained in solid discard, unissued intact closing stock, closing unaccepted WIP, accepted residual moisture or actual evaporation. Pool membership depends on both state and time. Opening WIP carries its actual water and predecessor period; closing WIP is not an accepted product or vapour. Water absorbed by paper remains in that paper's measured water pool. Outgoing water at one gate is the next gate's incoming water after documented intervening events, so prior-node loss cannot be repeated downstream.

A fully reconciled residual can quantify evaporation only when all other physically relevant water entries and exits are observed or independently evidenced, the actual air release mechanism fits, pool exclusivity is verified and uncertainty is reported. Direct evaporation measurement may instead establish the node amount. If only some fates are known, report the missing fate and balance uncertainty; neither the unaccounted difference nor a negative residual becomes vapour. Separately documented added/dilution or rinse water at paste_book, or extra cleanup at dry_accept, requires actual own-node entry and exit exchanges and semantic review rather than reassignment to hang_trim.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_layout_cut | layout_cut | received wall, paper issue, strips, dry waste and usable exits | surveyed interface and material event ledger | event_id; job_lot_id; period_id; wall_id; wall_dimensions_m; openings_m2; received_area_m2; primer_identity; wall_condition; wall_acceptance; paper_grade; roll_id; pattern_match; pattern_repeat_m; paper_opening_kg; paper_receipts_kg; paper_closing_intact_kg; paper_unused_return_kg; paper_unused_external_transfer_kg; strip_id; transfer_id; strip_dimensions_m; strip_mass_kg; paper_moisture_fraction; offcut_mass_kg; packaging_tare_kg; waste_custodian; rework_origin; rework_destination; closing_wip_id; closing_wip_mass_kg; A_m2; material_id; opening_intact_unissued_kg; receipts_kg; closing_intact_unissued_kg; unused_return_kg; unused_external_transfer_kg; actual_wet_mass_kg; tare_kg; evidenced_water_fraction; waste_material; custodian; gate_mass_kg; gate_area_m2; gate_water_kg; moisture_fraction; opening_wip_id; outgoing_rework_water_kg | Survey actual wall and openings; retain received primed/dry interface acceptance. Identify rolls and cut strips; weigh actual material and intact stock on calibrated scales or use traceable same-grade mass records. Keep supplied paper mass exclusive of packaging tare. Log real cuts, corrections, offcut discards and usable custody exits separately. Match strip transfers and WIP across periods. Reconcile gross_draw, paired_transfer and waste_totals before dividing each own-node numerator by the same final A.  Generic stock keys are the per-material paper ledger fields: paper_opening_kg, paper_receipts_kg and paper_closing_intact_kg; generic unused-exit keys map to the corresponding paper return/transfer fields.  Generic gate mass/area/water keys are this node's time-specific strip or patch handoff observations; generic waste keys are individual material-resolved transfers, not additional quantities. Opening/closing WIP IDs and outgoing_rework_water_kg identify separately owned actual loop states. | kg; m; m2 | every receipt, issue, cut, transfer, return, discard and period cutoff | received-wall gate through last layout/cut correction for this lot | actual installation job and layout responsibility | per 1 m2 reference flow | survey sheets; actual hanging instructions; roll/strip IDs; scale calibration; stock ledger; wall acceptance; transfer/return/waste receipts |
| cp_paste_book | paste_book | incoming paper, adhesive, wet booked handoff, usable exits, residue and own-node water | time-specific paste/booking and water ledger | event_id; job_lot_id; period_id; strip_id; transfer_id; incoming_strip_kg; incoming_strip_water_kg; incoming_strip_dimensions_m; adhesive_identity; adhesive_batch; adhesive_opening_kg; adhesive_receipts_kg; adhesive_closing_intact_kg; adhesive_unused_return_kg; adhesive_unused_external_transfer_kg; adhesive_water_fraction; formulation_water_draw_kg; fresh_water_kg; opening_wip_water_kg; booked_strip_kg; booked_strip_water_kg; booked_strip_dimensions_m; booking_start; booking_end; instruction_id; residue_wet_kg; residue_water_kg; container_tare_kg; container_residue_water_kg; usable_exit_water_kg; liquid_exit_water_kg; closing_intact_water_kg; closing_wip_water_kg; directly_measured_evaporation_kg; evaporation_method; fate_coverage; water_uncertainty_kg; waste_custodian; rework_link; A_m2; material_id; opening_intact_unissued_kg; receipts_kg; closing_intact_unissued_kg; unused_return_kg; unused_external_transfer_kg; actual_wet_mass_kg; tare_kg; evidenced_water_fraction; waste_material; custodian; gate_mass_kg; gate_area_m2; gate_water_kg; moisture_fraction; opening_wip_id; closing_wip_id; outgoing_rework_water_kg; species_identity; release_state_basis; receiving_compartment; release_kg; release_method; release_occurrence_evidence | Receive identified cut strips at measured moisture state; weigh actual formulated adhesive issue and exclusive stock/returns. Retain product-specific compatibility and actual booking instruction and observed times. Measure wet booked strips and moisture using traceable wet/dry specimens or validated formulation/constituent evidence without assuming all mass gain is adhesive. Assign water in every residue, container, usable exit and WIP to one fate. Use paste_water_balance only with full fate coverage or independently measured evaporation. Preserve actual repeated pasting/bookings and match outgoing transfers. Divide physical own-node totals once by final A.  Generic stock and unused-exit keys map to this material ledger adhesive_* fields. formulation_water_draw_kg is gross formulated adhesive draw times its evidenced adhesive_water_fraction, with different batch fractions calculated separately; do not treat it as additional water input. Container and residue water are counted exclusively.  Generic gate mass/area/water keys are this node's time-specific strip or patch handoff observations; generic waste keys are individual material-resolved transfers, not additional quantities. Opening/closing WIP IDs and outgoing_rework_water_kg identify separately owned actual loop states.  For actual non-H2O direct releases at this node, retain occurrence evidence, exact species and physical-state basis, receiving compartment, released mass, method and uncertainty. Apply direct_release_total using this own-node protocol only. Unknown occurrence, species, medium or mass remains a gap; a documented absence requires evidence and is not inferred from another node. Captured solid and liquid transfers are not counted again as direct releases. | kg; m; h; m2 | every paste/booking event, wet handoff, usable exit, discard and cutoff | receipt of cut strips through each actual booked-strip handoff or boundary exit | actual paste/booking responsibility | per 1 m2 reference flow | product/compatibility instructions; formulation water evidence; scales and moisture-method calibration; strip transfer record; booking timestamps; stock/return/discard records; uncertainty and fate coverage |
| cp_hang_trim | hang_trim | wet feed, cleanup supplies, hung handoff, usable exits, wet waste, liquid and own-node water | hanging/cleanup and constituent ledger | event_id; job_lot_id; period_id; patch_id; strip_id; transfer_id; incoming_booked_kg; incoming_booked_water_kg; incoming_dimensions_m; wash_water_provider; wash_water_opening_kg; wash_water_receipts_kg; wash_water_closing_intact_kg; wash_water_unused_exit_kg; fresh_water_kg; consumable_material; consumable_opening_kg; consumable_receipts_kg; consumable_closing_intact_kg; consumable_unused_return_kg; consumable_unused_external_transfer_kg; consumable_water_draw_kg; hung_area_m2; hung_paper_dry_kg; hung_adhesive_solids_kg; hung_water_kg; wet_trim_kg; wet_trim_water_kg; wastewater_kg; wastewater_water_fraction; spent_wipes_kg; spent_wipes_water_kg; usable_exit_water_kg; opening_wip_water_kg; closing_intact_water_kg; closing_wip_water_kg; directly_measured_evaporation_kg; evaporation_method; fate_coverage; water_uncertainty_kg; waste_custodian; rework_link; A_m2; material_id; opening_intact_unissued_kg; receipts_kg; closing_intact_unissued_kg; unused_return_kg; unused_external_transfer_kg; actual_wet_mass_kg; tare_kg; evidenced_water_fraction; waste_material; custodian; gate_mass_kg; gate_area_m2; gate_water_kg; moisture_fraction; opening_wip_id; closing_wip_id; outgoing_rework_water_kg; species_identity; release_state_basis; receiving_compartment; release_kg; release_method; release_occurrence_evidence | Reconcile incoming booked strip identity, mass and actual moisture with paste_book. Measure actual plumb/match/trim work and hung patch geometry; observe rather than infer hydrated dimensions. Measure cleanup water supply and material-specific gross consumable draw. Weigh wet trims, collected liquid and spent wipes with their actual water constituents and exclusive container/collection boundaries. Retain positive usable exits separately, including unused water only where physically returned/transferred. Record the actual hung-state water passed to dry_accept after this node's losses. Use hang_water_balance only when its fates are complete or evaporation is independently measured; aggregate unique real events and divide each own-node total once by A.  Generic stock and unused-exit keys map to material-specific consumable_* fields, or wash_water_* for the water ledger. consumable_water_draw_kg is measured constituent water in actually issued cleanup materials, not fresh rinse water. wastewater_water_kg is wastewater_kg times its evidenced wastewater_water_fraction.  Generic gate mass/area/water keys are this node's time-specific strip or patch handoff observations; generic waste keys are individual material-resolved transfers, not additional quantities. Opening/closing WIP IDs and outgoing_rework_water_kg identify separately owned actual loop states.  For actual non-H2O direct releases at this node, retain occurrence evidence, exact species and physical-state basis, receiving compartment, released mass, method and uncertainty. Apply direct_release_total using this own-node protocol only. Unknown occurrence, species, medium or mass remains a gap; a documented absence requires evidence and is not inferred from another node. Captured solid and liquid transfers are not counted again as direct releases. | kg; m; m2 | every hanging, correction, trim, rinse, collection, exit and handoff event | booked-strip receipt through hung-surface handoff, including actual cleanup/corrections | actual hanging and cleanup responsibility | per 1 m2 reference flow | wet handoff records; dimensions; scale/meter/moisture calibration; material identities; wastewater/waste custody; positive unused exits; fate coverage and uncertainty |
| cp_dry_accept | dry_accept | wet-state receipt, dryness/visual inspection, reject, accepted surface and releases | patch acceptance and final-node water ledger | event_id; job_lot_id; period_id; wall_id; patch_id; transfer_id; incoming_hung_area_m2; incoming_surface_water_kg; opening_wip_water_kg; added_water_kg; dry_start; inspection_time; dryness_instruction_id; dryness_method; observed_dryness; visual_result; accepted_patch_area_m2; accepted_residual_water_kg; rejected_patch_area_m2; reject_composite_kg; reject_water_kg; other_liquid_exit_water_kg; usable_exit_water_kg; closing_wip_water_kg; outgoing_rework_water_kg; directly_measured_evaporation_kg; evaporation_method; fate_coverage; water_uncertainty_kg; species_identity; receiving_compartment; release_kg; release_method; rework_link; termination_status; A_m2; material_id; opening_intact_unissued_kg; receipts_kg; closing_intact_unissued_kg; unused_return_kg; unused_external_transfer_kg; actual_wet_mass_kg; tare_kg; evidenced_water_fraction; waste_material; custodian; gate_mass_kg; gate_area_m2; gate_water_kg; moisture_fraction; opening_wip_id; closing_wip_id; release_state_basis; release_occurrence_evidence | Receive actual hung patch state after prior losses. Check dryness using the actual applicable instructions and documented method; record visual acceptance and customer handover. Survey the unique final accepted patch area, excluding openings/rejects and repeated coverings. Retain actual residual moisture at the accepted criterion rather than setting it to zero. Weigh removed rejects with their water; record closing unaccepted WIP and outgoing rework water separately. Use dry_water_balance only with complete fates or independently measured evaporation. Quantify other direct releases only from actual substance and compartment evidence. Deduplicate record copies, retain every actual correction, form accepted_area_total and divide own-node totals by A.  Generic gate mass/area/water keys are this node's time-specific strip or patch handoff observations; generic waste keys are individual material-resolved transfers, not additional quantities. Opening/closing WIP IDs and outgoing_rework_water_kg identify separately owned actual loop states. | kg; m2; h | each drying/inspection/correction event, acceptance and period cutoff | wet-state receipt through final lot acceptance or documented termination | actual drying and final acceptance responsibility | per 1 m2 reference flow | actual instructions; acceptance sheets; survey; measured dryness/moisture and calibration; reject/rework custody; species/medium evidence; fate completeness and uncertainty |
| cp_layout_cut_utilities | layout_cut | actual electricity and conditional charged services | exclusive source-period attribution ledger | event_id; job_lot_id; period_id; node_id; source_id; meter_id; meter_start_kWh; meter_end_kWh; direct_node_kWh; shared_source_kWh; utility_provider; voltage; mix_geography; source_period_start; source_period_end; consumer_id; consumer_node; consumer_period; positive_weight; all_consumer_weight_sum; service_provider; asset_id; contract_id; charge_unit; contract_start; contract_end; charged_hours; active_hours; paid_idle_hours; service_component_boundary; already_included_energy; A_m2; source_total_kWh; direct_consumer_kWh; positive_weight_node; source_period | For this node identify direct meters and complete source periods. Enumerate all source consumers including other lots/nodes and attributable standby/reserved availability. Subtract all directly assigned electricity first, then weight only remaining eligible actual activity shares not covered by direct assignment; require positive complete residual weights only when the known residual is positive. A known zero residual leaves direct_node_kWh alone without an invented shared denominator; unknown or negative residual is a gap. For charged services, retain positive complete weights over all consuming shares for the full charged availability total. For each service use actual charged contract availability including paid idle, with evidenced conversion to hours if necessary. Document whether electricity/asset burdens are inside the service. Apply node_electricity and node_service_hours once to the exclusive source quantity, reconcile all consumers to the source total, then divide this node share by final A. An uncharged/nonconsumed service may be documented absent; missing records are a gap.  source_total_kWh is actual meter_end_kWh minus meter_start_kWh with boundary adjustments evidenced; direct_consumer_kWh is the complete separately assigned direct-consumer total. For electricity positive_weight_node is this node's remaining eligible activity weight and all_consumer_weight_sum is the complete sum for eligible residual activity shares only; fully direct-assigned shares are excluded. For services these keys represent all consuming shares of the complete charged service. source_period is the actual source-period start/end pair. | kWh; h | each meter/source/contract period and actual allocation revision | all work, waiting, drying and correction periods attributable to this lot at this node | actual layout_cut consumer and every source-period co-consumer | per 1 m2 reference flow | meter/invoice; provider/voltage evidence; complete consumer and weight ledger; signed contract/calendar; actual charge-unit conversion; service component reconciliation |
| cp_paste_book_utilities | paste_book | actual electricity and conditional charged services | exclusive source-period attribution ledger | event_id; job_lot_id; period_id; node_id; source_id; meter_id; meter_start_kWh; meter_end_kWh; direct_node_kWh; shared_source_kWh; utility_provider; voltage; mix_geography; source_period_start; source_period_end; consumer_id; consumer_node; consumer_period; positive_weight; all_consumer_weight_sum; service_provider; asset_id; contract_id; charge_unit; contract_start; contract_end; charged_hours; active_hours; paid_idle_hours; service_component_boundary; already_included_energy; A_m2; source_total_kWh; direct_consumer_kWh; positive_weight_node; source_period | For this node identify direct meters and complete source periods. Enumerate all source consumers including other lots/nodes and attributable standby/reserved availability. Subtract all directly assigned electricity first, then weight only remaining eligible actual activity shares not covered by direct assignment; require positive complete residual weights only when the known residual is positive. A known zero residual leaves direct_node_kWh alone without an invented shared denominator; unknown or negative residual is a gap. For charged services, retain positive complete weights over all consuming shares for the full charged availability total. For each service use actual charged contract availability including paid idle, with evidenced conversion to hours if necessary. Document whether electricity/asset burdens are inside the service. Apply node_electricity and node_service_hours once to the exclusive source quantity, reconcile all consumers to the source total, then divide this node share by final A. An uncharged/nonconsumed service may be documented absent; missing records are a gap.  source_total_kWh is actual meter_end_kWh minus meter_start_kWh with boundary adjustments evidenced; direct_consumer_kWh is the complete separately assigned direct-consumer total. For electricity positive_weight_node is this node's remaining eligible activity weight and all_consumer_weight_sum is the complete sum for eligible residual activity shares only; fully direct-assigned shares are excluded. For services these keys represent all consuming shares of the complete charged service. source_period is the actual source-period start/end pair. | kWh; h | each meter/source/contract period and actual allocation revision | all work, waiting, drying and correction periods attributable to this lot at this node | actual paste_book consumer and every source-period co-consumer | per 1 m2 reference flow | meter/invoice; provider/voltage evidence; complete consumer and weight ledger; signed contract/calendar; actual charge-unit conversion; service component reconciliation |
| cp_hang_trim_utilities | hang_trim | actual electricity and conditional charged services | exclusive source-period attribution ledger | event_id; job_lot_id; period_id; node_id; source_id; meter_id; meter_start_kWh; meter_end_kWh; direct_node_kWh; shared_source_kWh; utility_provider; voltage; mix_geography; source_period_start; source_period_end; consumer_id; consumer_node; consumer_period; positive_weight; all_consumer_weight_sum; service_provider; asset_id; contract_id; charge_unit; contract_start; contract_end; charged_hours; active_hours; paid_idle_hours; service_component_boundary; already_included_energy; A_m2; source_total_kWh; direct_consumer_kWh; positive_weight_node; source_period | For this node identify direct meters and complete source periods. Enumerate all source consumers including other lots/nodes and attributable standby/reserved availability. Subtract all directly assigned electricity first, then weight only remaining eligible actual activity shares not covered by direct assignment; require positive complete residual weights only when the known residual is positive. A known zero residual leaves direct_node_kWh alone without an invented shared denominator; unknown or negative residual is a gap. For charged services, retain positive complete weights over all consuming shares for the full charged availability total. For each service use actual charged contract availability including paid idle, with evidenced conversion to hours if necessary. Document whether electricity/asset burdens are inside the service. Apply node_electricity and node_service_hours once to the exclusive source quantity, reconcile all consumers to the source total, then divide this node share by final A. An uncharged/nonconsumed service may be documented absent; missing records are a gap.  source_total_kWh is actual meter_end_kWh minus meter_start_kWh with boundary adjustments evidenced; direct_consumer_kWh is the complete separately assigned direct-consumer total. For electricity positive_weight_node is this node's remaining eligible activity weight and all_consumer_weight_sum is the complete sum for eligible residual activity shares only; fully direct-assigned shares are excluded. For services these keys represent all consuming shares of the complete charged service. source_period is the actual source-period start/end pair. | kWh; h | each meter/source/contract period and actual allocation revision | all work, waiting, drying and correction periods attributable to this lot at this node | actual hang_trim consumer and every source-period co-consumer | per 1 m2 reference flow | meter/invoice; provider/voltage evidence; complete consumer and weight ledger; signed contract/calendar; actual charge-unit conversion; service component reconciliation |
| cp_dry_accept_utilities | dry_accept | actual electricity and conditional charged services | exclusive source-period attribution ledger | event_id; job_lot_id; period_id; node_id; source_id; meter_id; meter_start_kWh; meter_end_kWh; direct_node_kWh; shared_source_kWh; utility_provider; voltage; mix_geography; source_period_start; source_period_end; consumer_id; consumer_node; consumer_period; positive_weight; all_consumer_weight_sum; service_provider; asset_id; contract_id; charge_unit; contract_start; contract_end; charged_hours; active_hours; paid_idle_hours; service_component_boundary; already_included_energy; A_m2; source_total_kWh; direct_consumer_kWh; positive_weight_node; source_period | For this node identify direct meters and complete source periods. Enumerate all source consumers including other lots/nodes and attributable standby/reserved availability. Subtract all directly assigned electricity first, then weight only remaining eligible actual activity shares not covered by direct assignment; require positive complete residual weights only when the known residual is positive. A known zero residual leaves direct_node_kWh alone without an invented shared denominator; unknown or negative residual is a gap. For charged services, retain positive complete weights over all consuming shares for the full charged availability total. For each service use actual charged contract availability including paid idle, with evidenced conversion to hours if necessary. Document whether electricity/asset burdens are inside the service. Apply node_electricity and node_service_hours once to the exclusive source quantity, reconcile all consumers to the source total, then divide this node share by final A. An uncharged/nonconsumed service may be documented absent; missing records are a gap.  source_total_kWh is actual meter_end_kWh minus meter_start_kWh with boundary adjustments evidenced; direct_consumer_kWh is the complete separately assigned direct-consumer total. For electricity positive_weight_node is this node's remaining eligible activity weight and all_consumer_weight_sum is the complete sum for eligible residual activity shares only; fully direct-assigned shares are excluded. For services these keys represent all consuming shares of the complete charged service. source_period is the actual source-period start/end pair. | kWh; h | each meter/source/contract period and actual allocation revision | all work, waiting, drying and correction periods attributable to this lot at this node | actual dry_accept consumer and every source-period co-consumer | per 1 m2 reference flow | meter/invoice; provider/voltage evidence; complete consumer and weight ledger; signed contract/calendar; actual charge-unit conversion; service component reconciliation |

### Calculation Rules

The formulas are collection transformations, not empirical factors. All event sums retain genuine repeated work and deduplicate only copies. Node subscripts denote the owning process; material and transfer IDs remain explicit. A is the same positive accepted_area_total at every node. Water terms are constituent kg H2O, not gross composite kg. A negative physical draw, weight denominator, water pool or unexplained residual is a finding rather than a silently clipped zero.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_area_total | reference_service | A = sum(unique finally accepted net patch areas); service_ref = A / A = 1 m2. Use actual measured dimensions/openings and hydrated-to-accepted state; exclude repeated coverings and unaccepted patches. Require A > 0. | accepted_patch_area_m2; wall_dimensions_m; openings_m2; patch_id; visual_result; observed_dryness; cp_dry_accept | A; service_ref | |
| gross_draw | paper_rolls; adhesive; wash_consumables | gross_draw_kg = opening_intact_unissued_kg + receipts_kg - closing_intact_unissued_kg; input_ref = gross_draw_kg / A. Include usable unused return and external transfer in physical draw because they leave node custody. Do not subtract them here. Opening/closing processed WIP is a separate state and not intact unissued stock. | material_id; opening_intact_unissued_kg; receipts_kg; closing_intact_unissued_kg; A; cp_layout_cut; cp_paste_book; cp_hang_trim | gross_draw_kg; input_ref | |
| unused_exit_total | unused_paper_return; unused_adhesive_return; unused_hanging_consumable_return | unused_exit_kg = sum(unique actual usable return events + unique unused external-transfer events), by original material and node; output_ref = unused_exit_kg / A. Net_consumed_diagnostic_kg = gross_draw_kg - unused_exit_kg; do not generate a second exchange from this diagnostic or subtract it again. | event_id; material_id; unused_return_kg; unused_external_transfer_kg; gross_draw_kg; A; cp_layout_cut; cp_paste_book; cp_hang_trim | unused_exit_kg; output_ref; net_consumed_diagnostic_kg | |
| paired_transfer | cut_strips; paste_feed; booked_strips; hang_feed; wet_wallcovering; dry_feed | transfer_ref = actual own-gate mass_kg or area_m2 / A, preserving that card's unit. Pair sending and receiving transfer_id, state, timestamp and constituents; quantify any intervening owned physical event separately. Carry actual outgoing water after prior losses as next incoming water. Never substitute A for the numerator or infer mass from area without a measured grade/moisture bridge. | transfer_id; gate_mass_kg; gate_area_m2; gate_water_kg; strip_dimensions_m; moisture_fraction; A; cp_layout_cut; cp_paste_book; cp_hang_trim; cp_dry_accept | transfer_ref; paired_gate_state | |
| fresh_water_total | wash_water | gross_fresh_water_kg = wash_water_opening_kg + wash_water_receipts_kg - wash_water_closing_intact_kg; fresh_water_ref = gross_fresh_water_kg / A. For a direct supply with no storage, opening and closing are evidenced absent and measured receipt is the physical draw. Keep any actual unused water exit as a separate positive material-specific output. | wash_water_opening_kg; wash_water_receipts_kg; wash_water_closing_intact_kg; wash_water_unused_exit_kg; A; cp_hang_trim | gross_fresh_water_kg; fresh_water_ref | |
| waste_totals | paper_offcuts; paper_packaging; paste_residue; paste_packaging; wet_trim; wash_wastewater; spent_wipes; dry_rejects | waste_ref = sum(unique actual waste transfer masses by material/state/custodian) / A. Separate tare and residual contents, or document included contents once. water_in_waste_kg = actual_wet_mass_kg × evidenced_water_fraction, or independently measured constituent water. Solid-waste water and wastewater water are disjoint. | event_id; waste_material; actual_wet_mass_kg; tare_kg; evidenced_water_fraction; custodian; A; cp_layout_cut; cp_paste_book; cp_hang_trim; cp_dry_accept | waste_ref; water_in_waste_kg | |
| water_constituent_inputs | paste_book_vapour; hang_trim_vapour; dry_vapour | formulation_water_draw_kg = gross formulated adhesive draw_kg × actual batch adhesive_water_fraction, summed by batch; wastewater_water_kg = wastewater_kg × evidenced wastewater_water_fraction. Measure consumable_water_draw_kg as constituent water in actual issued cleanup material. These are constituents of existing physical inputs/outputs, not extra exchanges. Keep container_residue_water_kg exclusive from residue_water_kg. | adhesive_opening_kg; adhesive_receipts_kg; adhesive_closing_intact_kg; adhesive_water_fraction; wastewater_kg; wastewater_water_fraction; consumable_water_draw_kg; residue_water_kg; container_residue_water_kg; cp_paste_book; cp_hang_trim | formulation_water_draw_kg; wastewater_water_kg | |
| paste_water_balance | paste_book_vapour | W_in_paste = incoming_strip_water_kg + formulation_water_draw_kg + fresh_water_kg + opening_wip_water_kg. W_out_paste = booked_strip_water_kg + usable_exit_water_kg + residue_water_kg + container_residue_water_kg + liquid_exit_water_kg + closing_wip_water_kg + outgoing_rework_water_kg. For a gross material draw, unissued closing formulation water is already excluded, so never deduct it again; water in usable returns remains in W_in and W_out. Actual evaporation = independently measured own-node evaporation, or W_in_paste - W_out_paste only with complete mutually exclusive fates and supported air release. evaporation_ref = actual evaporation / A. | incoming_strip_water_kg; formulation_water_draw_kg; fresh_water_kg; opening_wip_water_kg; booked_strip_water_kg; usable_exit_water_kg; residue_water_kg; container_residue_water_kg; liquid_exit_water_kg; closing_wip_water_kg; outgoing_rework_water_kg; fate_coverage; directly_measured_evaporation_kg; water_uncertainty_kg; A; cp_paste_book | actual_paste_evaporation_kg; evaporation_ref; water_balance_gap | |
| hang_water_balance | hang_trim_vapour | W_in_hang = incoming_booked_water_kg + gross_fresh_water_kg + consumable_water_draw_kg + opening_wip_water_kg. W_out_hang = hung_water_kg + usable_exit_water_kg + wet_trim_water_kg + wastewater_water_kg + spent_wipes_water_kg + closing_wip_water_kg + outgoing_rework_water_kg. Actual fresh/formulated draws already exclude intact unissued closing water, which is not deducted again. Actual evaporation = independently measured own-node evaporation, or W_in_hang - W_out_hang only with complete mutually exclusive fates and supported air release. evaporation_ref = actual evaporation / A. | incoming_booked_water_kg; gross_fresh_water_kg; consumable_water_draw_kg; opening_wip_water_kg; hung_water_kg; usable_exit_water_kg; wet_trim_water_kg; wastewater_water_kg; spent_wipes_water_kg; closing_wip_water_kg; outgoing_rework_water_kg; fate_coverage; directly_measured_evaporation_kg; water_uncertainty_kg; A; cp_hang_trim | actual_hang_evaporation_kg; evaporation_ref; water_balance_gap | |
| dry_water_balance | dry_vapour | W_in_dry = incoming_surface_water_kg + opening_wip_water_kg + added_water_kg. W_out_dry = accepted_residual_water_kg + reject_water_kg + other_liquid_exit_water_kg + usable_exit_water_kg + closing_wip_water_kg + outgoing_rework_water_kg. Actual evaporation = independently measured own-node evaporation, or W_in_dry - W_out_dry only with complete mutually exclusive fates and supported air release. evaporation_ref = actual evaporation / A. Accepted residual water is measured at actual dryness acceptance and need not equal zero. | incoming_surface_water_kg; opening_wip_water_kg; added_water_kg; accepted_residual_water_kg; reject_water_kg; other_liquid_exit_water_kg; usable_exit_water_kg; closing_wip_water_kg; outgoing_rework_water_kg; fate_coverage; directly_measured_evaporation_kg; water_uncertainty_kg; A; cp_dry_accept | actual_dry_evaporation_kg; evaporation_ref; water_balance_gap | |
| node_electricity | layout_cut_electricity; paste_book_electricity; hang_trim_electricity; dry_accept_electricity | For each exclusive source period: shared_remainder_kWh = source_total_kWh - independently assigned direct_consumer_kWh. If shared_remainder_kWh > 0, share_node = positive_weight_node / all_consumer_weight_sum using only remaining eligible actual activity shares not already covered by direct assignment; E_node = direct_node_kWh + shared_remainder_kWh × share_node. Fully direct-assigned shares receive no residual again. If the known shared_remainder_kWh = 0, E_node = direct_node_kWh and no shared denominator is required. Unknown or negative residual is a data gap. For a positive residual the complete eligible weights and denominator must be positive and shares reconcile to 1; missing/zero denominator blocks allocation. Sum exclusive source-period E_node and divide by A. | source_total_kWh; direct_consumer_kWh; direct_node_kWh; positive_weight_node; all_consumer_weight_sum; source_period; service_component_boundary; A; cp_layout_cut_utilities; cp_paste_book_utilities; cp_hang_trim_utilities; cp_dry_accept_utilities | E_node; electricity_ref | |
| node_service_hours | layout_cut_shared_service; paste_book_shared_service; hang_trim_shared_service; dry_accept_shared_service | H_source = actual contract charged availability hours including paid idle, from actual contract periods and evidenced charge-unit conversion. H_node = H_source × positive_weight_node / sum(all positive consumer weights). Sum exclusive source periods and divide H_node by A. Include reserved/idle consumers in the evidenced weighting method; no 8-hour working-day multiplier or assumed drying duration. Preserve provider service boundary and avoid duplicated included electricity. | charged_hours; contract_start; contract_end; paid_idle_hours; charge_unit; positive_weight_node; all_consumer_weight_sum; consumer_id; source_period; service_component_boundary; A; cp_layout_cut_utilities; cp_paste_book_utilities; cp_hang_trim_utilities; cp_dry_accept_utilities | H_node; service_ref | |
| direct_release_total | paste_book_other_releases; hang_trim_other_releases; dry_accept_other_releases | release_ref = sum(unique actually evidenced own-node release_kg for each exact non-H2O species, physical-state basis and receiving compartment) / A. Keep occurrence evidence, method and uncertainty; unknown occurrence, species, medium or amount remains a gap and cannot be reconstructed from an unexplained material loss. Use the actual producing node and its own protocol; dry_accept quantities cannot substitute for earlier-node releases. | event_id; species_identity; release_state_basis; receiving_compartment; release_kg; release_method; release_occurrence_evidence; A; cp_paste_book; cp_hang_trim; cp_dry_accept | species_release_ref | |
| period_rollforward | all inventory rows | Closing WIP state of one period = next opening WIP state after separately owned documented intervening events. Sum unique attributable real event burdens across all periods of the same lot, retaining correction events and excluding duplicated record copies. Final normalization uses the lot's accepted A; no second purchase or second evaporation is created by rolling a state forward. | event_id; job_lot_id; period_id; closing_wip_id; opening_wip_id; rework_link; A; cp_layout_cut; cp_paste_book; cp_hang_trim; cp_dry_accept | reconciled_lot_totals; carried_state | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_route | lot boundary | Establish unpasted paper/paste-the-paper construction and compatible ready-mixed aqueous adhesive plus received dry, sound, appropriately primed wall. A broader or incompatible exchange identity cannot widen the category. | actual paper/adhesive instructions; received-wall acceptance |
| dq_area | reference and handoffs | Use surveyed actual patch geometry, opening/overlap rule and final acceptance. Record moisture-dependent paper dimension changes; preserve actual wet-state transfers rather than forcing them to final A. | survey; strip/patch/transfer ledger; moisture and acceptance records |
| dq_material | stock and exits | Reconcile exclusive intact stock, gross draw, processed/WIP, original usable exits and actual waste in kg by material/state. Document packaging tare and wet/dry basis. | calibrated scales; stock, transfer, return and custodian records |
| dq_water | paste_book, hang_trim, dry_accept | State full/partial fate coverage, each exclusive constituent pool, actual gate moisture and uncertainty. No partial balance supports a default vapour quantity or zero loss. | independently traceable moisture/formulation/wastewater evidence and node balance |
| dq_rework | actual events | Retain every physical correction, replacement and discard once; deduplicate only record copies. Failed/terminated states and outgoing correction transfers have explicit destinations and burdens. | event predecessor IDs; correction and termination records |
| dq_shared | utilities/services | Match provider/source period and all consumers; allocate electricity only to eligible residual activity shares after direct assignment, requiring positive complete weights only for a positive residual. Known zero residual keeps direct assignment alone; unknown/negative residual remains a gap. For services reconcile the full charged availability with positive complete consumer weights and paid idle, avoiding service/electricity overlap. | meter; contract; charge conversion; allocation reconciliation |
| dq_period | multi-period lot | Cover every actual work, waiting, drying and correction period through final acceptance; carry state without duplicate purchase, burden or evaporation. | cutoff inventory; period-linked event ledger; final acceptance |
| dq_identity | concrete exchanges | Resolve actual material/provider/substance identity and property/unit before a final exchange. Conditional umbrella cards remain semantic until actual exchanges are specified; substance and medium evidence is required for direct releases. | verified identity details plus foreground qualifier records |
| dq_range | every Range | Keep these broad author intervals provisional. Test empirical replacements against an independent reviewed reference population; do not use the current batch maximum to validate the same batch. Outliers retain their actual quantities and documented explanation. | independent reference sample and review; provisional-range disclosure |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | actual route | Fail scope compatibility for vinyl, self-adhesive, prepasted, paste-the-wall, manufacture or substrate-preparation activities presented as this service. Verify the actual received primed/dry interface. | roman-wall-preparation; roman-paper-preparation |
| validate_reference | accepted service | Require positive A, a unique actual final accepted-area ledger and the reference_service link. A/A = 1 is normalization only; a terminated zero-A lot is separately disclosed. | |
| validate_handoffs | paired gates | Match transfer IDs, state, property/unit, actual quantity, moisture and period on both sides of every handoff. Explain actual loss/correction between gates; never force an internal numerator to 1 m2. | |
| validate_stock | material draw and usable exits | Require gross input opening + receipts - exclusive intact unissued closing stock; separately positive original usable outputs. Reject double subtraction, retained closing stock reported as return, processed reject reported as unused material and service/rework credit. | |
| validate_water | three water nodes | Test own-node inputs and all exclusive retained, liquid, solid, stock/WIP, usable-exit and air fates with uncertainty and transfer continuity. Complete reconciled or independently measured evaporation is required for a numerical vapour exchange. Missing fate is incomplete coverage; negative residual is a finding. | |
| validate_dryness | final acceptance | Use actual applicable dryness and visual criteria and observed result. Booking, trim allowance, primer waiting and final drying durations are product/site records; no universal 3–5 minutes, two inches, 24 hours or service lifetime. Accepted residual moisture is not silently zero. | roman-paper-preparation; roman-first-strip; roman-wall-preparation |
| validate_rework | failed states and corrections | Every rejected state has rework, retained WIP, usable original-material exit or actual discard destination at its producing/custody node. Count each accepted patch once and every real correction event once; discard record duplicates only. | |
| validate_services | shared sources | Require actual provider, period and source reconciliation. For electricity deduct all direct assignments and allocate a known positive residual only to eligible actual activity shares not covered directly, with complete positive weights and denominator. Known zero residual retains only direct quantities without a shared denominator; unknown or negative residual is a gap. For services allocate the full charged availability using all actual consumers and complete positive weights, including paid idle. Reject invented working-day conversion and electricity/component duplication. | |
| validate_periods | lot event coverage | Reconcile opening/closing WIP and burdens across all actual periods. Unresolved termination/replacement ownership blocks finalization; no state rollforward may create duplicate purchase or evaporation. | |
| validate_own_node_releases | paste_book_other_releases; hang_trim_other_releases; dry_accept_other_releases | Require actual occurrence, species/state, receiving compartment, quantity method and own-node protocol before a concrete non-H2O release exchange. Do not infer occurrence or a numerical zero from missing evidence, assign all releases to drying, or count captured waste again as an elementary release. | |
| validate_identity | all exchange identities | Verify concrete identity fits material/formulation/state/provider/medium and the declared property/unit. A water-vapour UUID can be reused only for its exact H2O air identity; it does not prove quantity. Unknown species/medium never becomes generic VOC or mixed dust. | |
| validate_coverage | completed package | Report performed and skipped checks, quantity/identity gaps and uncertainty. Mechanical projection or checker success cannot certify real completeness, identity confirmation or provisional Range plausibility. Material gaps block a completed dataset claim. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground collection package for the declared installation service; process or lifecyclemodel projection only after exchange resolution and quality review |
| downstream_use | secondary_dataset; background_dataset, subject to the disclosed job scope and quality |
| allowed_use | Modelling the specified paste-the-paper installation responsibility from an accepted prepared wall to actual dry acceptance, with compatible material and site context |
| excluded_use | Wallpaper/adhesive/wall manufacture; old-cover removal/major repair/primer application; vinyl or other installation route; use-phase lifetime, maintenance or end of life; a claim that this narrower route represents every 54750 activity |
| required_metadata | job/lot and site/geography; wall/primer received condition; actual paper construction/batches/pattern; adhesive product/formulation; route and provider responsibilities; patch/strip IDs; area rule and A; booking/drying and acceptance evidence; periods, corrections and termination; upstream datasets; transfer, waste and water destinations; utilities/services attribution |
| required_quality_disclosure | measurement method/calibration and uncertainty; full/partial fate coverage; original usable-exit treatment; shared consumers/paid idle; unresolved exchange/support identities and quantities; skipped checks; provisional author Ranges; scope limits and representativeness |
| update_trigger | Changed paper or adhesive, received substrate/interface, installation route or acceptance criterion; revised measured quantity/fate evidence; new utility/provider or service contract; corrected rework/period attribution; stronger independent ranges or resolved identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| roman-room-layout | handbook | ROMAN Products, How to Prep the Room for Wallpaper; https://romandecoratingproducts.com/blogs/how-to/preparing-walls-wallcovering-installation ; accessed 2026-10-12 | Layout, actual pattern matching and strip sequence; not substrate primer preparation or quantitative loss defaults |
| roman-paper-preparation | handbook | ROMAN Products, How to Prep the Paper; https://romandecoratingproducts.com/blogs/how-to/preparing-the-wallpaper ; accessed 2026-10-12 | Cut-strip/paste/booking sequence, checking actual hanging instructions and paper hydration; example trim/booking numbers are not universal defaults or inventory factors |
| roman-first-strip | handbook | ROMAN Products, How to Hang the First Strip; https://romandecoratingproducts.com/blogs/how-to/hang-first-wallpaper-strip ; accessed 2026-10-12 | Hanging, smoothing, trimming and damp cleanup responsibilities; no water-consumption or evaporation factor |
| roman-wall-preparation | handbook | ROMAN Products, How to Prepare Walls for Wallpaper; https://romandecoratingproducts.com/blogs/how-to/prepare-walls-for-wallpaper-installation ; accessed 2026-10-12 | Suitability, primer compatibility and dry upstream wall interface; preparation itself excluded and article waiting times are not defaults |
