---
pcr_id: pcr.wild-live-whole-hand-tonged-eastern-oysters
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild live whole hand-tonged Eastern oysters

## 1. Scope and Applicability

Construct foreground data for naturally recruited Eastern oysters (Crassostrea virginica) captured with hand-operated shaft tongs in Maryland Chesapeake Bay and accepted live, whole in their native shells by the harvester's first physical recipient. Capture is removal of an existing natural stock, independent of managed biological production and of subsequent cleaning. Maryland records establish an actual hand-tong fishery, not a universal natural origin: public bars may receive planted juvenile oysters and substrate. Require positive site/cohort provenance and enhancement-history evidence before selecting this narrower scope. Unknown provenance is a selection gap. Deliberately seeded, relaid or enhanced cohorts require separate review; historical shared habitat interventions must be disclosed and attributable burdens reviewed.

Exclude farming, hatchery and nursery routes, patent or hydraulic tongs, dredges and diving; other species and origins; dead, frozen, opened, shucked or cooked reference products. Pre-gate real holding/cooling may begin immediately after capture and overlap other work. No mandatory depuration, temperature, storage duration, bushel conversion, ecosystem-service credit or safety certification is established here. Official sources support qualitative route facts only; foreground protocols establish quantities and selected boundary implementation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-whole-hand-tonged-eastern-oysters |
| classification_refs | cpc:3.0:04421; narrower than Wild oysters, live, fresh or chilled |
| covered_products | Naturally recruited live whole Crassostrea virginica in native shells, Maryland Chesapeake Bay, hand shaft tongs, first harvester physical recipient acceptance |
| excluded_products | Cultivated, deliberately seeded/relaid/enhanced cohorts; uncertain provenance; other oysters/origins/gears; dead, frozen, shucked or processed references |
| representative_product | Traceable naturally recruited live Eastern oyster lot accepted in native shells |
| production_route | Natural stock capture by hand shaft tongs; actual conditional primary cleaning, sorting, live preservation and presentation; delivery to acceptance |
| market_state | Live whole shellstock at the declared acceptance gate; actual chilling recorded without changing live status |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted live whole naturally recruited Eastern oysters in native shells at first harvester physical recipient acceptance |
| How much | 1 kg accepted net whole live mass |
| How well | Same species, provenance, hand-tong route and acceptance specification; native shell and internal contents included; no loose foreign material, free seawater or packaging/tare |
| How long or cycle | Declared complete harvest trips and reporting season/period, including failed trips; disclose asset acquisition, use, maintenance, replacement and retirement periods |
| reference_flow_link | `oysters_accepted` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live whole naturally recruited Eastern oysters at first harvester physical recipient acceptance |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Crassostrea virginica; Maryland Chesapeake Bay site and cohort origin; natural recruitment evidence; enhancement history; hand shaft tongs; harvest dates/trip/lot; live whole native shell; acceptance location/time/recipient; drainage/tare and calibrated net-mass method; actual cleaning/holding/presentation; reporting and asset periods |

