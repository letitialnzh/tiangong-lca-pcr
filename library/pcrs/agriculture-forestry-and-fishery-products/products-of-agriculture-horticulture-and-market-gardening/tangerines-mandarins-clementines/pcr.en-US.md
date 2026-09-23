---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tangerines-mandarins-clementines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tangerines, mandarins, clementines

## 1. Scope and Applicability

This PCR covers fresh, unprocessed tangerines, mandarins, and clementines produced in managed perennial citrus orchards and transferred at a declared farm-gate hand-off. It includes orchard establishment and renewal, productive orchard management, harvest, and optional sorting or basic conditioning performed before the hand-off. It applies to rainfed and irrigated orchards and to fruit sold for fresh consumption or later food processing without changing the farm-gate product identity. It excludes nursery production, juice or concentrate manufacture, preserved, dried, frozen, or otherwise transformed fruit, off-farm transport, storage, retail, consumer use, and packaging end-of-life. Orchard establishment and renewal impacts shall be allocated to the declared production years and disclosed rather than omitted.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tangerines-mandarins-clementines |
| classification_refs | CPC 3.0: 01324 Tangerines, mandarins, clementines |
| covered_products | fresh, unprocessed tangerines, mandarins, and clementines transferred at the farm gate, including fruit destined for fresh-market or food-processing use |
| excluded_products | nursery trees; juice, concentrate, purée, preserved, dried, or frozen citrus products; prepared foods; off-farm logistics and downstream use |
| representative_product | harvested fresh tangerine, mandarin, or clementine fruit at farm gate |
| production_route | perennial citrus orchard establishment, orchard management, harvest, and conditional farm-gate sorting or basic conditioning |
| market_state | fresh fruit at the declared hand-off condition, with species or cultivar group, maturity, quality grade, accepted and rejected mass, and conditioning status disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | fresh, unprocessed tangerine, mandarin, or clementine fruit at the farm gate |
| How much | 1,000 kg as-received accepted fruit |
| How well | Fruit meeting the declared species or cultivar group, maturity, quality grade, defect basis, and farm-gate hand-off condition; no conversion into juice, concentrate, preserved, dried, or frozen product |
| How long or cycle | One declared production year within the productive life of the perennial orchard, with establishment and renewal inputs allocated across the declared orchard life |
| reference_flow_link | Terminal accepted fruit output from `tangerine_harvest_and_farm_gate_handling` when optional sorting is excluded, or from `tangerine_optional_farm_gate_sorting` when it is included |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh tangerine, mandarin, or clementine fruit at farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or cultivar group; production country, region, and climate; orchard age and productive status; crop year; orchard area and density; irrigation status and water source; maturity and as-received mass basis; accepted, downgraded, and rejected fruit basis; optional sorting or conditioning status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | reference fruit output | Mass | kg | Report accepted fruit on the declared as-received farm-gate basis. If dry matter, moisture, maturity, or defect adjustments are measured, retain the measured basis and document any conversion before normalization. |
| `orchard_life_allocation_basis` | establishment, immature years, and renewal trees | area, time, or mass activity property | ha, orchard-year, or kg fruit | Allocate establishment and renewal inputs over the declared productive orchard life using the same orchard area, production years, and accepted-fruit output basis; disclose replacement, abandonment, or replanting events. |
| `crop_cycle_normalization` | orchard, harvest, and sorting flows | activity-specific property | activity-specific unit | Normalize each declared crop-cycle total to 1,000 kg accepted farm-gate fruit using accepted fruit mass from the same orchard block, campaign, or documented multi-year aggregation. |
| `nutrient_product_and_basis` | fertilizer and soil-amendment input | product mass and nutrient mass | kg product; kg N, kg P2O5, kg K2O, or declared organic nutrient basis | Record the actual products and applied product quantities together with the nutrient basis used for calculation. One conditional total card may contain all actual nutrient or amendment products without requiring a row for every fertilizer class. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | established or newly established citrus orchard at the start of the declared productive cycle, with planting material and purchased management inputs crossing the foreground boundary; previous land condition is disclosed |
| starting_condition_role | start of managed perennial tangerine, mandarin, and clementine production and orchard asset accounting |
| product_classification_scope | fresh, unprocessed tangerines, mandarins, and clementines corresponding to CPC 3.0 code 01324 |
| recursive_input_rule | Fresh citrus fruit must not be looped back as a recursive input to this same product category. Nursery trees and other planting material use their own upstream identity; retained fruit, culls, and residues are disclosed by destination and are not counted as planting material. |
| upstream_dataset_requirement | Compatible upstream datasets are required for nursery planting material, nutrient or soil-amendment products, crop protection, electricity, fuel, irrigation supply, machinery or contracted services, packaging used before hand-off, and applicable waste treatment when these activities are not measured as foreground activity. |
| disclosure | Disclose species or cultivar group, orchard location and climate, age, density, establishment and renewal history, orchard area, irrigation, nutrient and crop-protection basis, energy, crop year, harvest lots, accepted and rejected fruit, optional sorting, co-products, residue destination, and excluded downstream activities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_citrus_orchard_to_farm_gate` | all conforming datasets | Include orchard establishment or renewal, immature years, productive orchard management, harvest, and optional sorting or basic conditioning performed before the declared farm-gate hand-off. | `fao-crop-production-methodology`; `fao-citrus-production-guidance` |
| `boundary_perennial_orchard_disclosure` | orchard assets and renewal | Include establishment, non-bearing, and renewal inputs only after assigning them to the declared orchard life or accepted fruit output basis; disclose the allocation horizon and exceptional replacement or abandonment. | `fao-citrus-production-guidance`; `iso-14067` |
| `boundary_direct_field_exchanges` | managed soil, crop residues, and crop protection | Include direct and applicable indirect nutrient-, residue-, and crop-protection-related environmental exchanges using the same activity records used for nutrient, irrigation, and residue accounting and a geographically applicable method. | `ipcc-2019-refinement-vol-4`; `emep-eea-2023-guidebook` |
| `boundary_post_farm_gate_exclusion` | downstream activities | Exclude off-farm transport, storage, distribution, retail, consumer use, juice or concentrate production, and packaging end-of-life unless the study explicitly declares a boundary extension. | `iso-14044` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tangerine_orchard_establishment_and_management` | Tangerine, mandarin, and clementine orchard establishment and management | required | always; include establishment, renewal, and productive-year management with declared orchard-life allocation | managed perennial biological production and orchard asset formation | orchard area, orchard-years, establishment or renewal period, and annual accepted fruit output |
| `tangerine_harvest_and_farm_gate_handling` | Tangerine, mandarin, and clementine harvest and farm-gate handling | required | always | harvest capture, field handling, mass reconciliation, and farm-gate transfer | harvested, accepted, downgraded, rejected, and lost fruit mass for one production year |
| `tangerine_optional_farm_gate_sorting` | Optional farm-gate sorting or basic conditioning | conditional | sorting, washing, grading, or basic conditioning occurs before hand-off and is not already included in the harvest record | prepare fruit for the declared farm-gate state | incoming fruit mass, accepted output, named destinations, water, energy, and waste by batch |

