---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lettuce-and-chicory
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Lettuce and chicory

## 1. Scope and Applicability

This PCR covers foreground production of fresh, unprocessed lettuce and chicory from seed or transplant establishment through crop management, harvest, grading, optional washing or cooling, primary packaging, and hand-off at the declared farm or first packing-site gate. It applies to open-field and protected cultivation when the route and covered area are declared. It includes marketable heads, leaves, and leafy bunches sold as fresh produce. Seed production, nursery production of planting material for sale, processed or preserved products, distribution after the declared gate, retail, cooking, and consumption are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lettuce-and-chicory |
| classification_refs | CPC 3.0:01214 Lettuce and chicory |
| covered_products | Fresh, unprocessed lettuce and chicory heads, leaves, or bunches transferred at the declared farm or first packing-site gate |
| excluded_products | Seed and transplants sold as planting material, processed, frozen, dried, fermented, or cooked products, and post-gate distribution |
| representative_product | Marketable fresh lettuce or chicory, harvested, graded, and in the declared washed or unwashed state |
| production_route | Seed or transplant establishment, managed leafy-crop cultivation, harvest, grading, optional washing or cooling, and farm-gate hand-off |
| market_state | Fresh produce at the declared gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh lettuce or chicory at the declared farm or first packing-site gate |
| How much | 1,000 kg |
| How well | Fresh, unprocessed, saleable produce with declared crop identity, cultivar or type, head or leaf state, grade, trim, and washed or unwashed state |
| How long or cycle | One declared crop cycle and harvest campaign, including all establishment and management activity allocated to the marketable output |
| reference_flow_link | lettuce_chicory_farm_gate_output |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Lettuce and chicory `29988c8e-6b2f-4e7d-a24e-76ced274d2ce` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | crop identity (lettuce or chicory); cultivar or market type; production geography; crop cycle and production year; open-field or protected route; head, leaf, or bunch state; grade and size; trimming; washed or unwashed state; cooling; packaging; declared gate |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvested and gate output | Mass | kg | Keep gross harvested mass, marketable output, trim, rejects, and field residue as separate quantities. |
| `area_and_cycle_normalization` | crop establishment and management | Area and mass | ha and kg | Record each field or protected unit and crop cycle before normalizing inputs and outputs to corresponding marketable product. |
| `nutrient_equivalent_basis` | fertilizer inputs | Mass | kg N, kg P2O5, or kg K2O | Record product mass and declared nutrient concentration, and preserve the nutrient-equivalent basis used for modelling. |
| `irrigation_volume` | irrigation and water withdrawal | Volume | m3 | Meter or document delivered irrigation separately from precipitation and distinguish source withdrawal from water delivered to the crop. |
| `multiple_harvest_reconciliation` | successive harvests | Mass | kg | Aggregate harvest lots only after linking them to the same field or protected unit, cycle, grade, and declared gate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field, bed, or protected growing unit receiving seed or transplant material, with prior land use and excluded pre-establishment work disclosed |
| starting_condition_role | Beginning of the declared lettuce or chicory crop cycle |
| product_classification_scope | Fresh lettuce and chicory under CPC 3.0:01214 through the declared farm or first packing-site gate |
| recursive_input_rule | Purchased lettuce or chicory seed and transplants are upstream product inputs linked once; they are not recreated as an additional crop cycle inside this PCR. |
| upstream_dataset_requirement | Require compatible upstream datasets for seed or transplants, fertilizers and amendments, crop-protection products, irrigation water, energy, packaging, and waste treatment when used. |
| disclosure | Declare crop identity and type, cultivar, geography, cycle dates, field or protected route, area, irrigation source and method, nutrient basis, crop-protection programme, harvest and grade, washing, cooling, packaging, reject destination, and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and crop management | Include inputs and direct field or protected-cultivation emissions from establishment through the represented harvest campaign, and allocate them to marketable output from the same declared cycle. | `fao-vegetable-production-guidance` |
| `boundary_declared_gate` | harvest and handling | End at the declared farm or first packing-site gate; include grading, trimming, washing, cooling, and primary packaging only when they occur before that hand-off. | `usda-leafy-greens-guidance` |
| `boundary_soil_emissions` | managed soil and residues | Apply one declared method to nitrogen emissions and avoid double counting fertilizer, amendment, and returned-residue nitrogen. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | field residue and rejects | Record field residue and postharvest rejects by destination; an unspecified reject or residue is not a co-product. | `fao-vegetable-production-guidance` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Lettuce and chicory crop establishment | required | every represented crop cycle | foreground establishment | established hectare or protected growing unit |
| `crop_management` | Lettuce and chicory crop management | required | every represented crop cycle | foreground managed biological production | field or protected-unit cycle and crop output |
| `harvest_and_gate_handling` | Harvest and gate handling | required | every represented harvest campaign | foreground harvest, packing, and hand-off | 1,000 kg marketable fresh output |