Required qualifiers belong in the foreground package. Native shells are reference product constituents, not a shell coproduct. Declare the legal/title and invoice points separately when they differ from physical acceptance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted live whole oysters with calibrated scales and a declared reproducible drainage/tare procedure under cp_accept; exclude free seawater, loose sediment/foreign material and packaging while retaining native shells and internal contents. |
| `volume_count_conversion` | harvest and acceptance records | Mass | kg | Bushels, bags and animal counts require paired representative lot-specific calibrated net-mass measurements and uncertainty; no universal kg/bushel or flesh-yield conversion. |
| `native_units` | all inventory rows | Actual exchange property | Actual exchange unit | Preserve mass, energy and each service's genuine measured unit; litres require measured density when converting to kg; electricity records may be converted by 1 kWh = 3.6 MJ. Never treat service hours as kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Positively evidenced naturally recruited oysters in the declared Maryland Chesapeake Bay habitat before hand-tong removal; disclose historical site interventions |
| starting_condition_role | Natural stock starting condition, not purchased grow-out stock or zero-impact assertion |
| product_classification_scope | Wild oyster category with the narrower species, natural-origin, geography, gear and live acceptance constraints above |
| recursive_input_rule | Purchased or transferred oysters are separately identified upstream inputs with traceable origin and burden; do not loop the same lot through this PCR or relabel relaid/seeded cohorts as natural stock |
| upstream_dataset_requirement | Match all purchased fuels, materials, assets and services to their actual supply boundary; natural recruitment has no invented hatchery/feed inventory, while attributable habitat interventions require review and inclusion |
| disclosure | Site/cohort provenance, intervention history and attribution, complete trips/periods, actual routes and support, exclusions/data gaps, recipient gate, all intended outputs, shared resources and service coverage |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_provenance` | capture selection | Establish natural cohort origin and site history positively; public fishery designation is insufficient because public bars can be planted. Exclude deliberate seeded/relaid/enhanced cohorts pending separate review. Review attributable historical habitat interventions without silently assigning zero. | maryland-oyster-landings; noaa-eastern-oyster |
| `whole_trip_gate` | all nodes | Include outbound travel, search/tonging, unsuccessful trips, return, landing and necessary pre-gate shore support through first physical recipient acceptance; stop before recipient depuration, opening and processing. Invoice/title alone does not determine the gate. | |
| `conditional_interfaces` | condition, sort, preserve, accept | Record transfer ids and actual event order; no invented serial sequence. Preservation can start at capture and overlap sorting or presentation. Each event/resource has one owner. Cleaning only activates for actual animal cleaning/preparation; equipment-only cleaning leaves animals on bypass and belongs to its operating node. | |
| `support_boundary` | shared vessel, gear and shore support | Record asset/service coverage, consuming nodes and periods. Account for fuels, electricity, water, consumables, maintenance, repair, acquisition and retirement where attributable. Choose inclusive purchased service or its covered direct resources/emissions/capital once; add only demonstrably uncovered parts. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| capture | Hand-tong capture and full vessel trip | required | Selected provenance and hand shaft tong gear proven | Remove natural stock; transfer raw live catch to actual next node; classify returned/incidental material | Per 1 kg reference flow |
| condition | Primary animal cleaning/preparation | conditional | Actual bounded animal washing or loose-material removal occurs | Raw collected shellstock to prepared live shellstock; bypass when absent | Per 1 kg reference flow |
| sort | Grade and destination sorting | required | All lots require live/accepted versus return/reject destination decision | Incoming raw/prepared/held live oysters to intended grade lots and explicit return/reject states | Per 1 kg reference flow |
| preserve | Pre-gate live preservation | conditional | Actual bounded holding, cooling or other live support occurs | Usable live shellstock to still-live supported shellstock; record losses | Per 1 kg reference flow |
| accept | Presentation, pre-gate delivery and recipient acceptance | required | Every reference lot reaches physical acceptance | Present sorted live oysters, separate package tare, reconcile accepted and refused masses | Per 1 kg reference flow |

Natural-stock removal and live returns are mandatory physical catch/ecological-impact records under cp_capture and cp_sort. Whole-animal shell-inclusive mass is not ecological biomass mass. Do not force removal or live returns into an elementary exchange: require an explicit compatible impact method and verified resource/return identity, preserving ecological measures separately from the product mass ledger.

Production is trip/batch based with reporting-season, shared-service and asset-period indexes. A transfer may connect capture, condition, sort, preserve and accept in the actual order; repeated interventions use uniquely indexed instances and never duplicate animals as final outputs. All input and output cards below are calculated per reference basis by period normalization using their own node protocol; record unnormalized physical batch quantities first. Every amount rule below describes raw measurement or attribution before that explicit division by the same period's accepted net reference mass, except the 1 kg reference normalization identity. Conditional umbrella cards expand into zero, one or multiple separately identified exchanges with independent quantities, actual flow classification and destinations. Each expanded exchange requires its own U_instance and verified identity; parent U_row is neither a shared aggregate cap nor an inherited bound.

### Process: Hand-tong capture and full vessel trip (`capture`)

#### Inputs

##### Product flows

#### Outputs

##### Product flows

###### Collected whole live catch (`capture_live`)

Collected whole live shellstock transfers to the next actual node with trip/lot/transfer id; this is internal flow, never an additional accepted reference output.

- Selected flow: Raw live whole Eastern oysters after hand-tong capture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual transferred net whole live mass under cp_capture, not fixed to 1 kg.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Provisional evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_capture_live
  - Unit: kg
  - Basis: per 1 kg reference flow; same transfer records as next-node receipt
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct fossil carbon dioxide (`capture_co2`)

Only actual direct fossil-fuel combustion emitting carbon dioxide to air; exclude animal respiration and emissions covered by purchased inclusive services. Retain carbon/factor evidence and actual receiving-air specificity.

- Selected flow: Carbon dioxide, fossil, to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculated from node-owned consumed fossil fuel and documented fuel-specific carbon/emission factor under cp_capture.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Provisional factor and activity evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_capture_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; independently review actual fuel-factor evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary animal cleaning/preparation (`condition`)

#### Inputs

##### Product flows

###### Raw live shellstock receipt (`condition_live_in`)

Actual incoming raw live oysters only when animal preparation occurs; equipment-only cleaning does not route oysters through this node.

- Selected flow: Raw live whole Eastern oysters entering primary preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Transfer-linked actual incoming net mass under cp_condition.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Provisional evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_condition_live_in
  - Unit: kg
  - Basis: per 1 kg reference flow; independently evidenced transfer bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared live shellstock (`condition_live_out`)

Whole live oysters after bounded loose-material cleaning transfer to the actual next node; no shucking, shell separation or fixed yield is implied.

- Selected flow: Prepared live whole Eastern oysters after primary preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual outgoing net live mass under cp_condition.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Provisional evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_condition_live_out
  - Unit: kg
  - Basis: per 1 kg reference flow; reconcile preparation receipt, water and removed material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Grade and destination sorting (`sort`)

#### Inputs

##### Product flows

###### Sorting receipt (`sort_live_in`)

Actual raw, prepared or previously held whole live oysters arrive with transfer ids and state; do not assume primary cleaning always precedes sorting.

- Selected flow: Live whole Eastern oysters entering destination sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured incoming net mass under cp_sort.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Range: Provisional evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_sort_live_in
  - Unit: kg
  - Basis: per 1 kg reference flow; independently evidenced incoming bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

### Process: Pre-gate live preservation (`preserve`)

#### Inputs

##### Product flows

###### Live preservation receipt (`preserve_live_in`)

Live raw, prepared or sorted oysters enter the actual holding/cooling instance. This may begin at capture; measure repeated transfers without recounting final production.

- Selected flow: Live whole Eastern oysters entering pre-gate preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual incoming net mass under cp_preserve.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_preserve_live_in
  - Unit: kg
  - Basis: per 1 kg reference flow; actual instance transfer bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved live shellstock (`preserve_live_out`)

Still-live whole oysters leave the actual preservation instance to the next recorded node, with observed condition, duration and hand-off. Live status is evidenced, not inferred from cooling.

- Selected flow: Live whole Eastern oysters after pre-gate preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual outgoing net live mass under cp_preserve.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_preserve_live_out
  - Unit: kg
  - Basis: per 1 kg reference flow; independently reconcile mortality and transfer
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Presentation, pre-gate delivery and recipient acceptance (`accept`)

#### Inputs

##### Product flows

###### Reference-bound live lot receipt (`accept_live_in`)

Sorted live oysters, with actual preparation/preservation state, enter presentation/delivery. Upstream bypasses and multiple holding events retain traceable transfer ids.

- Selected flow: Live whole Eastern oysters presented for physical recipient acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured incoming net mass under cp_accept; may exceed accepted mass and is never fixed to 1 kg.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept`
- Range: Provisional evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_accept_live_in
  - Unit: kg
  - Basis: per 1 kg reference flow; independently reconcile receipt and refusal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted whole live oysters (`oysters_accepted`)

