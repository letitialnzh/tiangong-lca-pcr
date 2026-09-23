---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.canary-seed
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Canary seed grain

## 1. Scope and Applicability

This PCR covers cultivated canary seed grain (annual canarygrass, *Phalaris canariensis*) delivered at the farm gate after harvest. It includes field preparation, seeding, crop management, harvest, and optional on-farm cleaning or drying when those operations occur before hand-off. It covers grain sold for bird feed, food ingredients, or further processing. It excludes certified seed multiplication, whole-crop forage, hay, silage, grazing, cover-crop services, off-farm cleaning or milling, feed manufacture, and downstream transport or use.

The foreground data package shall declare geography, cultivar or variety, crop year, field area, yield, moisture, impurity basis, intended use, residue fate, and whether conditioning is included. Seeding rate, weed-control programme, harvest timing, and post-harvest quality are collected inputs rather than fixed PCR quantities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.canary-seed |
| classification_refs | CPC 3.0: 01195 Canary seed |
| covered_products | harvested canary seed grain for feed, food, or further processing at the farm gate |
| excluded_products | certified seed; whole-crop forage, hay, silage, grazing, or cover-crop service; milled products; prepared bird feed; off-farm storage and transport |
| representative_product | clean or uncleaned harvested canary seed grain, with declared moisture and quality state |
| production_route | managed annual canarygrass cultivation, harvest, and conditional on-farm grain conditioning |
| market_state | unprocessed grain at farm gate, with moisture, impurity, treated-seed, variety, and intended-use status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | canary seed grain at the farm gate |
| How much | 1,000 kg as-received grain |
| How well | harvested, unprocessed grain with declared moisture, impurity, damage, variety, and intended-use specifications |
| How long or cycle | one declared canary seed crop cycle |
| reference_flow_link | terminal grain output from `canary_seed_field_production` when conditioning is absent, otherwise from `canary_seed_grain_conditioning` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Canary seed, production mix, at farm gate, harvested grain, unprocessed `b390e8bf-4421-40ac-9881-10792f8fef57` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; cultivar or variety; crop year; harvested grain moisture; impurity and dockage basis; intended use; treated-seed status; conditioning included or excluded |
| Binding | `fixed` |
| Flow Set |  |
| Flow Set version |  |
| Flow Set group |  |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | reference canary seed grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-received grain mass and measured moisture; retain the moisture basis for every dry-matter or conditioning conversion. |
| `area_to_reference_conversion` | area-based field records | activity-specific property | activity-specific unit | Divide each crop-cycle field total by marketable grain yield from the same fields and cycle, then scale to 1,000 kg reference grain. The resulting inventory amount is reported on a `reference_flow` basis. |
| `nutrient_content_basis` | fertilizer and amendment records | nutrient mass | kg N, kg P2O5, or kg K2O | Preserve formulated product mass and declared nutrient content separately; do not merge N, P2O5, and K2O into one fertilizer amount. |
| `moisture_and_impurity_basis` | grain outputs and conditioning | Mass and moisture | kg and mass-% | State whether quantities are gross, net cleaned, or dry-matter adjusted and keep dockage, screenings, and rejects outside accepted grain mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field at the beginning of the canary seed crop cycle, with seed and purchased management inputs crossing the foreground boundary |
| starting_condition_role | start of managed canary seed grain production |
| product_classification_scope | cultivated canary seed grain corresponding to CPC 3.0 code 01195 |
| recursive_input_rule | purchased or retained canary seed for sowing is an explicit seed input linked to a distinct upstream seed-supply dataset and shall not loop to this harvested-grain process |
| upstream_dataset_requirement | compatible upstream datasets for seed, fertilizers, crop-protection formulations, fuels, electricity, irrigation supply, and contracted services |
| disclosure | crop type, cultivar, geography, crop dates, previous crop, tillage, seeding rate, irrigation, nutrient products, pesticide products, yield, moisture, impurity, residue fate, and conditioning boundary |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | all conforming datasets | Include field preparation, seeding, crop management, harvest, and on-farm cleaning or drying performed before farm-gate hand-off. | `saskatchewan-canary-seed-guide` |
| `boundary_direct_field_emissions` | managed soil and crop emissions | Include direct and indirect nitrogen-related emissions and relevant combustion or field emissions using geographically applicable methods and the same activity records used for nutrient and residue accounting. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | straw, chaff, and crop residues | Distinguish residues returned to soil, burned, removed as a useful co-product, and removed as waste; prevent double counting residue nitrogen and exported material. | `ipcc-2019-managed-soils` |
| `boundary_conditioning_gate` | optional conditioning | Include electricity, heat, incoming grain, accepted grain, screenings, rejects, and measured moisture loss only when cleaning or drying occurs before the declared farm-gate hand-off. | `cgc-canary-seed-grading-2026`; `mass-balance-identity` |
| `boundary_post_farm_gate_exclusion` | downstream activities | Exclude off-farm transport, storage, milling, feed manufacture, food preparation, and use unless a study explicitly extends beyond this PCR. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `canary_seed_field_production` | Canary seed field production and harvest | required | always | managed biological production and harvest | cultivated hectare and harvested grain mass for one crop cycle |
| `canary_seed_grain_conditioning` | On-farm canary seed grain conditioning | conditional | cleaning, drying, sorting, or temporary handling occurs before farm-gate hand-off and is not already included in field records | prepare harvested grain to declared market state | matched incoming and accepted grain masses |

