---
pcr_id: pcr.air-rotary-bedrock-water-well-construction-and-development-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Air-rotary bedrock water-well construction and development services

## 1. Scope and Applicability

This PCR covers first construction of a non-flowing consolidated-bedrock private water well using air-rotary drilling, with overburden casing/sealing and wellhead completion, actual development, temporary yield testing and construction-stage disinfection/flush/sampling. The deliverable is the accepted pump-free civil well. Actual jurisdiction, qualified driller and authorized site-specific design/test instructions govern construction acceptance.

Exclude unconsolidated screened wells, flowing artesian wells, exploration/geothermal/oil/gas wells, intentional hydrofracturing, later rehabilitation, permanent pumps/distribution/treatment and routine water supply. FRTR is used only for air-rotary mechanism and associated material/residual questions, not as a drinking-water-well design specification. Actual incidental formation effects remain disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.air-rotary-bedrock-water-well-construction-and-development-services |
| classification_refs | cpc:3.0:54341 |
| covered_products | Qualified pump-free first air-rotary bedrock civil well construction/development service at actual site and acceptance gate. |
| excluded_products | Unconsolidated screened/flowing/geothermal/exploration/oil/gas wells; hydrofracturing; rehabilitation; permanently pumped water system and operating water abstraction. |
| representative_product | One actual non-flowing private bedrock well with accepted casing/seal/wellhead, development and construction-stage tests/records. |
| production_route | Actual site/design → air-rotary formation removal and captured residuals → independent casing/seal/wellhead integration → development/temporary tests/initial disinfection/flush/sampling → signed pump-free civil gate; actual failures loop or close lawfully. |
| market_state | First-construction civil service, site-bound and accepted; no sold groundwater or guaranteed drinking-water approval. |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Construction and development of one qualified non-flowing consolidated-bedrock private water well by air rotary, at pump-free civil handover. |
| How much | 1 item accepted actual civil well; actual depth and diameter remain qualifiers, not equivalent well counts. |
| How well | Actual authorized design/site and construction-stage yield/development/disinfection/flush/sample acceptance, with sealed overburden casing and protected wellhead; civil acceptance is not drinking-water-service approval. |
| How long or cycle | One first-construction job from mobilization through final civil gate and attributable failed-hole closure/repair/retest. Link asset production/commissioning, job use/maintenance/replacement and retirement across actual reporting periods and other jobs; exclude later operating-water life. |
| reference_flow_link | `accepted_civil_well` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted air-rotary bedrock civil water-well construction and development service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site and jurisdiction; non-flowing consolidated-bedrock geology/hydrogeology; actual bit/hammer route; well/bore identifiers; drilled depth/diameters and overburden profile; casing grade/length/diameter/joints; approved grout and placement; cap/seals/wellhead arrangement; actual development method/endpoint; temporary pump and test method/flow/duration/drawdown/recovery; construction disinfection/dilution/contact/flush/sample protocol and results; failed-hole disposition; signed pump-free civil gate; later permanent-pump and water-service approval owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | accepted_civil_well | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count one actual accepted civil well at exact qualified gate. Depth, diameter, yield and capacity cannot convert incompatible jobs to equivalent counts. |
| mass_basis | all mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain actual wet/dry/solution/substance basis; measured volume to mass requires actual temperature/state and documented density; product solution mass is not active substance mass. |
| physical_units | support_electricity; support_assets; support_transport; support_services | Actual compatible property unresolved until verified | kWh; h; tkm; actual provider unit | Preserve actual physical energy/time/transport/provider measurements and independently verify support chain before final exchanges; no Count conversion for tool hours, samples, air volume or energy. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual authorized non-flowing bedrock site, native formation/aquifer and declared access/enabling-work interfaces before first well construction. |
| starting_condition_role | Environmental formation/resource stock and explicit approved site/design interfaces; not a prebuilt well or invented zero-burden new enabling works. |
| product_classification_scope | Pump-free air-rotary civil well service narrower than CPC water-well drilling including possible pump/piping work. |
| recursive_input_rule | A same-category externally supplied well-construction scope is a bounded upstream service with actual gate/owner/quantity and coverage; do not recreate its covered foreground inventory or assume recursion ends at an unverified service label. |
| upstream_dataset_requirement | Actual supply-state casing/grout/components, energy/fuel and bounded service/asset datasets with provider coverage and missing phases stated. |
| disclosure | Actual geometry/geology/design/jurisdiction, interfaces, source-water/cuttings custody, tests/gate, failures, providers and asset periods/phases/attribution; later pump/system/water-service duties. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| well_route | all processes | Reject flowing artesian, unconsolidated screened, geothermal/exploration/oil/gas, intentional hydrofracturing, later rehabilitation and routine water abstraction. Project outside this route requires another methodology. |  |
| start_interface | bore_removal | Declare actual access/site/hydrogeology/jurisdiction/utility clearance and authorized well design/driller. Include new job-specific enabling works or an explicit measured upstream bounded service with responsible provider; no unowned new work. In-situ formation/aquifer is environmental starting stock without invented upstream production. |  |
| removal_handoff | bore_removal | The removal source is the actual overburden and consolidated formation. Responsibility ends at documented drilled bore/formation state and captured cuttings/water handoff; residual handling remains accountable. It is independent of completion because geological removal/source capture has its own logs and custody, while the next node integrates supplied casing/seal/wellhead components. | frtr-air-rotary |
| completion_gate | well_completion | Independent casing/sealing/wellhead integration receives casing/couplings, compatible grout and cap/seals; joining/placement produces the actual approved sanitary civil completion for development. Document placement/cure evidence required by actual design, not universal guidance dosages. Embedded grout mixing is included without inventing an extra product handoff. | massdep-private-well-guidelines |
| test_handover | develop_accept | The independent develop_accept responsibility receives the completed but undeveloped and initially undisinfected civil well from well_completion. It removes fines/develops and initially disinfects this pre-treatment state, with actual temporary tests/flush/sampling, to hand over the qualified accepted pump-free civil well; captured sediment, managed liquid and real characterized releases remain distinct residual destinations. Develop and flush actual drilling fines before temporary pumping/yield test. Retain actual water-level, flow/time, acceptance and initial driller disinfection/flush/sample records and all repeat work. Name later permanent-pump installer/system disinfection and water-service approval owner; no permanent pump, distribution or treatment plant is delivered by this reference. | massdep-private-well-guidelines |
| shared_cycle | bore_removal | The lead bore_removal operator owns shared whole-job purchases, providers, logistics and asset register once, including support consumed in well_completion and develop_accept. Allocate by actual node_id/event causal task use; there is no independent support-process output. Link rig/compressor/drill/test pump/tools to all three consuming responsibilities, other jobs and reporting periods. Account asset production, commissioning/mobilization, use/idle, maintenance/replacement and removal/retirement using bounded verified provider coverage or complete-life attribution. Excluded provider phases must be supplemented. |  |
| reject_paths | all processes | Failed/contaminated/inadequate bore routes to actual remedy or lawful closure at bore_removal/well_completion; defective seals/components loop to well_completion; inadequate development/yield or disinfection/sample loops to develop_accept and responsible upstream node. Retain all job-attributable burdens and waste, exclude unresolved rejects from accepted count, close disposition before gate. |  |
| real_exchanges | all processes | Expand conditional umbrellas into each actual material/provider/waste/substance exchange with compatible physical units and verified identity. Do not sum unlike streams or create duplicate receipts/document mirror nodes. Use actual outside custody and environment destinations to determine product/waste/elementary type. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual separately supplied drilling lubricant or cuttings-control additive (`drill_additives`)

