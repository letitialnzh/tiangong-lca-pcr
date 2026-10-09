---
pcr_id: pcr.constructions-and-construction-services.constructions.mine-facility-construction-delivery
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Mine facility construction and physical delivery

## 1. Scope and Applicability

This PCR governs the construction and accepted physical delivery of non-building mining facilities: winding shafts and towers/headframes, mine tunnels, drifts and declines, and mine loading/discharging stations with their integral civil, support and permanent installation interfaces. An actual engineered open-pit access/initial mine-working facility is also in scope when its separately accepted physical extent and mining function are demonstrated. These are facilities associated with mining, not a construction service or a tonne of ore. Sources: `unsd-cpc-3-2025`; `wa-ground-control-2019`.

A dataset defines one complete facility or integrated mine-access/materials-handling delivery unit from actual design, as-built survey and acceptance records. Underground access, headframe and loading-station routes must not be replaced by a simpler unrelated structure. A contract section is a reference entity only if its complete functional interfaces and independently accepted extent are documented; do not choose an arbitrary metre of shaft, construction shift or minor component to bypass missing work.

Exclude buildings, public transport tunnels, independent power plants and manufacturing/chemical plants, independently delivered roads/pipelines, machinery/material manufacture sold separately, routine ore extraction/processing and mining services. Include genuinely integral mine-access and loading interfaces, with an asset/interface schedule preventing overlap. For rehabilitation, disclose retained assets, condition, removal and new work; do not charge their original manufacture again without an explicit attributed prior-asset boundary.

The principal boundary is actual construction-to-accepted-handover. Bought-material/equipment production, external transport, site construction, subsequent mine operation/maintenance/renewal, and closure/demolition/disposition are distinct stages. Upstream burden is linked only from verified compatible datasets; the foreground alone establishes neither complete cradle-to-gate nor whole life. Literature supplies route context, not universal recipes, dimensions, equipment necessity, quantities, lifespan, loads, emissions or compliance approval.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.mine-facility-construction-delivery |
| classification_refs | CPC 3.0 53261; Mining constructions |
| covered_products | Accepted non-building mine shafts/headframes, mining tunnels/drifts/declines and loading/discharging facilities, or a documented integral combination; actual engineered initial open-pit facilities with established mining scope and handover. |
| excluded_products | Exclude buildings, public transport tunnels, independent power plants and manufacturing/chemical plants, independently delivered roads/pipelines, machinery/material manufacture sold separately, routine ore extraction/processing and mining services. Include genuinely integral mine-access and loading interfaces, with an asset/interface schedule preventing overlap. For rehabilitation, disclose retained assets, condition, removal and new work; do not charge their original manufacture again without an explicit attributed prior-asset boundary. |
| representative_product | One actual independently accepted mine-access or materials-handling facility at its stated site, geology, geometry, configuration and completion status; no numeric exemplar is presumed. |
| production_route | Actual site enabling; selected underground/open-pit opening and muck route; actual batching/support/lining; relevant collar/headframe/station civil structures; permanent equipment installation; construction utilities/wastes; testing and handover. |
| market_state | Complete accepted mining civil facility at the documented site and interfaces, with permanent equipment inclusions and remaining dependencies stated. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the defined physical mine-access/winding/loading facility ready for its documented function at handover. |
| How much | One complete accepted delivery unit; surveyed shaft depth/diameter, drift length and cross-section, decline gradient, initial pit extent, tower height/geometry, station extent and actual handling interface/capacity are required where relevant, never defaults. |
| How well | Actual geotechnical, structural, hydraulic, ventilation and mechanical/electrical acceptance criteria and test conditions under cp_acceptance; retain ground/water conditions and installed support. Do not infer mining licence, production performance or universal safety approval. |
| How long or cycle | One actual construction/commissioning-to-handover cycle with start/end/test dates. Later service life and operating period require separately evidenced scenarios and are not prescribed. |
| reference_flow_link | reference_mine_facility |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete mine facility delivery unit |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site/project and facility identity; mine type and actual geology/hydrogeology; actual construction route; complete spatial and functional extent; shaft/drift/pit/tower/station geometry where applicable; support/lining and permanent equipment configuration; material/fuel/water states; measured handling/access/ventilation/water-control function and test criteria; as-built survey and acceptance state/dates; retained/removed assets; construction/upstream/transport/later-phase interfaces; shared asset/ore-development attribution; omitted/unresolved environmental and identity coverage |

All required qualifiers belong in dataset metadata, reference-flow description or equivalent records. Here item is a display alias for the public Item(s) counting unit. Measured length/area/volume/capacity characterizes the same complete facility; a different facility or route is not interchangeable solely because its count is one. No mass or service duration is implied.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use cp_acceptance to confirm one complete accepted facility with the same documented configuration and extent. Every row is per declared reference flow; measured geometry and capacity are qualifiers, not alternative denominators. No whole-facility or per-metre mass is invented. |
| material_state | imported_fill; emulsion_explosive; anfo; non_electric_detonator; inert_excavation_rock; sulfide_excavation_rock; excavated_soil; portland_cement; natural_sand; crushed_stone; pce_admixture; rock_bolt; steel_mesh; reinforcing_bar; structural_steel; formwork_plywood; steel_loading_hopper; diesel; treated_process_water; mineral_lubricant; excavator_asset; drill_asset; crane_asset; fossil_co2; nitrogen_monoxide; nitrogen_dioxide; pm25; pm_2_5_10; pm_unspecified; washout_solids; concrete_waste; steel_offcut; used_lubricating_oil | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain actual lot state, composition, moisture and inclusion boundary. Count/volume/area/length to mass requires actual same-lot unit mass, density, areal mass or geometry and associated material density. No generic 1 kg machine or default density/recipe is used. |
| fresh_volume | purchased_concrete; purchased_shotcrete; purchased_grout; site_concrete; site_shotcrete; site_grout | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use actual measured fresh received/batched/placed volumes, preserving batch formulation, entrained air, returns, rebound and hydration state. Mass conversion requires corresponding fresh density; do not substitute hardened volume, dry powder mass or a whole-works mass. |
| treated_water_mass | treated_process_water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve the public treated-water Mass/kg identity and obtain actual same-water measured density at the documented temperature and composition when raw records are volumetric. Keep the raw volume balance; no default density. |
| water_state | untreated_supplied_water; groundwater_abstraction; freshwater_release; seawater_release; dewatering_transfer; washout_liquid | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter each liquid stream at its actual source/destination and retain raw volume balance. treated_process_water has a public Mass property: preserve it using independently measured same-water density, not a rewritten Volume identity. Resource withdrawal, supplied water, internal reuse, waste transfer and direct release remain distinct. |
| energy_property | electricity_lv_cn; electricity_mv_cn; electricity_other | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the Net calorific value reference property and energy unit group. Convert kWh to MJ with 3.6 MJ/kWh; this does not assign a fuel heating value. Raw fuel litre-to-kg or kg-to-MJ conversions need actual fuel density/heating value and state. |
| component_length | hdpe_drain_pipe; low_voltage_cable | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Retain actually received/installed length and actual cross-section, cores, wall thickness, joints and offcuts. Public cable Length is not rewritten as Mass; any supplemental mass needs the actual matching measured/certified unit mass. |
| freight_work | road_freight | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | Use actual payload in tonnes multiplied by actual leg distance in km, retaining empty-return and allocation conditions under cp_transport; 1000 kg = 1 t, with no default haul distance. |

