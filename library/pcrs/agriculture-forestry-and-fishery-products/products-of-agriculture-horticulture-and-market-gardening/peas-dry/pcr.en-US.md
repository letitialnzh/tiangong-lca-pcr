---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peas-dry
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Peas, dry

## 1. Scope and Applicability

This PCR covers mature dry field pea grain of *Pisum sativum* produced in a managed annual crop and delivered as unprocessed whole grain at the farm gate. It includes establishment and field management, direct combining or windrowing followed by combining, threshing, farm cleaning and grading, and conditional aeration or drying.

It excludes green or succulent peas, forage and silage, planting seed sold as seed, split or milled peas, flour, protein or starch fractions, concentrates, canned peas and cooked products. Declare cultivar or market class, geography, crop year, rainfed or irrigated regime, harvest route, moisture basis, grade or destination, damage and foreign matter, and conditioning route.

Managed biological production is the parent activity. Rainfed/irrigated production, direct/windrow harvest and ambient-aeration/heated-drying alternatives shall remain separate by field or batch until production-mass-weighted aggregation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peas-dry |
| classification_refs | CPC 3.0: 01705 Peas, dry |
| covered_products | Mature dry whole field pea grain of *Pisum sativum*, including yellow, green and other food or feed market classes, at farm gate |
| excluded_products | Green peas; forage or silage; planting seed products; split, milled, dehulled, fractionated, concentrated, canned or cooked peas |
| representative_product | Cleaned and graded mature dry whole field pea grain |
| production_route | Managed field production; direct or windrow harvest; combining/threshing; farm cleaning/grading; conditional aeration or drying |
| market_state | Harvested whole grain, unprocessed, at farm gate, with declared moisture, grade/destination and damage state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mature dry whole field pea grain at farm gate |
| How much | 1 kg net accepted grain |
| How well | Declared market class, moisture, grade/destination, foreign-material and damaged fractions, harvest and conditioning routes |
| How long or cycle | One single-period crop cycle with all linked post-harvest batches |
| reference_flow_link | Net accepted `grading_cleaning` output, or `drying_aeration` output when stabilization occurs |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Peas, dry `e64a5cdb-c922-45d9-90ab-c9dd573032f7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and market class; whole dry grain state; geography; crop year; moisture and basis; grade/destination; harvest route; drying/aeration status; damaged and foreign-material fractions |
| Binding | Fixed (`fixed`) |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference pea product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net accepted grain at declared moisture; exclude foreign matter, rejects, packaging and field loss. |
| `moisture_basis` | Grain hand-offs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and mass-% | Record wet mass and wet-basis moisture at each hand-off and reconcile dry matter before normalization. |
| `nutrient_product_mass` | Consolidated nutrient supply | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg product and kg nutrient | Retain each product and N, P2O5, K2O or amendment composition before aggregation. |
| `area_to_mass` | Field records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | Divide crop-cycle field totals by net accepted grain attributed to the same field or lot. |

## 5. System Boundary

The foreground starts when seed and other technosphere inputs enter the pea field and ends with accepted whole dry pea grain at the farm gate. Include field operations and emissions, harvest/threshing, cleaning/grading and necessary conditioning. Harvest independently transfers the mature crop to a harvested lot; primary conditioning converts raw grain to classified output; active drying or aeration is a bounded stabilization node. Passive field dry-down remains in field production.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Field prepared for the crop cycle, with seed and externally supplied inputs entering the farm boundary |
| starting_condition_role | Start of managed annual dry-pea production |
| product_classification_scope | Mature dry whole *Pisum sativum* grain; excludes green peas, forage, seed products and processed fractions |
| recursive_input_rule | Exceptional purchased dry peas used for reseeding or blending are separate upstream product inputs and never inherit this foreground result without an independent dataset. |
| upstream_dataset_requirement | Each purchased seed, nutrient product, crop-management product, energy carrier, water supply and service requires an upstream dataset or disclosed gap. |
| disclosure | Field, crop year, prior crop, production regime, harvest route, conditioning steps, lot moisture and grade/destination |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | All processes | Include establishment through accepted farm-gate grain and linked residues, losses, rejects and direct field emissions; exclude downstream splitting, milling, fractionation, cooking and packaging. | `ndsu-field-pea-production-2021`; `saskatchewan-dry-pea-guide` |
| `boundary_harvest_routes` | `harvest_threshing` | Direct combining and windrowing are mutually exclusive by batch unless separate areas or lots are evidenced; include threshing. | `ndsu-field-pea-production-2021`; `saskatchewan-pea-harvest-management` |
| `boundary_conditioning` | `grading_cleaning`; `drying_aeration` | Include farm cleaning, grading, aeration and drying; activate stabilization only from measured lot condition and record route, energy and moisture change. | `saskatchewan-dry-pea-guide` |
| `boundary_route_separation` | Alternatives | Keep rainfed/irrigated, direct/windrow and ambient/heated route records separate until production-mass weighting. | `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Managed dry-pea field production | required | Always | Managed biological production with a route delta between rainfed and irrigated regimes | Field area and crop-cycle harvestable grain |
| `harvest_threshing` | Harvest, combining and threshing | required | Select direct or windrow route by batch as an alternative technology route | Independent harvest and threshing | Mature crop input and raw grain output |
| `grading_cleaning` | Farm cleaning and grading | required | Always | Primary conditioning and destination grading | Raw grain input and accepted lot output |
| `drying_aeration` | Conditional drying and aeration | conditional | Active aeration or heat before farm-gate hand-off | Preservation and stabilization | Incoming wet grain and stabilized output |

