---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.horses
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Horses

## 1. Scope and Applicability

This PCR covers living horses (*Equus caballus*) at a producing breeder or rearing-farm handover, including foals and older horses. It excludes asses, mules, hinnies, horse meat, hides, slaughter, and riding, transport or work services after producer handover. A horse destined for later work remains a live-animal product at the producer gate; its subsequent service is not co-output here. Breeder, foaling and young-horse rearing stages are included only where operated. Purchased breeding stock or young horses enter with prior upstream burden once. Record breed, sex, age/class, intended use, measured live mass, count, husbandry mode, actual gate and period.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.horses` |
| classification_refs | CPC 3.0 `02131`, Horses |
| covered_products | Living horses, including producer-breeder-gate foals and producer-farm-gate older horses |
| excluded_products | Asses, mules, hinnies, dead horses, meat, hides, slaughter inputs as reference and downstream horse services |
| representative_product | Living horse measured by live mass at the declared producing gate |
| production_route | Managed biological production of breeding mares/stallions and foals when operated, with conditional rearing of young horses. Pasture/grazing and stabled feed-supported routes share the biological parent but differ in forage/feed, water, housing energy, manure placement and monitoring; they may coexist across periods, so record the split rather than assign a route label alone. Independent live gathering, condition check and handover follows the operated producer stage. Foal breeder-gate and older horse rearing-farm-gate final outputs are alternative handovers for a lot. |
| market_state | Alive, unprocessed, with age/class, sex, purpose and condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living horse at the producing breeder or rearing-farm gate |
| How much | 1 kg measured live weight; report head count and class-specific kg per horse |
| How well | Alive and unprocessed; breed, sex, age/class, intended purpose and condition recorded |
| How long or cycle | Declared breeding season, foaling cohort or rearing cycle; allocate shared breeder/asset burdens over actual service periods |
| reference_flow_link | `live_horses_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live horses at producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Breed; sex; foal/young/adult age class; purpose; live condition; head count; measured mass; weighing protocol; breeder or rearing-farm producer gate; place and cycle |

The two confirmed platform candidates terminate at slaughter/plant rather than this producing gate; neither can be bound to this broad reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | Reference and live transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh whole lots or representative horses by age/class and reconcile head count; never convert count to kg without measured class-specific mean mass. |
| `herd_count` | Breeder and rearing stock | Count | horses | Reconcile opening, purchased, foaled, transferred, sold, dead and closing animals by cohort and period. |
| `service_period` | Breeders and shared assets | Time | days or seasons | Index breeding, foaling and rearing periods, mare/stallion replacement and shared-service time before assigning burdens. |
| `manure_mass` | Manure product/waste | Mass | kg | Keep exported usable manure, treatment waste and grazing deposits as separate destinations; record moisture or as-received basis. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Opening breeding herd or young horses received at first operated node, with origin, age, count, measured mass and inherited burden |
| starting_condition_role | Foreground opening herd or upstream Product input, not a zero-burden animal by assumption |
| product_classification_scope | CPC 3.0 `02131` live horses only |
| recursive_input_rule | Link purchased live horses to one upstream dataset at their true preceding gate; do not rebuild that same stage recursively or count an internal foal transfer as a second final product. |
| upstream_dataset_requirement | Match upstream feed, purchased horses, veterinary materials, water, energy and services by actual supplier/gate, property and geography. |
| disclosure | Operating breeder/rearing nodes, pasture and stabling shares, breeding seasons and replacement, shared assets, all live output gates, deaths and manure destinations. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product` | All routes | End at the producing breeder or rearing-farm live-horse handover. Slaughter, meat/hides and post-sale work, riding or transport services are downstream and excluded. | `un-cpc-2025`; `fao-equine-husbandry` |
| `boundary_breeder` | Breeding route | Include mare/stallion upkeep, reproduction, foaling and foal care only when operated; incoming purchased horses retain supplier burden, and breeder periods/culled live horses are reported separately. | `fao-equine-husbandry` |
| `boundary_route` | Pasture and stabled routes | Record feed/forage, grazing land, utilities, veterinary care, housing and manure placement for actual mode and period; multiple modes may coexist rather than one mode being universal. | `fao-equine-husbandry`; `woah-working-equids` |
| `boundary_shared` | Assets and manure | Assign shared stables, fencing, water systems and handling equipment by documented horse-days, occupied capacity or metered service across actual nodes/periods; record manure pathways without double counting. | `fao-equine-husbandry`; `ipcc-livestock-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder` | Maintain breeder herd and produce live foals | conditional | Operated mare/stallion breeding and foaling; otherwise use purchased young-horse dataset | Managed biological production, seasonal mare/stallion and foal obligations | per kg live foals leaving breeder |
| `rearing` | Rear foals and young horses | conditional | Older horse producer-gate route | Managed biological growth, with pasture/stable inventory delta | per kg live horses leaving rearing |
| `handover` | Gather, assess and hand over living horses | required | Final breeder-gate foal or rearing-farm older horse route | Independent live capture and producer gate measurement | per kg accepted live horse reference |

Gathering is a separate responsibility after biological production: it identifies accepted living horses at the actual handover, reconciles handling losses, and cannot manufacture a slaughter-plant gate. The two final producer routes are mutually exclusive for each lot. Breeder seasons, foaling events, rearing cohorts, replacement/culling and asset service periods are explicitly indexed.

### Process: Maintain breeder herd and produce live foals (`breeder`)

#### Inputs

##### Product flows

###### Breeding mares and stallions entering herd (`breeder_stock`)

Record purchased breeding horses at measured live mass and inherited upstream burden; opening owned stock is a declared starting condition.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: measured received live mass by age and sex Original collection denominator kind: process_output.

- Selected flow: Live breeding horses (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional Breeding mares and stallions entering herd completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder forage and concentrate feed (`breeder_feed`)

Record delivered feed, own forage and pasture intake separately, without counting grazed herbage as purchased feed.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: feed delivered less stock change and recorded losses Original collection denominator kind: process_output.

- Selected flow: Equine feed and purchased forage (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Range: Provisional Breeder forage and concentrate feed completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water for breeding herd (`breeder_water`)

Collect drinking and stable-cleaning water by use; pasture rainfall is not a purchased Product input.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: metered or recorded supplied water Original collection denominator kind: process_output.

- Selected flow: Supplied herd water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional Supplied water for breeding herd completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Veterinary medicines and care supplies for breeders (`breeder_care`)

Record medicines and care supplies entering the breeder node from treatment logs; external professional service is documented by provider and period.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: measured product quantities by medicine and care material Original collection denominator kind: process_output.

- Selected flow: Equine veterinary supplies (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_health`
- Range: Provisional Veterinary medicines and care supplies for breeders completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy for breeder housing (`breeder_energy`)