### Flow-property and unit-group support relations

| Flow property | Unit group | Public reference unit |
| --- | --- | --- |
| Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` | m3 |
| Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` | MJ |
| Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` | Item(s) |
| Length `838aaa23-0117-11db-92e3-0800200c9a66` | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` | m |
| Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | Units of goods transport `838aaa21-0117-11db-92e3-0800200c9a66` | t*km |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual surveyed site, geology, groundwater and prior/retained mine assets; defined supplier material/equipment gates and temporary access/dewatering/ventilation interfaces before construction. |
| starting_condition_role | foreground construction starting interface; upstream manufacture and prior assets are separate |
| product_classification_scope | Non-building mining facilities, CPC 3.0 53261 context; integral structures require a non-overlapping applicability decision, not automatic inheritance of all mine assets. |
| recursive_input_rule | Incoming same-category facility or retained mining component is recorded at its actual interface with attributed prior burden and compatible dataset; do not recursively reproduce its construction or convert a whole mining operation into a new construction input. |
| upstream_dataset_requirement | Link actual material/component/plant production, external freight and waste treatment only where supplier, geography/time, product state, configuration, property and boundary match. Report unlinked burdens and check overlap explicitly. |
| disclosure | Disclose construction phases and route, all starting/ending gates, prior assets, subcontract interfaces, upstream coverage, temporary plant attribution, ore-development separation and later phases excluded or separately modelled. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| construction_delivery | dataset | Collect actual enabling, opening/excavation, support/lining, civil structures, permanent installation and all testing/rework to the documented handover. Mechanical/raise-bore/blast routes and open-pit geometry are conditional on real works. The Platreef case is route context, not a required shaft size or timetable. | `unsd-cpc-3-2025`; `wa-ground-control-2019`; `platreef-shaft-case-2025` |
| stage_interfaces | all inventory rows | Separate purchased mixtures from their site-batched alternatives and keep internal batching-to-installation links. Do not count powder/aggregate manufacture twice through both ingredients and a purchased complete mix. Preserve external transport and site operation overlap checks for complete subcontract services. | `epa-concrete-washout-2012` |
| mining_transition | mine_excavation; handover | Separate facility construction/development from routine mineral extraction, processing and later mine ventilation/dewatering. Where construction exposes recoverable ore, preserve actual assay, mass, destination and contemporaneous construction/production activities; add each real ore output separately and review allocation. Do not treat saleable development rock automatically as waste or all production as construction. | `platreef-shaft-case-2025`; `ifc-mining-2007` |
| later_life | dataset | Operation/maintenance, support renewal, later mine expansion, closure, demolition, long-term drainage and final disposition are outside the core handover result. If requested, model them as distinct evidenced stages with real service periods, quantities and destinations; never assume a universal life or declare whole life from this core. | `ifc-mining-2007` |
| environmental_routes | site_utilities; construction_waste | Identify actual abstraction, pumped inflow, rainfall, process water, reuse, evaporation, liquid transfer and recipient-specific release. Add significant real gas, dissolved substance and size-specific particulate exchanges separately using matching public identities where verified. Land transformation, noise, vibration and occupational dust metrics require actual location/time and appropriate methods; absence of a row is not zero impact. | `ifc-mining-2007`; `epa-concrete-washout-2012` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| site_enabling | Site definition and enabling works | required | Define the actual site/retained assets and perform the real survey, access, clearing, stripping and temporary arrangements; do not assume that every earthwork is needed. | foreground_production | per declared reference flow |
| mine_excavation | Mine opening excavation, drilling, blasting and muck removal | conditional | When new shafts, mine tunnels/drifts, declines or engineered open-pit access/initial workings form part of the delivery; record mechanical, raise-bore, drill-and-blast or combined route actually used. | foreground_production | per declared reference flow |
| site_batching | Actual on-site cementitious batching | conditional | Only when concrete, shotcrete or cement grout is actually mixed inside the boundary; each actual formulation is separately reconciled. | foreground_production | per declared reference flow |
| ground_support | Geotechnical support, shaft lining and drainage installation | conditional | Where actual ground-control design requires support, reinforcement, shaft lining, grouting or drainage; no universal support pattern is prescribed. | foreground_production | per declared reference flow |
| civil_structures | Headframes, foundations and loading/discharging civil structures | conditional | When headframes/winding towers, shaft collars, foundations or non-building loading/discharging structures belong to the accepted mine facility. | foreground_production | per declared reference flow |
| permanent_installation | Permanent winding and materials-handling installation | conditional | Include the actual permanent winding, loading, unloading, conveyor and power interfaces in the delivery schedule; do not assume all facilities have all devices. | foreground_production | per declared reference flow |
| site_utilities | Stage-tagged utilities, temporary plant and environmental exchanges | required | Inspect actual energy, supply water, abstraction/dewatering, temporary ventilation/pumping/hoisting and construction plant for every included stage; rows occur only when evidenced. | foreground_production | per declared reference flow |
| construction_waste | Construction waste characterization and transfer | required | Inspect each actual construction and commissioning waste stream, including waste status, composition, hazardous character and destination. | foreground_production | per declared reference flow |
| handover | Testing, reinstatement and accepted physical handover | required | Verify the complete delivered facility, surveyed extent, functionality, defects, test consumption and handover documentation. | delivery | per declared reference flow |

These blocks are accounting responsibilities, not a mandatory recipe. Utilities and waste are stage-tagged once for their originating work; field readings remain process-specific. Complete subcontract services require overlap checks before separate material/fuel/plant inputs are added. Extend the map and atomic rows for every significant actual unlisted operation or stream before claiming dataset completeness.

### Process: Site definition and enabling works (`site_enabling`)

Define the actual site/retained assets and perform the real survey, access, clearing, stripping and temporary arrangements; do not assume that every earthwork is needed.

#### Inputs

##### Product flows

###### Uncontaminated natural soil fill (`imported_fill`)

Only actual imported fill for integral access, collars or station foundations; retain soil class, moisture and compaction records. Internal cut/fill is not a purchased input.

