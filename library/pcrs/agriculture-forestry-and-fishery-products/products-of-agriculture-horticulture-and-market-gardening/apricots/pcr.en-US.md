---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.apricots
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Apricots

## 1. Scope and Applicability

This PCR covers fresh, unprocessed apricots produced in managed perennial orchards and transferred at a declared farm-gate hand-off. It includes orchard establishment and replacement trees, immature and productive orchard management, harvest, and optional washing, sorting, grading, packing, or short farm-gate holding when those activities occur before the declared hand-off. It applies to rainfed and irrigated production and to fruit sold for fresh consumption or subsequent processing without changing the farm-gate product identity. It excludes nursery production, dried or canned apricots, juice, purée, preserves, off-farm transport and storage, retail, consumer use, and packaging end-of-life. The data package shall state whether primary handling and packing are included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.apricots |
| classification_refs | CPC 3.0: 01343 Apricots |
| covered_products | fresh, unprocessed apricot fruit transferred at the declared farm-gate condition |
| excluded_products | nursery planting-stock production; dried, canned, frozen, juiced, puréed, or preserved apricots; off-farm logistics and downstream use |
| representative_product | harvested fresh apricots at farm gate |
| production_route | perennial orchard establishment, orchard management, harvest, and conditional farm-gate primary handling |
| market_state | fresh fruit with cultivar, maturity, quality grade, accepted/rejected basis, and handling status disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | fresh, unprocessed apricot fruit at the farm gate |
| How much | 1,000 kg as-received accepted apricot fruit |
| How well | fruit meeting the declared cultivar or cultivar group, maturity, quality grade, defect basis, moisture convention, and hand-off condition; no transformation into a processed apricot product |
| How long or cycle | one declared production year within the orchard productive life, with establishment and replacement inputs allocated over the declared orchard life |
| reference_flow_link | accepted output from `apricot_harvest_and_farm_gate_handling`, or from `apricot_primary_handling` when handling is included |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh apricot fruit at farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or cultivar group; production country, region, and climate; orchard age and productive status; crop year; orchard area; irrigation status and water source; maturity and quality convention; accepted and rejected fruit basis; primary handling included or excluded |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | accepted apricot output | Mass | kg | Report accepted fruit on the declared as-received farm-gate basis. Retain measured maturity, moisture, and defect adjustments before normalization. |
| `orchard_life_allocation_basis` | establishment, replacement, and immature-orchard inputs | area, time, or mass activity property | ha, orchard-year, or kg fruit | Allocate perennial establishment and replacement inputs across the declared orchard life and productive output basis; disclose orchard replacement, abandonment, and non-bearing years. |
| `area_to_reference_conversion` | area-based orchard inputs and emissions | activity-specific property | activity-specific unit | Divide orchard-year totals by accepted farm-gate fruit mass from the same orchard-year or declared multi-year average before scaling to 1,000 kg. |
| `nutrient_product_and_basis` | fertilizer and soil-amendment input | product mass and nutrient mass | kg product; kg N, kg P2O5, or kg K2O | Record the actual product and application quantity together with the declared nutrient basis. One conditional total card may contain the products and nutrients actually used. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | orchard site before or at establishment, with planting material and purchased management inputs crossing the foreground boundary; prior land condition and existing orchard history are disclosed |
| starting_condition_role | start of managed perennial apricot production and orchard asset accounting |
| product_classification_scope | fresh apricot fruit corresponding to CPC 3.0 code 01343 |
| recursive_input_rule | apricot planting material and retained fruit are upstream inputs only when crossing the boundary; they must not be recursively represented as the same farm-gate apricot output |
| upstream_dataset_requirement | compatible upstream datasets for planting material, nutrient and soil-amendment products, crop protection, energy, irrigation supply, machinery services, packaging used before hand-off, and applicable waste treatment |
| disclosure | cultivar, orchard age, establishment year, productive life, replacement trees, orchard area, previous land use, soil and climate context, irrigation, nutrient basis, crop protection, yield, harvest losses, handling, co-products, and residue or waste destination |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_establishment_to_farm_gate` | all conforming datasets | Include site preparation, planting, orchard establishment, immature years, productive orchard management, harvest, and primary handling performed before the declared farm-gate hand-off. | `fao-crop-production-methodology`; `fao-stone-fruit-production-guide` |
| `boundary_perennial_orchard_disclosure` | establishment and replacement trees | Include establishment and replacement-tree inputs only after assigning them to the declared orchard life or accepted fruit output basis; disclose the allocation horizon and non-bearing years. | `fao-stone-fruit-production-guide`; `iso-14067` |
| `boundary_direct_field_emissions` | managed soil, crop residues, and nutrient application | Include direct and indirect nutrient- and residue-related emissions using a geographically applicable method and the same activity data used for nutrient and residue accounting. | `ipcc-2019-refinement`; `emep-eea-2023-guidebook` |
| `boundary_farm_gate_handling` | optional primary handling | Include washing, sorting, grading, packing, or short holding only when performed before hand-off and not already embedded in the harvest record; identify rejected fruit and its destination. | `fao-crop-production-methodology` |
| `boundary_post_farm_gate_exclusion` | downstream activities | Exclude off-farm transport, storage, distribution, retail, consumer use, processing, and packaging end-of-life unless the study explicitly extends beyond this PCR. | `iso-14044` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `apricot_orchard_establishment_and_management` | Apricot orchard establishment and management | required | always; include establishment, replacement, immature years, and productive-year management with declared orchard-life allocation | managed perennial biological production and orchard asset formation | orchard area, orchard-years, establishment period, and annual accepted fruit output |
| `apricot_harvest_and_farm_gate_handling` | Apricot harvest and farm-gate handling | required | always | harvest capture, field handling, and farm-gate transfer | harvested, accepted, downgraded, and lost fruit mass for one production year |
| `apricot_primary_handling` | Apricot primary handling | conditional | washing, sorting, grading, packing, or short farm holding occurs before hand-off and is not included in the harvest record | prepare fruit for the declared hand-off condition | incoming fruit mass and accepted handled fruit mass |

### Process: Apricot orchard establishment and management (`apricot_orchard_establishment_and_management`)

#### Inputs

##### Product flows

###### Apricot planting material (`apricot_planting_material_input`)

Record nursery trees, grafted plants, or other planting material crossing into orchard establishment. State origin and allocation when material is self-propagated or retained.

- Selected flow: Apricot planting material for orchard establishment
- Flow property / unit: Item count or mass / item or kg
- Amount rule: measured planting-material quantity by orchard block and establishment year; retain any count-to-mass conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_establishment_records`
- Sources: `fao-stone-fruit-production-guide`

