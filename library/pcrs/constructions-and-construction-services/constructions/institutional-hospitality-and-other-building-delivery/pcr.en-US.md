---
pcr_id: pcr.constructions-and-construction-services.constructions.institutional-hospitality-and-other-building-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Institutional, hospitality and other non-residential building delivery

## 1. Scope and Applicability

This PCR covers physically constructed, accepted non-residential buildings for public entertainment, accommodation and restaurants, education/libraries/archives/museums, healthcare including veterinary care, indoor sport/recreation, conventions, religious use, prisons, law courts/parliament, communications and residual non-residential farm uses, consistent with the occupancy boundary in un-cpc-3-53129. It covers the entire declared delivered entity rather than only one easier school or hospital route. Construction services, supplied material packages, commercial office/retail/warehouse/transport-terminal buildings, industrial factories, agricultural storage buildings/silos, residential/community residences, mines, power/chemical plants, other specialized industrial facilities and outdoor sport installations are excluded. Physical farm shelters other than industrial/storage facilities remain eligible according to documented predominant use. Mixed-use sites require a declared building and shared-system scope; a classification label alone proves no methodology applicability.

Actual designs may use reinforced/cast-in-place or precast concrete, steel, timber, masonry or combined construction. Each applies through evidenced project work packages. Fixed services and fit-out must reflect the real delivered function: e.g. air/pressure/cleanliness systems in healthcare, teaching/laboratory spaces, hotel sanitation, kitchen exhaust, auditorium acoustics and long-span indoor sport roofs, secure institutional installations or communications infrastructure when actually delivered. These are applicability prompts, not mandatory generic equipment recipes or design thresholds. Owner business equipment, movable furniture, medical machines, broadcast/IT equipment and later occupant fit-out are separately disclosed exclusions unless the declared entity includes them with distinct inventories.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.institutional-hospitality-and-other-building-delivery |
| classification_refs | CPC 3.0 53129 — Other non-residential buildings |
| covered_products | Complete accepted institutional, hospitality and residual non-residential building entities of the stated occupancy classes |
| excluded_products | Residential, industrial/storage, commercial-office/retail and specialized civil facilities; services and material kits; undeclared operating equipment |
| representative_product | One actual accepted building of a documented occupancy/configuration, not a hypothetical class-average building |
| production_route | Actual preparation, foundations/structure, envelope/fit-out, fixed services, testing and handover, with route-specific work packages |
| market_state | Installed at declared site and accepted in the declared complete handover condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver the declared structure, enclosure, fit-out and fixed systems for the documented non-residential function |
| How much | One complete accepted building; record measured gross/internal/useful floor areas with named measurement convention, levels, height, footprint and actual function-specific capacity with units |
| How well | Actual as-built configuration and project performance/acceptance records, including delivered fit-out and excluded equipment; no assumed load, compliance or approval |
| How long or cycle | One construction-to-handover event with actual dates; no operating duration or service-life default |
| reference_flow_link | reference_building |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed institutional, hospitality or other non-residential building |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site/country; building identifier; predominant use and mixed-use partitions; actual delivery dates/state; measured area definition and geometry; structural system; functional capacity and actual performance criteria; accepted shell/fit-out/fixed-service scope; excluded equipment; actual work packages; retained prior structures; upstream gates and missing links |

