---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cantaloupes-and-other-melons
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cantaloupes and other melons

## 1. Scope and Applicability

This PCR covers commercial production of fresh, whole, unprocessed cantaloupes and other melons from field preparation or protected-crop establishment through managed cultivation, harvest, grading, optional on-farm conditioning, and farm-gate hand-off. It covers cantaloupe, muskmelon, honeydew, Galia, Persian, casaba, and other non-watermelon melons when the cultivar and market state are declared. It applies to seeded and transplanted annual production under irrigated or rainfed management. It excludes watermelon, melon seed or transplants sold as planting material, preserved or cut melon, juice, drying, cold storage after farm-gate transfer, distribution, retail, and consumption.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cantaloupes-and-other-melons |
| classification_refs | CPC 3.0: 01229 Cantaloupes and other melons |
| covered_products | Fresh, whole, unprocessed cantaloupes and other non-watermelon melons produced for sale at the farm gate |
| excluded_products | Watermelons; melon seed or transplants sold as planting material; cut, juiced, preserved, frozen, dried, or otherwise transformed melons; post-farm-gate logistics |
| representative_product | Marketable whole cantaloupe or other melon, harvested and graded for a declared market state |
| production_route | Annual seeded or transplanted melon cultivation, managed field or protected production, harvest, grading, and conditional farm-gate preparation |
| market_state | Fresh whole produce at farm gate, with cultivar, maturity, size, defect, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole cantaloupe or other non-watermelon melon at farm gate |
| How much | 1,000 kg as-received marketable melon |
| How well | Whole, fresh, unprocessed fruit meeting the declared cultivar, maturity, size, appearance, defect, and marketable-grade criteria |
| How long or cycle | One declared annual production cycle from planting or transplanting through the final harvest, with the production year and harvest window reported |
| reference_flow_link | `marketable_melon_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh cantaloupes and other melons, production mix, at farm gate, whole and unprocessed `c9fe8928-9555-4990-81f6-f77d866ff054` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or melon type; production geography; production year and crop cycle; seeded or transplanted route; irrigated or rainfed regime; fruit maturity and harvest window; size and grade criteria; whole or damaged state; washed or unwashed; packaging state; farm-gate hand-off |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvested and farm-gate melon | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep gross harvested fruit, marketable fruit, rejected fruit, and field residue masses distinct before normalizing to the reference flow. |
| `area_and_cycle_normalization` | field and protected-crop records | Area and mass | ha and kg | Record each field or production unit and crop cycle separately, then normalize all inputs and outputs to marketable farm-gate melon. |
| `nutrient_basis` | fertilizer and amendment inputs | Nutrient mass | kg N, kg P2O5, or kg K2O | Convert product quantities only from documented nutrient concentrations and retain the reported nutrient or oxide-equivalent basis. |
| `irrigation_volume` | irrigation water | Volume | m3 | Record metered or otherwise documented delivered irrigation by production unit and crop cycle; keep rainfall separate from irrigation withdrawals. |
| `planting_material_basis` | seed and transplant inputs | Number or mass | seed units, plants, or kg | Record supplier-declared seed or transplant quantity and type; do not infer seed mass from count without a documented conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural field or protected-crop production unit receiving melon seed or transplants, with prior land use and pre-plant operations disclosed |
| starting_condition_role | Beginning of the declared annual melon crop cycle |
| product_classification_scope | Fresh whole cantaloupes and other non-watermelon melons under CPC 3.0:01229 through farm-gate hand-off |
| recursive_input_rule | Purchased melon seed or transplants are distinct upstream product inputs and are linked once rather than recreated as an internal melon production process. |
| upstream_dataset_requirement | Require compatible upstream datasets for seed or transplants, fertilizers, amendments, crop-protection products, irrigation water, energy, field machinery services, and packaging when used. |
| disclosure | Declare melon type and cultivar, geography, prior land use, crop-cycle dates, production system, irrigation regime, nutrient basis, crop-protection program, emission method, residue fate, harvest and grading method, washing, and packaging. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_annual_melon_cycle` | field or protected production through final harvest | Include field or protected-crop preparation, planting or transplanting, crop management, and all harvests of the declared annual crop cycle; allocate shared operations to the reported melon using documented production records. | `fao-crop-production-framework`; `fao-good-agricultural-practices` |
| `boundary_farm_gate` | harvest and preparation | End the foreground boundary when marketable whole melon is transferred at the farm gate; include on-farm grading, trimming of damaged fruit, washing, cooling, and primary packaging only when they occur before transfer. | `fao-fruit-and-vegetable-postharvest` |
| `boundary_managed_soils` | nutrient, amendment, and residue flows | Include direct and indirect managed-soil emissions attributable to applied nutrients and returned residues under one declared calculation method, without double counting emissions represented by an upstream dataset. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | rejected fruit and crop residues | Record field return, composting, feed, treatment, disposal, or another declared destination for each residue stream; an unreported destination remains a data-quality gap and is not an automatic co-product. | `fao-crop-residue-management`; `fao-fruit-and-vegetable-postharvest` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `melon_field_establishment` | Melon field or protected-crop establishment | required | once for each declared crop cycle | foreground establishment and planting | production-unit area and seed or transplant quantity |
| `melon_crop_management` | Melon crop management | required | throughout the declared crop cycle | foreground managed biological production | production-unit cycle and crop input records |
| `melon_harvest_and_farm_gate` | Melon harvest, grading, and farm-gate hand-off | required | each harvest and final hand-off | foreground harvest, grading, and product hand-off | 1,000 kg marketable whole melon |
| `on_farm_melon_conditioning` | On-farm melon conditioning and primary packaging | conditional | washing, cooling, or primary packaging occurs before farm-gate transfer and is not embedded in harvest records | prepare product to declared market state | incoming, accepted, and rejected melon mass |

