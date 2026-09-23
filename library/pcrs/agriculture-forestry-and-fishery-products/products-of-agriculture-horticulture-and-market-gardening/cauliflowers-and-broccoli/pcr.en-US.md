---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cauliflowers-and-broccoli
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Cauliflowers and broccoli

## 1. Scope and Applicability

This PCR guides foreground data package construction for fresh, unprocessed cauliflowers and broccoli produced in a declared annual crop cycle. The default boundary starts when seed or transplant material is ready to establish the crop and ends when marketable heads or florets leave the farm at the declared farm-gate hand-off. It covers soil preparation, crop establishment, field management, irrigation, fertilization, crop protection, harvest, trimming, field or on-farm sorting, and primary washing, cooling, or packaging when these activities occur before the hand-off.

The category is shared by cauliflower and broccoli because both are annual brassica crops harvested as immature flowering structures and require the same core foreground accounting pattern. The data package must identify which product is represented and must not combine the two products unless yields, inputs, quality criteria, and allocation are recorded separately before aggregation. Seed multiplication, nursery production before purchased planting material, protected cultivation with material climate-control infrastructure, distribution, retail, cooking, freezing, drying, pickling, fermentation, and other processing are outside the default boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cauliflowers-and-broccoli |
| classification_refs | CPC 3.0: 01213 Cauliflowers and broccoli |
| covered_products | Fresh marketable cauliflower heads, broccoli heads, or broccoli florets delivered at the declared farm-gate hand-off |
| excluded_products | Seed and transplants sold as planting material; other cabbages; processed, frozen, dried, pickled, fermented, cooked, or retail-prepared cauliflower or broccoli |
| representative_product | Fresh saleable cauliflower or broccoli at farm gate |
| production_route | Annual soil-based crop establishment, managed field production, harvest, trimming and sorting, with optional on-farm washing, cooling, or primary packaging |
| market_state | Fresh and unprocessed product in the declared cultivar, maturity, grade, trimming, washing, cooling, and packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh marketable cauliflower or broccoli at the declared farm-gate hand-off |
| How much | 1,000 kg |
| How well | Product is fresh, unprocessed, and saleable under the declared crop identity, maturity, head or floret grade, trimming, defect tolerance, and moisture state |
| How long or cycle | One declared annual crop cycle and harvest year, normalized after reconciling field output, rejects, and trimming |
| reference_flow_link | `fresh_cauliflower_or_broccoli_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh cauliflower or broccoli, farm-gate output `58bab506-1b56-4206-97c8-d0d0f6391442` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product identity (cauliflower or broccoli); cultivar or variety; production geography; crop year and cycle dates; cultivation system; irrigated or rain-fed status; harvest maturity; grade and size; trimming state; washing and cooling; packaging state; farm-gate hand-off |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | marketable heads or florets and all product, reject, and trim mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh product on the declared farm-gate state. Keep harvested mass, marketable output, rejects, trims, and field losses separate before normalization. |
| `crop_identity_separation` | cauliflower and broccoli records | Product identity | declared product | Record cauliflower and broccoli as separate crop identities. Aggregate them only after each product has a reconciled field-year inventory and an explicit aggregation rule. |
| `nutrient_product_basis` | fertilizer and amendment inputs | Mass | kg product and kg nutrient | Record formulated product mass and documented nutrient concentration separately; calculate kg N, kg P2O5, and kg K2O without substituting one nutrient basis for another. |
| `water_delivery_basis` | irrigation and water withdrawal | Volume | m3 | Record source-specific withdrawal and delivered irrigation separately from rainfall, and disclose the irrigation technology and metering basis. |
| `land_occupation_basis` | occupied crop area | Area-time | m2*a | Record field area and the occupied crop period before normalizing occupation to the crop cycle and reference output. |
| `moisture_and_trim_basis` | harvest, cooling, washing, and packing | Mass and moisture | kg and percent | Retain as-is mass and any measured moisture or water gain/loss. Do not use washing or cooling mass change as product yield without a documented reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Seed or transplant material ready for establishment in the declared production field, with prior land use and any nursery stage disclosed |
| starting_condition_role | Beginning of the annual cauliflower or broccoli crop cycle |
| product_classification_scope | Fresh cauliflower and broccoli products classified under CPC 3.0 01213 through farm-gate hand-off |
| recursive_input_rule | A product-category material used as planting or market input is recorded at its actual hand-off state and linked to its upstream dataset; the upstream crop boundary is not recreated inside this record. |
| upstream_dataset_requirement | Use representative upstream datasets for seed or transplants, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, and waste treatment or transport services when they cross the boundary. |
| disclosure | Declare product identity, field and production geography, crop year, cultivar, crop duration, planting material, irrigation source and method, nutrient basis, crop-protection program, harvest and grading method, washing or cooling, packaging, yield, residue and reject fates, and farm-gate state. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_annual_crop` | field preparation and crop production | Include inputs and emissions attributable to the declared annual crop cycle from planting-material hand-off through harvest; disclose prior land use and exclude unrelated historical field burdens. | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_farm_gate` | harvest and primary handling | End the default boundary at transfer of fresh marketable cauliflower or broccoli at the declared farm gate. Include on-farm trimming, sorting, washing, cooling, and packaging only when they occur before transfer. | `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard` |
| `boundary_input_completeness` | all foreground production | Address planting material, nutrients, crop protection, irrigation, land occupation, field energy, harvest energy, primary handling utilities, packaging, and direct field emissions with a value, justified zero, or documented exclusion. | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_residue_fate` | field residues, rejects, and trims | Identify whether each residue stream is returned to soil, left in field, fed, composted, treated, transported, sold, or discarded. Do not treat an unqualified residue as a co-product. | `iso-14044-2006`; `fao-brassica-production-guidance` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment_and_field_management` | Crop establishment and field management | required | every represented field and crop year | foreground managed biological production | field area, crop cycle, and marketable crop output |
| `harvest_and_farm_gate_preparation` | Harvest and farm-gate preparation | required | every represented harvest lot | foreground harvesting, trimming, sorting, and hand-off | 1,000 kg marketable fresh product |
| `on_farm_cooling_and_packaging` | On-farm cooling and primary packaging | conditional | when cooling, washing, or packaging occurs before farm-gate transfer | foreground primary conditioning | packed or cooled output at the declared hand-off |

### Process: Crop establishment and field management (`crop_establishment_and_field_management`)

#### Inputs

##### Product flows

###### Seed or transplant planting material (`planting_material_input`)

Seed or transplants cross the boundary when they are accepted for establishment in the declared field. Record the actual form and product identity used for the crop.

- Selected flow: Cauliflower or broccoli seed or transplant material
- Flow property / unit: Mass or number of viable plants / kg or plant
- Amount rule: Record purchased or internally transferred quantity, viable-unit count, and rejected or failed planting units by field.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_planting_material_records`
- Sources: `fao-brassica-production-guidance`
- Range: Planting-material screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 150000
  - Unit: viable plants or g seed/1,000 kg product
  - Basis: per 1,000 kg marketable farm-gate product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`crop_establishment_and_field_management_agricultural_nutrient_inputs`)

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
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-brassica-production-guidance`
- Range: Nitrogen input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg N/ha
  - Basis: represented crop field
  - Basis kind: crop_cycle
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Phosphorus input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg P2O5/ha
  - Basis: represented crop field
  - Basis kind: crop_cycle
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Potassium input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 700
  - Unit: kg K2O/ha
  - Basis: represented crop field
  - Basis kind: crop_cycle
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Organic amendment screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg product/ha
  - Basis: represented crop field
  - Basis kind: crop_cycle
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water_input`)

