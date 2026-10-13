---
pcr_id: pcr.constructions-and-construction-services.constructions.commercial-building-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Commercial building delivery

## 1. Scope and Applicability

This PCR concerns a physical commercial building constructed and accepted at its actual site: wholesale/retail buildings (including shopping centres and indoor markets), warehouses, exhibition halls, offices and banks, air/rail/road terminal buildings, parking garages, and petrol/service-station buildings. Declare the entire delivered entity and included fixed/external works. The category is not limited to shop interiors or office fit-out. The structural route follows the actual design (reinforced concrete, steel, masonry, timber or mixed); no recipe or design load is prescribed. A station or terminal with several separately handed-over buildings requires an explicit entity register and shared-work attribution, not an arbitrary one-building label for the whole transport network.

The foreground starts at the recorded initial site and supplied-product gates and ends with physical handover, including actual groundworks, temporary works, structural erection, enclosure, delivered fixed systems, commissioning and construction wastes. Manufacturing of materials/equipment is upstream and must be linked separately. Inbound transport, site construction and downstream waste treatment remain distinguishable. Maintenance/updates, operating energy/water, sold fuel, merchandise/logistics activity, final demolition and recovery are outside this construction-and-delivery dataset. Their exclusion forbids full-life claims; a complete cradle-to-gate claim also requires demonstrated upstream coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.commercial-building-delivery |
| classification_refs | CPC 3.0 53122 |
| covered_products | Completed commercial building entities of all listed uses; actual delivered shell, core and attributable external works |
| excluded_products | Residential and industrial/agricultural buildings; hotels, restaurants, schools and other CPC 53129 uses; independent roads, tracks, runways, bridges and civil-engineering networks; loose materials; design/construction services; operation-only services |
| representative_product | One complete building at declared commercial function, surveyed geometry and signed delivery state; not an average national building |
| production_route | Actual site preparation, substructure, structural system, enclosure, fit-out/fixed systems, use-specific installations and tests; prefabricated components retain their supplier manufacturing gate |
| market_state | Immovable constructed asset at declared shell/core/fit-out handover condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a delivered commercial building for its identified trade, storage, office, exhibition, terminal, parking or station function |
| How much | One whole building; declare measured gross/internal/usable areas with method, footprint, storeys, height and actual geometry; function-specific installed capacities and tenant/parking/loading configurations |
| How well | Actual structure, enclosure, delivered systems, specified performance and commissioning/acceptance evidence; shell-only handover is not a fully fitted building; do not infer compliance approval |
| How long or cycle | One construction-and-acceptance cycle; no universal lifetime. Later use-period comparisons need independently supported duration, maintenance and operation scenarios |
| reference_flow_link | reference_building |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed commercial building |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site/project/entity id; commercial use and mixed-use share; measured area definitions and dimensions; structure/foundation and initial ground state; material grade/state; shell/core/tenant fit-out completeness; installed systems and commissioned capacities; external works and network separation; construction dates; signed acceptance; upstream/transport/site/waste gates; omissions and later lifecycle exclusions |

