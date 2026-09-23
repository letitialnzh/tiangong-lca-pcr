---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.yams
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Yams

## 1. Scope and Applicability

This PCR covers managed cultivation, lifting, first farm-gate conditioning, and grading of fresh, unprocessed yam tubers (*Dioscorea* spp.) delivered at the farm gate. It excludes seed-yam production as the reference product, cassava, sweet potatoes, taro, yautia, processed yam products, off-farm storage, packaging, retail preparation, and cooking.

The default route ends when accepted whole tubers are weighed for transfer at farm gate. Irrigation, washing, powered handling, and input use are recorded only when they occur. Curing, extended storage, packaging, or transport beyond this hand-off requires a downstream process.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.yams` |
| classification_refs | CPC 3.0 `01540` (Yams), exact candidate mapping context |
| covered_products | Fresh whole ware-yam tubers of *Dioscorea* spp. at farm gate |
| excluded_products | Seed yams as sale product; other roots and tubers; peeled, cut, dried, frozen, cooked, fermented, chipped, or milled yams |
| representative_product | Fresh marketable yam tubers, whole and unprocessed |
| production_route | Managed field cultivation; tuber lifting; first cleaning or trimming when performed; grading and farm-gate hand-off |
| market_state | Fresh, unprocessed produce at farm gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh, whole, marketable yam tubers at farm gate |
| How much | 1,000 kg net mass |
| How well | Sound and saleable under the declared buyer or grade specification; soil, packaging, rejected tubers, and free wash water excluded |
| How long or cycle | A single-period declared yam crop cycle ending at farm-gate hand-off |
| reference_flow_link | Net accepted output of `yam_grading` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Yams `227a29cc-a11c-4357-9188-2ee8ead339bd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; cultivar where known; production country and site; crop-cycle dates; rainfed or irrigated regime; whole fresh state; washing status; grade or buyer specification; farm-gate hand-off |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted farm-gate yams | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net accepted tubers after grading; exclude tare, packaging, free water, loose soil, downgraded lots, and rejects. |
| `transfer_mass` | yam material transferred between nodes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured wet mass at every hand-off and disclose any moisture-changing interval. |
| `area_conversion` | occupied field area | area per crop cycle | ha·crop_cycle | Match cultivated area to harvested tuber mass from the same plots and cycle before normalization. |
| `nutrient_mass` | fertilizer inputs | nutrient mass | kg nutrient | Preserve physical fertilizer products and calculate N, P2O5, and K2O equivalents separately. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field and identifiable yam planting material are available; purchased inputs retain linked upstream datasets. |
| starting_condition_role | Foreground collection begins with field establishment and input application for one crop cycle. |
| product_classification_scope | Fresh whole ware-yam tubers at farm gate. |
| recursive_input_rule | Purchased or internally transferred seed yam/setts remain explicit Product-flow inputs. Same-category planting material links to a separately bounded dataset and does not recursively expand the current ware-yam process. |
| upstream_dataset_requirement | Link suitable upstream datasets for planting material, fertilizers, crop-protection products, fuels, electricity, irrigation supply, and waste treatment. |
| disclosure | Declare seed source, field area, crop dates, management regime, conditioning steps, grade definition, reject destinations, and excluded storage or packaging. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_cultivation` | `yam_cultivation` | Include field establishment, management inputs, irrigation when used, field energy, and direct managed-soil emissions for the crop cycle. | `fao-quality-declared-yam-planting-material`; `iita-yam-yield-2020` |
| `boundary_harvest_handoff` | `yam_harvest` | Treat lifting and field collection as a distinct hand-off; distinguish collected yams, damaged tubers, and uncollected loss. | `fao-yam-postharvest` |
| `boundary_primary_conditioning` | `yam_primary_conditioning` | Include loose-soil removal, trimming, conditional washing, drainage, and air drying before grading; exclude storage undertaken to extend life. | `fao-yam-postharvest` |
| `boundary_grading` | `yam_grading` | Reconcile conditioned tubers into accepted product, downgraded product, rejects, and physical loss. | `fao-yam-postharvest`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yam_cultivation` | Managed yam cultivation | required | Always | Establish and manage yam plants until tubers are ready for lifting | Per harvest-ready tuber output |
| `yam_harvest` | Yam lifting and field collection | required | Always | Lift tubers and transfer collected tubers to preparation | Per collected-tuber output |
| `yam_primary_conditioning` | Primary conditioning at farm gate | required | Always; individual operations conditional | Remove soil and plant matter; trim; conditionally wash and drain | Per conditioned-tuber output |
| `yam_grading` | Grading and farm-gate hand-off | required | Always | Separate accepted, downgraded, and rejected states | Per 1,000 kg accepted yams |

