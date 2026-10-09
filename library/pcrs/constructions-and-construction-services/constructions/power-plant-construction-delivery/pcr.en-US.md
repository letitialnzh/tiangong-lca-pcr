---
pcr_id: pcr.constructions-and-construction-services.constructions.power-plant-construction-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Power plant construction and handover

## 1. Scope and Applicability

This PCR addresses the physical construction and agreed acceptance handover of complete heavy electrical generating plants, including nuclear plants, as identified by UN CPC 3.0 53262. Select the actual thermal, nuclear, hydro, wind or solar configuration and declare plant/site interfaces; a code alone does not define construction technology. The reference is the delivered construction entity, not a construction service, manufactured material, generator alone or electricity generation. (`un-cpc-power-plants-2025`)

Factory manufacture of supplied materials/equipment is linked upstream. Standalone industrial buildings, dams, water-treatment works and external long-distance/local grid networks have their own boundaries; integrate an actual component once without duplicating its standalone dataset. The core covers actual civil/mechanical/electrical completion and cold testing, with hot/fuelled acceptance and all later operating/maintenance/demolition stages explicitly outside or separately extended. Handover before fuel loading is not commercial readiness.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.power-plant-construction-delivery |
| classification_refs | CPC 3.0 53262 — Power plants |
| covered_products | Complete constructed heavy generating plant at declared construction/cold-test handover; actual thermal, nuclear, hydro, wind/PV and evidenced generating configurations |
| excluded_products | Loose generators; upstream materials alone; stand-alone buildings/dams/networks; construction services; electricity production or whole operating lifetime |
| representative_product | One actual site-identified plant with as-built installed units, integral works and a signed declared acceptance stage; no default technology or capacity |
| production_route | Surveyed site → ground/civil works → route-specific generating and auxiliary installation → electrical/control interfaces → inspection/cold testing → declared construction handover |
| market_state | Complete physically installed construction at the evidenced handover stage, with unfinished/hot tests and operating authorisations disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver the actual constructed plant capable by its installed design of the declared generating function, at the specified construction acceptance stage |
| How much | One complete actual plant; declare installed unit count, actual capacity per unit and total, electrical AC/DC/net/gross convention and documented test conditions. Capacity is a qualifier, not energy output |
| How well | As-built geometry, route-specific configuration, interfaces and signed structural/mechanical/electrical completion criteria; actual site, operational restrictions and unfinished scope declared |
| How long or cycle | One actual construction-to-handover event with recorded dates; no assumed life, capacity factor or lifetime electricity yield |
| reference_flow_link | reference_product_power_plant |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete power plant at construction handover |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Plant/site/entity id; geographic location and initial land/site state; generating route and reactor/cycle/cell technology; actual unit number and rated capacity with AC/DC/net/gross and test conditions; surveyed plot and powerhouse/foundation dimensions and structure; route-specific headworks/penstock/tailrace geometry or containment or turbine/module configuration; complete supplied/installed BOM and package interfaces; shared dam/grid/access attribution; construction and handover dates, signed tests and outstanding work; cold/hot/fuel-load stage; upstream gates and links; all excluded/unmeasured lifecycle stages |

item is the display alias for public Item(s); 件 denotes the same count. All rows and protocols are per declared reference flow. Capacity (MW), surveyed area (m2), conduit length (m) and measured materials describe this same plant and are not arbitrary replacement denominators. Comparison requires compatible function, capacity convention, site, configuration, acceptance stage and lifecycle scope; no universal plant mass M is assigned.

### Selected-flow property and unit bindings

