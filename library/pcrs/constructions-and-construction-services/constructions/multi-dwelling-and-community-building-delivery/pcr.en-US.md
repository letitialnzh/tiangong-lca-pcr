---
pcr_id: pcr.constructions-and-construction-services.constructions.multi-dwelling-and-community-building-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Multi-dwelling and community residential building delivery

## 1. Scope and Applicability

The product is the physical residential building delivered at its actual site: buildings with three or more dwellings, and residential buildings for communities such as elderly/student residences, workers’ hostels, orphanages and homeless shelters. Community residences are included by their residential function, not by inventing three self-contained dwellings. Hospitals, hotels, construction services and loose building components are outside this category; mixed uses require documented applicability and separately identified scope. No particular structure, height, lift, kitchen or care equipment is universally mandatory.

The foreground covers actual site preparation, foundation/structure, envelope, declared fixed installations and fit-out, site logistics, testing and acceptance. Complete, shell-and-core and other delivery states must be distinguished. Whole-building accounting includes common circulation, stairs, shared cores, actual central services and community spaces delivered in the contract. Upstream construction-product manufacture is separately linked; delivery transport and site construction remain distinguishable. Operational utilities, actual later maintenance/replacements, demolition and final waste destinations are excluded later stages, not a hidden assumed lifetime. A construction inventory alone is neither a complete cradle-to-gate nor a whole-life assessment.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.multi-dwelling-and-community-building-delivery |
| classification_refs | CPC 3.0 53112 |
| covered_products | Delivered multi-dwelling buildings and community residential buildings, with all declared private/common fixed works |
| excluded_products | One-/two-dwelling houses; non-residential institutions; hotels; mobile accommodation; construction/renovation services; loose materials and equipment |
| representative_product | One surveyed residential building with its actual dwelling/room/capacity schedule and common facilities |
| production_route | Actual masonry, concrete, steel, timber or mixed assembly; site and prefabrication gates explicitly recorded; no generic recipe |
| market_state | Immovable residential asset at signed physical delivery condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the delivered physical building for its documented residential/community use |
| How much | One whole building; actual dwelling/room count, resident capacity, gross internal floor area, private residential area, common circulation/facility area, footprint, storeys and dimensions |
| How well | As-built structural/envelope specification, private/common installations, accessibility/fire/service performance specified by the project and documented inspection; no inferred legal approval |
| How long or cycle | One construction-and-handover cycle; no default service life or dwelling-years. Later service comparisons require evidence-backed periods and scenarios |
| reference_flow_link | reference_building |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed multi-dwelling or community residential building |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | project/site; residential use; dwelling/room count and actual capacity; survey method and area breakdown; structure/foundation and ground conditions; height/storeys; as-built materials; private/common delivery completeness; central plant capacities and served zones; accessibility/fire acceptance records; shared basement/site attribution; dates; upstream and A4/A5 coverage; excluded later stages |

