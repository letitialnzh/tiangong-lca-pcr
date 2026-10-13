---
pcr_id: pcr.constructions-and-construction-services.constructions.non-elevated-road-construction-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Delivery construction of non-elevated highways, streets and roads

## 1. Scope and Applicability

This PCR describes the actual construction and acceptance handover of a geographically identified complete non-elevated highway, street, road, surfaced parking area, driveway, pedestrian walkway or bicycle path, including its declared drainage, shoulders, safety installations and vehicular/pedestrian underpasses or overpasses. It describes a physical civil-engineering entity, not a construction service or a bundle of materials. The classification distinction and crossings are grounded in `un-cpc3-constructions-2025` (pp. 277–279). Pure pavement maintenance is not a substitute for this complete delivery.

Exclude elevated highways, standalone bridges/viaducts, highway tunnels, railway roadbeds and airfield runways, material/equipment manufacturing and separately sold construction services. Resolve ambiguity between an integral road crossing and a separately delivered bridge with the actual asset register and owner boundary before applying this PCR; do not silently delete the crossing. Construction data cover only the declared initial project through acceptance. Traffic use, operational lighting, later maintenance/renewal and eventual demolition are separate stages and are not assigned an invented schedule or lifespan.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.non-elevated-road-construction-delivery |
| classification_refs | CPC 3.0 53211 (context only) |
| covered_products | Non-elevated road entities and the officially included paths, parking and road-safety/crossing installations, as one declared accepted work |
| excluded_products | Elevated highways; standalone bridges; highway tunnels; railways; runways; upstream materials; equipment; construction services |
| representative_product | One accepted complete site-specific road section or bounded road facility with its actual ancillary works |
| production_route | Actual earthworks and subgrade; aggregate/unpaved, asphalt, concrete or modular pavement routes as built; integral drainage and safety works; inspection and handover |
| market_state | Installed physical entity accepted at site; not a mass-normalized material or equipment output |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared vehicular/pedestrian access function in the configured road entity at handover |
| How much | One complete accepted work with measured chainage/length, lane/usable width, surface area and layer/structure dimensions; for an area facility use its surveyed perimeter and usable area. These are descriptors of the same work, not alternative inventory denominators. |
| How well | As-built geometry, intended users/traffic loading, subgrade and pavement configuration, drainage and safety specification, acceptance test results and nonconformities declared from the actual project; no default design load or compliance approval |
| How long or cycle | One documented construction-to-acceptance cycle; no operational service duration is assessed. Any later lifetime comparison needs separately supported performance, maintenance and end-of-life stages. |
| reference_flow_link | `finished_road` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete non-elevated road construction work |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site and project/asset id; work perimeter and chainage; measured length and area; width and lane count; pavement route and layer dimensions; drainage and crossing inclusion; safety/component configuration; intended use and load basis; starting site condition; contract specification and acceptance evidence/date; construction dates; stage exclusions |

