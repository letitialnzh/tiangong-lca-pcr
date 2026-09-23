---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-green-capsicum-spp-and-pimenta-spp
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Chillies and peppers, green (Capsicum spp. and Pimenta spp.)

## 1. Scope and Applicability

This PCR covers commercial production of fresh green chillies and peppers of Capsicum and Pimenta species from direct seeding or transplant establishment through crop management, irrigation, nutrient and crop-protection applications, harvest, grading, optional washing and cooling, primary packing, and hand-off at the declared farm gate or pack-house gate. It covers open-field and protected-cultivation routes when the production route, fruit type, and crop cycle are declared. Seeds, nursery production, mature red or dried fruit, sauces, pickles, frozen or cooked products, retail, consumer storage, and consumption are excluded. Primary packing, washing, cooling, and purchased transport are included only when they occur before the declared gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-green-capsicum-spp-and-pimenta-spp |
| classification_refs | CPC 3.0:01231 Chillies and peppers, green (Capsicum spp. and Pimenta spp.) |
| covered_products | Fresh, unprocessed green chillies and peppers harvested at the declared immature green market state and delivered at the farm-gate or pack-house gate |
| excluded_products | Seed and nursery planting material, fully ripe red or otherwise mature fruit, dried chillies, sauces, pickles, frozen, cooked, or other processed products, retail, and consumption |
| representative_product | Marketable green Capsicum or Pimenta fruit meeting the declared cultivar, maturity, size, firmness, cleanliness, grade, trimming, and packaging requirements |
| production_route | Direct-seeded or transplanted annual crop in open field or protected cultivation, with irrigation, nutrient, weed and pest management, repeated fruit harvest, grading, optional washing or cooling, and primary packing |
| market_state | Fresh, unprocessed green fruit in loose, crate, carton, or another declared primary-packaging state at the farm or pack-house gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh green chillies and peppers at the declared farm-gate or pack-house gate |
| How much | 1,000 kg |
| How well | Fresh and unprocessed, with declared Capsicum or Pimenta species or cultivar group, immature green maturity, fruit size, firmness, cleanliness, grade, trimming, washing and cooling state, and packaging state |
| How long or cycle | One declared annual crop cycle, including all harvest rounds attributed to that crop and the declared gate |
| reference_flow_link | green_chillies_peppers_farm_gate_output |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh green chillies and peppers, production mix, at farm gate `f4da74e5-e255-4d9b-aa07-27796e120b87` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; open-field or protected route; Capsicum or Pimenta species or cultivar group; seed or transplant establishment; planting date; crop cycle and harvest rounds; declared gate; immature green maturity; fruit size, firmness, and grade; irrigation source and method; nutrient product and nutrient basis; crop-protection program; washing and cooling state; packaging state; residue and reject fate |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_green_pepper_mass` | marketable fruit and harvest records | Mass | kg | Keep gross harvested fruit, marketable green fruit, unmarketable fruit, trimming, foreign material, and field residue as separate measured or calculated quantities. |
| `crop_cycle_normalization` | field, protected-cultivation, and harvest records | Area and mass | ha and kg | Record inputs and harvest rounds by field, bed, or protected unit and normalize them to the marketable output attributed to the same declared annual crop cycle. |
| `nutrient_product_basis` | fertilizer, manure, compost, and other nutrient inputs | Mass of product and declared nutrient | kg product, kg N, kg P2O5, or kg K2O | Preserve product mass and convert to nutrient basis only from the product label, supplier specification, nutrient plan, or laboratory result. |
| `water_volume_basis` | crop irrigation and post-harvest washing | Volume | m3 | Record delivered irrigation water and post-harvest washing water separately using meter records or a documented water balance. |
| `energy_service_basis` | pumping, protected-cultivation equipment, cooling, and packing | Energy and fuel | kWh and L | Record electricity and fuel by equipment or operation, retain the meter or invoice basis, and allocate shared services to the declared crop cycle and gate output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field, bed, or protected-cultivation unit receiving green chilli or pepper seed or transplant material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared annual crop cycle |
| product_classification_scope | Fresh green chillies and peppers under CPC 3.0:01231 through the declared farm-gate or pack-house gate |
| recursive_input_rule | Purchased seed and transplant material is an upstream product input linked once; its own nursery or seed production is outside this PCR unless a separate upstream dataset is supplied. |
| upstream_dataset_requirement | Require upstream datasets for seed or transplants, fertilizers and amendments, crop-protection products, irrigation water, energy, packaging, and purchased transport or treatment services when used. |
| disclosure | Declare geography, open-field or protected route, species or cultivar group, establishment material, crop dates, harvest rounds, yield and reject reconciliation, irrigation source and method, nutrient basis, crop-protection program, washing and cooling, packaging, residue fate, and gate location. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and crop management | Include field or protected-unit preparation, establishment, crop management, crop-cycle inputs, and harvest preparation that produce the declared fresh green fruit; disclose prior land use and exclude unrelated infrastructure construction. | `fao-56-crop-evapotranspiration-1998`; `usda-nrcs-nutrient-management-590` |
| `boundary_gate_conditioning` | harvest and primary conditioning | End the foreground system at the declared farm-gate or pack-house gate and include cutting, grading, trimming, washing, cooling, and primary packing when they occur before that gate. | `codex-fresh-fruits-vegetables-2003`; `fao-good-hygiene-fresh-produce-2003` |
| `boundary_soil_nitrogen` | nutrient inputs, crop residues, and managed soil | Estimate applicable direct and indirect nitrogen emissions using one declared method and recorded nutrient inputs and residue fate; avoid double counting a nitrogen pathway. | `ipcc-2019-refinement-nitrogen` |
| `boundary_residue_fate` | field residue, rejects, and trim | Record field return, composting, feed use, treatment, or disposal separately; material without a demonstrated productive use remains a residue or waste flow. | `codex-fresh-fruits-vegetables-2003`; `fao-good-hygiene-fresh-produce-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Green chilli and pepper crop establishment | required | every represented direct seeding or transplanting event | foreground crop establishment | established field, bed, or protected unit |
| `crop_management` | Green chilli and pepper crop management | required | each represented annual crop cycle | foreground managed biological production | managed area and crop-cycle harvest |
| `harvest_and_gate_preparation` | Green chilli and pepper harvest and gate preparation | required | each represented harvest campaign and declared gate | foreground harvest, conditioning, packing, and gate hand-off | 1,000 kg marketable fresh green fruit |

