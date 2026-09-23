---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.alfalfa-for-forage-and-silage
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Alfalfa for forage and silage

## 1. Scope and Applicability

This PCR covers managed perennial production and cutting of alfalfa (*Medicago sativa*) delivered fresh and unprocessed at the farm gate for direct forage use or later silage production. The foreground begins with field preparation for stand establishment, includes establishment-year and established-stand management, and ends when accepted freshly cut biomass is weighed or credibly estimated at farm-gate hand-off.

Ensiling, fermentation, hay field-curing, artificial drying, baling, pelletizing, feed formulation, animal feeding, off-farm transport, and storage after farm-gate hand-off are excluded. Grazed alfalfa, alfalfa seed production, alfalfa meal, hay, silage, and mixed forage whose alfalfa share cannot be separated are excluded products.

Alfalfa is a perennial, nitrogen-fixing forage managed through establishment, repeated regrowth periods and repeated cuts. Rainfed and irrigated routes may coexist as declared alternatives. Conventional, organic, reduced-tillage and differing cutting schedules may also coexist, but route-specific inputs, yields, field emissions and stand persistence shall not be averaged without production-weighted evidence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.alfalfa-for-forage-and-silage |
| classification_refs | CPC 3.0 `01912`, exact path `0 > 01 > 019 > 0191 > 01912` |
| covered_products | freshly cut, unprocessed alfalfa forage at farm gate; fresh alfalfa intended for subsequent ensiling outside this boundary |
| excluded_products | alfalfa hay; silage; dried meal; pellets; seed; grazed biomass; inseparable alfalfa-grass mixtures |
| representative_product | accepted freshly cut alfalfa biomass |
| production_route | managed perennial stand establishment, regrowth management, repeated cutting and fresh farm-gate hand-off |
| market_state | fresh, unprocessed, unbaled biomass at farm gate |

