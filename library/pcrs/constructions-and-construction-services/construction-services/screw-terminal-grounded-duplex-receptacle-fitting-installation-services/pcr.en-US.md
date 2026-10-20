---
pcr_id: pcr.constructions-and-construction-services.construction-services.screw-terminal-grounded-duplex-receptacle-fitting-installation-services
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Screw-terminal grounded duplex receptacle fitting installation services

## 1. Scope and Applicability

This PCR covers the first fitting of an indoor, non-electronic 15 A, 125 V grounded duplex receptacle on a single-feed circuit. The installer side-terminates prepared compatible copper conductors, fixes the fitting in an existing suitable box, fits its plate, restores the circuit under competent control and hands over a tested, accepted installation. The physical interface and signed acceptance define the service; brand alone does not define membership.

The scope excludes branch-circuit construction or extension, new boxes or panels, removal/replacement of an existing fitting, split-feed conversion, push-in connections, GFCI/AFCI and electronic or smart receptacles, fire/burglar alarms, telecommunications, appliances, and electricity consumed after handover. Drilling a substrate and extending cable are outside this selected route. Manufacturer instructions illustrate the route; the delivered model instructions and applicable jurisdiction/design determine actual compatibility and acceptance. [leviton-receptacle-installation; leviton-5320-product]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.screw-terminal-grounded-duplex-receptacle-fitting-installation-services |
| classification_refs | CPC 3.0 54611; narrower |
| covered_products | First-installed grounded single-feed screw-terminal duplex receptacle fittings, with plate and documented acceptance. |
| excluded_products | The construction, replacement, connection methods, electronic devices and later-use activities excluded in section 1. |
| representative_product | Leviton 5320-family grounded duplex fitting; an example, with no universal mass, conductor gauge or installation inventory implied. |
| production_route | Receive fitting/plate; verify prepared interfaces and isolate/prove dead; prepare and side-terminate conductors; mount fitting/plate; controlled restoration; test, correct, retest and sign acceptance. |
| market_state | Complete installed fitting at signed installer handover, with the disclosed existing circuit/box/earth interfaces. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted first-installed grounded single-feed duplex receptacle fitting with plate at installer handover |
| How much | 1 item |
| How well | Exact model/rating and compatible screw-terminal copper conductor material/gauge; single-feed state; suitable existing box/circuit/earth; plate/fixing inclusions; design/jurisdiction; isolation/proof-dead and termination, earth, polarity and functional test records; correction/retest closure and signed acceptance. |
| How long or cycle | One receipt-to-acceptance job cycle, including its unsuccessful attempts and retests. Link the job dates to the acquisition/manufacture, service/reporting periods, maintenance/replacement and retirement/termination phases of each shared resource; no operating-year functional benefit is claimed. |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted first-installed grounded single-feed duplex receptacle fitting with plate at installer handover |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Model/rating; conductor material/gauge and screw compatibility; single-feed configuration; existing box/circuit/earth responsibility; supplied plate/fixings; jurisdiction/design; isolation/proof-dead record; termination/earth/polarity/functional tests; correction/retest results; installation dates; signed acceptance. |