### Process: Melon field or protected-crop establishment (`melon_field_establishment`)

#### Inputs

##### Product flows

###### Melon seed or transplants (`melon_planting_material_input`)

Melon seed or transplants enter the production unit as planting material for the declared annual crop cycle. Record purchased material once and keep it separate from the resulting fruit output.

- Selected flow: Melon seed or transplants
- Flow property / unit: Number of items or mass / seed units, plants, or kg
- Amount rule: Record supplier quantity and planting-material type by production unit and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare and per 1,000 kg marketable farm-gate melon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_establishment_records`
- Sources: `fao-good-agricultural-practices`
- Range: Provisional planting-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 8
  - Unit: kg seed or 1000 transplants/ha
  - Basis: broad first-pass seeded or transplanted annual melon rate pending supplier and production records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment fuel or machinery service (`melon_establishment_energy`)

Record diesel, electricity, or contracted machinery service used for bed preparation, tillage, mulch or row-cover installation, and planting when the activity crosses the foreground boundary.

- Selected flow: Field establishment fuel or machinery service
- Flow property / unit: Mass, energy, or service / kg, kWh, or hectare-service
- Amount rule: Use fuel receipts, machinery logs, meter records, or supplier service records by production unit and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare and per 1,000 kg marketable farm-gate melon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_field_operation_records`
- Sources: `fao-crop-production-framework`

##### Waste flows

##### Elementary flows

###### Occupied agricultural soil (`melon_field_occupation`)

Record the field or protected-crop area and occupation duration for the declared crop cycle when land occupation is represented as an elementary input.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Production-unit area multiplied by the declared crop-cycle occupation period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate melon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_field_operation_records`

#### Outputs

##### Product flows

###### Established melon production unit (`melon_established_unit_output`)

This internal hand-off records the accepted planted area entering managed melon production and is not the reference product.

- Selected flow: Established melon production unit
- Flow property / unit: Area / ha
- Amount rule: Accepted planted or transplanted area after establishment and recorded failures.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per establishment campaign
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_establishment_records`

