---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-other"
language: "en-US"
status: "candidate"
sync_with: "pcr.zh-CN.md"
content_maturity: "authored_methodology"
translation_status: "aligned"
---

# Non-seed Sorghum Grain at a Declared Farm or Primary-Conditioning Gate

## 1. Scope and Applicability

This PCR guides construction of a foreground data package for non-seed sorghum grain corresponding to CPC 3.0 `01142`, from cultivated field production through harvest and the declared farm or primary-conditioning gate. The default gate is the farm gate. A data package may instead declare a primary-conditioning gate when it includes only bounded first conditioning such as threshing, drying, cleaning, or grading.

Food, feed, and industrial end use are alternatives to be declared by the data package; they do not create separate PCR identities. Rain-fed and irrigated production, varieties or hybrids, tillage routes, harvest technologies, and conditioning routes are included only when their identity and evidence are declared.

Sorghum seed for sowing, sorghum grown for forage or silage, flour, meal, malt, beer, spirits, ethanol, starch, formulated feed, food manufacture, retail packaging, distribution, consumption, and downstream storage are excluded by default. A downstream process may consume this PCR only after product state, moisture basis, quality descriptors, and gate are declared.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-other` |
| classification_refs | CPC 3.0 `01142`, `Sorghum, other` |
| covered_products | Non-seed sorghum grain from a declared crop route, at the farm gate or declared primary-conditioning gate |
| excluded_products | sorghum seed; forage or silage sorghum; flour, meal, malt, beer, spirits, ethanol, starch, formulated feed, food, and other downstream sorghum products |
| representative_product | Marketable non-seed sorghum grain, bulk or declared packaged state, with moisture basis, quality descriptors, end-use route, and gate declared |
| production_route | Managed annual sorghum cultivation, harvest and collection, with optional primary conditioning before the declared gate |
| market_state | Food, feed, or industrial grain route declared as received at the gate; no downstream processing |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Non-seed sorghum grain at the declared farm gate or primary-conditioning gate |
| How much | 1 kg net accepted grain |
| How well | Variety or hybrid, end-use route, grain state, moisture basis, quality or grade descriptors, foreign-material rule, production system, geography, irrigation status, and gate declared |
| How long or cycle | One declared crop season and harvest year |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | variety or hybrid; end-use route; grain state; moisture basis; quality or grade descriptors; foreign-material rule; geography; crop season and harvest year; irrigated or rain-fed status; production system; declared gate; packaging or bulk state |
| Binding | `fixed` |

The reference amount is net accepted non-seed sorghum grain. Tare, foreign material, dockage, removed moisture, rejected grain, residues, and unexplained loss are reported separately and must not be silently merged into the reference output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Express the reference flow as net accepted non-seed sorghum grain at the declared gate and exclude container tare. |
| `moisture_basis` | grain output and moisture removal | Mass and moisture content | kg and declared mass fraction | Record as-received mass and moisture basis. Any conversion to another moisture basis must use measured or declared moisture and an explicit calculation; no universal moisture factor is supplied here. |
| `yield_basis` | harvest and normalized inputs | Mass and area | kg and ha | Record harvested grain, accepted grain, non-marketable grain, residues, losses, and cultivated area for the same crop season before normalization. |
| `fertilizer_n_basis` | fertilizer and soil emissions | Mass | kg product and kg N | Record formulated product mass and nutrient mass separately; nitrogen-emission calculations use the declared kg N input. |
| `water_basis` | irrigation and withdrawal | Volume or Mass | m3 or kg | Declare water source and distinguish withdrawal, delivered irrigation, consumption, and any separately reported water indicator. |
| `energy_inventory` | fuel, electricity, and drying | Mass, Volume, or Energy | L, kg, MJ, or kWh | Preserve energy carrier, measurement unit, conversion basis, operation, and whether the value belongs to field or conditioning work. |
| `land_basis` | land occupation and crop production | Area-time | ha·season or declared area-time unit | Record cultivated area and the declared crop-season occupation basis; do not use land occupation as a proxy for land transformation. |

## 5. System Boundary

The default foreground boundary includes source planting material, field preparation and sowing, fertilization and soil amendments, irrigation where applicable, crop protection, field machinery and energy, managed-soil emissions, harvest, threshing or collection when part of the declared route, and field-to-gate handling. Optional primary conditioning is included only when the declared gate is after that operation. Upstream production of seed, fertilizers, crop-protection products, water supply, fuels, electricity, machinery services, packaging when applicable, and treatment services uses representative background datasets. Food, feed, beverage, industrial conversion, and downstream distribution are outside the default boundary.

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | foreground system | Include field production, harvest, collection, and gate-delivery handling required to provide the declared non-seed sorghum grain; treat purchased inputs as upstream datasets unless explicitly inside the foreground package. | `fao-sorghum-postharvest-operations`; `ipcc-2019-cropland` |
| `boundary_gate_definition` | reference product | Use farm gate by default. A primary-conditioning gate is allowed only when threshing, drying, cleaning, grading, and their losses are explicitly recorded and no later food, feed, beverage, starch, ethanol, milling, or other manufacturing is included. | `fao-grain-postharvest-systems`; `mass-balance-identity` |
| `boundary_primary_conditioning` | optional conditioning | Treat first conditioning as a separate conditional node with its own energy, water where applicable, rejects, moisture change, and hand-off; do not infer a conditioning route from the CPC title. | `fao-sorghum-postharvest-operations` |
| `boundary_input_completeness` | crop production | Provide a value, justified zero, or documented exclusion for planting material, nutrient inputs, crop protection, irrigation, field energy, land, managed-soil emissions, and residue fate. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_output_separation` | all outputs | Separate accepted grain, non-marketable grain, intentionally recovered residue, field residues, conditioning rejects, removed moisture, dust, and unexplained loss by measured mass and fate. | `mass-balance-identity`; `fao-sorghum-postharvest-operations` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | source planting-seed lot for an annual non-seed sorghum crop |
| starting_condition_role | crop production input and identity condition |
| product_classification_scope | Non-seed sorghum grain corresponding to CPC 3.0 `01142`; sorghum seed `01141` and forage or silage routes outside this grain category are excluded |
| recursive_input_rule | Planting seed is recorded as a separate declared input and is not counted as reference grain. Any same-category sorghum grain entering the foreground route is separately identified by origin and purpose and is not merged with current-crop output. |
| upstream_dataset_requirement | Seed, fertilizers, amendments, crop-protection products, irrigation-water supply, fuel, electricity, machinery services, packaging when applicable, transport services, and waste-treatment services require representative upstream datasets or a documented exclusion. |
| disclosure | variety or hybrid, end-use route, field and geography, crop season, production system, irrigation, planting material, gate, grain state, moisture basis, quality descriptors, accepted output, residue and reject fate, and allocation decision |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| field_sorghum_production | Field Sorghum Production | required |  | foreground | crop-season production normalized to accepted grain output |
| sorghum_harvest_and_collection | Sorghum Harvest and Collection | required |  | foreground | harvested and collected grain before the declared gate |
| primary_sorghum_conditioning | Primary Sorghum Conditioning | conditional | include when threshing, drying, cleaning, grading, or equivalent first conditioning occurs before the declared gate | foreground | accepted grain after the declared conditioning hand-off |

