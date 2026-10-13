---
pcr_id: pcr.constructions-and-construction-services.constructions.outdoor-sport-and-recreation-facility-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Construction and delivery of outdoor sport and recreation facilities

## 1. Scope and Applicability

Applies to complete accepted outdoor sport/recreation civil entities at actual sites: open-air football, baseball, rugby, athletics, tennis, car/bicycle/horse racing grounds; golf courses, beach installations, pleasure-boat marinas; public parks/gardens and zoological/botanical gardens. Independent indoor sport buildings, engineering services, material/equipment manufacture, operations and animal husbandry are not the reference product. Official scope is context; actual function/configuration/handover state establish identity. [un-cpc3-2025]

Sport surface/rootzone, living-plant establishment, animal containment and coastal recreation require selected construction routes tied to complete acceptance; material/road/building/harbour methods alone cannot replace the entity. Default scope is actual construction through declared final acceptance including contractual establishment/correction with consistent measured functional geometry/configuration. A square metre of turf or kilogram of materials cannot replace the whole category. No complete cradle-to-gate or whole-life claim is established.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.outdoor-sport-and-recreation-facility-delivery |
| classification_refs | CPC 3.0 53270; context only, no accepted mapping implied |
| covered_products | Complete outdoor sport/racing, golf, beach, pleasure-marina, park/garden and zoological/botanical facilities with integral components |
| excluded_products | Independent indoor sport buildings, material/equipment manufacture, engineering services, operations/husbandry and separate transport harbour/waterworks/utility entities |
| representative_product | One actual complete facility with declared function/perimeter/geometry/configuration/acceptance endpoint |
| production_route | Actual preparation, selected drainage/surfaces/landscape/structures/permanent installation, site support/logistics/acceptance/correction |
| market_state | Configured entity constructed and accepted at declared site including actual contractual establishment endpoint |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide declared outdoor sport/recreation/garden/zoological-botanical display function and necessary access/containment through accepted entity |
| How much | One complete declared facility; measure type-specific field/track length-width, net playing/gross site areas, course zones, planting/enclosure, beach access and berth/water geometry; no assumed standard dimensions |
| How well | Actual contractual use/acceptance with as-built survey/layers/drainage/surface/establishment/containment/installation tests and correction evidence; no automatic certification/approval |
| How long or cycle | One actual construction-through-final-acceptance campaign including contractual establishment; no default operation years/life/renewal cycle |
| reference_flow_link | `finished_facility` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted configured outdoor sport or recreation facility |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site/perimeter/all functions; new/retained assets; measured original/as-built coordinates/datum/geometry; sport layers/track/zones; taxa/rootzones/establishment; zoo containment/life-support; beach access/protection/nourishment; berth/water/fixed-floating structures/salinity; equipment specifications; actual acceptance/establishment endpoint/dates; supply/transport interfaces; reuse ledger; material state/measurements; water receiver/contaminant tests; excluded stages |

item is the single-item display alias of public Item(s); 件 is the same count unit. All inventory/collection use per declared reference flow for the same actual accepted configuration. Geometry/function/quality qualify complete handover without facility mass, assumed loads, cost or life; missing qualifiers make a package incomplete.

Type-specific qualifiers apply to the declared configuration: document sport/course geometry for sport works, taxa/enclosures for actual gardens or zoo works, and marine/berth geometry only for actual beach/marina works. Mark each inapplicable qualifier with drawing/site evidence; this does not permit omitting an installed component.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Exactly 1 item complete accepted facility, collected with cp_handover; all inventory/protocols per declared reference flow. |
| physical_records | materials and geometry | Mass; Volume; Area; Length; Number of items | kg; m3; m2; m; item | Measured/certified deliveries/geometry; volume/area-to-mass needs same-material/state measured density/areal mass, no invented facility mass. Number of items/item applies to live planting materials garden_tree and garden_shrub under cp_plant; retain actual species, specification and counted quantity. Mass/kg, volume/m3, area/m2 and length/m apply only to matching native quantities. Convert only with measured applicable evidence; do not force living plants into mass or geometry. |
| energy_property | electricity and diesel | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ; kg | Electricity MJ, metered kWh times 3.6; diesel kg, volume-to-mass needs batch density. Property coefficients are not physical density/heat content. |
| cable_length | `cable` | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Preserve public Length/m; reconcile installed/cut/return length, never rewrite to Mass. |
| water_state | water interfaces | Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | m3; kg | Conserve volume ledger separately; sea-resource primary Mass/kg needs weighing or supported same-salinity/temperature density, discharge Volume/m3; constituents separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed preconstruction site/vegetation/soil/water/retained assets, actual material/assembly gates and transport origins |
| starting_condition_role | foreground_start |
| product_classification_scope | Complete declared outdoor sport/recreation entity with integral installations; classification does not replace function judgment |
| recursive_input_rule | Retained facility is starting stock; independently acquired completed works use bounded upstream links, no self-output recursion/assumed historic burden reconstruction |
| upstream_dataset_requirement | Independently verify supplied state/process/geography/property-unit/manufacture-transport boundaries of materials/components/utilities/equipment/separate works; disclose gaps |
| disclosure | Onsite construction through final acceptance; upstream coverage/operation/renewal/demolition separate, no complete cradle-to-gate or whole-life claim |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| b_delivery | Include actual preparation, selected drainage/surfaces/planting/structures/installations, utilities/logistics/testing/correction through declared final acceptance including contractual establishment. Select the real complete configuration and evidence absent alternatives. | un-cpc3-2025; cedd-landscape-2026; se-natural-2025 |
| b_consumed_inputs | All purchased input rows retain actual attributable consumption, including damage, rejects, cutoffs and replacements before final acceptance. Local installed/applied/planted wording identifies intended route/configuration and has this explicit exception for consumed pre-installation or establishment losses; it does not restrict inputs to successful installation. In native units reconcile gross attributable receipts + opening stock - verified returns/transfers - closing reusable stock, keeping installed/accepted quantities and actual waste separate. Preserve exact supplied state and assembly boundaries; do not add embedded constituents again.  The stock-consumption equation applies to consumed materials/components, not to manufacturing-share rows under cp_reuse. In particular excavator_capital and timber_formwork retain actual asset mass times their supported conserved manufacture share under c_share even when the physical asset is returned, transferred or held as reusable closing stock; keep physical movements separate and never charge both full consumed manufacture and a share for the same asset. | |
| b_supplied_state | Material and assembly manufacture are separate upstream links at actual supplied gates. Onsite concrete batching, soil stabilization, hydroseeding, rubber mixing, welding/coating need actual ingredients/equipment/releases separately; do not charge complete purchased assembly plus its embodied ingredients. | se-artificial-2013; cedd-landscape-2026 |
| b_interfaces | Integral works count once. Independent complete building/road/harbour/pipeline/cable works need bounded upstream interfaces; their methods may inform components but do not replace complete recreation-facility methodology. Retained assets are starting stock. | un-cpc3-2025; epa-marina-2001 |
| b_environment | Separate supply/abstraction/discharge/treatment liquid and waste sediment/plume. Actual contaminants, infill losses, chemical releases and soil/land-use carbon require evidence and individual rows. Noise/vibration/habitat/occupation need independently bounded assessment; unmeasured is not zero. | epa-marina-2001; epa-heavy-construction-1995 |
| b_later | Default excludes post-acceptance sport/visitor/boat operation, husbandry, routine irrigation/mowing/fertilizing, maintenance dredging, future surface/plant/equipment replacements and demolition. Extensions need actual time/activity/replacement/removal/destination inventory without default life. Pre-acceptance establishment/removal/rework included. | cedd-landscape-2026; epa-marina-2001; defra-zoo-2012 |
| b_extensions | Cards are specific candidate routes, not every facility BOM. Before dataset completeness, cover all actual sports/racing/golf/park/garden/beach/zoo/botanical/marina requirements; add each other taxon, surface/marking/joint material, civil assembly, equipment, chemical, packaging, waste and release atomically. UUID gaps cannot justify scope narrowing. | un-cpc3-2025; se-artificial-2013; defra-zoo-2012 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| earth | Surveyed clearing, grading and earthworks | conditional | Actual cut/fill, clearing, existing removal or marina capital dredging | foreground_process | per declared reference flow |
| drainage | Drainage and irrigation installation | conditional | Actual selected drainage/rootzone/irrigation design | foreground_process | per declared reference flow |
| surface | Sport/racing surfaces and establishment | conditional | Actual natural/hybrid/artificial turf, polymeric/paved/racing route | foreground_process | per declared reference flow |
| landscape | Garden, habitat and planting establishment | conditional | Actual park/garden/golf/zoo/botanical landscape | foreground_process | per declared reference flow |
| structure | Civil structures, enclosures and coastal access | conditional | Actual foundations/fences/habitat structures/decks/beach/marina works | foreground_process | per declared reference flow |
| services | Installed lighting and site equipment | conditional | Actual electrical/drainage/control/zoo life-support/marina equipment | foreground_process | per declared reference flow |
| support | Construction plant, utilities and environmental controls | required | All actual included tasks; exchanges conditional on occurrence | foreground_process | per declared reference flow |
| logistics | Logistics and reusable construction assets | conditional | Actual external transport or explicitly included manufacture module | foreground_process | per declared reference flow |
| handover | Testing, correction, cleanup and accepted output | required | One complete actual facility with final acceptance endpoint | reference_process | per declared reference flow |

