---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.olives
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Product Category Rule: Fresh Whole Olives
## 1. Scope and Applicability
This rule covers orchard production, picking and any actual pre-gate grading of intact, unpressed and uncured olives. Table and oil destinations are fruit lot attributes, not oil or cured-olive outputs. Exclude pressing, pomace processing, brining, fermentation, canning and downstream transport. Declare rain-fed versus irrigated management and hand versus mechanical harvest. Link the perennial establishment period to bearing years.
## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.olives` |
| classification_refs | CPC 3.0 01450 Olives |
| covered_products | whole fresh olives for table, oil or dual-purpose fruit markets |
| excluded_products | cured olives, olive oil, pomace, leaves and timber |
| representative_product | fresh whole olive fruit at farm gate |
| production_route | perennial establishment, orchard management, harvest and conditional on-farm grading |
| market_state | saleable whole fresh unprocessed fruit at farm gate |

## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | whole fresh olive fruit delivered at farm gate |
| How much | 1 kg |
| How well | state table/oil destination, cultivar, maturity, integrity and damage class |
| How long or cycle | declared harvest year and orchard phase; attribute establishment across documented bearing years |
| reference_flow_link | sum sold accepted_fruit and downgraded_fruit when grading occurs; otherwise picked_fruit is the gate reference fruit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Olives `b07470dd-3947-4e02-8058-11967225f927` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or cultivar mix; table/oil destination; harvest date and maturity; damage/grade; geography and year; irrigation regime; harvest method; fresh-fruit moisture and weighing condition |

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured net mass of whole fresh fruit at the gate; exclude crate tare, oil and brine. |
| orchard_area | perennial orchard | Area | ha | Record managed block area and production year; establishment area is a phase-attribution denominator only. |
| nutrient_basis | fertilizers | Mass | kg product and kg nutrient | Keep fertilizer product mass and N, P, K nutrient mass separately; never mix these bases. |
| fruit_balance | harvest and grading | Mass | kg | Reconcile gross lot mass with accepted, downgraded and rejected fruit, separated olive vegetation, non-plant matter, loss and stock change. |

## 5. System Boundary
Include establishment, tree replacement, irrigation, nutrients and plant protection, pruning, on-site energy, fresh-fruit harvest and grading actually performed before the farm gate. Quantify soil emissions only with applicable methods and activity data, retaining substance and receiving medium. Link upstream production of purchased trees, fertilizers, electricity and fuels to background data. Exclude post-gate transport, pressing, curing, washing and packaging.
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | block land condition, preceding vegetation, tree age, cultivar, density, irrigation infrastructure and base year |
| starting_condition_role | foreground starting point for orchard establishment and multi-year burden |
| product_classification_scope | whole olive fruit; table/oil destination does not split PCR identity |
| recursive_input_rule | record source and amount of any same-category fruit input and stop recursive same-category tracing |
| upstream_dataset_requirement | link purchased trees, materials, water and energy to geography- and time-matched upstream datasets |
| disclosure | disclose establishment, bearing years, replacement, whether grading is on-site, and table/oil fruit destinations |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_fresh_fruit | farm-gate fruit | Deliver only unprocessed whole fruit; model pressing and curing in separate systems. | ioc-table-olives |
| boundary_periods | orchard cohorts | Retain establishment, non-bearing, bearing, replacement and retirement years; do not assign all establishment inputs to one arbitrary harvest year. | ioc-olive-growing |
| boundary_grading | conditional sorting | Activate grading only when it occurs on farm; track destinations and losses by lot. | uc-harvest-2013 |

## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| establish | Orchard establishment | required | always for a new-orchard cohort; annualize recorded non-bearing years | multi-year orchard establishment | ha established |
| manage | Olive orchard management | required | bearing and non-bearing orchard years | managed biological production | ha orchard-year |
| harvest | Fresh olive harvest | required | fruiting years | independent removal from trees and on-farm collection | kg picked fruit |
| sort | On-farm fruit grading | conditional | only when grading or damage sorting is before the farm gate | grade and destination reconciliation | kg incoming fruit |