The managed-biological-production parent is perennial field production. Irrigation changes the water-input and pumping-energy requirements relative to rainfed production; reduced tillage, organic management and cutting technology can change field-operation energy, nutrient products, crop protection and loss records. These routes coexist only as separate declared strata. Ensiling and hay manufacture are mutually exclusive with this reference-product route because they change the product state after the farm-gate hand-off.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | accepted freshly cut alfalfa forage at farm gate |
| How much | 1,000 kg fresh mass |
| How well | unensiled, unfermented, undried and unbaled; declared dry-matter fraction and harvest quality basis; foreign material and rejected biomass excluded |
| How long or cycle | one declared production year and its identified cuts, with establishment burdens annualized over the actual stand life |
| reference_flow_link | output of `forage_harvest_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Alfalfa for forage and silage `bff9b03b-b5c0-486e-99f6-0a2ab67d725c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production mix, at farm gate; fresh unprocessed produce; harvest date and cut number; stand age and establishment year; fresh mass and dry-matter fraction; pure alfalfa or declared separable alfalfa share; rainfed or irrigation route |
| Binding | Fixed (`fixed`) |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or calculate fresh mass at farm-gate hand-off; do not substitute hay-equivalent or dry-matter mass. |
| `dry_matter_disclosure` | every accepted cut | mass fraction | kg dry matter/kg fresh matter | Determine from a representative sample or a documented laboratory result and retain the sampling basis. |
| `area_time_basis` | stand establishment and annual production | area and time | ha, stand-year | Record establishment area, production area, stand age, productive stand life and reporting-year fraction separately. |
| `cut_indexing` | harvest and regrowth periods | count and date | cut, date | Assign every accepted output, field operation and loss to a cut or to the whole stand-year. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field before the target alfalfa stand is seeded |
| starting_condition_role | foreground starting condition for stand establishment; prior crop and soil state are disclosed context |
| product_classification_scope | fresh unprocessed alfalfa forage under CPC 3.0 `01912` |
| recursive_input_rule | purchased fresh alfalfa of the same category is not treated as a production input; if blended or resold, model it as a separately traced upstream product and exclude it from on-farm yield |
| upstream_dataset_requirement | use supplier-specific or representative datasets for seed, nutrient products, crop-protection products, water supply and energy carriers selected from foreground records |
| disclosure | field location, stand establishment year, stand age, expected and realized stand life, production year, cut schedule, irrigation route, management route, previous crop, dry-matter method and farm-gate hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_fresh_gate` | reference product | Stop at accepted freshly cut biomass at farm gate; exclude curing, drying, baling, ensiling, fermentation and downstream feed manufacture. | `uc-alfalfa-establishment`; `usda-ars-alfalfa-management-2024` |
| `boundary_establishment` | stand establishment | Include seedbed preparation, seed and inoculation, establishment inputs, field operations and establishment losses; annualize them only across the actual productive output of that stand. | `umn-alfalfa-establishment` |
| `boundary_regrowth_periods` | established stand | Include production-year management and index operations by stand-year and, where attributable, by regrowth period or cut. | `usda-ars-alfalfa-management-2024` |
| `boundary_water_route` | irrigated production | Include supplied irrigation water and pumping energy only when irrigation occurs; rainfed production records zero supplied irrigation water rather than an imputed requirement. | `umn-alfalfa-drought-2024`; `uc-alfalfa-irrigation` |
| `boundary_direct_field_emissions` | managed soil | Include direct and indirect nitrogen-related field emissions and amendment-related carbon dioxide where the relevant inputs or residue-renewal events occur; avoid double counting returned and removed biomass. | `ipcc-2019-managed-soils` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | Perennial stand establishment | required | new stand or replacement stand is established | managed biological production preparation and establishment phase | one hectare established stand and its actual productive life |
| `annual_regrowth_management` | Established-stand regrowth management | required | every productive stand-year | continuous production across a season, divided into attributable regrowth periods; alternative technology and biological route deltas remain separate declared strata | one productive hectare-year and its accepted fresh yield |
| `forage_harvest_handoff` | Repeated cutting and farm-gate hand-off | required | each accepted cut | independent harvest/capture and acceptance node | accepted fresh mass by cut, summed to 1,000 kg reference product |

### Process: Perennial stand establishment (`stand_establishment`)

#### Inputs

##### Product flows

###### Alfalfa seed for sowing (`establishment_seed`)

Record certified or otherwise documented alfalfa seed by pure-live-seed basis. Keep seed-coating mass separate where the tag permits.

- Selected flow: Alfalfa seed for sowing
- Flow property / unit: Mass / kg
- Identity resolution: Unresolved after one initial and one refined search; returned candidates were forage alfalfa, processed alfalfa or another forage species rather than alfalfa seed for sowing.
- Amount rule: measured purchased and used mass, corrected to pure live seed for the seeded area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare newly established stand before stand-life annualization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `umn-alfalfa-establishment`
- Range: Establishment seeding QA range
  - Range role: Typical range (`typical_range`)
  - Lower: 10
  - Upper: 30
  - Unit: kg pure live seed/ha established
  - Basis: per hectare newly established stand
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `umn-alfalfa-establishment`

###### Rhizobium inoculant (`establishment_inoculant`)

Record the inoculant product supplied for seed coating or in-furrow application separately from seed mass; use zero when no inoculant is supplied.

- Selected flow: Rhizobium inoculant `ead26d6b-6270-4b4f-92a9-e81927e6a718`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: measured purchased and applied inoculant product mass for the seeded area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare newly established stand before stand-life annualization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `umn-alfalfa-establishment`
- Range: Provisional inoculant-product QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg inoculant product/ha established
  - Basis: inoculant product supplied per hectare newly established stand
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated agricultural nutrient supply (`establishment_nutrients`)

Record all mineral fertilizers, organic fertilizers, lime and nutrient amendments in this single establishment card, expanded by actual product and nutrient composition in foreground generation. Do not assume mineral nitrogen where effective nodulation is established.

- Selected flow: Agricultural nutrient supply
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measured product mass and nutrient composition applied before or during establishment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare newly established stand before stand-life annualization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `umn-alfalfa-fertilizer`
- Range: Soil-test-driven establishment nutrient-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg nutrient and amendment products/ha established
  - Basis: total consolidated product mass per hectare newly established stand
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Record gross water supplied for germination and establishment by source and event; use zero for a rainfed route.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered delivery or calculated volume from flow rate and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare newly established stand before stand-life annualization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `uc-alfalfa-establishment`
- Range: Provisional establishment-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3/ha established
  - Basis: gross supplied establishment water per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment field energy (`establishment_energy`)

Record fuel, electricity and qualifying energy services for tillage, seedbed preparation, seeding, rolling, amendment application and irrigation pumping.

- Selected flow: Establishment energy carriers and qualifying machinery-energy services
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy converted from measured carrier quantities and electricity records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per hectare newly established stand before stand-life annualization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Sources: `uc-alfalfa-establishment`
- Range: Provisional establishment-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ/ha established
  - Basis: field and pumping energy per hectare newly established stand
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment crop-protection products (`establishment_crop_protection`)

Record each formulated herbicide, fungicide or insect-control product actually applied during establishment; no default treatment is imposed.

- Selected flow: Crop-protection products as applied
- Flow property / unit: Mass / kg
- Identity resolution: Deferred conditional umbrella; foreground records determine the formulated product, and the search returned multiple incompatible or differently scoped pesticide products.
- Amount rule: measured formulated-product mass by application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare newly established stand before stand-life annualization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `uc-alfalfa-establishment`
- Range: Provisional establishment crop-protection screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg formulated product/ha established
  - Basis: all establishment applications per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Land occupation during establishment (`establishment_land_occupation`)

Record occupied agricultural land during the establishment phase without treating it as a Product-flow input.

- Selected flow: Agriculture land occupation `e1d56d4e-afe3-4b92-bd51-0a21f75e50a8`
- Flow property / unit: Area*time `93a60a56-a3c8-21da-a746-0800200c9a66` / ha*a
- Binding: Fixed (`fixed`)
- Amount rule: established area multiplied by establishment-phase duration in years
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare newly established stand before stand-life annualization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Sources:
- Range: Physical establishment land-time range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: ha*a/ha established
  - Basis: establishment duration cannot exceed the first stand-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `area-time-identity`

#### Outputs

##### Product flows

###### Established alfalfa stand transferred to production (`established_stand`)

Transfer the successfully established stand and its attributed establishment burden to subsequent productive stand-years; this is an internal foreground state, not the reference product.

- Selected flow: Established alfalfa stand, internal transfer
- Flow property / unit: Area / ha
- Identity resolution: Internal foreground transfer; no external database UUID is applicable.
- Amount rule: surveyed successfully established area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare seeded area
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `uc-alfalfa-establishment`
- Range: Established-area mass-balance range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: ha established/ha seeded
  - Basis: successfully established fraction of seeded area
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `area-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Established-stand regrowth management (`annual_regrowth_management`)