The unit item is the count abbreviation of public Item(s), not kg, m2 or m3. Areas and capacities characterize function/configuration; they do not silently rescale the reference entity. Shell-only or phased delivery must disclose its incompleteness and cannot be compared as a fully fitted delivered building.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_entity | reference_building | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One accepted building is 1 item; use cp_handover to bind the whole configuration and measured geometry. No invented building mass. |
| geometry_scope | glazing; roof_membrane | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Measure actual supplied surface; distinguish gross, net, overlaps and losses in cp_materials. Area numerators are exchanges per the same entity, not a new functional unit. |
| energy_basis | lv_electricity; mv_electricity; diesel | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain public energy property and group. Electricity conversion is 3.6 MJ/kWh; diesel conversion requires actual mass or volume, density and LHV evidence in cp_site, never a generic engine consumption rate. |
| volume_state | plywood; tap_water; groundwater; river_water; ready_mix | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use physical volume at documented state. If tickets are in mass, use measured/source-supported density for the same material/moisture/temperature and preserve raw values; no building-volume-to-count or standard-water-density default. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Recorded actual site before project works and construction products/components at expressly identified supply gates |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | Delivered non-residential entity of the inclusions/exclusions above; site services are not the product |
| recursive_input_rule | A retained/reused building or shell is taken once at its received state, with inherited burden and additional works disclosed; do not recursively rebuild an already supplied same-category entity |
| upstream_dataset_requirement | Link compatible material/component manufacture separately and actual transport from named origin/gate; check installed-component and upstream scope to avoid duplicates. Missing links prevent complete cradle-to-handover claims |
| disclosure | Actual preparation, construction, commissioning and waste routes; upstream links; pre-existing demolition; excluded later occupation, maintenance/replacement, final demolition/treatment and beyond-boundary benefits |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| construction_boundary | dataset | Collect actual site excavation/backfill, foundation work, erection, envelope/partitions/finishes, fixed-service installation, lifting, welding/bolting, curing, testing/retests and acceptance, plus temporary facilities and waste transfer. Off-site material/equipment manufacture is upstream, not automatically site foreground. This alone is neither complete cradle-to-gate nor whole-life LCA. | rics-wlca-2024 |
| actual_route | all inventory rows | Flow cards are atomic applicability seeds, not a fixed bill. Include every actual used component, coating, joint, chemical, fuel, packaging and waste in separate rows using the same reference, collection and evidence rules. Record route absences with evidence; unresolved identities must not exclude a real route or omit burdens. | jrc-levels-boq-2021; un-cpc-3-53129 |
| water_emissions | utilities; waste | Distinguish product supply, natural withdrawal, reuse loops, dewatering and contained treatment-bound liquids. Direct released constituents, air species and receiving compartments require actual evidence; noise/vibration and land effects must be assessed with activity, location and duration records, and unavailable exchange identities/characterization disclosed rather than invented universal emissions. | epa-concrete-washout-2012; epa-construction-dust-2010 |
| transport_split | dataset | Keep manufacture, actual inbound transport, site movement, waste export and treatment as identified modules; retain route distance, payload and empty trips from cp_transport. Add mode-specific atomic freight services using matched providers. Fuel embodied in a transport service must not be duplicated as site fuel; no default distance. | rics-wlca-2024 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| site | Site preparation and groundworks | required |  | foreground production | per declared reference flow |
| structure | Foundations and structural erection | required |  | foreground production | per declared reference flow |
| enclosure | Envelope, partitions and finishes | required |  | foreground production | per declared reference flow |
| services | Fixed building services and category-specific fit-out | required |  | installation | per declared reference flow |
| utilities | Site utilities and direct environmental exchanges | required |  | foreground construction | per declared reference flow |
| temporary | Temporary works and shared construction plant | conditional | Actual temporary works or shared plant are used / 实际使用临时工程或共用设备 | foreground support | per declared reference flow |
| waste | Construction waste separation and export | conditional | Actual waste or treatment-bound liquid crosses the boundary / 实际废物或送往处理的液体跨边界 | waste management | per declared reference flow |
| handover | Testing, commissioning and accepted delivery | required |  | acceptance | per declared reference flow |

### Process: Site preparation and groundworks (`site`)

#### Inputs

##### Product flows

###### Crushed stone for foundation subbase (`subbase`)

Only for actual crushed-stone subbase; retain grading, moisture and weighed delivered amount. Excavated soil reused on site is an internal transfer, not a purchased aggregate.

- Selected flow: Crushed stone for foundation subbase
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

#### Outputs

##### Product flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Waste flows

###### Non-contaminated excavated mineral soil sent for disposal (`soil_disposal`)

Only if actual excavated soil leaves as waste; retain bank/loose state, density evidence if mass tickets are converted, contamination test and destination.

- Selected flow: Non-contaminated excavated mineral soil sent for disposal
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable exchange using cp_waste; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

