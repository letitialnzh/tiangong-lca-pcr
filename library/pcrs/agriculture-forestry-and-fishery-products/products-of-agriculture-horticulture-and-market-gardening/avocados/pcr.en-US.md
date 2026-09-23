---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.avocados
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Avocados

## 1. Scope and Applicability

This PCR covers fresh, unprocessed avocados produced in managed perennial orchards and transferred at the farm gate. It includes orchard establishment, the non-bearing period, productive orchard management, harvest, and optional on-farm conditioning before hand-off. It applies to rainfed and irrigated orchards and to fruit sold for fresh consumption or further food processing without changing the farm-gate product identity. It excludes nursery operations, avocado oil, pulp, purée, frozen or dried avocado, prepared foods, off-farm transport, storage, retail, consumer use, and end-of-life packaging. Orchard establishment impacts shall be allocated to declared production years and disclosed rather than omitted.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.avocados |
| classification_refs | CPC 3.0: 01311 Avocados |
| covered_products | fresh, unprocessed avocado fruit transferred at the farm gate, including fruit for fresh-market or processing destinations |
| excluded_products | nursery planting-stock production; avocado oil, pulp, purée, frozen or dried products; prepared foods; off-farm logistics and downstream use |
| representative_product | harvested avocado fruit, unprocessed, at farm gate |
| production_route | perennial orchard establishment, orchard management, harvest, and conditional farm-gate conditioning |
| market_state | fresh fruit at declared hand-off condition, with cultivar, maturity, quality grade, moisture or dry-matter convention, and conditioning status disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | fresh, unprocessed avocado fruit at the farm gate |
| How much | 1,000 kg as-received marketable avocado fruit |
| How well | harvested fruit meeting declared cultivar, maturity, quality grade, defect, and hand-off condition; no transformation into oil, pulp, purée, frozen, or dried product |
| How long or cycle | one declared production year within the orchard's productive life, with establishment impacts allocated across the declared orchard life |
| reference_flow_link | terminal accepted avocado output from `avocado_harvest_and_farm_gate_handling` when no conditioning is included, otherwise from `farm_gate_avocado_conditioning` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh avocado fruit, production mix, at farm gate, unprocessed `30de963a-f2a7-42d4-9a56-7993627510b4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or cultivar group; production country, region, and climate; orchard age and productive status; crop year; orchard area; irrigation status and water source; maturity or dry-matter convention; accepted and rejected fruit basis; conditioning included or excluded |
| Binding | fixed |


When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | reference avocado output | Mass | kg | Report accepted fruit on the declared as-received hand-off basis. If dry matter, maturity, or defect adjustments are used, retain the measured basis and conversion before normalization. |
| `orchard_life_allocation_basis` | establishment and immature-orchard inputs | area, time, or mass activity property | ha, orchard-year, or kg fruit | Allocate establishment and non-bearing orchard inputs over the declared productive orchard life using the same orchard area, production years, and accepted fruit output basis; disclose exceptional replacement or abandonment. |
| `area_to_reference_conversion` | area-based orchard flows | activity-specific property | activity-specific unit | Divide orchard-year totals by accepted farm-gate fruit mass from the same orchard-year or declared multi-year average before scaling to 1,000 kg. |
| `nutrient_product_and_basis` | fertilizer or soil-amendment input | nutrient mass and product mass | kg product; kg N, kg P2O5, or kg K2O | Record the actual product and application quantity together with the declared nutrient basis. The single nutrient/amendment card may contain multiple products and nutrients without requiring a row for every fertilizer class. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | orchard site before or at establishment, with planting material and purchased management inputs crossing the foreground boundary; existing land history and prior crop condition are disclosed |
| starting_condition_role | start of managed perennial avocado production and orchard asset accounting |
| product_classification_scope | fresh avocado fruit corresponding to CPC 3.0 code 01311 |
| recursive_input_rule | avocado planting material and retained fruit are upstream inputs only when crossing the boundary; they must not be recursively represented as this same farm-gate fruit output |
| upstream_dataset_requirement | compatible upstream datasets for planting material, nutrient or soil-amendment products, crop protection, energy, irrigation supply, machinery services, packaging used before hand-off, and applicable waste treatment |
| disclosure | cultivar, orchard age, establishment year, productive life, replacement trees, orchard area, previous land use, soil and climate context, irrigation, nutrient basis, crop protection, yield, harvest losses, conditioning, co-products, and residue or waste destination |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_establishment_to_farm_gate` | all conforming datasets | Include site preparation, planting, orchard establishment, immature years, productive orchard management, harvest, and conditioning performed before the declared farm-gate hand-off. | `fao-crop-production-methodology`; `fao-avocado-production-guide` |
| `boundary_perennial_orchard_disclosure` | establishment and replacement trees | Include establishment and replacement-tree inputs only after assigning them to the declared orchard life or accepted fruit output basis; disclose the allocation horizon and non-bearing years. | `fao-avocado-production-guide`; `iso-14067` |
| `boundary_direct_field_emissions` | managed soil and crop residues | Include direct and indirect nutrient- and residue-related emissions using a geographically applicable method and the same activity data used for nutrient, irrigation, and residue accounting. | `ipcc-2019-refinement`; `emep-eea-2023-guidebook` |
| `boundary_farm_gate_conditioning` | optional conditioning | Include washing, sorting, grading, trimming, or short-term farm handling only when performed before hand-off and not already embedded in the harvest record; identify rejected fruit and destination. | `fao-crop-production-methodology` |
| `boundary_post_farm_gate_exclusion` | downstream activities | Exclude off-farm transport, storage, distribution, retail, consumer use, food processing, oil or purée manufacture, and packaging end-of-life unless the study explicitly extends beyond this PCR. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `avocado_orchard_establishment_and_management` | Avocado orchard establishment and management | required | always; include establishment and productive-year management with declared orchard-life allocation | managed perennial biological production and orchard asset formation | orchard area, orchard-years, establishment period, and annual accepted fruit output |
| `avocado_harvest_and_farm_gate_handling` | Avocado harvest and farm-gate handling | required | always | harvest capture, field handling, and farm-gate transfer | harvested, accepted, downgraded, and lost fruit mass for one production year |
| `farm_gate_avocado_conditioning` | Farm-gate avocado conditioning | conditional | washing, sorting, grading, trimming, or other conditioning occurs before hand-off and is not included in harvest records | prepare fruit for the declared hand-off state | incoming fruit mass and accepted conditioned fruit mass |