| role | flow_type | tiangong_flow | flow_property | unit_group | preferred_unit |
| --- | --- | --- | --- | --- | --- |
| rebar | product | Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| structural_section | product | Hot-rolled large section `cbeefeb8-2dfc-48f5-b643-f35aed0d52a1` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| francis_turbine | product | Vertical Francis hydraulic turbine `f762dd15-89d4-4b91-abc3-38ba6d4539ea` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | `5beb6eed-33a9-47b8-9ede-1dfe8f679159` | item |
| hydro_generator | product | Hydro generator `46310235-eeca-4dee-84fb-50da9b4a99dc` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | `5beb6eed-33a9-47b8-9ede-1dfe8f679159` | item |
| wind_turbine | product | wind turbine `e4ae4246-b93d-44ab-bb73-58671139c50b` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | `5beb6eed-33a9-47b8-9ede-1dfe8f679159` | item |
| poly_module | product | Polycrystalline Silicon Solar Module `5bdcaef5-1689-4ad5-8ce2-c1543b0ff811` | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | `93a60a57-a3c8-18da-a746-0800200c9a66` | m2 |
| mono_module | product | Monocrystalline Silicon Solar Module `fbfc81aa-aefd-49ec-aaf6-81b9416a7b78` | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | `93a60a57-a3c8-18da-a746-0800200c9a66` | m2 |
| transformer | product | Transformer `734249ea-34e6-471b-a05a-f5b26b818167` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | `5beb6eed-33a9-47b8-9ede-1dfe8f679159` | item |
| lv_cable | product | Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908` | Length `838aaa23-0117-11db-92e3-0800200c9a66` | `838aaa22-0117-11db-92e3-0800200c9a66` | m |
| diesel | product | Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| lv_power | product | Alternating current `50657322-939c-4829-a87b-47c093bfa6a7` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | `93a60a57-a3c8-11da-a746-0800200c9a66` | MJ |
| mv_power | product | Alternating current `3d76981f-964a-4865-b588-0e067a2a1163` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | `93a60a57-a3c8-11da-a746-0800200c9a66` | MJ |
| river_intake | elementary | river water `805a7346-1664-4483-afe3-4b224be5e361` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | `93a60a57-a3c8-12da-a746-0800200c9a66` | m3 |
| groundwater_intake | elementary | ground water `4f462198-40cd-4184-8733-86648a20dc3f` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | `93a60a57-a3c8-12da-a746-0800200c9a66` | m3 |
| sea_intake | elementary | sea water `172a3db9-6556-11dd-ad8b-0800200c9a66` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| fossil_co2 | elementary | carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| nitrogen_monoxide | elementary | nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| nitrogen_dioxide | elementary | nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| pm_fine | elementary | particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| pm_coarse | elementary | particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| freshwater_discharge | elementary | Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | `93a60a57-a3c8-12da-a746-0800200c9a66` | m3 |
| sea_return | elementary | Water `631ecf13-0e51-4e35-8235-c6f80c60d72c` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | `93a60a57-a3c8-12da-a746-0800200c9a66` | m3 |
| road_freight | product | freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66` | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | `3620148f-c5db-48ce-9065-a10092089aca` | t*km |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_handover records one accepted complete plant with consistent identity, actual configuration and declared stage; all quantities retain the same declared reference flow. |
| geometry_capacity | reference configuration | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Survey footprint/building/foundation and route-specific waterway geometry from as-built records in cp_handover; capacity, AC/DC basis, head, discharge and dimensions remain separate actual qualifiers. No assumed kg per plant, area or MW conversion. |
| material_mass | fresh_concrete; rebar; structural_section; hydraulic_grout; diesel; sea_intake | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual mass; convert a measured volume only with independently supported density for the exact material, temperature, salinity/moisture and state. Sea intake retains primary Mass and a parallel volume balance. cp_civil, cp_utilities and cp_environment preserve original measurements. |
| electricity_energy | lv_power; mv_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain Net calorific value and exact 3.6 MJ/kWh conversion, actual CN supply and specified voltage; actual on-site generation does not inherit this grid identity. |
| water_volume | supplied_water; river_intake; groundwater_intake; freshwater_discharge; sea_return; washout_liquid | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Measure actual volume and preserve source/destination, physical state, internal transfers and pollution sampling. Resource, supplied product, liquid waste and discharge are not interchangeable. |
| module_area | poly_module; mono_module | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Preserve module Area/m2, with actual gross-area definition, dimensions/count and rating. The linked upstream dataset must use the same module-area convention or an independently evidenced conversion; unknown gross/aperture/cell-area relationship requires review. Secondary property meanValue=1 does not imply one module equals 1 m2. Area does not identify station area or permit rewriting the public property to Mass. |
| cable_length | lv_cable | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Preserve measured cable Length/m and actual supplied specification; do not use a generic copper mass conversion. |
| freight_quantity | road_freight | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | t*km | Actual cargo tonnes times actual route kilometres using cp_transport; preserve the public mass*distance group reference kg*km and its documented t*km unit, 1 t*km = 1000 kg*km. Road freight is not the reference product mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual surveyed site before attributable construction, with received materials and components at explicit supplier/site interfaces and original condition documented |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | Complete constructed power-plant entity with integral actual generating works; CPC provides category context only |
| recursive_input_rule | Existing plant or reused component enters once in its actual inherited state; record inherited burdens and new measured work without recursively reconstructing the same plant category |
| upstream_dataset_requirement | Separate compatible manufacture, supplied-state and transport links; disclose every gap and included gate |
| disclosure | Actual construction and cold-test handover foreground; upstream full coverage not presumed; hot/fuelled tests, routine generation, maintenance and later demolition excluded unless separately defined |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| construction_scope | dataset; inventory | Include the actual complete agreed plant construction from surveyed starting site through signed civil/mechanical/electrical handover, with integral foundation and generating equipment. Record delivery gate and cold-test stage; this is a construction entity, not a building service or bag of materials. | `un-cpc-power-plants-2025`; `iaea-nuclear-construction-2011` |
| route_completeness | dataset; inventory | Use the installed design branch, not every example row. Complete its work-package BOM: foundation and material state, generating unit, auxiliary cooling/water/fuel handling, pollution-control hardware, electrical/control/safety, connections, tests and temporary removal. Add every missing specific atomic exchange and supplier link before claiming complete inventory; unsupported branches remain a review gap. | `iaea-nuclear-construction-2011`; `ifc-thermal-power-2008`; `ifc-hydropower-2018`; `doe-wind-siting-2021` |
| upstream_interfaces | dataset; inventory | Separate supplier manufacturing, attributable supply transport and measured site construction. Received components carry their actual delivered state; raw metal is not added again when a purchased fabricated assembly includes it. Upstream datasets are separately linked with actual formulation, geography, technology and gate; missing links prohibit a complete cradle-to-gate claim. | `ifc-biomass-construction-2017` |
| handover_and_operation | dataset; inventory | The core endpoint is the actual agreed construction-completion/cold-commissioning handover, with stage and unfinished tests disclosed. It does not establish commercial generating readiness or nuclear licensing. Fuel loading, nuclear startup, hot performance operation and trial electricity/heat exports require a separate fully specified extension with each actual fuel, water, chemical, emission and output; never silently omit included hot tests or blend routine operation. | `ifc-biomass-construction-2017`; `iaea-nuclear-construction-2011` |
| later_stages | dataset; inventory | Routine generation, maintenance/renewal, reservoirs operational emissions, later decommissioning/demolition, downstream waste treatment and future recovery credits are outside the core. Existing-site demolition/remediation and removal of temporary construction works, if actually undertaken, are separate included work packages with measured flows. Declare land/ecology disturbance, noise/vibration, sediment and thermal releases and their unmeasured coverage; they are not fabricated mass emissions. | `ifc-hydropower-2018`; `doe-wind-siting-2021` |
| water_identity | dataset; inventory | Keep supplied water, direct river/ground/sea resource intake, internal reuse, captured liquid waste and direct recipient discharge separate. Actual pollutant species/medium and physicochemical state require their own atomic rows. No default density, emission factor, dilution credit or zero for missing measurements. | `ifc-hydropower-2018`; `epa-concrete-washout-2012` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ground | Site preparation, excavation and ground treatment | required | Actual site, geology, earth/rock balances, access, drainage and slope stabilization; add route-specific excavation/blasting/reinstatement flows when actually used. | foreground | per declared reference flow |
| civil | Foundations and permanent civil structures | required | Actual foundations, generator bases, powerhouse, containment, headworks/waterways and ancillary structures within the plant boundary; define each as-built work package. | foreground | per declared reference flow |
| temporary | Temporary works and erection equipment | conditional | Actual formwork, access/crane pads, lifting, shoring or dewatering installations, their repeated use and removal. | foreground | per declared reference flow |
| thermal | Thermal prime mover and heat-cycle installation | conditional | Actual boiler-steam, simple gas-turbine, combined cycle or reciprocating-engine route; nuclear steam turbine island uses its compatible actual subset. | foreground | per declared reference flow |
| nuclear | Nuclear island and safety-system installation | conditional | Actual nuclear configuration, qualified concrete/liner/primary components, supports, piping and safety/control systems. Handover stage must state whether fuel loading and nuclear startup are excluded. | foreground | per declared reference flow |
| hydro | Hydraulic generation and water-conduit installation | conditional | Actual hydro plant; include headworks, pressure waterway, powerhouse, turbine-generator and tailrace interfaces. Shared/multipurpose dam construction receives conserved attribution once. | foreground | per declared reference flow |
| renewable | Wind and solar generating-equipment installation | conditional | Actual utility-scale wind or PV station, foundation/racking and generator/module configuration, access and installation. Offshore/floating works and other renewable technologies require corresponding primary design and complete additional rows. | foreground | per declared reference flow |
| electrical | Plant electrical and control installation | required | Actual generator output, plant auxiliaries, transformer, switchgear, cables, earthing, protection and control interfaces; explicitly assign external grid works. | foreground | per declared reference flow |
| utilities | Construction utilities and environment exchanges | required | Attributable construction, erection, flushing, cold testing and actual included acceptance activities by stage/equipment; no routine operating inventory. | foreground | per declared reference flow |
| waste | Construction waste containment and export | conditional | Actual segregated waste generation, temporary containment and export before handover; treatment links/gaps disclosed. | foreground | per declared reference flow |
| transport | Supply and construction-waste transport | conditional | Each actual plant delivery/export leg outside already included supplier gates. | foreground | per declared reference flow |
| handover | Inspection, cold commissioning and construction handover | required | Actual configuration inspection and agreed civil/mechanical/electrical completion tests with dated signed handover. Hot/fuelled generation is a separately disclosed extension. | foreground | per declared reference flow |

