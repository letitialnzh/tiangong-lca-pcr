---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fonio
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Fonio grain

## 1. Scope and Applicability

This PCR covers cultivated white fonio (*Digitaria exilis*) and black fonio (*Digitaria iburua*) delivered as dry, threshed, unhulled grain at the farm gate. It includes the crop cycle, harvest, field drying, threshing, winnowing, and optional dry cleaning or drying performed before hand-off. The dataset must identify the species, local cultivar or landrace, production geography, crop year, grain moisture, and whether primary post-harvest operations are included.

It excludes certified seed production, wild collection, forage or hay, grazing, cover-crop services, dehulling or husk removal, washing or de-sanding after dehulling, milling, flour, precooked or parboiled fonio, brewing, packaging, storage beyond the declared hand-off, and transport after the farm gate. Wet washing and de-sanding are downstream processing operations because they are used to prepare hulled fonio for consumption; they must not be added to this agricultural grain PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fonio |
| classification_refs | CPC 3.0: 01193 Fonio |
| covered_products | cultivated white or black fonio grain, harvested and threshed, with the hull retained, at the farm gate |
| excluded_products | fonio seed for planting; wild-collected grain; forage, hay, silage, grazing or cover-crop service; dehulled, washed, de-sanded, milled, precooked, parboiled or brewed fonio |
| representative_product | dry threshed fonio grain with hull retained |
| production_route | rainfed or irrigated smallholder or commercial cultivation, harvest, and conditional farm-gate primary post-harvest preparation |
| market_state | dry threshed unhulled grain at farm gate, with moisture, foreign matter, and intended use declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | dry threshed fonio grain with hull retained at the farm gate |
| How much | 1,000 kg as-received grain |
| How well | marketable harvested grain with species, moisture, foreign-matter basis, and intended use declared; dehulling is not included |
| How long or cycle | one declared annual crop cycle from sowing through the farm-gate hand-off |
| reference_flow_link | terminal grain output from `fonio_field_production` when primary post-harvest preparation is excluded, otherwise from `fonio_primary_postharvest` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fonio, production mix, at farm gate, harvested grain, unprocessed `0cd0dc39-a4ec-4caf-addb-1ec276c2f286` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | white or black fonio species; cultivar or landrace; production geography; crop year; harvest and drying dates; moisture at hand-off; foreign-matter basis; intended use; primary post-harvest preparation included or excluded |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | reference fonio grain | Mass | kg | Report the as-received grain mass together with measured moisture and the basis used for any dry-matter conversion. |
| `species_and_state_identity` | reference product | product identity | categorical | Identify white or black fonio and retain whether the hull is present; do not use a generic millet or dehulled-fonio flow as a substitute. |
| `area_to_reference_conversion` | area-based field flows | activity-specific property | activity-specific unit | Divide crop-cycle totals per hectare by marketable grain yield from the same fields and crop year before scaling to 1,000 kg grain. |
| `nutrient_basis` | nutrient applications | nutrient mass | kg N, kg P2O5, or kg K2O | Preserve formulated product mass, nutrient content, and reporting basis as separate fields. |
| `moisture_basis_consistency` | grain and residue masses | Mass | kg | Use one declared wet or dry basis within each balance; convert only with measured moisture and retain the original wet mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field at the beginning of the fonio crop cycle, with seed and purchased or retained management inputs crossing the foreground boundary |
| starting_condition_role | start of managed fonio grain production |
| product_classification_scope | cultivated white or black fonio grain corresponding to CPC 3.0 code 01193 |
| recursive_input_rule | seed used for sowing is a distinct upstream seed-supply input; it must not be represented by looping the harvested-grain reference flow back into the same production process |
| upstream_dataset_requirement | compatible upstream datasets for seed, nutrient products, crop-protection formulations, fuels, electricity, irrigation supply, and contracted field services when those burdens are outside the foreground operator |
| disclosure | species, cultivar or landrace, geography, field area, sowing and harvest dates, previous crop, establishment method, tillage, nutrient and irrigation practice, yield, moisture, residue fate, and primary post-harvest operations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | all conforming datasets | Include field preparation, sowing, crop management, harvest, field drying, threshing, and farm-gate primary dry cleaning or drying when those operations occur before hand-off. | `fao-millets-fonio`; `cirad-fonio-production-postharvest` |
| `boundary_primary_vs_food_processing` | post-harvest operations | Exclude dehulling, husk removal, washing, de-sanding, milling, precooking, parboiling, brewing, and other food preparation; declare them as downstream operations. | `cirad-fonio-production-postharvest`; `fao-fonio-postharvest` |
| `boundary_direct_field_emissions` | managed soil and field emissions | Include direct and indirect nitrogen-related emissions using a geographically applicable method and the same nutrient, residue, soil, and climate activity data used for the inventory. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | stalks, leaves, chaff, and other residues | Distinguish residues retained or returned to soil, burned, removed as useful fodder, and removed as waste; prevent double counting residue nitrogen and exported biomass. | `ipcc-2019-managed-soils` |
| `boundary_post_gate_exclusion` | downstream activities | Exclude off-farm transport, commercial storage, packaging, dehulling, washing, milling, food manufacture, and consumption unless the study scope explicitly extends beyond this PCR. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fonio_field_production` | Fonio field production and harvest | required | always | managed biological production and harvest | cultivated hectare and marketable grain mass for one crop cycle |
| `fonio_primary_postharvest` | Farm-gate fonio primary post-harvest preparation | conditional | threshing, winnowing, dry cleaning, or forced-air drying is separated from field records and occurs before hand-off | reconcile harvested grain to dry threshed unhulled grain at the declared hand-off | incoming grain and accepted grain mass |

### Process: Fonio field production and harvest (`fonio_field_production`)

#### Inputs

##### Product flows

###### Fonio seed for sowing (`fonio_seed_input`)

Record purchased or retained seed crossing into the crop cycle. Identify white or black fonio and the local seed lot; do not substitute the harvested-grain reference flow for planting seed.

- Selected flow: Fonio seed for sowing
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass sown by field and sowing event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted using same-cycle marketable grain yield
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources: `fao-cultivating-fonio`
- Range: Provisional fonio seed-rate screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 30
  - Unit: kg seed/ha
  - Basis: one crop cycle; retain the actual seed rate and establishment method, including broadcasting or row sowing
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`fonio_field_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Sources:
- Range: Provisional nitrogen-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg N/ha
  - Basis: one crop cycle; replace with soil-test, nutrient-plan, and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 60
  - Unit: kg P2O5/ha
  - Basis: one crop cycle; replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional potassium-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg K2O/ha
  - Basis: one crop cycle; replace with soil-test and regional evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional organic-amendment screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6000
  - Unit: kg dry matter/ha
  - Basis: one crop cycle; report zero where no amendment crosses the boundary
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`fonio_irrigation_water_input`)

