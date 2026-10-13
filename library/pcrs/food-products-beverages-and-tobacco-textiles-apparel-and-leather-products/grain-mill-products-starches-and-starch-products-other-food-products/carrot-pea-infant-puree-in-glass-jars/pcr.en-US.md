---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.carrot-pea-infant-puree-in-glass-jars
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Carrot-pea infant puree in glass jars

## 1. Scope and Applicability

This PCR covers one specific representative composite food: smooth carrot-pea infant puree formulated with rice flour, food-grade rapeseed oil and water, packed in sealed glass jars. The selected manufacturing route starts with fresh carrots and shelled green peas, cooks and mechanically homogenizes the formulation, fills and seals jars, then applies an in-container cascading-water retort followed by cooling and release. It applies only to a factory-documented low-acid formulation and that route. HiPP GB4082 establishes a real product family and ingredient combination; Steriflow separately establishes a feasible jar-retort route. Neither establishes a universal recipe or the actual HiPP factory route. (`hipp-carrot-pea`, `steriflow-baby-retort`, `codex-canning`)

CPC 23991 is broader than this scope. Meat, fruit, nut and milk preparations, dry infant cereals, other starch or malt preparations, other composite recipes, frozen or chilled purees, pouches, aseptic filling and acidified routes remain uncovered. The existing fruit/nut puree PCR does not cover this vegetable-cereal composite. This is a manufacturing data rule, not a feeding recommendation, nutritional equivalence claim or food-safety approval.

CXS 73-1981 (amended through2023), section1, distinguishes weaning foods from CXS72 infant formulas and CXS74 processed cereal-based foods; section3.2 describes ready-to-eat foods as homogeneous or comminuted. This scope selects smooth ready-to-eat vegetable composite puree and excludes milk formulas and dry cereal products. The factory must determine actual standard applicability; adding rice flour does not establish processed-cereal conformity. Only English text extracted from the official proxy was available; original PDF bytes and visual verification were unavailable. No quantitative composition, processing or safety-compliance defaults are adopted. (`codex-baby-food-2023`)

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.carrot-pea-infant-puree-in-glass-jars |
| classification_refs | CPC 3.0: 23991; narrower |
| covered_products | Declared carrot-pea infant puree with rice flour, rapeseed oil and water in glass jars; selected low-acid retort route only |
| excluded_products | Other recipes and all excluded products and routes in section1 |
| representative_product | Smooth carrot-pea infant puree in sealed glass jars |
| production_route | Fresh vegetable preparation; indirect steam cooking; blending and mechanical homogenization; filling and sealing; cascading-water retort; cooling and release |
| market_state | Unopened, ambient-stored jarred product at factory gate; actual labelled storage and shelf life declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the declared smooth composite infant puree at factory gate |
| How much | 1 kg net accepted food, excluding all packaging mass |
| How well | Declared formulation, moisture, texture test, net fill, intact closure, factory release and market specification; no equal nutritional service across recipes is assumed |
| How long or cycle | One manufacturing lot through factory release; actual shelf life recorded without a PCR default; consumption excluded |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Carrot-pea infant puree in sealed glass jars |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | recipe and ingredient state; low-acid classification evidence and pH/water-activity methods; moisture and texture method; indirect heating and homogenizer type; retort technology and authorized schedule identifier; jar and lid specification; net fill; factory release criteria; actual shelf life and storage condition; site and geography; reporting period; electricity supply geography, voltage, user-side consumption or generation-side supply boundary, and supplier data; cleaning recipe; starting condition and omitted stages |

