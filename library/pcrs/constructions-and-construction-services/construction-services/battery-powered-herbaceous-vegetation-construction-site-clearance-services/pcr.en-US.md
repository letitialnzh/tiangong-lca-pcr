---
pcr_id: pcr.battery-powered-herbaceous-vegetation-construction-site-clearance-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Battery-powered herbaceous vegetation construction-site clearance services

## 1. Scope and Applicability

This PCR covers first preconstruction above-ground cutting of grass and nonwoody herbaceous vegetation compatible with the actual approved battery electric handheld grass blade or trimmer, followed by collection and declared residual receiver transfer. The actual site contract, protected limits, utilities/access and erosion-control responsibility must permit this route. The cited roadwork specification supplies boundary distinctions; its broad clearing-and-grubbing scope and numeric stump rules are not grass-cutting requirements.

Exclude recurring landscape mowing, crop harvesting, woody brush/trees, stump/root grubbing, soil stripping/excavation/grading/drainage/blasting, onsite chipping/burning/herbicide, vegetation cultivation, receiver treatment operation and claims of saleable biomass co-production. A proposed beneficial biomass product requires an explicit additional coproduct/boundary review before this method is used for that claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.battery-powered-herbaceous-vegetation-construction-site-clearance-services |
| classification_refs | CPC 3.0 54320; proposed narrower relation |
| covered_products | Accepted first battery electric above-ground low-vegetation construction-site clearance with collection and residual custody transfer |
| excluded_products | Recurring mowing; crop harvest; woody clearance/grubbing; earthworks; biological production; biomass coproduct production |
| representative_product | Accepted battery-powered herbaceous vegetation construction-site clearance service |
| production_route | Approved polygon and protection interfaces → compatible battery cutting → collection/staging → declared residual receiver transfer → closed defects and signed clearance-stage acceptance |
| market_state | Accepted clearance-only service; roots/soil retained; subsequent construction and receiver treatment remain separately declared |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted construction-site grass/herbaceous above-ground clearance service |
| How much | 1 m2 of actual accepted horizontal clearing polygon, counted once |
| How well | Actual specified cut height and collection state; protected vegetation intact or remedied; receiver custody and defects closed; no excavation-ready ground claim |
| How long or cycle | One initial clearance cycle through rework, collection, protection termination and receiver transfer; asset burdens additionally span explicit manufacture, use/maintenance/replacement and terminal-treatment periods across all consumer jobs |
| reference_flow_link | `accepted_clearance` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted battery-powered herbaceous vegetation construction-site clearance service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | approved and accepted polygon ids; survey basis; exclusions/retained islands; vegetation/species/density/moisture; slope/access; compatible cutter/attachment/battery/charger; actual specified cut height; collection completeness; receiver and custody status; protection/erosion interfaces; date and acceptance authority |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_area | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Use cp_acceptance to establish actual accepted horizontal polygon area. The reference output amount is 1 m2; aggregate lot burdens are attributed to that same area. Retain surveying uncertainty and exclude duplicate rework passes from the denominator. |
| wet_residual_mass | biomass_residual | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net wet mass at actual custody transfer; record moisture method/date separately. Do not substitute dry mass or infer a universal area-to-mass conversion. |
| charging_boundary | charging_electricity | Energy | kWh | Retain charger-supply electricity including attributable losses/standby; battery nameplate capacity is not measured electricity. Exact Energy support must be resolved before concrete exchange construction. |
| freight_boundary | freight_services | Freight transport | t*km | Keep actual payload mass and distance separate and preserve provider/empty-return coverage. Exact transport support must be verified for the chosen concrete exchange. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing approved construction-site low vegetation; no root/soil removal; access, utility and protected-vegetation interfaces established |
| starting_condition_role | Environmental starting stock and site condition; not purchased crop input and no invented cultivation burden |
| product_classification_scope | Only this narrower clearance service within CPC 54320; no expansion from classification alone |
| recursive_input_rule | An outsourced same-category clearance input carries its upstream service dataset and explicit area/work ids; remove those activities from own foreground records and count accepted polygon once. Do not recurse through site ownership or vegetation stock. |
| upstream_dataset_requirement | Supplier datasets for actual electricity, assets, materials and freight with technology, geography, period and included-burden boundaries; downstream residual treatment coverage declared separately |
| disclosure | Actual cut/collection contract, source vegetation and residual status; work ids and rejected areas; assets/consumers/periods; supplier coverage; protection maintenance/termination ownership; gaps and uncertainty |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| limits_gate | clearance | Start only inside approved clearing limits with actual vegetation protection and erosion/access/utility responsibility recorded; remedy clearance-caused damage with its actual burdens. The clearance gate cannot certify completion of all erosion controls. | fhwa-fp24-201 |
| cut_collect_gate | clearance | Keep cutting and collection within one independent source-removal responsibility ending in accepted polygon and residual custody transfer. Later grubbing, earthwork and receiver treatment have distinct boundaries. | fhwa-fp24-201; husqvarna-520irx-2024 |
| complete_assets | clearance | Include actual charging, cutter/battery/charger/tools, logistics, materials, rejected work and protection maintenance/removal attributable to the complete clearance cycle. Record every asset consumer and service period, including other jobs; supplier coverage prevents duplicate burdens. Enumerate manufacture/provision, each use/maintenance/replacement reporting period and terminal-treatment phase. Link every asset input/event to its actual period and the lot output to its clearance acceptance period; missing replacement/termination responsibility blocks final burden finalization. |  |
| no_crop_credit | clearance | Existing vegetation carries no invented cultivation inputs, avoided-production credit, sequestration claim or saleable coproduct assumption. Report actual wet residual status; proposed useful-product claims require separate review. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Attributed reusable cutter battery charger and collection-tool provision (`reusable_asset_provision`)

