---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-sugar-crops-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other sugar crops n.e.c.

## 1. Scope and Applicability

This PCR covers farm-produced sugar maple sap, sweet-purpose sorghum stalks, and stevia leaves at one declared crop-specific harvest or primary-conditioning hand-off. A dataset shall select exactly one species, plant part, intended crop purpose, market state, and hand-off. The three alternatives share a mass-based reference amount only; their exchanges, yields, routes, and environmental burdens shall never be aggregated into one inventory.

Include establishment and management attributable to the declared production period, field or sugarbush operations, harvest or sap collection, and only the primary conditioning needed to reach the declared hand-off. For stevia, declare fresh or dried leaves; this PCR's worked route and ranges use dried leaves. Exclude sugar or sweetener extraction, maple syrup concentration, sorghum juice extraction or fermentation, steviol-glycoside extraction/refinement, and all later manufacture. A different species or product state needs its own foreground record and evidence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-sugar-crops-n-e-c` |
| classification_refs | `CPC 3.0: 01809` (unmapped; classification is a discovery reference, not permission to mix products) |
| covered_products | Raw sugar maple sap; stalks from sweet-purpose sorghum; fresh or dried stevia leaves, each in a separate dataset |
| excluded_products | Ordinary sorghum grain or seed; sugar, syrup, extracted juice, fermented products, refined steviol glycosides, and mixed-crop inventories |
| representative_product | One declared crop branch and one declared market state per dataset |
| production_route | Managed perennial sugarbush with tapping and sap collection; annual sweet sorghum cultivation and stalk harvest; or managed stevia leaf cultivation, harvest, and declared fresh/dried conditioning |
| market_state | Unprocessed sap, harvested stalk, or harvested/primary-conditioned leaf, at a declared hand-off and moisture state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One crop-specific raw output: sugar maple sap, sweet-purpose sorghum stalk, or stevia leaf; select one only |
| How much | 1 kg of the selected output at its declared hand-off; retain the crop, plant part, moisture, and market-state qualifiers |
| How well | Identify species/cultivar where known, crop purpose, harvest or tapping method, moisture/state, grade, and destination |
| How long or cycle | One declared tap season for maple; one crop cycle for sorghum; one harvest cycle or declared multi-cut season for stevia |
| reference_flow_link | Product identity is unresolved; no verified UUID. Do not substitute sorghum grain, syrup, sugar, or sweetener flows. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Route-specific harvested product listed above; UUID unresolved |
| Reference flow property | Mass |
| Reference unit group | Mass unit group; UUID unresolved |
| Reference unit | kg |
| Required qualifiers | Exactly one crop branch; species/cultivar; plant part; intended sugar-crop purpose; fresh/dried state and moisture; geography; production period; crop-specific hand-off; grade; allocation and multi-period treatment |
| Binding | Omit; exact reference product UUID is unresolved |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | all branches | Mass | kg | Weigh net selected product at the declared hand-off; record moisture and any conversion from volume. Do not sum unlike crop products. |
| `measure_maple_season` | maple | Mass; area; time | kg; ha; tap-season | Record taps, collection dates, gross sap volume or mass, losses, density basis if converted, and productive stand area. |
| `measure_sorghum_stalk` | sweet sorghum | Mass; area | kg; ha | Weigh stalks at harvest before juice extraction; report cultivar, harvest stage, moisture, stalk area, and any separately marketed grain. |
| `measure_stevia_leaf` | stevia | Mass; area; moisture | kg; ha; mass fraction | Weigh fresh leaf and dried leaf separately when drying occurs; disclose moisture and dry-matter conversion. |
| `measure_inputs` | all branches | flow-specific | kg, m3, kWh, plant, or recorded unit | Retain purchased/applied quantity and functional identity; preserve seed mass, live-plant count, water volume, and energy carrier as distinct measurements. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Crop-specific planted or established productive stand, with establishment burdens included or explicitly linked and amortized over represented production periods |
| starting_condition_role | Managed biological production before harvest or tapping |
| product_classification_scope | Raw sugar-crop output at the declared farm or primary-conditioning hand-off; no downstream sweetener manufacture |
| recursive_input_rule | Purchased seed, nursery trees, cuttings, and other propagation stock are distinct upstream product inputs; never treat the harvested reference output as its own planting input. |
| upstream_dataset_requirement | Match crop identity, planting-stock type, location, period, and gate; if stand establishment predates the dataset, report whether its burden is included, excluded, or represented by an audited linked dataset. |
| disclosure | Report branch, stand/crop phase, hand-off, moisture, included operations, optional operations, shared assets, and unresolved flow identities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_single_branch` | dataset | Select exactly one of maple sap, sweet-purpose sorghum stalk, or stevia leaves and one product state; a combined inventory is nonconforming. | `src_unsd_cpc01809`; `src_fao_sugar_crops` |
| `boundary_maple` | maple | Include stand management, tapping, collection, and farm-side handling through raw sap hand-off; exclude sap concentration and syrup making. | `src_unsd_cpc01809`; `src_umaine_maple_2025` |
| `boundary_sorghum` | sweet sorghum | Include crop management and stalk harvest for sugar purpose; keep grain harvest and stalk juice extraction outside this product inventory unless a separately measured co-product leaves the same process. | `src_fao_sweet_sorghum_cultivation`; `src_fao_sweet_sorghum_harvest`; `src_fao_sugar_crops` |
| `boundary_stevia` | stevia | Include managed leaf production, harvest, and declared leaf stabilization/primary conditioning; exclude steviol-glycoside extraction, purification, and formulation. | `src_ukys_stevia`; `src_jecfa_stevia` |
| `boundary_period` | perennial or multi-cut production | Attribute establishment, maintenance, replacement, productive harvests, and termination to declared periods; preserve the chosen method and prevent double attribution. | `src_umaine_maple_2025`; `src_sweet_project_stevia_lca` |
| `boundary_shared_assets` | shared farm assets | Allocate shared machinery, roads, drying structures, and labor by a measured use driver; disclose the driver and avoid duplicate assignment. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `maple_sap_route` | Sugar maple stand management, tapping, and raw sap collection | conditional | Use only when the selected product is sugar maple sap from *Acer saccharum*. | Managed perennial production and resource removal | kg raw sap per declared tap-season and 1 kg reference flow |
| `sweet_sorghum_stalk_route` | Sweet-purpose sorghum cultivation and stalk harvest | conditional | Use only when the selected product is stalks from sorghum grown for sugar or syrup feedstock. | Annual crop production and harvest capture | kg harvested stalk per crop cycle and 1 kg reference flow |
| `stevia_dried_leaf_route` | Stevia cultivation, leaf harvest, and farm drying | conditional | Use only for *Stevia rebaudiana* leaves declared as dried at the hand-off. Fresh-leaf datasets must declare a distinct state and omit drying. | Managed leaf production, harvest, and primary stabilization | kg dried leaves per harvest cycle and 1 kg reference flow |

### Process: Sugar maple stand management, tapping, and raw sap collection (`maple_sap_route`)

#### Inputs

##### Product flows

###### Maple establishment and replacement stock (`maple_planting_stock`)
Record nursery trees used to establish or replace the represented sugarbush. Retain tree counts and productive stand period; UUID unresolved.
- Selected flow: Sugar maple nursery tree / planting stock (UUID unresolved)
- Flow property / unit: Number of items / plant
- Amount rule: Record planted and replacement trees by stand and period; allocate establishment stock across the declared productive tap-seasons.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tap-season and per kg raw sap
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maple_field_records`
- Sources: `src_umaine_maple_2025`
- Range: Provisional stand-stock allocation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: plant-equivalent/tap-season
  - Basis: provisional replacement-stock allocation per productive tap-season; replace with stand census and lifespan records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient supply (`maple_nutrient_supply`)
