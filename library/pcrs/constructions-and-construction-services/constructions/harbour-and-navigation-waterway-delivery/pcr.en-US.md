---
pcr_id: pcr.constructions-and-construction-services.constructions.harbour-and-navigation-waterway-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Construction and delivery of harbour and navigation waterway entities

## 1. Scope and Applicability
Applies to an actual configured harbour or navigation waterway civil entity constructed and accepted at a defined site: harbour basins/channels, breakwaters, quays/piers/jetties/docks/wharves, river/canal works for water transport, and integral locks, sluices/floodgates, lifts, dry docks, slipways or barrages with declared waterway function. The category requires sediment-route control, alternative waterborne structures, actual navigation geometry and hydromechanical installation that material or vessel-manufacturing PCRs do not provide. [un-cpc3-waterworks-2025]

The default foreground is initial construction and handover. Select the real project route and add all its actual atomic exchanges. A complete piled pier, capital-dredged navigation channel or navigation lock is a configured entity with its own acceptance schedule; no single example is imposed on the category. Independent construction and engineering services, raw materials, dredger/platform manufacture, vessel operation/repair, water-supply aqueducts/pipelines, irrigation/flood-control works and reservoir dams as independent primary entities are excluded. Multi-purpose works must separate functions and disclose shared construction. No full-life or complete cradle-to-gate claim is established by this site module.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.harbour-and-navigation-waterway-delivery |
| classification_refs | CPC 3.0 53232; scope context only, no accepted mapping implied |
| covered_products | Accepted harbour/navigation-waterway entities and their integral water-transport civil/hydromechanical facilities |
| excluded_products | Independent water supply, irrigation/flood control or reservoir dam; buildings; material/equipment manufacture; vessel or port operational services |
| representative_product | One actual accepted harbour/navigation-waterway project entity of declared configuration, perimeter and functional geometry |
| production_route | Actual surveyed preparation and conditional capital dredging/excavation, ground/fill treatment, selected structural installation/placing, hydromechanical/berthing/slipway installation, utilities, logistics, correction and acceptance |
| market_state | Complete configured constructed entity at the stated site, accepted for its declared use; not loose construction materials or a generic construction service |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared navigable waterway, protected harbour/berth, waterway passage or docking/launching function through the accepted physical configuration |
| How much | One complete declared entity; actual length, width/depth, berth/deck/basin area, effective chamber dimensions or slipway geometry are measured qualifiers, not fabricated fixed unit dimensions |
| How well | Actual signed acceptance for the specified structural/navigation/berthing/hydromechanical configuration and operating/design conditions, traceable to surveys/tests and corrected defects; no automatic code approval |
| How long or cycle | One documented initial construction and acceptance campaign through handover; no assumed service life, operating-year output or future maintenance cycle |
| reference_flow_link | `finished_harbour` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted configured harbour or navigation waterway entity |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site and project perimeter; marine/freshwater setting and salinity; project type and actual new-work/reconstruction scope; retained existing assets; initial/as-built datum and bathymetry; accepted channel length/width/depth and basin area as applicable; pier/wharf length and deck area; structure/pile/armour/fill configuration; lock/dry-dock effective dimensions and water levels; slipway length/slope/gauge and cradle/haulage configuration; actual design/use conditions and acceptance evidence; construction period; sediment sampling/state/contamination/destination; transport and supplier boundaries; temporary-work/equipment reuse ledger; measured physical quantities and units; commissioning scope; excluded lifecycle stages |

