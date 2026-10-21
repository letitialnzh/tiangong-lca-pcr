---
pcr_id: pcr.inside-mount-cordless-fabric-roller-shade-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Inside-mount cordless fabric roller shade installation services

## 1. Scope and Applicability

This PCR covers the first inside-recess installation of one factory-finished manual cordless fabric roller shade with mounting bar on an accepted existing window reveal. The fitted system includes its model-matched brackets, fixing arrangement, lift handles and end caps. Work runs from site and kit checks through drilling, assembly, permitted tension correction, cleanup and signed functional handover. `levolor-cordless-25-0040-024` supports this specific route; it is not a universal installation specification.

Outside mounts, chains and exposed operating cords, motorized shades, optional fabric valances and hold-down accessories, cutting or fabricating shades, reconstructing windows, removing existing shades, daily operation and later replacement are excluded. Stop rather than forcing a shade into an unsuitable opening. Record actual instructions and model; a different mounting architecture requires boundary review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.inside-mount-cordless-fabric-roller-shade-installation-services |
| classification_refs | CPC 3.0 54699 — Other installation services n.e.c.; proposed narrower relation |
| covered_products | Completed inside-mount manual cordless factory fabric roller shade installation with mounting bar, without optional valance or hold-down accessories |
| excluded_products | Outside mounting; motors; chains/corded operation; factory fabrication; window alteration; removal and maintenance |
| representative_product | Factory-finished open-roll cordless fabric roller shade with mounting bar and matched fitting kit, installed inside an existing window recess |
| production_route | Survey reveal and kit; mark and drill; fix level brackets; attach handles; engage mounting bar; fit end caps; correct tension if permitted; check operation and clean |
| market_state | Accepted installation service at signed site handover; purchased finished shade kit is an upstream product, not the service output |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed inside-mounted cordless fabric roller shade installation |
| How much | 1 item |
| How well | Actual substrate and clearance accepted; required brackets retained, level and correctly oriented; handles/end caps fitted; unobstructed level raising/lowering and position holding checked with corrective work closed |
| How long or cycle | One initial installation and handover cycle; no shade or tool lifetime assumed |
| reference_flow_link | `shade_install_accepted` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted inside-mount cordless fabric roller shade installation service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Manufacturer/model; width/drop; fabric and roll direction; mounting-bar/kit coverage; recess dimensions and obstructions; substrate and approved fixings; bracket count/positions; handle count; instruction edition; site/date; acceptance and resource boundary |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `count_reference` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count one complete accepted installation once; bracket, handle, window-area and working-hour counts are not service counts. Preserve width/drop/fabric and gate qualifiers; different configurations are not automatically equivalent. |
| `inventory_basis` | all inventory rows | Declared row property | Declared row unit | Use per reference flow records. Weigh extra material, returns and waste separately; do not infer kg from shade area, bracket counts or nominal geometry. Preserve actual meter units for power and disclose unresolved support before final exchange binding. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing accessible reveal surveyed for fit, condition and substrate; exact factory shade and kit received; work area authorized and ready |
| starting_condition_role | Customer-owned host reveal is an existing installation interface; its construction is outside this first-fit service |
| product_classification_scope | Installation service only; purchased shade, extra fittings, logistics and tools retain their own upstream product/service boundaries |
| recursive_input_rule | Do not purchase the same completed installation as an input. A subcontracted bounded stage replaces that stage inventory or is disaggregated with one burden owner. |
| upstream_dataset_requirement | Finished shade supply includes declared factory kit and packaging coverage; extra parts and bounded tool/logistics service require compatible upstream datasets. Disclose any omitted upstream burden. |
| disclosure | Declare supply gate, inbound/return transport and waste receiving gate; supplier service inclusions; existing reveal exclusion; actual shared asset periods/consumers and unresolved identities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `inside_fit` | shade_install | For the selected guide without valance, check minimum recess depth 1-5/8 in and minimum height 1-5/8 in; fully recessed depth is 2-1/8 to 4 in depending on actual roll diameter. Check crank/handle clearance and actual model limits before drilling. The optional valance depth table is outside this scope. | `levolor-cordless-25-0040-024` |
| `brackets` | shade_install | For this guide: widths up to 36 in use 2 brackets; 36-1/8–48 use 3; 48-1/8–60 use 4; 60-1/8–72 use 5; 72-1/8–90 use 6; 90-1/8–108 use 7. Do not interpolate unsupported widths or transfer this table to other models. Mark end brackets 1-1/2–2-1/2 in from shade edges and evenly space additional brackets. Inside-mount clear tabs face the room. Use the 3/32 in pilot specified for the supplied system only where appropriate to approved substrate/fixings; determine actual anchor drilling from its instructions. Supplied screws do not establish suitability for every substrate. Drywall requires suitable anchors, not supplied. | `levolor-cordless-25-0040-024` |
| `assembly_gate` | shade_install | Keep protective paper wrap until fully installed. Fix brackets level/aligned, shim if needed. Fit one handle centrally for width up to 42 in; wider shades have two handles per rail. For inside mount hook the mounting-bar BACK groove on the REAR bracket hooks, rotate toward FRONT clear tabs and push until EVERY bracket clicks/locks; do not use outside-mount top-groove/downward rotation. Fit end caps. Raise/lower using handles centrally to keep movement level, check clearance/fabric and level resting position, and record position holding under actual instructions. Permitted tension correction uses removal, spring-side/roll-direction identification and 5 mm Allen adjustment as instructed, followed by reinstallation and repeat checks. No invented acceptance load or holding duration. | `levolor-cordless-25-0040-024` |
| `resources_and_exits` | shade_install | Include actual drilling/charging/extraction power, consumables, cleanup, attributable bounded reusable tool/access services and declared logistics. Manual operation does not imply zero installation electricity. Record usable parts/packaging return to named recipient or retained stock, and distinct waste exits. No assumed recovered material credit or generic direct-emission factor. | `levolor-cordless-25-0040-024` |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Additional substrate-compatible fixing and levelling components (`extra_fixings`)