### Process: Foundations and structural erection (`structure`)

#### Inputs

##### Product flows

###### Ready-mixed concrete delivered before placing (`ready_mix`)

Conditional ready-mix route: actual grade, formulation, delivery volume, slump/state, pump/placing/compaction/curing records; water already in supplied concrete is included, not counted again. Site batching instead requires separate cement, each aggregate, additive and mixing-water rows from its real mix tickets.

- Selected flow: Ready-mixed concrete delivered before placing
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Hot rolled rebar steel (`rebar`)

Only actual supplied hot-rolled low-alloy rebar with C≤0.2% matching the public identity; record steel grade and delivery shape. Cutting, bending and fixing on site use separate measured activity; other compositions or already fabricated assemblies need another identity.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Fabricated structural steel beam (`steel_beam`)

Only where installed; measure fabricated beam including declared coatings and joints; erection, bolting and welding activity remain site foreground. Do not replace a fabricated beam with a rolled section or a welding service.

- Selected flow: Fabricated structural steel beam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Precast reinforced-concrete structural column (`precast_column`)

Only actual precast route; record column geometry, reinforcement/embedment content, received state and lift/joint/grout installation. Do not count factory reinforcement twice.

- Selected flow: Precast reinforced-concrete structural column
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Structural glued-laminated timber beam (`timber_beam`)

Only actual glulam structure; record species, moisture, lamination, treatment and geometric net volume; collect connector and erection activity separately.

- Selected flow: Structural glued-laminated timber beam
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Fired brick (`masonry_brick`)

Only fired/sintered brick matching the supplied product; preserve actual clay/mineral composition and dimensions. Non-fired blocks, refractory products and structural masonry alternatives require their own atomic rows.

- Selected flow: Fired brick `aedc2027-2154-4b0e-95fd-9baeb46d4153`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Cement-sand masonry mortar (`mortar`)

Only actual cement-sand mortar; collect supplied formulation or site cement/sand/water separately without duplicate burdens, wet state and real mortar mass. No default sand ratio.

- Selected flow: Cement-sand masonry mortar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Structural steel bolt (`steel_bolt`)

Only actual structural bolted joints; specify grade, dimensions, coating and whether nuts/washers are separately supplied.

- Selected flow: Structural steel bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

#### Outputs

##### Product flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

### Process: Envelope, partitions and finishes (`enclosure`)

#### Inputs

##### Product flows

###### Hollow Glass (`glazing`)

Only supplied insulating glazing units with measured glazing area, pane composition/thickness and cavity configuration. Public scope includes the internal spacer frame, desiccant and sealed assembly; never strip these out or count them again. External building window frame is distinct and separate only when not already included by the supplier.

- Selected flow: Hollow Glass `12053592-e6c4-4c56-ad15-a36a267c500a`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Finished aluminium building window frame (`window_frame`)

Only actual separately supplied external window frame, net of components already in glazing/window assemblies; retain alloy, finish and openings geometry.

- Selected flow: Finished aluminium building window frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Bituminous waterproofing membrane (`roof_membrane`)

Only actual bituminous roll membrane matching the public product scope; record formulation, backing, thickness, overlaps and received/installed area. Other waterproofing systems need separate identities.

- Selected flow: Bituminous waterproofing membrane `78f09f81-deb9-42dd-9418-7860faee0a2e`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Rock Wool (`rock_wool`)

Only actual rock-wool thermal/acoustic insulation; collect binder/facing scope and density/thickness from product records. Do not inherit public narrative recycled-content percentages or default heat-treatment energy.

- Selected flow: Rock Wool `3a298360-f298-4a11-999e-11943f142cec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Gypsum Board (`gypsum_board`)

Only actual gypsum-core faced board matching this product; measure board mass and installation scrap; acoustic/fire/wet-area performance remains project-specific.

- Selected flow: Gypsum Board `0cf61f85-2df7-4f65-be58-257d4252fb02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

#### Outputs

##### Product flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

### Process: Fixed building services and category-specific fit-out (`services`)

#### Inputs

##### Product flows

###### Low-voltage cable (`power_cable`)

