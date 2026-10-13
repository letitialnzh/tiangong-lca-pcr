---
pcr_id: pcr.constructions-and-construction-services.constructions.sewage-and-water-treatment-plant-delivery
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Sewage and water treatment plant and sewer-system construction delivery

## 1. Scope and Applicability

This PCR covers the construction and actual accepted delivery of sewage systems, sewage disposal/treatment plants and water-treatment/purification plants. The delivered object includes its declared civil structures, fixed hydraulic/process/E&M installations and real commissioning, not a construction service invoice, a package of building materials, one filter or the operating treatment service per m3. CPC 3.0 53253 supplies category context only. A new complete plant or a complete independently delivered expansion/reprovisioning stage must declare its existing-asset and external-pipeline interfaces.

Sewer systems explicitly remain within the classification meaning; separate long-distance water pipelines and local water/sewer mains are excluded by CPC, rather than silently absorbing their construction. A specific dataset must document which sewer-system chambers, conveyance/disposal structures and plant links are actually in its accepted delivery. An unclear mains/system boundary needs review. Conventional clarification/filtration, preliminary or chemically enhanced sewage treatment, biological/MBR, reuse and desalination are route conditions, not mutually mandatory technologies. A non-represented actual route needs complete atomic inventory expansion and evidence before a complete-category claim.

The default result is site-construction-to-handover. Material and equipment manufacture, transport, installation, actual later maintenance/renewal and demolition/destinations are distinct stages. Upstream providers may be linked only with declared gates and without duplicated embodied materials. No default mix, loss, site energy, geometry, capacity, service life, regulatory approval or whole-life result is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.sewage-and-water-treatment-plant-delivery |
| classification_refs | CPC 3.0 53253 — Sewage and water treatment plants |
| covered_products | Accepted sewer-system entities; sewage disposal/treatment plants; water treatment/purification plants; complete delivered new or reconstructed stages with explicit interfaces |
| excluded_products | Separately delivered long-distance water pipelines/local water or sewer mains; stand-alone filtering equipment manufacture; pure construction/engineering or operating treatment services; building shell presented as whole process plant |
| representative_product | One complete site-built treatment entity with actual declared civil and installed process scope, accepted functional test and measured geometry |
| production_route | Actual ground/civil works → fixed process and E&M installation → water/mechanical/functional trials → accepted handover; route-selected structures and treatment units |
| market_state | Installed at the declared site, complete within stated accepted stage and interfaces; no future ultimate capacity assumed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one actually accepted sewage-system or treatment-plant construction entity with declared treatment/disposal/purification function |
| How much | One complete delivered entity; declare measured capacity under actual accepted influent quality/load and test conditions in m3/day where relevant, actual tank volumes, building area and sewer-system length/diameters |
| How well | As-built configuration and delivery completeness; actual watertightness, hydraulic/process, mechanical/electrical/control and quality test results at declared conditions, with remaining defects disclosed |
| How long or cycle | One actual construction-to-handover campaign, with recorded commissioning dates/test duration; no operating lifetime assumed |
| reference_flow_link | accepted_entity |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted sewage or water treatment plant or sewer-system entity |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site/country and coordinates; entity or independently accepted stage identifier; complete new/existing asset interface; sewer/mains distinction; treatment and feed type/salinity; delivered civil/structure/building/pipework scope; installed train and equipment/media list; measured footprint/floor area, tank usable/gross volumes and sewer lengths/diameters; actual capacity and influent/test conditions; acceptance date and trial duration; exclusion/upstream-link and capital-equipment coverage; water/waste/emission destinations |

item denotes the public Item(s) count unit. Record qualifiers for the actual configuration of the same entity: a sewer system without treatment tanks/media or a plant without a sewer network may use not_applicable only with bounded interface/as-built evidence; an applicable but unmeasured field remains a gap. Use actual treatment, conveyance or disposal function tests as applicable, without inventing tanks, filter media or capacity. One entity cannot be compared to another merely because both output one item. Mass-based reference identity may be reconsidered only with complete same-entity measured material/assembly scope and a supported conversion; this PCR does not supply such mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 1 item is one actually accepted complete declared plant/system entity or complete delivered expansion stage. item is the display alias of public Item(s); actual geometry and treatment/conveyance/disposal duty are qualifiers for applicable installed configuration; absent fields require evidence-backed not_applicable. These are not an assumed multiplier or lifetime output. |
| `physical_quantities` | all inventory rows | Declared original property | kg; m3; m; item; MJ; tkm | Preserve actual wet/dry/material/assembly scope; volume-to-mass requires same batch density and condition. Counts of pumps measured by Mass require same-configuration measured net mass. No plant-wide guessed mass or forced 1 kg reference. Match units to each row’s original property: mass/kg, volume/m3, length/m, count/item, energy/MJ under energy_units, and goods transport (mass*distance)/tkm under cp_transport. Preserve the measured energy conversions and actual freight activity; the listed units are alternatives by dimension, not simultaneous requirements. |
| `energy_units` | diesel; cn_lv_electricity; cn_mv_electricity; other_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Public reference property remains Net calorific value and energy unit group. Electricity MJ = recorded kWh × 3.6 per verified unit definition; fuel MJ = actual kg × batch-specific LHV (MJ/kg). Do not turn energy into kg or confuse gross and net calorific value. |
| `water_physical_state` | river_intake; groundwater_intake; sea_intake; freshwater_discharge; marine_water_discharge | Original Volume or Mass | m3; kg | River/groundwater and freshwater discharge retain Volume. Sea-water resource retains Mass, with measured volume×same-salinity/temperature evidenced density if needed; keep both ledgers. Water supply, resource extraction, technosphere effluent and actual elementary release are different crossings. |
| `nonadditive_qualifiers` | reference product; acceptance tests | Measured function and geometry | m; m2; m3; m3/day | Measure each tank/building/network scope separately and state footprint versus floor area, usable versus gross volume and hydraulic duty/test duration. Do not sum unlike dimensions or infer treatment function from area, cost, population or default service life. |

