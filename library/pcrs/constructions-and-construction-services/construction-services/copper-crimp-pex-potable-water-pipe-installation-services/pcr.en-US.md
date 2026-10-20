---
pcr_id: pcr.copper-crimp-pex-potable-water-pipe-installation-services
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Copper-crimp PEX-B potable-water pipe installation services

## 1. Scope and Applicability

This PCR covers building-interior hot/cold potable-water PEX-B installation with approved barbed fittings and copper crimp rings, from an accessible route and declared interfaces to supported, mechanically joined, inspected, hydraulically tested, recorded and signed acceptance. Representative tubing is 1/2, 3/4 and 1 in; declare actual sizes, hot/cold functions and branch BOM. Clamp, expansion, push-fit, nonpotable service, factory tube manufacture and other specialist works are outside this route. The six protocols below define actual job measurements; manufacturer sources constrain compatibility and operations rather than universal installation consumption.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.copper-crimp-pex-potable-water-pipe-installation-services |
| classification_refs | CPC 3.0 54621 Water plumbing services; narrower |
| covered_products | Building-interior copper-crimp PEX-B potable-water pipe installation with approved barbed interfaces and installer acceptance responsibility |
| excluded_products | Fixtures, heaters, civil mains, structural works, specialist rated firestop/insulation; clamp, expansion, push-fit; later operation |
| representative_product | 1/2–1 in PEX-B hot/cold potable-water branches with declared actual sizes and fitting BOM |
| production_route | Receipt/custody, cutting/preparation, copper-ring crimp/support, hydraulic test/correction, flush/conditional disinfection and signed handover |
| market_state | Accepted installed, supported, inspected, tested and documented service |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Installation service represented by accepted physical tube-material centreline |
| How much | 1 m |
| How well | Compatible components, go/no-go inspection, applicable hydraulic test, completed corrections and signed acceptance |
| How long or cycle | Job start through acceptance and residual closeout; owned assets separately index manufacture, use, maintenance/replacement, retirement and every consuming period |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted copper-crimp PEX-B potable-water pipe installation |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | Building/job and period; actual PEX-B supplier SKU; sizes; hot/cold function; branch and physical piece IDs; interfaces/endpoints; ring/fitting BOM; support/penetration protection; hydraulic test conditions/results; correction and acceptance gate; measured D; upstream dataset boundaries |