Required qualifiers must appear in dataset metadata, process notes, reference-flow comments or equivalent package fields; missing qualifiers make applicability incomplete. The blank product UUID is an unresolved identity, not permission to substitute a general prepared-meal flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net food mass after release, excluding jar, lid, label and carton. Measure net fill by calibrated gross-minus-tare weighing under cp_packing_retort. |
| wet_mass | all mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve wet mass and actual ingredient/reagent concentration; volume-to-mass conversion requires measured density at stated temperature. Do not convert wet food to dry matter silently. |
| energy_basis | site_electricity; cook_heat; retort_heat; clean_heat | Verified energy property on each row | MJ | Convert recorded kWh to MJ using 3.6 MJ/kWh; record steam heat using measured enthalpy difference and steam mass. Retain the public Net/Gross calorific value property and energy unit group; it does not describe food caloric service. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh harvested carrots and fresh shelled peas received; rice flour, oil, supplied tap water, delivered steam heat and finished packaging received |
| starting_condition_role | foreground_start |
| product_classification_scope | Specific carrot-pea infant composite only; no full23991 coverage |
| recursive_input_rule | Purchased same-category puree is an upstream input, not evidence that this fresh-vegetable route applies. Record supplier state and upstream dataset and declare a different starting condition before extending scope. Internal rework is a loop, not another purchased input. |
| upstream_dataset_requirement | Link cultivation, flour milling, edible oil processing, utility supply, packaging manufacture, inbound transport and off-site waste treatment for an expanded lifecycle model; disclose missing links |
| disclosure | Foreground gate-to-gate only; disclose supplied input states, low-acid route evidence, utilities, cleaning, factory storage, waste destinations, cut-offs and gaps |

| rule_id | Rule | Sources |
| --- | --- | --- |
| boundary_manufacturing | Include all four process groups, attributable start-up, changeover, cleaning, rejects and storage before release. Separate preparation, thermal duty, mixing/homogenization, closure, retort circulation and cooling records. (`steriflow-baby-retort`) | steriflow-baby-retort |
| boundary_utilities | Selected route receives steam heat and supplied water; boiler generation, water abstraction and off-site treatment are upstream/downstream links. A site with foreground boiler, water abstraction or treatment must add separate processes and measured atomic exchanges before claiming that enlarged scope. Do not invent combustion emissions for purchased heat. | codex-canning |
| boundary_downstream | Exclude outbound distribution, retail, home warming, feeding and end-of-life packaging. Do not call this foreground dataset complete cradle-to-gate. | hipp-carrot-pea |

## 6. Process Inventory Structure

All rows use one shared denominator: 1 kg accepted net reference food after release. Intermediate quantities represent the material needed for that final output, not one kilogram of every intermediate. Match paired transfers by lot and cancel them at the aggregated boundary. Each required process must be inspected even when an individual conditional exchange is absent. Add each actually used chemical, refrigerant, packaging component, separate residue and measured emission as its own atomic row; document proven absences and unmeasured flows separately.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preparation | Vegetable reception and preparation | required | Selected route | Foreground manufacturing | per 1 kg reference flow |
| pureeing | Cooking, blending and homogenization | required | Selected route | Foreground manufacturing | per 1 kg reference flow |
| packing_retort | Filling, sealing, retorting, cooling and pack-out | required | Selected route | Foreground manufacturing | per 1 kg reference flow |
| cleaning_power | Site electricity and line cleaning | required | Selected route | Foreground manufacturing | per 1 kg reference flow |

### Process: Vegetable reception and preparation (`preparation`)

#### Inputs

##### Product flows

###### Carrot (`carrot_in`)

Receive fresh carrots; weigh before sorting, washing, trimming and cutting. Cultivation and inbound transport are upstream.

- Selected flow: Carrot `050a9dc0-7d9a-49da-9ad3-1892d880cdc7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Peas, green (`pea_in`)

Receive fresh shelled green peas; record edible seed mass, not pod or standing-crop mass. Frozen or dried peas require another route.

- Selected flow: Peas, green `b0d5d264-fa1a-4230-8bf8-423b8125d8a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Tap water (`wash_water`)

Record fresh supplied water for washing, separate from ingredient water. Water quality suitability is documented by the factory.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `foreground-records`; `steriflow-baby-retort`

#### Outputs

##### Product flows

###### Washed trimmed carrot pieces (`prepared_carrot`)

Weigh the prepared carrot stream transferred to cooking; record moisture and losses without assuming a yield.

- Selected flow: Washed trimmed carrot pieces
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Washed shelled green peas (`prepared_pea`)

Weigh the pea stream transferred to cooking.

- Selected flow: Washed shelled green peas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `foreground-records`; `steriflow-baby-retort`

##### Waste flows

###### Discarded carrot peel (`carrot_trim`)

Record wet carrot peel sent to off-site treatment when peeling occurs; sorting rejects are additional separate exchanges.

- Selected flow: Discarded carrot peel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Carrot and pea washing wastewater to treatment (`wash_effluent`)

