---
pcr_id: pcr.constructions-and-construction-services.constructions.local-cable-network-works
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Local cable network and ancillary works delivery

## 1. Scope and Applicability

This rule covers physically delivered local electricity, communication and television cable works, together with local distribution transformer stations, substations and transmission towers including antennas. A delivery can be an identified line segment, station or bounded combination; establish identity from measured boundaries, configuration and acceptance state. A classification code alone does not establish identity. The [UN classification notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf), pp. 280–281, support this scope.

The method addresses the traceable relationship between construction quantities and the accepted entity: duct/trench and foundations, placement/jointing, station/tower installation, reinstatement and shared equipment attribution. Cable, conductor and equipment factory-gate methods provide upstream interfaces only. Exclude long-distance communication/transmission networks, complete railway-specific electrification, cable manufacture itself, standalone installation services and network operating services. Local network function and boundaries, rather than voltage or length alone, distinguish the category.

Select routes from real construction records; a low-voltage cable case cannot represent the whole category. Construction-record closure and acceptance are required; underground, aerial, station/tower and submarine work are conditional on configuration. The atomic rows below do not establish exhaustive material coverage for every project: actual additional components, fuels, gases, wastes, pollutants and ecological disturbances require separate rows and evidence before claiming complete inventory coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.local-cable-network-works |
| classification_refs | CPC 3.0 53252; context only / 仅分类背景 |
| covered_products | Accepted local power, communication or television cable networks and actual ancillary station/tower works |
| excluded_products | Long-distance networks; complete railway electrification; factory cable products; standalone construction services; operating services |
| representative_product | An endpoint- and circuit-defined local cable segment with its actual ducts, joints, supports and accepted reinstatement interfaces |
| production_route | Actual underground, aerial, station/tower and local submarine branches; no assumption that all occur |
| market_state | Installed physical entity after actual construction and acceptance; declare energised or ready-only state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | An installed power or communication connection between declared local endpoints, or a configured local distribution-station/tower entity |
| How much | One independently accepted entity; additionally declare measured route m, cable m by circuit, duct count, station m2, tower height m and actual rated capacity as applicable |
| How well | Real as-built geometry, component specifications, joint/bonding records, applicable electrical/optical tests and structural inspection; this PCR grants no compliance or energisation approval |
| How long or cycle | One actual construction-to-handover cycle with dates; no prescribed operational lifetime |
| reference_flow_link | `reference_product_local_cable_works` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Delivered local cable network works |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | entity ID and site; local network purpose and endpoints; actual underground/aerial/station/tower/submarine configuration; measured geometry; actual voltage/capacity or fibre/television specification; new and retained components; as-built and acceptance state; construction dates; start/handover interfaces; excluded stages; upstream coverage |

