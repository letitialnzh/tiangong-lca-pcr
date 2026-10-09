---
pcr_id: pcr.constructions-and-construction-services.constructions.irrigation-and-flood-control-waterworks-delivery
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Irrigation and flood control waterworks delivery

## 1. Scope and Applicability

This PCR describes the actual construction and accepted physical delivery of irrigation and flood-control waterworks, not a construction service, annual water delivery or a basket of building materials. A dataset defines one functional, spatially bounded works: an irrigation canal/distribution/drainage system, a flood conveyance/control scheme, a polder/storage/pumping system, or a combined works whose complete delivered configuration is stated. Earth/unlined, concrete/precast/brick/asphalt/membrane-lined, flexible/vegetated and actual underground routes are conditional options. No one structure, material or technology is universal. The intended function and commissioning interfaces determine the entity, not a classification leaf. Sources: `unsd-cpc-3-2025`; `fao-irrigation-system`; `hk-dsd-stormwater-2018`.

Exclude independently delivered supply-only aqueducts/conduits, navigation harbours/waterways, standalone dams and water-retaining structures, coastal/waterside embankments, standalone pipelines, crop production, treatment plants and separately sold equipment/materials. Integral banks/protection, hydraulic crossings, headworks, control/pump chambers and delivered access are retained where they physically belong to the declared irrigation/flood system. A multipurpose or independently classified dam/embankment/component is declared with a non-overlapping interface and separate applicability decision; this PCR must not erase it, automatically absorb it, or double count it. Actual rehabilitation is allowed only with retained/prior assets and all new/removal work explicitly stated.

The main boundary is construction-to-accepted-handover. Manufacture of bought materials/equipment, delivery transport, site work, later operation/maintenance/renewal and final demolition remain separately identifiable. No complete cradle-to-gate or whole-life claim follows from the foreground alone. Real project measurements and acceptance records supply engineering quantities, configurations and criteria; historical descriptive sources supply no default lifespan, mix, mass, design load, efficiency or approval.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.irrigation-and-flood-control-waterworks-delivery |
| classification_refs | CPC 3.0 53234; Irrigation and flood control waterworks |
| covered_products | Accepted physical irrigation and flood-control works with declared complete functional/spatial configuration and interfaces, including their actual integral channels, drainage, storage, control, pumping and civil components. |
| excluded_products | Supply-only conduits; navigation facilities; independently delivered dams/embankments/pipelines; materials, machine manufacture and construction services; crop output and operational water service. |
| representative_product | One configured irrigation or flood-control works accepted at its actual site, extent, function, geometry and commissioned state. No representative numeric recipe is assumed. |
| production_route | Actual enabling/earthworks, integral bank/filter/drainage and selected lining/structure/underground route, control/pumping installation, utilities and waste handling, reinstatement/testing and handover. |
| market_state | Complete accepted civil works at the defined site and interfaces; delivered components and prior retained assets explicitly listed. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared physical hydraulic works ready for its stated irrigation, flood-control or combined function at handover. |
| How much | One complete accepted works at the declared project extent; actual canal/drain length and cross-sections, protected/irrigated area, storage volume and pump/conveyance capacity are measured qualifiers, not prescribed defaults. |
| How well | Actual project-specific hydraulic, geotechnical, structural, water-control and commissioning requirements evidenced in cp_acceptance; retain water levels/head, leakage and operating configuration where relevant, rather than claiming universal flood protection. |
| How long or cycle | One actual construction/commissioning-to-handover cycle, with real start/end and test dates. No future service life is set; any operational assessment period is separately evidenced. |
| reference_flow_link | reference_waterworks |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Delivered irrigation and flood control waterworks |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | project/site identity; physical delivery limits and inlet/outlet interfaces; irrigation/flood-control/combined purpose; complete delivered and prior-retained asset schedule; actual route/technology; surveyed chainage, cross-section, slope and levels; actual irrigated/protected area with definition; actual flow/head/storage/pump capacity where relevant; structural/material/water-quality conditions; test criteria, conditions and evidence; construction and handover dates; upstream/transport/site/later-phase boundary; shared asset attribution; missing identity and environmental coverage |

All required qualifiers must be declared in dataset metadata, reference-flow description or equivalent records. Here item is the display alias for the public unit-group reference Item(s), not a material mass or an arbitrary count of canal sections. A contract-defined independently functioning delivery is allowed only if its complete interfaces and limits are retained; constituent gates, pumps and sections remain internal to the same reference works.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use cp_acceptance to confirm one complete accepted physical works of the same declared configuration and extent. Each input/output is per declared reference flow; measured length/area/capacity is supplemental and may not silently replace the denominator. No whole-works mass is invented. |
| geometry_mass | imported_earth_fill; filter_sand; riprap_rock; reinforcing_steel; power_cable | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep actual geometry and material state. Where quantities are collected by volume, area, length or count but this row reports mass, use actual matching measured/certified density, areal mass, unit mass or cross-section/length; retain moisture, temperature and configuration. No default density, per-project/per-kilometre mass, shrinkage or mixture. |
| geometry_volume | purchased_concrete; precast_lining_slab; precast_jacking_pipe; tunnel_lining_segment | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Keep the actual measured received/installed volume and matching component/material state; retain dimensions and voids. Count/length/area-to-volume needs actual geometry, and mass-to-volume needs actual matching density. Preserve a public Volume identity as Volume; no default dimensions, density, mix or per-project volume. |
| geometry_area | membrane_hdpe; grass_sod | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Keep actual purchased and installed area with overlaps/offcuts and delivered thickness/specification. Preserve Area for an area-based identity. Any mass conversion requires the same actual lot’s measured/certified areal mass or thickness and density; no universal factor and no silent mass property replacement. |
| energy_identity | electricity_lv_cn; electricity_mv_cn; electricity_other | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public Net calorific value reference property and energy unit group. Use 3.6 MJ/kWh for meter units. This does not imply a fuel heating value; fuel mass/volume-to-energy requires the actual fuel value and state. |
| water_state | tap_water_hk; supplied_water_other; groundwater_abstraction; river_abstraction; water_release_fresh | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Measure each actual liquid stream with its source, destination, quality and temperature/state. L to m3 uses 0.001 m3/L; kg conversion needs real density. Keep supply, natural abstraction, liquid waste and direct release separate. No tap-water screening density or boiler/normal-volume assumption. |
| transport_basis | road_freight | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | Use actual measured payload and route distance with 1000 kg/t, retaining load, empty-return and supplier-gate evidence under cp_transport. Different modes and included logistics require separate handling, not a default distance. |

### Flow-property and unit-group support relations

