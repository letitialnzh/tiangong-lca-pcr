---
pcr_id: pcr.mechanically-surface-anchored-prefabricated-park-bench-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mechanically surface-anchored prefabricated park bench installation services

## 1. Scope and Applicability

This PCR governs first mechanical surface anchoring of one factory-assembled, four-legged freestanding/surface-mount park bench on an accepted compatible existing reinforced-concrete slab. It supplies an installed-bench handover service. The Austin bench is an illustrative route, not a mandatory brand. Its historical 10/2009 guide confirms factory assembly and the mechanical freestanding detail; current project-specific bench and anchor instructions and verified slab compatibility govern actual construction. Cantilever, epoxy anchoring, new slab/caisson/paver construction, onsite furniture fabrication, later maintenance and bench use/end of life are excluded. CPC 3.0 54400 includes street-furniture installation, but this narrower PCR covers only this defined route. Sources: `lf-austin-installation-2009`; `un-cpc3-notes-2025`; `lf-austin-product`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.mechanically-surface-anchored-prefabricated-park-bench-installation-services |
| classification_refs | CPC 3.0 54400; proposed narrower relation |
| covered_products | First accepted mechanical surface anchoring of factory-assembled four-legged park benches on compatible existing concrete |
| excluded_products | Cantilever or epoxy systems; new foundations/slabs; onsite seat/support fabrication; unanchored placement; later maintenance |
| representative_product | Austin backed/backless four-legged freestanding/surface-mount bench, supplied complete with ordered arms |
| production_route | Accept slab/design; protect and position bench; remove glides; level; mark/move; drill; compressed-air clear; reposition; mechanically anchor; inspect and close corrections |
| market_state | Complete accepted installation at signed site handover, with declared actual model and anchor configuration |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted mechanical surface anchoring of a complete factory-assembled four-legged park bench |
| How much | 1 item complete accepted installation |
| How well | Level undamaged bench; all required mechanical anchors installed and fastened under the actual approved design/current instructions; compatible slab verified; corrections closed and handover signed |
| How long or cycle | One first-installation job from received supply and host acceptance through signed handover; no assumed service life or maintenance cycle |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted mechanically surface-anchored prefabricated park bench installation service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Actual bench model/length/material/finish/supports/arms; anchor SKUs/count/design/current instructions; slab strength/cure/thickness/condition/reinforcement/edge and spacing compatibility; levelling arrangement; site/date; acceptance/correction evidence; upstream supply and service boundaries |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count complete accepted installations only; bench, leg, seat and anchor counts are not installation equivalence. |
| retain_measurements | inventory records | Actual exchange property | Actual documented unit | Retain native mass, count, energy and service measurements. Mass requires measured or traceable SKU masses; do not convert geometry or time to mass/energy without actual evidence. Verify each support property and unit group before final exchange construction; unresolved Energy/Duration or service support cannot be borrowed from count. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory-assembled bench and separately supplied mechanical anchor hardware received; existing reinforced slab already constructed and explicitly accepted for actual anchor/bench system |
| starting_condition_role | Upstream supply gates and accepted existing host interface; unknown pre-existing concrete is not default accepted |
| product_classification_scope | Narrow street-furniture installation service subset of CPC 3.0 54400 |
| recursive_input_rule | Any purchased same-category installation contribution is an explicit bounded subcontract input with its actual gate/coverage; do not recursively recreate it or claim a completed installation as an uninstalled bench. |
| upstream_dataset_requirement | Separate upstream bench, hardware, packaging and actual resource/service datasets with geography/time/technology and included transport/energy coverage. Retain unresolved coverage; no fabricated proxy. |
| disclosure | Record host evidence, ownership, actual instructions, receipt/acceptance dates, stock/returns, correction history and all shared asset consumers/periods. Existing slab production is outside this service gate; newly required slab work changes the boundary. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| host_gate | bench_install | Confirm actual bench/anchor design, slab condition/strength/cure/thickness and compatible reinforcement, edge distances/spacing before drilling. Historical guide numbers qualify only its system; no universal anchor torque, load test or slab acceptance default is inferred. | `lf-austin-installation-2009` |
| field_integration | bench_install | Join the supplied complete bench, separate anchors/washers and conditional levelling parts at the host interface. Include positioning, drilling, compressed-air clearing, fastening and inspection; do not invent onsite seat/support assembly. | `lf-austin-installation-2009` |
| sharing_scope | resources and logistics | Identify each actual drill/compressor/lift/access asset and service period, every consumer job/node/period including bench_install, and its bounded provider coverage. One local node does not erase shared use on other jobs. |  |
| correction_gate | bench_install | Loose/failed fixings, uneven supports, finish damage or unaccepted concrete block accepted output. Record internal corrections in bench_install and all repeated resource/material use; unresolved defects remain rejects. Major repair, epoxy substitution or new host construction requires boundary review. | `lf-austin-installation-2009` |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Mechanical sleeve anchors and stainless washers (`mechanical_hardware`)