Record the one collected washing effluent stream and its treatment destination, solids and COD; it is not an elementary water emission.

- Selected flow: Carrot and pea washing wastewater to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `foreground-records`; `steriflow-baby-retort`

### Process: Cooking, blending and homogenization (`pureeing`)

#### Inputs

##### Product flows

###### Washed trimmed carrot pieces (`carrot_transfer`)

Match the preparation output by batch, state and mass; an internal transfer has no second upstream burden.

- Selected flow: Washed trimmed carrot pieces
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_pureeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pureeing`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Washed shelled green peas (`pea_transfer`)

Match the preparation output; exclude pods.

- Selected flow: Washed shelled green peas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_pureeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pureeing`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Rice flour for infant puree formulation (`rice_flour`)

Use the actual food-grade rice flour batch and specification; do not infer infant cereal-standard conformity from a database name.

- Selected flow: Rice flour for infant puree formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_pureeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pureeing`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Food-grade rapeseed oil (`rapeseed_oil`)

Record actual rapeseed oil grade and refining state; mustard oil and synthesis-grade oil are outside this row.

- Selected flow: Food-grade rapeseed oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_pureeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pureeing`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Tap water (`recipe_water`)

Weigh water added to the recipe, excluding wash water and indirect steam. Record any direct condensate as ingredient water, once only.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_pureeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pureeing`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Process heat from steam (`cook_heat`)

For the selected indirect steam-heated route record delivered thermal energy from metered steam and measured supply/return enthalpy. The identity energy property is preserved, not replaced by mass.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_pureeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pureeing`
- Sources: `foreground-records`; `steriflow-baby-retort`

#### Outputs

##### Product flows

###### Carrot-pea infant puree before filling (`bulk_puree`)

Record cooking, blending and mechanical homogenization output; document sieving or deaeration only when performed. No pressure, time or temperature is prescribed.

- Selected flow: Carrot-pea infant puree before filling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_pureeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pureeing`
- Sources: `foreground-records`; `steriflow-baby-retort`

##### Waste flows

###### Discarded carrot-pea infant puree (`puree_loss`)

Weigh unrecoverable formulation losses separately from reusable internal rework and packing losses.

- Selected flow: Discarded carrot-pea infant puree
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_pureeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pureeing`
- Sources: `foreground-records`; `steriflow-baby-retort`

##### Elementary flows

###### water vapour (`vapour`)

Include only observed immediate evaporative discharge to air with unspecified subcompartment; use measured exhaust humidity and gas flow or an independently closed water balance. Do not assign all unexplained mass loss to evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_pureeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pureeing`
- Sources: `foreground-records`; `steriflow-baby-retort`

### Process: Filling, sealing, retorting, cooling and pack-out (`packing_retort`)

#### Inputs

##### Product flows

###### Carrot-pea infant puree before filling (`puree_transfer`)

Match bulk output from pureeing; record net food transferred, excluding containers.

- Selected flow: Carrot-pea infant puree before filling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_packing_retort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Glass Jar (`glass_jar`)

Measure empty glass jar mass and count for the actual fill format, including attributable breakage. Record food-contact suitability separately.

- Selected flow: Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_packing_retort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Lacquered steel vacuum twist-off jar lid (`steel_lid`)

Record the complete purchased steel lid including its liner and coating; exclude its mass from food output. Supplier component data support upstream modelling.

- Selected flow: Lacquered steel vacuum twist-off jar lid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_packing_retort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Label, paper (`paper_label`)

Record purchased finished paper labels by measured mass; separately add adhesive if not included in the purchased label.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_packing_retort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Corrugated cardboard (`shipping_board`)

Include only actual C, E or F corrugated board with fibre at least 80% and recycled content as specified by this identity; weigh cartons and document packaging specification.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_packing_retort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Process heat from steam (`retort_heat`)

Record steam-derived heat supplied to the cascading-water retort and cooling operations without counting recirculated water or heat repeatedly.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_packing_retort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Tap water (`retort_water`)

Record cooling-loop and retort fresh-water make-up; distinguish gross recirculation from net input.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_packing_retort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

#### Outputs

##### Product flows

###### Carrot-pea infant puree in sealed glass jars (`reference_product`)

Release only the declared formulation, smooth texture, intact closure and market state supported by factory disposition records. Output is food net mass; packaging remains separate input.

- Selected flow: Carrot-pea infant puree in sealed glass jars
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

##### Waste flows

###### Discarded carrot-pea infant puree from rejected jars (`packing_reject`)

Measure food removed from rejected jars; record glass and steel waste separately and do not count unopened gross jar mass as food waste.

- Selected flow: Discarded carrot-pea infant puree from rejected jars
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_packing_retort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Discarded glass jar fragments (`glass_breakage`)

Record glass breakage sent off-site; separate attached food mass and hazardous contamination if present.

- Selected flow: Discarded glass jar fragments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_packing_retort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Retort cooling-water blowdown to treatment (`retort_effluent`)

Record the collected blowdown stream sent to treatment; disclose composition and any separate uncontaminated return.

- Selected flow: Retort cooling-water blowdown to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_packing_retort
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_retort`
- Sources: `foreground-records`; `steriflow-baby-retort`

