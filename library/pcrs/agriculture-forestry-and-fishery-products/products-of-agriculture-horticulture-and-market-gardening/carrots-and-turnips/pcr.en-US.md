---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.carrots-and-turnips
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Carrots and turnips

## 1. Scope and Applicability

This PCR guides a foreground data package for fresh, whole, and unprocessed carrots and turnips. The default boundary runs from preparation of the declared field, bed, or protected unit and sowing through crop management, irrigation, nutrient and crop-protection inputs, harvest, optional de-soiling and washing, grading, cooling, primary packing, and the declared farm-gate or pack-house hand-off. Young or mature roots may be delivered when the crop, variety, maturity, root state, grade, washing state, and gate are disclosed.

Seed production, nursery production, processed, cut, canned, frozen, pickled, dried, juiced, retail, consumer-storage, and consumer-use products are outside the default scope. Potatoes, beets, radishes, and other root vegetables require their own product-category treatment. Durable irrigation or protected-cultivation infrastructure, machinery manufacture, land-use change, and post-gate transport are excluded unless separately attributed and disclosed. Field residues, culls, rejects, wash wastewater, removed soil, and packaging waste remain in the foreground until their declared fate or hand-off is recorded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.carrots-and-turnips` |
| classification_refs | CPC 3.0 `01251`, Carrots and turnips |
| covered_products | Fresh whole carrots and turnips from open-field or documented protected routes, including young or mature roots with declared variety, maturity, size, grade, washing, and packaging state |
| excluded_products | Seed or nursery production; processed, cut, pickled, canned, frozen, dried, or juiced products; other root vegetables; capital goods, land-use change, and post-gate services |
| representative_product | Marketable fresh whole carrot or turnip meeting the declared variety, maturity, root state, grade, moisture state, and hygiene requirements at farm-gate hand-off |
| production_route | Declared open-field or protected sowing, field management, irrigation, nutrient and crop protection, lifting harvest, grading, optional de-soiling and washing, cooling, primary packing, and gate hand-off |
| market_state | Fresh, whole, unprocessed carrots or turnips at the declared gate, loose or in primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole carrot or turnip at the declared farm-gate or pack-house hand-off |
| How much | 1,000 kg |
| How well | Fresh, whole, unprocessed roots meeting the declared crop, variety, maturity, root state, size, grade, moisture, and washing state |
| How long or cycle | One complete declared crop cycle from sowing through final harvest and gate hand-off; report production year, harvest window, and route |
| reference_flow_link | `carrot_turnip_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Carrots and turnips; production mix, at farm gate; fresh, unprocessed `<050a9dc0-7d9a-49da-9ad3-1892d880cdc7>` |
| Reference flow property | Mass `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| Reference unit group | Units of mass `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| Reference unit | kg |
| Required qualifiers | crop (carrot or turnip) and variety; CPC 01251 basis; production geography; production year and crop cycle; open-field or protected route; sowing and harvest dates; young or mature state; root, size, grade, and moisture state; irrigated or rain-fed status; nutrient products and nutrient basis; crop-protection program; washing, cooling, and packaging state; destinations of marketable, cull, reject, residue, wastewater, removed-soil, and packaging-waste streams; declared gate |

Binding: `fixed`


