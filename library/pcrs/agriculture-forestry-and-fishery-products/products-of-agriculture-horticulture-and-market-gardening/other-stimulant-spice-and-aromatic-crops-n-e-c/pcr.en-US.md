---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-stimulant-spice-and-aromatic-crops-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other stimulant, spice and aromatic crops, n.e.c.

## 1. Scope and Applicability

This PCR guides a foreground data package for one cultivated spice or aromatic crop product from crop establishment and management through harvest and, when selected, the first primary-conditioning handoff. Every data package shall describe one botanical species, one plant organ or product part, one production route, and one physical state at one declared gate. Do not combine different species, organs, fresh and dried states, harvest dates, or production systems in one inventory. A category-level PCR does not make those products interchangeable.

The covered route is managed crop production, harvest or capture of the target plant material, and optional first-stage sorting, cleaning, washing, drying, or other simple stabilization. The declared gate is either (a) the harvested crop at the farm handoff or (b) the same crop product after its first primary conditioning handoff. The dataset shall choose one gate. If conditioning is included, its inputs, outputs, losses, and transport from the field where applicable are included; do not also count the raw harvested material as a second reference output.

This PCR excludes curry powders and pastes, mixed or formulated seasonings, extracted oils or oleoresins, downstream grinding or milling, sterilization, blending, retail packaging, and subsequent storage or distribution. It also excludes wild collection and products assigned by the classification to another specific crop category. The historical CPC 2.1 explanatory note for 01699 included curry powders and pastes as well as several distinct plant species and organs. This narrower crop-only scope therefore does not establish exact coverage of the current CPC 3.0 leaf; the mapping remains unresolved pending semantic review.

Annual crops, rhizome crops, and perennial herbs or trees may use different planting, harvest, and productive-period routes. Declare the actual route from current site and crop records. For a perennial crop, report establishment and productive years separately or apply the period-attribution rule in Section 7. For a crop with several intended botanical products, disclose each product and handoff, even when this PCR reference flow covers only one of them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-stimulant-spice-and-aromatic-crops-n-e-c |
| classification_refs | CPC 3.0:01699, classification locator only; unmapped |
| covered_products | One cultivated, unmixed and unextracted spice or aromatic crop product, including a specified species and plant part such as saffron stigmas, turmeric rhizomes, dill herb or seed, thyme, bay leaves, Xylopia aethiopica seeds, or angelica stems, at the declared harvest or first primary-conditioning state |
| excluded_products | Curry powders and pastes; other mixed seasonings; extracts and essential oils; ground or milled products; sterilized, blended, or otherwise manufactured products; wild-collected material; products covered by another specific crop category |
| representative_product | One named crop species and plant organ, in one declared fresh or dried state, at either farm harvest handoff or first primary-conditioning handoff |
| production_route | Managed cultivation → crop-specific productive period → harvest/capture → optional primary sorting, cleaning, washing, drying, or simple stabilization → declared handoff |
| market_state | Bulk, unblended agricultural crop material with declared species, plant part, grade, and moisture or other relevant state; no retail presentation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One crop-specific spice or aromatic plant product at the selected handoff |
| How much | 1 kg net product at the declared state and gate |
| How well | One botanical species and product part; declared cultivar or variety when known; fresh or dried state; measured moisture content for dried material; declared grade and contamination or rejection criteria |
| How long or cycle | One identified crop lot and crop cycle. For perennial crops, include the establishment and productive periods or document how establishment burdens are attributed across productive output. |
| reference_flow_link | Reference flow object below; UUID intentionally unresolved at this category-level candidate stage |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Crop-specific spice or aromatic product at declared gate (UUID unresolved) |
| Reference flow property | Mass (UUID unresolved) |
| Reference unit group | Mass units (UUID unresolved) |
| Reference unit | kg |
| Required qualifiers | Botanical species; plant organ or product part; cultivar or variety when known; country and production site; annual, rhizome, or perennial route; crop cycle and harvest lot; fresh/dried/other declared state; moisture content for dried product; grade; harvest or first-conditioning gate; whether washing, drying, stabilization, and off-farm transfer occurred |

