---
pcr_id: pcr.constructions-and-construction-services.construction-services.wire-suspended-glass-wool-acoustic-island-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wire-suspended glass-wool acoustic island installation services

## 1. Scope and Applicability

This PCR covers first installation of one factory-finished glass-wool acoustic island, suspended horizontally by four matched adjustable wires from pre-existing accepted structural fixing points. The representative route uses Ecophon Solo Square 1200 × 1200 × 40 mm and the single-panel horizontal part of IG402 alternative 1. The supplier is illustrative: another product requires evidence of the same glass-wool material, finished state, four-wire topology and permitted panel-anchor interface.

Exclude construction or drilling of structural anchors; direct brackets; one-point suspension; inclined or stacked panels; cut-outs, on-site panel cutting or painting; full suspended-ceiling grids; added lights, services or other loads; vibration insulation; and occupied-room acoustic performance assessment. Installation acceptance confirms mounting and declared geometry. Laboratory absorption data alone cannot establish room reverberation or sound-level performance. Sources: `ecophon-ig402-2024`, `ecophon-solo-square-spec`, `un-cpc3-notes-2025`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.wire-suspended-glass-wool-acoustic-island-installation-services |
| classification_refs | CPC 3.0 54790 — Other building completion and finishing services; proposed narrower relation |
| covered_products | First horizontal, uncut, single glass-wool acoustic island installations with four adjustable wire suspensions and matched absorber anchors |
| excluded_products | One-point/direct-bracket, angled/stacked, stone-wool or asbestos panels, structural fixing construction, complete ceiling systems and room acoustic commissioning |
| representative_product | Ecophon Solo Square 1200 × 1200 × 40 mm with Connect Adjustable wire hangers and Connect Absorber anchors, IG402 alternative 1 horizontal single-panel route |
| production_route | Receive and identify components; verify accepted support interface; mark panel anchor positions; fit absorber anchors; lift/support panel; engage four wires; adjust while supported; level, inspect retention and hand over |
| market_state | Accepted installation service at signed handover, before normal occupied use |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | First installation of one declared horizontal glass-wool acoustic island |
| How much | 1 item |
| How well | Correct matched panel and four-wire assembly; accepted structural support interface; retained connections, level, layout, suspension depth and clearance verified against approved product instructions and project layout |
| How long or cycle | One installation event through signed acceptance, including attributable corrective work before acceptance; no assumed acoustic service life |
| reference_flow_link | `accepted_island_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted horizontal four-wire glass-wool acoustic island installation service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | panel manufacturer/model and material; nominal dimensions and finish; single horizontal uncut configuration; four-wire hanger/absorber-anchor identifiers; actual wire lengths and anchor positions; accepted structural fixing IDs and capacity evidence; suspension depth, layout and clearance; site and installation dates; acceptance criteria and inspection records; actual panel and hardware quantities; upstream delivery and shared-resource boundary |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| counted_service | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count only one completely accepted single-island installation as 1 item. Panels, area, absorption equivalent area and mass are descriptors or component measurements; they do not replace service count. Record configuration per cp_handover. |
| material_accounting | panel_input; suspension_components; usable_returns; installation_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep panel count and actual net mass records distinct. Derive kg from traceable actual component records or weighing, excluding packaging; approximate panel mass is neither whole installed assembly mass nor a generic conversion. |
| energy_records | installation_electricity | Energy | kWh | Record actual tool, charging and powered access consumption with the metering or documented attribution boundary. Nominal tool power alone is not consumed energy. Preserve units and conversion evidence when upstream electricity uses another unit. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished panels and matched suspension components delivered to the site supply gate; suitable existing structural fixing points already installed, verified and accepted; work area accessible |
| starting_condition_role | Declared prior physical interfaces; no claim that support construction has zero life-cycle burden |
| product_classification_scope | Narrow acoustic-panel installation subset of CPC 3.0 54790; vibration insulation is outside this scope |
| recursive_input_rule | If same-category installation is subcontracted, use the actual scoped subcontract service input and remove overlapping directly modelled work. Do not recursively substitute this PCR for an upstream burden dataset or count the same accepted island twice. |
| upstream_dataset_requirement | Require upstream panel, hardware, electricity, access and relevant delivery/treatment datasets matching actual material, technology, geography and gate. Declare whether delivered input datasets include site delivery and packaging manufacture. |
| disclosure | Record prior structural-anchor acceptance, exact four-wire route, inclusion of tool/lift operations and corrective work, upstream delivery gate, waste destination and all measured/estimated/unavailable activities. New structural fixing construction requires a separately disclosed process outside this PCR. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| support_interface | island_install | Verify the existing fixing layout and capacity for the actual assembly before lifting. Follow the selected manufacturer route; do not import bracket-route torque, one-point geometry, inclined/stacked limits or added-load allowances. | `ecophon-ig402-2024` |
| assembly_gate | island_install | Include component receipt/unpacking, panel marking and absorber-anchor fitting, temporary lift/support, four-wire engagement/adjustment and inspection through acceptance. Record tool, charging, access, consumable and cleanup activities when used. Adjust with the panel supported according to the guide. | `ecophon-ig402-2024` |
| handover_limit | accepted_island_installation | Confirm retention, matching components, position, horizontality, suspension depth and clearance against the exact instructions/project criteria. A rejected or uninspected island is not an accepted output. Occupied use, later maintenance/removal and demonstrated room acoustic improvement are outside this event. | `ecophon-ig402-2024`; `ecophon-solo-square-spec` |
| waste_release_split | installation_waste; airborne_release | Collected packaging, broken panels, trimmed wire and captured debris leave as destination-specific waste. Any actual airborne release requires identified substance/fraction, receiving air compartment and quantity evidence; captured dust is not an air emission. Missing evidence is a gap, not zero. |  |
| `system_boundary_rule_5` | foreground_system_boundary | Shared tools, chargers and access equipment are shared infrastructure when they serve several island-installation instances in the same job. Identify each shared asset, every consuming island/event, the bounded service/charging period, measured use or documented physical attribution driver, and one burden owner. Record direct quantities where possible; reconcile allocated shares to the measured shared total. Provider equipment lifetime is supplied through its service dataset, not an invented installation-time lifetime. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |


### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Matched adjustable-wire suspension and absorber-anchor components (`suspension_components`)

Process / prospective direction / type: `island_install` / `inputs` / `product`.

Record four matched adjustable wire hanger positions and four matched panel absorber-anchor positions for the representative single-panel route; include actual wire assemblies, locks/hooks and any specified cups/adapters installed. Existing structural fixings are the prior interface, not newly consumed components. Record concrete component identities separately when building exchanges.

- Collection subject: Matched adjustable-wire suspension and absorber-anchor components
- Flow property / unit: Mass / kg
- Amount rule: Actual net kg of assigned suspension components by part identity, with installed counts, lengths, replacements, returns and waste reconciled.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ecophon-ig402-2024`

