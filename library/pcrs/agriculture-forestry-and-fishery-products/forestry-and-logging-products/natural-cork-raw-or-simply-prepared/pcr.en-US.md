---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.natural-cork-raw-or-simply-prepared
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Natural cork, raw or simply prepared

## 1. Scope and Applicability

This PCR covers one actual lot of raw harvested or simply cleaned, rested, boiled and stabilized natural cork at its declared primary producer handover. Qualify the lot by actual species, virgin/secondary/reproduction harvest, physical form, back/bark inclusion, moisture, grade and gate. Boiling is conditional; raw dispatch is valid without it. Intact irregular harvested bark planks are not geometrically manufactured blocks.

Exclude debacked cork, roughly squared or shaped blocks/plates/strips, crushed/granulated/ground cork, waste cork as the reference product, agglomerates, stoppers and other manufactured articles. These downstream categories are not concealed inside simple preparation. The reference is not a fixed quality-equivalent mix of raw and prepared states.

Included source responsibilities depend on actual production records: recurrent peeling of living trees, a documented coppice wood/bark extraction interface, or an already-harvested purchased lot. Timber felling is never the default for recurrent bark harvest. The stand remains a biological stock after peeling; neither whole-tree mass nor presumed carbon storage becomes the bark output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.natural-cork-raw-or-simply-prepared |
| classification_refs | cpc:3.0:03220 |
| covered_products | Qualified natural cork in raw or simply cleaned/rested/boiled state, with unremoved back and no manufactured geometry |
| excluded_products | Debacked or roughly squared/shaped cork; granules/powder; reference waste cork; agglomerates; stoppers; finished cork articles |
| representative_product | One actually qualified bark-plank or irregular cork lot at declared producer handover |
| production_route | Attributable stand management and actual bark extraction, followed only by actual transfer/rest, simple boiling/stabilization, grading and conditional packaging; already-harvested purchases start at their disclosed incoming interface |
| market_state | Raw or simply prepared primary cork; actual state, grade and producer gate required |