item denotes the public Item(s) unit: one building, not one apartment or resident. Required qualifiers must be present in the actual dataset. Building area is surveyed descriptive geometry, not an assumed conversion of housing function. The reference UUID is unresolved because the named public category uses Mass and no building-specific mass-to-count evidence is established. Do not rewrite that public property or invent a building mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use cp_handover for one actual accepted whole building. All exchanges use the same declared reference flow; apartment counts never multiply common structure burdens. |
| geometry | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Collect cp_geometry survey definitions and private/common/service area breakdown. Reconcile included floor plates without double-counting corridors; keep footprint, gross internal and usable areas distinct. Area reporting is supplementary and cannot imply equal dwelling function. |
| energy | lv_electricity; mv_electricity; site_diesel | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve actual Net calorific value property and reference energy unit. Metered electricity kWh is multiplied by 3.6 to MJ; fuel requires actual batch net calorific value and measured mass/density. No default fuel factor. |
| physical_quantities | all inventory rows | Actual row reference property | row unit | Retain each measured mass, area, volume, item or transport quantity in its real property. Conversions need material-specific measurements, thickness/density and physical-state evidence; volume of soil or washwater is not abstracted-resource water. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Recorded initial site and supplied product gates, including actual enabling works and retained structures |
| starting_condition_role | foreground_start |
| product_classification_scope | Multi-dwelling and community residential physical building entity |
| recursive_input_rule | A retained/reused same-category structure is a separately identified existing asset input with declared burdens and condition, not a second new whole-building output |
| upstream_dataset_requirement | Link every actual supplied atomic material/component to unit/state/gate-compatible manufacturing evidence; identify missing supplier/background coverage |
| disclosure | Separate upstream manufacture, inbound transport, site construction, initial demolition if any, waste routing and excluded use/maintenance/final demolition; declare common/site works attribution |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_delivery | all inventory rows | Account for the delivered whole entity and every actually occurring exchange in shell, core, private and communal works. These conditional rows are minimum inspection prompts, not a closed universal bill of materials. Add separate atomic rows for actual roof coverings, fittings, stairs, external works, heat/cooling plant, community kitchens, security/fire systems and their specific materials when present. No alternative is silently substituted or omitted. | jrc-levels-boq-2021; rics-wlca-2024 |
| boundary_stages | dataset | Manufacture of installed equipment/materials is upstream; fitting, lifting, site conditioning, pressure tests and commissioning are foreground. Operation, real future maintenance/renewal and final dismantling are separately scoped later stages. Initial site demolition and clearance are construction-enabling activities when actually undertaken, not future demolition. Disclose missing A1–A3/A4/A5 coverage. | rics-wlca-2024 |
| boundary_common | common_facilities | Include actual shared stairs, cores, plant rooms and residential-community facilities in the whole-building ledger, even if separately contracted. Identify central systems and served zones. For linked buildings with shared basements, establish a combined assessment ledger before attributing building shares; disclose the parent assessment and conservation. Do not hide all shared works outside private apartment area. | rics-wlca-2024 |
| boundary_releases | site_utilities | Record technical supplied water separately from natural resource intake; track dewatering returns by destination and chemistry. Washout liquid/solids are not freshwater. Inventory actual direct exhaust/dust/discharges only with release evidence; assess construction noise using actual equipment/receptor/time evidence and disclose characterization gaps without inventing a mass flow. | epa-concrete-washout-2012; epa-construction-dust-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| groundworks | Site preparation and groundworks | required | Inspect actual work-package completeness; each exchange is conditional on its real occurrence | foreground_production | per declared reference flow |
| structure | Foundation, loadbearing structure and circulation cores | required | Inspect actual work-package completeness; each exchange is conditional on its real occurrence | foreground_production | per declared reference flow |
| enclosure | Roof and envelope installation | required | Inspect actual work-package completeness; each exchange is conditional on its real occurrence | foreground_production | per declared reference flow |
| fitout | Dwelling and community interior fit-out | required | Inspect actual work-package completeness; each exchange is conditional on its real occurrence | foreground_production | per declared reference flow |
| fixed_systems | Fixed distribution systems | required | Inspect actual work-package completeness; each exchange is conditional on its real occurrence | foreground_production | per declared reference flow |
| common_facilities | Common and community facilities installation | conditional | When actual shared/community installations are in the delivery specification | foreground_production | per declared reference flow |
| site_utilities | Site plant, water and direct releases | required | Inspect actual work-package completeness; each exchange is conditional on its real occurrence | foreground_production | per declared reference flow |
| waste_transfer | Waste segregation and transfer | required | Inspect actual work-package completeness; each exchange is conditional on its real occurrence | foreground_production | per declared reference flow |
| inbound_delivery | Inbound delivery accounting | required | Inspect actual work-package completeness; each exchange is conditional on its real occurrence | foreground_production | per declared reference flow |
| handover | Inspection, commissioning and handover | required | Inspect actual work-package completeness; each exchange is conditional on its real occurrence | foreground_production | per declared reference flow |

### Process: Site preparation and groundworks (`groundworks`)

Reconcile this work package to drawings, issue/return records and subcontractor records; utilities shared across work packages are recorded once in site_utilities with attribution evidence. For absent activities record not-applicable evidence, not an invented quantity.

#### Inputs

##### Product flows

###### Crushed stone for foundation subbase (`granular_fill`)

Only where a crushed-stone subbase is installed; measure grading, compacted dimensions and delivered/returned mass. Do not substitute sand or excavated soil.

- Selected flow: Crushed stone for foundation subbase
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_groundworks, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_groundworks`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Non-contaminated excavated mineral soil for off-site disposal (`soil_export`)

Only when uncontaminated excavated mineral soil leaves as waste; survey bank and loose volumes, destination and contamination evidence. Reused on-site soil is an internal transfer.

- Selected flow: Non-contaminated excavated mineral soil for off-site disposal
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_groundworks, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_groundworks`
- Sources: `rics-wlca-2024`

##### Elementary flows

### Process: Foundation, loadbearing structure and circulation cores (`structure`)

Reconcile this work package to drawings, issue/return records and subcontractor records; utilities shared across work packages are recorded once in site_utilities with attribution evidence. For absent activities record not-applicable evidence, not an invented quantity.

#### Inputs

##### Product flows

###### Ready-mixed concrete delivered before placing (`ready_mix`)

For actually supplied fresh ready-mix only. Record strength/exposure designation, slump, batch, ticket volume, rejected returns, pumping, placing and curing. Site batching requires separate cement, aggregate, admixture and water rows with actual mix records.

- Selected flow: Ready-mixed concrete delivered before placing
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### steel rebar (`reinforcement`)

Only for actual non-alloy reinforcement supplied in irregularly wound coils, matching the public identity. Record grade, incoming coil form, diameter, actual straightening/bending/cutting, net delivered/returned mass and as-built private/common locations. Other alloy content, straight/cut-and-bent supply or prefabricated cages require separate verified identities; do not apply this coil identity to all reinforcement.