Utilities/water/releases are tagged to actual tasks once in support. Conditional exchanges receive amounts only on occurrence; non-applicability requires evidence. Named taxa/materials do not restrict the category; actual alternatives require separate verified rows.

### Process: Surveyed clearing, grading and earthworks (`earth`)

Retain original/as-built survey, stripped topsoil and compacted geometry, actual excavator/roller/dredger and erosion controls. Removal materials separate.

#### Inputs

##### Product flows

###### Clean graded mineral soil for fill (`imported_fill`)

Only actual imported tested fill; reconcile compacted geometry, moisture and delivery weights. Internal cut-to-fill is a stock transfer.

- Selected flow: Clean graded mineral soil for fill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`

###### Screened horticultural topsoil (`topsoil`)

Only actual imported planting/rootzone topsoil; record texture, contamination, moisture and placement depth. Retained topsoil is starting stock.

- Selected flow: Screened horticultural topsoil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`

#### Outputs

##### Waste flows

###### Non-hazardous excavated mineral soil for disposal (`soil_waste`)

Only characterized surplus exported for disposal; record wet mass and recipient. Contaminated soil and external beneficial-use lots are distinct rows/destinations.

- Selected flow: Non-hazardous excavated mineral soil for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_waste; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`

###### Non-hazardous marine dredged mineral sediment, wet (`sediment_waste`)

Conditional actual pleasure-marina capital dredging; retain sediment tests, wet/dry state and destination. Removed sediment is not an environmental plume.

- Selected flow: Non-hazardous marine dredged mineral sediment, wet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_waste; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`

### Process: Drainage and irrigation installation (`drainage`)

Choose actual undrained/piped/supplementary/engineered-rootzone profile from site soil/tests; no universal pipe spacing/depth/sand ratio. Retain outfall and soil/layer compatibility.

#### Inputs

##### Product flows

###### Perforated high-density polyethylene land-drain pipe (`drain_pipe`)

Actual supplied drainage pipe consumed for the declared route, including pre-installation damage, cutoffs and rejected/replaced pipe. Retain exact polymer, perforation, diameter, wall, supplier state and measured mass; record installed length separately. Preserve HDPE resin and perforation evidence; a generic plastic-pipe or unformed-polymer identity is insufficient. Do not substitute pressure irrigation pipe for the specified drain.

- Selected flow: Perforated high-density polyethylene land-drain pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_drainage; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_drainage`
- Sources: `se-natural-2025`; `cedd-landscape-2026`

###### Washed angular mineral drainage gravel (`drain_gravel`)

Only the actual specified drainage profile; project/laboratory grading and permeability evidence govern, with no universal grain size or recipe.

- Selected flow: Washed angular mineral drainage gravel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_drainage; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_drainage`
- Sources: `se-natural-2025`; `cedd-landscape-2026`

###### Silica sand (`drain_sand`)

Only actual supplied silica sand for the selected drainage/rootzone profile. Independently verify supplier mineral composition, actual production route, moisture/cleanliness, measured delivered mass and laboratory grading compatible with the project layers/percolation. Determine the actual processing steps from supplier evidence. Project particle grading, including any narrower specification, and any mixing ratio require evidence; no universal size envelope or recipe is imposed.

