---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cucumbers-and-gherkins
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cucumbers and gherkins

## 1. Scope and Applicability

This PCR guides foreground data-package construction for fresh, unprocessed cucumbers and gherkins from crop establishment through the declared farm-gate or pack-house hand-off. It covers open-field and protected cultivation, direct seeding or transplanting, trellising where used, irrigation, nutrient and crop-protection management, harvest, sorting, washing, cooling, and primary packing when those operations occur before the declared gate. The data package must identify whether the crop is a slicing cucumber, pickling cucumber, or gherkin and must keep materially different routes distinguishable.

Seed production, nursery production of planting material, pickling, fermentation, canning, cutting, prepared salads, distribution after the declared gate, retail, consumer storage, and consumption are outside the default boundary. Protected structures and durable irrigation or trellis infrastructure are excluded from the crop-cycle inventory unless the dataset explicitly adopts a separate infrastructure attribution rule. Crop residues and downgraded fruit remain in the foreground when they are returned to soil, sent to feed or compost, treated, or discarded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cucumbers-and-gherkins |
| classification_refs | CPC 3.0: 01232 Cucumbers and gherkins |
| covered_products | Fresh whole cucumbers and gherkins, including slicing and pickling types, delivered in the declared maturity, grade, washing, cooling, and packaging state |
| excluded_products | Seed, transplants, nursery outputs, pickled or fermented cucumbers, canned products, cut vegetables, prepared salads, retail services, and post-gate transport or storage |
| representative_product | Marketable fresh cucumber or gherkin meeting the declared size, maturity, firmness, cleanliness, defect, and grade requirements |
| production_route | Seeded or transplanted open-field or protected cultivation, managed vine growth, irrigation and nutrient application, crop protection, repeated harvest, grading, optional washing and cooling, and primary packing |
| market_state | Fresh and unprocessed whole fruit at the declared farm-gate or pack-house gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh cucumber or gherkin at the declared farm-gate or pack-house hand-off |
| How much | 1,000 kg |
| How well | Fresh, whole, and unprocessed fruit with declared crop type, maturity, size, grade, firmness, cleanliness, defect tolerance, moisture state, and packaging state |
| How long or cycle | One declared crop cycle and harvest campaign; all harvest rounds attributable to the same planting are reconciled before normalization |
| reference_flow_link | `cucumber_or_gherkin_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh cucumber or gherkin at farm gate `7b96f91c-8055-431e-8b7d-f24fd4e6d17e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | crop type (slicing cucumber, pickling cucumber, or gherkin); cultivar or variety group; production geography; open-field or protected route; planting and harvest dates; harvest round; fruit maturity and size; grade and defect criteria; irrigated or rain-fed status; washing and cooling state; packaging state; declared gate |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_cucumber_mass` | reference fruit, harvest, rejects, and residues | Mass | kg | Weigh harvested, marketable, downgraded, rejected, and residue streams separately and reconcile them before converting the inventory to the 1,000 kg reference output. |
| `crop_type_separation` | slicing cucumbers, pickling cucumbers, and gherkins | Product identity | declared crop type | Keep crop types separate where variety, harvest frequency, grade, price, or input regime differs; combine them only after each crop-cycle inventory is reconciled and the aggregation rule is recorded. |
| `nutrient_product_basis` | mineral and organic nutrient inputs | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | Record formulated product mass and documented nutrient concentration separately. Convert nutrient equivalents only from a supplier specification, label, soil plan, or laboratory result. |
| `water_delivery_basis` | irrigation, fertigation, washing, and source withdrawal | Volume | m3 | Record crop irrigation, fertigation carrier water, washing water, and source withdrawal as distinct quantities and disclose the meter or water-balance basis. |
| `area_time_basis` | field beds and protected cultivation units | Area-time | m2*a | Record occupied production area and crop occupation period; durable protected structures and long-lived trellis assets require a separate declared attribution if they are included. |
| `postharvest_mass_change` | washing, cooling, and packing | Mass and moisture | kg and percent | Retain measured water gain or loss during primary handling separately from harvested crop mass. Do not treat wash water uptake or cooling loss as yield without a documented mass reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field bed or protected cultivation unit receiving cucumber or gherkin seed or transplant material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared cucumber or gherkin crop cycle and foreground input accounting |
| product_classification_scope | Fresh cucumbers and gherkins classified under CPC 3.0:01232 through the declared farm-gate or pack-house hand-off |
| recursive_input_rule | Seed, transplants, and other same-category planting materials are recorded at their received hand-off state and linked to an upstream dataset; their own production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for seed or transplants, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, and purchased transport or treatment services when those inputs cross the boundary. |
| disclosure | Declare crop type, cultivar group, geography, route, planting density, crop-cycle dates, irrigation source and method, nutrient basis, crop-protection program, trellis or protected route, harvest rounds, grade, yield, reject and residue fates, primary handling, packaging, and gate state. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and cultivation | Include field or protected-bed preparation attributable to the declared crop cycle, planting, vine management, irrigation, nutrient and crop protection, and direct crop emissions; disclose prior land use and exclude unrelated infrastructure construction. | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_repeated_harvest` | harvest rounds | Attribute every harvest round from the planting campaign to the same crop cycle and reconcile marketable fruit, downgraded fruit, field losses, and residues before normalizing. | `fao-cucumber-production-guide`; `usda-ams-cucumber-standard` |
| `boundary_gate_preparation` | sorting, washing, cooling, and packing | End the default foreground boundary at the declared farm-gate or pack-house gate. Include sorting, washing, cooling, and primary packaging only when they occur before that gate. | `usda-ams-cucumber-standard`; `usda-ams-pickling-cucumber-standard` |
| `boundary_residue_fate` | vines, leaves, rejected fruit, and trim | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. Do not assign a co-product credit without a documented recipient and intended use. | `iso-14044-2006`; `fao-cucumber-production-guide` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Cucumber and gherkin crop establishment | required | every represented planting, bed, or protected-cultivation unit | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | Vine and crop management | required | each represented crop cycle | foreground managed biological production | crop area, irrigation, nutrient applications, protection, and harvest campaign |
| `harvest_and_gate_preparation` | Harvest and farm-gate preparation | required | each represented harvest campaign | foreground harvest, grading, conditioning, and hand-off | 1,000 kg marketable fresh output |