When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_root_mass` | marketable roots, culls, rejects, residues, and losses | Mass | kg | Weigh harvested roots, marketable output, culls, rejects, field losses, handling losses, and residues separately and reconcile them before conversion to the 1,000 kg reference output. |
| `crop_cycle_normalization` | field and protected-site records | Area and mass | ha and kg | Record inputs and harvests by site, variety, route, and crop cycle and normalize them to marketable output from the same cycle. |
| `nutrient_product_and_n_basis` | mineral and organic nutrient inputs | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | Record product mass and documented nutrient concentration separately. A compound product may supply multiple nutrient roles but must not be double counted. |
| `water_delivery_basis` | irrigation, withdrawal, washing, and wastewater | Volume | m3 | Record crop irrigation, fertigation carrier water, washing water, and source withdrawal separately and disclose the meter or water-balance basis. |
| `harvest_grade_reconciliation` | harvest, grading, and packing | Mass and declared grade | kg and declared fraction | Retain each harvest batch, gross harvested mass, marketable mass, culls, rejects, and losses so the declared grade is reproducible. |
| `moisture_and_root_state` | harvest and gate output | Mass and moisture | kg and declared moisture basis | Report moisture, maturity, root state, and washing state at the gate; do not count water removed during washing as product output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural field, bed, or declared protected unit receiving carrot or turnip seed, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared crop-, variety-, and route-specific cycle and foreground input accounting |
| product_classification_scope | CPC 3.0 `01251`, Carrots and turnips, through the declared farm-gate or pack-house hand-off |
| recursive_input_rule | Purchased carrot or turnip seed is recorded once as an upstream planting-material input and linked to an upstream dataset; its production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use compatible upstream datasets for planting material, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, transport, and waste-treatment services. |
| disclosure | Declare crop and variety, site and route, prior land use, cycle dates, irrigation and source, nutrient products and basis, crop-protection program, harvest and grade, root moisture and state, washing and cooling, packaging, cull and residue destinations, wastewater and removed-soil treatment, and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_crop_cycle` | establishment through final harvest | Include field or protected-site preparation, planting, crop management, harvest, and pre-gate conditioning belonging to the declared carrot or turnip crop cycle. | `fao-good-agricultural-practices`; `fao-crop-production-records` |
| `boundary_farm_gate` | conditioning and hand-off | End the default foreground boundary at the declared farm-gate or pack-house hand-off. Include washing, grading, cooling, primary packaging, and pre-gate transport only when they occur before that hand-off. | `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce` |
| `boundary_route_and_infrastructure` | open-field or protected route | Disclose the route and include route-specific energy, water, consumables, and shared infrastructure services when assigned to the declared cycle. | `fao-good-agricultural-practices` |
| `boundary_managed_soils` | nutrient, amendment, residue, and soil flows | Include direct and indirect managed-soil emissions attributable to nutrients and returned residues under one declared method. Do not double count burdens already present in upstream datasets. | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `boundary_residue_and_reject_fate` | culls, residues, wastewater, and packaging waste | Record the first destination of every non-marketable stream: field return, compost, feed, treatment, disposal, or another documented use. An unreported destination is a data-quality gap. | `fao-crop-residue-management`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Carrot and turnip crop establishment | required | each declared field, bed, or protected unit and crop cycle | foreground crop establishment | planted area, seed quantity, and establishment operations |
| `root_crop_management` | Managed root-crop production | required | throughout each declared carrot or turnip crop cycle | foreground managed biological production | managed area, inputs, soil emissions, and crop-loss records |
| `harvest_and_gate_preparation` | Root harvest and farm-gate preparation | required | each harvest campaign and declared pre-gate conditioning route | foreground harvest, grading, conditioning, packing, and hand-off | 1,000 kg marketable fresh root output at the declared gate |

### Process: Carrot and turnip crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Carrot or turnip seed or planting material (`planting_material_input`)

Record seed or other planting material entering each declared field, bed, or protected unit. Retain crop, variety, supplier lot, seed treatment, planting date, and destination.

- Selected flow: Carrot or turnip seed or planting material
- Flow property / unit: Mass or viable count / kg, seed units, or plants
- Amount rule: Record supplier quantity and planted viable quantity by crop, variety, site, and cycle; convert count to mass only with documented supplier data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_planting_material_records`
- Sources: `fao-good-agricultural-practices`
- Range: Provisional planting-material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg seed or declared seed units/ha
  - Basis: broad crop-establishment screen pending field and supplier records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment fuel or machinery service (`establishment_energy`)

Include fuel, electricity, or contracted machinery used for primary tillage, bed formation, seedbed preparation, and planting when the activity is inside the declared boundary.

- Selected flow: Fuel or machinery service for crop establishment
- Flow property / unit: Mass, energy, or service / kg, L, kWh, or ha-service
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Use fuel receipts, machinery logs, meter readings, or supplier service records by site and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_energy_records`
- Sources: `fao-crop-production-records`
- Range: Establishment-energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg fuel or kWh/1,000 kg output
  - Basis: broad first-pass establishment-energy screen
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Record water applied for seedbed preparation and emergence by source, application method, and production unit. Rainfall is retained as a separate climatic input where modelled.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water deliveries during establishment and disclose the source and application method.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Establishment irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: m3/ha
  - Basis: establishment period from sowing to uniform stand
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Inputs

##### Elementary flows

###### Occupied agricultural production area (`land_occupation`)

Record the land area and occupation duration for the declared carrot or turnip crop cycle. Durable protected structures are reported separately if they are included.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha*a
- Amount rule: Multiply declared production area by crop occupation time and normalize to marketable root output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_cycle_records`
- Sources: `fao-good-agricultural-practices`
- Range: Area-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 2
  - Unit: ha/1,000 kg output
  - Basis: declared area and marketable crop-cycle output
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water resource withdrawal for establishment (`establishment_water_withdrawal`)

Record source withdrawal separately from delivered irrigation water when a natural water body, well, or municipal source is part of the foreground record.

- Selected flow: Water resource withdrawal for crop establishment
- Flow property / unit: Volume / m3
- Amount rule: Use source meter readings or a declared water-balance calculation; retain conveyance and return-flow assumptions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_withdrawal_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: m3/ha
  - Basis: establishment water source and delivery balance
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Established carrot or turnip crop area (`established_crop_area`)

This internal hand-off records the accepted planted area entering crop management. It is not a marketable product output.

- Selected flow: Established carrot or turnip crop area
- Flow property / unit: Area / ha
- Amount rule: Use the accepted planted or occupied area after establishment losses are recorded.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_cycle_records`
- Sources: `fao-crop-production-records`

### Process: Managed root-crop production (`root_crop_management`)

#### Inputs

##### Product flows

###### Production irrigation water (`production_irrigation_water`)