All cards below are individually conditional on actual configuration/activity. Required processes must account for their complete actual design, even where the example card is absent or an identity is unresolved. Retain specific additional rows before a dataset claims completeness. Each shared utility amount is allocated by measured process/equipment logs once.

### Process: Site preparation, excavation and ground treatment (`ground`)

#### Inputs

##### Product flows

###### Crushed rock for engineered fill (`crushed_rock`)

Only actual imported graded crushed rock used in platforms, crane pads or backfill; native excavated rock retained on site is an internal transfer, not another purchased input.

- Selected flow: Crushed rock for engineered fill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable measured mass from delivery, return, stock and installation records; keep losses and destination separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ground`
- Sources: `iaea-nuclear-construction-2011`; `ifc-hydropower-2018`

### Process: Foundations and permanent civil structures (`civil`)

#### Inputs

##### Product flows

###### Fresh ready-mixed hydraulic-cement concrete (`fresh_concrete`)

Use only supplied fresh ready-mixed concrete at its batching/delivery gate for actual foundations and plant structures. Record strength, exposure, composition, delivery state, placement, vibration, curing and accepted geometry. Site batching is a separate branch requiring individual cement, aggregate, admixture and water rows and mixing inputs; never count both constituents and purchased concrete.

- Selected flow: Fresh ready-mixed hydraulic-cement concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch-ticket mass; when tickets are in m3, multiply actual delivered volume by independently supported batch/state density. Retain volume, moisture, returns, rejects and tests; no default density or mix.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `iaea-nuclear-construction-2011`; `epa-concrete-washout-2012`

###### Hot rolled rebar steel (`rebar`)

Conditional on actual hot-rolled low-alloy reinforcing bar with carbon C≤0.2% and matching factory output; keep grade, diameter and inspection. Other reinforcement grades need their own specific identity.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable measured mass from delivery, return, stock and installation records; keep losses and destination separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `iaea-nuclear-construction-2011`; `doe-wind-siting-2021`

###### Hot-rolled large section (`structural_section`)

Only actual large hot-rolled iron/non-alloy steel sections before further fabrication. Record section and grade; on-site cutting, welds and erection are foreground. Purchased fabricated frames must use a separate supplied assembly row and exclude their already included raw section.

- Selected flow: Hot-rolled large section `cbeefeb8-2dfc-48f5-b643-f35aed0d52a1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable measured mass from delivery, return, stock and installation records; keep losses and destination separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `iaea-nuclear-construction-2011`; `ifc-mocuba-solar-2016`

###### Non-shrink hydraulic-cement grout (`hydraulic_grout`)

Include only actual supplied grout for anchor pockets, machine bases or waterway/ground treatment; declared formulation and cured acceptance required. It is not plain Portland cement.

- Selected flow: Non-shrink hydraulic-cement grout
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable measured mass from delivery, return, stock and installation records; keep losses and destination separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `iaea-nuclear-construction-2011`; `ifc-hydropower-2018`

### Process: Temporary works and erection equipment (`temporary`)

#### Inputs

##### Product flows

###### Reusable plywood formwork panel (`plywood_form`)

Only plywood panels actually used; record panel area, cycles, loss and transfer to next project. Steel forms, scaffolds, cofferdams and shores, when used, each require separate component rows.

- Selected flow: Reusable plywood formwork panel
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Measured panel area times evidenced manufacture attribution fraction; reconcile all uses in cp_assets. Unknown denominator requires review; physical panel movements remain a separate ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `iaea-nuclear-construction-2011`

###### Hydraulic crawler excavator (`excavator`)

Only the actual complete excavator deployed for excavation; operation fuel is separately metered. Preserve equipment identity and configuration; do not select a crane subassembly as the excavator.

- Selected flow: Hydraulic crawler excavator
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual equipment count times documented manufacture attribution fraction from cp_assets; retain cross-project total at most one per asset.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `iaea-nuclear-construction-2011`; `ifc-hydropower-2018`

###### Mobile crawler crane (`mobile_crane`)

Only actual erection crane; foundation/crane-pad construction and energy remain separate. Its asset manufacture is shared across real deployments.

- Selected flow: Mobile crawler crane
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual crane count times evidenced manufacture share from cp_assets; never reset full manufacture burden for each project.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ifc-biomass-construction-2017`; `doe-wind-siting-2021`

### Process: Thermal prime mover and heat-cycle installation (`thermal`)

#### Inputs

##### Product flows

###### Power-generation steam boiler (`steam_boiler`)

Only boiler-based thermal route. Define furnace, boiler supplied package and auxiliaries by actual contract; cold installation is separate from fuel burning. Simple-cycle gas turbines do not require this boiler.

- Selected flow: Power-generation steam boiler
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-thermal-power-2008`; `ifc-biomass-construction-2017`

###### Steam turbine assembly (`steam_turbine`)

Use for actual steam cycle, including thermal, combined-cycle or nuclear turbine island. Installed unit has documented steam parameters and supplied boundary; it is not a hydraulic turbine.