- Selected flow: Uncontaminated natural soil fill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_earth, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_earth`
- Sources: `wa-ground-control-2019`

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

### Process: Mine opening excavation, drilling, blasting and muck removal (`mine_excavation`)

When new shafts, mine tunnels/drifts, declines or engineered open-pit access/initial workings form part of the delivery; record mechanical, raise-bore, drill-and-blast or combined route actually used.

#### Inputs

##### Product flows

###### Emulsion Explosive (`emulsion_explosive`)

Only the actually used sensitized ammonium-nitrate water-in-oil emulsion explosive matching this public identity; retain product lot, actual formulation, charge mass and detonation record. This is not an assumed blasting requirement, nor an authorization to blast.

- Selected flow: Emulsion Explosive `eb58ee82-ee46-4306-baef-51dfef1d1ccc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_blast, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blast`
- Sources: `platreef-shaft-case-2025`; `ifc-mining-2007`

###### Ammonium nitrate and fuel oil blasting explosive (`anfo`)

Only actual ordinary ANFO, with measured formulation and charge records. Do not use the expanded-ammonium-nitrate candidate containing nitromethane or aluminium as its identity. Other explosives need their own rows.

- Selected flow: Ammonium nitrate and fuel oil blasting explosive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_blast, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blast`
- Sources: `platreef-shaft-case-2025`

###### Non-electric shock-tube blasting detonator (`non_electric_detonator`)

When this exact initiation device is used; record actual number and lot-specific unit mass, not the mass of its bulk explosive.

- Selected flow: Non-electric shock-tube blasting detonator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_blast, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blast`
- Sources: `platreef-shaft-case-2025`

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Waste flows

###### Non-acid-generating excavated rock (`inert_excavation_rock`)

Actual exported excavation rock demonstrated non-acid-generating by project geology and characterization; internal reuse is reconciled separately. No ore, gangue or tailings identity is assumed.

- Selected flow: Non-acid-generating excavated rock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_earth, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_earth`
- Sources: `ifc-mining-2007`; `platreef-shaft-case-2025`

###### Potentially acid-generating sulfide excavation rock (`sulfide_excavation_rock`)

Only physically separate sulfide-bearing excavation rock evidenced as potentially acid-generating; track containment and destination. Acid and dissolved-metal releases need actual chemistry and release evidence, not automatic emissions.

- Selected flow: Potentially acid-generating sulfide excavation rock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_earth, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_earth`
- Sources: `ifc-mining-2007`

###### Uncontaminated excavated soil sent off site (`excavated_soil`)

Only actual exported soil, with contamination test, moisture and waste/product status. Segregate removed topsoil retained for reinstatement.

- Selected flow: Uncontaminated excavated soil sent off site
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_earth, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_earth`
- Sources: `ifc-mining-2007`

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

### Process: Actual on-site cementitious batching (`site_batching`)

Only when concrete, shotcrete or cement grout is actually mixed inside the boundary; each actual formulation is separately reconciled.

#### Inputs

##### Product flows

###### Cement, portland cement (`portland_cement`)

Use only actual grey powdered Portland cement at its factory production gate. Record binder grade and supplier; separately add real transport and on-site mixing. Do not use this identity for grout, fresh concrete, slag binder or a cementitious basket. Its public CPC label describes concrete articles and conflicts with the explicit powder name/route/comment: retain that discrepancy for review and require actual supplier powder identity, rather than relying on the classification label.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_batch, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_batch`
- Sources: `wa-ground-control-2019`; `epa-concrete-washout-2012`

###### Washed natural silica sand (`natural_sand`)

Only this actual sand used in the recorded mix; preserve grading, source and moisture, including water carried by the sand.

- Selected flow: Washed natural silica sand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_batch, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_batch`
- Sources: `wa-ground-control-2019`; `epa-concrete-washout-2012`

###### Graded crushed natural stone aggregate (`crushed_stone`)

Record actual crushed-stone aggregate by geology, size, moisture and supplier; alternative recycled aggregate is a separate flow, never this identity.

- Selected flow: Graded crushed natural stone aggregate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_batch, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_batch`
- Sources: `epa-concrete-washout-2012`

###### Aqueous polycarboxylate concrete superplasticizer (`pce_admixture`)

Only if the actual concrete/shotcrete recipe uses this formulation; record concentration, supplier and wet mass. Do not infer a dosage or substitute accelerator, resin or dry active mass.

- Selected flow: Aqueous polycarboxylate concrete superplasticizer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_batch, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_batch`
- Sources: `epa-concrete-washout-2012`

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

#### Outputs

##### Product flows

###### Fresh site-batched Portland cement concrete (`site_concrete`)

An internal output only when this exact material is made on site. Reconcile measured fresh batch volume and actual formulation to installation; do not add a second upstream fresh-mixture dataset or count the internal transfer as an external delivery.

- Selected flow: Fresh site-batched Portland cement concrete
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_batch, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_batch`
- Sources: `wa-ground-control-2019`; `epa-concrete-washout-2012`

###### Fresh site-batched wet-mix shotcrete (`site_shotcrete`)

An internal output only when this exact material is made on site. Reconcile measured fresh batch volume and actual formulation to installation; do not add a second upstream fresh-mixture dataset or count the internal transfer as an external delivery.

- Selected flow: Fresh site-batched wet-mix shotcrete
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_batch, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_batch`
- Sources: `wa-ground-control-2019`; `epa-concrete-washout-2012`

###### Fresh site-batched Portland cement grout (`site_grout`)

An internal output only when this exact material is made on site. Reconcile measured fresh batch volume and actual formulation to installation; do not add a second upstream fresh-mixture dataset or count the internal transfer as an external delivery.

- Selected flow: Fresh site-batched Portland cement grout
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_batch, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_batch`
- Sources: `wa-ground-control-2019`; `epa-concrete-washout-2012`

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

### Process: Geotechnical support, shaft lining and drainage installation (`ground_support`)

Where actual ground-control design requires support, reinforcement, shaft lining, grouting or drainage; no universal support pattern is prescribed.

#### Inputs

##### Product flows

###### Steel mechanical expansion rock bolt (`rock_bolt`)

Only actual mechanical-expansion steel rock bolts required by the geotechnical design, with installed number, alloy, diameter, length and lot-specific mass. Resin/grouted anchors require separate resin/grout and appropriate bolt identities.

- Selected flow: Steel mechanical expansion rock bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_support, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support`
- Sources: `wa-ground-control-2019`

###### Welded carbon-steel ground-support mesh (`steel_mesh`)

Only the installed mesh of the actual steel grade, wire diameter, opening, coating and mass; recovered temporary mesh follows the asset ledger.

- Selected flow: Welded carbon-steel ground-support mesh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_support, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support`
- Sources: `wa-ground-control-2019`

###### Fresh delivered wet-mix shotcrete (`purchased_shotcrete`)

Only supplier-mixed wet shotcrete crossing the site gate. Keep actual recipe, fibre/admixture content and rebound; site-batched shotcrete is instead linked internally to site_batching.

- Selected flow: Fresh delivered wet-mix shotcrete
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_support, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support`
- Sources: `wa-ground-control-2019`