Record source-specific water delivered to the crop and distinguish it from rainfall and source withdrawal.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum metered or otherwise documented deliveries by field and crop cycle; record pumping energy separately.
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
  - Upper: 1500
  - Unit: m3/ha
  - Basis: represented crop field and crop cycle
  - Basis kind: crop_cycle
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_input`)

Record each herbicide, insecticide, fungicide, biological control, or adjuvant product by formulation and active ingredient where available.

- Selected flow: Crop-protection product
- Flow property / unit: Mass / kg formulated product
- Amount rule: Reconcile purchase, application, stock, and field records; retain active-ingredient concentration separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-brassica-production-guidance`
- Range: Crop-protection product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg formulated product/ha
  - Basis: represented crop field
  - Basis kind: crop_cycle
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field-operation fuel (`field_energy_input`)

Record mobile-machinery fuel used for soil preparation, planting, fertigation, spraying, irrigation pumping, and field maintenance. Material field electricity is recorded as a separate carrier in the foreground package.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Mass or volume / kg or L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Use machine, contractor, fuel, meter, or invoice records and allocate shared operations by field area or harvested mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `fao-brassica-production-guidance`
- Range: Field-energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kWh or L/ha
  - Basis: represented crop field and crop cycle
  - Basis kind: crop_cycle
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Occupied agricultural land (`land_occupation_input`)

