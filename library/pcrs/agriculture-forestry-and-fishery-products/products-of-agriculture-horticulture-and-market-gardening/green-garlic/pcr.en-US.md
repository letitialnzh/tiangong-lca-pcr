---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.green-garlic
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: canonical
---

# Green garlic

## 1. Scope and Applicability

This PCR guides a foreground data package for fresh, whole green garlic harvested while the plant remains in its immature, green state. It covers open-field and protected cultivation of garlic grown for fresh sale as a bundle, bunch, loose whole plant, or trimmed whole plant, from the declared prepared field or protected unit through harvest, optional sorting, washing, cooling, primary packing, and the declared farm-gate or pack-house hand-off. The crop cycle includes planting material, soil and crop management, irrigation, crop protection, harvest, and all lifting or pulling operations attributed to the planting.

Dry mature garlic bulbs, garlic seed production, peeled or cut garlic, dehydrated, frozen, pickled, cooked, milled, or otherwise processed garlic, retail and consumer operations, durable farm infrastructure, machinery manufacture, land-use change, and transport after the declared gate are outside the default scope. A protected route, irrigation installation, or post-harvest service may be included when it occurs before the declared gate and its attribution is documented. Field residues, undersized or damaged plants, wash water, packaging, and other rejects remain in the foreground until their fate or hand-off is recorded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.green-garlic` |
| classification_refs | CPC 3.0 `01252`, Green garlic |
| covered_products | Fresh, whole, immature green garlic plants or bulbs with attached edible green leaves, sold loose or in declared bundles, bunches, crates, or other primary packaging, from open-field or protected cultivation |
| excluded_products | Dry or mature garlic bulbs, garlic seed production, peeled, cut, dried, frozen, pickled, cooked, milled, or otherwise processed garlic; retail and consumer services; capital goods; land-use change; and post-gate transport |
| representative_product | Marketable fresh green garlic in the declared maturity, bulb and leaf condition, cleanliness, trimming, bunch or loose presentation, grade, moisture state, and packaging state |
| production_route | Prepared bed or protected-unit preparation, planting of garlic cloves or other planting material, crop management, irrigation and nutrient application, crop protection, lifting or pulling and trimming, optional sorting, washing, cooling, primary packing, and hand-off at the declared gate |
| market_state | Fresh, whole, unprocessed green garlic at the declared farm-gate or pack-house gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh, whole, immature green garlic at the declared farm-gate or pack-house hand-off |
| How much | 1,000 kg |
| How well | Green garlic with declared variety or cultivar group, maturity, bulb and leaf condition, cleanliness, trimming, grade, moisture state, bundle or loose presentation, and packaging state |
| How long or cycle | One declared crop cycle and complete harvest campaign; all lifting or pulling rounds attributable to the same planting are reconciled before normalization |
| reference_flow_link | `green_garlic_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh green garlic, whole, at declared farm gate or pack-house gate `<7fe025ea-1677-454e-8a33-4ff5df4833bd>` |
| Reference flow property | Mass `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| Reference unit group | Units of mass `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| Reference unit | kg |
| Required qualifiers | variety or cultivar group; production geography; open-field or protected route; planting material type and source; planting date and density; harvest or lifting dates and rounds; maturity, bulb and leaf condition, trimming, grade, and defect criteria; irrigated or rain-fed status; actually applied fertilizer or soil-amendment products and nutrient basis; crop-protection program; washing and cooling state; primary packaging state; residue, reject, wastewater, and packaging fate; and declared gate |

Binding: `fixed`