| Flow property | Unit group | Public reference unit |
| --- | --- | --- |
| Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` | m3 |
| Area `93a60a56-a3c8-19da-a746-0800200c9a66` | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` | m2 |
| Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` | MJ |
| Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` | Item(s) |
| Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | Units of goods transport `838aaa21-0117-11db-92e3-0800200c9a66` | t*km |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual site/topography, soil/groundwater and retained asset condition; incoming materials/components at explicitly stated gates; temporary diversion and access arrangements declared before construction. |
| starting_condition_role | foreground construction starting interface, with prior assets and upstream manufacture separate |
| product_classification_scope | Irrigation/flood-control physical works context, CPC 3.0 53234; component and multipurpose classifications reviewed at explicit interfaces, not automatically inherited. |
| recursive_input_rule | An incoming same-category works/component with prior construction burden is recorded at its real interface, with existing/new scope and a compatible upstream dataset. Do not recursively reproduce its construction or create a duplicate final output. |
| upstream_dataset_requirement | Actual material/component manufacture, supply water/electricity, transport and actual waste treatment need compatible geography/time/technology, properties and inclusion boundaries. Identity alone does not supply these burdens. Missing upstream data remains a named gap. |
| disclosure | Report actual site, complete delivery/retained configuration, route, temporary works, water/land interfaces, upstream links/gaps, shared manufacture scope, direct emission evidence and excluded later lifecycle. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| construction_delivery | dataset | The core foreground covers actual site preparation through construction, fitting, testing, removal of temporary works, reinstatement and accepted physical handover. Record delivered incoming products at their real interfaces. Cement/steel/aggregate/pump manufacture is upstream; only actual site batching, placement or assembly is foreground. Link compatible upstream manufacturing and delivery datasets to extend coverage, but label this foreground result as construction-to-handover, not a complete cradle-to-gate or whole-life result. | `usbr-crow-construction` |
| purpose_and_interfaces | reference_waterworks | Preserve the actual irrigation or flood-control purpose and independently operable extent. Identify canal/drain chainage and cross-sections, protected/irrigated area definition, inlet/outlet and water levels, documented flow/storage/pumping capacity, control and maintenance access delivered. These are project measurements/requirements, not fixed PCR numbers. Exclude standalone water-supply conduits, navigation/port facilities, dams/water-retaining structures and coastal/waterside embankments; for multipurpose or integral components, declare a non-overlapping package/interface and review classification separately rather than removing real construction. | `unsd-cpc-3-2025`; `hk-dsd-stormwater-2018` |
| route_completeness | all inventory rows | Required process blocks require an actual activity/completeness assessment, not all listed materials. Conditional routes remain conditional: earth or lined irrigation; rigid, flexible or vegetated flood channels; storage/polder/pumping; open-cut or underground hydraulic connections. Add each actual missing product, chemical, energy carrier, support element, packaging piece, waste and measured environmental species as a separate atomic row with properties, unit, protocol and route evidence. Significant piling, ground treatment, tunnelling, shotcrete, hydraulic transport or other real operations require their own process detail before a dataset can be complete; a sparse example route cannot represent another technology. | `fao-irrigation-system`; `usbr-crow-construction`; `hk-dsd-stormwater-2018` |
| temporary_and_prior_assets | dataset | Account actual cofferdams, temporary diversion/roads, dewatering/treatment, support works and their removal/recovery once. Distinguish native retained assets, imported assemblies and new work. A rehabilitation delivery must retain prior structure/interface and record actual enabling demolition and replacement; do not charge the retained old asset as a newly manufactured input or erase its history. Shared machinery/formwork manufacture, when included, follows the cumulative share ledger. | `usbr-crow-construction` |
| later_lifecycle | dataset | Only post-handover operational irrigation deliveries, flood events, pumping energy, leakage/seepage, operating-reservoir/soil processes, desilting, maintenance, renewal and final demolition are outside the core construction delivery. Actual pre-acceptance initial filling, commissioning, land disturbance and resulting supported inundation/land-carbon/release pathways stay inside their real construction/test site and period. Record baseline, flooded area, dates and measurements; unsupported pathways remain explicit gaps, not moved into excluded operation. Keep later actual or explicit future scenarios separate with evidenced period, activity, replacements, treatment and fate. No default service life, flood recurrence, saved crop output or avoided flood damage. | `fao-irrigation-system`; `hk-dsd-stormwater-2018`; `ipcc-flooded-land-2019` |
| environmental_boundary | site_utilities; construction_wastes | Distinguish supplied technosphere water, direct river/groundwater resource abstraction, contained liquid waste sent for treatment and actual elemental release to a named receiving medium. Separate recirculation from crossing flows and record storage, rainfall/river diversion and return volumes so abstraction is not equated with consumption. Record noise as site/receptor/time/frequency and sound-level evidence outside mass exchanges until a suitable metric and identity are established; do not convert dB to kg or assume a universal noise emission. Actual land clearing/occupation changes and contaminant releases require separate supported environmental exchanges or explicit gaps, not an assumed zero. | `epa-concrete-washout-2012`; `epa-construction-dust-1995`; `usbr-crow-construction` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| site_earthworks | Site preparation, earthworks and temporary water control | required | Inspect actual clearing, excavation, grading, borrow and internal reuse; cofferdam/diversion/dewatering only where performed. | foreground_production | per declared reference flow |
| banks_drainage | Integral banks, filters, protection and subsoil drainage | conditional | Where the selected waterworks includes integral banks/flood protection, filters, revetment or drains; not a separate standalone dam/embankment output. | foreground_production | per declared reference flow |
| lining_structures | Lining and hydraulic civil structures | conditional | Where real lined canals, headworks, storage, walls, culverts or pumping civil structures are delivered; route/materials from actual design. | foreground_production | per declared reference flow |
| underground_conveyance | Integral underground hydraulic conveyance | conditional | Only actual hydraulic tunnels, jacking drives or shafts inside the works; preserve excavation, ground-support, face conditioning, lining and water-control route. | foreground_production | per declared reference flow |
| controls_installation | Fixed water-control and pumping installation | conditional | When the delivery configuration includes gates, flap valves, pumps, actuators, instruments or fixed electrical systems. | foreground_production | per declared reference flow |
| site_utilities | Construction plant, utilities, transport and direct environmental exchanges | required | All construction and acceptance stages; each exchange is conditional on actual occurrence and source/interface. | foreground_production | per declared reference flow |
| construction_wastes | Construction waste segregation, recovery and transfer | required | Inspect all construction, testing and in-scope replacement stages; record each real stream and destination, including non-applicability evidence. | foreground_production | per declared reference flow |
| handover | Verification, reinstatement and physical acceptance | required | Always confirm completeness, functional interfaces, actual geometry, defects and acceptance; testing consumption remains stage-coded under utilities/wastes. | delivery | per declared reference flow |

Process blocks are accounting responsibilities, not a compulsory material recipe. A row occurs only under its stated physical conditions. Tag shared utility, plant and waste records to the originating work stage; count them once even if a subcontracted complete service supplies the same stage. Extend this map with every real significant unlisted operation and its atomic exchanges before asserting dataset completeness.

### Process: Site preparation, earthworks and temporary water control (`site_earthworks`)

Inspect actual clearing, excavation, grading, borrow and internal reuse; cofferdam/diversion/dewatering only where performed.

#### Inputs

##### Product flows

###### Uncontaminated natural soil fill (`imported_earth_fill`)

Only imported natural soil actually received for canal banks, foundations or integral flood-protection components. Record soil classification, source, moisture, grading, compaction specification and measured received mass. Reused excavation within the same project is an internal movement, not a second purchased soil input.

- Selected flow: Uncontaminated natural soil fill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_earthworks, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_earthworks`
- Sources: `usbr-crow-construction`; `hk-dsd-stormwater-2018`

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

### Process: Integral banks, filters, protection and subsoil drainage (`banks_drainage`)

Where the selected waterworks includes integral banks/flood protection, filters, revetment or drains; not a separate standalone dam/embankment output.

#### Inputs

##### Product flows

###### Washed natural silica filter sand (`filter_sand`)

Only where this specified sand is installed in a real filter or drainage layer. Preserve grain-size distribution, mineral identity, contamination and water content; sand used in a concrete recipe is accounted separately within that recipe.

- Selected flow: Washed natural silica filter sand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_materials, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `hk-dsd-stormwater-2018`

###### gravel 2/32 (`filter_gravel`)

Use this identity only for actual undried 2/32 gravel from a wet/dry quarry production mix at plant, with measured moisture and grading meeting the project filter specification. Verify delivery to the site separately. Other size fractions, processed drainage media and mixtures require separate identities; this row does not mandate a 2/32 filter.

- Selected flow: gravel 2/32 `4f19a2fb-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_materials, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `hk-dsd-stormwater-2018`

###### rock (`riprap_rock`)

Only natural rock supplied as a production mix at plant and actually installed for riprap, rubble protection or stone masonry. Obtain rock type, piece-size grading, durability specification, placement geometry and actual accepted mass; the general rock identity supplies no armour stability, sizing or density rule. Record quarry processing and transport in compatible upstream data.

