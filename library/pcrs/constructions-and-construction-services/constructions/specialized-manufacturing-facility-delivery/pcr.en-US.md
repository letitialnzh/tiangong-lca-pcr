---
pcr_id: pcr.constructions-and-construction-services.constructions.specialized-manufacturing-facility-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Specialized manufacturing facility delivery

## 1. Scope and Applicability

This PCR covers the delivered physical specialized manufacturing facility: chemical/compound/pharmaceutical facilities, blast furnaces, coke ovens, iron foundries and other specialized manufacturing facilities not elsewhere classified. Each concrete record declares its actual manufacturing function, site, configuration and accepted installed systems. The distinct methodology need is the specialist construction/installation and acceptance interface absent from ordinary industrial-building or factory-gate equipment methodology. `un-cpc-manufacturing-2025` defines classification context, not a reason alone to create identity.

Exclude ordinary industrial buildings (53121), mining constructions (53261), generating plants (53262), independent sewage/water-treatment plants (53253), waste incineration and nuclear-material processing facilities (53290), construction services and operating manufactured-product outputs. Ancillary environmental equipment belongs only to the explicitly declared manufacturing entity and its functional scope. Base foreground covers actual construction to the recorded acceptance endpoint; supplier manufacture, operating production, later maintenance/relining and demolition remain separate. No default life, per-facility mass or complete upstream/full-life coverage is asserted.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.specialized-manufacturing-facility-delivery |
| classification_refs | CPC 3.0 53269 |
| covered_products | Accepted specialized chemical/pharmaceutical, blast-furnace, coke-oven, iron-foundry and other applicable manufacturing facilities |
| excluded_products | Ordinary buildings; mines/power/independent water-treatment/waste-incineration/nuclear-material facilities; services; operation products |
| representative_product | One complete accepted facility with real specialized process/utility system register |
| production_route | Actual civil/structural work, route-specific chemical/thermal installation, utility connections, testing and delivery |
| market_state | Installed physical entity at stated site and cold/hot acceptance; actual capacity remains evidence-qualified |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide installed physical systems for the stated specialized manufacturing function |
| How much | 1 item, one accepted facility with actual geometry and capacity/product/time basis |
| How well | Complete declared installed scope, actual structural/material configuration and project-specific signed acceptance; no assumed performance approval |
| How long or cycle | One documented construction/acceptance cycle; later operating service duration is outside this reference and requires separate evidence |
| reference_flow_link | reference_facility |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted specialized manufacturing facility |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Site/country; target manufactured products/route; actual dimensions/structure; real capacity and product/time basis; starting assets; installed equipment and embedded scope; material states; provider gates; construction period; real cold/hot tests and acceptance endpoint; omissions and later-stage boundaries |

Required qualifiers must be declared in the actual foreground package. Reference product UUID remains blank pending exact facility verification; a compatible count property or different cement-factory route does not prove product identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | The reference is exactly 1 item, one accepted physical specialized manufacturing facility. item is the public Item(s) single-count unit, displayed as 件 in Chinese. cp_acceptance records the matching facility. All inventory rows and protocols aggregate per declared reference flow. |
| geometry_configuration | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_acceptance retains as-built footprint, heights, foundation/rack dimensions, vessel working volumes and real capacity with product/time basis. Geometry/capacity are qualifiers, not assumed count-to-area/mass conversions. Compare only identical functional scope and acceptance; no default service life. |
| volume_state | ready_mix; soil_disposal; water_supply; freshwater_abstraction; freshwater_discharge; washwater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve actual volume state: fresh concrete before placement, bank versus loose soil, supplied water versus receptor discharge. Conversion to mass requires measured same-state density with temperature/moisture and raw/converted records in cp_civil, cp_ground and cp_water; no default density. |
| diesel_mass | diesel | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve public Mass/kg. For litres use actual batch-specific density; supplier heating value and fossil/biogenic share are separate evidence, not mass or emission defaults. cp_utilities reconciles stock, receipts, returns and consumed fuel. |
| electricity_energy | electricity_lv; electricity_mv | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve public Net calorific value/energy group; 1 kWh=3.6 MJ is a unit conversion, not a fuel LHV assumption. cp_utilities records true region, user voltage, provider/mix and metering; avoid LV/MV/generator overlap. |
| component_mass | liquid_pump; cooling_pump; induction_furnace; distribution_transformer; steel_form_panel; crane_manufacture_share | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated complete-component weighing or traceable supplier net weighing/BOM of the same configuration, excluding transport packaging and duplicate nested content. This component kg input per facility is not an invented facility mass. cp_install, cp_thermal and cp_assets preserve inclusion scope. |
| cable_length | low_voltage_cable | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Preserve public Length/m. cp_install measures delivered, installed, returned and wasted lengths by cable specification. Only a matching measured/traceable net kg/m permits mass conversion; do not double-count embedded conductors/insulation. |
| gas_primary_volume | oxygen; purge_nitrogen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve each public gas Volume/m3 primary property. cp_gas_volume and cp_purge collect actual same-reference-state consumed volumes and retain raw net kg if weighed. Gas pressure-temperature and purity must match provider/reference conditions; net kg divided by evidenced same-state kg/m3 density gives m3. Unknown density/state stays review, with no assumed normal volume or rewritten Mass property. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed greenfield/brownfield site with retained assets, clearance/remediation and supplier receipt gates declared |
| starting_condition_role | Recorded construction start, not an implicit zero-burden land/equipment assumption |
| product_classification_scope | Physical specialized manufacturing facilities and official exclusions under CPC3.0 53269 context |
| recursive_input_rule | A retained/purchased same-category facility/module is an identified upstream asset with provider and burden history; do not recursively recreate or hide it in the new output |
| upstream_dataset_requirement | Separately link compatible production/supply datasets for materials/equipment or declare unavailable interfaces/cut-offs; no default full upstream coverage |
| disclosure | Site/route/system baseline; supplier/site-fabrication inclusion; actual logistics/tests; asset shares; environmental gaps; omitted upstream/operation/maintenance/demolition |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stage | dataset | The base starts with documented site conditions and incoming products at declared supplier/receipt gates, covering attributable logistics, ground/civil works, specialist installation, connections, construction support and actual acceptance through handover. Supplier production is separately linked background. This construction-and-delivery foreground does not prove full cradle-to-gate or full lifetime coverage. | `un-cpc-manufacturing-2025` |
| boundary_route | chemical; thermal; utilities | Require a project functional-system register. Chemicals/pharmaceuticals reconcile real vessels, transfer/separation, containment, clean/utility systems; foundries reconcile melting, moulding, handling/extraction; blast furnaces reconcile shell/lining, charging, blast/cooling and gas systems; coke ovens reconcile masonry, heating, doors/charging and collection. Technologies are actual-route conditions, not universal requirements. Other specialized routes must demonstrate the same entity/function closure. Add individual physically specific rows and records for every missing installed system, ingredient, consumable, residue or release actually required; unresolved scope prevents a complete dataset claim. | `ifc-foundries-2007`; `jrc-iron-steel-2013`; `ontario-chemical-storage-2007`; `ifc-pharma-biotech-2007` |
| boundary_embedded | all inventory rows | Choose supplier-component versus on-site fabrication boundaries from real work packages. Do not count complete vessels/furnaces/cables and embedded metals/lining/controls twice. Receipt, installation, transport and tests are separate. Ready-mix and site batching cannot overlap for the same volume. Include actual temporary works/subcontracts or disclose unavailable providers/cut-offs. | `usace-concrete-1994` |
| boundary_acceptance | acceptance | Declare the mechanical/cold/hot acceptance endpoint and actual tests. Record test water, purge, dry-out, energy, reagents, trial charges/products, waste and releases as individual exchanges. Hot acceptance is not assumed absent or free; saleable test product and regular production are subdivided with real activity and material balances. Cold checks do not confer process capacity or regulatory approval. |  |
| boundary_later | dataset | Post-handover manufacturing operation, maintenance, later refractory relining/replacement and eventual demolition/remediation are separate from base delivery. Expanded studies need independently evidenced life/schedules, physical quantities, demolition processes and destinations; no default life or recycling credits. Reused starting foundations/equipment require prior burden and repair disclosure. | `ifc-construction-2007` |
| boundary_environment | site_plant; civil | Direct releases require actual source/activity evidence after controls. Distinguish supplied water, freshwater resource, collected liquid waste and receptor discharge. Assess real land transformation/occupation, contaminated soil, dust, drainage and noise. Missing actual pollutants/land-use rows remain disclosed until identified and quantified. Unmeasured is not zero; waste transfer is not elementary release. | `ifc-construction-2007` |

