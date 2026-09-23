---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chick-peas-dry
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Chick peas, dry

## 1. Scope and Applicability

This PCR applies to mature, dry, unprocessed chickpea grain (*Cicer arietinum*), including desi and kabuli market classes, at the farm gate. It covers managed field production, harvest and threshing, farm cleaning and grading, and conditional aeration or drying needed to reach the declared farm-gate state.

Green or succulent chickpeas, planting seed sold as seed, flour, split or dehulled fractions, canned or cooked products, and downstream industrial cleaning, sizing, milling, fractionation or food manufacture are outside scope. The foreground package must declare geography, crop year, market class, production route, harvest route, moisture basis, grade or destination specification, and whether conditional stabilization occurred.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chick-peas-dry` |
| classification_refs | CPC 3.0 `01703` Chick peas, dry |
| covered_products | Mature dry desi and kabuli chickpea grain at farm gate, unprocessed beyond farm cleaning, grading and necessary stabilization |
| excluded_products | Green chickpeas; planting seed sold as seed; sprouts; flour; splits; dehulled fractions; canned or cooked products; downstream industrial cleaning, sizing or processing |
| representative_product | Mature dry chickpea grain, desi or kabuli, meeting a declared farm-gate moisture and grade or destination specification |
| production_route | Managed field production followed by distinct harvest/threshing and farm conditioning; rainfed and irrigated production may coexist across fields, while straight cutting and swathing are mutually exclusive for the same harvest event; ambient aeration and supplemental low-temperature drying may coexist sequentially for a lot |
| market_state | Harvested grain, unprocessed; accepted at farm gate after declared cleaning, grading and any required stabilization |

The managed biological production parent is `field_production`. Route deltas must be evidenced by changed inventory categories or records: irrigated fields add supplied-water and pumping records; swathing adds a separate cutting/windrow event; direct combining omits that event; heated drying adds fuel or heat and temperature records. A label alone does not establish a distinct route.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mature dry chickpea grain at the farm gate |
| How much | 1,000 kg as-received mass at the declared moisture content |
| How well | Desi or kabuli class; declared grade or destination specification; declared moisture; accepted grain excludes unresolved rework, foreign material, unrecovered loss and downgraded output |
| How long or cycle | One crop cycle, with post-harvest operations linked to the harvested field and lot |
| reference_flow_link | `chick_peas_dry_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Chick peas, dry `c509fe95-d4ab-4db9-b593-f6329aef8dbd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | desi or kabuli class; cultivar where material; geography; crop year; rainfed or irrigated route; straight-cut or swathed harvest; moisture percentage and wet or dry basis; grade or destination specification; farm-gate hand-off; drying or aeration route; allocation choice |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure as-received mass and state moisture percentage and basis; any conversion to a common moisture uses recorded inlet and outlet moisture and conserves dry matter. |
| `nutrient_products` | consolidated agricultural nutrient input | Product quantity and nutrient composition | kg or m3 product and kg N, P or P2O5, K or K2O as applicable | Record every actual product once; retain formulation and nutrient analysis so compound and organic products are not duplicated across product-mass and nutrient-mass reports. |
| `grade_fraction` | damage, green seed, foreign material, rework and rejects | Mass fraction | kg/kg or % by mass | Use a representative lot sample and state whether the denominator is incoming bulk grain or cleaned sample. |
| `moisture_balance` | drying and aeration | Mass and moisture fraction | kg and % wet basis unless declared otherwise | Reconcile inlet dry matter, outlet dry matter, water removed, downgraded grain and rejects for each lot. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A declared field prepared for the chickpea crop cycle, with prior land use, soil condition, preceding crop and seed origin identified |
| starting_condition_role | Starting condition for managed biological production; burdens of purchased seed, products, energy and services enter through upstream datasets |
| product_classification_scope | Mature dry chickpea grain represented by CPC 3.0 `01703`; green chickpeas, seed commodities and processed fractions remain outside this product category |
| recursive_input_rule | Chickpea grain retained as planting seed is recorded as a seed input from a preceding crop or external supplier and is not recursively modelled as the current crop's reference output |
| upstream_dataset_requirement | Use geographically and technologically appropriate upstream datasets for concrete seed, nutrient products, crop-protection products, water supply, energy carriers and contracted services |
| disclosure | Declare prior crop and land-use context, field and crop year, market class, rainfed or irrigated route, establishment and management operations, harvest route, conditioning sequence, stabilization route, lot hand-offs and all output destinations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | all foreground nodes | Include crop establishment and management, independent harvest/threshing, farm cleaning and grading, and conditional stabilization through the accepted farm-gate hand-off. | `ndsu-pulse-field-guide-2025`; `saskatchewan-chickpea-harvest`; `fao-postharvest-system` |
| `boundary_output_states` | harvest, conditioning and stabilization | Distinguish accepted grain, downgraded grain, rework, collected straw or pods, field-returned residue, shatter or dropped loss, foreign-material rejects and discarded material; record one hand-off and destination for each state. | `saskatchewan-chickpea-harvest`; `cgc-chickpea-grading` |
| `boundary_route_delta` | alternative routes | Rainfed and irrigated fields, straight cutting and swathing, and ambient aeration and heated drying must carry the route-specific records described in section 2; resolve mutually exclusive choices per field, harvest event or lot. | `saskatchewan-chickpea-harvest`; `ndsu-pulse-field-guide-2025` |
| `boundary_exclusions` | downstream activities | Exclude transport beyond the farm gate and industrial sizing, dehulling, splitting, milling, canning, cooking and food manufacture. | `fao-postharvest-system` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Managed chickpea field production | `required` | Always included for cultivated dry chickpeas. | foreground biological production with documented technology delta | 1 ha crop cycle |
| `harvest_threshing` | Harvest, threshing and field capture | `required` | Included as a distinct hand-off from standing mature crop to harvested bulk grain. | foreground harvest capture with alternative technology route delta | harvested bulk grain leaving the node |
| `cleaning_grading` | Farm cleaning, grading and routing | `required` | Included before the farm-gate product hand-off. | primary conditioning and grading | accepted plus downgraded and rejected incoming grain |
| `drying_stabilization` | Conditional aeration or low-temperature drying | `conditional` | Include when accepted grain is above the declared safe hand-off moisture or requires cooling or aeration. | preservation and stabilization | stabilized dry chickpea grain leaving the node |

Production mode is indexed by field and crop cycle for biological production, by field and harvest event for harvest, and by lot plus batch, campaign or continuous operating period for conditioning and stabilization. Cleaning, changeover and shared-run records are assigned once to the corresponding lots.

### Process: Managed chickpea field production (`field_production`)

#### Inputs

##### Product flows

###### Chickpea planting seed (`planting_seed`)

Seed retained or purchased for crop establishment; treated seed identity is retained and is never counted as the farm-gate food product.

- Selected flow: Chickpea planting seed
- Flow property / unit: Mass / kg
- Amount rule: measured seed delivered to the field
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per ha of planted chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_field_materials`
- Sources:
- Range: Provisional seeding-mass screen
  - Range role: `qa_guardrail`
  - Lower: 20
  - Upper: 350
  - Unit: kg/ha planted crop
  - Basis: per ha of planted chickpea in one crop cycle
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`
  - Sources:

###### Agricultural nutrient and fertilizer inputs (`agricultural_nutrients`)

Record all mineral fertilizers, organic fertilizers and nutrient-bearing amendments in this one card. Preserve each actual product identity, quantity, formulation, nutrient composition and application event; do not count compound or organic products twice.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5 and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: collect each actual product once and calculate nutrient quantities without duplication; expand to concrete verified product UUIDs during dataset generation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per ha of planted chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nutrient_inputs`
- Sources: `saskatchewan-chickpea-fertilization`
- Range: Provisional total applied-product screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg product/ha crop cycle
  - Basis: sum of actual nutrient-product masses per ha of planted chickpea; liquid products remain separately reported in native volume
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`
  - Sources:

###### Crop protection and inoculation products (`crop_protection_inputs`)

Record formulated pesticides, seed treatments, desiccants and rhizobial inoculants actually applied, preserving product identity, active ingredient and treated area.

- Selected flow: Crop protection and inoculation products
- Flow property / unit: Mass or volume / kg or L formulated product
- Amount rule: measured formulated product applied
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per ha of treated chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_field_materials`
- Sources: `ndsu-pulse-field-guide-2025`
- Range: Provisional formulated-product screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg or L formulated product/ha crop cycle
  - Basis: sum of formulated products per treated ha; actual products remain separately reported
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`
  - Sources:

###### Irrigation water supplied (`irrigation_water`)

Record only water deliberately supplied to the crop; rainfall and residual soil moisture are disclosed but are not technosphere inputs.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated irrigation water delivered to the field
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per ha of planted chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_irrigation`
- Sources:
- Range: Provisional irrigation-volume screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: m3/ha crop cycle
  - Basis: deliberately supplied irrigation water per planted ha; zero applies to rainfed fields
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`
  - Sources:

###### Field machinery energy carriers (`field_energy`)

Record each actual fuel, electricity or contracted energy service used for tillage, sowing, spraying, irrigation and other field operations; avoid double counting contractor fuel and service records.

- Selected flow: Field machinery energy carriers
- Flow property / unit: Carrier-specific unit / L, kg, kWh or MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured purchases, meter readings or contractor records allocated to the field
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per ha of planted chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_field_energy`
- Sources:
- Range: Provisional energy-carrier screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 30000
  - Unit: MJ/ha crop cycle
  - Basis: sum of carrier energy converted to MJ per planted ha; zero is allowed for a carrier not used
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`
  - Sources:


##### Elementary flows

###### Managed cropland occupation (`land_occupation`)

Record the occupied field area and crop-cycle duration for the managed chickpea crop; land transformation is reported separately when it occurs.

- Selected flow: Cropland occupation by location and land-use class
- Flow property / unit: Area-time / ha crop cycle
- Amount rule: occupied planted area multiplied by the declared crop-cycle fraction
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per ha of planted chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_area`
- Sources:
- Range: Area-basis identity
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: ha crop cycle/ha crop cycle
  - Basis: one occupied hectare-cycle per hectare-cycle used as the process quantitative reference
  - Basis kind: `crop_cycle`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`


#### Outputs

##### Product flows

###### Mature standing chickpea crop ready for harvest (`mature_standing_crop`)

Record mature desi or kabuli crop at the field-production hand-off before cutting or combining, with expected recoverable grain distinguished from vegetative biomass.

- Selected flow: Mature standing chickpea crop
- Flow property / unit: Recoverable grain mass / kg
- Amount rule: measured harvested grain plus measured or estimated harvest losses, reconciled to field area
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per ha harvested chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `saskatchewan-chickpea-harvest`; `fao-ecocrop-chickpea`
- Range: Published regional yield envelope
  - Range role: `typical_range`
  - Lower: 350
  - Upper: 2690
  - Unit: kg recoverable grain/ha harvested crop
  - Basis: recoverable mature grain per harvested ha; regional examples are a QA prior, not a universal conformity limit
  - Basis kind: `crop_cycle`
  - Evidence kind: `external_source`
  - Sources: `saskatchewan-chickpea-harvest`; `fao-ecocrop-chickpea`


##### Elementary flows

###### Direct field emissions by substance and receiving medium (`direct_field_emissions`)

Report each measured or calculated emission as a separate concrete elementary exchange, including managed-soil nitrogen emissions and emissions from fuel use when they fall inside the foreground boundary.

- Selected flow: Reported substance to air, water or soil
- Flow property / unit: Substance-specific mass / kg
- Amount rule: calculate from collected activity data using the declared method and factors
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per ha of planted chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional substance-mass screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg reported substance/ha crop cycle
  - Basis: each substance and receiving medium is screened separately; the interval is provisional
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`
  - Sources:

### Process: Harvest, threshing and field capture (`harvest_threshing`)

#### Inputs

##### Product flows

###### Mature standing crop received for harvest (`standing_crop_input`)

Receive the field-production hand-off once; link the same field and crop cycle so the biological production output is not duplicated.

- Selected flow: Mature standing chickpea crop
- Flow property / unit: Recoverable grain mass / kg
- Amount rule: linked output from field production
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per ha harvested chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `saskatchewan-chickpea-harvest`
- Range: Input-output linkage screen
  - Range role: `qa_guardrail`
  - Lower: 350
  - Upper: 2690
  - Unit: kg recoverable grain/ha harvested crop
  - Basis: same regional recoverable-grain envelope as the linked field-production output
  - Basis kind: `crop_cycle`
  - Evidence kind: `external_source`
  - Sources: `saskatchewan-chickpea-harvest`; `fao-ecocrop-chickpea`

###### Harvest and threshing energy carriers (`harvest_energy`)

Record actual energy carriers used by straight cutting, swathing, combining and threshing, assigning each event to the field, run or campaign.

- Selected flow: Harvest and threshing energy carriers
- Flow property / unit: Carrier-specific unit / L, kg, kWh or MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier use or contractor records
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per ha harvested chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_energy`
- Sources:
- Range: Provisional harvest-energy screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/ha harvested crop
  - Basis: sum of carrier energy converted to MJ per harvested ha
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`
  - Sources:


#### Outputs

##### Product flows

###### Harvested and threshed bulk chickpea grain (`harvested_bulk_grain`)

Record this intended output as uncleaned bulk grain at the combine or threshing hand-off, including declared moisture, foreign material, cracked seed and immature green seed before farm cleaning.

- Selected flow: Harvested bulk chickpea grain, uncleaned
- Flow property / unit: Mass / kg
- Amount rule: weighed harvested bulk grain corrected only when a declared moisture conversion is applied
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg recoverable mature grain entering harvest
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `saskatchewan-chickpea-harvest`
- Range: Harvest recovery mass-balance screen
  - Range role: `qa_guardrail`
  - Lower: 0.80
  - Upper: 1.00
  - Unit: kg harvested bulk grain/kg recoverable mature grain
  - Basis: harvested bulk output divided by recoverable mature grain entering harvest
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`
  - Sources:

###### Collected straw and pod residue with declared destination (`crop_residue_route`)

Record straw and pod material as an intended co-product output only when it is deliberately collected for a declared use or sale; otherwise retain it as field residue or loss without assigning co-product status.

- Selected flow: Collected chickpea straw and pod residues
- Flow property / unit: Dry mass / kg
- Amount rule: measured collected dry matter by destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per ha harvested chickpea in one crop cycle
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_mass_balance`
- Sources:
- Range: Provisional collected-residue screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg dry matter/ha harvested crop
  - Basis: collected straw and pod dry matter per harvested ha; zero applies when residues remain on the field
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`
  - Sources:


##### Waste flows

###### Shatter, dropped pods and unrecovered grain (`harvest_losses`)

Record unrecovered grain and pods by field and harvest event. Material returned to the field is not accepted product and its nutrient return remains linked to the field-emission calculation.

- Selected flow: Unrecovered chickpea grain and pods
- Flow property / unit: Mass / kg
- Amount rule: difference between recoverable mature grain and harvested bulk grain after reconciling measurement uncertainty
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg recoverable mature grain entering harvest
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `saskatchewan-chickpea-harvest`
- Range: Provisional harvest-loss screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.20
  - Unit: kg loss/kg recoverable mature grain
  - Basis: unrecovered grain and pods divided by recoverable mature grain entering harvest
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`
  - Sources:

### Process: Farm cleaning, grading and routing (`cleaning_grading`)

#### Inputs

##### Product flows

###### Harvested bulk grain received for conditioning (`bulk_grain_input`)

Receive the uncleaned harvest output by lot, preserving moisture, foreign material, damage, green-seed and class observations.

- Selected flow: Harvested bulk chickpea grain, uncleaned
- Flow property / unit: Mass / kg
- Amount rule: weighed incoming lot mass
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg incoming harvested bulk grain
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grade_mass_balance`
- Sources: `cgc-chickpea-grading`
- Range: Incoming-lot identity screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg incoming grain/kg reported incoming grain
  - Basis: measured incoming mass divided by the same reported lot mass
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

###### Cleaning and grading energy carriers (`conditioning_energy`)

Record electricity, fuel or contracted service used for farm cleaning, sieving, aspiration, grading and handling, linked to each lot or operating period.

- Selected flow: Cleaning and grading energy carriers
- Flow property / unit: Carrier-specific unit / kWh, L, kg or MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered energy or allocated operating records
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1,000 kg incoming harvested bulk grain
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_energy`
- Sources: `fao-grain-cleaning`
- Range: Provisional conditioning-energy screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kWh-equivalent/1,000 kg incoming grain
  - Basis: sum of converted energy carriers per 1,000 kg incoming grain
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`
  - Sources:


#### Outputs

##### Product flows

###### Accepted dry chickpea grain at farm gate (`accepted_dry_chickpeas`)

Record mature unprocessed desi or kabuli grain meeting the declared moisture, grade, damage, foreign-material and destination specification. This is the reference product when no drying node follows.

- Selected flow: Chick peas, dry `c509fe95-d4ab-4db9-b593-f6329aef8dbd`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: weighed accepted output at declared moisture and grade
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1,000 kg accepted dry chickpeas at farm gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grade_mass_balance`
- Sources: `cgc-chickpea-grading`; `cgc-chickpea-moisture`
- Range: Reference-flow identity
  - Range role: `qa_guardrail`
  - Lower: 1000
  - Upper: 1000
  - Unit: kg accepted dry chickpeas/1,000 kg reference product
  - Basis: accepted product mass at the declared farm-gate hand-off
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

###### Downgraded broken, green, damaged or off-grade grain (`downgraded_grain`)

Record each downgraded state separately by reason and destination. Material sold into another market is an intended output only when that destination and price are documented.

- Selected flow: Downgraded chickpea grain by declared state
- Flow property / unit: Mass / kg
- Amount rule: weighed downgraded output by state and destination
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per kg incoming harvested bulk grain
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grade_mass_balance`
- Sources: `cgc-chickpea-grade-tables`
- Range: Grade-state routing screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.20
  - Unit: kg downgraded grain/kg incoming grain
  - Basis: sum of downgraded grain states divided by incoming grain mass; actual grade tolerances remain separately declared
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`
  - Sources:

###### Grain returned for re-cleaning or re-grading (`rework_return`)

Link returned material to the producing lot and the specific rework pass. Count it once in the lot mass balance and exclude it from accepted output until the rework decision is complete.