This conditional umbrella card covers all mineral fertilizer, organic fertilizer, and nutrient amendments actually used in the sugarbush; foreground records determine the concrete exchanges.
- Selected flow: Agricultural fertilizer and nutrient supply
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum actual fertilizer and nutrient-amendment product masses for this process; preserve product and nutrient composition in the generated dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw sap and per tap-season
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maple_field_records`
- Sources: `src_umaine_maple_2025`
- Range: Provisional nutrient-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg fertilizer product/kg raw sap
  - Basis: broad conditional screen; not a default application rate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`maple_irrigation_water`)
Include only when irrigation is applied to the represented stand; do not count collected sap as irrigation or process water.
- Selected flow: Irrigation water supply
- Flow property / unit: Mass or volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Record metered or otherwise measured irrigation volume; report zero when none is applied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw sap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maple_field_records`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg raw sap
  - Basis: conditional stand-irrigation volume; zero is valid for rain-fed sugarbushes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field and tapping energy (`maple_energy_supply`)
Capture purchased or on-site fuel and electricity used for stand care, tapping equipment, and sap collection; do not include syrup concentration.
- Selected flow: Energy carrier supply for field and collection operations
- Flow property / unit: Energy / kWh
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record carrier-specific fuel and electricity consumption for this route and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw sap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maple_field_records`
- Range: Provisional collection-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg raw sap
  - Basis: broad screening interval for tapping and collection only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw sugar maple sap (`maple_sap_output`)
Weigh or measure raw sap as collected before concentration or syrup production; UUID unresolved.
- Selected flow: Sugar maple sap at raw collection hand-off (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record accepted raw sap output by tap-season; normalize inventory exchanges to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw sap
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maple_field_records`
- Sources: `src_umaine_maple_2025`
- Range: Published full-season sap yield per tap (approximate mass conversion)
  - Range role: Typical range (`typical_range`)
  - Lower: 18.9
  - Upper: 56.8
  - Unit: kg sap/tap-season
  - Basis: UMaine reports 5–15 US gallons per tap for a full season; approximate 1 kg/L conversion for screening only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `src_umaine_maple_2025`

