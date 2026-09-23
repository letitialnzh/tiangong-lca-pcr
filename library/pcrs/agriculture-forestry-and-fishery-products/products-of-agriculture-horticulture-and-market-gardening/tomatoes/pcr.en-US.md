---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tomatoes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
---

# Fresh Tomatoes at the Declared Gate

## 1. Scope and Applicability

This PCR guides foreground data-package construction for commercial fresh tomatoes (*Solanum lycopersicum*) from production-unit establishment through crop management, harvest, optional primary conditioning, and hand-off at a declared farm gate or pack-house gate. It covers round, ribbed, elongated, cherry, and cocktail tomatoes from open-field, protected-cultivation, hydroponic, or substrate routes when the route, fruit type, and gate state are declared.

Tomato seed production, nursery production of transplants, canned or dried tomatoes, juice, puree, concentrate, sauces, cooked products, retail, consumer storage, and consumption are excluded. Heating or cooling, packaging, and transport are included only when they occur before the declared gate. Several varieties or harvest rounds may be aggregated only after each production unit and lot is reconciled to accepted output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tomatoes |
| classification_refs | CPC 3.0:01234 Tomatoes |
| covered_products | Fresh, whole, unprocessed tomatoes delivered at a declared farm-gate or pack-house gate, including round, ribbed, elongated, cherry, and cocktail types |
| excluded_products | Tomato seed and transplants; canned, dried, juiced, pureed, concentrated, sauced, or cooked tomato products; retail and consumer stages |
| representative_product | Marketable fresh tomatoes meeting the declared maturity, firmness, cleanliness, size, defect, and packaging criteria |
| production_route | Open-field, greenhouse, hydroponic, or substrate cultivation with establishment, crop management, harvest, grading, optional washing or cooling, and primary packing |
| market_state | Fresh whole tomatoes at the declared farm-gate or pack-house gate, loose, trussed, or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh tomatoes at the declared farm-gate or pack-house gate |
| How much | 1,000 kg net accepted tomatoes |
| How well | Tomato type and cultivar group, maturity or colour stage, firmness, size and grade, cleanliness, defect tolerance, moisture condition, truss state where applicable, washing or cooling state, and packaging state are declared |
| How long or cycle | One declared tomato crop cycle and harvest campaign; all harvest rounds from the same planting are aggregated to the declared gate |
| reference_flow_link | `tomatoes_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Tomatoes, production mix, at farm gate, fresh and unprocessed `43dac9a5-d7b1-4536-84f3-38fa2f56562e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; tomato type and cultivar group; open-field, greenhouse, hydroponic, or substrate route; seed or transplant status; planting date; harvest dates and rounds; crop-cycle or annual production basis; maturity and colour stage; size and grade; firmness and defect criteria; irrigation and nutrient delivery method; washing and cooling state; packaging state; declared gate; rejected-fruit and crop-residue fate |
| Binding | `fixed` |

