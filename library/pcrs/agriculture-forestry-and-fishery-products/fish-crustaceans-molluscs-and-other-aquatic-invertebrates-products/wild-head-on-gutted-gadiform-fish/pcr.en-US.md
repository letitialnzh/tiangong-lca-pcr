---
pcr_id: pcr.wild-head-on-gutted-gadiform-fish
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Wild marine head-on gutted Gadiformes fish, fresh or chilled

## 1. Scope and Applicability

This method covers producer wild marine capture through the first food handover of Gadiformes fish with head retained and viscera removed, fresh or nonfrozen chilled. Actual producer-responsible gut removal must be complete; resale of fish purchased after a supplier first gate is outside this route. There is no universal gear, temperature, duration, yield or legal threshold; retain actual market and competent-authority food-acceptance evidence. Unknown state cannot default to acceptance. Exclude inland Gadiformes such as burbot, farmed fish, final live/ungutted fish, headed fish, fillets, organs as reference, frozen/thawed fish, cooked/smoked/salted products and final seed/feed/ornamental uses.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.wild-head-on-gutted-gadiform-fish` |
| classification_refs | CPC 3.0 04241; proposed narrower boundary, not all leaf forms. |
| covered_products | Wild marine Gadiformes head-on gutted food carcasses, fresh or nonfrozen chilled, at first producer handover. |
| excluded_products | Inland/farmed origin; final live/ungutted/headed/filleted/frozen/thawed/processed states; organs as reference; nonfood and later trader gates. |
| representative_product | Wild marine Atlantic cod, head-on gutted, chilled, actual grade and gill state. |
| production_route | Wild capture parent; actual trawl/gillnet/longline/rod gear delta, gutting and actual handling event graph. No gear performance default. |
| market_state | Fresh or nonfrozen chilled head-on gutted food carcass, with actual gill retention and drained net body mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted wild marine head-on gutted Gadiformes food carcass at its actual first producer gate. |
| How much | 1 kg net carcass, not whole-fish equivalent or edible fillet equivalent. |
| How well | Declare species, waterbody, wild origin, capture gear/event, head/gill/viscera state, actual grade/food acceptance and time-temperature/nonfrozen history; exclude free water, ice and packages from mass. |
| How long or cycle | Full attributable trip and reporting period: outward, capture, preparation/holding/handover, return, idle/maintenance and asset service, retaining failed and no-output periods. |
| reference_flow_link | `food_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wild marine head-on gutted Gadiformes fish at first producer food handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; marine waterbody; wild origin; producer gate; capture/handling events; head retained; viscera removed; actual gill state; grade/food acceptance; nonfrozen history; net drainage method |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated weighing of accepted head-on gutted carcass retaining natural tissue moisture; deduct packaging, ice and free water. Whole catch and gutted fish require separate measurements without default conversion. |
| energy_identity | electricity and energy inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain energy with verified energy unit group `93a60a57-a3c8-11da-a746-0800200c9a66`; original kWh multiplied by 3.6 gives MJ. Do not replace energy with fuel mass or kg of service; fuel composition and method need separate evidence. |
| physical_ledger | mass transfers and water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep unallocated mass by actual material/state at each event, recording tare, drainage, tissue/free water, ice, organs and stocks. Constituent loads characterizing a water stream are not added again to its mass. Actual service functional units and non-mass interactions remain auxiliary ledgers. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild marine stock before actual producer capture; real trip, vessel/gear and asset service records. |
| starting_condition_role | Environment-to-capture origin and attributable resource start, not a burden-free purchased gutted input. |
| product_classification_scope | Marine wild head-on gutted fresh/chilled subset of CPC 3.0 04241. |
| recursive_input_rule | Same-category fish bought after a first producer gate cannot replace own capture; resale is excluded. Actual purchased bait remains its own input with supplier burden. Internal fish transfers use paired ids and no duplicated upstream capture. |
| upstream_dataset_requirement | Trace actual fuel, electricity, bait, consumables, water, ice, packages, capital and external service supply; record unresolved interfaces, not zero burdens. |
| disclosure | Declare ownership, marine source, actual gate, event sequence, time/grade states, scope of inclusive services, complete voyage/asset periods and exclusions. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_sequence | actual event graph | Table order is not a mandatory route. Prove actual capture, gutting, grading, preservation and presentation sequence using event/pass and paired transfer ids, preserving pending status. A parcel becomes reference output only after gutting, acceptance and nonfrozen requirements all hold. | fao-wet-fish-handling; fao-inshore-fish-handling |
| boundary_trip | trip and shared resources | Attribute complete trip, idle/maintenance, replacement and actual asset-service periods to true consumers and periods; at-sea handover does not erase return resources or extend post-gate physical handling. Capture owns propulsion and shared onboard generation once. |  |
| boundary_services | external and shared services | Keep actual outsourced gutting, cleaning, chilling, ice manufacture and pre-gate movement in each node auxiliary service ledger with real invoiced functional unit, quantity, supplier data, contract scope and covered-resource matrix; never invent kg of service. Unverified service units/support identities remain blocking interfaces, not omitted burdens or a complete final inventory; separately inventory only non-inclusive resources. |  |
| boundary_water | water and residues | Record actual purchased/abstracted water, recirculation make-up, paired internal water/ice transfers, meltwater, product-carried water, releases, treatment, independently evidenced evaporation and opening/closing stocks. Recirculation is not new abstraction, melting is not new supply, and constituent loads do not duplicate whole-water mass. Each material parcel has one fate. |  |
| boundary_technology | capture parent and deltas | Under capture parent prove actual event-specific trawl/net/hook technology deltas in topology, energy, bait/gear materials, bycatch/loss and habitat-interaction categories. Never duplicate full catch or shared resources for one event or claim universally minimal impact. | noaa-atlantic-cod |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Wild marine capture and complete voyage responsibility | required | Always for fish from the declared producer capture events. | foreground capture | Measured target whole catch removed from the marine stock; not fixed to final gutted kg. |
| `condition` | Head-on evisceration and initial cleaning | required | Actual producer-responsible gut removal occurs before this reference product can be handed over. | foreground condition | Measured actually partial or completed head-on fish transfers and every removed organ, blood, liquid, reject and stock partition at the actual pass; final reference requires completed gutting. |
| `grade` | Actual physical and destination grading | required | Classify species, form, condition, food acceptance and actual destinations before final handover. | foreground grade | Measured accepted, downgraded/other intended and waste fish for each grading pass. |
| `preserve` | Actual nonfreezing chilling and bounded cold holding | conditional | Producer performs actual chilling or cold holding before first handover, at any evidenced position in the event sequence. | foreground preserve | Measured actual fish state entering and leaving each cold intervention, with time and temperature history. |
| `present` | Producer protective presentation | conditional | Actual producer packaging, boxing or labelling of head-on gutted food fish before handover. | foreground present | Actual prepared fish excluding boxes, liners, free water and ice; separate package ledger. |
| `handover` | First producer food handover and reference weighing | required | Exactly one actual first producer gate per accepted reference lot; sea, landing or other documented gate. | foreground handover | 1 kg accepted net head-on gutted marine wild Gadiformes fresh/chilled food carcass. |

Cards define actual roles; conditional roles occur only where records demonstrate them and expand by real substance, supplier and destination. Each card first keeps an unallocated physical ledger: close actual transfers, losses and stocks, then normalize to positive accepted final carcass kg, owning shared node/period resources once. A separate single-output LCA view attributes burdens only once under section 7 while retaining the unallocated ledger and allocation matrix; never multiply fish/organ mass partitions by economic shares or apply downstream output shares twice. Provisional ranges are replaceable screening estimates, not default amounts, empirically allowed intervals or QA-pass evidence; investigate independently evidenced values outside a range, never clip them.

### Process: Wild marine capture and complete voyage responsibility (`capture`)

Identify waterbody, wild species, trip and gear event. Capture removes whole fish; it neither grows fish nor removes viscera. The whole-catch transfer enters actual conditioning, grading or preservation. Record trawl/net/line/rod technology under this parent: towing/hauling energy, hooks/bait, gear materials, lost gear, bycatch and habitat interactions differ. Gear types are mutually exclusive for one event unless measured mixed use is partitioned; disjoint events can coexist. Include attributable outward, fishing, return, idle, maintenance and asset-service periods even after at-sea product handover; do not extend physical product handling past its gate. Other retained species are intended outputs only with actual destination evidence.

#### Inputs

##### Product flows

###### Separately measured liquid water (`capture_water_received_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`

###### Separately measured solid water ice (`capture_water_received_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`



###### Actual electricity supply at capture (`capture_electricity`)

Expand actual external electricity by geography, voltage, provider and generation technology. Internal generation throughput is auxiliary and its fuel/emissions belong once to the generator owner; do not buy it again here.

- Selected flow: Actual electricity supply at capture
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN low-voltage grid-average supply at capture (`capture_cn_grid`)

Activate only separately evidenced CN AC below 1 kV grid-average consumption mix delivered to user. It is exclusive of the same electricity in the general supply card, not a world/offshore diesel proxy.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN low-voltage grid-average supply at capture `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching external treated industrial process water at capture (`capture_industrial_water`)

Only matching actual treated industrial process-water product, with food-contact suitability separately established where needed. Not raw seawater, drinking-water certification, recirculation throughput or generic water.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching external treated industrial process water at capture `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual externally supplied water at capture (`capture_other_water`)

Expand the actual supplied freshwater/seawater/potable water identity and intended use excluding the matching industrial-water card. Supplier burden retained; internal transfers use the separate receiving role.

- Selected flow: Other actual externally supplied water at capture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Wild marine Gadiformes biomass removed (`marine_target_stock`)

Actual target wild biomass removed from the marine environment, including target fish later returned or lost; distinguish those fates. No ecosystem credit or purchased-fish input replaces this extraction.

