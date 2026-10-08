---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-ruminants-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other ruminants n.e.c., live

## 1. Scope and Applicability

This PCR covers living, species-qualified residual Ruminantia at actual farm or demonstrably lawful live-capture handover. UN examples include deer, antelopes, serows, gorals, chevrotains and musk deer. Exclude cattle, buffalo, other separately classified bovines, camelids, sheep and goats. An antelope's taxonomic overlap with bovines must be resolved by its actual species, not counted in two categories. A CPC example is never legal authority to capture, breed or trade a protected species. Dead animals, meat, skins, antler products and downstream buyer transport are outside the live reference. No species-free average or universal mass/animal is valid.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-ruminants-n-e-c` |
| classification_refs | CPC 3.0 `02129` |
| covered_products | Living deer, antelopes, serows, gorals, chevrotains, musk deer or other eligible residual ruminants where species and legal source are proven |
| excluded_products | Separately classified bovines, camelids, sheep, goats; dead animals, meat, skins, detached antlers and downstream transport |
| representative_product | 1 kg measured live mass of one declared eligible species at actual handover |
| production_route | Managed breeding/rearing or documented lawful live capture, mutually exclusive per lot |
| market_state | Alive, unprocessed, species and source legally documented |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One species-qualified living residual ruminant at actual handover |
| How much | 1 kg measured live mass, with head count and per-head measurements |
| How well | Alive, declared species, sex/age class, health and acceptance condition, lawful origin |
| How long or cycle | Declare farm cohort/breeding season or capture campaign and shared-service periods |
| reference_flow_link | `live_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species-qualified living residual ruminant |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species/taxon; residual classification; legal source and jurisdiction; route; sex/age class; count; live mass; health; gate; cohort/campaign |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live` | Live reference and transfers | Mass | kg | Weigh living animals at each actual gate and reconcile counts by species and class; never use universal kg/head. |
| `m_period` | Herd, campaign and shared assets | Time | day or declared period | Link inputs, outputs, deaths and shared service to actual cohort, campaign and service period. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Farm: opening herd or purchased stock with species, class, count, mass and prior burden. Capture: documented lawful campaign and source rights without fictional breeding. |
| starting_condition_role | Farm biological stock or upstream Product input; capture source context, not zero-burden purchased stock |
| product_classification_scope | CPC 3.0 `02129` residual living ruminants after species-level exclusions |
| recursive_input_rule | Link purchased same-category live stock to one upstream producer dataset; internal transfers are not second final output. |
| upstream_dataset_requirement | Match purchased animals, feed, water, energy and services by supplier, identity, state, geography and gate; retain capture authorization. |
| disclosure | Species, residual decision, legal source, route, cohort/campaign, count/mass, mortality, products, gate and shared-service periods. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_species` | Every lot | Species identity and legal source are prerequisites; CPC inclusion is not a trade permit. Resolve bovine overlap explicitly. | `un-cpc-2025`; `woah-wildlife-2021` |
| `b_routes` | Farm or capture | Farm includes real breeding/rearing and purchased-stock burden; capture includes authorized campaign, short holding and losses but no invented lifetime farm. Stop at actual live handover. | `fao-deer-farming`; `woah-wildlife-2021` |
| `b_shared` | Shared facilities | Assign fencing, water/handling services to actual consuming nodes and periods once; exclude slaughter and post-gate buyer journey. | `fao-deer-farming`; `woah-transport` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd` | Breed and rear eligible living ruminants | conditional | evidenced managed-farm source | managed biological production | per kg final live output |
| `capture` | Capture and briefly hold eligible living ruminants | conditional | documented lawful source; mutually exclusive with farm | independent capture | per kg final live output |
| `handover` | Select, weigh and hand over living animals | required | actual producer or capture gate | final live acceptance | per kg final live output |

