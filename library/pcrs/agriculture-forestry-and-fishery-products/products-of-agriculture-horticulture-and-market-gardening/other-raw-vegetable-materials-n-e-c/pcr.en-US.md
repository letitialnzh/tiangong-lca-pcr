---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-raw-vegetable-materials-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other raw vegetable materials, n.e.c.

## 1. Scope and Applicability

This PCR applies to one explicitly named raw vegetable material and one complete, traceable product route. Permitted instances include (a) a named mycoprotein produced by controlled fermentation and recovery, (b) a named konjac tuber produced by cultivation, lifting and optional first conditioning, or (c) named forest-tree seed or seed-bearing cones collected from a declared source and optionally extracted, cleaned, graded or stabilized. One data package shall select exactly one route. Mycoprotein, konjac tubers, forest-tree seeds and cones shall never be combined, averaged or used as proxies for one another.

Choose exactly one gate: harvested or collected raw material, or the same material after its first conditioning. The mycoprotein route includes fermentation and recovery. The konjac route excludes food manufacture, starch or glucomannan extraction and retail packaging. The forest-tree-seed route excludes nursery raising, plantation establishment and timber production. When seed-bearing cones are the reference product, do not also count contained seed as a second reference product.

Controlled fermentation, field cultivation and multi-period seed-source management have different topology, inventory categories, periods and validation needs and are mutually exclusive alternative production routes. Index batch or continuous fermentation by production run or continuous operating period, konjac by field and crop cycle, and forest-tree seed by source, crop year and collection lot.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-raw-vegetable-materials-n-e-c |
| classification_refs | CPC 3.0:01990 |
| covered_products | One named mycoprotein, konjac tuber, forest-tree seed or seed-bearing cone in its declared harvested/collected or first-conditioned state |
| excluded_products | Averages across unlike materials or routes; downstream foods or extracts; nursery plants, plantations and timber products; generic seed without species/provenance; retail-packed products |
| representative_product | One named material with declared species/strain, composition or viability, moisture, grade, lot and gate |
| production_route | Mutually exclusive choice: fermentation → recovery/stabilization; konjac cultivation → lifting/first conditioning; seed-source management → seed/cone collection → extraction/first conditioning |
| market_state | Bulk raw or first-conditioned vegetable material, excluding downstream manufactured goods |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One named raw vegetable material from the selected mutually exclusive route and gate |
| How much | 1 kg net product; forest-tree seed lots may additionally report seed or cone count |
| How well | Declared species or strain, material part/form, composition or viability, moisture, purity/grade, lot, provenance where applicable, and stabilization state |
| How long or cycle | One production run or continuous period for mycoprotein; one crop cycle for konjac; one crop year and collection lot for forest-tree seed, including declared multi-period seed-source burdens |
| reference_flow_link | Reference flow object below; category-level UUID remains unresolved |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Named raw vegetable material at selected gate (UUID unresolved) |
| Reference flow property | Mass (UUID unresolved) |
| Reference unit group | Mass units (UUID unresolved) |
| Reference unit | kg |
| Required qualifiers | route; species or strain; product form; run/field/provenance; gate; moisture; solids or purity/viability; grade; treatment state; geography and time |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | all reference products | Mass; verify the property UUID after product selection | kg | Use net mass and record moisture, solids or purity with it; do not convert to dry matter without measured moisture. |
| route_state | route intermediates and outputs | Mass plus route-specific state property | kg with native state units retained | Retain solids/composition for mycoprotein, fresh state/moisture/damage grade for konjac, and moisture/purity/germination or viability plus supplemental count for tree seed. |
| water_volume | process, irrigation and washing water | Volume, or mass with declared density conversion | m3 | Meter by source and use; rainfall is not a purchased water flow. |
| transport_service | inter-site transport | Mass-distance | t·km | Calculate net transported mass times loaded distance and prevent double counting with own-vehicle fuel. |
| tree_seed_count | forest-tree seed or cone lots | Supplemental count | seed or cone count | Count supplements the mass reference flow as a quality/lot attribute and does not replace the 1 kg reference amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Mycoprotein starts with metered medium inputs; konjac starts with the declared prior field state and propagation input; forest-tree seed starts with the declared seed source and relevant crop year. |
| starting_condition_role | Feedstock producer, grower or seed-source/collection operator for the selected route |
| product_classification_scope | One named CPC 3.0 01990 product instance; the three representative materials cannot be combined |
| recursive_input_rule | Transfer same-category internal intermediates once between adjacent processes; do not also model them as purchased upstream datasets and duplicate foreground outputs. |
| upstream_dataset_requirement | Use verified upstream datasets for purchased medium ingredients, propagation material, water, energy, transport and treatment services; Flow Sets define parameterized scope and never auto-select a concrete flow. |
| disclosure | Declare product and route, site, time, run/field/provenance, incoming and handoff states, treatment steps, all output and reject destinations, and period, co-product and shared-infrastructure attribution. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| route_exclusivity | complete data package | Select one route only. Mycoprotein, konjac and forest-tree seed/cones cannot share a package, be averaged or proxy one another. | unsd-cpc-3-0-01990 |
| route_handoffs | all process nodes | Record incoming state, outgoing state, responsible site and destination for every node; match internal intermediates by mass between adjacent nodes. |  |
| first_conditioning_limit | recovery and first conditioning | Include only recovery, cleaning, extraction, grading, drying or stabilization needed to reach the first declared handoff; exclude later manufacture and packaging. | mycoprotein-production-review-2019; fao-forest-seed-handling-1985 |
| periods_and_assets | multi-period sources and shared equipment | Link seed-source management and shared infrastructure burdens to declared service periods, consuming nodes and outputs exactly once. | fao-forest-seed-handling-1985 |
| reject_route | off-spec, rework and waste material | Route every off-spec state to rework, downgrade, recovery, treatment or disposal; material returned upstream is not counted again as a new input. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fungal_fermentation | Controlled fungal biomass fermentation | conditional | Required only for a named mycoprotein route; exclude it from plant and forest-seed routes. | Managed biological production in batch or continuous fermentation | Net wet fungal biomass transferred to recovery by run |
| fungal_recovery | Mycoprotein recovery and first stabilization | conditional | Required only when the selected product is mycoprotein at the recovered or first-stabilized handoff. | Material treatment and preservation | Net accepted mycoprotein output by run |
| konjac_cultivation | Konjac propagation and cultivation | conditional | Required only for a named konjac-tuber route. | Managed crop production | Harvest-ready konjac tubers by field and crop cycle |
| konjac_harvest_conditioning | Konjac lifting and first conditioning | conditional | Required for the konjac route; washing, drying or stabilization is included only when performed before the selected gate. | Harvest/capture and primary conditioning | Net accepted tubers at the declared fresh or stabilized state |
| tree_seed_source_management | Forest-tree seed-source management | conditional | Required only when managed seed stands, orchards or identified parent trees are inside the forest-tree-seed route. | Multi-period managed biological production | Declared cone or seed crop available for collection by source and year |
| tree_seed_collection | Forest-tree seed or cone collection | conditional | Required only for the forest-tree-seed route; identify whether seed is collected directly or in seed-bearing cones or fruits. | Harvest/capture | Net collected seed or seed-bearing material by source and collection lot |
| tree_seed_conditioning | Forest-tree seed extraction and first conditioning | conditional | Required when cones, fruits or raw seeds are dried, opened, extracted, cleaned, graded or stabilized before the selected handoff. | Primary conditioning, sorting and stabilization | Net accepted forest-tree seed or declared seed-bearing cone product |