##### Waste flows

##### Elementary flows

### Process: Melon crop management (`melon_crop_management`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`melon_crop_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production-unit hectare and converted to 1,000 kg marketable melon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_fertilizer_records`
- Sources: `fao-good-agricultural-practices`
- Range: Provisional nitrogen application screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg N/ha
  - Basis: one annual melon crop cycle pending soil tests and fertilizer records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus application screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg P2O5/ha
  - Basis: one annual melon crop cycle pending soil tests and fertilizer records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional potassium application screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg K2O/ha
  - Basis: one annual melon crop cycle pending soil tests and fertilizer records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`melon_irrigation_input`)

Record irrigation only where water is delivered to the melon production unit. Rainfed production records zero applied irrigation with supporting field evidence.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or calculated irrigation volume by production unit and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production-unit hectare and converted to 1,000 kg marketable melon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_irrigation_records`
- Sources: `fao-good-agricultural-practices`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4,000
  - Unit: m3/ha
  - Basis: one annual melon crop cycle pending local water-balance evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel (`melon_field_fuel_input`)

Record fuel consumed by field preparation, crop care, and harvest machinery when the fuel crosses the foreground boundary.

- Selected flow: Mobile agricultural machinery fuel
- Flow property / unit: Volume, mass, or energy / L, kg, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Tank records, invoices, or contractor activity converted to a declared carrier basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production-unit hectare and converted to 1,000 kg marketable melon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_field_operation_records`
- Range: Provisional field-fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 20
  - Upper: 180
  - Unit: L/ha
  - Basis: one annual melon crop cycle including harvest operations
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulation supplied (`melon_crop_protection_input`)

Record each herbicide, insecticide, fungicide, and other formulation separately by product and application event. Do not merge distinct formulations into one identity.

- Selected flow: Crop-protection formulation for melon production
- Flow property / unit: Mass of formulation / kg
- Amount rule: Sum measured formulation mass by product, production unit, and application event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production-unit hectare and converted to 1,000 kg marketable melon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_crop_protection_records`
- Range: Provisional crop-protection formulation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg formulation/ha
  - Basis: one annual melon crop cycle; retain product and active-ingredient identity for every event
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Growing melon crop handed to harvest (`growing_melon_output`)

This internal product hand-off represents the crop entering harvest and grading. It is not a second reference product.

- Selected flow: Growing cantaloupes and other melons ready for harvest
- Flow property / unit: Mass / kg
- Amount rule: Reconciled pre-harvest crop estimate or harvest intake mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate melon
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_harvest_records`

##### Waste flows

###### Crop residues returned or removed (`melon_crop_residue_output`)

Record vines, leaves, and non-marketable fruit by destination. Residues returned to soil are not a co-product unless a separate declared product hand-off exists.

- Selected flow: Melon crop residues and non-marketable field material
- Flow property / unit: Mass / kg dry or as-received material
- Amount rule: Measured or reconciled residue mass by destination and moisture basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production-unit hectare and converted to 1,000 kg marketable melon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_harvest_records`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 50,000
  - Unit: kg residue/ha
  - Basis: vines, leaves, and non-marketable fruit for one crop cycle; declare destination and moisture basis
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide released to ambient air (`melon_n2o_air_output`)

Calculate soil nitrous oxide from collected nitrogen inputs, organic amendments, and returned residue activity using one geographically applicable IPCC tier or reviewed regional method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculated from collected activity data and declared factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production-unit hectare and converted to 1,000 kg marketable melon
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_emission_activity`
- Sources: `ipcc-2019-managed-soils`

###### Ammonia released to ambient air (`melon_ammonia_air_output`)