Managed production parent is stand_management. Relative to recurring living-tree bark production, an actual coppice route changes source ownership, harvested-wood feed and independently delivered wood attribution. Its removal parent is bark_stripping; it does not create a second mandatory removal node. For each source portion, select the actual recurrent-peeling or coppice interface from harvest and wood/bark handoff records. Actual separate portions may coexist only with separate ledgers. Purchased raw cork does not imply either source route was performed again.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One actual qualified lot of natural cork at declared primary producer handover |
| How much | 1 kg net as received, excluding transport packaging |
| How well | Declared species, harvest type, allowed physical preparation state, unremoved back/bark inclusion, moisture and acceptance grade |
| How long or cycle | Actual harvest cohort, stand phases, extraction campaign, yard/boiling runs, storage periods and dispatch period; no universal stripping interval |
| reference_flow_link | `cork_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Qualified raw or simply prepared natural cork at declared producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; source stand and lot; virgin/secondary/reproduction harvest; actual recurrent-peeling/coppice/purchased route; actual raw/rested/boiled state; form; back/bark inclusion; net as-received mass; moisture method and basis; grade; gate; source burden coverage; harvest and reporting periods |

Each foreground package must disclose these qualifiers. One actual lot state supplies the final reference. Intermediate inputs/outputs keep their own measured amount, moisture and state; no default yield or universal state conversion applies.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net weighing at the accepted handover; exclude packaging and other grades. Every inventory amount uses per 1 kg reference flow and the matched accepted-lot denominator from cp_handover. |
| `state_mass` | cork inputs and intermediate outputs | Mass | kg | Record moisture on a stated wet/dry basis and match source lot, date and back inclusion before reconciling wet mass, dry cork matter and water; no universal density, expansion or dry-to-wet factor. |
| `energy_carriers` | energy umbrella cards | Energy | MJ | Preserve fuel amount/heating-value basis, metered electricity and supplied heat separately; document conversions and never convert human labour or native service units into energy. |
| `service_units` | service and transport exchanges | actual service property | actual service unit | Hours on service cards cover only measured hour-denominated services; actual tonne-km, area or asset purchases retain their own concrete exchanges and verified support, not invented hour equivalents. |
| `water_balance` | simple boiling and rest | Mass | kg | Distinguish supplied/direct abstraction, circulation, retained cork water, liquid exits, actual vapour and dissolved/suspended cork matter; wet-mass change alone is not evaporation. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified managed stand/cohort, actual natural bark source or upstream already-produced cork/wood lot at its measured incoming handoff |
| starting_condition_role | source production or already-produced technosphere input, chosen from actual source ownership |
| product_classification_scope | Natural cork raw or simply prepared; downstream debacked/shaped/granulated cork and manufactured articles excluded |
| recursive_input_rule | An already-produced same-category cork input retains its actual incoming state, verified upstream coverage and measured quantity; do not recursively regenerate its prior bark harvest or duplicate natural resource removal |
| upstream_dataset_requirement | Require source production and extraction coverage for purchased bark/wood/cork; a missing burden is a disclosed data gap, not a zero-impact feed |
| disclosure | Actual operation activation, source portions and owners, contributing stands/sites, phase/campaign/run/stock periods, service boundaries, final state and actual gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `source_ownership` | source and removal | Select exactly one source representation for the same bark portion: managed production feed, already-produced coppice wood/bark feed, or actual elementary natural bark resource. Own actual felling once when present; retain the remaining living-tree stock without treating it as harvested cork. | `fao-cork-primary-handling` |
| `operation_activation` | process map | Activate only actual owned pre-gate operations; purchases may bypass owned stand/removal/rest/boiling. qualification_handover always owns final weighing and acceptance. Preserve measured handoffs when operations are bypassed. | |
| `primary_gate` | primary preparation | Include actual simple rest/boiling/stabilization and acceptance; do not include later debacking, shape manufacturing, grinding, stopper making or distribution. Raw output does not require boiling. | `unsd-cpc3-notes`; `apcor-cork-transformation` |
| `source_delta` | stand_management and bark_stripping | Recurrent-peeling and coppice interfaces are exclusive for each source portion, with actual tree/wood/bark inventories and wood-output ownership proving the delta; no unsupported parent or default felling. | `fao-cork-primary-handling` |
| `period_sites` | complete route | Link establishment, maintenance, recurring harvest, replacement/termination where actual, yard stock and dispatch periods to contributing sites; reconcile opening/closing bark and cork stock. Separate burden shares by cohort and period, never by a universal harvest cycle. | |
| `shared_owner` | assets and services | Enumerate every shared road, yard, boiler or equipment consumer and period; attribute from recorded service use once. Inclusive outsourced operations cannot duplicate their embodied utilities or direct emissions. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_management` | Managed cork stand production | conditional | Actual attributable stand establishment/maintenance is owned inside the declared boundary | managed biological production and phase-specific bark handoff; alternative production delta recorded per source | measured attributable unstripped bark, not whole tree mass |
| `bark_stripping` | Bark harvest and resource removal | conditional | Actual recurrent peeling or declared coppice wood/bark extraction is owned | independent harvest/resource removal between source production and conditioning, with actual technology route delta | measured raw bark at removal handoff |
| `rest_and_transfer` | Primary open-air rest and pre-gate transfer | conditional | Actual pre-gate rest/storage/handling occurs inside owned boundary | usable harvested bark to rested bark stabilization, stock-period and site tracking | measured rested cork lot |
| `simple_boiling` | Simple boiling and stabilization | conditional | Actual allowed simple boiling/stabilization occurs before gate | raw/rested-to-prepared primary conditioning in declared batch/continuous run | measured prepared cork lot |
| `qualification_handover` | Grading, presentation and producer handover | required | Every reference lot requires qualified acceptance at its actual declared gate | grading and conditional packaging and presentation of actual raw/rested/prepared state; final handover | 1 kg accepted reference product |

Harvest/removal is independent because it transforms attributable bark in the source context into collected raw cork. Rest and boiling instead own subsequent physical state and water changes. Their activity obligations share these declared nodes rather than creating duplicate operations. Production mode is actual extraction campaign and yard/boiling/qualification batch or continuous run; link startup, cleaning, changeovers, inputs, outputs and stocks to each actual run.

All cards below are conditional on the actual identified exchange, not a compulsory recipe. An umbrella may resolve to zero, one or several concrete exchanges in the foreground dataset, each with actual identity and verified support. Keep common energy/material supplies in one card per node; do not split merely for vocabulary.

