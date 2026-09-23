---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peaches-and-nectarines
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Peaches and nectarines

## 1. Scope and Applicability

This PCR covers cultivated peaches and nectarines (Prunus persica) from a bearing orchard through the declared farm-gate or first market hand-off as fresh, marketable fruit.

It includes orchard management, irrigation, nutrient and crop-protection applications, pruning and thinning, harvest, field handling, and on-site sorting, cooling, and packing before hand-off. Nursery production, orchard establishment, post-handoff transport, retail, consumer use, end-of-life treatment, and processed fruit are excluded by default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peaches-and-nectarines |
| classification_refs | CPC 3.0 01345 — Peaches and nectarines |
| covered_products | Fresh cultivated peaches and nectarines, bulk or packed, at the declared first market hand-off |
| excluded_products | Nursery trees; orchard establishment unless annualized; processed fruit; downstream distribution, retail, consumer use, and end-of-life treatment |
| representative_product | 1 kg net marketable fresh peach or nectarine with species, cultivar, maturity/quality grade, production system, geography, and harvest year declared |
| production_route | Managed perennial orchard production → harvest and field handling → optional on-site sorting, cooling, and packing |
| market_state | Fresh, harvested, marketable fruit at the declared hand-off; packaging is excluded from product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One kg of net marketable fresh peaches or nectarines at the declared farm-gate or first market hand-off |
| How much | 1 kg net product output, excluding culls, field losses, process rejects, and packaging |
| How well | Declared species, cultivar, fresh state, harvest maturity, quality/market grade, production system, and product condition |
| How long or cycle | One declared crop cycle and harvest season; disclose reporting period, orchard age, and annualisation convention |
| reference_flow_link | Semantic reference product below; identity is retained for foreground binding |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Marketable fresh peaches or nectarines (semantic candidate) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar; fresh market state; harvest maturity; quality or market grade; production system; production geography; harvest year or crop cycle; declared hand-off; net product-mass basis; on-site sorting/cooling/packing status |
| Binding | omitted: reference product remains unmapped until foreground identity resolution |

When constructing a foreground package, all required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Normalize to net marketable fruit mass; exclude containers, culls, and waste fruit. |
| `water_volume` | irrigation and washing water | Volume | m3 | Convert metered or documented water volume to m3. |
| `nutrient_basis` | fertilizer and amendments | Product mass and nutrient basis | kg product; kg N/P/K | Record actual product and declared or measured nutrient basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Bearing orchard block ready for the declared crop cycle |
| starting_condition_role | Fixes the annual foreground boundary; existing orchard capital and prior establishment are excluded unless annualized |
| product_classification_scope | Cultivated fresh peaches and nectarines from orchard production through the declared hand-off |
| recursive_input_rule | Do not recursively model same-category harvested fruit; a separate packing route records the upstream fruit dataset |
| upstream_dataset_requirement | Use linked background or secondary datasets for purchased inputs and resolve identity and geography |
| disclosure | Declare orchard age, productive area, species/cultivar, irrigation source, production system, crop cycle, yield, loss routes, and on-site conditioning |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_condition` | orchard production | Start at the bearing-orchard crop cycle; exclude establishment and nursery inputs unless annualized and disclosed. | `source_ucanr_peach_nectarine_cultural`; `source_iso_14044` |
| `boundary_management_and_harvest` | orchard and harvest | Include crop management, irrigation, nutrient and crop protection, pruning/thinning, harvest, and field handling. | `source_ucanr_peach_nectarine_cultural`; `source_ucanr_peach_fertilizer` |
| `boundary_optional_packhouse` | on-site conditioning | Include on-site sorting, cooling, and packing only when before hand-off; otherwise disclose downstream. | `source_usda_ams_fresh_fruit_grades` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_management` | Bearing orchard management | required | Every declared crop cycle | Managed biological production | Per crop cycle/per 1 kg net output |
| `harvest_field_handling` | Harvest and field handling | required | All fruit for the declared output | Remove mature fruit and transfer state | Per harvest/per 1 kg net output |
| `onsite_sort_cool_pack` | On-site sorting, cooling, and packing | conditional | When before hand-off | Condition and present market fruit | Per facility run/per 1 kg net output |

### Process: Bearing orchard management (`orchard_management`)

