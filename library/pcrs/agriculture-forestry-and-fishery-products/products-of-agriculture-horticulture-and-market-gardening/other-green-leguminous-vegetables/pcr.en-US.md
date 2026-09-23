---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-green-leguminous-vegetables
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
---

# Other green leguminous vegetables

## 1. Scope and Applicability

This PCR guides a foreground data package for fresh, whole, immature green leguminous vegetables assigned to CPC 01249. It covers marketable pods or green seeds from open-field or protected cultivation, including broad or fava beans, fresh cowpeas, fresh chickpeas, and fresh lentil pods when the declared classification and product facts place them in this CPC leaf. The route may be single-harvest or multi-picking and may include sorting, washing, cooling, primary packing, and other conditioning before the declared gate.

Green beans classified as CPC 01241 and green peas classified as CPC 01242 are excluded even when the production route is similar. Dry or mature pulses, seed production, sprouts, processed, canned, frozen, pickled, fermented, dried, cooked, cut, prepared, retail, consumer storage, and consumer use are outside the default scope. Nursery production, durable infrastructure, machinery manufacture, land-use change, and post-gate transport are excluded unless separately attributed and disclosed. Culls, field residues, wash water, wastewater, packaging waste, and other losses remain in the foreground until their fate or hand-off is recorded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-green-leguminous-vegetables` |
| classification_refs | CPC 3.0 `01249`, Other green leguminous vegetables |
| covered_products | Fresh, whole, immature pods or green seeds of leguminous vegetables assigned to CPC 01249, in the declared species, maturity, grade, moisture, and packaging state |
| excluded_products | CPC 01241 green beans; CPC 01242 green peas; dry or mature pulses; seed, sprouts, processed, preserved, frozen, dried, cooked, cut, prepared, retail, and consumer products; capital goods; land-use change; and post-gate services |
| representative_product | Marketable fresh other green leguminous vegetables meeting the declared species or cultivar group, maturity, size, colour, tenderness, defect tolerance, and grade |
| production_route | Direct-seeded or transplanted cultivation, bed preparation, irrigation, nutrient or amendment management, crop protection, one or more immature harvests, optional sorting, washing, cooling, primary packing, and declared gate hand-off |
| market_state | Fresh, whole, unprocessed green leguminous vegetables at the declared farm-gate or pack-house gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh, whole, immature green leguminous vegetables assigned to CPC 01249 at the declared farm-gate or pack-house hand-off |
| How much | 1,000 kg |
| How well | Fresh, whole, edible immature pods or green seeds with declared species or cultivar group, production geography, maturity, size, colour, tenderness, grade, defect tolerance, moisture state, and packaging state |
| How long or cycle | One declared crop cycle and complete harvest campaign; all picking rounds attributable to the same planting are reconciled before normalization |
| reference_flow_link | `other_green_legume_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other green leguminous vegetables, fresh, whole, at farm gate or pack-house gate `<1e41b7b7-b9fb-4ac8-805d-31086deef78d>` |
| Reference flow property | Mass `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| Reference unit group | Units of mass `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| Reference unit | kg |
| Required qualifiers | species or cultivar group; CPC assignment and exclusion check against green beans and green peas; production geography; open-field or protected route; direct-seeded or transplant route; planting and harvest dates; picking rounds; maturity, size, colour, tenderness, grade, and defect criteria; irrigated or rain-fed status; fertilizer or soil-amendment products and documented nutrient basis when applied; crop-protection program; washing, cooling, and packaging state; residue, cull, reject, and wastewater fate; and declared gate |

Binding: `fixed`