`item` is the single-item display alias of the public unit group reference unit Item(s). It counts one configured complete work and never makes two geometrically different works functionally equivalent. Supply every required qualifier in dataset metadata; partial handover or missing configuration cannot be represented as this output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Reference output is 1 item for the same complete accepted work; count using cp_delivery. All inventory rows and collection aggregates use per declared reference flow. No assumed mass, length or area is a substitute denominator. |
| physical_quantities | all inventory rows | Mass; Volume; energy; mass*distance; Number of items | kg; m3; MJ; kg*km; item | Preserve each public identity reference property and unit. Weigh material mass; use surveyed volume only with measured lot density for mass conversion. Meter water as volume. Preserve wet/dry state, fuel calorific basis and actual transport activity. Do not rewrite energy or volume into Mass. These are row-specific property/unit pairs: mass/kg, volume/m3, energy/MJ, mass-distance/kg*km and the complete accepted road reference output Number of items/item; auxiliary material quantities do not replace that output count. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented site before initial construction and supplied construction products at their declared supplier gate |
| starting_condition_role | foreground_start |
| product_classification_scope | Complete non-elevated road work within the actual project perimeter; CPC 53211 is coverage context |
| recursive_input_rule | Existing road retained in place is starting stock, not newly produced road input; disclose its physical extent and intervention. Separately acquired same-category work needs its own bounded upstream dataset; do not recurse into this output or double-count existing construction. |
| upstream_dataset_requirement | Link separately verified material/utility/equipment datasets with explicit production and transport boundary, route, geography and units. Supplier gate inventories alone do not prove complete upstream impact coverage. |
| disclosure | Foreground initial construction and acceptance only; linked upstream modules reported separately with completeness. Not an unqualified cradle-to-gate or whole-life result. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| b_construction | Include actual mobilization, site preparation, excavation/cut-fill, subgrade/base, paving, drainage, crossings, safety, site water/energy, corrections, temporary works and waste transfers required to deliver the configured entity. Record activity per task; site support rows cover that task energy once. | fhwa-pavement-lca-2016; fhwa-fp24-construction |
| b_upstream | Purchased mixes/assemblies enter in their actual supplied state; extraction, cement/steel/bitumen manufacture, batch mixing and equipment fabrication stay upstream unless actually performed onsite and explicitly added as separate processes. Never count a purchased mixture and its ingredients simultaneously. | fhwa-pavement-lca-2016 |
| b_later | Traffic operation, future maintenance/replacement and final demolition are excluded from this initial-construction dataset. Distinguish removal of existing assets during site preparation from future demolition. Work-zone diversion/delay and land-use/biodiversity are disclosed assessment gaps unless independently modeled; no inference of zero impact. | fhwa-pavement-lca-2016 |
| b_extensions | For a route or structural component absent from the cards, extend the actual process and atomic exchanges using project quantities, original method evidence and identity checks before claiming complete project coverage. Blasting, piling, retaining structures, steel crossings, landscaping, lighting or electronic safety equipment cannot be silently omitted when installed. | fhwa-fp24-construction |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| earthworks | Site preparation, excavation and embankment | conditional | Actual site clearing, existing pavement removal, cut/fill or embankment | foreground_process | per declared reference flow |
| aggregate | Subgrade treatment and aggregate-layer placement/compaction | conditional | Actual base/subbase, aggregate surfacing or stabilization | foreground_process | per declared reference flow |
| asphalt | Asphalt mixture laying, tack coat and compaction | conditional | Actual asphalt route; purchased mixture, laying and rolling | foreground_process | per declared reference flow |
| concrete | Concrete placing, reinforcement, joints and curing | conditional | Actual concrete route, structure or foundation; placement, vibration, finishing, joints, curing | foreground_process | per declared reference flow |
| components | Modular paving installation | conditional | Actual modular concrete or stone paving | foreground_process | per declared reference flow |
| drainage_safety | Drainage, crossings and road-safety installation | conditional | Actual drainage, integral crossing or safety components in accepted scope | foreground_process | per declared reference flow |
| support | Construction equipment operation, site utilities and water control | required | All actual construction activities; utilities separately conditional | foreground_process | per declared reference flow |
| transport | Construction logistics and waste haulage | conditional | Actual material/equipment/waste movements; no presumed default distance | foreground_process | per declared reference flow |
| handover | Inspection, correction, cleanup and complete handover | required | Complete configured work including rework and cleanup until acceptance | reference_process | per declared reference flow |

### Process: Site preparation, excavation and embankment (`earthworks`)

Actual site clearing, existing pavement removal, cut/fill or embankment. Use actual equipment (excavator/grader/roller, paver, concrete pump/vibrator/saw or installation equipment as applicable) and measured task records, not a standard fleet or rate. See support for energy, water and emissions, attributed once by task.

#### Inputs

##### Product flows

###### Selected excavated mineral soil for embankment fill (`imported_fill`)

Only suitable soil imported for this work: attributable consumption = gross receipts + opening stock - verified returns/transfers - closing reusable stock, all reconciled for matching material and moisture state. Include consumed losses and rework; record placed quantity separately. Record source, classification, moisture, compaction and placement. Internal cut-to-fill movement is an internal transfer, not another external input.

- Selected flow: Selected excavated mineral soil for embankment fill
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

#### Outputs

##### Waste flows

###### Surplus excavated mineral soil, non-hazardous (`spoil_soil`)

Only excess unsuitable or surplus soil leaving site: weigh by separately identified soil lot; exclude rock, asphalt and contaminated soil. Record offsite destination; no automatic virgin-soil displacement credit.

