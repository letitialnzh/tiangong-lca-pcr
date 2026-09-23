---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.currants-and-gooseberries
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Currants and gooseberries

## 1. Scope and Applicability

This PCR covers the foreground production of fresh currants and gooseberries from a managed perennial berry stand through harvest and the farm-gate hand-off of marketable fresh fruit. It applies to open-field production and to protected production only when the protected route, infrastructure attribution, and activity records are explicitly declared. It covers cultivation management, crop inputs, harvest, primary conditioning, grading, and optional on-farm packing or short-term cooling when those activities are controlled and recorded by the foreground operator.

The PCR is used for a crop-year or reporting-period foreground data package normalized to net marketable fruit at farm gate. A data package shall identify the species or product type (for example, currant or gooseberry), cultivar or variety, geography, production system, crop year, harvested state, grade, and whether on-farm washing, cooling, or packing is included.

This PCR excludes processed, frozen, dried, juiced, fermented, preserved, or otherwise transformed berry products; nursery planting-stock production; retail distribution and consumer use; and downstream processing of downgraded fruit. Transport after the declared farm-gate hand-off is outside the default boundary. Animal products, leaves, prunings, and other non-fruit outputs are outside the reference product unless a documented co-product route is declared.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.currants-and-gooseberries |
| classification_refs | CPC 3.0 `01351` — Currants and gooseberries |
| covered_products | Fresh currants and gooseberries produced by managed perennial berry cultivation and delivered as marketable fruit at farm gate, in bulk or in a declared package |
| excluded_products | Processed, frozen, dried, juiced, fermented, preserved, or otherwise transformed fruit; nursery planting stock; retail-ready products with unreported downstream operations; leaves and prunings unless separately declared as co-products |
| representative_product | Marketable fresh currants or gooseberries at farm-gate dispatch |
| production_route | Perennial shrub establishment and management, irrigation and nutrient management where applicable, crop protection, harvest, primary conditioning, grading, and conditional on-farm packing or short-term cooling |
| market_state | Fresh, marketable, graded fruit at the declared farm-gate hand-off; bulk or packaged state must be disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh currants or gooseberries dispatched at the farm-gate hand-off |
| How much | 1 kg net marketable fruit, after declared harvest and conditioning rejects and losses are separated |
| How well | Product identity, cultivar or variety, maturity or harvest grade, harvested condition, packaging state, and production claims are declared; mass is measured at the declared dispatch condition |
| How long or cycle | One declared crop year or reporting period; perennial stand age, productive phase, and establishment or replacement treatment are disclosed |
| reference_flow_link | `farm_gate_marketable_fresh_currant_gooseberry_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Marketable fresh currants and gooseberries at farm gate — unmapped |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or product type; cultivar or variety; geography; production system; crop year; stand age or productive phase; market grade or maturity; harvested product state; bulk or package state; inclusion of washing, cooling, grading, and packing; organic or other production claim; yield and allocation basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | reference product and terminal marketable output | Mass | kg | Measure net marketable fruit at the declared farm-gate condition. Retain gross harvested mass, rejects, losses, and any moisture or condition adjustment separately; do not silently replace the farm-gate basis with a dry-matter basis. |
| `measurement_crop_cycle_basis` | cultivation inputs, harvest, residues, and emissions | Mass, area, or volume as applicable | kg; ha; m3; L; kWh | Link each value to the same declared crop year or reporting period and to the represented fields or production units. Normalize to the net marketable reference output only after the crop-year mass balance is closed. |
| `measurement_nutrient_basis` | fertilizer and soil-amendment input | Mass and elemental nutrient content | kg product; kg N; kg P; kg K or declared equivalent | Record the actual product used and its product mass. Where nutrient content is available, record N, P, and K on the supplier or laboratory reporting basis without merging products; disclose whether P or K is elemental or an oxide-equivalent basis. |
| `measurement_water_energy` | irrigation, process water, fuel, and electricity | Volume, mass, or energy | m3; L; kg; kWh or MJ | Use meter, invoice, equipment, or contractor records for the declared site and operation. Convert units only with a documented conversion and retain the original record basis. |
| `measurement_output_reconciliation` | harvest and primary conditioning outputs | Mass | kg | Reconcile incoming or harvested fruit to marketable output, declared co-products, rejects, spoilage, and measured losses within the stated measurement uncertainty. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A declared perennial currant or gooseberry stand and its represented fields or production units at the beginning of the crop-year reporting period; establishment or replacement inputs are included when they occur in the period or are annualized from documented records |
| starting_condition_role | Foreground production starting condition for a crop-year dataset; the stand, land occupation, production system, and productive phase must be identified |
| product_classification_scope | Fresh currants and gooseberries from managed cultivation, harvest, and optional primary conditioning through the farm-gate hand-off |
| recursive_input_rule | A same-category fruit input used within the foreground route is recorded as an internal product transfer or as an upstream secondary dataset with its origin disclosed; do not recursively instantiate this PCR for the same product flow |
| upstream_dataset_requirement | Use declared upstream datasets for planting material, fertilizers and soil amendments, crop-protection products, energy carriers, water supply, packaging, and any contracted service. The PCR does not recreate upstream production processes. |
| disclosure | The data package must disclose geography, field or unit roster, crop year, stand age or productive phase, production system, irrigation source, nutrient and crop-protection practice, harvest and grading route, cooling or washing, package state, residue fate, co-product route, and farm-gate hand-off. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_year` | cultivation and managed production | Include crop management inputs and outputs for the declared crop year or reporting period and link them to the represented fields or production units. | `fao-gaps-family-agriculture-2007` |
| `boundary_perennial_stand` | perennial stand establishment and replacement | Include establishment or replacement inputs when they occur in the reporting period; otherwise annualize them only from documented stand-age and productive-phase records, with the chosen treatment disclosed. | `osu-currants-gooseberries-production` |
| `boundary_harvest_hand_off` | harvest and farm-gate output | End the default foreground boundary at the declared farm-gate hand-off of marketable fresh fruit. Transport after that hand-off and downstream processing are excluded unless explicitly added as a separate scope. | `fao-codex-fresh-produce-primary-production` |
| `boundary_conditional_conditioning` | washing, grading, packing, and short-term cooling | Include on-farm conditioning, packing, or cooling only when the operator controls the activity and can provide matched activity, output, and waste records; otherwise disclose the activity as outside the foreground boundary. | `fao-codex-fresh-produce-primary-production` |
| `boundary_upstream_inputs` | purchased inputs and services | Represent upstream production of purchased inputs with declared secondary datasets or supplier records and do not double count their upstream activities in the foreground inventory. | `fao-gaps-family-agriculture-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_currant_gooseberry_management` | Managed perennial berry production | required | Include all represented fields or production units for the declared crop year or reporting period. | Managed biological production of currant or gooseberry fruit | Crop-year field roster, area, inputs, stand phase, and net marketable output |
| `p_currant_gooseberry_harvest` | Harvest and field collection | required | Include the operation that removes ripe or marketable fruit from the managed stand and records field losses. | Harvest responsibility and field-to-collected-fruit hand-off | Harvest lots, dates, gross fruit, accepted fruit, and field loss records |
| `p_currant_gooseberry_conditioning` | Primary conditioning, grading, and farm-gate preparation | conditional | Include when fruit is washed, cleaned, graded, sorted, cooled, packed, or otherwise prepared under the foreground operator's control before the farm-gate hand-off. | Raw harvested fruit to declared marketable and downgraded states | Matched incoming, accepted, downgraded, rejected, energy, water, package, and storage records |