Calculate ammonia volatilization by nutrient product, application method, timing, and applicable local method.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculated from nitrogen application records and applicable factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production-unit hectare and converted to 1,000 kg marketable melon
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_emission_activity`
- Sources: `emep-eea-2023-guidebook`

###### Nitrate released to water (`melon_nitrate_water_output`)

Record nitrate leaching or runoff only when supported by a geographically applicable model, monitored balance, or reviewed inventory method; otherwise retain the activity as an evidence gap emission requirement.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: Calculate from nitrogen balance, drainage, and a declared regional method when applicable.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production-unit hectare and converted to 1,000 kg marketable melon
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_emission_activity`
- Sources: `ipcc-2019-managed-soils`

### Process: Melon harvest, grading, and farm-gate hand-off (`melon_harvest_and_farm_gate`)

#### Inputs

##### Product flows

###### Melons entering harvest and grading (`melon_harvest_intake`)

Record the incoming crop mass and the cultivar or melon type before grading. Reconcile the incoming mass with marketable output, rejects, and measured losses.

- Selected flow: Fresh cantaloupes and other melons entering harvest and grading
- Flow property / unit: Mass / kg
- Amount rule: Weighbridge, field bin, or harvest-record mass by production unit and harvest date.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate melon
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_harvest_records`

###### Harvest machinery fuel or service (`melon_harvest_energy`)

Record harvest fuel, electricity, or contracted harvest service when it crosses the foreground boundary and is not already recorded in crop management.

- Selected flow: Harvest fuel or machinery service
- Flow property / unit: Mass, energy, or service / kg, kWh, or tonne-service
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Use harvest logs, invoices, meters, or contractor records and prevent overlap with field-fuel records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate melon
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_harvest_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable melon at farm gate (`marketable_melon_farm_gate_output`)

Record whole marketable cantaloupes and other melons transferred at the declared farm-gate hand-off, with maturity, grade, and packaging state retained. The reference-flow UUID is verified against the CPC 01229 farm-gate production-mix flow.

- Selected flow: Fresh cantaloupes and other melons, production mix, at farm gate, whole and unprocessed
- Flow property / unit: Mass / kg
- Amount rule: Measured marketable fruit mass at the declared farm-gate quality state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg marketable melon
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_harvest_records`
- Range: Provisional marketable-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5,000
  - Upper: 60,000
  - Unit: kg marketable melon/ha
  - Basis: one annual melon crop cycle; replace with regional yield and grade records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading rejects and harvest losses (`melon_grading_reject_waste`)

Record damaged, immature, overripe, diseased, undersized, or otherwise rejected fruit and harvest losses by destination. Useful outputs require a separate declared hand-off and must not be silently treated as waste.

- Selected flow: Melon grading rejects and harvest losses
- Flow property / unit: Mass / kg
- Amount rule: Measured or reconciled reject mass by quality class and destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate melon
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_harvest_records`
- Range: Provisional grading-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg/1,000 kg marketable melon
  - Basis: rejected and lost fruit before farm-gate hand-off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-farm melon conditioning and primary packaging (`on_farm_melon_conditioning`)

#### Inputs

##### Product flows

###### Harvested melon for conditioning (`conditioning_melon_input`)

Include this input only when washing, cooling, or primary packaging is a separate pre-gate activity and its intake is not embedded in harvest records.

- Selected flow: Harvested whole melon for on-farm conditioning
- Flow property / unit: Mass / kg
- Amount rule: Measured incoming mass matched to an identified conditioning batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate melon
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`

###### Conditioning water supplied (`conditioning_water_input`)

Record water used for washing or other primary conditioning only when the activity occurs before farm-gate transfer.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Metered or batch-reconciled water volume used for pre-gate conditioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate melon
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`
- Range: Provisional conditioning-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4
  - Unit: m3/1,000 kg accepted melon
  - Basis: washing or other pre-gate conditioning only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging material (`melon_primary_packaging_input`)

Record primary packaging only when it crosses the farm-gate foreground boundary. Identify each material and reuse status separately.

- Selected flow: Primary packaging material for whole melon
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Measured packaging mass by material and conditioning batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate melon
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`
- Range: Provisional primary-packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kg packaging/1,000 kg accepted melon
  - Basis: material-specific packaging mass before farm-gate transfer
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`melon_conditioning_electricity_input`)