The sole final reference output is the live whole natural-origin lot accepted by the harvester's first physical recipient, before opening/depuration/processing. Retain actual batch mass and acceptance record; normalize that same accepted mass to 1 kg.

- Selected flow: Live whole naturally recruited Eastern oysters at first harvester physical recipient acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accept`
- Range: Normalization identity from the same accepted mass, not empirical yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow; same accepted-mass records divided by themselves
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reconcile_before_attribute` | all nodes/trips | Reconcile physical inputs, transfers, water/foreign material, all intended outputs, returns, mortalities, waste and stock changes before allocation. Record every intended grade/species hand-off once. Packaging is ancillary and whole native shells remain oysters; mortality/bycatch is not automatically coproduct. | |
| `specific_attribution` | multiple intended outputs | Prefer direct measured assignment and subdivision by actual effort/resource use. For inseparable shared trips/periods require an explicit reviewed PCR-specific causal attribution decision, evidence and sensitivity; do not impose mass, revenue or substitution by default. Without a defensible decision the multi-output dataset remains incomplete. | |
| `period_shared` | vessel, gear, services and shore assets | Index acquisition, use, repair/replacement and retirement over actual asset/service periods; enumerate consuming nodes/outputs and allocate using recorded usage. Include failed trips within the complete supported period. Reconcile all shares to the asset/service total; never charge full acquisition every season or an inclusive service plus its covered burdens. | |
| `no_automatic_credit` | wild stock and returns | No automatic carbon storage, filtration, habitat-restoration, biodiversity, avoided-treatment or mortality credit. Record actual intervention and impact evidence separately; credits require a separately reviewed method and boundary. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Protocol aggregation fields state the final reference basis. Each protocol retains raw trip/event quantities first, attributes actual node-owned resources, and divides by the same complete period's accepted net mass from cp_accept. Pair transfers; condition owns actual animal preparation only, sort reconciles every intended grade/destination, preserve owns actual overlapping support once, and accept reconciles refusals, packaging and reusable stock. These responsibilities remain in the raw ledgers and calculation rules rather than changing the reference denominator.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_capture | capture | Complete trip, stock removal, support and releases | Trip and asset ledger | trip/site/cohort provenance; enhancement history; dates; gear; crew/hours; fuel stocks/receipts; engine/factor; raw catch; incidental input; live/dead returns; lost gear; transfer ids; assets/service coverage/consumers/periods | Reconcile trip logs with calibrated weighing, fuel stock balance, purchase/service records and site/cohort documents; reconstruct uncertain returns with method/uncertainty evidence | kg; actual resource/service units | Each trip/event and asset change | Complete declared reporting period, including failed trips and return legs; all relevant asset phases | Actual vessel, site and pre-gate support | per 1 kg reference flow | Scale/density/factor records; provenance documents; complete log register; service boundary and share audit |
| cp_condition | condition | Animal cleaning resources and prepared outputs | Preparation event ledger | event/lot/transfer ids; activation/bypass; raw/prepared live mass; water supply/abstraction; makeup/discharge; consumables; energy/service; loose material; mortality; waste/destination; shared-event owner | Weigh before/after under consistent drainage, meter resource use and record actual waste/discharge; equipment-only cleaning belongs to operating node | kg; actual resource/service units | Each preparation and cleaning event | All actual pre-gate preparation events in reporting period | Actual animal-preparation location | per 1 kg reference flow | Calibrations; event observations; meter/invoice records; destination receipts |
| cp_sort | sort | Grade and destination decisions | Lot sorting ledger | incoming state/mass; grade/species/destination; live/dead/return/reject masses; transfer ids; intended-output hand-offs; support use; cleaning owner | Calibrated net weighing and observed live-state/destination classification; reconcile all output states, including non-reference intended outputs | kg; actual support units | Each lot and sorting event | All lots/trips in declared period | Actual grading/landing location | per 1 kg reference flow | Scale records; grade specifications; return observations; output/destination receipts |
| cp_preserve | preserve | Actual live-support instances | Holding/cooling event ledger | instance/lot/transfer ids; start/end time; live condition; temperature when measured; input/output masses; energy; media makeup/recirculation; equipment/service coverage; mortality; waste; leakage/discharge substance/medium | Record actual intervention and duration, meter energy/media and weigh live output; classify direct releases and waste independently | kg; MJ; actual media/service units | Each actual support instance | Capture-to-acceptance events including overlaps in reporting period | Actual vessel or pre-gate holding location | per 1 kg reference flow | Logs/meters; scales; waste receipts; release method; service coverage evidence |
| cp_accept | accept | Presentation, delivery and final accepted mass | Recipient acceptance and package ledger | incoming/accepted/refused live masses; drainage/tare; scales; species/provenance; trip/lot/transfer ids; recipient/location/time; title/invoice time; packages/reuse/return/loss/retirement; delivery legs/support; node-owned fuel/activity; substance-specific factor/method; receiving medium; all destinations | Weigh accepted whole live oysters using calibrated scales, reproducible drainage and separate tare; match physical receipt, dealer ticket and trip record; measure lot-specific bushel/count conversion; audit packages and delivery; reconcile direct operated fuel/activity and substance/medium release evidence | kg; actual delivery/service units | Each dispatch/acceptance and package event | Complete declared reporting period and package asset phases through acceptance | First physical recipient and actual pre-gate route | per 1 kg reference flow | Acceptance receipts; scale/tare/paired-conversion records; package stock audit; service and destination evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | Divide each reconciled node-attributable period exchange by accepted net whole live reference mass of the same complete period; keep native numerator units and disclose attribution before division. | node ledgers; accepted net mass; reviewed attribution | exchange per 1 kg reference flow | |
| `reference_identity` | oysters_accepted | Accepted net reference mass divided by that same accepted net reference mass defines 1 kg; the 1..1 range is normalization identity, not raw yield. Zero accepted output cannot supply a denominator. | cp_accept accepted mass | 1 kg reference output | |
| `balance_transfers` | all internal live transfers | Pair unique transfer dispatch/receipt by lot, time, state and drainage; reconcile discrepancies, stock changes, losses and removed foreign material before normalization. | five node ledgers; transfer ids | reconciled physical network | |
| `conversion_records` | count, bushel, energy and volume records | Derive lot-specific kg from calibrated paired measurements; preserve uncertainty and sampling scope. Convert kWh to MJ with 1 kWh = 3.6 MJ; volume-to-mass requires actual density. | paired calibration records; meters; density | consistent native mass/energy values | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `provenance` | scope | Natural recruitment, species, site/cohort, hand shaft tongs and intervention history must be positively evidenced; uncertain origin blocks selection. | Cohort/site records, harvest logs and intervention history |
| `completeness` | all nodes | Cover complete periods/trips and all intended outputs, returns, failures, support and destinations. Missing quantity is a data gap, never measured zero. | Ledger and physical reconciliation |
| `bounds_identities` | all exchanges | Each symbolic U_row and each expanded U_instance needs independent reviewed quantitative evidence before quantitative finalization; confirm actual concrete identity, support property/unit and destination before final exchange construction. | Range evidence and exact identity compatibility records |
| `shared_periods` | support | Document consuming nodes/outputs, relevant periods, lifetimes/replacement and inclusive service coverage; unknown termination or attribution blocks finalization. | Asset/service register and share audit |
| `live_gate` | reference | Prove live state and physical acceptance separately from cooling, dealer invoicing and legal title; retain calibrated whole net mass and uncertainty. | Inspection and acceptance records |
| `collect_capture_fuel` | `capture`; Inputs; Product flows: Vessel fuel | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Actual purchased fuel consumed on complete attributable trips, including unsuccessful effort and return; specify grade and engine. Do not also charge fuel covered by an inclusive service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Collected fuel stock/receipt balance attributed to this node and divided by accepted reference mass under cp_capture.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional evidence need, not a numerical estimate Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_fuel Unit: kg Basis: per 1 kg reference flow; independently review U_capture_fuel from complete-trip evidence Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_capture_support` | `capture`; Inputs; Product flows: Capture gear and support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual shaft tongs, vessel/shore assets, repairs, lubricants and purchased services into separately measured exchanges. Maintain material kg, service h or other genuine units and property identities independently; this collection supplies no universal support unit. Flow property / unit: Actual material mass or native service property / kg or actual service unit; Amount rule: Recorded attributable resource or service amount per instance under cp_capture; prevent overlap with inclusive service coverage.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent instance evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_support Unit: actual instance unit Basis: per 1 kg reference flow; each instance requires independent U_instance Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_capture_releases` | `capture`; Outputs; Elementary flows: Other direct releases | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual engine pollutants, spills and direct discharges by substance, receiving medium and particle/species basis; broad NOx or particulate reporting never automatically determines a concrete identity. Record gear loss and destination when applicable. Flow property / unit: Actual release property / actual release unit; Amount rule: Document measured activity and substance-specific release method per instance under cp_capture; no zero default for missing evidence.; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_capture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent release evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_capture_releases Unit: actual instance unit Basis: per 1 kg reference flow; independent U_instance by substance and compartment Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_capture`;  |
| `collect_condition_resources` | `condition`; Inputs; Product flows: Preparation resources | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual water, consumables, electricity and services with individual units and supply boundaries. Direct water abstraction belongs to the correct elementary input rather than a fabricated purchased-water exchange. Flow property / unit: Actual instance property / actual instance unit; Amount rule: Metered/invoiced node-owned resources under cp_condition; each actual exchange retains its classification.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_condition` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent resource evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_condition_resources Unit: actual instance unit Basis: per 1 kg reference flow; independent U_instance for each resource Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_condition`;  |
| `collect_condition_water_in` | `condition`; Inputs; Elementary flows: Conditional environmental water intake | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual direct water abstraction for animal preparation activates this card. Preserve seawater/freshwater origin, source compartment, salinity and withdrawal versus consumption; purchased water remains condition_resources, and equipment-only cleaning belongs to its actual owner. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate actual node-owned withdrawal / same-period accepted reference mass under cp_condition; use measured volume/density where applicable.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_condition` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent abstraction evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_condition_water_in Unit: kg Basis: per 1 kg reference flow; independent U_instance per actual water source Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_condition`;  |
| `collect_condition_secondary` | `condition`; Outputs; Product flows: Conditional intended preparation outputs | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only evidenced intended nonreference outputs, including usable recovered water transferred to a technosphere user, activate this card. Enumerate actual product identity, state, destination and physical hand-off; do not reclassify unmanaged residue or loss as product. Flow property / unit: Actual product property / actual product unit; Amount rule: Calculate each actual intended output / same-period accepted reference mass under cp_condition; reconcile its attribution before division.; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_condition` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent intended-output evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_condition_secondary Unit: actual instance unit Basis: per 1 kg reference flow; independent U_instance per intended output Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_condition`;  |
| `collect_condition_waste` | `condition`; Outputs; Waste flows: Preparation residues sent for management | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record removed loose material, mortalities and wastewater only when sent to technosphere waste management, with actual destination. Biological returns remain physical catch/ecological records and require an explicit compatible method and verified identity before any elementary exchange. Actual direct substance/water discharges use condition_water_out and independently classified substance instances, not duplicate waste exchanges. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual collected waste mass by composition, state and destination under cp_condition; classify intended secondary outputs separately when proven.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_condition` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent waste evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_condition_waste Unit: kg Basis: per 1 kg reference flow; independent U_instance by waste stream Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_condition`;  |
| `collect_condition_water_out` | `condition`; Outputs; Elementary flows: Conditional preparation water discharge | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Actual water discharged directly to the environment is distinct from wastewater sent to treatment and usable water transferred as product. Retain water mass, receiving compartment and quality; separately identify pollutant substances without counting their mass again as an additional water volume. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate measured node-owned direct discharge / same-period accepted reference mass under cp_condition; retain makeup, carryover, evaporation and pollutant evidence.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_condition` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent discharge evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_condition_water_out Unit: kg Basis: per 1 kg reference flow; independent U_instance per actual receiving compartment Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_condition`;  |
| `collect_sort_support` | `sort`; Inputs; Product flows: Sorting support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual grading equipment, consumables, cleaning and services by native units. Shared deck/vessel support retains one owner and an evidenced share, rather than a second whole vessel inventory. Flow property / unit: Actual instance property / actual instance unit; Amount rule: Node-owned quantities/shares under cp_sort.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent resource evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sort_support Unit: actual instance unit Basis: per 1 kg reference flow; independent U_instance per exchange Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`;  |
| `collect_sort_live_out` | `sort`; Outputs; Product flows: Sorted live intended grade lots | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Enumerate all intended live grade/destination lots, including downgraded marketed lots, with actual hand-offs. Reference-bound lots transfer internally; other intended grades/species harvested on shared trips remain in the output-set ledger for attribution, not hidden in rejects. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Mass per declared intended output and actual hand-off under cp_sort; reference lot remains an internal transfer until acceptance.; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent intended-output evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sort_live_out Unit: kg Basis: per 1 kg reference flow; independent U_instance by grade/species/destination Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`;  |
| `collect_sort_waste` | `sort`; Outputs; Waste flows: Sorting rejects to management | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Dead, damaged or otherwise rejected material sent to waste management is segregated by actual state/destination. Dead/rejected material is neither automatically a coproduct nor universally forbidden as an evidenced intended secondary output; reclassify actual intended outputs explicitly. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Recorded reject mass by stream under cp_sort.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_sort` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent reject evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sort_waste Unit: kg Basis: per 1 kg reference flow; independent U_instance by reject stream Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_sort`;  |
| `collect_preserve_energy` | `preserve`; Inputs; Product flows: Preservation energy | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Actual electricity or other energy for bounded live preservation; distinguish carrier/provider and record covered support emissions once. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; Amount rule: Metered attributable energy converted to MJ under cp_preserve; do not invent energy for passive holding.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_preserve` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent energy evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_preserve_energy Unit: MJ Basis: per 1 kg reference flow; independent U_instance by energy carrier Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_preserve`;  |
| `collect_preserve_support` | `preserve`; Inputs; Product flows: Preservation media and service | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual ice, water, cooling equipment, refrigerant and purchased live-support services, if present; no mandatory seawater tank, ice regime or oxygen purchase. Direct water abstraction requires an elementary input. Keep service units and coverage genuine. Flow property / unit: Actual instance property / actual instance unit; Amount rule: Actual node-owned inputs under cp_preserve; separately record makeup, recirculation and disposal without counting recirculated stock as fresh supply.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_preserve` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent support evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_preserve_support Unit: actual instance unit Basis: per 1 kg reference flow; independent U_instance per exchange Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_preserve`;  |
| `collect_preserve_water_in` | `preserve`; Inputs; Elementary flows: Conditional environmental preservation water intake | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Only actual direct environmental water withdrawal for live support activates this card. Distinguish makeup from recirculation and purchased media; no seawater tank is mandatory. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Calculate actual node-owned water withdrawal / same-period accepted reference mass under cp_preserve; volume conversion requires actual density.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_preserve` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent preservation abstraction evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_preserve_water_in Unit: kg Basis: per 1 kg reference flow; independent U_instance per actual water source Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_preserve`;  |
| `collect_preserve_secondary` | `preserve`; Outputs; Product flows: Conditional intended preservation outputs | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Enumerate actual intended nonreference products, including usable water transferred to a technosphere recipient, only when positive output status and a hand-off are evidenced. Mortalities remain separately reconciled and are not automatically products. Flow property / unit: Actual product property / actual product unit; Amount rule: Calculate each actual intended output / same-period accepted reference mass under cp_preserve; retain reviewed attribution.; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_preserve` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent preservation intended-output evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_preserve_secondary Unit: actual instance unit Basis: per 1 kg reference flow; independent U_instance per intended output Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_preserve`;  |
| `collect_preserve_waste` | `preserve`; Outputs; Waste flows: Preservation waste | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Actual mortalities, spent media or other waste to management; direct discharge and refrigerant leakage require separately classified elementary exchanges with substance/compartment evidence. An intended secondary output requires positive status/destination evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual waste masses by destination under cp_preserve; record releases separately without duplicate waste accounting.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_preserve` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent waste evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_preserve_waste Unit: kg Basis: per 1 kg reference flow; independent U_instance per waste stream Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_preserve`;  |
| `collect_preserve_releases` | `preserve`; Outputs; Elementary flows: Conditional preservation water and substance releases | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actual direct water discharge and any actual refrigerant or other substance release separately by identity, medium and unit. Water transferred for use and wastewater sent to treatment belong to product and waste outputs respectively; no default zero leakage or mandatory direct discharge is implied. Flow property / unit: Actual release property / actual release unit; Amount rule: Calculate each measured or evidence-reconstructed node-owned release / same-period accepted reference mass under cp_preserve; retain substance-specific method and uncertainty.; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_preserve` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent preservation release evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_preserve_releases Unit: actual instance unit Basis: per 1 kg reference flow; independent U_instance by substance and receiving compartment Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_preserve`;  |
| `collect_accept_pack` | `accept`; Inputs; Product flows: Packaging and presentation materials | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual sacks, containers, labels and replacements by material and reusable/single-use status. Product mass excludes tare; reusable stock requires use-cycle, return, loss, cleaning and retirement records rather than a universal lifetime. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Attributable actual material input under cp_accept; native counts require measured item mass for kg conversion.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_accept` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent packaging evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_accept_pack Unit: kg Basis: per 1 kg reference flow; independent U_instance by material/reuse system Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_accept`;  |
| `collect_accept_support` | `accept`; Inputs; Product flows: Delivery and acceptance support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Pre-gate transport is a separate support responsibility from enclosure/presentation, even within this node. Expand actual delivery, weighing, shore energy, cleaning and services in genuine units; exclude post-acceptance recipient distribution and processing. Flow property / unit: Actual instance property / actual instance unit; Amount rule: Node-owned measured quantities/service units and actual coverage under cp_accept; transport includes attributable empty/return travel.; Value mode: Calculated value (`calculated_value`); Specificity: Route-specific (`route_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_accept` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent support evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_accept_support Unit: actual instance unit Basis: per 1 kg reference flow; independent U_instance per delivery/support exchange Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_accept`;  |
| `collect_accept_pack_out` | `accept`; Outputs; Product flows: Packaging transferred with product | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record package mass and ownership/reuse hand-off separately from oysters. This ancillary transfer is not a shellstock coproduct and receives no second reference-product quantity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual transferred packaging mass under cp_accept; reconcile returnable stock separately.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_accept` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent transferred-package evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_accept_pack_out Unit: kg Basis: per 1 kg reference flow; independent U_instance by package system Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_accept`;  |
| `collect_accept_secondary` | `accept`; Outputs; Product flows: Conditional other intended acceptance-stage outputs | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Actual nonreference intended products and refused live lots transferred to another declared recipient require separate product instances, live/dead state and hand-off. Retained stock is a stock change, not a fabricated product exchange; downstream processes outside the declared gate are excluded. Flow property / unit: Actual product property / actual product unit; Amount rule: Calculate actual destination-specific intended output / same-period accepted reference mass under cp_accept; include it in output-set attribution before normalization.; Value mode: Calculated value (`calculated_value`); Specificity: Product-specific (`product_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_accept` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent acceptance-stage intended-output evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_accept_secondary Unit: actual instance unit Basis: per 1 kg reference flow; independent U_instance per intended destination output Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_accept`;  |
| `collect_accept_waste` | `accept`; Outputs; Waste flows: Acceptance refusals and presentation waste | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record refused/dead product and discarded packaging sent to waste management by actual state/destination. A refused live lot retained or transferred elsewhere is an explicit inventory/destination change, not accepted reference output or automatic waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Actual separately classified waste under cp_accept; retain intended secondary outputs, stock changes and other destinations in reconciliation before allocation.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_accept` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent waste evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_accept_waste Unit: kg Basis: per 1 kg reference flow; independent U_instance by waste identity Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_accept`;  |
| `collect_accept_releases` | `accept`; Outputs; Elementary flows: Conditional direct delivery and acceptance releases | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Actual directly operated pre-gate delivery or shore-support emissions belong to this node, not capture. Expand by pollutant substance and receiving medium; distinguish fossil combustion carbon dioxide from respiration and exclude provider emissions already covered by inclusive services. No fixed UUID is supplied for this conditional collection. Flow property / unit: Actual release property / actual release unit; Amount rule: Actual node-owned fuel/activity and documented substance-specific factor or measured release, attributed and divided by same-period accepted reference mass under cp_accept.; Value mode: Calculated value (`calculated_value`); Specificity: Technology-specific (`technology_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_accept` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional independent delivery release evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_accept_releases Unit: actual instance unit Basis: per 1 kg reference flow; independent U_instance by substance and receiving compartment Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_accept`;  |
| `transport_cargo_scope` | any applicable pre-gate transport, return trip and shared transport service | Collect actual load and distance in the transport service native unit; load includes accompanying water, ice and containers and is not replaced by net reference animal/fish mass. Record actual fuel/service burdens and attribution for loaded, empty-return and zero-output periods. Inclusive transport-service scope excludes duplicate owned fuel, electricity, assets and direct releases; retain return and reusable-container responsibility. | Actual cargo, distance, trip, container and provider-scope records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | scope/reference | Reject incompatible species, origins, gear, seeded/relaid/enhanced or uncertain cohorts and nonlive/processed reference products. Require every qualifier and intervention disclosure. | maryland-oyster-landings; noaa-eastern-oyster |
| `validate_network` | all nodes | Require actual conditional activations/bypasses, real hand-offs, node-owned protocols and one owner per overlapping event. Reconcile full trips, transfers, material/water/tare and all output states before attribution; internal quantities are not fixed to 1 kg. | |
| `validate_attribution` | outputs/assets/services | Require complete intended-output and period sets, reviewed causal attribution when inseparable, reconciled shares and no duplicate inclusive service/direct burden or repeated asset acquisition. Unresolved attribution, replacement/retirement or missing output destination is incomplete. | |
| `validate_mass_identity` | oysters_accepted | Require one final accepted live net whole reference output, paired calibrated volume/count conversions where used and a positive accepted-mass denominator; 1..1 is only the normalization identity. | |
| `validate_evidence` | all exchange instances | Do not finalize without exact UUID/support verification and independently evidenced quantitative bounds. Review actual substance/compartment and service units; no guessed identity, universal yield, kg/bushel, time-temperature rule or automatic environmental credit. | |
| `validate_atomic_completion` | all applicable collection requirements and concrete inventory exchanges | Resolve every applicable section-8 collection requirement into individual physical/chemical exchanges with their own quantities, native units, composition/state, range basis or explicit uncertainty evidence, raw records, normalization, actual destinations/receiving media and verified compatible UUIDs. Any unresolved applicable requirement makes the final dataset incomplete and validation fails; unknown is not zero. Never copy aggregate amounts onto components or duplicate inclusive services with owned fuel/electricity/direct releases. Internal transfers are not fixed to the final 1 kg. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground natural-stock hand-tong harvest-to-acceptance data package with process and lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset within this declared narrower scope |
| allowed_use | Traceable naturally recruited live whole Eastern oysters matching species, site, gear and first physical acceptance gate |
| excluded_use | Farming/enhanced or uncertain cohort routes; other species/gears/geographies; meat yield, shucked/frozen/dead product; recipient depuration/processing; safety certification or automatic ecosystem credits |
| required_metadata | PCR id/version; species/site/cohort and provenance; intervention history; gear; actual process instances/transfers; trips/reporting periods; gate/live state; mass/drainage/tare and conversions; complete outputs; support coverage and allocation |
| required_quality_disclosure | Missing records and uncertainty; range status; concrete identity/support verification; coverage of failed trips and assets; destination and service exclusions; attribution decisions and sensitivities |
| update_trigger | Changed cohort/site enhancement, species/gear/gate, live-support or packaging route, material supplier/service boundary, new quantitative evidence or identity verification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| noaa-eastern-oyster | official_guidance | NOAA Fisheries, Eastern Oyster: Oyster Management and Restoration, https://www.fisheries.noaa.gov/species/eastern-oyster/oyster-management-and-restoration | Species, Chesapeake natural habitat and restoration distinction; no quantitative inventory factors |
| maryland-oyster-landings | official_guidance | Maryland DNR, Maryland Public Fishery Commercial Oyster Landings, updated 2026-08-17, https://dnr.maryland.gov/fisheries/Pages/oysters/comm_landings.aspx | Actual hand-tong fishery and harvest/dealer records; public-bar planting cautions; no universal mass/bushel or inventory factors |