Record the area and occupation period of the field used for the declared crop cycle.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Field area multiplied by the declared crop occupation period, including fallow or inter-crop periods only when within the stated land-use representation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_and_output_records`
- Sources: `fao-brassica-production-guidance`
- Range: Occupied-area screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 100000
  - Unit: m2*a/1,000 kg product
  - Basis: reference output
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_n2o_emission`)

Calculate direct soil N2O from accounted nitrogen inputs using the selected IPCC method tier and disclose the factor and conversion.

- Selected flow: Nitrous oxide to air from managed agricultural soil
- Flow property / unit: Mass / kg N2O-N
- Amount rule: Apply the selected method factor to accounted field nitrogen and convert N2O-N to N2O only when required by the receiving dataset.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Direct soil-N2O screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg N2O-N/1,000 kg product
  - Basis: accounted field nitrogen and reference output
  - Basis kind: n_input
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-managed-soils-n2o`

###### Ammonia emission (`field_nitrogen_emissions`)

Report ammonia emitted to air when the selected method or foreground package includes it; retain pollutant species and receiving medium. Any nitrogen-oxide species is a separate foreground requirement and is not represented by this ammonia binding.

- Selected flow: Ammonia to air from managed agricultural soil
- Flow property / unit: Mass / kg substance
- Amount rule: Calculate ammonia from documented nitrogen inputs, application method, and selected emission factor; keep every other nitrogen-oxide species separate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrogen-air emission screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg substance/1,000 kg product
  - Basis: accounted field nitrogen and reference output
  - Basis kind: n_input
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Product flows

###### Harvested cauliflower or broccoli before grading (`harvested_crop_output`)

This internal output is the weighed crop leaving the field before trimming, grading, and farm-gate rejection decisions.

- Selected flow: Harvested cauliflower or broccoli, field output
- Flow property / unit: Mass / kg
- Amount rule: Sum calibrated scale or harvest-ticket mass by field, harvest date, product identity, and lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_and_output_records`
- Sources: `fao-brassica-production-guidance`
- Range: Harvest-to-marketable-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 3000
  - Unit: kg harvested crop/1,000 kg marketable product
  - Basis: reconciled field output
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residue and unmarketable crop material (`field_residue_output`)

Record leaves, stalks, immature heads, and other crop material remaining in the field or removed during harvest, with the destination specified.

- Selected flow: Cauliflower or broccoli field residue and unmarketable crop material
- Flow property / unit: Mass / kg wet matter
- Amount rule: Measure or calculate residue from field and harvest records; report field return, removal, feed, compost, treatment, and disposal separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_fate_records`
- Sources: `fao-brassica-production-guidance`
- Range: Residue and unmarketable material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2500
  - Unit: kg wet matter/1,000 kg marketable product
  - Basis: reconciled field and harvest output
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Trim and grading rejects (`trim_and_reject_output`)

Record product rejected or trimmed during sorting and preparation separately from field residue and identify its destination.

- Selected flow: Cauliflower or broccoli trim and grading rejects
- Flow property / unit: Mass / kg wet matter
- Amount rule: Reconcile rejected and trimmed lots against incoming harvested mass and marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_fate_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Trim and grading-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg wet matter/1,000 kg marketable product
  - Basis: harvested crop input to grading
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Product flows

###### Marketable fresh product hand-off (`marketable_farm_gate_output`)

This output is the declared reference product after all in-scope harvest, trimming, grading, washing, cooling, and primary packaging operations.

- Selected flow: Fresh marketable cauliflower or broccoli at farm gate `58bab506-1b56-4206-97c8-d0d0f6391442`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Use calibrated farm-gate or dispatch scale mass after quality and grade acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_farm_gate_output_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Marketable-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1100
  - Unit: kg/1,000 kg reference product
  - Basis: accepted farm-gate product
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Harvest and farm-gate preparation (`harvest_and_farm_gate_preparation`)

#### Inputs

##### Product flows

###### Harvested crop received for preparation (`harvested_crop_input`)

Harvested cauliflower or broccoli enters preparation from the corresponding field-year and lot records.

- Selected flow: Harvested cauliflower or broccoli, field output
- Flow property / unit: Mass / kg
- Amount rule: Equal the corresponding weighed field output for the same product, lot, and harvest period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_and_output_records`
- Sources: `fao-brassica-production-guidance`
- Range: Harvest-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 3000
  - Unit: kg/1,000 kg marketable product
  - Basis: harvested crop input
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest operation fuel or electricity (`harvest_energy_input`)

