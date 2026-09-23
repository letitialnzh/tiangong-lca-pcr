---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.eggplants-aubergines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Eggplants (aubergines)

## 1. Scope and Applicability

This PCR guides a foreground data package for fresh, whole, and unprocessed eggplants (aubergines) from establishment of an open-field or protected-cultivation unit through crop management, harvest, grading, optional washing and cooling, primary packing, and the declared farm-gate or pack-house hand-off. It covers seeded and transplanted annual crops, repeated harvests from one planting, and production of marketable fruit in the declared maturity, size, colour, and grade.

Seed and transplant production, nursery operations, breeding, pickling, fermentation, canning, freezing, drying, cooking, cutting, prepared foods, retail, consumer storage and use, and post-gate transport are outside the default boundary. Durable greenhouse, irrigation, trellis, machinery, and other capital infrastructure are excluded from the crop-cycle inventory unless a separate attribution is declared. Field residues, culls, and packaging wastes remain in the foreground until their declared fate is recorded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.eggplants-aubergines` |
| classification_refs | CPC 3.0 `01233`, Eggplants (aubergines) |
| covered_products | Fresh whole eggplants (aubergines), including open-field and protected-cultivation fruit, delivered in the declared maturity, size, colour, grade, washing, cooling, and packaging state |
| excluded_products | Seed, transplants, nursery outputs, pickled or fermented eggplant, canned, frozen, dried, cooked, cut, prepared, or retail products, capital goods, and post-gate services |
| representative_product | Marketable fresh eggplant meeting the declared cultivar group, maturity, size, colour, firmness, cleanliness, defect tolerance, and grade requirements |
| production_route | Seeded or transplanted open-field or protected cultivation, bed preparation, irrigation, nutrient and crop-protection management, harvest rounds, grading, optional washing and cooling, and primary packing |
| market_state | Fresh, unprocessed whole eggplant at the declared farm-gate or pack-house gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh eggplant at the declared farm-gate or pack-house hand-off |
| How much | 1,000 kg |
| How well | Fresh, whole, and unprocessed fruit with declared cultivar or variety group, maturity, size, colour, firmness, cleanliness, grade, defect tolerance, moisture state, and packaging state |
| How long or cycle | One declared crop cycle and harvest campaign; all harvest rounds attributable to the same planting are reconciled before normalization |
| reference_flow_link | `eggplant_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Eggplants (aubergines), production mix, at farm gate, fresh and unprocessed `1380c74a-b7bd-44ef-8539-ed9578ba930d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or variety group; production geography; open-field or protected route; seed or transplant route; planting date; harvest dates and rounds; maturity, size, colour, firmness, grade, and defect criteria; irrigated or rain-fed status; nutrient basis; crop-protection program; washing and cooling state; packaging state; residue and reject fate; declared gate |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. The reference product-flow identity is platform-verified for CPC 3.0 01233; the mass property and mass unit-group references are stable support objects.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_eggplant_mass` | marketable fruit, harvest, culls, and residues | Mass | kg | Weigh harvested, marketable, downgraded, rejected, field-loss, and residual fruit streams separately and reconcile them before conversion to the 1,000 kg reference output. |
| `crop_cycle_normalization` | field and protected-cultivation records | Area and mass | ha and kg | Record inputs and harvest rounds by field, bed, or protected unit and normalize them to marketable output attributed to the same declared crop cycle. |
| `nutrient_product_basis` | mineral and organic nutrient inputs | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | Record formulated product mass and documented nutrient concentration separately. Convert nutrient equivalents only from a supplier specification, label, nutrient plan, or laboratory result. |
| `water_delivery_basis` | irrigation, fertigation, washing, and source withdrawal | Volume | m3 | Record crop irrigation, fertigation carrier water, post-harvest washing water, and natural-resource withdrawal as distinct quantities and disclose the meter or water-balance basis. |
| `area_time_basis` | open-field beds and protected units | Area-time | ha*a | Record occupied production area and crop occupation period; durable structures and equipment require separate attribution if included. |
| `postharvest_mass_change` | washing, cooling, grading, and packing | Mass and moisture | kg and declared fraction | Retain measured soil removal, water uptake, cooling loss, and packing loss separately from harvested crop mass and disclose the mass reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field bed or protected cultivation unit receiving eggplant seed or transplant material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared eggplant crop cycle and foreground input accounting |
| product_classification_scope | CPC 3.0 `01233`, Eggplants (aubergines), through the declared farm-gate or pack-house hand-off |
| recursive_input_rule | Eggplant seed or transplant material is recorded at its received hand-off state and linked to an upstream dataset; its own production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for planting material, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, purchased transport, and waste-treatment services when those inputs cross the boundary. |
| disclosure | Declare cultivar group, geography, route, planting density, crop-cycle dates, irrigation source and method, nutrient basis, crop-protection program, harvest rounds, marketable yield, culls and residues, washing and cooling, packaging, fate of wastes, and declared gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and cultivation | Include bed preparation attributable to the crop cycle, planting, crop management, irrigation, nutrient and crop protection, and direct crop emissions; disclose prior land use and exclude unrelated infrastructure construction. | `fao-crop-evapotranspiration-56`; `fao-good-agricultural-practices` |
| `boundary_repeated_harvest` | harvest rounds | Attribute every harvest round from one planting to the same crop cycle and reconcile marketable fruit, downgraded fruit, field losses, and residues before normalization. | `fao-eggplant-production-guide`; `usda-ams-eggplant-standard` |
| `boundary_gate_preparation` | sorting, washing, cooling, and packing | End the default foreground boundary at the declared farm-gate or pack-house gate. Include sorting, washing, cooling, primary packaging, and pre-gate transport only when they occur before that gate. | `usda-ams-eggplant-standard`; `codex-fresh-produce-hygiene` |
| `boundary_residue_fate` | fruit culls, crop residues, and packaging waste | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. Do not assign a co-product credit without a documented recipient and intended use. | `iso-14044-2006`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Eggplant crop establishment | required | every represented sowing, transplanting, bed, or protected-cultivation unit | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | Eggplant crop management | required | each represented crop cycle | foreground managed biological production | managed area, irrigation, nutrient and protection applications, and harvest campaign |
| `harvest_and_gate_preparation` | Eggplant harvest and gate preparation | required | each represented harvest campaign | foreground harvest, grading, conditioning, packing, and hand-off | 1,000 kg marketable fresh eggplant output |

