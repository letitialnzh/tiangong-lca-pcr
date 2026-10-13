---
pcr_id: pcr.constructions-and-construction-services.constructions.industrial-and-agricultural-building-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Industrial and agricultural building delivery

## 1. Scope and Applicability

This PCR covers the actually constructed and accepted building entity used for industrial production/assembly (factories, plants, workshops) and agricultural buildings including silos and storage facilities. A delivered site-specific entity, including its declared foundations, frame/shell, industrial floor where applicable, enclosure and fixed building services, is the reference product. Steel portal, reinforced/precast concrete, masonry, timber and agricultural storage routes remain within scope when evidenced by the actual project. A steel example does not redefine the class.

Exclude mining facilities, power plants, chemical/related facilities and specialized manufacturing facilities such as iron foundries (CPC 53261/53262/53269); exclude residential/commercial buildings outside the category, upstream construction products sold alone, construction services and production machinery. Integrated office/ancillary space within the accepted building is included and disclosed. Standalone machinery, conveyors, grain drying/aeration process equipment and process-crane equipment are outside the building product unless a separately justified integrated scope is declared; structural supports actually part of the building remain included. Construction to handover is the foreground boundary; the delivered entity is not a claim of full lifetime performance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.industrial-and-agricultural-building-delivery |
| classification_refs | CPC 3.0 53121 — Industrial buildings |
| covered_products | Accepted industrial-production/assembly buildings and agricultural buildings including storage silos, with project-specific complete delivery scope |
| excluded_products | CPC excluded specialized facilities; building-service contracts; material kits; production equipment; other occupancy classes |
| representative_product | One accepted factory/workshop building or one accepted agricultural building/silo of an explicitly surveyed configuration |
| production_route | Actual site preparation, foundations, load-bearing erection or shell assembly, enclosure, fixed services, commissioning and handover; route-specific atomic rows |
| market_state | Completed on its declared site and signed over in the specified construction/fit-out condition, without an assumed production operation period |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver the building enclosure/structure and declared fixed services for the documented industrial or agricultural function |
| How much | One complete accepted entity; report surveyed gross/internal/useful areas with explicit definitions, number of levels, clear height and actual dimensions; for silo declare usable storage volume/capacity and contents basis without default bulk density |
| How well | As-built structural system, actual design/performance records, enclosure, industrial floor requirements and installed service/acceptance scope; no generic design loads or compliance approval |
| How long or cycle | One actual construction-to-handover event with start/end dates; operational service life is outside this reference and must be source-supported in later scenarios |
| reference_flow_link | reference_building |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed industrial or agricultural building |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | entity/site id; industrial/agricultural function and exclusions; delivery date/state; full installed scope; actual area definition and geometry; clear height; structural system; floor/performance evidence; actual silo contents and capacity basis if applicable; route; upstream gates; unmeasured/excluded stages |