- Selected flow: Silica sand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_drainage; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_drainage`
- Sources: `se-natural-2025`; `cedd-landscape-2026`

###### Nonwoven polypropylene separation geotextile (`geotextile`)

Actual specified filter/separation fabric; document polymer, areal mass, permeability and overlap. Generic nonwoven fabric is not enough.

- Selected flow: Nonwoven polypropylene separation geotextile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_drainage; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_drainage`
- Sources: `se-natural-2025`; `cedd-landscape-2026`

###### High-density polyethylene irrigation pressure pipe (`irrigation_pipe`)

Actual supplied irrigation pipe consumed for the declared route, including pre-installation damage, cutoffs and rejected/replaced pipe; grade, pressure, fittings and supply gate remain required. Record consumed quantity and installed length separately. Perforated drains and actual sprinkler/valve assemblies remain separate rows.

- Selected flow: High-density polyethylene irrigation pressure pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_drainage; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_drainage`
- Sources: `se-natural-2025`; `cedd-landscape-2026`

### Process: Sport/racing surfaces and establishment (`surface`)

Actual seed/sod/sprig establishment, layered base/pad/carpet/polymer/joints/marking and acceptance are selected alternatives. USGA Steps2–8 guide only declared USGA greens; tees/fairways/bunkers/pathways have own geometry/materials. Horse/car/cycle courses need actual track profile, drainage and containment.

#### Inputs

##### Product flows

###### crushed stone 16/32 (`base_stone`)

Use public Mass/kg identity only for actual matching 16/32 crushed-stone layer; retain supplied gate/state and included transport. Other grades require own row.

- Selected flow: crushed stone 16/32 `4f197bee-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_surface; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_surface`
- Sources: `se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### Perennial ryegrass seed (Lolium perenne) (`grass_seed`)

Only actual separately supplied ryegrass seed; record cultivar, purity, germination and application. Separately purchased seeds of other taxa and inputs actually mixed onsite require their own rows, with real mixing activity retained. A purchased preblended seed mixture instead requires one row for that actual supplied mixture with supplier composition, batch and upstream mixing/supply boundary; its embedded seed species are composition evidence, not additional purchased input rows. Separately added seed outside the purchased mixture remains an extra exchange. No compulsory one-species route is assumed.

- Selected flow: Perennial ryegrass seed (Lolium perenne)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_surface; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_surface`
- Sources: `se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### Perennial ryegrass turf sod (`turf_sod`)

Conditional actual sod; retain backing soil, moisture, cultivar, area and measured areal mass. Supplier seed is not another onsite input. Other sod/sprig taxa require separate rows.

- Selected flow: Perennial ryegrass turf sod
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_surface; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_surface`
- Sources: `se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### Artificial grass carpet (`artificial_carpet`)

Only an actual supplied synthetic carpet assembly with independently verified supplier bill of materials, fibre/backing composition, pile, measured areal mass and installation/cutting records. Confirm whether infill, adhesive and shockpad are included or separately supplied, and count each component once. Verify the physical supplier and assembly inclusion scope independently. Performance, safety and service-life claims used in modelling require evidence for the actual product and conditions; no universal duration or safety/non-toxic promise is assumed. This synthetic assembly cannot substitute for living planting stock.

- Selected flow: Artificial grass carpet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_surface; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_surface`
- Sources: `se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### Silica sand (`infill_sand`)

Conditional actual silica-sand infill for a specified installed sports surface; no universal infill requirement. Independently verify supplier mineral composition, actual production route, dry/moist state, particle grading/purity, surface-compatible specification and real loading/return records. Determine the actual processing steps from supplier evidence. Any accepted particle envelope, narrower project grading and dosage require physical evidence; no default envelope or dosage is prescribed. Keep this infill exchange separate from drainage/rootzone sand.

- Selected flow: Silica sand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_surface; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_surface`
- Sources: `se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### Recycled tyre-derived SBR rubber infill granules (`sbr_infill`)

Only actual specified recycled tyre SBR infill; retain composition/size, contamination tests and containment. Raw polymer or unspecified rubber powder is not this granulate.

- Selected flow: Recycled tyre-derived SBR rubber infill granules
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_surface; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_surface`
- Sources: `se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### Vulcanized EPDM sport-surface granules (`epdm_granules`)

Only actual EPDM surface; colour/additives and virgin/recycled origin are recorded. Not required on natural turf, asphalt or every artificial carpet.

- Selected flow: Vulcanized EPDM sport-surface granules
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_surface; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_surface`
- Sources: `se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### Two-component polyurethane sports-surface binder (`surface_binder`)

Only actual two-component supplied formulation with declared components/ratio/cured-system boundary. One-component moisture-cured adhesive cannot substitute for this formulation; record actual mixing/loss and evidenced constituent releases.

- Selected flow: Two-component polyurethane sports-surface binder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_surface; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_surface`
- Sources: `se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### Prefabricated recycled SBR rubber shockpad sheet (`shockpad`)

Actual specified supplied sheet with thickness/areal mass/binder and tests. An in-situ layer requires its actual ingredient/application rows.

- Selected flow: Prefabricated recycled SBR rubber shockpad sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_surface; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_surface`
- Sources: `se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### Asphalt mixture (`asphalt_course`)

Actual factory-supplied aggregate/binder/filler mix for courts, racing course, track base or paths; declare mixture/temperature/layer/gate. Not neat bitumen or onsite manufacture; UUID proves neither porosity nor sport qualification.

- Selected flow: Asphalt mixture `ad29a865-2fd6-41da-99d2-9669b9c7984d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_surface; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_surface`
- Sources: `se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

### Process: Garden, habitat and planting establishment (`landscape`)

All actual taxa, rootzone, soil handling, amendments, mulch, watering and replacement records through contractual final acceptance are required; practical completion and final establishment endpoint differ. Animal husbandry after handover separate.

#### Inputs

##### Product flows

###### Live field maple nursery tree (Acer campestre) (`garden_tree`)

Only actually planted taxon with rootball/bare-root/container state, size and accepted replacement/establishment records. Actual botanical/zoo collections require every real taxon; this example does not narrow scope.

- Selected flow: Live field maple nursery tree (Acer campestre)
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_plant; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plant`
- Sources: `cedd-landscape-2026`; `defra-zoo-2012`; `usga-green-2018`

###### Live common dogwood nursery shrub (Cornus sanguinea) (`garden_shrub`)

Only actual nursery shrub including pre-final-acceptance replacements, with rooting/container and planted geometry. Other species need own rows.