- Selected flow: Steam turbine assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-thermal-power-2008`; `iaea-nuclear-construction-2011`

###### Industrial gas turbine assembly (`gas_turbine`)

Only actual combustion turbine with identified compressor/combustor/turbine package; generator and HRSG are separate unless explicitly supplied within that package and not counted twice.

- Selected flow: Industrial gas turbine assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-thermal-power-2008`

###### Heat-recovery boiler assembly (HRSG) (`hrsg`)

Only actual combined-cycle heat-recovery equipment; record pressure circuit, supplied module and field welds. Omit for a genuine simple-cycle gas plant.

- Selected flow: Heat-recovery boiler assembly (HRSG)
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-thermal-power-2008`

###### Stationary reciprocating generating engine (`engine`)

Only an actual reciprocating-engine generating route; specify engine and whether generator is included, and its mounting/auxiliaries. This is not mobile construction diesel machinery.

- Selected flow: Stationary reciprocating generating engine
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-thermal-power-2008`

###### Synchronous electrical generator (`synchronous_generator`)

Only actual standalone generator of the thermal/nuclear package; reconcile ratings, voltage, cooling and shaft interface. Exclude if already included in purchased generating set.

- Selected flow: Synchronous electrical generator
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-thermal-power-2008`; `iaea-nuclear-construction-2011`

###### Steam surface condenser (`condenser`)

Only condensing steam cycle with actual heat-exchange equipment; identify cooling circuit and tube specification. No universal condenser for simple-cycle gas generation.

- Selected flow: Steam surface condenser
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-thermal-power-2008`

###### Wet recirculating cooling tower (`cooling_tower`)

Only actual wet recirculating cooling configuration and supplied tower boundary. Dry cooling and once-through water require their own specified equipment; no default water demand or evaporation.

- Selected flow: Wet recirculating cooling tower
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-thermal-power-2008`

### Process: Nuclear island and safety-system installation (`nuclear`)

#### Inputs

##### Product flows

###### Reactor pressure vessel (`reactor_vessel`)

Only a nuclear configuration using this vessel; identify reactor design and delivered internals boundary, weld/test records and installation acceptance. Other reactor designs require their actual components.

- Selected flow: Reactor pressure vessel
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nuclear`
- Sources: `iaea-nuclear-construction-2011`

###### Nuclear steam generator (`nuclear_steam_generator`)

Only actual indirect steam-cycle nuclear configuration using separate steam generator; reactor type and material/pressure specification are required. Do not impose it on direct-cycle reactors.

- Selected flow: Nuclear steam generator
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nuclear`
- Sources: `iaea-nuclear-construction-2011`

###### Fabricated steel containment liner (`containment_liner`)

Only the actual lined containment design; record liner material, fabrication gate, embedded interfaces, installation welds and leak-test acceptance. Other containment systems need corresponding rows.

- Selected flow: Fabricated steel containment liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable measured mass from delivery, return, stock and installation records; keep losses and destination separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nuclear`
- Sources: `iaea-nuclear-construction-2011`

###### Nuclear safety injection pump (`safety_pump`)

Only actual safety-injection configuration; identify qualified pump, drive and supply scope. Complete safety instrumentation, valves and cables must each be added from the actual nuclear BOM; this row does not represent the whole safety system.

- Selected flow: Nuclear safety injection pump
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nuclear`
- Sources: `iaea-nuclear-construction-2011`

### Process: Hydraulic generation and water-conduit installation (`hydro`)

#### Inputs

##### Product flows

###### Fabricated steel penstock (`penstock`)

Only actual pressure-water conduit; preserve diameter, length, thickness, steel grade, supports, weld tests and liner/coating scope. Waterway and headworks geometry are measured separately.

- Selected flow: Fabricated steel penstock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect attributable measured mass from delivery, return, stock and installation records; keep losses and destination separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydro`
- Sources: `ifc-hydropower-2018`

###### Vertical Francis hydraulic turbine (`francis_turbine`)

Only complete vertical Francis hydraulic turbine at factory gate, with actual head, discharge, runner configuration and acceptance. Kaplan, Pelton and reversible pump-turbines must have separate exact rows and identities.

- Selected flow: Vertical Francis hydraulic turbine `f762dd15-89d4-4b91-abc3-38ba6d4539ea`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydro`
- Sources: `ifc-hydropower-2018`

###### Hydro generator (`hydro_generator`)

Only actual hydroelectric generator supplied at its manufacturing/factory gate; record rated output, voltage, shaft configuration and included excitation/cooling. Exclude components already included in a purchased complete turbine-generator unit.

- Selected flow: Hydro generator `46310235-eeca-4dee-84fb-50da9b4a99dc`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydro`
- Sources: `ifc-hydropower-2018`

### Process: Wind and solar generating-equipment installation (`renewable`)

#### Inputs

##### Product flows

###### wind turbine (`wind_turbine`)

Only actual factory-supplied onshore wind turbine of rated power below 2 MW. Record model, tower/rotor/nacelle included boundary, foundations and erection separately. Larger and offshore turbines require independent exact rows; this restriction does not narrow the plant category to small turbines.

- Selected flow: wind turbine `e4ae4246-b93d-44ab-bb73-58671139c50b`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_renewable`
- Sources: `doe-wind-siting-2021`

###### Polycrystalline Silicon Solar Module (`poly_module`)

Only actual CN polycrystalline silicon module supplied at photovoltaic station interface. Preserve measured module gross-area convention, module count/rating and included transport gate; it is a module, not a whole station or generated electricity.

- Selected flow: Polycrystalline Silicon Solar Module `5bdcaef5-1689-4ad5-8ce2-c1543b0ff811`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Sum measured actual module area from dimensions and installed/returned counts using the same gross-area convention; retain m2, never replace its primary Area property with Mass or energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_renewable`
- Sources: `ifc-mocuba-solar-2016`

###### Monocrystalline Silicon Solar Module (`mono_module`)

Only actual CN monocrystalline silicon module at the photovoltaic-station supply interface; identify technology, gross area and included supply scope. Site design must independently support this branch; the Mocuba case is polycrystalline and gives no monocrystalline defaults.

- Selected flow: Monocrystalline Silicon Solar Module `fbfc81aa-aefd-49ec-aaf6-81b9416a7b78`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Measure actual module area and reconcile configuration/count/rating with acceptance records; preserve Area/m2.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_renewable`
- Sources: `un-cpc-power-plants-2025`

### Process: Plant electrical and control installation (`electrical`)

#### Inputs

##### Product flows

###### Transformer (`transformer`)

Only actual factory-supplied 400 kVA, 10/0.4 kV transformer used for transmission/distribution within the declared plant interface; retain matched type and included oil/accessory scope. Other capacities or voltage ratios need their own atomic row and identity. External network/substation delivery is separately assigned.

- Selected flow: Transformer `734249ea-34e6-471b-a05a-f5b26b818167`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`
- Sources: `ifc-biomass-construction-2017`; `ifc-hydropower-2018`

