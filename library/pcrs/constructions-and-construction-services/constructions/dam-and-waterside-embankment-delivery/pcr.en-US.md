---
pcr_id: pcr.constructions-and-construction-services.constructions.dam-and-waterside-embankment-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Dam and waterside retaining embankment delivery

## 1. Scope and Applicability

This PCR covers one complete site-specific dam, similar water-retaining structure or coastal/other waterside retaining embankment, actually constructed and accepted. The entity includes its delivered body, foundation and declared integral impermeable, drainage, protection, spillway/outlet and monitoring works. Earth/rockfill, conventional mass concrete, RCC, concrete-faced rockfill, masonry and documented coastal-bank routes are conditional alternatives, not a universal bill of materials. CPC 3.0 53233 includes both dams and waterside embankments; category selection follows actual function and delivered interfaces, not a classification code alone. Sources: un-cpc-dams-2025; usace-embankment-dams-2004; usace-concrete-civil-works-1994; usace-rcc-dams-2000; cedd-seawalls-2026.

Exclude construction services, upstream material/equipment manufacture alone, independent navigation locks/harbour breakwaters and quays, independent irrigation/flood-control networks, water-supply canals/pipelines, traffic bridges and complete power stations. An integral dam diversion tunnel or spillway is assessed by the dam delivery interface, not borrowed traffic-tunnel methodology. Borderline coastal structures with harbour navigation or combined flood-control purpose require reviewed component boundaries; count a shared physical component once. This inventory addresses actual construction to handover, not lifetime water services or electricity generation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.dam-and-waterside-embankment-delivery |
| classification_refs | CPC 3.0 53233 |
| covered_products | Actual complete accepted dams, similar retaining structures and coastal/other waterside retaining embankments |
| excluded_products | Exclude construction services, upstream material/equipment manufacture alone, independent navigation locks/harbour breakwaters and quays, independent irrigation/flood-control networks, water-supply canals/pipelines, traffic bridges and complete power stations. An integral dam diversion tunnel or spillway is assessed by the dam delivery interface, not borrowed traffic-tunnel methodology. Borderline coastal structures with harbour navigation or combined flood-control purpose require reviewed component boundaries; count a shared physical component once. This inventory addresses actual construction to handover, not lifetime water services or electricity generation. |
| representative_product | One complete delivered entity with surveyed sections and declared hydraulic/bank-retaining conditions |
| production_route | Actual foundation, conditional earth/rockfill/concrete/masonry, sealing/drainage and integral appurtenances, tests and handover |
| market_state | Completed at declared site, actually accepted with recorded handover state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the actual water-retaining/storage/bank-retaining function of the delivered dam or waterside embankment |
| How much | One complete accepted entity; surveyed axis length, height/datum, crest/base widths, actual sections/zones, reservoir capacity/convention or bank length/conditions and integral interfaces |
| How well | Actual dam type, geology/foundation, material/gradation/configuration, real level/head or retaining/protection conditions and field test/acceptance records; no universal load or compliance approval |
| How long or cycle | One actual construction-start-to-acceptance handover event and dates; no assumed operational life |
| reference_flow_link | reference_dam |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed dam or waterside retaining embankment |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Entity/site id; complete acceptance and dates; water-retaining/storage/bank purpose; surveyed axis length and sections; height datum and crest/base widths; actual reservoir capacity/level or bank conditions and conventions; geology and route; permanent component interfaces; material state and quality tests; temporary works and initial filling/test scope; supply gates; uncovered stages and unresolved identities |

item/件 is the single-item display alias for public Item(s). All inventory/collection denominators are the same complete delivered entity, per declared reference flow; capacity, length, area and mass do not substitute the denominator. These measured geometric/hydraulic quantities remain functional qualifiers; comparisons require compatible conditions. No per-dam mass M or lifetime is invented.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_handover records 1 item complete accepted entity; all protocols, rows and calculations use per declared reference flow, without assigning a dam mass. |
| physical_states | mass-based material, liquid and waste exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain each row state/property; volume-to-kg requires same-lot/state measured density and wet/dry conversion needs actual moisture basis; entity geometry does not imply material mass. Volume-based exchanges, including fresh ready-mixed concrete, dewatering effluent and concrete washout liquid, retain Volume/m3. Any auxiliary kg closure is a separate linked record supported by measured same-lot/state density; it does not replace their native volume exchange. |
| water_volume | resource intake and volume rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use measured liquid volume, not normal gas volume or product mass; separate water resource, technical water and effluent. |
| electricity_property | lv_power; mv_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve public property and energy unit group; convert meter kWh by exactly 3.6 MJ/kWh, declaring actual CN location and corresponding voltage. |
| freight_property | road_freight | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | t*km | Actual cargo tonnes times actual leg kilometres; not a dam mass reference quantity. |

| Flow property | Unit group | Permitted displayed unit |
| --- | --- | --- |
| Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` | item = Item(s) |
| Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` | kg |
| Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` | m3, liquid state as declared |
| Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` | MJ; 1 kWh = 3.6 MJ |
| mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | Unit of kg*km `3620148f-c5db-48ce-9065-a10092089aca` | t*km = 1000 kg*km |