### Process: Managed perennial berry production (`p_currant_gooseberry_management`)

#### Inputs

##### Product flows

###### Planting material for the managed berry stand (`planting_material`)

Planting material crosses the production boundary when nursery plants, cuttings, or other propagation material is planted or replaced in the represented currant or gooseberry stand.

- Selected flow: Currant or gooseberry planting material [unmapped]
- Flow property / unit: Mass or count / kg or item, as recorded
- Amount rule: Actual planting or replacement quantity by field and crop year; retain count-to-mass conversion if used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_and_planting_records`
- Sources: `osu-currants-gooseberries-production`

###### Agricultural nutrient and fertilizer inputs (`p_currant_gooseberry_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output, with nutrient totals reported separately
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_and_soil_amendment_records`
- Sources: `fao-gaps-family-agriculture-2007`; `ipcc-2019-managed-soils-n2o`

###### Irrigation water supplied to the managed stand (`irrigation_water`)

Irrigation water crosses the boundary when water is withdrawn or purchased for crop irrigation. The record must identify the source and application method.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or supplier-recorded irrigation water by field and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_water_quality_records`
- Sources: `fao-codex-fresh-produce-primary-production`

###### Crop-protection products used under the declared route (`crop_protection_products`)

Crop-protection products cross the boundary when they are purchased, mixed, applied, or otherwise used for the represented crop cycle. Application timing and pre-harvest interval records are retained.

