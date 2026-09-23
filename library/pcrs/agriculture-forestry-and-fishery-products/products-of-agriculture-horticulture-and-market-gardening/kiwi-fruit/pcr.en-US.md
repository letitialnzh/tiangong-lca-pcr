---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.kiwi-fruit
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Fresh Kiwifruit at Packhouse Dispatch

## 1. Scope and Applicability

This candidate PCR covers fresh kiwifruit produced in a managed orchard and delivered at packhouse dispatch after
harvest, initial conditioning, grading, and any declared cold-storage period. It covers green, gold, and other
commercial kiwifruit cultivars when the product is sold as fresh whole fruit.

It excludes processed kiwifruit products, retail preparation after the declared dispatch point, and unrelated orchard
services. Cultivar, region, orchard system, maturity, and market grade remain foreground data inputs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.kiwi-fruit |
| classification_refs | CPC 3.0 01352 (Kiwi fruit) |
| covered_products | fresh whole kiwifruit at packhouse dispatch |
| excluded_products | processed fruit, juice, puree, retail food preparation |
| representative_product | fresh kiwifruit, market-grade, dispatched from packhouse |
| production_route | managed orchard production → harvest/capture → primary conditioning and grading → optional cold storage → packhouse dispatch |
| market_state | mature, market-grade fresh fruit; cultivar and grade disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | fresh whole kiwifruit dispatched from the packhouse |
| How much | 1 kg |
| How well | cultivar, maturity or dry-matter criterion, grade, and declared dispatch state |
| How long or cycle | one orchard production cycle and the declared postharvest storage period |
| reference_flow_link | Reference amount and product flow identity below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar; maturity or dry matter; market grade; dispatch state |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass (UUID to be resolved) | kg | Normalize the declared product output to 1 kg at packhouse dispatch. |
| storage_duration | cold-storage process | time | days | Record the actual storage duration and identify regular-air or controlled-atmosphere storage when used. |
| maturity_measure | harvest output | soluble solids or dry matter | % or declared site unit | Record the maturity criterion used to determine harvest readiness and retain the source method. |

## 5. System Boundary

The foreground boundary begins with the declared orchard production inputs and ends when market-grade whole fruit is
dispatched from the packhouse. Orchard establishment and durable infrastructure are included only when the data
provider reports their allocation period and basis. Retail distribution and consumer ripening are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | managed orchard production inputs and established crop system |
| starting_condition_role | disclosed foreground starting condition |
| product_classification_scope | fresh whole kiwifruit at packhouse dispatch |
| recursive_input_rule | same-category kiwifruit inputs remain explicit and require source-lot disclosure; do not recurse into another kiwifruit PCR |
| upstream_dataset_requirement | disclose purchased planting material, soil amendments, irrigation, crop-protection inputs, energy, and packaging inputs with their source dataset identities |
| disclosure | orchard location and system, cultivar, maturity criterion, harvest date, packhouse hand-off, grade, and storage route |

### Normative boundary rule (`boundary_start_and_handoff`)

The data provider shall identify the orchard production starting condition, the independent harvest hand-off, the
primary-conditioning/grading hand-off, and the declared packhouse dispatch point. Any deviation shall be disclosed.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| orchard_production | Managed orchard production | required | orchard route is used | activity | per 1 kg dispatched fruit |
| harvest_capture | Harvest and field handling | required | fruit is removed from orchard and handed off | activity | per 1 kg harvested fruit |
| primary_conditioning | Primary conditioning and grading | required | fruit is conditioned, graded, or sorted before dispatch | activity | per 1 kg conditioned fruit |
| cold_storage | Cold storage and stabilization | conditional | fruit is stored before dispatch | activity | per 1 kg dispatched fruit and storage day |

### Process: Managed Orchard Production (`orchard_production`)

#### Inputs

##### Product flows

###### Kiwifruit planting material (`planting_material_input`)