Here item is a display alias of Item(s) in the public item unit group and counts the same complete accepted entity. Length, area and capacity are measured configuration qualifiers, not interchangeable reference outputs; no generic kg per kilometre, square metre or structure is provided. Reference-product UUID remains unresolved.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_count` | reference product and accepted output | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Reference amount is 1 item; inventory, collection and calculation use per declared reference flow, excluding purchase contracts and unfinished works. |
| `geometry_and_cable_length` | route and cable qualifiers | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | As-built survey distinguishes route length, cable length, fibre length, parallel circuits and slack; m does not substitute kg or item. |
| `physical_mass` | auxiliary mass-balance and equipment-attribution records linked to materials and offcuts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh actual state with wet/dry basis; volume/length-to-mass needs matching batch density or measured kg/m. Equipment mass supports manufacture attribution, not reference-entity mass. The required Mass/kg is an auxiliary record, not a replacement primary property for length- or count-based exchanges. Keep pipes/cables in Length/m and complete joints/transformers in Number of items/item; link row, batch, configuration, issued quantity and independently measured kg or supported conversion in cp_materials/cp_cables. Never count the auxiliary mass as a second manufacturing exchange. |
| `energy_basis` | fuel and construction electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve public net-calorific-value property; measured kWh times 3.6 gives MJ. Fuel kg times batch MJ/kg; volume fuel first uses actual density to kg. Unknown LHV/density cannot be guessed. |
| `water_basis` | water supply, abstraction, direct water discharge and volume-based liquid-waste rows; excludes wet-mass drill_slurry | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter true liquid volume by separate interface, retaining quality, origin and receiver; resource, technosphere and emission water are distinct. Spent drill_slurry retains Mass/kg on the measured wet basis, including retained water and mineral solids under cp_waste; any auxiliary volume requires same-state density and does not replace or duplicate this waste exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Material/equipment supply interface, actual transport origin and initial site condition; retained infrastructure has measured interfaces |
| starting_condition_role | foreground construction and delivery |
| product_classification_scope | local cable-network and ancillary civil entities |
| recursive_input_rule | Do not recurse a purchased existing same-category work into new construction output; declare its delivered interface/historical burden and record actual modification separately |
| upstream_dataset_requirement | Match real factory-gate manufacture backgrounds and required transport separately; missing backgrounds mean uncovered upstream, not complete cradle-to-delivery |
| disclosure | Declare site-construction-to-acceptance foreground module; disclose upstream, transport, retained components, off-site treatment, operation/maintenance and dismantling coverage separately |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `construction_boundary` | Include actual receipt/logistics, setting-out, site preparation, earthworks, placement/jointing, foundations, station/tower erection, tests, corrective rework and reinstatement through the documented acceptance boundary. Record actual equipment and utility activity by operation; shared site-operations rows must not duplicate downstream stage totals. | `spen-secondary-civil-2026` |
| `upstream_interface` | Keep manufacture of cables, ducts, concrete, transformer and other purchased items upstream; construction does not automatically reproduce factory inventories. Transport and external waste treatment remain separately linked stages with coverage disclosure. |  |
| `later_stages` | Operation energy, network losses, future maintenance/replacement and terminal dismantling are excluded from the default construction module. If required, model actual supported periods or explicit scenarios separately, with compatible reference function, maintenance geometry, removal activity and waste destinations; no default lifetime or end-of-life credit. |  |
| `special_routes` | For trenchless or submarine segments retain actual bore/lay/burial geometry, fluid recipe, vessel/equipment hours, spoil, losses and receiving media. Do not replace these branches with open-trench assumptions or declare ecological/noise effects absent merely because no characterized elementary identity is available. | `itu-optical-cables-2009` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| site-operations | Receipt, survey, logistics and site operations | required | All delivered works; actual activities only | foreground construction | per declared reference flow |
| underground-civil | Underground ducts, trenches and crossings | conditional | Actual underground route or foundation/cable trench excavation; distinguish reused ducts, open trench and trenchless crossing | foreground construction | per declared reference flow |
| aerial-support | Aerial supports and cable suspension | conditional | Actual aerial line or locally serving transmission tower; distinguish new and retained supports | foreground construction | per declared reference flow |
| cable-placement | Cable placement, joints and terminations | conditional | Actual new or replaced local power, communication or television cable | foreground construction | per declared reference flow |
| station-tower | Local distribution station and antenna installation | conditional | Actual station or antenna facility in the delivered works; construction and installed equipment separately measured | foreground construction | per declared reference flow |
| marine-placement | Local submarine cable placement | conditional | Only a documented locally serving submarine segment; vessel placement, burial and shore interface separately recorded | foreground construction | per declared reference flow |
| reinstatement | Reinstatement and construction waste dispatch | conditional | Actual disturbed surface or construction waste dispatch before handover | foreground construction | per declared reference flow |
| acceptance | Inspection, testing and handover | required | All works; tests appropriate to the actual electrical, optical, structural or antenna configuration | foreground construction | per declared reference flow |

Populate a row only when its exchange actually occurs and identity conditions match. Demonstrated absence requires a verifiable not-applicable reason; missing evidence is not zero. Shared electricity, fuel and water protocols split raw activity by process_id before aggregating once in site-operations. Real additional materials in another configuration require new atomic rows, not substitution into an existing name.

### Process: Receipt, survey, logistics and site operations (`site-operations`)

Receive and inspect actual cable reels, components and equipment against supplier tickets; survey endpoints, existing services and the accepted work footprint. Unload and stage with actual lifting/handling equipment, install actual temporary protection and traffic arrangements, and record mobilisation and shipment legs. Meter individual equipment idling, fuel, temporary-power and water intervals against work orders. Separate outsourced freight from owned transport to prevent duplicate fuel. Existing ducts, poles and station assets are surveyed interfaces, not newly manufactured outputs.

#### Inputs

##### Product flows

###### Diesel (`site_diesel`)

Only actual petroleum-distillate diesel supplied to site engines with documented formulation, sulfur grade and supply interface. Use measured kg and batch net calorific value to express MJ; the database secondary mass ratio is not a fuel conversion factor. Biofuel carbon is separated.

- Selected flow: Diesel `fbd79004-188c-47a4-900b-96005d994690`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured site-engine fuel energy; exclude transport already covered by a freight dataset
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

###### Alternating current (`site_electricity_lv`)

Only actual CN grid-average consumption at user below 1 kV. Separate measured site machinery, pulling, splicing and test electricity by work order; another geography or voltage requires another verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered kWh converted to MJ; no double count with generation fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

###### Alternating current (`site_electricity_mv`)

Only actual CN user-side 1–35 kV supply; separate from the below-1-kV meter and downstream transformation. This is construction electricity, not delivered network operating electricity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered kWh converted to MJ for this actual supply tier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

###### Tap water (`site_supply_water`)

UUID is restricted to actual Hong Kong treated-water production/supply at water-treatment-plant gate. Verify the real transport/distribution link separately; other places require their own identity. Record curing, cleaning and dust-control use only if actual; no 1000 kg/m3 default.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered m3 from matching supply linked to actual site use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

###### Road freight transport of cable reels (`road_freight`)

Use only actual truck movements not embedded in delivered-price background datasets; other delivered items and waste routes receive separate shipment records and atomic transport rows.

- Selected flow: Road freight transport of cable reels
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Actual tonnes multiplied by route kilometres, retaining empty-return treatment and allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_logistics`

###### Hydraulic excavator (`excavator_manufacturing_share`)

Conditional actual excavator manufacture attribution, separate from fuel. Measure same-configuration equipment net mass and documented dimensionless activity share; cumulative shares across projects, periods and reuse shall not exceed one. Unknown lifetime activity remains review. Other tools require separate identities and records.

- Selected flow: Hydraulic excavator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured equipment kg multiplied by supported manufacturing attribution share
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equipment`

##### Elementary flows

###### ground water (`groundwater_abstraction`)

Only actual fresh groundwater, CAS 7732-18-5, abstracted from an identified aquifer across the renewable-water-resource boundary for site dewatering. Record the real extraction country in the unit process for country-dependent characterization; no scarcity level is inferred. Rainwater ingress and purchased water are distinct; disclose displaced water and receiver, not assumed consumption.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered abstracted m3 by aquifer and pumping interval
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2_air`)