###### Fresh delivered Portland cement grout (`purchased_grout`)

Only actual delivered fresh grout, with cement/water/additive recipe and placed quantity. Site-prepared grout uses the internal site_batching balance. Other chemical injection routes need separate substances.

- Selected flow: Fresh delivered Portland cement grout
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_support, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support`
- Sources: `wa-ground-control-2019`

###### Perforated HDPE mine drainage pipe (`hdpe_drain_pipe`)

Only actual installed drainage pipe with resin, perforation pattern, diameter, wall thickness and length; record fittings separately if material.

- Selected flow: Perforated HDPE mine drainage pipe
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Collect the actual attributable quantity in this row unit using cp_support, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support`
- Sources: `wa-ground-control-2019`

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

### Process: Headframes, foundations and loading/discharging civil structures (`civil_structures`)

When headframes/winding towers, shaft collars, foundations or non-building loading/discharging structures belong to the accepted mine facility.

#### Inputs

##### Product flows

###### Fresh delivered ready-mixed structural concrete (`purchased_concrete`)

Only external fresh structural mix for collars, foundations, shaft linings or non-building station structures; actual strength/exposure recipe, delivered volume, placement, curing and waste are recorded. Site batching is accounted separately.

- Selected flow: Fresh delivered ready-mixed structural concrete
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_civil, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_civil`
- Sources: `platreef-shaft-case-2025`; `epa-concrete-washout-2012`

###### Non-alloy reinforcing steel bar (`reinforcing_bar`)

Only actual reinforcing bar of the documented grade and delivered form; reconcile mill certificates, measured bar mass, cut schedules and offcuts.

- Selected flow: Non-alloy reinforcing steel bar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_civil, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_civil`
- Sources: `platreef-shaft-case-2025`

###### Fabricated low-alloy structural steel headframe member (`structural_steel`)

Only actual fabricated headframe/station member, with grade, coating, geometry, joints and inclusion of fabrication declared; upstream tube-feedstock steel is not this finished member.

- Selected flow: Fabricated low-alloy structural steel headframe member
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_civil, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_civil`
- Sources: `platreef-shaft-case-2025`

###### Film-faced construction formwork plywood (`formwork_plywood`)

Only actual plywood formwork, with coating, panel size, mass, reuse and losses. Manufacture is attributed from one persistent asset ledger; consumptive damage/replacement and final destination are separate.

- Selected flow: Film-faced construction formwork plywood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_assets, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `platreef-shaft-case-2025`; `epa-concrete-washout-2012`

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

### Process: Permanent winding and materials-handling installation (`permanent_installation`)

Include the actual permanent winding, loading, unloading, conveyor and power interfaces in the delivery schedule; do not assume all facilities have all devices.

#### Inputs

##### Product flows

###### Complete electric mine winding machine (`mine_winder`)

Include the actual permanent winder of stated drum/drive/braking/control configuration when handed over with the shaft. Record supplier manufacturing interface and installation/testing separately; temporary sinking winders follow the asset ledger.

- Selected flow: Complete electric mine winding machine
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable quantity in this row unit using cp_install, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install`
- Sources: `platreef-shaft-case-2025`

###### Fabricated steel mine loading hopper (`steel_loading_hopper`)

Only actual delivered loading/discharging hopper, with wear lining, steel specification, dimensions and complete supply boundary. No assumed capacity or per-station mass.

- Selected flow: Fabricated steel mine loading hopper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_install, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install`
- Sources: `unsd-cpc-3-2025`; `ifc-mining-2007`

###### Complete electrically driven mine belt conveyor (`belt_conveyor`)

Only an actually installed complete conveyor in the station or mine access works; record belt, drive, support and controls included by supplier and actual dust-control interfaces. A rubber belt or transportation service alone is not the complete machine.

- Selected flow: Complete electrically driven mine belt conveyor
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable quantity in this row unit using cp_install, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install`
- Sources: `unsd-cpc-3-2025`; `ifc-mining-2007`

###### Low-voltage cable (`low_voltage_cable`)

Only actual CN factory-gate low-voltage cable matching GB/T 12706.1-2020 identity and documented voltage not exceeding 1000 V. Retain actual conductor, insulation, sheath, cores, cross-section and length; installation, operating losses and retirement are excluded from the cable identity. Other geography/specification needs another identity.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Collect the actual attributable quantity in this row unit using cp_install, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install`
- Sources: `platreef-shaft-case-2025`

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

### Process: Stage-tagged utilities, temporary plant and environmental exchanges (`site_utilities`)

Inspect actual energy, supply water, abstraction/dewatering, temporary ventilation/pumping/hoisting and construction plant for every included stage; rows occur only when evidenced.

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Actual diesel supplied and consumed by construction machinery, trucks, temporary pumps or hoisting; retain blend, grade, supplier and receiving/consumption stocks. This mass-based foreground identity specifies no provider, refinery, density or heating value. It establishes no upstream inventory or emission factor; measured density is required for volumetric receipts and fossil fraction is measured separately.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_utilities, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `ifc-mining-2007`

###### Alternating current (`electricity_lv_cn`)

Only CN grid-average consumption mix delivered to the actual site user below 1 kV. Preserve its Net calorific value property and energy unit group. Tag ventilation, drilling, pumping, lifting, batching, joining and test meters by stage; prevent duplication with complete subcontract services or the medium-voltage supply.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual attributable quantity in this row unit using cp_utilities, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `ifc-mining-2007`

###### Alternating current (`electricity_mv_cn`)

Only actual CN user-side grid consumption at 1–35 kV, preserving its Net calorific value property. If transformed within the foreground, reconcile incoming electricity, actual transformation losses and internal low-voltage use without counting both incoming supplies.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual attributable quantity in this row unit using cp_utilities, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `ifc-mining-2007`

###### User-side alternating-current electricity at the declared non-CN supply (`electricity_other`)

Only actual supply outside the confirmed CN identities; retain country, voltage, generation/grid route and supply boundary. On-site diesel generation is modelled from fuel, plant and measured outputs, without adding another purchased-grid burden.

- Selected flow: User-side alternating-current electricity at the declared non-CN supply
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual attributable quantity in this row unit using cp_utilities, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `ifc-mining-2007`

###### Process Water (`treated_process_water`)

Only genuinely treated liquid industrial process water at its verified actual supply interface; document supplier, source, treatment, quality and transport/link to site. Preserve Mass/kg. If meters report volume, use same-water measured density at its temperature/composition; no default 1000 kg/m3. Untreated natural water and groundwater pumping are separate.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_water, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`; `epa-concrete-washout-2012`

###### Supplied untreated liquid freshwater (`untreated_supplied_water`)

Only actual untreated freshwater transferred from a technosphere supplier; declare source, quality and site delivery. A natural resource is counted at the abstraction process, not automatically repeated at this purchase interface.