Unit groups define property/unit conversion only; they do not supply a physical density, mixture, function or lifetime.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual preconstruction site and supplied material/equipment at explicit received state/gate; onsite borrow processing expressly bounded |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | Complete dam or waterside retaining embankment entity within declared component interfaces |
| recursive_input_rule | Record received state, inherited burden and new interventions once for existing dam sections/reused retaining components; do not recursively rebuild the same entity |
| upstream_dataset_requirement | Verify/link material/component manufacturing gates, actual transport and equipment manufacture attribution separately; missing links disclosed, no complete cradle-to-gate claim |
| disclosure | All actual construction to acceptance; conditional temporary removal/initial filling tests; operation/maintenance/renewal, reservoir operation, later dam removal and final fate separately declared uncovered |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| construction_scope | declared dataset | Collect all actual site preparation, borrow/aggregate processing inside the declared boundary, temporary diversion/foundation/body/fixed-work construction, testing, rework and temporary removal through signed acceptance. Supplier manufacture and actual transport links are separate; a component embedded upstream is not counted again. | usace-embankment-dams-2004; usace-concrete-civil-works-1994; usace-rcc-dams-2000 |
| route_completeness | declared dataset | Required steps follow actual specifications and field records. Do not require a clay core, grout curtain, RCC, drain pipe, cooling system or steel gate universally. Add each actual missing constituent as a chemically/physically specific row, including other binder, aggregate fraction, stone masonry, asphalt core, sheet/cutoff material, joint metal, seal, refrigerant and waste as present; no default quantities. | usace-embankment-dams-2004; usace-concrete-civil-works-1994; usace-rcc-dams-2000 |
| adjacent_interfaces | declared dataset | Declare integral spillway/outlet/diversion galleries and actual initial filling/test boundary. Exclude independent canals, navigation locks/breakwaters, traffic bridges, powerhouses, independent turbines and complete generating plants. A signed contract alone cannot bring them into the dam category; only shared physical dam-body/foundation components with reviewed actual dam function can be attributed once across explicit interfaces. Coastal retaining banks remain in scope; a combined port/flood-control project requires component applicability review and no duplicate counting. | un-cpc-dams-2025 |
| later_stages | declared dataset | Later operation, maintenance, renewal, operating-reservoir inundation/biogeochemical emissions, power generation, later dam removal and final material fate are separately modelled stages, excluded from this construction handover inventory. Actual pre-acceptance initial filling/testing stays inside its declared site/time boundary, including measured water/energy and relevant inundation, land-carbon and release pathways. Record actual beginning/end, flooded extent, baseline and monitoring; missing measurements stay explicit and inconclusive. Do not move these construction-test impacts into excluded operation merely because they occur in a reservoir. Include actual preconstruction demolition and temporary decommissioning only as declared work packages. No complete life-cycle or cradle-to-gate claim without verified stage coverage/upstream links. | usace-embankment-dams-2004; ipcc-flooded-land-2019 |
| water_releases | declared dataset | Separate supplied technical water, natural resource withdrawal, throughflow, internal recirculation, captured effluent, treatment and actual release. Never replace effluent by a water-resource exchange. Retain actual noise/vibration, turbidity/sediment, site occupation and pre/post land/ecology observations; dB is not a mass emission and monitoring alone is not quantified LCIA. Unmeasured relevant pathways remain explicit gaps. | epa-concrete-washout-2012 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| foundation | Site preparation, diversion and foundation treatment | required | Actual excavation, abutment preparation and foundation acceptance; diversion, cofferdam, grouting and cutoffs only when required by the actual design. Include temporary removal at handover. | foreground | per declared reference flow |
| marine | Coastal marine foundation and installation | conditional | Only when required for the actual coastal retaining embankment: seabed dredging/replacement, retained-ground improvement or staged work, caisson flotation/sinking and armour placement. Include real dredging fate, marine plant/tow, positioning and temporary buoyancy/ballast-water interfaces; not universal requirements. | foreground | per declared reference flow |
| embankment | Zoned earth/rockfill and bank protection | conditional | Actual earth/rockfill or waterside embankment; borrow processing, zone placement, moisture conditioning, compaction and filters/drains according to real field tests. | foreground | per declared reference flow |
| concrete | Concrete, facing or masonry body construction | conditional | Actual conventional mass concrete, RCC, concrete-faced rockfill, precast-block or masonry sections; batching/supply, placing, vibration/rolling, joints, temperature control and curing are route-specific. | foreground | per declared reference flow |
| fixed | Permanent sealing, drainage and appurtenances | conditional | Actual integral seals, membranes, galleries/drains, spillway/outlet controls and monitoring equipment within signed dam interfaces; not independent navigation facilities or an entire power station. | foreground | per declared reference flow |
| utilities | Construction plant, energy and transport | required | All real work-package operation, site handling, subcontractors and tests; attributable external haul and conserved reusable manufacture as applicable. | foreground | per declared reference flow |
| water_environment | Site water, containment and direct releases | required | Inventory actual supplied/intake water and every observed waste/release pathway; conditional treatment/export, air species and freshwater/sea discharge. Required assessment does not mean every release occurs. | foreground | per declared reference flow |
| handover | Verification, temporary removal and entity handover | required | Actual complete surveyed entity, material/placement and monitoring records, defects/rework and accepted handover state; commissioning water/energy only when in the declared construction period. | reference_output | per declared reference flow |

### Process: Site preparation, diversion and foundation treatment (`foundation`)

Actual excavation, abutment preparation and foundation acceptance; diversion, cofferdam, grouting and cutoffs only when required by the actual design. Include temporary removal at handover.

#### Inputs

##### Product flows

###### Cement, portland cement (`grout_cement`)

Only Portland cement powder actually used for foundation grout, cutoff or defect treatment; factory manufacture and freight are separate from onsite mixing and injection. No universal grouting requirement.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundation`
- Sources: `usace-embankment-dams-2004`

###### Bentonite powder for cutoff slurry (`bentonite`)

Conditional on actual bentonite-slurry cutoff; retain mineral grade, dry powder and slurry composition. Record water separately.

- Selected flow: Bentonite powder for cutoff slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundation`
- Sources: `usace-embankment-dams-2004`

###### Steel sheet-pile section (`sheet_pile`)

Only actual temporary diversion/cofferdam or permanent retaining section. Separate actual permanent-route consumption from the conserved manufacture share of a reusable temporary pile. Under cp_sheet_piles, permanent input includes cutting, damage, rejection and replacement before installation/acceptance; accepted installed mass is recorded separately.

- Selected flow: Steel sheet-pile section
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Under cp_sheet_piles, sum measured permanent-route attributable consumed kg and the separately evidenced temporary manufacture kg from cp_assets. For new permanent sections, consumed kg = attributable gross receipts + opening stock - verified returns/transfers - closing reusable stock, including pre-installation/acceptance losses and failed replacements. Keep accepted installed mass and waste separate. Reused stock converted to permanent service requires the prior asset ledger and evidenced remaining manufacture attribution, without resetting or duplicating earlier shares; unresolved attribution remains a review gap. Operating/removal work remains in utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_piles`
- Sources: `usace-embankment-dams-2004`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Uncontaminated excavated mineral soil sent for disposal (`excavated_soil`)

Only the actual exported disposal stream after characterization. Reused core/shell soil is an internal transfer, not this waste; contaminated soil requires its own characterized row and treatment.

- Selected flow: Uncontaminated excavated mineral soil sent for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundation`
- Sources: `usace-embankment-dams-2004`

###### Uncontaminated excavated rock sent for disposal (`excavated_rock`)

Separate from reused rockfill and from soil; measure actual rock disposal/export, not total excavation volume.

- Selected flow: Uncontaminated excavated rock sent for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundation`
- Sources: `usace-embankment-dams-2004`

###### Cleared untreated woody vegetation (`cleared_wood`)

Conditional on actual woody clearance. Retain wet/dry basis, handling destination and any biomass recovery; no automatic burning or biogenic emission.

- Selected flow: Cleared untreated woody vegetation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundation`
- Sources: `usace-embankment-dams-2004`

##### Elementary flows

### Process: Coastal marine foundation and installation (`marine`)

Only when required for the actual coastal retaining embankment: seabed dredging/replacement, retained-ground improvement or staged work, caisson flotation/sinking and armour placement. Include real dredging fate, marine plant/tow, positioning and temporary buoyancy/ballast-water interfaces; not universal requirements.

#### Inputs

##### Product flows

###### Precast reinforced-concrete retaining caisson (`caisson`)

