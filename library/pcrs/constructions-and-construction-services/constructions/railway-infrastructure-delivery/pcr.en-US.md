---
pcr_id: pcr.constructions-and-construction-services.constructions.railway-infrastructure-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Railway infrastructure delivery

## 1. Scope and Applicability

Applies to actual completed railway infrastructure: long-line and commuter roadbeds, street tramways, underground/elevated rapid-transit rail infrastructure, electrification structures, track control/safety systems, and funicular/cable-car fixed systems. One project-defined physical delivery unit is assessed through its actual construction and acceptance, including renewal deliveries with retained assets explicitly identified. This is an entity method, not a construction service, rail transport service, rolling-stock manufacturing PCR or a package of building materials.

The core foreground begins with the recorded site starting condition and supplied materials/equipment at the declared receiving gates and ends with documented acceptance and agreed site restoration. Upstream manufacture, inbound transport, construction waste treatment and test-vehicle use are separate linked contributions with explicit coverage. Exclude normal passenger/freight operation, subsequent maintenance/replacement and final demolition by default; describe those separately if a larger study adds them. Do not claim full cradle-to-gate or whole-life coverage from this foreground. CPC bridge/viaduct structures and tunnel shells are separately classified assets, while the rail systems installed through/on them can be included with a clear interface. Station buildings and rolling stock are separately assessed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.railway-infrastructure-delivery |
| classification_refs | CPC 3.0 53212 — Railways |
| covered_products | Actual delivered railway infrastructure listed above and complete agreed cable systems |
| excluded_products | Transport/construction services; standalone materials and rolling-stock production; separately delivered bridge/tunnel shells and station buildings; post-delivery operation, maintenance and demolition |
| representative_product | One accepted railway infrastructure unit with defined start/end chainage, measured route/track lengths and counts, gauge, track form and system configuration |
| production_route | Actual earthworks/drainage; ballasted or slab track; rail installation; conditional power, control and cable-system installation; tests and delivery |
| market_state | Completed on-site physical asset with recorded acceptance; interfaces and retained assets declared for partial deliveries |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a physical railway roadbed, line or railway system within the declared site/configuration |
| How much | 1 measured and accepted delivery unit; also disclose route length and each track length/count; cable systems disclose inclined length and rise |
| How well | Functional completeness evidenced by actual contract, as-built drawings, track geometry/system tests and acceptance; no universal speed/load/capacity |
| How long or cycle | One actual construction-to-acceptance cycle for this project; no default operational life |
| reference_flow_link | reference_railway |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed railway infrastructure delivery unit |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Site/country; starting condition; new build or renewal; delivery contract/acceptance date and configuration ID; start/end chainage, measured route length, track count and each track length; gauge, cross-section and gradient; ballasted/slab/embedded/cable form; actual load/speed/capacity conditions and evidence; voltage/control functions; permanent/temporary works list; retained assets and bridge/tunnel/station interfaces; tests/vehicles scope; measured quantities and lifecycle coverage |

item is the display alias of the public Item(s) count unit. A unit means the whole precisely defined accepted delivery, not an arbitrary construction stage. Different lengths, track counts or system completeness cannot be compared merely because each is one item. Required qualifiers must appear in the data package; missing geometry, configuration or acceptance makes the reference incomplete. No per-km mass, total asset mass or service lifetime is invented. A count-to-mass identity link may be added only after traceable mass/physical-scope evidence establishes it, preserving the public flow property.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| delivery_count | reference_railway | Number of items | item | 1 item is one complete declared delivery confirmed by cp_delivery; all inventory rows use per declared reference flow. |
| geometry | reference_railway | Measured geometry | m | cp_delivery collects as-built chainage, each track length/count, gradient, cross-section and configuration; route-km differs from track-km and cost cannot convert to mass. |
| material_state | mass-based material and waste inventory rows | Mass | kg | Use actual supplied/waste mass state; dry/wet state, embedded component scope and certified linear mass require cp_materials/cp_waste; m3 to kg requires actual same-batch density, never a universal density. This mass rule does not replace the native MJ, m3 or item property/unit of energy, volume or count exchanges. Any auxiliary mass reconciliation for those rows is separately linked to the original exchange and supported by actual matching-state evidence. |
| energy_units | electricity_lv, electricity_mv, test_power | Net calorific value | MJ | Preserve public Net calorific value and energy unit group; kWh × 3.6 = MJ; diesel mass is not MJ and heating value requires actual batch measurement/certificate. |
| water_identity | mains_water, river_water, drain_return, washout | Volume | m3 | Meter supply, river resource abstraction, river discharge and collected washout separately; net water use does not replace the gross exchanges. |