The reference product identity remains a semantic requirement until the main agent verifies a compatible platform flow. It must not be replaced by a nearby green-bean or green-pea flow merely to populate an identity field. Mass is the required reference property and kg is the required reference unit; UUID support objects are resolved by the main agent after the Process Map is complete.

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_green_legume_mass` | marketable product, downgraded product, rejects, residues, and losses | Mass | kg | Weigh marketable, downgraded, rejected, field-loss, handling-loss, and residue streams separately and reconcile them before conversion to the 1,000 kg reference output. |
| `crop_cycle_normalization` | field and protected-cultivation records | Area and mass | ha and kg | Record inputs and picking rounds by field, bed, or protected unit and normalize them to marketable output from the same declared crop cycle. |
| `fertilizer_product_and_nutrient_basis` | fertilizer and soil-amendment inputs | Product and nutrient mass | kg product and declared nutrient units | Record the actual product name, product mass, dry matter where relevant, and documented N, P, K, or other nutrient basis when applied. Do not require a product category that was not used and do not double count a compound product. |
| `water_delivery_basis` | irrigation, fertigation carrier water, washing, and source withdrawal | Volume | m3 | Record crop irrigation, fertigation carrier water, post-harvest washing water, and natural-resource withdrawal as distinct quantities and disclose the meter or water-balance basis. |
| `area_time_basis` | open-field beds and protected units | Area-time | ha*a | Record occupied production area and crop occupation period; durable structures and equipment require separate attribution if included. |
| `harvest_grade_reconciliation` | repeated harvest, grading, and packing | Mass and declared grade | kg and declared fraction | Retain each picking round, gross harvested mass, accepted mass, downgraded product, rejects, and losses so the declared grade and marketable output are reproducible. |
| `postharvest_mass_change` | washing, cooling, grading, and packing | Mass and moisture | kg and declared fraction | Retain measured soil removal, water uptake, cooling loss, tare, and packing loss separately from harvested crop mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field bed or protected cultivation unit receiving seed or planting material for the declared other-green-legume crop cycle, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared crop cycle and foreground input accounting |
| product_classification_scope | CPC 3.0 `01249`, Other green leguminous vegetables, through the declared farm-gate or pack-house gate |
| recursive_input_rule | Seed, transplant, or other planting material is recorded at its received hand-off state and linked to an upstream dataset; its own production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for planting material, fertilizer and soil-amendment products, crop-protection products, supplied water, fuels, electricity, packaging, purchased transport, and waste-treatment services when those inputs cross the boundary. |
| disclosure | Declare species or cultivar group, CPC boundary check, geography, route, planting density, crop-cycle dates, irrigation source and method, fertilizer or soil-amendment products and nutrient basis, crop-protection program, picking rounds, marketable and downgraded output, residues, washing and cooling, packaging, waste fates, and declared gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and cultivation | Include bed preparation attributable to the declared crop cycle, planting, crop management, irrigation, fertilizer or soil amendment, crop protection, and direct crop emissions; disclose prior land use and exclude unrelated infrastructure construction. | `fao-good-agricultural-practices` |
| `boundary_cpc_exclusion` | product identity and reference flow | Confirm that the represented product belongs to CPC 01249 and is not green bean CPC 01241 or green pea CPC 01242. Resolve ambiguity through product facts and review rather than changing the product boundary. | `fao-good-agricultural-practices`; `iso-14044-2006` |
| `boundary_repeated_picking` | harvest rounds | Attribute every picking round from one planting to the same crop cycle and reconcile marketable product, downgraded product, rejects, field losses, and residues before normalization. | `codex-fresh-produce-hygiene`; `iso-14044-2006` |
| `boundary_gate_conditioning` | sorting, washing, cooling, packing, and pre-gate transport | End the default foreground boundary at the declared farm-gate or pack-house gate. Include conditioning and pre-gate transport only when they occur before that gate. | `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling` |
| `boundary_residue_fate` | crop residues, culls, wastewater, and packaging waste | Record field return, composting, feed use, treatment, transport, recycling, or disposal for each stream. Do not assign a co-product credit without a documented recipient, intended use, quality, and hand-off. | `iso-14044-2006`; `codex-fresh-produce-hygiene` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Other-green-legume crop establishment | required | every represented sowing, planting, bed, or protected-cultivation unit | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | Other-green-legume crop management | required | each represented crop cycle | foreground managed biological production | managed area, water, fertilizer or amendments, crop protection, and complete harvest campaign |
| `harvest_and_field_sorting` | Harvest and field sorting | required | each represented harvest campaign | foreground harvest and first grading | 1,000 kg marketable fresh output and reconciled harvest streams |
| `conditioning_and_dispatch` | Conditioning and dispatch | conditional | when washing, cooling, packing, storage, or transport occurs before the declared gate | foreground conditioning and gate hand-off | 1,000 kg marketable product at the declared gate |

### Process: Other-green-legume crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Seed or planting material (`planting_material_input`)

Record seed, transplants, or other planting material entering each declared field bed or protected unit. Identify species or cultivar group, supplier lot, planting date, and planted area.

- Selected flow: Seed, transplant, or other planting material for green leguminous vegetable production
- Flow property / unit: Mass or viable count / kg, seed, plant, or declared count
- Amount rule: Record supplier lot quantity and planted viable seed or planting-material quantity by field, bed, or protected unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-good-agricultural-practices`
- Range: Planting-material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 25
  - Unit: kg seed or declared planting material per 1,000 kg output
  - Basis: declared planted area and crop-cycle output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Record water applied for bed preparation, emergence, or transplant establishment by source and production unit, excluding rainfall unless a water-balance method explicitly includes it.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries during establishment and retain source and application method.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Establishment irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 350
  - Unit: m3/ha
  - Basis: establishment period from planting or transplanting to uniform stand
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Occupied green-legume production area (`crop_land_occupation`)