### Process: Sweet-purpose sorghum cultivation and stalk harvest (`sweet_sorghum_stalk_route`)

#### Inputs

##### Product flows

###### Sweet sorghum seed (`sorghum_seed_input`)
Record purchased or retained seed sown for the declared sugar-purpose crop. Do not substitute harvested grain as the reference output; UUID unresolved.
- Selected flow: Sweet-purpose sorghum seed for planting (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record seed mass sown and viable stand established; retain cultivar and planting rate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested sweet sorghum stalk
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorghum_field_records`
- Sources: `src_fao_sweet_sorghum_cultivation`
- Range: Provisional planting-seed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg seed/kg harvested stalk
  - Basis: broad first-pass screen; replace with seed invoices and sowing records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient supply (`sorghum_nutrient_supply`)
This conditional umbrella card covers all mineral fertilizer, organic fertilizer, and nutrient amendments actually used in this crop process.
- Selected flow: Agricultural fertilizer and nutrient supply
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum actual fertilizer and nutrient-amendment product masses; preserve product identity and nutrient composition in the generated dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested stalk
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorghum_field_records`
- Sources: `src_fao_sweet_sorghum_cultivation`
- Range: Provisional nutrient-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg fertilizer product/kg harvested stalk
  - Basis: broad conditional screen, not a default application rate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`sorghum_irrigation_water`)
