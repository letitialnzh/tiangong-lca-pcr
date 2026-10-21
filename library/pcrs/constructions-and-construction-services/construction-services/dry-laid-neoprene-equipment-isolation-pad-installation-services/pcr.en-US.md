---
pcr_id: pcr.constructions-and-construction-services.construction-services.dry-laid-neoprene-equipment-isolation-pad-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dry-laid neoprene equipment isolation pad installation services

## 1. Scope and Applicability

This PCR covers a separately contracted first installation of single-layer, unbonded, modular neoprene vibration-isolation pads beneath one indoor machine on an existing accepted support surface. The actual equipment and pad supplier must permit an unanchored dry-laid arrangement at the declared location. Equipment arrives at the installation position, stopped and isolated, with lifting points and loading information available. The installer surveys supports, confirms the approved pad schedule, hand-cuts complete modules where needed, lifts locally, places pads, lowers the equipment, inspects the loaded arrangement, corrects defects and hands over the accepted isolation installation.

Exclude equipment manufacture or general equipment installation, long-distance positioning, floor or foundation construction, anchoring and seismic restraint, adhesives or grout, stacked pads or added shims, spring mounts, wall/ceiling acoustic finishes, old-pad removal, powered cutting, chemical cleaning, operating-performance tests and subsequent operation. If any excluded activity is necessary, this category alone is insufficient; do not omit it from a larger system. This gate establishes installation conformity, not a numerical vibration reduction or an operating-machine commissioning result. Mason SW illustrates modular neoprene supply and some unbolted applications, not a universal no-anchor design (`mason-super-w-2014`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.dry-laid-neoprene-equipment-isolation-pad-installation-services |
| classification_refs | cpc:3.0:54651 — Sound or vibration insulation services; narrower |
| covered_products | First dry placement of single-layer modular neoprene pads under a declared indoor machine; local lifting, loaded inspection, correction and signed isolation-only handover |
| excluded_products | Complete machinery installation; foundations; restraints; bonded, shimmed or multilayer systems; spring isolators; acoustic wall finishes; replacements; machinery operation |
| representative_product | Accepted single-machine dry-laid neoprene isolation installation |
| production_route | Approve actual support/load schedule → receive pads and equipment interface → hand-cut complete modules → local lift and dry place → lower, inspect and correct → signed handover |
| market_state | Completed isolation installation service on customer equipment, before equipment commissioning |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted single-machine dry-laid neoprene isolation installation |
| How much | 1 item complete accepted installation for one declared equipment configuration |
| How well | Actual supplier-approved pad grade, module arrangement and per-support loads; complete bearing contact, stable level placement and no unintended rigid bridge; signed installation inspection |
| How long or cycle | One installation work order including correction and final acceptance; asset burdens may span reporting periods; no machine operating life assigned |
| reference_flow_link | `accepted_isolation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted dry-laid neoprene equipment isolation installation |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site and work order; equipment identifier, supported mass and load distribution; lowest disturbing frequency used in design; actual supplier design approval for unanchored use; neoprene grade, hardness, thickness, module dimensions and layout; per-support design loads; installation instruction edition; lifting method; loaded inspection criteria and actual results; starting-condition exclusions; acceptance date; resource and waste owners |

Group only installations with equivalent disclosed equipment/load/layout and gate. Split materially different configurations; a counted installation does not establish equal acoustic performance. Actual signed accepted count D must be positive. A rejected job is not included in D.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_count | accepted_isolation | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | D is the independently recorded count of completed accepted same-configuration installations in cp_gate. Count one entire installation, not individual pads or supports. |
| mass_records | neoprene_pads; packaging; usable_returns; installation_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh actual material by grade and custody state. Piece-to-mass conversion requires the actual SKU and verified unit mass; rated supported load, gross shipping weight and pad plan area are not pad net mass. |
| interface_count | equipment_interface | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Record actual equipment custody once, including unsuccessful jobs; do not fix its input count to the final reference or purchase the customer equipment again. |
| service_units | owned_resources; contracted_services; installation_electricity | Actual verified count, service or energy property | item; actual service unit; kWh | Keep metered energy distinct from rated power. A service packet is countable only with a defined scope and quantity; hourly hire keeps its duration unit and verified support chain. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Customer equipment stopped and isolated at the prepared position; accepted existing support surface, approved loading and pad schedule, authorized lifting arrangement and verified permission for unanchored dry placement |
| starting_condition_role | Customer equipment and existing substrate are physical interfaces; supplied pads enter as new consumables |
| product_classification_scope | Isolation installation only, a narrow part of CPC 54651; excludes machinery installation and acoustic finishing services |
| recursive_input_rule | A purchased isolation subcontract is either a documented external service package or disaggregated foreground work, never both; do not recursively add another complete copy of the same isolation service |
| upstream_dataset_requirement | Supply-chain data for actually consumed pads, packaging, electricity, owned-resource shares and external services at matching gates; no second manufacture of customer equipment or existing building |
| disclosure | Declare which party owns equipment, lifting tools, transport, packaging, rejects and external treatment. Link to a wider project when excluded work is necessary; no claim of a whole machine or building life cycle |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| installation_gate | place_inspect | The two physical component roles are customer equipment interface and supplied isolation pads. Existing floor is a declared substrate interface. Only local lifting for pad placement belongs here; accept all supports as one installation after loaded inspection. |  |
| route_eligibility | neoprene_pads; accepted_isolation | Use single-layer neoprene complete modules and actual approved layout. Manufacturer information supports this product family and selected unbolted applications, not all locations; anchoring or stacking requirements move the work outside this scope. | mason-super-w-2014 |
| design_inputs | accepted_isolation | Retain actual per-support loads, number and arrangement of pads and disturbing-frequency/design evidence. Do not assume even load sharing merely by dividing total weight by pad count. Actual product design approval controls execution. | karman-isolator-selection |
| event_ownership | all cards | Record receipt, local lifting, cutting, correction, inspection, cleanup and exits for the entire work order. Include measured battery charging and external support when present. Check chemical use or powered work as scope changes, not zero-valued emissions. |  |
| time_boundary | owned_resources; contracted_services | Index acquisition, maintenance, replacement and retirement of reusable equipment separately from work-order activity and acceptance dates; keep charges and transfers attributable to the actual reporting period. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Customer equipment at pad-placement interface (`equipment_interface`)

Process / prospective direction / type: `place_inspect` / `inputs` / `product`.

Record the actual customer-owned machine received for local pad placement and its return at handover. This is an interface/custody exchange; its upstream manufacture is outside this separately declared service and is not an additional purchased machine.

- Collection subject: Customer equipment at pad-placement interface
- Flow property / unit: Number of items / item
- Amount rule: Actual machines entering the work order, including unaccepted jobs, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`

Range evidence need: retain actual machine IDs, receipts and final status. A universal one-input-per-accepted-output ratio would hide unsuccessful work.

#### Collection requirement: Packaging entering with installation supplies (`packaging`)

Process / prospective direction / type: `place_inspect` / `inputs` / `product`.

Expand by actual material and single-use or returnable custody. Do not count packaging already included in a supplier inventory again. Returnable packaging physical mass remains separate from its allocated upstream burden.

- Collection subject: Packaging entering with installation supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual incoming packaging mass by material, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: actual packing specification, weighing and reuse/custody evidence; gross delivery mass is insufficient.

#### Collection requirement: Attributed owned lifting and inspection resource packets (`owned_resources`)

Process / prospective direction / type: `place_inspect` / `inputs` / `product`.

For actually used jacks, slings, hand cutters, gauges and other owned assets, define each whole-resource-life packet including procurement, maintenance, replacements and retirement. Allocate its burden using measured causal use across every job/node/period; retain physical asset IDs and avoid recounting provider-owned equipment.

- Collection subject: Attributed owned lifting and inspection resource packets
- Flow property / unit: Number of items / item
- Amount rule: Actual documented whole-life resource packet shares attributable to this work order, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: asset-specific whole-life service evidence and actual use logs; no assumed lifetime or fixed equipment-consumption fraction.

#### Collection requirement: Contracted local handling and supporting services (`contracted_services`)

Process / prospective direction / type: `place_inspect` / `inputs` / `product`.

Conditional umbrella for actual local lift provider, attributable logistics or separately procured waste handling. Expand into concrete provider/scope exchanges. Include a service package once or its activity inventory once; hourly and transport units retain their real property chains.

- Collection subject: Contracted local handling and supporting services
- Flow property / unit: Number of items / item
- Amount rule: Actual defined provider service packages attributable to the work order, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: actual contract scope, trips or hire records and upstream inclusion; no universal count, hours or distance.

#### Collection requirement: Usable uninstalled pads and packaging returned (`usable_returns`)

Process / prospective direction / type: `place_inspect` / `outputs` / `product`.

Conditional actual reusable offcuts, uninstalled pad modules and returnable packaging leaving the work order for a named owner and destination. Distinguish contamination and damage; no automatic sale, co-product or recycling credit.

- Collection subject: Usable uninstalled pads and packaging returned
- Flow property / unit: Mass / kg
- Amount rule: Actual usable return mass by material and recipient, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: weighed return tickets, condition and ownership; no assumed recoverable fraction.

#### Collection requirement: Pad offcuts, rejected pads and discarded packaging (`installation_waste`)

Process / prospective direction / type: `place_inspect` / `outputs` / `waste`.

Expand actual waste by neoprene/material identity, contamination, condition and named receiving treatment gate. Include irrecoverable corrections and captured debris; solid offcuts are waste, not automatically airborne elementary emissions. Disposal services and waste-transfer mass must have compatible nonduplicated treatment ownership.

- Collection subject: Pad offcuts, rejected pads and discarded packaging
- Flow property / unit: Mass / kg
- Amount rule: Actual waste mass by material and destination, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: actual cutting plan, waste tickets and correction history; no preset scrap or recycling fraction.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| place_inspect | Dry placement and loaded inspection | required | Eligible first installation with approved unanchored single-layer neoprene layout | Integrate pads with customer equipment; inspect and retain all correction burdens; release only accepted isolation installation | accepted_isolation |

One node owns local lifting, hand cutting, placement and inspection. Incorrect pad grade, damaged modules, unstable support, an unapproved load distribution or rigid bridging is an off-spec state. Correct within place_inspect and repeat inspection, or classify actual material exit under usable_returns or installation_waste. Unresolved rejects have no accepted reference output.

### Process: Dry placement and loaded inspection (`place_inspect`)

#### Inputs

##### Product flows

###### Modular neoprene vibration-isolation pads at site supply (`neoprene_pads`)

Actual selected neoprene grade and module geometry for single-layer compression placement. Include gross material drawn into the work order, hand-cut losses and replacements. Separate unused returns and waste so receipts are not netted twice.

- Selected flow: Modular neoprene vibration-isolation pads at site supply
- Flow property / unit: Mass / kg
- Amount rule: Actual pad mass drawn from reconciled stock, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `mason-super-w-2014`

Range evidence need: per-support design and actual SKU net masses determine consumption; supplier load ratings in kg describe supported equipment, not pad mass. No generic kg per installation interval is established.

###### Electricity for installation instruments or charging (`installation_electricity`)

Conditional on actual electricity used in the defined installation work. Manual pad cutting and placement do not imply zero instrument charging. Separate shared charging by measured use and do not count electricity embedded in a provider service twice. Equipment operating energy is outside the handover gate.

- Selected flow: Electricity for installation instruments or charging
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable metered electricity including charging losses, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: meter/charging-session records and allocation basis; no inference from equipment motor rating, battery label or operating power.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dry-laid neoprene equipment isolation installation (`accepted_isolation`)

One complete installation under the declared machine, after grade/layout, load compatibility, contact, level/stability and rigid-bridge checks with actual acceptance criteria. Keep signed records and all rework. No operating attenuation claim follows from static acceptance.

- Selected flow: Accepted dry-laid neoprene equipment isolation installation
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`

Reference amount is a normalization definition, not an empirical yield Range. Keep D and rejected-job counts independently recorded.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| retain_rework | place_inspect | Keep every repeated lift, cut, replacement and inspection in the originating work order. Unaccepted equipment does not increase D. If D is zero, retain a failed-job inventory without division; connect its burden to an evidenced subsequent service or report it separately. |  |
| materials_and_returns | neoprene_pads; packaging; usable_returns; installation_waste | Track stock and exits by material and ownership. Net procurement may exclude genuinely returned unused supplies only with consistent upstream inventory adjustment; never subtract the same return from input mass and again as avoided production. No displacement credit is supplied here. A genuine sold co-product requires a separately reviewed allocation decision. |  |
| shared_life | owned_resources | For each actual resource packet, enumerate all consuming nodes, jobs and periods, maintenance/replacement/retirement events and measured causal use. Assign s_j = u_j / sum(u_all); shares over all beneficiaries sum to 1. Do not assign the full purchase to every period or use job-only hours as the whole-life denominator. Missing lifetime activity remains a disclosed blocker, not an assumed default. |  |
| service_ownership | contracted_services; installation_electricity | Separate provider-owned resources from owned-resource packets; a packaged service and its embedded energy/assets are mutually exclusive representations of the same burden. Physical custody of reusable packaging does not scale with its upstream burden share. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | place_inspect | equipment_interface; accepted_isolation | custody and acceptance record | work_id; machine_id; configuration; loading_schedule; pad_layout; eligibility_approval; inspection_criteria; observations; correction_id; receipt_count; accepted_count; D; date | Reconcile each received machine with signed installation acceptance or documented reject status; inspect every support under actual static load. | item | each receipt, correction and acceptance | complete work order through signed handover | actual site and configuration | per reference flow | D positive and independently counted; originals and inspector identity; raw receipt count divided by D; no unaccepted job in D |
| cp_materials | place_inspect | neoprene_pads; packaging | stock and mass record | SKU; grade; dimensions; opening_stock; receipts; closing_stock; drawn_mass; packaging_material; scale_id; tare; return_ticket | Reconcile work-order draw from stock with weighed receipts and unused holdings; determine net pad mass separately from packaging and supported machine weight. | kg | each receipt, draw and stock closure | entire work order including corrections | actual site store and installation node | per reference flow | Material-specific stock balance and scale checks; gross draw includes downstream returns and waste; each drawn_mass divided by D |
| cp_resources | place_inspect | owned_resources; contracted_services | resource and supplier record | asset_id; owner; whole_life_packet; acquisition; maintenance; replacement; retirement; all_consumers; period; u_j; u_all; provider; service_scope; actual_unit; activity | Reconcile actual equipment-use logs and contracts; select packet versus disaggregated service representation; verify full-life denominator and period allocation. | item per defined packet; original service unit retained | each asset or service event | work order and documented whole resource life | all shared consuming sites/jobs and target node | per reference flow | Whole-life packet evidence, shares sum to 1; count packet shares or actual service quantities and divide by D; retain unknown retirement/lifetime evidence as unresolved |
| cp_energy | place_inspect | installation_electricity | meter or charging record | meter_id; start; end; session; owner; charging_losses; attribution_basis; allocated_kWh | Read actual installation-only meters or allocate shared charging using measured session use; exclude separately inventoried provider energy. | kWh | each use or charging session | sessions causally assigned to work order | site supply or evidenced offsite charging | per reference flow | Calibrated readings and session ownership; sum allocated_kWh including losses then divide by D; absent use needs explicit records, not assumed zero |
| cp_exits | place_inspect | usable_returns; installation_waste | custody and receiving record | material; condition; quantity; tare; ticket; owner; destination; receiver; treatment_scope; correction_id | Weigh and reconcile separate reusable returns and waste at release, link to actual recipient and originating work-order material. | kg | each exit | work order and linked later exit | node release and declared receiver gate | per reference flow | Signed tickets and material balance; sum each classified exit mass and divide by D; do not recategorize waste as product for a UUID match |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all non-reference cards | For actual work-order quantity Q_i, q_i = Q_i / D; D > 0. Keep separate quantities for each material, asset packet and real service unit. | Q_i; D; cp_gate; cp_materials; cp_resources; cp_energy; cp_exits | quantity per reference flow |  |
| stock_closure | neoprene_pads; packaging | For each material, opening stock + receipts = closing unused stock + retained installation material + usable returns + waste + documented discrepancy. Correct attribution and weighing differences; do not force discrepancies into emissions. | cp_materials; cp_exits; installation records | reconciled material inventory |  |
| resource_share | owned_resources | For each declared whole-life packet, s_j = u_j / sum(u_all); q_resource = s_j / D. Require positive complete denominator, period ownership and no overlapping maintenance or retirement packet. | cp_resources; cp_gate | resource packet share per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | accepted_isolation | Keep grade, load distribution, module geometry and design-approved eligibility; separate different designs rather than claiming equal performance. | supplier/project design and signed gate records |
| range_evidence | all cards | Develop quantitative guardrails only from comparable independent measured jobs or verified SKU data. Manufacturer supported-load tables are neither consumed material masses nor installation yields. | card-specific actual evidence and independent sample scope |
| identity | all cards | Resolve actual exchange identity, state, provider/destination, property and unit before final dataset production. A conditional umbrella expands into actual exchanges and never receives an assumed universal UUID. | full matching flow and property/unit evidence |
| periods | owned_resources; contracted_services | Close ownership and period allocations, replacements and retirement; prevent duplicate burdens across jobs and services. | resource life and all-consumer ledger |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| gate_complete | accepted_isolation | Check supplier/project authorization for no restraint, approved per-support loads and layout, actual contact/level/stability/bridge criteria and correction closure. Missing design approval or inspection criteria blocks acceptance; do not assert a numerical operating attenuation. |  |
| row_completeness | all cards | Verify each actual input, return, waste and conditional service at place_inspect; reconcile material and equipment custody. Actual excluded activities require boundary extension, not silent deletion. |  |
| resource_closure | owned_resources; contracted_services | All consumers and periods must be represented; shares sum to 1 and owned/provider burdens do not overlap. Unknown lifetime, replacement or retirement allocation blocks finalization. |  |
| normalization_check | all cards | D must be positive and exclude rejected jobs. Reference output is exactly 1 item; other quantities come from actual records and are not fixed to one. Preserve real service units, energy and mass conversions. |  |
| exchange_readiness | all cards | Require exact verified identities, property/unit chains and traceable quantities for final exchanges; no checker result substitutes for these records. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground isolation-installation service data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching first dry-laid single-layer neoprene equipment isolation services with the same disclosed gate and configuration |
| excluded_use | Whole-machine manufacture/installation/operation, seismic design, spring or layered isolation, acoustic performance guarantees and unqualified category averages |
| required_metadata | Location, dates, equipment and pad configuration, load schedule, approved eligibility, inspection gate, D, method/source editions, ownership and boundary interfaces |
| required_quality_disclosure | Actual versus absent conditional activity; UUID and quantitative gaps; service unit conversions; resource-life allocations; material discrepancies and configuration representativeness |
| update_trigger | Changed pad grade, support design, restraint requirement, installation technique, handover criterion or verified evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Ver.3.0 explanatory notes, 30 June 2025, pp.295 and 298; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only: vibration insulation versus acoustic wall/ceiling finishing |
| mason-super-w-2014 | handbook | Mason Industries, Bulletin SW-16-3, May 2014; https://mason-ind.com/download/36780/ | Modular neoprene supply, complete-module cutting and selected unbolted applications; no generic inventory quantities |
| karman-isolator-selection | handbook | Karman Rubber, Selecting the Right Vibro-Isolators; https://karman.com/products/selection-steps | Design inputs and load-distribution qualification; no adopted performance percentage or generic load/mass factor |