The selected UUID cannot be inferred from a broad crop-family label. Resolve the reference product only after the dataset specifies species, plant part, physical state, gate, geography, and relevant product classification. A candidate area-time flow is not a product reference flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| crop_product_mass | Reference product, intermediate crop batches, saleable grades and crop residues | Mass; use the verified property exposed by the selected flow | kg | Record net mass and the material state at each handoff. Do not convert fresh to dry mass without measured moisture and a stated calculation. Keep grade-specific and species-specific amounts separate. |
| irrigation_volume | Irrigation water | Volume or mass compatible with the verified water flow | m3 preferred; kg permitted with documented conversion | Use metered or supplier-recorded withdrawal and identify source. If converting volume to mass, state the measured or adopted density and reference condition. Report rainfall separately as site context, not as a purchased water exchange. |
| product_moisture | Fresh or dried reference and intermediate crop products | Mass fraction of water or water activity, as appropriate | % wet basis and/or dimensionless aw | Record the measurement method, sample basis, date and lot. For a dried-state claim, report the applicable buyer or product specification; do not apply one moisture threshold across all species and organs. |
| land_occupation | Crop production | Area-time | ha·year | Measure occupied crop area and time for each declared production period. Distinguish annual crop occupation from establishment and productive years of perennial stands. |
| transport_service | Field-to-conditioner transfer | Mass-distance | t·km | Calculate from net transported crop mass and the loaded distance for the declared route. Report vehicle, load, route, and treatment of empty return separately; do not double-count own-account fuel as a purchased transport service. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The declared crop site and its pre-establishment condition, or the beginning of the explicitly selected crop period for an existing stand; report prior land conversion and perennial establishment when they are inside the study period or attributed to the reference product. |
| starting_condition_role | Primary crop producer and first-handoff product supplier |
| product_classification_scope | One CPC 01699 crop product only after species, plant part, physical state, and gate are identified; this PCR does not cover mixed curry powders or pastes and does not imply exact coverage of the full CPC leaf. |
| recursive_input_rule | Record purchased or transferred seed, rhizome, bulb, cutting, seedling, or other propagation material as an actual input. If propagation material is retained from the same site, disclose its source and avoid recursively linking the same crop output as both an upstream dataset and a foreground input. |
| upstream_dataset_requirement | Use verified upstream datasets for purchased propagation material, nutrient products, crop-protection products, water supply, energy carriers, and third-party transport or treatment services when included. Record the actual exchanged product and its composition; do not infer an upstream identity from a Flow Set. |
| disclosure | State the crop and plant part, site and period, production and harvest route, area and yield basis, product state and moisture, selected gate, conditioning operations, measured grades, off-grade and residue destinations, and all period or shared-asset attribution choices. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| crop_route_start | Crop establishment and management | Include crop establishment, productive management and field occupation for the declared crop periods. Include prior conversion only when it occurred within the selected accounting period or is explicitly attributed under the study goal; report the land history either way. | ipcc-2019-managed-soils |
| harvest_gate | Harvest and first handoff | Treat harvest as a distinct responsibility between managed plant growth and crop conditioning. Record the crop material collected, its state and handoff, plus incidental loss and non-target biomass by actual destination. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| conditioning_gate | First primary conditioning | Include only the operations performed before the selected first conditioning handoff. Washing is conditional on the actual route; do not add a wash step where the crop or contamination protocol does not require it. Drying and any stabilization are route-specific and require measured inputs and product-state checks. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| gate_exclusivity | Reference product | A dataset shall select the harvest gate or the first primary-conditioning gate. When conditioning is included, the harvested crop is an internal intermediate and shall not be counted again as the reference product. |  |
| route_alternatives | Crop and conditioning technology | Declare the selected crop life-history and technology route. Rainfed and irrigated cultivation, manual and mechanized harvest, and ambient/solar and mechanical drying are route alternatives; report observed coexistence where it occurs and never average distinct crop species or product states into one inventory. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| process_handoffs | Crop, harvest and conditioning nodes | Identify the input material state, output state, destination and responsible site for each process. Use measured lot transfer records to connect nodes and reconcile input, product, residue, reject and moisture changes. | codex-spice-mycotoxin-practice-2017 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| managed_crop_production | Managed crop establishment and production | required | Record annual, rhizome, or perennial route; separate establishment and productive periods for multi-year crops. | Managed biological production | Crop area and production period linked to net target-organ output |
| harvest_capture | Harvest and field capture | required | Identify manual or mechanized harvest and the actual target organ, collection state and handoff. | Harvest/capture | Net harvested lot by botanical product and grade |
| primary_conditioning | First primary conditioning and stabilization | conditional | Include when sorting, cleaning, washing, drying, or simple stabilization occurs before the selected gate. If absent, the reference flow leaves at the harvest gate. | Material treatment, preservation and primary conditioning | Net accepted conditioned output and material-state change by lot |

### Process: Managed crop establishment and production (`managed_crop_production`)

This process owns crop establishment and biological production. It ends at the harvest-ready plant material handoff. For a crop with pre-harvest period inputs, record them against their actual production period. The intended output is the declared species and plant part; any other intended outputs, retained residues, removed residues and losses shall be classified by their observed destination.

#### Inputs

##### Product flows

###### Seed or other propagation material (`propagation_material`)

Record actual seed, rhizome, bulb, cutting, seedling or other planting material supplied to establish or renew the selected crop. Identify botanical source, form, quantity, period and whether it is purchased or retained from the same site. Omit the exchange when no external or transferred material enters the foreground system.

- Selected flow: Crop-specific seed or propagation material (identity depends on the declared species and propagation form; UUID unresolved)
- Flow property / unit: Mass / kg or item count as supported by the verified flow
- Amount rule: Measured or supplier-recorded planting material, normalized using the crop-period and reference-product records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate, with the source crop period retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_propagation_material`
- Sources: `unsd-cpc-01699`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg propagation material/kg selected product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
###### Consolidated fertilizer and nutrient amendments (`fertilizer_nutrient_inputs`)

Use one card for all mineral fertilizers, organic fertilizers and nutrient amendments applied to this process, including a soil amendment used for crop nutrition. Preserve each actual product, applied mass, nutrient grade, timing and field in foreground records. The set does not select an exchange automatically; data generation resolves the recorded products to verified UUIDs.

- Selected flow: Fertilizer and nutrient-supply products actually applied to this crop (foreground-expanded from product records)
- Flow property / unit: Product-specific property and native unit for each recorded fertilizer or amendment
- Binding: parameterized
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set version: 0.3.0
- Amount rule: Record actual masses by fertilizer/amendment product and nutrient composition; one consolidated card only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate, retaining field and crop-period records
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_application`
- Sources: `fao-herb-spice-quality-handbook`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg nutrient products/kg selected product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
###### Crop-protection products (`crop_protection_products`)

Include only products actually applied to the crop or drying area. Record each trade product and active ingredient in the foreground evidence and resolve each actual exchange during data generation. Do not use this umbrella as a fixed flow for an unspecified pesticide mixture.

- Selected flow: Actual crop-protection product(s) used on the declared crop (UUID unresolved until the product is identified)
- Flow property / unit: Product-specific property and native unit for each recorded product
- Amount rule: Measured or invoiced application, with active ingredient, treated area, date and crop lot recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection`
- Sources: `codex-spice-mycotoxin-practice-2017`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg crop-protection product/kg selected product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
###### Irrigation water (`irrigation_water`)

Record water actually withdrawn or supplied for irrigation. Rainfall and soil moisture are contextual measurements, not product-flow exchanges. Omit this card for a rainfed period with no irrigation input.

- Selected flow: Irrigation water supplied to this crop (resolved from actual source and selected water flow)
- Flow property / unit: Volume / m3 preferred; use the verified selected flow property and unit
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: irrigation-water
- Amount rule: Metered or supplier-recorded irrigation volume by field and period; disclose any conversion from mass to volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 hectare and crop year, then normalize to the selected gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation`
- Sources: `fao-herb-spice-quality-handbook`
- Range: Provisional first-pass screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 15000
  - Unit: m3/ha·crop-year
  - Basis: One hectare of the declared crop during one production year; normalize the observed annual volume by that period's output for the reference-flow inventory
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-production energy and utilities (`crop_production_energy`)