Verified public support bindings: Mass → Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg; Volume → Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`, m3; Net calorific value → Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`, MJ; Length → Units of length `838aaa22-0117-11db-92e3-0800200c9a66`, m. Flow-specific original reference properties control; these bindings do not approve any product identity.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual existing site and assets recorded before construction; purchased materials/equipment at declared supplier gates and actual site-entry/transport interfaces |
| starting_condition_role | foreground_entry_gate |
| product_classification_scope | Sewer systems, sewage disposal and water-treatment/purification civil entities; separate excluded mains/long-distance water-pipeline interfaces |
| recursive_input_rule | A purchased complete treatment module/previous plant in the same category is an upstream asset/provider input with its accepted boundary; never recursively recreate its manufacture while also including its provider. Existing retained plant is not a new whole-plant output |
| upstream_dataset_requirement | Compatible supplier gate, region, actual technology/material state and embodied assembly content. Separate raw material manufacture from onsite batching/installation; no provider UUID alone proves upstream LCI completeness |
| disclosure | Site/stage geometry/function; existing asset use and removals; actual route and trial gate; upstream/transport/capital coverage; later operation, maintenance/renewal and demolition excluded or explicitly separate; no full-life claim |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `construction_delivery` | dataset | Collect actual site works and pre-handover commissioning through signed complete delivery. Upstream material/equipment manufacture and transport have separate provider gates; this site dataset is not automatically complete cradle-to-gate or whole life. Report unmatched upstream links explicitly. | `wsd-shatin-project`; `dsd-shek-wu-hui-project`; `dsd-sewage-overview-2017` |
| `route_completeness` | all inventory rows | Build the real as-built process/train and civil-package register before selecting flows. Sewer systems, sewage disposal, conventional purification, biological/MBR and desalination/reuse are not reduced to a building shell or one filter. Add each actual atomic flow omitted by the illustrative cards, including non-concrete structures, sewers/chambers, fittings, valves, joints, welding consumables, media, chemicals and actual waste. A missing identity does not excuse dropping a needed unit. | `un-cpc-treatment-2025`; `wsd-water-treatment`; `dsd-shek-wu-hui-project`; `wsd-desalination` |
| `test_operation_gate` | commission | Define actual trial dates, tested train/duty and acceptance contract. Include repairs/retests, initial media and first-fill installation. Exclude continuing existing-plant commercial operation and all post-handover service unless separately modelled. Split DBO construction from actual maintenance/renewal/removal and destinations; no assumed life or repeat rate. | `dsd-sewage-overview-2017`; `wsd-desalination` |
| `water_release_gate` | utilities; commission | Track supplied water, direct abstraction, dewatering, internal recycle, contained washout, external treatment and direct discharge separately. Direct releases require actual chemistry, compartment and measurement/model evidence. Assess and disclose construction noise/vibration, land disturbance, odors and unmeasured constituents; no invention of default emission mass from monitoring concentrations or dB. Direct marine outfall needs water and each actual constituent with marine-compatible identities. | `epa-concrete-washout-2012`; `epd-shek-wu-hui-2007`; `wsd-desalination` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ground | Site formation and temporary retaining works | required | Actual clearance, excavation, backfill, subbase and drainage from the delivered system; all work-package quantities are retained even if example cards are absent. | foreground | per declared reference flow |
| civil | Foundations, water-retaining structures and ancillary buildings | conditional | Actual design: reinforcement, formwork, concrete placing/vibration/curing, joints and watertightness; non-concrete structures have their own material rows. Includes actual access roads/building shell within plant gate, not only one basin. | foreground | per declared reference flow |
| installation | Plant pipework, fixed equipment and initial media installation | conditional | Actual declared treatment route and sewer-system interface, fixed hydraulic/process/E&M works, initial media, electrical and control connections; equipment examples are conditional, not all required. | foreground | per declared reference flow |
| utilities | Site equipment operation, construction water and direct releases | required | Attribute actual fuel, supplied/direct water, power, reusable equipment and evidenced release to the responsible work package, including cleaning and defects. | foreground | per declared reference flow |
| commission | Water tests, route-specific commissioning and delivery trials | required | Actual dimensional, watertightness, mechanical, electrical/control and functional acceptance tests; record actual water, chemicals, sewage trials or RO trials only when performed. Isolate ongoing existing-plant operation and post-handover service. | foreground | per declared reference flow |
| transport | Material deliveries and exported-waste transport | conditional | Actual road legs with complete gates; other actual transport modes get separately verified atomic service rows. | foreground | per declared reference flow |
| handover | Documented acceptance and complete entity handover | required | Signed as-built scope, site and measured geometry, installed equipment list and functional-test records; one complete plant/system or complete delivered stage only. | reference_product | per declared reference flow |

### Process: Site formation and temporary retaining works (`ground`)

#### Inputs

##### Product flows

###### Crushed rock for foundation subbase (`subbase`)

Only actual imported crushed rock of declared grading; reconcile receipt, installed subbase and surplus. Excavated material reused within site is an internal transfer, not another purchased input.

- Selected flow: Crushed rock for foundation subbase
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epd-shek-wu-hui-2007`

###### Reusable steel sheet pile (`temporary_sheet_pile`)

Conditional temporary retaining route; collect actual pile section, mass, installation/extraction and use ledger. Manufacturing-equivalent mass is the verified attributable share; physical installed mass is retained separately.

- Selected flow: Reusable steel sheet pile
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temporary`
- Sources: `epd-shek-wu-hui-2007`

#### Outputs

##### Waste flows

###### Excavated mineral soil exported off site (`excavated_soil`)

Only soil actually exported; retain contamination tests, wet mass, moisture, reuse/disposal destination. Record excavated rock or contaminated sludge as separate additional exchanges if present.

- Selected flow: Excavated mineral soil exported off site
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epd-shek-wu-hui-2007`

### Process: Foundations, water-retaining structures and ancillary buildings (`civil`)

#### Inputs

##### Product flows

###### Fresh ready-mixed hydraulic-cement concrete (`ready_mix`)

Conditional purchased ready-mix route for actual foundations, water-retaining tanks, chambers or buildings. Record batch design, exposure/strength specification, fresh density and placement location. Do not pair its full burden with separately purchased cement/aggregate for the same batch.

- Selected flow: Fresh ready-mixed hydraulic-cement concrete
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usace-concrete-1994`; `epd-shek-wu-hui-2007`

###### Portland cement powder for on-site concrete batching (`batch_cement`)

Only separately procured Portland cement in an actual on-site batching route; measure each batch, remaining stock and rejected mix. No default composition or cement content.

- Selected flow: Portland cement powder for on-site concrete batching
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usace-concrete-1994`; `epa-concrete-washout-2012`

###### sand 0/2 (`batch_sand`)

Only actual undried natural fine aggregate with 0/2 grading, supplied from wet/dry quarry production at plant; retain measured batch moisture and original wet-mass basis. Other grades or dried sand require separate identity.

- Selected flow: sand 0/2 `4f1a182d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-concrete-washout-2012`

###### Crushed coarse aggregate for on-site concrete batching (`batch_stone`)

Conditional on actual site batching; document geological composition, particle grading and wet/dry basis per batch, without a prescribed ratio.

- Selected flow: Crushed coarse aggregate for on-site concrete batching
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-concrete-washout-2012`

