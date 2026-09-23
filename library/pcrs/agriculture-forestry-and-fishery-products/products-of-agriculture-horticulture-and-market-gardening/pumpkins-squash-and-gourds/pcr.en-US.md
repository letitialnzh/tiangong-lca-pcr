---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pumpkins-squash-and-gourds
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pumpkins, squash and gourds

## 1. Scope and Applicability

This PCR guides foreground data package construction for fresh, unprocessed pumpkins, squash, and gourds produced in a declared crop cycle and transferred at a farm-gate hand-off. It covers the field operation from planting-material acceptance through harvest and any primary handling performed before that hand-off. The product identity, cultivar or type, production geography, crop cycle, harvest state, grade, and destination must be declared for each represented lot.

The default route includes field preparation, crop establishment, cultivation, irrigation, nutrient application, crop protection, harvest, field handling, grading, and optional on-farm washing, cooling, or primary packaging. Seed multiplication, nursery production before planting-material acceptance, land-use change, distribution, retail, cooking, canning, freezing, drying, pickling, fermentation, and other processing are outside the default boundary. A protected or highly controlled cultivation route is included only when its site-specific infrastructure and energy are explicitly described.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pumpkins-squash-and-gourds |
| classification_refs | CPC 3.0: 01235 Pumpkins, squash and gourds |
| covered_products | Fresh marketable pumpkins, squash, and gourds transferred at the declared farm-gate hand-off |
| excluded_products | Seed and planting material sold for propagation; leaves, vines, and other non-product biomass; processed, cooked, frozen, dried, pickled, fermented, canned, or retail-prepared products; downstream transport and distribution |
| representative_product | Fresh saleable pumpkin, squash, or gourd at farm gate |
| production_route | Soil-based or declared protected crop establishment, managed field cultivation, harvest, grading, and optional primary conditioning before farm-gate transfer |
| market_state | Fresh and unprocessed product in the declared cultivar or type, maturity, grade, trimming, washing, cooling, and packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh marketable pumpkins, squash, or gourds at the declared farm-gate hand-off |
| How much | 1,000 kg |
| How well | Product is fresh, unprocessed, saleable, and identified by product type, cultivar or variety, maturity, grade, defect tolerance, moisture state, trimming state, and packaging state |
| How long or cycle | One declared crop cycle and harvest year, with storage duration declared when storage occurs before the farm-gate hand-off |
| reference_flow_link | `fresh_pumpkins_squash_gourds_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Pumpkins, squash and gourds, production mix, at farm gate, fresh and unprocessed `3a4e98fe-5b66-4d67-bee1-78dfe01b672f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product type; cultivar or variety; production geography; crop year and cycle dates; cultivation system; irrigated or rain-fed status; harvest maturity; grade and size; moisture basis; trimming and washing state; cooling and storage duration; packaging state; farm-gate hand-off |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. The reference product identity is platform-verified for CPC 3.0 01235.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | marketable product and all product, reject, trim, and loss mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh product on the declared farm-gate state. Keep harvested mass, marketable output, rejects, trims, and field losses separate before normalization. |
| `crop_identity_separation` | pumpkin, squash, and gourd records | Product identity | declared product type | Record each product type and cultivar or variety separately. Aggregate types only after each lot has a reconciled crop-cycle inventory and a documented aggregation rule. |
| `nutrient_product_basis` | fertilizer and organic amendment inputs | Mass and nutrient content | kg product and kg nutrient | Record formulated product mass and documented nutrient concentration separately; calculate nutrient quantities from the same lot record and retain the stated nutrient basis. |
| `water_delivery_basis` | irrigation and natural water withdrawal | Volume | m3 | Record source-specific withdrawal and delivered irrigation separately from rainfall, and disclose source, meter or estimate basis, application method, and crop cycle. |
| `land_occupation_basis` | occupied crop area | Area-time | ha·crop cycle | Record field area and occupied crop period before normalizing land occupation to the crop cycle and reference output. |
| `moisture_and_conditioning_basis` | harvest, washing, cooling, storage, and packing | Mass and moisture | kg and percent | Retain as-is mass and measured moisture or water gain or loss. Do not use washing or cooling mass change as product yield without a documented reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Seed, transplant, or other planting material accepted for establishment in the declared production field, with prior land use and any nursery stage disclosed |
| starting_condition_role | Beginning of the declared pumpkin, squash, or gourd crop cycle |
| product_classification_scope | Fresh pumpkins, squash, and gourds classified under CPC 3.0 01235 through farm-gate hand-off |
| recursive_input_rule | A product-category material used as a planting or market input is recorded at its actual hand-off state and linked to its upstream dataset; the upstream crop boundary is not recreated inside this record. |
| upstream_dataset_requirement | Use representative upstream datasets for planting material, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, transport services, and waste treatment when they cross the boundary. |
| disclosure | Declare product type, cultivar or variety, field and production geography, crop year, crop duration, planting material, irrigation source and method, nutrient basis, crop-protection program, cultivation system, harvest and grading method, washing or cooling, storage, packaging, yield, residue and reject fates, and farm-gate state. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | field preparation and crop production | Include inputs and emissions attributable to the declared crop cycle from planting-material acceptance through harvest; disclose prior land use and exclude unrelated historical field burdens. | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_farm_gate` | harvest and primary handling | End the default boundary at transfer of fresh marketable product at the declared farm gate. Include trimming, sorting, washing, cooling, storage, and primary packaging only when they occur before transfer. | `usda-ams-pumpkins-standard`; `fao-good-agricultural-practices-vegetables` |
| `boundary_input_completeness` | all foreground production | Address planting material, nutrients, crop protection, irrigation, land occupation, field and harvest energy, primary handling utilities, packaging, and direct field emissions with a value, justified zero, or documented exclusion. | `fao-good-agricultural-practices-vegetables`; `ipcc-2019-managed-soils-n2o` |
| `boundary_residue_fate` | field residues, rejects, trims, and washing residues | Identify whether each residue stream is returned to soil, left in field, fed, composted, treated, transported, sold, or discarded. Do not treat an unqualified residue as a co-product. | `iso-14044-2006`; `fao-good-agricultural-practices-vegetables` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_establishment_and_cultivation` | Field establishment and cultivation | required | every represented field and crop year | foreground managed biological production | field area, crop cycle, input records, and harvested crop output |
| `harvest_and_field_handling` | Harvest and field handling | required | every represented harvest lot | foreground harvesting, field handling, grading, and yield reconciliation | 1,000 kg marketable fresh product |
| `on_farm_primary_conditioning` | On-farm primary conditioning | conditional | when washing, cooling, storage, or packaging occurs before farm-gate transfer | foreground primary conditioning | conditioned output at the declared hand-off |

