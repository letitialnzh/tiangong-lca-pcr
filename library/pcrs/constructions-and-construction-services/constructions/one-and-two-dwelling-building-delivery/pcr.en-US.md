---
pcr_id: pcr.constructions-and-construction-services.constructions.one-and-two-dwelling-building-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# One- and two-dwelling residential building delivery

## 1. Scope and Applicability

This PCR concerns the completed physical residential building containing one or two dwellings, at its actual site and declared handover condition. It covers detached, attached and duplex forms, including masonry, timber, reinforced-concrete, steel and mixed structural routes when actually used; no route is a mandatory recipe. The product is the delivered building rather than a construction service, design, monetary asset or bundle of materials. Every dataset must identify the entire building, its dwelling count, actual geometry and included fixed works. Shell-only delivery may be identified but cannot be described as a fully fitted habitable building.

Construction foreground begins with supplied construction products and the recorded initial site condition, and ends at signed physical acceptance after construction/testing. Upstream manufacture is linked separately using compatible product datasets; its coverage is disclosed. Maintenance, replacement, operation, final demolition and recovery are distinct later stages and excluded from this delivery dataset. No whole-life or complete cradle-to-gate claim follows from a site inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.one-and-two-dwelling-building-delivery |
| classification_refs | CPC 3.0 53111 |
| covered_products | Whole completed residential buildings with one or two dwellings; declared actual structural route and delivery fit-out |
| excluded_products | Buildings with three or more dwellings; non-residential buildings; mobile caravans; loose construction materials; architectural and construction services; renovations of an existing building sold as a separate service |
| representative_product | One as-built building containing one or two residential dwellings with surveyed floor area and site |
| production_route | Site verification, groundworks as required, foundation and structure, enclosure, declared fixed systems/fit-out, tests, acceptance; actual prefabrication remains explicit upstream or separately measured foreground |
| market_state | Immovable constructed asset at signed declared handover condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the physically delivered residential building for its specified dwelling use |
| How much | One complete building; declare one or two dwellings, surveyed gross internal floor area, usable dwelling area, footprint, storeys and dimensions |
| How well | As-built structure, envelope, installed systems, acceptance condition, required capacity and local use/performance specification; record checks rather than infer legal approval |
| How long or cycle | One construction-and-handover cycle; no default service life. Any later service-period comparison requires separately justified duration and use/maintenance scenarios |
| reference_flow_link | reference_building |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed one- or two-dwelling residential building |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site and project identity; dwelling count; surveyed area method and dimensions; structure and foundation; ground condition; materials/grades; delivery completeness; fixed services and commissioned capacities; external works boundary; construction dates; acceptance record; A1–A5 coverage; exclusions and later lifecycle stages |

The display unit item denotes the public Number of items unit Item(s); 1 item is one whole building, not one dwelling, one square metre or one tonne. The reference product UUID remains unresolved: the available named building identity uses Mass, with no verified building-specific mass-to-count relationship. Metadata must declare every required qualifier; missing information invalidates applicability. Actual areas are mandatory descriptors, not a universal equivalent housing function.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use cp_acceptance to identify one whole accepted building. Do not divide a two-dwelling building into two product items. All inventory amounts are per declared reference flow. |
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
| product_classification_scope | Constructed one- or two-dwelling residential building entity |
| recursive_input_rule | A reused same-category building or retained structure is an explicitly identified pre-existing input with declared burdens and condition, never silently expanded into a duplicate building output |
| upstream_dataset_requirement | Link each actual supplied atomic product to compatible manufacture data with geography, technology, units and included transport/waste gates; disclose every missing upstream dataset |
| disclosure | State actual site, delivery specification, A4/A5 process coverage, A1–A3 linkage, temporary facilities, outsourced works, exclusions and later-stage omissions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_delivery | all inventory rows | Include the actual foundation, structure, enclosure, specified fixed installations, construction/testing utilities and wastes up to acceptance. Process headings partition activities, not partial products. Enumerate each additional installed product and actually occurring exchange as its own row; listed route alternatives are not interchangeable placeholders. | jrc-levels-boq-2021; rics-wlca-2024 |
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

Only for kiln-dried coniferous sawn members, with measured moisture, species, grade and treatment. Engineered or treated products with different identity require separate rows.

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

Only for aluminium frames actually installed; disclose thermal break, finishing and dimensions. Photovoltaic frames are unsuitable.

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

###### Fired clay roofing tile (`roof_tile`)

Only for a clay-tiled roof; measure tile delivery, breakage and retained quantity. Other roof coverings need distinct rows.

