---
pcr_id: pcr.mortared-prefabricated-firebrick-firebox-lining-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mortared prefabricated firebrick firebox lining installation services

## 1. Scope and Applicability

This PCR covers the first mortared installation of a factory-made refractory firebrick lining set in an accepted compatible, unlined, single-opening ornamental masonry fireplace firebox. The service includes host-interface preparation, wetting, installation, supported cold cure, authorized temporary-holder removal, defect closure and signed lining-stage handover. It is a narrower category within CPC 3.0 54590; the classification does not define the PCR identity.

Exclude see-through fireplaces, optional arches/notching, combustion-air-hole drilling or air-kit installation, custom brick cutting, new shell/foundation/chimney construction, industrial furnace whole-lining services, first firing or operating commissioning, later relining and demolition. The accepted output carries no ready-to-fire, whole-fireplace, heating-efficiency or fire-rating claim. Use actual current compatible model, host and mortar instructions; the researched Mason-Lite document is printed REV 20090301a despite the URL filename2015 and upload path2022. It establishes an observed route, not universal current design applicability.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.mortared-prefabricated-firebrick-firebox-lining-installation-services |
| classification_refs | CPC 3.0 54590; proposed narrower relation |
| covered_products | Initial single-opening factory firebrick four-panel set lining installation at cold-cured lining-only acceptance |
| excluded_products | See-through/arch/air-kit/cut-panel routes; shell and chimney manufacture; full furnace lining; later relining; first firing |
| representative_product | One compatible hearth, rear and left/right side-panel set mortared into an accepted unlined host |
| production_route | Receive compatible panels and mortar; verify host; prepare/wet; bed and join panels; support through actual specified cure; remove holders and correct defects; accept lining stage |
| market_state | Installed cold-cured lining stage, with signed transfer of remaining fireplace commissioning responsibility |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete initial installed four-panel single-opening firebox lining service |
| How much | 1 item of the complete declared lining installation |
| How well | Compatible specified model, undamaged correct panels and seams; intended rear void maintained; actual mortar cure and stability accepted; temporary holders removed under authorization; defects closed |
| How long or cycle | One initial receipt-to-cold-cured lining acceptance cycle, including support and removal. Reusable provision has separately indexed production, service-use/upkeep and termination phases; no fireplace operating lifetime is assumed |
| reference_flow_link | `accepted_lining` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted cold-cured single-opening firebox-panel lining installation service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Manufacturer; fireplace/lining model and revision applicability; host acceptance; opening geometry; panel part IDs/dimensions; mortar identity/supply state and compatibility; specified bedding/seams/void layout; cure and stability evidence; holder owner/removal gate; project and jurisdiction; defects; remaining commissioning owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One reference flow is one complete accepted declared lining installation, not one panel or brick. Different models, host geometries and mortar configurations remain separate evidence strata. Use cp_acceptance; do not infer any mass-to-count equivalence. |
| material_state | panels; mortar; water; material_returns; solid_residuals; washwater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep gross physical mass and actual supply/wet/dry state. Weigh supplied water in kg or retain a measured source-specific volume-to-mass relationship; no assumed density or dry-to-wet mortar conversion. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted existing compatible unlined host shell and delivered finished panels/mortar; host geometry, dryness/cleanliness, access and responsibilities documented |
| starting_condition_role | Host is an accepted installation interface; this service adds the lining and its preparation/cure burdens |
| product_classification_scope | Narrower ornamental fireplace lining construction service within CPC 3.0 54590 |
| recursive_input_rule | A purchased same-category installation service is recorded at its actual supplied gate with included responsibilities declared; do not recursively reproduce or simultaneously model the same provider work |
| upstream_dataset_requirement | Finished panel and actual mortar production, separately burdened consumables, actual water/energy/logistics and bounded asset provision need compatible upstream coverage; supplier-included work/packaging counted once |
| disclosure | Separate host shell prior production from attributable preparation; report cure/removal owner, retained-stock burden, all reject routes, asset provision coverage and remaining commissioning exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| installation_gate | install_lining | Start only at accepted compatible unlined host; include cleaning/wetting, bedding and seams, supported cure, authorized holder removal, corrections and lining-only acceptance. Host repair outside this route requires its own declared dataset; do not hide attributable preparation. | `mason-lite-firebrick-rev20090301a` |
| void_and_support | install_lining | Use actual matching instructions for hearth, rear, sides and joints. Preserve the intentional rear unsupported gap; do not full-bed or fill it by assumption. Cure support remains owned until authorized removal and stable acceptance. | `mason-lite-firebrick-rev20090301a` |
| provision_boundary | install_lining | Include actual holder/tool/access production, upkeep, use, delivery/removal and terminal provision responsibility through declared service life or supplier service coverage. Identify target and other consuming jobs/periods, assign one owner and physical-use driver. Single-use provision receives full applicable burden. |  |
| no_operating_stage | accepted_lining | Stop at cold lining-stage transfer; no initial firing, fuel use, operation, future relining or whole-fireplace performance is inside this output. | `mason-lite-firebrick-rev20090301a`; `un-cpc3-54590` |
| asset_period_linkage | holders_tools; logistics | For each reusable provision asset, index production/procurement, deployment and service-use periods, upkeep/replacement events, and removal/terminal phase; link every input, event and supplied service share to those periods and one asset owner. Actual initial lining cure/removal remains within this job cycle; later reusable-asset periods belong only to declared provision attribution, not fireplace operation. Unresolved replacement or terminal responsibility blocks a finalized data package. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Compatible refractory bedding and joint mortar at actual supply state (`mortar`)