###### Hot rolled rebar steel (`reinforcing_bar`)

Only hot-rolled low-alloy steel rebar with carbon C≤0.2%, matching the public original material condition, alloy bar classification and factory rolling route. Record grade, diameters, bar schedule and actual cut/bend/installed mass; non-alloy or other grade identities require separate verification.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usace-concrete-1994`

###### Reusable plywood formwork panel with declared wood species and coating (`formwork_panel`)

Only actual plywood formwork; physical volume follows measured thickness and area. Allocate manufacturing through the conserved reuse ledger; do not count purchased replacement and the same share twice.

- Selected flow: Reusable plywood formwork panel with declared wood species and coating
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temporary`
- Sources: `usace-concrete-1994`

###### PVC waterstop strip (`waterstop`)

Conditional actual PVC joint-waterstop design; record section, compound, delivered length and measured mass per length. Other elastomeric waterstops are separate products.

- Selected flow: PVC waterstop strip
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `usace-concrete-1994`

###### Epoxy-resin tank lining formulation (`epoxy_lining`)

Only actual lining specification; separately record each supplied resin/hardener if they cross the gate separately, mixing ratio from records, application mass and curing. No requirement that every tank is lined.

- Selected flow: Epoxy-resin tank lining formulation
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epd-shek-wu-hui-2007`

#### Outputs

##### Waste flows

###### Discarded hardened hydraulic-cement concrete (`concrete_waste`)

Only separated hardened offcuts or rejected concrete; distinguish wet returned ready mix and reinforcing steel. Retain actual receiving route.

- Selected flow: Discarded hardened hydraulic-cement concrete
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

###### Hot-rolled alloy reinforcing-steel offcut for recycling (`steel_offcut`)

Actual sorted cuttings; reconcile with purchased and installed rebar without automatic avoided-production credit.

- Selected flow: Hot-rolled alloy reinforcing-steel offcut for recycling
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usace-concrete-1994`

###### Contained alkaline concrete washout slurry water (`washout_water`)

Conditional chute/pump/form cleaning; record contained liquid composition and actual recovery/export. It is technosphere waste, not water-resource use or automatic environmental release. Dry washout solids are a separate row.

- Selected flow: Contained alkaline concrete washout slurry water
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-concrete-washout-2012`

###### Separated hardened concrete washout solids (`washout_solids`)

Only separated solids with measured moisture/state and destination; do not count the same solids again within slurry exported as a whole.

- Selected flow: Separated hardened concrete washout solids
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

### Process: Plant pipework, fixed equipment and initial media installation (`installation`)

Record the following inputs as actual net consumption attributable to delivery, including damage, rejected-and-scrapped units and replacement inputs before installation or acceptance, not only the final installed quantity. Reconcile gross receipts, opening stock, verified returns/transfers and closing usable stock through cp_install, keeping accepted installation configuration and waste destinations separate.

#### Inputs

##### Product flows

###### Steel Pipe (`steel_pipe`)

Only factory-produced welded circular steel pipe matching public route; actual diameter, wall, alloy, corrosion protection and service compatibility are required. Supplier coatings/fittings are within the measured assembly only when evidenced.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `epd-shek-wu-hui-2007`

###### Ductile-iron pressure pipe with declared lining (`ductile_pipe`)

Conditional actual pipe specification and delivery gate; record joint system, pressure class and installed geometry. Cast-iron fittings are not the pipe identity.

- Selected flow: Ductile-iron pressure pipe with declared lining
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `epd-shek-wu-hui-2007`

###### Precast reinforced-concrete sewer pipe (`concrete_sewer_pipe`)

Conditional sewer-system civil works within declared disposal-system delivery; reconcile pipe dimensions, joint leakage testing and separate excluded mains interface.

- Selected flow: Precast reinforced-concrete sewer pipe
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `un-cpc-treatment-2025`; `epd-shek-wu-hui-2007`

###### Pump (`pump`)

Actual liquid-pump factory-gate assemblies consumed for this project, including pre-installation damage, scrapping and replacements. Retain duty, fluid, materials, motor inclusion, quantity and measured net assembly mass; use the public Mass property. A separate motor is counted only if not included.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `wsd-shatin-project`; `dsd-sewage-overview-2017`

###### Mechanical bar-screen assembly for sewage (`screen`)

Conditional sewage preliminary treatment; actual bar spacing, capacity, structure and drive inclusion. No universal screening equipment count.

- Selected flow: Mechanical bar-screen assembly for sewage
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `dsd-sewage-overview-2017`

###### Clarifier sludge-scraper assembly (`scraper`)

Conditional actual sedimentation/flotation design; record tank interface and installed assembly, not the whole clarifier twice.

- Selected flow: Clarifier sludge-scraper assembly
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `wsd-water-treatment`; `dsd-shek-wu-hui-project`

###### Wastewater aeration blower assembly (`blower`)

Only actual biological or other aerated process; record flow/pressure test conditions, motor/controls scope. A fan/heater or compressed-air flow does not identify a blower assembly.

- Selected flow: Wastewater aeration blower assembly
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `dsd-shek-wu-hui-project`; `dsd-sewage-overview-2017`

###### Elastomer-membrane fine-bubble aeration diffuser (`diffuser`)

Conditional actual installed diffuser; retain membrane polymer, active area, supporting body and expected duty only from project records.

- Selected flow: Elastomer-membrane fine-bubble aeration diffuser
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `dsd-shek-wu-hui-project`

###### Polymeric membrane-bioreactor cassette (`mbr_cassette`)

Only actual MBR route; specify polymer, pore/cut-off definition, membrane area, cassette frame and delivered completeness. Do not substitute ion-exchange membrane.

- Selected flow: Polymeric membrane-bioreactor cassette
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `dsd-shek-wu-hui-project`

###### Reverse-osmosis membrane pressure-vessel module (`ro_module`)

Only actual desalination or reuse RO design; record membrane chemistry, active area, pressure-vessel inclusion and pressure/temperature/salinity test basis.

- Selected flow: Reverse-osmosis membrane pressure-vessel module
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `wsd-desalination`

###### Washed quartz filter sand of declared grading (`filter_sand`)

Only actual granular-bed initial fill; collect grade, cleanliness, moisture, bed depth and placed mass. A glass raw-material silica sand does not establish filtration-grade supply.

- Selected flow: Washed quartz filter sand of declared grading
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `wsd-water-treatment`

###### Graded anthracite filter medium (`filter_anthracite`)

Only actual filter-media initial fill, not combustion. Coal-washing factory product requires independently verified grading and downstream filter-media preparation before it can be selected for this row.

- Selected flow: Graded anthracite filter medium
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `wsd-water-treatment`

###### Granular activated-carbon filter medium (`gac_medium`)

Only actual initial adsorption bed; specify precursor, activation, grade, moisture and net fill mass. A complete carbon unit is not the loose medium. Granular adsorption beds are distinct from powdered activated-carbon dosing; EPA technology evidence does not prescribe a bed size or universal route.

- Selected flow: Granular activated-carbon filter medium
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `epa-gac-treatment`

###### Ultraviolet water-disinfection reactor assembly (`uv_unit`)

Only actual UV route; record lamp/reactor/ballast inclusion, installed channels and test flow/UV-transmittance. Chlorine disinfectant is not UV equipment.

- Selected flow: Ultraviolet water-disinfection reactor assembly
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `dsd-sewage-overview-2017`

###### Sewage-sludge dewatering filter-press assembly (`sludge_press`)

Conditional actual sludge-handling route; record included feed pump, plates/belt, frame and accepted duty; centrifuges need their own row.

- Selected flow: Sewage-sludge dewatering filter-press assembly
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `dsd-sewage-overview-2017`; `wsd-shatin-project`

###### Liquid chemical-dosing pump skid (`dosing_unit`)

Only actual dosing skid; record chemical compatibility, tanks/pumps/control inclusion. Separately counted liquid pumps must be outside this assembly.

- Selected flow: Liquid chemical-dosing pump skid
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `wsd-water-treatment`

###### Motor-control switchboard assembly (`switchboard`)

Actual fixed control/power cabinet; preserve voltage, circuits, enclosure and installed completeness; count cabinet copper separately only if not embodied in the purchased assembly.

- Selected flow: Motor-control switchboard assembly
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `wsd-shatin-project`

###### Low-voltage cable (`cable`)

Only actual CN factory-gate cable meeting GB/T 12706.1-2020 with matched voltage, conductor, insulation, sheath and core specification. Public Length property is retained; installed length and cuttings are measured, not rewritten as Mass. Cable alone excludes laying, losses and end of life.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `wsd-shatin-project`

###### Glass-fibre reinforced-polymer tank cover panel (`frp_cover`)

Only actual cover design; identify resin, reinforcement, panel section, fasteners and measured installed mass. Steel covers are distinct rows.

- Selected flow: Glass-fibre reinforced-polymer tank cover panel
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `epd-shek-wu-hui-2007`

#### Outputs

##### Waste flows

###### Discarded LDPE equipment-wrapping film (`ldpe_wrap`)

Only actual polymer-confirmed discarded wrapping; other packaging polymers, wooden crates and metal strapping are separate rows.

- Selected flow: Discarded LDPE equipment-wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `wsd-shatin-project`

### Process: Site equipment operation, construction water and direct releases (`utilities`)

#### Inputs

##### Product flows

###### Diesel (`diesel`)

Only actual distillation/refining supply compatible with the public production-mix gate; link actual delivery separately. Record fuel grade, bio/fossil fraction and batch net calorific value. Convert weighed fuel to MJ using measured/supplier-supported LHV; do not assume a density or LHV. Allocate across work packages; do not add generator electricity as another external input.

- Selected flow: Diesel `fbd79004-188c-47a4-900b-96005d994690`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epd-shek-wu-hui-2007`

