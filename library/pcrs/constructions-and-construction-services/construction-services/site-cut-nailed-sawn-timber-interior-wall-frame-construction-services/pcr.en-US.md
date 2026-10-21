---
pcr_id: pcr.construction-services.site-cut-nailed-sawn-timber-interior-wall-frame-construction-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Site-cut and nailed sawn-timber interior wall frame construction services

## 1. Scope and Applicability

This PCR covers first onsite construction of a bare nonloadbearing interior sawn-timber stud wall frame by a documented cut-list preparation and member-handoff stage followed by nailed assembly and mechanical fixing to accepted existing hosts. The accepted frame is unlined and ready for subsequent trades. Its host interfaces and nonloadbearing design must be established before work. The actual project-approved framing elevation governs all dimensions, spacing, opening details, grade, moisture and connections. PNNL provides a route example and pre-lining inspection guidance; its advanced-framing dimensions are not universal prescriptions (`pnnl-minimum-wall-studs`).

Exclude loadbearing or shear walls, whole-building frames, floor and ceiling framing, factory-panel assembly, engineered-wood substitutions, existing-wall removal, host construction or structural repair, linings, sheathing, insulation, services and paint. A changed load path or a need for lining to achieve the declared frame-stage stability requires boundary review. No acoustic, thermal or fire performance of a finished partition is attributed to this bare frame.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.site-cut-nailed-sawn-timber-interior-wall-frame-construction-services |
| classification_refs | cpc:3.0:54521; narrower |
| covered_products | Bare nonloadbearing interior sawn-timber stud wall frames with independently recorded onsite cut-list preparation and nailed/mechanical erection |
| excluded_products | Loadbearing/shearwall and whole-building framing; prefabricated panels; complete lined partitions; timber manufacture; old-wall removal |
| representative_product | Project-approved interior stud wall elevation with specified plates, studs, blocking and opening framing, mechanically connected to compatible accepted hosts |
| production_route | Supplied sawn lengths → measured cut-list preparation and labelled member handoff → nailed assembly, host fixing, alignment and closed corrections → signed unlined-stage acceptance |
| market_state | Completed site construction service at bare-frame acceptance, rather than timber sale or finished-room service |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted bare nonloadbearing interior sawn-timber wall frame construction service |
| How much | 1 m2 net accepted wall elevation, measured once in one plane; deduct the clear projected opening areas from gross wall elevation; retain all framing and correction burdens around openings |
| How well | Actual approved nonloadbearing framing elevation and compatible host connections; specified members and fixings complete, plumb, aligned and stable at unlined handover; inspection signed with defects closed |
| How long or cycle | One initial construction and acceptance cycle, including preparation, erection and corrections; no occupied-building life or later lining cycle |
| reference_flow_link | accepted_frame |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted bare nonloadbearing interior sawn-timber wall frame construction service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | Project and elevation ID; nonloadbearing function; host type/readiness and fixing approval; height/thickness; actual species/grade/treatment/moisture; actual member sections and spacing; plates/blocking/opening details; measured gross and clear-opening areas; net area; cut-list and transfer IDs; fastening schedule; unlined-stage stability/inspection record; geography/date |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_elevation | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Use cp_erect_acceptance to measure one elevation plane once, subtract clear openings, and retain every plate, stud, blocking and opening-member burden. Never count both wall faces or stud surface area. Positive net accepted area is required. |
| timber_state | sawn_timber; prepared_members; prepared_feed; cut_rework_feed | Mass | kg | Use traceable weighed mass at declared moisture/treatment state. Actual sections and lengths support reconciliation only; geometry requires actual species/state-specific density and moisture evidence before mass conversion. Report moisture-basis and density uncertainty; no generic timber density or oven-dry substitution. |
| services_basis | cut_energy; erect_energy; cut_services; erect_services | Actual service property | Actual supplier or meter unit | Preserve actual energy and service units, coverage and asset IDs. Allocate real shared totals by metering or documented causal use and report uncertainty; no invented conversion from hours to energy. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Approved nonloadbearing framing design, accepted compatible existing host interfaces and actual supplied sawn timber and fasteners at declared delivery gates |
| starting_condition_role | Host readiness is an evidenced precondition; existing host production is not an input consumed by this service. Delivered materials remain upstream product inputs with their production burdens. |
| product_classification_scope | A narrower interior wall-frame construction route within CPC 3.0 54521, not all building framing |
| recursive_input_rule | An input already representing accepted wall-frame construction service cannot be silently treated as timber feed. Document a separately bounded predecessor service or review the boundary; do not recursively include the same accepted service. |
| upstream_dataset_requirement | Use compatible upstream sawn timber, fasteners, energy, logistics and bounded service datasets at their actual supply states; disclose unavailable identities, moisture, treatment, geography and provider coverage. |
| disclosure | Declare design, host acceptance, procurement and transport gates, site period, prepared-member transfers, rejects and custody, shared-asset consumers, provider coverage and all gaps. No host burden, waste credit or carbon-storage credit is inferred. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| cut_handoff | cut_members | Own stock selection and cut-list transformation from supplied lengths to accepted labelled members. Record actual physical post-cut dimensions, mass and transfer IDs to erect_frame; saw kerf, offcuts, sawdust and correction cutting remain here. A real staged handoff is required for this route. | pnnl-minimum-wall-studs |
| erection_gate | erect_frame | Join prepared plates/studs/blocking/opening members with nails and specified mechanical host fixings. Check all design details, host readiness, alignment and frame-stage stability; close corrections and sign inspection before later trades. | pnnl-minimum-wall-studs |
| site_coverage | both nodes | Include actual materials, packaging, delivery/intrasite logistics, tool/drill/saw/nailer energy, conditional compressor and dust collection, access and temporary positioning services, their attributed production/use/removal coverage and closed correction burdens. Split provider service versus direct material/energy coverage to avoid duplication. |  |
| excluded_interfaces | both nodes | Exclude historic host/wall burden, upstream lumber production as a local node, host construction, old-wall demolition, complete partition performance and later trades. Unknown host/design readiness prevents a usable accepted dataset. | pnnl-minimum-wall-studs |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Cutting and extraction energy at actual supply (`cut_energy`)