Record irrigation delivered to the field separately from rainfall, including pumping or purchased-water activity when within the foreground boundary.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered volume or verified pump-flow calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional irrigation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: m3/ha
  - Basis: one crop cycle, including rainfed production at zero
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel used by field machinery (`fonio_field_diesel_input`)

Record diesel consumed by owned or controlled machinery. Assign contractor fuel to an upstream service dataset when the service is modelled separately.

- Selected flow: Diesel fuel for agricultural machinery
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured or invoiced diesel assigned to fonio field operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional field-diesel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: L/ha
  - Basis: one crop cycle; zero where operations are represented by upstream services or non-diesel equipment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulation applied (`fonio_crop_protection_input`)

Create one exchange for each actual herbicide, fungicide, insecticide, or other formulation and retain the active ingredient, concentration, and application event.

- Selected flow: Crop-protection formulation by physical product identity
- Flow property / unit: Mass / kg formulation
- Amount rule: measured formulation mass by product and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional per-formulation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg formulation/ha
  - Basis: each separately identified formulation in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Land occupation by fonio cultivation (`fonio_land_occupation`)

Record the cultivated area and occupation period for the fonio crop cycle as an elementary resource intervention; include land transformation only when the crop cycle causes a documented change in land use.

- Selected flow: Land occupation, arable crop, annual
- Flow property / unit: Area-time / m2·year
- Amount rule: cultivated area multiplied by occupation time for the declared crop cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_activity_records`
- Range: Provisional land-occupation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2
  - Unit: m2·year per m2 cultivated
  - Basis: annual crop occupation; replace with field dates where available
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvested fonio grain at farm gate (`fonio_grain_field_output`)

Record marketable dry threshed unhulled grain at the terminal field-production output. When primary post-harvest preparation is separated, this is the measured intermediate transferred to that process.

- Selected flow: Fonio, production mix, at farm gate, harvested grain, unprocessed `0cd0dc39-a4ec-4caf-addb-1ec276c2f286`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: measured marketable grain mass at the declared moisture and foreign-matter basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare; terminal output is scaled to 1,000 kg reference grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: Fonio grain yield screening range
  - Range role: Typical range (`typical_range`)
  - Lower: 150
  - Upper: 800
  - Unit: kg grain/ha
  - Basis: broad reported fonio yield context; retain local measured yield and moisture
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-ecocrop-fonio`

