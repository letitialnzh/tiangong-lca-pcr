---
pcr_id: pcr.constructions-and-construction-services.construction-services.prehung-interior-timber-door-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Prehung interior timber door installation services

## 1. Scope and Applicability

This methodology describes site installation of a factory-finished, finish-accepted single-leaf interior timber prehung door. A compatible existing rough opening is the starting interface. The work covers receiving and checking the assembly and opening, actual environmental conditioning, permitted jamb/shim trimming, aligning and mechanically fastening the assembly, fitting the specified lockset, completing local fastener-hole filling/sanding and exposed-cut or incidental touchup protection, and accepting operation, local-finish dryness and cleanup. The supplied assembly includes its already-hung slab, jamb and hinges. One-piece and split-jamb systems must be distinguished; actual split-jamb joint caulk and trim installation are included when part of the selected assembly/completion scope.

The category excludes unfinished incoming doors requiring full slab/frame finishing, manufacturing the door or jamb, construction or major repair of the opening/wall, old-door demolition, exterior doors, sliding/folding systems, fire-rated systems and unsubstantiated acoustic/weather performance. Additional decorative casing beyond the declared assembly is outside this narrow reference unless explicitly included with separately identified materials and acceptance scope. A newly exposed cut face still needs the actual compatible local protection even though the incoming assembly is factory-finished. A job requiring whole-door site painting is outside this category, rather than a zero-material local repair case. [jeldwen-jii109]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.prehung-interior-timber-door-installation-services |
| classification_refs | cpc:3.0:54760 |
| covered_products | Accepted site installation of factory-finished single-leaf nonfire interior timber prehung door/jamb/hinge assemblies in compatible accepted openings |
| excluded_products | Unfinished supplied assemblies needing full finishing; door manufacturing; structural/opening works; demolition; exterior, sliding, folding or fire-rated assemblies; whole-door painting; use and end of life |
| representative_product | A specified factory-finished interior timber door/jamb with factory hinges, site shims/fixings and compatible actual lockset, locally completed and customer accepted |
| production_route | Inspect and condition -> permitted fit trimming and mechanical fixing -> lockset, local finishing, dryness/operation checks and handover |
| market_state | Completed accepted installation service at customer handover; intermediate fixed units remain unaccepted work |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Installation of one specified prehung interior timber door in an accepted compatible opening |
| How much | One accepted completed unit |
| How well | Specified alignment/security/operation and lockset requirements met; factory finish accepted, actual local repairs/cut protection and selected split-jamb joints complete, dry and accepted; no fire/exterior/acoustic claim inferred |
| How long or cycle | One identified job from receipt/conditioning through acceptance, including actual waiting, rework and cross-reporting-period events; excludes subsequent use/maintenance |
| reference_flow_link | `reference_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Prehung interior timber door installation services |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Door/opening IDs; slab core/species/grade; jamb material/system; factory finish state; dimensions and handing; actual lockset/hardware; actual local repair/cut-protection/split-jamb caulk scope; applicable supplier and local acceptance criteria; site, job dates and reporting periods |

The accepted unit is a complete installation, not a kilogram of wood or an hour of labour. Let N be the positive distinct accepted completed-unit count for the homogeneous declared job cohort. Replacements, repeated actual cuts and failed attempts remain in resource totals but do not create extra accepted units. The same accepted opening/assembly pair is counted once. The final row has N/N = 1 item, with a strict 1..1 mathematical normalization Range; it asserts no empirical yield evidence.

The PCR machine unit token item denotes the independently verified platform reference unit item, factor 1, in Units of items 5beb6eed-33a9-47b8-9ede-1dfe8f679159. This is a spelling alias only: retain the original item records and unchanged actual counts; no physical conversion or verified service identity is implied.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_count` | reference product; `reference_service` | Number of items | item | Obtain N from unique signed completed-unit acceptance records at complete_accept. Exclude held, rejected, only fixed, or not-yet-dry units. Normalize each applicable same-cohort quantity by this positive N. |
| `custody_basis` | `prehung_unit`; `lockset`; usable exits and material rows | Original input property | item or kg as specified by card | Keep physical gross draw and positive unused outputs on the same property/unit. Door and lockset count cannot be replaced by mass without measured matching IDs and an explicit bridge. |
| `handoff_identity` | `conditioned_unit`; `fix_feed`; `fixed_unit`; `complete_feed` | Number of items | item | Pair node transfers by unique transfer/event IDs, state and timestamps. Carry actual count; never set an internal transfer to one simply because the final reference is one. |
| `material_fate` | material, dust, residue, water and liquid-waste rows | Mass | kg | Weigh net of tare and record composition/moisture. Use disjoint retained, installed/WIP, reusable exit, discarded solid/liquid and direct-release pools. A measured kg/item coefficient is not mass: convert each actual same-ID/current-state count stream to kg or weigh that exact stream directly before mass balance. Length-based actual total mass has its own calculation. Opening observations are outside material pools. Final accepted installed mass is retained once, not again as outgoing handover. Unexplained/missing-bridge balance is a gap. |
| `energy_service` | node electricity and shared-service rows | Energy or actual service-duration requirement | kWh or documented h | Preserve actual electricity unit and meter boundary. Convert billable periods from actual contract duration only. Do not infer an eight-hour day or use labour time as equipment energy. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing interior rough opening is dry, sound and geometrically compatible with the actual assembly; supplied timber prehung slab/jamb/hinges are factory-finished and finish-accepted |
| starting_condition_role | Received installation interface and separately recorded supplied assembly; the opening observation is not newly consumed wall |
| product_classification_scope | Narrow timber prehung interior door installation route within broader joinery installation coverage; external classification does not define the canonical identity |
| recursive_input_rule | A prior installation-service input from this category is an explicit upstream service with a nonoverlapping scope/time interval; do not recursively expand the same job or use it in place of the actual door assembly |
| upstream_dataset_requirement | Declare whether each actual upstream material/service dataset includes manufacture, transport, packaging, power, capital and hired-provider setup; missing upstream links remain disclosed gaps |
| disclosure | Job/site, incoming finished state, opening acceptance, actual selected jamb route, all exclusions, reporting windows, custody transfers and upstream coverage overlap |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_start_gate` | Verify actual opening and incoming assembly before installation. If the opening needs major correction, stop this route until an externally accepted corrected interface exists; retain observed failed inspection resources without inventing wall construction as an installation input. | jeldwen-jii109 |
| `boundary_conditioning` | Keep product environmental adjustment and actual protecting/storage resources inside receive_condition. Record actual RH/temperature, duration and release rationale. Supplier instructions govern the selected product; source example durations/tolerances/fastener spacings are not universal PCR quantities. | jeldwen-jii109 |
| `boundary_node_states` | Receive_condition releases inspected conditioned assemblies; position_fix changes permitted jamb/shim geometry and joins assembly, shims and fasteners into a fixed aligned unit; complete_accept adds lockset and actual local finishing, then releases the operation/dryness-accepted service. | jeldwen-jii109 |
| `boundary_local_finish` | Include actual fastener-hole filler, sanding, exposed-cut protection, incidental compatible touchup and selected split-jamb joint caulk. Incoming unfinished assemblies and full-door/frame site painting require a different declared route. | jeldwen-jii109 |
| `boundary_periods` | Index receipt, conditioning/waiting, cutting/fixing, local repair/drying, inspection, rework, acceptance and any closing/termination by real period and job. Include actual shared storage/access/tools/conditioning service only with recorded ownership and coverage. |  |
| `boundary_releases` | Distinguish captured cutting/sanding waste, actual direct airborne release, aqueous residues and collected wastewater at their real producing nodes. Unknown medium, composition or fate is unresolved coverage, never an assumed release or automatic zero. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Accepted interior rough-opening installation interface (`opening_interface`)

Process / prospective direction / type: `receive_condition` / `inputs` / `product`.

Existing dry sound opening accepted by ID against this door specification; not newly made or consumed wall material. Destination: Receipt interface only. Condition: Required when the described physical event occurs.

Quantity method: Use receive_condition_event_counts and receive_condition_normalize with cp_receive_condition_events: actual opening_id_count / N, matched by IDs/state. The opening interface is observation only, not consumed wall material.

- Collection subject: Accepted interior rough-opening installation interface
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: actual opening_id_count / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receive_condition_events`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: item
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Broad count screen permits surveyed alternatives and rejected openings before an accepted installation; review repeated IDs rather than inventing extra openings. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Actual rented equipment, access or conditioning availability service for inspection, receipt and environmental conditioning (`receive_condition_shared_service`)

Process / prospective direction / type: `receive_condition` / `inputs` / `product`.

Conditional actual provider/asset/contract boundary and billable unit; paid idle/availability periods retained. Duration is h only when contract records justify hours. Destination: Actual service consumed by receive_condition. Condition: Actual paid availability/hour service occurs; do not invent it from mere tool presence.

Quantity method: Use receive_condition_service_total and receive_condition_normalize: actual H_receive / N from documented bill-to-hour bridge, paid idle and nonoverlapping provider coverage. No eight-hour day. Fully direct zero residual requires no shared denominator.

- Collection subject: Actual rented equipment, access or conditioning availability service for inspection, receipt and environmental conditioning
- Flow property / unit: Duration / h
- Amount rule: actual H_receive / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receive_condition_resources`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 240
  - Unit: h
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Conditioning and hire can cover nights/weekends, so hours can exceed active labour; broad ten-day-hour screen is a review trigger and does not prescribe rental duration. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Inspected and environmentally conditioned prehung timber assembly (`conditioned_unit`)

Process / prospective direction / type: `receive_condition` / `outputs` / `product`.

Recorded product inspection passed and actual site conditioning release criteria met; no assumed universal duration or HVAC use. Destination: position_fix. Condition: Required when the described physical event occurs.

Quantity method: Use receive_condition_event_counts and receive_condition_normalize with cp_receive_condition_events: actual released_count / N, matching transfer_id, assembly_id and before/after state; not fixed to one.

- Collection subject: Inspected and environmentally conditioned prehung timber assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: actual released_count / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receive_condition_events`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: item
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: The handoff may contain replacement units, repeated real transfers or unfinished job cohorts; compare IDs and states to receipt and fixing ledgers. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Discarded incoming door packaging and shipping restraint materials (`transport_packaging`)

Process / prospective direction / type: `receive_condition` / `outputs` / `waste`.

Material-separated cardboard, plastic, shipping blocks, pads, clips or other actual discarded restraints, with included contents stated. Destination: Actual named packaging waste custodian. Condition: Required when the described physical event occurs.

Quantity method: Use receive_condition_waste_net and receive_condition_normalize with cp_receive_condition_fate: sum(gross_mass_kg - tare_mass_kg) for this actual waste_stream/material/event / N. exclude other waste/direct-release/stock/usable pools.

- Collection subject: Discarded incoming door packaging and shipping restraint materials
- Flow property / unit: Mass / kg
- Amount rule: actual Q_waste_receive for this waste_stream / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receive_condition_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Door-sized protective packaging can include bulky blocks and covers; thirty kilograms screens possible mixed waste or several assemblies without asserting package mass. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Irrecoverable receipt or conditioning door material (`receive_rejected_material`)

Process / prospective direction / type: `receive_condition` / `outputs` / `waste`.

Actually discarded damaged/off-spec assembly parts identified before positioning; whole units also retain item-ID-to-weighed-mass bridge. Destination: Actual receiving-node waste custodian. Condition: Actual nonusable material leaves receipt/conditioning as waste.

Quantity method: Use receive_condition_waste_net and receive_condition_normalize with cp_receive_condition_fate: sum(gross_mass_kg - tare_mass_kg) for this actual waste_stream/material/event / N. exclude other waste/direct-release/stock/usable pools.

- Collection subject: Irrecoverable receipt or conditioning door material
- Flow property / unit: Mass / kg
- Amount rule: actual Q_waste_receive for this waste_stream / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receive_condition_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: A severe receiving reject can involve a substantial door/jamb; the deliberately wide mass screen prompts checking whole-assembly weights and fate. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Inspected and environmentally conditioned prehung timber assembly (`fix_feed`)

Process / prospective direction / type: `position_fix` / `inputs` / `product`.

Same release state and assembly IDs as conditioned_unit, including actual transfer and receiving times. Destination: Trimming and positioning. Condition: Required when the described physical event occurs.

Quantity method: Use position_fix_event_counts and position_fix_normalize with cp_position_fix_events: actual received_count / N, matching transfer_id, assembly_id and before/after state; not fixed to one.