- Selected flow: Supplied untreated liquid freshwater
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_water, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

###### Mineral hydraulic lubricating oil (`mineral_lubricant`)

Only actual mineral oil used for construction plant with documented grade, formulation, additions and changes. Synthetic PAO or insulation oil candidates are not this fluid.

- Selected flow: Mineral hydraulic lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_utilities, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `ifc-mining-2007`

###### Complete hydraulic construction excavator (`excavator_asset`)

Include only the actual identified temporary machine manufacturing contribution. Record its same-configuration measured/certified net mass and evidenced dimensionless current service share across its full supported activity basis. Keep manufacture distinct from operating fuel/electricity and maintenance. Unknown total service remains review; cumulative attribution across projects/periods cannot exceed one.

- Selected flow: Complete hydraulic construction excavator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_assets, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ifc-mining-2007`

###### Complete rock drilling rig (`drill_asset`)

Include only the actual identified temporary machine manufacturing contribution. Record its same-configuration measured/certified net mass and evidenced dimensionless current service share across its full supported activity basis. Keep manufacture distinct from operating fuel/electricity and maintenance. Unknown total service remains review; cumulative attribution across projects/periods cannot exceed one.

- Selected flow: Complete rock drilling rig
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_assets, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ifc-mining-2007`

###### Complete mobile construction crane (`crane_asset`)

Include only the actual identified temporary machine manufacturing contribution. Record its same-configuration measured/certified net mass and evidenced dimensionless current service share across its full supported activity basis. Keep manufacture distinct from operating fuel/electricity and maintenance. Unknown total service remains review; cumulative attribution across projects/periods cannot exceed one.

- Selected flow: Complete mobile construction crane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_assets, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ifc-mining-2007`

###### Road freight transport of mine construction cargo by truck (`road_freight`)

Only real external supplier-to-site and outgoing transport legs not already contained in a complete supplier/subcontract inventory; retain measured payload, distance, vehicle, load/return and origin/destination. Internal mucking energy belongs to its actual equipment, not a duplicate external freight leg.

- Selected flow: Road freight transport of mine construction cargo by truck
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Collect the actual attributable quantity in this row unit using cp_transport, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `ifc-mining-2007`

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

###### ground water (`groundwater_abstraction`)

Only actual liquid groundwater crossing from the natural resource into construction abstraction/dewatering, CAS 7732-18-5, Resources from water / Renewable material resources from water. Record country/aquifer, purpose, actual pumped volume, reuse and destination. No seawater, supplier water, wastewater, vapour or scarcity-class substitution; dewatering is not assumed consumptive use.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_water, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`; `wa-ground-control-2019`

#### Outputs

##### Product flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only actual externally released fossil CO2, CAS 124-38-9, immediate air/unspecified from evidenced construction fuel combustion or an independently evidenced geological release. Retain fossil carbon, oxidation and measured release/activity evidence; fuel presence supplies no universal emission quantity.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_air, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ifc-mining-2007`

###### nitrogen monoxide (`nitrogen_monoxide`)

Only measured or independently supported molecular NO release to immediate air/unspecified, CAS 10102-43-9, from actual construction exhaust or blasting. Internal mine workplace concentration is not external released mass; no NO2, N2O or NOx-equivalent substitution.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_air, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ifc-mining-2007`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only evidenced molecular NO2 immediate air/unspecified release, CAS 10102-44-0, after actual ventilation/control. NOx-as-NO2 is not this molecule, and a misleading N2O4 synonym does not change the definition.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_air, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ifc-mining-2007`

###### particles (PM2.5) (`pm25`)

Only evidenced external-air release of the PM2.5 fraction from actual excavation, handling, exhaust or blasting, air/unspecified. Exclude captured dust and workplace exposure; retain size definition and measurement/factor basis.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_air, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ifc-mining-2007`

###### particles (PM2.5 - PM10) (`pm_2_5_10`)

Only evidenced external-air release of the disjoint PM2.5–PM10 fraction to air/unspecified; do not add total PM10 or total suspended dust without removing overlap and proving the fraction.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_air, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ifc-mining-2007`

###### Particulate matter, particle size unspecified (`pm_unspecified`)

Only actual external particulate release with genuinely unresolved size; this remains an explicit coverage limitation and must not duplicate the quantified PM fractions. Do not label internal dust or a water-borne solids stream as this air release.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_air, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `ifc-mining-2007`

###### Water (`freshwater_release`)

Only actual liquid H2O discharged directly to a freshwater receptor, CAS 7732-18-5, Emissions to fresh water. Record recipient, discharge point/time, volume, treatment and measured chemistry; dissolved species/solids need separate atomic releases. This is not water supply, abstraction, water vapour, saline receptor discharge or liquid sent to treatment.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_water, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

###### Water (`seawater_release`)

Only actual liquid water discharged directly to a marine receptor, CAS 7732-18-5, Emissions to sea water. Record original water source, receiving sea/point/time, volume, salinity and separately monitored pollutant composition. Do not assume clean water or zero pollution. This is not freshwater release, water resource withdrawal, vapour or liquid transferred to treatment.

- Selected flow: Water `631ecf13-0e51-4e35-8235-c6f80c60d72c`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_water, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

### Process: Construction waste characterization and transfer (`construction_waste`)

Inspect each actual construction and commissioning waste stream, including waste status, composition, hazardous character and destination.

#### Inputs

##### Product flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

#### Outputs

##### Product flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Waste flows

###### Construction dewatering liquid sent for treatment (`dewatering_transfer`)

Only actual characterized dewatering liquid transferred into treatment; retain suspended/dissolved chemistry and destination. Do not also record the same transfer as direct freshwater discharge; subsequent treatment releases belong to its linked process.

- Selected flow: Construction dewatering liquid sent for treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ifc-mining-2007`

###### Alkaline concrete washout liquid (`washout_liquid`)

Only actual separated washout liquid from site batching, pouring or grout work; record measured chemistry and collection/treatment. Historical EPA description provides no default pH, concentration or recycling rate.

- Selected flow: Alkaline concrete washout liquid
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

###### Settled cementitious concrete washout solids (`washout_solids`)

Actual separated wet/dry solids, with moisture, composition and destination; no double counting of the same slurry as both full liquid and full solid mass.

- Selected flow: Settled cementitious concrete washout solids
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

###### Hardened Portland cement concrete construction waste (`concrete_waste`)

Only actual hardened waste, including separately weighed shotcrete rebound after hardening if it matches the composition; retain fibre, admixture and contamination. Fresh returns are supplier returns, not automatically hardened waste.

- Selected flow: Hardened Portland cement concrete construction waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

###### Low-alloy structural steel offcut (`steel_offcut`)

Only actually separated structural-member offcut with recorded alloy/coating and export status; rebar and stainless scrap are separate if present. No avoided-virgin credit is assumed.

- Selected flow: Low-alloy structural steel offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `platreef-shaft-case-2025`

###### Used lubricating oil (`used_lubricating_oil`)

Actual separately collected used lubricating oil at the generation point, with composition/contamination and destination documented; preserve treatment-unspecified identity and add the real treatment process separately. This does not identify every hydraulic fluid or solvent.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable quantity in this row unit using cp_waste, per declared reference flow; preserve its actual physical state, configuration and inclusion conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ifc-mining-2007`

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