Range evidence need: the guide determines connection topology, not a kg range. Use actual part weights and matching installation configuration; no approximate panel-mass conversion.

#### Collection requirement: Installation handling and cleanup consumables when used (`handling_consumables`)

Process / prospective direction / type: `island_install` / `inputs` / `product`.

Conditional umbrella for actual disposable protection and dry cleanup materials used by this event. Split actual materials and verify each identity; reusable equipment belongs to the access service boundary.

- Collection subject: Installation handling and cleanup consumables when used
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable consumed kg by material; record an explicit no-use observation where none is consumed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: collect route-specific consumable records; no presumed consumable dose.

#### Collection requirement: Temporary panel-lifting and work-access service when used (`access_service`)

Process / prospective direction / type: `island_install` / `inputs` / `product`.

Record actual lifting/support/access service hours and equipment configuration. If supplier service data already include equipment energy, identify that boundary and do not add the same electricity again. No equipment-hour conversion to panels is assumed.

- Collection subject: Temporary panel-lifting and work-access service when used
- Flow property / unit: Duration / h
- Amount rule: Actual attributable service h, documented from equipment/operator logs and event allocation; zero only with an evidenced no-use record.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`
- Sources: `ecophon-ig402-2024`

Range evidence need: site access and lift practice vary; record actual service duration, with no universal installation-time prior.

#### Collection requirement: Usable panels, components and reusable packaging returned as products (`usable_returns`)

Process / prospective direction / type: `island_install` / `outputs` / `product`.

Conditional exit for genuinely usable panels, suspension parts and reusable packaging returned to supplier/store or transferred to another job, identified by original product/material and destination. Record packaging custody and opening/closing stocks so reusable packaging is neither discarded waste nor a second net-input subtraction. Failed installed work remains unaccepted until corrected; not every removed item is reusable.

- Collection subject: Usable panels, components and reusable packaging returned as products
- Flow property / unit: Mass / kg
- Amount rule: Actual net kg returned by concrete product/material identity; preserve panel/component/packaging counts and custody receipts, and reconcile removed, replaced, reassigned and retained stocks once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`