The reference product remains a semantic green-garlic output until the foreground data package resolves its platform flow, flow property, and unit group. No nearby mature-garlic or leek identity should be substituted for this category.

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_green_garlic_mass` | marketable green garlic, rejects, residues, and handling losses | Mass | kg | Weigh marketable, downgraded, rejected, field-loss, handling-loss, and residue streams separately and reconcile them before normalization to the 1,000 kg reference output. |
| `crop_cycle_normalization` | field beds and protected cultivation units | Area and mass | ha and kg | Record inputs and harvest or lifting rounds by field, bed, or protected unit and normalize them to marketable output attributed to the same declared crop cycle. |
| `nutrient_product_and_n_basis` | mineral and organic fertilizers or soil amendments | Product and nutrient mass | kg product and kg nutrient | Record the actual formulated product mass and the documented nutrient concentration separately. Convert nutrient equivalents only from a supplier specification, nutrient plan, or laboratory result; do not double count a compound product. |
| `water_delivery_basis` | irrigation, fertigation carrier water, washing, and source withdrawal | Volume | m3 | Record crop irrigation, fertigation carrier water, post-harvest washing water, and natural-resource withdrawal as distinct quantities and disclose the meter or water-balance basis. |
| `area_time_basis` | open-field beds and protected units | Area-time | ha*a | Record occupied production area and crop occupation period. Durable structures and equipment require separate attribution if they are included. |
| `harvest_grade_reconciliation` | lifting, pulling, trimming, grading, and packing | Mass and declared grade | kg and declared fraction | Retain every harvest or lifting round, gross harvested mass, accepted mass, downgraded plants, rejects, and losses so the declared grade and marketable output are reproducible. |
| `postharvest_mass_change` | washing, cooling, trimming, and packing | Mass and moisture | kg and declared fraction | Retain measured soil removal, water uptake, cooling loss, trimming, tare, and packing loss separately from harvested crop mass and disclose the mass reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field bed or protected cultivation unit receiving garlic cloves, bulbs, or other declared planting material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared green-garlic crop cycle and foreground input accounting |
| product_classification_scope | CPC 3.0 `01252`, Green garlic, through the declared farm-gate or pack-house hand-off |
| recursive_input_rule | Green-garlic planting material is recorded at its received hand-off state and linked to an upstream dataset; its own production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for planting material, fertilizer or soil-amendment products, crop-protection products, supplied water, fuels, electricity, packaging, purchased transport, and waste-treatment services when those inputs cross the boundary. |
| disclosure | Declare variety or cultivar group, geography, route, planting material and density, crop-cycle dates, irrigation source and method, actually applied nutrient products and nutrient basis, crop-protection program, harvest or lifting rounds, marketable yield, downgraded and rejected plants, residues, washing, cooling, trimming, packaging, waste fate, and declared gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and cultivation | Include bed preparation attributable to the declared crop cycle, planting, crop management, irrigation, nutrient and crop protection, and direct crop emissions. Disclose prior land use and exclude unrelated infrastructure construction. | `fao-good-agricultural-practices` |
| `boundary_upstream_inputs` | planting material and supplied inputs | Record planting material and purchased agricultural inputs at the received hand-off state and require linked upstream datasets. Do not recreate production of same-category planting material inside the green-garlic foreground cycle. | `fao-good-agricultural-practices` |
| `boundary_harvest_gate` | harvest, sorting, washing, cooling, trimming, packing, and pre-gate transport | End the default foreground boundary at the declared farm-gate or pack-house gate. Include pre-gate handling and transport only when they occur before that gate and are recorded for the represented crop cycle. | `codex-cxc-53-2003-fresh-produce` |
| `boundary_residue_fate` | field residue, rejects, wastewater, and packaging waste | Record return to soil, composting, feed use, treatment, transport, or disposal for each residue stream. Do not assign a co-product credit without a documented recipient, intended use, quality, and hand-off. | `iso-14044-2006`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Green-garlic crop establishment | `required` | Every represented sowing, planting, bed, or protected-cultivation unit | Foreground crop establishment | Planted area, planting-material quantity, and crop-cycle dates |
| `crop_management` | Green-garlic crop management | `required` | Each represented crop cycle | Foreground managed biological production | Managed area, irrigation, nutrient and crop-protection applications, and complete harvest campaign |
| `harvest_and_gate_preparation` | Green-garlic harvest and gate preparation | `required` | Each represented harvest campaign and declared pre-gate handling route | Foreground harvest, grading, conditioning, packing, transport, and hand-off | 1,000 kg marketable fresh green-garlic output |

### Process: Green-garlic crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Garlic cloves or other planting material (`planting_material_input`)

Record garlic cloves, bulbs, or other planting material entering each declared field bed or protected unit, distinguishing purchased material from retained or otherwise sourced material and preserving the supplier lot and planting date.

- Selected flow: Garlic cloves or green-garlic planting material
- Flow property / unit: Mass or declared count / kg or count
- Amount rule: Record received lot mass and planted mass or viable count by field, bed, or protected unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-good-agricultural-practices`
- Range: Planting-material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 150
  - Unit: kg planting material per 1,000 kg output
  - Basis: declared planted area and crop-cycle output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_water_input`)

Record water applied for bed preparation, planting, and emergence by source and production unit. Exclude rainfall unless a declared water-balance method includes it.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries during establishment and retain source and application method.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-good-agricultural-practices`; `codex-cxc-53-2003-fresh-produce`
- Range: Establishment-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: m3 per 1,000 kg output
  - Basis: establishment period water delivery
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment machinery fuel (`establishment_fuel_input`)