### Process: Orchard establishment (`establish`)

#### Inputs
##### Product flows
###### Young olive trees (`young_trees`)
Count planted replacement or initial trees; distinguish purchased nursery trees from on-site propagation.
- Selected flow: Young olive trees
- Flow property / unit: Count / trees
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establish`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: trees
  - Basis: per ha established orchard
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Establishment irrigation water (`establish_water`)
Meter irrigation applied during non-bearing establishment; exclude rainfall.
- Selected flow: Establishment irrigation water
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Volume / m3
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establish`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3
  - Basis: per ha in an establishment year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Establishment machine fuel (`establish_fuel`)
Record liquid fuel used for site preparation and tree planting; other energy carriers are separate exchanges.
- Selected flow: Establishment mobile machinery fuel
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Volume / L
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establish`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: L
  - Basis: per ha established orchard
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
None.
##### Elementary flows
None.
#### Outputs
##### Product flows
###### Established orchard state (`established_orchard`)
Internal hand-off of planted living orchard area into the managed production period; not a sold olive product.
- Selected flow: Established orchard state
- Flow property / unit: Area / ha
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establish`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: ha
  - Basis: per ha planted area
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
None.
##### Elementary flows
None.
### Process: Olive orchard management (`manage`)

#### Inputs
##### Product flows
###### Living orchard area (`orchard_state`)
Link established and replacement tree cohorts by block and period; do not purchase the internal state again.
- Selected flow: Living orchard area
- Flow property / unit: Area / ha
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manage`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: ha
  - Basis: per ha managed area-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Agricultural nutrient and fertilizer inputs (`manage_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manage`
- Sources:
- Range: Consolidated nutrient-product QA screen; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg product/ha
  - Basis: sum of separately recorded mineral fertilizer, organic fertilizer, lime and nutrient-bearing amendment product masses per managed orchard hectare-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop protection products (`crop_protection`)
Record each pesticide or other crop-protection material by formulation and active ingredient when used.
- Selected flow: Crop protection products
- Flow property / unit: Mass / kg product
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manage`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg product
  - Basis: per ha managed year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Orchard irrigation water (`irrigation_water`)
Meter applied irrigation; declare rain-fed blocks as zero, not missing.
- Selected flow: Orchard irrigation water
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Volume / m3
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manage`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3
  - Basis: per ha managed year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Orchard management fuel (`field_fuel`)
Record fuel for pruning, mowing, spraying and on-site equipment, without double counting contracted service fuel.
- Selected flow: Orchard mobile machinery fuel
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Volume / L
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manage`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: L
  - Basis: per ha managed year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Irrigation and orchard electricity (`pump_electricity`)
Meter pumping and other orchard electricity only where supplied.
- Selected flow: Irrigation and orchard electricity
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manage`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kWh
  - Basis: per ha managed year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
None.
##### Elementary flows
None.
#### Outputs
##### Product flows
###### Olive fruit on trees (`standing_fruit`)
Internal harvestable fruit state at the end of orchard production; use measured harvested and loss records to close the fruit balance.
- Selected flow: Olive fruit on trees
- Flow property / unit: Mass / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manage`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg
  - Basis: per ha harvest year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