- Selected flow: steel rebar `4f1a1837-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Kiln-dried sawn coniferous timber, at mill (`timber_frame`)

Only kiln-dried coniferous sawn members consistent with the at-mill supply identity. Record species, grade, moisture and treatment; engineered timber and treated members need separate rows. Include actual transport after the mill gate.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Fabricated structural steel beam (`steel_member`)

Only fabricated structural steel beams actually installed; record steel grade, fabrication/coating state and member schedule; no replacement by reinforcing steel.

- Selected flow: Fabricated structural steel beam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Fired brick (`fired_brick`)

Only actual fired clay brick masonry; record void content, dimensions, mortar joints and installation location. This is not an adobe or concrete block identity.

- Selected flow: Fired brick `aedc2027-2154-4b0e-95fd-9baeb46d4153`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Cement-sand masonry mortar (`masonry_mortar`)

Only where cement-sand masonry mortar is consumed; retain actual wet/dry state, supplier or weighed batching recipe. A universal mortar recipe is forbidden.

- Selected flow: Cement-sand masonry mortar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

###### Plywood formwork panel (`plywood_formwork`)

For plywood panels actually deployed for formwork, record grade, thickness, panel identifier and deployment area; do not charge each reuse as new manufacture. Apply allocation_reuse using the asset register.

- Selected flow: Plywood formwork panel
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual exchange amount using cp_structure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structure`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Roof and envelope installation (`enclosure`)

Reconcile this work package to drawings, issue/return records and subcontractor records; utilities shared across work packages are recorded once in site_utilities with attribution evidence. For absent activities record not-applicable evidence, not an invented quantity.

#### Inputs

##### Product flows

###### Hollow Glass (`glazing`)

Only matching installed double-glazing configuration; record pane thicknesses, cavity, coatings and opening area. The supplied insulating-glazing unit includes its internal spacer and seals; separately record the outer window frame and site-applied seals/fixings only where outside that unit gate. Do not double-count those inside the unit or treat glazing area as whole façade.

- Selected flow: Hollow Glass `12053592-e6c4-4c56-ad15-a36a267c500a`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual exchange amount using cp_enclosure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_enclosure`
- Sources: `jrc-levels-boq-2021`

###### Rock Wool (`rock_wool`)

Only the verified rock-wool product in actual envelope assemblies, not glass or slag wool; record density, thickness, facing and fire/thermal specification. Different insulation chemistry requires its own exchange.

- Selected flow: Rock Wool `3a298360-f298-4a11-999e-11943f142cec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_enclosure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_enclosure`
- Sources: `jrc-levels-boq-2021`

###### Bituminous waterproofing membrane (`waterproofing`)

Only the matching bituminous membrane actually installed; record layers, thickness and overlaps. Adhesive or primer is a separate atomic input when used.

- Selected flow: Bituminous waterproofing membrane `78f09f81-deb9-42dd-9418-7860faee0a2e`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual exchange amount using cp_enclosure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_enclosure`
- Sources: `jrc-levels-boq-2021`

###### Finished aluminium window frame (`window_frame`)

Only finished aluminium window frames actually installed; retain finish, section, glazing separation and measured mass. Raw aluminium does not identify the finished frame.

- Selected flow: Finished aluminium window frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_enclosure, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_enclosure`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Dwelling and community interior fit-out (`fitout`)

Reconcile this work package to drawings, issue/return records and subcontractor records; utilities shared across work packages are recorded once in site_utilities with attribution evidence. For absent activities record not-applicable evidence, not an invented quantity.

#### Inputs

##### Product flows

###### Gypsum plasterboard (`plasterboard`)

Only the exact plasterboard identity installed in dwelling, dormitory or common partitions/ceilings; record thickness, facing and layout. Support studs and finishes are separate rows.

- Selected flow: Gypsum plasterboard `3c6973a0-916b-4a04-923f-de0356448088`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual exchange amount using cp_fitout, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### Ceramic Tile (`ceramic_floor`)

Only the verified single-fired polished ceramic floor tile installed indoors in actual private/common areas; collect dimensions, thickness, cut losses and installed area. Bedding mortar and grout are independent inputs.

- Selected flow: Ceramic Tile `38191c2b-88f9-4b8d-9a1a-6b7b0b506169`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual exchange amount using cp_fitout, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

###### Waterborne acrylic architectural paint (`acrylic_paint`)

Only actual waterborne acrylic architectural paint; record wet product mass and formulation/solids information. Solvent or pigment emissions require measured constituent-specific rows, never a generic VOC default.

- Selected flow: Waterborne acrylic architectural paint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_fitout, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Fixed distribution systems (`fixed_systems`)

Reconcile this work package to drawings, issue/return records and subcontractor records; utilities shared across work packages are recorded once in site_utilities with attribution evidence. For absent activities record not-applicable evidence, not an invented quantity.

#### Inputs

##### Product flows

###### Insulated copper low-voltage building cable (`copper_cable`)

Only the identified insulated copper low-voltage cable actually installed; record insulation chemistry, conductor section, length and weighed or supplier-certified mass. Preserve a compatible public reference property if one is later verified.

- Selected flow: Insulated copper low-voltage building cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_fixed_systems, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fixed_systems`
- Sources: `jrc-levels-boq-2021`