### Process: Eggplant crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Seed or transplant planting material (`planting_material_input`)

Record seed or transplant material entering each declared bed or protected unit, distinguishing purchased seed from nursery transplants and preserving the supplier lot and planting date.

- Selected flow: Eggplant seed or transplant planting material
- Flow property / unit: Mass or viable count / kg, seed, or plant
- Amount rule: Record supplier lot quantity and planted viable seed or transplant quantity by field, bed, or protected unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-eggplant-production-guide`
- Range: Planting-material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 8
  - Unit: kg seed or 2,500 plants per 1,000 kg output
  - Basis: declared planted area and crop-cycle output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Record water applied for bed preparation, seed emergence, or transplant establishment by source and production unit, excluding rainfall unless a water-balance method explicitly includes it.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries during establishment and retain the source and application method.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Establishment irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: m3/ha
  - Basis: establishment period from planting to uniform stand
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Occupied eggplant production area (`crop_land_occupation`)

Record the production area and time occupied by the field bed or protected cultivation unit for the declared planting campaign.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha*a
- Amount rule: Multiply declared production area by crop occupation time and state whether protected structures are excluded or separately attributed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_area_cycle_records`
- Sources: `fao-eggplant-production-guide`
- Range: Area-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.4
  - Unit: ha per 1,000 kg output
  - Basis: declared crop area and marketable crop-cycle output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Eggplant crop management (`crop_management`)

#### Inputs

##### Product flows

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
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-soil-fertilizer-plant-nutrition`; `ipcc-2019-managed-soils-n2o`
- Range: Crop-cycle nitrogen screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 350
  - Unit: kg N/ha
  - Basis: total nutrient application to the represented crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop-cycle phosphorus screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg P2O5/ha
  - Basis: total nutrient application to the represented crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop-cycle potassium screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg K2O/ha
  - Basis: total nutrient application to the represented crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_input`)

Record herbicides, fungicides, insecticides, biological controls, and adjuvants that cross the foreground boundary, preserving active ingredient and formulated product quantities where documented.