Record fuel used by tractors, bed-forming equipment, or other mobile machinery for preparation and planting when the activity is inside the declared boundary.

- Selected flow: Fuel for mobile agricultural machinery
- Flow property / unit: Energy or mass / MJ or kg fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel issues, tank records, or equipment fuel logs attributable to establishment activities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-good-agricultural-practices`
- Range: Establishment-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: L diesel-equivalent per 1,000 kg output
  - Basis: establishment operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Land occupation during establishment (`land_occupation_establishment`)

Record the cultivated field or protected-unit occupation attributable to the establishment phase. Land occupation is an elementary input and is normalized from the declared area and occupation period.

- Selected flow: Occupation of agricultural land
- Flow property / unit: Area-time / ha*a
- Amount rule: Multiply occupied production area by the declared establishment or crop-cycle occupation period and allocate it to marketable output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-good-agricultural-practices`
- Range: Establishment land-occupation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 0.5
  - Unit: ha*a per 1,000 kg output
  - Basis: occupied production area and crop-cycle period
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Green-garlic crop management (`crop_management`)

#### Inputs

##### Product flows

###### Irrigation or fertigation water during crop management (`irrigation_water_input`)

Record irrigation and fertigation carrier water delivered during the crop cycle by field, bed, protected unit, source, and application method.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries after establishment and before the last harvest or lifting round.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_management_records`
- Sources: `fao-good-agricultural-practices`; `codex-cxc-53-2003-fresh-produce`
- Range: Crop-management irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 1,500
  - Unit: m3 per 1,000 kg output
  - Basis: crop-cycle irrigation and fertigation delivery
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`crop_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_management_records`
- Sources: `fao-good-agricultural-practices`
- Range: Fertilizer or soil-amendment screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg formulated product per 1,000 kg output
  - Basis: actual product applications normalized to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product (`crop_protection_input`)

Record each crop-protection product applied to the green-garlic crop, including active ingredient or product name, concentration, application date, treated area, application method, and pre-harvest interval where applicable.

- Selected flow: Crop-protection product applied to green garlic
- Flow property / unit: Product mass or volume / kg product or L product
- Amount rule: Sum product quantities from application logs and supplier records for the declared crop cycle; retain product identity and active-ingredient concentration separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_management_records`
- Sources: `fao-good-agricultural-practices`; `codex-cxc-53-2003-fresh-produce`
- Range: Crop-protection screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg formulated product per 1,000 kg output
  - Basis: application records normalized to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-management electricity (`management_electricity_input`)

Record electricity used for irrigation pumping, protected cultivation controls, or other crop-management equipment inside the declared boundary.

- Selected flow: Electricity supplied to crop-management equipment
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum meter readings or equipment records for the declared crop cycle and separate shared-facility loads using the stated allocation rule.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_management_records`
- Sources: `fao-good-agricultural-practices`
- Range: Crop-management electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kWh per 1,000 kg output
  - Basis: irrigation and protected-cultivation electricity
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-management machinery fuel (`management_fuel_input`)

Record fuel used by tractors, cultivators, sprayers, harvest-support equipment, and other mobile machinery for in-season crop management.

- Selected flow: Fuel for mobile agricultural machinery
- Flow property / unit: Energy or mass / MJ or kg fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel issues, tank records, or equipment fuel logs attributable to crop-management activities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_management_records`
- Sources: `fao-good-agricultural-practices`
- Range: Crop-management fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: L diesel-equivalent per 1,000 kg output
  - Basis: in-season field operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Land occupation during crop management (`land_occupation_management`)

