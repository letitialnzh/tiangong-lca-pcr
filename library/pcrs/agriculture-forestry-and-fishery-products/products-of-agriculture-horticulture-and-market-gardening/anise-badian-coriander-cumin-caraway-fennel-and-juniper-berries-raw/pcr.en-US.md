---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.anise-badian-coriander-cumin-caraway-fennel-and-juniper-berries-raw
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Anise, badian, coriander, cumin, caraway, fennel and juniper berries, raw

## 1. Scope and Applicability

This PCR covers farm production and first on-farm preparation of one declared raw spice crop: anise, star anise (badian), coriander grown for seed, cumin, caraway, fennel grown for seed, or edible juniper berries/cones. The dataset shall identify botanical species, crop, harvested organ, annual/biennial field-crop, cultivated-perennial, or managed-collection route, geography, harvest year, and moisture state. Unrelated species shall not be averaged or mixed unless separately modelled input datasets and mass shares are disclosed.

The gate is `Production mix, at farm gate` and the route is `Fresh, unprocessed produce`. Harvest or fruit collection, threshing where used, cleaning, grading, and conditional drying before the gate are included. Grinding, blending, essential-oil/oleoresin extraction, sterilization, retail packing, and prepared-spice manufacture are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.anise-badian-coriander-cumin-caraway-fennel-and-juniper-berries-raw |
| classification_refs | CPC 3.0: 01654 |
| covered_products | Whole raw anise fruit/seed, star anise fruit, coriander seed, cumin fruit/seed, caraway fruit/seed, fennel fruit/seed, or edible juniper berry-like cones, declared by species and organ |
| excluded_products | Coriander/fennel leaf herbs; undisclosed mixed-species lots; ground/blended spice; essential oil or oleoresin; sterilized or retail-packed product |
| representative_product | One declared species and harvested organ, cleaned and graded as a whole raw spice lot at farm gate |
| production_route | Parent: managed biological production. Mutually exclusive deltas: annual/biennial field seed-spice crop, cultivated perennial tree/shrub, or managed collection from an existing juniper stand. Manual/mechanical harvest and ambient/heated drying are route-specific technology deltas. Lots may be aggregated only after separate modelling. |
| market_state | Whole, unground raw seed, fruit, or berry/cone; moisture and drying status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Declared whole raw spice seed, fruit, or berry/cone at farm gate |
| How much | 1,000 kg net product at declared moisture |
| How well | Species, organ, route, geography, harvest year, grade, moisture/basis, and drying status declared; unrelated species are not blended into one reference flow |
| How long or cycle | One annual/biennial crop cycle or one perennial harvest year/cohort; establishment and multi-year maintenance annualized where applicable |
| reference_flow_link | `rf_raw_spice_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Anise, badian, coriander, cumin, caraway, fennel and juniper berries, raw `bd08a9d0-d397-4471-8b53-5071717b049d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical species; crop; harvested organ; production route; geography; harvest year; grade; moisture content and basis; drying method or not dried |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and solid hand-offs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net mass and measured moisture; use `calc_moisture_conversion` before comparing different moisture states. |
| `moisture_basis` | Harvested, dried, and graded lots | Mass fraction | % | State wet or dry basis and test method. Never aggregate unlike bases without conversion. |
| `area_time` | Managed land occupation | Area × time | ha·year | Record area and represented time; annualize perennial establishment over recorded productive life. |
| `nutrient_mass` | Nutrient products and nutrient emissions | Element mass | kg N, kg P, kg K | Retain every product record and composition; never add unlike nutrient elements. |

## 5. System Boundary

