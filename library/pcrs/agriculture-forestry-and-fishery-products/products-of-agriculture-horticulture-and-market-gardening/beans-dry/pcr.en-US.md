---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beans-dry
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Beans, dry

## 1. Scope and Applicability

This PCR covers production of mature dry edible bean grain at a declared farm gate. The producer shall identify the botanical species and market class because the category may include several dry edible bean species and commercial classes with different crop management and quality requirements.

The foreground boundary begins with seed and other purchased inputs entering managed field production. It includes crop establishment and management, mature harvest, any field pre-drying, threshing or shelling, cleaning, grading, and drying required to reach the declared farm-gate moisture and grade. Manual and mechanized harvest routes, rainfed and irrigated production, and field-dried and equipment-dried conditioning may coexist within a representative production mix only when their activity data are separately collected and weighted.

Green beans harvested as vegetables, soybean, dry broad or horse beans, dry chickpeas, dry lentils, dry peas, cowpeas, Bambara beans, pigeon peas, and other separately classified pulses are excluded. Planting-seed production as a certified or marketed seed product is excluded, although seed retained from the harvested crop shall be disclosed as an internal or co-product route. Milling, splitting, cooking, canning, retail packing, off-farm storage, and transport beyond the declared farm gate are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beans-dry |
| classification_refs | CPC 3.0 01701, Beans, dry |
| covered_products | Mature, dry, edible bean grain sold as an unprocessed farm-gate commodity, with species and market class declared |
| excluded_products | Green beans; soybean; broad and horse beans; chickpeas; lentils; peas; cowpeas; Bambara beans; pigeon peas; other separately classified pulses; certified planting seed; milled, cooked, canned, or retail-packed beans |
| representative_product | Cleaned and graded mature dry edible bean grain |
| production_route | Managed field production followed by mature harvest, threshing or shelling, cleaning, grading, and conditional drying |
| market_state | Harvested grain, unprocessed; production mix, at farm gate |

The managed-biological-production parent is field cultivation of the declared dry edible bean crop. Rainfed versus irrigated management is an alternative production-route delta because it changes the water inventory and potentially yield records; both may coexist in a production mix only as separately measured strata. Manual or pulled-plant harvest versus direct mechanical harvest is an alternative harvest-technology delta because it changes field pre-drying, equipment energy, shattering, and breakage records. Natural or field drying and equipment drying may coexist, but they are mutually exclusive for the same moisture-removal interval and lot.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cleaned, graded, mature dry edible bean grain delivered at the declared farm gate |
| How much | 1,000 kg net mass |
| How well | Declared species and market class; declared moisture on wet basis; declared grade or buyer specification; free of separately accounted rejects and residue |
| How long or cycle | One crop cycle with single-period treatment; attribution across crop cycles is not applied. Observations from more than one crop year may be averaged only after each crop-year record remains traceable. |
| reference_flow_link | Net accepted dry bean mass leaving the final included conditioning node |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Beans, dry `b297a6cf-1d2e-4d88-a99a-02807441a4db` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | botanical species; market class; intended commodity or retained-seed route; geography; crop year; rainfed or irrigated regime; harvest technology; drying route; moisture content and wet-basis statement; grade or buyer specification; farm-gate hand-off |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference dry bean product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net accepted grain mass at the declared moisture basis; exclude packaging, foreign material removed before hand-off, and separately routed rejects. |
| `moisture_basis` | every grain-state mass | Mass and moisture content | kg and % wet basis | Record measured moisture with each relevant lot mass. A dry-matter conversion shall use dry matter = wet mass × (1 − moisture fraction), and conversion to a declared target moisture shall conserve dry matter. |
| `nutrient_products` | mineral fertilizer, organic fertilizer, and nutrient-bearing amendment inputs | Product mass or volume and nutrient composition | kg or m3 product; kg N; kg P or P2O5; kg K or K2O | Record each actual product once and retain its composition and nutrient convention; do not add nutrient-equivalent exchanges to the same product mass. |
| `energy_records` | fuels and purchased energy | Carrier-specific energy or volume | MJ, kWh, L, or kg | Preserve carrier identity and measurement unit, convert only with a declared factor, and assign energy to the lot, run, field, or reporting period in which it was used. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | seed and purchased inputs entering the declared managed field-production cycle |
| starting_condition_role | foreground production starting condition |
| product_classification_scope | mature dry edible beans in CPC 3.0 01701 only |
| recursive_input_rule | Beans from the same category used as sowing seed are recorded as a same-category product input with mass, species, market class, source, treatment, and retained-seed or purchased route; do not recurse into the current output dataset. |
| upstream_dataset_requirement | Link purchased seed, fertilizers, amendments, crop-protection products, energy carriers, water supply where relevant, and other purchased inputs to compatible upstream datasets; retained seed remains an explicitly measured internal or co-product flow. |
| disclosure | Declare species, market class, geography, crop year, production regime, seed route, harvest technology, pre-drying, threshing, cleaning and grading arrangement, drying route, moisture basis, grade, co-product destinations, loss routes, and farm-gate hand-off. |

