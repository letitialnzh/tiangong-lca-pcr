---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-citrus-fruit-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other citrus fruit, n.e.c.

## 1. Scope and Applicability

This PCR covers foreground production of fresh, unprocessed citrus fruit classified as other citrus fruit, n.e.c., from orchard or protected-unit management through harvest, optional primary conditioning, primary packaging, and hand-off at the declared farm or first packing-site gate. The product identity must state the common or botanical citrus name when the residual CPC category contains more than one type. The PCR excludes nursery production for sale, oranges, lemons and limes, tangerines/mandarins/clementines, pomelos/grapefruits, processed or preserved citrus, post-gate distribution, retail, consumption, and land-use change before the declared starting condition.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-citrus-fruit-n-e-c |
| classification_refs | CPC 3.0:01329 Other citrus fruit, n.e.c. |
| covered_products | Fresh, unprocessed other citrus fruit transferred at the declared farm or first packing-site gate |
| excluded_products | Specifically classified citrus categories, processed or preserved citrus, nursery planting material sold as a product, and post-gate distribution |
| representative_product | Marketable fresh other citrus fruit, harvested, graded, and in the declared washed or unwashed and packaged or loose state |
| production_route | Perennial or semi-perennial orchard management, harvest, optional primary conditioning, and declared-gate hand-off |
| market_state | Fresh whole citrus at the declared gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh other citrus fruit at the declared farm or first packing-site gate |
| How much | 1,000 kg |
| How well | Fresh, unprocessed, saleable fruit with declared citrus identity, variety group, geography, maturity, grade, washing, cooling, packaging, and gate |
| How long or cycle | One annual harvest campaign and represented productive orchard period, with perennial burdens allocated to the reported period |
| reference_flow_link | other_citrus_fruit_farm_gate_output |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh other citrus fruit at declared farm or first packing-site gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | citrus identity and botanical or market name; variety group; geography; orchard or protected route; stand age; reporting year; productive area; irrigation source and method; nutrient and crop-protection basis; maturity and grade; washing; cooling; packaging; reject and residue fate; declared gate |

When constructing a foreground data package, all `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent fields.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvest and gate output | Mass | kg | Keep gross harvest, marketable fruit, culls, trim, field losses, and packing rejects separate before normalization. |
| `perennial_orchard_annualization` | orchard management | Area-time and mass | m2*a and kg | Record stand age, productive area, reporting period, and replacement events; allocate perennial burdens without double counting across years. |
| `nutrient_equivalent_basis` | fertilizer and soil amendment | Mass | kg product, kg N, kg P2O5, or kg K2O | Record actual product and declared concentration, retaining both product mass and nutrient-equivalent basis. |
| `irrigation_volume` | irrigation and withdrawal | Volume | m3 | Separate delivered irrigation from rainfall and reconcile source withdrawal, delivery, return, and losses where applicable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Established orchard or protected citrus unit receiving the represented period's management inputs; prior land use and nursery production are disclosed or excluded |
| starting_condition_role | Beginning of the represented productive period and harvest campaign |
| product_classification_scope | Fresh other citrus fruit, n.e.c., under CPC 3.0:01329 through the declared farm or first packing-site gate |
| recursive_input_rule | Purchased citrus planting material is linked once as an upstream input and is not recursively opened as another orchard cycle. |
| upstream_dataset_requirement | Use compatible upstream datasets for planting material, nutrients, crop protection, water, energy, fuel, packaging, and waste treatment when used. |
| disclosure | Declare citrus identity, variety, geography, route, stand age, area, reporting period, irrigation, nutrient and crop-protection basis, harvest, grade, washing, cooling, packaging, residue and reject fate, wastewater fate, and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_productive_period` | orchard management | Include management inputs, perennial attribution, and direct field emissions for the represented productive period and campaign; disclose establishment and replacement separately. | `fao-citrus-production-guidance` |
| `boundary_declared_gate` | harvest and conditioning | End at the declared farm or first packing-site gate; include grading, washing, cooling, and primary packaging only when they occur before hand-off. | `fao-citrus-postharvest-guidance`; `iso-14067-2018` |
| `boundary_soil_and_residue_emissions` | nutrients and residues | Apply one declared method to soil and residue emissions and prevent duplicate nitrogen accounting. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | residues and rejects | Record destination; an unspecified residue or reject remains a loss or waste flow and is not a co-product. | `fao-citrus-production-guidance` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_management` | Other-citrus orchard management | required | every represented productive period | managed biological production | productive area and annual harvest output |
| `harvest` | Other-citrus harvest and field handling | required | every represented harvest campaign | harvest and hand-off | harvest lots and 1,000 kg marketable output |
| `primary_conditioning` | Other-citrus primary conditioning and packing | conditional | when conditioning or primary packing occurs before the gate | primary conditioning | conditioned output and rejects per 1,000 kg |

### Process: Other-citrus orchard management (`orchard_management`)

#### Inputs

##### Product flows

###### Irrigation water delivered to orchard (`irrigation_water_input`)

Record water delivered to the represented orchard or protected unit, separated from rainfall and source withdrawal.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter or document delivered irrigation by block, source, method, and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and per 1,000 kg marketable gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `fao-irrigation-water-management`
- Range: Irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20,000
  - Unit: m3/ha/year
  - Basis: productive orchard area and represented annual campaign
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-irrigation-water-management`

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
- Normalization basis: per productive hectare and per 1,000 kg marketable gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `fao-citrus-production-guidance`

