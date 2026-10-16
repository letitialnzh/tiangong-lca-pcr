---
pcr_id: pcr.farmed-live-whole-sea-cage-japanese-amberjack
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed live whole sea-cage Japanese amberjack

## 1. Scope and Applicability

Applies to Japanese sea-cage Japanese amberjack (Seriola quinqueradiata), beginning with purchased wild-origin nursed juveniles and ending with the selected live harvest, sorting, holding and delivery channel. The sole reference product is whole living fish accepted by the first farmer physical recipient before slaughter. This is a specific production and delivery route with partial coverage of CPC 04262.

Excludes other Seriola, wild adult capture, hatchery-origin juveniles, wholly land-based farming, and dead, iced-dead, gutted, filleted or frozen reference products. The slaughter, bleeding and icing route described by FAO does not replace this live gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-sea-cage-japanese-amberjack |
| classification_refs | CPC 3.0 04262; narrower |
| covered_products | Japanese sea-cage farmed whole live Japanese amberjack from purchased wild-origin nursed juveniles at pre-slaughter acceptance |
| excluded_products | Other Seriola; wild adult capture; hatchery-origin seed; wholly land-based farming; dead and processed products |
| representative_product | Seriola quinqueradiata |
| production_route | Purchased nursed wild seed → cage growout → live harvest → grade/destination sorting → tank preservation and delivery → pre-slaughter physical acceptance |
| market_state | Whole live; accepted mass excluding free carrier water and tare |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole live Japanese amberjack accepted by first physical recipient before slaughter |
| How much | 1 kg accepted net whole live fish |
| How well | Actual live state and contract grade; declared species, wild seed origin and selected gate; no default survival or hygiene guarantee |
| How long or cycle | Declared cohort from juvenile receipt through live acceptance across all reporting periods, including stock carryover and failed-cycle attribution |
| reference_flow_link | `amberjack_live_accepted` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole live Japanese amberjack at first farmer physical recipient acceptance before slaughter |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species; Japanese farm location and sea-cage technology; purchased wild-origin nursed seed and supplier upstream boundary; cohort and reporting periods; actual feed types and moisture basis; actual live state and grade; first physical recipient, gate location and time; net body mass and tare method; live holding/transport records; allocation and stock carryover method |