- Selected flow: Surplus excavated mineral soil, non-hazardous
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_waste; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `fhwa-pavement-lca-2016`

### Process: Subgrade treatment and aggregate-layer placement/compaction (`aggregate`)

Actual base/subbase, aggregate surfacing or stabilization. Use actual equipment (excavator/grader/roller, paver, concrete pump/vibrator/saw or installation equipment as applicable) and measured task records, not a standard fleet or rate. See support for energy, water and emissions, attributed once by task.

#### Inputs

##### Product flows

###### Crushed stone aggregate for road base (`aggregate_base`)

When a crushed-stone base or unpaved surface is constructed: weigh each specified grading and moisture state separately; reconcile installed layer geometry, returns and loss.

- Selected flow: Crushed stone aggregate for road base
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

###### Cement, portland cement (`stabilization_cement`)

Only cement-stabilized soil/base actually built: batch weigh the specified cement grade. No prescribed blend ratio.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

###### Hydrated lime (`stabilization_lime`)

Only lime treatment specified and performed: weigh calcium-hydroxide product; distinguish quicklime and water already in the product.

- Selected flow: Hydrated lime
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

###### Polypropylene geotextile (`geotextile`)

Only a specified polypropylene separation/reinforcement fabric is installed; weigh receipts and cut-offs, preserve grade and area with measured areal mass. Other polymers require separate atomic rows.

- Selected flow: Polypropylene geotextile
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

### Process: Asphalt mixture laying, tack coat and compaction (`asphalt`)

Actual asphalt route; purchased mixture, laying and rolling. Use actual equipment (excavator/grader/roller, paver, concrete pump/vibrator/saw or installation equipment as applicable) and measured task records, not a standard fleet or rate. See support for energy, water and emissions, attributed once by task.

#### Inputs

##### Product flows

###### Asphalt mixture (`asphalt_mix`)

Only supplied aggregate-binder-filler mixture for asphalt paving: weigh hot/warm/cold mixture lots separately, record recipe, reclaimed content, receipt temperature and returns. Upstream plant mixing is outside foreground. Do not add its constituent aggregate and binder again.

- Selected flow: Asphalt mixture `ad29a865-2fd6-41da-99d2-9669b9c7984d`
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-fp24-construction`

###### Cationic bitumen emulsion for tack coat (`tack_emulsion`)

Only this actual tack-coat formulation is applied: weigh wet emulsion and record solids/water fractions from batch specification. Do not substitute natural asphalt, oxidised bitumen or waterproofing membrane. Other formulations need separate rows.

- Selected flow: Cationic bitumen emulsion for tack coat
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-fp24-construction`

#### Outputs

##### Waste flows

###### Uncontaminated waste asphalt pavement mixture (`asphalt_offcut`)

Only rejected mixture/cut-offs from current works: weigh separately, distinguish existing pavement removed during site preparation, and record recycling destination. Reclaimed material reused onsite stays internal.

- Selected flow: Uncontaminated waste asphalt pavement mixture
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_waste; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `fhwa-pavement-lca-2016`

### Process: Concrete placing, reinforcement, joints and curing (`concrete`)

Actual concrete route, structure or foundation; placement, vibration, finishing, joints, curing. Use actual equipment (excavator/grader/roller, paver, concrete pump/vibrator/saw or installation equipment as applicable) and measured task records, not a standard fleet or rate. See support for energy, water and emissions, attributed once by task.

#### Inputs

##### Product flows

###### Fresh ready-mixed concrete for road construction (`fresh_concrete`)

Only fresh concrete received for pavement, foundations, culverts or underpass works: weigh deliveries or use batch-specific measured density and delivered volume; preserve mix, cement type, exposure and consistency. Exclude supplier placement/curing service. Concrete mixed onsite requires its actual ingredient rows and a separate mixing process.

- Selected flow: Fresh ready-mixed concrete for road construction
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-fp24-construction`

###### Hot rolled rebar steel (`rebar`)

Only matching hot-rolled low-alloy reinforcement with C≤0.2% is installed; weigh steel schedules/delivery batches and reconcile laps, cut-offs and returns. Dowel or tie bars of another steel specification require separate rows.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-fp24-construction`

###### Silicone joint sealant (`joint_sealant`)