###### Low-voltage cable (`lv_cable`)

Only actual CN factory-gate low-voltage cable conforming to the original GB/T 12706.1-2020 route and matched conductor, insulation, rated voltage and cross-section. Verify supplied cable and included packaging; it is not generic copper metal or HV cable.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Measure reel delivery lengths minus returns; reconcile installed circuits and separately documented offcuts. Retain primary Length/m, not assumed cable kg per metre.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`
- Sources: `ifc-biomass-construction-2017`

###### Metal-enclosed AC switchgear (`switchgear`)

Only actual plant switchgear at the specified voltage/current and supplied configuration; gas-insulated variants must add each actual gas charge and actual release as separate chemical rows. No assumed SF6 emission.

- Selected flow: Metal-enclosed AC switchgear
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`
- Sources: `ifc-biomass-construction-2017`

###### Photovoltaic DC-to-AC inverter (`pv_inverter`)

Only actual PV plant DC-to-AC conversion unit; retain rating, topology, quantity and whether transformer/switchgear is included.

- Selected flow: Photovoltaic DC-to-AC inverter
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count the actual accepted units of the same specified configuration within this plant; reconcile serial numbers and included subassemblies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`
- Sources: `ifc-mocuba-solar-2016`

### Process: Construction utilities and environment exchanges (`utilities`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Only supplied diesel fuel as a technosphere material; grade, formulation, supplier, fossil/biogenic fraction, density and heating value remain site records because the identity leaves them unspecified. Meter equipment combustion separately; do not double count fuel plus a fully linked fuel-burn service.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use fuel stock/delivery/return balance and equipment records in kg; convert measured litres only with evidenced density at the same temperature/state. No fixed consumption or LHV.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `iaea-nuclear-construction-2011`; `ifc-hydropower-2018`

###### Alternating current (`lv_power`)

Only actual CN grid-average customer-side supply below 1 kV; verify meter voltage/country, delivery interface and temporal mix. Other locations, voltage or on-site generation require separately verified identities.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter and sum attributable purchased energy; exact conversion 1 kWh = 3.6 MJ. Preserve primary Net calorific value/MJ; segregate internal construction generation and trial exports.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ifc-biomass-construction-2017`

###### Alternating current (`mv_power`)

Only actual CN grid-average customer-side supply 1–35 kV; verify meter voltage/country, delivery interface and temporal mix. Other locations, voltage or on-site generation require separately verified identities.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter and sum attributable purchased energy; exact conversion 1 kWh = 3.6 MJ. Preserve primary Net calorific value/MJ; segregate internal construction generation and trial exports.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ifc-biomass-construction-2017`

###### Delivered fresh construction water (`supplied_water`)

Only actual technosphere freshwater delivered for curing, washing, flushing or tests, with supplier/gate and delivery network identified; recycled internal water is an internal transfer. The Hong Kong plant-gate treated-water identity cannot identify unrestricted site supply.

- Selected flow: Delivered fresh construction water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Meter actual delivered volume in m3 by use and date; reconcile storage, internal reuse, consumption and exported water without invented density.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-concrete-washout-2012`; `ifc-biomass-construction-2017`

##### Elementary flows

###### river water (`river_intake`)

Only actual direct river-water abstraction crossing environment into construction/test use; identify river and extraction country. It is a renewable material resource from water, not purchased water, a discharge, or routine operational turbine throughput.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure abstraction volume at intake in m3 during the included works; separately retain return and consumptive use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `ifc-hydropower-2018`; `iaea-nuclear-construction-2011`

###### ground water (`groundwater_intake`)

Only actual groundwater extraction/dewatering from the identified aquifer into site handling; distinguish rainfall, river diversion and recirculation. Retain aquifer/extraction geography and later destination.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Meter actual pumped groundwater volume in m3, with time, abstraction point and water balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `ifc-hydropower-2018`; `iaea-nuclear-construction-2011`

###### sea water (`sea_intake`)

Only actual direct sea-water abstraction for included construction or cold-test activity. Preserve resource-from-water classification and primary Mass; it is not sea-water discharge or normal operating cooling water.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure sea-water mass in kg, or measured m3 times evidenced kg/m3 density at the same salinity/temperature; keep a separate volume ledger. Unknown density requires review.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `ifc-hydropower-2018`; `iaea-nuclear-construction-2011`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only evidenced immediate fossil CO2 emission into external air, unspecified subcompartment, from included site engines or other actual works. Exclude biogenic CO2, upstream emissions, indoor concentrations and soil/long-term release.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain measured emitted species mass or a documented site fuel-carbon balance/model with fossil share, oxidized carbon, activity and uncertainty; no emission solely inferred from a fuel row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `ifc-hydropower-2018`; `iaea-nuclear-construction-2011`

###### nitrogen monoxide (`nitrogen_monoxide`)

Only evidenced immediate molecular NO, CAS 10102-43-9, emission to external air/unspecified from included activity. NOx expressed as NO2-equivalent does not establish this molecular species; do not use inconsistent synonyms or N2O.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure or use independently supported species-specific site model mass in kg; unknown speciation remains unmeasured, not invented or zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `ifc-hydropower-2018`; `iaea-nuclear-construction-2011`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only evidenced immediate molecular NO2, CAS 10102-44-0, emission to external air/unspecified from included activity. NOx expressed as NO2-equivalent does not establish this molecular species; do not use inconsistent synonyms or N2O.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure or use independently supported species-specific site model mass in kg; unknown speciation remains unmeasured, not invented or zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `ifc-hydropower-2018`; `iaea-nuclear-construction-2011`

###### particles (PM2.5) (`pm_fine`)

Only evidenced external airborne PM2.5 particulate release from actual excavation/handling/combustion, immediate air/unspecified. Captured dust is a waste; measured ambient concentration alone is not released mass.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Determine non-overlapping size-fraction emitted kg from supported source/activity measurements or an independently validated project-specific model; total PM10 must not be added to its fractions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `ifc-hydropower-2018`; `iaea-nuclear-construction-2011`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Only evidenced external airborne above PM2.5 through PM10 particulate release from actual excavation/handling/combustion, immediate air/unspecified. Captured dust is a waste; measured ambient concentration alone is not released mass.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Determine non-overlapping size-fraction emitted kg from supported source/activity measurements or an independently validated project-specific model; total PM10 must not be added to its fractions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `ifc-hydropower-2018`; `iaea-nuclear-construction-2011`