Process / prospective direction / type: `install_lining` / `inputs` / `product`.

Identify the actual mortar and compatibility authorization. Record hearth/rear/side/seam application separately; mixing is embedded installation work. Do not use blanket rear full-bed coverage or a universal water ratio. Range evidence need: Actual compatible mortar product data, state, issued/unused/return/waste masses and job-specific application records are needed; no kg-per-set or joint-consumption interval is evidenced.

- Collection subject: Compatible refractory bedding and joint mortar at actual supply state
- Flow property / unit: Mass / kg
- Amount rule: Measured gross attributable mortar supply mass, with purchased dry/ready-mixed state distinct from added site water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `mason-lite-firebrick-rev20090301a`

#### Collection requirement: Attributed temporary-holder, tool and access provision (`holders_tools`)

Process / prospective direction / type: `install_lining` / `inputs` / `product`.

Includes actual curing placeholders, trowels, sponges/mallets and access equipment as used. Identify owner, deployment, cure retention, authorized removal, reuse and terminal provision responsibility. Other jobs/periods share reusable assets only under a complete declared denominator. Range evidence need: Actual asset IDs, purchased/rented condition, lifespan/use-capacity evidence, use shares and replacement/removal records are needed; source shows support duty but supplies no item lifetime or allocation factor.

- Collection subject: Attributed temporary-holder, tool and access provision
- Flow property / unit: Number of items / item
- Amount rule: Actual item provision allocated by documented physical service-use share; record each distinct asset exchange and included lifecycle coverage
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `mason-lite-firebrick-rev20090301a`

#### Collection requirement: Actual separately supplied installation energy (`energy`)

Process / prospective direction / type: `install_lining` / `inputs` / `product`.

Conditional umbrella for powered mixing/lighting/cleanup or other actual equipment; manual work implies no invented electricity. Provider-included energy is not separately reburdened. Required Energy support identity is verified for each eventual concrete exchange. Range evidence need: Actual meter/tool duty and site supply records, geography/provider and uncertainty are needed; no default kWh-per-set or fuel factor is supported.

- Collection subject: Actual separately supplied installation energy
- Flow property / unit: Energy / kWh
- Amount rule: Metered actual attributable electrical energy; enumerate other actual energy carriers with their own compatible units and identity if present
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

#### Collection requirement: Actual separately burdened delivery and collection transport service (`logistics`)

Process / prospective direction / type: `install_lining` / `inputs` / `product`.

Include attributable deliveries, replacements, asset movements, returns and waste collection to declared receipt gates. Purchased provider coverage may already include vehicles and fuel; document one owner. Transport support remains a foreground verification requirement. Range evidence need: Actual route distances, delivered/returned load masses, loading shares and provider coverage are needed; no assumed route distance, load factor or transport interval is evidenced.