###### Crop-protection products (`crop_protection_input`)

Record crop-protection products or active substances by product, date, treated area, and label or prescription basis.

- Selected flow: Crop-protection product or active substance
- Flow property / unit: Mass / kg product or kg active substance
- Amount rule: Reconcile purchase, stock, application, treated area, and label concentration for the represented period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per productive hectare and per 1,000 kg marketable gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `fao-citrus-production-guidance`

###### Orchard electricity (`orchard_electricity_input`)

Record electricity for pumping, fertigation, ventilation, or other orchard services and allocate shared meters to the represented block and period.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter or allocate electricity to the represented block and reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per productive hectare and per 1,000 kg marketable gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `fao-citrus-production-guidance`

###### Orchard machinery fuel (`orchard_fuel_input`)

Record fuel for mowing, spraying, pruning, nutrient application, and internal orchard handling.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or mass / MJ or kg fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Use fuel records or equipment activity multiplied by a verified fuel-use rate, retaining fuel type.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per productive hectare and per 1,000 kg marketable gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `fao-citrus-production-guidance`

##### Waste flows

##### Elementary flows

###### Orchard land occupation (`land_occupation_input`)

Record occupied productive area and duration for the represented period.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Productive area multiplied by represented occupation duration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `fao-citrus-production-guidance`

#### Outputs

##### Product flows

###### Orchard crop available for harvest (`orchard_output_handoff`)

Reconcile the crop available for harvest with harvest lots; do not count this internal hand-off as a second marketable output.

- Selected flow: Other citrus fruit crop available for harvest
- Flow property / unit: Mass / kg fresh fruit
- Amount rule: Reconcile estimated or measured availability with harvest, field losses, and marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive period and per 1,000 kg marketable gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_yield_records`
- Sources: `fao-citrus-production-guidance`

##### Waste flows

###### Pruning and orchard residue (`pruning_residue_output`)

Record pruning biomass and destination, including field return, composting, treatment, or disposal.

- Selected flow: Citrus pruning and orchard residue
- Flow property / unit: Mass / kg fresh or dry matter
- Amount rule: Weigh or estimate residue, document moisture basis, and declare destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and per 1,000 kg marketable gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `fao-citrus-production-guidance`

##### Elementary flows

###### Direct soil nitrous oxide (`soil_nitrous_oxide`)

Calculate direct soil and residue nitrous oxide using one declared method and eligible nitrogen basis.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the declared factor or measured result after removing duplicate nutrient and residue nitrogen bases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per productive hectare and per 1,000 kg marketable gate output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `ipcc-2019-managed-soils`

### Process: Other-citrus harvest and field handling (`harvest`)

#### Inputs

##### Product flows

###### Reusable harvest crates (`harvest_crate_input`)

Record crates or field containers, including reuse count, cleaning, replacement, and loss assumptions.

- Selected flow: Reusable harvest crate or field container
- Flow property / unit: Packaging mass or container count / kg or number
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Allocate manufacture, cleaning, replacement, and loss by documented service count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_yield_records`
- Sources: `fao-citrus-postharvest-guidance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested other citrus fruit (`harvested_fruit_output`)

Weigh harvested fruit before optional conditioning and retain product, maturity, grade, and lot data.

- Selected flow: Harvested fresh other citrus fruit
- Flow property / unit: Mass / kg fresh fruit
- Amount rule: Weigh each lot and reconcile gross harvest with losses, culls, and marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_yield_records`
- Sources: `fao-citrus-production-guidance`

##### Waste flows

###### Harvest losses and field culls (`harvest_loss_output`)

Record fruit left in the field, damaged during harvest, or removed before the declared gate and document its fate.

