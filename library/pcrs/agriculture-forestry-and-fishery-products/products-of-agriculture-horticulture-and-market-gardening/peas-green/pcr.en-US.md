---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peas-green
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
---

# Fresh Green Peas at the Declared Gate

## 1. Scope and Applicability

This PCR guides foreground data-package construction for commercial fresh green peas (*Pisum sativum* L.) from crop establishment through crop management, harvest, optional primary conditioning, and hand-off at a declared farm gate or pack-house gate. It covers fresh garden peas sold in pods and fresh shelled green pea seeds when the product form, cultivar or type, maturity, grade, production route, and gate state are declared. Open-field and protected routes may be represented, but route-specific inputs and infrastructure must remain identifiable.

Seed production, nursery production, dry peas, pulses harvested after physiological maturity, frozen peas, canned or otherwise preserved peas, prepared meals, retail, consumer storage, and consumption are excluded. Washing, cooling, primary packaging, and purchased transport are included only when they occur before the declared gate. Multiple fields, plantings, or harvest rounds may be aggregated only after each crop cycle and product form is reconciled to accepted output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peas-green |
| classification_refs | CPC 3.0:01242 Peas, green |
| covered_products | Fresh, whole, unprocessed green peas delivered at a declared farm-gate or pack-house gate, including podded garden peas and shelled green pea seeds when their form is declared |
| excluded_products | Pea seed and transplants; dry or mature peas; frozen, canned, dried, cooked, or otherwise preserved pea products; retail, consumer, and food-service stages |
| representative_product | Marketable fresh green pea pods or shelled green pea seeds meeting the declared maturity, tenderness, colour, cleanliness, size, defect, and packaging criteria |
| production_route | Open-field or protected cultivation with establishment, managed crop production, harvest, optional grading, washing, cooling, primary packing, and declared gate hand-off |
| market_state | Fresh green peas at the declared farm-gate or pack-house gate, podded or shelled as declared, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh green peas at the declared farm-gate or pack-house gate |
| How much | 1,000 kg net accepted fresh green peas |
| How well | Product form (podded or shelled), pea type or cultivar group, maturity, tenderness, colour, pod filling where applicable, size or grade, cleanliness, defect tolerance, moisture condition, washing or cooling state, and packaging state are declared |
| How long or cycle | One declared green pea crop cycle and harvest campaign; all harvest rounds from the same planting are aggregated to the declared gate |
| reference_flow_link | `green_peas_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Peas, green; production mix, at farm gate; fresh, unprocessed `b0d5d264-fa1a-4230-8bf8-423b8125d8a7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; pea form (podded or shelled); pea type or cultivar group; open-field or protected route; seed status; planting date; harvest dates and rounds; crop-cycle basis; maturity and tenderness; colour and size or grade; irrigation and nutrient delivery method; crop-protection program; washing and cooling state; packaging state; declared gate; accepted, downgraded, rejected, and crop-residue fate |
| Binding | fixed |