### Process: Lettuce and chicory crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Seed or transplant material (`planting_material_input`)

Record seed, plug, or transplant material entering the declared field or protected unit. Identify the material type and avoid treating planting material as marketable lettuce or chicory output.

- Selected flow: Lettuce or chicory seed, plug, or transplant material
- Flow property / unit: Number of items or mass / seed, plant, or kg
- Amount rule: Count or weigh planting material by crop type and field or protected unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established hectare or protected unit, then per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Range: Provisional planting-material screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 50
  - Unit: kg seed or transplant material/1,000 kg marketable output
  - Basis: broad first-pass planting-material quantity pending supplier and planting records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`crop_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established hectare or protected unit, then per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources:
- Range: Provisional establishment-nitrogen screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 250
  - Unit: kg N/ha or protected-unit cycle
  - Basis: broad first-pass establishment range pending soil test and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional establishment-phosphorus screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 250
  - Unit: kg P2O5/ha or protected-unit cycle
  - Basis: broad first-pass establishment range pending soil test and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional establishment-potassium screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 400
  - Unit: kg K2O/ha or protected-unit cycle
  - Basis: broad first-pass establishment range pending soil test and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Land occupation for lettuce or chicory production (`land_occupation_input`)

Record occupied field or protected growing area for the declared crop cycle and route.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Record occupied area and cycle duration; preserve open-field or protected route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Range: Land-area screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 10,000
  - Unit: m2*a/1,000 kg marketable output
  - Basis: broad productive-area interval pending field and yield records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Established lettuce or chicory crop (`established_crop_output`)

This internal hand-off represents accepted established plants or area entering managed crop production and is reconciled to the same cycle.

- Selected flow: Established lettuce or chicory crop
- Flow property / unit: Number of plants or area / plant or ha
- Amount rule: Record accepted established plants or area after establishment losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Range: Provisional established-plant or area screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1,000
  - Upper: 500,000
  - Unit: plants/ha or protected-unit cycle
  - Basis: broad first-pass established crop quantity pending planting density and acceptance records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Establishment losses and discarded planting material (`establishment_loss_output`)

Record failed germination, dead transplants, and discarded planting material separately when they leave the establishment process.

- Selected flow: Establishment losses and discarded planting material
- Flow property / unit: Mass / kg fresh material
- Amount rule: Measure or estimate losses and declare field return, composting, treatment, or disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Range: Provisional establishment-loss screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 300
  - Unit: kg fresh material/1,000 kg marketable output
  - Basis: broad first-pass loss range pending establishment records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Lettuce and chicory crop management (`crop_management`)

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
- Normalization basis: per field or protected-unit cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_management_records`
- Sources:
- Range: Provisional crop-cycle nitrogen screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg N/ha or protected-unit cycle
  - Basis: broad first-pass range pending soil tests and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional crop-cycle phosphorus screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg P2O5/ha or protected-unit cycle
  - Basis: broad first-pass range pending soil tests and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional crop-cycle potassium screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 800
  - Unit: kg K2O/ha or protected-unit cycle
  - Basis: broad first-pass range pending soil tests and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-cycle irrigation water (`crop_irrigation_water`)