#### Inputs

##### Product flows

###### Irrigation water (`orchard_irrigation_water`)

Supplied irrigation water crosses the orchard boundary as a product input and is distinguished from direct environmental withdrawal.

- Selected flow: Irrigation water supplied for crop production (semantic candidate)
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or supplier-recorded volume assigned to the crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_inputs`
- Sources: `source_ucanr_peach_nectarine_cultural`
- Range: Provisional irrigation screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 600
  - Unit: m3
  - Basis: per 1,000 kg net marketable fruit output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`orchard_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_inputs`
- Sources: `source_ucanr_peach_fertilizer`

###### Orchard machinery fuel (`orchard_machinery_fuel`)

Fuel consumed by tractors, sprayers, mowers, or other mobile orchard machinery is recorded when consumed on site.

- Selected flow: Mobile machinery fuel for orchard operations (semantic candidate)
- Flow property / unit: Fuel energy or mass/volume / MJ, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Fuel issue records or equipment logs assigned to the crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_inputs`
- Sources: `source_ucanr_nectarine_ipm`

##### Waste flows

##### Elementary flows

###### Orchard land occupation (`orchard_land_occupation`)

Record orchard area and occupation duration and allocate them to the declared crop cycle.

- Selected flow: Land occupation by bearing fruit orchard (semantic candidate)
- Flow property / unit: Area-time / m2*a
- Amount rule: Orchard area multiplied by occupation duration and allocated to the crop cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_inputs`
- Sources: `source_ucanr_peach_nectarine_cultural`

#### Outputs

##### Product flows

###### Fruit at harvestable maturity (`fruit_at_harvest_maturity`)

Fruit at the declared harvest maturity leaves orchard management as the gross crop available for harvest.

- Selected flow: Peaches or nectarines at harvestable maturity, gross crop output (semantic candidate)
- Flow property / unit: Mass / kg
- Amount rule: Gross crop mass from orchard and harvest records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `source_usda_ams_fresh_fruit_grades`; `source_ucanr_peach_nectarine_cultural`

##### Waste flows

###### Orchard residues and removed fruit (`orchard_residues`)

Pruning wood, thinned fruit, and other residues are recorded as waste or a separately declared recovery stream.

- Selected flow: Orchard pruning, thinning, and crop residues (semantic candidate)
- Flow property / unit: Mass / kg wet or fresh mass
- Amount rule: Weighed or documented residue mass by crop cycle and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_inputs`
- Sources: `source_ucanr_peach_nectarine_cultural`

##### Elementary flows


### Process: Harvest and field handling (`harvest_field_handling`)

#### Inputs

##### Product flows

###### Harvestable fruit (`harvestable_fruit`)

Gross fruit at declared harvest maturity crosses into harvest and field handling before loss deductions.

- Selected flow: Peaches or nectarines at harvestable maturity for harvest (semantic candidate)
- Flow property / unit: Mass / kg
- Amount rule: Gross fruit mass available to the harvest operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `source_ucanr_peach_nectarine_cultural`

###### Harvest machinery fuel (`harvest_machinery_fuel`)

Fuel consumed by harvest machinery or field transport before hand-off is recorded.

- Selected flow: Mobile machinery fuel for harvest and field handling (semantic candidate)
- Flow property / unit: Fuel energy or mass/volume / MJ, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Fuel log or issue record assigned to the harvest operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `source_ucanr_peach_nectarine_cultural`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested fruit to conditioning (`harvested_fruit`)

Fruit collected by harvest leaves as gross harvested fruit for the next declared process.

- Selected flow: Gross harvested peaches or nectarines for conditioning (semantic candidate)
- Flow property / unit: Mass / kg
- Amount rule: Weighed gross harvested mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `source_ucanr_peach_nectarine_cultural`

##### Waste flows

###### Harvest losses and damaged fruit (`harvest_losses`)

Fruit dropped, damaged, spoiled, or left uncollected during harvest is recorded as waste with its route.

- Selected flow: Harvest loss and damaged peach or nectarine fruit (semantic candidate)
- Flow property / unit: Mass / kg
- Amount rule: Weighed, counted-and-converted, or documented harvest-loss estimate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `source_ucanr_peach_nectarine_cultural`

##### Elementary flows