- Selected flow: Fired clay roofing tile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_envelope, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_envelope`
- Sources: `jrc-levels-boq-2021`

###### Solid wood composite door (`door`)

Only if this door type is installed; record leaf/frame scope, size, finish and hardware. Separately record omitted hardware.

- Selected flow: Solid wood composite door `f804bebb-fce8-4cb3-ac6b-ea11459ce346`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
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

###### Ceramic toilet bowl (`toilet`)

Only where installed; state bowl-only scope and separately enumerate cistern, seat and connections.

- Selected flow: Ceramic toilet bowl
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_fitout, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### Residential air-source heat-pump unit (`heat_pump`)

Only if installed and commissioned; record model, capacity, refrigerant identity/charge and indoor/outdoor unit completeness. Do not use a non-household aggregate identity.

- Selected flow: Residential air-source heat-pump unit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_fitout, retaining the row unit and attributable project scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### LED luminaire (`led_fixture`)

Only for installed fixed luminaires; record rated power, model and driver scope.

- Selected flow: LED luminaire
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
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

Only for petroleum diesel actually burned by construction machinery. Use measured fuel and batch-specific net calorific value, retaining this public net-calorific property; engines/generators of other scope need separate identity.

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

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Elementary flows

No universal exchange is prescribed in this group; record any actual exchange separately.

#### Outputs

##### Product flows

No universal exchange is prescribed in this group; record any actual exchange separately.

##### Waste flows

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

###### Completed one- or two-dwelling residential building (`reference_building`)

One whole accepted building at the declared site, including its actual shell, delivered fixed systems and declared external works; two dwellings in one building remain one reference item.

- Selected flow: Completed one- or two-dwelling residential building
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc-3-53111`

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
| cp_site | site | row-specific actual exchange | foreground_records | Excavation volume, soil state, grading, site condition and imported fill weights | Survey before/after work and retain calibrated weighbridge/delivery records, contamination tests and destination tickets; record original and loose volumes separately | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_structure | structure | row-specific actual exchange | foreground_records | Each member/material identity, grade, geometry, moisture, deliveries, returns, installation and temporary-panel deployment | Reconcile as-built drawings and work-package issue/return sheets to supplier tickets; use actual ready-mix volume and measured reinforcement/timber mass; retain curing, pumping, lifting and temporary works records | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_envelope | envelope | row-specific actual exchange | foreground_records | Roof/wall build-up; each layer quantity and unit; glass area, frame mass, thickness, density, door count and wastage | Survey installed dimensions and reconcile measured receipts/returns with as-built schedules; do not infer insulation mass from an assumed density | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_fitout | fitout | row-specific actual exchange | foreground_records | Each fixed installation, product state, area/mass/count, model, capacity, refrigerant charge and commissioning record | Use measured issue/return quantities, installed schedules and commissioning evidence; separately enumerate fittings, adhesives, fixings, ductwork and electrical protection where actually used | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_utilities | site_utilities | row-specific actual exchange | foreground_records | Meter start/end, interval, unit, supplier geography/voltage, fuel receipts/remaining stock, fuel density, batch net calorific value, equipment duty | Use calibrated project submeters, fuel stock reconciliation and supplier/test calorific records; include temporary site accommodation, cranes, pumps, curing and tests; disclose offsite and hired-equipment inclusions | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_environment | site_utilities | row-specific actual exchange | foreground_records | Substance/CAS, fossil origin, medium/submedium, particle size, concentration, flow rate, measured duration, equipment condition, water source and location | Use site-specific monitoring or fully documented applicable engine/operation models with actual activity. Require substance-resolved results; NOx-as-NO2 is not speciated NO2. Record dust controls, weather and moisture; direct abstraction uses calibrated intake meters. Record land occupation, dewatering, noise and other actual releases in separate evidence and additional atomic rows where quantified; unsupported categories remain explicit gaps | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_waste | waste_management | row-specific actual exchange | foreground_records | Waste composition, segregation, wet/dry state, volume/mass, pH/solids for washout, destination, actual treatment and haulage | Use separate weighed transfer tickets and liquid tank/meter readings; verify receiver and treatment, distinguish internal recycled washwater, solid concrete, exported wastewater and any discharge constituents | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_transport | delivery | row-specific actual exchange | foreground_records | Consignment identity, actual mass, origin/destination, each route distance, truck/load type, empty returns and supplier gate | Calculate leg-specific tonne-kilometres from real waybills, weighed loads and recorded route distance; preserve cargo allocation and loading assumptions, avoid repeating transport already in product data | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_acceptance | handover | row-specific actual exchange | foreground_records | Building/project id; site; one or two dwellings; area definition/survey; actual geometry; installed scope; test and acceptance signatures | Inspect the completed whole building against as-built drawings, system commissioning and signed handover; confirm one delivered building and actual surveyed dwelling/gross areas. Collect testing water, energy, emissions and wastes under their respective site protocols | item; m2 | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |
| cp_joint | site_utilities | row-specific actual exchange | foreground_records | Asset id; manufacture boundary; full deployment history across projects/periods; evidenced lifetime service or justified forecast; current numerator; cumulative shares and remaining balance; sensitivity and later reconciliation | Subdivide and meter operation directly; maintain the full asset manufacturing-share ledger, verified denominator, period-assigned fraction and cumulative balance. Do not reset manufacture per period; unknown service denominator requires review. | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, work-package event and meter interval; each handover | Complete actual construction period through acceptance; retain start/end dates and unmetered intervals | Declared site and all subcontracted works attributed to this whole building | per declared reference flow | calibration, original tickets, drawings, signed inspections, uncertainty and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_reconciliation | all inventory rows | Retain directly attributable totals per declared reference flow in the row unit. Reconcile receipts, returns, remaining stock, installed amounts and exported wastes for each identified product; disclose internal recirculation and test consumption. No default yield, waste fraction or area-to-mass factor. | cp_site; cp_structure; cp_envelope; cp_fitout; cp_utilities; cp_waste; cp_acceptance | documented exchange total per declared reference flow | jrc-levels-boq-2021 |
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
| validate_scope | dataset | Reject dwelling count outside one or two, missing site/geometry/delivery condition, material-bundle substitution or construction-service reference. Require whole-building acceptance and every required qualifier. | un-cpc-3-53111 |
| validate_inventory | all inventory rows | Check one physical or chemical identity per exchange, row-specific unit, route applicability, project denominator, every linked protocol and bilateral consistency. Sum stage utilities/wastes to actual records; unresolved identities are gaps rather than permission to select a near name. |  |
| validate_stage_claim | dataset | Verify A1–A3 data links, A4 transport and A5 actual work before claiming their coverage. Omitted use, replacement, demolition and recovery forbid full-lifetime claims; later scenarios require new source-supported durations and routes. Do not imply scientific or regulatory approval from acceptance of a PCR projection. | rics-wlca-2024 |
| validate_environment | site_utilities | Require a documented direct-release basis and no overlap with combustion/waste-treatment background datasets. Check NO speciation, PM fractions, fossil carbon and water routing; unresolved required measurements prevent a complete dataset claim. | epa-construction-dust-2010; epa-concrete-washout-2012 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Construction-and-delivery inventory of the declared whole building; upstream linking only with verified compatible gates; comparison only under matching dwelling function, measured area, performance and boundary |
| excluded_use | Full-lifetime claim, default service-year performance, representative national material recipe, legal/occupancy approval, construction-service footprint, blanket kg or m2 conversion |
| required_metadata | All reference qualifiers; stage-coded site/contractor records; actual delivery scope; area method; supplier gates; allocation; declared count/property/unit references |
| required_quality_disclosure | Temporal/geographic/technology representativeness, missing upstream data, unresolved identities, measurements/estimates, unmetered periods, environmental gaps, later lifecycle exclusions and scientific-review state |
| update_trigger | Changes to dwelling count, structural system, site, actual size, delivered fit-out, supply chain, measured inventory or evidence/identity status |