When constructing a foreground data package, all `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing qualifiers make the reference flow definition incomplete. The reference product-flow identity is platform-verified for CPC 3.0 01234.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_tomato_mass` | reference product and harvest reconciliation | Mass | kg | Express the reference as net accepted tomato mass at the declared gate. Weigh harvested, marketable, downgraded, rejected, foreign material, and crop-residue streams separately. |
| `crop_cycle_normalization` | field, greenhouse, hydroponic, and substrate routes | Area and mass | ha or m2; kg | Record each production unit and planting campaign separately, then normalize inputs and outputs to accepted mass from the same crop cycle. |
| `nutrient_product_basis` | mineral fertilizers, fertigation products, manure, compost, and amendments | Product and nutrient mass | kg product; kg N, P2O5, or K2O | Preserve purchased product mass and declared nutrient concentration. Convert to nutrient basis only from a label, supplier specification, nutrient plan, or laboratory result. |
| `irrigation_delivery_basis` | irrigation, fertigation carrier water, and source withdrawal | Volume | m3 | Record delivered irrigation and source withdrawal separately and distinguish rainfall, recirculated solution, drainage, and discharge where modelled. |
| `harvest_round_aggregation` | repeated-harvest tomato routes | Mass and time | kg and crop cycle | Sum each harvest round from the same planting and reconcile accepted fruit, downgraded fruit, field losses, and residues before normalization. |
| `energy_carrier_conversion` | electricity, heating, pumping, and mobile machinery | Energy or carrier mass | kWh, MJ, L, or kg | Preserve measured carrier, operation, conversion factor, and production unit. Do not infer greenhouse heating from crop yield alone. |
| `packaging_mass_basis` | crates, cartons, trays, films, pallets, and reusable containers | Mass or item count | kg or item | Record package mass or item count together with capacity, reuse cycles, return rate, and lot assignment when packaging is included before the gate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field, greenhouse, hydroponic, or substrate production unit receiving tomato seed or transplant material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared tomato crop cycle and foreground input accounting |
| product_classification_scope | Fresh whole tomatoes under CPC 3.0:01234 through the declared farm-gate or pack-house gate |
| recursive_input_rule | Purchased tomato seed or transplants are recorded at their received hand-off state and linked once to an upstream dataset; their own production is outside this PCR unless a separate upstream dataset is supplied. |
| upstream_dataset_requirement | Require upstream datasets for seed or transplants, nutrient products, growing media, crop-protection products, irrigation water, energy, packaging, and purchased transport or treatment services when used. |
| disclosure | Declare production geography, tomato type and cultivar group, route, crop-cycle dates, planting density, irrigation and fertigation method, nutrient basis, crop-protection program, harvest rounds, accepted and rejected mass, washing and cooling, packaging, water recirculation or drainage, residue fate, and gate location. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and crop management | Include production-unit preparation attributable to the crop cycle, planting, crop management, supplied water, nutrient inputs, crop protection, energy, and direct crop emissions. Disclose prior land use and exclude unrelated infrastructure construction. | `fao-tomato-good-agricultural-practices`; `fao-greenhouse-vegetables-2013` |
| `boundary_route_specificity` | open-field, greenhouse, hydroponic, and substrate routes | Keep route-specific infrastructure, heating, pumping, recirculation, substrate, drainage, and crop-cycle records separate when they materially change the inventory. | `fao-greenhouse-vegetables-2013` |
| `boundary_gate_preparation` | harvest, grading, washing, cooling, and packing | End the default foreground boundary at the declared farm-gate or pack-house gate. Include grading, washing, cooling, and primary packaging only when they occur before that gate. | `codex-cxs-293-2008`; `usda-ams-tomato-grade-standard` |
| `boundary_nitrogen_emissions` | nutrient inputs, soil, drainage, and residues | Estimate applicable direct and indirect nitrogen emissions with one declared method using recorded nutrient inputs, drainage or leaching evidence, and residue fate. Avoid double counting pathways. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | rejected fruit, crop residues, wash solids, and wastewater | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. A credit requires documented recipient, intended use, and allocation treatment. | `fao-tomato-good-agricultural-practices`; `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Tomato crop establishment | required | every represented planting, bed, greenhouse compartment, hydroponic unit, or substrate cycle | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | Tomato crop management | required | each represented tomato crop cycle | foreground managed biological production | production-unit area, irrigation, nutrients, protection, energy, and harvest campaign |
| `harvest_and_gate_preparation` | Tomato harvest and gate preparation | required | each represented harvest campaign | foreground harvest, conditioning, packaging, and gate hand-off | 1,000 kg marketable fresh tomato output |
| `purchased_transport_to_gate` | Purchased transport to declared gate | conditional | when transport service crosses the foreground boundary before the declared gate | foreground delivery service | tonne-kilometres from production unit or pack-house to gate |

### Process: Tomato crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Flow: Tomato seed or transplant material (`seed_or_transplant_input`)

Tomato seed or transplants cross the boundary when accepted for establishment in the declared production unit. Record seed and transplants as distinct forms.

- Selected flow: Tomato seed or transplant material
- Flow property / unit: Mass or viable count / kg seed or plant
- Amount rule: Record supplier lot, seed mass or viable plant count, planting date, planted area, unused material, and replacement material by production unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Range: Planting material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 12
  - Unit: kg seed or 2,500 plants per ha
  - Basis: declared planted area and tomato crop-cycle output
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Establishment irrigation water (`establishment_irrigation_water`)

Water applied for bed preparation, seed emergence, transplant establishment, or initial fertigation is recorded by source and production unit.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries during establishment, excluding rainfall and separately identified recirculated solution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Establishment irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: m3/ha
  - Basis: establishment period from planting to uniform stand
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Flow: Establishment planting losses (`establishment_planting_loss`)

Unused seed, failed transplants, and establishment losses are recorded when discarded or sent to a defined treatment route.

- Selected flow: Establishment planting material loss
- Flow property / unit: Mass or count / kg or plant
- Amount rule: Reconcile purchased and planted lots with unused and failed material records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Range: Establishment loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: percent of purchased planting material
  - Basis: purchased lot to planted or accepted establishment material
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Tomato crop management (`crop_management`)

#### Inputs

##### Product flows

###### Flow: Crop irrigation and fertigation water (`crop_irrigation_water`)

Delivered crop water crosses the boundary when supplied to the field, greenhouse, hydroponic unit, or substrate unit. Record source, meter, recirculation, drainage, and crop-cycle period.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries during crop management; report recirculated solution and drainage separately where material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`; `fao-greenhouse-vegetables-2013`
- Range: Crop irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5,000
  - Unit: m3/ha per crop cycle
  - Basis: open-field, greenhouse, hydroponic, or substrate tomato crop cycle
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
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-greenhouse-vegetables-2013`; `ipcc-2019-managed-soils`
- Range: Crop nitrogen screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 40
  - Upper: 600
  - Unit: kg N/ha per crop cycle
  - Basis: total mineral and organic nitrogen applied to the represented tomato production unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop phosphorus screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 350
  - Unit: kg P2O5/ha per crop cycle
  - Basis: soil-test or recipe-supported phosphorus application
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop potassium screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 1,000
  - Unit: kg K2O/ha per crop cycle
  - Basis: soil-test or recipe-supported potassium application
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Crop-protection products (`crop_protection_input`)

Crop-protection products cross the boundary when purchased and applied to the represented tomato crop. Record active ingredient and formulated product information separately.

- Selected flow: Tomato crop-protection product
- Flow property / unit: Mass / kg formulated product and kg active ingredient
- Amount rule: Sum invoices and application logs by product, active ingredient, treated area, and crop cycle; preserve concentration and timing.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-tomato-good-agricultural-practices`
- Range: Crop-protection product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg formulated product/ha per crop cycle
  - Basis: total formulated crop-protection product applied to the represented production unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Mobile machinery fuel (`mobile_machinery_fuel`)