#### Inputs

##### Product flows

###### Established stand carried into the stand-year (`stand_year_input`)

Record the productive area and stand age carried from establishment or the preceding production year.

- Selected flow: Established alfalfa stand, internal transfer
- Flow property / unit: Area / ha
- Identity resolution: Internal foreground transfer; no external database UUID is applicable.
- Amount rule: productive alfalfa area at the start of the reporting year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive stand-year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_year_records`
- Sources:
- Range: Productive-area consistency range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: ha productive/ha enrolled
  - Basis: productive fraction of enrolled stand area
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `area-balance-identity`

###### Consolidated annual nutrient supply (`annual_nutrients`)

Record all mineral fertilizers, organic fertilizers, lime and nutrient amendments in this single stand-year card. Use soil tests and yield goals; record mineral nitrogen only where field evidence shows a justified need rather than assuming it for a nodulated stand.

- Selected flow: Agricultural nutrient supply
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measured product mass and nutrient composition applied in the reporting stand-year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare-year before yield normalization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_year_records`
- Sources: `umn-alfalfa-fertilizer`
- Range: Soil-test-driven annual nutrient-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg nutrient and amendment products/ha*a
  - Basis: consolidated annual product mass per productive hectare-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Annual irrigation water (`annual_irrigation_water`)

Record gross irrigation delivery by source, event and regrowth period; record zero for rainfed production.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered delivery or calculated volume from flow rate and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare-year before yield normalization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_year_records`
- Sources: `umn-alfalfa-drought-2024`; `usda-ars-alfalfa-irrigation`
- Range: Source-supported seasonal crop-water screen
  - Range role: Typical range (`typical_range`)
  - Lower: 4000
  - Upper: 8000
  - Unit: m3/ha*a
  - Basis: seasonal precipitation plus irrigation-equivalent water use per productive hectare-year; report supplied irrigation separately
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `umn-alfalfa-drought-2024`; `usda-ars-alfalfa-irrigation`

###### Annual field-operation energy (`annual_field_energy`)

Record fuel, electricity and qualifying energy services for irrigation pumping, scouting, nutrient and crop-protection application, and stand maintenance; harvest energy is recorded in the harvest node.

- Selected flow: Stand-management energy carriers and qualifying machinery-energy services
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy converted from carrier, meter and qualifying service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per productive hectare-year before yield normalization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stand_year_records`
- Sources:
- Range: Provisional annual field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: MJ/ha*a
  - Basis: non-harvest field and pumping energy per productive hectare-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Annual crop-protection products (`annual_crop_protection`)