## 11. Data Sources

| source_id | type | reference | PCR use and limitations |
| --- | --- | --- | --- |
| un-cpc-3-53111 | official_guidance | UN Statistics Division, CPC Version 3.0, subclass 53111 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/53111 | Classification only: buildings with one or two dwellings; no process recipe. |
| jrc-levels-boq-2021 | official_guidance | European Commission JRC, Level(s) indicator 2.1, publication v1.1, January 2021, printed/PDF pp.16 and 23–24, Table 2. https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2021-01/UM3_Indicator_2.1_v1.1_34pp.pdf | Building element coverage and as-built quantity evidence; no numerical material footprint or lifespan adopted. |
| rics-wlca-2024 | standard | RICS, Whole life carbon assessment for the built environment, 2nd edition, version 3 August 2024, sections 2.1, 4.5 and 5.1.4, printed pp.18–20,45–47,80–84. https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | Lifecycle stage separation and actual construction evidence; limited guidance use, no claim of full RICS WLCA compliance or use of its default rates. |
| epa-construction-dust-2010 | official_guidance | US EPA AP-42 section 13.2.3 Heavy Construction Operations, January 1995 corrected February 2010, printed p.13.2.3-1. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Historical qualitative relationship of operations, moisture and dust only; not a current generic emission factor. |
| epa-concrete-washout-2012 | official_guidance | US EPA Stormwater Best Management Practice Concrete Washout, EPA-833-F-11-006 February 2012, PDF pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Washout liquid/solids routing distinction; no local permit or assumed discharge. |
| ghg-allocation-2011 | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard 2011, chapter 9, printed p.63 / PDF p.65, Tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical allocation hierarchy; actual site causal relations still require evidence. |