## 6. Process Inventory Structure

Individual equipment and consumable cards are conditional foreground collection candidates, not evidence that every facility requires that technology. Actual project drawings, supplier specifications and installation/test instructions establish physical form, alloy, duty, configuration and occurrence. External sources support only their stated physical/record context; blank source cells rely on the declared real foreground protocols and require project verification.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| logistics | Incoming logistics and receipt | required | Every actual transport mode needs a separate row | foreground construction and delivery | per declared reference flow |
| ground | Site preparation and groundworks | required | Always record baseline; physical groundworks only when performed | foreground construction and delivery | per declared reference flow |
| civil | Process foundations, slabs and containment | conditional | New or altered concrete foundations, floors, pedestals or liquid containment | foreground construction and delivery | per declared reference flow |
| structure | Equipment supports, pipe racks and steel erection | conditional | Steel supports or site fabrication/erection in actual scope | foreground construction and delivery | per declared reference flow |
| chemical | Chemical and pharmaceutical process installation | conditional | Applicable actual chemical/pharmaceutical or vessel-and-piping route | foreground construction and delivery | per declared reference flow |
| thermal | Furnace, coke-oven and foundry installation | conditional | Actual blast-furnace, coke-oven, foundry or other thermal manufacturing route | foreground construction and delivery | per declared reference flow |
| utilities | Permanent utilities, cooling and environmental systems | required | Reconcile every actually installed utility and environmental system | foreground construction and delivery | per declared reference flow |
| site_plant | Construction equipment, utilities and actual releases | required | Tag activities across work packages; no duplicate utilities | foreground construction and delivery | per declared reference flow |
| acceptance | Testing, commissioning and handover | required | Actual agreed delivery state; cold/hot tests separately traced | foreground construction and delivery | per declared reference flow |

### Process: Incoming logistics and receipt (`logistics`)

#### Inputs

##### Product flows

###### Road freight transport for incoming equipment and materials (`road_freight`)

Only actual road legs: retain shipment tonnes, kilometres, truck/load and empty-return treatment. Factory-gate products exclude this leg; other transport modes need separate rows.

- Selected flow: Road freight transport for incoming equipment and materials
- Flow property / unit: Mass*distance / t*km
- Amount rule: Measured attributable exchange total from cp_transport; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport`
- Sources: `ifc-construction-2007`

### Process: Site preparation and groundworks (`ground`)

#### Inputs

##### Product flows

###### crushed stone 16/32 (`subbase_16_32`)

Only actual 16/32 crushed stone used for foundation subbase; record grading and mass state. This UUID does not prescribe this grading; other grading needs another atomic row.

- Selected flow: crushed stone 16/32 `4f197bee-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_ground; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ground`
- Sources: `usace-concrete-1994`

#### Outputs

##### Waste flows

###### Non-contaminated excavated mineral soil sent for disposal (`soil_disposal`)

Only actual exported waste after classification and destination verification; distinguish surveyed bank/loose volumes. Site reuse is internal transfer; contaminated soil requires another row.

- Selected flow: Non-contaminated excavated mineral soil sent for disposal
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_ground; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ground`
- Sources: `ifc-construction-2007`