Record purchased vines, nursery plants, grafted material, or replacement plants by actual product identity. No reviewed
Flow Set covers this exchange and no exact platform UUID is fixed by this PCR; retain the card as unmapped until the
foreground planting material is known and an exact platform lookup is verified.

- Selected flow: Actual kiwifruit planting material
- Flow property / unit: Count or mass / plant or kg
- Amount rule: purchased or planted quantity by orchard block and establishment year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`

###### Agricultural nutrient and fertilizer inputs (`orchard_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources:

###### Irrigation water supplied (`irrigation_water_input`)

Record delivered orchard irrigation separately from environmental water withdrawal.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated delivered irrigation by orchard block and production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`

###### Electricity supplied to orchard operations (`orchard_electricity_input`)

Record purchased electricity used for irrigation, field services, and other included orchard operations.

- Selected flow: Orchard electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered or invoiced electricity allocated to the represented orchard output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`

###### Fuel supplied to mobile orchard machinery (`orchard_mobile_fuel_input`)

Record fuel used by tractors, sprayers, mowers, and other mobile orchard machinery.

- Selected flow: Mobile orchard machinery fuel
- Flow property / unit: Fuel or energy / L, kg, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured, invoiced, or calculated fuel by operation and orchard block
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_input_records`

###### Crop-protection formulation supplied (`crop_protection_input`)

Record every herbicide, insecticide, fungicide, or other formulation as a separate foreground exchange. No reviewed
Flow Set covers crop-protection products; retain this card as unmapped until the reported formulation supports an exact
verified platform UUID.

- Selected flow: Actual crop-protection formulation
- Flow property / unit: Mass of formulation or active ingredient / kg
- Amount rule: measured formulation mass by product and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`

#### Outputs

##### Product flows

###### Orchard fruit output (`orchard_fruit_output`)

Record the intended kiwifruit output before harvest, including cultivar and maturity basis.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: harvested mass reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_output_records`

##### Waste flows

###### Orchard residues and losses (`orchard_residues`)

Record prunings, dropped fruit, and other residues separately from intended fruit output, with their declared treatment.

This card remains unmapped because it combines route-specific residue identities that have no applicable reviewed
Flow Set and no single exact verified platform UUID. Dataset production shall split it by actual residue and fate.

- Selected flow: Actual orchard residue or loss stream
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: measured residue or loss mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_output_records`

### Process: Harvest and Field Handling (`harvest_capture`)

#### Inputs

##### Product flows

###### Orchard fruit received for harvest (`harvest_input`)

Record the orchard output entering harvest, its maturity criterion, and the harvest date or campaign.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: orchard output received for the harvest campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`

#### Outputs

##### Product flows

###### Harvested fruit handed to packhouse (`harvested_fruit`)

Record the collected output state and the hand-off to primary conditioning. Field bins and reusable handling assets are
reported when they cross the boundary.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: weighed harvested fruit at packhouse receipt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`

##### Waste flows

###### Harvest losses (`harvest_losses`)

Record fruit damaged, dropped, or rejected during harvest separately from the intended harvested output.

This card remains unmapped until the measured loss is classified by actual material state and destination.

