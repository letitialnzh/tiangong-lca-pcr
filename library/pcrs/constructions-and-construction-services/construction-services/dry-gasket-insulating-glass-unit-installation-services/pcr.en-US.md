---
pcr_id: pcr.constructions-and-construction-services.construction-services.dry-gasket-insulating-glass-unit-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dry gasket insulating glass unit installation services

## 1. Scope and Applicability

This methodology covers installing factory sealed rectangular insulating glass units into an existing compatible frame that has already been released for glazing. The installer receives the frame interface and finished units, verifies suitability and condition, seats the units on the actual specified support and edge blocks, fits preformed dry gaskets and mechanical retention, and hands over clean, undamaged, inspected glazing with the intended drainage path available. The declared service includes the actual handling, access, correction, consumable use and waste arising between that received condition and the accepted installation gate. Manufacturer guidance supports protection of finished edges, compatible resilient materials, support and drainage as distinct installation responsibilities. [Source: `pilkington-general-glazing-2013`]

The category excludes manufacture of the IGU, new frame installation, frame repair, removal or demolition of previous glazing, wet bedding or site applied wet sealant glazing, structural silicone bonding, fire resistant glazing systems, and field cutting, seaming or grinding of an IGU. A project requiring any of these operations needs a separately declared foreground boundary; it must not be made to fit this category by omitting an operation. Factory edge seals integral to a supplied IGU remain part of that supplied component and do not turn this installation into a structural silicone route.

The qualifying route is determined by the actual system documentation. A polymeric preformed gasket or block may be used only when approved for the actual IGU seals, coatings and frame system. A material example in a general guide is not a bill of materials. No universal glass thickness, pane configuration, edge clearance, block geometry, gasket pressure, drainage-hole count or installed service life is imposed here. In particular, the dimensional table for annealed monolithic glass in ATS-192 is not an IGU specification. The actual approved project details govern acceptance. [Source: `pilkington-general-glazing-2013`]

This width-times-height area method is limited to documented rectangular unit outlines. Confirm rectangular_outline_confirmed before any stock, transfer, discard or accepted-area conversion. Nonrectangular or unknown outlines require a separately reviewed geometry and route method before this PCR can be used; a bounding rectangle is not their unit area.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.dry-gasket-insulating-glass-unit-installation-services |
| classification_refs | cpc:3.0:54710; this semantic service is a bounded part of the glazing-services classification, not the whole classification |
| covered_products | Dry supported and mechanically retained installation of factory sealed rectangular IGUs into an accepted existing frame; actual inspection, handling, cleaning and correction before installation acceptance |
| excluded_products | IGU manufacturing; frame manufacture, installation or repair; demolition and deglazing; wet glazing and structural silicone installation; fire glazing; cutting, seaming or grinding finished IGUs in the field |
| representative_product | A factory sealed IGU installed with the system-specified compatible blocks, preformed gaskets and mechanical retention, accepted after drainage and condition inspection |
| production_route | survey and receive → dry support and retention → inspect, clean, correct where necessary, and accept |
| market_state | Completed installation service at customer acceptance; supplied components and intermediate installed states are not additional final services |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dry gasket insulating glass unit installation services |
| How much | 1 m2 of accepted IGU unit area, counted once per unique accepted unit |
| How well | Correct actual IGU build and orientation; approved compatible components; undamaged units and edges; verified support, retention, gasket fit and drainage; clean condition and documented project acceptance |
| How long or cycle | One identified installation lot from received-frame release through first final acceptance, including all actual correction visits before that acceptance; report calendar dates and periods; no assumed in-use lifetime |
| reference_flow_link | `reference_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dry gasket insulating glass unit installation services |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | Site and opening IDs; installation lot; accepted-unit IDs and dates; actual unit width and height; IGU pane build, coatings, edge seal and orientation; frame system and received-condition release; actual block, gasket, bead and fastener specifications; manufacturer compatibility approval; drainage and retention acceptance requirements; actual new versus existing retained components; access and handling method; complete rework and rejection history; reporting periods; physical-stock and WIP treatment; included upstream datasets and supplier geography/technology |

Let A be the sum of the measured factory-unit face areas for unique units whose installation has passed final acceptance for this lot. Count the unit outline once; do not count both glass faces, all pane layers, visible daylight area, or frame area. Declared reference area is the installed unit area, not a thermal or lifetime function. When the project bill uses a different area convention, retain both raw areas and a traceable unit-by-unit conversion. A must be positive. The final output is 1 m2 after division by A; all intermediate transfer amounts remain actual recorded quantities divided by A.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_area_basis` | reference product | Area | m2 | A is unique finally accepted IGU unit face area from actual unit dimensions and IDs in cp_accept_handoffs. Include each accepted unit only once regardless of pane count, face count or repeated inspections. |
| `input_area_consistency` | supplied_igus; accepted_igus; glaze_feed; retained_glazing; accept_feed; unused_igu_return; accept_rework_return; glaze_rework_feed | Area | m2 | Preserve the same measured unit-outline basis for supply, forward/reverse transfers, WIP and usable IGU exits. No internal handoff is fixed to 1 m2. |
| `mass_bridge_required` | setting_blocks; gaskets; beads_fasteners; glazing_offcuts; broken_igus; survey_rejected_igu_waste; accept_rejected_igu_waste | Mass | kg | Weigh the actual material or complete rejected IGU. A length, count or area record can become kg only with actual same-grade linear mass, item mass or complete-build area-to-mass evidence. Pane thickness alone does not establish complete IGU mass. |
| `gross_draw_basis` | supplied_igus; setting_blocks; gaskets; beads_fasteners; cleanup_water; cleanup_supplies | Area or Mass as stated on each card | m2 or kg as stated on each card | Physical gross draw is opening intact unissued stock plus receipts minus closing intact unissued stock. Usable boundary exits are included in this draw and separately reported as positive product outputs in the same property and unit. Processing losses and correction draws remain included. |
| `water_pool_basis` | cleanup_water; cleanup_supplies; cleanup_waste; cleanup_wastewater; accept_water_vapour | Mass | kg | Track actual water content independently of total mixture mass. Collected wastewater, water in spent wipes, retained water, unused exits and actual water vapour are exclusive fates. Do not convert an unexplained residual into vapour or another direct emission. |
| `power_basis` | survey_electricity; glaze_electricity; accept_electricity | Energy | kWh | Use the own-node actual meter quantity or an evidenced complete shared attribution. Convert actual MJ electricity to kWh by division by 3.6; retain the original record, supplier, voltage and period. |
| `service_duration_basis` | survey_shared_service; glaze_shared_service; accept_shared_service | Duration | h | Use actual paid availability or actual contract hours, including paid idle time. Convert calendar days only using the specific contract's hours-per-day evidence. Do not assume an eight-hour rental day. |
| `period_stock_boundary` | all inventory rows | Relevant card property | Relevant card unit | Index opening and closing pools by unit, material, node and period. Intact unissued stock, processed WIP, usable exits, rejected material and accepted installed output are exclusive states. Carry original burdens with WIP without charging their manufacture again. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing compatible frames are complete and released for glazing; factory sealed IGUs arrive in their supplied condition; newly drawn glazing and cleaning materials are separately identified |
| starting_condition_role | Accepted installed receiving interface and finished component supply; not a zero-burden declaration for newly purchased IGUs or consumables |
| product_classification_scope | Installation service using dry gaskets and mechanical retention, bounded as stated in Sections 1 and 2 |
| recursive_input_rule | An earlier installation service or existing installed frame is a disclosed received condition. Do not recursively charge the same accepted installation or frame production through the interface card. Any purchased distinct service is linked once to its actual supplier and scope. |
| upstream_dataset_requirement | Link the actual factory IGU build and each newly drawn material to a compatible upstream dataset once; record actual electricity and contracted-service supply; separate component manufacture from foreground installation; disclose unresolved matches |
| disclosure | Report received-frame release, supplier and component specifications, every node and period, access/service boundary, physical draw and usable exits, internal/WIP balances, rejected-unit fates, correction visits, shared-attribution decisions and exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_frame` | survey | Include condition and compatibility inspection of the existing frame. The frame_interface card represents the received installation interface; its area must not create new-frame manufacturing or frame-installation burdens. A frame requiring repair is outside this lot's qualifying starting condition. | `pilkington-general-glazing-2013` |
| `boundary_factory_unit` | survey; glaze | Receive finished factory IGUs by actual build and ID; include handling and protection; do not cut, seam or grind finished units to correct a mismatch. | `pilkington-general-glazing-2013` |
| `boundary_dry_joining` | glaze | Include actual IGUs, compatible support and edge blocks, preformed gaskets, and new mechanical retention parts where drawn. Identify existing retained parts without treating them as new purchased inputs. Support, gasket fit, edge protection and drainage are installation responsibilities. | `pilkington-general-glazing-2013` |
| `boundary_stage_gates` | survey; glaze; accept | Record survey release, retained-but-unaccepted glazing and final acceptance as separate gates. Only the last is the reference service; actual intermediate and reverse transfers remain internal handoffs. | `pilkington-general-glazing-2013` |
| `boundary_own_node_rejects` | survey; glaze; accept | A discarded unit belongs to the node that actually damaged or rejected and dispatched it. Distinguish incoming damaged composite IGUs, glazing breakage, final-inspection damage, usable unprocessed exits and intact corrective returns. Every reject has an ID, quantity, custodian or rework destination and event date. | `pilkington-general-glazing-2013` |
| `boundary_periods` | all foreground nodes | Enumerate receiving/storage, glazing, inspection/cleaning and correction periods through first acceptance. Include opening and closing WIP and paid service periods. Later use, routine maintenance and post-acceptance replacement are outside this service lot. A terminated lot with no accepted area cannot be normalized into an accepted service. | |
| `boundary_shared_services` | survey; glaze; accept | Include actual handling/access/tool/storage service and power serving the included work. List every consumer and relevant period of a shared asset, including other jobs when they share the measured total. A service dataset that already includes its energy or operator must not be combined with duplicate separate burdens. | |
| `boundary_water_and_emissions` | glaze; accept | Separate supplied cleaning water and materials from collected waste/wastewater and actual substance-specific releases. Weather water and building runoff are not cleaning inputs. Report exclusive accept water fates and measured or independently evidenced own-glaze/own-accept direct releases by actual substance/particle basis and receiving compartment. Incidental component-fitting emissions are conditional actual events, not inferred offcut deficits. | `pilkington-general-glazing-2013` |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Existing frame installation interface (`frame_interface`)

Process / prospective direction / type: `survey` / `inputs` / `product`.

The existing compatible receiving frame area is a documented boundary interface. No new frame material, frame installation or repair is supplied by this card.

- Collection subject: Existing frame installation interface
- Flow property / unit: Area / m2
- Amount rule: surveyed_opening_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_interface`
- Sources: `pilkington-general-glazing-2013`
- Unverified optional screening aid: Provisional screening estimate for frame_interface
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Opening interface area can differ from final unit area and unfinished openings can cross a period; this broad ratio screens convention or duplicate-count mistakes.

#### Collection requirement: Actual receiving access, handling or storage availability service (`survey_shared_service`)

Process / prospective direction / type: `survey` / `inputs` / `product`.

Record each actually contracted provider/asset/service separately. Include paid idle availability, the actual contract time basis and any bundled operator or energy boundary.

- Collection subject: Actual receiving access, handling or storage availability service
- Flow property / unit: Duration / h
- Amount rule: survey_attributed_contract_hours / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_service`
- Unverified optional screening aid: Provisional screening estimate for survey_shared_service
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 72
  - Unit: h
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Storage/access availability may persist over calendar periods for a small lot; this broad time intensity is a check on unit conversion and repeated billing, not a rental-day default.

#### Collection requirement: Accepted inspected IGUs with frame interface (`accepted_igus`)

Process / prospective direction / type: `survey` / `outputs` / `product`.

Actual released unit IDs and transfer events go to glaze. The measured paired handoff includes no final installation service and is not forced to the reference quantity.

- Collection subject: Accepted inspected IGUs with frame interface
- Flow property / unit: Area / m2
- Amount rule: survey_forward_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_igus`
- Sources: `pilkington-general-glazing-2013`
- Unverified optional screening aid: Provisional screening estimate for accepted_igus
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Actual forward handoffs can include unfinished units or corrected release events; broad screening prompts duplicate-event and WIP reconciliation.

#### Collection requirement: Removed IGU transport packaging (`igu_packaging`)

Process / prospective direction / type: `survey` / `outputs` / `waste`.

Separate actual discarded packaging by material and contamination state and identify the receiving custodian. Returnable racks and packaging returned for reuse are not discarded packaging.

- Collection subject: Removed IGU transport packaging
- Flow property / unit: Mass / kg
- Amount rule: survey_discarded_packaging_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_packaging`
- Sources: `pilkington-general-glazing-2013`
- Unverified optional screening aid: Provisional screening estimate for igu_packaging
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Timber, pads and mixed transport protection vary with unit size and packaging ownership; the broad mass screen prompts tare and rack-versus-waste checks.

#### Collection requirement: Accepted inspected IGUs with frame interface (`glaze_feed`)

Process / prospective direction / type: `glaze` / `inputs` / `product`.

Receive exactly the actual survey handoff events; match unit IDs, dates, area and custody with accepted_igus. Original component burden follows the handoff without a second upstream purchase.

- Collection subject: Accepted inspected IGUs with frame interface
- Flow property / unit: Area / m2
- Amount rule: glaze_forward_received_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_handoffs`
- Unverified optional screening aid: Provisional screening estimate for glaze_feed
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: The broad area screen accommodates period boundaries and multiple real unit events while drawing attention to unmatched or duplicated survey transfers.

#### Collection requirement: Specified resilient support and edge blocks (`setting_blocks`)

Process / prospective direction / type: `glaze` / `inputs` / `product`.

Separate actual materials, grades and compatible component specifications. Physical gross draw is opening intact unissued stock plus receipts minus closing intact unissued stock. Include real unused exits in draw and report them positively through unused_glazing_component_return. Retain actual losses and every new correction draw.