### Process: Site electricity and line cleaning (`cleaning_power`)

#### Inputs

##### Product flows

###### Alternating current (`site_electricity`)

Use UUID 50657322-939c-4829-a87b-47c093bfa6a7 only for matching CN (China) user-side, below-1-kV grid-average consumption-mix supply. Its public locationOfSupply is CN; this flow and any linked provider are not global defaults. For other supply geographies, voltages or generation-side supply, reverify an applicable identity and supplier data before use. This identity condition does not restrict the geographical scope of the product methodology. Submeter preparation, pumps, homogenization, filling, retort circulation, cooling, cleaning and factory storage. Do not also insert the same electricity in those processes.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_cleaning_power
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_power`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Tap water (`clean_water`)

Record fresh water used for equipment and line cleaning; keep ingredient, vegetable washing and cooling water separate.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_cleaning_power
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_power`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Sodium hydroxide solution, 50% (`naoh50`)

Conditional: include only when the actual purchased cleaning reagent is 50% sodium hydroxide solution. Measure solution mass before site dilution; other detergents need separate atomic rows and identities.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_cleaning_power
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_power`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Process heat from steam (`clean_heat`)

Conditional: record additional steam heat for cleaning when used; exclude heat already booked to cooking and retort.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_cleaning_power
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_power`
- Sources: `foreground-records`; `steriflow-baby-retort`

#### Outputs

##### Waste flows

###### Spent sodium-hydroxide cleaning liquor to treatment (`clean_effluent`)

Conditional on alkaline cleaning: collect the spent diluted liquor as one wastewater stream; record actual concentration and destination, not 50% purchase concentration. Separate other cleaning streams when physically distinct.

- Selected flow: Spent sodium-hydroxide cleaning liquor to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_cleaning_power
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_power`
- Sources: `foreground-records`; `steriflow-baby-retort`

###### Final line-rinse wastewater (`clean_rinse_effluent`)

Record dilute wastewater actually collected from the final rinse and sent to treatment, separately from the listed spent alkaline wash. If the factory combines them, use one actual mixed-effluent exchange and remove duplicate rows. Measure mass, pollutant load and destination.

- Selected flow: Final line-rinse wastewater to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow using cp_cleaning_power
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_power`
- Sources: `foreground-records`; `codex-canning`

## 7. Allocation and Co-product Handling