- Selected flow: Live common dogwood nursery shrub (Cornus sanguinea)
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_plant; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plant`
- Sources: `cedd-landscape-2026`; `defra-zoo-2012`; `usga-green-2018`

###### Mature screened green-waste compost (`compost`)

Only actual tested rootzone amendment with feedstock, maturity, moisture and actual recipe. Not peat and no default mixing percentage.

- Selected flow: Mature screened green-waste compost
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_landscape; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_landscape`
- Sources: `cedd-landscape-2026`; `defra-zoo-2012`; `usga-green-2018`

###### Ammonium nitrate fertilizer (`fertilizer`)

Only actual test/agronomy-based establishment application; retain formulation/N content/time/place and amount. Other fertilizers/pesticides are separate chemicals; routine future use not assumed.

- Selected flow: Ammonium nitrate fertilizer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_landscape; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_landscape`
- Sources: `cedd-landscape-2026`; `defra-zoo-2012`; `usga-green-2018`

###### Clean untreated wood-chip landscape mulch (`wood_mulch`)

Only actual mulching with provenance, contamination/moisture and applied/returned amount. No automatic storage/degradation carbon credit in a delivery module.

- Selected flow: Clean untreated wood-chip landscape mulch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_landscape; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_landscape`
- Sources: `cedd-landscape-2026`; `defra-zoo-2012`; `usga-green-2018`

### Process: Civil structures, enclosures and coastal access (`structure`)

Actual placing/curing, rebar/fence erection, species-specific containment, access and fixed/floating berth/piling methods. Shore protection/nourishment follows real erosion/habitat evidence; no compulsory breakwater/dredging.

#### Inputs

##### Product flows

###### Fresh ready-mixed Portland-cement concrete (`wet_concrete`)

Actual delivered concrete for slabs/kerbs/foundations or marina structures; retain mix, fresh state, mass/volume/density, curing and rejection. Hardened or precast concrete is not this fresh supplied material. Onsite batching requires own ingredients.

- Selected flow: Fresh ready-mixed Portland-cement concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_structure; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_structure`
- Sources: `cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Hot rolled rebar steel (`reinforcing_bar`)

Only public-factory-matched hot-rolled low-alloy bar with C≤0.2%; verify grade/diameter, actual cutting/bending and offcuts. Other alloys/mesh require separate identities.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_structure; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_structure`
- Sources: `cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Galvanized welded steel enclosure mesh panel (`enclosure_mesh`)

Actual sports/zoo species-specific containment panel with aperture/coating/size and secure posts/gates. Posts/gates/energizers are separate. Generic wire mesh does not confirm this assembly.

- Selected flow: Galvanized welded steel enclosure mesh panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_structure; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_structure`
- Sources: `cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Laminated safety-glass zoo viewing panel (`viewing_glass`)

Actual supplied viewing laminate consumed for the declared enclosure, including pre-installation damage and rejected/replaced panels. Preserve composition, thickness, fixings and species-specific resistance acceptance evidence; record installed accepted geometry separately. Generic sheet glass is not this assembly; no assumed load.

- Selected flow: Laminated safety-glass zoo viewing panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_structure; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_structure`
- Sources: `cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Preservative-treated softwood decking plank (`deck_plank`)

Actual park/beach/marina decking with species, preservative/retention, moisture, geometry, access/slip test and supplied gate. Chemical releases only if actual evidenced onsite treatment/release.

- Selected flow: Preservative-treated softwood decking plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_structure; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_structure`
- Sources: `cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Galvanized steel tubular marina guide pile (`steel_pile`)

Only actual pile route; retain steel/coating, dimensions/mass, driving/drilling and acceptance. A floating structure without guide piles is not forced into this route.

- Selected flow: Galvanized steel tubular marina guide pile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_structure; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_structure`
- Sources: `cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Precast reinforced-concrete floating marina pontoon (`pontoon`)

Actual factory floating assembly with flotation core, shell/reinforcement/hardware and gate; do not also charge embedded ingredients. Fixed piers require own actual structures.

- Selected flow: Precast reinforced-concrete floating marina pontoon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_structure; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_structure`
- Sources: `cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### AISI 316 stainless-steel mooring cleat (`mooring_cleat`)

Only actual alloy-matched installed cleat; specification, mass and fixings are collected. Other mooring anchors/bollards need own rows, no assumed load.

- Selected flow: AISI 316 stainless-steel mooring cleat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_structure; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_structure`
- Sources: `cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Graded native-mineral beach nourishment sand (`beach_sand`)

Only actual beach-installation nourishment with compatible source/receiver sediment, tests and surveyed placement. No compulsory nourishment; industrial silica sand is not a native-mineral identity without matching evidence.

- Selected flow: Graded native-mineral beach nourishment sand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_structure; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_structure`
- Sources: `cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

### Process: Installed lighting and site equipment (`services`)

Retain full installed BOM, supplied assemblies, connections and commissioning. Add poles/switchgear/fittings/sprinklers/play equipment/tanks/chemicals/commissioning fuels individually; cannot omit real technology because UUID is unavailable.

#### Inputs

##### Product flows

###### Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources (`luminaire`)

Only matching complete manufactured factory-gate LED-only luminaire; retain power/optical/weather rating, assembly boundary, measured mass/count and installed configuration. Poles/cables separate.

- Selected flow: Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_material_services; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_services`
- Sources: `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Low-voltage cable (`cable`)

Only actual CN factory-gate cable matching GB/T12706.1-2020, voltage≤1000 V; verify conductor/insulation/sheath/cross-section/rating. Preserve public Length/m and cut/returned lengths; excludes laying/use losses/disposal. Other origin/specification needs own identity.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_services; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Electric centrifugal stormwater drainage pump assembly (`drainage_pump`)

Only actual permanent pump with motor/assembly boundary and commissioning. Temporary dewatering plant belongs to support/reuse.

- Selected flow: Electric centrifugal stormwater drainage pump assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_services; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Fixed electric marina sewage pump-out skid (`pumpout_skid`)

Actual permanently installed marina sewage system with collection/pipeline interfaces and tests; future boat sewage volume is operational and excluded.

- Selected flow: Fixed electric marina sewage pump-out skid
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_services; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### Marina petrol transfer dispenser assembly (`fuel_dispenser`)

Only actual installed petrol station; retain containment/storage/pipeline/electrical interfaces. Actual commissioning petrol is another row; future boat fueling is excluded.

- Selected flow: Marina petrol transfer dispenser assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_services; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

### Process: Construction plant, utilities and environmental controls (`support`)