Only actual caisson within a waterside retaining-bank delivery, with complete concrete/reinforcement contents, geometry and supplier-casting gate declared. Float/tow and sinking are site operations; embedded manufacture constituents are not counted again.

- Selected flow: Precast reinforced-concrete retaining caisson
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable physical quantity collected for this precise material/fuel/exported stream, with received state and conserved asset/stock links.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_marine`
- Sources: `cedd-seawalls-2026`

###### rock (`marine_bedding_rock`)

Only actual supplied plant-gate rock matching the declared marine foundation replacement/bedding or armour fraction. Preserve lithology, grading and received state; distinguish this foundation allocation from the separate embankment rockfill quantity.

- Selected flow: rock `8e0f2838-6d58-433c-975c-7d2cb5878a2d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable physical quantity collected for this precise material/fuel/exported stream, with received state and conserved asset/stock links.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_marine`
- Sources: `cedd-seawalls-2026`

###### Marine gas oil (`marine_gas_oil`)

Conditional actual marine-distillate fuel supplied to dredger, towing or installation plant, with actual grade, sulfur, density and origin recorded. The CEDD citation supports the marine operation, not its fuel specification or amount; actual supply and measurement evidence comes from cp_marine. Not a universal vessel fuel: electricity or other actual fuels require their own physical rows. Direct exhaust is species-specific in water_environment, without double counting the same fuel in diesel.

- Selected flow: Marine gas oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable physical quantity collected for this precise material/fuel/exported stream, with received state and conserved asset/stock links.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_marine`
- Sources: `cedd-seawalls-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Dredged mineral marine sediment sent for disposal (`dredged_sediment`)

Only actual dredged stream after grain-size, water-content and contamination characterization, exported to its recorded fate. Sediment reused as fill is an internal transfer; contaminated dredgings require separate composition/treatment identity. Underwater turbidity and air/water releases require actual measurement.

- Selected flow: Dredged mineral marine sediment sent for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable physical quantity collected for this precise material/fuel/exported stream, with received state and conserved asset/stock links.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_marine`
- Sources: `cedd-seawalls-2026`

##### Elementary flows

### Process: Zoned earth/rockfill and bank protection (`embankment`)

Actual earth/rockfill or waterside embankment; borrow processing, zone placement, moisture conditioning, compaction and filters/drains according to real field tests.

#### Inputs

##### Product flows

###### Clayey mineral earth for dam core (`core_earth`)

Actual declared clayey soil, not pure clay or a remediation-site backfill identity. Record source, particle-size/mineral distribution, moisture and zone; a core is conditional on the actual dam design.

- Selected flow: Clayey mineral earth for dam core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_zones`
- Sources: `usace-embankment-dams-2004`

###### Sandy mineral earth for embankment shell (`shell_earth`)

Conditional actual sandy-earth shell, separate from clayey core and rockfill. Required excavation/borrow processing and haul are collected inside the declared site boundary.

- Selected flow: Sandy mineral earth for embankment shell
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_zones`
- Sources: `usace-embankment-dams-2004`

###### rock (`rockfill`)

Only a supplied physical rock product matching the plant-gate identity; declare lithology, grading, moisture and quarry/site interface. Onsite excavated rock reused internally must not acquire a second quarry-manufacture burden. Covers actual shell, riprap or bank protection use as separate zone records.

- Selected flow: rock `8e0f2838-6d58-433c-975c-7d2cb5878a2d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_zones`
- Sources: `usace-embankment-dams-2004`; `cedd-seawalls-2026`

###### sand 0/2 (`filter_sand`)

Only actual undried sand 0/2 from the stated wet/dry quarry interface whose tested grading meets this project filter design. This identity is not a prescribed filter specification; another grading needs a separate compatible identity.

- Selected flow: sand 0/2 `4f1a182d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_zones`
- Sources: `usace-embankment-dams-2004`

###### gravel 2/32 (`drain_gravel`)

Only undried gravel 2/32 at the stated quarry/plant gate when it matches the actual transition/drainage grade; filtration and segregation control come from project tests, not the name.

- Selected flow: gravel 2/32 `4f19a2fb-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_zones`
- Sources: `usace-embankment-dams-2004`

###### Polypropylene nonwoven geotextile (`geotextile`)

Conditional actual specified nonwoven polymer layer; measured area times actual certified areal mass supports kg, without a default areal mass. A soil-remediation textile identity cannot establish dam suitability.

- Selected flow: Polypropylene nonwoven geotextile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_zones`
- Sources: `usace-embankment-dams-2004`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Concrete, facing or masonry body construction (`concrete`)

Actual conventional mass concrete, RCC, concrete-faced rockfill, precast-block or masonry sections; batching/supply, placing, vibration/rolling, joints, temperature control and curing are route-specific.

#### Inputs

##### Product flows

###### Cement, portland cement (`concrete_cement`)

Only actual Portland cement powder in site batching. Keep conventional mass concrete, RCC, facing and appurtenant concrete batch ledgers separate; no universal cement ratio.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batches`
- Sources: `usace-concrete-civil-works-1994`; `usace-rcc-dams-2000`

###### sand 0/2 (`concrete_sand`)

Only matching undried sand 0/2 quarry product as the actual fine aggregate; retain grading, surface moisture and absorption corrections.

- Selected flow: sand 0/2 `4f1a182d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batches`
- Sources: `usace-concrete-civil-works-1994`; `usace-rcc-dams-2000`

###### gravel 2/32 (`concrete_gravel`)

Only matching undried gravel 2/32 as an actual coarse-aggregate fraction; any other actual fractions are separate specific rows.

- Selected flow: gravel 2/32 `4f19a2fb-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batches`
- Sources: `usace-concrete-civil-works-1994`; `usace-rcc-dams-2000`

###### Fly ash (`fly_ash`)

Only the actual plant-gate coal-combustion-residue fly-ash product matching actual batch specification and recovered state; record source and any upstream recovery/allocation evidence. Do not prescribe it for every RCC or ordinary concrete.

- Selected flow: Fly ash `13fc1799-fd2d-4582-bb90-6a332fff7326`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batches`
- Sources: `usace-rcc-dams-2000`

###### Polycarboxylate-ether superplasticizer aqueous solution (`pce_solution`)

Conditional actual chemical formulation; record active fraction and solution state. Do not equate formulation mass with dry polymer or another admixture chemistry.

- Selected flow: Polycarboxylate-ether superplasticizer aqueous solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batches`
- Sources: `usace-concrete-civil-works-1994`

###### Process Water (`batch_water`)