Fuel for tractors, sprayers, harvest aids, forklifts, and other mobile machinery is recorded by operation and production unit.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Volume or mass / L or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum delivery records or machine fuel logs by operation; preserve fuel type and conversion basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-tomato-good-agricultural-practices`
- Range: Mobile-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L/ha per crop cycle
  - Basis: field and harvest machinery fuel for the represented production unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Production electricity (`production_electricity_input`)

Electricity for pumping, fertigation, ventilation, lighting, cooling, and other production operations is recorded by meter and operation.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum sub-meter or invoice records allocated to the represented production unit and crop cycle; separate renewable generation and purchased electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-greenhouse-vegetables-2013`
- Range: Production-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8,000
  - Unit: kWh/ha per crop cycle
  - Basis: pumping, ventilation, lighting, and production equipment for the represented route
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Flow: Irrigation source withdrawal (`irrigation_source_withdrawal`)

Water withdrawn from a river, aquifer, reservoir, or municipal source is recorded when attributable to the tomato production unit.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Record source-meter withdrawal or a documented water balance and reconcile delivered, recirculated, stored, and discharged water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Source-withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6,000
  - Unit: m3/ha per crop cycle
  - Basis: source withdrawal allocated to the represented tomato production unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Flow: Marketable fresh tomatoes (`marketable_tomato_output`)

Marketable tomatoes are the accepted product crossing the declared farm-gate or pack-house gate. Reconcile output by lot, harvest round, and grade.

- Selected flow: Fresh tomatoes at the declared gate
- Flow property / unit: Mass / kg
- Amount rule: Sum net accepted mass after grading and any included washing or cooling, excluding package tare.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg accepted fresh tomato output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Range: Marketable-yield screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10
  - Upper: 300
  - Unit: tonnes/ha per crop cycle
  - Basis: accepted fresh tomato output from the represented production unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Flow: Downgraded or rejected tomato fruit (`rejected_tomato_output`)