### Process: Managed dry-pea field production (`field_production`)

Use field and crop-year batch records. Link all inputs, intended crop, residues and direct emissions to that batch.

#### Inputs

##### Product flows

###### Planting material (`planting_seed`)

Record pea seed actually sown; reference grain sold as planting seed remains excluded.

- Selected flow: Dry pea planting material
- Flow property / unit: Mass / kg
- Amount rule: Measured seed mass sown
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per hectare sown and per 1 kg accepted grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Seeding-rate QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 80
  - Upper: 350
  - Unit: kg seed/ha sown
  - Basis: One hectare sown in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated mineral, organic and amendment nutrient supply (`nutrient_supply`)

This single card covers all mineral fertilizers, organic fertilizers, liming materials and nutrient-bearing amendments. Actual products and compositions remain separate in foreground records.

- Selected flow: Agricultural nutrient supply products
- Flow property / unit: Mass / kg product and kg nutrient
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum product masses after retaining identity, N, P2O5, K2O, amendment composition, treated area and application method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per hectare treated and per 1 kg accepted grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `ndsu-field-pea-fertility-2023`
- Range: Total nutrient-product QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg products/ha treated
  - Basis: Consolidated supplied product mass per treated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-management products (`crop_management_products`)

Record formulated inoculants without declared nutrients, herbicides, fungicides, insecticides and desiccants by product and active ingredient.

- Selected flow: Crop-management products
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured formulated mass with active ingredient, concentration, area and event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per hectare treated and per 1 kg accepted grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Formulated-product QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg products/ha treated
  - Basis: Sum of formulated products per treated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Record gross delivered water, source and conveyance; zero requires a documented rainfed crop.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or calculated gross water delivered
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per hectare irrigated and per 1 kg accepted grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_water`
- Sources: `fao-crop-water-needs`
- Range: Seasonal water upper-screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3 irrigation water/ha
  - Basis: Gross irrigation per hectare; upper bound corresponds to 500 mm seasonal pea crop-water need and is not a default
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-crop-water-needs`

###### Field-operation energy (`field_energy`)

Retain each fuel or electricity carrier and operation.