Only actually treated industrial process water with matching treatment/quality and supplier-to-site gate verified; preserve Mass/kg. Untreated direct intake is not this product. Purchased concrete water already embedded is not counted again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batches`
- Sources: `usace-concrete-civil-works-1994`; `usace-rcc-dams-2000`

###### Fresh ready-mixed hydraulic-structure concrete (`purchased_concrete`)

Only offsite supplied fresh concrete of actual mix and delivery state; do not substitute a cured cast-in-place structural entity identity. Constituents embedded in its upstream dataset are not repeated as site inputs. Site-batched RCC remains constituent-based.

- Selected flow: Fresh ready-mixed hydraulic-structure concrete
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batches`
- Sources: `usace-concrete-civil-works-1994`

###### Precast concrete retaining block (`precast_block`)

Conditional actual prefabricated block route in a declared retaining-bank structure; upstream casting differs from onsite lifting/bedding/jointing. Exclude independent harbour berthing structures.

- Selected flow: Precast concrete retaining block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batches`
- Sources: `cedd-seawalls-2026`

###### Hot rolled rebar steel (`reinforcement`)

Only actual hot-rolled low-alloy reinforcing bar with C≤0.2%, matching steel grade, form and factory-gate route. Separate prestressing steel, structural sections and fabricated gate assemblies; record cutting offcuts.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batches`
- Sources: `usace-concrete-civil-works-1994`

###### Fresh Portland-cement masonry mortar (`masonry_mortar`)

Conditional actual stone/block joint mortar. Keep real composition, water and supply state; the found factory mortar with a fixed sand-content restriction does not establish applicability to an unspecified site mix. Onsite mixing requires constituent rows.

- Selected flow: Fresh Portland-cement masonry mortar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batches`
- Sources: `usace-embankment-dams-2004`; `cedd-seawalls-2026`

###### Sawnwood, hardwood (`form_timber`)

Only actual kiln-dried hardwood at sawmill gate used for formwork with verified species/state and actual freight. The public record describes a generic commodity used for seat-frame feedstock; that example provides no formwork performance or reuse-life evidence, so actual formwork suitability requires project specifications. Use a cumulative conserved manufacture ledger for repeated panels; fresh replacement/losses are measured separately. This row does not require hardwood formwork.

- Selected flow: Sawnwood, hardwood `43103a96-43df-4f35-ad02-728237b3f815`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured irreversible timber loss/consumption plus the evidenced manufacture share of each reusable panel, including first deployment; panels continuing into reuse never receive full new manufacture plus later additional shares. Reconcile all shares and losses within the original panel manufacture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `usace-concrete-civil-works-1994`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Permanent sealing, drainage and appurtenances (`fixed`)

Actual integral seals, membranes, galleries/drains, spillway/outlet controls and monitoring equipment within signed dam interfaces; not independent navigation facilities or an entire power station.

#### Inputs

##### Product flows

###### Plasticized polyvinyl-chloride waterstop strip (`pvc_waterstop`)

Conditional actual supplied PVC formulation/profile consumed for specified joints, including cutting, damage and rejected/replaced material before handover; record native input mass, length/cross-section and separate placement checks. Rubber, copper or other actual waterstops need separate atomic identities.

- Selected flow: Plasticized polyvinyl-chloride waterstop strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fixed`
- Sources: `usace-concrete-civil-works-1994`; `usace-rcc-dams-2000`

###### High-density polyethylene geomembrane (`hdpe_liner`)

Only actual specified liner, with measured area/thickness and batch mass; this is conditional impermeable facing, not a universal dam feature.

- Selected flow: High-density polyethylene geomembrane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fixed`
- Sources: `usace-embankment-dams-2004`

###### High-density polyethylene perforated drainage pipe (`drain_pipe`)

Actual supplied pipe consumed for the project-defined drain interface, including pre-installation damage, rejection and replacement; retain declared diameter, wall, perforation and joints, and record installed accepted quantity separately. Record toe/gallery layout and settlement compatibility; do not infer placement inside every embankment.

- Selected flow: High-density polyethylene perforated drainage pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fixed`
- Sources: `usace-embankment-dams-2004`

###### Steel spillway gate assembly (`spillway_gate`)

Only the actual complete assembly within dam delivery, with leaf, seals, actuation and embedded-part interfaces declared. A permeable-reactive-barrier water-diversion gate is not this identity; avoid duplicate constituent steel.

- Selected flow: Steel spillway gate assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fixed`
- Sources: `usace-embankment-dams-2004`

###### Vibrating-wire piezometer supplied for permanent installation (`piezometer`)

Actual supplied complete sensor for permanent installation, with documented type and cable/interface. Count all attributable consumed units, including pre-installation damage and failed/rejected replacements; installation and acceptance/calibration are actual foreground activities and separate records, not embedded supplier installation. Instruments used only temporarily belong in the asset ledger.

- Selected flow: Vibrating-wire piezometer supplied for permanent installation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fixed`
- Sources: `usace-embankment-dams-2004`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Construction plant, energy and transport (`utilities`)

All real work-package operation, site handling, subcontractors and tests; attributable external haul and conserved reusable manufacture as applicable.

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Only actual diesel material input; supplier/grade, fossil/biogenic fractions, density and heating value are unspecified by this mass identity and must be recorded from actual supply. Allocate excavator, dozer, roller, haul truck, pump, crane and generator meters by work package, including idling. Fuel use and direct exhaust remain separate.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `usace-embankment-dams-2004`; `usace-rcc-dams-2000`

###### Alternating current (`lv_power`)

Only actual CN grid-average consumption supply to the user at <1 kV; verify real location, voltage, year and meter interface. Preserve public Net calorific value/MJ and its energy unit group. Other supply identities require separate verification; generator output is an internal transfer when fuel/exhaust are modelled here.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual metered kWh converted using exactly 3.6 MJ/kWh, with construction-period net reads and work-package attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `usace-concrete-civil-works-1994`; `usace-rcc-dams-2000`

###### Alternating current (`mv_power`)

Only actual CN grid-average consumption supply to the user at 1–35 kV; verify real location, voltage, year and meter interface. Preserve public Net calorific value/MJ and its energy unit group. Other supply identities require separate verification; generator output is an internal transfer when fuel/exhaust are modelled here.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual metered kWh converted using exactly 3.6 MJ/kWh, with construction-period net reads and work-package attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `usace-concrete-civil-works-1994`; `usace-rcc-dams-2000`

###### Hydraulic excavator (`excavator_asset`)

Actual same-configuration machine production attributed once over evidenced cumulative service; no default lifetime and no per-project reset. Exclude manufacture already embedded in a purchased service.

- Selected flow: Hydraulic excavator
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Dimensionless project manufacture share multiplied by actual machine count; keep the cross-project ledger and source for total actual or justified service denominator. Unknown denominator requires explicit review.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `usace-embankment-dams-2004`

###### Vibratory roller (`roller_asset`)

Only actual compaction equipment serving earth/rockfill or RCC; configuration and share basis cannot be transferred between routes without evidence. Operation diesel/electricity is recorded separately.