Record the actual energy carriers used for field operations, irrigation pumping, crop protection and production support. Keep each carrier exchange and its native unit identifiable in the collected records. The set reference stays at set level because the crop-specific energy carriers are determined by foreground records.

- Selected flow: Energy carriers and utilities actually used in crop production
- Flow property / unit: Carrier-specific property and native unit for each exchange
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: Metered electricity and fuel records; report equipment and operation so own-account fuel is not also counted as a transport service
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 hectare and crop year, then normalize to the selected gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_energy`
- Sources: `ipcc-2019-managed-soils`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh-equivalent/t selected product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
##### Waste flows

###### Removed non-target crop biomass (`removed_crop_biomass`)

Record non-target biomass removed from the field only when it leaves the crop system as a discard or residue. Biomass retained or incorporated in the field is recorded under the elementary soil-return row in the harvest process, not as a waste exchange. If it is sold or used as a co-product, classify it under the actual intended product output instead.

- Selected flow: Crop-specific non-target plant biomass sent to a declared waste destination (UUID unresolved)
- Flow property / unit: Mass / kg dry matter where measured
- Amount rule: Measured removed mass and actual destination; distinguish dry matter from water loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_residues`
- Sources: `codex-spice-mycotoxin-practice-2017`
- Range: Physical disposition mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg discarded biomass/kg removed biomass
  - Basis: The measured discarded portion of the removed biomass lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

###### Crop land occupation (`crop_land_occupation`)

Record the crop area and time occupied by the declared product route. For mixed-use fields, measure or document the crop-specific area and period and apply the shared-infrastructure or co-product rules where required.

- Selected flow: Agricultural land occupation for the declared crop and land-cover state (UUID unresolved until land class is identified)
- Flow property / unit: Area-time / ha·year
- Amount rule: Measured crop area multiplied by the attributed occupation period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_area_and_land_history`
- Sources: `ipcc-2019-managed-soils`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: ha-year/t selected product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
###### Land transformation (`crop_land_transformation`)

Include only when land conversion occurs inside the declared study period or is explicitly attributed to the product. Identify initial and final land cover, area, date and evidence. Omit when no qualifying conversion occurred; do not report occupation as transformation.

- Selected flow: Land transformation from the recorded initial to final land-cover class (UUID unresolved until land class is identified)
- Flow property / unit: Area / ha
- Amount rule: Measured converted area; calculate zero only when the site history confirms no conversion in scope
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_area_and_land_history`
- Sources: `ipcc-2019-managed-soils`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: ha transformed/t selected product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
#### Outputs

##### Product flows

###### Harvest-ready target plant material (`harvest_ready_crop_material`)

Record the standing or harvest-ready target organ supplied to the distinct harvest operation. The quantity and product identity shall be the same batch basis used by the harvest input; it is an internal handoff unless the selected system boundary ends at harvest.

- Selected flow: One declared species and plant organ in its harvest-ready state (UUID unresolved)
- Flow property / unit: Mass / kg at measured moisture, or a declared count unit where mass cannot be measured
- Amount rule: Crop-specific harvestable target-organ amount linked to the lot and the harvest output record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_batch`
- Sources: `codex-spice-mycotoxin-practice-2017`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg harvest-ready material/kg selected product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
##### Waste flows

###### Crop-production loss or removed residue (`production_loss_residue`)

Use only for biomass that leaves the production process as a measured discard. Distinguish it from target crop material at harvest, saleable crop products, and residue left on or returned to the field.

- Selected flow: Crop-specific biomass removed or discarded before harvest (UUID unresolved)
- Flow property / unit: Mass / kg dry matter where measured
- Amount rule: Measured amount and destination by crop period; omit if no such removal occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_residues`
- Sources: `codex-spice-mycotoxin-practice-2017`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg loss or residue/kg harvest-ready material
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
##### Elementary flows

###### Direct soil nitrous oxide (`soil_nitrous_oxide`)

Report direct soil N₂O only when the foreground dataset has the activity data and a selected managed-soils method. Use the factor appropriate to the declared climate, soil, nitrogen inputs and method tier. Keep direct emissions separate from indirect pathways and upstream fertilizer manufacture; disclose any omitted pathways.

- Selected flow: Nitrous oxide emitted from managed crop soil to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate from collected nitrogen additions and the selected IPCC managed-soils method; retain factor choice and N-to-N2O conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_application`
- Sources: `ipcc-2019-managed-soils`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg N2O/kg selected product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
### Process: Harvest and field capture (`harvest_capture`)

Harvest is a separate operation because it removes a declared plant organ from the managed crop and creates a measurable collected lot before primary conditioning. Record the production or field context, actual collection method and handoff. Separate intended outputs from incidental loss and field residue.

#### Inputs

##### Product flows

###### Harvest-ready crop batch (`harvest_ready_batch_input`)

Receive the harvest-ready batch from crop production. Match its species, organ, crop period and lot identifier to the production output; do not treat this as an upstream purchased product.

- Selected flow: Internal transfer of the crop-specific harvest-ready material (same unresolved identity as production output)
- Flow property / unit: Mass / kg at measured moisture, or the same declared count unit used by production output
- Amount rule: Reconciled to the harvest-ready output record for the same lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_batch`
- Sources: `codex-spice-mycotoxin-practice-2017`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg harvest-ready batch/kg selected product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
###### Harvest machinery energy (`harvest_energy`)

Record electricity and fuels consumed by harvest machinery, collection equipment and field-side handling. Use the measured carrier. Include own-account vehicle fuel here when the vehicle performs crop operations; do not also claim a purchased transport service for the same movement.