Process / prospective direction / type: `clearance` / `inputs` / `product`.

Instantiate a separate concrete exchange for each asset and model production, maintenance and terminal treatment across its complete evidenced service life. This umbrella does not merge heterogeneous equipment into one item.

Range evidence need: Need asset-specific lifetime service, replacement/repair records and allocation uncertainty; no default life or battery-cycle count.

- Collection subject: Attributed reusable cutter battery charger and collection-tool provision
- Flow property / unit: Number of items / item
- Amount rule: Attribute each actual asset provision using documented life-service consumed by this lot; include all clearance, collection, rework and other-job consumers exactly once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `husqvarna-520irx-2024`

#### Collection requirement: Actual cutting attachment and cleanup consumables (`cutting_consumables`)

Process / prospective direction / type: `clearance` / `inputs` / `product`.

Instantiate documented line, blade replacement or sharpening consumables and dry cleanup materials separately. Intact reusable blade belongs in asset provision; never invent line use for a blade route.

Range evidence need: Need actual material identity, issue/use/wear measurements and uncertainty; no general blade wear or line-loss percentage.

- Collection subject: Actual cutting attachment and cleanup consumables
- Flow property / unit: Mass / kg
- Amount rule: Record actual gross lot-attributable material boundary receipts and opening-stock issues without netting genuine outward returns. Record unused outward returns as their own gross output with matching burden; retained closing stock is a separate balance with carried-forward burden, not an output. Reconcile actual consumption and disposal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `husqvarna-520irx-2024`

#### Collection requirement: Actual clearance-attributable protection and containment materials (`protection_consumables`)

Process / prospective direction / type: `clearance` / `inputs` / `product`.

Include actual temporary protection, collection bags and protective/cleanup consumables attributable to clearance, including maintenance and removal responsibilities. Actual clearance-caused damage-remedy materials are included here when measured directly; provider-included material is covered by damage_remedy_service and must not be duplicated. Long-lived protection is an asset, and supplier-included materials receive no second upstream burden.

Range evidence need: Need project-specific protected-boundary plan, material quantities, reuse/termination evidence and uncertainty; no standard kg per m2.