###### Pruned olive biomass leaving orchard (`pruning_biomass`)
Only prunings removed from the orchard are waste or exported biomass; retained mulch stays inside soil-management boundary.
- Selected flow: Pruned olive biomass leaving orchard
- Flow property / unit: Mass / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manage`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg
  - Basis: per ha managed year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Elementary flows
###### Direct soil nitrous oxide to air (`field_n2o`)
Calculate N2O-N from recorded N inputs and the applicable reviewed soil-emission method; convert to N2O and disclose factors.
- Selected flow: Direct soil nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: calculate from block-year N inputs with a declared applicable managed-soil method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg N2O
  - Basis: per ha managed year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Nitrate to water (`nitrate_loss`)
Include only a documented leaching or runoff route and specify receiving medium and nitrogen basis.
- Selected flow: Nitrate to water
- Flow property / unit: Mass / kg nitrate-N
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha orchard-year or establishment year; convert to per kg reference fruit using linked bearing-year fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg nitrate-N
  - Basis: per ha managed year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
### Process: Fresh olive harvest (`harvest`)

#### Inputs
##### Product flows
###### Standing fruit available for harvest (`fruit_on_tree`)
Link to this block-year's orchard fruit state without treating it as purchased product.
- Selected flow: Standing fruit available for harvest
- Flow property / unit: Mass / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg
  - Basis: per ha harvest year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Harvest machine fuel (`harvest_fuel`)
Record fuel for mechanical picking and on-farm collection when used; hand harvest may be zero.
- Selected flow: Harvest mobile machinery fuel
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Volume / L
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: L
  - Basis: per ha harvest year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
None.
##### Elementary flows
None.
#### Outputs
##### Product flows
###### Fresh picked olive fruit (`picked_fruit`)
Weigh whole fruit entering on-farm grading; if no grading occurs, weigh the net saleable fruit at the farm gate and assign any unsold damage to harvest loss.
- Selected flow: Olives `b07470dd-3947-4e02-8058-11967225f927`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg
  - Basis: per ha harvest year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
###### Fruit lost or uncollected at harvest (`uncollected_fruit`)
Estimate fallen, uncollected or damaged fruit not sold; document the observation basis and destination.
- Selected flow: Fruit lost or uncollected at harvest
- Flow property / unit: Mass / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg
  - Basis: per ha harvest year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Elementary flows
None.
### Process: On-farm fruit grading (`sort`)
This node is inactive, with no exchanges, when on-farm grading is absent.
#### Inputs
##### Product flows
###### Fresh fruit entering on-farm grading (`incoming_fruit`)
Use weighed picked fruit when on-farm sorting is performed; otherwise this entire node is inactive.
- Selected flow: Fresh fruit entering on-farm grading
- Flow property / unit: Mass / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg
  - Basis: per ha harvest year, conditional sorting
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### On-farm sorting electricity (`sorting_electricity`)
Meter grader electricity only if sorting occurs before the farm gate.
- Selected flow: On-farm sorting electricity
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh
  - Basis: per ha harvest year, conditional sorting
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
None.
##### Elementary flows
None.
#### Outputs
##### Product flows
###### Saleable fresh whole olives (`accepted_fruit`)
Weigh accepted fruit; mark table or oil destination, cultivar, maturity, damage class and lot. This is the reference product at farm gate.
- Selected flow: Olives `b07470dd-3947-4e02-8058-11967225f927`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Sources: `uc-harvest-2013`; `uc-olive-fly`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg
  - Basis: per ha harvest year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Downgraded but sold whole olives (`downgraded_fruit`)
Record whole fruit diverted from intended table grade to oil-fruit or other sold fresh-fruit grade; no oil is produced here.
- Selected flow: Olives `b07470dd-3947-4e02-8058-11967225f927`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Sources: `uc-harvest-2013`; `uc-olive-fly`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg
  - Basis: per ha harvest year, conditional grading
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
###### Rejected whole olive fruit (`rejected_fruit`)
Weigh whole olive fruit rejected from sale; record damage reason and waste destination, excluding leaves, twigs and other foreign matter.
- Selected flow: Rejected whole olive fruit
- Flow property / unit: Mass / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg
  - Basis: per ha harvest year, conditional grading
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Separated olive leaves and twigs (`olive_vegetative_debris`)
Weigh olive leaves and twigs separated from the harvest lot and document disposal or on-site return; never count them as fruit.
- Selected flow: Separated olive leaves and twigs
- Flow property / unit: Mass / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per ha harvest year, conditional grading
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Separated non-plant contamination (`extraneous_matter`)
Weigh soil, stones or other non-plant debris separately from olive vegetation and record its disposal route.
- Selected flow: Separated non-plant contamination
- Flow property / unit: Mass / kg
- Amount rule: from block-year or lot records; never replace actual amount with the screening range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot; normalize to net accepted farm-gate fruit mass
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Range: Provisional screening interval only; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per ha harvest year, conditional grading
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Elementary flows
None.
## 7. Allocation and Co-product Handling
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| period_attribution | orchard establishment | Attribute recorded establishment inputs over documented benefiting bearing years using saleable fresh-fruit mass; revise for actual retirement, replacement or material yield changes, without a universal lifetime. | ioc-olive-growing |
| fruit_grade_attribution | table/oil grades | Allocate shared orchard inputs between table/oil fruit lots by saleable fresh-fruit mass; assign grade-specific harvest or sorting inputs directly, and never treat rejected fruit as a co-product. | uc-harvest-2013 |
| double_count_prevention | all phases | Record each orchard event once; assign each physical mixed fertilizer product to one input card by N first, then P, then K-only, while tracking other nutrient contents analytically without duplicate exchanges. | mass-balance-identity |

## 8. Foreground Data Collection, Calculation, and Quality Rules
All intervals are broad provisional QA screens, not default inventory values, compliance limits or cross-region yield promises. Use original block and lot records and replace screens with reviewed regional evidence before publication.
### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_establish | establish | trees, land, water and fuel | primary activity record | trees, land, water and fuel | planting and invoice records, meter and machine logs | trees; ha; m3; L | each planting event | all establishment and replacement years | orchard block | sum by block and year; link cohort to bearing years | planting invoices, plot map, meter readings |
| cp_manage | manage | distinct fertilizer products, nutrient composition, protection, irrigation, energy, pruning and fruit state | primary activity record | distinct fertilizer products, nutrient composition, protection, irrigation, energy, pruning and fruit state | unique product ID, product mass and N/P/K fractions from invoice or formulation; application logs, meters, harvest estimates | kg product; kg N/P/K; m3; L; kWh; ha | each operation | each managed calendar or crop year | orchard block | one exchange per physical fertilizer product; sum nutrients analytically and all activity per block-year | invoices, composition declarations, equipment log, meter readings, pruning tickets |
| cp_emissions | manage | direct N2O and nitrate activity | primary activity record | direct N2O and nitrate activity | record N products, soil and receiving medium; apply declared local method | kg N; kg N2O; kg nitrate-N | annual | each managed year | orchard block | calculate separately by species and medium | N ledger and cited factor method |
| cp_harvest | harvest | picked and uncollected fruit, harvest fuel | primary activity record | picked and uncollected fruit, harvest fuel | weighbridge tickets and field loss survey | kg; L | each harvest lot | whole harvest window | block and lot | sum picked plus observed uncollected; retain harvest method | scale calibration, tickets, survey sheets |
| cp_sort | sort | accepted, downgraded and rejected fruit, olive vegetation, non-plant matter, energy | primary activity record | accepted, downgraded and rejected fruit, olive vegetation, non-plant matter, energy | grade tickets, separate fruit/vegetation/contaminant weighing and electricity meter | kg; kWh | each sorted lot | all on-farm graded lots | farm grading site and lot | reconcile gross incoming mass with fruit grades, olive vegetation, other matter, loss and stock change | grade tickets, scale calibration, meter logs |

### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| annualize_establishment | new and replacement trees | Attribute measured establishment-year inputs to benefiting bearing-year output; update on retirement and replacement. | block cohorts, planting dates, input logs, bearing-year fruit mass | kg input/kg accepted fruit | ioc-olive-growing |
| fruit_reconcile | picked or sorted lot | Gross incoming lot = accepted + downgraded + rejected fruit + separated olive vegetation + non-plant matter + measured loss + stock change. | weighed gross lot input, fruit grades, vegetation and non-plant matter | kg discrepancy | mass-balance-identity |
| fruit_normalize | all orchard-year inputs | Divide linked block-year inputs by saleable fresh-fruit kg for the same benefiting periods; retain non-bearing years for attribution. | block-year activity and saleable fruit mass | per kg reference fruit |  |
| nutrient_convert | nutrient products | Create one exchange per physical product; multiply its mass by each documented elemental nutrient fraction and retain N, P, K versus oxide label basis. | unique product ID, product mass, declared nutrient fractions | kg N, P and K | uc-fertilizing-olives |

### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_periods | orchard cohort | Retain establishment, non-bearing, bearing, replacement and retirement periods and attribution version. | block map and annual ledger |
| dq_route | fruit lot | Retain table/oil destination, cultivar, maturity, damage, harvest method and fresh-fruit gate state. | lot and grade tickets |
| dq_mass | harvest and grading | Calibrate scales and reconcile fruit balance; flag missing, estimated and stock-change records. | scale certificates and reconciliation |
| dq_inputs | all process inputs | Separate actual materials and carriers; never populate an inactive conditional process with default values. | meter, invoices and operation logs |
| dq_emissions | soil emissions | Trace species, receiving medium, activity and applicable method; leave unresolved flows unmapped. | method sheet and N ledger |

## 9. Validation Rules
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference product | Check whole-fruit UUID, 1 kg net mass and required qualifiers; oil or cured fruit cannot substitute for fresh fruit. | ioc-table-olives |
| validate_periods | perennial cohorts | Check all establishment, non-bearing, bearing, replacement and retirement periods are allocated once and traceably. | ioc-olive-growing |
| validate_route | harvest and grading | Record hand or mechanical harvest and table/oil grade; inactive grading has no exchanges. | uc-harvest-2013 |
| validate_balance | fruit lot | Review fruit, separated olive vegetation and non-plant matter against gross lot mass, reject destinations and damage class without double-counting transfers. | mass-balance-identity |
| validate_range | each flow card | Investigate out-of-screen observations without rejecting supported real measurements solely because of a provisional interval. |  |

## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | block- and lot-specific fresh-olive foreground data package |
| downstream_use | `secondary_dataset`; may serve as `background_dataset` after geographic and temporal matching |
| allowed_use | farm-gate whole-fruit modelling with table/oil fruit destination split |
| excluded_use | not an olive-oil, cured-fruit or universal region/tree-age default dataset |
| required_metadata | block, geography, cultivar, tree age, establishment/bearing/replacement years, irrigation, harvest, grading and fruit destination |
| required_quality_disclosure | weighing and loss checks, cross-period attribution, unmapped exchanges, provisional ranges and data gaps |
| update_trigger | block change, replanting, harvest technology, grading location, quality definition or method-factor change |

## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ioc-olive-growing | official_guidance | International Olive Council, Olive Growing, https://www.internationaloliveoil.org/wp-content/uploads/2019/12/Olivicultura_eng.pdf | orchard establishment, management and harvest route |
| ioc-table-olives | official_guidance | International Olive Council, Table olives, https://www.internationaloliveoil.org/olive-world/table-olives/ | fresh-fruit maturity, handling and curing boundary |
| uc-harvest-2013 | extension_guidance | UC ANR, Mechanical Harvesting of California Table and Oil Olives, 2013, https://ucanr.edu/blog/topics-subtropics/article/mechanical-harvesting-california-table-and-oil-olives | harvest method and damage distinction |
| uc-fertilizing-olives | extension_guidance | UC ANR, Fertilizing Olives, https://ucanr.edu/node/107355/printable/print | site-specific nutrient recording |
| uc-olive-fly | extension_guidance | UC IPM, Olive Fruit Fly, https://ipm.ucanr.edu/agriculture/olive/olive-fruit-fly/ | destination-specific fruit condition |
| ipcc-2019-managed-soils | method_factor | IPCC, 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O method and N input pathways |
| mass-balance-identity | method_factor | Gross incoming harvest lot = accepted + downgraded + rejected fruit + separated olive vegetation + non-plant matter + measured handling loss + stock change | lot mass reconciliation |