The farm node begins with opening or purchased animals and tracks feed, care, cohort stock change and mortality. Capture begins with real legal rights and a campaign; it never inherits fictional breeding. Handover independently verifies condition, head count, mass and acceptance after either source node. Actual sold antler/velvet, milk, breeding services, usable manure or other products are independent only at documented handover; meat is not produced by live handover. Shared facilities are attributed by actual node and period.

### Process: Breed and rear eligible living ruminants (`herd`)

#### Inputs

##### Product flows

###### Purchased or opening live stock (`herd_stock`)

Purchased animals carry upstream burden; opening animals need cohort and prior-burden disclosure.

Denominator and scope requirements：per kg final live output

- Selected flow: Species-qualified living breeding or young stock
- Flow property / unit: Mass / kg
- Amount rule: weigh by species, class and purchase/opening event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live`
- Range: Provisional non-negative stock screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed and forage supplied to herd (`herd_feed`)

Record species-specific ration and grazing/purchased shares by cohort.

Denominator and scope requirements：per kg final live output

- Selected flow: Actual species-specific feed and forage
- Flow property / unit: Mass / kg
- Amount rule: delivered mass less documented stock change and loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional non-negative feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied herd water (`herd_water`)

Record drinking and cleaning water actually supplied, not rainfall.

Denominator and scope requirements：per kg final live output

- Selected flow: Supplied water
- Flow property / unit: Mass / kg
- Amount rule: meter or reconcile supplied water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional non-negative water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Managed-facility energy (`herd_energy`)

Record actual fuel or electricity used for husbandry, water supply and handling.

Denominator and scope requirements：per kg final live output

- Selected flow: Actual facility energy carrier
- Flow property / unit: Energy or mass / kWh or kg
- Amount rule: meter or reconcile energy by service period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional non-negative energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kWh-equivalent/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living herd animals transferred to selection (`herd_live`)

An internal live transfer, not a second final sale.

Denominator and scope requirements：per kg final live output

- Selected flow: Species-qualified living ruminant
- Flow property / unit: Mass / kg
- Amount rule: weigh live transfer by species and count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live`
- Range: Provisional transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold farm products (`herd_coproduct`)

Conditional umbrella for actual separate antler/velvet, milk, breeding services or other lawful output; expand into concrete identity/unit by foreground records. Never infer a product merely from species.

Denominator and scope requirements：per kg final live output

- Selected flow: Actual separately marketed farm product or service
- Flow property / unit: Product-specific mass, count or service unit
- Amount rule: measure each sold product at its independent gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional independent-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: declared product unit/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Herd mortality carcasses (`herd_mortality`)

Record dead animals by cause, cohort and actual disposal destination; these are not living stock or meat products.

Denominator and scope requirements：per kg final live output

- Selected flow: Herd mortality carcass at actual disposal gate
- Flow property / unit: Mass / kg
- Amount rule: measure carcass disposal mass by cohort and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional non-negative loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded herd manure (`herd_manure`)

Use only manure actually discarded as Waste at its disposal gate; separately sold usable manure is a distinct Product output with its own identity and quantity.

Denominator and scope requirements：per kg final live output

- Selected flow: Discarded manure at actual disposal gate
- Flow property / unit: Mass / kg
- Amount rule: measure discarded manure by cohort and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional non-negative manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Capture and briefly hold eligible living ruminants (`capture`)

#### Inputs

##### Product flows

###### Campaign energy carrier (`capture_energy`)

Actual capture and short holding energy only; no invented farm feeding years.

Denominator and scope requirements：per kg final live output

- Selected flow: Actual capture energy carrier
- Flow property / unit: Energy or mass / kWh or kg
- Amount rule: meter or log actual authorized campaign energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional non-negative campaign screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kWh-equivalent/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water supplied during lawful short holding (`capture_water`)

Include only measured water supplied during actual short holding; record zero only when the campaign has no such holding or supplied-water use and that condition is documented.

Denominator and scope requirements：per kg final live output