###### Alternating current (`cn_lv_electricity`)

Only actual CN customer-side supply below 1 kV matching this public identity. Preserve utility location, voltage and meter coverage; construction and pre-handover commissioning only.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `wsd-shatin-project`

###### Alternating current (`cn_mv_electricity`)

Only actual CN customer-side supply at 1–35 kV matching this public identity; distinguish it from LV supply and do not duplicate transformer-side meters.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `wsd-shatin-project`

###### Alternating current at declared nonmatching site or supply voltage (`other_electricity`)

Use a separately verified customer-side identity for geography/voltage not covered by the two CN identities. Never use a waste-incineration generation mix as general supply.

- Selected flow: Alternating current at declared nonmatching site or supply voltage
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `wsd-shatin-project`

###### Tap water (`hk_tap_water`)

Only actual Hong Kong treated-water production/supply at water-treatment-plant gate, with separately verified real supply/transport link to the construction site. Do not use as generic site tap water or assume its secondary 1000 kg/m3 screening value is density. Supplied water is mutually exclusive with the generic supplied-water row for the same quantity.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `wsd-shatin-project`

###### Purchased construction water at declared site inlet (`other_supplied_water`)

Actual water for curing, batching, dust control, cleaning or tests whose location/gate is not established by the HK flow. Record source, quality and each use; do not count internal reuse as a new crossing.

- Selected flow: Purchased construction water at declared site inlet
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-concrete-washout-2012`; `epd-shek-wu-hui-2007`

###### Hydraulic excavator manufacturing burden share (`excavator_manufacture`)

Only actual reusable excavator within declared capital-equipment coverage; quantify a dimensionless share of the same physical complete asset, supported by cumulative actual/supported lifetime activity. Its fuel is separate. If denominator is unknown, report an unresolved capital scenario rather than resetting full manufacture for each project.

- Selected flow: Hydraulic excavator manufacturing burden share
- Flow property / unit: Number of items / item
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temporary`
- Sources: `epd-shek-wu-hui-2007`

##### Elementary flows

###### river water (`river_intake`)

Only direct withdrawal from a river by this foreground during construction/commissioning; record actual country, source and intake meter. Not purchased supply, rainwater, reservoir supply or a scarcity-class surrogate.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epd-shek-wu-hui-2007`

###### ground water (`groundwater_intake`)

Only direct groundwater extraction, including actual dewatering, with aquifer/site and fate recorded. A dewatering quantity is not automatically consumed water; separate discharge and storage.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epd-shek-wu-hui-2007`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only substantiated actual fossil CO2 release to air, unspecified subcompartment, within declared works. Use monitored gas or fuel/carbon/oxidation records; a fuel purchase alone is not an emission factor. Biogenic fraction is separate.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `epd-shek-wu-hui-2007`

###### nitrogen monoxide (`nitrogen_monoxide`)

Only independently speciated molecular NO, CAS 10102-43-9, actual air/unspecified immediate release. NOx reported as NO2-equivalent is not this molecular mass.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `epd-shek-wu-hui-2007`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only independently speciated molecular NO2, CAS 10102-44-0, actual air/unspecified immediate release. Do not reinterpret NOx-as-NO2 or N2O4 synonyms as molecular NO2 evidence.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `epd-shek-wu-hui-2007`

###### particles (PM10) (`construction_pm10`)

Only independently evidenced actual immediate PM10 release to urban air close to ground, matching this public compartment. Ambient TSP concentration and captured dust are not emitted mass. Do not overlap other PM10-compartment rows or additional PM2.5 totals.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91c0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `epd-shek-wu-hui-2007`