- Collection subject: Specified resilient support and edge blocks
- Flow property / unit: Mass / kg
- Amount rule: setting_blocks_gross_draw_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_materials`
- Sources: `pilkington-general-glazing-2013`
- Unverified optional screening aid: Provisional screening estimate for setting_blocks
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Blocks are small discrete pieces but size, material and unit weight vary; this screen detects length/count values mistaken for kg.

#### Collection requirement: New glazing beads and mechanical fasteners (`beads_fasteners`)

Process / prospective direction / type: `glaze` / `inputs` / `product`.

Separate actual materials, grades and compatible component specifications. Physical gross draw is opening intact unissued stock plus receipts minus closing intact unissued stock. Include real unused exits in draw and report them positively through unused_glazing_component_return. Retain actual losses and every new correction draw.

- Collection subject: New glazing beads and mechanical fasteners
- Flow property / unit: Mass / kg
- Amount rule: beads_fasteners_gross_draw_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_materials`
- Sources: `pilkington-general-glazing-2013`
- Unverified optional screening aid: Provisional screening estimate for beads_fasteners
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: New retention profiles can carry more mass than gaskets and may instead be existing parts; broad screening checks new-versus-existing attribution and material separation.

#### Collection requirement: Actual glazing access, handling or tool availability service (`glaze_shared_service`)

Process / prospective direction / type: `glaze` / `inputs` / `product`.

Actual provider/asset-specific service, including paid idle availability assigned to glaze. Declare bundles and actual contract time conversion; report all correction use.

- Collection subject: Actual glazing access, handling or tool availability service
- Flow property / unit: Duration / h
- Amount rule: glaze_attributed_contract_hours / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_service`
- Unverified optional screening aid: Provisional screening estimate for glaze_shared_service
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 168
  - Unit: h
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Access or lifting availability can cover several days and idle periods on a small lot; this broad intensity flags unsupported contract conversion and repeated totals.

#### Collection requirement: Unused new glazing components by actual material (`unused_glazing_component_return`)

Process / prospective direction / type: `glaze` / `outputs` / `product`.

Expand into actual unused blocks, gaskets, beads and fasteners that leave glaze custody usable and unprocessed. Retain return and external-transfer destinations separately in kg matching each input. Carry original unused-material burden only; keep installation and correction burdens with the service lot.

- Collection subject: Unused new glazing components by actual material
- Flow property / unit: Mass / kg
- Amount rule: glaze_usable_exit_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_materials`
- Unverified optional screening aid: Provisional screening estimate for unused_glazing_component_return
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Unused stock exits may be zero or large relative to a small lot; this screen checks separation from closing stock and processed rejects.

#### Collection requirement: Discarded glazing component offcuts and consumables (`glazing_offcuts`)

Process / prospective direction / type: `glaze` / `outputs` / `waste`.

Separate actual gasket, block, bead, fastener and other discarded fitting material by identity/state and custodian. IGU units and glass are excluded from this card.

- Collection subject: Discarded glazing component offcuts and consumables
- Flow property / unit: Mass / kg
- Amount rule: glaze_component_waste_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_waste`
- Sources: `pilkington-general-glazing-2013`
- Unverified optional screening aid: Provisional screening estimate for glazing_offcuts
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Profile trimming and rejected pieces vary by perimeter and procurement length; a broad screen checks composition, tare and overlap with usable exits.

#### Collection requirement: Actual substance-resolved direct releases from component fitting (`glaze_other_releases`)

Process / prospective direction / type: `glaze` / `outputs` / `elementary`.

Conditional actual non-H2O direct release from included new gasket/block/bead or other mechanical-retention-component handling, fitting or incidental trimming at glaze. Establish the actual component material, substance or particle basis, physical state and environmental receiving compartment from actual event evidence. This card does not admit field cutting, seaming or grinding of an IGU, structural wet sealing, or an assumed generic VOC/dust exchange. Captured offcuts or dust remain waste and are excluded from direct release. Unknown occurrence, species, medium or amount remains a disclosed data gap; evidenced absence is needed to report zero.

- Collection subject: Actual substance-resolved direct releases from component fitting
- Flow property / unit: Mass / kg
- Amount rule: glaze_species_release_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_releases`
- Unverified optional screening aid: Provisional screening estimate for glaze_other_releases
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: This broad provisional per-species screen concerns actual component fitting/trimming only and flags material-balance, unit or operation errors. It assumes no occurrence, verifies no unknown species, and is neither a measured emission factor nor a release limit. Actual direct measurement or independently validated activity/control-specific evidence supplies the quantity; one method is used for each unique physical event, never a missing-waste or stock residual.

#### Collection requirement: Actual cleaning and protection consumables (`cleanup_supplies`)

Process / prospective direction / type: `accept` / `inputs` / `product`.

Separate actual cloths, agents and protection materials with required compatibility/coating approval. Physical gross draw includes unused usable exits; retained reusable equipment is not repeatedly purchased consumable mass.

- Collection subject: Actual cleaning and protection consumables
- Flow property / unit: Mass / kg
- Amount rule: cleanup_supplies_gross_draw_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_materials`
- Sources: `pilkington-general-glazing-2013`
- Unverified optional screening aid: Provisional screening estimate for cleanup_supplies
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Cloths, cleaning formulation and protection vary materially; broad screening helps expose count-to-mass errors and repeated charging of reusable items.

#### Collection requirement: Actual final-inspection access or cleaning availability service (`accept_shared_service`)

Process / prospective direction / type: `accept` / `inputs` / `product`.

Actual access, equipment or cleaning service by provider and contract, including paid idle periods. Preserve bundled-energy/operation boundaries and actual contract hours.

- Collection subject: Actual final-inspection access or cleaning availability service
- Flow property / unit: Duration / h
- Amount rule: accept_attributed_contract_hours / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_service`
- Unverified optional screening aid: Provisional screening estimate for accept_shared_service
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 72
  - Unit: h
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Final access may remain hired across a waiting or correction period; broad screening prevents an implicit work-shift conversion of the rental.

#### Collection requirement: Intact retained IGUs returned for dry-glazing correction (`accept_rework_return`)

Process / prospective direction / type: `accept` / `outputs` / `product`.

Conditional actual return of intact retained units to glaze. Pair with glaze_rework_feed by event/unit IDs. This carries the original unit burden and is neither final accepted service, unused supply return nor waste. All inspection and correction activity remains with the lot.

- Collection subject: Intact retained IGUs returned for dry-glazing correction
- Flow property / unit: Area / m2
- Amount rule: accept_rework_sent_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_handoffs`
- Unverified optional screening aid: Provisional screening estimate for accept_rework_return
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Several real correction returns are possible; broad screening checks repeat-event bookkeeping and never converts returned area into accepted output.

#### Collection requirement: Unused cleaning water and consumables by actual material (`unused_cleanup_material_return`)

Process / prospective direction / type: `accept` / `outputs` / `product`.

Positive usable unprocessed exits from accept custody, expanded by actual supplied water or material and linked to the corresponding kg input. Keep return and external transfer exclusive from closing stock, wastewater, spent wipes and residues. Carry only attributable original unused-material burden.

- Collection subject: Unused cleaning water and consumables by actual material
- Flow property / unit: Mass / kg
- Amount rule: accept_usable_cleanup_exit_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_materials`
- Unverified optional screening aid: Provisional screening estimate for unused_cleanup_material_return
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Unused water or consumable returns can be absent or material on a changed lot; broad screening checks matching input identity and stock separation.

#### Collection requirement: Collected cleaning residues and spent consumables (`cleanup_waste`)

Process / prospective direction / type: `accept` / `outputs` / `waste`.

Separate actual spent cloths, protection and collected residues by composition/state and custodian. Total wet-wipe mass includes its measured water content; that water is not counted again in wastewater or air. Exclude IGU discard and separately collected wastewater.

- Collection subject: Collected cleaning residues and spent consumables
- Flow property / unit: Mass / kg
- Amount rule: accept_collected_solid_waste_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_waste`
- Sources: `pilkington-general-glazing-2013`
- Unverified optional screening aid: Provisional screening estimate for cleanup_waste
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Damp wipes and removed protection have different wet masses; a broad screen checks water overlap, tare and material separation.

#### Collection requirement: Actual substance-resolved direct releases (`accept_other_releases`)

Process / prospective direction / type: `accept` / `outputs` / `elementary`.

Conditional actual release by separately identified substance, physical state or particle fraction and receiving compartment. Exclude separately accounted H2O vapour and collected waste/wastewater. No generic VOC, dust or missing mass is assigned a concrete substance identity.

- Collection subject: Actual substance-resolved direct releases
- Flow property / unit: Mass / kg
- Amount rule: accept_species_release_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_releases`
- Unverified optional screening aid: Provisional screening estimate for accept_other_releases
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Minor direct releases depend on the actual cleaning chemistry and evidence; this broad screen is provisional and cannot authorize an invented release or replace chemical identification.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| survey | Receive and inspect IGUs and existing frame interface | required | Every qualifying lot | Foreground receiving, protection and compatibility release; own incoming rejection and usable-exit responsibility | Actual released-unit area per 1 m2 reference flow; opening/closing stock separate |
| glaze | Seat, gasket and mechanically retain IGUs | required | Every qualifying lot | Foreground assembly/integration of actual IGUs, support/edge blocks, preformed gaskets and retention components; actual correction activity | Actual retained-unit handoff area per 1 m2 reference flow, including identified correction passes |
| accept | Inspect drainage and retention, clean and accept installation | required | Every qualifying lot | Foreground final inspection/cleaning; reject and correction dispatch; one accepted service output | 1 m2 reference flow after normalization by unique accepted area A |

A corrective return from accept to glaze is conditional on an actual intact unit being returned for correction. Match accept_rework_return and glaze_rework_feed by event and unit IDs. Charge extra glazing and repeated acceptance activity from the real records; the unit's original upstream material burden crosses the handoff once as carried burden and is not newly purchased again. If no physical or gate return occurred, do not create a reverse transfer merely because an inspector made a note. Actual inspection failure held pending a decision is WIP, not acceptance or waste.

Inventory amounts below are produced from the collection protocols in Section 8. All are normalized per reference flow using the same positive A. Provisional screens are author judgments for investigating records, not accepted bounds or substitutes for quantities. A result outside a screen requires investigation and can remain valid with evidence. A conditionally absent exchange is zero only when its absence is evidenced; missing measurement is not zero. Expand material/service umbrella cards into their actual independent exchanges when foreground records establish identity, grade, provider, state or receiving medium.

### Process: Receive and inspect IGUs and existing frame interface (`survey`)

#### Inputs

##### Product flows

###### Factory sealed insulating glass units (`supplied_igus`)

Use actual factory unit build and IDs. gross_igu_draw includes usable units that leave this node for supplier return or external transfer; report those separately. Do not deduct them from physical input a second time.

- Selected flow: Factory sealed insulating glass units
- Flow property / unit: Area / m2
- Amount rule: gross_igu_draw / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_igus`
- Sources: `pilkington-general-glazing-2013`
- Range: Provisional screening estimate for supplied_igus
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Ordinary fresh-unit draw is near accepted unit area, but opening WIP, rejects and intact exits may change the lot ratio; a deliberately broad screen does not set a loss allowance.

###### Actual attributed site electricity (`survey_electricity`)

Receive the actual supplier, voltage and period-specific electricity for survey, handling and protection. Direct metering takes precedence; shared totals require complete positive attribution evidence.

- Selected flow: Actual attributed site electricity
- Flow property / unit: Energy / kWh
- Amount rule: survey_attributed_kwh / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_power`
- Range: Provisional screening estimate for survey_electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Receiving and inspection can be manual or powered; a broad screen permits handling tools and site overhead without asserting a default electricity use.

#### Outputs

##### Product flows

###### Unused intact factory IGUs (`unused_igu_return`)

Positive same-unit usable exits from survey custody, identified separately as supplier return or external transfer. Exclude these units from closing stock. Transfer only their attributable original unused-material burden, never service or avoided-production credits.

- Selected flow: Unused intact factory IGUs
- Flow property / unit: Area / m2
- Amount rule: survey_usable_exit_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_igus`
- Range: Provisional screening estimate for unused_igu_return
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Intact unused exits may be absent or substantial on a changed-order lot; the area ratio checks stock and custody entries rather than imposing a return rate.

##### Waste flows

###### IGUs damaged or irrecoverably rejected at incoming inspection (`survey_rejected_igu_waste`)

Record complete actual composite IGU mass and IDs when survey dispatches a rejected unit as waste. This is distinct from intact usable return, quarantine and glaze-stage breakage. Use a measured complete-unit mass or documented actual build-specific mass/area bridge.

- Selected flow: IGUs damaged or irrecoverably rejected at incoming inspection
- Flow property / unit: Mass / kg
- Amount rule: survey_discarded_igu_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_igus`
- Sources: `pilkington-general-glazing-2013`
- Range: Provisional screening estimate for survey_rejected_igu_waste
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: One rejected heavy unit can dominate a small accepted lot; this broad screen checks whether rejected composite mass was replaced by an unsupported glass-only or area value.

### Process: Seat, gasket and mechanically retain IGUs (`glaze`)

#### Inputs

##### Product flows

###### Intact retained IGUs returned for dry-glazing correction (`glaze_rework_feed`)

Conditional on actual return from accept. Match accept_rework_return by event/unit IDs and area; this is an existing unit carrying its original material burden. Collect every extra correction resource without new manufacture of the same IGU.

- Selected flow: Intact retained IGUs returned for dry-glazing correction
- Flow property / unit: Area / m2
- Amount rule: glaze_rework_received_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_handoffs`
- Range: Provisional screening estimate for glaze_rework_feed
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Repeated real correction passes can exceed one unit area; a broad zero-to-multiple-pass screen supports event reconciliation without endorsing a correction rate.

###### Specified preformed dry glazing gaskets (`gaskets`)

Separate actual materials, grades and compatible component specifications. Physical gross draw is opening intact unissued stock plus receipts minus closing intact unissued stock. Include real unused exits in draw and report them positively through unused_glazing_component_return. Retain actual losses and every new correction draw.

- Selected flow: Specified preformed dry glazing gaskets
- Flow property / unit: Mass / kg
- Amount rule: gaskets_gross_draw_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_materials`
- Sources: `pilkington-general-glazing-2013`
- Range: Provisional screening estimate for gaskets
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Gasket demand follows actual perimeter and profile rather than accepted area alone; the broad screen detects a missing linear-mass bridge or inclusion of wet sealant.

###### Actual attributed site electricity (`glaze_electricity`)

Actual electricity serving glaze tools, lifting or included correction. Use own meter or complete shared weights for the actual supplier/voltage/period; do not reuse a full survey or accept meter total.