Record excavation/compaction/turf installation/seeding/paving/concrete pumping/vibration/crane/pile/pump/test devices. Utilities/releases are tagged once by task/device/date. Temporary treatment/containment is included.

#### Inputs

##### Product flows

###### Diesel fuel (`site_diesel`)

Actual diesel matching grade/formulation-unspecified material identity; independently collect supplier grade, fossil/bio blend, density if volume-measured and device/task use. No refinery inventory, heat content or mandatory exhaust is supplied by identity.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_energy; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### Alternating current (`site_electricity_cn_lv`)

Only actual CN grid-average consumption at user <1 kV; retain actual grid/voltage/meter boundary. Preserve Net calorific value/MJ, kWh×3.6. Other grids/voltages/generation need own rows.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_energy; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### Treated mains water delivered to construction site (`supplied_water`)

Actual task-metered dust-control/curing/establishment/test supply with local gate and supply/transport link. Hong Kong treatment-plant-gate water is not region-free onsite supply; no assumed purity or density.

- Selected flow: Treated mains water delivered to construction site
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_water; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

##### Elementary flows

###### ground water (`groundwater_resource`)

Only actual direct groundwater abstraction/dewatering, CAS7732-18-5, Resources from water, Volume/m3; retain actual geography/stratum/time/quantity. Not supply/discharge or automatic consumptive use.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_water; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### sea water (`sea_resource`)

Only actual direct coastal construction/test sea intake, CAS7732-18-5, Resources from water, primary Mass/kg. Measure mass or volume with supported same-salinity/temperature density; separately conserve volume ledger. Unknown density stays review.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_water; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

#### Outputs

##### Waste flows

###### Concrete washout alkaline suspension for treatment (`washout`)

Actual separately collected washout with pH/solids/water and recipient; not direct environmental discharge or unrelated washing-wastewater route.

- Selected flow: Concrete washout alkaline suspension for treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_waste_support; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_support`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### Used mineral hydraulic oil (`used_oil`)

Only actual onsite servicing/leak collection; retain composition and contained recipient. Collected waste is not assumed soil/water emission.

- Selected flow: Used mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_waste_support; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_support`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only actual fossil CO2 immediate release to outside unspecified air, CAS124-38-9; species measurement or independently reviewed fuel-carbon balance with actual fossil fraction/oxidation. Fuel presence alone gives no amount. Separate biogenic/land-use carbon.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_release; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### nitrogen monoxide (`nitrogen_monoxide`)

Only actual molecular NO, CAS10102-43-9, immediate outside unspecified air, with speciation evidence. NOx-as-NO2, NO2 and N2O are not this exchange.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_release; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only actual molecular NO2, CAS10102-44-0, immediate outside unspecified air. NOx-as-NO2 total is not molecular NO2; N2O4 is a different molecular exchange.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_release; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### particles (PM2.5) (`pm_fine`)

Only net external immediate unspecified-air PM2.5 release with fraction-resolved dust/exhaust evidence and actual controls. Not indoor exposure, collected bag dust or TSP.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_release; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Only actual disjoint 2.5–10 micrometre immediate outside unspecified-air fraction. Do not also count total PM10 for same release; historical area/month TSP factor is not this quantity.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_release; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### Water (`freshwater_discharge`)

Only actual liquid discharge to freshwater receiver, CAS7732-18-5, Emissions to fresh water, Volume/m3. Record source/receiver/time/volume/salinity/quality; separately monitor and add each released contaminant. Not supply/intake/vapour/treatment-bound liquid.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_water; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### Water (`marine_water_discharge`)

Only actual liquid direct discharge to sea-water receiver, CAS7732-18-5, Emissions to sea water, Volume/m3. Record origin, actual receiving marine area/time/volume/salinity and separately monitored constituents; no clean-water or zero-pollution assumption. Not fresh receiver, resource intake, vapour or treatment-bound liquid.

- Selected flow: Water `631ecf13-0e51-4e35-8235-c6f80c60d72c`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_water; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

### Process: Logistics and reusable construction assets (`logistics`)

Record loaded/return legs and already embodied delivery; persistent cross-project physical asset/use records support capital/formwork share, unknown denominator stays review.

#### Inputs

##### Product flows

###### Diesel fuel (`transport_diesel`)

Actual own/contractor freight fuel outside embodied supplier/service boundaries; actual load/return/route attributed once. No duplicate site fuel or complete purchased freight-service burden.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_transport; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`

###### Complete diesel hydraulic excavator (`excavator_capital`)

Only explicitly included manufacture module: measured net mass of the actual complete excavator multiplied by a supported assigned causal activity share; retain original mass and dimensionless share separately. Link manufacturing inventory at the actual mass reference and scale it once, not a kg-labelled burden vector. Persistent cross-project cumulative share≤1; unknown life/activity denominator stays review, never restart full manufacture per project.

- Selected flow: Complete diesel hydraulic excavator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_reuse; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reuse`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`

###### Reusable sawn-softwood concrete formwork panel (`timber_formwork`)

Only actual temporary formwork; supported reuse/return and persistent component ledger conserve manufacturing shares. Permanent decking is a different destination.

- Selected flow: Reusable sawn-softwood concrete formwork panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_reuse; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reuse`
- Sources: `cedd-landscape-2026`; `epa-marina-2001`

### Process: Testing, correction, cleanup and accepted output (`handover`)

Reconcile as-built geometry/layers/equipment, surface/drainage/containment/electrical tests, commissioning/correction and establishment/replacement. Segregate actual cleanup/waste and recipients.

#### Outputs

##### Product flows

###### Accepted configured outdoor sport or recreation facility (`finished_facility`)

One complete actual accepted facility with consistent site/configuration and contractual establishment/corrected defects; reference and output name are identical, no invented facility mass or life.

- Selected flow: Accepted configured outdoor sport or recreation facility
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Sources: `un-cpc3-2025`; `cedd-landscape-2026`; `se-natural-2025`

##### Waste flows

###### Artificial grass carpet offcuts (`carpet_offcuts`)

Only actual offcut assembly with backing/fibre and recipient; detached infill/other polymer offcuts separately, no automatic recycling credit.