### Process: Canary seed field production and harvest (`canary_seed_field_production`)

#### Inputs

##### Product flows

###### Canary seed for sowing (`canary_seed_input`)

Record purchased or retained seed crossing into the crop cycle. Do not substitute the harvested-grain UUID for seed identity.

- Selected flow: Canary seed for sowing
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass sown, summed by field and converted from crop-cycle records to the reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain; collect per field and crop cycle, then divide by same-cycle marketable yield
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources: `saskatchewan-canary-seed-guide`
- Range: Published seeding-rate context
  - Range role: Typical range (`typical_range`)
  - Lower: 22
  - Upper: 45
  - Unit: kg seed/ha
  - Basis: drilled canary seed establishment per cultivated hectare; convert to the reference flow using same-cycle yield
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `saskatchewan-canary-seed-guide`

###### Agricultural nutrient and fertilizer inputs (`canary_seed_field_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain; nutrient product mass multiplied by declared N fraction
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources:
- Range: Provisional nitrogen-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg N/ha
  - Basis: one crop cycle; convert using same-cycle marketable yield and replace with regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kg P2O5/ha
  - Basis: one crop cycle; convert using same-cycle marketable yield and replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional potassium-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg K2O/ha
  - Basis: one crop cycle; convert using same-cycle marketable yield and replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water_input`)

Record irrigation delivered to the field separately from precipitation. Rainfed production is recorded as zero irrigation input.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered volume or verified pump-flow calculation and conversion to the reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain; crop-cycle irrigation total divided by same-cycle marketable yield
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional irrigation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6,000
  - Unit: m3/ha
  - Basis: one crop cycle, including rainfed production at zero; convert using same-cycle yield
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel used by field machinery (`field_diesel_input`)

Record diesel consumed by owned or controlled machinery. Contractor fuel belongs in an upstream contracted-service dataset when that service is modelled separately.

- Selected flow: Diesel fuel for agricultural machinery
- Flow property / unit: Volume / L
- Amount rule: measured or invoiced diesel assigned to canary seed operations and converted to the reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain; crop-cycle fuel total divided by same-cycle marketable yield
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional field-fuel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 220
  - Unit: L/ha
  - Basis: complete field-operation cycle; convert using same-cycle marketable yield
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulation applied (`crop_protection_input`)

Record each herbicide, fungicide, insecticide, desiccant, or other formulation by product identity and application event. Retain active ingredients and product identities before aggregation.

- Selected flow: Crop-protection formulation
- Flow property / unit: Mass / kg formulation
- Amount rule: measured or invoiced product mass by formulation, summed by field and converted to the reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference grain; crop-cycle formulation mass divided by same-cycle marketable yield
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional crop-protection screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg formulation/ha
  - Basis: complete crop cycle; convert using same-cycle marketable yield and retain product labels
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Land occupation for canary seed cultivation (`canary_seed_land_occupation`)

Record cultivated area and occupation duration for the fields represented by the crop-cycle inventory.

- Selected flow: Land occupation, arable land
- Flow property / unit: Area-time / m2*a
- Amount rule: cultivated area × occupation duration, converted to the reference flow using same-cycle marketable yield
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain; area-time total divided by same-cycle marketable yield
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional land-occupation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 8
  - Unit: ha*a/1,000 kg grain
  - Basis: one declared annual crop cycle and its represented cultivated area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvested canary seed grain at farm gate (`harvested_canary_seed_grain_output`)

Record marketable harvested grain leaving field production. If conditioning is included, this row is the matched incoming grain to conditioning rather than the terminal reference output.

- Selected flow: Canary seed, production mix, at farm gate, harvested grain, unprocessed `b390e8bf-4421-40ac-9881-10792f8fef57`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted or harvested grain mass with moisture and impurity basis declared; scale to 1,000 kg reference grain
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: Provisional marketable-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 250
  - Upper: 3,000
  - Unit: kg grain/ha
  - Basis: same-cycle harvested grain yield per cultivated hectare; retain actual field and weighbridge records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Canary seed straw or chaff removed from field (`removed_canary_seed_residue_output`)

Record straw or chaff only when it crosses the field boundary as a useful co-product or waste. Residue left or incorporated in the field is recorded through residue fate, not as an exported product.

- Selected flow: Canary seed straw or chaff, removed from field
- Flow property / unit: Mass / kg dry or as-received material
- Amount rule: measured removed residue mass with moisture and destination, converted to the reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain; crop-cycle residue mass divided by same-cycle marketable yield
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_fate`
- Range: Provisional removed-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,500
  - Unit: kg residue/ha
  - Basis: only residue physically removed from represented fields; convert using same-cycle yield
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residue not removed (`retained_canary_seed_residue`)