Every non-reference Range is a provisional QA screen (`reasoned_estimate`), not measured evidence, an allowed boundary, a quantity default or a published empirical range. Upper 10 kg allows broad supply/packaging screening; 20 kg allows coarse cork-feed/loss/emission screening; 100 kg covers coarse water or wood interfaces; 1000 MJ or h and 10000 m2a are deliberately wide order-of-magnitude flags for intensity/services/land. Zero allows absence of an actual conditional exchange. Document outliers for review; never clip, replace foreground records or invent a value to fit a screen. Known service-native units need their own screen. Reference Range 1..1 is the declared normalization identity only, not harvest yield.
### Process: Managed cork stand production (`stand_management`)

#### Inputs

##### Product flows

###### Stand establishment and maintenance materials (`stand_materials`)

Actual seedlings, amendments, protection materials and maintenance supplies attributed to the declared cork stand phases; resolve each actual material, not an assumed fertilizer recipe.

- Selected flow: Stand establishment and maintenance materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stand`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Stand management energy (`stand_energy`)

One conditional umbrella for recorded fuels, electricity or heat. Preserve carriers and original units before documented conversion to MJ; no labour or asset-service hours in this card.

- Selected flow: Stand management energy
- Flow property / unit: Energy / MJ
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stand`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Stand management and shared asset services (`stand_services`)

Actual attributable nursery, maintenance, access-road or equipment service hours; enumerate asset consumers and periods. An inclusive purchased service excludes duplicate included fuel, materials and exhaust.

- Selected flow: Stand management and shared asset services
- Flow property / unit: Time / h
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stand`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

No actual exchange is presumed for this role; disclose any evidenced boundary crossing with its proper concrete type.

##### Elementary flows

###### Cork stand land occupation (`stand_land`)

Record actual land class, area and time attributable to cork and other stand products. m2a is area-time, not bark yield; transformation events remain separately identified concrete exchanges when actual.

- Selected flow: Cork stand land occupation
- Flow property / unit: Area-time / m2a
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stand`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10000
  - Unit: m2a
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Attributable unstripped cork bark at stand handoff (`standing_bark`)

Only the attributable bark production handoff to stripping, not the net mass of the whole living tree. Record measured bark amount and cohort; remaining tree stock is not an annual product output.

- Selected flow: Attributable unstripped cork bark at stand handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stand`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Other intended stand goods at actual handoff (`stand_other_goods`)

Enumerate actual independent timber, fuelwood or other intended goods and their handoffs at the responsible stand event; do not turn retained biomass or litter into a sold co-product.

- Selected flow: Other intended stand goods at actual handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stand`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

No actual exchange is presumed for this role; disclose any evidenced boundary crossing with its proper concrete type.

##### Elementary flows

###### Direct stand-management substance emissions (`stand_direct_emissions`)

Conditional reported substance-specific emissions to actual media from included interventions. Require substance, compartment and calculation evidence; no automatic biological carbon uptake, avoided-emission or whole-tree sequestration credit.

- Selected flow: Direct stand-management substance emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stand`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Bark harvest and resource removal (`bark_stripping`)

#### Inputs

##### Product flows

###### Managed bark production feed (`managed_bark_feed`)

Match standing_bark for the same measured bark cohort when its upstream production is owned or supplied. No second elementary bark removal for this same portion.

- Selected flow: Managed bark production feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stripping`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Coppice wood carrying cork at extraction interface (`coppice_wood_feed`)

Only an actual coppice harvested-wood/bark interface, with wood quantity, source production and felling owner disclosed. This is not a default whole-tree feed for recurrent standing-tree peeling.

- Selected flow: Coppice wood carrying cork at extraction interface
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stripping`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Bark stripping and extraction energy (`stripping_energy`)

One actual fuel/electricity/heat umbrella for stripping and the declared extraction interface; manual peeling does not imply powered felling or metabolic inventory.

- Selected flow: Bark stripping and extraction energy
- Flow property / unit: Energy / MJ
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stripping`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Stripping equipment and extraction services (`stripping_services`)

Actual allocated equipment or extraction service hours at the source interface; disclose whether any felling is owned or already embedded in purchased wood.

- Selected flow: Stripping equipment and extraction services
- Flow property / unit: Time / h
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stripping`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

No actual exchange is presumed for this role; disclose any evidenced boundary crossing with its proper concrete type.

##### Elementary flows

###### Natural-source cork bark removed (`natural_bark_resource`)

Use only actual natural-source removal not already represented by an upstream managed or harvested product with declared wet/dry basis and source. Exclude any bark portion already represented by managed_bark_feed or coppice_wood_feed.

- Selected flow: Natural-source cork bark removed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stripping`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Raw harvested cork at removal handoff (`raw_bark`)