When constructing a foreground data package, all `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete. The reference product-flow identity is platform-verified for CPC 3.0:01242 and retained without a dataset version.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_green_pea_mass` | reference product and harvest reconciliation | Mass | kg | Express the reference as net accepted green pea mass at the declared gate. Weigh or otherwise document harvested, marketable, downgraded, rejected, foreign-material, pod-shell where applicable, and crop-residue streams separately. |
| `crop_cycle_normalization` | open-field and protected routes | Area and mass | ha or m2; kg | Record each production unit and planting campaign separately, then normalize inputs and outputs to accepted green pea mass from the same crop cycle and product form. |
| `product_form_conversion` | podded and shelled green peas | Mass | kg | Keep podded output and shelled-seed output separate. If shelling is included before the gate, record pod input, edible seed output, shell residue, and the declared conversion basis. |
| `nutrient_product_basis` | mineral fertilizers, fertigation products, manure, compost, and amendments | Product and nutrient mass | kg product; kg N, P2O5, or K2O | Preserve purchased product mass and declared nutrient concentration. Convert to nutrient basis only from a label, supplier specification, nutrient plan, or laboratory result. |
| `irrigation_delivery_basis` | irrigation, fertigation carrier water, source withdrawal, drainage, and discharge | Volume | m3 | Record delivered irrigation and source withdrawal separately. Distinguish rainfall, recirculated solution, drainage, and discharge where modelled. |
| `energy_carrier_conversion` | electricity, pumping, cooling, and mobile machinery | Energy or carrier mass | kWh, MJ, L, or kg | Preserve measured carrier, operation, conversion factor, and production unit. Do not infer energy use from yield alone. |
| `packaging_mass_basis` | crates, cartons, trays, films, pallets, and reusable containers | Mass or item count | kg or item | Record package mass or item count together with capacity, reuse cycles, return rate, and lot assignment when packaging is included before the gate. |
| `transport_service_basis` | purchased transport to the declared gate | Mass and distance | t and km | Calculate transport service from loaded product or material mass and verified route distance. State whether return, backhaul, and empty-run assumptions are included. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field or protected production unit receiving green pea seed or planting material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared green pea crop cycle and foreground input accounting |
| product_classification_scope | Fresh whole green peas under CPC 3.0:01242 through the declared farm-gate or pack-house gate |
| recursive_input_rule | Purchased green pea seed or planting material is recorded at its received hand-off state and linked once to an upstream dataset; its own production is outside this PCR unless a separate upstream dataset is supplied. |
| upstream_dataset_requirement | Require upstream datasets for seed, nutrient products, crop-protection products, irrigation water, energy, packaging, purchased transport, and waste-treatment services when used. |
| disclosure | Declare production geography, pea form and type, route, crop-cycle dates, planted area and density, irrigation and fertigation method, nutrient basis, crop-protection program, harvest rounds, accepted and downgraded mass, shelling where applicable, washing and cooling, packaging, water recirculation or drainage, residue fate, and gate location. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and crop management | Include production-unit preparation attributable to the crop cycle, planting, crop management, supplied water, nutrients, crop protection, energy, and direct crop emissions. Disclose prior land use and exclude unrelated infrastructure construction. | `unece-ffv-27-peas-2025` |
| `boundary_route_specificity` | open-field and protected production | Keep route-specific infrastructure, pumping, heating or lighting, substrate, recirculation, drainage, and crop-termination records separate when they materially change the inventory. | `ucdavis-edible-pod-peas-postharvest` |
| `boundary_gate_preparation` | harvest, grading, shelling, washing, cooling, and packing | End the default foreground boundary at the declared farm-gate or pack-house gate. Include shelling, grading, washing, cooling, and primary packaging only when they occur before that gate. | `unece-ffv-27-peas-2025`; `ucdavis-edible-pod-peas-postharvest` |
| `boundary_nitrogen_emissions` | nutrient inputs, soil, drainage, and residues | Estimate applicable direct and indirect nitrogen emissions with one declared method using recorded nutrient inputs, drainage or leaching evidence, and residue fate. Avoid double counting pathways. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | pod shells, rejected peas, crop residues, wash solids, and wastewater | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. A credit requires documented recipient, intended use, substitution claim, and allocation treatment. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Green pea crop establishment | required | every represented planting, field, protected compartment, or crop cycle | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | Green pea crop management | required | each represented green pea crop cycle | foreground managed biological production | production-unit area, irrigation, nutrients, protection, energy, and harvest campaign |
| `harvest_and_gate_preparation` | Green pea harvest and gate preparation | required | each represented harvest campaign | foreground harvest, optional shelling, conditioning, packaging, and gate hand-off | 1,000 kg marketable fresh green pea output |
| `purchased_transport_to_gate` | Purchased transport to declared gate | conditional | when a transport service crosses the foreground boundary before the declared gate | foreground delivery service | tonne-kilometres from production unit or pack-house to gate |

### Process: Green pea crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Green pea seed or planting material (`seed_input`)

Green pea seed or other planting material crosses the boundary when accepted for establishment in the declared production unit. Record untreated and treated seed as separate lots when their burdens differ.

- Selected flow: Green pea seed or planting material
- Flow property / unit: Mass or viable count / kg seed or count
- Amount rule: Record supplier lot, seed mass or viable count, treatment state, planting date, planted area, unused material, and replacement material by production unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output from the same crop cycle and product form
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Range: Planting-material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 120
  - Unit: kg seed per 1,000 kg accepted green peas
  - Basis: crop-cycle planted area and accepted fresh output
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Water applied for seed emergence or transplant establishment is recorded by source and production unit. Rainfall and recirculated solution are not reported as delivered irrigation unless they cross the defined boundary.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries during establishment and retain rainfall, storage, and recirculation separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output from the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Establishment irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: m3/ha during establishment
  - Basis: sowing or planting to uniform stand
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unused or failed planting material (`establishment_loss`)

Unused seed, failed plants, and establishment losses are recorded when discarded or sent to a defined treatment route.

- Selected flow: Unused or failed green pea planting material
- Flow property / unit: Mass or count / kg or count
- Amount rule: Reconcile purchased, planted, unused, and failed lots by crop cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Range: Establishment-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: percent of purchased planting material
  - Basis: purchased lot to planted and accepted establishment material
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Green pea crop management (`crop_management`)

#### Inputs

##### Product flows

###### Crop irrigation and fertigation water (`crop_irrigation_water`)