- Selected flow: Artificial grass carpet offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_waste_handover; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_handover`
- Sources: `un-cpc3-2025`; `cedd-landscape-2026`; `se-natural-2025`

###### Hardened Portland-cement concrete offcuts (`concrete_offcuts`)

Actual non-hazardous solid waste from placing/correction; separate reinforcement/coatings, verify recipient. Not fresh concrete or washwater.

- Selected flow: Hardened Portland-cement concrete offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable atomic exchange for this facility using cp_waste_handover; preserve lot/state/unit, only when the stated physical condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_handover`
- Sources: `un-cpc3-2025`; `cedd-landscape-2026`; `se-natural-2025`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| a_direct | Use cp_material; cp_material_drainage; cp_material_surface; cp_material_landscape; cp_material_structure; cp_material_services/cp_energy/cp_transport to assign measured task/location/lot records before shared allocation. Use actual submetering or supported causal activity for shared plant/utilities; disclose residual and denominator. Cost/area is not automatically appropriate. |  |
| a_reuse | Use cp_reuse as a persistent machine/formwork/component ledger across projects/periods/reuse scenarios; supported activity/service denominator and manufacture shares summing≤1 for same asset. Unknown denominator stays review. Do not restart full manufacture per project; loss/retirement/refurbishment separately evidenced. |  |
| a_destination | Same-site reuse is internal transfer; external beneficial-use and disposal destinations are exclusive per portion. No automatic avoided virgin material/recycling/biogenic-carbon credit. Extended credits need reviewed method, equivalence and conservation. | cedd-landscape-2026; epa-marina-2001 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_handover | handover | Facility acceptance | acceptance_record | site/perimeter/functions; retained assets; original/as-built geometry; layers/track/course; taxa/enclosures/berth; tests/defects; final acceptance/establishment endpoint | Signed acceptance, surveyed geometry and full installed/established schedule, corrected defects | item | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_material | earth | imported_fill; topsoil | delivery_installation_record | row/lot; composition/state/supplier gate; specifications; delivered/returned/installed/wasted and stocks; original unit; same-lot moisture/density/areal mass if converted; pre-installation damaged/rejected/replaced quantities; opening/closing reusable stock; verified transfers | Calibrated weighing, delivery certificates, surveyed layer/rootzone and same-lot conversion reconciliation; apply b_consumed_inputs to all material/component inputs, retaining all actual consumed losses before installation/acceptance, separately from installed geometry; This protocol covers earth only, including these declared rows and any additionally evidenced atomic inputs occurring in this process. Reconcile the related stage protocols against the same source ledgers; attribute each physical quantity once and retain actual failed/rework consumption and waste. | kg | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_material_drainage | drainage | drain_pipe; drain_gravel; drain_sand; geotextile; irrigation_pipe | delivery_installation_record | row/lot; composition/state/supplier gate; specifications; delivered/returned/installed/wasted and stocks; original unit; same-lot moisture/density/areal mass if converted; pre-installation damaged/rejected/replaced quantities; opening/closing reusable stock; verified transfers | Calibrated weighing, delivery certificates, surveyed layer/rootzone and same-lot conversion reconciliation; apply b_consumed_inputs to all material/component inputs, retaining all actual consumed losses before installation/acceptance, separately from installed geometry; This protocol covers drainage only, including these declared rows and any additionally evidenced atomic inputs occurring in this process. Reconcile the related stage protocols against the same source ledgers; attribute each physical quantity once and retain actual failed/rework consumption and waste. | kg | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_material_surface | surface | base_stone; grass_seed; turf_sod; artificial_carpet; infill_sand; sbr_infill; epdm_granules; surface_binder; shockpad; asphalt_course | delivery_installation_record | row/lot; composition/state/supplier gate; specifications; delivered/returned/installed/wasted and stocks; original unit; same-lot moisture/density/areal mass if converted; pre-installation damaged/rejected/replaced quantities; opening/closing reusable stock; verified transfers | Calibrated weighing, delivery certificates, surveyed layer/rootzone and same-lot conversion reconciliation; apply b_consumed_inputs to all material/component inputs, retaining all actual consumed losses before installation/acceptance, separately from installed geometry; This protocol covers surface only, including these declared rows and any additionally evidenced atomic inputs occurring in this process. Reconcile the related stage protocols against the same source ledgers; attribute each physical quantity once and retain actual failed/rework consumption and waste. | kg | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_material_landscape | landscape | compost; fertilizer; wood_mulch | delivery_installation_record | row/lot; composition/state/supplier gate; specifications; delivered/returned/installed/wasted and stocks; original unit; same-lot moisture/density/areal mass if converted; pre-installation damaged/rejected/replaced quantities; opening/closing reusable stock; verified transfers | Calibrated weighing, delivery certificates, surveyed layer/rootzone and same-lot conversion reconciliation; apply b_consumed_inputs to all material/component inputs, retaining all actual consumed losses before installation/acceptance, separately from installed geometry; This protocol covers landscape only, including these declared rows and any additionally evidenced atomic inputs occurring in this process. Reconcile the related stage protocols against the same source ledgers; attribute each physical quantity once and retain actual failed/rework consumption and waste. | kg | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_material_structure | structure | wet_concrete; reinforcing_bar; enclosure_mesh; viewing_glass; deck_plank; steel_pile; pontoon; mooring_cleat; beach_sand | delivery_installation_record | row/lot; composition/state/supplier gate; specifications; delivered/returned/installed/wasted and stocks; original unit; same-lot moisture/density/areal mass if converted; pre-installation damaged/rejected/replaced quantities; opening/closing reusable stock; verified transfers | Calibrated weighing, delivery certificates, surveyed layer/rootzone and same-lot conversion reconciliation; apply b_consumed_inputs to all material/component inputs, retaining all actual consumed losses before installation/acceptance, separately from installed geometry; This protocol covers structure only, including these declared rows and any additionally evidenced atomic inputs occurring in this process. Reconcile the related stage protocols against the same source ledgers; attribute each physical quantity once and retain actual failed/rework consumption and waste. | kg | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_material_services | services | luminaire | delivery_installation_record | row/lot; composition/state/supplier gate; specifications; delivered/returned/installed/wasted and stocks; original unit; same-lot moisture/density/areal mass if converted; pre-installation damaged/rejected/replaced quantities; opening/closing reusable stock; verified transfers | Calibrated weighing, delivery certificates, surveyed layer/rootzone and same-lot conversion reconciliation; apply b_consumed_inputs to all material/component inputs, retaining all actual consumed losses before installation/acceptance, separately from installed geometry; This protocol covers services only, including these declared rows and any additionally evidenced atomic inputs occurring in this process. Reconcile the related stage protocols against the same source ledgers; attribute each physical quantity once and retain actual failed/rework consumption and waste. | kg | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_plant | landscape | Each live taxon | nursery_planting_record | taxon/cultivar/rooting/container/size; received/planted/replaced count; geometry; dated inspection/acceptance and rejected destinations; pre-planting losses; opening/closing reusable stock; verified returns/transfers | Nursery counts and actual planting/replacement inspections through final acceptance; count all attributable nursery plants consumed through final acceptance, including pre-planting losses and failed establishment/replacements, under b_consumed_inputs; record successful planted count and dead-plant waste separately | item | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_services | services | Each cable/equipment | installation_test_record | component/specification/assembly boundary; supplier/geography; actual installed length/count; cut/return; commissioned connections/tests | Traced delivery, measured length/count and configuration-test reconciliation | m; item | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_energy | support | Fuel and electricity separately | meter_device_record | task/device/date; grid/voltage/meter readings; fuel delivery/stocks/returns/grade/composition/density if converted; supplier boundary | Calibrated task meters/fuel logs; actual batch density/heat content when needed, not public property coefficients | kg; kWh; MJ | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_water | support | Supply/intake/discharge separately | meter_receiver_record | task/date; actual origin/geography/receiver; freshwater/sea; volume/flux/time; salinity/temperature/matched density for sea kg; storage/reuse; separate pollutant samples/treatment destination | Meter each interface/conserve water volumes; sea mass by weighing or same-condition density; independently monitor contaminants, never assume purity | m3; kg | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_release | support | Each substance/fraction | measurement_reviewed_model | source/task; species/CAS/origin; medium/submedium/time; particle fraction; control state; measured flux/activity/factor original; background and uncertainty | Representative species/fraction measurement or independently reviewed matching model; integrate actual net flux, identify unmeasured releases | kg | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_waste | earth | soil_waste; sediment_waste | destination_record | row/lot/composition/hazard tests/wet-dry state/mass-volume; actual origin/recipient/transport/treatment/cleanup | Separate weigh/meter lots and signed receipts; soil/sediment/oil/washout distinct, no default treatment/recycle efficiency; This protocol covers earth only, including these declared rows and any additionally evidenced atomic wastes occurring in this process. Reconcile the related stage protocols against the same source ledgers; attribute each physical quantity once and retain actual failed/rework consumption and waste. | kg; m3 | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_waste_support | support | washout; used_oil | destination_record | row/lot/composition/hazard tests/wet-dry state/mass-volume; actual origin/recipient/transport/treatment/cleanup | Separate weigh/meter lots and signed receipts; soil/sediment/oil/washout distinct, no default treatment/recycle efficiency; This protocol covers support only, including these declared rows and any additionally evidenced atomic wastes occurring in this process. Reconcile the related stage protocols against the same source ledgers; attribute each physical quantity once and retain actual failed/rework consumption and waste. | kg; m3 | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_waste_handover | handover | carpet_offcuts; concrete_offcuts | destination_record | row/lot/composition/hazard tests/wet-dry state/mass-volume; actual origin/recipient/transport/treatment/cleanup | Separate weigh/meter lots and signed receipts; soil/sediment/oil/washout distinct, no default treatment/recycle efficiency; This protocol covers handover only, including these declared rows and any additionally evidenced atomic wastes occurring in this process. Reconcile the related stage protocols against the same source ledgers; attribute each physical quantity once and retain actual failed/rework consumption and waste. | kg; m3 | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_transport | logistics | Real freight fuel/legs | load_route_fuel_record | cargo/device/origin/destination/leg; actual mass-distance-load-return/fuel; supplier-included legs and assigned share | Actual load/route/fuel logs with embodied delivery reconciliation; no full service plus full fuel double charge | kg; km | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |
| cp_reuse | logistics | Reused asset manufacture share | cross_project_ledger | asset/configuration/measured mass; actual activity; supported cumulative service denominator; previous/current shares; transfers/returns/loss/refurbishment | Persistent cross-project physical ledger and supported denominator, sum shares≤1; unknown denominator is review | kg; h; dimensionless | Each lot/task/meter/inspection | Actual construction through contractual final acceptance, including establishment/correction/commissioning/cleanup | Same site/facility perimeter and declared external supplies/destinations | per declared reference flow | Calibration/originals/representativeness/signed reconciliation/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_project | all inventory rows | Reconcile each actual attributable task/lot once for the single declared reference flow, retaining each physical unit and stocks/returns/installed/waste destinations; no division by assumed facility mass/life | cp_handover; cp_material; cp_material_drainage; cp_material_surface; cp_material_landscape; cp_material_structure; cp_material_services; cp_plant; cp_services; cp_energy; cp_water; cp_release; cp_waste; cp_waste_support; cp_waste_handover; cp_transport; cp_reuse | Exchange per declared reference flow | un-cpc3-2025 |
| c_state | Material state conversion | Volume-to-mass needs same-material/state measured density; area-to-mass needs same-product measured areal mass. Preserve moisture/temperature/salinity, units and uncertainty; retain original units if unproved | cp_material; cp_material_drainage; cp_material_surface; cp_material_landscape; cp_material_structure; cp_material_services; cp_water | Traceable physical quantity, never fabricated facility mass | cedd-landscape-2026 |
| c_energy | Electricity conversion | Metered kWh multiplied by 3.6 gives MJ; preserve adopted Net calorific value. Diesel here is Mass/kg and is not automatically converted to energy | cp_energy | Measured MJ per declared reference flow |  |
| c_release | Specific releases | Use substance/fraction-resolved measurement or independently reviewed matching activity-factor model; integrate net flux over actual time with background correction. Concentration/NTU/dB/excavated mass alone is not release mass | cp_release; cp_water; cp_energy | Specific substance-medium exchange; unsupported basis remains review | epa-marina-2001; epa-heavy-construction-1995 |
| c_share | Equipment/temporary manufacture | Actual asset manufacture inventory times supported causal activity share from persistent ledger; preserve physical mass and cumulative shares≤1 across projects/periods/reuses. Unknown denominator remains review | cp_reuse | Supported manufacture inventory per declared reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_entity | reference entity | Same site/perimeter/function/measured geometry/configuration/complete acceptance/establishment; no fabricated mass/life/recipe/certification | cp_handover |
| dq_material | each material/waste | Traceable lot/composition/state/gate/physical quantity/destination; disclose identity/range evidence gaps | cp_material; cp_material_drainage; cp_material_surface; cp_material_landscape; cp_material_structure; cp_material_services; cp_plant; cp_services; cp_waste; cp_waste_support; cp_waste_handover |
| dq_environment | environmental inventory | Actual receiver/species/fraction/time/representativeness; separate contaminants, unmeasured not zero, dB/NTU not forced to exchange quantity | cp_water; cp_release |
| dq_reuse | reused equipment/components | Persistent cross-project physical ledger/supported denominator/cumulative shares≤1; unknown life/activity requires review | cp_reuse |
| dq_completeness | project package | All actual routes/tasks/exchanges, individual non-applicability and separate upstream/downstream/measurement/identity coverage; candidate checks do not establish actual measured data/scientific approval | actual BOM/task ledger; cp_handover |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| v_reference | Require one actual complete accepted configuration, site/perimeter/use, measured geometry and final establishment/acceptance endpoint; output exactly 1 item with same reference product. Not a material bundle or construction service. | un-cpc3-2025 |
| v_route | Verify required support/handover and each occurring conditional task from drawings/ledger/BOM/tests. Cover all actual components, equipment, utilities, establishment/rework/logistics/waste; unseen branches cannot be claimed complete. | se-natural-2025; se-artificial-2013; cedd-landscape-2026; defra-zoo-2012; epa-marina-2001 |
| v_identity | Adopted UUIDs must match actual substance/state/origin/route/geography/medium/time and reference property/unit. Chinese name is official baseName. Cable remains Length/m, sea intake Mass/kg, discharge Volume/m3 with matching receiver. Unresolved identities remain explicit. | un-cpc3-2025 |
| v_basis | Consistent per-declared-reference-flow inventory/protocol basis, verified physical conversions, supplied/site interfaces, stock/waste balance and conserved reuse shares; inconclusive relationships stay review. | cedd-landscape-2026 |
| v_release | No fabricated compulsory dust/exhaust or clean/zero-pollution water. Verify NO versus NO2/NOx, disjoint PM fractions, actual external transfer, correct fresh/sea receiver and separately monitored constituents. Disclose uncharacterized noise/habitat/land carbon. | epa-heavy-construction-1995; epa-marina-2001 |
| v_coverage | Report checks, findings, omissions and measurement/identity/route/stage coverage separately. Upstream links do not make this whole-life/complete cradle-to-gate/comparative-equivalence methodology; technical candidate checks grant neither scientific approval nor publication. | un-cpc3-2025 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction/accepted facility entity record |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matched site/function/configuration and declared construction-delivery boundary; full life requires independent evidenced upstream/downstream stages |
| excluded_use | Unqualified full-life/complete cradle-to-gate/comparative equivalence; operational/husbandry service; assumed mass/life/recipe/certification/legal approval |
| required_metadata | Reference measured geometry/configuration; all routes/tasks; supply/transport; dates/acceptance/establishment; taxa/material states; grid/voltage; water resource/receiver; ledger/protocols; reuse shares; external links |
| required_quality_disclosure | Measured/modelled evidence/uncertainty/identity-range gaps; route/stage coverage; uncharacterized noise/habitat/land carbon/water contamination/missing releases; scientific review governed by metadata |
| update_trigger | Changed function/site/configuration/layers/taxa/supply/acceptance-establishment/water receiver/reuse denominator or new actual evidence/identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Explanatory Notes (30Jun2025), PDF/printed pp281–282; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retrieved 2026-10-06 | Scope only; excludes indoor sport, not methodological approval |
| se-natural-2025 | official_guidance | Sport England Natural Turf for Sport Part B (May2025), pp11–28,33–35; https://sportengland-production-files.s3.eu-west-2.amazonaws.com/s3fs-public/2025-05/NTS-Part-B-Playing-fields.pdf; retrieved 2026-10-06 | Natural turf drainage/construction alternatives and establishment; no transplanted dimensions/recipe |
| se-artificial-2013 | official_guidance | Sport England Artificial Surfaces for Outdoor Sport (Dec Revision003,2013), printed pp9–16,21–26 / PDF10–17,22–27; https://sportengland-production-files.s3.eu-west-2.amazonaws.com/s3fs-public/artificial-surfaces-for-outdoor-sports-2013.pdf; retrieved 2026-10-06 | Historical physical layers/processes only, not current certification/safety/lifetime/legality; actual specification/tests required |
| cedd-landscape-2026 | official_guidance | CEDD General Specification Civil Engineering Works 2020 Edition Vol1 Rev8 (23Jul2026), §3 pp3.3,3.14–3.15,3.18–3.24 / PDF116,127–128,131–137; https://www.cedd.gov.hk/filemanager/eng/content_978/GS%202020%20Vol%201%20Rev%208_clean.pdf; retrieved 2026-10-06 | Soil/planting and contractual establishment/acceptance; HK specifications only if adopted, no copied fixed amounts/periods |
| epa-marina-2001 | official_guidance | EPA National Management Measures Marinas and Recreational Boating (2001), §4 pp4-7,4-13,4-19,4-27,4-31,4-45,4-77; https://www.epa.gov/sites/default/files/2015-10/documents/2001_10_30_nps_mmsp_section4.pdf; retrieved 2026-10-06 | Historical new/expanded marina design/water/habitat mechanisms, selected shoreline/runoff/fueling/sewage installations; no current legal approval or factor |
| defra-zoo-2012 | official_guidance | DEFRA Standards of Modern Zoo Practice (2012), §§2.1–2.11,3.4,8.2–8.18; printed pp6–8,16–17 / PDF10–12,20–21; https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/69596/standards-of-zoo-practice.pdf; retrieved 2026-10-06 | Enclosure/drainage/access and species-specific installed configuration context; actual local acceptance, no universal loads/operation inventory |
| usga-green-2018 | official_guidance | USGA Recommendations for a Method of Putting Green Construction (2018), Steps2–8 printed pp2–15 / PDF3–16; primary authored document linked from USGA official collection; https://archive.lib.msu.edu/tic/usgamisc/monos/2018recommendationsmethodputtinggreen.pdf; retrieved 2026-10-06 | Only actual declared USGA-method greens/rootzone/establishment, not whole-course recipe; no copied layer depth/mix ratio/lifetime |
| epa-heavy-construction-1995 | official_guidance | EPA AP42 §13.2.3 Heavy Construction Operations (Jan1995), pp13.2.3-1–2; https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf; retrieved 2026-10-06 | Historical dust mechanisms and limits of area/month TSP only, no numerical factor, molecular exhaust quantity or PM fractions adopted |
