---
pcr_id: pcr.constructions-and-construction-services.construction-services.wall-mounted-electric-panel-heater-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Class I wall-mounted electric panel heater installation services

## 1. Scope and Applicability

This PCR covers first installation of a packaged Class I wall-mounted resistive electric panel convector at an existing prepared wall and suitable isolated fixed electrical connection point. The service includes incoming condition checks, use of the matched manufacturer bracket, substrate-compatible fixing, upright mounting and retention checks, fixed electrical connection by a competent electrician, protective-earth and required electrical verification, initial control setup, limited functional heat test, cleanup and signed handover. The installed appliance and actual added components are upstream inputs to this service; disclose that boundary to avoid adding them twice in a construction model.

This scope is restricted to Class I appliances requiring protective earth; Class II appliances are excluded. The Dimplex PLXE Series C Issue 7 manual provides an illustrative model within that Class I route, not a universal appliance specification. Its pages 3 and 7 require an earth connection and suitable fixed wiring; pages 8-9 describe the supplied H-frame, fixings, hooks and locked clips; page 10 describes first-power setup and possible initial odour. Use the actual model's current instructions and preserve equivalent evidence. New branch circuits, supply upgrades, hydronic distribution, boilers, heat pumps, freestanding heaters, repair/replacement of existing heaters, and normal heating use after handover are excluded. A missing compliant supply or adequate wall is a scope failure, not an omitted installation operation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.wall-mounted-electric-panel-heater-installation-services |
| classification_refs | cpc:3.0:54631; Heating equipment installation services; proposed narrower relation, subject to semantic acceptance |
| covered_products | First fixed Class I wall installation and tested handover of a packaged resistive electric panel convector |
| excluded_products | New circuits and supply remediation; hydronic systems; boilers; heat pumps; freestanding appliances; normal use; replacement/repair service |
| representative_product | Class I panel convector supplied with manufacturer-matched H-frame and fitted supply lead; Dimplex PLXE Series C is illustrative |
| production_route | Verify prepared interfaces; inspect package; mark and drill actual fixing holes if needed; secure H-frame; engage hooks and locking clips; fixed electrical connection; electrically verify; initialize controls; limited heat test; signed acceptance |
| market_state | Installed, connected, tested and accepted service at site handover; neither an appliance at factory gate nor delivered lifetime heat |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted first installation of one Class I wall-mounted resistive electric panel convector |
| How much | One accepted installation of one declared appliance |
| How well | Matched H-frame secured to declared substrate; correct orientation, retention and model clearances; suitable isolated supply and protective earth; actual recorded electrical and functional heat-test acceptance; controls initialized; signed handover |
| How long or cycle | One installation job including its attributable corrective work and limited commissioning, ending at acceptance; no heating service-life output |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted Class I wall-mounted electric panel heater installation at tested handover |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | manufacturer/model/serial; rated electrical input; supplied-bracket and component coverage; wall/substrate; fixing schedule and hole/preprepared-hole state; model orientation/clearances; supply voltage/connection/isolation/earth; test criteria/results and actual heat-test interval; controller setup; site/date/acceptance; upstream delivery and component burden coverage |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use one accepted installation of the same declared appliance configuration; failed or pending installations are excluded from the accepted denominator. |
| electricity_record | site_electricity | Energy | kWh | Record actual installation and commissioning electricity; nameplate W or kW is a rating and cannot substitute for consumed kWh. |
| component_measurement | fixings_connections; packaging_waste; drilling_debris; electrical_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain measured material-specific mass and calibrated weighing or traceable item-to-mass evidence; do not use whole appliance mass for added fixings. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing accepted wall/substrate and suitably rated isolated fixed supply/connection point; packaged heater and additional components at their declared supply gates |
| starting_condition_role | Prior site interfaces plus incoming product gates; wall and new circuit construction are not claimed by this installation record |
| product_classification_scope | Only the defined narrower Class I resistive panel-heater installation service within heating-equipment installation |
| recursive_input_rule | An input same-category subcontract installation service must replace its evidenced work package; either use that service or its disaggregated inventories, never both for the same physical work |
| upstream_dataset_requirement | Match actual heater package, supplied bracket/lead, added parts, electricity, travel/freight and declared tool service; link waste to its receiving treatment with documented boundary ownership |
| disclosure | Declare wall/supply readiness, drilling state, component/package and delivery coverage, regional electricity, tests and rejected-unit routes, tool/travel attribution and missing direct-release characterization |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| start_interfaces | install_test_handover | Reject scope if suitable wall or fixed supply is absent. Record interface evidence; do not hide new circuit, wall strengthening or predrilling work as zero. | `dimplex-plxe-series-c-issue7` |
| mount_connect | install_test_handover | Include actual heater package and separate added fastening/connection roles; use matched bracket, orientation, clearances, hook engagement and locks, competent fixed connection and protective earth for the documented Class I route. | `dimplex-plxe-series-c-issue7` |
| commissioning_gate | install_test_handover | Include installation electricity, control initialization, electrical verification, limited heat test and corrective work before signed acceptance; exclude routine heating after handover. Record actual pass criteria and results, not a claimed lifetime heating performance. |  |
| direct_releases | airborne_drilling_release; initial_heat_release | Include characterized releases from actual drilling and first heat-up. Possible odour requires disclosure and characterization; unknown emissions are incomplete coverage, not a zero or a generic VOC. |  |
| logistics_tools | material_transport; installer_travel; tool_access | Include attributable delivery, installer visits and reusable equipment service when incurred and owned by this boundary; disclose upstream inclusion, visit sharing and provider coverage to prevent duplication. |  |
| `system_boundary_rule_6` | foreground_system_boundary | Shared infrastructure disclosure: when visits, meter periods or reusable tool services cross job periods, record the shared asset/service id, this installation node and every other consuming job, the common period and the evidenced attribution driver. The provider owns equipment life-cycle inventory; this node records attributable access service. No tool lifetime is invented. Reconcile all job shares to the single shared total. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |


### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Packaged Class I resistive panel convector with matched H-frame and fitted supply lead (`heater_package`)

Process / prospective direction / type: `install_test_handover` / `inputs` / `product`.

Record every Class I appliance entering this job, including its manufacturer-matched bracket and supplied lead. A bracket already included in the supplier package is not a second upstream appliance input. Identify model, rating, serial number, supplied components and receipt state.

- Collection subject: Packaged Class I resistive panel convector with matched H-frame and fitted supply lead
- Flow property / unit: Number of items / item
- Amount rule: Count appliances issued to the installation, including replacements; reconcile accepted unit, intact supplier returns and discarded units.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: supplier receipt and reject records must establish appliances consumed per accepted installation; the manual does not establish a generic replacement rate.

#### Collection requirement: Substrate-compatible fixing and fixed-connection components (`fixings_connections`)

Process / prospective direction / type: `install_test_handover` / `inputs` / `product`.

Record actual separately supplied screws, anchors, connection terminals, connector boxes or other permitted connection consumables. Split the conditional umbrella into actual materials and identities; do not invent a universal kit. Existing fused spur and fixed wiring are declared prior interfaces.

- Collection subject: Substrate-compatible fixing and fixed-connection components
- Flow property / unit: Mass / kg
- Amount rule: Record gross separately supplied components issued by material and part, with traceable item-to-mass records where needed. Usable surplus returned from the job is a separate product exit; do not also subtract it from this gross input.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: actual substrate and supplier-approved fastening/connection schedule determine quantities; four bracket holes in this example do not determine every model BOM.

#### Collection requirement: Attributable appliance and component freight (`material_transport`)

Process / prospective direction / type: `install_test_handover` / `inputs` / `product`.

Conditional on delivery or movement owned by this service boundary. Identify actual carrier, mode, loaded mass, distance, legs and supplier-gate coverage; avoid adding delivery already in upstream datasets.

- Collection subject: Attributable appliance and component freight
- Flow property / unit: Mass*distance / t*km
- Amount rule: Record attributable freight service from actual consignment mass and route records in t*km, retaining empty-leg treatment and upstream-delivery coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: job route, mass and carrier records are required; no representative mileage or load factor is imposed.

#### Collection requirement: Attributable reusable installation and test equipment access (`tool_access`)

Process / prospective direction / type: `install_test_handover` / `inputs` / `product`.

Conditional on reusable drill, extraction, lifting or electrical-test equipment whose service burden is included. Identify tool/provider and service boundary; consumables already included in the provider dataset are not duplicated.