- Selected flow: Supplied water for actual live holding
- Flow property / unit: Mass / kg
- Amount rule: meter or document supplied water by capture campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional non-negative holding-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Capture and holding consumables (`capture_supplies`)

Record actual purchased restraint or temporary-holding consumables only where used; documented no-use is zero. Durable shared equipment is assigned through its service ledger, not counted again here.

Denominator and scope requirements：per kg final live output

- Selected flow: Actual capture or holding consumable by material identity
- Flow property / unit: Mass / kg
- Amount rule: record purchased consumable use by campaign and material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional non-negative consumable screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living captured animals transferred to selection (`captured_live`)

Require species, permit, capture campaign and living condition at transfer.

Denominator and scope requirements：per kg final live output

- Selected flow: Species-qualified lawfully captured living ruminant
- Flow property / unit: Mass / kg
- Amount rule: weigh live capture transfers and reconcile head count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live`
- Range: Provisional capture-transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Capture and holding mortality (`capture_loss`)

Actual dead animals have documented lawful disposition, not live reference output.

Denominator and scope requirements：per kg final live output

- Selected flow: Capture mortality carcass at actual disposal gate
- Flow property / unit: Mass / kg
- Amount rule: record death mass by campaign and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional non-negative capture loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Select, weigh and hand over living animals (`handover`)

#### Inputs

##### Product flows

###### Living animals received from one source route (`handover_input`)

Link exactly once to either managed herd or lawful capture, never both for one lot.

Denominator and scope requirements：per kg final live output

- Selected flow: Species-qualified living residual ruminant
- Flow property / unit: Mass / kg
- Amount rule: weigh source transfer and reconcile accepted and rejected heads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live`
- Range: Provisional transfer-reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted living ruminants at actual handover (`live_output`)

The single final reference gate requires species, class, count, mass, condition and legal origin.

Denominator and scope requirements：per kg final live output

Raw reference-output records: measured accepted live mass normalized to 1 kg Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