Fruit that fails the declared grade, maturity, size, appearance, or soundness criterion is recorded separately from accepted product, with its fate declared.

- Selected flow: Rejected or downgraded tomato fruit
- Flow property / unit: Mass / kg
- Amount rule: Weigh downgraded and rejected fruit by harvest round and reconcile with harvested and accepted mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Sources: `codex-cxs-293-2008`; `usda-ams-tomato-grade-standard`
- Range: Rejected-fruit screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: percent of harvested tomato mass
  - Basis: downgraded, rejected, and unmarketable tomato fruit by harvest campaign
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Tomato vines and crop residue (`crop_residue_output`)

Vines, leaves, roots, substrate residues, and other crop biomass leaving the production unit are recorded by fate, including field return, composting, feed use, treatment, or disposal.

- Selected flow: Tomato crop residue
- Flow property / unit: Mass / kg wet biomass
- Amount rule: Measure or calculate residue mass from harvest records and documented residue-management operations; retain moisture basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_fate_records`
- Range: Crop-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 8
  - Unit: kg wet residue/kg accepted tomatoes
  - Basis: crop biomass leaving the production unit after harvest and termination
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Flow: Direct soil nitrous oxide emission (`direct_soil_n2o_emission`)

Direct nitrous oxide from managed soil or growing media is estimated from declared nitrogen inputs and the selected emission method.

- Selected flow: Nitrous oxide to air from managed tomato production soil
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply one declared method to measured or calculated nitrogen inputs and avoid counting the same pathway in both soil and drainage records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Direct N2O screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha per crop cycle
  - Basis: direct managed-soil emission estimate from declared nitrogen input
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Ammonia emission from nutrient use (`ammonia_emission`)

Ammonia emissions are recorded when the declared nutrient method estimates volatilization from applied fertilizer or organic nutrient products.

- Selected flow: Ammonia to air from tomato production
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate from declared nutrient input and emission method, keeping product, application, and environmental conditions traceable.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Ammonia screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg NH3/ha per crop cycle
  - Basis: volatilization estimate from declared nutrient inputs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Nitrate loss to water (`nitrate_loss`)

Nitrate loss is recorded when drainage, leaching, or runoff from the declared production unit is estimated or measured.

- Selected flow: Nitrate loss from tomato production
- Flow property / unit: Mass / kg N as nitrate
- Amount rule: Use measured drainage or a declared nitrogen-balance method and record receiving medium, drainage fraction, and nutrient basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-managed-soils`; `fao-greenhouse-vegetables-2013`
- Range: Nitrate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg N/ha per crop cycle
  - Basis: nitrate loss in drainage, leaching, or runoff from the represented unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Tomato harvest and gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Flow: Harvest and gate-preparation electricity (`gate_preparation_electricity`)

Electricity used for sorting, washing, cooling, grading, packing, and other pre-gate handling is recorded when those operations occur before the declared gate.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum sub-meter or invoice records for included pre-gate operations and allocate them to tomato lots handled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_energy_records`
- Range: Gate-preparation electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kWh/tonne accepted tomatoes
  - Basis: included washing, grading, cooling, and packing operations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Washing or process water (`washing_process_water`)

Water used to wash or condition tomatoes crosses the boundary when the operation occurs before the declared gate. Washing is optional and must be disclosed.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum metered or documented washing water and keep reused, treated, and discharged portions separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_records`
- Sources: `codex-cxs-293-2008`
- Range: Washing-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: m3/tonne accepted tomatoes
  - Basis: optional washing and conditioning before the declared gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Rigid primary packaging (`rigid_primary_packaging`)

Reusable or single-use crates, cartons, trays, and other rigid primary packaging are recorded when supplied or consumed before the declared gate.