Record the area-time occupied by the green-garlic crop after establishment through the final harvest or lifting round.

- Selected flow: Occupation of agricultural land
- Flow property / unit: Area-time / ha*a
- Amount rule: Multiply occupied production area by the declared crop occupation period and normalize to marketable output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_management_records`
- Sources: `fao-good-agricultural-practices`
- Range: Crop-management land-occupation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 0.5
  - Unit: ha*a per 1,000 kg output
  - Basis: occupied production area and crop-cycle period
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

###### Green-garlic field residue (`crop_residue_output`)

Record leaves, roots, damaged plants, and other crop residues left in the field or removed from the crop area after harvest or lifting. The fate must be declared before any credit is assigned.

- Selected flow: Green-garlic crop residue
- Flow property / unit: Mass / kg fresh residue
- Amount rule: Weigh removed residue where available and estimate retained residue only with a documented field method; report soil return, composting, feed use, treatment, or disposal separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `mass-balance-identity`
- Range: Field-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg fresh residue per 1,000 kg output
  - Basis: crop-cycle harvest and residue reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide from managed soil (`soil_nitrous_oxide_emission`)

Record or calculate direct and, when the selected method requires it, indirect nitrous-oxide emissions associated with nitrogen applied to the managed green-garlic soil.

- Selected flow: Nitrous oxide emitted to air from managed agricultural soil
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate from documented nitrogen inputs and the selected emission-factor or measured-emission method; retain direct and indirect components separately where the method supports them.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soil_emission_inputs`
- Sources: `ipcc-2019-refinement-managed-soils`
- Range: Managed-soil nitrous-oxide screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg N2O per 1,000 kg output
  - Basis: documented crop-cycle nitrogen input and selected method
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia from managed soil (`soil_ammonia_emission`)

Record or calculate ammonia volatilization from fertilizer and soil-amendment applications when the selected inventory method includes it.

- Selected flow: Ammonia emitted to air from managed agricultural soil
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate from the documented nitrogen product and application method using a declared factor or measured result; retain the factor source and application conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soil_emission_inputs`
- Sources: `ipcc-2019-refinement-managed-soils`
- Range: Managed-soil ammonia screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg NH3 per 1,000 kg output
  - Basis: documented crop-cycle nitrogen input and selected method
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate leaching from managed soil (`soil_nitrate_leaching`)

Record or calculate nitrate transfer from managed soil to water when irrigation, drainage, soil tests, or the selected inventory method supports the estimate.

- Selected flow: Nitrate transferred from managed soil to water
- Flow property / unit: Mass as nitrate or nitrogen / kg NO3- or kg N
- Amount rule: Calculate from documented nitrogen inputs and the declared leaching or water-quality method, or use a measured drainage result with its sampling basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soil_emission_inputs`
- Sources: `fao-good-agricultural-practices`; `ipcc-2019-refinement-managed-soils`
- Range: Soil-nitrate leaching screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg N as nitrate per 1,000 kg output
  - Basis: documented nitrogen input and declared leaching or drainage method
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Green-garlic harvest and gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Harvest and handling machinery fuel (`harvest_fuel_input`)

Record fuel used for lifting or pulling, field collection, trimming, sorting, and other mobile harvest or handling equipment operating before the declared gate.

- Selected flow: Fuel for mobile agricultural machinery
- Flow property / unit: Energy or mass / MJ or kg fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel issues, tank records, or equipment fuel logs attributable to harvest and gate preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_handling_records`
- Sources: `fao-good-agricultural-practices`
- Range: Harvest-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: L diesel-equivalent per 1,000 kg output
  - Basis: harvest and pre-gate handling operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wash or de-soiling water (`wash_water_input`)

Record water used to remove soil or contamination from green garlic before the declared gate, separating source water, recirculated water, and final discharge where relevant.

- Selected flow: Process water for washing fresh produce
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum metered or batch-recorded water used for washing and retain the water-quality and reuse basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_handling_records`
- Sources: `codex-cxc-53-2003-fresh-produce`
- Range: Wash-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3 per 1,000 kg output
  - Basis: washing batches and water-balance records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling and packing electricity (`gate_electricity_input`)