Record straw, chaff, and other crop residues that remain on the field or are incorporated. This row documents residue fate for emissions and avoids treating retained residue as a co-product.

- Selected flow: Canary seed crop residue, retained in field
- Flow property / unit: Mass / kg dry matter
- Amount rule: calculate from residue records, harvest yield, and a measured or justified residue-to-grain ratio, then convert to the reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_waste_fate`
- Range: Provisional retained-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,500
  - Unit: kg dry residue/ha
  - Basis: residue returned or retained on the represented field; convert using same-cycle marketable yield
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide released to ambient air (`field_n2o_air_output`)

Calculate direct and indirect N2O emissions from fertilizer, organic inputs, residue nitrogen, volatilization, and leaching pathways with the selected regional method.

- Selected flow: Nitrous oxide, to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: selected IPCC or regional method applied to collected nitrogen activity data and residue fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional N2O screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg N2O/1,000 kg grain
  - Basis: complete crop cycle; method and regional factors must be disclosed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia released to ambient air (`field_ammonia_air_output`)

Calculate ammonia volatilization from nitrogen products using product type, placement, timing, weather, and an applicable method factor.

- Selected flow: Ammonia, to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: product- and application-specific volatilization method applied to collected nitrogen records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `emep-eea-2023-guidebook`
- Range: Provisional ammonia screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg NH3/1,000 kg grain
  - Basis: complete crop cycle; use product and application records with a reviewed factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate released to water (`field_nitrate_water_output`)

Calculate nitrate loss to water from nitrogen inputs, soil, drainage, and local hydrology using the selected method; do not infer nitrate loss from fertilizer mass alone.

- Selected flow: Nitrate, to water
- Flow property / unit: Mass / kg NO3-
- Amount rule: selected regional leaching method applied to nitrogen activity, soil, drainage, and climate records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional nitrate-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg NO3-/1,000 kg grain
  - Basis: complete crop cycle; disclose drainage and factor method
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen oxides released to ambient air (`field_nox_air_output`)

Record nitrogen oxides from field combustion and nitrogen-related processes where the selected emission method requires the flow.

- Selected flow: Nitrogen oxides, to ambient air
- Flow property / unit: Mass / kg NOx
- Amount rule: apply the selected combustion or agricultural emission factor to collected activity data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional NOx screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12
  - Unit: kg NOx/1,000 kg grain
  - Basis: complete crop cycle and represented fuel activity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: On-farm canary seed grain conditioning (`canary_seed_grain_conditioning`)

#### Inputs

##### Product flows

###### Harvested grain entering conditioning (`harvested_canary_seed_conditioning_input`)

Include this input only when cleaning, drying, sorting, or temporary handling occurs before the declared farm-gate hand-off.

- Selected flow: Canary seed harvested grain entering conditioning
- Flow property / unit: Mass / kg
- Amount rule: weighed incoming grain batch with incoming moisture and impurity basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference grain output; incoming batch is reconciled to terminal accepted output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional incoming-to-accepted mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1,300
  - Unit: kg incoming grain/1,000 kg accepted grain
  - Basis: matched conditioning batch; retain wet-mass and moisture balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to conditioning (`conditioning_electricity_input`)

Record electricity for fans, conveyors, cleaners, elevators, and other equipment included before farm-gate hand-off.

- Selected flow: Electricity supply, applicable site supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter reading or equipment energy record allocated to matched conditioning batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference grain output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional conditioning electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kWh/1,000 kg accepted grain
  - Basis: matched pre-gate conditioning batches
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy supplied for drying (`conditioning_heat_input`)

Record purchased heat or fuel-derived thermal energy used to dry grain before farm-gate hand-off; disclose the carrier and avoid double counting fuel already included in machinery records.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `purchased-process-heat`
- Amount rule: measured heat meter, fuel-to-heat calculation, or supplier record allocated to matched conditioning batches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference grain output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional conditioning heat screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,200
  - Unit: MJ/1,000 kg accepted grain
  - Basis: matched pre-gate drying batches; disclose moisture reduction and heat source
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conditioned canary seed grain at farm gate (`conditioned_canary_seed_grain_output`)

Use this terminal output when conditioning is included in the declared route. It carries the same reference-flow identity and must state final moisture and quality basis.

- Selected flow: Canary seed, production mix, at farm gate, harvested grain, unprocessed `b390e8bf-4421-40ac-9881-10792f8fef57`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: measured accepted grain mass after conditioning, scaled to 1,000 kg reference grain
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference grain output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Terminal reference-output check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1,000
  - Upper: 1,000
  - Unit: kg accepted grain/1,000 kg reference grain
  - Basis: PCR reference flow after route scaling
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Canary seed screenings directed to a useful use (`canary_seed_screenings_output`)

Record screenings separately when intentionally sold or transferred to a documented useful use. Material sent to disposal belongs in the reject-waste row.

- Selected flow: Canary seed screenings or downgraded grain for documented useful use
- Flow property / unit: Mass / kg
- Amount rule: weighed screenings by batch, moisture, and destination, converted to the reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference grain output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Provisional useful-screenings screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kg/1,000 kg accepted grain
  - Basis: matched conditioning batch and documented destination
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Foreign matter and rejected grain (`conditioning_reject_waste_output`)

Record foreign matter, stones, treated seed, damaged grain, and other rejects sent to disposal or a non-product treatment route. Do not count them as accepted grain.

- Selected flow: Canary seed conditioning rejects and foreign matter
- Flow property / unit: Mass / kg
- Amount rule: weighed reject mass by destination and batch, converted to the reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference grain output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `cgc-canary-seed-grading-2026`
- Range: Provisional conditioning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg/1,000 kg accepted grain
  - Basis: matched conditioning batch; distinguish dockage, useful screenings, and disposal rejects
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | field production and conditioning | Prefer separate records for field production and conditioning and separate measurement of grain, removed residue, screenings, and rejects before allocating shared burdens. | `iso-14044-2006` |
| `allocation_retained_residue` | residues retained or incorporated | Do not treat retained residues as co-products; include their management and emissions in field production and prevent double counting with removed residue. | `ipcc-2019-managed-soils` |
| `allocation_removed_residue` | useful removed straw or chaff | If subdivision cannot resolve shared field burdens, apply economic allocation using contemporaneous farm-gate values; disclose moisture bases and test mass allocation as a sensitivity. | `iso-14044-2006` |
| `allocation_conditioning_outputs` | useful screenings and rejects | Treat an output with documented positive use as a co-product and disposal material as waste; use economic allocation at conditioning hand-off only when subdivision is infeasible. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `canary_seed_field_production` | seed, nutrients, irrigation, fuel, crop protection, land | field log, invoice, application record, meter, or contractor record | field_id; area; cultivar; input_product; amount; nutrient_content; date; operation; contractor_scope | reconcile physical inputs and operations to every represented field and crop cycle | kg; kg nutrient; L; m3; ha | each event | complete crop cycle | all represented fields | sum by physical identity; calculate nutrients without merging products; normalize with same-cycle area and yield | invoices; labels; calibrated meters; field logs |
| `cp_harvest_output_records` | `canary_seed_field_production` | grain and removed residue | weighbridge, yield monitor, moisture test, bale record | field_id; harvest_date; grain_mass; grain_moisture; impurity; residue_mass; residue_moisture; residue_fate; destination | reconcile accepted grain and each residue destination to field area and crop cycle | kg; percent; ha | each harvest | complete crop cycle | all represented fields | sum accepted grain and each residue fate separately | scale or yield-monitor calibration; moisture tests; destination evidence |
| `cp_field_emission_activity` | `canary_seed_field_production` | emissions to air and water | nutrient, soil, weather, residue, drainage, and emission-model records | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | calculate each emission with one declared geographically applicable method | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented fields | calculate per field, area-weight, then normalize by same-cycle yield | source records; factor provenance; model file; nitrogen-balance review |
| `cp_residue_and_waste_fate` | `canary_seed_field_production` | retained and removed residues | field residue log, bale ticket, burn or incorporation record | field_id; residue_mass; dry_matter; fate; destination; date | link residue fate to the same harvest and field records used for yield | kg; percent; ha | each field and harvest | complete crop cycle | all represented fields | sum by fate; exclude retained residue from co-product outputs | field records; destination receipts; residue calculation evidence |
| `cp_conditioning_records` | `canary_seed_grain_conditioning` | incoming grain, energy, accepted grain, screenings, rejects | batch ticket, scale, moisture test, electricity or heat meter, destination record | batch_id; incoming_mass; incoming_moisture; electricity; heat; accepted_mass; accepted_moisture; screenings; rejects | reconcile matched conditioning batches and meters to accepted output | kg; percent; kWh; MJ | each batch or meter period | all pre-gate conditioning | all included equipment and batches | sum matched batches; allocate shared meters by time or processed mass; close wet-mass balance | calibrated scales and moisture meters; meter reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field flows | crop-cycle amount per hectare / marketable grain yield per hectare × 1,000 kg | flow amount; area; same-cycle grain mass | amount per 1,000 kg reference grain |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | product mass × declared nutrient fraction; preserve N, P2O5, and K2O reporting bases | product identity; mass; assay; reporting basis | nutrient amount by source |  |
| `calc_managed_soil_n2o` | soil N2O | apply selected IPCC tier or regional method to fertilizer N, organic N, returned-residue N, volatilization, and leaching pathways | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | calculate by fertilizer type, application method, timing, and applicable factor | nitrogen product records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_nitrate_loss` | nitrate to water | apply selected regional drainage or leaching method to nitrogen activity and hydrological records | nitrogen activity; soil; drainage; climate; factors | kg NO3- | `ipcc-2019-managed-soils` |
| `calc_conditioning_mass_balance` | grain conditioning | incoming wet grain = accepted grain + useful screenings + rejects + moisture and other measured losses within uncertainty | masses; moisture; loss records | reconciled outputs per accepted grain | `mass-balance-identity` |
| `calc_moisture_adjustment` | grain and residue mass | convert between as-received and declared dry-matter bases using measured moisture; retain original and converted values | mass; moisture; target basis | adjusted mass | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Confirm canary seed rather than wheat, rye, mixed cereal, or another bird-seed component; retain cultivar, intended use, state, and hand-off. | crop, lot, grade, and sales records |
| `dq_temporal_alignment` | all foreground rows | Use inputs, harvest, yield, emissions, residue, and conditioning records from the same crop cycle; disclose proxy years. | dated field and batch records |
| `dq_mass_and_moisture` | grain, residue, and conditioning | Retain scale or yield-monitor calibration and moisture measurements for every basis conversion. | calibration and moisture-test records |
| `dq_quality_and_impurity` | grain outputs | Retain inspection or laboratory evidence for impurity, dockage, treated-seed status, variety, odour, damage, and intended-use quality. | grading or laboratory records |
| `dq_completeness` | process map and flows | Reconcile every field and conditioning batch and distinguish zero, not applicable, proxy, and missing values. | field roster; batch reconciliation |
| `dq_identity_resolution` | parameterized and unmapped flows | Resolve every Flow Set reference and unmapped physical exchange to a verified UUID before final TIDAS process publication. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal output | Exactly one terminal canary seed grain output equals 1,000 kg after scaling, uses the fixed reference UUID, and declares moisture and quality qualifiers. |  |
| `validation_process_route` | process map | Include field production once; include conditioning only before farm-gate hand-off and avoid double counting embedded energy, incoming grain, or rejects. |  |
| `validation_crop_cycle_reconciliation` | field inventory | Area, inputs, harvest outputs, residue fates, and emissions refer to the same fields and crop cycle. |  |
| `validation_nitrogen_balance` | nitrogen inventory | Reconcile nutrient content, returned and removed residue nitrogen, and emission pathways with methods and factors disclosed. | `ipcc-2019-managed-soils` |
| `validation_quality_state` | grain identity and output | State whether grain is gross harvested, cleaned, dried, or otherwise conditioned; keep impurity and moisture bases consistent with the declared reference state. | `cgc-canary-seed-grading-2026` |
| `validation_conditioning_balance` | conditioning | Reconcile incoming grain with accepted grain, useful screenings, rejects, moisture loss, and other measured losses within uncertainty. | `mass-balance-identity` |
| `validation_flow_identity` | every flow | Accept only exact verified UUIDs as `fixed` and applicable existing Flow Sets as `parameterized`; otherwise retain unmapped coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground canary seed grain production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | farm-gate LCA of canary seed grain and downstream systems preserving declared geography, moisture, impurity, residue, allocation, and conditioning context |
| excluded_use | certified seed, whole-crop forage or silage, milling, prepared bird feed, or another crop without reviewed proxy decision |
| required_metadata | geography; cultivar or variety; crop year; area; yield; moisture; impurity; intended use; seeding; nutrients; crop protection; fuel; irrigation; residue fate; conditioning; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy inputs; missing records; range exceedances; emission methods; meter and mass-balance reconciliations; grade or laboratory evidence |
| update_trigger | new reviewed canary seed evidence, material route change, revised emission method, changed Flow Set or UUID identity, or representative data outside QA ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `saskatchewan-canary-seed-guide` | official_guidance | Government of Saskatchewan, Canary Seed specialty crop guidance, https://www.saskatchewan.ca/business/agriculture-natural-resources-and-industry/agribusiness-farmers-and-ranchers/crops-and-irrigation/field-crops/specialty-crops/canary-seed | crop identity, production route, seeding context, and field-management disclosure |
| `cgc-canary-seed-grading-2026` | official_guidance | Canadian Grain Commission, Official Grain Grading Guide, Chapter 23: Canary seed, effective August 1, 2026, https://www.grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/23-canary-seed/grading.html | clean-sample definition, impurity, treated-seed, variety, quality, conditioning, and grading qualifiers |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | soil N2O, residue nitrogen, volatilization and leaching pathways, and double-counting controls |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023 | agricultural ammonia and air-emission method context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched canary seed conditioning batches | moisture adjustment, conditioning mass balance, and validation |