This finished low-voltage cable identity is conditional on actual CN supply at the declared plant gate and matching GB/T12706.1-2020 product specification. Other source geography, voltage or specification requires a separately verified identity; the cited2020 specification is not a current universal approval. Document conductor, cross-section, cores, insulation and voltage. Preserve public Length and measured installed length; do not replace it with kg.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Fabricated galvanized-steel ventilation duct (`ventilation_duct`)

Only where fixed ventilation is delivered; identify steel/coating, duct geometry and fabrication gate. Fire dampers, insulation and fans not included in supplier scope require separate rows.

- Selected flow: Fabricated galvanized-steel ventilation duct
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Complete building air-handling unit (`air_handler`)

Only installed complete AHU; retain airflow, filters, heating/cooling components and control scope from actual schedule. Hospital filtration/pressure, school ventilation and hotel comfort requirements are actual project qualifiers, not universal defaults.

- Selected flow: Complete building air-handling unit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Complete passenger lift for building installation (`passenger_lift`)

Only if a passenger lift is delivered; record capacity, travel, landings and drive configuration. Assembly scope excludes separately counted shaft structure.

- Selected flow: Complete passenger lift for building installation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Complete LED building luminaire (`led_luminaire`)

Only actual complete fixed luminaire; record light output, driver and housing scope, emergency configuration and installed count; an LED module alone is not a luminaire.

- Selected flow: Complete LED building luminaire
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Automatic fire sprinkler head (`sprinkler_head`)

Only if installed in the accepted fire-protection design; collect rated type, activation specification and count. Pump, piping and valve components are separate when supplied; do not substitute fire extinguisher assemblies.

- Selected flow: Automatic fire sprinkler head
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Cleaned copper medical-gas distribution pipe (`medical_gas_pipe`)

Conditional healthcare installation only: actual cleaned medical-service copper pipe, outside diameter/wall, acceptance cleanliness and measured length. General copper tubing does not establish this cleaned state. Separate each actual test gas or purge gas and emission when used; no default oxygen or nitrogen demand.

- Selected flow: Cleaned copper medical-gas distribution pipe
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Stainless-steel commercial kitchen exhaust hood (`kitchen_hood`)

Only actual fixed kitchen hood delivered for restaurant, hotel or institutional kitchen; document steel grade, dimensions, grease-filtration/fan scope and installed state. Cooking equipment and food-service operation are outside the building delivery unless separately justified.

- Selected flow: Stainless-steel commercial kitchen exhaust hood
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

###### Fixed steel telecommunications distribution cabinet (`telecom_cabinet`)

Only actual fixed building distribution cabinet; document enclosure and included hardware. Broadcast transmitters, servers and business-use electronics are distinct operating equipment and not silently included.

- Selected flow: Fixed steel telecommunications distribution cabinet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_materials; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

#### Outputs

##### Product flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

### Process: Site utilities and direct environmental exchanges (`utilities`)

#### Inputs

##### Product flows

###### Alternating current (`lv_electricity`)

Only China customer-side grid-average supply below 1 kV, with actual site and voltage evidence. Meter construction, storage, lifting, installation and test loads; use 3.6 MJ per kWh. Other geography/supply voltage needs a matched row.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual attributable exchange using cp_site; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site`
- Sources: `rics-wlca-2024`

###### Alternating current (`mv_electricity`)

Only China customer-side grid-average 1–35 kV supply matching actual connection; distinguish from low-voltage meters without duplication of transformer/downstream energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual attributable exchange using cp_site; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site`
- Sources: `rics-wlca-2024`

###### Diesel (`diesel`)

Only actual distilled/refined diesel fuel matching this identity; preserve Net calorific value. Collect fuel mass or volume, measured density and supplier/test LHV for MJ conversion; record fossil/biogenic share. Site excavators, cranes, pumps and generators have logged operation; do not double count fuel combustion and a supplier electricity dataset including that combustion.