The foreground begins with seed/planting stock and prepared land, a cultivated perennial stand, or a documented managed juniper collection area. Managed production ends at the harvest-ready organ. Harvest is separate because removal and field losses have their own records. Primary conditioning converts collected material to a cleaned lot; stabilization converts a moisture-unstable usable lot to a stable state; grading creates accepted, downgraded, and rejected destinations.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Seed/planting material and prepared field; established/new perennial stand; or managed collection area with origin and management declared |
| starting_condition_role | Foreground production start; operator-established perennial burdens are annualized, while burdens for naturally established stands are not invented |
| product_classification_scope | One declared species, crop, and harvested organ within the category |
| recursive_input_rule | Purchased raw spice of this category entering conditioning requires a separate upstream dataset and input row; it is not folded into the foreground harvest. |
| upstream_dataset_requirement | Supplier or representative datasets for planting stock, every actual nutrient product, water, crop protection, energy, machinery, and purchased raw spice |
| disclosure | Species, organ, route, stand origin/age where relevant, period, area, yield, harvest method, conditioning/drying sequence, moisture, grades, rejects, residues, and output destinations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_choice` | All lots | Select exactly one production delta for each lot and collect its route-specific inputs and periods. Do not substitute annual and perennial inventories. | `icar-rabi-coriander-2021`; `ncsu-common-juniper` |
| `boundary_postharvest` | Farm-gate route | Include harvest/collection, threshing/separation, cleaning, grading, and any drying before the gate. Distinguish accepted, downgraded, rejected, and lost material. | `codex-spice-hygiene`; `fssai-star-anise-2023` |
| `boundary_exclusions` | Downstream manufacture | Exclude grinding, blending, extraction, sterilization, and retail packing; meter on-site excluded operations in a separate dataset. | `codex-spice-hygiene` |
| `boundary_periods` | Perennial route | Distinguish establishment, immature, productive maintenance, harvest year/cohort, replacement, and termination; link each burden once. | `ncsu-common-juniper` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_production` | Managed field crop, perennial stand, or collection area | required | Exactly one route delta per lot | Produces harvest-ready organ; records management, periods, residues, and other outputs | Per crop cycle or harvest year |
| `harvest_capture` | Harvest, collection, and threshing/separation | required | Threshing only where used | Removes intended organ; records loss and incidental biomass | Per 1,000 kg collected organ |
| `primary_conditioning` | Cleaning and primary separation | required | All lots | Removes soil, chaff, stalks, and foreign matter | Per 1,000 kg cleaned lot |
| `stabilization_drying` | Ambient or heated drying | conditional | Only when moisture is reduced before gate | Produces stable declared moisture state; ambient/heated modes are mutually exclusive per batch | Per 1,000 kg dried lot |
| `grading_sorting` | Farm-gate grading and routing | required | All lots | Produces accepted, downgraded, and rejected destinations | Per 1,000 kg accepted product |

### Process: Managed field crop, perennial stand, or collection area (`managed_production`)

#### Inputs

##### Product flows

###### Planting material or establishment stock (`planting_material`)

Record seed, seedlings, or cuttings only when they enter the foreground. A naturally established managed juniper stand records zero and discloses that condition.

- Selected flow: Species-specific planting material, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Foreground quantity; perennial establishment is annualized over recorded productive life
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per cultivated hectare per establishment or crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production`
- Range: Planting-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/ha
  - Basis: per cultivated hectare per establishment or crop cycle; zero allowed for existing managed stands
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient supply (`nutrient_supply`)

This is the only nutrient Product-input card in this process. Aggregate mineral fertilizer, organic fertilizer, manure, compost, and nutrient amendments here, while collecting every actual product and resolving its UUID separately during foreground data generation.

- Selected flow: Agricultural nutrient supply set
- Flow property / unit: Product-specific mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum product application records while retaining identity, composition, and date; do not sum unlike nutrient elements
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle or harvest year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production`
- Sources: `icar-rabi-coriander-2021`
- Range: Nutrient-product mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg products/ha
  - Basis: per cultivated hectare per crop cycle or harvest year; includes the cited 25 t/ha farmyard-manure example
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `icar-rabi-coriander-2021`

###### Irrigation water (`field_irrigation_water`)

Record supplied irrigation water; exclude rainfall.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calibrated field delivery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle or harvest year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production`
- Range: Field irrigation-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: m3/ha
  - Basis: per cultivated hectare per crop cycle or harvest year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`field_crop_protection`)

Record each actual formulation separately.

- Selected flow: Crop-protection products
- Flow property / unit: Mass / kg product
- Amount rule: measured formulation mass by application and treated area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle or harvest year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production`
- Range: Crop-protection product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg product/ha
  - Basis: per cultivated hectare per crop cycle or harvest year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy supply (`field_energy`)

Record fuels, electricity, draft power and machinery services separately.