- Selected flow: rock `8e0f2838-6d58-433c-975c-7d2cb5878a2d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_materials, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `usbr-crow-construction`; `hk-dsd-stormwater-2018`

###### Galvanized steel gabion mesh (`gabion_mesh`)

Only when galvanized steel mesh baskets are used for flexible channel protection. Record wire/coating specification and basket dimensions; record rock separately, avoiding duplication with a purchased filled-gabion dataset.

- Selected flow: Galvanized steel gabion mesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_materials, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `hk-dsd-stormwater-2018`

###### Live grass sod for channel stabilization (`grass_sod`)

Only actual planted sod in a grass-lined or restored channel bank. Record species, area, soil attached to the sod, establishment work and delivered survival/coverage requirements. Seed, fertilizer, irrigation for establishment and other real inputs each need their own row if used; later landscape maintenance is excluded.

- Selected flow: Live grass sod for channel stabilization
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual attributable quantity in this row unit using cp_materials, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `hk-dsd-stormwater-2018`

###### Polypropylene nonwoven drainage geotextile (`geotextile_pp`)

Only specified polypropylene nonwoven geotextile used as filter/separator beneath protection or around drainage. Record polymer, areal mass, thickness, overlap and installed area; convert area to purchased mass only using the actual roll certificate or weighing. Polymer fabric names alone do not establish this component.

- Selected flow: Polypropylene nonwoven drainage geotextile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_materials, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `usbr-crow-construction`

###### Perforated HDPE subsoil drainage pipe (`drain_pipe_hdpe`)

Only actual perforated HDPE pipes in a subsoil drain. Record diameter, wall class, perforation geometry, length and measured mass or certified mass per actual length. The pipeline is an integral drain component; standalone water or sewer pipeline projects are a separate scope.

- Selected flow: Perforated HDPE subsoil drainage pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_materials, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `hk-dsd-stormwater-2018`

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

### Process: Lining and hydraulic civil structures (`lining_structures`)

Where real lined canals, headworks, storage, walls, culverts or pumping civil structures are delivered; route/materials from actual design.

#### Inputs

##### Product flows

###### Fresh ready-mixed hydraulic concrete (`purchased_concrete`)

Only concrete received fresh for in-situ channel lining, headworks, floodwalls, storage structures, pump chambers or culverts. Record approved project mix, delivery tickets, placed volume, reinforcement scope, curing, rejected/returned quantities and site additions. The confirmed Cast-In-Place Concrete record describes site pouring/mixing, not this unplaced purchased mixture. Do not duplicate its constituents when upstream concrete manufacture is linked.

- Selected flow: Fresh ready-mixed hydraulic concrete
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_concrete, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_concrete`
- Sources: `usbr-canal-concrete-2017`

###### Cement, portland cement (`portland_cement`)

Only actual gray powdered Portland cement supplied as a factory production mix for site batching of concrete, mortar or grout. Check the real binder and grade; blended cements and special binders require their own identities. Record measured recipe and separately supplied sand, coarse aggregate, water and every identified admixture; do not assume a default mix or repeat cement already included in purchased concrete.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_concrete, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_concrete`
- Sources: `usbr-canal-concrete-2017`

###### Hot rolled rebar steel (`reinforcing_steel`)

Use only actual hot-rolled low-alloy reinforcement with carbon content no greater than 0.2%, supplied as factory production mix, matching the public identity and the project bar certificate. Other alloy/strength/coating routes require re-selection. Measure receipts, cutting schedules, installed steel and offcuts; precast elements may already include reinforcement.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_concrete, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_concrete`
- Sources: `usbr-crow-construction`

###### Precast concrete canal lining slab (`precast_lining_slab`)

Only delivered precast canal slabs actually fitted into the lining. Preserve geometry, concrete type, reinforcement and upstream component boundary; count/area/volume conversion requires actual dimensions. A floor slab or generic concrete material is not automatically this canal component.

- Selected flow: Precast concrete canal lining slab
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_concrete, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_concrete`
- Sources: `usbr-canal-concrete-2017`; `hk-dsd-stormwater-2018`

###### Fired clay canal lining brick (`brick_lining`)

Conditional brick-lined canal route, supported by the historical FAO description. Record actual brick composition, firing/state, dimensions, installed amount and separate mortar. This is one option, not a required lining for all waterworks.

- Selected flow: Fired clay canal lining brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_concrete, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_concrete`
- Sources: `fao-irrigation-system`

###### Hydraulic asphalt concrete lining mixture (`asphalt_lining`)

Only the actual hydraulic asphalt-concrete canal lining route. Record binder grade, aggregate grading, mixture certificate, installed geometry, actual heating/paving activities and losses. Do not use ordinary road paving data without demonstrating waterworks formulation and interface applicability.

- Selected flow: Hydraulic asphalt concrete lining mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_concrete, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_concrete`
- Sources: `fao-irrigation-system`

###### HDPE hydraulic geomembrane (`membrane_hdpe`)

Only an actual HDPE membrane lining with known thickness, roll identity, installed/overlap area and seam testing. Do not infer density. The inspected 2 mm sheet from a South Korean soil-remediation biopile is not a confirmed hydraulic membrane identity.

- Selected flow: HDPE hydraulic geomembrane
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual attributable quantity in this row unit using cp_concrete, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_concrete`
- Sources: `usbr-crow-construction`

###### Construction formwork plywood (`formwork_plywood`)

Only actual plywood formwork. Record panel specification, same-panel reuse history, manufacturing attribution, damage and removal; allocate manufacture conservatively across evidenced uses without resetting at each project. Steel forms, liners, release agents and curing materials require their own actual rows if used.

- Selected flow: Construction formwork plywood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_shared_assets, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shared_assets`
- Sources: `usbr-crow-construction`

###### EPDM elastomeric joint waterstop (`waterstop_epdm`)

Only where an actual EPDM waterstop is installed at water-retaining joints. Record polymer, profile, width, length, mass and joint location. PVC waterstops, sealants and coating formulations are different exchanges and must not be merged into this row.

- Selected flow: EPDM elastomeric joint waterstop
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_concrete, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_concrete`
- Sources: `usbr-canal-concrete-2017`

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

### Process: Integral underground hydraulic conveyance (`underground_conveyance`)

Only actual hydraulic tunnels, jacking drives or shafts inside the works; preserve excavation, ground-support, face conditioning, lining and water-control route.

#### Inputs

##### Product flows

###### Reinforced concrete hydraulic jacking pipe (`precast_jacking_pipe`)

Only an integral hydraulic crossing or flood-conveyance drive actually installed by jacking. Record internal/external diameter, wall geometry, pipe count and joints, hydraulic grade and reinforcement inclusions. The DSD route is an example, not permission to assign transport-tunnel criteria or a universal alignment tolerance.

- Selected flow: Reinforced concrete hydraulic jacking pipe
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_underground, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_underground`
- Sources: `hk-dsd-stormwater-2018`

###### Precast reinforced concrete hydraulic tunnel lining segment (`tunnel_lining_segment`)

Only a segmentally lined hydraulic tunnel route within the delivered works. Record tunnel/shaft extent, excavated section, segment geometry and accepted installed volume, joint/seal details and component manufacture interface. Do not replace the complete waterworks reference with a generic tunnel length.

- Selected flow: Precast reinforced concrete hydraulic tunnel lining segment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_underground, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_underground`
- Sources: `hk-dsd-stormwater-2018`

###### Low-alloy structural steel tunnel support (`steel_support`)

Only actual steel support in shafts or hydraulic underground works. Record section, alloy, temporary/permanent status, installed mass and recovered/reused quantity. Permanent delivered support uses its actual full received/installed material quantity; only reusable temporary supports use an evidenced manufacturing share and asset ledger. Additional shotcrete, grout constituents and face-conditioning chemicals are individually recorded for the actual excavation technology.