Process / prospective direction / type: `bore_removal` / `inputs` / `product`.

Conditional semantic requirement: instantiate each actual hammer lubricant, foam or other approved drilling additive as a distinct formulation and use. Include DTH lubrication where used, including compressor-carried lubricant; do not invent a foam input. Supplier-covered material is not added again.

- Collection subject: Actual separately supplied drilling lubricant or cuttings-control additive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record gross job-attributed receipts/issues by formulation and preserve actual use, outward usable returns, waste/releases and retained stock as separately reconciled dispositions; keep failed-hole use. Do not net returns before reporting gross input and actual outward return.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_chem`
- Sources: `frtr-air-rotary`

Range evidence need: Actual bit/hammer, lubricant/additive specification, active fraction and issues are required; no universal chemical dose or zero oil release is justified.

#### Collection requirement: Actual separately supplied rig compressor vehicle and test-equipment fuels (`support_fuels`)

Process / prospective direction / type: `bore_removal` / `inputs` / `product`.

Instantiate each fuel at actual supply/provider gate; tag metered rig/compressor/drilling/completion/test and transport uses by asset/event. Supplier-covered fuel must not be added again. Fuel oil is not an elementary air emission.

- Collection subject: Actual separately supplied rig compressor vehicle and test-equipment fuels
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reconcile gross receipts/opening stock with closing stock/outward returns and metered attributed consumption; retain actual density and temperature for litres-to-kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Actual fuel type, tank/meter records, task use and calibrated density are needed; no generic fuel per metre, compressor load or vehicle consumption factor.

#### Collection requirement: Actual bounded provision of reusable rig compressor drill tools temporary pump and test assets (`support_assets`)

Process / prospective direction / type: `bore_removal` / `inputs` / `product`.

Instantiate distinct actual reusable asset/provider services, preserving physical service units and source boundary. Enumerate bore_removal, well_completion and develop_accept consumers and other jobs/periods. A bounded provider dataset must actually cover capital production/maintenance/removal; otherwise supplement missing phases using full-life evidence without duplicating covered use.

- Collection subject: Actual bounded provision of reusable rig compressor drill tools temporary pump and test assets
- Flow property / unit: Duration / h
- Amount rule: Collect actual asset-specific task hours and complete-life use denominator including other jobs/periods; attribute capital production/replacement/maintenance/removal once. Keep fuel/electricity/consumables outside provision only when provider scope excludes them.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Actual asset production/commissioning, use/idle, replacement and retirement phases plus life-service denominator or complete provider coverage are required; no universal life, hour share or zero capital burden.

#### Collection requirement: Actual separate freight mobilization demobilization and waste haulage services (`support_transport`)

Process / prospective direction / type: `bore_removal` / `inputs` / `product`.

Instantiate actual provider/mode/route/load service only where not included in material, asset or waste treatment supply. Track rig mobilization/demobilization and attributable empty return legs; own vehicle operations are recorded by real fuel/asset inventory and not duplicated by a freight dataset.

- Collection subject: Actual separate freight mobilization demobilization and waste haulage services
- Flow property / unit: Transport service / tkm
- Amount rule: Use weighed load mass in tonnes and actual leg distance, with provider empty-leg/shared-load treatment declared; preserve trips/vehicle-km where they are the actual service basis until a compatible dataset is verified.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: Actual route, payload, leg direction, empty/shared loads and provider units/coverage are required; no default transport distance or arbitrary count conversion.

#### Collection requirement: Actual independently bounded time-based specialist provider services (`support_services`)

Process / prospective direction / type: `bore_removal` / `inputs` / `product`.

Conditional requirement for actual independently time-measured drilling/completion or other in-scope specialist services only. Instantiate each actual provider and responsibility gate; replace owned node activity only for its documented coverage and supplement uncovered burdens once. Laboratory analyses and externally supplied compressed air have separate truthful cards; paperwork alone creates no service exchange.

- Collection subject: Actual independently bounded time-based specialist provider services
- Flow property / unit: Duration / h
- Amount rule: Record actual delivered provider hours for the declared time-based service and map covered materials/energy/assets/transport/wastes against owned work; no sample count or compressed-air volume is converted to h.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`

Range evidence need: Actual time-based provider contract, delivered hours, independent gate and covered/excluded inventory phases are required; no universal service hours or hidden capital omissions.

#### Collection requirement: Actual separate equipment wear parts maintenance consumables and protective supplies (`support_materials`)

Process / prospective direction / type: `bore_removal` / `inputs` / `product`.

Instantiate actual wear bits, replacement drill parts, separately consumed oils/cleaners and protective supplies by material/formulation. Permanent asset replacements already in support_assets are not added again. In-scope hammer lubricant belongs drill_additives; maintenance consumables belong here only once.

- Collection subject: Actual separate equipment wear parts maintenance consumables and protective supplies
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record task-attributed issues and replacement events with whole-life allocation for reusable parts; reconcile gross issues, usable returns and stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_materials`
- Sources: `frtr-air-rotary`

Range evidence need: Actual wear/replacement schedule, quantities, mass and provider coverage are needed; no universal drill-bit life or lubricant consumption.

#### Collection requirement: Groundwater removed from actual aquifer during drilling (`drill_groundwater`)

Process / prospective direction / type: `bore_removal` / `inputs` / `elementary`.

Groundwater entering and removed from the bore is an environmental resource input, separated from injected purchased water using measured volumes and a disclosed water balance. Identify aquifer/location and withdrawal basis; uncertain separation is a data gap. Aquifer formation has no invented cultivation inventory.

- Collection subject: Groundwater removed from actual aquifer during drilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured or balanced source-specific withdrawal mass for the drilling events; retain measurement/estimation uncertainty and unrecovered fraction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_resource`
- Sources: `frtr-air-rotary`

Range evidence need: Actual inflow/withdrawal records and mixed-water source balance are required; do not use final test yield or bore volume as withdrawal.

#### Collection requirement: Ambient air intake for the drilling compressor (`ambient_air_intake`)

Process / prospective direction / type: `bore_removal` / `inputs` / `elementary`.

