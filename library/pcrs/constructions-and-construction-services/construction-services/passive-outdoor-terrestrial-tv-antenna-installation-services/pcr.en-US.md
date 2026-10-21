---
pcr_id: pcr.constructions-and-construction-services.construction-services.passive-outdoor-terrestrial-tv-antenna-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Passive outdoor terrestrial TV antenna installation services

## 1. Scope and Applicability

This PCR covers first installation of a fixed passive outdoor directional antenna for residential terrestrial television reception. The accepted configuration comprises the antenna and matching balun, actual mast/mount, a continuous coax lead-in to one receiver interface, and installation-specific mast and coax grounding or bonding to a declared suitable existing building grounding interface. Aiming, documented acceptance testing and installer handover complete the service. The technical design and locally applicable requirements govern actual work; representative manufacturer guidance supplies route evidence rather than a universal installation layout.

Satellite dishes, indoor antennas, cable-TV supply networks, multiple-outlet distribution, amplifiers, rotators, towers, new lightning-protection systems, new earth electrodes, painting, removal of earlier equipment and subsequent reception/maintenance services are excluded. A reception distance, channel count or lifetime guarantee is not the output. An incompatible site condition or expanded design requires a separately reviewed scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.passive-outdoor-terrestrial-tv-antenna-installation-services |
| classification_refs | cpc:3.0:54614; narrower subset only |
| covered_products | Accepted first-installed passive outdoor directional residential terrestrial-TV antenna configuration and single receiver lead-in |
| excluded_products | Satellite, indoor, powered or rotating reception; distribution networks; whole lightning protection and later operation |
| representative_product | Channel Master Advantage 30-series illustrates passive antenna assembly, supplied balun, mast fixing and aiming; actual compatible model governs, without a brand requirement |
| production_route | Receipt and interface verification; antenna assembly; mast and antenna fixing; coax routing/termination/weatherproofing; design-required mast/coax bonding; aiming/testing; correction and retest; accepted handover |
| market_state | Complete site installation at signed installer handover, with actual configuration and tested endpoint |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One complete accepted installation of the disclosed configuration at installer handover |
| How much | 1 item; D is the independently counted positive number of actual complete accepted installations before normalization |
| How well | Declared model, substrate/mount, single lead-in, separate mast/coax bonding design and receiving endpoint satisfy the recorded acceptance criterion; materially different configurations require separate packages or demonstrated equivalence |
| How long or cycle | One receipt-to-acceptance job cycle, including failed work and corrections/retests. Resource acquisition, service/reporting periods, maintenance/replacement and retirement are separately indexed; no operating-year service is claimed |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted passive outdoor directional residential terrestrial-TV antenna installation |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Actual antenna and balun model/inclusions; passive fixed directional state; mast/mount geometry and substrate; coax SKU/length/route and single receiver endpoint; weatherproofing products; separate mast/coax bonding design and existing grounding interface; jurisdiction/design; target transmitter, actual reception test and acceptance criterion; site/date; signed handover |