Record electricity used by washing, cooling, sorting, or packing equipment when the equipment operates before farm-gate hand-off.

- Selected flow: Electricity supply
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Amount rule: Metered or batch-allocated electricity matched to conditioning output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate melon
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`

##### Waste flows

#### Outputs

##### Product flows

###### Conditioned melon at farm-gate hand-off (`conditioned_melon_output`)

Record accepted whole melon after the optional pre-gate conditioning step. Link this output to `marketable_melon_farm_gate_output` for the declared farm-gate reference.

- Selected flow: Conditioned whole cantaloupes and other melons at farm gate
- Flow property / unit: Mass / kg
- Amount rule: Accepted batch mass after conditioning and quality checks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg marketable melon
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`

##### Waste flows

###### Conditioning rejects and material loss (`melon_conditioning_reject_waste`)

Reconcile damaged fruit, removed soil or foreign matter, packaging rejects, and measured water or mass losses by destination.

- Selected flow: Melon conditioning rejects and material loss
- Flow property / unit: Mass / kg
- Amount rule: Incoming batch mass minus accepted output and separately measured useful outputs, with moisture basis documented.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate melon
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_conditioning_records`
- Range: Provisional conditioning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg/1,000 kg accepted melon
  - Basis: rejects and measured losses from pre-gate conditioning
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | field management, harvest, and conditioning | Prefer separate records for production, harvest, conditioning, marketable fruit, residues, and waste before applying allocation. | `iso-14044-2006` |
| `allocation_melon_grades` | multiple marketable melon grades | Treat declared grades as one reference-product category when they share the same intended use; report grade-specific quantities and use economic or mass allocation only when separate modelling is infeasible. | `iso-14044-2006` |
| `allocation_residue_and_rejects` | residues, rejects, and useful secondary outputs | Treat material with a declared useful hand-off as a co-product only when the hand-off and destination are documented; otherwise record it as waste or residue with fate disclosed. | `fao-fruit-and-vegetable-postharvest`; `iso-14044-2006` |
| `allocation_shared_operations` | shared field, protected-crop, or conditioning operations | Allocate shared operations by measured area, time, mass, or another documented physical relationship; disclose the choice and test a value-based sensitivity when the physical relationship is not representative. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_melon_establishment_records` | `melon_field_establishment` | seed, transplants, planted area, establishment energy | seed invoice, transplant delivery, field log, machinery record | production_unit_id; melon_type; cultivar; area; material_type; quantity; date; operation | reconcile planting material and establishment operations to each production unit and crop cycle | ha; kg; plants; L; kWh | each planting campaign | complete crop cycle | all represented production units | sum by production unit and physical identity; retain seeded and transplanted routes separately | invoices; field maps; supplier records; equipment logs |
| `cp_melon_field_operation_records` | `melon_field_establishment` and `melon_crop_management` | field operations, fuel, land occupation | field log, fuel receipt, contractor record, area register | production_unit_id; area; operation; date; fuel; machinery; contractor_scope; occupation_period | reconcile operations and fuel to each production unit and crop cycle | ha; L; kg; kWh; m2*a | each operation or meter period | complete crop cycle | all represented production units | sum by operation and production unit; prevent overlap between owned and contracted equipment | dated logs; invoices; calibrated meters; area records |
| `cp_melon_fertilizer_records` | `melon_crop_management` | nutrient and amendment inputs | nutrient plan, invoice, application log, product label, assay | production_unit_id; product; amount; nutrient_content; basis; date; method | calculate nutrient content from product records and retain product identity and reporting basis | kg product; kg N; kg P2O5; kg K2O | each application | complete crop cycle | all represented production units | sum by nutrient, product, date, and production unit without merging formulations | invoices; labels; soil tests; application records |
| `cp_melon_irrigation_records` | `melon_crop_management` | irrigation water | meter, pump log, irrigation schedule, water invoice | production_unit_id; source; volume; date; delivery_method; rainfall_context | reconcile delivered irrigation to production unit and crop cycle; keep rainfall separate | m3; mm; ha | each irrigation event or meter period | complete crop cycle | all represented production units | sum metered or documented volumes and disclose calculated values | calibrated meters; pump records; water permits; schedules |
| `cp_melon_crop_protection_records` | `melon_crop_management` | crop-protection formulations | product label, invoice, application log, spray record | production_unit_id; product; active_ingredient; amount; concentration; date; method | record each formulation and event separately and reconcile to the crop cycle | kg; L; ha | each application | complete crop cycle | all represented production units | preserve product and active-ingredient identity; do not aggregate distinct products | labels; invoices; application logs; operator records |
| `cp_melon_emission_activity` | `melon_crop_management` | soil and air or water emissions | nutrient balance, soil record, weather, residue, emission model | production_unit_id; N_inputs; organic_N; residue_N; soil; climate; drainage; factor_set; model_version | calculate each emission using one declared geographically applicable method | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented production units | calculate per unit, area-weight, then normalize by same-cycle marketable yield | source records; factor provenance; model files; review record |
| `cp_melon_harvest_records` | `melon_harvest_and_farm_gate` | incoming fruit, marketable output, rejects, losses, harvest energy | weighbridge, field bin record, harvest log, grade ticket, meter, destination record | production_unit_id; harvest_date; melon_type; cultivar; incoming_mass; marketable_mass; reject_mass; grade; maturity; moisture; destination; fuel | reconcile every harvest to marketable output, rejects, losses, and declared hand-off | kg; percent; L; kWh | each harvest | complete crop cycle | all represented production units | sum accepted, rejected, and lost fruit by grade and destination; close the harvest mass balance | calibrated scales; grade records; moisture checks; destination evidence |
| `cp_melon_conditioning_records` | `on_farm_melon_conditioning` | water, packaging, electricity, conditioned fruit, rejects | batch ticket, scale, meter, packaging issue, wash record | batch_id; incoming_mass; accepted_mass; reject_mass; water; electricity; packaging_material; reuse_status; date | reconcile conditioning batches and shared meters to accepted output | kg; m3; kWh; packaging kg | each batch or meter period | all pre-gate conditioning | all included equipment and batches | match incoming and accepted masses; allocate shared utilities by time or processed mass | calibrated scales and meters; batch tickets; packaging records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field and crop-management flows | Crop-cycle amount per hectare divided by same-cycle marketable melon yield per hectare, multiplied by 1,000 kg | flow amount; production-unit area; marketable melon mass | amount per 1,000 kg marketable melon |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | Product mass multiplied by documented nutrient fraction; preserve product and nutrient or oxide-equivalent basis | product identity; mass; assay; reporting basis | kg N, kg P2O5, or kg K2O by source |  |
| `calc_managed_soil_n2o` | soil N2O | Apply the selected IPCC tier or regional method to fertilizer N, organic N, returned-residue N, volatilization, and leaching pathways | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | Calculate by nutrient product, application method, timing, and applicable factor | nitrogen product records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_harvest_mass_balance` | harvest and grading | Incoming crop mass equals marketable output plus declared useful outputs, rejects, and measured losses within uncertainty | incoming, marketable, useful, reject, and loss masses | reconciled harvest outputs | `mass-balance-identity` |
| `calc_conditioning_mass_balance` | on-farm conditioning | Incoming batch mass equals accepted fruit plus useful outputs, rejects, and measured losses within uncertainty | batch masses; moisture; loss records | reconciled conditioning outputs per accepted fruit | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference and marketable outputs | Confirm the melon type and cultivar are within CPC 01229 and distinguish them from watermelon, seed, transplants, and processed melon. | crop, lot, cultivar, and sales records |
| `dq_temporal_alignment` | all foreground rows | Use planting, inputs, harvest, yield, emissions, and conditioning records from the same declared crop cycle; disclose proxy years. | dated field and batch records |
| `dq_mass_and_grade` | fruit outputs and rejects | Retain scale calibration, grade criteria, maturity state, and moisture or as-received basis for accepted and rejected fruit. | calibration, grade tickets, and quality records |
| `dq_completeness` | process map and flows | Reconcile every production unit and conditioning batch and distinguish zero, not applicable, proxy, and missing values. | production-unit roster and batch reconciliation |
| `dq_identity_resolution` | parameterized, unmapped, and reference flows | Resolve every Flow Set reference and the evidence gap reference product to verified UUIDs before final TIDAS process publication. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal output | Exactly one terminal marketable melon output equals 1,000 kg after scaling and declares melon type, cultivar, maturity, grade, and farm-gate qualifiers. |  |
| `validation_process_route` | process map | Include establishment, crop management, and harvest once per crop cycle; include conditioning only when it occurs before hand-off and is not double counted. |  |
| `validation_crop_cycle_reconciliation` | field inventory | Production-unit area, planting material, inputs, harvest outputs, residue fates, and emissions refer to the same crop cycle and production units. |  |
| `validation_nitrogen_balance` | nutrient and emission inventory | Reconcile nutrient content, returned and removed residue nitrogen, and emission pathways with methods and factors disclosed. | `ipcc-2019-managed-soils` |
| `validation_harvest_balance` | harvest and grading | Reconcile incoming fruit with marketable fruit, declared useful outputs, rejects, and measured losses within uncertainty. | `mass-balance-identity` |
| `validation_conditioning_balance` | optional conditioning | Reconcile incoming batches with accepted fruit, rejects, packaging, water, and measured losses; exclude conditioning when its burdens are embedded upstream. | `mass-balance-identity` |
| `validation_flow_identity` | every flow | Accept only exact verified UUIDs as `fixed` and applicable existing Flow Sets as `parameterized`; otherwise retain unmapped coverage and resolve before final process publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground fresh cantaloupe and other non-watermelon melon production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | farm-gate LCA of fresh whole cantaloupe and other non-watermelon melons when geography, cultivar or melon type, season, yield, irrigation, residue, grading, and conditioning context are preserved |
| excluded_use | watermelon; seed or transplant production; cut or processed melon; post-farm-gate storage, distribution, retail, or consumption; another crop without a reviewed proxy decision |
| required_metadata | geography; melon type; cultivar; production year; crop cycle; production system; area; planting route; yield; maturity; grade; irrigation; nutrient basis; crop protection; residue fate; conditioning; packaging; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy inputs; missing records; range exceedances; emission methods; scale and meter calibration; grade and mass-balance reconciliations |
| update_trigger | new reviewed melon evidence, material route change, revised emission method, changed Flow Set or UUID identity, or representative data outside QA ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-production-framework` | official_guidance | FAO crop-production and resource-management guidance | crop route, establishment, field operations, and production boundary context |
| `fao-good-agricultural-practices` | official_guidance | FAO good agricultural practices guidance for fruit and vegetable production | planting, nutrient, irrigation, crop-protection, and field-record expectations |
| `fao-fruit-and-vegetable-postharvest` | official_guidance | FAO fruit and vegetable postharvest handling guidance | harvest, grading, washing, cooling, packaging, rejects, and farm-gate hand-off |
| `fao-crop-residue-management` | official_guidance | FAO crop-residue management guidance | residue destination and non-marketable fruit handling |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11 | soil N2O, residue nitrogen, and nitrogen pathway accounting |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | agricultural ammonia calculation and QA context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched harvest and conditioning batches | harvest and conditioning balance calculations and validation |