- Selected flow: Vibratory roller
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual roller count times evidenced project manufacture fraction; cumulative fraction across all uses must not exceed one.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `usace-embankment-dams-2004`; `usace-rcc-dams-2000`

###### Diesel-truck road freight transport (`road_freight`)

Conditional real external supplier-to-site and exported-waste legs not already included in another dataset. Retain payload, road route, empty-return treatment and provider boundary; onsite machine movement is in fuel records.

- Selected flow: Diesel-truck road freight transport
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t*km
- Amount rule: Sum actual cargo tonnes times actual leg kilometres; include only attributed legs, not an assumed haul distance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport`
- Sources: `usace-embankment-dams-2004`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Site water, containment and direct releases (`water_environment`)

Inventory actual supplied/intake water and every observed waste/release pathway; conditional treatment/export, air species and freshwater/sea discharge. Required assessment does not mean every release occurs.

#### Inputs

##### Product flows

###### Process Water (`treated_site_water`)

Only treated industrial water actually supplied for curing, moisture conditioning or cleaning, with supplier/site interface verified. Treat each use separately in records. Do not use Hong Kong treatment-plant tap-water identity as generic site supply, and do not assume 1000 kg/m3.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usace-concrete-civil-works-1994`; `epa-concrete-washout-2012`

##### Waste flows

##### Elementary flows

###### river water (`river_water`)

Only actual withdrawal from the natural river resource, with basin/site country and use recorded; this is not purchased water, reservoir throughflow or recirculation. If treatment is in the foreground, connect the intake and treated-water internal transfer without double counting the resource.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usace-embankment-dams-2004`

###### ground water (`groundwater`)

Conditional actual aquifer withdrawal; specify abstraction/dewatering purpose, aquifer, country and receiving pathway. Do not substitute river water or freshwater supply products.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usace-embankment-dams-2004`

#### Outputs

##### Product flows

##### Waste flows

###### Mineral-sediment-bearing construction dewatering effluent (`dewatering_effluent`)

Only actual captured stream sent across the technosphere to treatment; measure water volume, solids and characterization. Pumped groundwater is not automatically polluted wastewater. Treated discharge to nature is a separate elementary water/constituent pathway.

- Selected flow: Mineral-sediment-bearing construction dewatering effluent
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usace-embankment-dams-2004`

###### Concrete-equipment washout water (`concrete_washwater`)

Only actual captured alkaline cementitious washwater exported for treatment; retain pH/composition and transport interface. Reuse within mixing/cleaning is internal, not a second fresh-water input or a discharge.

- Selected flow: Concrete-equipment washout water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-concrete-washout-2012`

###### Dewatered cementitious washout sludge (`cement_sludge`)

Conditional separated cement-rich sludge; record wet solids fraction and destination separately from liquid washwater, hardened concrete and any contaminated material.

- Selected flow: Dewatered cementitious washout sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-concrete-washout-2012`

###### Uncontaminated hardened concrete debris (`concrete_debris`)

Actual segregated construction rejects or temporary-concrete removal, not the whole mixed construction-waste collection. Keep recovered fraction and treatment gate; no automatic recycling credit.

- Selected flow: Uncontaminated hardened concrete debris
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-concrete-washout-2012`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only evidenced fossil-carbon combustion CO2 released during site work. Public compartment is air, unspecified, immediate; use only when compatible with reporting, and disclose lack of finer subcompartment. Biogenic CO2, land-use carbon and later reservoir emissions are separate.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured species mass or actual fossil fuel/carbon measurements with documented oxidation calculation and units; no default fuel or emission factor.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `usace-embankment-dams-2004`

###### nitrogen monoxide (`nitric_oxide`)

Only actual quantified NO released to immediate air, unspecified subcompartment. Total NOx reported as NO2-equivalent is not an NO mass and cannot be inserted here.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured NO mass or species-specific, equipment/state-supported factor times actual activity; keep factor source and species basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `usace-embankment-dams-2004`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only actual quantified NO2 immediate air, unspecified subcompartment. NO, N2O, nitrogen gas and nitrite do not match. Do not allocate an aggregate NOx result between NO and NO2 without speciation evidence.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured NO2 mass or species-specific supported activity calculation; do not manufacture a split.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `usace-embankment-dams-2004`

###### particles (PM10) (`pm10`)

Only actual airborne particulate mass with the public PM10 size definition and immediate air, unspecified subcompartment. Distinguish earthmoving/handling dust from exhaust in records; do not add overlapping total PM10 and PM2.5–10 fractions. No assumption that dust occurs at a fixed rate.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured size-resolved release or a documented locally applicable activity/control model with actual moisture, material and controls; retain uncertainty.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `usace-embankment-dams-2004`

###### Liquid water released to fresh surface water (`freshwater_return`)

Only actual post-treatment or unpolluted return crossing to a specified natural freshwater recipient; quantify pollutant constituents separately if present. Do not use a wastewater-product or unspecified-resource identity.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `usace-embankment-dams-2004`

###### Liquid water released to sea water (`seawater_return`)

Only actual coastal-site discharge to sea water; it cannot use a freshwater-emission identity. Retain receiving site, salinity/source and constituents; no assumed discharge for every coastal bank.

- Selected flow: Water `631ecf13-0e51-4e35-8235-c6f80c60d72c`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured quantity attributable to the declared completed entity; retain actual material state and avoid counting internal transfers twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `cedd-seawalls-2026`

###### Suspended mineral solids released to fresh surface water (`suspended_solids`)

Only an actual characterized mineral-solids release to freshwater after any controls. A technical total-suspended-particulate treatment input is not this environmental exchange; dissolved substances require separate chemical rows.

- Selected flow: Suspended mineral solids released to fresh surface water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual discharged volume multiplied by time-matched measured mineral-solids concentration, with compatible units and treatment state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `usace-embankment-dams-2004`

###### methane (biogenic) (`initial_filling_ch4`)

Only evidenced biogenic methane released to immediate air, unspecified subcompartment, during actual pre-acceptance filling within the declared site/time boundary. Verify carbon origin and pathways, including actual surface bubbling/diffusion or downstream degassing. This is conditional, not a default reservoir factor or a lifetime burden.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual origin-verified species mass over measured area/time or matched discharge/degassing measurements for the declared pre-acceptance period. Unknown attribution or unmeasured relevant flux requires review; no annual default extrapolation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_initial_filling`
- Sources: `ipcc-flooded-land-2019`

###### carbon dioxide (biogenic) (`initial_filling_co2`)

Only evidenced biogenic CO2 released to immediate air, unspecified subcompartment, during the bounded pre-acceptance inundation/test period. Retain actual pre-flood land/carbon state and emission attribution; distinguish gross measured flux from additional anthropogenic contribution and avoid duplicate land-carbon accounting. Later reservoir operation is separate.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual origin-verified species mass over measured area/time or matched discharge/degassing measurements for the declared pre-acceptance period. Unknown attribution or unmeasured relevant flux requires review; no annual default extrapolation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_initial_filling`
- Sources: `ipcc-flooded-land-2019`