- Selected flow: Field energy carriers and services
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered, invoiced or calibrated carrier quantity with identity retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle or harvest year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production`
- Range: Field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: MJ/ha
  - Basis: per cultivated hectare after documented conversion
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Managed land and direct soil N2O (`land_soil_emissions`)

Keep land occupation and N2O as separate calculated elementary-flow records even though they share this card.

- Selected flow: Managed land occupation and dinitrogen monoxide to air, unresolved
- Flow property / unit: Area × time and mass / ha·year and kg N2O
- Amount rule: Apply `calc_land` and `calc_soil_n2o` from mapped area, dates, and nitrogen records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvest-ready organ
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production`
- Sources: `ipcc-2019-managed-soils`
- Range: Land-occupation QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 5
  - Unit: ha·year
  - Basis: per 1,000 kg harvest-ready organ; N2O is validated separately against the formula
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvest-ready intended output (`production_outputs`)

Record the intended harvest-ready seed/fruit/berry at the production-to-harvest hand-off.

- Selected flow: Species-specific harvest-ready biological product, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured mass at declared moisture handed to harvest
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvest-ready organ
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production`
- Range: Harvest-ready output reference
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg harvest-ready organ
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Other intended co-products (`other_intended_outputs`)

Record any separately marketed leaf, stem, straw, planting seed, wood, or other intended product by identity and hand-off; use zero when no such co-product receives an economic function.

- Selected flow: Species- and destination-specific co-product, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured mass at declared moisture by output identity and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvest-ready organ
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production`
- Range: Other intended-output QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg co-product
  - Basis: per 1,000 kg harvest-ready organ
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Harvest, collection, and threshing/separation (`harvest_capture`)

#### Inputs

##### Product flows

###### Harvest-ready organ (`harvest_ready_organ`)

Record the production hand-off by species, organ and batch.

- Selected flow: Species-specific harvest-ready organ
- Flow property / unit: Mass / kg
- Amount rule: measured organ mass assigned to the harvest batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg collected raw organ
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Harvest-input mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg collected raw organ
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest energy supply (`harvest_energy`)

Record fuel, electricity and machinery services attributable to the batch.

- Selected flow: Harvest energy carriers and services
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered or invoiced quantity assigned to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg collected raw organ
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Harvest-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1,000 kg collected raw organ
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected raw spice organ (`collected_raw_organ`)

The measured collected organ is handed from harvest to primary conditioning at the declared moisture.

- Selected flow: Species-specific whole seed/fruit/berry organ, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured batch mass and moisture handed to conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg collected raw organ
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Collected-output reference
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg collected raw organ
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Removed harvest residues and losses (`harvest_residue`)

Record residue leaving the area by destination. Residue retained on land is included in soil calculations and is not also waste.

- Selected flow: Species- and destination-specific biomass residue, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg collected raw organ
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Removed-residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg
  - Basis: per 1,000 kg collected raw organ
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning and primary separation (`primary_conditioning`)

#### Inputs

##### Product flows

###### Collected lot entering cleaning (`conditioning_material`)

Record the physical lot entering this process.

- Selected flow: Collected species-specific lot
- Flow property / unit: Mass / kg
- Amount rule: weighed batch input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cleaned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Input-lot mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1400
  - Unit: kg
  - Basis: per 1,000 kg cleaned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water (`conditioning_water`)

Record supplied washing or cleaning water only when used.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered water supplied to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cleaned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Conditional process-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per 1,000 kg cleaned output; zero when no water is used
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process energy supply (`conditioning_energy`)

Record purchased fuel, electricity and compressed-air energy by batch; passive operations may record zero.

- Selected flow: Process energy carriers
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered carrier quantity with identity retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cleaned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Conditional process-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: MJ
  - Basis: per 1,000 kg cleaned output; zero purchased energy when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned whole spice lot (`cleaned_lot`)

The cleaned lot is handed to conditional drying or directly to grading with its measured moisture.

- Selected flow: Species-specific cleaned whole spice lot, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured output and moisture handed to drying or grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cleaned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Cleaned-output reference
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg cleaned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Conditioning rejects (`conditioning_rejects`)

Record soil, chaff, stalks, foreign matter, and off-spec material by rework, return, recovery, or disposal destination.