- Selected flow: Harvest loss or field cull
- Flow property / unit: Mass / kg fresh fruit
- Amount rule: Weigh or estimate by lot and reconcile gross, marketable, and lost quantities.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_yield_records`
- Sources: `fao-citrus-production-guidance`

### Process: Other-citrus primary conditioning and packing (`primary_conditioning`)

#### Inputs

##### Product flows

###### Conditioning and wash water (`conditioning_water_input`)

Record water used for optional washing, sanitation, or primary conditioning before the declared gate.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter or document water by lot and distinguish make-up from recirculated water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-citrus-postharvest-guidance`

###### Conditioning electricity (`conditioning_electricity_input`)

Record electricity for sorting, grading, washing, cooling, and primary packing before the declared gate.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter or allocate electricity to the represented lots and conditioning period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-citrus-postharvest-guidance`

###### Primary packaging materials, conditional (`primary_packaging_input`)

Record only cartons, trays, films, labels, pallets, or other primary packaging actually used before the declared gate.

- Selected flow: Primary packaging materials as used
- Flow property / unit: Mass / kg packaging material
- Amount rule: Weigh or obtain issue records by packaging type and allocate reusable items by documented reuse and loss.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-citrus-postharvest-guidance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable other citrus fruit at declared gate (`marketable_gate_output`)

Record fruit meeting the declared identity, maturity, grade, quality, handling state, and gate requirements.

- Selected flow: Marketable fresh other citrus fruit at declared gate
- Flow property / unit: Mass / kg fresh fruit
- Amount rule: Weigh gate output by product identity, lot, grade, handling state, and gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: reference flow of 1,000 kg marketable gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-citrus-postharvest-guidance`

##### Waste flows

###### Conditioning rejects and wash wastewater (`conditioning_reject_output`)

Record fruit rejects, trim, and wastewater leaving conditioning, with destination and treatment evidence.

- Selected flow: Conditioning reject, trim, or wash wastewater
- Flow property / unit: Mass or volume / kg fresh material or m3 wastewater
- Amount rule: Measure or calculate rejects, trim, and wastewater separately where practicable and retain fate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-citrus-postharvest-guidance`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_marketable_and_rejects` | shared orchard and conditioning outputs | Allocate shared inputs to marketable fruit, culls, trim, and separately documented outputs using measured mass when outputs are comparable; retain non-comparable streams as disclosed. | `iso-14044-2006`; `fao-citrus-postharvest-guidance` |
| `allocation_perennial_stand` | orchard establishment and replacement | Annualize establishment, replacement, and shared perennial assets over documented productive years and replacement events. | `fao-citrus-production-guidance`; `iso-14067-2018` |
| `allocation_reuse_packaging` | reusable crates and pallets | Allocate manufacture and cleaning by documented service count, loss rate, and represented campaign; record one-way packaging separately. | `fao-citrus-postharvest-guidance` |