The field-production node hands off a mature standing crop to an independent harvest node. Harvest is independent because it removes the biological output from the field and has distinct energy, shattering, residue, and hand-off records. Harvest hands off uncleaned grain to primary conditioning. Cleaning and grading classify the incoming grain into accepted, downgraded, retained-seed, and rejected states. Drying is a separate preservation node only when a bounded intervention removes moisture after harvest; its usable input state, target moisture, energy, water removal, loss, and lot hand-off shall be recorded.

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | foreground system | Include managed field production, mature harvest, necessary field pre-drying, threshing or shelling, cleaning, grading, and farm-gate drying needed for the declared reference-product state. | `fao-bean-postharvest-compendium`; `fao-postharvest-system` |
| `boundary_route_condition` | conditional operations | Include irrigation, mechanical drying, and other conditional operations only for lots or reporting strata in which they occur; zero activity is recorded when the route is inactive. |  |
| `boundary_downstream_exclusion` | downstream activities | Exclude milling, splitting, cooking, canning, retail packing, off-farm storage, and transport after the farm-gate hand-off. | `usda-dry-edible-beans-2021` |
| `boundary_state_separation` | output states | Keep accepted beans, downgraded or damaged beans, retained seed, valuable straw or pod residues, discarded screenings, field shattering, and other losses as distinct states with explicit hand-offs. | `fao-bean-postharvest-compendium` |
| `boundary_route_delta` | alternative routes | Stratify rainfed and irrigated production, manual and mechanical harvest, and natural and equipment drying when they change topology, inventory categories, calculation, or validation; do not apply two routes to the same activity interval. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Managed field production | required |  | managed biological production with declared alternative production-route deltas | cultivated area and one crop cycle |
| `mature_harvest` | Mature harvest and threshing | required |  | harvest and capture with declared alternative technology-route deltas | total mature crop removed from the field |
| `cleaning_grading` | Cleaning and grading | required |  | primary conditioning and grading | total uncleaned grain received |
| `farm_gate_drying` | Farm-gate drying | conditional | included when accepted grain requires a bounded moisture-removal intervention before hand-off | preservation and stabilization | wet grain entering the drying run |

Production is seasonal batch or campaign production. Each field, harvest event, conditioning lot, dryer run, cleaning event, and crop year shall retain an identifier. Inputs, outputs, cleaning, and changeover burdens shall be linked to those identifiers or to a documented allocation over the reporting period.

### Process: Managed field production (`field_production`)

#### Inputs

##### Product flows

###### Bean seed sown for commodity production (`bean_seed_input`)

Record purchased or retained bean seed that crosses into the crop cycle, with species, market class, treatment, germination information when available, and source route.

