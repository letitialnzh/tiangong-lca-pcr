---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pomelos-and-grapefruits
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Pomelos and grapefruits

## 1. Scope and Applicability

This PCR guides a foreground data package for fresh whole pomelos and grapefruits from the declared orchard or grove production cycle through harvest, optional on-farm conditioning, and the declared farm-gate or pack-house hand-off. It covers perennial orchard establishment when that activity is included in the study, productive orchard care, irrigation, nutrient and crop-protection management, harvest rounds, and pre-gate sorting, washing, cooling, and primary packing when present.

Seedling and grafted-tree nursery production, breeding, juice and concentrate manufacture, cutting, peeling, drying, cooking, retail, consumer storage and use, and post-gate distribution are outside the default boundary. Durable orchard infrastructure, machinery, buildings, and irrigation assets are excluded unless separately attributed. Field residues, culls, rejected fruit, wastewater, and packaging waste remain in the foreground until their declared fate is recorded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pomelos-and-grapefruits` |
| classification_refs | CPC 3.0 `01321`, Pomelos and grapefruits |
| covered_products | Fresh whole pomelos and grapefruits, including declared cultivars, production routes, maturity states, grades, washing, cooling, and primary-packaging states |
| excluded_products | Nursery trees, seeds and scion production, juice, concentrate, peeled or cut fruit, dried or cooked products, retail services, durable capital assets, and post-gate transport |
| representative_product | Marketable fresh whole pomelo or grapefruit meeting the declared cultivar group, maturity, size, firmness, cleanliness, grade, and defect criteria |
| production_route | Perennial orchard establishment when applicable, orchard and soil management, irrigation, crop protection, harvest, optional conditioning, and farm-gate or pack-house hand-off |
| market_state | Fresh, whole, unprocessed pomelo or grapefruit at the declared farm-gate or pack-house gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole pomelo or grapefruit at the declared farm-gate or pack-house hand-off |
| How much | 1,000 kg |
| How well | Fresh, whole, unprocessed fruit with declared species or cultivar group, maturity, size, firmness, cleanliness, grade, defect tolerance, moisture state, and packaging state |
| How long or cycle | One declared orchard production year and harvest campaign; all harvest rounds attributable to the same orchard block are reconciled before normalization |
| reference_flow_link | `pomelo_grapefruit_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh whole pomelo or grapefruit at farm gate `01323c69-b85f-4716-88f2-718888f2f780` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and cultivar group; production geography; orchard age and productive status; planting density; crop-year and harvest dates; irrigated or rain-fed status; nutrient product and nutrient basis; crop-protection program; marketable yield; cull and residue fate; washing, cooling, and packaging state; declared gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent data package field. The reference product identity follows the declared qualifiers; no nearby citrus product is substituted.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_citrus_mass` | harvested fruit, marketable fruit, culls, and residues | Mass | kg | Weigh marketable, downgraded, rejected, field-loss, and residual fruit streams separately and reconcile them before conversion to the 1,000 kg reference output. |
| `orchard_year_normalization` | orchard and harvest records | Area and mass | ha and kg | Record inputs and harvest rounds by orchard block and crop year, then normalize the attributable inventory to marketable output from the same block and harvest campaign. |
| `nutrient_product_basis` | fertilizer and soil-amendment inputs | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | Record actual formulated product mass and documented nutrient concentration separately; derive nutrient equivalents only from a supplier specification, label, nutrient plan, or laboratory result. |
| `water_delivery_basis` | irrigation, fertigation, washing, and source withdrawal | Volume | m3 | Keep crop irrigation, fertigation carrier water, post-harvest washing water, and natural-resource withdrawal as distinct records and disclose the meter or water-balance basis. |
| `postharvest_mass_reconciliation` | sorting, washing, cooling, and packing | Mass and moisture | kg and declared fraction | Retain measured soil removal, water uptake, cooling loss, culls, and packing loss separately from harvested fruit mass and disclose the reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Established orchard block receiving the declared crop-year inputs; if orchard establishment is included, start at prepared orchard land receiving planting material and disclose prior land use and excluded infrastructure |
| starting_condition_role | Start of the declared orchard production year and foreground input accounting |
| product_classification_scope | CPC 3.0 `01321`, Pomelos and grapefruits, through the declared farm-gate or pack-house hand-off |
| recursive_input_rule | Pomelo or grapefruit planting material is recorded at its received hand-off state and linked to an upstream dataset; its nursery or propagation production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for planting material, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, purchased transport, and waste-treatment services when those inputs cross the boundary. |
| disclosure | Declare species and cultivar group, geography, orchard age and density, crop-year dates, irrigation source and method, nutrient basis, crop-protection program, harvest rounds, marketable yield, culls and residues, washing and cooling, packaging, waste fate, and declared gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_year` | establishment and orchard cultivation | Include orchard care and direct crop emissions attributable to the declared production year; include establishment only when its area, age, and attribution basis are explicitly declared, and exclude unrelated infrastructure construction. | `fao-citrus-production-guidance`; `fao-good-agricultural-practices` |
| `boundary_harvest_gate` | harvest, conditioning, and packing | End the default foreground boundary at the declared farm-gate or pack-house gate. Include sorting, washing, cooling, primary packaging, and pre-gate transport only when they occur before that gate. | `codex-fresh-produce-hygiene`; `usda-ams-citrus-standards` |
| `boundary_residue_fate` | culls, field residues, wastewater, and packaging waste | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. Do not assign a co-product credit without a documented recipient and intended use. | `iso-14044-2006`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment` | Pomelo and grapefruit orchard establishment | conditional | include when planting, replanting, or orchard establishment is attributed to the represented orchard block | foreground orchard establishment | planted area, planting material, orchard age, and attribution period |
| `orchard_cultivation` | Pomelo and grapefruit orchard cultivation | required | every represented productive orchard year | foreground managed biological production | orchard area, input records, crop-year dates, and attributable yield |
| `harvest_and_field_handling` | Pomelo and grapefruit harvest and field handling | required | every represented harvest campaign | foreground harvest and primary field handling | harvested mass, harvest rounds, culls, and marketable output |
| `conditioning_and_farm_gate` | Pomelo and grapefruit conditioning and farm-gate hand-off | conditional | include when sorting, washing, cooling, or primary packing occurs before the declared gate | foreground conditioning and hand-off | 1,000 kg marketable fresh whole output |

### Process: Pomelo and grapefruit orchard establishment (`orchard_establishment`)

#### Inputs

##### Product flows

###### Planting material (`planting_material_input`)

Record purchased or internally transferred grafted trees, seedlings, rootstock, or scion material entering the declared orchard block, preserving supplier lot, species or cultivar, planting date, and planted quantity.

- Selected flow: Pomelo or grapefruit planting material
- Flow property / unit: Mass or plant count / kg or plant
- Amount rule: Record supplier or nursery delivery records and the number of viable trees planted by orchard block.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources: `fao-citrus-production-guidance`

##### Waste flows

##### Elementary flows

###### Occupied orchard land (`orchard_land_occupation`)

Record the orchard area and attribution period occupied by the represented orchard block; disclose whether establishment and productive years are separately allocated.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha*a
- Amount rule: Multiply declared orchard area by the period attributed to establishment and normalize to marketable output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources: `fao-citrus-production-guidance`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Pomelo and grapefruit orchard cultivation (`orchard_cultivation`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`orchard_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_and_protection_records`
- Sources: `fao-fertilizer-and-plant-nutrition`; `ipcc-2019-refinement-volume-4`

###### Irrigation and fertigation water (`orchard_irrigation_water`)

Record water delivered to the orchard by source and application method, separating irrigation, fertigation carrier water, and rainfall assumptions.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum meter readings or a documented application water balance for the represented orchard year.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_energy_records`
- Sources: `fao-crop-evapotranspiration-56`