Process / prospective direction / type: `cut_members` / `inputs` / `product`.

Include saw, dust extraction and actual associated charging/compressor energy only within declared direct-meter coverage. Provider-covered energy is not added again. Range evidence need: Metered operating/standby records, actual power source and provider coverage are needed; no tool rating-times-hours default range.

- Collection subject: Cutting and extraction energy at actual supply
- Flow property / unit: Energy / kWh
- Amount rule: Record actual electricity by circuit/tool and allocation period under cp_cut_services; preserve an alternative actual fuel/service unit as a separate exchange if used.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_services`

#### Collection requirement: Cutting tools and bounded shared site services (`cut_services`)

Process / prospective direction / type: `cut_members` / `inputs` / `product`.

Conditional umbrella for actual zero, one or multiple service exchanges. Identify shared asset, consumers including erect_frame/other jobs and reporting periods, production/use/removal boundary and causal allocation. Range evidence need: Actual provider scope, equipment use, service units and consumer ledger are needed; hours do not establish energy, capital lifetime or a default service amount.

- Collection subject: Cutting tools and bounded shared site services
- Flow property / unit: Duration / h
- Amount rule: Record separately identified saw/tool, access, logistics, extraction or compressed-air service consumption under cp_cut_services; retain each actual provider quantity/unit and coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_services`

#### Collection requirement: Actual usable timber and packaging custody transfers (`cut_usable_returns`)

Process / prospective direction / type: `cut_members` / `outputs` / `product`.

Usable uncut timber, offcuts or returnable packaging crossing the defined lot boundary to a named owner are product transfers. Material retained for later use stays in the stock balance with carried-forward burden ownership; internal recutting stays in its loop. Range evidence need: Actual weighed transfers and owner receipts establish outbound quantities; closing-stock records establish a separate retained balance, not a recovery rate or second net subtraction.