###### UPVC tube (`upvc_pipe`)

Only the verified unplasticized PVC pipe product supplied under the actual CN construction-material gate; collect diameter, wall thickness, pressure/drainage class, joints, installed length and actual mass. Water and drainage networks are separate service/location registers.

- Selected flow: UPVC tube `a343bef6-8d18-4594-b1aa-99bc47172684`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_fixed_systems, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fixed_systems`
- Sources: `jrc-levels-boq-2021`

###### Ceramic toilet bowl (`ceramic_toilet`)

Only when a ceramic toilet bowl is actually supplied in private/shared sanitary facilities. Record model, flushing interface, quantity and delivery completeness; cistern, seats and fittings outside its supply gate remain separate.

- Selected flow: Ceramic toilet bowl
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual installed assembly count and complete configuration using cp_fixed_systems; do not substitute mass for item count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fixed_systems`
- Sources: `jrc-levels-boq-2021`

###### LED luminaire assembly (`led_luminaire`)

Only complete installed LED luminaires included in delivery; record driver, housing, lamp inclusion and controls. Commissioning electricity is site_utilities, not lifetime lighting energy.

- Selected flow: LED luminaire assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual installed assembly count and complete configuration using cp_fixed_systems; do not substitute mass for item count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fixed_systems`
- Sources: `jrc-levels-boq-2021`

###### Air-source heat-pump unit (`heat_pump`)

Only an actual installed air-source unit within the delivery contract; retain type, heat/cooling capacity, included components, refrigerant type/charge and commissioning. Refrigerant supplied separately or actually released requires its own substance-specific row; no default leakage or operational life.

- Selected flow: Air-source heat-pump unit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect actual installed assembly count and complete configuration using cp_fixed_systems; do not substitute mass for item count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fixed_systems`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Common and community facilities installation (`common_facilities`)

Reconcile this work package to drawings, issue/return records and subcontractor records; utilities shared across work packages are recorded once in site_utilities with attribution evidence. For absent activities record not-applicable evidence, not an invented quantity.

#### Inputs

##### Product flows

###### Pump (`water_booster`)

Only an actual water-booster liquid pump compatible with this generic liquid-pump identity; record manufacturer, type, complete pump mass, motor inclusion, flow/head and served zones. Its manufacture is upstream; fitting and commissioning are foreground.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_common_facilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_common_facilities`
- Sources: `jrc-levels-boq-2021`

###### Complete passenger lift assembly (`passenger_lift`)

Only if installed and within the handover specification; identify car, drive, controller, rails, doors, served storeys, rated capacity and commissioning. Do not infer a lift is mandatory in every multi-dwelling building.

- Selected flow: Complete passenger lift assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_common_facilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_common_facilities`
- Sources: `jrc-levels-boq-2021`

###### Mechanical ventilation fan assembly (`ventilation_fan`)

Only actually installed fans; retain capacity, controls, served rooms and complete assembly configuration. Ducts, dampers and filters are separate products, not silently included in a bare fan.

- Selected flow: Mechanical ventilation fan assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_common_facilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_common_facilities`
- Sources: `jrc-levels-boq-2021`

###### Fire-rated steel doorset (`fire_door`)

Only actual common-circulation/fire-compartment doorsets delivered; record frame, leaf, hardware, dimensions and specified fire performance with test/acceptance evidence. Do not invent a regulatory rating.

- Selected flow: Fire-rated steel doorset
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual exchange amount using cp_common_facilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_common_facilities`
- Sources: `jrc-levels-boq-2021`

###### Stainless-steel potable-water storage tank (`water_tank`)

Only where this specific tank is installed; record alloy, usable capacity, actual empty mass, insulation and served zones. Do not use water mass as tank manufacture mass.