### Process: Tangerine, mandarin, and clementine orchard establishment and management (`tangerine_orchard_establishment_and_management`)

#### Inputs

##### Product flows

###### Citrus planting material (`citrus_planting_material_input`)

Record nursery trees, grafted plants, or other planting material crossing into orchard establishment or renewal. Retained fruit and orchard residues must not be substituted for planting-material identity.

- Selected flow: Citrus planting material
- Flow property / unit: Count or mass / trees, plants, or kg as recorded
- Amount rule: measured planting-material quantity installed or replaced by orchard block and establishment or renewal year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources:
- Range: Provisional citrus planting screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 200
  - Upper: 800
  - Unit: trees/ha
  - Basis: established orchard blocks; replace with nursery and planting records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`tangerine_orchard_establishment_and_management_agricultural_nutrient_inputs`)

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
- Collection protocol: `cp_orchard_management_records`
- Sources:
- Range: Provisional nutrient and amendment screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kg product/ha/year
  - Basis: all nutrient and soil-amendment products combined; replace with product records and nutrient analysis
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water_input`)

Record irrigation only when water is applied to the orchard. Rainfed production records zero applied irrigation with a documented water-balance or farm-management basis.

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
- Collection protocol: `cp_orchard_management_records`
- Sources:
- Range: Provisional orchard irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12,000
  - Unit: m3/ha/year
  - Basis: one production year; replace with metered records or a local water balance
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Orchard electricity and mobile machinery fuel (`orchard_energy_input`)

Record electricity, diesel, gasoline, or other purchased energy used for pumping and orchard operations when the service is not already represented by an upstream process.

- Selected flow: Electricity supply and mobile agricultural machinery fuel
- Flow property / unit: Energy or carrier mass / kWh, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, invoice, fuel log, or contractor activity converted to the declared carrier basis without double counting embedded services
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_management_records`
- Sources:

###### Crop-protection products supplied (`crop_protection_input`)

Record each pesticide or other crop-protection formulation by product, active ingredient, application event, and treated area. Distinct formulations remain identifiable.

- Selected flow: Crop-protection formulation for citrus orchard management
- Flow property / unit: Mass of formulation / kg
- Amount rule: sum measured formulation mass by product, treated area, and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_management_records`
- Sources:

##### Waste flows

###### Removed or dead citrus trees and orchard residues (`orchard_tree_and_residue_waste`)

Record trees removed during establishment, renewal, pruning, or productive replacement as waste when they do not become a declared co-product. Residues retained as mulch or transferred as biomass require a named destination and allocation treatment.

- Selected flow: Removed citrus trees and orchard residues to waste or residue destination
- Flow property / unit: Mass / kg dry or as-received biomass
- Amount rule: measured or calculated removed biomass by orchard block and year, with destination recorded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources:

##### Elementary flows

###### Citrus orchard land occupation (`orchard_land_occupation`)

Record orchard area and occupation duration, including non-bearing establishment years when they are part of the declared orchard life.

- Selected flow: Land occupation by perennial citrus orchard
- Flow property / unit: Area-time / m2*a or ha*year
- Amount rule: orchard area multiplied by declared occupation time and allocated to accepted fruit output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources: `fao-crop-production-methodology`

#### Outputs

##### Product flows

###### Managed citrus orchard production output (`managed_citrus_orchard_output`)

Pass the managed orchard-year production basis to harvest as an internal process link. It must not be counted as an additional marketable fruit output.

- Selected flow: Managed citrus orchard production output
- Flow property / unit: Area or mass / ha or kg accepted fruit basis
- Amount rule: declared orchard-year area and associated accepted fruit output basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_management_records`
- Sources:

##### Elementary flows

###### Nutrient-, residue-, and crop-protection-related environmental exchanges (`orchard_environmental_exchanges`)

Calculate relevant emissions to air, water, and soil from collected nutrient, residue, crop-protection, and irrigation activity data using the selected geographically applicable method. Keep each substance and receiving compartment distinct where supported.

- Selected flow: Managed-soil, residue, and crop-production emissions to air, water, or soil
- Flow property / unit: Mass of emitted substance / kg substance
- Amount rule: calculate substance-specific exchanges using collected activity data and the declared method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `ipcc-2019-refinement-vol-4`; `emep-eea-2023-guidebook`

### Process: Tangerine, mandarin, and clementine harvest and farm-gate handling (`tangerine_harvest_and_farm_gate_handling`)

#### Inputs

##### Product flows

###### Managed orchard output entering harvest (`managed_citrus_orchard_input`)

Receive the managed orchard-year production context from orchard management. This row supports process linkage and must not duplicate the upstream orchard inventory.

- Selected flow: Managed citrus orchard production output
- Flow property / unit: Area or mass / ha or kg accepted fruit basis
- Amount rule: linked orchard-year harvested volume before sorting or grading
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Sources:

###### Harvest energy and contracted harvest service (`harvest_energy_input`)

Record fuel, electricity, or contractor activity used for picking, field bins, collection, and farm-gate handling when not already included in orchard management records.

- Selected flow: Harvest energy supply or contracted harvest service
- Flow property / unit: Energy, carrier mass, or service / kWh, L, kg, or activity unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier use or documented contractor activity assigned to accepted harvest output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and converted to 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh tangerine, mandarin, or clementine fruit at farm gate (`fresh_citrus_farm_gate_output`)

Record accepted fruit transferred at the declared farm-gate condition. This is the terminal reference output when optional sorting is absent.