- Selected flow: Rigid container packaging
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- Amount rule: Record package type, mass, capacity, reuse cycles, return rate, and tomato lot assignment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-cxs-293-2008`
- Range: Rigid-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 180
  - Unit: kg packaging/tonne accepted tomatoes
  - Basis: package mass after reuse-cycle allocation and package-capacity assignment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Flow: Wash solids and trimming rejects (`wash_trim_waste`)

Soil, leaves, stems, damaged fruit, and other solids removed during grading or washing are recorded with treatment or disposal route.

- Selected flow: Tomato washing and trimming waste
- Flow property / unit: Mass / kg wet waste
- Amount rule: Weigh or calculate solids removed during included conditioning and reconcile with accepted product and rejected fruit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_records`
- Range: Wash-and-trim waste screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg wet waste/tonne accepted tomatoes
  - Basis: solids removed during included grading and washing
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Wastewater sent to treatment (`wastewater_output`)

Wash or conditioning wastewater leaves the pre-gate operation when discharged to a treatment service or other documented route.

- Selected flow: Wastewater from tomato conditioning
- Flow property / unit: Volume / m3
- Amount rule: Record discharged wastewater after accounting for reuse, evaporation, and retained solids; identify receiving treatment route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_records`
- Range: Wastewater screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: m3/tonne accepted tomatoes
  - Basis: wastewater discharged from included conditioning operations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Purchased transport to declared gate (`purchased_transport_to_gate`)

#### Inputs

##### Product flows

###### Flow: Road freight to declared gate (`road_freight_to_gate`)

Purchased road transport is included when a third-party service moves tomatoes, packaging, or production materials to the declared gate before hand-off.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / tonne-kilometre
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Record loaded mass, route distance, backhaul or return assumption, vehicle or service type, and material moved; calculate tonne-kilometres.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted fresh tomato output
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Range: Road-transport screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: km per declared tomato lot
  - Basis: route distance from production unit or pack-house to declared gate
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_and_rejected` | accepted tomatoes, downgraded fruit, and rejects | Allocate shared crop-cycle inputs first to declared accepted tomato output using measured mass reconciliation. Report downgraded and rejected fruit separately; use economic or physical allocation only when a documented productive recipient exists. | `iso-14044-2006`; `codex-cxs-293-2008` |
| `allocation_multiple_varieties` | multiple tomato types, cultivars, or harvest campaigns | Keep types and campaigns separate when input regimes, route, grade, or market state differ. If aggregated, allocate shared operations by measured mass or another declared physical relationship and retain disaggregation evidence. | `iso-14044-2006` |
| `allocation_reusable_packaging` | reusable crates, pallets, and containers | Allocate packaging burdens over documented reuse cycles and declared capacity or mass basis. Include return and loss records when attributable to the declared gate. | `iso-14044-2006`; `codex-cxs-293-2008` |
| `allocation_residue_use` | crop residue, wash solids, and wastewater solids | Keep residue treatment and productive use separate from accepted product. Assign a credit only when recipient, intended use, substitution claim, and allocation method are documented. | `iso-14044-2006`; `fao-tomato-good-agricultural-practices` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | seed, transplants, planting water, planting losses | supplier lot, planting log, establishment log | lot id; material form; mass or viable count; variety; planting date; area; unused and failed material | reconcile supplier records to planting-unit logs and retain lot documents | kg, plant, seed, m3, ha | each lot and planting event | complete crop-cycle establishment period | each field, compartment, hydroponic unit, or substrate unit | aggregate by planting campaign and production unit | supplier invoice; planting log; lot traceability |
| `cp_irrigation_records` | `crop_establishment` or `crop_management` | irrigation, fertigation water, source withdrawal, drainage | meter record, water balance, fertigation log | source; meter reading; delivered volume; rainfall; recirculation; drainage; discharge; area; date | read meters or reconstruct a documented water balance and reconcile source and delivered volumes | m3, mm, ha | each irrigation event or daily total | full crop cycle | each irrigation zone and production unit | sum by crop cycle and retain source and receiving-medium split | meter calibration; water-balance closure; operator log |
| `cp_nutrient_records` | `crop_establishment` or `crop_management` | nutrient products and calculated emissions | invoice, label, nutrient plan, application log | product; formulation; mass; nutrient concentration; date; area; application method; soil or drainage condition | reconcile purchase, storage, and application records; calculate nutrient equivalents | kg product, kg N, kg P2O5, kg K2O | each application | full crop cycle | each production unit and nutrient zone | aggregate by product, nutrient, and crop cycle | label or supplier specification; nutrient-plan review |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | application log and supplier record | product; active ingredient; concentration; mass or volume; date; treated area; application purpose | reconcile application logs with supplier records and crop-protection plan | kg, L, ha | each application | full crop cycle | each field, compartment, or crop zone | aggregate by product and active ingredient per crop cycle | operator record; product label; application authorization |
| `cp_energy_records` | `crop_management` | machinery fuel and production electricity | fuel log, meter, invoice, equipment log | carrier; quantity; meter; operation; equipment; production unit; date; allocation basis | read meters or reconcile delivery and equipment records to included operations | L, kg, kWh, MJ | each delivery, meter period, or operation | full crop cycle | each production unit and included service | sum by carrier, operation, and crop cycle | meter record; invoice; conversion record |
| `cp_harvest_records` | `crop_management` | accepted, downgraded, rejected, and harvested tomatoes | harvest ticket, scale record, grading record | date; lot; harvest round; gross mass; accepted mass; grade; rejected mass; packaging tare; gate state | use calibrated scale and lot-level grading reconciliation | kg, percent | each harvest lot | full harvest campaign | each field, compartment, and pack-house line | sum harvest rounds and reconcile gross, accepted, rejected, and tare masses | scale check; grading record; lot traceability |
| `cp_residue_fate_records` | `crop_management` | vines, roots, substrate residue, and crop residues | residue log, contractor ticket, treatment record | residue type; wet mass; moisture; date; fate; recipient; transport; treatment | weigh or calculate residue and retain fate evidence | kg, percent, km | each removal or treatment event | crop termination and residue handling period | each production unit | aggregate by fate and crop cycle | weighbridge or contractor record; recipient declaration |
| `cp_washing_records` | `harvest_and_gate_preparation` | washing water, wash solids, wastewater, and trimming rejects | water meter, wash log, waste ticket, drain record | lot; water in; reuse; discharge; solids; rejected fruit; date; line; treatment route | reconcile input water, reused water, discharged wastewater, solids, and product output | m3, kg | each lot or operating shift | all included pre-gate conditioning | each washing or conditioning line | aggregate by tomato lot and gate period | meter record; waste ticket; mass-balance check |
| `cp_gate_energy_records` | `harvest_and_gate_preparation` | sorting, cooling, and packing electricity | sub-meter, invoice, equipment log | line; operation; kWh; date; lot throughput; allocation basis | allocate metered energy to included tomato throughput and retain line records | kWh, kg | each shift or meter period | all included pre-gate operations | each pack-house line | sum by operation and tomato lot | sub-meter or invoice; throughput record |
| `cp_packaging_records` | `harvest_and_gate_preparation` | rigid packaging, crates, and pallets | packaging specification, issue log, return log | package type; material; tare; capacity; count; reuse cycles; return; loss; lot | reconcile package issue and return records to lot throughput and declared reuse basis | kg, item, cycle | each issue and return event | full included gate period | each pack-house and transport route | allocate by capacity or documented mass basis | supplier specification; issue and return log |
| `cp_transport_records` | `purchased_transport_to_gate` | purchased road freight | transport order, bill, route record | material; loaded mass; origin; destination; distance; vehicle or service; return assumption; date | calculate tonne-kilometres from verified route and loaded mass | tkm, kg, km | each shipment | all included pre-gate shipments | each route and declared gate | aggregate by material and tomato lot | bill of lading; route record; mass record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_output` | accepted tomato reference flow | Sum net accepted tomato mass by harvest lot after grading and included washing or cooling, excluding package tare. | harvest tickets; scale records; grade records; package tare | kg accepted tomatoes | `codex-cxs-293-2008` |
| `calc_mass_reconciliation` | harvest and gate preparation | Gross harvested mass = accepted mass + downgraded or rejected fruit + trim and foreign material + measured process loss; investigate unexplained residual. | gross mass; accepted mass; reject mass; trim; loss; moisture basis | reconciled tomato mass balance | `mass-balance-identity` |
| `calc_nutrient_equivalents` | nutrient products | Nutrient mass = formulated product mass × documented nutrient concentration; retain product and nutrient bases separately. | product mass; label or supplier concentration; application date | kg N, kg P2O5, and kg K2O | `fao-greenhouse-vegetables-2013` |
| `calc_water_balance` | irrigation and washing water | Source withdrawal = delivered water + retained storage change + discharge or drainage − identified recirculated return, with units and period reconciled. | meter readings; delivery; rainfall; recirculation; drainage; storage change | m3 source withdrawal and delivered water | `fao-crop-evapotranspiration-56` |
| `calc_crop_cycle_normalization` | all crop-cycle amounts | Normalized amount = recorded or calculated amount ÷ accepted tomato output × 1,000 kg. Preserve production-unit and crop-cycle denominator. | recorded amount; accepted output | amount per 1,000 kg accepted tomatoes | `mass-balance-identity` |
| `calc_nitrogen_emissions` | direct and indirect nitrogen emissions | Apply one declared IPCC-compatible or jurisdictional method to documented nitrogen inputs, soil or substrate conditions, drainage, and residue fate; do not sum overlapping factors. | kg N applied; method factors; drainage; residue fate | kg N2O, NH3, or nitrate loss by receiving medium | `ipcc-2019-managed-soils` |
| `calc_reusable_packaging` | reusable crates and pallets | Allocated packaging burden = item burden ÷ documented reuse cycles × tomato-lot share by capacity or declared mass basis. | item mass; reuse cycles; lot capacity or mass; return and loss records | kg packaging allocated to tomato lot | `iso-14044-2006` |
| `calc_transport_service` | purchased road freight | Transport service = loaded mass in tonnes × verified route distance in kilometres; report return or backhaul assumption separately. | shipment mass; route distance; service record | tonne-kilometres | `fao-tomato-good-agricultural-practices` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_qualifiers` | reference flow and all product lots | Declare tomato type, cultivar group, route, geography, gate, maturity, grade, and packaging state; retain evidence gap platform identity for later foreground resolution. | lot metadata; product specification; gate record |
| `quality_mass_closure` | harvest, rejects, residues, washing, and wastewater | Close the product and process mass balance for each represented crop cycle or document the unexplained difference and its effect on normalized values. | calibrated scale; mass-balance worksheet; waste ticket |
| `quality_temporal_coverage` | crop-cycle inputs and outputs | Cover the full planting-to-gate crop cycle and every harvest round; identify missing periods, substitutions, and averaging windows. | planting log; harvest log; meter periods |
| `quality_route_disclosure` | open-field, greenhouse, hydroponic, and substrate production | Identify route, occupied area, infrastructure attribution, recirculation, heating, lighting, substrate, drainage, and crop-termination treatment whenever included. | production-unit record; equipment log; route declaration |
| `quality_nutrient_traceability` | nutrient inputs and nitrogen emissions | Link each nutrient value to a product record, concentration, application log, and declared emission method; distinguish product mass from nutrient mass. | invoice; label; nutrient plan; calculation worksheet |
| `quality_water_traceability` | irrigation, withdrawal, washing, and drainage | Identify source, meter or water-balance method, delivered volume, recirculation, drainage, discharge, and receiving medium. | meter record; water-balance closure; discharge record |
| `quality_reject_and_residue_fate` | downgraded fruit, crop residue, wash solids, and wastewater | Record measured amount, moisture basis where relevant, destination, treatment, transport, and recipient evidence for every non-product stream. | waste ticket; contractor record; recipient declaration |
| `quality_energy_and_transport` | fuel, electricity, and purchased transport | Retain carrier or service type, quantity, operation, route, date, meter or shipment evidence, and allocation basis. | invoice; meter record; bill of lading; route record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | reference flow and accepted output | Require 1,000 kg net accepted tomatoes as normalized reference amount and retain the platform-verified reference product identity for CPC 3.0 01234. | `codex-cxs-293-2008` |
| `validation_mass_reconciliation` | harvest and gate-preparation inventory | Check that accepted output, downgraded or rejected fruit, residues, trim, wastewater solids, and process losses reconcile with gross harvested or received mass within documented measurement tolerance. | `mass-balance-identity` |
| `validation_crop_cycle_completeness` | crop establishment and crop management | Reject a dataset that omits a represented planting campaign, harvest round, or route-specific input without a justified zero or documented exclusion. | `fao-tomato-good-agricultural-practices` |
| `validation_nutrient_basis` | nutrient products and emissions | Check product mass, nutrient concentration, nutrient amount, application timing, and declared emission method before accepting nitrogen, ammonia, or nitrate values. | `ipcc-2019-managed-soils` |
| `validation_water_balance` | irrigation, source withdrawal, washing, and drainage | Check units, source, meter or balance period, delivered water, recirculation, discharge, and receiving medium; investigate negative or unexplained balances. | `fao-crop-evapotranspiration-56` |
| `validation_gate_state` | reference product and process boundary | Check that washing, cooling, packaging, transport, and pack-house operations are included only when before the declared gate and disclosed in metadata. | `codex-cxs-293-2008`; `usda-ams-tomato-grade-standard` |
| `validation_range_screen` | all important inventory rows | Compare site values with the row range or documented evidence. Values outside a range require an explanation, revised evidence, or an explicit scenario declaration. | `codex-cxs-293-2008`; `fao-greenhouse-vegetables-2013` |
| `validation_residue_fate` | rejects and residues | Require a fate and destination for each rejected fruit, crop residue, wash solid, and wastewater stream; do not apply a credit without documented productive use. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground tomato production dataset that may be published as a `secondary_dataset` and used as a documented agricultural production input |
| downstream_use | Downstream process and lifecyclemodel construction for fresh whole tomato supply at the same declared gate and compatible route, geography, period, and product qualifiers |
| allowed_use | Comparative or attributional LCA when crop-cycle completeness, gate state, route, mass reconciliation, nutrient basis, water balance, and residue fate are disclosed |
| excluded_use | Canned, dried, juiced, pureed, concentrated, cooked, retail, consumer, or materially different tomato routes without an explicit transformation or reallocation model |
| required_metadata | canonical PCR id; reference amount; tomato type and cultivar group; geography; production route; planting and harvest dates; gate; maturity and grade; accepted, rejected, residue, and wastewater masses; irrigation source and method; nutrient basis; crop-protection program; energy and transport; packaging and reuse; platform identity resolution status |
| required_quality_disclosure | temporal coverage; site and production-unit coverage; measurement and mass-balance closure; route and technology; water and nutrient evidence; residue fate; missing data; ranges used; allocation; uncertainty fields |
| update_trigger | new production route, material changes in irrigation or fertigation, heating or lighting, crop-protection regime, grade or gate definition, packaging system, residue fate, source method, or verified product and flow identities |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `codex-cxs-293-2008` | standard | FAO/WHO Codex Alimentarius, Standard for Tomatoes (CXS 293-2008), https://www.fao.org/fao-who-codexalimentarius/sh-proxy/hu/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS%20293-2008/CXS_293e.pdf; retrieved 2026-09-14 | product definition, commercial types, maturity, quality, gate preparation, and grade evidence |
| `usda-ams-tomato-grade-standard` | official_guidance | USDA Agricultural Marketing Service, Tomato Grades and Standards, https://www.ams.usda.gov/grades-standards/tomato-grades-and-standards; retrieved 2026-09-14 | grade, maturity, cleanliness, defect, and reject classification |
| `fao-tomato-good-agricultural-practices` | official_guidance | FAO, Manual de buenas prácticas agrícolas en la cadena del tomate, https://www.fao.org/family-farming/detail/es/c/286792/; retrieved 2026-09-14 | tomato process decomposition, crop management, crop protection, residue, and transport practices |
| `fao-greenhouse-vegetables-2013` | official_guidance | FAO, Good Agricultural Practices for greenhouse vegetable crops, https://www.fao.org/4/i3284e/i3284e.pdf; retrieved 2026-09-14 | greenhouse, fertigation, water, nutrient, electricity, drainage, and route-specific methodology |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm; retrieved 2026-09-14 | irrigation measurement and water-balance method |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html; retrieved 2026-09-14 | nitrogen emission method and managed-soil boundary |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html; retrieved 2026-09-14 | allocation, co-product, attribution, and data-quality principles |
| `mass-balance-identity` | method_factor | PCR mass-balance reconciliation method: gross received or harvested mass equals accepted product plus separately recorded downgraded, residue, treatment, and unexplained loss streams | calculation and validation mass closure |