Process / prospective direction / type: `bench_install` / `inputs` / `product`.

Actual approved anchor/washer identities and quantities cross the boundary separately from the supplied bench; installation hardware is not included in the illustrative bench supply. Expand actual anchor and washer exchanges; no epoxy system is included.

- Collection subject: Mechanical sleeve anchors and stainless washers
- Flow property / unit: Mass / kg
- Amount rule: Record gross hardware receipts/issues crossing into the declared job boundary by actual SKU and measured or traceable unit mass; record installed, wasted, outward usable returns and closing stock separately, without also netting returns from the input.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `lf-austin-installation-2009`

Range evidence need: Actual anchor design, fixing count, SKU masses and losses are required; guide dimensions are system details, not a universal hardware consumption range.

#### Collection requirement: Conditional stainless levelling shims or additional washers (`level_shims`)

Process / prospective direction / type: `bench_install` / `inputs` / `product`.

Include only when actual levelling needs these additional parts; distinguish them from washers already counted with anchors. Levelling precedes tightening to avoid support damage.

- Collection subject: Conditional stainless levelling shims or additional washers
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual separately supplied levelling material receipts/issues crossing into the job, with used, damaged, outward returns and closing stock separately; no double subtraction. Documented non-activation means no exchange, not an arbitrary zero mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `lf-austin-installation-2009`

Range evidence need: Require surveyed level variation, approved shim arrangement and actual masses; do not impose an invented shim allowance.

#### Collection requirement: Protective transport packaging at received condition (`packaging_supply`)

Process / prospective direction / type: `bench_install` / `inputs` / `product`.

Identify each received wrapping, foam, pallet or other packaging material and supplier coverage. This separate burden-bearing product exchange applies only where packaging supply is not already included in the bench/provider dataset. Included packaging remains in the physical custody/exit ledger with its actual mass, without a second packaging-supply exchange.

- Collection subject: Protective transport packaging at received condition
- Flow property / unit: Mass / kg
- Amount rule: Where independently supplied outside bench/provider coverage, record gross actual received packaging by material. Where already included upstream, preserve the measured physical custody/exit quantities without adding this second supply burden or replacing real mass with an arbitrary zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `lf-austin-installation-2009`

Range evidence need: Supplier packing list, measured packaging mass and upstream packaging coverage are required before any packaging range.

#### Collection requirement: Compressed-air hole-cleaning service (`compressed_air_service`)

Process / prospective direction / type: `bench_install` / `inputs` / `product`.

Hole clearing with compressed air is an explicit installation task. Record compressor/air supply identity, pressure/delivery basis, effective cleaning time and energy coverage; characterize entrained drilling releases separately. Time is a provider service denominator, not conversion of air volume to time.