Record water delivered to the crop by source and irrigation technology, excluding rainfall unless the study explicitly models it as a withdrawal.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter or document delivered irrigation by field or protected unit and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per field or protected-unit cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_management_records`
- Range: Provisional irrigation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 15,000
  - Unit: m3/ha or protected-unit cycle
  - Basis: broad first-pass interval dependent on climate, soil, crop route, and irrigation technology
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field and protected-unit electricity (`crop_electricity_input`)

Record electricity for irrigation, ventilation, lighting, or other crop management and avoid counting the same meter allocation twice.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter or allocate electricity to the represented field or protected unit and cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per field or protected-unit cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_management_records`
- Range: Provisional crop-management electricity screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20,000
  - Unit: kWh/ha or protected-unit cycle
  - Basis: broad first-pass interval covering field pumping and protected-cultivation equipment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_input`)

Record crop-protection products by active substance or product identity, application rate, and treated area. Identity remains an explicit coverage requirement until a compatible fixed identity is verified.

- Selected flow: Crop-protection product or active substance
- Flow property / unit: Mass / kg product or kg active substance
- Amount rule: Reconcile purchase, stock, application, treated area, and product label concentration for the represented cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per field or protected-unit cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_management_records`
- Range: Provisional crop-protection screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg product/ha or protected-unit cycle
  - Basis: broad first-pass interval pending product and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Irrigation water resource withdrawal (`irrigation_withdrawal`)

Record water-source withdrawal associated with irrigation when it is outside the purchased-water product input and material to the study.

- Selected flow: Water resource withdrawal for irrigation
- Flow property / unit: Volume / m3
- Amount rule: Record source withdrawal and reconcile it to delivered irrigation and return or loss where measured.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per field or protected-unit cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_management_records`
- Range: Irrigation-withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15,000
  - Unit: m3/ha or protected-unit cycle
  - Basis: non-negative first-pass interval pending source-meter records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvest-ready lettuce or chicory (`harvest_ready_crop_output`)

Record gross harvested produce before final grading and trimming, linked to field or protected-unit cycle and harvest lot.

- Selected flow: Harvest-ready lettuce or chicory
- Flow property / unit: Mass / kg fresh produce
- Amount rule: Reconcile gross harvested mass and measured field losses before gate handling.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per field or protected-unit cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional harvest-yield screen
  - Range role: Typical range (`typical_range`)
  - Lower: 1,000
  - Upper: 120,000
  - Unit: kg fresh produce/ha or protected-unit cycle
  - Basis: broad first-pass yield interval across leafy crop types and routes
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residue and unharvested leafy biomass (`field_residue_output`)

Record leaves, roots, unharvested plants, and other crop residue by dry-matter or fresh-mass basis and destination.

- Selected flow: Lettuce or chicory field residue and unharvested biomass
- Flow property / unit: Mass / kg fresh or dry matter
- Amount rule: Measure or estimate residue and declare incorporation, removal, feed, composting, treatment, or disposal.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per field or protected-unit cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_management_records`
- Range: Provisional field-residue screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 30,000
  - Unit: kg fresh biomass/ha or protected-unit cycle
  - Basis: broad first-pass residue interval pending biomass and destination records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_n2o_air_output`)

Calculate direct nitrous oxide from declared nitrogen inputs and applicable soil or protected-growing-medium activity data.

- Selected flow: Nitrous oxide to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the declared IPCC or accepted regional method, preserve N2O-N to N2O conversion, and avoid double counting returned residue nitrogen.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1,000 kg marketable output; nitrogen activity remains the calculation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_management_records`
- Range: Managed-soil N2O screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg N2O/ha or protected-unit cycle
  - Basis: non-negative first-pass interval pending nitrogen activity and factor selection
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate released to water (`nitrate_water_output`)