- Selected flow: Diesel `fbd79004-188c-47a4-900b-96005d994690`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual attributable exchange using cp_site; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site`
- Sources: `rics-wlca-2024`

###### Tap water (`tap_water`)

This Volume identity is conditional on actual Hong Kong treated-water production/supply matching its declared water-treatment-plant interface and supply boundary. Other supply geography/provider interfaces require separately verified atomic identities, not this regional proxy. Meter actual construction curing, washout, domestic facilities and commissioning separately; exclude water already contained in supplied products. Preserve Volume/m3 and do not adopt its secondary screening1000kg/m3 as a default mass conversion.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable exchange using cp_site; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site`
- Sources: `rics-wlca-2024`

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

###### ground water (`groundwater`)

Only actual direct freshwater groundwater abstraction crossing nature-to-site boundary; specify source well, location/country, time and meter. Purchased supply and dewatering sent away are separate; do not use this resource flow for wastewater.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable exchange using cp_site; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site`
- Sources: `rics-wlca-2024`

###### river water (`river_water`)

Only actual direct freshwater river abstraction; retain river and withdrawal location/country for water characterization. It is not unspecified freshwater, lake water or a discharge.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable exchange using cp_site; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site`
- Sources: `rics-wlca-2024`

#### Outputs

##### Product flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Conditional measured/modelled immediate fossil-carbon CO2 to outdoor air where finer air subcompartment is unresolved and disclosed. Calculate only from actual fuel fossil-carbon/oxidation evidence or a compatible engine factor; biomass CO2 and land-use CO2 are separate. No long-term or soil/water emission substituted.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_emissions; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `rics-wlca-2024`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only if separately evidenced as NO2 emitted immediately to outdoor unspecified air. NOx expressed as NO2 equivalent, NO, N2O or nitrite cannot be entered here without an evidenced species conversion; unresolved species remains a data gap.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_emissions; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `rics-wlca-2024`

###### particles (PM10) (`pm10`)