Only this actual joint sealant is applied: meter mass with formulation and cured/uncured state. Joint geometry and saw-cut records determine coverage; no default rate.

- Selected flow: Silicone joint sealant
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-fp24-construction`

###### Sawn softwood formwork board (`formwork_timber`)

Only timber boards actually used in formwork: measure species, moisture and mass and assign the conserved reuse share under allocation rule a_reuse; record removed stock and damage. Do not charge a full board manufacture at every use.

- Selected flow: Sawn softwood formwork board
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

#### Outputs

##### Waste flows

###### Uncontaminated hardened concrete rubble (`concrete_rubble`)

Only concrete cut-outs/rejected hardened concrete crossing site boundary: weigh separately, distinguish reinforcement and fresh returned concrete, record destination.

- Selected flow: Uncontaminated hardened concrete rubble
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_waste; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `fhwa-pavement-lca-2016`

###### Alkaline concrete washout wastewater (`washout_water`)

Only collected washout liquid sent to treatment: meter volume, pH, suspended solids and treatment destination; settled concrete sludge is a separate row. Do not model untreated wastewater as water resource or assume discharge.

- Selected flow: Alkaline concrete washout wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured exchange attributed to this complete work using cp_water; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `fhwa-pavement-lca-2016`

###### Settled concrete washout sludge (`washout_sludge`)

Only settled solids removed from washout containment: weigh wet mass and measure moisture; distinguish liquid sent to treatment.

- Selected flow: Settled concrete washout sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_waste; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `fhwa-pavement-lca-2016`

### Process: Modular paving installation (`components`)

Actual modular concrete or stone paving. Use actual equipment (excavator/grader/roller, paver, concrete pump/vibrator/saw or installation equipment as applicable) and measured task records, not a standard fleet or rate. See support for energy, water and emissions, attributed once by task.

#### Inputs

##### Product flows

###### Precast concrete paving block (`paving_unit`)

Only modular concrete paving is installed: weigh units and reconcile dimensions, joint bedding and damage; supplier precasting belongs upstream.

- Selected flow: Precast concrete paving block
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

###### Granite paving slab (`stone_slab`)

Only granite slabs actually installed in a pedestrian route: measure slab receipts and off-cuts, thickness and finish. Other stone types require distinct rows.

- Selected flow: Granite paving slab
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

### Process: Drainage, crossings and road-safety installation (`drainage_safety`)

Actual drainage, integral crossing or safety components in accepted scope. Use actual equipment (excavator/grader/roller, paver, concrete pump/vibrator/saw or installation equipment as applicable) and measured task records, not a standard fleet or rate. See support for energy, water and emissions, attributed once by task.

#### Inputs

##### Product flows

###### Precast reinforced concrete drainage pipe (`concrete_pipe`)

Only this pipe type actually installed: weigh segments or reconcile supplier unit weights with measured lengths, diameters and wall thickness; no generic pipe substitution.

- Selected flow: Precast reinforced concrete drainage pipe
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

###### Hot-dip galvanized steel road guardrail assembly (`guardrail`)

Only the installed specified assembly including its matching posts, rail and fixings: weigh the configured assembly and preserve component list, coating and installation record. Supplier component manufacture stays upstream. Split separately purchased components if the assembly is not the actual exchange.

- Selected flow: Hot-dip galvanized steel road guardrail assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-fp24-construction`

###### Waterborne acrylic road-marking paint (`marking_paint`)

Only this actual wet formulation applied to road marking: weigh supply and returns, preserve safety data sheet and solids; solvent-borne or thermoplastic marking needs its own rows and actual emissions.

- Selected flow: Waterborne acrylic road-marking paint
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

###### Glass beads for road-marking retroreflection (`glass_beads`)

Only these separately applied beads: weigh issue and return, record grade and application; exclude beads already counted in supplied paint.

