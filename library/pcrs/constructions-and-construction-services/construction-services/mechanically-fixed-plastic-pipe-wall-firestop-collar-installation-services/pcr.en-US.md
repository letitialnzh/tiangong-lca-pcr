---
pcr_id: pcr.mechanically-fixed-plastic-pipe-wall-firestop-collar-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mechanically fixed plastic-pipe wall firestop collar installation services

## 1. Scope and Applicability

This PCR covers first mechanical installation of factory-made steel-housed intumescent collars around one existing plastic-pipe wall penetration. The wall, pipe and any required annular seal have already been installed and accepted; their documented compatibility with the chosen firestop system is an entry condition. The installer checks that interface, cleans the collar contact area, marks and drills fixing holes, closes and latches the collars, fits hooks and approved mechanical fixings, inspects, identifies and hands over the completed stage. The service includes every wall face required by the actual system.

Exclude construction of the wall, pipe or core opening; application or repair of annular sealant; floor penetrations; metal pipes; powder-actuated fastening; and later building use. A failed prior seal or incompatible configuration stops this route and requires a separately bounded corrective service. Hilti CP 643N is a route example, not an exclusive supplier prescription. W-L-2078 (drawing revision 17 April 2018) demonstrates a specific gypsum-wall/plastic-pipe system with seal and fastening conditions; it does not establish that all wall systems or preseals are interchangeable. Retain the actual matching approval and current instructions applicable to the supplied collar and fixings. Their latest applicability must be checked for each job; an accessible historical drawing is not proof of current project approval.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.mechanically-fixed-plastic-pipe-wall-firestop-collar-installation-services |
| classification_refs | CPC 3.0 54659 — Other insulation services, n.e.c.; proposed narrower fireproofing-service scope |
| covered_products | Accepted mechanical collar-installation stage on a declared presealed plastic-pipe wall penetration |
| excluded_products | Annular wet sealing; wall or pipe construction; floor collars; metal pipes; field fire testing; unrelated insulation services |
| representative_product | Completed CP 643N-type collar fitting on both required faces of one approved existing wall penetration |
| production_route | Interface verification → cleaning → drilled mechanical attachment of collars/hooks/fixings → inspection and identification → acceptance |
| market_state | Completed installation service at signed stage handover; supplied components become part of the existing building interface |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One accepted complete mechanical collar-installation stage for one declared existing plastic-pipe wall penetration |
| How much | 1 item; the item is the entire penetration stage, not an individual collar or wall face |
| How well | The actual system configuration, required faces, collar sizes, hooks, approved fixings and prior seal condition satisfy documented inspection and signed acceptance |
| How long or cycle | One installation work order through closed corrective work and signed handover; no building service-life or generic fire-resistance duration is claimed |
| reference_flow_link | `accepted_collar_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete plastic-pipe wall firestop collar installation service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site and penetration ID; wall construction/thickness and approval; pipe polymer, grade, diameter, wall specification and closed/vented configuration; annular geometry and prior-seal product/depth/state/acceptance; matching approval identifier/revision and current installation instructions; collar manufacturer/model/size and required faces; hook/anchor/washer specification and arrangement; inspected completion date and handover gate; resource, transport and waste-service boundaries |

Different pipe sizes, wall configurations or approval systems are not automatically equivalent counted items. Form homogeneous declared lots or report separate configurations; disclose any aggregation weighting and its physical basis.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count one accepted complete penetration stage once, after all required faces pass inspection; failed or incomplete stages are not accepted count. |
| component_measure | collars; additional_fixings; material exits | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Where mass reconciliation is used for counted components, retain actual model-specific net unit mass or traceable weighing, excluding packaging; never apply an assumed steel density or generic collar mass. |
| energy_record | installation_electricity | Energy | kWh | Retain metered drilling, extraction and attributable charging electricity in the recorded unit. If a supplier service already includes it, disclose coverage and exclude the duplicate exchange; do not assume manual fitting is electricity-free. |
| resource_time | tool_access_service; logistics_service | Duration | h | Use actual bounded supplier-service hours with complete provider and included-burden metadata; do not convert time into count or invent equipment lifetime. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted existing wall and installed plastic pipe, with an already accepted annular seal where the selected system requires or permits the declared seal; available access and approved working conditions. Record actual configuration and seal custody. |
| starting_condition_role | Customer-owned building interface supplied for collar fitting, not a newly purchased wall/pipe/seal input. Its earlier construction burdens are outside this installation-stage dataset and must be added once by the wider model owner. |
| product_classification_scope | Narrow fireproofing installation service within CPC 3.0 54659; classification alone does not authorize any physical system. |
| recursive_input_rule | Do not use another complete collar-installation service as a recursive proxy for the present stage. A subcontracted operation must have an explicit nonoverlapping service boundary and ownership ledger. |
| upstream_dataset_requirement | Link actual collar package, separate fixings/consumables, electricity and bounded provider services to compatible upstream datasets; disclose packaging, hooks, transport and energy coverage and every unresolved identity. |
| disclosure | Declare installation-stage start/end, prior-interface acceptance evidence, actual approval/instruction versions, custody, included deliveries/returns/waste-service gates and supplier service coverage. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_interface | collar_install | Before installation, match actual wall, pipe, annular geometry and preseal to the selected tested/approved system and current supplied instructions. Record the seal acceptance and inspect it for damage; absence of compatibility evidence blocks output. | hilti-wl2078-2018 |
| b_route | collar_install | Include cleaning, drilling and dust control, collar latching, hooks/fixings, identification, inspection, corrective mechanical refitting and cleanup through signed handover. Keep wet sealing and damaged-interface repair outside this stage and reopen only after separately documented acceptance. | hilti-firestop-guide-2016 |
| b_components | collar_install | The component roles are factory steel/intumescent collars, hooks and anchor/washer sets, plus identification material where used. Supply records identify kit coverage; record extra components only where not supplied in the kit. Never replace the collar with raw steel or raw intumescent compound. | hilti-wl2078-2018 |
| b_services | collar_install | Include actual energy, cleaning supplies and bounded supplier-owned drilling/extraction/access services. The same drill, extractor, charger and access service may serve collar_install across initial and corrective visits and other jobs; enumerate the service periods and all consumers in cp_resources. The provider owns equipment production/maintenance allocation within the documented service. Record separately purchased energy or delivery only outside that coverage. |  |
| b_exits | collar_install | Record each physical packaging, dust, damaged part and cleaning-residue exit at its actual receiving gate; document the owner of later transport/treatment. A material is a usable return only with confirmed reusable condition and recipient/stock custody, otherwise classify the actual waste route. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Additional approved collar hooks and mechanical fixing sets (`additional_fixings`)

Process / prospective direction / type: `collar_install` / `inputs` / `product`.

Record only hooks, approved mechanical anchors/screws and washers not already supplied within the collar kit, plus actual replacements. Split each actual component identity and net mass when required; the selected system governs its suitability.

- Collection subject: Additional approved collar hooks and mechanical fixing sets
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual gross issue of each additional component/set, with recorded set composition and model, attributed to accepted stages.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `hilti-wl2078-2018`

Range evidence need: Obtain actual package bill of materials, required hook/fixing arrangement and extra/replacement issue records. Different pipe sizes and substrates require different compatible quantities; the W-L-2078 example cannot supply a generic quantity or loss Range.

#### Collection requirement: Actual collar-contact cleaning and identification supplies (`cleaning_supplies`)

Process / prospective direction / type: `collar_install` / `inputs` / `product`.

Conditional on actual use: record each cleaning product, cloth or water supply and identification material separately by exact product and mass. Cleaning the pipe contact zone and identifying the stage do not authorize new wet annular sealing.

- Collection subject: Actual collar-contact cleaning and identification supplies
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured gross use of each supplied cleaning/identification product, including corrections, per accepted stage; state non-use with records where applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `hilti-firestop-guide-2016`

Range evidence need: Collect actual cleaning method, supply identity, mass and variability from job records; no generic solvent, water or label consumption is prescribed. If the existing interface needs sealant repair, leave this route for separate corrective work.

#### Collection requirement: Bounded supplier-owned drilling, dust-extraction and access equipment service (`tool_access_service`)

Process / prospective direction / type: `collar_install` / `inputs` / `product`.

Record actual supplier-owned drill, extractor, charger and access equipment services by provider and bounded hire/service period. They may serve this node across initial and corrective visits and other work orders; provider production/maintenance burdens remain within the disclosed service scope.

- Collection subject: Bounded supplier-owned drilling, dust-extraction and access equipment service
- Flow property / unit: Duration / h
- Amount rule: Actual attributable hours of each bounded service for accepted-stage work, with task-time or direct-use attribution across all consumers; exclude separately recorded provider-included energy/transport.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Obtain billed scope, actual service hours, consumer job/visit ledger and observed variability. No tool lifetime, replacement frequency or standalone Duration support identity is inferred; a different own-capital route requires additional multi-period review.

#### Collection requirement: Actual bounded component-delivery and return transport service (`logistics_service`)

Process / prospective direction / type: `collar_install` / `inputs` / `product`.

Conditional on attributable actual movements not already included in another supplied service: document delivered collars/parts and usable returns with route, load, distance and receiving gate. Record each real provider service separately; onsite hand carrying within the fitting node is not a fictitious haulage exchange.

- Collection subject: Actual bounded component-delivery and return transport service
- Flow property / unit: Duration / h
- Amount rule: Recorded attributable hours of actual bounded delivery/return service, with route/load/distance metadata and complete sharing denominator, per accepted stage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Collect actual provider records and variability of travel/load. No default trip length, vehicle type, transport emission factor or counted-trip equivalence is prescribed; final service identity/property and unit must match the actual transport dataset.

#### Collection requirement: Actual usable surplus-component and reusable-packaging returns (`usable_returns`)

Process / prospective direction / type: `collar_install` / `outputs` / `product`.

Conditional: each unused collar/fixing or reusable packaging item is a separate product identity only when usable condition and receiving supplier/store custody are documented. This card describes exit roles, not a generic mixed-material product. Provider-owned tools return within their service contract and are not material coproducts here.

- Collection subject: Actual usable surplus-component and reusable-packaging returns
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured net mass of each usable returned identity at its receiving gate per accepted stage; keep gross inputs unchanged and record stock custody separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Obtain physical condition, actual component/packaging identity, receiving acceptance, mass and variability. Do not assume all packaging is reusable or give an avoided-production credit merely because it leaves the site.

#### Collection requirement: Actual discarded damaged collar or fixing components (`component_waste`)

Process / prospective direction / type: `collar_install` / `outputs` / `waste`.

Conditional: components damaged or rejected during fitting leave collar_install for the documented receiving waste route when not accepted as a usable return. Keep steel housing/intumescent composite and other materials separate where classification or destination differs; do not relabel a rejected whole installation as an accepted service.

- Collection subject: Actual discarded damaged collar or fixing components
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass of each discarded component stream, including corrective replacements, at the declared receiving gate per accepted stage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Obtain rejected-part records, material classification, actual receiver and measured variability. No standard scrap rate, automatic recycled-metal identity or recovery percentage is prescribed.

#### Collection requirement: Actual discarded collar and fixing packaging (`packaging_waste`)

Process / prospective direction / type: `collar_install` / `outputs` / `waste`.

Conditional: record actual cartons, plastic bags, inserts or other discarded packaging by material and destination. Incoming collar package coverage includes packaging supply burdens where declared; output mass does not create a second packaging input. Keep confirmed reusable packaging on usable_returns instead.

- Collection subject: Actual discarded collar and fixing packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed discarded packaging mass by actual material stream, reconciled against supply, reusable returns and stock change, per accepted stage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Obtain packaging composition, mass, recovery eligibility and actual receiving records. No default packaging ratio or recycling credit is supported by the collar product specification.

#### Collection requirement: Captured fixing-hole drilling debris and dust (`captured_debris`)

Process / prospective direction / type: `collar_install` / `outputs` / `waste`.

Record collected drilling solids and extractor contents by actual wall composition and receiving waste gate. This material is physically captured waste, not airborne emitted particulate; avoid duplicate recording of dust held in disposed bags or cleaning residues.

- Collection subject: Captured fixing-hole drilling debris and dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured captured debris mass attributable to all drilling/correction work per accepted stage, with tare and waste classification.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Obtain actual hole count/geometry, substrate composition, collected mass, capture records and variability. Do not invent wall density or a dust-generation/capture factor from nominal hole geometry.

#### Collection requirement: Actual spent cleaning materials and cleanup residues (`cleaning_waste`)

Process / prospective direction / type: `collar_install` / `outputs` / `waste`.

Conditional: used cloths, cleaning residues or collected wastewater leave to their actual receiving waste/treatment gate. Separate solid and liquid identities, including contamination; no wastewater is assumed for a dry-cleaning task.

- Collection subject: Actual spent cleaning materials and cleanup residues
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass of each actual cleaning-residue stream per accepted stage, with receiving gate and transport/treatment owner.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Collect cleaning method, actual residue composition, contaminated-material classification, mass and receiver. No generic water use, wastewater volume or hazardous status is inferred.

#### Collection requirement: Actual characterized installation releases to the environment (`air_releases`)

Process / prospective direction / type: `collar_install` / `outputs` / `elementary`.

Conditional on actual release: instantiate each uncollected drilling-particle fraction or cleaning-related substance with its exact composition, particle fraction and compartment. If other environmental releases occur, identify their actual receiving compartment separately. Captured dust and waste are excluded from emitted mass.

- Collection subject: Actual characterized installation releases to the environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured emitted mass or reviewed task-specific factor applied to measured activity for each characterized release, attributed to accepted stages; missing characterization remains a data gap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Obtain actual particle/substance identification, measured release or applicable emission factor, control/capture evidence and uncertainty. Product VOC content, low-emitting marketing, or absence of wet sealant cannot be converted into installation emitted mass.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| collar_install | Mechanical collar fitting, inspection and handover | required | Compatible accepted preseal and actual matching wall/pipe/collar/fixing system established | assembly integration of factory collar components with existing customer wall interface; rework/reject and shared infrastructure responsibilities | 1 item accepted complete penetration stage |

One bounded node owns all mechanical fitting and inspection. A loose latch, wrong hook/anchor arrangement or failed visual inspection returns to collar_install for correction and reinspection with all resource burdens retained. Damaged components leave by the actual return or waste card; incompatible or damaged prior seals block this route and leave for separate interface correction. No failed stage is an additional accepted item. Conditional cards apply only to recorded actual resources/exits; their absence requires documented non-use, not assumed zero quantities.

### Process: Mechanical collar fitting, inspection and handover (`collar_install`)

#### Inputs

##### Product flows

###### Factory steel-housed intumescent plastic-pipe firestop collars (`collars`)

Receive the actual finished collar model/size for every required wall face, including issue for failed attempts. Identify supplied hook/packaging coverage explicitly; steel and intumescent material are constituents, not alternative finished-collar identities.

- Selected flow: Factory steel-housed intumescent plastic-pipe firestop collars
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Gross issued collar count by exact model for the declared work-order lot, attributed to accepted complete stages; keep unused return and stock change separate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `hilti-firestop-guide-2016`

Range evidence need: Obtain actual collar count and variability by required face/configuration, including corrective issues. The guide describes two collars for its wall route, but that is a system-completeness rule rather than a universal loss or mass interval. Do not infer a numerical inventory Range from nominal diameter or expansion ratio.

###### Actual drilling, extraction and attributable charging electricity (`installation_electricity`)

Record mains or attributable battery charging electricity for fixing-hole drilling, dust extraction and cleanup. The actual supplier/site/geography and service coverage determine the final identity; service-included energy is not a second purchased exchange.

- Selected flow: Actual drilling, extraction and attributable charging electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered or traceably apportioned electricity outside provider-included coverage, including all corrective visits, per accepted stage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Obtain actual meter/charge-session records, operation duration, sharing denominator and uncertainty. Tool power rating alone is not consumed energy, and no exact Energy property chain or supplier electricity UUID is assumed.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete plastic-pipe wall firestop collar installation service (`accepted_collar_installation`)

This is the actual stage handover after all required faces are mechanically complete, the compatible prior seal remains undamaged, inspection/identification records are complete and corrective work is closed. No field fire test or universal rating is represented.

- Selected flow: Accepted complete plastic-pipe wall firestop collar installation service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `hilti-firestop-guide-2016`

Range evidence need: The exact one-item reference is a definition, not a yield Range. Collect actual accepted/rejected stage counts and configuration-specific variability; no source establishes a universal yield, fire duration or resource interval.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_rework | collar_install | Retain failed attempts, extra visits, replacement parts and cleanup in the responsible work-order burden. Only accepted complete stages form the denominator; unresolved rejects remain pending, with their incurred resources reported and not hidden by an inflated output count. |  |
| a_shared | tool_access_service; installation_electricity; logistics_service | Index shared drill/extractor/charger/access and transport services by provider, service period and every consuming job/visit, including collar_install initial and corrective visits. Attribute measured use directly where possible; otherwise use documented task time within that same complete service period. Reconcile shares to the full billed/metered resource and disclose other jobs. Count each service or energy component once. |  |
| a_returns | usable_returns; packaging_waste; component_waste | Use a gross issue and separate exit ledger: issued components/packaging = installed or consumed + usable returns + waste + stock change. Record actual returned product identity and destination separately; never both subtract it from gross inputs and give an avoided-production credit. Recovery or recycling credit requires a separately declared study method and receiving route, not a material label. |  |
| a_products | accepted_collar_installation | The accepted installation is the sole intended product. Usable surplus/packaging returns are custody transfers, not a second installation output; no automatic co-product split or future fire-performance credit is assigned. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | collar_install | accepted stage | work order and inspection | penetration_id; wall_config; pipe_config; annular_geometry; prior_seal_product; prior_seal_depth; prior_seal_acceptance; approval_id; approval_revision; current_instruction_version; required_faces; collar_model; hooks_anchors; initial_visit; correction_visits; accepted_stage_count; handover_date | Inspect and photograph every required face, reconcile the supplied component specification with the actual approval/current instructions, retain prior-seal acceptance and signed complete-stage handover. Report accepted homogeneous stages and pending/rejected jobs separately. | item | each penetration and each correction | first visit through signed handover | declared site and work-order lot | per reference flow | Approval/configuration comparison, current document applicability, all-face checklist, seal-condition record, dated acceptance and rejected-stage register |
| cp_materials | collar_install | collars, fixings and cleaning supplies | issue and stock records | part_id; package_coverage; gross_issued_count; net_unit_mass; weighed_mass; supplied_hooks; extra_fixings; cleaning_product; cleaning_mass; label_mass; stock_change; returned_id | Count actual issued collar models and separate extra parts; weigh consumables or use traceable net mass records. Retain kit contents and split cleaning/label inputs by actual identity. Keep gross issue separate from returns and stock change. Divide attributable lot quantities by accepted same-configuration stages after reconciliation. | item; kg | each issue/return and work-order close | all installation and correction visits | work-order store and point of use | per reference flow | Invoices, batch/model labels, calibrated scale or traceable net mass, physical count and custody reconciliation |
| cp_resources | collar_install | electricity, shared tool/access and logistics services | meter and provider service ledger | resource_id; provider; service_start; service_end; consumer_job_ids; visit_ids; billed_hours; task_hours; meter_kWh; charge_sessions; included_energy; included_transport; route; load; distance; receiving_gate | Read actual metered drilling/extraction/charging use and bounded supplier service hours. Identify all consumers and periods, allocate shared amounts using measured consumption or documented task-time shares and reconcile to total. Record actual delivery/return movements and provider coverage. Retain actual transport load/distance metadata for later service matching, without a generic trip factor. | kWh; h | each meter/service period and visit | supply to final correction and cleanup | all consumers of each declared service period | per reference flow | Meter calibration/readings, provider scope, time sheets, full denominator, shares sum to one and no duplicate included energy/transport |
| cp_exits | collar_install | returns and waste exits | weighing and receiving records | exit_id; originating_visit; material_identity; condition; mass; destination; recipient; stock_receipt; waste_classification; transport_owner; treatment_owner; transfer_date | Weigh and separate usable surplus or packaging returns, damaged components, discarded packaging, captured drilling debris and cleaning residues by actual material and receiving gate. Reconcile issued stock, installed materials and exits; verify usable returns with receiving custody. Allocate only the declared work-order share to accepted stages; retain pending/reject burdens. | kg | each exit and work-order close | all installation/correction/cleanup visits | declared installation and receiving gates | per reference flow | Calibrated weights, transfer notes, recipient acceptance, material/waste classification and mass reconciliation |
| cp_releases | collar_install | actual elementary air or other environmental release | measurement or reviewed emission calculation | substance_or_particle; composition; size_fraction; compartment; measured_mass; sampling_period; activity_record; factor_reference; capture_efficiency; uncertainty; controls | Characterize actual uncollected drilling particles and any cleaning-related release separately by substance/particle identity and receiving compartment, with measured mass or a reviewed task-specific emission calculation. Retain control and capture evidence. Captured debris is waste, not emitted mass; VOC content is not an emission factor. Absence of measurement/factor is a data gap, not zero. | kg | each relevant operation or representative measured period | all drilling, cleaning and corrections | actual foreground operation and environment boundary | per reference flow | Sampling/analysis, reviewed factor applicability, particle/chemical identity, measured activity, uncertainty and non-duplication with captured waste |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_attribution | all inventory rows | For each homogeneous accepted-stage lot, reconcile the attributable gross resource or exit amount including corrective work, then divide by its accepted complete-stage count. Report unresolved jobs and associated burdens separately; do not mix configurations without declared equivalence. | cp_acceptance; cp_materials; cp_resources; cp_exits; cp_releases | inventory per reference flow |  |
| stock_balance | collars; additional_fixings; usable_returns; component_waste; packaging_waste | Reconcile gross issues with installed/consumed quantity, usable returns, waste and stock change for each material and compatible unit. Use measured net unit mass when reconciling count and kg; packaging is separate from component net mass. | cp_materials; cp_exits | material-specific reconciliation |  |
| shared_share | tool_access_service; installation_electricity; logistics_service | Use measured task resource where available; otherwise allocate the bounded shared service by documented task time divided by total consumer task time within that service period. Reconcile every share to the actual billed/metered amount and provider coverage. | cp_resources | attributable service/resource amount |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_configuration | reference product | Keep actual approvals and current chosen instructions, material configurations and installed faces traceable. Product family marketing and historic rating maxima are insufficient for job acceptance. | cp_acceptance and source applicability review |
| q_completeness | all inventory rows | Record drilling, extraction/charging, cleaning, shared access, logistics, packaging and corrective work; distinguish documented non-use, provider-included coverage and missing data. | cp_materials; cp_resources; cp_exits |
| q_ranges | all inventory rows | Collect observed variability and uncertainty for the actual configuration. No manufacturer expansion ratio, thermal limit, rating duration or VOC content supplies an installation inventory Range. | Per-card Range evidence needs and actual lot records |
| q_identities | all inventory rows | Resolve every actual product/waste/elementary exchange and its support property/unit chain before final TIDAS dataset emission; split conditional aggregate roles into concrete identities. | Verified detail and support evidence; explicit unresolved manifest entries |
| q_releases | air_releases | Distinguish released particles/substances from captured dust and disposed wipes; never claim generic zero emissions from absence of wet sealing. | cp_releases and cp_exits |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_entry | collar_install | Reject reference completion when actual wall/pipe/seal/collar/fixing configuration lacks a matching approval and current applicable instructions, or prior seal compatibility/condition is unconfirmed. | hilti-wl2078-2018 |
| v_handover | accepted_collar_installation | Verify required faces, latched collars, hook/fastener arrangement, undamaged prior seal, identification and signed inspection. Count one whole penetration stage once; a generic fire-hour promise is not an acceptance test. | hilti-firestop-guide-2016 |
| v_rework | collar_install | Trace each failure to mechanical correction and reinspection, confirmed product return, classified waste exit or separately bounded interface repair; never count unresolved failures as accepted output. |  |
| v_shared | tool_access_service; installation_electricity; logistics_service | Check all consuming jobs/periods and resource-share totals; reject duplicate equipment/energy/transport burdens already included in the supplier service. No inferred equipment lifetime is permitted. |  |
| v_materials | collars; additional_fixings; usable_returns; component_waste; packaging_waste; captured_debris; cleaning_waste | Reconcile component/packaging coverage and material exits with measured units and custody; split material-specific exits and preserve burden ownership at receiving gates. |  |
| v_emissions | air_releases | Require actual identified release and measurement or reviewed task-specific factor; product VOC content, unspecified dust or silent zero is not an elementary-flow inventory. |  |
| v_bindings | all inventory rows | Check concrete flow identity, type, role, gate, property and unit before dataset publication. Candidate PCR support gaps do not authorize near-match UUIDs or unverified final exchanges. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation data package; a completed qualified dataset may be secondary_dataset or background_dataset for the same service boundary |
| downstream_use | Process projection for the complete collar-installation stage and lifecyclemodel integration into a declared building system |
| allowed_use | Same declared wall/pipe/collar/approval configuration and accepted stage gate, with transparent upstream resource and downstream waste ownership |
| excluded_use | Standalone whole-building fire performance; sealant application; floor systems; automatic equivalence across pipe sizes, approvals or supplied kit coverage |
| required_metadata | All reference qualifiers, lot size, acceptance dates, actual approval/current-instruction revisions, supplier service scopes, resource periods/consumers, return and waste gates |
| required_quality_disclosure | Observed variability, measurement uncertainty, actual releases, pending/reject burdens, unresolved identities/support chains, exclusions and provider-included burdens |
| update_trigger | Change in approved system, collar or fixing model, wall/pipe/seal configuration, instructions, installation route, supplier service coverage, measured resources or receiving waste/return gate |


## 11. Data Sources

| source_id | type | reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-construction | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, p.295; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context: fireproofing within other insulation services, n.e.c.; not a system approval |
| hilti-firestop-guide-2016 | handbook | Hilti, Firestop Guide 2016, PDF pp.46–47 (printed pp.44–45), CP 643N; https://files-ask.hilti.com/original/om/omkpt2kobb.pdf | Factory collar route, two wall faces, cleaning/latching/hooks/mechanical fixing and system-specific instructions; no universal quantitative inventory |
| hilti-wl2078-2018 | handbook | Hilti UL System W-L-2078, drawing WL2078q.04172018, 17 April 2018, sheets 1–2; https://files-ask.hilti.com/original/wv/wv1qztcvuh.pdf | Specific gypsum-wall/plastic-pipe example showing seal and fixing compatibility conditions; actual job approval/current instruction applicability still required |
| hilti-cp643n-product | handbook | Hilti USA, CP 643 N firestop collars, product page; https://www.hilti.com/c/CLS_FIRESTOP_PROTECTION_7131/CLS_FIRESTOP_COLLARS_WRAPS_BANDAGES_7131/r373 | Current family identity and retrofit application context only; product marketing does not determine installation emissions or performance |