- Selected flow: Energy carriers actually used by harvest and field capture
- Flow property / unit: Carrier-specific property and native unit for each exchange
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: Metered energy or fuel records by equipment and harvest operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy`
- Sources: `fao-herb-spice-quality-handbook`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 3000
  - Unit: kWh-equivalent/t harvested product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
#### Outputs

##### Product flows

###### Primary harvested crop product (`harvested_target_product`)

Record the collected target species and plant organ at the measured as-harvested state. This is the reference output only when the selected gate is at harvest; it is an internal intermediate when primary conditioning is included.

- Selected flow: Declared species and plant organ at harvest, in the measured fresh or other as-harvested state (UUID unresolved)
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: Net harvested mass by lot after tare, linked to grade and moisture records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_batch`
- Sources: `codex-spice-mycotoxin-practice-2017`
- Range: Harvest-lot reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg accepted target product/kg gross target-organ mass handled
  - Basis: Measured gross target-organ mass entering harvest and classified lot outputs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Lower-grade saleable crop product (`lower_grade_product`)

Record any downgraded target crop that is still sold or transferred for a declared use. It is a separate intended output and handoff, not a waste flow. Identify its grade and destination.

- Selected flow: Same declared crop species and plant organ at its actual lower-grade saleable state (UUID unresolved)
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: Measured saleable downgraded mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_and_disposition`
- Sources: `codex-spice-mycotoxin-practice-2017`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg lower-grade product/kg harvested crop
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
###### Other intended crop outputs (`other_intended_crop_outputs`)

Declare each additional intended botanical product or co-product produced by the selected crop route and record its own identity, quality, amount and handoff in the foreground package. This conditional umbrella does not make unlike species or organs one exchange.

- Selected flow: Each actual additional intended crop product, resolved from its own species, organ and handoff (UUID unresolved)
- Flow property / unit: Product-specific; record mass and moisture where applicable
- Amount rule: Measured net amount by intended output and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_and_disposition`
- Sources: `unsd-cpc-01699`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg other intended output/kg harvested crop
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
##### Waste flows

###### Discarded harvest material (`harvest_discard`)

Record material rejected and discarded at harvest. Separate it from material returned to the field, saleable lower grades, material routed for rework, and accepted target output. If reworked, link the lot to the rework operation and count accepted product only once.

- Selected flow: Crop-specific rejected or discarded plant material at harvest (UUID unresolved)
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: Measured amount by reason and destination; omit a zero row only when the lot inspection record supports no discard
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_and_disposition`
- Sources: `codex-spice-mycotoxin-practice-2017`
- Range: Harvest discard mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg discarded material/kg gross harvested material
  - Basis: Measured incoming harvest lot before grade and destination separation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

###### Crop residue returned to soil (`crop_residue_to_soil`)

Record non-target biomass left on or returned to the crop field when it is part of the selected field inventory. Identify the species or plant part and measured dry-matter basis. Do not also count the same biomass as a waste output or saleable co-product.

- Selected flow: Crop-specific plant residue returned to agricultural soil (UUID unresolved)
- Flow property / unit: Mass / kg dry matter
- Amount rule: Measured residue mass or a documented field measurement method by crop period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_residues`
- Sources: `codex-spice-mycotoxin-practice-2017`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg residue returned to soil/kg harvested crop
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
### Process: First primary conditioning and stabilization (`primary_conditioning`)

This process is included only when primary conditioning occurs before the selected gate. It begins with the raw harvested batch and ends with a declared sorted, cleaned, washed, dried or otherwise stabilized crop product. Describe the pre-treatment state, intervention, post-treatment state and handoff. Washing is optional and shall be omitted when unnecessary. Record accepted, downgraded, rejected, recovered and waste states separately; do not mix different spices or harvest days in batch records.

#### Inputs

##### Product flows

###### Raw harvested crop batch (`raw_harvest_batch`)

Receive the lot from harvest with matching species, plant organ, date, grade and moisture records. Reconcile net received amount to the harvest process output.

- Selected flow: Declared crop-specific raw harvested batch (same unresolved identity as harvest output)
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: Weighed net incoming lot, matched to the harvest handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `codex-spice-mycotoxin-practice-2017`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg raw harvest batch/kg conditioned product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
###### Conditioning wash water (`conditioning_water`)

Include only when washing or wet cleaning is used. Record fresh or supplied water by actual source and quantity. Do not add a default wash exchange: guidance notes washing is not required for every spice and can spread contamination when unnecessary.

- Selected flow: Water supplied for actual crop washing or wet cleaning
- Flow property / unit: Volume / m3 preferred; use verified selected-flow property and unit
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: process-water
- Amount rule: Metered or supplier-recorded volume by batch, including any recirculation or reuse record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 tonne of conditioned product at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water`
- Sources: `codex-spice-mycotoxin-practice-2017`; `fao-herb-spice-quality-handbook`
- Range: Provisional first-pass screening estimate for an active wash route
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/t conditioned product
  - Basis: One tonne of conditioned crop output; zero applies when no washing occurs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning energy and utilities (`conditioning_energy`)

Record actual electricity, fuel, purchased heat or other energy carriers used by cleaning, fans, pumps and drying. Distinguish ambient/solar drying from powered drying. The selected carrier and quantity come from batch and equipment records, so the energy set remains at set level.

- Selected flow: Energy carriers and utilities actually used by first conditioning
- Flow property / unit: Carrier-specific property and native unit for each exchange
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Amount rule: Metered energy or fuel by operation and batch; retain the carrier and equipment identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 tonne of conditioned product at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy`
- Sources: `codex-spice-mycotoxin-practice-2017`; `fao-herb-spice-quality-handbook`
- Range: Provisional first-pass screening estimate across declared conditioning routes
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 3000
  - Unit: kWh-equivalent/t conditioned product
  - Basis: One tonne of conditioned output; include carrier conversion evidence when energy carriers are compared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field-to-conditioner transport service (`raw_crop_transport`)