###### Agricultural nutrient and fertilizer inputs (`apricot_orchard_establishment_and_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_orchard_management_records`
- Sources: `fao-fertilizer-code`; `fao-stone-fruit-production-guide`

###### Irrigation water supplied (`irrigation_water_input`)

Record irrigation only when water is applied to the orchard. Rainfed production records zero applied irrigation with a documented water-balance or management basis.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated irrigation volume by orchard block and production year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_irrigation_records`
- Sources: `fao-crop-production-methodology`

###### Farm machinery fuel or service supplied (`farm_energy_input`)

Record diesel, electricity, or contracted machinery service used for tillage, mowing, spraying, pruning, and orchard maintenance when it crosses the foreground boundary.

- Selected flow: Farm machinery fuel or energy service
- Flow property / unit: Energy or mass / MJ or kg fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: fuel invoices, equipment logs, or supplier service records allocated to the orchard block and reporting year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_energy_records`
- Sources: `fao-crop-production-methodology`

###### Crop-protection products supplied (`crop_protection_input`)

Record the actual crop-protection products and application quantities used for orchard protection, retaining active ingredient, product formulation, and application event where available.

- Selected flow: Crop-protection product supply
- Flow property / unit: Product mass or volume / kg product or L product
- Amount rule: measured product amount per application event and orchard block; preserve active-ingredient information
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_crop_protection_records`
- Sources: `fao-crop-production-methodology`; `fao-stone-fruit-production-guide`

##### Waste flows

###### Orchard pruning and replacement residues (`orchard_residue_output`)

Record prunings, removed trees, and other orchard residues leaving the managed orchard. The destination determines whether the material is retained, composted, burned, or treated as waste.

- Selected flow: Orchard pruning and replacement residues
- Flow property / unit: Mass / kg dry or as-received material
- Amount rule: measured or calculated residue mass by orchard block and year, with moisture basis and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_apricot_residue_records`
- Sources: `fao-crop-production-methodology`; `ipcc-2019-refinement`