### Process: Testing, reinstatement and accepted physical handover (`handover`)

Verify the complete delivered facility, surveyed extent, functionality, defects, test consumption and handover documentation.

#### Inputs

##### Product flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

#### Outputs

##### Product flows

###### Accepted complete mine facility delivery unit (`reference_mine_facility`)

One complete accepted non-building mine facility or integrated mine access/materials-handling works, with actual functional extent, geometry, interfaces and commissioned configuration. No arbitrary unfinished section, material basket, service or ore output substitutes for this physical entity.

- Selected flow: Accepted complete mine facility delivery unit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `unsd-cpc-3-2025`; `platreef-shaft-case-2025`

##### Waste flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

##### Elementary flows

No universal crossing exchange is prescribed here. Record each actual significant exchange separately; retained/internal movements remain in the project balance.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| direct_subdivision | dataset | First trace each receipt, meter, machine log and work package to its actual facility and stage. Subdivide joint construction/ore production and adjacent power/manufacturing/building functions before allocation. For inseparable activities, justify an evidenced physical causal driver and complete beneficiary denominator using cp_allocation; cost, facility count or forecast throughput alone is not causal evidence. |  |
| asset_share_conservation | excavator_asset; drill_asset; crane_asset; formwork_plywood; steel_mesh | Retain one persistent identified asset and manufacture boundary. An actual same-configuration mass/count multiplied by its evidenced dimensionless current service share attributes the included manufacture burden. All projects, periods and repeated uses share one supported total-activity denominator; cumulative shares must not exceed one. Forecast versus realized service is explicit and reconciled. Unknown lifetime/activity remains review; never reset the full burden per project. Permanent new delivered support/equipment instead carries its included full supply burden once. |  |
| recovery_and_ore_interfaces | mine_excavation; construction_waste | Internal rock/fill/water reuse is an internal balance, not an automatic co-product credit. Exported ore, useful rock and scrap retain real status, quantities and recipients; no default avoided-production credit. Later mineral models consume the actual allocated construction dataset burden once rather than adding its ingredients/plant again. Shared downstream attribution requires actual supported production/service evidence, with unknown denominators disclosed for review. |  |