- Selected flow: Actual kiwifruit harvest-loss stream
- Flow property / unit: Mass / kg
- Amount rule: measured harvest loss mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`

### Process: Primary Conditioning and Grading (`primary_conditioning`)

#### Inputs

##### Product flows

###### Process water supplied for conditioning (`conditioning_water_input`)

Record water used for washing, sanitation, hydrocooling, or other primary conditioning separately from irrigation.

- Selected flow: Kiwifruit conditioning process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered or batch-calculated delivered water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

###### Electricity supplied to conditioning (`conditioning_electricity_input`)

Record electricity used for washing, drying, grading, conveyors, cooling, and other included packhouse operations.

- Selected flow: Kiwifruit conditioning electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered or allocated electricity by lot, shift, throughput, or run time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

###### Flexible packaging supplied before dispatch (`flexible_packaging_input`)

Record liners, films, bags, or other flexible packaging only when used by the represented dispatched lot.

- Selected flow: Kiwifruit flexible packaging
- Flow property / unit: Mass or count / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: supplier specification and issued flexible-packaging quantity by dispatched lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

###### Carton or box packaging supplied before dispatch (`carton_box_packaging_input`)

Record corrugated cartons, trays, or paperboard boxes used for the represented dispatched lot.

- Selected flow: Kiwifruit carton and box packaging
- Flow property / unit: Mass or count / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- Amount rule: supplier specification and issued carton or box quantity by dispatched lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

###### Pallet or crate packaging supplied before dispatch (`pallet_crate_packaging_input`)

Record pallets, field bins, and reusable or single-use crates with their reuse count and allocated share.

- Selected flow: Kiwifruit pallet and crate packaging
- Flow property / unit: Mass or count / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: supplier or asset record and allocated packaging quantity by dispatched lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

###### Fruit received for conditioning (`conditioning_input`)

Record the raw harvested state entering conditioning and the receiving hand-off.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: weighed receipt into conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

#### Outputs

##### Product flows

###### Market-grade kiwifruit (`graded_fruit`)

Record grade, size, maturity information, and the dispatch-ready output state.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: weighed accepted market-grade output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dispatched fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

##### Waste flows

###### Culls and downgraded fruit (`culls_and_downgrades`)

Record culls and downgraded fruit as separate output destinations, including recovery, processing, feed, or disposal.

This card remains unmapped until each output destination and material state is known; dataset production shall split
useful downgraded fruit from waste culls before choosing an exact platform UUID.

- Selected flow: Actual downgraded kiwifruit or cull stream
- Flow property / unit: Mass / kg
- Amount rule: weighed cull and downgrade mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

### Process: Cold Storage and Stabilization (`cold_storage`)

#### Inputs

##### Product flows

###### Electricity supplied to cold storage (`storage_electricity_input`)

Record electricity used for refrigeration, controlled-atmosphere equipment, fans, monitoring, and included handling.

- Selected flow: Kiwifruit cold-storage electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered or allocated electricity by storage lot and duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg stored fruit and storage day
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

###### Conditioned fruit entering storage (`storage_input`)

Record the fruit state, storage start date, storage mode, and storage destination.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: weighed fruit entering storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg stored fruit
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

#### Outputs

##### Product flows

###### Stored fruit dispatched to market (`storage_output`)

Record storage duration, dispatch state, and any declared ripening or quality-control treatment.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: weighed fruit dispatched after storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dispatched fruit
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

##### Waste flows

###### Storage losses (`storage_losses`)

Record decay, shrinkage, and rejected fruit during storage separately from dispatched product.

This card remains unmapped until the actual rejected material state and destination are known.

- Selected flow: Actual kiwifruit storage-loss stream
- Flow property / unit: Mass / kg
- Amount rule: measured storage loss mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg stored fruit
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

## 7. Allocation and Co-product Handling

### Normative allocation rule (`output_set_and_allocation`)

The PCR shall enumerate intended market-grade fruit, culls, downgraded fruit, residues, and waste. The current product
study shall select and justify one allocation or treatment method for any co-products; the module does not prescribe
the final method. No output may be counted at more than one hand-off.

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collect orchard area and production period, cultivar, planting and management inputs, irrigation and energy, harvest
date and maturity criterion, harvested and graded mass, culls, storage mode and duration, packaging inputs, and all
output destinations. Use one protocol per data source and retain coverage, temporal representativeness, measurement
method, and uncertainty notes.

Normalize all collected amounts to 1 kg of dispatched market-grade kiwifruit. Keep mass balances between orchard,
harvest, conditioning, storage, culls, and losses. Do not infer current orchard quantities from another fruit PCR.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_orchard_input_records | orchard_production | planting and crop inputs | purchase and field application record | input; quantity; nutrient or active ingredient; date; block; area | invoices, labels, application logs | kg, L, kWh, item | per event | complete production year | orchard block | sum by input and normalize to dispatched mass | invoice, label, field log |
| cp_orchard_output_records | orchard_production | orchard output and residues | harvest and fate record | gross fruit; accepted fruit; culls; residues; fate; date; block | calibrated scale, harvest ticket, residue log | kg | per harvest | complete harvest year | orchard block | reconcile all outputs and normalize to dispatched mass | scale calibration, tickets, fate record |
| cp_harvest_records | harvest_capture | harvested fruit and harvest losses | harvest operation record | date; block; cultivar; maturity; quantity; labor or fuel; loss | harvest log, ticket, machine or fuel record | kg, L, h | per harvest operation | harvest season | orchard and harvest operation | aggregate by block and reconcile to orchard output | dated logs, tickets, meter or invoice |
| cp_conditioning_records | primary_conditioning | conditioned, graded, cull, and waste fruit | packhouse intake and grading record | intake; grade; cull; waste; water; energy; packaging; date; lot | packhouse ERP, scale, meter, packaging issue record | kg, m3, kWh, item | per lot or shift | conditioning period | packhouse line | reconcile intake to grades, culls, and waste | lot records, scale and meter checks |
| cp_storage_records | cold_storage | storage input, dispatch, and loss | cold-room and dispatch record | lot; start; end; mode; temperature; input; dispatch; shrinkage; rejection | cold-room log, inventory system, dispatch ticket | kg, days, kWh | per lot and day | declared storage period | cold room and dispatch gate | reconcile stored input to dispatch and losses | logger, inventory record, dispatch ticket |

## 9. Validation Rules

### Normative validation rule (`kiwifruit_route_completeness`)

The dataset is valid only when orchard production, harvest hand-off, primary conditioning/grading, and the declared
dispatch point are present; intended output, culls, residues, and losses are distinguished; cultivar and maturity or
dry-matter basis are disclosed; and any storage duration and mode are recorded when storage occurs.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | fresh kiwifruit foreground production and linked process or lifecycle model construction |
| allowed_use | fresh whole kiwifruit with matching cultivar, maturity/grade, route, and packhouse dispatch boundary |
| excluded_use | processed kiwifruit products, retail preparation, or a different declared product gate |
| required_metadata | orchard system, cultivar, maturity criterion, harvest date, grade, storage mode/duration, output destinations |
| required_quality_disclosure | site and period coverage, measurement methods, completeness, and source-lot identity |
| update_trigger | material change in orchard route, conditioning technology, storage practice, product gate, or evidence basis |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-ams-kiwifruit-grade-standards` | official_guidance | USDA Agricultural Marketing Service, Kiwifruit Grades and Standards, <https://www.ams.usda.gov/grades-standards/kiwifruit-grades-and-standards> | maturity, cleanliness, defect, grade, and packing quality dimensions |
| `uc-davis-kiwifruit-postharvest` | official_guidance | UC Davis Postharvest Research and Extension Center, Kiwifruit Produce Facts, <https://postharvest.ucdavis.edu/produce-facts-sheets/kiwifruit> | harvest maturity indicators, cold-storage conditions, ripening and quality risks |
| `nzkgi-kiwifruit-book-2024` | handbook | New Zealand Kiwifruit Growers Incorporated, The Kiwifruit Book 2024, <https://www.nzkgi.org.nz/resource/kiwifruit-book-2024/> | orchard management, harvest, packhouse grading, packaging, and storage route decomposition |
| `fao-kiwifruit-postharvest` | extension_guidance | FAO, Small-Scale Postharvest Handling Practices, <https://www.fao.org/4/ae075e/ae075e21.htm> | climacteric behavior, handling, ripening, and postharvest loss controls |