### Process: Field establishment and cultivation (`field_establishment_and_cultivation`)

#### Inputs

##### Product flows

###### Planting material (`planting_material_input`)

Seed, transplants, or other planting material cross the boundary when accepted for establishment in the declared field. Record product type, quantity, viable-unit count where relevant, and treatment status.

- Selected flow: Pumpkin, squash, or gourd seed or transplant material
- Flow property / unit: Mass or count / kg or viable plant
- Amount rule: Record purchased or internally transferred quantity and planted quantity by field, crop type, and cycle; retain failed or rejected planting material separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_planting_material_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Planting-material screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 20
  - Unit: kg seed or 1,000 viable plants per 1,000 kg product
  - Basis: per 1,000 kg marketable farm-gate product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`field_establishment_and_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-good-agricultural-practices-vegetables`
- Range: Nitrogen input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg N/ha
  - Basis: represented field and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Phosphorus input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg P2O5/ha
  - Basis: represented field and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Potassium input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 700
  - Unit: kg K2O/ha
  - Basis: represented field and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Organic amendment screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg product/ha
  - Basis: represented field and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water_input`)

Source-specific water delivered to the crop is recorded separately from rainfall and from the source withdrawal used to supply it.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or documented deliveries by field and crop cycle; record pumping energy separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_water_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Irrigation water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: m3/ha
  - Basis: represented field and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery fuel (`field_fuel_input`)

Fuel used by tractors, pumps, sprayers, and other mobile field equipment is recorded from fuel logs, invoices, or equipment records by field and crop cycle.

- Selected flow: Fuel for mobile agricultural machinery
- Flow property / unit: Energy carrier or mass / L, kg, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel deliveries or equipment-specific consumption allocated to the represented field and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Field-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: L diesel/ha
  - Basis: represented field and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field electricity (`field_electricity_input`)

Electricity used for irrigation pumps, fans, or other field equipment is recorded separately from fuel when it crosses the foreground boundary.

- Selected flow: Electricity supply for field operations
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum meter readings or supplier records for the represented field and crop cycle and document allocation when a meter serves multiple fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Field-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 800
  - Unit: kWh/ha
  - Basis: represented field and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop protection products (`crop_protection_input`)

Each herbicide, insecticide, fungicide, biological control, or adjuvant product is recorded by formulation, active ingredient, application rate, and treated area where available.

- Selected flow: Crop protection product
- Flow property / unit: Mass of formulated product / kg product
- Amount rule: Record each product and application event; retain formulation, active ingredient, treated area, and documented application rate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Crop-protection product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg formulated product/ha
  - Basis: represented field and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Planting material loss (`planting_material_loss`)

Failed, spoiled, or rejected planting material is recorded when it leaves the crop establishment activity, with its fate identified.

- Selected flow: Planting material loss
- Flow property / unit: Mass or count / kg or viable plant
- Amount rule: Weigh or count rejected planting material and record field return, composting, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_planting_material_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Planting-material loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: percent of planting material supplied
  - Basis: crop establishment input
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Cultivated land occupation (`cultivated_land_occupation`)

The crop field occupies land for the declared crop cycle and is linked to the field area and cycle dates.

- Selected flow: Cultivated land occupation
- Flow property / unit: Area-time / ha·crop cycle
- Amount rule: Field area multiplied by the declared crop occupation period and allocated to the represented crop cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_area_and_cycle_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Cultivated-area screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 10
  - Unit: ha per 1,000 kg product
  - Basis: marketable crop output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation source withdrawal (`irrigation_source_withdrawal`)

Water withdrawn from a natural or supplied source is recorded as an elementary input when the withdrawal crosses the environmental boundary.

- Selected flow: Water resource withdrawn for irrigation
- Flow property / unit: Volume / m3
- Amount rule: Record source-specific withdrawal and reconcile it with delivered irrigation and measured distribution losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_water_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Natural-water withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2500
  - Unit: m3/ha
  - Basis: represented field and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Elementary flows

###### Direct nitrous oxide emission (`direct_n2o_emission`)

Direct soil nitrous oxide emissions associated with nutrient additions are calculated from documented nutrient inputs and the selected method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O or kg N2O-N
- Amount rule: Apply the selected documented soil-emission method to nutrient inputs and site conditions; retain the N2O versus N2O-N basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Direct N2O screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg N2O-N/ha
  - Basis: documented nutrient input and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-managed-soils-n2o`