- Selected flow: Glass beads for road-marking retroreflection
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_material; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fhwa-pavement-lca-2016`

### Process: Construction equipment operation, site utilities and water control (`support`)

All actual construction activities; utilities separately conditional. Use actual equipment (excavator/grader/roller, paver, concrete pump/vibrator/saw or installation equipment as applicable) and measured task records, not a standard fleet or rate. See support for energy, water and emissions, attributed once by task.

#### Inputs

##### Product flows

###### Diesel fuel (`diesel_site`)

When diesel excavators, graders, rollers, pavers, pumps or generators actually operate: tank-meter/stock balance by equipment and task including idling. Preserve fossil/biofuel fractions and actual fuel specification; no runway-specific identity or emission rate is assumed.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_energy; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `fhwa-pavement-lca-2016`

###### Alternating current (`electricity_cn_lv`)

Only CN grid-average supply received at <1 kV: meter purchased electricity by site period and task; convert metered kWh to MJ using energy_conversion. Other regions/voltages need separate verified rows. Generator output is internal; fuel and electricity cannot both be external inputs for it.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured exchange attributed to this complete work using cp_energy; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `fhwa-pavement-lca-2016`

###### Tap water (`tap_water`)

This public Volume identity is conditional on actual Hong Kong treated-water supply matching the declared water-treatment-plant gate and supply boundary. Other geographies or site-delivery interfaces need a separately verified identity and actual upstream transport/supply link, not this regional proxy. Meter moisture conditioning, dust suppression, curing and cleaning separately; exclude upstream abstraction and internal recycled water. Preserve Volume/m3; its secondary screening density is not a default conversion.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: Measured exchange attributed to this complete work using cp_water; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `fhwa-pavement-lca-2016`

##### Elementary flows

###### river water (`river_abstraction`)

Only direct site abstraction from a river: meter intake, source, date and destination; distinguish lake, groundwater and purchased water. Record gross withdrawal and measured return separately.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Measured exchange attributed to this complete work using cp_water; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `fhwa-pavement-lca-2016`

###### ground water (`ground_abstraction`)

Only groundwater abstracted for construction supply or dewatering: meter pumping and identify aquifer; do not infer consumption equal to withdrawal. Dewatering outflow requires its own water-routing record.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume / m3
- Amount rule: Measured exchange attributed to this complete work using cp_water; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `fhwa-pavement-lca-2016`

#### Outputs

##### Waste flows

###### Construction dewatering effluent sent to treatment (`dewater_effluent`)

Only liquid crossing to an external treatment recipient: meter pumped liquid, solids and contaminant characterization. Direct river discharge is not this technosphere waste: identify discharged substances and receiving medium in separate elementary rows supported by monitoring.

- Selected flow: Construction dewatering effluent sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Measured exchange attributed to this complete work using cp_water; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `fhwa-pavement-lca-2016`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_air`)

Only fossil combustion CO2 to outdoor air with subcompartment not specified: derive from actual fossil fuel carbon, oxidation and activity evidence under cp_emission, or a compatible measured/equipment emission dataset. Not biogenic CO2, land-use change or delayed emission. If a more specific air compartment is known, resolve that identity before release.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_emission; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `fhwa-pavement-lca-2016`

###### nitrogen monoxide (`no_air`)

Only separately speciated NO from actual equipment exhaust to outdoor air, unspecified subcompartment. Preserve species mass; do not enter NOx reported as NO2 equivalent, NO2 or N2O here. Require compatible exhaust measurement/model, no default factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_emission; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `fhwa-pavement-lca-2016`

###### nitrogen dioxide (`no2_air`)

Only independently speciated NO2 exhaust to outdoor air, unspecified subcompartment; require actual equipment and activity evidence. NOx as NO2 equivalent does not establish NO2 speciation.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_emission; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `fhwa-pavement-lca-2016`

###### particles (PM10) (`pm10_urban`)

Only quantified construction fugitive PM10 to urban air close to ground: record dust-generating task, soil/moisture, traffic, weather and control. Apply a site-compatible method; never transfer the historical AP-42 TSP area factor as a PM10 factor. Avoid overlap with separately estimated exhaust particles.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91c0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_emission; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `epa-construction-dust-1995`

###### particles (PM10) (`pm10_nonurban`)

Only quantified construction fugitive PM10 to non-urban air close to ground; same activity-specific protocol as pm10_urban, mutually exclusive for the same release. Do not substitute low/high-stack or long-term identities.

- Selected flow: particles (PM10) `9fbb53e8-ed5b-11e6-bc64-92361f002671`
- Flow property / unit: Mass / kg
- Amount rule: Measured exchange attributed to this complete work using cp_emission; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `epa-construction-dust-1995`

### Process: Construction logistics and waste haulage (`transport`)