Establish D by independently counting accepted complete installations of the same disclosed configuration before normalization; D must be positive. Component counts, tests and progress percentages cannot replace D. Split materially different configurations unless equivalence is evidenced. One counted output has no mass-equivalence formula.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | reference product; owned_equipment_attribution; hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use positive independently evidenced D and the same job/configuration boundary. item means a complete accepted output, an exact reusable-asset fraction or a genuine whole contracted event, as applicable. |
| mass_conversion | receptacle; plate_and_fixings; incoming_packaging; unused_product_return; installation_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net weighing or traceable count/length-to-mass factors for the matching SKU. Retain the factor, unit and uncertainty; heterogeneous totals are diagnostics, not one exchange. |
| energy_preservation | installation_electricity | Energy | kWh | Retain actual supplied metered kWh and its meter/provider/voltage boundary. Energy support remains unverified; NCV, Ah, rated power and elapsed time cannot substitute for actual energy. |
| contract_reference | hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count only a genuine complete bought event with its exact service definition. An hourly contract needs Duration support and review; do not invent counted events. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Suitable existing box with compatible prepared single-feed circuit, conductors and earth interface accepted as ready, plus receipt of actual fitting/plate supplies. |
| starting_condition_role | Disclosed pre-existing interface; readiness is neither a new supply nor a credit. |
| product_classification_scope | Narrower electrical fitting service within CPC 3.0 54611; no claim to all wiring or fitting technologies. |
| recursive_input_rule | For purchased same-category prior installation, identify the actual incoming state and non-overlapping upstream gate; do not recursively replay accepted installation or count it again. Unreviewed expansion requires separate scope review. |
| upstream_dataset_requirement | Match exact supplies to upstream manufacture, actual inbound delivery and packaging inclusion boundaries, assigning every burden once. |
| disclosure | Declare existing circuit/box/earth ownership and suitability, receipt and handover dates, supply inclusions, actual model instructions/design, shared resource periods and all omissions. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| installation_gate | install_accept | The installer owns receipt and landed supply, receptacle/plate/permanent fixing integration, safety verification, termination, mounting, controlled restoration, tests, corrections, retests and signed handover. Prepared conductor/box construction and post-handover use are outside this gate. | `leviton-receptacle-installation`; `leviton-5320-product` |
| supply_custody | install_accept | Track physical incoming packaging even where upstream manufacture already includes it. Separate packaging burden only if excluded upstream; use the delivery/packaging inclusion ledger to prevent duplication. | |
| resource_boundary | install_accept | Exact installer-owned tools, testers, external chargers and access assets may serve install_accept instances in other jobs and reporting periods; enumerate every consumer and phase in cp_services. Providers own hired-asset lifecycle; ledger any included foreground energy. | |
| period_gate | install_accept | Index manufacture/acquisition, each service/reporting period, maintenance/replacement and retirement/termination separately. Link inputs, assets, accepted outputs and events to job and period; unresolved remaining-life or termination evidence prevents final attribution. | |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Wallplate and separate permanent fixings (`plate_and_fixings`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Resolve each actual plate and separately supplied fixing; separate materials/SKUs and exclude hardware already included with the receptacle. Range evidence need: Matching plate/fixing mass, inclusion and event records are needed for range evidence.

- Collection subject: Wallplate and separate permanent fixings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable net mass of each plate or separately supplied fixing / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `leviton-receptacle-installation`; `leviton-5320-product`

#### Collection requirement: Received supply packaging (`incoming_packaging`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Track each actual packaging material/SKU for the shipment through receipt, retained stock and disposal; retain physical custody when its manufacture burden is embedded upstream. Range evidence need: Shipment packaging composition, net masses and upstream inclusion records are needed for range evidence.

- Collection subject: Received supply packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable received packaging net mass / D; apply upstream burden only once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

#### Collection requirement: Installer-owned reusable asset attribution (`owned_equipment_attribution`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Resolve each actually used hand/powered tool, tester, external charger and access asset by manufacturer/model/serial. This is the resource lifecycle share, not a permanent fitting or an assumed whole new tool. Range evidence need: Exact lifecycle packets, complete physical activity totals, ownership and remaining-use uncertainty are needed for share/range evidence.

- Collection subject: Installer-owned reusable asset attribution
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: Actual resource share a_rj / D item; substantiate all consumers and periods in cp_services and the resource_share rule.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_services`

#### Collection requirement: Whole purchased support event (`hired_support_service`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Resolve each genuine bought transport/access/test/support event and service configuration. The provider owns equipment lifecycle; identify any included foreground energy. An hourly hire awaits Duration support and review. Range evidence need: Exact contract reference, event completion, consumers, periods and energy inclusions are needed for range evidence.

- Collection subject: Whole purchased support event
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: Actual attributable complete contracted event count / D; do not convert hourly hire into invented events.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_services`

#### Collection requirement: Unchanged usable supply return (`unused_product_return`)

Process / prospective direction / type: `install_accept` / `outputs` / `product`.

Resolve each usable component/material leaving installer custody without transformation; preserve SKU and original supply identity, receipt and return event, condition and receiver. Range evidence need: Original receipt/return pairs, condition, net mass and receiver establish return/range evidence.

- Collection subject: Unchanged usable supply return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable returned net mass / D; record a physical exit, with no avoided-manufacture credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_accept | Fit, test and accept the receptacle | required | Selected first-installation scope and prepared interfaces are demonstrated. | Integrate supplied receptacle, plate and permanent fixings with prepared conductors; independently own termination, mounting, testing and acceptance. | accepted_installation |

All receipt, termination, fastening and acceptance responsibilities belong to this single integration node. Loose/incorrect terminals, wrong polarity, unsatisfactory earth or failed function are unaccepted states: identify the actual defect and original job event, correct and retest within install_accept, or record a usable return or material-specific waste exit with receiver. Downgrade or recovery requires its actual destination and evidence and is never an accepted installation. Losses remain with the original job, and unfinished or unresolved failed fittings cannot increase D. No phase-only exchange is introduced.

### Process: Fit, test and accept the receptacle (`install_accept`)

Each conditional card is an obligation to resolve zero, one or multiple actual exchanges by SKU, material/state and receiver, rather than a fixed mixed identity. Absence is accepted only with explicit activity/custody evidence. Missing records never imply zero. No universal amount bounds are established; per-card evidence needs below must be resolved for a complete data package.

#### Inputs

##### Product flows

###### Supplied grounded duplex receptacle (`receptacle`)

Actual compatible non-electronic 15 A, 125 V single-feed copper screw-terminal receptacle received before fitting; supplied device screws belong here once. Range evidence need: Matching model/SKU net supply and installed, stock, return and failure quantities are needed before any per-installation range.

- Selected flow: Supplied grounded duplex receptacle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable net receptacle supply mass / D; preserve independent receipts and the materials reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `leviton-receptacle-installation`; `leviton-5320-product`

###### Pre-handover supplied electricity (`installation_electricity`)

Resolve actual provider, voltage, site and meter boundary for external tool/charger/test and commissioning electricity. No later receptacle use is included. Range evidence need: Meter differences, shared activity, included test load and exact Energy support are needed; power or battery capacity cannot supply a range.

- Selected flow: Pre-handover supplied electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable metered electricity / D; maintain kWh and foreground inclusion ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

##### Waste flows

No incoming waste is part of this fitting route.

##### Elementary flows

No default direct resource extraction is specified.

#### Outputs

##### Product flows

###### Accepted first-installed grounded single-feed duplex receptacle fitting with plate at installer handover (`accepted_installation`)

Only completed, tested and signed installations of the declared configuration enter D. Keep each correction/retest linked to the original install_accept event.

- Selected flow: Accepted first-installed grounded single-feed duplex receptacle fitting with plate at installer handover
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `leviton-receptacle-installation`; `leviton-5320-product`

##### Waste flows

###### Actual installation waste streams (`installation_waste`)

Resolve separate packaging, conductor offcut and removed failed-component waste by material/state/hazard and authorised receiver. Retain original issue/rework event. Tool electronics/battery residue belongs here only where the owned resource lifecycle actually owns its disposal event; electronic receptacles are excluded. Range evidence need: Waste tickets, exact state/receiver, original defect event and any relevant measured dust/species release evidence are needed for range and closure review.

- Selected flow: Actual installation waste streams
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable net mass of each evidenced waste stream / D; never equate unknown residual with emitted dust.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

##### Elementary flows

No universal emission is inferred from conductor preparation or an unexplained balance residual. If an actual direct release is evidenced, identify species/particle size and receiving medium, measured or justified method, captured versus emitted fraction and its original job in cp_releases. Such evidence requires scope/identity review before adding a concrete exchange; generic dust or VOC cannot be an invented pollutant UUID.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reject_burden | install_accept | There is no intended co-product. Retain unsuccessful work, damaged inputs, corrective work and retesting with the original accepted job. Rework stays in install_accept; usable return and actual waste/recovery/discard exit need event, state and recipient. Unresolved rejects do not enter accepted output and returns receive no avoided-production credit. | |
| resource_share | owned_equipment_attribution; hired_support_service | For exact resource r and job j, a_rj = A_rj / sum(A_rk), with every benefiting job k across the same resource lifecycle packet and a common causal physical activity basis. Require positive complete denominator and sum(a_rj) = 1. Attribute asset quantity a_rj / D item and burden B_r * a_rj / D. Record period-specific shares and their evidence; output-count allocation is inappropriate where use differs. Never invent lifetime or omit other jobs. | |
| phase_reconciliation | install_accept | Tie resource manufacture/acquisition, every service/reporting period, maintenance/replacement and retirement/termination to identifiable packets, jobs and dates. Replacement has its own actual event; remaining-use uncertainty is explicit. Reconcile phase totals once and carry each packet only once; provider asset manufacture is not an additional installer input when a hired service includes it. Job-specific losses retain their job owner. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_accept | accepted installation and corrections | job_acceptance | job/configuration/model/rating; BOM; circuit/box/earth/design; isolation/proof-dead; termination/earth/polarity/function test results; failure/correction/retest events; dates; signature; independently counted D | Inspect actual scope and compatible interfaces; retain competent test and signed acceptance records and reconcile complete accepted jobs separately from components, attempts and rejects. Establish positive D from independent accepted complete installation count. | item | every job and retest | receipt through signed acceptance | declared indoor fitting site/configuration | per reference flow | signed tests; exclusion reconciliation; dates and configuration coverage |
| cp_materials | install_accept | supplies, packaging and usable returns | material_custody | shipment/job/date; SKU/material/state; net mass; counts/lengths and matching factors; installed/stock/return/waste; receipt/return receiver; upstream manufacture/delivery/packaging inclusions | Weigh net quantities with calibrated equipment or use traceable matching-SKU conversion records; follow each source pool from receipt to installed retention, closing stock and original event-linked exits. Calculate actual attributable mass / D by SKU and state. | kg | every shipment and custody event | opening stock through job closure | all supplies attributable to declared jobs | per reference flow | calibration; factor/SKU match; supplier boundary; receiver and residual ledger |
| cp_energy | install_accept | supplied pre-handover electricity | meter_record | provider/voltage/site/meter; job/tool/charger/test/load; start/end kWh and dates; all shared consumers/activity; contract energy inclusions | Read actual meter differences at the declared boundary and attribute shared supply using recorded activity; preserve raw energy apart from rated power, Ah and elapsed time. Calculate attributable actual kWh / D. | kWh | every metered activity/period | installation through acceptance only | declared meters and all benefiting consumers | per reference flow | meter calibration/resolution; inclusion ledger; complete activity denominator; Energy support gap |
| cp_services | install_accept | owned assets and purchased support | resource_lifecycle | manufacturer/model/serial or provider/contract/event; ownership; reference unit; every consuming node/job and period; physical activity A_rj and complete sum(A_rk); manufacture/acquisition/service/maintenance/replacement/retirement packets; B_r; remaining use; energy inclusions | Reconcile exact asset and contract logs across all jobs and phases; record the actual causal share decision for each period and purchased complete event; distinguish hourly hire and unresolved Duration support. Calculate attributed resource fraction or complete event count / D. | item | every use, event and phase change | entire resource packet, all service/reporting periods and termination | install_accept instances and every other benefiting job/period | per reference flow | complete consumer list; positive activity denominator; share closure; provider ownership; remaining-life uncertainty |
| cp_releases | install_accept | waste exits and direct-release evidence | exit_record | original issue/rework/job/date; material/SKU/state/hazard; waste/return ticket and recipient; net mass; captured/retained/emitted distinction; species/particle size/receiving medium; measured or justified method and uncertainty | Reconcile recipient tickets with original custody and defect events; collect relevant release evidence separately from captured waste and unexplained residuals, disclosing every closure gap. Calculate each attributable evidenced exit mass / D. | kg | every exit or evidenced release | receipt/correction through closure, including an owned lifecycle event only when attributable | declared jobs and actual authorised receivers | per reference flow | receiver tickets; calibrated mass; hazard/state evidence; release method; closure tolerance and gap |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| actual_normalization | all nonreference inventory rows | q_i = N_i / D; N_i is independently collected attributable actual numerator in its own row unit; D is positive independently counted accepted complete same-configuration installations. Preserve raw N_i and its protocol; never solve N_i from a target reference quantity. | N_i; D; cp_acceptance; cp_materials; cp_energy; cp_services; cp_releases | q_i | |
| custody_closure | receptacle; plate_and_fixings; incoming_packaging; unused_product_return; installation_waste | For each identifiable source pool, opening stock + receipts = installed retained material + closing stock + usable returns + actual waste + identified releases + residual. Document tolerance and residual; unresolved mass is a gap, not dust. Heterogeneous mass totals are diagnostic only. | cp_materials; cp_releases | pool closure and residual | |
| asset_attribution | owned_equipment_attribution | a_rj = A_rj / sum(A_rk); attributed quantity = a_rj / D; attributed burden = B_r * a_rj / D. Apply resource_share to the complete lifecycle packet and retain every period-specific owner and phase total once. | A_rj; A_rk; B_r; D; cp_services | asset quantity and burden share | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration_quality | install_accept | Match site, period, model, technical instructions, single-feed state, interfaces, BOM and acceptance. Do not transfer example product specs to all installations. | cp_acceptance; actual model/design records |
| measurement_quality | all inventory rows | Keep calibration, traceable SKU-specific conversion, raw numerators and independent positive D. Missing data and conditional absence require evidence; no zero imputation. | all linked protocols and uncertainty ledger |
| identity_quality | all inventory rows | Preserve actual function/state/gate, exact property/unit support and separate concrete exchanges; unsupported UUID, Energy/Duration and quantitative range evidence remain explicit gaps. | actual foreground identity and support records |
| resource_quality | cp_services | Cover every consumer, period and phase; record causal decision, complete activity denominator, remaining-use uncertainty, share closure and unique burden ownership. | serial/contract logs; lifecycle and inclusion packets |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_and_acceptance | install_accept | Check the declared first-installation exclusions and prepared box/circuit/earth interfaces, actual model compatibility and every required qualifier; require signed termination/earth/polarity/function tests and completed correction/retest. | `leviton-receptacle-installation`; `leviton-5320-product` |
| reference_integrity | accepted_installation | Check independently positive D, same-configuration equivalence, exclusion of unfinished/rejected work, and matching reference name, card id, property, unit and explicit 1 item output in both languages. |  |
| custody_and_route | install_accept | Check each actual SKU/state supply and installed/stock/return/waste/release closure, recipient and original producing event. Confirm correction remains linked to install_accept and every reject has a verified return, rework, recovery or discard route. No mixed identity, residual-as-pollutant or missing-record zero is permitted. | |
| shared_period_integrity | install_accept | Verify exact asset/service, every consuming node/job and service/reporting period, acquisition/manufacture, maintenance/replacement and retirement/termination links, physical share decision and positive complete denominator. Check sum(a_rj) = 1 within each packet, reconcile period/phase totals once, and prevent repeated delivery, packaging, provider capital or test energy. Missing replacement/remaining-use/termination evidence blocks final attribution. | |
| evidence_completeness | all inventory rows | Check collection/calculation/protocol links, actual numerator basis and fixed or unresolved identity/support counts. Report checks performed, skipped, findings and completeness separately from missing Range warnings; a structural check does not verify concrete UUIDs or resolve Energy/Duration and quantitative evidence gaps. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground fitting-installation package, with downstream process or lifecyclemodel projections. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible first-installation scope, exact configuration, prepared interface and acceptance gate. |
| excluded_use | Whole-building equivalence; different termination/device routes; replacement; later operating electricity, maintenance or monitoring; lifetime/performance guarantees. |
| required_metadata | Site/time; exact model/configuration/BOM; interfaces/design/jurisdiction; quantity and positive D; test/acceptance; supply datasets; inventory/protocols; resource ownership/periods and attribution. |
| required_quality_disclosure | Coverage, uncertainty, custody residuals, missing consumer/period evidence, identity/property support and quantitative range gaps, and actual validation completeness. |
| update_trigger | Changed model, interface, route, BOM, acceptance design or stronger measured/identity evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-explanatory-notes | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 3.0 explanation, PDF page 293: electrical fitting subset and separation from alarm/telecommunications services; classification alone creates no PCR identity. |
| leviton-receptacle-installation | handbook | https://leviton.com/content/dam/leviton/residential/product_documents/instruction_sheet/15a-receptacle-instruction-sheet.pdf | Representative isolation/proof-off, side-screw copper termination, separate hot/neutral/earth, mounting and plate/restoration route. Model-specific strip length/torque/gauge are not universal inventory ranges. Foreground protocols specify actual collection without inventing quantities. |
| leviton-5320-product | official_guidance | https://leviton.com/products/5320-4w | Representative 15 A 125 V two-pole three-wire grounding duplex fitting; actual materials, strap, supplied hardware and model compatibility. It establishes no complete service mass, energy, waste, asset life or bounds. |