Measured as-received bark planks or irregular virgin/secondary/reproduction cork at stripping handoff, with back/bark inclusion and source lot. Internal raw feed is never fixed to the final 1 kg.

- Selected flow: Raw harvested cork at removal handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stripping`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Other intended goods at removal handoff (`stripping_other_goods`)

Actual independently delivered wood from the declared coppice interface or other intended goods only; match source ownership and do not duplicate stand_other_goods at a second handoff.

- Selected flow: Other intended goods at removal handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stripping`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Extraction waste transferred to actual recipient (`stripping_waste`)

Actual discarded bark fragments or incidental material crossing the waste boundary, identified by condition and recipient. Material remaining at source is disclosed in the removal ledger, not invented off-site waste.

- Selected flow: Extraction waste transferred to actual recipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stripping`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Direct extraction substance emissions (`stripping_emissions`)

Conditional actual on-site exhaust or other measured substance emissions with named pollutant and receiving compartment; no generic exhaust UUID or duplicate emissions of an inclusive service.

- Selected flow: Direct extraction substance emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_stripping`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Primary open-air rest and pre-gate transfer (`rest_and_transfer`)

#### Inputs

##### Product flows

###### Raw cork entering actual rest and transfer (`rest_cork_feed`)

Measured raw bark from raw_bark or a purchased already-harvested lot; declare incoming moisture and preparation state and upstream coverage once.

- Selected flow: Raw cork entering actual rest and transfer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_rest`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Rest-yard and pre-gate transfer energy (`rest_energy`)

One conditional recorded fuel/electricity/heat umbrella for actual owned handling and yard operations; no default powered drying or later distribution.

- Selected flow: Rest-yard and pre-gate transfer energy
- Flow property / unit: Energy / MJ
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_rest`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Rest-yard storage and transfer services (`rest_services`)

Actual equipment/yard service hours; transport-service records retain their native service unit and require a separate concrete exchange rather than conversion of tonne-km to hours or MJ.

- Selected flow: Rest-yard storage and transfer services
- Flow property / unit: Time / h
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_rest`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

No actual exchange is presumed for this role; disclose any evidenced boundary crossing with its proper concrete type.

##### Elementary flows

No actual exchange is presumed for this role; disclose any evidenced boundary crossing with its proper concrete type.

#### Outputs

##### Product flows

###### Rested cork at primary handoff (`rested_cork`)

Measured cork lot after actual open-air rest and pre-gate handling, before optional boiling or qualification. Record storage changes and rain uptake separately; no universal resting duration or density expansion.

- Selected flow: Rested cork at primary handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_rest`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Rest-yard rejected material sent as waste (`rest_rejects`)

Actual spoilage, contaminated material or handling loss transferred as waste; record source lot, destination and burden. A saleable downgraded cork lot is not this waste flow.

- Selected flow: Rest-yard rejected material sent as waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_rest`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Water vapour from cork rest to air unspecified (`rest_water_air`)

Only measured or balance-derived water released as water vapour to air unspecified. Rain uptake, drained liquid, dry cork loss and unknown volatiles cannot be relabelled as evaporation; specific known air compartments need their own identity.

- Selected flow: Water vapour from cork rest to air unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_rest`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual direct substance emissions from rest and transfer (`rest_direct_emissions`)

Conditional actual on-site substance emissions from owned fuel or equipment operation, with named substance, particle size/composition when relevant, actual receiving compartment and measured amount or an evidenced activity-factor calculation. Exclude water vapour recorded by rest_water_air and emissions already included in a supplier service. Missing substance or activity evidence is a disclosed gap, not zero or a generic pollutant UUID.

- Selected flow: Actual direct substance emissions from rest and transfer
- Flow property / unit: Mass / kg
- Flow property UUID: 93a60a56-a3c8-11da-a746-0800200b9a66
- Unit group UUID: 93a60a57-a4c8-11da-a746-0800200c9a66
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_rest`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Simple boiling and stabilization (`simple_boiling`)

#### Inputs

##### Product flows

###### Cork entering simple boiling (`boiling_cork_feed`)

Actual measured raw/rested cork when simple boiling is performed before the declared gate; record lot state before treatment. This card is absent for an untreated raw lot.

- Selected flow: Cork entering simple boiling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_boiling`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Supplied boiling and cleaning water (`boiling_supplied_water`)