Identity support: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` → mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` (kg); Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` → energy unit group `93a60a57-a3c8-11da-a746-0800200c9a66` (MJ); Volume `93a60a56-a3c8-22da-a746-0800200c9a66` → volume unit group `93a60a57-a3c8-12da-a746-0800200c9a66` (m3). These are distinct numerator properties over the same delivery denominator.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Measured site baseline and receiving gate for each material/equipment; retained roadbed/equipment and previously completed bridge/tunnel shells explicitly declared |
| starting_condition_role | user_defined_foreground_boundary |
| product_classification_scope | CPC 3.0 53212; physical railway infrastructure |
| recursive_input_rule | Inputs are upstream products in an explicit supply state; never recursively presume all manufacture is included; verify gates, units and component scope when linking datasets |
| upstream_dataset_requirement | Match material/equipment manufacture datasets to actual specification separately; transport by load/mode/distance; link waste transport/treatment separately; disclose missing contributions pending completion |
| disclosure | Report site construction-to-delivery, separately linked manufacture/transport/disposal and uncovered scope; never presume complete cradle-to-gate or whole life |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_work_packages | foreground_system_boundary | Prior demolition/site clearance, contaminated-soil remediation, blasting, tunnelling and bridge construction need separate work packages and specific inventories when the study actually includes them. Account for ground improvement, waterproofing, geotextiles, coatings, street paving, fencing and restoration by the real design and actual supplied states; the example cards are not a complete universal bill. For every additional actual exchange create one specific atomic row with a protocol and denominator; unsupported work remains visibly incomplete. Actual maintenance/renewal after the delivery and end-of-life removal are distinct later stages with dated activities and destinations, not multiplied by a guessed lifetime. `rics-wlca-2024`, `cpc3-notes-2025`. | cpc3-notes-2025, rics-wlca-2024 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| earthwork | Formation earthworks and drainage | conditional | Actual roadbed construction or earthworks within the delivery | foreground | per declared reference flow |
| ballasted | Ballasted-track bed and sleeper placement | conditional | Actual ballasted track | foreground | per declared reference flow |
| slab | Slab-track construction | conditional | Actual slab track or embedded tramway track | foreground | per declared reference flow |
| rail_install | Rail fixing, joining and alignment | conditional | Actual steel rail track installed | foreground | per declared reference flow |
| civil_support | Local cast-in-place supporting works | conditional | Actual drainage, track slab, electrification or cable-system supporting concrete | foreground | per declared reference flow |
| electrification | Electrification structure and equipment installation | conditional | Actual electrification scope delivered | foreground | per declared reference flow |
| control | Control and safety system installation | conditional | Actual control or safety system delivery | foreground | per declared reference flow |
| cable_system | Funicular or cable-car fixed-system installation | conditional | Actual funicular or cable-car delivery | foreground | per declared reference flow |
| site_operation | Shared site utilities and construction residues | required | Actual construction support, including task-specific zero/absent declarations | foreground | per declared reference flow |
| handover | Delivery inspection and handover | required | Every declared delivered unit | foreground | per declared reference flow |

### Process: Formation earthworks and drainage (`earthwork`)

Strip/store topsoil; excavate, haul, reuse and compact mineral soil; install drainage. Record excavators, dozers, haul trucks, rollers and pumps by task. Imported soil and exported waste cross the boundary; internal cuts/fills do not.

#### Inputs

##### Product flows

###### Imported uncontaminated mineral soil for railway embankment (`fill`)

Only where off-site soil is brought into the declared earthworks; record moisture and compaction state. Reused soil moved inside the site is an internal transfer.

- Selected flow: Imported uncontaminated mineral soil for railway embankment
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

###### Precast concrete railway drainage pipe (`drain_pipe`)

Where the actual drainage design uses concrete pipes, record bore, reinforcement, joint type, length and unit mass from supplied pipe records.

- Selected flow: Precast concrete railway drainage pipe
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Uncontaminated excavated mineral soil sent for disposal (`soil_waste`)

Only exported soil classified as waste; record composition, moisture and receiving destination. Do not label retained on-site soil or reusable sold soil as this waste.

- Selected flow: Uncontaminated excavated mineral soil sent for disposal
- Flow property / unit: Mass / kg
- Amount rule: Use actual weighbridge dispatch quantities; reconcile excavation, reuse, import, stock and export.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `hs2-phase2a-2017`

##### Elementary flows

###### Water from construction dewatering discharged to river (`drain_return`)

Only an actual discharge to fresh surface water; state recipient, treatment and sampling. Suspended solids and dissolved species require separate measured atomic rows, not an assumed clean-water discharge.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure discharge volume and report separately from abstraction and contained liquid waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `hs2-phase2a-2017`

### Process: Ballasted-track bed and sleeper placement (`ballasted`)

Place and compact sub-ballast and ballast; lift/lay sleepers; final tamping and alignment after rail installation. Granite rows are examples only when granite is actually specified. Wooden or steel sleepers need material-specific rows and preservative handling.

#### Inputs

##### Product flows

###### Crushed granite sub-ballast aggregate (`subballast`)

Only for a granite sub-ballast layer; keep grading, moisture, compacted thickness and placement records separate from track ballast. Other lithologies need separate atomic rows.

- Selected flow: Crushed granite sub-ballast aggregate
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase1-2013`