###### particles (PM10) (`construction_pm10_nonurban`)

Only actual immediate PM10 emission to non-urban air or from a high stack, precisely matching the public combined compartment and the recorded site/release. Urban ground-level release is a separate row; no default dust factor or concentration-to-mass shortcut.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91c1-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `epd-shek-wu-hui-2007`

###### particles (PM10) (`construction_pm10_unspecified`)

Only evidenced actual immediate PM10 emission whose chosen receiving-air subcompartment is explicitly unspecified and disclosed; do not replace a known urban/non-urban/high-stack compartment with this identity. Three PM10 rows are mutually exclusive for each actual release.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `epd-shek-wu-hui-2007`

### Process: Water tests, route-specific commissioning and delivery trials (`commission`)

#### Inputs

##### Product flows

###### raw water (`reservoir_feed`)

Only reservoir surface water received at plant for actual water-treatment commissioning; not direct groundwater/river resource intake or saline feed. Record source and tested raw-water quality.

- Selected flow: raw water `3c57c819-16f7-44b0-b1cd-da324f4c2dac`
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `wsd-water-treatment`

###### Aqueous aluminium-sulfate coagulant with declared concentration (`alum_solution`)

Only actual commissioning dose; distinguish aluminium sulfate from potassium alum and dry salt. Collect solution mass, hydrated-salt definition and certificate concentration; no default dose.

- Selected flow: Aqueous aluminium-sulfate coagulant with declared concentration
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `wsd-water-treatment`

###### Aqueous sodium-hypochlorite disinfectant with declared concentration (`hypochlorite_solution`)

Only actual test disinfection, including dechlorination records and fate. Record solution mass, available chlorine and NaOCl definition independently. Public purity≥10% candidate does not supply this solution-basis conversion.

- Selected flow: Aqueous sodium-hypochlorite disinfectant with declared concentration
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `wsd-water-treatment`; `dsd-sewage-overview-2017`

###### Aqueous sodium-bisulfite solution for test-water dechlorination (`bisulfite_solution`)

Only documented use of NaHSO3 solution, with concentration, dosing and residual chlorine results. Historical EPA wet-weather wastewater evidence supports the chemical option, not a mandatory construction test route, dose or current discharge approval; actual test-water use needs project records. Sodium sulfite, metabisulfite and hydrosulfide cannot substitute without actual chemistry and separately evidenced conversion.

- Selected flow: Aqueous sodium-bisulfite solution for test-water dechlorination
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `epa-dechlorination-history-2003`

##### Waste flows

###### Untreated municipal wastewater influent (`municipal_influent`)

Only actual untreated municipal sewage brought to plant inlet for pre-handover trials; record salinity, influent load and exact trial dates. Industrial-only effluent and sludge seed are separate identities. No sewage-treatment-service output replaces plant delivery.

- Selected flow: Untreated municipal wastewater influent `41eb8873-6852-40fe-8b5d-b792fe4d4754`
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `dsd-shek-wu-hui-project`; `dsd-sewage-overview-2017`

##### Elementary flows

###### sea water (`sea_intake`)

Only actual direct seawater abstraction during a declared desalination commissioning route. Preserve public Mass/kg: weigh seawater or multiply metered volume by independently evidenced density at measured salinity/temperature. Keep the original m3 ledger; no density default. Imported saline water is technosphere supply, not this resource.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `wsd-desalination`

#### Outputs

##### Waste flows

###### Commissioning effluent exported to external wastewater treatment (`trial_effluent`)

Only actual transferred liquid with composition, state and receiving facility; not a direct river/sea emission. Whole-liquid transfer includes contained constituents; do not also record them as foreground elementary release.

- Selected flow: Commissioning effluent exported to external wastewater treatment
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `dsd-sewage-overview-2017`

###### Dewatered sewage commissioning sludge (`trial_sludge`)

Only actual sewage-startup solids exported; record wet mass, dry solids, conditioning chemistry and actual destination. Water-treatment coagulation sludge and return activated sludge are distinct states.

- Selected flow: Dewatered sewage commissioning sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `dsd-sewage-overview-2017`

###### Water-treatment commissioning coagulation sludge (`water_sludge`)

Only actual water-treatment clarification sludge; retain chemical formulation, water content and solids balance; no default residue rate.

- Selected flow: Water-treatment commissioning coagulation sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `wsd-water-treatment`

###### Reverse-osmosis commissioning concentrate transferred for external treatment (`ro_concentrate`)

Only actual contained concentrate transfer; retain salinity, individual additives and destination. Direct sea discharge belongs in separate environmental rows; never use a seawater resource identity as output.

- Selected flow: Reverse-osmosis commissioning concentrate transferred for external treatment
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `wsd-desalination`

##### Elementary flows

###### Water (`freshwater_discharge`)

Only actual liquid water directly discharged into a freshwater receiver, CAS 7732-18-5. Separately quantify actual constituent emissions and receiving subcompartment; this identity is neither supplied water, resource withdrawal, vapor, sewer export nor marine discharge.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `epd-shek-wu-hui-2007`; `epa-concrete-washout-2012`

###### methane (biogenic) (`methane_biogenic`)

Only substantiated actual biogenic methane release during biological/anaerobic commissioning, to air/unspecified, CAS 74-82-8; retain measured carbon origin and captured gas. No default wastewater emission from construction alone.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `dsd-sewage-overview-2017`

###### nitrous oxide (`nitrous_oxide`)

Only actual independently measured biological-startup N2O release to urban air close to ground, CAS 10024-97-2, matching this public compartment. Other receiving-air locations require separate identity. NO and NO2 are different molecules.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `dsd-sewage-overview-2017`

###### Liquid water directly discharged to sea (`marine_water_discharge`)

Only actual measured direct marine liquid-water outfall during trials, with salinity and outlet evidence. Retain separate actual constituent emissions; freshwater Water UUID cannot be used.

- Selected flow: Water `631ecf13-0e51-4e35-8235-c6f80c60d72c`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trial`
- Sources: `wsd-desalination`

### Process: Material deliveries and exported-waste transport (`transport`)

#### Inputs

##### Product flows

###### Road freight service for declared vehicle and shipment (`road_freight`)

Only actual delivery/export legs not included by another provider; record payload mass, route distance, empty returns and fuel basis. If foreground owns transport fuel and emissions, do not also count a fuel-inclusive freight service for the same leg.

- Selected flow: Road freight service for declared vehicle and shipment
- Flow property / unit: Mass*distance / tkm
- Amount rule: Record the actual attributable quantity of this atomic exchange through its linked collection protocol; conversion and conservation conditions are in sections 4, 7 and 8.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport`
- Sources: `wsd-shatin-project`; `epd-shek-wu-hui-2007`