- Selected flow: Species-qualified living residual ruminant
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live`
- Range: Provisional non-negative final-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg live output
  - Basis: per kg final live output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | Farm and capture | Enumerate each independently sold live animal, antler/velvet, milk, breeding service, usable manure or other real product by identity, amount and handover. Internal transfer, hypothetical output, residue and discarded waste have no product credit; substitution is not a silent default. | `fao-deer-farming` |
| `a_joint` | Joint production | Prefer measured process subdivision. Otherwise disclose a justified physical causal allocation tied to actual output and cohort; if none is defensible, report economic sensitivity with contemporaneous prices. | `fao-deer-farming` |
| `a_period` | Herd cohorts or capture campaign | Link breeding, rearing, replacement, deaths, sold outputs and campaign events to actual period; assign opening/closing stock once and never invent capture-period husbandry. | `fao-deer-farming` |
| `a_shared` | Fencing, water and handling facilities | Record service units, consuming nodes and periods; attribute once by measured use or declared physical proxy, never double charge herd/capture/handover. | `fao-deer-farming` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live` | `herd`; `capture`; `handover` | Live stock and transfers | individual register and weigh ticket | species; sex; age; permit; count; mass; health; source; destination; gate; date | individual identification and calibrated scale; Raw aggregation requirements: sum accepted measured mass at one gate. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | every transfer | whole cohort/campaign | every included site | per reference flow | signed ticket; scale calibration; permit link; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_inputs` | `herd` | Feed, water and energy | invoices, meters and stock ledger | type; quantity; stock change; supplier; node; period | meter and purchase reconciliation; Raw aggregation requirements: assign actual use to cohort/node then normalize. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kWh; m3 | delivery/meter cycle | all operated periods | all managed sites | per reference flow | invoice; meter; allocation ledger; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_capture` | `capture` | Lawful capture inputs | authorization and campaign log | permit; species; jurisdiction; dates; method; fuel; count; survival | permit inspection and campaign records; Raw aggregation requirements: total actual campaign once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kWh; kg; head | each campaign | authorization to handover | authorized capture/holding site | per reference flow | permit; log; weigh ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_outputs` | `herd`; `capture` | Sold outputs and losses | sale and disposal register | identity; quantity; destination; date; mortality; manure; cohort | invoice, scale and disposal record; Raw aggregation requirements: split product, internal stock and waste. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | declared unit | each event | whole cohort/campaign | each node | per reference flow | invoice; disposal manifest; register; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_live` | Final reference | Sum measured accepted live kg at one gate; divide each in-boundary amount by that sum. Reconcile opening/purchased/captured, births, deaths, transfers and closing stock. | `cp_live`; `cp_outputs` | amount per kg accepted living output | `fao-deer-farming` |
| `c_period` | Shared herd and facilities | Assign measured service to actual consuming node and period once; retain joint-output and stock ledger before normalization. | `cp_inputs`; `cp_live`; `cp_outputs` | attributable service per kg live output | `fao-deer-farming` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Every lot | Prove species, residual placement, lawful source/trade and live condition; protected-species trade without authority blocks dataset. | taxonomy record; permit; gate record |
| `dq_mass` | Reference | Measure mass and head count at actual gate; reconcile deaths and stock changes without universal kg/head. | weigh ticket; register |
| `dq_period` | Herd, capture and assets | Cover full cohort/campaign and shared service periods once. | period ledger; invoices; campaign logs |
| `dq_binding` | Final exchanges | Resolve concrete UUID, property and unit group before downstream TIDAS process exchange creation. | detail-read and support-row evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | Every dataset | Reject unidentified species, unresolved bovine overlap, undocumented legal source or dead/post-slaughter reference. CPC examples do not license trade. | `un-cpc-2025`; `woah-wildlife-2021` |
| `v_route` | Farm or capture | Require exactly one source route per lot, actual herd or campaign records and living final gate; capture cannot acquire fictional farm inputs. | `fao-deer-farming`; `woah-wildlife-2021` |
| `v_balance` | Stock and outputs | Reconcile count/mass, births or captures, transfers, mortality, sales and closing stock; internal transfers are not duplicate final output. | `fao-deer-farming` |
| `v_attribution` | Joint outputs, periods and assets | Require actual handover set, explicit allocation, periods and one-time shared-service assignment. | `fao-deer-farming` |
| `v_identity` | All unresolved cards | Keep unconfirmed UUID blank; a final exchange requires compatible concrete identity/property/unit evidence. conditional flow scope alone is not a UUID. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground species-qualified live-ruminant farm or lawful-capture dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after gate-specific review |
| allowed_use | One declared eligible species, route, jurisdiction, live condition and actual handover |
| excluded_use | Species-free average; illegal/undocumented trade; dead animal, meat or later buyer transport |
| required_metadata | Species, residual decision, permits, count/mass, class, route, cohort/campaign, gate, periods, co-products, mortality, allocation and identity evidence |
| required_quality_disclosure | Source legality, measured mass, completeness, unverified identities, allocation and period assumptions |
| update_trigger | Changed species scope, legality, live gate, route, measured basis, source evidence or flow identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [UN CPC Version 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Residual identity and exclusions |
| `fao-deer-farming` | extension_guidance | [FAO deer farming: herd management](https://www.fao.org/4/x6529e/x6529e04.htm) | Cohorts, husbandry, handling and actual-output questions |
| `woah-wildlife-2021` | official_guidance | [WOAH review of wildlife trade, 2021](https://www.woah.org/app/uploads/2022/08/a-oie-review-wildlife-trade-march2021.pdf) | Lawful-source risk questions, not a permit |
| `woah-transport` | official_guidance | [WOAH Terrestrial Code Chapter 7.3](https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en_chapitre_aw_land_transpt.htm) | Live gate and downstream journey distinction |