###### Crushed granite track ballast (`ballast`)

Conditional on ballasted track and actual granite ballast; record ballast grade and placed section. Other accepted stone is recorded independently.

- Selected flow: Crushed granite track ballast
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase1-2013`

###### Prestressed concrete railway sleeper (`sleeper`)

Where concrete sleepers are installed, record type, rail seat configuration, supplier unit mass and count; upstream concrete and steel are not added again if included in the sleeper dataset.

- Selected flow: Prestressed concrete railway sleeper
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase1-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Slab-track construction (`slab`)

Construct the actual bound base and precast or cast-in-place slab, adjust supports and grout where required. Record cranes, concrete pumps, finishing and curing. Do not force a slab route onto ballasted track. Street paving and resin embedding, if present, require their own specified rows.

#### Inputs

##### Product flows

###### Cement-bound granular track base mixture (`bound_layer`)

Only the actual supplied cement-bound mixture before placement; record moisture, mix certificate and placed geometry. On-site mixing instead requires separate aggregate, cement and water rows; never add both inventories.

- Selected flow: Cement-bound granular track base mixture
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

###### Precast reinforced concrete railway track slab (`track_slab`)

For the precast slab route; document reinforcement, embedded rail-support components, dimensions, supplier masses and installed slabs. Cast-in-place slabs use the concrete/rebar rows instead.

- Selected flow: Precast reinforced concrete railway track slab
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

###### Cementitious track-slab grout (`grout`)

Only where grouting is used; record supplied wet or dry state and actual batch certificate. Site-added water is a separate input when not included.

- Selected flow: Cementitious track-slab grout
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Rail fixing, joining and alignment (`rail_install`)

Install rails, each fastening component and rail pads; document switches separately. Stress and join rails using actual flash-butt, aluminothermic or mechanical joint route, without assuming welding consumables. Each actual consumable, slag and fume species must be added separately; capture welding electricity and rail grinding activity.

#### Inputs

##### Product flows

###### Finished steel railway rail (`rails`)

For steel-wheel track; record profile, grade, rail length, joins and installed track length. Rail mass derives from traceable delivered mass or actual certified linear mass and measured length.

- Selected flow: Finished steel railway rail
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase1-2013`, `hs2-phase2a-2017`

###### Steel rail fastening clip (`clip`)

Include only actual steel clips and their supplied mass; rail pads and bolts are separate exchanges.

- Selected flow: Steel rail fastening clip
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase1-2013`

###### Elastomer rail pad (`pad`)

When installed, specify polymer formulation, unit mass, rail-seat count and configuration.

- Selected flow: Elastomer rail pad
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase1-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Local cast-in-place supporting works (`civil_support`)

Place concrete and fix reinforcement only for actual work packages. Record formwork by separate material and reuse ledger, curing, joints and foundation excavation; do not copy tower or track dimensions across systems.

#### Inputs

##### Product flows

###### Ready-mixed concrete before placement (`concrete`)

For actual cast-in-place track slabs, drainage or mast/drive foundations; separate strength class and batch mix per row. Do not double count concrete inside purchased precast components.

- Selected flow: Ready-mixed concrete before placement
- Flow property / unit: Volume / m3
- Amount rule: Use accepted batching/delivery volume less returns and reconcile placed dimensions; record no default recipe.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase1-2013`, `hs2-phase2a-2017`