- Selected flow: Crop-protection product
- Flow property / unit: Mass / kg formulated product or active ingredient
- Amount rule: Sum product quantities from invoices, spray logs, application records, and stock reconciliation for the represented crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-good-agricultural-practices`
- Range: Crop-protection product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg formulated product/ha
  - Basis: total applications to the represented crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation and fertigation water (`crop_irrigation_water`)

Record water delivered to the crop during management, separating irrigation from fertigation carrier water and natural-resource withdrawal.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum meter readings or a documented application water balance for the represented crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Crop-cycle irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6,000
  - Unit: m3/ha
  - Basis: crop-cycle irrigation deliveries excluding rainfall
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for pumping and field operations (`field_electricity_input`)

Record purchased electricity used for irrigation pumping, fertigation, protected cultivation controls, and other in-scope field operations.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum meter or invoice records by operation and crop-cycle assignment; disclose allocation when a meter serves multiple crops.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-good-agricultural-practices`
- Range: Field-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: kWh/ha
  - Basis: pumping and protected-cultivation field operations
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel (`mobile_machinery_fuel`)

Record diesel, gasoline, or other fuel used by tractors and mobile machinery for bed preparation, cultivation, spraying, and harvest support.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel receipts, tank records, or machine-hour calculations assigned to the represented crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-good-agricultural-practices`
- Range: Mobile-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,500
  - Unit: MJ/ha
  - Basis: field machinery operations for the crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Water resource withdrawal (`water_resource_withdrawal`)

Record natural-resource water withdrawn for irrigation or fertigation separately from supplied irrigation water and report the source and return or consumption basis.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Reconcile source-meter or permit records to water delivered to the crop and disclose any return flow or consumption calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Water-withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6,500
  - Unit: m3/ha
  - Basis: crop-cycle natural-resource withdrawal
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

###### Crop residues returned or removed (`crop_residue_output`)

Record vines, leaves, roots, and other crop residues leaving the crop-cycle process, with separate quantities and fates for field return, composting, feed use, treatment, or disposal.

- Selected flow: Eggplant crop residues
- Flow property / unit: Mass / kg wet residue
- Amount rule: Weigh or calculate residues by field or protected unit and document the receiving fate; retain uncollected field residue as a declared loss or residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate_records`
- Sources: `fao-good-agricultural-practices`
- Range: Crop-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 8,000
  - Unit: kg wet residue/ha
  - Basis: crop-cycle residue mass before declared fate
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide to air (`nitrous_oxide_emission`)

Record or calculate direct and indirect nitrous oxide emissions attributable to managed nitrogen input and relevant crop residues; retain the declared calculation method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply one declared emissions method to documented nitrogen input, residue fate, and relevant environmental factors without double counting.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrous-oxide screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 35
  - Unit: kg N2O/ha
  - Basis: nitrogen-managed crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`ammonia_emission`)

Record or calculate ammonia emissions from nitrogen applications when the declared method and application records support the pathway.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: Apply the declared nitrogen-emission method to documented nitrogen forms, application timing, and environmental conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Ammonia screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg NH3/ha
  - Basis: nitrogen-managed crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`nitrate_to_water`)

Record or calculate nitrate loss to water when nutrient, soil, drainage, and receiving-medium information supports the pathway.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: Apply the declared nitrogen-loss method to recorded nutrient input, drainage or leaching evidence, and the receiving medium.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg nitrate/ha
  - Basis: nitrogen-managed crop cycle and documented drainage pathway
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Eggplant harvest and gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Washing water (`washing_water_input`)

Record water used for removal of soil and foreign material when washing occurs before the declared gate; keep it separate from irrigation and source withdrawal.

- Selected flow: Process water for washing
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum wash-water meter or batch records and disclose recirculation, treatment, and discharge handling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `codex-fresh-produce-hygiene`
- Range: Washing-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8
  - Unit: m3 per 1,000 kg output
  - Basis: pre-gate washing of fresh whole eggplant
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for cooling and packing (`postharvest_electricity_input`)

Record electricity for forced-air cooling, cold rooms, sorting lines, lighting, and packing equipment when those activities occur before the declared gate.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum equipment meter or invoice records and allocate shared services by mass, operating time, or another declared basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-good-agricultural-practices`
- Range: Post-harvest electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kWh per 1,000 kg output
  - Basis: pre-gate cooling, sorting, and packing
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary crate, carton, or pallet packaging (`primary_packaging_input`)

Record packaging materials or reusable packaging service that crosses the foreground boundary before the declared gate, with material, tare, reuse, and allocation information.

- Selected flow: Crate, carton, or pallet packaging function
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Record package mass or item count, capacity, tare, reuse cycles, and loss or return rate for the represented harvest campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_transport_records`
- Sources: `usda-ams-eggplant-standard`
- Range: Primary-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg packaging per 1,000 kg output
  - Basis: declared primary packaging at the gate
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pre-gate road freight (`pre_gate_road_transport`)