- Collection subject: Inspected and environmentally conditioned prehung timber assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: actual received_count / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_events`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: item
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Internal received counts may exceed one through replacement and true repeated transfers; never force their quantity to the final reference. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Actual installation nails, screws and fixing accessories (`fasteners`)

Process / prospective direction / type: `position_fix` / `inputs` / `product`.

Declare actual metal, coating, dimensions and use. Factory-contained hinge hardware remains in prehung input; only additions/replacements are separate. Destination: Mechanical fixing. Condition: Required when the described physical event occurs.

Quantity method: Use position_fix_gross and position_fix_normalize with cp_position_fix_material: gross physical G_fix = S_open + R_received - S_close_intact_unissued; positive G_fix / N input, including actual failed/repeated draws. Usable U_return and X_transfer are separate positive exits; diagnostic G-U-X is never a second exchange or credit.

- Collection subject: Actual installation nails, screws and fixing accessories
- Flow property / unit: Mass / kg
- Amount rule: actual gross G_fix / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_material`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Discrete fixing hardware typically has much less mass than a door; broad ten-kilogram screen accommodates repeated corrections and prompts check against piece counts. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Actual rented equipment, access or conditioning availability service for permitted trimming, positioning and mechanical fixing (`position_fix_shared_service`)

Process / prospective direction / type: `position_fix` / `inputs` / `product`.

Conditional actual provider/asset/contract boundary and billable unit; paid idle/availability periods retained. Duration is h only when contract records justify hours. Destination: Actual service consumed by position_fix. Condition: Actual paid availability/hour service occurs; do not invent it from mere tool presence.

Quantity method: Use position_fix_service_total and position_fix_normalize: actual H_fix / N from documented bill-to-hour bridge, paid idle and nonoverlapping provider coverage. No eight-hour day. Fully direct zero residual requires no shared denominator.

- Collection subject: Actual rented equipment, access or conditioning availability service for permitted trimming, positioning and mechanical fixing
- Flow property / unit: Duration / h
- Amount rule: actual H_fix / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_resources`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 240
  - Unit: h
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Conditioning and hire can cover nights/weekends, so hours can exceed active labour; broad ten-day-hour screen is a review trigger and does not prescribe rental duration. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Aligned and mechanically fixed interior prehung door assembly (`fixed_unit`)

Process / prospective direction / type: `position_fix` / `outputs` / `product`.

Allowed jamb/shim cutting complete, compatible shims/fixings installed and alignment checked; lockset, local repairs and final acceptance may remain. Destination: complete_accept. Condition: Required when the described physical event occurs.

Quantity method: Use position_fix_event_counts and position_fix_normalize with cp_position_fix_events: actual fixed_count / N, matching transfer_id, assembly_id and before/after state; not fixed to one.

- Collection subject: Aligned and mechanically fixed interior prehung door assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: actual fixed_count / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_events`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: item
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Replacement/refixing events can create repeated real handoffs; state/ID matching distinguishes those from duplicate records. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Unused usable fixing materials by actual material (`unused_fixing_material_return`)

Process / prospective direction / type: `position_fix` / `outputs` / `product`.

Separate unprocessed shim and fastener material identities; preserve input Mass basis and actual exit owner. Destination: Named supplier or external recipient. Condition: Actual unused usable fixing materials exit this node custody.

Quantity method: Use position_fix_usable_exit and position_fix_normalize with cp_position_fix_material: actual U_return / N and X_transfer / N as separate positive outputs in unchanged input identity/property/unit. Neither exit is closing stock; installation/rework burden remains job.

- Collection subject: Unused usable fixing materials by actual material
- Flow property / unit: Mass / kg
- Amount rule: actual Q_U_fix or Q_X_fix, each separately / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_material`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Combined unused packs may outweigh net installed materials; compare each material exit with its own gross input rather than applying one mass ratio. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Discarded permitted jamb and shim offcuts (`jamb_shim_offcuts`)

Process / prospective direction / type: `position_fix` / `outputs` / `waste`.

Actual wood/polymer cut pieces, material separated; no assumed slab shortening or wholesale assembly fabrication. Destination: Named cutting-waste custodian. Condition: Required when the described physical event occurs.

Quantity method: Use position_fix_waste_net and position_fix_normalize with cp_position_fix_fate: sum(gross_mass_kg - tare_mass_kg) for this actual waste_stream/material/event / N. exclude other waste/direct-release/stock/usable pools.

- Collection subject: Discarded permitted jamb and shim offcuts
- Flow property / unit: Mass / kg
- Amount rule: actual Q_waste_fix for this waste_stream / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Limited fit trimming should be checked against permitted geometry; thirty kilograms is a broad screen for accidental inclusion of rejected doors or other jobs. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Collected dust from permitted jamb and shim cutting (`captured_dust`)

Process / prospective direction / type: `position_fix` / `outputs` / `waste`.

Actual collected wood/polymer dust, identified material, capture method and moisture state; captured solid waste is not direct air release. Destination: Named collected-dust waste custodian. Condition: Required when the described physical event occurs.

Quantity method: Use position_fix_waste_net and position_fix_normalize with cp_position_fix_fate: sum(gross_mass_kg - tare_mass_kg) for this actual waste_stream/material/event / N. exclude other waste/direct-release/stock/usable pools.

- Collection subject: Collected dust from permitted jamb and shim cutting
- Flow property / unit: Mass / kg
- Amount rule: actual Q_waste_fix for this waste_stream / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Minor jamb/shim machining can produce fines; this broad screen prompts reconciliation with cuts, capture records and bulk offcuts rather than asserting a dust fraction. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Discarded fixing-stage door parts and spent fixing materials (`fix_rejected_material`)

Process / prospective direction / type: `position_fix` / `outputs` / `waste`.

Actual nonusable removed fasteners, damaged shims or irrecoverable cut/failed assembly components, with actual material and installed state. Destination: Named fixing-stage waste custodian. Condition: Actual fixing failure/correction creates nonusable discarded material.

Quantity method: Use position_fix_waste_net and position_fix_normalize with cp_position_fix_fate: sum(gross_mass_kg - tare_mass_kg) for this actual waste_stream/material/event / N. exclude other waste/direct-release/stock/usable pools.

- Collection subject: Discarded fixing-stage door parts and spent fixing materials
- Flow property / unit: Mass / kg
- Amount rule: actual Q_waste_fix for this waste_stream / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: An exceptional failed installation may discard much more than trim offcuts; large screen separates that event from routine cuts and preserves its burden. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Discarded packaging of fixing-stage accessories (`fixing_packaging`)

Process / prospective direction / type: `position_fix` / `outputs` / `waste`.

Actual shim/fastener accessory containers and wrappers opened at this node; retained packaging is not discarded. Destination: Named fixing-stage packaging custodian. Condition: Actual fixing accessory packaging becomes waste at positioning/fixing.

Quantity method: Use position_fix_waste_net and position_fix_normalize with cp_position_fix_fate: sum(gross_mass_kg - tare_mass_kg) for this actual waste_stream/material/event / N. exclude other waste/direct-release/stock/usable pools.

- Collection subject: Discarded packaging of fixing-stage accessories
- Flow property / unit: Mass / kg
- Amount rule: actual Q_waste_fix for this waste_stream / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Accessory package waste should be modest relative to component mass; broad screen detects incoming door packaging counted a second time. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Actual airborne cutting dust by material and particle fraction (`position_direct_dust`)

Process / prospective direction / type: `position_fix` / `outputs` / `elementary`.

Conditional substance/material-resolved airborne dust from this node; actual composition, particle-size definition, control state and receiving air compartment required. Destination: Actual receiving air compartment. Condition: Evidence establishes a direct airborne release from permitted cutting; species/fraction and receiving medium can be specified.

Quantity method: Use position_fix_direct_release and position_fix_normalize with cp_position_fix_fate: actual independently measured/evidenced Q_release_fix / N by species_id, particle_fraction and receiving_medium. Unknown evidence remains gap; captured waste or unexplained mass is not direct release.

- Collection subject: Actual airborne cutting dust by material and particle fraction
- Flow property / unit: Mass / kg
- Amount rule: actual independently evidenced Q_release_fix / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Wide screening bound acknowledges uncontrolled cutting variability; an amount requires actual emission evidence, and missing captured mass is not a release estimate. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Aligned and mechanically fixed interior prehung door assembly (`complete_feed`)

Process / prospective direction / type: `complete_accept` / `inputs` / `product`.

Same actual assembly and fixing state as fixed_unit; not yet accepted as completed service. Destination: Hardware fitting and local finishing. Condition: Required when the described physical event occurs.

Quantity method: Use complete_accept_event_counts and complete_accept_normalize with cp_complete_accept_events: actual received_count / N, matching transfer_id, assembly_id and before/after state; not fixed to one.

- Collection subject: Aligned and mechanically fixed interior prehung door assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: actual received_count / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_events`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: item
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Rework and replacement handoffs need actual counts; one accepted reference cannot prove one incoming unit. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Actual hole filler, exposed-cut protection and minor touchup formulations (`local_repair_materials`)

Process / prospective direction / type: `complete_accept` / `inputs` / `product`.

Separate actual putty/filler, edge protection, compatible touchup and split-jamb joint caulk where selected; formulations, moisture/solids and packaging contents explicit. Whole-door/frame site coating excluded. Destination: Limited completion finishing. Condition: Required when the described physical event occurs.

Quantity method: Use complete_accept_gross and complete_accept_normalize with cp_complete_accept_material: gross physical G_complete = S_open + R_received - S_close_intact_unissued; positive G_complete / N input, including actual failed/repeated draws. Usable U_return and X_transfer are separate positive exits; diagnostic G-U-X is never a second exchange or credit.

- Collection subject: Actual hole filler, exposed-cut protection and minor touchup formulations
- Flow property / unit: Mass / kg
- Amount rule: actual gross G_complete / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_material`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Local defects and cut edges require smaller scope than a whole-door finish; ten kilograms prompts a scope/material-draw review without dictating recipe or application rate. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Actual sanding, protection and cleaning consumables (`abrasives_protection`)

Process / prospective direction / type: `complete_accept` / `inputs` / `product`.

Each actual abrasive, wipe, protective sheet and cleanup consumable identified; durable reused tools are not fully consumed every job. Destination: Local sanding, protection and cleanup. Condition: Required when the described physical event occurs.

Quantity method: Use complete_accept_gross and complete_accept_normalize with cp_complete_accept_material: gross physical G_complete = S_open + R_received - S_close_intact_unissued; positive G_complete / N input, including actual failed/repeated draws. Usable U_return and X_transfer are separate positive exits; diagnostic G-U-X is never a second exchange or credit.

- Collection subject: Actual sanding, protection and cleaning consumables
- Flow property / unit: Mass / kg
- Amount rule: actual gross G_complete / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_material`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Protection sheets and repeated repair cleanup can outweigh fine abrasives; broad screen catches reusable tools or unrelated site materials charged in full. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Actual rented equipment, access or conditioning availability service for hardware, local finishing and handover acceptance (`complete_accept_shared_service`)

Process / prospective direction / type: `complete_accept` / `inputs` / `product`.

Conditional actual provider/asset/contract boundary and billable unit; paid idle/availability periods retained. Duration is h only when contract records justify hours. Destination: Actual service consumed by complete_accept. Condition: Actual paid availability/hour service occurs; do not invent it from mere tool presence.

Quantity method: Use complete_accept_service_total and complete_accept_normalize: actual H_complete / N from documented bill-to-hour bridge, paid idle and nonoverlapping provider coverage. No eight-hour day. Fully direct zero residual requires no shared denominator.

- Collection subject: Actual rented equipment, access or conditioning availability service for hardware, local finishing and handover acceptance
- Flow property / unit: Duration / h
- Amount rule: actual H_complete / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_resources`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 240
  - Unit: h
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Conditioning and hire can cover nights/weekends, so hours can exceed active labour; broad ten-day-hour screen is a review trigger and does not prescribe rental duration. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Unused intact actual lockset assembly (`unused_lockset_return`)

Process / prospective direction / type: `complete_accept` / `outputs` / `product`.

Unprocessed usable lockset by matching configuration and item ID; supplier return and external handover recorded separately. Destination: Named supplier or external recipient. Condition: Actual unused usable lockset exits completion custody.

Quantity method: Use complete_accept_usable_exit and complete_accept_normalize with cp_complete_accept_material: actual U_return / N and X_transfer / N as separate positive outputs in unchanged input identity/property/unit. Neither exit is closing stock; installation/rework burden remains job.

- Collection subject: Unused intact actual lockset assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: actual Q_U_complete or Q_X_complete, each separately / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_material`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: item
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Multiple spare/alternative locksets can be returned for one installation; count/ID bridge avoids converting a count input into an unsupported waste mass. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Unused usable local-finishing, protection and fresh-water materials (`unused_completion_material_return`)