- Selected flow: Destination-specific conditioning reject, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cleaned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Conditioning-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg
  - Basis: per 1,000 kg cleaned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Ambient or heated drying (`stabilization_drying`)

#### Inputs

##### Product flows

###### Moisture-unstable lot entering drying (`drying_material`)

Record the physical lot entering this process.

- Selected flow: Species-specific cleaned lot
- Flow property / unit: Mass / kg
- Amount rule: weighed batch input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Range: Input-lot mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1600
  - Unit: kg
  - Basis: per 1,000 kg dried output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process energy supply (`drying_energy`)

Record purchased fuel, electricity and compressed-air energy by batch; passive operations may record zero.

- Selected flow: Process energy carriers
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered carrier quantity with identity retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Range: Conditional process-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: MJ
  - Basis: per 1,000 kg dried output; zero purchased energy when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized dried whole spice lot (`dried_lot`)

The stabilized lot is the usable post-drying state handed to grading.

- Selected flow: Species-specific stabilized whole spice lot, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured output at declared moisture; verify dry-matter conservation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Sources: `fssai-star-anise-2023`
- Range: Dried-output reference
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg dried output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Drying rejects (`drying_rejects`)

Mould-damaged or otherwise rejected material leaves drying by a declared rework, downgrade, recovery, or disposal path.

- Selected flow: Destination-specific damaged spice material, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by rework, downgrade, recovery, or disposal path
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying`
- Range: Drying-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg dried output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water evaporated (`evaporated_water`)

This row represents moisture removed from the product and released to air during drying.

- Selected flow: Water to air, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Apply `calc_drying_water`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying`
- Range: Evaporated-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kg
  - Basis: per 1,000 kg dried output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Farm-gate grading and routing (`grading_sorting`)

#### Inputs

##### Product flows

###### Prepared lot entering grading (`grading_material`)

Record the physical lot entering this process.

- Selected flow: Prepared species-specific lot
- Flow property / unit: Mass / kg
- Amount rule: weighed batch input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Input-lot mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1400
  - Unit: kg
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process energy supply (`grading_energy`)

Record purchased fuel, electricity and compressed-air energy by batch; passive operations may record zero.

- Selected flow: Process energy carriers
- Flow property / unit: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered carrier quantity with identity retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Conditional process-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: MJ
  - Basis: per 1,000 kg accepted reference product; zero purchased energy when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted raw spice at farm gate (`accepted_reference_product`)

This is the sole accepted reference-product hand-off at the declared farm gate.

- Selected flow: Anise, badian, coriander, cumin, caraway, fennel and juniper berries, raw `bd08a9d0-d397-4471-8b53-5071717b049d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Net accepted mass at declared moisture, excluding downgraded and rejected material
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_grading`
- Range: Reference-product amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

###### Downgraded product (`downgraded_product`)

Record every separately marketed off-grade lot by grade and hand-off. It is a co-output only when it receives an economic function and is never accepted reference product.

- Selected flow: Species- and destination-specific downgraded spice, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Downgraded-output QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Final grading rejects (`grading_rejects`)

Material failing all accepted or downgraded grades leaves by one declared destination.

- Selected flow: Destination-specific rejected spice material, unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by rework, recovery, field return, or disposal path
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Grading-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg
  - Basis: per 1,000 kg accepted reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | All multi-output nodes | Subdivide by species lot, field/stand, crop cycle or harvest year, operation, and batch; directly assign causal burdens. |  |