The display unit item means the public Item(s) count unit. One item is one building, not a tenancy, square metre, station throughput or money. Area is a required measured qualifier; comparisons require function and performance equivalence. The mass-based public commercial-building candidate cannot be bound to this count reference without traceable complete-building material quantities and a supported conversion. Leave the product UUID blank pending that evidence; do not rename its public Mass property. Every required qualifier must be declared in dataset metadata or equivalent physical-product records.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use cp_acceptance to identify one complete accepted building at its declared commercial use and delivery configuration. Tenancy subdivisions, floors and parking spaces are not additional building items. All inventory amounts are per declared reference flow. |
| area_identity | glazing; waterproofing; plasterboard; ceramic_floor; plywood_formwork | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Use actual documented area with thickness and assembly specification; do not rename public Area as Mass. Record building floor area with its survey definition separately. |
| energy_identity | lv_electricity; mv_electricity; site_diesel | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public property and energy unit group. Electricity MJ equals metered kWh multiplied by 3.6, as specified by the unit group. Fuel energy uses measured fuel quantity, actual density when needed and batch net calorific value; never prescribe a default fuel factor. |
| volume_state | ready_mix; supplied_water; groundwater; riverwater; soil_export; concrete_washwater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Collect volume at declared physical state; mass conversions require specific measured density and conditions. Soil bulking, water resource and wastewater are distinct. |
| transport_basis | road_freight | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | Use actual consignment tonnes and travelled kilometres for each leg. Empty returns and load allocation need explicit records; no assumed delivery distance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Recorded site at construction commencement and externally supplied product gates; include actual site clearance and temporary works where they occur |
| starting_condition_role | foreground_start |
| product_classification_scope | Delivered physical commercial building entity |
| recursive_input_rule | A reused same-category building or retained structure is an explicitly identified pre-existing input with declared burdens and condition, never silently expanded into a duplicate building output |
| upstream_dataset_requirement | Link each actual supplied atomic product to compatible manufacture data with geography, technology, units and included transport/waste gates; disclose every missing upstream dataset |
| disclosure | State actual site, delivery specification, A4/A5 process coverage, A1–A3 linkage, temporary facilities, outsourced works, exclusions and later-stage omissions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commercial_entity_boundary | dataset | Separate independent civil-engineering networks, runway/road works and multi-building shared works from the delivered building register. Include attributable forecourt/garage works, fixed fuel installations and loading interfaces when actually delivered; identify tenant-installed works after handover as excluded later fit-out. Shell-only state, mixed uses and existing retained elements must be explicit, not hidden as complete fitted commercial delivery. | un-cpc-3-53122; jrc-levels-boq-2021; epa-ust-installation |
| boundary_delivery | all inventory rows | Include the actual foundation, structure, enclosure, specified fixed installations, construction/testing utilities and wastes up to acceptance. Process headings partition activities, not partial products. Enumerate each additional installed product and actually occurring exchange as its own row; listed route alternatives are not interchangeable placeholders. | jrc-levels-boq-2021; rics-wlca-2024 |
| boundary_consumed_inputs | permanent/consumed supplied materials and assemblies; excludes reusable-asset manufacture | Local installed, delivered, commissioned or as-built wording specifies the intended route/configuration and acceptance evidence; it does not exclude attributable materials or assemblies consumed in attempted installation, damage, rejected-and-scrapped work or replacements before acceptance. In each native unit, consumed input = attributable gross receipts + opening stock - verified returns/transfers - closing usable stock. Retain actual supplied identity/configuration and assembly inclusions, with failed/replaced items traced to their own identity rather than the final replacement identity. Reconcile accepted installation and waste separately. Verified returns/usable surplus are excluded from consumption, but their attributable transport/handling/rework remains. This equation does not measure reusable equipment/formwork manufacture: retain section 7 conserved lifetime-use shares even when assets are returned/transferred/held in closing stock, and never charge the same asset as both full consumption and a use share. |  |
| boundary_stages | dataset | Keep material manufacture, inbound transport, site installation, maintenance/replacement, operation, final demolition and waste destinations separately identifiable. A4 and A5 foreground does not establish full A1–A5 or whole-life coverage. Actual initial demolition/clearance and its waste must be inventoried separately when present. | rics-wlca-2024 |
| boundary_double_count | site_utilities | Report purchased utility inputs and direct site emissions separately. Onsite diesel combustion is added only if the chosen background fuel dataset ends before combustion; no duplicated upstream emissions. Abstracted resources, dewatering transfers, returned water and exported liquid wastes have distinct routing. | rics-wlca-2024; epa-concrete-washout-2012 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| site | Site verification and groundworks | required | Always inspect activity coverage; each exchange is conditional on actual work and declared route | foreground_production | per declared reference flow |
| structure | Substructure and structural assembly | required | Always inspect activity coverage; each exchange is conditional on actual work and declared route | foreground_production | per declared reference flow |
| envelope | Roof and weather enclosure | required | Always inspect activity coverage; each exchange is conditional on actual work and declared route | foreground_production | per declared reference flow |
| fitout | Fixed systems and delivered fit-out | required | Always inspect activity coverage; each exchange is conditional on actual work and declared route | foreground_production | per declared reference flow |
| site_utilities | Site plant, utilities and direct emissions | required | Always inspect activity coverage; each exchange is conditional on actual work and declared route | foreground_production | per declared reference flow |
| waste_management | Construction waste segregation and transfer | required | Always inspect activity coverage; each exchange is conditional on actual work and declared route | foreground_production | per declared reference flow |
| delivery | Inbound transport accounting | required | Always inspect activity coverage; each exchange is conditional on actual work and declared route | foreground_production | per declared reference flow |
| special_installation | Use-specific installation and verification | conditional | Only for actual delivered loading, station or terminal equipment | foreground_production | per declared reference flow |
| handover | Testing and physical handover | required | Always inspect activity coverage; each exchange is conditional on actual work and declared route | foreground_production | per declared reference flow |

### Process: Site verification and groundworks (`site`)

Retain stage-coded site and supplier records. Absent route-specific exchanges require documented non-applicability; additional actual exchanges must be split into separate physical identities.

#### Inputs

##### Product flows

###### Crushed stone for foundation subbase (`granular_fill`)

Only if the as-built foundation uses this specific aggregate; record grading and source.

- Selected flow: Crushed stone for foundation subbase
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_site, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

#### Outputs

##### Product flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Waste flows

###### Non-contaminated excavated mineral soil for off-site disposal (`soil_export`)

Only if excavated soil leaves as waste; measure bank/loose volume and state explicitly. Separate contamination and reused fill.