###### Water (`freshwater_discharge`)

Only actual liquid water directly crossing the site environment boundary into an identified freshwater receptor, CAS7732-18-5. It is not abstraction, sea return, vapour or liquid sent to treatment; every actual dissolved/suspended pollutant is separately quantified.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Meter direct discharge m3 and receptor/date; reconcile source, treatment, storage and water balance without subtracting it from abstraction as a negative resource.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `ifc-hydropower-2018`; `iaea-nuclear-construction-2011`

###### Water (`sea_return`)

Only evidenced liquid-water return to an identified marine receptor during included construction/testing, CAS7732-18-5, Emissions to sea water. Retain actual source, receiving marine area, salinity and individually monitored pollutant constituents; neither clean water nor zero pollution is assumed. It is not freshwater discharge, sea-water abstraction, vapour or liquid sent to treatment.

- Selected flow: Water `631ecf13-0e51-4e35-8235-c6f80c60d72c`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure actual m3 at marine outfall and document temperature/salinity/constituents; distinguish water volume from thermal and chemical emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `ifc-hydropower-2018`; `iaea-nuclear-construction-2011`

### Process: Construction waste containment and export (`waste`)

#### Outputs

##### Waste flows

###### Uncontaminated excavated mineral soil for disposal (`mineral_spoil`)

Only actual exported spoil classified as waste by its destination and tests; reused soil on the same site is an internal transfer. Separately identify rock, topsoil and contaminated soil when present.

- Selected flow: Uncontaminated excavated mineral soil for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated stream in kg with wet/dry convention and composition; retain actual receiving treatment, transport and transfer evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-hydropower-2018`; `epa-concrete-washout-2012`

###### Hardened concrete rubble (`concrete_rubble`)

Only actual rejected hardened concrete or construction breakage sent off site; returned fresh mix and later demolition are distinct streams/stages.

- Selected flow: Hardened concrete rubble
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated stream in kg with wet/dry convention and composition; retain actual receiving treatment, transport and transfer evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-hydropower-2018`; `epa-concrete-washout-2012`

###### Carbon-steel reinforcement offcuts (`steel_offcuts`)

Only actual segregated reinforcement cutting scrap; separate reusable bars and other metal streams. No automatic avoided-primary-steel credit.

- Selected flow: Carbon-steel reinforcement offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated stream in kg with wet/dry convention and composition; retain actual receiving treatment, transport and transfer evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-hydropower-2018`; `epa-concrete-washout-2012`

###### Cementitious concrete washout liquid (`washout_liquid`)

Only captured concrete chute/pump washout liquid exported for treatment, separate from settled hardened solids. No assumed release to water or soil; independent actual pollutant measurements are required if leakage occurred.

- Selected flow: Cementitious concrete washout liquid
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure segregated wet stream m3 and actual treatment destination; retain solids content, sampling and water balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-hydropower-2018`; `epa-concrete-washout-2012`

### Process: Supply and construction-waste transport (`transport`)

#### Inputs

##### Product flows

###### freight transport (`road_freight`)

Only actual non-refrigerated delivery/export legs using the public road-freight production-at-plant identity and a separately compatible service dataset; retain vehicle class, load, route, empty-return method and real origin/delivery gates. The flow identity supplies no carrier fuel/emission factors. Heavy-lift sea/rail transport requires its own atomic service and evidence; upstream included freight is not counted twice.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t*km
- Amount rule: Sum actual cargo tonnes times actual leg km using manifests and route records; reconcile shared loads, payload convention and origin/destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `ifc-biomass-construction-2017`; `doe-wind-siting-2021`

### Process: Inspection, cold commissioning and construction handover (`handover`)

#### Outputs

##### Product flows

###### Complete power plant at construction handover (`reference_product_power_plant`)

The same identified complete constructed entity with actual installed route/configuration and declared acceptance stage. A civil-only building, loose generator or electricity output cannot substitute.

- Selected flow: Complete power plant at construction handover
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `un-cpc-power-plants-2025`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_activity | dataset; inventory | First assign materials, metered energy and work packages directly to the actual plant. For shared batching, workforce equipment or deliveries use recorded beneficiary activities/loads and explain the physical relationship; neither plant cost nor assumed annual generation supplies the denominator. Missing relationship requires review. |  |
| shared_assets | dataset; inventory | For each equipment or reusable form/component retain a persistent manufacture-burden ledger across every project and period. Attribute measured asset amount times evidenced use share; the cumulative shares must be ≤1 and operating energy is separate. Record actual hours/cycles or supported whole-asset denominator and beneficiaries; unknown future life/capacity remains an explicit review, not a fresh full burden at every project. |  |
| multipurpose_works | dataset; inventory | Shared dam, reservoir civil works, access and grid interfaces must be assigned once with project-specific causal/service evidence among actual beneficiaries; shares conserve the entire included construction burden. State unallocated/missing scope. Independently imported component datasets must not duplicate plant foreground works. |  |
| residuals | dataset; inventory | Separate reusable material/product transfers from segregated waste and actual disposal. Do not net avoided virgin manufacture or future recovery into core construction. A hot-test electricity/heat extension records actual useful outputs and its independent allocation basis; trial export does not turn construction reference quantity into kWh. |  |