- Selected flow: Wild marine Gadiformes biomass removed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual direct seawater abstraction at capture (`capture_seawater`)

Measure only newly abstracted seawater crossing from environment at this owner; record actual contact/cleaning/cooling use. Recirculation and upstream transfers are excluded.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual direct freshwater abstraction at capture (`capture_freshwater`)

Only actual environment-sourced freshwater with source compartment, withdrawal and consumption evidence; never impose freshwater where seawater is actually used.

- Selected flow: Actual direct freshwater abstraction at capture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`capture_water_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`

###### Separately measured solid water ice (`capture_water_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`



###### Whole target fish transferred from capture (`whole_target_catch`)

Measure whole unconditioned target fish passed to the next actual event with species, state and transfer id. Whole catch mass is not fixed to final gutted mass.

- Selected flow: Whole target fish transferred from capture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dead fish sent to waste management (`capture_fish_waste`)

Actual dead/rejected target or incidental fish sent to a named waste recipient, never the same parcel as environmental discard or a sold product.

- Selected flow: Dead fish sent to waste management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected wastewater sent to treatment at capture (`capture_water_to_treatment`)

Actual whole wastewater sent to a known treatment recipient, including separately characterized loads. Treatment effluent is outside this foreground unless independently declared; direct releases are exclusive fates.

- Selected flow: Collected wastewater sent to treatment at capture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual dead biological discards to sea (`capture_dead_discards`)

Declare real species/material and water receiving compartment, permit/context and mass basis. This is a direct release, not disposal to waste treatment; no hypothetical discard quantity.

- Selected flow: Actual dead biological discards to sea
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual direct water release at capture (`capture_water_release`)

Actual direct release to identified marine/freshwater/soil compartment; distinguish water mass from constituent-load characterization and exclude parcels sent to treatment or internally transferred.