###### Ammonia volatilization (`ammonia_emission`)

Ammonia emitted from nutrient applications is calculated or measured when the selected method includes volatilization.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: Apply the selected documented volatilization method to the nutrient application records and site conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Ammonia screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 60
  - Unit: kg NH3-N/ha
  - Basis: documented nutrient input and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-managed-soils-n2o`

###### Nitrate leaching or runoff (`nitrate_water_emission`)

Nitrate leaving the cultivated soil to water is recorded or calculated when water movement and nutrient loss are represented.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate or kg N
- Amount rule: Calculate or measure nitrate loss from nutrient inputs, drainage, soil tests, and the selected site method; retain the nitrate versus N basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg nitrate-N/ha
  - Basis: documented nutrient input and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate runoff (`phosphate_water_emission`)

Phosphate leaving the crop soil to water is recorded or calculated where runoff or drainage pathways are relevant.

- Selected flow: Phosphate emission to water
- Flow property / unit: Mass / kg phosphate or kg P
- Amount rule: Calculate or measure phosphate loss from nutrient inputs, runoff observations, soil tests, and the selected site method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Phosphate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg P/ha
  - Basis: documented nutrient input and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fossil carbon dioxide from field energy (`field_co2_emission`)

Fossil carbon dioxide from fuel or purchased energy used in cultivation is calculated from the recorded energy input and the selected factor source.

- Selected flow: Fossil carbon dioxide emission to ambient air
- Flow property / unit: Mass / kg CO2
- Amount rule: Multiply recorded fossil fuel or energy input by the selected documented emission factor and keep biogenic carbon separate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2006-volume-4-crops`
- Range: Field-energy CO2 screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2500
  - Unit: kg CO2/ha
  - Basis: recorded field energy and crop cycle
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and field handling (`harvest_and_field_handling`)