- Selected flow: Actual attributed site electricity
- Flow property / unit: Energy / kWh
- Amount rule: glaze_attributed_kwh / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_power`
- Range: Provisional screening estimate for glaze_electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Hand installation can use little electricity while powered lifting or repeated work increases use; broad screening checks supplied energy units and duplicate allocation.

#### Outputs

##### Product flows

###### Dry retained IGUs pending final acceptance (`retained_glazing`)

Actual mechanically retained unit area handed to accept, with forward-pass event IDs. Units not yet accepted remain WIP; repeated corrected handoffs are actual passes and never extra final output.

- Selected flow: Dry retained IGUs pending final acceptance
- Flow property / unit: Area / m2
- Amount rule: glaze_retained_forward_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_handoffs`
- Sources: `pilkington-general-glazing-2013`
- Range: Provisional screening estimate for retained_glazing
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Retained handoffs may repeat after real correction; the screen checks event duplicates while allowing more than the final accepted area.

##### Waste flows

###### IGUs damaged and discarded during dry glazing (`broken_igus`)

Actual whole or collected broken composite IGU mass from glaze, including relevant spacer/seal contents; identify unit/build, damage event and waste custodian. Do not label the whole unit pure glass cullet.

- Selected flow: IGUs damaged and discarded during dry glazing
- Flow property / unit: Mass / kg
- Amount rule: glaze_discarded_igu_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_waste`
- Sources: `pilkington-general-glazing-2013`
- Range: Provisional screening estimate for broken_igus
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Breakage can dominate small lots; this screen checks complete-unit mass evidence and own-node attribution, not a permitted breakage rate.

##### Elementary flows

### Process: Inspect drainage and retention, clean and accept installation (`accept`)

#### Inputs

##### Product flows

###### Dry retained IGUs pending final acceptance (`accept_feed`)

Receive actual retained units from glaze with matched event and unit IDs. Count real repeat passes as internal activity; no pass is presumed accepted.

- Selected flow: Dry retained IGUs pending final acceptance
- Flow property / unit: Area / m2
- Amount rule: accept_forward_received_area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_handoffs`
- Range: Provisional screening estimate for accept_feed
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Repeated forward passes and opening WIP may differ from final accepted area; the broad screen helps identify unmatched transfers.

###### Actual supplied cleaning water (`cleanup_water`)

Record actual water source and grade in kg. Physical gross draw includes usable boundary exits; record them separately in the cleanup-material exit card. Assign the used-water pool to exclusive actual fates without assuming unmeasured evaporation.

- Selected flow: Actual supplied cleaning water
- Flow property / unit: Mass / kg
- Amount rule: cleanup_water_gross_draw_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_water`
- Sources: `pilkington-general-glazing-2013`
- Range: Provisional screening estimate for cleanup_water
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Cleaning may use damp wipes or more extensive washing; this broad screen checks water units and boundary contamination rather than prescribing a cleaning dose.

###### Actual attributed site electricity (`accept_electricity`)

Actual electricity for final inspection, cleaning and correction inspection, using own-node meter or complete evidenced shared attribution and actual supplier/voltage/period.

- Selected flow: Actual attributed site electricity
- Flow property / unit: Energy / kWh
- Amount rule: accept_attributed_kwh / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_power`
- Range: Provisional screening estimate for accept_electricity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Inspection can be manual while cleaning equipment and repeat inspection add power; the broad screen checks energy units and duplication.

#### Outputs

##### Product flows

###### Dry gasket insulating glass unit installation services (`reference_service`)

Final accepted, supported, mechanically retained, undamaged and cleaned IGU installation with accepted drainage. A/A is exactly one reference unit; unique accepted area excludes quarantine, unresolved defects and repeated inspection passes.

- Selected flow: Dry gasket insulating glass unit installation services
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_handoffs`
- Sources: `pilkington-general-glazing-2013`
- Range: Reference normalization identity for positive accepted area
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2
  - Basis: per reference flow; identity A/A only, not a yield range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

Screen interpretation: This is the normalization identity A/A for positive unique accepted area, not a physical yield, acceptance rate or default loss assumption.

##### Waste flows

###### Collected cleaning wastewater (`cleanup_wastewater`)

Actual collected water mixture sent to a documented custodian, with water content separately identified for the water balance. It is not automatically a direct environmental release.

- Selected flow: Collected cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: accept_collected_wastewater_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_water`
- Sources: `pilkington-general-glazing-2013`
- Range: Provisional screening estimate for cleanup_wastewater
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Actual collection can be zero for wipe cleaning or larger for washing; a broad screen checks collection rather than assuming every water input becomes wastewater.

###### IGUs damaged or irrecoverably rejected during final inspection or cleaning (`accept_rejected_igu_waste`)

Conditional actual composite IGU waste generated and dispatched at accept; record unit/build and measured whole/composite mass or actual same-build bridge. It must not be moved into glaze or survey waste for convenience, and intact correction returns are excluded.

- Selected flow: IGUs damaged or irrecoverably rejected during final inspection or cleaning
- Flow property / unit: Mass / kg
- Amount rule: accept_discarded_igu_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_waste`
- Sources: `pilkington-general-glazing-2013`
- Range: Provisional screening estimate for accept_rejected_igu_waste
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: One late damaged unit may dominate a small accepted lot; broad screening checks complete mass evidence and actual node custody.

##### Elementary flows

###### Actual cleaning water released as H2O vapour to air / unspecified (`accept_water_vapour`)

Conditional actual H2O emission to air / unspecified from the included cleaning operation. No narrower air subcompartment is asserted. Quantity requires direct measurement or independently validated operation-specific evaporation evidence. An unexplained water-balance residual is not emission evidence; ambient rain/runoff is excluded.

- Selected flow: Actual cleaning water released as H2O vapour to air / unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: accept_evidenced_water_vapour_kg / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept_water`
- Range: Provisional screening estimate for accept_water_vapour
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Screen interpretation: Cleaning water can remain in collection or evaporate; a broad screen allows zero and flags water-unit or balance errors without making a residual emission assumption.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | survey; glaze; accept | Use node, lot, unit, material and event records to separate independently measured activity before attributing shared quantities. The installed service is the sole intended final output; no routine glazing co-product is assumed. | |
| `allocation_shared_complete` | electricity and contracted services | Identify the actual shared asset/service, meter or invoice, period and every consumer. For electricity choose exactly one accounting mode for each overlapping master-meter period: direct records with complete included-node coverage, or full-master shared attribution across the complete consumer set. A direct quantity and a share of the same full master quantity are mutually exclusive. Partial direct-plus-master/residual accounting is not declared by this method. For contracts use actual direct records or one documented causal driver with positive total weight across the complete consumer set. Reconcile allocated quantities to the once-recorded total, including consumers outside this lot. | |
| `allocation_paid_idle` | survey_shared_service; glaze_shared_service; accept_shared_service | Retain the full paid availability boundary, including paid idle time. For availability services, use actual reserved-availability hours or other evidenced contract drivers rather than deleting idle hours or automatically substituting productive tool time. Actual paid hours and weights are collected by node and period. | |
| `allocation_bundle_boundary` | all purchased services | Inspect whether energy, operator, transport or equipment provision is included in the service dataset and invoice. Charge the documented scope once; do not also enter its fully included burdens as independent consumption. Disclose any independently metered excluded component. | |
| `allocation_unused_material` | unused_igu_return; unused_glazing_component_return; unused_cleanup_material_return | Preserve gross physical draw as the input and usable exit as a positive product output in the matching property/unit. Attribute only original unused-material upstream burden to an actual usable exit. Installation, receipt, handling, cleaning, access, idle and rework burdens remain assigned to the actual service lot. No avoided-production credit, negative exchange or second subtraction is permitted. | |
| `allocation_rework` | accept_rework_return; glaze_rework_feed; rejected units | Preserve original component burden when intact units cross a rework handoff. Do not charge the same IGU manufacture again. Include every actual extra material draw, electricity use, inspection, access and correction activity until final acceptance. Discarded-unit and treatment burdens follow the actual producing node and declared treatment boundary. | |
| `allocation_period_carry` | stock; WIP; accepted and terminated lots | Record the opening/closing period, unit/material state, carrying burden and responsibility for each pool. Charge a purchased material and each actual service event once. Carry unfinished work to the linked later lot instead of counting it as this period's accepted output. A later acceptance can carry earlier lot burdens once using the recorded linkage. | |
| `allocation_accepted_denominator` | all normalized rows | Divide the attributable lot quantities by A only after separating outside-lot activity and documenting opening/closing WIP. Unique accepted area is the denominator; rejected, unused, held and repeated-pass area is excluded. No accepted area means no accepted-service dataset. | |
| `allocation_recovery` | waste and usable exits | Do not infer a recycled co-product or avoided virgin-production credit from a waste-dispatch label. Any recovery and treatment modelling requires actual destination, technology and a separately disclosed applicable upstream/downstream allocation method. | |