Record irrigation only; rainfed water is not an inventory input.
- Selected flow: Irrigation water supply
- Flow property / unit: Mass or volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Record metered or measured irrigation volume for the crop area and cycle; report zero for rainfed fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested stalk
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorghum_field_records`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: m3/kg harvested stalk
  - Basis: broad conditional estimate; replace with field meter or irrigation schedule
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field and harvest energy (`sorghum_energy_supply`)
Record fuel and electricity for field operations and stalk harvest; exclude downstream juice extraction.
- Selected flow: Energy carrier supply for field and harvest operations
- Flow property / unit: Energy / kWh
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record carrier-specific consumption for the route and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg harvested stalk
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorghum_field_records`
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg harvested stalk
  - Basis: broad screening interval for cultivation and harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`sorghum_crop_protection`)
If applied, record each actual formulation and application separately in the data package; this umbrella card does not authorize UUID selection. Identity UUID unresolved.
- Selected flow: Crop-protection product applied to sweet sorghum (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record product mass applied by active ingredient, formulation, target, and date; record zero when none is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested stalk
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorghum_field_records`
- Range: Provisional crop-protection screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg formulated product/kg harvested stalk
  - Basis: broad conditional screen, not a recommended application rate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sweet-purpose sorghum stalks (`sorghum_stalk_output`)
Weigh harvested stalks at the crop hand-off before pressing or juice extraction. The range is a published trial interval and does not represent all cultivars or regions; UUID unresolved.
- Selected flow: Sweet-purpose sorghum stalk at harvest (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record accepted stalk mass and moisture by crop cycle; normalize exchanges to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested stalk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorghum_field_records`
- Sources: `src_fao_sweet_sorghum_cultivation`; `src_fao_sweet_sorghum_harvest`
- Range: FAO reported fresh-stalk field-trial yields
  - Range role: Typical range (`typical_range`)
  - Lower: 33750
  - Upper: 52103
  - Unit: kg fresh stalk/ha
  - Basis: cultivar and planting-date trial yields; retain local site yield as foreground data
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `src_fao_sweet_sorghum_cultivation`

### Process: Stevia cultivation, leaf harvest, and farm drying (`stevia_dried_leaf_route`)

#### Inputs

##### Product flows

###### Stevia planting material (`stevia_planting_material`)
Record the actual seedling or vegetative planting stock form used and its replacement rate. UUID unresolved.
- Selected flow: Stevia nursery plant or rooted cutting (UUID unresolved)
- Flow property / unit: Number of items / plant
- Amount rule: Record plants established and replacements by field and harvest cycle; allocate establishment stock over the represented productive period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried leaves and per establishment/harvest cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stevia_field_records`
- Sources: `src_sweet_project_stevia_lca`
- Range: Published planting density and first-year dried-leaf yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 35
  - Unit: plant-equivalent/kg dried leaves
  - Basis: approximately 60,000–70,000 plants/ha and 2,000 kg dried leaves/ha in one Greek production case; not a universal planting rate
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `src_sweet_project_stevia_lca`

###### Consolidated fertilizer and nutrient supply (`stevia_nutrient_supply`)
This conditional umbrella card covers all mineral fertilizer, organic fertilizer, and nutrient amendments used in the stevia field; foreground records determine concrete exchanges.
- Selected flow: Agricultural fertilizer and nutrient supply
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum actual fertilizer and nutrient-amendment product masses; retain nutrient analysis in the generated dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried leaves
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stevia_field_records`
- Sources: `src_ukys_stevia`
- Range: Provisional nutrient-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg fertilizer product/kg dried leaves
  - Basis: broad conditional screen; replace with application records and nutrient analysis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`stevia_irrigation_water`)
Record irrigation only; report rainfall separately as a site condition, not as a purchased product input.
- Selected flow: Irrigation water supply
- Flow property / unit: Mass or volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Record metered or measured irrigation volume by field and cycle; report zero when no irrigation is applied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried leaves
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stevia_field_records`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: m3/kg dried leaves
  - Basis: broad conditional estimate; replace with field water records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field and drying energy (`stevia_energy_supply`)
Include field machinery and farm drying energy only when used; report drying technology and inlet/outlet moisture.
- Selected flow: Energy carrier supply for field and leaf drying
- Flow property / unit: Energy / kWh
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Record carrier-specific field and drying energy by harvest batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried leaves
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stevia_field_records`
- Range: Provisional field and drying-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg dried leaves
  - Basis: broad screening estimate spanning low-energy sun drying and mechanical drying; replace with metered carrier data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`stevia_crop_protection`)