- Selected flow: Fresh tangerine, mandarin, or clementine fruit at farm gate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted fruit mass at the declared hand-off condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg reference fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources:
- Range: Provisional accepted-fruit yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 4,000
  - Upper: 60,000
  - Unit: kg accepted fruit/ha/year
  - Basis: productive orchard-year; replace with orchard records and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest culls and field losses (`harvest_cull_and_loss_waste`)

Record fruit left in the field, damaged during picking, downgraded without a declared co-product use, or otherwise rejected before hand-off. Fruit sent to a named destination is recorded separately as a co-product where justified.

- Selected flow: Citrus harvest culls and losses to waste or residue destination
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled difference between harvested, accepted, named destinations, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Sources:

### Process: Optional farm-gate sorting or basic conditioning (`tangerine_optional_farm_gate_sorting`)

#### Inputs

##### Product flows

###### Harvested fruit entering optional sorting (`sorting_citrus_input`)

Record harvested fruit entering a separate on-farm washing, sorting, grading, or basic conditioning step when that activity occurs before hand-off.

- Selected flow: Fresh citrus fruit entering optional farm-gate sorting
- Flow property / unit: Mass / kg
- Amount rule: measured incoming fruit mass before sorting or conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted sorted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting_records`
- Sources:

###### Sorting water and electricity (`sorting_water_and_energy_input`)

Record water and electricity used before hand-off for washing, sorting, grading, or basic conditioning. Separate the two carriers in the data package if their records are available.

- Selected flow: Water and electricity for optional farm-gate sorting
- Flow property / unit: Volume or energy / m3 or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter, batch log, or invoice assigned to accepted sorted fruit; electricity is recorded separately when available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted sorted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sorted fresh citrus fruit at farm gate (`sorted_citrus_farm_gate_output`)

Record accepted fruit after optional sorting or basic conditioning and before off-farm transport. This becomes the terminal reference output when the conditional process is included.

- Selected flow: Sorted fresh tangerine, mandarin, or clementine fruit at farm gate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted fruit mass after sorting or conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg reference fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting_records`
- Sources:

##### Waste flows

###### Sorting rejects and removed material (`sorting_reject_waste`)

Record fruit and material removed by sorting, grading, washing, or trimming when it is not transferred to a declared co-product destination.

