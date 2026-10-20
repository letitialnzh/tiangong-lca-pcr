---
pcr_id: pcr.constructions-and-construction-services.construction-services.existing-utility-photovoltaic-central-inverter-station-repowering-and-recommissioning-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing utility photovoltaic central-inverter station repowering and recommissioning services

## 1. Scope and Applicability

This PCR covers the finite functional replacement and recommissioning of an identified existing utility-scale ground-mounted photovoltaic central-inverter station, retaining qualified arrays, civil foundation, compatible existing medium-voltage transformer (MVT) and grid interface. The service changes an existing generating station rather than delivering a new power plant or an inverter alone. Its output requires actual compatibility evidence and signed operator acceptance after all approved functional gates. [sma-utility-repowering; sma-pv-commissioning; epri-inverter-repowering-abstract-2024]

The manufacturer offers a retained-MVT central-inverter route and a different whole-station route when an MVT cannot be saved. Only the former is covered. “Compatible with most” is not verification for an actual station. Exclude rooftop/home/string-only inverters, batteries, module or array replacement, MVT replacement, factory inverter repair, whole new plant construction and subsequent electricity generation. No brochure voltage, warranty, energy uplift or lifetime promise becomes a universal design rule. [sma-utility-repowering]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.existing-utility-photovoltaic-central-inverter-station-repowering-and-recommissioning-services |
| classification_refs | CPC 3.0 54262; narrower |
| covered_products | Existing ground-PV central-inverter station repowering retaining actual qualified MVT/arrays/foundation, ending in accepted re-entry. |
| excluded_products | New whole plant; home/rooftop/string-only route; batteries; MVT/module/array replacement; factory repair; later generation. |
| representative_product | Accepted existing utility PV central-inverter station repowering and recommissioning service |
| production_route | Approved isolation/removal → actual replacement and interface integration → configuration/full required tests/retests → defect closure and signed re-entry. |
| market_state | Completed accepted finite station alteration service; no forecast operating performance. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| what | Accepted existing utility PV central-inverter station repowering and recommissioning service |
| how_much | 1 item |
| how_well | One named station with approved actual retained-interface compatibility, complete functional report, closed defects and signed operator acceptance; declare actual configuration. |
| how_long_or_cycle | One finite actual job campaign from approved isolation/removal through installation, commissioning/retest and signed acceptance, all actual reporting periods. No subsequent generation cycle. |
| reference_flow_link | `accepted_station_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted existing utility PV central-inverter station repowering and recommissioning service |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | station/site ID; ground-mounted utility route; actual DC/AC ratings; conversion topology; retained/replaced BOM; retained MVT/array/foundation compatibility; approved local/OEM method; firmware/protection/SCADA/grid-control state; campaign/phase/period; complete tests/defect closure; signature/date; no MWp/kWh equivalence |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | accepted_station_service | Count | item | N>0 is the unique fully accepted station count, not inverter pieces, stack count, test attempts, capacity or kWh. Preserve actual numerator native units / N. |
| native_measurement | Actual supplied components, exits and providers | Actual compatible native property | Actual verified native unit | Preserve Count/Length/Mass supply and usable-return native ledgers. An independently needed mass or water/fuel volume conversion requires matching actual specification, density/state/temperature/unit/source; Count is not a fallback for Energy, time or provider coverage. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified existing qualified ground-PV station with retained arrays/foundation/MVT/grid interface, old inverter and approved work plan. |
| starting_condition_role | Existing host state interface, not a new manufacture purchase. |
| product_classification_scope | CPC 3.0 54262; narrower |
| recursive_input_rule | Do not purchase this same completed station service as its own input. A genuine bounded subcontract identifies actual scope/native activity and upstream coverage, with one owner and no duplication of the foreground work. |
| upstream_dataset_requirement | Actual new equipment/supplies, utilities, provider service, transport, asset life share and treatment require compatible upstream datasets and explicit coverage; retained host manufacture is excluded. |
| disclosure | Actual retained/replaced register, prior condition, qualified compatibility, local/OEM gates, N, all phases/periods, provider/resource owner, old-equipment fate and remaining data gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | Retained interfaces | Include only an actual existing utility ground-PV central-inverter station whose retained array, civil foundation, MVT and grid interface are qualified. Approved actual DC/AC voltage/current/power, conversion topology, mechanical mounting, protection/earthing and control/communications compatibility are required. If the MVT must be replaced, this selected subset does not apply. | sma-utility-repowering; epri-inverter-repowering-abstract-2024 |
| job_boundary | Foreground start and end | Start with qualified existing identified station and approved work/isolation plan. Own DC/AC isolation, discharge and lockout, safe removal, new equipment and actual interface installation, configuration, full required functional tests, defect closure and signed operator re-entry handover. Require competent actual governing local/OEM procedures; no universal voltage span, test count, yield or warranty. | sma-utility-repowering; sma-pv-commissioning; sma-industrial-services |
| host_state | Existing host assets | Existing arrays, MVT, foundation and old inverter are starting-condition state interfaces, not new purchased manufacture. Own incremental work and old-equipment removal/fate. No subtraction of historical inverter from new supply, avoided asset credit, future yield, revenue or lifetime extension credit. Exclude new whole power plant, modules/array repowering, rooftop/home/string-only routes, batteries, MVT replacement, factory inverter repair and later operation. | sma-utility-repowering; unsd-cpc3-powerplant-services |
| coverage_owner | Resource ownership | Assign one resource owner for each direct/provider/rental/transport/asset/spare event and complete upstream coverage. Whole finished package and its covered BOM are mutually exclusive purchases. Retain actual incremental cleaning/containment/test supplies and provider-paid resources; evidenced non-use may establish absence, unknown coverage never establishes zero. |  |
| campaign_phase | Finite service campaign | Declare actual job/campaign start/end and isolation-removal, installation, commissioning/retest and acceptance phases with reporting periods. Each stock, input, asset use, event, exit and output retains job/site/station/campaign/batch/event/phase/period identity; only applicable asset IDs are populated. Failed or aborted work remains attributed to its actual job; N=0 or an incomplete acceptance gate blocks a normalized dataset. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Discrete retrofit interface components (`interface_parts_count`)

Process / prospective direction / type: `station_integration` / `inputs` / `product`.

Record independently supplied terminal/adaptor assemblies, switch/protection devices, sensors, control or communications parts, mechanical fittings and cooling spares actually required by the qualified design. Expand zero, one or multiple concrete SKUs; exclude every component already covered by the factory package.

- Collection subject: Actual counted retrofit adapters, protection, earthing, cooling and control components
- Flow property / unit: Count / item
- Amount rule: Attributable quantity of each actual discrete SKU / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`