- Selected flow: Chickpea grain routed to rework
- Flow property / unit: Mass / kg
- Amount rule: weighed mass entering each rework loop
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg incoming harvested bulk grain per conditioning pass
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grade_mass_balance`
- Sources:
- Range: Provisional rework-loop screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.30
  - Unit: kg rework/kg incoming grain per pass
  - Basis: grain returned to rework divided by incoming mass for that pass
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`
  - Sources:


##### Waste flows

###### Foreign material and non-recoverable cleaning rejects (`cleaning_rejects`)

Record soil, stones, plant debris and non-recoverable grain material removed during cleaning, with its actual treatment or disposal destination.

- Selected flow: Cleaning rejects by physical identity and destination
- Flow property / unit: Mass / kg
- Amount rule: weighed reject output by category and destination
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg incoming harvested bulk grain
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grade_mass_balance`
- Sources: `fao-grain-cleaning`; `cgc-chickpea-grading`
- Range: Provisional cleaning-reject screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.20
  - Unit: kg rejects/kg incoming grain
  - Basis: sum of non-recoverable rejects divided by incoming grain mass
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`
  - Sources:

### Process: Conditional aeration or low-temperature drying (`drying_stabilization`)

#### Inputs

##### Product flows

###### Accepted grain requiring stabilization (`moist_grain_input`)

Receive only lots whose declared moisture or temperature requires aeration, cooling or drying; retain the upstream grade and lot identity.

- Selected flow: Accepted chickpea grain before stabilization
- Flow property / unit: Mass / kg
- Amount rule: weighed incoming lot at measured moisture
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg stabilized dry chickpeas output
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drying_mass_balance`
- Sources: `saskatchewan-chickpea-harvest`; `cgc-chickpea-moisture`
- Range: Moisture-correction input screen
  - Range role: `qa_guardrail`
  - Lower: 1000
  - Upper: 1054
  - Unit: kg incoming grain/1,000 kg stabilized output
  - Basis: incoming grain at up to 18% moisture corrected to 14% moisture, before dry-matter rejects
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `saskatchewan-chickpea-harvest`; `mass-balance-identity`

###### Aeration, cooling and drying energy carriers (`drying_energy`)

Record each actual electricity, fuel or heat carrier used for the lot and distinguish ambient aeration from supplemental heated drying.

- Selected flow: Drying and aeration energy carriers
- Flow property / unit: Carrier-specific unit / kWh, L, kg or MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered carrier use assigned to the stabilized lot
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per 1,000 kg stabilized dry chickpeas output
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drying_energy`
- Sources: `saskatchewan-chickpea-harvest`; `fao-grain-drying`
- Range: Provisional stabilization-energy screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 2000
  - Unit: kWh-equivalent/1,000 kg stabilized output
  - Basis: sum of converted energy carriers; zero applies when no stabilization node is active
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`
  - Sources:


#### Outputs

##### Product flows

###### Stabilized dry chickpea grain at farm gate (`stabilized_dry_chickpeas`)

Record cooled or dried mature desi or kabuli grain at the final farm-gate hand-off, retaining moisture, grade, size class where relevant and drying temperature history.

- Selected flow: Chick peas, dry `c509fe95-d4ab-4db9-b593-f6329aef8dbd`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: weighed stabilized output at declared moisture and grade
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1,000 kg stabilized dry chickpeas at farm gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drying_mass_balance`
- Sources: `saskatchewan-chickpea-harvest`; `cgc-chickpea-moisture`
- Range: Reference-flow identity
  - Range role: `qa_guardrail`
  - Lower: 1000
  - Upper: 1000
  - Unit: kg stabilized dry chickpeas/1,000 kg reference product
  - Basis: stabilized product mass at the declared farm-gate hand-off
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

###### Heat-damaged, cracked or otherwise downgraded grain (`drying_downgrade`)

Record any product retained for a lower-value destination after stabilization by defect and destination; exclude it from the accepted reference output.

- Selected flow: Downgraded chickpea grain after stabilization
- Flow property / unit: Mass / kg
- Amount rule: weighed downgraded output by defect and destination
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per kg grain entering stabilization
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drying_mass_balance`
- Sources: `saskatchewan-chickpea-harvest`
- Range: Provisional drying-downgrade screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.10
  - Unit: kg downgraded grain/kg incoming grain
  - Basis: downgraded output divided by grain entering stabilization
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`
  - Sources:


##### Elementary flows

###### Water removed from grain to air (`removed_moisture`)