- Collection subject: Compressed-air hole-cleaning service
- Flow property / unit: Duration / h
- Amount rule: Record actual cleaning service hours and documented compressor provision burdens; where actual provider units differ retain raw units and verify the concrete exchange before final dataset construction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`
- Sources: `lf-austin-installation-2009`

Range evidence need: Require measured operating/idle time, air-delivery evidence and actual provider service boundary; no generic air quantity, time or energy factor is supported.

#### Collection requirement: Conditional shared lifting access and tool provision services (`equipment_services`)

Process / prospective direction / type: `bench_install` / `inputs` / `product`.

Separate actual lifting, access, drill/tool provision, maintenance and wear coverage by asset/provider. Do not infer that every job uses a crane; manual handling does not invent powered service.

- Collection subject: Conditional shared lifting access and tool provision services
- Flow property / unit: Duration / h
- Amount rule: Record applicable asset service hours and attributable maintenance/wear; split zero, one or multiple real services and avoid duplicating energy covered by their datasets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`
- Sources: `lf-austin-installation-2009`

Range evidence need: Actual equipment type, service periods, utilization, all consumers and provider inclusion are needed for duration/lifetime/wear intervals; unspecified Duration support stays unresolved.

#### Collection requirement: Actual inbound and return transport services (`freight`)

Process / prospective direction / type: `bench_install` / `inputs` / `product`.

Resolve actual vehicle/provider, route, cargo and load allocation for bench, hardware, packaging and outward returns/waste as relevant. Bench manufacture gate and delivery gate must not overlap transport coverage.

- Collection subject: Actual inbound and return transport services
- Flow property / unit: Mass*length / t*km
- Amount rule: Calculate cargo mass times actual loaded distance for each evidenced leg; record empty/shared legs with justified attribution and supplier dataset overlap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_logistics`

Range evidence need: Need actual cargo mass, distances, loading and return-leg records before a transport interval; no bench mass or default delivery distance is asserted.

#### Collection requirement: Complete benches returned to supplier after installation rejection or as usable surplus (`bench_returns`)

Process / prospective direction / type: `bench_install` / `outputs` / `product`.

A complete bench leaving bench_install for supplier return has its condition, serial number, actual receiving party custody acknowledgement and transfer record. Installation rejection is distinct from supplier refusal to receive it. Confirm its actual usable/returnable product status; waste follows discarded_materials instead. It is not an accepted installed output. Retained bench stock or an unreceived proposed return is not an outbound product exchange.

- Collection subject: Complete benches returned to supplier after installation rejection or as usable surplus
- Flow property / unit: Number of items / item
- Amount rule: Record actual complete benches transferred out and connect them to their receipt and rejection event without avoided-production credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Require actual return/reject records by cause and recipient; no universal return rate is available.

#### Collection requirement: Usable removed glides packaging and surplus hardware transferred out (`usable_returns`)

Process / prospective direction / type: `bench_install` / `outputs` / `product`.

Freestanding glides removed for anchoring, reusable packaging and unused sound hardware remain separate material products when actually transferred for reuse/return. Record each material, condition, mass, recipient and custody; material retained onsite stays closing stock.

- Collection subject: Usable removed glides packaging and surplus hardware transferred out
- Flow property / unit: Mass / kg
- Amount rule: Record actual outbound usable material masses by fate; count each physical quantity once. Gross input plus explicit outbound return must not also receive a net-purchase subtraction or substitution credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `lf-austin-installation-2009`

Range evidence need: Need glide/packaging composition, reusable quantity, receiver acknowledgement and stock reconciliation; reuse potential alone does not establish a return amount.

#### Collection requirement: Actual discarded bench hardware packaging and repair residues (`discarded_materials`)

Process / prospective direction / type: `bench_install` / `outputs` / `waste`.

Split actual irreparable bench parts, failed anchors, damaged glides/packaging, spent repair containers and residues by material/hazard and destination. bench_install owns generation and subsequent transport/treatment coverage; do not call intact returned products waste.

- Collection subject: Actual discarded bench hardware packaging and repair residues
- Flow property / unit: Mass / kg
- Amount rule: Measure each waste transfer and establish treatment receipt, including correction losses; exclude dust separately recorded in captured_drilling_dust.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need weighed waste manifests, actual composition and treatment, and failed-fixing records before loss/discard ranges.

#### Collection requirement: Captured concrete drilling debris and dust (`captured_drilling_dust`)

Process / prospective direction / type: `bench_install` / `outputs` / `waste`.

Drilling and compressed-air clearing generate debris from the existing slab. Record captured material, particle/composition evidence and actual waste destination; existing slab construction burden is not a new material input.

- Collection subject: Captured concrete drilling debris and dust
- Flow property / unit: Mass / kg
- Amount rule: Measure collected debris by dry/wet basis and treatment transfer; distinguish captured mass from airborne particulate to avoid duplicate release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`
- Sources: `lf-austin-installation-2009`