Record irrigation and fertigation carrier water after establishment, separating source, application method, and any reused water.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum field, bed, or protected-unit meter readings from establishment through final harvest, while retaining the irrigation schedule.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Crop irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6,000
  - Unit: m3/ha/crop cycle
  - Basis: complete carrot or turnip crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation pumping electricity (`irrigation_electricity`)

Include electricity used to pump, pressurize, or distribute irrigation water when it crosses the foreground boundary.

- Selected flow: Electricity for irrigation pumping and distribution
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Use pump meter readings, bills, or a documented pump-energy calculation linked to delivered water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_operation_energy_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Irrigation-pumping energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kWh/1,000 kg output
  - Basis: pump and delivery records for the declared cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`root_crop_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `fao-good-agricultural-practices`
- Range: Nitrogen-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg N/ha/crop cycle
  - Basis: documented crop nutrient plan and complete cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Phosphorus-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg P2O5/ha/crop cycle
  - Basis: documented nutrient plan and complete cycle; zero is valid when not applied
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Potassium-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg K2O/ha/crop cycle
  - Basis: documented nutrient plan and complete cycle; zero is valid when not applied
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Organic-amendment screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30,000
  - Unit: kg product/ha/crop cycle
  - Basis: declared amendment application and dry-matter record
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product input (`crop_protection_input`)

Record each herbicide, insecticide, fungicide, biological control, or other crop-protection product applied to the crop, retaining active substance and formulation.

- Selected flow: Crop-protection product applied to carrot or turnip production
- Flow property / unit: Mass or volume / kg or L product
- Amount rule: Sum product quantity by active substance, formulation, site, and treatment event; do not infer product identity from a generic pesticide total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-good-agricultural-practices`
- Range: Crop-protection screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg or L product/ha/crop cycle
  - Basis: declared treatment program pending product records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field operations fuel or machinery service (`field_operations_energy`)

Include fuel or contracted machinery for thinning, weeding, cultivation, fertilizer application, crop protection, and other in-cycle field operations.

- Selected flow: Fuel or machinery service for root-crop management
- Flow property / unit: Mass, energy, or service / kg, L, kWh, or ha-service
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Use operation logs, receipts, meter readings, or supplier service records by field and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_operation_energy_records`
- Sources: `fao-crop-production-records`
- Range: Field-operation energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg fuel or kWh/1,000 kg output
  - Basis: complete field-operation log
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water resource withdrawal for crop management (`management_water_withdrawal`)

Record source withdrawal separately from water delivered to the crop and identify conveyance, reuse, and return flows.

- Selected flow: Water resource withdrawal for crop management
- Flow property / unit: Volume / m3
- Amount rule: Use source meter readings or a declared water-balance calculation for the management period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_withdrawal_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Management-withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6,500
  - Unit: m3/ha/crop cycle
  - Basis: declared source withdrawal and irrigation delivery
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Waste flows

###### Pre-harvest root and leaf residues (`preharvest_root_and_leaf_residues`)

Record thinned, damaged, or otherwise removed root and leaf biomass and its first destination, such as field return, composting, feed, or disposal.

- Selected flow: Carrot or turnip crop residues and thinnings
- Flow property / unit: Mass / kg fresh or dry matter
- Amount rule: Weigh or calculate removed biomass by event and retain moisture and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_loss_records`
- Sources: `fao-crop-residue-management`
- Range: Pre-harvest residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8,000
  - Unit: kg fresh matter/1,000 kg output
  - Basis: crop thinning and field-loss records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Elementary flows

###### Nitrous oxide to air from managed soils (`managed_soil_n2o`)

Calculate direct and indirect N2O from applied nutrients and returned residues under one declared method, keeping upstream burdens separate.

- Selected flow: Nitrous oxide, emissions to air from managed agricultural soil
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the declared site or IPCC-compatible method to documented nutrient and residue inputs.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_emission_records`
- Sources: `ipcc-2019-refinement-managed-soils`
- Range: Managed-soil N2O screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg N2O/1,000 kg output
  - Basis: declared nutrient and residue method
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air from managed soils (`managed_soil_nh3`)

Record or calculate ammonia volatilization from nutrient applications when the declared emission method includes it and disclose the emission compartment.

- Selected flow: Ammonia, emissions to air from managed agricultural soil
- Flow property / unit: Mass / kg NH3
- Amount rule: Apply the same declared nutrient-emission method used for the crop cycle and avoid duplicating upstream fertilizer emissions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_emission_records`
- Sources: `ipcc-2019-refinement-managed-soils`
- Range: Managed-soil NH3 screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg NH3/1,000 kg output
  - Basis: declared nutrient-emission method
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water from managed agricultural soil (`nitrate_to_water`)

Record nitrate leaching or runoff to water when supported by measurement or the declared nutrient-loss method.