Only actual immediate external release of fossil carbon dioxide to air, unspecified subcompartment. Require fossil carbon and oxidation evidence for the actual equipment; no combustion emission follows merely from a fuel purchase.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Only actual measured or independently supported species-specific kg; absent evidence is unresolved, not zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`

###### nitrogen monoxide (`molecular_no_air`)

Only measured molecular NO, CAS 10102-43-9, immediate external air/unspecified release; not aggregate NOx, NO2 or N2O.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Only actual measured or independently supported species-specific kg; absent evidence is unresolved, not zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`

###### nitrogen dioxide (`molecular_no2_air`)

Only molecular NO2, CAS 10102-44-0, immediate external air/unspecified release. NOx reported as NO2-equivalent is not molecular NO2; retain unresolved speciation when needed.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Only actual measured or independently supported species-specific kg; absent evidence is unresolved, not zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`

###### particles (PM2.5) (`pm25_air`)

Only actual immediate external air/unspecified PM2.5 release after controls from separately identified exhaust or fugitive operations. Do not equate TSP, workplace dust or total PM10 with this fraction.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Only actual measured or independently supported species-specific kg; absent evidence is unresolved, not zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-construction-dust-1995`

###### particles (PM2.5 - PM10) (`coarse_pm_air`)

Only actual external immediate air/unspecified fraction above 2.5 and up to 10 micrometres after controls; prevent overlap with PM2.5 and total PM10.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Only actual measured or independently supported species-specific kg; absent evidence is unresolved, not zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-construction-dust-1995`

###### Water (`freshwater_discharge`)

Only actual liquid water directly entering an identified fresh-water receiving body, CAS 7732-18-5. Excludes resource withdrawal, supply, vapour, saline receivers and effluent sent for treatment. Record dissolved pollutants separately if measured; this row represents water only.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured actual direct-discharge m3 at the receiving-water release point; if on-site treatment occurs, measure after it, and if no treatment occurs, retain the untreated direct release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

### Process: Underground ducts, trenches and crossings (`underground-civil`)

Locate existing utilities and set out actual trench, chamber, foundation or crossing geometry. For open excavation, record excavator/breaker work, shoring, actual dewatering, segregated spoil, duct positioning, measured bedding/backfill, compaction and any foundation reinforcement/concrete placement and curing. For reused ducts, inspect/prove and clean the actual duct without inventing new excavation. For trenchless work, record drilling rig and compressor/pump activity, bore path, actual drilling-fluid constituents and return/slurry handling; duct insertion and shore/crossing interfaces remain separate records. Sample/destination evidence distinguishes direct release from liquid treatment transfer.

#### Inputs

##### Product flows

###### HDPE cable duct (`hdpe_duct`)

Only actual HDPE duct placed in a trench or crossing; retain internal diameter, wall thickness, duct count and any existing duct interface. PVC and concrete ducts need separate rows.

- Selected flow: HDPE cable duct
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual supplied metres reconciled to installed metres, returns and offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-optical-cables-2009`

###### Graded silica sand for cable bedding (`bedding_sand`)

Only actual specified bedding/backfill silica sand; thermal backfill formulation and grain grading must be documented. Site-won soil reused internally is not an imported sand input.

- Selected flow: Graded silica sand for cable bedding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed kg; measured volume conversion requires batch bulk density and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Ready-mixed cementitious concrete (`cast_concrete`)

Only actual plant-mixed concrete supplied wet for ducts, chambers, foundations or slabs. Grade, binder, moisture, density and delivery stage are required. Do not use a precast-component or unrelated wind-farm identity. On-site batching requires separate actual ingredient rows, without also counting the ready-mix.

- Selected flow: Ready-mixed cementitious concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Wet kg from tickets or volume times verified batch density; retain separate geometric m3
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `spen-secondary-civil-2026`

###### Hot rolled rebar steel (`reinforcement`)

Only actual factory hot-rolled low-alloy rebar with C ≤ 0.2% and matching uncoated state; embedded reinforcement of a purchased precast product is not counted again.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed attributable steel kg consumed, including cutting losses and damaged/rejected material before installation; use the cp_materials receipts/stock/returns balance and reconcile installed kg and each waste stream separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `spen-secondary-civil-2026`

###### Processed bentonite drilling powder (`bentonite_drilling`)

Only actual bentonite powder in a trenchless crossing; specify processed grade and mix state. A bentonite elementary-resource flow cannot substitute this purchased product. Polymer additives need individual rows.