### Process: Documented acceptance and complete entity handover (`handover`)

#### Outputs

##### Product flows

###### Accepted sewage or water treatment plant or sewer-system entity (`accepted_entity`)

Only one complete actually accepted entity with declared plant/system interfaces. A staged expansion reports the complete delivered new/altered stage and existing-asset interface, not an unbuilt future ultimate plant. Retain unsuccessful tests and repairs in construction activity.

- Selected flow: Accepted sewage or water treatment plant or sewer-system entity
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc-treatment-2025`; `wsd-shatin-project`; `dsd-shek-wu-hui-project`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `separate_work` | all inventory rows | Avoid allocation by submetering and tracing actual work packages, delivered stage, existing operation and co-deliveries. A plant jointly treating sewage and supplying reclaimed water remains one construction entity unless separately accepted complete deliverables exist. No allocation by future lifetime water volumes without an evidenced service scenario. |  |
| `causal_shared_activity` | shared work packages | For inseparable shared construction, document beneficiaries and the causal physical driver from cp_acceptance, cp_energy and cp_transport. Shares are nonnegative and sum to one across that shared activity, with all attributable loads assigned once. Area or capacity is acceptable only if its causal relationship to that specific activity is demonstrated; money is not a substitute. |  |
| `reusable_asset_conservation` | temporary_sheet_pile; formwork_panel; excavator_manufacture | For the same asset, manufacturing-equivalent exchange equals documented physical asset quantity × attributable dimensionless fraction. Across all projects, periods and repeated uses cumulative fraction must not exceed one. Denominator/life/activity must be supported; unknown values remain an unresolved capital-equipment scenario, not a new full burden every project. Site fuel, actual maintenance and replacements are separate measured activities. |  |
| `waste_no_default_credit` | waste outputs | Record actual returned products, recycled scrap and exported waste with their state and destination. No automatic avoided-production, recovered-energy or sludge credit; any downstream extension must document provider boundary and allocation method and remain separate from this construction result. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | handover | accepted_entity; complete system configuration | acceptance_record | site; asset/stage identifier; accepted count; coordinates; boundaries; tank dimensions and volumes; building floor/site area; sewer length/diameters; installed train list; rated/accepted capacity and actual test duration; water quality; signed acceptance date | Survey as-built geometry; reconcile drawings, installed register and signed acceptance/performance tests of the same delivery. Fill actual installed configuration only; document absent tank/building/media/network fields as not_applicable with bounded interface evidence. Applicable unmeasured fields remain gaps. Test actual treatment, conveyance or disposal function as appropriate; never infer capacity from cost or geometry alone. | item; m; m2; m3; m3/day | each delivered stage | whole construction through accepted handover | declared complete plant or sewer system | per declared reference flow | survey records; signed test reports; scope/defect register |
| `cp_material` | ground; civil | separate purchased and installed materials | delivery_and_batch_record | work package; material and state; grade; batch; received/returned/installed/surplus quantities; wet and dry basis; density test; batch composition; source gate | Use calibrated weigh tickets and batch/placement records; volume-to-mass only with same-material batch density, grading/moisture and actual geometry. Reconcile rebar schedule and installed quantities. | kg; m3; m | each batch/delivery | whole declared construction | site and supplying gates | per declared reference flow | calibration; supplier certificates; as-built quantities; stock balance |
| `cp_install` | installation | individual fixed assembly, pipe or medium | installation_record | assembly identifier; technology; duty; supplier gate; material/formulation; dimensions; same-configuration measured net mass or length; gross receipts and opening stock; verified returns/transfers; closing usable stock; net consumption and separate installed accepted counts; damage/rejection-scrap and replacement links; initial media fill; inclusion of motor/frame/cable; acceptance | Reconcile receipts, stock, returns/transfers, equipment/BOM, acceptance and waste tickets. Derive attributable net consumption as gross receipts plus opening stock less verified returns/transfers and closing usable stock, including failed replacement units; keep installed quantity separate. Count-to-mass uses weighed/certified net mass of the same configuration, never guessed whole-plant mass; verified unconsumed returns are excluded. | kg; m; item | each assembly/lot | all delivered installation including replacements before handover | delivered installation boundary | per declared reference flow | supplier scope; weighing; installation inspection; test record |
| `cp_temporary` | ground; civil; utilities | reusable temporary assets and capital equipment | asset_activity_ledger | asset id; same configuration; manufacture coverage; actual mass/volume/count; project activity; cumulative lifetime activity evidence; prior/later attributed shares; repairs; receipts; unknown denominator | Retain actual physical presence separately from attributed manufacturing-equivalent quantity. Use logged service activity and documented lifetime/use denominator; reconcile each asset across projects without resetting. Measure panel area/thickness if volume-based. | kg; m3; item | each asset and use interval | whole work and cumulative asset ledger | all projects sharing the same physical asset | per declared reference flow | asset records; actual activity; supported denominator; cumulative share audit |
| `cp_energy` | utilities | each power supply and fuel batch | meter_and_fuel_record | source; region; voltage; meter start/end; work package; fuel grade and origin; weighed mass or metered volume; temperature/density; LHV; generator output; existing-plant service meter | Submeter construction and trial use; reconcile fuel tank balances and supported LHV. If volume is recorded, use batch-specific measured density first. Assign any shared utilities using logged causal activity rather than tariff. | MJ; kWh; kg; m3 | each shift and meter period | construction and pre-handover trials only | customer-side supplies and actual equipment | per declared reference flow | calibrated meters; fuel certificates; logs; separate existing operations |
| `cp_water` | civil; utilities | source-specific construction water, dewatering and washout | water_balance_record | source and intake/supply gate; batch use; opening/closing storage; intake; purchased water; recycle; export; direct receiver; liquid volume; wet solids; salinity/temperature/density | Meter each crossing, distinguish internal reuse, and reconcile stock and actual water retained in concrete/soil. Document fate of dewatering and washout instead of assuming water consumption or river release. | m3; kg | each use/discharge and daily balance | all construction water activities | site, source and actual receiving interface | per declared reference flow | calibration; supply bills; sampling; containment and destination records |
| `cp_waste` | ground; civil; installation | one sorted waste and destination per record | waste_transfer_record | material/state; source work package; weigh tickets; water content; contamination; export quantity; carrier; receiving route; supplier returns; internal reuse | Measure each separated waste stream at actual dispatch; reconcile receipts, installed mass and surplus. Whole slurry and separated solids are mutually exclusive for the same fraction. | kg; m3 | each transfer | all construction and pre-handover rework | actual dispatch and receiver | per declared reference flow | tickets; chain of custody; composition and receiving records |
| `cp_release` | utilities; commission | each molecular or size-specific external release | emission_measurement_record | source/equipment; activity period; chemical/CAS; fossil/biogenic origin; receiving compartment; sampled concentration; gas flow or flux area/time; capture; blanks; uncertainty; selected factor and conditions if used | Use site flux/stack/engine tests or independently evidenced activity-specific model/factor with units, conditions and control efficiency. Record unmeasured/missing releases as gaps, not zero. Ambient dust and noise readings cannot be relabelled emitted mass. | kg | each actual release/test period | only declared construction and trial activities | actual source and external receptor | per declared reference flow | instrument QA; speciation; method conditions; uncertainty; coverage register |
| `cp_trial` | commission | route-specific test water, chemicals and sewage | trial_and_sampling_record | trial gate dates; commissioned train; test duty/duration; inlet volume/quality/load; chemical formulation/concentration/mass; retained water; effluent outlet volume and individual composition; sludge wet/dry mass; RO salinity/temperature/density and concentrate fate | Record actual tests, failed tests and retests; pair metered inlet/outlet and laboratory certificates. Assign commissioning start/end independently from commercial service. Volume×concentration calculations use synchronized samples and real molecular basis. | m3; kg; m3/day | each test and sampled discharge | recorded pre-handover trial periods | actual tested trains and receiving gates | per declared reference flow | test protocol; calibrated meters; chemical certificate; laboratory reports; fate ledger |
| `cp_transport` | transport | one cargo and transport leg | shipment_record | cargo/state; source/destination gates; measured payload; actual distance; mode/vehicle; return load; carrier inclusion of fuel and empty returns | Reconcile shipment tickets and actual route logs; calculate tkm from payload tonnes and km per leg. Include only legs outside other provider boundaries. | tkm | each shipment/leg | all actual construction deliveries and exports | actual shipment gates | per declared reference flow | carrier record; route evidence; no overlapping provider/fuel accounting |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `project_basis` | all inventory rows | For one declared complete delivery, sum each attributable exchange over all work/test events, subtract documented returns and reconcile stock; report that total per declared reference flow. Multiple independently accepted entities require separately matched inventories; do not divide a larger plant into arbitrary equal items. | event quantities; return and stock ledger; cp_acceptance | attributed exchange per declared reference flow |  |
| `physical_mass_conversion` | material and installation quantities | Material kg = actual net consumed volume m3 × same-material batch density kg/m3, or actual net consumed count × same-configuration traceable net assembly mass kg/item. Reconcile consumption from receipts, opening stock, returns/transfers and closing usable stock under cp_material or cp_install, including pre-installation/pre-acceptance damage, rejected-and-scrapped units and replacement inputs. Keep accepted installed count separate; it is not the multiplier for all manufacturing inputs. Retain original quantities, conditions and uncertainty; no generic concrete, seawater or whole-plant density/mass. | cp_material; cp_install; cp_trial; geometry; measured density | kg per declared reference flow |  |
| `energy_conversion` | utilities | Electricity MJ = kWh × 3.6; fuel MJ = actual fuel kg × batch-specific LHV MJ/kg. For fuel-volume logs, first derive kg with same-batch measured density. Preserve public energy property and exclude generator output double counting. | cp_energy; verified unit definitions; fuel certificates | MJ per declared reference flow |  |
| `trial_constituent_mass` | direct liquid emissions | For each actual constituent, released kg = synchronized discharged m3 × measured concentration kg/m3 at the actual outfall, integrated over relevant intervals. mg/L converts to kg/m3 by 0.001 through SI definitions. Speciation, receptor and whole-liquid versus constituent accounting must be explicit; NOx-equivalent or COD is not molecular NO2 or an individual chemical. | cp_trial; sampled molecular concentrations; outlet volume | each evidenced constituent kg per declared reference flow |  |
| `asset_share` | temporary manufacturing burden | For each same-configuration asset, attributed manufacturing quantity = physical net quantity × verified activity fraction; sum fractions over all uses ≤ 1. Unknown lifetime denominator is not set to one; maintain independent reported capital sensitivity/review gap. | cp_temporary; actual physical quantities; cumulative share ledger | manufacturing-equivalent kg, m3 or item per declared reference flow |  |
| `water_and_material_balance` | construction and trials | Reconcile opening storage + actual entering water/material = closing storage + installed/retained amount + exported waste/product + actual environmental release, with measured/estimated losses separately disclosed. Internal transfers cancel; biological reactions use constituent-specific mass balances, not invented volume loss. | cp_material; cp_water; cp_trial; cp_waste | reconciled physical ledgers and disclosed residuals |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `complete_delivery` | reference product | Match actual boundary, function, as-built geometry and acceptance. Partial civil shells, equipment lots or commissioning-only services are not a whole accepted plant. Report complete independently delivered expansion scope explicitly. | cp_acceptance; as-built drawings; actual test/acceptance |
| `inventory_coverage` | all processes | Reconcile all work packages, route-selected units and actual exchanges; absent, unmeasured and omitted are different states. Identify each actual foreground constituent, asset interface and provider link; no process is removed merely because UUID is unresolved. | scope register; BOM; meter and waste balances |
| `route_state_identity` | UUID-bearing rows | Match original name, chemical/physical state, grade, geography, supply gate, route, reference property and unit. The Chinese selected name equals the public Chinese baseName. Do not adopt broad labels through inconsistent taxonomy or misleading synonyms. | direct identity records and supplier/site specification |
| `source_limits` | method and data | Use Hong Kong case sources only for documented configuration and interface support. Historical 1994/2003/2007/2012/2017/2018 material provides historical qualitative facts, not current legal approval or default construction quantities, lifetimes or emissions. PCR itself requires actual project evidence. | source locators and actual project records |
| `coverage_uncertainty` | dataset | Retain meter calibration, sampling representativeness, conversion/asset denominator evidence, residual balances, missing flows, capital assumptions and unlinked upstream datasets. The technical construction result may be incomplete for an impact assessment. | calibration; quality/coverage register; uncertainty |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | reference product | Require exactly one accepted_entity output with 1 item and the identical declared reference-product name; all rows/protocols use per declared reference flow. Require actual site, accepted stage and applicable measured geometry and treatment/conveyance/disposal functional tests. Check evidence-backed not_applicable for absent configuration fields; applicable unmeasured fields fail completeness. Do not invent a lifetime or kg-based plant. |  |
| `v_route` | all processes | Reject a whole-plant claim missing actual civil, installed process/E&M, hydraulic/interface and trial/handover work; require not-applicable reasons for absent units and separate atomic extension rows for every occurring unlisted exchange. Classify standalone long-distance water pipes/local water or sewer mains separately. | `un-cpc-treatment-2025` |
| `v_identity` | all inventory rows | Reject species, receiving medium, state, concentration, grade, reference-property or gate mismatch; keep exact unresolved rows and disclosure. A candidate reference UUID gap registered for accepted_entity does not prove method approval or usable provider links. |  |
| `v_water_emissions` | utilities; commission | Check fresh/saline withdrawal, supplied water, dewatering, export, storage, direct receptor and measured individual emissions without double counting; missing density/speciation/flow evidence stays unresolved. Ambient TSP/noise does not pass a molecular-emission check. | `epa-concrete-washout-2012`; `epd-shek-wu-hui-2007` |
| `v_allocation` | shared construction and reusable assets | Verify causal beneficiaries, nonnegative conserving shared fractions and cumulative same-asset manufacturing share ≤ 1 over all projects/periods. Require actual supported lifetime/activity evidence; unknown asset burdens remain review, never per-project reset. |  |
| `v_dataset_claim` | dataset | Report accepted inputs, checked and unchecked work packages, identity/data gaps and construction-only life-cycle coverage. Numerical consistency cannot establish scientific review, local compliance, completeness of linked cradle-to-gate providers or full-life approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Construction-to-handover of the declared complete sewage/water treatment or sewer-system entity with actual route, geometry and test duty; optional upstream linking with verified provider interfaces; comparisons only on matched actual functions and scope |
| excluded_use | Default whole-life or m3 operating-treatment result; shell-only or equipment-only represented as full plant; unbuilt ultimate capacity; guessed mass/life/mix; automatic environmental-compliance or scientific approval |
| required_metadata | All reference qualifiers; work/trial dates; actual site and as-built register; treatment-route and existing-stage interfaces; supplier/transport gates; actual measured material/equipment/water/energy; conserved capital/shared allocation ledger |
| required_quality_disclosure | Identity and unmeasured-exchange gaps; unsupported conversions; capital denominator uncertainties; coverage of all route-selected civil/process/E&M work; unlinked upstream burdens; noise/land/odor and actual release evidence; later-life exclusions |
| update_trigger | Changed delivered function, geometry, capacity-test conditions, treatment technology, staged boundary, provider gate, actual inventory, capital assumptions or identity/source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-treatment-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.281, subclass 53253. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification meaning including sewer systems and plant categories; excludes long-distance water pipelines and local water/sewer mains. No construction recipe. |
| wsd-shatin-project | official_guidance | Hong Kong WSD, In-situ Reprovisioning of Sha Tin Water Treatment Works – South Works – Advance Works and Main Works, Project section. https://www.wsd.gov.hk/en/core-businesses/major-infrastructure-projects/in-situ-reprovisioning-of-sha-tin-water-treatment/index.html | Project-specific site formation, ancillary buildings, residual management, pumps and treatment units; do not adopt project capacity, cost or schedule as defaults. |
| dsd-shek-wu-hui-project | official_guidance | Hong Kong DSD, PWP 4406DS, Shek Wu Hui sewage treatment works – further expansion phase 1A, Project Scope. https://www.dsd.gov.hk/EN/Our_Projects/All_Projects/4406DS%20.html | Actual bioreactor/final-sedimentation conversion to MBR and civil/E&M interfaces, not universal requirement for MBR. |
| wsd-water-treatment | official_guidance | Hong Kong WSD, Water Treatment in Hong Kong, March 2018, PDF pp.1–3; publication date on p.3. https://www.wsd.gov.hk/filemanager/en/share/pdf/water_treat_a.pdf | Historical documented alternative clarification and filtration routes, anthracite/sand media and chemical use; powdered activated-carbon dosing is not evidence of a granular activated-carbon bed. Qualitative Hong Kong support; no generic recipes or doses. |
| wsd-desalination | official_guidance | Hong Kong WSD, Desalination, Principle of Reverse Osmosis and Tseung Kwan O Desalination Plant Project sections. https://www.wsd.gov.hk/en/core-businesses/water-resources/desalination/index.html | RO desalination plant and distinction between design, construction and operation; do not adopt cost, output capacity or recovery defaults. |
| epd-shek-wu-hui-2007 | official_guidance | Hong Kong EPD, Shek Wu Hui STW Further Expansion Phase 1 Environmental Monitoring and Audit Report, December 2007, Future Key Issues; sections 2.1 and 6.1. https://www.epd.gov.hk/eia/files/applications/en/pp_484/aep_2476/progress/action_16199/emar200712dc200501/html/emar200712dc200501.htm | Historical earthworks/retaining/pipe/FRP-cover and watertightness-test case; monitoring distinction for TSP and noise. Not current legal limits or emission factors. |
| dsd-sewage-overview-2017 | official_guidance | Hong Kong DSD, Sustainability Report 2016–17, Overview of Sewage Treatment and Sewerage System, HATS and San Wai STW subsections. https://www.dsd.gov.hk/Documents/SustainabilityReports/1617/en/overview_of_sewage_treatment.html | Historical treatment/commissioning, pumping/sludge and UV routes; DBO operation is separate after construction. No adopted contract term as service life. |
| usace-concrete-1994 | handbook | USACE EM 1110-2-2000, Standard Practice for Concrete for Civil Works Structures, 1 February 1994, section 7-6, printed pp.7-6–7-7 / PDF pp.68–69. https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-2-2000.pdf | Historical concrete preparation, forms, placement equipment, joints and curing only; no source numeric design, mix, pressure or dimensional requirement is adopted. |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice: Concrete Washout, EPA-833-F-11-006, February 2012, PDF pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Historical washout-water/solid collection and potential environmental fate; no automatic release, pollutant amount, recovery percentage or legal approval. |
| epa-gac-treatment | official_guidance | US EPA, Overview of Drinking Water Treatment Technologies, Granular activated carbon section. https://www.epa.gov/sdwa/overview-drinking-water-treatment-technologies | GAC adsorption media and separate pressure-vessel/gravity-basin configurations; actual precursor, initial fill and construction arrangement require project evidence. No removal efficiency, cost, bed size or loading default adopted. |
| epa-dechlorination-history-2003 | official_guidance | US EPA, Managing Urban Watershed Pathogen Contamination, EPA/600/R-03/111, September 2003, section 3.2.5.1, printed p.3-8 / PDF p.92; section 3.2.6.3, printed p.3-20 / PDF p.104. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1009F8P.TXT | Historical sodium-bisulfite solution dechlorination of wet-weather wastewater; chemical-option evidence only. Actual construction trial water and quantities need project records. No numerical dosing, cost, performance or present regulatory statement adopted. |