- Collection subject: Actual separately burdened delivery and collection transport service
- Flow property / unit: Transport / t*km
- Amount rule: Actual freight activity by mass, distance, vehicle/provider and load share; preserve concrete provider unit if different
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_logistics`

#### Collection requirement: Separately procured protection and cleaning consumables (`consumables`)

Process / prospective direction / type: `install_lining` / `inputs` / `product`.

Conditional umbrella for actual protective sheeting, wipes or cleaning materials. Supplied panel/mortar packaging is recorded physically with receipts and residuals, but its included upstream burden is not duplicated by creating a second purchase. Range evidence need: Actual material identities, invoices/issues, stock and cleanup records are required; no universal consumable or packaging mass interval is established.

- Collection subject: Separately procured protection and cleaning consumables
- Flow property / unit: Mass / kg
- Amount rule: Gross actual separately procured consumable mass with identity and attributable share
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual usable panel, mortar or consumable returns leaving custody (`material_returns`)

Process / prospective direction / type: `install_lining` / `outputs` / `product`.

Only actual outward product custody movements qualify. Rejected components returned to supplier retain actual product/waste legal state and declared upstream burden treatment. Retained closing stock is an internal balance with carried-forward burden, never this exchange. Range evidence need: Actual return weigh tickets, part/state identity, destination, supplier acceptance and burden disposition are needed; no return fraction or universal reuse credit is supported.

- Collection subject: Actual usable panel, mortar or consumable returns leaving custody
- Flow property / unit: Mass / kg
- Amount rule: Measured gross outward usable returns by actual identity/state; count once in material balance
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual solid installation rejects and supplier packaging waste (`solid_residuals`)

Process / prospective direction / type: `install_lining` / `outputs` / `waste`.

Record damaged irrecoverable panels, cured/unused mortar discarded, packaging and contaminated consumables when actual. Corrections are linked to install_lining; internal rework is not an outward waste. No useful coproduct or avoided production is assumed. Range evidence need: Actual segregation/weighing, hazard classification, receiver and replacement records are needed; no default breakage, mortar loss or packaging interval is evidenced.

- Collection subject: Actual solid installation rejects and supplier packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated outward waste masses by material, hazard state and declared receiver
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

#### Collection requirement: Actual collected cleanup washwater and slurry (`washwater`)

Process / prospective direction / type: `install_lining` / `outputs` / `waste`.

Record collected washwater/slurry as waste to its actual recipient. Separate retained/evaporated water and captured solids; do not also emit the same captured pollutants to the environment. Uncollected discharge requires actual authorization/medium/substance records. Range evidence need: Actual collection mass, composition, receiving route and water/solids reconciliation are needed; no wastewater yield or pollutant-concentration interval is supported.

- Collection subject: Actual collected cleanup washwater and slurry
- Flow property / unit: Mass / kg
- Amount rule: Measured collected outward aqueous waste mass and actual composition/state by receiver
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

#### Collection requirement: Actual characterized installation releases to declared environmental medium (`releases`)

Process / prospective direction / type: `install_lining` / `outputs` / `elementary`.

Conditional umbrella for demonstrated fugitive material or direct wastewater release; no drilling/cutting dust, combustion emission or generic VOC is presumed in this uncut cold route. Each actual elementary exchange needs verified substance identity and medium. Range evidence need: Actual material safety/composition, measured release characterization, species/size fraction, medium and uncertainty are required; no emission factor or generic dust amount is evidenced.

- Collection subject: Actual characterized installation releases to declared environmental medium
- Flow property / unit: Mass / kg
- Amount rule: Actual measured or authorized characterized substance mass, separately by species and receiving medium
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
| install_lining | Install, cold cure and release a four-panel firebox lining | required | Actual first installation in accepted compatible single-opening unlined host | Integrate panel and mortar inputs; includes embedded mixing, cure/support/removal, correction loop and final lining-only transfer | 1 item accepted_lining |

The one independent node owns all installation and reject/correction events. Separate panel production and mortar manufacture are upstream supply responsibilities. Site mortar mixing has no independent mixture handoff here. Optional energy, additional consumables and releases are recorded only when actual. No separate forming, chemical production or full fireplace construction node is inferred.

### Process: Install, cold cure and release a four-panel firebox lining (`install_lining`)

#### Inputs

##### Product flows

###### Factory-made compatible refractory firebrick lining panels (`panels`)

Record the actual hearth, rear, left and right panel part identities, complete supplied set and any replacement panels. Count panel IDs for completeness but model their actual supplied mass; upstream panel production is included once. Range evidence need: Supplier model-specific part masses or calibrated receipts/issues, replacement count and uncertainty are required; the instruction provides no panel mass or universal material interval.

- Selected flow: Factory-made compatible refractory firebrick lining panels
- Flow property / unit: Mass / kg
- Amount rule: Measured gross attributable panel mass received/issued, including replacements; do not net outward returns and count them again
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `mason-lite-firebrick-rev20090301a`



###### Supplied wetting, mortar mixing and cleanup water (`water`)

Record separately procured water at actual provider state. Wetting demand and actual cleaning/mixing practice determine the amount; water discharged to collection is not automatically an elementary emission. Range evidence need: Weighed or metered task records with measured conversion, actual mixing instruction and cleanup evidence are needed; no universal water amount or ratio is established.

- Selected flow: Supplied wetting, mortar mixing and cleanup water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable water mass by wetting/mixing/cleanup purpose, without duplicating premixed mortar water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `mason-lite-firebrick-rev20090301a`



##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cold-cured single-opening firebox-panel lining installation service (`accepted_lining`)

The actual complete four-panel lining service leaves this node after matching compatibility, layout/void, actual cure/stability, authorized holder removal and defect closure are signed. It is the sole final reference output; incomplete/rejected sets do not count. Range evidence need: The reference definition fixes 1 item, not an empirical yield range. Actual accepted set count, configuration and rejected attempts must be collected; no success-rate or service-life interval is evidenced.

- Selected flow: Accepted cold-cured single-opening firebox-panel lining installation service
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `mason-lite-firebrick-rev20090301a`



##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_service | install_lining | Assign all attributable receipts, preparation, installation, cure/support/removal and correction burdens to accepted complete lining service. Unresolved rejects are not accepted output; failed attempts are retained in actual job attribution. No useful co-product is presumed. |  |
| gross_stock | panels; mortar; consumables; material_returns | Reconcile opening stock plus gross receipts with installed consumption, actual outward usable returns, wastes and closing stock by material/state. Retained closing stock carries its disclosed upstream burden forward and is not an outward exchange. Never net a return in input then subtract/count it again. |  |
| rework_owner | install_lining | Link each off-spec panel/adhesion/seam/void failure to its corrective loop or actual product return/waste exit and producing-node event. Preserve replacement, cleanup, support extension and repeat logistics burdens; no automatic recovery or avoided-product credit. |  |
| shared_provision | holders_tools; energy; logistics | For each reusable asset/provider, declare all job/period consumers and bounded provision service life, measured physical use driver and evidence. Allocate production/upkeep/removal/terminal provision once by target physical use over total compatible service capacity. State uncertainty and owner of future termination; supplier-included provision/energy/logistics must not be counted twice. |  |
| period_allocation | holders_tools; logistics | Record period-specific provision shares and their physical-use/capacity evidence for production, service-use, upkeep/replacement and terminal events. Reconcile target-job and other-consumer shares to the complete bounded provision lifecycle; count each event once across periods. No universal asset lifetime or annualization is imposed, and no initial cure/removal duty is transferred out of the lining acceptance gate. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | install_lining | component/consumable inputs and usable returns | receipt_issue_return_stock | job_id; material_id; part_id; supply_state; lot_id; opening_stock_kg; gross_receipt_kg; issue_kg; installed_kg; outward_return_kg; waste_kg; closing_stock_kg; burden_owner | Weigh or use traceable supplier batch masses; identify hearth/rear/sides and exact mortar supply state. Reconcile gross job ledger by material; distinguish return destination from retained stock. Attribute all actual correction inputs and retain closing-stock burden. | kg | Each receipt, issue, return, correction and closing count | Entire initial cycle through holder removal and acceptance | One declared fireplace job and its suppliers | per reference flow | Balances and custody tickets; scale calibration; missing masses/state conversions and uncertainty; no double packaging burden |
| cp_water | install_lining | supplied water | task_meter_record | job_id; purpose; provider; supply_state; water_mass_kg; measured_volume; measured_density; conversion_method; wastewater_kg; retained_water_kg | Weigh water or meter actual task volume and retain measured compatible conversion. Separate wetting/mixing/cleanup and supplier premix water; reconcile waste/retention without inventing evaporative emissions. | kg | Every task or task-separated meter interval | All wetting, mixing and cleanup in initial cycle | Declared site supply and install_lining | per reference flow | Meter calibration; conversion/state basis; wastewater boundary; missing data and uncertainty |
| cp_assets | install_lining | holder/tool/access provision | asset_service_log | job_id; asset_id; owner; provision_scope; other_consumer_jobs; service_periods; production_period; use_period; upkeep_replacement_period; terminal_period; event_period_id; period_share; service_life_capacity; actual_use_driver; target_use; total_use; maintenance; removal_authorization; removal_date; terminal_owner | Identify each holder/tool/access asset and all target/other job consumers across the declared provision life. Use measured compatible physical-use count or equipment-time share; assign full burden if single use. Cover production, upkeep, transport, deployment, retained cure support, removal and terminal responsibility once. Link actual input/service/event IDs to production, service-use, upkeep/replacement and terminal period IDs; record period-specific physical-use shares and reconcile all consumers without double attribution. Initial lining cure/removal stays in the job gate. | item | Deployment, cure release, removal and provision update | Initial cycle plus declared asset provision service-life denominator | Target node and named other jobs/service periods | per reference flow | Asset register; physical-use evidence; lifecycle supplier coverage matrix; capacity uncertainty; full share reconciliation |
| cp_energy | install_lining | actual supplied energy | meter_equipment_record | job_id; equipment_id; carrier; provider; geography; meter_start; meter_end; attributable_energy; unit; included_provider_scope | Measure actual equipment energy by job and subtract only evidenced non-job activity. Preserve each actual carrier and its unit; do not infer energy from manual labour or separately add supplier-included fuel. Verify actual support chain before final exchanges. | kWh | Each powered task or metering interval | Initial preparation through cleanup/removal | Actual foreground equipment and supply | per reference flow | Meter/provider evidence; allocation coverage; exact Energy support gap; uncertainty and missing tasks |
| cp_logistics | install_lining | attributable freight provision | trip_load_record | job_id; trip_id; provider; origin; receiver; distance_km; load_mass_t; load_share; vehicle; included_fuel; asset_provision_scope | Use actual dispatch/receipt and route records for delivery, replacement, returns, assets and collected wastes. Derive actual provider-unit service from physical loads and distance; document vehicle/fuel coverage and one event owner. | t*km | Every attributable trip leg | Receipt through final removal/collection | Declared site and actual supply/receiver routes | per reference flow | Traceable trip/load evidence; sharing denominator; provider coverage; support-unit verification and uncertainty |
| cp_acceptance | install_lining | reference service | signed_lining_acceptance | job_id; host_model; instruction_revision; compatibility; panel_part_ids; mortar_id; seam_void_layout; cure_evidence; support_owner; removal_authorization; holder_removed; defects_closed; accepted_count; handover_owner | Inspect the complete actual hearth/rear/two-side configuration and compatible mortar against matching current instructions. Retain intended rear void evidence, cure/stability authorization and holder removal record; count only complete accepted sets after defects close. Sign remaining commissioning custody. | item | Every installed set and final defect closure | Complete initial cold installation cycle | One declared compatible single-opening firebox | per reference flow | Signed inspection/cure/holder-removal evidence; no numerical universal cure; rejected attempts excluded from count |
| cp_residuals | install_lining | outward waste solids and washwater | segregated_waste_custody | job_id; event_id; defect_id; material_id; wet_dry_state; mass_kg; hazard_class; composition; receiver; transfer_id | Weigh segregated solid and collected aqueous waste; record actual product-versus-waste status, composition and recipient. Link defect/rework movements to install_lining and reconcile with gross materials/water; keep captured pollutants out of elementary release totals. | kg | Every segregation and outward transfer | Initial cycle corrections through cleanup/removal | Foreground job and actual first receiving gate | per reference flow | Calibrated tickets; receiver/hazard records; solids/water basis; missing composition and uncertainty |
| cp_releases | install_lining | actual environmental releases | substance_medium_record | job_id; event_id; substance; species_size_basis; receiving_medium; measured_mass_kg; method; captured_fraction; uncertainty | Characterize only actual direct releases by substance/particle fraction and receiving medium using traceable measurement or justified composition model. Distinguish captured wastes and supplier emissions; no presumed cutting/combustion or broad pollutant UUID. | kg | Each actual emitting/discharge event | Initial cold cycle only | Declared direct environmental boundary | per reference flow | Method/speciation/medium evidence; detection limits; capture reconciliation; actual verified identities before exchange construction |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_attribution | all inventory rows | Collect the full declared initial job cycle, including correction and retained-support/removal burdens. Attribute each physical event once to its actual accepted complete lining output; retain rejected attempt burdens and report stock carry-forward separately. Express each resulting exchange per reference flow without assuming panel count or mass equivalence. | Actual node-specific protocols; acceptance ledger; event ownership | Exchange amounts per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| current_compatibility | install_lining | Check actual host/lining/mortar instruction applicability; historical source revision alone is insufficient. Keep model strata and no universal cure/time/fire-rating conversion. | Manufacturer compatibility and project authorization; cp_acceptance |
| closure_quality | all inventory rows | Retain whole-cycle receipts/issues/returns/stock, defects, cure extension, holder removal and all receiver coverage. Missing quantity, Range evidence or actual identity remains an explicit data gap, never assumed zero. | Node-specific protocols and custody balances |
| support_quality | energy; logistics; holders_tools | Confirm actual exchange property/unit and provider boundaries; Count support does not verify Energy, Duration or Transport. Retain uncertain provision life and shared-driver sensitivity. | Support rows, asset register, supplier coverage matrix and meter/trip records |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| accepted_gate | accepted_lining | Require actual compatible host/model and panel/mortar IDs, undamaged complete set, accepted bedding/seams/intended void, actual cure/stability, authorized holder removal and closed defects; count 1 item only at signed lining-stage gate. | `mason-lite-firebrick-rev20090301a` |
| inventory_closure | all inventory rows | Reconcile materials and water with installed amount, outward usable returns, waste, characterized releases and retained closing stock; do not count stock as product output or double subtract returns. Missing data are disclosed rather than invented zero. |  |
| ownership_check | holders_tools; logistics; energy | Verify shared consumers/service-life driver, complete provision/removal/terminal duty and one owner per physical burden. No cure support disappears at receipt; no duplicate supplier packaging/energy/transport. |  |
| identity_range | all inventory rows | Require actual concrete UUID/property/unit support before final exchange construction; resolve semantic umbrellas from real records. Retain source-backed Range or specific actual-evidence need on every card; no near-match identity or fabricated numeric range. |  |
| stage_limit | accepted_lining | Dataset metadata must distinguish cold lining installation from whole fireplace construction and first firing/operation; remaining commissioning custody is explicit. | `un-cpc3-54590` |
| period_closure | holders_tools; logistics | Require asset and period IDs linking production, service-use, upkeep/replacement and termination/removal events with period-specific attribution. Check share closure across all consumers/periods and single event ownership. Unresolved service-life, replacement or terminal duty blocks finalized provision exchange construction; no fireplace lifetime claim follows from asset accounting. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for accepted initial cold-cured firebox-panel lining installation |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections |
| allowed_use | Actual declared compatible single-opening four-panel installation jobs at lining-stage gate |
| excluded_use | Whole fireplace or furnace production/performance; ready-to-fire commissioning; see-through/air-kit/cut-panel routes; future relining; universal material/cure factors |
| required_metadata | Model/part/revision/mortar compatibility; host acceptance; location/time; layout/void; actual cure/stability/removal; accepted count; provider and residual custody |
| required_quality_disclosure | Gross stock and reject/correction coverage; unverified concrete flow/support identities; numerical Range gaps; asset-life attribution; upstream provider coverage; remaining commissioning responsibility |
| update_trigger | Changed compatible model/material/instruction, void/support/cure or acceptance gate; new measured ranges/UUID evidence; changed supplier or residual/provision responsibility |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| mason-lite-firebrick-rev20090301a | handbook | Masonry Fireplace Industries / Mason-Lite, Refractory Firebrick Installation Instructions, printed REV 20090301a, pp1-3. https://www.mason-lite.com/wp-content/uploads/2022/05/Firebrick-Panel-Installation-2015.pdf | Observed single-opening component/bedding/void/support route and alternative exclusions; matching current project/model/mortar applicability must be supplied |
| un-cpc3-54590 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed p292, code54590. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official category label and ornamental-fireplace/refractory-lining inclusion; narrower partial coverage |