- Collection subject: Actual clearance-attributable protection and containment materials
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual lot-attributable receipts and opening-stock issues by material without netting real outward returns; disclose supplier coverage. Track protection and damage-remedy materials, maintenance and termination. Retained closing stock carries future burden as a balance, never an output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-fp24-201`

#### Collection requirement: Actual freight transport of equipment materials and residuals (`freight_services`)

Process / prospective direction / type: `clearance` / `inputs` / `product`.

Record provider, vehicle, actual payload and route for equipment, deliveries and residual receiver transfer; identify empty-return responsibility and provider coverage. Provider fuel and vehicle burdens are included once; separately measured own-fleet operation requires a documented boundary replacing that provider share.

Range evidence need: Need actual payload/route/provider and uncertainty plus exact freight property/unit support; do not invent distance, fill factor or fuel rate.

- Collection subject: Actual freight transport of equipment materials and residuals
- Flow property / unit: Freight transport / t*km
- Amount rule: Use actual leg payload mass and actual distance for each concrete freight exchange; attribute shared load and return travel with provider-specific evidence, then divide lot-attributable freight by accepted area.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_logistics`
- Sources: `fhwa-fp24-201`

#### Collection requirement: Actual clearance-caused damage-remedy provider service (`damage_remedy_service`)

Process / prospective direction / type: `clearance` / `inputs` / `product`.

Include an actual accepted remedial job for clearance-caused damage to protected vegetation/site interfaces, with incident id, provider, remedy scope, materials, equipment, transport and final acceptance. If separate foreground materials/energy/freight are recorded, remove their overlapping provider coverage; do not assume remedy burdens absent.

Range evidence need: Need actual incident-specific remedy job count, provider inventory/coverage and uncertainty; no universal damage rate or remedy intensity.