- Selected flow: Non-contaminated excavated mineral soil for off-site disposal
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_site, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site`
- Sources: `rics-wlca-2024`

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

### Process: Substructure and structural assembly (`structure`)

Retain stage-coded site and supplier records. Absent route-specific exchanges require documented non-applicability; additional actual exchanges must be split into separate physical identities.

#### Inputs

##### Product flows

###### Ready-mixed concrete delivered before placing (`ready_mix`)

Only for supplied ready-mix; collect mix designation, strength/exposure class, delivery tickets, returns and pumping/placing records. Do not use a placed-concrete output identity as this input.

- Selected flow: Ready-mixed concrete delivered before placing
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Steel rebar (`reinforcement`)

This selected identity is conditional on actual non-alloy steel bars/rods supplied in irregularly wound coils, as stated by the public Chinese identity. Record grade, incoming coil form, actual straightening/bending, supplier and issued/installed/returned mass. Other alloy content or straight/cut-and-bent bar supply needs a separately verified atomic identity; do not force this coil identity onto every reinforcement route.

- Selected flow: steel rebar `4f1a1837-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Kiln-dried sawn coniferous timber (`timber_frame`)

Only for kiln-dried sawn coniferous timber at the mill gate, with measured moisture, species, grade and untreated state. Record downstream fabrication/treatment and inbound transport separately; engineered or impregnated products need other identities.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Fired brick (`fired_brick`)

Only for sintered clay masonry bricks; disclose unit specification, void fraction and supplier. Not refractory or unsintered blocks.

- Selected flow: Fired brick `aedc2027-2154-4b0e-95fd-9baeb46d4153`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Fabricated structural steel beam (`steel_member`)

Only if installed; include fabrication/coating state and grade. Steel beams do not substitute for rebar.

- Selected flow: Fabricated structural steel beam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Cement-sand masonry mortar (`masonry_mortar`)

Only if masonry mortar is supplied; record actual formulation and water state. If mixed on site, split cement, sand, water and each additive as individual inputs and avoid also counting purchased mortar.

- Selected flow: Cement-sand masonry mortar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Plywood formwork panel (`plywood_formwork`)

Only if plywood formwork is used. Record installed formwork area and actual reuse history; charge the documented share of panel provision, not a default reuse count.

- Selected flow: Plywood formwork panel
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

#### Outputs

##### Product flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

### Process: Roof and weather enclosure (`envelope`)

Retain stage-coded site and supplier records. Absent route-specific exchanges require documented non-applicability; additional actual exchanges must be split into separate physical identities.

#### Inputs

##### Product flows

###### Hot-dip galvanized corrugated steel sheet (`steel_cladding`)

Only if cold-rolled continuously hot-dip galvanized corrugated sheet, thickness 0.25–2.5 mm, is installed on the warehouse, garage or other building roof/wall. Record grade, coating mass, thickness and fasteners separately; this identity is not a sandwich panel.

- Selected flow: galvanized corrugated iron `b302e292-860a-430a-9dc0-b95e89d4a63e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_envelope; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_envelope`
- Sources: `jrc-levels-boq-2021`

###### Hollow Glass (`glazing`)

Only for the matched finished insulating-glass unit; state pane build-up, gas, coatings and thickness. The public unit includes its internal spacer/frame, desiccant and sealing assembly where supplied; preserve that assembly boundary and do not count its components again. External building window frames remain distinct and are counted separately only when not already included by the actual supplier inventory.

- Selected flow: Hollow Glass `12053592-e6c4-4c56-ad15-a36a267c500a`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual exchange amount using cp_envelope, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_envelope`
- Sources: `jrc-levels-boq-2021`

###### Finished aluminium window frame (`window_frame`)

Only for external aluminium building window frames actually installed and not included in supplied glazing/window assemblies; disclose thermal break, finishing and dimensions. Internal glazing spacers and photovoltaic frames are unsuitable.

- Selected flow: Finished aluminium window frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_envelope, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_envelope`
- Sources: `jrc-levels-boq-2021`

###### Rock Wool (`rock_wool`)

Only for rock-wool insulation in the installed assembly; record density, thickness, binder, facing and performance specification.

- Selected flow: Rock Wool `3a298360-f298-4a11-999e-11943f142cec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_envelope, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_envelope`
- Sources: `jrc-levels-boq-2021`

###### Bituminous waterproofing membrane (`waterproofing`)

Only if a bituminous membrane is installed; state binder origin, reinforcement, thickness and laying method. Do not assume a generic membrane has the same composition.