For material i at node n, physical gross draw G is opening intact unissued stock O plus receipts R minus closing intact unissued stock C. Its exclusive unused supplier return U and unused external transfer X are positive outputs. Net consumed G − U − X is a diagnostic and the basis for separating original unused-material burden; it is not another inventory input and is not a negative credit. Returned and transferred items are absent from C. Processed assemblies, offcuts, damaged units and WIP are not intact unissued stock. Reconcile the processing-state balance separately so that movement into WIP is never mistaken for a usable stock return. For mixed material or specification pools, maintain distinct balances and upstream factors before summation.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols use actual site/lot records. A protocol owns one process node even when an instrument, invoice or supplier document is shared. A shared master event has one owner; node records link to it and record the attributable share. Raw quantities are retained with units before normalization. The simple aggregation_rule cells declare the normalization basis; the collection_method cells specify the full stock, event and allocation operations, together with all raw-key definitions and the original field descriptions. raw_fields cells contain only stable ASCII field keys for identical bilingual schemas. No protocol denominator is an assumed crew shift or a fixed one-square-metre intermediate feed.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_survey_interface` | `survey` | received existing frame interface | opening survey and release | lot_id; period_id; event_ID; producing_node; opening_ID; actual_opening_width_m; actual_opening_height_m; interface_area_convention; site_id; frame_system; unit_outline_convention; actual_opening_dimensions; release_date; accepted_receiving_condition; compatibility_detail; defects; repair_exclusion_decision | Survey each physical opening and preserve its actual measured area convention and manufacturer-approved IGU interface. Link openings to unit IDs. Sum relevant surveyed opening area, retain unfinished/opening-state differences, and divide by A; do not add new-frame production burdens. Stable-key mapping: Map surveyed_opening_area to the sum of actual_opening_width_m * actual_opening_height_m for the declared interface convention. Retain the actual dimensions and mapped unit/opening IDs; this is an existing interface area, not purchased frame mass. Field definitions: site_id = site; lot_id = lot; opening_ID = opening ID; frame_system = frame system; unit_outline_convention = unit-outline convention; actual_opening_dimensions = actual opening dimensions; release_date = release date; accepted_receiving_condition = accepted receiving condition; compatibility_detail = compatibility detail; defects = defects; repair_exclusion_decision = repair-exclusion decision. | m2 | each opening and changed release | receiving release and any relevant opening period | actual site openings in the lot | per reference flow | signed frame release; measured dimensions; photographs; system details; unit/opening mapping |
| `cp_survey_igus` | `survey` | IGU physical draw, forward handoff, usable exit and incoming discard | stock ledger, unit register, transfer and waste record | lot_id; period_id; event_ID; producing_node; unit_ID; rectangular_outline_confirmed; outline_evidence; actual_unit_width_m; actual_unit_height_m; forward_event_ID; corrective_event_ID; unit_state_event_IDs; opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; carrying_burden_link; material_pool_ID; actual_original_upstream_burden_per_matching_unit; original_gross_draw_material_burden; actual_usable_exit_quantity; survey_opening_unit_IDs; survey_receipt_unit_IDs; survey_closing_unit_IDs; survey_supplier_return_unit_IDs; survey_external_transfer_unit_IDs; measured_complete_or_collected_composite_mass_kg; documented_actual_complete_build_kg_per_m2; discarded_unit_ID; actual_net_discarded_mass_j; site_id; actual_build; complete_unit_mass_where_needed; mass_bridge_source; opening_intact_unissued_quantity; receipts; closing_intact_unissued_quantity; usable_return_ids; external_transfer_ids; quarantine_ids; wip_ids; custodian; event_timestamp | Measure unit face area from actual width and height once per unit. Calculate physical gross IGU draw as opening intact unissued area plus receipt area minus closing intact unissued area, without subtracting usable exits. Separately sum mutually exclusive usable supplier-return and external-transfer areas, actual forward-handoff event areas and incoming discarded-unit masses. Weigh composite discarded units or use actual same-build mass/area evidence. Match unit IDs across all states and divide each attributable quantity by A. Stable-key mapping: For every unit, actual_unit_area = actual_unit_width_m * actual_unit_height_m. survey_opening_intact_unissued_area, survey_igu_receipt_area and survey_closing_intact_unissued_area are sums over their named exclusive unit-ID sets. survey_unused_supplier_return_area and survey_unused_external_transfer_area are separate actual usable-exit set sums; survey_usable_exit_area is their sum. survey_forward_area sums distinct forward_event_ID unit areas. actual_discarded_unit_area sums discarded_unit_ID actual areas; survey_discarded_igu_kg is actual complete/composite weighed mass or actual_discarded_unit_area times the evidenced actual complete-build kg/m2. gross_igu_draw comes from igu_stock_draw. Stockburden aliases refer only to this actual Area/m2 pool and its original upstream dataset. No count/area-to-mass factor is inferred from a different IGU build. Field definitions: site_id = site; lot_id = lot; producing_node = node; period_id = period; unit_ID = unit ID; actual_build = actual build; actual_unit_width_m = width; actual_unit_height_m = height; complete_unit_mass_where_needed = complete-unit mass where needed; mass_bridge_source = mass-bridge source; opening_intact_unissued_quantity = opening intact unissued quantity; receipts = receipts; closing_intact_unissued_quantity = closing intact unissued quantity; usable_return_ids = usable return IDs; external_transfer_ids = external-transfer IDs; quarantine_ids = quarantine IDs; wip_ids = WIP IDs; forward_event_ID = forward transfer ID; discarded_unit_ID = discarded-unit ID; custodian = custodian; event_timestamp = timestamps. | m2; kg | each receipt, stock boundary, transfer or rejection event | all receiving periods contributing to this lot and linked opening/closing WIP | survey custody at actual site | per reference flow | supplier labels and build certificate; stock count; dimensional record; scale/tare or exact-build bridge; transfer/waste receipt; exclusive state ledger |
| `cp_survey_packaging` | `survey` | discarded transport packaging | segregation and waste weighing | lot_id; period_id; event_ID; producing_node; material_pool_ID; gross_packaging_kg; tare_packaging_kg; packaging_driver_by_consumer; packaging_complete_driver_total; actual_net_discarded_mass_j; unit_shipment; material; rack_owner; packaging_state; gross_and_tare_mass; reusable_return_quantity; waste_custodian; event_timestamp | Separate discarded actual packaging by material and state, weigh net waste and exclude returned racks or reusable packaging from waste. Attribute shared shipment packaging by an evidenced physical driver over all covered units, preserve owner and destinations, and divide each waste amount by A. Stable-key mapping: survey_discarded_packaging_kg is the sum of actual_net_discarded_mass_j for this survey lot. Exclude returned racks before summation; retain distinct material/state j and complete shipment attribution evidence rather than assuming a kg-per-IGU packaging factor. Field definitions: lot_id = lot; unit_shipment = unit shipment; material = material; rack_owner = rack owner; packaging_state = packaging state; gross_and_tare_mass = gross and tare mass; reusable_return_quantity = reusable return quantity; waste_custodian = waste custodian; event_ID = event ID; event_timestamp = date. | kg | each unpacking or waste dispatch | all included receiving/unpacking events | survey unpacking area | per reference flow | tare records; material segregation photographs; rack return receipt; waste dispatch receipt; shared-packaging allocation record |
| `cp_glaze_handoffs` | `glaze` | forward and corrective unit receipts and retained-unit output | paired transfer and unit-pass ledger | lot_id; period_id; event_ID; producing_node; unit_ID; rectangular_outline_confirmed; outline_evidence; actual_unit_width_m; actual_unit_height_m; forward_event_ID; corrective_event_ID; unit_state_event_IDs; opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; carrying_burden_link; opening_ID; build; measured_unit_area; pass_id; retained_output_id; event_timestamp; accepted_rejected_wip_state; original_carrying_burden_link | Pair every survey receipt with its survey forward event. Pair actual intact corrective receipts with accept_rework_return using unit and event IDs and equal area. Record each actual retained-unit forward pass to accept separately; preserve correction pass history and opening/closing WIP. Sum each distinct event stream separately and divide by A; do not repurchase the same IGU in a reverse transfer. Stable-key mapping: actual_unit_area = actual_unit_width_m * actual_unit_height_m for the matched actual unit ID, with received measured-dimension evidence. glaze_forward_received_area sums distinct survey forward receipt events. glaze_rework_received_area sums distinct corrective_event_ID receipts from accept. glaze_retained_forward_area sums distinct retained forward event/pass areas. Match exact counterpart event, unit ID and area; processed-WIP aliases remain separate state/event records. Field definitions: lot_id = lot; opening_ID = opening ID; unit_ID = unit ID; build = build; measured_unit_area = measured unit area; event_ID = event ID; pass_id = pass ID; forward_event_ID = received survey-transfer ID; corrective_event_ID = received accept-rework ID; retained_output_id = retained-output ID; event_timestamp = dates; accepted_rejected_wip_state = accepted/rejected/WIP state; original_carrying_burden_link = original carrying-burden link. | m2 | each custody or gate transfer and each correction pass | all glazing and correction periods through final acceptance | glaze node and identified receiving/sending counterparts | per reference flow | matched signed handoffs; measured unit register; pass history; state photographs; carrying-burden ledger |
| `cp_glaze_materials` | `glaze` | new support blocks, gaskets, mechanical retention and usable material exits | material stock and fitting records | lot_id; period_id; event_ID; producing_node; material_pool_ID; weighed_net_kg; actual_length_m; documented_same_grade_kg_per_m; actual_count; documented_same_grade_kg_per_item; opening_intact_unissued_i_kg; receipt_i_kg; closing_intact_unissued_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; actual_original_upstream_burden_per_matching_unit; original_gross_draw_material_burden; actual_usable_exit_quantity; actual_mass_method; actual_grade_and_profile; manufacturer_approval; new_existing_status; opening_intact_unissued_stock; receipts; closing_intact_unissued_stock; length_count_if_recorded; actual_linear_item_mass_bridge; usable_supplier_returns; usable_external_transfers; issued_rework_quantity; wip; exit_custodian | For each actual new material/specification, weigh stock/receipts or convert actual length/count with a documented same-grade bridge. Calculate gross draw as opening plus receipts minus closing intact unissued stock, including real usable boundary exits. Record unused return and external transfer as separate positive kg outputs, excluding both from closing stock. Keep processed rejects and WIP separate, retain each actual correction draw, and divide each stream by A. Existing retained beads/fasteners are documented as received components without new purchase. Stable-key mapping: Choose exactly one actual_mass_method for each material/event: weighed net kg, actual length times evidenced same-grade/profile kg/m, or actual count times evidenced same-grade/item kg/item. The resulting actual_material_kg populates the relevant stock/receipt/usable-exit key, indexed by actual i. gross_draw_i_kg comes from glaze_material_gross_draw; setting_blocks_gross_draw_kg, gaskets_gross_draw_kg and beads_fasteners_gross_draw_kg are sums over the respective actual component-role material pools. glaze_usable_exit_kg sums distinct same-unit usable exits by material after retaining identities and original upstream factors. The burden aliases remain this own-node material pool; existing reused components have no new material draw. Field definitions: lot_id = lot; producing_node = node; period_id = period; material_pool_ID = material ID; actual_grade_and_profile = actual grade and profile; manufacturer_approval = manufacturer approval; new_existing_status = new/existing status; opening_intact_unissued_stock = opening intact unissued stock; receipts = receipts; closing_intact_unissued_stock = closing intact unissued stock; length_count_if_recorded = length/count if recorded; actual_linear_item_mass_bridge = actual linear/item mass bridge; usable_supplier_returns = usable supplier returns; usable_external_transfers = usable external transfers; issued_rework_quantity = issued/rework quantity; wip = WIP; exit_custodian = exit custodian; event_ID = event ID. | kg; actual length or count with bridge | each receipt, issue, correction draw, usable exit and stock boundary | all glaze periods and linked material opening/closing pools | glaze material custody at actual site | per reference flow | supplier specification and compatibility approval; scale calibration or actual mass bridge; stock and issue logs; component installation record; exit receipt |
| `cp_glaze_waste` | `glaze` | component offcuts and composite IGU breakage | material-resolved waste and rejection log | lot_id; period_id; event_ID; producing_node; unit_ID; rectangular_outline_confirmed; outline_evidence; actual_unit_width_m; actual_unit_height_m; forward_event_ID; corrective_event_ID; unit_state_event_IDs; opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; carrying_burden_link; material_pool_ID; weighed_net_kg; actual_length_m; actual_count; documented_same_grade_kg_per_m; documented_same_grade_kg_per_item; measured_complete_or_collected_composite_mass_kg; documented_actual_complete_build_kg_per_m2; actual_net_discarded_mass_j; actual_mass_method; actual_build_or_material_grade; rejected_state; event_pass_id; net_waste_mass; tare; exact_build_mass_bridge_if_used; collection_method; destination; custodian; event_timestamp | Segregate component offcuts from composite IGU waste and usable stock exits. Weigh each discarded material/state and complete or collected broken IGU mass, preserving actual unit identity and remaining composite contents. Link every event to glaze activity and waste destination, reconcile it with input/WIP states, and divide each waste stream by A. Stable-key mapping: actual_discarded_unit_area = sum actual_unit_width_m * actual_unit_height_m over the identified discarded unit events. Match unit/build to the complete composite-mass bridge when a bridge is needed; generic glass-only thickness/density is insufficient. glaze_discarded_igu_kg sums actual_discarded_igu_kg from complete_igu_mass_bridge for glaze events. glaze_component_waste_kg sums distinct non-IGU component masses from actual_material_mass_bridge. actual_net_discarded_mass_j preserves both streams separately, with producing_node = glaze. Field definitions: lot_id = lot; producing_node = node; material_pool_ID = unit/material ID; actual_build_or_material_grade = actual build or material grade; rejected_state = rejected state; event_pass_id = event/pass ID; net_waste_mass = net waste mass; tare = tare; exact_build_mass_bridge_if_used = exact-build mass bridge if used; collection_method = collection method; destination = destination; custodian = custodian; event_timestamp = date. | kg | each rejection or waste dispatch | every glaze and correction event included in the lot | glaze waste production and first custodian handover | per reference flow | weighing/tare and bridge evidence; breakage photographs; unit/pass ledger; waste transfer and treatment-boundary record |
| `cp_glaze_releases` | `glaze` | actual conditional non-H2O component-fitting/trimming direct release | actual release-occurrence, species and measurement or validated-factor record | lot_id; period_id; event_ID; producing_node; actual_component_material_ID; species; physical_state_particle_fraction; receiving_medium; release_occurrence_evidence; release_method; measured_species_mass_kg; actual_activity; validated_applicable_species_factor; control_capture_boundary; release_uncertainty; excluded_captured_waste_event_IDs | Record actual fitting/trimming operation and component identity, independently evidence whether a direct release occurred, and identify exact species/material particle basis and environmental receiving compartment. Choose direct sampled species mass or a validated applicable activity factor with actual units/control boundary. Captured offcuts/dust remain waste in cp_glaze_waste and cannot also be directly released. Unknown occurrence/species/medium/amount is a disclosed gap, not zero. Aggregate unique real release events once, retain every actual correction and normalize by final accepted A. Stable-key mapping and field definitions: lot_id = actual installation lot; period_id = actual glazing/correction reporting period; event_ID = unique actual releasing operation event; producing_node = glaze, the actual event owner; actual_component_material_ID = actual new gasket/block/bead/retention-component material/grade involved; not IGU field cutting; species = actual emitted substance/material species with identity evidence; physical_state_particle_fraction = actual physical state or particle-size/material fraction, not an inferred generic dust identity; receiving_medium = actual environmental receiving compartment; release_occurrence_evidence = independent actual observation/measurement/validated operation evidence of occurrence or evidenced absence; release_method = one actual direct mass or applicable activity-factor method per physical event; measured_species_mass_kg = actual sampled/direct species mass in kg with sampling scope; actual_activity = actual fitting/trimming or correction activity in the independently validated factor unit; validated_applicable_species_factor = actual material/species/activity/control-specific independently validated factor with source/evidence ID and uncertainty; control_capture_boundary = actual control and capture boundary; captured offcuts/dust remain waste; release_uncertainty = actual measurement/factor and representativeness uncertainty; excluded_captured_waste_event_IDs = captured glaze-waste events excluded from direct emission to prevent overlap. actual_release_species_kg uses the one chosen method in substance_release_normalization; glaze_species_release_kg aliases its actual own-glaze species/particle/compartment result. Never add a directly measured mass to a factor estimate for the same event. Match excluded_captured_waste_event_IDs to cp_glaze_waste; no release is inferred from an offcut or stock residual. | kg; actual activity and factor units retained | each actual component-fitting/trimming or correction event with a possible release | all relevant included glaze and correction periods through acceptance | actual glaze node and actual environmental receiving compartment | per reference flow | actual material/operation and occurrence evidence; species/particle/medium identity; direct sampling or applicable independently validated factor; actual control boundary; captured-waste exclusion; uncertainty; unique-event ledger |
| `cp_accept_handoffs` | `accept` | retained-unit receipt, actual corrective return and final accepted service | transfer ledger, inspection and signed acceptance | lot_id; period_id; event_ID; producing_node; unit_ID; rectangular_outline_confirmed; outline_evidence; actual_unit_width_m; actual_unit_height_m; forward_event_ID; corrective_event_ID; unit_state_event_IDs; opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; carrying_burden_link; accepted_unit_ID; acceptance_timestamp; acceptance_status; opening_ID; area_convention; forward_event_pass_id; inspection_result; support_retention_and_gasket_inspection; drainage_status; surface_edge_condition; clean_status; held_rejected_state; acceptance_signature; original_burden_link | Match actual retained-unit receipt to the glaze forward event. Measure unit area and record every actual inspection and intact corrective-return event; pair returned area with glaze_rework_feed. Determine A from unique finally accepted unit IDs only, after approved support, retention, drainage and clean/undamaged checks. Keep held, discarded and repeated-pass units outside A. Divide each transfer event stream by A, and report final service as 1 m2 from A/A. Stable-key mapping: actual_unit_area = actual_unit_width_m * actual_unit_height_m using the same actual factory-unit outline convention. accepted_unit_area aliases actual_unit_area for unique accepted_unit_ID records only; A is the output of accepted_unit_area. accept_forward_received_area sums distinct retained forward receipt events; accept_rework_sent_area sums distinct corrective_event_ID actual intact-return events. A is shared only as the final accepted-area denominator by other node protocols; their raw custody quantities are never replaced with A. Field definitions: lot_id = lot; opening_ID = opening ID; unit_ID = unit ID; actual_unit_width_m = actual width; actual_unit_height_m = height; area_convention = area convention; forward_event_pass_id = forward event/pass ID; inspection_result = inspection result; support_retention_and_gasket_inspection = support/retention and gasket inspection; drainage_status = drainage status; surface_edge_condition = surface/edge condition; clean_status = clean status; corrective_event_ID = corrective-return event; held_rejected_state = held/rejected state; acceptance_signature = acceptance signature; acceptance_timestamp = acceptance date; period_id = period; original_burden_link = original burden link. | m2 | each handoff, inspection, correction and final acceptance | all final-inspection and correction periods through first acceptance | accept node and customer acceptance gate | per reference flow | matched transfer ledger; measured unit register; project/manufacturer acceptance criteria; drainage and retention checklist; signed unique-unit acceptance |
| `cp_accept_water` | `accept` | supplied cleaning water, collected wastewater and actual vapour | water stock/meter, fate and evidence records | lot_id; period_id; event_ID; producing_node; opening_intact_unused_i_kg; receipt_i_kg; closing_intact_unused_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; water_volume_m3; evidenced_water_density_kg_per_m3; opening_processed_retained_water_kg; actual_collected_wastewater_mixture_kg; wastewater_water_content; closing_processed_retained_water_kg; other_separately_measured_collected_water_kg; independently_evidenced_cleaning_H2O_vapour_kg; vapour_species; vapour_receiving_medium; evaporation_evidence_ID; water_fraction_uncertainty; material_pool_ID; actual_original_upstream_burden_per_matching_unit; original_gross_draw_material_burden; actual_usable_exit_quantity; water_provider_grade; opening_intact_unused_water; water_receipts_or_metered_supply; closing_unused_water; usable_water_returns_and_transfers; cleaning_event; water_content_of_cleaning_formulations; wastewater_mixture_mass_and_water_fraction; water_in_spent_wipes; opening_closing_retained_surface_or_equipment_water; actual_h2o_vapour_measurement_or_validated_evaporation_evidence; rain_runoff_exclusion; fate_id; uncertainty | Weigh water or meter its actual volume with the recorded density/temperature bridge; calculate supplied-water gross draw as opening plus receipts minus closing unused stock, with usable exits separately retained. Determine water supplied in actual cleaning formulations without double entering mixture mass. Measure collected wastewater and water content, spent-wipe water and retained/closing water independently. Quantify actual H2O vapour only with measurement or validated operation-specific evidence; never assign residual water to air by default. Reconcile mutually exclusive water fates including unused exits and opening/closing processed water. Divide each actual inventory stream by A; keep an unclosed balance as a data-quality finding. Stable-key mapping: When volume records are used, receipt_i_kg = water_volume_m3 * evidenced_water_density_kg_per_m3; otherwise use actual net kg. cleanup_water_gross_draw_kg aliases cleanup_gross_draw_i_kg from cleanup_stock_draw for supplied water only. actual_unused_water_exit_kg is that water pool supplier return plus external transfer. actual_collected_wastewater_mixture_kg is the same physical mixture value used by cleanup_wastewater; accept_collected_wastewater_kg aliases it. collected_wastewater_water_kg = actual_collected_wastewater_mixture_kg * wastewater_water_content, with its actual measured mass fraction. spent_wipe_water_kg is imported by matched fate/event ID from cp_accept_waste constituent measurement, not reweighed as another exit. actual_water_in_consumed_cleaning_formulations_kg is the upstream output of cleaning_formulation_water using cp_accept_materials only. evidenced_water_vapour_kg and accept_evidenced_water_vapour_kg both alias independently_evidenced_cleaning_H2O_vapour_kg for H2O emission to air / unspecified. Retained and other-collected-water keys require independent pool evidence and cannot be balance residuals. Field definitions: lot_id = lot; period_id = period; water_provider_grade = water provider/grade; opening_intact_unused_water = opening intact unused water; water_receipts_or_metered_supply = water receipts or metered supply; closing_unused_water = closing unused water; usable_water_returns_and_transfers = usable water returns and transfers; cleaning_event = cleaning event; water_content_of_cleaning_formulations = water content of cleaning formulations; wastewater_mixture_mass_and_water_fraction = wastewater mixture mass and water fraction; water_in_spent_wipes = water in spent wipes; opening_closing_retained_surface_or_equipment_water = opening/closing retained surface or equipment water; actual_h2o_vapour_measurement_or_validated_evaporation_evidence = actual H2O-vapour measurement or validated evaporation evidence; rain_runoff_exclusion = rain/runoff exclusion; fate_id = fate ID; uncertainty = uncertainty. | kg; original metered volume and bridge | each cleaning event, collection, usable exit and stock boundary | all cleaning/recleaning events and linked opening/closing water pools | accept cleaning area; actual water collection and air release | per reference flow | meter/scale record; density bridge if needed; formulation/SDS water content; wastewater weights; wet/dry wipe determination; retention evidence; evaporation method validation; uncertainty and closure ledger |
| `cp_accept_materials` | `accept` | cleaning/protection supplies and usable cleanup-material exits including water | material stock and exit ledger | lot_id; period_id; event_ID; producing_node; material_pool_ID; weighed_net_kg; actual_length_m; documented_same_grade_kg_per_m; actual_count; documented_same_grade_kg_per_item; opening_intact_unissued_i_kg; receipt_i_kg; closing_intact_unissued_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; actual_original_upstream_burden_per_matching_unit; original_gross_draw_material_burden; actual_usable_exit_quantity; opening_intact_unused_i_kg; closing_intact_unused_i_kg; evidenced_actual_water_fraction_i; cleaning_formulation_pool_ID; actual_mass_method; water_exit_event_ID; actual_material_provider; formulation_grade; coating_compatibility; opening_intact_unissued_stock; receipts; closing_intact_unissued_stock; reusable_equipment_status; original_length_count; actual_mass_bridge; unused_water_exit_ids; usable_supplier_returns; usable_external_transfers; destination; wip | For each actual cleaning/protection material, weigh or use an actual material-specific bridge and calculate gross draw as opening plus receipts minus closing intact unissued stock. Separately sum positive usable returns and external transfers by the corresponding input material in kg, including water exits linked to cp_accept_water; do not record those exits twice. Exclude returned/transferred quantities from closing stock, distinguish processed WIP and spent materials, preserve original unused-material burden only, and divide each attributable quantity by A. Stable-key mapping: Use actual_material_mass_bridge for the real material/event. cleanup_gross_draw_i_kg comes from cleanup_stock_draw, separately for every actual material/formulation. cleanup_supplies_gross_draw_kg sums only actual cleaning/protection material pools, excluding supplied water already on cleanup_water. For actual formulation i, consumed_formulation_i_kg = cleanup_gross_draw_i_kg - unused_supplier_return_i_kg - unused_external_transfer_i_kg; multiply this exclusive net consumed mixture by evidenced_actual_water_fraction_i, then sum only actual water-containing formulation pools to obtain actual_water_in_consumed_cleaning_formulations_kg. Never multiply formula gross draw containing unused exits by a water fraction. accept_usable_cleanup_exit_kg sums distinct usable supplied-water and material exits in kg; water events link to cp_accept_water once. Burden aliases refer only to original actual material pools, not service burdens. Field definitions: lot_id = lot; producing_node = node; period_id = period; actual_material_provider = actual material/provider; formulation_grade = formulation/grade; coating_compatibility = coating compatibility; opening_intact_unissued_stock = opening intact unissued stock; receipts = receipts; closing_intact_unissued_stock = closing intact unissued stock; reusable_equipment_status = reusable equipment status; original_length_count = original length/count; actual_mass_bridge = actual mass bridge; unused_water_exit_ids = unused water exit IDs; usable_supplier_returns = usable supplier returns; usable_external_transfers = usable external transfers; destination = destination; event_ID = event ID; wip = WIP. | kg; original count or length with bridge | each receipt, issue, cleaning correction, usable exit and stock boundary | all included cleaning/protection periods | accept custody and first usable-exit custodian | per reference flow | supplier/SDS and compatibility evidence; calibrated weighing/bridge; stock/issue ledger; water cross-reference; return/transfer receipt; unique event ownership |
| `cp_accept_waste` | `accept` | spent cleaning solids and late composite IGU discard | segregated waste weighing and unit rejection record | lot_id; period_id; event_ID; producing_node; unit_ID; rectangular_outline_confirmed; outline_evidence; actual_unit_width_m; actual_unit_height_m; forward_event_ID; corrective_event_ID; unit_state_event_IDs; opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; carrying_burden_link; material_pool_ID; weighed_net_kg; actual_length_m; actual_count; documented_same_grade_kg_per_m; documented_same_grade_kg_per_item; measured_complete_or_collected_composite_mass_kg; documented_actual_complete_build_kg_per_m2; actual_net_discarded_mass_j; spent_wipe_wet_mass_kg; measured_spent_wipe_water_fraction; wipe_water_evidence_ID; actual_mass_method; actual_igu_build; waste_state; event_pass_id; wet_mass; tare; measured_water_content; independently_weighed_composite_igu_mass_or_exact_build_bridge; rejected_state; destination; custodian; event_timestamp | Weigh separated spent cleaning material and residues, documenting water already included in wet mass; exclude separately collected wastewater. Separately weigh actual composite IGUs discarded at accept, preserving actual build and ID rather than converting area into glass-only mass. Keep intact corrective returns and held units out of waste. Link each waste stream to its producing event and custodian, reconcile water with cp_accept_water, and divide each amount by A. Stable-key mapping: actual_discarded_unit_area uses actual discarded-unit dimensions from its matched unit ledger, preserving actual complete build. accept_discarded_igu_kg sums actual own-accept composite discarded mass using complete_igu_mass_bridge; producing_node = accept. accept_collected_solid_waste_kg sums actual collected non-IGU residues/spent consumable net mixture masses. spent_wipe_water_kg = spent_wipe_wet_mass_kg * measured_spent_wipe_water_fraction from a water-specific validated determination; a generic wet-minus-dry result that includes other volatile components is not sufficient. Pass this same fate-ID water constituent to cp_accept_water without another physical inventory output. Field definitions: lot_id = lot; producing_node = node; material_pool_ID = material/unit ID; actual_igu_build = actual IGU build; waste_state = waste state; event_pass_id = event/pass ID; wet_mass = wet mass; tare = tare; measured_water_content = measured water content; independently_weighed_composite_igu_mass_or_exact_build_bridge = independently weighed composite IGU mass or exact-build bridge; rejected_state = rejected state; destination = destination; custodian = custodian; event_timestamp = date. | kg | each cleaning-waste or unit-discard event | all inspection/cleaning/correction periods included in the lot | accept waste production and first custodian handover | per reference flow | scale/tare evidence; wet/dry material determination; unit/build mass bridge; discard decision; waste dispatch record; water cross-reference |
| `cp_accept_releases` | `accept` | actual substance and compartment specific direct releases other than separately accounted H2O vapour | direct release measurement or validated activity-factor record | lot_id; period_id; event_ID; producing_node; measured_species_mass_kg; actual_activity; validated_applicable_species_factor; species; receiving_medium; release_method; event; actual_cleaning_chemistry; substance_species; cas_where_available; physical_state_particle_fraction; receiving_compartment; measured_concentration_and_sampled_volume_or_activity_and_validated_factor; capture_efficiency_where_relevant; mass_unit; uncertainty; excluded_collected_waste_and_h2o_vapour_ids | Establish the actual substance and receiving compartment before quantification. Use a traceable direct measurement or an applicable validated activity-factor method with its actual activity and control boundary. Expand each independent species/medium exchange, exclude collected waste/wastewater and separately recorded H2O vapour, retain all factor evidence and uncertainty, and divide the actual attributable mass by A. A missing record remains a gap, not a zero or generic pollutant. Stable-key mapping: actual_release_species_kg comes from the one chosen method in substance_release_normalization; accept_species_release_kg aliases it per actual species/receiving-medium pair. The factor method uses actual_activity in its matching factor unit. Direct measured mass is not added to a factor estimate for the same event. No broad VOC/dust identity is synthesized. Field definitions: lot_id = lot; event = event; actual_cleaning_chemistry = actual cleaning chemistry; substance_species = substance/species; cas_where_available = CAS where available; physical_state_particle_fraction = physical state/particle fraction; receiving_compartment = receiving compartment; measured_concentration_and_sampled_volume_or_activity_and_validated_factor = measured concentration and sampled volume or activity and validated factor; capture_efficiency_where_relevant = capture efficiency where relevant; mass_unit = mass unit; uncertainty = uncertainty; excluded_collected_waste_and_h2o_vapour_ids = excluded collected waste and H2O-vapour IDs. | kg; actual measurement basis | each actual releasing operation or representative validated measurement period | all relevant cleaning/recleaning operations in the lot | accept node and actual environmental receiving compartment | per reference flow | sampling report or validated factor source and applicability; chemical identity; capture boundary; measurement uncertainty; duplicate-release checks |
| `cp_survey_power` | `survey` | survey electricity | meter and complete shared-attribution record | lot_id; period_id; event_ID; producing_node; supplier_id; meter_ID; master_period_ID; power_accounting_mode; direct_node_kwh; actual_MJ; original_energy_unit; shared_total_kwh; actual_node_weight; actual_weights_of_all_consumers; bundled_energy_scope; supplier; voltage; technology_mix; start_end_readings; direct_attributable_kwh; shared_total_event_id; complete_consumer_list; actual_causal_weight_per_consumer; total_weight; allocated_share; service_bundle_boundary | Read the own-node meter and subtract start from end for each actual period, with documented unit conversion. For a genuinely shared meter record the total once and use direct submetering first; otherwise collect positive complete causal weights for all consumers and calculate this node share as total times its weight divided by complete total weight. Reconcile all shares to the once-counted total, exclude energy already contained in charged service scope, sum this node and lot shares across periods, and divide by A. Stable-key mapping: Map original MJ to actual_kwh by energy_unit_conversion; actual recorded kWh is preserved. Select exactly one mode per master_period_ID across all overlapping nodes: direct_complete uses actual direct_node_kwh and adds no full-master allocation; shared_full uses node_kwh from shared_power_attribution over the complete consumer set and adds no overlapping direct quantity. Partial direct plus a full-master share is forbidden, and a partial-direct/residual method is not declared here. If direct coverage is incomplete, use a complete evidenced shared_full method without separately adding the partial meters, or retain a data gap. own_node_period_kwh aliases the selected direct_node_kwh or node_kwh only. survey_attributed_kwh sums selected own_node_period_kwh across actual included intervals after removing any already bundled energy. Complete shared weights have a positive sum and all shares reconcile to the once-counted master total. Field definitions: lot_id = lot; producing_node = node; period_id = period; supplier = supplier; voltage = voltage; technology_mix = technology/mix; meter_ID = meter ID; start_end_readings = start/end readings; original_energy_unit = original energy unit; direct_attributable_kwh = direct attributable kWh; shared_total_event_id = shared-total event ID; complete_consumer_list = complete consumer list; actual_causal_weight_per_consumer = actual causal weight per consumer; total_weight = total weight; allocated_share = allocated share; service_bundle_boundary = service bundle boundary. | kWh; original MJ if used | each meter period and changed shared-consumer set | every included survey and correction period | actual survey activity plus full external consumer set for a shared total | per reference flow | meter calibration/readings; supplier invoice; complete consumer weights and rationale; unit conversion; bundle-scope check; allocation closure |
| `cp_survey_service` | `survey` | survey contracted access/equipment/storage availability | contract, invoice and availability attribution | lot_id; period_id; event_ID; producing_node; provider_id; asset_service_ID; contract_ID; recorded_actual_paid_hours; billed_days; documented_contract_hours_per_day; actual_node_contract_weight; actual_contract_weights_of_all_consumers; paid_idle_hours; contract_accounting_mode; provider; asset_service_identity; scope_and_bundled_energy_operator; actual_start_end; billed_unit; actual_paid_hours_or_contract_specific_hours_per_day; master_event_id; all_consumer_periods; reserved_availability_or_causal_weights; complete_positive_weight_sum; node_share; correction_use | Inspect each actual provider contract and its scope. Collect paid availability including idle time in actual hours; convert a billed day only with the contract-specific time basis. For a shared availability period, enumerate all node/job/period consumers, collect actual reserved-availability or other justified contract drivers with positive complete denominator, and assign the once-recorded total proportionally. Reconcile every consumer share to the total and avoid duplicate bundled burdens. Sum only this node/lot shares over all real periods and divide by A. Stable-key mapping: actual_contract_hours comes from contract_hours_conversion using the actual recorded hours or actual billed days times documented contract-specific hours per day. For a direct own-node contract own_node_attributed_paid_hours aliases actual_contract_hours. For a shared contract it aliases node_service_hours from shared_service_attribution, with complete positive weight denominator and no additional whole-invoice or direct charge for the same quantity. survey_attributed_contract_hours sums actual own_node_attributed_paid_hours across included periods. Availability weights retain paid idle and actual reservation responsibility; they do not silently substitute productive tool time or invent a shift. Field definitions: lot_id = lot; producing_node = node; provider = provider; asset_service_identity = asset/service identity; contract_ID = contract ID; scope_and_bundled_energy_operator = scope and bundled energy/operator; actual_start_end = actual start/end; billed_unit = billed unit; actual_paid_hours_or_contract_specific_hours_per_day = actual paid hours or contract-specific hours-per-day; paid_idle_hours = paid idle hours; master_event_id = master event ID; all_consumer_periods = all consumer-periods; reserved_availability_or_causal_weights = reserved-availability or causal weights; complete_positive_weight_sum = complete positive weight sum; node_share = node share; correction_use = correction use. | h; original billed unit | each contract/invoice period and consumer-set change | every paid survey service period including idle and correction | actual survey use plus complete shared contract consumer set | per reference flow | provider contract/invoice; actual hours-per-day evidence if relevant; paid idle and reserved-availability logs; complete weights; bundle declaration; allocation closure |
| `cp_glaze_power` | `glaze` | glaze electricity | meter and complete shared-attribution record | lot_id; period_id; event_ID; producing_node; supplier_id; meter_ID; master_period_ID; power_accounting_mode; direct_node_kwh; actual_MJ; original_energy_unit; shared_total_kwh; actual_node_weight; actual_weights_of_all_consumers; bundled_energy_scope; supplier; voltage; technology_mix; start_end_readings; direct_attributable_kwh; shared_total_event_id; complete_consumer_list; actual_causal_weight_per_consumer; total_weight; allocated_share; service_bundle_boundary | Read the own-node meter and subtract start from end for each actual period, with documented unit conversion. For a genuinely shared meter record the total once and use direct submetering first; otherwise collect positive complete causal weights for all consumers and calculate this node share as total times its weight divided by complete total weight. Reconcile all shares to the once-counted total, exclude energy already contained in charged service scope, sum this node and lot shares across periods, and divide by A. Stable-key mapping: Map original MJ to actual_kwh by energy_unit_conversion; actual recorded kWh is preserved. Select exactly one mode per master_period_ID across all overlapping nodes: direct_complete uses actual direct_node_kwh and adds no full-master allocation; shared_full uses node_kwh from shared_power_attribution over the complete consumer set and adds no overlapping direct quantity. Partial direct plus a full-master share is forbidden, and a partial-direct/residual method is not declared here. If direct coverage is incomplete, use a complete evidenced shared_full method without separately adding the partial meters, or retain a data gap. own_node_period_kwh aliases the selected direct_node_kwh or node_kwh only. glaze_attributed_kwh sums selected own_node_period_kwh across actual included intervals after removing any already bundled energy. Complete shared weights have a positive sum and all shares reconcile to the once-counted master total. Field definitions: lot_id = lot; producing_node = node; period_id = period; supplier = supplier; voltage = voltage; technology_mix = technology/mix; meter_ID = meter ID; start_end_readings = start/end readings; original_energy_unit = original energy unit; direct_attributable_kwh = direct attributable kWh; shared_total_event_id = shared-total event ID; complete_consumer_list = complete consumer list; actual_causal_weight_per_consumer = actual causal weight per consumer; total_weight = total weight; allocated_share = allocated share; service_bundle_boundary = service bundle boundary. | kWh; original MJ if used | each meter period and changed shared-consumer set | every included glaze and correction period | actual glaze activity plus full external consumer set for a shared total | per reference flow | meter calibration/readings; supplier invoice; complete consumer weights and rationale; unit conversion; bundle-scope check; allocation closure |
| `cp_glaze_service` | `glaze` | glaze contracted access/equipment/storage availability | contract, invoice and availability attribution | lot_id; period_id; event_ID; producing_node; provider_id; asset_service_ID; contract_ID; recorded_actual_paid_hours; billed_days; documented_contract_hours_per_day; actual_node_contract_weight; actual_contract_weights_of_all_consumers; paid_idle_hours; contract_accounting_mode; provider; asset_service_identity; scope_and_bundled_energy_operator; actual_start_end; billed_unit; actual_paid_hours_or_contract_specific_hours_per_day; master_event_id; all_consumer_periods; reserved_availability_or_causal_weights; complete_positive_weight_sum; node_share; correction_use | Inspect each actual provider contract and its scope. Collect paid availability including idle time in actual hours; convert a billed day only with the contract-specific time basis. For a shared availability period, enumerate all node/job/period consumers, collect actual reserved-availability or other justified contract drivers with positive complete denominator, and assign the once-recorded total proportionally. Reconcile every consumer share to the total and avoid duplicate bundled burdens. Sum only this node/lot shares over all real periods and divide by A. Stable-key mapping: actual_contract_hours comes from contract_hours_conversion using the actual recorded hours or actual billed days times documented contract-specific hours per day. For a direct own-node contract own_node_attributed_paid_hours aliases actual_contract_hours. For a shared contract it aliases node_service_hours from shared_service_attribution, with complete positive weight denominator and no additional whole-invoice or direct charge for the same quantity. glaze_attributed_contract_hours sums actual own_node_attributed_paid_hours across included periods. Availability weights retain paid idle and actual reservation responsibility; they do not silently substitute productive tool time or invent a shift. Field definitions: lot_id = lot; producing_node = node; provider = provider; asset_service_identity = asset/service identity; contract_ID = contract ID; scope_and_bundled_energy_operator = scope and bundled energy/operator; actual_start_end = actual start/end; billed_unit = billed unit; actual_paid_hours_or_contract_specific_hours_per_day = actual paid hours or contract-specific hours-per-day; paid_idle_hours = paid idle hours; master_event_id = master event ID; all_consumer_periods = all consumer-periods; reserved_availability_or_causal_weights = reserved-availability or causal weights; complete_positive_weight_sum = complete positive weight sum; node_share = node share; correction_use = correction use. | h; original billed unit | each contract/invoice period and consumer-set change | every paid glaze service period including idle and correction | actual glaze use plus complete shared contract consumer set | per reference flow | provider contract/invoice; actual hours-per-day evidence if relevant; paid idle and reserved-availability logs; complete weights; bundle declaration; allocation closure |
| `cp_accept_power` | `accept` | accept electricity | meter and complete shared-attribution record | lot_id; period_id; event_ID; producing_node; supplier_id; meter_ID; master_period_ID; power_accounting_mode; direct_node_kwh; actual_MJ; original_energy_unit; shared_total_kwh; actual_node_weight; actual_weights_of_all_consumers; bundled_energy_scope; supplier; voltage; technology_mix; start_end_readings; direct_attributable_kwh; shared_total_event_id; complete_consumer_list; actual_causal_weight_per_consumer; total_weight; allocated_share; service_bundle_boundary | Read the own-node meter and subtract start from end for each actual period, with documented unit conversion. For a genuinely shared meter record the total once and use direct submetering first; otherwise collect positive complete causal weights for all consumers and calculate this node share as total times its weight divided by complete total weight. Reconcile all shares to the once-counted total, exclude energy already contained in charged service scope, sum this node and lot shares across periods, and divide by A. Stable-key mapping: Map original MJ to actual_kwh by energy_unit_conversion; actual recorded kWh is preserved. Select exactly one mode per master_period_ID across all overlapping nodes: direct_complete uses actual direct_node_kwh and adds no full-master allocation; shared_full uses node_kwh from shared_power_attribution over the complete consumer set and adds no overlapping direct quantity. Partial direct plus a full-master share is forbidden, and a partial-direct/residual method is not declared here. If direct coverage is incomplete, use a complete evidenced shared_full method without separately adding the partial meters, or retain a data gap. own_node_period_kwh aliases the selected direct_node_kwh or node_kwh only. accept_attributed_kwh sums selected own_node_period_kwh across actual included intervals after removing any already bundled energy. Complete shared weights have a positive sum and all shares reconcile to the once-counted master total. Field definitions: lot_id = lot; producing_node = node; period_id = period; supplier = supplier; voltage = voltage; technology_mix = technology/mix; meter_ID = meter ID; start_end_readings = start/end readings; original_energy_unit = original energy unit; direct_attributable_kwh = direct attributable kWh; shared_total_event_id = shared-total event ID; complete_consumer_list = complete consumer list; actual_causal_weight_per_consumer = actual causal weight per consumer; total_weight = total weight; allocated_share = allocated share; service_bundle_boundary = service bundle boundary. | kWh; original MJ if used | each meter period and changed shared-consumer set | every included accept and correction period | actual accept activity plus full external consumer set for a shared total | per reference flow | meter calibration/readings; supplier invoice; complete consumer weights and rationale; unit conversion; bundle-scope check; allocation closure |
| `cp_accept_service` | `accept` | accept contracted access/equipment/storage availability | contract, invoice and availability attribution | lot_id; period_id; event_ID; producing_node; provider_id; asset_service_ID; contract_ID; recorded_actual_paid_hours; billed_days; documented_contract_hours_per_day; actual_node_contract_weight; actual_contract_weights_of_all_consumers; paid_idle_hours; contract_accounting_mode; provider; asset_service_identity; scope_and_bundled_energy_operator; actual_start_end; billed_unit; actual_paid_hours_or_contract_specific_hours_per_day; master_event_id; all_consumer_periods; reserved_availability_or_causal_weights; complete_positive_weight_sum; node_share; correction_use | Inspect each actual provider contract and its scope. Collect paid availability including idle time in actual hours; convert a billed day only with the contract-specific time basis. For a shared availability period, enumerate all node/job/period consumers, collect actual reserved-availability or other justified contract drivers with positive complete denominator, and assign the once-recorded total proportionally. Reconcile every consumer share to the total and avoid duplicate bundled burdens. Sum only this node/lot shares over all real periods and divide by A. Stable-key mapping: actual_contract_hours comes from contract_hours_conversion using the actual recorded hours or actual billed days times documented contract-specific hours per day. For a direct own-node contract own_node_attributed_paid_hours aliases actual_contract_hours. For a shared contract it aliases node_service_hours from shared_service_attribution, with complete positive weight denominator and no additional whole-invoice or direct charge for the same quantity. accept_attributed_contract_hours sums actual own_node_attributed_paid_hours across included periods. Availability weights retain paid idle and actual reservation responsibility; they do not silently substitute productive tool time or invent a shift. Field definitions: lot_id = lot; producing_node = node; provider = provider; asset_service_identity = asset/service identity; contract_ID = contract ID; scope_and_bundled_energy_operator = scope and bundled energy/operator; actual_start_end = actual start/end; billed_unit = billed unit; actual_paid_hours_or_contract_specific_hours_per_day = actual paid hours or contract-specific hours-per-day; paid_idle_hours = paid idle hours; master_event_id = master event ID; all_consumer_periods = all consumer-periods; reserved_availability_or_causal_weights = reserved-availability or causal weights; complete_positive_weight_sum = complete positive weight sum; node_share = node share; correction_use = correction use. | h; original billed unit | each contract/invoice period and consumer-set change | every paid accept service period including idle and correction | actual accept use plus complete shared contract consumer set | per reference flow | provider contract/invoice; actual hours-per-day evidence if relevant; paid idle and reserved-availability logs; complete weights; bundle declaration; allocation closure |


### Calculation Rules

The formulas use node- and material-resolved raw totals before normalization. A, unit areas and stock terms retain the definitions and exclusive states above. All symbols are raw fields or calculated totals described by their linked protocol; field values must be collected rather than filled with default quantities. Calculation ids identify rules for the projected methodology; no per-item-to-mass conversion is implied by the reference-area normalization.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_unit_area` | reference_service | accepted_unit_area = actual_unit_width_m * actual_unit_height_m; A = sum accepted_unit_area over unique finally accepted unit IDs; A must be positive | actual_unit_width_m; actual_unit_height_m; accepted_unit_ID; cp_accept_handoffs | A |  |
| `survey_interface_area` | frame_interface | surveyed_opening_intensity = surveyed_opening_area / A; preserve the receiving-interface area convention and assign no new-frame production from this documentary input | surveyed_opening_area; A; cp_survey_interface | surveyed_opening_intensity | |
| `igu_stock_draw` | supplied_igus | gross_igu_draw = survey_opening_intact_unissued_area + survey_igu_receipt_area - survey_closing_intact_unissued_area; supplied_igu_intensity = gross_igu_draw / A | survey_opening_intact_unissued_area; survey_igu_receipt_area; survey_closing_intact_unissued_area; A; cp_survey_igus | supplied_igu_intensity | |
| `igu_usable_exit` | unused_igu_return | survey_usable_exit_area = survey_unused_supplier_return_area + survey_unused_external_transfer_area; usable_igu_exit_intensity = survey_usable_exit_area / A; both exit pools are mutually exclusive and absent from closing stock | survey_unused_supplier_return_area; survey_unused_external_transfer_area; A; cp_survey_igus | usable_igu_exit_intensity | |
| `igu_net_diagnostic` | supplied_igus; unused_igu_return | diagnostic_consumed_igu_area = gross_igu_draw - survey_unused_supplier_return_area - survey_unused_external_transfer_area; use only for physical reconciliation and original-material burden attribution, never as another input or a negative credit | gross_igu_draw; survey_unused_supplier_return_area; survey_unused_external_transfer_area; cp_survey_igus | diagnostic_consumed_igu_area | |
| `actual_material_mass_bridge` | setting_blocks; gaskets; beads_fasteners; cleanup_supplies; glazing_offcuts; cleanup_waste | actual_material_kg = weighed_net_kg or actual_length_m * documented_same_grade_kg_per_m or actual_count * documented_same_grade_kg_per_item; choose exactly the evidenced method for the actual material | weighed_net_kg; actual_length_m; documented_same_grade_kg_per_m; actual_count; documented_same_grade_kg_per_item; cp_glaze_materials; cp_glaze_waste; cp_accept_materials; cp_accept_waste | actual_material_kg | |
| `complete_igu_mass_bridge` | survey_rejected_igu_waste; broken_igus; accept_rejected_igu_waste | actual_discarded_igu_kg = measured_complete_or_collected_composite_mass_kg or actual_discarded_unit_area * documented_actual_complete_build_kg_per_m2; use actual build evidence and never omit seals/spacers by assuming pure glass | measured_complete_or_collected_composite_mass_kg; actual_discarded_unit_area; documented_actual_complete_build_kg_per_m2; cp_survey_igus; cp_glaze_waste; cp_accept_waste | actual_discarded_igu_kg | |
| `glaze_material_gross_draw` | setting_blocks; gaskets; beads_fasteners | for each material i, gross_draw_i_kg = opening_intact_unissued_i_kg + receipt_i_kg - closing_intact_unissued_i_kg; normalized_input_i = gross_draw_i_kg / A; gross draw includes usable exits and actual correction draws | opening_intact_unissued_i_kg; receipt_i_kg; closing_intact_unissued_i_kg; A; cp_glaze_materials | normalized_input_i | |
| `glaze_material_usable_exit` | unused_glazing_component_return | for each material i, usable_exit_i_kg = unused_supplier_return_i_kg + unused_external_transfer_i_kg; normalized_exit_i = usable_exit_i_kg / A; sum only after retaining distinct identities and factors | unused_supplier_return_i_kg; unused_external_transfer_i_kg; A; cp_glaze_materials | normalized_exit_i | |
| `glaze_material_net_diagnostic` | setting_blocks; gaskets; beads_fasteners; unused_glazing_component_return | diagnostic_consumed_i_kg = gross_draw_i_kg - unused_supplier_return_i_kg - unused_external_transfer_i_kg; this is diagnostic and original-material attribution only, not a further exchange or credit | gross_draw_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; cp_glaze_materials | diagnostic_consumed_i_kg | |
| `cleanup_stock_draw` | cleanup_water; cleanup_supplies | for each actual water/material i, cleanup_gross_draw_i_kg = opening_intact_unused_i_kg + receipt_i_kg - closing_intact_unused_i_kg; normalized_cleanup_input_i = cleanup_gross_draw_i_kg / A; retain usable exits in gross draw | opening_intact_unused_i_kg; receipt_i_kg; closing_intact_unused_i_kg; A; cp_accept_water; cp_accept_materials | normalized_cleanup_input_i | |
| `cleanup_usable_exit` | unused_cleanup_material_return | for each actual water/material i, cleanup_usable_exit_i_kg = unused_supplier_return_i_kg + unused_external_transfer_i_kg; normalized_cleanup_exit_i = cleanup_usable_exit_i_kg / A; report each exclusive actual exit once in the matching input property/unit | unused_supplier_return_i_kg; unused_external_transfer_i_kg; A; cp_accept_materials; cp_accept_water | normalized_cleanup_exit_i | |
| `cleanup_net_diagnostic` | cleanup_water; cleanup_supplies; unused_cleanup_material_return | diagnostic_cleanup_consumed_i_kg = cleanup_gross_draw_i_kg - unused_supplier_return_i_kg - unused_external_transfer_i_kg; use for diagnostic balance/original-material attribution only, not another physical exchange or credit | cleanup_gross_draw_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; cp_accept_water; cp_accept_materials | diagnostic_cleanup_consumed_i_kg | |
| `forward_transfer_areas` | accepted_igus; glaze_feed; retained_glazing; accept_feed | each_transfer_intensity = sum actual_unit_area over distinct actual events in that one forward stream / A; survey-to-glaze and glaze-to-accept counterpart quantities must match by event, period and unit ID | actual_unit_area; forward_event_ID; unit_ID; A; cp_survey_igus; cp_glaze_handoffs; cp_accept_handoffs | each_transfer_intensity | |
| `corrective_transfer_areas` | accept_rework_return; glaze_rework_feed | corrective_transfer_intensity = sum actual_unit_area over distinct actual intact-return events / A; sending and receiving amounts must match, with original material burden carried and additional activity measured separately | actual_unit_area; corrective_event_ID; unit_ID; A; cp_accept_handoffs; cp_glaze_handoffs | corrective_transfer_intensity | |
| `discarded_mass_normalization` | igu_packaging; survey_rejected_igu_waste; glazing_offcuts; broken_igus; cleanup_waste; accept_rejected_igu_waste | waste_intensity_j = sum actual net discarded mass of material/state j at its producing node / A; preserve distinct component and composite-unit streams and actual custodian | actual_net_discarded_mass_j; producing_node; event_ID; A; cp_survey_packaging; cp_survey_igus; cp_glaze_waste; cp_accept_waste | waste_intensity_j | |
| `cleaning_formulation_water` | cleanup_supplies; cleanup_waste; cleanup_wastewater; accept_water_vapour | for each actual water-containing formulation i, consumed_formulation_i_kg = cleanup_gross_draw_i_kg - unused_supplier_return_i_kg - unused_external_transfer_i_kg; actual_water_in_consumed_cleaning_formulations_kg = sum consumed_formulation_i_kg * evidenced_actual_water_fraction_i over actual cleaning_formulation_pool_IDs; exclude separately supplied water and dry materials, retain mixture gross physical inputs and positive usable exits, and never use gross formulation quantity containing unused exits as consumed water | cleanup_gross_draw_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; evidenced_actual_water_fraction_i; cleaning_formulation_pool_ID; cp_accept_materials | actual_water_in_consumed_cleaning_formulations_kg | |
| `cleaning_water_pool` | cleanup_water; cleanup_supplies; cleanup_waste; cleanup_wastewater; accept_water_vapour | cleaning_water_available_kg = cleanup_water_gross_draw_kg - actual_unused_water_exit_kg + actual_water_in_consumed_cleaning_formulations_kg + opening_processed_retained_water_kg; evidenced_water_fates_kg = collected_wastewater_water_kg + spent_wipe_water_kg + other_separately_measured_collected_water_kg + closing_processed_retained_water_kg + evidenced_water_vapour_kg; water_gap_kg = cleaning_water_available_kg - evidenced_water_fates_kg; every fate is exclusive and the gap remains a finding, never automatic vapour | cleanup_water_gross_draw_kg; actual_unused_water_exit_kg; actual_water_in_consumed_cleaning_formulations_kg; opening_processed_retained_water_kg; collected_wastewater_water_kg; spent_wipe_water_kg; other_separately_measured_collected_water_kg; closing_processed_retained_water_kg; evidenced_water_vapour_kg; cp_accept_water; cp_accept_materials; cp_accept_waste | water_gap_kg | |
| `wastewater_normalization` | cleanup_wastewater | wastewater_intensity = actual_collected_wastewater_mixture_kg / A; water-fate accounting uses the independently evidenced water content and does not add mixture mass again as pure water | actual_collected_wastewater_mixture_kg; wastewater_water_content; A; cp_accept_water | wastewater_intensity | |
| `vapour_normalization` | accept_water_vapour | water_vapour_intensity = independently_evidenced_cleaning_H2O_vapour_kg / A; unresolved water balance is not an input to this emission calculation | independently_evidenced_cleaning_H2O_vapour_kg; A; cp_accept_water | water_vapour_intensity | |
| `energy_unit_conversion` | survey_electricity; glaze_electricity; accept_electricity | actual_kwh = actual_MJ / 3.6 only when original electricity is in MJ; already recorded kWh is preserved | actual_MJ; original_energy_unit; cp_survey_power; cp_glaze_power; cp_accept_power | actual_kwh | |
| `shared_power_attribution` | survey_electricity; glaze_electricity; accept_electricity | only in shared_full mode for each shared master period, node_kwh = shared_total_kwh * actual_node_weight / sum actual_weights_of_all_consumers; complete total weight must be positive; sum all consumer shares equals the full master total; no overlapping direct_node_kwh is added | power_accounting_mode; shared_total_kwh; actual_node_weight; actual_weights_of_all_consumers; cp_survey_power; cp_glaze_power; cp_accept_power | node_kwh | |
| `own_node_power_normalization` | survey_electricity; glaze_electricity; accept_electricity | own_node_period_kwh = direct_node_kwh only in direct_complete mode, or node_kwh only in shared_full mode; node_power_intensity = sum selected own_node_period_kwh across included periods / A; the two modes are exclusive per overlapping master quantity; incomplete direct coverage is a gap unless complete shared_full data replace it without adding partial direct records; exclude already bundled service energy | power_accounting_mode; direct_node_kwh; node_kwh; A; cp_survey_power; cp_glaze_power; cp_accept_power | node_power_intensity | |
| `contract_hours_conversion` | survey_shared_service; glaze_shared_service; accept_shared_service | actual_contract_hours = recorded_actual_paid_hours; when invoiced only in days, actual_contract_hours = billed_days * documented_contract_hours_per_day; include actual paid idle availability and do not assume a shift length | recorded_actual_paid_hours; billed_days; documented_contract_hours_per_day; cp_survey_service; cp_glaze_service; cp_accept_service | actual_contract_hours | |
| `shared_service_attribution` | survey_shared_service; glaze_shared_service; accept_shared_service | node_service_hours = actual_contract_hours * actual_node_contract_weight / sum actual_contract_weights_of_all_consumers; complete total weight is positive; retain full paid availability and reconcile all shares to the master period | actual_contract_hours; actual_node_contract_weight; actual_contract_weights_of_all_consumers; cp_survey_service; cp_glaze_service; cp_accept_service | node_service_hours | |
| `own_node_service_normalization` | survey_shared_service; glaze_shared_service; accept_shared_service | node_service_intensity = sum actual own-node attributed paid hours across included periods / A; never apply a whole shared invoice separately to each node | own_node_attributed_paid_hours; A; cp_survey_service; cp_glaze_service; cp_accept_service | node_service_intensity | |
| `substance_release_normalization` | glaze_other_releases; accept_other_releases | actual_release_species_kg = measured_species_mass_kg or actual_activity * validated_applicable_species_factor; species_release_intensity = actual_release_species_kg / A; use one evidenced method and actual receiving medium per own-node event/exchange; glaze_species_release_kg and accept_species_release_kg alias only their respective own-node actual event result, including actual corrections; captured waste and unknown residuals are not emissions | measured_species_mass_kg; actual_activity; validated_applicable_species_factor; species; receiving_medium; A; cp_glaze_releases; cp_accept_releases | species_release_intensity | |
| `original_material_burden_split` | supplied_igus; setting_blocks; gaskets; beads_fasteners; cleanup_water; cleanup_supplies; unused_igu_return; unused_glazing_component_return; unused_cleanup_material_return | for each compatible material/specification pool, unused_original_upstream_burden = actual_usable_exit_quantity * actual_original_upstream_burden_per_matching_unit; remaining_original_material_burden = original_gross_draw_material_burden - unused_original_upstream_burden; all installation/correction/service burdens remain in the lot and no second input reduction or negative credit is created | actual_usable_exit_quantity; actual_original_upstream_burden_per_matching_unit; original_gross_draw_material_burden; material_pool_ID; cp_survey_igus; cp_glaze_materials; cp_accept_water; cp_accept_materials | remaining_original_material_burden | |
| `processed_wip_carry` | accepted_igus; glaze_feed; retained_glazing; accept_feed; accept_rework_return; glaze_rework_feed; reference_service | reconcile opening processed WIP plus actual processed receipts against actual forward/usable/waste exits and closing processed WIP by unit/state/event; transfer original carrying burden once between linked periods and add only actual new service/material events | opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; unit_state_event_IDs; carrying_burden_link; cp_survey_igus; cp_glaze_handoffs; cp_accept_handoffs | period_reconciliation_record | |