Record the production area and time occupied by the field bed or protected unit for the declared planting campaign.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha*a
- Amount rule: Multiply declared production area by crop occupation time and state whether protected structures are excluded or separately attributed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_area_cycle_records`
- Sources: `fao-good-agricultural-practices`
- Range: Area-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1.0
  - Unit: ha per 1,000 kg output
  - Basis: declared crop area and marketable crop-cycle output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Other-green-legume crop management (`crop_management`)

#### Inputs

##### Product flows

###### Production irrigation water (`production_irrigation_water`)

Record irrigation and fertigation carrier water delivered after establishment, separating source, application method, and recirculated water.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum field, bed, or protected-unit meter readings and documented water-balance estimates from establishment through final picking.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Crop irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5,000
  - Unit: m3/ha
  - Basis: complete declared crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
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
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-good-agricultural-practices`
- Range: Nutrient and amendment screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10,000
  - Unit: kg product/ha
  - Basis: complete crop cycle and actual product records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_input`)

Record each crop-protection product applied, retaining product name, active ingredient, formulation, rate, method, date, and treated area. Integrated pest-management records may show that no treatment was used.

- Selected flow: Crop-protection product as applied
- Flow property / unit: Product or active-ingredient mass / kg
- Amount rule: Reconcile application logs, product labels, stock movement, and treated area for the complete crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene`
- Range: Crop-protection screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 350
  - Unit: kg product/ha
  - Basis: complete crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel (`mobile_machinery_fuel`)

Record diesel, gasoline, or another fuel used for cultivation, spraying, irrigation support, and crop-management operations.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel receipts, tank records, or machine-hour calculations assigned to the crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-good-agricultural-practices`
- Range: Mobile-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,800
  - Unit: MJ/ha
  - Basis: field machinery operations for the crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for irrigation and crop management (`management_electricity_input`)

Record electricity for pumping, fertigation, protected-unit operation, lighting, and other equipment before the declared gate.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum equipment meters or invoices and allocate shared services by area-time, operating time, water delivered, or another declared physical basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-good-agricultural-practices`
- Range: Management-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kWh per 1,000 kg output
  - Basis: irrigation pumping and in-scope crop-management equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Crop residues from managed production (`crop_residue_management_output`)

Record leaves, stems, roots, pods, and other residues after final picking, with separate quantities and fates for field return, composting, feed use, treatment, or disposal.

- Selected flow: Crop residues from green leguminous vegetable production
- Flow property / unit: Mass / kg wet residue
- Amount rule: Weigh or calculate residues by field or protected unit and document the receiving fate; retain uncollected field residue as a declared residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate_records`
- Sources: `fao-good-agricultural-practices`
- Range: Crop-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 300
  - Upper: 12,000
  - Unit: kg wet residue/ha
  - Basis: crop-cycle residue mass before declared fate
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water resource withdrawal (`water_resource_withdrawal`)

Record natural-resource water withdrawn for irrigation or fertigation separately from supplied water and report source and return or consumption basis.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Reconcile source-meter or permit records to water delivered to the crop and disclose return flow or consumption calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Water-withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 7,000
  - Unit: m3/ha
  - Basis: crop-cycle natural-resource withdrawal
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Nitrous oxide to air (`nitrous_oxide_emission`)

Record or calculate direct and indirect nitrous oxide emissions attributable to documented nutrient inputs, amendments, and residue pathways; retain the method and receiving medium.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply one declared emissions method to nutrient inputs, amendments, residue fate, and environmental factors without double counting.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrous-oxide screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg N2O/ha
  - Basis: nutrient-managed crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`ammonia_emission`)

Record or calculate ammonia emissions from fertilizer or organic-amendment applications when the declared method and application records support the pathway.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: Apply the declared nitrogen-emission method to documented nitrogen forms, timing, and environmental conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Ammonia screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg NH3/ha
  - Basis: nutrient-managed crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`nitrate_to_water`)

Record or calculate nitrate loss to water when nutrient inputs, soil, drainage, and receiving-medium information support the pathway.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: Apply the declared nitrogen-loss method to nutrient input and drainage or leaching evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg nitrate/ha
  - Basis: nutrient-managed crop cycle and documented drainage pathway
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate to water (`phosphate_to_water`)

Record or calculate phosphate loss to water when nutrient application, runoff or drainage, soil conditions, and receiving-medium information support the pathway.

- Selected flow: Phosphate emission to water
- Flow property / unit: Mass / kg phosphate
- Amount rule: Apply the declared phosphorus-loss method to nutrient input and documented runoff, drainage, or erosion without assigning an unsupported default emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-good-agricultural-practices`
- Range: Phosphate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg phosphate/ha
  - Basis: phosphorus-managed crop cycle and documented runoff or drainage pathway
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and field sorting (`harvest_and_field_sorting`)