The unit item is a display alias for public Item(s), not kg or m2. The reference output and every inventory/protocol denominator are the same declared whole entity. Required qualifiers must be present in the foreground package. Do not convert buildings to mass, area or annual service using assumed averages; comparisons require matched actual function, size, performance and scope.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One accepted complete entity with cp_acceptance. Keep the same declared reference flow for all records. No numeric mass M is imposed. |
| actual_geometry | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Survey areas with stated measurement convention and as-built dimensions; retain silo usable volume in m3 separately. Geometry describes function/configuration and is not an automatic output conversion. |
| energy_identity | lv_electricity; mv_electricity; diesel | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve public net calorific value reference and energy group. Electricity kWh uses 3.6 MJ/kWh; diesel kg to MJ needs actual LHV and litres to kg actual density at declared state. Retain raw records and uncertainty. |
| transport_basis | road_freight | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | Retain actual cargo mass and each route distance in cp_transport; documented tonne-kilometres are an input service numerator per the same entity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual documented site condition plus supplied construction products/equipment at explicitly named supplier or site gates before installation |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | Industrial/agricultural delivered building entity within the stated inclusions/exclusions |
| recursive_input_rule | A reused same-category building or shell is recorded once at its actual received state/gate; expose residual inherited burdens and refurbishment work, do not recursively recreate its full construction inventory |
| upstream_dataset_requirement | Compatible A1–A3 material/component manufacture and actual A4 delivery links must be supplied separately and checked for included transport/site processes; missing links preclude complete cradle-to-handover claim |
| disclosure | Site preparation and pre-existing demolition; product/manufacture gates; construction phases and temporary works; actual transport, fixed services, commissioning; later use, maintenance/replacement, final demolition, treatment and module D excluded |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| construction_gate | dataset | Collect each actual foreground work package through accepted handover; the inventory is construction-focused, not automatically complete cradle-to-gate. Upstream products carry their own manufacturing burden rather than copied manufacture into site work. | rics-wlca-2024 |
| route_completeness | all inventory rows | Process and flow examples are conditional, not a universal bill. Add every actually used atomic cement, aggregate, additive, panel, joint/grout, fixing, membrane, service component and waste for the real design. Do not drop industrial/agricultural routes because their identities are unresolved. | jrc-levels-boq-2021; un-cpc-3-53121 |
| boundary_consumed_inputs | permanent/consumed supplied materials and assemblies; excludes reusable-asset manufacture | Local installed, delivered, commissioned or as-built wording specifies the intended route/configuration and acceptance evidence; it does not exclude attributable materials or assemblies consumed in attempted installation, damage, rejected-and-scrapped work or replacements before acceptance. In each native unit, consumed input = attributable gross receipts + opening stock - verified returns/transfers - closing usable stock. Retain actual supplied identity/configuration and assembly inclusions, with failed/replaced items traced to their own identity rather than the final replacement identity. Reconcile accepted installation and waste separately. Verified returns/usable surplus are excluded from consumption, but their attributable transport/handling/rework remains. This equation does not measure reusable equipment/formwork manufacture: retain section 7 conserved lifetime-use shares even when assets are returned/transferred/held in closing stock, and never charge the same asset as both full consumption and a use share. |  |
| environment_gate | utilities; waste | Distinguish supplied water, direct resource intake, dewatering, contained washwater, treated discharge and each measured emission constituent. Construction noise/vibration/land and unmeasured constituents require explicit assessment/disclosure, not invented mandatory exchanges. Direct combustion and generator supply must not double count. | epa-concrete-washout-2012; epa-construction-dust-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ground | Site preparation and earthworks | required | Actual ground investigation, clearance, excavation, fill and drainage required by the delivered design; pre-existing demolition separately disclosed | foreground | per declared reference flow |
| concrete | Foundations and structural concrete including industrial ground slab | conditional | Actual cast-in-place foundations, slab or frame; measure concrete placement, reinforcement, finishing, curing, pumps and formwork | foreground | per declared reference flow |
| frame | Load-bearing frame and masonry erection | conditional | Actual steel, precast, timber or masonry route with separate row applicability; cranes/MEWPs and temporary bracing, bolting or welding, alignment and inspection | foreground | per declared reference flow |
| envelope | Roof, wall enclosure and industrial openings | conditional | Actual covered building: cladding, insulation, roof drainage and doors as delivered; open agricultural structures disclose absent enclosure | foreground | per declared reference flow |
| silo | Agricultural storage-silo assembly | conditional | Actual agricultural silo: foundation interface, shell/roof, anchors, seals and access; steel example is not universal for concrete silos | foreground | per declared reference flow |
| services | Industrial floor finishes and fixed building services | conditional | Only actually delivered fixed lighting, power distribution, drainage, ventilation and fire protection; integral offices included within declared building; process machinery excluded | foreground | per declared reference flow |
| utilities | Site equipment operation and temporary facilities | required | Actual construction utilities and measured releases across all work packages; stages and equipment retained | foreground | per declared reference flow |
| waste | Construction waste collection and export | conditional | Every occurring waste segregated by material and state, with actual destination; add atomic exchanges not represented by examples | foreground | per declared reference flow |
| transport | Deliveries and exported waste transport | conditional | Actual transport legs not already in linked datasets; preserve different gates and modes | foreground | per declared reference flow |
| handover | Inspection, commissioning and accepted handover | required | Whole delivered entity with documented geometry, structural/enclosure/services scope and signed acceptance; test exchanges retained | reference_product | per declared reference flow |

### Process: Site preparation and earthworks (`ground`)

#### Inputs

##### Product flows

###### Crushed stone for foundation subbase (`subbase`)

If used: record actual grading, moisture, delivered and retained quantities; no universal layer thickness.