### Process: Field Sorghum Production (`field_sorghum_production`)

#### Inputs

##### Product flows

###### Source sorghum planting-seed lot (`source_planting_seed_lot`)

The planting-seed lot is a declared crop input, not the reference product. Record its identity, treatment status, mass basis, and source without treating it as non-seed sorghum grain output.

- Selected flow: Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured mass of the planting-seed lot used for the declared crop area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_seed_lot_records`
- Sources: `fao-sorghum-postharvest-operations`

###### Agricultural nutrient and fertilizer inputs (`field_sorghum_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`

###### Irrigation water supplied (`irrigation_water_supplied`)

Record metered or otherwise evidenced irrigation delivered to the crop. Verified rain-fed routes may record zero with supporting evidence.

- Selected flow: irrigation water supplied to field
- Flow property / unit: Volume or Mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: source-specific metered or evidenced delivered irrigation; zero only for verified rain-fed production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-cropland`

###### Crop-protection inputs (`crop_protection_inputs`)

Record named formulated products and active substances used for weeds, pests, or diseases, with application date, field, and product identity.

- Selected flow: named crop-protection product or active substance
- Flow property / unit: Mass / kg product or active substance
- Amount rule: measured application by named product and active substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `ipcc-2019-cropland`

###### Field energy and machinery services (`field_energy_and_machinery_services`)