Record actual electricity, heat and fuels by carrier and period where breeder housing is operated.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: metered carrier energy Original collection denominator kind: process_output.

- Selected flow: Housing energy carrier (UUID unresolved)
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional Energy for breeder housing completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live foals leaving breeder stage (`live_foals`)

Weigh and count living foals at the breeder handover; distinguish sales from internal transfer to rearing.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: measured accepted foal live mass Original collection denominator kind: process_output.

- Selected flow: Live horse foals, breeder gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Output mass normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-equine-husbandry`

###### Live breeding horses independently sold (`breeder_culls`)

Only living culls actually sold leave as co-product; dead animals and slaughter outputs are excluded.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: measured live mass of sold breeding culls Original collection denominator kind: process_output.

- Selected flow: Live horse culls at breeder gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional Live breeding horses independently sold completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder manure exported as usable product (`breeder_manure_product`)

Record only weighed manure with an evidenced recipient and use; grazing deposits remain in the actual land pathway.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: weighed manure product transferred Original collection denominator kind: process_output.

- Selected flow: Exported horse manure (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional Breeder manure exported as usable product completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Breeder mortalities and discarded manure (`breeder_losses`)

Classify dead horses and manure sent to treatment by mass and destination, separately from usable manure product.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: measured losses by destination Original collection denominator kind: process_output.

- Selected flow: Breeder losses to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional Breeder mortalities and discarded manure completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric biogenic methane from breeder horses to air (`breeder_enteric_ch4_air`)

Calculate horse enteric fermentation separately from manure CH4 using recorded horse-days, class and feed regime with the chosen IPCC method; the UUID only identifies methane to air.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: horse enteric CH4 from class-specific population and period under selected IPCC method Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative enteric CH4 screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biogenic methane from breeder manure to air (`breeder_manure_ch4_air`)

Calculate only for documented manure systems and period-specific IPCC activity/factor selection.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: pathway-specific CH4 calculation from collected manure activity Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional Biogenic methane from breeder manure to air completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide from breeder manure to air (`breeder_manure_n2o_air`)

Use actual managed-manure pathway and direct or indirect N2O method inputs; avoid double-counting pasture soil emissions.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: pathway-specific N2O calculation from collected manure activity Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional Nitrous oxide from breeder manure to air completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia from breeder manure to air (`breeder_manure_nh3_air`)

Report measured NH3 or a separately reviewed pathway estimate; the air-flow UUID is not an emission factor.

Denominator and scope requirements：per kg live foals leaving breeder

Raw quantity and calculation requirements: measured NH3 release or reviewed pathway calculation Original collection denominator kind: process_output.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional Ammonia from breeder manure to air completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live foals
  - Basis: per kg live foals leaving breeder
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Rear foals and young horses (`rearing`)

#### Inputs

##### Product flows

###### Foals or young horses received for rearing (`young_horses`)

Use internal breeder transfer or a purchased young-horse upstream dataset exactly once, with age, count and mass.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: measured received live mass Original collection denominator kind: process_output.

- Selected flow: Live young horses entering rearing (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional Foals or young horses received for rearing completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing forage and concentrate feed (`rearing_feed`)

Record purchased and farm-produced feed and actual grazed forage, separating pasture and housed-management demands.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: delivered feed net of stock change and waste Original collection denominator kind: process_output.

- Selected flow: Horse feed and purchased forage (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Range: Provisional Rearing forage and concentrate feed completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water for rearing horses (`rearing_water`)

Record drinking and cleaning supply by use, meter and source; do not assign a single conditional flow identities group before use is known.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: measured supplied water Original collection denominator kind: process_output.

- Selected flow: Supplied rearing water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional Supplied water for rearing horses completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy for rearing and stabling (`rearing_energy`)

Record carrier-specific lighting, heating, ventilation and care energy where used; pasture route may have different use.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: metered or invoiced energy by carrier Original collection denominator kind: process_output.

- Selected flow: Rearing energy carrier (UUID unresolved)
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional Energy for rearing and stabling completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Veterinary medicines and care supplies for growing horses (`rearing_care`)

Include actual preventive or therapeutic supplies by horse cohort and period; do not infer a universal treatment schedule.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: measured medicines and care materials by cohort Original collection denominator kind: process_output.

- Selected flow: Equine veterinary supplies (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_health`
- Range: Provisional Veterinary medicines and care supplies for growing horses completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live horses leaving rearing (`grown_horses`)