Range evidence need: quantify returns by actual disposition; no generic salvage or avoided-production credit.

#### Collection requirement: Installation packaging waste at documented receiving treatment gate (`packaging_waste`)

Process / prospective direction / type: `island_install` / `outputs` / `waste`.

Record unpacked packaging by actual material and receiving reuse/recycling/disposal route. Reusable packaging returned as a product must be distinguished from packaging designated waste.

- Collection subject: Installation packaging waste at documented receiving treatment gate
- Flow property / unit: Mass / kg
- Amount rule: Actual net kg by material and destination; include actual waste transport/treatment once through the declared downstream dataset boundary.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: weigh actual packaging for the delivered model/pack and split destinations; no universal packaging fraction.

#### Collection requirement: Discarded panel, suspension and captured cleanup residues (`installation_waste`)

Process / prospective direction / type: `island_install` / `outputs` / `waste`.

Conditional umbrella for damaged glass-wool panels, discarded fasteners/wire offcuts and captured dust/debris. Split glass-wool, metal and other residues by material and destination; site construction waste outside the event is excluded. Include actual wastewater if wet cleanup produces it.

- Collection subject: Discarded panel, suspension and captured cleanup residues
- Flow property / unit: Mass / kg
- Amount rule: Actual net kg by material/state and receiving destination, linked to the failed/replacement event and waste receipt.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: collect attributable reject and residue measurements; no assumed glass-wool waste factor or recycling recovery.

#### Collection requirement: Identified installation-related substances released to air when evidenced (`airborne_release`)

Process / prospective direction / type: `island_install` / `outputs` / `elementary`.

Conditional semantic card requiring actual reported substance or particle/fibre fraction, receiving air compartment, event and measurement/factor basis before concrete exchange selection. Do not select a generic particulate UUID from the words glass wool; captured residues belong to waste.

- Collection subject: Identified installation-related substances released to air when evidenced
- Flow property / unit: Mass / kg
- Amount rule: Actual measured or independently supported calculated kg by identified substance/fraction to the specified air compartment. Investigate plausible handling/anchor-fitting releases and disclose unavailable evidence rather than treating absence of data as zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

Range evidence need: no direct-emission factor or fibre-size distribution is established here. Obtain route/material-specific monitoring or an applicable reviewed factor before estimation.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| island_install | Receipt, four-wire suspension, inspection and handover | required | All installations in this scope | Integrate finished panel, four adjustable wires and panel absorber anchors onto accepted supports; retain corrective work in this node; record usable returns and discarded rejects at this node boundary | 1 item accepted installation |

All cards belong to this installation event. Conditional resource and exit cards are instantiated only for actual foreground exchanges, with separate concrete material/substance/destination identities. There are no intended co-products. Internal re-leveling or component replacement before acceptance remains within `island_install`; its extra materials and resources are retained. Sources: `ecophon-ig402-2024`.

### Process: Receipt, four-wire suspension, inspection and handover (`island_install`)

#### Inputs

##### Product flows

###### Factory-finished glass-wool acoustic island panels at site supply gate (`panel_input`)

Record finished glass-wool panels assigned to the installation event, including replacements needed before acceptance. The accepted service is not an upstream acoustic-panel manufacturing output.

