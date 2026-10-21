---
pcr_id: pcr.construction-services.existing-long-distance-single-mode-optical-fibre-fusion-splice-repair-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing long-distance single-mode optical-fibre fusion-splice repair services

## 1. Scope and Applicability

This PCR covers a bounded repair of existing dielectric single-mode optical fibres in a declared long-distance land telecommunications network. Single-fibre electric-arc fusion joins two compatible retained fibre ends using sufficient existing slack; each accepted connection is protected, optically and mechanically verified, organised, and released only after its retained serviceable sealed closure has been re-sealed and checked. The method boundary includes safe authorised optical isolation, access/protection, closure re-entry, cutback, mechanical stripping, cleaning, cleaving, alignment/program selection, arc fusion, checks, sleeve heating, routing, enclosure work and all failed attempts through signed owner acceptance. [corning-single-fibre-fusion-2020; corning-retained-closure-2019]

Exclude new route or cable manufacture, new cable inserts and long cut replacements, new closure bodies, local/FTTH/in-building networks, submarine works, power cables, multimode fibres, mass-ribbon fusion, mechanical splices, connector/pigtail installation and later network operation. Insufficient slack, incompatible fibres or a failed retained closure/interface require another route; they cannot be treated as this PCR with extra generic supplies. CPC inclusion is narrower than the long-distance communication-and-power-lines class and creates no claim over its power-line services. [un-cpc3-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-long-distance-single-mode-optical-fibre-fusion-splice-repair-services |
| classification_refs | CPC 3.0 54242; narrower; general construction services of long-distance communication and power lines (cables) |
| covered_products | Accepted permanent single-mode single-fibre-pair fusion-splice repair connections in existing long-distance land optical cable, within retained re-enterable sealed closures |
| excluded_products | New cable insert/route/closure body; local/FTTH; submarine; power; multimode; ribbon mass-fusion; mechanical splice; connectors and pigtails |
| representative_product | One identified repaired fibre-pair connection using actual compatible retained fibre ends and actual matched heat-shrink protector, at a specified retained closure |
| production_route | One integrated closure campaign: isolate/access/re-enter; prepare retained ends; fuse; mechanically and optically verify; protect/route; reseal/check; signed acceptance |
| market_state | Completed site-specific repair service at bounded owner handover, with actual fibre, closure and acceptance configuration declared |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One accepted identified single-fibre-pair permanent fusion-splice repair connection |
| How much | 1 item; N is the positive number of unique final accepted fibre-pair connection IDs in the declared job/campaign |
| How well | Compatible actual single-mode fibres; mechanical criterion, calibrated optical result at declared wavelength/method/threshold, protected bend-safe organisation, retained-closure reseal/check and signed acceptance all complete |
| How long or cycle | One finite repair campaign from mobilisation/isolation through final closure acceptance, including rework and charging attributable to that campaign; declare event/reporting periods and shared-tool manufacture, maintenance, replacement, termination and end-of-life phases separately; no service-life promise |
| reference_flow_link | `accepted_fibre_pair_repair` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted long-distance single-mode single-fibre-pair fusion-splice repair service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | long-distance land-network function; network/job/closure/fibre-pair IDs; existing fibre types and compatibility; sufficient slack; protector and organiser configuration; splicer/program and calibration; mechanical criterion/result; optical method/wavelengths/threshold/results including bidirectional averaging for OTDR splice loss; reseal/check requirements/results; defect closure; owner acceptance; geography/date; actual input/waste/release boundaries |

A count is one accepted connection after all parent-closure gates, not a closure, metre, sleeve, arc cycle or attempt. N/N gives exactly one accepted connection per reference; all repeat preparation, failed arcs, discarded sleeves, shared enclosure opening/reseal and tests remain attributable to final accepted N. Different fibre/closure configurations are not functionally equivalent merely because both use item.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_connection_count | accepted_fibre_pair_repair | Count | item | Use unique final accepted fibre-pair IDs from cp_acceptance. Count once only after mechanical/optical/protection and parent-closure gates; N must be positive. |
| native_material_ledger | splice_protectors; fibre_cleaner; preparation_consumables; closure_reseal_materials; outward_protector_returns; outward_material_returns; fibre_sharps; other_solid_waste | Actual native property | Actual native unit | Preserve each material/SKU native Count, Length, Mass or Volume ledger. Count balance requires actual discarded Count; mixed contaminated waste kg is not discarded sleeve Count. Count-to-mass requires measured matching SKU unit mass; volume-to-mass needs volume unit, density, state, temperature and source from cp_materials. |
| optical_method | accepted_fibre_pair_repair | Optical test result | Declared test unit | Splicer visual/estimated loss does not substitute actual calibrated optical measurement. Accurate OTDR splice loss uses both-direction readings and their average at each declared wavelength. Actual owner criterion governs; optical loss does not establish tensile performance. [corning-single-fibre-fusion-2020] |
| utility_measurement | electricity_supply; direct_fuel; closure_test_gas | Energy or Mass | MJ or kg | Keep charger/meter boundary and fuel/gas ledger distinct. Convert recorded kWh using 3.6 MJ/kWh; gas Volume-to-Mass needs actual pressure, temperature, composition, density/state and traceable method. No per-arc or universal gas quantity assumed. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared existing long-distance land optical cable with compatible dielectric single-mode fibre ends, sufficient repair slack and qualified retained serviceable re-enterable sealed closure; authorisation and optical isolation required |
| starting_condition_role | Existing productive-state interfaces: separate left/right retained fibre end roles, retained cable/sheath, organiser and closure body; not new purchases, historical manufacture charges or avoided-replacement credits |
| product_classification_scope | Narrower long-distance communication-line repair service within CPC 3.0 54242; power/local/submarine services excluded |
| recursive_input_rule | An external repair subcontract in the same category requires its bounded completed scope, actual reference quantity and upstream burden evidence; assign its resources once, and never recurse through the same acceptance ID or count subcontract and in-house repair outputs twice |
| upstream_dataset_requirement | Actual incremental protector, cleaner, wipes, seals, utilities, access, transport and shared-asset supply chains require technology/geography/period-appropriate upstream coverage. A supplier service may replace direct resources only for exactly documented included work with compatible actual unit and no overlap |
| disclosure | Declare retained interface condition, isolation, fibre/slack, campaign/period, actual material and utility ledger boundaries, all attempts, common closure/test allocation, external providers, assets and releases; identify missing information instead of treating unknown as zero |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| repair_gate | splice_repair | Retain one integrated responsibility for the joining of left and right existing fibre ends and new protective interface; retained closure/organiser receive the protected connection. Keep preparation, arc/heat, verification and reseal together unless actual independent inventory handoff is evidenced. The completed state and signed gate must include actual mechanical and optical checks, protection, routing and closure acceptance. | corning-single-fibre-fusion-2020; corning-retained-closure-2019 |
| incremental_scope | splice_repair | Include actual incremental isolation/access/shelter, cleaning, sharps containment, seal replacement, approved test gas or compressor operation, failed attempts, retests, transport and demobilisation even if a provider pays. Retained cable and closure are state inputs; inspect job-caused damage and block this route if replacement body/insert is needed. | corning-single-fibre-fusion-2020; corning-retained-closure-2019 |
| event_and_asset_phases | splice_repair | Index each setup, cleaning/changeover, fibre attempt, closure test and final acceptance by job, closure and event period. Separately index tool manufacture, maintenance/replacements, service periods and termination/end-of-life across all consuming jobs; opening/closing stocks carry their actual upstream burden across periods. |  |
| physical_ledger | all inventory rows | Choose gross receipt with explicit outward outputs or consumed-only purchasing treatment per material, never both. Gross is net of actual tare before outward-return netting. Dosed/used material is intermediate activity; final installed/retained destinations exclude separately logged waste/release/return. Internal store issue is not a second external receipt; closing stock is not outward exchange. |  |
| whole_gas_and_species | closure_test_gas; elementary_releases | A whole clean-air/nitrogen mixture physical ledger records actual released mass and final destinations; it is not a generic elementary gas emission. Elementary species need identity/composition/fate/medium evidence and remain nonadditive with the whole mixture view. Actual closure-approved pressure/torque and release procedure govern; no universal settings. | corning-retained-closure-2019 |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Incremental preparation cleaning containment and access consumables (`preparation_consumables`)

Process / prospective direction / type: `splice_repair` / `inputs` / `product`.

Expand actual wipes, sharps containers, absorbers, preparation/closure-cleaning water and temporary protection supplies into separately identified concrete flows. Separate disposable material from reusable asset allocation. Identify water supply and wastewater custody; materials absent with evidence create no hypothetical purchase.

- Collection subject: Incremental preparation cleaning containment and access consumables
- Flow property / unit: Mass / kg
- Amount rule: Each actual material attributable (opening_stock + gross_receipt - closing_stock) kg / N, with matched stock burden/return convention and supported own-native-unit conversion; never add unlike units.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `corning-single-fibre-fusion-2020`; `corning-retained-closure-2019`

Range evidence need: Actual preparation, site exposure, cleaning and containment logs, supply identity and measured mass/native-unit conversion are required; no universal wipe/water/absorber allowance is available.

#### Collection requirement: Actual incremental retained-closure resealing materials (`closure_reseal_materials`)

Process / prospective direction / type: `splice_repair` / `inputs` / `product`.

Expand actual replacement seals/gaskets, grease, tape and other approved reseal supplies by compatible closure instruction and actual SKU. Retained closure body/organiser and unchanged seals are not new materials. Keep kit supply versus constituent supply mutually exclusive and count common closure work once.

- Collection subject: Actual incremental retained-closure resealing materials
- Flow property / unit: Mass / kg
- Amount rule: Actual incremental same-SKU attributable (opening_stock + gross_receipt - closing_stock) kg / N with matched stock burden/return convention and measured matching unit mass or density where needed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `corning-retained-closure-2019`

Range evidence need: Collect the actual closure model/re-entry instruction, reused/replaced component decision and measured supplies; the dated example procedure supplies no universal reseal mass or kit-per-fibre range.

#### Collection requirement: Actual direct fuel supply for repair plant and access (`direct_fuel`)

Process / prospective direction / type: `splice_repair` / `inputs` / `product`.

Expand actual generator/access plant or directly modelled vehicle fuels by formulation. Use gross receipt/stocks/final outlets; transport bought as a service excludes its already covered direct fuel. Fuel absent by actual electric operation evidence is conditional zero, not a presumed minimum.

- Collection subject: Actual direct fuel supply for repair plant and access
- Flow property / unit: Mass / kg
- Amount rule: Attributable campaign (opening_stock_kg + gross_receipt_kg - closing_stock_kg) / N with matched stock burden/return convention; burned_kg is separately reconciled emission activity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`

Range evidence need: Actual fuel type, net receipts, opening/closing stocks, burn evidence and final spill/return/waste destinations are required. Do not infer burn from rental hours or generic consumption factors.

#### Collection requirement: Actual purchased repair logistics transport service (`transport_service`)

Process / prospective direction / type: `splice_repair` / `inputs` / `product`.

Record actual purchased freight/service legs for crew equipment, supplies and removed materials only where compatible mass-distance service is genuinely delivered. Hours or vehicle-km prices do not establish tonne-km. Directly modelled vehicle resources are owned once by fuel, power, assets and releases rather than this service.

- Collection subject: Actual purchased repair logistics transport service
- Flow property / unit: mass*distance / t*km
- Amount rule: Actual nonoverlapping attributable sum(payload_net_tonnes * route_km) t*km / N with declared empty/return allocation and no direct-vehicle overlap.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

Range evidence need: Collect actual origin/destination, payload, route distance, return/empty legs and provider boundary; reject invented average haul distances or tonne-km conversions from repair price.

#### Collection requirement: Allocated complete-life repair tool and access asset supply (`shared_asset_supply`)

Process / prospective direction / type: `splice_repair` / `inputs` / `product`.

Expand actual splicer/heater, cleaver, stripper, optical tester/source/receiver, reusable sharps/tooling, charger/battery, shelter/access plant and applicable cylinders into actual asset identities. Allocation includes manufacture, maintenance, replacement and end-of-life across all jobs/nodes/periods, with direct operation and already owned spare/consumable/provider coverage excluded. A bounded rental can substitute only with its complete documented resource/result scope and actual compatible reference unit.

- Collection subject: Allocated complete-life repair tool and access asset supply
- Flow property / unit: Count / item
- Amount rule: Each actual complete-life asset driver_job / driver_all_consumers in item, then / N, linked to complete manufacture, maintenance, replacement and end-of-life burdens and all consumer periods.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: Collect complete observed life or observed history plus justified remaining life, replacement/termination/end-of-life scenario, uncertainty and update trigger; all-consumer compatible driver denominator is mandatory. No universal tool life or hours-to-item price conversion.

#### Collection requirement: Actual outward reusable material returns (`outward_material_returns`)

Process / prospective direction / type: `splice_repair` / `outputs` / `product`.

Expand actual unused clean mass-measured supplies/fuel/gas returned across the boundary by material identity and custody. Native counted protector returns belong to outward_protector_returns, not this mass card. Closing stock staying within the boundary is not an outward return. No return or avoided-production credit is assumed.

- Collection subject: Actual outward reusable material returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable outward return_native_quantity kg / N for mass-measured supplies; keep these distinct from closing stock and native counted protector returns.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Collect actual returned mass-measured supply identity, condition, net mass, recipient and custody. No universal return fraction; no forced Count-to-Mass conversion for native protector returns.

#### Collection requirement: Actual outward unused protector returns (`outward_protector_returns`)

Process / prospective direction / type: `splice_repair` / `outputs` / `product`.

Record actual unused matched protector SKU Count leaving to an identified recipient. Keep these native counted returns separate from installed/discarded protectors and closing stock; they require no mass conversion unless an independently needed mass view is evidenced. No avoided-production credit is assumed.

- Collection subject: Actual outward unused protector returns
- Flow property / unit: Count / item
- Amount rule: Actual attributable same-SKU unused return_native_quantity item / N; preserve native Count without forced mass conversion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Collect matching SKU, actual unused return Count, condition, recipient and custody. No universal return fraction; no Count inferred from mixed-waste kg.

#### Collection requirement: Removed fibre glass sharps and associated coating waste (`fibre_sharps`)

Process / prospective direction / type: `splice_repair` / `outputs` / `waste`.

Record actual cutback/cleave glass sharps and coating fragments removed from retained fibres, including repeat preparation, in controlled identified collection. Expand separate fractions or actual composite waste according to real custody/composition, without charging new fibre manufacture or substituting generic virgin glass.

- Collection subject: Removed fibre glass sharps and associated coating waste
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable net waste kg / N, with validated matching measured cut-length/unit-mass conversion if tiny quantities cannot be directly weighed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `corning-single-fibre-fusion-2020`

Range evidence need: Actual removed length/coating/fibre geometry or calibrated net weighing, containment tare and destination evidence are required; no universal cutback, glass density or loss fraction is supplied.

#### Collection requirement: Actual discarded protectors wipes seals packaging and containment waste (`other_solid_waste`)

Process / prospective direction / type: `splice_repair` / `outputs` / `waste`.

Expand actual failed protectors, used wipes/absorbers, replaced seals, packaging and other solid wastes by actual contamination and authorised recipient. Keep discarded protector Count in cp_materials separately from measured mixed-waste kg. Captured cleaner/fuel forms part of this actual waste, not an additional environmental release.

- Collection subject: Actual discarded protectors wipes seals packaging and containment waste
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable net waste kg by disjoint stream/receiver / N, excluding separately owned fibre sharps/wastewater and retaining discarded native protector Count.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: Collect segregation/composition, net tare, failed/discarded SKU Count where relevant and receiver route; no universal hazardous classification or waste-to-product credit.

#### Collection requirement: Actual identified elementary releases to declared receiving media (`elementary_releases`)

Process / prospective direction / type: `splice_repair` / `outputs` / `elementary`.

Expand actual routine cleaner evaporation, combustion species, leak/test gas constituent releases and incident releases only after substance/species or particle-size identity and air/water/soil medium are known. Use measured results or valid composition/fate/activity-factor calculations. Whole fuel/cleaner/test-gas mixtures and species views are nonadditive; captured residues remain waste or stock. Unexplained residual is not an emission and generic VOC/NOx/oil-mixture near-matches are prohibited.

- Collection subject: Actual identified elementary releases to declared receiving media
- Flow property / unit: Mass / kg
- Amount rule: Each actual substance-medium measured or valid activity-factor/composition-fate release kg / N, excluding captured/returned/retained fractions and duplicate whole-mixture views.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`

Range evidence need: Collect actual substance/medium, formulation, measured mass or valid factor scope, activity/state/fate and uncertainty before proposing ranges. Low-VOC/SDS/certification or a mass-balance residual is not a release factor or zero proof.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| splice_repair | Integrated single-fibre repair and retained-closure acceptance | required | Declared long-distance land single-mode single-fibre route with qualified retained cable/fibres/slack/closure | One joining and final acceptance responsibility; separate retained left/right fibre ends, new protector and actual replacement seal roles; finite closure campaign and failed-attempt loops | 1 item accepted fibre-pair repair |

The integrated node owns isolation/access, end preparation, electric-arc joining, distinct mechanical/optical evaluation, protection/routing and common closure reseal/check. Retained fibre-end and host-interface roles are state evidence, not new supply exchanges. Actual externally purchased joining work needs a completed scope/unit and disjoint resource ownership; arc and sleeve heating are not independent energy-conversion nodes.

Index all material, charging, setup, cleaning/changeover, testing and removal events by campaign, closure, fibre pair/attempt and period. A rejected mechanical/optical splice returns within splice_repair to fresh preparation/fusion, retaining earlier burdens and generated sharps/sleeves; failed seal returns to enclosure work and retest. No reject or unclosed defect counts as final product; recovery/return/waste destinations remain identified. Shared setup/reseal/test campaign burden is assigned once to accepted fibres with a causal driver and, when appropriate, separately measured individual burdens.
Retained left and right fibre ends, cable/organiser and serviceable closure are traceable state-interface roles with zero new-manufacture attribution in this repair; this does not waive actual incremental preparation, condition qualification or repair-caused damage burdens.

### Process: Integrated single-fibre repair and retained-closure acceptance (`splice_repair`)

#### Inputs

##### Product flows

###### Matched single-fibre heat-shrink splice protectors (`splice_protectors`)

Record actual newly supplied protectors matched to fibre and organiser. Installation count, failed/replaced protector count, unused returns and stocks are distinct; re-entry does not justify repurchasing retained protectors. Supplied components in a protector remain inside its supply boundary.

- Selected flow: Matched single-fibre heat-shrink splice protectors
- Flow property / unit: Count / item
- Amount rule: Same-SKU attributable (opening_stock + gross_receipt - closing_stock) in item / N, carrying stock upstream burden and excluding matched outward-return supply once only under consumed-only convention; actual installed/discarded/returned Count remains reconciled.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `corning-single-fibre-fusion-2020`

Range evidence need: Collect matching protector SKU and accepted/failed/replaced/discarded Count, opening/closing stock and gross receipt before proposing any protector-per-connection range. No universal sleeve size, one-attempt yield or mass is assumed.

###### Actual approved optical-fibre cleaning formulation (`fibre_cleaner`)

Identify each actual approved cleaner formulation and SDS, supplied concentration and packaging boundary. Record net-tare receipts, stocks, returns, actual cleaning use, captured residues and substantiated releases; no compulsory chemical if actual qualified route documents absence.

- Selected flow: Actual approved optical-fibre cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Actual formulation attributable (opening_stock + gross_receipt - closing_stock) kg / N with matched stock burden/return convention and valid actual density conversion if recorded by volume.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `corning-single-fibre-fusion-2020`

Range evidence need: Collect actual formulation, net quantities and usage/recovery records for the fibre/closure job; SDS composition is not an emission factor and does not establish a universal cleaner-use range.

###### Attributed electricity for repair charging heating testing and access (`electricity_supply`)

Include metered splicer, heater, OTDR/source/receiver, battery charging losses at declared meter boundary, lighting/shelter/access and local compressor electricity when used. Match pre/post charging to this job; arc estimates alone miss non-arc loads. Purchased gas and compressor supply are alternative owners of the same test-gas provision.

- Selected flow: Attributed electricity for repair charging heating testing and access
- Flow property / unit: Energy / MJ
- Amount rule: Nonoverlapping attributable measured and shared charging electricity MJ / N, using 3.6 MJ/kWh for recorded kWh and evidenced shared_driver_job/shared_driver_total.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_power`
- Sources: `corning-single-fibre-fusion-2020`; `corning-retained-closure-2019`

Range evidence need: Collect charger/meter boundary, calibrated readings, state-of-charge/time evidence and campaign driver before establishing energy range; no universal per-arc, sleeve heat or charging factor.

###### Actual purchased approved closure-test gas (`closure_test_gas`)

Record actual purchased clean dry air or nitrogen formulation only where closure instruction and actual repair require it. Local compressor air instead owns its electricity/fuel/assets and measured gas ledger, without a second purchased supply. Link temporary test/release and repeat tests to closure ID; cylinders are reusable assets unless actual packaging supply includes them.

- Selected flow: Actual purchased approved closure-test gas
- Flow property / unit: Mass / kg
- Amount rule: Purchased campaign attributable (opening_mass_kg + gross_receipt_kg - closing_mass_kg) / N with matched stock burden/return convention; compressor gas is nonduplicate activity evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `corning-retained-closure-2019`

Range evidence need: Collect gas source, composition, actual net mass or state-corrected volume/density, test frequency and approved settings/results. No universal flash-test pressure, duration or mass follows from the example closure.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted long-distance single-mode single-fibre-pair fusion-splice repair service (`accepted_fibre_pair_repair`)

This is the only final reference product: one identified compatible retained single-mode fibre-pair connection after actual mechanical criterion, calibrated optical acceptance, heat-shrink protection/bend-safe routing and parent retained-closure reseal/required checks have passed with signed owner acceptance. Final unique accepted IDs define N; repeated failed arcs, attempts or protectors are not additional outputs.

- Selected flow: Accepted long-distance single-mode single-fibre-pair fusion-splice repair service
- Flow property / unit: Count / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `corning-single-fibre-fusion-2020`; `corning-retained-closure-2019`

Range evidence need: Exactly 1 item is the declared normalization definition, N/N for positive unique final accepted N, not an empirical yield or lifetime range. Actual fibre type, program, mechanical criterion, wavelengths/optical threshold and closure checks still require job evidence.

##### Waste flows

###### Actual collected cleaning or incident wastewater (`wastewater`)

Record actual collected liquid cleaning residues or incident water leaving to treatment, with composition and custody. Dissolved cleaner/contaminants are inside this waste mixture. Actual absence with contained dry cleaning is documented; uncontained discharge requires separately substantiated species/medium records.

- Selected flow: Actual collected cleaning or incident wastewater
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable measured wastewater kg / N with valid actual density/state/temperature/source conversion if recorded by volume.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: Collect actual volume/mass, contaminants, treatment recipient and no-discharge evidence where applicable; do not infer wastewater or zero emissions from an SDS.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| individual_and_common | all inventory rows | Attribute individually measured repair resources to their fibre-pair IDs. Partition actual common closure/setup/test/changeover resources by a documented causal measured driver across all benefiting accepted fibre pairs; sum shares to the complete campaign amount before dividing by N. Do not charge the whole closure/test run independently to every fibre. No co-product is assumed; actual reusable outward supplies are separate returns, without automatic avoided credit. |  |
| retain_failed_attempts | splice_repair | Keep all failed mechanical/optical splice attempts and reseal/retest burdens in the originating campaign. Link rework back to splice_repair; count each final accepted fibre-pair ID once, and keep discarded sharps/protectors/seals in their actual exit routes. A no-acceptance campaign has no valid positive-N dataset and must be separately disclosed. | corning-single-fibre-fusion-2020; corning-retained-closure-2019 |
| asset_and_period_allocation | shared_asset_supply | Allocate each actual complete-life asset by compatible measured service driver across all consuming jobs/nodes/periods, including unrelated jobs. Use complete observed life or observed history plus evidenced remaining service, maintenance/replacement, termination/end-of-life scenario with uncertainty/sensitivity/update. Match numerator and denominator boundaries; missing life coverage or denominator blocks final dataset. Keep direct operation/spares/provider bundles disjoint. |  |
| stock_and_provider_ownership | all inventory rows | Carry opening/closing stocks with their upstream burden between actual periods; reconcile receipts, internal issues and final destinations without double charging. Bought transport, gas/compressor, kit/constituents and rental/direct-asset routes each have one documented owner; price/hours do not define flow quantity or waive complete coverage. |  |
| campaign_supply_attribution | splice_protectors; fibre_cleaner; preparation_consumables; closure_reseal_materials; direct_fuel; closure_test_gas | Campaign supply is opening carried stock plus new external receipts minus closing carried stock for the same SKU/native unit and upstream burden. New receipts/N alone is not the repair supply. Gross-with-outlets retains actual returns as outputs; consumed-only excludes matched returned supply once. Fuel burned for emission activity remains a separate quantity from supply. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | splice_repair | Final accepted connection and all attempt/gate states | foreground_record | job_id; campaign_id; closure_id; fibre_pair_id; left_fibre_type; right_fibre_type; compatibility; slack_length; isolation_authorisation; attempt_id; splicer_id; program; mechanical_criterion; mechanical_result; optical_method; wavelengths; threshold; optical_reading_forward; optical_reading_reverse; bidirectional_average; calibrated_result; protector_id; organiser_route; closure_instruction; seal_result; required_leak_check; defects_closed; acceptance_signature; event_period; N | Reconcile authorised network/function, compatible ends and slack; capture every failed/reworked attempt. Read distinct mechanical result and calibrated optical result at each actual wavelength/criterion; calculate bidirectional average for OTDR splice loss. Release only after protection/routing and parent retained closure gates; count unique final accepted IDs. | item; actual test units; declared length | Each attempt, test and final handover | Mobilisation/isolation through final campaign acceptance | Declared job/closure and all relevant shared consumers | per reference flow | Signed gate records, calibrated tests, closure traceability; no visual-estimate substitution |
| cp_materials | splice_repair | Native-unit supply stock final destinations and actual outward returns | foreground_record | job_id; campaign_id; closure_id; fibre_pair_id; attempt_id; period; material_id; SKU; formulation; SDS; native_property; native_unit; ledger_convention; opening_stock; gross_receipt; tare; closing_stock; installed_retained_final; discarded_native_quantity; return_native_quantity; release_native_quantity; internal_issue; used_activity; native_quantity; matching_unit_mass; volume_unit; density; state; temperature; conversion_source; destination; upstream_carry | Measure actual net-tare gross receipts before return netting and opening/closing stocks; keep each material native Count/Length/Mass/Volume ledger. Identify actual installed final destination and discarded/returned/released native quantities. Match Count mass only by actual SKU unit mass; convert volume only by actual density/state/temperature/source. Dosed/used quantity is activity, not additional final destination. | Actual native unit; kg for mass expansion | Every receipt, issue, use, stock and exit | Same campaign and stock transfer periods | Declared job/closure and all relevant shared consumers | per reference flow | Delivery/weighing records, actual discarded sleeve Count, conversion evidence, custody, stock carry and boundary reconciliation |
| cp_power | splice_repair | Metered repair and compressor electricity including charging | foreground_record | job_id; campaign_id; closure_id; period; device_id; meter_boundary; meter_start; meter_end; meter_unit; charging_event; battery_state_start; battery_state_end; charging_loss_scope; shared_driver_job; shared_driver_total; supplied_compressor_scope; overlap_exclusions | Read calibrated nonoverlapping meters/chargers and attribute pre/post job charging by evidenced driver/state. Include heater/test/access/lighting/compressor actual loads and charging losses within declared boundary; do not use arc count as energy. | kWh or MJ; dimensionally compatible driver | Each operating/charging event | Campaign plus attributable charging periods | Declared job/closure and all relevant shared consumers | per reference flow | Meter calibration, charging attribution, loss boundary and nonoverlap |
| cp_fuel | splice_repair | Direct actual fuel supply combustion and nonburned destinations | foreground_record | job_id; campaign_id; period; plant_id; fuel_id; formulation; opening_stock_kg; gross_receipt_kg; tare_kg; closing_stock_kg; nonburned_return_kg; nonburned_waste_kg; uncontained_whole_fuel_kg; spill_total_audit_kg; recovered_spill_destination; burned_kg; measured_activity; factor_source; provider_overlap | Use same-scope net-tare physical fuel ledger; reconcile burned fuel to measured use. Total spill is audit only; recovered spill goes once to final stock/return/waste. Retained recovered fuel stays in closing stock and is not subtracted again. Match direct vehicle/generator scope against bought services. | kg; activity/factor units | Each receipt, operation, incident and stock boundary | Same campaign, attributable operation and stock periods | Declared job/closure and all relevant shared consumers | per reference flow | Fuel identity, custody, stock/burn reconciliation, incident destinations and overlap proof |
| cp_gas | splice_repair | Purchased or locally compressed closure test gas and final outlets | foreground_record | job_id; campaign_id; closure_id; period; source_mode; gas_identity; composition; opening_mass_kg; gross_receipt_kg; closing_mass_kg; outward_return_kg; other_final_outlet_kg; released_whole_gas_kg; volume; volume_unit; pressure; temperature; density; state; conversion_source; required_test; test_result; compressor_energy_owner; repeat_test_id | Measure actual gas net mass or valid state-corrected volume conversion; record purchased versus compressor mode and required repeat/release events. Record whole mixture final destinations separately from substantiated elementary species; actual closure-approved procedure controls settings. | kg; actual volume/state units | Each closure test and gas stock movement | Campaign/retest and supply periods | Declared job/closure and all relevant shared consumers | per reference flow | Actual closure instruction, gas composition/state conversion, test results and exclusive supply owner |
| cp_transport | splice_repair | Actual purchased transport mass-distance and direct-mode exclusion | foreground_record | job_id; campaign_id; period; leg_id; provider; mode; origin; destination; payload_net_tonnes; route_km; empty_return_scope; provider_service_boundary; service_unit; direct_resource_owner; allocation_driver | Read actual delivery/haul records and distances for each purchased mass-distance leg. Capture empty/return allocation and provider coverage; do not convert crew-hours/price/vehicle-km into tonne-km without actual compatible service evidence. | t; km; t*km | Each leg | Actual mobilisation through removal/demobilisation | Declared job/closure and all relevant shared consumers | per reference flow | Payload/route records, actual service unit, empty-leg and direct-resource nonoverlap |
| cp_assets | splice_repair | Complete-life shared assets all consumers and periods | foreground_record | asset_id; configuration; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; observed_history; completed_observed_life; prospective_remaining_service; remaining_service_source; termination_scenario; uncertainty; sensitivity; update_trigger; job_id; node_id; period; consumer_register; driver_unit; driver_job; driver_all_consumers; bundle_exclusions; operating_resource_owner; upstream_coverage | Build complete-life inventory for actual tool/access asset. Enumerate all jobs/nodes/periods, maintenance/replacement and termination/end-of-life. Use compatible measured driver across numerator and all-consumer denominator; justify remaining-life scenario where observed life incomplete. Exclude direct operation/spares/other service overlap. | item complete-asset equivalents; compatible actual driver | Each use and life/scenario update | Full observed life or observed history plus justified prospective remainder and end-of-life | Declared job/closure and all relevant shared consumers | per reference flow | Complete coverage/denominator, scenario sources and sensitivity; missing coverage blocks final dataset |
| cp_waste | splice_repair | Removed material actual net waste and destinations | foreground_record | job_id; campaign_id; closure_id; attempt_id; period; waste_stream_id; material_origin; contamination; net_mass_kg; tare_kg; removed_length; length_unit; matching_unit_mass; measured_conversion_source; volume; density; state; temperature; destination; receiver; custody; captured_material_owner; treatment_scope | Weigh actual segregated waste net of container tare; for tiny fibre quantities validate measured length/unit-mass conversion with actual coating/fibre identity. Keep separately logged discarded native Count. Record actual wastewater and captured residues with custody and no double species release. | kg; actual length/volume conversion units | Each collection/exit and failed attempt | All preparation, rework, reseal and final clean-up | Declared job/closure and all relevant shared consumers | per reference flow | Calibrated net measurements, conversion/composition and recipient records; no generic waste class |
| cp_emissions | splice_repair | Actual species-medium routine and incident releases | foreground_record | job_id; campaign_id; closure_id; period; event_id; event_owner; substance_identity; species_or_particle_size; receiving_medium; measurement_method; measured_release_kg; actual_activity; activity_unit; emission_factor; factor_unit; factor_source; composition_fraction; fate_fraction; state_conditions; captured_fraction; whole_mixture_owner; uncertainty | Identify actual species/particle size and receiving medium first. Use measurement or valid activity-factor/composition-fate model with matching units and scope. Separate routine and incident ownership; retain whole mixture ledger nonadditively; exclude stock, capture, returns and waste. Residual alone cannot populate a release. | kg; matched activity/factor units | Each actual routine/incident class and monitoring event | Campaign and attributable operating periods | Declared job/closure and all relevant shared consumers | per reference flow | Substance/medium evidence, measured or valid factor provenance, fate and uncertainty; no SDS-to-emission inference |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_normalisation | splice_protectors; fibre_cleaner; preparation_consumables; closure_reseal_materials; electricity_supply; direct_fuel; closure_test_gas; transport_service; shared_asset_supply; outward_protector_returns; outward_material_returns; fibre_sharps; other_solid_waste; wastewater; elementary_releases | Inventory amount per reference flow = attributable complete campaign amount in its own native unit / N; N = unique final accepted fibre-pair IDs after all gates. Attribute individual and common resources once; no valid positive-N dataset when N is zero. | cp_acceptance; each applicable own-node collection protocol; attributable campaign amount; N | Each actual exchange per 1 item accepted repair |  |
| material_ledger | splice_protectors; fibre_cleaner; preparation_consumables; closure_reseal_materials; outward_protector_returns; outward_material_returns | For each SKU/native unit, campaign supply = opening_stock + gross_receipt - closing_stock, with matched carried upstream burden for the same SKU/unit. Gross-with-outlets retains actual outward returns as outputs; consumed-only excludes their matched supply once. Physical reconciliation: opening_stock + gross_receipt = closing_stock + installed_retained_final + discarded_native_quantity + return_native_quantity + release_native_quantity. Gross excludes tare before return netting; used_activity/internal_issue are nonadditive. Gross-with-outlets records gross and each exit; consumed-only supply excludes corresponding outward-return supply once and never mixes conventions. Mass conversion: Count * matching_unit_mass or Volume * density only with actual matching unit/state/temperature/source. | cp_materials; opening_stock; gross_receipt; closing_stock; installed_retained_final; discarded_native_quantity; return_native_quantity; release_native_quantity; native_quantity; matching_unit_mass; density; conversion_source | Reconciled actual native supply/return quantities and supported mass expansions |  |
| electricity_total | electricity_supply | Attributable MJ = nonoverlapping measured kWh * 3.6 MJ/kWh + measured MJ + shared charging MJ * shared_driver_job / shared_driver_total. Same-boundary measured totals include losses; do not add them again. Include actual local compressor electricity only in compressor mode. | cp_power; meter_start; meter_end; meter_unit; shared_driver_job; shared_driver_total; supplied_compressor_scope | Attributable electricity MJ before accepted_normalisation |  |
| fuel_burn_balance | direct_fuel | Campaign fuel supply = opening_stock_kg + gross_receipt_kg - closing_stock_kg, carrying matched upstream burden; gross-with-outlets retains outward returns as outputs, consumed-only excludes matched return supply once. Separately, burned_kg = opening_stock_kg + gross_receipt_kg - closing_stock_kg - nonburned_return_kg - nonburned_waste_kg - uncontained_whole_fuel_kg. All nonburned outlets are mutually exclusive final destinations; recovered retained spill stays in closing_stock_kg, and spill_total_audit_kg is not subtracted. Apply actual chosen gross/consumed supply convention without duplicate outlet netting. | cp_fuel; opening_stock_kg; gross_receipt_kg; closing_stock_kg; nonburned_return_kg; nonburned_waste_kg; uncontained_whole_fuel_kg | Actual burned fuel and supply ledger before accepted_normalisation |  |
| gas_ledger | closure_test_gas | Campaign purchased-gas supply = opening_mass_kg + gross_receipt_kg - closing_mass_kg with matched upstream burden carry; gross-with-outlets retains actual returns as outputs, consumed-only excludes their matched supply once. Physical reconciliation: opening_mass_kg + gross_receipt_kg = closing_mass_kg + outward_return_kg + other_final_outlet_kg + released_whole_gas_kg; outlets are mutually exclusive. Purchased gas quantity uses actual chosen supply ledger; compressor-mode gas is activity with separately owned electricity/fuel/assets, not a purchased gas duplicate. Volume conversion uses actual state/pressure/temperature/composition/density/source. | cp_gas; opening_mass_kg; gross_receipt_kg; closing_mass_kg; outward_return_kg; other_final_outlet_kg; released_whole_gas_kg; source_mode; density; conversion_source | Actual whole-gas supply and physical reconciliation before accepted_normalisation |  |
| transport_activity | transport_service | Purchased transport activity = sum actual payload_net_tonnes * route_km for nonoverlapping leg IDs, with declared provider empty/return allocation. Direct-mode vehicle resources are excluded from purchased service coverage. | cp_transport; payload_net_tonnes; route_km; leg_id; empty_return_scope; allocation_driver | Actual attributable t*km before accepted_normalisation |  |
| asset_service_share | shared_asset_supply | Complete-asset equivalent = driver_job / driver_all_consumers for one actual complete-life asset. Link equivalent to complete manufacture + maintenance + replacement + end_of_life_scope; denominator covers all jobs/nodes/periods in same life scope. Use observed history plus justified remainder where needed and disclose uncertainty/sensitivity; do not allocate only purchase price or omit life phases. | cp_assets; driver_job; driver_all_consumers; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; prospective_remaining_service; termination_scenario | Actual complete-asset equivalents and linked upstream life burdens before accepted_normalisation |  |
| waste_total | fibre_sharps; other_solid_waste; wastewater | Actual waste mass = sum net_mass_kg in disjoint identified streams; gross collection mass excludes tare. Tiny fibre or liquid conversions require matching measured conversion/state evidence. Captured cleaner/fuel already inside waste is not a second additive waste or emission. | cp_waste; net_mass_kg; tare_kg; removed_length; matching_unit_mass; measured_conversion_source; volume; density | Actual waste kg by stream/receiver before accepted_normalisation |  |
| species_release | elementary_releases | Species release kg = actual measured_release_kg, or actual_activity * valid emission_factor, or actual whole supplied/used mass * composition_fraction * substantiated fate_fraction; select one justified method per event/species/medium. Units/state/coverage must match; exclude captured stocks/returns/waste and do not add whole mixture and constituent views. | cp_emissions; measured_release_kg; actual_activity; emission_factor; factor_source; composition_fraction; fate_fraction; captured_fraction; whole_mixture_owner | Actual species-medium kg before accepted_normalisation |  |
| otdr_bidirectional | accepted_fibre_pair_repair | At each declared wavelength, accurate OTDR splice loss = (optical_reading_forward + optical_reading_reverse) / 2 with matched calibrated trace/event correspondence; compare actual owner threshold separately from actual mechanical criterion. | cp_acceptance; optical_reading_forward; optical_reading_reverse; wavelengths; threshold; mechanical_criterion | Actual bidirectional_average and distinct gate decisions | corning-single-fibre-fusion-2020 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceable_acceptance | accepted_fibre_pair_repair | Actual long-distance land function, compatible fibre IDs/slack, distinct mechanical and optical gates, protection/routing and parent retained-closure acceptance are mandatory; no universal loss/torque/pressure values. | cp_acceptance; actual owner criteria and closure instruction; corning-single-fibre-fusion-2020; corning-retained-closure-2019 |
| complete_campaign | all inventory rows | All attempts, cleaning/setup/changeovers, re-seals/retests, attributable charging, final exits and demobilisation in complete actual periods; absent conditional resources need actual absence evidence, unknown remains a gap. | Event register and all linked own-node protocols |
| balance_and_units | splice_protectors; fibre_cleaner; preparation_consumables; closure_reseal_materials; direct_fuel; closure_test_gas; outward_material_returns | Native units, tare, stocks, actual discarded Count, distinct final destinations and upstream stock carry reconcile; no residual emission or mixed-waste-to-Count inference. | cp_materials; cp_fuel; cp_gas; conversion/custody records |
| assets_and_service | shared_asset_supply; transport_service | Actual upstream complete scope, compatible unit/driver, all consumers/life phases and remaining-life scenario coverage required; missing numerator/denominator or provider coverage blocks final dataset. | cp_assets; cp_transport; upstream supply records and nonoverlap matrix |
| release_specificity | elementary_releases | Substance/species/size, medium, valid amount method/factor/fate and uncertainty required. No near-match generic VOC/NOx, SDS-to-emission or whole-mixture/species double counting. | cp_emissions; actual measured/factor evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_route | splice_repair | Reject local/FTTH/submarine/power/multimode/ribbon/mechanical/connector or new-insert/closure-body work from this category. Verify long-distance land-network function, retained serviceable interfaces, compatible existing fibre ends and sufficient slack before assigning the route. | un-cpc3-2025; corning-single-fibre-fusion-2020 |
| validate_gate | accepted_fibre_pair_repair | Require actual mechanical criterion/result, calibrated optical method/wavelength/threshold/result, OTDR bidirectional averaging when claiming accurate splice loss, protection/routing and parent closure reseal/required checks with defect closure and signed owner acceptance. Splicer estimated loss, sleeve heating or closure count alone cannot pass. | corning-single-fibre-fusion-2020; corning-retained-closure-2019 |
| validate_count_rework | all inventory rows | N must be positive unique final accepted fibre-pair IDs; exclude unresolved/rejected attempts and retain every earlier attempt burden. Reconcile event, setup/changeover, test/retest, charging and waste to campaign/closure/period and prevent common run burdens being assigned twice. |  |
| validate_balance | all inventory rows | Reconcile own-native-unit stocks, net-tare gross receipts and mutually exclusive installed/retained/return/waste/release outlets under one declared convention. Verify actual discarded protector Count, matching unit-mass and density/state conversions. Fuel total spill is audit-only; whole gas/fluid balance is not generic elementary exchange. |  |
| validate_assets_periods | shared_asset_supply; transport_service | Enumerate all asset/service consumers and periods plus manufacture, maintenance/replacement, termination/end-of-life; justify remaining life, denominator, uncertainty/sensitivity and update. Missing life or provider scope, unsupported unit conversion or overlap blocks final dataset. Preserve stock upstream carry without double attribution. |  |
| validate_releases | elementary_releases | Require actual substance-medium and measured or valid activity-factor/composition-fate evidence; keep routine/incident and whole-mixture/constituent views distinct. Captured residues belong to actual waste/stock/return once, not environmental release. |  |
| validate_final_exchange | all inventory rows | Resolve each actual expanded downstream exchange to one verified concrete flow and compatible property/unit before final process construction. Conditional umbrellas are not fixed identities; disclose absent, unresolved and incomplete data separately. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground repair data package with source-backed route, actual collection protocols and transparent normalisation |
| downstream_use | secondary_dataset; background_dataset; bounded downstream process or lifecyclemodel projection |
| allowed_use | Declared long-distance land single-mode single-fibre fusion-splice repair configuration at the stated owner/closure gate with compatible temporal/geographic/technology scope |
| excluded_use | Local/FTTH, new route/cable insert/closure body, power/submarine, multimode/mass-ribbon/mechanical/connector works; later network operation or claimed avoided outage/replacement credit; generic performance or lifetime equivalence |
| required_metadata | Network/job/campaign/closure/fibre-pair IDs; actual retained state and slack; program/protector/organiser; mechanical/optical criteria and results; closure gates/acceptance; N; attempts/periods; material/utility/service/asset boundaries; concrete identities and units; upstream coverage |
| required_quality_disclosure | Actual measured versus calculated quantities; native ledgers and conversions; common-burden allocation; stock carry; complete asset life/all-consumer drivers and future scenario uncertainty; provider overlap; releases/species; unresolved evidence and identity limitations |
| update_trigger | Changed network function, compatible fibre type/slack, splicer/protector/closure instruction, actual criteria, input formulation/supplier, supply/asset/provider boundary, measured campaign performance, remaining-life/end-of-life scenario or release evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, printed p.286; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Long-distance communication-line repair classification scope and local-line exclusion; not flow quantity or method factor |
| corning-single-fibre-fusion-2020 | handbook | Corning AN103, Single Fiber Fusion Splicing, issued May 2020, supersedes June 2009, pp.1-8; https://www.corning.com/content/dam/corning/catalog/coc/documents/application-notes/AN103.pdf | Compatible single-fibre electric-arc route, preparation, separate mechanical/optical evaluation, accurate bidirectional OTDR loss, protection and bend-safe organisation; actual adopted instruction and owner criteria govern |
| corning-retained-closure-2019 | handbook | Corning SRP 78-8130-1910-2, Issue 9, August 2019, sections 8-11, especially pp.15-17; https://www.corning.com/catalog/coc/documents/standard-recommended-procedures/H78-8130-1910-2-9.pdf | Retained closure organiser/reseal and temporary clean dry air/nitrogen flash check/release/re-entry route; settings and materials specific to actual compatible closure, not universal quantities |