Here item is the display alias of public Item(s), and 件 is the same count unit. All records and exchanges refer to this one actual accepted configuration, not a 1 kg construction proxy. Required qualifiers must be present in the produced dataset; absent acceptance/geometry prevents a complete reference definition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Exactly 1 item, the complete accepted configured entity; collect using cp_handover. Use per declared reference flow for all inventory and collection aggregation. |
| physical_quantities | auxiliary material-balance and geometry records linked to inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; Length; Area | kg; m3; m; m2 | Use actual weighed/certified quantities or surveyed geometry. Any volume-to-mass or area-to-mass conversion requires same-material/state measured density or areal mass, dimensional units and uncertainty; do not assign a mass to the whole entity. Here mass/kg, volume/m3, length/m and area/m2 constrain auxiliary records, not the primary property of every exchange. Each complete supplied component retains its card’s native property/unit: Number of items/item for the counted component rows, and Mass/kg for rubber_fender and mooring_bollard. Link component ID, configuration, supplied count and independently evidenced mass/volume or surveyed geometry in cp_material; caisson supplier mass and volume remain required. Do not substitute auxiliary mass for a native counted exchange, convert a mass-based component into an unevidenced item exchange, or add a duplicate manufacture input. |
| energy_identity | diesel and electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve adopted reference properties and energy units. Metered electricity kWh converts by 3.6 MJ/kWh; fuel mass uses actual batch net calorific value in MJ/kg, volume additionally uses measured density. Public identity property coefficients do not prove physical fuel heat content. |
| sediment_state | excavation and plume records | Mass; Volume | kg; m3 | Distinguish in-situ, loose/hopper and slurry volumes, wet mass and dry-solid mass. Use same-lot measured conversion; preserve moisture, carrier-water and contamination qualifiers. Concentration/NTU is not release mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed actual site/bottom/river/canal conditions and existing assets before this campaign; actual supplied material/assembly gates and transport start points |
| starting_condition_role | foreground_start |
| product_classification_scope | Complete declared harbour/navigation-waterway entity and integral facilities; classification is context, function defines applicability |
| recursive_input_rule | Existing retained harbour/waterway is starting stock with surveyed extent, not new same-category production. Separately acquired completed works need an independently bounded upstream dataset; no recursion into own output or rebuilding historic impacts by assumption |
| upstream_dataset_requirement | Link separately verified raw-material/manufactured-component/utility/equipment datasets by actual supplied state, production/transport boundary, geography and unit; report completeness independently |
| disclosure | Site construction and initial acceptance only; report linked upstream stages separately with missing coverage. No unqualified cradle-to-gate or whole-life result |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| b_delivery | Include actual preparation, capital dredging/excavation, ground/fill works, selected civil structures, integral installed equipment, task utilities, logistics, temporary works, corrections and cleanup through accepted handover. A piled pier may need no foundation dredging; prove every route from project evidence. | cedd-piers-2025; cedd-seawalls-breakwaters-2026; usace-soo-lock-2026 |
| b_consumed_inputs | For every purchased material and complete supplied component, local installed/placed/accepted wording specifies the evidenced route, configuration or delivered result; it does not restrict input manufacture to successful installation. This explicit exception also applies to the conditional amount rules below. Include actual attributable consumption before handover, including cutting, damage, rejection and rework/replacements before installation or acceptance, in each card’s native unit. Under cp_material, input = attributable gross receipts + opening stock - verified returns/transfers - closing reusable stock. Keep accepted installed quantities and measured wastes as separate reconciled records; neither cancels consumed input manufacture. Preserve all material, route and supplier-configuration conditions.  The stock-consumption equation covers consumed/permanent supplied materials, not the manufacturing-share portion of temporary or previously used assets. Temporary sheet_pile, timber_formwork and other reusable capital use the separate cp_reuse conserved manufacturing ledger even when returned/transferred or retained as usable stock. Physical movements do not set this use share to zero. |  |
| b_supplied_state | Purchased fresh concrete, precast units, gates and equipment enter in actual supplied state. Cement/aggregate/steel and equipment manufacture remain separately linked upstream; onsite concrete batching or gate fabrication requires its own ingredient/process rows and measured recipe, never double-count a purchased assembly. | cedd-piers-2025; usace-soo-lock-2026 |
| b_environment | Record sediment destinations separately from net constituent releases, water-resource abstraction separately from supplied water, and treatment-bound liquid separately from environmental discharge. Include actual containment, collection and pumping; do not assume all dredged material becomes an emission. | ifc-ports-ehs-2017; epa-concrete-washout-2012 |
| b_later_stages | Routine port cargo/passenger operations, vessel supply/repair, maintenance dredging, future repair/replacement and final demolition are outside this initial-delivery inventory. Removal of existing assets for this construction is included. Noise/vibration, habitat change, land occupation and hydrodynamic effects need separately scoped assessment; missing characterization is not zero impact. | ifc-ports-ehs-2017 |
| b_extensions | Cards cover specified atomic routes, not every possible configuration. Before asserting a complete dataset, add actual alternative gate/lift/pump/berthing systems, other rock/steel/concrete/soil specifications, coatings, joints, blasting charges, packaging or chemicals as separate physical exchanges with project records and verified identities. Never omit installed requirements by selecting a simpler route. | un-cpc3-waterworks-2025; cedd-piers-2025; cedd-seawalls-breakwaters-2026; usace-soo-lock-2026 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| excavation | Site preparation, capital dredging and navigation canal excavation | conditional | Actual clearance, existing-asset removal, harbour/channel/foundation dredging or canal/lock excavation; choose actual grab/backhoe/suction/land excavation route | foreground_process | per declared reference flow |
| ground | Foundation improvement, hydraulic fill and core placement | conditional | Actual foundation replacement, ground improvement, port reclamation or rubble core; no universal dredging or treatment | foreground_process | per declared reference flow |
| structures | Piling, structural installation, concrete placing and armour placement | conditional | Actual piled pier, solid block/caisson wall, breakwater, canal bank/chamber/floor or integral ramp; choose supplied-state route | foreground_process | per declared reference flow |
| fittings | Berthing and hydromechanical installation and commissioning | conditional | Actual fender/mooring, lock/gate/lift/dry-dock and integral pumping/control configuration; actual detailed BOM required | foreground_process | per declared reference flow |
| slipway | Rail slipway installation and acceptance trials | conditional | Actual rail/cradle/haulage slipway; dry cofferdam or underwater construction as actually used | foreground_process | per declared reference flow |
| support | Construction equipment operation, site utilities and water control | required | All actual included tasks; each utility/emission row remains conditional on occurrence and evidence | foreground_process | per declared reference flow |
| logistics | Construction mobilization, deliveries and waste logistics | conditional | Actual road/water transport legs outside already embodied supplier boundaries | foreground_process | per declared reference flow |
| handover | Survey, testing, correction, cleanup and complete handover | required | Complete accepted entity including actual commissioning and rework through handover | reference_process | per declared reference flow |

Energy/water/emissions are recorded once in support, tagged to each actual process task. Use actual dredger/excavator, piling equipment, crane/tug, concrete pump/vibrator, stone placement plant, cofferdam pump or test equipment logs. Capital manufacture is an optional explicitly bounded upstream module using cp_reuse; it cannot silently disappear into operation fuel or restart its full manufacturing share each project.

### Process: Site preparation, capital dredging and navigation canal excavation (`excavation`)

Actual clearance, existing-asset removal, harbour/channel/foundation dredging or canal/lock excavation; choose actual grab/backhoe/suction/land excavation route.

#### Outputs

##### Product flows

###### Characterized marine mineral sediment for external beneficial use, wet (`reused_sediment_product`)

Record only a verified beneficial-use recipient and engineering/environmental suitability. This is a separate lot destination, not an avoided-material credit; never also count its full mass as waste.

- Selected flow: Characterized marine mineral sediment for external beneficial use, wet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_sediment; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sediment`
- Sources: `ifc-ports-ehs-2017`

##### Waste flows

###### Fine-grained marine dredged sediment, non-hazardous, wet (`marine_sediment_waste`)

When sampled non-hazardous marine sediment is exported to a documented disposal recipient. Wet mass is measured by lot; dry solids and moisture retained separately. Do not use this for contaminated sediment or the plume.

- Selected flow: Fine-grained marine dredged sediment, non-hazardous, wet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_sediment; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sediment`
- Sources: `ifc-ports-ehs-2017`

###### Contaminated marine dredged sediment, wet (`contaminated_sediment_waste`)

Only lots with actual contaminant characterization and assigned treatment/disposal route. Keep each distinct hazard/state/recipient partition; no presumption that all dredging is contaminated.

- Selected flow: Contaminated marine dredged sediment, wet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_sediment; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sediment`
- Sources: `ifc-ports-ehs-2017`

###### Non-hazardous excavated mineral soil, wet (`canal_soil_waste`)

Actual land or freshwater-canal excavation surplus exported offsite, with mineral type, contamination and moisture tests. Internal cut-to-fill is not an external exchange.

- Selected flow: Non-hazardous excavated mineral soil, wet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_sediment; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sediment`
- Sources: `un-cpc3-waterworks-2025`; `ifc-ports-ehs-2017`