### Stable Raw Keys and Calculation Lineage

Each raw_fields cell is a list of stable ASCII keys only. The full original field descriptions, alias definitions and dimensional mappings are retained in that same protocol's collection_method cell and refer to actual source records. They are not extra measured quantities. The same generic material i or discarded stream j is always indexed by that protocol node, actual material/build, event and period. Alternative weighing or bridge keys are populated only for the chosen evidenced method; an unused alternative is not a fabricated zero. Unit dimensions are actual factory-unit outline dimensions, and material/IGU mass bridges must match the actual grade/profile/item or complete IGU build.

| calculated key or alias | protocol owner | upstream rule or actual mapping | physical meaning and duplicate control |
| --- | --- | --- | --- |
| A; accepted_unit_area | cp_accept_handoffs | accepted_unit_area from actual_unit_width_m, actual_unit_height_m and accepted_unit_ID | Positive unique accepted unit area; A is the common denominator only and never a replacement for raw internal transfer |
| surveyed_opening_area | cp_survey_interface | Actual opening width times height, summed with the declared received-interface convention | Existing frame interface area, no new-frame manufacture |
| actual_unit_area; actual_discarded_unit_area | cp_survey_igus; cp_glaze_handoffs; cp_glaze_waste; cp_accept_handoffs; cp_accept_waste | Own actual_unit_width_m * actual_unit_height_m; discarded subset selected by actual discard IDs/events | One physical outline per unit/event; no pane or face multiplication |
| survey_opening_intact_unissued_area; survey_igu_receipt_area; survey_closing_intact_unissued_area; survey_unused_supplier_return_area; survey_unused_external_transfer_area | cp_survey_igus | Sum actual_unit_area over the five explicit and mutually exclusive state/event ID sets in cp_survey_igus | Returned/transferred units excluded from closing intact stock; processed WIP separate |
| gross_igu_draw | cp_survey_igus | igu_stock_draw | Physical opening plus receipts minus closing, including usable exits |
| gross_draw_i_kg | cp_glaze_materials | glaze_material_gross_draw from actual own-node material stock keys after actual_material_mass_bridge | Actual new material pool gross draw; no net-exit subtraction |
| cleanup_gross_draw_i_kg; cleanup_water_gross_draw_kg | cp_accept_materials; cp_accept_water | cleanup_stock_draw; supplied-water alias selects only its actual water-grade pool | Physical mixture/material stock draw; supplied water is not counted as cleaning-formulation mass |
| actual_water_in_consumed_cleaning_formulations_kg | cp_accept_materials | cleaning_formulation_water from actual mixture gross draw minus that same formulation's exclusive usable exits, times evidenced_actual_water_fraction_i | Water constituent of actually consumed formulation; unused formulation water excluded exactly once |
| collected_wastewater_water_kg | cp_accept_water | actual_collected_wastewater_mixture_kg * wastewater_water_content from actual constituent evidence | Constituent balance only; the inventory output remains the actual collected mixture mass |
| spent_wipe_water_kg | cp_accept_waste | spent_wipe_wet_mass_kg * measured_spent_wipe_water_fraction from a water-specific validated method | Water already included in cleanup_waste wet mass; import same fate/event into cp_accept_water without another physical output |
| actual_unused_water_exit_kg | cp_accept_water | Supplied-water unused_supplier_return_i_kg + unused_external_transfer_i_kg, shared with cp_accept_materials by water_exit_event_ID | Positive usable cleanup output once, excluded from closing stock and water-use pool |
| evidenced_water_vapour_kg; accept_evidenced_water_vapour_kg | cp_accept_water | Alias of independently_evidenced_cleaning_H2O_vapour_kg with evaporation_evidence_ID | Actual H2O emission to air / unspecified only; water_gap_kg is never a quantity source |
| actual_kwh | cp_survey_power; cp_glaze_power; cp_accept_power | energy_unit_conversion only for actual MJ, otherwise actual kWh record preserved | Retain original unit and meter-period boundary |
| node_kwh | cp_survey_power; cp_glaze_power; cp_accept_power | shared_power_attribution only in shared_full mode | Full-master total apportioned across complete positive weights; overlapping direct quantity not added |
| own_node_period_kwh | cp_survey_power; cp_glaze_power; cp_accept_power | own_node_power_normalization selects direct_node_kwh only in direct_complete, or node_kwh only in shared_full | One exclusive method per overlapping master interval; no undeclared partial-meter-plus-residual calculation |
| actual_contract_hours | cp_survey_service; cp_glaze_service; cp_accept_service | contract_hours_conversion from actual paid hours or actual billed days and contract-specific hours/day | Paid idle retained; no assumed shift length |
| own_node_attributed_paid_hours | cp_survey_service; cp_glaze_service; cp_accept_service | Direct actual_contract_hours or shared_service_attribution node_service_hours according to actual contract_accounting_mode | One original invoice quantity apportioned once across all complete consumers |
| actual_usable_exit_quantity; original_gross_draw_material_burden | cp_survey_igus; cp_glaze_materials; cp_accept_water; cp_accept_materials | Matching-unit positive actual unused exits; original gross draw times its evidenced compatible actual upstream factor, by material_pool_ID | Original material burden only; service/correction/idle burdens remain with installation lot, no avoided-production credit |
| own-node transfer, material, waste, power and service amount aliases on flow cards | Card's declared own-node protocol | Sum the exclusive actual raw or upstream-calculated event stream described in that protocol's collection_method, then divide by A | Preserve identities and periods before summation; a stream alias is not another measured quantity or exchange |