- Collection subject: Actual usable timber and packaging custody transfers
- Flow property / unit: Mass / kg
- Amount rule: Record only actual outbound custody transfers by material, mass, receiving owner and destination under cp_cut_material; retained closing stock has no output quantity. Do not subtract these same returns from gross input.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_material`

#### Collection requirement: Discarded delivery packaging at cutting stage (`cut_packaging_waste`)

Process / prospective direction / type: `cut_members` / `outputs` / `waste`.

Nonreturnable wrapping, straps or damaged packaging leaves here when custody actually ends; usable returns remain product/stock. Range evidence need: Actual packaging composition, supplier coverage and waste weights are needed; no universal packaging fraction.

- Collection subject: Discarded delivery packaging at cutting stage
- Flow property / unit: Mass / kg
- Amount rule: Record each actual discarded packaging material and destination under cp_cut_waste; maintain delivered packaging burden in its upstream supply coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_waste`

#### Collection requirement: Actual characterized uncollected cutting particles to air (`cut_air_release`)

Process / prospective direction / type: `cut_members` / `outputs` / `elementary`.

This conditional elementary umbrella covers actual uncaptured cutting particulate emissions. Captured sawdust is excluded; a broad dust label cannot determine a concrete pollutant UUID. Range evidence need: Actual dust monitoring or a compatible reviewed factor with activity/capture evidence is needed; missing evidence is not zero emissions.

- Collection subject: Actual characterized uncollected cutting particles to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured or evidenced actual air release by particle-size/substance basis and receiving air compartment under cp_cut_waste; retain an explicit gap if characterization is absent.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_waste`

#### Collection requirement: Actual nails and mechanical framing or host connectors (`frame_fasteners`)

Process / prospective direction / type: `erect_frame` / `inputs` / `product`.

Nails join timber members; specified mechanical fasteners connect framing and accepted hosts. Conditional connector families follow actual design without assuming metal or anchor count. Range evidence need: Actual fastening schedule, purchase/issue records and measured unit masses are needed; no default nails per square metre.

- Collection subject: Actual nails and mechanical framing or host connectors
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual nail/connector/anchor receipts/issues attributable to the lot under cp_erect_material, including replacements. Record real returns separately without pre-netting; retained stock stays a balance with declared burden custody. Verify count-to-mass with actual product evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_erect_material`
- Sources: `pnnl-minimum-wall-studs`

#### Collection requirement: Erection drilling and fastening energy at actual supply (`erect_energy`)

Process / prospective direction / type: `erect_frame` / `inputs` / `product`.

Direct energy for actual installation and closed corrections is recorded at the real supply gate; manual tools establish documented nonuse, not an assumed powered route. Range evidence need: Actual meter/operating records, power source and coverage are needed; no generic energy per frame area.

- Collection subject: Erection drilling and fastening energy at actual supply
- Flow property / unit: Energy / kWh
- Amount rule: Record actual direct drilling/nailer/charging/compressor energy under cp_erect_services; exclude energy already in cut_energy or a purchased full service.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_erect_services`

#### Collection requirement: Erection tools access logistics and conditional air services (`erect_services`)

Process / prospective direction / type: `erect_frame` / `inputs` / `product`.

Actual shared drill/nailer/compressor/extraction/access assets are linked to cut_members and other consumers by period. Declare material/energy/asset production and removal coverage, including temporary positioning resources if used. Range evidence need: Actual billed/operating service quantities and causal sharing evidence are needed; no assumed air use, asset lifetime or service duration.

- Collection subject: Erection tools access logistics and conditional air services
- Flow property / unit: Duration / h
- Amount rule: Record separately identified actual tools, access, handling/logistics and conditional compressed-air service under cp_erect_services; use each actual provider quantity/unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_erect_services`

#### Collection requirement: Actual usable erection-material custody transfers (`erect_usable_returns`)

Process / prospective direction / type: `erect_frame` / `outputs` / `product`.