Record electricity used for forced-air cooling, refrigeration, grading, lighting, or packing equipment that occurs before the declared gate.

- Selected flow: Electricity supplied to cooling, grading, and packing equipment
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum meter readings or equipment records for the represented harvest campaign and allocate shared loads using the declared rule.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_handling_records`
- Sources: `codex-cxc-53-2003-fresh-produce`
- Range: Cooling and packing electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kWh per 1,000 kg output
  - Basis: cooling, grading, and packing campaign
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary container packaging (`primary_container_packaging`)

Record crates, bins, cartons, or other primary containers that cross the foreground boundary with the green garlic. State whether each container is single-use, returnable, or reused and record the declared allocation of reusable packaging.

- Selected flow: Primary container packaging for fresh green garlic
- Flow property / unit: Mass / kg packaging material
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- Amount rule: Record packaging material mass or container count, tare, reuse cycles, and the allocation basis for reusable containers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_handling_records`
- Sources: `codex-cxc-53-2003-fresh-produce`
- Range: Primary-container screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg packaging material per 1,000 kg output
  - Basis: declared container tare and reuse allocation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Road freight to the declared gate (`pre_gate_transport_input`)

Record purchased road transport of harvested green garlic or primary packaging that occurs before the declared gate. Retain mass, distance, route, vehicle basis, and load factor.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / t*km
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Calculate tonne-kilometres from transported mass and documented one-way distance, separating empty return or shared loads when relevant.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Sources: `codex-cxc-53-2003-fresh-produce`
- Range: Pre-gate transport screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: t*km per 1,000 kg output
  - Basis: documented mass and one-way pre-gate distance
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest and grading rejects (`harvest_reject_waste`)

Record plants or bulbs rejected during lifting, trimming, sorting, grading, washing, cooling, or packing, and state their destination or treatment.

- Selected flow: Green-garlic harvest and grading rejects
- Flow property / unit: Mass / kg fresh reject
- Amount rule: Weigh or record rejected mass by harvest round and reconcile it with marketable product, residue, and loss streams.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `mass-balance-identity`; `codex-cxc-53-2003-fresh-produce`
- Range: Harvest-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg fresh reject per 1,000 kg output
  - Basis: harvest and gate mass reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wash-water wastewater (`gate_wastewater`)

Record wastewater leaving the washing or gate-preparation operation, including the measured or calculated water volume and the receiving treatment or discharge route.

- Selected flow: Wastewater from fresh-produce washing
- Flow property / unit: Volume or mass / m3 or kg wastewater
- Amount rule: Record final wastewater discharge or calculate it from wash-water input, retained water, and documented losses; retain the treatment or discharge destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_handling_records`
- Sources: `codex-cxc-53-2003-fresh-produce`; `mass-balance-identity`
- Range: Wash-water wastewater screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3 per 1,000 kg output
  - Basis: wash-water balance and discharge records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Used primary packaging (`packaging_waste_output`)

Record discarded or damaged primary packaging leaving the gate-preparation operation and distinguish single-use material from returnable containers sent back for reuse.

- Selected flow: Used or discarded primary packaging
- Flow property / unit: Mass / kg packaging waste
- Amount rule: Record discarded packaging material and returnable-container losses separately from packaging entering the product system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-garlic output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_handling_records`
- Sources: `codex-cxc-53-2003-fresh-produce`
- Range: Primary-packaging waste screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg packaging waste per 1,000 kg output
  - Basis: packaging issue, return, and discard records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh green garlic (`marketable_green_garlic_output`)

Record the marketable fresh green garlic that passes the declared maturity, condition, cleanliness, trimming, grade, and packaging requirements at the declared gate. This is the sole reference product output for normalization.

- Selected flow: Marketable fresh green garlic at declared gate
- Flow property / unit: Mass / kg fresh product
- Amount rule: Normalize all foreground inputs and outputs to 1,000 kg of measured marketable product at the declared gate.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1,000 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `mass-balance-identity`
- Range: Reference-output reconciliation interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.98
  - Upper: 1.02
  - Unit: normalized kg per kg reference product
  - Basis: measured marketable output after declared gate preparation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | shared field, protected-unit, and packing activities | Prefer subdivision or direct metering of activities by crop, field, campaign, product grade, and gate before applying allocation. | `iso-14044-2006` |