### Process: Green chilli and pepper crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Seed or transplant material (`planting_material_input`)

Record the seed, plug, or transplant material that enters the declared field or protected unit and identify the material type, supplier, lot, and planted quantity.

- Selected flow: Green chilli or pepper seed and transplant material
- Flow property / unit: Number of viable units or mass / seed, plant, or kg
- Amount rule: Record the purchased lot quantity and viable quantity planted in each field, bed, or protected unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `usda-nrcs-nutrient-management-590`
- Range: Planting-material quantity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 8,000
  - Upper: 50,000
  - Unit: viable plants/ha
  - Basis: broad open-field and protected-cultivation establishment screen pending site records
  - Basis kind: Crop cycle (`crop_cycle`)
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
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `usda-nrcs-nutrient-management-590`
- Range: Establishment organic-amendment screen
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 20,000
  - Unit: kg product/ha
  - Basis: broad amendment screen; replace with field records and nutrient plan
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Establishment nitrogen screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kg N/ha
  - Basis: broad initial screening range pending nutrient plan and soil test
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Land occupied by green chilli and pepper production (`land_occupation_establishment`)

Record the field or protected-cultivation area occupied by the crop during establishment and attribute it to the declared crop cycle.

- Selected flow: Land occupation for annual crop production
- Flow property / unit: Area-time / m2*a
- Amount rule: Measured cultivated area multiplied by the declared establishment period and converted to the required area-time unit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_area_records`
- Sources: `fao-56-crop-evapotranspiration-1998`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Green chilli and pepper crop management (`crop_management`)

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
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `usda-nrcs-nutrient-management-590`
- Range: Crop-cycle nitrogen screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 350
  - Unit: kg N/ha
  - Basis: broad initial screen; replace with site nutrient records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop-cycle phosphorus screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg P2O5/ha
  - Basis: broad initial screen; replace with soil-test and nutrient-plan records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop-cycle potassium screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg K2O/ha
  - Basis: broad initial screen; replace with soil-test and nutrient-plan records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water during crop management (`irrigation_water_input`)

Record crop irrigation delivered to the field or protected unit and separate it from post-harvest washing water.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Sum meter, delivery, or documented water-balance records for the represented crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-56-crop-evapotranspiration-1998`; `usda-nrcs-irrigation-water-management-449`
- Range: Irrigation water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 12,000
  - Unit: m3/ha per crop cycle
  - Basis: broad open-field and protected-cultivation screen; replace with measured delivery records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product during crop management (`crop_protection_input`)