###### Hot rolled rebar steel (`rebar`)

Adopt this identity only for actual hot-rolled low-alloy rebar with C≤0.2%, at the supplier factory gate; record subsequent delivery separately. Other grades need their own rows and identities.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Electrification structure and equipment installation (`electrification`)

Lift and fix masts on actual foundations; pull and tension contact conductors; install traction transformer/switchgear only where within scope. Third-rail electrification substitutes dedicated conductor/insulator rows. Separate equipment manufacture and operational traction energy.

#### Inputs

##### Product flows

###### Fabricated steel overhead-line support mast (`mast`)

Where an overhead line is part of the delivery, record mast type, coating, height, foundations and installation lift. Generic steel does not stand for a complete mast.

- Selected flow: Fabricated steel overhead-line support mast
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

###### Copper-alloy railway contact wire (`contact_wire`)

If used, identify the actual alloy, profile, certified mass per length and installed length. Pure copper wire is not assumed to be the actual wear-resistant alloy contact wire.

- Selected flow: Copper-alloy railway contact wire
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

###### Complete railway traction transformer (`transformer`)

When the commissioned scope includes a transformer, retain actual rating, voltage, cooling system and manufacturer boundary. Its manufacture belongs to a separate upstream equipment dataset.

- Selected flow: Complete railway traction transformer
- Flow property / unit: Number of items / item
- Amount rule: Count actual attributable units consumed by this delivery, including units damaged or rejected before acceptance and replaced. Reconcile gross receipts plus opening attributable stock minus verified returns/transfers and closing reusable stock; retain equipment tags and installed/accepted counts separately. No capacity-based default mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Control and safety system installation (`control`)

Lay individual cables/ducts, install cabinets and individual signals/sensors with tags, configure and test actual interfaces. Optical fibre, point machines and telecommunications antennas need separate rows when installed.

#### Inputs

##### Product flows

###### Insulated copper railway control cable (`control_cable`)

Record actual voltage, sheath, conductor section and measured length/mass; power and optical-fibre circuits are separate.

- Selected flow: Insulated copper railway control cable
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

###### Complete railway interlocking control cabinet (`control_cabinet`)

Where installed, record hardware/software scope, cabinet identifier, interface functions and acceptance test; no generic locomotive subsystem substitution.

- Selected flow: Complete railway interlocking control cabinet
- Flow property / unit: Number of items / item
- Amount rule: Count actual attributable cabinets consumed in the declared delivery boundary, including failed or damaged cabinets replaced before acceptance. Reconcile receipts, returns/transfers and stock changes under cp_materials; retain installed and accepted counts separately as configuration evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `hs2-phase2a-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Funicular or cable-car fixed-system installation (`cable_system`)

Record actual fixed guideway/towers/anchors, rope pulling/splicing, sheaves, drive installation and tests. Aerial ropeways do not inherit sleepers or track ballast. Use actual manufacturer installation instructions and as-built bills; Zugerberg is a historical refurbishment example, not a generic recipe, mass or lifetime. Vehicles belong to upstream equipment only if the agreed complete delivered system includes them.

#### Inputs

##### Product flows

###### Finished steel cableway haul rope (`haul_rope`)

Only an actual rope installation; record construction, coating, diameter, installed length, splices and supplier linear mass. Track refurbishment does not imply rope replacement.

- Selected flow: Finished steel cableway haul rope
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `doppelmayr-zugerberg-2023`

###### Complete steel cableway rope sheave (`sheave`)

Only where delivered or replaced; record bearing and liner inclusion so those components are not duplicated.

- Selected flow: Complete steel cableway rope sheave
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `doppelmayr-zugerberg-2023`

###### Complete electric cableway drive unit (`cable_drive`)

Only where a drive is installed/replaced; record motor, gearbox, braking, power supply and drive-system boundaries. Overhaul consumables use separate rows rather than a new complete drive.

- Selected flow: Complete electric cableway drive unit
- Flow property / unit: Number of items / item
- Amount rule: Count all attributable complete drive units consumed, including rejected or failed units replaced before acceptance, net of verified returns/transfers and remaining reusable stock. Preserve measured installed configuration and accepted-unit count separately; overhaul consumables remain distinct exchanges.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `doppelmayr-zugerberg-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Shared site utilities and construction residues (`site_operation`)

