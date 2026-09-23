---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beans-green
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: scaffold_pending_translation
---

# Beans, green

## 1. Scope and Applicability

This PCR guides a foreground data package for fresh, whole, and unprocessed green beans, including snap beans and other immature edible bean pods classified as green beans. The default route runs from preparation of the declared field or protected cultivation unit through direct seeding or planting, crop management, repeated harvests, optional sorting, washing, cooling, primary packing, and the declared farm-gate or pack-house hand-off. Both open-field and protected cultivation are covered when the route, crop cycle, and gate are disclosed.

Dry beans, mature seed beans, bean seed production, sprouts, processed, canned, frozen, pickled, fermented, dried, cooked, cut, prepared, retail, consumer storage and use are outside the default scope. Nursery production, durable irrigation or protected-cultivation infrastructure, machinery manufacture, land-use change, and post-gate transport are excluded unless separately attributed and disclosed. Field residues, culls, rejected pods, packaging waste, and wash-water or treatment outputs remain in the foreground until their declared fate or hand-off is recorded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beans-green` |
| classification_refs | CPC 3.0 `01241`, Beans, green |
| covered_products | Fresh whole green beans, including snap beans and other immature edible bean pods, from open-field or protected cultivation in the declared maturity, size, colour, grade, washing, cooling, and packaging state |
| excluded_products | Dry or mature beans, bean seed, sprouts, processed, canned, frozen, pickled, fermented, dried, cooked, cut, prepared, retail, and consumer products; capital goods; land-use change; and post-gate services |
| representative_product | Marketable fresh green bean pods meeting the declared variety group, maturity, pod size, colour, tenderness, defect tolerance, and grade |
| production_route | Direct-seeded or otherwise declared green-bean cultivation, bed preparation, irrigation, nutrient and crop-protection management, repeated immature-pod harvests, sorting, optional washing and cooling, and primary packing |
| market_state | Fresh, whole, unprocessed green beans at the declared farm-gate or pack-house gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole green beans at the declared farm-gate or pack-house hand-off |
| How much | 1,000 kg |
| How well | Fresh, whole, immature edible pods with declared variety group, maturity, pod size, colour, tenderness, cleanliness, grade, defect tolerance, moisture state, and packaging state |
| How long or cycle | One declared crop cycle and complete harvest campaign; all picking rounds attributable to the same planting are reconciled before normalization |
| reference_flow_link | `green_bean_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Beans, green; production mix, at farm gate; fresh, unprocessed `ddf54bf7-5413-49f1-bf1c-2f3cc2724695` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | variety or cultivar group; production geography; open-field or protected route; direct-seeded or other planting route; planting date; harvest dates and picking rounds; pod maturity, size, colour, tenderness, grade, and defect criteria; irrigated or rain-fed status; nutrient product and nutrient basis; crop-protection program; washing and cooling state; packaging state; residue, cull, and reject fate; and declared gate |
| Binding | fixed |