#### Inputs

##### Product flows

###### Harvest containers and field handling materials (`harvest_container_input`)

Record reusable or single-use bins, crates, liners, and other handling materials used during harvest. Retain reuse cycles and replacement records.

- Selected flow: Harvest container or field handling material
- Flow property / unit: Mass / kg material or declared container count
- Amount rule: Record material type, tare, number of uses, replacement quantity, and allocation to the crop campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_handling_records`
- Sources: `codex-fresh-produce-hygiene`
- Range: Harvest-handling material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg material per 1,000 kg output
  - Basis: harvest campaign and declared reuse cycle
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest machinery fuel (`harvest_machinery_fuel`)

Record fuel used by harvest machinery and field transport before first sorting or the declared gate.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel receipts, tank records, or machine-hour calculations allocated to the harvest campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-good-agricultural-practices`
- Range: Harvest-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 800
  - Unit: MJ per 1,000 kg output
  - Basis: harvest and first field-handling campaign
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Downgraded or rejected harvested product (`downgraded_product_output`)

Record harvested pods or green seeds that fail the declared marketable grade, including reason and fate. Do not silently include downgraded material in reference output.

- Selected flow: Downgraded or rejected green leguminous vegetable product
- Flow property / unit: Mass / kg fresh product
- Amount rule: Weigh gross harvested, accepted, downgraded, and rejected product by picking round and document feed, compost, disposal, or other fate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `codex-fresh-produce-hygiene`; `iso-14044-2006`
- Range: Downgraded-product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: kg downgraded product per 1,000 kg marketable output
  - Basis: complete harvest campaign
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Harvested field loss (`harvest_field_loss`)

Record edible product left unharvested or lost during picking and first handling when it is not included in downgraded product. State the method and fate.

- Selected flow: Harvested green-legume product lost in field or first handling
- Flow property / unit: Mass / kg fresh product
- Amount rule: Estimate from field counts, sampling, or mass balance and keep it separate from marketable output and collected culls.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `iso-14044-2006`
- Range: Field-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,500
  - Unit: kg fresh product per 1,000 kg marketable output
  - Basis: complete harvest campaign
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Marketable fresh product from harvest and field sorting (`marketable_product_output`)

Record marketable product after grade determination. This is the crop-cycle normalization output when the declared gate is the field or farm gate.

- Selected flow: Marketable other green leguminous vegetables, fresh and whole
- Flow property / unit: Mass / kg fresh product
- Amount rule: Weigh accepted product by picking round after grade determination and sum the campaign total before normalization.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `codex-fresh-produce-hygiene`
- Range: Marketable-yield screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 60,000
  - Unit: kg marketable product/ha
  - Basis: complete declared crop cycle and harvest campaign
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Crop residues leaving field sorting (`crop_residue_output`)

Record leaves, stems, roots, pods, and other biomass removed during harvest or field sorting, with receiving fate and any documented use.

- Selected flow: Crop residue from harvest and field sorting
- Flow property / unit: Mass / kg wet residue
- Amount rule: Weigh or calculate removed residues and document field return, composting, feed use, treatment, or disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate_records`
- Sources: `fao-good-agricultural-practices`
- Range: Harvest-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10,000
  - Unit: kg wet residue/ha
  - Basis: harvest campaign residue mass before declared fate
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Conditioning and dispatch (`conditioning_and_dispatch`)

#### Inputs

##### Product flows

###### Washing water (`washing_water_input`)

Record water used to remove soil and foreign material when washing occurs before the declared gate. Keep it separate from irrigation and source withdrawal and disclose recirculation and discharge handling.

- Selected flow: Process water for washing fresh produce
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum wash-water meter or batch records and disclose recirculation, treatment, and discharge handling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling`
- Range: Washing-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3 per 1,000 kg output
  - Basis: pre-gate washing of fresh whole green leguminous vegetables
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling and packing electricity (`postharvest_electricity_input`)