Delivered crop water crosses the boundary when supplied to the field or protected unit. Record source, meter, recirculation, drainage, and crop-cycle period.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented water-balance deliveries during crop management and report recirculated solution and drainage separately where material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Crop irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5,000
  - Unit: m3/ha per crop cycle
  - Basis: open-field or protected green pea crop cycle
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
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources:
- Range: Nitrogen-product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg product per 1,000 kg accepted output
  - Basis: crop-cycle nutrient program and accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Phosphorus-product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg product per 1,000 kg accepted output
  - Basis: crop-cycle nutrient program and accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Potassium-product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg product per 1,000 kg accepted output
  - Basis: crop-cycle nutrient program and accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Organic-product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: kg product per 1,000 kg accepted output
  - Basis: crop-cycle amendment program and accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_input`)

Crop-protection products cross the boundary when applied to the represented green pea crop. Record each product and active ingredient separately because the current reviewed Flow Set taxonomy does not provide a general crop-protection group.

- Selected flow: Crop-protection product and active ingredient
- Flow property / unit: Mass or volume / kg or L product
- Amount rule: Record product, active ingredient, formulation, concentration, application date, treated area, and application purpose from the crop-protection plan and application log.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Range: Crop-protection screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg or L product per 1,000 kg accepted output
  - Basis: crop-cycle application program and accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Production electricity (`production_electricity`)

Electricity for pumping, protected cultivation, monitoring, or other included crop-management operations is recorded by operation and production unit.

- Selected flow: Electricity supplied to production
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum metered electricity or allocate documented invoices to included crop-management operations by sub-meter, operating hours, or throughput.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Production-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kWh per 1,000 kg accepted output
  - Basis: included crop-management operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel (`mobile_machinery_fuel`)

Diesel, gasoline, or another fuel used by field machinery crosses the boundary when consumed by included crop-management operations.

- Selected flow: Fuel for mobile agricultural machinery
- Flow property / unit: Fuel mass or volume / L or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Reconcile fuel deliveries or equipment records with tillage, sowing, spraying, irrigation, and other included operations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Mobile-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: L per 1,000 kg accepted output
  - Basis: included field operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Stationary fuel for pumping or protected production (`stationary_fuel_input`)

Stationary fuel is recorded only when a boiler, stationary engine, heater, or other included stationary equipment is operated for the crop cycle.

- Selected flow: Stationary combustion fuel
- Flow property / unit: Fuel mass or volume / L or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: Record fuel by equipment, operation, production unit, and crop-cycle period; use a justified zero or documented exclusion when no stationary equipment is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Stationary-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L per 1,000 kg accepted output
  - Basis: included stationary operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Source water withdrawal (`source_water_withdrawal`)

Source withdrawal is recorded separately from delivered irrigation when a source, permit, meter, or water balance provides evidence of the withdrawn volume.

- Selected flow: Water resource withdrawal for crop production
- Flow property / unit: Volume / m3
- Amount rule: Record metered or water-balance source withdrawal and reconcile it to delivered water, storage change, drainage, and discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Source-withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8,000
  - Unit: m3/ha per crop cycle
  - Basis: source withdrawal for the represented crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Land occupation (`land_occupation`)

Land occupation is recorded for the production area and crop-cycle duration using the location and time basis of the represented field or protected unit.

- Selected flow: Land occupation for green pea production
- Flow property / unit: Area-time / ha·year or m2·year
- Amount rule: Record occupied area and crop-cycle duration; retain field or compartment identity and any multiple-cropping allocation basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Range: Land-occupation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 3
  - Unit: ha·year per 1,000 kg accepted output
  - Basis: occupied production area and crop-cycle duration
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)



#### Outputs

##### Product flows

##### Waste flows

###### Green pea crop residue (`crop_residue`)

Pea vines, roots, unharvested pods, and other crop residue are recorded when left in the field, removed, composted, used as feed, treated, or disposed of. The fate is part of the foreground record.

- Selected flow: Green pea crop residue and unharvested biomass
- Flow property / unit: Mass / kg wet or dry matter
- Amount rule: Weigh or estimate residue by documented dry-matter or moisture basis and record field return, removal, treatment, or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate_records`
- Range: Crop-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5,000
  - Unit: kg wet residue per 1,000 kg accepted output
  - Basis: crop termination and harvest residue by stated moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Ammonia to air (`ammonia_air_emission`)

Ammonia emissions are recorded or calculated when nutrient application, residue handling, or other crop operations create a documented release to ambient air.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: Apply one declared emission method to documented N inputs and residue or manure fate; report the receiving medium and avoid overlapping factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Ammonia-emission screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg NH3 per 1,000 kg accepted output
  - Basis: declared nutrient and residue emission method
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide to air (`nitrous_oxide_air_emission`)