- Selected flow: Low-alloy structural steel tunnel support
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_underground, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_underground`
- Sources: `hk-dsd-stormwater-2018`

###### Dry sodium bentonite powder (`bentonite_powder`)

Only if the actual slurry-support or jacking-lubrication formulation uses this specified dry powder. Record real mineral/additive composition and concentration, dry receipts, water separately and spent slurry destination; slurry TBM use does not make bentonite universal. Other conditioning agents each require their own material row.

- Selected flow: Dry sodium bentonite powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_underground, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_underground`
- Sources: `hk-dsd-stormwater-2018`

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

### Process: Fixed water-control and pumping installation (`controls_installation`)

When the delivery configuration includes gates, flap valves, pumps, actuators, instruments or fixed electrical systems.

#### Inputs

##### Product flows

###### Pump (`installed_pump`)

Only an actually supplied liquid pump from the public factory production-mix identity, installed as part of irrigation or flood drainage. Verify the supplied model, fluid/duty point, configuration, measured net mass and whether motor/base/control are included. A supplied integral motor must not be counted again. Pump manufacture is upstream; site fitting, wiring and commissioning are foreground.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_controls, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls`
- Sources: `fao-irrigation-system`; `hk-dsd-stormwater-2018`

###### Fabricated steel hydraulic sluice gate (`sluice_gate`)

Only actual delivered steel gate leaf/frame of the declared water-control structure. Record opening, head condition, steel/coating, seals, actuator inclusion and accepted mass. The inspected trench gate is an active-media groundwater-remediation component and is not this gate.

- Selected flow: Fabricated steel hydraulic sluice gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_controls, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls`
- Sources: `usbr-crow-construction`

###### Cast-iron hydraulic drainage flap valve (`flap_valve`)

Only actual cast-iron flap valve at an integral drainage outlet. Record diameter, material/coating, hinge and seal configuration, backflow function and installed mass; distinguish a purchased complete valve from its metal constituents.

- Selected flow: Cast-iron hydraulic drainage flap valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_controls, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls`
- Sources: `hk-dsd-stormwater-2018`

###### Electric hydraulic gate actuator (`gate_actuator`)

Only a separately supplied actual gate actuator. Record rating, travel/load condition and motor/gearbox/control inclusions; a generic small electric motor is not the complete actuator.

- Selected flow: Electric hydraulic gate actuator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_controls, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls`
- Sources: `usbr-crow-construction`

###### Installed electronic water-level sensor (`level_sensor`)

Only a real separately supplied water-level instrument, including its documented sensor interface. Record instrument technology, range and installation/verification; cabinets, telemetry and batteries each need their own row when separately installed.

- Selected flow: Installed electronic water-level sensor
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable quantity in this row unit using cp_controls, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls`
- Sources: `usbr-crow-construction`

###### Copper-conductor XLPE-insulated low-voltage power cable (`power_cable`)

Only this actual installed cable specification. Record rated voltage, conductor area, sheath/armour, measured length and manufacturer mass per length or weighing; other conductor/insulation constructions require separate rows. No cable manufacturing locality is assumed.

- Selected flow: Copper-conductor XLPE-insulated low-voltage power cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_controls, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls`
- Sources: `hk-dsd-stormwater-2018`

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

### Process: Construction plant, utilities, transport and direct environmental exchanges (`site_utilities`)

All construction and acceptance stages; each exchange is conditional on actual occurrence and source/interface.

#### Inputs

##### Product flows

###### Diesel fuel (`site_diesel`)

Use the generic foreground diesel material identity only for actual identified diesel, preserving its unspecified fuel grade, formulation, density, heating value, refinery, geographic supply and provider. Collect real fuel certificates and metered consumption by excavator, compactor, haul vehicle, pump, crane or generator and by work stage. Do not copy a fixed fuel rate from an equipment record. Measure density for volume-to-mass conversion; fossil content is separately required for fossil-emission rows.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_utilities, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `usbr-crow-construction`

###### Alternating current (`electricity_lv_cn`)

Only actual CN user-side grid-average consumption mix supplied below 1 kV. Preserve Net calorific value as the public reference property and MJ energy units. Record real meter interface and dates; electricity at 1–35 kV and other countries, self-generation or dedicated generation mixes are separate. Diesel used by a site generator and its output electricity must not both import the same upstream grid burden.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual attributable quantity in this row unit using cp_utilities, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `usbr-crow-construction`

###### Alternating current (`electricity_mv_cn`)

Only actual CN user-side grid-average supply at 1–35 kV. Keep Net calorific value/MJ, actual voltage and meter point, including transformers and losses only once according to supply interface. This row and the below-1-kV row cover distinct supplies, not alternative UUIDs for the same meter.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual attributable quantity in this row unit using cp_utilities, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `usbr-crow-construction`

###### User-side alternating-current electricity at the declared supply voltage (`electricity_other`)

Only actual electricity outside the two confirmed CN supply conditions. Identify country, actual voltage and mix, grid/self-generation interface and measured energy; select the matching public identity before dataset use. Do not replace it with incineration-production electricity.

- Selected flow: User-side alternating-current electricity at the declared supply voltage
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual attributable quantity in this row unit using cp_utilities, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `usbr-crow-construction`

###### Tap water (`tap_water_hk`)

Only actual Hong Kong treated tap water supplied as a production mix at the water-treatment plant gate. Verify the real distribution/transport link to the construction meter separately, and include its activities once. Preserve Volume/m3; the record’s secondary 1000 kg/m3 screening property is not a default density. Other locations or supply interfaces use a separately verified identity.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_water, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usbr-canal-concrete-2017`

###### Supplied liquid construction process water (`supplied_water_other`)

Only actual externally supplied liquid water for moisture conditioning, batching, curing, dust control or commissioning not satisfying the Hong Kong plant-gate identity. Record quality, geography, supplier, treatment and delivery interface; split source/quality streams. Do not also record its upstream natural-water abstraction as a foreground resource input.

- Selected flow: Supplied liquid construction process water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_water, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usbr-canal-concrete-2017`

###### Mineral lubricating oil (`mineral_lubricant`)

Only actual separately consumed mineral lubricant in construction plant. Record grade, issue/return, replacement and used-oil collection; lubricants already contained in a complete equipment/service dataset are not duplicated.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_utilities, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `usbr-crow-construction`

###### Complete hydraulic excavator at manufacture gate (`excavator_manufacture_share`)

Only when an actual hydraulic excavator manufacturing contribution is inside the declared dataset scope. Inventory kg equals measured same-configuration net excavator mass multiplied by the documented dimensionless manufacturing share attributable to this reference works; record both factors under cp_shared_assets. The service denominator must come from evidenced total lifetime/cumulative activity or a justified forecast, with reconciliation. Across all projects, periods and reuse scenarios the cumulative manufacture shares cannot exceed one. Unknown denominator or included manufacture requires explicit review, never a full new excavator burden per project. Do not adopt a dismantling-use excavator flow or its nominal fuel rate as manufacturing identity.

- Selected flow: Complete hydraulic excavator at manufacture gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_shared_assets, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shared_assets`
- Sources: `usbr-crow-construction`

###### Road freight transport by truck (`road_freight`)

Only actual inbound or attributable off-site truck transport not already contained in supplier or waste-treatment data. Keep material/vehicle/route separate in raw records, measured payload, loaded distance, empty return treatment and loading. Calculate each real leg in t*km; on-site plant fuel is metered separately, and plant mobilisation is included only once.

- Selected flow: Road freight transport by truck
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Collect the actual attributable quantity in this row unit using cp_transport, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `usbr-crow-construction`

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

###### ground water (`groundwater_abstraction`)

Only direct abstraction of freshwater from groundwater inside this foreground boundary for site use or actual construction dewatering. Record aquifer/source, location/country, extraction meter and purpose. This is a renewable material resource from water, not contaminated groundwater waste or water discharged to an aquifer. If an LCIA water-scarcity method is used, preserve the country/location requirement and method compatibility; abstraction is not assumed to equal consumption.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_water, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usbr-crow-construction`