Record electricity for cooling, cold rooms, sorting lines, lighting, and packing equipment when these occur before the declared gate.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum equipment meters or invoices and allocate shared services by throughput, cold-room time, area-time, or another declared physical basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_energy_records`
- Sources: `fao-fresh-produce-handling`
- Range: Conditioning-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kWh per 1,000 kg output
  - Basis: declared pre-gate cooling, sorting, and packing route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging and labels (`primary_packaging_input`)

Record the actual primary packaging, labels, liners, and other materials used before the declared gate. The product category does not prescribe a packaging type; identify material and reusable-container cycles from actual records.

- Selected flow: Primary packaging material for fresh produce
- Flow property / unit: Mass / kg material
- Amount rule: Record material type, mass, recycled content where known, reusable-container turns, losses, and allocation to declared output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-fresh-produce-hygiene`
- Range: Primary-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kg packaging material per 1,000 kg output
  - Basis: actual declared pre-gate packaging route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pre-gate road freight (`pre_gate_road_transport`)

Record transport from production unit or field collection point to the pack-house or gate when it occurs before the declared boundary. Record distance, payload, vehicle, and allocation basis.

- Selected flow: Road freight transport service
- Flow property / unit: Transport work / tkm
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Calculate transport work from mass, distance, vehicle or service record, and declared allocation basis; do not include post-gate transport.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Sources: `fao-fresh-produce-handling`
- Range: Pre-gate transport screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: tkm per 1,000 kg output
  - Basis: declared production-to-gate route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wash water and conditioning wastewater (`conditioning_wastewater_output`)

Record wash water and conditioning wastewater leaving the pre-gate process, including treatment, discharge destination, and any recirculation loop.

- Selected flow: Fresh-produce conditioning wastewater
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Reconcile water input, recirculation, evaporation, retained moisture, treatment, and discharge records; use a receiving-medium-specific elementary flow only when evidence supports it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `codex-fresh-produce-hygiene`
- Range: Conditioning-wastewater screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12
  - Unit: m3 per 1,000 kg output
  - Basis: declared pre-gate washing and conditioning route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging and handling waste (`packaging_waste_output`)

Record damaged, discarded, or unrecovered packaging and handling materials generated before the declared gate, separated by material and fate.

- Selected flow: Packaging or handling waste
- Flow property / unit: Mass / kg waste
- Amount rule: Reconcile packaging issued, retained in product, returned for reuse, recycled, treated, and disposed quantities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-fresh-produce-hygiene`; `iso-14044-2006`
- Range: Packaging-waste screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg waste per 1,000 kg output
  - Basis: pre-gate packaging operation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioned downgraded product (`conditioning_reject_output`)

Record product removed during washing, cooling, grading, or packing after field sorting, including its declared fate.

- Selected flow: Downgraded or rejected fresh green leguminous vegetable product
- Flow property / unit: Mass / kg fresh product
- Amount rule: Weigh or estimate conditioning rejects by batch and reconcile them with harvest-grade records and final marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_grade_records`
- Sources: `codex-fresh-produce-hygiene`; `iso-14044-2006`
- Range: Conditioning-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg product per 1,000 kg marketable output
  - Basis: declared washing, cooling, grading, and packing route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable product at declared gate (`marketable_gate_output`)

Record final marketable fresh product after included conditioning and packing at the declared farm-gate or pack-house hand-off. If no conditioning is included, reconcile this quantity to `marketable_product_output`.