| `allocation_co_outputs` | Marketed leaves, stems, straw, planting seed, wood, or downgraded spice | After subdivision, use physical dry mass when outputs have comparable biological function; otherwise use documented economic allocation with contemporaneous prices and a physical-mass sensitivity. Residues without economic function receive no upstream burden, but handling remains included. |  |
| `allocation_periods` | Perennial stands | Annualize operator-incurred establishment/termination over recorded productive life. Assign annual maintenance and harvest burdens to their year/cohort. Do not invent establishment for naturally established collection stands. | `ncsu-common-juniper` |
| `allocation_batches` | Conditioning, drying, grading | Assign metered batch burdens directly; allocate shared cleaning/changeover once by processed mass or run time. Rework retains previous and incremental burdens. |  |
| `allocation_rejects` | Rework and rejects | Link each rejected state to exactly one rework, downgrade, recovery, return, or disposal path; never count it as accepted output. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_production` | `managed_production` | Establishment, inputs, area, periods, outputs, soil emissions | Field/stand log, invoice, meter, map, yield ticket | species; organ; route; field/stand; dates; area; origin/age; productive life; input identity/UUID; quantity/composition; output mass/moisture; residue fate | Reconcile invoices, logs, mapped area, meters, and weights | Native units plus kg, m3, MJ, ha·year | Each event and annual close | Complete crop cycle or establishment through reporting harvest year | Every included field/stand/area | Aggregate only identical species, organ, route, geography, period, moisture basis | Calibrations, invoices, maps, tickets, completeness reconciliation |
| `cp_harvest` | `harvest_capture` | Harvest input/output, energy, residue/loss | Harvest batch log | lot; method; dates; input; collected mass/moisture; energy; residue/loss; destinations | Weigh hand-offs and meter/invoice energy | kg, %, MJ | Each batch | Complete harvest window | Each source field/stand | Batch mass balance | Scale/moisture checks, machine logs, receipts |
| `cp_conditioning` | `primary_conditioning` | Input, cleaned output, service, reject | Run log | batch; input/output mass/moisture; equipment; energy; water; reject class/path | Weigh and meter at run boundary | kg, %, kWh, MJ, m3 | Each run/changeover | All included runs | Each site/line | Batch balance; shared changeover once | Calibration, reject checks, reconciliation |
| `cp_drying` | `stabilization_drying` | Input/output, energy, time, rejects, water loss | Drying batch log | batch; method; masses; moisture/basis; dates; energy; rejects | Weigh/test before and after; meter energy | kg, %, h, MJ | Each batch | Entire drying interval | Each drying area/device | Dry-matter balance and batch attribution | Moisture method, calibration, surface protection, reconciliation |
| `cp_grading` | `grading_sorting` | Input, grades, downgrade, reject, service | Grading/dispatch log | batch; identity; criteria; input; each output; moisture; destination; energy/changeover | Weigh every state and reconcile dispatch | kg, %, MJ | Each run/changeover | All included runs | Each site/line | Accepted + downgrade + reject = adjusted input; service once | Grade inspection, calibration, dispatch/rework receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | Mass conversion | dry matter = wet mass × (1 − wet-basis moisture); target wet mass = dry matter ÷ (1 − target wet-basis moisture) | mass; moisture; basis | Comparable mass |  |
| `calc_drying_water` | `evaporated_water` | wet input × input moisture − dried output × output moisture; investigate negative results | input/output mass and wet-basis moisture | kg water |  |
| `calc_land` | Land occupation | hectares × occupied days ÷ 365.25; normalize by output | area; dates; output | ha·year/1,000 kg |  |
| `calc_soil_n2o` | Managed-soil N2O | Apply IPCC managed-soil equations to recorded synthetic/organic N and residue N; convert N2O-N to N2O by 44/28 | N inputs, residue N, factors | kg N2O | `ipcc-2019-managed-soils` |
| `calc_perennial` | Perennial periods | attributable establishment + termination burden divided by recorded productive life; reflect documented area changes | period inventories; productive years/area | Annualized burden |  |
| `calc_allocation` | Multi-output nodes | Direct assignment first, then declared physical dry-mass or economic allocation; shares sum to 1 | masses/moisture or prices; shared burden | Burden by output |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product states | Species and organ mandatory; retain route, geography, year, grade, moisture/basis, and drying status. | Traceable lot records |
| `dq_temporal` | Production | Cover full cycle/year; perennial records include establishment, productive life, replacement, termination, age/origin, and cohort links. | Dated field/stand records |
| `dq_completeness` | All nodes | Include every actual nutrient product, water, energy, output, rework, reject, residue, and hand-off; reconcile mass. | Invoice/meter and mass balance |
| `dq_measurement` | Mass, moisture, area, energy | Use calibrated instruments or documented estimates; state moisture method/basis. | Calibration/test/map/worksheet |
| `dq_aggregation` | Combined records | Combine only identical species, organ, route, geography, period, and moisture basis; disclose included coverage. | Sampling frame and coverage calculation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference flow | Fail if species, crop, organ, route, geography, harvest year, grade, moisture/basis, or drying status is missing, or unrelated species are averaged without separate datasets and mass shares. |  |
| `validate_route` | Graph | Require one production delta per lot and matching period/input records; annual and perennial routes coexist only as traceable lots. | `icar-rabi-coriander-2021`; `ncsu-common-juniper` |
| `validate_nodes` | Graph | Require production, harvest, conditioning, and grading; require drying when moisture reduction occurs. Every node declares states and hand-offs. | `codex-spice-hygiene` |
| `validate_mass` | Harvest through grading | Batch input equals accepted + downgraded + rejects + measured moisture loss ± inventory change within 5%; otherwise investigate/disclose. |  |
| `validate_ranges` | Inventory | Every quantitative card has role, bounds, unit, denominator, basis kind, evidence kind, and sources when external. Outliers require explanation; reasoned ranges are screens, not limits. |  |
| `validate_nutrients` | Production | Allow at most one nutrient Product-input card per process, bound only to `flow-set.agricultural-nutrient-supply@0.3.0`; prohibit group binding. Resolve every actual product UUID during foreground generation. |  |
| `validate_outputs` | Multi-output nodes | Enumerate intended outputs/hand-offs, residue/waste, allocation precedence, and shares summing to 1; prevent duplicate hand-offs. |  |
| `validate_periods` | Perennial route | Require period and replacement/termination decisions and reject duplicated establishment or maintenance burdens. | `ncsu-common-juniper` |
| `validate_rework` | Post-harvest | Route every off-spec state exactly once; accepted output excludes unresolved rejects; rework retains prior burdens. |  |
| `validate_star_anise` | Star anise claiming cited specification | Verify moisture ≤10% dry basis, extraneous matter ≤1%, stalks ≤3%, broken/abnormal fruit ≤25%; do not apply to other species. | `fssai-star-anise-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species-, organ-, route-, geography-, and period-specific foreground farm-gate production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness and uncertainty review |
| allowed_use | LCA of a whole raw spice lot matching identity, route, gate, moisture, geography, and period |
| excluded_use | Mixed-spice average; leaf herb; ground/blended spice; oil/oleoresin; sterilized/retail product; annual-perennial substitution without scenario modelling |
| required_metadata | Reference qualifiers; field/stand and period; stand origin/age/life; graph; input identities/UUIDs; allocation; mass/moisture balances; grades/destinations; coverage |
| required_quality_disclosure | Foreground/secondary shares, measurement/estimation, range exceptions, missing UUIDs, representativeness, perennial annualization, allocation sensitivity, reject/rework treatment |
| update_trigger | Change in species/organ, route, geography, technology, drying, productive life, yield, inputs, allocation, quality specification, reference UUID, or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `icar-rabi-coriander-2021` | official_guidance | ICAR, *Rabi Agro-Advisory for Farmers 2021-22*, coriander section. https://icar.gov.in/sites/default/files/2022-09/Rabi-Agro-Advisory-2021-22_0.pdf | Annual grain route, input examples, distinct leaf/grain outputs |
| `codex-spice-hygiene` | official_guidance | Codex Alimentarius, proposed Code of Hygienic Practice for Spices and Condiments. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FMeetings%252FCX-712-24%252Fal91_13e.pdf | Harvest, drying, cleaning, grading, and downstream exclusions |
| `fssai-star-anise-2023` | standard | FSSAI, Chapter 2.9, section 2.9.34 Star Anise, version 1 (2023). https://fssai.gov.in/upload/uploadfiles/files/Chapter%202_9%20%28Salt%20Spices%2C%20Condiments%20and%20related%20products%29.pdf | Star-anise identity and species-specific moisture/quality limits |
| `codex-cxs-358-2024` | standard | Codex CXS 358-2024, dried/dehydrated fruits and berries including juniper berry and star anise. https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en | Dried fruit/berry market route |
| `ncsu-common-juniper` | extension_guidance | North Carolina State Extension, *Common Juniper*. https://plants.ces.ncsu.edu/plants/juniperus-communis-var-communis/common-name/common-juniper/ | Woody perennial route and second/third-year cone maturation |
| `ipcc-2019-managed-soils` | method_factor | IPCC, *2019 Refinement*, Volume 4, Chapter 11. https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | Managed-soil N2O method |