Record each formulated product actually applied by date, active ingredient, treated area and regrowth period.

- Selected flow: Crop-protection products as applied
- Flow property / unit: Mass / kg
- Identity resolution: Deferred conditional umbrella; foreground records determine the formulated product, and the search returned multiple incompatible or differently scoped pesticide products.
- Amount rule: measured formulated-product mass by application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare-year before yield normalization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_year_records`
- Sources: `uc-alfalfa-established-ipm`
- Range: Provisional annual crop-protection screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg formulated product/ha*a
  - Basis: all applications per productive hectare-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Productive agricultural land occupation (`annual_land_occupation`)

Record the occupied productive alfalfa area for the reporting stand-year.

- Selected flow: Agriculture land occupation `e1d56d4e-afe3-4b92-bd51-0a21f75e50a8`
- Flow property / unit: Area*time `93a60a56-a3c8-21da-a746-0800200c9a66` / ha*a
- Binding: Fixed (`fixed`)
- Amount rule: productive area multiplied by reporting-year fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare-year before yield normalization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stand_year_records`
- Sources:
- Range: Physical stand-year land-time range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: ha*a/ha*a enrolled
  - Basis: productive fraction of the reporting hectare-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `area-time-identity`

#### Outputs

##### Product flows

###### Harvest-ready fresh alfalfa biomass (`harvest_ready_biomass`)

Transfer standing biomass accepted for cutting to the harvest node by cut number. This internal state excludes unharvested regrowth and rejected patches.

- Selected flow: Harvest-ready fresh alfalfa biomass, internal transfer
- Flow property / unit: Mass / kg fresh matter
- Identity resolution: Internal foreground transfer; no external database UUID is applicable.
- Amount rule: measured or estimated standing fresh biomass released to each cut
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and identified cut
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cut_records`
- Sources:
- Range: Provisional fresh standing-biomass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg fresh matter/ha per cut
  - Basis: biomass released from one productive hectare to an identified cut
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct and indirect nitrogen field emissions (`managed_soil_n_emissions`)

Calculate nitrogen emissions by species and receiving compartment from actual nitrogen inputs, fixation-related residue renewal and other applicable managed-soil sources; do not use this umbrella as a final unspeciated exchange.

- Selected flow: Nitrogen emission species from managed soils
- Flow property / unit: Mass / kg species
- Identity resolution: Deferred conditional umbrella; the final exchanges must resolve reported N2O, NO, NH3 and nitrate separately by receiving compartment. Searches found compartment-specific candidates for some species, no compatible nitric-oxide candidate, and no single UUID that can represent this card.
- Amount rule: calculate separate N2O, NO, NH3 and nitrate-related exchanges using the selected inventory method and recorded activity data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare-year before yield normalization
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_stand_year_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Nonnegative method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg emitted species/kg relevant N input
  - Basis: species-specific result per kilogram relevant nitrogen input before yield normalization
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2019-managed-soils`

###### Amendment-related carbon dioxide (`amendment_co2`)

Calculate carbon dioxide from urea or carbonate amendment only when the corresponding product was applied.

- Selected flow: Carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO2
- Binding: Fixed (`fixed`)
- Amount rule: selected method factor multiplied by recorded urea or carbonate amendment mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare-year before yield normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_stand_year_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Nonnegative amendment-carbon screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg CO2/kg applicable amendment product
  - Basis: carbon-dioxide result per kilogram applicable amendment before yield normalization
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2019-managed-soils`

### Process: Repeated cutting and farm-gate hand-off (`forage_harvest_handoff`)

#### Inputs

##### Product flows

###### Harvest-ready biomass received from the field (`harvest_biomass_input`)

Record the internal biomass entering each cut and preserve its stand-year and cut identity.

- Selected flow: Harvest-ready fresh alfalfa biomass, internal transfer
- Flow property / unit: Mass / kg fresh matter
- Identity resolution: Internal foreground transfer; no external database UUID is applicable.
- Amount rule: mass released by `harvest_ready_biomass` for the identified cut
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per identified cut
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_records`
- Sources:
- Range: Internal-transfer consistency range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg fresh matter/ha per cut
  - Basis: biomass entering one identified cut
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cutting and collection energy (`harvest_energy`)