| rule_id | Rule | Sources |
| --- | --- | --- |
| allocation_direct | First separate batches and directly meter stage utilities. For shared retort, cooking or cleaning duty use measured attributable energy/time/load records with stated causal basis, including changeover and rejects. If separation cannot be supported, disclose and review the allocation; do not invent an industry factor. | foreground-records |
| allocation_rework | Internal reusable puree is a tracked loop; net fresh inputs enter their exchange numerators and the aggregate inventory; only accepted net food output in kg enters the normalization denominator. Retain all failed-batch and rework burdens, and count the final accepted food once. Failed lots remain part of the production burden. No avoided-product credit for waste. A sold carrot peel coproduct requires separate product status, measured wet/dry mass and an explicitly reviewed allocation basis. | foreground-records |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_preparation | preparation | Individual exchanges of this process | Batch and meter record | batch ID; timestamps; recipe; flow identity and state; raw quantity/unit; tare; meter readings; accepted net food mass; reject mass; allocation basis | Calibrated receipt and transfer weighing; water meter; separate peel and effluent collection | kg; MJ | Each lot and attributable cycle | Representative reporting period including start-up and rejects | Declared factory and line | per 1 kg reference flow | Calibration; lot linkage; closure and release records; meter reconciliation |
| cp_pureeing | pureeing | Individual exchanges of this process | Batch and meter record | batch ID; timestamps; recipe; flow identity and state; raw quantity/unit; tare; meter readings; accepted net food mass; reject mass; allocation basis | Ingredient and bulk weighing; steam meter and supply/return enthalpy; cooking and homogenizer logs; emission measurement if present | kg; MJ | Each lot and attributable cycle | Representative reporting period including start-up and rejects | Declared factory and line | per 1 kg reference flow | Calibration; lot linkage; closure and release records; meter reconciliation |
| cp_packing_retort | packing_retort | Individual exchanges of this process | Batch and meter record | batch ID; timestamps; recipe; flow identity and state; raw quantity/unit; tare; meter readings; accepted net food mass; reject mass; allocation basis | Calibrated gross-minus-tare net-fill sampling linked to accepted jar counts; packaging weighing; retort heat/water meters; authorized schedule and release records | kg; MJ | Each lot and attributable cycle | Representative reporting period including start-up and rejects | Declared factory and line | per 1 kg reference flow | Calibration; lot linkage; closure and release records; meter reconciliation |
| cp_cleaning_power | cleaning_power | Individual exchanges of this process | Batch and meter record | batch ID; timestamps; recipe; flow identity and state; raw quantity/unit; tare; meter readings; accepted net food mass; reject mass; allocation basis | Electricity submeter; cleaning reagent weighing before dilution; water meter; spent-liquor collection; cleaning and storage logs | kg; MJ | Each lot and attributable cycle | Representative reporting period including start-up and rejects | Declared factory and line | per 1 kg reference flow | Calibration; lot linkage; closure and release records; meter reconciliation |

Retain jar counts and measured net-fill distribution; accepted net food mass is the sum of accepted fills, excluding sample and reject food. A gross packaging count alone does not establish the denominator. Record moisture, pH, water activity, texture method, retort loading, schedule deviations, cooling and closure checks as applicability and quality evidence, without taking over the factory process authority.

Each protocol additionally retains dedicated raw fields: preparation reject/peel mass and water inflow/outflow; pureeing ingredient scales, moisture, transfer stocks, steam supply/return pressure/temperature/specific enthalpy, and measured exhaust flow and inlet/outlet absolute humidity when applicable; packing-retort jar count, individual tare and sampled net-fill distribution, closure status, cycle loading, steam/water meters, cooling make-up/blowdown; electricity-cleaning stage submeter readings, purchased reagent concentration, dilution water, recirculation, spent liquor and final-rinse effluent, attributable time and batch. Volume-to-mass conversion retains temperature and measured density; the energy unit group preserves the deterministic MJ/kWh conversion.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalization | all inventory rows | Divide each attributable batch exchange by accepted net food mass in kg for the same reporting period. Report each result per 1 kg reference flow; preserve its numerator unit. | Attributable quantity; accepted net food mass; cp_packing_retort; process protocol | Normalized individual exchange | foreground-records |
| electricity_conversion | site_electricity | Multiply metered kWh by 3.6 to obtain MJ before batch normalization. | kWh; cp_cleaning_power | MJ | foreground-records |
| steam_heat | cook_heat; retort_heat; clean_heat | Calculate thermal energy as measured steam mass times measured supply-minus-return specific enthalpy; sum attributable cycles before batch normalization. State pressure, temperature, condensate return and meter boundary; no default enthalpy. | Steam mass; supply and return enthalpy; cycle ID | MJ | foreground-records |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_traceability | all inventory rows | Link every amount to the same formulation, site, lot and release period. Distinguish measured zero, absent, unmeasured and proxy. No recipe proportions are inferred from marketing text. | foreground-records |
| dq_balance | preparation; pureeing; packing_retort | Reconcile food inputs, retained moisture, intermediate stocks, net food output, evaporation and separated wastes; report unexplained residual and site-derived uncertainty. Reconcile water supply against ingredient retention, returns and effluent without assuming supply equals discharge. | foreground-records |
| dq_schedule | packing_retort | Retain the factory-authorized product/container-specific schedule and deviation/release evidence. Historical Codex is methodological context, not evidence of current legal conformity; no PCR thermal schedule or safety approval. | codex-canning |
| dq_uuid | UUID-bearing rows | Confirm physical state, chemistry, voltage, concentration, environmental medium and reference property before binding actual data. If conditions differ, leave the identity unresolved rather than widening the public identity. | foreground-records |