- Selected flow: Processed bentonite drilling powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed dry powder kg with moisture basis and drill-fluid batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-optical-cables-2009`

#### Outputs

##### Waste flows

###### Surplus excavated mineral soil (`surplus_excavated_soil`)

Only actual removed mineral soil dispatched off-site; classify contamination and destination. Internal backfill reuse stays in the excavation ledger. Segregate rock and contaminated soil when present.

- Selected flow: Surplus excavated mineral soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Wet/dry kg consistently weighed or measured volume with real density and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Spent bentonite drilling slurry (`drill_slurry`)

Only actual spent slurry leaving the site for treatment; include retained water and mineral solids on stated wet-mass basis. Direct water release and internal recirculation are separate.

- Selected flow: Spent bentonite drilling slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed wet kg with measured solids and moisture fractions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Silty dewatering effluent sent for treatment (`dewatering_effluent`)

Only actual liquid sent to an external treatment interface. Do not use the freshwater elementary release identity for this waste transfer.

- Selected flow: Silty dewatering effluent sent for treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered m3 and sample composition at dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

### Process: Aerial supports and cable suspension (`aerial-support`)

Survey actual spans, pole/tower positions and retained supports. Construct measured foundations in underground-civil, then use the actual crane/lift or erection method to place supports, install anchors and specified hardware, and verify alignment and tightening against the project records. For lashed cable, install or verify the real messenger, blocks and lashing wire, place cable with actual reel/winch/lasher activity and measured slack/sag; self-supporting routes use their own actual fixing arrangement. Record bonding/grounding and inspect each accepted span. Shared supports require a beneficiary and manufacture-allocation ledger.

#### Inputs

##### Product flows

###### Galvanized steel line pole assembly (`galvanized_pole`)

Only new actual steel support with defined coating and hardware included in its delivered assembly; retained existing poles carry declared historical/interface treatment. Timber and concrete poles need separate rows.

- Selected flow: Galvanized steel line pole assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured assembly net kg at declared configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Galvanized steel messenger wire (`messenger_wire`)

Only actual separately supplied messenger wire for suspended communication cable; exclude a factory-integrated strength member.

- Selected flow: Galvanized steel messenger wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual net kg reconciled to installed length and measured kg/m
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-optical-cables-2009`

###### Stainless steel cable lashing wire (`lashing_wire`)

Only actual stainless-steel lashing wire, recorded separately from messenger wire and cable; not required for self-supporting cable.

- Selected flow: Stainless steel cable lashing wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual consumed net kg with residual wire and returns reconciled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-optical-cables-2009`

### Process: Cable placement, joints and terminations (`cable-placement`)

Inspect reels and duct/tray/aerial interfaces, define the actual pull or blowing plan, and record rollers, winch, compressor and pulling/placement intervals with cable-specific manufacturer limits. Record tension, bend radius, cable specification, installed cable length and slack as actual acceptance evidence, with no default lubricant or wastage percentage. Make only the actual power joints/terminations or optical splices, install the actual seals/closures and bonding, and keep fibre sleeves, cable glands, resins and other separately supplied constituents on individual rows when used. Tests and defect-driven replacement before handover stay inside this construction cycle.

#### Inputs

##### Product flows

###### Low-voltage cable (`lv_cable`)

Only actual CN factory-gate cable matching GB/T 12706.1-2020, rated-voltage range, conductor material, cores, cross-section, insulation and sheath. Factory-contained components stay embedded; transport and installation are separate. Other cable specifications require separate identities.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Use attributable cable consumption in m = gross receipts + opening stock - verified returns/transfers - closing reusable stock. Include installation offcuts, pre-acceptance damage and replacement consumption; reconcile accepted installed lengths and retained slack separately. Preserve Length/m and do not infer cable mass per metre.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cables`

###### Medium-voltage cable (`mv_cable`)

Only actual CN factory cable matching GB/T 12706.2-2020 and declared cores, conductor, voltage, insulation and sheath in a locally serving route. Medium voltage alone does not make a network long-distance.

- Selected flow: Medium-voltage cable `6cfb5366-3e9b-4356-8d18-eb27c432fbaf`
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual cable-metres consumed, retaining circuit and core distinction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cables`

###### Sheathed optical fibre cable (`optical_cable`)

Only actual fibre cable with fibre count, single/multimode specification, sheath, armour and tensile-member configuration; copper/aluminium generic cable identities are unsuitable.

- Selected flow: Sheathed optical fibre cable
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual sheathed cable-metres consumed, not fibre-metres
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cables`
- Sources: `itu-optical-cables-2009`

###### 75-ohm television coaxial cable (`television_coaxial`)

Only actual 75-ohm television distribution cable with conductor, dielectric and shielding configuration; another impedance or copper communications construction receives its own row.

- Selected flow: 75-ohm television coaxial cable
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual cable-metres consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cables`

###### Water-based polymer cable-pulling gel (`pulling_gel`)

Only actual identified formulation approved for the actual sheath by the supplier; retain safety data and composition, not a default lubricant for every pull.

- Selected flow: Water-based polymer cable-pulling gel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed dispensed kg, net of unused returned gel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Sealed low-voltage cable joint kit (`power_joint`)

Only the actual delivered joint kit matching the low-voltage cable and splice arrangement; no additional kit for a joint already included in a purchased assembly. Other voltages and termination kits are distinct rows.

- Selected flow: Sealed low-voltage cable joint kit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count of actual kits consumed with unused returns removed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Optical fibre splice closure (`fibre_closure`)

Only actual completed closure; specify port/seal arrangement and fibre capacity. Factory-contained sleeves are not added again.

- Selected flow: Optical fibre splice closure
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count of installed closures and consumed replacements before handover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-optical-cables-2009`

###### Wooden cable drum (`wooden_drum`)

Only separately attributed actual wooden drum manufacture not already in the cable background. Record drum net mass, serial, return/reuse history and conserved share; do not classify an intact returned drum as waste.