### Process: Process foundations, slabs and containment (`civil`)

#### Inputs

##### Product flows

###### Fresh ready-mixed Portland-cement concrete before placing (`ready_mix`)

Purchased wet concrete only: retain real mix, strength/exposure, tickets, volume, returns and installed geometry. Site placing and curing remain foreground. Do not also count batching ingredients for the same volume.

- Selected flow: Fresh ready-mixed Portland-cement concrete before placing
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_civil; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `usace-concrete-1994`

###### Cement, ordinary portland cement, 42.5mpa (`cement_42_5`)

Only actual site batching using this cement strength grade; verify formulation and supplier batch. Other grades/binders get distinct rows; no default mixture.

- Selected flow: Cement, ordinary portland cement, 42.5mpa `89fb85db-c8dc-426c-a4cd-52de2184a31b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_civil; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `usace-concrete-1994`

###### Washed siliceous sand for concrete batching (`washed_sand`)

Only site batching: measure sand mass, grading, mineralogy and moisture; retain actual moisture correction, without re-counting sand in purchased concrete.

- Selected flow: Washed siliceous sand for concrete batching
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_civil; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `usace-concrete-1994`

###### crushed stone 16/32 (`batch_gravel_16_32`)

Only this actual fraction in site concrete batching, with moisture and batch mass. Keep its use separate from subbase; other fractions require distinct rows.

- Selected flow: crushed stone 16/32 `4f197bee-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_civil; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `usace-concrete-1994`

###### Hot rolled rebar steel (`reinforcing_bar`)

Only actual factory-supplied hot-rolled low-alloy rebar with C ≤0.2%, before site cutting/bending. Reconcile certificates, received/installed mass and offcuts. Other alloys/forms need another identity.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_civil; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `usace-concrete-1994`

###### Cementitious non-shrink equipment-base grout (`anchor_grout`)

Only actual grout under bases/anchors; record dry formulated mass and separate mixing water. Require supplier binder/additive formulation; ordinary cement is not finished grout.

- Selected flow: Cementitious non-shrink equipment-base grout
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_civil; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `usace-concrete-1994`

###### Reusable fabricated steel formwork panel (`steel_form_panel`)

Only actual panels: retain same-asset measured mass and supported dimensionless project manufacture share. Across all projects, periods and reuses cumulative shares must not exceed one. Operation, cleaning and losses are separate; unknown total service activity remains review.

- Selected flow: Reusable fabricated steel formwork panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Traceable same-asset net mass multiplied by evidenced dimensionless project manufacture share; retain cp_assets physical scope and cumulative ledger
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `usace-concrete-1994`

#### Outputs

##### Waste flows

###### Hardened Portland-cement concrete construction rubble (`concrete_rubble`)

Only actual rejected/cured concrete to a recorded receiver; separate fresh returns and contaminated residue. Mixed construction-waste disposal is not this concrete material.

- Selected flow: Hardened Portland-cement concrete construction rubble
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_waste; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-construction-2007`

###### Portland-cement concrete washwater sent for treatment (`washwater`)

Only actual collected truck/tool washwater crossing to treatment; record volume, sampled solids/pH and receiver. It is technosphere liquid waste, not water emission. Separated solids need another row.

- Selected flow: Portland-cement concrete washwater sent for treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_waste; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-construction-2007`

### Process: Equipment supports, pipe racks and steel erection (`structure`)

#### Inputs

##### Product flows

###### Hot-rolled large section (`rolled_section`)

Only actual iron or non-alloy-steel hot-rolled large sections, not further worked beyond the public hot-rolling/hot-drawing/extrusion category, supplied before site fabrication. Record grade and untreated delivery state; alloy sections and completed fabricated beams need separate identities. Include actual site cutting, welding, lifting and coating separately.

- Selected flow: Hot-rolled large section `cbeefeb8-2dfc-48f5-b643-f35aed0d52a1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_structure; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources:

###### Steel equipment-foundation anchor bolt (`anchor_bolt`)

Actual bolt with grade, geometry and traceable/measureable unit mass. Nuts/washers are separate when outside its supplied assembly. Unspecified fasteners do not prove anchor performance.

- Selected flow: Steel equipment-foundation anchor bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_structure; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources: `usace-concrete-1994`

###### Flux-coated carbon-steel welding electrode (`welding_electrode`)

Only actual site coated electrodes, with specification, consumed mass, stubs and weld records. Wire, gas and other electrode formulations need separate rows.

- Selected flow: Flux-coated carbon-steel welding electrode
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_structure; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources:

###### ethyne; acetylene (`acetylene`)

Only supplied C2H2 factory product actually used in cutting; measure net consumption excluding cylinder tare and separately balance solvent. Oxygen is a separate exchange, not inferred from acetylene use.

- Selected flow: ethyne; acetylene `0ee52d35-6fea-4c7a-8922-fe2164a5d84b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_structure; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`
- Sources:

###### oxygen (`oxygen`)

Only actual molecular O2, CAS7782-44-7, supplied as gas from matching factory mixed-production interface for site cutting. Preserve the public primary Volume/m3; record purity, supply/measurement pressure-temperature, calibrated net gas volume and provider reference-state compatibility. If raw net kg is used, divide by evidenced density for that same purity/pressure/temperature, retaining raw kg and density; no default density. Transport/delivery is a separate link. The original controlled type is Product flow/CPC basic chemical; its legacy elementary-flow general comment is not permission to model resource oxygen or an emission. Liquid oxygen and mixed welding gas require separate identities.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_gas_volume; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_volume`
- Sources:

#### Outputs

##### Waste flows

###### Clean carbon-steel site-fabrication offcut sent for recycling (`steel_offcut`)

Only actual clean offcuts with alloy/coating, mass and recycler interface. CN at-plant steel scrap alone does not identify this site waste. No automatic avoided-steel credit.