- Selected flow: Field-operation energy carriers
- Flow property / unit: Energy or carrier mass/volume
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered use or equipment-hour calculation for establishment, application, irrigation and management
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per hectare and per 1 kg accepted grain
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_energy`
- Range: Fuel-equivalent QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: L diesel-equivalent/ha
  - Basis: Field operations excluding harvest
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mature crop transferred to harvest (`mature_crop`)

This intended output records harvestable mature grain equivalent before combining, excluding shatter and unrecovered crop.

- Selected flow: Mature standing dry-pea crop
- Flow property / unit: Mass / kg harvestable grain equivalent
- Amount rule: Field area, measured harvest mass, moisture correction and field-loss calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per hectare harvested
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_output`
- Range: Yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 300
  - Upper: 6000
  - Unit: kg harvestable grain/ha
  - Basis: Mature grain at declared moisture per harvested hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field straw and pod biomass (`field_residue`)

When deliberately removed with an evidenced hand-off, this is an intended co-product output. Otherwise it is managed residue. Separate retained/incorporated, removed, burned where lawful and other destinations; never count one mass twice.

- Selected flow: Field pea straw and pod biomass
- Flow property / unit: Mass / kg dry matter
- Amount rule: Measured or calculated residue dry matter by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per hectare and per kg grain dry matter
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_output`
- Sources: `fao-cropland-nutrient-balance-2025`
- Range: Residue-to-grain screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 4.0
  - Unit: kg residue dry matter/kg grain dry matter
  - Basis: Dry-matter ratio; FAO metadata gives dry-pea harvest index 0.41 as context
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct soil nitrous oxide (`direct_soil_n2o`)

Calculate N2O-N from applicable recorded N pools and selected IPCC EF1, then multiply by 44/28 for N2O.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Sum applicable N pools × EF1 and convert N2O-N to N2O
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg N input and per 1 kg accepted grain
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Aggregated EF1 uncertainty
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0.002
  - Upper: 0.018
  - Unit: kg N2O-N/kg N input
  - Basis: Applicable N additions to managed mineral soil
  - Basis kind: N input (`n_input`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-managed-soils`

### Process: Harvest, combining and threshing (`harvest_threshing`)

Harvest is independent of managed growth and conditioning. Each batch declares direct combining or windrowing, dates, area, crop condition, energy, incoming moisture, grain, straw/pods, shatter and damage.

#### Inputs

##### Product flows

###### Mature crop entering harvest (`harvest_crop_input`)

This input transfers the mature field crop into the declared harvest batch.

- Selected flow: Mature standing or windrowed dry-pea crop
- Flow property / unit: Mass / kg harvestable grain equivalent
- Amount rule: Same-batch transfer from `mature_crop`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per harvest batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_batch`
- Range: Transfer reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.98
  - Upper: 1.02
  - Unit: kg input/kg transferred mature crop
  - Basis: Same field and batch before harvest loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Harvest energy (`harvest_energy`)

This input supplies energy to the declared harvest and threshing operations.

- Selected flow: Harvest-operation energy carriers
- Flow property / unit: Energy or carrier mass/volume
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered use or equipment-hour calculation for swathing, combining, threshing and transfer
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per hectare and per kg raw grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_batch`
- Range: Fuel-equivalent QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 120
  - Unit: L diesel-equivalent/ha
  - Basis: Selected harvest and threshing route per harvested hectare
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw harvested pea grain (`raw_harvested_grain`)

This output is the threshed raw lot transferred to farm cleaning.

- Selected flow: Threshed raw dry-pea grain
- Flow property / unit: Mass / kg
- Amount rule: Weighed or calibrated mass with moisture, foreign matter and damage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per harvest batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_batch`
- Range: Raw-grain share screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.20
  - Upper: 0.85
  - Unit: kg raw grain/kg incoming grain plus separable biomass
  - Basis: Same batch at measured moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest-separated straw and pods (`harvest_residue_output`)

This output records separated straw and pod material by destination.

- Selected flow: Harvest-separated pea straw and pod material
- Flow property / unit: Mass / kg dry matter
- Amount rule: Measured bale mass or declared residue calculation by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per harvest batch and kg grain dry matter
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_batch`
- Range: Residue hand-off screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4.0
  - Unit: kg residue dry matter/kg grain dry matter
  - Basis: Harvest-separated residue relative to grain dry matter
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Broken or damaged grain (`harvest_damaged_grain`)