#### Inputs

##### Product flows

###### Harvested crop biomass (`harvested_crop_input`)

Harvested pumpkins, squash, and gourds enter field handling for weighing, grading, and yield reconciliation before the farm-gate hand-off.

- Selected flow: Harvested pumpkins, squash, and gourds, ungraded
- Flow property / unit: Mass / kg
- Amount rule: Weigh harvested lots before grading and record product type, maturity, field, and harvest date.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_yield_records`
- Sources: `usda-ams-pumpkins-standard`
- Range: Harvested-to-marketable yield screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 3000
  - Unit: kg harvested crop per 1,000 kg marketable product
  - Basis: reconciled crop output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and handling fuel (`harvest_fuel_input`)

Fuel for harvesting equipment and field handling is recorded when used before the farm-gate hand-off.

- Selected flow: Fuel for mobile harvesting and handling machinery
- Flow property / unit: Energy carrier or mass / L, kg, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel use assigned to harvest lots and field handling activities before the declared hand-off.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Harvest-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: L diesel per 1,000 kg marketable product
  - Basis: harvest and field handling
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest reject (`harvest_reject_output`)

Product rejected during harvest or field grading is recorded as a separate waste stream and linked to its downstream fate.

- Selected flow: Harvest or field-grading reject
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected product by reason or grade where feasible and record whether it is returned to soil, fed, composted, sold into another route, treated, or discarded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested crop input
- Basis kind: process_output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_yield_records`
- Sources: `usda-ams-pumpkins-standard`; `iso-14044-2006`
- Range: Harvest-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: percent of harvested crop input
  - Basis: harvested crop input
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field residue (`field_residue_output`)

Vines, leaves, damaged fruit, and other crop residue leaving harvest or field handling are recorded with their field or downstream fate.

- Selected flow: Pumpkin, squash, or gourd crop residue
- Flow property / unit: Mass / kg wet biomass
- Amount rule: Estimate or weigh residue by field and record return to soil, removal, feed, composting, treatment, or disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_fate_records`
- Sources: `iso-14044-2006`; `fao-good-agricultural-practices-vegetables`
- Range: Field-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg wet residue per 1,000 kg marketable product
  - Basis: crop-cycle harvest output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Elementary flows

###### Harvest dust emission (`harvest_dust_emission`)

Dust or particulate released during harvesting and field handling is recorded or estimated when the activity creates a material air-emission pathway.

- Selected flow: Particulate matter emission to ambient air
- Flow property / unit: Mass / kg particulate matter
- Amount rule: Use measured emissions when available or document the selected estimation method and activity basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_energy_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Harvest-particulate screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg particulate matter/ha
  - Basis: harvest and field handling activity
  - Basis kind: crop_cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: On-farm primary conditioning (`on_farm_primary_conditioning`)

#### Inputs

##### Product flows

###### Harvested product for conditioning (`conditioning_product_input`)

Harvested product enters washing, cooling, storage, or packaging only when the activity is performed before the farm-gate hand-off.

- Selected flow: Harvested pumpkins, squash, and gourds for primary conditioning
- Flow property / unit: Mass / kg
- Amount rule: Weigh incoming product at the conditioning boundary and reconcile it to the harvest and field-handling record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_output_records`
- Sources: `usda-ams-pumpkins-standard`
- Range: Conditioning input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1200
  - Unit: kg per 1,000 kg conditioned product
  - Basis: conditioning output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water (`conditioning_water_input`)