- Selected flow: Clean carbon-steel site-fabrication offcut sent for recycling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_waste; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-construction-2007`

### Process: Chemical and pharmaceutical process installation (`chemical`)

#### Inputs

##### Product flows

###### Fabricated carbon-steel atmospheric chemical-storage tank (`storage_tank`)

Only actual tank: record chemical compatibility, corrosion protection, working volume and shell/lining/completeness. Foundation/bund are separate site construction. Other materials/pressure classes need other rows.

- Selected flow: Fabricated carbon-steel atmospheric chemical-storage tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_install; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `ontario-chemical-storage-2007`

###### Fabricated stainless-steel stirred pressure reactor (`reactor`)

Only actual supplied reactor with alloy, pressure/temperature, volume, agitator, jacket and instrument inclusion. Do not reconstruct embedded manufacture as separate steel without a non-overlapping scope split.

- Selected flow: Fabricated stainless-steel stirred pressure reactor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_install; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `ifc-pharma-biotech-2007`

###### Fabricated stainless-steel distillation column (`distillation_column`)

Only actual distillation route, with shell/internals/insulation inclusion, alloy, height/diameter and service specification. Not required for every chemical/pharmaceutical facility.

- Selected flow: Fabricated stainless-steel distillation column
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_install; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `ifc-pharma-biotech-2007`

###### Pump (`liquid_pump`)

Only actual factory liquid pump in the public liquid-pump category. Record type, wetted material, duty, motor/completeness. Preserve Mass/kg using calibrated weighing or traceable same-configuration net mass, never invented kg per pump.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_install; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `ifc-pharma-biotech-2007`

###### Steel Pipe (`welded_process_pipe`)

Only actual factory-welded steel pipe of circular cross-section, with alloy, diameter/wall, pressure and chemical-compatibility evidence. Supplied before site assembly; not square/rectangular hollow sections, seamless tubing, valves, fittings, insulation or installed network. Each actual additional product needs its own row.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_install; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `ontario-chemical-storage-2007`

### Process: Furnace, coke-oven and foundry installation (`thermal`)

#### Inputs

##### Product flows

###### Steel plate materials (`furnace_plate`)

Only actual C 0.1–0.2% factory rolled plate without further heat treatment. Do not also charge a complete supplied furnace for its embedded shell. Other grades/fabricated shells need separate identities.

- Selected flow: Steel plate materials `818105f5-d33e-4dd8-bbc0-fc1ad29d9173`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_thermal; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `jrc-iron-steel-2013`

###### Complete coreless induction melting furnace (`induction_furnace`)

Only an actual supplied foundry induction furnace with capacity basis, coil, supply, tilt and lining inclusion. Exclude embedded manufacture from separate shell/coil/lining rows when already inside the complete furnace; actual site assembly/tests remain foreground.

- Selected flow: Complete coreless induction melting furnace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_thermal; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-foundries-2007`

###### Silica refractory brick for coke-oven masonry (`silica_brick`)

Only actual silica-brick coke chambers/heating walls; retain composition, geometry, received/installed/cut-waste mass and masonry records. Historical BREF supports physical configuration only, not a thickness/temperature/consumption default.

- Selected flow: Silica refractory brick for coke-oven masonry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_thermal; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `jrc-iron-steel-2013`

###### high alumina refractory brick (`alumina_brick`)

Only actual shaped sintered aluminosilicate brick Al2O3 >48%, matching supplier firing 1350–1450°C. This upstream identity qualifier is not site operating temperature. Record lining zone and installed/wasted mass; not silica, magnesia or carbon brick.

- Selected flow: high alumina refractory brick `773fbca7-3575-483c-b38d-c017771979b3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_thermal; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `jrc-iron-steel-2013`

###### Carbon refractory block for blast-furnace hearth (`carbon_block`)

Only actual carbon-block hearth construction, with grade, porosity, dimensions and installation mass. Coke, coal-gangue brick and alumina-carbon material are different.

- Selected flow: Carbon refractory block for blast-furnace hearth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_thermal; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `jrc-iron-steel-2013`

###### Silica dry ramming mass for induction-furnace lining (`silica_ramming`)

Only actual lining formulation with grain/binder specification and supplier installation/dry-out requirements. Concrete sand or generic refractory mix does not establish this formulated product.

- Selected flow: Silica dry ramming mass for induction-furnace lining
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_thermal; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-foundries-2007`

###### Fabricated steel coke-oven door assembly (`coke_oven_door`)

Only actual door with sealing/refractory inclusion; installation and adjustment remain foreground. Coke and coke gas are operating products, not door assemblies.

- Selected flow: Fabricated steel coke-oven door assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_thermal; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `jrc-iron-steel-2013`

###### Complete sand-moulding machine (`sand_moulding_machine`)

Only actual sand-casting equipment with tooling/control inclusion. Other casting routes need not have it; permanent machine manufacture is counted once, and operating sand is not inferred as construction use.

- Selected flow: Complete sand-moulding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_thermal; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal`
- Sources: `ifc-foundries-2007`

### Process: Permanent utilities, cooling and environmental systems (`utilities`)

#### Inputs

##### Product flows

###### Complete fabric-filter baghouse (`baghouse`)

Only actual permanent baghouse, with casing/filter/fan/control inclusion and extraction duct scope. Carbon-anode electrostatic collector is not this system. Other environmental technologies require distinct verified rows.

- Selected flow: Complete fabric-filter baghouse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_install; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `ifc-foundries-2007`

###### Pump (`cooling_pump`)

Only actual factory liquid pump for a permanent cooling circuit with traceable same-configuration complete net mass and motor inclusion. Post-handover cooling-water operation is outside base delivery.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_install; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `jrc-iron-steel-2013`

###### Low-voltage cable (`low_voltage_cable`)

Only actual CN factory-gate low-voltage cable matching GB/T12706.1-2020 and supplied specification. Record conductor metal, insulation/sheath, core/section and embedded content. Preserve public Length/m; site laying remains foreground. Other regions/specifications need another identity.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Measured attributable exchange total from cp_install; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources:

###### Complete oil-immersed distribution transformer (`distribution_transformer`)

Only actual utility transformer with traceable complete mass, actual voltage/kVA and oil inclusion. A generating plant is excluded. Do not choose a 400kVA/wind-farm product without matching configuration.

- Selected flow: Complete oil-immersed distribution transformer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_install; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources:

### Process: Construction equipment, utilities and actual releases (`site_plant`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Only product actually consumed in tagged machines/generators. Public identity uses Mass/kg with unspecified grade/formulation/geography; record actual supplier/grade/fossil share and density for litre readings. Fuel production, transport and site combustion stay separate.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_utilities; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ifc-construction-2007`