Range evidence need: Use actual approved BOM, delivery and retained/replaced register; marketing compatibility does not supply a count range.

#### Collection requirement: Separately supplied cable and conductor lengths (`interface_cable_length`)

Process / prospective direction / type: `station_integration` / `inputs` / `product`.

Preserve conductor material, section, insulation, voltage class and measured delivered/installed/cut-off states. Do not force length-based deliveries or usable cable returns into mass. Any separately needed waste-mass view requires its own actual specification-specific measurement.

- Collection subject: Actual specified DC, AC, earthing and communications cable supplied by length
- Flow property / unit: Length / m
- Amount rule: Attributable native length of each actual cable specification / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`

Range evidence need: Collect actual route lengths, spare lengths and trim/return evidence for this station geometry; no generic cable-per-MW ratio.

#### Collection requirement: Mass-supplied installation and containment materials (`installation_mass_supplies`)

Process / prospective direction / type: `station_integration` / `inputs` / `product`.

Include actual sealant, lubricant, cleaner, absorbent, temporary containment and other incremental supplies for mounting, disconnecting and cleaning where used. Record formulation and supplied state; retained foundation is not purchased again. Installed product mass, used activity, captured residue and emitted species are distinct views.

- Collection subject: Actual mass-supplied installation, cleaning and containment products
- Flow property / unit: Mass / kg
- Amount rule: Attributable net mass of each actual SKU / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`

Range evidence need: Obtain actual design and SKU-specific measured stock/use/fate evidence; absence requires documented non-use, not missing invoices.

#### Collection requirement: Fuel supplied for actual job equipment (`fuel_supply`)

Process / prospective direction / type: `station_integration` / `inputs` / `product`.

Include lifting, mobile tools, backup test supply and transport fuel only for the resource owner when actual. Upstream supplied fuel includes burned fuel and nonreturned waste/loss; burned activity is not the upstream purchase amount. Retain actual fuel specification and density evidence if metered by volume. Burned activity requires actual measurement or an audited complete-fate balance with stated uncertainty; unknown loss is not automatically burned fuel.

- Collection subject: Actual specified fuel supplied to attributable equipment
- Flow property / unit: Mass / kg
- Amount rule: Attributable fuel supply mass / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`

Range evidence need: Obtain actual fuel stock, receipts, return, burn, waste and loss logs; no assumed diesel consumption or zero-fuel default.

#### Collection requirement: Attributable freight service (`freight_service`)

Process / prospective direction / type: `station_integration` / `inputs` / `product`.

Own actual legs for package deliveries, old inverter dispatch, returns and wastes where not already upstream or treatment-provider covered. Retain payload allocation, empty return and mode; do not count a whole truck load for every station or multiply station count by nameplate capacity.

- Collection subject: Actual shipment-specific freight of new equipment, supplies and outward exits
- Flow property / unit: mass*distance / kg*km
- Amount rule: Attributable actual mass-distance service / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`

Range evidence need: Collect actual cargo mass, measured route distance and shared-load attribution for each owned leg.

#### Collection requirement: Bounded specialist commissioning and integration services (`specialist_service`)

Process / prospective direction / type: `station_integration` / `inputs` / `product`.

When bought as a bounded service, identify provider, scope, actual completed test results and resource coverage. Grid emulation is conditional on actual contract, not mandatory. Price, labour hours or a visit do not establish Count of a completed station. Expand actual native rows; verify each support chain independently.