### Process: Controlled fungal biomass fermentation (`fungal_fermentation`)

Record this process by the concrete product, run or lot, site and handoff; never merge its inputs or outputs across the three routes.

#### Inputs

##### Product flows

###### Fermentable carbon feedstock (`fermentation_feedstock`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Declared carbohydrate feedstock
- Flow property / unit: kg
- Amount rule: Measured dry feedstock charged to the identified run
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg mycoprotein at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_run`
- Sources: `mycoprotein-production-review-2019`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.5
  - Upper: 8
  - Unit: kg/kg mycoprotein
  - Basis: Per kg accepted mycoprotein; broad run-screening interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen, minerals and process aids in fermentation medium (`fermentation_medium`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Run-specific fermentation medium ingredients
- Flow property / unit: kg
- Amount rule: Record each ingredient and concentration separately; this industrial medium is not an agricultural fertilizer card
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg mycoprotein at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_run`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kg/kg mycoprotein
  - Basis: Per kg accepted mycoprotein; broad run-screening interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fermentation and cleaning water (`fermentation_water`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Process water supplied to fermentation
- Flow property / unit: m3
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Amount rule: Metered water by run, separating medium make-up and cleaning where records permit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per fermentation run then per 1 kg mycoprotein
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_run`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: m3/kg mycoprotein
  - Basis: Per kg accepted mycoprotein; broad screening interval
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fermentation energy carriers and utilities (`fermentation_energy`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Actual electricity, heat and fuel supplied
- Flow property / unit: carrier-specific
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: Metered carrier use for aeration, agitation, sterilization and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per fermentation run then per 1 kg mycoprotein
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_run`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 200
  - Unit: MJ-eq/kg mycoprotein
  - Basis: Carrier-specific values converted only for QA; preserve native exchanges
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

#### Outputs

##### Product flows

###### Wet fungal biomass transferred to recovery (`wet_fungal_biomass`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Route-specific wet fungal biomass
- Flow property / unit: kg
- Amount rule: Measured transfer mass and solids content by run
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per fermentation run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_run`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 20
  - Unit: kg/kg mycoprotein
  - Basis: Wet intermediate per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent broth sent to treatment (`spent_fermentation_broth`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Spent fermentation broth
- Flow property / unit: kg
- Amount rule: Measured discharge excluding recovered fungal biomass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per fermentation run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_run`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg mycoprotein
  - Basis: Per kg accepted output; broad screening interval
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Biogenic carbon dioxide from fermentation (`fermentation_biogenic_co2`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: kg
- Amount rule: Calculate from monitored off-gas or carbon balance; do not use a fossil factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per fermentation run
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_run`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg CO2/kg mycoprotein
  - Basis: Per kg accepted output; carbon-balance QA range
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Mycoprotein recovery and first stabilization (`fungal_recovery`)

Record this process by the concrete product, run or lot, site and handoff; never merge its inputs or outputs across the three routes.

#### Inputs

##### Product flows

###### Wet fungal biomass from fermentation (`wet_biomass_input`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Matched wet fungal biomass intermediate
- Flow property / unit: kg
- Amount rule: Lot-linked mass entering recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per recovery run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fungal_recovery`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 20
  - Unit: kg/kg mycoprotein
  - Basis: Wet biomass input per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovery and washing water (`recovery_water`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Process water supplied to recovery
- Flow property / unit: m3
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Amount rule: Metered water used for washing, cooling or separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per recovery run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fungal_recovery`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: m3/kg mycoprotein
  - Basis: Per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovery and stabilization energy (`recovery_energy`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Actual electricity, heat and fuel supplied
- Flow property / unit: carrier-specific
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: Metered carrier use for separation, heat treatment and chilling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per recovery run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fungal_recovery`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 100
  - Unit: MJ-eq/kg mycoprotein
  - Basis: Per kg accepted output; preserve native carrier records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater treatment service (`wastewater_treatment_fungal`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Actual wastewater-treatment service
- Flow property / unit: m3
- Binding: parameterized
- Flow Set: flow-set.waste-treatment-service
- Flow Set version: 0.2.0
- Amount rule: Record treated volume and treatment route once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per recovery run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fungal_recovery`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: m3/kg mycoprotein
  - Basis: Per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

#### Outputs

##### Product flows

###### Intended output: reference mycoprotein at declared state (`mycoprotein_product`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Named mycoprotein product at declared gate
- Flow property / unit: kg
- Amount rule: Net accepted mass with solids, moisture and stabilization state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fungal_recovery`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Reference product identity check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended recovered fungal product (`fungal_coproduct`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Declared co-product from the recovery run
- Flow property / unit: kg
- Amount rule: Measure each intended product separately with its handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per recovery run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fungal_recovery`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg mycoprotein
  - Basis: Per kg reference output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Recovery rejects and off-spec biomass (`fungal_rejects`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Declared rejected fungal material
- Flow property / unit: kg
- Amount rule: Measure rejected mass and record rework, treatment or disposal path
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per recovery run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fungal_recovery`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg mycoprotein
  - Basis: Per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovery wastewater (`fungal_wastewater`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Wastewater leaving recovery
- Flow property / unit: m3
- Amount rule: Metered discharge before external treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per recovery run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fungal_recovery`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: m3/kg mycoprotein
  - Basis: Per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

### Process: Konjac propagation and cultivation (`konjac_cultivation`)

Record this process by the concrete product, run or lot, site and handoff; never merge its inputs or outputs across the three routes.

#### Inputs

##### Product flows

###### Konjac seed corms or other propagation material (`konjac_propagules`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Declared konjac propagation material
- Flow property / unit: kg
- Amount rule: Measured planting material by lot and field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per crop cycle then per 1 kg tuber
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_field`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kg/kg tuber
  - Basis: Propagation material per kg accepted tuber
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient amendments (`konjac_nutrients`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Actual fertilizer and nutrient-supply products
- Flow property / unit: product-specific
- Binding: parameterized
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set version: 0.3.0
- Amount rule: Record each mineral, organic and amendment product and nutrient composition in this single card
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per field and crop cycle then per 1 kg tuber
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_field`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg product/kg tuber
  - Basis: Combined nutrient products per kg accepted tuber
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`konjac_irrigation`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Irrigation water supplied to the konjac field
- Flow property / unit: m3
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: irrigation-water
- Amount rule: Metered withdrawal by source, field and crop period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per hectare and crop cycle then per 1 kg tuber
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_field`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 15000
  - Unit: m3/ha·crop-cycle
  - Basis: Per hectare and declared crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cultivation energy carriers (`konjac_energy`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Actual electricity and fuels used in cultivation
- Flow property / unit: carrier-specific
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: Metered fuel and electricity by field operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per field and crop cycle then per 1 kg tuber
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_field`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ-eq/kg tuber
  - Basis: Per kg accepted tuber; preserve native carriers
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

#### Outputs

##### Product flows

###### Harvest-ready konjac tubers (`harvest_ready_konjac`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Named konjac tubers at field maturity
- Flow property / unit: kg
- Amount rule: Measured or reconciled tuber mass transferred to harvest
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_konjac_field`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 100
  - Upper: 100000
  - Unit: kg/ha·crop-cycle
  - Basis: Field yield screening range
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Konjac field residues removed from the field (`konjac_field_residue`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Declared removed crop residue
- Flow property / unit: kg
- Amount rule: Measure removed residues; material retained on soil is not a waste output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_field`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg tuber
  - Basis: Removed residue per kg accepted tuber
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct soil nitrous oxide (`konjac_soil_n2o`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Nitrous oxide to air from managed soil
- Flow property / unit: kg N2O
- Amount rule: Calculate from site evidence or declared IPCC method and recorded nitrogen inputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per field and crop cycle
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_konjac_field`
- Sources: `ipcc-2019-managed-soils`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg N2O-N/kg N applied
  - Basis: Direct-emission-factor QA range
  - Basis kind: Nitrogen input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Konjac lifting and first conditioning (`konjac_harvest_conditioning`)

Record this process by the concrete product, run or lot, site and handoff; never merge its inputs or outputs across the three routes.

#### Inputs

##### Product flows

###### Harvest-ready konjac tubers from the field (`konjac_field_batch`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Matched harvest-ready konjac batch
- Flow property / unit: kg
- Amount rule: Lot-linked mass entering lifting and conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per harvest lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_harvest`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg accepted tuber
  - Basis: Incoming field batch per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Konjac washing water (`konjac_conditioning_water`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Process water supplied when washing occurs
- Flow property / unit: m3
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Amount rule: Metered washing water; record zero when washing is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per harvest or conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_harvest`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg accepted tuber
  - Basis: Per kg accepted tuber
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and conditioning energy (`konjac_conditioning_energy`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Actual energy carriers used for lifting, cleaning and stabilization
- Flow property / unit: carrier-specific
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: Metered carrier use by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per harvest or conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_harvest`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 30
  - Unit: MJ-eq/kg accepted tuber
  - Basis: Per kg accepted tuber; preserve native carriers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

#### Outputs

##### Product flows

###### Accepted konjac tubers at declared gate (`konjac_tuber_product`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Named konjac tuber product
- Flow property / unit: kg
- Amount rule: Net accepted mass with moisture, damage grade and conditioning state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_harvest`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Reference product identity check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Saleable lower-grade konjac tubers (`konjac_lower_grade`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Declared lower-grade tuber product
- Flow property / unit: kg
- Amount rule: Measure separately and record destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per harvest lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_harvest`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg accepted tuber
  - Basis: Per kg reference output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected tubers, soil and removed residues (`konjac_rejects`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Declared rejected material from harvest and conditioning
- Flow property / unit: kg
- Amount rule: Measure each reject class and its reuse, treatment or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per harvest lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_konjac_harvest`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg accepted tuber
  - Basis: Per kg accepted tuber
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

### Process: Forest-tree seed-source management (`tree_seed_source_management`)

Record this process by the concrete product, run or lot, site and handoff; never merge its inputs or outputs across the three routes.

#### Inputs

##### Product flows

###### Seed-source management energy (`seed_source_energy`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Actual electricity and fuels used for stand or orchard management
- Flow property / unit: carrier-specific
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: Metered carrier use for pruning, access and source management
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per seed source and crop year then per accepted seed output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_source`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ-eq/kg accepted seed
  - Basis: Per kg accepted seed; preserve native carriers
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

#### Outputs

##### Product flows

###### Collectable seed-bearing crop (`collectable_seed_crop`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Named mature seeds or seed-bearing cones on the declared source
- Flow property / unit: kg
- Amount rule: Estimate or measure crop linked to source, species and crop year
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per source and crop year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tree_seed_source`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/source-year
  - Basis: Source-specific crop estimate
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

### Process: Forest-tree seed or cone collection (`tree_seed_collection`)

Record this process by the concrete product, run or lot, site and handoff; never merge its inputs or outputs across the three routes.

#### Inputs

##### Product flows

###### Mature seed crop at the source (`collectable_seed_input`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Matched mature seed or seed-bearing crop
- Flow property / unit: kg
- Amount rule: Source- and year-linked material entering collection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per collection lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_collection`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg collected material
  - Basis: Available crop per kg collected material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collection energy carriers (`seed_collection_energy`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Actual electricity and fuels used for collection
- Flow property / unit: carrier-specific
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: Metered carrier use by collection lot and method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per collection lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_collection`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ-eq/kg collected material
  - Basis: Per kg collected material; preserve native carriers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

#### Outputs

##### Product flows

###### Collected seeds, cones or seed-bearing fruits (`collected_seed_material`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Named collected forest reproductive material
- Flow property / unit: kg
- Amount rule: Net collected mass, with count or cone number as supplemental data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per collection lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_collection`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg accepted seed product
  - Basis: Collected material per kg final accepted seed product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Incidental biomass removed during collection (`collection_incidental_biomass`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Declared incidental branches, cone scales or fruit material
- Flow property / unit: kg
- Amount rule: Measure material leaving the source; retain-on-site material is not a waste output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per collection lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_collection`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg collected material
  - Basis: Per kg collected material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

### Process: Forest-tree seed extraction and first conditioning (`tree_seed_conditioning`)

Record this process by the concrete product, run or lot, site and handoff; never merge its inputs or outputs across the three routes.

#### Inputs

##### Product flows

###### Raw collected seed-bearing material (`raw_seed_material`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Matched collected seeds, cones or fruits
- Flow property / unit: kg
- Amount rule: Lot-linked input mass and supplemental count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_conditioning`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg accepted product
  - Basis: Raw material per kg accepted seed or cone product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Seed washing or conditioning water (`seed_conditioning_water`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Process water supplied when the declared route uses water
- Flow property / unit: m3
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Amount rule: Metered water; record zero for dry-only conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_conditioning`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg accepted product
  - Basis: Per kg accepted product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Seed extraction and conditioning energy (`seed_conditioning_energy`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Actual electricity, heat and fuels supplied
- Flow property / unit: carrier-specific
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: Metered carrier use for cone opening, drying, extraction, cleaning and grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_conditioning`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: MJ-eq/kg accepted product
  - Basis: Per kg accepted product; preserve native carriers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collection-site to conditioner transport service (`seed_transport_service`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Actual freight transport service
- Flow property / unit: t·km
- Binding: parameterized
- Flow Set: flow-set.transport-service
- Flow Set version: 0.2.0
- Amount rule: Calculate from net transported mass and loaded distance; omit when inside the same site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per conditioning lot
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tree_seed_conditioning`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: t·km/kg accepted product
  - Basis: Per kg accepted product
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.

#### Outputs

##### Product flows

###### Accepted forest-tree seed or seed-bearing cone product (`forest_tree_seed_product`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Named forest-tree reproductive material at declared gate
- Flow property / unit: kg
- Amount rule: Net accepted mass; record species, provenance, purity, germination or viability, moisture and lot count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_conditioning`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Reference product identity check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended seed grades (`tree_seed_lower_grade`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Declared lower or alternate seed grade
- Flow property / unit: kg
- Amount rule: Measure each intended grade and destination separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_conditioning`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference seed product
  - Basis: Per kg reference output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Empty seeds, cone scales, fruit residues and rejected material (`seed_conditioning_rejects`)

Instantiate this card only when the selected concrete route and records require it; retain its run, lot or site linkage.

- Selected flow: Declared conditioning rejects
- Flow property / unit: kg
- Amount rule: Measure each reject class and destination, including any rework loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tree_seed_conditioning`

- Range: Provisional screening and QA range; replace with product-, site-, technology- and gate-specific evidence before review
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg accepted product
  - Basis: Per kg accepted product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No flow of this type is predefined for this route. Add a semantic card and range before including one found in foreground records.



## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| physical_separation_first | all routes | Use run, field, provenance, meter or equipment records for direct partitioning first; allocate only burdens that cannot be directly separated. | iso-14044-2006 |
| intended_output_attribution | multi-output processes | List every intended product and handoff. Where independent economic functions exist, select and disclose mass, physical-causal or economic attribution under the applicable study rule and test sensitivity; do not relabel residues or waste as co-products. | iso-14044-2006 |
| run_period_attribution | fermentation runs, crop cycles and seed crop years | Assign batch cleaning and changeover losses to the relevant run; attribute multi-period konjac propagation, seed-source and shared-infrastructure burdens by recorded service periods and outputs without cross-period duplication. |  |
| rework_burden | rework and downgraded products | Rework retains burdens already incurred and adds actual rework inputs; treat downgraded material as intended output only when it leaves the system with an independent function. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_fermentation_run | fungal_fermentation | fermentation_feedstock; fermentation_medium; fermentation_water; fermentation_energy; wet_fungal_biomass; spent_fermentation_broth; fermentation_biogenic_co2 | meter, ledger, run/lot or site record | identity, run/lot/site, time, quantity, unit, state, destination, meter | collect each raw record and retain traceability | native unit with conversion recorded | each run, collection lot or crop cycle; annual summary minimum | complete representative period producing the reference product | single site or site-separated records | reconcile mass by run/site before reference-flow normalization | meter/weighbridge/invoice/batch record, calibration and missing-data note |
| cp_fungal_recovery | fungal_recovery | wet_biomass_input; recovery_water; recovery_energy; wastewater_treatment_fungal; mycoprotein_product; fungal_coproduct; fungal_rejects; fungal_wastewater | meter, ledger, run/lot or site record | identity, run/lot/site, time, quantity, unit, state, destination, meter | collect each raw record and retain traceability | native unit with conversion recorded | each run, collection lot or crop cycle; annual summary minimum | complete representative period producing the reference product | single site or site-separated records | reconcile mass by run/site before reference-flow normalization | meter/weighbridge/invoice/batch record, calibration and missing-data note |
| cp_konjac_field | konjac_cultivation | konjac_propagules; konjac_nutrients; konjac_irrigation; konjac_energy; harvest_ready_konjac; konjac_field_residue; konjac_soil_n2o | meter, ledger, run/lot or site record | identity, run/lot/site, time, quantity, unit, state, destination, meter | collect each raw record and retain traceability | native unit with conversion recorded | each run, collection lot or crop cycle; annual summary minimum | complete representative period producing the reference product | single site or site-separated records | reconcile mass by run/site before reference-flow normalization | meter/weighbridge/invoice/batch record, calibration and missing-data note |
| cp_konjac_harvest | konjac_harvest_conditioning | konjac_field_batch; konjac_conditioning_water; konjac_conditioning_energy; konjac_tuber_product; konjac_lower_grade; konjac_rejects | meter, ledger, run/lot or site record | identity, run/lot/site, time, quantity, unit, state, destination, meter | collect each raw record and retain traceability | native unit with conversion recorded | each run, collection lot or crop cycle; annual summary minimum | complete representative period producing the reference product | single site or site-separated records | reconcile mass by run/site before reference-flow normalization | meter/weighbridge/invoice/batch record, calibration and missing-data note |
| cp_tree_seed_source | tree_seed_source_management | seed_source_energy; collectable_seed_crop | meter, ledger, run/lot or site record | identity, run/lot/site, time, quantity, unit, state, destination, meter | collect each raw record and retain traceability | native unit with conversion recorded | each run, collection lot or crop cycle; annual summary minimum | complete representative period producing the reference product | single site or site-separated records | reconcile mass by run/site before reference-flow normalization | meter/weighbridge/invoice/batch record, calibration and missing-data note |
| cp_tree_seed_collection | tree_seed_collection | collectable_seed_input; seed_collection_energy; collected_seed_material; collection_incidental_biomass | meter, ledger, run/lot or site record | identity, run/lot/site, time, quantity, unit, state, destination, meter | collect each raw record and retain traceability | native unit with conversion recorded | each run, collection lot or crop cycle; annual summary minimum | complete representative period producing the reference product | single site or site-separated records | reconcile mass by run/site before reference-flow normalization | meter/weighbridge/invoice/batch record, calibration and missing-data note |
| cp_tree_seed_conditioning | tree_seed_conditioning | raw_seed_material; seed_conditioning_water; seed_conditioning_energy; seed_transport_service; forest_tree_seed_product; tree_seed_lower_grade; seed_conditioning_rejects | meter, ledger, run/lot or site record | identity, run/lot/site, time, quantity, unit, state, destination, meter | collect each raw record and retain traceability | native unit with conversion recorded | each run, collection lot or crop cycle; annual summary minimum | complete representative period producing the reference product | single site or site-separated records | reconcile mass by run/site before reference-flow normalization | meter/weighbridge/invoice/batch record, calibration and missing-data note |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_to_reference | all flows | flow after run/site mass reconciliation ÷ net accepted reference-product mass at the same boundary | raw flow amount; net accepted output | exchange per 1 kg reference product |  |
| fermentation_carbon_balance | fermentation route | input carbon = product carbon + co-product carbon + broth carbon + biogenic CO2-C + unexplained difference | feed composition; output composition; broth and off-gas records | carbon balance and biogenic CO2 | mycoprotein-production-review-2019 |
| soil_n2o | konjac cultivation | under the selected IPCC tier, multiply mineral, organic and applicable residue N by corresponding direct factors and convert N2O-N to N2O | N inputs; residue treatment; site factors | direct soil N2O | ipcc-2019-managed-soils |
| transport_tkm | inter-site transport | net transported mass (t) × loaded distance (km) | mass; distance; route | t·km |  |
| tree_seed_yield | forest-tree seed conditioning | net accepted seed mass ÷ raw collected material mass, calculated separately by species, provenance and crop year | raw material; accepted seed; reject-class masses | extraction/conditioning yield and mass balance | fao-forest-seed-handling-1985 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_traceability | reference product and intermediates | Trace species/strain, form, state, lot and site/field/provenance; intermediate identity agrees across adjacent processes. | batch record, field record, collection label, test report |
| temporal_coverage | production period | Cover the complete run, crop cycle or seed crop year producing the reference product; disclose seasonal and abnormal periods separately. | timestamped records and production calendar |
| completeness | inputs and outputs | Every card has a measured value or justified zero; quantify mass-balance difference and any missing-data substitution. | mass balance and missing-data register |
| instrument_quality | metering and testing | Retain instrument identity, calibration/check status, sampling method, detection limit and unit conversion. | calibration certificate, laboratory or field record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| one_route_one_product | product identity and process map | Exactly one named product and route is selected; no process card from another mutually exclusive route may appear. | unsd-cpc-3-0-01990 |
| range_review | all flow cards | Every card requires a range; candidate reasoned estimates are screening values and must be replaced or confirmed with product-, site-, technology- and gate-specific evidence before reviewed/active status. |  |
| mass_reconciliation | each process node | Reconcile inputs, intermediates, accepted product, co-products, rejects, waste and moisture change by run, field or collection lot and disclose unexplained differences. |  |
| parameterized_binding | Flow Set cards | Expand each parameterized card to verified concrete flows from foreground records and retain Flow Set version and selection evidence; do not attach a fixed UUID to the card. |  |
| nutrient_consolidation | konjac cultivation | Use at most one consolidated nutrient card in this process, set-level only with flow-set.agricultural-nutrient-supply v0.3.0; do not misclassify fermentation medium or seed-source management as agricultural fertilizer cards. |  |
| output_and_reject_paths | multiple outputs and rejected states | Every intended product, off-spec output, rework, residue and waste has one handoff or disposal path; the reference product cannot be counted at two gates. |  |
| period_and_shared_asset | period and shared infrastructure | Service period, consuming nodes, attribution method and evidence are complete, replacement or termination events are recorded, and no burden is duplicated. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for one named raw vegetable-material route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Use in a process or lifecycle model when product, route, gate, geography, time and quality state match the application. |
| excluded_use | Category averaging, cross-route proxies, unverified substitution for downstream processing, and automatic publication with unresolved concrete flows. |
| required_metadata | product and route; species/strain; run/field/provenance; gate; moisture and quality metrics; geography and time; technology; yield; attribution; Flow Set expansion evidence; missing data |
| required_quality_disclosure | coverage period, representativeness, mass balance, instruments and calibration, substituted data, unresolved UUIDs, reasoned-estimate ranges and sensitivity |
| update_trigger | Material change in product, route, gate, technology, source, yield, attribution, Flow Set version or important range. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-3-0-01990 | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, subclass 01990 | classification boundary and representative products |
| mycoprotein-production-review-2019 | literature | Finnigan et al. (2019), Mycoprotein: the future of nutritious nonmeat protein, Current Opinion in Food Science 28, 7-13, DOI 10.1016/j.cofs.2019.02.010 | mycoprotein fermentation, recovery and product-state decomposition |
| fao-forest-seed-handling-1985 | handbook | FAO Forestry Paper 20/2, A Guide to Forest Seed Handling, 1985 | seed source, collection, cone/fruit handling, extraction, cleaning, grading, pre-storage stabilization and seed quality |
| ipcc-2019-managed-soils | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11 | direct managed-soil N2O calculation for konjac cultivation |
| iso-14044-2006 | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation avoidance, hierarchy and disclosure |