Process / prospective direction / type: `complete_accept` / `outputs` / `product`.

Actual unused usable formulation, abrasive, protection product or separately supplied fresh water, each separately identified with actual grade/provider and original Mass basis; unchanged unprocessed material only. Destination: Named supplier or external recipient. Condition: Actual unused usable completion materials exit this node custody.

Quantity method: Use complete_accept_usable_exit and complete_accept_normalize with cp_complete_accept_material: actual U_return / N and X_transfer / N as separate positive outputs in unchanged input identity/property/unit. Neither exit is closing stock; installation/rework burden remains job.

- Collection subject: Unused usable local-finishing, protection and fresh-water materials
- Flow property / unit: Mass / kg
- Amount rule: actual Q_U_complete or Q_X_complete, each separately / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_material`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Unused containers/rolls may exceed installed or consumed material; provisional screen requires product-specific reconciliation, not a blanket offset. Includes an actual usable fresh-water boundary exit only if documented; not waste liquid or processed mixture. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Discarded local finishing residues, spent consumables and packaging (`repair_waste`)

Process / prospective direction / type: `complete_accept` / `outputs` / `waste`.

Material-separated filler/caulk/touchup residue, sanding dust, used abrasive/wipes/protection and accessory packaging; actual wet state and retained contents recorded. Destination: Named local-finishing waste custodian. Condition: Required when the described physical event occurs.

Quantity method: Use complete_accept_waste_net and complete_accept_normalize with cp_complete_accept_fate: sum(gross_mass_kg - tare_mass_kg) for this actual waste_stream/material/event / N. Record water_fraction where relevant; exclude other waste/direct-release/stock/usable pools.

- Collection subject: Discarded local finishing residues, spent consumables and packaging
- Flow property / unit: Mass / kg
- Amount rule: actual Q_waste_complete for this waste_stream / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Local work can generate protective film and wet wipes as well as small filler residue; wide mass screen prevents an assumed zero cleanup stream. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Collected local repair and cleanup liquid waste (`completion_wastewater`)

Process / prospective direction / type: `complete_accept` / `outputs` / `waste`.

Actual contained wash or unused aqueous mixture with composition and water content; transfer to a custodian, not an assumed direct release. Destination: Named liquid-waste/wastewater custodian. Condition: Actual local repair/cleanup liquid is collected and handed over as waste.

Quantity method: Use complete_accept_waste_net and complete_accept_normalize with cp_complete_accept_fate: sum(gross_mass_kg - tare_mass_kg) for this actual waste_stream/material/event / N. Record water_fraction where relevant; exclude other waste/direct-release/stock/usable pools.

- Collection subject: Collected local repair and cleanup liquid waste
- Flow property / unit: Mass / kg
- Amount rule: actual Q_waste_complete for this waste_stream / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Bound mirrors potentially significant cleanup water rather than a fixed effluent fraction; reconcile with actual supplied and formulation water. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Irrecoverable completion-stage door or hardware material (`rejected_unit`)

Process / prospective direction / type: `complete_accept` / `outputs` / `waste`.

Actual removed nonusable door/hardware at operation/repair acceptance; identify component/composite state and item-to-mass bridge. Destination: Named completion-stage waste custodian. Condition: An actual irrecoverable unit or component is discarded at completion.

Quantity method: Use complete_accept_waste_net and complete_accept_normalize with cp_complete_accept_fate: sum(gross_mass_kg - tare_mass_kg) for this actual waste_stream/material/event / N. Record water_fraction where relevant; exclude other waste/direct-release/stock/usable pools.

- Collection subject: Irrecoverable completion-stage door or hardware material
- Flow property / unit: Mass / kg
- Amount rule: actual Q_waste_complete for this waste_stream / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: A rare whole unit rejection can dominate local wastes; broad screen requires explicit event and measured identity instead of hiding it in touchup waste. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Collection requirement: Actual substance-resolved local finishing or cleanup direct releases (`complete_accept_other_releases`)

Process / prospective direction / type: `complete_accept` / `outputs` / `elementary`.

Only evidenced direct release, including H2O vapour or actual volatile constituent/sanding dust with substance or particle definition, state and receiving medium; separate concrete exchanges per identity. Destination: Actual receiving environmental compartment. Condition: Actual direct release established during local finishing, sanding, drying or cleanup.

Quantity method: Use complete_accept_direct_release and complete_accept_normalize with cp_complete_accept_fate: actual independently measured/evidenced Q_release_complete / N by species_id, particle_fraction and receiving_medium. Unknown evidence remains gap; captured waste or unexplained mass is not direct release.

- Collection subject: Actual substance-resolved local finishing or cleanup direct releases
- Flow property / unit: Mass / kg
- Amount rule: actual independently evidenced Q_release_complete / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_fate`
- Unverified optional screening aid: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: The umbrella can include aqueous drying, sanding or volatile constituents, so broad screen is not a chemical emission factor; each actual release needs separate identification/evidence. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receive_condition` | Inspection, receipt and environmental conditioning | required | Every job; powered conditioning/service subflows only when actual | Foreground received-interface and treatment responsibility | Actual opening and assembly identities released to positioning |
| `position_fix` | Permitted trimming, positioning and mechanical fixing | required | Every job; cuts occur only when needed/permitted | Foreground forming and assembly responsibility | Actual fixed assembly handoff count |
| `complete_accept` | Hardware, local finishing and handover acceptance | required | Every job; each water/chemical/caulk/release subflow follows actual operations | Foreground hardware assembly and surface-finishing responsibility | N accepted completed installation units |

The three nodes have independent acceptance responsibilities even if the same crew performs them. The conditioned input has not yet undergone fit trimming; permitted jamb/shim cuts produce a changed fit state, offcuts and possible fines. The mechanically fixed parent state still needs lockset and local finish acceptance. Treatment, forming, assembly and finishing are distinct responsibilities within these three nodes.

At every node, classify off-spec states by actual event: held unprocessed stock, held installed work in progress, internal rework, usable return/external handover, or nonusable waste. A real repeat cut, refastening or repair consumes additional resources once for each event. Deduplicate only duplicate records of the same physical event. Return a held unit to the responsible node with a linked state/event; do not count it as final service. Internal rework is recorded by paired handoff/return events, not a new purchased door or a negative service exchange. Termination records must identify the fate of each held unit and the retained job burdens.

The 33 nonreference inventory ranges below are broad provisional QA screens (`reasoned_estimate`); the reference card alone uses a strict calculated 1..1 mathematical normalization Range. Each card supplies its own rationale. They do not state supplier quantities, yield, permitted emission levels or source-backed factual bounds. Values outside a screen trigger review of actual records and scope; values inside it still require measurement. A conditional card may expand to zero, one or several separately identified actual exchanges. Unresolved semantic umbrellas do not authorize a generic UUID.

### Process: Inspection, receipt and environmental conditioning (`receive_condition`)

#### Inputs

##### Product flows

###### Factory-finished prehung interior timber door and jamb assembly (`prehung_unit`)

Single leaf timber slab/core/jamb with factory-installed hinges; all required factory finishes accepted at receipt; actual species/core, jamb system, size, handing, finish and included accessories declared. Destination: Inspection and actual conditioning. Condition: Required when the described physical event occurs.

Quantity method: Use receive_condition_gross and receive_condition_normalize with cp_receive_condition_material: gross physical G_receive = S_open + R_received - S_close_intact_unissued; positive G_receive / N input, including actual failed/repeated draws. Usable U_return and X_transfer are separate positive exits; diagnostic G-U-X is never a second exchange or credit.

- Selected flow: Factory-finished prehung interior timber door and jamb assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: actual gross G_receive / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receive_condition_material`
- Range: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: item
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: One assembly normally supplies one installation, but damage, substitution and unused exits can increase gross draw; five is a broad review trigger without a rejection-rate claim. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

###### Actual site electricity attributed to inspection, receipt and environmental conditioning (`receive_condition_electricity`)

Actual supplier/grid mix, voltage, meter boundary and service period; lighting/tools/conditioning only to extent attributable and not inside a separately charged service. Destination: Actual powered operations at receive_condition. Condition: Actual attributable electricity is used; observed absence documented if none.

Quantity method: Use receive_condition_electricity_total and receive_condition_normalize: actual E_receive / N. Direct meter assignments are independent; only nonzero eligible residual requires complete positive residual weights. Measured direct/master meter delta and documented actual-unit conversion are linked to direct_energy_kWh/shared_energy_total_kWh in receive_condition_electricity_total, with actual topology preventing overlap.

- Selected flow: Actual site electricity attributed to inspection, receipt and environmental conditioning
- Flow property / unit: Energy / kWh
- Amount rule: actual E_receive / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receive_condition_resources`
- Range: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Portable tooling may be small but site conditioning/lighting may span periods; broad screen asks for meter/service coverage rather than a nameplate times assumed workday. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Outputs

##### Product flows

###### Unused intact factory-finished prehung door assembly (`unused_door_return`)

Unprocessed usable assembly leaving this node custody; distinguish supplier return from external onward handover, and retain original assembly ID. Destination: Named supplier or external recipient. Condition: An actual unused usable assembly exits receipt custody.

Quantity method: Use receive_condition_usable_exit and receive_condition_normalize with cp_receive_condition_material: actual U_return / N and X_transfer / N as separate positive outputs in unchanged input identity/property/unit. Neither exit is closing stock; installation/rework burden remains job.

- Selected flow: Unused intact factory-finished prehung door assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: actual Q_U_receive or Q_X_receive, each separately / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receive_condition_material`
- Range: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: item
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Several unused alternatives may be returned for one accepted job; match count to actual gross input and custody rather than assuming waste conversion. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

##### Waste flows

### Process: Permitted trimming, positioning and mechanical fixing (`position_fix`)

#### Inputs

##### Product flows

###### Actual door installation shims (`shims`)

Declare each actual wood or polymer shim material/grade and dimensions, including supplied versus separately purchased status. Destination: Alignment and fixing. Condition: Required when the described physical event occurs.

Quantity method: Use position_fix_gross and position_fix_normalize with cp_position_fix_material: gross physical G_fix = S_open + R_received - S_close_intact_unissued; positive G_fix / N input, including actual failed/repeated draws. Usable U_return and X_transfer are separate positive exits; diagnostic G-U-X is never a second exchange or credit.

- Selected flow: Actual door installation shims
- Flow property / unit: Mass / kg
- Amount rule: actual gross G_fix / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_material`
- Range: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: A few local shim packs and rework can be material, while ten kilograms broadly flags stock-draw or unit errors; material is not guessed. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

###### Actual site electricity attributed to permitted trimming, positioning and mechanical fixing (`position_fix_electricity`)

Actual supplier/grid mix, voltage, meter boundary and service period; lighting/tools/conditioning only to extent attributable and not inside a separately charged service. Destination: Actual powered operations at position_fix. Condition: Actual attributable electricity is used; observed absence documented if none.

Quantity method: Use position_fix_electricity_total and position_fix_normalize: actual E_fix / N. Direct meter assignments are independent; only nonzero eligible residual requires complete positive residual weights. Measured direct/master meter delta and documented actual-unit conversion are linked to direct_energy_kWh/shared_energy_total_kWh in position_fix_electricity_total, with actual topology preventing overlap.

- Selected flow: Actual site electricity attributed to permitted trimming, positioning and mechanical fixing
- Flow property / unit: Energy / kWh
- Amount rule: actual E_fix / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_position_fix_resources`
- Range: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Portable tooling may be small but site conditioning/lighting may span periods; broad screen asks for meter/service coverage rather than a nameplate times assumed workday. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Hardware, local finishing and handover acceptance (`complete_accept`)

#### Inputs

##### Product flows

###### Actual lockset hardware assembly (`lockset`)

Actual compatible latch/lockset, handles and strike as a declared assembly; composition/configuration and supplied scope explicit; factory hinges excluded. Destination: Operation-ready completion. Condition: Required when the described physical event occurs.

Quantity method: Use complete_accept_gross and complete_accept_normalize with cp_complete_accept_material: gross physical G_complete = S_open + R_received - S_close_intact_unissued; positive G_complete / N input, including actual failed/repeated draws. Usable U_return and X_transfer are separate positive exits; diagnostic G-U-X is never a second exchange or credit.