### Process: On-site sorting, cooling, and packing (`onsite_sort_cool_pack`)

#### Inputs

##### Product flows

###### Gross harvested fruit for conditioning (`gross_fruit_to_packhouse`)

Gross harvested fruit enters this conditional process when sorting, cooling, or packing is included before hand-off.

- Selected flow: Gross harvested peaches or nectarines for on-site conditioning (semantic candidate)
- Flow property / unit: Mass / kg
- Amount rule: Mass received at the included facility or packing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packhouse_records`
- Sources: `source_usda_ams_fresh_fruit_grades`

###### Cooling and packing electricity (`packhouse_electricity`)

Record electricity for cooling, sorting lines, lighting, and packing equipment inside the boundary.

- Selected flow: Electricity supply for on-site fruit conditioning and packing (semantic candidate)
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Facility meter or documented throughput allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packhouse_records`
- Sources: `source_usda_ams_fresh_fruit_grades`

###### Washing or process water, conditional (`packhouse_process_water`)

Record water for washing or wet conditioning only when before hand-off.

- Selected flow: Process water for on-site fruit conditioning (semantic candidate)
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Metered or supplier-recorded volume assigned to the included run
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packhouse_records`
- Sources: `source_usda_ams_fresh_fruit_grades`

###### Primary packaging materials, conditional (`primary_packaging_materials`)

Record primary containers or wraps when they form part of the declared fresh-fruit market state.

- Selected flow: Primary packaging function for fresh peaches and nectarines (semantic candidate)
- Flow property / unit: Packaging mass or service / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- Amount rule: Actual material mass or container count assigned to included product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packhouse_records`
- Sources: `source_iso_14044`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net marketable fresh fruit at hand-off (`marketable_fresh_fruit`)

Fruit passing the declared maturity and market-quality screen leaves as the PCR reference product; packaging and rejects are excluded.