Actual rejected but recuttable member transfers back to cut_members retain paired cut_rework_feed IDs. Separately identify usable timber, fastener and packaging transfers to suppliers/other owners. Material kept for later use remains closing stock with carried-forward burden ownership. Range evidence need: Actual defect authorizations, weighed transfers and owner receipts determine separate return quantities; no assumed return rate or product output for retained stock.

- Collection subject: Actual usable erection-material custody transfers
- Flow property / unit: Mass / kg
- Amount rule: Record only actual transfers separately by material, state, mass, owner and destination under cp_erect_material. Only the recutting subset pairs to cut_rework_feed; supplier/owner returns are separate exits. Retained closing stock is a balance with no output quantity, and no return is pre-netted from gross input.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_erect_material`

#### Collection requirement: Discarded erection materials and packaging (`erect_waste`)

Process / prospective direction / type: `erect_frame` / `outputs` / `waste`.

Waste from failed fixing, damaged members and cleanup leaves erect_frame here; cutting-stage dust/offcuts remain owned by cut_members. Separate each actual waste identity in the dataset. Range evidence need: Actual segregated weights, host drilling material and contamination/treatment evidence are needed; no combined generic waste fraction.

- Collection subject: Discarded erection materials and packaging
- Flow property / unit: Mass / kg
- Amount rule: Measure separately actual discarded timber, fasteners, packaging and captured drilling debris under cp_erect_waste, with material-specific states and destinations.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_erect_waste`

#### Collection requirement: Actual characterized erection drilling particles to air (`erect_air_release`)

Process / prospective direction / type: `erect_frame` / `outputs` / `elementary`.

Airborne timber or host particles are distinguished from collected debris and cutting-stage emissions. Actual host/material identity controls the pollutant evidence. Range evidence need: Actual drilling activity, particle characterization and compatible monitoring/factors are needed; unknown host dust is not automatically wood dust or zero.

- Collection subject: Actual characterized erection drilling particles to air
- Flow property / unit: Mass / kg
- Amount rule: Record actual pollutant/size-resolved uncollected release and receiving air compartment under cp_erect_waste, conditional on actual drilling or abrasive correction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_erect_waste`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cut_members | Cut-list preparation of sawn-timber members | required | Documented onsite cut-list preparation with physical member handoff | Independent dimensional transformation; includes recutting loop and cutting losses | Actual weighed prepared-member transfer attributable per reference flow, never 1 m2 of timber |
| erect_frame | Erect and mechanically fix the bare interior frame | required | Accepted actual nonloadbearing design and host readiness | Assemble and fix members and fasteners to the signed bare-frame gate; corrections retained | 1 m2 net accepted wall elevation |

Off-length or damaged cut members remain in cut_members for rework or leave as usable return/stock or classified waste. Erection defects are corrected within erect_frame; members returned for recutting use a matched transfer to cut_members and re-enter through the prepared-member handoff. Retain every repeat operation. Do not count a loop as new external timber or a rejected frame as accepted area. Shared tools, compressors, extraction and logistics retain asset/service IDs and complete consuming-node/job/period lists.

### Process: Cut-list preparation of sawn-timber members (`cut_members`)

#### Inputs

##### Product flows

###### Sawn timber at actual delivery state (`sawn_timber`)

Actual structural-grade sawn stock lengths for plates, studs, blocking and opening members enter here; record species, grade, dimensions, moisture, treatment, supplier and gate. Range evidence need: Actual approved cut-list, invoices and state-specific weighing/stock ledger are needed to establish material-use and cutting-loss variability; PNNL dimensions do not define a kg/m2 range.

- Selected flow: Sawn timber at actual delivery state
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual sawn-timber receipts/issues attributable to the lot under cp_cut_material, including correction material. Record actual custody-return outputs separately; do not pre-net returns. Keep retained closing stock as a balance with disclosed carried-forward burden ownership, never an outbound exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_material`
- Sources: `pnnl-minimum-wall-studs`



###### Erection members returned for recutting (`cut_rework_feed`)

Conditionally present when an erection member is usable after an approved cut correction; preserve the same physical identity, moisture and rejected state. Range evidence need: Actual defect authorization and transfer weights determine occurrence and spread; no assumed reject percentage.