- Selected flow: Bituminous waterproofing membrane `78f09f81-deb9-42dd-9418-7860faee0a2e`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual exchange amount using cp_envelope, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_envelope`
- Sources: `jrc-levels-boq-2021`



##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

#### Outputs

##### Product flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

### Process: Fixed systems and delivered fit-out (`fitout`)

Retain stage-coded site and supplier records. Absent route-specific exchanges require documented non-applicability; additional actual exchanges must be split into separate physical identities.

#### Inputs

##### Product flows

###### Complete passenger lift installation (`passenger_lift`)

Only when delivered and commissioned; identify rated capacity, travel height, stops, drive, car, guide rails, controls and door scope. Installation utilities are separate. A broad lifts/escalators category does not establish this complete assembly.

- Selected flow: Complete passenger lift installation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_fitout; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### Commercial building air-handling unit (`air_handling`)

Only for an actual fixed air-handling unit; record design and commissioned air volume, filters, fan, coil, controls and casing scope. Chillers, ducts and terminal units are separate identities.

- Selected flow: Commercial building air-handling unit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_fitout; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### Galvanized steel ventilation duct (`steel_duct`)

Only if fitted; record section, thickness, zinc coating, insulation and fire-rating evidence. Separate insulation and dampers unless included in the precisely declared supplied assembly.

- Selected flow: Galvanized steel ventilation duct
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_fitout; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### Galvanized steel sprinkler pipe (`sprinkler_pipe`)

Only when this actual firefighting pipe is installed; record diameter, grade, jointing, pressure test and coating. Sprinkler heads, pumps and valves are separate. No universal fire-system design is imposed.

- Selected flow: Galvanized steel sprinkler pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_fitout; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### LED luminaire (`led_fixture`)

Only for delivered fixed luminaires; record model, power, driver and housing completeness. A module or driver alone is not a whole luminaire.

- Selected flow: LED luminaire
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_fitout; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### Gypsum plasterboard (`plasterboard`)

Only for installed plasterboard; record board thickness, facing, grade, area and cutting loss. Preserve its public area property.

- Selected flow: Gypsum plasterboard `3c6973a0-916b-4a04-923f-de0356448088`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual exchange amount using cp_fitout, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### Ceramic Tile (`ceramic_floor`)

This selected identity applies only to actual indoor ceramic floor tiles with the public single-firing/polished route and matching finish. Record thickness, firing/polishing route, grade and installation. Wall tiles, other finishes or outdoor applications require separately verified atomic identities rather than this proxy. Installation mortar/adhesive is separate.

- Selected flow: Ceramic Tile `38191c2b-88f9-4b8d-9a1a-6b7b0b506169`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual exchange amount using cp_fitout, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### Waterborne acrylic architectural paint (`acrylic_paint`)

Only for the specified installed coating; collect wet formulation, solids, coverage and actual application. Do not equate artist colours or UV coatings with this identity.

- Selected flow: Waterborne acrylic architectural paint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_fitout, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### Insulated copper low-voltage building cable (`copper_cable`)

Only for this cable in the as-built electrical installation; record conductor section, insulation and voltage. No calorific-value-to-mass substitution.

- Selected flow: Insulated copper low-voltage building cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_fitout, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### UPVC tube (`upvc_pipe`)

Only for installed unplasticised PVC pipe; disclose diameter, pressure/drainage service, fittings and potable-water suitability where relevant. Do not infer approval from UUID.

- Selected flow: UPVC tube `a343bef6-8d18-4594-b1aa-99bc47172684`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_fitout, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`




##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

#### Outputs

##### Product flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

### Process: Site plant, utilities and direct emissions (`site_utilities`)

Retain stage-coded site and supplier records. Absent route-specific exchanges require documented non-applicability; additional actual exchanges must be split into separate physical identities.

#### Inputs

##### Product flows

###### Alternating current (`lv_electricity`)

Only for customer-side grid electricity at a CN site supplied below 1 kV. Use actual meter readings and supplier mix; other geography or voltage needs a distinct verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual exchange amount using cp_utilities, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `rics-wlca-2024`

###### Alternating current (`mv_electricity`)

Only for separately metered CN customer supply at 1–35 kV; do not count transformer-side and low-voltage-side readings twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual exchange amount using cp_utilities, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `rics-wlca-2024`

###### Diesel (`site_diesel`)

Only for petroleum diesel actually burned by construction machinery. Use measured fuel and batch-specific net calorific value, retaining this public net-calorific property; other fuel scopes need separate identity. Record actual fossil fraction and sulphur; biomass blending requires a documented carbon-origin split, not fossil-only assignment.

- Selected flow: Diesel `fbd79004-188c-47a4-900b-96005d994690`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual exchange amount using cp_utilities, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `rics-wlca-2024`

###### Treated mains water supplied to site (`supplied_water`)

Only for purchased mains water used in construction, curing, dust control or tests. Record supply and meter; no upstream abstraction is added as a direct site extraction.

- Selected flow: Treated mains water supplied to site
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_utilities, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `rics-wlca-2024`

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

###### ground water (`groundwater`)

Only if directly abstracted groundwater crosses the environment boundary into site use. Record aquifer, location and extraction; dewatering transfer is separately assessed and not assumed consumptive use.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_environment, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `rics-wlca-2024`

###### river water (`riverwater`)

Only for direct river-water intake, with actual source and location; not lake water, groundwater or wastewater.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_environment, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `rics-wlca-2024`

#### Outputs

##### Product flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

###### carbon dioxide (fossil) (`diesel_co2`)