- Selected flow: Crop-protection product supply [unmapped]
- Flow property / unit: Mass or volume / kg or L active product
- Amount rule: Actual formulation or active-ingredient quantity by application event; retain product identity and dose basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-codex-fresh-produce-primary-production`

###### Mobile machinery fuel for field operations (`mobile_machinery_fuel`)

Fuel is recorded for tractors, sprayers, mowers, harvest aids, and other mobile machinery operated within the declared foreground route.

- Selected flow: Mobile agricultural machinery fuel supply
- Flow property / unit: Energy or mass / MJ, L, or kg fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Metered, invoiced, or contractor-attributed fuel use for represented field operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `fao-gaps-family-agriculture-2007`

##### Waste flows

##### Elementary flows

###### Occupied agricultural land for the managed berry stand (`land_occupation`)

Land occupation is recorded for the area occupied by the managed stand during the declared crop year or reporting period.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2·year or ha·year
- Amount rule: Represented area and occupancy duration for the crop year; include only the declared production area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_and_planting_records`
- Sources: `fao-gaps-family-agriculture-2007`

###### Land transformation for new or replaced berry production area (`land_transformation`)

Land transformation is conditional and is recorded only when a documented land-use conversion or major replacement event occurs in the declared reporting period.

- Selected flow: Land transformation for berry production [unmapped unless the transformation event is resolved]
- Flow property / unit: Area / ha
- Amount rule: Actual converted or replaced area and the declared prior and subsequent land states
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output, with event year disclosed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_and_planting_records`
- Sources: `fao-gaps-family-agriculture-2007`

###### Water resource withdrawal supporting irrigation (`water_resource_withdrawal`)

The natural-resource withdrawal is recorded separately from the irrigation-water product input when the foreground package controls or documents the source withdrawal.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Source withdrawal corresponding to irrigation water supplied to the represented fields, where documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_and_water_quality_records`
- Sources: `fao-codex-fresh-produce-primary-production`

##### Outputs

##### Product flows

###### Fruit biomass ready for harvest (`fruit_ready_for_harvest`)

The managed production process hands off fruit at the declared harvest-ready state to the harvest process. This is an internal product-state exchange and is not the terminal reference product.