###### Excavated granite rock, surplus (`excavated_rock_waste`)

Only actual granite bedrock excavation surplus. Identify lithology and measured shipment mass; other lithologies need separate specific rows.

- Selected flow: Excavated granite rock, surplus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_sediment; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sediment`
- Sources: `usace-soo-lock-2026`

##### Elementary flows

###### Suspended mineral sediment to sea water (`sediment_sea`)

Conditional dredge-induced net suspended-solid release to sea water with a measured/calibrated mass-flux model. Turbidity or TSS concentration alone is not an exchange mass. Exclude exported wet sediment already in waste transfers.

- Selected flow: Suspended mineral sediment to sea water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_release; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `ifc-ports-ehs-2017`

###### Suspended mineral sediment to fresh water (`sediment_fresh`)

Only actual freshwater-canal or riverwork suspended-solid release, background-corrected with flow/flux observations. Do not transfer sea-water identity or convert NTU to kg without a site calibration and control volume.

- Selected flow: Suspended mineral sediment to fresh water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_release; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `ifc-ports-ehs-2017`

### Process: Foundation improvement, hydraulic fill and core placement (`ground`)

Actual foundation replacement, ground improvement, port reclamation or rubble core; no universal dredging or treatment.

#### Inputs

##### Product flows

###### Quartz-rich mineral sand for hydraulic fill (`hydraulic_sand`)

Actual accepted sand-fill route; collect source/grading/mineralogy, wet mass, moisture and placement survey. No default sand fraction, density or bulking. Internal reuse stays an internal transfer.

- Selected flow: Quartz-rich mineral sand for hydraulic fill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Granite quarry-run rock for breakwater core (`granite_core`)

Only actual granite quarry-run core/foundation fill identified by delivery and placement lots. Other lithology or engineered fill must be recorded separately.

- Selected flow: Granite quarry-run rock for breakwater core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Cement, portland cement (`ground_cement`)

Conditional deep cement mixing using supplied gray Portland cement powder, public production mix at factory. Link the actual supplier plant, geography and separately inventoried transport to site. The public tile classification conflicts with the binder description and remains a declared scientific identity-review issue. Measure binder deliveries, returns and actual injected quantities/depth; do not impose a mix rate or add this for untreated foundations.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Polypropylene nonwoven filter geotextile (`pp_geotextile`)

Only actual specified polypropylene nonwoven filter/separation layer; retain installed area, measured areal mass and offcut mass. No universal geotextile prescription. The CEDD source supports layer/construction tasks, not a polypropylene/nonwoven prescription. Exact polymer/form and filter function require actual supplier specification and project drawings.

- Selected flow: Polypropylene nonwoven filter geotextile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

### Process: Piling, structural installation, concrete placing and armour placement (`structures`)

Actual piled pier, solid block/caisson wall, breakwater, canal bank/chamber/floor or integral ramp; choose supplied-state route.

#### Inputs

##### Product flows

###### Fresh ready-mixed Portland-cement concrete (`fresh_concrete`)

Actual fresh mix delivered for placing, pumping, vibration and curing in deck, wall, chamber or floor. Retain recipe, exposure/strength requirements, supplied volume, returns and placed volume. Upstream mixing is excluded for purchased mix.

- Selected flow: Fresh ready-mixed Portland-cement concrete
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-piers-2025`; `usace-soo-lock-2026`

###### Hot rolled rebar steel (`rebar`)

Only actual hot-rolled low-alloy reinforcing steel with C≤0.2% matching the factory production-mix identity, with actual plant/geography and separately verified site-delivery link; record certificates, grade, dimensions, received/cut/installed mass and offcuts. Other grades require a separate verified identity.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-piers-2025`

###### Fabricated steel tubular foundation pile (`tubular_pile`)

Conditional driven/bored tubular pile route. Retain steel grade, diameter, wall thickness, length, corrosion treatment, supplied mass and driving/bore logs; any concrete infill is separate actual material.

- Selected flow: Fabricated steel tubular foundation pile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-piers-2025`

###### Steel sheet pile section (`sheet_pile`)

Actual permanent sheet-pile wall or temporary cofferdam only. Record section, interlocks/coating and installed mass; temporary reusable stock uses the conserved ledger, not full new manufacture each project.

- Selected flow: Steel sheet pile section
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_reuse to distinguish new permanently incorporated/consumed piles from temporary or previously used piles. The new-consumed portion follows cp_material gross receipts + opening stock - verified returns/transfers - closing reusable stock, including consumed losses. Temporary/previously-used manufacture equals measured asset net mass × supported conserved use share; return or closing stock does not erase the share and prior assigned manufacture is not charged again. Retain physical movements and installation separately; no pile is counted in both branches.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reuse`
- Sources: `cedd-piers-2025`; `usace-soo-lock-2026`

###### Precast reinforced concrete foundation pile (`concrete_pile`)

Actual precast pile route: accepted pile lengths/counts and supplier traceable mass, configuration and installation logs. Factory concrete and reinforcing steel are embodied upstream, not duplicate site inputs.

- Selected flow: Precast reinforced concrete foundation pile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-piers-2025`

###### Precast reinforced concrete beam (`precast_beam`)

Actual supplied beam consumed for this delivery, including beams damaged or rejected before installation/acceptance and replaced. Record gross receipts, opening/closing reusable stock and verified returns/transfers under cp_material; keep lifting, jointing, geometry and accepted installed mass separately. Include actual site joint materials separately.

- Selected flow: Precast reinforced concrete beam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-piers-2025`

###### Precast reinforced concrete deck slab (`precast_slab`)

Actual supplied pier deck or slipway-support slab. Retain section, lifting and installation evidence; no deck thickness or mass per area is defaulted.

- Selected flow: Precast reinforced concrete deck slab
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-piers-2025`

###### Precast Portland-cement concrete seawall block (`concrete_block`)

Actual blockwork wall/pier; record block configuration, counts and supplier measured mass, bedding and alignment. Other concrete composition is separately identified.

- Selected flow: Precast Portland-cement concrete seawall block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Precast reinforced concrete harbour caisson (`concrete_caisson`)