Record fuel or electricity used by harvest machinery, contracted harvest operations, conveyors, and field-to-farm-gate handling.

- Selected flow: Mobile machinery fuel or electricity for harvest
- Flow property / unit: Mass or energy / L, kg, or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Meter, contractor, machine, or invoice record allocated to the represented harvest lot or crop output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_handling_energy_records`
- Sources: `fao-brassica-production-guidance`
- Range: Harvest-energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kWh or L/1,000 kg marketable product
  - Basis: harvest and field-to-gate handling
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable product sent to optional primary conditioning (`conditioning_input_output`)

When optional washing, cooling, or packaging is in scope, the graded marketable product is handed to that process without changing its product identity.

- Selected flow: Graded fresh cauliflower or broccoli
- Flow property / unit: Mass / kg
- Amount rule: Equal the accepted graded mass entering the optional conditioning process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_farm_gate_output_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Graded-product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1100
  - Unit: kg/1,000 kg marketable product
  - Basis: accepted graded product
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest and preparation losses (`harvest_preparation_loss`)

Record losses that leave the harvest and preparation boundary, including damaged heads, dropped product, and unexplained mass only after investigation and declared fate.

- Selected flow: Harvest and preparation loss with declared fate
- Flow property / unit: Mass / kg wet matter
- Amount rule: Calculate as the reconciled difference between harvest input, marketable output, recorded trims, and recorded rejects.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_reject_fate_records`
- Sources: `mass-balance-identity`
- Range: Preparation-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/1,000 kg marketable product
  - Basis: harvested crop input
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-farm cooling and primary packaging (`on_farm_cooling_and_packaging`)

#### Inputs

##### Product flows

###### Graded product for washing or cooling (`graded_product_for_conditioning`)

Include this input only when washing, hydrocooling, forced-air cooling, or another primary conditioning operation occurs before the farm-gate hand-off.

- Selected flow: Graded fresh cauliflower or broccoli for primary conditioning
- Flow property / unit: Mass / kg
- Amount rule: Weigh the accepted graded product entering the conditioning line and preserve lot identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Conditioning-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1100
  - Unit: kg/1,000 kg marketable product
  - Basis: accepted graded product entering conditioning
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water (`conditioning_water_input`)

Record water used for washing, hydrocooling, or sanitation when it crosses the primary-conditioning boundary.

- Selected flow: Process water for washing or cooling
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Use meter, batch, or tank records and distinguish make-up water, recirculated water, and wastewater discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `fao-brassica-production-guidance`
- Range: Conditioning-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/1,000 kg marketable product
  - Basis: washing and cooling line throughput
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`conditioning_electricity_input`)

Record electricity for pumps, refrigeration, forced-air cooling, lighting, and conveyors used before the declared farm-gate hand-off.

- Selected flow: Purchased electricity for primary conditioning
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter or equipment record allocated to product throughput and conditioning duration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `fao-brassica-production-guidance`
- Range: Conditioning-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kWh/1,000 kg marketable product
  - Basis: conditioning-line throughput
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging materials (`primary_packaging_input`)

Record packaging material that crosses the boundary before farm-gate transfer, including crates, film, cartons, labels, and reusable-container service.

- Selected flow: Primary packaging function and material
- Flow property / unit: Mass / kg packaging material
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- Amount rule: Reconcile purchased, returned, reused, and discarded packaging by material and number of packed units.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Primary-packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg/1,000 kg marketable product
  - Basis: declared packed output
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Waste flows

###### Conditioning and packaging wastewater or rejected product (`conditioning_waste_output`)

Record wastewater, wash solids, damaged product, and discarded packaging separately and identify the receiving treatment or destination.