If used, record the actual crop-protection formulation and application; no generic UUID is assigned.
- Selected flow: Crop-protection product applied to stevia (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record product mass, formulation, active ingredient, target, date, and treated area; report zero when unused.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried leaves
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stevia_field_records`
- Range: Provisional crop-protection screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg formulated product/kg dried leaves
  - Basis: broad conditional screen, not a recommended application rate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried stevia leaves (`stevia_leaf_output`)
Record leaf mass at the declared dried-leaf hand-off and retain moisture and drying loss records. This regional case range is not transferable as a universal yield; UUID unresolved.
- Selected flow: Dried Stevia rebaudiana leaves at farm hand-off (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record accepted dry-leaf mass, residual moisture, and grade by harvest cycle; normalize exchanges to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried leaves
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stevia_field_records`
- Sources: `src_sweet_project_stevia_lca`; `src_ukys_stevia`
- Range: Reported Greek field-case dried-leaf yields
  - Range role: Typical range (`typical_range`)
  - Lower: 2000
  - Upper: 4000
  - Unit: kg dried leaves/ha
  - Basis: one first-year and multi-year cooperative field case; retain local cultivar, year, and harvest count
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `src_sweet_project_stevia_lca`

## 7. Allocation and Co-product Handling

Inventory one crop branch only. If one stand or field produces multiple intended products in the declared period, first test subdivision by field, operation, harvest, or lot. If subdivision is not feasible, choose and justify a physical or economic allocation driver consistent with the question, document all products and hand-offs, and test a material alternative. Maple timber, sorghum grain, and stevia stems are co-products only when they are intentionally harvested and leave the process as useful products. Leaves, tops, roots, weeds, rejected material, sap leakage, and field losses are residues or waste unless a real use and hand-off are documented. Record multi-year assets and shared equipment once, allocate them by measured productive area, use, tap-season, or machine time, and prevent duplicate attribution across periods or outputs.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_maple_field_records` | `maple_sap_route` | stand stock; nutrient products; irrigation; energy; raw sap | stand, purchase, application, meter, and production records | species; stand_id; trees_planted; replacements; taps; tap_dates; sap_mass_or_volume; density_basis; nutrients; irrigation; fuel; electricity; area; losses; co_products; gate | reconcile invoices, stand maps, meters, tapping log, and calibrated scale | plant; kg; m3; kWh; ha | each operation and each tap season | complete represented tap season | each represented sugarbush | aggregate by stand and tap-season; annualize establishment over declared productive periods | supplier records; field maps; calibrated scale and meter checks |
| `cp_sorghum_field_records` | `sweet_sorghum_stalk_route` | seed; nutrient products; irrigation; energy; crop protection; stalk output | seed, field-operation, application, meter, and harvest records | cultivar; crop_purpose; seed_mass; area; sowing_date; fertilizer_product; nutrient_analysis; irrigation; fuel; electricity; pesticide; harvest_date; stalk_mass; moisture; grain; residues; rejects; gate | reconcile invoices, field log, meters, application records, and calibrated harvest scale | kg; m3; kWh; ha; mass fraction | each operation and crop cycle | complete represented crop cycle | each represented field | aggregate by field and crop cycle; retain grain and stalk quantities separately | seed labels; invoices; application log; calibrated scale; meter records |
| `cp_stevia_field_records` | `stevia_dried_leaf_route` | planting stock; nutrient products; irrigation; energy; crop protection; dry leaves | planting, field-operation, application, meter, drying-batch, and production records | cultivar; planting_stock_type; plants; replacements; area; harvest_dates; fertilizer_product; nutrient_analysis; irrigation; fuel; electricity; pesticide; fresh_leaf_mass; dried_leaf_mass; moisture; drying_loss; residues; gate | reconcile field book, invoices, meters, dryer log, and calibrated scales | plant; kg; m3; kWh; ha; mass fraction | each operation and each harvest/drying batch | complete represented harvest and drying cycle | each represented field and dryer | sum accepted dry leaves by harvest cycle; reconcile fresh input, dry output, moisture, rejects, and residues | planting invoice; application log; calibrated scales; moisture test; dryer meter |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_maple_sap_mass` | maple | Convert sap volume to mass only with measured density or a disclosed screening conversion; retain raw volume. | volume; density; tap-season | kg raw sap | `src_umaine_maple_2025` |
| `calc_sorghum_yield` | sweet sorghum | Divide accepted stalk mass by measured crop area only for area-yield comparison; do not infer stalk mass from grain yield. | stalk mass; area; moisture | kg/ha and kg reference flow | `src_fao_sweet_sorghum_cultivation`; `src_fao_sweet_sorghum_harvest` |
| `calc_stevia_dry_matter` | stevia | Report fresh and dried leaf masses separately; calculate dry matter only from measured moisture and preserve drying losses. | fresh mass; dried mass; moisture | kg dried leaf and dry-matter fraction | `src_ukys_stevia` |
| `calc_period_share` | perennial and multi-cut routes | Allocate stand establishment and shared assets across recorded productive periods using a declared lifetime/output or measured-use driver; do not count the same asset in multiple periods. | establishment; productive years; period output; asset use | period-specific attributed inventory | `src_umaine_maple_2025`; `src_sweet_project_stevia_lca` |
| `calc_soil_emissions` | managed fields | If direct soil emissions are modelled, calculate them from reported nitrogen inputs, climate/soil conditions, and a declared inventory method; disclose factor and uncertainty. This PCR does not assign an unverified emission UUID or universal factor. | nitrogen application; soil and climate data; selected method | method-specific direct soil emissions | `src_ipcc_managed_soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_route_identity` | all datasets | Name one crop, species, plant part, purpose, market state, and hand-off; no unlike route mixing. | field map, crop records, product description, and scale records |
| `quality_product_state` | all datasets | Report moisture, grade, rejected material, and mass basis; distinguish fresh, dried, and processed states. | calibrated scale, moisture test, sorting and batch records |
| `quality_inputs` | all datasets | Reconcile seeds/stock, nutrient products, water, energy, and crop-protection applications to invoices, meters, and field logs; zero use must be explicit. | purchase records, application logs, field book, meters |
| `quality_range` | all datasets | Compare each foreground amount with its card range; explain outliers and replace provisional estimates with local primary data. Ranges are screens, not allowed values. | range-check table, source or reasoned-estimate trace, corrective note |
| `quality_attribution` | shared and perennial systems | Disclose period and co-product allocation, asset-use driver, and sensitivity for material choices. | allocation worksheet and output hand-offs |

## 9. Validation Rules

- `validate_single_branch`: Exactly one route, species, plant part, intended purpose, product state, and hand-off are present for each dataset.
- `validate_reference_identity`: Keep the reference product UUID blank until an exact raw product identity and mass property/unit group are confirmed; never use grain, syrup, sugar, or extracted sweetener as a proxy.
- `validate_process_chain`: Match the selected route to its establishment/management, harvest or tapping, and declared primary-conditioning records; omit downstream extraction and manufacture.
- `validate_mass_and_moisture`: Reconcile harvested or collected mass, fresh/dry mass, moisture, losses, rejects, and coproducts; no double counting.
- `validate_flow_set_binding`: In every process, permit at most one consolidated `flow-set.agricultural-nutrient-supply@0.3.0` input card with no group; use `flow-set.energy-supply@0.2.0` at set level; bind irrigation only to `flow-set.water-use@0.2.0` group `irrigation-water`.
- `validate_uuid_resolution`: Before a final generated exchange, expand each parameterized card from actual records and verify a concrete compatible UUID, property, and unit. Resolve uncovered inputs and outputs independently; retain unresolved identities in this candidate.
- `validate_period_allocation`: Reconcile establishment, production, replacements, repeated cuts/tapping, and termination; prevent an asset or field burden from being attributed twice.
- `validate_coproduct_and_reject`: Trace each intended coproduct, downgraded product, rework, residue, and waste to one destination; rejected material is not accepted reference output.
- `validate_extraction_exclusion`: Reject syrup concentration, sorghum juice/sweetener extraction or fermentation, and steviol-glycoside extraction/refinement from the declared boundary.
- `validate_range_and_quality`: Check every card range, unit, basis, source scope, and foreground value; investigate exceedances without treating provisional ranges as conformance limits.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dataset for one raw sugar-crop product at its declared farm or primary-conditioning hand-off |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness and identity review |
| allowed_use | Crop-specific supply modelling with aligned species, part, purpose, market state, moisture, route, period, gate, and attribution |
| excluded_use | Product comparisons that mix routes or states; syrup, sugar, extracted juice, fermented products, purified sweetener, or downstream manufacture |
| required_metadata | crop branch; species/cultivar; plant part; purpose; geography; period; route; establishment/stand phase; area; harvest/tapping pattern; product mass; moisture; grade; hand-off; inputs; shared assets; allocation; unresolved identities |
| required_quality_disclosure | primary-data share; UUID gaps; moisture and mass balance; range exceedances; provisional ranges; period and co-product attribution; field emissions method; source geography and technology limits |
| update_trigger | verified reference UUID; new source-backed route/range evidence; changed product state, crop, gate, technology, Flow Set version, or attribution method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `src_unsd_cpc01809` | official_guidance | UNSD CPC 2.1, 01809, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/01809 | Listed crop examples and category boundary evidence |
| `src_fao_sweet_sorghum_cultivation` | official_guidance | FAO, Sweet sorghum cultivation, https://www.fao.org/4/t4470e/t4470e05.htm | Sorghum crop route and reported stalk trial yields |
| `src_fao_sweet_sorghum_harvest` | official_guidance | FAO, Sweet sorghum harvest stage, https://www.fao.org/4/t4470e/t4470e07.htm | Harvest timing and stalk sugar-content variability |
| `src_fao_sugar_crops` | official_guidance | FAO, sugar-crop purpose distinctions, https://www.fao.org/4/x9892e/X9892e06.htm | Distinguishing sugar-purpose sorghum from grain purpose |
| `src_umaine_maple_2025` | official_guidance | University of Maine Cooperative Extension, Maple syrup production for the beginner, updated 2025, https://extension.umaine.edu/publications/7036e/ | Tapping, collection, seasonal yield and sugarbush records |
| `src_ukys_stevia` | official_guidance | University of Kentucky Center for Crop Diversification, Stevia, https://ccd.uky.edu/sites/default/files/2024-11/ccd-cp-055_stevia.pdf | Stevia harvest, leaf handling, drying, and moisture records |
| `src_jecfa_stevia` | standard | FAO/JECFA, Steviol glycosides monograph, https://www.fao.org/fileadmin/templates/agns/pdf/jecfa/cta/63/Steviol.pdf | Boundary distinction between harvested leaves and extracted sweetener |
| `src_sweet_project_stevia_lca` | literature | SWEET project stevia cultivation and LCA case, https://pmc.ncbi.nlm.nih.gov/articles/PMC9839952/ | Region-specific planting density and dried-leaf yield case; not universal |
| `src_ipcc_managed_soils` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil nitrogen-emission method inputs and uncertainty disclosure |