Process / prospective direction / type: `shade_install` / `inputs` / `product`.

Conditional on actual need, record extra approved anchors, screws or shims by concrete material and purchased state, excluding the supplied kit coverage. Each concrete component is a separate eventual exchange. Range evidence need: Actual substrate, compatible fixing specification, number and component mass are required; no universal kg range follows from bracket counts.

- Collection subject: Additional substrate-compatible fixing and levelling components
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed or traceably documented extra components issued to the job, with gross returns separately recorded.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `levolor-cordless-25-0040-024`

#### Collection requirement: Actual cleanup and dust-control supplies (`cleanup_supplies`)

Process / prospective direction / type: `shade_install` / `inputs` / `product`.

Conditional on use, identify each purchased product such as cleaning water or disposable wipes and its actual mass. Do not assume wet cleaning, hazardous chemicals or a common mixture identity. Range evidence need: Method and measured use depend on substrate/debris; obtain site and product evidence before proposing a supply interval.

- Collection subject: Actual cleanup and dust-control supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual supplies issued/consumed for installation and corrective cleanup, separately by product.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `levolor-cordless-25-0040-024`

#### Collection requirement: Bounded reusable tool and access provision service (`tool_access_service`)

Process / prospective direction / type: `shade_install` / `inputs` / `product`.

Conditional on use, record the supplier-defined bounded provision for drill, hand tools or access equipment as concrete services with their declared included burdens. A counted service unit is valid only when the provider contract defines it; retain actual duration/activity records for attribution. Range evidence need: Provider boundary, physical service quantity and all-consumer activity denominator are required; do not invent tool life, utilization or a count-to-hour conversion.

- Collection subject: Bounded reusable tool and access provision service
- Flow property / unit: Number of items / item
- Amount rule: Actual attributable provider service quantities in their contract-defined units; split incompatible service units before final binding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`
- Sources: `levolor-cordless-25-0040-024`

#### Collection requirement: Bounded installation delivery and return logistics service (`job_logistics`)

Process / prospective direction / type: `shade_install` / `inputs` / `product`.

Conditional on the declared gate, record actual job delivery/return service, provider vehicle/route and cargo allocation. The bounded service unit must be supported by actual contract; record physical distance/load separately. Range evidence need: Actual trips, return routing, cargo and provider units are needed; no universal trip count or transport factor is supported.

- Collection subject: Bounded installation delivery and return logistics service
- Flow property / unit: Number of items / item
- Amount rule: Actual contracted attributable delivery and return service units, excluding included kit freight or tool-provider transport already charged elsewhere.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`
- Sources: `levolor-cordless-25-0040-024`