Metered product water crossing the technosphere supply boundary; document supply state/provider. Recycled bath circulation is not repeated fresh input, and the same supply is not direct elementary abstraction.

- Selected flow: Supplied boiling and cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_boiling`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Simple boiling and stabilization energy (`boiling_energy`)

One actual fuel/electricity/heat umbrella; collect heat and bath records by boiling run including startup/changeover. Do not prescribe a boiling time, temperature, expansion or moisture factor.

- Selected flow: Simple boiling and stabilization energy
- Flow property / unit: Energy / MJ
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_boiling`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Boiler and stabilization services (`boiling_services`)

Attributable boiler/yard service hours if separately supplied. Record shared consumers and run boundaries; inclusive service and separately metered energy cannot own the same burden.

- Selected flow: Boiler and stabilization services
- Flow property / unit: Time / h
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_boiling`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

No actual exchange is presumed for this role; disclose any evidenced boundary crossing with its proper concrete type.

##### Elementary flows

###### Direct water abstraction for simple boiling (`boiling_direct_water`)

Only actual directly abstracted water with source water body, quality and resource compartment. Mutually exclusive with boiling_supplied_water for the same amount.

- Selected flow: Direct water abstraction for simple boiling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_boiling`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Simply boiled and stabilized cork at handoff (`simply_prepared_cork`)

Measured prepared bark planks after actual simple boiling and stabilization, without debacking or geometrical shaping. Declare retained water, lot grade and state before qualification.

- Selected flow: Simply boiled and stabilized cork at handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_boiling`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Spent cork-boiling wastewater transferred for treatment (`boiling_wastewater`)

Actual spent water with dissolved extractives and suspended materials, metered at the treatment recipient. Internal circulation is not an external exit; direct environmental discharge requires separately specified substances and actual receiving media.

- Selected flow: Spent cork-boiling wastewater transferred for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_boiling`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Simple-boiling solid rejects and residues (`boiling_solid_rejects`)

Actual separated dirt, unusable cork and bath residues crossing waste boundary; resolve destination and composition. A recovered saleable material instead becomes an intended product at its actual handoff.

- Selected flow: Simple-boiling solid rejects and residues
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_boiling`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Water vapour from boiling and stabilization to air unspecified (`boiling_water_air`)

Actual water vapour only, separated from liquid blowdown, dissolved extractive removal and retained cork moisture. Use air unspecified only when that actual compartment is declared; no guessed total wet-mass loss.

- Selected flow: Water vapour from boiling and stabilization to air unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_boiling`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Direct simple-boiling substance emissions (`boiling_direct_emissions`)

Conditional named on-site combustion or other pollutant emissions with actual compartment and fuel/control evidence. Bath extractives are not a broad air VOC exchange.