Report nitrate loss to water when drainage, runoff, or discharge records and the chosen emission method support it.

- Selected flow: Nitrate to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: Calculate or measure nitrate loss using the declared method and document the receiving water and pathway.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_management_records`
- Range: Provisional nitrate-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg nitrate/1,000 kg marketable output
  - Basis: non-negative first-pass interval pending drainage and nutrient-balance records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and gate handling (`harvest_and_gate_handling`)

#### Inputs

##### Product flows

###### Harvest-ready lettuce or chicory (`harvest_ready_crop_input`)

Use the crop-management hand-off as the input to grading, trimming, optional washing or cooling, and the declared gate.

- Selected flow: Harvest-ready lettuce or chicory
- Flow property / unit: Mass / kg fresh produce
- Amount rule: Equal the corresponding harvest-ready output before measured handling losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional harvest-ready input screen
  - Range role: Typical range (`typical_range`)
  - Lower: 1,000
  - Upper: 120,000
  - Unit: kg fresh produce/ha or protected-unit cycle
  - Basis: broad first-pass harvest-ready input interval across leafy crop types and routes
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Washing or cooling water (`handling_water_input`)

Include make-up water used before the declared gate and record recirculation or discharge separately where relevant.

- Selected flow: Process water for washing or cooling
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter make-up water and retain the wash or cooling discharge linkage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Range: Provisional handling-water screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/1,000 kg marketable output
  - Basis: broad first-pass make-up-water interval pending line meters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary flexible packaging (`flexible_packaging_input`)

Record bags, film, sleeves, bands, or other flexible packaging issued to the declared gate output by material.

- Selected flow: Flexible primary packaging for fresh lettuce or chicory
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Measure packaging issued to transferred product and identify returnable items separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Range: Provisional flexible-packaging screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg marketable output
  - Basis: broad first-pass packaging interval pending material and issue records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary rigid containers or crates (`rigid_packaging_input`)

Record trays, cartons, crates, and other rigid containers, including return cycles and losses.

- Selected flow: Rigid primary container or crate for fresh lettuce or chicory
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- Amount rule: Measure containers issued to transferred product and record returnable-container turns separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Range: Provisional rigid-packaging screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 150
  - Unit: kg/1,000 kg marketable output
  - Basis: broad first-pass container interval pending material and return-cycle records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wash or grading wastewater (`handling_wastewater_output`)

Record wastewater or contaminated wash water leaving the handling process when washing or cooling occurs before the declared gate.

- Selected flow: Wastewater from lettuce or chicory handling
- Flow property / unit: Volume / m3
- Amount rule: Measure discharge or calculate it from make-up water, recirculation, product moisture, and retained losses; declare treatment route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handling_records`
- Range: Provisional wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/1,000 kg marketable output
  - Basis: non-negative first-pass interval pending discharge and treatment records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rejected and trimmed fresh produce (`reject_trim_output`)

Record rejected heads, leaves, roots, and trimming by reason and destination. Treat them as waste unless a documented buyer and product specification establish a co-product.

- Selected flow: Rejected and trimmed lettuce or chicory material
- Flow property / unit: Mass / kg fresh material
- Amount rule: Measure reject and trim mass and declare field return, feed, composting, treatment, or disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Range: Provisional reject and trim screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg/1,000 kg marketable output
  - Basis: broad first-pass grading and trimming interval pending lot records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh lettuce or chicory at declared gate (`lettuce_chicory_farm_gate_output`)

This reference output is fresh, unprocessed, graded lettuce or chicory transferred at the declared farm or first packing-site gate.