Direct attribution and cumulative-conservation controls are supported by the actual cp_assets/cp_allocation records; this PCR specifies no asset lifespan, mine output or allocation factor. Unproven relations remain explicit review needs for the actual dataset.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | handover | Reference entity and acceptance | foreground_record | project/site; mine function; delivery limits/interfaces; route; as-built shaft/drift/pit/tower/station dimensions; support/plant configuration; criteria; test results; retained/new assets; start/end/test/handover dates; complete accepted count | Use signed actual acceptance and as-built survey records, with stage-specific geotechnical/structural/mechanical and actual ventilation/drainage/handling tests. Reconcile the same complete facility and configuration; document defects and remaining interfaces, not presumed approvals. | item; m; m2; m3; actual capacity units | at each acceptance and relevant test | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | signed acceptance, calibrated survey/test records and complete asset schedule |
| cp_earth | site_enabling; mine_excavation | Earthworks and separated excavation outputs | foreground_record | survey before/after; geology; opening dimensions; mechanical/blast route; imported fill; moisture; weighbridge records; rock/soil assay and acid-generation tests; internal reuse; disposition; construction versus production tag | Survey actual delivered openings and movements; use calibrated mass records or actual same-material surveyed volume and measured bulk density at its moisture/state. Reconcile excavation, internal reuse, exported streams and separately recovered ore. | kg; m; m3 | each work shift/haul and survey milestone | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | survey control, calibrated scales, geological tests and destination receipts |
| cp_blast | mine_excavation | Actual blasting inputs | foreground_record | hole pattern and dimensions; product/lot/formulation; charged and returned mass; detonator type/count/unit mass; misfires; date/location; ventilation/control; emissions evidence | Reconcile real approved project blasting logs, charge weighings and stock/returns for each physically distinct formulation and initiation device. Match actual route and chemical species; a safety log is not an external-release measurement. | kg; item; m | each blast and stock reconciliation | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | lot certificates, actual charge logs and checked inventory balance |
| cp_batch | site_batching | Actual on-site mixture and internal transfers | foreground_record | actual recipe/lot; cement; sand; stone; every real additive; water; moisture; fresh density; batch/placed/returned volumes; transport internal links; rebound/washout; electricity | Measure each actual ingredient and fresh batch volume; retain recipe and water carried in wet constituents. Link separate concrete/shotcrete/grout transfers to their actual installation stage without adding an external purchased mixture burden. | kg; m3; MJ | each actual batch and work shift | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | calibrated batch scales/meters, actual recipe and placed/returned balance |
| cp_support | ground_support | Support, lining, grout and drainage | foreground_record | ground-control drawing; actual bolt/mesh/drain/lining specification; installed number/length/mass; fresh delivered mix/grout volume; actual strength/curing; rebound; reclaimed temporary support | Use actual installation and supplier records with surveyed same-state geometry and measured/certified unit masses/densities; inspect route necessity and permanent/temporary inclusion, retaining geotechnical and acceptance evidence. | kg; m; m3; item | each installed lot/section and inspection | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | installation drawings, lot certificates and accepted inspection records |
| cp_civil | civil_structures | Actual civil structure material quantities | foreground_record | foundation/collar/headframe/station geometry; purchased concrete fresh volume/recipe; rebar/structural steel grade and mass; joints; supplier inclusion; curing; returns; offcuts | Reconcile actual delivery tickets, drawings, fresh volumes, steel weighing/certified unit mass and installation schedules. Record all site handling, pumping, joining and curing consumption in stage-tagged utility logs. | kg; m3; m; item | each received/installed lot and acceptance milestone | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | supplier certificates, calibrated measurement and as-built quantities |
| cp_install | permanent_installation | Permanent winding and loading equipment/interfaces | foreground_record | supplier equipment boundary; model/configuration; quantity or mass/length; included component schedule; delivery; installed layout; commissioning tests; cable country/voltage/conductor/insulation; losses/offcuts | Use actual procurement, manufacturer drawings and accepted installed records; weigh/certify same-configuration components when mass is used, preserve actual Count/Length properties, and separately account installation/testing activity and waste. | item; kg; m | each equipment/cable delivery, installation and test | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | complete supplier inclusion list and signed commissioning evidence |
| cp_utilities | site_utilities | Energy, plant operation and fluid use | foreground_record | stage/date; meter start/end; grid country/voltage; fuel grade/blend/density/heating value if conversion; supply/stock/returns; machine hours/load/control; lubricant additions; complete subcontract inclusions | Use calibrated submeters, actual fuel receipts/tank balances and equipment duty logs. Separate construction/test operation from later mine operation. Trace any common utility total with direct subdivision or documented allocation; no assumed per-machine consumption. | MJ; kWh; kg; L; h | each shift, metering interval and tank reconciliation | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | meter calibration, tank reconciliation, supplier and duty records |
| cp_water | site_utilities | Supply, abstraction, dewatering and destination balance | foreground_record | source/aquifer/country; treatment; supplier interface; incoming pumped/metered volume; actual density if Mass reporting; temperature/composition; rainfall; recirculation; consumption; recipient; liquid transfers; concentration tests | Meter actual liquid volumes by source and destination. Keep pumped groundwater and purchased treated water distinct, with actual same-water density for the Mass identity; reconcile reuse, discharged liquid, treatment transfer and measured residual balance with uncertainties. | m3; kg; actual concentration units | each meter interval and discharge/sample event | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | calibrated meters, density/chemistry tests and receptor/treatment records |
| cp_assets | site_utilities; civil_structures; ground_support | Reusable equipment, formwork and support attribution | foreground_record | persistent asset id; manufacture boundary; same-configuration actual net mass/count; service activity unit; current actual service; evidenced total supported service denominator; all beneficiaries/projects/periods; prior shares; forecasts/revisions; consumptive replacements and disposition | Measure/certify actual asset quantities and trace one cross-project asset/activity ledger. Derive current share only with a supported compatible activity denominator; reconcile all past/current/planned shares without reset. Unknown total service and revised forecasts require review and sensitivity, never an invented life. | kg; item; actual service activity units; dimensionless share | each asset use/project and denominator revision | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | traceable manufacture/quantity evidence, full asset ledger and share reconciliation |
| cp_transport | site_utilities | Actual external freight legs | foreground_record | cargo identity/state; actual payload mass; origin/destination; real distance; vehicle/load; return; inclusion/overlap; allocation | Use dispatch/weighbridge and actual route records, distinguishing external supplier/site/waste legs from internal muck movement; check inclusion in upstream or subcontract inventories. | t; km; t*km | each shipment/leg | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | weighbridge/dispatch and route evidence |
| cp_air | site_utilities | Species, size and external release | foreground_record | actual stage/activity; engine/fuel/blast/dust source; exhaust/control/ventilation; CAS/species; fossil origin; fraction; medium/submedium; sample/calibration; concentration and matching flow/time or independently supported factor/activity; uncertainty | Use actual outward release monitoring, compatible concentration/flow/time measurement or independently sourced activity/engine/control-specific factor with conditions and units. Retain raw data and conversions; no workplace concentration, NOx equivalent or total-dust number is silently assigned to molecular NO/NO2 or a PM fraction. | kg; actual concentration/flow/time units | representative actual activity/control periods and each release campaign | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | sampling calibration, original factor applicability and complete raw activity/release basis |
| cp_waste | construction_waste | Segregated solid and liquid waste | foreground_record | originating stage; stream identity; actual mass/volume; moisture/chemistry; contamination/acid potential; status; collection; treatment/recovery/disposal destination; transport; internal reuse | Weigh/meter each physically separated actual waste with representative characterization and signed destination records; preserve liquid/solid split, waste-to-product status and treatment interface. | kg; m3 | each collection/load and characteristic change | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | calibrated scales/meters, characterization and chain-of-custody receipts |
| cp_allocation | mine_excavation; handover | Joint works/ore and beneficiary subdivision | foreground_record | actual joint activities; separable work/meter records; facility/ore recipients; ore assay/mass; driver/activity units; complete denominator; attribution shares; overlap and sensitivity | Trace real causal work packages and subdivide first. Where inseparable, document driver selection and complete measured/supported beneficiary basis; disclose uncertainty and unresolved actual/forecast relationships for independent review. | actual activity units; kg; dimensionless share | each joint campaign and boundary change | actual complete construction and test campaign | defined mine facility and actual supply/destination interfaces | per declared reference flow | real activity records and full allocation reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| delivery_reconciliation | all inventory rows | Keep each actual attributable exchange total in its declared unit per declared reference flow. Reconcile receipts, stock changes, returns, internal batch transfers, installed material, real losses and outgoing streams. Separate independent accepted facilities by actual direct subdivision before reporting one delivery; no default mix, per-facility mass, density, loss or life. | cp_acceptance; cp_earth; cp_blast; cp_batch; cp_support; cp_civil; cp_install; cp_utilities; cp_water; cp_waste | same-unit exchange total per declared reference flow | `wa-ground-control-2019`; `epa-concrete-washout-2012` |
| preserve_numerator_units | electricity_lv_cn; electricity_mv_cn; electricity_other; diesel; treated_process_water; low_voltage_cable; road_freight | Maintain the complete facility denominator. Electricity kWh becomes MJ using 3.6 MJ/kWh; L becomes m3 using 0.001 m3/L; road payload t times actual km gives t*km, with 1000 kg/t. For mass/volume/count/length relations retain actual measured/certified same-state density, unit mass or geometry with units and uncertainty. Public reference properties remain unchanged. | cp_utilities; cp_water; cp_transport; cp_install | same-unit exchange total per declared reference flow |  |
| asset_attribution | excavator_asset; drill_asset; crane_asset; formwork_plywood; steel_mesh | For included reusable asset manufacture, multiply actual same-configuration asset mass/count by the evidenced dimensionless current service share. Current and total service have matching units and real supported boundaries; retain all prior and other uses so cumulative shares do not exceed one. Permanent delivered material is its actual full included quantity once. This attributes an input asset, not a conversion of the facility reference to kg. | cp_assets | attributed asset input per declared reference flow |  |
| environmental_quantification | fossil_co2; nitrogen_monoxide; nitrogen_dioxide; pm25; pm_2_5_10; pm_unspecified; groundwater_abstraction; freshwater_release; seawater_release | Use supported external substance/fraction release or resource withdrawal totals, preserving actual medium and units. Air mass requires real concentration times corresponding flow/time or actual activity times an independently supported species/control factor. Water pollutants require actual concentration times corresponding actual discharge volume with units. Fuel carbon balance needs measured fossil fraction/oxidation; it supplies no NOx split or PM factor. Retain nonoverlapping fractions and water destinations; missing evidence is unknown, not zero. | cp_air; cp_water; cp_utilities | supported release or withdrawal per declared reference flow | `ifc-mining-2007` |
| joint_works_attribution | mine_excavation; reference_mine_facility | Use actual separate stage totals wherever causal construction and production are observable. For any inseparable jointly beneficial work, apply the reviewed actual causal driver with all recipients and denominator documented in cp_allocation; retain exported development ore as a real output and do not credit hypothetical avoided mining. Later mineral inventories must reference the resulting construction burden once. | cp_allocation; cp_earth; cp_acceptance | reviewed attributed construction exchange total per declared reference flow | `platreef-shaft-case-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| entity_complete | reference_mine_facility | Retain the entire accepted functional scope and all real route stages, geometry, configuration and tests; distinguish actual completed work from proposed mine expansions. | cp_acceptance; as-built survey and asset/interface schedule |
| identity_and_units | all inventory rows | Verify each actual material/substance/component state and public reference property/unit; retain geography/voltage/medium/CAS/fossil/size conditions. Blank UUIDs require row-level resolution before deployment as confirmed identities. | supplier/assay/site evidence and public identity references |
| time_and_site | dataset | Cover the real construction and test campaign at the actual site, including returns, rework, dewatering and temporary operation; explain subcontract gaps and unmeasured intervals. | all cp records with dates, calibration and coverage |
| assets_and_joint_work | excavator_asset; drill_asset; crane_asset; formwork_plywood; mine_excavation | Document supported total asset service and all attribution recipients; review unknown denominator and actual/forecast ore interfaces, retaining cumulative share conservation and sensitivity. | cp_assets; cp_allocation; complete persistent ledgers |
| environmental_coverage | site_utilities; construction_waste | Track actual external air/liquid pathways separately from workplace exposure and waste transfer. Add significant real geological gas, dissolved species, land and noise/vibration coverage with correct metrics; declare measurement/identity gaps rather than asserting total coverage. | cp_air; cp_water; cp_waste; location/time and method evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_reference | reference_mine_facility | Require one complete physically accepted facility and all relevant qualifiers; reference name and output-row name match exactly, output is 1 item and every collection/inventory denominator is per declared reference flow. A count basis alone does not demonstrate applicability or interchangeable performance. |  |
| v_route | all inventory rows | Check the actual shaft/drift/pit/headframe/station route and all significant materials, mixtures, permanent devices, plant and tests. Mark a conditional exchange absent only with evidence. Actual unlisted chemistry/components get separate atomic rows; mixture alternatives and internal transfers are not duplicate purchases. |  |
| v_units_identity | all inventory rows | Check actual supply gates, country/voltage, substance/CAS/origin, medium/submedium, particle size and reference property/unit relations. No false conversion from Volume/Length/Count to Mass, unresolved reference product UUID remains a declared candidate gap, and public official Chinese names remain aligned. |  |
| v_balances | mine_excavation; site_batching; site_utilities; construction_waste | Reconcile actual excavation/reuse/export, each fresh mixture, fuel/stock, liquid inputs/outputs and waste disposition. Distinguish natural withdrawal, consumption, treatment transfer and direct recipient release; PM fractions and molecular NO/NO2 cannot be replaced by totals/equivalents or workplace concentrations. |  |
| v_allocation | dataset | Verify one persistent cross-project asset ledger and supported share denominator; cumulative manufacture attribution at most one. Review facility/ore-production joint activities and prevent mineral models counting the same development burden again. Unproved mathematical/causal relationships remain review. |  |
| v_coverage | dataset | Report performed/skipped checks, source-bound measurement/identity gaps, uncertainty and stage coverage. Neither accepted construction nor a passed structural check grants methodology/scientific approval. Do not label foreground as complete cradle-to-gate, whole life or total environmental coverage without independent complete evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground construction and physical delivery dataset for the defined mining facility |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Use as one explicitly bounded mining infrastructure input or comparison of equivalent configured facility deliveries with compatible geology, function, geometry, interfaces and coverage; later mineral production uses only justified attributed construction shares. |
| excluded_use | Generic ore-production/emission factor, construction-service factor, building/TBM/winder manufacturing rule, cost-based facility proxy, universal shaft recipe, unqualified cross-mine comparison or automatic whole-life/safety approval. |
| required_metadata | site/project and facility identity; mine type and actual geology/hydrogeology; actual construction route; complete spatial and functional extent; shaft/drift/pit/tower/station geometry where applicable; support/lining and permanent equipment configuration; material/fuel/water states; measured handling/access/ventilation/water-control function and test criteria; as-built survey and acceptance state/dates; retained/removed assets; construction/upstream/transport/later-phase interfaces; shared asset/ore-development attribution; omitted/unresolved environmental and identity coverage |
| required_quality_disclosure | Actual foreground and upstream/transport coverage, identity gaps, source edition/case limits, recipes/measurements, unmeasured species and environmental metrics, actual/forecast activity and asset shares, allocation sensitivity and later phases excluded. |
| update_trigger | Facility/route/geology/configuration or acceptance change; new supplier/material/property identity; revised plant service/ore attribution; significant water/gas/land/noise evidence; review of technical source edition or unresolved coverage. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-3-2025 | official_guidance | UN Statistics Division. CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.281, subclass 53261 and adjacent 53262/53269. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Non-building mining category and adjacent entity separation only; no engineering amount or LCA approval. |
| wa-ground-control-2019 | official_guidance | Department of Mines, Industry Regulation and Safety, Western Australia. Ground control management in Western Australian mining operations – guideline, 2019; printed pp.11 and 26 (PDF pp.17 and 32), with hydrogeology/route context. https://www.worksafe.wa.gov.au/system/files/documents/2025-02/MSH_GL_GroundControl.pdf | Qualitative opening/ground-control/support route context. WA jurisdiction and 2019 edition; no support spacing/threshold, recipe, life or current compliance rule imported. |
| platreef-shaft-case-2025 | literature | Ivanhoe Mines. Platreef Phase 2 and Phase 3 expansion studies news release, 18 February 2025; printed/PDF p.10, shaft/headframe/winder and muck route; pp.8–9 identify development/production interface. https://www.ivanhoemines.com/wp-content/uploads/20250218-Platreef-2025-FS-PEA-ABF-1.pdf | Developer primary technical case; distinguish completed observations and then-proposed works/forecasts. South African route/interface illustration only; no case dimensions/capacity, mix, dates or intensity used as defaults. |
| ifc-mining-2007 | official_guidance | IFC/World Bank Group. Environmental, Health, and Safety Guidelines for Mining, 10 December 2007; printed/PDF pp.2–4 and 12–13 for development phases, water/effluent, dust/gases, noise/vibration and construction activity interfaces. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Qualitative actual-pathway and source/control prompts across mining phases; apply only real construction activities. No universal emission factor, water chemistry, hydraulic design interval, numeric limit or compliance approval adopted. |
| epa-concrete-washout-2012 | official_guidance | US EPA. Stormwater Best Management Practice: Concrete Washout, EPA-833-F-11-006, February 2012, PDF p.1. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Historical qualitative actual batching/washout mechanism and liquid/solid separation; no default pH, concrete recipe, recovery rate or regulatory approval. |