### Process: Cucumber and gherkin crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Seed or transplant planting material (`planting_material_input`)

Seed or transplants cross the boundary when accepted for establishment in the declared field, bed, or protected unit. The record identifies crop type and planting material form.

- Selected flow: Cucumber or gherkin seed or transplant material
- Flow property / unit: Mass or viable count / kg seed or plant
- Amount rule: Record supplier lot, seed mass or viable plant count, planting date, crop type, and unused or failed planting material by production unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh cucumber or gherkin output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_planting_records`
- Sources: `fao-cucumber-production-guide`
- Range: Planting-material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 8
  - Unit: kg seed or 2,500 plants per 1,000 kg output
  - Basis: declared planted area and crop-cycle output
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
- Normalization basis: per 1,000 kg marketable fresh cucumber or gherkin output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-cucumber-production-guide`
- Range: Establishment nutrient screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg product/ha
  - Basis: preplant or starter application to the represented production unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Record water applied for bed preparation, seed emergence, or transplant establishment by source and production unit.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries during establishment, excluding rainfall.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh cucumber or gherkin output
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
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Occupied crop production area (`crop_land_occupation`)

Record the area and time occupied by the field bed or protected cultivation unit for the declared planting campaign.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Multiply declared production area by the crop occupation period and state whether protected structures are excluded or separately attributed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh cucumber or gherkin output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_area_and_cycle_records`
- Sources: `fao-cucumber-production-guide`
- Range: Area-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.3
  - Unit: ha per 1,000 kg output
  - Basis: declared crop area and marketable crop-cycle output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Vine and crop management (`crop_management`)

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
- Normalization basis: per 1,000 kg marketable fresh cucumber or gherkin output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-cucumber-production-guide`
- Range: Crop-cycle nitrogen screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 350
  - Unit: kg N/ha
  - Basis: total nutrient application to the represented crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop-cycle phosphorus screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 220
  - Unit: kg P2O5/ha
  - Basis: soil-test-supported nutrient application
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop-cycle potassium screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 550
  - Unit: kg K2O/ha
  - Basis: soil-test-supported nutrient application
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water during vine growth (`crop_irrigation_water`)