- Selected flow: Erection members returned for recutting
- Flow property / unit: Mass / kg
- Amount rule: Record actual return mass and paired transfer ID under cp_cut_material; include only attributable recut service, without a second upstream purchase burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_material`



##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cut-list sawn-timber members at erection handoff (`prepared_members`)

Accepted labelled cut plates, studs, required blocking and opening members cross a physical staged handoff to erect_frame. This is an internal transfer, not another final product. Range evidence need: Measured cut-list handoffs and current moisture state determine quantities and variability; no fixed timber yield or geometry-to-mass default.

- Selected flow: Accepted cut-list sawn-timber members at erection handoff
- Flow property / unit: Mass / kg
- Amount rule: Measure actual attributable prepared-member mass and dimensions under cp_cut_material, with transfer IDs matching prepared_feed; do not set this quantity to 1 m2 or infer it from final area.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_material`



##### Waste flows

###### Discarded sawn-timber offcuts and rejected members (`cut_offcuts`)

Offcuts and irreparable rejected members leave cut_members for declared collection/treatment. Match contamination and receiver acceptance, including treated timber when actual. Range evidence need: Actual segregated weights, treatment state and destination evidence establish variability; no default cutting-loss fraction.

- Selected flow: Discarded sawn-timber offcuts and rejected members
- Flow property / unit: Mass / kg
- Amount rule: Weigh actual discarded solids by timber treatment and destination under cp_cut_waste; exclude usable stock and captured fine sawdust.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_waste`



###### Captured sawdust and wood cutting dust (`cut_sawdust`)

Actual captured dust leaves the extraction/container gate as waste, with actual wood/treatment state and receiver route. It is not an elementary air emission. Range evidence need: Actual collected weights and extraction records are needed; no assumed capture efficiency or conversion of all sawdust to emission.

- Selected flow: Captured sawdust and wood cutting dust
- Flow property / unit: Mass / kg
- Amount rule: Measure collected fine wood residues under cp_cut_waste; report collection efficiency/uncertainty separately from airborne loss.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_waste`



##### Elementary flows

### Process: Erect and mechanically fix the bare interior frame (`erect_frame`)

#### Inputs

##### Product flows

###### Accepted cut-list sawn-timber members received for erection (`prepared_feed`)

Plates, studs, blocking and opening members enter as measured prepared material, retaining their cutting-stage upstream burden exactly once. Range evidence need: Actual matched handoff weights, moisture and erection cut-list revisions are needed; no fixed internal amount equal to final reference.

- Selected flow: Accepted cut-list sawn-timber members received for erection
- Flow property / unit: Mass / kg
- Amount rule: Record actual received member mass/dimensions and transfer IDs under cp_erect_material, matching prepared_members after explicit in-transit stock/returns reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_erect_material`



##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted bare nonloadbearing interior sawn-timber wall frame construction service (`accepted_frame`)

The final service is the signed bare frame at actual design, host and unlined-stage stability gate; exclude unresolved defects and unaccepted area. Range evidence need: The exact reference defines normalization, not a yield range. Actual accepted elevations, clear openings and documented geometry/measurement uncertainty are needed for comparison.

- Selected flow: Accepted bare nonloadbearing interior sawn-timber wall frame construction service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_erect_acceptance`