##### Elementary flows

###### Managed orchard land occupation (`orchard_land_occupation`)

Record the land occupation associated with the declared orchard area and reporting period. Retain prior land use and any transformation event separately.

- Selected flow: Managed agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: declared orchard area multiplied by the time occupied in the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_apricot_land_records`
- Sources: `fao-crop-production-methodology`; `iso-14067`

#### Outputs

##### Product flows

###### Orchard production hand-off (`orchard_production_output`)

This internal product hand-off carries the managed orchard output into harvest and handling. It is measured as harvested fruit before final acceptance or rejection.

- Selected flow: Apricot fruit from managed orchard
- Flow property / unit: Mass / kg
- Amount rule: measured harvested fruit mass by orchard block and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_harvest_records`
- Sources: `fao-stone-fruit-production-guide`

##### Elementary flows

###### Field emissions from nutrient and residue management (`field_emissions_output`)

Record direct and indirect soil or air emissions calculated from the actual nutrient and residue activity data and the selected geographic method.

- Selected flow: Field emissions from nutrient and residue management
- Flow property / unit: Substance mass / kg substance
- Amount rule: calculate emissions from declared nutrient, residue, climate, and soil activity data using the selected method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_apricot_orchard_management_records`
- Sources: `ipcc-2019-refinement`; `emep-eea-2023-guidebook`

### Process: Apricot harvest and farm-gate handling (`apricot_harvest_and_farm_gate_handling`)

#### Inputs

##### Product flows

###### Harvested apricot fruit received (`harvested_apricot_input`)

Record harvested fruit entering harvest accounting before sorting, grading, or other optional primary handling.

- Selected flow: Apricot fruit from managed orchard
- Flow property / unit: Mass / kg
- Amount rule: reconcile orchard output with harvest tickets and receiving records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_harvest_records`
- Sources: `fao-stone-fruit-production-guide`

##### Waste flows

###### Harvest and field losses (`harvest_loss_output`)

Record fruit left unharvested, damaged, or discarded during harvest, keeping the destination and treatment route explicit.

- Selected flow: Apricot harvest and field losses
- Flow property / unit: Mass / kg
- Amount rule: harvested-mass reconciliation: received fruit plus documented losses minus transfers to other declared outputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_apricot_harvest_records`
- Sources: `fao-crop-production-methodology`

#### Outputs

##### Product flows

###### Fresh apricots at farm gate (`fresh_apricot_farm_gate_output`)

Record accepted, fresh, unprocessed apricots transferred at the declared farm-gate hand-off. This is the PCR reference output when primary handling is excluded.

- Selected flow: Fresh apricot fruit at farm gate
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted fruit at the declared hand-off, reconciled to harvested input and rejected fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_harvest_records`
- Sources: `fao-crop-production-methodology`

##### Waste flows

###### Rejected or downgraded apricot fruit (`rejected_apricot_output`)

Record fruit rejected at farm gate or downgraded from the reference quality, including compost, animal feed, processing, or disposal destination.

- Selected flow: Rejected or downgraded apricot fruit
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_harvest_records`
- Sources: `fao-crop-production-methodology`

### Process: Apricot primary handling (`apricot_primary_handling`)

#### Inputs

##### Product flows

###### Primary handling water (`primary_handling_water_input`)

Record water that crosses the boundary for washing or other primary handling when the activity is included in the declared farm-gate condition.

- Selected flow: Process water for apricot primary handling
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter or batch record for water entering the handling operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg handled fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_handling_records`
- Sources: `fao-crop-production-methodology`