Calculate water removed from measured inlet and outlet masses and moisture fractions. Do not treat this water as product yield or unexplained mass loss.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: inlet water mass minus outlet water mass after dry-matter reconciliation
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1,000 kg stabilized dry chickpeas output
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_drying_mass_balance`
- Sources: `mass-balance-identity`
- Range: Moisture-removal physical screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 54
  - Unit: kg water/1,000 kg stabilized output
  - Basis: water removed when grain enters at 14% to 18% moisture and leaves at 14% moisture, before dry-matter rejects
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `saskatchewan-chickpea-harvest`; `mass-balance-identity`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | all multi-output nodes | Subdivide directly measured field, harvest, conditioning and stabilization operations before allocation. Assign lot-specific rework and reject burdens to the producing lot. | `iso-14044-allocation` |
| `allocation_residue_status` | straw, pods and downgraded grain | Classify a flow as an intended co-product only when deliberate collection, a documented destination and an economic or physical function are demonstrated. Field-returned biomass, shatter and discarded rejects are residues or losses and receive no product credit. | `iso-14044-allocation`; `saskatchewan-chickpea-harvest` |
| `allocation_remaining_burdens` | chickpea grain and intended co-products | When subdivision cannot resolve shared burdens, apply one declared allocation method consistently to all intended outputs. Prefer documented economic allocation at the first independent hand-off; report quantities, prices, reference period and sensitivity to a mass allocation. | `iso-14044-allocation` |
| `allocation_run_integrity` | batches, campaigns and rework loops | Assign shared cleaning, start-up and changeover burdens once across affected lots; a rework pass retains its burdens and material linkage, and rejected material is never counted as accepted output. This is single-period attribution and shared burdens do not cross the crop-cycle boundary. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_materials` | `field_production` | seed and crop-protection products | invoices, application logs and field records | product identity; formulation; active ingredient; quantity; treated area; date; field | reconcile purchase, stock and application records | native product unit and ha | each application | full crop cycle | every included field | sum by product and field, then normalize to planted area | invoice, calibration and application log |
| `cp_nutrient_inputs` | `field_production` | all mineral, organic and amendment nutrient products | application and composition records | product identity; mass or volume; density; N, P or P2O5, K or K2O content; organic matter; field; date | record each product once and retain laboratory or supplier composition | kg or m3 product and kg nutrient | each application | full crop cycle | every included field | aggregate actual products without double counting; derive nutrient masses from retained composition | supplier analysis, laboratory result and application log |
| `cp_irrigation` | `field_production` | deliberately supplied water | meter, pump or scheduling record | delivered volume; field; source; pumping energy; date | meter preferred; otherwise documented flow-rate-times-duration calculation | m3 | each event | full crop cycle | each irrigated field | sum delivered water by field | meter record or pump calculation |
| `cp_field_energy` | `field_production` | field energy carriers | fuel, meter and contractor records | carrier; quantity; operation; field; date; contractor inclusion | reconcile on-farm and contractor records | carrier native unit | each operation | full crop cycle | every included field | sum once by carrier and allocate to fields using operation records | invoice, meter, machine or contractor log |
| `cp_field_area` | `field_production` | land occupation | geospatial and field records | planted area; crop dates; land-use class; prior crop | verified field boundary and crop record | ha and days | once per crop cycle | full crop cycle | every included field | area multiplied by occupied fraction of crop cycle | map and field register |
| `cp_field_emissions` | `field_production` | direct elementary emissions | activity data and calculation workbook | nutrient quantities; residue N; lime; urea; fuel; irrigation; soil and climate parameters; factor source | apply declared method to collected activity data | kg substance | each relevant event and annual calculation | full crop cycle | every included field | calculate by substance and receiving medium; preserve factor version | calculation workbook and factor citation |
| `cp_harvest_energy` | `harvest_threshing` | harvest energy carriers | machine, fuel and contractor records | route; carrier; quantity; field; date; run | reconcile machine or contractor record to harvest event | carrier native unit | each event | harvest period | every included field | sum once by field and harvest route | machine or contractor log |
| `cp_harvest_mass_balance` | `field_production`; `harvest_threshing` | recoverable crop, harvested bulk, residues and loss | weighbridge, yield monitor and field-loss observations | field; area; bulk mass; moisture; collected residue; pre- and post-harvest loss estimate | calibrated weighing plus documented field sampling | kg and kg/ha | each field and harvest event | harvest period | every included field | reconcile recoverable grain to harvested bulk and losses | calibration, sample record and reconciliation |
| `cp_conditioning_energy` | `cleaning_grading` | cleaning and grading energy | meter, runtime and fuel records | carrier; meter values; runtime; lot; shared period | meter preferred; allocate shared period by documented driver | carrier native unit | each lot or operating period | conditioning period | every included facility | assign shared energy once across lots | meter and allocation record |
| `cp_grade_mass_balance` | `cleaning_grading` | incoming, accepted, downgraded, rework and rejects | lot weights and representative grade samples | lot; inlet mass; moisture; class; damage; green; foreign material; size; each output mass and destination | calibrated weighing and representative sampling | kg and % by mass | each lot and rework pass | conditioning period | every included facility | inlet equals accepted, downgraded, rejects and reconciled loss; rework counted once per pass | scale calibration, sample chain and balance closure |
| `cp_drying_energy` | `drying_stabilization` | aeration and drying energy | meter, fuel and dryer logs | carrier; quantity; inlet and outlet time; temperature; airflow; lot | meter or reconciled fuel delivery | carrier native unit | each lot or drying period | stabilization period | every active facility | assign energy to lot or documented shared period | meter, fuel and dryer log |
| `cp_drying_mass_balance` | `drying_stabilization` | moist inlet, stabilized output, removed water and downgrade | lot weights and moisture tests | inlet and outlet mass; inlet and outlet moisture; temperature; downgrade mass; destination | calibrated scales and representative moisture tests | kg and % wet basis | each lot | stabilization period | every active facility | conserve dry matter and calculate removed water | scale and moisture-meter calibration plus reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | moisture conversion | dry matter = as-received mass × (1 − moisture fraction); converted mass = dry matter ÷ (1 − target moisture fraction) | inlet mass; inlet moisture; target moisture | moisture-corrected mass and water removed | `mass-balance-identity` |
| `calc_field_yield` | field and harvest nodes | harvested and lost recoverable grain divided by harvested field area; retain measured moisture | harvested bulk; measured losses; field area | kg recoverable grain/ha | `mass-balance-identity` |
| `calc_grade_balance` | conditioning node | incoming mass = accepted + downgraded + non-recoverable rejects + unresolved measurement difference; rework is an internal loop and is not added as a second final output | lot input and all output-state weights | closed lot balance and unexplained difference | `mass-balance-identity` |
| `calc_managed_soil_emissions` | field emissions | calculate direct and relevant indirect managed-soil emissions from collected nutrient and residue activity data using the declared IPCC tier or justified regional method | applied N; residue N; volatilization or leaching activity data; factors | substance-specific elementary emissions | `ipcc-2019-managed-soils` |
| `calc_allocation` | intended multi-output nodes | allocate only residual shared burdens after subdivision using the declared method and one complete output set | output quantities; prices or physical driver; shared burden | attributed burden by intended output | `iso-14044-allocation` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and lots | Preserve desi or kabuli class, cultivar where material, crop year, origin field, lot, moisture basis, grade or destination and final hand-off. | lot register, sample and delivery record |
| `dq_completeness` | all nodes | Cover all included fields and lots and reconcile at least 95% of material and energy records by the declared collection method; disclose exclusions and unresolved differences. | completeness matrix and reconciliation workbook |
| `dq_temporal` | foreground package | Use records from the represented crop cycle and associated post-harvest period; disclose any proxy year and reason. | dated field, harvest and lot records |
| `dq_route` | alternative routes | Record rainfed or irrigated, direct-cut or swathed, conditioning equipment, and aeration or heated-drying route for every affected field or lot. | operation and equipment logs |
| `dq_grade_moisture` | accepted and downgraded outputs | Use representative sampling and calibrated moisture and mass measurements; preserve the denominator used for defect fractions. | calibration, sample chain and test result |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require the verified product, Mass property and Mass unit-group UUIDs, plus every required qualifier. | `cgc-chickpea-grading`; `cgc-chickpea-moisture` |
| `validate_nutrient_cardinality` | each process | Permit at most one consolidated mineral-fertilizer, organic-fertilizer and nutrient-amendment Product-input card per process; it must bind only to `flow-set.agricultural-nutrient-supply` version `0.3.0` without a group. |  |
| `validate_route_resolution` | field, harvest and stabilization routes | Resolve rainfed versus irrigated per field, straight-cut versus swathed per harvest event, and inactive versus aerated or heated-dried per lot; collect every claimed route delta. | `saskatchewan-chickpea-harvest`; `ndsu-pulse-field-guide-2025` |
| `validate_output_handoffs` | all product and reject states | Require one physical state, classification and destination for accepted, downgraded, rework, collected residue, field loss and waste outputs; no output may be counted at two hand-offs. | `cgc-chickpea-grading`; `mass-balance-identity` |
| `validate_rework` | conditioning and stabilization | Link every rework pass to its source lot, retain its added burdens, and exclude unresolved rework or rejects from accepted output. | `mass-balance-identity` |
| `validate_batch_attribution` | conditioning and stabilization | Index inputs, outputs, cleaning and changeover by lot or operating period and assign shared-run burdens once. | `mass-balance-identity` |
| `validate_mass_balance` | harvest, conditioning and drying | Reconcile measured inputs to accepted, downgraded, residue, reject, water-removal and loss outputs; investigate and disclose any difference above 5% of the node input. | `mass-balance-identity` |
| `validate_moisture_temperature` | accepted and stabilized grain | Declare moisture; flag lots above the declared safe hand-off specification; for supplemental heated drying, require recorded grain temperature and flag values at or above 45 °C for review. | `saskatchewan-chickpea-harvest`; `cgc-chickpea-moisture` |
| `validate_range_completeness` | every flow card | Require exactly one complete range with role, bounds, unit, denominator or basis, basis kind, evidence kind and source-id list; provisional screens do not replace foreground records. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dry-chickpea production data package and farm-gate process dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and UUID resolution |
| allowed_use | Crop-production inventories and lifecycle models requiring mature dry unprocessed chickpeas at the farm gate within the declared geography, year, route, class, moisture and grade |
| excluded_use | Green chickpeas, planting seed commodities, processed chickpea fractions or foods, and industrial post-farm-gate operations |
| required_metadata | PCR id and version; geography; crop year; desi or kabuli; cultivar where material; field area; prior crop; rainfed or irrigated; harvest route; lot and grade; moisture basis; conditioning and stabilization route; allocation method; concrete exchange UUIDs |
| required_quality_disclosure | Coverage and completeness; measurement and sampling methods; calibration; route-specific proxies; mass-balance closure; range-screen exceptions; unresolved flow identities; source and factor versions; allocation sensitivity |
| update_trigger | Material change in product boundary, platform UUID identity, flow-set contract, agronomic or post-harvest route, grade or moisture specification, emission method, allocation evidence, or representative foreground records |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `saskatchewan-chickpea-harvest` | `official_guidance` | Government of Saskatchewan, Chickpea Harvesting Considerations, https://www.saskatchewan.ca/business/agriculture-natural-resources-and-industry/agribusiness-farmers-and-ranchers/crops-and-irrigation/field-crops/pulse-crop-bean-chickpea-faba-bean-lentils/chickpea/harvesting, retrieved 2026-09-20 | desi and kabuli yield examples; straight cutting and swathing; harvest moisture; shatter and green-seed risks; safe moisture; grading and drying-temperature guidance |
| `saskatchewan-chickpea-fertilization` | `official_guidance` | Government of Saskatchewan, Chickpea Fertilizer Considerations, https://www.saskatchewan.ca/business/agriculture-natural-resources-and-industry/agribusiness-farmers-and-ranchers/crops-and-irrigation/field-crops/pulse-crop-bean-chickpea-faba-bean-lentils/chickpea/fertilizer-considerations, retrieved 2026-09-20 | chickpea nutrient-management roles and product-composition records |
| `ndsu-pulse-field-guide-2025` | `extension_guidance` | NDSU Extension, Pulse Crop Production Field Guide for North Dakota, A1922, https://www.ndsu.edu/agriculture/sites/default/files/2025-09/a1922.pdf, retrieved 2026-09-20 | chickpea production, harvest, damage, moisture, handling and storage route evidence |
| `cgc-chickpea-grading` | `standard` | Canadian Grain Commission, Official Grain Grading Guide, Chapter 22: Chickpeas, https://www.grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/22-chickpeas/grading.html, retrieved 2026-09-20 | classes, representative samples, grading states and defect definitions |
| `cgc-chickpea-grade-tables` | `standard` | Canadian Grain Commission, Chickpeas primary and export grade determination tables, https://www.grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/22-chickpeas/primary-export-grade-determination-tables.html, retrieved 2026-09-20 | damage, mechanical damage, green seed and foreign-material grade thresholds |
| `cgc-chickpea-moisture` | `standard` | Canadian Grain Commission, Moisture specifications, https://grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/02-moisture-testing/moisture-specifications.html, retrieved 2026-09-20 | straight, tough and damp chickpea moisture states |
| `fao-ecocrop-chickpea` | `dataset` | FAO EcoCrop, Cicer arietinum crop record, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=2479, retrieved 2026-09-20 | rainfed African yield example and product biology context |
| `fao-postharvest-system` | `handbook` | FAO, Post-harvest system and food losses, https://www.fao.org/4/ac301e/AC301e03.htm, retrieved 2026-09-20 | separation of harvesting, threshing, cleaning, drying and storage responsibilities |
| `fao-grain-cleaning` | `handbook` | FAO, Agricultural engineering in development: Grain cleaning and insecticide treatments, https://www.fao.org/4/t0522e/t0522e0b.htm, retrieved 2026-09-20 | cleaning inputs, impurity separation and prepared output state |
| `fao-grain-drying` | `handbook` | FAO, Agricultural engineering in development: Drying, https://www.fao.org/4/t0522e/T0522E08.htm, retrieved 2026-09-20 | drying as a bounded stabilization responsibility |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O and lime or urea CO2 calculation scope and factors |
| `iso-14044-allocation` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including current amendments | subdivision and allocation hierarchy |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass identity applied to measured process inputs, outputs, moisture and losses | deterministic mass, moisture, yield, rework and hand-off reconciliation |