- Selected flow: Currant and gooseberry fruit ready for harvest [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Crop-year fruit mass available for harvest, reconciled to harvest records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_and_yield_records`
- Sources: `osu-currants-gooseberries-production`

##### Waste flows

###### Pruning and removed-vegetation residues (`pruning_residues`)

Pruning residues and removed vegetation are recorded according to their actual fate: retained, incorporated, burned, composted, removed, or otherwise treated.

- Selected flow: Berry-stand pruning residues [unmapped]
- Flow property / unit: Mass / kg dry or wet matter, with basis declared
- Amount rule: Measured or estimated residue mass and documented fate by field or production unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_fate_records`
- Sources: `ipcc-2019-managed-soils-n2o`

#### Outputs

##### Elementary flows

###### Direct nitrous oxide emission from managed soils (`soil_nitrous_oxide`)

Direct soil nitrous oxide is recorded when the selected calculation method attributes emissions to nitrogen inputs, residue management, or other managed-soil sources in the crop cycle.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculated from declared nitrogen inputs, residue fate, soil and climate context, and one applicable reviewed method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_and_soil_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Ammonia emission from managed nutrient applications (`ammonia_to_air`)

Ammonia emissions are recorded where the nutrient product, application method, and selected method support an emission estimate.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculated from declared nutrient inputs, product type, application method, timing, and applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_and_soil_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Nitrate loss to water from the production area (`nitrate_to_water`)

Nitrate loss to water is recorded when site conditions and the selected method support a leaching or runoff estimate.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate or kg N, with reporting basis declared
- Amount rule: Calculated from declared nutrient inputs, soil and water conditions, and the applicable leaching or runoff method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_and_soil_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`

### Process: Harvest and field collection (`p_currant_gooseberry_harvest`)

#### Inputs

##### Product flows

###### Fruit biomass at harvest-ready state (`harvest_ready_fruit_input`)

The harvest process receives fruit from the managed production process at the declared harvest-ready state.

- Selected flow: Currant and gooseberry fruit ready for harvest [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Fruit mass entering each harvest lot, reconciled to field and harvest records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_and_yield_records`
- Sources: `osu-currants-gooseberries-production`

##### Waste flows

##### Elementary flows

##### Outputs

##### Product flows

###### Raw harvested currants and gooseberries (`raw_harvested_fruit`)

Raw harvested fruit crosses the harvest boundary when removed from the stand and transferred to primary conditioning or the farm-gate hand-off.

- Selected flow: Raw harvested currants and gooseberries [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed or otherwise documented harvested mass by lot and harvest date
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_yield_records`
- Sources: `osu-currants-gooseberries-production`

##### Waste flows

###### Field and harvest losses (`harvest_losses`)

Fruit not collected because it is unripe, damaged, dropped, or otherwise left in the field is recorded separately from the harvested product.

- Selected flow: Currant and gooseberry harvest losses [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated field and harvest loss by field and crop cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_and_yield_records`
- Sources: `fao-codex-fresh-produce-primary-production`

##### Elementary flows

### Process: Primary conditioning, grading, and farm-gate preparation (`p_currant_gooseberry_conditioning`)

#### Inputs

##### Product flows

###### Raw harvested fruit for conditioning (`conditioning_fruit_input`)

Raw harvested fruit enters this conditional process when the operator performs washing, cleaning, grading, sorting, cooling, packing, or another primary preparation before hand-off.

- Selected flow: Raw harvested currants and gooseberries [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Matched incoming batch mass for each conditioning or packing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch_records`
- Sources: `fao-codex-fresh-produce-primary-production`

###### Process water for washing or conditioning (`conditioning_water`)

Process water is recorded only when washing or another water-using conditioning step occurs within the declared boundary.

- Selected flow: Process water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Metered or batch-attributed water used by the conditioning operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch_records`
- Sources: `fao-codex-fresh-produce-primary-production`

###### Electricity for grading, cooling, or packing (`conditioning_electricity`)

Electricity is recorded for the equipment and short-term cooling operations included in the declared primary-conditioning boundary.

- Selected flow: Electricity supply for primary conditioning
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered or equipment-attributed electricity for matched conditioning batches and included cooling duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-gaps-family-agriculture-2007`

###### Packaging materials and containers for the declared dispatch format (`packaging_materials`)

Packaging is recorded when the foreground operator supplies or controls packages, crates, trays, bags, or other materials used to protect or present the fruit before farm-gate dispatch. The concrete package family must be declared before identity resolution.

- Selected flow: Packaging material for fresh currant and gooseberry dispatch [unmapped]
- Flow property / unit: Mass / kg package material or item count with material mass
- Amount rule: Actual package material by matched product lot and declared reuse or single-use status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch_records`
- Sources: `fao-codex-fresh-produce-primary-production`

##### Waste flows

##### Elementary flows

##### Outputs

##### Product flows

###### Marketable fresh currants and gooseberries at farm gate (`marketable_farm_gate_fruit`)

This is the terminal reference product. It is the fruit that passes the declared market-grade and condition criteria and crosses the farm-gate hand-off.

- Selected flow: Marketable fresh currants and gooseberries at farm gate [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Net accepted output after declared grading, packing, cooling, and loss reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Reference amount of 1 kg net marketable fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_batch_records`
- Sources: `fao-codex-fresh-produce-primary-production`

###### Downgraded fruit transferred for a declared non-fresh use (`downgraded_fruit_coproduct`)

Fruit that fails the fresh-market grade but is intentionally transferred to a documented processor, feed route, or other user is recorded as a conditional product co-product rather than as an unclassified waste.

- Selected flow: Downgraded currants and gooseberries for declared non-fresh use [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented downgraded output by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net marketable fresh fruit output, with co-product allocation disclosed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch_records`
- Sources: `mass-balance-identity`

##### Waste flows

###### Inedible, spoiled, or rejected fruit from conditioning (`conditioning_rejects`)

Fruit that is not sold or transferred as a declared co-product is recorded as waste or residue with its actual fate.

- Selected flow: Fresh berry conditioning rejects and spoiled fruit [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed or calculated rejects by matched conditioning batch and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_batch_records`
- Sources: `mass-balance-identity`

###### Product spoilage during conditional short-term holding (`holding_spoilage`)

Fruit lost during included short-term cooling or holding is recorded separately when a holding step is within the declared foreground boundary.

- Selected flow: Fresh berry short-term holding spoilage [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Recorded spoilage mass by lot and holding period; zero is allowed when the activity is not included
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch_records`
- Sources: `fao-codex-fresh-produce-primary-production`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | managed production, harvest, and conditioning | Prefer separate field, harvest, grading, packing, and cooling records so shared burdens can be assigned to measured product states before applying an allocation rule. | `iso-14044-2006` |
| `allocation_mass_balance` | fruit, downgraded fruit, rejects, and losses | Close the matched fruit mass balance first. Treat a destination with documented intended use and positive transfer as a co-product; treat untransferred or inedible material according to its recorded waste or residue fate. | `mass-balance-identity` |
| `allocation_perennial_output` | shared perennial stand inputs | Allocate shared stand inputs to declared marketable product and documented co-products using the reviewed, disclosed basis for the dataset. Do not substitute an undocumented economic or mass basis. | `iso-14044-2006` |
| `allocation_package_and_cooling` | optional packing and cooling | Attribute package and cooling activity to the matched fruit lot or product state that receives the service; do not spread activity to excluded downstream products. | `fao-codex-fresh-produce-primary-production` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand_and_planting_records` | `p_currant_gooseberry_management` | planting material, land occupation, land transformation | field register, planting invoice, stand map, replacement record | field_id; area; species; cultivar; stand_age; planting_date; replacement_area; prior_land_state; production_system | reconcile field roster and stand records to the declared crop year | ha; years; kg or item | each planting or replacement event; annual roster | complete crop year and stand period | all represented fields and units | sum by field and state; retain establishment or replacement events separately | field map; supplier invoice; stand inventory; land-use record |
| `cp_nutrient_and_soil_amendment_records` | `p_currant_gooseberry_management` | fertilizer and soil-amendment products | purchase record, application log, supplier label, assay, or laboratory result | field_id; product_name; product_mass; application_date; nutrient_N; nutrient_P; nutrient_K; reporting_basis; method | reconcile product records to each application and preserve product-specific nutrient content | kg product; kg N; kg P; kg K | each application | complete crop year | all represented fields and units | sum actual product mass and nutrient totals without merging product identities | invoices; labels; assays; application logs |
| `cp_irrigation_and_water_quality_records` | `p_currant_gooseberry_management` | irrigation water and source withdrawal | meter, pump record, invoice, source register, water-quality record | field_id; source_id; volume; application_date; method; quality_test; withdrawal_volume | match water supply and source withdrawal to fields and crop year | m3 | each irrigation event or meter period | complete crop year | all represented irrigation sources | sum by source and field; preserve measured versus attributed volumes | meter calibration; source permit or register; water-quality test |
| `cp_crop_protection_records` | `p_currant_gooseberry_management` | crop-protection products | application log, product label, invoice, sprayer record | field_id; product_name; formulation; active_ingredient; amount; date; pest_or_disease; method; preharvest_interval | reconcile products and application events to represented fields and harvest lots | kg; L; date | each application | complete crop year | all represented fields and contractors | retain formulation identity and active-ingredient basis; do not combine products | label; calibrated sprayer; application log; harvest interval record |
| `cp_field_energy_records` | `p_currant_gooseberry_management` | mobile machinery fuel | fuel invoice, tank meter, contractor record, equipment log | field_id; operation; equipment; fuel_type; amount; date; contractor_scope | attribute fuel to included field operations using measured or documented contractor records | L; kg; MJ | each refuelling or operation period | complete crop year | all represented field operations | sum by operation and represented field; disclose attribution method | invoices; meter; equipment log; contractor statement |
| `cp_harvest_and_yield_records` | `p_currant_gooseberry_harvest` | harvest-ready fruit, raw harvested fruit, harvest losses | lot ticket, scale, harvest log, field inspection, yield record | field_id; lot_id; cultivar; harvest_date; harvested_mass; accepted_mass; field_loss; grade; destination | reconcile field-level harvest lots to crop-year output | kg | each harvest lot | complete harvest period | all represented fields and units | sum gross, accepted, loss, and destination outputs without double counting | calibrated scale; lot ticket; harvest log; grade record |
| `cp_residue_and_waste_fate_records` | `p_currant_gooseberry_management` | pruning residues and residue fate | pruning log, weigh record, field note, destination record | field_id; residue_type; mass; moisture_basis; date; fate; destination | record removed and retained residues separately and link fate to the field | kg; percent | each removal or management event | complete crop year | all represented fields | retain dry or wet basis and convert only with documented factor | field log; weigh record; destination evidence |
| `cp_conditioning_batch_records` | `p_currant_gooseberry_conditioning` | incoming fruit, water, package, accepted fruit, downgraded fruit, rejects, spoilage | batch ticket, scale, grade sheet, wash record, cooling record, package record | batch_id; incoming_mass; accepted_mass; downgraded_mass; reject_mass; spoilage_mass; water; package; start_end_time; destination | match every conditioning batch to incoming lot, output state, included activity, and destination | kg; m3; item; time | each batch | complete included conditioning period | all included conditioning equipment and lots | close fruit mass balance; preserve each destination and optional operation separately | calibrated scale; grade sheet; water meter; cooling log; package record |
| `cp_conditioning_energy_records` | `p_currant_gooseberry_conditioning` | electricity for grading, packing, and cooling | electricity meter, equipment log, invoice, runtime record | equipment_id; batch_id; kWh; runtime; cooling_duration; allocation_method | match meter or runtime attribution to included batches and equipment | kWh; h | meter period and batch attribution | complete included conditioning period | all included equipment | attribute shared meters by documented runtime or processed mass and disclose method | meter record; calibration; runtime log; allocation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground flows | Normalize each included flow to 1 kg net marketable farm-gate fruit after the crop-year and conditioning mass balances are closed. | crop-year flow amount; net marketable output | amount per kg reference fruit | `mass-balance-identity` |
| `calc_nutrient_content` | fertilizer and soil-amendment products | Product mass × declared nutrient fraction; preserve each product and reporting basis before summing nutrient totals. | product identity; product mass; supplier label or assay; N/P/K basis | kg product and kg N/P/K by source |  |
| `calc_perennial_stand_allocation` | establishment, replacement, and shared stand inputs | Allocate documented establishment or replacement activity over the declared productive period only when stand-age and productive-phase evidence support the treatment; disclose the period and method. | establishment records; replacement records; stand age; productive phase; crop-year output | crop-year allocated amount | `osu-currants-gooseberries-production`; `iso-14044-2006` |
| `calc_managed_soil_emissions` | soil N2O, ammonia, and nitrate loss | Apply one geographically and methodologically applicable reviewed method to declared nutrient inputs, residue fate, soil and water context, and relevant pathways; retain factor provenance and avoid double counting. | nutrient records; residue records; soil and climate data; application method; factors | emissions by pathway and reference output | `ipcc-2019-managed-soils-n2o` |
| `calc_harvest_mass_balance` | managed production and harvest | Gross available fruit = raw harvested fruit + field or harvest losses within declared measurement uncertainty; document any unmeasured remainder. | yield records; harvested mass; field-loss records | reconciled harvest outputs | `mass-balance-identity` |
| `calc_conditioning_mass_balance` | primary conditioning | Incoming fruit = marketable fruit + declared co-product + rejects + spoilage + measured process loss within the stated uncertainty. | batch masses; grade records; destinations; loss records | reconciled conditioning outputs | `mass-balance-identity` |
| `calc_shared_energy_allocation` | conditioning electricity | Attribute shared electricity by measured batch meter, documented runtime, or processed mass, and retain the chosen basis with the batch records. | meter total; runtime or processed mass; batch output | batch electricity per reference output |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and all product-state rows | Confirm currant or gooseberry identity, cultivar or variety, harvested state, grade, production system, and farm-gate hand-off; do not use an unnamed mixed-berry proxy without disclosure. | field register; lot ticket; grade record; sales or hand-off record |
| `dq_temporal_alignment` | all foreground rows | Inputs, harvest, emissions, conditioning, and output records must cover the same declared crop year or reporting period; proxy years and partial seasons must be disclosed. | dated field, application, harvest, meter, and batch records |
| `dq_field_and_site_completeness` | managed production | Enumerate all represented fields, production units, and contributing sites; reconcile included and excluded areas and prevent double counting in aggregation. | field roster; site register; area reconciliation |
| `dq_mass_and_unit_basis` | product, waste, residue, water, and nutrient rows | Retain original measurement units, conversion factors, moisture or nutrient bases, and scale or meter evidence; distinguish zero, not applicable, estimated, and missing. | calibration records; labels; assays; conversion worksheet |
| `dq_input_application_traceability` | nutrient, crop-protection, water, and energy rows | Link each input to field, date, operation, product identity, and contractor scope where applicable; retain application and source-quality evidence. | invoices; labels; application logs; water tests; contractor records |
| `dq_output_and_waste_reconciliation` | harvest and conditioning | Close the fruit mass balance and record every marketable, co-product, reject, spoilage, residue, and loss destination. | scales; batch tickets; grade sheets; destination records |
| `dq_identity_resolution` | parameterized and unmapped flows | Before final TIDAS process publication, resolve each applicable Flow Set reference and each remaining physical exchange to a verified UUID, or retain the exchange as explicitly coverage finding with review evidence. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal product output | Scale the dataset to exactly 1 kg of net marketable fresh currants or gooseberries and declare the product qualifiers required by the reference flow. |  |
| `validation_process_route` | process map | Include managed production and harvest once; include primary conditioning only when its activity and hand-off records are inside the declared boundary; do not duplicate embedded inputs. | `fao-codex-fresh-produce-primary-production` |
| `validation_crop_cycle_reconciliation` | fields, inputs, outputs, and emissions | Confirm that field roster, stand phase, crop inputs, harvest, residues, emissions, and marketable output refer to the same crop year or reporting period. | `fao-gaps-family-agriculture-2007` |
| `validation_nutrient_and_emission_basis` | nutrient and managed-soil emissions | Reconcile actual product and nutrient records, residue fate, selected emission pathways, factors, and reporting bases; disclose pathways not modelled. | `ipcc-2019-managed-soils-n2o` |
| `validation_conditioning_balance` | optional conditioning | Reconcile incoming fruit to marketable fruit, documented co-product, rejects, spoilage, and measured losses within uncertainty. | `mass-balance-identity` |
| `validation_water_and_crop_protection_records` | irrigation and crop protection | Confirm source, application method, water-quality evidence, product identity, application date, and pre-harvest interval or equivalent declaration for included activities. | `fao-codex-fresh-produce-primary-production` |
| `validation_flow_identity` | every flow | Accept only exact verified UUIDs as `fixed` and applicable existing Flow Sets as `parameterized`; otherwise retain unmapped coverage and do not alter the real product boundary, flow type, or direction to force a match. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground fresh currant and gooseberry production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` only after review and publication |
| allowed_use | Farm-gate LCA of fresh currants and gooseberries preserving declared species, cultivar, geography, crop year, production system, stand phase, irrigation, input practice, conditioning, package state, co-product route, and allocation basis |
| excluded_use | Processed, frozen, dried, juiced, fermented, preserved, nursery, retail, consumer-use, or downstream processing datasets; other berry species without a reviewed proxy decision |
| required_metadata | species or product type; cultivar; geography; field and site roster; crop year; stand age or productive phase; production system; area; yield; irrigation source and method; nutrient and crop-protection records; harvest and grade; conditioning, cooling, washing, and packaging status; residue and waste fate; allocation; farm-gate hand-off; identity resolution |
| required_quality_disclosure | field and site coverage; crop-year coverage; proxy and estimated values; missing records; measurement and conversion bases; nutrient and emission methods; water-quality evidence; mass-balance reconciliation; package and cooling inclusions; range or uncertainty findings |
| update_trigger | new reviewed currant or gooseberry production evidence, material route or production-system change, revised managed-soil or crop-protection method, changed Flow Set or UUID identity, changed packaging or conditioning boundary, or representative data outside the declared QA basis |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-codex-fresh-produce-primary-production` | official_guidance | FAO/Codex, Proposed Draft Code of Hygienic Practice for the Primary Production, Harvesting and Packing of Fresh Fruits and Vegetables, https://www.fao.org/4/x8735e/x8735e0n.htm | Primary-production boundary, irrigation and water quality, agricultural chemical records, harvest, packing, traceability, and conditioning controls |
| `fao-gaps-family-agriculture-2007` | extension_guidance | FAO, Guidelines: Good Agricultural Practices for Family Agriculture, 2007, https://www.fao.org/4/a1193e/a1193e00.htm | Crop management, fertilizer and water records, harvest, transport boundary context, and field record expectations |
| `osu-currants-gooseberries-production` | extension_guidance | Oregon State University Extension Service, Growing Berries on the Oregon Coast: Gooseberries, Currants, and Other Minor Berry Crops, https://extension.oregonstate.edu/catalog/em-9182-growing-berries-oregon-coast-gooseberries-currants-other-minor-berry-crops | Currant and gooseberry perennial production, stand establishment, crop development, harvest context, and crop-specific route evidence |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil N2O pathways, nitrogen volatilization and leaching context, residue and nitrogen-balance method disclosure |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | Allocation hierarchy, subdivision preference, and disclosure of allocation basis |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched crop, harvest, and conditioning records | Reference normalization, harvest and conditioning reconciliation, co-product and reject classification |