## 9. Validation Rules

| rule_id | Rule | Sources |
| --- | --- | --- |
| validate_scope | Check all required qualifiers, the exact formulation family and fresh-vegetable/low-acid jar-retort route. Missing route or release evidence makes applicability inconclusive, not approved. | steriflow-baby-retort; codex-canning |
| validate_electricity_identity | Before binding site_electricity to UUID 50657322-939c-4829-a87b-47c093bfa6a7, verify CN supply geography, below-1-kV voltage and user-side grid-average consumption-mix supply against actual supplier records. For any other geography, voltage or generation-side boundary, require a separately verified applicable flow identity and supplier data; neither this flow nor its provider is a global default. Retain the actual reference property and energy unit chain, with measured kWh converted by 3.6 MJ/kWh. | foreground-records |
| validate_quantity | Check a positive accepted net-food denominator, calibrated net fill, consistent wet-mass and energy units, internal-transfer matching and no double utility/rework counting. Reject packaging mass in the1kg food reference. | foreground-records |
| validate_completeness | Check every process and atomic exchange against actual factory records, including conditional cleaning and evaporation. Report checked, skipped, absent and unmeasured exchanges, balance residuals and missing upstream links. Pending identities and scientific review do not establish methodology or food-safety approval. | foreground-records |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing contribution of this declared product and route; expanded model only with disclosed upstream and downstream links |
| excluded_use | Whole23991 average; infant diet or health comparison; safety approval; unlinked cradle-to-gate claim |
| required_metadata | All reference qualifiers; net-food basis; batch counts; input states; route and release identifiers; allocation; waste destination; geography and period; flow identity gaps |
| required_quality_disclosure | Measured coverage; calibration and uncertainty; balance residuals; proxies; missing upstream links; historical-source limitations |
| update_trigger | Recipe, input preservation state, packaging, utility supply, retort technology, authorized schedule or release criteria change; identity or evidence resolution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025, printed p111 (PDF p111),23991;21399 exclusion p84. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only; no full-category coverage claim |
| hipp-carrot-pea | official_guidance | HiPP, Carrots & Peas GB4082, Ingredients and Storage sections, https://www.hipp.co.uk/shop/baby-foods/jars/carrots-and-peas | Manufacturer product identity, ingredient combination and unopened ambient state only; page snapshot2026-10-06; no formula factors or factory route inferred |
| steriflow-baby-retort | handbook | Steriflow, Baby food sterilization in the food industry,12September2024, “Baby Food: Sterilization Process” and “Different Stages of Sterilization”, https://www.steriflow.com/en/baby-food-sterilization-in-the-food-industry/ | Equipment-manufacturer route evidence for preparation, filling, closure, cascading-water retort and cooling; no energy savings, safety guarantees or numerical schedules adopted |
| codex-canning | official_guidance | FAO/WHO,CAC/RCP23-1979, revised1989/1993, editorial2011, §§4.4,5.2,7.4,7.5,7.6,8; printed/PDF p20 §7.5. https://www.fao.org/input/download/standards/24/CXP_023e.pdf | Historical low-acid canning method context; actual product/container schedule and factory authority required; not current infant-specific regulatory approval |
| foreground-records | dataset | Required future site records: batch recipes, calibrated weighing, utility meters, retort schedule and release records, cleaning logs and waste manifests; no factory dataset supplied with this PCR | Measurement, arithmetic normalization, allocation, balance and uncertainty basis; collect before data production |
| codex-baby-food-2023 | standard | FAO/WHO, CXS73-1981, amended2023, §§1,3.2, physical/printed p3; https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B73-1981%252FCXS_073e.pdf | Weaning-food scope and homogeneous/comminuted state only; official text extraction, original PDF bytes and visual verification unavailable; no safety approval |
