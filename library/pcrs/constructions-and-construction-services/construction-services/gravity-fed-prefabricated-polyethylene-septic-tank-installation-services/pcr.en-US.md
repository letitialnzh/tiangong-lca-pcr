---
pcr_id: pcr.gravity-fed-prefabricated-polyethylene-septic-tank-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gravity-fed prefabricated polyethylene septic-tank installation services

## 1. Scope and Applicability

This PCR covers first installation of a factory-made polyethylene gravity septic tank in a nontraffic location with demonstrated dry, non-buoyant site conditions. The accountable job includes utility clearance, actual excavation and level support preparation, vessel inspection/lowering, compatible inlet/outlet short stubs and sealing/tee connections, required access risers/lids, suitable backfill and compaction, surface drainage grading and erosion-resistant finish, and the actual specified installation-stage inspection/test. The gate is an accepted installed vessel bounded by explicitly located inlet and outlet stub endpoints. A tank by itself does not deliver a functioning complete septic treatment/dispersal system.

Exclude onsite tank manufacture, traffic-load or high-groundwater anchorage routes, pumps/dosing/aeration/disinfection units, drainfields, building drains, ongoing wastewater treatment, pumping-out and later maintenance. Actual permit/design and model-specific approved instructions determine compliance; the cited manufacturer example establishes route responsibilities rather than universal dimensions or test settings. If the site needs excluded buoyancy or drainage-control works, route fit must be reassessed before applying this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.gravity-fed-prefabricated-polyethylene-septic-tank-installation-services |
| classification_refs | cpc:3.0:54342; narrower than Septic system installation services |
| covered_products | Stub-bounded accepted installation of one actual factory polyethylene gravity septic tank with civil support, connection and reinstatement work |
| excluded_products | Whole operating septic systems and dispersal fields; pump/treatment units; tank production; traffic or buoyancy-control installations; later maintenance |
| representative_product | Actual approved IM-1060-type gravity tank installation at a dry qualified nontraffic site; model and local approval must be declared |
| production_route | Job-specific excavation/support, factory vessel integration, connection, backfill/compaction/finish and actual installation acceptance |
| market_state | Completed civil/connection installation service at defined stubs; factory tank is an upstream product input |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted gravity-fed nontraffic factory polyethylene septic-tank installation at defined stubs |
| How much | 1 item accepted actual installation |
| How well | Approved actual model/capacity/compartments and gravity duty; sound vessel; compatible correctly levelled stubs, tees/gaskets/risers/lids; accepted support/backfill/finish and required installation tests |
| How long or cycle | One job from first site preparation through signed handover, including attributable damaged parts, failed installation, repair and retest. Asset attribution additionally indexes production, service periods across other jobs, maintenance/replacement and final removal. Future tank operation is separate. |
| reference_flow_link | `accepted_tank_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted gravity-fed nontraffic factory polyethylene septic-tank installation at defined stubs |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Job/site and permit/design revision; manufacturer/model/capacity/compartments; gravity configuration; dry-site soil/groundwater qualification and nontraffic use; exact stub endpoints/inverts and dimensions with units; actual native/imported support/backfill, cover, risers/lids and finish; actual test/inspection method, units, tolerance, approving authority and acceptance record; exclusions and downstream interface owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| counted_handover | accepted_tank_installation | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One accepted installation is counted only after its complete stated civil/connection gate passes; capacity is a design qualifier and cannot convert different tank models into equivalent counts. |
| physical_measurements | all inventory rows | Actual exchange property | Actual recorded unit | Retain each quantity in its physically measured unit: mass, energy, service duration, transport work or actual equipment service unit. Verify each property-to-unitgroup chain for final binding. Record actual density/moisture and calibrated measurement if converting soil or water volume to mass; never infer mass from tank capacity or replace time/energy with count. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | An approved qualified nontraffic site and an upstream factory tank at its declared supply gate. In-situ native soil is environmental starting stock; job-specific excavation, soil handling, support and reinstatement are foreground responsibilities. |
| starting_condition_role | Declared site condition and upstream purchased-product gate; neither zero-burden new excavation nor a complete operating septic installation |
| product_classification_scope | Semantic tank-installation subset of CPC3.0 54342, with inlet/outlet stub limits |
| recursive_input_rule | Do not recursively consume this same accepted final service for the same job. An independently supplied excavation/support service is a distinct bounded provider input only when its real work, quantities, responsibility and acceptance handoff exist; otherwise its operations stay inside tank_installation. |
| upstream_dataset_requirement | Factory tank and actual separate materials require cradle-to-supply datasets. Machinery/provider coverage must state production, use/maintenance and removal coverage and fill real gaps once; delivery/packaging included upstream must not be added twice. |
| disclosure | Declare actual scope owner, supply-kit bill, soil custody, field methods, all site work, installation acceptance, failures/retests, stock carry-forward and machinery service-period attribution. Future wastewater operation and downstream drains remain separately owned. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| site_fit | tank_installation | Require approved actual utilities/soil/groundwater/nontraffic assessment. Include excavation and level compacted support. Unsuitable soil removal and suitable replacement are measured. Reject route use when excluded buoyancy/traffic works are actually necessary. | `ads-septic-tank-installation-2024` |
| complete_assembly | tank_installation | Reconcile factory bill of supply against vessel, gaskets, compatible stubs/tees, screws, lids and risers; record only genuine additional components separately. Lower undamaged tank, connect per actual permitted arrangement, support haunches, alternate sidewall backfill before top cover, compact and finish with drainage grading and erosion-resistant vegetation. | `ads-septic-tank-installation-2024` |
| water_and_tests | tank_installation | Require only actual manufacturer/jurisdiction installation inspection/test obligations with recorded units and limits. The source does not require universal pre-backfill water filling; protective filling applies to an excavation at risk of filling with rain/other water. Record actual protection/test water and destination. Oregon riser test figures and vacuum warnings are not universal defaults. | `ads-septic-tank-installation-2024` |
| period_assets | tank_installation | Index job phases preparation, lowering/connections, backfill/finish, inspection, repair/retest and handover. Link each shared excavator/compactor/tool asset to all consuming jobs and reporting periods, including production, service/maintenance/replacement and termination. Actual bounded provider coverage or evidence-based complete-life asset attribution must include capital and removal burdens without duplicating fuel/materials. |  |
| soil_custody | tank_installation | Track excavated native soil, onsite reused backfill, imported fill, closing stock and actual export by source/destination and actual product or waste status. Onsite transfer is a balance, not a new purchased soil input or co-product credit. Waste handoffs and characterized direct releases remain distinct. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Separately supplied short pipe stubs and allowed tees (`extra_pipe_tees`)

Process / prospective direction / type: `tank_installation` / `inputs` / `product`.

Inlet/outlet stub endpoints and actual code-approved tee arrangement define this component boundary; building drain and drainfield pipe are excluded.

- Collection subject: Separately supplied short pipe stubs and allowed tees
- Flow property / unit: Mass / kg
- Amount rule: Record mass for each actual distinct pipe/tee material and dimension outside the factory kit, retaining length/count and traceable mass conversion records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual stub endpoint/length/diameter/wall thickness units, pipe/tee bill, measured mass or verified linear mass and local configuration are required.

#### Collection requirement: Separately supplied access risers lids and fasteners (`extra_access_parts`)

Process / prospective direction / type: `tank_installation` / `inputs` / `product`.

Access components required by the actual cover/model and local approval are integrated into the installed tank.

- Collection subject: Separately supplied access risers lids and fasteners
- Flow property / unit: Mass / kg
- Amount rule: Record each actual distinct riser/lid/fastener component mass outside factory supply; identify replacement separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual compatible model/material/dimensions, quantities and measured or supplier-certified mass are required; no universal riser height or screw mass.

#### Collection requirement: Actual separately consumed joint and connection products (`joint_consumables`)

Process / prospective direction / type: `tank_installation` / `inputs` / `product`.

Joinery consumables depend on the actual connection; supplied factory seals are not counted again. Chemical composition is recorded for any actual direct release.

- Collection subject: Actual separately consumed joint and connection products
- Flow property / unit: Mass / kg
- Amount rule: Record actual gross job receipts/issues for each distinct product identity; separately reconcile installed/consumed disposition, real outward returns, waste and retained closing stock. Consumption or placement is a disposition, never an alternate net input basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual approved connection method, product composition, issued/remaining quantities and waste records are required; no blanket adhesive or solvent dosage. Gross receipt/issue and all custody dispositions must close for the same lot/state.

#### Collection requirement: Actual imported bedding and backfill products (`imported_support_fill`)

Process / prospective direction / type: `tank_installation` / `inputs` / `product`.

Suitable native support may avoid imported bedding; imported material is included when actual soil support/backfill requires it. In-situ native soil movement remains in the soil ledger.

- Collection subject: Actual imported bedding and backfill products
- Flow property / unit: Mass / kg
- Amount rule: Record actual gross job receipts/issues for each distinct product identity; separately reconcile installed/consumed disposition, real outward returns, waste and retained closing stock. Consumption or placement is a disposition, never an alternate net input basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_soil`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual excavation/support design, native-soil suitability, imported material weigh tickets/moisture, and field placed/stock balance are required; model examples do not prescribe universal volume or density. Gross receipt/issue and all custody dispositions must close for the same lot/state.