### Process: Avocado orchard establishment and management (`avocado_orchard_establishment_and_management`)

#### Inputs

##### Product flows

###### Avocado planting material (`avocado_planting_material_input`)

Record nursery trees, grafted plants, or other planting material crossing into orchard establishment. Retained or self-propagated material must state its origin and allocation treatment.

- Selected flow: Avocado planting material for orchard establishment
- Flow property / unit: Mass or item count / kg or item
- Amount rule: measured planting-material quantity by orchard block and establishment year; retain count-to-mass conversion when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources:
- Range: Provisional establishment-planting screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 400
  - Unit: trees/ha
  - Basis: established orchard blocks; replace with nursery and planting records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`avocado_orchard_establishment_and_management_agricultural_nutrient_inputs`)

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
  - Upper: 500
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

###### Energy and mobile machinery fuel supplied (`orchard_energy_input`)

Record electricity, diesel, gasoline, or other purchased energy used for pumping, orchard operations, and contracted machinery when the service is not already represented by an upstream process.

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

Record each pesticide or other crop-protection formulation by product, active ingredient, application event, and treated area. Distinct formulations must remain identifiable.

- Selected flow: Crop-protection formulation for avocado orchard management
- Flow property / unit: Mass of formulation / kg
- Amount rule: sum measured formulation mass by product and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_management_records`
- Sources:

##### Waste flows

###### Replaced or dead orchard trees sent to waste (`orchard_tree_replacement_waste`)

Record trees removed during establishment or productive replacement as waste when they do not become a declared co-product. Trees retained as mulch or biomass transfer require a destination and allocation treatment.

- Selected flow: Removed avocado orchard trees to waste treatment or unmanaged residue
- Flow property / unit: Mass / kg dry or as-received biomass
- Amount rule: measured or calculated removed-tree biomass by orchard block and year
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources:

##### Elementary flows

###### Land occupation by avocado orchard (`orchard_land_occupation`)

Record orchard area and occupation duration, including non-bearing establishment years when they are part of the declared orchard life.

- Selected flow: Land occupation, orchard area
- Flow property / unit: Area-time / m2*a or ha*year
- Amount rule: orchard area multiplied by declared occupation time, allocated to accepted fruit output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources: `fao-crop-production-methodology`

#### Outputs

##### Product flows

###### Orchard management output to harvest (`orchard_managed_production_output`)

Pass the managed orchard-year production basis to the harvest process as an internal process link. It must not be counted as an additional marketable avocado flow.

- Selected flow: Managed avocado orchard production output
- Flow property / unit: Area or mass / ha or kg accepted fruit basis
- Amount rule: declared orchard-year area and associated accepted fruit output basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_management_records`
- Sources:

##### Waste flows

##### Elementary flows

###### Nutrient-related and residue-related emissions to air, water, and soil (`orchard_emissions`)

Calculate relevant emissions from collected nutrient, crop-protection, residue, and irrigation activity data using the selected geographically applicable method. Do not infer a specific elementary-flow identity until final flow binding is reviewed.

- Selected flow: Managed-soil and crop-production emissions to air, water, or soil
- Flow property / unit: Mass of emitted substance / kg substance
- Amount rule: calculate emissions using collected activity data and the declared method; keep each substance and receiving compartment distinct where supported
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and converted to 1,000 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `ipcc-2019-refinement`; `emep-eea-2023-guidebook`

### Process: Avocado harvest and farm-gate handling (`avocado_harvest_and_farm_gate_handling`)

#### Inputs

##### Product flows

###### Managed orchard output entering harvest (`managed_orchard_output_input`)

Receive the managed orchard-year production context from orchard management. This row supports process linkage and must not duplicate the upstream orchard inventory.

- Selected flow: Managed avocado orchard production output
- Flow property / unit: Area or mass / ha or kg accepted fruit basis
- Amount rule: linked orchard-year harvested volume before grading or conditioning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Sources:

###### Harvest energy and contracted harvest service (`harvest_energy_input`)

Record fuel, electricity, or contractor activity used for picking, collection, field bins, and farm-gate handling when not already included in orchard management records.

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

###### Harvested avocado fruit at farm gate (`harvested_avocado_output`)

Record fruit transferred at the declared farm-gate condition. This is the terminal reference output when conditioning is absent.

- Selected flow: Fresh avocado fruit, production mix, at farm gate, unprocessed
- Flow property / unit: Mass / kg
- Amount rule: measured accepted fruit mass at the declared hand-off condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg reference fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources:
- Range: Provisional accepted avocado-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2,000
  - Upper: 25,000
  - Unit: kg accepted fruit/ha/year
  - Basis: productive orchard-year; replace with orchard records and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvested fruit rejected or lost before hand-off (`harvest_reject_and_loss_waste`)

Record fruit left in the field, damaged during picking, downgraded without a declared co-product use, or otherwise rejected before hand-off. Fruit sent to a named destination is recorded separately as a co-product where justified.

- Selected flow: Avocado harvest reject or loss to waste
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled difference between harvested, accepted, and declared destination masses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Sources:

##### Elementary flows