Direct and indirect nitrous oxide emissions from managed soils or substrates are recorded or calculated from the declared nutrient, drainage, and residue method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Use one declared IPCC-compatible or jurisdictional method and retain the N input, drainage, and residue basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Nitrous-oxide screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg N2O per 1,000 kg accepted output
  - Basis: declared managed-soil or substrate method
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`nitrate_water_emission`)

Nitrate released through drainage, runoff, or leaching is reported when receiving-medium evidence or a declared method supports the exchange.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate or kg N
- Amount rule: Record or calculate nitrate loss from documented N inputs, drainage, runoff, and receiving medium using one declared method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Nitrate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg N per 1,000 kg accepted output
  - Basis: declared drainage or leaching method
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate to water (`phosphate_water_emission`)

Phosphate released through runoff or drainage is reported when the method and receiving medium are documented.

- Selected flow: Phosphate emission to water
- Flow property / unit: Mass / kg phosphate or kg P
- Amount rule: Record or calculate phosphate loss from documented P inputs, soil or substrate conditions, runoff, and drainage using one declared method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Phosphate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg P per 1,000 kg accepted output
  - Basis: declared runoff or drainage method
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Methane to air (`methane_air_emission`)

Methane is recorded only when residue storage, anaerobic treatment, or another documented pre-gate activity can produce a release.

- Selected flow: Methane emission to ambient air
- Flow property / unit: Mass / kg CH4
- Amount rule: Apply a declared method only to documented anaerobic residue or treatment conditions; use a justified zero or documented exclusion otherwise.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Methane-emission screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg CH4 per 1,000 kg accepted output
  - Basis: documented anaerobic residue or treatment route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Green pea harvest and gate preparation (`harvest_and_gate_preparation`)

This process includes picking, optional shelling, sorting, grading, washing, cooling, and primary packing only when the operation occurs before the declared gate. For podded peas, pod mass remains part of the product. For shelled peas, pod and shell mass must be recorded as separate output or residue streams.

#### Inputs

##### Product flows

###### Washing and conditioning water (`conditioning_water`)

Water used for washing, hydrocooling, or another included conditioning operation crosses the boundary at the conditioning line.

- Selected flow: Process water for washing or conditioning
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Record water in, reuse, discharge, and wash solids by lot or operating shift; distinguish process water from source withdrawal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_records`
- Sources: `ucdavis-edible-pod-peas-postharvest`
- Range: Conditioning-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: m3 per 1,000 kg accepted output
  - Basis: included washing or conditioning line throughput
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning and cooling electricity (`conditioning_electricity`)

Electricity for sorting, shelling, washing, cooling, cold holding, or packing is recorded when the operation is before the declared gate.

- Selected flow: Electricity supplied to conditioning and packing
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Allocate sub-metered or documented electricity to the included pea lot by throughput, operating time, or another declared physical basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_energy_records`
- Sources: `ucdavis-edible-pod-peas-postharvest`
- Range: Conditioning-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh per 1,000 kg accepted output
  - Basis: included sorting, shelling, washing, cooling, and packing operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary crates, pallets, or containers (`primary_crate_packaging`)

Reusable crates, pallets, and other rigid transport or presentation containers are recorded when supplied or consumed before the declared gate.

- Selected flow: Pallet and crate packaging function
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Record container material, tare, capacity, count, reuse cycles, return, and loss; allocate the documented burden to the pea lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`
- Range: Primary crate and pallet screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg allocated packaging per 1,000 kg accepted output
  - Basis: declared package tare, capacity, and reuse cycles
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary carton or box packaging (`primary_carton_packaging`)

Cartons and boxes are recorded when used for the fresh pea lot before the declared gate.

- Selected flow: Carton and box packaging function
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- Amount rule: Record material, package mass, capacity, count, and reuse or recycling state, then allocate to the pea lot by declared capacity or mass basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`
- Range: Primary carton screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg packaging per 1,000 kg accepted output
  - Basis: declared carton or box mass and throughput
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flexible primary packaging (`primary_flexible_packaging`)

Films, bags, liners, or other flexible primary packaging are recorded only when used before the declared gate.

- Selected flow: Flexible packaging function
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Record film or bag material, mass, count, lot assignment, and recycling or loss state.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`
- Range: Flexible-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg packaging per 1,000 kg accepted output
  - Basis: declared film or bag mass and throughput
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shelled pods, downgraded peas, and sorting rejects (`downgraded_and_shell_residue`)

Pod shells from an included shelling operation, downgraded pods or seeds, and sorting rejects are kept separate from accepted fresh product and assigned a documented fate.

- Selected flow: Green pea pod shells, downgraded produce, and sorting residues
- Flow property / unit: Mass / kg wet or dry matter
- Amount rule: Reconcile pod or seed input, accepted output, downgraded output, shell residue, foreign material, and process loss for each lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_grading_records`
- Sources: `unece-ffv-27-peas-2025`; `mass-balance-identity`
- Range: Downgrade and shell-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: kg wet residue per 1,000 kg accepted output
  - Basis: declared podded or shelled product form and lot-level mass reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wash solids and wastewater (`wash_solids_and_wastewater`)