Water used for washing or other primary conditioning is recorded separately from irrigation water and source withdrawal.

- Selected flow: Process water for washing or conditioning
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum metered or documented conditioning water use by lot and conditioning run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Conditioning-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3 per 1,000 kg conditioned product
  - Basis: conditioning output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`conditioning_electricity_input`)

Electricity used for washing pumps, cooling, sorting, or storage is recorded when those activities occur before transfer.

- Selected flow: Electricity supply for primary conditioning
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Sum meter readings or supplier records for the conditioning run and allocate shared equipment use by product mass or operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Conditioning-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kWh per 1,000 kg conditioned product
  - Basis: conditioning output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging material (`primary_packaging_input`)

Packaging used to protect or present the product before the declared farm-gate hand-off is recorded by material and package format.

- Selected flow: Primary packaging material
- Flow property / unit: Mass / kg packaging material
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Record package count and mass by material and product lot; disclose reusable packaging cycles and return rates.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_packaging_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Primary-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg packaging/1,000 kg packaged product
  - Basis: packaged farm-gate output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Conditioning reject (`conditioning_reject_output`)

Product rejected during washing, cooling, storage, or final grading is weighed separately and linked to its downstream fate.

- Selected flow: Primary-conditioning or final-grading reject
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected product by lot and record rework, downgrade, sale into another route, composting, treatment, or disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_output_records`
- Sources: `usda-ams-pumpkins-standard`; `iso-14044-2006`
- Range: Conditioning-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: percent of conditioning input
  - Basis: conditioning input
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning wastewater (`conditioning_wastewater_output`)

Water leaving washing or conditioning is recorded as waste when it crosses the foreground boundary, together with suspended solids or treatment destination information when available.

- Selected flow: Conditioning wastewater
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Record discharged or transferred wastewater volume and identify on-site treatment, sewer, land application, or other destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Conditioning-wastewater screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: m3 per 1,000 kg conditioned product
  - Basis: conditioning output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging waste (`packaging_waste_output`)

Packaging losses and discarded single-use packaging leaving the conditioning activity are recorded separately from the product output.

- Selected flow: Packaging waste
- Flow property / unit: Mass / kg packaging waste
- Amount rule: Record packaging damaged or discarded during the represented conditioning run and identify its downstream waste route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_packaging_records`
- Sources: `iso-14044-2006`
- Range: Packaging-waste screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: percent of packaging supplied
  - Basis: packaging input
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conditioned farm-gate product (`conditioned_product_output`)

The accepted product leaves primary conditioning at the declared fresh, unprocessed farm-gate state when conditioning is included in the boundary.

- Selected flow: Fresh pumpkins, squash, or gourds, conditioned farm-gate output
- Flow property / unit: Mass / kg
- Amount rule: Weigh accepted product after the included washing, cooling, storage, grading, and packaging steps and reconcile it to all conditioning inputs and rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_output_records`
- Sources: `usda-ams-pumpkins-standard`
- Range: Conditioned-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg per 1,000 kg reference product
  - Basis: PCR reference flow
  - Basis kind: reference_flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

###### Conditioning particulate emission (`conditioning_particulate_emission`)

Particulate released by dry handling, grading, or packing is recorded when the activity creates a material emission pathway.

- Selected flow: Particulate matter emission to ambient air
- Flow property / unit: Mass / kg particulate matter
- Amount rule: Use measured emissions when available or document the selected estimation method and activity basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-good-agricultural-practices-vegetables`
- Range: Conditioning-particulate screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg particulate matter per 1,000 kg conditioned product
  - Basis: conditioning output
  - Basis kind: process_output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | single product crop lots | Keep all burdens with the represented pumpkin, squash, or gourd product when no separately marketed co-product leaves the declared boundary. | `iso-14044-2006` |