Range evidence need: Need actual bore geometry, concrete characterization, capture method and measured debris; hole dimensions alone do not establish mass without supported density and capture evidence.

#### Collection requirement: Characterized actual airborne releases from drilling cleaning and conditional repair (`airborne_releases`)

Process / prospective direction / type: `bench_install` / `outputs` / `elementary`.

Expand actual uncaptured particulate by evidenced particle-size/substance and receiving air compartment. For activated touch-up, separately characterize reported solvent species and release basis; bulk VOC or generic dust is not a fixed pollutant identity. No epoxy VOC is introduced in this mechanical route.

- Collection subject: Characterized actual airborne releases from drilling cleaning and conditional repair
- Flow property / unit: Mass / kg
- Amount rule: Use measured releases or a documented applicable collection-linked release method, retaining emitted-versus-captured split and uncertainty; do not equate repair product mass with emitted mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`
- Sources: `lf-austin-installation-2009`

Range evidence need: Need particle composition/size, receiving compartment, dust-control observations and mass/emission measurement; any repair release additionally needs formulation/species and actual application/cure evidence.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bench_install | Mechanical bench-to-slab assembly integration and acceptance | required | Compatible accepted existing slab and actual mechanical system; conditional materials/services follow recorded activity | Own component interface, drilling/cleaning/fastening, inspection and closed rework loop; supplier returns and actual waste exits originate here | 1 item accepted installation |


### Process: Mechanical bench-to-slab assembly integration and acceptance (`bench_install`)

#### Inputs

##### Product flows

###### Factory-assembled four-legged park bench at supply gate (`assembled_bench`)

The complete bench arrives with its specified supports and ordered arms already attached. Preserve actual model, length, materials, finish, support and arm configuration; do not substitute raw metal/wood or fabricate component assembly onsite.

- Selected flow: Factory-assembled four-legged park bench at supply gate
- Flow property / unit: Number of items / item
- Amount rule: Record complete benches entering the job, including replacements, with serial/lot and fate reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `lf-austin-installation-2009`; `lf-austin-product`

Range evidence need: Obtain delivery/acceptance and replacement counts for this configuration and comparable jobs before deriving a supply-to-accepted-output interval.

###### Actual electricity for drilling and field tools (`electricity`)

Record site/provider/voltage and metering boundary for electric drilling, fastening, charging and cleanup. Compressor or hired-service electricity is included here only when excluded from the corresponding service dataset.

- Selected flow: Actual electricity for drilling and field tools
- Flow property / unit: Energy / kWh
- Amount rule: Meter attributable electricity; separate direct meters from documented shared allocation and included service energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Require meter records, task duration, equipment operating state and all shared consumers; neither power rating alone nor an assumed Energy support identity defines a valid range.

###### Conditional localized finish-damage repair material (`touchup_material`)

Only actual minor mechanical handling damage closed before handover activates this card. Identify approved touch-up formulation, amount and curing/cleaning requirements. Substantial refinishing or chemical anchoring requires boundary review outside this dry mechanical route.

- Selected flow: Conditional localized finish-damage repair material
- Flow property / unit: Mass / kg
- Amount rule: Measure actual consumed repair product; retain its solids/solvent composition and disposal. Recorded absence is zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_repairs`
- Sources: `lf-austin-installation-2009`

Range evidence need: Actual approved product, damage area, measured use and manufacturer composition are required; no normal painting consumption is assumed.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted mechanically surface-anchored prefabricated park bench installation service (`accepted_installation`)