Record fuel, electricity, contracted machinery, and other energy or work services used by field operations and irrigation pumping.

- Selected flow: field energy carriers and machinery services
- Flow property / unit: Mass, Volume, or Energy / L, kg, MJ, or kWh
- Amount rule: measured or supplier-recorded energy or work service by field operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`

##### Waste flows

Waste-derived amendments or returned materials are recorded only when they cross the field boundary with declared origin, quality, and burden treatment. They are not silently merged with fertilizer inputs.

##### Elementary flows

###### Cultivated land occupation (`cultivated_land_occupation`)

Record cultivated area and crop-season occupation as an elementary land-use flow when required by the study scope.

- Selected flow: applicable cultivated land occupation elementary flow
- Flow property / unit: Area-time / ha·season
- Amount rule: cultivated area multiplied by the declared crop-season occupation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `ipcc-2019-cropland`; `mass-balance-identity`

###### Managed-soil water withdrawal (`managed_soil_water_withdrawal`)

Record direct water-resource withdrawal when it is in scope and distinguish it from delivered irrigation water.

- Selected flow: direct water resource withdrawal for crop production
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: source-specific withdrawal record or justified zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-cropland`

#### Outputs

##### Product flows

###### Harvested sorghum grain (`harvested_sorghum_grain`)

Harvested sorghum grain is the product output before optional primary conditioning. Record as-received mass and quality descriptors needed to relate it to the declared gate.

- Selected flow: Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured harvested grain mass before the declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `fao-sorghum-postharvest-operations`; `mass-balance-identity`

###### Intentionally recovered sorghum residue (`intentionally_recovered_sorghum_residue`)

Record stalk, panicle, chaff, or other intentionally recovered crop residue as a separate product output only when it crosses the boundary with a declared destination and function. No product-output Flow Set is used as a fallback.

- Selected flow: intentionally recovered sorghum residue by material identity and destination
- Flow property / unit: Mass / kg
- Amount rule: measured recovered residue mass and declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `ipcc-2019-cropland`; `mass-balance-identity`

##### Waste flows

###### Field residue and non-marketable grain (`field_residue_and_non_marketable_grain`)

Record residue left in place, returned to soil, burned, grazed, disposed, or otherwise rejected, and distinguish non-marketable grain from intentionally recovered product. Refine the material and fate only when evidence supports it; otherwise retain unmapped coverage.

- Selected flow: field residue, non-marketable grain, or fate-specific loss
- Flow property / unit: Mass / kg as received or declared dry-matter basis
- Amount rule: measured mass or calculated residual after output reconciliation, with fate recorded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_and_output_records`
- Sources: `ipcc-2019-cropland`; `mass-balance-identity`

##### Elementary flows

###### Direct managed-soil nitrogen emissions (`direct_managed_soil_nitrogen_emissions`)

Record nitrogen-containing emissions to the receiving compartment only when collected nutrient inputs and the selected method tier support the calculation.

- Selected flow: one identified nitrogen compound emitted to a declared air compartment; create separate foreground exchanges for each supported species
- Flow property / unit: Mass / kg emitted substance
- Amount rule: calculated from declared nutrient inputs, soil and climate context, and selected method tier
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Fossil carbon dioxide from field energy (`fossil_carbon_dioxide_from_field_energy`)

Record direct fossil combustion emissions from field energy carriers when energy records and the selected factor method support the calculation.

- Selected flow: fossil carbon dioxide emissions to ambient air from field energy use
- Flow property / unit: Mass / kg emitted substance
- Amount rule: calculated from collected fuel or energy records and declared factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`

### Process: Sorghum Harvest and Collection (`sorghum_harvest_and_collection`)

#### Inputs

##### Product flows

###### Harvested grain received (`harvested_grain_received`)

Record harvested sorghum grain received by the collection or gate-delivery operation with as-received mass and quality descriptors.

- Selected flow: Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured harvested grain received from field production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_collection_records`
- Sources: `fao-sorghum-postharvest-operations`

##### Waste flows

No waste input is required by default. Material received as a returned or recovered input requires a declared origin, quality, and burden treatment.

##### Elementary flows

No elementary input is required by default; operation-specific energy and emissions are recorded in the applicable foreground operation.

#### Outputs

##### Product flows

###### Grain delivered to gate or conditioning (`grain_delivered_to_gate_or_conditioning`)

Record the grain handed to the declared farm gate or optional primary-conditioning node. Keep transport, handling, or storage outside this process unless inside the declared foreground boundary.

- Selected flow: Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured grain mass delivered to the next declared node
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_collection_records`
- Sources: `fao-grain-postharvest-systems`; `mass-balance-identity`