Measure living adult or older young horses before independent handover, with age/purpose and count.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: measured live mass entering handover Original collection denominator kind: process_output.

- Selected flow: Live horses at rearing exit (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Output mass normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-equine-husbandry`

###### Usable rearing manure exported (`rearing_manure_product`)

Record independently transferred usable manure by weighed mass, buyer and destination.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: weighed saleable manure removed Original collection denominator kind: process_output.

- Selected flow: Exported horse manure (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional Usable rearing manure exported completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rearing deaths and manure for treatment (`rearing_losses`)

Record deaths and discarded manure by date, mass and destination; grazing deposits are not exported waste.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: measured losses and manure removed Original collection denominator kind: process_output.

- Selected flow: Rearing losses to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional Rearing deaths and manure for treatment completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric biogenic methane from rearing horses to air (`rearing_enteric_ch4_air`)

Calculate horse enteric fermentation separately from manure CH4 using recorded horse-days, class and feed regime with the chosen IPCC method; the UUID only identifies methane to air.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: horse enteric CH4 from class-specific population and period under selected IPCC method Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative enteric CH4 screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biogenic methane from rearing manure to air (`rearing_manure_ch4_air`)

Calculate only for the actual managed-manure pathway and collected IPCC activity inputs.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: pathway-specific CH4 calculation from rearing manure records Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional Biogenic methane from rearing manure to air completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide from rearing manure to air (`rearing_manure_n2o_air`)

Separate direct and indirect managed-manure N2O from grazed-soil attribution using documented paths.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: pathway-specific N2O calculation from rearing manure records Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional Nitrous oxide from rearing manure to air completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia from rearing manure to air (`rearing_manure_nh3_air`)

Include measured NH3 or a separately reviewed manure-pathway method, not a borrowed CH4/N2O factor.

Denominator and scope requirements：per kg live horses leaving rearing

Raw quantity and calculation requirements: measured NH3 or separately reviewed calculation Original collection denominator kind: process_output.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional Ammonia from rearing manure to air completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live horses leaving rearing
  - Basis: per kg live horses leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Gather, assess and hand over living horses (`handover`)

#### Inputs

##### Product flows

###### Living horses entering independent handover (`horses_to_handover`)

Input is either breeder-gate foals or reared horses for a final lot, with prior burden transferred once.

Denominator and scope requirements：per kg accepted live horse reference

Raw quantity and calculation requirements: reconciled count times measured mean live mass Original collection denominator kind: reference_flow.

- Selected flow: Live horses entering handling (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional Living horses entering independent handover completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg accepted live horse
  - Basis: per kg accepted live horse reference
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted living horses handed to buyer (`live_horses_handover`)

Count and weigh accepted live horses at the declared producing breeder or rearing-farm gate.

Raw reference-output records: measured accepted live mass Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Live horses at producer handover
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Output mass normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg accepted live horse
  - Basis: per kg accepted live horse reference
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-equine-husbandry`

##### Waste flows

###### Horses dying or rejected during handover (`handover_losses`)

Record rejected or dead horses by mass/count and actual destination; do not call slaughter input a producer product.

Denominator and scope requirements：per kg accepted live horse reference

Raw quantity and calculation requirements: measured unaccepted horse mass by destination Original collection denominator kind: reference_flow.

- Selected flow: Unaccepted horses for treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional Horses dying or rejected during handover completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg accepted live horse
  - Basis: per kg accepted live horse reference
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | All operations | Subdivide measured breeder, rearing and handover inputs and outputs first; do not allocate burdens already tied to a specific horse cohort or node. | `fao-equine-husbandry` |
| `allocation_outputs` | Foals, live breeder culls, older live horses and usable manure | Enumerate intended product output, mass, destination and gate. Where shared burden cannot be subdivided, use measured physical causality (horse-days, service use or feed demand); if not defensible, use same-period economic values with prices and sensitivity. Dead horses and disposal manure are waste, not product credits. | `fao-equine-husbandry`; `ipcc-livestock-2019` |
| `allocation_periods` | Multi-season breeding and rearing | Assign mare/stallion upkeep, breeding/gestation, foaling, weaning, rearing, replacements and live culls to benefiting cohorts over their recorded periods; a transferred foal passes its prior burden once. | `fao-equine-husbandry` |
| `allocation_shared` | Shared stables, pasture/fencing, water and handling | Assign each asset or service once to consuming horses/nodes/periods by measured use, occupied horse-days or capacity-days; disclose the chosen key and sum of shares. | `fao-equine-husbandry` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `breeder`, `rearing`, `handover` | Horse stock and live mass | herd and buyer logs | opening/received/foaled/sold/dead counts; horse-days by class; breed, sex, age, purpose; measured weights; gate; date | count each movement and weigh lot or age-class sample; Raw aggregation requirements: stock balance, class-weighted live mass and class-specific horse-days. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | horses; horse-days; kg | each movement and period | complete breeding/rearing cohort | each producer gate | per reference flow | animal register, scales, buyer receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed` | `breeder`, `rearing` | Feed and pasture | feed invoices and grazing log | deliveries; opening/closing feed stock; own forage; pasture area/days; horse-days | weighed receipts, feed ledger, grazing records; Raw aggregation requirements: delivery less stock change and waste, by herd. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; ha-days; horse-days | each receipt and period | full herd season/cohort | all houses and paddocks | per reference flow | invoices, scale and field log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utilities` | `breeder`, `rearing` | Water, electricity and fuels | meter and fuel log | source, use, meter start/end, carrier and asset consumer | meter read or invoice with causal shared-use key; Raw aggregation requirements: difference readings, unit conversion, one service allocation. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg water; kWh; MJ | meter interval | all operated periods | all water and energy connections | per reference flow | meter images, receipts, asset log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_health` | `breeder`, `rearing` | Medicines and veterinary care | treatment and purchase log | medicine/material, dose/mass, horse cohort, service provider, date | prescription and inventory reconciliation; Raw aggregation requirements: product totals by cohort; disclose external service. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; visits | each event | full horse cohort | all treated horses | per reference flow | veterinary record, invoice; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | `breeder`, `rearing`, `handover` | Manure, deaths and emissions | manure, mortality and monitoring log | manure management, grazing deposition, exported and discarded mass, volatile solids, direct gas monitoring, dead count/mass, destination | weigh/sample, record route and observed gas when claimed; Raw aggregation requirements: reconcile destinations, select pathway-specific method once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; horse-days | each event/period | all operated herd periods | stable, paddock, treatment | per reference flow | manure analysis, field and disposal record; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_live_mass` | Live-horse transfer | live mass = reconciled count × measured mean horse mass by breed/sex/age class; use whole-lot scale when available | count, sampled weights, scale | kg and kg/horse | `fao-equine-husbandry` |
| `calc_herd` | Herd stock | opening + purchased + foaled − sold − dead − internal removals = closing horses, by cohort and period | herd movements | count balance | `fao-equine-husbandry` |
| `calc_enteric` | Horse enteric CH4 | Calculate horse enteric methane from class-specific horse-days and the selected IPCC equine method, separately from manure CH4; disclose the method/factor and period. | herd horse-days, class and feed regime | enteric CH4 to air | `ipcc-livestock-2019` |
| `calc_gas` | Manure CH4, N2O, NH3 | Calculate manure CH4/N2O only from actual pathway and collected IPCC inputs; NH3 requires measurement or separately reviewed pathway factor. A flow UUID is identity, never an emission factor. | manure and monitoring record | manure-derived speciated air emissions | `ipcc-livestock-2019` |
| `calc_shared` | Shared infrastructure | Allocate one measured service burden across breeder and rearing nodes/periods by metered use or documented horse-days/capacity-days; shares must sum to one | service, consumers, periods and key | node/period burden | `fao-equine-husbandry` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference and transfers | Preserve horse (not other equine) identity, breed, sex, age/class, count, measured live mass, purpose and actual producer gate. | horse register and buyer receipt |
| `dq_period` | Breeder and rearing | Link breeding, foaling, weaning, replacement, cull, feed, manure and asset use to complete dated periods. | herd and asset logs |
| `dq_route` | Grazing and stabled routes | Support mode-specific feed, pasture, housing utilities, care and manure records; record mixed periods explicitly. | paddock, stable and treatment logs |
| `dq_complete` | Inputs and outputs | Reconcile live transfers, feed, water, energy, veterinary supplies, live culls, death and manure destinations; disclose omissions. | reconciliation sheets |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | Final live horse | Reject missing measured kg, reconciled count, age/class, purpose or declared breeder/rearing-farm producer gate. Slaughter/plant candidate UUIDs are not producer-gate reference identity. | `un-cpc-2025` |
| `validate_species` | Classification | Horse-only scope; reject ass, mule/hinny, meat/hides or downstream work/transport service as the live-horse reference. | `un-cpc-2025` |
| `validate_route` | Managed production | Verify operated breeder/rearing nodes and documented pasture/stable deltas; breeder-gate foal and rearing-farm older-horse final outputs cannot both be counted for one internal lot. | `fao-equine-husbandry`; `woah-working-equids` |
| `validate_outputs` | Product, waste and emissions | Reconcile foals, breeder culls, older live horses, usable manure, dead horses and treatment manure at each gate; document allocation and avoid duplicate live or manure outputs. | `fao-equine-husbandry`; `ipcc-livestock-2019` |
| `validate_period_asset` | Multi-period/shared burden | Check breeding, foaling, weaning, rearing and replacement periods and service keys across all consuming nodes, with shares summing once. | `fao-equine-husbandry` |
| `validate_gas` | Enteric and manure emissions | Keep enteric CH4 and manure CH4 as separate activity and calculation paths. Require class-specific horse-days and selected equine method for enteric CH4; actual manure destination and pathway-specific IPCC inputs for manure CH4/N2O; measured/reviewed NH3 method. Do not infer a quantity from a fixed flow UUID. | `ipcc-livestock-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground producing-farm data package for living horses |
| downstream_use | `secondary_dataset` or `background_dataset` in reviewed process/lifecyclemodel assembly |
| allowed_use | Live horses at a matching breeder or rearing-farm producer gate with concrete verified reference identity |
| excluded_use | Slaughter-plant input, meat/hide, donkey/mule, horse work service or unmeasured count-to-mass conversion |
| required_metadata | Breed, sex, age/class, purpose, live count and kg, producer gate, site, breeder/rearing periods, grazing/stabling, manure destinations, co-products and shared asset keys |
| required_quality_disclosure | Weight/count balance, evidence gaps, provisional Range screens, upstream identity and any unresolved UUID |
| update_trigger | Changed horse classification, route, producer gate, UUID evidence, manure method or reviewed rule |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | `official_guidance` | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Horse versus other equine and downstream product boundary |
| `fao-equine-husbandry` | `extension_guidance` | [FAO Chapter 5: Horses, donkeys and mules](https://www.fao.org/4/t0690e/t0690e07.htm) | Horse care, foaling, stable/grazing, feed, water and handover context |
| `woah-working-equids` | `official_guidance` | [WOAH Chapter 7.12: Welfare of working equids](https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en_chapitre_aw_working_equids.htm) | Husbandry and welfare interfaces, not service as product |
| `ipcc-livestock-2019` | `method_factor` | [2019 IPCC refinement, Vol. 4 Ch. 10](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | Manure pathways and greenhouse-gas method |