Attribute all plant, generators, pumping, haul, welding, cabins and construction test support once to the relevant tasks. Retain the shared totals in this process without duplicating them under each installation. Record purchased utilities, direct resources, wastes and emissions distinctly.

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Actual construction machinery, on-site haul and generator diesel only; record grade, fossil/bio fraction, consumption and machine task. This generic material identity supplies no heating value or emission factor.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Measure issued fuel less returns and tank stock increase; volume-to-mass conversion requires actual batch density and temperature.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `rics-wlca-2024`

###### Alternating current (`electricity_lv`)

This UUID applies only to Chinese user-side grid-average electricity at <1 kV, evidenced by the actual connection. Record construction, welding, pumping, site facilities and test submeters; exclude operational traction after handover.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use attributable meter readings in kWh converted to MJ by 3.6; separate site generation fuel and avoid counting its output as purchased grid power.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `rics-wlca-2024`

###### Alternating current (`electricity_mv`)

This UUID applies only to Chinese user-side grid-average electricity at 1–35 kV. Never add low-voltage supply already downstream of the same metered incoming medium-voltage supply. Other regions or voltages require matched atomic rows.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use distinct attributable connection-meter readings converted from kWh to MJ by 3.6.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `rics-wlca-2024`

###### lubricating oil (`lubricant`)

This UUID applies only to an actual batch verified as fully synthetic polyalphaolefin (PAO) lubricating oil, total synthesis process, production mix at plant. Record grade, base-oil composition, supply route and gate, replacements and stock; petroleum origin or a generic label alone does not establish a match. Mineral oil, other base-oil formulations, grease, hydraulic fluid and biodegradable oil require separately verified identities. If the complete identity fields cannot be reconciled with supplier evidence, retain the batch identity as unresolved rather than substituting this UUID.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Record attributable deliveries less returns and stock changes; separate installed quantity and construction loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `rics-wlca-2024`

###### Treated mains water supplied to railway construction site (`mains_water`)

When used for dust suppression, curing, cleaning or site facilities, meter actual supply separately by purpose; do not also count the supplier abstraction as direct site resource withdrawal.

- Selected flow: Treated mains water supplied to railway construction site
- Flow property / unit: Volume / m3
- Amount rule: Use measured delivered water volume; no default litres per track length.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `rics-wlca-2024`

##### Waste flows

##### Elementary flows

###### river water (`river_water`)

Only direct abstraction from a river for construction; record country, river and actual withdrawal. This is renewable material resource from water, not tap water, groundwater or wastewater.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Measure gross river abstraction separately from discharge and reused water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `rics-wlca-2024`

#### Outputs

##### Product flows

##### Waste flows

###### Steel rail installation offcut sent for recycling (`steel_offcut`)

Actual segregated rail cuttings crossing the site waste gate; record steel grade and receiving recycler. No avoided-steel credit is presumed.

- Selected flow: Steel rail installation offcut sent for recycling
- Flow property / unit: Mass / kg
- Amount rule: Use weighed dispatch and reconcile rail received, installed, returned and offcut mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Hardened concrete construction offcut (`concrete_waste`)

Only segregated hardened concrete; returned fresh concrete, sludge and demolished old track are separate streams.

- Selected flow: Hardened concrete construction offcut
- Flow property / unit: Mass / kg
- Amount rule: Weigh actual dispatch; record reinforcement inclusion and waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Contained concrete washout liquid for treatment (`washout`)

Only captured washout sent to treatment; measure composition and recipient. It is a waste transfer, not direct river water emission.

- Selected flow: Contained concrete washout liquid for treatment
- Flow property / unit: Volume / m3
- Amount rule: Meter or tank-measure collected washout; record recycling and retained tank stock separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `rics-wlca-2024`

###### Polyethylene packaging film waste (`film_waste`)

Where removed from incoming railway components, record segregated polyethylene packaging and receiving destination. Paper and steel packaging remain separate required rows if present.

- Selected flow: Polyethylene packaging film waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh segregated polyethylene film dispatch; avoid mixing other polymers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

##### Elementary flows

###### carbon dioxide (fossil) (`co2`)

Immediate fossil CO₂ release to air, unspecified subcompartment, only from documented on-site fossil combustion. Keep biogenic CO₂ and land-change emissions separate; more specific release conditions need matched identities.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure or derive from actual consumed fossil fuel, measured carbon content and oxidized fraction with traceable method; no generic default factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `rics-wlca-2024`

###### nitrogen monoxide (`no`)