##### Waste flows

###### Harvest and collection rejects or loss (`harvest_and_collection_rejects_or_loss`)

Record broken grain, foreign material, collection loss, and other rejects separately with measured mass and destination or fate. Do not force a product-flow identity when physical material and destination are not established.

- Selected flow: harvest or collection reject, foreign material, or fate-specific loss
- Flow property / unit: Mass / kg as received or declared dry-matter basis
- Amount rule: measured reject or loss mass, or calculated residual after reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_collection_records`
- Sources: `fao-sorghum-postharvest-operations`; `mass-balance-identity`

##### Elementary flows

No elementary output is required by default; operation-specific emissions are recorded when the collection operation has a supported energy or emission record.

### Process: Primary Sorghum Conditioning (`primary_sorghum_conditioning`)

#### Inputs

##### Product flows

###### Grain entering primary conditioning (`grain_entering_primary_conditioning`)

Include this conditional process only when threshing, drying, cleaning, grading, or equivalent first conditioning occurs before the declared gate.

- Selected flow: Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured grain mass entering the included conditioning operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted conditioned sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `fao-sorghum-postharvest-operations`

###### Conditioning energy (`conditioning_energy`)

Record electricity, fuel, heated air, or other energy carrier used by included threshing, drying, cleaning, or grading equipment.

- Selected flow: conditioning energy carrier or utility
- Flow property / unit: Mass, Volume, or Energy / L, kg, MJ, or kWh
- Amount rule: measured utility or energy-carrier use by conditioning batch or operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted conditioned sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `fao-sorghum-postharvest-operations`

###### Conditioning water (`conditioning_water`)

Record water only when washing, wet cleaning, dust control, or another water-using conditioning step is included.

- Selected flow: process water used in sorghum conditioning
- Flow property / unit: Volume or Mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: measured water use by conditioning operation; justified zero when no water-using step is included
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted conditioned sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `fao-sorghum-postharvest-operations`

##### Waste flows

No waste input is required by default. Recovered secondary material requires an explicit origin and burden decision.

##### Elementary flows

Conditioning water withdrawal and direct combustion emissions are recorded only when the conditioning operation is included and corresponding input records exist.

#### Outputs

##### Product flows

###### Accepted sorghum grain at declared gate (`accepted_sorghum_grain_at_declared_gate`)

Accepted sorghum grain is the reference output after the optional conditioning node. Report moisture, quality descriptors, foreign material, and gate metadata with the accepted mass.

- Selected flow: Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured net accepted grain after included conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_output_records`
- Sources: `fao-sorghum-postharvest-operations`; `usda-sorghum-standards`; `mass-balance-identity`

##### Waste flows

###### Conditioning rejects, removed moisture, and dust (`conditioning_rejects_removed_moisture_and_dust`)

Record screenings, foreign material, broken or rejected grain, removed moisture, dust, and cleaning residues separately, with measured mass or an explicit moisture calculation and a destination or fate.