This records actual environmental intake only where required by the adopted inventory method. Compressor provision, fuel and electricity remain in the lead bore_removal operator. Purchased compressed air, if actually supplied, is separately instantiated under supplied_compressed_air and must not also be treated as ambient intake.

- Collection subject: Ambient air intake for the drilling compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compressor inlet flow and operating-time records with state-specific density, accounting for leakage and measurement basis; report unquantified intake as a gap if required.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `frtr-air-rotary`

Range evidence need: Actual intake state, calibrated flow/time coverage and method inclusion decision are needed; compressor nameplate rating is not continuous measured intake.

#### Collection requirement: Usable unused support product and returnable packaging sent to actual outward custody (`support_returns`)

Process / prospective direction / type: `bore_removal` / `outputs` / `product`.

Split actual returned unused fuel/material and returnable packaging by identified product and receiver. Packaging included in supplied goods has its upstream burden there; outward return is a custody record without a second upstream packaging purchase or assumed avoided-production credit.

- Collection subject: Usable unused support product and returnable packaging sent to actual outward custody
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use gross outward weighed return with shipment/receipt IDs; retained stock and reusable packaging onsite remain stock balances carrying the declared prior burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_balance`

Range evidence need: Actual outward custody, item/material mass and receipt evidence are required; no default packaging/return factor.

#### Collection requirement: Captured drilling cuttings and entrained solids sent to a named receiver (`wet_cuttings`)

Process / prospective direction / type: `bore_removal` / `outputs` / `waste`.

The removal node takes responsibility for excavated overburden/bedrock and hands captured cuttings to actual containment and disposal/recovery custody. Record wet mass and solids/water basis, contamination status and each receiver; wet mixture is not a named chemical emission or saleable groundwater product.

- Collection subject: Captured drilling cuttings and entrained solids sent to a named receiver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use weighed outward loads by actual waste identity; reconcile retained containment, released fines and entrained liquid so liquid is not counted twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cuttings`
- Sources: `frtr-air-rotary`

Range evidence need: Actual weighed loads, moisture/solids characterization, stock and receiver records are needed; no standard cuttings mass per metre or default density is supported.

#### Collection requirement: Drilling water or slurry transferred to managed treatment/disposal (`drill_managed_liquid`)

Process / prospective direction / type: `bore_removal` / `outputs` / `waste`.

Instantiate each real liquid/slurry waste stream by composition, custody and receiving facility. Exclude liquid already included in wet_cuttings; an onsite discharge to the environment belongs in drill_releases.

- Collection subject: Drilling water or slurry transferred to managed treatment/disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure separate transferred liquid masses or volume with verified density; link container/loading IDs to receiving records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_liquid`

Range evidence need: Actual source-water split, solids basis, transfer metering and destination are needed; no universal liquid waste fraction is available.

#### Collection requirement: Actual nonreturnable packaging used oils worn parts and support waste (`support_waste`)

Process / prospective direction / type: `bore_removal` / `outputs` / `waste`.

Instantiate every real packaging, used oil, worn component and other support waste by identity/hazard status/receiver. Avoid duplicate supplier-covered removal and capital retirement in support_assets; independent project waste remains included.

- Collection subject: Actual nonreturnable packaging used oils worn parts and support waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh outgoing waste streams or use model-specific item mass, reconcile with supplier packaging/consumable and asset records, and retain treatment chain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_balance`

Range evidence need: Actual packaging weights, wear/oil waste and receiver classification are needed; no generic waste fraction or recovery credit.

#### Collection requirement: Actual characterized drilling releases to identified environmental media (`drill_releases`)

Process / prospective direction / type: `bore_removal` / `outputs` / `elementary`.

Conditional requirement: instantiate each measured or defensibly calculated substance/species and receiving medium, including relevant airborne fines or compressor hydrocarbons and actual water discharges. Record particle size/substance basis and incidental formation effects in quality disclosure. Do not turn all wet cuttings or water into a single pollutant.

- Collection subject: Actual characterized drilling releases to identified environmental media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Substance-specific released mass from actual sampling/flow records or documented applicable factor; distinguish resource water return from contained waste and avoid duplicate engine emissions in support_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_releases`
- Sources: `frtr-air-rotary`

Range evidence need: Actual substance, medium, flow/concentration or validated factor applicability and capture efficiency are needed; an unmeasured release is not zero.

#### Collection requirement: Actual substance-specific engine generator transport and support releases (`support_emissions`)

Process / prospective direction / type: `bore_removal` / `outputs` / `elementary`.

Instantiate each actual pollutant/species/particle-size and air/water/soil medium based on calibrated measurement or an applicable documented emissions method. Link fuel/asset/task and boundary: do not duplicate upstream fuel combustion or provider-covered transport emissions.

- Collection subject: Actual substance-specific engine generator transport and support releases
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual activity and applicable engine/fuel/control/operating-state factor or monitoring; report uncertainty and unmeasured relevant species as gaps rather than zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_emissions`

Range evidence need: Actual engine specification, load/operation, factor scope/speciation or measured concentration/flow are required; no generic CO2/NOx/PM factor is imported without evidence.

#### Collection requirement: Actual well casing and inseparable supplied couplings at delivery state (`well_casing`)

Process / prospective direction / type: `well_completion` / `inputs` / `product`.

Specify actual steel or thermoplastic grade, dimensions, potable-well suitability and supplier gate. Casing protects the overburden section and integrates with the declared seal/wellhead arrangement; identify supplied couplings in the bill of supply and keep separately purchased couplings in completion_components.

- Collection subject: Actual well casing and inseparable supplied couplings at delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Gross job-attributed casing mass issued; record installed lengths and actual pipe-section masses, offcuts, unused returns and stock by material/lot.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_materials`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual approved casing schedule, lengths and traceable mass data are needed; no universal depth/diameter/length-to-mass factor is prescribed.

#### Collection requirement: Actual sealing grout at supplied or independently prepared handoff state (`sealing_grout`)

Process / prospective direction / type: `well_completion` / `inputs` / `product`.

Specify approved actual grout compatible with geology/hydrology, supplied dry/prepared state and annular seal duty. If genuinely independent preparation delivers grout, record its actual preparation gate and upstream inventory once. Embedded mixing remains within well_completion: instantiate cement/bentonite/other ingredients individually plus water, rather than counting both ingredients and prepared grout.

- Collection subject: Actual sealing grout at supplied or independently prepared handoff state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record gross issues of each actual grout supply state or ingredient; reconcile placed material, mixing residue, returned product and closing stock with measured batch records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grout`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual authorized mix specification, state, water ratio, batch yields and annular geometry/placement are needed; no generic mix, cure time, dosage or loss factor is imposed.

#### Collection requirement: Actual separately supplied casing joints wellhead cap seals and completion components (`completion_components`)

Process / prospective direction / type: `well_completion` / `inputs` / `product`.

Instantiate each independently supplied compatible coupling, sanitary cap, seal and other approved completion component by its true material and supply identity. Joining/grouting/wellhead labour is this node responsibility; do not add a second generic installation service over the same owned work.