- Selected flow: Crushed stone for foundation subbase
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_ground; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ground`
- Sources: `jrc-levels-boq-2021`

#### Outputs

##### Waste flows

###### Non-contaminated excavated mineral soil sent for disposal (`soil_export`)

Only if exported as waste: distinguish bank/loose volume, contamination and destination; reused soil is not disposal.

- Selected flow: Non-contaminated excavated mineral soil sent for disposal
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_ground; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ground`
- Sources: `rics-wlca-2024`

### Process: Foundations and structural concrete including industrial ground slab (`concrete`)

#### Inputs

##### Product flows

###### Ready-mixed concrete delivered before placing (`ready_mix`)

For supplied concrete in foundations, ground slab or frame: retain actual mix designation, strength/exposure specification, tickets, pump/placing, curing and returns. Site batching instead requires cement, each aggregate, water and additive rows; do not count both routes.

- Selected flow: Ready-mixed concrete delivered before placing
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_concrete; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concrete`
- Sources: `jrc-levels-boq-2021`

###### Steel rebar (`rebar`)

Only for actual non-alloy steel supplied in irregularly wound coils, matching the public Chinese identity. Record supplier gate, coil grade/shape and weighed receipts; on-site straightening, cutting and bending are separate actual foreground operations with losses and utilities. Straight bars, already cut/bent bars, alloy reinforcement and prefabricated cages require separately verified identities; the generic English name does not broaden applicability.

- Selected flow: steel rebar `4f1a1837-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_concrete; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concrete`
- Sources: `jrc-levels-boq-2021`

###### Plywood formwork panel (`formwork`)

Only if used: record actual panel thickness, composition, area, reuse and remaining service under cp_asset; installed contact area is not the whole new panel charge.

- Selected flow: Plywood formwork panel
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Measured attributable exchange total from cp_concrete; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concrete`
- Sources: `rics-wlca-2024`

#### Outputs

### Process: Load-bearing frame and masonry erection (`frame`)

#### Inputs

##### Product flows

###### Precast concrete structural column (`precast`)

Only for a precast frame: include actual embedded reinforcement/connection scope and delivered column mass; lifting, grouting and joints are site processes.

- Selected flow: Precast concrete structural column
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_frame; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`
- Sources: `jrc-levels-boq-2021`

###### Fabricated structural steel beam (`steel_beam`)

Only for steel frame members: record section, grade, coating/fire protection and supplier gate. Shop cutting/welding/coating is upstream unless actually performed on site.

- Selected flow: Fabricated structural steel beam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_frame; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`
- Sources: `bcsa-steel-buildings-2003`

###### Fabricated structural steel column (`steel_column`)

Only for actual steel columns; distinguish base plates, anchors and included coatings to avoid duplication; record alignment and connection inspection.

- Selected flow: Fabricated structural steel column
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_frame; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`
- Sources: `bcsa-steel-buildings-2003`

###### Kiln-dried sawn coniferous timber (`timber`)

Only for a timber building route using this state: record species, strength grading, moisture and treatment; laminated or treated members require separate identities.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_frame; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`
- Sources: `jrc-levels-boq-2021`

###### Fired brick (`brick`)

Only for actual sintered clay masonry: record unit type/voids and installation evidence; refractory and unsintered units do not match.

- Selected flow: Fired brick `aedc2027-2154-4b0e-95fd-9baeb46d4153`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_frame; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`
- Sources: `jrc-levels-boq-2021`

###### Cement-sand masonry mortar (`mortar`)

If supplied for masonry: retain real composition and water state; if mixed on site split constituent exchanges and mixing utilities, do not assume a sand fraction.

- Selected flow: Cement-sand masonry mortar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_frame; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`
- Sources: `jrc-levels-boq-2021`

###### Structural steel bolt (`steel_bolt`)

If installed: record grade, dimensions, coating and weighed quantity; nuts and washers not included by supplier must be separate atomic rows.

- Selected flow: Structural steel bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_frame; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`
- Sources: `bcsa-steel-buildings-2003`

###### Flux Cored Wire (`welding_wire`)

Only for actual site flux-cored arc welding: record wire designation, composition, consumed mass, remaining stock and welding procedure. Not a universal erection requirement.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_frame; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`
- Sources: `bcsa-steel-buildings-2003`

###### Argon welding shielding gas (`argon`)

Only if pure argon is actually supplied for the documented site weld; mixtures and CO2 shielding are separate flows. Measure cylinder net mass or supported state-specific conversion.