- Selected flow: Nitrate, emissions to water from managed agricultural soil
- Flow property / unit: Mass / kg nitrate
- Amount rule: Calculate from documented nutrient balance, drainage, runoff, or an approved emission method; do not infer from fertilizer product mass alone.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_emission_records`
- Sources: `ipcc-2019-refinement-managed-soils`
- Range: Nitrate-to-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg nitrate/1,000 kg output
  - Basis: nutrient-loss and drainage records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate to water from managed agricultural soil (`phosphate_to_water`)

Record phosphate loss to water when supported by field, drainage, runoff, or an approved nutrient-loss method.

- Selected flow: Phosphate, emissions to water from managed agricultural soil
- Flow property / unit: Mass / kg phosphate
- Amount rule: Calculate from documented nutrient balance and loss pathway; disclose whether the basis is elemental P or phosphate equivalent.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_emission_records`
- Sources: `ipcc-2019-refinement-managed-soils`
- Range: Phosphate-to-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8
  - Unit: kg phosphate/1,000 kg output
  - Basis: nutrient-loss and drainage records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection active substance to soil (`pesticide_to_soil`)

Record active-substance emissions to soil only when the product identity, application record, and declared fate or emission method support the row.

- Selected flow: Crop-protection active substance, emissions to agricultural soil
- Flow property / unit: Mass / kg active substance
- Amount rule: Use documented active-substance application and the declared fate method; do not convert a generic product total without composition.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh root output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-good-agricultural-practices`

### Process: Root harvest and farm-gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Harvest fuel or machinery service (`harvest_energy`)

Record fuel or contracted machinery used for lifting, topping, windrowing, loading, and in-field movement before the declared gate.

- Selected flow: Fuel or machinery service for root-crop harvest
- Flow property / unit: Mass, energy, or service / kg, L, kWh, or ha-service
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Use harvest logs, receipts, meter readings, or supplier service records by harvest event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy_records`
- Sources: `fao-crop-production-records`
- Range: Harvest-energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg fuel or kWh/1,000 kg output
  - Basis: harvest event and loading records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and grading electricity (`harvest_electricity`)

Include electricity used for powered lifting, grading, weighing, or loading equipment when it is inside the declared boundary.

- Selected flow: Electricity for harvest and grading equipment
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Use meter readings, bills, or equipment records by harvest batch and allocate shared energy by mass or operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Harvest-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh/1,000 kg output
  - Basis: harvest and grading batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Root washing or de-soiling water (`washing_water`)

Record water used to remove soil or foreign material when washing occurs before the declared farm-gate hand-off. Dry handling remains a separate route.

- Selected flow: Process water for root washing or de-soiling
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Use batch meter readings or water-balance records and distinguish fresh, reused, and discharged water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce`
- Range: Root-washing water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/1,000 kg output
  - Basis: washing batch and water-reuse records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling or short-term holding electricity (`cooling_electricity`)

Include electricity for cooling or short-term holding only when it occurs before the declared gate and its duration, temperature state, and batch are disclosed.

- Selected flow: Electricity for pre-gate root cooling or holding
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Use equipment meter readings or bills by batch and allocate shared refrigeration by product mass or operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce`
- Range: Pre-gate cooling-energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kWh/1,000 kg output
  - Basis: declared holding duration and batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flexible primary packaging (`primary_flexible_packaging`)

Record bags, film, or other flexible primary packaging applied before the declared gate. Packaging is conditional and is reported only when used.

- Selected flow: Flexible packaging for fresh roots
- Flow property / unit: Mass / kg packaging material
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Use packaging issue records by material, batch, and declared reuse or disposal state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Flexible-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg packaging/1,000 kg output
  - Basis: packaging issue and loss records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Reusable crate or pallet packaging (`reusable_crate_packaging`)

Record reusable crates, bins, or pallets used before the declared gate, including material, mass, verified service cycles, and losses.

- Selected flow: Reusable crate or pallet packaging for fresh roots
- Flow property / unit: Mass / kg packaging material
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Use issue records and verified service cycles; allocate replacement over documented cycles and record losses separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Reusable-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg packaging/1,000 kg output
  - Basis: verified service-cycle and loss records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pre-gate road transport service (`pregate_transport_service`)

Record movement of roots, packaging, or supplies inside the declared boundary up to the farm-gate or pack-house hand-off.

- Selected flow: Road freight transport service before farm-gate hand-off
- Flow property / unit: Transport service / t*km
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Calculate transported mass times documented distance and retain route, load, vehicle, and empty-leg treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pregate_transport_records`
- Sources: `fao-good-agricultural-practices`
- Range: Pre-gate transport screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: t*km/1,000 kg output
  - Basis: documented pre-gate movements
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater treatment service (`wastewater_treatment_service`)

Include an external or on-site wastewater treatment service when washing water is treated before the declared gate; retain treatment technology and discharge or reuse state.

- Selected flow: Wastewater treatment service for root washing water
- Flow property / unit: Service / m3 wastewater
- Binding: `parameterized`
- Flow Set: `flow-set.waste-treatment-service`
- Flow Set version: `0.2.0`
- Flow Set group: `wastewater-treatment-service`
- Amount rule: Use treatment invoices, plant logs, or a documented on-site treatment balance by conditioning batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce`