Declare every required qualifier in data package metadata, process notes, reference-flow comments, product description or equivalent fields.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Obtain accepted net whole live fish mass A by calibrated weighing or traceable weighing records, excluding free carrier water, containers and all tare; use cp_deliver. The same A is every node’s per 1 kg reference flow denominator. |
| count_mass | live fish and juveniles | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count is not mass. Retain raw lot counts and independent representative body-mass samples with uncertainty; multiply the applicable count by actual sampled mean body mass, never a universal fish weight. |
| feed_basis | grow_feed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep actual as-fed mass, moisture and dry-matter conversion evidence separately; raw fish, moist feed and formulated feed have no shared fixed FCR or default share. |
| native_units | service and environmental instances | Actual instance property | native unit | Preserve kWh, MJ, L, m3, t km, equipment hours or supplier service units; convert only with metering, density, heating value or service-boundary evidence. Declare formulated medicine versus active ingredient, nutrient species versus elemental mass, and respiration versus fossil carbon separately; do not invent a mass identity for an unknown unit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Physical farm receipt of purchased wild-origin nursed Japanese amberjack juveniles |
| starting_condition_role | Purchased biological production input carrying complete upstream collection and nursery burdens |
| product_classification_scope | Narrower species, seed-origin, cage and live-gate scope within CPC 3.0 04262 |
| recursive_input_rule | For same-category purchased or returned live fish, declare predecessor gate, cohort, transfer id and carried burden; purchased additions require upstream data, without recursive duplicate generation or classifying internal returns as new seed. |
| upstream_dataset_requirement | Upstream data matching species, wild collection/nursery, supplier period/geography, feed, energy, mortality and transport boundary; complete and disclose missing activities |
| disclosure | Disclose actual start/end, live channel, supplier and ownership boundaries, all phases/periods, internal transfers, losses, shared assets and service inclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | route | Include purchased wild-origin nursed juveniles, managed sea-cage growout, separate live harvest, sorting, and preservation/delivery to the selected live receipt. Exclude hatchery-origin seed, wild adult capture, other Seriola and all slaughter or dead-product processing. | `fao-japanese-amberjack-2009` |
| boundary_seed | grow_juveniles | Purchased juveniles carry complete wild collection, nursery, feed, energy and inbound transport burdens to the declared farm receipt. They are neither burden-free wild seed nor a duplicate foreground hatchery; document supplier boundaries and any missing upstream activity. | `fao-japanese-amberjack-2009` |
| boundary_gate | amberjack_live_accepted | End at the first farmer physical recipient accepting the fish alive before slaughter. Dispatch, invoice ownership, live arrival and physical acceptance are different events; use the declared actual acceptance. Later wholesale holding, slaughter, bleeding, icing and retail are excluded unless they occur before this declared gate, in which case a dead state falls outside this PCR. | `fao-japanese-amberjack-2009` |
| boundary_period | cohorts | Declare stocking, cage transfers, harvest, sorting, holding, delivery and acceptance phases across each calendar reporting period. Opening/closing live stocks and return transfers carry their attributable burdens once; failed cycles, idle care, mortality disposal, net changes and termination events remain accounted for. | `accepted-live-mass-accounting` |
| boundary_owner | all nodes | For every craft, cage, tank, vehicle and support service, identify its actual consuming nodes and periods and one owner. Select provider-inclusive or direct fuel/power/emissions/capital accounting for each component without overlap. No independent primary conditioning or product packaging operation is presumed for the live tank channel. | `accepted-live-mass-accounting` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| grow | Sea-cage growout | required | selected route | Purchased wild-origin nursed juveniles enter managed cage cohorts; live biomass is handed to harvest. Feed, husbandry, net exchange and equipment cleaning belong here. | per 1 kg reference flow |
| harvest | Live harvest from cages | required | selected route | Remove managed live fish from the cage with a recorded harvest event and hand them alive to sorting. This physical removal is independent of biological growth; it is not wild adult capture or slaughter. | per 1 kg reference flow |
| sort | Live grade and destination sorting | required | selected route | Incoming harvested live fish are classified as live-channel eligible, other intended live outputs, live returns, or collected waste. Record actual grades and each destination; a low grade is not automatically waste. | per 1 kg reference flow |
| deliver | Live holding and delivery | required | selected route | Maintain sorted living fish in actual tank and transport conditions until first farmer physical recipient acceptance before slaughter. Tank life support and delivery are a bounded preservation responsibility; no universal survival duration, temperature or food-safety guarantee is asserted. | per 1 kg reference flow |

Production is cohort-managed biological growth with possible partial harvests, indexed by calendar periods and actual lots/runs/net-change/cleaning/changeover events; do not assume one annual batch. Every card below uses the same accepted-mass denominator while internal transfers retain actual measured quantities. Declare service-inclusive versus direct inventory alternatives component by component; no unowned common pool of cross-node services.

### Process: Sea-cage growout (`grow`)

Purchased wild-origin nursed juveniles enter managed cage cohorts; live biomass is handed to harvest. Feed, husbandry, net exchange and equipment cleaning belong here.

#### Inputs

##### Product flows

###### Purchased wild-origin nursed Japanese amberjack juveniles (`grow_juveniles`)

Record supplier nursery exit and farm receipt count, sampled body mass and whole live mass; retain wild-origin collection and nursing upstream burdens.

- Selected flow: Purchased wild-origin nursed Japanese amberjack juveniles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grow`
- Sources: `accepted-live-mass-accounting`
- Range: Provisional unresolved range evidence need; not a default before independent review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_grow_juveniles
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Growout purchased electricity (`grow_electricity`)

Meter actual feeding, net maintenance and support electricity assigned to this cohort and node, excluding power included in a purchased service.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grow`
- Sources: `accepted-live-mass-accounting`
- Range: Provisional unresolved range evidence need; not a default before independent review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_grow_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

If onsite generation fuel and direct emissions are inventoried, generated electricity is an internal transfer without an additional purchased-electricity upstream burden. Actual onsite feed preparation, refrigeration or thawing electricity belongs to this node; exclude portions already included in supplied feed.

##### Waste flows

No default exchange; instantiate any actual boundary-crossing exchange separately with evidence.

##### Elementary flows