- Selected flow: Beans, dry `b297a6cf-1d2e-4d88-a99a-02807441a4db`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measured seed mass assigned to the cultivated field and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output at the declared moisture
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional seed-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments in this single card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count compound or organic products more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect every actual product quantity once, retain its composition, and calculate declared nutrient quantities without duplicating compound or organic products; resolve every emitted product exchange to one verified UUID during dataset generation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional total nutrient-product input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg product
  - Basis: total mass of all nutrient-bearing products per 1,000 kg accepted dry bean output; liquid products may be converted using recorded density
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection and inoculant products (`crop_protection_inputs`)

Record each pesticide, seed treatment applied on farm, biological control, and rhizobial inoculant separately in the underlying foreground records, retaining active ingredient and formulation.

- Selected flow: Crop-protection and inoculant products
- Flow property / unit: Mass or volume / kg or L product
- Amount rule: Measured purchased or issued quantity minus documented returns, assigned by application record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional crop-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg product equivalent
  - Basis: summed formulated-product mass per 1,000 kg accepted dry bean output; volume records use recorded density
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied to the field (`irrigation_water`)

Include only for irrigated production. Record water delivered to the field or plot, and keep the rainfed route at zero.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered volume or calculated volume from calibrated flow rate and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_water`
- Range: Provisional irrigation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3
  - Basis: per 1,000 kg accepted dry bean output; zero when rainfed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy carriers (`field_energy`)

Record actual fuel, electricity, animal traction service, or contracted field-operation energy associated with establishment and crop management, excluding harvest energy recorded at the harvest node.

- Selected flow: Field energy supply
- Flow property / unit: Carrier-specific quantity and energy / L, kg, kWh, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Measured carrier use or contractor activity converted with a declared factor and assigned to the field and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Provisional field-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ
  - Basis: total final energy per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mature standing bean crop handed to harvest (`mature_standing_crop`)

Record the mature crop made available to harvest as an intermediate product state. The crop remains linked to its field, species, market class, and crop cycle.

- Selected flow: Mature standing dry bean crop
- Flow property / unit: Mass / kg
- Amount rule: Calculated harvested products plus measured or estimated harvest residues and field losses on a consistent moisture basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_reconciliation`
- Range: Provisional mature-crop mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 8000
  - Unit: kg
  - Basis: grain, attached pods and stalk material made available to harvest per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct nitrous oxide emission from managed soil (`direct_soil_n2o`)

Calculate direct N2O using the declared inventory method from measured nitrogen inputs and crop-residue treatment; retain the emitted species and air compartment.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculated from collected nitrogen inputs and applicable emission factors; distinguish N2O-N and N2O.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_field_emission_drivers`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional direct-soil N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg N2O
  - Basis: per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia emitted from field nitrogen management (`field_ammonia`)

Include when the selected inventory method reports volatilized ammonia. Retain the substance, receiving compartment, and distinction between NH3-N and NH3.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculated from actual nitrogen products, application events, and the declared factor method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_drivers`
- Range: Provisional ammonia-emission screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg NH3
  - Basis: per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate transferred from the field to water (`field_nitrate`)

Include nitrate leaching or runoff only when supported by the declared inventory method, retaining the receiving water compartment.

- Selected flow: Nitrate, to water
- Flow property / unit: Mass / kg NO3-
- Amount rule: Calculated from measured nitrogen inputs, site conditions, and the declared leaching or runoff method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emission_drivers`
- Range: Provisional nitrate-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg NO3-
  - Basis: per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Mature harvest and threshing (`mature_harvest`)

#### Inputs

##### Product flows

###### Mature standing crop received from the field (`harvest_crop_input`)

Record the intermediate crop state transferred from field production without creating an upstream duplicate.

- Selected flow: Mature standing dry bean crop
- Flow property / unit: Mass / kg
- Amount rule: Same lot mass and moisture basis as the field-production hand-off.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_reconciliation`
- Range: Provisional incoming mature-crop mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 8000
  - Unit: kg
  - Basis: crop received by harvest per 1,000 kg accepted grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and threshing energy carriers (`harvest_energy`)

Record energy for pulling, cutting, windrowing, combining, threshing, shelling, and transfers within the harvest node. Manual labor may be disclosed separately but shall not be converted to energy without a declared method.