- Selected flow: conditioning reject, removed moisture, screening, dust, or cleaning residue by material identity and fate
- Flow property / unit: Mass / kg as received or declared dry-matter basis
- Amount rule: measured or calculated from input-output reconciliation and moisture records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted conditioned sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_output_records`
- Sources: `fao-sorghum-postharvest-operations`; `usda-sorghum-standards`; `mass-balance-identity`

##### Elementary flows

###### Conditioning dust (`conditioning_dust`)

Record dust emissions only when the conditioning operation and receiving compartment are supported by operation records and a compatible receiving-compartment identity.

- Selected flow: particulate or other dust emission to ambient air
- Flow property / unit: Mass / kg emitted substance
- Amount rule: measured or calculated from included conditioning records and declared factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted conditioned sorghum grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `fao-sorghum-postharvest-operations`

###### Conditioning fuel emissions (`conditioning_fuel_emissions`)

Record direct combustion emissions only when fuel use is included and a declared factor method supports the calculation.

- Selected flow: fossil combustion emissions to ambient air from conditioning energy
- Flow property / unit: Mass / kg emitted substance
- Amount rule: calculated from included fuel or energy records and declared factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted conditioned sorghum grain
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `fao-sorghum-postharvest-operations`

## 7. Allocation and Co-product Handling

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | field and conditioning processes | First avoid allocation by subdividing operations or collecting separate records for grain, intentionally recovered residue, rejects, and fate-specific treatment. | `iso-14044-2006` |
| `allocation_grain_and_recovered_residue` | grain and intentional residue co-products | When subdivision is not possible, use a declared allocation method supported by representative product properties or values, document the choice, and provide a sensitivity to a materially different defensible method. | `iso-14044-2006` |
| `allocation_residue_fate` | field residue and rejects | Keep residue collection, incorporation, grazing, burning, disposal, and transfer distinct. Do not credit a displaced product unless the destination, function, market, and substitution evidence are declared. | `ipcc-2019-cropland`; `iso-14044-2006` |
| `allocation_moisture_conditioning` | primary conditioning | Allocate conditioning burdens using measured mass and moisture transformation of each output; do not allocate removed moisture as accepted grain. | `fao-sorghum-postharvest-operations`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot_records` | `field_sorghum_production` | source planting-seed lot | seed and input record | variety or hybrid; lot; treatment; supplier; mass; planting date; field; source status | invoice, seed tag, field log | kg, date, field | per planting event | complete crop season | field or production unit | sum by field and normalize to accepted grain | lot label, invoice, field log |
| `cp_nutrient_input_records` | `field_sorghum_production` | fertilizer and soil amendments | purchase and application record | product; formulation; nutrient content; mass; date; field; application method | invoice, label, application log | kg product, kg nutrient, date | per application | complete crop season | field and production unit | sum by input and field; retain nutrient mass | invoice, label, application record |
| `cp_irrigation_records` | `field_sorghum_production` | irrigation and withdrawal | meter or source record | source; meter; readings; volume; date; field; pumping energy | calibrated meter, pump log, supplier record | m3, kg, kWh | event or month | irrigation portion of crop season | field and source | sum by source and normalize to accepted grain | calibration, readings, source record |
| `cp_crop_protection_records` | `field_sorghum_production` | crop protection | application record | product; active substance; dose; area; date; field; target | label and application log | kg product, kg active substance, ha | per application | complete crop season | field | sum by product and active substance | label, applicator log |
| `cp_field_energy_records` | `field_sorghum_production` | field energy and machinery | fuel, electricity, or service record | operation; carrier; quantity; machine or supplier; date; field | fuel log, meter, invoice, contractor record | L, kg, MJ, kWh, service unit | operation or billing interval | complete crop season | field or production unit | attribute to field operations without double counting | meter, invoice, log |
| `cp_land_and_output_records` | `field_sorghum_production` | land, harvest, grain, residue, and loss | field and harvest record | area; dates; harvested grain; accepted grain; moisture; quality; residues; rejects; losses; fate | calibrated scale, field map, dispatch and fate records | ha, kg, moisture fraction, date | harvest and reconciliation | complete crop season | field and gate | reconcile all outputs before normalization | scale calibration, field map, tickets, fate records |
| `cp_harvest_collection_records` | `sorghum_harvest_and_collection` | harvested and delivered grain | harvest, receiving, and dispatch record | lot; source field; received mass; moisture; quality; foreign material; dispatch mass; date; destination | calibrated scale, receiving ticket, dispatch record | kg, moisture fraction, date | lot or delivery | declared harvest and collection coverage | field, collection point, and gate | reconcile received and delivered lots | scale calibration, tickets, quality record |
| `cp_conditioning_input_records` | `primary_sorghum_conditioning` | conditioning energy and water | batch and utility record | batch; received mass; moisture; operation; carrier; quantity; water; date | batch sheet, meter, invoice | kg, moisture fraction, L, m3, MJ, kWh | batch or utility interval | declared conditioning coverage | conditioning facility | sum by batch and normalize to accepted grain | batch sheet, meter, invoice |
| `cp_conditioning_output_records` | `primary_sorghum_conditioning` | accepted grain and rejects | batch output and quality record | input mass; output mass; moisture; quality; foreign material; screening; removed moisture; dust; fate; gate | calibrated scale, moisture test, quality record | kg, moisture fraction, date | batch | declared conditioning coverage | conditioning facility and gate | reconcile input, accepted output, rejects, moisture, and dust | calibration, moisture test, dispatch and fate records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_accepted_grain` | all foreground rows | divide the measured or calculated row amount by net accepted grain at the same declared gate and basis | output and input records | amount per 1 kg reference product | `mass-balance-identity` |
| `convert_moisture_basis` | grain and conditioning rows | convert only from measured as-received mass and declared moisture using an explicit mass-and-water equation; retain both original and converted values | `cp_land_and_output_records`; `cp_conditioning_output_records` | declared moisture-basis mass | `mass-balance-identity`; `fao-sorghum-postharvest-operations` |
| `calculate_managed_soil_emissions` | nitrogen emissions | apply the selected IPCC method tier to collected nutrient inputs and declared soil, climate, and management context; disclose factors and species conversions | `cp_nutrient_input_records`; declared method factors | species-specific emissions | `ipcc-2019-managed-soils-n2o` |
| `calculate_land_occupation` | land occupation | cultivated area multiplied by the declared crop-season occupation basis and normalized to accepted grain | `cp_land_and_output_records` | area-time per reference product | `ipcc-2019-cropland`; `mass-balance-identity` |
| `reconcile_field_outputs` | field production | accepted grain plus recovered residue, rejects, field residue, and unexplained loss must reconcile to the harvested record within a declared tolerance | `cp_land_and_output_records` | output mass balance and unexplained fraction | `mass-balance-identity` |
| `reconcile_harvest_collection` | harvest and collection | received grain must reconcile to delivered grain, rejects, foreign material, and documented collection loss on a common mass basis | `cp_harvest_collection_records` | collection mass balance | `fao-sorghum-postharvest-operations`; `mass-balance-identity` |
| `reconcile_conditioning_outputs` | primary conditioning | received grain mass and water content must reconcile to accepted grain, rejects, removed moisture, dust, and documented loss | `cp_conditioning_input_records`; `cp_conditioning_output_records` | conditioning mass-and-moisture balance | `mass-balance-identity`; `fao-sorghum-postharvest-operations` |
| `apply_co_product_allocation` | grain and intentionally recovered residue | apply the declared subdivision, mass, economic, or other defensible method only after output identities and destinations are documented; run a sensitivity | output records; allocation decision | allocated burdens by output | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and field | Declare variety or hybrid, end-use route, geography, crop season, production system, irrigation, gate, grain state, moisture basis, quality descriptors, foreign-material rule, and packaging or bulk state. | dataset metadata, field records, quality and gate records |
| `dq_temporal_coverage` | crop production | Cover the complete declared crop season and harvest year; if an aggregated dataset is used, disclose the contributing seasons and weighting. | dated field, input, harvest, and dispatch records |
| `dq_input_completeness` | crop, harvest, and conditioning inputs | Quantify or justify zero or exclusion for seed, nutrient inputs, crop protection, irrigation, field energy, harvest or collection, conditioning energy and water, land, and treatment. | ledgers, labels, meters, logs, invoices, process records |
| `dq_moisture_and_quality` | grain output | Retain sampling method, moisture result, quality or grade descriptors, foreign material, rejected mass, and the conversion basis used for normalization. | calibrated scale, moisture test, quality record |
| `dq_mass_balance` | all outputs | Reconcile field, harvest, collection, and conditioning outputs, including accepted grain, residues, rejects, removed moisture, dust, and unexplained loss; document tolerance and calibration. | scale records, batch sheets, calculation workbook |
| `dq_method_identity` | UUID-bearing rows and factors | Verify each Tiangong flow, property, and unit-group identity and keep external factors separate from identity evidence. | reviewed identity record, source factor, method note |
| `dq_allocation_and_fate` | co-products and residues | Record the output destination, burden treatment, allocation method, substitution evidence, and sensitivity whenever multiple intended outputs are reported. | dispatch, fate, allocation, and sensitivity records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm one 1 kg net accepted non-seed sorghum grain reference flow, all required qualifiers, and a reviewed Tiangong product, property, and unit-group identity before publication. | `mass-balance-identity`; `usda-sorghum-standards` |
| `validation_scope` | boundary | Confirm sorghum seed, forage or silage routes, and downstream flour, meal, malt, beverage, ethanol, starch, feed, food, and distribution activities are excluded unless a separate declared dataset boundary is used. | `fao-sorghum-postharvest-operations`; `fao-grain-postharvest-systems` |
| `validation_process_map` | process inventory | Confirm field production and harvest or collection are present and that primary conditioning is included only when its condition, hand-off, inputs, outputs, and gate are explicit. | `fao-sorghum-postharvest-operations` |
| `validation_mass_balance` | outputs | Confirm harvested grain, accepted grain, residues, rejects, removed moisture, dust, and losses reconcile within the declared tolerance, with every non-reference output assigned a fate. | `mass-balance-identity` |
| `validation_moisture_and_quality` | grain and conditioning | Confirm as-received mass, moisture basis, quality or grade descriptors, foreign material, and any conversion equation are retained; do not apply an undocumented default moisture factor. | `fao-sorghum-postharvest-operations`; `usda-sorghum-standards`; `mass-balance-identity` |
| `validation_nitrogen` | fertilizer and emissions | Confirm product mass, nutrient mass, selected IPCC tier, factor source, species, unit, and conversion are declared and not supplied by a module. | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_energy` | water and energy | Confirm source, carrier, unit, operation, meter or record, and upstream versus foreground treatment are explicit and no supplied water or energy is counted twice. | `ipcc-2019-cropland`; `mass-balance-identity` |
| `validation_allocation` | multiple outputs | Confirm intentional residue co-products are distinguished from waste, the allocation decision is explicit, and an alternative defensible method is tested when allocation is material. | `iso-14044-2006` |
| `validation_identity_review` | all bound flow rows | Reject finalization when a flow binding is absent or does not match direction, flow type, property, unit group, geography, or gate; retain unsupported conceptual outputs as unmapped coverage. | `mass-balance-identity` |
| `validation_data_quality` | data package | Confirm every required category has a collected value, calculated value with inputs, justified zero, or documented exclusion, and disclose open review items. | `fao-sorghum-postharvest-operations`; `ipcc-2019-cropland` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Non-seed sorghum grain matching the declared variety or hybrid, end-use route, geography, production system, irrigation, crop season, moisture basis, quality descriptors, and farm or primary-conditioning gate |
| excluded_use | sorghum seed; forage or silage sorghum; flour, meal, malt, beverage, ethanol, starch, feed, food, retail, distribution, consumption, or unqualified storage datasets |
| required_metadata | reviewed reference-flow identity; variety or hybrid; end-use route; geography; field and season; seed input status; production system; irrigation; gate; grain state; moisture and quality descriptors; accepted output; residue and reject fate; allocation; source and protocol coverage |
| required_quality_disclosure | crop seasons; field and supplier coverage; primary-record coverage; mass-balance tolerance; scale and moisture calibration; nutrient and emission methods; water source; energy carriers; harvest and conditioning coverage; gate; exclusions; allocation and sensitivity; identity coverage and unmapped-flow disclosure |
| update_trigger | material change in gate, grain state, moisture convention, quality rule, production route, irrigation, nutrient or crop-protection practice, conditioning technology, output fate, allocation method, or representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sorghum-postharvest-operations` | official_guidance | FAO INPhO, *Sorghum: Post-harvest Operations*, <https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_SORGHUM.pdf> | sorghum harvest, threshing, drying, cleaning, storage, handling, quality, and loss process decomposition |
| `fao-grain-postharvest-systems` | official_guidance | FAO, *Agricultural engineering in development: Grain and post-harvest systems*, <https://www.fao.org/4/t0522e/T0522E03.htm> | cereal harvest-to-market process sequence, drying, cleaning, storage, and gate distinctions |
| `usda-sorghum-standards` | official_guidance | USDA Agricultural Marketing Service, *United States Standards for Sorghum*, <https://www.ams.usda.gov/sites/default/files/media/SorghumStandards.pdf> | sorghum grain quality, grade, foreign-material, damage, and acceptance descriptors |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | cropland management, residue treatment, land, and crop-management method context |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil nitrogen-emission calculation and factor selection |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines* | allocation hierarchy, data quality, and sensitivity expectations |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for crop harvest, conditioning, reject, moisture, and reference-flow reconciliation. | output reconciliation, normalization, and QA guardrails |