Declare every qualifier in the foreground package. Count D from signed complete installations rather than from purchased antennas, visits or tests. Missing acceptance or configuration equivalence prevents normalization.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use actual independent complete-installation acceptance count D > 0; the final normalized output is 1 item. |
| `material_mass` | mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net supply, return, waste and identified release masses with calibrated records. Count/length-to-mass conversion requires matching SKU and state evidence, not a heterogeneous installation weight. Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. |
| `metered_energy` | installation_electricity | Energy | kWh | Preserve actual meter-based electricity and its consumer boundary; power rating, battery Ah, NCV and duration do not measure electrical energy. Exact support identity remains unresolved. |
| `counted_resource` | owned_equipment_attribution; hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | A reusable asset fraction addresses one identified asset lifecycle packet; a hired event must be a genuine complete contracted service. Actual hourly hire requires Duration support and review. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials received and mounting substrate, safe access/power-line clearance, receiver endpoint and suitable existing building grounding interface verified for the actual design. Existing-condition acceptance is readiness, not a new product input or credit. |
| starting_condition_role | Explicit prepared interface at which installer integration responsibility starts |
| product_classification_scope | Selected passive residential terrestrial reception installation is narrower than cpc:3.0:54614; the subclass also covers other antenna/cable/lightning services |
| recursive_input_rule | If a same-category prior installation is purchased, record its actual state and upstream boundary and isolate only genuine new installer work. An unresolved recursive resource overlap blocks finalization of the LCA data package; do not trace indefinitely or double count the earlier service. Determine D from actual physical aiming/test and signed installer-handover records independently of data readiness. An ownership gap neither proves physical rejection nor sets D to zero. |
| upstream_dataset_requirement | Use matching component and service packets with manufacture, inbound delivery, packaging and provider capital inclusions explicitly stated. Include each actual upstream burden once. |
| disclosure | Site/interface approvals, installer supply and handover responsibility, job/period scope, received material custody, actual resource ownership and upstream inclusions/exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `installer_gate` | install_accept | Own material receipt, assembly/fixing, lead-in termination and weatherproofing, design-required separate mast/coax bonding, aiming, testing, correction/retest and signed handover. The existing grounding system is an interface; new earth electrodes and whole lightning-protection construction are outside scope. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `component_boundary` | component inputs and packaging | Reconcile antenna-included balun/hardware against separate mast, coax, connectors and bonding supplies. Keep physical incoming packaging in the custody ledger even if manufacture is embedded upstream; separately burden only an upstream exclusion. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `resource_boundary` | owned equipment and hired service | Identify actual installer-owned tools, chargers, testers and access equipment and all consumers over each resource lifecycle packet. Contract providers own their asset lifecycle. Distinguish acquisition, service/reporting, maintenance/replacement and termination periods and document missing remaining-use evidence. |  |
| `rework_boundary` | failed work and material exits | A failed aim, fixing or reception test is an unaccepted state within install_accept until corrected/retested. Trace actual repair loop or usable return, downgrade/recovery/discard exit to its originating job and node; an unreviewed downgrade has no accepted output identity. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `posthandover` | receiver operation and later service | End at accepted handover; do not incorporate operational reception electricity, later maintenance or marketing reception guarantees. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Separately supplied mast and permanent mounting hardware (`mast_mount_hardware`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Expand the actual mast, brackets, U-bolts, anchors and fixings into their own material/SKU exchanges. The accepted substrate and mount geometry control the supply; subtract nothing by guess and do not repeat antenna-bundled hardware.

- Collection subject: Separately supplied mast and permanent mounting hardware
- Flow property / unit: Mass / kg
- Amount rule: Actual separately supplied mounting mass attributable to this job / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Quantity evidence gap: Actual mounting design, per-SKU conversion and issue/return records are needed; no universal mount mass is supplied.

#### Collection requirement: Separate coaxial lead-in, balun and connector supplies (`coax_balun_connectors`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Expand the actual 75-ohm continuous coax SKU, connectors and receiver fitting for the single declared receiver endpoint. A balun is a separate input only if it is genuinely additional to the antenna packet; record the original inclusion explicitly.

- Collection subject: Separate coaxial lead-in, balun and connector supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable lead-in and separate connector/balun mass / D; use matching measured length-to-mass evidence where necessary.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Quantity evidence gap: Cable route/length, termination waste and model-specific mass evidence are missing from universal sources and must be collected.

#### Collection requirement: Installation-specific mast and coax bonding components (`bonding_components`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Expand each actual conductor, clamp and coax grounding block or protective fitting required by the approved design. Document mast/support bonding and coax-entry bonding separately to the suitable existing building grounding interface. This is not a new earth electrode or a whole lightning-protection system.

- Collection subject: Installation-specific mast and coax bonding components
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied bonding-component mass / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Quantity evidence gap: Site-approved interface/design, actual conductor and fitting SKUs and net supply records must establish any bounds.

#### Collection requirement: Actual connector and penetration weatherproofing products (`weatherproofing_materials`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Where the installed method uses sealing or weatherproofing, expand each actual product with formulation/SDS and application point. Separate retained material, containers and losses; application does not imply complete evaporation.

- Collection subject: Actual connector and penetration weatherproofing products
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied weatherproofing-product mass / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

Quantity evidence gap: Product-specific issue, retained mass and SDS constituent evidence are needed; no generic use or emission interval is supported.

#### Collection requirement: Received packaging by material and shipment (`incoming_packaging`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Keep the physical packaging receipt in custody accounting for every antenna/component shipment. Expand by actual material. If its manufacture is embedded in landed component supply, do not add that burden again; a separate burden requires evidence that the upstream packet excludes it.

- Collection subject: Received packaging by material and shipment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable received packaging mass / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

Quantity evidence gap: Shipment-specific weights and supplier packaging boundary disclosures must replace any assumed packaging percentage.

#### Collection requirement: Lifecycle share of actual installer-owned equipment (`owned_equipment_attribution`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Expand every used tool, external charger, RF/electrical tester and access asset by exact model/serial. Its lifecycle packet spans acquisition, service/reporting periods, actual maintenance/replacement and retirement; all benefiting jobs/nodes and periods must be listed, including those outside this package.

- Collection subject: Lifecycle share of actual installer-owned equipment
- Flow property / unit: Number of items / item
- Amount rule: Actual causal activity share of each resource lifecycle packet / D item; retain complete resource-consumer evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_services`

Quantity evidence gap: Exact resource life and all-consumer activity evidence are required; no generic lifetime, remaining-use assumption or fixed per-job asset fraction is available.

#### Collection requirement: Actual whole contracted support event (`hired_support_service`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Expand each genuinely purchased complete transport, access or testing event with its contracted reference and configuration. The provider owns its asset lifecycle; disclose included fuel/electricity and inbound delivery. Hourly hire needs real Duration support and review rather than conversion into a fictional event.

- Collection subject: Actual whole contracted support event
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable whole contracted event quantity / D item; a counted unit is allowed only for a genuine whole service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_services`

Quantity evidence gap: Actual contracts, service reference and burden-inclusion records are needed before a service envelope can be stated.

#### Collection requirement: Unchanged usable component returns (`unused_product_return`)

Process / prospective direction / type: `install_accept` / `outputs` / `product`.

Record only actual usable unchanged supplies leaving installer custody. Preserve source SKU and receipt-to-return identifiers and receiver; an internal stock movement is not this boundary exit. No avoided manufacture credit is inferred.

- Collection subject: Unchanged usable component returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable usable return mass / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

Quantity evidence gap: Original issue and receiver-confirmed return evidence must justify the quantity and any bounds.

#### Collection requirement: Actual installation discard streams (`installation_waste`)

Process / prospective direction / type: `install_accept` / `outputs` / `waste`.

Expand packaging, offcuts and removed failed components by material, physical state, hazard and authorised receiving route. Link each discard or recovery to the original install_accept issue/rework event; electronics or battery rejects require their actual identity and lifecycle owner. Do not merge heterogeneous waste into one concrete flow.

- Collection subject: Actual installation discard streams
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable waste mass for each material/state/receiver / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

Quantity evidence gap: Event-linked weighing and destination tickets are needed; unrecorded loss is not zero waste.

#### Collection requirement: Actual contaminated sealant, wipe and container residues (`contaminated_solid_waste`)

Process / prospective direction / type: `install_accept` / `outputs` / `waste`.

Where actually produced, expand chemistry, physical state, hazardous status and receiving route for contaminated containers, wipes and sealing residues. Separate clean packaging already owned by installation_waste and material retained at joints.

- Collection subject: Actual contaminated sealant, wipe and container residues
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable contaminated residue mass by stream / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

Quantity evidence gap: Actual material/SDS, residual weighing and receiver classification are required to establish waste bounds.

#### Collection requirement: Identified mounting particulate released to air (`airborne_particulate`)

Process / prospective direction / type: `install_accept` / `outputs` / `elementary`.

Activate only with evidence of drilling/mounting and actual airborne release. Expand the reported substance and particle-size fraction with receiving-air compartment; captured dust is waste and retained substrate is neither an emission nor unexplained loss assigned to air.

- Collection subject: Identified mounting particulate released to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable released particulate-species/fraction mass / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

Quantity evidence gap: Task/capture records and measured or justified species/size release evidence are needed; generic dust is not an identity or emission factor.

#### Collection requirement: Identified weatherproofing constituent released to air (`weatherproofing_constituent_to_air`)

Process / prospective direction / type: `install_accept` / `outputs` / `elementary`.

Where an actual product releases an identified constituent, record species, formulation/SDS, application conditions, mass-balance or measurement and receiving-air compartment. Neither an unspecified VOC label nor total supplied sealant mass supports a concrete emission.

- Collection subject: Identified weatherproofing constituent released to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable emitted constituent mass / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`

Quantity evidence gap: Species-specific content and release evidence must separate retained, captured, wasted and airborne fractions; no 100 percent emission assumption is supported.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `install_accept` | Install, aim, test and accept passive outdoor antenna | required | Every included job | Integrate independent antenna, mount, coax and bonding roles into the declared accepted installation; own correction/retest and original-event-linked exits | D actual accepted complete installations; normalized output 1 item |

The sole node owns joining and installation, access and test support. These are responsibilities within one physical service, not fictitious phase outputs. Foreground evidence determines zero, one or multiple concrete exchanges for conditional umbrella cards. Expand actual SKU/state/receiver or substance/air-compartment streams before binding; a mixed material or generic VOC/dust name cannot receive one UUID. Absence requires explicit activity and custody evidence, while missing records remain a gap.

### Process: Install, aim, test and accept passive outdoor antenna (`install_accept`)

#### Inputs

##### Product flows

###### Passive directional terrestrial-TV antenna assembly (`antenna`)

Receive the actual VHF/UHF antenna assembly before mounting. Record factory-included clamps, bolts and matching balun inside this supply packet; no powered amplifier or rotator belongs to this identity.

- Selected flow: Passive directional terrestrial-TV antenna assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable supplied antenna mass / D; reconcile included accessories against the job BOM.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Quantity evidence gap: Matching SKU net weighing, accessory inclusion and accepted-configuration records are needed before any inventory bounds can be justified.

###### Actual pre-handover tool, charger and test electricity (`installation_electricity`)

Record externally supplied electricity within the actual installer meter boundary, with provider/voltage/site and any shared consumers. Keep charging and testing inclusions explicit; operational receiver use after handover is excluded. Energy support remains unresolved and capacity, NCV or operating duration is not a substitute.

- Selected flow: Actual pre-handover tool, charger and test electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable metered pre-handover kWh / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

Quantity evidence gap: Actual meter coverage, shared-load allocation and matched job activity are needed; manufacturer antenna specifications do not establish electricity bounds.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted passive outdoor directional residential terrestrial-TV antenna installation (`accepted_installation`)

The output is the installed antenna, mast/mount, one coax receiver connection and approved mast/coax bonding scope after aiming, actual test, correction/retest and signed handover. Count actual complete accepted installations of the declared equivalent configuration independently as D; components, visits, tests and unfinished jobs are not outputs.

- Selected flow: Accepted passive outdoor directional residential terrestrial-TV antenna installation
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Quantity evidence gap: Reference normalization is a definition after independent acceptance counting, not a productivity or reception-performance bound.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

No intended co-product is assumed. Keep failed assembly, aiming, tests and corrections with the original installation burden; neither unchanged returns nor discarded parts receive an avoided-production credit. Record every actual reject state and destination, including in-node repair, actual usable return, recovery/discard or a separately reviewed downgrade. Unfinished or failed installations never enter D.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `job_specific` | job materials and corrective work | Assign traceable job-specific supplies, losses, energy and test/retest to that job. Shared actual costs require a documented causal pool; do not allocate by accepted count where physical activities differ. |  |
| `resource_share` | shared equipment and contracted event pools | For resource r and job j, a_rj = A_rj / sum(A_rk) over all benefiting jobs k in the same defined lifecycle/resource packet. Use a consistent causal activity basis, complete consumer coverage, positive denominator and sum(a_rj) = 1. Attribute a_rj / D item and burden B_r * a_rj / D; uncertain remaining use prevents a final unsupported fraction. |  |
| `period_ownership` | all resource and event packets | Index acquisition/manufacture, each service/reporting period, maintenance, replacement and retirement/termination. Link every input, asset, output and event to period and job and retain the period-specific attribution decision/evidence. A replacement is its own actual event packet. Reconcile each source pool and resource owner once, including other jobs; never duplicate provider capital or annualize without resource evidence. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `install_accept` | accepted installation and job configuration | job acceptance record | job/configuration id; site/date; model/BOM; substrate/mount; coax route/endpoint; mast/coax bonding interface/design; target transmitter; test criterion/results; correction/retest; signed acceptance; actual D | Audit actual completed job and signed test/handover records; independently count complete accepted same-configuration installations | item | Every job and correction/retest | Whole receipt-to-handover job; explicit reporting period | Actual installation site and declared receiver interface | per reference flow | Competent acceptance, dated test records, positive D and justified configuration equivalence |
| `cp_materials` | `install_accept` | supplies, packaging and usable returns | shipment and material custody ledger | job/period; shipment/SKU/material/state; inclusion/BOM; net mass; actual count/length; matching mass factor; opening/closing stock; installed amount; return/receiver; supplier delivery/packaging boundary | Calibrated weighing or traceable matching-SKU conversion; reconcile receipts/issues, installation, stock and recipient-confirmed returns with original events | kg | Each receipt, issue, installation and return | All job receipts and stock movements in stated periods | Installer custody and actual job site | per reference flow | Calibration; SKU/state conversion provenance; upstream inclusion ledger; receiver tickets |
| `cp_energy` | `install_accept` | installation electricity | meter and shared-load activity record | job/period; provider/voltage/site; meter boundary; start/end kWh; tool/test/charger activity; all shared consumers; provider inclusions | Read actual meter or validated submeter; match charging/tests and shared consumers to the same job/period and causal boundary | kWh | Every relevant meter interval and shared activity | All included pre-handover electricity intervals | Actual supply/meter boundary | per reference flow | Meter validity; load-coverage checks; no power/capacity proxy; disclosed exact support gap |
| `cp_services` | `install_accept` | owned assets and hired whole support events | resource lifecycle and contract ledger | resource model/serial/owner; job/node/period consumers; acquisition/manufacture; actual service activity; maintenance/replacement; retirement; remaining-use uncertainty; actual whole-event contract reference; delivery/energy/capital inclusions | Read exact resource and contract packets; enumerate all consumers across jobs/nodes and periods; verify actual causal activity and nonduplicated burden ownership | item; actual physical activity units retained | Each resource use, contract event and lifecycle change | Whole resource lifecycle packet plus indexed service/reporting periods | Current installer and all benefiting consumer jobs/nodes | per reference flow | Complete consumer denominator; positive activity; share closure; provider boundaries; unresolved life/Duration disclosure |
| `cp_releases` | `install_accept` | waste and identified emissions | event and destination release record | job/period; originating issue/rework id; material/chemistry; state/hazard; receiver/ticket; captured/retained mass; emitted species/particle fraction/air compartment; formulation/SDS; actual task; method uncertainty | Weigh and confirm actual receiver streams; measure or justify constituent/particulate releases from actual task and product evidence; separate retained, captured and emitted material | kg | Each waste exit or release-producing activity | All relevant original/rework events through handover | Actual work location and receiver or receiving-air compartment | per reference flow | Destination tickets; method and uncertainty; species/size/medium support; material balance residual disclosure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_actual` | all non-reference inventory rows | q_i = n_i / D; n_i is the independently retained actual attributable numerator for the concrete exchange; D is positive actual complete acceptance count. Never backsolve n_i from the reference output. | n_i; D; cp_acceptance; corresponding material/energy/service/release protocol | q_i per reference flow |  |
| `sku_mass` | mass inventory rows | Use measured net kg; when only count or length exists, multiply actual quantity by a traceable matching SKU/state mass factor and preserve its uncertainty. A heterogeneous total is a diagnostic rather than a concrete exchange. | cp_materials; cp_releases; matched conversion evidence | actual kg numerator |  |
| `custody_closure` | identifiable material source pools | Opening stock + receipts = retained installed material + closing stock + usable returns + actual waste + identified releases + disclosed residual. Reconcile each material/source pool, never assign the residual to dust or fill missing data with zero. | cp_materials; cp_releases; original-event and receiver ledger | material pool closure and unresolved residual |  |
| `asset_attribution` | owned_equipment_attribution; shared hired_support_service | Apply resource_share to each exact resource pool, retaining A_rj, all A_rk, B_r, consumer/node/period indexing and ownership; divide the attributable actual packet quantity by D. No service-to-mass equivalence exists. | cp_services; cp_acceptance; exact activity and lifecycle evidence | resource fraction or genuine event per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_quality` | accepted output | Document every reference qualifier and configuration equivalence. Product point specifications apply only to the matching model and are not universal service amounts or reception guarantees. | cp_acceptance; manufacturer model instructions |
| `custody_quality` | materials and exits | Retain exact identity, units, calibrated quantities, event/receiver and upstream manufacture/delivery/packaging inclusions; report stock and mass-balance residuals. | cp_materials; cp_releases |
| `resource_quality` | assets and shared services | Complete consumer/period indexing and causal allocation with replacement/termination ownership. Unknown remaining life or incomplete consumers remain explicit finalization blockers. | cp_services; resource_share; period_ownership |
| `conditional_quality` | conditional umbrella exchanges | Require actual activity/custody proof for an absent flow; missing supply, electricity, waste or release evidence is a gap. Actual SKU/species/medium and support must be verified before binding. | All actual protocols; no zero imputation |
| `quantity_quality` | all inventories | Collect actual temporal/site coverage, conversion provenance and uncertainty. Manufacturer sources supply no universal installation Range; preserve card-specific evidence needs rather than inventing bounds. | Calibrations; matched source packets; declared gaps |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `acceptance_gate` | reference and install_accept | Verify actual scope/interfaces, all qualifiers, positive independent D, signed complete output and correction/retest closure. Match reference link/name/property/unit to accepted_installation and require explicit 1 item. Failed/unfinished work stays outside D. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `stream_gate` | inventory and material exits | Check every actual SKU/state/receiver stream, material-pool custody closure and original reject/rework/exit linkage. Separate retained weatherproofing, captured waste and identified airborne species/size/medium; generic dust/VOC is insufficient. Missing evidence is inconclusive, not zero. |  |
| `resource_gate` | resource and period packets | Check all consuming jobs/nodes and periods, actual activity denominators and share closure, period-specific decisions and replacement/termination evidence. Reconcile acquisition, provider capital, delivery, packaging and shared energy once; unresolved remaining use blocks finalization. |  |
| `binding_gate` | reference and concrete exchanges | Verify exact identity and compatible support chain before each final exchange. Register unresolved identities separately; confirm bilingual semantics, source/protocol/calculation links and projection fingerprints. Report performed/skipped checks, findings and completeness distinctly; a mechanical check does not establish publication readiness or resolved UUIDs. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation data package for downstream process and lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset, only with compatible configuration, scope and installer handover gate |
| allowed_use | Matched passive residential terrestrial antenna installation and its actual component/service interfaces |
| excluded_use | Operational reception electricity, long-term reception/lifetime claims, later maintenance, satellite/powered/distribution routes or whole-building/whole-lightning-protection equivalence |
| required_metadata | Site/time; actual model/BOM and configuration; accepted D; interface/design; test/acceptance and corrections; upstream datasets; inventories/protocols; ownership, consumer and period attribution |
| required_quality_disclosure | Identity/support gaps; missing inventory Range evidence; meter/calibration/conversion uncertainty; custody residuals; remaining-use and allocation uncertainty; actual performed/skipped validation |
| update_trigger | Changed model, mounting/interface, lead-in, BOM, design, acceptance method, route or stronger actual quantity/identity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-explanatory-notes | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 3.0 scope: selected passive terrestrial route is a narrower subset of antenna installation including other residential antennas/cable-TV/lightning conductors |
| channelmaster-advantage-installation | handbook | https://downloads.channelmaster.com/Sheets/30%20Series%20UG.pdf | Representative assembly, included hardware/balun versus separate mast/coax, mounting, clearance, grounding and aiming/test responsibilities |
| channelmaster-advantage-support | handbook | https://www.channelmaster.com/blogs/product-support/advantage-45 | Separate mast/support and coax-entry bonding responsibilities, actual local design and reception assessment |
| channelmaster-advantage-product | handbook | https://www.channelmaster.com/products/advantage-45-outdoor-tv-antenna-cm-3016 | Representative passive configuration and package inclusions; product mass/range marketing is not whole-installation inventory evidence |