- Collection subject: Attributable reusable installation and test equipment access
- Flow property / unit: Duration / h
- Amount rule: Record attributable operating/access hours and documented provider or study capital-service attribution; a purchased tool is not entirely consumed in one installation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: actual tools and operating records determine access duration; no universal lifetime or hours-per-heater estimate is supported.

#### Collection requirement: Intact uninstalled or rejected heater returned to supplier (`returned_heater`)

Process / prospective direction / type: `install_test_handover` / `outputs` / `product`.

Conditional intact return with retained product status, traceable serial number, reason and recipient. Failed units held pending repair are not accepted installations; in-job corrective work remains in this process.

- Collection subject: Intact uninstalled or rejected heater returned to supplier
- Flow property / unit: Number of items / item
- Amount rule: Count intact appliances leaving to supplier, retaining their issue/return ids, transport ownership and burden disposition; do not count the same unit as discarded waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: real return records determine zero or positive count; no generic intact-return fraction is supported.

#### Collection requirement: Intact reusable packaging and usable component surplus returned from the job (`usable_material_returns`)

Process / prospective direction / type: `install_test_handover` / `outputs` / `product`.

Conditional product exit for intact reusable packaging or unused suitable fixing/connection parts returned to supplier or controlled stock. Split by actual material, usable state and recipient. This is neither heater appliance count nor waste.

- Collection subject: Intact reusable packaging and usable component surplus returned from the job
- Flow property / unit: Mass / kg
- Amount rule: Weigh actual usable product returns by material and exit id; reconcile with gross issued component inputs or incoming packaging coverage. Do not both subtract returns from inputs and record the same product exit; declare credits or retained ownership separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: usable state, material and measured return records determine actual mass; no universal return/reuse fraction or automatic avoided-production credit is supported.

#### Collection requirement: Separated installation packaging and protective-film waste (`packaging_waste`)

Process / prospective direction / type: `install_test_handover` / `outputs` / `waste`.

Record packaging and removed protective film by actual material and licensed or project-approved destination. Intact reusable packages crossing back to supplier or stock leave by usable_material_returns and are excluded from waste.

- Collection subject: Separated installation packaging and protective-film waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh separated waste by material and dispatch; distinguish reused/returned packaging with records and reconcile supplied packaging coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: weigh actual packaging for the chosen model; the manual gives no packaging mass or recycling fraction.

#### Collection requirement: Captured wall drilling debris and spent installation consumables (`drilling_debris`)

Process / prospective direction / type: `install_test_handover` / `outputs` / `waste`.

Conditional on actual new fixing holes or consumable losses. Record wall substrate, captured fraction, extraction method and waste destination; verified preprepared holes may make drilling absent.

- Collection subject: Captured wall drilling debris and spent installation consumables
- Flow property / unit: Mass / kg
- Amount rule: Weigh or use validated collection records for captured substrate debris and separately identify discarded consumables; exclude airborne release quantities recorded on their own row.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: hole/substrate and collection evidence must establish debris quantities; no generic concrete or gypsum mass is assumed.

#### Collection requirement: Discarded heater or electrical component waste (`electrical_waste`)

Process / prospective direction / type: `install_test_handover` / `outputs` / `waste`.

Conditional damaged or unrepairable appliances/components sent to an authorized electrical-waste route. Intact supplier returns remain product flows; waste must not be relabelled as an installed output.

- Collection subject: Discarded heater or electrical component waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh discarded units/components and link serial or part ids to receiving treatment, retaining failed-installation and replacement burdens.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: measured waste and failure records are required; no default defect or recovery rate is supported.

#### Collection requirement: Substrate-specific airborne drilling release to workplace air (`airborne_drilling_release`)

Process / prospective direction / type: `install_test_handover` / `outputs` / `elementary`.

Conditional on drilling. The actual substrate, emitted substance or particle-size basis, receiving-air compartment, extraction and capture efficiency must be established before creating concrete elementary exchanges. Captured solid debris remains waste.