Record purchased transport from field to pack-house or another declared pre-gate hand-off when it occurs within the foreground boundary.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / t*km
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Multiply transported mass by documented distance and preserve vehicle, load, return, and route assumptions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_transport_records`
- Sources: `fao-good-agricultural-practices`
- Range: Pre-gate transport screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: t*km per 1,000 kg output
  - Basis: declared field-to-gate route
  - Basis kind: transport_service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh eggplant (`marketable_eggplant_output`)

Record accepted fresh whole fruit after harvest, grading, and any declared washing or cooling, excluding container tare and fruit assigned to another fate.

- Selected flow: Fresh marketable eggplant at declared gate
- Flow property / unit: Mass / kg
- Amount rule: Weigh accepted fruit at the declared gate and reconcile it with harvested fruit, culls, trim, field losses, and handling losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `usda-ams-eggplant-standard`
- Range: Marketable-yield screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 40,000
  - Unit: kg marketable fruit/ha
  - Basis: crop-cycle yield at the declared gate
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Downgraded and rejected fruit (`cull_fruit_output`)

Record fruit rejected at harvest, grading, washing, or packing, distinguishing field loss from fruit that reaches a documented recipient, treatment route, composting, feed use, or disposal.

- Selected flow: Downgraded or rejected eggplant fruit
- Flow property / unit: Mass / kg
- Amount rule: Weigh culls and rejected fruit by harvest campaign and document each subsequent fate; do not credit a productive use without recipient evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `usda-ams-eggplant-standard`; `mass-balance-identity`
- Range: Cull and reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 35
  - Unit: percent of harvested fruit mass
  - Basis: harvest and grading mass reconciliation
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging waste (`packaging_waste_output`)

Record damaged, discarded, or unrecovered packaging leaving the pre-gate packing operation, separated by material and fate.

- Selected flow: Packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Reconcile packaging issued, returned, reused, and discarded for the represented campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh eggplant output
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_transport_records`
- Sources: `mass-balance-identity`
- Range: Packaging-waste screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12
  - Unit: kg packaging waste per 1,000 kg output
  - Basis: pre-gate packing material reconciliation
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_crop_inputs` | multiple crops or products sharing a field, bed, meter, or facility | Allocate shared inputs using measured crop-specific records where available. If a shared record cannot be separated, use a documented physical basis such as area-time, operating time, or mass and disclose the basis. | `iso-14044-2006` |
| `allocation_cull_fates` | culls, downgraded fruit, and residues | Treat culls and residues as waste or residue unless a recipient, intended use, quality, and hand-off are documented. Apply a co-product allocation only when the secondary product has a defined function and the allocation basis is stated. | `iso-14044-2006`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material | supplier lot and planting log | lot, seed or transplant form, quantity, cultivar, date, field or bed | transcribe invoices and planting logs; verify lot against planting record | kg, seed, or plant | each planting event | complete crop cycle | each represented field, bed, or protected unit | sum planted viable quantity by crop-cycle unit | lot invoice, planting log, and supervisor check |
| `cp_area_cycle_records` | `crop_establishment` | land occupation | field or facility register | area, unit, crop dates, protected status, prior use | map or register production unit and verify start and end dates | ha and date | each crop cycle | full crop occupation period | each field, bed, or protected unit | multiply area by declared occupation period | field map, lease or facility record, date record |
| `cp_irrigation_records` | `crop_management` | irrigation and withdrawal | meter, permit, or water-balance record | source, meter, application, date, volume, return flow | read meter or reconstruct documented water balance | m3 | each application or daily total | establishment to final harvest | each water source and crop unit | sum by crop cycle and separate source withdrawal from delivery | meter calibration, permit, or water-balance check |
| `cp_nutrient_records` | `crop_management` | nutrient inputs and soil emissions | invoice, label, nutrient plan, and application log | product, mass, nutrient fraction, date, method, area, residue fate | reconcile purchases to application records and calculate nutrient equivalents | kg product and kg nutrient | each application | full crop cycle | each crop unit | sum applications assigned to the crop cycle | supplier label, soil plan, laboratory or log review |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | spray and stock record | product, active ingredient, dose, date, area, method | reconcile spray logs with invoices and stock movement | kg product or active ingredient | each application | full crop cycle | each crop unit | sum by product and active ingredient | product label, application log, trained-operator check |
| `cp_energy_records` | `crop_management` | field and post-harvest energy | meter, fuel, or invoice record | carrier, quantity, operation, equipment, date, crop or batch assignment | read meter or reconcile fuel receipts and operating records | kWh, MJ, L, or kg | each operation or billing period | full crop cycle and pre-gate handling | field, facility, and shared equipment | allocate shared use by declared physical basis | meter, receipt, machine-hour, or allocation record |
| `cp_residue_fate_records` | `crop_management` | crop residues | residue and recipient record | stream, wet mass, fate, recipient, date, field | weigh or estimate residue and retain fate evidence | kg wet residue | each removal or crop-cycle close | crop-cycle close and post-harvest cleanup | each crop unit | sum by residue stream and fate | weigh ticket, recipient record, or treatment receipt |
| `cp_harvest_grade_records` | `harvest_and_gate_preparation` | marketable output and culls | harvest and grading record | date, round, gross harvest, accepted mass, culls, grade, gate | weigh each harvest round and reconcile grade outcomes | kg | each harvest round | entire harvest campaign | each field, bed, or campaign | sum by crop cycle and declared gate | scale record, grade sheet, and mass-balance check |
| `cp_postharvest_records` | `harvest_and_gate_preparation` | washing and cooling | batch, meter, or equipment record | batch, water, recirculation, cooling time, loss, discharge | read batch or meter record and link to harvest lot | m3, kWh, kg, and h | each batch | all pre-gate handling | pack-house or declared handling site | aggregate by accepted output batch | batch sheet, meter, and sanitation record |
| `cp_packaging_transport_records` | `harvest_and_gate_preparation` | packaging and pre-gate transport | packaging issue and dispatch record | material, tare, reuse, item count, mass, distance, vehicle, load | reconcile packaging and dispatch records to accepted harvest lots | kg, item, km, or t*km | each campaign or dispatch | all in-scope pre-gate movements | field, pack-house, and route | sum packaging and transport by declared gate output | package specification, dispatch note, route record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_occupation` | crop establishment | area-time = declared production area × crop occupation period; keep protected structures separate when separately attributed | area, start date, end date, protected status | ha*a or declared area-time | `fao-eggplant-production-guide` |
| `calc_nutrient_equivalents` | nutrient inputs | nutrient mass = formulated product mass × documented nutrient fraction; retain product and nutrient bases separately | product mass, label or plan concentration | kg N, kg P2O5, and kg K2O | `fao-soil-fertilizer-plant-nutrition` |
| `calc_managed_soil_emissions` | nitrogen-related elementary outputs | apply one declared nitrogen-emission method to nutrient inputs, crop residues, and environmental factors; do not duplicate pathways | nutrient input, residue fate, method factors | declared nitrogen emission flows | `ipcc-2019-managed-soils-n2o` |
| `calc_transport_service` | pre-gate road freight | transport service = transported mass (t) × documented distance (km); state whether return or empty-leg burden is included | mass, distance, load and route record | t*km | `fao-good-agricultural-practices` |
| `calc_reference_normalization` | all inventory rows | normalized value = crop-cycle quantity × 1,000 kg / accepted marketable output at the declared gate | crop-cycle quantity and accepted output mass | quantity per 1,000 kg reference flow | `mass-balance-identity` |
| `calc_mass_reconciliation` | harvest, culls, residues, and packing | gross harvested mass = accepted output + culls and rejects + field or handling losses + declared residue streams, with measured moisture and tare treatment disclosed | harvest, grade, residue, packaging, and loss records | reconciled crop-cycle mass balance | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all flows and product qualifiers | Record semantic identity, physical state, direction, process role, and evidence gap or verified status for every flow; resolve the reference identity before final dataset publication. | flow description, qualifier record, and foreground review |
| `dq_measurement` | quantities and conversions | Use calibrated scales, meters, invoices, logs, or transparent calculations; retain raw values and conversion factors with units. | measurement record and calculation worksheet |
| `dq_temporal` | crop cycle and harvest campaign | Cover the complete declared planting-to-gate period and identify missing rounds, exceptional weather, or substituted records. | planting, application, harvest, and gate dates |
| `dq_completeness` | boundary inputs and outputs | Provide a value, justified zero, or documented exclusion for planting material, land, water, nutrients, protection, energy, emissions, yield, culls, residues, packaging, and pre-gate transport when applicable. | completeness checklist and mass-balance review |
| `dq_allocation` | shared meters, fields, facilities, or transport | State the allocation basis and test its effect when records serve multiple crops, products, or campaigns. | allocation record and sensitivity note |
| `dq_disclosure` | final dataset metadata | Declare cultivar group, geography, route, crop dates, gate, yield, grade, irrigation and nutrient bases, crop protection, residue fates, packaging, and any identity evidence gap. | dataset metadata and reference-flow comment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_definition` | reference flow | Confirm the 1,000 kg functional unit, all required qualifiers, and the platform-verified reference product, mass property, and unit-group identities before foreground generation. | `mass-balance-identity` |
| `validation_flow_set_binding` | parameterized product inputs | Resolve each parameterized row during foreground data generation using the cited Flow Set id, version, group, structural coordinate, property, unit, geography, and intended-use evidence; do not treat a Flow Set as a final UUID. |  |
| `validation_mass_reconciliation` | harvest and gate preparation | Check accepted output, culls, rejects, residues, field losses, handling losses, and packaging waste against the declared mass basis, with container tare and moisture treatment explicit. | `mass-balance-identity` |
| `validation_boundary_disclosure` | system boundary | Reject a dataset that omits the declared gate, crop cycle, route, irrigation source, nutrient basis, residue fate, or pre-gate handling included by the scope. | `fao-good-agricultural-practices`; `usda-ams-eggplant-standard` |
| `validation_soil_emissions` | managed nitrogen and residues | Verify that one declared emissions method is used and that direct and indirect nitrogen pathways are not double counted. | `ipcc-2019-managed-soils-n2o` |
| `validation_data_quality` | all foreground records | Report identity, measurement, temporal coverage, completeness, allocation, and disclosure findings separately; inconclusive or error findings fail validation by default. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground primary dataset for fresh whole eggplant production at the declared farm-gate or pack-house gate; usable downstream as `secondary_dataset` after review |
| downstream_use | Build process and lifecycle-model foreground inventories for fresh eggplant and compare declared crop-cycle routes with disclosed qualifiers |
| allowed_use | Product-category studies that preserve the declared crop cycle, route, gate, maturity and grade state, input bases, emission method, and mass reconciliation |
| excluded_use | Direct substitution for processed eggplant, seed or transplant production, retail or consumer stages, undisclosed protected infrastructure, or crops with materially different product and gate conditions |
| required_metadata | PCR id and version; cultivar group; geography; route; planting and harvest dates; crop cycle; declared gate; yield and grade; irrigation and nutrient basis; crop protection; residue and reject fates; packaging; pre-gate transport; reference product qualifiers |
| required_quality_disclosure | Measurement sources, missing or estimated fields, allocation basis, crop-cycle completeness, mass-balance result, emission method, Flow Set resolutions, and identity evidence gap findings |
| update_trigger | New cultivation or protected-production route, material change in gate conditioning or packaging, revised emission method, changed product qualifiers, or evidence that alters the default collection and validation rules |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-eggplant-production-guide` | extension_guidance | FAO or national extension guidance for eggplant establishment, crop management, harvest rounds, and production records | crop-cycle decomposition, establishment, harvest, and residue context |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration | irrigation and water-balance method context |
| `fao-good-agricultural-practices` | official_guidance | FAO good agricultural practices guidance for crop inputs, field operations, and harvest handling | boundary, field operations, crop protection, energy, and transport context |
| `fao-soil-fertilizer-plant-nutrition` | official_guidance | FAO soil fertility and plant-nutrition guidance | nutrient product and nutrient-equivalent calculation |
| `ipcc-2019-managed-soils-n2o` | method_factor | 2019 IPCC Refinement, managed soils and nitrogen emissions guidance | nitrogen emission calculation and validation |
| `usda-ams-eggplant-standard` | official_guidance | USDA Agricultural Marketing Service grade and quality guidance for eggplant | product identity, maturity, grade, yield, cull, and gate qualifiers |
| `codex-fresh-produce-hygiene` | standard | Codex hygiene principles for fresh fruits and vegetables | washing, handling, and pre-gate hygiene boundary |
| `iso-14044-2006` | standard | ISO 14044 environmental management life-cycle assessment requirements | allocation and validation rules |
| `mass-balance-identity` | method_factor | Declared crop and packaging mass-balance reconciliation method | normalization, loss, cull, residue, and packaging checks |