- Selected flow: Sorting rejects and removed citrus material to waste or residue destination
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled incoming mass minus accepted output and named destinations, after documenting moisture or handling adjustments
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted sorted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sorting_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orchard_establishment_over_productive_life` | orchard establishment, immature years, and renewal trees | Allocate establishment, non-bearing, and renewal inputs over the declared productive orchard life using orchard area and accepted fruit output. Report orchard life, establishment years, renewal events, and allocation basis. | `fao-citrus-production-guidance`; `iso-14067` |
| `allocation_accepted_and_named_destinations` | accepted fruit, downgraded fruit, and residues | Assign mass to accepted fruit or a named co-product only when the destination is evidenced and physically or economically distinguishable. Do not treat unmarketable losses as a co-product without a declared use. | `iso-14044` |
| `allocation_internal_process_links` | orchard, harvest, and optional sorting links | Use internal process links for mass balance only; do not count the same orchard output or fruit mass as an additional market product. | `iso-14044` |
| `allocation_mass_default_for_shared_fruit_output` | multiple fruit grades or destinations | Use mass allocation for shared production when no stronger causal partition is documented, and disclose grade definitions, as-received basis, and rejected-fruit treatment. | `iso-14044` |

If a study reports fresh citrus fruit and a documented co-product from the same orchard or sorting operation, the data package shall state the partitioning rule, common process inventory, and destination evidence. Economic allocation is not a default substitute for missing mass or causal data.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `tangerine_orchard_establishment_and_management` | planting material; renewal trees; land occupation | orchard register, nursery invoice, planting map, pruning or removal log | block_id; species_or_cultivar; tree_count; planting_year; renewal_count; area; previous_land_use; removed_biomass; destination | reconcile orchard register, maps, invoices, and field records | trees, ha, kg, orchard-year | establishment and each renewal event; annual update | full establishment period and declared productive life | each orchard block | aggregate by block, establishment or renewal year, and allocation horizon | signed farm register, planting map, supplier record, or auditable field log |
| `cp_orchard_management_records` | `tangerine_orchard_establishment_and_management` | nutrients; irrigation; energy; crop protection; environmental exchanges | input ledger, water meter, energy meter, spray record, contractor invoice | block_id; product; formulation; nutrient_analysis; amount; date; area; water_volume; energy_carrier; fuel; treatment; soil_or_residue_event | collect primary records and reconcile invoices, meters, and application logs | kg product, kg nutrient, m3, kWh, L, ha | each application or operation; annual aggregation | one production year plus applicable establishment or renewal records | each orchard block and shared facility | sum by block and year, then allocate shared inputs by documented area or activity | invoices, meter readings, product labels, application logs, method calculation record |
| `cp_harvest_output_records` | `tangerine_harvest_and_farm_gate_handling` | orchard output; harvest energy; accepted fruit; culls and losses | harvest tickets, weighbridge record, bin log, contractor record, grading log | block_id; harvest_date; species_or_cultivar; harvested_mass; accepted_mass; rejected_mass; destination; carrier_use; contractor_activity; maturity_or_grade | reconcile field, bin, scale, grading, and destination records | kg, L, kWh, activity unit | each harvest lot; annual closure | one production year | each orchard block and harvest facility | aggregate by block, lot, and destination; retain mass balance | weighbridge or scale record, lot traceability, grading report, contractor invoice |
| `cp_sorting_records` | `tangerine_optional_farm_gate_sorting` | incoming fruit; water; electricity; accepted output; rejects | batch sheet, meter record, grading log, waste log | batch_id; incoming_mass; accepted_mass; reject_mass; water; electricity; cleaning_agent; packaging_aid; destination | reconcile batch, scale, meter, material, and waste records | kg, m3, kWh, kg material | each sorting or conditioning batch | declared production year | farm sorting site | reconcile incoming fruit, accepted output, named destinations, and waste by batch | batch sheet, scale record, meter reading, waste receipt, destination record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_orchard_activity_to_reference_mass` | orchard-year and harvest flows | normalized amount = orchard-year activity total / accepted farm-gate fruit mass × 1,000 kg | activity total; accepted fruit mass; reference amount | amount per 1,000 kg accepted fruit |  |
| `calc_orchard_life_allocation` | establishment and renewal inputs | allocate establishment or renewal total to each declared production year using the documented productive-life horizon and accepted fruit output basis; retain non-bearing years when specified | establishment total; renewal events; orchard life; annual accepted output | allocated orchard input per production year and reference flow | `fao-citrus-production-guidance`; `iso-14067` |
| `calc_nutrient_basis` | nutrient and amendment input | nutrient mass = product mass × declared nutrient fraction; report product mass and nutrient mass separately | product quantity; label or supplier nutrient analysis | kg product and kg N, kg P2O5, kg K2O, or declared organic nutrient basis | `fao-crop-production-methodology` |
| `calc_harvest_mass_balance` | harvest output, culls, and losses | harvested mass = accepted fruit + named co-products + culls or losses, with documented stock change and measurement basis | harvest tickets; accepted mass; co-product destinations; cull and loss mass; stock change | reconciled harvest balance |  |
| `calc_sorting_mass_balance` | optional sorting output and waste | incoming fruit = accepted sorted fruit + named destinations + waste, after documenting moisture or handling adjustments | batch inputs; accepted output; destinations; waste; adjustment basis | reconciled sorting balance |  |
| `calc_direct_citrus_field_exchanges` | soil, residue, and crop-protection exchanges | apply the selected geographically applicable method to collected nutrient, residue, irrigation, and crop-protection activity data; record tier, geography, and activity basis | nutrient inputs; residue fate; soil or climate context; method parameters | substance-specific elementary flows by compartment | `ipcc-2019-refinement-vol-4`; `emep-eea-2023-guidebook` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_citrus_orchard_identity` | all processes | Identify orchard block, species or cultivar group, country and region, crop year, orchard age, productive status, and optional sorting boundary. | orchard register; farm map; dataset metadata |
| `dq_perennial_citrus_time_basis` | establishment and management | State establishment year, non-bearing period, productive-life horizon, renewal events, and allocation basis used for orchard assets. | orchard history; allocation worksheet |
| `dq_input_traceability` | planting material, nutrients, irrigation, energy, and crop protection | Trace each material or energy input to an invoice, meter, product label, contractor record, or justified field record; retain product and nutrient identities separately. | primary farm records; supplier records |
| `dq_fruit_mass_balance` | harvest and optional sorting | Reconcile harvested, accepted, rejected, co-product, stock-change, and waste masses within a documented tolerance and explain grading, moisture, or handling adjustments. | weighbridge, lot, grading, batch, and destination records |
| `dq_temporal_coverage` | all processes | Cover the full declared production year and include establishment or renewal records needed by orchard-life allocation. | annual production ledger; orchard history |
| `dq_environmental_method` | elementary flows | Record method name, tier, geography, activity data, and assumptions for each calculated exchange; keep evidence gap flow identity separate from amount evidence. | calculation worksheet; method reference |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | reference flow and terminal process | Exactly one terminal accepted fruit output shall be linked to the declared reference flow. The product identity may remain evidence gap until verified, but the binding and hand-off condition shall be disclosed. |  |
| `validation_orchard_life_disclosure` | orchard establishment and management | Flag a dataset that includes perennial citrus production but omits orchard age, establishment period, productive-life horizon, renewal events, or allocation basis. | `fao-citrus-production-guidance`; `iso-14067` |
| `validation_irrigation_and_nutrients` | irrigation and nutrient inputs | Check that zero irrigation or zero nutrient input is supported by farm records or documented production rationale, and that product mass is not confused with nutrient mass. | `fao-crop-production-methodology` |
| `validation_fruit_mass_balance` | harvest and optional sorting | Check mass balance for each harvest or sorting boundary and require explanation for evidence gap differences, reject destinations, stock changes, or moisture conversions. |  |
| `validation_boundary_exclusions` | downstream activities | Flag inclusion of off-farm transport, storage, processing into juice or concentrate, retail, consumer use, or packaging end-of-life unless the study declares a boundary extension. | `iso-14044` |
| `validation_bilingual_alignment` | English and Chinese renderings | Require identical machine identifiers, controlled tokens, process ids, row ids, rule ids, protocol ids, requirement ids, and source ids in both language files. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset for a reviewed farm-gate tangerine, mandarin, or clementine production dataset; background_dataset only when compatible upstream inputs and elementary flows are explicitly published |
| downstream_use | foreground data package construction, process projection, lifecycle model aggregation, and comparison of fresh citrus supply scenarios |
| allowed_use | fresh, unprocessed tangerine, mandarin, or clementine fruit at a declared farm gate and optional sorting state, with orchard-life allocation and quality metadata preserved |
| excluded_use | direct substitution for juice, concentrate, preserved, dried, or frozen products; direct use without regional, orchard-age, irrigation, cultivar, or market-state review; downstream logistics or consumer studies outside the declared boundary |
| required_metadata | canonical PCR id; CPC reference; orchard block or aggregation scope; species or cultivar group; geography; crop year; orchard age; productive-life and allocation basis; irrigation; nutrient and crop-protection product basis; yield; accepted and rejected fruit; sorting status; flow binding status |
| required_quality_disclosure | primary-record coverage, temporal coverage, mass-balance result, identity evidence gaps, parameterized Flow Set use, environmental method and tier, assumptions, and regional representativeness |
| update_trigger | change in orchard-life or allocation method, product identity taxonomy, Flow Set taxonomy, environmental method, production route, sorting boundary, or evidence that materially changes category guidance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-production-methodology` | official_guidance | FAO crop production and farm-data methodology guidance | crop-cycle decomposition, field records, farm-gate boundary, and input data collection |
| `fao-citrus-production-guidance` | extension_guidance | FAO or national agricultural extension guidance for citrus orchard establishment and management | perennial citrus establishment, productive life, orchard management, and harvest context |
| `ipcc-2019-refinement-vol-4` | method_factor | 2019 IPCC Refinement to the 2006 IPCC Guidelines, Volume 4 Agriculture, Forestry and Other Land Use | managed-soil and residue exchange calculation methods |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA air pollutant emission inventory guidebook, agricultural chapters | agricultural emission method selection and receiving-compartment treatment |
| `iso-14044` | standard | ISO 14044, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy, co-product treatment, and validation expectations |
| `iso-14067` | standard | ISO 14067, Greenhouse gases — Carbon footprint of products | product-level boundary disclosure and perennial production allocation context |