Wash solids, soil, damaged produce, and wastewater are recorded when washing or conditioning occurs before the declared gate.

- Selected flow: Wash solids and wastewater from green pea conditioning
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Reconcile water in, reuse, discharge, wash solids, accepted product, rejects, and measured process loss by lot or shift.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_records`
- Sources: `mass-balance-identity`
- Range: Wash-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg solids or L wastewater per 1,000 kg accepted output
  - Basis: included conditioning line and lot-level mass or water balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Marketable fresh green peas before optional transport (`marketable_green_pea_dispatch`)

Accepted podded or shelled green peas leave the conditioning process at the declared pre-transport hand-off. The product form, accepted mass, and gate state are retained for any optional transport process.

- Selected flow: Marketable fresh green peas at pre-transport hand-off
- Flow property / unit: Mass / kg
- Amount rule: Sum net accepted mass after grading and any included shelling, washing, or cooling, excluding packaging tare.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_grading_records`
- Sources: `unece-ffv-27-peas-2025`; `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Purchased transport to declared gate (`purchased_transport_to_gate`)

This conditional process is included only when purchased transport crosses the foreground boundary between the production or conditioning hand-off and the declared gate. If the farm gate is the production-unit boundary, omit this process and use the harvest output as the declared reference flow.

#### Inputs

##### Product flows

###### Road freight service to declared gate (`road_transport_to_gate`)

Purchased road freight is recorded for product, packaging, or included materials transported before the declared gate.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / tkm
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Calculate loaded mass in tonnes multiplied by verified route distance in kilometres, and disclose return or backhaul assumptions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Sources: `mass-balance-identity`
- Range: Road-transport screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: tkm per 1,000 kg accepted output
  - Basis: loaded mass and verified pre-gate route distance
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh green peas at declared gate (`green_peas_at_declared_gate`)

The transport process delivers the declared reference product when purchased transport is included before the gate. Do not count this output a second time when the harvest process already ends at the declared gate.

- Selected flow: Fresh green peas, production mix, at declared gate, fresh and unprocessed
- Flow property / unit: Mass / kg
- Amount rule: Carry forward the net accepted mass from the pre-transport hand-off after documenting transport loss or rejected loads, if any.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted fresh green pea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_and_downgraded` | accepted peas, downgraded peas, shell residue, and rejects | Allocate shared crop-cycle inputs first to declared accepted green pea output using measured mass reconciliation. Report downgraded or rejected produce and shell residue separately; apply a co-product allocation only when a documented productive recipient exists. | `iso-14044-2006`; `unece-ffv-27-peas-2025` |
| `allocation_podded_and_shelled_forms` | podded and shelled green pea products | Keep podded and shelled forms separate when shelling changes the product boundary or output basis. If shared operations are aggregated, allocate them by measured mass or another declared physical relationship and retain form-specific evidence. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_multiple_cycles_or_types` | multiple plantings, cultivars, or harvest campaigns | Keep cycles and types separate when input regimes, route, grade, or gate differ. If aggregated, allocate shared operations by measured accepted mass or another declared physical basis. | `iso-14044-2006` |
| `allocation_reusable_packaging` | reusable crates, pallets, and containers | Allocate packaging burdens over documented reuse cycles and declared capacity or mass basis. Include return and loss records when attributable to the declared gate. | `iso-14044-2006` |
| `allocation_residue_use` | crop residue, shell residue, wash solids, and wastewater solids | Keep residue treatment and productive use separate from accepted product. Assign a credit only when recipient, intended use, substitution claim, and allocation method are documented. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | seed, planting water, land occupation, planting losses | supplier lot, planting log, field or compartment register | lot id; seed form; treatment; mass or viable count; type; planting date; area; crop cycle; unused and failed material | reconcile supplier records to planting-unit logs and retain lot documents | kg, count, m3, ha | each lot and planting event | complete establishment period | each field or protected unit | aggregate by planting campaign and production unit | supplier invoice; planting log; lot traceability |
| `cp_irrigation_records` | `crop_establishment` or `crop_management` | irrigation, fertigation water, source withdrawal, drainage | meter record, water balance, irrigation log | source; meter reading; delivered volume; rainfall; recirculation; drainage; discharge; area; date | read meters or reconstruct a documented water balance and reconcile source and delivered volumes | m3, mm, ha | each event or daily total | full crop cycle | each irrigation zone and production unit | sum by crop cycle and retain source and receiving-medium split | meter calibration; water-balance closure; operator log |
| `cp_nutrient_records` | `crop_management` | nutrient products and nutrient losses | invoice, product label, nutrient plan, application log | product; formulation; mass; moisture; nutrient concentration; date; area; application method; soil or drainage condition | reconcile purchase, storage, and application records; calculate nutrient equivalents | kg product, kg N, kg P2O5, kg K2O | each application | full crop cycle | each production unit and nutrient zone | aggregate by product, nutrient, and crop cycle | label or supplier specification; nutrient-plan review |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | application log and supplier record | product; active ingredient; concentration; mass or volume; date; treated area; purpose | reconcile application logs with supplier records and crop-protection plan | kg, L, ha | each application | full crop cycle | each field or crop zone | aggregate by product and active ingredient per crop cycle | operator record; product label; application authorization |
| `cp_energy_records` | `crop_management` | mobile fuel, stationary fuel, production electricity | fuel log, meter, invoice, equipment log | carrier; quantity; meter; operation; equipment; production unit; date; allocation basis | read meters or reconcile delivery and equipment records to included operations | L, kg, kWh, MJ | each delivery, meter period, or operation | full crop cycle | each production unit and included service | sum by carrier, operation, and crop cycle | meter record; invoice; conversion record |
| `cp_residue_fate_records` | `crop_management` | vines, roots, unharvested pods, and crop residues | residue log, contractor ticket, treatment record | residue type; wet mass; moisture; date; fate; recipient; transport; treatment | weigh or calculate residue and retain fate evidence | kg, percent, km | each removal or treatment event | crop termination and residue period | each production unit | aggregate by fate and crop cycle | weighbridge or contractor record; recipient declaration |
| `cp_harvest_grading_records` | `harvest_and_gate_preparation` | accepted, downgraded, rejected, pod shell, and dispatch output | harvest ticket, scale record, grading record | date; lot; harvest round; product form; gross mass; accepted mass; grade; shell mass; rejected mass; tare; gate state | use calibrated scale and lot-level grading and shelling reconciliation | kg, percent | each harvest lot or operating shift | full harvest campaign | each field, line, and product form | sum harvest rounds and reconcile gross, accepted, rejects, shells, and tare | scale check; grading record; lot traceability |
| `cp_washing_records` | `harvest_and_gate_preparation` | washing water, wash solids, wastewater, and conditioning rejects | water meter, wash log, waste ticket, drain record | lot; water in; reuse; discharge; solids; rejected produce; date; line; treatment route | reconcile input water, reused water, discharged wastewater, solids, and product output | m3, kg | each lot or shift | all included pre-gate conditioning | each conditioning line | aggregate by lot and gate period | meter record; waste ticket; water or mass-balance check |
| `cp_gate_energy_records` | `harvest_and_gate_preparation` | sorting, shelling, washing, cooling, and packing electricity | sub-meter, invoice, equipment log | line; operation; kWh; date; lot throughput; allocation basis | allocate metered energy to included pea throughput and retain line records | kWh, kg | each shift or meter period | all included pre-gate operations | each conditioning line | sum by operation and pea lot | sub-meter or invoice; throughput record |
| `cp_packaging_records` | `harvest_and_gate_preparation` | crates, pallets, cartons, boxes, films, and bags | packaging specification, issue log, return log | package type; material; tare; capacity; count; reuse cycles; return; loss; lot | reconcile issue and return records to lot throughput and reuse basis | kg, item, cycle | each issue and return event | full included gate period | each pack-house and route | allocate by capacity or documented mass basis | supplier specification; issue and return log |
| `cp_transport_records` | `purchased_transport_to_gate` | purchased road freight | transport order, bill, route record | material; loaded mass; origin; destination; distance; vehicle or service; return assumption; date | calculate tonne-kilometres from verified route and loaded mass | tkm, kg, km | each shipment | all included pre-gate shipments | each route and declared gate | aggregate by material and pea lot | bill of lading; route record; mass record |
| `cp_emission_records` | `crop_management` | ammonia, nitrous oxide, nitrate, phosphate, and methane | nutrient plan, drainage record, residue log, emission worksheet | N and P inputs; factor or method; soil or substrate; drainage; residue fate; receiving medium; date | calculate using one declared method and retain source fields and method version | kg nutrient; kg emission | each crop cycle or method period | full crop cycle and residue period | each production unit | aggregate by receiving medium and crop cycle | method worksheet; input reconciliation; receiving-medium evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_green_pea_output` | accepted product reference flow | Sum net accepted podded or shelled green pea mass by harvest lot after grading and any included shelling, washing, or cooling, excluding package tare. | harvest tickets; scale records; grade records; shelling records; tare | kg accepted fresh green peas | `unece-ffv-27-peas-2025` |
| `calc_mass_reconciliation` | harvest and gate preparation | Gross harvested or received mass = accepted product + downgraded or rejected produce + pod shells where applicable + trim and foreign material + measured process loss; investigate unexplained residual. | gross mass; accepted mass; rejects; shell residue; trim; loss; moisture basis | reconciled product and residue mass balance | `mass-balance-identity` |
| `calc_product_form_conversion` | podded and shelled product | Shelled edible output = podded input − shell residue − rejected or lost mass, after declaring the moisture and measurement basis. | pod input; shell mass; accepted seed; rejects; loss | accepted shelled green pea mass and shell residue | `mass-balance-identity` |
| `calc_nutrient_equivalents` | nutrient products | Nutrient mass = formulated product mass × documented nutrient concentration; retain product and nutrient bases separately. | product mass; label or supplier concentration; application date | kg N, kg P2O5, and kg K2O | `ipcc-2019-managed-soils` |
| `calc_water_balance` | irrigation, source withdrawal, washing, and drainage | Source withdrawal = delivered water + storage change + discharge or drainage − identified recirculated return, with units and period reconciled. | meter readings; delivery; rainfall; recirculation; drainage; storage change | m3 source withdrawal and delivered water | `fao-crop-evapotranspiration-56` |
| `calc_crop_cycle_normalization` | all crop-cycle amounts | Normalized amount = recorded or calculated amount ÷ accepted green pea output × 1,000 kg. Preserve production-unit, crop-cycle, and product-form denominators. | recorded amount; accepted output | amount per 1,000 kg accepted green peas | `mass-balance-identity` |
| `calc_nutrient_emissions` | direct and indirect nutrient emissions | Apply one declared method to documented nutrient inputs, soil or substrate conditions, drainage or runoff, and residue fate; do not sum overlapping factors. | nutrient inputs; method factors; drainage; runoff; residue fate | emissions by substance and receiving medium | `ipcc-2019-managed-soils` |
| `calc_reusable_packaging` | reusable crates and pallets | Allocated packaging burden = item burden ÷ documented reuse cycles × pea-lot share by capacity or declared mass basis. | item mass; reuse cycles; lot capacity or mass; return and loss records | kg packaging allocated to pea lot | `iso-14044-2006` |
| `calc_transport_service` | purchased road freight | Transport service = loaded mass in tonnes × verified route distance in kilometres; report return or backhaul assumption separately. | shipment mass; route distance; service record | tonne-kilometres | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_qualifiers` | reference flow and product lots | Declare pea form, type, cultivar group, route, geography, gate, maturity, tenderness, grade, and packaging state; retain evidence gap platform identity for later foreground resolution. | lot metadata; product specification; gate record |
| `quality_mass_closure` | harvest, shelling, rejects, residues, washing, and wastewater | Close the product and process mass balance for each represented crop cycle or document the unexplained difference and its effect on normalized values. | calibrated scale; mass-balance worksheet; waste ticket |
| `quality_temporal_coverage` | crop-cycle inputs and outputs | Cover the full planting-to-gate crop cycle and every harvest round; identify missing periods, substitutions, and averaging windows. | planting log; harvest log; meter periods |
| `quality_route_disclosure` | open-field and protected production | Identify route, occupied area, infrastructure attribution, recirculation, heating or lighting, substrate, drainage, and crop-termination treatment whenever included. | production-unit record; equipment log; route declaration |
| `quality_nutrient_traceability` | nutrient inputs and nutrient emissions | Link each nutrient value to a product record, concentration, application log, and declared emission method; distinguish product mass from nutrient mass. | invoice; label; nutrient plan; calculation worksheet |
| `quality_water_traceability` | irrigation, withdrawal, washing, and drainage | Identify source, meter or water-balance method, delivered volume, recirculation, drainage, discharge, and receiving medium. | meter record; water-balance closure; discharge record |
| `quality_product_form_and_grade` | podded and shelled output | Record product form, maturity, tenderness, colour, size or grade, accepted mass, shell residue where applicable, and defect tolerance for every lot. | harvest ticket; grade record; product specification |
| `quality_reject_and_residue_fate` | downgraded produce, shell residue, crop residue, wash solids, and wastewater | Record measured amount, moisture basis where relevant, destination, treatment, transport, and recipient evidence for every non-product stream. | waste ticket; contractor record; recipient declaration |
| `quality_energy_and_transport` | fuel, electricity, and purchased transport | Retain carrier or service type, quantity, operation, route, date, meter or shipment evidence, and allocation basis. | invoice; meter record; bill of lading; route record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | reference flow and accepted output | Require 1,000 kg net accepted fresh green peas as the normalized reference amount and preserve the declared podded or shelled product form and gate state. | `unece-ffv-27-peas-2025` |
| `validation_mass_reconciliation` | harvest, shelling, and gate-preparation inventory | Check that accepted output, downgraded or rejected produce, pod shells where applicable, residues, trim, wastewater solids, and process losses reconcile with gross harvested or received mass within documented measurement tolerance. | `mass-balance-identity` |
| `validation_crop_cycle_completeness` | crop establishment and crop management | Reject a dataset that omits a represented planting campaign, harvest round, or route-specific input without a justified zero or documented exclusion. | `unece-ffv-27-peas-2025` |
| `validation_product_form` | podded and shelled products | Check that product form, shelling boundary, accepted output, shell residue, moisture basis, and product qualifiers are consistent throughout the process inventory and dataset metadata. | `mass-balance-identity`; `unece-ffv-27-peas-2025` |
| `validation_nutrient_basis` | nutrient products and nutrient emissions | Check product mass, nutrient concentration, nutrient amount, application timing, and declared emission method before accepting nitrogen, ammonia, nitrate, or phosphate values. | `ipcc-2019-managed-soils` |
| `validation_water_balance` | irrigation, source withdrawal, washing, and drainage | Check units, source, meter or balance period, delivered water, recirculation, discharge, and receiving medium; investigate negative or unexplained balances. | `fao-crop-evapotranspiration-56` |
| `validation_gate_state` | reference product and boundary | Check that shelling, grading, washing, cooling, packaging, and transport are included only when before the declared gate and disclosed in metadata. | `unece-ffv-27-peas-2025`; `ucdavis-edible-pod-peas-postharvest` |
| `validation_range_screen` | important inventory rows | Compare site values with the row range or documented evidence. Values outside a range require an explanation, revised evidence, or an explicit scenario declaration. | `unece-ffv-27-peas-2025`; `fao-crop-evapotranspiration-56` |
| `validation_residue_fate` | rejects, shell residue, crop residue, wash solids, and wastewater | Require a fate and destination for each non-product stream; do not apply a credit without documented productive use, recipient, and allocation treatment. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground fresh green pea production dataset that may be published as a `secondary_dataset` and used as a documented agricultural production input |
| downstream_use | Downstream process and lifecyclemodel construction for fresh whole green peas at the same declared gate and compatible route, geography, period, product form, and quality qualifiers |
| allowed_use | Comparative or attributional LCA when crop-cycle completeness, gate state, product-form conversion, mass reconciliation, nutrient basis, water balance, and residue fate are disclosed |
| excluded_use | Dry, frozen, canned, dried, cooked, retail, consumer, or materially different pea routes without an explicit transformation, preservation, storage, or reallocation model |
| required_metadata | canonical PCR id; reference amount; podded or shelled form; pea type or cultivar group; geography; production route; planting and harvest dates; gate; maturity and grade; accepted, rejected, shell, residue, and wastewater masses; irrigation source and method; nutrient basis; crop-protection program; energy and transport; packaging and reuse; platform identity resolution status |
| required_quality_disclosure | temporal coverage; site and production-unit coverage; measurement and mass-balance closure; product form and route; water and nutrient evidence; residue fate; missing data; ranges used; allocation; uncertainty fields |
| update_trigger | new product form or route, material changes in irrigation or fertigation, heating or lighting, crop-protection regime, shelling or grading boundary, packaging system, residue fate, source method, or verified product and flow identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unece-ffv-27-peas-2025` | standard | UNECE, Standard FFV-27 concerning the marketing and commercial quality control of peas, 2025, https://unece.org/trade/documents/1962/02/standards/peas; retrieved 2026-09-14 | fresh pea product form, maturity, tenderness, colour, quality, grade, and market-state qualifiers |
| `ucdavis-edible-pod-peas-postharvest` | official_guidance | UC Davis Postharvest Research and Extension Center, Peas: Snow and Snap Pod, https://postharvest.ucdavis.edu/ar/produce-facts-sheets/peas-snow-and-snap-pod; retrieved 2026-09-14 | harvest timing, perishability, cooling, packaging, and pre-gate conditioning considerations for fresh edible-pod peas |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO, Crop evapotranspiration: Guidelines for computing crop water requirements, Irrigation and drainage paper 56, https://www.fao.org/4/X0490E/X0490E00.htm; retrieved 2026-09-14 | irrigation measurement, crop water balance, and conversion from crop water requirement to recorded deliveries |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html; retrieved 2026-09-14 | managed-soil nitrogen emission pathways and calculation-method selection |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html; retrieved 2026-09-14 | allocation, co-product, attribution, packaging reuse, and data-quality principles |
| `mass-balance-identity` | method_factor | PCR mass-balance reconciliation method: gross harvested or received mass equals accepted product plus separately recorded downgraded, residue, treatment, and unexplained loss streams | product-form conversion, normalization, transport, and validation mass closure |