- Collection subject: Substrate-specific airborne drilling release to workplace air
- Flow property / unit: Mass / kg
- Amount rule: Require measured or validated substrate-specific emissions for the actual drilling operation and controls; verified no-drilling records support absence, whereas unmeasured drilling does not support a zero emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: substrate, particle-size/species and capture evidence are unresolved until foreground characterization; a universal dust interval would misstate identity and exposure.

#### Collection requirement: Substance-specific initial heat-up release to indoor air (`initial_heat_release`)

Process / prospective direction / type: `install_test_handover` / `outputs` / `elementary`.

The manufacturer reports possible initial heat-up odour but identifies no chemical substance, emission factor or quantity. Retain the potential commissioning release as a characterization requirement; odour alone is not a VOC identity or proof of zero release.

- Collection subject: Substance-specific initial heat-up release to indoor air
- Flow property / unit: Mass / kg
- Amount rule: Characterize actual substance/species and receiving medium with measured or defensible product-specific commissioning evidence before quantification; disclose missing characterization as incomplete direct-emission coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: neither substance nor quantity is specified by the manual; no generic VOC, arbitrary mass range or zero may replace the missing evidence.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_test_handover | Receive, wall mount, connect, test and hand over | required | Defined first-installation route with accepted prepared interfaces | Integrate appliance/H-frame with added fastening and connection roles; verify, rework within this node, or route rejected units to intact return or waste exit; accept only after test and signed handover | 1 item accepted installation |

One process owns the whole installation job. Corrections to drilling, bracket retention, connection or setup loop within `install_test_handover` and retain all consumed resources. Unresolved electrical or mounting failures remain work in progress; intact supplier returns and discarded electrical waste leave by distinct rows. The heat test establishes the recorded commissioning gate, not delivered building heating performance.
Shared service linkage: `cp_resources` identifies each reusable tool or meter service and its consuming installation jobs; `cp_transport` identifies shared visits and every consuming job/period. Only the share owned by this reference installation is recorded here.


### Process: Receive, wall mount, connect, test and hand over (`install_test_handover`)

#### Inputs

##### Product flows

###### Installation tools and commissioning electricity (`site_electricity`)

Include actual drilling, extraction, electrical testing, controls initialization and limited heat-test electricity attributable to this job. No household heating after handover is included.

- Selected flow: Installation tools and commissioning electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record metered or traceably submetered installation and heat-test electricity; separate heating-mode test interval and rework consumption. Do not multiply nameplate rating by an assumed test duration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: measured tool and commissioning records are required; manufacturer rated power is neither consumed electricity nor a supported generic kWh interval.

###### Attributable installer travel service (`installer_travel`)

Conditional on installer travel incurred for this job. Retain mode, passengers, origin, destination and shared-visit allocation separately from material freight.

- Selected flow: Attributable installer travel service
- Flow property / unit: Number of persons*distance / person*km
- Amount rule: Record actual attributable passenger transport in person*km; shared visits need an explicit ownership and attribution record.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: actual itinerary and shared-visit records must establish travel; do not infer a standard trip from the classification.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted Class I wall-mounted electric panel heater installation at tested handover (`accepted_installation`)

The only reference output is the installation of one identified Class I upright resistive panel convector on its matched secured H-frame, connected to existing suitable isolated fixed supply, with protective-earth/electrical verification, control setup and limited functional heat test completed. Record signed acceptance.

- Selected flow: Accepted Class I wall-mounted electric panel heater installation at tested handover
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `dimplex-plxe-series-c-issue7`