###### river water (`river_abstraction`)

Only actual direct freshwater river abstraction crossing the site foreground environmental boundary; preserve source, location/country, intake meter, purpose and any separately measured returns. River diversion that bypasses construction without consumptive site use is disclosed as changed routing, not automatically counted as purchased water or final irrigation supply.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_water, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usbr-crow-construction`

#### Outputs

##### Product flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

###### carbon dioxide (fossil) (`diesel_co2`)

Only supported CO2 from the actual fossil fraction of site fuel combustion. Immediate emission to air with unspecified subcompartment; use a different verified flow if an urban/non-urban/high-stack subcompartment is specified. Include only the measured or route/engine/control-specific supported mass, with its factor and activity evidence retained by cp_environment. Do not import the same emission again from a combustion-inclusive service dataset. Biofuel carbon, soil carbon change and reservoir methane are separate and are not presumed construction emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_environment, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `usbr-crow-construction`

###### carbon monoxide (fossil) (`diesel_co`)

Only supported fossil CO, CAS 630-08-0, from actual construction combustion. Immediate emission to air with unspecified subcompartment; use a different verified flow if an urban/non-urban/high-stack subcompartment is specified. Include only the measured or route/engine/control-specific supported mass, with its factor and activity evidence retained by cp_environment. Do not import the same emission again from a combustion-inclusive service dataset.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_environment, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `usbr-crow-construction`

###### nitrogen monoxide (`diesel_no`)

Only separately supported NO, CAS 10102-43-9. NOx totals or NO2-equivalent reporting cannot be assigned as NO without substantiated speciation. Immediate emission to air with unspecified subcompartment; use a different verified flow if an urban/non-urban/high-stack subcompartment is specified. Include only the measured or route/engine/control-specific supported mass, with its factor and activity evidence retained by cp_environment. Do not import the same emission again from a combustion-inclusive service dataset.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_environment, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `usbr-crow-construction`

###### nitrogen dioxide (`diesel_no2`)

Only separately supported NO2, CAS 10102-44-0; not NO, N2O or a NOx total expressed as NO2 equivalent. Immediate emission to air with unspecified subcompartment; use a different verified flow if an urban/non-urban/high-stack subcompartment is specified. Include only the measured or route/engine/control-specific supported mass, with its factor and activity evidence retained by cp_environment. Do not import the same emission again from a combustion-inclusive service dataset.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_environment, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `usbr-crow-construction`

###### sulfur dioxide (`diesel_so2`)

Only supported SO2, CAS 7446-09-5, with actual fuel sulfur/control conditions. Immediate emission to air with unspecified subcompartment; use a different verified flow if an urban/non-urban/high-stack subcompartment is specified. Include only the measured or route/engine/control-specific supported mass, with its factor and activity evidence retained by cp_environment. Do not import the same emission again from a combustion-inclusive service dataset.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_environment, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `usbr-crow-construction`

###### particles (PM2.5) (`exhaust_pm25`)

Only supported size-defined PM2.5 exhaust mass for the actual plant. Immediate emission to air with unspecified subcompartment; use a different verified flow if an urban/non-urban/high-stack subcompartment is specified. Include only the measured or route/engine/control-specific supported mass, with its factor and activity evidence retained by cp_environment. Do not import the same emission again from a combustion-inclusive service dataset. A PM10 measurement already includes PM2.5; use a consistent non-overlapping particle-size representation and never sum nested fractions as separate total emissions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_environment, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `usbr-crow-construction`

###### particles (PM10) (`earthworks_dust_pm10`)

Only supported PM10 from actual excavation, fill placement, exposed stockpiles or site traffic, with immediate air/unspecified-subcompartment identity. Record activity, soil/silt/moisture, traffic, weather and dust-control evidence by operation. EPA AP-42 13.2.3 is used for its component-operation approach and cautions only: its historical area/month TSP factor is not a project PM10 default. Keep exhaust separate and avoid particle-size overlap.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_environment, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `epa-construction-dust-1995`

###### Water (`water_release_fresh`)

Only an actual direct discharge to a documented freshwater receiving body, after any recorded site treatment. Retain source, volume, destination, treatment and water-quality evidence. Do not use a natural-water resource identity, a purchased river-water product or a waste-treatment transfer for this release. Identify any actual pollutant species separately with measured concentrations and correct receiving medium; no default pollutant release is prescribed.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_water, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usbr-crow-construction`; `epa-concrete-washout-2012`

###### carbon dioxide (biogenic) (`initial_filling_biogenic_co2`)

Only actual biogenic CO2 attributable to land disturbance or initial filling/testing before acceptance, with the original land/carbon baseline, inundated extent, start/end and measured or specifically supported release. This immediate air/unspecified-subcompartment identity is not fossil combustion or a delayed-emission correction flow. IPCC flooded-land guidance supports pathway review, not automatic application of annual factors to a short construction test; identify actual land conversion and avoid repeating baseline respiration/short-term carbon cycling already counted elsewhere. Missing evidence is a declared gap, not zero.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_environment, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ipcc-flooded-land-2019`

###### methane (biogenic) (`initial_filling_biogenic_ch4`)

Only actual attributable biogenic CH4 to air before acceptance from a demonstrated initial-filling, constructed waterbody or soil pathway. Preserve original baseline, waterbody type, inundation/hydrology, oxygen/organic conditions, actual monitoring period and diffusion/ebullition/degassing routes; quantify each supported release without overlap. This is immediate air/unspecified subcompartment, not a long-term or fossil-methane identity. IPCC distinguishes flooded-land types and excludes some seasonal floodplains; its national/annual guidance is not a default construction-test factor, and merely installing a canal does not prove a methane release.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_environment, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `ipcc-flooded-land-2019`

### Process: Construction waste segregation, recovery and transfer (`construction_wastes`)

Inspect all construction, testing and in-scope replacement stages; record each real stream and destination, including non-applicability evidence.

#### Inputs

##### Product flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Waste flows

###### Uncontaminated excavated soil sent off site (`excavated_soil_waste`)

Only soil actually crossing the boundary to an identified waste destination after documented contamination characterization. Record native soil, wet/dry basis, recovered internal fill and exported quantity separately. Contaminated soil and excavated rock each require a separate specified row and treatment; a soil resource is not this waste.

- Selected flow: Uncontaminated excavated soil sent off site
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-crow-construction`

###### Hardened construction concrete waste (`concrete_waste`)

Only actually removed hardened concrete from construction loss or in-scope replacement work. Preserve reinforcement contamination, route and destination; segregate recovered steel and distinguish fresh rejected concrete or washout residue. Prior-asset demolition for rehabilitation is explicitly disclosed, not silently merged with new manufacture.

- Selected flow: Hardened construction concrete waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-crow-construction`

###### Low-alloy reinforcing steel offcut (`steel_offcut_waste`)

Only the actual segregated offcut from the specified reinforcement, with coating/contamination and recipient documented. No automatic avoided-primary-steel credit; preserve scrap transfer and actual recovery boundary.

- Selected flow: Low-alloy reinforcing steel offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-crow-construction`

###### Alkaline concrete washout liquid (`concrete_washout_liquid`)

Only actual contained liquid from cleaning concrete delivery/placing equipment or batching. EPA describes separate management of washwater and solids; record contained volume, alkalinity/contaminants, recycling and destination. Its later direct release, if any, belongs under the environmental boundary, not as an assumed discharge.

- Selected flow: Alkaline concrete washout liquid
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