###### Alternating current (`electricity_lv`)

Only actual mainland CN grid-average user-side <1kV supply. Preserve Net calorific value and public energy group; metered kWh uses 1 kWh=3.6 MJ. Other region/mix/voltage needs another identity. Generator fuel is not this supply.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange total from cp_utilities; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ifc-construction-2007`

###### Alternating current (`electricity_mv`)

Only actual mainland CN grid-average user-side 1–35kV supply, independently metered without LV duplication. Preserve Net calorific value/energy group and actual transformer-loss boundary. No waste-incineration generation mix substituted.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange total from cp_utilities; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `ifc-construction-2007`

###### Treated fresh water supplied to construction site (`water_supply`)

Only actual technosphere supply, tagged by dust suppression/batching/curing/testing. Record supplier, treatment, geography and delivery gate. Internal recycling is not a new supply. HK treatment-plant-gate water cannot identify unspecified-region site supply.

- Selected flow: Treated fresh water supplied to construction site
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_water; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-construction-2007`

###### Crane lorries (`crane_manufacture_share`)

Only actual complete finished manufactured crane lorry (CPC49115), matching the public factory production-mix interface and measured carrier/crane/configuration net kg, multiplied by supported dimensionless project manufacture share. Other mobile crane types, detached crane systems or components require separately verified atomic rows; this does not restrict the facility route or omit their actual burden. Across all projects/periods/reuses cumulative manufacture shares must be at most one. Fuel, operation and actual maintenance remain separate; unknown lifetime/service denominator remains review, never a full manufacture reset per project.

- Selected flow: Crane lorries `3d73143c-e111-4f03-905c-82f7dcad0a1f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Traceable same-asset net mass multiplied by evidenced dimensionless project manufacture share; retain cp_assets physical scope and cumulative ledger
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ifc-construction-2007`

##### Elementary flows

###### freshwater (`freshwater_abstraction`)

Only actual direct freshwater withdrawal from nature; record source, basin and extraction country for country-based scarcity use. Renewable freshwater resource is not unspecified water, seawater, supplied water or wastewater. Do not repeat upstream supplied-water abstraction.

- Selected flow: freshwater `5fdac403-9f2c-4a10-b8d6-5367cc9d2d9b`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_water; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-construction-2007`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only evidenced immediate external fossil CO2, CAS124-38-9, air/unspecified. Use actual measured mass or reviewed actual fuel-carbon/fossil-share/oxidation balance. No default factor from fuel existence, biogenic or soil/long-term substitution.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_emissions; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-construction-2007`

###### nitrogen monoxide (`nitrogen_monoxide`)

Only evidenced molecular NO, CAS10102-43-9, immediate air/unspecified; retain sampled exhaust state/volume. NOx-as-NO2 does not quantify molecular NO; nitrogen/N2O identities are different.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_emissions; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-construction-2007`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only evidenced molecular NO2, CAS10102-44-0, immediate air/unspecified. NOx-as-NO2 equivalent needs speciation or another precisely qualified unresolved exchange, not conversion by name.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_emissions; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-construction-2007`

###### particles (PM2.5) (`fine_particles`)

Only actual external PM2.5 after controls, immediate air/unspecified, with size-specific measured/modelled source evidence. Occupational concentration is not release. Do not overlap with a PM10 total.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_emissions; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-construction-2007`

###### particles (PM2.5 - PM10) (`coarse_particles`)

Only separately supported >2.5–10 micrometre external fraction, immediate air/unspecified. Not all PM10, soot waste or settled soil. Record actual dust source, moisture/control and fraction basis.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_emissions; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-construction-2007`

###### Particulate matter, particle size unspecified (`unspecified_particles`)

Only evidenced external particulate release with no valid size split, air/unspecified. Alternative total for the same source, not additive to overlapping fine/coarse fractions; preserve uncertainty.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange total from cp_emissions; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-construction-2007`

###### Water (`freshwater_discharge`)

Only actual liquid CAS7732-18-5 directly to freshwater receptor, with dewatering/test/drainage source and receiver recorded. Not supply/resource/vapour/sewer/marine discharge. Solutes and solids require independent measured exchanges; water volume does not prove clean or zero pollution.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_water; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-construction-2007`

###### Construction airborne sound exposure to outdoor air (`noise_air`)

Only actually quantified sound exposure with interval, weighting/frequency, instrument pressure-time and receiver geometry. dB is logarithmic, not additive mass or an exchange inferred from an engine. Acoustic property/LCIA linkage remains review until supported.

- Selected flow: Construction airborne sound exposure to outdoor air
- Flow property / unit: Sound exposure / Pa2*s
- Amount rule: Measured attributable exchange total from cp_emissions; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-construction-2007`

### Process: Testing, commissioning and handover (`acceptance`)

#### Inputs

##### Product flows

###### Nitrogen gas (`purge_nitrogen`)

Only actual China factory-interface industrial gaseous N2 supplied for commissioning purging/leak testing; retain purity, actual supply/reference gas pressure-temperature, provider compatibility, consumed net volume and vent/residual fate. Preserve public primary Volume/m3. cp_purge retains net kg/tare/stock/returns if weighed and converts to m3 only with evidenced same-purity gas density at the matching pressure/temperature; unknown state or density remains review. Other geography, bottling makeup gas or liquid nitrogen requires separately verified atomic identities; no purge occurrence or emission is inferred.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable exchange total from cp_purge; retain stated physical state/unit/route; no default amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purge`
- Sources:

#### Outputs

##### Product flows

###### Accepted specialized manufacturing facility (`reference_facility`)

One complete physical site-specific facility accepted for the stated manufacturing function and installed-systems schedule. Geometry, capacity basis and acceptance match section3; no invented mass/life. Partial works cannot claim complete facility delivery.

- Selected flow: Accepted specialized manufacturing facility
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc-manufacturing-2025`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all inventory rows | Prefer measured work-package subdivision by physical system. Shared utilities/haul use actual metering/load/activity and reconcile assigned totals to original totals. Cost, nominal capacity or floor area is not a default driver for different specialized systems. Unknown attribution stays review. |  |
| allocation_assets | steel_form_panel; crane_manufacture_share | Use a durable same-asset ledger across all projects, periods and reuses. Project manufacture share is dimensionless and supported by attributable actual service versus evidenced total service. Cumulative shares must be ≤1. Unknown total life/activity or previous assignments needs review, never a full manufacture reset per project. Fuel, actual maintenance and losses are separate and cannot duplicate hired-service content. |  |
| allocation_trial | acceptance | Separate acceptance test products from facility output. Subdivide by actual test activity/time and material balances where possible; residual coproduct allocation requires reviewed physical justification and collected quantities. Scrap export is waste unless documented product status/receiver function justifies otherwise. No automatic substitution credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Each protocol aggregates the actual attributable exchange total in its row unit per declared reference flow, retaining raw records and the same accepted facility. Detailed conversions and asset-share relationships remain in the measurement/calculation rules.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_transport | logistics | Transport legs | shipment/route records | Shipment; component; measured tonnes; km by leg; carrier/load; empty return; provider gate | Reconcile tickets, actual routes and carrier data; separate modes and included transport burdens | t*km | each shipment | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_ground | ground | Ground and subbase | survey and quantity records | Starting condition/assets; site polygons; before/after levels; bank/loose volumes; aggregate grading/mass; soil contamination/receiver | Use actual survey, weighbridge and excavation logs; reconcile site reuse/export without default bulking or grading | m3; kg | each activity/survey | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_civil | civil | Concrete, rebar and grout | supply/batch/placement/inspection | Mix/strength/exposure; wet concrete m3; dry ingredients kg; moisture; installed dimensions; rebar/grout kg; returns; curing/test water; acceptance | Reconcile original tickets, calibrated batch/readings and surveyed geometry. Retain project-specific foundation/form/anchor and quality records; historical USACE records do not prescribe present compliance or recipe | m3; kg | each delivery/batch/placement | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_structure | structure | Site steel work | material and fabrication/lift logs | Grade; dimensions; received/installed kg; weld specification; electrode/gas kg; lifts/hours; scrap; coating/solvent identity and consumption | Reconcile certified material, actual fabrication sheets and weld/lift logs; separately add every actual coating, solvent and release exchange | kg | each part and activity | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_install | chemical; utilities | Permanent equipment/piping | supplier inclusion and installation | Tag; type/alloy; pressure/temperature/duty; capacity/geometry; complete net kg; supplier weighing/BOM; inclusions; cable core/section/m; provider gate; joint/test record | Use real supplier weighing or calibrated complete-component weighing/BOM and signed installation records. Reconcile each tag against process, instrument and utility connections without counting embedded content twice | kg; m | each delivered/installed tag | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_thermal | thermal | Furnace/lining construction | zone-specific installation records | Route; dimensions; lining zone; formulation/grade; supplied/installed/wasted kg; shell plate; embedded manufacture; masonry/ramming/dry-out instructions and measured energy/temperature history | Reconcile actual supplier drawings and zone installation records. Required cure/sinter/dry-out conditions come from the actual product supplier, not historical BREF operating temperatures. Trial charges and releases need separate records | kg | each zone/installation/dry-out | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_utilities | site_plant | Site fuel/electricity | meter and fuel ledger | Asset/work-package/time; kg or litres/density; fuel grade/fossil share; kWh; region/user voltage/provider/mix; generator output; stock/returns; loss boundaries | Read calibrated/contractor meters; reconcile receipts/stock/returns and tag actual earthwork, concrete, lifting, cutting, drying and acceptance. Separate generator fuel from grid supply; prevent duplicate electricity | kg; MJ | each meter interval/fuel issue | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_water | site_plant; civil; acceptance | Site water and drainage | meters, quality and destinations | Supplier/source/basin/country; treatment; m3 by use; recycling; retention/evaporation; dewatering; recipient medium; waste/direct route; salinity/solutes/solids if relevant | Meter actual external supply/discharge by state and recipient. Keep internal recirculation separate. Balance test/curing/waste pathways with evidence; direct discharge never implies clean or zero pollution. Other receivers require exact identities | m3 | each interval/test/discharge | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_waste | ground; civil; structure; thermal; acceptance | Separated residues | consignment, weighing, analyses | Single composition/state; contamination; kg/m3 and volume basis; receiver/recovery/treatment; returns/stock; sampling | Use separated real waste tickets; reconcile receipts, installed material, stock, returns and each residue without default losses. Add each actual packaging, refractory and machinery-maintenance waste individually | kg; m3 | each transfer | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_emissions | site_plant | External releases and acoustics | measurement or reviewed source/activity model | Tag/activity; species/CAS; fossil origin; immediate/long-term; medium/submedium; kg; exhaust volume/state; control; particle fraction; uncertainty; acoustic pressure-time/frequency/weighting/receiver | Measure actual external release or retain reviewed matching source model/factor with real activity. Preserve missing scope and uncertainty. Distinguish molecular NO/NO2 and non-overlapping particles; concentration is not inventory mass. Acoustic property/method stays review | kg; Pa2*s | each source interval/test | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_assets | civil; site_plant | Reusable manufacture attribution | durable all-project lifetime ledger | Unique asset/configuration; measured net kg; project service/activity; evidenced total service/life; dimensionless share; all prior/future assignment records; maintenance/loss; uncertainty | Reconcile same-asset net mass and cumulative manufacture shares across projects/periods/reuse. Unknown total service or prior assignments is review; no per-project full manufacture. Operating activity and hired-service content remain separate | kg; dimensionless | each assignment/reuse | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_acceptance | acceptance | Facility delivery and tests | as-built register and signed acceptance | One facility id/site; target products/route; system tags/inclusions; actual dimensions; real capacity/product/time basis; starting assets; dates; agreed cold/hot endpoint; test inputs/outputs/waste/releases; omitted scope | Reconcile as-built drawings, quantity survey and actual mechanical/electrical/process acceptance signatures. Record each test, rework and missed coverage. Certificates prove only their stated scope, not default operation life or approval | item | each test/final handover | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_purge | acceptance | Actual nitrogen commissioning purge | supplier mass ledger and purge records | Test/tag/time; N2 purity; supply/reference pressure-temperature; provider reference-state compatibility; calibrated incoming/closing/returned/consumed gas m3; net nitrogen kg and full/empty cylinder tare if weighed; matching gas density kg/m3 with evidence; vent/residual fate | Reconcile actual calibrated supply, stock and returns to consumed nitrogen volume for the stated real acceptance test. Keep net kg/tare records when weighed; volume = net consumed kg / same-purity gas density in kg/m3 at the documented matching pressure-temperature. Direct volume readings must use the same documented gas reference state; no default density or standard-state assumption. Unknown state/density remains review. Facility output count stays in cp_acceptance; actual vendor/project instructions determine whether purge occurs | m3 | each nitrogen delivery/return/purge test | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |
| cp_gas_volume | structure | Actual oxygen supply for site cutting | calibrated gas-volume/supply and cutting ledger | O2 purity/CAS; supplier factory interface; actual pressure-temperature and compatible reference state; calibrated incoming/closing/return/consumed m3; weighed net kg/tare and evidenced same-state density kg/m3 if used; actual cutting work package | Reconcile actual consumed gas volume from supply, stock and returns at the documented matching pressure-temperature. Retain weighed kg if present; m3 = net kg / evidenced same-purity-state density kg/m3. Keep raw and converted records; unknown state/density or provider reference compatibility remains review. No nominal cylinder size, standard-density default, welding-gas mixture or liquid-oxygen substitution | m3 | each delivery/return and actual cutting operation | Full actual construction and acceptance period | Declared site/project and traceable contractors | per declared reference flow | Original records, calibration, reconciliation and uncertainty; missing evidence remains gap |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_reconciliation | all inventory rows | Retain actual attributable totals in each row unit per declared reference flow. Reconcile receipts, stock, installed quantities, returns, residues and tests by physical identity. Missing values remain unknown; internal transfers are not new external inputs. No default recipe, loss, mass per facility or life. | all collection protocols | Actual totals per declared reference flow |  |
| unit_preservation | diesel; electricity_lv; electricity_mv; low_voltage_cable; road_freight | Convert only numerator units using same-state evidence and collected parameters; keep raw/final values. Output remains 1 item. Cable remains Length/m, electricity Net calorific value/MJ, transport actual tonne-kilometre legs, with no assumed capacity/area denominator. | cp_transport; cp_utilities; cp_install | Compatible row quantities per declared reference flow |  |
| asset_attribution | steel_form_panel; crane_manufacture_share | Multiply traceable same-asset net kg mass by evidenced dimensionless project manufacturing share. Retain total-service evidence and cumulative shares ≤1 across every project/period/reuse. Unknown denominator remains review; this is an input kg quantity, not facility reference mass. | cp_assets | Attributable asset kg per declared reference flow |  |
| release_quantification | fossil_co2; nitrogen_monoxide; nitrogen_dioxide; fine_particles; coarse_particles; unspecified_particles; freshwater_discharge; noise_air | Use actual release and receptor. Any factor/model requires reviewed matching activity, substance, state, control and uncertainty. Concentration conversion needs same-state sampled volume and explicit dimensional evidence. Reconcile overlapping particle fractions and water routes. Fuel/material existence alone is not an emission quantity. | cp_emissions; cp_water; cp_utilities | Evidenced individual releases | `ifc-construction-2007` |
| gas_volume_conversion | oxygen; purge_nitrogen | V = net consumed gas kg / rho, where rho is evidenced kg/m3 for the same gas purity and actual documented reference pressure-temperature. Retain raw measured net kg, stock/returns/tare, rho evidence and final V m3, or direct calibrated V at that same state. No invented density or mandatory conversion: unavailable state/rho/provider compatibility remains review. Denominator stays the one accepted facility, not its mass. | cp_gas_volume; cp_purge | Actual gas m3 per declared reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_entity | dataset | Require actual function, route, geometry, capacity basis, installed scope and handover state for one identifiable physical facility. A foundation, furnace shipment or ordinary building alone is not complete delivery. | cp_acceptance; un-cpc-manufacturing-2025 |
| route_closure | chemical; thermal; utilities | Cross-check all systems, specialist subcontracts and tests against drawings/logs. Starter rows do not prove a complete BOM; add actual missing specific equipment, materials, waste and releases. Record omissions; no full-coverage claim before reconciliation. | cp_install; cp_thermal; cp_acceptance |
| measurement | all inventory rows | Cover full construction/acceptance with raw records, calibration, contractor attribution and uncertainty. Preserve numerator physical states and common denominator. Missing measurement/review is not zero; unsupported conversions remain review. | all collection protocols |
| identity | all inventory rows | Public main property/unit, composition/state, technical/geographic limits and supplier gates remain exact. Identity is not quantity, occurrence, provider completeness or scientific approval. Blank identities retain precise rows. | public original; supplier records; cp_install |
| environment | site_plant | Document source, fossil/biogenic share, CAS/species, immediate/long-term, medium/submedium and particle fractions. Land/sound coverage explicit; workplace concentration, captured dust and technosphere liquid waste are not external releases. | cp_emissions; cp_water; cp_ground |
| asset_conservation | steel_form_panel; crane_manufacture_share | Retain supported life/total activity and cumulative manufacture-share ledger across all projects/uses. Unknown denominator or previous assignment is a gap for review, not a per-project reset. | cp_assets |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset | Verify specialized manufacturing function with official exclusions; reject service, ordinary building, mining/power, independent water/sewage treatment, waste-incineration or nuclear-material-processing output substitution. | `un-cpc-manufacturing-2025` |
| validate_basis | all inventory rows | Reference object, reference_facility output and all row/protocol denominators must agree with 1 item and actual acceptance scope. Require real geometry/capacity without fabricated mass, area or life conversion. Component kg, cable m and energy are numerators. |  |
| validate_inventory | dataset | Reconcile actual work packages, component inclusion, tests and contractors. Avoid ready-mix/site-batch and furnace/embedded-content overlap. Missing identity, quantity, stage or acceptance condition is explicit and prevents corresponding completeness claims. | `usace-concrete-1994` |
| validate_assets | steel_form_panel; crane_manufacture_share | Check same-configuration net mass, supported service-share basis and cumulative share ≤1 across all projects/periods/reuses. Unknown life/activity/previous assignments needs review; hired-service and direct-operation burdens cannot overlap. |  |
| validate_environment | site_plant; civil | Require actual release and matching substance/media/property. NO differs from NO2/N2O; NOx-as-NO2 is not molecular NO2. No particle overlap; water resources/supply/discharge/waste differ. Acoustic identity and actual unmeasured land/pollutant scope remain review/disclosure. | `ifc-construction-2007` |
| validate_status | dataset | Projection/checkability does not confer publication, scientific methodology approval or legal compliance. Independent review and identity/provider/evidence completion are required for later approval. Do not infer full-life results from this delivery foreground. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset: site-specific specialized facility construction and acceptance delivery |
| downstream_use | A declared construction stage or infrastructure input for the stated manufacturing route; upstream material/equipment production linked separately |
| allowed_use | Actual accepted entity and physically comparable same-function/scope facilities; construction-only and linked-upstream results separately disclosed |
| excluded_use | Generic floor-area benchmark; operating chemical/casting/pig-iron/coke output; construction service; full lifetime or legal/environmental approval without additional qualified stages/evidence |
| required_metadata | Site/country; target products/route; as-built dimensions; real capacity/product/time basis; installed-system/inclusion schedule; starting assets; construction/test dates; cold/hot acceptance; supplier gates/providers; count unit; all additions and exclusions |
| required_quality_disclosure | Measured/estimated/missing rows; unresolved identities/interfaces; upstream provider coverage; asset shares; test products/boundaries; emissions/water/noise/land gaps; uncertainty; stages beyond handover excluded |
| update_trigger | Changes in function/route, geometry/installed equipment/capacity, supplier state, construction or acceptance method, measured activity or public identity; independent review before comparison or expanded-life use |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-manufacturing-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes, 30 June2025, pp.277,281–282; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Physical classification and exclusions only; no engineering quantities |
| usace-concrete-1994 | official_guidance | USACE EM1110-2-2000 Standard Practice for Concrete for Civil Works Structures, 1 February1994, §7-6/Fig7-1/§9-1, printed7-6/7-8/9-1, PDF68/70/80; https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-2-2000.pdf | Historical preparation/placement and quality records only; no present approval or default mixture/consumption |
| ifc-construction-2007 | official_guidance | World Bank Group/IFC General EHS Guidelines §4 Construction and Decommissioning, 30 April2007, printed89–91, PDF1–3; https://www.ifc.org/content/dam/ifc/doc/2000/2007-general-ehs-guidelines-construction-and-decommissioning-en.pdf | Qualitative actual-site activity/environmental screening; no default emissions, factors or current compliance claim |
| ifc-foundries-2007 | official_guidance | IFC EHS Guidelines for Foundries, 30 April2007, AnnexA pp.16–18; https://www.ifc.org/content/dam/ifc/doc/2000/2007-foundries-ehs-guidelines-en.pdf | Historical physical furnace/moulding configuration; no transferred operation charges, capacities or emissions |
| jrc-iron-steel-2013 | official_guidance | European Commission JRC Iron and Steel Production BREF, 2013 EUR25521 EN, DOI10.2791/97469; §5.1.2.2 p.211/§6.1.3 p.292, PDF239/320; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | Historical silica coke-oven masonry and blast-furnace lining/cooling/gas configuration only; no default construction design or operation factors |
| ontario-chemical-storage-2007 | official_guidance | Ontario Ministry of Environment, Guidelines for environmental protection measures at chemical and waste storage facilities, May2007, §2 tanks/piping, §3 secondary containment; https://www.ontario.ca/page/guidelines-environmental-protection-measures-chemical-and-waste-storage-facilities | Historical qualitative material/foundation/containment compatibility only; no numeric requirement or current legal approval adopted |
| ifc-pharma-biotech-2007 | official_guidance | IFC EHS Guidelines for Pharmaceuticals and Biotechnology Manufacturing, 30 April2007, pp.2–3; https://www.ifc.org/content/dam/ifc/doc/2000/2007-pharma-biotech-ehs-guidelines-en.pdf | Historical physical reactor, separation/distillation and utility/environmental configuration context only. Actual alloy, stirred/pressure state, installation and initial commissioning need real supplier/project records; no operational solvent, nitrogen, energy or emission quantities transferred |