- Selected flow: Actual lockset hardware assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: actual gross G_complete / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_material`
- Range: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: item
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: One completed unit generally needs one actual lockset configuration, while failed units or spare returns can increase gross draw; bound is provisional only. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

###### Actual water supplied for local repair or cleaning (`completion_water`)

Conditional actual source and grade of separately supplied water, including any measured mixing addition; water already in formulations tracked as constituent, not a second fresh input. Destination: Actual local finishing/cleanup operation. Condition: Actual separate water input is used for local repair, mixing or cleanup.

Quantity method: Use complete_accept_gross and complete_accept_normalize with cp_complete_accept_material: gross physical G_complete = S_open + R_received - S_close_intact_unissued; positive G_complete / N input, including actual failed/repeated draws. Usable U_return and X_transfer are separate positive exits; diagnostic G-U-X is never a second exchange or credit.

- Selected flow: Actual water supplied for local repair or cleaning
- Flow property / unit: Mass / kg
- Amount rule: actual gross G_complete / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_material`
- Range: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Water use depends on actual aqueous products and cleanup method; broad hundred-kilogram screen permits wash events but flags whole-site water inclusion. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

###### Actual site electricity attributed to hardware, local finishing and handover acceptance (`complete_accept_electricity`)

Actual supplier/grid mix, voltage, meter boundary and service period; lighting/tools/conditioning only to extent attributable and not inside a separately charged service. Destination: Actual powered operations at complete_accept. Condition: Actual attributable electricity is used; observed absence documented if none.

Quantity method: Use complete_accept_electricity_total and complete_accept_normalize: actual E_complete / N. Direct meter assignments are independent; only nonzero eligible residual requires complete positive residual weights. Measured direct/master meter delta and documented actual-unit conversion are linked to direct_energy_kWh/shared_energy_total_kWh in complete_accept_electricity_total, with actual topology preventing overlap.

- Selected flow: Actual site electricity attributed to hardware, local finishing and handover acceptance
- Flow property / unit: Energy / kWh
- Amount rule: actual E_complete / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_resources`
- Range: Provisional QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
  - Rationale: Portable tooling may be small but site conditioning/lighting may span periods; broad screen asks for meter/service coverage rather than a nameplate times assumed workday. Review trigger only. Neither a measured amount, a source-supported factual interval, a substitute for missing records, nor an acceptance limit. Zero requires observed absence or explicit inactive condition.

#### Outputs

##### Product flows

###### Prehung interior timber door installation services (`reference_service`)

One completed single-leaf nonfire interior timber unit in accepted sound opening, secure/aligned/operable with specified lockset; required holes/edges/joints locally finished, dry and accepted; cleanup/handover complete. Destination: Customer acceptance gate. Condition: Required when the described physical event occurs.

Quantity method: Use accepted_n and reference_identity with cp_complete_accept_events: N is the distinct accepted_ids count; N/N = 1 item.

- Selected flow: Prehung interior timber door installation services
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: 1 item
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_complete_accept_events`
- Range: Strict accepted-count normalization identity
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: item
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `calculated_from_collection`
  - Rationale: Strict N/N = 1 normalization identity using the same observed positive accepted N. This is mathematical, not an empirical production/yield interval or external source claim. Require positive complete accepted N; the identity supplies no rejected-unit quantity or source-backed yield.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `no_service_coproduct` | This route produces one accepted installation service and no presumed co-product. Keep every actual failed/repeated event's job resources with the job. No avoided-production/disposal credit follows from scrap, a return or a held unit. |  |