### Process: Verification, temporary removal and entity handover (`handover`)

Actual complete surveyed entity, material/placement and monitoring records, defects/rework and accepted handover state; commissioning water/energy only when in the declared construction period.

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed dam or waterside retaining embankment (`reference_dam`)

One complete site-specific accepted entity, including actual declared permanent body, foundation, impervious/drainage system and integral appurtenances; inspect before acceptance. No assumed per-entity mass or lifetime.

- Selected flow: Completed dam or waterside retaining embankment
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `usace-embankment-dams-2004`; `usace-concrete-civil-works-1994`; `cedd-seawalls-2026`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

The following physical attribution and share conservation are declared foreground collection constraints of this PCR, not LCA factors prescribed by the cited construction manuals. Original manufacture quantities, activity, H and beneficiaries require actual measurements or supported records; absent evidence requires review. Emission concentration integration likewise relies on actual foreground measurements; engineering process sources supply no default emission factors.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| dedicated_entity | declared dataset | Attribute dedicated construction to its actual delivered entity. Split shared plant, haul, pumping or testing by measured physical activity and recorded beneficiaries with conservation; costs alone do not establish physical allocation. State unresolved shared relations and sensitivity instead of invented ratios. | |
| reuse_conservation | declared dataset | For each serialized machine, form or temporary pile, keep its original manufacture burden and cumulative cross-project/period/use shares. Let h_j be evidenced project activity and H the evidenced lifetime cumulative activity or justified supported denominator: share_j=h_j/H. All cumulative shares must be nonnegative and sum at most one. Unknown H or beneficiary relation requires review; do not reset manufacture for each project. Replacement parts are separate actual inputs. | |
| internal_and_recovery | declared dataset | Excavation reused as fill, recovered washwater and temporary assets leaving for further use are traced internal/reuse transfers, not new resource inputs or automatic coproduct credits. Exported reusable products and segregated wastes retain actual mass/state/destination; downstream treatment and substitution need separately verified boundaries. | epa-concrete-washout-2012 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_foundation | foundation | excavation and foundation materials/waste | survey_and_delivery_ledger | site_id; work_package; geological state; pre/post survey; receipts; kg; moisture; reuse and export destinations | Survey excavation/abutments and weigh each real incoming/exported stream; link grout/cutoff batch and injection logs. |kg; m3 Aggregation details: Sum attributed quantities per declared reference flow; reconcile excavation, reuse, stock change and export separately. | each delivery and work shift | whole declared construction period | actual site, borrow and diversion interfaces | per declared reference flow | weighbridge calibration, geological logs, signed as-built quantities |
| cp_zones | embankment | zoned fill and filter/drain quantities | zone_placement_ledger | zone; batch; source; grading; delivered wet kg; moisture; surveyed compacted volume; actual density; rejected kg | Weigh and sample actual soil/rock/aggregate; reconcile borrow transfers with survey and compaction/density/moisture tests by lift/zone. |kg; m3 Aggregation details: Sum actual accepted-zone attributable input per declared reference flow; stock and rejects retained, no generic dry density. | each batch/lift and measured lot | entire selected fill route | actual core, shell, filter, drain and protection zones | per declared reference flow | source/gradation tests, calibrated mass, as-built zone geometry and field compaction records |
| cp_batches | concrete | concrete/mortar/block constituents and reinforcement | batch_and_placement_records | route; mix_id; each constituent kg; aggregate moisture/absorption; fresh delivered m3; rejects; placed geometry; temperature/strength tests; actual density | Obtain actual batch scales or supplier ticket and each lift/pour/block placement acceptance; distinguish onsite batch from supplied composite and RCC rolling from conventional vibration/curing. |kg; m3 Aggregation details: Sum actual consumption attributable to entity per declared reference flow, with waste and stock changes; constituents and purchased composites mutually reconciled. | each actual batch and placement | entire selected concrete route | actual body/facing/appurtenance works and supply gate | per declared reference flow | mix certificates, scales, acceptance test results, lift cards and as-built geometry |
| cp_fixed | fixed | actual consumed permanent seals/drains/gates/instruments and separate installed configuration | component_consumption_and_installation_register | component_id; grade/form; count; measured kg; dimensions; installed length/area; contained components; joint/interface; calibration/acceptance; gross attributable receipts; opening/closing reusable stock; verified returns/transfers; damaged/rejected/replaced quantities | Reconcile supplier certificates, receipts and stocks with installed schedule and waste. In each row’s native unit, input = gross attributable receipts + opening stock - verified returns/transfers - closing reusable stock, including cutting losses and components consumed in pre-installation/acceptance failures and replacements. Installation quantity is separate configuration evidence, not the consumed-input total. Check joint continuity, gate interface and sensor calibration; retain actual installation work once, without duplicate assembly contents. | kg; item; m; m2 | each receipt, return, failed/replaced component and installed component/lot | entire attributable construction period through handover, including pre-installation losses and rework | signed permanent dam interfaces | per declared reference flow | signed installation records, component specs, traceable mass and acceptance/calibration |
| cp_utilities | utilities | fuel and electricity | meter_and_fuel_balance | work_package; equipment/configuration; country/voltage; kWh; kg; litres; actual density; stock changes; supplier and generator boundaries | Meter real energy and weigh/reconcile fuel receipts, tanks and returns by actual construction activity including subcontractors and idling. |kg; kWh; MJ Aggregation details: Sum attributed net fuel/electricity per declared reference flow; reconcile shared allocation and internal generation. | each shift/meter interval | all actual construction/testing work | actual site/borrow/plant and grid-user meters | per declared reference flow | calibrations, supplier tickets, stock balance and load/work logs |
| cp_assets | utilities | reusable machines, timber forms and temporary sheet-pile manufacture shares | cross_project_asset_ledger | asset_id; configuration; original manufacture amount/property; project activity; cumulative activity; supported H; all prior shares; losses/replacements; beneficiaries | Retain serialized manufacture/supplier record and time/area/cycle activity evidence; reconcile every project attribution against original manufacture. Unknown H or prior shares stays unresolved. Permanent-route sheet-pile consumption is collected separately under cp_sheet_piles. For a formerly reused pile retained permanently, carry forward prior shares and evidence the remaining attribution; do not count full manufacture again. | item; kg; h Aggregation details: Project share times original property quantity per declared reference flow; all cumulative shares at most one, no per-project reset. | each use/project and retirement update | entire evidenced cumulative asset history | all beneficiaries including prior and subsequent projects | per declared reference flow | serialized ledger, supported service denominator, prior allocation receipts and loss/replacement records |
| cp_sheet_piles | foundation | sheet_pile | sheet_pile_consumption_and_asset_reconciliation | section_id; configuration; permanent/temporary route; new/reused status; gross attributable receipts kg; opening/closing reusable stock kg; verified returns/transfers kg; cutting/damage/rejection/replacement kg; accepted installed kg; waste kg; cp_assets ledger and prior shares | Measure permanent-route consumption with calibrated weighing and the receipts/stock/returns balance in the sheet_pile card. Retain pre-installation/acceptance losses, accepted installed mass and waste separately. For temporary piles use only the conserved manufacture kg established by cp_assets. Track transfers between temporary and permanent service by the same asset identity and supported remaining attribution, with no repeated manufacture; unknown prior shares require review. Sum the two disjoint contributions once. | kg | each receipt/use/transfer/loss and asset attribution update | entire actual construction through handover, with full earlier asset history where reused stock is involved | actual foundation/diversion/cofferdam and related stock/asset interfaces | per declared reference flow | calibrated weights; supplier/stock records; accepted installation and waste records; prior manufacture allocation ledger |
| cp_transport | utilities | external truck freight | leg_payload_records | leg_id; origin/destination; actual cargo tonnes; actual km; empty return; supplier inclusion; assignment | Use weighbridge/consignment and actual route records; check provider datasets for already included legs. |t; km; t*km Aggregation details: Sum cargo t times leg km per declared reference flow with explicit beneficiaries; onsite fuel kept separate. | each actual leg | construction delivery and waste export period | declared external transport interfaces | per declared reference flow | consignment, weighbridge, route evidence and dataset gate review |
| cp_water | water_environment | water intakes, stock, effluent and waste | water_and_destination_balance | source/intake/recipient; country/basin; treated state; supplied kg; volume m3; actual density; recirculation; evaporation evidence; waste wet kg and solids; pH/characterization; treatment/export gate | Meter each real supply/intake/return and weigh each separated waste; sample matching liquid/solid state and retain treatment, reuse and receiving-pathway records. |kg; m3 Aggregation details: Balance inflow, internal reuse, stock, incorporation, evidenced consumption and actual return per declared reference flow; internal reuse counted once. | each shift/intake/outfall and waste shipment | actual construction/testing water period | actual intake, onsite treatment and export/outfall | per declared reference flow | meter calibration, samples, treatment records, destination receipts and balance |
| cp_emissions | water_environment | individual actual emission species | species_activity_or_release_measurement | species; fossil/biogenic origin; size fraction; phase; compartment/subcompartment; release mass; matched flow volume and concentration; equipment/activity; factor/source/unit; controls; uncertainty | Use calibrated species-specific measurements or original supported factors matching actual route/equipment/control and unit; preserve concentration integration, no invented species split. |kg; m3; kg/m3 Aggregation details: Sum supported species release mass per declared reference flow; not detected, absent and unmeasured have distinct evidence states. | each actual measured operation/release | whole declared site-work release period | real atmospheric and freshwater/sea recipients | per declared reference flow | sampling/calibration, original factor applicability, detection limit and uncertainty |
| cp_marine | marine | actual marine foundation/caisson/fuel/dredging | marine_work_ledger | route; strata; pre/post bathymetry; dredged wet kg/moisture/contamination; component count/contents; fuel kg/grade; tow/sinking logs; ballast volume/recipient; assignment | Measure every precise flow and actual operation; reconcile dredging reuse/export, caisson supply gate, onsite lifting/flotation and shared plant manufacture shares; contaminated flows and releases separately identified | kg; item; m3 | each real marine work/export | actual declared construction period | exact seabed/installation/ballast/export interfaces | per declared reference flow | geological/bathymetric survey, weighing, contamination, positioning and signed installation |
| cp_initial_filling | water_environment | actual pre-acceptance filling species | bounded_site_time_flux_records | actual start/end; flooded area/pre-flood land-carbon baseline; levels; species origin; gas kg/flux; surface/downstream pathway; temperature/quality; sampling uncertainty; attribution; unmeasured pathways | Measure species flux and water degassing for actual included site/time; retain baseline/attribution and prevent duplicate land-carbon or later-operation accounting. IPCC supports pathway identification only; no default annual coefficient or fixed life | kg; m2; h; m3 | each actual sample/level period | real pre-acceptance filling start/end | actual inundation/downstream testing interface | per declared reference flow | flux calibration, measured area/time, origin assessment, baseline and uncertainty |
| cp_handover | handover | complete accepted reference entity | as_built_handover | entity/site_id; accepted count; route; surveyed axis length; crest/base and height sections; datum; reservoir/head or bank-retaining use; actual capacity convention; permanent components/interfaces; construction dates; acceptance/defect records | Survey as-built geometry and reconcile signed permanent delivery scope, route-specific tests, monitoring baseline and defects/rework; do not infer safety approval from an LCA inventory. |item; m; m2; m3 Aggregation details: Record 1 item and sum all assigned work-package quantities per declared reference flow; geometry/capacity are qualifiers, not substitute denominators. | one actual handover plus each recorded correction | actual construction start through acceptance | exact delivered entity and signed appurtenant interfaces | per declared reference flow | signed handover, as-built survey, material/test reports and component inventory |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| entity_basis | all inventory | q_ref = total attributed exchange quantity / 1 item; all rows are per declared reference flow for the same complete accepted entity. No mean mass per dam, per metre or per capacity is assumed. | cp_handover; attributed work-package records | row-specific kg, m3, MJ, item or t*km per declared reference flow | usace-embankment-dams-2004 |
| wet_dry_state | earth, aggregate, solids | Dry solid kg = measured wet kg × (1 − actual wet-basis moisture fraction) only when measured on the same material/lot; volume-to-mass = actual volume × measured state-specific density. Do not use soil dry density for wet slurry or default water density. | cp_zones; cp_batches; cp_water | explicit material-state mass per declared reference flow | usace-embankment-dams-2004 |
| energy_conversion | electricity and fuel | Grid MJ = metered kWh × 3.6. Mass-identity diesel stays kg; litres convert with actual measured supply density. Heating-value calculations require actual fuel-state NCV, not a public generic or mixed-bio default. | cp_utilities | MJ or kg per declared reference flow, preserving original property | usace-concrete-civil-works-1994 |
| freight_activity | road_freight | For each actual leg multiply cargo t by distance km, then sum attributed legs; no assumed mean payload or distance. | cp_transport | t*km per declared reference flow | usace-embankment-dams-2004 |
| asset_manufacture | reusable serialized assets; permanent-route sheet-pile inputs follow cp_sheet_piles | share_j = h_j/H; attributed original-property quantity = original measured quantity × share_j. Track all beneficiaries and prior shares; sum shares ≤ 1. Unknown H or original configuration requires review and missing-burden disclosure. | cp_assets | item or kg manufacture share per declared reference flow |  |
| species_release | individual mass-based pollutant elementary releases; excludes freshwater_return and seawater_return | Integrate actual compatible concentration × measured release volume for each substance, or use a species/equipment-specific evidenced factor × actual activity. Preserve units, phase, origin, recipient and time. Total NOx cannot be split or treated as NO/NO2 without evidence; PM fractions cannot overlap. Water-carrier returns freshwater_return and seawater_return retain measured Volume/m3 under cp_water; dissolved/suspended pollutants are additional mass rows, not a replacement for water volume. | cp_emissions; cp_water | kg per declared reference flow | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_scope | reference entity and routes | Require site, actual purpose, geometry/datum, hydraulic/retaining conditions, route, complete component schedule and signed acceptance; comparison needs compatible functions and interfaces. | cp_handover; as-built survey |
| source_units | all measurements and identities | Maintain material states and actual public reference properties/unit groups; validate each supplier geography/voltage/route/gate and Chinese public name. No generic cement strength, sand grade, fuel density or life. | certificates, calibration, actual supplier/gate evidence |
| coverage | full construction period | Include all selected work packages, subcontractors, tests, rework, temporary installation/use/removal, site/borrow production, stocks and actual exports. Identify absent versus not measured; quantify uncertainty and missing upstream links. | work-package reconciliation; quantity/water balances |
| review_limits | construction and environmental interpretation | Historical sources are qualitative route evidence only. Actual specifications and current competent acceptance records govern this project. LCA checks do not certify dam safety; unresolved identities, shared-asset denominators and unquantified land/noise/ecology pathways remain declared limitations. | original sources and independent methodology review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| complete_reference | declared dataset | One accepted entity output equals the declared reference product name and 1 item, with actual site, surveyed geometry, route, hydraulic/retaining purpose and complete permanent interfaces. No cost-, average-mass-, lifetime- or energy-output substitute. | un-cpc-dams-2025 |
| inventory_unit_gate | declared dataset | Each selected exchange is one physical/chemical flow with its correct type, material state, direction and unit; verified identities require exact primary property and supplier/route/compartment fit. Treat non-applicable with evidence, never aggregate labels or silent omission. | usace-concrete-civil-works-1994 |
| quantities_and_shares | declared dataset | Reconcile each route material/stock/reject ledger, fill geometry and moisture/density measurements, energy and water balances, real transport legs and serialized reusable shares. Unknown H, unproved conversion or inconsistent reference denominator makes the dataset incomplete and requires review. | usace-embankment-dams-2004 |
| releases_and_fates | declared dataset | Verify actual fuel origin and measured species/size/phase/compartment. Captured effluent and sludge cannot masquerade as pure water. Distinguish construction removal from later demolition, and unknown release from zero. Missing required measurements or identities remain inconclusive; do not claim full lifecycle, safety or methodological approval. | epa-concrete-washout-2012 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Construction handover comparison of functionally compatible dam entities at compatible sites/routes/interfaces; verified linked construction-stage input for later water-service/generation models |
| excluded_use | Full-life storage/generation factor; generic per-kg/metre/capacity dam burden; default reservoir emissions; safety, current compliance or methodology approval |
| required_metadata | Complete reference qualifiers; actual structural route/geometry; physical quantities/material states; site/time/supply gates; process/component interfaces; measurement/protocols; upstream links; lifecycle stages |
| required_quality_disclosure | Coverage by actual route, errors/uncertainty; identity gaps, unmeasured releases, unquantified land/noise/ecology, unknown asset H and missing upstream stages; acceptance records do not imply LCA approval |
| update_trigger | Actual scope/type/geometry/material-source/construction-period or measurement correction; changed component/burden interfaces, identities or quality evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-dams-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p. 280, 53233 and adjacent 53232/53234. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Entity/category boundary; no quantitative inventory evidence. |
| usace-embankment-dams-2004 | official_guidance | USACE EM 1110-2-2300, General Design and Construction Considerations for Earth and Rock-Fill Dams, 30 July 2004; §§5-1, 6-1–6-3, 9-2, 9-10; PDF pp.35–36,39,63,68; printed 5-1–5-2,6-1,9-1,9-6. https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-2-2300.pdf?ver=2014-04-07-145941-947 | Historical documented foundation, zoned fill, seepage and field-control/as-constructed practices; no design values or current approval generalized. |
| usace-concrete-civil-works-1994 | official_guidance | USACE EM 1110-2-2000, Standard Practice for Concrete for Civil Works Structures, 1 February 1994, publisher file includes Change 2 of 31 March 2001; §§7-6–7-8,9-1,9-4; PDF pp.68,70,80,88; printed 7-6,7-8,9-1,9-9. https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-2-2000.pdf | Historical conventional hydraulic concrete preparation, vibration/curing and quality verification; excludes RCC, repair and shotcrete. No recipe/temperature/strength thresholds adopted. |
| usace-rcc-dams-2000 | official_guidance | USACE EM 1110-2-2006, Roller-Compacted Concrete, 15 January 2000; §§6-1–6-4,6-8; PDF pp.46,48,50,54; printed 6-1,6-3,6-5,6-9. https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-2-2006.pdf?ver=2013-09-04-070814-530 | Historical RCC dam batching, transport, spreading/compaction and joint/waterstop practices; no numerical lift/recipe/productivity adopted. |
| cedd-seawalls-2026 | official_guidance | Hong Kong CEDD, Port Works Design Manual Part 4, Guide to Design of Seawalls and Breakwaters, April 2026 e-version; §§2.3.1–2.3.5,4.5.1–4.5.2, PDF pp.15–16,27, printed pp.13–14,25. https://www.cedd.gov.hk/filemanager/eng/content_89/p4_combined.pdf | Qualitative actual retaining-bank, block/caisson, rock armour, seabed dredging/replacement and conditional foundation-treatment operations only; harbour wave-protection/berthing needs separate category review. No universal HK specification, fuel grade, emission factor or lifetime. |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice: Concrete Washout, EPA 833-F-11-006, February 2012, pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Historical process description supports water/slurry/solids containment and actual treatment/reuse interface; no assumed chemistry, pH threshold, recycling percentage or approval. |
| ipcc-flooded-land-2019 | official_guidance | IPCC, 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4 Chapter 7 Wetlands, §7.3, Table 7.7 and origin/pathway distinctions, PDF pp.6–7 / printed 7.6–7.7. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch07_Wetlands.pdf | Conditional gas origin/pathway and baseline/attribution review for actual pre-acceptance inundation only; national annual defaults and 20-year categories are not applied directly to this construction event, and establish neither lifetime nor inevitable emissions. |

Historical documents support documented operations and collection structure, not current local mandatory requirements. All mixtures, physical quantities, energy, losses, geometry, hydraulic conditions, life/reuse denominators and emission parameters require actual project evidence; this PCR supplies no default quantitative ranges.