Actual material/equipment/waste movements; no presumed default distance. Use actual equipment (excavator/grader/roller, paver, concrete pump/vibrator/saw or installation equipment as applicable) and measured task records, not a standard fleet or rate. See support for energy, water and emissions, attributed once by task.

#### Inputs

##### Product flows

###### Non-refrigerated lorry freight transport for construction deliveries (`lorry_transport`)

When purchased road haulage transports materials, waste or equipment: use actual consignment mass and route distance, vehicle, loading and empty-return treatment. Separately attribute each consignment; exclude supplier transport already inside an upstream dataset. Own-fleet fuel/exhaust is modeled separately, not again as purchased service.

- Selected flow: Non-refrigerated lorry freight transport for construction deliveries
- Flow property / unit: mass*distance / kg*km
- Amount rule: Measured exchange attributed to this complete work using cp_transport; retain task/lot and actual physical quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `fhwa-pavement-lca-2016`

### Process: Inspection, correction, cleanup and complete handover (`handover`)

Complete configured work including rework and cleanup until acceptance. Use actual equipment (excavator/grader/roller, paver, concrete pump/vibrator/saw or installation equipment as applicable) and measured task records, not a standard fleet or rate. See support for energy, water and emissions, attributed once by task.

#### Outputs

##### Product flows

###### Accepted complete non-elevated road construction work (`finished_road`)

1 item