- Selected flow: Argon welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_frame; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame`
- Sources: `bcsa-steel-buildings-2003`

#### Outputs

### Process: Roof, wall enclosure and industrial openings (`envelope`)

#### Inputs

##### Product flows

###### galvanized corrugated iron (`sheet`)

Only for installed hot-dip galvanized corrugated sheet of the public thickness range 0.25–2.5 mm. Verify actual thickness/coating/grade and measured receipts; sandwich panels and silo-specific sheets are separate products.

- Selected flow: galvanized corrugated iron `b302e292-860a-430a-9dc0-b95e89d4a63e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_envelope; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope`
- Sources: `bcsa-steel-buildings-2003`

###### Rock Wool (`rock_wool`)

Only for separately supplied installed rock wool: measure actual density/thickness/facing and design specification. Do not also count insulation embedded in a purchased sandwich panel.

- Selected flow: Rock Wool `3a298360-f298-4a11-999e-11943f142cec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_envelope; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope`
- Sources: `jrc-levels-boq-2021`

###### Finished steel industrial roller door (`industrial_door`)

Only if this door is installed: record opening size, leaf/mechanism/frame and supplied accessories. Other door types require distinct rows.

- Selected flow: Finished steel industrial roller door
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable exchange total from cp_envelope; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_envelope`
- Sources: `bcsa-steel-buildings-2003`

#### Outputs

### Process: Agricultural storage-silo assembly (`silo`)

#### Inputs

##### Product flows

###### Galvanized steel grain-silo wall panel (`silo_wall`)

Only for assembled steel agricultural storage silos: record panel geometry, thickness, coating, included stiffeners, bolts, measured mass and supplier erection drawings. Not general industrial cladding.

- Selected flow: Galvanized steel grain-silo wall panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_silo; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_silo`
- Sources: `sukup-grain-bins-2026`

###### Galvanized steel grain-silo roof panel (`silo_roof`)

If installed: retain actual roof/rib assembly and aperture/seal scope; supporting members and access platform not included in supply are separate.

- Selected flow: Galvanized steel grain-silo roof panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_silo; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_silo`
- Sources: `sukup-grain-bins-2026`

###### Polyethylene grain-bin bolt sealing washer (`silo_washer`)

Only when this actual manufacturer-type sealing washer is used; weigh or use documented supplier part mass and installed count, not a generic polyethylene-resin input.

- Selected flow: Polyethylene grain-bin bolt sealing washer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_silo; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_silo`
- Sources: `sukup-grain-bins-2026`

###### Galvanized steel grain-silo wall stiffener (`silo_stiffener`)

Only separately supplied stiffeners on the actual silo design: record section, coating, installed mass and connection to foundation; do not repeat stiffeners embedded in panel supply.

- Selected flow: Galvanized steel grain-silo wall stiffener
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_silo; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_silo`
- Sources: `sukup-grain-bins-2026`

###### Steel grain-silo foundation anchor bolt (`silo_anchor`)

Only actual foundation anchoring: record bolt type, dimensions, coating, weighed quantity and inspected anchorage. No universal wind load or embedment is prescribed.