- Selected flow: Stainless-steel potable-water storage tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_common_facilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_common_facilities`
- Sources: `jrc-levels-boq-2021`

###### Galvanized steel ventilation duct (`steel_duct`)

Only installed galvanized ducts; retain sheet thickness, surface treatment, dimensions, joint schedule and actual mass. Cooking or clinical systems in community residences need their actual separate inventories.

- Selected flow: Galvanized steel ventilation duct
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_common_facilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_common_facilities`
- Sources: `jrc-levels-boq-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Site plant, water and direct releases (`site_utilities`)

Reconcile this work package to drawings, issue/return records and subcontractor records; utilities shared across work packages are recorded once in site_utilities with attribution evidence. For absent activities record not-applicable evidence, not an invented quantity.

#### Inputs

##### Product flows

###### Alternating current (`lv_electricity`)

Only CN user-end electricity below 1 kV at the actual Chinese site and matched supply voltage. Meter lifting, pumping, curing, tools, temporary accommodation and commissioning; otherwise select the real regional/voltage identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual exchange amount using cp_site_utilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `rics-wlca-2024`

###### Alternating current (`mv_electricity`)

Only CN user-end electricity at 1–35 kV when the actual site meter is at that voltage; keep transformer losses explicit. Do not duplicate the same electricity at both voltage tiers.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual exchange amount using cp_site_utilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `rics-wlca-2024`

###### Diesel (`site_diesel`)

Only matching actual diesel supplied for site engines/generators; retain batch fuel type, metered litres/mass, measured density if converting and actual net calorific value. Electricity generated internally is not a second purchased input.

- Selected flow: Diesel `fbd79004-188c-47a4-900b-96005d994690`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual exchange amount using cp_site_utilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `rics-wlca-2024`

###### Treated mains water supplied to site (`supplied_water`)

Only treated mains water crossing the technical system boundary; meter actual use for curing, cleaning, dust suppression and pressure tests. Recycled internal water is not a new input; do not replace this row with a natural resource flow.

- Selected flow: Treated mains water supplied to site
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_site_utilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `rics-wlca-2024`

##### Waste flows

##### Elementary flows

###### ground water (`groundwater`)

Only actual direct groundwater abstraction consumed as resource at the site, with aquifer/location evidence. Dewatering water transferred and returned is a separate routing account, not automatically consumed resource or wastewater.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_site_utilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `rics-wlca-2024`

###### river water (`riverwater`)

Only actual direct river-water resource intake, with source and abstraction measurements; not unspecified freshwater, lake water or wastewater. Record returns by actual receiving medium.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_site_utilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `rics-wlca-2024`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`diesel_co2`)

Conditional immediate fossil CO2 release to unspecified air from actual site diesel combustion. Collect actual fuel carbon and oxidation evidence or applicable measured exhaust data. Separate fossil/bio fractions and avoid overlap with combustion-inclusive background datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_site_utilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `rics-wlca-2024`

###### nitrogen monoxide (`diesel_no`)

Only supported speciated NO mass to immediate unspecified air for the actual engine, load and exhaust control. NOx reported as NO2-equivalent cannot be treated as NO mass.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_site_utilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `rics-wlca-2024`

###### nitrogen dioxide (`diesel_no2`)

Only separately supported NO2 mass to immediate unspecified air. Distinguish NO, nitrogen, N2O and NOx expressed as NO2-equivalent; no automatic default emission factor.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_site_utilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `rics-wlca-2024`

###### particles (PM10) (`construction_pm10`)

Only supported actual PM10 release to immediate unspecified air from site earthworks/handling/traffic or engines, with source-specific evidence and weather/control conditions. Avoid overlapping PM fractions; historical AP-42 supports qualitative occurrence, not a current universal factor.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_site_utilities, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `epa-construction-dust-2010`

### Process: Waste segregation and transfer (`waste_transfer`)

Reconcile this work package to drawings, issue/return records and subcontractor records; utilities shared across work packages are recorded once in site_utilities with attribution evidence. For absent activities record not-applicable evidence, not an invented quantity.

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Hardened concrete construction offcut (`concrete_waste`)

Only hardened concrete offcuts removed for treatment; distinguish wet concrete returns and washout liquid.

- Selected flow: Hardened concrete construction offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste_transfer, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_transfer`
- Sources: `rics-wlca-2024`

###### Untreated sawn timber offcut (`timber_waste`)

Only untreated sawn-wood offcuts; distinguish coated, glued or preservative-treated waste with separate rows.

- Selected flow: Untreated sawn timber offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste_transfer, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_transfer`
- Sources: `rics-wlca-2024`

###### Gypsum plasterboard offcut (`gypsum_waste`)

Only segregated plasterboard offcuts; retain facing, contamination and destination.

- Selected flow: Gypsum plasterboard offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste_transfer, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_transfer`
- Sources: `rics-wlca-2024`

###### Corrugated cardboard packaging waste (`carton_waste`)

Only discarded corrugated cardboard; reconcile supply packaging and actual transfer weights.

- Selected flow: Corrugated cardboard packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste_transfer, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_transfer`
- Sources: `rics-wlca-2024`

###### Polyethylene packaging film waste (`film_waste`)

Only identified polyethylene packaging film; other polymers require separate atomic rows.

- Selected flow: Polyethylene packaging film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual exchange amount using cp_waste_transfer, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_transfer`
- Sources: `rics-wlca-2024`

###### Contained concrete-chute washwater for off-site treatment (`concrete_washwater`)

Only collected chute/pump washwater exported for treatment. Record pH, suspended solids, volume and receiver. Offsite truck-drum washing belongs to its actual offsite process; actual discharges need separate measured constituents and receiving media.