- Selected flow: Accepted complete non-elevated road construction work
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `un-cpc3-constructions-2025`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| a_task | Prefer separately metered task quantities and identifiable material lots. For shared utilities or haulage, partition using measured equipment hours with load/fuel evidence, metered volumes or actual consignments; preserve the denominator ledger and reconcile allocated totals to the original measured totals. Do not allocate by contract price or assumed equal lengths. | fhwa-pavement-lca-2016 |
| a_reuse | Equipment fabrication is outside the default construction foreground; disclose this gap. When linked in an extended dataset, and for reusable temporary works, maintain one cross-project manufacturing-burden ledger: a use share equals attributable actual activity divided by evidenced cumulative service activity for the same asset and manufacturing scope. Cumulative shares over projects, periods and repeated use must not exceed one. Unknown denominator, future reuse or lifetime stays review; no full-burden reset each project. Report damage/replacement separately and reconcile stock. | fhwa-pavement-lca-2016 |
| a_recycling | Separate internal reuse, exported waste and separately verified recovered product. No automatic avoided-production credit; retain transfer/treatment burden and disclose the actual recycling allocation boundary. Any separate substitution claim requires reviewed counterfactual, quality and destination evidence; do not create a fictitious co-product from spoil. | fhwa-pavement-lca-2016 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | handover | finished_road | acceptance_record | project id; perimeter; accepted whole-work count; chainage; length; width; area; layer dimensions; component schedule; users/load basis; acceptance/date; defects | Survey as-built geometry and reconcile signed acceptance with the whole asset/component schedule; count only the same complete accepted configuration. Do not use budget/pay-item totals as physical measurements. | item | At acceptance and every scope correction | Entire construction through acceptance | Declared whole-work perimeter | per declared reference flow | survey/calibration; as-built drawings; test records; signed acceptance and configuration reconciliation |
| cp_material | all foreground processes | material_input | weighing_record | task; lot; supplier; composition; grade; wet/dry state; receipt/return; density if volume-converted; placement; reusable asset ledger ; attributable opening/closing reusable stocks; verified transfers; consumed losses and rework | Use calibrated weighbridge/batch scales and receipts; reconcile delivery, installed quantity, returns, waste and stock change. When using geometric volume, measure matching lot density rather than a typical value. Keep upstream gate separate from onsite installation.  For imported_fill, use attributable gross receipts + opening stock - verified returns/transfers - closing reusable stock on a matching material/moisture basis; record consumption and placement separately. This does not replace reusable-asset manufacturing attribution. | kg | Every lot and task | All work incl. rejected/reworked batches | Supplier receipt to installation | per declared reference flow | calibration; delivery tickets; material balance; mix sheets; reuse ledger |
| cp_energy | support | energy_input | meter_record | equipment; task; start/end; idling; fuel grade/mass; meter readings; stock; voltage; region; fuel calorific evidence | Meter purchased fuel and electricity over full project including setup, standby and rework; tag excavating, grading, compaction, paving, pumping, sawing and lighting. Calibrated meter/stock reconciliation takes precedence over generic horsepower estimates. | kg; MJ; kWh | Daily and task changes | Mobilization through demobilization and acceptance | Actual equipment and site utilities | per declared reference flow | fuel tickets; stock balance; meter calibration; allocation ledger |
| cp_water | support; concrete | water_input_and_liquid_waste | meter_and_sampling_record | task; source; intake; recycle; discharge; recipient; treatment; aquifer/river; pH; solids; sampling conditions | Meter purchased supply, natural-source withdrawal and wastewater separately; map internal recycle. Sample actual washout/dewatering before treatment/discharge and document route. Receiving-water pollutant mass requires substance-specific concentration times matching volume, not a bulk wastewater elementary flow. | m3 | Every source/recipient and discharge event | Entire construction water operation | Actual site and water sources/recipients | per declared reference flow | meters; laboratory reports; route/recipient records; water balance |
| cp_waste | all foreground processes | solid_waste | transfer_record | material; lot; moisture; hazard status; weight; origin; recipient; recovery/disposal; haul distance | Weigh each physical waste stream independently and verify transfer receipts; reconcile material balance and separate preconstruction removals from new-work loss. Exclude internal reuse from external waste totals. | kg | Every transfer | All preparation and construction waste | Site boundary and actual recipients | per declared reference flow | weigh tickets; hazard characterization; destination receipts |
| cp_emission | support | elementary_emission | measurement_or_activity_model | species; medium/submedium; equipment/task; actual fuel/activity; model/factor/source; control; particle size; moisture; weather; uncertainty | Use representative exhaust monitoring or equipment-specific validated emission model with actual activity. Quantify dust separately by operation using applicable measurements or documented local method. Preserve NO versus NO2 and particulate size; disclose unquantified releases as gaps, not zero. Historic EPA broad TSP factors are not adopted. | kg | Each actual emitting task/modeled period | All modeled releases through handover | Actual site and receiving environment | per declared reference flow | calibration; model/factor provenance; activity logs; species/medium audit; uncertainty |
| cp_transport | transport | freight_input | consignment_record | consignment mass; measured route distance; cargo; vehicle; fuel; loading; empty return; carrier boundary | Record each actual journey/consignment and compute mass-distance with exact unit conversion. Include equipment mobilization and demobilization and waste haulage when relevant; reject generic distances or monetary proxies. | kg*km | Each journey | All construction logistics | Actual origin/destination routes | per declared reference flow | carrier tickets; measured routes; loading; upstream-overlap audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_ledger | all inventory rows | Sum uniquely attributable measured records for the declared whole work; reference count remains one. Keep task allocation and component/stock reconciliation. Any intensity per length/area is an additional derived view requiring measured geometry of this same work, not a replacement output. | cp_delivery; cp_material; cp_energy; cp_water; cp_waste; cp_emission; cp_transport | Exchange amount per declared reference flow | fhwa-pavement-lca-2016 |
| energy_conversion | electricity_cn_lv | 1 kWh = 3.6 MJ exactly. Apply only to measured electrical energy; preserve the selected Net calorific value property. Fuel mass is not electrical energy; any calorific conversion needs matching fuel analysis and calorific basis. | cp_energy | Purchased electricity in MJ per declared reference flow |  |
| quantity_conversion | fresh_concrete, concrete_pipe, geotextile | Use actual measured volume times matching measured density to obtain kg; or measured fabric area times matching areal mass. Record units, moisture, batch and uncertainty. Do not infer a whole-road mass from a generic density or geometry. | cp_material | Material mass per declared reference flow |  |
| transport_activity | lorry_transport | Each consignment contributes actual cargo kg multiplied by its actual km; sum unique consignments. 1 tonne = 1000 kg. Document loaded/empty travel treatment in the linked carrier dataset; do not count service and its own-fleet fuel twice. | cp_transport | kg*km per declared reference flow | fhwa-pavement-lca-2016 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_extent | finished_road | Verify whole accepted extent, geometry, lane/path/parking function, configuration and actual acceptance conditions. A surveyed area alone cannot establish equal road performance. | cp_delivery |
| dq_activity | all inventory rows | Cover actual construction dates, weather/season, equipment age/technology, delivered material route and quantities, rework and loss. Missing task records remain gaps with consequence/uncertainty disclosed. | cp_material; cp_energy |
| dq_identity | all inventory rows | Select one physically specific flow per exchange; check source/medium, route, reference property and units. Unresolved or mismatched identities remain blank, never fabricated. A candidate identifier does not authorize a substitute material. | flow identities and material specifications |
| dq_balance | all inventory rows | Reconcile supplier production/transport versus foreground, material/water balances, internal reuse and waste destinations; quantify completeness and avoid repeated burden. No invented default intensity, mix, life, loss or approval. | cp_material; cp_water; cp_waste; allocation ledger |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| v_reference | Reject incomplete/partial delivery, absent geometry/configuration/acceptance qualifiers, inconsistent work count or a mass/material-only output. Keep finished_road reference quantity, protocols and inventories on the same basis. | un-cpc3-constructions-2025; fhwa-pavement-lca-2016 |
| v_routes | Check every as-built process and component against the declared perimeter and route; resolve absent cards before calling a concrete dataset complete. Validate layer/volume/receipt consistency, rejected work, water routes and waste destinations from actual records. | fhwa-fp24-construction |
| v_identity | Verify UUID-specific chemical/physical identity, geography, voltage, medium/submedium, fossil/biogenic source and reference property/unit. No NO/NO2/N2O substitution, no resource-water/wastewater conflation and no composite emissions placeholder. |  |
| v_completeness | Report construction coverage, linked upstream completeness, unquantified emissions/noise, work-zone effects and excluded later stages. Construction noise needs a documented acoustic indicator, method and receiving context; do not express dB as additive energy/mass or fabricate an elementary flow. Measurement consistency alone establishes neither scientific approval nor whole-life performance. | fhwa-pavement-lca-2016 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction inventory of one configured accepted non-elevated road entity |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Site-specific initial-construction module with explicit geometry and upstream links; later integration into a reviewed lifecycle model with separate later stages |
| excluded_use | Unqualified whole-life/comparative claim; generic per-km/area proxy without equivalence; manufacturing-only output; methodology approval or publication inferred from candidate content |
| required_metadata | All reference qualifiers; process/route map; measured project ledger; suppliers/background boundaries; allocation/reuse ledger; construction period; identities/units; acceptance status |
| required_quality_disclosure | Measured/estimated data distinction; uncertainty and completeness by task/stage; missing flow identities; noise/work-zone/land-use gaps; upstream coverage and all excluded stages |
| update_trigger | Changed geometry/configuration, pavement route, material supplier, equipment, water/waste route, acceptance correction or verified identity/method evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-constructions-2025 | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, pp. 277–279. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Physical entity/service distinction, covered facilities and neighboring exclusions; not a construction intensity source |
| fhwa-pavement-lca-2016 | official_guidance | FHWA-HIF-16-014, Pavement Life-Cycle Assessment Framework, July 2016, pp. 2-4, 3-6–3-8, 4-14–4-15. https://rosap.ntl.bts.gov/view/dot/38470/dot_38470_DS1.pdf | Project geometry/function, separation of lifecycle stages and task-specific equipment/logistics/water records. Historical methodological guidance, not current regulation; example rates, default lives and intensity values are not adopted. |
| fhwa-fp24-construction | standard | FHWA, Standard Specifications for Construction of Roads and Bridges on Federal Highway Projects, FP-24 (2024), Sections 204, 301, 401, 501 and 617; printed pp. 102–103, 236–237, 316–317, 429–430 and 716–717. https://highways.dot.gov/sites/fhwa.dot.gov/files/FP-24.pdf | Conditional earthworks, layer compaction, asphalt laying, concrete jointing and guardrail installation decomposition; only binding where incorporated by the actual contract. No U.S. tolerances, ratios, fleet sizes or general compliance approval imposed on other projects. |
| epa-construction-dust-1995 | official_guidance | US EPA, AP-42 Section 13.2.3 Heavy Construction Operations, January 1995 (posted table corrections), pp. 13.2.3-1–13.2.3-2. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Construction dust is activity/weather dependent and needs operation-specific assessment. Historical TSP factor limitations support rejecting unqualified transfer to PM10; no numerical factor is adopted. |