Record water delivered during vine growth and fruit set by source, field or protected unit, and irrigation event or meter period.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries and retain fertigation carrier water within the irrigation record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh cucumber or gherkin output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Crop-cycle irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 400
  - Upper: 2,000
  - Unit: m3/ha
  - Basis: delivered irrigation from establishment through final harvest
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_input`)

Record each herbicide, insecticide, fungicide, biological control, or adjuvant application by formulation and active ingredient where available.

- Selected flow: Crop-protection product
- Flow property / unit: Mass / kg formulated product
- Amount rule: Reconcile supplier records, spray logs, stock changes, application rate, and treated area for each crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh cucumber or gherkin output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-cucumber-production-guide`
- Range: Crop-protection screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 45
  - Unit: kg formulated product/ha
  - Basis: all crop-protection applications in the represented crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel for field and protected cultivation (`field_energy_input`)

Record fuel or electricity used for bed preparation, cultivation, fertigation, spraying, pumping, trellis operations, and crop maintenance. Long-lived infrastructure is handled through separate disclosure.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or volume / MJ or L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Use fuel invoices, equipment logs, pump meters, or contractor records and allocate shared operations to the crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh cucumber or gherkin output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `fao-cucumber-production-guide`
- Range: Crop-management energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,200
  - Unit: MJ or kWh/ha
  - Basis: field and protected-cultivation operations during the crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Harvestable cucumber and gherkin fruit (`harvested_crop_output`)

Record fruit removed from the crop during each harvest round before grading and farm-gate preparation.

- Selected flow: Harvested cucumber or gherkin fruit before grading
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Use harvest tickets or calibrated scales for every represented harvest round and crop type.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_reconciliation`
- Sources: `fao-cucumber-production-guide`; `usda-ams-cucumber-standard`
- Range: Harvested-fruit screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 1,700
  - Unit: kg harvested fruit per 1,000 kg marketable output
  - Basis: crop-cycle harvest before grading and field losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field vines and crop residue (`crop_residue_output`)

Record leaves, vines, roots, and unharvested fruit remaining after the final harvest and identify whether they are returned, removed, or treated.

- Selected flow: Cucumber and gherkin crop residue
- Flow property / unit: Mass / kg wet matter
- Amount rule: Weigh or calculate residue from field records and reconcile it with harvested fruit and the production unit area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-cucumber-production-guide`
- Range: Field-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 2,500
  - Unit: kg wet matter per 1,000 kg marketable output
  - Basis: end-of-cycle vines, leaves, roots, and unharvested fruit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unmarketable fruit and grading rejects (`reject_output`)

Record fruit rejected for size, shape, maturity, damage, disease, or other grade criteria and document the destination.

- Selected flow: Cucumber or gherkin grading rejects
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Reconcile grading rejects to harvested or received fruit and marketable output by crop type and harvest round.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `usda-ams-cucumber-standard`; `usda-ams-pickling-cucumber-standard`
- Range: Grading-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 700
  - Unit: kg wet fruit per 1,000 kg marketable output
  - Basis: rejected fruit after harvest and grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_n2o_air_output`)

Calculate direct soil nitrous oxide from eligible crop-cycle nitrogen inputs with the selected IPCC-compatible method and report it to air.

- Selected flow: Nitrous oxide, emissions to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the declared emission factor and climate or soil method to eligible nitrogen inputs; document the factor and avoid counting the same pathway twice.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh cucumber or gherkin output
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Direct nitrous-oxide screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg N2O/ha
  - Basis: managed-soil nitrogen emissions in the declared crop cycle
  - Basis kind: N input (`n_input`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-managed-soils-n2o`

###### Nitrate loss to freshwater (`nitrate_freshwater_output`)

Model nitrate loss only when the declared nutrient-surplus or water-loss method supports the pathway and its factor is documented.

- Selected flow: Nitrate, emissions to freshwater
- Flow property / unit: Mass / kg NO3-
- Amount rule: Calculate from eligible nitrogen surplus and the selected site or method factor; do not infer nitrate loss from fertilizer purchase alone.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh cucumber or gherkin output
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 45
  - Unit: kg NO3-/ha
  - Basis: declared nitrogen surplus and receiving-water pathway
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and farm-gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Harvested fruit received for preparation (`harvested_fruit_input`)