No default exchange; instantiate any actual boundary-crossing exchange separately with evidence.

#### Outputs

##### Product flows

###### Live Japanese amberjack biomass handed to harvest (`grow_live_stock`)

Measure transferred live biomass with event and cohort ids; this is an internal handoff, not the final reference quantity.

- Selected flow: Live Japanese amberjack biomass handed to harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grow`
- Sources: `accepted-live-mass-accounting`
- Range: Provisional unresolved range evidence need; not a default before independent review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_grow_live_stock
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to unspecified air from direct combustion (`grow_fossil_co2`)

Calculate only actual directly inventoried fossil fuel combustion using documented fuel carbon or an applicable factor. Exclude fish respiration, biogenic carbon and provider-inclusive service exhaust.

- Selected flow: Fossil carbon dioxide to unspecified air from direct combustion `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grow`
- Sources: `accepted-live-mass-accounting`
- Binding: Fixed (`fixed`)
- Range: Provisional unresolved range evidence need; not a default before independent review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_grow_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Live harvest from cages (`harvest`)

Remove managed live fish from the cage with a recorded harvest event and hand them alive to sorting. This physical removal is independent of biological growth; it is not wild adult capture or slaughter.

#### Inputs

##### Product flows

###### Live Japanese amberjack biomass received from growout (`harvest_live_stock`)

Pair the measured cage-removal input with grow_live_stock using one transfer id; retain count and mass independently of final accepted mass.

- Selected flow: Live Japanese amberjack biomass received from growout
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this node’s measured or evidenced calculated quantity under cp_harvest, normalized by the same lot accepted net live mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `accepted-live-mass-accounting`
- Range: Provisional unresolved range evidence need; not a default before independent review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_harvest_live_stock
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; instantiate any actual boundary-crossing exchange separately with evidence.

##### Elementary flows

No default exchange; instantiate any actual boundary-crossing exchange separately with evidence.

#### Outputs

##### Product flows

###### Harvested whole live Japanese amberjack for sorting (`harvest_live_fish`)

Measure fish leaving harvest alive; identify lot, count, mass, time and the sorting receiver.

- Selected flow: Harvested whole live Japanese amberjack for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this node’s measured or evidenced calculated quantity under cp_harvest, normalized by the same lot accepted net live mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `accepted-live-mass-accounting`
- Range: Provisional unresolved range evidence need; not a default before independent review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_harvest_live_fish
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Live grade and destination sorting (`sort`)

Incoming harvested live fish are classified as live-channel eligible, other intended live outputs, live returns, or collected waste. Record actual grades and each destination; a low grade is not automatically waste.

#### Inputs

##### Product flows

###### Harvested whole live Japanese amberjack received for sorting (`sort_live_fish`)

Pair with harvest_live_fish using transfer id and record condition upon receipt.

- Selected flow: Harvested whole live Japanese amberjack received for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this node’s measured or evidenced calculated quantity under cp_sort, normalized by the same lot accepted net live mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Sources: `accepted-live-mass-accounting`
- Range: Provisional unresolved range evidence need; not a default before independent review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_sort_live_fish
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; instantiate any actual boundary-crossing exchange separately with evidence.

##### Elementary flows

No default exchange; instantiate any actual boundary-crossing exchange separately with evidence.

#### Outputs

##### Product flows

###### Sorted whole live Japanese amberjack for selected live channel (`sort_live_eligible`)

Measure the declared live grade transferred to live holding and delivery; keep grade criteria and destination specific to the actual contract.

- Selected flow: Sorted whole live Japanese amberjack for selected live channel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this node’s measured or evidenced calculated quantity under cp_sort, normalized by the same lot accepted net live mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Sources: `accepted-live-mass-accounting`
- Range: Provisional unresolved range evidence need; not a default before independent review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_sort_live_eligible
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Live holding and delivery (`deliver`)

Maintain sorted living fish in actual tank and transport conditions until first farmer physical recipient acceptance before slaughter. Tank life support and delivery are a bounded preservation responsibility; no universal survival duration, temperature or food-safety guarantee is asserted.

#### Inputs

##### Product flows

###### Sorted whole live Japanese amberjack entering live holding (`deliver_live_fish`)

Pair with sort_live_eligible by transfer id and actual live mass; final acceptance losses are not erased by setting this input to 1 kg.

- Selected flow: Sorted whole live Japanese amberjack entering live holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this node’s measured or evidenced calculated quantity under cp_deliver, normalized by the same lot accepted net live mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deliver`
- Sources: `accepted-live-mass-accounting`
- Range: Provisional unresolved range evidence need; not a default before independent review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_deliver_live_fish
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; instantiate any actual boundary-crossing exchange separately with evidence.