#### Collection requirement: Actual separately supplied erosion-resistant finish materials (`finish_products`)

Process / prospective direction / type: `tank_installation` / `inputs` / `product`.

Surface finish is part of the actual installation; record supplied seed, matting or other required materials only when actually used.

- Collection subject: Actual separately supplied erosion-resistant finish materials
- Flow property / unit: Mass / kg
- Amount rule: Record actual gross job receipts/issues for each distinct product identity; separately reconcile installed/consumed disposition, real outward returns, waste and retained closing stock. Consumption or placement is a disposition, never an alternate net input basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_soil`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual approved finish specification, distinct product identities and weighed issues/stock are required; no universal seeding or matting rate. Gross receipt/issue and all custody dispositions must close for the same lot/state.

#### Collection requirement: Actual machinery fuel supplied to installation (`installation_fuels`)

Process / prospective direction / type: `tank_installation` / `inputs` / `product`.


Actual upstream fuel supplied to this node, before usable outward exits. Apply fuel_supply_fate to retain the supply burden of nonreturned waste/loss and derive burned activity separately. Keep actual fuel grade, equipment duty, provider coverage, density/state and measurement uncertainty.

- Collection subject: Actual machinery fuel supplied to installation
- Flow property / unit: Mass / kg
- Amount rule: Actual upstream supplied fuel mass G_fuel divided once by the independently measured positive accepted lot quantity D_fuel in the declared reference unit; retain all exclusive fuel outlets and derive actual burned B_fuel separately under section 8.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual equipment/task meter records, fuel type, refuelling and stock logs, density/temperature and provider coverage are required; no generic excavator consumption factor.

#### Collection requirement: Actual reusable excavator compactor and tool provision (`equipment_provision`)

Process / prospective direction / type: `tank_installation` / `inputs` / `product`.

Excavator, compactor, lifting gear, hole saw and hand/test tools may be shared across other jobs/periods. Provider-supplied services and owned assets need explicit nonduplicated coverage; service identity is not machine mass.

- Collection subject: Actual reusable excavator compactor and tool provision
- Flow property / unit: Duration / h
- Amount rule: Record each distinct actual asset/service in its contract or measured service unit; h applies only to true duration-based provision. Link complete-life attributable production/maintenance/removal and actual service coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual asset id, installation task hours, all lifetime service periods/jobs, replacement/termination records and verified provider coverage are required; no universal lifetime, hours or ownership allocation.

#### Collection requirement: Actual external transport and waste haulage services (`transport_service`)

Process / prospective direction / type: `tank_installation` / `inputs` / `product`.

Vehicle loading and actual empty/repositioning legs follow the chosen documented transport dataset; onsite earthmoving remains the installation task.

- Collection subject: Actual external transport and waste haulage services
- Flow property / unit: Transport work / t km
- Amount rule: Record each actual route/provider mass and distance including tank/material delivery, actual return and waste movements; add only transport outside upstream/service coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual consignment route, payload, distance, vehicle/provider and dataset included-leg boundaries are required; no generic kilometres or count conversion for freight.

#### Collection requirement: Actual usable products returned out of job custody (`usable_product_returns`)

Process / prospective direction / type: `tank_installation` / `outputs` / `product`.

Usable components, packaging or legally transferred clean soil leave as product only with actual accepted custody and intended-use evidence; retained closing stock is not an outward exchange. For native-origin clean-soil export, preserve site/excavation provenance in cp_soil and the same transfer_id in cp_components outward-custody records; no original purchased-product lot or upstream soil production burden is required. For counted tank/gasket returns measured in kg, retain the matching item/serial count and actual measured or traceable product-specific mass for the same transfer_id; no default count-to-mass conversion.

- Collection subject: Actual usable products returned out of job custody
- Flow property / unit: Mass / kg
- Amount rule: Record each distinct usable returned product at gross outward quantity with original incoming lot OR native-site excavation provenance and the same transfer_id. Pair native-origin soil with cp_soil. For counted vessel/gasket returns in kg, require actual measured or traceable product-specific mass and matched item count; no default count-to-mass conversion. Never net input then count the same return again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual receiving-party acceptance, usable condition, component identity/mass and transfer/return note are required; no assumed reuse credit or recovery fraction. Native soil needs cp_soil source-state/provenance and actual mass evidence. Returned counted vessels/gaskets need matching actual mass evidence and transfer_id.

#### Collection requirement: Actual discarded components packaging and excavated material (`solid_waste`)

Process / prospective direction / type: `tank_installation` / `outputs` / `waste`.

Waste custody includes rejected vessels and unsuitable/exported soil that actually has waste status. Supplier-managed packaging/waste already covered upstream is reconciled; usable returns are separate.

- Collection subject: Actual discarded components packaging and excavated material
- Flow property / unit: Mass / kg
- Amount rule: Record each distinct discarded tank/part, offcut, packaging or actual waste soil by mass, composition/contamination and authorized receiving route.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual waste classification, weigh/destination tickets and included-service evidence are required for each stream; no generic all-soil waste label or displaced-production credit.

#### Collection requirement: Actual characterized releases to the environment (`direct_releases`)

Process / prospective direction / type: `tank_installation` / `outputs` / `elementary`.

Potential machine exhaust, dust, joint-product release or lawful direct water release requires actual substance/media evidence. Waste shipments are not elementary emissions; background/provider-covered emissions are not added twice.

- Collection subject: Actual characterized releases to the environment
- Flow property / unit: Mass / kg
- Amount rule: Record each actual emitted substance and receiving medium separately from measured activity or a compatible documented factor; retain dust size/speciation and original factor basis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual substance identity, medium, measured or sourced factor and activity, abatement and uncertainty are required; broad exhaust/dust or discharged water mass cannot stand in for a pollutant UUID.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tank_installation | Civil preparation, tank integration and installation acceptance | required | All in-scope jobs; protection/test water, extra components and replacement/retest use depend on actual records | foreground installation and assembly integration | 1 item accepted stub-bounded tank installation |

The single node owns excavation/support, vessel integration, backfill/finish and the inspection/repair loop. Damaged tank, incompatible connection, failed inspection or leakage is an off-spec state inside tank_installation until repaired and retested, returned under actual product custody, or discarded via the actual waste destination. A failed state is never an accepted second installation. No document receipt, permit or test certificate is a separate production node. Variable cards below expand to zero, one or multiple independently identified actual exchanges; heterogeneous materials, fuels, waste types or emitted substances are not summed into one generic flow.

### Process: Civil preparation, tank integration and installation acceptance (`tank_installation`)

#### Inputs

##### Product flows

###### Factory polyethylene septic tank at declared supply gate (`factory_tank`)

The complete purchased vessel is an upstream product. Declare model/capacity/compartments, factory penetrations and included fittings/lids/risers; resin alone is not its identity.

- Selected flow: Factory polyethylene septic tank at declared supply gate
- Flow property / unit: Number of items / item
- Amount rule: Record actual gross tank receipts/issues attributable to the job, including installed and damaged/replacement vessels; distinguish real returns and closing stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual model-specific dispatch and job issue/serial records, replacement/damage log, supplier bill and stock custody are required; no universal tank mass or loss rate.

###### Separately supplied compatible inlet/outlet gaskets (`extra_gaskets`)

Each genuine extra gasket is an actual discrete component matched to the approved tank/pipe penetration.

- Selected flow: Separately supplied compatible inlet/outlet gaskets
- Flow property / unit: Number of items / item
- Amount rule: Record actual separately supplied gasket quantities by specific material/size, including replacement; omit a second burden for factory-included pieces.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual kit exclusion, compatible gasket specification, issue/return quantities and damage records are required; no assumed two extra gaskets.

###### Actual installation and test electricity (`installation_electricity`)

Actual supply mix/provider and metering boundary qualify the electricity product. Final binding requires an exact verified energy-property support chain.

- Selected flow: Actual installation and test electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record actual metered tool/charger/test electricity attributable to the job, separately from future wastewater operation and provider-included energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual supply identity, task meter/charging allocation, measurement uncertainty and observed job duration are required; no default test energy or machine power multiplication.

###### Actual supplied test or protective-fill water (`test_protection_water`)

Installation does not presume water filling. Any actual filling, test, repair and retest water is accountable, and subsequent retained water or discharge is recorded.

- Selected flow: Actual supplied test or protective-fill water
- Flow property / unit: Mass / kg
- Amount rule: Record actual purchased/supplied water only when the actual test or rain-protection instruction requires it; retain source/quality and repeated fill quantities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual applicable test/protection requirement, model-specific fill level, metered supply or volume with verified density and destination are required; no universal full-tank water quantity.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted gravity-fed nontraffic factory polyethylene septic-tank installation at defined stubs (`accepted_tank_installation`)

The accepted output has completed actual excavation/support, undamaged vessel integration, stubs, required access components, backfill/compaction/finish and installation-stage acceptance. The count excludes unresolved failures and does not certify future treatment performance.

- Selected flow: Accepted gravity-fed nontraffic factory polyethylene septic-tank installation at defined stubs
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: The exact 1 item amount defines the reference, not an empirical range. Actual model/site/stub/acceptance record must demonstrate that this single completed job is the declared unit; no equivalence inferred from capacity.

##### Waste flows

###### Actual test or protection water handed to treatment (`water_waste`)

Collected contaminated test water crosses waste custody to a receiver only when that actual route occurs; a direct environmental discharge belongs in actual characterized releases.

- Selected flow: Actual test or protection water handed to treatment
- Flow property / unit: Mass / kg
- Amount rule: Record actual water discharged to a managed treatment/waste receiver by source event and receiving route, accounting for retained water and repeat tests.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual receiving route, measured quantity, contamination/acceptance record, retained inventory and applicable disposal authorization are required; no assumed sewage-treatment load.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| job_attribution | tank_installation | Attribute direct actual job materials/energy/site work including failures, repair and retest to the finally accepted job. Internal repair loops do not create another accepted output. Incompatible configurations or incomplete jobs are separated and disclosed, never denominator dilution. |  |
| asset_attribution | equipment_provision | For each asset index production, each service/reporting period and consumer job, maintenance/replacement and final removal. Use actual documented service activity shares against complete supported service coverage, with residual/unused capacity explained. Retain capital/maintenance/removal burdens or verified provider inclusion once; fill missing provider phases explicitly and avoid duplicating included operational fuel. Do not assume universal lifetime or amortization. |  |
| custody_attribution | usable_product_returns; solid_waste; imported_support_fill | Maintain gross opening stock/receipts/issues/installed or consumed disposition/real outward returns/waste/closing stock balance by actual identity. All material input cards use gross job receipts/issues; placement or consumption is a disposition, not an alternate input basis. Fuel product inputs and actual burned activity follow fuel_supply_fate; usable exits remain separately recorded. Retained stock carries a declared unconsumed burden forward and is not a product output. Returned products have original-lot burden custody and do not earn automatic substitution credit. Native soil reused onsite has handling burdens and no purchased-production burden. Any genuine coproduct outside this scope requires explicit separate allocation review. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | tank_installation | vessel/components and usable returns | supplier bills and calibrated quantity/stock records | job_id; lot_id; product_identity; model; included_kit_parts; gross_receipts; gross_issues; installed_amount; real_outward_returns; waste_amount; closing_stock; mass_kg; matched_item_count; product_specific_mass_evidence; dimension_unit; native_soil_provenance; transfer_id | Reconcile factory bill and actual distinct extra roles using gross material receipts/issues and all dispositions, never net consumed/placed input. Weigh actual mass or use traceable matching supplier dimensions/mass; keep counted vessel/gasket records. Record real custody returns once and retained stock carry-forward. Cross-reference cp_soil native-soil provenance by transfer_id; use actual mass evidence to close counted vessel/gasket receipts against mass-based returns. | kg; item; actual dimensions | Each receipt/issue/install/return/replacement | All preparation through final handover and failed attempts | Job and supplying lots | per reference flow | Signed bills, serials, scale calibration, compatibility and lot balance |
| cp_soil | tank_installation | excavation/support/backfill and finish | site survey and material ledger | job_id; native_soil_suitability; groundwater_state; excavated_quantity; surveyed_volume_unit; reused_onsite_quantity; import_mass_kg; material_identity; gross_receipts; gross_issues; placed_or_consumed; real_outward_returns; waste_quantity; closing_quantity; disposition_unit; moisture_basis; density_unit; finish_product_identity; closing_stock; exported_quantity; destination; custody_status; transfer_id | Measure actual excavation and soil/finish custody by material state; use field survey and weigh tickets, measured conversion properties and explicit balance uncertainty. Pair native-origin soil export with cp_components outward-custody record using transfer_id and actual measured mass, preserving site provenance rather than a purchased lot. Record local placement/compaction/grade acceptance with actual units and limits; onsite soil transfer creates no purchased input. | kg; actual surveyed volume and geometry units | Each excavation/import/placement/export and finish acceptance | Entire civil preparation, backfill, correction and finish | Actual excavation and controlled stock areas | per reference flow | Approved soil/site report, calibrated survey/scales and signed placement/compaction/grade records |
| cp_energy | tank_installation | fuels and electricity | meter and fuel stock/task logs | job_id; task_id; asset_id; period_id; fuel_identity; fuel_mass_kg; fuel_volume; fuel_volume_unit; density_value; density_unit; density_temperature; density_temperature_unit; electricity_kWh; charging_boundary; provider_inclusion; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | Reconcile actual task fuel and metered electricity including rework. Any activity allocation uses recorded tasks and a documented denominator; identify provider included use and future operating-energy exclusion. Reconcile unused stock and unconsumed fuel returns outside the consumed-fuel exchange. Preserve each physical unit and conversion evidence. Supply and burn are separate under fuel_supply_fate; collect every exclusive outlet, actual denominator and its unit, keep nonreturned waste/loss supply burdens, and report missing fates. | kg; kWh | Each task/refuel/meter interval | Preparation through repair/retest/handover | Job equipment and declared charging supply | per reference flow | Meter/scale calibration, fuel/density evidence and provider coverage |
| cp_water | tank_installation | actual supplied and outgoing installation water | meter and test/disposition logs | job_id; event_id; actual_requirement; water_source; fill_level_unit; supply_mass_kg; measured_volume; measured_volume_unit; density_unit; retained_water; treatment_handoff; direct_release; receiving_medium; test_method; test_duration; test_duration_unit; test_pressure; pressure_unit; test_temperature; temperature_unit; test_volume; test_volume_unit; acceptance_limit_unit; test_result_value; result | Determine actual water requirement from applicable instructions. Meter each fill including retests; reconcile retained water, managed waste handoff and actual direct release. Record actual test/protection method and every applicable pressure, temperature, level, volume and duration unit with specified acceptance and authority; do not assume universal water filling or vacuum testing. | kg; actual volume/level/time/test units | Each actual fill, test and disposition | All installation-stage fill/repair/retest events | Tank/site and actual water receiver | per reference flow | Applicable approved instruction, calibrated meters, test/receiving records |
| cp_assets | tank_installation | shared reusable assets and provision | asset/service register and complete-life attribution | asset_id; provider_id; coverage_boundary; production_phase; service_period_id; consumer_job_id; task_duration_h; total_service_basis; maintenance_event; replacement_event; termination_event; removal_coverage; allocation_decision; uncovered_phase | Link this node and all other consuming jobs/reporting periods to each asset. Retain actual job hours or contract unit and complete-life service basis; document phase-by-phase provider inclusion, operational/capital separation, any gaps, allocation and no duplicate event ownership. | h or actual verified contract service unit | Each asset/job/period and maintenance/replacement/termination event | Complete asset production/service/removal coverage plus this job | Actual assets/providers and all supported service consumers | per reference flow | Asset register, activity meters, provider dataset scope, lifetime/termination evidence and uncertainty |
| cp_transport | tank_installation | delivery return and waste movements | consignment and route records | job_id; transfer_id; provider_id; origin; destination; payload_mass_t; distance_km; vehicle_class; included_legs; upstream_coverage | Match actual outward/inward shipments and included transport to material/provider coverage. Compute actual transport work only from compatible payload and route units; document included empty legs and ensure no repeated freight record. | t km; original t and km | Each actual consignment/haul | All job deliveries, returns and waste disposition | Actual routes/providers | per reference flow | Tickets, route distance evidence, payload and dataset-leg coverage |
| cp_acceptance | tank_installation | accepted installation reference | signed installation inspection and test records | job_id; model; capacity_unit; compartments; design_revision; permit; nontraffic_state; groundwater_evidence; stub_endpoints; invert_units; cover_units; connection_parts; test_method; acceptance_source; limit_units; failed_state; correction_id; retest_result; handover_signature; accepted_count | Count only complete accepted stub-bounded jobs. Match actual model/site/support/components/backfill/grade and required test/inspection records. Record applicable limits with units and close each defect/correction/retest; denominator includes accepted jobs only and retains attributable failure burdens. | item; actual design/test units | Every job acceptance and correction closure | First work through final signed handover | Actual installed tank and defined stubs | per reference flow | Permit/design, manufacturer instructions, field acceptance and closed defect/retest ledger |
| cp_waste | tank_installation | waste and actual environmental releases | custody tickets and characterized release records | job_id; event_id; material_identity; waste_status; composition; mass_kg; receiver; transfer_id; substance; receiving_medium; particle_size; activity_unit; factor_source; factor_basis; provider_inclusion | Separate actual waste from usable return and internal stock. Weigh each waste stream and obtain receiver evidence. Establish substance/media and documented activity/factor or measurement for each direct release; deduplicate provider emissions and retain uncertainty. | kg; original factor/activity units | Each waste/release and corrective event | All attributable job and failed-work events | Job and actual receivers/media | per reference flow | Authorized receiver tickets, calibrated measurements, composition and compatible release factor evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_normalization | all inventory rows | Aggregate each distinct attributable actual exchange for the defined job boundary and divide by the matched accepted installation count; preserve its physical unit and all failed-work burdens. Do not aggregate unlike models without declared stratification. | Node-specific job records; accepted_count; cp_acceptance | Exchange amount per reference flow |  |
| stock_reconciliation | factory_tank; extra_gaskets; extra_pipe_tees; extra_access_parts; joint_consumables; imported_support_fill; finish_products; usable_product_returns; solid_waste | Reconcile opening stock and gross receipts with installed/consumed dispositions, actual outward custody returns, waste and closing stock separately by identity. Internal issues/transfers are paired ledger movements, not repeated external receipts. | cp_components; cp_soil; cp_waste | Identity-specific custody balance and carried-forward closing-stock burden |  |
| asset_share | equipment_provision | Apply the documented actual job service share to complete supported asset phase burdens; reconcile all consumer/period shares and remaining capacity against the same service basis, with provider inclusions counted once. | cp_assets; cp_energy; verified provider scope | Attributed asset provision and explicit uncovered phase requirements |  |
| fuel_supply_fate | installation_fuels | For each actual fuel identity and nonoverlapping node/event period, G_fuel = opening usable fuel + external receipts - closing usable fuel stock, including equipment tanks, with container tare excluded and same-boundary issues/transfers not added as new receipts. G_fuel is the gross physical product input before genuine usable outward U_fuel, outward transfer X_fuel, collected unburned fuel W_fuel and uncontained fuel P_fuel. Keep those exclusive outlets separate and resolve actual product, waste stream or substance/medium identities; a total spill is an incident diagnostic, never another deduction. W_fuel and P_fuel mean the contained fuel mass, not the total mass of contaminated absorbent or wastewater. B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel only with a complete supported fate ledger; unknown fate stays a gap and is not presumed burned. Only independently supported B_fuel drives combustion emissions. Retain upstream supply burdens of all nonreturned unburned fuel, waste and loss; only original unused-material burden may follow a documented usable exit, without a second net-input deduction or avoided-production credit. Carry opening/closing stock burden once. Normalize each physical quantity once by D_fuel, the independently measured positive accepted lot quantity in this PCR reference unit (accepted volume, area, axial length, steel mass or complete accepted count as defined in sections 3-4), never by a fuel quantity or an intermediate output. Existing actual_consumed/fuel-use fields are burn-activity records; they cannot replace G_fuel as the upstream input. Provider-included fuel and its emissions have one owner; do not add overlapping foreground supply or combustion. | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_identity | tank_installation | Demonstrate actual nontraffic dry non-buoyant gravity route, permit/design/model, independent stub gate and full supply-kit completeness. | Approved site/design and actual bill of supply |
| quantity_quality | all inventory rows | Retain actual identity-specific units, calibration, temporal/site/lot scope, conversion moisture/density or supplier mass, missing activity and uncertainty. No inferred defaults or zero-as-missing values. | Node-specific protocols and original records |
| period_completeness | equipment_provision | Complete asset phase/consumer/period coverage, replacement/termination and provider gaps; unresolved service-life evidence blocks final asset attribution. | Asset/service register and complete-life supporting records |
| acceptance_quality | accepted_tank_installation | Match accepted count to signed handover, actual inspection/test criteria with units and closed repair/retest path; a tank installation pass does not prove sewage-treatment performance. | cp_acceptance and applicable manufacturer/jurisdiction documents |
| custody_quality | usable_product_returns; solid_waste; water_waste; direct_releases | Reconcile source, quantity, condition, real receiver and status; stock carry-forward and wastewater retained onsite are balances, not fictitious outward exchanges. | Transfer, stock, water and waste ledgers |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_fit | tank_installation | Fail route fit for unqualified soil/groundwater/traffic, missing actual excavation/support ownership, unclear stubs or excluded equipment/works. | `ads-septic-tank-installation-2024` |
| validate_gate | accepted_tank_installation | Require one complete accepted installation, actual model/site/parts, backfill/compaction/finish and applicable test/inspection criteria with original units; close failed states before counting the output. Do not assert treatment performance. | `ads-septic-tank-installation-2024` |
| validate_kit_balance | all inventory rows | Reject duplicate kit component, supplier included packaging/freight, netted-plus-outward returns, untyped soil export or retained stock counted as an output. Expand variable umbrellas to actual distinct exchange identities. |  |
| validate_assets | equipment_provision | Require all consuming jobs/periods and complete production/service/maintenance/replacement/removal scope, actual share basis and single ownership per shared event; unresolved lifetime/termination or provider gaps block completion. |  |
| validate_bindings | all inventory rows | Every final TIDAS exchange requires exact actual flow, property/unitgroup and destination support; unresolved semantic identities and unsupported Energy/Duration/Transport chains remain explicit data requirements. No near-match or count conversion for convenience. |  |
| validate_rework | tank_installation | Preserve damaged/off-spec materials, repair/replacement and repeated tests in the producing node, with actual internal loop, product return or waste exit. No discarded tank or unresolved failure enters accepted count. |  |
| validate_fuel_supply_fate | installation_fuels | Check G_fuel, B_fuel and all exclusive outlets against the actual fuel protocol, stock and provider coverage. Nonreturned unburned waste/loss keeps its upstream burden; unresolved fate, fuel constituent or positive D_fuel blocks a complete quantitative fuel inventory. Do not substitute burned activity for purchased fuel or deduct total spill plus its component outlets. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for one qualified stub-bounded gravity tank installation; process/lifecyclemodel are downstream projections |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Installation-stage comparisons only for matching declared site/model/interface/acceptance scope and asset/provider coverage |
| excluded_use | Full septic-system operation, wastewater removal performance, drainfield design, traffic/buoyancy variants, generic capacity-equivalence claims and potable-water approval |
| required_metadata | Actual site/time/permit/design and manufacturer model; material and kit identities; soil/groundwater and stubs; work/test/finish criteria; accepted count; upstream and asset phase/service coverage |
| required_quality_disclosure | Missing records and unresolved bindings/support chains; measured/conversion uncertainty; failure/retest quantities; stock/custody and waste/release pathways; asset lifetime/coverage attribution limits |
| update_trigger | Changed tank/site/route/interface, manufacturer/jurisdiction instruction, kit contents, test acceptance, provider or asset scope, new measured data or verified flow identity |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ads-septic-tank-installation-2024 | handbook | Infiltrator Water Technologies / ADS, Infiltrator Septic Tank General Installation Instructions, February 2024, pp1-3 and6; https://assets.adspipe.com/asset/2c4fb1a6-27dd-4e01-9d46-c24e90bcd72b/Tank-General-Installation-Instructions.pdf | Actual manufacturer route, nontraffic/site/soil and component instructions, backfill/finish, conditional protective filling and jurisdiction-specific testing; model examples are not universal values |
| un-cpc3-explanatory-notes-2025 | official_guidance | United Nations Statistics Division, CPC Version3.0 explanatory notes, 30June2025, printed pp289-290; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope of septic-system and leach/drainfield installation; narrower tank-only semantic boundary |