These attribution rules require the explicit foreground measurement and cross-project evidence of cp_assets and the relevant work-package protocols; they supply no external default share, lifetime or substitution factor.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_ground | ground | Each actual atomic exchange and same declared plant | foreground_records | Site survey, starting state, geology, bank/loose earth/rock volumes, fill grading, transport/export destinations and remediation flags | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_civil | civil | Each actual atomic exchange and same declared plant | foreground_records | Work-package/drawing ids, concrete batch/grade/density/moisture, reinforcement tickets, geometry, placement/vibration/curing, structural and leak tests | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_thermal | thermal | Each actual atomic exchange and same declared plant | foreground_records | Cycle type, unit/serial/rating, supplied assembly boundaries, foundations/alignment, piping, welds, cooling/fuel-handling and installation tests | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_nuclear | nuclear | Each actual atomic exchange and same declared plant | foreground_records | Reactor design, nuclear-island configuration, qualified materials, liner and primary components, safety BOM, weld/test and construction stage; fuel-load status | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_hydro | hydro | Each actual atomic exchange and same declared plant | foreground_records | Intake/waterway/penstock/powerhouse/tailrace as-built geometry, head/discharge, turbine-generator configuration and shared dam attribution | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_renewable | renewable | Each actual atomic exchange and same declared plant | foreground_records | Wind turbine rating/onshore/offshore and included tower/rotor/nacelle; PV cell technology, module area/count, mounts and inverter; construction scope | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_electrical | electrical | Each actual atomic exchange and same declared plant | foreground_records | Circuit ids, supply voltage/country, transformer ratings, supplied package boundary, cable lengths/specifications, protection/earthing and cold acceptance | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_utilities | utilities | Each actual atomic exchange and same declared plant | foreground_records | Equipment/activity/stage ids, diesel stock/grade/density/carbon/LHV, power meters and voltage, water end use and internal generation | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_waste | waste | Each actual atomic exchange and same declared plant | foreground_records | Segregated stream, material/state, wet/dry mass, washout volume/solids, tests, transfer and actual receiver/treatment/gate | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_transport | transport | Each actual atomic exchange and same declared plant | foreground_records | Cargo mass/dimensions, origin/destination, real leg distance/mode/load, equipment mobilisation, return/load attribution and included upstream freight | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_handover | handover | Each actual atomic exchange and same declared plant | foreground_records | Entity/site id, generating route, actual unit capacity and capacity convention, plant geometry and interfaces, accepted components/tests, dates/signatures and incomplete work | Use signed drawings/tests, original supplier tickets, calibrated weighing/meters, equipment logs and configuration evidence; reconcile field work packages and subcontractors | Row-specific kg, m3, m2, m, MJ, item, t*km; raw capacity MW and geometry retained separately | Every delivery/return, activity/meter interval, installation test and final handover | Entire actual included construction period, rework and subcontracted stages; each gap explicit | Same defined plant/site, actual interfaces and attributable off-site work | per declared reference flow | Original records, calibration/density/state checks, geometry/BOM reconciliation, identity/gate matches, uncertainty and signed acceptance |
| cp_assets | temporary | Equipment and reusable-component manufacture attribution | foreground_records | Asset id/configuration; measured count/area/mass; actual project use; previous cumulative share; supported full-asset denominator; beneficiary ledger | Reconcile one persistent ledger across all users/projects/periods with actual hours/cycles or supported denominator; unknown denominator requires review | item; m2; kg; fraction; hours/cycles | Every deployment/reuse/transfer and allocation update | All relevant asset projects and service periods | Asset and all beneficiaries | per declared reference flow | Measured asset amount, manufacture provenance, conserved cumulative shares ≤1 and separately metered operating energy |
| cp_environment | utilities | Each actual resource intake and external release | foreground_records | Stage/equipment, species/CAS, fossil fraction, resource/receptor/compartment, mass/volume, time, salinity/temperature/density, measured source rate/activity, control capture, model provenance and uncertainty | Calibrated intake/outfall meters and source-specific chemical/size-fraction monitoring or independently supported site model; reconcile water/carbon balances. Record noise, vibration, ecological disturbance and thermal effects separately; do not infer emitted mass from concentration alone | kg; m3 | Every intake/release interval, documented activity and sample | All included site construction/testing intervals; unobserved intervals disclosed | Actual source and environment boundary/receptor | per declared reference flow | Calibration, chemistry/speciation, disjoint size fractions, medium/state and independent model checks, mass/volume balance and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_reference | all inventory rows | Aggregate each attributable atomic quantity for this same accepted entity. q = Q / N, where N = 1 complete delivered plant; q is per declared reference flow. Do not divide by assumed plant mass, lifetime, cost or generated electricity. | cp_handover | per declared reference flow |  |
| calc_electricity | lv_power; mv_power | E_MJ = E_kWh * 3.6; preserve actual meter/gate and allocate construction energy once. | cp_utilities | MJ per declared reference flow |  |
| calc_density | fresh_concrete; diesel; sea_intake | Mass in kg = measured volume times independently evidenced same-material/state density in compatible units; retain raw volume and density provenance. Unknown density is review, not a guessed factor. | cp_civil; cp_utilities; cp_environment | kg per declared reference flow |  |
| calc_freight | road_freight | Sum actual cargo tonnes * actual route kilometres by leg, with supported shared-load and return convention; distinguish raw vehicle-km from t*km and included supply freight. | cp_transport | t*km per declared reference flow |  |
| calc_modules | poly_module; mono_module | Sum measured module gross areas using the same area convention and accepted installed counts; reconcile rejected/returned modules. Rated capacity and electricity are distinct qualifiers/outputs. | cp_renewable | m2 per declared reference flow |  |
| calc_attribution | plywood_form; excavator; mobile_crane | Attributable asset manufacture = measured asset amount * evidenced share; cumulative shares across every beneficiary and period ≤1. Keep physical transfer ledger and operating fuel separate; unsupported use/lifetime denominator is review. | cp_assets | attributed asset amount per declared reference flow |  |
| calc_releases | fossil_co2; nitrogen_monoxide; nitrogen_dioxide; pm_fine; pm_coarse | Use measured emitted species mass or an independently supported source-specific site model. Fossil CO2 may use measured oxidized fossil carbon * 44/12 with composition/oxidation evidence; molecular NO and NO2 require independent speciation, and PM fractions are disjoint. No universal engine/plant emission factors are given. | cp_environment | kg per declared reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | reference product | Actual generating route, complete installed BOM, geography, capacity/geometry and delivery stage must describe the same identified plant. | cp_handover; cp_civil; cp_thermal; cp_nuclear; cp_hydro; cp_renewable |
| coverage | all inventory rows | Cover every actual work package, subcontracted interval and relevant route; disclose missing measurements, components, unsupported identities and all excluded stages without claiming complete lifecycle. | cp_handover; construction records; supplier gates |
| metrology | all inventory rows | Retain calibration, raw basis/state, density/composition provenance, dimensional consistency and uncertainty; no default mix, site consumption, plant mass or life. | cp_civil; cp_utilities; cp_environment; cp_transport |
| attribution | temporary; hydro; electrical | Persistent asset and multipurpose civil/interface allocations conserve burdens across all beneficiaries; unresolved denominator or scope stays review. | cp_assets; original project allocation ledger |
| source_limits | dataset | Historical technical sources support qualitative construction/route facts only, not current permission, default recipe, lifetime or emission factor. Nuclear, biomass, hydro, wind and solar case scopes must not be silently extended. | `un-cpc-power-plants-2025`; `iaea-nuclear-construction-2011`; `ifc-thermal-power-2008`; `ifc-biomass-construction-2017`; `ifc-hydropower-2018`; `doe-wind-siting-2021`; `ifc-mocuba-solar-2016`; `epa-concrete-washout-2012` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| identity_gate | dataset; inventory | Require one actual constructed power-plant entity, its generating route and all mandatory qualifiers. Verify every adopted identity against material/specification, geography, state, route, primary property and unit group; unresolved identity is not a substitution licence. |  |
| measurement_gate | dataset; inventory | The final output is exactly 1 item/件 and every inventory/protocol basis is the same declared reference flow. Reconcile measured geometry, capacity, count and delivery state; never infer mass per plant, life, energy yield or a universal mix. Preserve Mass, Area, Length, Volume and energy identities and evidence for any conversion. |  |
| completeness_gate | dataset; inventory | Match every actual required/conditional design work package to its atomic rows, original records and upstream/transport interfaces. Missing components, unmetered work, hot tests within the accepted scope, unknown allocations or conversions and unsupported routes remain review gaps and prohibit a complete result; genuine absence requires design evidence. |  |
| environment_gate | dataset; inventory | Check independent source/species/medium evidence before direct elementary exchanges, including fossil share, molecular NO/NO2, disjoint PM fractions and water receptor. Captured sludge/liquid is waste, internal recirculation is not intake, and noise/concentration is not assumed emitted mass. Missing observation is not zero. |  |
| attribution_gate | dataset; inventory | Reconcile each persistent asset and shared dam/connection ledger across all users, projects and periods; cumulative manufacture shares ≤1 and complete attribution sums to the whole declared burden. Retain actual gates and eliminate duplicate raw materials, equipment packages, fuel services and freight. |  |
| handover_gate | dataset; inventory | Require dated signed construction acceptance, geometry/configuration and outstanding-tests list. Independent structural, electrical, nuclear, environmental or regulatory acceptance must be evidenced where claimed; PCR inspection establishes none of these approvals. Report performed/skipped checks, findings, uncertainty and covered/excluded stages. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_construction_dataset |
| downstream_use | Explicit construction contribution to a plant infrastructure model with separately matched upstream components and separately assessed operation/end of life |
| allowed_use | The measured actual plant/site/configuration/acceptance period and compatible comparisons with the same functional/coverage definitions |
| excluded_use | Generic mass-based power-plant material, unqualified per-kWh operation, default lifetime/capacity/recipe, whole lifecycle or licensing/approval claim |
| required_metadata | All reference qualifiers; actual work packages, initial state and scope; original unit/gate/identity bindings; measured geometries and capacity; asset/shared interface ledger; cold/hot and fuel-load status; signed handover dates |
| required_quality_disclosure | Performed/skipped checks, unmetered and unsupported scope, unresolved identity/allocation/conversion, uncertainty, supplier links and excluded operating/maintenance/demolition stages |
| update_trigger | Actual configuration, site, component/supply gate, method evidence, measurement, acceptance stage or attributable work changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-power-plants-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes (30 June 2025), printed/PDF p281, 53262. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Heavy electrical generating plants including nuclear; adjacent category context only, not methodology approval |
| iaea-nuclear-construction-2011 | official_guidance | IAEA, NP-T-2.5 Construction Technologies for Nuclear Power Plants (2011), printed p23/PDF37 §4.1; printed pp48–50/PDF62–64 §4.2; printed pp99–104/PDF113–118 §5.1; printed pp112–114/PDF126–128 §6. https://www-pub.iaea.org/mtcd/publications/pdf/p1526_web.pdf | Qualitative nuclear civil/containment/turbine-island construction and installation; no adoption of historical case dimensions, recipes, duration or licence |
| ifc-thermal-power-2008 | official_guidance | IFC, EHS Guidelines for Thermal Power Plants (19 December 2008), pp1–2 Applicability; Annex A pp26–29; p8 cooling. https://www.ifc.org/content/dam/ifc/doc/2000/2008-thermal-power-ehs-guidelines-en.pdf | Historical non-nuclear combustion-route/component distinctions; guideline applicability >50 MWth HHV, not a PCR capacity default or construction emission factor. Operational cooling/emissions are not mandatory construction releases |
| ifc-biomass-construction-2017 | official_guidance | IFC, Converting Biomass to Energy: A Guide for Developers and Investors (June 2017), printed pp91–94/PDF109–112 §8.1; printed pp95–100/PDF113–118 §8.2. https://www.ifc.org/content/dam/ifc/doc/mgrt-pub/biomass-report-06-2017.pdf | Biomass steam/biogas examples: erection, civil/mechanical/electrical records and cold/hot/function/performance acceptance distinctions; no universal thermal-plant recipes or trial quantities |
| ifc-hydropower-2018 | official_guidance | IFC, Environmental, Health, and Safety Approaches for Hydropower Projects (March 2018), printed pp13–14/PDF23–24 §1.1.7; printed pp48–50/PDF58–60 Annex A. https://www.ifc.org/content/dam/ifc/doc/mgrt/gpn-ehshydropower.pdf | Site-specific hydro civil/waterways/powerhouse and electromechanical interfaces; conditional excavation, spoil and drainage; no default dimensions, life, reservoir emissions or numerical factors |
| doe-wind-siting-2021 | official_guidance | US DOE/NREL, Land-Based Wind Energy Siting: A Foundational and Technical Resource (August 2021), §2.1 Construction, printed pp9–11/PDF19–21, Figures 6–7. https://www.energy.gov/sites/default/files/2025-10/land-based-wind-energy-siting-guide.pdf | Historical land-based preparation, foundation concrete/rebar and crane/tower/nacelle/rotor erection; not offshore construction evidence or default quantities |
| ifc-mocuba-solar-2016 | official_guidance | IFC ESRS project 36787 Mocuba Solar, disclosed 21 January 2016, Project Description and PS3 Water consumption. https://disclosures.ifc.org/project-detail/ESRS/36787/mocuba-solar | One Mozambique polycrystalline PV case: steel substructure, array electrical configuration and construction/O&M separation; no case capacity, module count, area or date is a PCR default, and no transfer of case geography to CN identities |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice: Concrete Washout, EPA-833-F-11-006 (February 2012), pp1–3. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Historical ready-mix chute/pump washing and separate captured liquid/solid handling; no default pH, density, mandatory leakage or treatment credit |