Record each pesticide, biological control product, adjuvant, or other crop-protection input applied to the represented field or protected unit.

- Selected flow: Crop-protection product
- Flow property / unit: Mass or volume / kg product or L product
- Amount rule: Record product name, formulation, active ingredient, application date, applied area, and product amount from the spray or treatment record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `codex-fresh-fruits-vegetables-2003`
- Range: Crop-protection product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg or L product/ha per crop cycle
  - Basis: broad product-use screen; replace with regulated application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for irrigation and protected cultivation (`management_electricity_input`)

Record electricity used for irrigation pumping, ventilation, lighting, fertigation, or other crop-management equipment that crosses the declared boundary.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Use meter or invoice records; allocate shared equipment electricity to the represented crop cycle by documented operating hours or output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-56-crop-evapotranspiration-1998`
- Range: Crop-management electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,500
  - Unit: kWh/ha per crop cycle
  - Basis: broad pumping and protected-cultivation equipment screen; replace with meter records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fuel for field machinery (`management_fuel_input`)

Record diesel or other fuel used by tractors, sprayers, cultivation equipment, and field support vehicles assigned to the represented crop cycle.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or volume / MJ or L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Sum fuel issue, invoice, or equipment-hour records and allocate shared machinery to the represented crop cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `usda-nrcs-nutrient-management-590`
- Range: Field-fuel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: L/ha per crop cycle
  - Basis: broad field-operation screen; replace with fuel and machinery records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Land occupied during crop management (`land_occupation_management`)

Record the area-time occupied by the annual green chilli or pepper crop during the management period.

- Selected flow: Land occupation for annual crop production
- Flow property / unit: Area-time / m2*a
- Amount rule: Convert measured cultivated area and crop occupancy period to area-time and normalize to marketable output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_area_records`
- Sources: `fao-56-crop-evapotranspiration-1998`

#### Outputs

##### Product flows

##### Waste flows

###### Field crop residue after green chilli and pepper harvest (`field_crop_residue`)

Record stems, leaves, roots, and non-marketable fruit remaining in or removed from the field after the represented crop cycle.

- Selected flow: Green chilli and pepper crop residue
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Measure or calculate residue mass and declare whether it is returned to soil, composted, used as feed, treated, or disposed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `codex-fresh-fruits-vegetables-2003`
- Range: Field-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30,000
  - Unit: kg fresh matter/ha per crop cycle
  - Basis: broad residue reconciliation screen; replace with field measurements or documented mass balance
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide from managed soil (`soil_nitrous_oxide_emission`)

Calculate direct and indirect soil nitrous oxide only from declared nitrogen inputs, residue handling, and the selected emission method.

- Selected flow: Nitrous oxide to air from managed agricultural soil
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the declared soil-emission method to documented nitrogen inputs and residue fate, with no duplicate pathway calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_calculation_records`
- Sources: `ipcc-2019-refinement-nitrogen`

###### Nitrate leaching from managed soil (`soil_nitrate_leaching`)

Calculate nitrate leaching or runoff when the selected nutrient and water-balance method requires it and retain the method parameters with the dataset.

- Selected flow: Nitrate to soil or water from managed agricultural soil
- Flow property / unit: Mass / kg NO3-N
- Amount rule: Apply one documented leaching or runoff method to recorded nitrogen applications, irrigation, soil, and residue conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_calculation_records`
- Sources: `ipcc-2019-refinement-nitrogen`

###### Ammonia from managed soil (`soil_ammonia_emission`)

Calculate ammonia volatilization when supported by the chosen nitrogen-emission method and the recorded fertilizer and amendment properties.