| `allocation_marketed_coproduct` | separately marketed seeds, fruit, or other outputs | Identify every separately marketed co-product, quantify each output at its hand-off state, and apply the study's documented physical or economic allocation method consistently across the represented lot. | `iso-14044-2006` |
| `allocation_residue_and_reject` | residues, rejects, trims, and losses | Keep residues, rejects, trims, and losses as waste or residue flows unless a documented downstream market and co-product decision supports another treatment. Do not count the same mass as both accepted product and co-product. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `field_establishment_and_cultivation` | planting material and planting material loss | seed invoices, transplant receipts, planting log | product type; cultivar; supplier or source; quantity; viable-unit count; treatment; field; date; loss and fate | collect invoices and field planting logs; reconcile supplied, planted, and rejected quantities | kg or viable plant | each delivery and planting event | declared crop cycle | each represented field | aggregate by field, product type, and crop cycle | invoice or transfer record plus planting log |
| `cp_nutrient_application_records` | `field_establishment_and_cultivation` | nutrient inputs and nutrient-derived emissions | input invoice, product label, application log, soil or emission record | product; nutrient analysis; amount; field; date; application method; soil or drainage observations | collect supplier records and field logs; calculate nutrient quantities and method-based emissions | kg product, kg nutrient, or kg emission | each application and crop cycle | declared crop cycle and method period | each represented field | sum by nutrient, field, and crop cycle | product analysis and application record |
| `cp_irrigation_and_water_records` | `field_establishment_and_cultivation` | irrigation water and source withdrawal | meter log, delivery record, pump log, source record | source; withdrawal; delivered volume; meter; application method; field; date; distribution loss | collect meter or delivery records and reconcile source withdrawal to delivered water | m3 | each irrigation event or monthly where metering supports it | declared crop cycle | each water source and field | sum by source and field, retaining withdrawal and delivery separately | meter record or documented estimation basis |
| `cp_field_energy_records` | `field_establishment_and_cultivation` | field fuel and electricity | fuel log, invoice, equipment log, electricity meter | carrier; amount; equipment; field; operating hours; date; meter; allocation basis | collect direct records and allocate shared equipment by operating time, area, or measured use | L, kg, MJ, or kWh | each delivery or monthly | declared crop cycle | represented field or shared farm asset | aggregate by carrier and field after allocation | invoice, meter, or equipment record |
| `cp_crop_protection_records` | `field_establishment_and_cultivation` | crop protection products | product inventory and application log | formulation; active ingredient; amount; rate; treated area; field; date; weather or method note | collect product and application records for each event | kg product or kg active ingredient | each application event | declared crop cycle | each represented field | sum by formulation and active ingredient | product label and application record |
| `cp_land_area_and_cycle_records` | `field_establishment_and_cultivation` | land occupation | field register and crop calendar | field area; planting date; harvest date; crop cycle; protected or open field state | collect field boundary and calendar records; calculate area-time occupation | ha·crop cycle | each field and crop cycle | declared crop cycle | each represented field | calculate occupied area-time before output normalization | field register and crop calendar |
| `cp_harvest_and_yield_records` | `harvest_and_field_handling` | harvested crop, reject, and residue | harvest ticket, weighbridge record, grade log | field; lot; product type; date; harvested mass; grade; reject; residue; fate | weigh or document each harvest lot and reconcile grades and fates | kg | each harvest lot | declared harvest period | each represented field and lot | aggregate by product type, field, and crop cycle | scale record and grade or fate log |
| `cp_harvest_energy_records` | `harvest_and_field_handling` | harvest fuel and particulate activity | fuel log, equipment record, emission observation | carrier; amount; equipment; harvest lot; operating hours; method; date | collect direct energy records and document any emission estimate method | L, kg, MJ, or kg particulate | each harvest event or monthly | declared harvest period | represented harvest equipment | allocate shared use by operating time or lot mass | fuel record and equipment log |
| `cp_residue_and_reject_fate_records` | `harvest_and_field_handling` | field residue and reject fate | fate log, transfer receipt, field observation | stream; mass; moisture; fate; destination; date; field; lot | weigh or estimate each stream and retain the declared destination | kg wet biomass | each harvest lot or fate event | declared harvest period | each represented field | aggregate by stream and fate without double counting | fate record or documented field observation |
| `cp_conditioning_input_output_records` | `on_farm_primary_conditioning` | conditioning product, reject, and accepted output | batch ticket, scale record, grade log | lot; input mass; output mass; reject mass; process date; product state; grade; destination | weigh each conditioning batch and reconcile all outputs | kg | each conditioning batch | declared conditioning period | each represented conditioning line | aggregate by lot and product type after mass reconciliation | scale record and batch ticket |
| `cp_conditioning_water_records` | `on_farm_primary_conditioning` | conditioning water and wastewater | water meter, discharge log, treatment record | water input; wastewater output; source; meter; treatment; date; batch | collect water and discharge records and reconcile input and output volumes | m3 | each batch or metered reporting period | declared conditioning period | each conditioning line | sum by batch and destination | meter and discharge or treatment record |
| `cp_conditioning_energy_records` | `on_farm_primary_conditioning` | conditioning electricity and particulate activity | electricity meter, equipment log, emission observation | carrier; amount; equipment; batch; operating hours; date; allocation basis | collect direct energy records and allocate shared use by operating time or batch mass | kWh, MJ, or kg particulate | each batch or metered reporting period | declared conditioning period | each conditioning line | aggregate by carrier and product lot | meter or equipment record |
| `cp_primary_packaging_records` | `on_farm_primary_conditioning` | primary packaging and packaging waste | packaging invoice, issue log, waste log | material; format; count; mass; reuse cycles; lot; damaged mass; fate | collect material and issue records and reconcile supplied, used, and discarded packaging | kg packaging or item count | each delivery and conditioning batch | declared conditioning period | each conditioning line | aggregate by material and product lot | supplier specification and issue or waste record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all inventory rows | Divide the reconciled process amount by accepted marketable farm-gate product mass and multiply by 1,000 kg. | process amount; accepted product mass | amount per 1,000 kg reference product | `mass-balance-identity` |
| `calculate_nutrient_quantity` | nutrient inputs | Multiply formulated product mass by the documented nutrient fraction and retain the declared N, P or P2O5, and K or K2O basis. | product mass; nutrient analysis | nutrient mass | `fao-good-agricultural-practices-vegetables` |
| `calculate_nutrient_emissions` | direct N2O, NH3, nitrate, and phosphate rows | Apply the selected documented emission or loss method to collected nutrient inputs and site conditions; do not use an unqualified default when a site method is declared. | nutrient input; site method inputs | emission or loss amount | `ipcc-2019-managed-soils-n2o` |
| `calculate_fossil_energy_emissions` | field and conditioning energy | Multiply recorded fossil energy by the selected factor source and keep biogenic carbon separate. | fossil energy record; factor | fossil CO2 amount | `ipcc-2006-volume-4-crops` |
| `reconcile_harvest_outputs` | harvest and conditioning outputs | Sum accepted product, rejects, residues, trims, and documented losses and compare with the corresponding input mass within the declared measurement tolerance. | input mass; output mass components | reconciled output and loss record | `mass-balance-identity` |
| `calculate_land_occupation` | cultivated land occupation | Multiply represented field area by the declared crop occupation period and normalize to accepted product mass. | field area; crop dates; accepted product mass | area-time per 1,000 kg product | `fao-crop-evapotranspiration-56` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_product_identity` | all product rows | Declare pumpkin, squash, or gourd type, cultivar or variety, lot, grade, maturity, and farm-gate state; do not merge unlike product states before reconciliation. | product specification and lot records |
| `quality_mass_reconciliation` | harvest and conditioning | Reconcile field harvest, accepted output, reject, residue, trim, wastewater, packaging, and documented losses at each process hand-off. | weighbridge, scale, batch, and fate records |
| `quality_input_completeness` | field and conditioning inputs | Provide direct records, a justified zero, or a documented exclusion for planting material, nutrients, crop protection, water, land, energy, and packaging. | field register, invoices, meters, logs, and exclusion note |
| `quality_temporal_geographic_scope` | all rows | Identify field, site, production geography, crop cycle, harvest period, and any storage or conditioning period represented by each record. | field and crop calendar plus batch records |
| `quality_method_and_factor_disclosure` | calculated emissions and conversions | Record the method, factor basis, nutrient basis, moisture basis, and any allocation or shared-meter calculation used to derive values. | calculation worksheet and cited method source |
| `quality_uncertainty_and_estimate_label` | estimated or modelled rows | Mark estimates, assumptions, and ranges as provisional and replace them with measured or reviewed records when available. | data-quality note and supporting record status |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_product_identity` | reference product and all product rows | Confirm product type, cultivar or variety, crop cycle, geography, maturity, grade, moisture, and farm-gate state are declared and consistent across linked records. | `usda-ams-pumpkins-standard` |
| `validation_mass_balance` | field harvest and primary conditioning | Confirm each process hand-off reconciles input mass to accepted product, rejects, residues, trims, wastewater where applicable, packaging, and documented losses without double counting. | `mass-balance-identity` |
| `validation_reference_normalization` | all normalized amounts | Confirm every normalized amount uses accepted marketable farm-gate product as the denominator and is expressed per 1,000 kg reference product. | `mass-balance-identity` |
| `validation_boundary_disclosure` | dataset metadata and process notes | Confirm the starting condition, included operations, farm-gate hand-off, prior land use, storage or conditioning, residue fates, and exclusions are disclosed. | `fao-good-agricultural-practices-vegetables`; `iso-14044-2006` |
| `validation_calculated_emissions` | nutrient and energy emissions | Confirm each calculated emission identifies its activity input, method or factor source, unit basis, and calculation record; do not silently substitute a different basis. | `ipcc-2019-managed-soils-n2o`; `ipcc-2006-volume-4-crops` |
| `validation_parameterized_identity_resolution` | all parameterized rows and reference flow | Resolve each parameterized Flow Set row to a verified UUID during foreground data generation and retain the selected property, unit, geography, and intended-use checks. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Foreground crop inventory construction and downstream process or lifecyclemodel projections for fresh pumpkins, squash, and gourds |
| allowed_use | Farm-gate datasets that preserve product identity, crop-cycle scope, measured or calculated inputs, direct emissions, output reconciliation, and declared conditioning or packaging state |
| excluded_use | Processed food products; seed or nursery datasets; distribution, retail, cooking, or end-of-life studies; datasets with evidence gap product state or missing output reconciliation |
| required_metadata | canonical PCR id; CPC reference; product type and cultivar; field and production geography; crop cycle and harvest period; cultivation system; planting material; irrigation source and method; nutrient and crop-protection records; energy; yield; reject and residue fates; conditioning; packaging; farm-gate state |
| required_quality_disclosure | Data source and measurement method; temporal and geographic representativeness; estimated or missing values; nutrient, moisture, and emission-factor basis; allocation decision; parameterized-flow UUID resolution status; uncertainty and range treatment |
| update_trigger | Change in product boundary, crop route, classification scope, Flow Set taxonomy, emission method, measurement convention, or material evidence for yields, inputs, residues, or conditioning |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration: guidelines for computing crop water requirements, https://www.fao.org/4/x0490e/x0490e00.htm | crop-cycle water accounting, irrigation context, and land or crop calendar interpretation |
| `fao-good-agricultural-practices-vegetables` | official_guidance | FAO good agricultural practices and fresh vegetable production guidance, https://www.fao.org/3/y4893e/y4893e00.htm | crop input completeness, harvest and primary handling practices, crop protection, water, and hygiene context |
| `ipcc-2019-managed-soils-n2o` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4, Chapter 11 N2O emissions from managed soils, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | nutrient-derived N2O and related nitrogen loss method selection |
| `ipcc-2006-volume-4-crops` | method_factor | 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4 Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol4.html | agricultural energy and crop emission-factor method context |
| `usda-ams-pumpkins-standard` | official_guidance | USDA Agricultural Marketing Service, United States Standards for Grades of Pumpkins, https://www.ams.usda.gov/grades-standards/pumpkins-grades-standards | product grade, maturity, defects, and farm-gate product-state description |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | allocation, co-product, cut-off, mass reconciliation, and reporting principles |
| `mass-balance-identity` | method_factor | Conservation-of-mass method identity for process-input and product-output reconciliation | normalization, output reconciliation, and reference-flow mass balance |