- Selected flow: Wooden cable drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured wooden-drum kg times supported attribution share
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equipment`

#### Outputs

##### Waste flows

###### Insulated copper cable offcut (`copper_cable_offcut`)

Only actual insulated copper offcut dispatched as waste; not pure copper scrap, and not aluminium or optical cable. Split those when present; retain insulation and contamination state.

- Selected flow: Insulated copper cable offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual weighed net kg from the segregated container
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

### Process: Local distribution station and antenna installation (`station-tower`)

Construct only the actual measured foundation, slab, drainage, oil-containment arrangement and enclosure; distinguish delivered prefab enclosure from masonry/roof/door construction. Lift and position the actual transformer/switchgear or local tower/antenna with serial and configuration records, then install specified anchoring, feeders, earthing and protection/control interfaces. Use actual lifting equipment hours and construction utilities, not estimated operation-year power. Factory-contained oil/gas/electronics stay in purchased-assembly scope; real on-site filling or release requires separate substance and activity evidence. Structural alignment/bolt, electrical/earthing and antenna acceptance are recorded for the actual delivery type.

#### Inputs

##### Product flows

###### Transformer (`distribution_transformer`)

Only actual complete factory-gate 400 kVA, 10/0.4 kV transformer matching construction, cooling and supplied-component scope. This identifier does not cover another rating or a complete station. Actual oil already contained in the purchased transformer is not purchased again.

- Selected flow: Transformer `734249ea-34e6-471b-a05a-f5b26b818167`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count all matching transformers actually consumed for this delivery under cp_materials, including pre-installation damage and failed/rejected replacements; reconcile receipts, returns/transfers and stocks. Keep installed accepted count separately; other ratings retain separate unresolved identities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `spen-secondary-install-2025`

###### 11-kV ring-main switchgear unit (`local_switchgear`)

Only actual 11-kV unit of declared insulation medium and protection configuration. A 220-kV GIS identity is unsuitable. Record measured filling or leakage of each gas separately only when it occurs.

- Selected flow: 11-kV ring-main switchgear unit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable complete units consumed, including units damaged or rejected before installation/acceptance and replaced, using the cp_materials receipts/stock/returns balance; retain installed accepted units separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `spen-secondary-install-2025`

###### Fired clay masonry brick (`station_brick`)

Only actual brick-built station enclosure; no default building mass or wall thickness. Mortar and other installed enclosure constituents must be separately recorded.

- Selected flow: Fired clay masonry brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual supplied-and-consumed brick net kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `spen-secondary-civil-2026`

###### Cement-sand masonry mortar (`station_mortar`)

Only actual supplied pre-mixed wet masonry mortar, with formulation and moisture declared; on-site mixing requires separate cement, sand and mixing-water rows instead.

- Selected flow: Cement-sand masonry mortar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual wet kg; no generic cement-to-sand ratio
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Glass-fibre-reinforced polymer substation enclosure (`prefab_enclosure`)

Only actual prefab GRP enclosure; define included roof, doors and floors to prevent duplicate building constituent rows. Masonry route is not simultaneously assumed.

- Selected flow: Glass-fibre-reinforced polymer substation enclosure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable enclosure net kg consumed, including damaged/rejected enclosures replaced before acceptance; reconcile receipts, returns/transfers and stock changes under cp_materials. Retain accepted enclosure kg and dimensions separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `spen-secondary-civil-2026`

###### Galvanized steel local transmission tower assembly (`transmission_tower`)

Only actual locally serving tower steel assembly with height, sections, galvanizing and included bolts declared. Wind-turbine towers and wind-farm-specific cable towers are not substitutes. Foundation inputs are separately recorded in underground-civil.

- Selected flow: Galvanized steel local transmission tower assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured supplied tower net kg, retained erection and bolt records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Outdoor radio transmission antenna assembly (`antenna_unit`)

Only actual antenna on the locally serving tower with frequency band, ports and configuration declared; separately record feeder cable and mounting items not contained in the assembly.

- Selected flow: Outdoor radio transmission antenna assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable complete antenna units consumed, including failed/rejected replacements, net of verified returns/transfers and closing reusable stock under cp_materials; record accepted installed units separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Bare copper earthing conductor (`earthing_conductor`)

Only actual separate copper conductor connecting station, tower and relevant cable bonding; factory-integrated conductor is excluded from additional input.

- Selected flow: Bare copper earthing conductor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual weighed conductor kg reconciled to installed length and measured kg/m
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `spen-secondary-install-2025`

### Process: Local submarine cable placement (`marine-placement`)

For an actual locally serving submarine segment, survey the real seabed/riverbed and shore route, position cable with the actual laying vessel or shore pull, and record each actual burial, trenching, jetting or protection operation separately. Vessel propulsion and onboard equipment energy, paid service interfaces, burial geometry and joint/shore termination work must have real logs. Record disturbed sediment, actual discharges, resource intake and waste destinations by material and receiving medium; a marine gas-oil purchase alone proves none of those releases. No seawater intake, seabed disposal or ecological effect is assigned a made-up amount or a freshwater identity.

#### Inputs

##### Product flows

###### Marine gas oil (`marine_gas_oil`)

Only actual locally serving cable-laying or burial vessel fuel; grade, origin, net calorific value and loaded operating intervals required. A generic road-diesel identity is not adopted here. Fuel and transport-service routes cannot both represent the same vessel work.

- Selected flow: Marine gas oil
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual vessel fuel kg multiplied by batch net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `itu-optical-cables-2009`

#### Outputs

##### Waste flows

###### Dredged mineral sediment sent off-site (`marine_sediment`)

Only actual dredged sediment removed for off-site handling, with salinity, solids, contaminants and destination specified; seabed redistribution is not automatically waste dispatch or a seawater resource exchange.

- Selected flow: Dredged mineral sediment sent off-site
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual wet kg and sampled solids fraction by dispatch batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

### Process: Reinstatement and construction waste dispatch (`reinstatement`)

After installation inspect actual backfill and compaction, restore only the surveyed disturbed pavement/verge or station surface with the real layers and finishes, and remove actual temporary works. Meter roller, paver, cutting and cleaning activity as applicable. Segregate offcuts, removed pavement, concrete residue and actual packaging by state; weigh dispatch and verify the recipient/treatment interface. Intact reels returned for reuse and materials reused within the same boundary are tracked as returns/internal transfers, not waste credits.

#### Inputs

##### Product flows

###### Hot-mix asphalt for trench reinstatement (`asphalt_reinstatement`)

Only actual asphalt surface restored to the measured disturbed area and specified layer thickness; not an entire road construction output. Retain recipe and plant-to-site delivery state.

- Selected flow: Hot-mix asphalt for trench reinstatement
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed wet/delivered mix kg reconciled with measured layer volume and actual bulk density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

#### Outputs

##### Waste flows

###### Removed asphalt pavement (`removed_asphalt`)

Only actual excavated pavement leaving the worksite, with tar/contamination screen and destination; material reused within the declared works is an internal transfer.

- Selected flow: Removed asphalt pavement
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual dispatched net kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Discarded hardened cementitious concrete (`concrete_waste`)

Only actual hardened residue or removed concrete dispatched before handover, separated from fresh returned concrete and its reinforcement.

- Selected flow: Discarded hardened cementitious concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual dispatched net kg with reinforcement handling declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

### Process: Inspection, testing and handover (`acceptance`)

Inspect as-built geometry and delivered configuration, reconcile reel/material and waste ledgers, and perform only the actual project-specified electrical insulation/continuity/bonding, optical loss/OTDR, tower/anchor structural or antenna checks appropriate to the entity. Retain instruments, calibration, test conditions, defects, repair/retest and signed acceptance. Attribute actual test power and rework consumables to site utility/material records once. Declare the agreed handover state and any deferred work or energisation interface; accepted readiness is not a guessed operating lifetime or regulatory approval.

#### Outputs

##### Product flows

###### Delivered local cable network works (`reference_product_local_cable_works`)

One actually accepted, uniquely identified local cable-network or ancillary civil entity. Its endpoints/site boundary, installed configuration and acceptance state define the entity; a service contract or bag of cable is not this output.

- Selected flow: Delivered local cable network works
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `shared_works_allocation` | This delivered entity is the construction output. Separate measured branch activity for joint power/communication trenches, shared poles, stations and mobilisation before allocation. For inseparable residuals use a disclosed causal driver derived from actual work, such as excavated cross-section times length or measured equipment time, with denominator covering every beneficiary. A voltage, cost or cable-count share is not automatically causal. |  |
| `reusable_capital_conservation` | Reusable equipment and drums retain a serial-bound cumulative manufacture ledger. Share = project attributed activity / supported total life activity, only when compatible activity and denominator are evidenced; all project/period/reuse shares sum to at most one. Attribute measured same-configuration mass or count with that share, separately from operating activity. Unknown total life activity remains review, never reset full manufacture per project. |  |
| `waste_and_recovery` | Construction scrap and removed soil are not automatically co-products. Record waste state and destination; do not deduct a guessed avoided virgin-material burden. A separately evidenced product/recovery boundary requires a disclosed allocation model and an independent destination dataset. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_handover | acceptance | accepted entity | acceptance dossier | entity_id; endpoints; site boundary; route_m; cable_m by circuit; station_m2; tower_m; voltage/capacity/fibre specification; installed scope; completion/acceptance dates; test state | Survey as-built geometry; reconcile signed handover, circuit schedule and actual tests, recording energised or ready-only state | item; m; m2 | Each acceptance with revisions | actual construction start to acceptance, including rework | declared entity and attributed activity | per declared reference flow | original tickets, calibration, samples, signed work records and gap register |
| cp_materials | underground-civil; aerial-support; cable-placement; station-tower; reinstatement | individual material input | delivery and installation ledger | row_id; batch; supplier; grade; state; net_kg; m or item; density; moisture; receipt; return; location; included components; component tags; failed/replaced quantities; opening/closing attributable stocks; verified transfers | Weigh tickets and net deliveries; reconcile design quantities, actual placement, returns and offcuts; independently support each volume/length conversion; input quantity in each native unit = attributable gross receipts + opening stock - verified returns/transfers - closing reusable stock. Include pre-acceptance failure/rework consumption; reconcile accepted installed quantities and waste separately without cancelling manufacturing burdens. | kg; m; item | Each batch and placement | actual construction start to acceptance, including rework | declared entity and attributed activity | per declared reference flow | original tickets, calibration, samples, signed work records and gap register |
| cp_cables | cable-placement | individual cable input | reel and circuit ledger | reel_id; specification; cable_metres; route_metres; cores; circuit; slack; returned_m; rejected_m; joint/termination positions ; attributable opening/closing cable stock in m; gross received cable m; verified return/transfer m; consumed damage/offcut/replacement m | Measure reel markings with calibrated counter and as-built circuit survey; record non-installed losses and actual replacement before acceptance  Cable consumption in m = attributable gross receipts + opening stock - verified returns/transfers - closing reusable stock; include consumed offcuts/damage/replacements, while reconciling installed lengths and reusable surplus separately. Record these terms for every cable row; the balance is not limited to equipment counts or module areas. | m; kg | Each reel and circuit | actual construction start to acceptance, including rework | declared entity and attributed activity | per declared reference flow | original tickets, calibration, samples, signed work records and gap register |
| cp_utilities | site-operations; underground-civil; aerial-support; cable-placement; station-tower; marine-placement; reinstatement; acceptance | individual fuel and electricity | meter and fuel log | equipment_id; process_id; dates; start/end meter; kWh; fuel_kg; fuel_volume; actual density; batch_MJ_per_kg; geography; voltage; renewable/fossil fraction | Read actual meters and weigh/refuel tickets; assign operations including idling and rework once; vessel activity separately tagged | MJ; kWh; kg | Each shift, meter interval and fuel batch | actual construction start to acceptance, including rework | declared entity and attributed activity | per declared reference flow | original tickets, calibration, samples, signed work records and gap register |
| cp_water | site-operations; underground-civil | supply, abstraction and dispatch | separate water meters and samples | interface; origin; aquifer; receiver; m3; quality; sample; treatment; recirculation; dates; direction; no-transfer versus dispatch | Meter supply, pumping, treatment dispatch and direct release separately; reconcile wet process water and retained moisture; record saline/fresh receivers | m3 | Each interval and discharge batch | actual construction start to acceptance, including rework | declared entity and attributed activity | per declared reference flow | original tickets, calibration, samples, signed work records and gap register |
| cp_logistics | site-operations; marine-placement; reinstatement | individual freight service | shipment records | shipment_id; material_row; origin/destination; net_t; route_km; truck; loaded/empty leg; allocation; background inclusion | Weigh actual load and document travelled route and empty return, with supplier transport boundary reconciled | t*km | Each trip | actual construction start to acceptance, including rework | declared entity and attributed activity | per declared reference flow | original tickets, calibration, samples, signed work records and gap register |
| cp_equipment | site-operations; cable-placement | capital manufacture attribution | serial cumulative-use ledger | serial; configuration; net_kg; count; project_hours/cycles; supported_total_life_activity; prior_shares; future_shares; repair scope | Weigh same configuration or verify count; audit complete activity denominator and allocation history, retaining uncertainty when incomplete | kg; item; dimensionless share | Each use and ledger update | actual construction start to acceptance, including rework | declared entity and attributed activity | per declared reference flow | original tickets, calibration, samples, signed work records and gap register |
| cp_waste | underground-civil; cable-placement; marine-placement; reinstatement | individual waste output | dispatch and composition record | row_id; batch; wet/dry_kg; moisture; solids; contamination; waste class; destination; treatment; returned product flag | Segregate and weigh actual outgoing streams, retain manifests and recipient receipts, excluding internal transfers | kg; m3 | Each dispatch batch | actual construction start to acceptance, including rework | declared entity and attributed activity | per declared reference flow | original tickets, calibration, samples, signed work records and gap register |
| cp_emissions | site-operations; underground-civil; aerial-support; cable-placement; station-tower; marine-placement; reinstatement; acceptance | individual elementary emission | species and compartment evidence | process_id; equipment; fuel carbon; fossil/bio share; oxidation evidence; representative species concentration; sample volume; actual external exhaust flow; release interval; integrated release volume; temperature/pressure; dry/wet gas basis; representative coverage; particle cut; control efficiency evidence; compartment; timing; method limitations; noise observations | Use real external-release measurements or independent route-specific mass balance/model evidence; distinguish ambient background, indoor exposure, NOx-equivalent and true species; keep unsupported noise characterization explicit | kg; sampling units | Each operation or supported interval | actual construction start to acceptance, including rework | declared entity and attributed activity | per declared reference flow | original tickets, calibration, samples, signed work records and gap register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `entity_normalization` | all exchanges | q_ref = Q_attributed / N_accepted, where N_accepted counts traceable accepted entities with the same configuration; a single independent work has N_accepted = 1. Attribute before normalization; do not pool different functions. | cp_handover; relevant row protocol | atomic quantity per declared reference flow |  |
| `geometric_material_conversion` | materials recorded by geometry | kg = measured m3 × matching batch kg/m3, or measured m × same-configuration kg/m; density, moisture and state must match. Preserve wet kg and geometric m3 for ready-mix without inferring recipe. | cp_materials; cp_cables | converted real material mass |  |
| `energy_conversion` | electricity and fuel | MJ = kWh × 3.6; fuel MJ = measured kg × batch LHV MJ/kg. Fuel volume first uses actual kg/volume density; no invented default. | cp_utilities | MJ for each fuel and voltage tier |  |
| `freight_activity` | cable reel freight | t*km = sum of actual leg net t × route km, with return and sharing explicit. Do not add the same transport fuel/emissions when already included in the freight background. | cp_logistics | freight activity attributed to declared entity |  |
| `species_emission` | conditional mass-based pollutant elementary emissions; excludes volume-based water resources and releases | Release kg uses representative species concentration × integrated actual external exhaust flow or total released volume over the same representative interval, with units converted, or supported species mass balance; temperature/pressure and dry/wet basis must match. Sample volume supports sample mass and representativeness only, not total process exhaust volume. Fossil CO2 may use measured fossil carbon × evidenced oxidation fraction × 44/12; unknown concentration, total release volume or other inputs remain review. Particle cut and compartment must match. Water supply, abstraction and carrier-water release retain their separately metered m3 and receiving interfaces under water_basis and cp_water; any pollutants in that water use separate species mass rows. | cp_emissions | kg with defined species and compartment |  |
| `water_balance` | actual liquid water | Reconcile supply + abstraction + other measured inflow = direct release + liquid treatment dispatch + retained moisture + evidenced evaporation ± measured storage change; internal circulation is not counted twice. Incompatible volume states need real conversion; pollutant mass is not water mass. | cp_water; cp_waste | water-interface closure and residual disclosure |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all exchanges | Verify substance, route, geography, included components, public primary property, unit and state; unresolved identity differs from absence. | supplier original specifications, public identities and site configuration |
| dq_geometry | reference entity | Retain endpoints, site and as-built geometry; distinguish cable m, route m and fibre m, with sources for measured area/height and actual capacity. | cp_handover; cp_cables |
| dq_completeness | each actual route | Check materials, energy, site water, waste, emissions, additional constituents and construction noise by operation; unsupported ecological/noise effects remain coverage gaps; no whole-life claim. | bill of quantities, equipment logs, waste/emission ledgers and gaps |
| dq_time | site quantities | Time coverage includes idling, actual rework and acceptance; dates, submeter attribution and calibration are traceable; estimates differ from measurements. | work orders, meters and calibration |
| dq_acceptance | delivery | Structural, earthing, electrical or optical tests match actual configuration with traceable defect closure; historical handbooks do not substitute current project specifications or approval. | cp_handover |
| dq_capital | reuse attribution | Evidence supports whole-life denominator and cumulative shares; unknowns remain review, without treating each project as new manufacture. | cp_equipment |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `reference_and_function_check` | Require one identified accepted entity and all applicable function/configuration/geometry qualifiers. Reference output is exactly 1 item and every inventory/collection/calculation denominator is per declared reference flow. Do not compare differently configured entities without an explicit functional equivalence study. |  |
| `identity_check` | Reject a UUID whose direct public identity conflicts with substance, geography, voltage, construction, compartment or primary property; retain exact unresolved rows. Reference-product identity remains unresolved for candidate use and must be resolved before publication. |  |
| `physical_and_coverage_check` | Check measured dimensions and material balances, density/LHV conversions, conditional process selection, waste destinations, water interfaces and non-overlapping particle fractions. Missing actual data, unknown manufacture denominator, unsupported emissions or characterized-noise gaps require review or incomplete coverage, not a passing physical validation. |  |
| `handover_check` | Require actual route-appropriate inspection and handover evidence; do not infer permission to energise or operate from this inventory. Verify separate foreground and upstream/later-stage coverage before any broader lifecycle claim. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground construction and delivery dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Configuration- and interface-matched local cable construction module; explicitly linked upstream, transport or later-stage models |
| excluded_use | Whole-life or complete cradle-to-delivery claims without supplied coverage; long-distance/complete railway systems; factory cable manufacture; network operation; per-km comparison without functional equivalence |
| required_metadata | reference entity, function, measured geometry, configuration, interfaces, construction period, actual operations, geography/supply, background/transport links, acceptance state and attribution ledger |
| required_quality_disclosure | measurement/estimate distinction, losses, material state, identity gaps, upstream/later coverage, noise/ecological gaps, historical-source limitations, reuse denominator and uncertainty |
| update_trigger | material change in as-built geometry/configuration, route, supplier identity, meters, energy mix, acceptance interface or waste destination |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-local-cables-2025 | official_guidance | [UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, pp. 280–281](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Scope of local power, communications, television and ancillary station/tower entities versus long-distance; no quantities or lifetime. |
| itu-optical-cables-2009 | handbook | [ITU-T, Optical fibres, cables and systems (2009), chapter 3 pp. 61–89; chapter 4 pp. 91–111](https://www.itu.int/dms_pub/itu-t/opb/hdb/t-hdb-out.10-2009-1-pdf-e.pdf) | Historical qualitative optical installation, underground/trenchless/aerial/submarine and joining context. Process decomposition only; no current design limits, mandatory route or generic consumption rate. |
| spen-secondary-civil-2026 | official_guidance | [SPEN SUB-03-017, Issue 9, May 2026, sections 10.6–10.10, 12–13, pp. 15–27](https://www.spenergynetworks.co.uk/userfiles/file/SUB-03-017.pdf) | Secondary-station civil/enclosure, as-built and site-quality record context; directly applicable only under SPEN conditions, otherwise project evidence required. No universal dimensions or recipes. |
| spen-secondary-install-2025 | official_guidance | [SPEN SUB-02-006, Issue 7, December 2025, sections 10–16, pp. 6–13](https://www.spenergynetworks.co.uk/userfiles/file/SUB-02-006.pdf) | Ground-mounted secondary-station installation, acceptance and equipment boundary context; its lower-side 400/230V network conditions do not mandate a configuration for all works. |
| eirgrid-cable-records-2026 | official_guidance | [EirGrid CDS-GFS-00-001-R2.1, 27 March 2026, sections 2.1–2.5 and record schedules, pp. 8, 13–14](https://cms.eirgrid.ie/sites/default/files/publications/CDS-GFS-00-001-R2-110kV-220kV-400kV-Cable-Specification.pdf) | Comparator for material, pulling, jointing and acceptance records in Irish 110/220/400-kV transmission; no transfer of its fully ducted route, HV limits or guarantee maintenance into local requirements. |
| epa-construction-dust-1995 | official_guidance | [US EPA AP-42 section 13.2.3 Heavy Construction Operations, January 1995, pp. 1–2](https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf) | Historical component-operation dust limitations/control context; no old average factor or TSP-to-PM2.5 substitution. Current releases need actual evidence. |