- Selected flow: Ammonia to air from managed agricultural soil
- Flow property / unit: Mass / kg NH3-N
- Amount rule: Apply the declared method to documented nitrogen form, application timing, incorporation, and environmental conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_calculation_records`
- Sources: `ipcc-2019-refinement-nitrogen`

###### Nitrogen oxides from field machinery (`field_nox_emission`)

Calculate nitrogen oxide emissions from recorded fuel use using one declared fuel-emission method.

- Selected flow: Nitrogen oxides to air from field machinery
- Flow property / unit: Mass / kg NOx
- Amount rule: Multiply recorded fuel or engine activity by the selected emission factor and retain the factor source and unit conversion.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit attributed to the same crop cycle
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_calculation_records`
- Sources: `ipcc-2019-refinement-nitrogen`

### Process: Green chilli and pepper harvest and gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Gate wash water (`gate_wash_water_input`)

Record water used for washing or other gate preparation separately from crop irrigation when those operations occur before the declared gate.

- Selected flow: Process water for washing and gate preparation
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum meter or batch records for washing and gate preparation and allocate to marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_preparation_records`
- Sources: `fao-good-hygiene-fresh-produce-2003`
- Range: Gate-preparation water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8
  - Unit: m3/1,000 kg marketable fruit
  - Basis: broad washing and preparation screen; replace with batch records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for cooling, grading, and packing (`gate_electricity_input`)

Record electricity for cooling, grading, sorting, and packing operations that occur before the declared gate.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Use meter or invoice records and allocate shared pack-house electricity by operating hours, line throughput, or documented output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_energy_records`
- Sources: `codex-fresh-fruits-vegetables-2003`

###### Primary crate or container packaging (`primary_container_packaging`)

Record reusable or single-use primary containers that cross the boundary before the declared farm-gate or pack-house gate.

- Selected flow: Rigid container packaging for fresh produce
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- Amount rule: Record packaging material mass by type, reuse count, supplier, and loss or return route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-fresh-fruits-vegetables-2003`
- Range: Primary-container screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg packaging/1,000 kg fruit
  - Basis: broad container-material screen; replace with packaging records and reuse accounting
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crates, pallets, or other handling packaging (`handling_packaging`)

Record crates, pallets, and handling packaging used before the declared gate, including whether each item is reusable and how reuse is allocated.

- Selected flow: Pallet and crate packaging service
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Allocate the packaging burden by documented trips, service life, return rate, and the marketable fruit carried.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-fresh-fruits-vegetables-2003`

###### Road freight to the declared gate (`pre_gate_transport_service`)

Record purchased transport only when it occurs before the declared farm-gate or pack-house gate and retain origin, destination, payload, and distance.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / tkm
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Multiply transported mass by documented one-way or round-trip distance under the declared transport convention.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Sources: `codex-fresh-fruits-vegetables-2003`

##### Waste flows

###### Grading and harvest rejects (`gate_reject_waste`)

Record unmarketable green fruit, damaged fruit, trimming, and grading rejects separately and disclose their destination.

- Selected flow: Unmarketable green chilli and pepper fruit and grading reject
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Reconcile incoming harvested fruit, marketable output, rejects, trimming, and any process loss on a mass basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_reject_records`
- Sources: `codex-fresh-fruits-vegetables-2003`
- Range: Gate-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 35
  - Unit: percent of harvested fruit mass
  - Basis: broad grading and harvest-loss reconciliation screen; replace with lot records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater from washing and gate preparation (`gate_wastewater`)

Record wastewater generated by washing or gate preparation when it crosses the declared boundary and identify the treatment or discharge route.

- Selected flow: Wastewater from green chilli and pepper washing
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Record wastewater volume or mass and link it to the washing batch and treatment or discharge record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_preparation_records`
- Sources: `fao-good-hygiene-fresh-produce-2003`

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh green chillies and peppers (`marketable_green_fruit_output`)

Record the marketable green fruit that passes the declared maturity, quality, and gate requirements and serves as the PCR reference output.