Only for documented fossil diesel combustion to air, unspecified subcompartment, immediate release; quantify from actual fuel carbon/oxidation or applicable measured emission data. Avoid double counting a combustion-inclusive background process.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_environment, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `rics-wlca-2024`

###### nitrogen monoxide (`diesel_no`)

Only where speciated NO mass to air is measured or supported by the actual engine duty and control system; total NOx is not assigned to NO.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_environment, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `rics-wlca-2024`

###### nitrogen dioxide (`diesel_no2`)

Only for separately supported NO2 mass, immediate air emission, unspecified subcompartment. NO, N2O and NOx reported as NO2-equivalent are not this exchange.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_environment, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `rics-wlca-2024`

###### particles (PM10) (`construction_pm10`)

Only for supported PM10 emitted to air, immediate unspecified subcompartment, from actual earthmoving/handling/traffic or machinery. Do not add overlapping particle fractions. Historical AP-42 establishes qualitative dust conditions only; no default factor adopted.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_environment, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`
- Sources: `epa-construction-dust-2010`

### Process: Construction waste segregation and transfer (`waste_management`)

Retain stage-coded site and supplier records. Absent route-specific exchanges require documented non-applicability; additional actual exchanges must be split into separate physical identities.

#### Inputs

##### Product flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Waste flows


##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

#### Outputs

##### Product flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Waste flows

###### Segregated reinforcing steel cutting scrap (`steel_scrap`)

Only if steel cutting scrap exits as waste; record alloy, weighed mass and receiver. Sold usable bars are product outputs, and mixed demolition debris is not this flow.

- Selected flow: Segregated reinforcing steel cutting scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

No universal exchange is prescribed in this group; record any actual exchange separately.

###### Hardened concrete construction offcut (`concrete_waste`)

Only when concrete scrap leaves for documented treatment; segregate from wet washout and soil.

- Selected flow: Hardened concrete construction offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Untreated sawn timber offcut (`timber_waste`)

Only for untreated sawn-wood waste; glued, painted or preservative-treated wood requires a different row and destination.

- Selected flow: Untreated sawn timber offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Gypsum plasterboard offcut (`gypsum_waste`)

Only for segregated plasterboard waste; identify facing and contamination and actual destination.

- Selected flow: Gypsum plasterboard offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Corrugated cardboard packaging waste (`carton_waste`)

Only where received and removed; reconcile packaging included in supplier datasets.

- Selected flow: Corrugated cardboard packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Polyethylene packaging film waste (`film_waste`)

Only for identified polyethylene film; other polymers and contaminated film require separate rows.

- Selected flow: Polyethylene packaging film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Contained concrete-chute washwater for off-site treatment (`concrete_washwater`)

Only if truck chute/pump washing occurs within the site boundary and liquid is exported for treatment. Collect pH, suspended solids and destination; recycled onsite liquid is internal. Direct discharge needs separate measured constituents and receiving medium.

- Selected flow: Contained concrete-chute washwater for off-site treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_waste, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

### Process: Inbound transport accounting (`delivery`)

Retain stage-coded site and supplier records. Absent route-specific exchanges require documented non-applicability; additional actual exchanges must be split into separate physical identities.

#### Inputs

##### Product flows

###### Freight Truck (`road_freight`)

Only for actual road freight to the site not included in supplier gate data; identify material, vehicle, route, load, trips and empty-return treatment. Off-site waste haulage is separate from inbound transport.

- Selected flow: Freight Truck `d55f1329-cd61-44c0-8000-9367d38d5634`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Collect the actual exchange amount using cp_transport, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `rics-wlca-2024`

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

#### Outputs

##### Product flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

### Process: Use-specific installation and verification (`special_installation`)

Conditional process: execute only actual delivered warehouse, terminal or station special installations. Record excavation/backfill under site, concrete under structure, electricity/water/tests under site_utilities and each installation separately; never invent a universal station/terminal recipe.

#### Inputs

##### Product flows

###### Hydraulic dock leveller (`dock_leveller`)

Only for an actually installed warehouse/terminal loading interface; record platform geometry, load specification and installed actuator/control scope. Handling vehicles in subsequent operations are excluded.

- Selected flow: Hydraulic dock leveller
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_special; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_special`
- Sources: `un-cpc-3-53122`

###### Double-wall steel underground fuel storage tank (`steel_fuel_tank`)

Only where this actual tank is part of station delivery; record material, capacity, walls, corrosion-protection scope, siting and inspection. Fibreglass tanks need a separate row, not this steel identity. Excavation, backfill and testing are included as actual construction activities.

- Selected flow: Double-wall steel underground fuel storage tank
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_special; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_special`
- Sources: `epa-ust-installation`

###### Double-wall polyethylene underground fuel pipe (`fuel_pipe`)

Only for this actual material and containment construction; record layers, length, bore, joints and installed leak-detection scope. Steel piping and other polymers require distinct rows. No fuel-service approval follows from material identity.

- Selected flow: Double-wall polyethylene underground fuel pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_special; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_special`
- Sources: `epa-ust-installation`