The reference product flow is platform-verified for CPC 3.0:01241 and retained without a dataset version. The mass flow property and mass unit group are the stable support objects for this reference flow.

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_green_bean_mass` | marketable pods, downgraded pods, rejects, residues, and losses | Mass | kg | Weigh marketable, downgraded, rejected, field-loss, handling-loss, and residue streams separately and reconcile them before conversion to the 1,000 kg reference output. |
| `crop_cycle_normalization` | field and protected-cultivation records | Area and mass | ha and kg | Record inputs and picking rounds by field, bed, or protected unit and normalize them to marketable output attributed to the same declared crop cycle. |
| `nutrient_product_and_n_basis` | mineral and organic nutrient inputs | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | Record formulated product mass and documented nutrient concentration separately. Convert nutrient equivalents only from a supplier specification, nutrient plan, or laboratory result. A compound product may supply more than one nutrient role and must not be double counted. |
| `water_delivery_basis` | irrigation, fertigation, washing, and source withdrawal | Volume | m3 | Record crop irrigation, fertigation carrier water, post-harvest washing water, and natural-resource withdrawal as distinct quantities and disclose the meter or water-balance basis. |
| `area_time_basis` | open-field beds and protected units | Area-time | ha*a | Record occupied production area and crop occupation period; durable structures and equipment require separate attribution if included. |
| `harvest_grade_reconciliation` | repeated picking, grading, and packing | Mass and declared grade | kg and declared fraction | Retain each picking round, gross harvested mass, accepted mass, downgraded pods, rejects, and losses so the declared grade and marketable output are reproducible. |
| `postharvest_mass_change` | washing, cooling, grading, and packing | Mass and moisture | kg and declared fraction | Retain measured soil removal, water uptake, cooling loss, tare, and packing loss separately from harvested crop mass and disclose the mass reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field bed or protected cultivation unit receiving green-bean seed or planting material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared green-bean crop cycle and foreground input accounting |
| product_classification_scope | CPC 3.0 `01241`, Beans, green, through the declared farm-gate or pack-house hand-off |
| recursive_input_rule | Green-bean seed or other planting material is recorded at its received hand-off state and linked to an upstream dataset; its own production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for planting material, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, purchased transport, and waste-treatment services when those inputs cross the boundary. |
| disclosure | Declare variety group, geography, route, planting density, crop-cycle dates, irrigation source and method, nutrient product and nutrient basis, crop-protection program, picking rounds, marketable yield, downgraded and rejected pods, residues, washing and cooling, packaging, fate of wastes, and declared gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and cultivation | Include bed preparation attributable to the declared crop cycle, planting, crop management, irrigation, nutrient and crop protection, and direct crop emissions; disclose prior land use and exclude unrelated infrastructure construction. | `fao-good-agricultural-practices` |
| `boundary_repeated_picking` | harvest rounds | Attribute every picking round from one planting to the same crop cycle and reconcile marketable pods, downgraded pods, rejects, field losses, and residues before normalization. | `usda-snap-bean-standard`; `mass-balance-identity` |
| `boundary_gate_conditioning` | sorting, washing, cooling, and packing | End the default foreground boundary at the declared farm-gate or pack-house gate. Include sorting, washing, cooling, primary packaging, and pre-gate transport only when they occur before that gate. | `usda-snap-bean-standard`; `codex-fresh-produce-hygiene` |
| `boundary_residue_fate` | crop residues, pod culls, and packaging waste | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. Do not assign a co-product credit without a documented recipient, intended use, quality, and hand-off. | `iso-14044-2006`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Green-bean crop establishment | required | every represented sowing, planting, bed, or protected-cultivation unit | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | Green-bean crop management | required | each represented crop cycle | foreground managed biological production | managed area, irrigation, nutrient and protection applications, and complete picking campaign |
| `harvest_and_gate_preparation` | Green-bean harvest and gate preparation | required | each represented harvest campaign and declared pre-gate handling route | foreground harvest, grading, conditioning, packing, and hand-off | 1,000 kg marketable fresh green-bean output |

### Process: Green-bean crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Seed or planting material (`planting_material_input`)

Record green-bean seed or other planting material entering each declared field bed or protected unit, distinguishing purchased seed from any other planting route and preserving the supplier lot and planting date.

- Selected flow: Green-bean seed or planting material
- Flow property / unit: Mass or viable count / kg, seed, or plant
- Amount rule: Record supplier lot quantity and planted viable seed or planting-material quantity by field, bed, or protected unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `fao-good-agricultural-practices`
- Range: Planting-material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg seed or declared planting material per 1,000 kg output
  - Basis: declared planted area and crop-cycle output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Record water applied for bed preparation, seed emergence, or establishment by source and production unit, excluding rainfall unless a water-balance method explicitly includes it.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries during establishment and retain the source and application method.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Establishment irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: m3/ha
  - Basis: establishment period from planting to uniform stand
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Occupied green-bean production area (`crop_land_occupation`)

Record the production area and time occupied by the field bed or protected cultivation unit for the declared planting campaign.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha*a
- Amount rule: Multiply declared production area by crop occupation time and state whether protected structures are excluded or separately attributed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_area_cycle_records`
- Sources: `fao-good-agricultural-practices`
- Range: Area-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.8
  - Unit: ha per 1,000 kg output
  - Basis: declared crop area and marketable crop-cycle output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Green-bean crop management (`crop_management`)

#### Inputs

##### Product flows

###### Production irrigation water (`production_irrigation_water`)

Record irrigation and fertigation water delivered to the green-bean crop after establishment, separating source, application method, and any recirculated carrier water.