Route cracked, split, immature or downgraded grain to feed, re-cleaning or another named hand-off; exclude it from accepted output.

- Selected flow: Recoverable damaged dry-pea grain
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by damage state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per harvest batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_batch`
- Range: Damaged-grain screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg damaged grain/kg raw grain
  - Basis: Same harvest batch before cleaning
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shatter and unrecovered harvest loss (`harvest_shatter_loss`)

This loss records grain left unrecovered in the field.

- Selected flow: Unrecovered dry-pea harvest loss
- Flow property / unit: Mass / kg grain
- Amount rule: Field-loss measurement or balance residual excluding damaged grain and residue
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per harvest batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_batch`
- Sources: `saskatchewan-pea-harvest-management`
- Range: Harvest-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg unrecovered grain/kg harvestable input
  - Basis: Same field and harvest batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Farm cleaning and grading (`grading_cleaning`)

Operate by lot or campaign. Each accepted, downgraded, rejected and reworked state has one hand-off. Link each rework pass and assign clean-out/carryover to the causing campaign once.

#### Inputs

##### Product flows

###### Raw grain entering cleaning (`cleaning_raw_grain`)

This input transfers the raw harvested lot into cleaning and grading.

- Selected flow: Threshed raw dry-pea grain
- Flow property / unit: Mass / kg
- Amount rule: Same-lot transfer from `raw_harvested_grain`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per cleaning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_lot`
- Range: Input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.98
  - Upper: 1.02
  - Unit: kg input/kg transferred raw grain
  - Basis: Same lot before cleaning
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Cleaning and grading energy (`cleaning_energy`)

This input supplies energy to cleaning, conveying and grading equipment.

- Selected flow: Cleaning and grading energy carriers
- Flow property / unit: Energy / kWh or carrier unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered energy or runtime × verified demand
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per tonne raw grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_lot`
- Range: Cleaning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh/t raw grain
  - Basis: Cleaning/grading campaign excluding drying
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cleaned and graded pea grain (`accepted_pea_grain`)

This is the reference output unless conditional stabilization follows.

- Selected flow: Peas, dry `e64a5cdb-c922-45d9-90ab-c9dd573032f7`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Net accepted mass after excluding foreign matter, rejects, downgrades and rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per cleaning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_lot`
- Range: Accepted-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.70
  - Upper: 1.00
  - Unit: kg accepted grain/kg raw grain
  - Basis: Same lot at reconciled moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded or rework grain (`downgraded_rework_grain`)

This output records each downgraded or returned grain state and its hand-off.

- Selected flow: Downgraded or rework dry-pea grain
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by destination and rework pass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per cleaning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_lot`
- Range: Downgrade/rework screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg downgraded or rework grain/kg raw grain
  - Basis: Same lot, counted once at final destination
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Foreign matter and non-recoverable rejects (`cleaning_rejects`)

This output records foreign matter and non-recoverable material by destination.

- Selected flow: Cleaning foreign matter and non-recoverable rejects
- Flow property / unit: Mass / kg
- Amount rule: Measured soil, stones, weed seeds, spoiled material and fragments by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per cleaning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_lot`
- Range: Cleaning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg rejects/kg raw grain
  - Basis: Same cleaning lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured cleaning dust (`cleaning_dust`)

Retain substance/species and size evidence; leave the elementary-flow UUID unresolved until verified.

- Selected flow: Particulate matter to air, species and size unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured release or balance after subtracting captured dust in rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per tonne raw grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_lot`
- Range: Dust-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg uncaptured dust/t raw grain
  - Basis: Campaign after captured reject reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Conditional drying and aeration (`drying_aeration`)