##### Elementary flows

#### Outputs

##### Product flows

###### Whole live Japanese amberjack at first farmer physical recipient acceptance before slaughter (`amberjack_live_accepted`)

Accepted net whole live fish mass is the sole final reference; include the complete body and exclude free carrier water, tanks and all tare. Acceptance requires actual live state, recipient, time and location evidence.

- Selected flow: Whole live Japanese amberjack at first farmer physical recipient acceptance before slaughter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_deliver`
- Sources: `accepted-live-mass-accounting`
- Range: Normalization identity from the same accepted-mass record, not observed yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `accepted-live-mass-accounting`

##### Waste flows

###### Tank wastewater transferred for treatment (`deliver_wastewater`)

Record actual wastewater volume handed to a treatment operator and its composition; do not also count constituents as direct environmental releases before treatment.

- Selected flow: Tank wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Use this node’s measured or evidenced calculated quantity under cp_deliver, normalized by the same lot accepted net live mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deliver`
- Sources: `accepted-live-mass-accounting`
- Range: Provisional unresolved range evidence need; not a default before independent review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_deliver_wastewater
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_outputs | intended outputs | Enumerate all actual intended live grade/destination outputs and handoffs, including side sales outside the reference channel. Subdivide independently metered operations first; allocate remaining joint growout/harvest/sort/preservation burdens to intended live outputs by accepted net live mass at their own gate, using a documented output ledger and period linkage. If a different causal relation is evidenced, obtain a reviewed explicit replacement before finalization; disclose sensitivity. | `accepted-live-mass-accounting` |
| allocation_returns | internal transfers | Internal cage, harvest, sorting and holding transfers, live returns and period carryover are linked stock movements, not independent final outputs. Transfer their existing burden without allocating it again; split partial harvests using cohort/period activity records. Biological growth means juvenile input mass need not equal harvested output mass. | `accepted-live-mass-accounting` |
| allocation_losses | loss and waste | Mortality, escaped fish, incidental organisms and actual waste are not automatic co-products. Keep attributable loss, failed-cycle and treatment burdens with accountable production; grant no fish-stock, nutrient-removal or carbon credit without a separately reviewed method and evidence. | `accepted-live-mass-accounting` |
| allocation_shared | shared assets and periods | Enumerate actual shared cage/net/mooring/craft/tank/vehicle consumers and periods. Attribute direct usage by meters or logged operating/occupancy time, with attributable capacity only when documented; record asset installation, repair, replacement and termination over actual evidenced service, no default lifetime. The sum of shares equals the recorded burden once, including idle/nonproductive service; disclose unresolved replacement or service evidence. | `accepted-live-mass-accounting` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_grow | grow | all actual node inputs/outputs | raw activity, measurement and transfer records | cohort; receipt supplier/wild-origin nursery boundary; counts and body-mass samples; opening/closing live and feed stocks; feed identity/as-fed mass/moisture; husbandry product/active ingredient and water quantities; net-change/cleaning/changeover event ids; meter/fuel/asset logs; deaths/escapes/returns; marine samples/species/factors; period and transfer ids | Use calibrated meters and traceable weighing, stock, supplier-service and handoff records; inspect live state/destination and retain applicable environmental measurement/factor evidence | kg; count; native unit per instance | each event/lot; continuous service by meter period; close each reporting period | all relevant cohort phases and periods from receipt to final acceptance | declared Japanese site, suppliers and actual node ownership | per 1 kg reference flow | calibration, raw invoices/logs, count/mass samples, supplier boundaries, paired handoffs, methods/factors and independent review |
| cp_harvest | harvest | all actual node inputs/outputs | raw activity, measurement and transfer records | cohort; cage and harvest event; incoming/outgoing live counts/masses; actual method/equipment; services/fuel; lost/returned/collected dead fish; transfer/period ids and receivers | Use calibrated meters and traceable weighing, stock, supplier-service and handoff records; inspect live state/destination and retain applicable environmental measurement/factor evidence | kg; count; native unit per instance | each event/lot; continuous service by meter period; close each reporting period | all relevant cohort phases and periods from receipt to final acceptance | declared Japanese site, suppliers and actual node ownership | per 1 kg reference flow | calibration, raw invoices/logs, count/mass samples, supplier boundaries, paired handoffs, methods/factors and independent review |
| cp_sort | sort | all actual node inputs/outputs | raw activity, measurement and transfer records | lot; incoming condition/count/mass; actual grade criteria; every grade/destination/count/mass; live returns; waste and receivers; operation/service and transfer/period ids | Use calibrated meters and traceable weighing, stock, supplier-service and handoff records; inspect live state/destination and retain applicable environmental measurement/factor evidence | kg; count; native unit per instance | each event/lot; continuous service by meter period; close each reporting period | all relevant cohort phases and periods from receipt to final acceptance | declared Japanese site, suppliers and actual node ownership | per 1 kg reference flow | calibration, raw invoices/logs, count/mass samples, supplier boundaries, paired handoffs, methods/factors and independent review |
| cp_deliver | deliver | all actual node inputs/outputs | raw activity, measurement and transfer records | lot; tank/vehicle; dispatch and recipient times/locations; actual live-state checks; gross/tare/free-water/net accepted mass A; calibration and count samples; actual water/oxygen/power/fuel/service logs; rejected/live returned/dead mass and destinations; effluent medium/species/treatment; period and transfer ids | Use calibrated meters and traceable weighing, stock, supplier-service and handoff records; inspect live state/destination and retain applicable environmental measurement/factor evidence | kg; count; native unit per instance | each event/lot; continuous service by meter period; close each reporting period | all relevant cohort phases and periods from receipt to final acceptance | declared Japanese site, suppliers and actual node ownership | per 1 kg reference flow | calibration, raw invoices/logs, count/mass samples, supplier boundaries, paired handoffs, methods/factors and independent review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_accepted | all inventory rows | Divide the same lot attributable actual node exchange quantity by accepted net whole live mass A recorded in cp_deliver to obtain its quantity per 1 kg reference flow; preserve numerator native unit. | cp_grow; cp_harvest; cp_sort; cp_deliver | quantity per 1 kg reference flow | `accepted-live-mass-accounting` |
| reference_identity | amberjack_live_accepted | Reference output uses the same acceptance record A / A = 1 kg reference flow; this identity establishes neither input/output yield nor zero missing losses. | A; cp_deliver | 1 kg reference flow | `accepted-live-mass-accounting` |
| stock_reconciliation | cohorts | Reconcile cohort/period opening count plus purchases/transfers against closing count, transfers, intended outputs, recorded deaths/escapes and other states; separately reconcile sampled body mass, growth, feed stocks and uncertainty, preserving unexplained discrepancies. | cp_grow; cp_harvest; cp_sort; cp_deliver | linked biological and feed ledgers | `accepted-live-mass-accounting` |
| direct_emission | environmental exchanges | Use recorded direct activity with applicable substance/medium-specific factors or measurements; retain factor source, species, carbon origin or elemental basis and uncertainty, without a universal emission factor. | node protocol; applicable factor or measurement | evidenced substance release amount | `accepted-live-mass-accounting` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | reference and seed | Match species, wild seed origin, purchased nursed state, Japanese cage and actual live gate | supplier origin/nursery boundary, site and acceptance records |
| quality_period | all nodes | Cover all cohort periods and nonproductive services; preserve time/location/transfer links; no unweighted multisite mixing | complete event and stock ledgers |
| quality_measure | all inventory rows | Retain calibration, assay method, representative samples, native units and conversion uncertainty; missing is not zero | raw weighing, meter, sample and factor records |
| quality_ranges | all inventory rows | Support and approve each instance upper bound independently; otherwise disclose unresolved range evidence without claiming empirical ranges | independent historical reference or applicable external evidence and review decision |
| `collect_grow_feed` | `grow`; Inputs; Product flows: Actual raw, moist or formulated feed inputs | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual feed separately by species or formulation, moisture and as-fed mass; reconcile purchases, stocks, preparation and feeding without a default feed share or FCR. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_grow`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_grow`; `accepted-live-mass-accounting` |
| `collect_grow_husbandry` | `grow`; Inputs; Product flows: Actual husbandry and cleaning materials | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection for recorded medicines, treatment water, disinfectants and other consumables; separate actual products, active ingredient and product mass, source and receiving destination. Do not prescribe prophylactic treatment. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Native property / native unit; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_grow`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: native unit Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_grow`; `accepted-live-mass-accounting` |
| `collect_grow_fuel` | `grow`; Inputs; Product flows: Growout direct combustion fuels | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual fuel with native quantity and documented conversion to energy or mass; cover farm craft and engines only when directly inventoried. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Native property / native unit; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_grow`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: native unit Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_grow`; `accepted-live-mass-accounting` |
| `collect_grow_services` | `grow`; Inputs; Product flows: Growout assets and externally supplied services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate cage, net, mooring, craft, maintenance and inbound transport services only for portions not already included in supplied juveniles or feed, by actual provider units. Shared assets list all consuming nodes and periods; direct power, fuel, exhaust and capital are excluded where provider service already includes them. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Native service property / native unit; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_grow`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: native unit Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_grow`; `accepted-live-mass-accounting` |
| `collect_grow_collected_waste` | `grow`; Outputs; Waste flows: Collected growout mortalities and spent materials | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actually collected dead fish, discarded nets and contaminated materials by actual waste destination and mass; treatment burdens remain accountable. Uncollected mortality and escape stay in the biological ledger until their environmental exchanges are evidenced. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_grow`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_grow`; `accepted-live-mass-accounting` |
| `collect_grow_marine_releases` | `grow`; Outputs; Elementary flows: Substance-specific growout releases to marine water | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection for evidenced excretion, faeces, feed loss, cleaning runoff and medicine residues. Instantiate pollutant substance or chemical species, nutrient basis and receiving marine compartment; never equate an entire lost fish with an elementary pollutant or count whole organic loss and its constituent nutrients twice. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_grow`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_grow`; `accepted-live-mass-accounting` |
| `collect_grow_other_air_releases` | `grow`; Outputs; Elementary flows: Actual non-CO2 growout air emissions | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Conditional collection for other actual direct engine or process air releases. Each instance requires the reported pollutant substance or chemical species, particle size where relevant, receiving air compartment, applicable measured activity and measurement or suitable factor evidence. Exclude separately listed fossil CO2, respiration carbon and provider-inclusive exhaust. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_grow, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_grow`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_grow`; `accepted-live-mass-accounting` |
| `collect_harvest_services` | `harvest`; Inputs; Product flows: Actual live harvest materials and services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actual scooping equipment, crew craft, energy and maintenance by their own units. Resolve each direct or provider-inclusive owner, including any exhaust and asset share, before aggregation. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Native property / native unit; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_harvest, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_harvest`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: native unit Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_harvest`; `accepted-live-mass-accounting` |
| `collect_harvest_collected_waste` | `harvest`; Outputs; Waste flows: Collected harvest mortality and discarded material | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual collected waste and treatment destination; escaped or returned living fish are separate ledger states, not collected waste. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_harvest, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_harvest`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_harvest`; `accepted-live-mass-accounting` |
| `collect_harvest_direct_releases` | `harvest`; Outputs; Elementary flows: Actual substance-specific harvest emissions | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate only evidenced direct emissions with substance, medium, unit and factor or measurement; omit provider-inclusive emissions and do not assign an emission mass to unmeasured whole-fish escapes. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_harvest, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_harvest`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) Exclude any identical emission already reported by another card or provider-inclusive service; do not duplicate separately listed fossil carbon dioxide in this PCR. | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_harvest`; `accepted-live-mass-accounting` |
| `collect_sort_services` | `sort`; Inputs; Product flows: Actual live sorting materials and services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate grading stand, pumping, counting and other actual operation inputs in their own units, with one owner for direct energy, emissions and shared equipment. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Native property / native unit; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_sort, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_sort`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: native unit Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `accepted-live-mass-accounting` |
| `collect_sort_other_live_outputs` | `sort`; Outputs; Product flows: Other intended live grades or live returns | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual grade and handoff separately: other saleable live outputs need attribution; live returns to the cohort are linked internal transfers, never an additional sale or final output. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_sort, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_sort`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `accepted-live-mass-accounting` |
| `collect_sort_collected_waste` | `sort`; Outputs; Waste flows: Collected rejected fish and sorting waste | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Classify actual collected mortality or discarded fish by destination; a viable rejected fish rerouted for intended live sale is a product output, not waste. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_sort, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_sort`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `accepted-live-mass-accounting` |
| `collect_sort_direct_releases` | `sort`; Outputs; Elementary flows: Actual substance-specific sorting emissions | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actual runoff or direct exhaust only with substance, medium, basis and calculation evidence; exclude provider-inclusive releases. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_sort, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_sort`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) Exclude any identical emission already reported by another card or provider-inclusive service; do not duplicate separately listed fossil carbon dioxide in this PCR. | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`; `accepted-live-mass-accounting` |
| `collect_deliver_oxygen` | `deliver`; Inputs; Product flows: Actual supplied oxygen and life-support consumables | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actual oxygen products and other life-support materials separately in verified native units; no default oxygen dose is specified. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Native property / native unit; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_deliver, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_deliver`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: native unit Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_deliver`; `accepted-live-mass-accounting` |
| `collect_deliver_supplied_water` | `deliver`; Inputs; Product flows: Actual supplied tank water | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record supplied freshwater or seawater as separate product inputs with measured delivery volume and supported density conversion where needed; do not also record the supplier abstraction as a foreground input. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Volume / m3; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_deliver, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_deliver`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: m3 Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_deliver`; `accepted-live-mass-accounting` |
| `collect_deliver_services` | `deliver`; Inputs; Product flows: Actual tank preservation and live delivery services | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate transport distance and payload, tank occupancy, pumping, power, fuel, vessel or truck and reusable tank asset services in actual provider/native units. Record each service boundary and exclusive owner for fuel, power, exhaust, infrastructure and empty returns. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Native service property / native unit; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_deliver, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_deliver`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: native unit Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_deliver`; `accepted-live-mass-accounting` |
| `collect_deliver_abstracted_water` | `deliver`; Inputs; Elementary flows: Actual direct environmental water abstraction | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate actual directly abstracted water by source and volume, if operated by the foreground owner. Natural exposure of growout cages to marine currents is not metered abstraction; do not duplicate supplied water. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Volume / m3; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_deliver, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_deliver`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: m3 Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_deliver`; `accepted-live-mass-accounting` |
| `collect_deliver_other_live_outputs` | `deliver`; Outputs; Product flows: Other intended live delivery outputs or live returns | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate each actual live rejection, reroute or return destination; classify a new intended sale versus an internal return and keep one final handoff for each fish. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_deliver, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_deliver`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_deliver`; `accepted-live-mass-accounting` |
| `collect_deliver_collected_waste` | `deliver`; Outputs; Waste flows: Collected delivery mortalities and discarded consumables | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record collected dead fish, spent media and other waste separately by mass, receiver and treatment; these are excluded from accepted live product mass. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_deliver, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_deliver`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_deliver`; `accepted-live-mass-accounting` |
| `collect_deliver_direct_releases` | `deliver`; Outputs; Elementary flows: Actual substance-specific direct live-delivery releases | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate direct tank discharge or combustion releases by actual substance, receiving medium, unit and evidence; separate respiration carbon from fossil fuel carbon and provider-inclusive burdens. This conditional collection requires each actual exchange instance to have its own identity, native property/unit, quantity, owner and independent U_instance; inherit no aggregate upper bound and do not combine unlike units. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use this node’s measured or evidenced calculated quantity under cp_deliver, normalized by the same lot accepted net live mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_deliver`; Sources: `accepted-live-mass-accounting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved range evidence need; not a default before independent review Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_instance Unit: kg Basis: per 1 kg reference flow; independent upper bound for each actual instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) Exclude any identical emission already reported by another card or provider-inclusive service; do not duplicate separately listed fossil carbon dioxide in this PCR. | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_deliver`; `accepted-live-mass-accounting` |
| `transport_cargo_scope` | any applicable pre-gate transport, return trip and shared transport service | Collect actual load and distance in the transport service native unit; load includes accompanying water, ice and containers and is not replaced by net reference animal/fish mass. Record actual fuel/service burdens and attribution for loaded, empty-return and zero-output periods. Inclusive transport-service scope excludes duplicate owned fuel, electricity, assets and direct releases; retain return and reusable-container responsibility. | Actual cargo, distance, trip, container and provider-scope records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference | Verify species, Japanese sea-cage route, wild-origin purchased nursed seed, complete whole-body live state, actual pre-slaughter first physical recipient gate and all qualifiers. Reference link must name amberjack_live_accepted, whose accepted mass is the same denominator in all nodes. | `accepted-live-mass-accounting` |
| validate_records | all inventory rows | Require node-owned collection protocols and complete raw records, calibration, transferred lot ids, stock terms and native unit conversions. Reconcile count ledgers including opening/closing stocks, inputs, harvests, returns, deaths, escapes and intended outputs; reconcile growth/feed and uncertainty separately rather than forcing mass equality. | `accepted-live-mass-accounting` |
| validate_emissions | environmental exchanges | Check substance/species, receiving medium, nutrient or active-ingredient basis and actual direct ownership. Distinguish biological ledger states, collected waste, treated wastewater and direct releases; reject duplicate whole-organic and constituent accounting or fossil attribution to respiration. | `accepted-live-mass-accounting` |
| validate_attribution | cohorts and services | Check all intended grade handoffs, failed cycles, idle support, partial harvest and period carryover; shared consumers and shares must be complete and exclusive. Unresolved causal allocation, asset replacement or termination evidence blocks finalization. | `accepted-live-mass-accounting` |
| validate_ranges | all inventory rows | Every 0..U_row or U_instance range is an unresolved evidence need, never a measured or sourced estimate. Establish each upper bound independently from applicable external evidence or independently approved historical reference records, and review its scope before use. Do not validate the measured batch with its own maximum, substitute zero for missing evidence, or aggregate unlike native units. | `accepted-live-mass-accounting` |
| validate_bindings | downstream publication | Resolve each actual product, waste, elementary and service exchange to a compatible verified identity and support property/unit before final downstream exchange publication. Candidate projection/check success does not establish identity verification, empirical range support or publication readiness. | `accepted-live-mass-accounting` |
| `validate_atomic_completion` | all applicable collection requirements and concrete inventory exchanges | Resolve every applicable section-8 collection requirement into individual physical/chemical exchanges with their own quantities, native units, composition/state, range basis or explicit uncertainty evidence, raw records, normalization, actual destinations/receiving media and verified compatible UUIDs. Any unresolved applicable requirement makes the final dataset incomplete and validation fails; unknown is not zero. Never copy aggregate amounts onto components or duplicate inclusive services with owned fuel/electricity/direct releases. Internal transfers are not fixed to the final 1 kg. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input to downstream process or lifecyclemodel for the same declared route, species, seed origin and live gate |
| allowed_use | matching live Japanese amberjack supply after identity, measured data, upstream, period and allocation review |
| excluded_use | other Seriola/species; wild adult fish; hatchery-origin route; dead, slaughtered, filleted or frozen products; unreviewed ecological credits |
| required_metadata | all reference qualifiers, gate, cohort, time/geography, upstream coverage, nodes and concrete exchange identities, native units, measurement and allocation method |
| required_quality_disclosure | unresolved identities/ranges, gaps, losses, release methods, carryover, failed cycles, shared-service inclusions and uncertainty |
| update_trigger | change in species/seed origin, feed/management, site, technology, delivery state/gate, data period, upstream, allocation or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-japanese-amberjack-2009 | official_guidance | FAO. 2009. Seriola quinqueradiata. Cultured aquatic species fact sheets. Text by Dhirendra P.T.; ed. Crespi and New. https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_japaneseamberjack.htm ; retrieved 2026-10-12 | qualitative species, wild seed/nursery, cage route, feed classes, harvest/sorting and distinct live market channel evidence; no dated shares, prices, production, durations or factors as defaults |
| accepted-live-mass-accounting | method_factor | Accepted net live mass, transfer, stock and burden-ownership accounting identities defined in this PCR sections 3–9 | foreground collection, normalization, reconciliation, exclusive ownership and intended-output allocation rules; no empirical yields or factors |