Range decision: the reference definition is exactly one accepted installation; configuration equivalence must be demonstrated rather than introducing a statistical yield interval.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_service | accepted_installation | Attribute the installation-job inventory to accepted installations of the same configuration. There is no saleable heat co-product from the short test; do not credit incidental room warming. |  |
| reject_burdens | returned_heater; usable_material_returns; electrical_waste; install_test_handover | Retain corrective-work resources, failed commissioning and replacement handling attributable to the accepted job. Record intact supplier/material-return burden ownership and any supplier credit explicitly; no automatic avoided-production or recycling credit. Never count failed/pending units as accepted outputs. |  |
| shared_visit | material_transport; installer_travel; tool_access; site_electricity | Use job-resolved records first. If visits, meter periods or equipment are shared, identify all consumers, period and an evidenced physical driver; reconcile totals and count each burden once. Record material attribution uncertainty instead of applying an arbitrary equal split. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | install_test_handover | heater package and separately supplied component inputs | receipt and issue reconciliation | job_id; model; serial; package_BOM; substrate; fixing_schedule; issued_items; issued_mass; usable_return_exit_id; replacement_id; upstream_coverage |Inspect supplier package and approved instructions; reconcile gross issue records and separately weighed usable return exits; weigh separate material parts or retain traceable manufacturer part mass; distinguish prior supply interface; Aggregation procedure: per reference flow; sum gross actual job-owned component inputs; keep usable returned materials as separate exits without net subtraction or duplicated supplied bracket/lead| item; kg | every receipt, issue and return | complete installation job including corrections | identified site and job | per reference flow | supplier BOM and delivery note; scale calibration; substrate/fixing record |
| cp_resources | install_test_handover | site electricity and conditional tool access | meter and equipment service log | job_id; meter_id; start_reading; end_reading; test_start; test_end; test_mode; tool_id; access_hours; shared_consumers; attribution_driver; provider_coverage |Read traceable meters for job/test; separate other loads; log tool use and provider boundary; retain allocation evidence for shared periods; Aggregation procedure: per reference flow; aggregate attributable measured job electricity and provider-owned equipment hours once| kWh; h | each tool/test event and corrective event | arrival through signed handover | identified site, meter and equipment | per reference flow | meter accuracy; readings; test log; provider/service-boundary record |
| cp_transport | install_test_handover | conditional freight and installer travel across declared shared job/visit periods | dispatch and travel log | job_id; movement_id; mode; origin; destination; distance; consignment_mass; passengers; shared_jobs; attribution_driver; upstream_delivery |Reconcile carrier notes and actual itineraries; distinguish material freight from personnel movement; retain shared-visit driver and empty-leg ownership; Aggregation procedure: per reference flow; sum attributable mode-specific services after checking upstream coverage| t*km; person*km | each movement | complete installation and corrective visits | actual route to identified site | per reference flow | carrier note; route record; passenger/consignment log; allocation reconciliation |
| cp_acceptance | install_test_handover | accepted reference output and job starting conditions | inspection and signed test record | job_id; model; serial; substrate; preprepared_holes; bracket; fixings; orientation; clearances; supply; isolation; earth_test; electrical_tests; heat_test; control_setup; acceptance; timestamp |Competent installer records applicable manufacturer and project acceptance criteria, interface readiness, electrical and functional test results and signed handover; unresolved failure is not accepted; Aggregation procedure: per reference flow; exactly one accepted installation| item | each installation and retest | complete job to acceptance | same model/configuration/site as inventory | per reference flow | signed installation/test sheet; photographs; competent electrician record |
| cp_exits | install_test_handover | intact appliance/material returns, packaging, drilling debris and electrical waste | return and waste transfer record | job_id; exit_id; serial_or_material; state; quantity; mass; recipient; treatment; upstream_coverage; rework_id |Separate intact product return from waste; weigh actual waste by material; link exit to receiver and producing job; reconcile captured debris and airborne release separately; Aggregation procedure: per reference flow; sum physical exits once with traced ownership; rework stays within node| item; kg | every exit and correction | complete job including returns | identified installation and receiving route | per reference flow | return acceptance; calibrated mass evidence; waste transfer/receiver record |
| cp_releases | install_test_handover | conditional drilling and initial heat-up air releases | characterization and missing-data disclosure | job_id; drilling_state; substrate; species; particle_basis; air_compartment; capture; test_interval; release_quantity; method; detection_limit; missing_characterization |For actual drilling obtain substance/particle and capture-specific evidence; for first heat-up seek defensible product-specific substance/quantity evidence; record uncertainty and missing coverage without inventing a VOC or zero; Aggregation procedure: per reference flow; aggregate characterized emissions by substance and compartment; retain unquantified potential releases as incomplete coverage| kg | each drilling/initial heat-test scenario | installation drilling and limited heat-test only | actual substrate/product and indoor receiving environment | per reference flow | method validation; measurement report; detection limits; documented no-drilling condition; disclosure of gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_normalization | all inventory rows | Aggregate actual job-owned quantities per reference flow; use accepted service count of the same configuration for a multi-installation job, after recording resource attribution and failed/pending states. Do not merge different heater models as equivalent without evidence. | cp_components; cp_resources; cp_transport; cp_acceptance; cp_exits; cp_releases | inventory per reference flow |  |
| receipt_exit_reconcile | heater_package; returned_heater; electrical_waste | Reconcile physical appliance receipts, accepted installed serials, intact supplier returns, discarded units and remaining job stock; retain rework within the same job and prevent duplicate input/output treatment. | cp_components; cp_acceptance; cp_exits | serial-resolved appliance reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all inventory rows | Keep heater type, model, package coverage, wall substrate, fastening and supply conditions aligned; the manufacturer example is not a universal BOM. | cp_components; cp_acceptance; `dimplex-plxe-series-c-issue7` |
| resource_coverage | site_electricity; material_transport; installer_travel; tool_access | Cover job and corrective events; separate installation and normal-use energy; disclose supplier gates and shared-event attribution. | cp_resources; cp_transport |
| release_coverage | airborne_drilling_release; initial_heat_release | Unknown pollutant identity or amount remains a direct-emission completeness gap. Do not equate odour to a substance or claim zero without valid evidence. | cp_releases; `dimplex-plxe-series-c-issue7` |
| acceptance_trace | accepted_installation; returned_heater; electrical_waste | Signed acceptance, reject path and quantities must reconcile; unaccepted jobs cannot silently disappear from resources or accepted denominator. | cp_acceptance; cp_exits |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_check | install_test_handover | Verify declared prepared wall and isolated supply; reject new circuit/heating-network or repair/replacement route from this category. |  |
| mount_test_check | accepted_installation | Require component, bracket retention, orientation, model clearance, protective-earth/electrical test, actual limited heat test, initialized controls and signed handover records. Manufacturer ratings are not measured consumption or achieved heating output. |  |
| quantity_check | all inventory rows | Reference output is 1 item; each quantity uses per reference flow basis and its own linked installation-node protocol. Check receipt, return, waste and job resource reconciliations and declared sharing. |  |
| reject_route_check | returned_heater; usable_material_returns; electrical_waste; install_test_handover | Trace failed/pending states to in-node corrective work, intact return, authorized waste exit or disclosed work in progress. Exclude unresolved rejects from accepted output and retain attributable burdens. |  |
| release_check | airborne_drilling_release; initial_heat_release | Check actual drilling state, emitted identity/particle basis and receiving medium; require valid commissioning substance evidence or mark direct emissions incomplete. No arbitrary zero or generic VOC identity is acceptable. |  |
| identity_check | all inventory rows | Resolve each actual exchange to a verified concrete flow, property and unit before final process publication. Conditional umbrella roles must split using actual records; semantically useful unresolved candidate cards do not prove final exchange coverage. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation-service inventory with supplied appliance and added-part upstream inputs; process and lifecyclemodel are downstream projections |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Specified first-installation service as a declared site or regional background work package; compatible construction modelling with explicit component ownership |
| excluded_use | Bare appliance manufacturing; branch circuit works; hydronic/heat-pump installation; replacement/repair; lifetime building heat; untested installation or generic electrical product service |
| required_metadata | Model/serial and rating; bracket and BOM coverage; wall/substrate/fixing/holes; supply/isolation/earth; test criteria/results/interval; controller setup; site/time/accepted count; incoming gates/logistics; reject routes; attribution |
| required_quality_disclosure | Unresolved exchange/support identities; all Range evidence needs; missing first-heat emission characterization; drilling emissions evidence; measurement and shared-event uncertainties; upstream component and delivery coverage |
| update_trigger | Change of model, package, wall/fixing/supply, acceptance or commissioning route, supplier gate, geography/electricity, reject route or newly available direct-release evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| dimplex-plxe-series-c-issue7 | handbook | Glen Dimplex, PLXE Series C long manual, Issue 7, PDF pp. 3, 7-10. https://www.dimplex.co.uk/sites/g/files/emiian551/files/media_import/medias/docus/13/PLXE%20-%20Series%20C%20Long%20Manual%20-%20Issue%207%20%283%29.pdf | Documented Class I earth/fixed supply route; H-frame and mounting/locking; model-dependent clearances; first-power setup; possible initial heat-up odour without pollutant identity or quantity |