### Process: Farm-gate avocado conditioning (`farm_gate_avocado_conditioning`)

#### Inputs

##### Product flows

###### Harvested fruit entering conditioning (`conditioning_avocado_input`)

Record harvested fruit entering a separate on-farm washing, sorting, grading, or handling step when that activity occurs before hand-off.

- Selected flow: Fresh avocado fruit entering farm-gate conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured incoming fruit mass before conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

###### Conditioning water, electricity, and packaging aids (`conditioning_inputs`)

Record water, electricity, cleaning agents, and packaging aids used before hand-off. Packaging that remains with the product must disclose its material and mass; internal handling packaging is recorded when it crosses the boundary.

- Selected flow: Conditioning water, electricity, cleaning agent, or packaging aid
- Flow property / unit: Volume, energy, or mass / m3, kWh, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter, invoice, batch log, or measured packaging mass assigned to accepted conditioned fruit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned avocado fruit at farm gate (`conditioned_avocado_output`)

Record accepted conditioned fruit as the terminal reference output when conditioning is included in the declared boundary.

- Selected flow: Fresh avocado fruit, conditioned at farm gate, unprocessed
- Flow property / unit: Mass / kg
- Amount rule: measured accepted fruit mass after conditioning and before off-farm transport
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg reference fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

##### Waste flows

###### Conditioning rejects and removed material (`conditioning_reject_waste`)

Record fruit and material removed by washing, sorting, grading, or trimming when it is not transferred to a declared co-product destination.