- Selected flow: Steel grain-silo foundation anchor bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_silo; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_silo`
- Sources: `sukup-grain-bins-2026`

#### Outputs

### Process: Industrial floor finishes and fixed building services (`services`)

#### Inputs

##### Product flows

###### Two-component epoxy industrial floor coating (`floor_epoxy`)

Only if installed: record actual formulated resin/hardener supply scope, coverage, mixed/unused mass and curing; do not infer VOC composition or emissions. If purchased separately list resin and hardener separately.

- Selected flow: Two-component epoxy industrial floor coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_services; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `jrc-levels-boq-2021`

###### Insulated copper low-voltage building cable (`cable`)

If part of fixed building services: collect conductor area, insulation, voltage, length and actual product mass; exclude process-machine wiring outside delivery.

- Selected flow: Insulated copper low-voltage building cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_services; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `jrc-levels-boq-2021`

###### Unplasticized polyvinyl chloride pipe (`drain_pipe`)

Only for installed unplasticized PVC pipe with documented CN production-origin supply compatible with the public at-plant identity: record dimensions, pipe mass and actual drainage/water role; fittings are separate when not included.

- Selected flow: UPVC tube `a343bef6-8d18-4594-b1aa-99bc47172684`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_services; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `jrc-levels-boq-2021`

###### Complete LED building luminaire (`led`)

If installed as fixed lighting: declare fixture, driver, mounting and actual tested configuration. A diode module or driver alone is not a complete luminaire.

- Selected flow: Complete LED building luminaire
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable exchange total from cp_services; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `jrc-levels-boq-2021`

###### Fire sprinkler head (`sprinkler`)

Only if delivered fire-protection design includes this head: record type/rating, installed count and test evidence; piping, pumps and test water are separate.

- Selected flow: Fire sprinkler head
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable exchange total from cp_services; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `jrc-levels-boq-2021`

#### Outputs

### Process: Site equipment operation and temporary facilities (`utilities`)

#### Inputs

##### Product flows

###### Electricity (`lv_electricity`)

Only for CN user-side supply below 1 kV matching the public identity. Attribute meters to excavation, pumping, lifting, welding, enclosure, site accommodation and commissioning; other geography/voltage needs another verified row.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange total from cp_utilities; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `rics-wlca-2024`

###### Electricity (`mv_electricity`)

Only for CN user-side 1–35 kV supply, with actual metering point/transformer losses and no overlap with low-voltage readings.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange total from cp_utilities; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `rics-wlca-2024`

###### Diesel (`diesel`)

For actual distillate diesel consumed in site excavators, compactors, cranes or generators: preserve net calorific value, collect fuel receipts/tank reconciliation and measured LHV with density if converting litres. Disclose fossil/bio share; site combustion is separate from refinery supply.

- Selected flow: Diesel `fbd79004-188c-47a4-900b-96005d994690`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange total from cp_utilities; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `rics-wlca-2024`

###### Treated mains water supplied to construction site (`mains_water`)

If purchased: meter actual curing, cleaning, dust suppression and system testing water; supply is a technosphere input, not direct natural-resource abstraction.

- Selected flow: Treated mains water supplied to construction site
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_utilities; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `rics-wlca-2024`

##### Elementary flows

###### Water, groundwater (`groundwater`)

Only for actual direct groundwater abstraction with source, date and volume; do not count purchased water or pumped excavation drainage as resource consumption without demonstrated routing.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_environment; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `rics-wlca-2024`

###### Water, river (`riverwater`)

Only for actual direct river intake with identified source; not lake water, wastewater or groundwater.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_environment; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `rics-wlca-2024`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only quantified immediate fossil CO2 emitted to unspecified air by documented site combustion. Retain fossil fraction and actual fuel carbon/oxidation basis; do not duplicate generator background combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_environment; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `rics-wlca-2024`

###### nitrogen monoxide (`nitric_oxide`)

Only if NO to unspecified air is separately measured or supported by equipment/fuel-specific evidence. Do not allocate total NOx expressed as NO2 mass to NO without justified speciation.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_environment; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `rics-wlca-2024`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only for separately established NO2 release to unspecified air; not N2O, nitrogen or nitrite, and not an assumed fraction of total NOx.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_environment; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `rics-wlca-2024`

###### particles (PM10) (`pm10`)

Only for quantified PM10 release to unspecified air from evidenced earthworks/material handling or combustion; retain particle-size definition and avoid overlapping PM fractions. No fixed dust factor from historical guidance is prescribed.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_environment; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_environment`
- Sources: `epa-construction-dust-2010`

### Process: Construction waste collection and export (`waste`)

#### Inputs

#### Outputs

##### Waste flows

###### Hardened concrete construction offcut (`concrete_waste`)

Only actual separated hardened concrete sent off site; fresh returned mix and mixed demolition rubble have different states and routes.

- Selected flow: Hardened concrete construction offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_waste; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Steel construction offcut sent for recycling (`steel_waste`)

Only separated steel offcuts from documented site cutting; track coating, contamination, destination and recovery. Reused whole members remain product transfers.

- Selected flow: Steel construction offcut sent for recycling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_waste; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Polyethylene packaging film waste (`film_waste`)

Only received packaging removed at site: measure actual polymer-specific quantity and disposal route; not virgin film provision.

- Selected flow: Polyethylene packaging film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_waste; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Contained concrete-chute washwater for off-site treatment (`washwater`)

If concrete equipment is washed: collect retained liquid volume, solids, chemistry and destination; list separated solids separately. Export is waste, not automatic emission to water.

- Selected flow: Contained concrete-chute washwater for off-site treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_waste; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