Record energy carriers and qualifying machinery-energy services for mowing, chopping where needed only to collect fresh forage, windrow pickup, field loading and movement to the farm-gate hand-off point. Exclude drying, baling and ensiling energy.

- Selected flow: Harvest energy carriers and qualifying machinery-energy services
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: energy converted from carrier, meter and qualifying service records by cut
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_records`
- Sources:
- Range: Provisional fresh-harvest energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ/1,000 kg accepted fresh product
  - Basis: cutting, collection and on-farm movement to the reference gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fresh alfalfa forage (`accepted_fresh_alfalfa`)

This is the sole reference-product output. Sum accepted cut lots only after recording fresh mass, dry-matter fraction and rejection status.

- Selected flow: Alfalfa for forage and silage `bff9b03b-b5c0-486e-99f6-0a2ab67d725c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: exactly 1,000 kg accepted fresh mass after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg fresh matter
  - Basis: one normalized reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-flow-identity`

##### Waste flows

###### Rejected or lost cut biomass (`rejected_cut_biomass`)

Record cut biomass that is rejected, left in-field after cutting, sent to a separately traced recovery destination or discarded. Reworked or downgraded material remains linked to the producing cut and is never counted in accepted output.

- Selected flow: Rejected or lost fresh alfalfa biomass
- Flow property / unit: Mass / kg fresh matter
- Identity resolution: Unresolved after one initial and one refined search; returned Waste-flow candidates were heat, metal/electrical scrap, wood waste, potato rejects or generic kitchen/garden biowaste rather than rejected fresh alfalfa biomass.
- Amount rule: incoming harvest biomass minus accepted fresh output and other measured destinations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cut_records`
- Sources: `umn-alfalfa-harvest-loss`
- Range: Provisional rejected/lost biomass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg fresh biomass/1,000 kg accepted product
  - Basis: rejected and lost fresh biomass relative to accepted fresh output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_establishment_life` | establishment burdens | Attribute establishment inputs, emissions and losses to all accepted fresh output produced over the actual stand life. Use realized stand termination and output where known; disclose any prospective lifetime used for an incomplete stand. Do not allocate the same establishment burden again in later stand-years. | `umn-alfalfa-establishment`; `usda-ars-alfalfa-management-2024` |
| `allocation_stand_year` | annual management burdens | Assign stand-year inputs first to the reporting hectare-year, then divide by accepted fresh output from that year. Do not spread annual inputs across other production years. | `area-time-identity` |
| `allocation_cut` | cut-specific operations | Assign harvest energy, cut-specific irrigation and losses to the identified cut; shared annual operations use a documented physical basis such as area or accepted fresh mass across cuts. | `usda-ars-alfalfa-management-2024` |
| `allocation_rejects` | rejected or downgraded biomass | Keep burdens with the producing stand-year and cut unless an evidenced recovered-product allocation is declared. Exclude rejected biomass from accepted reference output. |  |
| `allocation_no_double_count` | all periods | Establishment, stand-year and cut records carry unique phase and period identifiers; each input, output, loss and field event may enter the normalized result once only. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `stand_establishment` | establishment inputs and successful area | invoices, field-operation logs, seed tags, meter records, soil tests and stand survey | field_id, seeded_area, established_area, seed_mass, pure_live_seed_fraction, inoculant_mass, nutrient_product_mass, nutrient_composition, water_volume, energy_carrier_quantity, operation_date, product_application | reconcile purchase and application records to the target field and survey establishment | stated row units | each event and end-of-establishment survey | entire establishment phase | each target field | sum event quantities; retain product identity; annualize only through `calc_establishment_attribution` | invoices, seed certificates, calibrated meters, soil analyses and dated field logs |
| `cp_stand_year_records` | `annual_regrowth_management` | productive area, management inputs and field emissions | field logs, meter records, invoices, soil and tissue tests, weather and emission-model inputs | field_id, stand_age, productive_area, date, regrowth_period, nutrient_product, nutrient_composition, irrigation_volume, energy_quantity, crop_protection_mass, residue_return, amendment_mass | collect every event against one field, stand-year and where possible one regrowth period | stated row units | each event for a complete production year | complete reporting stand-year | each productive field | sum within stand-year; retain regrowth-period tags; normalize through annual accepted output | complete event log, meter calibration, invoices and method version |
| `cp_cut_records` | `forage_harvest_handoff` | cut input, accepted fresh mass, dry matter, energy and rejects | harvester or scale records, load tickets, fuel records and representative samples | field_id, stand_year, cut_number, harvest_date, incoming_biomass, accepted_fresh_mass, rejected_mass, destination, dry_matter_fraction, energy_quantity | identify every cut and reconcile incoming, accepted and rejected mass | kg, kg/kg, MJ | every cut and load | all cuts in the reporting production year | each target field and farm-gate hand-off | sum accepted loads by cut and year; retain cut-specific rejects and energy; normalize to 1,000 kg accepted fresh mass | calibrated scale or documented yield-estimation method, sample chain and mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_establishment_attribution` | establishment cards | establishment quantity × reporting-year accepted output / accepted output over actual stand life; for a completed stand use realized lifetime output | establishment quantity, stand-year outputs, termination date | establishment burden assigned to reporting output | `area-time-identity` |
| `calc_fresh_normalization` | all cards | attributed row quantity ÷ accepted fresh mass × 1,000 kg | attributed row quantity, accepted fresh mass | row quantity per reference flow | `reference-flow-identity` |
| `calc_energy` | energy cards | sum carrier quantity × declared net-energy conversion; retain carrier identity and do not add service and fuel representations of the same operation | carrier quantities, electricity, conversion factors, operation ids | MJ by process and period |  |
| `calc_cut_mass_balance` | each cut | harvest-ready input = accepted fresh output + rejected/lost biomass + separately traced destinations, within stated measurement uncertainty | incoming biomass, accepted mass, rejected mass, other destinations | reconciled cut mass balance | `mass-balance-identity` |
| `calc_managed_soil_emissions` | nitrogen and amendment emissions | apply the declared inventory-method equations and factors to actual relevant N, urea, lime, residue and renewal activity data; separate species and compartments | recorded activity data, method version and factors | species-specific elementary exchanges | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Confirm fresh, unprocessed, unensiled, undried and unbaled state at farm-gate hand-off. | product description, harvest and dispatch records |
| `dq_period_completeness` | multi-period attribution | Identify establishment phase, every productive stand-year, every included cut, stand termination and any missing records; document prospective lifetime assumptions. | period index and stand history |
| `dq_mass_and_moisture` | accepted output | Use calibrated fresh-mass measurement or a documented field estimate and a representative dry-matter sample for each cut. | calibration, sample and laboratory records |
| `dq_input_completeness` | all processes | Reconcile seed, nutrient products, water, energy and crop-protection records to field area, operation and reporting period. | invoice-to-field reconciliation |
| `dq_route_separation` | alternative routes | Keep rainfed/irrigated, management-system and harvest-technology strata separate unless production-weighted aggregation is demonstrated. | stratum records and weighting calculation |
| `dq_flow_resolution` | parameterized cards | Resolve each generated exchange to one verified Product-flow UUID using actual product, composition, property, unit, geography and provider evidence. | foreground Flow Set selection record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_gate` | reference product | Reject a package that includes ensiling, fermentation, drying, baling or feed manufacture in the reference-product process. |  |
| `validate_stand_periods` | all processes | Require establishment year, stand age, reporting stand-year, cut identifiers, actual or prospective stand life, and termination treatment; reject double attribution across periods. |  |
| `validate_nutrient_consolidation` | each applicable process | Permit at most one consolidated agricultural-nutrient-supply card and no nutrient group binding; require actual products and nutrient composition downstream. |  |
| `validate_n_fixing_crop` | annual nutrient records | Do not accept routine mineral-N input without evidence of the route-specific need; require nodulation or soil/plant evidence when mineral N is reported. | `umn-alfalfa-fertilizer` |
| `validate_cut_balance` | each cut | Require accepted output plus rejects and other destinations to reconcile with harvest-ready input within disclosed measurement uncertainty. | `mass-balance-identity` |
| `validate_irrigation_route` | water card | Require zero supplied irrigation water for rainfed strata and event-linked measured or calculated delivery for irrigated strata. |  |
| `validate_reject_path` | rejected biomass | Require each rejected state to be left in field, recovered, downgraded or discarded with a declared destination; it shall not enter accepted output. |  |
| `validate_route_delta` | alternative routes | Require evidence for any claimed change in topology, inventory, calculation or validation and prevent averaging mutually exclusive post-harvest product states. |  |
| `validate_range_shape` | every flow card | Require exactly one complete Range with role, lower, upper, unit, basis, basis kind, evidence kind and source ids when externally or method supported. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for fresh farm-gate alfalfa forage |
| downstream_use | secondary dataset and background dataset after review |
| allowed_use | crop-production inventories, livestock-feed supply chains and later silage systems that add downstream transformation explicitly |
| excluded_use | direct representation of hay, silage, pellets, meal, grazed forage, seed production or feed manufacturing |
| required_metadata | location, field, establishment year, stand age and life, reporting year, cut schedule, irrigation and management route, accepted fresh mass, dry-matter fraction, reject destinations and reference-gate evidence |
| required_quality_disclosure | record completeness by phase and cut, mass estimation method, dry-matter sampling, route separation, prospective stand-life assumptions, Flow Set selections and emission-method version |
| update_trigger | changed product gate, new route, revised stand-life attribution, changed cutting schedule, material yield or moisture change, new emission method, or newly verified flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `umn-alfalfa-establishment` | extension_guidance | University of Minnesota Extension, “Alfalfa establishment: Management strategies”, https://extension.umn.edu/agriculture/crop-production/forages/alfalfa-establishment-management-strategies | pure-live-seed basis, seed rate, coating/inoculation, establishment nutrients and perennial establishment records |
| `umn-alfalfa-fertilizer` | extension_guidance | University of Minnesota Extension, “Alfalfa fertilizer recommendations”, https://extension.umn.edu/agriculture/crop-production/nutrient-management-for-minnesota-crops/fertilizing-alfalfa | soil-test and yield-goal nutrient decisions, lime timing and limits on routine N fertilizer |
| `uc-alfalfa-establishment` | extension_guidance | UC Statewide IPM Program, “Planting and Establishing a Stand”, https://ipm.ucanr.edu/agriculture/alfalfa/planting-and-establishing-a-stand-stand-establishment/ | establishment operations, irrigation, seedbed and stand acceptance |
| `uc-alfalfa-irrigation` | extension_guidance | UC Statewide IPM Program, “Irrigation and Wheel Traffic Considerations”, https://ipm.ucanr.edu/PMG/C001/m001scirrwheel.html | irrigation timing, field traffic and regrowth management |
| `uc-alfalfa-established-ipm` | extension_guidance | UC Statewide IPM Program, “Integrated Weed Management in Established Alfalfa”, https://ipm.ucanr.edu/agriculture/alfalfa/integrated-weed-management-in-established-alfalfa/ | established-stand management, irrigation timing and crop-protection records |
| `umn-alfalfa-drought-2024` | extension_guidance | University of Minnesota Extension, “Alfalfa during drought”, reviewed 2024, https://extension.umn.edu/agriculture/crop-production/forages/alfalfa-during-drought | crop water-use rate, irrigation scheduling and rainfed/irrigated route separation |
| `umn-alfalfa-harvest-loss` | extension_guidance | University of Minnesota Extension, “Alfalfa scissors cut sampling procedure”, https://extension.umn.edu/agriculture/crop-production/forages/alfalfa-scissors-cut-sampling-procedure | harvest quality sampling and harvest-loss evidence |
| `usda-ars-alfalfa-irrigation` | literature | USDA Agricultural Research Service, “Effect of sprinkler irrigation depth and uniformity on alfalfa yield and quality”, https://www.ars.usda.gov/research/publications/publication/?seqNo115=337586 | seasonal water use, multiple cuts and water-productivity context |
| `usda-ars-alfalfa-management-2024` | dataset | USDA Agricultural Research Service project report 440524, FY2024, https://www.ars.usda.gov/research/project/?accnNo=440524&fy=2024 | perennial stand life, cutting schedules, cut contribution and route-specific management |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O, indirect nitrogen emissions, lime/urea CO2 and forage-renewal residue N |
| `area-time-identity` | method_factor | Physical area-time identity | establishment and stand-year attribution |
| `area-balance-identity` | method_factor | Physical area balance identity | seeded, established and productive area checks |
| `mass-balance-identity` | method_factor | Physical mass-conservation identity | cut mass reconciliation and rejected biomass |
| `reference-flow-identity` | method_factor | PCR normalization identity | exact reference output and normalization |