The usable cleaned input requires measured stabilization. Ambient aeration and heated drying are separate route batches. Saskatchewan guidance identifies up to 16% moisture and temperature below 15°C as safe storage conditions; report the actual destination specification rather than treating this screen as universal.

#### Inputs

##### Product flows

###### Grain entering stabilization (`drying_grain_input`)

This input transfers a measured cleaned lot into active stabilization.

- Selected flow: Cleaned dry-pea grain requiring stabilization
- Flow property / unit: Mass / kg
- Amount rule: Same-lot input mass with moisture, temperature, damage and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per stabilization batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Range: Incoming-moisture screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10
  - Upper: 30
  - Unit: mass-% moisture, wet basis
  - Basis: Incoming lot before active stabilization
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying and aeration energy (`drying_energy`)

This input supplies fan electricity and thermal energy by route and batch.

- Selected flow: Drying and aeration energy carriers
- Flow property / unit: Energy / kWh or MJ by carrier
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered fan electricity and thermal carriers, separated by route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per tonne stabilized grain and kg water removed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch`
- Range: Stabilization-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 500
  - Unit: kWh/t stabilized grain
  - Basis: Active aeration or drying batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized accepted pea grain (`stabilized_pea_grain`)

This output is the stabilized accepted lot transferred to the farm gate.

- Selected flow: Peas, dry `e64a5cdb-c922-45d9-90ab-c9dd573032f7`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Net accepted output at measured final moisture, excluding damage and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per stabilization batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Sources: `saskatchewan-dry-pea-guide`
- Range: Storage-condition screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10
  - Upper: 16
  - Unit: mass-% moisture, wet basis
  - Basis: Stabilized lot for ordinary storage; destination limits prevail
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `saskatchewan-dry-pea-guide`

##### Waste flows

###### Drying-damaged or spoiled grain (`drying_rejects`)

This output records stabilization damage or spoilage by destination.

- Selected flow: Drying-damaged or spoiled pea grain
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by recovery, feed or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per stabilization batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Range: Stabilization-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg rejected grain/kg incoming grain
  - Basis: Same stabilization batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Moisture removed as water vapour (`drying_water_vapour`)

This elementary output represents moisture removed from the same batch.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg water
- Amount rule: Input water mass minus output water mass from wet-basis moisture balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg stabilized grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_drying_batch`
- Sources: `mass-balance-identity`
- Range: Moisture-removal screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg water/kg incoming grain
  - Basis: Same stabilization batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_field_outputs` | Grain and straw/pods | Avoid allocation when residue remains managed in-field material. Deliberately removed residue with an evidenced product hand-off is a co-product; use declared physical or economic allocation consistently and disclose sensitivity. | `mass-balance-identity` |
| `allocation_reject_routes` | Damage, downgrade, rework and rejects | Retain burdens through rework. Treat a downgraded sale/feed hand-off as intended output only with an evidenced destination; otherwise it is waste. Never count accepted and rejected mass together. | `mass-balance-identity` |
| `allocation_batches` | All batches | Attribute inputs, outputs, clean-out, carryover and changeover to the causing batch. Use processed-mass allocation for shared burdens only when direct metering is absent and never allocate one shared burden twice. | `mass-balance-identity` |
| `allocation_no_default_substitution` | Co-products | Do not apply avoided-burden credit by default; any downstream substitution reports the unallocated inventory, substituted product, ratio and evidence. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_production` | Seed, nutrient and crop-management products | invoices, logs, labels | field_id; product_id; mass; composition; area; date; method | Reconcile stock and application logs | kg; kg nutrient; ha | Each application | Crop cycle | Field | Sum by product and field; retain composition | Invoice, label, applicator log |
| `cp_field_water` | `field_production` | Irrigation | meter/pump log | source; volume; runtime; area; dates | Meter or tested pump flow × runtime | m3; ha | Event | Crop cycle | Field | Sum gross delivered water | Calibration and irrigation log |
| `cp_field_energy` | `field_production` | Field energy | fuel/electricity log | operation; carrier; quantity; hours; area | Meter or verified rate calculation | L; kg; kWh; h | Operation | Crop cycle | Field | Sum by carrier and operation | Invoice, meter, equipment log |
| `cp_field_output` | `field_production` | Crop and residue | field/yield record | area; grain mass; moisture; residue; destination; loss | Weigh and moisture-test; declared residue method | kg; kg DM; ha; % | Harvest | Crop cycle | Field | Moisture-correct before aggregation | Scale, moisture and residue evidence |
| `cp_field_emissions` | `field_production` | Direct N2O | calculation record | N pools; climate; EF1; residue N | IPCC calculation from collected N | kg N; kg N2O | Crop cycle | Crop cycle | Field | Calculate by pool, sum once | Input ledger and factor version |
| `cp_harvest_batch` | `harvest_threshing` | Route, energy, outputs and losses | batch log | batch; field; route; area; fuel; masses; moisture; destinations | Weigh outputs; meter/calculate energy; loss check | kg; L; kWh; ha; % | Batch | Harvest window | Field/route | Reconcile all outputs and loss | Scale, moisture, route log |
| `cp_cleaning_lot` | `grading_cleaning` | Inputs, grades, rejects, rework, energy | lot/campaign log | lot; campaign; masses; moisture; energy; grade; pass; destination | Weigh all hand-offs and meter/calculate energy | kg; %; kWh | Lot/pass | Campaign | Lot | Count final destination once | Scale, grade test, energy record |
| `cp_drying_batch` | `drying_aeration` | Stabilization | bin/dryer log | batch; route; input/output mass, moisture and temperature; energy; duration; rejects | Weigh/test input/output; meter energy | kg; %; °C; kWh; MJ; h | Batch | Full intervention | Bin/batch | Dry-matter balance and water removal | Calibrated scale, meters, logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | Grain hand-offs | dry matter = wet mass × (1 − moisture fraction); equivalent target mass = dry matter ÷ (1 − target fraction) | wet mass; moisture | dry matter and adjusted mass | `mass-balance-identity` |
| `calc_field_normalization` | Field inventory | field amount ÷ same-field net accepted grain | field amount; accepted grain | amount/kg reference | `mass-balance-identity` |
| `calc_direct_n2o` | Soil N2O | N2O-N = Σ(N pool × EF1); N2O = N2O-N × 44/28 | N pools; EF1 | kg N2O | `ipcc-2019-managed-soils` |
| `calc_batch_balance` | Harvest/cleaning/drying | input = accepted + co-products/downgrades + rejects + losses + moisture change | all hand-off masses and moisture | closure and residual | `mass-balance-identity` |
| `calc_drying_water` | Stabilization | input wet mass × input moisture − output wet mass × output moisture | wet masses; moisture | kg water removed | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference lot | Species, class, state, crop year, geography, moisture, grade/destination and routes are present. | Lot and grade records |
| `dq_completeness` | All processes | Every card has a value; zero use requires explicit evidence. | Process checklist and ledgers |
| `dq_route_traceability` | Alternatives | Retain separate route identifiers until weighted aggregation. | Field/batch/campaign identifiers |
| `dq_mass_balance` | Harvest/cleaning/drying | Investigate unexplained dry-matter residual above 5% of input. | Moisture-corrected worksheet |
| `dq_temporal` | Dataset | Include a complete crop cycle and linked post-harvest batches. | Dates and crop-year records |
| `dq_representativeness` | Aggregation | Production-mass weight contributors and disclose exclusions. | Aggregation workbook |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail unless output is mature whole dry *Pisum sativum* grain with moisture, grade/destination and route qualifiers. | `ndsu-field-pea-production-2021` |
| `validate_route_topology` | Process map | Require field, harvest and cleaning nodes; require drying/aeration only when active, and reject unweighted mixed routes. | `saskatchewan-dry-pea-guide` |
| `validate_nutrient_cardinality` | `field_production` | Allow at most one nutrient Product-input card, bound only to `flow-set.agricultural-nutrient-supply@0.3.0` with no group; reject separate N, P, K, organic-fertilizer or amendment cards. | `ndsu-field-pea-fertility-2023` |
| `validate_output_destinations` | Outputs | Require one explicit hand-off for grain, residues, damage/downgrade, rework, foreign matter, rejects and loss; reject double counting. | `mass-balance-identity` |
| `validate_rework` | Cleaning/stabilization | Link each rework return to source lot, destination and pass; accepted output excludes unresolved reject/rework mass. | `mass-balance-identity` |
| `validate_batch_mode` | Harvest/cleaning/stabilization | Require batch/campaign boundaries and assign clean-out, carryover and shared energy once. | `mass-balance-identity` |
| `validate_ranges` | Inventory | Require exactly one complete Range per quantitative card with bounds, unit, denominator/basis, basis kind, evidence and required source ids. | `mass-balance-identity` |
| `validate_mass_balance` | Harvest/cleaning/drying | Require moisture-corrected reconciliation and review residual above 5%. | `mass-balance-identity` |
| `validate_drying_condition` | `drying_aeration` | Require input/output moisture and temperature, route, duration and energy; destination limits override the general storage screen. | `saskatchewan-dry-pea-guide` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground cradle-to-farm-gate mature dry whole pea production dataset |
| downstream_use | Secondary or background dataset for compatible food, feed and processing models |
| allowed_use | Dry whole pea grain at farm gate with compatible geography, year, regime, moisture and grade/destination |
| excluded_use | Green peas, forage/silage, planting seed products, split/milled/fractionated/concentrated/canned/cooked peas or unidentified mixed pulses |
| required_metadata | PCR id; CPC; UUID; species/class; geography; crop year; field/lot; water regime; harvest and conditioning routes; moisture; grade/destination; allocation; sources |
| required_quality_disclosure | Coverage; zero-use evidence; measured/estimated shares; range exceptions; mass-balance residual; rework; allocation sensitivity; representativeness |
| update_trigger | Material change in class, geography, system, yield, nutrient/water regime, harvest, conditioning, specification, allocation, IPCC factors or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ndsu-field-pea-production-2021` | extension_guidance | NDSU Extension, Field Pea Production (A1166), https://www.ndsu.edu/agriculture/sites/default/files/2021-12/a1166.pdf | Identity, production, harvest, damage, cleaning and storage |
| `ndsu-field-pea-fertility-2023` | extension_guidance | NDSU Extension, Soil Fertility Recommendations for Field Pea, Lentil and Chickpea (SF725), https://www.ndsu.edu/fileadmin/snrs/Files/sf725.pdf | Soil-test-driven nutrient records |
| `saskatchewan-dry-pea-guide` | official_guidance | Government of Saskatchewan, Dry Pea fact sheet, https://pubsaskdev.blob.core.windows.net/pubsask-prod/86385/86385-dry_pea.pdf | Harvest, cleaning, grading, moisture, storage, aeration and drying |
| `saskatchewan-pea-harvest-management` | extension_guidance | Saskatchewan Pulse Growers, Pea Harvest Management, https://saskpulse.com/resources/pea-harvest-management/ | Harvest routes, shatter, damage and storage |
| `fao-crop-water-needs` | official_guidance | FAO, Crop Water Needs, https://www.fao.org/4/s2022e/s2022e02.htm | Pea seasonal crop-water need 350–500 mm |
| `fao-cropland-nutrient-balance-2025` | dataset | FAOSTAT Cropland Nutrient Balance metadata, December 2025, https://files-faostat.fao.org/production/ESB/ESB_e.pdf | Dry-pea dry matter and harvest index context |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Direct soil N2O formula and EF1 uncertainty |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to moisture-corrected field and batch records | Balance, conversion, allocation and QA |