###### Settled concrete washout solids (`washout_solids`)

Only actual settled/hardened concrete washout solids removed from containment. Record water content and residue composition, mass and reuse/disposal destination; do not count the same water again as both liquid waste and wet-solid moisture.

- Selected flow: Settled concrete washout solids
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

###### Construction dewatering water sent for treatment (`dewatering_transfer`)

Only actual liquid transferred off site for treatment, with origin, characterization and destination documented. Groundwater abstraction and direct freshwater discharge are distinct flows and quantities. A contaminated-groundwater waste identity is used only if contamination and treatment route actually match; absence of discharge evidence is not a zero-emission assertion.

- Selected flow: Construction dewatering water sent for treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-crow-construction`

###### Spent sodium-bentonite excavation slurry (`spent_bentonite_slurry`)

Only actual bentonite-based slurry removed from the specified underground construction route. Record mineral/additive/water composition, density or measured mass, dewatering, recovered liquid/solid fractions and destination, with a closed balance. Other tunnelling slurries are separate exchanges; no slurry waste is assumed for dry excavation.

- Selected flow: Spent sodium-bentonite excavation slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `hk-dsd-stormwater-2018`

###### Spent mineral lubricating oil (`spent_mineral_oil`)

Only actual separately collected used mineral lubricant. Record contamination and handling destination; neither fresh oil nor general oily sludge is equivalent.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-crow-construction`

###### Corrugated cardboard packaging waste (`carton_waste`)

Only actual removed cardboard from supplied components, with supplier packaging inclusions reconciled and destination recorded.

- Selected flow: Corrugated cardboard packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-crow-construction`

###### Polyethylene packaging film waste (`film_waste`)

Only actual removed polyethylene film with polymer and contamination known. Other polymers, timber crates and other real wastes each need their own atomic row.

- Selected flow: Polyethylene packaging film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; retain the stated configuration, activity and identity conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-crow-construction`

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

### Process: Verification, reinstatement and physical acceptance (`handover`)

Always confirm completeness, functional interfaces, actual geometry, defects and acceptance; testing consumption remains stage-coded under utilities/wastes.

#### Inputs

##### Product flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

#### Outputs

##### Product flows

###### Delivered irrigation and flood control waterworks (`reference_waterworks`)

One completed and accepted physical works at the declared site and project extent, providing its specified irrigation, flood-control or combined function. Its complete configured channel/retention/drainage/control assets and defined interfaces must match the as-built, commissioning and handover records. A work package of materials or a construction service does not fulfil this output.

- Selected flow: Delivered irrigation and flood control waterworks
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `unsd-cpc-3-2025`; `fao-irrigation-system`; `hk-dsd-stormwater-2018`

##### Waste flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

##### Elementary flows

No universal crossing exchange is prescribed in this group. Record any real exchange separately; retained/internal transfers are reconciled within this works.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| direct_subdivision | dataset | First assign receipts, meters, equipment logs and subcontract works directly to this defined delivery and stage. Subdivide joint water-supply, navigation, power or other functions before allocation. If inseparable works serve several beneficiaries/functions, justify an evidenced physical causal driver and denominator, show all recipients and sensitivity; a common area, cost or flow-capacity ratio is not automatically causal. |  |
| manufacture_share_conservation | excavator_manufacture_share; formwork_plywood; steel_support | For each reusable asset retain one persistent same-asset manufacture boundary and documented total service basis. Multiply its real mass/count by the current dimensionless attributed share only when units and configuration match. Across projects, periods, temporary reuse and later reuse, cumulative shares must be no greater than one. Keep forecast versus realized service explicit and reconcile; unknown lifetime/activity denominator remains review, never a per-project reset or an invented lifespan. |  |
| recovery_and_internal_reuse | construction_wastes | Internal cut/fill reuse, recirculated water and recovered formwork are reconciled internal transfers, not co-products or automatic environmental credits. Preserve actual exported soil, scrap and waste quantities and the point of waste/product status change. Do not subtract hypothetical recycling, avoided virgin production or avoided flood loss from the construction result; any separately assessed recovery scenario must state allocation and substitution evidence. |  |