- Selected flow: Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum field, bed, or protected-unit meter readings and documented water-balance estimates from establishment through final picking.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Crop irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4,000
  - Unit: m3/ha
  - Basis: complete green-bean crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
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
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-good-agricultural-practices`
- Range: Nitrogen-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg N/ha
  - Basis: complete green-bean crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Phosphorus-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kg P2O5/ha
  - Basis: complete green-bean crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Potassium-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg K2O/ha
  - Basis: complete green-bean crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Organic-nutrient product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8,000
  - Unit: kg product/ha
  - Basis: complete green-bean crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_input`)

Record each crop-protection product applied to the represented green-bean crop, retaining product name, active ingredient, formulation, rate, application method, date, and treated area. Use integrated pest management records to show when a treatment was unnecessary or omitted.

- Selected flow: Crop-protection product as applied
- Flow property / unit: Product or active-ingredient mass / kg
- Amount rule: Reconcile application logs, product labels, stock movement, and treated area for the complete crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-good-agricultural-practices`; `fao-fresh-produce-handling`
- Range: Crop-protection product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg product/ha
  - Basis: complete green-bean crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel (`mobile_machinery_fuel`)

Record diesel, gasoline, or another fuel used by tractors and mobile machinery for bed preparation, cultivation, spraying, irrigation support, and harvest operations.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel receipts, tank records, or machine-hour calculations assigned to the represented crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
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

###### Electricity for irrigation and crop management (`management_electricity_input`)

Record electricity used for pumping, fertigation, protected-unit operation, lighting, and other crop-management equipment when it occurs before the declared gate.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum equipment meter or invoice records and allocate shared services by area-time, operating time, water delivered, or another declared physical basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-good-agricultural-practices`
- Range: Management-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kWh per 1,000 kg output
  - Basis: irrigation pumping and in-scope crop-management equipment
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Crop residues returned or removed (`crop_residue_output`)

Record leaves, stems, roots, pods left after final picking, and other crop residues leaving the crop-cycle process, with separate quantities and fates for field return, composting, feed use, treatment, or disposal.

- Selected flow: Green-bean crop residues
- Flow property / unit: Mass / kg wet residue
- Amount rule: Weigh or calculate residues by field or protected unit and document the receiving fate; retain uncollected field residue as a declared residue or loss stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate_records`
- Sources: `fao-good-agricultural-practices`
- Range: Crop-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 10,000
  - Unit: kg wet residue/ha
  - Basis: crop-cycle residue mass before declared fate
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water resource withdrawal (`water_resource_withdrawal`)

Record natural-resource water withdrawn for irrigation or fertigation separately from supplied irrigation water and report the source and return or consumption basis.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Reconcile source-meter or permit records to water delivered to the crop and disclose any return flow or consumption calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Water-withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6,000
  - Unit: m3/ha
  - Basis: crop-cycle natural-resource withdrawal
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Nitrous oxide to air (`nitrous_oxide_emission`)

Record or calculate direct and indirect nitrous oxide emissions attributable to managed nitrogen input and relevant crop residues; retain the declared calculation method and receiving medium.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply one declared emissions method to documented nitrogen input, residue fate, and relevant environmental factors without double counting.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrous-oxide screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 35
  - Unit: kg N2O/ha
  - Basis: nitrogen-managed green-bean crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`ammonia_emission`)

Record or calculate ammonia emissions from nitrogen applications when the declared method and application records support the pathway.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: Apply the declared nitrogen-emission method to documented nitrogen forms, application timing, and environmental conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Ammonia screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg NH3/ha
  - Basis: nitrogen-managed green-bean crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`nitrate_to_water`)

Record or calculate nitrate loss to water when nutrient, soil, drainage, and receiving-medium information supports the pathway.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: Apply the declared nitrogen-loss method to recorded nutrient input, drainage or leaching evidence, and the receiving medium.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg nitrate/ha
  - Basis: nitrogen-managed crop cycle and documented drainage pathway
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate to water (`phosphate_to_water`)

Record or calculate phosphate loss to water when nutrient application, runoff or drainage, soil conditions, and receiving-medium information support the pathway.

- Selected flow: Phosphate emission to water
- Flow property / unit: Mass / kg phosphate
- Amount rule: Apply the declared phosphorus-loss method to recorded nutrient input and documented runoff, drainage, or erosion pathway without assigning an unsupported default emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-good-agricultural-practices`
- Range: Phosphate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg phosphate/ha
  - Basis: phosphorus-managed crop cycle and documented runoff or drainage pathway
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Green-bean harvest and gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Washing water (`washing_water_input`)