### Component Fitting Responsibility

Actual gasket, block or retention-component sizing and incidental fitting/trimming remain within the glaze assembly responsibility and do not create an independently handed-over formed product or separate forming acceptance gate. Preserve the actual pre-fit component grade/profile and new-versus-existing status, post-fit retained assembly, measured offcuts, intact correction passes and any evidenced direct releases at glaze. If actual foreground evidence establishes an independent formed-component production responsibility or handoff, reassess the declared scope before applying this category; do not omit that operation. IGU field alteration remains excluded.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | qualifying lot | Confirm the received-frame boundary and factory-IGU dry mechanical retention route before compiling quantities. Do not silently include frame repair, wet sealants or altered finished IGUs. | Signed scope, frame release and approved glazing-system details; ATS-192 sections on edge damage, dry glazing and material compatibility |
| `dq_actual_component` | component and upstream data | Identify actual IGU build, coating/orientation, seal system, every material/grade/profile, new versus retained parts and manufacturer compatibility approval. Each concrete exchange needs its matching verified identity and upstream scope. | Supplier labels, drawings, material certificates, approval documents, actual bill of materials and identity readback |
| `dq_area_unique` | reference_service and all unit streams | Preserve actual dimensions, one area convention, unique unit and pass IDs, positive unique accepted area and all rejection/WIP states. Reconcile alternative commercial area conventions with a unit-specific bridge. | Measurement register; signed acceptance; event ledger and area conversion record |
| `dq_mass_bridge` | kg material and rejected-unit rows | Use calibrated net weighing or actual same-grade/item/build evidence. A complete IGU is a composite; generic pane density or a nominal product thickness is insufficient for its complete mass. | Calibration, tare, supplier linear/item mass or exact-build complete-unit mass evidence |
| `dq_stock_exclusive` | material inputs and usable exits | Demonstrate physical gross draw and separately positive usable exits. Closing intact unissued stock, usable return, external transfer, waste and processed WIP cannot overlap. Net consumed is diagnostic only. | State- and event-resolved stock reconciliation with custody receipts and original-burden ledger |
| `dq_reject_ownership` | rejected and corrective streams | Retain own-node origin, actual state and destination for every discarded or returned unit. Match intact correction counterparts and include all extra activity while avoiding another IGU manufacture charge. | Damage/inspection decision, unit/pass/event ledger, paired transfer or waste receipt |
| `dq_water_closure` | cleaning-water pool | Separately evidence wastewater water, spent-wipe water, retained water, unused exits and actual vapour, including water in formulations. Unexplained differences beyond measurement uncertainty block water-completeness claims. | Water-content measurements, collection and retention evidence, validated evaporation evidence, pool balance and uncertainty |
| `dq_power_complete` | own-node electricity | Provide actual provider/voltage/period and direct metering or positive complete shared weights. Resolve bundled-energy scope and reconcile all consumers once. | Meter records, complete weights/consumer table, invoice and service scope |
| `dq_service_complete` | own-node services | Provide actual provider/asset/contract, paid availability and idle hours, complete shared weights and actual billed-unit conversion. Do not insert a default eight-hour day. | Contract and invoice; actual availability schedule; hours-per-day evidence where needed; complete allocation table |
| `dq_period_lineage` | all stock, events and final lot | Cover every relevant period through first acceptance, link opening/closing WIP and actual correction/termination events, and prevent double attribution. Later replacements require a separate declared boundary. | Period inventory, WIP lineage and original-burden carry record; acceptance and termination dates |
| `dq_range_status` | all inventory cards | Provisional screens are replaceable reasoned estimates, except the exact normalization identity. Retain actual values and uncertainty; use independent reviewed observations to replace screens rather than validating a batch with its own maximum. | Range evidence tier and rationale; independent sample provenance; investigation record for outliers |
| `dq_release_specificity` | direct elementary releases | Identify actual substance/state or particle fraction and receiving medium before selecting a concrete exchange. Missing data does not establish absence and unknown residual mass is not a pollutant. | Chemical identity, sampling/validated factor evidence, actual operation and compartment records |
| `dq_completeness` | completed data package | Disclose measurement uncertainty, temporal/site/specification representativeness, upstream mismatches, excluded operations, unclosed pools and unresolved identities. Do not call a package fully validated when checks are skipped or gaps remain. | Collection coverage ledger; quality review; checker performed/skipped report; unresolved-gap list |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_dry_scope` | product category and lot | Verify actual received frames, finished factory IGUs, preformed dry gaskets and mechanical retention. Reject a scope that silently performs frame repair, field IGU alteration, wet/structural silicone or fire glazing. | `pilkington-general-glazing-2013` |
| `validate_project_details` | support, gasket, retention and drainage acceptance | Use the actual approved IGU/frame-system requirements and compatibility evidence. The monolithic-glass dimensions in ATS-192 must not become default IGU limits; no universal block, pressure or drainage values are inferred. | `pilkington-general-glazing-2013` |
| `validate_reference_area` | reference_service | First verify rectangular_outline_confirmed and exact actual outline evidence for every included unit; nonrectangular or unknown outlines fail applicability. Require positive A from unique finally accepted actual unit outline areas. Confirm the reference_service name, Area/m2 and 1 m2 amount; exclude pane/face multiplication, visible-only convention without conversion, rejected/held units and repeat inspections. |  |
| `validate_forward_handoffs` | accepted_igus; glaze_feed; retained_glazing; accept_feed | Match counterpart event/unit IDs, area, state and period; reconcile actual mismatches with stocks/WIP, never by replacing actual intermediate feed with 1 m2. | |
| `validate_corrective_handoffs` | accept_rework_return; glaze_rework_feed | Activate only for actual intact corrective returns. Match counterpart event/unit IDs and area; carry original material burden without new manufacture and retain each actual extra material/service event. | |
| `validate_own_node_discards` | survey_rejected_igu_waste; broken_igus; accept_rejected_igu_waste | Verify actual origin node, unit/build, complete composite mass or exact-build bridge, rejected state and real waste custodian. No intact usable return or unresolved hold can be disguised as waste, and no late discard can be assigned to a prior node for convenience. | |
| `validate_physical_draw` | material inputs and usable exit cards | Recalculate opening plus receipts minus closing intact unissued stock as physical gross draw, including actual usable boundary exits. Confirm positive same-property exits and exclusive states; any net diagnostic must not also reduce physical input or create a credit. | |
| `validate_unused_burden` | usable outputs | Transfer only evidenced original unused-material burden. Do not transfer service, idle, inspection, correction or installation burdens, and do not claim avoided manufacture. | |
| `validate_mass_conversions` | all kg material and rejected-unit flows | Confirm actual weighing/tare or same-grade/item/complete-build conversion. Retain IGU usable exits as Area/m2; a kg waste counterpart requires its independently supported complete-unit mass bridge. | |
| `validate_water_pools` | cleanup_water; cleanup_supplies; cleanup_waste; cleanup_wastewater; accept_water_vapour | Reconcile actual available water and exclusive wastewater, wipe, retained, unused-exit and evidenced-vapour fates within quantified uncertainty. Do not infer vapour from residuals or duplicate wet-wipe water as wastewater. Report an unclosed pool as incomplete. | |
| `validate_electricity` | each own-node electricity card | Require node-owned metering or positive complete shared attribution with all consumers and periods, correct MJ/kWh handling, actual supplier/voltage and no overlapping bundled-service burden. | |
| `validate_paid_service` | each own-node shared-service card | Require actual provider/asset/scope, actual paid contract hours including idle, contract-specific billed-day conversion, positive complete consumer weights and total closure; an assumed eight-hour day is invalid. | |
| `validate_periods` | all node and stock records | Verify receiving, glazing, acceptance and correction period linkage; exclusive opening/closing intact stock and processed WIP; one-time carrying-burden attribution; no accepted denominator for a terminated unaccepted lot. | |
| `validate_emission_identity` | glaze_other_releases; accept_other_releases; accept_water_vapour | Require known actual species, physical state where relevant, receiving compartment and measured or validated quantity basis. Unknown occurrence, species, medium or quantity remain data gaps; an umbrella label, missing captured waste and a water or stock residual are insufficient evidence. Exclude captured offcuts/dust from direct release and require each non-H2O event to use its actual own-node protocol. | |
| `validate_range_evidence` | inventory ranges | Keep every provisional screen labelled reasoned_estimate and separate from real quantities. Investigate outliers using external or independent foreground evidence. The 1..1 final range represents A/A normalization only and proves no physical yield. |  |
| `validate_publication_completeness` | final downstream dataset | Report accepted inputs, performed checks, skipped checks, findings and completeness. Resolve actual exchange and support identities, material balances and review blockers before claiming a complete concrete dataset; an automated structural pass does not prove external identity or physical correctness. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | A foreground installation-service data package with node-resolved component, event, stock, WIP, service, correction and waste records; completed and verified projections may be used as secondary_dataset or background_dataset |
| downstream_use | One dry-gasket IGU installation service per 1 m2 of accepted unit area at the stated received-frame and final-acceptance gates; may support downstream LCA process and lifecyclemodel datasets within the same declared boundary |
| allowed_use | Matching actual IGU/frame-system dry installation with disclosed specifications, geography, period, upstream supply and service/access conditions; retain actual uncertainty and correction/waste treatment |
| excluded_use | Whole-window manufacture; frame installation/repair; demolition/replacement including deglazing; wet or structural-silicone/fire glazing; field-altered IGUs; complete building-envelope performance; use-phase energy or lifetime benefit; unqualified transfer to a different area convention, component build or access system |
| required_metadata | Site, geography and periods; lot and unique unit IDs; unit dimensions and area convention; received-frame gate; actual IGU build/orientation/coatings/seals; compatible blocks/gaskets/retention; actual new versus retained parts; final support/retention/drainage and clean/condition acceptance; supplier/technology/voltage; physical stock and usable exits; WIP and original-burden lineage; all correction events; shared asset/contract scope and full attribution; actual waste destinations; upstream dataset coverage; method and version |
| required_quality_disclosure | Record and uncertainty coverage; independent mass bridges; exclusive water-fate closure and actual emission evidence; complete shared weights and paid idle treatment; unresolved identities or upstream mismatches; exclusions; provisional range status; checks performed/skipped and all remaining findings |
| update_trigger | Changed IGU build, coating/seal or frame system; changed approved component or dry retention method; altered received or accepted gate; changed area convention; changed supplier/energy/service or access setup; new correction/rejection pattern; changed reporting/WIP boundary; new measured evidence replacing provisional screens; revised manufacturer requirements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `pilkington-general-glazing-2013` | handbook | Pilkington North America, Technical Information ATS-192, General glazing guidelines, 2013-01-02, eight pages; https://www.pilkington.com/-/media/pilkington/site-content/usa/window-manufacturers/technical-bulletins/ats192generalglazingguidelines2013102.pdf; read 2026-10-12 | Finished-edge protection and no field cutting/seaming/grinding; dry-system support and edge blocking; compatible resilient materials; drainage and glass protection; product/system-specific acceptance responsibilities. Its annealed-monolithic-glass dimensional table is not a default IGU specification. It supplies no inventory consumption, loss, power or service-hour ranges here. |