One complete actual bench is level, undamaged and mechanically fixed at every required connection on accepted compatible existing reinforced concrete. All corrections are closed and signed site handover records identify bench and anchors.

- Selected flow: Accepted mechanically surface-anchored prefabricated park bench installation service
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `lf-austin-installation-2009`

Range evidence need: Exactly one accepted installation defines the reference, not a yield range; obtain job acceptance/reject histories to quantify acceptance uncertainty.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| retain_corrections | bench_install | Keep all installation attempts, drilling/clearing, failed anchors and minor repair burdens associated with the accepted job; exclude unresolved rejects from accepted counts. Internal correction is a loop within bench_install, not a second successful product. Trace usable supplier returns, stock and discard separately; no assumed recovery or avoided-production credits. |  |
| shared_attribution | shared resources | Allocate metered or provider-documented resource burdens with actual causal service time/load evidence over the complete asset consumer ledger and stated period; enumerate this job and other consumer nodes/jobs/periods. Disclose chosen driver and unallocated balance. If driver evidence is absent keep attribution incomplete; no default equal share or invented asset lifetime. |  |
| coverage_overlap | materials and service boundaries | Use one owner for each physical event and each upstream burden. A gross receipt with explicit outward return must not also subtract that return from purchases. Opening/closing stock reconciliation is separate from crossed-boundary returns. Split provider-included electricity/fuel/air/equipment/transport from separately metered exchanges; never add both. |  |
| no_coproduct_default | outgoing usable products | Usable glides/packaging/hardware and supplier-returned benches are documented custody exits, not automatically economic co-products. Retain job burdens without substitution credit; any actual multi-output attribution requires separately evidenced review. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | bench_install | Bench hardware shims packaging receipts and use | Receipt and material ledger | job_id; model; serial_lot; sku; actual_configuration; supply_gate; received_count; measured_mass; unit_mass_basis; opening_stock; closing_stock; installed; damaged; return_id; upstream_coverage | Record gross job-boundary hardware/shim receipts/issues, then reconcile installed, wasted, actual outward returns and closing stock separately without netting the same return from the input. Use calibrated weighing or supplier SKU masses. Packaging already included upstream stays in the custody/exit ledger without a second supply exchange; keep actual mass. Record glides removed from bench without inventing a separate new glide input. Normalize attributable job totals by accepted complete installation count; reconcile failed attempts. | item; kg | Each receipt/use/stock change | Entire first-installation job including corrections | Actual job and supplier gates | per reference flow | Traceable invoices, scale checks, SKU weights, stock/transfer records and configuration match |
| cp_resources | bench_install | Electricity compressed air shared assets and services | Meters and service ledger | job_id; asset_id; provider; meter_start; meter_end; native_unit; operating_hours; idle_hours; air_delivery; pressure; service_period; consumer_id; consumer_driver; total_driver; included_energy; maintenance_coverage | Meter direct use; record compressor cleaning and actual lifting/tool sessions. Enumerate every consumer and period in each shared ledger; document causal driver and reconciliation to total burden. Preserve actual air delivery and provider units. Include electricity once according to service coverage; divide job-attributable totals by accepted count. | kWh; h; actual provider units | Every task/session and shared period close | Full job and complete relevant shared-service periods | Actual site/job plus every external consumer of shared assets | per reference flow | Meter calibration, compressor/provider records, task logs, all-consumer ledger and overlap/driver evidence |
| cp_logistics | bench_install | Material return and waste freight | Route and cargo records | job_id; leg_id; carrier; vehicle; origin; destination; loaded_distance; actual_cargo_mass; load_share; empty_leg; transfer_id; upstream_transport_coverage | Use shipment/transfer records and evidenced routes/cargo masses; attribute shared/empty legs with actual logistics evidence, state overlap with supplied datasets and reconcile outbound recipient. Normalize attributable service by accepted count. | t*km; kg; km | Every actual leg | Receipt to handover and attributed return/waste legs | Actual routes serving job | per reference flow | Carrier documents, route evidence, cargo weighings, load ledger and dataset-boundary comparison |
| cp_repairs | bench_install | Conditional minor finish repair | Damage repair log | job_id; damage_id; area; approved_product; formulation; used_mass; solids; solvent_species; curing; method; waste_id; approval; closure | Document actual mechanical damage, approved minor repair and measured product consumption. Link to release/residue evidence and signed closure; no repair becomes a normal painting route. Divide job totals by accepted count; major work triggers boundary review. | kg; actual repair units | Every actual repair or documented absence | Full job before acceptance | Actual damaged bench and repair supplier | per reference flow | Approved product data/composition, measured use, photographs and signed repair closure |
| cp_acceptance | bench_install | Accepted reference output | Inspection and handover | job_id; bench_serial; model; length; material; finish; support; arms; anchor_sku; fixing_count; current_instructions; slab_evidence; level; fastener_check; defects; correction_closure; accepted_count; signoff_date | Inspect actual slab/anchor compatibility before drilling and finished installed bench after all corrections. Reconcile every required fixing, levelling and support/finish condition with current instructions and signed handover. Count only complete accepted installations; denominator excludes unresolved rejects. | item | Each acceptance and correction close | First-installation job through signed handover | Actual installed bench and host interface | per reference flow | Design/current instructions, slab records, pre/post inspections and signed client acceptance |
| cp_fates | bench_install | Bench returns usable glides packaging hardware and discard | Custody stock and waste ledger | job_id; transfer_id; source_receipt; material; condition; count; measured_mass; fate; recipient; receipt_ack; opening_stock; closing_stock; reject_cause; treatment; hazard | Pair actual outward transfers to receipt and condition. Separate complete bench returns, usable material returns, retained stock and actual waste; bench_install owns rejection/correction exits. Weigh by material and reconcile recipient/treatment; do not subtract a return twice. Normalize job totals by accepted count. | item; kg | Every transfer/reject and stock close | Entire job and recorded linked outbound fates | Job boundary and actual receivers | per reference flow | Recipient acknowledgement, scales, stock balance, reject photos and waste/treatment receipts |
| cp_releases | bench_install | Captured debris airborne particulate and conditional repair release | Debris and emission records | job_id; bore_id; concrete_composition; particle_size; captured_mass; moisture_basis; uncollected_release; substance; compartment; measurement_method; capture_efficiency_evidence; repair_id; uncertainty; treatment_id | Measure captured debris and separately characterize uncaptured release by substance/size and receiving air; applicable emission calculations retain actual activity and method uncertainty. For minor repair link product composition and actual release conditions. Reconcile captured/emitted masses on stated basis, avoid treating whole removed concrete as airborne or whole repair product as solvent; normalize by accepted count. | kg; actual sampling units | Each drilling/clearing and actual repair event | All installation and correction tasks | Actual bench installation exposure/control conditions | per reference flow | Sampling/scale quality, method applicability, material/species evidence, treatment receipt and uncertainty statement |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_job | non-reference inventory | q_ref = q_job / N; N = complete accepted installations in the declared comparable job lot; retain all attributable correction burdens and disclose any rejected-job treatment. Do not normalize if N is zero. | q_job; accepted_count N; linked collection protocol | q_ref per reference flow |  |
| stock_custody | material ledger | Reconcile opening stock plus receipts against installed/consumed material, actual outward usable returns, discard and closing stock by consistent material/unit. Returns are explicit exits; never also deduct them from gross receipts. | cp_materials; cp_fates; transfer_id | Reconciled material/custody ledger |  |
| shared_ledger | shared resource rows | Attribute actual shared burden using documented causal job_driver / total_driver for the complete declared consumer period; reconcile all consumer shares and unallocated residual. Service boundary excludes separately counted included energy. | cp_resources; consumer ledger; provider coverage | Attributable resource amounts and disclosed residual |  |
| freight_activity | freight | Calculate each evidenced loaded-leg cargo mass in tonnes times actual distance in km, retaining actual loading/empty-return allocation evidence. Do not invent mass or distance. | cp_logistics | t*km by actual leg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity | all exchanges | Resolve actual model/SKU/provider/substance, state, receiving compartment and property/unit before final dataset exchanges. Conditional umbrellas expand only after actual records; unresolved identity remains a blocker. | Supply data, provider detail and concrete identity/support confirmation |
| host_and_gate | reference | Unknown existing slab is not accepted; retain actual compatibility and instruction evidence, every required fixing and closed defects. Historical dimensions are illustrative system evidence. | cp_acceptance; `lf-austin-installation-2009` |
| complete_job | all quantities | Cover receipts through final correction/acceptance, stock/custody, shared periods and outbound waste; disclose missing meters, release characterization and provider coverage. | All linked protocols and reconciliations |
| range_evidence | all cards | No universal inventory interval is evidenced here. Obtain card-specific actual observations/method uncertainties before range authoring; exact reference is definition. Do not present unmeasured emission or service quantities as zero. | Linked protocol, card Range evidence need and uncertainty evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | job | Reject this route if cantilever/epoxy, unaccepted slab or new slab/foundation work is required; current actual bench/anchor instructions and compatible concrete precede drilling. | `lf-austin-installation-2009` |
| handover_complete | accepted_installation | Require complete level undamaged installed bench, all specified mechanical fixings, closed corrections and signed handover; rejected/returned bench is not an accepted output. | `lf-austin-installation-2009` |
| inventory_complete | bench_install | Reconcile separately supplied bench/hardware/shims, protective packaging, actual drilling/clearing electricity and compressed air, actual assets/logistics, usable glides/packaging/stock, captured waste and characterized airborne release. Record actual minor repair only when activated. | `lf-austin-installation-2009` |
| shared_and_fates | allocation | Check complete asset consumers/periods, attributable driver evidence and one owner per burden. No service/energy overlap, double return subtraction, invented recovery credit or stock-as-return exchange. |  |
| binding_and_uncertainty | final foreground dataset | All concrete exchanges need verified identity/property/unit; no generic dust/VOC UUID or borrowed service support. Unresolved records/ranges/support remain explicit incompleteness even if candidate structural checks pass. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground first-installation service data package with explicit upstream supply and accepted existing host interface |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections |
| allowed_use | Declared first mechanical surface anchoring of comparable fully assembled four-legged park bench at the same qualified gate |
| excluded_use | Furniture manufacture, cantilever/epoxy anchoring, new foundations/slabs, maintenance/use/end of life, safety design or generic equivalence across unspecified bench systems |
| required_metadata | All reference qualifiers; job/site/time; actual instructions and host/design acceptance; supplier/service boundaries; consumer ledger; stock/custody and corrections |
| required_quality_disclosure | Unresolved concrete flow/support identities; missing quantities/ranges; release characterization; actual shared attribution/overlap; conditional activation and acceptance coverage |
| update_trigger | Changed bench/anchor/host system or instructions; altered service boundary; changed material/finish repair or refinishing; new verified identities or quantity/range evidence |


## 11. Data Sources

| source_id | type | reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes-2025 | official_guidance | UN CPC Ver.3.0 Explanatory Notes, 30 June 2025, p.290: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 54400 street-furniture installation scope; narrower category context only |
| lf-austin-installation-2009 | handbook | Landscape Forms Austin Bench Instructions 10/2009, pp.1 and 4 mechanical freestanding surface-mount detail: https://files.landscapeforms.com/production/uploads/products/austin-bench/resources/LF_AustinBench_Installation_Guide.pdf?dm=1711139817 | Factory assembly; separate hardware; protective handling; glides/levelling; mark/move/drill/compressed-air clear; actual anchor tightening; qualified historical system route |
| lf-austin-product | handbook | Landscape Forms current Austin Bench product page: https://www.landscapeforms.com/products/austin-bench | Current four-legged freestanding/surface-mount and arm/back options; no inventory quantities or site-specific engineering |