###### Primary handling energy (`primary_handling_energy_input`)

Record electricity or fuel used for washing, sorting, grading, packing, or short holding included before farm-gate hand-off.

- Selected flow: Primary handling electricity or fuel
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, invoice, or equipment log allocated to the handled apricot batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg handled fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_handling_records`
- Sources: `fao-crop-production-methodology`

###### Packing materials (`packing_material_input`)

Record packing material only when packing is part of the declared farm-gate hand-off, retaining material type, mass, reuse cycles, and loss.

- Selected flow: Packaging material for fresh apricots
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: purchased packaging mass adjusted for reuse and allocated to accepted handled fruit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted handled fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_apricot_handling_records`
- Sources: `fao-crop-production-methodology`

##### Waste flows

###### Handling rejects and wash residues (`handling_reject_output`)

Record rejected fruit, sediment, and other residues leaving primary handling, with destination and treatment route.

- Selected flow: Primary handling rejects and residues
- Flow property / unit: Mass / kg
- Amount rule: batch mass balance for incoming fruit, accepted fruit, rejects, and residues
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted handled fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_apricot_handling_records`
- Sources: `fao-crop-production-methodology`

#### Outputs

##### Product flows

###### Accepted handled apricots (`handled_apricot_output`)

Record fresh apricots after the included washing, sorting, grading, packing, or short holding step at the declared farm-gate hand-off.

- Selected flow: Fresh apricot fruit at farm gate after primary handling
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted handled fruit output by batch and quality grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted handled fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apricot_handling_records`
- Sources: `fao-crop-production-methodology`

## 7. Allocation and Co-product Handling