- Selected flow: Harvest and threshing energy supply
- Flow property / unit: Carrier-specific quantity and energy / L, kg, kWh, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Measured energy by harvest event or allocated from equipment logs using operating time, area, or throughput.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Provisional harvest-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: MJ
  - Basis: total final energy per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Uncleaned dry bean grain (`uncleaned_bean_grain`)

Record threshed or shelled grain, including material later removed by cleaning and grading, at measured moisture.

- Selected flow: Uncleaned dry bean grain
- Flow property / unit: Mass / kg
- Amount rule: Measured mass handed to cleaning and grading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_quality`
- Range: Provisional uncleaned-grain mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1600
  - Unit: kg
  - Basis: per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Valuable bean straw and pod residues (`valuable_straw_pod_residue`)

Record straw, vines, and pod material as a product output only when deliberately collected and handed off for a beneficial use or sale; otherwise keep it in the field-residue or waste route.

- Selected flow: Bean straw and pod residues for beneficial use
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated dry-matter mass leaving the harvest node as a valuable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_products_losses`
- Range: Provisional valuable-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg dry matter
  - Basis: collected valuable residue per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shattered and unrecovered bean grain (`harvest_shattering_loss`)

Record mature bean grain lost during pulling, cutting, windrowing, pickup, combining, threshing, or shelling and not recovered as product.

- Selected flow: Unrecovered dry bean grain
- Flow property / unit: Mass / kg
- Amount rule: Measured loss study or reconciled difference after accounting for collected grain and residues.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_co_products_losses`
- Range: Provisional harvest-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg
  - Basis: unrecovered grain per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning and grading (`cleaning_grading`)

#### Inputs

##### Product flows

###### Uncleaned grain received for conditioning (`conditioning_grain_input`)

Keep lot identity, species, market class, moisture, and harvest origin through cleaning and grading.

- Selected flow: Uncleaned dry bean grain
- Flow property / unit: Mass / kg
- Amount rule: Same mass and moisture basis as the harvest hand-off.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_quality`
- Range: Provisional incoming-conditioning mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1600
  - Unit: kg
  - Basis: per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and grading energy carriers (`conditioning_energy`)

Record energy used for conveying, threshing completion, aspiration, screening, sorting, grading, and lot changeover cleaning.

- Selected flow: Cleaning and grading energy supply
- Flow property / unit: Carrier-specific quantity and energy / kWh, L, kg, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered energy or allocated equipment energy by run time or throughput; changeover burdens are assigned once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Provisional conditioning-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: total final energy per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cleaned and graded beans (`accepted_graded_beans`)

Record beans meeting the declared grade or buyer specification. If no equipment drying follows, this is the reference-product hand-off.

- Selected flow: Beans, dry `b297a6cf-1d2e-4d88-a99a-02807441a4db`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measured net accepted mass at measured moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_quality`
- Range: Reference-output reconciliation range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: net accepted reference product after the final included node
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded or damaged bean grain (`downgraded_bean_grain`)

Record broken, discolored, insect-damaged, mixed-class, or otherwise off-spec grain as a separate product only when it has a declared buyer or beneficial destination. It shall not be counted in accepted output.

- Selected flow: Downgraded dry bean grain
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by declared downgrade class and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_products_losses`
- Range: Provisional downgraded-grain screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: downgraded grain per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bean grain retained or sold for sowing (`retained_seed_output`)

Record grain diverted from the commodity lot for future sowing or sale as seed. Declare whether it is an internal flow or a valuable co-product and do not count it as accepted food-grade output.

- Selected flow: Dry bean grain for sowing
- Flow property / unit: Mass / kg
- Amount rule: Measured mass at diversion with species, class, treatment, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_products_losses`
- Range: Provisional retained-seed screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg
  - Basis: retained or sold seed per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cleaning screenings and discarded rejects (`cleaning_rejects`)

Record stones, soil, foreign matter, unusable pods, severely damaged beans, and other discarded screening fractions by destination. Material sent to a beneficial use shall be reclassified as a product output.

- Selected flow: Cleaning screenings and discarded rejects
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by grade state and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry bean output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_products_losses`
- Range: Provisional cleaning-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: discarded rejects per 1,000 kg accepted dry bean output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Farm-gate drying (`farm_gate_drying`)