Record cucumber and gherkin lots received from the crop-management process for sorting, washing, cooling, or primary packing.

- Selected flow: Harvested cucumber or gherkin fruit before grading
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Use the crop-cycle harvest reconciliation and the receiving scale for the same lot and crop type.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_reconciliation`
- Sources: `usda-ams-cucumber-standard`
- Range: Received-fruit screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 1,700
  - Unit: kg received fruit per 1,000 kg marketable output
  - Basis: harvest lots received for sorting, washing, cooling, or packing
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Washing water (`washing_water_input`)

Record water used to remove soil or foreign material when washing is performed before the declared gate.

- Selected flow: Process water for primary produce washing
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Record meter or batch water use and distinguish make-up water, recirculated water, and discharge where measured.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable washed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_utility_records`
- Sources: `usda-ams-cucumber-standard`
- Range: Washing-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3 per 1,000 kg washed output
  - Basis: primary washing line throughput
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary cooling and packing energy (`postharvest_energy_input`)

Record electricity or fuel used for sorting, washing, cooling, and primary packing before hand-off.

- Selected flow: Electricity supply for primary conditioning
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Allocate meter or equipment records to cucumber and gherkin batches by throughput, run time, or documented production order.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_energy_records`
- Sources: `usda-ams-cucumber-standard`
- Range: Primary-conditioning energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kWh per 1,000 kg output
  - Basis: sorting, washing, cooling, and packing line
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging material (`primary_packaging_input`)

Record crates, cartons, films, pallets, or other packaging that crosses the boundary before the declared gate, distinguishing reusable and one-way materials.

- Selected flow: Primary packaging material
- Flow property / unit: Mass / kg packaging material
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Use packaging specifications, counts, unit mass, reuse cycles, and batch output to calculate the attributable packaging mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `usda-ams-cucumber-standard`
- Range: Primary-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 35
  - Unit: kg packaging material per 1,000 kg packed output
  - Basis: declared primary packaging format and reuse practice
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Washing wastewater and handling losses (`washing_waste_output`)

Record discharged wash water, removed soil, damaged fruit, and handling losses leaving the primary preparation line, with their treatment or disposal fate.

- Selected flow: Cucumber and gherkin washing wastewater or handling waste
- Flow property / unit: Mass or volume / kg wet waste or m3
- Amount rule: Use batch records and treatment or discharge records; keep fruit rejects separate from water discharge when separate measurements exist.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_utility_records`
- Sources: `usda-ams-cucumber-standard`
- Range: Preparation-wastewater screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6
  - Unit: m3 per 1,000 kg washed output
  - Basis: primary washing and handling line discharge
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh cucumber or gherkin at gate (`marketable_farm_gate_output`)

This is the declared reference product after harvest, grading, optional washing or cooling, and primary packing that occur before the hand-off.