- Collection subject: Actual clearance-caused damage-remedy provider service
- Flow property / unit: Number of items / item
- Amount rule: Record actual complete accepted remedy jobs by incident and provider scope; qualify each concrete counted job separately and attribute its covered burden to the causing clearance lot. Only a documented no-damage inspection establishes zero jobs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_remedy`
- Sources: `fhwa-fp24-201`

#### Collection requirement: Actual unused material returned outside foreground custody (`unused_material_returns`)

Process / prospective direction / type: `clearance` / `outputs` / `product`.

Instantiate only real supplier or owner return transfers of unused consumables with matching inbound identity and burden. Retained site stock remains a balance, never an outward product exchange.

Range evidence need: Need traceable gross issue/receipt and signed outward return weights; no assumed return fraction.

- Collection subject: Actual unused material returned outside foreground custody
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual outward return mass by material; do not net the input and also export the same return burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

#### Collection requirement: Cut grass and compatible nonwoody herbaceous residual at receiver handover (`biomass_residual`)

Process / prospective direction / type: `clearance` / `outputs` / `waste`.

Record wet collected vegetation as actual waste/residual transfer with receiving facility, custody ticket, moisture state and contaminant description. Existing vegetation is environmental starting stock, not an upstream cultivated crop. Receiver treatment operation is a downstream dataset with explicit responsibility, not this clearance service.

Range evidence need: Need actual wet weights, representative moisture measurements, contamination and uncertainty; no universal yield/density/moisture or carbon credit.

- Collection subject: Cut grass and compatible nonwoody herbaceous residual at receiver handover
- Flow property / unit: Mass / kg
- Amount rule: Weigh actual collected wet residual at transfer, net of container tare; reconcile staging opening/closing stock and every dispatch. Do not derive mass from cleared area without site sampling evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `fhwa-fp24-201`; `husqvarna-520irx-2024`

#### Collection requirement: Actual worn consumables packaging and cleanup waste (`other_residuals`)

Process / prospective direction / type: `clearance` / `outputs` / `waste`.

Separate each actual waste by material, hazardous status and receiving route; keep rejected attachment and packaging distinct from vegetation. Asset end-of-life already included in asset provision is not counted again here.

Range evidence need: Need material-specific weighed waste and receiver evidence; do not assign blanket packaging or reject rate.

- Collection subject: Actual worn consumables packaging and cleanup waste
- Flow property / unit: Mass / kg
- Amount rule: Measure net actual waste transfer masses and reconcile supplier-included packaging ownership, actual returns and retained reusable stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `husqvarna-520irx-2024`

#### Collection requirement: Actual characterized substance release to declared environment (`characterized_releases`)

Process / prospective direction / type: `clearance` / `outputs` / `elementary`.

Create concrete exchanges only for measured or justified characterized substances, particle size where relevant and actual receiving medium. No direct cutter combustion, methane, aggregate VOC or generic dust is presumed from an electric route; unmeasured material wear remains a quantified data gap rather than automatic air emission.

Range evidence need: Need actual substance/species, medium, monitoring or reviewed factor and uncertainty; no source-backed generic emission range established.

- Collection subject: Actual characterized substance release to declared environment
- Flow property / unit: Mass / kg
- Amount rule: Use actual monitored substance mass or a documented applicable substance-specific method, including uncertainty and destination; zero requires evidence of absence within detection/coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| clearance | Approved cutting collection and residual handover | required | Within this declared first construction clearance route | Independent foreground removal and acceptance; failed cut/collection returns to this same node with all repeat burdens; residual/consumable exits retain custody | 1 m2 accepted horizontal polygon; repeat passes do not increase area |


### Process: Approved cutting collection and residual handover (`clearance`)

#### Inputs

##### Product flows

###### Actual charging electricity delivered to the charger (`charging_electricity`)

Meter charger supply including charge losses and attributable standby for this lot; retain geography, date, supplier and meter boundary. Do not infer grid energy from rated battery capacity.

Range evidence need: Need lot charging-meter uncertainty and observed kWh per accepted m2 by vegetation/moisture/attachment; source supplies no transferable intensity.

- Selected flow: Actual charging electricity delivered to the charger
- Flow property / unit: Energy / kWh
- Amount rule: Attributed actual meter electricity including rework, divided by accepted polygon area.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `husqvarna-520irx-2024`



##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted battery-powered herbaceous vegetation construction-site clearance service (`accepted_clearance`)

The accepted service is first above-ground cutting and collection within an approved construction polygon with residual receiver custody closed. Roots and soil remain; this output does not certify bare earth or excavation readiness.

Range decision: 1 m2 is the exact reference definition, not a field productivity range. Need surveyed polygon uncertainty, overlap/exclusion reconciliation and actual signed acceptance under cp_acceptance.

- Selected flow: Accepted battery-powered herbaceous vegetation construction-site clearance service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc3-2025`; `fhwa-fp24-201`