### Process: Deliveries and exported waste transport (`transport`)

#### Inputs

##### Product flows

###### Freight Truck (`road_freight`)

Only actual generic road freight compatible with this service identity: retain leg, load, mass, distance and empty-return allocation. Stage-tag delivered goods separately from exported waste; avoid transport embedded in supplier datasets.

- Selected flow: Freight Truck `d55f1329-cd61-44c0-8000-9367d38d5634`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Measured attributable exchange total from cp_transport; preserve the row unit and documented route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport`
- Sources: `rics-wlca-2024`

#### Outputs

### Process: Inspection, commissioning and accepted handover (`handover`)

#### Inputs

#### Outputs

##### Product flows

###### Completed industrial or agricultural building (`reference_building`)

1 item

- Selected flow: Completed industrial or agricultural building
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc-3-53121`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | all inventory rows | Separate directly attributable records by building, stage and contractor first. For genuinely shared site utilities use measured causal activity, time or another justified physical driver; retain denominator, covered projects and uncertainty. Economic allocation needs explicit review when no physical relation can be evidenced. | ghg-allocation-2011 |
| asset_conservation | utilities; concrete; frame | Equipment manufacture, scaffolds, bracing and reusable formwork are charged only by the justified share in cp_asset. Across all projects, periods and reuses cumulative manufacture-burden shares must not exceed one; retain residual and reconcile forecast service. Unknown lifetime/cumulative service requires review and disclosure; no full manufacture reset for each building. | rics-wlca-2024 |
| waste_no_credit | waste | Keep actual exported waste and treatment/recovery burdens distinct from the accepted building output. Do not credit future avoided steel/concrete production by default; reuse/recycling substitutions require separately evidenced routes and consistent boundary without duplicate credit. | rics-wlca-2024 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_ground | ground | Individual actual exchange or reference acceptance | foreground_records | Site id; excavation boundaries; geology/contamination; bank/loose volumes; grading; moisture; weighbridge tickets; reuse and export destinations ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Survey actual excavated geometry and weigh imports/exports; trace drainage separately and reconcile retained/reused fill  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_concrete | concrete | Individual actual exchange or reference acceptance | foreground_records | Mix/specification; batch/delivery tickets; actual placed volumes; reinforcement weights; pump power; curing water; formwork id and reuse ledger; returns/waste ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Reconcile actual deliveries, returns, installed geometry, reinforcement schedules and supplier quantities; meter placement/finishing/curing utilities. Site-batched materials collected separately  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_frame | frame | Individual actual exchange or reference acceptance | foreground_records | Member id; material/grade; fabrication and coating gate; component masses; bolts; weld wire/gas; lifting equipment hours; connection/alignment inspection; temporary supports ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Match as-built member list to delivery weighing and installed state; retain actual lift/assembly method, connection records and partition factory/site operations  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_envelope | envelope | Individual actual exchange or reference acceptance | foreground_records | Panel type/coating/thickness; measured roof/wall/opening geometry; delivered and installed masses; insulation density; drainage and doors; returns and waste ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Survey and reconcile actual assembly by product; separate embedded and separately supplied insulation, fixings, glazing and weather seals  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_silo | silo | Individual actual exchange or reference acceptance | foreground_records | Silo id; stored material; diameter/height; usable capacity definition and actual geometry; foundation interface; shell/roof/stiffeners/anchors; washers/seals; access; separate machinery ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Match actual manufacturer erection drawings and as-built survey to weighed supplied parts, shell/roof connections, anchoring and acceptance; no generic bulk density/capacity conversion  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_services | services | Individual actual exchange or reference acceptance | foreground_records | Fixed service component ids and supplied scope; cable/pipe lengths and real mass; floor coating formulation; test energy/water; commissioning records; excluded machinery list ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Trace every delivered fixed service to schedules, supplier tickets and commissioning; separate product identities and measured test consumption, identify all additional atomic flows  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_utilities | utilities | Individual actual exchange or reference acceptance | foreground_records | Date; stage/equipment; supply geography/voltage; meters; fuel tank receipts/returns; diesel density/LHV/fossil fraction; generator output and combustion scope | Use calibrated site and subcontractor meters; reconcile stock, hours and actual equipment logs. Convert measured fuel mass using actual LHV and liquids using actual density; preserve energy property | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_environment | utilities | Individual actual exchange or reference acceptance | foreground_records | Emission species/CAS; fossil or biogenic share; actual equipment fuel/load; measured concentration/flow/time or specific factor provenance; medium/submedium; abstraction/discharge route; PM cut | Quantify only evidenced releases/abstractions through calibrated measurements or explicit applicable factors and actual activity; retain speciation and uncertainty. Assess noise, vibration, land and drainage explicitly, never substitute unrelated flows | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_waste | waste | Individual actual exchange or reference acceptance | foreground_records | Material identity/state; weighed or metered amount; contamination; segregation; collection container; destination; treatment gate; liquid/solid separation; recovery | Reconcile waste transfer notes with actual site separation and receipts. Record concrete washwater as retained liquid plus separately identified solids; direct discharge requires constituent-specific measured rows | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_transport | transport | Individual actual exchange or reference acceptance | foreground_records | Consignment; supplier and recipient gates; actual load mass; each origin/destination and distance; mode; load factor; empty-return and shared-load allocation | Calculate actual leg-specific transport service from weighed cargo and documented route distance with explicit allocation; avoid transport already in product or treatment dataset | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_acceptance | handover | Individual actual exchange or reference acceptance | foreground_records | Entity/site id; industrial/agricultural function; actual area definition/geometry; usable height; structural design record; silo capacity and material definition where applicable; complete delivery schedule; inspections/acceptance signatures | Inspect one complete accepted entity against as-built drawings and signed handover. Verify actual dimensions and functional requirements, installed fixed systems and excluded process machinery. No default service life or product mass | item; m2; m3 | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |
| cp_asset | utilities | Individual actual exchange or reference acceptance | foreground_records | Shared asset/formwork id; manufacture boundary; current attributable activity; cumulative actual service or evidenced forecast; all projects/periods; assigned shares and residual balance | Meter operation separately. Charge manufacture only by an evidenced lifetime/cumulative activity denominator; maintain immutable cross-project/period allocation ledger and reconcile forecasts. Unknown denominator requires review; never reset full burden per project | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/work event and meter interval; each final handover | Full actual construction period with start/end dates and all unmetered intervals | Declared entity/site and all subcontracted attributable work | per declared reference flow | Original drawings/tickets; calibration; signed inspection; mass/volume reconciliation; uncertainty and provenance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_reconciliation | all inventory rows | Retain actual attributable totals in each row unit per declared reference flow. Reconcile receipts, returns, stock changes, installed quantities and exported waste by physical identity. Internal recirculation is not a new external input. No default recipe, loss factor, mass per building or service life.  Apply boundary_consumed_inputs to permanent/consumed supplied materials and assemblies, including pre-acceptance losses and replacements in each actual native unit; installed acceptance is not the consumption numerator. Keep reusable-asset manufacture under the separate cumulative-share ledger. | cp_ground; cp_concrete; cp_frame; cp_envelope; cp_silo; cp_services; cp_utilities; cp_waste; cp_acceptance | Actual exchange totals per declared reference flow | jrc-levels-boq-2021 |
| unit_preservation | diesel; lv_electricity; mv_electricity; road_freight | Apply energy_identity and transport_basis only to input numerator units while preserving the declared reference flow. Keep measured density/LHV and actual transport legs with the dataset; geometry is reported as configuration, not an unproved output conversion. | cp_utilities; cp_transport | MJ or t*km per declared reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_entity | dataset | Acceptance scope, function, actual geometry, structural system, industrial floor and fixed service schedule must agree; assess agricultural storage-specific shell/capacity requirements. All absent/missing work packages are explicit; example rows do not prove complete inventory. | cp_acceptance; cp_silo |
| measurement | all inventory rows | Original readings, tickets and subcontractor records cover the whole project and actual states. Report uncertainty and estimates separately; missing measurements never become zero. | all collection protocols |
| identity | all inventory rows | Verify public identity, main reference property, unit group, route, geography and official bilingual flow display; mass/volume/energy are distinct. Blank identities retain exact rows and block unsupported linkage. | supplier/state records; identity evidence |
| environment | utilities; waste | Document actual fossil/biogenic share, CAS, medium/submedium, immediate/long-term and particle fraction. Assess actual noise, land use, dewatering and washwater/discharge routes; disclose unmeasured coverage and add specific measured exchanges when required. | cp_environment; cp_waste |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset | Require a whole accepted industrial/agricultural building or silo within the official exclusions, actual site/function/geometry and delivery state. Reject substitution by a building service, material bundle or specialized excluded facility. | un-cpc-3-53121 |
| validate_basis | all inventory rows | Reference table, reference_building output and every row/protocol denominator must agree with one declared entity. Check physically compatible numerator property/unit and supported measured conversions; no false kg building mass or assumed capacity relation. |  |
| validate_complete | dataset | Check every actually occurring material, process, temporary work, utility, waste and release, including contractor work and commissioning. Missing identities, quantities or stages are declared gaps, not zero; no full cradle-to-gate/full-lifetime claim with missing upstream or later stages. | rics-wlca-2024 |
| validate_asset | utilities; concrete; frame | Reconcile shared-equipment/formwork manufacture shares across all projects and periods, cumulative total at most one; review unknown service denominator and ensure direct operation is not charged twice. | ghg-allocation-2011 |
| validate_environment | utilities; waste | Require quantified evidence and compatible CAS, source, medium and submedium; distinguish NO and NO2 and retain waste-vs-discharge routing. Never claim methodology or legal approval from a projection/check result. | epa-concrete-washout-2012; epa-construction-dust-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Construction-to-handover inventory of the declared complete industrial/agricultural building; compatible linked upstream scenarios; comparisons only with matched actual function, geometry, delivery scope and performance |
| excluded_use | Full lifetime, default annual industrial operation, process-plant equipment inventory, generic kg/m2 building conversion, default capacity/density/life or legal/scientific approval |
| required_metadata | All reference qualifiers, construction dates, actual route, work-package coverage, installed and excluded machinery scope, supplier/stage gates, measured geometry/capacity basis, allocations and property/unit evidence |
| required_quality_disclosure | Measurement/estimate uncertainty, site/time/technology representativeness, missing upstream/background links, identity gaps, unmetered stages, environmental coverage and later-stage exclusions |
| update_trigger | Changed function, structure, geometry, storage basis, fixed-services/delivery scope, site/supplier route, measured inventory or evidence/identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-53121 | official_guidance | UN Statistics Division, CPC Version 3.0, subclass 53121 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/53121 | Category inclusions/exclusions only; not a construction recipe. |
| bcsa-steel-buildings-2003 | handbook | BCSA, Steel Buildings, publication 35/03 (2003), chapter 3, printed pp.37–41 / PDF pp.49–53. https://www.steelconstruction.info/images/0/03/BCSA_35-03.pdf | Historical UK steel building anatomy, erection and dimensional interpretation only; no default rates, loads, dimensions or contemporary code conformity. Not universal across industrial buildings. |
| sukup-grain-bins-2026 | handbook | Sukup Manufacturing Co., Grain Bins, L1132-042026Su ©2026, PDF pp.3 and 9. https://www.sukup.com/assets/brochures/Grain-Bins.pdf | Manufacturer-specific steel agricultural silo connection/sealing and foundation interface; no universal capacities, grades or design loads. |
| jrc-levels-boq-2021 | official_guidance | European Commission JRC, Level(s) indicator 2.1 v1.1, January 2021, PDF/printed pp.16 and 23–24, Table 2. https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2021-01/UM3_Indicator_2.1_v1.1_34pp.pdf | Source framework covers office and residential buildings; adapt only its as-built quantity/reconciliation method, not category coverage or a material recipe, to actual industrial/agricultural work. Industrial special elements require project evidence; no claim of Level(s) conformity. |
| rics-wlca-2024 | standard | RICS, Whole life carbon assessment for the built environment, 2nd edition version 3 August 2024, section 5.1.4 printed pp.80–84 / PDF pp.88–92. https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | Construction-stage separation and project-specific evidence; no default factors or full WLCA compliance claim. |
| epa-construction-dust-2010 | official_guidance | US EPA AP-42 13.2.3 Heavy Construction Operations, January 1995 corrected February 2010, p.13.2.3-1. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Historical qualitative dust/operation/moisture relationship only; no generic emissions or fixed emission factor. |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice Concrete Washout, EPA-833-F-11-006 February 2012, PDF pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Separate captured washwater and solids from environmental release; no local legal approval or automatic discharge assumption. |
| ghg-allocation-2011 | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard 2011, chapter 9 printed p.63 / PDF p.65, Tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical allocation hierarchy only; actual causal drivers and complete shared-asset burden ledger required. |