Record water used to remove soil and foreign material when washing occurs before the declared gate; keep it separate from irrigation and source withdrawal.

- Selected flow: Process water for washing
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum wash-water meter or batch records and disclose recirculation, treatment, and discharge handling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Sources: `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling`
- Range: Washing-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8
  - Unit: m3 per 1,000 kg output
  - Basis: pre-gate washing of fresh whole green beans
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for cooling, sorting, and packing (`postharvest_electricity_input`)

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
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fresh-produce-handling`
- Range: Post-harvest electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kWh per 1,000 kg output
  - Basis: pre-gate cooling, sorting, and packing
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flexible primary packaging (`flexible_packaging_input`)

Record flexible bags, films, liners, or other flexible primary packaging that crosses the foreground boundary before the declared gate, including material, tare, reuse, and loss information.

- Selected flow: Flexible packaging function
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Record package mass or item count, capacity, tare, reuse cycles, and loss rate for the represented harvest campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_transport_records`
- Sources: `codex-fresh-produce-hygiene`
- Range: Flexible-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg packaging per 1,000 kg output
  - Basis: declared primary packaging at the gate
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carton or box packaging (`carton_packaging_input`)

Record carton, box, tray, or other paper-based primary packaging that crosses the foreground boundary before the declared gate, including material grade, tare, reuse, and loss information.

- Selected flow: Carton and box packaging function
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- Amount rule: Record package mass or item count, capacity, tare, reuse cycles, and loss rate for the represented harvest campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_transport_records`
- Sources: `codex-fresh-produce-hygiene`
- Range: Carton-and-box screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg packaging per 1,000 kg output
  - Basis: declared primary packaging at the gate
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Reusable crate or pallet packaging (`crate_pallet_packaging_input`)

Record reusable crates, pallets, bins, or other rigid handling packaging used before the declared gate, including material, tare, number of uses, return route, and loss rate.

- Selected flow: Pallet and crate packaging function
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Record package mass or item count, capacity, tare, reuse cycles, return route, and loss rate for the represented campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_transport_records`
- Sources: `codex-fresh-produce-hygiene`
- Range: Crate-and-pallet screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg packaging per 1,000 kg output
  - Basis: declared primary handling packaging at the gate
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
- Amount rule: Calculate transported mass times documented distance and state whether return or empty-leg burden is included.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_transport_records`
- Sources: `fao-good-agricultural-practices`
- Range: Pre-gate transport screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: t*km per 1,000 kg output
  - Basis: declared field-to-pack-house or pre-gate route
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh green-bean output (`marketable_green_bean_output`)

Record the accepted fresh whole green-bean pods delivered at the declared farm-gate or pack-house hand-off. The reference amount is normalized to 1,000 kg after all picking rounds and grade decisions are reconciled.

- Selected flow: Fresh whole green beans at the declared gate
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted marketable pods across all picking rounds and normalize the accepted output to the declared 1,000 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `mass-balance-identity`; `usda-snap-bean-standard`
- Range: Marketable-yield screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 20,000
  - Unit: kg marketable pods/ha
  - Basis: complete green-bean crop cycle and harvest campaign
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded green-bean pods for a declared secondary use (`downgraded_green_bean_output`)

Record edible or potentially usable pods that fail the declared primary grade but leave the process for a documented secondary use. Keep the recipient, quality, intended use, and hand-off distinct from waste or field loss.

- Selected flow: Downgraded green-bean pods for documented secondary use
- Flow property / unit: Mass / kg
- Amount rule: Weigh downgraded pods by picking or grading batch and record the recipient and intended use before assigning any co-product treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `usda-snap-bean-standard`; `mass-balance-identity`
- Range: Downgraded-pod screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg downgraded pods per 1,000 kg marketable output
  - Basis: picking and grade reconciliation
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Sorting rejects and trimmings (`sorting_rejects_output`)

Record pods rejected during sorting, trimming, or quality inspection when they do not leave as a documented secondary product. Record their treatment, feed, compost, disposal, or other fate.

- Selected flow: Green-bean sorting rejects and trimmings
- Flow property / unit: Mass / kg wet waste
- Amount rule: Weigh or calculate rejects by batch and retain the treatment or recipient record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `mass-balance-identity`; `usda-snap-bean-standard`
- Range: Sorting-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg wet waste per 1,000 kg output
  - Basis: harvest and pack-house grade reconciliation
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging waste (`packaging_waste_output`)

Record damaged, discarded, or unrecovered packaging generated before the declared gate, separating reusable packaging returned to service from packaging that becomes waste.

- Selected flow: Packaging waste from pre-gate handling
- Flow property / unit: Mass / kg
- Amount rule: Reconcile packaging issued, returned, reused, and discarded for the represented campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_transport_records`
- Sources: `mass-balance-identity`; `codex-fresh-produce-hygiene`
- Range: Packaging-waste screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg packaging waste per 1,000 kg output
  - Basis: pre-gate packing-material reconciliation
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wash-water and wash-solids wastewater (`wash_water_wastewater_output`)

