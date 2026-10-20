---
pcr_id: pcr.constructions-and-construction-services.construction-services.hardwired-normally-closed-zone-burglar-alarm-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Hardwired normally-closed-zone burglar alarm installation services

## 1. Scope and Applicability

This category covers first installation and commissioning at a construction site of a single-panel hardwired intruder alarm with normally-closed detection zones, a separate global tamper loop, hardwired keypad, compatible contacts/detectors, external sounder and permanent rechargeable standby battery. No communication monitoring interface is supplied. The purchased output is a complete accepted installation, with its actual layout and interfaces disclosed.

Wireless, hybrid, networked or addressable systems; fire/smoke and other life-safety alarms; cameras and access control; remote signalling, monitoring and telecommunications provision; periodic servicing; new upstream mains distribution; and post-handover operation are excluded. CPC 54613 includes a broader range of burglar-alarm installations and excludes monitoring/maintenance. The proposed classification relation therefore describes a narrower subset (`unsd-cpc3-explanatory-notes`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.hardwired-normally-closed-zone-burglar-alarm-installation-services |
| classification_refs | CPC 3.0 54613; proposed narrower scope |
| covered_products | Complete accepted first installation of the disclosed normally-closed-zone/global-tamper hardwired intruder alarm |
| excluded_products | The technologies and services excluded in section 1; incomplete systems and separately manufactured components |
| representative_product | Texecom Veritas8/R8 illustrates the architecture; actual compatible model instructions and design govern without a mandatory brand |
| production_route | Receive and identify supplies; confirm existing isolated interfaces; mount and wire components; install permanent batteries; configure; test intrusion response and user control; correct and retest; restore normal state; hand over |
| market_state | Site-integrated, configured and accepted installation at installer/customer handover |

The manufacturer installation manual supports the selected route and interface roles. Its different mains/battery power-up descriptions do not establish a universal sequence here: competent installers use the applicable approved model instructions. Model cable/current/capacity specifications are design qualifiers, not per-installation inventory quantities (`texecom-veritas-installation`).

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted complete hardwired normally-closed-zone burglar alarm installation and commissioning |
| How much | One complete accepted installation; D independently counts actual accepted same-configuration installations before normalization |
| How well | Declared design and BOM; successful occupied-zone, sounder, tamper and set/unset checks; corrections closed and normal state restored; signed customer handover |
| How long or cycle | One receipt-to-acceptance installation cycle, including failures and retests; no operating-year or lifetime benefit |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete hardwired normally-closed-zone burglar alarm installation and commissioning |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Panel model; normally-closed zones and occupied/disabled zone schedule; separate global tamper loop; exact keypad/contact/PIR/sounder BOM; permanent standby battery chemistry/model/capacity and supply inclusion; existing mains interface and installer feeder responsibility; cable/containment; programming and customer controls; walk/sounder/tamper/set-unset/normal-state test results; installation dates and signed acceptance |

Declare these qualifiers in the foreground package. Justify configuration equivalence before pooling D; materially different designs require separate packages. The reference service is counted independently and has no mass-equivalence equation. Lifecycle periods for shared resources are separate from the installation cycle.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count complete accepted same-configuration jobs using cp_acceptance; require D > 0 before dividing actual numerators by D. |
| `m_mass` | all mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net quantities with calibrated scales or traceable matching-SKU count/length-to-mass factors in cp_materials for inputs and cp_releases for return, waste and release outputs. Never equate a heterogeneous total to one exchange. |
| `m_energy` | installation_electricity | Energy | kWh | Keep measured external electricity in kWh using cp_energy. Battery Ah, power rating, test duration and NCV do not replace actual energy. |
| `m_service` | owned_equipment_attribution; hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count only an exact asset lifecycle fraction or a genuine complete contracted event using cp_services. Hourly hire needs actual Duration support and reviewed units. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials received and identified; mounting premises and isolated existing mains/earth interface actually accepted and recorded |
| starting_condition_role | Disclosed existing readiness condition; not a new product input or avoided burden |
| product_classification_scope | Only the declared normally-closed-zone hardwired burglar-alarm installation subset |
| recursive_input_rule | Record actual delivered state and bounded upstream responsibility for same-category purchased prior installation; unresolved overlap blocks acceptance |
| upstream_dataset_requirement | Matching manufacture/landed-supply packets with explicit inbound delivery, packaging and accessory inclusion; physical custody remains traceable |
| disclosure | Actual site/date/design/interface responsibilities, supplies, test and correction records, handover, upstream scope, assets/periods and remaining evidence gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_scope | install_accept | Own receipt, mounting, wiring, termination, permanent-battery installation, programming, intrusion testing, correction, retest and customer handover. Supplied controller, field devices, battery, wiring and permanent accessories remain separate input roles. No fire/life-safety method or remote monitoring is included. | `texecom-veritas-installation` |
| b_upstream | all material inputs | Require compatible supplier packets for manufacture and actual inbound delivery. Record included packaging and accessories once. Preserve incoming packaging custody even when its manufacturing burden is included upstream; add a separate packaging burden only for an excluded upstream contribution. |  |
| b_readiness | starting interface | Record accepted existing mounting surfaces and isolated mains/earth interface. Readiness is a disclosed condition, neither an invented purchased input nor a credit. A purchased same-category prior installation requires its actual delivered state and upstream scope; unresolved overlap blocks acceptance. |  |
| b_rework | install_accept | Zone response failure, open tamper circuit, defective sounder or unsuccessful set/unset leaves the installation unaccepted. Link correction/retest back to install_accept and the original job. Classify actual removed material as usable return, recovery/waste exit or retained repair; unfinished or failed systems cannot enter accepted_installation. | `texecom-veritas-installation` |
| b_assets | owned_equipment_attribution; hired_support_service | Identify installer-owned tools, testers, external chargers and access equipment by model/serial, with every consuming job/node and period. Use a lifecycle packet from acquisition/manufacture through service, maintenance/replacement and retirement/termination. The hire provider owns its equipment lifecycle; audit foreground energy inclusions to prevent duplicate ownership. |  |
| b_gate | accepted_installation | End at signed complete installation acceptance and control handover after corrections, retests and restoration of the agreed normal state. Exclude subsequent use electricity, maintenance, monitoring and new upstream mains distribution. | `texecom-veritas-installation` |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Compatible field devices (`field_alarm_devices`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Expand each actual keypad, contact, PIR, external sounder/strobe or internal speaker into its own SKU exchange with supplied accessories. Exclude batteries separately recorded below. Exact BOM and matched mass records are needed; a mixed equipment total supplies no common identity or range.

- Collection subject: Compatible field devices
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net mass for each device SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

#### Collection requirement: Alarm wiring and supplied feeder (`alarm_cable`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Separate actual zone, tamper, keypad and sounder cable SKUs and any installer-supplied mains feeder by segment, conductor and insulation. Existing upstream wiring is readiness. Actual measured lengths and matching linear-mass factors or weighing are needed; design cable limits do not set an inventory range.

- Collection subject: Alarm wiring and supplied feeder
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net cable mass by SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

#### Collection requirement: Permanent mounting and containment (`fixings_and_containment`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Expand actual mounting fittings, containment, glands, labels and accessories not already included in panel/device packets. Keep material and SKU distinctions. Actual issues, installed quantities, matching mass and upstream inclusion records are needed.

- Collection subject: Permanent mounting and containment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net accessory mass by SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

#### Collection requirement: Received packaging custody (`incoming_packaging`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Separate received packaging by shipment, material and actual packaging SKU. Maintain its physical input and waste/return path even where upstream supply already owns manufacture. Shipment weighing and supplier packaging inclusions are required; no duplicate manufacturing burden is permitted.

- Collection subject: Received packaging custody
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable received packaging net mass by material / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

#### Collection requirement: Installer-owned reusable resources (`owned_equipment_attribution`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Each actual hand/powered tool, external charger, electrical tester and access asset needs manufacturer/model/serial identity. Include all jobs/nodes and periods drawing from the same resource-life packet. Resource-life activity, other consumers and remaining-use evidence are needed; do not invent a lifetime range.

- Collection subject: Installer-owned reusable resources
- Flow property / unit: Number of items / item
- Amount rule: Actual evidenced asset share a_rj / D item
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_services`

#### Collection requirement: Purchased whole support events (`hired_support_service`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Expand each genuine whole contracted transport, access, testing or support event by provider and configuration. Provider equipment lifecycle stays in its service packet; verify energy inclusions. Hourly hire requires reviewed Duration support. Actual contract reference unit, event count, activity and inclusion evidence are required before any quantity range.

- Collection subject: Purchased whole support events
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable count of genuine whole contracted events / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_services`

#### Collection requirement: Usable product returned out of custody (`unused_product_return`)

Process / prospective direction / type: `install_accept` / `outputs` / `product`.

Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Collection subject: Usable product returned out of custody
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable net usable return mass by SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

#### Collection requirement: Installation waste streams (`installation_waste`)

Process / prospective direction / type: `install_accept` / `outputs` / `waste`.

Expand actual packaging, offcuts and failed removed components by material, physical state, hazard and authorised recipient, including electronics/battery rejects when present. Link issue and rework events to install_accept; mixed waste is not a concrete identity. Waste tickets, state/hazard and destination evidence are needed; no universal waste fraction is established.

- Collection subject: Installation waste streams
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable net waste mass for each identified stream / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

#### Collection requirement: Released mounting/drilling particulate (`airborne_particulate`)

Process / prospective direction / type: `install_accept` / `outputs` / `elementary`.

Record only actually released identified species and particle-size fraction entering a specified air compartment. Distinguish captured dust sent to waste and substrate retained in place. Actual drilling/capture activity, species/size/medium and measured or justified release evidence are needed. Never assign all unexplained mass to dust.

- Collection subject: Released mounting/drilling particulate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable identified airborne particulate mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `install_accept` | Intruder alarm integration, commissioning and acceptance | required | All installations in this declared category | Own component integration, tests, corrections and final handover; repairs/retests remain in this node; returns and wastes retain original event links | `accepted_installation`; independently measured D |

One node owns the complete installer responsibility. There are no artificial phase-transfer exchanges. Conditional cards expand into zero, one or multiple actual exchanges only after activity/custody evidence establishes presence or absence; missing records cannot be zero-filled. Quantities below share one actual job/configuration, temporal scope and positive D.

### Process: Intruder alarm integration, commissioning and acceptance (`install_accept`)

#### Inputs

##### Product flows

###### Supplied control panel assembly (`control_panel`)

The actual factory-supplied controller, enclosure and transformer for normally-closed zones and separate global tamper enter before site integration. Preserve exact model and included parts. Matching-SKU net mass and supply-inclusion evidence is required before a quantity range can be supported.

- Selected flow: Supplied control panel assembly
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net panel mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

###### Permanent standby batteries (`permanent_batteries`)

Record each actual rechargeable standby battery in the panel and any self-activating sounder, including chemistry, model, capacity and supply inclusion. Installed batteries are permanent product parts. Chemistry-specific SKU mass and inclusion evidence is needed; capacity alone proves neither mass nor lifetime.

- Selected flow: Permanent standby batteries
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net battery mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

###### External installation electricity (`installation_electricity`)

Measure externally supplied tool, charger and test electricity and commissioning demand before handover, with provider, voltage, site and meter boundary. Keep Energy / kWh. Actual meter/activity records and compatible supply evidence are required. Exact Energy support remains unresolved; power, battery capacity and NCV are not substitutes.

- Selected flow: External installation electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable external meter energy in kWh / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

##### Waste flows

No exchange of this kind is specified for this route; actual evidence of one requires scope review.

##### Elementary flows

No exchange of this kind is specified for this route; actual evidence of one requires scope review.

#### Outputs

##### Product flows

###### Accepted complete hardwired normally-closed-zone burglar alarm installation and commissioning (`accepted_installation`)

Count the actual complete accepted same-configuration intrusion installation at signed installer handover. Tests/components/progress cannot substitute for complete output. All corrections and required retests precede acceptance. Actual acceptance and configuration-equivalence evidence establish the counted output; no universal operating-life range is inferred.

- Selected flow: Accepted complete hardwired normally-closed-zone burglar alarm installation and commissioning
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Sources: `texecom-veritas-installation`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_jobs | install_accept | Assume no intended co-product. Keep original job failures, additional components, labour activity, tests and retests with that job. Link every actual return or waste/recovery exit to its originating event and receiver; give no avoided-production credit and do not erase rejected work. |  |
| a_shared | owned_equipment_attribution; hired_support_service | For resource r and job j, a_rj = A_rj / sum(A_rk), with k covering every benefiting job/node over the same complete resource-life packet. Use one evidenced causal physical activity basis; require a positive total and sum(a_rj) = 1. Record equipment identity, consuming nodes, service periods, activity method and ownership. Do not assume equivalent output counts or a generic tool lifetime. |  |
| a_quantity | owned_equipment_attribution | Attributed asset quantity = a_rj / D item; attributed lifecycle burden = B_r * a_rj / D. D is actual accepted same-configuration installation count. Keep B_r, physical activity and installation count independently observed. Remaining-life uncertainty or missing consumers prevents complete attribution. |  |
| a_periods | all inventory rows | Index procurement/manufacture, each service/reporting period, maintenance, replacement and retirement/termination. Link inputs, assets, outputs and correction/return events to dated job and period. Record each period-specific attribution decision and its evidence. Replacements are actual event packets, not automatically a whole asset per job. Reconcile each resource and period total once across all consumers and retain unresolved future-use/termination evidence. |  |
| a_hire | hired_support_service; installation_electricity | Use actual provider service references and inclusion ledger. Do not add provider capital manufacture separately or repeat fuel/electricity already in the purchased service. A genuinely whole contracted event may be counted; an hourly contract needs actual Duration support and review. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `install_accept` | accepted_installation | acceptance record | job id; site; panel model; zone/tamper schedule; BOM; mains interface; battery; programming; test results; corrections/retests; normal-state restoration; dates; customer signature; accepted count D |Inspect each installation design and competent signed test/handover record; independently count complete accepted same-configuration installations; Aggregation: per reference flow; retain actual positive D and raw acceptance events before normalization | item | Every job and acceptance/retest event | Actual receipt-to-handover dates including corrective work | Actual premises and declared configuration | per reference flow | Signed acceptance; competent tests; rejected/unfinished exclusion; configuration-equivalence evidence |
| `cp_materials` | `install_accept` | control_panel; field_alarm_devices; permanent_batteries; alarm_cable; fixings_and_containment; incoming_packaging | material custody record | job; shipment; SKU; material/state; supply boundary; included accessories/packaging/delivery; net mass; counts/lengths; conversion factors; stock; installed/return/waste amounts; original event; receiver |Calibrated net weighing or traceable matching-SKU count/length mass conversion; inspect supplier inclusion and event-linked custody records; Aggregation: per reference flow; sum attributable measured numerators for each matching SKU and divide by D | kg | Every shipment, issue and custody change | All installation dates and relevant stock opening/closing dates | Actual job, supplier packet and material pool | per reference flow | Calibration; matching factor provenance; supply inclusion ledger; balance residual and tolerance |
| `cp_energy` | `install_accept` | installation_electricity | meter and activity record | job; provider; voltage; meter boundary/id; start/end kWh; tool/charger/test/commissioning activity; times; all shared consumers; inclusion ledger |Read meters for actual external supply before handover; attribute shared measured energy by recorded causal activity and inspect purchased service inclusions; Aggregation: per reference flow; attributable actual kWh divided by D | kWh | Every metered interval and activity | Actual pre-handover intervals across all contributing dates | Actual premises and external charging site if used | per reference flow | Meter accuracy; interval completeness; shared activity reconciliation; no Ah/power/duration substitution |
| `cp_services` | `install_accept` | owned_equipment_attribution; hired_support_service | resource and contract record | asset manufacturer/model/serial; owner; provider; contract reference/unit; genuine whole event count; all consumer jobs/nodes; physical activity; reporting periods; manufacture/service/maintenance/replacement/retirement packets; B_r; remaining use; energy inclusion |Inspect serial-specific lifecycle records, complete consumer activity and actual provider invoices; separate owned assets from provider-owned services and document period decisions; Aggregation: per reference flow; actual asset share a_rj or genuine attributed whole event count divided by D | item | Every asset use, contract event, replacement and attribution-period closure | Full resource-life packet and each actual service/reporting period; unresolved remaining use disclosed | All benefiting jobs/nodes and periods, including other premises | per reference flow | Positive complete activity total; sum(a_rj) = 1; ownership/inclusion ledger; actual replacement/termination evidence |
| `cp_releases` | `install_accept` | unused_product_return; installation_waste; airborne_particulate | return waste and release record | original job/event; SKU/material/species; state; hazard; particle size; air compartment; recipient; ticket; net mass; drilling/capture activity; retained/captured/emitted quantities; method; uncertainty; residual |Weigh returns and separate waste streams with receiver tickets; use measured or justified species/size/compartment release evidence for actual work; reconcile material custody without inferring emissions from residuals; Aggregation: per reference flow; attributable quantity of each exact return/waste/release divided by D | kg | Every return, waste transfer and relevant release event | Actual installation and correction/retest dates through handover | Actual job and named receiving site/air compartment | per reference flow | Receiver confirmation; calibrated mass; release method and uncertainty; capture distinction; closure gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_actual` | all inventory rows | q_i = N_i / D; N_i is the independently retained attributable actual numerator for the individual exchange; D is independently counted accepted same-configuration installations. Never backsolve N_i from an expected reference output. | N_i; D; cp_acceptance; cp_materials; cp_energy; cp_services; cp_releases | q_i |  |
| `c_custody` | material custody pools | opening stock + receipts = installed retained material + closing stock + usable returns + actual waste + identified releases + residual. Reconcile each exact source pool and report residual/tolerance; a mixed mass diagnostic is not one flow or service mass. | cp_materials; cp_releases; source pool; measured quantities | custody reconciliation |  |
| `c_resource` | owned_equipment_attribution | a_rj = A_rj / sum(A_rk); attributed asset quantity = a_rj / D; attributed burden = B_r * a_rj / D. Use all consumers of the same lifecycle packet, positive total activity and sum(a_rj) = 1. | A_rj; A_rk; B_r; D; cp_services | asset share and lifecycle burden |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | Retain exact model/SKU/state/provider/receiver or species/size/medium; verify concrete flow and compatible support chains before final binding. | Supplier and receiver records; verified identity support |
| `dq_measurement` | all measured quantities | Retain calibration, factor matching, raw actual numerators, units, coverage and uncertainty. No universal component weight, waste factor, tool life or service energy range is established. | Meter/scale records; conversion provenance; matching packet |
| `dq_complete` | all collection protocols | Cover all contributing dates, sites, stock changes, failures, corrections, returns and consumers. Report unknown remaining use and missing records; never zero-fill an absent record. | Event ledger; period/consumer reconciliation; acceptance linkage |
| `dq_range` | all inventory rows | Quantity guidance needs actual matching component/packaging, energy/activity/contract, return/reject receiver and species-release evidence; supplier point specifications apply only to matching models. | Primary measured records and applicability assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference product | Require all declared configuration and interface qualifiers, compatible BOM, normally-closed zone schedule and independent global tamper design. Manual capabilities for fire/PA or later service do not enlarge this scope. | `texecom-veritas-installation` |
| v_intrusion | install_accept | For actual occupied zones, retain detector/contact walk response, sounder/strobe operation as supplied, global tamper response, set/unset and customer-control checks. Record disabled zones, settings, faults, corrective actions, retests and restored normal state with competent test and signed handover evidence; missing or failed required tests block accepted output. | `texecom-veritas-installation` |
| v_reference | accepted_installation | Require independently counted positive D for complete accepted installations of the same justified configuration. The reference link, semantic name, Number of items support, item unit and explicit 1 item output must agree. Components, tests, progress and unfinished work cannot substitute for D. |  |
| v_custody | all material inputs and outputs | Reconcile each matching source pool through receipts, installed retention, stock, usable returns, waste and identified releases. Distinguish permanent batteries from tool assets; link reject exits to install_accept and their actual receiver. Report residuals and measurement tolerances; missing records never imply zero. |  |
| v_resource | owned_equipment_attribution; hired_support_service | Verify all consumers and periods, positive physical-activity denominator, share closure, actual replacement/termination treatment and one owner per lifecycle burden. Check delivery, packaging, hire capital and energy inclusions for duplication. Incomplete remaining-life or consumer evidence blocks final attribution. |  |
| v_identity | all inventory rows | Expand conditional cards into separate actual SKU/state/provider/receiver or species-compartment exchanges. No heterogeneous fixed UUID or generic dust identity is allowed. Verify concrete flow and support chains before final binding, with actual protocol and calculation linkage; unresolved Energy or hourly Duration support remains a gap. |  |
| v_quality | all inventory rows | Report performed and skipped checks, findings and completeness separately from fixed/unresolved identity counts and quantity-range gaps. Inconclusive measurement, unverified support or missing foreground evidence cannot be described as a complete final-binding or publication pass. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation package; secondary_dataset or background_dataset only with compatible scope, configuration and acceptance gate |
| downstream_use | process and lifecyclemodel projections of the same foreground package |
| allowed_use | Declared single-panel normally-closed-zone/global-tamper intruder installation through signed handover |
| excluded_use | Operation/monitoring/maintenance; fire-alarm equivalence; alternative technologies; whole-building equivalence; unsubstantiated long-term performance or lifetime claims |
| required_metadata | Site/time; actual model/configuration and quantity; interface/design/BOM; test/correction/acceptance; supply sources; inventories/protocols; resource owners/periods/decisions |
| required_quality_disclosure | Actual measured coverage, uncertainties and custody residuals; concrete identity/support gaps; quantity-range evidence gaps; remaining resource life and skipped checks |
| update_trigger | Changed model, route, interface, BOM or acceptance design; stronger measured quantity, attribution or identity evidence |

A candidate authoring check does not establish publication readiness or verified final exchanges. Resolve actual foreground and identity/support evidence before using a completed package as final methodology.

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-explanatory-notes` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 54613 inclusion of construction-site burglar-alarm installation and exclusion of monitoring/maintenance; narrower subset scope |
| `texecom-veritas-installation` | handbook | https://texecom-live.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/02/01102935/INS034-14-Veritas-Compact_8_R8-Install_low.pdf | INS034-14, PDF pages 5–15 and 19–20: representative panel/keypad, normally-closed zones/global tamper, sounder, battery, mounting/wiring, programming/tests/correction and normal-state completion; no universal per-service quantities |