- Collection subject: Actual bounded specialist service in its verified native unit
- Flow property / unit: Actual verified native property / actual native unit
- Amount rule: Attributable completed native provider activity / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`

Range evidence need: Require actual provider scope/results and complete upstream resource statement; missing provider resources block finalization.

#### Collection requirement: Shared lifting and test asset service (`shared_asset_service`)

Process / prospective direction / type: `station_integration` / `inputs` / `product`.

Identify each actual asset and all consuming jobs/nodes/phases/periods. Include manufacture, maintenance, replacement parts and end-of-life, whether owned, rented or provider supplied, with one resource owner. Do not infer whole-life attribution from hire hours alone. Choose exactly one verified upstream view: whole-asset-equivalent quantity = actual job driver / whole-life driver with full-life burden per asset-equivalent; or lifecycle-complete service-per-driver quantity = actual job driver with full-life burden / whole-life driver per native service unit. Do not mix an hour quantity with a dimensionless asset share.

- Collection subject: Actual whole-life-attributed lifting, tools, test load and emulator asset service
- Flow property / unit: Actual verified native property / actual native unit
- Amount rule: Actual chosen native asset-equivalent quantity or native service-driver quantity / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

Range evidence need: Obtain complete observed service life or observed history plus evidenced remaining service, replacements, termination and end-of-life; actual compatible driver and uncertainty/sensitivity/update required.

#### Collection requirement: Actual externally supplied waste treatment (`waste_treatment_service`)

Process / prospective direction / type: `station_integration` / `inputs` / `product`.

Match electronic waste, packaging, captured fuel, contaminated absorbents and wastewater to actual receiver and treatment coverage. A waste exit alone does not supply upstream treatment inventory. Where a bounded provider already covers treatment, exclude this duplicate purchase and retain the coverage link.

- Collection subject: Actual waste-specific authorized treatment service in native unit
- Flow property / unit: Actual verified native property / actual native unit
- Amount rule: Attributable actual treated native quantity / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`

Range evidence need: Collect receiver-specific native measured service and resource/treatment statement; generic recycling is not adequate.

#### Collection requirement: Removed historical equipment dispatched for verified reuse (`removed_reusable_equipment`)

Process / prospective direction / type: `station_integration` / `outputs` / `product`.

Preserve old serial, condition assessment, receiver and proof of reusable status. Existing equipment is opening host state; its outward dispatch does not subtract from new inverter inventory. Items classified as waste belong only in removed_electronic_waste.

- Collection subject: Actual removed historical central inverter or usable component at reuse handover
- Flow property / unit: Count / item
- Amount rule: Actual outward native count of reusable historical equipment / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exits`

Range evidence need: Obtain actual old-item count and destination evidence; no assumed residual value, reuse rate or avoided virgin-equipment credit.

#### Collection requirement: Usable new counted supply returned outward (`usable_count_returns`)

Process / prospective direction / type: `station_integration` / `outputs` / `product`.

Match each outward return to new supply stock ledger and evidence of usable state. Internal issues, movements and closing carried stock are not outward returns. Apply one declared upstream supply convention and never add a duplicate return credit.

- Collection subject: Actual usable returned new package or discrete component
- Flow property / unit: Count / item
- Amount rule: Actual outward usable native count by new SKU / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exits`

Range evidence need: Measure actual count and match SKU/serial/return document; no universal return fraction.

#### Collection requirement: Usable new cable lengths returned outward (`usable_length_returns`)

Process / prospective direction / type: `station_integration` / `outputs` / `product`.

Keep supply-compatible length, specification, reel and receiver ledger; no generic kg conversion or return credit is required to retain a physical length exit.

- Collection subject: Actual usable outward-returned specified cable length
- Flow property / unit: Length / m
- Amount rule: Actual outward usable cable length / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exits`

Range evidence need: Collect actual measured usable returned lengths and specification-specific evidence.

#### Collection requirement: Usable new mass supplies and fuel returned outward (`usable_mass_returns`)

Process / prospective direction / type: `station_integration` / `outputs` / `product`.

Keep fuel and each chemical/material ledger separate; maintain tare, state and contamination evidence. Returned usable fuel is excluded from burned activity once; nonreturned waste and losses retain supply burden.

- Collection subject: Actual usable outward-returned mass-supplied product or fuel
- Flow property / unit: Mass / kg
- Amount rule: Actual outward usable mass separately by actual SKU / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exits`

Range evidence need: Use actual net-tare measured masses and matching receipt/stock records.

#### Collection requirement: Removed historical inverter electronic waste (`removed_electronic_waste`)

Process / prospective direction / type: `station_integration` / `outputs` / `waste`.

Own safe removal, storage, dispatch and actual treatment boundary. Weigh old inverter/parts or use traceable same-item net masses; disjoint from reusable old equipment. Do not infer hazardous classification or recycling yield from the word inverter; use actual jurisdiction/receiver records.

- Collection subject: Actual classified removed inverter or electronic-part waste at authorized receiver
- Flow property / unit: Mass / kg
- Amount rule: Actual classified outward net electronic-waste mass / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exits`

Range evidence need: Collect actual class, net mass, manifest, receiver and treatment evidence; no fixed old/new mass ratio.

#### Collection requirement: Installation, rejected new parts and packaging wastes (`new_supply_waste`)

Process / prospective direction / type: `station_integration` / `outputs` / `waste`.

Separate cable cuttings, packaging, failed new electronics, cleaner/absorbent and unused nonreturnable material; each retains its matching upstream supply burden. Factory package mass and physical waste subledger are not duplicate purchases. Rework stays internal until actual exit, final retention or closure.

- Collection subject: Actual separately classified new-supply, cable, packaging and containment wastes
- Flow property / unit: Mass / kg
- Amount rule: Actual outward net waste mass by class / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exits`

Range evidence need: Require actual separate waste classes, compatible weighing and supply-to-fate reconciliation, not generic waste percentage.

#### Collection requirement: Captured nonburned fuel waste (`nonburned_fuel_waste`)

Process / prospective direction / type: `station_integration` / `outputs` / `waste`.