These conservation and direct-attribution rules are modelling controls backed by actual cp_shared_assets/cp records, not prescribed lifetime or allocation factors. Any unresolved beneficiary or lifetime relationship must be reviewed and disclosed in the eventual dataset.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | handover | accepted entity and function | foreground_records | Project/site/asset ids; coordinates and delivery limits; irrigation/flood purpose; inlet/outlet levels; chainage, surveyed sections and gradients; protected/irrigated area definitions; actual storage, conveyance and pump capacities; structures/equipment schedule; test condition/date/results; defects and signed handover | Inspect as-built survey and drawings, approved actual configuration and signed civil/hydraulic/mechanical checks. Confirm one complete usable delivery, including integral drainage, control and accepted interfaces; meter test energy/water under their own protocols. No default dimensions, loads, period or mass. | item; m; m2; m3; m3/s; m | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_earthworks | site_earthworks | site and earth movement | foreground_records | Original site/land condition; topsoil/rock/soil classification and contamination; surveyed excavation/fill and borrow geometry; mass, moisture and actual density basis; internal reuse; compaction tests; temporary diversion/cofferdam/dewatering/removal records | Survey pre/post surfaces and sections, reconcile weighbridge and earthwork logs, and inspect geotechnical/acceptance tests. Measure or certify route-specific density where volume-to-mass is needed; distinguish excavated, loose and compacted volumes. Split different material states and routes; keep retained native earth internal. | kg; m3 | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_materials | banks_drainage | bank, protection and drainage materials | foreground_records | Material specification, origin and supply gate; receipts/returns/stock; rock grading, filter grain distribution, moisture; actual layer/drain/grass area and dimensions; installed mass; geotextile polymer and roll areal mass; field tests and destination | Reconcile delivery weights/certificates to as-built layer/pipe geometry and acceptance. Weigh or use traceable supplier certificates for the same lot; confirm volume/area-to-mass factors and moisture, not a generic density. Preserve actual natural/vegetated, rigid/flexible and filter interfaces. | kg; m2; m3; m | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_concrete | lining_structures | lining and civil structure exchanges | foreground_records | Real mix and admixture identities/concentrations; batch and delivery tickets; component inclusions; actual cast/precast/brick/asphalt/membrane route; installed survey volume/area, mass and losses; reinforcement grade and bar schedule; formwork, joints/seals and curing; tests and returns | Collect stage/lot-specific receipts and installed measurements. For purchased mixes retain upstream manufacture once; for site batching split every real ingredient and direct utility. Use actual geometry and measured/certified density or product mass per area/length, retaining water content and test evidence; no default recipe, yield or lining thickness. | kg; m3; m2; m | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_underground | underground_conveyance | hydraulic underground route | foreground_records | Alignment, shafts, tunnel/jacking sections and ground conditions; excavation method, support and face-control state; actual lining/pipe/steel receipts and placement; actual grout and conditioning recipes, dry powder/water; plant, slurry recovery and accepted geometry | Use excavation/ground-support shift logs, pipe/segment schedules, surveys, actual recipe/meter records and acceptance. Split temporary/permanent material, internal recovery and emitted/transferred outputs. Add route-specific support and treatment units when needed; never transfer a transport-tunnel methodology without hydraulic applicability evidence. | kg; m3; m2; m | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_controls | controls_installation | installed control/pumping components | foreground_records | Actual gate/valve/pump/actuator/sensor/cable models and supplier interface; included motor/base/cabinet/seals; installed quantities, mass/geometry and ratings; water quality, head/flow/level test conditions and commissioning record | Check delivered component schedules, certificates, same-configuration weighing or traceable recorded net mass and installed count/length. Commission real duty, seal/backflow/control operation against project criteria; upstream equipment production and site installation do not overlap. | kg; item; m | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_utilities | site_utilities | actual plant fuel/electricity/oil | foreground_records | Stage and machine id; meter start/end; fuel type, actual supply and fossil share; density/temperature or direct weighed consumption; oil grade; electricity country/voltage/meter point; operation, idle and generator logs; supplier and service inclusions | Meter dedicated construction and testing consumption; reconcile purchases, tank/stock change and returns. Retain each machine/work-stage separately, including compaction, placement/vibration, pumping and actual tunnel operations. kWh to MJ is an energy-unit conversion; fuel volume-to-mass/energy needs real density/heating-value data, not electricity analogy. | kg; L; m3; kWh; MJ | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_water | site_utilities | supply, abstraction and water release | foreground_records | Water source, quality, supplier/country/gate; river/aquifer; intake and return meters; site treatment; tank change/recirculation; rainfall and bypass diversion; volume, temperature/density if conversion; actual receiver and discharge/transfer evidence | Measure supply, direct abstraction, dewatering, recirculation, disposal and actual returns by source and destination; reconcile the site water balance and commissioning stage separately. Sample pollutants where actually present and preserve treatment and concentration/volume data. Separate process-water/waste interfaces from resource/emission flows. | m3; L; kg | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_environment | site_utilities | direct environmental species and site impacts | foreground_records | Substance/CAS, fossil or biogenic origin, medium/submedium, stage and source; measured emission or real engine/control/fuel activity and justified emission factor with citation/uncertainty; dust particle fraction, operations, silt, moisture, weather and control; site land change and noise receptor/time/spectrum | Use calibrated or otherwise quality-controlled monitoring, substantiated engine duty/control-specific emission data or a transparently evidenced calculation. If only a total NOx or TSP value exists, retain its limit and seek actual species/size evidence, rather than assigning it to NO, NO2 or PM10. Missing supported data is an explicit gap, not zero. Noise has separate acoustic metrics, not mass. | kg for mass species; m2 for measured land geometry; acoustic metrics separately | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_waste | construction_wastes | specific waste and recovery outputs | foreground_records | Origin/stage; chemical/material identity and wet/dry state; contamination; measured mass/volume, water/solid separation; internal reuse; actual carrier/recipient and treatment; retained structure removal; packaging inclusions | Weigh or meter each segregated output with actual manifests/tickets and destination. Close washout and slurry liquid/solid balances, distinguishing waste transfer from final environmental release; characterize excavated soil and separate rock. Include actual enabling demolition only for its defined replacement scope and avoid automatic recycling credits. | kg; m3 | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_transport | site_utilities | actual transport service | foreground_records | Consignment/material identity; supplier gate; actual weighed cargo; vehicle/load and route; leg distance; empty return allocation; site/recipient; product/service inclusions | Compute each actual truck leg from traceable cargo and route records with kg to t conversion, retaining loading and return evidence. Different vessel, rail or hydraulic transport modes require their own service rows and properties; no nominal universal haul distance. | kg; t; km; t*km | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |
| cp_shared_assets | site_utilities | joint manufacture and reused components | foreground_records | Persistent asset id and same delivered configuration; actual net mass/count and manufacturing dataset scope; full deployment/reuse ledger; current attributable activity; evidenced total service basis/justified forecast; all receiving projects/periods and shares; cumulative used/remaining share and revisions | Use traceable same-configuration weighing/certificates for the asset, then evidence the dimensionless attribution through complete cross-project activity history and service denominator. Check sum of shares no greater than one and later reconcile forecasts; unknown physical denominator or manufacture scope stays review. Meter operation independently from manufacture. | kg; item; dimensionless share | Each lot, work shift/meter interval, waste/transport event and actual commissioning/handover | Complete actual enabling-to-handover period; record dates and unmetered gaps, with prior/removal stages separately tagged | Declared whole works and all attributable subcontract/supply interfaces | per declared reference flow | Calibration/traceable certificates, original tickets/logs, surveys, signed checks, uncertainty and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| delivery_reconciliation | all inventory rows | Keep each attributable exchange total in its declared row unit per declared reference flow. Reconcile receipts, returns, remaining stock, installed quantity, actual losses and outgoing streams for each material; retain internal cut/fill and water recirculation separately. No default mixture, waste ratio, density, dimensions or lifespan. If a campaign has several independent accepted works, use documented direct subdivision or justified allocation before reporting one delivery. | cp_earthworks; cp_materials; cp_concrete; cp_underground; cp_controls; cp_utilities; cp_water; cp_waste; cp_acceptance | exchange total per declared reference flow | `usbr-crow-construction` |
| preserve_numerator_units | site_diesel; electricity_lv_cn; electricity_mv_cn; electricity_other; road_freight; membrane_hdpe | Maintain the one-works denominator. Convert raw electricity kWh to MJ using 3.6 MJ/kWh; preserve the public Net calorific value property. For road legs multiply actual payload in t by actual km, documenting returns. Other mass/volume/area/count conversions use the actual measured/certified density, geometry or unit mass in cp records; do not replace public reference properties. Keep raw and converted values with uncertainty. | cp_utilities; cp_transport; cp_concrete | same-unit exchange total per declared reference flow |  |
| asset_attribution | excavator_manufacture_share; formwork_plywood; steel_support | This rule applies to included machinery manufacture, reused formwork and reusable temporary steel support only. Manufacturing contribution equals actual same-configuration asset mass or count multiplied by the documented dimensionless current share. Permanent delivered steel support instead retains its actual full received/installed material quantity. Keep the complete numerator and evidenced total service/activity denominator, all recipients and periods; cumulative share cannot exceed one. Forecast service is explicit and reconciled, not a fixed life. This attributes an input asset to one delivered works; it does not convert the waterworks reference to kg. | cp_shared_assets | attributed asset input per declared reference flow |  |
| environmental_quantification | diesel_co2; diesel_co; diesel_no; diesel_no2; diesel_so2; exhaust_pm25; earthworks_dust_pm10; water_release_fresh; initial_filling_biogenic_co2; initial_filling_biogenic_ch4 | Retain actual measured species/release totals or explicit actual-activity times substantiated route/engine/control-specific factors in cp_environment/cp_water with source, unit and uncertainty. Fuel carbon balance requires real fossil carbon and oxidation evidence; it supplies no NOx split or PM factor. Pollutant mass from liquid requires measured concentration and corresponding actual discharged volume with compatible units. Do not take historical TSP/area defaults as PM10, infer zero from missing data, or add nested PM sizes twice. | cp_environment; cp_water; cp_utilities | supported direct release per declared reference flow | `epa-construction-dust-1995`; `epa-concrete-washout-2012`; `ipcc-flooded-land-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| geometry_function | reference_waterworks | Project extent, actual function, measured chainage/sections/areas/volume/capacity and acceptance record must describe the same completed configuration. A material quantity or fee is not the civil entity. | cp_acceptance; signed as-built survey and tests |
| route_completeness | dataset | Check every actual enabling, earth/bank/lining, underground, pumping/control, temporary-removal and test stage, including subcontractors. Every significant missing activity or exchange is named and quantified/disclosed before downstream completeness is claimed. | cp_earthworks; cp_underground; cp_controls; actual method statements |
| measured_properties | all inventory rows | Keep calibrated measurements or traceable equivalent records, actual property/units, component state, moisture/concentration, conversions and uncertainties. No invented default engineering quantity, recipe, operating intensity or service life. | calibration, receipts, batch certificates and survey |
| representativeness | dataset | Record actual geography, construction dates/season, technology, soil/water conditions, supply mixes and subcontract scopes. USBR/FAO/Hong Kong descriptions are qualitative route evidence with stated historical/local limits, not current universal approval or quantitative defaults. | dated project records; source limitations |
| identity_completeness | dataset | Report unresolved flow identities, factor needs, environmental/land/noise limitations, omitted upstream and later phases and effect on interpretation. Audit official Chinese names and shared row/rule ids. Technical passing does not close scientific review. | identity audit, cp_environment and boundary ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| entity_and_acceptance | reference_waterworks | Require one physically accepted works with matching project id, site, delivered configuration, as-built geometry, inlet/outlet limits and documented irrigation/flood-control purpose. Declare real irrigated/protected area, flow/head/storage/pump capacity and test conditions where relevant. These qualifiers do not prove future flood performance, crop yield, regulatory approval or a service lifetime. | `unsd-cpc-3-2025`; `hk-dsd-stormwater-2018` |
| basis_and_physical_units | all inventory rows | Reference output is 1 item and every exchange/protocol aggregate is per declared reference flow for that same whole delivery. Surveyed lengths, areas, volumes and installed capacities are qualifiers or documented supplemental metrics, not silent denominator changes. Confirm public property, unit group and actual numerator conversions; do not make Mass, Volume, Area, Count or energy interchangeable, and do not invent an overall works mass. |  |
| materials_and_waste_balance | lining_structures; underground_conveyance; construction_wastes | Reconcile delivery/returns/stock/installation/removal for each concrete, soil, rock, reinforcement and other specific exchange; record real mix/concentration, density and wet/dry basis where conversions occur. Keep temporary recovery and excavated native material distinct. Validate containment and destinations of washout/dewatering/slurry, and do not duplicate liquid water with wet-residue moisture. | `epa-concrete-washout-2012`; `usbr-crow-construction` |
| identity_and_emission_conditions | site_utilities | Check each adopted identity against exact substance, fossil/biogenic origin, route/state, country, voltage, supply gate and medium/submedium, with referenceToReferenceFlowProperty and support units. NO is not NO2/N2O; an NOx equivalent is not a species. PM nested fractions are not summed. Only measured or explicitly supported factor-derived releases are admissible. Missing identity, measurement, factors or omitted significant operations remains disclosed review/incomplete data, not proof of database absence or zero burden. | `epa-construction-dust-1995` |
| hydraulic_civil_completeness | dataset | Review the actual channel/bank/retention/culvert/tunnel/pump/control route against drawings and signed checks: alignment/levels/sections, ground conditions, filters/drains, joints/leakage, compaction, lining/structure quality, water-control operation, clearance and reinstatement as applicable. Use current project-specific acceptance evidence; historical guides do not impose universal geometry, strength, mix, water quality, life or legal approval. Missing integral drainage, control, support or treatment cannot be hidden by choosing a smaller easy route. | `fao-irrigation-system`; `usbr-canal-concrete-2017`; `hk-dsd-stormwater-2018` |
| allocation_and_disclosure | dataset | Check full receiving-population and reusable-asset ledgers, no more than one cumulative manufacture share, no duplicated material/service/combustion, and separate later lifecycle scenarios. Scientific review and unresolved identities are explicit prerequisites for reviewed use; a candidate projection/measurement check is a technical consistency result, not methodology approval or publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground construction-to-handover dataset for one complete configured irrigation/flood-control works |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Link as the declared construction module in an LCA of the same physical works and compatible purpose/geometry/configuration, with upstream and later phases separately modelled and all gaps disclosed. Comparisons require matching function, extent, quality and boundaries, not item-count equality alone. |
| excluded_use | Complete cradle-to-gate/whole-life claim without verified added coverage; annual irrigation service or crop output; generalized flood avoidance benefit; standalone supply/nav/dam/pipeline/plant manufacture; universal per-kilometre, per-area or per-capacity coefficient; reviewed/publication claim from a candidate. |
| required_metadata | All reference qualifiers; site coordinates/country; complete as-built/retained asset and route schedule; construction/test/handover dates; measured geometry/function/capacity; supply gates and linked datasets; properties/units/conversions; protocols; waste/treatment and water/environment interfaces; attribution/asset ledger; actual acceptance evidence. |
| required_quality_disclosure | Measured versus factor-derived/estimated values, uncertainty, unmetered periods, actual route/material state, unresolved identities, missing upstream/significant work, direct-emission/land/noise gaps, temporal/geographic limits and excluded operation/maintenance/renewal/demolition; scientific-review and translation states. |
| update_trigger | Changed purpose, extent/interface, actual structure/lining/ground/underground route, delivered pumping/control configuration, measured quantities, fuel/grid/water supplies, attribution or waste destination; corrected identity/evidence/geometry; inclusion of additional lifecycle stages. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF pp.279–280; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Semantic purpose and adjacent-category interfaces only; it does not define a construction recipe, life or methodology approval. |
| fao-irrigation-system | handbook | FAO, Irrigation Water Management: Training Manual No.1, Introduction to Irrigation, Chapter 5, §§5.1–5.4; retained historical chapter, https://www.fao.org/4/r4082e/r4082e06.htm | Irrigation intake, canals, control, pumping and drainage functions; unlined/lined route options. Descriptive history only; no example dimensions, cost, efficiency, slope or life is transferred. |
| usbr-crow-construction | official_guidance | US Bureau of Reclamation, Crow Irrigation Project, Construction Activity Descriptions, original page last updated 24 June 2020; Bench Flumes, Headworks/Diversion Dams, Inverted Siphon, Wasteway, Automated Structures; https://www.usbr.gov/gp/nepa/cip/activity_descriptions.html | Actual case process decomposition: excavation/backfill, temporary water control, concrete/reinforcement, membranes, riprap and control fitting. Case-specific rehabilitation descriptions do not mandate dams, machinery, material quantities or default plant manufacture. |
| usbr-canal-concrete-2017 | handbook | US Bureau of Reclamation, Canal Operation and Maintenance: Concrete Lining and Structures, November 2017, §2.2 printed p.3/PDF p.9; §6.2 printed pp.27–28/PDF pp.33–34; https://www.usbr.gov/assetmanagement/docs/Canal_Concrete.pdf | Retained qualitative placing/consolidation/curing and configuration-dependent quality context; repair/maintenance guidance, not a universal new-construction mix, curing duration, strength or lifetime. |
| hk-dsd-stormwater-2018 | handbook | Hong Kong Drainage Services Department, Stormwater Drainage Manual, Fifth Edition, January 2018; §§13.1–13.7 printed/PDF pp.73–79, §14.1–14.2 pp.82–83, §16.4.2 p.109; https://www.dsd.gov.hk/EN/Files/Technical_Manual/technical_manuals/SDM_2018_5th.pdf | Flood channel rigid/flexible/vegetated routes, integral protection, filters/drains, polder storage/pumping and actual underground-route considerations. Retained Hong Kong edition: no numeric design criteria or current regulatory compliance/approval is imported; project authorities/specifications govern actual acceptance. |
| epa-construction-dust-1995 | official_guidance | US EPA, AP-42 §13.2.3 Heavy Construction Operations, January 1995, printed 13.2.3-1–2/PDF pp.1–2; https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Historical source limitations and operation-specific dust accounting; no area/month TSP value or unsupported PM10 factor is adopted. |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice: Concrete Washout, EPA-833-F-11-006, February 2012, PDF pp.1–2; https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Separate contained washout liquid and solids, actual recycling/treatment and water-release boundaries; no mandatory emission, pH threshold or compliance claim. |
| ipcc-flooded-land-2019 | official_guidance | IPCC, 2019 Refinement to the 2006 Guidelines, Volume 4 Chapter 7 Wetlands, §7.3 and Table 7.7, printed pp.7.6–7.7/PDF pp.6–7; https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch07_Wetlands.pdf | Initial-filling/constructed-waterbody greenhouse-gas pathway review, actual baseline/time/site and avoidance of duplicate carbon accounting. Flooded-land definitions and seasonal-floodplain exclusions matter; no national annual default emission factor or automatic release is transferred to construction/testing. |