###### Crop-protection products (`crop_protection_input`)

Record herbicides, fungicides, insecticides, biological controls, and adjuvants crossing the boundary, retaining formulated product and active-ingredient quantities where available.

- Selected flow: Crop-protection product
- Flow property / unit: Mass / kg formulated product or active ingredient
- Amount rule: Sum invoices, spray logs, application records, and stock reconciliation for the represented orchard year.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_and_protection_records`
- Sources: `fao-good-agricultural-practices`

###### Field and pumping electricity (`field_electricity_input`)

Record purchased electricity used for irrigation pumping, fertigation, controls, and other in-scope orchard operations.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum meter or invoice records by operation and allocate shared meters to the represented orchard block.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_energy_records`
- Sources: `fao-good-agricultural-practices`

###### Mobile machinery fuel (`mobile_machinery_fuel`)

Record fuel used by tractors, sprayers, mowers, harvest aids, and other mobile machinery assigned to the orchard year.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel receipts, tank records, or machine-hour calculations assigned to the represented orchard year.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_energy_records`
- Sources: `fao-good-agricultural-practices`

##### Waste flows

##### Elementary flows

###### Water resource withdrawal (`water_resource_withdrawal`)

Record natural-resource water withdrawn for irrigation or fertigation separately from delivered water and disclose return flow or consumption assumptions.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Reconcile source-meter or permit records to delivered orchard water and disclose the withdrawal-to-delivery balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_and_energy_records`
- Sources: `fao-crop-evapotranspiration-56`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Nitrous oxide to air (`nitrous_oxide_emission`)