#### Inputs

##### Product flows

###### Wet cleaned beans entering drying (`wet_beans_to_drying`)

Include only when a bounded equipment-drying or controlled drying intervention is needed. Record incoming mass and moisture by dryer run.

- Selected flow: Wet cleaned dry bean grain
- Flow property / unit: Mass / kg
- Amount rule: Measured incoming lot mass at measured wet-basis moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dried accepted bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_run`
- Range: Provisional wet-grain input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1400
  - Unit: kg
  - Basis: per 1,000 kg dried accepted bean output when drying is active
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying energy carriers (`drying_energy`)

Record every fuel or electricity carrier used by the drying run. Natural field drying has zero equipment-drying energy and shall not receive a duplicate drying burden.

- Selected flow: Drying energy supply
- Flow property / unit: Carrier-specific quantity and energy / kWh, L, kg, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered carrier use assigned to the dryer run, including start-up and shutdown; shared energy is allocated once by metering or wet-grain throughput.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dried accepted bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_run`
- Range: Provisional drying-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ
  - Basis: total final energy per 1,000 kg dried accepted bean output when drying is active
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried accepted bean grain at farm gate (`dried_reference_beans`)

Record the stabilized output at declared moisture and grade. Preserve lot identity and link it to the incoming wet grain and drying run.

- Selected flow: Beans, dry `b297a6cf-1d2e-4d88-a99a-02807441a4db`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measured net dry bean mass after stabilization and before farm-gate hand-off.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg dried accepted bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_run`
- Range: Drying-node reference-output range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: net accepted output of the drying node
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Beans rejected or lost during drying (`drying_rejects`)

Record heat-damaged, mould-affected, spilled, or otherwise rejected beans separately by destination. Recoverable downgraded product shall be reclassified as a product output.

- Selected flow: Drying rejects and losses
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass plus reconciled dry-matter loss, excluding water removed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dried accepted bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_run`
- Range: Provisional drying-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg dry matter
  - Basis: reject dry matter per 1,000 kg dried accepted bean output when drying is active
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water removed from beans during drying (`drying_water_removed`)

Calculate water removed by wet-basis moisture balance; do not treat it as bean dry-matter loss.