###### Complete motor-fuel dispenser (`fuel_dispenser`)

Only for installed station dispensing equipment; declare metering, pumps, hoses, electronics and under-dispenser containment scope and test records. Do not treat fuel sold after handover as construction input; test fuels/actual vapour releases need substance-specific additional rows.

- Selected flow: Complete motor-fuel dispenser
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_special; preserve this row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_special`
- Sources: `epa-ust-installation`

##### Waste flows

Record each actual waste individually under waste_management.

##### Elementary flows

No generic fuel-vapour or spill exchange is assumed; add actual identified constituents with receiving media and measurement evidence.

#### Outputs

##### Product flows

Installed assemblies are internal to the whole reference building; do not add them as duplicate final reference outputs.

##### Waste flows

Record actual segregated installation wastes under waste_management.

##### Elementary flows

Any measured test release must be substance-specific and recorded once under site_utilities.

### Process: Testing and physical handover (`handover`)

Retain stage-coded site and supplier records. Absent route-specific exchanges require documented non-applicability; additional actual exchanges must be split into separate physical identities.

#### Inputs

##### Product flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

#### Outputs

##### Product flows

###### Completed commercial building (`reference_building`)

One whole accepted commercial building at the declared site, including its actual shell, delivered fixed systems and declared external works; tenant units and floors remain parts of one building.

- Selected flow: Completed commercial building
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc-3-53122`