Only chemically resolved NO from actual combustion measurement/model, immediate air release with unspecified subcompartment. Total NOx reported as NO₂-equivalent does not establish this NO quantity.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use species-resolved measured emissions or site-specific documented factor and actual equipment activity; no assumed occurrence or speciation ratio.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `rics-wlca-2024`

###### Nitrogen dioxide to air, immediate release (`no2`)

Only actual resolved NO₂, CAS 10102-44-0; not NO, nitrite, nitrogen or N₂O. Missing speciation stays unknown, not zero. The selected identity is only immediate release to air with unspecified subcompartment; known urban/high-stack or other release conditions require the matching identity. Its inconsistent tetroxide synonyms do not authorize N₂O₄ quantities as NO₂.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use species-resolved measured emissions or validated site-specific model with documented release conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `rics-wlca-2024`

###### particles (PM10) (`pm10`)

Only measured/modelled PM10 crossing the site boundary to air, immediate release with unspecified subcompartment. Excavation/haul dust and diesel exhaust need separate activity attribution; do not also add overlapping size fractions or total suspended particulate.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use actual activities, controls and a documented site-specific sampling/model basis; no universal construction factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `rics-wlca-2024`

### Process: Delivery inspection and handover (`handover`)

Survey geometry and actual installed configuration; inspect completion and conduct project-required static/integrated tests. Record acceptance documents, defects corrected, temporary works removal and site restoration. Tests are those actually required for this delivery, not all HS2 programme phases by default.

#### Inputs

##### Product flows

###### Electricity supplied for railway delivery tests (`test_power`)

Only separately metered tests not included in construction meters; state source and voltage. Traction during commissioning is included only within the declared delivery tests; commercial operation is excluded.