Record or calculate direct and indirect nitrous oxide emissions attributable to managed nitrogen input and relevant orchard residues, retaining the selected calculation method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate from documented nitrogen input and the declared emission-factor method; do not double count emissions embedded in an upstream dataset.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_and_protection_records`
- Sources: `ipcc-2019-refinement-volume-4`

### Process: Pomelo and grapefruit harvest and field handling (`harvest_and_field_handling`)

#### Inputs

##### Product flows

###### Harvest crates or bins (`harvest_crates`)

Record reusable crates, bins, or palletized harvest containers entering the harvest operation and disclose the allocation basis for shared assets.

- Selected flow: Reusable crate or bin packaging service
- Flow property / unit: Mass or service / kg or unit
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Record container counts, material type, tare, reuse cycles, and loss or replacement records attributable to the campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `codex-fresh-produce-hygiene`

###### Harvest support fuel (`harvest_support_fuel`)

Record fuel used for harvest aids, orchard access, and movement of fruit to the on-farm handling point before the declared gate.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum campaign fuel records or machine-hour calculations and allocate them to the represented harvest output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `fao-good-agricultural-practices`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fruit transferred to conditioning (`fruit_to_conditioning`)

Record harvested whole pomelo and grapefruit transferred from the orchard to the optional conditioning and farm-gate hand-off process.

- Selected flow: Harvested whole pomelo or grapefruit for conditioning
- Flow property / unit: Mass / kg
- Amount rule: Weigh fruit leaving the orchard block before sorting and reconcile it with field losses and culls.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `usda-ams-citrus-standards`

##### Waste flows

###### Harvest culls and damaged fruit (`harvest_culls`)

Record fruit rejected at harvest or field handling and state whether it is returned to soil, composted, fed, treated, or disposed.

- Selected flow: Pomelo and grapefruit culls and damaged fruit
- Flow property / unit: Mass / kg
- Amount rule: Weigh or estimate rejected fruit by declared fate and reconcile it with harvested and marketable mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `usda-ams-citrus-standards`; `mass-balance-identity`

##### Elementary flows

### Process: Pomelo and grapefruit conditioning and farm-gate hand-off (`conditioning_and_farm_gate`)

#### Inputs

##### Product flows

###### Conditioning and washing water (`conditioning_water`)

When washing or wet conditioning occurs before the declared gate, record water supplied and distinguish product-contact water from other facility water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum meter records or documented batch water balance for the fruit handled before the declared gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `codex-fresh-produce-hygiene`

###### Primary packaging (`primary_packaging`)

When primary packaging crosses the boundary before the declared gate, record the actual packaging material, mass, format, and reuse or loss status.

- Selected flow: Primary packaging function
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- Amount rule: Sum packaging issue records and allocate packaging mass to packed fruit output; record loose or reusable formats separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `codex-fresh-produce-hygiene`

###### Conditioning electricity (`conditioning_electricity`)

Record electricity for sorting, washing, cooling, ventilation, and packing equipment used before the declared gate.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum meters or invoices and allocate shared equipment to the represented fruit throughput.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `codex-fresh-produce-hygiene`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh whole pomelo or grapefruit (`farm_gate_product_output`)

Record the final marketable whole-fruit output at the declared farm-gate or pack-house hand-off, preserving the evidence gap product identity until verified.

- Selected flow: Fresh whole pomelo or grapefruit at farm gate
- Flow property / unit: Mass / kg
- Amount rule: Weigh accepted fruit at the declared gate after sorting, washing, cooling, and packing that are inside the boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `usda-ams-citrus-standards`

##### Waste flows

###### Conditioning culls and packaging waste (`conditioning_waste`)

Record fruit culls, removed soil or organic matter, used wash materials, and discarded packaging generated before the declared gate, separated by fate.

- Selected flow: Conditioning culls and packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh or estimate each waste stream and reconcile it with input packaging and fruit mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh whole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `mass-balance-identity`; `codex-fresh-produce-hygiene`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_citrus_output` | orchard and harvest operations producing pomelos, grapefruits, or multiple marketable grades | Allocate shared orchard and harvest inputs to product grades or species by measured marketable mass when the records support mass allocation. If quality grades have materially different economic functions, disclose and justify an alternative allocation before use. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_residue_fate` | culls, residues, and packaging waste | Treat culls, residues, and waste as waste flows unless a documented recipient and intended use support a co-product claim. Record any avoided-product or substitution claim separately from the foreground inventory. | `iso-14044-2006`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `orchard_establishment` | planting material and occupied area | nursery invoices, planting maps, and orchard register | species, cultivar, lot, tree count, area, planting date, orchard age | reconcile supplier records, field map, and planting register | plant, kg, ha, ha*a | per establishment event | establishment period and attribution years | each orchard block | aggregate by block and attributed orchard-year output | invoice, field map, planting register, and age disclosure |
| `cp_nutrient_and_protection_records` | `orchard_cultivation` | fertilizer, soil amendment, crop protection, and nutrient-related emissions | invoices, labels, spray logs, nutrient plan, and stock records | product, formulation, nutrient fraction, active ingredient, date, block, mass, application method | reconcile issue records with field logs and supplier documents | kg product, kg nutrient | each application and monthly reconciliation | complete represented orchard year | each orchard block | aggregate by product and block, then normalize to accepted output | supplier label, application log, and supervisor review |
| `cp_irrigation_and_energy_records` | `orchard_cultivation` | irrigation, water withdrawal, electricity, and machinery fuel | meters, permits, invoices, fuel logs, or equipment records | source, meter, volume, energy, fuel, date, block, allocation basis | direct meter reading or documented water and energy balance | m3, kWh, MJ, kg | per event or monthly | complete represented orchard year | each orchard block and shared facility | reconcile source totals, delivered totals, and shared-service allocation | meter check, invoice, permit, and allocation worksheet |
| `cp_harvest_and_packaging_records` | `harvest_and_field_handling` and `conditioning_and_farm_gate` | harvest, fruit mass, culls, water, packaging, electricity, and waste | weigh tickets, harvest logs, pack-house records, utility meters, and waste records | date, block, lot, accepted mass, cull mass, material, water, energy, waste fate, gate | weigh each lot or use a documented calibrated estimation method | kg, m3, kWh, unit | each harvest lot and campaign reconciliation | complete harvest campaign | orchard block and gate facility | reconcile harvested, accepted, cull, and waste streams by lot | calibrated scale, lot record, meter, waste receipt, and gate declaration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_orchard_year_normalization` | all crop-year rows | Divide the attributed orchard-year inventory by accepted fresh whole fruit mass at the declared gate and scale to 1,000 kg. | block area, attributed input records, accepted output mass | normalized PCR inventory | `mass-balance-identity` |
| `calc_nutrient_equivalents` | fertilizer and soil-amendment rows | nutrient equivalent = formulated product mass × documented nutrient fraction; retain product mass and nutrient basis as separate fields. | product mass, N/P2O5/K2O fraction | nutrient-equivalent inputs | `fao-fertilizer-and-plant-nutrition` |
| `calc_water_withdrawal_balance` | irrigation and fertigation | withdrawal = source withdrawal records reconciled to delivered water and declared return or consumption balance; do not infer withdrawal from rainfall alone. | source meters, delivered water, return flow | water withdrawal and delivered irrigation inputs | `fao-crop-evapotranspiration-56` |
| `calc_citrus_mass_balance` | harvest, conditioning, and gate output | harvested mass = accepted product + culls + recorded field, sorting, and packing losses; investigate unexplained residual mass. | lot weights and waste records | reconciled product and waste streams | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | product and input rows | Declare species or cultivar, orchard block, lot, product formulation, and gate state; retain evidence gap flow identities as evidence gap rather than substituting a nearby flow. | lot record, supplier document, and review note |
| `quality_measurement` | mass, water, energy, and fuel rows | Use calibrated scales and meters where available; otherwise document the estimation method and uncertainty. | calibration record, meter check, or estimation worksheet |
| `quality_temporal` | all crop-year rows | Cover the complete represented orchard year and harvest campaign, including all harvest rounds and relevant applications. | crop calendar, application log, and harvest register |
| `quality_completeness` | input, output, and waste rows | Reconcile input records, accepted output, culls, residues, and packaging waste; explain missing records or material residuals. | mass-balance worksheet and waste receipts |
| `quality_disclosure` | dataset metadata | Disclose boundary gate, orchard age, allocation basis, water source, nutrient basis, crop-protection program, and identity evidence gaps. | dataset metadata and practitioner review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_mass_balance` | harvest, conditioning, and gate output | Accepted product, culls, and recorded losses must reconcile to harvested fruit within the declared measurement tolerance; unexplained residuals require review. | `mass-balance-identity` |
| `validate_input_records` | orchard cultivation and conditioning | Every foreground quantity must identify the orchard block or facility, crop-year or campaign period, unit, collection protocol, and allocation basis when shared. | `fao-good-agricultural-practices`; `iso-14044-2006` |
| `validate_reference_qualifiers` | reference flow and dataset metadata | The data package must declare species or cultivar group, geography, orchard age, production year, gate state, marketable grade, and identity evidence gap status before downstream use. | `codex-fresh-produce-hygiene`; `usda-ams-citrus-standards` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh whole pomelos and grapefruits |
| downstream_use | May be used as a secondary dataset for orchard production and as a background dataset only when the declared gate, geography, year, and product state are compatible |
| allowed_use | Comparative or attributional modelling of fresh whole pomelo and grapefruit production through the declared farm-gate or pack-house gate |
| excluded_use | Juice, processed citrus, retail, consumer use, post-gate distribution, or any study that omits the required product, gate, crop-year, or residue qualifiers |
| required_metadata | species and cultivar group, geography, orchard block and age, crop-year, irrigation source, nutrient and protection basis, harvest campaign, marketable output, cull and waste fate, gate state, and identity evidence gap declarations |
| required_quality_disclosure | measurement basis, temporal coverage, allocation method, mass-balance result, water and nutrient accounting method, data gaps, and flow-identity status |
| update_trigger | New orchard route, irrigation or crop-protection technology, material change in yield or grade mix, revised nutrient or emission method, changed gate state, or resolution of an identity evidence gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-citrus-production-guidance` | official_guidance | FAO citrus production and orchard management guidance | orchard establishment, orchard management, planting material, and crop-year boundary |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration | irrigation and water-balance collection rules |
| `fao-fertilizer-and-plant-nutrition` | official_guidance | FAO fertilizer and plant nutrition guidance | nutrient product and nutrient-equivalent calculation |
| `fao-good-agricultural-practices` | extension_guidance | FAO good agricultural practices guidance | crop protection, machinery, and field record expectations |
| `ipcc-2019-refinement-volume-4` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 | managed-soil and crop-residue emission calculation |
| `codex-fresh-produce-hygiene` | standard | Codex code of hygienic practice for fresh fruits and vegetables | washing, conditioning, packaging, and gate qualifiers |
| `usda-ams-citrus-standards` | official_guidance | USDA Agricultural Marketing Service citrus grade and condition standards | marketable output, grade, culls, and gate quality |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management—Life cycle assessment—Requirements and guidelines | allocation and co-product handling |
| `mass-balance-identity` | method_factor | PCR mass-balance and identity reconciliation method | product, cull, waste, and gate-output reconciliation |