Include this service when raw crop travels from the field to a separate first-conditioning site using third-party freight. For own-account transport, record the actual vehicle fuel or energy in the responsible process instead and omit this service to avoid double counting.

- Selected flow: Road freight service for the declared raw crop transfer
- Flow property / unit: Mass-distance / t·km
- Binding: parameterized
- Flow Set: flow-set.transport-service
- Flow Set version: 0.2.0
- Flow Set group: road-freight-transport
- Amount rule: Net crop mass multiplied by loaded route distance; disclose vehicle, load, route and empty-return allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioner_transport`
- Sources: `iso-14044-lca-allocation`
- Range: Provisional route screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: t·km/t raw crop
  - Basis: One tonne of raw crop on its loaded field-to-conditioner route; zero applies when conditioning occurs at the field site
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### External wastewater treatment service (`wastewater_treatment_service`)

Include only when wastewater from conditioning is sent to an external treatment provider and the treatment is inside the chosen product system. Record the actual service and treatment destination. Do not count a provider service and an onsite treatment process for the same effluent.

- Selected flow: Wastewater treatment service for conditioning effluent
- Flow property / unit: Mass or volume / native verified service unit
- Binding: parameterized
- Flow Set: flow-set.waste-treatment-service
- Flow Set version: 0.2.0
- Flow Set group: wastewater-treatment-service
- Amount rule: Supplier invoice, treatment log or metered effluent amount by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_wastewater`
- Sources: `fao-herb-spice-quality-handbook`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: m3 treated wastewater/t conditioned product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
#### Outputs

##### Product flows

###### Primary conditioned crop product (`conditioned_reference_product`)

Record the net target crop product after the included first conditioning operation. Declare its species, plant part, fresh or dried state, moisture and grade. It is the reference output only when the selected gate is the first primary-conditioning handoff.

- Selected flow: One declared crop-specific spice or aromatic product after first primary conditioning (UUID unresolved)
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: Net accepted output after tare and grading; record mass and lot-level moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `codex-spice-mycotoxin-practice-2017`
- Range: Conditioning mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg accepted output/kg raw crop input
  - Basis: Net accepted product compared with the incoming raw-crop lot; report removed water separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Lower-grade conditioned product (`conditioned_lower_grade_product`)

Record each lower-grade product separately when it is sold or handed off for a declared use. It remains an intended product output; do not record the same mass as waste or as accepted reference product.

- Selected flow: Same crop-specific material in its actual lower-grade conditioned state (UUID unresolved)
- Flow property / unit: Mass / kg at measured moisture
- Amount rule: Measured net amount by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_and_disposition`
- Sources: `codex-spice-mycotoxin-practice-2017`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg lower-grade conditioned product/kg raw crop input
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
###### Other intended conditioned crop outputs (`conditioned_coproducts`)

Record each additional intended product separated during primary conditioning with its own identity, grade, amount and handoff. Omit when the actual route produces no additional intended output.

- Selected flow: Each actual additional conditioned crop product (UUID unresolved until identity and handoff are declared)
- Flow property / unit: Product-specific; record mass and moisture where applicable
- Amount rule: Measured net amount by product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_and_disposition`
- Sources: `unsd-cpc-01699`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg conditioned co-product/kg raw crop input
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
##### Waste flows

###### Conditioning rejects and discarded residues (`conditioning_rejects`)

Record cleaning rejects, foreign matter, non-saleable damaged material and discarded residues by destination. Rework, recovery and saleable lower grades remain separate routes. Do not count the same mass as both rejected waste and product.

- Selected flow: Crop-specific rejected material and conditioning residue sent to a declared waste destination (UUID unresolved)
- Flow property / unit: Mass / kg at measured moisture or dry matter, as reported
- Amount rule: Weighed or sampled amount by incoming batch and actual destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_and_disposition`
- Sources: `codex-spice-mycotoxin-practice-2017`; `fao-herb-spice-quality-handbook`
- Range: Conditioning reject mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg discarded material/kg raw crop input
  - Basis: Measured incoming raw-crop lot before sorting, conditioning and destination separation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Conditioning wastewater (`conditioning_wastewater`)

Record effluent generated by washing or wet cleaning. Identify its measured volume or mass, suspended or removed material where relevant, destination, and onsite or external treatment. Omit when the process is dry and produces no wastewater.

- Selected flow: Wastewater from the declared crop-conditioning batch (UUID unresolved)
- Flow property / unit: Volume / m3 or mass / kg, matching the measured output
- Amount rule: Metered or measured wastewater amount by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg of product at the selected gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_wastewater`
- Sources: `fao-herb-spice-quality-handbook`

- Range: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: m3 wastewater/t conditioned product
  - Basis: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources: `mass-balance-identity`