- Selected flow: Lettuce and chicory `29988c8e-6b2f-4e7d-a24e-76ced274d2ce`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Verified scale mass after excluding measured field, trim, and reject losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg marketable fresh output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handling_records`
- Range: Provisional marketable-output reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 900
  - Upper: 1,100
  - Unit: kg/1,000 kg declared gate output
  - Basis: broad first-pass scale and lot-reconciliation interval around the declared reference amount
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_cycle_inputs` | crop establishment and management | Allocate cycle inputs and direct emissions to marketable output from the same field or protected unit and declared cycle; disclose failed area, reseeding, and multi-harvest treatment. | `fao-vegetable-production-guidance` |
| `allocation_marketable_and_rejects` | harvest and handling | Reconcile harvest-ready input to marketable output, rejects, trims, and measured mass change; treat rejects as waste unless a documented product specification, buyer, quantity, and destination establish a co-product. | `usda-leafy-greens-guidance` |
| `allocation_secondary_output` | intentional secondary products | For a documented secondary product, report quantity and hand-off and apply a justified allocation or substitution method; no default avoided burden or economic allocation is assumed. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material, area, establishment nutrients, and losses | seed or transplant purchase, planting, field map, and acceptance records | field_or_unit_id; crop_type; cultivar; date; material_type; quantity; treated_area; accepted_area; failed_area; nutrient_product; product_mass; nutrient_concentration; loss_mass; loss_destination | reconcile planting and establishment records to each field or protected unit | seed; plant; kg; ha | each establishment event | complete establishment window | every represented field or protected unit | sum by crop cycle and preserve failures and reseeding | supplier invoices, labels, field maps, and acceptance records |
| `cp_crop_management_records` | `crop_management` | nutrients, irrigation, electricity, crop protection, withdrawal, residue, and emissions activity | application, meter, irrigation, crop-protection, and field log records | field_or_unit_id; crop_type; cycle_id; area; date; product_identity; product_mass; nutrient_concentration; irrigation_volume; source_withdrawal; electricity; active_substance; treated_area; residue_mass; dry_matter; residue_destination; drainage; nitrate; method_version | reconcile all activity records to the same cycle and route | kg; kg nutrient; m3; kWh; ha | each event and cycle close | full crop cycle | every represented field or protected unit | sum by field or unit cycle before output normalization | invoices, labels, meters, application logs, analyses, and method records |
| `cp_harvest_records` | `harvest_and_gate_handling` | harvest-ready produce and harvest loss | harvest ticket, lot log, and scale record | field_or_unit_id; cycle_id; lot_id; harvest_date; harvest_pass; gross_mass; field_loss; crop_type; grade; size; trim_state | link each harvest lot to its field or protected unit and cycle | kg; ha | each harvest lot | complete harvest campaign | every represented field or handling line | sum by cycle and preserve crop type and grade | calibrated scales and harvest tickets |
| `cp_handling_records` | `harvest_and_gate_handling` | water, packaging, output, wastewater, rejects, and trims | lot, scale, water-meter, packaging, wastewater, and destination records | lot_id; source_field_or_unit; crop_type; wash_water; cooling_water; packaging_material; packaging_mass; container_turns; marketable_mass; grade; trim_state; reject_mass; reject_reason; destination; wastewater_volume; gate_time | preserve lot-level mass and utility reconciliation through the declared gate | kg; m3; kWh; item | each lot or shift | complete harvest and packing period | every represented handling line | reconcile input, product, wastewater, rejects, trims, and packaging before aggregation | calibrated scales, meters, grade inspection, and destination receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_equivalent` | fertilizer inputs | Product mass multiplied by documented nutrient fraction equals kg N, P2O5, or K2O on the declared basis. | product mass; nutrient concentration | nutrient-equivalent input |  |
| `calc_cycle_normalization` | crop-cycle inputs and emissions | Divide complete field or protected-unit cycle quantities by marketable output from the corresponding cycle, then express the result per 1,000 kg reference product. | cycle quantity; marketable output | normalized inventory amount |  |
| `calc_water_and_withdrawal` | irrigation | Preserve delivered irrigation and source withdrawal as separate quantities; reconcile them where measured and disclose unmeasured losses. | delivery meter; source meter; return or loss record | irrigation input and withdrawal | `fao-vegetable-production-guidance` |
| `calc_harvest_mass_balance` | harvest and gate handling | Gross harvest plus measured mass change equals marketable output plus rejects, trims, wastewater-associated losses, and other declared outputs. | gross mass; marketable mass; rejects; trims; water; mass change | reconciled output quantities | `usda-leafy-greens-guidance` |
| `calc_managed_soil_emissions` | nitrogen emissions | Apply the declared IPCC or accepted regional equations to nitrogen activity and preserve N2O-N to N2O conversion without double counting. | nitrogen activity; factors; soil or growing-medium qualifiers | direct and indirect nitrogen emissions | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve lettuce or chicory identity, cultivar or market type, head or leaf state, grade, trim, wash state, packaging, geography, cycle, and gate. | product specification, lot records, and gate declaration |
| `dq_cycle_linkage` | establishment and management | Link every activity to one field or protected unit and cycle and disclose reseeding, failed area, multiple harvests, and route changes. | field map, cycle register, and production history |
| `dq_input_completeness` | all foreground inputs | Preserve nutrient basis, irrigation source, energy coverage, crop-protection identity, packaging material, and residue or reject destination. | invoices, labels, meters, application logs, and destination receipts |
| `dq_mass_balance` | harvest and handling | Reconcile harvest-ready input, marketable output, rejects, trims, wastewater, and measured mass change within declared uncertainty. | calibrated scales, meters, and lot reconciliation |
| `dq_method_transparency` | calculations and emissions | Record method version, factors, normalization denominator, exclusions, provisional ranges, and replacement of estimates with reviewed evidence. | calculation file and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference product | Resolve a compatible lettuce or chicory identity, mass property, mass unit group, kg, and all required qualifiers before publishing a final process dataset. |  |
| `validation_cycle_handoffs` | process map | Link establishment to crop management and management to harvest handling for every represented field or protected unit and cycle. |  |
| `validation_mass_balance` | harvest and handling | Reconcile harvest-ready input, marketable output, rejects, trims, wastewater, and other declared losses. |  |
| `validation_nutrient_and_emission_basis` | management inputs and emissions | Keep N, P2O5, and K2O distinct, document emission factors and receiving pathways, and prevent returned-residue nitrogen double counting. | `ipcc-2019-managed-soils` |
| `validation_parameterized_flows` | parameterized rows | Resolve each Flow Set group to a compatible concrete UUID before publishing a final process dataset. |  |
| `validation_unmapped_flows` | unmapped rows | Seed or transplant material, crop-protection products, internal crop states, rejects, and any evidence gap reference identity remain explicit coverage requirements until compatible identities are supplied. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh lettuce and chicory at the declared gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Fresh lettuce or chicory crop and supply-chain studies with compatible crop identity, geography, route, cycle, product state, and gate |
| excluded_use | Seed or transplant production, processed products, post-gate distribution, or comparisons that omit declared route and crop-cycle conditions |
| required_metadata | crop identity; cultivar or market type; geography; area; route; cycle dates; field or protected unit; irrigation; nutrient basis; crop protection; harvest and grade; wash or cooling; packaging; residue and reject fate; gate |
| required_quality_disclosure | primary-data coverage; scale and meter quality; cycle linkage; mass balance; method and factor versions; data gaps; provisional ranges; Flow Set resolutions; unmapped identities |
| update_trigger | verified product or flow identity, reviewed yield or input evidence, crop route or product specification change, emission-method change, or revised gate practice |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-vegetable-production-guidance` | official_guidance | FAO, Good Agricultural Practices for greenhouse and field vegetable production, https://www.fao.org | crop-cycle boundary, field records, residue handling, and vegetable production route |
| `usda-leafy-greens-guidance` | official_guidance | U.S. FDA, Guidance for Industry: Guide to Minimize Microbial Food Safety Hazards of Fresh-cut Fruits and Vegetables, https://www.fda.gov | fresh leafy-produce handling, grading, washing, and declared gate controls |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil nitrogen emission method and N2O conversion |