- Selected flow: Fresh cucumber or gherkin at farm gate
- Flow property / unit: Mass / kg
- Amount rule: Use the final calibrated dispatch scale or lot record after grade acceptance and reconcile it to received fruit and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_output_records`
- Sources: `usda-ams-cucumber-standard`; `usda-ams-pickling-cucumber-standard`
- Range: Marketable-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 1,000
  - Unit: kg marketable output
  - Basis: declared reference product at the farm-gate or pack-house gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)
  - Sources: `usda-ams-cucumber-standard`

##### Waste flows

###### Final grading and packing rejects (`final_reject_output`)

Record fruit rejected after final sorting or packing and identify whether it is sold for another use, fed, composted, treated, or discarded.

- Selected flow: Final cucumber or gherkin grading rejects
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Weigh final rejects and reconcile them with received harvest and marketable gate output by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_output_records`
- Sources: `usda-ams-cucumber-standard`
- Range: Final-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg wet fruit per 1,000 kg marketable output
  - Basis: final grading and packing rejects
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_crop_type` | mixed cucumber and gherkin production | Attribute shared inputs to slicing cucumber, pickling cucumber, or gherkin using recorded production-unit area, crop-cycle output, or another documented physical basis. Do not average distinct crop types before their individual balances are complete. | `fao-cucumber-production-guide` |
| `allocation_repeated_harvest` | multiple harvest rounds from one planting | Treat all harvest rounds attributable to one planting campaign as one crop-cycle inventory and reconcile each round before normalizing to total marketable output. | `fao-cucumber-production-guide` |
| `allocation_shared_protected_unit` | greenhouse or other protected units with multiple crops | Allocate shared energy, water, and management records using declared area, occupied time, throughput, or another physical relationship. Disclose durable infrastructure separately. | `iso-14044-2006` |
| `allocation_residue_fate` | vines, leaves, rejected fruit, and trim | Do not provide a co-product credit unless a recipient, quantity, and intended use are documented. Otherwise report the material as residue or waste and retain the crop-cycle burden. | `usda-ams-cucumber-standard` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_records` | `crop_establishment` | seed, transplants, and establishment inputs | seed lot, transplant, invoice, and planting record | lot; crop type; cultivar; material form; viable quantity; field; date; unused quantity | reconcile supplier records to planting log | kg seed or plants | each planting campaign | full crop cycle | each field, bed, or protected unit | sum by planting campaign and crop type | supplier label, lot trace, and planting record |
| `cp_nutrient_records` | `crop_establishment`; `crop_management` | nutrient products and nutrient equivalents | nutrient plan, soil test, supplier invoice, and application log | product; formulation; nutrient concentration; date; area; quantity; application method | reconcile product mass and application record | kg product, kg N, kg P2O5, kg K2O | each application | full crop cycle | each production unit | sum by nutrient and crop cycle | soil test, label or supplier specification, and application log |
| `cp_irrigation_records` | `crop_establishment`; `crop_management` | crop irrigation and fertigation carrier water | meter, pump, controller, or water-balance record | source; meter readings; event date; area; method; rainfall; carrier use | meter reading or documented water-balance calculation | m3 | each event or meter period | full crop cycle | each field, bed, or protected unit | sum by source and crop cycle | meter calibration or documented balance inputs |
| `cp_field_energy_records` | `crop_establishment`; `crop_management` | mobile machinery fuel and pumping energy | fuel invoice, pump meter, and equipment activity log | carrier; quantity; equipment; operation; field; date; allocation basis | supplier record plus activity or meter log | L, MJ, or kWh | each refuelling, operation, or meter period | full crop cycle | each production unit | allocate shared use by area, hours, or throughput | invoice, meter record, and allocation calculation |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | spray log and supplier record | product; active ingredient; rate; area; date; target; lot | record each application and product lot | kg product or kg active ingredient | each application | full crop cycle | each production unit | sum by product or active ingredient and crop cycle | application log and product label |
| `cp_area_and_cycle_records` | `crop_establishment` | land occupation and crop-cycle dates | field register or protected-unit register | area; bed or unit; crop dates; route; structure status; land use | verify register against field map and production records | ha, m2, and days | each crop cycle | full crop cycle | each field or protected unit | calculate area-time and normalize to output | field map, register, and date evidence |
| `cp_harvest_reconciliation` | `crop_management`; `harvest_and_gate_preparation` | harvest fruit, field losses, and residues | harvest ticket, scale record, and residue record | field; crop type; round; date; gross fruit; marketable fruit; reject; residue; fate | weigh each round or use documented lot reconciliation | kg wet fruit or residue | each harvest round | full harvest campaign | each field, bed, or protected unit | reconcile crop-cycle fruit and residue streams | scale record, lot ticket, and fate record |
| `cp_residue_and_reject_records` | `crop_management`; `harvest_and_gate_preparation` | crop residues and rejected fruit | residue survey, grading sheet, and fate record | field; crop type; round; material; mass; date; destination; recipient | weigh, estimate, and document each residue or reject stream and its fate | kg wet material | each harvest round and final clearance | full harvest campaign | each production unit | aggregate by material and destination and reconcile to harvest output | scale record, grading sheet, and recipient or treatment record |
| `cp_postharvest_utility_records` | `harvest_and_gate_preparation` | wash water, wastewater, and handling loss | batch sheet, utility meter, and treatment record | batch; received mass; make-up water; recirculation; discharge; loss; fate | batch record plus meter or treatment record | kg and m3 | each batch or meter period | full harvest campaign | each preparation line | aggregate by batch and normalize to gate output | meter record, batch sheet, and treatment receipt |
| `cp_postharvest_energy_records` | `harvest_and_gate_preparation` | sorting, cooling, and packing energy | electricity meter and equipment throughput record | meter period; line; kWh; throughput; cooling time; batch | allocate meter use by throughput or run time | kWh or MJ | each meter period or batch | full harvest campaign | each preparation line | allocate shared energy and reconcile to batch output | meter data and allocation calculation |
| `cp_packaging_records` | `harvest_and_gate_preparation` | primary packaging | packaging specification, bill of materials, count, and reuse record | material; unit mass; units; batch; output; reuse cycles | reconcile count, specification, and batch output | kg material and units | each packaging lot or batch | full harvest campaign | each preparation line | separate reusable and one-way material per packed output | supplier specification, count sheet, and reuse declaration |
| `cp_gate_output_records` | `harvest_and_gate_preparation` | marketable product and final rejects | dispatch scale, grade record, and reject record | batch; crop type; date; gate; packed mass; grade; reject; fate | final scale and lot reconciliation | kg wet fruit | each dispatch lot | full harvest campaign | declared gate | sum saleable output and rejects; normalize to 1,000 kg | calibrated scale or lot record and grade record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_equivalent` | nutrient inputs | product mass × declared nutrient fraction; retain product mass and nutrient basis as separate records | invoice; formulation; nutrient plan; application log | kg N, kg P2O5, or kg K2O by crop cycle | `fao-cucumber-production-guide` |
| `calc_crop_cycle_normalization` | all crop-cycle inputs and outputs | crop-cycle quantity ÷ marketable gate output × 1,000 kg | crop-cycle quantity; gate output | normalized quantity per 1,000 kg output |  |
| `calc_repeated_harvest_output` | harvest rounds | sum marketable fruit from all rounds assigned to the planting; reconcile gross fruit, rejects, losses, and residues first | harvest tickets; receiving records; reject records | total marketable crop-cycle output | `fao-cucumber-production-guide` |
| `calc_area_time` | land occupation | production area × crop occupation period, with protected structure treatment declared separately | area register; planting and final harvest dates | m2*a | `fao-cucumber-production-guide` |
| `calc_nitrogen_emission` | direct soil nitrous oxide | apply the selected IPCC-compatible factor to eligible nitrogen input and declared soil or climate method | nutrient records; method choice; area | kg N2O emitted to air | `ipcc-2019-managed-soils-n2o` |
| `calc_water_balance` | irrigation and washing | sum metered deliveries or documented balance components; preserve source withdrawal, delivered water, recirculation, and discharge as distinct quantities | meter readings; rainfall; pumping or batch records | m3 by water role | `fao-crop-evapotranspiration-56` |
| `calc_gate_mass_balance` | harvest and preparation | received fruit = marketable output + rejects + residue or handling loss within declared measurement uncertainty | harvest tickets; batch records; reject and residue records | reconciled mass balance | `usda-ams-cucumber-standard` |
| `calc_packaging_attribution` | primary packaging | unit count × unit mass ÷ declared reuse cycles, allocated to packed output | packaging specification; count; reuse declaration; output | kg packaging per 1,000 kg output | `usda-ams-cucumber-standard` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | product and flow records | Declare crop type, cultivar group, production route, gate, maturity, grade, and product state; resolve platform identities during foreground dataset construction where required. | lot record, product description, and reference-flow qualifiers |
| `quality_measurement` | water, energy, inputs, and outputs | Prefer calibrated scales, meters, supplier invoices, application logs, and batch records; disclose estimates and allocation calculations when direct measurement is unavailable. | meter calibration, scale record, invoice, or calculation sheet |
| `quality_temporal` | crop-cycle inventory | Cover the full planting campaign and harvest period, including all nutrient and protection applications, irrigation events, and harvest rounds. | planting date, application logs, irrigation record, harvest tickets, and dispatch records |
| `quality_completeness` | crop-cycle and gate balance | Reconcile planting material, nutrients, irrigation, energy, harvest fruit, marketable output, rejects, residues, wastewater, and packaging when in scope. | crop-cycle inventory and mass-balance reconciliation |
| `quality_route_disclosure` | open-field and protected routes | Identify protected cultivation, trellis or durable infrastructure treatment, irrigation technology, and route-specific energy use before combining observations. | production-unit register, energy records, and allocation note |
| `quality_identity_resolution` | parameterized and unmapped rows | Resolve each parameterized row to a verified foreground UUID during data-package construction and record any remaining unmapped coverage before final process publication. | identity review record and foreground package check |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow | The reference output must be fresh whole cucumber or gherkin at the declared gate and use mass in kg; pickled, fermented, canned, cut, or retail products are outside this PCR. | `usda-ams-cucumber-standard`; `usda-ams-pickling-cucumber-standard` |
| `validate_crop_type` | product identity and aggregation | Crop type and route must be declared. Slicing cucumbers, pickling cucumbers, and gherkins may be aggregated only after separate crop-cycle balances and an explicit physical allocation basis are available. | `fao-cucumber-production-guide` |
| `validate_cycle_dates` | establishment, management, and harvest | Planting, applications, irrigation, harvest rounds, and gate output must fall within or be explicitly attributed to the declared crop cycle. | `fao-cucumber-production-guide` |
| `validate_nutrient_basis` | nutrient inputs and emissions | Product mass, nutrient concentration, nutrient basis, and emission method must be internally consistent; do not count product mass and its nutrient equivalent as duplicate exchanges. | `ipcc-2019-managed-soils-n2o`; `fao-cucumber-production-guide` |
| `validate_mass_balance` | harvest and gate preparation | Harvest or receiving mass must reconcile with marketable output, rejects, residues, wastewater-related losses, and documented measurement uncertainty. | `usda-ams-cucumber-standard` |
| `validate_flow_set_resolution` | parameterized rows | During foreground data generation, each parameterized row must resolve to a verified UUID compatible with its Flow Set group, property, unit, direction, and use context; otherwise retain an explicit coverage finding. |  |
| `validate_qualifiers` | reference flow and dataset metadata | Required qualifiers must be present, including crop type, route, crop cycle, harvest round, grade, washing, cooling, packaging, and declared gate. | `usda-ams-cucumber-standard`; `usda-ams-pickling-cucumber-standard` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh cucumbers and gherkins at the declared farm-gate or pack-house gate |
| downstream_use | secondary_dataset for cucumber or gherkin product systems; background_dataset only when a representative regional or market-average dataset includes the required route and quality metadata |
| allowed_use | Crop-cycle inventory, product comparison, farm improvement, pack-house improvement, and fresh cucumber or gherkin supply-chain assessment within the declared product state and geography |
| excluded_use | Pickled, fermented, canned, cut, prepared, retail, consumption, seed-production, or unqualified vegetable substitution; do not extrapolate between open-field and protected routes without scenario disclosure |
| required_metadata | crop type; cultivar group; route; geography; crop-cycle dates; planting material; irrigation source and quantity; nutrient basis; crop protection; harvest rounds; yield; grade; washing and cooling; packaging; residue and reject fate; declared gate |
| required_quality_disclosure | time coverage, site scope, measured versus calculated values, route treatment, allocation rules, mass-balance result, platform identity resolution status, and all provisional estimates requiring replacement by foreground records |
| update_trigger | change in crop type or route, irrigation technology, nutrient program, protected-cultivation energy, harvest or grade specification, washing or cooling line, packaging format, gate definition, or evidence affecting material quantities or boundary rules |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-cucumber-production-guide` | official_guidance | FAO, crop production and good-practice guidance for cucumber and gherkin cultivation | crop route, planting, crop management, harvest rounds, residue context, and boundary decisions |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration* | irrigation scheduling and water-balance context |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories* | managed-soil nitrogen-emission method and calculation rule |
| `usda-ams-cucumber-standard` | official_guidance | USDA Agricultural Marketing Service, *Cucumber Grades and Standards* | cucumber maturity, size, quality, grade, defects, and gate acceptance context |
| `usda-ams-pickling-cucumber-standard` | official_guidance | USDA Agricultural Marketing Service, *Pickling Cucumber Grades and Standards* | pickling cucumber and gherkin size, quality, grade, and reject context |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines* | allocation, co-product, and residue-treatment principles |