Exclude captured nonburned fuel from combustion activity, retain supply burden and its actual waste fate. Spill recovered into closing usable stock is closing stock, not this exit; total spill is audit-only and not another flow.

- Collection subject: Actual captured contaminated or unused fuel waste
- Flow property / unit: Mass / kg
- Amount rule: Actual outward captured nonburned fuel waste mass / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exits`

Range evidence need: Require measured captured mass, contamination, stock reconciliation and receiver; no combustion-by-difference without disjoint outlets.

#### Collection requirement: Actual combustion pollutant species by receiving medium (`direct_combustion_species`)

Process / prospective direction / type: `station_integration` / `outputs` / `elementary`.

Expand only actual species and media, with valid factor geography/technology/fuel applicability and captured fraction. Burned fuel physical balance and species inventory are nonadditive views. Safety readings, supplied fuel mass, theoretical residual or a generic exhaust label do not determine substance emissions.

- Collection subject: Actual identified combustion species to the actual receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Actual species mass from measured release or valid burned-activity factor / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`

Range evidence need: Obtain actual fuel/engine/load/factor or measured species/medium evidence and uncertainty; no default exhaust mix.

#### Collection requirement: Actual routine or incident substance release (`direct_incident_species`)

Process / prospective direction / type: `station_integration` / `outputs` / `elementary`.

Own real uncontained fuel/cleaner/coolant/lubricant release when present, distinguish routine and incident owners and identify species, receiving medium, product composition and fate. Deduct actual retained stock, usable returns, captured waste and treatment exactly once. SDS composition, no-VOC or compliance claims alone do not establish emitted mass. This row explicitly includes ordinary cleaning-related substance or dust releases when actually present, as well as incidents. Each routine interval or incident event has one owner and a distinct event ID; do not omit routine emissions or duplicate an event between classes.

- Collection subject: Actual identified released species to air, water or soil
- Flow property / unit: Mass / kg
- Amount rule: Actual released species mass by event and medium / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`

Range evidence need: Require actual event amount, measurement or valid composition-fate evidence and receiving-medium identity; missing incident evidence is not zero.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| station_integration | Existing station replacement and recommissioning | required | Actual qualified retained MVT/array/foundation central-inverter route | Independent integration/handover responsibility with internal removal, install and commissioning phases | 1 item accepted_station_service |

One independent service responsibility owns all internal phases. No invented purchased intermediate station flow links the phases. Actual component roles include the finished central inverter, separate mechanical/electrical/protection/earthing/cooling/control/communications parts and specified cables; retained host interfaces remain state. Integration service, direct resources and shared test/lifting assets have explicit owners. A failed gate stays in internal rework at its actual phase or routes to evidenced return/waste; no rejected station is accepted output. [sma-utility-repowering; sma-pv-commissioning; sma-industrial-services]

### Process: Existing station replacement and recommissioning (`station_integration`)

#### Inputs

##### Product flows

###### Replacement finished central inverter package (`replacement_central_inverter`)

Identify OEM, exact model, serials, DC/AC ratings, conversion topology and package content. Count the delivered finished native unit only when that is its verified supply basis. Its factory electronics, integrated cooling and protection are included upstream; do not purchase the same BOM again.

- Selected flow: Actual finished utility PV central inverter package at delivery
- Flow property / unit: Count / item
- Amount rule: Attributable actual native supplied package quantity under the declared gross-with-outlets or matched-usable-return-once convention / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_supply`

Range evidence need: Obtain actual approved package quantity and content by station; no universal inverter pieces per station or capacity equivalence.

###### Incremental supplied cleaning and test water (`water_supply`)

Include all actual direct and provider-paid water; distinguish purchase, on-site recycled circulation, captured wastewater and actual release. Convert measured volume only with matching density, state, temperature, units and source. This does not prescribe water cooling.

- Selected flow: Actual supplied water for cleaning, containment and testing
- Flow property / unit: Mass / kg
- Amount rule: Attributable supplied water mass / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

Range evidence need: Collect actual cleaning/test method and calibrated meter or delivery records; the route has no universal water demand.

###### External electricity imported during the job (`electricity_import`)

Meter import separately for isolation, installation auxiliaries, configuration, tests, repeated tests and provider equipment. Keep source, voltage and time interval. Standalone electrical Energy support and concrete exchange must be independently verified; calorific value is not a substitute.

- Selected flow: Actual grid or supplied electricity imported for station work and commissioning
- Flow property / unit: Energy / kWh
- Amount rule: Attributable externally imported electricity / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

Range evidence need: Use actual time-resolved submeter or evidenced shared-meter attribution; no literature kWh-per-station default.

#### Outputs

##### Product flows

###### Accepted existing utility PV central-inverter station repowering and recommissioning service (`accepted_station_service`)

Count a unique identified station only after approved retained-array/MVT/foundation compatibility, completed mechanical/electrical/protection/earthing/SCADA/grid-control tests, defect closure, required report and signed operator re-entry acceptance. N is the positive number of such station IDs in the job campaign, counted once.

- Selected flow: Accepted existing utility PV central-inverter station repowering and recommissioning service
- Flow property / unit: Count / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

Range evidence need: Exact 1 is reference normalization, not empirical yield. Collect N and all required signed gates; failed attempts never increase N.

###### Metered external test electricity export (`test_electricity_export`)