- Selected flow: Electricity supplied for railway delivery tests
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record actual test meter readings and prevent overlap with electricity_lv/electricity_mv.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `hs2-phase2a-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed railway infrastructure delivery unit (`reference_railway`)

One accepted physical asset unit with its declared chainage/site and actual completed configuration; not one tonne of materials or a construction service.

- Selected flow: Completed railway infrastructure delivery unit
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `cpc3-notes-2025`, `hs2-phase2a-2017`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_task_attribution | all inventory rows | Avoid allocation by assigning delivery notes, submeter readings, machine task hours and waste tickets to the actual delivery. Retain shared-site totals and a reconciled attribution ledger. Where a shared input cannot be directly assigned, document the measured causal activity (e.g. actual pumping hours or hauled load) and the complete denominator across all deliveries; do not allocate rail works by cost or arbitrary equal shares. Losses and rework before acceptance belong to the delivered unit. Reused cut/fill inside the boundary is not a co-product; actual reusable export is a separate product with explicit quality, destination and burden allocation, not negative waste. No automatic avoided-production credits. `rics-wlca-2024`. | rics-wlca-2024 |
| allocation_asset_conservation | all inventory rows | Construction equipment manufacture and reusable temporary components are separate upstream contributions where included. cp_equipment records each physical asset, its evidenced total lifetime activity or actual cumulative use, prior allocations and the attributable project activity. A project share must be between zero and one, and cumulative shares across projects/periods/reuses must never exceed one; never reset the full manufacturing burden at each project. Unknown total activity/use history requires explicit review and sensitivity disclosure, not an invented lifetime or reuse count. Fixed permanent components installed in this delivery retain their actual supplied burden once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | handover | reference_railway | acceptance_record | contract boundary; site; configuration; chainage; measured route and each track length/count; gauge; cross-section; system scope; acceptance status | Reconcile as-built survey, contract bill, equipment tags, tests and signed acceptance; confirm one delivery unit | item | each delivery | actual construction start through acceptance including rework | declared site and delivery unit | per declared reference flow | raw tickets, calibration, as-built surveys, batch certificates and scope reconciliation |
| cp_materials | all foreground processes | each supplied material/component | delivery_record | row_id; work package; batch; supplied state; composition; mass/volume/count; certified density or linear mass; returns; stocks; installed amount; loss; equipment tags; failed/replaced-unit counts; opening and closing attributable stock; verified returns/transfers | Reconcile delivery tickets, calibrated weights/batch certificates and measured installed geometry row by row; split different grades/states; input count = gross attributable receipts + opening stock - verified returns/transfers - closing reusable stock. Include units consumed by pre-acceptance failures/rework; reconcile accepted installed count and actual waste separately without cancelling the input manufacturing burden. | kg; m3; item | each batch | actual construction start through acceptance including rework | declared site and delivery unit | per declared reference flow | raw tickets, calibration, as-built surveys, batch certificates and scope reconciliation |
| cp_energy | site_operation; handover | each fuel and electricity connection | meter_record | row_id; machine; task; time; readings; fuel batch density/fossil fraction; region; voltage; submeter; returns/stock change | Reconcile calibrated electric/fuel meters, issue/return records and task logs; attribute welding, compaction, pumping, lifting, haul and tests separately | kg; MJ | each shift and test | actual construction start through acceptance including rework | declared site and delivery unit | per declared reference flow | raw tickets, calibration, as-built surveys, batch certificates and scope reconciliation |
| cp_water | earthwork; site_operation | mains_water; river_water; drain_return; washout | water_record | row_id; source; recipient; volume; time; purpose; abstraction/discharge gate; treatment; liquid composition; tank stock; reuse | Use separate calibrated flow meters or measured tank volumes; reconcile samples, destinations and abstraction/discharge records | m3 | daily and each dispatch | actual construction start through acceptance including rework | declared site and delivery unit | per declared reference flow | raw tickets, calibration, as-built surveys, batch certificates and scope reconciliation |
| cp_waste | earthwork; site_operation | segregated mass-based waste streams; excludes volume-based washout collected under cp_water | dispatch_record | row_id; source task; classification; composition; moisture; weight; destination; receiver; reuse; stock | Reconcile calibrated weighbridge and receiving records for each mass-based stream; split hazardous material, old demolition debris and new construction waste. Captured washout retains metered Volume/m3 under cp_water and is not forced into this kg ledger; separately removed solids are distinct measured mass streams without duplicating their presence in exported liquid. | kg | each dispatch | actual construction start through acceptance including rework | declared site and delivery unit | per declared reference flow | raw tickets, calibration, as-built surveys, batch certificates and scope reconciliation |
| cp_emissions | site_operation | co2; no; no2; pm10; additional actual species | emission_record | row_id; species/CAS; compartment/subcompartment; immediate/long-term; activity; method; factor source; concentration; flow rate; duration; controls; uncertainty | Use representative site sampling or traceable site/equipment model with actual activity; record unmeasured scope and never force total NOx into NO/NO₂ | kg | event/representative condition | actual construction start through acceptance including rework | declared site and delivery unit | per declared reference flow | raw tickets, calibration, as-built surveys, batch certificates and scope reconciliation |
| cp_equipment | all foreground processes | equipment and reusable temporary component burdens | asset_ledger | asset ID; manufacturing burden scope; cumulative activity/use evidence; project activity; prior/current shares; remaining share; temporary works destination | Reconcile same-asset cross-project use ledger and supplier evidence; independently check cumulative share does not exceed one; unknowns require review | item; h | each use/delivery | actual construction start through acceptance including rework | declared site and delivery unit | per declared reference flow | raw tickets, calibration, as-built surveys, batch certificates and scope reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| same_delivery | all inventory rows | Aggregate attributable records for the same declared delivery unit; normalize only per declared reference flow, retaining each numerator unit, without a per-kg or arbitrary length denominator. | cp_delivery; cp_materials; cp_energy; cp_water; cp_waste; cp_emissions | exchange amount per declared reference flow |  |
| delivered_count | reference_railway | One complete accepted delivery = 1 item; rejected/incomplete units cannot be reference output. | cp_delivery | reference_railway | hs2-phase2a-2017 |
| conversion_records | all inventory rows | Mass/volume/linear-mass/concentration/energy conversions use section 4 and actual same-batch records; retain formula, inputs, units, uncertainty and source; never automatically invent missing relationships. | cp_materials; cp_energy; cp_water; cp_emissions | traceably converted numerator quantities |  |
| shared_asset_share | all inventory rows | Attribute by section 7 measured causal activity and asset ledger; cumulative manufacturing shares across projects ≤1; unknown denominator retains review. | cp_equipment; cp_delivery | attributable delivery burden and coverage disclosure |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Verify substance/composition, state, route, geography, voltage, environmental medium, reference property, unit and official Chinese name; missing identity cannot be claimed resolved | supplier certificates, public identities and raw foreground records |
| completeness | all foreground processes | Reconcile all actual materials, equipment, energy, temporary works, logistics, losses, wastes, releases and tests by work package; distinguish absent, unmeasured and excluded | as-built bill and gap ledger |
| time_site | all inventory rows | Use actual construction/acceptance dates, same-site packages and real energy/supplier representativeness; historical sources are qualitative examples only | ticket dates, site and dataset coverage |
| uncertainty | all inventory rows | Record uncertainty/limitations for every measurement, conversion, allocation and background link; never replace no-data with zero or industry defaults | calibration, sampling plan, certificates and sensitivity analysis |
| environment | site_operation; earthwork | Retain site environmental evidence for noise, vibration, ecology and land disturbance; dB is not an additive material exchange or sound energy and is separately reported without a valid flow-property relationship | actual monitoring, time/location and site environmental plan |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_delivery | all inventory rows | Confirm reference product name equals reference_railway, amount is 1 item, and cp_delivery measured geometry/configuration/acceptance matches every inventory denominator. |  |
| validate_route | all inventory rows | Determine conditional processes from actual work; ballast/slab, overhead/third rail and steel-wheel/cable routes must match supplies and tasks, without narrowing the category for checking convenience. | hs2-phase1-2013, hs2-phase2a-2017 |
| validate_balance | all inventory rows | Reconcile soil cut/reuse/import/export/stock and installed materials/losses; same equipment/component and meter burdens conserve cumulative shares without duplicate accounting. |  |
| validate_emissions | all inventory rows | Elementary flows require measurement or a site-applicable model with correct species, fossil/biogenic origin and medium; NO, NO₂, N₂O, dust size, resource water and waste liquid are not interchangeable. |  |
| validate_coverage | all inventory rows | Missing tasks/identity/measurement/background links and unsupported conversions must explicitly retain incompleteness; machine checks do not imply scientific or engineering acceptance approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific railway infrastructure construction-to-delivery foreground package |
| downstream_use | Railway entity comparison with explicit configuration/geometry or linkage to separate upstream/downstream datasets |
| allowed_use | Site inventory for an actually defined delivery; explicit extensions with matched manufacture, transport, disposal and test contributions |
| excluded_use | Presumed whole-life/complete cradle-to-gate; transport service; undefined per-km results; default lifespan, burden credits or compliance approval |
| required_metadata | PCR version; reference qualifiers; actual contract/as-built/acceptance; tasks/routes; quantities; sources/units; allocation; background gates; temporal/spatial scope |
| required_quality_disclosure | Missing identities/measurements/tasks; independent background coverage; uncertainty; scientific review state; historical-source limitations; actual maintenance/demolition coverage |
| update_trigger | Change of delivery boundary, design/geometry, equipment/track route, energy source, construction method, tests, supplier or background data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, p.279 (53212 and adjacent bridge/tunnel scope). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Construction entity identity only; not LCA boundary, engineering design or numerical data. |
| hs2-phase1-2013 | official_guidance | HS2 Ltd, Phase One Environmental Statement Volume 1, November 2013, pp.111–112, §6.22. https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/259491/Volume_1_Introduction_to_the_Environmental_Statement_and_the_Proposed_Scheme.pdf | Historical qualitative ballasted/slab construction sequences only; no track dimensions, loads, quantities or current compliance assumed. |
| hs2-phase2a-2017 | official_guidance | HS2 Ltd, Phase 2a Environmental Statement Volume 1, July 2017, p.87 §6.11.5–8; pp.106–109 §§6.24–6.28. https://assets.publishing.service.gov.uk/media/5a82aed6ed915d74e62371a8/E8_Volume_1_WEB.pdf | Historical examples of earthworks, slab, power, control and commissioning; the proposed scheme is not an actual foreground record or a universal track choice. |
| doppelmayr-zugerberg-2023 | literature | Doppelmayr/Garaventa, Zugerberg funicular undergoes eco-friendly refurbishment, 18 January 2023, p.1. https://www.doppelmayr.com/wp-content/uploads/2023/01/2023_01_MM_80-FUL_Zugerberg-Bahn_EN.pdf | Manufacturer historical project example of track/equipment distinction and temporary material ropeway logistics. Its quantities, length, capacity and history are not category defaults; other cableways require their own installation evidence. |
| rics-wlca-2024 | standard | RICS, Whole life carbon assessment for the built environment, 2nd ed. September 2023, version 3 August 2024, printed p.80 §5.1.4. https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | Qualitative construction-stage separation of site activities, temporary works and waste. This carbon-accounting guidance is not proof of a complete multi-impact LCI or emission factor; no generic percentages or durations used. |