### Process: Managed yam cultivation (`yam_cultivation`)

#### Inputs

##### Product flows

###### Yam planting material (`seed_yam_setts`)

Record disease-screened whole seed yams or cut setts planted in contributing plots.

- Selected flow: Yam planting material
- Flow property / unit: Mass / kg
- Amount rule: measured fresh mass planted
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_inputs`
- Sources: `fao-quality-declared-yam-planting-material`
- Range: Provisional planting-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 20
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`yam_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_inputs`
- Sources:
- Range: Aggregate as-applied nutrient-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg product
  - Basis: per 1,000 kg accepted yam output at farm gate; retain nutrient analyses separately
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Record water delivered to the field only for irrigated production; rainfed production records zero.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calibrated field delivery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Range: Provisional irrigation screen; applies only when irrigation is active
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel for cultivation (`cultivation_diesel`)

Record diesel used by field equipment; keep every other carrier as a separate exchange.

- Selected flow: Mobile machinery fuel, diesel carrier
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured fuel issued to cultivation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_inputs`
- Range: Provisional cultivation-diesel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed. Imported manure or recovered nutrient material is a Product-flow input with declared origin.

##### Elementary flows

###### Occupied field area (`field_area_occupation`)

Match field area and crop-cycle dates to the harvest from the same plots.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha·crop_cycle
- Amount rule: contributing area divided by harvest-ready tuber mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvest-ready yam tubers
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_area_and_yield`
- Sources: `iita-yam-yield-2020`
- Range: Nigerian example derived from 13.1–23 t/ha reported yields
  - Range role: Typical range (`typical_range`)
  - Lower: 0.0435
  - Upper: 0.0763
  - Unit: ha·crop_cycle
  - Basis: per 1,000 kg harvest-ready yam tubers; regional example only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `iita-yam-yield-2020`

#### Outputs

##### Product flows

###### Harvest-ready yam crop (`harvest_ready_yams`)

This intermediate tuber state is handed to `yam_harvest` and is not the reference product.

- Selected flow: Harvest-ready yam tubers
- Flow property / unit: Mass / kg
- Amount rule: measured or plot-estimated tuber mass immediately before lifting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_mass_transfers`
- Range: Provisional harvest-ready mass reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

Plant residues remaining in the field are recorded in the field balance and emissions model, not as waste outputs.

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_soil_n2o`)

Calculate direct N2O separately from indirect pathways using the selected IPCC tier or a better regional method.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass / kg N2O
- Amount rule: nitrogen input multiplied by the direct N2O-N factor and by 44/28
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2006-managed-soils-n2o`
- Range: IPCC Tier 1 factor uncertainty screen before molecular conversion
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0.003
  - Upper: 0.03
  - Unit: kg N2O-N/kg N input
  - Basis: per kg N input applied to managed soil
  - Basis kind: Nitrogen input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2006-managed-soils-n2o`

### Process: Yam lifting and field collection (`yam_harvest`)

#### Inputs

##### Product flows

###### Harvest-ready yam crop received (`harvest_ready_yams_received`)

Receive the cultivation output on the same lot and crop-cycle basis.

- Selected flow: Harvest-ready yam tubers
- Flow property / unit: Mass / kg
- Amount rule: equal to transferred `harvest_ready_yams`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Transfer-mass reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile harvest machinery fuel (`harvest_diesel`)

Record diesel used by lifting and collection equipment; manual harvest records zero.

- Selected flow: Mobile harvest machinery fuel, diesel carrier
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured fuel issued to harvest
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg collected yam output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_inputs`
- Range: Provisional harvest-diesel screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: L
  - Basis: per 1,000 kg collected yam output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No separate elementary input is prescribed.