- Selected flow: Water, to air
- Flow property / unit: Mass / kg
- Amount rule: Incoming water mass minus outgoing water mass, calculated from measured lot masses and wet-basis moisture fractions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dried accepted bean output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_run`
- Sources: `fao-grain-drying`
- Range: Provisional drying-water removal screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg water
  - Basis: per 1,000 kg dried accepted bean output when drying is active
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | fields, harvest events, lots, and dryer runs | Prefer subdivision and direct assignment using field, event, lot, run, and destination records before applying allocation. |  |
| `allocation_intended_outputs` | accepted beans, retained seed, downgraded beans, and valuable residues | Enumerate every intended output and hand-off. When two or more independently valuable outputs leave one node, declare and justify a PCR-specific physical or economic allocation; report a sensitivity to the alternative basis when the choice materially changes results. |  |
| `allocation_residue_test` | bean straw, pods, screenings, and rejected grain | Treat material as a co-product only when deliberately collected and transferred for beneficial use or sale. Field-retained residues, unrecovered shattering, and discarded rejects remain residue, loss, or waste and receive no product allocation. |  |
| `allocation_rework` | reworked, re-cleaned, re-dried, downgraded, or returned material | Link rework to the node that produced the off-spec state, retain its burdens, and add only incremental rework burdens. Never count reworked or downgraded mass simultaneously as accepted output. |  |
| `allocation_shared_runs` | shared equipment, cleaning, start-up, shutdown, and changeover | Assign shared run burdens once by direct metering where possible, otherwise by documented time, wet-grain throughput, or another causal physical basis; prevent double counting across lots or routes. |  |
| `allocation_internal_seed` | retained seed returned to a later crop cycle | Record retained seed as an explicit internal or co-product flow. Apply the chosen cross-cycle convention consistently and disclose it; do not erase the seed flow through recursion. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | field_production | seed, nutrients, crop protection, and inoculants | purchase, issue, application, and field records | field id; crop year; species; market class; product identity; formulation; quantity; unit; nutrient composition; application date; treated area; returns | reconcile invoices and stock movement to field application records; keep each nutrient product once | native product unit; kg or m3; nutrient kg | each application and crop cycle | complete crop cycle | each field or homogeneous management stratum | sum actual quantities by product and normalize to accepted output from the linked crop cycle | invoices; application logs; stock reconciliation; composition evidence |
| `cp_irrigation_water` | field_production | irrigation water | meter or irrigation-event record | field id; event; meter readings or flow rate; duration; source; irrigated area | meter difference or calibrated flow rate × operating time | m3 | each irrigation event | complete crop cycle | each irrigated field; rainfed fields recorded as zero | sum delivered field volume and normalize to linked accepted output | meter calibration or flow-rate check; event log |
| `cp_energy_records` | field_production; mature_harvest; cleaning_grading | field, harvest, and conditioning energy | meter, fuel issue, contractor, and equipment log | node; field or lot id; carrier; quantity; unit; start and end meter; operating time; throughput; shared-run rule | meter or fuel reconciliation; allocate shared runs once using recorded causal driver | carrier unit and MJ | each event or run | complete crop cycle and conditioning campaign | each field, machine, or facility | sum by carrier and node; convert with declared factors; normalize to linked output | meter calibration; invoices; equipment logs; allocation worksheet |
| `cp_field_emission_drivers` | field_production | direct field emissions | application, residue, soil, climate, and method record | N product and N content; crop residues returned or removed; soil and climate stratum; emission-factor method; factor version | calculate only from collected drivers using the declared inventory method | kg N; kg dry matter; method-specific units | each application and annual calculation | crop cycle with required annual context | each field or homogeneous stratum | apply the method by stratum and aggregate substances after retaining compartment and N-to-compound conversions | application records; composition evidence; method citation; calculation workbook |
| `cp_mass_reconciliation` | field_production; mature_harvest | intermediate crop and harvest mass balance | field and harvest reconciliation | field id; harvested grain; residue; retained field residue; shattering; moisture by state | reconcile all measured and estimated output states on a consistent moisture or dry-matter basis | kg and % wet-basis moisture | each harvest event | crop cycle | each field and harvest event | reconcile inputs and outputs before aggregation; normalize to accepted product | calibrated scale; moisture meter; loss study; reconciliation check |
| `cp_lot_mass_quality` | mature_harvest; cleaning_grading | lot masses, moisture, and grade states | weighbridge, scale, moisture, and grade record | lot id; origin; species; market class; incoming mass; outgoing mass; moisture; grade; foreign matter; broken or damaged fraction; destination | calibrated weighing and representative quality sampling at every hand-off | kg and % | each lot and hand-off | complete harvest and conditioning campaign | each lot and conditioning site | conserve dry matter across hand-offs and sum only after lot reconciliation | calibration; sampling record; grade certificate or buyer specification |
| `cp_co_products_losses` | mature_harvest; cleaning_grading | residues, co-products, downgrade, retained seed, and losses | weighing, destination, and loss-study record | producing node; state; mass; moisture; quality; destination; value where allocation is needed; recovery status | weigh where possible; otherwise documented sampling and reconciliation | kg wet mass and kg dry matter | each event or lot | complete crop cycle and campaign | each field, lot, and destination | aggregate separately by state and destination; never merge accepted, downgraded, retained-seed, residue, and waste states | scale records; destination receipt; loss study; reconciliation |
| `cp_drying_run` | farm_gate_drying | wet input, dried output, rejects, moisture, and energy | dryer-run record | run id; lot id; incoming and outgoing mass; incoming and outgoing moisture; target moisture; carriers; carrier quantities; rejects; start-up; shutdown; destination | calibrated weighing, moisture measurement, and energy metering for each run | kg; % wet basis; carrier unit; MJ | each dryer run | complete drying campaign | each dryer and run | calculate conserved dry matter and removed water; assign shared energy once; normalize to dried accepted output | scale and moisture calibration; meter records; dry-matter reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference` | all inventory amounts | normalized amount = amount assigned to the declared route ÷ accepted reference-product mass × 1,000 kg | assigned flow amount; accepted reference-product mass | flow amount per 1,000 kg reference product | `mass-balance-identity` |
| `wet_to_dry_matter` | bean, residue, and reject mass | dry matter = wet mass × (1 − wet-basis moisture fraction) | measured wet mass; measured wet-basis moisture | kg dry matter | `fao-grain-drying` |
| `drying_water_balance` | farm-gate drying | water removed = incoming wet mass × incoming moisture fraction − outgoing wet mass × outgoing moisture fraction; separately reconcile bean dry matter and rejects | incoming and outgoing mass and moisture; reject mass and moisture | kg water removed and dry-matter reconciliation | `fao-grain-drying` |
| `field_n2o_method` | direct managed-soil N2O | apply the selected IPCC tier or a documented regional method to actual synthetic N, organic N, crop-residue N, and other required drivers; convert N2O-N to N2O by 44/28 | collected N inputs; residue treatment; method factors; site strata | kg N2O by receiving compartment | `ipcc-2019-managed-soils` |
| `lot_output_reconciliation` | harvest, cleaning, grading, and drying | incoming dry matter = accepted dry matter + downgraded dry matter + retained-seed dry matter + valuable-residue dry matter + reject dry matter + unrecovered dry-matter loss, within declared uncertainty | all state-specific mass and moisture records | reconciled output states and unexplained difference | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference and intermediate bean states | Species, market class, crop year, lot lineage, intended route, and classification exclusions shall be explicit. | field, lot, and product specification records |
| `dq_temporal` | production mix | Cover a representative crop cycle; multi-year averages retain annual values and weighting. | crop-year records and aggregation worksheet |
| `dq_route` | alternative production and technology routes | Rainfed versus irrigated, manual versus mechanical harvest, natural versus equipment drying, and rework routes shall be separately measured and weighted. | route flags, event logs, and production weights |
| `dq_mass_moisture` | all bean, residue, reject, and loss states | Masses shall carry moisture basis where it affects comparison, and every hand-off shall pass dry-matter reconciliation within documented uncertainty. | scale and moisture calibration; reconciliation report |
| `dq_nutrient` | agricultural nutrient products | Preserve actual product identity, quantity, composition, and nutrient convention; demonstrate that compound and organic products were counted once. | invoices, labels or analysis, application records, and nutrient worksheet |
| `dq_completeness` | all process nodes | Record accepted output, downgraded output, retained seed, valuable residues, rejects, shattering, and other losses as separate states with destinations. | mass reconciliation and destination records |
| `dq_runs` | conditioning and drying campaigns | Link energy, cleaning, start-up, shutdown, changeover, outputs, and rejects to a run or reporting period and assign each shared burden once. | run logs, meter records, and allocation worksheet |
| `dq_method` | calculated emissions | Identify method, tier, factor version, units, conversions, and applicable compartments; do not substitute generic substance labels for resolved elementary-flow identities in final datasets. | cited method and calculation workbook |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Confirm the flow UUID, species, market class, unprocessed grain state, farm-gate hand-off, moisture basis, grade, and exclusion of green beans, soybean, and separately classified pulses. |  |
| `validate_reference_mass` | reference amount | Confirm exactly 1,000 kg net accepted bean grain after the final included node and exclude packaging, foreign material, downgraded grain, retained seed, and rejects. | `mass-balance-identity` |
| `validate_route_topology` | alternative routes | Confirm each lot has one declared production, harvest, pre-drying, conditioning, and drying topology; mutually exclusive route intervals shall not be double counted. |  |
| `validate_process_handoffs` | all nodes | Confirm field output equals harvest input, harvest grain equals conditioning input, and any drying input links to the accepted conditioning lot, after moisture-basis conversion. | `mass-balance-identity` |
| `validate_grade_states` | cleaning and grading | Confirm at least accepted and rejected states are declared, and every accepted, downgraded, retained-seed, valuable-residue, reject, and waste state has exactly one hand-off or destination. | `usda-dry-edible-beans-2021` |
| `validate_drying` | conditional drying | When drying is active, confirm before and after moisture, dry-matter balance, energy, water removed, rejects, and run identity; when inactive, confirm no equipment-drying burden. | `fao-grain-drying` |
| `validate_rework` | off-spec and returned material | Confirm re-cleaned or re-dried material is linked back to its producing node, receives only incremental rework burdens, and is counted once in its final state. |  |
| `validate_outputs_allocation` | multi-output nodes | Confirm all intended outputs and hand-offs are complete, the attribution decision is declared, residue versus co-product tests are applied, and sensitivity is reported when material. |  |
| `validate_runs` | batch and campaign records | Confirm inputs, outputs, cleaning, changeover, start-up, and shutdown records are indexed to fields, lots, runs, or periods and no shared burden is assigned twice. |  |
| `validate_ranges` | every inventory flow card | Confirm each card has exactly one complete range; conditional ranges apply only when the route is active; actual foreground records determine reported amounts. |  |
| `validate_nutrient_cardinality` | each process | Confirm no process has more than one mineral-fertilizer, organic-fertilizer, or nutrient-bearing-amendment product-input card, and that the field card binds only `flow-set.agricultural-nutrient-supply@0.3.0` without a group. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process or aggregated foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Mature dry edible bean grain at farm gate when species, market class, geography, crop year, production regime, harvest technology, drying route, moisture basis, grade, and co-product treatment match the study |
| excluded_use | Green beans, soybean, other separately classified pulses, certified planting seed production, milling, cooking, canning, retail packing, off-farm storage, or post-gate transport |
| required_metadata | reference-flow UUID and qualifiers; CPC context; species; market class; geography; crop year; production and harvest route; conditioning and drying route; moisture basis; grade; field, lot and run coverage; co-product and loss destinations; allocation; inventory method; DQR |
| required_quality_disclosure | foreground-record coverage; scale, meter and moisture calibration; route weighting; missing-data treatment; range-screen exceptions; mass and dry-matter reconciliation; emission-factor method and version; allocation sensitivity |
| update_trigger | material change in species or market class, geography, production regime, seed route, harvest or conditioning technology, drying route, grade requirement, co-product destination, allocation method, inventory method, or data representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-bean-postharvest-compendium` | handbook | FAO INPhO, Post-harvest Operations Compendium: Phaseolus beans, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Phaesolus_beans.pdf | bean harvest, field drying, threshing, handling, cleaning, loss, and route decomposition |
| `fao-postharvest-system` | handbook | FAO, Post-harvest system and food losses, https://www.fao.org/4/ac301e/AC301e03.htm | distinction among harvest, pre-drying, threshing, cleaning, drying, storage, and processing |
| `fao-grain-drying` | handbook | FAO, Agricultural engineering in development: Drying, https://www.fao.org/4/t0522e/T0522E08.htm | wet-basis moisture definition, drying boundary, safe-state purpose, and water-balance calculation |
| `usda-dry-edible-beans-2021` | official_guidance | USDA Agricultural Marketing Service, Commodity Specification for Dry Edible Beans, Peas and Lentils, August 2021, https://www.ams.usda.gov/sites/default/files/media/CommoditySpecificationforDryEdibleBeansPeasandLentilsAugust2021.pdf | dry mature bean commodity identity, moisture and quality-state context, and downstream processing distinction |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | direct managed-soil N2O calculation and N2O-N to N2O conversion context |
| `mass-balance-identity` | method_factor | Conservation of mass and dry matter applied to measured foreground hand-offs | reference normalization, output-state reconciliation, and allowed 1,000 kg reference amount |