Allocate orchard establishment, replacement trees, shared machinery, irrigation infrastructure, and other multi-period inputs across the declared orchard life and reporting periods using orchard area, productive years, and accepted fruit output. Do not silently annualize non-bearing years; disclose the selected productive-life horizon and replacement events. Where apricot fruit is split among fresh, processing, feed, compost, or disposal destinations, retain separate masses. Use physical mass allocation when products have comparable moisture and function; otherwise use a documented economic or quality-based allocation and report the selected basis. Avoid allocation by treating rejected fruit as a co-product unless it has a declared market or service; otherwise record it as a waste or residue flow with its destination. Do not double count orchard inputs embedded in an upstream planting-material dataset.

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orchard_life_and_period` | establishment, replacement, and shared orchard assets | Allocate multi-period inputs to the declared orchard-year and accepted fruit output using the declared orchard life, productive years, area, and yield records. | `fao-stone-fruit-production-guide`; `iso-14067` |
| `allocation_apricot_destinations` | fresh, processing, feed, compost, and disposal destinations | Keep destination masses separate; use documented physical or economic allocation only when more than one declared product or service shares a process. | `iso-14044` |
| `allocation_rejects_and_residues` | rejected fruit and orchard residues | Treat material without a declared product or service as waste or residue and model its destination; do not grant a co-product credit solely because it has a possible downstream use. | `iso-14044`; `ipcc-2019-refinement` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_apricot_establishment_records` | `apricot_orchard_establishment_and_management` | planting material | nursery invoices, planting maps, and establishment logs | block; cultivar; tree count; material type; establishment year; source | invoice review and block reconciliation | item, kg | each establishment or replacement event | full orchard establishment and replacement period | each orchard block | aggregate by block and orchard-year | invoice, planting map, and supervisor sign-off |
| `cp_apricot_orchard_management_records` | `apricot_orchard_establishment_and_management` | nutrient, amendment, and field-emission activity | input invoices, application logs, soil records, and method inputs | product; amount; nutrient analysis; date; block; soil/climate method inputs | invoice, application-log, and method-data reconciliation | kg product; kg nutrient | each application; annual roll-up | crop year and declared orchard life | each orchard block | sum by product, nutrient, block, and year | invoice, application record, and agronomist review |
| `cp_apricot_irrigation_records` | `apricot_orchard_establishment_and_management` | irrigation water | meter records or irrigation schedules | block; source; volume; date; meter basis; rainfed flag | meter read or documented calculation | m3 | each irrigation event or monthly | crop year | each irrigated block | sum by block and crop year | meter calibration, water bill, or water-balance check |
| `cp_apricot_energy_records` | `apricot_orchard_establishment_and_management` | machinery and handling energy | fuel invoices, equipment logs, electricity bills | equipment; fuel or electricity; amount; date; block; task | invoice and log reconciliation | L, kg, kWh, or MJ | each delivery or operating period | crop year | orchard and handling facility | allocate to orchard block or handled batch by activity record | invoice, meter, or equipment log |
| `cp_apricot_crop_protection_records` | `apricot_orchard_establishment_and_management` | crop protection | application records and product labels | product; formulation; active ingredient; amount; date; block; application purpose | application-log and label review | kg or L product | each application | crop year | each orchard block | sum by product and active ingredient | signed application record and label |
| `cp_apricot_land_records` | `apricot_orchard_establishment_and_management` | land occupation and transformation | cadastral, GIS, and orchard maps | block area; prior land use; establishment date; replacement date | map and record reconciliation | ha or m2 | establishment and annual update | orchard life and crop year | each orchard block | aggregate area-time by block and period | map, lease, and land-history evidence |
| `cp_apricot_residue_records` | `apricot_orchard_establishment_and_management` | pruning and replacement residues | residue logs and destination receipts | residue type; mass; moisture; date; block; destination | weighing or documented estimation | kg | each removal or annual roll-up | crop year | each orchard block | sum by residue type and destination | scale ticket, receipt, or supervisor estimate |
| `cp_apricot_harvest_records` | `apricot_harvest_and_farm_gate_handling` | harvested, accepted, rejected, and lost fruit | harvest tickets, weighbridge records, and grade records | block; cultivar; date; harvested mass; accepted mass; rejected mass; destination | batch weighing and mass-balance reconciliation | kg | each harvest batch | crop year | each orchard block and receiving point | aggregate by block, grade, and destination | calibrated scale, ticket, and grade record |
| `cp_apricot_handling_records` | `apricot_primary_handling` | water, energy, packing, rejects, and accepted output | facility meters, invoices, batch records, and packing logs | batch; incoming mass; water; energy; material; accepted mass; rejects; destination | batch mass balance and utility allocation | kg, m3, kWh, or MJ | each batch or operating period | handling period within crop year | declared handling facility | allocate shared utilities and materials by handled mass | meter, invoice, batch record, and scale ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_apricot_reference_normalization` | all process outputs | normalized amount = declared flow amount / accepted farm-gate fruit mass × 1,000 kg | flow amount; accepted fruit mass | amount per 1,000 kg accepted fruit | `iso-14067` |
| `calc_apricot_orchard_life_allocation` | establishment and replacement inputs | allocated orchard-year amount = total declared asset input × reporting orchard-year share over declared orchard life | asset input; orchard life; reporting period | orchard-year input | `fao-stone-fruit-production-guide`; `iso-14067` |
| `calc_apricot_nutrient_basis` | nutrient and amendment card | nutrient mass = product mass × declared nutrient fraction; retain product mass and nutrient basis separately | product mass; label or analysis fraction | kg product and kg nutrient | `fao-fertilizer-code` |
| `calc_apricot_mass_balance` | harvest and primary handling | incoming mass = accepted output + rejected output + measured loss, with unexplained residual investigated | incoming, accepted, rejected, and loss records | reconciled batch flows | `fao-crop-production-methodology` |
| `calc_apricot_field_emissions` | soil and residue emissions | apply the selected geographic method to collected nutrient, residue, soil, and climate inputs; do not reuse a default factor without recording its applicability | nutrient, residue, soil, climate, and method inputs | elementary emission flows | `ipcc-2019-refinement`; `emep-eea-2023-guidebook` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_apricot_identity` | all product and input rows | Declare cultivar, product state, source, destination, and whether primary handling is includeds remain explicit until verified. | product records, invoices, labels, and dataset metadata |
| `dqr_apricot_measurement` | mass, water, energy, and area rows | Use calibrated weighing or metering where available; document conversion, moisture basis, and estimation method otherwise. | scale, meter, invoice, map, or signed estimate |
| `dqr_apricot_temporal_coverage` | orchard and crop-year rows | Cover the complete crop year and declare orchard establishment, replacement, productive status, and reporting period. | orchard register, crop calendar, and annual records |
| `dqr_apricot_completeness` | all process inputs and outputs | Reconcile orchard inputs, harvested fruit, accepted output, rejects, residues, and losses; investigate unexplained residuals. | batch and annual mass balance |
| `dqr_apricot_transparency` | allocation, factors, and boundaries | Disclose allocation basis, primary handling inclusion, upstream dataset links, emission method, and identity evidence gap or evidence gaps. | review record and dataset disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_apricot_reference_definition` | reference flow | Require 1,000 kg accepted fresh apricot fruit, declared hand-off condition, required qualifiers, and later-resolved reference identity before publication. | `iso-14067` |
| `validation_apricot_orchard_periods` | establishment and management | Check that orchard establishment, non-bearing periods, replacement events, productive years, and annualization basis are declared and not double counted. | `fao-stone-fruit-production-guide`; `iso-14067` |
| `validation_apricot_mass_balance` | harvest and primary handling | Check incoming fruit = accepted fruit + rejects + measured losses within the declared tolerance and trace every rejected destination. | `fao-crop-production-methodology` |
| `validation_apricot_flow_bindings` | all flow cards | Use the narrowest applicable Flow Set group first; use a fixed UUID only after exact verification for an uncovered flow; otherwise preserve unmapped coverage without changing true semantics. | `iso-14044` |
| `validation_apricot_evidence` | all constrained ranges and factors | Require source-backed evidence or a declared foreground collection protocol for constrained values; mark provisional guardrails as replaceable estimates. | `iso-14044` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset when the completed dataset has compatible identity, geography, time, and quality metadata |
| downstream_use | foreground data package construction for fresh apricots at farm gate and background substitution where the published profile permits |
| allowed_use | attributional agricultural LCA, farm-gate footprinting, crop-year comparison, and documented scenario analysis within the declared orchard and handling boundary |
| excluded_use | direct substitution for processed apricot products, universal regional averages without disclosed representativeness, consequential claims without additional system modelling, and downstream logistics or retail claims outside the boundary |
| required_metadata | cultivar; geography; crop year; orchard age and status; area; yield; irrigation; nutrient basis; crop protection; energy; harvest and reject basis; handling inclusion; allocation; flow identity; and coverage finding |
| required_quality_disclosure | measurement sources, estimation and conversion rules, temporal and geographic coverage, completeness checks, allocation basis, method factors, uncertainty or guardrails, and identity evidence gaps |
| update_trigger | new crop year, cultivar or production-route change, orchard replacement or land-history change, material handling change, revised emission method, or verified identity and evidence resolution |

## 11. Data Sources

| source_id | type | Reference | Use in this PCR |
| --- | --- | --- | --- |
| `fao-crop-production-methodology` | official_guidance | FAO crop production and farm data collection guidance | process boundary, orchard records, handling records, and mass-balance protocol |
| `fao-stone-fruit-production-guide` | extension_guidance | FAO or equivalent official stone-fruit orchard production guidance | perennial orchard establishment, management, harvest, and orchard-life disclosure |
| `fao-fertilizer-code` | official_guidance | FAO fertilizer best-management code | product and nutrient-basis recording |
| `ipcc-2019-refinement` | method_factor | 2019 IPCC Refinement to the 2006 IPCC Guidelines | managed-soil, residue, and agricultural emission calculation method |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA air pollutant emission inventory guidebook | applicable air-emission method and reporting distinctions |
| `iso-14044` | standard | ISO 14044 environmental management—life cycle assessment—requirements and guidelines | allocation, boundary, and evidence rules |
| `iso-14067` | standard | ISO 14067 greenhouse gases—carbon footprint of products | reference mass, normalization, orchard-life allocation, and disclosure rules |