- Selected flow: Marketable other green leguminous vegetables, fresh, whole, at declared gate
- Flow property / unit: Mass / kg fresh product
- Amount rule: Weigh final accepted output at the declared gate and reconcile it with gross harvest, field sorting, conditioning losses, and packaging tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_grade_records`
- Sources: `codex-fresh-produce-hygiene`
- Range: Gate-output mass reconciliation interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 1,000
  - Unit: kg marketable product per 1,000 kg reference output
  - Basis: declared gate output after included conditioning
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_field_services` | shared field, irrigation, protected-unit, and packing services | Allocate shared services among product categories or crop cycles using area-time, operating time, water delivered, throughput, or another documented physical relationship. Use economic allocation only when a physical relationship cannot represent the shared service and disclose the price basis. | `iso-14044-2006` |
| `allocation_marketable_and_off_grade` | marketable product, downgraded product, rejects, and residues | Treat marketable product as the reference output. Record downgraded product, culls, residues, and waste separately with actual fate. Do not credit feed, compost, recycling, or another use without a documented recipient, intended use, quality, and hand-off. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_reusable_containers` | reusable crates, bins, pallets, and liners | Allocate manufacture and replacement of reusable containers over documented turns or service mass, then assign cleaning, loss, and end-of-life records to the actual route. | `iso-14044-2006`; `codex-fresh-produce-hygiene` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material and establishment | seed or transplant lot record | species or cultivar; supplier lot; quantity; viability or plant count; field or protected unit; planting date; planted area | supplier record plus field log | kg, count, ha | each planting | complete crop cycle | each represented production unit | sum by crop cycle and normalize to marketable output | lot record, planting log, area record |
| `cp_area_cycle_records` | `crop_establishment` | occupied area and crop cycle | field or protected-unit register | area; unit; prior land-use disclosure; occupation dates; infrastructure allocation note | field register and map or protected-unit record | ha, date | each crop cycle | complete crop cycle | each represented production unit | calculate area-time by unit and reconcile to output | controlled area record |
| `cp_irrigation_records` | `crop_establishment` and `crop_management` | irrigation, fertigation, and withdrawal | meter, permit, or water-balance record | source; meter start and end; method; crop phase; recirculation; return flow | meter reading or documented water balance | m3 | each event or monthly | complete crop cycle | each represented production unit | sum by source and crop phase, then normalize | meter control, permit, or balance check |
| `cp_nutrient_records` | `crop_management` | fertilizer, amendment, and nutrient-loss calculation | application and product record | product; batch; mass; dry matter; nutrient composition; date; method; treated area; soil or nutrient plan; loss-method inputs | invoice, application log, specification, and plan | kg product, kg nutrient, ha | each application | complete crop cycle | each represented production unit | aggregate by actual product and nutrient basis without double counting | specification, application log, plan, method check |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | treatment log | product; active ingredient; formulation; dose; date; method; treated area; pre-harvest interval | treatment log and product record | kg product, ha, date | each treatment | complete crop cycle | each represented production unit | aggregate by active ingredient and route | label, log, operator or compliance record |
| `cp_energy_records` | `crop_management` and `harvest_and_field_sorting` | fuel and management electricity | fuel, machine-hour, meter, or invoice record | fuel type; quantity; equipment; hours; field or unit; electricity meter; allocation basis | receipt, tank record, machine log, or meter | MJ, kg, kWh | each transaction or monthly | complete crop cycle | each represented production unit | allocate shared services by declared physical basis | receipt, meter, machine log, allocation check |
| `cp_residue_fate_records` | `crop_management` and `harvest_and_field_sorting` | crop residue and cull fate | residue or recipient record | stream; mass; wet or dry basis; collection point; recipient; use; transport; treatment or disposal | weighing, sampling, and recipient record | kg, date | each harvest or fate event | complete crop cycle | each represented production unit | sum by fate and retain uncollected field residue separately | weigh ticket, recipient or treatment record |
| `cp_harvest_grade_records` | `harvest_and_field_sorting` | gross harvest, grade, loss, and marketable output | picking and grading record | picking date; gross mass; accepted mass; downgraded mass; reject mass; loss estimate; grade criteria; moisture or temperature | scale record and grade log | kg, date, declared fraction | each picking round | complete harvest campaign | each represented production unit | reconcile all picking rounds before normalization | calibrated scale, grade sheet, batch record |
| `cp_harvest_handling_records` | `harvest_and_field_sorting` | bins, crates, and field materials | container issue and return record | material; tare; count; reuse turns; loss; cleaning; allocation mass | inventory and return log | kg, count, turns | each campaign | complete harvest campaign | each represented production unit | allocate reusable service by turns or mass | inventory log, cleaning record, replacement invoice |
| `cp_postharvest_records` | `conditioning_and_dispatch` | washing and wastewater | wash-batch, meter, or treatment record | water input; recirculation; batch; soil load; treatment; discharge; retained moisture | meter, batch log, and treatment record | m3, kg, date | each batch | complete declared gate period | each conditioning facility | reconcile input, reuse, treatment, and discharge | meter, water-quality or treatment record |
| `cp_postharvest_energy_records` | `conditioning_and_dispatch` | cooling, cold storage, sorting, and packing electricity | meter or equipment record | equipment; time; temperature route; kWh; throughput; allocation basis | meter or invoice plus equipment log | kWh, h, kg | each batch or monthly | complete declared gate period | each conditioning facility | allocate shared energy by throughput, time, or physical basis | meter, temperature log, throughput record |
| `cp_packaging_records` | `conditioning_and_dispatch` | packaging and packaging waste | packaging issue, return, and waste record | material; mass; recycled content; reusable turns; damaged quantity; disposal or recycling fate | invoice, material balance, and waste record | kg, count | each batch or monthly | complete declared gate period | each conditioning facility | reconcile issued, retained, returned, and discarded packaging | invoice, stock record, waste transfer note |
| `cp_transport_records` | `conditioning_and_dispatch` | pre-gate transport | freight or route record | origin; destination; distance; payload; vehicle; service; return movement; gate | freight record, route log, or carrier record | tkm, kg, km | each movement | complete declared gate period | each represented route | calculate transport work and allocate shared movement by mass | waybill, route record, carrier statement |
| `cp_postharvest_grade_records` | `conditioning_and_dispatch` | final accepted output and conditioning rejects | pack-house batch and grade record | received mass; washed mass; cooled mass; packed mass; accepted mass; reject mass; tare; temperature; grade | scale and batch or grade record | kg, date, temperature | each batch | complete declared gate period | each conditioning facility | reconcile received and final gate masses | calibrated scale, batch record, grade log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | amount per 1,000 kg = recorded amount * 1,000 / total marketable gate mass kg | recorded amount; final marketable gate mass | normalized row amount | `mass-balance-identity` |
| `calc_nutrient_equivalent` | fertilizer and soil-amendment input | nutrient mass = product mass * documented nutrient fraction; retain product mass and each declared nutrient basis separately | product mass; supplier specification, plan, or laboratory result | nutrient mass by actual product role | `fao-good-agricultural-practices` |
| `calc_area_time` | occupied production area | area-time = declared area ha * occupation time years | area; occupation dates | ha*a | `fao-good-agricultural-practices` |
| `calc_water_withdrawal` | resource withdrawal | reconcile source withdrawal, supplied water, return flow, and documented consumption | source meter; delivered water; return flow | withdrawal and disclosed consumption | `fao-crop-evapotranspiration-56` |
| `calc_direct_and_indirect_n2o` | nitrous oxide to air | apply one declared IPCC-compatible method to nutrient inputs, amendments, residue fate, and pathway factors; do not combine overlapping methods | nutrient records; residue records; method factors | kg N2O by receiving medium | `ipcc-2019-managed-soils-n2o` |
| `calc_transport_work` | pre-gate road freight | transport work tkm = payload tonnes * declared route km; allocate shared movements by documented mass basis | payload; distance; service record; allocation basis | tkm | `fao-fresh-produce-handling` |
| `calc_reusable_container_service` | reusable harvest and packaging materials | allocate manufacture and replacement over documented turns or service mass, then add cleaning and loss records | container mass; turns; service mass; cleaning and loss | allocated packaging input and waste | `iso-14044-2006` |
| `calc_mass_reconciliation` | harvest, conditioning, and gate outputs | gross harvest = marketable + downgraded + rejects + field loss + process loss + retained or removed residue within measurement uncertainty; investigate unexplained residuals | picking; grade; loss; residue records | reconciled crop-cycle mass balance | `mass-balance-identity`; `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_product_identity` | reference product and all product flows | Verify species or cultivar group, CPC 01249 assignment, maturity, product state, and exclusion check against CPC 01241 and 01242. | product specification, classification review, and batch record |
| `quality_scale_and_meter` | mass, water, energy, and packaging rows | Use controlled scales and meters, record reading dates, and retain the basis for estimates when direct measurement is unavailable. | calibration or control record, meter log, invoice, or documented estimate |
| `quality_temporal_coverage` | all crop-cycle rows | Cover the complete declared planting and harvest campaign and disclose missing periods, exceptional weather, and changed route conditions. | field log, picking records, and gap note |
| `quality_completeness_reconciliation` | inputs, products, wastes, residues, and losses | Reconcile crop-cycle inputs and all harvest and gate outputs; explain any material unexplained balance. | mass-balance worksheet and review sign-off |
| `quality_emission_method` | environmental emissions | State the selected method, factors, receiving medium, and assumptions; avoid double counting direct, indirect, and residue pathways. | calculation sheet and method reference |
| `quality_fate_and_disclosure` | residues, culls, wastewater, packaging, and transport | Retain recipient, destination, treatment, use, and hand-off evidence for every non-marketable or waste stream. | recipient statement, transfer note, treatment record, or declared field fate |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_cpc_scope` | PCR identity and dataset metadata | Confirm the product is within CPC 01249 and is not green beans CPC 01241 or green peas CPC 01242; retain species or cultivar and product-state evidence. | `iso-14044-2006` |
| `validate_reference_mass` | reference flow and output | Require 1,000 kg marketable output on the mass property and kg unit, with complete crop-cycle and gate declaration. | `mass-balance-identity` |
| `validate_crop_cycle_completeness` | process map and inventory | Require establishment, management, and harvest processes for every represented crop cycle; require conditioning and dispatch when the declared gate includes those activities. | `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene` |
| `validate_nutrient_product_basis` | fertilizer and soil-amendment input | Require actual product identity, product mass, nutrient or amendment basis, application date, and no double counting of compound products. | `fao-good-agricultural-practices` |
| `validate_water_and_energy_separation` | irrigation, withdrawal, washing, cooling, fuel, and electricity | Keep supplied water, natural-resource withdrawal, washing water, fuel, and electricity as separate rows with declared meters or calculation bases. | `fao-crop-evapotranspiration-56`; `fao-fresh-produce-handling` |
| `validate_output_reconciliation` | marketable, downgraded, reject, residue, wastewater, and packaging rows | Reconcile picking rounds, field sorting, conditioning, and final gate output; investigate unexplained residuals and disclose all declared fates. | `mass-balance-identity`; `iso-14044-2006` |
| `validate_emission_pathway` | direct and indirect emissions | Require receiving medium, calculation method, documented nutrient or residue inputs, and pathway evidence before treating an emission row as calculated. | `ipcc-2019-managed-soils-n2o` |
| `validate_gate_and_transport` | conditioning and pre-gate transport | Confirm washing, cooling, packing, storage, and transport included in the dataset occur before the declared gate; exclude post-gate services. | `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling` |
| `validate_qualifiers` | reference flow and dataset metadata | Require all category qualifiers in the reference-flow table, including species or cultivar, maturity, grade, route, dates, water, nutrient, crop-protection, fate, and gate information. | `codex-fresh-produce-hygiene` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh, whole, immature green leguminous vegetables assigned to CPC 01249 |
| downstream_use | May be used as a secondary dataset for agricultural product systems and as a background-linked foreground node when the declared gate and qualifiers match. |
| allowed_use | Comparative modelling of fresh CPC 01249 products with disclosed species or cultivar, route, crop cycle, harvest campaign, gate, inputs, output grade, and residue or waste fates. |
| excluded_use | Green beans or green peas, dry pulses, processed or preserved products, unspecified mixed legume categories, retail or consumer life-cycle claims, and datasets with evidence gap mass balance or gate conditions. |
| required_metadata | CPC assignment; species or cultivar group; geography; field or protected route; planting and harvest dates; picking rounds; reference gate; product state and grade; irrigation and water source; actual fertilizer or amendment products and nutrient basis; crop protection; energy; packaging and transport; final mass reconciliation; and all waste or residue fates. |
| required_quality_disclosure | Temporal coverage, site scope, measurement versus estimate status, meter and scale controls, allocation basis, emission method, missing data, uncertainty, and evidence for every important input and output. |
| update_trigger | Change in CPC boundary interpretation, product state, production route, gate, crop-management practice, packaging route, emission method, or evidence that changes a material input, output, allocation, or validation rule. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius, CXC 53-2003, Code of Hygienic Practice for Fresh Fruits and Vegetables, FAO/WHO: https://workspace.fao.org/sites/codex/Standards/CXC%2B53-2003/CXC_053e.pdf | fresh-produce hygiene, harvest, washing, packing, and data disclosure |
| `fao-good-agricultural-practices` | official_guidance | FAO, Production practices to increase yield, quality and safety of fruits and vegetables: https://www.fao.org/family-farming/detail/en/c/1682483/ | crop establishment, crop management, nutrient records, and boundary disclosure |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration: https://www.fao.org/4/X0490E/X0490E00.htm | irrigation, water-balance, and withdrawal measurement |
| `fao-fresh-produce-handling` | handbook | FAO, Manual for the preparation and sale of fruits and vegetables: https://www.fao.org/4/y4893e/y4893e0a.htm | conditioning, cooling, packing, transport, and post-harvest records |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, N2O Emissions from Managed Soils and CO2 Emissions from Lime and Urea Application: https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | direct and indirect agricultural emissions calculation |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation, co-product handling, completeness, and validation principles |
| `mass-balance-identity` | method_factor | Conservation and reconciliation of declared mass inputs, outputs, losses, and residues | normalization and mass-balance checks |