- Selected flow: Marketable fresh peaches or nectarines at declared first market hand-off (semantic candidate)
- Flow property / unit: Mass / kg
- Amount rule: Net weighed product mass after included sorting and conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packhouse_records`
- Sources: `source_usda_ams_fresh_fruit_grades`

##### Waste flows

###### Sorting rejects and packhouse losses (`packhouse_rejects`)

Fruit rejected during sorting, cooling, or packing is recorded as waste with its downstream route.

- Selected flow: Sorting rejects and on-site packing losses of peaches or nectarines (semantic candidate)
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented rejected mass by facility run and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net marketable fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packhouse_records`
- Sources: `source_usda_ams_fresh_fruit_grades`; `source_iso_14044`

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | separable blocks, species, cultivars, or runs | Avoid allocation by separately measuring peach and nectarine activities whenever records permit. | `source_iso_14044` |
| `allocation_shared_crop_output` | jointly managed outputs | If subdivision is impossible, allocate by documented net marketable mass and disclose mix, basis, and sensitivity. | `source_iso_14044` |
| `allocation_residue_route` | culls, residues, and diverted fruit | Treat culls and residues as waste unless a separate product hand-off is documented; do not apply an automatic avoided-burden credit. | `source_iso_14044` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_inputs` | `orchard_management` | orchard inputs, land, water, residues | invoices, meters, spray logs, field records | block_id; species; cultivar; area; irrigation; electricity; fuel; fertilizer and nutrient basis; crop protection; residues | Collect primary records and reconcile to block and cycle | kg; L; m3; kWh; MJ; m2 | Each application or meter period | Complete crop cycle and harvest year | Each block or documented aggregation | Sum by block and cycle; disclose shared-record allocation | invoices; meters; logs; area records |
| `cp_harvest_records` | `harvest_field_handling` | gross harvest, fuel, losses | harvest tickets, weighbridge, bin and fuel logs | block_id; harvest date; species; cultivar; gross mass; fuel; damaged fruit; destination | Weigh and reconcile to receiving and loss records | kg; L; MJ | Each lot or shift | Harvest window in crop cycle | Block, crew, or contractor | Sum by lot and retain assumptions | weigh tickets; fuel receipts; supervisor approval |
| `cp_packhouse_records` | `onsite_sort_cool_pack` | conditioning, packaging, rejects, net output | facility meters, run sheets, pack-out reports | run_id; incoming mass; net mass; species; cultivar; grade; electricity; water; package mass/count; rejects | Collect facility records and reconcile mass balance | kg; kWh; m3; item | Each run or operating day | Declared inclusion period and harvest season | Included facility or line | Sum by run and allocate shared services by throughput or mass | meters; QA records; waste receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_marketable_output` | harvest and packing | Net marketable output = gross fruit − losses − rejects − declared diversions; do not subtract transferred streams twice. | gross fruit; losses; rejects | kg net marketable fruit | `source_usda_ams_fresh_fruit_grades`; `source_iso_14044` |
| `calc_crop_cycle_normalization` | all flows | Crop-cycle amount / kg net marketable output for the same declared scope. | crop-cycle amount; net output | amount per kg reference flow | `source_iso_14044` |
| `calc_nutrient_basis` | fertilizer and amendments | Convert actual products using label, analysis, or supplier certificate; retain product and nutrient masses. | product mass; concentration | kg product and kg N/P/K | `source_ucanr_peach_fertilizer` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_qualifiers` | reference product and cycle records | Declare species, cultivar, production system, geography, harvest year, maturity/quality grade, hand-off, and conditioning. | metadata; product description; grade records |
| `dq_mass_balance` | harvest and packing | Reconcile gross fruit, marketable product, losses, rejects, and diversions; investigate differences. | weigh tickets; pack-out; waste receipts |
| `dq_temporal_and_site_coverage` | orchard and facility aggregation | Cover the complete crop cycle and identify every contributing block or facility; disclose gaps. | crop calendar; block register; run list |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | reference flow and metadata | Reject a dataset missing required qualifiers, hand-off, or net product-mass basis. | `source_usda_ams_fresh_fruit_grades` |
| `validation_crop_cycle_completeness` | orchard and harvest | Check inputs, harvest lots, marketable output, and known losses share the same time and site scope. | `source_ucanr_peach_nectarine_cultural`; `source_iso_14044` |
| `validation_water_exclusivity` | irrigation water | Do not count the same volume as supplied irrigation water and direct withdrawal. | `source_iso_14044` |
| `validation_product_mass_balance` | harvest and conditioning | Require a balance from gross fruit to net marketable output, losses, and rejects. | `source_iso_14044` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Primary foreground crop-production dataset; may be released as a secondary dataset after review |
| downstream_use | Support process and lifecyclemodel construction for fresh peaches and nectarines at hand-off |
| allowed_use | Compare orchard and harvest when qualifiers, boundary, geography, crop cycle, and quality are compatible |
| excluded_use | Processed fruit, retail or consumer footprints, post-handoff transport, or a different product state |
| required_metadata | species; cultivar; production system; geography; orchard age; area; harvest year/cycle; hand-off; grade; net mass; loss routes |
| required_quality_disclosure | Site and period coverage; measured versus estimated inputs; yield/loss reconciliation; nutrient basis; allocations; exclusions |
| update_trigger | New crop-cycle evidence, production or irrigation change, market-state convention change, new factor guidance, or boundary/identity inconsistency |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `source_usda_ams_fresh_fruit_grades` | official_guidance | USDA AMS, Nectarines Grades and Standards, https://www.ams.usda.gov/grades-standards/nectarines-grades-and-standards | Fresh market state, maturity, quality, and grade qualifiers |
| `source_ucanr_peach_nectarine_cultural` | extension_guidance | UC IPM, Cultural Tips for Growing Peach and Nectarine, https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-peach-and-nectarine/ | Orchard, irrigation, pruning, thinning, harvest, sanitation, and process decomposition |
| `source_ucanr_peach_fertilizer` | extension_guidance | UC IPM, Fertilizer Applications — Peach, https://ipm.ucanr.edu/agriculture/peach/fertilizer-applications/ | Nutrient input collection and split-application review |
| `source_ucanr_nectarine_ipm` | extension_guidance | UC IPM, Pest Management Guidelines — Nectarine, https://ipm.ucanr.edu/pdf/pmg/pmgnectarine.pdf | Crop-protection and weed-management inclusion and disclosure |
| `source_iso_14044` | standard | ISO 14044:2006, https://www.iso.org/standard/38498.html | Boundary, allocation, data quality, and mass-balance rules |