#### Collection requirement: Usable shade parts and packaging at documented return or stock gate (`usable_returns`)

Process / prospective direction / type: `shade_install` / `outputs` / `product`.

Conditional on actual reusable items, distinguish supplier-returned unused shade/parts, reusable packaging and retained stock by item/material, recipient, custody and transfer id. Opening and closing stocks are inventory balances, not purchased inputs or additional physical exits. Retained closing stock is not also a usable output transfer. Record this output only for an actual custody transfer, with a unique receiving custodian and one balance treatment; goods retained by the same custodian remain solely in closing stock. Keep upstream burden owner and any supplier refund transparent. Range evidence need: Actual reusable condition, receiving evidence and measured mass are needed; do not assume all packaging reusable or deduct a return twice.

- Collection subject: Usable shade parts and packaging at documented return or stock gate
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed usable physical exits or traceable component masses by receiving custodian and unique transfer id; count whole shade returns also for kit reconciliation. Retained same-custodian closing stock is a balance, not this output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`
- Sources: `levolor-cordless-25-0040-024`

#### Collection requirement: Discarded packaging at declared waste collection gate (`packaging_waste`)

Process / prospective direction / type: `shade_install` / `outputs` / `waste`.

Conditional on discard, separate actual paper/cardboard, plastic or mixed packaging by material and receiving route. Packaging included in kit supply is not a second purchased input. Range evidence need: Actual packaging bill, separation and weigh records are needed; no generic packaging fraction or recycling credit.

- Collection subject: Discarded packaging at declared waste collection gate
- Flow property / unit: Mass / kg
- Amount rule: Actual separated packaging waste mass dispatched to identified collector/treatment gate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`
- Sources: `levolor-cordless-25-0040-024`

#### Collection requirement: Captured fixing-hole debris and damaged installation materials (`installation_debris`)

Process / prospective direction / type: `shade_install` / `outputs` / `waste`.

Separate actual substrate drilling debris, spent cleanup supplies, damaged extra components and irreparable shade parts by characterized material and receiving route. Captured dust is waste; it is not automatically an elementary air release. Add wastewater as a separate actual waste stream when wet cleaning occurs. Range evidence need: Substrate, hole/cleanup method, material identity and weighed disposal records are needed; geometry alone provides no dust or reject mass range.

- Collection subject: Captured fixing-hole debris and damaged installation materials
- Flow property / unit: Mass / kg
- Amount rule: Actual measured collected debris and discarded material quantities by characterized stream, including correction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`
- Sources: `levolor-cordless-25-0040-024`

#### Collection requirement: Actual characterized substance releases to air (`air_releases`)

Process / prospective direction / type: `shade_install` / `outputs` / `elementary`.

Conditional on evidenced release, split by identified substance or particle class and receiving air compartment. Use monitoring or a justified method for actual substrate and controls. Do not infer VOC emissions from fabric/product content or declare zero because no measurement exists. Range evidence need: Substance identity, control efficiency and applicable monitoring/factor uncertainty are required; no generic total dust/VOC mass interval is established.

- Collection subject: Actual characterized substance releases to air
- Flow property / unit: Mass / kg
- Amount rule: Actual substance-specific measured or documented method-derived released mass; unknown release remains a disclosed data gap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `levolor-cordless-25-0040-024`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `shade_install` | Recess fitting, assembly and acceptance | required | All in-scope jobs | Join factory shade/mounting bar, brackets/fasteners, handles/end caps and any separately needed anchors/shims at existing reveal; retain rework in this node until acceptance | 1 item accepted installation |

One assembly node owns fitting and all correction before handover. Mislevelled or unretained assemblies, obstructed travel, failed position holding, damaged fabric or incompatible fixings are off-spec. Rework within `shade_install` includes safe detachment, levelling/shimming, permitted tension adjustment, reinstalling and rechecking; all repeat inputs remain in the same job record. Unresolved rejected shades cannot enter the accepted output. Usable returnable goods exit to supplier or identified stock; irreparable items leave as actual characterized waste. Shared drills/charging/access and delivery services may also serve other jobs/reporting periods: enumerate those actual consumers in the resource ledger, with no synthetic lifetime.

### Process: Recess fitting, assembly and acceptance (`shade_install`)

#### Inputs

##### Product flows

###### Factory-finished cordless fabric roller shade with declared supplied kit (`shade_kit`)

Record the exact finished shade and supply gate, including mounting bar, factory brackets/screws, handles/end caps and package coverage as actually delivered. Component roles are itemized for assembly completeness without separate purchased exchanges for already included parts. Range evidence need: Supplier kit bill and actual receipt/return/replacement ledger are needed; bracket/clearance tables give no kit mass, loss or replacement interval.

- Selected flow: Factory-finished cordless fabric roller shade with declared supplied kit
- Flow property / unit: Number of items / item
- Amount rule: Actual gross received kits attributable to the accepted installation, including consumed replacement kits; reconcile unused whole-kit returns once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kit`
- Sources: `levolor-cordless-25-0040-024`