##### Waste flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| attribution | shared site activities | Use dedicated project metering and work-package subdivision first. If works serve multiple buildings, document measured machine time, material issue or another causal driver, the full receiving population and idle load under cp_joint. Area or price share is not a default physical relation. | ghg-allocation-2011 |
| actual_coproduct | exported useful outputs | Separate sold products, reused soil and wastes by actual status and destination. Avoid allocation by subdivision; remaining co-products require justified physical relations, or documented alternative allocation and sensitivity when physical relations cannot be established. No automatic avoided-material credit is assigned. | ghg-allocation-2011 |
| temporary_reuse | temporary works | Retain construction burdens and rejected/reworked materials for this accepted building. Record temporary-panel equipment sharing from actual deployment and reuse logs with future reuse uncertainty; do not invent lifetime or reuse count. Report waste treatment and recovery beyond this gate separately. | rics-wlca-2024 |
| `asset_share_conservation` | reusable formwork, components and equipment | Maintain one asset-level manufacturing-burden ledger across all projects and periods. A measured project use-time or deployment is only the numerator; the denominator must represent evidenced total lifetime service or a justified forecast with sensitivity and later reconciliation. Cumulative manufacturing shares across all projects and periods must not exceed one. An observation-period allocation may distribute only the manufacturing share already attributable to that period; never reintroduce the whole asset manufacture at each period. Unknown lifetime/service denominators remain unresolved review, not a default. Include asset manufacture when material; a hire invoice alone does not establish lifecycle coverage. | `ghg-allocation-2011`; `rics-wlca-2024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_site | site | row-specific actual exchange | foreground_records | Excavation volume, soil state, grading, site condition and imported fill weights ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Survey before/after work and retain calibrated weighbridge/delivery records, contamination tests and destination tickets; record original and loose volumes separately  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_structure | structure | row-specific actual exchange | foreground_records | Each member/material identity, grade, geometry, moisture, deliveries, returns, installation and temporary-panel deployment ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Reconcile as-built drawings and work-package issue/return sheets to supplier tickets; use actual ready-mix volume and measured reinforcement/timber mass; retain curing, pumping, lifting and temporary works records  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_envelope | envelope | row-specific actual exchange | foreground_records | Roof/wall build-up; each layer quantity and unit; glass area, frame mass, thickness, density, door count and wastage ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Survey installed dimensions and reconcile measured receipts/returns with as-built schedules; do not infer insulation mass from an assumed density  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_fitout | fitout | row-specific actual exchange | foreground_records | Each fixed installation, product state, area/mass/count, model, capacity, refrigerant charge and commissioning record ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Use measured issue/return quantities, installed schedules and commissioning evidence; separately enumerate fittings, adhesives, fixings, ductwork and electrical protection where actually used  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_utilities | site_utilities | row-specific actual exchange | foreground_records | Meter start/end, interval, unit, supplier geography/voltage, fuel receipts/remaining stock, fuel density, batch net calorific value, equipment duty | Use calibrated project submeters, fuel stock reconciliation and supplier/test calorific records; include temporary site accommodation, cranes, pumps, curing and tests; disclose offsite and hired-equipment inclusions | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_environment | site_utilities | row-specific actual exchange | foreground_records | Substance/CAS, fossil origin, medium/submedium, particle size, concentration, flow rate, measured duration, equipment condition, water source and location | Use site-specific monitoring or fully documented applicable engine/operation models with actual activity. Require substance-resolved results; NOx-as-NO2 is not speciated NO2. Record dust controls, weather and moisture; direct abstraction uses calibrated intake meters. Record land occupation, dewatering, noise and other actual releases in separate evidence and additional atomic rows where quantified; unsupported categories remain explicit gaps | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_waste | waste_management | row-specific actual exchange | foreground_records | Waste composition, segregation, wet/dry state, volume/mass, pH/solids for washout, destination, actual treatment and haulage | Use separate weighed transfer tickets and liquid tank/meter readings; verify receiver and treatment, distinguish internal recycled washwater, solid concrete, exported wastewater and any discharge constituents | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_transport | delivery | row-specific actual exchange | foreground_records | Consignment identity, actual mass, origin/destination, each route distance, truck/load type, empty returns and supplier gate | Calculate leg-specific tonne-kilometres from real waybills, weighed loads and recorded route distance; preserve cargo allocation and loading assumptions, avoid repeating transport already in product data | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_special | special_installation | use-specific installed atomic exchange | foreground_records | Equipment id, supplier gate, item count/mass, tank material/capacity, pipe composition/length, dock dimensions, containment, test activity/results, installation acceptance ; where supplied materials/assemblies occur: identity-specific gross receipts, opening/closing usable stock, verified returns/transfers, consumed damage/rejects/replacements and separate accepted installation | Inspect as-built schedules and supplier records; reconcile actual tank placement/backfill, pipe jointing, dispenser and containment installation to tests and signed handover. Preserve each component boundary and separately measured test energy/water/wastes; no generic design or local compliance certification inferred  For supplied material/assembly input quantities apply boundary_consumed_inputs, retaining failed/replacement consumption and separate acceptance/waste records; reusable-asset manufacture remains its separate conserved-share calculation. | row-specific item, kg, m3, MJ | Each installation and commissioning event | Full actual construction period to handover | Declared whole building and attributable external station/terminal works | per declared reference flow | Supplier specifications, test records, as-built inspection, measured uncertainty |
| cp_acceptance | handover | row-specific actual exchange | foreground_records | Building/project id; site; actual commercial use; tenant zones; surveyed gross/internal/usable areas and definition; storeys, height, footprint; structural/envelope scope; installed systems and commissioned capacity; test and handover signatures | Inspect the completed whole building against as-built drawings, system commissioning and signed handover; confirm one delivered building, actual commercial use and surveyed gross/internal/usable areas; confirm station tank capacity, terminal function, warehouse storage or garage parking configuration where relevant. Collect testing water, energy, emissions and wastes under their respective site protocols | item; m2 | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_joint | site_utilities | row-specific actual exchange | foreground_records | Asset id; manufacture boundary; full deployment history across projects/periods; evidenced lifetime service or justified forecast; current numerator; cumulative shares and remaining balance; sensitivity and later reconciliation | Subdivide and meter operation directly; maintain the full asset manufacturing-share ledger, verified denominator, period-assigned fraction and cumulative balance. Do not reset manufacture per period; unknown service denominator requires review. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_reconciliation | all inventory rows | Retain directly attributable totals per declared reference flow in the row unit. Reconcile receipts, returns, remaining stock, installed amounts and exported wastes for each identified product; disclose internal recirculation and test consumption. No default yield, waste fraction or area-to-mass factor.  Apply boundary_consumed_inputs to permanent/consumed supplied materials and assemblies, including pre-acceptance losses and replacements in each actual native unit; installed acceptance is not the consumption numerator. Keep reusable-asset manufacture under the separate cumulative-share ledger. | cp_site; cp_structure; cp_envelope; cp_fitout; cp_utilities; cp_waste; cp_special; cp_acceptance | documented exchange total per declared reference flow | jrc-levels-boq-2021 |
| unit_preservation | lv_electricity; mv_electricity; site_diesel; road_freight | Preserve reference quantity of one building; apply energy_identity and transport_basis to numerator units only. Keep raw values and conversion evidence with the dataset. Area per building may be reported as supplemental information, not silently substituted for this reference. | cp_utilities; cp_transport | MJ or t*km per declared reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| physical_completeness | dataset | Whole-building identity, actual area and delivery systems must agree with drawings and handover. Missing fixed services or external works must be named and their effect disclosed; representative route rows alone are insufficient. | cp_acceptance; jrc-levels-boq-2021 |
| measurement_quality | all inventory rows | Retain calibrated readings, traceable supply and waste records, uncertainty, date and exact gate. Estimates must identify method, applicability and sensitivity; missing or unmeasured is never numeric zero. | all collection protocols |
| environment_scope | site_utilities | Require CAS/chemical identity, fossil/biogenic origin, immediate/long-term and medium/submedium compatibility. Quantify only occurring emissions, review NO/NO2 separately, and disclose missing PM fractions, water discharge constituents, land and noise coverage. | cp_environment |
| source_compatibility | upstream links | Match technology, geography, actual product grade, moisture/state and unit. Preserve public UUID reference properties and underlying unit groups; unresolved exact identities remain blank until verified. | supplier records; identity and unit evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commercial_system_completeness | dataset | Reconcile supplied and installed work packages: warehouse fixed racks/loading, retail escalators and delivered shop fit-out, office services, terminal fixed passenger/baggage equipment, garage ventilation/drainage, and station tank/piping/detection/containment are included only as actually delivered. Add every actual chiller, fan, pump, valve, sprinkler head, distribution/security/communication unit, sanitary fitting, fixing, adhesive and protective layer as a separate product-specific atomic row only when separately procured or fabricated within the foreground boundary. For components already included in a complete supplied unit, such as an air-handling-unit fan or fuel-dispenser pump, verify specifications and supplier inventory coverage without a duplicate component exchange or upstream manufacturing burden. Retain actual installation activities and separately supplied replacements or additions. Missing actual systems prevents a completeness claim; operational vehicles, merchandise and sold fuel are excluded. | jrc-levels-boq-2021; un-cpc-3-53122; epa-ust-installation |
| validate_scope | dataset | Reject missing commercial use, site/geometry/delivery condition, inappropriate category, material-bundle substitution or construction-service reference. Require whole-building acceptance and every required qualifier. | un-cpc-3-53122 |
| validate_inventory | all inventory rows | Check one physical or chemical identity per exchange, row-specific unit, route applicability, project denominator, every linked protocol and bilateral consistency. Sum stage utilities/wastes to actual records; unresolved identities are gaps rather than permission to select a near name. |  |
| validate_stage_claim | dataset | Verify A1–A3 data links, A4 transport and A5 actual work before claiming their coverage. Omitted use, replacement, demolition and recovery forbid full-lifetime claims; later scenarios require new source-supported durations and routes. Do not imply scientific or regulatory approval from acceptance of a PCR projection. | rics-wlca-2024 |
| validate_environment | site_utilities | Require a documented direct-release basis and no overlap with combustion/waste-treatment background datasets. Check NO speciation, PM fractions, fossil carbon and water routing; unresolved required measurements prevent a complete dataset claim. | epa-construction-dust-2010; epa-concrete-washout-2012 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Construction-and-delivery inventory of the declared whole building; upstream linking only with verified compatible gates; comparison only under matching commercial function, measured geometry, delivery systems, performance and boundary |
| excluded_use | Full-lifetime claim, default service-year performance, representative national material recipe, legal/occupancy approval, construction-service footprint, blanket kg or m2 conversion |
| required_metadata | All reference qualifiers; stage-coded site/contractor records; actual delivery scope; area method; supplier gates; allocation; declared count/property/unit references |
| required_quality_disclosure | Temporal/geographic/technology representativeness, missing upstream data, unresolved identities, measurements/estimates, unmetered periods, environmental gaps, later lifecycle exclusions and scientific-review state |
| update_trigger | Changes to commercial use, tenant configuration, structural system, site, actual size, delivered fit-out, supply chain, measured inventory or evidence/identity status |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-53122 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed p.278, subclass 53122; adjacent 53121 p.277 and 53129/532 p.278. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full commercial building classification and distinction from residential/industrial, other non-residential and civil-engineering products; no construction recipe. |
| jrc-levels-boq-2021 | official_guidance | European Commission JRC, Level(s) indicator 2.1, publication v1.1, January 2021, printed/PDF pp.16 and 23–24, Table 2. https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2021-01/UM3_Indicator_2.1_v1.1_34pp.pdf | Building element coverage and as-built quantity evidence; no numerical material footprint or lifespan adopted. |
| rics-wlca-2024 | standard | RICS, Whole life carbon assessment for the built environment, 2nd edition, version 3 August 2024, sections 2.1, 4.5 and 5.1.4, printed pp.18–20,45–47,80–84. https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | Lifecycle stage separation and actual construction evidence; limited guidance use, no claim of full RICS WLCA compliance or use of its default rates. |
| epa-construction-dust-2010 | official_guidance | US EPA AP-42 section 13.2.3 Heavy Construction Operations, January 1995 corrected February 2010, printed p.13.2.3-1. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Historical qualitative relationship of operations, moisture and dust only; not a current generic emission factor. |
| epa-concrete-washout-2012 | official_guidance | US EPA Stormwater Best Management Practice Concrete Washout, EPA-833-F-11-006 February 2012, PDF pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Washout liquid/solids routing distinction; no local permit or assumed discharge. |
| ghg-allocation-2011 | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard 2011, chapter 9, printed p.63 / PDF p.65, Tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical allocation hierarchy; actual site causal relations still require evidence. |
| epa-ust-installation | official_guidance | US EPA, Resources for UST Owners and Operators, Tank and Piping Installation section. https://www.epa.gov/ust/resources-ust-owners-and-operators | Qualitative installation activities: excavation, siting, assembly, backfill, grading, tank/piping/dispenser containment and installation verification. US jurisdiction conditions are not imposed as universal design or local legal approval; actual manufacturer and site instructions govern. |