- Collection subject: Actual separately supplied casing joints wellhead cap seals and completion components
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record each component mass from weighed units or supplier model-specific evidence and issued counts; preserve identities and exclude components included in well_casing or grout supply.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_materials`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual bill of supply, compatible design and model-specific masses are needed; heterogeneous components cannot be summed as one exchange.

#### Collection requirement: Usable unused completion material actually returned across outward custody (`completion_returns`)

Process / prospective direction / type: `well_completion` / `outputs` / `product`.

Only real outward return of usable identified casing/components/grout product qualifies. Match shipment and receiving custody; retained closing stock stays a balance carried to later jobs, not an output exchange.

- Collection subject: Usable unused completion material actually returned across outward custody
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record gross outward return by material and lot under gross receipt accounting; do not first net it out of upstream exchange then count it again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Actual outward custody, quantity and supplier credit/receiving evidence are required; no default return percentage.

#### Collection requirement: Completion offcuts rejected components and grout residues to actual waste route (`completion_waste`)

Process / prospective direction / type: `well_completion` / `outputs` / `waste`.

Instantiate separate actual scrap, rejected components and hardened/liquid grout residues by composition and receiver. Defective seal/wellhead work returns to well_completion, with extra materials and waste retained; unlawful or unresolved disposal blocks finalization.

- Collection subject: Completion offcuts rejected components and grout residues to actual waste route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh each outward waste stream and reconcile it with issues, placed materials, returns and retained stocks; internal rework material is not an outward waste twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Actual component rejects, batch residue, weights and destination evidence are needed; no universal installation loss or scrap credit.

#### Collection requirement: Actual characterized grouting joining and completion-cleanup releases (`completion_releases`)

Process / prospective direction / type: `well_completion` / `outputs` / `elementary`.

Conditional: instantiate actual characterized substance/species and receiving air/water/soil medium from grout placement, actual joining and cleanup. Contained grout residue/cleanup wastewater is managed waste under completion_waste; lawful environmental discharge is elementary. Neither chemical reaction nor emissions are invented from grout presence.

- Collection subject: Actual characterized grouting joining and completion-cleanup releases
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual monitored release or documented applicable method with actual batch/activity, substance basis and medium; distinguish grout/solution mixture mass from pollutant mass and retain unmeasured relevant releases as gaps.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_releases`

Range evidence need: Actual joining/grout/cleanup materials, release existence, concentration/flow or valid factor, medium and uncertainty are required; no universal grout emission or zero-release assumption.

#### Collection requirement: Actual construction-stage well disinfectant solution or chemical at supply state (`disinfection_product`)

Process / prospective direction / type: `develop_accept` / `inputs` / `product`.

Specify actual approved formulation and concentration at receipt, actual dilution water and used batches. This stage addresses the driller initial well disinfection; later permanent-pump/system disinfection has a named owner and remains outside this civil scope.

- Collection subject: Actual construction-stage well disinfectant solution or chemical at supply state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record gross formulation issues by batch and actual concentration; calculate active chemical only with documented formulation and without adding a second upstream formulation burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_disinfect`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual authorized concentration, contact duration, water quality and flush endpoint are required; no universal chlorine dose or successful first-pass result.

#### Collection requirement: Actual separately supplied sampling and construction test consumables (`sampling_consumables`)

Process / prospective direction / type: `develop_accept` / `inputs` / `product`.

Instantiate each real sample container, preservative or single-use test consumable not covered by the external laboratory service. Record sample event and accepted method, transport packing and receiver; do not assume laboratory packaging is also purchased by driller.

- Collection subject: Actual separately supplied sampling and construction test consumables
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record gross job-attributed receipts/issues by distinct material for actual sampling/retesting; reconcile use, real outward usable returns, waste and retained stock separately, without netting returns and then counting them again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`

Range evidence need: Actual sampling plan, sample counts, composition/mass and provider scope are required; no fixed bottles or tests per well.

#### Collection requirement: Groundwater withdrawn for development temporary yield test flushing and sampling (`test_groundwater`)

Process / prospective direction / type: `develop_accept` / `inputs` / `elementary`.

Record actual aquifer withdrawal for development, temporary pumping/yield tests, disinfection flushing and sampling separately from external water. Temporary pump provision/energy belongs the lead bore_removal operator. Withdrawal is construction activity, not lifetime drinking-water production or a groundwater co-product.

- Collection subject: Groundwater withdrawn for development temporary yield test flushing and sampling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use event-specific measured flow and time/water-level logs with source attribution and verified density if kg is calculated; reconcile recirculation rather than count each pass as new withdrawal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_resource`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual test flow/rate/duration, development volumes and recirculation/source balance are needed; do not multiply a nominal yield by an invented test duration.

#### Collection requirement: Development test and disinfectant flush liquid transferred to managed treatment/disposal (`development_managed_liquid`)

Process / prospective direction / type: `develop_accept` / `outputs` / `waste`.

Instantiate actual removed water/slurry/disinfection flush waste by quality and receiver. Determine lawful custody after actual tests; do not label contaminated/chlorinated water a saleable product or treat all withdrawal as discharge.

- Collection subject: Development test and disinfectant flush liquid transferred to managed treatment/disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter/weigh transferred liquid by event and receiver; reconcile abstracted plus supplied water, retained/recirculated water, samples and actual releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_disposition`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual water-quality/chlorine/solids characterization, masses and disposal receipts are needed; no universal dechlorination or waste fraction.

#### Collection requirement: Captured development sediment and spent sampling consumables to actual waste route (`development_waste`)

Process / prospective direction / type: `develop_accept` / `outputs` / `waste`.

Record captured development fines separately from liquid already accounted for and split real single-use test waste by material/contamination status and receiver. Retest waste remains attributable to the accepted job.

- Collection subject: Captured development sediment and spent sampling consumables to actual waste route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh or use traceable item mass for each distinct waste identity; separate wet sediment water from development_managed_liquid.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_disposition`

Range evidence need: Actual captured sediment, consumable weights/contamination and destination are needed; no default sediment or test-waste rate.

#### Collection requirement: Actual characterized development testing and disinfection releases (`development_releases`)

Process / prospective direction / type: `develop_accept` / `outputs` / `elementary`.

Instantiate actual substance/species and receiving medium from lawful release records, including identified residual disinfectant where released and actual water returned to environment. Water resource balance and pollutant mass are different quantities; do not equate solution mass to chlorine mass.

- Collection subject: Actual characterized development testing and disinfection releases
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate each substance-specific discharge from actual volume and representative concentration/speciation or applicable documented method; prevent duplicate waste transfers.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_disposition`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual release permit/method, medium, concentration/time and uncertainty are needed; neither flush completion nor lack of measurement proves zero release.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bore_removal | Formation drilling and resource-removal responsibility | required | Always; actual overburden/consolidated-bedrock removal and all attributable attempts | Independent source/removal responsibility: drilled bore and captured cuttings/water handoff to completion/receivers; separate from component integration; lead operator owns whole-job shared purchases/assets/logistics once, attributes actual events among all three responsibilities without a support pseudo-process | Actual drilled intervals/geometry and residual quantities attributable per reference flow |
| well_completion | Casing sealing and wellhead integration | required | Always; actual design may interleave casing/seal work with drilling | Independent assembly/integration of supplied casing/couplings/grout/cap/seals to accepted well-completion gate before development; defects return here | Actual installed casing/seal/wellhead quantities per reference flow |
| develop_accept | Development temporary testing disinfection and civil acceptance | required | Always; actual development/test/disinfection/sample protocols; failures repeat or close | Independent treatment responsibility: completed-but-undeveloped/undisinfected civil well → actual fines removal/development/initial disinfection and tests → qualified accepted pump-free civil well handoff; distinct captured residuals and actual releases; later duty owners | 1 item accepted civil well per reference flow |