#### Outputs

##### Product flows

###### Collected yam tubers (`collected_yams`)

Record all tubers physically lifted and delivered to conditioning, including tubers later rejected.

- Selected flow: Collected fresh yam tubers
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_mass_transfers`
- Sources: `fao-yam-postharvest`
- Range: Provisional collected-tuber reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1800
  - Unit: kg
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Tubers damaged or lost during lifting (`harvest_damaged_yams`)

Record unusable tubers damaged during lifting or separately quantified as uncollected loss; saleable downgraded tubers are not waste.

- Selected flow: Damaged yam tubers
- Flow property / unit: Mass / kg
- Amount rule: measured damaged or unrecovered tuber mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg collected yam output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_and_loss_records`
- Sources: `fao-yam-postharvest`
- Range: Provisional harvest-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg
  - Basis: per 1,000 kg collected yam output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Equipment exhaust remains in linked fuel-combustion datasets unless directly measured.

### Process: Primary conditioning at farm gate (`yam_primary_conditioning`)

#### Inputs

##### Product flows

###### Collected yam tubers received (`collected_yams_received`)

Receive the complete collected-tuber state before cleaning or trimming.

- Selected flow: Collected fresh yam tubers
- Flow property / unit: Mass / kg
- Amount rule: equal to transferred `collected_yams`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Transfer-mass reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1800
  - Unit: kg
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning wash water (`conditioning_wash_water`)

Record water only when washing occurs because of contamination or buyer requirements; dry cleaning records zero.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: measured water supplied to yam washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned yam output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `fao-yam-postharvest`
- Range: Provisional wash-water screen; applies only when washing is active
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg conditioned yam output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`conditioning_electricity`)

Record electricity used by washers, conveyors, or fans; unpowered conditioning records zero.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered electricity assigned to conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned yam output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_inputs`
- Range: Provisional conditioning-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh
  - Basis: per 1,000 kg conditioned yam output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No separate elementary input is prescribed.

#### Outputs

##### Product flows

###### Conditioned yam tubers (`conditioned_yams`)

Record intact tubers after loose-soil removal, trimming, and any washing and drainage, ready for grading.

- Selected flow: Conditioned fresh yam tubers
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to grading after free water drains
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_mass_transfers`
- Sources: `fao-yam-postharvest`
- Range: Provisional conditioned-tuber reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1600
  - Unit: kg
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Removed soil and plant matter (`conditioning_solid_residue`)

Record solids removed during conditioning. Split soil and plant matter in a concrete dataset if destinations differ.

- Selected flow: Conditioning solid residue
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass leaving conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned yam output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_and_loss_records`
- Range: Provisional solid-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg conditioned yam output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wash wastewater (`conditioning_wastewater`)

Record wastewater only when washing is active and identify discharge, reuse, or treatment.

- Selected flow: Wastewater from produce washing
- Flow property / unit: Mass / kg
- Amount rule: measured or water-balanced discharge
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned yam output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`
- Range: Provisional wastewater screen; applies only when washing is active
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg conditioned yam output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Direct discharge may replace the wastewater row with substance-specific elementary flows when the foreground boundary discharges to the environment.

### Process: Grading and farm-gate hand-off (`yam_grading`)

#### Inputs

##### Product flows

###### Conditioned yam tubers received (`conditioned_yams_received`)

Receive the complete conditioned state before grading.

- Selected flow: Conditioned fresh yam tubers
- Flow property / unit: Mass / kg
- Amount rule: equal to transferred `conditioned_yams`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Transfer-mass reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1600
  - Unit: kg
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No elementary input is prescribed.

#### Outputs

##### Product flows

###### Accepted farm-gate yams as intended output (`accepted_yams`)

This is the reference product after applying the declared grade or buyer specification.