Actual complete supplied civil harbour caissons consumed for the evidenced float/tow-and-foundation-placement route, including caissons damaged/rejected and replaced before placement or acceptance; record accepted placed units separately. Record dimensions, compartment configuration, supplier mass/volume and ballast actually added onsite. A PRB reactive-media gate is not this product.

- Selected flow: Precast reinforced concrete harbour caisson
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Graded granite rock for breakwater underlayer (`granite_underlayer`)

Only actual graded granite underlayer/scour-apron rock. Keep layer lot and stone grading separate from core and armour; measure placed mass and surveyed layer extent.

- Selected flow: Graded granite rock for breakwater underlayer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Granite rock armour boulder (`granite_armour`)

Actual granite armour route, with individual grading/classes, source testing and placement records. No universal armour unit mass or density.

- Selected flow: Granite rock armour boulder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Precast Portland-cement concrete armour unit (`concrete_armour`)

Alternative concrete-armour route only; specify the actual shape/model, unit count, traceable unit mass and placement pattern. Do not presume rock and concrete armour occur together.

- Selected flow: Precast Portland-cement concrete armour unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Shuttering for concrete constructional work made out of wood (`timber_formwork`)

Actual supplied timber formwork panel, measured installed configuration and reusable stock mass. Track new stock, consumed/lost portion, returns and cross-project manufacturing attribution separately. Public supplied finished wood shuttering, production mix at plant; this row applies to an actual ordinary solid-timber panel with supplier material/form and plant-to-site link verified. Engineered wood panels/coatings require actual separate specification and disclosure. Preserve Mass/kg and the cumulative reuse ledger.

- Selected flow: Shuttering for concrete constructional work made out of wood `0c63533f-7bd2-4d58-a0cb-03a1bed26179`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_reuse; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reuse`
- Sources: `cedd-piers-2025`

#### Outputs

##### Waste flows

###### Hardened Portland-cement concrete rubble (`concrete_rubble`)

Measured segregated hardened concrete from initial-site removals/rejected work; no generic mixed construction-waste identity. Existing-asset manufacture is not newly produced foreground material.

- Selected flow: Hardened Portland-cement concrete rubble
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_waste; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

###### Low-alloy steel reinforcing-bar offcut (`rebar_offcut`)

Actual rebar cutting rejects sent to a documented recycler, measured by lot. Returned usable bar or sheet-pile stock is not scrap. No avoided virgin-steel credit is presumed.

- Selected flow: Low-alloy steel reinforcing-bar offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_waste; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `cedd-piers-2025`

###### Alkaline concrete washout liquid for treatment (`washout_liquid`)

Only separately exported washout liquid after actual collection/separation; retain volume, pH/solids analysis and treatment recipient. Contained reuse is an internal loop, not river-water emission.

- Selected flow: Alkaline concrete washout liquid for treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure the actual attributable exchange for this entity using cp_waste; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

###### Settled cementitious concrete washout sludge, wet (`washout_sludge`)

Only separated settled cementitious sludge measured with moisture and destination. Do not also include this solids mass in the exported-liquid solids inventory.

- Selected flow: Settled cementitious concrete washout sludge, wet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_waste; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

### Process: Berthing and hydromechanical installation and commissioning (`fittings`)

Actual fender/mooring, lock/gate/lift/dry-dock and integral pumping/control configuration; actual detailed BOM required.

#### Inputs

##### Product flows

###### Vulcanized rubber marine fender (`rubber_fender`)

Actual selected complete rubber fender, with model, rubber composition, supplied mass, fixing and berthing acceptance evidence. Raw rubber/latex is not a finished fender.

- Selected flow: Vulcanized rubber marine fender
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-piers-2025`

###### Fabricated steel mooring bollard (`mooring_bollard`)

Actual supplied steel bollards consumed for this delivery include pre-installation damage and rejected/replaced components, reconciled through cp_material receipts, stocks and verified returns/transfers; installed accepted quantity is retained separately. Declare anchor/fixing boundary and traceable configuration; a complete assembly excludes duplicate internal steel inputs. CEDD supports mooring facilities and describes cast-iron/concrete configurations; it does not establish this fabricated-steel version. This row requires actual supplier steel-component specification/BOM, otherwise add the true material-specific configuration.

- Selected flow: Fabricated steel mooring bollard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-piers-2025`

###### Fabricated steel navigation-lock miter gate (`miter_gate`)

Conditional actual miter-gate navigation lock. Record leaf/chamber configuration, delivered count, supplier mass and installation records; other sluice/floodgate/dry-dock closure types require their own atomic component rows.

- Selected flow: Fabricated steel navigation-lock miter gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usace-soo-lock-2026`

###### Vulcanized EPDM gate seal strip (`rubber_gate_seal`)

Only actual EPDM gate seal formulation/profile; record length, measured cross-section or supplier mass, jointing and leak-test records. Different elastomer is separately identified. The USACE source supports a gate/mechanical installation task only; this EPDM composition/profile requires actual supplier specification and BOM before the row applies.

- Selected flow: Vulcanized EPDM gate seal strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usace-soo-lock-2026`

###### Hydraulic power unit for waterway gate actuation (`hydraulic_drive`)

Actual supplied units consumed for the evidenced hydraulic gate actuation route, including pre-installation/acceptance damage, rejection and replacement; reconcile consumed units under cp_material and retain supplier configuration, accepted installed count, performance tests and oil charging records separately. Supplied complete unit must disclose oil included. The USACE source supports mechanical installation only; actual hydraulically actuated route and complete unit configuration require supplier BOM/test evidence.

- Selected flow: Hydraulic power unit for waterway gate actuation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usace-soo-lock-2026`

###### Electric centrifugal drainage pump assembly (`drainage_pump`)

Only actual integral pump of the accepted dry dock/lock/waterway entity. Retain liquid duty, pump configuration, delivered count and commissioning tests. Temporary dewatering plant uses construction-reuse attribution instead. The USACE source names a pump well, without establishing a centrifugal pump selection; actual duty/type requires supplier BOM and commissioning evidence.

- Selected flow: Electric centrifugal drainage pump assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usace-soo-lock-2026`

###### Electrical waterway-gate control cabinet (`control_cabinet`)

Actual complete supplied gate control cabinets consumed for the declared route, including pre-installation/acceptance damage, rejection and replacement under cp_material; keep accepted installed count separately; record voltage, enclosure and interlock/testing configuration. Internal purchased electronics are not duplicate inputs. The USACE source supports electrical installation only; actual supplied cabinet configuration requires project electrical drawings, supplier BOM and tests.

- Selected flow: Electrical waterway-gate control cabinet
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usace-soo-lock-2026`