##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| service_burden | clearance | Attribute all actual first-cycle burdens, including failed cut height, incomplete collection, damage repair and recutting, to accepted service. Unaccepted areas are tracked as work-in-progress/rejects and never included in the accepted denominator; unresolved defects block their output. |  |
| residual_status | biomass_residual | Cut vegetation is residual, with measured custody and actual destination. Do not allocate a coproduct credit or substitute fuel/feed/fertilizer by assumption. A useful-product claim requires separate explicit review. |  |
| asset_sharing | reusable_asset_provision | For each cutter, battery, charger, collection tool and reusable protection asset, record manufacture, maintenance, replacement and end-of-life boundary and evidenced complete-life service. Allocate actual lot usage among cutting, collection and rework and all other consumer jobs/periods with one ledger owner; preserve unused future burden and quantify uncertainty. For each asset retain manufacture/provision, use/maintenance/replacement periods, terminal treatment and all consumer-job links in one phase/period ledger. Apply evidenced life-service shares to each period-specific burden and this clearance output; carry unconsumed future burden forward, disclose replacement/termination assumptions and uncertainty, and block finalization if their ownership is unknown. No arbitrary fixed life or equal job split. Supplier rental provision and separate asset production cannot cover the same burden twice. |  |
| stock_returns | cutting_consumables; protection_consumables; unused_material_returns; other_residuals | Reconcile gross opening stock plus receipts with consumption, real outward returns, waste and retained closing stock by material and custody. Retained stock carries declared future burden and is no output. Use gross actual lot-attributable boundary input, with real outward unused-product returns recorded gross and carrying only their traceable matching input burden. Do not net a return out of the input. Retained closing stock is a nonexchange balance with carried-forward burden, allocated outside this completed service; reconcile gross inputs, current use/waste, returns and closing stock without creating a stock output. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | clearance | accepted service | survey and signed handover | lot_id; polygon_id; approved_boundary; exclusions; retained_islands; accepted_area_m2; survey_uncertainty; vegetation_species; density; moisture; slope; attachment; cut_height_spec; collection_state; defect_id; receiver_ticket; acceptance_time | Survey actual horizontal cleared polygon with traceable coordinate method; overlay approved limits, plan exclusions and retained islands. Retain actual quality specification, before/after evidence, rework pass ids and signed accepted subareas. Use same accepted area for each burden allocation; carry unaccepted area separately. | m2 | each accepted polygon and correction | complete initial clearance through custody closure | actual approved site polygon | per reference flow | Survey calibration/coordinate reference, polygon union without overlap, acceptance authority and closed-defect records |
| cp_energy | clearance | charging_electricity | meter and charging ledger | lot_id; charger_id; meter_id; start_kwh; end_kwh; charge_time; standby_kwh; battery_id; consumer_job; accepted_area_m2 | Meter charger-supply electricity by event; allocate shared charging to identified battery/lot with actual energy evidence. Include attributable charge losses, standby and rework; reconcile meter total across jobs and divide attributed lot energy by accepted area from cp_acceptance. | kWh | each charge and lot closure | all actual charging for first cycle | site or offsite charger tied to lot | per reference flow | Meter accuracy, provider/geography/date and reconciliation; no capacity-only inference |
| cp_assets | clearance | reusable_asset_provision | asset life-service ledger | asset_id; manufacturer; model; production_boundary; provision_count; manufacture_period; use_period; maintenance_period; replacement_period; terminal_period; maintenance; replacement; terminal_treatment; service_life_basis; usage_lot; consumer_job; period; accepted_area_m2 | Record each concrete asset separately. Document complete-life provision and maintenance/end-of-life responsibilities, observed usage on cutting/collection/rework and all other jobs/periods. Attribute each asset burden using evidenced consumed service share and normalize lot share by accepted area; retain unconsumed future balance and uncertainty. | item | each use plus maintenance/retirement update | manufacture/provision; each use/maintenance/replacement reporting period; terminal treatment; actual clearance acceptance cycle | all consumers of each asset | per reference flow | Asset ids, meter/hour/cycle evidence as driver without inventing Duration UUID; rental included coverage and sum of shares/burdens reconciled |
| cp_material | clearance | materials returns and other waste | custody stock and scales | lot_id; material_id; supplier_coverage; opening_stock; gross_receipts; gross_issues; consumed_mass; outward_return; closing_stock; waste_mass; tare; receiver; uncertainty; accepted_area_m2 | Weigh and reconcile each actual material from gross receipt/issue through consumption, return, closing stock and waste. Track consumables, protection, bags and packaging separately; link outward custody tickets and one burden owner. Record gross actual lot-attributable material boundary input without netting outward returns. Match each real gross return output to its input identity and traceable burden; retain closing stock as a nonexchange balance with burden carried to future work. Attribute current-service consumed and waste responsibility without double credit, and divide each current lot exchange by accepted area. | kg | each custody/issue event and lot closure | complete cycle including protection maintenance/termination | lot and real supplier/receiver interfaces | per reference flow | Calibrated scale/tare, documented stock adjustment, signed return/waste tickets and no duplicate provider coverage |
| cp_logistics | clearance | freight_services | actual trip and provider record | trip_id; lot_id; provider; vehicle; payload_kg; route_km; origin; destination; empty_return; shared_load; included_fuel; accepted_area_m2 | Collect actual payload and distance per leg; use tonne-kilometres for each actual loaded movement with traceable kg-to-tonne conversion. Document empty-return and shared-load attribution from provider operation, assign one owner and avoid duplicate provider fuel/capital burdens; divide lot-attributed service by accepted area. | t*km | each trip leg | all equipment/material/residual transport for cycle | actual origin-site-receiver routes | per reference flow | Payload/route tickets, coverage of empty returns, allocation evidence and exact future transport support verification |
| cp_residual | clearance | biomass_residual | weighing moisture and custody | lot_id; transfer_id; wet_gross_kg; container_tare_kg; wet_net_kg; moisture_method; moisture_date; contaminant; staging_opening; staging_closing; receiver; product_or_waste_status; accepted_area_m2 | Weigh net wet biomass dispatched to actual declared receiver and collect representative moisture evidence. Reconcile all collections and staging balances to custody tickets, including recut material and any residual left on site contrary to specification; receiver rejection returns to clearance responsibility until resolved. Divide attributable net transfer by accepted area. | kg | each load and lot closure | cutting through accepted receiver custody | site staging and actual receiver gate | per reference flow | Scale/tare, moisture sampling coverage, signed status/custody, mass-balance uncertainty and rejection closure |
| cp_releases | clearance | characterized_releases | substance monitoring or applicable method | lot_id; substance; particle_size; medium; measured_mass; detection_limit; method; applicability; uncertainty; accepted_area_m2 | Identify actual substance and receiving medium before exchange selection; retain monitoring coverage, detection limits or reviewed applicable factor activity and uncertainty. Separate waste from environmental release, include all repeated work and normalize attributable substance mass by accepted area; do not invent combustion emissions. | kg | each monitored event or reviewed assessment | whole first cycle | actual release location and medium | per reference flow | Traceable substance/species characterization, factor applicability and reported unmeasured coverage gaps |
| cp_remedy | clearance | damage_remedy_service | incident remedy provider and acceptance | lot_id; incident_id; provider; remedy_scope; job_count; included_materials; included_energy; included_assets; included_transport; acceptance_date; accepted_area_m2 | Record each actual clearance-caused damage incident and accepted remedy job with provider primary inventory and included services/materials. Attribute to the causing lot regardless of later remedy date; link period and accepted remedy evidence. Reconcile with directly recorded protection materials, charging, assets and freight to remove overlaps; divide actual job burden by accepted clearance area. | item | each incident and signed remedy closure | causing clearance period through actual remedy completion | actual affected vegetation/site interface and provider | per reference flow | No-damage inspection or complete incident/remedy ledger; provider coverage and closed acceptance without duplicate direct input |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| area_attribution | all inventory rows | Attribute each measured complete-lot exchange to its owning clearance lot and divide by the same accepted horizontal polygon area from cp_acceptance; retain original numerator unit. Accepted output remains 1 m2. Rework adds burden and never adds denominator area. | cp_acceptance; node-specific collection protocol | inventory per 1 m2 accepted service |  |
| stock_reconcile | cutting_consumables; protection_consumables; unused_material_returns; other_residuals | For each material and custody scope reconcile opening stock plus gross receipts against consumption plus real outward returns plus closing stock plus waste; document any overlap between measured consumption and downstream waste before applying the balance. Gross issues are an internal ledger, not a second boundary input. Use gross boundary receipts/opening-stock issues as input and genuine gross outward return as product output without input netting; closing stock remains a nonexchange balance and its burden is carried forward. | cp_material | reconciled quantity and carried-forward stock burden |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_gate | all rows | Verify concrete identity, state, provider, flow type, property/unit and destination from actual records before final TIDAS exchange binding. Umbrellas instantiate zero or multiple specific exchanges; unknown identities and support remain explicit gaps. | Supplier data, identity detail and property/unit-group evidence |
| same_lot_basis | all rows | Keep polygon, date, actual vegetation and work ids identical across numerator and denominator; rejected area and later maintenance remain separately recorded. Report survey/meter/weighing and allocation uncertainty and missing coverage. | cp_acceptance and complete node ledgers |
| custody_quality | biomass_residual; other_residuals | Document actual receiver status and downstream treatment responsibility. No estimated wet-to-dry/area-to-mass factor or unverified product-versus-waste claim. Resolve receiver rejection and remaining onsite residual before acceptance. | cp_residual; cp_material |
| source_limits | clearance | Confirm actual project contract and current applicable equipment instructions; neither FHWA roadwork scope nor manufacturer example supplies universal cut height, productivity, emission or wear factors. | fhwa-fp24-201; fhwa-fp24-errata-20260915; husqvarna-520irx-2024 |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| accepted_gate_check | accepted_clearance | Require approved compatible route, specified cut/collection state, closed damage/recut defects, declared residual custody and signed accepted polygon; reject woody/grubbing/earthwork or useful-biomass claims outside this scope. | fhwa-fp24-201; husqvarna-520irx-2024 |
| area_check | all rows | Confirm 1 m2 reference output and same accepted horizontal polygon denominator; no duplicate overlap, retained-island substitution or rework pass area. Missing accepted area/quality makes the lot incomplete. |  |
| material_custody_check | all rows | Reconcile stocks, real returns, waste and biomass receiver tickets with uncertainty; retained stock cannot be an exported product and gross-net return conventions cannot both credit the same quantity. |  |
| asset_coverage_check | reusable_asset_provision; charging_electricity; freight_services | Require asset consumers/periods and complete production/maintenance/end-of-life responsibility, electricity supply meter and actual freight/provider boundary. Check shares and included burdens once; no invented life, capacity-derived charging or default transport factors. Check manufacture/use/maintenance/replacement/termination period links and period-specific shares; unresolved replacement or termination ownership blocks final burden finalization. |  |
| identity_release_check | all rows | Before exchange construction verify each actual UUID and support, resolve actual product-versus-waste/substance-medium status, and report remaining Range/identity/support evidence gaps. No near-match reference service, crop harvest or unspecified electricity identity is acceptable. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground clearance-service data package |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections |
| allowed_use | Same qualified initial above-ground battery clearance route with matching vegetation/site/acceptance and residual handover boundaries |
| excluded_use | Recurring mowing, crop harvest, woody/root clearance, earthwork, complete construction readiness or saleable biomass credit |
| required_metadata | Actual polygon/accepted area, vegetation/site/slope/moisture, dates, cutter/attachment/battery/charger, quality specification, protected interfaces, residual status/receiver, supplier and asset scope |
| required_quality_disclosure | Measured coverage, uncertainty, rework/stock/custody balance, asset-life allocation, actual support/identity/Range gaps and separately owned downstream treatment |
| update_trigger | Route/species/attachment/provider/site specification or residual status changes; new applicable instructions or measured range/asset-life evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, printed pp.288–289; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Construction-site clearance classification and narrower boundary |
| fhwa-fp24-201 | standard | FHWA FP-24 (2024), Section 201, printed pp.95–96; https://highways.fhwa.dot.gov/federal-lands/specs/fp-24.pdf | Approved limits, retained vegetation, clearing versus grubbing, acceptance and residual disposal; project applicability must be declared |
| fhwa-fp24-errata-20260915 | official_guidance | FHWA FP-24 Errata, 15 September 2026; https://highways.dot.gov/federal-lands/specs/Errata-FP-24.pdf | Applicable current amendment edition and version context; actual contract amendments govern |
| husqvarna-520irx-2024 | handbook | Husqvarna 520iRX operator manual 757-009-31.05.2024, printed pp.2,18–20,24; https://content.tdr.dss.husqvarnagroup.net/pub000093932/doc000239287 | Battery electric grass cutting and collection route, approved equipment and actual maintenance; not a universal productivity or cut-height factor |