- Selected flow: Actual direct water release at capture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation at capture (`capture_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Actual independently evidenced evaporation to air. Do not assign unexplained gutting/fish/water balance differences here; unknown loss is an unresolved ledger item.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual fossil combustion carbon dioxide to air at capture (`capture_fossil_co2`)

Only actual directly owned fossil combustion releases to compatible air. Determine mass from measured carbon/fuel composition and documented method; no factor supplied here, no respiration or supplier-electricity emissions.

- Selected flow: Actual fossil combustion carbon dioxide to air at capture `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Head-on evisceration and initial cleaning (`condition`)

The first pass receives whole ungutted wild Gadiformes, possibly already graded or chilled. Retain the head; declare actual gill retention/removal and bleeding. Record viscera removal when actually performed, including liver/roe destinations; no universal yields. A partial pass does not imply completed gutting, and a later receiving pass can accept that measured partially prepared transfer. A real partial initial pass may hand still-ungutted head-retained fish to an intervening cold/grade event, using condition_partially_prepared_fish, actual states and paired transfers before a later completed-gutting pass; this adds no universal killing or bleeding step. Subsequent cleaning passes may receive already gutted carcasses and must not remove the same organs twice. Prepared carcasses pass to the next actual grade/preservation/presentation event. Sold organs/offal require intended-use and acceptance evidence; waste to treatment and permitted direct environmental release are exclusive fates for each parcel. Washing and draining record water entry, product-carried water, effluent and stocks, not an assumed fish-yield conversion.

#### Inputs

##### Product flows

###### Separately measured liquid water (`condition_water_received_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`

###### Separately measured solid water ice (`condition_water_received_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`



###### Actual fish state received at condition (`condition_fish_in`)

Actual transferred fish mass with origin event/pass, whole/gutted form, head and gill state, grade and thermal history. Pair with the preceding output; presentation requires a gutted input, initial conditioning requires whole fish, other nodes follow the actual state.

- Selected flow: Actual fish state received at condition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supply at condition (`condition_electricity`)

Expand actual external electricity by geography, voltage, provider and generation technology. Internal generation throughput is auxiliary and its fuel/emissions belong once to the generator owner; do not buy it again here.

- Selected flow: Actual electricity supply at condition
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN low-voltage grid-average supply at condition (`condition_cn_grid`)

Activate only separately evidenced CN AC below 1 kV grid-average consumption mix delivered to user. It is exclusive of the same electricity in the general supply card, not a world/offshore diesel proxy.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN low-voltage grid-average supply at condition `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching external treated industrial process water at condition (`condition_industrial_water`)

Only matching actual treated industrial process-water product, with food-contact suitability separately established where needed. Not raw seawater, drinking-water certification, recirculation throughput or generic water.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching external treated industrial process water at condition `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual externally supplied water at condition (`condition_other_water`)

Expand the actual supplied freshwater/seawater/potable water identity and intended use excluding the matching industrial-water card. Supplier burden retained; internal transfers use the separate receiving role.

- Selected flow: Other actual externally supplied water at condition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct seawater abstraction at condition (`condition_seawater`)

Measure only newly abstracted seawater crossing from environment at this owner; record actual contact/cleaning/cooling use. Recirculation and upstream transfers are excluded.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual direct freshwater abstraction at condition (`condition_freshwater`)

Only actual environment-sourced freshwater with source compartment, withdrawal and consumption evidence; never impose freshwater where seawater is actually used.

- Selected flow: Actual direct freshwater abstraction at condition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`condition_water_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`

###### Separately measured solid water ice (`condition_water_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`



###### Actual fish state transferred from condition (`condition_fish_onward`)

Measured fish passed to the next actual event, preserving actual eligibility and pending status. A completed-gutting condition output is head-on gutted; a real partial pass uses condition_partially_prepared_fish with pending-gutting status. Grading output is accepted only for its declared next step; preservation and presentation retain actual incoming preparation state and cannot manufacture food acceptance.

- Selected flow: Actual fish state transferred from condition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual head-retained fish transferred before gutting is complete (`condition_partially_prepared_fish`)

Only a real intermediate pass handing still-ungutted or partly prepared head-retained fish to an actual next node, for example a documented cold intervention before later gut removal. Record actual live/dead, bleeding, gut/gill, grade and thermal state, measured raw mass and paired event/pass/transfer ids. Keep gutting pending; pair its later return with the actual receiving pass. This is mutually exclusive for the same parcel/pass with completed gutted output, not a second carcass sale or fixed final 1 kg. Final handover still requires completed evisceration and all food/nonfrozen qualifiers.

- Selected flow: Actual head-retained fish transferred before gutting is complete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_condition_partially_prepared_fish
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual fish rejection to waste at condition (`condition_fish_waste`)

Actual whole/carcass fish physically sent to waste management at this event. Record cause and recipient; exclude sold downgraded fish, separated organs and direct environmental releases recorded elsewhere.

- Selected flow: Actual fish rejection to waste at condition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected wastewater sent to treatment at condition (`condition_water_to_treatment`)

Actual whole wastewater sent to a known treatment recipient, including separately characterized loads. Treatment effluent is outside this foreground unless independently declared; direct releases are exclusive fates.

- Selected flow: Collected wastewater sent to treatment at condition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual removed biological material released to sea (`condition_direct_organ_release`)

Only actual evidenced permitted marine releases activate this role. Identify organic material/species, water compartment and event; collect suspended/dissolved loads within the water ledger without duplicating the same organic mass.

- Selected flow: Actual removed biological material released to sea
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual direct water release at condition (`condition_water_release`)

Actual direct release to identified marine/freshwater/soil compartment; distinguish water mass from constituent-load characterization and exclude parcels sent to treatment or internally transferred.

- Selected flow: Actual direct water release at condition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation at condition (`condition_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Actual independently evidenced evaporation to air. Do not assign unexplained gutting/fish/water balance differences here; unknown loss is an unresolved ledger item.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual fossil combustion carbon dioxide to air at condition (`condition_fossil_co2`)

Only actual directly owned fossil combustion releases to compatible air. Determine mass from measured carbon/fuel composition and documented method; no factor supplied here, no respiration or supplier-electricity emissions.

- Selected flow: Actual fossil combustion carbon dioxide to air at condition `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable fish returned to environmental water at condition (`condition_actual_live_fish_return`)

Only when this actual pass receives viable fish and really releases identified living organisms: retain species, whole/head/gut/gill state, viability evidence, measured raw mass, event/pass/time, receiving waterbody and applicable permission/context. This node owns the release after its actual receipt; do not backfill a pre-retention capture release or invent a return transfer. It is mutually exclusive with onward products, waste and closing stock; no assumed release, survival factor or credit.

- Selected flow: Actual viable fish returned to environmental water at condition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_condition_actual_live_fish_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead whole-fish or carcass material released to water at condition (`condition_actual_dead_fish_release`)

Only actual documented direct environmental fate of rejected/dead whole fish or carcass at this pass; identify species, head/gut/gill state, raw mass, event, receiving water and applicable management/authorization evidence. Not a prescribed legal disposal route. Keep removed organ/blood fates, wastewater constituents, treatment-bound fish, intended products and stocks separate; never count the same material twice or relabel it as a capture-stage loss.

- Selected flow: Actual dead whole-fish or carcass material released to water at condition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_condition: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_condition_actual_dead_fish_release
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Actual physical and destination grading (`grade`)

Receive the actual whole or gutted, fresh/chilled incoming state. Record grade criteria and decision authority. Accepted reference-form food fish go onward; whole ungutted fish accepted for later preparation are pending conditioning, never final reference output. Downgraded but saleable fish, non-reference forms and other species retain their own product identity/destination. Truly discarded fish go to waste treatment or actual permitted environment release, never both. Regrading follows a new event/pass; no automatic repetition of captured biomass.

#### Inputs

##### Product flows

###### Separately measured liquid water (`grade_water_received_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`

###### Separately measured solid water ice (`grade_water_received_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`



###### Actual fish state received at grade (`grade_fish_in`)

Actual transferred fish mass with origin event/pass, whole/gutted form, head and gill state, grade and thermal history. Pair with the preceding output; presentation requires a gutted input, initial conditioning requires whole fish, other nodes follow the actual state.

- Selected flow: Actual fish state received at grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supply at grade (`grade_electricity`)

Expand actual external electricity by geography, voltage, provider and generation technology. Internal generation throughput is auxiliary and its fuel/emissions belong once to the generator owner; do not buy it again here.

- Selected flow: Actual electricity supply at grade
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN low-voltage grid-average supply at grade (`grade_cn_grid`)

Activate only separately evidenced CN AC below 1 kV grid-average consumption mix delivered to user. It is exclusive of the same electricity in the general supply card, not a world/offshore diesel proxy.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN low-voltage grid-average supply at grade `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching external treated industrial process water at grade (`grade_industrial_water`)

Only matching actual treated industrial process-water product, with food-contact suitability separately established where needed. Not raw seawater, drinking-water certification, recirculation throughput or generic water.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching external treated industrial process water at grade `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual externally supplied water at grade (`grade_other_water`)

Expand the actual supplied freshwater/seawater/potable water identity and intended use excluding the matching industrial-water card. Supplier burden retained; internal transfers use the separate receiving role.

- Selected flow: Other actual externally supplied water at grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct seawater abstraction at grade (`grade_seawater`)

Measure only newly abstracted seawater crossing from environment at this owner; record actual contact/cleaning/cooling use. Recirculation and upstream transfers are excluded.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual direct freshwater abstraction at grade (`grade_freshwater`)

Only actual environment-sourced freshwater with source compartment, withdrawal and consumption evidence; never impose freshwater where seawater is actually used.

- Selected flow: Actual direct freshwater abstraction at grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`grade_water_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`

###### Separately measured solid water ice (`grade_water_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`



###### Actual fish state transferred from grade (`grade_fish_onward`)

Measured fish passed to the next actual event, preserving actual eligibility and pending status. A completed-gutting condition output is head-on gutted; a real partial pass uses condition_partially_prepared_fish with pending-gutting status. Grading output is accepted only for its declared next step; preservation and presentation retain actual incoming preparation state and cannot manufacture food acceptance.

- Selected flow: Actual fish state transferred from grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Saleable downgraded and other destination fish (`grade_other_products`)

Expand each actual accepted grade/form/species/use and handover destination. Pending conditioning fish for the reference route remain internal onward fish, not an independent final sale.

- Selected flow: Saleable downgraded and other destination fish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual fish rejection to waste at grade (`grade_fish_waste`)

Actual whole/carcass fish physically sent to waste management at this event. Record cause and recipient; exclude sold downgraded fish, separated organs and direct environmental releases recorded elsewhere.

- Selected flow: Actual fish rejection to waste at grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected wastewater sent to treatment at grade (`grade_water_to_treatment`)

Actual whole wastewater sent to a known treatment recipient, including separately characterized loads. Treatment effluent is outside this foreground unless independently declared; direct releases are exclusive fates.

- Selected flow: Collected wastewater sent to treatment at grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct water release at grade (`grade_water_release`)

Actual direct release to identified marine/freshwater/soil compartment; distinguish water mass from constituent-load characterization and exclude parcels sent to treatment or internally transferred.

- Selected flow: Actual direct water release at grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation at grade (`grade_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Actual independently evidenced evaporation to air. Do not assign unexplained gutting/fish/water balance differences here; unknown loss is an unresolved ledger item.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual fossil combustion carbon dioxide to air at grade (`grade_fossil_co2`)

Only actual directly owned fossil combustion releases to compatible air. Determine mass from measured carbon/fuel composition and documented method; no factor supplied here, no respiration or supplier-electricity emissions.

- Selected flow: Actual fossil combustion carbon dioxide to air at grade `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable fish returned to environmental water at grade (`grade_actual_live_fish_return`)

Only when this actual pass receives viable fish and really releases identified living organisms: retain species, whole/head/gut/gill state, viability evidence, measured raw mass, event/pass/time, receiving waterbody and applicable permission/context. This node owns the release after its actual receipt; do not backfill a pre-retention capture release or invent a return transfer. It is mutually exclusive with onward products, waste and closing stock; no assumed release, survival factor or credit.

- Selected flow: Actual viable fish returned to environmental water at grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_grade_actual_live_fish_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead whole-fish or carcass material released to water at grade (`grade_actual_dead_fish_release`)

Only actual documented direct environmental fate of rejected/dead whole fish or carcass at this pass; identify species, head/gut/gill state, raw mass, event, receiving water and applicable management/authorization evidence. Not a prescribed legal disposal route. Keep removed organ/blood fates, wastewater constituents, treatment-bound fish, intended products and stocks separate; never count the same material twice or relabel it as a capture-stage loss.

- Selected flow: Actual dead whole-fish or carcass material released to water at grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_grade: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_grade_actual_dead_fish_release
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Actual nonfreezing chilling and bounded cold holding (`preserve`)

Receive usable whole or gutted fish, before or after grading and presentation as actually evidenced. Preserve exactly that declared nonfrozen state; retain pending grading/conditioning status rather than granting acceptance. Record actual ice or mechanical cold service, input water, heat/energy and measured melt/drain streams. Stale/rejected fish are losses with a destination, not accepted product. No universal temperature, holding time, ice ratio or guarantee that chilling repairs a previous unsafe history. Frozen/thawed output leaves this reference scope.

#### Inputs

##### Product flows

###### Separately measured liquid water (`preserve_water_received_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preserve`

###### Separately measured solid water ice (`preserve_water_received_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preserve`



###### Actual fish state received at preserve (`preserve_fish_in`)

Actual transferred fish mass with origin event/pass, whole/gutted form, head and gill state, grade and thermal history. Pair with the preceding output; presentation requires a gutted input, initial conditioning requires whole fish, other nodes follow the actual state.

- Selected flow: Actual fish state received at preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supply at preserve (`preserve_electricity`)

Expand actual external electricity by geography, voltage, provider and generation technology. Internal generation throughput is auxiliary and its fuel/emissions belong once to the generator owner; do not buy it again here.

- Selected flow: Actual electricity supply at preserve
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN low-voltage grid-average supply at preserve (`preserve_cn_grid`)

Activate only separately evidenced CN AC below 1 kV grid-average consumption mix delivered to user. It is exclusive of the same electricity in the general supply card, not a world/offshore diesel proxy.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN low-voltage grid-average supply at preserve `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching external treated industrial process water at preserve (`preserve_industrial_water`)

Only matching actual treated industrial process-water product, with food-contact suitability separately established where needed. Not raw seawater, drinking-water certification, recirculation throughput or generic water.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching external treated industrial process water at preserve `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual externally supplied water at preserve (`preserve_other_water`)

Expand the actual supplied freshwater/seawater/potable water identity and intended use excluding the matching industrial-water card. Supplier burden retained; internal transfers use the separate receiving role.

- Selected flow: Other actual externally supplied water at preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual purchased capture-fishery chilling ice (`preserve_ice`)

Actual purchased ice supplied for onboard or landing capture-fishery chilling, GLO-compatible. Own ice manufacture instead retains water and energy at its true producer and transfers ice internally; do not count purchased ice plus its manufacture twice.

- Selected flow: Actual purchased capture-fishery chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct seawater abstraction at preserve (`preserve_seawater`)

Measure only newly abstracted seawater crossing from environment at this owner; record actual contact/cleaning/cooling use. Recirculation and upstream transfers are excluded.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual direct freshwater abstraction at preserve (`preserve_freshwater`)

Only actual environment-sourced freshwater with source compartment, withdrawal and consumption evidence; never impose freshwater where seawater is actually used.

- Selected flow: Actual direct freshwater abstraction at preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`preserve_water_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preserve`

###### Separately measured solid water ice (`preserve_water_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preserve`



###### Actual fish state transferred from preserve (`preserve_fish_onward`)

Measured fish passed to the next actual event, preserving actual eligibility and pending status. A completed-gutting condition output is head-on gutted; a real partial pass uses condition_partially_prepared_fish with pending-gutting status. Grading output is accepted only for its declared next step; preservation and presentation retain actual incoming preparation state and cannot manufacture food acceptance.

- Selected flow: Actual fish state transferred from preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual fish rejection to waste at preserve (`preserve_fish_waste`)

Actual whole/carcass fish physically sent to waste management at this event. Record cause and recipient; exclude sold downgraded fish, separated organs and direct environmental releases recorded elsewhere.

- Selected flow: Actual fish rejection to waste at preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected wastewater sent to treatment at preserve (`preserve_water_to_treatment`)

Actual whole wastewater sent to a known treatment recipient, including separately characterized loads. Treatment effluent is outside this foreground unless independently declared; direct releases are exclusive fates.

- Selected flow: Collected wastewater sent to treatment at preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct water release at preserve (`preserve_water_release`)

Actual direct release to identified marine/freshwater/soil compartment; distinguish water mass from constituent-load characterization and exclude parcels sent to treatment or internally transferred.

- Selected flow: Actual direct water release at preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation at preserve (`preserve_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Actual independently evidenced evaporation to air. Do not assign unexplained gutting/fish/water balance differences here; unknown loss is an unresolved ledger item.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual fossil combustion carbon dioxide to air at preserve (`preserve_fossil_co2`)

Only actual directly owned fossil combustion releases to compatible air. Determine mass from measured carbon/fuel composition and documented method; no factor supplied here, no respiration or supplier-electricity emissions.

- Selected flow: Actual fossil combustion carbon dioxide to air at preserve `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable fish returned to environmental water at preserve (`preserve_actual_live_fish_return`)

Only when this actual pass receives viable fish and really releases identified living organisms: retain species, whole/head/gut/gill state, viability evidence, measured raw mass, event/pass/time, receiving waterbody and applicable permission/context. This node owns the release after its actual receipt; do not backfill a pre-retention capture release or invent a return transfer. It is mutually exclusive with onward products, waste and closing stock; no assumed release, survival factor or credit.

- Selected flow: Actual viable fish returned to environmental water at preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_preserve_actual_live_fish_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead whole-fish or carcass material released to water at preserve (`preserve_actual_dead_fish_release`)

Only actual documented direct environmental fate of rejected/dead whole fish or carcass at this pass; identify species, head/gut/gill state, raw mass, event, receiving water and applicable management/authorization evidence. Not a prescribed legal disposal route. Keep removed organ/blood fates, wastewater constituents, treatment-bound fish, intended products and stocks separate; never count the same material twice or relabel it as a capture-stage loss.

- Selected flow: Actual dead whole-fish or carcass material released to water at preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_preserve: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_preserve_actual_dead_fish_release
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Producer protective presentation (`present`)

Receive head-on gutted fish with the actual pending or accepted food-grade status; packaging cannot grant food acceptance. Protected fish go to the next actual cold/grading event or handover only if all eligibility conditions hold. Distinguish disposable boxes/liners/labels from reusable containers, their stock, replacement and cleaning. Record physical package handover separately from attributed manufacture of reusable assets. Distribution and later merchant transport are outside this node; pre-gate movement and service ownership remain explicit auxiliary records.

#### Inputs

##### Product flows

###### Separately measured liquid water (`present_water_received_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_present`

###### Separately measured solid water ice (`present_water_received_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_present`



###### Actual fish state received at present (`present_fish_in`)

Actual transferred fish mass with origin event/pass, whole/gutted form, head and gill state, grade and thermal history. Pair with the preceding output; presentation requires a gutted input, initial conditioning requires whole fish, other nodes follow the actual state.

- Selected flow: Actual fish state received at present
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supply at present (`present_electricity`)

Expand actual external electricity by geography, voltage, provider and generation technology. Internal generation throughput is auxiliary and its fuel/emissions belong once to the generator owner; do not buy it again here.

- Selected flow: Actual electricity supply at present
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual CN low-voltage grid-average supply at present (`present_cn_grid`)

Activate only separately evidenced CN AC below 1 kV grid-average consumption mix delivered to user. It is exclusive of the same electricity in the general supply card, not a world/offshore diesel proxy.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN low-voltage grid-average supply at present `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Matching external treated industrial process water at present (`present_industrial_water`)

Only matching actual treated industrial process-water product, with food-contact suitability separately established where needed. Not raw seawater, drinking-water certification, recirculation throughput or generic water.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Matching external treated industrial process water at present `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual externally supplied water at present (`present_other_water`)

Expand the actual supplied freshwater/seawater/potable water identity and intended use excluding the matching industrial-water card. Supplier burden retained; internal transfers use the separate receiving role.

- Selected flow: Other actual externally supplied water at present
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual direct seawater abstraction at present (`present_seawater`)

Measure only newly abstracted seawater crossing from environment at this owner; record actual contact/cleaning/cooling use. Recirculation and upstream transfers are excluded.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual direct freshwater abstraction at present (`present_freshwater`)

Only actual environment-sourced freshwater with source compartment, withdrawal and consumption evidence; never impose freshwater where seawater is actually used.

- Selected flow: Actual direct freshwater abstraction at present
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Separately measured liquid water (`present_water_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_present`

###### Separately measured solid water ice (`present_water_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_present`



###### Actual fish state transferred from present (`present_fish_onward`)

Measured fish passed to the next actual event, preserving actual eligibility and pending status. A completed-gutting condition output is head-on gutted; a real partial pass uses condition_partially_prepared_fish with pending-gutting status. Grading output is accepted only for its declared next step; preservation and presentation retain actual incoming preparation state and cannot manufacture food acceptance.

- Selected flow: Actual fish state transferred from present
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual fish rejection to waste at present (`present_fish_waste`)

Actual whole/carcass fish physically sent to waste management at this event. Record cause and recipient; exclude sold downgraded fish, separated organs and direct environmental releases recorded elsewhere.

- Selected flow: Actual fish rejection to waste at present
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected wastewater sent to treatment at present (`present_water_to_treatment`)

Actual whole wastewater sent to a known treatment recipient, including separately characterized loads. Treatment effluent is outside this foreground unless independently declared; direct releases are exclusive fates.

- Selected flow: Collected wastewater sent to treatment at present
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct water release at present (`present_water_release`)

Actual direct release to identified marine/freshwater/soil compartment; distinguish water mass from constituent-load characterization and exclude parcels sent to treatment or internally transferred.

- Selected flow: Actual direct water release at present
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Evidenced water evaporation at present (`present_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Actual independently evidenced evaporation to air. Do not assign unexplained gutting/fish/water balance differences here; unknown loss is an unresolved ledger item.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual fossil combustion carbon dioxide to air at present (`present_fossil_co2`)

Only actual directly owned fossil combustion releases to compatible air. Determine mass from measured carbon/fuel composition and documented method; no factor supplied here, no respiration or supplier-electricity emissions.

- Selected flow: Actual fossil combustion carbon dioxide to air at present `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_present`
- Binding: `fixed`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual dead whole-fish or carcass material released to water at present (`present_actual_dead_fish_release`)

Only actual documented direct environmental fate of rejected/dead whole fish or carcass at this pass; identify species, head/gut/gill state, raw mass, event, receiving water and applicable management/authorization evidence. Not a prescribed legal disposal route. Keep removed organ/blood fates, wastewater constituents, treatment-bound fish, intended products and stocks separate; never count the same material twice or relabel it as a capture-stage loss.

- Selected flow: Actual dead whole-fish or carcass material released to water at present
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_present: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_present`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_present_actual_dead_fish_release
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: First producer food handover and reference weighing (`handover`)

Receive only fish whose actual head-on gutted form, species, food acceptance and nonfrozen history meet this boundary, whether boxed or unboxed. Weigh drained fish net of package, free water and ice; retain natural body moisture, head and actual retained gills. Packaging is neither edible fish nor automatically an economic co-product. Unknown state or safety acceptance blocks the final denominator. Physical fish handling ends at this gate; attributable later return-voyage/asset burdens remain with their owning period and node.

#### Inputs

##### Product flows

###### Separately measured liquid water (`handover_carrier_in_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`

###### Separately measured solid water ice (`handover_carrier_in_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`



###### Accepted head-on gutted fish received for handover (`handover_fish_in`)

Measure eligible fish actually received from the last producer event, with transfer id. Reconcile final accepted net carcass plus actual rejection and stock changes; never impose final reference kg on this receipt.

- Selected flow: Accepted head-on gutted fish received for handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_handover under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual externally supplied handover electricity (`handover_electricity`)

Only independently metered external power for this gate operation, by actual provider/geography/voltage/mix and supported MJ conversion. Onsite generation is auxiliary throughput with fuel/emissions owned once, not a second purchased-electricity burden. Do not invent powered weighing or move this real operation to a bypassed presentation node.

- Selected flow: Actual externally supplied handover electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure actual role quantity under cp_handover: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_handover_electricity
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wild marine head-on gutted Gadiformes fish at first producer food handover (`food_handover`)

Actual food-accepted, fresh or nonfrozen chilled carcass with head retained and declared actual gills. The 1 kg reference excludes organs removed, ice, free water and packaging; never restore whole-fish or edible-fillet equivalent.

- Selected flow: Wild marine head-on gutted Gadiformes fish at first producer food handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_handover`
- Sources: `reference-normalization-identity`
- Range: Reference quantity identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-normalization-identity`

###### Free water and remaining ice handed across first gate (`handover_carrier_out`)

Record actual recipient-accepted water/ice accompanying product, separate from net fish. It is an interface flow, not automatically a saleable co-product; leftover producer stock remains a stock.

- Selected flow: Free water and remaining ice handed across first gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_handover under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Final actual rejected fish to waste (`handover_reject`)

Fish failing final eligibility are excluded from accepted denominator but retain their attributable resource burdens. Record recipient and cause; a missing acceptance record is not a zero loss.

- Selected flow: Final actual rejected fish to waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_handover under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Final collected drainage sent to management (`handover_drain`)

Actual drainage/meltwater kept for offsite treatment, measured separately from fish. A direct discharge instead uses handover_direct_water, never both for the same parcel.

- Selected flow: Final collected drainage sent to management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_handover under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual final direct water discharge (`handover_direct_water`)

Actual separated water discharged directly at gate, with receiving compartment, actual chemical/organic loads and context. Not a treatment-service output; constituent reporting follows the nonduplicate water convention.

- Selected flow: Actual final direct water discharge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_handover under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Role-specific provisional broad screening estimate; not empirical QA thresholds
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual dead whole-fish or carcass material released to water at handover (`handover_actual_dead_fish_release`)

Only actual documented direct environmental fate of rejected/dead whole fish or carcass at this pass; identify species, head/gut/gill state, raw mass, event, receiving water and applicable management/authorization evidence. Not a prescribed legal disposal route. Keep removed organ/blood fates, wastewater constituents, treatment-bound fish, intended products and stocks separate; never count the same material twice or relabel it as a capture-stage loss.

- Selected flow: Actual dead whole-fish or carcass material released to water at handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_handover: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_handover_actual_dead_fish_release
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual directly owned handover fossil CO2 to unspecified air (`handover_fossil_co2`)

Only actual independently owned fossil combustion at the gate with compatible unspecified-air compartment. Use direct measurement or actual fuel mass, fossil carbon and oxidation method/factor evidence; not a universal fuel factor, vessel-trip duplicate, supplier upstream emission or biogenic respiration.

- Selected flow: Actual directly owned handover fossil CO2 to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure actual role quantity under cp_handover: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Range: Conditional identity/unit-specific independent envelope under conditional_interface_envelopes; unresolved until evidenced
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_handover_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_views | physical ledger and single-output LCA | Always retain two views: an unallocated physical ledger closes captured biomass, organs, carcasses, water/ice, products and wastes; LCA attribution allocates burdens without changing physical partitions. Own shared resources at one node/period first, then attribute once at each actual relevant output boundary, never applying final output shares again. |  |
| allocation_outputs | intended outputs and residues | Enumerate actual sold reference fish, other species/grades, accepted liver/roe/other organs or offal and usable bait, with each actual handover/use. Internal transfers, packages, water/ice and stocks are not automatically economic co-products; waste does not become product through hypothetical value. |  |
| allocation_precedence | joint capture and preparation burdens | First subdivide truly independently measured activities. Allocate residual joint burdens by demonstrable physical relationship only with product-specific causal evidence; otherwise use contemporaneous actual net-revenue shares at the relevant boundary, retaining mass, price, revenue, currency, period and sensitivity. Zero/missing prices, no positive total revenue or unresolved output sets block economic allocation, without default mass allocation or system expansion; no automatic avoided-burden credit. |  |
| allocation_periods | trip runs assets and shared infrastructure | Index trips, capture events, handling runs and reporting periods; link actual cleaning/changeovers to served runs. Allocate vessels, generators, cold systems, tools and reusable boxes by actual service life, replacement/termination and use hours or measured causal driver to consumers and periods, retaining totals and weights summing to 1. Retain no-output, failed, return and idle burdens through the same actual service-period ledger, never deleting them or annualizing twice. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | All actual roles and paired interfaces at this node | Measured and traceable operation records | Numerical: role/substance mass, energy, tare, meter readings, opening/closing stocks, actual raw service quantity, numerical temperature observations with original unit, timestamps/time zone and elapsed durations with actual time units; categorical: species, waterbody, provider, substance, gill/viscera state, grade/food acceptance, invoiced functional unit, event/pass/transfer ids, period identifiers, thermal-state/sensor/event identifiers and destinations. | Use calibrated scales/meters per event and traceable temperature monitoring/calibration or an independently evidenced actual thermal-history method, preserving original temperature/time units and coverage gaps without a universal threshold; reconcile constituents/totals, supply records and receipt evidence. Retain service scope matrix in real-functional-unit auxiliary ledgers. Determine actual substance releases by measurement or independently evidenced composition and method. | kg; MJ; auxiliary actual service units; recorded temperature unit; timestamps/time zone; actual duration unit | Every event and period opening/closing | Complete trip and asset-service reporting period including attributable post-gate return | Wild marine capture and complete voyage responsibility | per 1 kg reference flow | Calibration, raw records, paired transfers, invoices, actual acceptance, energy/material evidence and independent reconciliation |
| `cp_condition` | `condition` | All actual roles and paired interfaces at this node | Measured and traceable operation records | Numerical: role/substance mass, energy, tare, meter readings, opening/closing stocks, actual raw service quantity, numerical temperature observations with original unit, timestamps/time zone and elapsed durations with actual time units; categorical: species, waterbody, provider, substance, gill/viscera state, grade/food acceptance, invoiced functional unit, event/pass/transfer ids, period identifiers, thermal-state/sensor/event identifiers and destinations. | Use calibrated scales/meters per event and traceable temperature monitoring/calibration or an independently evidenced actual thermal-history method, preserving original temperature/time units and coverage gaps without a universal threshold; reconcile constituents/totals, supply records and receipt evidence. Retain service scope matrix in real-functional-unit auxiliary ledgers. Determine actual substance releases by measurement or independently evidenced composition and method. | kg; MJ; auxiliary actual service units; recorded temperature unit; timestamps/time zone; actual duration unit | Every event and period opening/closing | Complete trip and asset-service reporting period including attributable post-gate return | Head-on evisceration and initial cleaning | per 1 kg reference flow | Calibration, raw records, paired transfers, invoices, actual acceptance, energy/material evidence and independent reconciliation |
| `cp_grade` | `grade` | All actual roles and paired interfaces at this node | Measured and traceable operation records | Numerical: role/substance mass, energy, tare, meter readings, opening/closing stocks, actual raw service quantity, numerical temperature observations with original unit, timestamps/time zone and elapsed durations with actual time units; categorical: species, waterbody, provider, substance, gill/viscera state, grade/food acceptance, invoiced functional unit, event/pass/transfer ids, period identifiers, thermal-state/sensor/event identifiers and destinations. | Use calibrated scales/meters per event and traceable temperature monitoring/calibration or an independently evidenced actual thermal-history method, preserving original temperature/time units and coverage gaps without a universal threshold; reconcile constituents/totals, supply records and receipt evidence. Retain service scope matrix in real-functional-unit auxiliary ledgers. Determine actual substance releases by measurement or independently evidenced composition and method. | kg; MJ; auxiliary actual service units; recorded temperature unit; timestamps/time zone; actual duration unit | Every event and period opening/closing | Complete trip and asset-service reporting period including attributable post-gate return | Actual physical and destination grading | per 1 kg reference flow | Calibration, raw records, paired transfers, invoices, actual acceptance, energy/material evidence and independent reconciliation |
| `cp_preserve` | `preserve` | All actual roles and paired interfaces at this node | Measured and traceable operation records | Numerical: role/substance mass, energy, tare, meter readings, opening/closing stocks, actual raw service quantity, numerical temperature observations with original unit, timestamps/time zone and elapsed durations with actual time units; categorical: species, waterbody, provider, substance, gill/viscera state, grade/food acceptance, invoiced functional unit, event/pass/transfer ids, period identifiers, thermal-state/sensor/event identifiers and destinations. | Use calibrated scales/meters per event and traceable temperature monitoring/calibration or an independently evidenced actual thermal-history method, preserving original temperature/time units and coverage gaps without a universal threshold; reconcile constituents/totals, supply records and receipt evidence. Retain service scope matrix in real-functional-unit auxiliary ledgers. Determine actual substance releases by measurement or independently evidenced composition and method. | kg; MJ; auxiliary actual service units; recorded temperature unit; timestamps/time zone; actual duration unit | Every event and period opening/closing | Complete trip and asset-service reporting period including attributable post-gate return | Actual nonfreezing chilling and bounded cold holding | per 1 kg reference flow | Calibration, raw records, paired transfers, invoices, actual acceptance, energy/material evidence and independent reconciliation |
| `cp_present` | `present` | All actual roles and paired interfaces at this node | Measured and traceable operation records | Numerical: role/substance mass, energy, tare, meter readings, opening/closing stocks, actual raw service quantity, numerical temperature observations with original unit, timestamps/time zone and elapsed durations with actual time units; categorical: species, waterbody, provider, substance, gill/viscera state, grade/food acceptance, invoiced functional unit, event/pass/transfer ids, period identifiers, thermal-state/sensor/event identifiers and destinations. | Use calibrated scales/meters per event and traceable temperature monitoring/calibration or an independently evidenced actual thermal-history method, preserving original temperature/time units and coverage gaps without a universal threshold; reconcile constituents/totals, supply records and receipt evidence. Retain service scope matrix in real-functional-unit auxiliary ledgers. Determine actual substance releases by measurement or independently evidenced composition and method. | kg; MJ; auxiliary actual service units; recorded temperature unit; timestamps/time zone; actual duration unit | Every event and period opening/closing | Complete trip and asset-service reporting period including attributable post-gate return | Producer protective presentation | per 1 kg reference flow | Calibration, raw records, paired transfers, invoices, actual acceptance, energy/material evidence and independent reconciliation |
| `cp_handover` | `handover` | All actual roles and paired interfaces at this node | Measured and traceable operation records | Numerical: role/substance mass, energy, tare, meter readings, opening/closing stocks, actual raw service quantity, numerical temperature observations with original unit, timestamps/time zone and elapsed durations with actual time units; categorical: species, waterbody, provider, substance, gill/viscera state, grade/food acceptance, invoiced functional unit, event/pass/transfer ids, period identifiers, thermal-state/sensor/event identifiers and destinations. | Use calibrated scales/meters per event and traceable temperature monitoring/calibration or an independently evidenced actual thermal-history method, preserving original temperature/time units and coverage gaps without a universal threshold; reconcile constituents/totals, supply records and receipt evidence. Retain service scope matrix in real-functional-unit auxiliary ledgers. Determine actual substance releases by measurement or independently evidenced composition and method. | kg; MJ; auxiliary actual service units; recorded temperature unit; timestamps/time zone; actual duration unit | Every event and period opening/closing | Complete trip and asset-service reporting period including attributable post-gate return | First producer food handover and reference weighing | per 1 kg reference flow | Calibration, raw records, paired transfers, invoices, actual acceptance, energy/material evidence and independent reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_normalization | all inventory rows | First close actual unallocated fish, organs, water/ice, other inputs, real fates and stock changes, independently investigating unmeasured differences; normalize truly owned resources by dividing raw quantity by positive accepted final net carcass kg. Retain a separate single-output LCA burden-attribution view with section 7 matrix, without multiplying mass partitions by economic shares or applying final output shares twice. | cp_capture; cp_condition; cp_grade; cp_preserve; cp_present; cp_handover | Unallocated physical per-reference view and separate LCA attribution view |  |
| gutting_balance | condition | Actual fish and water/ice/other receipts plus opening stock equal mutually exclusive actual partial-condition fish transfers, completed gutted carcass transfers, sold organs, organs/rejects to management, direct releases, each water fate and closing stock at that pass; close blood and water loads using a nonduplicate convention. Do not assume prepared net carcass equals received whole fish. | cp_condition | Independently evidenced mass closure and discrepancy investigation |  |
| unit_conversion | all inventory rows | Original kWh multiplied by 3.6 gives MJ; original t multiplied by 1000 gives kg, g multiplied by 0.001 gives kg. Retain raw units, conversions and property evidence; do not mass-convert real service functional units. | raw units; verified support groups | Consistent units with original quantities |  |
| service_range | external service cards | Expand services by provider, scope and actual native functional unit; provider_service_unit is not a controlled unit. Each U_<node>_external_service is a nonnegative finite upper bound supported by matching independent comparable service-period data or matching supplier evidence, normalized to positive accepted final net fish kg. Retain raw quantities, functional unit, denominator, scope, coverage period and independent applicability rationale; never self-validate from the same batch maximum. Without evidence retain the symbol and property/unit-group gaps, without claiming quantitative Range QA or final exchange completion. | actual provider units; independent service evidence; node protocol | Evidenced service bounds or retained gaps |  |
| range_review | non-reference ranges | Role-specific upper screens are provisional broad estimates per 1 kg reference flow: fish/organs 100 kg, bait/consumables/gear 20 kg, packages 10 kg, water 10000 kg, gate carrier water/ice 1000 kg, purchased ice 20 kg, direct fuel 100 kg, fossil CO2 400 kg, other air substances 20 kg, refrigerants 5 kg and energy 1000 MJ; none is an empirical QA threshold. Near-zero output can exceed them: never clip actual values. Independently comparable data or matching supplier evidence must establish applicability before final inventory QA. | role; independent observations; supplier scope | Evidenced range or quantitative evidence gap |  |
| conditional_interface_envelopes | condition_actual_live_fish_return; condition_actual_dead_fish_release; grade_actual_live_fish_return; grade_actual_dead_fish_release; preserve_actual_live_fish_return; preserve_actual_dead_fish_release; present_actual_dead_fish_release; handover_actual_dead_fish_release; condition_partially_prepared_fish; handover_direct_fuel; handover_electricity; handover_operating_materials; handover_external_service; handover_operating_waste; handover_fossil_co2; handover_other_direct_release; present_actual_alternative_fish_product; handover_actual_alternative_fish_product | For each listed conditional role, instantiate actual identity/state/node/pass/numerator unit and matching positive final kg before quantitative QA. U_<row_id> is a finite nonnegative same-unit upper on the explicitly labelled physical or LCA view, established from a separate representative campaign maximum times a predeclared margin >=1, or a matching independent supplier/design envelope. Retain independent source/raw samples, scope, conversion, denominator, view and uncertainty; never use the target batch maximum to validate itself. A symbol, provisional old screen or checker pass supplies no numeric evidence. Service unit/property/unitgroup gaps remain blockers; actual kg-handled is allowed only for a verified native provider reference. No clipping or invented zero. | independent campaign/supplier evidence; actual role and unit; final kg; declared view | independently evidenced U bounds or explicit unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all roles | Verify exact identity by actual substance, flow type/direction, state, use, geography and receiving compartment. Unverified identities or support units remain gaps; a conceptual card cannot replace a concrete final TIDAS exchange. | Concrete identity and support-data evidence |
| quality_events | fish and organ chain | Reconcile capture, gutting, grading, cold and handover states per event; every organ/blood fate and live return/dead discard needs evidence. Unknown cannot pass. | Event graph, measurements, acceptance and time-temperature records |
| quality_complete | period and resource ownership | Cover complete voyages, failed/no-output periods, shared assets and service inclusion matrix; disclose non-mass ecological interactions instead of claiming no impact. Unresolved quantities, ranges, services and output sets block a complete package. | Period ledger, asset service evidence, coverage matrix and independent review |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_capture_bait` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual supplied bait materials”; retain all following collection, quantity and normalization obligations: Only actual bait-using gear activates this role; expand species/form/source and retain supplier preparation and transport burdens. Actual internally supplied or independently own-caught bait has a paired receipt and its own evidenced upstream capture/preparation responsibility, not a burden-free marine stock or a duplicate of target catch. Record unused stock, recovered bait, waste and environmental release separately. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_gear` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Replacement and consumable capture gear”; retain all following collection, quantity and normalization obligations: Physical nets, lines, hooks or other gear entering service, expanded by actual material. Asset-manufacturing attribution is kept in the auxiliary asset ledger, not invented kg of fishing service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_direct_fuel` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual directly owned operation fuel at capture”; retain all following collection, quantity and normalization obligations: Expand actual fuel type, fossil/biogenic composition and supply state. Capture owns full-trip propulsion and shared onboard generation; another node records only independently metered dedicated fuel not included there or in a service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_water_received` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual paired internal water or ice receipt at capture”; retain all following collection, quantity and normalization obligations: Actual internally transferred carrier/process water or ice with matching upstream transfer id and material/state. This is not new abstraction, recirculation turnover or an additional purchase. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_consumables` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual hygiene lubricants and operating consumables at capture”; retain all following collection, quantity and normalization obligations: Expand actual substance/material and service scope, including cleaners and lubricants only where used; exclude bait, gear, packages, fuel and inclusive service inputs already owned elsewhere. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_marine_incidental_stock` | `capture`; inputs; elementary | Identify and separately collect every actual exchange covered by “Incidental marine biomass removed”; retain all following collection, quantity and normalization obligations: Expand by actual species/group removed during the capture event to reconcile retained bycatch, live returns and dead discards. Presence in the water alone is not an extraction. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_other_products` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Other retained intended fishery products”; retain all following collection, quantity and normalization obligations: Actual other species or target fish outside the reference form/use accepted by a recipient. Keep species, destination, price and separate handover; do not treat incidental catches automatically as saleable. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_recovered_bait` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Recovered usable bait transferred”; retain all following collection, quantity and normalization obligations: Actual remaining bait accepted for another use, with transfer id and condition; internal re-use is paired and not a new co-product sale. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_water_transfer` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Actual internal water or ice transfer from capture”; retain all following collection, quantity and normalization obligations: Pair actual carrier/process water and remaining ice to the next recipient by transfer id and state; distinguish product-carried free water from natural fish moisture and water left as stock. Not environmental discharge or sale by default. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Bait waste sent to treatment”; retain all following collection, quantity and normalization obligations: Spoiled/unusable bait or bait residues physically sent to waste management; exclude recovered usable bait and bait actually released to the sea. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_operating_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual operating wastes at capture”; retain all following collection, quantity and normalization obligations: Expand spent consumables, retired materials and containers sent to treatment by material and recipient; exclude separately listed fish, organs, bait and packaging waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_live_returns` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual live target and incidental returns to sea”; retain all following collection, quantity and normalization obligations: Expand by actual species and survival observation at release; do not infer long-term survival or a negative burden. Pair with extracted biomass; retain handling injuries and uncertain status. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait_release` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual bait material released to sea”; retain all following collection, quantity and normalization obligations: Record only material actually released or unrecovered in the capture event, distinguishing fish bait from packaging and gear. Recovered and stored bait are excluded. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_gear_loss` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual lost capture gear to environment”; retain all following collection, quantity and normalization obligations: Identify material, receiving compartment and event for physical unrecovered gear. Retain non-mass habitat, entanglement and seabed interaction evidence in an auxiliary interaction register; no unmeasured emission factor. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_other_air` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other species-resolved direct air releases at capture”; retain all following collection, quantity and normalization obligations: Expand actual pollutant substance/species and air compartment, particulate size/basis and fossil/biogenic carbon distinction. Broad NOx/VOC/PM or an assumed fuel factor is not an exact identity or amount. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_refrigerant` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant leakage to air at capture”; retain all following collection, quantity and normalization obligations: Only actual refrigerant-using equipment activates this role; specify chemical, air compartment, charge/service/recovery inventory and period. No universal leakage percentage or duplicate shared-system release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_condition_direct_fuel` | `condition`; inputs; product | Identify and separately collect every actual exchange covered by “Actual directly owned operation fuel at condition”; retain all following collection, quantity and normalization obligations: Expand actual fuel type, fossil/biogenic composition and supply state. Capture owns full-trip propulsion and shared onboard generation; another node records only independently metered dedicated fuel not included there or in a service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_condition` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_condition_water_received` | `condition`; inputs; product | Identify and separately collect every actual exchange covered by “Actual paired internal water or ice receipt at condition”; retain all following collection, quantity and normalization obligations: Actual internally transferred carrier/process water or ice with matching upstream transfer id and material/state. This is not new abstraction, recirculation turnover or an additional purchase. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_condition` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_condition_consumables` | `condition`; inputs; product | Identify and separately collect every actual exchange covered by “Actual hygiene lubricants and operating consumables at condition”; retain all following collection, quantity and normalization obligations: Expand actual substance/material and service scope, including cleaners and lubricants only where used; exclude bait, gear, packages, fuel and inclusive service inputs already owned elsewhere. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_condition` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_condition_sold_organs` | `condition`; outputs; product | Identify and separately collect every actual exchange covered by “Sold removed organs and offal”; retain all following collection, quantity and normalization obligations: Expand actual liver, roe and other removed material by identity, physical state, intended use and recipient acceptance. Physical removal alone does not prove saleability or zero upstream burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_condition` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_condition_water_transfer` | `condition`; outputs; product | Identify and separately collect every actual exchange covered by “Actual internal water or ice transfer from condition”; retain all following collection, quantity and normalization obligations: Pair actual carrier/process water and remaining ice to the next recipient by transfer id and state; distinguish product-carried free water from natural fish moisture and water left as stock. Not environmental discharge or sale by default. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_condition` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_condition_organ_waste` | `condition`; outputs; waste | Identify and separately collect every actual exchange covered by “Removed organs and blood sent to waste treatment”; retain all following collection, quantity and normalization obligations: Actual removed viscera, liver/roe/gills or collected blood sent to management, including measured carrier water separately reconciled. Never duplicate organs sold or directly discharged. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_condition` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_condition_operating_waste` | `condition`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual operating wastes at condition”; retain all following collection, quantity and normalization obligations: Expand spent consumables, retired materials and containers sent to treatment by material and recipient; exclude separately listed fish, organs, bait and packaging waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_condition` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_condition_other_air` | `condition`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other species-resolved direct air releases at condition”; retain all following collection, quantity and normalization obligations: Expand actual pollutant substance/species and air compartment, particulate size/basis and fossil/biogenic carbon distinction. Broad NOx/VOC/PM or an assumed fuel factor is not an exact identity or amount. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_condition` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_condition_refrigerant` | `condition`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant leakage to air at condition”; retain all following collection, quantity and normalization obligations: Only actual refrigerant-using equipment activates this role; specify chemical, air compartment, charge/service/recovery inventory and period. No universal leakage percentage or duplicate shared-system release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_condition` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_direct_fuel` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Actual directly owned operation fuel at grade”; retain all following collection, quantity and normalization obligations: Expand actual fuel type, fossil/biogenic composition and supply state. Capture owns full-trip propulsion and shared onboard generation; another node records only independently metered dedicated fuel not included there or in a service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_water_received` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Actual paired internal water or ice receipt at grade”; retain all following collection, quantity and normalization obligations: Actual internally transferred carrier/process water or ice with matching upstream transfer id and material/state. This is not new abstraction, recirculation turnover or an additional purchase. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_consumables` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Actual hygiene lubricants and operating consumables at grade”; retain all following collection, quantity and normalization obligations: Expand actual substance/material and service scope, including cleaners and lubricants only where used; exclude bait, gear, packages, fuel and inclusive service inputs already owned elsewhere. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_water_transfer` | `grade`; outputs; product | Identify and separately collect every actual exchange covered by “Actual internal water or ice transfer from grade”; retain all following collection, quantity and normalization obligations: Pair actual carrier/process water and remaining ice to the next recipient by transfer id and state; distinguish product-carried free water from natural fish moisture and water left as stock. Not environmental discharge or sale by default. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_operating_waste` | `grade`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual operating wastes at grade”; retain all following collection, quantity and normalization obligations: Expand spent consumables, retired materials and containers sent to treatment by material and recipient; exclude separately listed fish, organs, bait and packaging waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_other_air` | `grade`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other species-resolved direct air releases at grade”; retain all following collection, quantity and normalization obligations: Expand actual pollutant substance/species and air compartment, particulate size/basis and fossil/biogenic carbon distinction. Broad NOx/VOC/PM or an assumed fuel factor is not an exact identity or amount. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_refrigerant` | `grade`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant leakage to air at grade”; retain all following collection, quantity and normalization obligations: Only actual refrigerant-using equipment activates this role; specify chemical, air compartment, charge/service/recovery inventory and period. No universal leakage percentage or duplicate shared-system release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_direct_fuel` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Actual directly owned operation fuel at preserve”; retain all following collection, quantity and normalization obligations: Expand actual fuel type, fossil/biogenic composition and supply state. Capture owns full-trip propulsion and shared onboard generation; another node records only independently metered dedicated fuel not included there or in a service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_preserve` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_water_received` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Actual paired internal water or ice receipt at preserve”; retain all following collection, quantity and normalization obligations: Actual internally transferred carrier/process water or ice with matching upstream transfer id and material/state. This is not new abstraction, recirculation turnover or an additional purchase. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_preserve` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_consumables` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Actual hygiene lubricants and operating consumables at preserve”; retain all following collection, quantity and normalization obligations: Expand actual substance/material and service scope, including cleaners and lubricants only where used; exclude bait, gear, packages, fuel and inclusive service inputs already owned elsewhere. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_preserve` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_water_transfer` | `preserve`; outputs; product | Identify and separately collect every actual exchange covered by “Actual internal water or ice transfer from preserve”; retain all following collection, quantity and normalization obligations: Pair actual carrier/process water and remaining ice to the next recipient by transfer id and state; distinguish product-carried free water from natural fish moisture and water left as stock. Not environmental discharge or sale by default. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_preserve` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_operating_waste` | `preserve`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual operating wastes at preserve”; retain all following collection, quantity and normalization obligations: Expand spent consumables, retired materials and containers sent to treatment by material and recipient; exclude separately listed fish, organs, bait and packaging waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_preserve` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_other_air` | `preserve`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other species-resolved direct air releases at preserve”; retain all following collection, quantity and normalization obligations: Expand actual pollutant substance/species and air compartment, particulate size/basis and fossil/biogenic carbon distinction. Broad NOx/VOC/PM or an assumed fuel factor is not an exact identity or amount. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_preserve` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_refrigerant` | `preserve`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant leakage to air at preserve”; retain all following collection, quantity and normalization obligations: Only actual refrigerant-using equipment activates this role; specify chemical, air compartment, charge/service/recovery inventory and period. No universal leakage percentage or duplicate shared-system release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_preserve` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_package_input` | `present`; inputs; product | Identify and separately collect every actual exchange covered by “Disposable packaging and replacement reusable containers”; retain all following collection, quantity and normalization obligations: Actual boxes, liners, labels or containers crossing into this node; expand material and reuse status. Use asset-service records for reuse manufacture, not repeated full replacement mass. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_direct_fuel` | `present`; inputs; product | Identify and separately collect every actual exchange covered by “Actual directly owned operation fuel at present”; retain all following collection, quantity and normalization obligations: Expand actual fuel type, fossil/biogenic composition and supply state. Capture owns full-trip propulsion and shared onboard generation; another node records only independently metered dedicated fuel not included there or in a service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_water_received` | `present`; inputs; product | Identify and separately collect every actual exchange covered by “Actual paired internal water or ice receipt at present”; retain all following collection, quantity and normalization obligations: Actual internally transferred carrier/process water or ice with matching upstream transfer id and material/state. This is not new abstraction, recirculation turnover or an additional purchase. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_consumables` | `present`; inputs; product | Identify and separately collect every actual exchange covered by “Actual hygiene lubricants and operating consumables at present”; retain all following collection, quantity and normalization obligations: Expand actual substance/material and service scope, including cleaners and lubricants only where used; exclude bait, gear, packages, fuel and inclusive service inputs already owned elsewhere. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_package_onward` | `present`; outputs; product | Identify and separately collect every actual exchange covered by “Actual packaging accompanying transferred fish”; retain all following collection, quantity and normalization obligations: Physical package mass transferred with fish, paired to handover packaging receipt. Reusable assets remaining at site are stocks; attributed manufacturing mass is not a physical package output. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_water_transfer` | `present`; outputs; product | Identify and separately collect every actual exchange covered by “Actual internal water or ice transfer from present”; retain all following collection, quantity and normalization obligations: Pair actual carrier/process water and remaining ice to the next recipient by transfer id and state; distinguish product-carried free water from natural fish moisture and water left as stock. Not environmental discharge or sale by default. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_actual_alternative_fish_product` | `present`; outputs; product | Identify and separately collect every actual exchange covered by “Actual independently accepted nonreference fish product at present”; retain all following collection, quantity and normalization obligations: Only an actual independently intended and accepted alternative fish output with species, true body/form/state/use, measured mass and external recipient/handoff. It is disjoint from the reference, earlier external sales, waste, direct release and pending stock. A mere failed inspection or hypothetical value does not create a coproduct; retain its own output-allocation evidence and real gate. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_package_waste` | `present`; outputs; waste | Identify and separately collect every actual exchange covered by “Packaging rejects and retired containers”; retain all following collection, quantity and normalization obligations: Actual material sent to a named waste recipient, separated from packages transferred or reusable stock. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_operating_waste` | `present`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual operating wastes at present”; retain all following collection, quantity and normalization obligations: Expand spent consumables, retired materials and containers sent to treatment by material and recipient; exclude separately listed fish, organs, bait and packaging waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_other_air` | `present`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other species-resolved direct air releases at present”; retain all following collection, quantity and normalization obligations: Expand actual pollutant substance/species and air compartment, particulate size/basis and fossil/biogenic carbon distinction. Broad NOx/VOC/PM or an assumed fuel factor is not an exact identity or amount. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_present_refrigerant` | `present`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual refrigerant leakage to air at present”; retain all following collection, quantity and normalization obligations: Only actual refrigerant-using equipment activates this role; specify chemical, air compartment, charge/service/recovery inventory and period. No universal leakage percentage or duplicate shared-system release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_package_in` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Packaging physically received with fish”; retain all following collection, quantity and normalization obligations: Paired package transfer from presentation or actual independently sourced package, with material and reuse status; do not duplicate the preceding receipt. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_handover under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_carrier_in` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Free water and ice received with fish”; retain all following collection, quantity and normalization obligations: Measure ice and free water arriving with the final fish transfer as distinct actual identities; exclude natural tissue moisture. Pair their preceding node output, never treat transferred water as a new abstraction. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_handover under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_direct_fuel` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual separately owned handover operation fuel”; retain all following collection, quantity and normalization obligations: Only fuel actually burned for independently owned gate weighing/handling equipment or generation; identify supplied fuel composition/state and calibrated mass. Exclude complete-trip capture fuel, other-node fuel and inclusive provider services. Manual/passive handover does not acquire a positive fuel amount. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_handover: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_operating_materials` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual gate weighing and handling consumables”; retain all following collection, quantity and normalization obligations: Identify only actual operating cleaners, lubricants, batteries or replacement material by specification, state and supplier scope; separate accessory packaging/carrier water, fuel and inclusive service material. Equipment service attribution remains in the actual asset ledger, not full manufacture per weighing. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_handover: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_package_out` | `handover`; outputs; product | Identify and separately collect every actual exchange covered by “Packaging physically handed across first gate”; retain all following collection, quantity and normalization obligations: Actual accompanying package/containers leave the producer gate, separate from the reference carcass. Record ownership/return terms; no automatic economic co-product or downstream disposal within this boundary. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_handover under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_handover` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_actual_alternative_fish_product` | `handover`; outputs; product | Identify and separately collect every actual exchange covered by “Actual independently accepted nonreference fish product at handover”; retain all following collection, quantity and normalization obligations: Only an actual independently intended and accepted alternative fish output with species, true body/form/state/use, measured mass and external recipient/handoff. It is disjoint from the reference, earlier external sales, waste, direct release and pending stock. A mere failed inspection or hypothetical value does not create a coproduct; retain its own output-allocation evidence and real gate. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_handover: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_operating_waste` | `handover`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent gate operating material handed to treatment”; retain all following collection, quantity and normalization obligations: Only actual spent operating material with measured identity/mass and treatment recipient; keep packaging, rejected fish, water, retained reusable stock and actual direct releases separate. Inclusive contractor waste is not a second producer-owned output. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_handover: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_other_direct_release` | `handover`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other substance-specific gate operational release”; retain all following collection, quantity and normalization obligations: Expand only actual node-owned exhaust, operating-material leakage or other direct substance releases by exact substance/state, receiving medium, raw mass and independently supported method. Exclude fossil CO2, whole fish and carrier-water already separately owned; do not infer an emission from missing material balance or count provider-inclusive emissions twice. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure actual role quantity under cp_handover: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_external_service` | `capture`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally supplied service at capture”; all collection and conversion obligations apply: Conditional actual contracted capture/support, gutting/cleaning, grading, cold/ice manufacture or presentation service according to this node responsibility; instantiate each provider and actual native invoiced functional unit from the node auxiliary service ledger. provider_service_unit is an unresolved semantic placeholder, not a verified unit or permission to invent material kg for a service. A real provider service referenced to kg handled is allowed only after verifying that native service reference, conversion and property/unit-group support; it is not a material-mass substitution. Retain scope/resource inclusion matrix and supplier burden, excluding already included fuel, electricity, water, ice and consumables. Flow property / unit: Actual provider-specific service property (support unresolved) / provider_service_unit Amount rule: Measure actual role quantity under cp_capture under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_condition_external_service` | `condition`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally supplied service at condition”; all collection and conversion obligations apply: Conditional actual contracted capture/support, gutting/cleaning, grading, cold/ice manufacture or presentation service according to this node responsibility; instantiate each provider and actual native invoiced functional unit from the node auxiliary service ledger. provider_service_unit is an unresolved semantic placeholder, not a verified unit or permission to invent material kg for a service. A real provider service referenced to kg handled is allowed only after verifying that native service reference, conversion and property/unit-group support; it is not a material-mass substitution. Retain scope/resource inclusion matrix and supplier burden, excluding already included fuel, electricity, water, ice and consumables. Flow property / unit: Actual provider-specific service property (support unresolved) / provider_service_unit Amount rule: Measure actual role quantity under cp_condition under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_condition` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_grade_external_service` | `grade`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally supplied service at grade”; all collection and conversion obligations apply: Conditional actual contracted capture/support, gutting/cleaning, grading, cold/ice manufacture or presentation service according to this node responsibility; instantiate each provider and actual native invoiced functional unit from the node auxiliary service ledger. provider_service_unit is an unresolved semantic placeholder, not a verified unit or permission to invent material kg for a service. A real provider service referenced to kg handled is allowed only after verifying that native service reference, conversion and property/unit-group support; it is not a material-mass substitution. Retain scope/resource inclusion matrix and supplier burden, excluding already included fuel, electricity, water, ice and consumables. Flow property / unit: Actual provider-specific service property (support unresolved) / provider_service_unit Amount rule: Measure actual role quantity under cp_grade under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grade` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_preserve_external_service` | `preserve`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally supplied service at preserve”; all collection and conversion obligations apply: Conditional actual contracted capture/support, gutting/cleaning, grading, cold/ice manufacture or presentation service according to this node responsibility; instantiate each provider and actual native invoiced functional unit from the node auxiliary service ledger. provider_service_unit is an unresolved semantic placeholder, not a verified unit or permission to invent material kg for a service. A real provider service referenced to kg handled is allowed only after verifying that native service reference, conversion and property/unit-group support; it is not a material-mass substitution. Retain scope/resource inclusion matrix and supplier burden, excluding already included fuel, electricity, water, ice and consumables. Flow property / unit: Actual provider-specific service property (support unresolved) / provider_service_unit Amount rule: Measure actual role quantity under cp_preserve under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_preserve` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_present_external_service` | `present`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual externally supplied service at present”; all collection and conversion obligations apply: Conditional actual contracted capture/support, gutting/cleaning, grading, cold/ice manufacture or presentation service according to this node responsibility; instantiate each provider and actual native invoiced functional unit from the node auxiliary service ledger. provider_service_unit is an unresolved semantic placeholder, not a verified unit or permission to invent material kg for a service. A real provider service referenced to kg handled is allowed only after verifying that native service reference, conversion and property/unit-group support; it is not a material-mass substitution. Retain scope/resource inclusion matrix and supplier burden, excluding already included fuel, electricity, water, ice and consumables. Flow property / unit: Actual provider-specific service property (support unresolved) / provider_service_unit Amount rule: Measure actual role quantity under cp_present under the quantity method in this section and section 8: first close unallocated physical transfers, losses and stocks and own shared resources once, then divide by positive accepted final carcass kg; a separate single-output LCA view allocates burdens only once under section 7, retaining physical ledger and allocation matrix without multiplying mass partitions by economic shares. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_present` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_handover_external_service` | `handover`; inputs; product | Individually identify and independently measure the actual exchanges within “Actual provider-native gate weighing or handling service”; all collection and conversion obligations apply: Only a genuinely purchased gate weighing/handling service: record provider, real task/invoice functional quantity, scope and compatible upstream dataset. provider_service_unit and reference property/unitgroup remain unresolved until verified. A genuine kg-handled supplier reference is allowed with verified native support and measured conversion; never substitute material kg for service hours. Exclude provider-inclusive utilities/direct emissions from producer direct rows, while separately owned operations remain accounted. Flow property / unit: Actual provider-specific service property (support unresolved) / provider_service_unit Amount rule: Measure actual role quantity under cp_handover: close unallocated physical receipts, transfers, outputs, losses and stocks and own shared node/period resources once, then divide by positive accepted final net carcass kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain physical ledger and allocation matrix, never shrink mass partitions by output shares. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final output | Only food_handover is final reference. Check marine wild species, head retained/viscera removed, actual gills, food acceptance, nonfrozen history and net mass; unknown cannot enter denominator. One first gate per lot, without duplicating internal transfers. | un-cpc-3-2025 |
| validate_balance | actual physical records | Reconcile gutting mass partitions, water/ice fates, other species, stocks, wastes and sea returns in the unallocated ledger; pair receipts/outputs by same transfer id. Never close economically allocated amounts against unallocated whole fish or fill unexplained differences with evaporation. |  |
| validate_technology | capture and handling events | Check actual parent, technology deltas, event coexistence/exclusion, cleaning/changeovers and repeated-pass ids. Actual trawl/net/hook inputs, bycatch, losses and habitat evidence require real coverage, not completion asserted from candidate routes. | noaa-atlantic-cod |
| validate_attribution | LCA resources and periods | Independently check allocation matrix and unallocated physical view: own each resource once, shares at each boundary sum to 1, no second final share; missing revenue and no output do not erase burdens. Reconcile complete return, asset service, replacement and inclusive-service scope to avoid duplicates. |  |
| validate_ranges | all cards and final package | Check supplied Ranges on the same actual numerator unit, final-reference basis and physical or LCA view. Provisional estimates do not prove plausibility or supply missing amounts. Cards without numerical Ranges retain an independent range/uncertainty evidence need, not a fabricated bound. Before actual exchange completion obtain each instance’s own representative evidence, quantity, identity and real service unit; before numerical QA establish the applicable independent envelope without using the tested batch to validate itself. Preserve and investigate genuine outliers without clipping. |  |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for wild marine head-on gutted Gadiformes food at first producer handover. |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections only after actual exchange and quality completion. |
| allowed_use | Matching actual species/form/origin/gate/context with explicit quantitative and identity evidence. |
| excluded_use | Whole-leaf universal average; live/ungutted/headed/filleted/frozen/farmed/inland/processed fish; later trader gate; unsupported service or identity substitutions. |
| required_metadata | Actual species, waterbody, gear, producer/gate, event graph, gill/viscera state, food acceptance, cold history, period, unit/net drainage, output set, upstream scope and resource ownership. |
| required_quality_disclosure | Identity/quantity/range/service gaps, source age and representativeness, mass closure, unallocated and LCA views, allocation method/sensitivity, no-output treatment and non-mass ecological evidence. |
| update_trigger | Changed origin/form/gate/gear, gutting or cold practice, output prices/fates, suppliers, service scope, asset periods, accepted food requirements or independent quantitative evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC 3.0 explanatory notes, 30 June 2025, subclass 04241. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification origin/taxonomic/state scope only; our marine head-on gutted subset is narrower. |
| `noaa-atlantic-cod` | official_guidance | NOAA Fisheries, Atlantic Cod. https://www.fisheries.noaa.gov/species/atlantic-cod | Atlantic cod gear examples only; no universal gear, performance, stock status or legal rule. |
| `fao-wet-fish-handling` | official_guidance | FAO, Some Notes on Fish Handling and Processing. https://www.fao.org/4/x5927e/x5927e01.htm | Historical qualitative wet-fish gutting, washing, icing and organ-destination interfaces; no numeric yields, ice ratios or shelf-life defaults. |
| `fao-inshore-fish-handling` | official_guidance | FAO, Handling Inshore Fish. https://www.fao.org/4/x5892e/x5892e01.htm | Qualitative cleaning, gut removal and handling risks; historical advice is not universal discharge permission or current legal compliance. |
| `reference-normalization-identity` | method_factor | Dimensional normalization identity defined in this PCR, sections 3 and 8: accepted net carcass kg divided by the same positive accepted net carcass kg equals 1. This is a declared method identity, not an external observation. | Fixed reference-quantity identity only; no yield, factor, real batch mass or empirical interval. |