### Process: Rail slipway installation and acceptance trials (`slipway`)

Actual rail/cradle/haulage slipway; dry cofferdam or underwater construction as actually used.

#### Inputs

##### Product flows

###### Steel slipway rail section (`slipway_rail`)

Actual rail slipway only; record actual section, length, rail gauge/line-level survey and delivered mass. No generic railway configuration substituted.

- Selected flow: Steel slipway rail section
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Fabricated steel slipway cradle (`slipway_cradle`)

Actual supplied steel cradle: dimensions, configuration, measured/supplier mass, installation and load/haulage acceptance records. Do not assume a default supported ship mass.

- Selected flow: Fabricated steel slipway cradle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Electric slipway haulage winch (`slipway_winch`)

Only actual supplied complete electric winch, matched to the installed cradle/rope. Record actual capacity/configuration without treating design capacity as activity.

- Selected flow: Electric slipway haulage winch
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

###### Steel slipway haulage wire rope (`wire_rope`)

Actual separately supplied rope only; retain diameter, construction, length, measured mass and termination. Exclude rope already included in a purchased complete winch assembly.

- Selected flow: Steel slipway haulage wire rope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `cedd-seawalls-breakwaters-2026`

### Process: Construction equipment operation, site utilities and water control (`support`)

All actual included tasks; each utility/emission row remains conditional on occurrence and evidence.

#### Inputs

##### Product flows

###### Diesel (`diesel`)

Public distilled/refined diesel production mix at factory, linked through the actual supplier and delivery chain to fuel consumed by documented dredger, excavator, pile plant, crane, workboat or generator tasks. Keep actual fuel grade, origin/fossil fraction, sulfur, batch mass, density and net calorific value; no assumed kg/MJ factor. If origin/route differs, replace identity.

- Selected flow: Diesel `fbd79004-188c-47a4-900b-96005d994690`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure the actual attributable exchange for this entity using cp_energy; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ifc-ports-ehs-2017`

###### Alternating current (`electricity_lv`)

Only actual CN grid-average electricity supplied to user at <1 kV. Meter each construction/commissioning task; preserve public energy property and MJ. Other geography/supply needs another exact identity, not this row.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure the actual attributable exchange for this entity using cp_energy; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ifc-ports-ehs-2017`

###### Alternating current (`electricity_mv`)

Only actual CN grid-average electricity supplied to user at 1–35 kV. Separate meters from low-voltage row; do not count both sides of the same transformer as independent supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure the actual attributable exchange for this entity using cp_energy; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ifc-ports-ehs-2017`

###### drinking water (`supplied_water`)

Only actual purified drinking water made from surface water, public production mix at water-treatment plant. Verify actual supplier geography, plant-gate interface and the real distribution/transport link to specified site curing/washdown/dust-control tasks; this plant identity does not itself establish delivered site supply. Record measured same-state density to convert metered volume to mass, without a default 1000 kg/m3; groundwater/non-potable supplies require separate identities.

- Selected flow: drinking water `4f197bf3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_water; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-concrete-washout-2012`; `epa-heavy-construction-1995`

###### Mineral hydraulic oil (`mineral_hydraulic_oil`)

Only actual charged/consumed petroleum-based hydraulic oil in construction or commissioning, with grade and supplier formulation. Installed sealed unit oil already embodied upstream is not charged twice. The project news does not identify oil formulation; mineral-oil origin requires the actual product specification before application.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_material; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usace-soo-lock-2026`

##### Elementary flows

###### river water (`river_abstraction`)

Only measured direct river-resource abstraction for actual construction water supply. Hydraulic dredging carrier water already in the dredged slurry is disclosed separately; internal movement is not automatically consumptive freshwater demand.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure the actual attributable exchange for this entity using cp_water; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ifc-ports-ehs-2017`

###### Sea water resource directly abstracted for construction (`sea_abstraction`)

Only actual direct sea-water resource withdrawal, with intake/use/return records and salinity. Do not use freshwater or treated-water identity and do not presume dredging slurry circulation is equivalent to a separate supplied-water input.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_water to collect attributable actual sea-water withdrawal mass in kg per declared reference flow. If the intake meter records m3, multiply that measured volume by actual seawater density in kg/m3 supported for the same salinity and temperature; retain raw volume, density method and uncertainty. No default1000kg/m3, pure-water density or guessed conversion; unknown density prevents a numeric Mass result. Reconcile the raw-volume intake/use/return ledger separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ifc-ports-ehs-2017`

#### Outputs

##### Waste flows

###### Construction dewatering effluent for offsite treatment (`dewatering_liquid`)

Only effluent transferred to a technosphere treatment recipient; characterize origin, salinity, solids and contaminants. Permitted direct discharge needs separate actual water/constituent elementary identities and amounts, not this transfer.