#### Outputs

##### Product flows

###### Marketable fresh carrot and turnip farm-gate output (`marketable_root_farm_gate_output`)

Record the marketable whole roots transferred at the declared farm-gate or pack-house hand-off, with crop, variety, maturity, grade, moisture state, and washing state.

- Selected flow: Marketable carrots and turnips; fresh, whole, unprocessed, at farm gate
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scale or weighbridge records at the declared gate and retain grade and moisture basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg marketable fresh root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_grade_records`
- Sources: `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce`
- Range: Marketable-output reconciliation interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg culls and losses per 1,000 kg marketable output
  - Basis: declared crop and grade balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Waste flows

###### Root culls and rejected carrots or turnips (`root_culls_and_rejects`)

Record roots excluded from the declared marketable grade and their first destination. A documented feed or other recipient may be treated as a separate co-product only under the allocation rules.

- Selected flow: Carrot and turnip culls or rejected roots
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weigh graded culls and rejects by harvest batch and retain destination and moisture information.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_grade_records`
- Sources: `fao-postharvest-handling-vegetables`; `mass-balance-identity`
- Range: Cull-and-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg/1,000 kg marketable output
  - Basis: grade and destination records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest tops and field residues (`harvest_field_residues`)

Record tops, damaged roots left in the field, and other crop residues generated by harvest, together with field return, compost, feed, treatment, or disposal fate.

- Selected flow: Carrot and turnip tops and harvest residues
- Flow property / unit: Mass / kg fresh or dry matter
- Amount rule: Measure or calculate residue mass by harvest event and retain moisture and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_loss_records`
- Sources: `fao-crop-residue-management`; `mass-balance-identity`
- Range: Harvest-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10,000
  - Unit: kg fresh matter/1,000 kg output
  - Basis: top and field-residue records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Root-washing wastewater (`washing_wastewater`)

Record wastewater and removed soil or organic solids generated by pre-gate washing. Retain treatment, discharge, reuse, and solids-separation state.

- Selected flow: Wastewater from carrot and turnip washing
- Flow property / unit: Volume / m3
- Amount rule: Use batch measurements or a documented water balance; reconcile fresh water, reuse, retained water, evaporation, and discharge.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `fao-postharvest-handling-vegetables`; `mass-balance-identity`
- Range: Washing-wastewater screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/1,000 kg output
  - Basis: washing batch water balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Removed soil and trimming solids (`soil_and_trim_solids`)

Record soil, damaged material, and trimming solids removed during cleaning or grading when they leave the foreground route as a distinct waste stream.

- Selected flow: Soil and organic solids removed from fresh roots
- Flow property / unit: Mass / kg fresh or dry matter
- Amount rule: Measure or calculate removed solids by batch and retain moisture and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-postharvest-handling-vegetables`
- Range: Removed-solid screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg/1,000 kg output
  - Basis: washing and grading batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging waste and losses (`packaging_waste`)

Record damaged, discarded, or lost primary and reusable packaging generated before the declared gate, including material and destination.

- Selected flow: Packaging waste from pre-gate root preparation
- Flow property / unit: Mass / kg packaging material
- Amount rule: Use packaging issue, loss, and waste-treatment records by material and batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate root output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling-vegetables`; `mass-balance-identity`
- Range: Packaging-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/1,000 kg output
  - Basis: packaging loss and destination records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_same_crop_and_route` | multiple fields, cultivars, sites, or routes | Keep records separate through normalization. If aggregation is necessary, allocate shared inputs by documented area-time, operating time, water delivered, throughput, or mass. | `iso-14044-2006` |