##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| retained_rework | cut_members; erect_frame | Retain timber, fasteners, energy, services and waste from every rejected attempt and correction in the accepted lot. Do not add rejected area to the denominator. Pair erection-to-cutting rework and prepared-member return transfers; internal transfers carry existing burden without new procurement or a second final output. |  |
| usable_custody | both nodes | Use gross attributable material receipts/issues with actual custody-return outputs; never pre-net a return and model it again as an output. Retained closing stock is a balance, never an outbound product. Declare its carried-forward burden ownership separately from the accepted service; do not invent a stock credit. Usable offcuts, fasteners and packaging require owner and later-use/return evidence. Erection recutting transfers are a separately matched subset; supplier returns are not recut feed. Waste retains producing-node responsibility and actual destination. |  |
| shared_services | cut_services; erect_services; cut_energy; erect_energy | Identify each shared asset/provider and all consuming nodes, jobs and service periods. Prefer direct metering or activity evidence; otherwise document a causal allocation key with complete denominator, standby treatment and uncertainty. Attributed shares cannot exceed the event total. Provider coverage and direct quantities are mutually reconciled so tool manufacture, logistics, compressor energy and removal are not counted twice. |  |
| no_automatic_credit | both nodes | No automatic coproduct, waste recovery, avoided virgin timber or biogenic storage credit. A documented usable material exit requires explicit retained-burden treatment and separate later-use boundary; timber carbon/moisture facts require actual evidence. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cut_material | cut_members | timber issue; prepared handoff; rework; usable returns/stock | material and transfer ledger | lot; elevation; member ID; cut-list revision; supplier; species; grade; treatment; section; length; moisture basis; weighed mass; opening/closing stock; return owner; transfer ID | Record gross actual supply/stock issues to the defined lot, without pre-netting custody returns. Weigh prepared members and real usable outbound transfers; closing stock is a retained balance with declared carried-forward burden, never an output exchange. Pair prepared handoffs to cp_erect_material and recutting returns separately; retain repeats. Reconcile gross issues, stock, transfers, waste and actual releases at declared state and uncertainty; divide attributable lot totals by cp_erect_acceptance net accepted area. | kg | Each issue/cut batch/transfer and closeout | Full construction lot including corrections | Actual site cutting station and stock area | per reference flow | Scale traceability; moisture method/state; cut-list dimensional checks; delivery receipts; paired transfers; closing stock custody; reconciliation gaps |
| cp_cut_services | cut_members | energy; shared cutting tools/services | meter and service-event ledger | event ID; asset/provider; supply unit; meter start/end; use/standby period; consumers/jobs/nodes; allocation key; total activity; share; coverage; energy source | Meter cutting/extraction direct energy and record actual bounded provider quantities separately. Match complete shared consumer/period totals with cp_erect_services, allocate only attributable shares, reconcile included energy/tool/logistics/air coverage and divide by accepted net area. Preserve each actual provider unit. | kWh; h; actual service units | Each meter/service event and allocation close | Full preparation and recutting period | Site cutting operation and actual shared providers | per reference flow | Meter readings; complete sharing denominator; event IDs; actual provider scope; standby decision; allocation uncertainty |
| cp_cut_waste | cut_members | offcuts; sawdust; packaging waste; actual air release | segregated waste and emission record | cut batch; waste material; timber treatment; mass; capture route; receiver; transfer ticket; emission substance/size; air compartment; activity/factor provenance; uncertainty | Weigh offcuts, collected sawdust and packaging separately after usable-stock classification. Identify actual contamination and destination. Characterize uncollected air releases through monitoring or compatible activity/factor evidence, excluding collected dust; disclose absent factors rather than zero. Divide attributable totals by accepted net area. | kg | Each segregation/dispatch and applicable monitored event | Full preparation and correction period | Cutting and extraction boundary with actual receiver | per reference flow | Weighing/tickets; treatment state; collection efficiency evidence; pollutant definition; factor applicability; uncertainty and unresolved gaps |
| cp_erect_material | erect_frame | prepared feed; nails/connectors; usable returns | component and transfer ledger | elevation; member/connector specification; received mass; transfer ID; cut-list revision; used/replaced quantity; unit mass evidence; return state/destination/owner; stock balance | Match prepared receipts to cp_cut_material without resupplying upstream burden. Record gross actual fastener receipts/issues without pre-netting returns. Separate actual recutting transfers, supplier/owner exits, retained closing-stock balance and waste; pair only recutting members to cut_rework_feed. Retained stock carries declared burden custody and has no output quantity. Count-to-mass requires actual product evidence. Divide attributable totals by accepted net area. | kg | Each receipt/fixing/correction/return and lot close | Full erection including closed corrections | Actual elevation, interfaces and site stock | per reference flow | Paired member IDs; fastening schedule; host compatibility; product mass evidence; supplier return receipts; closing stock and defect records |
| cp_erect_services | erect_frame | direct energy; tools/access/logistics/air services | meter and service-event ledger | event ID; asset/provider; supply unit; meter start/end; use/standby period; all consumers; allocation key; total activity; share; coverage; actual power/air source | Measure actual drilling/nailer/charging/compressor use and bounded services. Pair shared event totals with cp_cut_services including other jobs/periods; reconcile direct versus provider energy/material/asset coverage. Retain correction and removal obligations and divide attributable totals by accepted net area. Preserve actual service units. | kWh; h; actual service units | Each service/meter event and allocation close | Full erection/correction and attributed service period | Actual site and service providers | per reference flow | Meter/service records; event/consumer reconciliation; complete denominator; provider boundary; retained/removal custody; uncertainty |
| cp_erect_acceptance | erect_frame | accepted bare-frame service | as-built geometry and acceptance record | elevation ID; actual length/height; clear-opening dimensions; gross area; net accepted area; design revision; actual members/spacing; host approval; fixing inspection; alignment/stability; defects; signed date | Measure one wall elevation plane once using traceable dimensions. Deduct clear projected door/other openings while retaining all surrounding framing burdens. Inspect actual specified members/fixings, nonloadbearing/host compatibility and unlined-stage stability; close defects and sign before later trades. Use positive total net accepted area as the sole lot denominator. | m2 | Each elevation and final signed correction closeout | Initial construction through acceptance only | Actual accepted frame elevations | per reference flow | Approved framing elevation/local applicability; dimensional uncertainty; host acceptance; inspection photos/signature; closed defect list; opening reconciliation |
| cp_erect_waste | erect_frame | discarded components/packaging; actual drilling release | segregated waste and emission record | elevation; event; actual host material; waste composition/treatment; mass; destination; ticket; particle/substance/size; air compartment; factor/monitoring; uncertainty | Separate usable returns from discarded timber/fasteners/packaging and captured host drilling debris; retain node and destination evidence. Determine actual uncollected particle release using applicable monitoring/factors with capture evidence; report absence as a gap. Exclude cutting-node waste and divide by accepted net area. | kg | Each correction/cleanup/dispatch and applicable emission event | Full erection and closed corrections | Actual erection boundary and waste receiver | per reference flow | Material/treatment identification; weighed waste tickets; actual host/drilling activity; pollutant characterization; capture evidence; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_net_area | accepted_frame | Sum accepted gross elevation areas once and subtract their clear projected opening areas; do not deduct the framing around those openings or count both faces. | cp_erect_acceptance dimensions; acceptance; openings | Positive net accepted area in m2 |  |
| lot_normalization | all inventory rows | For each material, waste, emission and actual service unit, divide the attributable lot amount by the same positive net accepted area. Retain actual prepared-member and rework-transfer masses, independently of final output area. | Node-specific protocol totals; cp_erect_acceptance net accepted area; allocation evidence | Amount of each actual exchange per reference flow |  |
| stock_reconciliation | sawn_timber; cut_usable_returns; erect_usable_returns | Reconcile gross lot receipts/issues and initial stock with installed/prepared transfers, actual custody returns, retained closing-stock balance, waste and actual releases at consistent moisture state. Closing stock is not a product output; disclose its carried-forward burden ownership. Separate recutting transfers from supplier exits. Internal transfers cancel only in whole-lot physical totals; keep node records and never pre-net returns also modelled as outputs. | cp_cut_material; cp_erect_material; cp_cut_waste; cp_erect_waste | Traceable material reconciliation and disclosed difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| design_gate | reference product | Actual nonloadbearing design and accepted compatible host interface are required; illustrative PNNL sizes/spacing do not establish project acceptance. | Approved elevation and fixing specification; cp_erect_acceptance |
| transfer_state | both nodes | Match measured cut-list handoffs and recutting loops by member, state, moisture and transfer ID. Do not fix an internal amount to the reference area. | cp_cut_material and cp_erect_material reconciliation |
| range_collection | all cards | Collect actual comparable lot variability, measurement error and identity qualifiers before setting a QA range. No source here supports universal material, loss, fastening, energy or service ranges. Missing amounts/identities are explicit data gaps. | Node-specific records; per-card Range evidence needs |
| material_conversion | timber and fasteners | Mass conversion requires actual dimensions/density/moisture or measured unit mass at compatible state; retain uncertainty and reject unexplained generic factors. | Weighing, moisture record and supplier specification |
| shared_coverage | all services | Keep complete consumers and service periods, actual attribution evidence and provider/direct coverage reconciliation. | cp_cut_services; cp_erect_services |
| release_identity | waste and elementary outputs | Distinguish offcuts, captured sawdust, returns/stock and actual substance/size-specific airborne release; missing characterization cannot mean zero. | cp_cut_waste; cp_erect_waste |
| temporal_completeness | all cards | Use the full initial job with corrections and final acceptance. Record supplier geography/date, site period, gaps and representativeness; never mix a prototype/example bill with actual site data. | Lot ledger; source/version disclosure; signed closeout |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_acceptance | reference product | Reject a data package with unknown loadbearing function, unaccepted host/design, missing specified members/fixings, unresolved frame-stage stability or open defects. Confirm signed unlined acceptance before later trades. | pnnl-minimum-wall-studs |
| area_consistency | all inventory rows | Check one positive net accepted elevation area, explicit opening deductions, retained opening-member burdens and the same denominator on every quantity. Reject both-face counting and invented final-area internal timber quantities. |  |
| handoff_rework | both nodes | Match actual prepared-member and recutting transfers and moisture states, retain repeat burdens, and exclude rejected area from accepted output. Inspect unmatched quantities as gaps rather than silent losses. |  |
| stock_waste_air | both nodes | Verify distinct usable custody, stock, offcut, sawdust, packaging and actual air-release paths; use material-specific treatment and receiving medium. No duplicate subtraction, automatic recovery credit or missing-emission zero. |  |
| sharing_check | all services | Reconcile shared assets, every consumer/period, complete allocation denominator, standby and provider coverage against total events; no energy/service/material duplicate. |  |
| identity_quantity | all cards | Before a final exchange is produced, verify its concrete actual flow identity, property and unit, and supply actual collection evidence and any reviewed ranges. An umbrella card or automated candidate check does not establish quantity, UUID verification or publication readiness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction-service data package for the declared bare interior wall-frame route |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projection |
| allowed_use | Comparable site-cut nonloadbearing interior timber frames with declared actual design/host/acceptance and consistent net elevation measurement |
| excluded_use | Loadbearing/shear walls, whole buildings, factory panels, lined partition performance, old-wall removal, later maintenance or inferred carbon-storage/avoided-waste benefits |
| required_metadata | Actual project/elevation/design and cut-list; member and fastening specification; host approval; supplier/delivery gates; moisture/treatment; site geography/date; opening/net-area rule; paired transfers; corrections and acceptance; shared-service coverage/custody |
| required_quality_disclosure | Per-card quantities/identity evidence and gaps; density/moisture and area uncertainty; range evidence; complete waste/air/stock paths; allocation/standby/provider limits; temporal/technology representativeness |
| update_trigger | Change to load path/design, material state, member layout/openings, host/fixings, cut-list or staging route, power/provider/air service, waste route, measurement method or acceptance requirements |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| pnnl-minimum-wall-studs | official_guidance | Pacific Northwest National Laboratory / U.S. DOE Building America Solution Center. Advanced Framing: Minimum Wall Studs. Last updated 2022-09-16. https://basc.pnnl.gov/resource-guides/advanced-framing-minimum-wall-studs | Illustrative cutting/member/plate and nonloadbearing interior framing route; actual approved framing elevations and visual inspection before subsequent trades. Numeric examples are not universal design or inventory ranges. |
| un-cpc3-notes-2025 | official_guidance | United Nations Statistics Division. CPC Version 3.0 Explanatory Notes, 30 June 2025, pp. 290–291. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Building framing classification context including wall framing; narrower semantic scope, not an inventory or product design specification. |