Only evidenced PM10 mass released immediately to outdoor air, with unresolved finer air compartment disclosed; partition dust/engine contributors and control effectiveness. TSP, PM2.5 or deposited soil are not PM10. EPA historic TSP factors are not adopted or converted to PM10 by assumption.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_emissions; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-construction-dust-2010`

### Process: Temporary works and shared construction plant (`temporary`)

#### Inputs

##### Product flows

###### Plywood (`plywood`)

Only actual veneer-glued/pressed plywood matching this supply state, measured net volume with thickness and geometry. Retain deployment and reuse ledger; repeated use is not repeated purchase and share of embodied burden must be supported.

- Selected flow: Plywood `8b239d58-5fc2-40a5-8003-33f4082bc995`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable exchange using cp_assets; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `rics-wlca-2024`

###### Hydraulic excavator (`excavator_share`)

Conditional owned/hired excavator used at the site; record exact machine configuration and attributable supported manufacturing share over its evidenced total activity. Fuel/operation is separate. Unknown lifetime/activity prevents a guessed manufacturing share.

- Selected flow: Hydraulic excavator
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual attributable exchange using cp_assets; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `rics-wlca-2024`

###### Tower crane (`crane_share`)

Only actual tower crane deployment; preserve asset id, configuration, lifts/hours and cumulative-share ledger across sites; no one full crane manufacturing burden reset per project.

- Selected flow: Tower crane
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual attributable exchange using cp_assets; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `rics-wlca-2024`

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

#### Outputs

##### Product flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

### Process: Construction waste separation and export (`waste`)

#### Inputs

##### Product flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

#### Outputs

##### Product flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Waste flows

###### Hardened concrete construction offcut sent for disposal (`concrete_scrap`)

Only actual concrete-only waste, separated from reinforcement and brick fractions; document composition, weigh ticket, disposal route and any recovered product separately. Mixed construction waste is not this identity.

- Selected flow: Hardened concrete construction offcut sent for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_waste; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Contained cementitious concrete-washout water (`washwater`)

Only actually collected washout liquid/slurry leaving for treatment; record solids content, pH, contained volume and destination. Recovered solids are separate if split; discharge constituents and receiving water must be individually evidenced, not modelled as universal water emissions.

- Selected flow: Contained cementitious concrete-washout water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable exchange using cp_waste; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

###### Excavation dewatering water sent for off-site treatment (`dewatering`)

Only actual dewatering liquid sent as waste for off-site treatment; retain origin, water quality, pumped volume and route. Clean water returned under a recorded discharge route is a separate elementary water/constituent exchange, not this disposal row.

- Selected flow: Excavation dewatering water sent for off-site treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect actual attributable exchange using cp_waste; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

###### Discarded polyethylene packaging film (`film_waste`)

Only actual polyethylene film leaving as waste; retain polymer purity/contamination and recycler/disposal receipt; traded secondary polymer product and PVC film are different flows.

- Selected flow: Discarded polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual attributable exchange using cp_waste; retain row unit and received/exported state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `rics-wlca-2024`

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

### Process: Testing, commissioning and accepted delivery (`handover`)

#### Inputs

##### Product flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

#### Outputs

##### Product flows

###### Completed institutional, hospitality or other non-residential building (`reference_building`)

One complete accepted site-specific building including its declared structural/enclosure/fixed-service configuration. The output is the physically delivered entity, not area service, an invoice or a construction contract.

- Selected flow: Completed institutional, hospitality or other non-residential building
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Sources: `un-cpc-3-53129`

##### Waste flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

##### Elementary flows

No universal exchange is prescribed here; add each actual applicable atomic exchange.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| shared_site | dataset | Subdivide work packages and directly meter/trace attributable material, energy and waste first. If unavoidable, document the physical causal driver for each shared activity (machine hours, supplied quantities or actual service demand). Area alone is not an automatic driver for unlike hospital, theatre or hotel systems. Unproven relationships stay under review; economic allocation needs justification and sensitivity. | ghg-allocation-2011 |
| asset_conservation | temporary | Keep an asset-specific cumulative ledger across projects, periods and reuse. Use project activity divided by an evidence-backed compatible total service/activity basis to allocate manufacturing burden; the cumulative attributed shares cannot exceed one. Retain unused share and supported lifetime/activity estimates; unknown total basis remains review. Do not copy RICS illustrative reuse counts/lifetimes or reset a full manufacturing burden at each site. | rics-wlca-2024 |
| waste_recovery | waste | A waste export is not a coproduct credit. Document separation, receiver, treatment and whether a traded recovered product actually exists. Keep recycling assumptions and beyond-boundary substitution separate; no automatic avoided-primary credit or double accounting of supplied recycled material. | ghg-allocation-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_handover | handover | reference entity | foreground_record | building id; occupancy; dated acceptance; configuration; actual geometry; area convention; capacity; performance evidence; exclusions | Survey as-built dimensions and reconcile signed acceptance, drawings, fixed-system schedules and fit-out scope; no compliance inferred from this PCR | item | each event/read and work-package closure | actual project start through accepted handover | declared building and attributable shared site | per declared reference flow | traceable primary records; calibrated measurements; reconciliation and uncertainty |
| cp_materials | structure; enclosure; services; site | atomic supplied/installed exchange | foreground_record | row id; delivery ticket; supplier gate; composition; quantity/unit; density; geometry; installed quantity; leftovers; returns; batch and uncertainty | Reconcile supplier weigh/volume/length/area records with measured as-built bill and stock movements by work package; document included assembly components and actual route | row unit | each event/read and work-package closure | actual project start through accepted handover | declared building and attributable shared site | per declared reference flow | traceable primary records; calibrated measurements; reconciliation and uncertainty |
| cp_site | utilities | site fuel/electricity/water | foreground_record | meter id; date readings; voltage/country; machine id/hours; fuel mass/volume/density/LHV/carbon source; water source/use; allocation driver | Calibrated meters, fuel tickets and machine/site logs including test/retest loads; reconcile shared supplies, own generation and grid bills; record source-supported conversions | MJ; m3 | each event/read and work-package closure | actual project start through accepted handover | declared building and attributable shared site | per declared reference flow | traceable primary records; calibrated measurements; reconciliation and uncertainty |
| cp_waste | site; waste | atomic waste export | foreground_record | row id; composition; contamination; actual mass/volume/state; solids/pH where applicable; container; date; receiver; treatment receipt | Separated weighed tickets or calibrated container/pump records, actual material tests and traceable receiving records; distinguish reuse, disposal and direct release | row unit | each event/read and work-package closure | actual project start through accepted handover | declared building and attributable shared site | per declared reference flow | traceable primary records; calibrated measurements; reconciliation and uncertainty |
| cp_emissions | utilities | individual direct elementary emission | foreground_record | substance/CAS; fossil/biogenic; measured emitted mass; device/load; factor source/version; controls; location; medium/submedium; time; uncertainty | Use measured releases or source-supported device/activity-specific factors with raw activity and species evidence; distinguish NO2 from NOx-equivalent, PM10 from TSP; assess noise/vibration/land separately | kg | each event/read and work-package closure | actual project start through accepted handover | declared building and attributable shared site | per declared reference flow | traceable primary records; calibrated measurements; reconciliation and uncertainty |
| cp_assets | temporary | temporary product/plant share | foreground_record | asset id; composition/configuration; net material volume; deployment; use/reuse; current activity; total supported activity; prior allocated shares; remaining share | Survey temporary material geometry and read machine/formwork ledgers; retain provider manufacturing scope and evidence-backed activity/life basis and reconcile across all projects | row unit | each event/read and work-package closure | actual project start through accepted handover | declared building and attributable shared site | per declared reference flow | traceable primary records; calibrated measurements; reconciliation and uncertainty |
| cp_transport | site; waste | mode-specific transport exchange | foreground_record | cargo identity; actual mass; origin/destination; actual route distance; mode/vehicle; payload; empty trip; provider scope | Read logistics/weigh records and actual route/mode logs; add atomic service identities and provider-unit conversion only with compatible evidence | provider unit | each event/read and work-package closure | actual project start through accepted handover | declared building and attributable shared site | per declared reference flow | traceable primary records; calibrated measurements; reconciliation and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| reference_aggregation | all inventory rows | Sum only attributable actual exchanges over the declared construction/acceptance event; retain each exchange numerator unit per declared reference flow. Reference output remains 1 item. Reconcile opening/closing stocks, returns, installed quantities and actual losses; internal stage transfers are not new external purchases. | cp_materials; cp_site; cp_waste; cp_handover | row quantity per declared reference flow | jrc-levels-boq-2021 |
| conversion_evidence | lv_electricity; mv_electricity; diesel; plywood; ready_mix | Convert electricity kWh to MJ by the exact 3.6 factor. Other volume/mass or fuel-energy conversions use the same-state measured/supplier-supported density and LHV, preserving raw units and uncertainty; no generic physical constants taken from unrelated identities. | cp_site; cp_materials; cp_assets | row-unit actual exchange per declared reference flow | rics-wlca-2024 |
| direct_release | fossil_co2; nitrogen_dioxide; pm10 | Retain measured release mass; if calculated, document actual matched activity times a separately evidenced substance/device/medium-specific factor and control basis. Leave missing species/factors inconclusive, not zero; no mandatory factor is prescribed by this PCR. | cp_emissions; cp_site | kg of actual substance per declared reference flow | epa-construction-dust-2010; rics-wlca-2024 |
| supported_asset_share | excavator_share; crane_share; plywood | Assign only a supported project share following asset_conservation; preserve numerator activity, compatible total basis and all previous shares. Unknown basis is a review gap and must remain disclosed. | cp_assets | attributed burden per declared reference flow | rics-wlca-2024 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_state | all inventory rows | Exact material/species, supply/waste state, assembly scope and real public property/unit; no forced identity by name | supplier and raw identity/measurement records |
| building_function | reference_building | Measured geometry, actual occupancy/capacity and performance/acceptance state; distinguish shell-only, specialized systems and operating equipment | cp_handover |
| coverage_complete | dataset | Reconcile all work packages, site utilities, fixed systems, packaging and waste; document absent/unmeasured exchanges, upstream links and missing transport/treatment | cp_materials; cp_site; cp_transport; cp_waste |
| temporal_location | dataset | Actual construction period and supply/site geography; log seasonal/weather-dependent work, emission conditions and uncertainty without invented defaults | cp_site; cp_emissions |
| commissioning_state | handover | Keep actual system schedules, test conditions, failures/retests and dated acceptance; GSA example does not establish local approval | cp_handover; gsa-commissioning-2020 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| entity_gate | reference_building | Reject missing entity configuration, measured geometry, named area convention, documented function/capacity, handover status/dates or scope exclusions; compare only equivalent delivered functions and stage scopes. | un-cpc-3-53129 |
| inventory_gate | all inventory rows | Check atomic identities, public Chinese names, direction/type, actual reference properties/units, route conditions and duplicate assembly components; unconfirmed UUID remains explicit, never implies absent burden. | jrc-levels-boq-2021 |
| records_gate | dataset | Every actual exchange needs traceable collection and same-reference aggregation, actual geometry/conversion evidence and stage completeness. Unknown emission speciation, asset allocation basis or upstream/treatment link remains inconclusive for affected claims; no assumed zero. | rics-wlca-2024; ghg-allocation-2011 |
| handover_gate | handover | Check actual commissioning/retest records against project requirements and delivered systems. Absence of a required installed system cannot be hidden by another occupancy route; construction-to-handover check does not validate future service life or operational performance. | gsa-commissioning-2020 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Construction-to-handover foreground dataset for one declared delivered building entity |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | A disclosed construction-stage component in an independently completed building model; function-equivalent, configuration/stage-matched comparisons with compatible upstream providers |
| excluded_use | Automatic complete cradle-to-gate/whole-life assessment, per-kg or per-area universal intensity, operational building service, material-manufacturing replacement, legal compliance or science approval |
| required_metadata | Identity/use/site; accepted configuration and dates; measured geometry/capacity with definitions; work-package/component scopes; fixed systems and exclusions; actual process/transport/waste routes; reference; upstream links; allocation and asset ledger |
| required_quality_disclosure | Raw record coverage, uncertainty, conversion basis, missing UUID/provider/quantity/species; excluded lifecycle stages, specialist systems or owner fit-out; evidence geographical/temporal limits |
| update_trigger | Changed occupancy, structural/fit-out/system scope, area definition/geometry, delivery event, supplier route, transport/waste treatment, allocation basis or new actual activity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-53129 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, pp. 277–278, 53121–53129. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Occupancy/entity boundary only; no construction recipe |
| jrc-levels-boq-2021 | official_guidance | JRC Level(s) indicator 2.1, version 1.1, January 2021, p. 24 Table 2. https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2021-01/UM3_Indicator_2.1_v1.1_34pp.pdf | Qualitative shell/core/services/external elements checklist; no default quantities or lifespans |
| rics-wlca-2024 | standard | RICS Whole life carbon assessment for the built environment, second edition, version 3 August 2024, §5.1.4 pp. 80, 82 (PDF pp. 88, 90). https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | Construction, temporary works and waste-stage distinctions; project-specific evidence; no reuse-count, lifespan, carbon-intensity or waste defaults |
| ghg-allocation-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9 p. 63, Tables 9.1–9.2 (PDF p. 65). https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Subdivision and justified allocation relationships; no numeric allocation shares |
| epa-construction-dust-2010 | official_guidance | US EPA AP-42 §13.2.3 Heavy Construction Operations, January 1995, corrected February 2010, p. 13.2.3-1. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Historical qualitative dust/activity/weather distinctions only; no TSP factor, PM10 conversion or current permit claim |
| epa-concrete-washout-2012 | official_guidance | US EPA EPA-833-F-11-006 Concrete Washout, February 2012, p. 1. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Historical concrete-washout operations and contained liquid versus release distinctions; no default concentration or current legal claim |
| gsa-commissioning-2020 | official_guidance | GSA Commissioning Guide, September 2020, p. 28, functional performance testing. Publisher-original copy hosted by WBDG: https://nibs-s3-wbdg3-production.s3.us-east-1.amazonaws.com/FFC/GSA/gsa_commissioning_guide_2020.pdf | US federal test-documentation example only; actual local acceptance requirements prevail; no universal code or approval |