- Selected flow: Conditioning wastewater, solids, or rejected product with declared fate
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Measure or calculate from line records and reconcile to conditioning inputs and farm-gate output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `mass-balance-identity`
- Range: Conditioning-waste screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg or m3/1,000 kg marketable product
  - Basis: conditioning input and output reconciliation
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Product flows

###### Cooled or packed farm-gate product (`cooled_or_packed_farm_gate_output`)

This conditional output is the same reference product after any in-scope washing, cooling, and primary packaging, with the final state declared.

- Selected flow: Fresh cauliflower or broccoli after on-farm primary conditioning
- Flow property / unit: Mass / kg
- Amount rule: Use the final accepted dispatch or farm-gate scale mass after conditioning and packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_farm_gate_output_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Conditioned-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1100
  - Unit: kg/1,000 kg reference product
  - Basis: accepted conditioned farm-gate product
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_priority` | shared field and handling operations | First subdivide field operations, harvest lots, product identities, conditioning runs, and packaging records wherever separate measurements exist. | `iso-14044-2006` |
| `allocation_cauliflower_broccoli_aggregation` | cauliflower and broccoli produced by one farm or shared operation | Keep cauliflower and broccoli separate through inventory reconciliation. Aggregate only by declared mass or another justified allocation basis after product-specific records are complete. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_rejects_and_residues` | rejects, trims, and field residues | Treat rejects and residues as waste unless a documented buyer, quantity, specification, and destination establish a co-product. If allocation remains necessary, document the physical or economic basis and sensitivity. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `crop_establishment_and_field_management` | planting material | purchase, nursery, and planting record | field_id; product; cultivar; seed_or_transplant_form; lot; viable_units; mass; date; failures; replacements | reconcile invoices, labels, planting logs, and field acceptance | plant; g; kg | per planting event | complete crop establishment | every represented field | sum by product and field and preserve failed or replaced units | labels, invoices, planting logs, lot records |
| `cp_fertilizer_and_amendment_records` | `crop_establishment_and_field_management` | nutrients and soil amendments | invoice, label, application, and laboratory record | field_id; date; product; product_mass; N; P2O5; K2O; dry_matter; application_method; incorporation; source | reconcile purchases, applications, nutrient analyses, and stock movements | kg product; kg nutrient; percent | per application | complete crop cycle | every represented field | sum by nutrient and product after field-year reconciliation | invoices, labels, analyses, application logs |
| `cp_irrigation_and_water_records` | `crop_establishment_and_field_management` | irrigation and withdrawal | meter, pump, invoice, or water-right record | field_id; source; meter; date; withdrawal; delivered_volume; pumping_energy; method; rainfall_basis | use calibrated meter or documented source and distinguish withdrawal from delivery | m3; kWh | per event or period | irrigation season and crop cycle | each field and water source | sum by source and separate withdrawal, delivery, and return | meter calibration, readings, invoices, water records |
| `cp_crop_protection_records` | `crop_establishment_and_field_management` | crop protection | purchase and application record | field_id; date; formulation; active_ingredient; product_mass; concentration; area; method; target; re-entry or disposal | reconcile product, active ingredient, application, and stock records | kg product; kg active ingredient; ha | per application | complete crop cycle | every represented field | sum by formulation and active ingredient and retain application date | labels, invoices, application logs, licensed applicator records |
| `cp_field_energy_records` | `crop_establishment_and_field_management` | field energy | fuel, machine, contractor, or meter record | field_id; date; operation; machine; fuel_or_electricity; quantity; area; harvested_mass | use machine logs, contractor invoices, fuel records, or meters | L; kg; kWh; MJ | per operation or period | complete crop cycle | field and farm | allocate shared operation to fields by area or measured output | invoices, telematics, fuel logs, meter records |
| `cp_field_and_output_records` | `crop_establishment_and_field_management` | land, crop output, and field residue | field map, harvest, and residue record | field_id; product_identity; cultivar; area; dates; crop_duration; harvested_mass; field_loss; residue_mass; moisture; fate | combine field map, calibrated scales, harvest tickets, and residue disposition | ha; date; kg; percent | per harvest and annual close | full crop year | every represented field | reconcile each product and field before cross-farm aggregation | field map, scale calibration, harvest tickets, disposition records |
| `cp_harvest_and_handling_energy_records` | `harvest_and_farm_gate_preparation` | harvest and handling energy | machine, contractor, meter, or invoice record | lot_id; date; operation; machine; carrier; quantity; harvested_mass; duration | link energy record to harvest lot or allocate by documented throughput | L; kg; kWh; MJ | per harvest event or period | harvest window | harvest operation and facility | sum by lot and operation and disclose allocation | invoices, machine logs, meters, throughput records |
| `cp_residue_and_reject_fate_records` | `harvest_and_farm_gate_preparation` | field residues, trims, rejects, and losses | lot, field, waste, feed, compost, or transfer record | field_or_lot; stream; mass; moisture; reason; fate; destination; date | retain scale ticket, field log, transfer, sales, treatment, or disposal evidence | kg; percent | per event or campaign | crop cycle and harvest | every field and handling line | sum by stream and fate; do not merge with accepted product | scale tickets, disposition records, receipts, treatment records |
| `cp_conditioning_and_packaging_records` | `on_farm_cooling_and_packaging` | water, electricity, packaging, wastewater, and conditioning output | batch, meter, packaging, and waste record | batch_id; input_mass; water; electricity; cooling_time; packaging_type; packaging_mass; output_mass; reject_mass; wastewater; destination | link batch records to lot and reconcile input, utilities, packaging, wastes, and output | kg; m3; kWh; h | per batch or shift | complete in-scope conditioning period | each line and cold room | aggregate only after batch-level reconciliation | calibrated scales, meters, packaging issue records, waste receipts |
| `cp_farm_gate_output_records` | `harvest_and_farm_gate_preparation` | marketable reference output | dispatch, scale, and quality record | lot_id; product_identity; source_field; date; mass; grade; maturity; trim_state; wash_state; cooling_state; packaging_state; destination | use calibrated dispatch scale and product acceptance record | kg; percent | per lot or dispatch | complete harvest and hand-off period | farm and declared gate | sum accepted lots and preserve product-specific qualifiers | scale calibration, grade sheet, dispatch ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_equivalent` | fertilizer and amendment inputs | Formulated product mass multiplied by documented nutrient fraction equals nutrient-equivalent input; retain product and nutrient values separately. | product mass; nutrient analysis; application record | kg N, kg P2O5, and kg K2O by field-year | `ipcc-2019-managed-soils-n2o`; `fao-brassica-production-guidance` |
| `calc_land_occupation` | field land occupation | Field area multiplied by declared occupation duration, normalized to marketable reference output. | field area; crop duration; crop output | m2*a per reference output | `fao-brassica-production-guidance` |
| `calc_direct_soil_n2o` | managed-soil emissions | Apply the selected IPCC factor and tier to accounted nitrogen inputs; convert N2O-N to N2O only when required and disclose the conversion. | accounted N; method factor; conversion basis | direct N2O-N or N2O per reference output | `ipcc-2019-managed-soils-n2o` |
| `calc_irrigation_delivery` | irrigation water | Sum source-specific metered delivery, keep withdrawal and delivery distinct, and normalize to marketable output. | withdrawal; delivery; return; crop output | m3 delivered and withdrawn per reference output | `fao-crop-evapotranspiration-56` |
| `calc_product_specific_aggregation` | cauliflower and broccoli combined reporting | Complete separate product-specific balances first; mass-weight only reconciled product records when an aggregate result is requested. | product-specific inventories; marketable masses | aggregated inventory per reference output | `iso-14044-2006` |
| `calc_farm_gate_mass_balance` | harvest, grading, and conditioning | Harvested input plus measured mass gain or loss equals marketable output plus trims, rejects, residues, wastewater solids, and explained loss on a common basis. | input and output scale records; moisture; waste records | reconciled lot balance | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | all product rows | Declare cauliflower or broccoli identity, cultivar or variety where material, harvest maturity, grade, and final hand-off state. | planting, harvest, grade, and dispatch records |
| `dq_temporal_coverage` | crop production and harvest | Cover the full represented crop cycle and harvest year; state whether the result is a single year, multi-year average, or scenario. | dated field, application, harvest, and dispatch records |
| `dq_input_completeness` | field and farm-gate inventory | Quantify or justify zero or exclusion for planting material, nutrients, irrigation, crop protection, land, field energy, harvest energy, primary conditioning, packaging, and direct emissions. | invoices, labels, meters, logs, and method declaration |
| `dq_mass_reconciliation` | all harvest and conditioning outputs | Reconcile harvested, marketable, trimmed, rejected, residue, wastewater-solids, and explained-loss masses before normalization. | calibrated scales, lot records, and fate receipts |
| `dq_nutrient_and_water_basis` | nutrients and irrigation | Preserve formulated fertilizer and nutrient-equivalent bases, water withdrawal and delivery, irrigation method, and any emission-factor selection. | product labels, analyses, meters, and calculation record |
| `dq_fate_and_disclosure` | residues, rejects, and wastes | Record destination, treatment, reuse, or disposal for every non-reference output and document any claimed co-product. | transfer, sales, feed, compost, treatment, or disposal record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow and product output | Confirm that the output is fresh, unprocessed cauliflower or broccoli at the declared farm-gate state and that product identity is explicit. | `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard` |
| `validation_process_completeness` | Process Map and inventory | Confirm crop establishment and field management, harvest and farm-gate preparation, and every applicable conditional conditioning process are represented or explicitly excluded. | `fao-brassica-production-guidance` |
| `validation_product_separation` | cauliflower and broccoli aggregation | Confirm that product-specific inputs, yields, rejects, and quality states are reconciled before any combined category result is calculated. | `iso-14044-2006`; `mass-balance-identity` |
| `validation_nutrient_basis` | fertilizer and soil emissions | Confirm product mass is distinct from kg N, P2O5, and K2O, and that factor selection and N2O-N conversion are documented. | `ipcc-2019-managed-soils-n2o` |
| `validation_water_accounting` | irrigation and conditioning water | Confirm rainfall, withdrawal, delivered irrigation, process water, wastewater, and return flows are distinguished and not double counted. | `fao-crop-evapotranspiration-56` |
| `validation_mass_balance` | harvest and primary conditioning | Confirm marketable output, trims, rejects, residues, wastewater solids, and explained losses reconcile to the corresponding input on a declared basis. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground annual crop-production dataset for fresh cauliflower or broccoli at farm gate |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` for LCA studies that require fresh unprocessed cauliflower or broccoli and preserve the declared qualifiers |
| allowed_use | Farm-gate footprinting, product comparison with matching crop identity and gate, inventory aggregation after product-specific reconciliation, and downstream process modelling that begins at the declared hand-off |
| excluded_use | Direct substitution for processed, frozen, dried, retail-packed, distributed, cooked, or consumption-stage products; use across different crop identities or gates without adjustment |
| required_metadata | product identity; cultivar; geography; field area; crop year and duration; planting material; irrigation source and method; nutrient product and nutrient basis; crop protection; field and harvest energy; yield; grade and maturity; trimming; washing and cooling; packaging; residue and reject fates; farm-gate state |
| required_quality_disclosure | temporal coverage; field and lot coverage; product separation; measurement and scale evidence; mass-balance result; nutrient and water basis; emission-factor method coverage; allocation method; exclusions and assumptions |
| update_trigger | Material change in cultivation route, product identity, farm-gate state, crop-protection or nutrient practice, irrigation, harvest or conditioning technology, packaging, emission method, Flow Set version, reference identity, or evidence status |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-brassica-production-guidance` | extension_guidance | FAO, crop production and management guidance for brassica vegetables, https://www.fao.org/3/y4893e/y4893e00.htm | crop process decomposition, field operations, residue and harvest data collection |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm | irrigation data distinction, crop-cycle water accounting, and water collection rules |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, N2O emissions from managed soils, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | direct and indirect managed-soil nitrogen emissions and N2O-N conversion |
| `usda-ams-cauliflower-standard` | official_guidance | USDA Agricultural Marketing Service, United States Standards for Grades of Cauliflower, https://www.ams.usda.gov/grades-standards/cauliflower-grades-and-standards | cauliflower grade, maturity, defects, and marketable-output qualifiers |
| `usda-ams-broccoli-standard` | official_guidance | USDA Agricultural Marketing Service, United States Standards for Grades of Broccoli, https://www.ams.usda.gov/grades-standards/broccoli-grades-and-standards | broccoli grade, maturity, defects, and marketable-output qualifiers |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy, co-product treatment, and aggregation discipline |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity for declared process hand-offs and waste reconciliation | harvest, grading, conditioning, and product-specific aggregation calculations |