| `allocation_shared_inputs` | shared irrigation, electricity, machinery, storage, and packing loads | Allocate a shared input using the most physically causal documented driver, such as measured mass, area-time, operating time, or container count. Report the driver and residual unallocated amount. | `iso-14044-2006` |
| `allocation_co_products` | downgraded green garlic, feed, compost, or other recipient-bound outputs | Treat downgraded or recovered material as waste unless a documented recipient, intended use, quality, and hand-off demonstrate a co-product function. If allocation is required, use the stated physical driver first and disclose the alternative scenario. | `iso-14044-2006`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | `planting_material_input`; `establishment_water_input`; `establishment_fuel_input`; `land_occupation_establishment` | planting log, supplier invoice, meter, fuel issue, and field register | field or unit; lot; planting date; planted area; material mass or count; water meter or delivery; fuel quantity; occupation period | reconcile supplier, field, meter, and equipment records for each planting unit | kg, count, m3, L, ha, and days | each planting event and monthly close | full establishment period | each field, bed, or protected unit | aggregate by planting unit and crop cycle before output normalization | signed field log, supplier record, meter reading, and source-lot trace |
| `cp_crop_management_records` | `crop_management` | `irrigation_water_input`; `fertilizer_soil_amendment_input`; `crop_protection_input`; `management_electricity_input`; `management_fuel_input`; `land_occupation_management` | irrigation log, input invoice, nutrient plan, application record, meter, fuel log, and field register | product name; product mass; nutrient concentration; application date; treated area; water source and volume; electricity; fuel; crop area and occupation period | collect per application or meter interval and reconcile to field and crop-cycle identifiers | kg product, kg nutrient, m3, kWh, L, ha*a | each application or meter interval, with monthly review | full crop cycle | each field, bed, protected unit, or shared facility | aggregate per crop cycle and allocate shared facility loads by declared physical driver | application record, supplier or laboratory specification, water record, meter, and crop map |
| `cp_soil_emission_inputs` | `crop_management` | `soil_nitrous_oxide_emission`; `soil_ammonia_emission`; `soil_nitrate_leaching` | nitrogen balance, soil test, drainage or water-quality record, emission-factor worksheet | nutrient product and N content; organic input; irrigation; soil or drainage result; application method; selected factor or model | calculate from traceable nitrogen inputs and measured site evidence where available; retain method version | kg N, kg N2O, kg NH3, kg NO3- or kg N | each crop cycle and after material method change | full crop cycle | each field or protected unit | calculate by field and crop cycle, then normalize to marketable output | signed factor worksheet, test report, sample record, and method disclosure |
| `cp_harvest_grade_records` | `harvest_and_gate_preparation` | `harvest_reject_waste`; `marketable_green_garlic_output`; `crop_residue_output` | harvest ticket, scale ticket, grade sheet, residue log, and fate record | harvest or lifting date; gross mass; marketable mass; grade; rejects; trimming; field residue; fate; moisture or condition notes | weigh each round or use a documented sampling and reconciliation method | kg and declared grade fraction | every harvest or lifting round | complete harvest campaign | each field, lot, and gate | reconcile gross harvest to marketable output, rejects, residues, and losses before normalization | calibrated scale, signed grade sheet, lot trace, and recipient or treatment record |
| `cp_gate_handling_records` | `harvest_and_gate_preparation` | `harvest_fuel_input`; `wash_water_input`; `gate_electricity_input`; `primary_container_packaging`; `gate_wastewater`; `packaging_waste_output` | wash batch log, water meter, electricity meter, packaging issue and return record, fuel log, and discharge record | batch mass; wash-water input and discharge; water quality; electricity; fuel; container tare and reuse; waste quantity; destination | collect by batch or meter interval and link to harvest lot and gate | kg, m3, kWh, L, and kg packaging | each batch or meter interval | complete pre-gate campaign | pack-house, field pack station, or declared handling site | aggregate by harvest campaign and allocate shared utilities by batch mass or operating time | calibrated meters, wash-water quality record, packaging count, discharge record, and lot trace |
| `cp_transport_records` | `harvest_and_gate_preparation` | `pre_gate_transport_input` | carrier record, dispatch note, route record, and scale ticket | transported mass; origin and destination; one-way distance; vehicle type; load factor; return leg; date | calculate service from documented shipment and route records | t*km, t, km, and vehicle class | each shipment | complete pre-gate transport period | each shipment route | aggregate by shipment and normalize to marketable gate output | dispatch note, scale ticket, route evidence, and carrier record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_output_normalization` | all process inputs and outputs | Normalize each crop-cycle quantity as `recorded quantity / measured marketable green-garlic output * 1,000 kg`. Keep the unnormalized record for audit. | field or facility record; marketable output | PCR-normalized amount | `mass-balance-identity` |
| `calc_nutrient_basis` | `fertilizer_soil_amendment_input` | For each actually applied product, calculate nutrient mass as `product mass * documented nutrient fraction`; retain product mass and each nutrient equivalent as separate fields. | product mass; supplier or laboratory nutrient concentration | kg product and kg nutrient | `fao-good-agricultural-practices` |
| `calc_area_time` | `land_occupation_establishment`; `land_occupation_management` | Calculate area-time as `occupied area * declared occupation duration`, then attribute it to the crop-cycle output. | area; occupation dates | ha*a | `mass-balance-identity` |
| `calc_soil_nitrogen_emissions` | `soil_nitrous_oxide_emission`; `soil_ammonia_emission`; `soil_nitrate_leaching` | Apply the selected measured or factor-based nitrogen method to documented nitrogen inputs, organic additions, irrigation, soil, and drainage evidence. Record direct, indirect, or leaching components separately when supported. | nutrient basis; soil and drainage records; selected factor or model | declared pollutant amount | `ipcc-2019-refinement-managed-soils` |
| `calc_harvest_mass_balance` | `marketable_green_garlic_output`; `harvest_reject_waste`; `crop_residue_output` | Reconcile gross harvested mass to marketable output, downgraded or rejected mass, field residue, trimming, and measured loss. Investigate any unexplained residual before normalization. | harvest tickets; grade sheets; residue and loss records | reconciled output and waste streams | `mass-balance-identity` |
| `calc_wash_wastewater` | `wash_water_input`; `gate_wastewater` | Calculate wastewater as measured discharge or as `wash-water input - retained water - documented evaporation or other loss`; retain the chosen balance basis. | wash-water meter; discharge meter; retained-water or loss record | wastewater volume or mass | `mass-balance-identity`; `codex-cxc-53-2003-fresh-produce` |
| `calc_transport_service` | `pre_gate_transport_input` | Calculate tonne-kilometres as `transported mass in tonnes * documented one-way distance in kilometres`; disclose shared loads and empty-return treatment. | shipment mass; route distance; load and return record | t*km | `codex-cxc-53-2003-fresh-produce` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_traceability` | reference flow, planting material, inputs, outputs, and gate | Identify the crop variety or cultivar group, lot, production unit, route, gate, and all selected semantic flow roles. Keep platform identity resolution separate from the semantic category until verified. | field map, lot records, product descriptions, and identity evidence gap review |
| `quality_input_records` | planting material, water, nutrient products, crop protection, energy, packaging, and transport | Provide supplier, meter, invoice, application, or carrier records with dates, quantities, units, and the production unit to which each record belongs. | `fao-good-agricultural-practices`; `codex-cxc-53-2003-fresh-produce` |
| `quality_output_reconciliation` | marketable output, rejects, residues, wastewater, and packaging waste | Reconcile each harvest or handling round and disclose sampling, scale calibration, missing records, and final destination for each residual stream. | `mass-balance-identity`; `codex-cxc-53-2003-fresh-produce` |
| `quality_nutrient_and_emission_method` | fertilizer or soil amendments and soil emissions | Report product nutrient basis, organic input basis, emission or leaching factors, measurement method, and method version. Do not infer pollutant amounts from product identity alone. | `ipcc-2019-refinement-managed-soils`; `fao-good-agricultural-practices` |
| `quality_temporal_and_geographic_scope` | complete foreground package | Cover one complete crop cycle and harvest campaign, identify production geography and protected or open-field route, and explain any seasonal or site aggregation. | field register, crop calendar, and route declaration |
| `quality_water_and_hygiene` | irrigation, fertigation, washing, and gate preparation | Record intended water use, source, quality evidence, reuse or recirculation, discharge destination, and proximity to harvest or edible plant contact. | `codex-cxc-53-2003-fresh-produce` |
| `quality_uncertainty_disclosure` | all normalized amounts and calculated emissions | State measured, calculated, estimated, sampled, or missing values; retain range and allocation assumptions; and flag any provisional estimate for replacement by reviewed evidence. | dataset metadata, calculation worksheet, and QA log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference flow and all inventory rows | Confirm that the semantic green-garlic reference product, flow property, unit group, and every resolved flow identity match the declared fresh whole product state, direction, flow type, and gate. Keep identity evidence gaps visible for later resolution. | `mass-balance-identity` |
| `validation_mass_balance` | harvest, grading, residue, wastewater, and packaging records | Check that recorded inputs, gross harvested mass, marketable output, rejects, residues, losses, wash-water balance, and packaging discards reconcile within the disclosed measurement uncertainty. | `mass-balance-identity` |
| `validation_nutrient_basis` | fertilizer or soil-amendment input and soil emissions | Check that each nutrient equivalent is traceable to an actually applied product and documented concentration, that compound nutrients are not double counted, and that emission calculations use a disclosed method. | `fao-good-agricultural-practices`; `ipcc-2019-refinement-managed-soils` |
| `validation_water_and_hygiene` | irrigation, fertigation, washing, wastewater, and gate hand-off | Check source, volume, intended use, quality evidence, reuse, discharge route, and timing against the declared crop and harvest route. | `codex-cxc-53-2003-fresh-produce` |
| `validation_temporal_scope` | process map and foreground records | Check that every required process is represented, all planting and harvest rounds are included, and no post-gate activity or excluded infrastructure is silently mixed into the crop-cycle dataset. | `fao-good-agricultural-practices` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground green-garlic production dataset suitable for a `secondary_dataset` projection; a `background_dataset` projection requires additional regional aggregation and review |
| downstream_use | Constructing fresh-green-garlic process datasets and lifecycle models at the declared farm-gate or pack-house boundary; optional regional background use after aggregation |
| allowed_use | Comparative LCA and footprint modelling when crop cycle, route, gate, product qualifiers, allocation, water, nutrient, emissions, and uncertainty metadata are preserved |
| excluded_use | Mature garlic, processed garlic, retail or consumer stages, unreported post-gate transport, infrastructure manufacture, land-use change, or cross-region extrapolation without a documented representativeness assessment |
| required_metadata | PCR id and version; reference amount and unit; product maturity and condition; variety or cultivar group; geography; route; planting and harvest dates; planting-material source; actual nutrient products and nutrient basis; crop protection; water source and use; energy; harvest reconciliation; rejects and residues; packaging; gate; and waste fate |
| required_quality_disclosure | temporal and geographic coverage; measured versus calculated values; factor or model versions; sampling and scale evidence; allocation drivers; missingness; provisional estimates; evidence gap flow identities; and uncertainty or sensitivity treatment |
| update_trigger | New reviewed flow or property identity; material change in cultivation or gate route; new nutrient, water, emission, packaging, or allocation evidence; repeated QA findings; changed classification scope; or a new crop-cycle data basis |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO Plant Production and Protection Division, Guiding Principles, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/scpi-framework/guiding-principles/en/ | crop-cycle records, soil and nutrient management, water stewardship, crop protection, and input traceability |
| `codex-cxc-53-2003-fresh-produce` | standard | Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables CXC 53-2003, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pt/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+53-2003%2FCXC_053e.pdf | water quality, harvest, washing, packing, transport, hygiene, and traceability requirements |
| `fao-garlic-postharvest-compendium` | handbook | FAO, Post-harvest Compendium: Garlic, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Garlic.pdf | garlic crop identity, harvest condition, and handling context |
| `ipcc-2019-refinement-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, https://www.ipcc.ch/report/2019-refinement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories/ | managed-soil nitrous oxide, volatilization, and nitrogen-loss method selection |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | subdivision, shared-input allocation, co-product handling, and disclosure |
| `mass-balance-identity` | method_factor | PCR mass-balance and normalization rule defined in this record | harvest, output, residue, wastewater, packaging reconciliation, and reference-flow normalization |