- Selected flow: Construction dewatering effluent for offsite treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure the actual attributable exchange for this entity using cp_waste; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ifc-ports-ehs-2017`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only actual fossil-fuel carbon oxidized during attributable construction tasks, immediate emissions to air unspecified. Retain carbon/fossil fraction and oxidation evidence or verified engine measurement; exclude upstream and biogenic carbon.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_release; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `ifc-ports-ehs-2017`

###### nitrogen monoxide (`nitrogen_monoxide`)

Conditional actual measured/speciated NO from task engines, immediate air unspecified. NOx expressed as NO2-equivalent is not measured NO; no conversion by renaming.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_release; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `ifc-ports-ehs-2017`

###### nitrogen dioxide (`nitrogen_dioxide`)

Conditional separately supported NO2 engine release, immediate air unspecified. Separate NO, NO2 and N2O identities; a total-NOx factor requires reviewed speciation before these rows can be quantified.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_release; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `ifc-ports-ehs-2017`

###### particles (PM10) (`exhaust_pm10`)

Only task-engine PM10 supported by same equipment/fuel/control-state measurement or applicable reviewed factor; immediate air unspecified. Exclude dust counted in dust_pm10 and distinguish PM10 from TSP and disjoint size fractions.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_release; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `ifc-ports-ehs-2017`

###### particles (PM10) (`dust_pm10`)

Only actual dry land excavation, rock/soil handling or haul-road dust with PM10-specific site measurement/model. Wet underwater dredging does not imply air dust. Historical AP-42 general TSP factor is not adopted as a PM10 default.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the actual attributable exchange for this entity using cp_release; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `epa-heavy-construction-1995`

### Process: Construction mobilization, deliveries and waste logistics (`logistics`)

Actual road/water transport legs outside already embodied supplier boundaries.

#### Inputs

##### Product flows

###### Non-refrigerated lorry freight transport service (`lorry_transport`)

Actual non-refrigerated construction material/equipment/waste shipments only; measured cargo mass and driven distance by leg, vehicle/load/empty-return configuration. Not a cost or design-capacity proxy.

- Selected flow: Non-refrigerated lorry freight transport service
- Flow property / unit: Mass times distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Measure the actual attributable exchange for this entity using cp_transport; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `ifc-ports-ehs-2017`

###### Construction barge freight transport service (`barge_transport`)

Actual material or sediment cargo movement by barge with voyage distance/load and return leg. Do not duplicate workboat/dredger diesel already directly inventoried for the same trip.

- Selected flow: Construction barge freight transport service
- Flow property / unit: Mass times distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Measure the actual attributable exchange for this entity using cp_transport; retain task/lot, physical state and original units. Apply only when the stated condition occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `ifc-ports-ehs-2017`

### Process: Survey, testing, correction, cleanup and complete handover (`handover`)

Complete accepted entity including actual commissioning and rework through handover.

#### Outputs

##### Product flows

###### Accepted configured harbour or navigation waterway entity (`finished_harbour`)

One actual complete project entity at its stated site/perimeter and accepted delivery state, with all integral facilities identified. This is not one dredging operation, building service or material bundle.

- Selected flow: Accepted configured harbour or navigation waterway entity
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Sources: `un-cpc3-waterworks-2025`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| a_subdivision | Assign shared dredger/plant, utilities, temporary works and transport to tasks/projects by metered activity and physical records first. Residual shared quantities use documented causal pump/engine hours or measured work, with denominator and uncertainty; no assumed equal shares, cost proxy or design throughput. | ifc-ports-ehs-2017 |
| a_reuse | Keep one cross-project ledger per reusable equipment/component. Manufacturing attribution uses actual supported cumulative activity/uses or a justified lifetime basis; cumulative dimensionless allocated shares across projects, periods and repeated use must not exceed one. Unknown service life or beneficiaries stays explicit review. Operating fuel/repair is attributed to actual tasks separately; returned stock is not scrap. | cedd-piers-2025; cedd-seawalls-breakwaters-2026 |
| a_sediment | Retained sediment/fill is an internal transfer. Exported beneficial-use sediment and disposal lots are mutually exclusive destinations for each physical portion. Avoided virgin-fill or recycling credits are not automatic; any extended downstream allocation needs a separate declared method, verified equivalence and conserved mass ledger. | ifc-ports-ehs-2017 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_handover | handover | Reference entity and functional geometry | acceptance_survey | project/site/perimeter; facility schedule; accepted count; dated acceptance; initial and as-built levels/datum; channel and berth geometry; lock/dry-dock/slipway configuration; corrections | Combine signed handover documents, traceable topographic/bathymetric surveys and equipment/structure acceptance tests; one complete declared entity, no assumed mass or life | item; m; m2; m3 | Each lot/task/transfer; continuous meters where used | Entire documented construction campaign including commissioning, rework and cleanup | Same declared project site/perimeter and its documented external legs/recipients | per declared reference flow | Calibration/certificates; original records; sampling representativeness; signed reconciliation and uncertainty |
| cp_material | all construction tasks | Specific material and supplied component | delivery_installation | row/lot/task; supplier; grade/composition/state; received and returned mass/volume/count; installed quantity; certificates; measured density/areal mass where needed; component damage/replacement records; opening/closing reusable stock; verified returns/transfers | Use calibrated weighbridge/scale, certified supplier product quantity, batch volume/count and as-built survey; reconcile returns, installation and offcuts by atomic material; for every purchased material and complete supplied component, input in its declared native unit = attributable gross receipts + opening stock - verified returns/transfers - closing reusable stock, including consumed pre-acceptance failures. Keep installed acceptance and actual waste separate without cancelling input manufacture. Apply b_consumed_inputs also when a card names installed, placed or accepted components; quantity is gross attributable consumption, while accepted delivery is a separate result.  For reusable or previously used assets, these receipts/returns/stocks are physical movement records only; do not use net stock consumption as their manufacturing amount. Delegate the manufacturing share to cp_reuse and a_reuse, including temporary sheet_pile, and keep permanently consumed new piles in the separate material branch. | kg; m3; item | Each lot/task/transfer; continuous meters where used | Entire documented construction campaign including commissioning, rework and cleanup | Same declared project site/perimeter and its documented external legs/recipients | per declared reference flow | Calibration/certificates; original records; sampling representativeness; signed reconciliation and uncertainty |
| cp_sediment | excavation | Excavated sediment/soil/rock and destination | survey_sampling_transfer | lot/location/depth; lithology; chemical/hazard tests; before/after bathymetry and datum; wet mass; dry fraction; bulk/slurry volume; carrier water; recipient; weigh/manifest records | Use representative location/depth samples and before/after surveys; weigh each exported lot, measure same-lot moisture/density/solid fraction and track actual recipient. Separate in-situ from transported volume | kg; m3 | Each lot/task/transfer; continuous meters where used | Entire documented construction campaign including commissioning, rework and cleanup | Same declared project site/perimeter and its documented external legs/recipients | per declared reference flow | Calibration/certificates; original records; sampling representativeness; signed reconciliation and uncertainty |
| cp_energy | support | Fuel and task-specific electricity | meter_fuel_log | task/equipment; meter/circuit; CN or actual geography; delivered voltage; start/end kWh; fuel grade/origin; tank receipts/returns; density/temperature; batch NCV; runtime | Read calibrated meters and reconcile fuel stock/deliveries/returns by task. Retain supplier/test NCV and density at measured state; generator fuel separate from purchased grid electricity | kWh; MJ; kg; litre | Each lot/task/transfer; continuous meters where used | Entire documented construction campaign including commissioning, rework and cleanup | Same declared project site/perimeter and its documented external legs/recipients | per declared reference flow | Calibration/certificates; original records; sampling representativeness; signed reconciliation and uncertainty |
| cp_water | support | Supplied water and direct resources | meter_water_log | intake/supplier; river/sea/purified source; salinity; use; meter volumes; density; recirculation; return/discharge; wet-material carrier water | Meter actual external withdrawals/supply/returns and identify receiving route. Keep resource intake, technosphere supply and internal circulation separate; measure density where Mass identity is used | m3; kg | Each lot/task/transfer; continuous meters where used | Entire documented construction campaign including commissioning, rework and cleanup | Same declared project site/perimeter and its documented external legs/recipients | per declared reference flow | Calibration/certificates; original records; sampling representativeness; signed reconciliation and uncertainty |
| cp_release | support and excavation | One specified elementary release | measurement_or_calibrated_model | row/task; substance/CAS; fossil origin; receiving medium/submedium; timing; engine/control state; measured release or activity/factor provenance; background water concentration; flux/control volume; uncertainty | Measure substance-specific mass or use independently reviewed same-condition activity/factor model. Sediment plume load needs background-corrected net flux integration with measured flow; record dB/NTU separately as assessment indicators | kg | Each lot/task/transfer; continuous meters where used | Entire documented construction campaign including commissioning, rework and cleanup | Same declared project site/perimeter and its documented external legs/recipients | per declared reference flow | Calibration/certificates; original records; sampling representativeness; signed reconciliation and uncertainty |
| cp_waste | all construction tasks | One segregated waste transfer | waste_manifest | row/task; physical composition; hazard/state/moisture; wet mass or liquid volume; measured solids fraction; container; treatment recipient; transfer receipt | Weigh segregated solid streams and meter collected liquids; retain waste consignment and recipient evidence. Do not conflate reusable returns, product reuse or direct environmental discharge | kg; m3 | Each lot/task/transfer; continuous meters where used | Entire documented construction campaign including commissioning, rework and cleanup | Same declared project site/perimeter and its documented external legs/recipients | per declared reference flow | Calibration/certificates; original records; sampling representativeness; signed reconciliation and uncertainty |
| cp_transport | logistics | One specified road/barge freight leg | shipment_voyage | leg/vehicle/vessel; cargo identity/mass; route and actual distance; load factor; empty return; supplier included boundary; own fuel records | Use actual weigh bills, delivery/voyage logs and route distances; reconcile with own task-engine inventory and linked supplier transport coverage | kg; km; kg*km | Each lot/task/transfer; continuous meters where used | Entire documented construction campaign including commissioning, rework and cleanup | Same declared project site/perimeter and its documented external legs/recipients | per declared reference flow | Calibration/certificates; original records; sampling representativeness; signed reconciliation and uncertainty |
| cp_reuse | structures and support | Temporary works/construction capital and permanent or reused sheet-pile attribution | cross_project_ledger | asset/component id; physical configuration and measured mass/count; new/used state; manufacture boundary; actual task use; cumulative service/activity; assigned shares; prior allocations; returns/losses ; sheet_pile new/used status and permanent/temporary destination; physical mass/receipts/returns/stocks/incorporation/loss from cp_material | Use one persistent asset ledger with actual use and return records across projects/periods. If manufacturing is included, document supported beneficiary denominator and cumulative share≤1; missing lifetime/activity basis remains review  For new permanently incorporated or consumed sheet_pile use the cp_material net-consumed material balance including pre-acceptance losses. For temporary or previously used piles use actual asset mass × supported conserved manufacture share, never net returned stock; later permanent retention/loss cannot reset already allocated manufacture and may receive only a justified remaining share. Keep both branches and physical movements separate, with no duplicate manufacture. | kg; item; h; dimensionless | Each lot/task/transfer; continuous meters where used | Entire documented construction campaign including commissioning, rework and cleanup | Same declared project site/perimeter and its documented external legs/recipients | per declared reference flow | Calibration/certificates; original records; sampling representativeness; signed reconciliation and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_project_ledger | all inventory rows | Sum physically attributable task/lot records once for this one declared reference flow; retain physical numerators and reconcile received/returned/installed/waste quantities. No division by assumed facility mass, design capacity or lifetime | cp_handover; cp_material; cp_sediment; cp_energy; cp_water; cp_release; cp_waste; cp_transport; cp_reuse | Measured/calculated exchange per declared reference flow | un-cpc3-waterworks-2025 |
| c_physical_state | Material and sediment state conversion | Use paired same-lot measurements: mass = volume × measured density; dry solids = wet mass × measured dry fraction. State each volume type, temperature/moisture, density units and uncertainty; if unproved retain original unit and review | cp_material; cp_sediment; cp_water | Verified material-state quantities, never invented entity mass | ifc-ports-ehs-2017 |
| c_energy | Fuel and electricity quantities | Electricity MJ = metered kWh × 3.6; fuel MJ = measured kg × batch NCV in MJ/kg, and measured litres require measured kg/litre density. NCV/route and supply voltage must match the row; no generic fuel factor | cp_energy | Actual MJ per declared reference flow |  |
| c_release | Substance-specific environmental release | Apply verified substance-specific measurements or an independently reviewed activity/factor model with matching units and control state. Plume release is net mass flux integrated over documented time/control volume after background correction; do not equate excavated dry mass, concentration, NTU or receptor exposure with release | cp_release; cp_sediment; cp_energy | One substance/medium-specific kg release per declared reference flow; absent basis stays review | ifc-ports-ehs-2017; epa-heavy-construction-1995 |
| c_transport | Actual freight legs | Sum actual cargo kg × leg km for separately identified lorry/barge journeys; disclose loading/returns and embodied transport. Own-engine fuel for a leg and purchased service for the same leg cannot both carry the full burden | cp_transport; cp_energy | Actual kg*km per declared reference flow | ifc-ports-ehs-2017 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_project | reference entity | Same site/configuration, actual functional geometry, original datum, signed acceptance and complete facility schedule; no invented loads/life/mass | cp_handover |
| dq_material | all inputs and wastes | Lot-specific composition/state, measured quantity and traceable recipient; preserve supplier and foreground boundaries and disclose unresolved identities | cp_material; cp_sediment; cp_waste |
| dq_environment | environmental inventory | Actual substance/medium/timing and representative sampling; separate measured, calibrated modeled and unquantified results; noise/underwater vibration/habitat gaps disclosed independently | cp_release; ifc-ports-ehs-2017 |
| dq_reuse | shared equipment/temporary works | Supported causal attribution, one cumulative ledger and shares≤1; missing lifetime/activity basis blocks the affected manufacturing module, not a fabricated default | cp_reuse |
| dq_completeness | whole dataset | Inventory every actual included task and supplied-state component, explicit non-applicability, uncertainty and stage coverage. A candidate record/UUID or projection pass is not a completed project data package or approved methodology | cp_handover; actual process ledger |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| v_identity | Reference name exactly equals finished_harbour; quantity is 1 item/1 件, with Count property, same site/configuration and complete acceptance record. No generic kg-per-facility, area/length conversion or declared capacity may stand in for actual delivered entity. | un-cpc3-waterworks-2025 |
| v_route | Check as-built geometry, datum, facility schedule, actual methods, material states and all accepted installation/test corrections. For every non-applicable card retain evidence of absence; route gaps must be added before a completeness claim. | cedd-piers-2025; cedd-seawalls-breakwaters-2026; usace-soo-lock-2026 |
| v_balance | Reconcile incoming, installed, returned and lost materials, segregated waste and sediment destinations. Wet/dry mass, in-situ/hopper/slurry volumes and carrier water require same-lot measured conversion evidence; no assumed yield, density, bulking or moisture. | ifc-ports-ehs-2017; epa-concrete-washout-2012 |
| v_energy_release | Verify each adopted identity, property and unit; actual electricity geography/voltage; fuel origin/NCV; immediate air submedium and chemical speciation. NTU, dB, NOx-as-NO2 and pollutant concentrations cannot be silently renamed into kg elementary flows. Unquantified emissions remain gaps, not zero. | ifc-ports-ehs-2017; epa-heavy-construction-1995 |
| v_boundary_allocation | Check supplier-gate versus site boundaries and transport legs, no duplicate assemblies/ingredients/fuel, conserved reuse shares and independently disclosed later-stage/impact gaps. Candidate checks do not grant scientific approval or publication. | ifc-ports-ehs-2017 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground initial-construction and acceptance inventory of one actual configured harbour/navigation-waterway entity |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Site-specific delivery-stage module with verified project geometry and upstream links; later inclusion in separately reviewed lifecycle model |
| excluded_use | Unqualified full-life or comparative conclusion; generic intensity without functional equivalence; material/service/vessel output substitution; candidate checks as approval |
| required_metadata | site and project perimeter; marine/freshwater setting and salinity; project type and actual new-work/reconstruction scope; retained existing assets; initial/as-built datum and bathymetry; accepted channel length/width/depth and basin area as applicable; pier/wharf length and deck area; structure/pile/armour/fill configuration; lock/dry-dock effective dimensions and water levels; slipway length/slope/gauge and cradle/haulage configuration; actual design/use conditions and acceptance evidence; construction period; sediment sampling/state/contamination/destination; transport and supplier boundaries; temporary-work/equipment reuse ledger; measured physical quantities and units; commissioning scope; excluded lifecycle stages |
| required_quality_disclosure | Task/stage completeness, measured/modelled/unquantified amounts, unresolved identities, sediment conversion/contamination uncertainty, conserved reuse shares, background boundaries and noise/habitat/hydrodynamic/later-stage gaps |
| update_trigger | Changed accepted configuration/geometry, dredging/structure route, supplier material state, sediment destination, equipment/control, commissioning correction or verified identity/method evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-waterworks-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF pp.279–280. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Entity scope and neighboring waterworks functions; no amounts/life or accepted mapping |
| ifc-ports-ehs-2017 | official_guidance | World Bank Group/IFC, EHS Guidelines for Ports, Harbors, and Terminals, 2 February 2017, pp.6–10 (§§16–35),17–18 (§§58–61),32–33 (Annex A §§90–96). https://www.ifc.org/content/dam/ifc/doc/mgrt/20170201-final-ehs-guidelines-for-ports-harbors-and-terminals.pdf | Qualitative sediment/water/environmental boundaries and conditional noise; site-specific applicability, no numerical emission or regulatory threshold adopted |
| cedd-piers-2025 | official_guidance | Hong Kong CEDD, Port Works Design Manual Part 2, Guide to Design of Piers and Dolphins, October 2025 e-version, printed pp.16–17,22–25,41–43,50–53 (PDF18–19,24–27,43–45,52–55). https://www.cedd.gov.hk/filemanager/eng/content_89/PWDM_2025_e-version%20Oct%202025_p2_1_133_r2.pdf | Alternative piled/solid structures and fender configuration; Hong Kong qualitative guidance only; no generalized local design prescriptions |
| cedd-seawalls-breakwaters-2026 | official_guidance | Hong Kong CEDD, Port Works Design Manual Part 4, Guide to Design of Seawalls and Breakwaters, April 2026 e-version, printed pp.11,25–27,49–55,65–67 (PDF13,27–29,51–57,67–69). https://www.cedd.gov.hk/filemanager/eng/content_89/p4_combined.pdf | Conditional rock/concrete structural and ground-treatment routes, construction and slipway components; no default density, dimensions, sampling rates, capacity or life |
| usace-soo-lock-2026 | official_guidance | USACE Detroit District, New Lock at the Soo Phase 3 reaches 50% complete milestone, 29 September 2026, construction-scope and offsite-fabrication paragraphs. https://www.dvidshub.net/news/575917/new-lock-soo-phase-3-reaches-50-complete-milestone | One actual lock project supports conditional cofferdam/chamber/gate/mechanical-electrical tasks and offsite/site distinction; no project quantities, costs, progress or schedule generalized |
| epa-heavy-construction-1995 | official_guidance | US EPA AP-42 §13.2.3 Heavy Construction Operations, January 1995, pp.13.2.3-1–2. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Historical qualitative dust mechanisms and specificity limitations only; no general TSP/area/month factor adopted as PM10 |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice: Concrete Washout, EPA-833-F-11-006, February 2012, pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Conditional separate washout liquid/settled solid handling and supplied concrete ingredients; no fixed pH, mixture recipe or quantitative rate adopted |