### Process: Formation drilling and resource-removal responsibility (`bore_removal`)

#### Inputs

##### Product flows

###### Externally supplied water injected during air drilling (`drill_injected_water`)

Water supplied across the job boundary for dust/cuttings control or drilling is a purchased product. Record actual source and quality; groundwater entrained by drilling is a separate resource withdrawal. Do not assume a mud-rotary fluid inventory.

- Selected flow: Externally supplied water injected during air drilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record separately metered injected-water mass by source; actual volume requires temperature and documented density before kg conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_water`
- Sources: `frtr-air-rotary`

Range evidence need: Actual injection setting, duration, metered receipts/use and water quality are needed; no universal water-to-depth or fuel ratio is supported.

###### Actual separately supplied construction and temporary test electricity (`support_electricity`)

Record actual provider/voltage/grid or generation boundary and event-metered tool, compressor/test-pump electricity as used. Keep later permanent-pump/house energy outside. Charging electricity counted once; onsite generator fuel is not also a purchased grid input.

- Selected flow: Actual separately supplied construction and temporary test electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use meter differences for actual in-scope tasks and disclose shared-meter attribution; preserve actual kWh with unresolved Energy support rather than replace it by a count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Actual metering, supply mix/time and attributable tool/test use are required; no universal kWh per well or rated-power-hours assumption.

###### Actual separately supplied construction-stage laboratory analysis service (`laboratory_analysis`)

Conditional: only actual independently supplied laboratory analyses attributed to construction-stage acceptance/retests are recorded. One item is one declared actual analysis package/sample service with stated parameters/method; incompatible analysis packages are separate exchanges. Provider-included containers/preservatives/transport remain covered once; no invented laboratory activity when it is outside this stage contract.

- Selected flow: Actual separately supplied construction-stage laboratory analysis service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Record actual delivered analysis-package counts by provider/method/sample and responsible test event, including failed/retests; preserve exact included scope and do not convert analyses to hours.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_laboratory`

Range evidence need: Actual laboratory scope/method/package, sample IDs/count and provider coverage are needed; no fixed number or equivalence of tests per well.

###### Actual externally supplied compressed air at its delivery state (`supplied_compressed_air`)

Conditional only where compressed air actually crosses the job boundary as supplied product; declare provider, composition/quality and pressure/temperature/delivery state. Own compressor ambient intake and fuel/assets belong the owned provision route and must not also produce the same externally supplied air burden.

- Selected flow: Actual externally supplied compressed air at its delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record delivered mass or convert actual metered state-qualified volume with documented state/composition-specific density; preserve original volume/pressure/temperature and provider scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_air`

Range evidence need: Actual external supply existence, delivery metering/state/density and upstream compression coverage are required; do not assume a purchased air input merely because air rotary is used.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Casing sealing and wellhead integration (`well_completion`)

#### Inputs

##### Product flows

###### Separately supplied grout-preparation and completion-cleanup water (`grout_water`)

Record actual separately supplied water for embedded grout preparation and conditional completion cleanup by purpose/event/source. Water contained in supplied prepared grout is covered by sealing_grout; actual onsite groundwater abstraction instead needs its own environmental source exchange. Cleanup water is conditional on actual use, with no universal quantity.

- Selected flow: Separately supplied grout-preparation and completion-cleanup water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter or weigh actual batch-preparation and conditional cleanup-water inputs separately by purpose/source; retain actual volume, temperature and documented density for kg conversion and reconcile grout residues/cleanup liquid.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grout`

Range evidence need: Actual supplied-grout state, embedded recipe where mixing occurs, cleanup existence, purpose-specific water metering and volume-density evidence are required; no universal water ratio or cleanup volume.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Development temporary testing disinfection and civil acceptance (`develop_accept`)

#### Inputs

##### Product flows

###### Externally supplied development flushing disinfection make-up and sampling water (`development_water`)

Record purchased/injected water separately by actual purpose/source. Bedrock air drilling fines must be addressed by actual flushing and development before the yield test; route source supports inclusion, while actual authorized instructions set the method and endpoint. Do not substitute supplied drinking-water production for abstracted well water.

- Selected flow: Externally supplied development flushing disinfection make-up and sampling water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter attributed external water by event/purpose; separate embedded disinfectant water from formulated product water and avoid counting the same batch twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_water`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual development/flush/dilution protocol, flow/time and metering are required; no universal flush volume, hours or sediment threshold is imposed.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted air-rotary bedrock civil water-well construction and development service (`accepted_civil_well`)

The sole reference output is one actual completed accepted pump-free civil well at the declared site/geometry and construction-stage development/test/disinfection gate. Include job-attributable failed attempts, lawful closure/remedy and all repair/retest loops. A failed bore or an unclosed inadequate sample/test is not accepted output.

- Selected flow: Accepted air-rotary bedrock civil water-well construction and development service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_accept`
- Sources: `massdep-private-well-guidelines`