- Selected flow: Yams `227a29cc-a11c-4357-9188-2ee8ead339bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: exactly 1,000 kg net accepted tubers
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Fixed reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded but saleable yams as intended output (`downgraded_yams`)

Record sound lower-grade tubers sold to a distinct destination as a separate intended Product flow.

- Selected flow: Downgraded fresh yam tubers
- Flow property / unit: Mass / kg
- Amount rule: measured lower-grade saleable mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_and_loss_records`
- Sources: `fao-yam-postharvest`
- Range: Provisional downgraded-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected yam tubers (`grading_rejects`)

Record unsaleable cut, crushed, punctured, diseased, or rotten tubers by destination.

- Selected flow: Rejected yam tubers
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted yam output at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_and_loss_records`
- Sources: `fao-yam-postharvest`
- Range: Provisional grading-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg
  - Basis: per 1,000 kg accepted yam output at farm gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No direct elementary output is prescribed.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | separately measured fields, operations, grades, or destinations | Prefer subdivision and direct assignment before allocation. |  |
| `allocation_single_output` | residues and rejects without an intended product function | Assign burdens to accepted yams and retain residues and rejects as Waste flows; do not credit avoided disposal without an explicit scenario. |  |
| `allocation_saleable_downgrade` | downgraded yams sold as intended product | Declare all intended outputs and use a justified physical or economic allocation only when subdivision is impracticable; report basis and sensitivity. | `mass-balance-identity` |
| `allocation_seed_retention` | internally retained planting material | Record an internal Product-flow transfer and burden decision; prevent the same tuber mass and burden from being both current output and free next-cycle input. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_energy_inputs` | cultivation, harvest, conditioning | planting material, fertilizer products, diesel, electricity | invoice, issue log, meter, product analysis | date, identity, quantity, unit, analysis, process, plot or lot | reconcile purchases and issues; preserve physical products before conversion | native unit and kg nutrient | each event | complete crop cycle | contributing farm and plots | sum by product and process, then normalize | invoices, labels, meter and issue logs |
| `cp_water_records` | cultivation and conditioning | irrigation water, wash water, wastewater | meter, pump log, vessel count, balance | source, date, volume or mass, destination | meter preferred; otherwise calibrated pump-time or vessel count | m3 or kg | each event | crop cycle and conditioning | field and conditioning area | sum by source and destination | calibration and balance check |
| `cp_field_area_and_yield` | cultivation | area occupation and yield | field map, plot register, harvest ticket | plot, area, dates, harvest-ready mass | match surveyed area to plot harvest | ha, date, kg | each plot and harvest | complete crop cycle | every contributing plot | include only plots entering package | map, register, calibrated scale |
| `cp_crop_mass_transfers` | all nodes | intermediate and accepted yam masses | scale and transfer log | time, origin, destination, gross, tare, net, lot, state | calibrated weighing at each hand-off | kg | each lot | harvest through hand-off | all contributing lots | sum by state and reconcile | calibration and traceability |
| `cp_reject_and_loss_records` | harvest, conditioning, grading | damaged tubers, residues, downgraded yams, rejects | sorted-bin weights and disposition logs | role, reason, grade, mass, destination, lot | weigh every separated state | kg | each lot | harvest through grading | all contributing lots | sum separately by identity and destination | scale, inspection, receiving evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | attributable amount × 1,000 / net accepted-yam mass | attributable amount; accepted mass | amount per 1,000 kg reference product | `mass-balance-identity` |
| `calc_nutrient_equivalent` | fertilizer inputs | physical fertilizer mass × declared nutrient fraction; keep N, P2O5, and K2O separate | product mass; analysis | kg nutrient |  |
| `calc_land_intensity` | field area | contributing area × 1,000 / harvest-ready tuber mass from the same plots | ha; kg tubers | ha·crop_cycle per 1,000 kg tubers | `iita-yam-yield-2020` |
| `calc_direct_n2o` | direct soil N2O | apply selected direct N2O-N factor, then multiply by 44/28 | kg N input; factor | kg N2O | `ipcc-2006-managed-soils-n2o` |
| `calc_node_mass_balance` | harvest, conditioning, grading | input yam mass = yam Product outputs + yam Waste outputs + stock change + documented loss | transfer, reject, and stock records | residual and completeness flag | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and intermediate states | Preserve species or group, cultivar where known, lot, grade, and state; never merge other tuber crops into yam output. | lot records and buyer specification |
| `dq_temporal` | foreground records | Use one reporting period covering one complete crop cycle and every included harvest, conditioning, and grading event; no replacement or termination event occurs. | dated field and transfer records |
| `dq_mass_balance` | transfer nodes | Reconcile accepted, downgraded, rejected, residue, wastewater, loss, and stock-change states without double counting. | node reconciliation |
| `dq_conditional_routes` | irrigation, washing, powered operations | Record zero only after confirming the operation did not occur. | operation log and meter or invoice |
| `dq_range_use` | amount ranges | Use ranges as screens; actual foreground records determine reported values, and regional examples are not universal limits. | range exception review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference output shall be exactly 1,000 kg net accepted Yams flow with every required qualifier declared. |  |
| `validate_node_linkage` | process graph | Cultivation, harvest, conditioning, and grading transfer rows shall match by lot and mass basis. | `mass-balance-identity` |
| `validate_grade_completeness` | grading | Every incoming tuber mass shall be accepted, downgraded, rejected, stock change, or documented loss with a destination. | `fao-yam-postharvest`; `mass-balance-identity` |
| `validate_conditional_inputs` | irrigation, washing, electricity, diesel | Zero is conforming only when records show the relevant operation or carrier was absent. |  |
| `validate_range_denominators` | all ranges | Each bound shall use its stated field, process-output, nitrogen-input, or reference-flow denominator; conditional ranges apply only when active. |  |
| `validate_no_extended_boundary` | dataset boundary | Curing, extended storage, packaging, and post-gate transport shall be excluded or represented as explicit downstream processes. | `fao-yam-postharvest` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm production package suitable for reviewed `secondary_dataset` or `background_dataset` publication |
| downstream_use | Attributional process and lifecycle-model construction for fresh whole yams at farm gate |
| allowed_use | The declared geography, crop cycle, management regime, conditioning route, and grade |
| excluded_use | Seed-yam production; other tuber crops; processed, packaged, or stored yam chains; retail and consumption |
| required_metadata | geography; site and plot coverage; crop dates; species; cultivar where known; seed source; irrigation status; input products; harvest method; washing status; grade; destinations; allocation |
| required_quality_disclosure | record coverage; measured versus estimated shares; calibration; range exceptions; mass-balance residuals; unresolved UUIDs; source representativeness |
| update_trigger | Changed boundary, flow identity, market state, methodology source, process topology, allocation decision, or evidence invalidating a range or rule |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-yam-postharvest` | official_guidance | FAO, *Yams: Post-harvest Operations*, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Yams.pdf; FAO crop profile, https://www.fao.org/4/x5014e/X5014e0f.htm | maturity, careful lifting, conditional washing and drying, damage removal, grading, route decomposition |
| `fao-quality-declared-yam-planting-material` | official_guidance | FAO, *Quality declared planting material — protocols and standards for vegetatively propagated crops*, https://www.fao.org/4/i1195e/i1195e00.pdf | seed-yam and sett identity and quality context |
| `iita-yam-yield-2020` | extension_guidance | IITA, *IITA BIP team achieves 23 tons per hectare yield for yam in Nigeria* (2020), https://iita.org/news-item/iita-bip-team-achieves-23-tons-per-hectare-yield-for-yam-in-nigeria/ | Nigerian regional yield example, crop duration, cultivation operations |
| `ipcc-2006-managed-soils-n2o` | method_factor | IPCC, *2006 Guidelines for National Greenhouse Gas Inventories*, Volume 4, Chapter 11 | direct managed-soil N2O method and factor uncertainty |
| `mass-balance-identity` | method_factor | Conservation of mass applied at each declared process node | transfers, reference identity, node reconciliation |