- Selected flow: Contained concrete-chute washwater for off-site treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual exchange amount using cp_waste_transfer, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_transfer`
- Sources: `epa-concrete-washout-2012`

##### Elementary flows

### Process: Inbound delivery accounting (`inbound_delivery`)

Reconcile this work package to drawings, issue/return records and subcontractor records; utilities shared across work packages are recorded once in site_utilities with attribution evidence. For absent activities record not-applicable evidence, not an invented quantity.

#### Inputs

##### Product flows

###### Freight Truck (`road_freight`)

Only actual inbound road freight compatible with the verified truck identity and not included in the supplier gate. Record vehicle/load class, each consignment and actual route; waste hauling is separate.

- Selected flow: Freight Truck `d55f1329-cd61-44c0-8000-9367d38d5634`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Collect the actual exchange amount using cp_inbound_delivery, retaining the row unit, physical state and this building attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_inbound_delivery`
- Sources: `rics-wlca-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Inspection, commissioning and handover (`handover`)

Reconcile this work package to drawings, issue/return records and subcontractor records; utilities shared across work packages are recorded once in site_utilities with attribution evidence. For absent activities record not-applicable evidence, not an invented quantity.

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed multi-dwelling or community residential building (`reference_building`)

One whole building at the surveyed site and signed declared delivery configuration, including its attributed common structure/facilities. Rooms, dwellings and shared cores are not extra building outputs.

- Selected flow: Completed multi-dwelling or community residential building
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Sources: `un-cpc-3-53112`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_whole | dataset | The reference is one building. Private apartments/rooms, cores and common facilities are components, not co-products automatically requiring division by dwelling count. Keep the whole-building inventory. Supplementary dwelling/room reports must preserve the building total and identify common-space assignment. | rics-wlca-2024 |
| allocation_shared | all inventory rows | First subdivide meters, deliveries and work packages to avoid allocation. Where shared basements, utilities or central facilities serve multiple buildings/uses, record their complete common ledger once, then justify shares by actual physical service, measured GIA, occupancy/capacity or other evidenced use relationships. No universal equal-per-dwelling or area ratio is prescribed. Declare numerator/denominator and unmatched uses; all assigned and unassigned shares reconcile to one, with sensitivity if the relation is uncertain. | rics-wlca-2024; ghg-allocation-2011 |
| allocation_reuse | plywood_formwork; site_utilities | Keep asset identifiers for reused formwork, scaffolding and equipment. Manufacturing burdens use evidenced total lifetime activity/reuses and actual project deployment; transport, repairs, losses and end-of-life remain explicit. Cumulative manufacturing shares across projects, periods and reuse shall not exceed one; an observation period may allocate only its attributable manufacturing share. Unknown lifetime/total activity is a review gap, never a reset to full manufacture per project. | rics-wlca-2024; ghg-allocation-2011 |
| allocation_waste | waste_transfer | Record actual waste transfer, treatment coverage and recovered-product destination separately; do not treat construction scrap as an automatic avoided-production credit. Declare recycling allocation and supplier gate overlap consistently. | ghg-allocation-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_groundworks | groundworks | actual row exchange | foreground_records | Initial site, excavation bank/loose geometry, fill grade/weights, contamination, destinations | Survey and weighbridge records before/after work; retain ground investigations and disposal tickets | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/event and meter interval; each acceptance | Complete actual construction period through signed handover; disclose gaps | Declared whole building and attributable subcontracted/shared work | per declared reference flow | calibration, signed tickets, surveys, original tests, reconciliation and uncertainty |
| cp_structure | structure | actual row exchange | foreground_records | As-built member schedules, material states/grades, concrete tickets, reinforcement cutting, formwork asset deployments, curing/pumping/lifting | Reconcile as-built drawings, delivery/return tickets, measured quantities and temporary-work logs | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/event and meter interval; each acceptance | Complete actual construction period through signed handover; disclose gaps | Declared whole building and attributable subcontracted/shared work | per declared reference flow | calibration, signed tickets, surveys, original tests, reconciliation and uncertainty |
| cp_enclosure | enclosure | actual row exchange | foreground_records | Roof/façade layers, opening/assembly areas, thicknesses, grades, installed and discarded quantities | Survey actual assemblies and reconcile supplier specification and issue/return records | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/event and meter interval; each acceptance | Complete actual construction period through signed handover; disclose gaps | Declared whole building and attributable subcontracted/shared work | per declared reference flow | calibration, signed tickets, surveys, original tests, reconciliation and uncertainty |
| cp_fitout | fitout | actual row exchange | foreground_records | Private/common room register, installed partition/floor/finish state, quantities and completeness | Reconcile room-by-room fit-out schedule and delivery/measurement records, with actual withheld work | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/event and meter interval; each acceptance | Complete actual construction period through signed handover; disclose gaps | Declared whole building and attributable subcontracted/shared work | per declared reference flow | calibration, signed tickets, surveys, original tests, reconciliation and uncertainty |
| cp_fixed_systems | fixed_systems | actual row exchange | foreground_records | Circuit/pipe schedule, lengths, sections, material identity, equipment interfaces, installed assembly counts/configuration, refrigerant charge/actual losses and test records | Measure installed networks; reconcile supplier mass/length and pressure/electrical test reports | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/event and meter interval; each acceptance | Complete actual construction period through signed handover; disclose gaps | Declared whole building and attributable subcontracted/shared work | per declared reference flow | calibration, signed tickets, surveys, original tests, reconciliation and uncertainty |
| cp_common_facilities | common_facilities | actual row exchange | foreground_records | Asset/model, complete assembly mass/count, capacity, served zones, shared/private attribution, commissioning utilities | Read manufacturer/as-built schedules and signed commissioning records; weigh or use traceable product mass where kg is used | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/event and meter interval; each acceptance | Complete actual construction period through signed handover; disclose gaps | Declared whole building and attributable subcontracted/shared work | per declared reference flow | calibration, signed tickets, surveys, original tests, reconciliation and uncertainty |
| cp_site_utilities | site_utilities | actual row exchange | foreground_records | Meters, voltage/site, fuel batch/density/net calorific value/carbon, engine hours/duty, water source/returns, exhaust species and dust/control/weather | Read calibrated meters and fuel issue/return logs; use measured site-specific exhaust/resource data and documented applicable models where direct measurement is unavailable | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/event and meter interval; each acceptance | Complete actual construction period through signed handover; disclose gaps | Declared whole building and attributable subcontracted/shared work | per declared reference flow | calibration, signed tickets, surveys, original tests, reconciliation and uncertainty |
| cp_waste_transfer | waste_transfer | actual row exchange | foreground_records | Atomic waste identity, state, quantity, contamination, carrier and receiver/treatment; washwater pH and solids | Use segregated weighbridge/volume tickets and receiver receipts; track on-site reuse and offsite processing distinctly | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/event and meter interval; each acceptance | Complete actual construction period through signed handover; disclose gaps | Declared whole building and attributable subcontracted/shared work | per declared reference flow | calibration, signed tickets, surveys, original tests, reconciliation and uncertainty |
| cp_inbound_delivery | inbound_delivery | actual row exchange | foreground_records | Consignment mass, vehicle, actual route length, load, empty return and supplier included gates | Read actual transport logs and supplier boundary declarations; calculate each evidenced leg, no assumed distance | row-specific kg, m3, m2, MJ, item, t*km | Each delivery/event and meter interval; each acceptance | Complete actual construction period through signed handover; disclose gaps | Declared whole building and attributable subcontracted/shared work | per declared reference flow | calibration, signed tickets, surveys, original tests, reconciliation and uncertainty |
| cp_handover | handover | actual row exchange | foreground_records | Building/site identifier, residential/community use, dwelling/room count, capacity, delivered private/common configuration, acceptance and construction dates | Reconcile signed handover, as-built drawings, room/asset register and inspection records; do not infer occupancy approval | item | Each delivery/event and meter interval; each acceptance | Complete actual construction period through signed handover; disclose gaps | Declared whole building and attributable subcontracted/shared work | per declared reference flow | calibration, signed tickets, surveys, original tests, reconciliation and uncertainty |
| cp_geometry | handover | Building geometry and common-space identity | foreground_records | floor plates; dwelling/room areas; corridors/stairs/plant/amenities; footprint; storeys; actual resident capacity; measurement convention | Survey as-built plans/site and reconcile mutually exclusive area categories to the declared gross internal area. Document walls/voids/parking conventions and excluded spaces. | m2 | At as-built verification and handover | Actual delivered building state | All included storeys and shared areas attributed to this building | per declared reference flow | survey method, drawings, area schedule and signed acceptance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_ledger | all inventory rows | Reconcile actual deliveries, returns, work-package issues, waste transfers and meter records; attribute the documented quantity to this single reference building without dividing by a default dwelling count or area. Preserve internal transfers without double counting. | cp_groundworks; cp_structure; cp_enclosure; cp_fitout; cp_fixed_systems; cp_common_facilities; cp_site_utilities; cp_waste_transfer; cp_inbound_delivery; cp_handover | row amount per declared reference flow | rics-wlca-2024 |
| electricity_conversion | lv_electricity; mv_electricity | Multiply actual metered kWh by 3.6 to report MJ; retain the same delivered electricity and voltage gate; separately evidence any transformer losses. | cp_site_utilities | MJ per declared reference flow |  |
| fuel_conversion | site_diesel | Use measured fuel mass and batch net calorific value for MJ; litres require batch/site density at recorded conditions. Actual carbon/oxidation evidence determines the fossil CO2 component independently. | cp_site_utilities | fuel MJ per declared reference flow |  |
| freight_legs | road_freight | For each actual leg multiply documented payload tonnes by travelled km and sum attributable legs. Report allocation/empty returns and exclude legs already in supplier data. | cp_inbound_delivery | t*km per declared reference flow | rics-wlca-2024 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_completeness | dataset | Reconcile shell/core/external and every private/common work package to delivered scope. Add all actual materials/equipment, route-specific waste and releases absent from these rows. Absence needs documented not-applicable justification; uncollected required quantities are gaps, not zero. | jrc-levels-boq-2021; cp_handover |
| quality_shared | common_facilities | Retain whole-building and parent shared-facility ledgers, capacity/service evidence and area definitions. Do not equate dwelling count, beds, rooms and residents or silently exclude common areas. | rics-wlca-2024; cp_geometry; cp_common_facilities |
| quality_representativeness | all inventory rows | Report construction dates, site, supplier technology/region, measured vs modelled amounts, calibration, unmetered periods, uncertainty and upstream compatibility. Distinguish missing measurements/UUIDs from demonstrated absence. | cp_site_utilities; cp_handover |
| quality_environment | site_utilities; waste_transfer | Direct pollutant estimates require actual source chemistry, medium/submedium, immediate/long-term state and supported engine/soil/weather/treatment conditions. Report noise and water-routing data/characterization gaps; never treat an emission name as proof of occurrence. | epa-construction-dust-2010; epa-concrete-washout-2012 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_building | Verify the residential/community category and one real whole-building output, signed delivery state, actual count/capacity and all qualifiers. A room or construction service cannot use this reference identity. | un-cpc-3-53112 |
| validate_geometry_shared | dataset | Check measured private/common/service area categories and conventions against as-built plans; reconcile all assigned shared facility/basement burdens and total project quantities. Any supplementary occupant/dwelling attribution must preserve whole-building totals and disclose its actual basis. | rics-wlca-2024 |
| validate_atomic_units | all inventory rows | Check each single physical/chemical exchange, exact public reference property/unit group, conditional applicability, collection protocol and common denominator in both languages. Blank UUID identities remain registered gaps; a near label never authorizes substitution. |  |
| validate_stages | dataset | Verify manufacture linkage, transport and construction coverage separately; no full cradle-to-gate/full-life claim when stages or required quantities are missing. Acceptance evidence does not establish PCR scientific approval or local occupancy permission. | rics-wlca-2024 |
| validate_releases | site_utilities; waste_transfer | Check fossil/bio origin, NO vs NO2/N2O, nonoverlapping particulate fractions, natural intake vs technical water/wastewater and actual receiving medium. Prevent background combustion/treatment duplication and preserve unresolved required environmental data as incomplete coverage. | epa-concrete-washout-2012; epa-construction-dust-2010 |
| validate_asset_shares | plywood_formwork; site_utilities | Verify reused-asset identity, lifetime-activity evidence and cumulative manufacturing shares across projects/periods not exceeding one. Missing denominators require review rather than resetting asset manufacture. | rics-wlca-2024; ghg-allocation-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared whole residential/community building construction delivery, with explicit upstream linking and stage coverage; comparisons only with equivalent delivery scope, housing function, geometry and shared facility treatment |
| excluded_use | Full lifetime/service-year claim; universal kg/building or material recipe; legal approval; construction service; private-apartment-only footprint presented as whole building |
| required_metadata | All reference qualifiers; private/common and parent assessment registers; actual structure/route; acceptance scope; stage and upstream gates; actual data/calibration/allocation sources |
| required_quality_disclosure | Measured/modelled scope, missing upstream and quantities, unresolved identities, environmental/characterization gaps, representativeness, shared/reused asset allocation uncertainty and excluded later stages |
| update_trigger | Changes to use/capacity/dwelling configuration, site/geometry, common installations, delivery state, structural route, suppliers, measured records or evidence status |

## 11. Data Sources

| source_id | type | reference | PCR use and limitations |
| --- | --- | --- | --- |
| un-cpc-3-53112 | official_guidance | UN Statistics Division, CPC Version 3.0 subclass 53112 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/53112 | Category boundary: three or more dwellings and community residences. Classification establishes neither construction recipe nor legal permission. |
| jrc-levels-boq-2021 | official_guidance | European Commission JRC, Level(s) indicator 2.1 Bill of Quantities, publication v1.1 January 2021, PDF/printed pp.23–24, Table 2. https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2021-01/UM3_Indicator_2.1_v1.1_34pp.pdf | Element/installed-system coverage prompts only; no example quantities, default material intensity or lifespans adopted. Actual project records determine every quantity. |
| rics-wlca-2024 | standard | RICS Whole life carbon assessment for the built environment, second edition, version 3 August 2024; section 3.5–3.6 printed p.36/PDF p.44; section 5.1.4 printed pp.80–82/PDF pp.88–90. https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | Shared/community facilities, linked-building assessment, site activities and reusable temporary works; no default emission rates, service lives or blanket RICS whole-life compliance claim. |
| ghg-allocation-2011 | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard, 2011, chapter 9, Tables 9.1–9.2 printed p.63/PDF p.65. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Historical method hierarchy for subdivision and evidenced allocation; no default shares or new regulatory claim. |
| epa-construction-dust-2010 | official_guidance | US EPA AP-42 13.2.3 Heavy Construction Operations, January 1995 corrected February 2010, printed p.13.2.3-1/PDF p.1. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Historical qualitative dust/activity/weather relationship only; no universal current factor or automatic emission. |
| epa-concrete-washout-2012 | official_guidance | US EPA Concrete Washout, EPA-833-F-11-006 February 2012, PDF pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Historical washout state and routing distinctions; actual measured composition, destinations and local permits must be collected independently. |