Measure D from final unique physical tube-piece IDs at signed acceptance. Include retained insertion within socket/barb and the true curved centreline of bends/slack; exclude fitting/valve/manifold body length, offcuts, removed/rejected pieces and stock. Record each final piece material, diameter, hot/cold function, branch and accepted endpoints. Count hot and cold as different physical pieces, even along one route. Reconcile actual cut-piece/as-built records with endpoints, insertion and bends; gross delivered or issued length is not D. Reworked splits receive new final IDs linked to the removed ID. Repeated drawings, overlapping test sections and retests add no length.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_length | reference product | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | D is the sum of actual material centreline length of final unique accepted tube pieces in cp_acceptance; divide each exchange numerator by the same positive D. Include insertion/true bends/slack; exclude fitting bodies and removed/rejected/stock pieces. |
| material_conversion | incoming_packaging; pex_tube; barbed_fittings; copper_crimp_rings; support_and_protection; compatible_seal_material; disinfection_product; cleaning_consumables; unused_product_return | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured mass per SKU or exact count/length times matching kg factor; stock, usable returns and residuals stay separate. Do not apply to electricity or asset duration. |
| water_and_constituent | supplied_test_flush_water; dispatched_wastewater; water_to_air; aqueous_release_constituent | Mass | kg | Volume requires actual temperature/density; carrier water and constituent mass must not be summed twice; first confirm the source-gal convention. |
| asset_and_event | owned_equipment_attribution; hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Attribute asset shares from actual activity/lifetime activity; count only complete contracted service events. Preserve true hourly rental for Duration verification; never relabel it as count. |
| metered_energy | installation_electricity | Energy | kWh | Use only cp_energy actual external metering and causal shares; Energy/kWh support is unverified and cannot be replaced with NCV or material mass. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ready accessible internal building route, agreed supply and terminal interfaces, component supply at installer custody boundary |
| starting_condition_role | Declared foreground starting condition, neither installation-service input nor a credit for excluded existing work |
| product_classification_scope | Narrow copper-crimp PEX-B potable-water installation scope within CPC 3.0 54621 |
| recursive_input_rule | If same-category installation is actually purchased, declare supplier responsibility and handover boundary; never recurse the same job as its own input. New independent responsibility requires scope review. |
| upstream_dataset_requirement | Matching landed material, formulation and service supply with explicit inclusions and delivery/packaging ownership; retain gaps for uncovered portions. |
| disclosure | Start/end interfaces, readiness, excluded works, job periods, upstream/packaging boundaries, asset/rental responsibility, unclosed quantities and identity/range gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| installation_owner | install_accept | One installer responsibility covers receipt/withdrawal, layout, cutting and preparation, copper-ring crimp assembly, support/protection, hydraulic tests and corrections, acceptance, usable returns and residual dispatch. Phase journals are not extra service exchanges or process nodes. | `sharkbite-pex-2021`; `rwc-piping-2024` |
| accepted_gate | accepted_installation | Handover requires compatible approved tube/fittings/rings, actual support and penetration protection, inspected crimp joints with go/no-go results, recorded applicable hydraulic test and completed correction/flush requirements. Record project specification, actual pressure, temperature, duration and result; do not import air-testing or push-fit/expansion procedures. | `sharkbite-pex-2021`; `rwc-piping-2024` |
| starting_interfaces | foreground_boundary | Begin at a declared accessible internal building route with agreed supply and terminal interfaces and component supply at the installer custody boundary. Readiness is a condition, not consumed work. Fixtures, heaters, civil mains, structural works, specialist firestop/insulation and later use/maintenance of the installed pipe are excluded and disclosed. |  |
| landed_supply | upstream_inputs | Require matching landed component and formulation supply datasets with delivery and packaging boundary disclosed. Do not hide freight as zero or add packaging manufacture already embedded upstream. A separately responsible freight or different installation subcontract needs scope/card review before extension. |  |
| reject_owner | rework_and_exits | install_accept retains all original material, electricity, water and service burdens through failures and corrections. Link internal correction to the failed joint/piece and resulting final accepted pieces; distinguish usable returns from nonusable waste. Recovery/downgrade is recorded only with its actual receiver and does not create an assumed credit. | `sharkbite-pex-2021` |
| resource_periods | shared_assets | Index asset manufacture, service use, actual maintenance/replacement and retirement/termination with every consuming job/node and reporting period. The current installer job is one consumer among the asset lifetime users; permanent installed hardware is separate. Rented provider asset burdens belong to the contracted service boundary. |  |
| physical_pools | material_and_water | Close compatible SKU/material/state pools using gross entries, stock changes, usable returns, retained installed material and measured residual exits. Keep water-carrier balance separate from chemical constituents and any carbon check; neither a mixed mass sum nor an asset share is an installed-material exchange. Do not create oxygen or any inferred loss exchange from a closure residual. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Incoming packaging by material and supply owner (`incoming_packaging`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Record the actual package material and shipment at receipt. Weigh it or reconcile pack counts to same-batch tare records. Maintain its physical source pool even when component supply already includes packaging manufacture. Activate a separate packaging input burden only for a genuinely separately modelled supply; trace returns, reuse, stock and discarded packaging to that pool. Range evidence need: Shipment weights, composition, pack sizes and documented reuse/return cycles are needed, together with the supplier dataset boundary. Packaging waste cannot prove an otherwise unrecorded incoming quantity; no universal kg/m interval is established.

- Collection subject: Incoming packaging by material and supply owner
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_materials divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

#### Collection requirement: Attributed share of each owned reusable asset (`owned_equipment_attribution`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

For each actual cutter, crimp tool, go/no-go gauge, drill, charger, hydraulic pump, meter or access asset, identify model/serial and ownership. Attribute its manufacture and actual maintenance/replacement resource packet using measured job activity divided by evidenced lifetime activity on the same basis. Multiply by actual asset count, then divide by D. This fractional item quantity is an asset share, not installed material or an hourly rental. Range evidence need: Collect manufacture/BOM or matching dataset, maintenance, replacement and retirement/termination records, all consuming jobs and periods, job activity and lifetime denominator uncertainty. A whole tool per job, assumed lifetime, fixed reuse count or generic cutoff cannot establish an interval.

- Collection subject: Attributed share of each owned reusable asset
- Flow property / unit: Number of items / item
- Amount rule: Measured item numerator for each actual exchange under cp_services divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `sharkbite-pex-2021`; `rwc-piping-2024`

#### Collection requirement: Approved barbed fittings and interface components by SKU (`barbed_fittings`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Record the actual approved fitting, valve or manifold material/size/SKU and its branch or terminal duty. Weigh issues or use exact SKU count-to-mass evidence; preserve replacements and usable returns. Fitting and valve bodies belong to the BOM and do not contribute length to D. Range evidence need: Collect topology-specific fittings/valves/manifolds, accepted and replaced counts, SKU kg/item and returns. Comparable branch and terminal configurations are required for a kg/m interval.

- Collection subject: Approved barbed fittings and interface components by SKU
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_materials divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `sharkbite-pex-2021`

#### Collection requirement: Supports, fasteners and protective sleeves by SKU (`support_and_protection`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Measure each actual support, fixing and sleeve separately by mass or evidenced count-to-mass conversion. Link it to the accepted tube geometry and penetration. Approved supports must protect the tube and accommodate the specified route; their material is distinct from reusable access equipment. Range evidence need: Actual spacing, terminal constraints, stud/slab penetration locations, fixing SKU and installed/returned mass are required. A support-spacing limit is a geometry condition, not a universal consumption interval.

- Collection subject: Supports, fasteners and protective sleeves by SKU
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_materials divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `sharkbite-pex-2021`

#### Collection requirement: Actual cleaning or leak-location consumable by SKU (`cleaning_consumables`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Activate only for consumed soap, wipe or other compatible cleaning product. Record exact SKU, intended cleaning/leak-location event, issued contents, usable returns and container/residual tare. Material used in corrections remains attributable to installation. Range evidence need: Collect cleaned object/area or tested-joint count, events, SKU doses and container weights. Comparable dose/event and event/m observations are needed; no blanket mass interval is justified.

- Collection subject: Actual cleaning or leak-location consumable by SKU
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_materials divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `rwc-piping-2024`

#### Collection requirement: Complete contracted support event by provider and configuration (`hired_support_service`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Activate the item card only for a genuinely complete contract-defined equipment/access service event. Record provider, event definition, delivered configuration, completion and actual consumer shares. An hourly rental keeps its actual hourly quantity and requires explicit Duration support and scope/measurement review; it is not converted into one counted event. Range evidence need: Collect actual contract reference unit, event completeness or true hourly basis, configuration/capacity, provider manufacture/maintenance/fuel/electricity inclusions and all users. True hourly Duration is unresolved; no universal event/m interval is established.

- Collection subject: Complete contracted support event by provider and configuration
- Flow property / unit: Number of items / item
- Amount rule: Measured item numerator for each actual exchange under cp_services divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources:

#### Collection requirement: Usable unchanged product returned by SKU (`unused_product_return`)

Process / prospective direction / type: `install_accept` / `outputs` / `product`.

Record an actual custody-boundary return of usable unchanged product with original incoming SKU and state. Weigh or use the same verified count/length mass conversion. Keep gross input and explicit return auditable, avoiding a second deduction of a return already netted elsewhere. Range evidence need: Actual gross issues, stock changes and measured usable returns are needed per SKU. Neither a default return fraction nor a mixed-material return identity is justified.

- Collection subject: Usable unchanged product returned by SKU
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_materials divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

#### Collection requirement: Dry packaging and offcut waste by material and recipient (`dry_material_waste`)

Process / prospective direction / type: `install_accept` / `outputs` / `waste`.

Weigh each dry stream with container tare at actual dispatch. Link packaging to its incoming source pool and offcuts to issued tube/component records. Identify material, state and receiver separately; captured drilling dust is waste when actually collected. A mixed mass total is only a ledger diagnostic. Range evidence need: Need weighed dispatches and material/state-specific recipient evidence. Nominal installed component mass does not establish a waste-rate interval.

- Collection subject: Dry packaging and offcut waste by material and recipient
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_residuals divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`
- Sources:

#### Collection requirement: Nonusable rejected or removed component by recipient (`rejected_component_waste`)

Process / prospective direction / type: `install_accept` / `outputs` / `waste`.

Link failed gauge checks, damaged pieces or failed test/correction events to the original issued component and install_accept. Weigh removed nonusable tube, fittings and rings, or use exact SKU count/mass evidence, and record actual waste destination. Retired piece IDs cannot remain in accepted D. Range evidence need: Need complete failure, removal, rework and dispatch coverage with classified actual receiver. No default defect fraction; an evidenced zero requires complete event coverage.

- Collection subject: Nonusable rejected or removed component by recipient
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_residuals divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`
- Sources:

#### Collection requirement: Contaminated wipes, containers and formulation residues (`contaminated_solid_waste`)

Process / prospective direction / type: `install_accept` / `outputs` / `waste`.

Weigh actual contaminated stream gross and tare; retain composition, state and receiver acceptance. Distinguish reusable returned product and empty recyclable packaging. Supplied formulation mass does not establish evaporated mass, and a contaminated container is not automatically a dry packaging stream. Range evidence need: Need formulation-specific residues, container tare and receiver classification. No default loss fraction or assumption that all supplied chemical evaporates is supported.

- Collection subject: Contaminated wipes, containers and formulation residues
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_residuals divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`
- Sources:

#### Collection requirement: Used water at sewer or waste-treatment handover (`dispatched_wastewater`)

Process / prospective direction / type: `install_accept` / `outputs` / `waste`.

Measure each used-water outgoing stream by collected mass or volume with tare, density/temperature and composition. Link unique stream and receiver to reused and retained inventories. The same water cannot be both a treatment/sewer handover and a direct environmental discharge. Range evidence need: Need actual collection/dispatch measurements, composition, reuse and retention evidence. Fresh supply and geometric fill capacity do not establish outgoing wastewater or its interval.

- Collection subject: Used water at sewer or waste-treatment handover
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_water divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

#### Collection requirement: Material-specific airborne particulate fraction (`airborne_particulate`)

Process / prospective direction / type: `install_accept` / `outputs` / `elementary`.

Activate only with evidence of atmospheric release. Identify substrate/material, tool, capture controls, particle-size fraction and actual receiving air compartment. Quantify monitored release or a matching independently supported factor times actual activity; collected dust remains waste. Range evidence need: Need material/tool/control/size-specific monitoring or factor and measured activity. An unclosed material balance is a data gap, not invisible dust or a generic emission quantity.

- Collection subject: Material-specific airborne particulate fraction
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_residuals divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`
- Sources:

#### Collection requirement: Actual water-vapour release to the receiving air compartment (`water_to_air`)

Process / prospective direction / type: `install_accept` / `outputs` / `elementary`.

Activate only for independently evidenced water evaporation. Use measured exposure/mass loss or a verified model matched to the installation conditions, and identify the actual air compartment. Exclude chemical vapours, retained water and captured liquids; water-balance residual alone is not an emission. Range evidence need: Need actual-condition evaporation measurement/model evidence. No evaporation fraction is established; it must not duplicate a chemical solvent loss.

- Collection subject: Actual water-vapour release to the receiving air compartment
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_water divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

#### Collection requirement: Direct aqueous release of each actual substance (`aqueous_release_constituent`)

Process / prospective direction / type: `install_accept` / `outputs` / `elementary`.

Activate only for evidenced authorized discharge directly to a specified environmental water compartment. Measure discharged volume and substance-specific concentration/mass for each constituent; identify carrier water separately. Pollutant/active mass is not a second physical bulk-water stream. Sewer/waste-treatment handover is excluded for that discharge. Range evidence need: Need recipient compartment, actual carrier/constituent identities and concentration/flow evidence. Residual chlorine cannot be inferred from disinfectant issues; mixed wastewater is not an elementary pure-water identity.

- Collection subject: Direct aqueous release of each actual substance
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_water divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_accept | Installation and acceptance | required | Actual declared installation scope | One installation-to-acceptance responsibility including rework and residuals | 1 m accepted_installation |

Receipt, preparation, assembly, testing, correction and handover are phases of this node; there is no duplicate readiness exchange. Rejected states include damaged tube, unusable fittings, failed go/no-go inspection and failed hydraulic test. Correct according to actual state and retire removed IDs. Usable unchanged returns, dry waste, nonusable rejected components and contaminated residuals leave through their actual paths; held states remain unresolved.

### Process: Installation and acceptance (`install_accept`)

#### Inputs

##### Product flows

###### PEX-B potable-water tube by size and SKU (`pex_tube`)

Receive and weigh each actual grade/size/SKU, or convert traceable issued length with the matching supplier mass factor. Gross entry includes pieces later cut out or discarded; do not replace entry mass with accepted tube length. Keep stock and actual usable returns separately. Range evidence need: RWC PDF 44 gives nominal 0.054, 0.103 and 0.170 lb/ft for 1/2, 3/4 and 1 in respectively. Matching SKU, supplier tolerance, routing, insertion, cuts, offcuts and rework are required before these factors can support consumption evidence; they are not observed kg per accepted m ranges.

- Selected flow: PEX-B potable-water tube by size and SKU
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_materials divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `rwc-piping-2024`

###### Copper crimp rings by approved size (`copper_crimp_rings`)

Use the approved corresponding ring size at each crimped tube end. Record each original and replacement ring event and weigh or apply exact SKU kg/item. A retained ring serves the permanent mechanical connection; crimp tool use is recorded separately. Range evidence need: The number of successfully crimped tube ends constrains retained rings; actual rejected/replaced events and ring mass are still needed. It supplies neither a universal rings/m ratio nor a mass tolerance interval.

- Selected flow: Copper crimp rings by approved size
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_materials divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `sharkbite-pex-2021`

###### Compatible minor penetration sealing product (`compatible_seal_material`)

Activate only for minor nonstructural closure within the installer responsibility. Identify substrate, interface and compatible supplied formulation; weigh issued, returned and residual contents using container tare. Exclude separately responsible rated firestop and thermal insulation systems. Range evidence need: Actual penetration count/annulus geometry, formulation, applied volume/density and container reconciliation are needed. There is no generic sealant kg/m prior.

- Selected flow: Compatible minor penetration sealing product
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_materials divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `sharkbite-pex-2021`

###### Externally supplied potable test and flushing water (`supplied_test_flush_water`)

Meter fresh external supply by source, interval and hydraulic test/flush/disinfection event. Use actual volume with traceable temperature-dependent density, or directly measured mass. Record recovered internal reuse and retained water separately; repeated filling increases actual input only where new supply enters. Range evidence need: RWC PDF 44 capacities 0.009, 0.018 and 0.030 source gal/ft for 1/2, 3/4 and 1 in diagnose one fill. The US-liquid-gallon interpretation is a declared convention requiring confirmation. Sections, retests, recoveries, retention and flushing endpoints determine actual use; capacity is not a consumption interval.

- Selected flow: Externally supplied potable test and flushing water
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_water divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `rwc-piping-2024`

###### Approved supplied disinfectant formulation (`disinfection_product`)

Activate only where actual commissioning requires compatible chemical disinfection. Record supplied formulation, concentration, dose batch, container tare, issued/returned contents and solution destination. Supplied mixture mass and active chemical mass remain different quantities. Range evidence need: Actual dose volume, formulation active fraction, batch concentration, contact conditions and residual/disposal records are needed. A prescribed concentration or contact time is not a formulation kg/m interval.

- Selected flow: Approved supplied disinfectant formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured kg numerator for each actual exchange under cp_water divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `rwc-piping-2024`

###### Electricity at the installation supply meter (`installation_electricity`)

Meter external kWh for tools, pump operation, owned-tool charging and actual corrections/retests. Retain meter start/end, calibration and event times; subtract other-user consumption only with documented causal shares. Energy is not a weighed material or count-to-mass conversion. Later building operation is outside this responsibility. Range evidence need: Energy/kWh support remains unresolved. Comparable metered events with standby/charging ownership, all users and accepted-output shares are needed for a kWh/m interval; a pipe mass factor or NCV identity cannot provide it.

- Selected flow: Electricity at the installation supply meter
- Flow property / unit: Energy / kWh
- Amount rule: Measured kWh numerator for each actual exchange under cp_energy divided by D.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted copper-crimp PEX-B potable-water pipe installation (`accepted_installation`)

Measure D from final unique physical tube-piece IDs at signed acceptance. Include retained insertion within socket/barb and the true curved centreline of bends/slack; exclude fitting/valve/manifold body length, offcuts, removed/rejected pieces and stock. Record each final piece material, diameter, hot/cold function, branch and accepted endpoints. Count hot and cold as different physical pieces, even along one route. Reconcile actual cut-piece/as-built records with endpoints, insertion and bends; gross delivered or issued length is not D. Reworked splits receive new final IDs linked to the removed ID. Repeated drawings, overlapping test sections and retests add no length. Range evidence need: The normalized output is exactly one reference metre, not an empirical yield range. Accepted denominator evidence and excluded/held/rejected-work traceability remain required; retain configuration distinctions.

- Selected flow: Accepted copper-crimp PEX-B potable-water pipe installation
- Flow property / unit: Length / m
- Amount rule: 1 m
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_acceptance`
- Sources: `accepted-length-normalization`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_intended_service | accepted_installation | The sole intended product is accepted installation. Usable stock return and waste/residual exits are custody dispositions, not intended co-products. Subdivide genuinely separately measured jobs first; retain gross issues and explicit returns consistently rather than netting twice. |  |
| failed_work_burden | install_accept | All failed inspections, tests and corrective work remain within the accepted job numerator. Held/unresolved or rejected length never increases D. A recovered material leaves at its evidenced gate with disclosed treatment; no automatic avoided-product credit or burden erasure. |  |
| asset_lifetime_share | owned_equipment_attribution | For each exact owned asset use actual asset count times current-job service activity / documented total lifetime service activity on the same causal basis. The matching manufacture/maintenance packet includes actual replacements and termination once. List every consumer and period, reconcile shares, and disclose remaining-life uncertainty. Missing lifetime/replacement/termination evidence blocks finalized attribution. |  |
| provider_and_period_owner | hired_support_service; installation_electricity | Keep provider-included manufacture, maintenance, fuel and electricity out of duplicate foreground asset/energy burdens. Attribute genuine shared event or metered energy only by actual use with all consumers. Record period-specific decisions and event IDs; never annualize an already lifetime-attributed resource again or count original and replacement assets as simultaneous whole inputs. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

D is the total actual centreline m of unique accepted tube pieces. Collect each exchange numerator in its own property/unit. Each compatible material pool records gross entry G, opening/closing stock, retained installed amount, usable return U and actual residual exits; internal stock transfers are not repeated boundary entries. Reconcile SKU issue and opening withdrawals to avoid duplicated receipts. External water F, internal reuse, retention R, treatment handover W, evidenced evaporation V and direct environmental carrier water stay separate; dissolved/pollutant species have their own concentration ledger and are not added again to bulk water. A closure residual is a gap rather than an automatic emission.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_accept | accepted_installation | acceptance register | job; period; final piece ID; retired ID; material; diameter; hot/cold; branch; accepted endpoints; actual centreline length; insertion/bend/slack; test-section IDs; signed gate | Reconcile actual cut-piece and as-built lengths to final endpoints, retained insertion and curved/slack records; inspect unique physical IDs and signed acceptance. Exclude fitting bodies, removed/rejected pieces and stock. | m | each final piece and acceptance | all installation/correction events to signed gate | Declared building job; asset all-consumer/period register | per reference flow | calibrated length records; as-built; go/no-go and hydraulic test results |
| cp_materials | install_accept | incoming_packaging; pex_tube; barbed_fittings; copper_crimp_rings; support_and_protection; compatible_seal_material; cleaning_consumables; unused_product_return | material custody ledger | job; period; shipment; SKU/material/state; gross entry; stock opening/closing; installed retained mass; usable return; pack owner; count/length; kg factor; tare; correction ID | Weigh each material/packaging/formulation and return with calibrated scale and tare, or use traceable exact SKU count/length-to-mass evidence. Keep embedded packaging physical source pool without repeating its upstream burden. | kg | each receipt, withdrawal, return and closeout | all job events including replacements | Declared building job; asset all-consumer/period register | per reference flow | scale calibration; supplier factors; issues/returns; pack boundary evidence |
| cp_water | install_accept | supplied_test_flush_water; disinfection_product; dispatched_wastewater; water_to_air; aqueous_release_constituent | water and constituent ledger | job; period; stream/source/receiver; event; meter start/end; volume; temperature/density; fresh; reused; retained; wastewater; evaporation method; species/concentration; formulation/SKU; active fraction; issued/returned mass; container tare | Weigh actual supplied disinfection formulation and usable returns by batch/SKU with container tare; record concentration, dose and residual destination. Meter external withdrawals and actual outgoing streams separately. Reconcile internal reuse and retained water. Quantify evaporation only with actual-condition measurement/model; direct releases require receiving compartment and constituent-specific evidence. | kg | each fill, retest, flush, disinfection and discharge | entire commissioning including corrections | Declared building job; asset all-consumer/period register | per reference flow | meter calibration; density evidence; receiver manifests; constituent measurements |
| cp_energy | install_accept | installation_electricity | meter register | job; period; tool/pump/charger; start/end kWh; calibration; interval; standby; other consumers; causal share; provider inclusions | Read calibrated external supply meter for actual installation/test/charging intervals; retain causal subtraction records for other users and reconcile provider energy coverage. Never weigh energy. | kWh | each supply-meter interval | all job use and corrections, excluding later operation | Declared building job; asset all-consumer/period register | per reference flow | meter data; calibration; event and consumer share records |
| cp_services | install_accept | owned_equipment_attribution; hired_support_service | asset and service register | job; period/phase; asset model/serial/count; owner; manufacture packet; maintenance/replacement/termination events; all consumers; job activity; lifetime activity; contract/event definition; completed events; provider inclusions | Identify each exact asset and all consuming jobs/periods; collect same-basis job and lifetime activity and actual maintenance/replacement/retirement history. Count genuine complete provider events only; preserve true hourly rental separately for measurement review. | item | each asset-use/service and lifecycle event | asset manufacture through use/maintenance/replacement to retirement; all reporting periods | Declared building job; asset all-consumer/period register | per reference flow | asset history; lifetime evidence; contracts; all-user share reconciliation |
| cp_residuals | install_accept | dry_material_waste; rejected_component_waste; contaminated_solid_waste; airborne_particulate | residual and correction ledger | job; period; failed piece/joint; replacement ID; source pool; material/state; gross/tare; captured/airborne; particle fraction; tool/control; receiver; dispatch; monitoring/factor/activity | Weigh each recipient-specific waste stream; link failed/replaced material to install_accept and original issue. Quantify direct particulate only through actual monitoring or a verified matching material/tool/control factor and measured activity. Captured dust stays waste. | kg | each correction, collection, release and dispatch | entire job including failed work and closeout | Declared building job; asset all-consumer/period register | per reference flow | calibrated scales; manifests; failure lineage; release monitoring/factor evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | incoming_packaging; pex_tube; barbed_fittings; copper_crimp_rings; support_and_protection; compatible_seal_material; cleaning_consumables; unused_product_return | Divide each actual material/SKU/state exchange kg numerator by D; activate packaging burden only when supply is separately modelled. Do not net gross entry and return twice. | actual_kg; D; cp_materials; cp_acceptance | kg per reference flow |  |
| formulation_normalize | disinfection_product | Divide actual supplied formulation kg numerator by D; record active fraction separately without replacing supplied mixture mass or inferring residual chlorine. | formulation_mass; active_fraction; D; cp_water; cp_acceptance | kg per reference flow | |
| owned_asset_normalize | owned_equipment_attribution | Actual asset count × job service activity / documented same-basis lifetime service activity / D; match manufacture/actual maintenance/replacement packet to exact asset, reconcile all job/period shares and withhold finalization without lifetime/termination evidence. | asset_count; job_activity; lifetime_activity; D; cp_services; cp_acceptance | item per reference flow |  |
| service_normalize | hired_support_service | Genuine complete contract-event count × evidenced current-job share / D; hourly rental is not a counted event, and actual hours await Duration support and scope review. | complete_events; actual_share; D; cp_services; cp_acceptance | item per reference flow |  |
| energy_normalize | installation_electricity | Divide actual metered kWh after evidenced other-user attribution by D; reconcile provider inclusions and charging boundary. No mass conversion. | meter_kWh; actual_share; D; cp_energy; cp_acceptance | kWh per reference flow |  |
| water_normalize | supplied_test_flush_water; dispatched_wastewater; water_to_air | Divide each separately measured water-stream kg by D; volume times evidenced temperature-density applies only to the matching stream. Reuse is not new fresh input; evaporation needs independent evidence. | stream_volume; stream_density; actual_mass; D; cp_water; cp_acceptance | kg per reference flow |  |
| residual_normalize | dry_material_waste; rejected_component_waste; contaminated_solid_waste | Divide actual net dispatched kg for each classification/state/receiver by D; removed pieces retain original issue and failure-event links. | gross; tare; actual_stream; D; cp_residuals; cp_acceptance | kg per reference flow |  |
| emission_normalize | airborne_particulate; aqueous_release_constituent | Divide measured kg per substance/fraction/compartment, or matching independent factor times measured activity, by D. Aqueous species may use measured volume times its concentration with compatible unit conversion; no residual-derived emissions. | actual_substance_mass; measured_activity; matched_factor; D; cp_residuals; cp_water; cp_acceptance | kg per reference flow |  |
| reference_output | accepted_installation | Normalize recorded accepted output D m by the numerical accepted length D to give 1 m; only final unique accepted physical tube pieces determine D. | D; cp_acceptance | 1 m |  |
| nominal_pipe_factor | pex_tube | Only for matching RWC SKU/size, source lb/ft × 0.45359237 / 0.3048 gives kg/m; 1/2, 3/4, 1 in respectively yield 0.08036085, 0.15328089, 0.25298787. Nominal point factors are not gross issue/accepted-m intervals. | matching_SKU; source_factor; actual_length | conditional kg estimate | `rwc-piping-2024` |
| fill_geometry_diagnostic | supplied_test_flush_water | For matching SKU/size only, 0.009, 0.018, 0.030 source gal/ft diagnose one geometric fill. Source does not explicitly state US: confirm the US-liquid-gallon convention before using 3.785411784 L/gal and 0.3048 m/ft; actual supplier unit records take priority. This is neither fresh-water demand nor default wastewater. | matching_SKU; actual_length; confirmed_volume_convention | one-fill diagnostic | `rwc-piping-2024` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| same_job_basis | all inventory rows | Every protocol uses the same job, period, positive D and accepted configuration. Preserve original numerator, conversion factor and unit. Mark unknown occurrence unknown; allow zero only with complete coverage. | Six-protocol row trace |
| source_applicability | all inventory rows | Retain actual manufacturer/SKU, revision, quality conditions, instrument calibration and measurement error. Reconcile manufacturer gauge/hydraulic/compatibility requirements with project specification; waiting/contact duration is not a Duration input. | Supplier originals and project acceptance records |
| phase_and_asset_completeness | owned_equipment_attribution; hired_support_service | Record all consuming nodes, jobs and periods per asset/service; manufacture, use, maintenance/replacement and retirement/termination events share one index. Unknown lifetime-activity denominator, remaining life or maintenance ownership prevents finalized attribution. | cp_services all-consumer and lifecycle register |
| range_incoming_packaging | incoming_packaging | Range evidence need: Shipment weights, composition, pack sizes and documented reuse/return cycles are needed, together with the supplier dataset boundary. Packaging waste cannot prove an otherwise unrecorded incoming quantity; no universal kg/m interval is established. | cp_materials |
| range_owned_equipment_attribution | owned_equipment_attribution | Range evidence need: Collect manufacture/BOM or matching dataset, maintenance, replacement and retirement/termination records, all consuming jobs and periods, job activity and lifetime denominator uncertainty. A whole tool per job, assumed lifetime, fixed reuse count or generic cutoff cannot establish an interval. | cp_services |
| range_pex_tube | pex_tube | Range evidence need: RWC PDF 44 gives nominal 0.054, 0.103 and 0.170 lb/ft for 1/2, 3/4 and 1 in respectively. Matching SKU, supplier tolerance, routing, insertion, cuts, offcuts and rework are required before these factors can support consumption evidence; they are not observed kg per accepted m ranges. | cp_materials |
| range_barbed_fittings | barbed_fittings | Range evidence need: Collect topology-specific fittings/valves/manifolds, accepted and replaced counts, SKU kg/item and returns. Comparable branch and terminal configurations are required for a kg/m interval. | cp_materials |
| range_copper_crimp_rings | copper_crimp_rings | Range evidence need: The number of successfully crimped tube ends constrains retained rings; actual rejected/replaced events and ring mass are still needed. It supplies neither a universal rings/m ratio nor a mass tolerance interval. | cp_materials |
| range_support_and_protection | support_and_protection | Range evidence need: Actual spacing, terminal constraints, stud/slab penetration locations, fixing SKU and installed/returned mass are required. A support-spacing limit is a geometry condition, not a universal consumption interval. | cp_materials |
| range_compatible_seal_material | compatible_seal_material | Range evidence need: Actual penetration count/annulus geometry, formulation, applied volume/density and container reconciliation are needed. There is no generic sealant kg/m prior. | cp_materials |
| range_supplied_test_flush_water | supplied_test_flush_water | Range evidence need: RWC PDF 44 capacities 0.009, 0.018 and 0.030 source gal/ft for 1/2, 3/4 and 1 in diagnose one fill. The US-liquid-gallon interpretation is a declared convention requiring confirmation. Sections, retests, recoveries, retention and flushing endpoints determine actual use; capacity is not a consumption interval. | cp_water |
| range_disinfection_product | disinfection_product | Range evidence need: Actual dose volume, formulation active fraction, batch concentration, contact conditions and residual/disposal records are needed. A prescribed concentration or contact time is not a formulation kg/m interval. | cp_water |
| range_cleaning_consumables | cleaning_consumables | Range evidence need: Collect cleaned object/area or tested-joint count, events, SKU doses and container weights. Comparable dose/event and event/m observations are needed; no blanket mass interval is justified. | cp_materials |
| range_installation_electricity | installation_electricity | Range evidence need: Energy/kWh support remains unresolved. Comparable metered events with standby/charging ownership, all users and accepted-output shares are needed for a kWh/m interval; a pipe mass factor or NCV identity cannot provide it. | cp_energy |
| range_hired_support_service | hired_support_service | Range evidence need: Collect actual contract reference unit, event completeness or true hourly basis, configuration/capacity, provider manufacture/maintenance/fuel/electricity inclusions and all users. True hourly Duration is unresolved; no universal event/m interval is established. | cp_services |
| range_unused_product_return | unused_product_return | Range evidence need: Actual gross issues, stock changes and measured usable returns are needed per SKU. Neither a default return fraction nor a mixed-material return identity is justified. | cp_materials |
| range_dry_material_waste | dry_material_waste | Range evidence need: Need weighed dispatches and material/state-specific recipient evidence. Nominal installed component mass does not establish a waste-rate interval. | cp_residuals |
| range_rejected_component_waste | rejected_component_waste | Range evidence need: Need complete failure, removal, rework and dispatch coverage with classified actual receiver. No default defect fraction; an evidenced zero requires complete event coverage. | cp_residuals |
| range_contaminated_solid_waste | contaminated_solid_waste | Range evidence need: Need formulation-specific residues, container tare and receiver classification. No default loss fraction or assumption that all supplied chemical evaporates is supported. | cp_residuals |
| range_airborne_particulate | airborne_particulate | Range evidence need: Need material/tool/control/size-specific monitoring or factor and measured activity. An unclosed material balance is a data gap, not invisible dust or a generic emission quantity. | cp_residuals |
| range_dispatched_wastewater | dispatched_wastewater | Range evidence need: Need actual collection/dispatch measurements, composition, reuse and retention evidence. Fresh supply and geometric fill capacity do not establish outgoing wastewater or its interval. | cp_water |
| range_water_to_air | water_to_air | Range evidence need: Need actual-condition evaporation measurement/model evidence. No evaporation fraction is established; it must not duplicate a chemical solvent loss. | cp_water |
| range_aqueous_release_constituent | aqueous_release_constituent | Range evidence need: Need recipient compartment, actual carrier/constituent identities and concentration/flow evidence. Residual chlorine cannot be inferred from disinfectant issues; mixed wastewater is not an elementary pure-water identity. | cp_water |
| range_accepted_installation | accepted_installation | Range evidence need: The normalized output is exactly one reference metre, not an empirical yield range. Accepted denominator evidence and excluded/held/rejected-work traceability remain required; retain configuration distinctions. | cp_acceptance |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_and_gate | install_accept | Verify actual PEX-B potable-water hot/cold scope, copper-crimp/barb route and declared interfaces. Acceptance must trace inspections, applicable hydraulic test/flush and all corrections; an assumed test result or another joining route is not accepted evidence. | `sharkbite-pex-2021`; `rwc-piping-2024` |
| denominator_integrity | accepted_installation | Require positive D from unique final accepted physical tube pieces; include insertion and actual curved/slack length, exclude fitting bodies and removed/held/rejected/stock pieces. Reconcile hot/cold and rework ID lineage; test overlaps and repeat visits add no reference output. |  |
| identity_and_units | all inventory rows | Expand conditional cards to exact actual material/SKU/state/recipient exchanges and verify each UUID/support chain before downstream publication. Unresolved occurrence stays unknown. Preserve Energy/kWh and true hourly Duration gaps; do not substitute NCV or a counted event. |  |
| balance_and_fate | install_accept | Check input, return, stock, retained material and each actual residual within compatible pools. Water partitions must distinguish external supply, reuse, retention, wastewater, evidenced evaporation and direct carrier/constituents. No duplicated destination or residual-derived emission; declare unclosed amounts and uncertainty. |  |
| assets_and_periods | owned_equipment_attribution; hired_support_service | Verify exact ownership, all consumers and relevant manufacture/use/maintenance/replacement/retirement periods, consistent causal lifetime denominator and actual service contract. Reconcile period shares and duplicate provider/foreground inclusions. Unknown replacement or termination prevents finalized attribution. |  |
| evidence_quality | all inventory rows | Require complete six-protocol records, source applicability and individual range evidence needs below. Nominal point factors and quality conditions are not observed service-normalized intervals. A zero needs covered records; a missing record is not zero. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground-measured installation-to-acceptance service data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | One metre of copper-crimp PEX-B potable-water installation with declared configuration/interfaces/gate, and downstream process/lifecyclemodel projections |
| excluded_use | Clamp, expansion, push-fit and other material/joining routes; whole-building systems; fixtures/heaters/civil mains; pipe operating lifetime; final publication with unresolved identities |
| required_metadata | Location/job/period, SKU/sizes/hot-cold/branch BOM, final piece IDs and D method, interfaces, test/correction/acceptance, supply/packaging/asset/service boundaries, six protocols and source revisions |
| required_quality_disclosure | Identity and Energy/Duration support gaps, per-card range evidence needs, metering/causal attribution uncertainty, unclosed quantities, lifetime/maintenance/termination evidence and uncovered responsibilities |
| update_trigger | Changes in route/material/SKU, interfaces, acceptance specification, supply boundary, asset/contract, measurement or source evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| sharkbite-pex-2021 | handbook | https://www.sharkbite.com/sites/default/files/files/sharkbite-pex-install-guide-2021-02.pdf | PDF p5 copper crimp/go-no-go and restrictions; p6 supports. Route, compatibility, damaged-component and support responsibility; thermal expansion example is not a consumption factor. |
| rwc-piping-2024 | handbook | https://www.sharkbite.com/sites/default/files/files/RWC-Piping-Systems-Install-Guide-2024.pdf | PDF p18 crimp; p44 dimensions/nominal mass/capacity; p46 conditional disinfection; p47 water testing. Route and conditional point factors; confirm source-gal convention and do not import other-route tests. |
| accepted-length-normalization | method_factor | This PCR sections 3 and 8: accepted-length normalization identity and cp_acceptance measurement | Local mathematical method: divide each recorded job quantity by the positive numerical accepted length D measured in m; normalized output is 1 m. No external empirical factor or range is claimed. |