- Selected flow: Conditioning rejects and removed material to waste
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled incoming mass minus accepted output and named destinations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orchard_establishment_over_productive_life` | orchard establishment, immature years, and replacement trees | Allocate establishment and non-bearing orchard inputs over the declared productive orchard life using orchard area and accepted fruit output. Report orchard life, establishment years, replacement events, and allocation basis. | `fao-avocado-production-guide`; `iso-14067` |
| `allocation_accepted_and_named_destinations` | accepted fruit, downgraded fruit, and residues | Assign mass to accepted avocado and a named co-product only when the destination is evidenced and physically or economically distinguishable. Do not treat unmarketable losses as a co-product without a declared use. | `iso-14044` |
| `allocation_no_double_counting_internal_links` | process links between orchard, harvest, and conditioning | Use internal process links for mass balance only; do not count the same orchard output or fruit mass as an additional market product. | `iso-14044` |
| `allocation_mass_default_for_shared_fruit_output` | multiple avocado grades or destinations | Use mass allocation for shared production when no stronger causal partition is documented, and disclose grade definitions, moisture or dry-matter basis, and rejected-fruit treatment. | `iso-14044` |

If a study reports avocado fruit and a documented co-product from the same orchard or conditioning operation, the data package shall state the partitioning rule, common process inventory, and destination evidence. Economic allocation is not a default substitute for missing mass or causal data.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `avocado_orchard_establishment_and_management` | planting material; replacement trees; land occupation | orchard register, nursery invoice, planting map, removal log | block_id; cultivar; tree count; planting year; replacement count; area; previous land use; removed biomass; destination | reconcile orchard register, maps, invoices, and field records | trees, ha, kg, orchard-year | establishment and each replacement event; annual update | full establishment period and declared productive life | each orchard block | aggregate by block, establishment year, and declared allocation horizon | signed farm register, planting map, supplier record, or auditable field log |
| `cp_orchard_management_records` | `avocado_orchard_establishment_and_management` | nutrients; irrigation; energy; crop protection; emissions | input ledger, water meter, energy meter, spray record, contractor invoice | block_id; product; formulation; nutrient analysis; amount; date; area; water volume; energy carrier; fuel; treatment; soil or residue event | collect primary records and reconcile invoices, meters, and application logs | kg product, kg nutrient, m3, kWh, L, ha | each application or operation; annual aggregation | one production year plus establishment records where applicable | each orchard block and shared facility | sum by block and year, then allocate shared inputs by documented area or activity | invoices, meter readings, product labels, application logs, method calculation record |
| `cp_harvest_output_records` | `avocado_harvest_and_farm_gate_handling` | orchard output; harvest energy; accepted fruit; rejects and losses | harvest tickets, weighbridge record, bin log, contractor record, grading log | block_id; harvest date; cultivar; harvested mass; accepted mass; rejected mass; destination; carrier use; contractor activity; maturity or grade | reconcile field, bin, scale, grading, and destination records | kg, L, kWh, activity unit | each harvest lot; annual closure | one production year | each orchard block and harvest facility | aggregate by block, lot, and destination; retain mass balance | weighbridge or scale record, lot traceability, grading report, contractor invoice |
| `cp_conditioning_records` | `farm_gate_avocado_conditioning` | incoming fruit; water; energy; packaging; accepted output; rejects | batch sheet, meter record, packaging ledger, waste log | batch_id; incoming mass; accepted mass; reject mass; water; electricity; cleaning agent; packaging material and mass; destination | batch reconciliation with meter and material records | kg, m3, kWh, kg packaging | each conditioning batch | declared production year | farm conditioning site | reconcile inputs, accepted output, rejects, and named destinations by batch | batch sheet, scale record, meter reading, packaging invoice, waste receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_mass` | all orchard-year flows | normalized amount = orchard-year activity total / accepted farm-gate fruit mass × 1,000 kg | activity total; accepted fruit mass; reference amount | amount per 1,000 kg accepted fruit |  |
| `calc_orchard_life_allocation` | establishment and replacement inputs | allocate establishment or replacement total to each declared production year using the documented productive-life horizon and accepted fruit output basis; retain non-bearing years in the denominator when specified | establishment total; replacement events; orchard life; annual accepted output | allocated orchard input per production year and reference flow | `fao-avocado-production-guide`; `iso-14067` |
| `calc_nutrient_basis` | nutrient and amendment input | nutrient mass = product mass × declared nutrient fraction; report product mass and nutrient mass separately | product quantity; label or supplier nutrient analysis | kg product and kg N, kg P2O5, or kg K2O | `fao-crop-production-methodology` |
| `calc_mass_balance_harvest` | harvest output and rejects | harvested mass = accepted fruit + named co-products + rejects/losses, with documented stock change and measurement basis | harvest tickets; accepted mass; co-product destinations; reject and loss mass; stock change | reconciled harvest balance |  |
| `calc_conditioning_balance` | conditioning output and waste | incoming fruit + conditioning inputs crossing as product or material = accepted conditioned fruit + named destinations + waste, after documenting moisture or handling adjustments | batch inputs; accepted output; destinations; waste; adjustment basis | reconciled batch balance |  |
| `calc_direct_field_emissions` | soil, residue, and crop-protection emissions | apply the selected geographically applicable method to collected nutrient, residue, and activity data; do not apply a generic factor without recording tier, geography, and activity basis | nutrient inputs; residue fate; soil or climate context; method parameters | substance-specific elementary flows by compartment | `ipcc-2019-refinement`; `emep-eea-2023-guidebook` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_orchard_identity` | all processes | Identify orchard block, cultivar or cultivar group, country and region, crop year, orchard age, productive status, and conditioning boundary. | orchard register; farm map; dataset metadata |
| `dq_perennial_time_basis` | establishment and management | State establishment year, non-bearing period, productive-life horizon, replacement events, and allocation basis used for orchard assets. | orchard history; allocation worksheet |
| `dq_input_traceability` | nutrients, irrigation, energy, crop protection, and planting material | Trace each material or energy input to an invoice, meter, product label, contractor record, or justified field record; retain product and nutrient identities separately. | primary farm records; supplier records |
| `dq_mass_balance` | harvest and conditioning | Reconcile harvested, accepted, rejected, co-product, stock-change, and waste masses within a documented tolerance and explain moisture or grading adjustments. | weighbridge, lot, grading, batch, and destination records |
| `dq_temporal_coverage` | all processes | Cover the full declared production year and include establishment or replacement records needed by orchard-life allocation. | annual production ledger; orchard history |
| `dq_emission_method` | elementary flows | Record method name, tier, geography, activity data, and assumptions for each calculated emission; keep evidence gap flow identity separate from amount evidence. | calculation worksheet; method reference |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | reference flow and terminal process | Exactly one terminal accepted avocado output shall be linked to the declared reference flow, with no fixed identity assumed until verified; the binding remains parameterized in this candidate. |  |
| `validation_orchard_life_disclosure` | orchard establishment and management | Reject or flag a dataset that includes perennial orchard production but omits orchard age, establishment period, productive-life horizon, replacement events, or allocation basis. | `fao-avocado-production-guide`; `iso-14067` |
| `validation_irrigation_and_nutrients` | irrigation and nutrient inputs | Check that zero irrigation or zero nutrient input is supported by farm records or documented production rationale, and that product mass is not confused with nutrient mass. | `fao-crop-production-methodology` |
| `validation_mass_balance` | harvest and conditioning | Check mass balance for each harvest or conditioning boundary and require explanation for evidence gap differences, reject destinations, stock changes, or moisture conversions. |  |
| `validation_boundary_exclusions` | downstream activities | Reject unreported inclusion of off-farm transport, storage, processing into oil or purée, retail, consumer use, or packaging end-of-life unless the study declares a boundary extension. |  |
| `validation_bilingual_alignment` | English and Chinese renderings | Require identical machine identifiers, controlled tokens, process ids, row ids, rule ids, protocol ids, requirement ids, and source ids in both language files. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset for a reviewed farm-gate avocado production dataset; background_dataset only when compatible upstream inputs and elementary flows are explicitly published |
| downstream_use | foreground data package construction, process projection, lifecycle model aggregation, and comparison of fresh avocado supply scenarios |
| allowed_use | fresh, unprocessed avocado fruit at a declared farm gate and conditioning state, with orchard-life allocation and quality metadata preserved |
| excluded_use | direct substitution for avocado oil, pulp, purée, frozen or dried products; direct use without regional, orchard-age, irrigation, cultivar, or market-state review; downstream logistics or consumer studies outside the declared boundary |
| required_metadata | canonical PCR id; CPC reference; orchard block or aggregation scope; cultivar; geography; crop year; orchard age; productive-life and allocation basis; irrigation; nutrient and crop-protection product basis; yield; accepted and rejected fruit; conditioning status; flow binding status |
| required_quality_disclosure | primary-record coverage, temporal coverage, mass-balance result, identity evidence gaps, parameterized Flow Set use, emission method and tier, assumptions, and regional representativeness |
| update_trigger | change in orchard-life or allocation method, product identity taxonomy, Flow Set taxonomy, emission method, production route, conditioning boundary, or evidence that materially changes category guidance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-production-methodology` | official_guidance | FAO crop production and farm-data methodology guidance | crop-cycle decomposition, field records, farm-gate boundary, and input data collection |
| `fao-avocado-production-guide` | extension_guidance | FAO or national agricultural extension guidance for avocado orchard establishment and management | perennial orchard establishment, productive life, orchard management, and harvest context |
| `ipcc-2019-refinement` | method_factor | 2019 IPCC Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories | managed-soil and residue emission calculation methods |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA air pollutant emission inventory guidebook, current agricultural chapters | agricultural emission method selection and receiving-compartment treatment |
| `iso-14044` | standard | ISO 14044, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy, co-product treatment, and validation expectations |
| `iso-14067` | standard | ISO 14067, Greenhouse gases — Carbon footprint of products | product-level boundary disclosure and perennial production allocation context |