- Selected flow: Factory-finished glass-wool acoustic island panels at site supply gate
- Flow property / unit: Number of items / item
- Amount rule: Actual received/assigned panel count, reconciled with unused returns, damaged/discarded panels and accepted islands.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ecophon-solo-square-spec`

Range evidence need: no generic panel loss/yield range is specified. Collect comparable model/site receipt and reject records before creating a guardrail.

###### Electricity for panel-anchor tools, charging and powered access when used (`installation_electricity`)

The selected figure shows a powered driver fitting absorber anchors. Account actual driving/charging and powered lift electricity when used, including an allocation basis for shared charging. Do not assume zero from the existence of pre-installed structural anchors.

- Selected flow: Electricity for panel-anchor tools, charging and powered access when used
- Flow property / unit: Energy / kWh
- Amount rule: Actual metered or documented attributed kWh for this event; retain device, meter, charging and shared-load evidence. Zero requires recorded non-use of powered resources in the actual permitted route.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`
- Sources: `ecophon-ig402-2024`

Range evidence need: collect metered comparable event data and tool/lift use before defining an energy guardrail. A power rating is not an energy quantity.

###### Cleaning water supplied to installation cleanup when used (`cleaning_water`)

The selected route does not require an assumed wet-cleaning step. Instantiate this card only when installation records show supplied cleanup water; do not import subsequent routine maintenance into the event.

- Selected flow: Cleaning water supplied to installation cleanup when used
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable kg supplied; record water source and use. If liquid exits the boundary, record its destination and quantities as actual waste rather than making an evaporation assumption.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: no generic water demand is supported for this dry mounting route; collect actual cleanup records if wet cleanup occurs.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted horizontal four-wire glass-wool acoustic island installation service (`accepted_island_installation`)

The real reference output is the signed installation acceptance for one declared island after retention, layout, level, height and clearance checks. A panel supplied, a partially suspended panel and room acoustic performance are different states.

- Selected flow: Accepted horizontal four-wire glass-wool acoustic island installation service
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Sources: `ecophon-ig402-2024`; `ecophon-solo-square-spec`