###### Fonio straw removed as useful product (`fonio_removed_straw_output`)

Record stalks and leaves only when deliberately collected and transferred as a useful fodder or material co-product. Residues retained or incorporated in the field are not this output.

- Selected flow: Fonio straw removed at field edge
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured removed straw mass by destination and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: Provisional removed-straw screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg dry matter/ha
  - Basis: one crop cycle; zero where residues remain or are returned to soil
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Nitrous oxide released to ambient air (`fonio_field_n2o_air_output`)

Calculate soil nitrous oxide from collected mineral and organic nitrogen, residue fate, and an applicable IPCC tier or reviewed regional method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: calculated from collected nitrogen activity data and declared emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `ipcc-2019-managed-soils`

###### Ammonia released to ambient air (`fonio_field_ammonia_air_output`)

Calculate ammonia volatilization by nutrient product, application method, timing, and geographically applicable factor.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: calculated from nitrogen application records and applicable factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `emep-eea-2023-guidebook`

###### Nitrate released to water (`fonio_field_nitrate_water_output`)

Record nitrate leaching or runoff only when supported by a geographically applicable model, monitored balance, or reviewed inventory method.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: calculated from nitrogen inputs, crop and soil conditions, drainage or runoff, and selected method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and converted to 1,000 kg grain
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_activity`
- Sources: `ipcc-2019-managed-soils`

### Process: Farm-gate fonio primary post-harvest preparation (`fonio_primary_postharvest`)

#### Inputs

##### Product flows

###### Threshed fonio grain entering primary preparation (`fonio_primary_grain_input`)

Record the measured grain batch transferred from field production to separated threshing, winnowing, dry cleaning, or forced-air drying before the farm-gate hand-off.

- Selected flow: Fonio, production mix, at farm gate, harvested grain, unprocessed `0cd0dc39-a4ec-4caf-addb-1ec276c2f286`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: measured incoming grain mass and moisture for each matched batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per preparation batch and converted to 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_postharvest_records`

###### Electricity supplied to primary preparation (`fonio_postharvest_electricity_input`)

Record electricity used by mechanical threshing, fans, conveyors, dry cleaners, or forced-air dryers included before the farm-gate hand-off.

- Selected flow: Electricity supply for fonio primary post-harvest preparation
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered electricity or equipment power multiplied by verified operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_postharvest_records`
- Range: Provisional primary-preparation electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 60
  - Unit: kWh/1,000 kg accepted grain
  - Basis: zero for fully manual or sun-dried preparation; retain equipment and operating-time records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy supplied to grain drying (`fonio_postharvest_heat_input`)

Record supplied heat or fuel energy used for forced-air or other active drying before hand-off; sun drying is recorded as an operation with zero purchased thermal energy.

- Selected flow: Process heat for fonio grain drying
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `purchased-process-heat`
- Amount rule: measured fuel or heat converted to delivered energy while retaining carrier identity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_postharvest_records`
- Range: Provisional drying-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: MJ/1,000 kg accepted grain
  - Basis: zero without active drying; broad candidate range pending equipment and moisture records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dry threshed fonio grain at farm gate (`fonio_primary_grain_output`)

Record accepted grain after the included threshing, winnowing, dry cleaning, or drying steps at the declared farm-gate moisture and foreign-matter basis. Dehulling is outside this process.

- Selected flow: Fonio, production mix, at farm gate, harvested grain, unprocessed `0cd0dc39-a4ec-4caf-addb-1ec276c2f286`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted grain mass at declared moisture and foreign-matter basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg reference grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_postharvest_records`
- Range: Provisional accepted-grain moisture screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 8
  - Upper: 14
  - Unit: percent moisture, wet basis
  - Basis: declared market and storage state; use the buyer specification when different
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Chaff, foreign matter, and non-useful grain rejects (`fonio_primary_reject_waste`)

Record chaff, stones, soil, weed material, damaged grain, and other rejects by material class and destination. Useful grain fractions handed off for feed or another use are separate product co-products.

- Selected flow: Fonio primary-preparation rejects and foreign matter
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by material class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_postharvest_records`
- Range: Provisional primary-preparation reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kg/1,000 kg incoming grain
  - Basis: preparation batch; distinguish useful co-products from disposal waste
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grain loss during primary preparation (`fonio_primary_grain_loss`)