- Selected flow: Direct simple-boiling substance emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_boiling`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Grading, presentation and producer handover (`qualification_handover`)

#### Inputs

##### Product flows

###### Cork lot entering qualification (`handover_cork_feed`)

Measured raw, rested or simply boiled lot from its actual last interface or already-produced purchase; state cannot be inferred from whichever feed has a UUID. Internal feed remains measured, not 1 kg.

- Selected flow: Cork lot entering qualification
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Handover packaging and presentation materials (`handover_packaging`)

One conditional actual packaging-material umbrella for protection, identification and loading presentation; disclose returnable assets, reuse cycles, package losses and recipients. Net cork excludes these materials.

- Selected flow: Handover packaging and presentation materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Qualification and packaging energy (`handover_energy`)

One actual fuel/electricity/heat umbrella for grading, weighing and conditional packing before the gate; downstream stopper making or transport is not owned here.

- Selected flow: Qualification and packaging energy
- Flow property / unit: Energy / MJ
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Qualification and presentation services (`handover_services`)

Recorded grading, weighing and shared equipment service hours with handover boundary; list included utilities and forbid duplicate inputs for an inclusive service.

- Selected flow: Qualification and presentation services
- Flow property / unit: Time / h
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 1000
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

No actual exchange is presumed for this role; disclose any evidenced boundary crossing with its proper concrete type.

##### Elementary flows

No actual exchange is presumed for this role; disclose any evidenced boundary crossing with its proper concrete type.

#### Outputs

##### Product flows

###### Qualified raw or simply prepared natural cork at declared producer handover (`cork_handover`)

The actual accepted reference lot is the intended output: species, harvest type, raw/rested/boiled state, intact back/bark inclusion, moisture and grade recorded. Packaging and other grades excluded from this selected net output.

- Selected flow: Qualified raw or simply prepared natural cork at declared producer handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Range: Reference normalization identity
  - Range role: qa_guardrail
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: collected_record

###### Other intended natural cork grades at declared handoff (`handover_other_grades`)

Enumerate actual independently accepted co-product grades or downgraded saleable lots with recipients and quantities, excluding cork_handover. No assumed industrial granules or stopper product at this primary gate.

- Selected flow: Other intended natural cork grades at declared handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Qualification and packaging rejects sent as waste (`handover_waste`)

Actual rejected cork, foreign matter or packaging wastes with producing-node and recipient identity; returned cork follows its actual upstream node and retains incurred burden without a second final acceptance.

- Selected flow: Qualification and packaging rejects sent as waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Actual direct substance emissions from qualification handover (`handover_direct_emissions`)

Conditional actual on-site substance emissions from owned fuel or equipment operation, with named substance, particle size/composition when relevant, actual receiving compartment and measured amount or an evidenced activity-factor calculation. Exclude upstream-node-owned emissions and emissions already included in a supplier service. Missing substance or activity evidence is a disclosed gap, not zero or a generic pollutant UUID.

- Selected flow: Actual direct substance emissions from qualification handover
- Flow property / unit: Mass / kg
- Flow property UUID: 93a60a56-a3c8-11da-a746-0800200b9a66
- Unit group UUID: 93a60a57-a4c8-11da-a746-0800200c9a66
- Amount rule: measured actual attributable exchange
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen, not a default
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_owner` | every source/removal/qualification output | Enumerate all intended outputs and real handoffs, including actual stand goods, coppice wood and other qualified cork grades. Distinguish retained biomass, loss, rejected material and waste; one good cannot be sold at two model handoffs. | |
| `subdivision_first` | shared product burdens | Subdivide separately metered production and operations first. For residual common stand/extraction or multi-grade burden, document the causal physical allocation basis and actual output data; if no defensible physical relationship exists, use documented economic shares of the same period and market gates with sensitivity disclosure. No default mass allocation across whole-tree and bark stocks or automatic substitution credit. | |
| `period_share` | stand phases and stock periods | Assign establishment, maintenance, harvest and actual replacement/termination to evidenced cohorts and periods; allocate yard/boiler/storage service by actual use. Carry previous stock burdens forward, not as newly harvested product. Unknown phase attribution blocks final concrete dataset completion. | |
| `run_share` | batch or continuous campaigns | Attribute common startup, cleanout and changeover to recorded runs and participating lots; ensure shares reconcile to one common run total. Count boiling baths/circulation, rest and packaging once. | |
| `asset_share` | shared infrastructure | Enumerate actual consuming nodes and periods for every shared asset or service. Use documented service use with denominator, non-cork consumers and residual share; do not duplicate an inclusive upstream service with own asset or utilities. | |
| `reject_path` | all producing nodes | Link off-spec material to actual rework, downgrade, recovery or waste recipient at its producing node. A returned lot keeps incurred burdens and rework inputs, but no second final output; exclude unresolved rejects from accepted net cork and retain real waste burdens. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Every protocol aggregation uses the same accepted cork lot net kg in cp_handover. Keep land area-time, residual output shares, native transport quantities and fresh water versus bath circulation independently documented; no secondary denominator or duplicate transfer is introduced by the common reference basis.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand` | stand_management | stand inputs, attributable bark, land and other goods | stand/cohort/service records | species; stand/source id; establishment and maintenance phase; area and dates; harvest history; attributable bark quantity; materials; energy carrier; service asset/consumer; independent output; emissions substance/medium | Collect source-owner records, weigh bark at handoff and match phase/event inventories; explicitly classify materials, services, products and retained stock | actual kg, MJ, h and m2a separately | each phase/event and reporting period | actual establishment through covered harvest and relevant replacement/termination | each contributing stand | per 1 kg reference flow | traceable owners, calibrated quantities, area/time maps and reconciled phase shares |
| `cp_stripping` | bark_stripping | source feed, raw bark, services, wood, waste and emissions | extraction campaign records | route recurrent/coppice; source portion; incoming bark/wood quantity; felling owner; virgin/secondary/reproduction; bark/back inclusion; raw wet mass; moisture basis; independent wood handoff; retained material; fuel/service; waste recipient; pollutant/compartment | Weigh the extraction handoffs; record actual tree/wood interfaces, source ownership, incidental and retained materials; independently document direct substances | actual kg, MJ and h separately | each extraction source lot/campaign | actual harvest and covered reporting period | each source/removal site | per 1 kg reference flow | source permissions/owners, calibration, stock/output reconciliation and recipient records |
| `cp_rest` | rest_and_transfer |cork transfer, energy, services, rejects and water and direct emissions | yard/transfer/stock records |lot; incoming/closing mass; preparation state; moisture method; opening/closing stock; dates; actual rain uptake/drainage; service and route; energy; water vapour basis; rejects/recipient; named emission substance/particle size or composition; compartment; actual fuel/equipment activity; measurement or activity-factor evidence |Weigh matched cork lots before/after rest, document stock and actual water changes; measure service use and water-specific balances without equating all mass loss with evaporation; measure or calculate each direct substance from actual activity evidence, excluding inclusive service and water-vapour duplication | actual kg, MJ and h separately; transport native units retained | each lot/transfer and stock period | actual rest and dispatch periods | each yard and transfer owner | per 1 kg reference flow | paired-lot records, moisture tests, actual route and complete opening/closing stock |
| `cp_boiling` | simple_boiling | cork, supply/abstraction water, heat, services and exits | run/bath/stabilization records | lot; incoming/output wet mass; moisture; batch/continuous mode; run/date; temperature/time actually used; fresh-water source; circulation; water retained/vapour/liquid; dissolved/suspended matter; energy; shared service; cleaning/changeover; recipients; pollutants | Meter actual incoming/fresh and outgoing water, weigh cork and sample moisture/extractives; trace circulating bath independently, meter energy and record actual run cleaning/changes | actual kg, MJ and h separately | every actual run/bath and stabilization lot | actual treatment/stabilization periods | each boiler and stabilization owner | per 1 kg reference flow | meter calibration, matched wet/dry/water balances, run totals and actual treatment recipients |
| `cp_handover` | qualification_handover |final cork, other grades, packaging, energy, services and rejects and direct emissions | acceptance/package/dispatch records |source lot; actual state; species; harvest type; form/back inclusion; gross/tare/net mass; moisture method/basis; grade; all grade recipients; gate/date; packaging material/reuse; services; rejection/return path; named emission substance/particle size or composition; compartment; actual fuel/equipment activity; measurement or activity-factor evidence |Weigh accepted cork on a calibrated scale excluding packaging; identify actual state and grade; reconcile all other outputs and stocks and document actual presentation/reuse; measure or calculate each direct substance from actual activity evidence, excluding inclusive service and water-vapour duplication | actual kg, MJ and h separately | every accepted lot and associated grading/packaging run | actual qualification and dispatch reporting period | every contributing handover site | per 1 kg reference flow | calibrated weighing, matched acceptance/dispatch notes, grade thresholds, recipient and return evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `record_normalization` | all inventory rows | Sum each separately identified attributable exchange over matched lot coverage and divide by the same accepted reference-lot net kg; final accepted product is the declared 1 kg reference flow. Preserve actual numerator units and documented upstream/shared-output shares. | process records; accepted net mass; cp_handover | amount per 1 kg reference flow | |
| `state_reconciliation` | cork and water ledgers | Reconcile measured incoming material plus actual additions and opening stocks against accepted/other product, waste, actual elementary exits and closing stocks; track dry cork, water and extractives separately and explain residuals without automatic evaporation or yield factors. | paired lots; moisture basis; rain/water records; stock and recipient records | transparent state and water reconciliation | |
| `aggregation` | multi-site and multi-period data | Enumerate every site and source portion, sum attributable amounts and accepted net mass under matching product/state/gate coverage, and derive mass-weighted intensity from those sums; disclose excluded contributors and heterogeneity. Do not average site intensities unweighted or duplicate transferred lots. | site/period ids; accepted mass; attributed records | representative covered-lot inventory | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | all exchanges and reference | Declare actual product/substance, source, state, gate, media and verified concrete UUID/support for the final dataset; umbrella or unresolved identity is not an authorized final exchange | exact identity and support evidence; acceptance and recipient records |
| `coverage_quality` | phases, sites and runs | Enumerate every contributing stand/site and owned phase/run; link all amounts and events to that boundary and document site weighting/heterogeneity and actual bypasses | phase/site register, source shares, allocation reconciliation |
| `mass_quality` | feeds, stocks and outputs | Keep matched-lot net wet mass, dry matter and water accounting; record rain uptake, dissolved matter, storage changes and actual destinations. No numerical factor from illustrative industry/FAO examples is a default | paired scales, moisture methods, bath and stock balances |
| `range_quality` | all cards | Provisional numerical screens are author reasoning only; replace with reviewed local empirical ranges when available. Outliers trigger explanation, not clipping or automatic rejection. Do not confuse absence, missing records and measured zero | collected observations, uncertainty statement and outlier review |
| `burden_quality` | upstream and shared operations | Missing source, stock, period, asset or reject burden is a data gap. Disclose unresolved shares and sensitivity rather than assigning zero, universal lifetimes or presumed carbon credits | source coverage, consuming-node and period shares; uncertainty evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_gate` | final reference | Require one actual allowed raw/simple state and producer gate with complete qualifiers; reject downstream debacked/shaped/granulated/finished reference products. No substitute state chosen merely for its available UUID. | `unsd-cpc3-notes` |
| `reference_check` | cork_handover and amounts | Confirm final net 1 kg and all inventory per 1 kg reference flow with cp_handover matched denominator; other feeds/transfers remain measured, not fixed to reference. | |
| `route_check` | source and process map | Verify parent/source-delta evidence, exclusive same-portion source representations and actual operation activation, including any coppice felling/wood owner. Missing source state is not an inactive default. | |
| `balance_check` | mass, stock and water | Reconcile wet/dry cork, retained stock, additions, liquid/vapour/extractive exits, losses and other goods across owned interfaces; investigate residuals and provisional-range outliers without replacing real records. | |
| `owner_check` | runs, sites, periods and shared burden | Require complete site/phase/run registers and shares, including cleaning/changeover and replacement/termination where actual. Reconcile common burden to one total with no duplicated source stock, asset, service or upstream emissions. | |
| `destination_check` | grading, packaging and rejects | Enumerate all actual grade/output recipients, waste treatment and rework/return paths. Exclude unresolved rejects from acceptance and disclose packaging reuse/end-of-use without counting it in net cork mass. | |
| `identity_check` | concrete dataset exchanges | Verify exact UUID and property/unit support for every actual concrete exchange; specify each direct pollutant and actual compartment. A semantic umbrella, broad VOC/dust or unresolved product UUID is not a verified exchange. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset for the same actual cork state and gate |
| allowed_use | Source production or consumption of the declared raw/simply prepared cork lot with disclosed burden and actual preparation |
| excluded_use | Automatic proxy for debacked/shaped/granulated/agglomerated cork, stoppers or finished articles; whole-tree carbon credit; undifferentiated raw/prepared mixtures |
| required_metadata | species; harvest type; source and state; back inclusion; moisture basis; grade; owned/bypassed nodes; parent/delta source route; gate; dates; contributors; source coverage; stock and burden attribution |
| required_quality_disclosure | completeness, calibration, allocation/aggregation evidence, native unit conversions, empirical versus provisional Range, rejected-material destinations, identity/support gaps and uncertainty |
| update_trigger | Product state, source ownership/route, preparation, gate, grade, site/period mix, allocation, evidence or concrete exchange identity changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | UNSD CPC Version 3.0 explanatory notes, sections 03220 and 31921/31922; https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf; retrieved 2026-10-08 | Raw/simple category and exclusion of downstream cork forms; not quantity factors |
| `fao-cork-primary-handling` | official_guidance | FAO, Non-wood forest products from broadleaved trees in temperate and boreal zones, Chapter 6; https://www.fao.org/4/y4351e/y4351e0a.htm; retrieved 2026-10-08 | Recurrent bark harvest versus actual coppice wood/bark source context and primary handling; historical ages, intervals, yields and statistics not adopted |
| `apcor-cork-transformation` | extension_guidance | APCOR, Transformation Process; https://apcor.pt/en/transformation-process; retrieved 2026-10-08 | Rest, boiling, stabilization and downstream manufacture distinction; examples of times, moisture and expansion not adopted |

The collection, burden ownership, normalization and QA implementation above is the declared foreground method. These source descriptions supply route/category context only, not fixed inventory recipes, factors, legal harvest thresholds or universal numeric Range.