- Selected flow: Fresh green chillies and peppers, production mix, at farm gate
- Flow property / unit: Mass / kg fresh fruit
- Amount rule: Weigh marketable output at the declared gate and reconcile it to harvest, rejects, and trimming records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow of 1,000 kg marketable fresh green fruit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_output_records`
- Sources: `codex-fresh-fruits-vegetables-2003`

##### Waste flows

###### Final green fruit and trimming loss (`final_reject_loss`)

Record final rejected fruit, trimming, and foreign material not included in the marketable reference output and identify its destination.

- Selected flow: Final green chilli and pepper reject and trimming loss
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Close the mass balance between harvested fruit, marketable output, reject waste, trimming, and measured foreign material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable fresh green fruit at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_reject_records`
- Sources: `codex-fresh-fruits-vegetables-2003`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_crop_cycle` | inputs and emissions shared by fields or protected units | Allocate shared inputs and emissions to the represented crop cycle using measured area, operating time, or mass output; document the selected driver and do not allocate by unrecorded assumptions. | `fao-56-crop-evapotranspiration-1998` |
| `allocation_marketable_and_reject_outputs` | harvest, grading, and gate preparation | Keep marketable green fruit, unmarketable fruit, trimming, and residue as separate outputs. Apply the declared allocation or treatment rule only when a reject has a documented productive use; otherwise retain it as waste or residue. | `codex-fresh-fruits-vegetables-2003` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting_material_input | seed or transplant lot and planting record | material type, cultivar, supplier, lot, viable quantity, planted area, planting date | collect supplier documents and field planting logs | seed, plant, or kg | each establishment event | full crop cycle | each field, bed, or protected unit | sum planted quantity by crop cycle and area | lot document and field-log reconciliation |
| `cp_nutrient_records` | `crop_establishment`, `crop_management` | nutrient inputs | nutrient application record | product, formulation, nutrient concentration, application date, area, amount, method | collect invoices, application logs, labels, nutrient plans, and soil-test records | kg product, kg N, kg P2O5, or kg K2O | each application | full crop cycle | each field or protected unit | convert product to nutrient basis and sum by crop cycle | label or supplier specification and application-log check |
| `cp_field_area_records` | `crop_establishment`, `crop_management` | land occupation | field or protected-unit record | area, location, crop dates, protected-unit identity, occupancy period | survey or farm record review | ha and dates | each crop cycle | full crop cycle | each field, bed, or protected unit | calculate area-time and normalize to output | area map and date record |
| `cp_irrigation_records` | `crop_management` | irrigation_water_input | water delivery record | source, meter, delivery volume, date, irrigation method, field, losses | collect meter, pump, delivery, or water-balance records | m3 | each irrigation event or monthly total | full crop cycle | each field or protected unit | sum delivered water and reconcile source records | meter reading or documented water balance |
| `cp_crop_protection_records` | `crop_management` | crop_protection_input | spray or treatment record | product, formulation, active ingredient, amount, area, date, method, target | collect regulated application logs and product labels | kg or L product | each application | full crop cycle | each field or protected unit | sum by product and active ingredient | application record and label check |
| `cp_energy_records` | `crop_management` | management_fuel_input and management_electricity_input | meter, invoice, fuel issue, or equipment-hour record | fuel or electricity, equipment, date, operating hours, field or line, allocation driver | collect meters, invoices, fuel logs, and operating records | kWh, L, or MJ | each event or monthly total | full crop cycle | each field, protected unit, or pack-house line | allocate shared services by documented driver | meter, invoice, or operating-log reconciliation |
| `cp_emission_calculation_records` | `crop_management` | soil and machinery elementary flows | calculation worksheet | nutrient inputs, residue fate, fuel, factor, method, conversion, result | calculate from collected records using one declared method | kg substance | each crop cycle | full crop cycle | each field and equipment group | apply one method and sum without duplicate pathways | factor source, formula, and input check |
| `cp_residue_records` | `crop_management` | field_crop_residue | residue and destination record | residue type, mass, date, field, destination, treatment or return method | weigh or estimate with documented mass balance | kg fresh matter | each crop cycle | full crop cycle | each field or protected unit | separate field return, use, treatment, and disposal | weigh ticket or mass-balance check |
| `cp_gate_preparation_records` | `harvest_and_gate_preparation` | gate_wash_water_input and gate_wastewater | wash batch and utility record | batch, water volume, source, date, product mass, wastewater route, treatment | collect batch sheets, meters, and treatment records | m3 or kg | each batch | full harvest campaign | each pack-house line or gate | sum by campaign and normalize to marketable output | batch reconciliation and treatment record |
| `cp_gate_energy_records` | `harvest_and_gate_preparation` | gate_electricity_input | pack-house utility record | line, meter, operating hours, throughput, date, allocation driver | collect meter or invoice records and line throughput | kWh | each batch or monthly total | full harvest campaign | each pack-house line | allocate shared energy by documented throughput or hours | meter and throughput reconciliation |
| `cp_packaging_records` | `harvest_and_gate_preparation` | primary_container_packaging and handling_packaging | packaging issue and return record | packaging type, material, mass, quantity, reuse count, loss, return route | collect supplier, issue, and return records | kg packaging and trips | each campaign | full harvest campaign | each packing site | allocate reusable packaging by documented service trips | supplier specification and return log |
| `cp_transport_records` | `harvest_and_gate_preparation` | pre_gate_transport_service | shipment record | origin, destination, mass, distance, vehicle, load, empty return | collect consignment and carrier records | tkm | each shipment | full harvest campaign | declared pre-gate route | multiply mass by documented distance and sum | consignment and carrier record |
| `cp_gate_output_records` | `harvest_and_gate_preparation` | marketable_green_fruit_output | weighbridge, pack, or dispatch record | batch, harvest date, mass, maturity, grade, gate, packaging state | weigh and reconcile marketable output | kg fresh fruit | each harvest or dispatch batch | full harvest campaign | each field and gate | sum accepted batches and normalize to 1,000 kg | scale record and lot reconciliation |
| `cp_gate_reject_records` | `harvest_and_gate_preparation` | gate_reject_waste and final_reject_loss | grading and reject record | incoming mass, marketable mass, reject type, trimming, destination, date | weigh or calculate from lot mass balance | kg fresh matter | each batch | full harvest campaign | each grading or packing line | reconcile harvested, marketable, rejected, and trimming masses | scale record and mass-balance check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_product_nutrient_mass` | nutrient input rows | Product mass multiplied by the declared nutrient concentration; retain both product and nutrient bases. | product mass, N/P2O5/K2O concentration | kg nutrient | `usda-nrcs-nutrient-management-590` |
| `calc_crop_cycle_normalization` | all crop-cycle rows | Sum records assigned to the same field or protected unit and crop cycle, then divide by marketable green fruit output and scale to 1,000 kg. | input or emission record, crop-cycle output | normalized PCR amount | `fao-56-crop-evapotranspiration-1998` |
| `calc_soil_nitrogen_emissions` | soil nitrogen elementary flows | Apply one declared IPCC-compatible method to documented nitrogen inputs and residue fate; do not combine alternative methods for one pathway. | nutrient records, residue records, method factors | kg N2O-N, NO3-N, or NH3-N | `ipcc-2019-refinement-nitrogen` |
| `calc_energy_allocation` | shared electricity and fuel | Allocate shared energy or fuel by meter, operating hours, throughput, or another documented driver and disclose the selected driver. | utility or fuel total, allocation driver | crop-cycle energy or fuel | `fao-56-crop-evapotranspiration-1998` |
| `calc_mass_balance` | harvest, grading, and gate outputs | Harvested mass equals marketable output plus reject, trimming, residue, and measured loss within the declared tolerance. | harvest mass, marketable mass, reject mass, trim, loss | reconciliation result | `codex-fresh-fruits-vegetables-2003` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_reference_identity` | reference flow and marketable output | Declare species or cultivar group, immature green market state, gate, and required qualifiers; resolve the product UUID before a final TIDAS dataset is published. | reference-flow metadata, lot specification, and later identity verification |
| `quality_temporal_coverage` | all crop-cycle records | Cover the complete annual crop cycle and every harvest round represented by the reference output. | crop calendar, field log, and harvest records |
| `quality_spatial_coverage` | field, protected-unit, and pack-house records | Identify each field, bed, protected unit, and packing line and avoid mixing sites without an explicit aggregation rule. | farm map, unit register, and pack-house line record |
| `quality_mass_completeness` | harvest and gate preparation | Reconcile harvested, marketable, rejected, trimmed, residue, and wastewater-related records where relevant. | weigh records, grading records, and mass-balance worksheet |
| `quality_nutrient_traceability` | fertilizer and amendment inputs | Retain product identity, nutrient concentration, application date, area, and amount for each application. | label, supplier specification, nutrient plan, and application log |
| `quality_method_disclosure` | calculated emissions and allocated services | Record the factor or method, inputs, conversion, allocation driver, and uncertainty or limitation for calculated values. | calculation worksheet and source reference |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_qualifiers` | reference flow | Reject a foreground package that omits production geography, route, cultivar or species group, immature green state, crop cycle, declared gate, and required harvest or quality qualifiers. | `codex-fresh-fruits-vegetables-2003` |
| `validate_crop_cycle_completeness` | process inventory | Check that establishment, management, harvest, and all represented harvest rounds are covered by records for the same crop cycle. | `fao-56-crop-evapotranspiration-1998` |
| `validate_flow_binding_priority` | all flow rows | Use the narrowest applicable Flow Set group first; use a fixed UUID only for an uncovered flow after verification; otherwise retain unmapped coverage and do not change the product boundary to force a match. |  |
| `validate_nutrient_reconciliation` | nutrient and soil-emission rows | Check that product mass, nutrient concentration, nutrient amount, residue fate, and selected emission method reconcile without double counting. | `usda-nrcs-nutrient-management-590`; `ipcc-2019-refinement-nitrogen` |
| `validate_output_mass_balance` | harvest and gate preparation | Require harvested mass to reconcile to marketable green fruit, reject, trimming, residue, and recorded loss within the declared tolerance. | `codex-fresh-fruits-vegetables-2003` |
| `validate_gate_and_downstream_cutoff` | boundary and transport rows | Confirm that washing, cooling, packing, treatment, and transport are included only when they occur before the declared gate and that downstream retail and consumption are excluded. | `codex-fresh-fruits-vegetables-2003` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Secondary foreground dataset for fresh green chillies and peppers at farm or pack-house gate |
| downstream_use | May support process datasets, lifecycle models, and comparative studies that use the declared green-fruit reference flow and boundary |
| allowed_use | Gate-to-gate or cradle-to-gate modelling when geography, route, cultivar group, crop cycle, gate, allocation, and data quality are compatible |
| excluded_use | Red ripe, dried, processed, retail, consumption, or other product states; use with unreported protected-cultivation energy, washing, reject fate, or crop-cycle coverage |
| required_metadata | PCR id, CPC mapping, species or cultivar group, production geography, route, crop dates, harvest rounds, declared gate, reference mass basis, irrigation, nutrient basis, crop-protection program, packaging, residue and reject fate, and UUID resolution status |
| required_quality_disclosure | Temporal and spatial coverage, measured versus calculated values, nutrient and emission methods, allocation drivers, mass-balance result, evidence gap flow identities, and known data gaps |
| update_trigger | Change in crop route, cultivar or maturity specification, gate conditioning, Flow Set taxonomy, reference-flow identity, nutrient or emission method, or material evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-56-crop-evapotranspiration-1998` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm | crop-cycle water accounting, field occupancy context, and shared-service allocation |
| `usda-nrcs-nutrient-management-590` | official_guidance | USDA NRCS Conservation Practice Standard 590, Nutrient Management, https://www.nrcs.usda.gov/resources/guides-and-instructions/nutrient-management-590 | nutrient product basis, application records, and nutrient quality requirements |
| `usda-nrcs-irrigation-water-management-449` | official_guidance | USDA NRCS Conservation Practice Standard 449, Irrigation Water Management, https://www.nrcs.usda.gov/resources/guides-and-instructions/irrigation-water-management-449 | irrigation records and water-balance quality requirements |
| `ipcc-2019-refinement-nitrogen` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | direct and indirect nitrogen emission calculation method |
| `codex-fresh-fruits-vegetables-2003` | standard | Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables, CXC 53-2003, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | fresh-produce gate, quality, handling, reject, and mass-balance rules |
| `fao-good-hygiene-fresh-produce-2003` | official_guidance | FAO and WHO guidance associated with the Codex Code of Hygienic Practice for Fresh Fruits and Vegetables, CXC 53-2003, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | washing, gate-preparation, wastewater, and handling records |