Rejected, returned, composted, treated, or discarded fruit remains a waste or loss flow unless separate sale and management evidence supports co-product treatment.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_management_records` | `orchard_management` | orchard inputs, area, energy, land, and residues | orchard log, meter, invoice, field record | block; area; stand age; route; irrigation; electricity; fuel; residue; period | reconcile block records to meters and invoices | kg, m3, kWh, MJ, m2*a | each operation and monthly close | full represented productive period | each block or unit | aggregate by block and period before output normalization | meter or invoice and field-log reconciliation |
| `cp_nutrient_application_records` | `orchard_management` | nutrient total and soil emissions | label, purchase, stock, application, and soil record | product; mass; N; P2O5; K2O; date; block; method; soil test | reconcile purchase and application to label or laboratory concentration | kg product and kg nutrient | each application and annual close | full represented period | each block | calculate nutrient equivalents by product before aggregation | label or laboratory result and application log |
| `cp_harvest_yield_records` | `harvest` | harvest lots, crates, losses, and hand-off | harvest ticket, scale, crate, and fuel record | lot; identity; block; date; gross; marketable; cull; loss; crates; fuel; gate | lot-level scale records reconciled to block yield | kg, number, MJ | every harvest lot | full harvest campaign | each block and hand-off | gross = marketable + cull + loss | calibrated scale and harvest ticket |
| `cp_primary_conditioning_records` | `primary_conditioning` | water, electricity, packaging, output, rejects, wastewater | pack-house log, meter, scale, issue and waste record | lot; water; recirculation; electricity; packaging; output; reject; wastewater; gate | allocate shared records by handled fruit mass | m3, kWh, kg | each lot or campaign close | full conditioning period | each line or first packing site | reconcile input and output lots | meter, scale, packaging, and waste record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground rows | normalized amount = period or lot amount / marketable gate output × 1,000 kg | collected amount; gate output | amount per reference output | `iso-14067-2018` |
| `calc_nutrient_equivalent` | nutrient input total | nutrient equivalent = product mass × declared concentration | product mass; label or laboratory concentration | kg N, kg P2O5, or kg K2O | `fao-citrus-production-guidance` |
| `calc_perennial_attribution` | establishment and replacement | annual attributed amount = documented amount / declared attribution period, adjusted for area and period | establishment; stand age; period; area | annualized orchard amount | `fao-citrus-production-guidance`; `iso-14067-2018` |
| `calc_soil_emissions` | soil nitrous oxide | apply declared factor or measurement to eligible nutrient and residue nitrogen after duplicate-basis removal | nutrient and residue nitrogen; factor or result | emission amount | `ipcc-2019-managed-soils` |
| `calc_output_reconciliation` | harvest and conditioning | gross harvest = marketable + cull + trim + loss; investigate unexplained residuals | lot weights and fate records | reconciled products and wastes | `fao-citrus-postharvest-guidance` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | product and reference flow | Declare citrus identity, variety group, route, grade, gate, and handling states remain explicit. | product specification and lot record |
| `quality_measurement` | quantities and units | Use calibrated scales and meters where available; document estimates, moisture basis, conversion factors, and reuse assumptions. | calibration, meter, invoice, and calculation records |
| `quality_temporal` | orchard and harvest | Cover the complete represented productive period and campaign, including repeated harvests and replacement events. | field calendar, harvest tickets, pack-house log |
| `quality_completeness` | inventory | Reconcile water, nutrients, energy, fuel, packaging, product, rejects, residues, emissions, and withdrawal; explain missing streams. | mass balance and missing-data note |
| `quality_disclosure` | dataset metadata | Disclose required qualifiers, water source and fate, nutrient and crop-protection basis, perennial allocation, and reject or residue destination. | completed dataset metadata and site records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | reference flow and gate output | The 1,000 kg reference output must use kg mass and reconcile to product identity, grade, handling state, and gate. | `iso-14067-2018` |
| `validate_process_reconciliation` | harvest and conditioning | Gross harvest, marketable output, culls, trim, losses, rejects, and wastewater must reconcile or carry a documented residual. | `fao-citrus-postharvest-guidance` |
| `validate_perennial_period` | orchard management | Stand age, productive area, period, establishment or replacement event, and annualization basis are required before normalization. | `fao-citrus-production-guidance` |
| `validate_flow_set_resolution` | parameterized rows | During foreground generation, each parameterized row must resolve to a verified UUID compatible with its group, property, unit, and geography; otherwise retain explicit coverage finding. |  |
| `validate_qualifiers` | reference flow and metadata | Required qualifiers must include citrus identity, variety, geography, stand age, period, irrigation, nutrient and crop-protection basis, maturity or grade, conditioning, packaging, fates, and gate. | `fao-citrus-production-guidance`; `fao-citrus-postharvest-guidance` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh other citrus fruit |
| downstream_use | Secondary or background dataset after reference identity, gate, geography, period, and coverage finding are disclosed |
| allowed_use | Comparative or attributional LCA of fresh citrus supply with compatible route, state, and gate |
| excluded_use | Processed, juiced, preserved, dried, retail, consumer, or materially different boundaries without documented adaptation |
| required_metadata | product identity; variety; geography; route; stand age; area; period; irrigation; nutrient and crop protection; harvest lots; maturity and grade; conditioning; packaging; fates; gate; UUID and Flow Set coverage status |
| required_quality_disclosure | data year; measured versus estimated values; allocation and annualization; water source and fate; nutrient basis; mass balances |
| update_trigger | Change in category interpretation, Flow Set taxonomy, reference identity, route, nutrient or emission method, packaging, or material agricultural practice |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-citrus-production-guidance` | official_guidance | FAO citrus production and orchard management guidance | route, orchard management, planting, residues, and productive-period boundary |
| `fao-irrigation-water-management` | extension_guidance | FAO irrigation and agricultural water-management guidance | irrigation records, water disclosure, and withdrawal reconciliation |
| `fao-citrus-postharvest-guidance` | official_guidance | FAO citrus postharvest handling and packing guidance | harvest, grading, washing, cooling, packaging, rejects, and wastewater |
| `ipcc-2019-managed-soils` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, managed-soils methods | soil emission calculation |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | allocation and inventory consistency |
| `iso-14067-2018` | standard | ISO 14067:2018 Greenhouse gases — Carbon footprint of products | normalization, allocation disclosure, and use conditions |