| `unused_original_material` | Gross input is opening intact stock plus receipts minus closing intact unissued stock. Record unused usable supplier returns and external handovers as separate positive outputs in the same material identity/property/unit. Attribute only their original unused-material upstream burden to those actual exits when upstream scope can be traced; installation, conditioning, cutting and rework remain with the job. Net-consumed G-R-X is diagnostic/original-material attribution, not another negative exchange or second physical draw. |  |
| `shared_complete_set` | Direct submeter assignment belongs directly to its measured consumer and needs no shared denominator. Reconcile residual shared electricity/service B in period p after all independent direct assignments and provider overlaps. Fully direct, exactly zero residual requires no shared denominator. Nonzero eligible residual needs every residual-eligible consuming job/node, including outside this job, and evidenced causal weights w; allocate B times w divided by the complete positive eligible sum. Unknown/negative residual, missing consumers, zero/unknown sum or unsupported weights is an allocation gap requiring reviewed alternative evidence. Do not silently assign the entire shared meter to this job. |  |
| `service_overlap` | For rented access, tools, storage or conditioning availability, use actual provider contract and paid active/idle periods. Disclose whether provider dataset includes energy, capital, maintenance, delivery/setup and removal. Count each included burden once; separate site electricity only for a genuinely nonoverlapping meter/coverage. A separately owned durable tool needs its evidenced attribution basis, not a full new tool per installation. |  |
| `period_bridge` | Follow the identified job cohort through all reporting periods and finish the whole-job attribution at acceptance. If reporting at a cutoff, bridge opening/closing unprocessed stock, unaccepted installed WIP, shared service commitments and unresolved defects by ID/state; never normalize unfinished work by an invented accepted count. A terminated job needs documented fate and explicit burden treatment before consolidation with an accepted cohort. No universal lifetime, workday or annualization factor applies. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Each protocol owns one real node and its actual operations/columns. Stable ASCII raw keys are mandatory foreground record columns. Repeated material, species, consumer and event rows remain separated by their IDs. `N` is calculated from unique completed accepted IDs only in complete_accept. The aggregation field uses `per reference flow`; actual stock, handoff, conversion and attribution details remain in the node method and explicit calculation rules. Unit alias `item` or `item` preserves Number-of-items dimension only with verified support evidence. Fields needed for the actual selected physical-property/meter route must be populated; unused alternative-route fields are explicitly not applicable. Native kg pools do not require a count coefficient, and direct-weighed count streams do not also require a coefficient. Missing required selected-route raw data or conversion evidence is a gap.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receive_condition_material` | `receive_condition` | material | Node-owned foreground ledger | job_id; node_id; period_id; event_id; material_id; actual_unit; unit_alias; assembly_id; provider_id; S_open; R_received; S_close_intact_unissued; U_return; X_transfer; return_recipient; transfer_recipient; custody_time; bridge_item_count; bridge_net_mass_kg; bridge_same_ids; bridge_source; bridge_state; bridge_period; bridge_balance_pool_id | At receipt/conditioning, count matching factory-finished prehung assembly IDs and opening intact stock, actual receipts and closing intact unissued assemblies. Record actual usable supplier returns/external handovers separately with recipients. Obtain an actual same-ID weighed mass bridge only if the receipt-stage discarded assembly mass requires reconciliation. Packaging is removed and weighed in cp_receive_condition_fate, not netted against door count. Closing stock excludes returned units and held conditioning/processed WIP. For a required count-to-mass balance, obtain actual same-ID, same-state, same-period net mass evidence; kg per item is a coefficient and the physical stream mass requires count times that coefficient, or direct weighing of the entire exact stream. Mixed units/configurations/states are measured and summed separately, never assigned one mean. This bridge does not change the external Number-of-items exchanges. | item; kg | Each receipt, issue, usable exit and reporting cutoff | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Actual assembly counts/specifications; factory-finish receiving evidence; receipts and stock/usable-exit IDs; real recipient custody; calibrated same-ID mass bridge if required |
| `cp_receive_condition_events` | `receive_condition` | events | Node-owned foreground ledger | job_id; node_id; period_id; event_id; assembly_id; opening_id; transfer_id; state_before; state_after; received_count; released_count; opening_id_count; actual_start; actual_end; elapsed_h; actual_RH; actual_temperature; product_criteria; factory_finish_status; opening_geometry; opening_soundness; moisture_condition; defect_id; repeat_attempt_id; disposition; cutoff_wip_ids; termination_decision | Inspect actual assembly size/handing/core/species and incoming factory finish, and the dry sound compatible opening geometry. Record real RH/temperature/moisture observations and actual protection/conditioning intervals against this selected product criteria. Release conditioned assembly IDs with transfer_id and released_count. Record receiving defects, any actual repeated inspection/conditioning, held stock/WIP and documented termination disposition. This protocol does not collect fixing or final customer acceptance. | item; actual h; actual opening dimensions/RH/temperature units | Each actual event/transfer; environmental monitoring at evidenced suitable intervals | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Actual product/contract criteria; dated measurement/environment records; paired transfer IDs; signer; defect/WIP and termination register |
| `cp_receive_condition_resources` | `receive_condition` | resources | Node-owned foreground ledger | job_id; node_id; period_id; event_id; meter_id; provider_id; actual_voltage; energy_unit; meter_start; meter_end; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; eligible_residual_energy_kWh; consumer_id; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; included_provider_scope; overlap_excluded_kWh; setup_owner; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence | At this node, collect actual receiving-area lighting, powered storage/conditioning or hired conditioning/protection availability. Read this node actual meter/provider periods and documented kWh conversion. Distinguish direct measured assignment from remaining eligible shared residual using the full actual outside-job consumer register. Reconcile provider energy/capital/setup coverage; actual contract bill_quantity times documented_hours_per_bill_unit governs h, including paid idle. Fully direct zero residual needs no weights; nonzero residual needs complete positive eligible weights, and unknown/negative residual is gap. Identify each meter record owner, actual interval, coverage and topology. For meter_role direct, the measured delta times documented actual-unit-to-kWh factor supplies direct_energy_kWh. For meter_role shared_master, its measured delta supplies shared_energy_total_kWh; any included direct submeters are explicitly listed in master_includes_direct_ids and removed once through all_direct_energy_kWh. Direct records outside the master scope are not removed from that master; direct records inside it are not charged again as residual. Each raw reading is owned once. Missing topology/source-to-total linkage is an energy gap. | kWh; actual charged h | Every meter interval and provider/billing period | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Meter calibration; provider bills/contracts; actual unit factor; complete consumer register; causal weights; paid availability/idle; provider/site overlap reconciliation |
| `cp_receive_condition_fate` | `receive_condition` | fate | Node-owned foreground ledger | job_id; node_id; period_id; event_id; material_id; assembly_id; custodian_id; transfer_id; waste_stream; gross_mass_kg; tare_mass_kg; incoming_transfer_mass_kg; outgoing_transfer_mass_kg; open_processed_wip_kg; close_processed_wip_kg; accepted_retained_kg; custody_time; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id | At receipt/conditioning, weigh discarded incoming packaging/shipping restraints and actual irrecoverable received/conditioning door material by separate waste_stream and material_id, net of container tare, with actual custodian. Keep usable intact door returns under own-node material protocol, not waste. Reconcile actual conditioned assembly transfer state and held processed/conditioning WIP with same-ID mass bridge when needed; do not assign receipt waste to final acceptance. For mass reconciliation, give each physical stream an exclusive stream_pool_kind and balance_pool_id. Native kg streams enter with their actual measured kg; Number streams enter only with actual same-ID/current-state measured kg or the matching measured kg-per-item coefficient times count. Record pool mass by ID/state, not one factor applied after cutting or assembly changes. Missing bridge permits count reconciliation only and leaves mass reconciliation incomplete. An intact or installed composite is counted once in a documented composite group including its contributing inputs, or has evidenced constituent splits; never book the entire composite again in each component pool. Outgoing transfer mass is only an actual uniquely owned internal handoff, return-to-node/rework transfer or separately documented custody exit; it is exclusive of usable U/X outputs, waste, closing WIP and final accepted retention. Final customer acceptance leaves installed mass in accepted_retained only, not a second outgoing mass. opening_interface is observational and excluded from every material balance. | kg by actual material/substance | Every actual solid/liquid waste or direct-release event and cutoff pool measurement | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Actual receiving-node calibrated gross/tare/net measurements; packaging/assembly identity; same-ID door mass bridge if needed; real custodian tickets; conditioned-handoff and held-WIP reconciliation |
| `cp_position_fix_material` | `position_fix` | material | Node-owned foreground ledger | job_id; node_id; period_id; event_id; material_id; actual_unit; unit_alias; assembly_id; provider_id; S_open; R_received; S_close_intact_unissued; U_return; X_transfer; return_recipient; transfer_recipient; custody_time; bridge_item_count; bridge_net_mass_kg; bridge_length_m; bridge_linear_mass_kg_per_m; bridge_same_ids; bridge_source; bridge_state; bridge_period; bridge_balance_pool_id | At positioning/fixing, separately weigh actual shim and fastener materials issued from this node stocks and receipts; verify actual material/coating/specification and supplied accessory scope. Record closing intact unissued stock and own-node usable exits separately. Use actual same-ID item weights or actual measured length and evidenced same-material linear mass only for an explicitly needed bridge. Received conditioned door count belongs cp_position_fix_events. Factory-contained hinges are not a second new fastener input. For a required count-to-mass balance, obtain actual same-ID, same-state, same-period net mass evidence; kg per item is a coefficient and the physical stream mass requires count times that coefficient, or direct weighing of the entire exact stream. Mixed units/configurations/states are measured and summed separately, never assigned one mean. This bridge does not change the external Number-of-items exchanges. | item; kg; actual bridge m | Each receipt, issue, usable exit and reporting cutoff | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Actual shim/fastener identities and weighed stocks/usable exits; actual coating/specification; measured count/length bridge where needed; calibrated scale and tare; recipient custody |
| `cp_position_fix_events` | `position_fix` | events | Node-owned foreground ledger | job_id; node_id; period_id; event_id; assembly_id; opening_id; transfer_id; state_before; state_after; received_count; fixed_count; actual_start; actual_end; elapsed_h; product_criteria; actual_cut_length_m; permitted_cut_component; shim_material_id; fastener_material_id; alignment_results; defect_id; repeat_attempt_id; disposition; cutoff_wip_ids; termination_decision | Receive conditioned assembly IDs/transfer_id and received_count. Record each actually permitted jamb/shim cut component and dimension, actual shim/fixing identities, alignment and fastening results and each real repeated cut/refixing event. Release mechanically fixed IDs/fixed_count with transfer_id to completion. Record fixing defects, held installed WIP or removed material disposition. This protocol does not collect initial factory finish or final completion acceptance. | item; actual h; actual permitted-cut dimensions | Each actual event/transfer; environmental monitoring at evidenced suitable intervals | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Actual product/contract criteria; dated measurement/environment records; paired transfer IDs; signer; defect/WIP and termination register |
| `cp_position_fix_resources` | `position_fix` | resources | Node-owned foreground ledger | job_id; node_id; period_id; event_id; meter_id; provider_id; actual_voltage; energy_unit; meter_start; meter_end; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; eligible_residual_energy_kWh; consumer_id; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; included_provider_scope; overlap_excluded_kWh; setup_owner; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence | At this node, collect actual powered permitted cutting, fixing tools, area lighting or hired access/tool availability. Read this node actual meter/provider periods and documented kWh conversion. Distinguish direct measured assignment from remaining eligible shared residual using the full actual outside-job consumer register. Reconcile provider energy/capital/setup coverage; actual contract bill_quantity times documented_hours_per_bill_unit governs h, including paid idle. Fully direct zero residual needs no weights; nonzero residual needs complete positive eligible weights, and unknown/negative residual is gap. Identify each meter record owner, actual interval, coverage and topology. For meter_role direct, the measured delta times documented actual-unit-to-kWh factor supplies direct_energy_kWh. For meter_role shared_master, its measured delta supplies shared_energy_total_kWh; any included direct submeters are explicitly listed in master_includes_direct_ids and removed once through all_direct_energy_kWh. Direct records outside the master scope are not removed from that master; direct records inside it are not charged again as residual. Each raw reading is owned once. Missing topology/source-to-total linkage is an energy gap. | kWh; actual charged h | Every meter interval and provider/billing period | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Meter calibration; provider bills/contracts; actual unit factor; complete consumer register; causal weights; paid availability/idle; provider/site overlap reconciliation |
| `cp_position_fix_fate` | `position_fix` | fate | Node-owned foreground ledger | job_id; node_id; period_id; event_id; material_id; assembly_id; custodian_id; transfer_id; waste_stream; gross_mass_kg; tare_mass_kg; incoming_transfer_mass_kg; outgoing_transfer_mass_kg; open_processed_wip_kg; close_processed_wip_kg; accepted_retained_kg; custody_time; species_id; particle_fraction; receiving_medium; direct_mass_kg; emission_method; emission_method_inputs; detection_limit; uncertainty; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id | At positioning/fixing, weigh actual permitted jamb/shim offcuts, captured cutting dust, nonusable fixing-stage failed/removed material and actual accessory packaging by separate waste_stream/material_id and tare. Independently measure/support any actual airborne cutting release with actual material/substance, particle_fraction, receiving_medium and emission_method inputs/uncertainty. Captured dust is exclusive waste, not air release. Record actual fixed-state outgoing transfer and held installed WIP pools; usable fixing exits remain product outputs. For mass reconciliation, give each physical stream an exclusive stream_pool_kind and balance_pool_id. Native kg streams enter with their actual measured kg; Number streams enter only with actual same-ID/current-state measured kg or the matching measured kg-per-item coefficient times count. Record pool mass by ID/state, not one factor applied after cutting or assembly changes. Missing bridge permits count reconciliation only and leaves mass reconciliation incomplete. An intact or installed composite is counted once in a documented composite group including its contributing inputs, or has evidenced constituent splits; never book the entire composite again in each component pool. Outgoing transfer mass is only an actual uniquely owned internal handoff, return-to-node/rework transfer or separately documented custody exit; it is exclusive of usable U/X outputs, waste, closing WIP and final accepted retention. Final customer acceptance leaves installed mass in accepted_retained only, not a second outgoing mass. opening_interface is observational and excluded from every material balance. | kg by actual material/substance | Every actual solid/liquid waste or direct-release event and cutoff pool measurement | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Actual cutting/fixing-stage gross/tare/net measurements by wood/polymer/material; capture record; actual direct-air material/fraction/medium and method if a release is evidenced; custodian tickets; own-node held-WIP reconciliation |
| `cp_complete_accept_material` | `complete_accept` | material | Node-owned foreground ledger | job_id; node_id; period_id; event_id; material_id; actual_unit; unit_alias; assembly_id; provider_id; S_open; R_received; S_close_intact_unissued; U_return; X_transfer; return_recipient; transfer_recipient; custody_time; bridge_item_count; bridge_net_mass_kg; bridge_same_ids; bridge_source; water_fraction; separately_added_water_kg; bridge_state; bridge_period; bridge_balance_pool_id | At completion, count actual separately supplied locksets by configuration/ID and weigh actual filler, cut protection, touchup, selected split-jamb caulk, abrasive/protection/wipe products and separately supplied water. Measure original formulation water_fraction and separately_added_water_kg without counting the same water receipt twice. Separate opening/receipts/closing intact unissued material from processed mixture/WIP, supplier returns and external handovers. Actual unused fresh-water exits remain positive own-node product outputs in original Mass basis, not liquid waste. For a required count-to-mass balance, obtain actual same-ID, same-state, same-period net mass evidence; kg per item is a coefficient and the physical stream mass requires count times that coefficient, or direct weighing of the entire exact stream. Mixed units/configurations/states are measured and summed separately, never assigned one mean. This bridge does not change the external Number-of-items exchanges. | item; kg | Each receipt, issue, usable exit and reporting cutoff | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Actual lockset IDs/counts; weighed repair/protection/water stocks and usable exits; formulation water fraction; added-water record; original product Mass/Number bridge; real recipient custody |
| `cp_complete_accept_events` | `complete_accept` | events | Node-owned foreground ledger | job_id; node_id; period_id; event_id; assembly_id; opening_id; transfer_id; state_before; state_after; received_count; accepted_ids; actual_start; actual_end; elapsed_h; product_criteria; lockset_configuration; operation_results; local_finish_scope; actual_dryness_result; split_jamb_joint_scope; defect_id; repeat_attempt_id; disposition; accepted_signer; cutoff_wip_ids; termination_decision | Receive actual mechanically fixed assembly IDs/transfer_id and received_count. Record actual lockset configuration/operation results, hole filling/sanding, exposed cut-face/touchup treatment, selected split-jamb joint scope and product-specific dryness results. Record each real failed/repeated completion event. Only distinct assembly/opening pairs with signed operation/local-finish-dryness and handover acceptance enter accepted_ids. Retain unaccepted installed WIP and termination disposition separately. | item; actual h; actual product-specific dryness/operation measurement units | Each actual event/transfer; environmental monitoring at evidenced suitable intervals | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Actual product/contract criteria; dated measurement/environment records; paired transfer IDs; signer; defect/WIP and termination register |
| `cp_complete_accept_resources` | `complete_accept` | resources | Node-owned foreground ledger | job_id; node_id; period_id; event_id; meter_id; provider_id; actual_voltage; energy_unit; meter_start; meter_end; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; eligible_residual_energy_kWh; consumer_id; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; included_provider_scope; overlap_excluded_kWh; setup_owner; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence | At this node, collect actual local sanding/finishing/cleanup tools, local dry-acceptance conditioning/lighting or hired completion access/tool availability. Read this node actual meter/provider periods and documented kWh conversion. Distinguish direct measured assignment from remaining eligible shared residual using the full actual outside-job consumer register. Reconcile provider energy/capital/setup coverage; actual contract bill_quantity times documented_hours_per_bill_unit governs h, including paid idle. Fully direct zero residual needs no weights; nonzero residual needs complete positive eligible weights, and unknown/negative residual is gap. Identify each meter record owner, actual interval, coverage and topology. For meter_role direct, the measured delta times documented actual-unit-to-kWh factor supplies direct_energy_kWh. For meter_role shared_master, its measured delta supplies shared_energy_total_kWh; any included direct submeters are explicitly listed in master_includes_direct_ids and removed once through all_direct_energy_kWh. Direct records outside the master scope are not removed from that master; direct records inside it are not charged again as residual. Each raw reading is owned once. Missing topology/source-to-total linkage is an energy gap. | kWh; actual charged h | Every meter interval and provider/billing period | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Meter calibration; provider bills/contracts; actual unit factor; complete consumer register; causal weights; paid availability/idle; provider/site overlap reconciliation |
| `cp_complete_accept_fate` | `complete_accept` | fate | Node-owned foreground ledger | job_id; node_id; period_id; event_id; material_id; assembly_id; custodian_id; transfer_id; waste_stream; gross_mass_kg; tare_mass_kg; incoming_transfer_mass_kg; outgoing_transfer_mass_kg; open_processed_wip_kg; close_processed_wip_kg; accepted_retained_kg; custody_time; water_fraction; species_id; particle_fraction; receiving_medium; direct_mass_kg; emission_method; emission_method_inputs; detection_limit; uncertainty; water_open_processed_wip_kg; water_close_processed_wip_kg; water_accepted_retained_kg; water_usable_return_kg; water_external_transfer_kg; water_solid_waste_kg; water_liquid_waste_kg; water_direct_measured_kg; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id | At completion, weigh actual local finishing residues, captured sanding fines, spent abrasive/wipe/protection materials and accessory packaging; distinguish nonusable rejected hardware/door and collected local cleanup liquid by waste_stream. Measure actual moisture/constituent fractions and net tare. Under the gross-issued water basis, reconcile accepted retained water, processed installed closing WIP, usable fresh-water/formulation returns/external handovers, wet solid waste, collected liquid and independently evidenced vapour/direct release. Unissued closing water is already excluded from gross draw. Specify actual species/particle fraction, receiving medium, method and uncertainty for any direct finishing/sanding/cleanup release; unknown balance remains gap. For mass reconciliation, give each physical stream an exclusive stream_pool_kind and balance_pool_id. Native kg streams enter with their actual measured kg; Number streams enter only with actual same-ID/current-state measured kg or the matching measured kg-per-item coefficient times count. Record pool mass by ID/state, not one factor applied after cutting or assembly changes. Missing bridge permits count reconciliation only and leaves mass reconciliation incomplete. An intact or installed composite is counted once in a documented composite group including its contributing inputs, or has evidenced constituent splits; never book the entire composite again in each component pool. Outgoing transfer mass is only an actual uniquely owned internal handoff, return-to-node/rework transfer or separately documented custody exit; it is exclusive of usable U/X outputs, waste, closing WIP and final accepted retention. Final customer acceptance leaves installed mass in accepted_retained only, not a second outgoing mass. opening_interface is observational and excluded from every material balance. | kg by actual material/substance | Every actual solid/liquid waste or direct-release event and cutoff pool measurement | Actual node job periods through acceptance or disclosed cutoff/termination | Actual job/site node, retaining full shared-consumer evidence where needed | per reference flow | Gross/tare/net measurement; actual wet/dry/constituent fractions; custodian tickets; direct release method and medium; uncertainty; node-specific reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_n` | reference_service | N = cardinality of distinct accepted_ids whose operation, local-finish dryness and handover checks passed for the homogeneous complete job cohort; N must be positive. Count each accepted assembly/opening pair once. | cp_complete_accept_events; accepted_ids; accepted_signer; product_criteria | N | |
| `reference_identity` | reference_service | Q_reference = N; q_reference = N / N = 1 item. This is mathematical normalization only. | cp_complete_accept_events; accepted_ids; N; accepted_n | q_reference | |
| `receive_condition_gross` | External material inputs at receive_condition | For each material_id and actual_unit: G_receive = S_open + R_received - S_close_intact_unissued. All unused usable U_return and X_transfer remain inside G until separate positive outputs. Negative G or overlapping stock/WIP/return records is a gap. | cp_receive_condition_material; material_id; actual_unit; S_open; R_received; S_close_intact_unissued | G_receive | |
| `receive_condition_usable_exit` | Unused product exits at receive_condition | For each unchanged input identity/unit: Q_U_receive = U_return; Q_X_receive = X_transfer as two separate positive exchanges. Diagnostic C_receive = G_receive - U_return - X_transfer is not a physical exchange or credit. Neither U nor X is in closing stock. | cp_receive_condition_material; material_id; actual_unit; U_return; X_transfer; return_recipient; transfer_recipient; G_receive | Q_U_receive; Q_X_receive; diagnostic_C_receive | |
| `receive_condition_bridge` | Measured property bridge when required at receive_condition | For each exact bridge_same_ids, bridge_state, bridge_period and bridge_balance_pool_id: k_kg_per_item_receive = bridge_net_mass_kg / positive bridge_item_count, with units kg/item. This output is a measured coefficient, not physical mass. Mixed configurations or changed cut/assembly states use separate same-ID measurements; no universal coefficient/density. Missing actual same-ID/state evidence or positive count leaves coefficient unavailable. External counted door/lockset exchanges remain item. | cp_receive_condition_material; bridge_same_ids; bridge_state; bridge_period; bridge_balance_pool_id; bridge_item_count; bridge_net_mass_kg; bridge_source | k_kg_per_item_receive | |
| `receive_condition_event_counts` | Interface/internal state rows at receive_condition | Use only the actual opening_id_count, received_count, released_count matching this node row/transfer/state; pair handoffs by transfer_id and assembly_id, and retain distinct real repeat event IDs. No internal feed is fixed to one. | cp_receive_condition_events; opening_id_count; received_count; released_count; transfer_id; assembly_id; state_before; state_after; event_id; repeat_attempt_id | Q_event_receive | |
| `receive_condition_waste_net` | Waste rows at receive_condition | Q_waste_receive = sum(gross_mass_kg - tare_mass_kg) for actual waste_stream/material_id; match each event/custodian once. Keep distinct waste streams exclusive and actual material state documented. | cp_receive_condition_fate; material_id; event_id; waste_stream; gross_mass_kg; tare_mass_kg; custodian_id | Q_waste_receive | |
| `receive_condition_electricity_total` | receive_condition_electricity | For each unique meter_record_id/owner/actual interval, E_meter_receive = (meter_end - meter_start) * energy_kWh_per_actual_unit using actual_conversion_evidence. direct_energy_kWh = sum of E_meter_receive for actual direct records assigned to this node/job. shared_energy_total_kWh is the E_meter_receive of the actual shared_master for the matching interval/scope (or sum of demonstrably nonoverlapping masters). Reconcile their exact IDs/intervals/scopes through meter_topology. Sum all consumers' actual direct readings included in this shared master once into all_direct_energy_kWh; outside-master direct readings are not subtracted from it. Eligible residual B_E = shared_energy_total_kWh - all_direct_energy_kWh - overlap_excluded_kWh and must reconcile to eligible_residual_energy_kWh. Exactly zero fully reconciled residual needs no shared denominator. Positive residual uses only complete residual-eligible consumers/weights and E_shared = B_E * eligible_weight / sum(all_eligible_weights), with positive evidenced sum. Unknown/negative residual, missing meter source linkage/topology or missing nonzero-residual weights is gap. E_receive = direct_energy_kWh + E_shared; direct readings included in a master are thereby removed once from residual rather than charged twice. Provider/site overlapping scope is excluded once. | cp_receive_condition_resources; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence; meter_start; meter_end; energy_unit; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; overlap_excluded_kWh; eligible_residual_energy_kWh; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | E_receive | |
| `receive_condition_service_total` | receive_condition_shared_service | H_contract_receive = bill_quantity * documented_hours_per_bill_unit from actual bill/contract coverage; bill_start/bill_end and paid_idle_h reconcile availability. A charged day uses its documented actual hour duration, never a default eight-hour shift. Reconcile total_service_h to H_contract for the same actual provider period, with included scope/overlap explicitly documented; unexplained mismatch is gap. B_H = total_service_h - all_direct_service_h reconciles to eligible_residual_service_h after provider overlap review. Fully reconciled B_H = 0 requires no weights. For B_H > 0, H_shared = B_H * eligible_weight / sum(all_eligible_weights) for complete eligible consumers and positive evidenced sum. Unknown/negative residual or missing nonzero-residual denominator is gap. H_receive = direct_service_h + H_shared. If contract unit cannot be evidenced in h, retain unit/conversion gap rather than fabricate duration. | cp_receive_condition_resources; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | H_receive | |
| `receive_condition_processed_balance` | Node physical balance at receive_condition | Use only physical kg outputs from receive_condition_stream_mass under one coherent balance_pool_id: G_mass_kg_receive + incoming_mass_kg_receive + open_wip_mass_kg_receive = outgoing_transfer_mass_kg_receive + accepted_retained_mass_kg_receive + close_wip_mass_kg_receive + U_mass_kg_receive + X_mass_kg_receive + actual net waste Q_waste_receive. Native Number quantities/coefficient kg per item never enter this equation directly. G already excludes intact unissued closing stock; do not deduct it again. Every ID/current state occupies one exclusive pool. Outgoing mass is actual node handoff/rework or other separately documented custody transfer, never final installed accepted mass already in retained, and never a duplicate U/X or waste exit. At final customer acceptance installed mass is accepted_retained only. opening_interface is excluded. If exact bridge/constituent evidence is absent, report mass-balance gap and perform only separately labelled count reconciliation; do not add unlike units. For composite output, include all contributing input masses under one evidenced composite group or use actual constituent splits, never repeat the whole composite in multiple component balances. Difference after supported pools is gap. | cp_receive_condition_material; cp_receive_condition_events; cp_receive_condition_fate; balance_pool_id; stream_pool_kind; stream_same_ids; constituent_scope; composite_group_id; G_mass_kg_receive; incoming_mass_kg_receive; open_wip_mass_kg_receive; outgoing_transfer_mass_kg_receive; accepted_retained_mass_kg_receive; close_wip_mass_kg_receive; U_mass_kg_receive; X_mass_kg_receive; Q_waste_receive | balance_gap_receive | |
| `receive_condition_normalize` | All inventory rows owned by receive_condition | q_row = actual applicable Q_node / N, where Q_node is the appropriate listed raw count, material G, positive U/X, net waste, E or H total for this row and complete homogeneous job cohort. N is actual accepted count from accepted_n. No output quantity can be inferred from reference one. | cp_receive_condition_material; cp_receive_condition_events; cp_receive_condition_resources; cp_receive_condition_fate; cp_complete_accept_events; N; G_receive; Q_U_receive; Q_X_receive; Q_event_receive; Q_waste_receive; E_receive; H_receive | q_row_receive | |
| `receive_condition_period_bridge` | Period/WIP attribution at receive_condition | Carry closing intact stock and processed/installed WIP by matching material/assembly IDs to the next opening without repurchasing or rebooking physical input. Real period events/resources occur once. Final job normalization awaits positive N or an explicit reviewed termination treatment. | cp_receive_condition_material; cp_receive_condition_events; cp_receive_condition_resources; cp_receive_condition_fate; period_id; event_id; assembly_id; material_id; S_close_intact_unissued; cutoff_wip_ids; close_processed_wip_kg; termination_decision | whole_job_totals_receive | |
| `position_fix_gross` | External material inputs at position_fix | For each material_id and actual_unit: G_fix = S_open + R_received - S_close_intact_unissued. All unused usable U_return and X_transfer remain inside G until separate positive outputs. Negative G or overlapping stock/WIP/return records is a gap. | cp_position_fix_material; material_id; actual_unit; S_open; R_received; S_close_intact_unissued | G_fix | |
| `position_fix_usable_exit` | Unused product exits at position_fix | For each unchanged input identity/unit: Q_U_fix = U_return; Q_X_fix = X_transfer as two separate positive exchanges. Diagnostic C_fix = G_fix - U_return - X_transfer is not a physical exchange or credit. Neither U nor X is in closing stock. | cp_position_fix_material; material_id; actual_unit; U_return; X_transfer; return_recipient; transfer_recipient; G_fix | Q_U_fix; Q_X_fix; diagnostic_C_fix | |
| `position_fix_bridge` | Measured property bridge when required at position_fix | For each exact bridge_same_ids, bridge_state, bridge_period and bridge_balance_pool_id: k_kg_per_item_fix = bridge_net_mass_kg / positive bridge_item_count, with units kg/item. This output is a measured coefficient, not physical mass. Mixed configurations or changed cut/assembly states use separate same-ID measurements; no universal coefficient/density. Missing actual same-ID/state evidence or positive count leaves coefficient unavailable. External counted door/lockset exchanges remain item. | cp_position_fix_material; bridge_same_ids; bridge_state; bridge_period; bridge_balance_pool_id; bridge_item_count; bridge_net_mass_kg; bridge_source | k_kg_per_item_fix | |
| `position_fix_event_counts` | Interface/internal state rows at position_fix | Use only the actual received_count, fixed_count matching this node row/transfer/state; pair handoffs by transfer_id and assembly_id, and retain distinct real repeat event IDs. No internal feed is fixed to one. | cp_position_fix_events; received_count; fixed_count; transfer_id; assembly_id; state_before; state_after; event_id; repeat_attempt_id | Q_event_fix | |
| `position_fix_waste_net` | Waste rows at position_fix | Q_waste_fix = sum(gross_mass_kg - tare_mass_kg) for actual waste_stream/material_id; match each event/custodian once. Keep distinct waste streams exclusive and actual material state documented. | cp_position_fix_fate; material_id; event_id; waste_stream; gross_mass_kg; tare_mass_kg; custodian_id | Q_waste_fix | |
| `position_fix_direct_release` | Elementary release rows at position_fix | Q_release_fix = sum independently measured direct_mass_kg, or actual quantity explicitly derived by the recorded evidenced emission_method and emission_method_inputs, by species_id/particle_fraction/receiving_medium. Missing substance/medium/quantity support remains gap. Captured waste is excluded; unexplained balance is not a release. | cp_position_fix_fate; species_id; particle_fraction; receiving_medium; direct_mass_kg; emission_method; emission_method_inputs; detection_limit; uncertainty | Q_release_fix | |
| `position_fix_electricity_total` | position_fix_electricity | For each unique meter_record_id/owner/actual interval, E_meter_fix = (meter_end - meter_start) * energy_kWh_per_actual_unit using actual_conversion_evidence. direct_energy_kWh = sum of E_meter_fix for actual direct records assigned to this node/job. shared_energy_total_kWh is the E_meter_fix of the actual shared_master for the matching interval/scope (or sum of demonstrably nonoverlapping masters). Reconcile their exact IDs/intervals/scopes through meter_topology. Sum all consumers' actual direct readings included in this shared master once into all_direct_energy_kWh; outside-master direct readings are not subtracted from it. Eligible residual B_E = shared_energy_total_kWh - all_direct_energy_kWh - overlap_excluded_kWh and must reconcile to eligible_residual_energy_kWh. Exactly zero fully reconciled residual needs no shared denominator. Positive residual uses only complete residual-eligible consumers/weights and E_shared = B_E * eligible_weight / sum(all_eligible_weights), with positive evidenced sum. Unknown/negative residual, missing meter source linkage/topology or missing nonzero-residual weights is gap. E_fix = direct_energy_kWh + E_shared; direct readings included in a master are thereby removed once from residual rather than charged twice. Provider/site overlapping scope is excluded once. | cp_position_fix_resources; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence; meter_start; meter_end; energy_unit; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; overlap_excluded_kWh; eligible_residual_energy_kWh; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | E_fix | |
| `position_fix_service_total` | position_fix_shared_service | H_contract_fix = bill_quantity * documented_hours_per_bill_unit from actual bill/contract coverage; bill_start/bill_end and paid_idle_h reconcile availability. A charged day uses its documented actual hour duration, never a default eight-hour shift. Reconcile total_service_h to H_contract for the same actual provider period, with included scope/overlap explicitly documented; unexplained mismatch is gap. B_H = total_service_h - all_direct_service_h reconciles to eligible_residual_service_h after provider overlap review. Fully reconciled B_H = 0 requires no weights. For B_H > 0, H_shared = B_H * eligible_weight / sum(all_eligible_weights) for complete eligible consumers and positive evidenced sum. Unknown/negative residual or missing nonzero-residual denominator is gap. H_fix = direct_service_h + H_shared. If contract unit cannot be evidenced in h, retain unit/conversion gap rather than fabricate duration. | cp_position_fix_resources; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | H_fix | |
| `position_fix_processed_balance` | Node physical balance at position_fix | Use only physical kg outputs from position_fix_stream_mass under one coherent balance_pool_id: G_mass_kg_fix + incoming_mass_kg_fix + open_wip_mass_kg_fix = outgoing_transfer_mass_kg_fix + accepted_retained_mass_kg_fix + close_wip_mass_kg_fix + U_mass_kg_fix + X_mass_kg_fix + actual net waste Q_waste_fix + independently supported direct release Q_release_fix. Native Number quantities/coefficient kg per item never enter this equation directly. G already excludes intact unissued closing stock; do not deduct it again. Every ID/current state occupies one exclusive pool. Outgoing mass is actual node handoff/rework or other separately documented custody transfer, never final installed accepted mass already in retained, and never a duplicate U/X or waste exit. At final customer acceptance installed mass is accepted_retained only. opening_interface is excluded. If exact bridge/constituent evidence is absent, report mass-balance gap and perform only separately labelled count reconciliation; do not add unlike units. For composite output, include all contributing input masses under one evidenced composite group or use actual constituent splits, never repeat the whole composite in multiple component balances. Difference after supported pools is gap. | cp_position_fix_material; cp_position_fix_events; cp_position_fix_fate; balance_pool_id; stream_pool_kind; stream_same_ids; constituent_scope; composite_group_id; G_mass_kg_fix; incoming_mass_kg_fix; open_wip_mass_kg_fix; outgoing_transfer_mass_kg_fix; accepted_retained_mass_kg_fix; close_wip_mass_kg_fix; U_mass_kg_fix; X_mass_kg_fix; Q_waste_fix; Q_release_fix | balance_gap_fix | |
| `position_fix_normalize` | All inventory rows owned by position_fix | q_row = actual applicable Q_node / N, where Q_node is the appropriate listed raw count, material G, positive U/X, net waste, independently evidenced release, E or H total for this row and complete homogeneous job cohort. N is actual accepted count from accepted_n. No output quantity can be inferred from reference one. | cp_position_fix_material; cp_position_fix_events; cp_position_fix_resources; cp_position_fix_fate; cp_complete_accept_events; N; G_fix; Q_U_fix; Q_X_fix; Q_event_fix; Q_waste_fix; Q_release_fix; E_fix; H_fix | q_row_fix | |
| `position_fix_period_bridge` | Period/WIP attribution at position_fix | Carry closing intact stock and processed/installed WIP by matching material/assembly IDs to the next opening without repurchasing or rebooking physical input. Real period events/resources occur once. Final job normalization awaits positive N or an explicit reviewed termination treatment. | cp_position_fix_material; cp_position_fix_events; cp_position_fix_resources; cp_position_fix_fate; period_id; event_id; assembly_id; material_id; S_close_intact_unissued; cutoff_wip_ids; close_processed_wip_kg; termination_decision | whole_job_totals_fix | |
| `complete_accept_gross` | External material inputs at complete_accept | For each material_id and actual_unit: G_complete = S_open + R_received - S_close_intact_unissued. All unused usable U_return and X_transfer remain inside G until separate positive outputs. Negative G or overlapping stock/WIP/return records is a gap. | cp_complete_accept_material; material_id; actual_unit; S_open; R_received; S_close_intact_unissued | G_complete | |
| `complete_accept_usable_exit` | Unused product exits at complete_accept | For each unchanged input identity/unit: Q_U_complete = U_return; Q_X_complete = X_transfer as two separate positive exchanges. Diagnostic C_complete = G_complete - U_return - X_transfer is not a physical exchange or credit. Neither U nor X is in closing stock. | cp_complete_accept_material; material_id; actual_unit; U_return; X_transfer; return_recipient; transfer_recipient; G_complete | Q_U_complete; Q_X_complete; diagnostic_C_complete | |
| `complete_accept_bridge` | Measured property bridge when required at complete_accept | For each exact bridge_same_ids, bridge_state, bridge_period and bridge_balance_pool_id: k_kg_per_item_complete = bridge_net_mass_kg / positive bridge_item_count, with units kg/item. This output is a measured coefficient, not physical mass. Mixed configurations or changed cut/assembly states use separate same-ID measurements; no universal coefficient/density. Missing actual same-ID/state evidence or positive count leaves coefficient unavailable. External counted door/lockset exchanges remain item. | cp_complete_accept_material; bridge_same_ids; bridge_state; bridge_period; bridge_balance_pool_id; bridge_item_count; bridge_net_mass_kg; bridge_source | k_kg_per_item_complete | |
| `complete_accept_event_counts` | Interface/internal state rows at complete_accept | Use only the actual received_count matching this node row/transfer/state; pair handoffs by transfer_id and assembly_id, and retain distinct real repeat event IDs. No internal feed is fixed to one. | cp_complete_accept_events; received_count; transfer_id; assembly_id; state_before; state_after; event_id; repeat_attempt_id | Q_event_complete | |
| `complete_accept_waste_net` | Waste rows at complete_accept | Q_waste_complete = sum(gross_mass_kg - tare_mass_kg) for the actual identified waste_stream/material_id; match each event/custodian once. Water content is actual net waste mass times measured water_fraction; no overlap with direct-release pools. | cp_complete_accept_fate; material_id; event_id; waste_stream; gross_mass_kg; tare_mass_kg; water_fraction; custodian_id | Q_waste_complete; water_in_waste_complete | |
| `complete_accept_direct_release` | Elementary release rows at complete_accept | Q_release_complete = sum independently measured direct_mass_kg, or actual quantity explicitly derived by the recorded evidenced emission_method and emission_method_inputs, by species_id/particle_fraction/receiving_medium. Missing substance/medium/quantity support remains gap. Captured waste is excluded; unexplained balance is not a release. | cp_complete_accept_fate; species_id; particle_fraction; receiving_medium; direct_mass_kg; emission_method; emission_method_inputs; detection_limit; uncertainty | Q_release_complete | |
| `complete_accept_electricity_total` | complete_accept_electricity | For each unique meter_record_id/owner/actual interval, E_meter_complete = (meter_end - meter_start) * energy_kWh_per_actual_unit using actual_conversion_evidence. direct_energy_kWh = sum of E_meter_complete for actual direct records assigned to this node/job. shared_energy_total_kWh is the E_meter_complete of the actual shared_master for the matching interval/scope (or sum of demonstrably nonoverlapping masters). Reconcile their exact IDs/intervals/scopes through meter_topology. Sum all consumers' actual direct readings included in this shared master once into all_direct_energy_kWh; outside-master direct readings are not subtracted from it. Eligible residual B_E = shared_energy_total_kWh - all_direct_energy_kWh - overlap_excluded_kWh and must reconcile to eligible_residual_energy_kWh. Exactly zero fully reconciled residual needs no shared denominator. Positive residual uses only complete residual-eligible consumers/weights and E_shared = B_E * eligible_weight / sum(all_eligible_weights), with positive evidenced sum. Unknown/negative residual, missing meter source linkage/topology or missing nonzero-residual weights is gap. E_complete = direct_energy_kWh + E_shared; direct readings included in a master are thereby removed once from residual rather than charged twice. Provider/site overlapping scope is excluded once. | cp_complete_accept_resources; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence; meter_start; meter_end; energy_unit; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; overlap_excluded_kWh; eligible_residual_energy_kWh; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | E_complete | |
| `complete_accept_service_total` | complete_accept_shared_service | H_contract_complete = bill_quantity * documented_hours_per_bill_unit from actual bill/contract coverage; bill_start/bill_end and paid_idle_h reconcile availability. A charged day uses its documented actual hour duration, never a default eight-hour shift. Reconcile total_service_h to H_contract for the same actual provider period, with included scope/overlap explicitly documented; unexplained mismatch is gap. B_H = total_service_h - all_direct_service_h reconciles to eligible_residual_service_h after provider overlap review. Fully reconciled B_H = 0 requires no weights. For B_H > 0, H_shared = B_H * eligible_weight / sum(all_eligible_weights) for complete eligible consumers and positive evidenced sum. Unknown/negative residual or missing nonzero-residual denominator is gap. H_complete = direct_service_h + H_shared. If contract unit cannot be evidenced in h, retain unit/conversion gap rather than fabricate duration. | cp_complete_accept_resources; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | H_complete | |
| `complete_accept_processed_balance` | Node physical balance at complete_accept | Use only physical kg outputs from complete_accept_stream_mass under one coherent balance_pool_id: G_mass_kg_complete + incoming_mass_kg_complete + open_wip_mass_kg_complete = outgoing_transfer_mass_kg_complete + accepted_retained_mass_kg_complete + close_wip_mass_kg_complete + U_mass_kg_complete + X_mass_kg_complete + actual net waste Q_waste_complete + independently supported direct release Q_release_complete. Native Number quantities/coefficient kg per item never enter this equation directly. G already excludes intact unissued closing stock; do not deduct it again. Every ID/current state occupies one exclusive pool. Outgoing mass is actual node handoff/rework or other separately documented custody transfer, never final installed accepted mass already in retained, and never a duplicate U/X or waste exit. At final customer acceptance installed mass is accepted_retained only. opening_interface is excluded. If exact bridge/constituent evidence is absent, report mass-balance gap and perform only separately labelled count reconciliation; do not add unlike units. For composite output, include all contributing input masses under one evidenced composite group or use actual constituent splits, never repeat the whole composite in multiple component balances. Difference after supported pools is gap. | cp_complete_accept_material; cp_complete_accept_events; cp_complete_accept_fate; balance_pool_id; stream_pool_kind; stream_same_ids; constituent_scope; composite_group_id; G_mass_kg_complete; incoming_mass_kg_complete; open_wip_mass_kg_complete; outgoing_transfer_mass_kg_complete; accepted_retained_mass_kg_complete; close_wip_mass_kg_complete; U_mass_kg_complete; X_mass_kg_complete; Q_waste_complete; Q_release_complete | balance_gap_complete | |
| `complete_accept_normalize` | All inventory rows owned by complete_accept | q_row = actual applicable Q_node / N, where Q_node is the appropriate listed raw count, material G, positive U/X, net waste, independently evidenced release, E or H total for this row and complete homogeneous job cohort. N is actual accepted count from accepted_n. No output quantity can be inferred from reference one. | cp_complete_accept_material; cp_complete_accept_events; cp_complete_accept_resources; cp_complete_accept_fate; N; G_complete; Q_U_complete; Q_X_complete; Q_event_complete; Q_waste_complete; Q_release_complete; E_complete; H_complete | q_row_complete | |
| `complete_accept_period_bridge` | Period/WIP attribution at complete_accept | Carry closing intact stock and processed/installed WIP by matching material/assembly IDs to the next opening without repurchasing or rebooking physical input. Real period events/resources occur once. Final job normalization awaits positive N or an explicit reviewed termination treatment. | cp_complete_accept_material; cp_complete_accept_events; cp_complete_accept_resources; cp_complete_accept_fate; period_id; event_id; assembly_id; material_id; S_close_intact_unissued; cutoff_wip_ids; close_processed_wip_kg; termination_decision | whole_job_totals_complete | |
| `complete_water_fate` | completion_water; local_repair_materials; unused_completion_material_return; repair_waste; completion_wastewater; complete_accept_other_releases | Use gross-issued basis only: W_G = sum(G_complete for each formulation * its actual water_fraction) + G_complete for separately supplied fresh water, with all terms in kg water and no duplicated separately_added_water_kg. W_available = W_G + water_open_processed_wip_kg. Reconcile to disjoint water_accepted_retained_kg + water_close_processed_wip_kg + water_usable_return_kg + water_external_transfer_kg + water_solid_waste_kg + water_liquid_waste_kg + water_direct_measured_kg. Unissued intact closing water/formulation is already excluded in G_complete and must not be deducted again. Usable unprocessed fresh-water/formulation returns and external handovers remain separate positive outputs at complete_accept in original product Mass basis. Actual vapour/direct-release water is independently measured/evidenced, never assigned from the residual; difference remains water_gap. Repeat actual constituent accounting for relevant nonwater formulation fractions without inventing generic pollutant identity. | cp_complete_accept_material; cp_complete_accept_events; cp_complete_accept_fate; G_complete; water_fraction; separately_added_water_kg; water_open_processed_wip_kg; water_accepted_retained_kg; water_close_processed_wip_kg; water_usable_return_kg; water_external_transfer_kg; water_solid_waste_kg; water_liquid_waste_kg; water_direct_measured_kg | water_gap; separately_supported_water_direct_release | |
| `receive_condition_stream_mass` | Each actual physical stock/usable/internal/WIP/accepted pool at receive_condition | For each stream_id, actual stream_pool_kind, matching stream_same_ids/state/period and balance_pool_id: if stream_actual_unit is kg, m_stream_kg = stream_quantity_kg; if Number/item, use direct calibrated stream_direct_net_mass_kg for the exact same stream IDs/current state, or sum over homogeneous same-ID measured groups of stream_item_count * k_kg_per_item_receive. The direct-weighed route and coefficient route are alternatives, never added together. A mixed-ID/state stream requires separate measured groups or direct weighing of that exact mixed stream. The counted native gross/usable/internal/WIP quantities reconcile to their actual ledger IDs, preserving external item. Assign each physical mass once to G_mass_kg_receive, U_mass_kg_receive, X_mass_kg_receive, incoming_mass_kg_receive, outgoing_transfer_mass_kg_receive, open_wip_mass_kg_receive, close_wip_mass_kg_receive or accepted_retained_mass_kg_receive according to its exclusive stream_pool_kind. G/U/X stream counts must reconcile to native G_receive, U_return and X_transfer. Internal/installed pool counts reconcile to node events and actual IDs. Final accepted installed mass is retained, not a customer-handover outgoing mass. opening_interface never enters these pools. Missing actual same-ID/current-state weighing evidence is mass gap; count reconciliation remains separate. Native lengths, when needed at position_fix, require its separately declared length-mass calculation and cannot be inserted into this count-coefficient route. | cp_receive_condition_material; cp_receive_condition_events; cp_receive_condition_fate; G_receive; U_return; X_transfer; bridge_same_ids; bridge_state; bridge_period; k_kg_per_item_receive; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id | G_mass_kg_receive; U_mass_kg_receive; X_mass_kg_receive; incoming_mass_kg_receive; outgoing_transfer_mass_kg_receive; open_wip_mass_kg_receive; close_wip_mass_kg_receive; accepted_retained_mass_kg_receive | |
| `position_fix_stream_mass` | Each actual physical stock/usable/internal/WIP/accepted pool at position_fix | For each stream_id, actual stream_pool_kind, matching stream_same_ids/state/period and balance_pool_id: if stream_actual_unit is kg, m_stream_kg = stream_quantity_kg; if Number/item, use direct calibrated stream_direct_net_mass_kg for the exact same stream IDs/current state, or sum over homogeneous same-ID measured groups of stream_item_count * k_kg_per_item_fix. The direct-weighed route and coefficient route are alternatives, never added together. A mixed-ID/state stream requires separate measured groups or direct weighing of that exact mixed stream. The counted native gross/usable/internal/WIP quantities reconcile to their actual ledger IDs, preserving external item. Assign each physical mass once to G_mass_kg_fix, U_mass_kg_fix, X_mass_kg_fix, incoming_mass_kg_fix, outgoing_transfer_mass_kg_fix, open_wip_mass_kg_fix, close_wip_mass_kg_fix or accepted_retained_mass_kg_fix according to its exclusive stream_pool_kind. G/U/X stream counts must reconcile to native G_fix, U_return and X_transfer. Internal/installed pool counts reconcile to node events and actual IDs. Final accepted installed mass is retained, not a customer-handover outgoing mass. opening_interface never enters these pools. Missing actual same-ID/current-state weighing evidence is mass gap; count reconciliation remains separate. Native lengths, when needed at position_fix, require its separately declared length-mass calculation and cannot be inserted into this count-coefficient route. For an actually length-recorded fixing-material pool, use length_total_mass_kg_fix from position_fix_length_mass as a separately evidenced alternative, assigned once to that matching stream pool, rather than any Number coefficient or a second physical mass. | cp_position_fix_material; cp_position_fix_events; cp_position_fix_fate; G_fix; U_return; X_transfer; bridge_same_ids; bridge_state; bridge_period; k_kg_per_item_fix; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id; length_total_mass_kg_fix | G_mass_kg_fix; U_mass_kg_fix; X_mass_kg_fix; incoming_mass_kg_fix; outgoing_transfer_mass_kg_fix; open_wip_mass_kg_fix; close_wip_mass_kg_fix; accepted_retained_mass_kg_fix | |
| `complete_accept_stream_mass` | Each actual physical stock/usable/internal/WIP/accepted pool at complete_accept | For each stream_id, actual stream_pool_kind, matching stream_same_ids/state/period and balance_pool_id: if stream_actual_unit is kg, m_stream_kg = stream_quantity_kg; if Number/item, use direct calibrated stream_direct_net_mass_kg for the exact same stream IDs/current state, or sum over homogeneous same-ID measured groups of stream_item_count * k_kg_per_item_complete. The direct-weighed route and coefficient route are alternatives, never added together. A mixed-ID/state stream requires separate measured groups or direct weighing of that exact mixed stream. The counted native gross/usable/internal/WIP quantities reconcile to their actual ledger IDs, preserving external item. Assign each physical mass once to G_mass_kg_complete, U_mass_kg_complete, X_mass_kg_complete, incoming_mass_kg_complete, outgoing_transfer_mass_kg_complete, open_wip_mass_kg_complete, close_wip_mass_kg_complete or accepted_retained_mass_kg_complete according to its exclusive stream_pool_kind. G/U/X stream counts must reconcile to native G_complete, U_return and X_transfer. Internal/installed pool counts reconcile to node events and actual IDs. Final accepted installed mass is retained, not a customer-handover outgoing mass. opening_interface never enters these pools. Missing actual same-ID/current-state weighing evidence is mass gap; count reconciliation remains separate. Native lengths, when needed at position_fix, require its separately declared length-mass calculation and cannot be inserted into this count-coefficient route. | cp_complete_accept_material; cp_complete_accept_events; cp_complete_accept_fate; G_complete; U_return; X_transfer; bridge_same_ids; bridge_state; bridge_period; k_kg_per_item_complete; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id | G_mass_kg_complete; U_mass_kg_complete; X_mass_kg_complete; incoming_mass_kg_complete; outgoing_transfer_mass_kg_complete; open_wip_mass_kg_complete; close_wip_mass_kg_complete; accepted_retained_mass_kg_complete | |
| `position_fix_length_mass` | Actual permitted fixing-material length bridge at position_fix | length_total_mass_kg_fix = bridge_length_m * bridge_linear_mass_kg_per_m only for actual matching same material/specification/current state with recorded bridge_source. It is an actual total kg, distinct from k_kg_per_item_fix. Match the exact stream_id/pool and use this mass instead of, never in addition to, direct weighed or count-bridged mass for that same stream. Without actual measured length/evidenced same-material linear mass, retain conversion gap; do not infer generic density. Original shim/fastener exchange stays in declared Mass basis. | cp_position_fix_material; cp_position_fix_fate; bridge_length_m; bridge_linear_mass_kg_per_m; bridge_same_ids; bridge_state; bridge_source; stream_id; stream_pool_kind; balance_pool_id | length_total_mass_kg_fix | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_traceability` | All cards | Actual material/product/service/substance identities and states must fit the card. Conditional umbrella rows expand using real foreground specifications. Fixed UUIDs require independently confirmed detail/property/unit evidence. | Specifications, composition, supplier/provider scope, verified binding review |
| `acceptance_quality` | Reference and node handoffs | Incoming factory finish, compatible sound opening, actual conditioning release, permitted cut state, alignment/fixings, lockset operation, local finishing/dryness and signed final acceptance must be traceable. Use actual applicable tolerances and supplier requirements. | Own-node inspection/event logs and signed acceptance |
| `measurement_quality` | Counts, masses, energy and service | Calibrated/reconciled instruments, tare, ID/count reconciliation, consistent numerator units and original-stock units. Record uncertainty and actual detection limits. No guessed count-to-mass density or assumed workday. | Calibration/tare sheets, receipts, meters, contract and same-ID bridge |
| `completeness_quality` | All nodes | Reconcile every real failure/repeat event, stock/usable return, packaging, accessory/cleanup material, residue, waste/liquid and potential direct release. Observed absence, not-applicable scope and unmeasured gap are distinguishable. | Node fate/stock reconciliation, event register and gap register |
| `period_quality` | Job and shared resources | Cover actual receipt-to-handover periods and paid idle/availability; state excluded earlier opening works and later use. Register complete outside-job shared consumers and provider dataset overlap. Document unresolved replacement/termination before finalization. | Period/WIP bridge, contracts, consumer register and reviewed burden ownership |
| `range_quality` | Every nonreference card | Nonreference Range is provisional reasoned_estimate QA only with card-specific rationale; reference Range is strict calculated N/N identity. Replace provisional screens with reviewed source/foreground ranges when available. Never impute a missing amount or conditional absence from the lower bound. | Card Range rationale and reviewed foreground distribution where available |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_scope` | Fail scope review for unfinished supply/full painting, major opening construction, wrong door type or unsupported exterior/fire/acoustic claim. Inspect the actual product specification and factory-finish receipt rather than a broad classification label. | jeldwen-jii109 |
| `validate_acceptance` | Confirm N is positive, unique and drawn only from completed operation/local-dryness-accepted units, with reference_service in complete_accept. Exclude unaccepted installed WIP and unresolved defects. |  |
| `validate_handoffs` | Reconcile conditioned_unit/fix_feed and fixed_unit/complete_feed by actual transfer IDs, counts, state and period. Each protocol belongs to its card's real node. Do not force internal counts to the reference quantity. |  |
| `validate_material_pools` | Check gross physical inputs, separate positive unused exits and closing/WIP pools, preserving count for door/lockset returns and Mass for other materials. Confirm no second net-consumed exchange or duplicated upstream credit. |  |
| `validate_rework` | Trace every actual off-spec event to its producing node and real repair, held, usable exit or waste fate. Count every real repeat operation's resources once and remove only duplicate records. Waste cannot count as accepted service. |  |
| `validate_direct_releases` | Verify substance/material, particle definition where needed, receiving medium and quantity method before elementary binding. Cutting direct dust belongs position_fix; captured dust is waste. Completion water/chemical losses use exclusive constituent pools; missing fate is incomplete coverage. |  |
| `validate_shared_periods` | Check all consumers and actual periods, positive evidenced residual-allocation denominator, independent direct assignments, paid idle/service units and nonoverlapping provider/site energy/capital/setup scope. Missing replacement/termination decisions or unresolved WIP burden treatment blocks finalization. |  |
| `validate_identity_range` | Unresolved flow/support identities remain explicitly unresolved; no generic near-match or guessed UUID is accepted. Provisional Range membership does not establish quantity, safety, identity or readiness. Report actual checks, skipped conditional checks and data gaps. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground site-installation data package with downstream process or lifecyclemodel projection after identities and measurements are resolved |
| downstream_use | secondary_dataset and/or background_dataset for the same disclosed installation boundary and actual qualifiers |
| allowed_use | Modelling accepted factory-finished interior timber prehung installation with declared input manufacture/service links and local completion scope |
| excluded_use | Door manufacturing; complete building/opening construction; unfinished/full-paint route; demolition; exterior/fire/acoustic product claims; use/maintenance/end of life; unresolved partial job presented as completed service |
| required_metadata | PCR/version; site and geography; door/core/species/jamb/finish/hardware/dimensions/handing; opening acceptance; job and period IDs; actual route/local finish; upstream coverage; N; node quantities; measured bridges; shared consumer/provider boundaries; custody and rework records |
| required_quality_disclosure | Fixed versus unresolved identity/support coverage; measured versus estimated amounts; provisional reasoned ranges; calibration/uncertainty; constituent/fate gaps; conditional absent/unmeasured distinction; period/WIP/termination and shared attribution limitations |
| update_trigger | Product/route/finish or opening boundary change; changed hardware/material/provider; new measurement/fate/UUID evidence; altered site energy/shared contract; revised applicable supplier criteria or observed repeated quality problem |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `jeldwen-jii109` | handbook | JELD-WEN, Installation Instructions for Interior Pre-Hung Doors, JII109 3/25, pp.1-6. https://cmd-jeld-wen.s3.us-east-2.amazonaws.com/assets/documents/3476246473.pdf | Product and opening checks; environmental conditioning/storage; one-piece/split-jamb distinction; permitted jamb trimming, shims and fixings; lockset, holes, conditional finish/caulk/protection completion gate. Its numeric recommendations are not universal inventory defaults. |