###### Electricity for actual drilling, charging and extraction (`installation_power`)

Record actual electricity supply and attributable metered charging/drill/extractor load. Energy property and supplier identity require independent support before concrete binding. Do not duplicate power inside a provider service. Range evidence need: Actual equipment, meter interval, task share and tariff/supply region are required; manual shade lift is not evidence of zero power.

- Selected flow: Electricity for actual drilling, charging and extraction
- Flow property / unit: Energy / kWh
- Amount rule: Metered attributable electricity, including charging losses within the declared supply gate and correction cycles.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`
- Sources: `levolor-cordless-25-0040-024`



##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted inside-mount cordless fabric roller shade installation service (`shade_install_accepted`)

The completed service passes the declared reveal, bracket retention, handle/end-cap and full operation/holding checks. Rejected or pending installations are outside the accepted count. Range evidence need: This is an exact reference definition, not yield evidence; observed accepted/rejected job ledger is needed to characterize acceptance yield.

- Selected flow: Accepted inside-mount cordless fabric roller shade installation service
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_accept`
- Sources: `levolor-cordless-25-0040-024`



##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `rework_burdens` | shade_install | Keep all preacceptance rework, replacement material, removal/reinstallation and repeat checks in the original job. Failed jobs and unresolved rejects do not increase accepted output; disclose how their campaign burdens are attributed to accepted jobs. No automatic avoided-production/recycling credit. | `levolor-cordless-25-0040-024` |
| `shared_resources` | tool_access_service; installation_power; job_logistics | Identify shared drill/access/charger or delivery service, actual shade_install and every other consuming job/node, and bounded service/reporting period. Directly meter attributable use where possible; otherwise assign the declared period total by evidenced causal activity shares and reconcile shares across all consumers. Count power/transport either separately or within a provider dataset once. Use provider-bounded services rather than speculative owned-asset lifetime. Missing denominator or boundary is a gap. | `levolor-cordless-25-0040-024` |
| `returns_and_stock` | shade_kit; extra_fixings; usable_returns | Maintain gross receipt, installation consumption, supplier return, closing stock and waste ledger with unique transfer ids for actual custody movements. Opening/closing stocks are inventory balances; retained closing stock is not an extra physical usable output. Actual transfers have named receiving custody and one balance treatment. Returning a usable item does not erase its actual freight/handling; either retain a gross receipt and explicit burden-carrying product exit or apply documented net procurement once, never both a net subtraction and a second credit. Usable exits are not intended coproduct sales. | `levolor-cordless-25-0040-024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_kit` | `shade_install` | kit receipt and coverage | delivery and issue ledger | job_id; model; width; drop; fabric; roll_direction; kit_bom; supplied_part_counts; package_coverage; receipts; replacement_issues; return_ids | Inspect order, package and manufacturer instructions against actual shade; reconcile brackets, screws, handles, end caps and gross receipts with returns and consumed replacements. | item | Each receipt/issue/return | Complete initial-installation job including corrections | Actual site and linked supplier | per reference flow | Kit coverage checklist and signed issue/return records |
| `cp_materials` | `shade_install` | extra fixing and cleanup supplies | material issue ledger | job_id; substrate; fixing_spec; material; supplier; scale_id; issued_mass; consumed_mass; return_mass; water_or_wipe_identity | Record each extra part/product outside kit coverage; weigh on a suitable calibrated scale or use traceable supplier component masses; segregate unused returns. Identify actual cleaning method. | kg | Each issue and correction | Complete job | Site/store and linked supplier | per reference flow | Scale evidence, fixing approval and product receipts |
| `cp_resources` | `shade_install` | power, shared tool/access and logistics | meter and provider service ledger | job_id; asset_id; provider; service_unit; service_boundary; period; all_consumers; activity_share; meter_start; meter_end; charging_loss_boundary; route; load; included_burdens | Read actual supply meter/charging logs and provider contracts. Enumerate all actual consumers and periods; retain task duration, trip and load evidence for causal attribution. A counted bounded service requires a defined provider unit; otherwise retain actual units and unresolved conversion. Distinguish included electricity/freight. | kWh; provider-defined service units | Each resource event and bounded period | Job plus complete shared-service denominator period | Site, provider and all other ledger consumers | per reference flow | Meter calibration, provider boundary and reconciled causal shares |
| `cp_accept` | `shade_install` | accepted service and rework | inspection and handover | job_id; opening_dimensions; substrate; obstruction_check; instruction_edition; bracket_count; bracket_positions; tab_orientation; fixing_spec; level; clicks; handles; end_caps; roll_direction; raise_lower; hold_position; rework; reject_state; signoff | Measure recess and actual shade; check matching guide and substrate fixings. Record level/retention at every bracket, fitted handles/end caps, unobstructed level full raise/lower and position holding under instructions. Close corrections before signed handover; record unresolved rejects separately. | item | Each job and reinspection | Receipt through final handover | Actual installed reveal | per reference flow | Photos, dimension record, corrective closeout and signed acceptance |
| `cp_exits` | `shade_install` | usable exits and waste | weigh and transfer ledger | job_id; transfer_id; material; condition; mass; scale_id; recipient; stock_location; receiving_gate; kit_coverage; transport_owner; waste_route | Weigh each characterized return, stock transfer and waste stream separately; link supplier receipt/stock entry and waste collection note. Reconcile gross issues with retained installation, returned goods, waste and documented losses. Include actual wastewater when generated. | kg | Each return/stock/waste dispatch | Complete job including corrective cleanup | Site, receiving stock/supplier and declared collector | per reference flow | Calibrated weighing, receiving confirmation and custody reconciliation |
| `cp_air` | `shade_install` | actual substance-specific air releases | monitoring or documented factor calculation | job_id; substrate; substance; particle_class; compartment; activity; control; sampling_method; released_mass; factor_source; uncertainty | Identify actual drilling/cleaning release mechanism and substance/particle class. Measure or use an applicable documented method with actual control/activity data. Separate captured debris, retained material and released mass; absence of evidence is not zero. | kg | Each emitting task or representative validated campaign | Complete installation and rework | Actual work area and air receiving compartment | per reference flow | Monitoring/factor applicability, detection limit and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `job_reconciliation` | shade_kit; extra_fixings; cleanup_supplies; usable_returns; packaging_waste; installation_debris | For each actual job/material, reconcile gross receipt plus opening stock with installed or consumed quantity, supplier return, closing stock, waste and documented losses. Opening/closing stock are inventory balances, not additional purchases or physical exits. A retained closing balance cannot also enter usable_returns; actual custody transfers have unique receiving custody and exactly one balance treatment. Preserve product-return and waste gates; no universal loss coefficient. | cp_kit; cp_materials; cp_exits | Reconciled per reference flow exchanges | `levolor-cordless-25-0040-024` |
| `resource_attribution` | installation_power; tool_access_service; job_logistics | Assign each bounded period resource total using directly evidenced use or documented causal shares across every consumer, then attach this job share to its accepted service record. Keep numerator units and all-consumer denominator visible; do not convert hours/km to item without a provider-defined service unit. | cp_resources; cp_accept | Attributable per reference flow resource records | `levolor-cordless-25-0040-024` |
| `acceptance_count` | shade_install_accepted | Count one signed accepted job once after all corrections; retain the actual number of failed/pending jobs and campaign burden decision separately. | cp_accept | 1 item accepted reference output | `levolor-cordless-25-0040-024` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_identity` | all rows | Preserve actual shade/kit/model, inside-mount system, substrate, width/drop/fabric/roll direction and manufacturer instruction edition. No outside-mount or optional-accessory mixing. | cp_kit; cp_accept; `levolor-cordless-25-0040-024` |
| `measurement_completeness` | all inventory rows | Provide quantity, unit, dates, custody gate and measurement uncertainty for each active card. Conditional nonuse requires actual evidence; unknown use/release remains missing. Provider-defined counted units, Energy and any Duration support are not established by this PCR. | cp_materials; cp_resources; cp_exits; cp_air |
| `range_limits` | all inventory rows | Replace row-specific Range evidence needs with reviewed compatible observations or factors before treating intervals as QA limits; do not turn manufacturer bracket/clearance/handle dimensions into universal kg, power, waste or emission ranges. | Supplier/job measurements and applicable source uncertainty |
| `shared_and_reject` | shade_install | Reconcile every shared resource once over the same declared period and actual consumers; retain all rework burdens and rejected states until closure. | cp_resources; cp_accept; cp_exits |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `completed_gate` | shade_install_accepted | Require compatible opening/substrate/fixings, correct inside orientation/count/spacing, level aligned brackets with every tab locked, handles/end caps, safe unobstructed raise/lower and recorded holding check. Pending corrections or rejects cannot pass. | `levolor-cordless-25-0040-024` |
| `coverage_and_units` | all inventory rows | Reconcile factory kit coverage versus extras, gross and returned parts/packaging, actual power versus included service burdens, physical property/unit and per reference flow basis. An unresolved UUID/support or missing active quantity is disclosed and prevents a final bound exchange. | `levolor-cordless-25-0040-024` |
| `shared_rework_exits` | shade_install | Check actual all-consumer periods and causal shares; every rework loop stays attached to this job, each usable exit has named recipient/stock custody, and each waste stream has receiving gate. No double subtraction or assumed recycling benefit. | `levolor-cordless-25-0040-024` |
| `release_evidence` | air_releases; installation_debris | Validate substance-specific air method and uncertainty, distinguish captured debris from released mass, and disclose missing factors/measurements. Do not report product VOC content or unknown emissions as zero. | `levolor-cordless-25-0040-024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground first-installation service data package with downstream process and lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching inside-mount manual cordless factory-finished fabric shade installation with declared kit and acceptance gate |
| excluded_use | Shade manufacture; outside mount; motor/chain variants; optional valance/hold-down routes; old-shade removal; daily operation or lifetime performance claims |
| required_metadata | Model, width/drop, fabric/roll, substrate/recess, instruction edition, kit coverage, bracket/handle arrangement, site/time, quantity and acceptance gate, logistics/tool/waste boundary |
| required_quality_disclosure | Measured coverage and uncertainties; Range gaps; fixed/unresolved identity and support status; rework/rejects; supplier dataset inclusions; shared-period attribution and return custody |
| update_trigger | Changed mounting system, model/instructions, component coverage, substrate compatibility, installation method, measured resource/waste/release evidence or upstream provider boundary |

## 11. Data Sources

| source_id | type | reference | Used for |
| --- | --- | --- | --- |
| levolor-cordless-25-0040-024 | handbook | LEVOLOR, How to install roller shades: PerfectPlacement cordless lift, open roll with mounting bar, guide 25-0040-024, PDF pp. 1–8. https://www.levolor.com/media/pagebuilder_uploads/25-0040-024_BRND_LVC_Roll-Sol_NTL_OpenRoll-Cordless-Install-Guide_vF110325_1_.pdf | Supply components; inside-mount depth/spacing/orientation and width-dependent brackets; handle placement; engagement/end caps; operation, permitted tension adjustment and troubleshooting. Does not supply inventory masses or factors. |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, p. 296, subclass 54699. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official classification boundary including installation of blinds and awnings; narrower installation-service scope. |