##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | Shared crop and conditioning processes | Subdivide a shared operation when crop-specific inputs, areas, equipment use, batches or outputs can be directly and reliably measured. Keep each crop, plant organ, grade and handoff identifiable. | iso-14044-lca-allocation |
| allocation_coproducts | Multiple intended crop products | Identify every intended output and its handoff. After subdivision, use a causal physical relation where it explains the shared burden. If no defensible physical relation exists, document the selected allocation basis and period, with economic allocation or system expansion only when the study goal supports it; disclose the rationale and sensitivity. Residues and waste without an intended product function receive no co-product allocation. | iso-14044-lca-allocation |
| allocation_productive_periods | Multi-year or perennial crops | Report establishment, non-bearing and productive periods separately. When lifetime attribution is required and subdivision is not possible, attribute establishment burdens across the declared productive-life outputs using recorded or explicitly forecast crop-specific output, and disclose the production-life evidence and sensitivity. Do not assign the same establishment burden again to each productive year. | iso-14044-lca-allocation |
| allocation_shared_assets | Irrigation, harvest and conditioning infrastructure | Attribute shared machinery, pumps, dryers, storage surfaces and utilities first by metered use or operating time. If unavailable, use a documented physical driver such as throughput or capacity use; use another basis only with justification. Record all consuming processes and periods and prevent duplicate attribution. | iso-14044-lca-allocation |
| allocation_reject_rework | Rework, downgrade, recovery and discard routes | Trace each rejected lot to rework, recovery, downgrade or discard. Include incremental rework inputs once, count accepted product only at its final handoff, and report saleable downgraded material as a distinct intended output. Do not assign a waste treatment credit without an evidenced treatment or substitution route. | iso-14044-lca-allocation; codex-spice-mycotoxin-practice-2017 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_propagation_material | managed_crop_production | propagation_material | supplier, seed, nursery or transfer record | species, plant part, propagation form, variety, quantity, source, date, field, crop period | Reconcile invoices, nursery tickets or internal transfer records to planted area | kg or declared count | Each planting or replanting event | Establishment and replanting events in scope | Declared field and crop | Sum by species, propagation form, field and period; normalize to selected gate output | Source documentation, unit check and lot traceability |
| cp_nutrient_application | managed_crop_production | fertilizer_nutrient_inputs; soil_nitrous_oxide | field application log, invoice, soil test | actual product, mass, nutrient grade, N form, organic/mineral status, application date, field, crop period, soil and climate fields used by selected method | Reconcile product purchase/application records and soil or method data | kg product and kg nutrient | Every application; summarize by crop period | All included establishment and productive periods | Declared crop fields and shared application equipment | Keep product exchanges individually recoverable under one PCR card; calculate N inputs from documented composition | Invoices, application logs, calibration and source method record |
| cp_crop_protection | managed_crop_production | crop_protection_products | application log and supplier product record | product, active ingredient, amount, treated area, application date, target, crop stage, field, pre-harvest interval where applicable | Reconcile application records and purchased quantities; note unused stock | kg product and active ingredient | Every application | All included crop periods | Declared crop fields and crop lot | Allocate actual applied amount to treated area and crop period; do not allocate unused stock as applied | Product label, application log, invoice and operator record |
| cp_irrigation | managed_crop_production | irrigation_water | meter or water-supplier record | water source, meter start/end, volume or mass, date, field, crop, irrigated area, pumping event | Read calibrated meter or reconcile supplier records; record conversions | m3 preferred; verified native unit permitted | Each irrigation event or billing period | Each crop year and productive period | Declared crop field and water source | Sum withdrawals by field and crop year; normalize to actual output of that period and selected gate | Meter calibration, invoice, water-source record and period reconciliation |
| cp_crop_energy | managed_crop_production | crop_production_energy | meter, fuel receipt and equipment log | carrier, amount, unit, equipment, operation, field, date, shared use, fuel quality or calorific value when converted | Reconcile fuel/electricity records and allocate shared use by measured operation | Carrier-native unit; kWh-equivalent only with documented conversion | Each operation or billing period | Each crop year and productive period | Declared crop site and equipment | Aggregate by actual process and carrier; normalize using crop-period output | Meter or invoice, equipment log and conversion evidence |
| cp_area_and_land_history | managed_crop_production | crop_land_occupation; crop_land_transformation | field register, map, lease, land history or geospatial record | field boundary, crop area, land-cover class, occupation dates, conversion date and prior/final cover | Reconcile current field map with dated land-history evidence | ha, ha·year, date | Each crop period and each land change | Full declared crop period and any conversion in scope | Declared crop field | Calculate area-time by period; report transformation separately from occupation | Geospatial or land register, dated records and area reconciliation |
| cp_harvest_batch | managed_crop_production; harvest_capture | harvest_ready_crop_material; harvest_ready_batch_input; harvested_target_product | crop lot, harvest ticket and scale record | species, plant organ, field, crop period, harvest date, gross/net/tare mass, moisture, quality state, transfer destination | Weigh or sample each lot using identified calibrated equipment; match inter-process lot id | kg and moisture basis | Each harvest lot | Each harvest date and crop period | Declared field and receiving process | Reconcile production output, harvest input and harvested output without duplicate final output | Calibrated scale, lot identity, moisture measurement and signed handoff |
| cp_field_residues | managed_crop_production; harvest_capture | removed_crop_biomass; production_loss_residue; crop_residue_to_soil | field inspection, sample and residue disposition record | plant part, residue type, wet/dry mass, field, crop period, retained/removed/sold/discarded destination | Measure representative residue or disposal lots and document sampling method | kg dry matter preferred | Each crop period and material-disposition event | All included crop periods | Declared field and biomass type | Partition the measured biomass among retained soil residue, intended output and discard; no duplicate destinations | Sampling records, dry-matter method and destination evidence |
| cp_harvest_energy | harvest_capture | harvest_energy | machinery meter, fuel receipt and harvest log | carrier, amount, equipment, operation, field, date, lot, shared use | Reconcile equipment and fuel logs to harvest operation | Carrier-native unit | Each harvest operation or billing period | Each crop period | Declared harvest equipment and field | Aggregate actual energy by harvest lot and normalize to selected gate output | Meter/invoice, equipment log and lot cross-reference |
| cp_grade_and_disposition | harvest_capture; primary_conditioning | lower_grade_product; other_intended_crop_outputs; harvest_discard; conditioned_lower_grade_product; conditioned_coproducts; conditioning_rejects | grade inspection, packing/scale record, sales or disposal record | material identity, grade, mass, moisture, intended use, sale/transfer/discard/rework destination, lot and handoff | Inspect, weigh and record each declared grade and destination | kg at measured moisture | Each lot and destination event | Each harvest or conditioning lot | Crop species, organ, grade and handoff | Mutually exclusive partition into intended product, rework, recovery, discard and waste; reconcile to incoming batch | Grade record, calibrated scale, sales/treatment documentation and lot ledger |
| cp_conditioning_batch | primary_conditioning | raw_harvest_batch; conditioned_reference_product | receiving, process and output lot records | incoming/output mass, tare, species, organ, crop date, moisture, quality, cleaning/drying route, handoff | Match intake and output lot records and measure moisture at declared points | kg, moisture % wet basis and/or aw | Each incoming and finished lot | Each included first-conditioning operation | Declared first-conditioning site and batch | Reconcile inputs, output grades, rejects, removed water and measured process losses | Calibrated scales, sampling plan, moisture meter check and lot balance |
| cp_conditioning_water | primary_conditioning | conditioning_water | water meter, tank or supplier record | source, volume, meter reading, batch, wash operation, recirculation, reuse, date | Read a calibrated meter or reconcile batch tank volume and supplier record | m3 or verified native unit | Each washing batch | Each included washing operation | Declared conditioning site and crop lot | Sum fresh input separately from recirculated/reused water; normalize to output lot | Meter/tank calibration, invoice and batch log |
| cp_conditioning_energy | primary_conditioning | conditioning_energy | equipment meter, fuel receipt and dryer log | carrier, amount, unit, dryer/cleaner, operation, batch, input/output moisture, operating time, shared use | Reconcile measured energy and operating records to each batch | Carrier-native unit; kWh-equivalent only with documented conversion | Each batch or billing period | Each included conditioning season | Declared first-conditioning facility and equipment | Aggregate by carrier and operation; allocate shared utilities by metered use or operating time | Meter/invoice, dryer log, moisture measurements and calibration record |
| cp_conditioner_transport | primary_conditioning | raw_crop_transport | freight bill, vehicle and route record | crop mass, vehicle, loaded distance, origin, destination, load, date, third-party/own-account status, empty return | Reconcile waybill or vehicle log to weighed crop lot and route distance | t·km, t and km | Every transfer or shipment | Transfers within the selected boundary | Declared field and first-conditioning site | Loaded tonne-kilometres by lot; disclose return-trip allocation and exclude own-account fuel when service flow is used | Waybill, vehicle log, route evidence and lot mass |
| cp_conditioning_wastewater | primary_conditioning | wastewater_treatment_service; conditioning_wastewater | wastewater meter, treatment invoice, discharge or treatment log | wastewater volume/mass, batch, source operation, destination, treatment route, provider and date | Meter, sample or reconcile service provider records to the crop batch | m3 or kg | Each washing batch or billing period | Each included wet-conditioning period | Declared site, discharge point and provider | Reconcile generated effluent with onsite reuse, discharge and treatment; avoid duplicate treatment routes | Meter/sample, provider invoice, discharge permit or treatment log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| crop_period_normalization | Managed crop production | Normalize each crop-period input by that period's measured net product output at the selected gate. Keep establishment, non-bearing, harvest and productive-period records separately; apply the allocation decision in Section 7 only when combining periods. | Crop-period inputs, field area, product identity, period and net output | Inventory per 1 kg selected reference product plus period-specific source records |  |
| nitrogen_soil_n2o | Direct managed-soil N2O | Apply the selected IPCC managed-soils equation and factor to documented N additions and other required activity data. Convert N2O-N to N2O with the method's molecular-mass ratio. Record factor, tier, climate/soil conditions and excluded indirect pathways; do not silently treat an emission factor as a measured flow. | Nutrient composition and application, relevant soil/crop activity data, selected factor | Direct N2O to air per 1 kg selected reference product | ipcc-2019-managed-soils |
| harvested_lot_balance | Harvest and crop conditioning | Reconcile incoming crop mass to accepted products, lower grades, co-products, waste/rejects, retained or removed residues, removed water and measured unexplained loss on a consistent moisture basis. Investigate any apparent output greater than incoming material; disclose any water or other mass added. | Gross and net batch weights, moisture, grades, residue and destination records | Reconciled product and residue exchanges by lot | mass-balance-identity |
| road_transport_work | Field-to-conditioner freight | Transport work equals net transported mass in tonnes multiplied by the loaded route distance in kilometres. Apply empty return treatment only as an explicit, evidenced allocation; do not combine a service exchange with the same vehicle's direct fuel record. | Net crop mass, loaded route distance, vehicle and empty-return records | t·km by raw crop lot | iso-14044-lca-allocation |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| crop_identity_and_gate | Reference product and all process handoffs | Identify one species, plant part, state, grade, site, period and exclusive harvest or first-conditioning gate. Record product UUID only after exact identity and support rows are verified. | Crop/site records, lot identifier, product description and reviewed identity evidence |
| crop_period_completeness | Annual and perennial production periods | Include establishment, non-bearing and productive periods where relevant; disclose the exact time window, productive-life evidence and any allocation used. | Planting and harvest dates, yield history, field register and calculation record |
| crop_input_completeness | Production and conditioning inputs | Reconcile planting material, all fertilizer/nutrient products, crop-protection inputs, irrigation, energy, conditioning water and purchased service inputs against supplier and operation records. One PCR fertilizer card covers all nutrient product exchanges for the process. | Invoices, application logs, meters, batch records and Flow Set resolution evidence |
| harvest_and_grade_reconciliation | Harvest and conditioning outputs | Account for each declared intended output and handoff. Distinguish accepted output, lower grade, other co-products, rework, retained field residues, waste and unexplained loss; do not count one mass in two destinations. | Lot balance, grade sheets, scale calibration, disposition and sales/treatment records |
| dried_product_state | Dried reference product | Record product moisture and measurement basis at the selected gate; document the relevant stability/product specification and the sampling method. Do not use drying ranges as mandatory product limits. | Moisture meter/oven results, calibration and the applicable buyer or official specification |
| shared_asset_and_period_attribution | Shared equipment, fields, dryers and utilities | Identify each consuming process and crop period. Use measured operation or physical use for shared burdens where possible and record the chosen allocation and evidence. | Asset log, meter, operating time, capacity/use record and allocation worksheet |
| environmental_method_disclosure | Land, soil emissions and waste treatment | Identify land cover, site conditions, emission methods and factors, direct versus indirect pathway, wastewater route and unresolved elementary UUIDs. State exclusions and sensitivity when primary evidence is unavailable. | Land history, activity data, selected IPCC method, method factor citation and treatment evidence |
| range_replacement | Provisional ranges | Treat reasoned estimates as first-pass screens only. Replace them with crop-, region-, technology- and gate-specific evidence or foreground records before any reviewed/active use. Do not interpret them as universal permitted values. | Source-backed regional evidence or reviewed site records and range QA report |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_single_crop_lot | Product identity | Reject an inventory that combines multiple species, plant organs, harvest days, fresh/dried states or cultivation systems without separately identified exchanges and attribution. | unsd-cpc-01699; codex-spice-mycotoxin-practice-2017 |
| validate_gate_and_reference | Reference product | Require exactly one selected gate and one reference product identity. If the gate is harvest, exclude conditioning; if it is primary-conditioned, treat harvested crop as an intermediate and count only conditioned target product at the reference gate. | codex-spice-mycotoxin-practice-2017 |
| validate_output_destinations | All production, harvest and conditioning outputs | Enumerate all intended outputs and their handoffs. Classify each downgraded lot as a saleable product, rework, recovery, discard or waste; classify field residue by whether it stays in soil, is removed or becomes an intended product. | iso-14044-lca-allocation; codex-spice-mycotoxin-practice-2017 |
| validate_crop_periods | Annual, rhizome and perennial routes | Reconcile inputs and outputs by crop period. Check establishment and productive-life attribution for multi-year crops and prevent double attribution of establishment or shared-asset burdens. | iso-14044-lca-allocation |
| validate_flow_set_bindings | Product inputs | Require the fertilizer/nutrient input to use one set-only `flow-set.agricultural-nutrient-supply` reference per process with no group. Require energy supply at set level unless a specific energy function is required by the data; use one process-water group for washing and an irrigation-water group only for actual irrigation. Resolve actual final exchanges to verified UUIDs during data generation. |  |
| validate_mass_and_moisture | Batch amounts and conditioned output | Check scale tare, mass units, moisture basis, grade quantities, removed water and output mass balance. Any output-to-input ratio above 1 requires an evidenced material addition or moisture/state explanation. | mass-balance-identity; codex-spice-mycotoxin-practice-2017 |
| validate_drying_stability | Dried product | Verify moisture or water-activity measurements at declared sampling points and the product's stated acceptance criterion. Codex guidance reports aw below 0.65 as adequate to prevent mycotoxin production in spices; disclose the chosen criterion and applicability rather than treating one moisture value as universal. | codex-spice-mycotoxin-practice-2017 |
| validate_conditioning_routes | Washing, drying and stabilization | Confirm each conditional operation occurred and its inputs, output state and destination are recorded. Omit inactive routes; do not add a wash exchange when no washing took place. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| validate_n2o_method | Soil nitrous oxide | Require activity data, selected factor and method tier for calculated direct soil N2O. Prevent double counting with upstream product datasets or indirect pathways, and leave the UUID unresolved where no compatible air elementary flow is verified. | ipcc-2019-managed-soils |
| validate_shared_assets | Shared equipment and facilities | Check that each shared pump, dryer, machine, field or utility burden is allocated once to its actual consuming processes and periods. | iso-14044-lca-allocation |
| validate_range_status | Candidate amount ranges | Check every range against its amount rule, unit, denominator and route condition. Treat reasoned estimates as replaceable screening values; require evidence-backed and crop-specific ranges before reviewed/active use when a broad estimate is not suitable. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Primary foreground crop-production and first-handoff dataset for one spice or aromatic crop product |
| downstream_use | Secondary process data for foreground process packages and their lifecyclemodel projections; background_dataset use only when its source coverage and boundary are suitable |
| allowed_use | Site- and period-specific production of one identified species and plant part at the declared harvest or first primary-conditioning gate |
| excluded_use | An aggregate inventory for all CPC 01699 products; exact coverage of the full CPC leaf; curry powders/pastes, extracts, oils, milled goods, mixtures, wild collection, or post-gate storage and distribution |
| required_metadata | Species and variety when known; plant part; site and geography; cultivation and harvest route; crop period; area and output; gate; fresh/dried state and moisture; grades and co-products; irrigation, nutrient, crop-protection, energy and conditioning records; upstream and Flow Set resolutions; attribution method |
| required_quality_disclosure | UUID gaps, source and measurement coverage, crop periods included, range evidence tier, moisture and grade basis, shared-asset allocation, output and waste reconciliation, emission method and factor, site and year representativeness |
| update_trigger | New route or gate; change in crop species/plant part or product state; new reference identity; new crop-period or allocation evidence; revised official spice handling or emissions methodology; replacement of candidate ranges with reviewed evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-01699 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, code 01699, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification examples; the historical CPC 2.1 note and the current-leaf scope review are kept distinct |
| codex-spice-mycotoxin-practice-2017 | official_guidance | FAO/WHO Codex Alimentarius Commission, REP17/CF, Appendix VI, Code of Practice for the Prevention and Reduction of Mycotoxin Contamination in Spices (2017), https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FMeetings%252FCX-735-12%252FWD%252FREP17_CFe.aspx | Harvest timing, lot separation, crop handling, optional washing, drying, moisture/water-activity checks, grades, rejects and post-harvest route controls |
| fao-herb-spice-quality-handbook | handbook | FAO, Quality assurance for small-scale rural food industries, section 2.4 Herb and spice products, https://www.fao.org/4/V5380E/V5380E09.htm | Farm-to-primary-processing stages, washing, grading, cleaning, winnowing, drying and product-quality measurements |
| ipcc-2019-managed-soils | official_guidance | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct and indirect N2O method selection and nitrogen application activity data |
| iso-14044-lca-allocation | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | Subdivision, co-product attribution, shared process handling and documented allocation choices |
| mass-balance-identity | method_factor | Physical mass-balance identity: input material equals intended outputs, residues, waste, removed water and measured loss on a consistent moisture basis | Candidate QA guardrails for nonnegative mutually exclusive lot disposition; not an external source or product-specific yield factor |