Range decision: 1 item is the exact reference definition, not an empirical yield range. Collect accepted/rejected event counts for later yield QA.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_service_output | island_install | The only intended output is the accepted installation service. Retain all attributable materials, powered-tool/access consumption, cleanup, failed attempts and corrective work through acceptance. Usable returns and wastes are disposition exits, not intended co-products. |  |
| shared_event_attribution | island_install | For several islands in one job, identify the event and consumers. Prefer direct records; attribute demonstrably shared resource totals using documented measured use or a justified physical driver, with shares summing to the event total. Preserve differing configurations as separate strata; do not assume equal counts are equivalent. |  |
| reject_return_treatment | usable_returns; installation_waste | Link every reject to correction within island_install or a documented usable-return/waste exit. Exclude rejects from accepted count. Reconcile unused returned inventory once; do not credit failed installation effort, assume reuse for damaged material, or claim avoided virgin manufacture/recycling credits without a separately declared downstream method. |  |
| access_energy_boundary | access_service; installation_electricity | Document service provider and period, attributable access hours, and included equipment/fuel/charging burdens. Match the electricity boundary to the actual service dataset; keep one burden owner for each operation. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | island_install | Panels, suspension and usable returns | Receipt, issue, count, weighing and return records |event_id; component_id; model; material; dimensions; finish; received_count; installed_count; replaced_count; returned_count; opening_stock; closing_stock; actual_net_mass; wire_length; anchor_position; destination; transfer_id; packaging_id; packaging_count; custody_owner|Count and identify panels and every fitted suspension part; use calibrated weighing or traceable exact-part net-mass records for kg rows; reconcile receipts/stock/returns and keep accepted structural-fixing evidence separate. Aggregation detail: Attributable net component quantities per reference flow; reconcile usable returns once without removing consumed failed-work resources Record reusable packaging material, count, net mass, custody transfers and opening/closing stocks.| item; kg; mm | Every installation and return/replacement | Complete event through acceptance and assigned return disposition | One declared site and configuration stratum | per reference flow | Invoices, part records, scale evidence, installation photographs, stock and return receipts |
| cp_resources | island_install | Consumables, electricity, access and conditional water | Meter, equipment log, issue and cleanup record | event_id; resource_id; material; amount; unit; device; meter_start; meter_end; charging_boundary; equipment_id; service_start; service_end; service_hours; consumers; asset_id; period_start; period_end; attribution_driver; included_service_burdens; no_use_evidence |Meter actual electricity including assigned charging; identify tool/lift operations and supported manual alternatives; record supplied consumables/water and access duration; document supplier boundary and shared-event attribution. Aggregation detail: Attribute shared totals once with documented physical evidence, then divide attributable event totals by accepted installations to obtain amounts per reference flow| kg; kWh; h | Every resource use or shared event | Whole installation including corrective work and cleanup | Same site/event/configuration stratum | per reference flow | Meter readings/calibration, logs, issue records, provider scope, allocation reconciliation and actual no-use observations |
| cp_handover | island_install | Accepted installation service | Inspection and signed acceptance | event_id; island_id; panel_model; dimensions; material; four_wire_route; suspension_part_ids; support_fixing_ids; support_acceptance; capacity_evidence; anchor_positions; retention; level; suspension_depth; layout; clearance; inspection_date; failed_checks; corrective_actions; acceptance_signature; accepted_count |Inspect against the exact product route and project layout; verify existing support acceptance, all four retained connections and supported adjustment; record actual geometry and corrective work before signed acceptance. Aggregation detail: Count only signed accepted islands; 1 item per reference flow| item; mm | Every island and corrective inspection | First installation through signed acceptance | Identified island and site | per reference flow | Signed checklist, approved layout/instructions, support acceptance and photographs |
| cp_waste | island_install | Packaging, rejected materials and captured residues | Weighing and destination manifest | event_id; waste_id; material; state; source_operation; reject_id; net_mass; destination; carrier; receiving_gate; transfer_id; treatment_scope |Separate and weigh actual packaging and discarded material/residue by material and destination; reconcile rejects against replacements and returns; identify actual liquid waste from any wet cleanup. Aggregation detail: Total attributable kg by waste identity/destination per reference flow; assign each waste transport/treatment burden once| kg | Every waste exit | Complete event and assigned waste handoff | Attributable site work only | per reference flow | Scale/tare evidence, waste receipts, carrier/destination records and stock/reject reconciliation |
| cp_air | island_install | Conditional direct release to air | Activity assessment, monitoring or applicable factor record | event_id; operation; material; substance; particle_or_fibre_fraction; receiving_compartment; method; measured_concentration; volume_or_activity; factor; factor_basis; captured_mass; release_mass; uncertainty; no_release_evidence; missing_evidence |Assess actual handling and anchor fitting; retain monitoring or applicable reviewed factor with substance/fraction and air compartment; separate captured waste. Record justified non-occurrence and unavailable data distinctly. Aggregation detail: Aggregate identified release amounts per reference flow with method and coverage; never substitute missing data with zero| kg | Every relevant operation or representative documented monitoring period | Whole relevant event including cleanup | Specified work location and receiving air compartment | per reference flow | Monitoring/factor applicability, activity records, uncertainty and capture/destination evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| event_normalization | all inventory rows | For each configuration stratum, attributable event amount divided by signed accepted installation count gives amount per reference flow; retain excluded/failed work ownership and do not divide by merely supplied panels. If accepted count is zero, no accepted-service dataset can be produced. | event quantities; accepted_count; cp_handover; relevant node protocol | Amounts per 1 item accepted installation |  |
| component_reconciliation | panel_input; suspension_components; usable_returns; installation_waste | Reconcile opening stock plus received items to installed components, usable returns, discarded components and closing stock on a consistent count/mass basis; retain replacement-event links and exact-part weighing evidence. Do not infer total assembly kg from nominal panel kg. | cp_components; cp_waste | Component balance and missing-record flags |  |
| shared_resources | installation_electricity; access_service; handling_consumables; cleaning_water | Allocate each shared recorded event total across actual consumers using the documented physical driver; reconcile shares with the total, preserve the service dataset energy boundary, then use event_normalization. | cp_resources; cp_handover | Attributed resource amounts and boundary reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_identity | all inventory rows | Retain glass-wool identity, finished single horizontal panel state, exact model and four-wire interfaces. Do not pool alternate suspension topologies or infer other manufacturers are equivalent. | Exact-product instructions, part records and installation photographs |
| support_gate | accepted_island_installation | Document prior structural fixing acceptance and capacity evidence plus signed retained-connection/geometry inspection; unknown support or failed retention prevents accepted output. | cp_handover; approved project layout; ecophon-ig402-2024 |
| coverage | all inventory rows | Cover the entire event and corrective work; disclose missing quantities, uncertain attribution, conditional non-use and upstream delivery/treatment boundaries. Unavailable direct-emission evidence stays explicit. | All node protocols, balances and missing-data register |
| representativeness | all inventory rows | Report site, dates, configuration, crew/access practice, metering coverage and measurement uncertainty. Pool only compatible declared configurations and retain source-event denominators. | Event register, cp_components, cp_resources, cp_handover |
| identity_resolution | all inventory rows | Before final TIDAS exchanges, verify each actual concrete product/waste/elementary identity and its property/unit chain. Conditional umbrella cards are recording requirements, not concrete exchange UUIDs. | Concrete exchange detail/support confirmation and destination evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| route_and_gate | accepted_island_installation | Reject an accepted-output record without matched four-wire horizontal single-panel configuration, accepted support evidence, all required retained connections and signed installation inspection. Room acoustic results cannot substitute for this gate. | `ecophon-ig402-2024` |
| inventory_completeness | island_install | Reconcile panels and suspension parts, usable returns, rejects and packaging; account for powered absorber-anchor fitting and actual access/charging/cleanup. Conditional zero-use must be observed and recorded, never inferred from pre-existing structural fixings. | `ecophon-ig402-2024` |
| reject_ownership | usable_returns; installation_waste | Every off-spec island has a linked correction or exit. Unresolved rejects do not enter accepted count; repeated installation efforts and replaced components remain attributable once. |  |
| quantity_and_ranges | all inventory rows | Confirm normalization to signed accepted service count, actual kg/count identities and matching units. No generic yield, installation time, assembly mass, energy or waste range is prescribed; record the evidence need and obtain route-specific reference data before using guardrails. |  |
| emission_and_identity | airborne_release; all inventory rows | Require actual material/substance/fraction, receiving destination/compartment and applicable measurement/factor evidence for each concrete exchange. Missing identity or activity data remain disclosed gaps; no broad particulate identity or unsupported zero is acceptable. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation-event data package for a declared four-wire horizontal glass-wool acoustic island configuration |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections after exchange identity resolution |
| allowed_use | Model the declared first-installation event for compatible panels, support interfaces and access practice using actual upstream and destination datasets |
| excluded_use | Structural-anchor construction, alternate mounting methods, full ceilings, added loads, normal use/maintenance/removal, universal room acoustic benefit or undocumented mass/area-equivalent installations |
| required_metadata | Configuration/parts, site/dates, support acceptance, declared gates, handover count, actual geometry, collection/calculation methods, upstream delivery and access-energy boundaries, reject/return/waste destinations |
| required_quality_disclosure | Data coverage and uncertainty, conditional non-use evidence, direct-release data gaps, unresolved identities, missing Range evidence and shared-resource attribution |
| update_trigger | Panel material/dimensions, suspension topology, support/acceptance requirements, installation practice, boundary/provider scope, source instructions or data coverage changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ecophon-ig402-2024 | handbook | Ecophon, Installation guide IG402 (2024.11), Solo Square M402; product page https://www.ecophon.com/en/products/free-hanging-units-and-baffles/solo/solo-square/ ; IG402 alternative 1 horizontal single-panel figures, pages 1, 3–8 | Four-wire route, panel anchor fitting, lift/support, adjustment, route-specific geometry and separation from other alternatives |
| ecophon-solo-square-spec | handbook | Ecophon Solo Square specification, page 1. https://www.ecophon.com/globalassets/media/pdf-and-documents/specification-texts/pdf/solo/solo-square.pdf | Finished glass-wool panel identity, installation-method dependence, retained hooks/anchors; laboratory absorption is a product descriptor, not room performance |
| un-cpc3-notes-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes (30 June 2025), subclass 54790, p. 298. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Acoustic panels/tiles applied to interior walls/ceilings within 54790; vibration insulation excluded |