Record wastewater or wash solids discharged or sent to treatment when washing occurs before the declared gate, retaining the water volume, solids mass, treatment route, and receiving hand-off.

- Selected flow: Wastewater and wash solids from green-bean washing
- Flow property / unit: Volume and mass / m3 and kg
- Amount rule: Reconcile wash-water input, recirculation, evaporation, retained solids, and discharged or treated output; record treatment separately when it crosses the boundary.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green-bean output
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_records`
- Sources: `codex-fresh-produce-hygiene`; `mass-balance-identity`
- Range: Wash-wastewater screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8
  - Unit: m3 wastewater per 1,000 kg output
  - Basis: pre-gate washing water balance
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_crop_inputs` | multiple crops or products sharing a field, bed, meter, facility, or transport | Allocate shared inputs using measured crop-specific records where available. If a shared record cannot be separated, use a documented physical basis such as area-time, operating time, water delivered, or mass, and disclose the basis. | `iso-14044-2006` |
| `allocation_downgraded_pods` | downgraded pods and other secondary outputs | Treat downgraded pods as waste or residue unless a recipient, intended use, quality, and hand-off are documented. Apply co-product allocation only when the secondary output has a defined function and the allocation basis is stated. | `iso-14044-2006`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material | supplier lot and planting log | lot, seed or planting-material form, quantity, variety, date, field or bed | transcribe invoices and planting logs; verify lot against planting record | kg, seed, or plant | each planting event | complete crop cycle | each represented field, bed, or protected unit | sum planted viable quantity by crop-cycle unit | lot invoice, planting log, and supervisor check |
| `cp_area_cycle_records` | `crop_establishment` | land occupation | field or facility register | area, unit, crop dates, protected status, prior use | map or register production unit and verify start and end dates | ha and date | each crop cycle | full crop occupation period | each field, bed, or protected unit | multiply area by declared occupation period | field map, lease or facility record, date record |
| `cp_irrigation_records` | `crop_management` | irrigation and withdrawal | meter, permit, or water-balance record | source, meter, application, date, volume, return flow | read meter or reconstruct documented water balance | m3 | each application or daily total | establishment to final picking | each water source and crop unit | sum by crop cycle and separate source withdrawal from delivery | meter calibration, permit, or water-balance check |
| `cp_nutrient_records` | `crop_management` | nutrient inputs and soil emissions | invoice, label, nutrient plan, and application log | product, mass, nutrient fraction, date, method, area, residue fate | reconcile purchases to application records and calculate nutrient equivalents | kg product and kg nutrient | each application | full crop cycle | each crop unit | sum applications assigned to the crop cycle | supplier label, nutrient plan, laboratory, or log review |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | spray and stock record | product, active ingredient, dose, date, area, method | reconcile spray logs with invoices and stock movement | kg product or active ingredient | each application | full crop cycle | each crop unit | sum by product and active ingredient | product label, application log, trained-operator check |
| `cp_energy_records` | `crop_management` | field and post-harvest energy | meter, fuel, or invoice record | carrier, quantity, operation, equipment, date, crop or batch assignment | read meter or reconcile fuel receipts and operating records | kWh, MJ, L, or kg | each operation or billing period | full crop cycle and pre-gate handling | field, facility, and shared equipment | allocate shared use by declared physical basis | meter, receipt, machine-hour, or allocation record |
| `cp_residue_fate_records` | `crop_management` | crop residues | residue and recipient record | stream, wet mass, fate, recipient, date, field | weigh or estimate residue and retain fate evidence | kg wet residue | each removal or crop-cycle close | crop-cycle close and post-harvest cleanup | each crop unit | sum by residue stream and fate | weigh ticket, recipient record, or treatment receipt |
| `cp_harvest_grade_records` | `harvest_and_gate_preparation` | marketable output, downgraded pods, and rejects | harvest and grading record | date, picking round, gross harvest, accepted mass, downgraded mass, rejects, grade, gate | weigh each picking round and reconcile grade outcomes | kg | each picking round | entire harvest campaign | each field, bed, or campaign | sum by crop cycle and declared gate | scale record, grade sheet, and mass-balance check |
| `cp_postharvest_records` | `harvest_and_gate_preparation` | washing, cooling, and wastewater | batch, meter, or equipment record | batch, water, recirculation, cooling time, loss, solids, discharge | read batch or meter record and link to harvest lot | m3, kWh, kg, and h | each batch | all pre-gate handling | pack-house or declared handling site | aggregate by accepted output batch | batch sheet, meter, sanitation, and treatment record |
| `cp_packaging_transport_records` | `harvest_and_gate_preparation` | packaging, packaging waste, and pre-gate transport | packaging issue and dispatch record | material, tare, reuse, item count, mass, distance, vehicle, load | reconcile packaging and dispatch records to accepted harvest lots | kg, item, km, or t*km | each campaign or dispatch | all in-scope pre-gate movements | field, pack-house, and route | sum packaging and transport by declared gate output | package specification, dispatch note, route record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_occupation` | crop establishment | area-time = declared production area × crop occupation period; keep protected structures separate when separately attributed | area, start date, end date, protected status | ha*a or declared area-time | `fao-good-agricultural-practices` |
| `calc_nutrient_equivalents` | nutrient inputs | nutrient mass = formulated product mass × documented nutrient fraction; retain product and nutrient bases separately and de-duplicate compound products | product mass, label or plan concentration | kg N, kg P2O5, and kg K2O | `fao-good-agricultural-practices` |
| `calc_managed_soil_emissions` | nitrogen-related elementary outputs | apply one declared nitrogen-emission method to nutrient inputs, crop residues, and environmental factors; do not duplicate pathways | nutrient input, residue fate, method factors | declared nitrogen emission flows | `ipcc-2019-managed-soils-n2o` |
| `calc_water_balance` | irrigation, withdrawal, washing, and wastewater | reconcile source withdrawal, delivered water, recirculation, evaporation, retained solids, and discharged water; keep irrigation and washing systems separate | meter readings, batch records, return flow, and solids | water-delivery and wastewater values | `fao-crop-evapotranspiration-56`; `mass-balance-identity` |
| `calc_transport_service` | pre-gate road freight | transport service = transported mass (t) × documented distance (km); state whether return or empty-leg burden is included | mass, distance, load, and route record | t*km | `fao-good-agricultural-practices` |
| `calc_reference_normalization` | all inventory rows | normalized value = crop-cycle quantity × 1,000 kg / accepted marketable output at the declared gate | crop-cycle quantity and accepted output mass | quantity per 1,000 kg reference flow | `mass-balance-identity` |
| `calc_mass_reconciliation` | harvest, downgraded pods, rejects, residues, losses, and packaging | gross harvested mass = accepted output + downgraded pods + rejects + field or handling losses + declared residue streams, with measured moisture and tare treatment disclosed | picking, grade, residue, packaging, and loss records | reconciled crop-cycle mass balance | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all flows and product qualifiers | Record semantic identity, physical state, direction, process role, and evidence gap or verified status for every flow; resolve the reference identity before final dataset publication. | flow description, qualifier record, and foreground review |
| `dq_measurement` | quantities and conversions | Use calibrated scales, meters, invoices, logs, or transparent calculations; retain raw values and conversion factors with units. | measurement record and calculation worksheet |
| `dq_temporal` | crop cycle and harvest campaign | Cover the complete declared planting-to-gate period and identify missing picking rounds, exceptional weather, or substituted records. | planting, application, picking, and gate dates |
| `dq_completeness` | boundary inputs and outputs | Provide a value, justified zero, or documented exclusion for planting material, land, water, nutrients, protection, energy, emissions, yield, downgraded pods, rejects, residues, packaging, wastewater, and pre-gate transport when applicable. | completeness checklist and mass-balance review |
| `dq_allocation` | shared meters, fields, facilities, packaging, or transport | State the allocation basis and test its effect when records serve multiple crops, products, or campaigns. | allocation record and sensitivity note |
| `dq_disclosure` | final dataset metadata | Declare variety group, geography, route, planting and picking dates, crop cycle, gate, yield and grade, irrigation and nutrient bases, crop protection, residue and reject fates, packaging, washing, wastewater, pre-gate transport, and any identity evidence gap. | dataset metadata and reference-flow comment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_definition` | reference flow | Confirm the 1,000 kg functional unit, all required qualifiers, and the verified reference product, mass property, and unit-group identities before foreground generation. | `mass-balance-identity` |
| `validation_flow_set_binding` | parameterized product inputs | Resolve each parameterized row during foreground data generation using the cited Flow Set id, version, group, structural coordinate, property, unit, geography, and intended-use evidence; do not treat a Flow Set as a final UUID. |  |
| `validation_mass_reconciliation` | harvest and gate preparation | Check accepted output, downgraded pods, rejects, residues, field losses, handling losses, wastewater, and packaging waste against the declared mass and water bases, with container tare and moisture treatment explicit. | `mass-balance-identity` |
| `validation_boundary_disclosure` | system boundary | Reject a dataset that omits the declared gate, crop cycle, route, irrigation source, nutrient basis, residue and reject fate, or pre-gate handling included by the scope. | `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene` |
| `validation_soil_emissions` | managed nutrients and residues | Verify that one declared emissions method is used and that direct and indirect nitrogen pathways are not double counted. | `ipcc-2019-managed-soils-n2o` |
| `validation_data_quality` | all foreground records | Report identity, measurement, temporal coverage, completeness, allocation, and disclosure findings separately; inconclusive or error findings fail validation by default. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground primary dataset for fresh whole green-bean production at the declared farm-gate or pack-house gate; usable downstream as `secondary_dataset` after review |
| downstream_use | Build process and lifecycle-model foreground inventories for fresh green beans and compare declared crop-cycle routes with disclosed qualifiers |
| allowed_use | Product-category studies that preserve the declared crop cycle, route, gate, maturity and grade state, input bases, emission method, and mass and water reconciliation |
| excluded_use | Direct substitution for dry beans, seed or sprout production, processed green beans, retail or consumer stages, undisclosed protected infrastructure, or crops with materially different product and gate conditions |
| required_metadata | PCR id and version; variety group; geography; route; planting and picking dates; crop cycle; declared gate; yield and grade; irrigation and nutrient basis; crop protection; residue, downgraded, and reject fates; washing and wastewater; packaging; pre-gate transport; reference product qualifiers |
| required_quality_disclosure | Measurement sources, missing or estimated fields, allocation basis, crop-cycle completeness, mass-balance result, water balance, emission method, Flow Set resolutions, and identity evidence gap findings |
| update_trigger | New cultivation or protected-production route, material change in gate conditioning or packaging, revised emission method, changed product qualifiers, or evidence that alters the default collection and validation rules |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration — https://www.fao.org/4/X0490E/X0490E00.htm | irrigation scheduling, water-balance context, and water-withdrawal records |
| `fao-good-agricultural-practices` | official_guidance | FAO, Production practices to increase yield, quality and safety of fruits and vegetables — https://www.fao.org/family-farming/detail/en/c/1682483/ | crop-cycle decomposition, nutrient and crop-protection records, field operations, and boundary context |
| `fao-fresh-produce-handling` | official_guidance | FAO, Manual for the preparation and sale of fruits and vegetables — https://www.fao.org/4/y4893e/y4893e0a.htm | agricultural water, harvest, handling, sanitation, and post-harvest process context |
| `usda-snap-bean-standard` | official_guidance | USDA Agricultural Marketing Service, Snap Beans for Processing Grades and Standards — https://www.ams.usda.gov/grades-standards/snap-beans-processing-grades-and-standards | green-bean product identity, maturity, tenderness, defect, grade, and harvest-quality qualifiers |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables (CXC 53-2003) — https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+53-2003%2FCXC_053e.pdf | water quality, washing, packing, hygiene, and pre-gate handling requirements |
| `ipcc-2019-managed-soils-n2o` | method_factor | 2019 IPCC Refinement, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application — https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil nitrogen-emission calculation and validation |
| `iso-14044-2006` | standard | ISO 14044, Environmental management — Life cycle assessment — Requirements and guidelines — https://www.iso.org/standard/38498.html | allocation and data-quality validation rules |
| `mass-balance-identity` | method_factor | Declared crop-cycle, grade, water, residue, and packaging mass-balance reconciliation method | normalization, loss, cull, reject, residue, wastewater, and packaging checks |