Record source, interval and interface independently from imported electricity and pre-existing array generation. This is an actual incidental measured exit, not future generation or a co-product target. Default construction burden receives no netting or avoided-grid credit; any separately authorized consequential model must be disclosed outside this attributional dataset.

- Selected flow: Actual metered commissioning electricity exported at approved interface
- Flow property / unit: Energy / kWh
- Amount rule: Actual externally exported commissioning electricity / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

Range evidence need: Require actual export meter and causal job allocation; no assumed yield uplift or export equal to imports.

##### Waste flows

###### Captured cleaning and test wastewater (`contained_wastewater`)

Track tank/batch, water source, contaminants, recovery and treatment receiver; contained liquid is not an elementary discharge. Include actual upstream treatment service once; upstream water stays owned even when captured.

- Selected flow: Actual contained wastewater dispatched to authorized treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual outward contained wastewater mass / N.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exits`

Range evidence need: Use actual weighed or state-compatible volume/density records and receiver evidence; no assumed wastewater ratio.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| supply_convention | New supply stocks and outlets | For each actual SKU and native unit let S = opening attributable stock + external net-tare gross receipts - closing carried stock. Internal issues are not receipts. Declare gross-with-outlets: upstream burden follows S and usable outward returns remain separate physical exits; or consumed-only: upstream burden follows S minus matched outward usable returns once. Never also give a return credit. All installed/used, nonreturned waste and uncontained loss retain supply burden; final installed retention excludes waste, return and release. |  |
| historical_exit | Removed historical equipment | Partition old serials and any independently measured mass into documented reusable equipment or actual electronic waste and temporary retained pending status. No serial is both reusable output and WEEE. Reuse is not a new intended co-product of this service and receives no arbitrary displacement credit. Missing final fate remains a quality gap; it is never a negative new-input quantity. |  |
| repeat_mode | Campaign and rework treatment | This is finite job/campaign production. Failed tests, rejected installations, cleaning, setup, mobilisation, changeover, repeated configuration and remedial removal stay in the actual station/campaign numerator. Link each rework loop or usable return/waste exit to its originating integration event. Count a station once only after complete acceptance; no planned MW, inverter stacks, attempts or partly repaired stations augment N. Shared campaign resources use an actual causal measured driver with a disclosed all-consumer denominator and one owner. |  |
| asset_attribution | Shared assets over full life | For each actual lifting unit, tool, test load or grid emulator, whole-life burden includes manufacture + maintenance + replacements + end-of-life. Allocate by actual job driver / compatible whole-life driver across ALL jobs, nodes and periods, including outside this campaign. Supply complete observed life or observed history plus evidenced remaining use, replacement, termination and end-of-life with uncertainty, sensitivity and update trigger. Missing coverage/denominator blocks final data; rental or provider inclusion must be reconciled before adding direct asset burdens. |  |
| electricity_separation | Commissioning electricity | Keep external import, external test export, retained-array electricity entering tests, internal circulation, dissipated test load and losses in distinct interval-consistent physical ledgers. Internal circulation is audit activity, never another purchased flow; supplied test-load equipment/resources are owned. Do not net export against import or forecast generation; no automatic negative construction burden or avoided-grid credit. No generic renewable-electricity co-product allocation is asserted. |  |
| fuel_species_views | Physical and species ledgers | Fuel closing usable stock, outward usable return, nonburned waste, uncontained loss and burned activity are disjoint. Total spill is audit-only; recovered spill in usable closing stock is already closing. Whole product/fuel physical balances and species-to-medium elementary exchanges are nonadditive views. Derive species only from actual measurement or applicable activity-factor/composition-fate evidence, excluding captured stock/returns/waste/treatment once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | station_integration | Reference and compatibility gate | station_register | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; station_serial; retained_array_id; retained_mvt_id; retained_foundation_id; dc_ac_ratings; topology; mechanical_interface; earthing_protection; firmware_control_scada; approved_method; isolation_record; test_result; defect_closure; report_id; acceptance_signature; acceptance_date; N | Join competent approved design and actual isolation/installation/test/re-entry records. Verify actual MVT compatibility; a marketing majority is insufficient. Deduplicate final station IDs and exclude failed or incomplete gates. Aggregation: N = positive unique fully accepted station IDs; reference output 1 item; other attributable amounts / N, per reference flow. | item | Each station, every test/retest and signed acceptance | Actual job start through signed acceptance, all phases and reporting periods | Actual station and retained interfaces | per reference flow | Qualified design, serial register, complete functional report and signatures |
| cp_supply | station_integration | New components and mass supplies | sku_stock | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; sku_id; serial_or_reel; specification; package_bom_coverage; native_quantity; native_unit; opening_stock; gross_receipts; tare; internal_issue; closing_stock; installed_retained; usable_outward_return; waste_exit; uncontained_loss; convention; supplier_record | Reconcile actual SKU delivery/stock/install/return records in compatible native units. Pair package coverage and component purchase exclusions. Stock final retention, physical activities and exits are separate; source any independent mass view. Aggregation: calc_supply attributable native supply / N, per reference flow; retain separate SKU ledgers. | actual native unit | Each receipt, stock close, installation and exit | All job phases and carry-in/out reporting periods | Actual direct and provider supplies | per reference flow | Invoices, tare, BOM, installation and return matched records |
| cp_utilities | station_integration | Actual utility and test energy ledgers | meter_ledger | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; resource_id; source_id; meter_id; interval_start; interval_end; imported_quantity; exported_quantity; retained_array_test_generation; internal_circulation; dumped_load; losses; water_quantity; quantity_unit; density; density_unit; material_state; temperature; conversion_source; shared_driver; shared_total; owner; temperature_unit | Read calibrated interval meters or documented actual causal shares; separate grid imports, exports, retained generation, circulation and dissipated test load. For actual water volume-to-mass retain same-state density/temperature/unit/source. Verify actual Energy support before final exchange generation. Aggregation: Each attributable utility input or actual export / N, per reference flow; internal circulation and dumped load are audit-only physical states. | kWh; kg | Every actual utility interval and test/retest event | Complete job and provider periods, no later operation | Identified station and attributable shared meters | per reference flow | Meter calibration, interval balance, owner and conversion evidence |
| cp_fuel | station_integration | Supplied fuel and combustion activity | fuel_balance | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; fuel_sku; equipment_id; opening_usable; gross_receipts; tare; closing_usable; outward_usable_return; burned_activity; nonburned_waste; uncontained_loss; total_spill_audit; recovered_spill_closing; quantity; unit; density; density_unit; material_state; temperature; conversion_source; convention; owner; measured_volume; volume_unit; burned_measurement_method; balance_audit; uncertainty; unknown_loss; temperature_unit | Measure compatible mass or volume with actual specification-specific density/state/temperature/source. Reconcile disjoint stock, return, burn, waste and loss with equipment logs; retain nonburned waste/loss upstream burden. Require measured burn or audited complete-fate balance and uncertainty; unresolved loss never becomes burned activity. Aggregation: Attributable upstream supplied fuel / N, per reference flow; burned activity retained independently for calc_species. | kg | Every fuel receipt, use and closing or loss/return event | All job and attributable provider phases/periods | Each actual fuel owner/equipment | per reference flow | Fuel tickets, tank readings, equipment logs and mass-balance closure |
| cp_services | station_integration | Providers, treatment and freight | provider_shipment | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; provider_id; contract_id; scope; completed_result; native_quantity; native_unit; upstream_resources; coverage_matrix; shipment_id; transport_mode; payload_mass; payload_unit; distance; distance_unit; empty_return; shared_load_driver; shared_total; receiver; treatment_record; owner | Match actual completed service and resource statement to contract, actual cargo legs and waste receiver. Require native-unit compatibility and upstream boundaries, identify resources direct versus included provider exactly once. Aggregation: Actual attributable provider native activity or kg*km / N, per reference flow; no price-to-Count conversion. | actual native unit; kg*km | Each bounded service, shipment, treatment batch and invoice coverage close | Complete job and actual upstream service periods | Actual providers/routes/receivers serving this station | per reference flow | Contract, completed test, resource statement, waybill and receiver ticket |
| cp_assets | station_integration | Whole-life shared asset attribution | asset_life | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; asset_identity; consuming_jobs_nodes; manufacture; maintenance; replacements; termination; end_of_life; observed_history; observed_driver; evidenced_remainder; remainder_driver; whole_life_driver; job_driver; driver_unit; coverage; uncertainty; sensitivity; update_trigger; provider_inclusion; owner; selected_native_view; native_unit; remainder_source; replacement_source; termination_source; eol_source; last_update; next_update | Enumerate all consumers and periods. Obtain full observed life or observed history plus evidenced remainder/replacements/termination/EOL. Require identical compatible driver definition in job numerator and all-life denominator and reconcile provider/rental inclusion. Aggregation: Select exactly one verified view. Asset-equivalent quantity per reference flow = (actual job driver / whole-life driver) / N; lifecycle-complete native service-driver quantity per reference flow = actual job native service-driver quantity / N. Match the corresponding lifecycle-complete upstream unit burden once. No missing denominator; no mixture of views. | actual compatible native service driver | Each asset use, maintenance/replacement and evidence update | Whole life across all jobs and periods, plus job phase share | All users of each actual shared lifting/test/tool asset | per reference flow | Asset history, evidenced future service, replacements/EOL, uncertainty and sensitivity |
| cp_exits | station_integration | Physical returns, removed equipment and wastes | exit_manifest | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; exit_id; supply_or_old_asset_id; sku_or_serial; quantity; unit; net_tare; measured_mass; measured_length; material_state; density; density_unit; temperature; conversion_source; usable_condition; waste_class; temporary_stock; receiver; destination; treatment_coverage; transfer_pair; owner; temperature_unit | Match actual old serial or new supply SKU to measured native exit and qualified reuse/waste/return status; separate temporary retained stock. Use mass only when actually independently required and measured. Match receiver/treatment and prevent duplicate reusable versus waste outputs. Aggregation: Each actual outward native quantity / N, per reference flow; no negative new inputs or double return credits. | item; m; kg | Every outward exit, interim stock close and receiver confirmation | Actual removal through final receiver confirmation, including carried periods | Old equipment and new supply exits of this station | per reference flow | Serial/SKU register, weighing, condition and authorized receiver documents |
| cp_releases | station_integration | Species and receiving-medium evidence | release_event | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; event_type; resource_owner; product_sku; fuel_equipment; species; receiving_medium; measured_release; activity; activity_unit; factor; factor_unit; factor_applicability; composition; fate_fraction; captured_stock; outward_return; captured_waste; treatment; release_quantity; quantity_unit; uncertainty; absence_evidence; factor_source; composition_basis; composition_source; fate_basis; fate_source; physical_release_unit; complete_factor_coverage | Use actual measured species release or valid burned-activity factor/composition-fate chain with actual medium. Separate routine and incident events and physical whole-product audit; remove captured/returned/waste/treatment once. Safety concentrations or SDS alone are insufficient. Aggregation: Actual species-to-medium release mass / N, per reference flow; nonadditive to physical product/fuel ledger. | kg | Every actual routine interval or incident; each actual species/medium | All job and attributable provider phases/periods | Actual release location and receiver medium | per reference flow | Calibrated measurement or applicable factor/composition-fate evidence and incident log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_direct | replacement_central_inverter,interface_parts_count,interface_cable_length,installation_mass_supplies,water_supply,fuel_supply,electricity_import,freight_service,specialist_service,shared_asset_service,removed_reusable_equipment,usable_count_returns,usable_length_returns,usable_mass_returns,test_electricity_export,removed_electronic_waste,new_supply_waste,contained_wastewater,nonburned_fuel_waste,direct_combustion_species,direct_incident_species,waste_treatment_service | For each actual native exchange, amount = attributable actual native quantity / N. N is the positive unique final accepted station count from cp_acceptance. Keep numerator units and disjoint roles; this is direct per-reference attribution, not a mass/capacity conversion. | actual native quantity; N; relevant node-owned protocol | native exchange per reference flow |  |
| calc_supply | replacement_central_inverter,interface_parts_count,interface_cable_length,installation_mass_supplies,fuel_supply,usable_count_returns,usable_length_returns,usable_mass_returns | S = opening attributable stock + external net-tare gross receipts - closing carried stock; gross-with-outlets uses S upstream and separate physical usable returns, consumed-only uses S minus matched outward usable returns once. Internal issue is not receipt. Nonreturned waste/loss stays upstream; no extra return credit. | cp_supply; cp_fuel; cp_exits; declared supply convention | attributable native supply and separate physical exits |  |
| calc_fuel | fuel_supply,nonburned_fuel_waste | Burned activity = opening usable fuel + external net-tare receipts - closing usable fuel - outward usable return - nonburned waste - uncontained nonburned loss. Each outlet is disjoint; total spill is audit-only, recovered spill already in closing usable stock. Upstream supply follows calc_supply, not burned activity alone. Burned activity must be measured or supported by an audited complete-fate balance and stated uncertainty; unknown/unmeasured loss remains unresolved, never automatically combustion. | cp_fuel; cp_exits; actual specification | separate burned activity and fuel physical balance |  |
| calc_electricity | electricity_import,test_electricity_export | Record interval-consistent import, actual export, retained-array test generation, internal circulation, dumped load and losses separately. Assign actual job causal share once; internal circulation is nonadditive audit activity. Do not subtract exported or forecast generation from imported electricity or construction burden. | cp_utilities; actual meter intervals and owner | separate actual electrical ledgers |  |
| calc_freight | freight_service | Actual owned freight activity = sum of actual cargo mass in kg times actual leg distance in km with evidenced load and empty-return attribution. Include only legs not already covered upstream/provider. Divide attributable kg*km by N through calc_direct. | cp_services; shipment payload; leg distance; ownership | actual kg*km service |  |
| calc_provider | specialist_service,waste_treatment_service | Use completed actual provider native activity with matched scope, results and upstream resource coverage. Attribute actual job share once; price/hours do not convert to Count and treatment exits alone are not treatment service inventories. | cp_services; actual provider and native support | bounded native provider service |  |
| calc_asset | shared_asset_service | Choose exactly one verified actual upstream view. Asset-equivalent view: native quantity = actual job driver / whole-life driver and upstream burden per asset-equivalent = manufacture + maintenance + replacements + end-of-life. Lifecycle-complete service-per-driver view: native service quantity = actual job driver and upstream burden per native driver unit = full-life burden / whole-life driver. Both yield job burden = full-life burden times actual job driver / whole-life driver. Verify the actual native unit and coverage before selecting; never mix hours with dimensionless share. Use complete observed life or observed history plus sourced evidenced remainder/replacements/termination/EOL over ALL jobs/nodes/periods, with uncertainty, sensitivity and update. Divide the chosen native quantity by N exactly once. | cp_assets; compatible all-life denominator; coverage matrix | job-attributed whole-life asset burden |  |
| calc_exit | removed_reusable_equipment,usable_count_returns,usable_length_returns,usable_mass_returns,removed_electronic_waste,new_supply_waste,contained_wastewater,nonburned_fuel_waste | Assign actual outward quantity to one disjoint native exit role with serial/SKU, condition, class and receiver evidence. Closing carried stock is not outward exit. Old reusable equipment and old WEEE are mutually exclusive; new usable returns match calc_supply once. Count/length exits need no invented mass conversion; independently required waste mass needs actual same-specification evidence. | cp_exits; cp_supply; cp_fuel; receiver | actual disjoint outward physical quantities |  |
| calc_species | direct_combustion_species,direct_incident_species | Actual species release = measured actual species mass, or applicable actual activity times valid species/medium factor, or actual released product amount times evidenced composition and fate. Exclude retained/captured stock, usable returns, waste and treatment once; preserve uncertainty. Do not use physical residual, safety concentration, SDS or no-VOC claim alone as emitted mass. Whole product and species views are nonadditive. A complete activity-to-species emission factor already contains its stated composition/fate; do not multiply composition or fate again unless its documented factor definition requires it. | cp_releases; cp_fuel; cp_exits; actual species and receiving medium | actual species/medium mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | Reference identity and configuration | Require retained/replaced BOM, actual ratings/topology, firmware/protection/control state, station ID, site, design and acceptance date; no MWp/kWh equivalence. | cp_acceptance and design/serial records |
| q_coverage | Resource coverage and fate | Complete all actual direct and provider resources, stock/outlets, transport, wastes and treatment. Evidence actual non-use explicitly; unresolved quantity, resource owner, support chain or waste fate remains a final-data blocker, not zero. | All node-owned protocols and coverage matrix |
| q_ranges | Ranges and uncertainty | Collect station/configuration-specific observed distributions, actual design limits and uncertainty. No universal material/energy/test yield or service life is supplied. Range evidence needs must be resolved before using default estimates or asserting publication readiness. | Actual foreground range evidence and sensitivity |
| q_period | Temporal completeness | Cover all actual campaign phases, retests and carry periods plus asset observed history/evidenced remainder. Record replacements/termination/EOL and update on real changes; no arbitrary annualization. | Phase/period/event join and full-life asset records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_gate | Acceptance and retained interfaces | Require N>0, unique station IDs, actual compatible retained MVT/arrays/foundation and completed approved mechanical/electrical/protection/earthing/SCADA/grid-control test gates, defect closure, report and operator signature. Missing or failed gate blocks accepted output. | sma-utility-repowering; sma-pv-commissioning; sma-industrial-services |
| v_stock | Native stock and disjoint exits | Reconcile each SKU/native unit, package-component exclusions, gross-with-outlets or consumed-only convention, old-versus-new equipment and disjoint usable/waste/release/closing roles. No arbitrary mass conversions, negative new inputs or double returns/credits. |  |
| v_energy | Commissioning resources and species | Keep import/export/retained generation/circulation/dumped-load ledgers distinct, own actual resources once and retain supplied fuel burdens including waste/loss. Verify actual burned-activity/species/medium evidence and nonadditive physical views. No automatic energy credit or theoretical emission inference. |  |
| v_loops_periods | Rework and period coverage | Link every failed/aborted/repeated test, rejected installation, cleaning/setup/changeover event and resource to actual campaign/batch/event/phase/period and originating node. No unresolved reject counts as accepted; no duplicated shared event across periods. |  |
| v_assets | Shared providers and assets | Require complete actual service results/upstream coverage and whole-life manufacture/maintenance/replacement/EOL asset evidence with compatible job/all-life driver across all jobs/periods. Missing remainder, replacement, termination, denominator or coverage blocks finalization; test direct/provider/rental duplicates and sensitivity. |  |
| v_binding | Final exchange identities | Before a final dataset, verify each actual flow, native property and unit support including standalone electricity Energy and actual provider/asset chains. A candidate with unresolved product identity is not publication-ready; a checker pass does not verify external identity or physical foreground data. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground station-repowering service data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same qualified existing utility ground-PV central-inverter retained-MVT service, with configuration and acceptance comparability disclosed; downstream process/lifecyclemodel projections. |
| excluded_use | Generic new plant, generic inverter supply, module/MVT replacement, batteries, home/string-only routes, capacity or electricity equivalence, future avoided-impact claims. |
| required_metadata | Actual station/site/serial IDs, retained/replaced BOM, ratings/topology, qualified MVT/foundation/array interfaces, firmware/protection/SCADA/grid state, actual local/OEM method, test/defect report, signature/date, N, campaign/phases/periods, resource ownership and old-equipment fate. |
| required_quality_disclosure | Actual quantity/range evidence, unresolved actual UUID/support chains, provider and asset upstream coverage/life denominator, stock/return convention, test energy separation, release uncertainty, missing fate and sensitivities; no publication claim while blockers persist. |
| update_trigger | Changed station configuration/retained MVT, actual approved route/gates, provider scope/resource coverage, receiver/fate, UUID support, metering, asset remainder/replacements/termination/EOL or material new foreground evidence. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-powerplant-services | official_guidance | United Nations Statistics Division, CPC Ver.3.0 explanatory notes, 30 June 2025, subclass 54262, printed p.287; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Heavy generating plant/equipment construction, repair and alteration classification scope; not method quantities. |
| sma-utility-repowering | extension_guidance | SMA America, Repowering utility; https://www.sma-america.com/repowering-utility | Central-inverter retrofit and possible retained MVT; most MVTs compatible is not actual compatibility or a design guarantee. |
| sma-pv-commissioning | extension_guidance | SMA Solar Technology, Commissioning large-scale PV power plants; https://www.sma.de/en/products/services-warranty/commissioning-large-scale-pv-power-plants | Installation verification, configuration, comprehensive functional testing and commissioning report. |
| sma-industrial-services | extension_guidance | SMA America, Services for Industrial Systems; https://www.sma-america.com/service-support/services-for-industrial-systems | Mechanical/electrical readiness and complete DC-inverter-AC test path; grid emulation only if actually selected. |
| epri-inverter-repowering-abstract-2024 | literature | R. Dhakal, EPRI report 3002029900, 1 November 2024, Repowering and Retrofitting of Solar Inverters: A Field Case Study [Slides], OSTI 2476025 abstract only; https://www.osti.gov/biblio/2476025 | Abstract-level evidence of mechanical/electrical/communications compatibility for a different-OEM retrofit; no full-text method or performance claims. |