| `allocation_marketable_and_off_grade` | marketable roots and declared secondary streams | Use mass allocation when culls or downgraded roots have a documented product recipient and function. If discarded, returned, or treated, model the destination instead of assigning a co-product credit. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_shared_water_and_energy` | shared irrigation, washing, cooling, or equipment records | Allocate shared utilities by measured water, product mass, batch time, or operating time and state the selected basis. | `fao-crop-evapotranspiration-56`; `fao-postharvest-handling-vegetables` |
| `allocation_reusable_packaging` | reusable crates, bins, and pallets | Allocate packaging production and replacement over verified service cycles and assign losses to the route where they occur. Do not spread a single-use item over undocumented cycles. | `fao-postharvest-handling-vegetables` |
| `allocation_residue_destination` | residues and rejects with different fates | Preserve destination-specific rows. Field return, compost, feed, treatment, and disposal are separate pathways and are not interchangeable co-products. | `fao-crop-residue-management`; `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site_cycle_records` | `crop_establishment; root_crop_management` | site, crop, variety, route, and cycle | field or site register | crop; variety; site; area; route; planting and harvest dates; prior land use | operator register and site map | ha and date | each site and cycle | complete declared crop cycle | declared field or protected site | retain site-cycle rows; aggregate only after review | signed field record, map, and date reconciliation |
| `cp_planting_material_records` | `crop_establishment` | planting_material_input | purchase and planting record | supplier; crop; variety; seed state; quantity; lot; destination | invoice, supplier label, and planting log | seed units, plants, or kg | each planting event | planting period | site and field | sum by crop, variety, and cycle | invoice-to-log reconciliation |
| `cp_establishment_energy_records` | `crop_establishment` | establishment_energy | fuel, meter, or service record | carrier; quantity; equipment; date; field; operating hours | receipts, meter readings, and machinery logs | kg, L, kWh, or service unit | each operation | establishment period | site and operation | allocate shared operation by documented area or time | receipt, meter, or service evidence |
| `cp_irrigation_records` | `crop_establishment; root_crop_management` | establishment_irrigation_water; production_irrigation_water | water-use record | source; meter; delivery; date; field; conveyance; reuse; return flow | meter data and verified schedule | m3 | daily, batch, or billing period | complete crop cycle | field or site | reconcile source withdrawal, delivered water, reuse, and discharge | meter calibration and water balance |
| `cp_site_and_cycle_records` | `crop_establishment; root_crop_management` | land_occupation and crop cycle | site and cycle register | crop; variety; area; route; dates; occupation period | site map and operator register | ha, m2*a, and date | each site and cycle | complete declared cycle | site | retain area and duration separately | map, register, and date check |
| `cp_water_withdrawal_records` | `crop_establishment; root_crop_management` | establishment_water_withdrawal; management_water_withdrawal | source withdrawal record | source; meter; withdrawal; delivery; return flow; date | source meter and water balance | m3 | daily, batch, or billing period | complete crop cycle | source and field | reconcile withdrawal, delivery, reuse, and discharge | meter and balance review |
| `cp_nutrient_input_records` | `root_crop_management` | nutrient_input cards | input application record | product; supplier; product mass; nutrient composition; application date; placement; area | invoice, label, application log, and nutrient analysis | kg product and kg nutrient | each application | complete crop cycle | field or site | retain product and nutrient bases without double counting | label, invoice, and application record |
| `cp_crop_protection_records` | `root_crop_management` | crop_protection_input; pesticide_to_soil | treatment log | product; active substance; formulation; concentration; rate; area; date; weather | operator log and product label | kg, L, and ha | each treatment | complete crop cycle | field or site | sum by active substance and product state | label, invoice, and treatment log |
| `cp_field_operation_energy_records` | `root_crop_management` | field_operations_energy | field operation record | operation; carrier; quantity; equipment; date; field; hours | receipts, machine logs, and service records | kg, L, kWh, or service unit | each operation | complete crop cycle | field or site | allocate shared operations by area, time, or mass | receipt and operation log |
| `cp_managed_soil_emission_records` | `root_crop_management` | soil emissions and nutrient losses | nutrient and residue balance | nutrient inputs; residue mass; moisture; fate; soil or drainage evidence | balance worksheet and measurement or model | kg fresh/dry matter and kg emission | each cycle with events | complete crop cycle | field or site | reconcile applied inputs, uptake, losses, and residue fates | method version, measured data, and review sign-off |
| `cp_harvest_energy_records` | `harvest_and_gate_preparation` | harvest_energy | harvest and loading record | harvest date; equipment; carrier; quantity; operating time; harvested mass | receipts, meter readings, and harvest log | kg, L, kWh, or service unit | each harvest | harvest window | field and event | allocate to destinations by harvested mass | harvest log and energy record |
| `cp_conditioning_energy_records` | `harvest_and_gate_preparation` | harvest_electricity; cooling_electricity | conditioning energy record | batch mass; equipment; electricity; duration; temperature; gate | meter, bill, and batch log | kWh and date | each batch | conditioning period | line or site | allocate shared energy by batch mass or operating time | meter and batch reconciliation |
| `cp_conditioning_records` | `harvest_and_gate_preparation` | washing_water; soil_and_trim_solids | batch conditioning record | batch mass; water; reuse; discharge; solids; equipment; duration | meter, batch log, and water balance | m3, kg, and date | each batch | conditioning period | line or site | allocate utilities by batch mass or time; keep solids separate | meter records and batch reconciliation |
| `cp_packaging_records` | `harvest_and_gate_preparation` | packaging and packaging waste | packaging issue and loss record | material; mass; container count; reuse cycles; batch; loss; destination | invoice, material issue record, and reuse log | kg and units | each packaging batch | pre-gate preparation period | site and line | allocate reusable packaging over verified cycles | invoice, reuse log, and loss record |
| `cp_pregate_transport_records` | `harvest_and_gate_preparation` | pregate_transport_service | movement or service record | loaded mass; distance; vehicle; date; origin; destination | transport log or supplier record | tonne-km | each movement | pre-gate period | site to declared gate | sum only movements inside declared boundary | trip log or supplier invoice |
| `cp_wastewater_records` | `harvest_and_gate_preparation` | wastewater treatment and discharge | treatment record | batch; water input; treatment technology; reuse; discharge; solids | treatment log, invoice, and water balance | m3 and date | each batch | pre-gate conditioning period | site or treatment plant | reconcile input, reuse, treatment, and discharge | treatment record and balance review |
| `cp_harvest_and_grade_records` | `harvest_and_gate_preparation` | marketable output and culls | weighbridge, scale, or grade record | harvested mass; marketable mass; grade; culls; destination; moisture; hand-off date | calibrated scale and grade register | kg | each harvest and hand-off | harvest window | site and destination | reconcile harvested mass with grade, loss, and destination rows | scale check, grade register, and delivery record |
| `cp_residue_and_loss_records` | `root_crop_management; harvest_and_gate_preparation` | residues, thinnings, and field losses | residue and loss record | residue type; mass; moisture; event; destination; method | field observation, weighing, and destination record | kg fresh/dry matter | each event and cycle | complete crop cycle | field and gate | retain destination-specific rows and reconcile to harvest balance | weighing, moisture check, and destination record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | `normalized amount = recorded amount / marketable farm-gate mass * 1,000 kg` | recorded amount; marketable farm-gate mass | normalized row value | `mass-balance-identity` |
| `calc_area_occupation` | land occupation | area-time = declared area × crop occupation period | area; dates; route | ha*a or declared area-time | `fao-good-agricultural-practices` |
| `calc_nutrient_content` | N, P, K, and organic nutrient cards | `nutrient mass = product mass × documented nutrient fraction`; retain product and nutrient bases separately | product mass; label, plan, or analysis | kg N, kg P2O5, kg K2O, or organic product mass | `fao-good-agricultural-practices` |
| `calc_irrigation_withdrawal` | irrigation and withdrawal | Calculate source withdrawal from measured delivery and the declared conveyance or return-flow method; retain measured values where available. | source meter; delivered water; return flow | source withdrawal and delivered water | `fao-crop-evapotranspiration-56` |
| `calc_managed_soil_emissions` | N2O, NH3, nitrate, and phosphate rows | Apply one declared method to nutrient, amendment, residue, soil, and drainage records; document direct and indirect pathways separately. | nutrient and residue records; method factors | declared elementary emissions | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `calc_harvest_mass_balance` | marketable output, culls, residues, losses, and waste | Reconcile harvested mass with marketable roots, culls, field residues, removed solids, water, packaging waste, and measurement tolerance. | harvest; grade; residue; waste records | balanced output set | `mass-balance-identity` |
| `calc_conditioning_water_balance` | washing water and wastewater | `wastewater = water input + retained or released product water - reuse - evaporation - measured retained water`, using measured values where available. | water input; reuse; discharge; balance terms | wastewater volume | `fao-postharvest-handling-vegetables`; `mass-balance-identity` |
| `calc_reusable_packaging` | reusable packaging | Allocate packaging mass and replacement over verified service cycles and assign losses to the route where they occur. | packaging mass; cycles; loss record | per-cycle packaging input and waste | `fao-postharvest-handling-vegetables` |
| `calc_pregate_transport` | pre-gate transport service | `transport service = transported mass (t) × documented distance (km)`; state return or empty-leg treatment. | mass; distance; route; load | t*km | `fao-good-agricultural-practices` |
| `calc_reference_mass_reconciliation` | harvest and gate preparation | `harvested mass = marketable output + culls and rejects + residues + field and handling losses`, with moisture and tare treatment disclosed. | harvest weights; grade; residues; losses | reconciled crop-cycle mass balance | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_product_identity` | reference product and outputs | Declare carrot or turnip identity, variety, market state, maturity, grade, washing state, and gate. | product metadata, grade record, and gate record |
| `quality_site_cycle_completeness` | all required processes | Cover the complete declared site and crop cycle, including establishment, management, every harvest, and route-specific pre-gate operations. | site register, dates, operation logs, and harvest records |
| `quality_input_traceability` | seed, nutrient, protection, water, energy, and packaging | Link each input to a supplier, invoice, meter, application record, or documented calculation. | invoices, labels, meters, and operation logs |
| `quality_mass_balance` | marketable, cull, residue, wastewater, and packaging outputs | Reconcile crop, water, and packaging balances and investigate unexplained residuals before release. | scale records, water balance, and review sign-off |
| `quality_nutrient_basis` | nutrient inputs and soil emissions | State product mass, nutrient basis, composition source, application timing, and emission method. | label or analysis, application log, and method record |
| `quality_water_energy_measurement` | irrigation, withdrawal, washing, electricity, and fuel | Prefer meter or receipt data; where calculated, disclose formula, factor, uncertainty, and allocation basis. | meter calibration, receipts, and calculation worksheet |
| `quality_destination_disclosure` | culls, residues, wastewater, soil solids, and packaging waste | Declare the first destination and treatment or return pathway for each non-marketable stream. | delivery, treatment, compost, feed, disposal, or field-return record |
| `quality_uncertainty_and_estimates` | all rows using estimates or ranges | Label estimated or missing values, preserve range and evidence kind, and replace provisional estimates with collected records when available. | uncertainty note, range metadata, and data-quality review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | The dataset must identify one fresh, whole, unprocessed carrot or turnip product at the declared gate. An identity evidence gap remains a coverage issue and cannot be silently replaced by another root vegetable. | `mass-balance-identity` |
| `validation_required_processes` | process map and inventory | All three required processes must be present, and every detailed process section must match a process-map id. | `fao-crop-production-records` |
| `validation_crop_scope` | product category identity | Carrots and turnips must remain within CPC 01251; seed production, processed products, and other root crops require separate treatment or mapping. | `fao-good-agricultural-practices` |
| `validation_nutrient_non_double_counting` | nutrient inputs | One compound product is recorded once on the product basis and, when required, converted to documented nutrient equivalents without summing it as separate N, P, and K products. | `fao-good-agricultural-practices` |
| `validation_water_balance` | irrigation, withdrawal, washing, and wastewater | Check source withdrawal, delivered water, reuse, evaporation, and discharge for the declared route. Do not use rainfall to close a metered irrigation row. | `fao-crop-evapotranspiration-56`; `mass-balance-identity` |
| `validation_mass_balance` | root product, culls, residues, solids, and waste | Harvested roots, marketable output, culls, residues, removed solids, wastewater, and packaging waste must reconcile within the declared tolerance. | `mass-balance-identity` |
| `validation_boundary_hand_off` | conditioning and transport | Washing, grading, cooling, packaging, treatment, and transport are included only when they occur before the declared gate; post-gate distribution is excluded. | `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce` |
| `validation_emission_method` | elementary emissions | Each emission row must state substance, compartment, method, factor basis, and whether an upstream dataset already contains the burden. | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `validation_parameterized_identity_resolution` | parameterized rows and reference flow | During foreground dataset construction, resolve each parameterized row to a compatible UUID and retain property, unit, geography, and intended-use checks. Uncovered rows remain unmapped until evidence supports a fixed identity. | `mass-balance-identity` |
| `validation_quality_disclosure` | published dataset profile | Report temporal, geographic, route, measurement, estimate, allocation, residue-fate, and evidence gap-identity limitations before downstream use. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for fresh whole carrots and turnips at farm gate |
| downstream_use | May be used as a `secondary_dataset` for the declared crop, variety, route, geography, production year, and market state; may support a `background_dataset` only after downstream compatibility checks |
| allowed_use | Farm-gate LCA of the declared CPC 01251 product; comparative use only when crop, grade, moisture, route, and allocation are compatible |
| excluded_use | Other root vegetables, seed or processed products; unqualified cross-crop substitution; datasets with evidence gap mass-balance, destination, or identity gaps |
| required_metadata | Crop and variety; CPC basis; geography; production year and cycle; route; area; irrigation and withdrawal; nutrient basis; crop protection; harvest and grade; root state and moisture; residue, cull, wastewater, soil-solid, and packaging destinations; gate; UUID resolution status |
| required_quality_disclosure | Source and measurement method; temporal and geographic representativeness; crop and route composition; estimated or missing values; nutrient, water, energy, and emission-factor basis; allocation decision; residue, wastewater, soil-solid, and packaging destinations; parameterized-flow UUID resolution; uncertainty and range treatment |
| update_trigger | Change in CPC interpretation, product boundary, crop or route scope, gate state, boundary or allocation method, Flow Set taxonomy, material evidence, emission method, or a new dataset showing narrower PCR treatment is needed |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO, Good Agricultural Practices for fruits and vegetables, FAO agriculture guidance portal | crop-cycle decomposition, field operations, nutrient and crop-protection records, irrigation, and route disclosure |
| `fao-crop-production-records` | official_guidance | FAO, crop production and farm record guidance, FAO agriculture resources | site, cycle, operation, completeness, and aggregation records |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration — https://www.fao.org/4/X0490E/X0490E00.htm | irrigation scheduling, water balance, and withdrawal records |
| `fao-postharvest-handling-vegetables` | handbook | FAO, Manual for the preparation and sale of fruits and vegetables, https://www.fao.org/4/y4893e/y4893e00.htm | harvest, washing, grading, cooling, packaging, and gate boundary |
| `fao-crop-residue-management` | extension_guidance | FAO crop-residue and sustainable soil-management resources | residue measurement and destination disclosure |
| `codex-cxc-53-2003-fresh-produce` | standard | Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables (CXC 53-2003), https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | fresh-produce state, water, hygiene, grading, and conditioning qualifiers |
| `ipcc-2019-refinement-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 AFOLU, https://www.ipcc-nggip.iges.or.jp/public/2019rf/index.html | managed-soil N2O, NH3, nitrate, and phosphate method basis |
| `ipcc-2006-guidelines-agriculture` | method_factor | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 4 AFOLU, https://www.ipcc-nggip.iges.or.jp/public/2006gl/ | agricultural emission-factor method basis |
| `iso-14044-2006` | standard | ISO 14044, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | allocation, aggregation, and data-quality rules |
| `mass-balance-identity` | method_factor | Declared crop-cycle, harvest-grade, water, residue, and packaging mass-balance reconciliation method | normalization, loss, cull, residue, wastewater, and packaging checks |