Range evidence need: The reference count is exactly one by definition, not a yield prior. Actual accepted well identity and signed gate evidence are required; there is no universal yield, potability or productive depth.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_service | all processes | One accepted pump-free civil well is the intended service. No sold groundwater/cuttings co-product or avoided-product credit is assumed. Actual recovered product exit, if any, requires demonstrated product status/destination and disclosed attribution, while waste treatment remains accountable. |  |
| failed_attempts | all processes | Link each bore attempt/remedy/test/sample event to job and producing node; allocate job-attributable failures, lawful closure, repairs and retests to the accepted job. Independently contracted unrelated exploratory work needs an explicit different owner/gate; no hidden failure burden or extra accepted well. |  |
| asset_share | support_assets | For each actual asset use complete-life production/commissioning/maintenance/replacement/removal burdens and actual service-use share for this job. Record life-service denominator across other jobs/reporting periods and attributable use/idle allocation with evidence. Provider-covered phases and owned use inputs count once; missing denominator/termination evidence is a gap, never zero. |  |
| period_link | bore_removal | Index every asset phase/event/input by asset/job/date/reporting period, including cross-period replacements and retirement. Reconcile allocated shares over the same complete life; no repeated annual/full asset charge and no future permanent-pump operation attributed to construction. |  |
| material_custody | all material rows | Use gross attributed receipts/opening stock and issues with placed/used quantities, real outward usable returns, waste/releases and closing stock by actual identity. With gross upstream accounting, outward returns are not first netted and counted again. Retained stock is carried-forward burden with explicit transfer basis, never outward product. |  |
| service_overlap | support_services | Lead bore_removal ownership records the purchase once and uses actual node_id/event task shares for bore_removal, well_completion and develop_accept. Read actual provider scope for fuel, water, materials, assets, transport and disposal; either provider bounded inventory covers a role or its actual foreground inputs do. Supplement missing production/removal without duplicating covered phases. No generic service and its full owned inventory together. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_drill_water | bore_removal | external injected water | primary records | job_id; bore_id; event_id; water_source; receipt_kg; opening_kg; closing_kg; outward_return_kg; meter_start; meter_end; volume_m3; temperature_C; density_kg_m3 | Reconcile source-specific receipts/stock and injection meter logs; use documented state-specific density for measured volume, allocate only this job and retain actual purposes. | kg; m3; degC | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_drill_chem | bore_removal | drilling formulations | primary records | job_id; bore_id; event_id; bit_hammer; formulation_id; supplier; active_fraction; gross_issued_kg; returned_kg; closing_stock_kg; provider_coverage | Read actual drill/hammer requirements and product lot/SDS; weigh issues by formulation and log actual use and outward returns; include failed-hole events and compressor carryover evidence. | kg | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_drill_resource | bore_removal | groundwater resource withdrawal | primary records | job_id; bore_id; event_id; aquifer; location; total_removed_m3; injected_m3; recirculated_m3; retained_m3; groundwater_m3; temperature_C; density_kg_m3; balance_uncertainty | Measure/estimate groundwater component with explicit mixed-source balance and actual meter/flow-time evidence; retain method limitations and separate new aquifer withdrawal from recirculation. | kg; m3; degC | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_air | bore_removal | compressor ambient intake | primary records | asset_id; event_id; inlet_flow_m3_h; inlet_pressure_kPa; inlet_temperature_C; humidity; operating_h; density_kg_m3; supply_type; inclusion_method | Use actual calibrated inlet flow/state/time or documented validated engineering balance; declare whether inventory method requires ambient intake. Record separately purchased air under actual service identity, never ambient plus purchased for same air. | kg; m3/h; kPa; degC; h | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_cuttings | bore_removal | formation/cuttings removal | primary records | job_id; bore_id; formation_log; interval_depth_m; bore_diameter_mm; load_id; wet_mass_kg; dry_solids_kg; entrained_water_kg; contamination; stock_kg; receiver; custody_id | Log geology/depth/diameter and container/load weights; sample moisture/contamination as required; reconcile solids/water, stock and receiver tickets without treating geometric volume as measured mass. | kg; m; mm | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_drill_liquid | bore_removal | managed drilling liquids | primary records | event_id; container_id; waste_identity; volume_m3; density_kg_m3; suspended_solids; receiver; custody_id; included_cuttings_water_kg | Meter/weigh each separately transferred stream; characterize actual composition and reconcile liquid embedded in cuttings to avoid double transfer. | kg; m3 | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_drill_releases | bore_removal | drilling releases | primary records | event_id; substance; species_basis; particle_size; medium; release_flow_m3; concentration_mg_L; release_mass_kg; capture_fraction; method_id; uncertainty | Monitor actual release or apply documented applicable measurement/factor method with actual activity, substance/medium and uncertainty. Record incidental formation effects separately; distinguish discharge water from pollutant mass. | kg; m3; mg/L | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_completion_materials | well_completion | casing/components | primary records | job_id; bore_id; material_id; model; grade; dimensions_mm; installed_length_m; issued_count; item_mass_kg; gross_receipt_kg; opening_stock_kg; placed_kg; return_kg; waste_kg; closing_stock_kg; bill_of_supply | Reconcile approved actual casing/wellhead drawings and supplier lots; weigh components or use matching model mass and count; distinguish factory-included from separate components and log placement/defect corrections. | kg; m; mm; item | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_grout | well_completion | grout and embedded water | primary records | job_id; bore_id; batch_id; event_id; water_purpose; water_source; supplied_state; approved_recipe; ingredient_id; ingredient_kg; water_kg; cleanup_water_kg; water_volume_m3; temperature_C; density_kg_m3; grout_yield_kg; placed_kg; residue_kg; return_kg; closing_stock_kg; annulus_geometry; placement_record; cure_record | Verify actual geology-compatible authorized grout specification and supply/preparation gate. Recipe/ingredient/batch fields apply only to actual embedded mixing; otherwise record prepared-grout supply once. Separately meter actual conditional completion-cleanup water by purpose/event/source, retaining actual volume/temperature/density for mass conversion and cleanup-liquid disposition. Retain actual placement/cure evidence and mass balance. | kg; m3; degC; actual geometry and cure units stated in approved record | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_completion_balance | well_completion | material returns/waste | primary records | job_id; batch_id; material_identity; gross_in_kg; installed_kg; usable_return_kg; outward_custody_id; waste_kg; receiver; retained_stock_kg; carried_burden_basis; defect_id; disposition | Weigh and reconcile actual installation losses, rejected components and grout residues by identity; real outward return needs receipt, closing stock carries burden and unresolved defects cannot pass handover. | kg | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_dev_water | develop_accept | external development water | primary records | job_id; bore_id; event_id; purpose; source; supplied_water_kg; volume_m3; density_kg_m3; formulation_water_included; endpoint; protocol_ref | Meter source/purpose-specific external injection/flush/dilution water and keep actual authorized development endpoint; reconcile water included in formulations and loop/retest events. | kg; m3 | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_disinfect | develop_accept | initial driller disinfection | primary records | job_id; bore_id; event_id; formulation; gross_issued_kg; active_fraction; dilution_water_kg; prescribed_concentration_unit; actual_concentration; prescribed_contact_unit; actual_contact; water_quality; flush_endpoint; protocol_ref; repeat_reason | Read actual authorized site disinfection protocol/product label and batch logs; retain concentration/duration with original units, dilution, conditions and flush endpoint. Link sample results/repeat reasons and later pump/system duty owner. | kg; concentration and contact units declared by actual protocol | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_dev_resource | develop_accept | construction groundwater withdrawal | primary records | job_id; bore_id; event_id; aquifer; purpose; pump_id; rate_m3_h; duration_h; meter_start_m3; meter_end_m3; static_level_m; drawdown_m; recovery_m; recirculated_m3; external_water_m3; density_kg_m3; protocol_ref | Collect actual development/yield-test/flush/sample water meter and time/level records; separate aquifer withdrawal from external addition and recirculation; no nominal test rate/time substitution. | kg; m3; m3/h; h; m | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_test_materials | develop_accept | sample/test materials | primary records | job_id; sample_id; event_id; method_ref; material_id; gross_issued_kg; item_count; item_mass_kg; returned_kg; closing_stock_kg; laboratory_coverage | Use actual sample plan and laboratory/provider scope; weigh/sample-count matching consumables and include actual repeated tests, without duplicate provider-included bottles/preservative. | kg; item | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_accept | develop_accept | accepted civil service | primary records | job_id; well_id; site; jurisdiction; geology; non_flowing_evidence; approved_design; driller_qualification; bore_attempt_ids; casing_seal_wellhead_acceptance; development_endpoint; test_protocol; test_flow_unit; test_duration_unit; drawdown_recovery_units; actual_test_results; disinfection_flush_records; sample_method_results; defect_dispositions; closure_records; accepted_count; signed_gate; later_pump_disinfection_owner; water_service_approval_owner | Independently reconcile construction/as-built and actual approved test/sample criteria with signed pump-free civil handover. Count one only after all attributable inadequate holes/defects/retests have closed; later permanent pump/system and drinking-water approval duties must be explicitly transferred. | item; actual geometry/test/quality units retained | each acceptance plus every failed/repair/test event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Signed stage-specific gate, qualified authority/design criteria and traceable actual results; civil acceptance alone does not establish potability or full water-system approval. |
| cp_dev_disposition | develop_accept | water/sediment/test residuals and releases | primary records | job_id; event_id; stream_id; substance; species_basis; medium; volume_m3; wet_mass_kg; solids_kg; entrained_water_kg; concentration_mg_L; active_chlorine_basis; sample_mass_kg; recirculation_m3; stock_kg; receiver; custody_id; release_authorization; uncertainty | Reconcile aquifer/external inputs with managed liquid, sediment water, recirculation, samples, stock and lawful actual releases. Weigh captured wastes; determine individual pollutant mass from representative concentration/flow with units/species basis. Do not use solution mass as active disinfectant mass. | kg; m3; mg/L | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_energy | bore_removal | fuel and electricity | primary records | job_id; asset_id; node_id; event_id; fuel_identity; receipt_kg; opening_stock_kg; closing_stock_kg; returned_kg; consumed_kg; volume_L; density_kg_L; temperature_C; meter_start_kWh; meter_end_kWh; provider_scope; reporting_period | Meter/stock-balance each actual fuel and electricity supply by asset/task; retain actual volume-density conversion, charging/generator/provider coverage. Attribute shared use from primary task records, including failed/retest events; separate transport consumption. | kg; L; kWh; degC | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_assets | bore_removal | complete-life shared asset provision | primary records | asset_id; provider; coverage_phases; consuming_node; job_id; reporting_period; task_h; idle_h; lifetime_service_h; production_record; commissioning_date; maintenance_events; replacement_events; retirement_date; removal_route; allocation_method; uncertainty | Create complete-life asset/event register across actual jobs/periods and all consuming nodes. Verify provider coverage; allocate uncovered capital/maintenance/removal with measured task use and supported full-life denominator, explaining idle treatment. Preserve replacement/termination evidence and reconcile all shares; otherwise report incomplete asset coverage. | h; actual phase quantities/units retained | each task and replacement/removal event; reconcile every period | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Provider scope plus production/maintenance/removal records and actual life-service evidence; no default lifespan or zero capital burden. |
| cp_transport | bore_removal | actual logistics | primary records | job_id; consignment_id; asset_material_id; provider; mode; leg_id; origin; destination; distance_km; payload_t; empty_leg; shared_load_fraction; trip_count; vehicle_km; supplied_service_unit; supplier_coverage | Reconcile actual delivery/mobilization/demobilization/waste legs from manifests and route records, measured loads and service unit. Include accountable empty/shared legs; avoid own vehicle fuel/asset and purchased full transport double counting. | tkm; t; km; vehicle-km; trips as actually measured | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_services | bore_removal | independent time-based provider services | primary records | job_id; node_id; event_id; provider; time_based_service_identity; delivered_h; delivery_gate; source_boundary; materials_coverage; energy_coverage; asset_phases_coverage; transport_coverage; waste_coverage; record_id | Read actual time-based contract/delivery scope, measured hours and independent responsibility gate; map actual covered/excluded work to all three responsibilities. Do not convert laboratory samples or compressed-air quantities to hours; supplement missing inventory phases once. | h | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_support_materials | bore_removal | wear/maintenance supplies | primary records | job_id; asset_id; node_id; event_id; material_formulation_id; gross_issued_kg; return_kg; stock_kg; replacement_event; life_share; provider_coverage | Weigh actual separately consumed maintenance/wear supplies or use matching model mass and record replacements; identify capital-covered parts and hammer lubricant to prevent duplication. | kg | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_support_balance | bore_removal | packaging/support residual custody | primary records | job_id; product_or_waste_identity; material_kg; packaging_included; gross_receipts_kg; opening_stock_kg; issues_kg; outward_returns_kg; receiver; custody_id; waste_kg; closing_stock_kg; carried_burden_basis | Reconcile gross support-material/packaging receipts and actual outward usable return/waste by identity; retain closing stock with burden basis. Match supplier-covered packaging/removal and complete-life asset retirement to avoid duplicate inputs/exits. | kg | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_support_emissions | bore_removal | engine and support emissions | primary records | job_id; asset_id; node_id; event_id; fuel_activity; engine_model; operating_state; pollutant; species_basis; particle_size; medium; measurement; factor_ref; factor_unit; control_state; release_mass_kg; provider_coverage; uncertainty | Use actual monitored emission or documented applicable engine/fuel/control factor with actual activity; retain factor version/unit/speciation and upstream/provider boundary. Report relevant unmeasured releases as gaps; exclude separately counted drilling/disinfection releases. | kg; actual factor/activity units | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_laboratory | bore_removal | conditional independent laboratory analysis | primary records | job_id; node_id; event_id; sample_id; provider; method; parameters; analysis_package; delivered_count; included_containers; included_preservatives; transport_coverage; retest_reason; record_id | Count actual delivered compatible analysis packages with sample/event IDs and provider method/coverage; keep different packages distinct and link construction-stage acceptance/retests. No analyses outside this stage contract are silently imported. | item | each actual event | Whole job including failures/retests | Actual site/job and named provider/receiver | per reference flow | Actual package/method/count records and traceable provider scope prevent duplicate sample materials and transport. |
| cp_supplied_air | bore_removal | conditional externally supplied compressed air | primary records | job_id; node_id; event_id; provider; supply_record; composition; quality; delivered_mass_kg; volume_m3; pressure_kPa; temperature_C; density_kg_m3; compression_coverage; owned_air_excluded | Confirm external product supply actually exists; meter delivery mass or actual state-qualified volume and use documented state/composition-specific density. Map provider compression boundary and exclude duplicate own compressor air/energy/assets for the same supplied quantity. | kg; m3; kPa; degC | each actual event | Whole job including failures/retests | Actual site/job and named provider/receiver | per reference flow | Actual meter/state/density and supply coverage; no universal air mass/pressure or default externally supplied air. |
| cp_completion_releases | well_completion | conditional completion releases | primary records | job_id; bore_id; event_id; grout_or_joining_material; cleanup_activity; substance; species_basis; medium; release_flow_m3; concentration_mg_L; release_mass_kg; method_id; waste_coverage; uncertainty | Monitor actual grouting/joining/cleanup release or use an applicable documented method; preserve substance/medium and solution versus active mass. Contained residue/liquid goes to completion_waste; report relevant unmeasured release as a gap, never zero. | kg; m3; mg/L | each actual event | Whole job including failures/retests | Actual site/job and named provider/receiver | per reference flow | Actual activity/material, release evidence/method, environmental medium and uncertainty; no invented universal grout emissions. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_normalization | all inventory rows | Collect all job-attributable events, failures and provider/asset shares, then divide each homogeneous exchange quantity by actual accepted civil well count for the same declared route/gate. No completed well means no normalized accepted service dataset. | actual event/quantity records; accepted_count; job_id | quantity per reference flow |  |
| physical_balance | all material and water rows | Reconcile actual gross opening plus receipt quantities with placement/use, documented outward return, waste/release and retained closing stocks by identity; document conversion/measurement uncertainty and every physical destination. This balance does not invent a product output for stock or credit for waste. | actual gross/custody/meter/stock records | reconciled actual exchange quantities and data gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_gate | accepted_civil_well | Site/geology/non-flowing/air-rotary route and pump-free gate must match actual permit/design; construction yield/sample acceptance is stage-specific, not water-service approval. | cp_accept; approved actual records |
| identities | all inventory rows | Each conditional umbrella expands to actual concrete exchanges; verify identity, property and unit independently before final TIDAS process publication. Preserve unresolved Energy/Duration/Transport support until verified. | actual supplier/receiver/substance records and verified platform chain |
| balances | all material and water rows | Reconcile gross receipts/opening stock, placement/use, actual outward returns, waste/releases and closing stock by identity. Water source and wet-solids bases must close with quantified uncertainty; no net-plus-return duplication. | weigh/meter/custody balances |
| period_assets | support_assets | Cover complete asset production/use/maintenance/replacement/removal, other jobs and reporting periods with traceable denominator and provider phase boundary; unresolved retirement/replacement blocks finalization. | cp_assets life register and provider scope |
| uncertainty | all rows | Report actual dates, calibration and detection limits, coverage, sampling representativeness and calculated-factor applicability. Missing/estimated quantity or release remains explicit, never a zero placeholder. | protocol records and uncertainty ledger |
| tests | develop_accept | Retain actual yield-test method, duration/rate/levels and design acceptance source, construction disinfection concentration/contact/flush endpoints with specified units/tolerances, certified actual lab/authority criteria and all failed/retest closure. | cp_accept; cp_disinfect; actual authorized protocol |
| coverage | all processes | Include transport, wear, packaging, chemicals, energy, shared assets, failed holes and waste receivers. Identify actual new enabling work owner/gate and every supplier-included role. | scope/coverage matrix plus event/custody records |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_fit | accepted_civil_well | Fail dataset route-fit for excluded geology/flowing/technology/system scope; do not drop necessary work to fit boundary. |  |
| gate_count | accepted_civil_well | Only one completed actual civil well per reference; reconcile accepted_count with signed gate and exact stage criteria, actual test/sample results and later duty owners. A rejected/unfinished hole cannot be a reference output. | massdep-private-well-guidelines |
| water_source_balance | all water and residual rows | Verify purchased/injected water versus groundwater withdrawal, recirculation/stock and cuttings-water/managed-liquid/releases; no double-counted mixtures, groundwater sale or invented aquifer production. |  |
| identity_units | all inventory rows | Unresolved actual identities and Energy/Duration/Transport support prevent final concrete exchanges. Verify actual property/group/unit chain and explicit physical conversion; no near-match drilling/monitoring/pumped-water UUID or Count conversion for h/kWh/tkm. |  |
| asset_periods | support_assets | Require all consuming nodes and other jobs/periods, phase coverage, life-service attribution and replacement/termination evidence; verify shares count production/use/removal once and missing coverage is declared. |  |
| reject_closure | all processes | Match each failed bore/defective completion/inadequate development/yield/sample to responsible loop or lawful closure and residual receiver; retain all attributable burden and exclude unresolved rejects from accepted count. |  |
| custody | all material rows | Match actual gross receipt/issue/outward return/waste/stock balance and provider boundaries; retained stock is not outward product and no return is netted then counted again. |  |
| range_quality | all inventory rows | Satisfy each card’s stated actual Range-evidence requirement and retain actual specification/measurement uncertainty; no source example becomes universal dose/geometry/yield/duration/life/emission default. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for accepted pump-free civil well construction/development service. |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual route-fit civil well construction comparison/integration with stated site/geometry/test/asset boundaries and separate downstream pump/system owner. |
| excluded_use | Operating drinking-water supply, guaranteed potability, whole pumped system, unrelated drilling routes or equivalent-volume water production. |
| required_metadata | All reference qualifiers; actual start/end/gates/providers; event/custody balances; failed-hole/retest linkage; asset phases/periods/denominator; sources/identity/support status. |
| required_quality_disclosure | Actual completeness/uncertainty, water/substance bases, source applicability and unresolved identity/Range/support gaps; actual jurisdiction design/test acceptance; pump-free scope. |
| update_trigger | Route/geology/flowing status, actual design/components/grout/bit/additives, source/provider boundaries, test/gate protocols or asset-cycle/attribution change. |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf — CPC Version 3.0, 30 June 2025, printed p.289 | CPC water-well drilling category includes pump/piping; pump-free semantic scope is narrower. |
| frtr-air-rotary | official_guidance | https://www.frtr.gov/site/3_2_1.html — FRTR Field Sampling and Analysis Technologies Reference Guide, 3.2.1 Direct Air Rotary | Air-rotary physical mechanism, formation/cuttings/water, actual bit/hammer/lubrication/additive and release questions only; no private-water-well specification or numeric default. |
| massdep-private-well-guidelines | official_guidance | https://www.mass.gov/info-details/private-well-guidelines ; https://www.mass.gov/doc/private-well-guidelines/download — MassDEP Private Well Guidelines, updated May 2024; bounded sections printed pp.42,52,68 | Bedrock fines flushing/development before tests; actual geology-compatible annular seal; initial driller versus later pump/system disinfection and sample/retest responsibilities. Numeric guidance examples are not universal defaults; actual authorized project criteria control gate. |