Record unexplained or unavoidable grain loss separately from identifiable foreign matter and rejects; investigate losses before assigning them to disposal or residue pathways.

- Selected flow: Fonio grain loss during primary post-harvest preparation
- Flow property / unit: Mass / kg
- Amount rule: incoming grain minus accepted grain, useful co-products, identified rejects, and measured moisture or process losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_postharvest_records`
- Range: Provisional grain-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg/1,000 kg incoming grain
  - Basis: matched batch balance; explain values above the screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | field production and primary preparation | Prefer separate records for field production, harvest, and primary preparation, and measure grain, useful straw, useful screenings, and disposal waste separately before applying allocation. | `iso-14044-2006` |
| `allocation_field_residue` | residues retained, incorporated, or burned | Do not treat retained residues as co-products; include their management and associated emissions in field production and prevent double counting with removed straw. | `ipcc-2019-managed-soils` |
| `allocation_removed_straw` | useful removed straw or fodder | If subdivision cannot resolve shared field burdens, apply economic allocation using contemporaneous farm-gate values, disclose moisture bases, and test mass allocation as a sensitivity. | `iso-14044-2006` |
| `allocation_primary_outputs` | useful screenings and grain fractions | Treat an intentionally marketed fraction with positive value as a co-product and other rejects as waste; allocate only the separated primary-preparation burdens when subdivision is infeasible. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `fonio_field_production` | seed, nutrients, irrigation, fuel, crop protection, land | field log, input invoice, application record, meter, or contractor record | field_id; species; cultivar; area; input_product; amount; nutrient_content; date; operation; contractor_scope; sowing_date; harvest_date | reconcile physical inputs and operations to each field and crop cycle | kg; kg nutrient; L; m3; ha; m2·year | each event | complete crop cycle | all represented fields | sum by physical identity; calculate nutrients without merging products; normalize with same-cycle area and yield | invoices; product labels; calibrated meters; field logs |
| `cp_harvest_output_records` | `fonio_field_production` | grain, straw, residue fate | scale, yield estimate, moisture test, bale record, or destination record | field_id; harvest_date; grain_mass; grain_moisture; foreign_matter; straw_mass; straw_moisture; residue_fate; destination | reconcile harvested and removed masses to field area and crop cycle | kg; percent; ha | each harvest or field lot | complete crop cycle | all represented fields | sum accepted grain and each residue destination separately | scale or yield-monitor checks; moisture records; destination evidence |
| `cp_field_emission_activity` | `fonio_field_production` | emissions to air and water | nutrient, soil, weather, residue, and emission-model records | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | calculate each emission with one declared geographically applicable method | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented fields | calculate per field, area-weight, then normalize by same-cycle yield | source records; factor provenance; model file; nutrient-balance review |
| `cp_primary_postharvest_records` | `fonio_primary_postharvest` | incoming grain, energy, accepted grain, rejects, losses | batch ticket, scale, moisture test, electricity meter, fuel record, and destination record | batch_id; incoming_mass; incoming_moisture; operation; electricity; heat; accepted_mass; accepted_moisture; rejects; loss; destination | reconcile matched batches and meters to accepted output; keep dehulling and washing outside this protocol | kg; percent; kWh; MJ | each batch or meter period | all included pre-gate preparation | all included equipment and batches | sum matched batches; allocate shared meters by time or processed mass; close wet-mass balance | calibrated scales and moisture meters; meter reconciliation; destination records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field flows | crop-cycle amount per hectare / marketable grain yield per hectare × 1,000 kg | flow amount; area; same-cycle grain mass | amount per 1,000 kg grain |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | product mass × declared nutrient fraction; preserve product identity and nutrient reporting basis | product identity; mass; assay; reporting basis | kg N, kg P2O5, kg K2O by source |  |
| `calc_managed_soil_n2o` | soil N2O | apply selected IPCC tier or regional method to mineral N, organic N, returned-residue N, volatilization, and leaching pathways | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | calculate by nutrient product, application method, timing, and applicable factor | nutrient records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_primary_postharvest_mass_balance` | primary preparation | incoming wet grain = accepted grain + useful fractions + rejects + moisture and other measured losses within uncertainty | incoming and output masses; moisture; loss records | reconciled outputs per accepted grain | `mass-balance-identity` |
| `calc_energy_carrier_conversion` | post-harvest energy | convert measured fuel or heat carrier to delivered energy using the declared carrier property and retain the original carrier record | fuel or heat amount; carrier property; equipment record | kWh or MJ delivered |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Confirm white or black fonio rather than millet, sorghum, quinoa, or dehulled fonio; retain species, cultivar or landrace, intended use, hull state, and hand-off. | crop, lot, and sales records |
| `dq_temporal_alignment` | all foreground rows | Use inputs, harvest, yield, emissions, and primary-preparation records from the same crop cycle; disclose proxy years or borrowed activity data. | dated field and batch records |
| `dq_mass_and_moisture` | grain, straw, and batch outputs | Retain scale checks and moisture measurements for every wet or dry basis conversion and reconcile the original mass basis. | calibration and moisture-test records |
| `dq_completeness` | process map and flows | Reconcile every represented field and primary-preparation batch and distinguish zero, not applicable, proxy, and missing values. | field roster; batch reconciliation |
| `dq_boundary_processing` | post-harvest route | Demonstrate that dehulling, washing, de-sanding, milling, and food processing are excluded or represented by a separate downstream dataset. | operation log; process diagram; facility records |
| `dq_identity_resolution` | parameterized and unmapped flows | Resolve every Flow Set reference and unmapped physical exchange to a verified UUID before final TIDAS process publication. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal output | Exactly one terminal fonio grain output equals 1,000 kg after scaling, uses the verified reference identity, and declares species, hull state, moisture, and foreign-matter qualifiers. |  |
| `validation_process_route` | process map | Include field production once; include primary post-harvest preparation only when it occurs before farm-gate hand-off and is not already embedded in field records; exclude dehulling and washing. | `cirad-fonio-production-postharvest` |
| `validation_crop_cycle_reconciliation` | field inventory | Area, inputs, harvest outputs, residue fates, and emissions refer to the same fields and crop cycle. |  |
| `validation_nitrogen_balance` | nitrogen inventory | Reconcile mineral and organic nutrient content, returned and removed residue nitrogen, and emission pathways with methods and factors disclosed. | `ipcc-2019-managed-soils` |
| `validation_primary_postharvest_balance` | primary preparation | Reconcile incoming grain with accepted grain, useful fractions, rejects, moisture loss, and unexplained loss within declared uncertainty. | `mass-balance-identity` |
| `validation_flow_identity` | every flow | Accept only exact verified UUIDs as `fixed` and applicable existing Flow Sets as `parameterized`; otherwise retain unmapped coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground fonio grain production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | farm-gate LCA of white or black fonio grain and downstream systems that preserve declared species, geography, moisture, residue, allocation, and primary-preparation context |
| excluded_use | planting seed, wild collection, forage or silage, dehulled or washed fonio, flour, precooked or parboiled products, brewing, or another cereal without a reviewed proxy decision |
| required_metadata | species; cultivar or landrace; geography; crop year; area; sowing and harvest dates; yield; moisture; foreign matter; intended use; tillage; nutrients; irrigation; residue fate; primary post-harvest boundary; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy inputs; missing records; range exceedances; emission methods; moisture basis; meter and mass-balance reconciliations; downstream processing exclusions |
| update_trigger | new reviewed fonio agronomy or post-harvest evidence, material route change, revised emission method, changed Flow Set or UUID identity, or representative data outside QA ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-millets-fonio` | official_guidance | FAO, Millets: West African fonio and related millets, https://www.fao.org/fileadmin/templates/esw/esw_new/documents/Links/publications_other/6_millets.pdf | crop duration, drought adaptation, cultivation context, and post-harvest labour distinction |
| `fao-ecocrop-fonio` | official_guidance | FAO Ecocrop, Digitaria exilis crop data sheet, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=5329 | maturity, harvest season, and broad fonio yield context |
| `fao-cultivating-fonio` | official_guidance | FAO, Cultivating fonio, cultivating traditions, https://www.fao.org/newsroom/story/cultivating-fonio-cultivating-traditions/ | planting practice, row sowing, yield-improvement context, and storage training |
| `cirad-fonio-production-postharvest` | handbook | CIRAD, Le fonio, une céréale africaine, https://publications.cirad.fr/une_notice.php?dk=560957 | production systems, harvest, drying, threshing, winnowing, and processing boundary |
| `fao-fonio-postharvest` | handbook | AGRIS/CIRAD, Improvement of fonio post-harvest technology, https://agris.fao.org/search/en/providers/122653/records/64745b8c96fdec8b71b6ffc0 | dehulling, washing, de-sanding, and mechanized post-harvest distinction |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O, residue nitrogen, volatilization and leaching pathways |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023 | agricultural ammonia method and QA context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched fonio primary-preparation batches | batch reconciliation and validation |
